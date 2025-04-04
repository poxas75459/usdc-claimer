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
    "42kqcfQA6EehaoANUncFdS734Yfn8T7aZLz2WZQxcUgVJxhq8zWkhmfuqBg2B6k68kwNyFMNjxQG8iAyZ2AYir9i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AEvBZ4W6vhaMDbpCUGmqcnhZKqw9yM8yKBq5c3yd8LEYKBYyA9LmR2yTHwKZvFjc7qKEAZQ2tnBvFpwpsV1LT5D",
  "key1": "2ztFt8pLwzz4rdhoGEjmFYdYYyu7CrUcBSSrnmk5AzLtKgNQ9EQnT28rsVsV4YA2i79RvJRuEzYNgkdUL9itCS3H",
  "key2": "31vQWGuMe6T2EUR5Hbr3uRK2wTTUwEf8PXdouTvfAhm1pc7fXyZwSsPa2CspQweWbtpyAvhVQt8fkNxccBkcztgm",
  "key3": "4TT5Xq45nUpgTSVLsRqVwWGeJoVE8ZPHbVpLceii5bhyzWfiiJnameQXHdwvo6Knud4CZg2dAusybDnjMNqbfRDG",
  "key4": "4p3fjT9yNzWMdpA2C7P6BnnqbJQMgV5cYH5u1WVzf8gJc279aUtVhMaaNggAJncKJqnkMxnJPxSpufEqZjGjhanb",
  "key5": "3asVrEsHdDtfhbQmc4osZKJHdwgVfPhufZ5gJTQGDxYdLLGF4BGwEZ2Cs2GxTXpnEeuSKckSfh33NeUMezVjj81h",
  "key6": "23u2AEkJsHxTiyamWbncgU59P6LMy6zQtzKPcikxyHVCkpFZQdqH19noHAZq9BtJAGqjvm8BMB1rQr1u7aLrYkRJ",
  "key7": "5PHhdX34DX8bUGqYu1B8jHj1qdbi6fAwHCZo4t5QhAj7zKXJmvrJgqHeNUQATdAxP2guA3k1FPg1ePafQFLaspc7",
  "key8": "3niaxkNAhWE9g3nobaBDk8hxLPsVvAV5JBPnGao1YafVFWUfE2cRWN3JTwxiAuWsLhLBrk6jc8xo4vJVadAnpkGW",
  "key9": "5wVbPUFzQ6zRXoaGhtaSHsEFbskp6QK9jwPt3NVLDG9tuAeihARQWrTtjr4as5qMWkWUsUxrSVLXM3EM9qamn8Pi",
  "key10": "51tKLKaHc7Ywy1hQcbWy3mVu5M6i69vqAfPUmbfz8zaP6XCkQQGmSkEt58vKCW9MZFeZTAQTMGHa8ybQSorwDvM3",
  "key11": "Bc5jdot1DDvMmU2193MYTRcyk6v4CeTbffzMEze8CYFCn9xz2obh2imUvvyKpoNCDod2Yw8pj6fPgY3wns7rLLm",
  "key12": "4DPGf26zoG5rQDtNfkDowxdv9sJEyp4qPzqdFAG9wGBRgtgkfR1DDVepniVYAP4uLFXEZVcqsv87mMjK37C4QBmk",
  "key13": "5BRCvdAcfBNARWKPDqSFYgs5gp2XmnG9abj7s3NAz9viXED9BWdSjJWw22M66PKZCSNUpXy9kJcfSa3YRHoJqpVF",
  "key14": "UHuKL27PoMdxEvWgcBcKNBRE6kKSeonL1ZCgHvmDt9hEWT1pRbwB29iSBPCTtpjMSVehT8hUnvgEuxds6tMBKZH",
  "key15": "K9xWkBHV1C49qY7GssuJexeaCQSG45z1GRRtBp78YbAz8GqeDGqaLnJzd96a3R1DVaQNqjpkrWnYAzHCxnDv7dB",
  "key16": "S149XygGc5EvpKzykeKtuogMdNVVb14UNRa3BnYcya7YNVvqzbQW7teXjeXmK63THfujgSGa71kBvGQEykE88uY",
  "key17": "4mPt5oiQYq5ssNoeQ1Wq9vcEBi34k8LBCz8NYXucxa9UGjHLJTySbxsVVo8Hins1YMRFAhy5qGwJhJzVz4qEPkxe",
  "key18": "5CWWrR4yFS2bPPf6iBroLiQa1P3MhPTJms8D9jyD4SQQAmGyyyReNixrcLqKjJNszK5xasL3MzxJcwsg4sfKdxof",
  "key19": "3PjvETTm9s165nYduHCenDBewEDqoh1rErZk8Q3EiDcZyWjhXKgiVq5RQERX16agxw9BGZazbfkfrHC4MJ7yrGsj",
  "key20": "4eSHWyvSiCWZ8UrmmLg8FYL4DtkMePN7PUowktXcdHuD9bVZ5TQhNdcpTFxEPV7HhC2oz23KrSWfYiSU1T49wvCE",
  "key21": "SDNdRCYBTBMjhtmUW1vGrvy7gpTegqEq8DWMy5AyTq6tbKhqf13vjjzXzRbWy64ghEjCN8tWDZwZbQVTtSmKdwQ",
  "key22": "4Ur1eQozut1bp1n1NCJduQQvndM93WXkdqhSxGTayeVyNuZtjwuoVsqWL3u6W2pW8XCqGPaa6ikabZSojnssquws",
  "key23": "5VNYneWDxzrKyqLc19518FSNbX2WAgrE6Dx69zTsrF8rPC3Wc9ScHR6NdHLAzb4Udm5oQVSM8hHNDK8wAgE7CZ5y",
  "key24": "3epSETBHmmi367ueQLNyDnpu2PHKCeudUcFcJJQ8DDH8GT9QcC27MQCa6LjMoNrjcteiuBMZ3dBhcbKawS5xVjE2",
  "key25": "5b2yMJE225irU8CX91gPAXpUFqtHqPSCn4tss2dRcHuTjArXa2CzsgUEuwThkkADZ3euTVRogQxJgVbr54mNc8BH",
  "key26": "3nQ2hm1pqn5Q8Tz5LoMqzx1QLchsE5evanDAqRFiRiHTYRX4j8n9rdvuDCmyZoUuY4p5Rojc6uPwLyw86nvyJZBk",
  "key27": "23MkSbQsha4YKCR8pzpQ3sNHUsocvQc6J2aJr5Nkg46SH1NqbdPxYjNbL2ovQxrfMFij2YXtAVcdhC8EgqLHjyLV",
  "key28": "5xSaSkJR3KFnEVJ2ypA1PD56J26Xgz5Fbwbzs66A6rMwEYjh7DKzEsskTbiSMNY3U27YqhoHyTek5pLCwVZrmzM4",
  "key29": "yDxhUpRJPUCGRHMdYVm1Vb9PUxknyhnDaC5fMf85ZYANCu6Stx3663J8MyzXJb9qxVRNxyURFNPjPG8PxQinCFm",
  "key30": "59vckYMV5zfZAsdSu8waZo3cJpfDa4jAWG2YvT21PjgiWQ7tDWJnkwZbroCjfaz7TJeDe38Md5W83JKYErtrtHEV",
  "key31": "N5SVVqvEKSsiRaqVVKYaXg6qUhwiEfYbcVJ9LbVJEmoThYdJ5Mdv9upYijbsaySfBaxh5iverk6b58jHw8btr9m",
  "key32": "rHSWh2GWFvXEjkmeBQNaKQq89cFrtJkSq4DhAbcKduan1VKDA1huB2N1uDLfXEgoy4bWwS3DuEnzwumJQCgEAxm",
  "key33": "2QxJh1Phh3vHKcWsJPuFwaMLEMw4exAokB2PxgLkBQFu3BkDS8EAhwm5FiXe4Z1FYz8h4DjEkrsT3E5B4wsPHmdD",
  "key34": "5U7yMA4n4SnSpnGa5ziGY2YhjjHDjFuXGXZZphWNpCtevcUwkJfbaQdc7jQ2yxJe4iiBGVWWTBwggt1h5hkjRyyW",
  "key35": "XxBF6SQiMoGtQ61Bs6RsGrwk7w9npNTPKxKyMnSho4vSX7TbPTKEFg6KbFxTiGVRpMnze1ojRwggV8xWpoh19gc",
  "key36": "5H4pCVj2CBb9GxybJdN5qvXARwHyrH8wdyCJr3XSg2cDSF6TfNHPHeeQC64AhLAj61Rxf9PkieRCXMz9PPFN1yZv"
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
