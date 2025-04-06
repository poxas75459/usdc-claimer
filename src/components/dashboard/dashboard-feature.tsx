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
    "3CPzFSt8zFFL82HZ2SgP2HmF2Y3QER82fdAJ1mDcLXxrZT8pUsCE9v23a2V9gEEbXKigQ6WQs47yPfpoFtHqiedv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pnhzq1Jmtmk7PyMsg4cY9synmWQ7C9c1KsyEzyEKCVeUJLnj2AMEyswnzCe1wLio9pciG8F1j3WQYkS5GWDQYcA",
  "key1": "37iNXCLtppNGLkP3h3ofdobXrZS1eUusxP6QrLrVwYFMqF6hW2NJ2hGPWnocHqj1xoWoMM7fKsCjAYLpU4oca3nL",
  "key2": "2DnRjwfhbmi7wSCVAWiqXHG9tjQMG9vg5nupcQajeL9yoVn6kC32SPv5vBdsh7MQ7DudcuKTVjvXkU9ng2y2fFg4",
  "key3": "45Hox1SSBRgKw2V17mYdmF5HZrzsH6AhFASoaYJGfDKB5NFuryYXMLVMB4dt3MGUTbjrhv5jwJMFvFiSWP81k5jG",
  "key4": "5ddYJMt5ERLtgTY5dnzGxttgyNYvr1fNoctJgFvg1toAcRTXvPiq5o7nK6QhfkpenHXyn5DTCDq2AK7p4itinMCd",
  "key5": "4TDBPwWnhnrRVq4uK1qUTN4rCfgBpsDV5URGUwEtBkf7xJSBGCs4KpbuYvg9vhUdUDAydUxLtFUdhrLDwyaq5W2a",
  "key6": "2vFehSETGrMVKWsEpMMbzTE4TBkxk4ivhrnAGv54yBp7Cm6G8tjUKeyRtj5LsKXicwCf8z9tStWfEsrpdDWC5iJd",
  "key7": "3oNiAUr4TrHNU7TUb9ZotAGeY31grcCWJNeV8XH9na3NbJFHoSoUEwFWeBbZReZKdF5f77MuQsZEa8sbBfNxjuUF",
  "key8": "2UBWtQcPFkds1ekjnsPERyPT9XuzdipRQr8zg3AmqWkzZ4EQh61H3AgxFknCZGpnt8nBjsmsbEznMcCGjYjEeL6C",
  "key9": "2SUYbJnzBEAiDsdGBsqEs1myEwCzXxHwMQJwEpdNqeDdikybb4ijtQurCfXUmorCpETSxon3WYKVrShixzfumGwd",
  "key10": "5ZrP9oD7mVRdBr8gE68mSoQuqTtxbkp18i6reAKKk6CfGhcokFFPi9aoDSAcHtdh2QHnZNtQJ8pGyX1B87RvDWgW",
  "key11": "QRCx719ozdJE4gGrrYKAdv7ZETFHpVdRsjdbukoo5iq2m79Xwyxbrd9RdkBcHL58yf7mmf183o1rVotchTTtbxb",
  "key12": "haVZe8NjcNFpXR4oSRt1AgZhydCBYyZhTXsqzy6adDZEwNg5kWgpiJjaLswcqWzixDkNDnAK51JzsX9Cq1LLbn9",
  "key13": "5Dbw8DW7uhwyfHLnXpcdjHAB1BtiSKExo9EK2Ytu9j1Y7MBp5wwC1A66UjDju8YZxWcEfj98KvHBU2JUJnbvySir",
  "key14": "3V13r9upXQNrB9UrPfS5KDSQc5zRaPWCvYwU7D7ESigvzJb2NY8KHtDgbB89JFHYU2WHWLS5s5DDxjUW9A85it8c",
  "key15": "5cX262M6MkWdCs4mzDhtP2LtF8Lw2tEw12pHG8nn6bbXL7t9KXqBuP5RVn5R5KvSLxHD7FrKei14az9D5PcBqHtb",
  "key16": "34jWi1dVUyRMzj8vnDE4ykwgMpkqiFJPq2wJtfup415A7hf77FYjY4gtxszMqbibSiYQtrJaR8gyuGKbVAKwZR5z",
  "key17": "4aXXFTYZY9zTTdvm9LN43CwQNpVHPzQGo8CuhmZwGFXQSAc2MrkNTkgpRQ2CrjKT7bGZkqPCe5XquQU1s9Qjwupn",
  "key18": "3r7Zgrr7FHDbVB2CZFAi26Z3MgpsRuwgszE5ZRVDgW9UVAr592bH9RFSa72MrqoXvncZncsJpBf8ZuWorRPvvQ71",
  "key19": "67A343RRXs81J6K3NfiVCnWu2CddVBn6UhFDXBb5CnRT2vVrMd5VxC7ECZyAk7ng2x1uRch6p5KfLTkG5YapJBys",
  "key20": "2kxUWqgNLhL7LBpnLEwAYVYbFSGdvbctdroM72baNPkmWUzXES6MCTn3kqgtMFDNWq1raiQtQJVHjym5JkzdRKmk",
  "key21": "3YdEiNhtccNkmYZCXnCiAVhFE14VLrqRvxmK8pK94xMktmqe5Gn9ueiqKRDS76Xnzhf8FvQ7CNyGXUmPAsagDMCf",
  "key22": "58fm6cS8dzCJakQU9VDe94W7NUFqVeQqVRKZHG3qcG2HmJKirWoaf5QF91KjxmtKCZB7ZAq7ecohFFX6Qk5BZvo8",
  "key23": "4zWnmuDxLzGxDAA7MuuCnrAuiWdmuPpkkPH3aEZg4DHW9FkfM6ESEX7gG3AJgGDfsRHAC2kWNvRpC89XE8fHsLUS",
  "key24": "2tbbSKcgWgjeaZaK6c4Z2XvgZr7gbwk1UtYHv1dbit3FNTREN2vtd1roijmugadQC7hvcdms7KhvYjyfqWBFeYb5",
  "key25": "2jk9iRu9MGerdejq2VwmMBEd6KYKF2p2KX8AMmnUmNnCUHPf5RRyjNwxpHpLaKhNCEsCknezwVmepZdXNiLKZ9Y2",
  "key26": "3Zq2v69YWXJNPh9YcJUkCm46Gy9Dgup9Wib9JrKLPSEvfvMbANEBCc1ngUPBrHsEDsQGJuHoATVVCjM9FVXNB3Ry",
  "key27": "4taUteYs9ngcYogcXZBzi4XEyH2np9Fyb2RoWPy2GSUvCyMWr6ZSYjYEk8Jq4vFLdyzRnX4znzgL8u5sdXfujdGr",
  "key28": "5vG1M8Mb1Za8g9ctkLu1RFDAVd1RwB4H9XXBszFUWj8dQ7emiHWVx6dvoykgwY7tzzwcaGhdgVq8yGy4iAUMyEKB",
  "key29": "5GyqVmnWTCqpdNHyGnza7Cgok43GR8h13VcZBcZsoK6rjszcqEyzximfV8e9enxqSTjHXR1K9Qr8zrGJHgZJJdcz",
  "key30": "4VsPGqvhS7XkppifNskNoCrg5t48d3niPPJEU7ChbT9XabQzmucY7Syf9UX2NmQNW9BJ71BgU1R96S6bi7EqKGBd",
  "key31": "25edMphCUN6ow1LzLRmuLF5ghsLh7oDghUgDQRAx8hbfQQSGZ9vunRrEPRV9HcVffASPGF6tMmQeCAM3QhEomQWa",
  "key32": "5RppQeV9SCyD34ewi2wJqbF6jwc6iTQURQNcpZ4hURenSWcYefZKV9ac56kBrbVbhDLKicKGpc7o1HSxvUhZcrUq",
  "key33": "3uHXpEgcrn3PVgCpHQS8BHSeVKKUsEci7HC1qhXXTYtUzH7HratrZWxiWRUAFdchNu7wvmgYwB4HCWN6LQpn5ryX",
  "key34": "56Fzcp372FTfWZs9YFadChcipVtvMFsvwwFDpPNwNNcRtAYGsipWSCwN5BEpbsMTfueCMHcLHhym8JXwnzhLcXpv",
  "key35": "2GsK6qLfEUErK3BqS5ozvwMTHtyV8WqCeowjvfJeyHhtUoNJwTxP5DiLpufuHLFXwen1QrVe7v9hTSumY7Y1FFCV",
  "key36": "3HqaeHq7s2epqeBAYuea9YS4qBzN5V5anc2ubE3hKXJCuVG5jkm23iNKZJfxZ8KWjHAfYoeVmGvdkpTGj23ioRWz",
  "key37": "2znRouAhmodzbWU4eGzLsaP7Vvigu36gnBgLEKb9fA9nijx1kkEcR92WAB8y7tigZJwuexAfdXXrmuBiTPMchD9q",
  "key38": "5AYdM11nJJosdBX7h9pvm1tetEyjxacDPZKrVXBy1CLvWFsKZgSnrRXrYf3BspZ4J7iC7ZBVZMQzdQCqKjEngiZp"
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
