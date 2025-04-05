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
    "4KhVhbkZL3nXVeJ4exU373pULWLw4MEfj5HwQh91beYQycqrd7iBPPaJkaTtPbSSqcAxDUha5gfUEauVzjHjWnJH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z4xWtBoL7EoXF2yFqorYeWs8VpbxKxKU8iHKNK3ZZoaCRg5R6EsREmnJYnecv4x4vuDCkYasAnNavX4rbckfssj",
  "key1": "47L2ZbnLxVNmfaenAq65dyTD4QWMNJERw6RhbuHgu2avRPGHZKKjiWjrygwFDpAeA1NFBruqdeRqeohgE59YJifY",
  "key2": "2winSu88h7gQBsFVLSL5WApBKsobxBKDFmjyRHKdpcDpFbmm4eJ9Fyxspp6EenQ2ViX79mPHJ82p65eLU8EWAjGF",
  "key3": "64RLvTvd32osxWf4zgGiPE9aKXKuwzZ5MMVURwWKJHz28VRTgFNDAWGzWD1sWd3t4hMhwkhGSEcfeYUMGAEmWZvS",
  "key4": "3ZW1oG2jMwiCDKNy7rM6fzj4BC1B72JdWKcimMc5J5P9XPQodZAszQFm2b793KXLaJqFJBCJW9ge2NxpFxJa1eh4",
  "key5": "2KfJLyW3fJqdchzG3cRHWnqubUiS7H7iCzwvzsHEZB2Yc8FwqkLpDEmujbhkHLD3x39qT5Y96CuqZ26sw6NAbLhq",
  "key6": "3RCKbuNGzBnfxS7ysh5xo1ypgZK8a5eAbTf1j6L5SrMatWxGBwVp2Sjg8QKLbPQebG5DTnLd1BDFoee74EwRAQTR",
  "key7": "os7kUB9Z8Mhi49izji3K3KmMbb3Co8o3GAtVP4rHJK5W4x9YQhZEXGnPVVJDBfBGuhM7QbSNo4rhyHJVL8YD8WF",
  "key8": "8v5qk7jDuQvP3dfvJXghXPBRQZdG9RGFiHo4QLyhC899wE8K9uqp1tE3PCawtZps8ij3mKkd5WnFhGds2KuDfmB",
  "key9": "5Ggzn2chwvjFxLjm7wk7dc7tq9Bj5zxDBhqFuhQ2W33GrEBAfMsrNF7XLzxCEq7EQRLJEC2RDeo3JrhoUyUYdo21",
  "key10": "2JqJcj2mxNvGNUB7BtkHKtw151M67Jezwdf8TRKcQg1Mv2JZiF4v4yEBmP7HWZnvHfgPLUjhhoVWi4uLGxCcMQmk",
  "key11": "3gjjoeLZRp267bwN1ZPRvPutTt7VcHQSGNsRFG1uK3xU3bhY9fDLcWvcmiwHHS5VKbLwrkN8gz6mQXvLaDMfKVUq",
  "key12": "4mKWgSQjQFfQJ5CCLsb5Z6S5ao93NVn8tJFrSskeVxfKtD1SxC6dr4xSSBzjgduEuU4gTd576e2DLquhp8DwMHJB",
  "key13": "6odf2c1M1AoffFvkLWsfDPn3EPevXrb3NLzVusSPnnxZR5GudR4qYBPB3TcGTsqzuavK1RSuPAB61QZVPrvx7Bz",
  "key14": "23gf2LtEVRhZ9ZTYkXF5V3JG6opNjfE7Fg9d4J8PQx46u52Uwv9iYTSKBymPAsX1qxrffgWbF33WjNXp1yoBsHMq",
  "key15": "5xp4KBBYMUc6mEXKBULickj8BCmZaMSPa1XArkjPPFQY9s3AMxN7BJPtNmZZb4fTN8nMQFYENHjwKjPWSxoBykok",
  "key16": "4JSuk81foWBLJamGMPRgSnrhU69cWEaHDH9WAzFw3xi5SiCLK4NHCZdZwHPzoEEMj4kr6zQPvc7PqyNxrQiD58B3",
  "key17": "3aSPpQmq4oj4c3CMJg82kafQwFgheuQj7Lrx6xu6dFJNPxpMi5frAs97KVLcTpsmE8iX4mGww87EM8DYSAUcTeSV",
  "key18": "29xDgJRwvNViNsaHuboHyKxH2f38Lg9LPqneRmMkRf51CJ3Ad3DpxJYwJ34FiimQ6hHUqLW8g5QskXPC43nGyVqU",
  "key19": "5SQ2jL5aXixZq7GxnrEeKhbagxjgWeHsEZgRUWUwJ9CkjQtaw6WzYDkPcxUJXwdJ16MsczrWUNi8R939b3QZR1zg",
  "key20": "2JqdPxDcNB95KZwqJqaEm8ShcuApK4DfY53rpVAFvckBRy6pzHRRa7omztKCDxWmkfX3cPXtPezqdoahnffX1nbb",
  "key21": "VKQyc5DpYk8pQqexR5GaWHNxNRNR24LaqbtXvPWzAVL4C44vFbW2xjUXW8TpRxdp5N1KJciBTXVtFYe1JNmRGmw",
  "key22": "2cpAuKj7Bxxz87uxja5K1ofTvgSbSHpAL3xNaVJRX2anihGHQvPLH79crdpKyWExiH79mnzASUR5RoAHjqHcjjqC",
  "key23": "3ZfoHZhwCFApmeE8UhGiz1BcnPULkXyh5QcxzZvbP4dG6Dg5MTGZWGCuVV7oHBvcFozUSYLtNVfMEPzaGDMMeeea",
  "key24": "4U1FBbQ15hUsdyvBjjjCdw5qFoRyyLewgwLxrxqvT8XpuYR99nCQjb2PUNHJNxs4HLsXChmxiTinyp68FxDyvfw8",
  "key25": "27Xu3fuRiP8j21ycVQs6h4BrAywoM8MP4bJJ4khTVhRDFHpUySSaUUyFDCHc3vKg9KHeccRZLTvohDEkjgXx9X6t",
  "key26": "4qsM9baeyxgJcrqbKeRNbp8vTUbdeM5YQuS7ifMY8TBHXS96ZaGPDEEcjfvmTMouArGwxZcixm5z2RBTc5PEgEpc",
  "key27": "66JkL2BzRnyDXhFeKdqd91v4ZpZ29jAwhYQkfVscFL5GSJ67VtLhJ4zmCmrbi1a8kAomu2ZWR2WccgwArHysburj",
  "key28": "afPKSW6q7KNGeem29P8JEJtvV5RaRg2AuseEj7gyB7BZ94GWZZERpDHsyDjYgmhohTsrQwZgvk5x5mMe4Akhmpr",
  "key29": "3D54Xh3JqPNNP3NgHQub53XCL9GQzTSRekC8BCnEPvD9WfV654yK2jZPpH4vSMBQKD5opXwpD3zBvA196kcZLQkh",
  "key30": "3yhAw9M18xjUGgqzoGvtRgqguujHzQjoVYBxC2XMKSwvKSPsUJ9Vo1Ecuuyb1UDXn7yvBA8Qcjhu785b8bhsuvbP",
  "key31": "3Ly8RTRd5zJ2DRHdnsMknbs74S46hX8TQEYnhjErR4xv44HvUUN5FW33eDeMs7qJkkMhUboz8ehf7H2oqJnRVGhb"
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
