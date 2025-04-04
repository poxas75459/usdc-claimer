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
    "58yCTJQniCr4nf8kBh473xrhirNVzxVSRHvGLAVSomdcnpkqkhDteHDAxdM7vJ3RNihASaXKeTr7Nf3VVLPGt6uR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kUBTYPoagy9wqc27R8meB5CDYyJcnGhFxeFSbmXv5C9aakpJzastC89xCFaPYjv5ekksU2ag8UzbGtrsf8qzZtH",
  "key1": "5hfji5pEyGVB1cm99XGsSp2y6UhoLKUNeevrTqmGpFAwSzRicojvix8SxwDg9Md9ZTkdJWcBSC731RXDcfqgth4R",
  "key2": "5ryqjyBzGsfA8NA2HK3s4rWa9uAnQSbKcyLtx4YFeUx5ikwZ52JtcDNrrMbyigsDCMng2p2MMxRqThWmdorYmKEg",
  "key3": "4gNTHn9bXmaMNVhAPUMj8LiNoA9d46DpViytQ6ZTnsot6c1RWgcKDcLXBgrc6sM2EPnoknX34aBJ2tDS98JsQ1XT",
  "key4": "4pkxBBwXvdhqCg4Tr6gPKbLywb7eHXgYN8N4dVDDx7iDuVP4HtE8cSME31Dg1FuZoSE41htpASrqC5qu6kPSQeVa",
  "key5": "2CFufqQnNVU1PqqnfCR2n6BnkwWaB6xnrA4H5GPjvAytGgdpQJBgJQcpKZn4Smimw6y4rN5V78CUphRdZdrc363D",
  "key6": "2DQ5ydjUJM99NfzFQbV7yEDRWsggKnMrQf3yL49V8bGukjhWToFuaZuuuf2GmDkfHJwZCU3d1fhsY665NVvWJn4J",
  "key7": "58zCzHodjehbDMQszZ4Fyj9BXSm2eUsmKAAcoj1EQ9mwoj2pcqqisoFLUQUVavLFadzgMdyXNm19CEpC8hLQL9ZY",
  "key8": "QrX36U1srpX9aud7xzBp5wcoxe3qSwqHCNggeaSXpHpdA5czo6aWiqMZWp6vDKoeuQdxihQHmqdhEQArqiQ9UWj",
  "key9": "54vSeLP8xhLnRwsd7f3GoAMJMmp2qTiQHKfrD16t8BsHEt7mTsbWGL9o496S4boeWNFxie9PNQdAifrFvQY2Uhdq",
  "key10": "27K7gWGshrHgKUEbMUahtKmBEd1jv4vjGPUBsYMfmr51VLVKg95A8ggFt8ay7svGYVHAPLmvmJx6AAeNwVy7D4MN",
  "key11": "4cmYtLyXSfJVa2JpzmFyCNu7Rn7M6fYfqfeHgHVcz3Nh1jxEVT4k7bdEm3wiHHk7EtymonVPQ7CPuAUaL3QAQpmN",
  "key12": "2nJ7zeA46T2mjdqgjVvhxE68R41JsRudqE4wY8mipGWH3i2VvEEG9oCmsj63Ma51P2DPxonfWCKKFMGapWqFomwk",
  "key13": "2ZqiqMhLQ1QyETwxCuW3f47MTAGPkoBb9Eb7Ck46cKbuDhyAQKrJbAEawZR1JLTqqFJkkstaz9Re3vZ273h2tshZ",
  "key14": "4wYLf9Y9hYEnVzEhtBwhRVph1Q5K3cxQkeV9ELfknQevsvveqAp4NBhJZBj9vDiH5i1LadACs9TVLZWwqmwJrXJ6",
  "key15": "217YV7EVu79qxpbTZY8vx96Lajse3Eri15HSxJqfBuK8XuxqG6rPNfTTkAM7urtawSnXDqo78NR7vdqtdM8UJVTD",
  "key16": "3vtANCnXa3Cef6PjoAvunEp15awX7hRMhU2PUKPhMG5w4ezY4cb2dKHFQCjZcWrPsoNehJtLdk9h3ddGrrxG42tM",
  "key17": "4j4avgd8pCRPUsm3rCr5xmS5E2yGoeJ44M6wZwwcPkX5J8nHdSVocGMHa1n9Z7Nkv4vm4Kftv2hxWzkGKerXMbVS",
  "key18": "5dq29W9bJ9VfYgFx5YkfoAUYoqZzcD6xph2gMmsUFqgTtuAdjtPuAertYTwe4i5GWxhJjo1yNrPTBFZCk7YucSv2",
  "key19": "3PYLGFtySfAkH4CqGioyLiXtsEuQHfPdc6pERMNPWJV4SwwPuroatTK6KEEsjxNkTp5nbUVK8uvG9WM3HeiZFBqq",
  "key20": "2HbeqfuhvtPaUQrukJDQXFdibuG3j5hE9encBNs7ukuqaimjkaVzzSqJMKBguXiDQgyEgz35qtCSE49prDfnqYMz",
  "key21": "41zQBca5WnE1Ppf2DuaQ6iEYciacLeqEotazJ5ShfvufBptxV3U4hEW4ZygCXMfAPcZ9zhw7a1UMsJu8eZZt3U9S",
  "key22": "URZPFVKf12ivqCteoBewWSjT9dvJAuivdaM7G3Yybvep1UzH1r751AiJHzStxKjWW2eScc2eU6KbqeMKEjriPmT",
  "key23": "2j7nBHLY1SzQQRmRGchQbMJPktzhRMg8DFD2HxCg6EYC7drSVgiahLgswGy6t92Y7TTJ8Jg1Eb5348GduN3gMjbX",
  "key24": "3w8Qw2qhbjddhKSJp8SHRm3rJTshVqGA7QdmpoZRQsUNg2pGk8ThAvjeHFwXq9Bf6TfAUU3DLgSjtuuETpizKkNK",
  "key25": "4kmY6fAAfFLzNH6P7Ky5PBtTLbxEKiQPrm5j5gUmTa3xwYwN5RtDGAmkjMU8rfn2M22Df8bXbGEPnwoKMjCPCKEv",
  "key26": "4yWLTFH8nATZTDDvHH7cDX1DCSNHmkvugpNM8unYAZyDvLRXre42BTKcWUB7Bth8MNKNVByYZVaTpvccucCLXqks",
  "key27": "5igkuioP2grvRBqC8g8BmFiSdGpZwmv91a9By1p7vTCAgtaCnZVYeEdiobGYLW61ojnFTCBPwZZ6mKpQbatpfP22",
  "key28": "4QTTGWRKmgL7FXWBdqxnz9bPxE91bfCsVEWowW1m8XFJ48xmF5SmEBE9Qm24XFujQNZ3qznyyncgt87HrPMkRTLW",
  "key29": "4idCTVd9JR6ec6reUBt4SeeMjiVFegAEkVLWaV7QYTthxpyp1vyPFXoofVk48s1WC1tPDNUDtWgTj5Q2TizGeU3p",
  "key30": "bygY2SnWmwJZ7yJa11eNYYFAbX3fmzrdnyAGkQBQmMeysMeGJZKqkNbo1wdQF5QLQYgqLnW78BA3i29rQnT2Hoz",
  "key31": "VJLgvZ87bviTSYYVK8MML8spCjL5WuScwiLQ6t82phz8EYw3KTe1Eacn8PUdgF1sr6doH5Z6i6dAPecaERHD4gX",
  "key32": "2v6bSVhL4ZNkCEmzkFDGBG6iRoazTdDqnkzBxx4qCNmyQp9Du2FcWVWpJ1etqe2rZuxZ7CcihjNVycrscbgJHacS",
  "key33": "3E6kng7fo9YD9KodycMVWpSRQeoUXPYnkxMWTQ3y4uzrWeAimx9oBeKhpid9AKKtAbAzu3HAo8KJKBqffCPnHVeZ",
  "key34": "zVmQu6ztZxAZwY7HN7F2bZtZghYQqTLGLoh9WXbCGjDNbSRs7DGpu72xgn3oEaicJczuVtTy7YHgDEV1TDt8WGu",
  "key35": "5Z8oEEqbhg7GuLXYbmHHpo28CrgbC8wVCYvqGUmsHJZ1dwcnpbArFkRwv32z4a9HydgP6mUyCjGinTBv4dL5gQG8",
  "key36": "5Jq8sucYQ7DWz3a8o4cxXLLDatJBaC5QubX5dA2u7Z7Easpv3xwmPXErcrbuCFa7L4zGzwoJjQgQJLwxYBuhtvfZ"
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
