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
    "3zsPA9qg7qJCRsxGUdMy2jiWtACfiHqtSko9AEBFHitk7SeL8vWaQ5efzGpbEapqHkdTFocXUHZNNpUs1eR59qbX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dzJaEjBUFvuDWNy4eNT91Bo9HBcJVU3kwbVTw8DARNND1ZJfSYWbnXYmataeMTo6MP21BLFBGQAV8fmCPtKmzQe",
  "key1": "3BfSRWPSG9yL64edg7bfzK2PhyBgpRyEA4Jmn8xcCt7Qe5ZRj4MwgMtVUbMFChTNNAjmseVPztXdfvvax9f36p2r",
  "key2": "kjvHUjc8YLiPYibdp4PVYBkgNkoWuE1ZAuCaSpntRBBaxAsNsAhaHK3d6dFfXVqgAXSY646EphSs5z3iwbVrMaB",
  "key3": "5jeudA84cUhz6boD4yqtbdUTeVK3LtWKs5KhLYxX61aEjPGg4nhGKXJSNmD1eG3SwuMsc1aP3CPsLrJnVPFucM7u",
  "key4": "44bZsbtwXNyThAZGRHyMYhjwGygcYnNvyHhrJXfZsx9u6cU58N4mTuM2LFCA4GA2y7RUCpC3NmmUuYY32ZaurR77",
  "key5": "2gC2oXNJVv4nmNycGDBE4uXt6yFhTGsLSKGSfY2xAj3vbbsjKBNszaSGGvFiysTpLfxaQz3UZHshpMtKKLHLJmzV",
  "key6": "3kWXpkfgJRpok2WWaoHnY5XZQpQkWuSp54onUcU1AArqLqLeFqAu14aKvzvGeLF3qL1JCJ1k3pfJRefVRsmz5j52",
  "key7": "2LuSL2oMgpSREVmNmjBMHwBhekpYUPRSZCxZRzmvsULbzS2S7U5t8R9TDmte3WGBp9c7NJUbEatSgHWD1ifZxCYm",
  "key8": "4GcGhMmhs3TngqJqZbCrb9MThnrvviXCKV7zFWiGTv5kBmxxAuX6UhUM4usYjzYg1WfJ6PargZhury5PMKTdPox7",
  "key9": "dj3EP2QjdHDqFqRnwr15AZxc1pu6jwHVpVbGwXTT27Zxe1iUSGj2GU1sezTMYFYAmhSgXuyhgD6yqfKdUSm1DRc",
  "key10": "2bLgUj9Krodf8dXmqsjuhPZkY9H4rTWYg6i4VokgfP3Vob8o3r1dXDpTfUFmcSeomDK58xTXWPNCH6kjDsmTgeQv",
  "key11": "3VwLW4niFCHYzZkg3WM8xbBNfiv31w7vDfrGNbZN3R2ZRePWCnHu34xV6UgrT43n2UY2jksp1QVnXvQohdvWZV6p",
  "key12": "3xJC2tCnmyzvwStNj5Fsng7qiN9FCS8L4KjhtVT5EDgua8x4Z4Cmeon5Chv2DEDUTLSroaucmPiGnviVD7fNkoDg",
  "key13": "4DUQ7zammKjAyeyQf5PyKobhAnTT8GmGsHmfKhVvEcYVG88tpj7S6BXWQ7j62o28b85SY1hQ1THHURLttvffrX9T",
  "key14": "2YPwD36cmjkYCjSxAHsxsbJYvynBabF1ZjSQGT4kUDDn2wdCKYuXy5LKRomWWpCrGJ3FXKztvhDKagtkuzXUmNJL",
  "key15": "5EEgGv25deDWihdXWWdQTbArzd7GtE4fQ2S3cFPdXiNDNqZz4a9YCzgWy9ZiTXfkfpfVzawf5TgBMaqVaTWKWvhn",
  "key16": "2Ldq9vbfwnpA8iWYiMCE1o3qDfpWAuiZWDWQXKF9QghVMVNSTfJi24uvhiZ8AQoFLk9be7YsxtATRH5P9TTwzrA7",
  "key17": "2bjgDd3aBawaT3uVrwhHGa2S9PYLaw9mM3raev2heEPaWjK7UpXTvHkeANkJdJSbEpvhacjceBVxtbbvspbVYNHJ",
  "key18": "3iyUf7BJzgCJ58JaM7z2X7v9DciNL9G5VWL5Yf3CknjQ2gY3X1brMBddX62ChcFjVVPMGJaRbJtCrcmQutxcbgN4",
  "key19": "21bXdDgx626At2DsBwdzUwPEkeYKsFZCJQPVN72fDYpa5CMd77h2uma1Mw6Zm1epozyvd6C28pQMH313UHu9eUdM",
  "key20": "4qXjBEPsPY6cGHe5KUT2bWYPF5NXy7LsHLoj9qhgCs8sKMmLwEsziZoh5VE2u2rqGBFKdiKMKGLQbJEv78QE39Km",
  "key21": "5cb4X5KxtLej9HeaeFfgQbP7wu7NqY9iWSGALHoKUN55cksmdV9PQzZMjFMFFFGnyT1U5JDCexTWEyWjRxobk6X",
  "key22": "4KoDyqCDnjZybtqH71LGxb1QAxckqNtvP6DKJC2ZF8SeefuiiVF8YxhTbooBn3KkDuSxYN13jYvrrgypXzXDDVJh",
  "key23": "346av1yaxBDXkqeikzKF4hmjf1ZtdLYwDDE1mGPosppXGR25ARRiCu9mEz3JRVT5eKn3Fhfvz3VpvjrYTNz7jaty",
  "key24": "QLApp6DxYP3PBmngssgfQVGgt61rzTPsKXPaQKHTWQgWbQp5LM51YVpJc37bHK9YpAWb7D359ca147g1bcU5mC9"
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
