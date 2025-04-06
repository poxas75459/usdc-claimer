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
    "8oRARYZp2G9EidmqritvgTHzxuL1A5URTDgKfLxYwG9jvLu2cZKEEmuzGawLta12a7gY8A7WffehWieg75k7jZw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DVGxe2m3RWRFS6RFK7osSdvhA4ovTkR4suvGPMp4KSfiTG3tSwk5vk3o1teA7fhCM1N38GJZh5d4KzFiodcZiX2",
  "key1": "2R66EULTcQqpLL2sqmj47WZzpHFo1arTioDzeaveHo2x5wy2yDUTPK6UHj9f3ngPwEYmN2qQTjJpbQDsWu8f59jw",
  "key2": "eZnzYTdvngzZ2xtXDujETkuuWHy1MKntXPQerjv7LWncxWkUBS9DveaUjHfakAKSxTtLymJaocS2kTtSdQDjh8h",
  "key3": "3DY3pQ7U8jSDkAypdrMwH7sua63rAbywmtbuiDYSmmvTuKTs2WiBDdUc8eTuD7uXrz1E6B5Q4KUah7aqejtRSPvn",
  "key4": "3pPiHdVHL3Ey4MQdof2gkoBiJWoHAWuqAbcDvqzZXownrmzhasjSr1iXyX9mAfy4Dvr7GzbtBjerZqJaUar5AHvL",
  "key5": "5nhtW3X8tU3gXJggbKQhSV1PjkcmgDRhVLD49EvdUALqR77MxtmTJ55t3yi8mUFmYvLDAxZnEbD34wXvLgn7U7um",
  "key6": "3hoCePbSvKYnhjK9NcmjN853iB5V2KTQw4bxi3jKR9pZcQDPbocW4d6j688Z67w5bJ1Jyn7jYkCjyA8ju2mQcbLa",
  "key7": "3ueenVueFkZzVd9f7SCNdzUQJ2vpC6wxUDPqm8mwgJuip3DY5AoGA7WngemLaZEP5t5XGmHMqZVk671j8WMckGck",
  "key8": "txSysMyTvZmwH7QfH48E99A2WUfr8U5htfB18S2MkkuJ19LnQZMTRykjQQ8N79g6iBoWoTvmpRadUQjV2A8GFSe",
  "key9": "3W2pw9m9g7VRS8p93dejssBQVnmV847tiCCv7dtMaAXoFZi32sL2E8UfwiPnELc8KnyWcwf7RwvUXjZyLm52R92c",
  "key10": "3DuUudoodwutJ4JomtiAfnDSQjtSxZLaZvEfGAk1D4PEsn91xhQ9skGvJCrgKzEFgwoq3X5T1Ud5dPZoi8mjH3k",
  "key11": "5Sx8QnRc1hh8GKWz1Wt8iABGb5xQ1sSc35kXZ6qJLCEpFXn1L7M66PQ4jBd3GkEvjJBogMNnGQPVndAkLDwsNvcd",
  "key12": "31Rb7eNC1cXs5BacN8MoLz7iFbSBx9rrawejDHu2cAYTmsiQ4U33oE4LmCAHzjp2mZzWJ4ydvoXd7UrnHG8wmuNB",
  "key13": "3mixqZVo3aB6CtDjc9yxUbe1gQBLrP1cCxAW11W2o4tBkNHQFbpXCwMpUu52Nwe7U3yV92LSJPxfRaS4W4Cjye7F",
  "key14": "Ac6ABpQbRff4G97v4fZdjqp6YukgYqZmZQEnBRYSxK2N8VDiQ62Sf7pqxDRaZVZHbUVHpCSuyMKkFqUGfx19Bj8",
  "key15": "5mCAbFRibbDFXBS79GQv8ESYczLP82hNjEWByjHactbk7UD995S9yLBxKsFnc2YHYXZDfpM5bPRU7WrSrc9dGZDh",
  "key16": "5eR55jhNBAxmfmaJJo4GEyEywwAQ3fAPV3e31SKaDE6SAPx8EnxDzVNjB8pZybn5XAaGt1TTZVGw2z1FtSaGmH8L",
  "key17": "3ZBi8z5qd5MYXM2HAEgyXSJJL8RpR86gXGgh118h8aBRNeMaZKoqELbr2RMJhdVKtQENxpN1C94hjNXf5Act4av",
  "key18": "4fMTAAcsMr9dgZsPezKBaSsDxcGqDtL55sgbF5hgYj1gT6gakVL9ykVQoNfaMJrPayM1Tt51Mc16CSfzmwvrA41J",
  "key19": "WeKt9WnDZSyHXyFEPsZW5R58gEqRYwDDAuxj9Qd6ZWo9vegy9eFis9fyb6gnQE9Wom1sNzZ3m2YskGNDvTQBis5",
  "key20": "37z8o1XYeqjZamXgXjsJgvR9M9zBCtD71maeYtmz2gFgcedKMJu1mCbR9uYyg2Qx4LdkJ2TEJSW6zYNPLTuDbKp3",
  "key21": "422Tx2YGdY9vzsqCeDDAz7sa7fbC8h9idJcgpwASk754pawCU2J4Y9qgA4q5asRPmhYCF5cRg1W5SQZEGxKAwNch",
  "key22": "5DfxKYtL184FzW5sZ69ekje9ER9VwH33pXjHf4qS7ea78UCYEeDPZ1QD38KNav2Ft7ytCbFAiumEniSxVpXaiU6z",
  "key23": "4ojkKQKZYeM7nhwKtny8mG4hXQQ5UqNvKo5jadChUmGCxkXB58PnYQ8cSJuQpvwLho7TLiYAuEtzMM85JYKaM4iF",
  "key24": "2qyWmhNbLkgKbAXKQWeLjnMqfoTtWVx2RVoLPePWTQTpxCLu53C77m4qAPw1J2Jfyc1EKyhibx4sJjzErp5A9KhZ",
  "key25": "52g1rnRuWCgf9KD1BUkKTTRA3fu7QxLoETWTVfj1egVnK1xby4gmvnfnpN2xthzpz6mJtvCh6vZnQEKGJEShBanC",
  "key26": "3d52BrSXEEXQXskxao4i5u9FpPd1h4WMhKcSMDBuobbqshgaurqmqjLJtKjg7L7drwmXhFrP5WK6E9UMMAs6yYTx",
  "key27": "4QrmXPKXdGekxut4VUtHfNDDnia3Je6PRWf8ys7tJGk6dyqgKWrKYjAQ4pCseKMz4fZmbTaFNWuvgNVNHtf2neGZ",
  "key28": "4W3yZJNbTC2u1wozm8kTto2215LT2TbZPowvL26bNt5Ka564JQaw1dPSxKQcrGm5fPgiwFWfgvRFLq84bVGSvrAc",
  "key29": "2uJKobgcJRYMNBj6uqRyuKGUkjcWxvfivBUm5PKDLLDpcmXNktoiLo2DtM2XcnsnZjPUie3XgtSDgeU4Zg5Te2S2",
  "key30": "36N25jUgh9D7zqXBPPuyR1uHSXGofokEw3iGfrvzgdDagoYpRMY1x6fMag41S9VskqxoebWPXMvhrYjVaQNvAkag",
  "key31": "2hs2dNe7AzdWyuAHsDk9NW3hzFELD2oFxvKn7FiDSWGFY9jToyXCU7UJ9CBMi7UdtCFfiL1RHoNU3HkEFvHrc7oj",
  "key32": "3FXnJ3o58X5Y22ApRozyiwPETVEEtZgLLKFb5bNzNPvQ7cV84fD6N6n8cMv9okzgfNwXnhg5w2s2TskxpaipT2Pj",
  "key33": "Z7UbMgnTPeEJX9SF18b8DxRGqYN6c6DhwHU6zPtrZg1jDjpCoqstSML92J1wreudad7waP1SCyQFfEoL3p9eDn3",
  "key34": "236ysYmyw3CcteyUFta4MXPQqeo35Ec6hUUYi5VShC1iYpiXu8tuqUWSrVA4dB2jUcizzi4bSvsbxDYKVCRSHAKK",
  "key35": "5e7mF8KvTxr3yPTgErq9LKBtyDfXNDBkwwyB2okST2yhtUuqbmH53omA8WX9jFGdrc8ZzxEz3Y9hg7BWZz5bPNL7",
  "key36": "5raANrCDHPN6fy8H8BxwyB3vYtHK9UXDK94mrAZQjD7DhWm6ZTv3mg8amRoWXPE1XY3fdaVZXHux67coeJG41Nat",
  "key37": "4EbAqGM7mFhYKSSs25s4pSFZVWJTm53nE7MpnRc4vAzhWhTRsMCDYmRfkjL3cwLCYyYFxiqExvfTYtXRQjedBQDd",
  "key38": "3HiVzM2Zdqh8ei1odbCfmshRGBoyREzvSDAw7ewATN1J1Q7toT2VBRQozMYVeyRuEdjGZ665MhJRfbwdKTgKQPCj",
  "key39": "53Uu4AZWUhrd8ZQEKJ5Axng5vHLDUumxkmae5WyaZjGgNujQCV4MhTaeaRP5HJcEa86Xgg7FKLiU8UAVR66XNDWj",
  "key40": "35zcFsrbTDtTzcQoMWk6VSh5pokXHuRiW54LkBmQTJz9vb2mcfsBW3ah7etexDQnrbK9kEKbZoi1YxmRnWvztfz6",
  "key41": "3XvNWbDFGisfV7KnCSjVHEpjebUzpVS5A399oyrQiGarmPEDraRcS3kQgwXuao8F6JVC2yuG3PEKXe76So8QdkZL",
  "key42": "482CeaRM5jJBWeQBqnMbetAQAYVKEWpYDgbTH8AkJBvhWQc91KUuJjhaxWVGBKo7y2ejmyj61VhC669SL719HhBy",
  "key43": "38XdGabFpuoCDKbYLh9u47GP7HDsDQREHbC8xLg6yJCoUDPRrrocq7a4nt9iqSgcFjpd4DfhtoSQGHjPn1VsUbgM",
  "key44": "28Rcsw85SdHuJP6XJJvjAKDHrrMbW7ZuKeWnQTNMyyLHA1VrHFvhCuU3MHE6iYnEYCKDF8sYo8mwKhN4kNDd7QFk",
  "key45": "5i115cytjti65nsVSBRLp251tFFe97swzYKRQMGHoACSfb2dg8CdyEsXpJ4pzWLmdamj12LGUC38LhhfRyi8cQxv"
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
