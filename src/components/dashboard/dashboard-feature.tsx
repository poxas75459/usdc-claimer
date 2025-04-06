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
    "UdDBDst81FW6hQ9VrioyhFhw3HMX9iSDGmC7YKFmQhCQ4psH1fg39R6koqiBxZST9uhmEhXkyPKoSVnw5ZYMd5k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XdmemzPdjAV5GEAkfHW3EvD3UBeaXWDseDF62YrsMsoUDCHXqR3kQTN4c59cmfSW5iafEQMUL5kdkA8pW5UYpq1",
  "key1": "4yx4ZA37htaKYD1rjzUAbiCnCG8ux8rJvPLBqY4PouCbrB3nE6ib827tzwu951CeYwn7wtejWoEecZ6NWt4nexSb",
  "key2": "4AVaYfRp2sFMpntnTU4Z8XrFP2guj4u7WamurNjmC9JF2T9o9Jg6q1FsB2xTvB5n3BLWzZBRnZeVGJDdFSwahHaq",
  "key3": "4Zrnj7UvLgrChgUzrVnjMZR3ib4e8yrckECDjRM3D5TYeFhUn9uGR4KXDsBfSoeQUuTvkPf7zRCm277awgQSXLxJ",
  "key4": "2ScRUWucUVZJ2JLy89p7mqB89NVDS2c6pGeAiDztvAXHwamUtfVgAkFMseMnQDn1Ms8e2bPCDtKrm8yYUDZXphqU",
  "key5": "2k9YnSg7bcx2t72q7FdqowLfqjB6R62hcasBEZ6kN8QUmemBycBdRR5eP8cvD8FnDpHeVHvUJKK19Vsbp6BmMii1",
  "key6": "5pvtp1J5rCThZMVNSy9gvUFf9Zf7JJpUWwj86RNKQHNwSwthGTPZsCZKgQHLJr5jBQ65N2hbXNGGDScPuxC5gcQN",
  "key7": "DAK66DCuJhG8RSR9WhVwrCdHTFgAMY9WWfSrHYQfgLVAoc5cVVK3Xfhxq8nbtjMBfcQ5tDt69uVdcsGfxU43vqn",
  "key8": "ACsRYAKNNofAFd4q9J4ovpMQ7GDYGX4AQWxdCcm8Kjy8kVU3aro57zutdbpcRzr6iDjgVhkfhibdDuBRrQ3Dvxa",
  "key9": "2kH6tfJ1d9JogkMgk156mfY2RosS89yoLPxvsCEL5gxJkdfcADiq1cM3zRNALcHLBq1vVChJnEgbP67xM9wfSLXc",
  "key10": "2VrHuKmhLqQHXsK8ewB6zaHZymcHr4ewymPapszRJPr4KACSAJw8Q3n3EQgSbngUjt36d5MKj7zFZ7f6JY3Txhe",
  "key11": "qPDMLkRob27sYJg9LiWQ5kNzh5V85hpgTxuyZLq7ahgFo9ytVgLF5PcvzHF9vSTSTVGWB2NbyRaNfL5q4n2dJRb",
  "key12": "5beDY7HucEjKYLorETDyHoQ3KWGrPTxbZVmvJvjMgSAgxSruQ8wX5nhcJwsarBc6MtEv5nGqnZtUhAh9ueznKd8N",
  "key13": "2XiN4kc16Hb6oiC3QwsUWbLjdsSudV4sDfZNXoc7MHjErc5s14Q1NzN4zAYzPqY6HnV62ihDLgaXS2BeEdZohyAK",
  "key14": "FxxyQ96ymCTE9DrZscCGtS7sPQdeQnJWDaTcbe73cq5V4Rf8nPAAjtcraTjmpGY8AeHhbQZkCsrgBY8kyNyyvds",
  "key15": "4VWsmPeSyebLGS79E41uio8Pw1F15ZYc7VpSJpQ8Nez4i2uCV1brKxnDHmwwrU5NxSu9oATXVkNSQebfiNyQGLa4",
  "key16": "333gqxJUnwAmc37juhuVs441qayrXa5CNws89vgHtX2v4CdxdfLuSAJ89Yv6rEVRycDk1GDu5HV2cEDqQdDcvZNs",
  "key17": "3WYtUkqj7muWxNudLofQiVAZJK7jfHQRarV3aRouHyEAXdeYkW4iV3P9texhZKe2fFpFT28EXRuLNrwSX6VjG2Yj",
  "key18": "4xfr9WtEjJKTzEnunGBYrB1jL1pTc6CFU47LRVKVycXpbakU9nQ1J7WBM9RDEAi85uzuAGRhx1pchstj8WtB9Pwf",
  "key19": "3sbb4ijHF5KyPTK7zGevjRciN9WhdxBsSRo6aV6hMMkyRsVvxUWFz3qcqT6LHziNxcYeSasbN4CETZvXtmWmmbHa",
  "key20": "4ByLR4CsGLpmdfaidnFgMSEoXt4eu96GKA5oob5kKZgQao8gD7JwqjgqqnSWXQvF57WbXZt6edHSvE1CXejkssfg",
  "key21": "QxQhcRKPBd4ti2UnXgxf5KckqpVcUipLaKwChhQ44DFT3zhwxuGNCHw9RG9W3wKBps7esWQ3WEaxfgdPF7c8LPg",
  "key22": "BLcXneCax2kS2XiWkadvk3ypraaWRRQrj3aLur2x4Qu1neMMvgkN7pfRxUpB2Ww2cLCvDeqvfzbiBTmmGrKsbwA",
  "key23": "2FKNAsDwqcKSFNUWorPpiTtwPxeV4JBCsaFoyhSPqVqjXwWPXjwTvadjAod1zs28kN25qPbfYcSfHGB8w9ZXdNZJ",
  "key24": "3uLNvJWRTgyMgDURoUSVUsi3vA1sb9KvF6fePkoSiYsNFQFiErsUcrEeiMuRaxE1mm1mg6k72hyjoWUJjVCVEcWJ",
  "key25": "25UcnqzKe8qkn7QF93xHpD3Vow9r55Ar3uP9DL1siPbEvNxBbRKBH2KTK5HBkavZZ9jTvHvA4F9haFAuAn49o3dN",
  "key26": "3GZpgiNnnL7Yp9ErwwtauJRuMEKjpfSAJsjrDXANVvwRRDoZYWnoUSgMBH7RXrF6hr5M8TEZv1wsr4TCUDZHv6uS",
  "key27": "2ZjL1MWD6T8WUeiXrnuEc8GikwBKUvBFdWamBxHFDryG4QSGw2L3LALMmUaGDhTC3Y6ezwZaR6gXRDZTzJT6JCWV",
  "key28": "2YW73EXLcbdgVbJKSUq7ormPL5qbyvksHnJpV3ndo75TrRb1aKW4RgdsBXT9MB1RxATVh5Gqh5H4vqNgHiCs5i1v",
  "key29": "2vhHDZd5Cjs1tbi5pzVspLeQu8ThgFzSskLq85WgHVqtijCS3xrpkH4ohgmpejAdEygooMdF1EPNdjFx4RtfRrBs",
  "key30": "46eWWRuFcs1348Y73ud46vJ7ZdojX61VVrKqjnjGxRy7exrq5Rs86B1ZLfZM54aFbtjJEnnyd5oQdLpni72Ri7py",
  "key31": "2p5mSWSTbC5XxdPcRvEzWK7xzk6wK7Eb5HZZHq5beNes2zSq7eKCvQbbbmY9ruKm6RMgUHSwpzXCe7a3SUyDXizk",
  "key32": "5nmphj9gpzPdzbvWRxM1f8y5vjeGagHmpwXmzMiYzznDiPzNtithw7DGWe5WbK7bkf1guhBbmrknT9LAks93wCvn",
  "key33": "3jB9QZ1CN7fdRJK8KeWPTDrCs2z5qBRdaZbPu7ufAQUhgogD5w27qRa3fd4kAD4dsnWMqLLWB8qXDmdpAX7j7ud5",
  "key34": "4dXC5YSqM8BrmCc2W3m5KA7E2tx977u14QggAg8QgocKJw59pYzjNfyG1pQp6uHQ2eYcsxLRCAXCefq8yzy5XV8B",
  "key35": "3jXnMEMywXfoiQ23Di4oaWoE1eGWZ66ULr8wxf8VW9Uo2PYnwbUizkwhQWm8rd7QgQyaFbKAurTUpRBgm2PssKQb",
  "key36": "4QCA1cHz1XdS4qGFPz4iQYFrmM6LdHDa1VBWRqgtzGCKiDB5GNThD7eCpY6sV3M6YRmzKzFCy5Z1rQyaEZD2fkUR",
  "key37": "31Z6GL7GTer5TftJ5kkA4JGHr96kDx8AVAKQRVsaPbsrZngHjXQng94szihdrXcHZGXUtcExqVFm1Qn2RFwz5tvb",
  "key38": "3rEqFs7M4xn8ReoxdYzH7YpsQ498xMKTaCppyTd448CZ8KY3aoqibBDLRXDSCyS8WUWR2x9CYpNfgMrrkk6h53Zx",
  "key39": "WQNyxHynFbmMz77Hd5HSGnjaDH4b5rMFsi7dbMSYFuPG1sycbPu6Lv4i1pPesqHSZDbXsSa6sx9krUyShiaBuSV",
  "key40": "3erdyeQj5QiMjjzHYwd4BbxPcskfi3sUARSwnkr6RMDsoU6bA626nkZkNSQRfdxUR6zUtFtPEj3ETjA6Z7Ntp6ba",
  "key41": "PTaW4HJgaaw9fu8ShEmX5PF8VE11zN2gxN3a3HNKPoziq25QuXBTnuzV7mrztz4ZKNpLKwevddMm7tTvkK3467a",
  "key42": "4KseDf6yts8C2jvcSxJt572T4mDbXvV4zyDs4fB7KZfGYL97o8fBVLnUv5mHPR8mPFf7CRSiy1fDMTk21RMg7ZdU",
  "key43": "3zaAzGZCNeeu4PRBDZmDVL7aKx9skbK6gUvSxzsR7oySntzSdVJ1TYfz8MApa5awD6XWaLi7GxB9umDUb17FwLPd"
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
