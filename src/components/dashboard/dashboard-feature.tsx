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
    "5tw3WkkhKoGG3xgXQeDc5ZK8wr1avuYXhScb6MPev3d1jjGN5nEBNdxdLiVcp6tB9FBFg7CefSHzyaQi655UTPh3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zSndtErpqtKoQzAw2NXprqgYSt7PZ1M6vuTUbbLf6pHPDK6kefMBUHy9oL7h1wyQSi4L4BEQhVPJ6HUVK3EuaRR",
  "key1": "4RVRum7ec9TzJ7FcBmpF7GFQ63usKPhcLgZswkn25zc7Ls1CL1zUpeDucDo8GA4KcK2z2hGqKrAGRLXW1jJ1ePtx",
  "key2": "2mn5hQbRZjK7XLmLwSTGEY3dadvhUK4xTVjf1f2TdYSQfaiy8db18JW76qXsaPvEG59WnTRLit5G4u4db32rfpc9",
  "key3": "3kvD1Dgfwk1EE2JTVLKNe6MCHUsx5N5ain3vdvauuKe41iy62MuZojRaz5Xrujppu9ESHBCE8t3ZbsnyqRhpnYtu",
  "key4": "vqY6WXSPAYm7DxU88MTRrrk9jAXyDPhA6DUmRykBzjpGndsw1q3XEJiqDqsgS1YgKvbiKANwCCWoR2ZVXnFk4pi",
  "key5": "5pvxJPNDG1kvdYCjj1KbCshJZa3NKNMUyaGdQU8pnxJM4urA1cRKDwRJxNhQGdf9WhsFTHXZj2xEadjTMHP3ppJX",
  "key6": "4icPSmbRDf6FoQnaWpRtSvpWBn2cHfv3WHWcW5xRzubeuNW7cq5ji4yKtAVafypBwMt3xDiiP4JZrR6ZzbuZQdc",
  "key7": "4dNniVm5QcFquBWywZPXNVZSW6HkEAV2ZeQzak7jZmK5yKmbw4CXV7t86LE5Fm9wuBxcwBRFNqVSuB5DyBg6MVei",
  "key8": "3Spmu5dHD8mF4Pedv6rh7tefqRqMb8HY6Sv1YXmdX2GRrjJvkpC4JBce2qXAech5JKdtpMPPAJaruW1s5aDutuXc",
  "key9": "N9QbErhSG3XTaKfxLMkTe6Vs1DMcDCgx2jwaoM2q3uP2k8rGJgvpLMrJQVhjyZxiL3vkANRY9pYVrouZUyfjpAS",
  "key10": "5qrnbxBDWrK363oKcBVbZjkHA54BoShhAp3CrYqQ1C29Ez8J6C915M99spzDuupdEytC575HMnxF2n4NEbvDsSr3",
  "key11": "45FvojRqE12xYj8mkNJaPFL9hH42yrvuT8PxnC2rqBFBKGvBfAdZDqJmALAoNtA4PkiuzReXkjrJsURzByBQA99v",
  "key12": "4f45wA2zbvFHMqBguCGj2rnYQ7UKBWXtUqPWbAiTZUCG9Q61ivc6n6RQi5Y9QJ7qQfB1JpCAzfXBYkzyaCcQrFQc",
  "key13": "65s7UgAdeankrrazNFE4NSdk8QBUS71VbctPWcTkpHHJPxWnWmJT3Dsy882v1JpxvaNNVsAc1orQqjkqQypBguZy",
  "key14": "2m8ZyrGS53YgHcEt7nSCCFWZWU3kyRNefNWwv8URFBJjHEP4o7abrPk9KZguhMtpXQSNEsmP9m6fXqAw29enZ6Ti",
  "key15": "5KcKVmprrL2jg8g6kLHwopPJRqkvgRpXb1CNKKQWLpzUDMf2ELctuCs6VwWrPgpzWvayiSMtCB8mLTXgorHrzDaj",
  "key16": "54BoNiYagY23doCwyRQQT7189eRLXgKuozxF2UD3Epm9eph149SagxAFie4LSBmg2xF8EGC9iQMpEsZeHRoWfxpy",
  "key17": "2wmtPWyQ6iD7SEBAGEpEq6xzn8gxgkiiERbPeynubnQDqTmhBDjS9G95guqiVKTjWoR64DyqYtBT9wXK9HyaUDNT",
  "key18": "37CbfPKkhggwi8DdcWazjH9edhSyu2vAhtbenvEUn4xoys1abU29Q3UZGwtc5LpMrgBLtN668nTpZoNFbkYm72bH",
  "key19": "3xdMivTfShYqKSNNuJTwXeLcxudgGanmH9V1CWbYxZqeZ9EeF8artsov5xYECj4Wk9LdpGE4UvJ86gyqYL5ZSmFc",
  "key20": "3NwK3iCsSMQEZNRT7jxbx19gaw8vkfS5jCRvih6j2Nf61thcnx9C9YJE5DvfumULAbDnr4ZBXKoacyQY7Zn453tD",
  "key21": "3hChvFHcA53VNuJxrcAAFQXXQ1aoNpt2yKxB5WrN3BPqJ4aYtyH7uSTZuRCx9yHGskKSxB9L6PRxsfLK7QkhyHF4",
  "key22": "23Z4Ygs7heRggAsNHk5rJMDwGxwPPXPmqN2atNDrCDiw7L1K8JLjxBrTCBv1R63b9S5zqA2yQRM5yoQCwbpm8MqM",
  "key23": "2kndS5g8pVZCBGpKPJ23V1pMBErWQChXwtBFysSNMm55yyaqGKkidc46pC3Y4WYsQr7nPB6Ahsy5bQmmUWL555QY",
  "key24": "2TCv2wX6bLDwWSWi2G8vxQJdMXkBsPckuH5Sb82YhegtNKkaVAUBPf4h1vMAkemq2sVADuTEoGG1dJanr2qirXmZ",
  "key25": "4Qh3R9jPRdmK5ySLNPKtdsXCZYjyBpSYYyZ6MBaM6fWi8RRLKdRzFBnrUfqnHU8ghNR4wj3zSBdTTHsyFx2VDewc",
  "key26": "2FudMtH4m1pkm7xGEhqtuQHWz7zvk4H75hqQSsF8VhtVH9HKCh6CdxTyMudwVugt9C5kpHZ1om6q7mYWshmm8pPE",
  "key27": "J9pNoNmDzN3RACdj67AgzLvb9XjwdxpVT743Tv3hEniLZVsLx84H3M6NWpQZmHBkoEEzbjHiT4oq3dVyNBH8Qna",
  "key28": "3XDgfGt7a4RYWVicG4Cf96yvJT1LqkwX8rbshQ4bXYcCT9Q9ztRdhi5gDbn18Q1jn8Pm6hskQCFjnt1qHVoQazgH",
  "key29": "36ozS5Yw29vYnrrF8qfn4F4iZcrRvBJRHz4ZyjBfsn3dWCZuwb4erhUtjnpoUrT4PWjeUgJ8gQ2Hn4hGW6zRwXqU",
  "key30": "2qRLAgZFcNS1TXjWzbQBVJqpZeDUB8tLBpmEsrpF5JhjUE41phkQ7Qo3ToumgRwCsjTb67fRNsoZRzjsZjyjAhnR"
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
