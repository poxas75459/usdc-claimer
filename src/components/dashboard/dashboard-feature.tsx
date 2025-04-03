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
    "27SagiVALJXpiUpL6yDkC2LNhYEWK1yE9zHFJT9w472ZjYU7qBmkQiLxZcjm1sUTsbKxQTNtt1LKZQF1X5JBMeZa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KHCbQjjqAEnbQ42txNeb2T1RLqr6H2Ru2tGqHe6BexPABaKadRoLJyHpACYvr9RgBKoacPwwRLtiGw3SaEPEYUV",
  "key1": "3GVE7dGmexL4ps6hBjjGuyEt1jojF6ZqMA9MCKjBzXrSv4kTZx1vSk5bDyZPGKCLMwUWUuvuTrE4wLNydpgmHzW6",
  "key2": "qVJU9cgy8caL2dCVECvmkmdMpUn3deYDpAkuCMCx6TVCYS6evb4mbocFPQDytxKrGYdiZiyFq3naTyW1T9iA4wd",
  "key3": "65SoDgrPhG2vwN2w6EWte6Qm9xixnBiRXnWsUpW1YTHiFWZBFxV5aT8Mg1iFSrVrdjFR5pLYHBx5Z4ZVSACpWprR",
  "key4": "4Fp8Taiaoxw9t4h4GXyXNckMFLgU4DqEgpzF8J4uwpoJD6RorhqddgBuaXnNYahTrqjQ4ZLxe7UU4GGMQzw3348U",
  "key5": "F5PCGepJSnAQrLXxL2vQyXcahmMXfN1mtoAW8wFmnmJXiYPWSmJWJbDuGQ2UK3dq8Bu5oJthd7CiREUgSL8KgEh",
  "key6": "3R4z1eVvj5BBakoTjbEh6JHUhhrJt13Vz9ENFw7cozsw12N8Gz2GFwoemJdxW9EMoou4cvnkEyCGMuTiLTvrVDXg",
  "key7": "3roFAiTnd8xvqoXHJSVQxNircdGk2CZTV1coEh2HfjYE9g7YJJqke8xBiVuEarb4UsPGy17WBykGb7aFf8DTTeTW",
  "key8": "5LWa1tTA5rMwCu9cKVtApEjLZo2NyFnpBNzt3PbUNNEo3d9PTGp42Nds1YVoVzBuGKmDsDofByXeFepTVj8MK85j",
  "key9": "4GLBNtCdBktKyU5kokijisi2977GFrx5pbhCRah448regd34k8BuxFf8yujahaMFWSwvJp4RneTaHnsaTa8z3Skt",
  "key10": "4Ket9egGXedczeZE1coVUiE1qPMFQFXzKX9ttBiZhyqtnD6eohcBSLEJQbP4BkqUSbPhEN5YTDRMXNAc4E1vcxii",
  "key11": "3ZBXc2HEzPU2J7nb1DuVS3K4yp8DrNvMarqkt7Bccw1C5QAithY7YMPE1dWQxapYAzMZgrrWo3CCQhYNMD3D693E",
  "key12": "57EUXLy6X2Di8VNdZLn38UqSLoPTzajcvFEtV1f66vWKk1XpChGcb7LaJimNhekzNVgQza8DAZoAXmzJGJdzr4GJ",
  "key13": "2R6zfeXDbUiBjH7uU37RAvbFr8pEpHCt2pcTJpEScKyacc898nXA4wrxmAwTt9oadxCGkUM5WJjuawV5tYXpnC9P",
  "key14": "VPxbeLbCNhKpAPE5gWheeTnKQ8o45rbVuekBfwtN7ypceyVrFHxHXzgTYy16Xg2Hze4FcuyMoX9S3U4kQy8Baj2",
  "key15": "r5UGEoMaeQVvo55xMW1Ws4CabSyevWsbDjahU4obckEoS1xENFj37WyXzsKhXVpXvLw73KQBkFrqJTEgeCPQQnF",
  "key16": "123bfRocSH7koAdc6bn6t8T7zPYjCDAD8mvxYyXvcfWVfnXo8pJs6iqPk5U7PZQFYSYdPj7VEv59cEz6RA9VXBhN",
  "key17": "2tQyYfA7VoEbABnfN5m4ja88mPYAUcxztsNsgiWVbRmbYNsLFniagsc4arqutCy3N6VhxmZMeCbvDN8tguo9Nc8G",
  "key18": "NKEfdUTqkXPWWeoUUo5WpHCKWGxvSzykNuphfLjyNSt8mhjWREhRH55yrytJ4j95vfgZZaR1z4AqHAdntv9sP9L",
  "key19": "5fcxWyF8PN7Y1pmHQgVnCxynNEXgKTd1MhnvtBzNBi3sS2mmnYvyaWvXuxvCeQmEVXFAik1vdTApwYips1N3bDis",
  "key20": "4h1s1bH5MroEc9EXvGj7Jzst4GQLP8PR5k8pEJMmYQxcNyumYCay8s1KhZfaXJjwB5sTbgS61wYyrAHSswQpSXq3",
  "key21": "4QPmWRSXjc37FMTJq6Tjgnj9v9nXrALYtP71yVByggzy5fpKWeEdmvzkhHzVwetLyPmfqZecZBi3Lqobc8zp92w9",
  "key22": "5aNhsXMR89dHdPAXdZogSDkSW5CocGJT9gXUxANadogbSYs6BPMoKdodAwb8CtvZAq19UuH5wLM2daR5yCrUigZN",
  "key23": "2eFQcwZ7fajom2QvS1gV3cSHumF7YMUndTuDYN5zJXymiBvmQpRhKSz8MoLEFkEas9PV5a2osb8atPGjWtqYNzxx",
  "key24": "5i3si7gVRENh7ZQUE2sqUD8ozrDK97AZbnJmJ97x8H1BMP1oMBUcwB6yHBJocCcukyTA1xWpbDwA9Kz1c5EhXd17",
  "key25": "4Xrd9rGYJunijxsKhKW1qw7npSSuR5WMFxBbBnQmZVL52pyUjkd4u1CgQrvx9bbU7J83TeqVdgcPCS2aNThxRnda",
  "key26": "4AxZTuDZKGMTUcvwBz72LarzRiJupQpUzPs1V4XwFJt2h9cyQM2REnP4MeJx8cZaXFmxuSAoHmSyXDt1mbWqqsLn",
  "key27": "2LVNX2EMUeazuSKEAzkrX9bXoX31gc8xtB4pds3181gXnK9Q2kpaKdBVGPwBXbv6Aqte5KjHUWrMv1MsHoiLqpTF",
  "key28": "5Py5gw5G6dVJYp7fQeXPEZwiwpMas7Mvagxbtqh7C9kQHoygRQ9xT1MAd4a45NEViGSCkKk2XVT1RAaLg876c9aR",
  "key29": "2KyJjBgjUrsh1NvzgVrBy5QoB5bikZrufff7Fp2JHZhEHu8M9bGgYQFuEmSfg5U27UdG9KM1AjFw3McviGnFR4UP",
  "key30": "4fY2eNtS36SqnPX7tnJLJR3qB3pYnBWz5nTDHwuaHDbcz2FvJhVktGBvfqXptYiRWp13JsdyWZJeDBtixyPa3duP",
  "key31": "TfbmEKmdsMkVkQBxj85vze1ETa4qSGBTgERGWV9PzMNhpdrLez7Yc2DvJVrCUhwKQfX4eiGGqkfEhD8gv8mx1SG",
  "key32": "3PMpyPKHVpV5jjVnFJenuvqW3RnUsVLMGXYYHBV6yA9fGVfK2kXFKU7bVVxgkDu3kxCpBRem9J2UtEDhbLoD7g1S",
  "key33": "3ZdBSE9joCyLRjgqnAjhhY13PXTbaeqXkDNCfVtEEC4pVcvwnt3JdE1MWXHGBZFHo4aeFonpnG6Fc9PFHz9ecKTs",
  "key34": "31tJrUEN5zg7GU4GsButiMo6RZxUoh4U8kVgfSH5rPLZejxLF2yzYVbTEAJwySrfEodJGmRL9gDf8xj6GPPX36mG",
  "key35": "2zf3MQEUTugbR3hjYyaKzmyXbhjU8Sm4i7PtN98oaDENZ63yq2SNek69noUhmvqGaHFzaZhttx72BmjwUNLicSMz",
  "key36": "wpAMA2shdod7SozTkb2Uqh4HThGTWQMcUMihsChQTVTeWPLnLLxCNx9vQFgpAd6m4N8ncJY7nyePEgy8yhWbx1n",
  "key37": "2PvGvMEiuJdrgPVatTjYunGScdNdn5JRPJid4r8gaCSJZERnJZzYpZMoBHstKUqpY7FmCNGUymqNBeKvrpAWkrKM",
  "key38": "83ra5oEmBCHVqnRACmou2YfYAvv68BeVV1CxPgkZVaem9kJefS3NvhLE9qzHfLJyWerJZchi4qWfRCmhAyFMZU5",
  "key39": "s5bUmTyMmpXKY6ho43CugDrFpuwNjgGn31TNiDrqAr1k5FrNtGKDWRS8fWDthM2njpquJ5a7tSgkGZULaM37Xd5",
  "key40": "4vPm87PrGwaEXdU7dchYoVfWyd1PRRBceWHYTvV3RSFMeMTTYLTQR19q42cL5tUjNiXmUgKeteFsTtzyXK264Ntg",
  "key41": "4pDTEY6iztSE9ad3ns6SCLixNZQZxasvy8We4iqof4mywsdVcvsSPdjWC7AHdXpzeiiULo7DJeyYgSooPN9XdFnf",
  "key42": "LbYxFdSCnxH5FWXcrRJShJ156qpBFddMq7m7Y2gfLPZJQPCGuXSGjyEEv8huy4FStzrXHEy5ASzXbNwtYqtSh1F",
  "key43": "3dTtN9Z82Yo4YKfGzpAGMBiXn8dHhB2jh9p8wpCV8Vipvst1b8RZHMHv5BVdEsprmhLGXUZhMSoWVANrWFScgRC8",
  "key44": "2P4t69uvwd2ZmPha8edceGSABRC5aA3DNZrQGjwupZKv9gMy9eoHmBU2ZSuJQK2J2Tnxa8mgu9oTXxD7HHMfYJWu",
  "key45": "4KQwQv4zXBMBv1tJa8gw6jwBuCq5x7KMvsDmqG14RGy3WR3Mi8bhiJDoGP7gbqL4mcrZwk8EKEFHmYPyiWbQx2Ue"
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
