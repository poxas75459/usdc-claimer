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
    "5Kaw1gkygLPW4aMuFAGphwn1vqJgRxyNzNHZPj6W8EAueuD4ByxRT7fyjqkpPwgGMWv8L7JWhkzKrxLMArWcGnyK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VetBvmj3CnER9cPFxqS76GpyNHaZbSJS8UpUrp7jaJMKwrcDj3R82ZaNNWQQtS4GAaBnYVuMF9s9odGvaPvE9VF",
  "key1": "4Lv4vsv2XEFJwpykrycuTJz4YdTmwKUk2ZsE2cJwC5DZd8tVfVQrr7gyZBhJbUcv18mRaZ3EcJnv31kFawocUika",
  "key2": "63SdAmKHRBHwa8fXvSpxhxCVSfbw4UGkvFMzWC4HKyYC7CDEWtMohUAGzcnXGNLjx3jouddxRgbsqUcBuob18Bt3",
  "key3": "3PLCaUY5E5SKTaY1RnFfoTudhRgLT9VHX1sy1otKVFeEhSTUbHwCQQifhXUNAtT7Dex4hPQyp1EkQSUJBLWqF1MQ",
  "key4": "4yeyEgwAuux5N9NHoi6ZsL46w77kbNRZ6tye8hE1Xxco7LVXHA1gcgnsQSpMBgVkyH3L2gHKW5djQaG24RACAyYB",
  "key5": "4YtoZmw8iV3aghCLBXUoDUP2g419NhnfkguJucLjZEM5SzN7TcZjy3e8RJHUomAMNM8YzEf1g8PtSGCFYb2S6akd",
  "key6": "3abbNQGh8itCSUQZkUoKPBNmSvn6eYZqNXHjU9mroozbKbBP7toPq8sFtL6xrSBoEXPhJboPbL6b3ZxyicQM2UWV",
  "key7": "518kscqwCMpE5isRbtJfvqGFic8D2EDxZbjxHFdDpBHGcQk2E5G2mdE4K4SuDcecXNmqZbiZgy7bF9Mk3Lq56Xje",
  "key8": "2SnvYZCgWS5AFN5N85YPuWDynXcnqRejH7fAc3DXiPAHF7y3tgDLuqwer4Es5EAqgto6VuZxzFFDxS25mRAmW29G",
  "key9": "2nH6433BwsiF6hnSwSYxA9FwxmDzHMZQSdU4qqJk5joy8tDSmpoP1wU3bGGjGEceDbizd9aHEvCxGerQwxthzuct",
  "key10": "m8Ne13nKe7SZPdNJigpzP6Fmb4QXzjDWbcttVi1J16iz7aE3sCR56ivUeDeVSX2GA8eCP4JNiycXyFrx9vvgzji",
  "key11": "3cPHEtzrCrNRgYfc6mjJkFzaTXNF6VAs8EnsE92RvymWEW52i65HSrE3pfVpVw97hzg7yKenhpRUm3QPdU9tKncy",
  "key12": "4ffgXoRjeeAE8eN4XjDphQAfnaG1UGv1PNgWr418JUrgK3RXdcSBs9pQd8dogngCw9vovK9UGb12aTm8tE6g9vF2",
  "key13": "4GCupUybxGd8SYxwgzt7Sd4e9VoQGyLm5kFkPGxXUzAHjT2HZLeAoQ2Mb47r1Z2iWhQtX5bik9sqND6gy5EaVPWq",
  "key14": "331dzpoyh4M7xMkRpci4HXr9MMfxfKvwTCe3qTWKCvHfL5KuhoyqecTeanRwm34fP8nHFCQ9HnosNQEW3pAwvytQ",
  "key15": "3DqTSCoFYxK5hKXAhUZmXbXDhnAHnmCgXzjEjRWJ9iGTtyHAtyF7St3WzWNj19TwwDXhPatMiUpQa6eSq17yFNuY",
  "key16": "3xdiRQSEHRJzrdmcF2L1pJvsVMr4zcJaDpWvgvwf5xni5qYXQbzirwyuH3pwEJjKWwpiEtabcmemUfEHcs81Peec",
  "key17": "4daB6YiBYgXy6ddB9f5WMfxPTUkLK3jprWHqtaYgi97z1V2AjeNDGcnjTGLbh9bK11NcVGmkmwpmFhh9ZqrYW9NR",
  "key18": "2jvkqW5QjM4qME6Re1n6KMg5dMpzADSULAC6w1taW6bdUFQ583ypQnqReAgTpyXiXAs2ADwom7Jnwaj5RqGZbMnC",
  "key19": "4YMauCz3xxySWMSDAcVFpsW8T4xTUWZKjTF946PnAKuyvZCSTfBKtpeqTX7QXzkRXLhSkC2zMUN3Fgqv38w7Kk3R",
  "key20": "46HbeRgWu6xkGWvGbkf6uRQTsbeWQKPamYQ1VkGZLENT55Vnmoiaar6GscFovqc7h1cgDTjrprBpP7Q3CLa12ytS",
  "key21": "64nwtRPv66CueLvxGf45ykrfa299HfPc2ihCn4oqEJTwLKE86YZBhkjLkmGh5v9z1RzSmMv2GjmKLWsHBDoFGFPL",
  "key22": "53PdE456r1j9NPSU85MyikWQSBzDAY5zBFF4sRfnXYak7qEHwEPBKN3XqNLAiPbV866iZanCN9BsvFpJDTvWKYwL",
  "key23": "2jyVS82DmKNfj8WGTEDzCgENnotwUi9uzktyEQH7Nzzdq8GDK3kEpejcvT1Ey87Nfr1d7tvTmrbZmzk6Wz6PrhPn",
  "key24": "4bJ2dRCFRtSJ1ydMwFET9Y2p3xyxT3Pr2tF6bnebnt8vzCQfxU1xaJn9Gf96pjFMriYDpWGkqoVY44RfMFXvaMko",
  "key25": "3p4rn9LCGSxcy21qDSu1k1XksaEPcYyveAXfsjMF1pif8q4MLXAzDBHSBSGJjDh7t7h9iTy6msgTFipcMj4NP1rn",
  "key26": "3wPtR5ABj6ei7UfcMoXbG3XUJVMV2xFyQxa7XKDq4o7XCaLWdiCK6Pbg2UeHyATRHFXAWiB77AJ6hrzrkH8escqU",
  "key27": "4XXnP4Vuqc4sBCKapfHmvX1PiJKVwL58Ra5MwmxwLDHDxTyDkRRGKijUf9WWPtssu5z3sbUj418suKH4DzLkPo8g",
  "key28": "WCorC5kTXqCRWqKJWDHk4AyTV1qUCfXkkhnubFZttmxTko5wpjtMFWJ5W4ttaGi2GduLwPG7gqHqy1VhzYiQfG6",
  "key29": "5H9E1nQYmSEkFtaLpkjVenuUsBniskwo7uNtkWGzkoEJzY7LNum7fdwDiMmMwfLwrZqEKiCFJqwUr3SaAi4io2Jc",
  "key30": "UebJMkawAkBGRVDbnJo4kmn4jj7dzt1aqDFPL2TfDroTe62YJwuNVGskHmJ4f1pfXV6BgU5WY5EHQzvbBQvvVy1",
  "key31": "5sTtfRHyENGwfPEbyWJXUJ4a4MfbTaR52w4kMBVs7xEG2DMWkP11zZYbxaay5PwYPGA37oZgNPSCJeNkavWMN1gq",
  "key32": "2s1ffcqszSHWxryUsDymXKtoRNR5Ww3XvYepCwZAoF2snHD5nGogkY2vUF8XKDr1cTdBrGoKLeU8TFpvLqHJgEd2",
  "key33": "t4M9nQqfLhwd7ZRYor3kZrHjn7h9BGXkCC6mZmzcg3yCJX4CtLGehEUybvRXCKtXP6QbNfsQD9Z5G7iaNRPkwpf",
  "key34": "414n8ABGu8XNPWxWawS6nzxR8vtwDLgSyPC15mo1Q7wr5jeTfbsrQWrjxembDswF4FcBRySFU6xEjDTz2GQCCZ4Q",
  "key35": "5LCz5RrYQpesbuM3mcSGXrjP864NcYbpatU4ZpUL5WH6uoPDwYJoUUNxERkZ41qK3pgrzaDVyjhwJJajd3UL8vG5",
  "key36": "2UxVQXwRaSJ9aR13zBZ8BEZBsGn1Xmnnvfye3NJGF9ekAvLCGPkVqoD4FYMGunAfyCVuDFqcbxCrSqVuWMYgxGf2"
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
