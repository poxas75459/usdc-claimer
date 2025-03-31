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
    "5iG3bSJpHj3PMPAYjqWePKpcezUQeTJhoFo6aC7huYLYxJpkiLCcuyZUvrXRos3xiBNqTFRfsUQAg8wQZXTEBMV6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r9vMxLMfsDMHBxMyJQ33KTgtiRchAtDSkpXQorf8GBTJfFqBwBgncUjUY6aG3YAbUYcW34fSnEMWUJ3er99KfjY",
  "key1": "24frFhyiA9dBMTMt9e2wnrMcVQj8nv2uXCoarM9E6p9FuJbwKc7gcChn1zKiciB3mmLCNRrWsEcNLUMbECJ1NA4e",
  "key2": "3miuNwbzbuQZmEgumK3hiTvVkUrzr9AyZJK8gRX5YwewMikyDjsnEXF4gPGqjoScH4LduCPKdU46ogxiC1a8z6zz",
  "key3": "4KTEdsD2dfJXyRN89wVx2EBwxesDqtMfkATT8yCWLivS55rkcDYN4krRvR4ukzLvxMTD9KdaucYEDtWFoeZzSJkp",
  "key4": "BC8qKdavWXg78PovNjCavG3Gh39DN9to3iinqkSw8jLWnZWZScSgnad1urAL36Vp6ERMhjCiYCXjmiwqax2Aqmv",
  "key5": "23CQYV4qkqAEE8WbAsFQGTBmehoxpWnsCaBaqf262eeSYkDGe3keDwCoJetTnbo3samRfxTKyvJxxh1R9WGDcGBX",
  "key6": "2TKHhuoVcpbTnGsYbv2MRJBUo64M79EihQkbs8DxBNzUw1RuREU9UWar4rmY8kiSLQ5tWuGxa4jYaT8zM7Ysonak",
  "key7": "4NPcE1oj4BfCDqQY11cnMmCDb95xDYzsqpffFmgBK2iBDjtrnQKdmRFNStbXL7jsCzkybNwJscEo8fsS6wLAxEbV",
  "key8": "2spMfXkhQMMHpxVXJCwZVA3QkAi6PW9D2GZw8RYe99MWDWDjMQTSj539kU3sugW4PMUdVMJadKkaPSkD5kxP7Krb",
  "key9": "4ATa1TuUWtyg9umC3Eemz4k1vAThrk1UrNRzqXBNjFZr5ZcAWN5vh8Z1nXx9jVywxPGWn3oU9YnDFnywFkmLDBmC",
  "key10": "nASTmucxJzE4mPZCpFbzMn5ikyzyLoYM4j3wwJixAuXBFUPWWW98H8hdTyZgstdFf6hYDnLLQbZMVYZXb5GmSbB",
  "key11": "2UCHZrDk14zgMAjxmt7AjjAWhTTb9TyakWtuXbvYHqqKEyH2CXJwwmBHwNi6b2yPLKs8a2mTKjykZCGRFUesDnNx",
  "key12": "2XRgFEcNwNgfyaqyVdMJzdFcJaagrnV3TDczpuTSc1kT93TRq31obtmvRADgjJUXZQ6drLrVk5heNuDArRQMGUYB",
  "key13": "3yyR2V8BMgmRSoH3GbsvvmDJqzmLCUz7KRbpF2S9v8z45WKE8KXsZAExsXToP3znTxtvw8mdSzNaPmJVdxC5mecq",
  "key14": "YBEj5Y9Pt21BhnogbDaZ5ShnYjA6RR64VPSSeQuy142JSuEv5KfzV3FUJPxUQyQRnTWinjuUmepUxE1jkw41NgE",
  "key15": "4JFt723SDZSuSqh2SrLf5w9dnNq4k35u7Nzp978UFUACGffCYPHgPakwo3fZiNnxYX1YVzTvhz2aR69ahq6kZJxi",
  "key16": "gK1S8ZknTopu6xWs46dzcyE8ZJoqjMXsH9uHNMz1YhvVqm2kGFxZH7QeNAhfqTaSKMQJbUk3KkmuSbCMF4FyxtR",
  "key17": "4qv798BhEEase6yC6oRAxeCzx1u8AssxMzimFxpZPK2cSwgE8ej23i5G4ya8SadW7eMAWX5GCFgHZCFWxhqN3dp8",
  "key18": "4mr1afvkFxD89NFgbSG5jXNSCUXXcz28eJAgrBoBxaoV2e9MK4RepQJ9HF5NvFDkttUaMLQ3taXhTwkhNR4xDRuZ",
  "key19": "2vJyQyQgZwomMqCPeHpXuQuLnANESSNwoTsnZDF2eJN9SvbywGjUQUH4nQgBDJNDfG62ELvgJeVkWTjZ88uY3jJ8",
  "key20": "2MnzG2GvdhqRSyXTHQ9kc47oQLjELGCcvonS9JnErVMXtncbtqfTVN3RdFL81uMSq6jz7YUKjrrQmdsKaiShSizU",
  "key21": "4KXyhneA1U4ahoACZMGgiMbAHRAtoHVqcFZecyLifXkeSEyz8Az16gX2jCQhgAeWhg788TJHH4859BNDFa9mQMzm",
  "key22": "4fYLo11Hwsw4pAA1tHnbApE5tQevKxhgVzWjN5ZFApKPswvnTac27VADZxgc2kZMLwZVhbGxQ5t1rvHGgPmhD6g9",
  "key23": "3Yq42g7SnDMeJURuAMeaghneLbhf3a9XwtMG3ZN6ugJyvhppfagxSCjUWoZigD1HKFLU9MbYaybSY9JkMQm16Uf2",
  "key24": "4xjyHEqFggjhyiNgoSQzjy3vJ2CMcm84mRNLMuCK9k9qD54tYtEVkV9Qjm9SKasjNTt1QFD4cBvLWBkegdNgS6gN",
  "key25": "297shF2SoAkxDAwZCbBpcLtPeiqfpbsBTrKjwLUXLUhteanVHyAc8BjuuTCdam7t631UTq3hk2woNFke9Juf7Dbn",
  "key26": "3zBW2Q8dpoA6RqnDNGJFqwKuhUgbrvvLtJ66mNtoL2Z66gET8J9ecjBoi6V2aTBARUJoyzrAWnZBKeUC9qQuQ2im",
  "key27": "3BW7V51Jd9qFUkvHtUvakbxFr4a3TVpHZW7PvTjgRycExzTaosebdichSroXxBtUqcHs4QyYmyj1huBf15uU8tuf",
  "key28": "5V8gxqK6ub82x8UG8su6VK7ipAcYcjmvbxKk8AKcZUMKTcU8pjbEu71MJxxSt1AXNyx3HA3zsLZ7pjtwMueiVqD1",
  "key29": "2DgD1gVW2yP2pz89wnNmiVzrq9kkBC28yQ2oYs76Giw911tE9jKG4WqiQmwG34W4fGCrBGafeLf7c6xayFMKGims",
  "key30": "5E4ErT1pZiyKoa8sfmt8gqttqGPaCiGHJpq41ZnAiAWBSFzibm2VSDvc4oBE6J9DXwXBG3KbUyaSVZGi38naTnyt",
  "key31": "3NwzubWHq3LKUJKvu2Hb4zVPewweJXnaWy17qUsgomzF9FnHqtbLVS6RcgrcRqrjgNDAbxpw2zQWs8744xb44P2e",
  "key32": "4wky8AB5N2v7JeBrxdSLUMWhfw4abC9kXGPwF1n5PSCvATAdgH7zpnUMixsQEKwnqyGsL3o9xCFrcCfrFbPzduAi",
  "key33": "4DDhL67zs1TtQWNNF9TFNo7rfXR3ubKSXnRXYSBM6rgyjiKCxtSEqvk1X7PoLCrBRqMS2TQ1qWBDkQuMsmBakp9E",
  "key34": "3q6XikykFgRvPhhZfqM5DVNQcEdHSo325KXNbgEwmCKYhiCxdjH97ntU28qo7z7weDVDiqsJsZZAJNwPXAppJk4s"
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
