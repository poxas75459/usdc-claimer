/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "44CosGQ5o86hB3uoYjsYuUQbp9Ba68g7w5y9fbFQ5VWQA7jEJCu1Pof3mBPiZ6hLpTKeAHnthDbwDjgqkTaTX8RW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Bxhrd38L4rq4H2itnXdNKdBFJawaF1MFKh27CPjFyFui71bqH2nyjMb3mnbDSmMrSGiqixcbbqJbnFfbDYLrLWJ",
  "key1": "5F6fij1Tv77atLTMYhrJxm26ipdU5zaVxmE1aQWa25hQE8GytuaZJeabzaXBTUvjdU85YAKLXivcM4wVE3ZkYfuE",
  "key2": "4UwJrF9YL9fr2DXbJLCCBkbFynsTrjCNCh6gdez1Q2koabhk11eV9TAgTLraKTEcUQqhi7U6TNJNXk1tF9ufLZVr",
  "key3": "4aLd9SiK8oy2hRvWnn5Hy89XkCEa3StZuvwFjQJySaDLF2sg8FnxjLfWvsBwpLwfh5LovNUc1h51NfBg3voCw1Hd",
  "key4": "4SBsBzR3bibGGnE4d8FF6aLSpQ4nggabVegJ5tnyQH974H1kR549MCPggkevYWXH7FXXEh4XpZhkfaik7P2NWfQd",
  "key5": "JnGpTe5uMAcaJQN7xhpsQcQF24BvTGz44HCdhruW7N7avyMM2jqsP9LzeZDhgXVVZ3K1eNU8FSggrU1vHBjmm3j",
  "key6": "54djJmwjSMTUKvopM1xHUEfnLh4F22Do4utaebjnj6FgqNKcGmybgMchunWM3efrbehLrpF1mfSgA6czy7AqxT4x",
  "key7": "3rEGyYYA4CnMCK5QkhpsEpZLvfxMSaA4dAHBT63iy7rr4UDFYdEWcoBNtjqj9VfLHA6KBE8zZVec9oritvtBkzri",
  "key8": "4VyezPECe4vEb1sLhZmwfQRLnofhhK2eaEEGB22Yq5oXe1gf9nPnPmh4CDZTsRP7eZoa9ZDt5Mz28ssPcKCXjioA",
  "key9": "5maPiHWNJT9qmgADvo1aMADXJ1NxNHGFkcw7iB2P8EAEyzjxr57PvDycvU5Mog4eQNScwajeYzTGtgCTWcN6zR3M",
  "key10": "3qJMYMw6Pp9jznNSY4ShNbgumkHn7LFFxUAHqwxVnohxe24VV9WyYxRfFFTiABFgMJ6La6VzBYevJ47gV6B4G6Th",
  "key11": "ZxhTUTh6kdMw6J61es6Hw9VCbYSbqrWESh3AjvRpD2Aok4NajF4U3B8yX4PBiLuhS8rcW6fqQp9U1MNbTpk3vNM",
  "key12": "WP6vYimBg59etWWMLYinKPCcKkTtUTo1dgNNEX5jxJoygx5mAokaqhifiUnUwGJZgfEpDBbGccyWPT69kZ88czp",
  "key13": "5nbhno1oiw7v9Dbi7XMVk5YPh42Hj6e9Popr7n97FJmkZ13RJJtRo5S6BvESqHXW5AtG3gNZ8P4xQnG5kQiXKBCk",
  "key14": "LhsSCim7wBcr1ju44WrgpfSJkz6ZTPjL9Dw78vZq9DCE8um7Zicsmry7Kth5jGrVgCQMsJ2Bs3Et1YmRVjPRDe4",
  "key15": "5W5QXTb5mx9MxJpEhmdytFbHKUBX51nfJvuKF4AtLAwEapapZs8GM981J5BHJKJoaT9VEaapm4u6ETcwWZnBpEYb",
  "key16": "qxdZseBH4nJ6a7AcGZyYTrdw2iqswjTYZbgeQAi3rRAn7CxuUkCPDbnRqQCXJbvSz1o5JdNoksiiNAgoXPpt8PX",
  "key17": "5wCAqcKHjf1ZYh7iiCuzD9QHrsuu3BCncgCrnQp4gGmdt1qSCLetKWK9qM9r8Awe8fiVj5aJAXnUV5Q9NphGQQEx",
  "key18": "36d3phfTF2ZUjjeNTWynJiNqLmBecfHq1LfXzBFt5Zwe8R5K8MLoEBDesUsArXmp4etJjbDrezBCrRDmANWrkheV",
  "key19": "5GZhKrDYUQc6ujhdGCqY1Eic1XKvQ2CCoVSWE14Lj4sbKMLr2e3Jfnbisf7uf32jUfQMtZoQChGDr4GE9agpVib7",
  "key20": "4oBy95ZRByJLbXDYRHXbFa8bMXkSCgDYPDsRP5BCaxe1xHV4siJVJB1RiXHZr1dCsB5togobPsRpfVMVPogquFDb",
  "key21": "3KNGM7B8TKWoUUnt2TY6sPtYryz5sfwsEQfkAAYPS2VDov3bwzaN5ajn3V1CU3KFk14Mrq5VycbaYPRBRN8SkE6V",
  "key22": "41yLTapTFHsHap8ZbrNZ3DbsYtpuuHxcNyir4BmFkFHcnqYLn9DFQDnfMK4Qi17KVNFBh3jirkLV8apkUtiPERHP",
  "key23": "51ddxerUZ2GA7ZjhpgdkARH4NaU9pJSnfegEcHCoJQJ1hRtEUeQfff33ad1scEcGz6zbMR72bSEAgLndiWjPQRGj",
  "key24": "5Edu9t5iStCXDUoSYZe5S2GiXBegBvaHNArytVAmUuDY3FbbMdJJk3rCRuS8gDcDZQgQ63dCaPDAx1dzSWMQqgBS",
  "key25": "yJKmEWLN4PVkJUMewsqXy1FemfeN1phJDgz7VKxobJdc9hvKBoE28WvNp7bgaG8gS6NS2UfGFRruupKsAdd8AN7",
  "key26": "31ZR1KVTm7DueyoBmeFbucsbGSafnZwrCDgREFdVPyDxU6FK9wDnFY3zkjobneRdHZBYGxkYRqBZSdQVWVziyCGY",
  "key27": "3TonBk4fZdekfx9oA5mNtxNHn1ZJ8PA2K3YkBc15sHvsnA2TnBYqn6xdzPNixBLfXQRy7UehXmrBG4UYxdvcHtUX",
  "key28": "2L23mTNLy5oHwsGuBr6FccZuQcyvrLY5oYHKThBx2icLXaDdEceKWHHsojKSRWgU9unm1sckCY2RvB74q8GWgeJj",
  "key29": "5fC4ev62SkU694mpVEGvTRf9YBX8Tm1NCjiDkhbmYgSBeneijMacGVRpVqxZkgwCyL7b2b71rWaCrLvBxwtiUjfe",
  "key30": "63p2sf9ht9tf8pyZNfzfE2M76yb1qHsj54tG7E1xnHxSZSdzY2R3Vgxe54fXnLAwG9vb5YfLnFQGq4eQ2XLDZYoe",
  "key31": "3czBy6D7JkywygzJ7vbQgsSrHJDqVpWavoBLH7pn8Y7PS5oNAGnsk5zoRy1NicD4WsKPsZARzyKvw9WKVtXaJaPi",
  "key32": "5BNCbGsn9NpLZ5Nf54JnfnkaLvdZ2ivJVV1xCLimbwptpzi58yFhqPyxmmBrodZBz7EAeRLx4NUbuF3jQ4ypufLv",
  "key33": "4h9qkugnCYLWCDZ1Mr8pnQR1c9h2HhEHpCdw1htEdoKj76wLkivhLoiNjo12zBrjP7tmAwjhVA1SCLishR2HegRB",
  "key34": "3mtW8v2jxNtSjGrnnERq7ZmJv8QqkUy6JHXs8vQgSq18uLoMVfPiMR4x1ttDviWpy8vynGMP6fsjQpmmv1z1SGSr",
  "key35": "4VHsWeWLm61bME2iKcF6mpSS7bzNv2GotGARsxHuaYNe2VVYsgGVnc8k4XB7ymtszzLMxNdUUUnyfVfDv4fpmSX4",
  "key36": "3n9s9pAdhf5r6TKwpXcqHGDWUND2HV2AJGL7EFJFK1m2WsUZ6fSozxFak9wvYqVufLm6MtKehWqwXtF2HJ29Wp7S",
  "key37": "3dQ8YJBxStddPGVg1znawduXoie7WdR6KreoL8EEb7NCL8n665corspetSSydwcNf9RG7rbnHtQxuiJ7Kz1XaBxF",
  "key38": "261jtLuWvA92xEkut6GxJFK8T7qRi5EQj9CDQuneCsnGE7tZf5N3ivXN1TDbNU4sS3HpmfBG71g3QhPoHL2LAAzB",
  "key39": "2pBAQ96DB6iDfJZbXGJtPPhyUiytEDmYCkeJZphmXszRLMgU8ki6SfyzVCt2dVfHrFQcPnVx8Bc9M2czoHQtNkhz"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
