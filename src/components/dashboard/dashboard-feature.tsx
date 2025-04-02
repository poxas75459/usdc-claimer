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
    "3Ry7vpGVrW6Ca6a7yxaUZMQcGhg9gam4L1U46KAct6Lzm5cUBB6sdPCuP5mU2WBvP9vEvxveoxurEw4VhhnrEt88"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ahCk4ELHtuMG4DHA2fWZTVSa4stGWewPPAywwmF4h3atQd9qwbfnZES7N7yNPLuVfDNFFXVpwderzpBbLdLhzfD",
  "key1": "3qg8Gs3nSUyy6HvXGMERxYeRobqzEjCVNPmnNrvTEUtEroFuqjxzSg6qRbEdGp1mg3cgWauZmLe5fiY2aPS7hkGS",
  "key2": "2a6ALNLeQcw9ZmrpXJERF55Q2Bda1b3TKkuXBcgs2mJx9m6kttZkkYecYq7ytmXtwZ3ePrt1E2Cmr8fReXK3avB",
  "key3": "5yBufqwMXzfv9kMHzPidnssmtNMpEpBXUhbeitnFmakiJ5LFFkxfjfuLMC1zwhtVyG9M16H3mkobwVZAPEyNGe4i",
  "key4": "3ixpSR1yYv7VFTEvsaaXd9XvDGcPh4XNo2DRpEjTYA6pX4f4kkna6zLBKFUqQm3oZjwv89wdtXawzuBnDt2ZHiut",
  "key5": "53ZdnrH6UMDXqweDnu8cDFLLEkXhW9VaXgFkfMFcAgdzK8hywy2LtgJZUkLMFzcwSvfPv6ng6QeeZcjiyBZ5uVXK",
  "key6": "5JhHuBeyRV2wBcoMKeQfQpUArm7wnJrU7M67CiLQzNH53L9BsNesKcGDDegtPeXWRWiA6XDdXdxqoq8MMmVBNEvR",
  "key7": "5F58b25nwia4448YHF8DadVBmyR3VZfAerN9QGSNNtD9z22i7MAK8YEJTufBi83fujNxm4V2dnxQkzMcr17X2ABd",
  "key8": "56ts9vAyJenCxgGqzUiP1wGPNa5YBn5MBKUddYmJUtcT9ZExCjMeZGPcaVFZnQY79AD2hNyqJevm3n78i59YCCj2",
  "key9": "sNudp7wW4YgBToDm7sbwEYSGakyxd68bEzB1JT3qgFLjZeeCC3ME2VCmG9MfSJAvCBwZTdyUfaX6JWvdhV4bwet",
  "key10": "2CaZnaZs6TpdyjBKV8MkpjxFZbwyYcbQyyRv5sqA3mbDASYsQBGJiJ5zZpcaojvfiWU4Xh4WZuX8arK6pnmxLo5X",
  "key11": "5acbEPVF8bFim7PhSw8bobWn43dwN6AwH1vJv1va5EoNReVBEV1EsovjxW8pFX29qpteN3gXsKSWHhxBGGHHXVp8",
  "key12": "4EPX1GEU3KRZxGqzMtPgn41A1TP1AWNqVSuwJZdM76XT9MVfdLAh455GSaQBcgKefdtbso1WFHgCgqVvRu8wc2y2",
  "key13": "fKmLgNwh7riUyomjMufSWJF7GNYLjEJ2ANxLGLdkAp7U96mXXP4A6FGfptBXDDuuRPhqDasSiQjiMsUUXXpmuy9",
  "key14": "4Q9JJ69iBNnxyxKnCLzx1tE3f7vbFLL1NJj4n52xoSABasVYr8WFFaA1NUCG8wTwrS5FVkUbkCUzJZkimeCP3Msc",
  "key15": "3WK4TJbt1uGdXHuiSFbHKU7zMpq8VxfBTuMhmr7of7pHn1DZsFRkqf98D1oBxrH4UZdKrzrhkhcMKvSNGkHaxzrA",
  "key16": "5EkJbReFtgazu5wrCEoNFaaYGDvcjJrCJfiMMxPTvMe2wNcanYgA88BEWNKUrWxtmGqHQ44TBsynwhP4mhCLK3Xv",
  "key17": "2TmTrtv5AAhxxTVXfAAVW2S7UqLHMpyX1v851cyE9Y3t1YzgUeDwspjPUMCWfmshXgyW7eyacjvniVoTZd2QuSvS",
  "key18": "5GpiYv4YHEhNvG9fYbsFp8NBZCgKUQzAYJsDe3E2A849iFMH6CxAeCcKw6pBjBqngrxAuDDPkehED1qEK9XzKzCd",
  "key19": "2ukGxUvi6rCprfyZd5jB1Lnwj9fdW5fXd2mXFhu9nqAgmk4UrKoE1UJLksbkWgi8aS64ZWaa82KbeiNvxD8jhxcE",
  "key20": "4LFTVGPkZaQfNN14H5Z3TuXZmvieadkRUaZHvt1THALpbepBPRdd9geu1dp9wvsVXFAkhFfd25rLYyorEakWhEhh",
  "key21": "thLtiW5RaGZSo3p8ewAxJUnM7Pxp1GaLbAgBxCmbU45PrqAq8qReNJF9X6W7MTkMtYJgTRF78PwkDq1jGT6ym75",
  "key22": "2q97Vr77gG3FC6MZxaK8qNKWWbxKYzEJdcMsXAjn7j5x9Wp1sRhdvABvg3qc3pkZHdUpT6ktfZ1LNWbngYgyQGiH",
  "key23": "2z2to61s4YGWYFpVm8sP1KR5xcqssnQ8uiAdtDoVaGQ6jGgNdfkdMEu6TeHzhMEs6mW3YUQP29x9JU77rUtHJ3RW",
  "key24": "eSKdQAK5bo4uCp7g1cLh4pUxM59Bb12pgVK2qfHLWALZnU5Avr2rscncT78b91Q1cMciGX3Beour4bYgvfrCCyF",
  "key25": "1YVsmVdsMfP8vQJed14wV1Sr5q4NVvZXN1hJH87dGu2TqAymGWshXkXUp46gsnVG6HoHbHK63oiQKjXoQWPmMCS",
  "key26": "3YSGetvCKSifZMh6tJznLAgXAtKhrVAf3aNAHVPyXQNxPhKsdKjU7E1piwUXS7DGnjYafpKvUVGAsh5DNnwsNgVX",
  "key27": "4roqGvUrspSwry9aeVLmuU8ERG7bat5jCZx3qLMTFv7DcbxxLUKwF88g1WQsPcNyS6iQ1ZLYyKNPAhLVSqcAYK1r",
  "key28": "2nUwaepYr221kQjyGKYzMaaA5YzP5vtNiJdifuf432akf4ycRxxDtFC7ZwouB31am1tMNrR7HRnosSn9FB7oQmrb",
  "key29": "649BfPEiQpxd2kJrJo5uZG3MbbPgvd184siPjRVYTLB3rGKjmNBbn8FeZUpBHkLQCWGpDdvK971hUEoPVz19x2JE",
  "key30": "UBdJYZFyw1MH2WkwEoQMqhQoByc15e4XjyPoyJhEx6ApEshjnUqZpgsGLpnWHYYyYm5CpYpbutxbqZoS38FbRch",
  "key31": "4DaFuszUYf1QHJLyhjLEHKGjPyYbQ29mosBzPxiZS893G6GWQBJ8zaiEq78GCdwWzFaWEDzJpLGnYEKZuopkE14w",
  "key32": "5TtaJDCQ7DXwkLpx13Eh8y3vo6ZJo4C2RvvxkqjV2HTzsDkR5s5h85Neao5GenKhZxnc1Vcus3G6V5Qf9HkuashP",
  "key33": "5fvDPwCA8qLTUSoHmNnmF3LFQyrCtCGCQuMuXrzTk2QWiD9BPhoMNroooDuTea11uzr9gAsHHsBoNSF5NNxvnjTS",
  "key34": "NdMKbF5AkPVAbThpjRAMrUedMt8tH8zWBc3DthhU4kgyRSwLWiE16AutmTekiJqrHFw7buMZwP9UZYQ8yovgcqR",
  "key35": "4ezjwrFEttB4j7SaLkm1HF7zDRzJc5brdKfeGAigKqWhKRNp6Vtw7ZktDKZMnvG57WRUBimdVMtEjrRsv4mQf8fN",
  "key36": "5L6zyGm3PjbE1r8UrbEAitrPhXPK6LGXhBz77CZtAvxENhzdfMgtt4KZisAiADz9ZomaCYVDR6L9iF74xMA12apn",
  "key37": "55ej9Mb5sMa6WYKgnThtv86VB7CMJ1Tc4e4f4kRXqJkPSBpZxLkVEcwH3QAF8DxQvsyhCtwwmH9C6MJAZZCPjAgr",
  "key38": "2KQUYerGCGASnTPJ353BD6UNh3TF56rBMrDkYcjU61PaXjMp9eC3pvbQ9GP4gDHBYoftojzqfE7mjopWz2VfNUJn",
  "key39": "4pncEzrf8Riy7dt2rAmRMZXLvpQquBS7zyigaKA3eUzGyZxtRanAxfK2A2Tq7pfH3UYH1co6X7EJnsJXUfUkbNKH",
  "key40": "2bBKSexjCtPjhRYJxMfYQ53u35PgDS7ZLrSExEHLmb9dq6iB4BLUQgWkZntwR4YQi3tSDzqZoUGFZ6MMzZLrCvLo",
  "key41": "2QK2oNpVvP6UyjU7bi9ojfP6tULgBNdZ5tMTuaxeVELJuGVin7XwK55ongMYXNdTTGNgpMBKAz4Lz8bkt18YcyFR",
  "key42": "5RomX57dvyvUiMwVEs2oPjSRFJkS11pPSNx9BWA7cwgzcxXCFd5xzbP5eocoj8jD829T61V8ECrhLi8fzazwdNqc",
  "key43": "2ji9SJ8Hp7oapN8bAPHUfxCazsb1cwgFVZktgxXNWUue3UK2qJUoG8qYiFkzvc929nMuteQmNrh9AgyfVZ5EMhSS",
  "key44": "539nPSSwfNMmzRfbKUiV3SzupBcMuHh9VDi1b4PtbZHugHD4iU5Mam7od3ZQHqaXFdkXKCE5uT3kkorh4BH6oGSv",
  "key45": "3caZM3HpPt1RrbZVUQpNHTrPQgBa1SHHBX13CWKCDiR4w99U7g72uTeqy7dS5aNCgXBJYbkCVHyDVb22dzyfjRm6"
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
