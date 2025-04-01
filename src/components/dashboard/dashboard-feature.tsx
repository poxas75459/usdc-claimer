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
    "5NQEJSYwa7YRTuU38XQzW3ELY3baPxJkWrsg8dUxEFMFNzgBGZsTsTEYM6BWjgfZpa8yXwUDUyswYpHdUKiFXdX7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NCHv9WkoZWUb8uopFerw3AVbE81EA7hjaKG5cwZ4MS8yocMmQ3ePDxcyGB7Sk1g4kSDkqfVexnCxMAD9HVc3u5p",
  "key1": "3B2SNEtYyvgu7WxVLcVj6dkmSFQYKpo5UVKeFkfQpyQhY81FdoCTLeh9j9x2pZPXvrrEubrtGEsYsYhvNA5v7dGw",
  "key2": "4iRqX9PB7BPUjoAxnE1XsFnjpaUZ9obM9ANgrQ43uLf5bxNcQnGJSeofHymvhCwgghGZQs8t71oQ3ze9gyta31U5",
  "key3": "RBtT8byQqR9h4CbZmLoKqSh1aFRPJidu8VJpGPYpRBRy1gLNpejc58LYcdYUZw6NnTw5m7evgDwcfuxLTTDLBza",
  "key4": "QRRLtPt1iaEpjYvxLspukg4mGUV18LYwT5mJ88wmZgcbUw39bPuSVtfByniia7s6KT6qdLr9JBrHhhqvbStqvux",
  "key5": "3qA9sr6kTwrER3fxbs6Fk8ZK2P3rXAkBc68tfWokWozWm9YNKvvQRV8CVdBEydtTUigPmDqNJcaUknjGfpvR7uTk",
  "key6": "2ncw4cH1UeYYPjWfgYHFpiHK4bCsUqTGmo4Wt6NBNCJmkEDm3n4siwLnrmhciC5Jw3qQvqswVbHc1pVDPzEvpwXa",
  "key7": "5Y7JcM44JvgsHrz6NWn5h7UMVybE2QvNMT65HQnDvyZaNyu2Gb6AHEqjPtu8A7hTUkKHDqQxvr1Xwqx2oUeLM2mT",
  "key8": "3KHu5EQdrWReH6dZS2yNeoDTGFKPVHCGn6UoL66BFZo8Pw66bLB4mn5DNtB7eK4UimMywZiuoBRsj88RDmHCnAKc",
  "key9": "37jWixkbAR5F1GFHziQTzncD1mnqXUgmVcJ7q5dpwZGzQCBkwk2df29u4kyDmSCufcrpH19NQArhLPw8DwcWsY9A",
  "key10": "4E2V2scZHawZ1tFmJShatv1iJdrmuxLbTpPr8v7HFBJe5MVEsfd1KFZ5AdZDrRMDxv8YwsALseWq8hyaQHMuxUuj",
  "key11": "3JoSLc3awHqwKiraNXziUBokWVt4jnEJRz67Jox1EwrC3E3XVgLzsKJVuDrzf1b9WBUwgQQWqj6kCU1wYsktxYgM",
  "key12": "4Jz81DXaLgGbV8WY1Fwk53X6VmniuTxdBsbcdV5LPAFViqTWq1PVw7SCDh1xZaE9qqMiToNoxjiKUDCmntKXcBRt",
  "key13": "5fj5nStaAvWA1oNUqajGvevcm1rro2uc41MWSWqGaGvV6kAcymcGtUEE7Uc3fCs2dQKPKaCgwLjsBZx2ncVV3M4f",
  "key14": "7zznXAcmEC1m5Rd57VXmoc598gHMcpZe6EENVGJnEsxuJCCWmpnBZDioo3emSaCHV7h4xUTY4aw7EnYBBk3WCaq",
  "key15": "3gK3XwhB5xXvrwfyQB1LcwHs3a5P9BoZHZpmA4mFWRZ1WsXZcbuo3foG8U6HWUFT7PegZ8T32GmxJfMxfvdJwhGD",
  "key16": "3tyM4EqvgMmFWtXnfcLnhnNbh4LRvTKEHA9mHo3JjGo3iTZUq2qbJKvJCCNLcx5dF7hyPc7G62UvyqkCNM2JPZ4r",
  "key17": "3fwfdNZL2CnMYT7Z9tyGR4SyqgWiQVQpehVaFrJjfcx9EdLWKUwjAMKhzek2qA6CffikGJeM3HYb27zC2hQePKdk",
  "key18": "4Ak4Ap6bnGTaHX9reYAV6WMBrozf1qro4eJyFzPoZCGq4CsTcMEuGruZYYgky73MiBsd5b9MYrDmhEnw1S9FStdh",
  "key19": "26zVAy2XGL5zpY6ZcmzTYuK3D75bjygtzZJUd9cEtLksTphVdgcpdJdhGTVDWJ83Y7kNiRQG6iuDarYj3fDMypvw",
  "key20": "21L2oPRf1eAK9qT2mkApNSi1fLMoQiPvYMVAP1SMfMQuP6CTKyeckJKggf3XSxEnYaGy8EoHCBfsxa7fDwUskQUp",
  "key21": "3VrVHPUgTfJkdAXpoVdTo14zR6LSQnGRVUuNjRrZ3tA9Qktk1Seu6vzAtueaDtwwrJ9Tx8LbvGDiwGYU4CtRmqi5",
  "key22": "3ti2NQXHrr5rwpt1RHZhUosGsYougSfNw2h15t6N17VCMXMWc6v8eUCha5rB4sthAhF3XWb1zwyQiqPz4878gz9A",
  "key23": "5q2CA9X6Lvkj4vvcZVRWQtCUvK7NafoJbCqeKq1xKz5QcaWL2Lbpvhdz8pqMwRtrvhqkHQprGcSjjnMtUe3jSgTM",
  "key24": "3UGPUS9Su2Bpi5eSGGnpDc84qZCAWruxLWM2Y16wVGQvRYwkU7L4fFzfwPUHdddm3qDFEwvC9aBnGjdGP8g4LPfW",
  "key25": "4prcoEppqUZqjjJz9Mupg6vpjVwyGV1HvQgBxQtQDmGdVe65CGqcK13AQJhpsbuqVdA9ZcfHhE1QJiWZ2mgHSvZx",
  "key26": "4PU2XDckAu6RTAFek9A3WLEKnRv5oQAMXN33iuGE3ju5BYnsVxgVYavbrmfdLo4L5kgmeCd2RAhSQ4QA4fwfQqS3",
  "key27": "q7LarZJztYryr9EzsbjoP1AKdk6jnTnZ8fYD25JG7aGngWSwawNKY9rW2y4AnjwHhgud8Wvy7JYj5cqyNGC2rBG",
  "key28": "5jRvyuBJ68X9ZrK1ySQybZ8WpZEAXSsdjsCZDbR9hATYDHCfAjgppBuUZz3wup6ToxStA2SgFTtbcd74m2PQTBNb",
  "key29": "3VztnAcZn3nZxbqy7MPMxzkXzCsuPwrbzJVQrSVcVuRTuTRgxwuj87WoauVHoFQ39ADgRweHqGa99Gdd5sCUZens",
  "key30": "2LeqZYRP9PLKC42tCoCX6tmcAmSTEPYztX1Vg8LG3dzmNqfdtd9zG1eg2zPhQaTQT1RBmpKW8w1TQfkp5EFq9Yfo",
  "key31": "29sj4yz3JPL8VKCq1ACL2rAwt1TQfFtqjkR8WPCkWpYPTGyT9oAg8Q4bk5wSQiSFad9dt2Vdav5cw1x4hti7yKSH",
  "key32": "hHchoeTa5ZC5qY6kbsFdmQsnYurq45yYScFGMURhmB4x8nnVVRrevjY7dtXH8wghvZs7pumm36TXpzrHYrTptiQ",
  "key33": "3xefDe7xMZzpeVyUTWkANWzn1d4pKigkZwNYPg4kMC2fNuhEDc251dE59tnHZoKi3qJnBpoWUvFhG3WowJ6srJiD",
  "key34": "5G5AiL3wqFzZdKyxvaPAbhMd5qoEogct1JH3XKygC7qV9McqZ3Yf4qfobNvkPJobXJqLvQKZTfmLWe8PmjXcbNAN",
  "key35": "2aqqn51dBLauNTrxEzxWb38QqK4nCvsiJTCN4DJbSu69BLmw5K55DCkdVQnUK7e5zS7BEMXg23okmpboPXJ4yHQH",
  "key36": "2UmnQxU2XD2cBEN5ksoWqtEMkM4pDndmXP9V8QVRHb2z6yPzcyCHLMeb73gxNJHAu2WhNEFr41oyHXzGYBUBAp56",
  "key37": "5MM1Ck91i2Y8HWUHbVkDxCJMEGyBbVUZSgqkUvsteCsde8T5iVBedKBSjnXaoHp29LmHs95bdBxhaFVVkQoiHauc",
  "key38": "5vRT5wK9YeAdMPXmBcda4BPEcxqACiTmVEtYjoKaAeF3chp2kuRc3KFDcBENMEALr8VAHtFJKFPjjzuorCtBRdJk",
  "key39": "2VNemyZRmntNY9jh2eLRostTq2e5KfzLpdN1wNr9rgdRd2C1Bysiky95RJWGdVhq6Drutvd9NLgbW4nYXrDyXMoQ",
  "key40": "46X6y7VBGcJXYDBz48t1fx69LbqBc1RdGSq2A3eHK4WmMrHwzQETjs8S1ksMgCLpMppm1XzvR8ymYr9Pxvtgi9hK",
  "key41": "2CEWtFw7yNqhiaeavngKPJcuhZu22GynU5VdLNyRzUVJrQW857c9KvbseRRp4MVVmYbtAWpDKgVnkaKmJ7K1GWWt",
  "key42": "38sYGxXCTgbs9NXaPquHJFCa9utK8ZiyEt62HUPUzYvdvzi96QLiNG68j22QsifAR2eRMFBuCFTMc9Nuq3VGbq8G",
  "key43": "bwNx4QGSR17YuATHexNcrgcGys3F3zR11qS36ytNi7npvYeEticBKWRZmYpZ2Nks7wMyAniNgrwC9JENpNmCqAC",
  "key44": "3JVQ6n2PySCyJgC5A5KEF1CKK8WwGRCdSqR8XQQGT2kA5dDLREc9n71qQH8A2WqZb2C52ET4aTP3Z4d81yb99exL",
  "key45": "2Gd3TDBomd6D2sWiZirmcTN76tHxMCQRAJhGsXtUrTfpDQhwMBaRepfdq5foiDeoyDCj5RmKYYsp11o2TejA9EFr",
  "key46": "2pMSHieGgDh6fzTXGitVB4YXiTqAzNU9ozquSzUTJSp7y3G6hyFDe1iVYw4Gw9kJ1Tbz7TM99sVsFezrrw3sRiMn",
  "key47": "4zNCr57z7mGtiqc8CuFh1CrLCWQG1qYtw1eu3JXKLWgAihcFp7jVAGbrYEuX451smm2HVUdL6xzy6pq8oFVRoWRH",
  "key48": "BV437UgupJeaTBgdbmpvYtbrBo2aiS9CeeNJBGDfprwYaD95Sjc3CCzzLo2k8jkuY43C1HSLfzz7R8Uz57jiRqn",
  "key49": "3e6Y4hT3uVTiL7ofJPEsLTRYtv21ZptGYmwKiRkxuEAhmUBhuKMPTHHzPVEWGrM7xyxJ9PohvvJotkvZ6QYkTk1B"
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
