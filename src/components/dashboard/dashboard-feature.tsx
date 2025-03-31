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
    "48vQrNC9NS3LPCWpScdggeBiUtGsYzk9kA9H3uwGK8WKrEqqP6Y9eVpxrhEtHC8C981xh4HojU9MNeAfSyJgM2NL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j7eCMb9qrEQ5F1KF3Mis1hy2jwXKfbfccmbx1ug8yHANV8939wpLccbgfHbPL8bZghfoarqVZLqpHTKkPP21kFb",
  "key1": "42XHnV2fs3Wp7Dvp21UcrxPhioByFFhjjJLfYVGMdE39RxqC69eGkESGEx4oiYqekpRbQwGrCc7FWUqWbqCTXsCA",
  "key2": "5oRMQvKXkoiWd3MRi5edU95TvP2yFvdoNu7LoME5J5BPHJpLFwFkKQN6QZDDxXmhx848Rwpkg6CCQrysG5CAKE6o",
  "key3": "57AKXYRrXDjDqRGeuWKnpJaXe3Lr74WgyunsDbFBa3HEaCXebvBybz8BcQLARr4o6EMpm3rR4RetktiM4TySh7L3",
  "key4": "2BMhfAFyCiRHTbYmwBtdZBGSzTZZzA6wm1Qr2qf4Fesoosdt2HtTNJHTTUziVohaoFEGqaVqttWFog4RzJJjJJ5H",
  "key5": "3egGL198AChjYHoM9oC1HLNibasWfq2wVV9CmUFT4DYShLp2ZTGoZTLrp56xuUEJXwssB2EXwfT11L4jeWwTLDxh",
  "key6": "62JhVozvsjGiekdLKDXdoSKJ8BxejWJCAAAM3NootwaLym7aBwoEScseCHv8SujYDZX6DirU5jiN7y1bVtLi4Ji8",
  "key7": "4zqs5JhEYbPmxqPYMWye6w8NJoKbqAAoVhhCH5VxyCWGZAHYZLNAX8c4rHMNKqrVNh7S1z89mvdkWxTaWoXzdaTt",
  "key8": "4gJWxaWEJrkh1eknaesqxJWFw77v3zZcZE9rMqMGZ8j3tyNAAvvvGyCDsUoJLyLq8xjyi8tFFBxCq53F3CLsN165",
  "key9": "44Lebh8r9zcYx98t3Gb6HqoBKDUtBTnVjNPfKKheydZrmKitWkAoZSbungVxkFD9rBnt476yBthZYBYRw9jrPq7",
  "key10": "3G6z6bMseQoXZueKVE6gJgufCyWSS3YHi5Wx8YKPrF9QBWqZm62nTLCTuqLf8Cu4jWv5g9FNvFnubDgzuSXUe69y",
  "key11": "41vbWnj2UesqPiSrwLnDtpwDXF6WHXwhM95SQWgKmUzdrjWKnFUtyg2JUmv3FrDECH1DDK9zPVoY5TL8qNitV7D1",
  "key12": "4mFfwbGYdyJSskwXyBu3Uz4Twy7SLTtakgueaXHSpKCxyPBtqezBXgJxfkLkojtsJLKNU9Pj376rvUBuahMEmtRg",
  "key13": "3zKtu5VRKxuQRPN1RMvZjpVTWsL3SpiGkUsBwzBrDfWjQsp3S1AKZEuYW9yBk24oPwNvcv9AQ6WfL3w8KkvgTHfV",
  "key14": "4tWAgyhdSd5VevZwSdqPhfTJsjN38vqkwhvZMMxLVfNH4fTaYwQ1LMyQVdLrMU4PBrgEmHBqNc5xTcMXQS4VPwZx",
  "key15": "4pgVVwocEZPVZaRgGq5PeF2P1Vkwww4ubzJq1djrSSHZQiaNtCiU7JA7zUgqxnEtfP6JRJ1fuqhdeDqxzJDTZoqa",
  "key16": "3U5fxaw8XmGsiF8unLxyanPeEcKpzKiWPgfsRxHU9z7GQvJHnost6pEuLK5dJ7jc8umAUFtqNxm7z1ApoFT3vCQS",
  "key17": "3Siy9ZUFcLzxDXNyH6y2rLNvfGbzQKenFVGK4W3kb9EYwxXimwUGkQRnopFss2rHqTGorrbRL8FyYxLB4pcpuKZF",
  "key18": "3vXPdoywRUqfMV7sfnn8e9GZoY9CBT1ZMYwRaSckvXZebUiBiaMih43eGFYKRBuieAjvBjaL3LFWBL9nqgyAfuEn",
  "key19": "3CLJW2YpiZsqcRWnX4CHjUTLMrLarim1fH5hMTKoEZCBshRAhzBBVtxvehGeAsqk9SfRoaYArD5BWxNyqdcSFNhe",
  "key20": "2CQy5gNZh1oLUFvGnvJFkz8yW6rha12uKEtRmAfQLmjQLVBtEWja2bVGCyfXYceMKeKc6i1oqEMiqDJEWW4bsd4k",
  "key21": "2z1ErGZNqWY6dJXfZ12m4uWPn7eBfxMViEqUXqUXMatHjZ6LGBgC62AvSqads692M1CUoDf9A3aVDuW8dZDSxNPB",
  "key22": "4N5PFA7aUMS4iohyVR55WGjWgBezWCFEJE1YncgYncR4T49cNoip7nLa3wNXaAh2aCX6eWg1DjJZNQD9exAMfum9",
  "key23": "2h5jyiip2Cv4tR3CnTEELaHjJgPUjzhw9JntipdVK5WBkCPe3Bnr7GNpbLxkUV2Q24bVcbfaenP5GGiYfuWo2dRy",
  "key24": "57jnu8gDJmhsX7P3y2y4wG8KBwdaTr7cKF1JZVCquLdcfMMxS5iJUPyiZSsmQ13hZs7QcYR89LaXpZMJLHC8aBae",
  "key25": "3MDEzVhWugdkg4xFSN3YJVGyovmRS4qBcC7K3vXQN6UrDBBpBkX1X9MUSjVeQjATZcFzGeeU9Kunh5gsAJpARJAr",
  "key26": "4ziQ19ypkEzEypq9UpeVC1bSxi3gCaDoWxefAvwnbyNMPcDHb6bq5rrXeu9YaE6HXWbzP53tDbYZAxgPGz4XVs79",
  "key27": "CoZ52Vq8zJaJEFtAzZoWNntBC6okNBAbwXxveFZ82FVBUzec8v4riXJwBMUkU14H5FqFxU44azFN3mYGQHsASzF",
  "key28": "2DmwZAQPEiLk4JzGLt6tacRca1Ji2iHft6sW4UeEc18fv3vBKd1bRjyRoXi3gmV9maD8rVXVnEVHWQDJNTEmTv34",
  "key29": "3do7qA27UtDNefAqLMup9woHshy7vnVbEGHEhmHQBjJtd4WGVeYdieSBb216xE2jrFAScnkWu6wm6qL1pGcG3286",
  "key30": "39idgvN7oAtM3Yybr9YwvPARMwHTjZqknbJCVBRnG32wUbKxnZVFsNWPHPzXKVc1X48FiSP6xzZjker9uDWBNvtg",
  "key31": "MpeLRA8NACfcFBN8Z242DVDgS8KePstsPqcXk9GL3CKyYqkBsmHW3oEV8zoBBvswqwooNY8gBxstLYmLFQW2VCa",
  "key32": "4egVRo6eXsBBT8qzpWVrJrzz7gdorChL8KXYLkzABzqgwXwVofdNTxaq1pKW4MhEDswRPYjTChNBwGeWJmQVuftP",
  "key33": "48hkTmr7yKF8Sq98WQCYH7W1iuHZtLKn3V9SQqBuDr92kmDdwteosZVgcJSksvJDBgnxvUCRqdwnArAFm2KbWs6b",
  "key34": "48JFSTgMEzcH7kB7jKnzPFuLZ4VWrdEEkQ6VP7P7HtCHKTUgJk8Pw7s7QdUeb8weDhixX6AGCSSVtCdqguUJ8TTY",
  "key35": "4N2V3QxKVJfxzuTQ12pBGc9vd3SByaS3use2xSqwj3z1hTThCv2SswDHNWT3Be2QH9UTad9aP8Yi5QLpwkoJ8sUF",
  "key36": "4APJZ8qpUDDHsm2rNiC1HzHUdBL5f1aKjxiUDzo2PMhThvgs2BpoMamaKb5Qi4gQB9eX12ckzsRcJsEKmh6cPhXG",
  "key37": "55E4R3qDr7saLvUGv3YPdi24pLN84nCvAGaTm4WcDzq6MSAA9AwQx28swhxW9TK4YYBrwmyck5tZYo7c2rRVqRR4",
  "key38": "2GuZzaXNW9mQCfkoV28zA5rFjfXqN5bEyQ5buS1UHxY1uYARFtCRBCVWuUfthhz4dWe6jJtM1jpXJBmQcH2w3LsA",
  "key39": "3LH7pkHVds4XPjp5JsXShgKdV7hqwkjVKGrsHMGFkwEtfdBte26pdxdKqSekRZhikon7BFgEteoTYxKiREHHtt2X",
  "key40": "cWbCVHpPSKfT2cTx8xLJ3nR31XHcq98PCopQXYX6CondEak8qXmCnwexfnz45zycBrzxa17XtJmJaZ5YmM9L3yd",
  "key41": "5Qy74vWkpXuL4xcLHy2oVfRmT55PiraU6e7dhE53YkgToJaTtFMjbnqC6YqeGC9PecxJfLiMyJWhfQxpbhkwRSM",
  "key42": "4x47HkboK7SonsTTnJSPfC1fqssHKqRxBqbHe3uGVL8gE8E7CWje4qLPjq4E4KyXgSioAnqe9fAsV5jbyteanKgq",
  "key43": "2x62ovvV4RQnVnXwts9e6QpXgtuiba1zc8tUnAn1vnd9XK2wJ7ySfv2fa9bF5SyQHhM1yxeV8W5NQgn3XpvaT4yc",
  "key44": "21JnTJEC52DKPeKbqrF1WyjC5ojQQ6NdNddyfvdXDUz1jdDPers87SeoKt3iaGKiKnQ7t7ZAvGE63oMmw8dPqGbF",
  "key45": "K2qbuzVmHXmUJKNh4qjovLpN2DHfebJWEjWkunoY89gErL4HHwYtaKfB3Sv3MRYaSqkWvLJRELHH2k3zxFDv5GL",
  "key46": "3tchWSBttXWHKLHtUpvbyZqE1H89QPwfpJGU8JaYoDBGQhR2zCRnYMC8FifWYvvDvYc9bn4fm1iDKNEy9hKwbKMr",
  "key47": "iyTAeNdyqQjYtnQSrvDNiNa75iELqxr1AcTYwoVuKsoTtaSBR6LC6AnzCdvSTozm6aNJgdhJLrhAdTHXkGbKRpS"
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
