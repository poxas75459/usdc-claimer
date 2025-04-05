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
    "5doNkVoMTmHmXUZcfF8tBVxdT9N2jQgjAS388X58u38ghM7RahspeH3izEBwcv1xxRRbaCBuaVRbHzozCuHHe17T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EhZqtgNF9MinLUYXGSp5bMNw1TEhKFgs7hrg7erNFnCKgPLmqQLiv3aQ9Ptid5B8A89tq7etPHDA6atQ8eSaZny",
  "key1": "3rntRqkgrjyPMwdXXkChEmiSauHjL3x5KrGSSkAtKJ76tcDXGoRHfiJs8eTUWPo2rdwvEYMEZ1WLDezmqBJ1z9oY",
  "key2": "rAUF8cDrodXmx7t2vaXAtSvuhn43auJtLNnPvZ8o8iSPaFYtKqAYjxo2FehqrHBsJKbR7AKhMPT1TDoFMr3PyHE",
  "key3": "5wWQJizmGTCreEt1Wx89jRDe3RESKEAuoQXqZS2Yt7bH1wDZFkjDUPKeRUocaP1km8y8RFWFpDPiviM4RdsRR23s",
  "key4": "42h72QJTd44hnkpASDArZfJ8FBy9dkxETUtMREjwx48yZn2BNRZtFFcEvRUSFEyefLM8NBZ1dUTPQjP8tTRT483o",
  "key5": "5AC4eB4ZnpikbmXJ9GmfWyDJft8kkGvatX7hHMFnJyNiuYbKqQsyNm6awyvbZ4h5po13PmCVkw2MDQyaX6TAY7PG",
  "key6": "2YULKahxhuj8xRm4cogmmLdLDUXHsQpxBdM8XDCdGaVQs5vuduuYS8z7FruPD1KvgBqHaRFJ7z4j9m1YhBEMEcX4",
  "key7": "2sKcpDGeyLrUQ2QYWBXzPRQW8SwMFRXKNnguBnzN1LW1KxGLoLpcEU8XRYcjJQWx2JKUMcpifH8N3vbA84w78eQf",
  "key8": "2vDQqhbey7RAq2XcumpyJ225eSYyCmVDbehPrizR9WDFAYS4V5uSXbDuDRRDgB3nfKbAiwgumdxTAArKNRdpLrsA",
  "key9": "jSQikoZwJ2btaBqLtumhXMsuoHDbyBKUXSZcGWmbhHTM7T7PNUvfM6u963jwFbiS1kCb1ey2WC5TtVVrpzfXEjN",
  "key10": "2oDDcGEtB5vXX56LKFropBnagMbCZCUEdYTV7gWVMd4NQ1cdY2QjsLQLgAEha8UxunsWQJ6ivEXtRmzYopUr68qR",
  "key11": "5VJvSpHDbtszg1zSCF7k5u24EgLvouaLJa2GbSJctqQL9FmwwAySs7E1Mm1mMx8bNNa4kypg2jKwnX5vzhNms51e",
  "key12": "5dZPzM1yCUqf1StF8dBERm4dEWTmMDUmya82kK29EYEAD1kYcxRNFB8PuEa3iwcuLvBNf3fo6MxzsfT6xQBwAgVg",
  "key13": "5WuZvyG1vruhdi84xKLt62DwcKALy6hyzxJGzaBmYpNcDUZHi194xoWhGAsaZEfUKyAEPkBxqTJwZNqis7rLEs3S",
  "key14": "2ySThPNoUeqGnJsCiMjPHaN4TzgHzX3KgpeovyK32iE7MvPX3FPADhuongRH59xVYmDEtK64R8K6asWMccpRQhKo",
  "key15": "2jGBe939UCbXYcMHEXggcNEtRYWRkr3KJTwgd266zasGPTn7Ss1vge5hMgz8EZ83k1qp3M2b56zURKFNP4EVngVY",
  "key16": "2n9nquxKoLVrY9cJnq3ytaRBNcUd2bdym82TMibr5Rxqq5iuvNGknpLKkvYXdZTCct8J5UZunyDjVtqSmm8e39jb",
  "key17": "mMyyVqkuBgAa6ptVFiSjH4eYPqSbBjAtRkhyrAxhjQ7imGGwWAfsn3zqcsXgKdiwDF5i6VS7gJcYvt5Ho23Xrzk",
  "key18": "4DosHk5iNNBnFvtQ4dUdYGrYjvB5r7eegPgjmAqxCXg2TAnZic6ux9fbNgYBzHx1Y93UkA6DXTKqgGCRcSvPttqV",
  "key19": "42iyUUpX25wjo53niFsJd48vLRBzqgjdnhT6r74WYkE8kGxLeRXX36aQDp4QY2YC4KwcycCZJM6y6nVna8DLbqiY",
  "key20": "cLMTPCg7ApLZ4TPfKx7LYRFiqgf9GtCurfZEpvQcU3RebJZHD6PHmU2jG4nVqsKtXCnxwKK2JSvsZhx4uovnAWL",
  "key21": "5k3zGytcCvey5Arkct9TrrVQGigwudG1nRGQTszXid73ZqYPLxQumRtxY5jWKexEnXEHAQafFWWE4Xag4Di7JAG",
  "key22": "2ro33y4GLSyRW51D78R4PeYzZGKL3yphzz4B89XmFSpA3DsRWrLLQ89MU3tXYiowVUyy5LjVV2FAmcN3DYM6azfY",
  "key23": "3HJviLWfhkBRPxcwypSsDKScEhNoksSHMrYEHYef5EVaxzrPSJhQXrxnfX76rSjbVxh2Sw239HDTP87vjphLFjKX",
  "key24": "2qNP2CCPb75dYW5GgGU9b8BMrByFy2jcGdVm31YbpqJUH6Va8LZHr4YjHRREjT6cQTE8yd9tu9rMcMiKJ4uu5gQV"
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
