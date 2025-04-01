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
    "2XpAsPjV8bcJ6FfdNPtamXzKMztU9K3oezg8KjYML6hraFkRTqbGYZGFB1XAAWGSAMtbxWsjQzTHPqkYfFgj49m3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mP376Dz4Lj4cdhB2WHumZJSzWGf8gB5xaDtZwtt8BzPS8zcsR1LURA4nvvoamXExcH8gkNBvA1th92kw7fMmjQY",
  "key1": "JaAaD1WxJeaLTjPy6ztYtBa5LG2QYcTq88Si9sctrqbmHUxgivaLgeCDrCHs3SCdN4yLCBpk9vRRka9ctMeT4yK",
  "key2": "q5EcU4dEJt7XYBNrHoew1cfGbn5Grfdv51dfBumzDrc75T5cX7NxTAkHC6UEW33KgRoaDyYxbbxak14ESyamb8G",
  "key3": "4v45BTN1HPeP91JPTXLTtTqx8TSyryC2Vr2x5GgVNS9ALZdsxhPPvshb9q8FyzdYat8fDyHpqpShQffKU7oKpNDK",
  "key4": "3DmN11f5pto7NepguZnqQkwJnSEiHgy8VowXEKDFVfSKfoAmU9JQrsikfFgnXMSYj3AnRZ3P1c1Cm4mTiAfrWAo9",
  "key5": "3haCZ4a9u5y2W3xhWa8CNP1QGhBvxRuziBtD2hcKrga24e8SJ8Pu8nsVi5hGezdMv8nmDx21bk5hwX2thAv6ELdp",
  "key6": "gDXpKeGjbcD74RgQaA2uuFCfgjSJ6wuWd5Bv7TGRuotYaMvQ3pxy4mCrKaTFGKUTUHFdPXMUtWZmDEpR8TDDbmG",
  "key7": "5JGzD7SMrrMyiTLBqcACfif2KxoDE17vzqoGZ2XmfXnsv3i5rxJDpKHNMFx44BWrBHcpSFfYoqJHHGTE1vhV61Mm",
  "key8": "3a332aPK59zWqBPawjwUSHXpAiMDPvNvLKmed6xpENrtD2jeZm28KfbjunK5GrrysZwPW2R7EVDuWktHxNQPQ4DT",
  "key9": "2hmiqJmLuj4KEQr2nRWYJg5LoGr1AkF58SBhw4rRzKZhstrTJtF9tVw48VaFg6n2eJqGU7YP3F4A6mCNjEqrKzy5",
  "key10": "3hrpPkzgPToMD4HSdFzU6vsZL1DPubpFMc93ghyCF9fYag5jppcbpX5617cwjLogUamvAdxkWdyMZEo8Dwx5dpPD",
  "key11": "vQ6uxK7UCD3LLMN6GgVaxGJ9FazopLXMkRPA988y2QaLjxG9X9kQ8YLKkEBSsjaegh2PYJUaSo34sXQSPA5jhCF",
  "key12": "y8DkyvxWh1eVncJVqg59X5JtG2C6zZWzyr8b95QAnUD7bBcZB7YkzHqNExR8brWJP5MU3rEfYniGy5C2X4AzrZS",
  "key13": "4mXQkVhwrKCC6XwtE4wqN7n7HdBrJZy7EuXh8BevYAjB8FScQmnSyTuue3xz9ZknjUjd87CPLXX6TbBNgFkT8nwJ",
  "key14": "4G2feqctdp8zcpmocw6kuvDbY3xWRcDsspeiNbJ5yzknzYDYwGia729Ut1S7vpjwWs9VQ868F3bm36yjyyzSkRgC",
  "key15": "4WXtTXuVmcRkVZ3pbRsk5fthjGmbqMG4NLaTeus9u9WdSUiWr51fi74B4beLHGMQ4K5JGhRkoRiPQzxEeUek8khA",
  "key16": "42RSN49DcWg2LmyEBT6cFrBA3HM34YH3KWsvRCgdT65uZLuqnQDEeGZVsZUci9DBynLxXmxbGhCfEaMxTBQDfwr5",
  "key17": "3nChYmRSNJNNqmUMddJ3QmnxK7hJ4mKua5RoMMBMjQfXBpKCva4pzo3ZsDMjEJq293tSi6YGMspUyt2cp3oGAEwJ",
  "key18": "BSBNVYfs4aohTEnNa4ZBF8BMEFeURmqYvQYw54euGFU2yVdQzTeonnLZAFu5VUvj5ZHfQKbn8mLc6syBCfPomxP",
  "key19": "2uv1vW6E4rukWQfYu5FztHFgo8b2BGCV6CWcQEpcAyeZ1GcekbM5sLBPjkaFhhjHEnVaVbmDM4obd2Z3LyxSZehe",
  "key20": "4ivP6fSkmDqo1bYb2TSzrsf2vcD4YNGe4rz4mkgD2VrXtcTrMoxVGo5afZSPsRgkuAyHGniJSKkycR4LoWrY8DnJ",
  "key21": "3U83Kmc3oi7mieQaDMgEmVExgcqu64jDV2peEqKjr6LC6SbeeUpJWS16UdL5gZcVXx9eRuE2gkhnog8DNEymVKUz",
  "key22": "4UwBnBQrtUfmUtkUXbtMAsYCFTFSt6T34VK9uL5qt6xpWmqYRgjXNrVXDPBNKh5YiikSoqY7eKKWcSgo71QqS1Fy",
  "key23": "3HUmFZe8spnbmmzwcg5GLRwTwZnfGH1XStYjtm8DWzcNTvkUuoehNY23FvCaRGKKyZ11fdKtYBKcCwv46QR8MNq2",
  "key24": "2PBsYbvEY9U2GPPdgRqZFugqWSDKikoWvUETwicvEyMvprrnG568toWT5n6DYyTTz1kUbLWMrEhrEH57G6zq2VrJ",
  "key25": "4eHxEnoPsGCSSkdp5toLUV4a12fCFWwdAQzJDuiFd6Vq2nVtCbwz1Qo8vzj9s5JdZWM8MNnhU6eKucBXb2Bn2qZ6",
  "key26": "4TFaNciQxw57oAkFdYZdNRxXeVvba7GHbrMvAmXNodtcny9TGWR2dJuKkCwccnLoKxzKsCpUPDDGzxEZphXsiPm4",
  "key27": "3ZjCdzqW5ma1po9DZKdJEFHr9wE4ZRuKLpSVwmc3MVPXgKFsabcJ1tLMgzvG3ZrekYfAeqT3nBTsgoprKuQYxKpj",
  "key28": "8annwXaJuZKKgwG3wzyECqPSpf2yJ3uJhNevugK5tds7Dqp5sBJgh6Gz67fM8fAmWozbpiFbU1k9nMHzDNFh2jn",
  "key29": "5LH7M1F37TvBBuzVjSyM3BCaBPWMEjhNuaKm2zGmcakSq54JbyRJggqWPqBT7qK9VMWKpG24bC1u1hkQ2uKpVA5X",
  "key30": "37so5SxeBGKCjRo9fFc6Hf66ZtTnNSYtNgwfgNka6qfRiHAbxGBwFCsCnoG8vLSvABY44XBNVgRUmG8HcQpMp8EP",
  "key31": "2qPx9FTHDN37Sw7FSMudr8JY6hiPG9ccbModAj3kMm7wrKAKPxPrTXMomFP13CGqZJSHG1TXRknK9o7KKMSgWdia",
  "key32": "5mi5YdrohffHKoRzHyT8nJQMYCDBQBxiBK3YV7uHu97q6KEMjocnMU7VmZV9MQrsCxVhHSVA2eEPZAgBes23Zn3N",
  "key33": "EakRqgWdnPcSVH2J4rhp4fTaumy2TrtKZZfEMHjM6Vt5MwuqzC7Ypvcb9gQumqKj3dY4RDDL1qNUjJdFGwp7ck8",
  "key34": "245CsRvFzigkJiqpJhd2Y3o7NB86ZUAckNmgAvFRotcg18XSvdKnjKm9iEVPup9RTzR2rkejq2LChj2fXEhLEfE5",
  "key35": "3xyiyzMVUyVsCppcuc86NkfrFbPcUTue2piWPRu8S65QX5LZNyPinT5hnt4JYQwmCJ6bqrCh9nAqHKd16yCfdjxe",
  "key36": "3qC2ZEpLvHN4jWgnUtVy7XiqGktewafA1H6LyJFj768KbrHjz1ZW58cMsVqWTZa8r2u3q5Mznze489i77w8FPrY",
  "key37": "5SSCcoyzMT3k2nRC5YUDsXr6yjUbeijEjuD7Ur6Gxj6i2BBWZJRyCxvCh1mKj3RtCuHnwVqQJvJ9pEUq8UnMsE3E",
  "key38": "4Q2fsom1kHUi8r4n4TAwbrjE7s7mj87WV9KmKdkcEKXneu3nFSskdDD5rwBnhWS6BfuUqJAuAKLJKWczN4kvpCCk",
  "key39": "4bewrYSnd3prqoJDTc7XpmtpMT3K3aSMUbQxH26Skycoa22kqPN1dxquNd5bZne86Dgc7phniWyyG6DZx1VbErCr",
  "key40": "3qZ7ebfaBAZJaWJ1MwpBsLdSK5288aBAV5qU2BDBQCZyjEnZJQqmATKtP2WcUaeJ9r3eBtbVWZYvp3dvwUN5YLj2",
  "key41": "3FFY8LmcL1ipE87VaqhGf28f8hUNUgYeCMGBt2PegG8SMJfSZBYH21c83fK2EeKmdwtgKCoK8uSWPNJYQ8fFJoMs",
  "key42": "5t7PgaJNscxboEacTiKQ2RcevL6jGgj68tjPXEVWAPBp7sJnTbbgYySAFfXU6QsRqLwiva66qAWibuWnrT2vEwp5",
  "key43": "3i4TMxoqdR6oi151FFbxSiG45N2G9Y2VLEBuY8WqwdbL8wfjux42ArqrkYkUHEUKqjFqTVCJNejhLAjNt5xdjPyk",
  "key44": "H6YMGk7qq388wDGEnsAdJzsvQHgVcVJMZ4w3JDzZ3otxaxidpaz1uQB3ACUtNqmQVu9ChGn3V1VgoAY2pu1VFD8",
  "key45": "5zJhgLDthFwgW2s9R68oJETfMKkzrdkpRNfQjYWMhdtQQQrFhvcg4iYxWojpU9RFnsZih6i8mYkXghp2NRHi9NoX",
  "key46": "5TDXx5xN2cmgPVwRC18CM8k2m3HH2JZh5Qhe4pS8REz9XG9gxwYGwXn7it2v9PbNn6cwBCStGrJrNJafCjSfogge"
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
