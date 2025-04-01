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
    "4MGksA12PPfYGGhN2CQE7HtujgeYgWbf86y4R2pWpeCir2fHrkuqmSmkE1Dvda7crN9xoHBoDoCwnafKBMpryrKh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q1jyM8srb1fgouLRYTZU1mfxSp6pdeHYP72ZozEYeXC4b6qeEJevgb2MSamhtn3tSrnKN5dmGBcjJiYR8bey5rY",
  "key1": "3sMDz3kbaWuNzRqKXauwiuPty3H6UJ8gSpZKs8HNNtdGxAsTVwsPrDcXZ1MY3js7NVvepNxm5iMK2CdQKag1iYFh",
  "key2": "5WKsHJ19GLoywhnyyoT7c2QVX2gBJtGa453qmoV5taiZ5mogrXqRQ9EGCHFhoxMhM8Xqw8sPvUzzCx9nbiw3QTvj",
  "key3": "2Wo7LyqryRyQgN6oqry3HzNgM6TNgHLSqmmtyTWn8n3yBF67CXoYArEpjGbfkG8ipw25bRvdnK1pp7KL9goyDkAQ",
  "key4": "5JFiefwAQeChWgeqiJTiCjYCLBKYhokspo3YgGazmv2M4m6Xa9SV1LczW6dWFr7MmfU7hULY4RnTQeZrbm55L1rp",
  "key5": "3bZ9vNu14AyeyMDdLU7QtsZa65HEg6qoAKeTKAmDyNu4fmrdSwUhiFuLstwkkfhwgYk6kTyD6cAYMWUVSgwipXxw",
  "key6": "3gCL46Kpyrek7h8d3MZ2gBsmZXBJ6PYRo5RGLXRSGfuNuqRMiph9dvx8EsqRco58xhiyEwtRTB9WmGvSvUixnrTr",
  "key7": "Zdcx8pkLsintrrWzC823J68Rg8mXfmMkLzeHveu47xjjBrUiyYQL7m7ESuBVQKiDNtj76JbK8d1bz3qHk7DBpfc",
  "key8": "2RQfnXzWb37dzxmQ7aWamxByk3FkaGsiU7UQ7HEPdn2BuE31AJgpayuuWYgk3djbtizmmNg6jka2aJpJ1m24S43r",
  "key9": "4hKhWknNXAv4mw4Jv3uVk73cRKmGnX993sdDdb7uWHdneVZykUCEgdHYTuX18bQ5DKZbESVPvgZfUVUUBVCVwSuv",
  "key10": "SQDLpDq7Aod7UrHU5tjRTJUdGinD9TP6dHLtC5s7dhvfFJCGNrMAoVeabsZhpbPwiQAWkMt3ajkNoeujmBsAAqf",
  "key11": "2BxyDLL2hpCdYHxw3gZxoaeex9Wcdw1C2iy4TcVTDkYLug3TFS3ctUh5ci39HFnfwvnSRaZkpxvoYFagbzfTTiWM",
  "key12": "2fZ5r4Gr7EfzSZ3cNMRaWw8XSP8NHLYtDEyephqw595Vgtsrfk8dpxAr8vnLzKEJrJv4Aj73BR4tYNQpd9EKMRKZ",
  "key13": "3Y7GeDN2XLADkLHoSCeuhHEPhGNha3eDrUGQGkpQqP53FPPuCH51yvmnbKtUUKXEWuef26pVJ5pTJWQdMoxWqLHD",
  "key14": "2GrSCAtVQ6RjFuBe8CfGKUkkpKteUcUWQkQeBZFG6Cbo9EHzf6EKBxr3FLdGdMAkNg8Twk9emNBVQ36pjzaESeQQ",
  "key15": "6PukFnYibsBotb7JfrsCojej9ZzkcxtiajA7DxkiLBsjaMduwQz3Zb8KEvupB3PNEM97vZpdBvaeSHZBeoH61Sk",
  "key16": "2MEE7GuyKyXJRi1Emc4U4nyDEU8uTD54tibKvdjvdyxX3PVBoZjWSrm4v8DMuaNgXYU8rgQiP3Rmyo24yJqmreAt",
  "key17": "5RGFS7q7qjCKnpi8QBQi3ZGB4bLSw87tMvUFvYYbiFgrPUvzZ8gm2fjv9JSSx7EGuFi5aoHW4hifUBpRwK8Q9Akq",
  "key18": "3Rfz3iqURuRibcWa9pfQ5LBrgWK84XKhVGSLhkbQFo75c59NUttMmD6QXjp3rMg9jQL8KSExJJB8tVfNPvgFJiis",
  "key19": "35XB8v7X4htPBqVD4JThkfd9V6tx8RZdgdzYdwrKCir4iMhxiqkYKxwshE8TBKFsNfpSsEW7dBiP6vE1AbN2UsHS",
  "key20": "3yiXJVZRzKtvKFrWW7JUurJJVnjC6B1KNkd1dj8bSWmkHkxK43GWgYwU7mxbCyR6Y8cRbzuX6o5XQcmkBArWrs1R",
  "key21": "5zD3RffR9j5YeVnsd8VZFVHjJ6VsS6RTGMbc6ymgULf5YtnXgtm69JXovbg3waFedJEgSHGZSXWz3BZzYHdnPR38",
  "key22": "4WbAE2JqrjVLguYZVtRnVVGXg2DvHEQvYFUzsGuuNFkZJfhxNY9o1RVFWvKxeutYCbJEHAg4KSCzuhnoV7DsEHCd",
  "key23": "562dcwnN5hZTgWAAgRDACLUp3QbP4rX1Rt5852CjEmmA5bGar5CKaRAhZoubhr7cqa2GzWsaycqFCfB7EogJpJVV",
  "key24": "2oAgxYU4EjQT6Ttnw4me6Dn2zg4nnCcmp2Y65myVcizmJj4DQ3XpdfTjyYDzbWD9V2TxAWNfsrZk4RgFVxpceZDJ",
  "key25": "hwssm5qUHz6JeLjP4MdPoxs8WF9XiPcKJuJCgho7RgWwMZFGq7WLpDQUnuNzzRACtRGY7UzXpmJTC5HgJZ9HrbV",
  "key26": "i22dZF6pWJ23ijKV7rkQBkcLJAg9Lx7Sw9RCsKiFZD1ey3oL4oKmBARYVwi4UjGEkXkCM8S8nf9QUbynRP5q5sv",
  "key27": "4u3Y5KMR6vBuN77SzTVNAf5rZg7EMLFfS9XkHh4D2rvGoHG9CPjwnNZicPUaDguFShC63NLafCp3wTQSehUQoC5b",
  "key28": "3xHhBCvW3axheHwhhvTokqWUyn2e7Rosr2K13fgGLNfhTgqMJgG4yrGXNzkzEjz1KPQQW6wy4dkmLb9mDeBkiZTX",
  "key29": "4wX37ge4Cb7PncE4Tnd2H7NLJ4uRp2uS1LBLkXisRFiVc16nEUDp4iGbkqYhh3DhCeKfss5MmpFLv2kZoQueDVHk",
  "key30": "4AJChM47sBRpxAZnUmX4XPmFST1jBQL45VQMXqENiJXGceFkJqzqwwZe8b37hhebkdzmTwmmSraEwqweP67o4QRs",
  "key31": "2UZt8GCFR76SgusYvGvxhg6MUHPE6rYjwTMEmnDJ66MjJtm8ymwpRW3bdWFRBF2YVSZaZ77atw6EbrKwrkLgNcP3",
  "key32": "vY8mees2qHaczmmWWFgYkWjyVfTzs85RY88qSzAWftdLBWuTFfuNeoThynL6ygm2cEKm97dr4MjFt2kRw4Ucdfc",
  "key33": "24nxxQ35iYLQK6wiw1Shg9UZQwEESpiRAyCduwJJSVDz1TFUX61XLDoVn7KbuyeXBGh9sXcq1cNhS2oKScVdCBXK",
  "key34": "5e6bpEroaU1fVDjdkTw3JhCcLoJqAXHybw65GVnckjbRAaUwrjedQmGngquSPEdvRm6K7zjXLLp8WLPusKz275o5",
  "key35": "2wfEPyqvxhbTtU4otXQF98tqJknvCQ7R98R2cvjmmc4UP7DkqaCEooWyR1g4VH6KAHCZzJCz3cGPfz3s7umBBEpN",
  "key36": "69B5zSfZ6rLSGj4in9Jjbnfu8fnbNuxTVPGiCXFpD9Zvj9RLFEcXy7YUcQNJD5B6H9P7eMLBQU5TwSBZFyc53oU",
  "key37": "k4w78LhcyvccRo2bs8eFj63gGVVuLJgL59Syb7mYaMFoDy8EX5UTYEq1W3ywW6B1W4gBrAvWYY5B7fDfSywkPTm",
  "key38": "3KBDsF6v9YHzFe7UBdt2bWqtGaytn8k1sFpfGkkRM1qLZuricZe6mgRghpDuRhwAVBmNSsPMG5j9b5jkt2NjHtUA",
  "key39": "3GuhNsmJHcJ3NAMztpGQHPE2XyQVujSfs2fGi6Qn8orvsicdQuyGfkUmVWfGdyBZTQqAudhjH2YMvkP7ZAf96EfK",
  "key40": "3AszixPfmyr88PLYpLJWPxoJdjbKwYt6X4pFUvpK2VdYAtryvarq2sbrXjhi4d2r4X4QWLRr83hMthyAvEQNLKjY",
  "key41": "Uw6c8V8CuJRHgi8bd95dZV6qYibMNCc7amM3A5GxgKhiCL8Zku6oZQ23PX9NmGSudh7amBkwujJgAxSEAFCrakm"
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
