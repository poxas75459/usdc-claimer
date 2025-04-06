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
    "sjXaCQY8CLBdCFdSChuufEnaB2VPaD2GzKpHPzPEavFkB1wPwrbkwthBm6aQQD6LRiddbidj4rymAU5eUSj9F2c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aUURQ2hynjmhiu7PmYWVPA4KY9g4g7RdZb7Zp8Mrb6qjuF3nJzJqFxSGYAb1w6fT8qrkbozu956Qif9yxaHc7C7",
  "key1": "3aSpXbMKrTRcLtajVdjVRPr8a7CMtQq7xomsojkiuCojvvEVwipHNC3NJhzeRBiMipRxkEfcsXbe5oQP4L96zWGu",
  "key2": "3seyJKr829VvKvV8WGtfR9ZWdWtmR4hGcNeBoF3jtukjNEZhishWPVP4BfZ5nioiC7jr49BVPqg9vRMTJHLdNeJd",
  "key3": "2Ke27TBqrjUieySN8HVbRqUU9bh8DV2JoXwF4i5p7F888ASAgGPh9fypbjwmouTjyv8zXKd1cBvkaQzc2rjnDULB",
  "key4": "3woMaKTpmhMkx6Ued5FbekwkwDagJ3BojzYyvFHKPivpBGt1LA5UP6Hksa5iG97uenvKhxtgfXUHSg321rGc9vrE",
  "key5": "2ZFVkgf14doTM1wF1T4EH8XCnth6zjsmFUwE9B1GbWiBCtgNvoNPeFgMeD9W8aVbMU6HQ3y3btrvP7sqFf8kdhPg",
  "key6": "314kb3yEBYHE69sDSLqSHAQLRvmLcEbcJ1r9RyJerBfbB4DotQ2PdMwpNTJfZLxY3JYd647f9VF2Z26F4GoHqJ6F",
  "key7": "WFWBpvQFumDzi5vAFJ8vj5yjejvf6zokWw66S7kPzkwXd56WDdcmC17tJyrwUqDHnPw9cMjhMRAYwQN2xvRY3sB",
  "key8": "23ehy8hWG9EWta93XQFaKusfoKvKeoB75Vvu2Ay8p7TPy65JGMaspGiY6F6vqwHNH2W1N9t9YsnYetsz9TzA3HiC",
  "key9": "4GeDvd6CSG4ZWh5g8R6rA1C8cp9JV3ehGf855vJk6gPxKNxM2SBSG7jQFAC8We4KXYzvQmyJeqPGw3cjwi5pLxcA",
  "key10": "3uMnQSNr5oT4uMJM6qcABTx4pZCb7CEBShqAQYnsdqpuXwsn7MfjJujQkcyeDMU3aqU6uvkQgpRHAWp6kWTE3gmM",
  "key11": "5yhLvPrMe6ZJPigTjPh16ySSmpxHShfzBnqrpRn4ZR2XESW6eGeGbEekbheBaBb4Nb2MDAiRsJgjumANtAQKfv1v",
  "key12": "3UaAGm6SkppVxwXSVtPP4DwaxWbfaiAHJV4STZAND2PayWNZQLYFZJ2DqGAUunE8X7s7i3FSfvG5vYhCtJWv7sCm",
  "key13": "39z3P8fcH7DZyiaVS9tghqAURVidpE2t99rom2vmM9g6Z2cxSLSaadUPY2W8nzNJjoYZsd5wzNkHfnxxJCyUh6y7",
  "key14": "57NpTUFf7s6wWAmkXnJcEVPJZ4viHzoPzyo6xXekwGGDSoiSLeogUaX8ztwuTQaHYABR5JNnM4VoLCtih2YLMvr2",
  "key15": "49zp7CZRCNLGui9o7Ct3e7UGMzrzEJ7GnwZL2uGCNgYXuhazsXTN31ypYnhgVk6CqjPKgzgssMeiwG6nAb6W4Ej5",
  "key16": "J56WWgBFg7TNUSngeC2xx1LWRA26Pnuz7D9QimRY5BpeoJy4EU6PKJMFMD8vmDs7bGvkPPWhL4a6a9Q2VP8Gb8t",
  "key17": "3F5aKbGR3d76mC816z7FG1mDCE8rerFNjbgqP6SFCEQNhKorXGnAJCu9tZLGKqvsDL4wpvUXfTVBHrCBPGcBNR5H",
  "key18": "FH4ryUoZG2YTNayn68NyDnT2qYMzqMrgaiwF41f8DU2HxfwZU4YuedX5SafAiknH1CP6jzBVCx1EYxA1fZVxBut",
  "key19": "5L5zhZjFjwo91iU1WayRAbcKphXHhwiEM8uok8wSzx2nd9youNdFbVahyZzLwhoj7AccMATY41VganDJ8eZhtJ2R",
  "key20": "4u7CAcwGscEWNM5jvvbpUA7344NxhMLhEzT9waX7y2RnPCj35sAYYstpEeTH2NwpjJ2nLoUK4tfLu1k2va6Jx87H",
  "key21": "BS8VgNVMTrLVe5o475GWi7MSuJQGheZWJLVrYU3SxGauRfxbDfPRbmSsEchErYfbhFvSrFD1gekFLbiXKCt1jku",
  "key22": "2SGLbYz9tWMzydA4F2qenaLYHckk3FGT8r5Z5CtJyzFYoYvgiCDvgFnmpTMNnHSjYEPaudgjHzp6e35rtJKTZ9C5",
  "key23": "FeA8khd1Ec3ixKuUyCLUJwVRP4e7gb5EnX41vBvVAEW4LFYLUAkJAmc8jUdzhHWNqqPXUspV9N5gFKBJSrFjbA7",
  "key24": "3AKP2ur6vpjVuokSngtiSKHm2dyAg3HLX5VF6Y9jJe71VkEwgHNxj7hXq5H9T8DRNav13UR8jQd8pLJKfBxc3XjD",
  "key25": "5F1jMgoDGXZ8Lg4s7vfX7EocBhr9sQ3uue1ihi1cGUUt9yGAKDtwLYg2L16a1a6jD2EaYQgn64s6dQRdiY6FJHy8",
  "key26": "5DRq5CAjY69ez5kMa9Sp7Pp6AU9wQMfHCKqcz4BctTpJA74RZpVdkPg2qQwPDwXfiJvHSMkqVYsrrt58rRjos1nF",
  "key27": "4YBABWVoRQxJMVpYRknhgKEotkD1ivYhtk9hGvP9ZCqsJQYe6adz8UQge6g8Uc27gT5UpGzN4sEv4Pie58VsJ9ye",
  "key28": "3M5KxDTN7MxwrFMxQCcKv3ZeVR3tjC2aXNc2SToeGoXe1WvyJSi2u5dEcUrKxHox4oq6NLWBr1Jk8PDfLqSYFpd4",
  "key29": "3u8mFqmMRtiaBr35GzQE9XMeQQ6ntHWkpQT2h335X53V6LzNP8mvmX5UnrcL42PNocrTZYzvj22M3fwBAdLj8AaL",
  "key30": "3gvwfKc5ZViP77nwbAConvxmiNyvRY6zmqvWbhMosTDLAWireunjtgWCVxAndaVXPdcaxjEYKjSdY1WUt88R55Bg",
  "key31": "4Q4TCrvv5n2uKVj7vVPyDSmB72epqPzKY7G5DFC5EDqb9uj5RCFtSW8Mwx7hNR6mpXJnhFx9zwszpfBEw6zMcEzb",
  "key32": "2h66tFB3eUGQdsqtNts4q2siB7qDMXnWyA7G7Vm48zcThPsephT3qmMETmocrAiVFrotAZ4e8Syid7kRmy7dUTTJ"
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
