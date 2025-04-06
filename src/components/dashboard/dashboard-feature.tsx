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
    "5HsJQvbb2XHj84Z9Bf5Y2J1zu4kVPnh6Swh2zitzMNj8gbdNNxr3ZZ52of2RU7dsEApCXHVBGnVV1mYfRQw288Vy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N3cK6CtYjjY5RLdqZribSaGXQhZ8r6MmfuuQSA75L4bqtAGPxqK1ChFhSiKGggsnmfD13WVtsUWAmx66JqCbKf4",
  "key1": "uNMjN8EwujaN6raeKh3cbuKwRvRZj5hymyY9us6mAHpFkJGcnyEjJsFd5bvaxkpuTLVZTMo7t3pwDSwdTfhpZty",
  "key2": "eumfzM9TR9nCXgHoTn8hpW5HaTLwCioLSeT9AoaptLs3f6VqmT2CJfYGU1NmSPA5sG2cvXsQpcanbbSeQuQJYEk",
  "key3": "nBUzdkHwGandhHUfWs9ECVkUneRKcMJboaAfiNCMCxagdxzRMamJfvSeQ4D9TwkuCd76AWuE3c1hRdpmskmXrB7",
  "key4": "5jN5Z5aHwgYnxovFA9PxRKWn528qNsgiUR99cafoRLKqqy3dRKMKrcfKfeU4wY7DygbdTVVZGnvrnn9ACcqhBc7o",
  "key5": "5FoyLtez5Jw6jzUXAFg7CDZcbghJyUg89MowFh1dKN1ZpsUx6eVHneKWFykBLxm5bSjiTNhACjKirV3ARP8LuWLE",
  "key6": "3V2bC3RqJ2kJaLL9oQjwqcFFyFkGVhjdxzsMLNQd3NYshfSNbww7zqBUnvNBPH3rwYGZMzP2cpX46BuhBsAWgV8h",
  "key7": "59YhQgd6ji2bFLeMm7xHWDsEYDoZeMCK8dmiXjoahNT14Dik3wTP1QPQ7s6idm8pu7datNozBqgsS7dxTkw98mmX",
  "key8": "3NqwhgGt5Z2Co6pdwbB4D6hxAkEwGMEg4BhauoxQTNZSkwEG1RczkgJnw8Ja3M9apZsEQvKS7jGmH5rtujEpcjrK",
  "key9": "2e1CrgdkfCuZKSi59xVkCWST3U4LP3NnCEq1TWyKMtJTfcM3rzTbpjdb4TtYUZaoFkkBBdvtz4eFRCFieTXUqAsE",
  "key10": "t5v74JowN8G46THRSGkyPUvEcJeLTuDjQURFKNwk13sqBPEbPcUqZVpQtijDwhP1uyULvdiFwAx8Yj1WBRVPaz5",
  "key11": "2hcmRoN6mqvuHEUZAznUYqciHScbgBymQxxruA9R6qnRDBkZid6MVZsSJoeJmXxFVkWzmhbDSbY6VsRqmKgTN3D6",
  "key12": "3nmCzwPpJ9ycqsPotcDC45Y4v9MbaeaLtDf7DZM1EGyiHLn4t2FvEMXhNW8xMS1549vEaB2yasd1Bvt91cvFoHp3",
  "key13": "2T4pRtwGfMmMJrHZYuVjgjo18PiSPVNy27PeabAWhdavjFotDzR9NEfbk7XRtvvzeRcuFLsDrwYxKwQGZVGV1LHE",
  "key14": "5e1eyosEQi4WaABqXKTH2NeK3C1KtaCtro3s4FzAQkwXwyrcb4H8U9ZReEa5LjzcLmUZSvDZ8qaoGcdZRxK2rwqU",
  "key15": "2hspcALEBKmeGjgGJdJwsY6UXLPX4BQ9QEu32QhmDNhcBMKPG26aQDCRYdvqbkcPHawmnBsKoJTn16rpRJFJ8osw",
  "key16": "ovtbRqm7XqqJC4oGV81BarNbfBKGWa2Lz9RuLc6rbE7q9SfbMJiBSQz9jKG6duLAsywmE3oGfw4X2tEYYpBGyVq",
  "key17": "3qZwKHs3SzgJPisjZskPn3o2HB4CEo3n4uez12ypU8Mvz8k9yak4wCQHEF55NMr99BKTDLjozobG3B6Be2RWsSdo",
  "key18": "2Vtd7FQMahqkFKXooE1xqWmJ7SjZGDaRtd37FX2UfDDh9XFwhBzYa9ckWFdGBoqvq5xPgJGCJM9P5kkdq32ZGDkG",
  "key19": "49VdZ2SeCYx9WgcR5mAh7Navu1McFxzHj5SunEcCzFutsA6Muis29o6a4yC6eKAAPL9cRBBRdFwxPs8TiXncXMFh",
  "key20": "U2GjXkjSc1W13Ufv3dKzfTnP3UvDRESjcqtXqYM2TATV1stftV8VtrZA6XpyHnJAQN7xEP5rsepxTQ2Tpy56Vh2",
  "key21": "5iDpSGR6quo9ZJuJFcGUqqYDCh6DszcUkNo7m4N6KoJWVHcJhxZJa7PKy9GK9RmKnbN9PbmQeyr7NRwZcyd25uZv",
  "key22": "2oGLr47ZZjQ629rHaJ9CQRfMEesHnH6n8UH6kEBB9VmRfx7Fxt5XdiTAkRZVJwFqF8ioanJiKCgs2HxANpFLo76x",
  "key23": "5oae5MjWHdTGeqoWyDB47UsW5w64js95VMxjdupr95SFDuehVeWJjS585rqNSPM9yxPaD4NjZC9PFMaEtqYv93VW",
  "key24": "4SJh9uCMRheBv1apfN7XadjBiBQA1Qczda6Eye9fMEwEFrpziRNFeVtTGaYTSdVArtLpj8EQELF1C3sMWpL2hjKk",
  "key25": "5F2LCSGdDxqiVRjU4KbPjSCfzJsYkejCqPKtGHd2sBUizvoHfomVB5h57Swx8TEizHwqZdVreEsmrytbHMjZHEaS",
  "key26": "3vWP3rqQvJzWHEvVtkBqYTRy3QCBg8BmgmqBGdGxdPDYN5iKf95Rkp7R6stutJaVod8yQWomsnwgBHhDAXcAmxGg",
  "key27": "5DLEjVCfzV3puRQypBnzrenVWdt7qGxxHoZyfBuNSnY4q2Y4LktudvEsS2jTXHDYtCQiBcn6RpBFLSEJQUA2VEPT",
  "key28": "3P4D6qmqzw7gjrvGDaUXJecXCfXTSxydEkcofKmqdpd69Pt97CzW2rCLaq2BrMyRn8DbKiCH8rPEvPSRBWyn9EXt",
  "key29": "SUsncBDLsULMcjMvbq1srd2PK8gfebHNniF3KPXkGu7d72XXioQo5G8tNSauvzFK8tYd2uUeZDCYCtNXcAqeeL5",
  "key30": "2eJRzhzqSuvVqeVnbdPQdMGkgqW2gZUrg9veXthuAdRNg19LSy6e1hhxAh8q62UMg3ZapDk1321CxBmonhACSLGE",
  "key31": "4HWpjGHcRnWBd6riwRDzQtJna3HWmPEX8Mgzmo6bAyVoc65spBv7vmYnACUfqVYFsVaPHJSp9noLABNUsrhUTftH",
  "key32": "5Q5sF1HsTGvgCw58ARjiM7DeJUZF2bChifkwUunfPi3rTkHWNoRFyYMPf7fjGhdRfNvb3YaRTVpjXdpaXoarozJw",
  "key33": "2endXEZz37ECuRQn8gywEoqGYdo5mM11gyg9ZrBfyhGGLHMGLDN4TWEbsaGYSNocK7PYj5yx1313VajhkEuj3PnK",
  "key34": "zc1Veqdhd8bCvmeHvNXm7DLV1DLK2YX8MENiRk6GcSZdmYTpnpgwyuxkj9BpMnvF4svwxQ7UZhfh5yAvGq7HQzj",
  "key35": "2P5cDr595BaP94U9zp41hxBAot3AyuUY5k3pRSrefWBFLt4XpRMQe2MibGDDSMDwHaRSB6uoa2srZGUsaTbYEuMo",
  "key36": "473bB2uW5kiqdxz6Eq2Fn3oPb82twVYjNohXZWfmCPgigmCVSPUWQRkWd6Siqoyfv9pcEufsa2gKQiV47YWESMtZ",
  "key37": "3wDBvuGXQcjiT93o3mzZCpHT2Eetc9yNBHfAy7LxDyY5sRBhLn7veJfPuhmWWvo7KbRVz6NhM6181H5ASdW5Ez3X",
  "key38": "5LCgFTJ4i79vaBUJqbnVgfuqtpLdLXYCkNxpoXFCMTwwVoFVWXEwmrCgmkfyaxBy9NVoMN7grPc7af1jDGMgVJoo",
  "key39": "YYU6ic2TSLT1EXrMwysrC79otHSoja4e8vYjmAsYbxwk1BLWUj8TF5RR7UW46eD3MrSGEFP35sGjNck2qxt3sDp",
  "key40": "3dgwYW6qimFkffww1BFzni5f5whNsCSWiPWUwRkiCkyE9ZVsR4UhMG5WzEgkbCi2owjoByt5FqWCz2nJ9XRpS1S6",
  "key41": "TjzP6Ro1NqiT6KKfB6HJB4JX4nReZkLaWkYW1aZWgyNYYsfd8q6EtWitzHfKacjKNsVvVjkuhiinUaryV1Q3etF",
  "key42": "63WPA5Mt8RQUa1STSaFPSGBjV6acqnaUC9DH1GSveJxWFJroyiNdk23ujsm4tHxdcT3s5yfN6JXqGDNyAFFmrkox",
  "key43": "5bb7rg15tsg4LwtHSpxQfrbq7YhGXZNjNo7CuWgjVLUueWRE5vugGjDVwsK8gpnU3Pi5M7cSYoS8Ckdyuiv5UzPv",
  "key44": "VMcaoUWvtLAAqJm3t6MN8sk1L7uh9khNtgtwHU3cGpbfYuwV8eGv2K8R7QSBi38HJvWf9ftPTFLuFbvm4TEDvmC"
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
