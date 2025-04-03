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
    "29fC2o9pzQc74oX6ZoLUfbB1jEwwspytBCe345D7JBv7UGQTbNyoi79p63nUcspbg9r3hrywMkiMKTnQMfAQHzi6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LRSTBrGAKV2FrkFz1AZw7r462d2VWJoEftUxycodqTXusQyHN58cLqdoqHvUVinYrRD3psYrX4C1x2kEsyvdehe",
  "key1": "4wzVdbHGEoTZubBc7aeNEcTB4dMyMzMpgR175rNgAER1HAQX6MsZ2WAY2kHRU6QhQ8VbcMhYkjAnBPJce8FaEbu7",
  "key2": "2LgZbLdbto9jvDGK6uhPhvJq61ja1AZUbZNiyMUVt4GgRiqeM5RSDFDK168niZXVDjQn1cdF7LFu743u1uEsyPd",
  "key3": "5CrWxjkeMixozQqrtecpHZfQodQMhs16q7ExHbh3L8aaz11zPxQJ4SxnCt4pgNZT2pCG6mcU79EVxJCbCdWKugeR",
  "key4": "4FpT1URpVUbyXBBaxorasbcqyrAbNro4Jp8b2cKz8AX5zA8QCg1eiYGriij5uMyQ9KwyFwjShEDqfWnpyGxj6xb6",
  "key5": "3prBd4pu44q3K2Ked7jAn8X9WKinoPrDLyyNgsDbahDPj863s5smXcrPyXB6oXDVNbjGgVVRrEFsTe4ohLe3vQWG",
  "key6": "cFHYdcECiecug8ynScDYUgeHBAvPhN9ggLkG198huvNwhas6Gb14Vy6BZn5s51GLgR6CWHjpN951MLQFLAkR5uo",
  "key7": "4f72zzCwMzcxEoXANm1ntoZ26XN76qvSx8mphWqZjALHhu7nNvW12pvwyuzGUCGT7LWapacLinxzsMj4vUoHaJN1",
  "key8": "4tNfQY8WxjHm6RNXQgHQevd1FPtDuzsqVK43TBHdEBENDKUxfUAUJbnCgYLZLeNUQXVuqYsajXFLWsGD8JcD71BV",
  "key9": "3rmd5XubqvMe8d7FgbrLzM6DAsnDtfqiuGpBJCRM4g1kVtDzQWBuW8hZCjTNdDqfSsoeoAL6uoREAXXiYzqX5vJJ",
  "key10": "2Wj7S3uATopbGXjgF9b5jw85fumGZHgmJTE5sxxScfomnisaVH9zWxQYUumSmN7ks4aoAVFqZC3fNkpYyB3ArV6s",
  "key11": "4rECmacgwxrVHf8hDvaDQRrtvub8mjeE1kSp55QFgspU8QPz4Ex3RUqNEkytnVzyq3MYq9BKU5cE9QSaCQbhWZpf",
  "key12": "2ggXKJdpqoekeiKMSppCqTVoPW3RHAMzNAbmxapMSFXspSiT4fuz77RF7aEmwcvAo6UfCQg6KMJUSBb6KA2DPAV3",
  "key13": "4FSH6dpaYpUtUL5JV2eaxy1Djfvp817QEHSvPwvVXGfBG9JvfDhHzV54hut6z8pmNM21ZnR1BbjEh66rHYuaqgs1",
  "key14": "2tZooPP9jvnbfwBmHx2QCc4yeAos996tUKK6F4sMVfiK6CDMKBfxYe382bYSYWRzwcwe8VdkY6m2KRLyUgfHAFra",
  "key15": "5crLXw6RgM2mwxnjVVnEFqAPcCE7bsa74NcVC7VP1yeLWGcAuVrhQg3dJShedZnUzNaSDEnEyjfyxEcBuaQgLS1z",
  "key16": "2AwvVe3vE7xxaZkMiLpffmG6wDZKNy4WBX3uvzRGZsZhEeGx8SbgepCvrgrQ4PcyyGTqU9rQwDUJ7QyN5XimHdy8",
  "key17": "3VqLdSRMwafW4ksq8kLkAvjPTXh24dZjM4JdmBPageJGbpULt3bpdmfsmnL4zPiua396Y1efCFF1JjTRMZkkw9i1",
  "key18": "2S5qoagBcAnRUxvfNs7xJMkNthEzEd37WTikoo6bRYf553P8GduaoW3BaCowGoQB4HvPzpwGaYHZLxBem3A41aG4",
  "key19": "5M2xBT3Pb3i6uWt2UHfGy8YY7y8MEJVrkFSLZRybtoktVCUGwbqFoNYT2EUKYsMmnk1EpguCSci8Kt5tL6A2dRnd",
  "key20": "Ux9kLJU8QLCpYp1bbX7MF58iidcKTFXM5BdAxc6dPSUC31nKssQuBEzFjpa2RH6NpxNxAJVqQWdgAbsvrnDNfCt",
  "key21": "ojr3Q3LYXQCctBXYqea4mfxnzP7pop14TkHvFrPnQ5TVLiBvdpdjBfr93W1KhZBPK17tgiGsjRZxPWPPVWHtXMm",
  "key22": "5SeAAzoi2B9UsqkEhCaKwVcuRGwWGeWTTajwbncLaS4Kxyk29AvGkG9gBpCWA1dLPuypA7Geiq8AWRWsPRtDRKTh",
  "key23": "27JYWeCWBZsMj6WEGWPKDMiC7pBjEheyqgNELLzdKoePp7TK2CztepAGKCaDKHk98oTUXvTiNdytbibh41aCdpoT",
  "key24": "3qBniKWk9tDFJ7KGhsZUng8egEdWjpJFaMxcszSdULCiUxgjTth7cUTccVo4oECy9Nu1Z7iGugf3cCaSTDAqRnuW",
  "key25": "28TV6785hhdVvq64zRi1AUai6W4mtz1RvVEM9SebXRh9gHSbpruuPvEy1tZzmCk8LiTEBkBuTARLKZfo6GpWjapZ",
  "key26": "uG1LreYAYhkcimHcEPWNLdmG9tdmWJ1TBDVcht1vcvsnSm4zmC6HGM9nHCghFMXUenWQJvC5pVtURMFqMtBjisT",
  "key27": "4CfWFN1dj4N61wg5tVrDtZF4NWGLEjYAYTT7RePnuRpQUfUwaZnu9UcAjbMqStQh1rtrg4UPWGzjENx2acbGMrFF",
  "key28": "3wJtD3sWnWbV7YJ28innBR3kgqXCd8Y2gi3p279TJfp3uqHpCfM5HS7bLw1TpVueotTnnfBRgzFx1WLtDBtkJwEh",
  "key29": "3kNjSNNfHKWocmvpcTYN1i4RF2Rz42okGEDxXXYSpLYQmeB1HUtVoXLYpWo7iLCmBitZ2BDj6QTwTmWzBT1SXkkz",
  "key30": "5kHSzhwdn3w6dPVujgQ3GuZ1NRx4AR9PhgWx4YM86xqEcGYAE7bM6tRNPg9aEhVZbBVWMtt9H5xkw5HpaHgP3ccX",
  "key31": "4b8R4LEqxNPjRua2Nkk3h3jujJ7Tb9fnafqAdhf2mvAN5s4pJHvoLea9peYwfvKADvZo8sa3EL6J1QH3m5BkGPLB",
  "key32": "2bNVUmapPzKz9eGaDqdeymMuvu533rTkQLepdWEKT5RmMyLFNExah831ZZFFr9hgBG71SEWsCrA3amCcYA4D6fet",
  "key33": "3LRjQRiq76CBXmrg3rKKQWPdiz4zyjqvPv2qCNJoQkHBMPk6kwKyLXzKDcssfT754SQ95ZeQ9CzKQcCan8HSSu5j",
  "key34": "BvpoJwEorYnfXPxQDdWi6oerTzC1Sd5dKDqyF1PpEcWzxePzYGLVzehAmarxtmMcoecfVMPr7zdUt3Q5b8osfoU",
  "key35": "BWaG6FPpHdD3y8M31SUUmqRzWUkLTaip4LCRAc83wi4SRV4zog2Aap5H8t7vkrFVzyZyvRkwnpvipYBCJQL8M3v",
  "key36": "35mSjRfJ8Cq14rzvmJaud5SDb5AY8MeYoUfEqwtyUTyNTKSh9jRtY9NeqnRV96FHsKDTnEGeYfpFwpPqn4GF7Tpq",
  "key37": "3naLo6rjm6kmmro5Wms3rQMvysvSoVZLjV2ReXjTW2whDwvD2QcT84rHbnN8Zhx61WaMKLbcz83x8aH85tNkcaKt",
  "key38": "39p4Xk4CSksEBaWscm3F8msMWre7ekkbAC1Cisg8K96ShiVkUE457MR6pWRETuc7kFPrmdHw8r6hSULZwMok5egM",
  "key39": "3k3VpjqZxeYWzPAwkLN9qm42cnjGKeB72VfKJzSso7RGp7YdBCJQJDPMbx3UKy9muu4hWutnzbw98s7G5CQqsnUZ",
  "key40": "3k1ccGKPexWAjeGNKAWX7uHfJ9iXM8WxjMuK3zody5ALFMNrXis1Vdyo9a187PZzaxfhHo8YCJm9AU8AoGveT1RC",
  "key41": "juanRqfAq1p5zqXBZVuKanm5Zhbw376EvwQRQoEgpMg8fgC2uvU5Y6JM51ircid8bLqjF6tGMfjkx81x97v4fPz",
  "key42": "zZ5GiViiCc8Fjc2RpznwP75bmzvtNkcZS1Ut6sCXQUjKnDh8JJ3BxQrwtYpDo5vxe3PpdTGmRoovQKHZbUpTMak",
  "key43": "4pWdP73XEyFdyafukRRPtSB5fUG63JYPXPQ7hvKpuPxNSKLzfEa57EDsDhykhNFnjq1xEUGosCjzGKifaUMA4cQ"
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
