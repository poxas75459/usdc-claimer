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
    "3Azpc6c9iQiBd8eqyVoRz2VuP4nWbJ8UoRVENndGj7PzvkAjgAzBKJqSw7zYexQ9zWEbH7f3mbrjskmgcf3MessP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qzEt1AVhc9R2bLdvB8wzMCpASYhaHFbxQYLLaRMifQawEdmNZM947h3gpJMPFzHinZem8kuZmByTspQxzqkRmJv",
  "key1": "bdebZMiTAqr4zgTKPeowrzzHaip8w4bvSCBnh2s2KgHsorVBU524wcbYVQNch8b471Zhd28ggBzkorxmvFgKXE2",
  "key2": "kN9jTeCgPsVGv6YoYdRSw4ryLrKoayq76KMmdY7asUoj3pqCzm5fYLks2XJy9yWgvXdbPmS1zgogMuF8AJppCNt",
  "key3": "2LqhEx3AVysb3X5nVWpFcmdCXBWFjoGBj69oqa5aUwkUUrht6MYqFfNBszpLezo3uVo4PnUT1JNxSK17m77yoKPa",
  "key4": "3bHCEMDwNThsNTFEYGS2TfoAS6XrVyuXuWhE3fC6tcAkzP9R5N4JU5tuCUMaXf9NqfdnNZdFix2cpbzt9xhCnPc4",
  "key5": "3yPAHFqLXKmkpmge4Dt47mGUWb25tFKeyB9GaWuR448wHdpfviYGoYNnsdNEhYMGjbTrky6ax4RfGJ3Cz7ia7CUi",
  "key6": "n3cymBqnqZuoi1PGks4oZMBgENMEtM6tWpufRsN14igb9U95R28XCBx6gkHraA6orpqH3ug2CpcgVy38EripDf5",
  "key7": "4HVEezTw4nCrQQZJVFrfqLFAJuTa33KCxhYeH5aZwrW4qygBpiQfptdR3bPjFXwHWpPkKM3j2h18dMp1KcpYV96V",
  "key8": "3A9HAgE6d4da7Lv4fMnWkvbN9nUDH8tiafUChVcodgqJ9tJBhmWVBCqcNdjoQZvoFmsWHzL8z6wZkGJZJ8HkVCWV",
  "key9": "4HPbe2ETWR47Yi227weN75nuRXyJtsbXj7fJyQFUumLy6J5shgbKdZNSg81vybkayd6Y7Aw94ar2761LPHkSR5Cc",
  "key10": "4my5kyKB2rFUzy6jmFwpruisSAkbpEog918yMEMHh1mFkNBCiHwHWyCNHGq9pS8Q87irk2p5E84CNJ9U1SFco1KH",
  "key11": "3wBRJszbpK75iWRJdGKhEuNVFRtWLLPNscnXBcx6PpXB1zGVLsNJC25VbHzdpsyXM4tLpm2oCBtec35dzhV3t2Ww",
  "key12": "5zh1PHAWLpx2gRYq98N1NjHbbb6VeJJ1SE8pn9nGnN2rh1ci4HrheR4RZTVhAKPdjJGziK5d5fViVM2k7VzFswpG",
  "key13": "52ETqemVMwkhPp6Qyc69M7abfNGoudeejBULgSKnzmJ1CSKotWDuowmFFK56YJtzFf2BayxBvvAgWdvxLZzGmWrv",
  "key14": "5Wwjt8uZgXhjh1wGtJ3Y7pD9D1QymbHPLmcbcwnNDDDQPsin4dU5QfD8yD9m6EgRpRa3mKUhSdrwMJB88p8UUvPJ",
  "key15": "5NDx1iq2pFPw4wMWGzPpigVnWUKmyB7TTGpyZDPAhXtNN53cC29uWHvQTvGw1vPdGo2sTCJvw61k6SPNbsnZ8zCZ",
  "key16": "2UoG8F8KTuDaypHCHvEc9q9oWcRrTAyiJzPdkwHPzmXJ625uHog3bcsRya6dXoAWDuJZ3SFasBDAmZhPrez6oDKZ",
  "key17": "2hXLtijBaLHq7RdijLP5peUfFAioaLnCHYwrMCwZAKQWPeAeiYpcfbFceg4krt1E1bVtyc8zLYjsy9e1UN67UdWe",
  "key18": "ZhAdwJyffGDcWUH5mPk5EvAM4rv2BQpkVPmAXYpHsNw6eCd8T4s6ZzBFgJNdbQNZ9RFtq2dPzcVLnBifRbotY34",
  "key19": "2En14JRM8sWnfDWzrAZ4YgCQP8ev7AxJppuHSgo4sPz2vbeNfaNMdN4aWsJPoRYwV2qUK5gyWkPddk9afQ1pKofx",
  "key20": "5QkhtKd3iQALUTb7ETrgqPuD78Yu5puNtuqC8j8t7XGiWWWbmcPNSP6H17a9g39L8DYALBvRh8sB9WTJoZkHxQ44",
  "key21": "DTBr15fpnn56rU7v3gAVf2sF1J9EHJ4xWQQ2CKb8gYMwf7DALp3R3M6kUmKSghhdR4UizYn6AjqRKJ3V7DtsB3d",
  "key22": "3wEgJJe93SGEQs9UF5B7Ut5mPZGM3JcNkQaSCnogic3puft3Ej6rKVpnrw6X3nRwyqLkXmyXuChKwDvUMbByMNwv",
  "key23": "3VAws87WFAhCtvMAoH6pPktPQpRmqvg69qKaPAFwUr4XMvqguXicSgk9naiT7SPR9kzZmogYG7DJHR5RXaeW3m5g",
  "key24": "38nAjpXm3hdKu5jdX8UayeEPG6qx9ZYHvAxGt3tGbsTVoPZVqRjWv6Yaq72248QeQeVCVUjjz74Dh2Zw1wUAagt3",
  "key25": "2i1zpTsAKSz7B4hfDhCZpQXDhFvwimdE63AG3Wd7GsvdHvTqJufps8G1PVvtrr66VA81gUyMWHTB1xxTwMN9kX1m",
  "key26": "ZCrWKSBCSDQ1sWhSTJ1vNiJfSPnYVNA2VKxuht38n8zsAL4SRvenh1Ay4McWWdxtCPmLQdbW3WGKVSyfSRFWxJA",
  "key27": "5X2Lu5fnz4e9YcvDK3Pd8aGbfsmo4MFP2PD1EvQ2NdoH2fMyDk4RGyZsn8Dxyd1kY71zjc335AMARJBFV5ySQYeF",
  "key28": "2zRS5f7n3THyWtaJRMWeJgUeTLuJM4ANncBF8kaFQmbGLEwabvGjMwuaJjTiL43keV47vKGkAMp4T4nXXK5JSU7q",
  "key29": "5JP8AAVvdP3tmaSZoB4ndQq7Smwd6MqcoG6bvCjgXyU9X3CUbmdMMyAjyUCgLfuckA8UesmoLgvxeTiu8Dss8Kha",
  "key30": "5mZG7d8wp7CzGxfoUNGtrkezT6BZbfuZe2p1eXNwyZ77jTxpVWVgTMHc3Eakkv5NTpKwEm1Hcb8k9ceda7aAVxHm",
  "key31": "2we5pPPpnaNzrnRRXz4HeWs7vPjg45Xf4eXZMLHBg734i9kwEg7oLkiQiCL48YzDoEvvcKSUFMMjLpYw1R6zDBT2",
  "key32": "4UbusUzV98SdYXaBNU5dYMXFfkytGiFN2crLztR8GqPHK48RYkKsQS4qaMG2YtSUai1as54tESrVKVVgNYJizET6",
  "key33": "L7bycQL1G9yhVyyW4AdNmXe5GyAapcWma8x3xNa7s8vrDkLFRqUMT9q8T4dkeq4HfaBxBqrP4htcExn26wH4hoh",
  "key34": "4JtF1vBoaN54aLiH1s9RrcB3CDKjydhb3ctwKWMc7FyeRUj4e4QYLkMCiZ9GiPuWpAMXUA9wywRuBdDuvBnv8RfG",
  "key35": "2jGPWYxBKLdeLq67EJjjLPfnUU9Z63gAHvNQkcaEeLXYYPq1R56G85Zw5V2reQDfY7GjY3wCTCFk8L5RkWCKnFwm",
  "key36": "2sBeGwmisjWn4iNEAqFwd5peJbA2E94qgbnX9eerieUPyH3FezYLCjzMkQDWj61AAFtAZABPnbnvHBTTyBmxc1yH",
  "key37": "4k2Pm2vXTXcNQsN6ZpyTt537g3iVU2v19TkZPLvceujnSeQCUk7wL6taa1kUe5brA9bd7dUjxnJR9bL1Qg8Voi7n",
  "key38": "4noggvDZpvHShxwvJd8ko6ZnogydTywrfsCirN66kydDGKyXmtNbdwd3q8WZ8bPuGQnktUucAmT1kQwZzgDkLMgm",
  "key39": "3NvbRbBB9Ft2vePbf3ZiZqrLngvU3CPReXVsiVRiFwSgMLreZP5QmDSeToyC7DWQ51EXoExrfsGgd8mxo41F9L8w",
  "key40": "3Kx31UufeHechWwqqXLVga9dVJVx3M84tJkGRiwcoNcVFRmZ5R558r7KegZSANQYpAqMvd8N3w6grXpQipL2TA5U",
  "key41": "32hFYSXoypfJMCCMV8JwApSSzJuYQL6TtWYwY3uRWDtrywrWgK6kfZX3XmBj68NJ41SFixFvrwrXMGAxJDAvxWxs",
  "key42": "3wCYUvyy6B5WBSNqS5Xa5ZUoJ4RVrHJYUt528nbudrDPygaAErVY22x4faicEXSavMUYmijwrxSYX7FNeJubNgNn",
  "key43": "szszavcwpKbvjJN7T6CaEbwX1ykSWEztRseP58wMudEpkg9Q4NxipxrNZxmLMzS2swpHJE6UwN1QrM4QT1YoFvg",
  "key44": "ibvvhanQRsRU13kiH8ETBwzac9uejNnaGW2kjwQgryyf97XtKdevviXYb8Fri5fsUKfFPdztgNAUrhaLH41QXdS",
  "key45": "rKfmY8X1NpmXvf8yNjnnXSUPksKYuWj3siZvGWy1DWyFpnPicnrqQnpqKBrtCGtzPoDVMWPTJsFvDwCtLgtsg2p",
  "key46": "5zcc6X9Y7XzWjfDbtVSsJzUf1gBbZXYZEWjGPP1hDHWSN5R5W2S1FP95CPHxVDqwSavej5ob7VhuV2k78ywxh8Ee"
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
