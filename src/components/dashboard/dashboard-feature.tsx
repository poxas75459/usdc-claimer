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
    "Cx2CM2MoStQKgSKULeW45kU41vGDjE9ngj9pxjEwY2teJSnmAAk45gFUL4Uuxahd1Nhm7JNKBG1Sm653y1ZAuGA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43F3rKbKvwb7owtPauGC8VHnVY8zchqJ1X4LoDUxEqayrDsRtu1pkYL2jEQgGkhYk9o9FkLU5FdnsGR2gVpxy2Za",
  "key1": "2Z2A9b2paq77HzEzetA5K6qi5VUM4NB2ZEKJ8Uc1FVBskHywCi6N2K8cyUXbGLCHUVVUqYnvjaArqLucXjHcLwSt",
  "key2": "R91ncmZ8SQ6Zz59ogoF2g7FUcexBaUDdrRTLg9jaygnkx6jYVBaiMKAX3DStCXaGpLdfjPakx358P11Ae7JM29q",
  "key3": "3xnRSvB2HsH3eFJfNr9mNCJ1fohUVEKVusrXhtMUzNc21bnWUmxVoMchcHy1YyrUorcZ67PbBtE2Kqpe8KbgoCTv",
  "key4": "4SANfqgeHyUHmspW4gAVJeq1xH16w8jm6TkQ4YgypjoNvb6B9hPkZJD8CMB7cBdEksUdtEoCrTh4uV6Jiyk7PMYZ",
  "key5": "3Ps1dpMGNnnEZgt2kKxZFEkw9ia3PLxNAkM2HwCaWa9B65fGnxvyvZsmPNGYdCTKEY8rEKFXFCZysNFjbxQqVvo7",
  "key6": "3xqe3Ku9Qz5snZEmn32McDFeMb9ABBLrApc2RaKSkstER9zUFNSUa7DHpT42m3qyddkZUdSun847KXtE2zTjjTJw",
  "key7": "4LWQxvQHUfdCmZcgCAfjTD53sLk7GRQgGWfveFV6DhEzvrRMpCcZ8AiXbFAJn6uCLrkJ4Gio31BYL4ibjK3rur2i",
  "key8": "44o79rojYhkzW2a5mAVeYynAJtkrJHrZxjRNo6WKkDTSQskkLcHm72iGP1qPQq9bjPLPzmrJKTULKD4EMJmH9xpC",
  "key9": "3G2n32oWvoTyaDMe3eGXbLYknfiDubCnvj4ELMfmBYQvBw5r4yt96p4i2yqBdfm1cprg1EtnQrXRFyF5cD5QtwNo",
  "key10": "5DiuEM6NNM44UkBdgboew27dWbL7rgFRPn5bS94LcwCjEit3xbQcXmWmsJBvJ5S8yP25HGgx8GryQ5TJ2foT8Gqe",
  "key11": "2jPYKbcHCijyXB1CKabGU3eDR1QKzCY6SDbGoYBdNzpkYMq9VEL98KzspCjLHycFUV3Psx3YF2h68Snmn8fqaYN5",
  "key12": "36wJazeeKkjALXb3L2RrjbPLj9WcVNskkZ5qBPYWcwJaFpCdTTCEmfvMpzxm5gW18kxcV7dpD3veviySfm85au1c",
  "key13": "49oEkawZ73LbqhdNuNN7LD3CyDqjDkchW2mCPuqp18cYSXnQnzvuHHbyRZTZhvA3WjtMQ6gNyUJ5owJxBqQyJs99",
  "key14": "22VsefEK5YjF676AyUcEMuXsTJxinTwrKkG3W1y786QU18rJV5zuoxiCfkqmm1FDJuy8J3AaBLKpWS1LnhnikA6q",
  "key15": "4DGDEgN4zozw9VTiuMANYrMH2M7wnMYd9vFQXHUprjf4vrMwFgfCcY3M7b7ufgqBkSbHGnmp6JPB4gXMFCa4MQw5",
  "key16": "nBZ3fP4fYKnVNFntkp8CRWQGwSi9D8XRCn91fWUzL6uWrL9ngcbPF4qegVqU2uhkpzxsVuB3uRLpmTkFMTZWLhD",
  "key17": "4hAksTJ9P4hsZHU7ut5MPjXs1G46p7SEgUceL5ozz1fBTZuFthJqGvabR455F1kTV7JGbQn8GRR1vaLLkkeHKZjK",
  "key18": "3cYgmmT1Hn2UK4KKuG8XdmUroUqzfWKrcrJuid6e7rbXt5Zzcx2Hfsh494MJxoARUvHshArJfABeovKUXEPRQrZ6",
  "key19": "5duL3PAfrgVz9oZ1xodtN1SsWPSjjHDH5v59CuaWAkx3AqyLTvCwRYV9VNrdbiCMaC29GMB89S4U7AvBsdykUoVx",
  "key20": "2JVhG8RGbcujwCdKmq1uvNHWxKvWs8piy78Pv9iWgXyvcwxgzCZwtk7VB9xChaGc5TL9LvEkcBjC5wfzPZMeS3Wf",
  "key21": "5yHod7q57iEs3dozyo8mAwGjXYhSQ5uVzU7JsCnYfUDZmSpSKH9Gfg3eGKPs9yfzcdvexMxYAjzWY4o12nDkSCPV",
  "key22": "FtFdBm12bTQdNUTAHwbsXNYZXgkb2YFDp7BkQ7Y7wZCu65B54GkHRrxS6zpxqSUbkaBgAZdV1Cntpjn1kwNNNGt",
  "key23": "4fTfEdxS4qmkcEsLEAwoyr9C5Bag14qTvd32LfP3t9MTrcKcXvExDD7PJHMbDcCW4Uwz85VeNQ1bXLjbFirynakw",
  "key24": "JqhG8auTpeBNyTb1w8BFuu1wNZ99wZfM6933YgXLZLxRJ14mX4XecHVKWWddwqXSrYTNwDsh87S8bF64ZUFHZ4B",
  "key25": "2qxrQK7DQs2nQYpF6JEs9c9n9s1XhgBEnszyRzyXHkSkDdHnUNAnQzUYMZhBxZ6taMwLhBMSrpZV9NDCGftEUd2z",
  "key26": "MgFknyjke3dvxxcsFJ24Ue7agaYhZ9Zs6eRWN4eBMpWXDVWzRqjwe3p63VsXkUtDEJGFvWv6jkDC8o4UKF1p5wc",
  "key27": "127UEdpNwxSh5dMnRXDLgi4s5VJoBWp9tzLLkiMMbu6hdc9XNQqXUnQcUA3C54eHtfHGHQzo8od6cza8fKk4ub2a",
  "key28": "2LonradVTBKn7pUHiVLJ7CjpXaqvEcjdTuKrP7XAjYG72MUDLLum9HdUhRFC4xeFiHsmL91XdZBjh25dEvhoyJmp",
  "key29": "4JRWn66qwfx32UPd3w2GxJkdHdtsoPsP5YCGdxb4KJVG7Jsdq69LzPxLx8ZqYCz1yjvpVV2eUU8e8QR9QGuqyG48",
  "key30": "2mpBfMvkgayrzTgpEgHcasaJe6QLnx8MBk9CEKuFrrCiiV9QuHY6ocuvGZsBzhbJBHNp53MdqttTeDtqzQbqA76F",
  "key31": "5vFFRQ6tVnK1W2uyRC7WmDagoa7stCfT9JjrPajZ5VGMJMP8pwiw8s7WPKncF8zuPd4y1oiWiMpnLXQxokVNPFQr",
  "key32": "65rqftx5y1JX2roRuH5sCsRA1xQEUE4ArxoQrmk4pqLYuQGYU2j1LVxXgczfoWNfXmHaeZiN4CY3VcdULEf11Muw",
  "key33": "5iHRyQrxemucLnGiNPbLKxzGVYtMu5bQYH7KyjdexAne28PqoXqQb63PGwx9qCnwG1J1sbFsikVEicNu1yjM5KdS",
  "key34": "2St1CpmT9wMePLncxu1AG7yWWM8gQRKFhSSHBGKykaMqdToFmMaLhjEzoqDfVCJJh2wsj4GDcknat5n3NFazLHEi",
  "key35": "3RPa5TDRP2E9ZLKfAKSbAa8ncWRp3efFCxD6iP6vvthpZmiGjF6RAbRFe2wc8dh5j9piick2D3BczmXnXq2daZfD",
  "key36": "2p13HPvCzrXxzumVV4pVpiHKFMqoEv9r47hyWe28VVXmfu5J3sQDJCFpfsFJGdioTdiGTrFMpKezMbTrkbqxDfGn",
  "key37": "4FYLi6rFBmcCnv7QXfwQqYJT7mkdp3GWdjDFY2iKvkNt4bmvjnrUNRLyeAcyzgfi9hB54H9WJTbHSJiaAayHsWEB",
  "key38": "53dDJRCYiusiKBJuF8Ma2hUBnZz8L5ffw5VTjJkEjjkoSS1KpajEvEvNPMbUfXjXYEYqy85rzCEJswNrAN2xTSpG",
  "key39": "3FAqm8Hg4iCLnkvHGBX7ranTjKqEKgSAK8yaGZqVrsEyodJa554oh7i1S3F9KXoUU6HeXK37dDiiTYL9fwKxvmci",
  "key40": "JiS4wPuoAdXD5wuNaf15jxybmgSRz9EbTzFxLhjnurEeG8u8arC3KsQfrZDnCDmHGNft1xaEjjq79EkPvfBPjS4",
  "key41": "5HRDuiBPcBFcw7nnPPT5mLYzAkiGgJ5NKdAR5yFby8pkyV1baLhAhGkSbp7Ywibdi2tUoU9xKdZJPC9LUnkCKyfC",
  "key42": "5AaeocnY62SNk4mDkQoSQTFMKunDKPKUFmkMcn3ZVZtYBMDxNXRx3Lp8xRY3neAfYN3WTgpjz2UNWrWH47JPApFu",
  "key43": "51PVTccCkBLyPHyyszoXuMbQmMPLiRJPrbsY8fhK6mYhMNHm1oAVqbQMKUG7rA7nRd5ZYPdSKCuc9LnT5vKMb7vX",
  "key44": "8zdFsZXPevTRk4RbNQQAQCSmkQYerSJtyg8norgbv64n472aQkok2ACX89rFV4dc6fHHamB8mbQXD5pJjZ38X5p",
  "key45": "4q9cQLQcj1YaYu3Y81SEdF92WykfX6btoeRHh9ypUoTQDRr574S7RkVyPwcdx7ba423eZMzLHKdTXhFsvQJfUYo7",
  "key46": "27xveN2fmwXyymQ3GbCFGALbcvgqqXRdrVsyqnzyqBUnaqPqskZyB55GEwEwe8jZtWuJynrx6PCXT4CrpRB8erEp",
  "key47": "3UQhN3TtoTF6DWa7hjF7WeVGS23ALuyqkcgtvQViKtyo2DtJVCvfAUeeTBDitWM72MKyPtz3pLvmPdjaSHXwmgpu"
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
