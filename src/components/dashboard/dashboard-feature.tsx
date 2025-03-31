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
    "2FwqM6q1m4jNCvTjBac2WUQRBs4GuwwF2CiByfwMhVjgd6zN8umDawHzG2NkQa1B4L7MWQbJh4DUgH8H2mzgDVwB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52NLys2cabbqyJUS8BTpDywDY3RjzW11qH95NpAvkiLbAigU96ZYhoUNusMJqjwkg34amRyHhXhaezdksSHnPyRp",
  "key1": "4ZccBKUtoUKR9m3VqbCc8SssZi837Lcwpn9fnWv9MSyM1fb3vbMDSrAJ82jkkSr7HuuYq2mjcZbwqFPR49sYwqVB",
  "key2": "5ysWedUFnXwnRABA27hQgPzEALRFMNZJwekPMPYftVKTyqAfQu7L93RxSuTaF1vQPvybhjuZtAZvGjihaHpSS31b",
  "key3": "3fg4UXrd1ZTYV1HdGmKfuQe1GEytK5AxWCLFSXmFtEQnsHXYSa2gbFBns2E5FVRLZeoCXcSLL6RGcXbUCxiKSCaQ",
  "key4": "px1f4rq4BQnbhEFm6RUu8VYZnM43DGKQqEQFA8XnZaKzfbZo5snryMDGNQgGyDqfbYKrkX36tt1RasTNLn3MurC",
  "key5": "3uYkQKsBiLwyXD57LAUWs1Sm2B36ipuXKocq61Cp5JfgcAC1HQ5TpNwL9XUgkFwvZvCdE4taX3TMq2mWFufzz2UJ",
  "key6": "3e3RVcm1iNgoyJdbUPEGXWUeBrVwnyDwT2EHNodnnVmhrVUpwcrFwLj22kYiib1HeLXtqUxxApamJkGdA6ignnB4",
  "key7": "2TmY24Smjv8LkVwQKHjA5C3Nxy5upEbJAR24bW9N7hEPSXZ8JaMTy9WiVWZ32T2WHoPfG95cHueUiuAjxfUiyuLt",
  "key8": "434Dew6RqLEmULeqXgcEhwrAP3yroommLAETP2ZGcQPTKsigeV6LPWEWmUWvpRYBL9Y1CwZs8s4xZGueRGYWYS9E",
  "key9": "31ywCzPQbjmFW5E2bC1adszyJaNCrgdyHsmrZSrk3DtyfF5LsYceiu1KH62uoWzKRtosPyEAZECskUMzvf31di66",
  "key10": "3WbYgk2SGvo7pjg8HkALuxLgMwMECTbwaRQDkNZubKHbNi7GiKGcftpyMvBqU55RMbYDMJaUBPCLLLcWXxyAVHtT",
  "key11": "2BwcR7kTfBkJzwBoS9yAdeZbxNY85vh2b65JN5iB8f49wXfWh9ee1PFP8yStLkMRcK9a72hPADH7Wfr1axrtoFSx",
  "key12": "4TzJXBzC3ugMpbPNPj5bWEGpSxTToicF2RZYhKwa1PcNyXcAA25RfRDPfXrpLMAXP5GQwbFz5iRfvHsTzEYib1cS",
  "key13": "5XrkfL6Nn1c8oaWmrqxDW4Fd3VXHrxNiaRQkv7rCwHpkJP5oi59QfCzFLEFwCRoVL4442mGU7KSUEbg4SCUZUAr6",
  "key14": "uN6k3VBTTrcs8iyZYT24dgVyWWvm4vix3m1ij2scGM4XDbewySGM2GqYCsLjNPozb61mc2i8AYUpsd2F45jhfPN",
  "key15": "22msZCYXxbfychrGWQZrsSbML4wzH7uBnLnvh4MKLuCqbo5Z51yutgcuJqDZoK96eg4R66UQ3ovJjgdzxdm6jJt7",
  "key16": "2DaJhtKBXdf2PBBANuQBnkKExKL8k2ifhCAZRFX8obTtJNiYiSMewveV1jTmqR6nHoPSYDEXUjcUNLJbcshqz8Jo",
  "key17": "56hb5wjj9ztZDaoDFGibRpiJpHpm2Q4DeNwjdzgU17qMHV1P4m2vCSv5YGoevUDMvoRtkEruaL2gdQbYZHCceuha",
  "key18": "2rnqecSgYbFDcnAr994fU7V2ZV5E12nDxZYz3SKu6JgSftqNeHGmbChmvSU7AQmrwfNBDQEGQMbaypjgwBGJWVMm",
  "key19": "wTAzzHomAHsw9saLDBjYf4AVucZajjWZMmn5Le6pXXpufhEzvVW19qasxyhe9Q6MzFFGLpPSwza5PLmExAH2khY",
  "key20": "2gYcXU8jVam4Nx6awJtG1GCeVtFCCjA4J5DyBWCyKG57AxH8TFGMdbRpsQ8Zs5wViXsckS8G7HJEuwoCwqCY15Z3",
  "key21": "7urenV6T12ckj9SEV4cFqYT9mhanEzUeqyRbN9dE9WYqL531utJoA8a5ngwFwJHiyvs1QvftfjxHmq6zY9URgfi",
  "key22": "4pdBwmuHgqeqMn9zx18wPL9Bx2MUnWDgY8QZRMoUwvayRG7VFKZkGLNTNKNKXbSciy6WtVeo23WTpBZxtJ66VEng",
  "key23": "KEwUxWU7jSyR6mgLctV7jEsWmKW1sbRSpp7arDJ272XEB5iNjcNRYTEcnMcyN6NSUF9VuktA7kSoE2AyUGnZgmH",
  "key24": "27LovqiUtjdBP5b69YUzHXaf1FCDnUECc8Z1De4ZhPHvBbqddKARvheMogDuRm4tZkyavxGeprVsDSjJypdVU8us",
  "key25": "3JLGmuMpViKfqT6zpu7513iUuG42DAopvRW5Jw2wHzAbuSiPkBpjwHZeKTowFbu7cVDjcL1ezseR8yzCvMwDPpwj",
  "key26": "4BDCmgfuJrA3861HZqUXXvPEX4yykuREmr15ieBgv6yY4q8oxMjoYUTX64ocg6rxxMwdt7mVFzexUahTcEFpEbMK",
  "key27": "4CEtewZg7T9K4ogPGLiMrg7mhwt4XutFyBNaZC7PE2TCRkJHXhzWRFmivHgqKGJ86XQfuaFpbMdXWj4UzTavZgSm",
  "key28": "5EcYrZhBqUZdVkrozP9hSEvh2Je66LfcQACx1Md1wG2wr49WqFKLGBsSEphpwNjznK1kV4zCQbZaLPrebfXBMpqC",
  "key29": "2j5Lojmyoui7FJZGHN1mg4urvujFvg8kEFUNX6WiiEYFnx5y2ihKn3LvnbdC28ujDKoKgiynTg6Z7rcSV6DsPrTp",
  "key30": "7REo3KhzKD2CWeg2HckvsofPpeoE28bZBfS4qzaWpxi3exniY9wBGxDp1wjoEMCTVktTdnGjKSwNAXcxB1W4g59",
  "key31": "2KXuyWajWcVotM4NZkaiY4HhdyLD4THHsPckbKSvdR4r72bhaSyyydFVr7ZHzr9BbS6EAXBK8vYjoXkom5cCMLjq",
  "key32": "2ELNqdb8GYTt5k6nsWnJVR8L35gVL8oveowpdJT2bjdr5S1jKcpxrZGNFYDAH7DXgnUC7xP2W3KYfa3YT6yWhv9Y",
  "key33": "3QZi8BzU2NF7nVMX71RWaUSEDHMjfU3eGgT72vei5ZWAFLoSqGLkUKsmNNQv81XmkS4QA4yFT8wenTDHTq6go2AB",
  "key34": "vepQHY6dpnTbGdPj8Bp9SsaY2QCGBZSZgQ92XDvF6eVG4TspV1Jskbgnk92MiXgujQdkTCv5ch1ZrE7ggcLSVL4",
  "key35": "5zhAjYnhNnNg5dWtGzePmTPs6FX2MGkSU8eYWM7PUiT2Ces9G5TUe4BitReZQiVcbP8HZs3xMNhNzc6UgwfEQgvD",
  "key36": "33kWSxPsncMzctUz4Nwe18XkxLV7ZtLWcfEgJYHrGruZHUmYvAUh6RebCBMabPFnFgVzJwu23u4dHDmbs8LM53LX",
  "key37": "6v7UFLp7NBC5MRenVFiVERcd6Z7k4BzJnPFGz4Sw49RgQmWWvAgZvFYEtpnC8FSgiabC2p6x6t3dVpRgkCzkBt5",
  "key38": "2VoMujZADYhC7F64KjoJRfP8oc6HPQEu6mrqpRXQs6trpR4HTqM6Fg28iNJrdtKo365gePWkuHw6wr13Roosj6aD",
  "key39": "4VKcVefmHYjsuMGJ1UU8uv3pGzsoTkV9A6cbfVty2n2Wzis3Gty5E48uidguGHkRuxoKtfCnDh2R93ku8YztvSvD",
  "key40": "4izL56oR68xFKw15QqwbjrnyQGTpXAkw6yiQSxCkv6QBtu6enQ6eHywMBGYAxH1THxXrf2GybygXJAaWP5NPKxS7",
  "key41": "63g84t3asz5R7WyAnpmQzTCzFUAQbjGhznZViFH9r76F84PFeEADS5e8jqiQhMhQay1ZCsyVhShn7SUsYHNeWCNH",
  "key42": "25R14EH2j2Rc1s8dTdpYxNt6vmLD4KmCFScw5JG4y9S7ytzAt9VbCVRU4MDKtXYFNzNGdoni87dgFStX2cWAwezu",
  "key43": "3vcxAac5BbJy5cFDEZg98wwWfcT8ZZeVwRzc6ZTp1feGDKh9h1zsF6875kt4hCCF36MQnosTrodJF5wBLUd5P3dL",
  "key44": "4yKmg83CTQQ2q2znFb5vriJXDTVzfDRVVPscJFB5rJeAecyMmenUpNv9K9ufoNqWnWqGpAPakFP5wd28bKpKsuVA",
  "key45": "3yizJvbBEPW4mMuyuJV6msrCjf4pznG7PxQjXPLvxxnyouVRmxiciFboNCGommHVBiS3umBxwcBiHKqw5wYs6oEm",
  "key46": "2UYWHrfQUxS8Mfx5Xa2Ace8hyo8AGuqGkbqQYtV1U46Bbr3bB6ETJFbPZoVkE9dYSvBdi9diuiYDqdgcsdyLQTeW",
  "key47": "5VBi5mxJ4GvFpDJr5JFmWDnS612Z7tXFcopXDCM4NnWHCaCTuFmNP8CNDphEhWsousHDSsm8zzRVYzZTdmKHmHod",
  "key48": "2xXN3nwU43shd3VgtPBMiZiy6nf9i9LgQtBw1jijXNsvWVyRNkVFqeDMUUt8daDVEEFqkpi81VCLnecrqLw7jNqH",
  "key49": "52wu8Hby24iXgw7Qf7RF7EGp3Ze3rjfePCkEpM9kprzx7inHWgvfTXx3cBsikZcjrQtFFuP6Nk4nXeawYKdxDbQ1"
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
