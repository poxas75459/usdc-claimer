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
    "3FKjf9KTsmHp1aDtVskhNR6ACMLeMfMVwbcCDn1ZF8xtGtFGRSzt7smEdM2xRe8TYJ3pMuYcPzNoDhYtpth15BiG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V81EwMaVeNuE9T8nfQNgQfyxrBJKV6yc8RFauHwRBArWzk4Z5Uedow2jTYbNWSgyVc9SBj6sQTBhj2tWWiPcutM",
  "key1": "25qx7khmnWScLTr77wD5z3wrVXomXxXf3ydrmE5DXAf7KohzHZWfCo9JqDWAYef1uiPNXc4NUnNi2tw1X2gMyUBg",
  "key2": "2LpoyGx99t9u1av6SqAGmKPRHdhbgR4kRautJtj8diXbvRLkEF93DTwdkPCkXYFq1DHibdvpyPex7tsS1Nc78s17",
  "key3": "2Npku2ckm2CKtgTzG7BHY1dZZ8fVQAHYnRbAcyFWdJL1NeoaWwKLpstMvhoC2HLTs4yZ1yEovhjFLSyHu6kgSLVM",
  "key4": "4wHYgvLLFs9r8n6NeNkiVK15GoiGaojwYTtG7hmCStg12Q6BgnKhdUUshfBFrPxHBrPS66cBcXNDomhGMFyZbPCK",
  "key5": "46aJZ8CWWuBg4NcnQDLwU8UWBpGVGSJHWkHRLVr5dg3cMLoJdN9Mrzz4BKqn9EqtbPTauXxScWRRy6E16HnjhSus",
  "key6": "4JfAeVtxQ2irRU8KimyDLb5W1DCmEzYvVsdjbhrm23oeyN8sM19yFQG4cmmyUnUo971X3PMW8B9MYggZM4X1XZ6r",
  "key7": "5fYxujK2K15qTgyu2BioyCREk5cdT9K5awqVASGtZSRyrcUJrJYRiT6gvjjePpfZwtkhwtRprKPa1hH3UjDEUW8X",
  "key8": "PqxxopmtFcCtaXNjd4PTDw6yHBn6EnpULxe2BdKFrujp9a71uDxbTQ2qRFx2fitxscNjAKrLjKmNuJ99RGRYpkH",
  "key9": "2LVKugdNKSTNFAMpuRrSxsDiWnKeqUWbteFXPJUkzTN1i3QiA7yVXCEcGKfjG4rrimf275ihrMSgJVBaGMUW5fCz",
  "key10": "2cm4jkQv3GGNu4umj8yfyujStgtAZwtoqsphGv2rv3bWAttHF3iMT7jdZqa5EdMsJU2snGScN1mgaexXjTiXDxgB",
  "key11": "4gC9EdwFzP8U8bxJ5duWmmCKk1f4rX7v9Gr3t83FXCLj6PEvW3ncTg76kpnutiDP4wrJa3rVt4eur85VNed7sbD5",
  "key12": "218MuHCvp7QUPxjAX32zKSd1t2g2eTXMePbTWzdQjFMSbe3hanTGYDTovrSRM7CBHjbqoB6UYZc9DUxzdi9odmVM",
  "key13": "2EPECx85DXdC4HhZGosPkN6s6vLb4JzeB4ts7mAoVyLWK4q9UFjMCXP2eQgWFLXbpL6rpCJW5RtWPqdCe4pN13Lq",
  "key14": "vord7dAwUTYH6H4tCoRBCY4tM6hPXwxgukaZD1Dpg65AnegNDZ8woGCdk5Y7cAd4Tpf5tTCW49nrv5W7EWih8Ve",
  "key15": "63xVXBGCgctpYRR3vK8GVaor7sospcvUcbRoJEwkj2w3GgWfwT388ERN7WiYfFPK7kpvzABqsGfC3JorivTCmikA",
  "key16": "5KjUmJwNTs8Et9Eaf7AA4tThLZ3PK7WfJ2KXKmfS6UAkG9DDd713XMKttUcDpLVuF3NvHzf4L4Js5VKvLueGwWSh",
  "key17": "3K22SAbKZqkZHpqqgfS4JCczaVS39u2oUkpNjXHkGAovEpEYRQo6ng9Nb4YUeMtP5KNHx4tBwpXPG8doy5SdYYY3",
  "key18": "5GtyXdFYgz2uqmhedkaSuUwhY3FVBDmThpmJ6hS7PtCLRETfe3g7VNtRPbBUqNLzRRzs3CvE1E7WXHSoTLuJ1PW5",
  "key19": "2TnrLW1C6E5EqPjbuTLz3dA7YdJju7qeAYNBvNwTYmMcpmYhLkdySkwxDMHSi1YHk5N3v6DnJmQYZRmQDsuszyts",
  "key20": "4DwddFar3xVahAatVGaPnBEeizBfHQKEXKsgFLEk9jVXZqFXe4Ex9gXH4CoL7dsS2q6H31rQqJ4FHzS5Z32zKDsE",
  "key21": "QUfEDLcoU3b3vYGjDraj9K5NovL72YRWQVcGj1bib7UV3524PErn9hgmq7j9nfUSNRiCA1EiuUbJ7LjMREJedTH",
  "key22": "3fz4UUFh7c2tW1bUidJ9sELkHnvh9T7MKE1QTv8L35aBdeJjViRhzHHzXeJRFoUaUbcHkKaanBzk7fyNiogBmEYY",
  "key23": "3L872zW7AZRFHES4AbLgFomZtBoD5oRgafAk8CUy826Jm7rGtNsMz1oR7wKeTefhfyKPcz7JVTL8saeddSXKH2zV",
  "key24": "5fTWHbqhXK97BRoqTLeqnWMExfbAEjErgcrKmyrgWTWSWvgVTD7V3ELMoDT5vi6r7jk1G4ozu51tbfFtbxgGhBSY",
  "key25": "4JXJ5tRbtKgjGJFfQMzww59njP8La9dytFjY6dwCmAN7dx5ZxRwmjBGGLWNCzApFm617cxx25r2VyZSKPiPwr3dX",
  "key26": "2hRh7iPyPZfRMvmSon2UWKqhHBMTtJdaPMT986jpiK4Z85Yxqj1SwxLYGJSxFSD1ys5JDpD9aMwqgsXkdqBpTQqX",
  "key27": "2C8iNeREQ2bTvLQ1mVvkYkPCt9NzRsxZCGZwkeo8WW9PePtJYiJd9MbEk3i3hN73NHHr2YgkEJRVP4yhUndFDE4Z",
  "key28": "2FcThEiTtNBkmSZR3mzqTyWYq2kiPXfjFe8QWoszkLby72T4SHH5p6QkhjG6Ye83T44LZBcBkx8TdCfHhU3cR8EA",
  "key29": "tVNwc7jMhS9f3hbrn84Jq2xKnvSmmqAqGJ1dXonbGPuYGrQp9gWTMshrMJzWAXo4AP3zH8tUAbaVQwgDXDKrtrc",
  "key30": "4uF9EQi2Ftza4MNtpMCvKK8fXRPe4R9aJFBoFJk2HT4Sznqow4YFX8uJsSQcLMXzwjZcTnVKs1QJXL2NYwg91F78",
  "key31": "4mhkCiGNQbF8q7iuAbjSPRZWRnDozk9AKKQU12EzXCPrnqVauRDNTmP7vsGrDdS7n58PUdhNEuw6VaDLxTszWBFR",
  "key32": "4HhzPRVCNKjieSST5TzDE8bzmRdWW7cbZ4zNUjkRqwcH5KTqdP26CwRmtX1b1tR22txhte5WsVZqefwQMWaEBFyx",
  "key33": "4vzojPBUNKuFZKNdvhBPfRgCa3sG5jzuyi353ZBQzf8msYu6Z3sQV3cjvqzWhoyQc2tSP5aZjwP7D5J8bGJvs5X1",
  "key34": "qdQBVGLoaa1UZHk6cA9h3rjHCNi8UYdn9wQ5XrGcLGNaiB9tPMfxw9sMbZ4aKzut5shWGCT45KK8fSS1b2JVUkv",
  "key35": "52SzqvzqwuQU4tbfUvbhChcXWjJvwBynMRQR1eUMWecbsyVVBpfS3idBWXjH1TFwZiwm7hujoQEziUk8MMWCbAUf",
  "key36": "3jWgF5yyucBut3SaB9pHkinSj16M7bhVzhzRwCxkWSCJrsfe1c11F9Bgmzwut1XEoSx9LcJWeEbhZ8fJxiQ7DTaf",
  "key37": "35ZL2Ms1NL75PQvj5jKTZFQVARvcnH6FPkgNm7o7UTJsH2XDvXqMbQ2yL9pThXVr5eDutfU7T6FXUdS89SZ6VKL4",
  "key38": "3exmYEF6z7AKT6BPi31VmR9fmHjQ3JdW84LUe7zkk54MuooqxxtVq8YyVGSvxjaX1rK9yptAH22doypxVMnuC72W",
  "key39": "bdweqo3PbpSNks6ozMvHq89MX3TmRLARDYAnA7PoKzWn4Z9u6zAQ5w52YY1DhJKqn9K1LAdxRb1oJ6DBuuTPVNn",
  "key40": "2RyNDRbsEeHCduX7SLnW6hEAaJhzoMJHSZNuRcGxfyMBhK2Pjqhj6LcgnEdsniLZERH9h6yxb4ToUdumpNCq5yCh",
  "key41": "256MPCZh4huW4n554tvw3HD7xCWHq3cEi26KspQVaBsFvBtnfpjQYDUga9QmRBBMb5mYDynnRqi9zPYyWRSR9CHE",
  "key42": "3bXU5URy8W3dNxQWFs6qegshZjtDbdEppUsv5hbyU2PrVhW4u9xpvFeC7bpnc4U12zRj84CHPTK4KgrsPWEhUB9J",
  "key43": "5Ktdzpx3659GdRmo44tZjjxYY1X1de87uC9ejXgZmayGptbbhmnEJ3G6GVZj6s53rgEmHfpnMA2a3oCf7cPCDge3",
  "key44": "2wur6TD3jhBmogmWrzZ9fkWhGmQA7otKcsA3q9X7cKkgqnNtdbeRUdWKAY9AAm9y5KV7A5cewrMqghAtcZNs7ZeY",
  "key45": "4ifEt2i94TpvtqeYW7bTJkJPJpDHQe2y1tSvvz97KuwqqSYFhtnGZusQxUk8SbwCqAVnhbxefdE5kM8w4cKsbRX9",
  "key46": "5RsuwunH5HycZjKkMmBKoyrwoTvML2euEv9g1ywDCG6v49SB3AVto66wnv4Xd68mgnjtQuXJD5KiVigA1RnxuKEC"
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
