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
    "5KQcmkodKjDypkL6VCTbpNucVUPyerymA3kGjni5SeLTN4J5YEwRHKm2WBLyEsgYrCZ8Z4dibViqmEVwRFfzwj2f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AdB6zHSdDP73oEHscbZbWeFJtX96P8QYb5fcmDCiY3FFk46QP2GgKCfgvwN8N4EmkRQezXRu25sX4JGTxJyhcuB",
  "key1": "3pq3SQU3kniJaV3pqxd1AYnKrYtw2ebzUFBxeurBsQrL5XHDvwhRszBevjeh8rUTdp4aFqz73mPuXQ7wzzhxDu78",
  "key2": "hdCQo1a3ADVPZwE3RW9wFjFWput9UyEs3mvWkXEWqPtM3mgw1YpyxvzFT8CQGSUZ6dfykYfvTnStiA6sjUmshqY",
  "key3": "66bYhd8vpQL97mgBU99FSffyL4KtMKDFDqxhrgFxtyqPMm2AkxnDiMP2B5EmHgTWYh81mBoUnyaM21mctWKAZ9iW",
  "key4": "3U4i2H9VJJebjMd4P6vaCsPut8tZ4PYSEa9BxYEkJbd1usMFC41NyNmA7nnKcuGma6TzJgEPpj6ThgeUnUNjKUgd",
  "key5": "H8cEHe6BKAndgZGpfHhGnKCi9GdBYaNSERg3QkMTH5AdxmFBZvg82Ar14YntSmVU8dNq4QdyfF1LSkrgnwxAkzP",
  "key6": "5jXaqjJBmyEEmu7NdWWSZNt3NCi3ZnN8JBjHvrVQYBhAtijGsL3SMEeHVTtcB5XdY9PQukjMqEmQd8eoyG6SxuH",
  "key7": "CEcBYNAtUnKmDSeiZwgENjnL131aMFsxGgjxZkC3zrdpE8p5mKaPr3ZKxgbCM9kZmCgWNQTKBYmuDhiVeJjDYNF",
  "key8": "2VunQfuocSP3hWr9uenNx1tyXfKhL2Tkq9xATNEvBScqqHJk1NNGxM2kdxmEF8sEMr4vaEmXcib8DJmQieideVk1",
  "key9": "5tsRyc3nUtT3ENpnAc6cNKaxKebAHbdX85u1rWkEYZsageVkUUtxDY6wtAohmqf29zpDeWh1V21pNHx3ppivjjVP",
  "key10": "RMYFVPFaa22JYVPiPVVApo7uVFR45VmdnF6dUTppMU3Dt8TRH3iBfDooveeNdEckMbeSxXAg4HWx7CpbccmYYPi",
  "key11": "4VoLpUX8DPeV89c1hdup2X8bDqMxSig48fdqsPa91NiKuasS9eEZsomYXiAWWyKTJJkWyRGG4vacXvkXEAF7CPYg",
  "key12": "DbrewtshuPWfnHpe5YDD44K7t693zNMLkbBmGpKxKyww6fToXgc61p1ZQsVMtXT97gsRwBz6WgJPWDE73ViHjbk",
  "key13": "2YomSy9zaadHoQRyM9SxbSVrZqYvTEdxi9p5odkn1hfLf5xezAAw1xnLssghwU9SMLBWiLWKcpjTsFo1zufVQynw",
  "key14": "3TwfSkxMQFEs4Vf8yexhaCvSanumAYjeDkfe9sSk7Lct8ZmP2SGpPRrJyiWEQxNfxvytWxh2xrauoquefzBZtbU5",
  "key15": "m8D7kHLQAK2yjHk3BaWxkemoW5xHKAXNiatSukmUoLQ413T4JGr3xqrEseNPVCkQYa79ynLBCv5mmaqAXP6hBwa",
  "key16": "3X9SYGuKTFmtuSytX2rqtiwNLFi6E59kiDeSEcj2YAHcTHPmhte2cpk8SphULpmKAmTga6T2cbCC4kPQJmnuM2VW",
  "key17": "3r48oDDigwFFySu6VSrjzRhRTuA7wWwkH9pAndg6Cai8kvqyXJgPcGfoxKaAMebAbhFLyDLQCMQPG9bERW2TB9mw",
  "key18": "qju2KheY9uKbGytZCpk7yBgVjjRwokGgiy1E5wEd7XAcpM3fxUitvr61xc79shAPq7pikRHcpZ5BZc2SNWoE6KA",
  "key19": "3QNMx1NwBdkNfVxiFcbMvLtoQkXLNv9yQFhYqKcjSFvhL2kreHoMp1N45VYFVYF755RZifvqKqotdeSXFV66PxrG",
  "key20": "5sfxwhfDSEAJFz4ZbNn5NtvBKGYpXQqeAxbEDNQd7tGWLRA2pAQ6JvGELcuhPqSS3dNu1ttUKrQXs1c5J6M2JSHy",
  "key21": "5r8kSZtHCkUAHuc22xSXv6TKrWG4Q7QPU1DzFQPGvo2MFqwHo6BeLrSXU6bww2uywyV7FYeFwLt1LLpiy1JuXj8e",
  "key22": "r1Niq2nbbui6X7kffmvjXyAui9PeQgRVG9DZWpmTinQ2iWnqWW4Bu7ogbvML5X5B6qPuYG3QTqUpf6d1kab2xHR",
  "key23": "5ecxuEMzGZdgKYyT2ne6jWXrG64wxaHmJmZdXp9y5DMCLZZtZfEMQz78X9e1c4oV9zKsBbfUffLbkQBdidbftPLX",
  "key24": "SQ4NonZLNMnQH4bhQrMQeNFJpXtJ1Zv7N2jf5mqjCdogQNR8mAgKNFtLNHgqjccBegbRE7Syutm6sgG5jAjo9w1",
  "key25": "2EcemhyWChvCWAe3SdFgieMhrdtn9tS3BPPDFCS6oqibSCww5ESYmjpEaRQtuXqBC7o5Q4CnihQSoiZTyuiXr6FJ",
  "key26": "28ZgZSmm5ro3VwdJnD7Zhc4F7RVBbu5XmmQY7xyQU85em9apbr6mVriozbipH4ewpjnrcBQaXwRoHAgfeG89eLca",
  "key27": "4DGachJZdvuxRagGq1W6XXyyJeiMt1CWKrJ4Fek4jh7P5ewbPccJLMWtLFdkoSB7WvBUi3p2Z3RNi6HgUenMTWFN",
  "key28": "23kcWECrs76h5YhyEXb2Zqj6z2RtmvgPXvLtWxNFKfyrWPfFyyyzMUaEq2UuNna4SbpZVM18ptsm97HzBVQvi7az",
  "key29": "5KqefYMC63X3bQYxNxTPXXKg6UtoHKgMYJiM5Wt7G27yfUgGQxtq9x93BMhXZiopFZouNhpdG7jeXpkZjhG1yQG4",
  "key30": "55nsH6YY25FekrnFa7hyt21wJXrSWYgvqtRqQi1qZGcusKpbLzGWzSbbP6cDqo68dre8Tc2f1AwP7V3JpGPZKYby",
  "key31": "5dwyxNyuKtR5fNiHrLw5xQgYfWzreCNF7yUnTtCRJjCj8AqcKSQS9tS79L633vgx7R9a1TduYkvQk82RjQL4q1VF",
  "key32": "k7xxR2v6thFknKUA7TY2XLRNbHCEYX9XZJCv84jf65JENwNf6C21p9PuxyftPmgatxxPDd1G8PQ5A9nyLHrBTR6",
  "key33": "3qh7YUw8MHWNdGyfsTJNqcWzoKVjRrCBDJv31ZQV1WJQC7o8rYZFYEVE5q7hjPZWdt1YnB74Qwz2oHbr2mUj7wYm",
  "key34": "4CtCTmsBsaaYNDn28TYimfTc5VGT7EyKpWxKYN5ST6JvTXFzPfN2RwxDP8s5YAEsJ76HiwKtRMAN18VxbUR1CUAE",
  "key35": "T7juJN3ypxioZHUSeq3XJQH7zWF1vCF2dJL8SijM9JULgh4ubr58EuqwnaGG25NBE6i3cotNRH9brLbSSLjkD8N",
  "key36": "2T54pS9w83pkYPQVvCqHvfRMHPHbkP1ai3x4mAY8tuJ9y9DYy3t2JPPibt6FcdxFmTjHhw4ouWCTdpetrg6skSyn",
  "key37": "4VgdFjXBfaK2rMCF9TXSBK3G1c4u8LXAANoGo9Y7yEz1sxmfgTCBVWWPZhHoYeU9Ebw3h1QNDYYDYmWfkKt3xTtn",
  "key38": "2ip432PXo8T7TRbrfr638Exrf4ZrJQMM93agZ9aqn671F12mnZFGN3AgDxTisZY5LrV9mBwBFVbqaKz9Ggu5uRRc",
  "key39": "4RZJB9adDMTYtV5F368ecRD8JJtZB3WEeGi9uqx6N7gsas1tQjLRM7wZtGFaYV83EKx3xfLihjyV79ZZMzk3Tr7T",
  "key40": "3JeKUTSkkqkbkc2f4YHGS34hxtACAe6po5goRzmXCnYj3RTvo9Lzr1ZCsf1TVYzXDAck9CTWXWTzf6S9vDJiEvRv",
  "key41": "4RtVN4jFKt8RpBiDTnjyzPNM7Bt3nLZkkgUDeMQvwatqTG9NWfryQDZHvSWnVsTfuQHybgvA3WgPVWntRcuS69na",
  "key42": "4vKR1Qae4Kwc886MWNwn7jWxyH9uEnaa4sKZ7AnRNoYgQmvsnU8HNy1hxdy6RMU6HgXigJTZBaNU2xDb6W8koUxy",
  "key43": "5R5nHDmaDN5dSPsFpS64hTDhMQvhB47VzcCixrkXnrtynoHd5CMVCntEP3xL5RdjE7cQjgJn3f46hbkKaqRKFG7x",
  "key44": "5kQ9x8RnptyHgdJhcrJVnjVNBhupManAP4935JXnTA912aAjhjvmpEbE8PHnv5s4dSqdgatcmDCcURZuaVbsqLsD",
  "key45": "5rN3iW5DCKpfrZedd9MQLHEACRsqgyphFofUQP3SGSeaaS3UdseE4q3XLW2scS93im7RHehsUubnAqYTWRwRVCvM",
  "key46": "3Dy2CAcbFrd1qTMrf1eecnuHrHZxawV2r6Rqgt5wKhnpi4fA4wD5QeeP7mzFrwSh6K6qkYeandvyB2Lw5nMNGTm8"
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
