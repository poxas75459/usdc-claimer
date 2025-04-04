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
    "5NyTZSgZ5RVWQZDw2iKVVWsgbRBUu2ksaYYNemNr72ffwjp779HPv9W3Sas4sn6uN3m3FJF1eXmF88JggeyWo297"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HPUwEdDouUzXQCZubDcqxBeS3V48GARZqHUL8jf8WPa8xgJZcN1wLgDLWBygCnNNjA5P19jD36QGhP8rhjFSgUH",
  "key1": "45FqLAniKYvpwAJt33zGRmX2kBALgyn64xnLRUsrNWpXKAQv9wPMMy3NguqaWBJ6kty27jovmYevPZ6Ft5aXedu4",
  "key2": "4phB7mu5BEFfrGKsLGuCjTHVC3XVRYt5P1GjjgjrHv7S5CoHq8HhEYjkuNp6pz8DtUmwizbt1UVkSnvMYawekZak",
  "key3": "4Dyaq1HzTbjbufsRsZ7p9gX5KtuEzDgGp8a3hu36bAGKex8fpzwmQ4KkV8vQZMrAtuSWQyoPZ8FFGdxh3b3oQ5Ma",
  "key4": "Tytas4mKuEpZs2nJ6t5UNMuLjJwW9BL6EyKwdn5GcSU2ydysmZze3o6kDtSdX625X9BYMtxvFgKtwcLgrgH7YRP",
  "key5": "5fmFnakW3qC6XZDccj4X8q3B3YZmdL8jv3ztFnmbLhfUdnVosCatdG1Tg8TMYrp3496wxKd8FuaQn4Fa3KQUnQDo",
  "key6": "34zsjC5ojPKkiEpQREcHg2YFak5U5gHAcMJN9mjsoXpuSHeD11xKFgEVXmhPMjfV7Bf6RPXuoSy7FaWnLTqyw46N",
  "key7": "4d4RaeDH9yNdDtFZjrM5ntSGYmj8RsoB3pm1F9s8x72BnNciPicRipop3bnYzPEWJKxAspFzDHNa6jHPsCpgtTjV",
  "key8": "2YimDUGojS4FadRnCm9hjmPkCtspmFKkJo9LkMs7hcetKJUsA7nVtkssdUNBUBQYftxmLAAhrKnX6pf13cs7pJKK",
  "key9": "4FKzs9VrxKVEqUDZ91xszvwCWLycLkg2HHvaY4ScAQmFvXaB88CNnoXA7jqge46FW7q6u6VbxY6vaShhQdu87xni",
  "key10": "FrnMhy2SsvWMKAw9gevB9sWwLw16jUa46PRU4i9kd7eLCXrCxo4S2wZe8JdM6mpFyxLu1XA9PAhCce94BHe8UP9",
  "key11": "4h9d33CZ9J96676edsJ1yyyc8pVJ9mjTMWqcAVYWK3rwjwjqTedZUoTTDGfFLfkZtdPtw41px2k2N5B5HyPvHpFL",
  "key12": "5RJmLJEVyjKiMbiwHiVa4BF2LdkiHDQ8yCqAJgpSueEj7JKy62AU8JuEqcLoM5seWX9qSK69D9uYmFt3YPfsKVFg",
  "key13": "5n4npgyACyyUZcdyfTCfYHoaaput3USnrMdRt6aUzGwAsEvwG5QUqzQC6e2YLa2UShyyexQH8v1o7TH26KapLinu",
  "key14": "5ro9XiXpjkkYKLm9vTq2ifeajWHNVKqxTXtifPx4ajRLSk1YRJY2Wat7idaGQ4XsCZ7xFjBmxX7ihnFayR4WcS83",
  "key15": "3doZ9ZoKCQu8kphuVP5ajk56BtVxCgiZKxGmCprE5vjFET6F561ME35XrtxDr5vP6ce6efvHVHKgUaStUizArbvb",
  "key16": "5a7VC7sPdFXKyLD8N327i4BjhPpWGLt21YL3hVZeYpzyZTmhdW2x5XaGNBDNf28BsJjXv51etyn65cuh3fgPPzkU",
  "key17": "8vxjLUzjDJnTfZD5AxNCobmuRx4KFtUe2BDFxjiNFJBQAn3zoPefe5DrnheDbkmjMWADs477eMkLedGM7Edc5uC",
  "key18": "4zrVXKKcFuNXbTkpJbdKkeCBLDRnVRRFDeirgoN9WT8QADJaASYpQJy112YJXMhgmvX7YtE2fV9Fx6xiCrEiVGaX",
  "key19": "4bC1phwb2LUpoA54QpXGWEwNzJthtbKHEKWTAy2gzD6zaYUUN1C37b5VZ11jdcrXm83i5jJqvp8uogTt5JYTw85R",
  "key20": "5dfDCzXdHLjeB5rdjWn3KxQKN9cr5yFbi2CTDfVjeJdNgVmv3pbugpnZKBhdtyjtdfuyNN7SySJDYyNQdUmGFc6",
  "key21": "5qfrbV7uot8BXcnyQVFGpxdULLsFVwnffYnpF7wUUunMP5KQBWCyJ8JQCfCjT98mqqQC7iyokYwsaZqRaYzSk9V1",
  "key22": "5NR8mNo7e5xdbCVxhmZG79Kh1oabrvimkx7zG6eKNJjz9xFxY4zK8eWQdxfsP9MiMza1eNz15enSWKNFquWMYeQj",
  "key23": "4nSBPYiTzy6TGP58kdjJWisATmkahqtr2SujEp4Ug8hCQvPeL6nLzezXfXpJti16xS4b6sPGoV7tZVdRWk1K1aMT",
  "key24": "44YmSG7n1kobPzLom3fxQqxuX6AUHC8yB5MPtnFjrSSUFAPwPL11MareL8BEGtJ4EaqcNbjMxQZUQeXFMgs961NE",
  "key25": "67mEbCZMcdmFsAXNLumknC7kivrJpZcoivU5ZHMvoFKj5KzLo7d1XydqvEL7TLdBJbKeVsi7Y7EuJG2xkusTGwn4",
  "key26": "5Buc4MRyVQmdJRAnmocEVVQk7yq8hzSTDQckvJDFrRFAffY6FUHXp7e2enQK4LiPZQVDRhX29eosjvi9EgPJZjB1",
  "key27": "3DkjJyxCG9g6gt59U8wkKsQSxy654h7DRfzJDWcDMau8BqCDscqRRSJMvL17mhk6teUcbvc2jjbsWwwbH2kysmWM",
  "key28": "3gS24yrAYmQqPjsUdDPRNWmzm6bya2UW59eXAboSs7UQtysmTaLvCGYaUwdsrbxunR4L98JDpWhj2NX93LPAdhVn",
  "key29": "AufMJnyDrcrCUnLt1JnucPTe6UdxL2ZbijNgjiwPQURnQFAsdt3FbPCut4J4an5VmsrHe88TwcuSR78nNWD2JYa",
  "key30": "5N5zYeHZAvCZBMR5q7wtazS1CdLeqq3E2eoUkBPzCAnuApTnegoVHMp9WR9ihG3a7yTUekbMjuuY7DvL8SeWJpcv",
  "key31": "499oLp1aAioPcJaK78hNoMPhke7L5FecngQr8rjZdSUekbxz66ZTqShkQ97S7KUxgAtNCU8AknPfazYvcJoQaeLw",
  "key32": "4caKj3TSQebDRtKSuscMK7hsvs7Vy72N9WFvs3ZDjwvdW6cNSyPzvP4x3eWirKVi2NgpAgFBmr7HiHLKuvpzFzzQ",
  "key33": "49LHWmGH62yzF5h3N5CLTFux2NVvedyzU3uaACxKwgDxFe1kKkH3kZWqznXbtCkZtwAidteEQswu2YRjr94NeyGq",
  "key34": "53BRdPY26xD7FQrfV8noWc3JfB7qUbSyzQivW6ZvnQXBHDY5V1F3jHNn9NcttoM5KJvwYevM9HL4aZoUC2QfDxrN",
  "key35": "2RtqjR9vZeDjUmBN8z4mMimFoh4e588oSB36RkJbB8PPujpicJGQaRaWbzGJpt7PNZDHGxV521EXY3wjpa3AkJgL",
  "key36": "3fL2rRPapRsan7u8tsfemPCcevCxzyeC12UbWfDWmYWQd7uBxMzZdZTYEZmJRibjjizfPa59vFnXYZgBG8zcw3eX"
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
