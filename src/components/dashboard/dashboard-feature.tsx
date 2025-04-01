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
    "4TFD2P1EBmGBacosAzqJHWsfLLRzJZpkBEDfiRMkCSvBgqrgAENUa29zAfuBjHYGNpdRiYwPWdU1uTtqNsL2FtCw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EnQD4Bf4Uiy7q3bTPatnSRhor5WmJifx1tjCARYMgGnP4mvxuiWw2aZ93WujGmk6ah9P6QemG1aFyeVfJgmzdp9",
  "key1": "2ZqSiyKJ4b8k5WouDAWQ43dssmcgEiwXGrhUzNdLEkTiinESd5pbVqhSbrLradpMJwTPMewBTkYHgUq5MWGJjtfN",
  "key2": "FT1zCFyNQssSKL6YTSrdHkGAKNs11hdCmMzHh9a2Hzd9V1TRJ9H7DqmcK78fer8Zqsq2wnwTvTXjV4p1sJDkkmD",
  "key3": "CCKU2hfPm7cgtMzKzz8djYEfzDPhCqjJEKP2DzzLkHGnb9XYprT3yJSFQ3kzLvi1HzScDv1s1ZLFAf2Dbi5P8Ys",
  "key4": "2BjSfgwaUjW5qUbSAxC1GQNYU14UfHnCtc8eP5q7eY1G9ufKxf8og5PM9czZRB17uW8FGxeLyjRCNSYRT9Swh4Nv",
  "key5": "HnJWhPtKdxxpnrm4jaYma11cVL17JdoksSrJBRGi51kU6iCMYpUufP926oHo6kBTem1j8fDB1U4EUETNwH1tA3t",
  "key6": "57543NxiPv1vShgVGiDvxEWUbrWWC2WPARAZFwUwukDwQS5u7Aq6r1bDnW9p7wKTv68LxaQQ4jQe2F4wvvyKWunb",
  "key7": "aCHuYqWM1JpbktpSeBTsHjwhDvKVTyzw7uo6dyn3nMWBCptTFgKW9q358erMcYqLtvg2MqJoN2T4uaaiz373J7X",
  "key8": "xPWTEvow85ETxgVom5XeeWGNAm717SG5UMaBYpSz1BrxYAGzDUgEN6cR2s6AJvj1aYL3vjEvtLitk4G2LDG6jDL",
  "key9": "3itwBo216npZxWKY9Eu3HanVMrv8XPZVVqXNbPfUmBgkXWx82HdWbp1jb82vitc8oy439MyJPwJwgC7h9G9gMQjZ",
  "key10": "2t5bo4i5U3wq7pt2gd7wYxsxCHekR27fr6Vv8ot6a7zs43AtWgJwPjQjtuFgWaBt8cHwcG2i1LVumLgR9ASnRccB",
  "key11": "2Mb3cBMfDg13rBacHT1i6zRucLa7RMQsw3AG9Lf9PevubctiVcQQKxP7w5qb1Ufk85tqypkrWLBKnGmLMj76xaP6",
  "key12": "2eyzcqPz7wFKGvf3mYzhLxquGHmMicjM1EDpiVUf5pqiX1SgZBDEF5iKp6RJkps4gJb7XCF3Cg97fx5uK25DX8Ee",
  "key13": "VkzhxUvbNTnnWkaYWn3wZxb9YEhiN4tnzZiGARrpgKXw2fgNF1B46Gc4uFK98iZjgtVjGbyZicpKao4XTT4KwDh",
  "key14": "32AcEQ4Z1mCw77457b9WprbnYcc4T8Et2WYbLnps4rdNvUwyzqKbbGvkKXF7PYrHc4QNDvUF4rjWX2gSaWA9VsBF",
  "key15": "4eEjGcpdijgLyXGxTKxPRUF94szoke9jSGFrJ5bJrQWF14BE8VFwcRTLpoaw9JgWwjZebREqNw2RpK84g31oCjCf",
  "key16": "4QpkYqLNW2ffyrqLufvfZ6t7H29VWN6GHUp4NgyTtuu8pxbYRnk8tmrLC2dLLxGv4c2nnNb9fyLdeRWTSvXqVnmP",
  "key17": "3zA1KZs1PnFBNiSVaeN4QLYCFhiVy8uExji5zbZ5ocw2RrF2vM6krMKvUKj1Hi7qAT96BfMm6u8EhLGszpUszkwF",
  "key18": "p7x9uEcGwtaEwVNRQ8MEpxprcMYXZ4xHHod5DZitHvoJoGBp7xrUGKN8keXEWXcZ3h6gLFNSRRwoi4zzKeZaxDK",
  "key19": "5ju5DDXjdXsXfePe6iGZ2sn31LyryFJ1otw8fHoPC4FKheUAUvSeMh8wfVCuWo46KuZ31kVr6Nb7DpPE9CA4BrQ2",
  "key20": "63UfZGbjcXZRyPevp4NhbsnnNLyHfJcCWv2FCSbVrEGtQdMT2h58SRrkKqL4pTcPi8wuF6gZHdWJdSXZK6EwTCpa",
  "key21": "MDgDwd6Pcfzb9rey7EEBUS2rKD7Ci1qBPBhHeAb2jnDsHYupmTWeBCrERw6vEFZ6ieDyKX3BHVkydPRkbsE6YmU",
  "key22": "5FsbSNfPmbL7PSNRXo8dS7yaKS7yQUB9gry2Qie4jubsc8CAtKvEFJXgJCFwb2EFq5dGJYAXkftaB9SpWZwuz6pJ",
  "key23": "zGHi2y4HTPJgQ8U41FJmxgTsW3h4UiX1ovNDYFazGGUZqzPRp6FJiPfFsRQYRzLM3oYb3RFVwygjwnN8Lq9GcBD",
  "key24": "2oYNMwk9hbjmTvCa7VnoMbmunZELEKXKiT63Sudr1YjvCKz3L8pV15yaNjkuhdZcgvQmg5E6rzQvHhNtAB9KX7pd",
  "key25": "4feTiR1EtAq93Dqbk48xrkYtoEdvNjMQZA3oE1bFYbdsBwCqzgBgBGB8TMM4niQLtKutKuS3r3bDLZe5ab39jU99",
  "key26": "vVePTW7RXp4vGVoebj1xZMgTrog3Zw54BQPqbBA2R9MobdpmXamuZPmopqV26Dq9RZbs2YhRhN4rLwQWjfzDrfH",
  "key27": "3Y7xXwWwhDJ2SQVN4NBS2ACyjad4nNjZfEa3AE9re12VE5ZiPp35EsxRZ9iXWUo1P46Hw83VKqzXDDTbw1CGDk6k",
  "key28": "LAS9ZFRtbVP8qMYARjaVgPFy4jibMxxYYVMFa5DHN5xpY33PAfho372jdNhQxyweKfgQgJvRQfcssTHar9CFxhx",
  "key29": "2jbLNhcieng2gwwYmXXFP1FBrE5AZETHmJsy8VmF77QZYDNaCjsWPqMBUtqukHweUJJDewaSMEEfeKhV4k3uSUsy",
  "key30": "27egeWEfaPwATfKeHh9hYWj2iiQnuMKTBUjEskMBPfso58gvAKpZyt31oKQ3bWZwEYsxwe899apLRUhpszz5mMfj",
  "key31": "3WPpJDiH55qcFzMDALaPkzREJQ5T8yuKeP3Y8n4oEQEvoLX5GoX1zEwV99CyPQf7Vzg5muPs8bjjma3HejDVjC6P",
  "key32": "3U6GFqcmjCq5UVUGfyGVXfF7c5ef9cz98okES1BoV3Qtr4QMy49VZevBt2Jxep929QzUmjMNA6BAGaBYSw9X5fBk",
  "key33": "prQcbiDh8e4ieWcuDLEtGsU5oUEGsnfxkEdrFE3pz586sbmPpeuuGfDnyhGM4TKsGcgZhodsgPj2UGFdeZH9GdB",
  "key34": "2rNuQ19YAyvZAJxTH7puuzVYMhd2rwqAkjcjWFnGj7RRY1Sjvft83wNCcUvNfvGaSV8vfGukdj6HQNd8FLHw6Sjc",
  "key35": "56FwovFon6qrK1UPdpED5jxwSv8Du91Ck4doX6fR5GzpULm7DUWzVABWd77EKhKaj1TJmQZnfTyQ3LREK9oHNz3U",
  "key36": "2MKwZkPwZ75VFETeozNpsaxHbvXQgg8aQAthmc2Zu6SRq1Mcay2nJFZnDQJ6ozevpwYDFARHdEfQX1kaH5Bn5R7F",
  "key37": "5SmFA3bLu6dXMAeKFXg7U6dNxMVXG15M9DUikeSbhuBNtkrdeLy9LR69N71kjZWXeQKX3AJr9Z2A96SdtRcTL1BH",
  "key38": "XcEVpCvny5CKVEg5MtGw4iBu4gr5zmURURWY1Yweo8AAK1haVD4kQfBNQbu8vjykR1zHqfpac352LbmsxX7xkXM",
  "key39": "2rU9FnJsf3Dywtdnq86ckS5PupEd5x1BJbkh9Ednj4BbNHbjAVk7JFJZq5jQ1KGsUyHMVcSrP7WrqrFBZCam3Hzz",
  "key40": "3JUSHyxDAn73A8Dv1KdG8ZEgK4ADcFuQz5LoZnGcwhqJ4x3a7VxRiA4P6ehkfB9LhRm3CZWBGzYa9LYYBWzwoQTL",
  "key41": "4wMaVriii9PrEHi9jaWix1jUXGTbnakHRwPmABtbeY2qe9FWVufaqWdQjrVJDGing4Mp4LuJhPVJi2MhXRuyBfms",
  "key42": "5pEinfo7U7SxivMjoe5fJfjYjzBL1FAzdr9e8vaApESYdPTtpYS8EM9YGT9XFo7o4Na4r7JcunrMuZ7e8gJpFerk",
  "key43": "5y5BmMdiREVYDkQv3PMaHmWDtR8g5GSjTBHFpNgPCcqCXUcmbFPEgJ9WcR6TqVqE3jpAX5kFA298aVTn9xFQVVpd",
  "key44": "5xCsvxrZe4gBzevPsVZUgA1pMr77cSk1zkxkUdyawkds7g42ExDRLdv8NMywqehABJjMJRkzkEoqsaxddHdJu3Za",
  "key45": "2D1HSNuawDff6zugdvDLCj7rkTKkxB35v38PPWw9iveQ3YeGJohmtVJaf6QibQGunLYVkZw8sAe48AJSjtw8sT6J",
  "key46": "4Ko9JfFkuhSG2Hq3EC6PG45D1WmYza6BHc85Ebkhb7LJQfnn2QP4NUjgqnG6YFfUqjeJYx1T4LiYqh5ig3suhNKE",
  "key47": "4d8KfQ2i9oMmZ9xivuW1gPPgndZELbpwBHyjDeHo7vAd5bKvdk4VE1JcTaJhYngh9qSH3S8A3La7MRiYYZQn7bmS",
  "key48": "2j1xpu1p1K4LswgXKuwbZf97ZsK1Ksr7tJpS2GKYuV9PLPnU6Mvqm7NF66593WmXVM83TGpUjtNxEstsyhhtDrwk",
  "key49": "4eZCzGpeKBDjUfaGVhng7Zed72EFZxG4MwB2cHzLCckom3hrNG2oitgfRthNNNYUsP3WruuxmaZTEPZh6Pc4P2XP"
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
