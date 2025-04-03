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
    "2JH3DqS2gQe25gc9KuKpQZeL9rcBwPrnE2kn1zSRksb8seadosLQTbEzzkqxVCg5uHNYPinKDaPPBtkDF6ATA86C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SS7pGwmxFzbyDPBWnoPBDhuJFF11eBbrW3exkpiqnAz4At2HfX5HEU5pVp9ZDMDHHQ3rpERCqpHftvpgXeLUtAL",
  "key1": "3UNHbpb5xqyeXbEFYQSFkgK74cb5QZF9rGtzr1NCYsjWWbwNVmvKiCqKNYTHkVt1z75DKncRadPo1bWAtC9jhdye",
  "key2": "yuZ4i5KqxzX5szdhxyvaNm2CjJoZEpv78ihe456uMqWWfEVYhSSL8twW75d7VkpX4xeGwnxhBMBkbH7iTDYyng2",
  "key3": "3JUmMENbY5jVMryj7jPttEUGH7pULG8Awcij4RZwjMYjSCXJDxYPuAWuoW2jW2y3NaVzffPsynoXCmLKzCz3vYh3",
  "key4": "4iDvdwBC3f6jxJwNMx5GoDgHXjmWZD7iTiJYB1jmvrrN3sDk4XAiZNqk3NmL1vtgkuGhgVpaHwYAsvRSuTFoDj8x",
  "key5": "4UPCdC7UQ1jZMmCpCU8CRHjnwKtA82r593rUpk6t7ib7p9TN8JsFa2s6bMAB78pLRYdH7wgyNUiRpajmcteL5nTc",
  "key6": "5oUB5GTncFgxHjpauH7Vc4u8DQkB8Mwk4pYwK94B8e9b58UWcQBZceMiLQWi7prnfqjJxHuNYuKfDAPjeb7Yuhkq",
  "key7": "ShGvs7qQjjTg3zwNGaophyrJU8LyWQfZNYnvHLUF66BiGz7cfsPg6NmSPPixxwaS82awb9GZtQr4UQ86Zpj9oqF",
  "key8": "2hTrEFx2Dt5yFKpfUNpLnBrepvTmxRauxYXtk36jPPh6pgfVgsJ6RTSprSRbfKBNPzjsTdjNeAob2b2dbCNMU4dV",
  "key9": "4FzsUst9VzGSankMQWBDXnv4cXgiST6bn1VokCwoTDqKbjniBNZptgHZKPJvM8YKBaqY9DTqebRw2MBN48tSxRWj",
  "key10": "2LemNqFFh3XkGUdL1JCyLKqWN4BuoRVaD2qZZPKvH63RkXxJZBQ53jsvdVLxx6dvjyz6dDfVPPqG5YuZMCjv92M5",
  "key11": "2Nczbim97B9U8kEyKffCwaTyVgNeQL89uB9Cq9JLsK1GVgRwWDGkJFtBgfSWAiRKiZLfY341xNsYhHndDNSDngZ4",
  "key12": "64Y8u8Wor8JxcVW4nN6f4hTzHkC8oZr2dqr5w5KmFLEXCsNJ5sq9UZPcLjN3oHL4d72uSWgMeJzRWPHQRDoY5M1S",
  "key13": "3kaPk9f3TGHy7mckFfmEQzBp8LjTY9apdwiqWpqjtM6xpRBZpY1Pfxy24A2i1ueJQ3fYBxT6Yat5btbRh37xMbc6",
  "key14": "4pXHZkzRV2MoLKAvW11sxtW8K3Uf2V4v6M9TGLdKDv6bc5n5PYtDq2FqXyqcvkYKQjyDUJtdwrbRSc3S7o9BaExy",
  "key15": "3jvZKn9DN7d4QKrz7tJQ8RvosMNjkGEwW4wkQSUyoSAeqzUmSuv1QbU3niioSuUuCj48KRxj8mYBNkZriKRYM51W",
  "key16": "2fAcXHiHNhqMfuqnjVSyCt7UEvR2DCrh5MUW56nSgYZVFfCVMqQuSSJXzB3XAy1q3Y5JiBURvXu8kTzYmEc1935T",
  "key17": "5pQxPp4ex9dsiBxGsCccBCo56rwy4Qi2kURqZA7c4UoFMpFhBtDi8iKLuRMJqHSFe65owXLrr88YfTQkDwnaTAiT",
  "key18": "51TLT62g4duNSSqbHS63KTUp3Rcr5j3DZMd2zcDGeMnjEVSnj1y1tbntvZH9AoQZ7oABSWNUvoAhYNFZRKs1vqWX",
  "key19": "2UqvaHFUj9LD68vwE7eytfd1gNaEnjuQCYB7Z7gVDerGggcNAE3jvHMzCdLejkihaCvKZtZm4RWuqMbAYaKLX7Fg",
  "key20": "3228UygxdeU5xvpdMUh4VjmYZ6vc3g2BWc3LjUgqMKRGapfDfH4mTRPGi8oRp6p1Q2A7MqJFM1AhtedjMAmmqaNQ",
  "key21": "5tCKMjaAqTm5sMHAVR83bWbpMar3cXJUiZNSZ7PzAYEzpVSacXTafKhddPG7mCCANuZBZzm9pxqAqpXRFNMxJCwQ",
  "key22": "fjFR7C5ucreZ9c16S5UHywfQYTJZ3E3ApFcig2Q34rejQ8G2gjRnKHDtgdfSYTtwfaBuzhJ9jDj9Z9DmrTA26Bw",
  "key23": "4fqw7i9Sshgn1tH94XB1XrtwJgBNmUmnXPUp97vM6z8ztbTKhQ7dsVApRzZWSpD4aLZEMaF79fguvaY2Du79w6xR",
  "key24": "4Kd5BbeJmyNAtVDbRyUM8s7LsJJYYN2U9VUxhUMuqJ5wTc2y3xBXcVmaG44B3A7JTqh9QbPQ1HHfsWWgzsHmL3qF",
  "key25": "45jMJhFrRTZgJ1tdpoxFSBNoEpWjr33A1KH7D1VS641VAwueJKLJAYba6UYkF3ZmXinjSYUdZUdGgswXY27HwCjB",
  "key26": "5jYbP86tAqcZsBBJQkCJBZuETaENiAzfuaeKzvCbYEpWthhzPNonAcVtN7cj2dhnaw1TqJoHGRVRqevTFzca8sPb",
  "key27": "5raZrxMYM4NscFcQqqb2oQomLteYsSLgpjZn6CZJ33JUKNaxuq3rQv4BQEPxH5vAp34ssXT2wzZB2YSyfkUKh6ZM",
  "key28": "3QtNrr8JtTb5ADe3fiWDT4vVnkt3suGUvrHBVw8NEjbCkBfXQXrbp3VdjvspivsVeY3uhgNVC3rKY9qPxk7rjh5E",
  "key29": "fxfYj6b97YvNuhLaXbYcsSVrhb9krSrrSU9WK3d6f5PhhVueL2PHuwgJoxWRdyxXmZMKk98sDGr2tmcKNsMiXWZ",
  "key30": "3GZqSqzi21eP7YiS2RqEgVEyobQuLihYEEnrAciP9ou9yUY2daNQTrb6nDZsR41gX9UhhJSfrw9ksEZLVatwoog9",
  "key31": "3etLJrzEhYKfuZ4Pmwez2gkbhx1eohxyvhKCFw6APsruDLNh1WLo1bRVYMAxT6Lx3nyDqPEW6KpCf8VU2YzTEHVn",
  "key32": "55Zvuc6VuB5LsrWVFeH2BENW3uhhVX37XNBFjr7zvcZ2THs25Jpm34kLD6xVdjhcxkZz6jN3y3K6HPwx1uFmS1ZP",
  "key33": "3GLCHyJPojfzqYv61rr8fgta8ZK9PbSW5goFQ5vB2nF3P6tcz8RqRUV7CZs9UX4dBbku92LabP6PPiDG9SeZideQ",
  "key34": "5aUJMehA4Z8LtRDxpvWWWqNcvDuoKnHF2dUqsFn6D6eVNrVCkdRV7NmB2gFY9BcWKgkZSDM7QN3Vvm1V6SHGDqR9",
  "key35": "3s3zJb3DctUNgpeG3kUjRguw4EZ8RKwQ1jrv4S1CUvAx6tnLQ4vU49FZKosaRLPArwxeuU3WbicEhY65x4qWFFzj",
  "key36": "3ZRVghnVZ4CK96cdrQjEw6qpR4gcy132XRQbpEKTM8FzqWZayy67yHzYx9sEtS9P8KC2ft8Ugymd2yD8Grq3aarn",
  "key37": "5xDmKWWyNsGbm6Wxz5Ttw8GVr2aUCurj1SS7HDEjonyWiKCdMfVBrs3q7g4tCv8XUPwiUoU89UWN5nq3N5APj94S",
  "key38": "23Nj1SJYN4vhDuhXtGXusrnBHn75onUnTt6PXxmvHaCcNcw5P7apmG1zyrWPcFfbAnPzPdABk4Zjkuc9FQsMPS9C",
  "key39": "2PtpayBuetEtJT6nTBvn65iabPzVMinFVYh1nehy6Ack8brGg4W8hAVFvwBLh1o9aFrPyPYnTxtBoZF2NQLbP9UA",
  "key40": "5hpMNthacMHkf9ePquLpG6QMQ3BAvqGvv3Y3XVskWH4rfvjsqCMeoLnyr7vxENSRcN2jdTfaw5rdFGRLH5ijYVB5",
  "key41": "5CUhGWcbmRk9xZpmax9iwVNSymCBShXbQoAouNrULZT4tKEAHY61iihc9t9Ki1RkBh9t1b7PxUmh2EB1jdgAXvSb",
  "key42": "esFjN1H9fUoAe4Wwp7quUxSDWPnhNX4xxWxvr7vZ82W1a8DAnKTEFnouWhp3c1KwsbNB2RnkypRzV7R9X5Ff6XE",
  "key43": "ugUJqqekJhM83Brct3AP6bnxCovku7mASA6QVxqSARQ1RX269n6fpLZ7xTvcMrHLXpvJRAxVggnon7jZHWECHxT",
  "key44": "47ng3bCdDBFTqv6u1PEDj6VgkhTQy7tHcHhLxfRPeKb2mpJoyGaNVxpvyDztKLRzrEzYpYGxMiVp8VjrG3uq3C2i",
  "key45": "5FLGEr7aGgLZmX5weWkBkSqw5XtAsPkwGoPppssgNXyfjW4VaTLeAmy2hjKpxLRoSxmNJHSdcAb51Bz2AymQJACA",
  "key46": "25twvsNNqMy1KGpSmHsTv8MBBGLkCREWgps2a9ggnma4UbGmebpofhcEYenfkQD6hJqYBCAYgzsndWLTU4TMETdH",
  "key47": "4HE2m7rt2CYAQQuGze7s9qNs6ypxNfWfRewQaQ29vYseLijJMNSyswTsN22g4XWzRgFhkJiCYkAuCvh8ti8yYbyg",
  "key48": "J4mpMZoQtCT7JGrkCYJ2n4gCu8diXziAhpdjYHTUztaz5HhVVYtS2RvcLrBmJwXcZ31aGWpiw7Uoz7a6xa8xvFp",
  "key49": "wHJXpR6jBCQY4D4BdS8WNSEQHARDdp33YU9EwfCBYxAA1qL9L1WxMJPCUP6GsWG98e2boPi38HopiJhX3tUcBb5"
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
