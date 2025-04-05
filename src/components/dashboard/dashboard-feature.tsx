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
    "3GJm5eUzd84KAnqkF1VGNX6bxbwU58MWrJu7LFP8wzoxet27oGuUtsMeJeuFBuvPp9QFRxodb3WCN15EpecdmozN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XkM2ZUrKojHn1iK7RqW9fc8DA9onkmQaBWVomuqG2BUGsN5qYMXiX4uYfL5DdEN96rJi16yy2a6niv2pMZG8Rb6",
  "key1": "3eJ7EyKURnjDTwtgYaW5HVk7CbEPf6P3xmEUWrfep1wuySwmLTnW8t5gtSmfefm9pZ2aKPP4QhKGPbs1x6YuUJ12",
  "key2": "RF1yKJApTaRmFCtWLZe4k49HAf8VMFxU8ZhD997FUP9Jnt2LUiGzNyErE4fo3ZTMiic9nBcUckLjkEmJ7mBNxBK",
  "key3": "wyvFpTnmmA9Tsf48Cw5NMvysngJHwUgmooz5QaB1PzVRDwV6W1iBwhHsgGGMMhf2BvUcuTmxq9Caa2RWqyuBDZr",
  "key4": "5wodBogx5CKSAvkjtB5H2C4dfvY3NWcXQ5LYJ5yamtsRRfFL3UFLzvLrLpwtDGffhSEZvb2kThuxBvG6yX6h6Qpf",
  "key5": "3RQKJxyR6gxrTyn32sNMioutBfgugcqx7Ad1RX89QeN8z93ATKVxFHLwwMPUuMNWayZ6pp7CATMWvMFydsudMXbh",
  "key6": "5j1xTcaFJfvHoJbFo5cXYpJhrY51WJmcR2ZXTuwYFU9jRtzMHx7tjcnyiuSpcoHRZv1X6F9WoNSBhtAkKgDhD4T3",
  "key7": "3LA43nYSF3NjZP2obq3D9HTpyXkY9LJEheNMMsmFqVZuWjsPtzJtGkHtcQZ69M9cFmZgZnPfGgtvpiTw5Xrw2XEL",
  "key8": "4c4GobghpgMyJEYThCpQwDzENMUtmVLrop6ptMx597pQrpSCn4LYY58gBrxhAnhhSdT466UYhyg9Qd6WADoz5QAp",
  "key9": "3sRaeVAcA6hHf9vQF4mMmpFiMxd2remDb9XP1wHjxQMTY6Xj9TNJ637JnJ8XUsUCNFwt8XzVqeDbstJiXEHDEeK7",
  "key10": "5bkqyy6zzxWVCqFavqWMHZLNirccpBoLHuThykuiT66nDEokVEvPEtVi8mJFgRuMsWLLazyzNbeYgGA6U5n2h3yT",
  "key11": "2CPUPtPa7jhLNCvuZsRKwtforiANwfYG36Yd8xkQkvKYniY7zFgAgsmnNNSYEKDKanG6XpkZmV8GfRSPFYN2y4zC",
  "key12": "3Qe3EAxYDZFuwFcuHnyTMEvbZSWs9pQLErmhBBmb2yr38jwyY3oHGdMoUzTFiujnMhG4FaN4eP8SkcNb2mzFmh5K",
  "key13": "25Jp5JQ18AMBXMfBc4KbzP4gHz9jbzZTmHDyJL9DQ7DZFHVVo1r3PrKRiqN15PTLZxmd13a7PCqWEib1DyCDyzSF",
  "key14": "2xpW212EHNBPhZuz6MGhifdfC3Ay6PiQHWAtZsJjjU9HJh9uDPQK2Z5qqZWn9Hjs13AYViRoaBRG5vV1hcK98RCG",
  "key15": "4iGEE1LPJEJHe6n6LWCkv2KsZT43AD2h9JAARihPP2qX4CjhvwFQM77Ypfp2PdBSFgaGPNiQcGQkjbSp2mMUiEj9",
  "key16": "yaEdTeVyR31o6j2QYUa3SZXfrkCnLZNCgJA2D9P9FbzjXp3Y5uBcPWWK5okRJ5Zxpv1xnC3jS7Gw2EutwPmCTHG",
  "key17": "5W3NbFiAcGWX5cs7EoEQqYsW11ib4tqJjNaiJpZvhCmv9fgPcTJZeqFhWRjEHAhfcDyiYS5QPfRNJdy8NSebhznv",
  "key18": "J4wjxjBYk1ejPGDe8eKdisgYQbjJB48GWHyNa6CM7W7J4yT8CiTrBjqYCK2mtPQnBEjx1vqE3JzvmNDWj1rYFCG",
  "key19": "2i3YTDn1xBZikD5kQ24iT6BS3dHohgjezuRhvBikSGzNdt4eyahEhSp4CYY2rjUS4dXUCeGG8yasq9BeZpxQZGqJ",
  "key20": "4ei17ATdyd1VRRrBi6NRLdWTLTJJcR9Wmxc1KWVJHq8spcu5xG2YkY7BM6tEXjwuEJUb8STLG6qeG1aZU8AFpsSG",
  "key21": "29mdDiD7tb65LuzoDPF6YFPNq7F2Sfr3WsH4XWPVWzr3N7jp6fyF3fkcycaXxcoZMKmb62mTXsEqjQNdUH8vemyz",
  "key22": "3sVG7DmwJYqwqrdLKoifSEkk8UT6GxrvvLZ7r9kZ4SFSHHdkCHSKyEfq1uK2Gg6LAN5CeH5EEtM2JxrLVcqSoMZM",
  "key23": "3MDXnpfUWhXNrMzeStC3hwqSPJMZNWKcnYEvucPKCXk1gsrvLm3CSU3CvVTSuYvU9b2dQt2Hy63LJLackGLtkg39",
  "key24": "259y5qzYHDt1eaktczg8abJEaXqYqX4hM8QBfPsvvzkL79us5Dt21QwW4STk3a8sVmnmrQGwDzGkBn55usgcmAbg",
  "key25": "3eTwsssW5H9DvRgKSPFTMA3tRM3QiSX1Bo34ubF6NMtQ6T2YjLyD2h6opQnq6F74wVZs6SVn3TeCwubJPUbrDPVd",
  "key26": "27UaVNMzR9c2e5rrYvCBS6EVqbLMXLZqcMFfNHYhpNzSaNPtEyPpqh8jhBxyvEJp5U8WxsRDidodgv415XG3GzUK",
  "key27": "36bYbeDaSQbNqJmi53JuDMd134xB6734UNy2wUqjY8iM9nBvbseCagdPihXEZQ5NN75SREbkdtT3RYZsNUkDJVqG",
  "key28": "49bETz4poh4bxJpaK8a2oQjGFJKxur2d5eqvmYKq8AxWi4Mn5d629b6sZd9ypXUmd9MAzzUf22nPN26ABHQxM3WN",
  "key29": "3BQif3VN5TTtuL96Ckag4FRPV7otq2Nz1sDwakD7o5DvFHZbY5SMbFxXXT36x1aFpVvvsm1nHVpFR1ojUXR8ViKS",
  "key30": "2k5a5TmspxSnYi1J3fURmWCpTxZRM9Ugh33mcbx3hq7CZb4pKSrDzW1anNi1NCBuGFwDhDcQvxbgVWefh9hKhPVX",
  "key31": "gdH7JfMvQ1nj84td3RJWhqjpfZKjkVQpze1KBVKFfPbBo1skJLL6tFAnbPNo5Q3pENtiX9r6J6hgMTYM2ddgQTQ",
  "key32": "2EbevsbxiZLUEFAiJCvwKFopb5q7SbNMevoGvP9uE7HuzP2onMek21Qnn5SepsohZPfevdueLTyfBKh2VUtvb5Z8",
  "key33": "4BfRLwUjV2ku1vC7x5R5wNDjJo6J6RJLA9w9uAeY8QAca9jsiaRYJxM8FXYPB1pjs2i9okBPqnpFNSWrXVgmXGtW",
  "key34": "29XABfg7UGrHBgJZZHWxnqy4GHpdyYJ81HqiWcpF5xdvirBYn8gGjGbvTjoYyoTBs2ATxKM7MEtNtBMDtAANLpMX",
  "key35": "3dTG7rNfKWYVFpBk9jmCzbBZ8BT9QvQeSC8fiLWCCFbA6mxx96NME6inQTN395RoHALTLRUkqPfSPKKM2zyAoBf3",
  "key36": "4k5SythGkrECKmXt3UNpi7nSXCXwQcZqn8KmBXE266cPf7iKutjUv7Z5dZAm3KAndE5DndQfhLmnqKS4uLpSMJJw",
  "key37": "nDJDvdgS8xywAL8AHsogX7RzVm88ve3htKkp1PLBTVkhsBtMahWpahY4HubWuamsZhCg3EqqgGRoHoifhKTUj1k",
  "key38": "4LgGyLR4AHGz5hpZd9rbX2MYjavkMSdXV4qFmnBCaX25eXwWoaxaEmBRTjZqrsHRpCv43fHuW5DUTT3kHrahbf6b",
  "key39": "3F7x2p9RGDaRxmyzNwi9FiZEKZSRgiXVgPSiJWq6w1Q25UzaaYfYqqZF4Mz7HXnbxEgcUdUxUZhskS4d31XeLxdL",
  "key40": "iH75iJ5XjsSZdsyMEvCQTpSHJ3mHobDMjCu1pYzHC6tmhg2aK1meSbiUQVN5DCBYkrjXzg2RjkT4aFNv1J6if6Q",
  "key41": "LDVXzZwn4S5UHgqvYM2QD9y22rcitmVyrQ1mr97j31AQJyg6Etq5XdnbCtrMKDuWnHfTieA7vm9JcdtAAdcgE8B",
  "key42": "4x6if9f56cnWc7XUoQdbcWAjvdyEhkYvVPhbCu2izSUKqjwkdq5wJzp6niZzdHrrapGPwJjkqwXBpgAvT38JVuAV",
  "key43": "3aoVDBDF6XLkn9mZowscfsFMKHdGGLMtrVSGqsssFyQeMieUAahHo2qF2WCwF6sYcVRTk49etxPBH1y8G5bh3yry",
  "key44": "3VLkurJ5g9y6zcWFN9QPX2ppFVvsJ8Dn7KrdEKWaHLqz9BrvRdZTUKhQ2JFCoshRWJCdBLZwX8MsMgcZwYUBcLuy",
  "key45": "481rz4u9QRpka1P91Ksx6ffJtZbVtADAq3YW3kgdE4niNUiTXdfyhBpxZPGP3X3uxCbcuzKSzo1hCjtoXkJ5xATK",
  "key46": "PKxPT3D2UEyhabj4uT3TdFmtVdgeeQcWf1GiaMWUpLoSo2WeSaY1nwXC7U8WAgJVXoEetbuRBjMgjzWguvyH7hm",
  "key47": "2r9RiEMiHyttwfTXmyYr21gxjvtheGi9DUoMav7orVETKyDQEqMp5ytwCMmFHvDHCktHBfmNo3cocDrAbwVyRx8X",
  "key48": "5gyL2y6teTPFummFwoYsqdnJAQxAcGR96eiuzSNRMgJyrT3Mw7dYWTSk3RXqqnEmbfskyjqPkqduwss1sYqpCabz",
  "key49": "4CgqL4DZmCUExnyQntiFTSzwYTcCUyxuZGUgjYc1ieBAtGFPyqxuv3XYnoEc7BndfQpRKfMGos89DiS9UbEBCAN9"
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
