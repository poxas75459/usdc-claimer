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
    "3HV75nwVbSG9S7rC6iETXek74eTm3wRAi97rVywQWMw9i52QZDKkfUtAeCdMLgxL67hKnGNCLMuwJv53rbZwZTQM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yYZDpxea8PAm8iuDBcfCKyAcYjEmS2TbS6hYvjbEiyqhEcbPeHHf2eaUw3PzaHvDxYimtcuW7udwoeC46tMxGwj",
  "key1": "23Vn2rmWvqZx6pGc9Tw4TBWyXah7hHR8LeVJmD1Qo6b139VXxsfuhdm5zqfgRY8TncjJi9YL3cGS7L2UGwkm44d6",
  "key2": "3B69Z8rF93ApRspxzWQ8kVc5m4W6DSLnj9BVgCYMH4bDyB3QrXNm9wyhsEbCxqRxYtacUK6jZMAW8oqRMoNbKE3N",
  "key3": "46RBABoRygq55WHHnTMjnkSYHM4CZcAcfE9qeevT2SUfZRBmCrKsfMzhzVVMCRPwB4bfCPkkoenMxfhrv1sciJaf",
  "key4": "H8fVWAAQP6ouCQof6gmfdqZUBhX9hFopDJNDNx5GNoPGC9PQXrnXCLn48aP41ydi4pueSxc1o2wxSnZrR2dkb4T",
  "key5": "2baqhpk6M73eibnn5xK3KL1MFWhkDN4EZTGJxdZxMqbChaknPrBxMmoTVdNTnYg8mHT3tVoLPHp7LXkhn8cNxTGo",
  "key6": "4PwNR28YEtWyaqz3XD4sSAwNonPoxT62uiV8hdNr8X7w7gfjRceNQ6y1RqimkzxEiNEjFriu86Dc7ZUU5rtXPE9T",
  "key7": "4wLnkpkJbwgv2yZjSeNDKkBStBhtFfLao3ej4kwqmXNngivG9u994wo2FQcpSPEcDK9PhcGhKoyMy84FVxXT4eiL",
  "key8": "2WzTBYH43pYv7W5q7GT5daBDjftCdNkSXpw8wJeiZ9B2uazHzwm3cX53vuVCTzo6PxzuB65ZXMezXyqBPT1ajDr4",
  "key9": "49VPuYRuCtx4gLsBByLNVZNGUpKDKKNW6o1NY2ZzQ8syxkbKXHQR7GheA6vGNACbn3FNFLynofS7F8vytbtGMnDC",
  "key10": "3a5AC3eZd3Z8UMDjyjgTJazXmT5tzurzpu9UFJdEvPcmw5k5juiCwVSuU1SMp9LYRAAuMqvPPG7EVqwnhxsP6sAB",
  "key11": "4f8CZq1U9PDVTAPDiLCtKoqq8WGoLAUaZPVBv8wEguWr5MxvDvMwrVbKKackrf9AAvpskqPPymjT9MkitTPCyGBS",
  "key12": "3B1cvuT6YNBimuasWBfe6mqGiYxP9ZJbQ6LMur5Kwr32XGNzcfFpb6EV5tM5YE94xT2KTUsYJbeVCd1KkesV4tDb",
  "key13": "28AgRCmGKcjNPdKNrzHp62B5r5UzX2nKrWiHNGwidt7cznaqGZ1R541kcFJigECkRWhXuHAtT16hcU7jN7QJ8a7d",
  "key14": "3CfDEzbV79qD3AjNoMLvwrd5wmMoQN8sqRAb2hpJN44wskKt8FFWqpRbvfjuKSzsZH4JCtdqesESFhit9A15TnhY",
  "key15": "33QxgeCAp99NrUq6x7zSqD43RLqCz46KhtTKsoTeRq3tzqbi859RWmWkNATYrqUXM2nS2CbHpCmuwsxeifHpd7N2",
  "key16": "29PSUdhuugJwCperNiJJnYffEkpaYL6hY7H5p2whaVFyHosuyyuHbB64SNmXmtn7aNPUchkwhEqKaJR1Ea96AM3z",
  "key17": "RJD7ErXKYAy1WYdEUyUJnDf824kPM2j2iQizVTKfkfFx2xfK47VY47hJLnDx1EGfQueq57JLhe1mLoziWLEyVxX",
  "key18": "3PbWBNZnbko4GEJJ5b1FVJAvGJ8dBfUntbYAfcUsG63e15hKqUTTnCVPnU22kS27Rc6oog8HWpzfXzDQobnXQujj",
  "key19": "RnGDUrafX1TBw6csB92CcWNnAtn8ay5tWU3RZQv99idD6XoudAwwKCWyrs7GoWXXwhUgyGLjxe3sdjpVD6ZLy1j",
  "key20": "3yPYCugkb8Vs3WmZD27RKsTbMvrDhSWPExAiYtcUQSjPraZX1yip9c2oCxPbL6B6kLi9e2Hfd7AX1f8XfbARdTTf",
  "key21": "HFQxqoH3UjvTiGnK279AiLPvBH38xEhehEaHAgkNjzyesHegFThqNPc13tnTo1JYqgQnMM2ymwPGES78bSPWrrd",
  "key22": "4hVNgAgomAEZAZfLX6sUF5eRyVuhoaw9nz4LUAa9CxF6PQY9XWBnq9daWhMk4WqVcKMXmLRMuaTJKB8bd7RPLcLn",
  "key23": "5g1ojowLGbqJsnYEAgAxSS4jZ9tE7jPbJQUJaEoiNG3t4uTdVbFPYnnryHgcDvHvG6CvUpHE9ENj63VqW74F76b3",
  "key24": "5xtVh8JWbU6CDuuH7f5phZFG5PXXiCtT6gpfZzdZBTp2WsjmQr6Jvsq2mdiuEeP9kt5oXrvP5SckjyzCpeaAAkKm",
  "key25": "Me5jQ14pUTyj2Hebe5r8sdppZcv7tyPYP3a7oczG9i2He2BTv1s8oAgZPbLewQQtwSyjzegRXUkMLthuuqdAWEi",
  "key26": "AuHKb46fJBbxtc4WBemNzyU31mmsKa2EkQ3dBPx5M5ktrLpmX26AKoyT6QqYpc1Hvav6uqSXH6Um5hxNqYkymGx",
  "key27": "2e4w19T1NS88WbjXfsf4RjQYCFobC16CdBxSLhYhkiKko3zCdGkWUs6MqrZiiZcp37bohUj5WTZtQsiGs2tiW8cA",
  "key28": "3HXdaQhzAahajauo2Kpd9hfHwpapeRnSYRYMSQ6gvYBwyfAZjhnUcADDEmNKFbLUMEf4SWD1KEFtzfBjDzL1ywsv",
  "key29": "4NuNqrEh7nZAMxZnTuMW7w8UvbDsj5SwhXPDU13q53whDcyybLYMxyBT81FMy1eRuuLNehEWQpJskTPLVAQCqx4t",
  "key30": "5hTyXZ2tKVzfLwHwYYnpNLE8apG36eRqdWfQ4uhW6CyxJxSMbn1Wd1RFcit2A2tFftt5K96wbHM7gfFrpMNb5fr6"
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
