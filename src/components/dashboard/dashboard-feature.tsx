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
    "9mfZkWdK5PVW59esWPByLf7PDdX2GAmSJ51tVLy6E1dRBfk1shqJjrc4BTggies47VabyaX8WyqzS4xq7bX64uf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LJznp8JWR7u4oaJuMhUuf3akp8VP6p5nqQ1N1FH9Qjt6QtHfZ3QkayzxHXTau5ajVWHZDmDFx4jWS3Ai7S1reBa",
  "key1": "Kv97EavZRbAeCo8NL2GgmXGJpJLMqD1QNxjPLKAsLtddc7Aa2xnrNHewDjmSKqkHFNHcZaAFsCQcqZCrqNkEUJN",
  "key2": "DC7N5XiGvyxdtauQCA7KyvqF3NEpKVXpVHS6bxuzDopFD4UHFB4B2oTUgMTZHmubT9J1nr2r1Se79T2NAj3vYkW",
  "key3": "3ghjrzDa3P6tT2rgUTvSscsa4Fmc3QveXAjTruBFgbmVCj1SVZu8W4iUh9V999v3TmtC87UK7usjB9Q9UiUBkdEn",
  "key4": "4eqjGwuSb3X6UAhBTtQSMnwwjSe5ZTaFVTrtunVy9ianJwDFjtk4Zkk6SX974nPvmWXD4BCWrDDdrXp8uJ9ZVcxW",
  "key5": "5sRR7BwxZAKXubraAgzQ3jUhFAsV2R967AjA56wHitJYj1Z1RVZQqtNncCv4b2joRJnAc7jUjw2W1JBictq3SdgV",
  "key6": "4XM7phBcQU519AfEkD21cLcg5wuCtqnt1UoyqWHEunzQNfWMAZoUGZXSswcFAqxD8kKS7HyAK95byxn83yxhQpiy",
  "key7": "621BfhvFujwzGLBPXy5rmiA2TgVREDksBqjTBQZvBDqTKevuaFzH7sazu4ep2TmBUrxK1GU6oY85VZ44gDpFWjL1",
  "key8": "4iERtSL8cmkMQjKUxsJ8X9MsZ9WQRSLXcmbkmT3binfqZd37iQWxN9WpGBamw6gdoty8FASburz2mfKYWzr22fsm",
  "key9": "3eQS5oZid8EFQc6woj9pU1YFssmXKKx9SsUTUMEk8h7x5sHWKdTH8cD5WRMyDNA4cWaAaeZf2ufbCSQ4YupLarRx",
  "key10": "DdH6MVpX2AtK7p11Ezd6YpvbHNkaemHd5Qtv7bUjFLAkoJbrSZM7F4WP1DPvyArUdSroJtYabgvGnLLL9biJTUS",
  "key11": "5kxNwpXKhAwA9FERHNSGdYqWczWdBsGzyMPfF3kxGyjFNjmVH9EehPVdRi5yteWnYTapho7sXwwvNDz1GUWczmms",
  "key12": "2GVV61WvoJSncX4Yan6UU5gpCpoETXh5qXYsS3YY1G7Cj2Ci9te2ps1s5yuAbXwdLzbfdjJn1uUiWjioXnm98pDD",
  "key13": "66Vdy5YpvsJfbErR6GvxctQJQYEQR2TTyPbmuWqcA4npwNZ2f6yDT3pUYYydryDQeGF4PCrcMMykTrRJ3H7ccchK",
  "key14": "2ZkY3vvHNsqT8tE8ZCXhA2WtTGMXBY5wDp4WkU8PEcZTigNfeBbCPKgTGcFpT78weofmMwLVomEeG7iT65DCNKe9",
  "key15": "4Vsr7GAMmofp2T1HbnzfwqHr7cikzEYXbmReGz7misdGNJFjHVMwQ3zdZybVxV44s5YV2fcrxsxKAsuXifBbPYZe",
  "key16": "2gcLcmcB1QjrmMumK5NRbLqdp2t1z9acs4V6GVfpwZWj5ApmdJ74weBzNZ13sq5qjbAwtzuqnMwNu79QoN2EdSM9",
  "key17": "5KTUy67Hn8hd7YEN99DyM52xSUZ5LSqf5NsAD3PbjtBPiwxKPvd9cAKykiZ1P1dEZkrb4EecKhK9bPwwVRR49TS9",
  "key18": "3nTtK5QC9dvBt7KAWQyqUym5G6mgR7B7H9EKm9PaGAvZhQybumMgh6mMUcjqj1CyKsKDtGSSMfmnxjRqizuFs8eX",
  "key19": "3JL2RVNLZ9Za8cwQuLvHr1yLNeXfJizhDPgDR719c8m4ZSng9Vt5Zq8cRkYYyosdacNcYVQcyLbNmZYjFzSQCLhi",
  "key20": "5axLTxi3roBcmLksqmxFyppDHKwZrE8pXQmMPwTyKq8NoCeRmG5x86uKVBNUNSKBRcJStNCCXCJ2MhGS6sHjZi7Q",
  "key21": "62nr4369gNnxa9uJGHco253LVmdV8CR3WFVbazbaLM3HLPkKyLVCVRs46ppaJ6DSmgrb3wadG2XgPwDAJRiYM7EK",
  "key22": "3147eDPj167SShyACqRAjoScbTR4DZKv9ieGr4Rt8ESTyMskyxppHXDBJXM3jLMnw657tUeWRoMrZbsUtbm86og9",
  "key23": "4i1SeVbAG83PnijMhe82AFu6sPSXRxMb49r266p6kYgnqUQuW97ty1eqx8zbg4qkq8eKp2TbaJ5KyEjcPELFRVfy",
  "key24": "EA4bHEwYSVJhLavQ2gY84QJRCwymtfeeHQzsi7aADeVasGax5dGkxsTxwTxAKjPSrSdzHQrnrn9KxdEgjjCRPsa",
  "key25": "KXiMnff21wxZGRY9ie5iEK5dBQd4pbuapxUfqc1BbENtxovZLeF2Chpy4zhKQixPQTBdNvfUSVqsW44EnqCN8oL",
  "key26": "3wt9Hb9rPjwiaAdx2gqckgD9qRUxBmyfRt1iaygx8jjUXs1LV1oHSWag68Ug2UwEnyF9VyEqACoTgmqi7wB6W1cc",
  "key27": "3XWnqkiYKwWYXLtU6XXm7MJ4qsx2Zi4vdjyYYgkuDevDmU5H9HsoSSwzFyhvwo9dnqAic6rorrgKMZBVVvk7wr64",
  "key28": "5amTKhDuWHv1eBMkbxCeFBrZVad4AxpRBwwMWrPuZCYAwLn7cHr1HLQgzKQRAxs24U2kmxy2UdToryvCmK9699Kv",
  "key29": "659PeDxHJ1QaoKmnGGFv3GrXAp3FYvXAWEonuKFu9vwJrYsaRLYmNRef5FhtAyDKJdNT9ZZk31vKNDoDGpiBgKv5",
  "key30": "3jRpx1vX6Drhb79wy4NF1jCrDcFfLkWAZWc8Nve8hXwXQUMxbbQMsJZ7oQNvQCYhwTPxNuAL3mP7boJXKEkrwjTK",
  "key31": "3ZwCEr8agbaXBVDRmUW8h55YhTFNXnenytzCViYyMXEQHsom5KGVWFaE1nKAxNmqCM4ixaASk4JVkzqVeT5YjNt4",
  "key32": "3MDZ5qdNvqMfKAGMqTWPeyZKn3atbV4PwfBYemTbH5tcfnjvZH6gCAZ9xTMCeWijikYvBFPx63Kxb9obkq5ogn6f",
  "key33": "2GJ4ttrc1MKmNem9dPDK6M3ZQ6ubjwyy1XWVqE3syd4N8aL3YPWuwF5BNAut1ioGbim1rBb2Cumxs4sQkccueEc9",
  "key34": "4YUvAhPoMWmUUoR9zBh86Tt6j8gqz2Pwjzxd43u9DqARPQ9m8LahW9c8r4PSGzZMMxv33UKy5xQcCieUdodm1syE",
  "key35": "3fE1NMPyQWHeECfxiYbuMoeYXAJmJs1qbDT4w1nmwXo5M1uMhUk3Eiwh3j4jc1HC3cgdBv1pLB4tvkJUdgLubiPB",
  "key36": "W26YnFCik1UXUfpc23TiSarMxwJHkhTcvEn2TBZJTzJgczeYB9Vp6kPxkh3DuTDysyRhHzXuHqeszny93Pq28ZY",
  "key37": "xw6ZmKF6pigdvCbTY3WdEnFApSrL4ra4VXbNjTX3Ev9Vev5KGpMJQP3VXNoADKJmdDud1m4UR7hkiUiHpYrxWEE",
  "key38": "37sih1CwyDEVrEQv46iuspukXWPikJGUaXb6wqRaAP7qd2xpAvT4CZ4GsWZWhk115e8zpLDdZ4uaY6dbRLqXN37c",
  "key39": "2dNxcyykvLykCYEyV6Er87v43knvrMWTEue94HqscYG3mQSAvWKv4AByue1Vw6xegjPGXSgw2BiU3vaDU7YcbwbN",
  "key40": "cY31PHrVahbXdELiYWwGC4Wx9TbjTMArbtpMs78GcvohHgudUQd1zm7pXRyd421aqdzoTqHQjJaAkE7sZcWn8Pz",
  "key41": "4qomyK4JFokg2E7DicsoNi3992ZsQ1XLSU5u2L3uDpKDi8GhNVNgrL4gyL6jqmsTvfT7npXo4VbhWWpGKntV5Lnc",
  "key42": "4XWi727h4frZcLAnk1DKyrB33U8uSYkE1gEnBQwNChbNxf1q8PQ9C7NfoXkJtB1wHNPJhB2Lj1QoqQCdt9AJAkZn",
  "key43": "4C6gbrutrofcXUtbdRwdx9zxbEbEVi2LJ8p2fmWXjTpEowYA69RcFW4nQpJpmk11aG1HEvaqUxVmPuXMXabVpnLQ",
  "key44": "A8JwxUbxD9jEu1Dd5ANzKYkwDL4LGtRvBmFyxqnVVdjdh24VPtrh89yVDYFJz1cw48Vgp4A7PXQaXyQbVyVfjUb",
  "key45": "4uQfJqLzLkPvekLuyY5dQRVWLsGeqVNGnDrG1bTowKi6akUHxxMm2wgVmsXA8jxuCQwLHB1ZrvNhWoc1RPozWD97",
  "key46": "kNKgmTGVqoppo7WdseCdc6ZDqBLB1Q5V7P1JVw7ab65UmCyZHPiDNTh3FhWBJ8zmqRqvc6y64kVv4d8hcDvryVu",
  "key47": "5c1nLQUHuxW3DmaF6k3RozJxpQf7ZUPU2EBZk4uekBNyKMkKGc3g7nptuTZhYzSAYqg2A2cGRhRg1XvCccVVkftk",
  "key48": "57jvLMMbtGertYhTZrxn7gJnqdqXhCt8yY3V9uzjJ69f6XyugZj3Dn3v59C36KoViUrJMqc4L3Eqh2yQNhstiUag"
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
