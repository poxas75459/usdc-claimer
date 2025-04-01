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
    "5qDT6APhaeeA2Ao9cJEHG67v4iqAF5u4toXqNYV4MTdciNBknySkDhRT11fAPKxTe2ZmUJ34AwyRWa5ttMNSHZNw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EZmSRAaq3VH73XgrCkb6isFJAkw7jp8fzRM2L4BaShjXziuNh5hjwL6EygpQUbJVKzcMvMvNadcwQZqAkFHqAT3",
  "key1": "2RY2NCndYGGr5Dm19jEgengBEAYHdX3MnT9GGAExbQynXyeX5aBsKQCkmT29YtAWpGKjyF5ExZ8Vd9Fy7LksWf6Q",
  "key2": "5eCmhYKKNzMdnVnRP2JQz8v9oikPVwqKfqpxHtCV4TtqzAyysRukt5gGJ6sw5MXkXsNRa67q1iSLCodvmKAqNUrn",
  "key3": "3Da5PJByktdRVSdCNCBT2WXV49N9MBiDF6jDzKJ3CuW7tJFqFi9nbQmw5govj2UWdHwVc87kykHAxLVrYihcWFns",
  "key4": "mH6uVWu6sMs89rTiasea21xY8f6DsXgokmUBvVbEdiqNFRjkU3pLpHB1vGD56ajCd7qTUMhUcaiX1jCAaN3XYVQ",
  "key5": "4Hg4Mcuv6oFnHyGqaf1PFrnc9eFdB3TCcqVeKFeug8xYQsJFswXfj7a1yRJ2Fkb6gu94eTKfEXN79qVuh9agFkYa",
  "key6": "4rqcCfkLM6N4LrrvZrFPix1P3KQ2Q5t1jBmRz56FUXnF6kZFo5naRxKw296XkJhG8frfFi2TqjsbwuQUMcKxYa4j",
  "key7": "EZs76DUUpj7q2WSPttULo4b9yWcZg6CbZvZB9RMsmNmLckhKqpSpBJGxRcAmLKPj3duxuKiejegFKAN5L2rHegn",
  "key8": "22kgttC64SEFg6sYdgpcJVuh7rMirb4VXRnnVjpKX7bg9D7Tpm25Y2rTZE8T3MREiSA6MW8B3AUwu7tQfQxeHjU5",
  "key9": "46hLALCf7qmNu55r57urwNSjfiNZZ7sMD7AWsnKCCsKc2JgGFRiA9s59vCuXpCXT49UBvJNoMXnxKYaVHg63dPxV",
  "key10": "2A8f4ykChzRUeHvrhiZEgRxEdeEbqVBFKCUan8ouTk4jWX159WGJ2miVfC9hQWZi2XXgspCjaTrmrHSUbtX9MBYS",
  "key11": "3ELGHPkqXqJWCdgHmrfV1HVfFfj2qMSNVyLTWZJYZMYDRNVsgVp6XpJMfUx27PSMdnoZfT4oHJ7ZkofJ4zJWmG8m",
  "key12": "2Tfk5ux1bFBW8Tyej1P9Vkuwymtj9eSpe2KCRT72N4rL4raopKNoEYgsJq2S7sys2jCRoKRaw5PaV7tyZvwRe7ie",
  "key13": "3ADor5qAVF2zY4YXvQdwQuYTvgnFqvCdWuhtKQAQJAg967ZjqLudG274zMc7tX3uBjijfeewVLrYeWekjpafxyP6",
  "key14": "43G8MxivHik5eGZwu9q6EtLkytKFi7Sr1E4XMEwtKqW2RmzCizJM8S5izZA3tJv9iJgJ7AxtXH5bVR8mrqdg7oy",
  "key15": "2gi2EhVHoiVBPr77nXvGuouM63XDEyw2pXhfSpnZ8g96ZJpXJypRadBQsLb8dAGrVwTgVNphv2U3RqxPWcGs5BGa",
  "key16": "4EjRRU8GJvbqGXrcX5basNsYC5KjTwPu77372U2CjMP1i1koR84PSLqH8MRnwrGvUiopATobvVnVM2u72mRxzv4F",
  "key17": "HbFpDZojPP5zMBEZGRUR5YFj2pmKtcRj3rfLgZB1JX2H1Q66Vf63kpSnQ8mVwgDZuY9qfHanyC2YzN8RzAJ6uSS",
  "key18": "oU67hiDvAvTTuKP8A9MKEGFqM6JMqaSuqgeMxLBryf5csKqHxYkEnhJB7eFixfSbNtYy18o7qmYZGdoyAXyfDUL",
  "key19": "124FmUQQYh68fRxAeoefbuTnDLo4kqEPAW6BYa3Zw9KQ7SmMJFKjQnhJ3vjgQuShsbWDMXZkxphiZGgbz2bKm6o5",
  "key20": "3ir9YSyz8nfRdvsftFmZWhfWuy5nmC31n4Supbf6zpenkFZTHSMQHnMCHtHvv7Ks6ydXFYsVC79xviYKkqBZcwRx",
  "key21": "4DoKgBCkpYYY9tR2ooLZ7Dyb2bRuqQBY4uY89rA1m11Crgtk1N6fvZZPxnhiDGYQbdTLGZcMErzpEVNn7xf4dWFb",
  "key22": "5wQ9g2Lr2Y6nVKFuBvJPqApPZjfoetjFCzXKVkQ252jhQE5CLXVp2b6YhZwgwrT2GG6ApkKkLUQxqUrQoYi3yawK",
  "key23": "4z6cT4PovDzHHNmYAbxTfFr2kgUWHSAwr2zZyrruXmXShXCb1XoXTmDvcC31WxADiNVVD5rnXwPoQrwnwLSPtfAe",
  "key24": "3v4atzkS7aFcYJBr7NkdPvdGFxBt7sPDapCczaSsYyk8eRnFGpfMK9tEnUtV4W5UMnqGypmbDEF5kWhXb63BVvPK",
  "key25": "5vcdBm8gzSJurzbCNcpdVM7L2iHzefCHposibXakZPzWin32wsR24ZSxNToCB4yAA7k7nPvf7NYXyFDAAfp52Ak7",
  "key26": "XEvSWGguskjcqcQYQV6LFzN17TxxqHJB1cfhamyG8C1d24wjCf55QNanuU19VTYNbSBxL9ETthfXy6ebX5ZDx5V",
  "key27": "4MFxWbVjkW4Aanhe7JVo2drxx91g3DqJoMXQ4wuiq4iouA2gck1QeM4Jtu88nNq8zFjJDRdfFKQNg6d9rNWqMYtv",
  "key28": "g9op4zcdW77AH5U3eKwptHaDtGnCzaLvAX3yZyC71gDpryZNA353JknHEX8MQ9PWZzjrjopzde4YPRkFMfP8rEZ",
  "key29": "55Pxyd46jraXCnXPHX5K1HDCBP1BUzhSABvgtavdVLZAFhoGaRSywPfHYVGQ1k2UzPyfUWhk8meVddMhajy2jwAf",
  "key30": "4gjLNCrmqWbQ9MYHMB4srfCukR23ouRHZL6Y3KSYLSTRGZGyE6Fo6k7brwPA7xgUbDksW2KwqyZ1iXjCqmsuF69x",
  "key31": "4XEWRxTCzgfwY1JchJ22eyQchxN6XiHAZ5yFRB3w84RZeA43R1GENx28CcriDb7vB5PdZA3F9YnQiQSRryHF25vg",
  "key32": "3yiUhY8cKN3se24feq6ie7j736pyNfNzFaeE1KSNaYe3djStPAGDaPR7hNJry9hpjB6RdNkSCSeSUKT1SVKCNXRc",
  "key33": "35iePEckFyg4x68MXWLqjA475mvhPkVpSeYCuiXX6oCvi988bNwWpcq3JqpU91NzrHKGqt8xZbhTzPVYhznfNsq1",
  "key34": "4M7jvzUFKuyLnuRv5qqKT3esDNTvZhGFmRcPYqZRgB5uPUM7FuBvqh9bK8Lk8naEK6t6k8gS7jTLKKLkK1pvhYSF",
  "key35": "3j2ZKanHs8xTLqD9ygs9DWxYh7XGhUcofzpU44euqMCupeXMqprjEdZeH3dq6sgyZB7yYwz7GVeuUKJSkmU9k12x",
  "key36": "5V3ya7Uqpev3aiJ33Dn3uqExkTs5JyH63PNiV8XDgS3xcoQu4AvK9chzc36fx9DMPaLk5T3VafuPP1zrKWimbkvR",
  "key37": "4b5YB1T58CsZXb4gnXAGQoE471UZW6a8FS5hWm7m3ckFKecrruvWn2qP953MYC8pTv28dM3gMTQcEyCv974xu798"
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
