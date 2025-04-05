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
    "56BtTxCnugvzRoUMejwnbp1Tz5oErkJmHfDNAfspoB4SE5tsK7evjJC8YoKSSKaNe1ThJaqnnPkH9orfPdbH6aSx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C5JsczPZnzN8QjHDHVXsrJJatzERyhDruS8pKBBWuvDAg9wWXbo7gyqYzwyQJsk8SyHimNdUCBPeyB6xtJBABGP",
  "key1": "2bKJQmeurH4b6Zu2cCrPQHmMuUjvX2k9m66i1ycz4r7bwvNTyMW868ty4AvXQtWjYU66eGpjqo5tPD4YtCieQdHF",
  "key2": "5oABgbGBuZfeE1hZcKc7qZQH3NqXRXfzyZMQVqc2jjeURAEmWhjBsCJWvXsUGshWWryAH7cxTfH7UMRb9yRmKtd9",
  "key3": "3K2K1TD4FypENhhVfYv2utPZC3SX7FAvJ653aTjEqcsjw1EmCFGHjjhyfjcQH8pq9EKGhFEwPhe1TaV8PbEzXqDp",
  "key4": "5GbKvaTaXnbXZebCRm9wjat4HnHqTTdwinZNVXYM4PfBg3pYgniwaraAuA3byqmAnrAfymhedvN4oreuKzWdVwKi",
  "key5": "3VbRy1wo81bnHX3rNozRwj7p759kWUCpRRpg3EcqrB2fF8w9SXsh5oHotLnT6PnixsARunnVHHibi6wDjtKVnUSr",
  "key6": "VgQpeXohiKTs33JyZKBL5uxKEgApC3dyku9qz4ieJfvpZJwyeby8KGEBufezYdoc1Y7gkRjX14hwW1iZ1kVBJG7",
  "key7": "4hRD9UwqL7kg6rkUx5ZiFRv19z8Y5XezsdMYoZBJQ1XgMwqFFpm7qjFu5HRQhgUqkQsofLzKBv5ETQgMHVRZvPXY",
  "key8": "hgLHWZWcGA9xEUAko4F74eXXbBbUMdNuELEmvYJeEVcqJthy48q53i3ooYw13bP1izGU5gwYt6rESQ8okSiiHVG",
  "key9": "5YBekJ3okozaEsb6byEU9ZXRU5Kqi7KYZkWfHDJUFyABw4JT7xAisMcdaGvPKr2ZxYR5CstFTtpfP9WjyvfgStQg",
  "key10": "PuyCn4BErU4UyzcQ54az893cYKFEiuqfD2TBffaR7B996s8fuq4qa8B9gTTQ3GGPNn4zchTFV7hWHrHCHmo8o3x",
  "key11": "456coRcxmyAsX97aU8h2juTC7fDyUua8zmpr7v5VfLi64mbFXqNX71otRuXJs6wWGjyLfhfjkyWEL1CtL3zhkwgh",
  "key12": "ajNHPSPGamHsQZvLfaSjNXfaH7XBWejMgSiMQca9yT4MQdJCh4yoPrzjUrCWM18vgdKMhwsNhK63ejhHEpgVR9d",
  "key13": "24KRwXeUphGC7usxhrQQUe6jDj95cE8SE2MSqw4u7UfdyW31xxzfQnHXZdG9CorieDaRtpRbdJf2LPE8HAg4QMzj",
  "key14": "5d2bpCfKTMQoS22GAwEpYUkfFW8j8EXxyS94d9FyqLSYBny42mN3hG8aPPJ5wM4Tn3apjvCYPKDmaodfcaMRX4aG",
  "key15": "74b8CYd5HJH6LaXuqEj7BFiTGqvZFggN2XrvDtUrJTn9TehuwbfRMzd1eLHPUS9eicnNMt4jF86CBdqswKfe3ea",
  "key16": "3CoB52XBRkQCBSv7V7EQjhXzAwBpdZwvka3ExEkGvQ28DkWV16mMNRk51VbfLmim3GjRd1uvYiGmniUrUQ4JL1nH",
  "key17": "qw8h68GeuE27VSEmu27WFc7zJhx8wGprrHBNseikhFmhjChLo6gVyafWrKD3ixyjHFMfPcA37AD9HHsqsK6BNKY",
  "key18": "5wk4AU4fBYsjTSue4EDvw4ZUbK1fGSYTe7t3CJGrEU8CAutFpdCSHgBvrB1z9N21hgHMLkPWPohUbQrSKg9fcEvb",
  "key19": "56moqbnRsXqxMZxbHWYq7izwNTqgLWakhLMfZUVtfE4NKL5krfpFDHsXztJe87K8WFZ1jotD3TFtCa8AhmNnXaDx",
  "key20": "2Pz7xPR4YvXsksy1vqkUxBfxt2WD7UWFFazrSgFAGb5VAv3coTQVahaoKq2kaKzXJQFhevK9wdp7ZRq99tZL3zMe",
  "key21": "5PW2FfjU4pQF7WMKJNo4s5EvQBD9DpzSkEfycp6xS7tJ6zcruDjNrohqFxAeqvrnZ22p9JEmtzgM189EVdtNDGLB",
  "key22": "aDDNbLbYz45CPgrLT9h7gfZTxFKApQ9CbUi2dZz63bEsjubcjEQ7BQMzk7yTkgPLe2wh7JBfa9MsTUp9m5Gji47",
  "key23": "4BZVBhNxZTrkyV5GREYvBgEFEgBrCgMG7FrpxvZmVBhj1tSHrnNkGKxwVhEJrq8wWjSZCzbAKUWdP84e2XzNLYyd",
  "key24": "3AK6Nim6B8a3uDXC8ranu3BxevcAWumYU3f1HmiKSpwWQ8bR5bsm38PwfVVnfHpGXZY7QBu8uu5iEmXvARN1UMCS",
  "key25": "2F5A94LZbcfrxPdEiiZM7JEYDpEh1yASSxJZRn6qYdSWMkSEPhBZ5QtXdxk8YaBrRLaquYpQw8RNbv6nEa3Tu7RQ",
  "key26": "5QPkBgmp6oBRygsDHx5TaSoeAupAinzThhRqFcxsDHeokffAk91HQKfnbjP6cszwK6Tdxx2zay6rfnJJBih63fYb",
  "key27": "5cfnQ156BNAgX4GDAJwgCKrCkuCAhkYnrAvzmNSx2kVp2kSbpawr7Ema3HCycitpXVwwz3Wv4w7hmW9bjhVFQWH4",
  "key28": "3m5Mb1oDotmGLz8GDrszFNB6zAgJxaiyR79yfF8UaKstAWnH5uvhXJaVZ29NAQ1rTNJcMEimKqNJrjjCUFJoWQzR",
  "key29": "2YwowoCcobGbHg9e1kZMG8D5YM5is43jysUWNVrqqKFAAKNXsS3fchfQP9wnwZ7tGGnpAo24SBMJ8bhw3hFkx14c",
  "key30": "3WPD9V8mN7JC87DNCYjaeKp23PFgaGQnG2QK56J2hfRGCTAV9cXokB2fuiV7dCtVCDEWidUg4LARoaYo29hu2SXZ",
  "key31": "54jKe7p8SuFaaiHsSJwyyVujgruXz8omGisS9ZRbHdHVE1e8iSK8WTB955s1Bd4zs74ZJYFRp2ShMba29x7xPpTt",
  "key32": "3w25wwY6teDGn8pvg5ECogCMmRbUXJd3xvNFR8E3tK9zEH9aJjLgw1skrFNfCFYwR1EfD6qerswZLdE4z1tSacLa",
  "key33": "2KRzh23cjLXW1ALJVf1ExBpRNb1yrYrmw3BS7YCFaAmXrYojj7Ku2YXaENPb2w1Umdf8AC4QHETsn7QeZf2unpeg",
  "key34": "3NQKHRo1242882uiQAnf9svfzDgKHPZ9awbcehdR2sEaScn3H27vWYLo96UnF4n8wB19Dn1Fpzd8HorUrx7TABdm",
  "key35": "4GjAD1Rbo1CDF7merLNfVkyu6RojS4jySo4q4zxjU3FAp59nt1ikDP7EpXRNGLY5SZpVtAijQozC6gpY8D253Vq2",
  "key36": "56PHyjhLWhHCtW83ogWkqaJpBfWiKhzB41p5woxWoYX7h6QfsV5W711UF1RtVj6NWgY4LLuLSzMc9gURoTHt6imV",
  "key37": "2UpHPqtxzH5FtGifY9hCJTA8PEmEbHAD7zhoyU9mZNdzkLvaAU6Bast6hLKJGa8iw7fGKiDE4SL4937nkA1mqpqh",
  "key38": "5X2vXX3PsaxgNvqRUxQraKHNePR1bmmzFm2NJU4uRTFsAbtarf8aqzHagaXUuHjPB7RKMehpet7Rx8fRwWARpq26",
  "key39": "5ebs1o6CGC4Y1FbjztsPqD5oRLebGSytwrf5YVgeinvZVrJChMsJmhZ7tomYkD73rHBasoyYSFWm9NdJ6NM8AiDb",
  "key40": "2ZV7qAZzaj7Ch7SD76bYtw7MgLeWPms2dgmWuwX6bxyAGEy9JE7kPb6AavhzQCgs4SQRdxsckcKBRtjZ17NXWps4"
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
