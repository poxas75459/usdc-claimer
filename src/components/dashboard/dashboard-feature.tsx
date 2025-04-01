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
    "2wkmTx9wuqYDBTd45vmMJCSrBLAaCm574pjpifGLYYZWqYkdToQyEb9hzbyyqRRDA41crS1Th8jTdWbBUSbg7h7C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NtCheSsVYW761LWjEvqBhNB5x7Uh9TXCjUX7mCUswWJaEg15DuXLBV3iNXeSaS9HkRfV6jHvPb6JCQ8v9zVVFQ4",
  "key1": "4WeNvzmMaXzD1xgF1EUJeZcYfVY1gj3KacyUKQ2UUDGr77c5FtTL23YHCpW5EgHYVAKZu73jATmmgupj3RL4kjcT",
  "key2": "4RHcu97mSzWubcDPxbn2FboicyPnaMgdd3UJbiY5ZXCnfzkDuCoLxeoy2AUTUuyAxPnV4eG9apoaRsNyfqZTcjGC",
  "key3": "58mjfrm2HdANZQoTniJHR5KHToVHQ5rKySSNbfBGPbwHZM127ZG8nTBRkiA1dN2nvTEggJMMGN18tEZSqR2HjT1y",
  "key4": "2VSL5ZAGCtEX6u7opTJhV71NsXLFERiZ2VzjvmmcpBhR744NfH2FEJqNRDQDgrm37FxTPxAz55GbjSmyoM3RvfTX",
  "key5": "3v6xbzB9R3idSZPKYKvD5yPDXVLCwhZKHDwvBbdPWiWZGiGP3bSntfTK4TxHirk7UyXeTqXRT9v3euA1WcBPmQHJ",
  "key6": "45UadkLWpnyPdeMkUoM5MFz1cCizJw1qrNSFMUkyLpS5tMDorf3nqGsdkFEQJ7TRUNX8sqJDDiVC3Mohxka5bae2",
  "key7": "H7peRp1XCLjorck8WqLrUsLJAXqJL1pwWtrUixgiaA6HxU7pLfRPj8weT5u7s2PrvpzoC9dDVhHYiWsMTDwPkVM",
  "key8": "VCAThzj41zesrUgpzDFmv131Nyxv2Ff5SidgsFJAMboJ11pDKNrMsz4tabSBfq5vU7aadjgMENazhkarVcBo3iJ",
  "key9": "4iBmomoicEY9ENbZzJLXL4gWZvTeB9Z9x2i9AkKs1heH6XgQujan5wP9rKXMQmnxbYjekmJkg6S4wPrxF4joXYkk",
  "key10": "2cPa1E8hge9ysNZcTbFnocjL4x3Apq8AE4p3TwTCz7XsJ9BhWuEwr7awsBXFGRR3VfshEQyrjTkcJXAxUQveEvtp",
  "key11": "55ZRmMzPtXxuqrBTAoqLMquWskRYdR5uQA3j9Rf7FgcP5SrDHif5zGMWzjdiVrzvokVYTAN6jwZ3MhVqa7HdE5vj",
  "key12": "v8FgiinavoepUdAPD3wnQ6ki8MPfYDp7fgJfPavcKEja3iDmsmZnHBkntAsUoRhPpdGzYofQspiKUVupCWaP7m2",
  "key13": "zEcZ2FKSTZXARvLCHetXjk6pzbosiX3DZaKVq3mrpqpWkene48HwZnkypNyi46KdCYwK3zNbu3ERc5Sy8u61C7y",
  "key14": "2zD9NqB9SFeCK3FVr4bpvr1V8qzidqYc2rh1xkrvDwszGuTMq5sUTfUEq6vMgfqnCXtvRDWa8aPZULJNGeupE9mt",
  "key15": "4ucxycSAVUtcULnSC7RkMHMBoJ4Q3EZ3f8RkQPXADTHjMPuhbLGYYHvCY8j3NrHMFZLVw7JfTXkzPXr7x5Xppihj",
  "key16": "3qAutdRz3XER4kvG3vWYuKNeCJ5covoWoMZUaZxmdZ3cFLgs3hhhdyW3rpLPRfBKt7mdcbaJKyspWUve8e8BqK8N",
  "key17": "3GNtd5R7zuCpeaurDEJR9m9qU4PzSsNbNKJZtpx7Af149rX7g238UzpL5qQkkwNzWHjmhz2YbMvdvrKKj1vsDgMw",
  "key18": "2bszWYE8tXg36ojb58nRW6cRfSdX3mTewUKMxhzpT98PkbJecBXca1qumaFGiALKSA7avgTNJmy7W5JxTEj29uLN",
  "key19": "4GshzqzR3KNWisxGD8HBZJJjaMHjtefWpPnajWsgUAw3zv1SCmTeqbSTrrGiFK6AirifXfEKKHXPhCiU2TCV4SFc",
  "key20": "2Cft7DHr2wL8grTxKHiNbjhY2Lmn1YcJk1FZdq84UKQJJsb4mu3jjTVpgQNusgi7qUKjD3a6wtVW8oEMZKjhikMZ",
  "key21": "4cBWRPnp8fhx4w63fwe1Bh94J8qpL7pcVsG6i2yYkvVzPLS8VceNRZJc42ZSXdpEN4PqGsfqMZmT8nRv26msdqdw",
  "key22": "5mcFgQK7jLrvT4HBhr6RDxuMPA8VXpX9wsKr5kcnn4Pn1nSb2sUmtJ3afrDrevBh8dCgxNvmLXJBJeVq4KBdZ6vH",
  "key23": "4o8RgjpPnsRrN5tvfHZ5V8CtnUjPuLdzQTFrV1GRGV1mMLMHCwxZ89aq2JKZqV7YfGmDfV1bdM2wfgyLdngv1GBx",
  "key24": "5wkfbtZj52C2o45hL7QSCXr35r9nqK9GdYqAHhQDoLwoDFPMTPF81fPBqT8ndZ2v4SYVmiqfRCwWP3RKvAxMQJmL",
  "key25": "5JwoHCC8QEXpWbVychxKDLZwyMVmfcsWGL9oGBTimG1MVK56vqELcLPkMVdnJQN1wCWeBwriQQrvNnfEfVzCvbeS",
  "key26": "5TqRKmzvqprxM7cPfkpaUusmL37eND6JRdfxhoaULRfybko8iGQv9suZicS2tefUdzAyyke8F1eYBdLCWvd5xD7H",
  "key27": "4btRDk1KfHAC1KV9n8sY4vy8cghKGG85X4Zqe6E6SGov2Ebsrcahy8FyW8xHoqdqEifsXsSDZ3giYw5Ueb9afTix",
  "key28": "5acubSb92fRc2QsLvuNHg9cfLbdPr3UyriCcRLbywqKtsD9ujmRQ3itVz2KT5gdCLhzmvRQwnyPTkMaTpFCrtDNV",
  "key29": "3R1pytQZvNey4tobZ8Q2s6bWMwFzzdS42cZNYxcHSh3wLM42vzotBtMasUDA3mnpDfmiZ5ak5RGe6uFaouFapbMM",
  "key30": "3JiUutbcQn3qon1vuz1Uw8uswc9L1SGjFQt2hhZZX5vd1uyxxt4WNEgA5skRZ1ShKFChLzf97uubW8uCSpBz1gvS",
  "key31": "4nWDQtr96rNK4fNNeV4Qzn2PU3rsNHaWvPFsLNXNbedaWt6Zjt6F7bmwLWnMZzAGP8YAoubByJVtWPtAugTUVciS",
  "key32": "5WppANpzhYbVHjJcRsHGsmdoKBCrELk355oWuEEKUNnebCh3qVQWXwqu5Ezdcfnud2Vuyv4gJLwUmHT74PVHWg7k",
  "key33": "38pLDmguPhW2B5ps4qGwGBzhpZBGj9ikMidZz7WL83XobEAXg3MUfXWNq4Q4mup1HXRoQWociaC2PPpKpZo7sLL8",
  "key34": "3j6Bk4hfWcCiy11Zda2fe9EMbmagoyMSm97qJDytYsJEEhPPauMvzrLf56GvzSGMjdmVo7jDreJqp9nTHJTuBeFc",
  "key35": "4kiMwJnwgZWwtNUVcCLZeSkkTqFG9ouHz9rGjzPTuu6MQqnEaP5MLkN4opimh3FYe9drRCvyRRF1rc8iVrwLwgYE",
  "key36": "3pDQGwfCYJhJ4KuTeZdLhNDtqyQxn2utjVfmfq4jz8kQWpF7veJGGmsdAKYKfFecNPaFTCztuxSUkE27VVPwnaES",
  "key37": "2JpUcDBubSRjpapiSyMeJLswCSLUDFGeg7o6xfxbMefM1T3fvFdYvJe2TxiSDjntaRzZbEUthmcZxx5v4RF9DS45",
  "key38": "3K5yX2vvX9t6HCCfTBeVd4QhWbTUtEedGq1Tm7oi95dunRucLkLj4iYgrbGNNvDvw5nup6DZZNfE92fEtrt9cq7C",
  "key39": "2ovvAHXFTDA45dVjY9rrDj84yRnM6S1mCiqsxE5yuDap7w9gjqY3rb58g9jm1HWDMDXAdjgyaYFB5jv81StALqTK",
  "key40": "4wzokaAov4F9zhXU9de8u7FACXKFNcy5zT3WQbU7cGVGkHJrfqhpxC9imXk32Tt8uyQ7XY2EpjH1z537RXJ8VpuA",
  "key41": "2itwBZ4aywxUwRMDR1F36meCPjtgDcDAkjYjZgrcUS98xZtkjetbagsPc5TYTR2im9dbbTHAfbifYRzr77gWaimG",
  "key42": "4fPkMJ8Am7QgBNL35S3F78x2Y3ftUvktNYccr2vZ9cqucMm9c7e7pPb34sAdBWjf5sTdc9kotty4XuVtX6kgf65Z",
  "key43": "3qmMCWuZdCATtRRbs9vBkwJ8wmbvbw6aQLdjWX1fv1tgjZopvvrNn1YVc8XxuuqwbaPudzLX4kbvHxAaarhjatZQ",
  "key44": "2tHuzaqiN8scNqbAvokNVUCEremAA2SK7GbJwUPWTbaTFQbFFSNssmXEBFcL9G3XxQKu7Y5HQPHA6qtxradDTA3S",
  "key45": "4BNWXfNZMBe5doHx4JkuyMVP7hJ8SmKtfBb8UxkcAR2Xvtga8wpn5VPcjzQZ6huxQ3DDn2KzhsP9rKio1tv5jaUz",
  "key46": "3sZ9z2G5AcptHKcG81vPEyVKdQvQ8jCHypd6vTPtxFPHwQPcFb53z9LdusukQttDX8PXPohpWhqEwA3kXXEzWtJQ",
  "key47": "3y8fm3azG3Xm8beKX1mnr6XEAcHEPwguTaqeiAen3gnE6CtAGEyoWKFLEhb3HG2PRPpXF2aA7rCXPhWi1wbTtb1F",
  "key48": "4qQyzGKMphYWsYd2vXx8g7WhUpZAFJpWA4UFRvhNDAAAFLeyxnKTJgzQqr8P9fJmVgBAEAiDYyYHk2mio2pCqebE",
  "key49": "5dTCVcRqtfXAVpYwYB5EMCGd5XW1w8yF7pCAm6ni3XZiUNszmS3yTSko2NUCSDb53SrT5eFY6qS5zkhv5GW4RWc4"
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
