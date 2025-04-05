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
    "2BbauzUz8rx784YqEwzSbmfz86VdfXrv7DrCCbV8RxaZ1Wko5LYWiBq9eFkEzGVaGiH1xd2spU5CdXGk8KgYh2xr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UFbZXbN7SJBsvGVJ2SorYmddNS2HCgzjCfyJufXzh1AqJsVjy1NsT9jFBFLH4E8JRkJ3P9jy1gSMp4DpCCQSutK",
  "key1": "5EKnNdHwZLHrLDJ8VtGhsZ3N4MoYT5CgdoCqKNkhM7qDs9E2YCznafrpcsKQ7eJNvpfB5HsCfVHEkdEWqMQdvdSf",
  "key2": "5D4eXVL2SBpapBuLREoRyJKEEmYc7hHCYYFFaTBYexkvwKyq3bE4vbo114KbUk2VvRiWoewvGv9pd2KRojJKBWaH",
  "key3": "2MPo6CroX4hyi7eohpoX9qsagkKgVbJwJ7SEeHUsfU1Qg6pkvcNjUqmAyroZviZjJuHYimcToPo9gXF81wxKrGhb",
  "key4": "3WuazXHoWYXuDYPEANeLVm9oTDaDMrxwLVV1wwb8bsztTZavhj7BvkHoEFoTPY4HQRnxmbShX3EH3a2Q8WSYhcA1",
  "key5": "cXP7c7LcdKqDbDmCw5QRnrZhvy6UgrKCEdcRTvUpVCPSrEZDcmi1opuQEJ2FBoLrYeT2WhVLCopmZQzkEruxwbG",
  "key6": "5HpNCG4zzfyGQyX3rc4Xp2W2d7USzR3Kba7yQRWsEP8sBWy1H4rfDNjA7TmVGfgAHKirGt1xykurGiz9KkyhPLJp",
  "key7": "4orYVdZoN1dKo7Ht2q2KMXfMSDGvUQx7bBEPMZ682muAYDTZRZw2p9VkK7emfpRaCNnF8rqvEGGzeAvwpR7w5FbH",
  "key8": "4EGLrhkHVuRCTYwUd8bz7iciZyngEDK372Gv5xzv69Tcyxz6SvomtTUvi17pK398wUkoo8gXtEkGVTGwcwR9MxKu",
  "key9": "atwZqQQoywjVGbaTqWfoEAsxgHWUDinA63PLMTRbkCw3dj4xJwgv4sn4E3njYhyLT2SyAPKu8LDE5tZRDw4Xihb",
  "key10": "5eUuQ9FBKSLrLyDwbeyPPiuasGdNrWa9KoLAQTDNnSSXrpBFmaNC1txna7UJ34irmPHqUBSavDiiq8WSPoVXfVKA",
  "key11": "5vjNzsoznS4ZF3981aRc25eGJX9ihk1hxLRCgcomUfcm5LN8CRpqL6m5kdMC2PnQJTWBfUYSpPKjFV57hpCqCT6Z",
  "key12": "BnmEMJnFV8ShGF5RqmbkYuzHceqxZcD9wu47ftEWNuZXkydAuZdo8XKKzFDTKfgV6Jya4rijsAMktdLtqeZ6oDn",
  "key13": "2sMEqNbTU2nJJTMujNgoKfy83L5hnje2wAokMVcnnfqQmvpZ6A2TwKLBm8z9gd74wM5rShhiaaGTBsXs7FpEF2Ex",
  "key14": "3wrnYbQQikrKUKCV2MEUwfKPNXg8mkevpvb6MGwQiVBdptTmP8Wpq2N2eL1y9z5Av9FJCRkLqRzyEbhqs5KGsKd1",
  "key15": "5onBnMKGZdvcoyFdccMdfiJa1PbLQrnrVkjF4Ve22ZCByvT8U2ooD7VJYsjwaMYQbKiB4FiocsW84uaVJZRYyPai",
  "key16": "mR9zpawDGsMoX4jCHNwcLfsNyxWx915aYYSS9g1ipPc6QkQYtziLL71viNFDCHrtSdLTc919Aow8myxd7V67zq2",
  "key17": "38DndQ2uSzYxsBvP2sTwkYSxr1xnHx8eTPZLNE3FeknePHsf5zD8ewKtJELt3iV7q6QV2yWdQfmzZJrxJfmQs47V",
  "key18": "5NZUnR8MYY6MazbcPPEsVQVQ5QbNxauo119V734WbgacDxxopig3YBQWKHvDjGRV8SA66LwUp2v9LDDKwiwhcSWt",
  "key19": "45qcFiuDdSYBibwsXyf2juSPjrFQwVfKxBFZTcXXM9TYrSAtRNbL94gabuSoHHBgTE8wUb7CFoMfCpCN2CijiFc5",
  "key20": "3n9Um4SWuvQzvo1645pejZEryYREpPnr2BNw7yQDc9J33SuSXKofbEN7NyT9pkN3dUisCWQ4daKzNuKwC5Y5N6Qe",
  "key21": "3XprCBmuGVDty4Cj7rdndPdyViM5KdwzR1ikXY759osUjChbNvvUpnCbeqrPpTTjTLzQBb9ymVGh7PVfH3uEAKB3",
  "key22": "3QDmJeNaF8GejTFNEY4P4YJZERbmHyZNJ8ZndQ2FJAK3QfJTrjaMPF3yR7eDoqutLMsGvZ19gPUxLHZNdsQa53RY",
  "key23": "pUuyNVenuuo2cpDQ2JSXn9T8zSzgoT1J32xAkepdrivu5H6eDC1Zw5WaFrYwanHunbixWRrHoJsCimmdt2BkDgx",
  "key24": "3zWoZYDvYyq1qoJ6simVhjEZh2G1Ftkp7Ap2gNd4SKsGuzcXfjdTZvEdJoBGAHY2hCFDy8stP5KrR4bJA4zjLx1X",
  "key25": "QwgwmUR4eZrctLSUiRGNzuavvpYgZB7Vtf74jf58J3PNdxYCqCimwHSPW1cgTdrRjx1NW8J7orERNjkLdwizNi9",
  "key26": "3DmHnuLZb9fv3GGckzuj87HWpcgTUN8T8ZstvQTNhmepG7ZxakCYDf3EPMuRnmLybiadZJMZE8GySWajJgP9e7pB",
  "key27": "2yqHoE64uxsR4LkACDkHdg3wDgE88nsUH785JAJ7snVqLqARcbh6tEA5zY2TkzEoS57EYfrkkU49B2rvyxwyPF7U",
  "key28": "2BNj7d9sr2n4bFP8SRtasQLLjqqR4XVvi1KAVHWR2jj8AE63mmtkE2tq3UwsD9PoZK7Fvuq6puinVjA9mjvWG7SP",
  "key29": "2iVPsSrdbrjVgV3xhhZhv3gXeqQTWvUmemrVhJyrqVCCqQfT3zJjqPSroco7NMoRfGocJE63Gkf3FAfNsPFfmWiY",
  "key30": "3LUTBTytx9yXj1PkPB2bQtXS273C2Xg2xgHBPzFts2hSZNotgu11WANmUdUma9eZQB3XTfkptFMXvXCvNjbwzbd2",
  "key31": "J4baNa6YuvRAvACwEPWSwvh3BtwTSo8YfEBuL3y3JK9hzicDmHh5HmmLwXu4apkbkVugoTSmLji1Y64wZC5ui5x",
  "key32": "Qdu81jyrFSFpug7x28owYQXzf31srRUJ9ezGBXu1hSKbbwt532j3M8EVW5nsqoEDguP8RF1BVReqL4a67aix82V",
  "key33": "35jQg9WabsLNdbHuCuG8R7Gf9DWPSpnvtf75H9Z9bFn5K2QzdqUv1B3QsVdib9k7rLZDowjUi5LdWU8ULwoj7Mhw",
  "key34": "5LicjuVTgtBmefS8FH4t7yQEr5yntbJJJ4xuZuUPD9XfgEu3v3j1TuLR1511ZXxnATNESV5xi7Y5vPfJ2B16m7XH",
  "key35": "ifcc9ySChfNqwkS4cmMN4RmHgVbxxeTraoED95MEVZhM8Kg7k8o31mkaXdqoF5Bfk3s6eUE12vjgRKrTJUdXiht",
  "key36": "46FCPuQu32Z4oPRJ6mRNLCUwZKXAt1T47k88mu85f9N6v1NZtcG8eBQ39d9agXfyhv5RGSBbiGaefncFUsKjebkZ",
  "key37": "5ArfkQeCrpsE3qMqp3MMWNsRhdiuygL8LRnLQmxViGaNiLYaJkq1sWDSfL1o5aXAamEHHpE5vEUxUvF4YyXCon79",
  "key38": "3Etcm9dbzz3Gs9vSfeQ59uN8n2yceXWtKZFS4hSSRigcoUouJQNoUTmH21NNqLUSnnzt1y6qKCr6NVEUxqPJtErp",
  "key39": "2MaW1knd2r4TccZEN6nb82wEosBytrUcgDzxYrLpAE1S1Z6dq3qasfa3jHe79y5NnKAbF2QT2m2HRuDSdepxDUve",
  "key40": "2vQxGq1EXGx4kJtpoTJKM7dShbPxr2mN4Y7VKmebwERA5GfNtS15EpQx8daxpRebjFXFPpoRyigYaa4ZXjC7Tb3G",
  "key41": "sveX6J7hy4MJqZeNZqALWeNUF23qsLUiMe4SZx7yVDXjWTWEnrDG8wWN5KfhyT8iyRHSzfv83cxFyaDEGm7kCfC",
  "key42": "5wqKCq8KvmpYDP5SvqmeHq6KMicPzbiWYSyGGk6a5bfTj7FzzerdHkYpLQoSYvdMwhh8m1RG4dTS16xJ5WyCMGz2",
  "key43": "2uucJ27rCLDhGGV1jgXZoekiUQuuyCrnEVzEyv2TZhWf3YFkRHxDGE59KXPbj1VnyfDZgFoj9dVJrRQQRymG6xj8"
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
