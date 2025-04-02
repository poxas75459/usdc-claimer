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
    "5z8suS8TiNBvccjNxLw96PihCFWgF9F5fymNhtYwm4EWGw1Kf7ZHuHEmjv8EnVP4H4qDGVNMtNsVEMQzQttDGSW8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VCqs8W75QCXKHbhuorbKihE77Cvb5sdrumKxshbYJuBYk9qGgTetSS7v9iKxC5KKG7U1iiQ1T6nFBesKgwDd2BB",
  "key1": "5JyrXitC8CpbyCygzQ6Q7RQmDH52abL5vRwwFaeDYWXMdF53vFhP2an1QCZWseX98kCxTPiXpD3LMV1vzDy4xJDp",
  "key2": "4vmXBPtSLE2xBndpHcNBd4Gd71iRBREJocFSDAFZoXLBFtgD5PUKtLRGk8C4xurR1JN8YeJ4hK5eDHuzVPX3ho4J",
  "key3": "3sNGWLbdXAtbeqcLDMZFKkhy2LEEffDQncZTpzfMgJ9zJd7Dpgq528gXp5aLQydyUho7eJGPTS3RKxWvgDwn4gf4",
  "key4": "5PU1eAqtZ4oCyRqXgccCJE7Q6ou8T2N7UEhj2ur6g6of8bY1h21yaLdRtKPZGf1C2b7cMyBTS2Ao6QAyGCr3T8P6",
  "key5": "4tjzRMqGrxcDDysY6yNBP5k82fLpAE3HkuSkZViWiDALfwxxQqTp34scVRbjLB5t9Qy4eV2uqzXBioSBX1yT6dpQ",
  "key6": "3PbQzNPLzzZ52DT3cPpr4LEYACpbvxGFtH1dpzMu83bTxYVEyWQJ1fSDNej5AEtycjMgF1sGH7QtvYdrfghnC2TH",
  "key7": "53qS4pP3KYDe6QXH6R3bqx66tkygmQqDi9fyWad9TUS3gP1EU5Ch9ypEZFKQeAMidywjERqietkHz1ACr3DSeKGR",
  "key8": "3vRC3a264RfgrhzkkhNipeqKqVsnTqMBMGTcENZpJSXBry9JxXr3FK5wKLAXmV69fuupectxBU29wBSeMfpBub7r",
  "key9": "25mT9TCxQ7mXsPW8JKED5dXwhkPhVzaECEnRzQMDY3jL52NA7fbesnP5SkJefsSKev4XoamEn2TzmeuEHoQzGEC7",
  "key10": "5XDD8aoFzfShDAKjB5BtsGwHFpp5AZPcJ5vTuxNnvsxDQBfajwQZx9X2Hyphwir6PKGDgDvMYufYnstwWwumocno",
  "key11": "VyMcFjf9Vk3C53iq3rHNdj2bRdrFd1UvRxWVbdqrka86Mtw3jLPFk7UsZ5Eba2VJPdLFt2AzGVA94ZKM6Tm2YMZ",
  "key12": "5HZXzJNz5tM2boe8PaVNmhf89zZqseiyFrDqW3azDyG6Jqra6GbR6bJX539U151FBgN9J9UhWWmaFde8qsnx9RXc",
  "key13": "4BvDnLH1SUbhFr5mpcNo1ZzDoRmuwYc4kNceKnKAijf29sE3P7FdxFLpsTvGEyxpUmaycwVpM1LGLQkodMyi2tPv",
  "key14": "4HMPMuch7hui4aeEg4g4xnoxGux5Ei8psWHb1RMmNRED2qNyb9mutqknxPbmain7PWYsNmAH6GEHk98eKdLwmdZ5",
  "key15": "4DnWPr3Czj1Nvh1ZNuAEh83oiZfcPbGrfP8uFjfuPwiVUbF5AyM16NsDPt9eTWQBx9grDPiBCsRD4q8NmWRSWfaM",
  "key16": "2NJzMjdw5Jkh1dsEXqVAqTbTRJFz44XdF1Zzh8HJHn19mxw9UTbaCrdKBpcDp4yrsSiuWZZZ6LjbWLNrgoZdjjGE",
  "key17": "4U25NUHHrR1GbGj87WSaq6ZjBWywaPwACuGEAeJ4RkfdY5A3BqH296ZiyxcNnPz3GsZa2YbqZWBXV41VptRTRQJX",
  "key18": "553MuwATV7X9FT7tXhZLGAgdV3Gnv32zcFqMheiWhNqXRBW2AXZpoqmsGsFbofd1Q6UxiTRv7vKsa1VqzQgezJ9D",
  "key19": "32NMuJEXXQaiXttfq5LSdD2fjWnFMriP9oSjtBLvvMoiumhRoUAmPPZD1ug8xChxhYtgBYpbpK2ko8fLoF4rshX5",
  "key20": "3hjuwtHEAohu6kX6GLMS9UTeuVySHp32YS6FxNivSXc9GB94cUJHHh78zqgPQEQQ45E9F51Dns8mvMCvVWdpki5Y",
  "key21": "v2qhAp5BwiooyDCSfaLEdHRoSk2mB2MtosPxsS7tKKKiGuv3zDw3hiSE7wfVeykMot98L168s2XTtbE2VGaUENs",
  "key22": "4HWS8nCj9Va6sQksnN7JzxXHb9o3sH9wWY1Ek5sLe78fwjwkxCHzEgaU1wDGxqbUHuPYb1m3x4Wqvz9ZAQhUX54a",
  "key23": "5eVmpyvqT3yeu4gmsfYyZs9S8XqQYL2z153nw1s4uSauswwwJxigp3RHpvCj2818p1D5YQUrj2gukFJBqS7eDpR4",
  "key24": "Dxy7GCRdt6pLxMDTbpLR9vZ2eC4DF6B3ELeEovWWLtzKMN6MurFvgKPS38RcQDWcuTRVrMRF1C5VFXsbiEHNAV9",
  "key25": "2jPKT8cWTsa6r7sJoFLbykAbLMoM3hUyqL5H49YCwBqvsiztVJGeFfzmmjgqGsBea4QDdYbcZwSScXjeUGRhgHEa",
  "key26": "49aV7ffWTLbNRuWiJnAzCQq4YpGh3TLy6UYz4rfGN77PsFGadzSE5mRECzZAJQcfH3r3Qiok8UP7PxNM5HG53frL",
  "key27": "3c1H1jnCzwpKJB49bdzywo8QhV5N53bSQKk7uGpcmpYMgGw4eAmuzMemXw4cBguxG9DiWZ9SD9Tzs2qMwdJ1UkSx",
  "key28": "44BVdMgHveRGE226otT1Vuo4MBEAzt3dNcTyynCxomL9XeTYMMEpJjkXh7o2x6w9ugWVdjhB1Z72dkqKVNg8b2c8",
  "key29": "5bF7PWebnRXAenmycLE66bExsyozERrLENPjyWB7ET4PPXJDgS2iUdWGYLMKDNrfgoaqqx9P7ofytqsiVpnWa1jx",
  "key30": "2MaWapZ2B4CWYDivKpMsEwuMSo2oQaSs9i65GVysLkrM1hZ2HS2wSzNAMYRmujb8dSseZVAQJUe23DJa2Kk3vxhD",
  "key31": "3isDZYiEJw9sy3GZcdTUMQKczT87GZB9MT6iwsje1o3Yk2fbsYwM5y63BEixTda7dwgunyRqoB8HXLxPPYkQWxCK",
  "key32": "4r4VSVBoEH7a7i6nwoVdh4ho2StFwUbrbPhQukiRsgoEvbfh9oZfzH9go7xWbVAadU58GmhdrGpHwBrREqbrZBuY",
  "key33": "4W12hRgW8R5FE1UgdUsAiX7vhtVhRuWj2ETuutA6E2yh64RFKELcL1jfX27CzVgYpxack3qoZtnXePgkbLpxU3K3",
  "key34": "2uM5hzhYDHdmfYtsCcTxdyaEQZifr64xX7VviJWEDMcicdxY2SnHRet8i682xJV1X88oN3S3TrhkzJv2AD5pT836",
  "key35": "4SDsYcXBqnprcu5PLRhGxv26VZn42HXqAGtRdpLFJfzsCoXKL6Cj6VjW2pbhcXdbfM8YJLLgNF7TkJsgP19puX8V",
  "key36": "iBFeadyzxxHXAWPZ2CpgRHubSeyFxRhB9rQ7jLXMCGNtNG6M8Rt1fJcpvuGh9P6K9hLLHxC8kLVmZToUhMKwbCA",
  "key37": "44XGWvp7rRJfUbaiQtQDbjpWMC4HvfruBr5wuJzKBQp8LDkyNakU9NX4xc6JzQpsNAPATuGPuPuer4EdGAFEdAQA",
  "key38": "36rDpT2g8HAbrDrFyq4yjVupfHZ1YNJ8fLPkhfzCVajT8tmZeWuAKvhWWMfe2bSPP1JGvEBMTUhmEiuYAAzt7DDG",
  "key39": "27HTpBqRuampKH8mAiqVrL7smvRhiTpnat8oCEAefPbPEXExKzRjV3kuUMe67CK1TJ4Kr8WfZVNXYgrNt6nudfph",
  "key40": "3WkXcra3ui4V8ZWCrUQfydcDjbcwUepNa4AWR526H64zpQUVF8G6b6TYUSukzkQpShBEzhBPqw7yMBRrPZZdeh18",
  "key41": "5fKZEFm32BPvroYCePK1jiLkXHLQhXZ6nnERneE2gAdcAE18dkGv2ipsHfX3VqZwJnTz4goMJsn2gA8nAA1sVSYU",
  "key42": "5DaDShNqHAa4b1Ve1jx5U8tAfrgDSWVA6zr5orDaqNHdptnDYJhFp5EEadRScMkBMJD5j7vhDsGASA5vmKgZmZga",
  "key43": "2fjsykrUTQEXSMfrrmRNu1jUn9JQwMZLu4T538KZ4LpsAGVDNamg4yQARNF7HWBV8BoszQ7cKoFQUZSCnNhPccfM",
  "key44": "4jQwmebdvdpeFUd2zVurEwZbNomeejZKnbzTvh3yLsdWSP5ta91aW6RvYrz7nHXssaCo1yVmFe4yiWVrfNRfNCbm",
  "key45": "5xcSxxLeXJRQddR11X4AAEtdFvJJRkAgMEb8kezcMDQRSQBvE98wj28Y5u4rWXRmBtoXwNqjJtLpWUp35rh4BGTj",
  "key46": "4TYf8n4z9DeatXJxtz6XCVBMKqjUorgbRj3oxUsq4QiiGPWRkCsD47Fiy6cWEyA7d5qRCYxFPpFadP78bKNrk2SA",
  "key47": "5JYrm2R58rqywubEqizycC7wt2Cu6Qo3HyANoE8L6euZb8RfHUeWZLZuPgXHk6ceThY2TunCW1RgUHzRLFS3Y275",
  "key48": "5KBXZ1ye2fuWNANdMd8RfH3X5QEw8mREAJT45GR2RrBHfi2FHPfwot2BXDgy85BdcYdySJmrMZ5sNVBRtNd5qHyq",
  "key49": "h3HwQaScd3YrmemZ5zsijLPoegNxDyy9UpevVaBX51v9jgzoLFdPmwLFy8DRoMVDpQMVc2M4AAnLh3nvyiXFLnV"
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
