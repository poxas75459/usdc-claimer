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
    "Ei7fR8SEuo5AWg2Mnh9bvtSH42zcjqJVL7ZRE9D9ifwvT4v9NiqDt5puVJLJqRQq59yJdFAF8KjpvzGpN1DPsse"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kJw8o2pvSomwvk3vAQcUcixu5pjCH98otNJnTdZeMd9zeqf8QWjvxTF3zrfPJGfCqNv8wHYX9nWNqQfzRum5zZc",
  "key1": "61h4cWVXBoWFYCia42VeDTCfSiCvwn7NowCSLQboPsNUi9fdWFtmgD1UfMoHfepjq6isxawCveFewRf55uQXBb21",
  "key2": "4kafA3FhSpKB2VNvJb1jMtZEVHt4UkzGymmR3CJFy8Apkuzmir9rXja9vJDHbWWqhdj5421MRtaW2bCGp8kzg1pk",
  "key3": "26nqks3wcyCRBSjdMPx8sRhyrAQGDHxf2sBvaJcKbCa3Gwqak7CaTFoKrRTS5HjHBvxpVDf8cooomLE6MyAVAaB5",
  "key4": "55YiH7nAp2pKtjzjiVR41qPuNJK8CRazpaYpCzAauGiUvGBTuTZ8LFbhtukuH2jEnjxvVWzcJDXHvrzgLD3z1VPU",
  "key5": "5yBNJsERZjY7EXAmuR66kjCSdx8e7fgqZHbYNeojUjpemPpDdCLuqBPW41UWSXUwNY5DhZR5GBKoBmML6LHMcTF8",
  "key6": "5DCYwwEsSuzHiYM32qVLgdu6qqsTQedW3n67gGXedC9LeG4QiW51JoeDP1mTd5gFhJ3AsAc1xiPiwrN9THmGEv9x",
  "key7": "2aSYdhqJE1DUuLr2CX5GC9gffVfRevCBQ6PDEkekdLVGwp8TpP9DvStS1YcMeWB1Qbe4WriJmQwEu2RyetSMK6hH",
  "key8": "3BUC5ppLeKh5fevaJy6FrvZJCM1ZAnhHuT3jpvomCNHMdvE8SQY1DBbr5Jrx33UzxYYXPFkLeXi76Lav8CmESdam",
  "key9": "2tTsFvNAePzScuMXKMLv17VA7XtLF2nQj9iSurEiGaHSqGA5oHnRL6ypTTkLUg28fPpQF3LKRXXkwAX9ekuTxaHk",
  "key10": "2i2GbWqzCDtfogFS38cJQvJHtJVwgXuPJVpRgGUXbD24qcgCnvrKM59Uh9Zsqr96vbEZ81RkWUU76SgBC9C5ReZ6",
  "key11": "3VbGDLoArAK3sQUiWGpcaXA6mwg8sJYS5qaxthhGiiWJBiHHuuMtoBk2oLPkfaw7Ymg6c9Snu37QkyGCHQpazqkv",
  "key12": "2ccjYcMvCs8dNUEUuRHHjqkcHFL3LSeardVvqcSUTmucsg9dWcUFEG4kuRdY8nHPQX7p62rMm61Ti4J3cSANBYML",
  "key13": "5X44dF4jWDrbKaBFLjexW4gVvDbkrUdyrPVPNvHB7YxwrwhTsG2vsq2SFVx5XLGQajArM1U4QobACs6Fk1hMjATt",
  "key14": "uhV8NxQddcvgtwWyQGPURUCUdB4U9UXcxuSFd3587kC8Y23Ui4R3ESyaVNJbZrMKuQg97KM6zidi2rXMxtRw62m",
  "key15": "2oi4bzGYpn9v4vssnaEdmSgqBYZ48hmxczJTrSG8oCPiqBFYEtr2wEHfJ6cCQcEoU6fESqQPUQffkCJXBqVCUUtg",
  "key16": "S16FBt9TiCQLPzEL4ZctNXpWMMugVXAaWvzMTujqxSGFjfzN9YkngQngXUPhA2jPjFLu4x6K5vkCic8CAGFFdaq",
  "key17": "3vweGJKwSZoeCPrXXM3tFZe5FFnxqUaZpYgbtf9EtGnuGXz5nK5QxDF16sVihLsEg2Rd6JmQQYFzQR28fBuWReRf",
  "key18": "t4twtDgMBqaHcntG3dH8EwijyGzcY676XZQ7i9gCmkj4Kho6XRq16hcdMxPpRNZL5DFXPVydQdmQaNzdXfCVRUM",
  "key19": "Bg4NpvZVsw8WZzRWBsznxXmWBR2Ri8d7qCHcsnfYwEkTZPd9VsZ9426dkpjesZXHJxgYqSoPf3msuuPWWsnUaXw",
  "key20": "3AKLTiP5QzUkDXiAweDUZLPkGJCzJkYuHon5TVjUPv1u6X59Pn5tbe3F8wQtQbUvQqic7xcGwaxiHJSCeATLW5T3",
  "key21": "2FD9PdoanmZgLeiUDgnixpakFvJaHmHKsRGz4q1rhjogdHMDKCtge8ZQnwwn6G8g2jKZRqpqjVAtqGa1e9HBVMfY",
  "key22": "5HGvdx7gjh58BCyQmo6cUy29eZ8YmWWRgqeCe7s2MUqpGpeJU3VyzskYPM1AdUwXxb2BeABJWifEGyHjzRewwAPw",
  "key23": "3DsEd75KicUigtzi1Mgj2nuWhwEYMj2L2XqRppUzMnj4VdnjwrPyro3Se1sWWPKQTHuuMZFn5TPsvWJQXFqjaWbE",
  "key24": "4LaVtfcwGJor3YLmK3JUPrKQMEuBPSYNWfXDpfFS5uRVL2NzhXjSRaekay2ZtwXpZEDRiRYVH6vDyvj5yqtkzN4i",
  "key25": "5J1aGuTEYY6CqfARUxymh9YvJf66wXbsZXN745MJGGgi93vyZDh4mfPX69D6qwqKrkdhZ6931VzMGkAVyFRXwJ8K",
  "key26": "4VfbMdj9fGnboAiCaq2nGHmuuHTe3ZXmHeBnFgDawkyQyaiMGUzXqiz1kcZ7HFvexJzmekdDP5BHrB22FoFYnhJ5",
  "key27": "4VoeE6KEmqXsiMc9hQCVYiP3Qz1Kdvvn4UkPR5qU1feXejbcxfxdPKrLDkakoutVKwLfqE3QvLMFGR8oMTKYu5EU",
  "key28": "62o2SmRdvUff618jgdEbkFodtYz75ScpdwyXP54uMMtaRSxHvpiNpHzUFBvppiem1GZRgG7uqs5Y7MUpRJhbFadb",
  "key29": "5r2q9upi2hE2yLnL4kez8Na3toy92KhxaS2B3MLA2Q6Dpcyf8uAmP7U37Nn6nYhaxoFufumeos46BW6yw6VDM31K",
  "key30": "4X8kzimV5gEsvpLayT7ba7KkUn7J1DhYyKs4WFeadXRZ7EqAum1BY94t6WVaQZLu4YxXR7nyfFMnW3jFP5Y8CLLf",
  "key31": "x85ea2bHyJMeWiZQYyNwK5JGDrNQn6LEyuxxJzxos45WAwDiNY7DwNsiQnBq2dxxNd93L5Xkf5xHHzk4jhbXZHa",
  "key32": "653tzWJ3FHjCT9XtNkmMMeXJe6WyrfZZyKGGb85ptukyoSUSRjUhwzbqzeX3kUdHmALjEFXEa61Y47z4aZu6wiEB",
  "key33": "5uXBqsKHpGnBnuWeH6uZPS3vEGYfvV1Y77oYCbr7T49vccp6v1bkPDdb7dN9XW6CV8mL1W7W7P2xwios3Z5SqhAb",
  "key34": "2VzyRi5LQK6iN7djeUzNBgj7b5BaR3Sw9JM3RKy27SVCw8ZWex5haQVSQHf9Do1qzgV2oKpgYDCwUqs56rGMqhYC",
  "key35": "2gTN65YRp5y3ZxbrLfBJL6TKwkUfzwocT9ygPNccBTriAJtj848CUMvYoeKUChcZwYM78unGo8ecZvHgHG5Kptne",
  "key36": "4F2xAyN9mBx1wRtko7jFiCuG2FzJxCm3hpsfLpcPsptLqd9zEd5U4XAfd7UnBnY6Wc2QbARJf6qQhggJevWz9LVr",
  "key37": "5VzSV78Pp3JSuoiQJZR2uUjZC8PBweLp2UxUbGerLuCWVGNKhhbCYh4QLD7RHHP1TCLM5BWvTnkSRqTP86GuLFux",
  "key38": "ffEBM22eBnN6QbgVM4B8Lnvqt8C3B1FH2fyvhDABdLMmAmzdVHVYKQjNXyhyFuaPi6hNwBds9HsPReiwNAnvYWA",
  "key39": "45pYvcTDodRGdjf4G6bu8xJjwSmkcbM9Pb4NALJPQNnVmEvWAgyKswintzks7jf4QA5RDPPoDBbD6CT2H3Vqa6Tr",
  "key40": "2xvtFCkBdGYpbW4pEj2iuLsJ4WPA7AafTTyW8SD2ZDbLFznFt9BzKHc4ocbME8mzDuBWPn1D6bKaJdmjzHekzVCi",
  "key41": "UYQXRWbjM8auYzoubgBVtPNzu7DaCrTe8CEBGGJvUk7sdva3etGKNrf3KSzNifnX3J1oqtfGFarMw5thQcMrMoF",
  "key42": "4U8tQQs651W43UGsR5AoVgTnwbkvd8YsHsqavL212gGAbveLf9iSDgoMBkNqQyuYrUbiYWbV8vtMXQSm9pN4zB9X",
  "key43": "4EYFALGk3bMyMS9uDYPnt5tCbHms1GQMhwkbzLtEmmAoyQLzVArCgXh6zn9K1mExaojwcXLrSWDS4JyuCp53HQEP",
  "key44": "2RK8Vgq4U2oPZAtD5ZHyEYKqKhQ7mC1vKJW7Ruyjtf5x8QWoKupdTLfMoKAzVFvK5bHBAPw5xYB11HAWXTs7ruHy",
  "key45": "5bbvh6eZ4bxMfe6uXFd16Abxws8JrygpSnkxjAaD2D3P5QwdGLfKUTYca63Md8VHinoaRugCHVATSDxsHQdBF9ja",
  "key46": "4t551E9AxZAbMV6gApCfdDHaoQvVmdm6VrWRztA2XRviToUMU85fhR2S1McAVAJYiTwsoQ5B2M3tt6GzqWyTMshh",
  "key47": "2tDmBiocuTgQJkU99mD3Hdj7DaNHh9rGbeGFP5gmuWfYVQABuArN1fVZ33rc5tDxeeo528W7MQLjxBcW4oEd4vYf",
  "key48": "5a4qLty9SmLut3WuZTVhKoCtnvTRw9YoBaSbgr3RhpeBLKbd9jyLqFjaQoe29NDx3yJ5DLBRqGXLo7k1EEj9dwR",
  "key49": "4unp6ndHzC3oHiKnjHPpydZjmJuwWa61c5eNpgLn9eajbXPbD5e9bYGoHCrzGnxw1DJNdePF28eDhDX5Jd6K1PRD"
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
