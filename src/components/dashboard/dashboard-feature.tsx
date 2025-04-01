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
    "4jjcEjLoS5rLgnGtPM31WcTm9pdFqkfV6dJwYaZTjdVNxv4AEcgo1xL7iaBnu1h3jut1c9i2DpxvWGhaHg5u23Ds"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f7aTPZzuaLpQsT9ysxaD7g9quUp9QpQ26DZ5yifTQAoZUy5wEy9rqpEVU8XzeqENPnmtKMekwRSv2eTpoE9t4Cn",
  "key1": "61HVo33VrcmzrdcsFdu4DKcZSa6dE1jN9ZarJoT8ciMu1QDpGN7Vj484yteKYwfup3SzmTsnUmF1XJbzK35EFRFi",
  "key2": "4zCFQ19f7FR3kEFq9cXpEKAEmsdQLysiCxnHu4iPFuAfepd1GUXMQNicVCffKCymWmgxzw7Xv3zN87k55skmfhEx",
  "key3": "5nfkZcnRSaiHz3L48gABtmCwP5XBgB9M4hQoF7JDRkUCQo4MyiF52Dv1n1bwFNztF9t5SLrJ2hEgZ8VrQ5GzNhfv",
  "key4": "2rtRhsF13t7PsrpzXnhvR1fWZBnih83Yh1iDheZbLed2dqUisaiYYDgLSAik5w97vWNJUxqt24DxQkUk4tH37E4D",
  "key5": "2az9HfRPWWKMDVobdhd2S8iTkUWTrdpSSmycpURXiMcH3NMMniKHMv1gTD9AvU6uYEJmvCpNJynaBEQgqL9nf1pV",
  "key6": "2JjTBKHcgDrQPg5raQqKmTvvehockH9gmqLJJY8iY8Dhhg12Lg2VtiaAwgvLniUdxRay5yG6SEUj2rVf7vLbrpLY",
  "key7": "EiWCQB8qQdhyyv13VU1Luv7Jo95TUakercwFHRpqJUfaxPdg4FsDVg43aqHYLvSTyG3MwteSrzrmFbxTTG31aWd",
  "key8": "3sUkPGeTVxkL6yXVZHaFE5zGQ6p5PwJuLGkeJWK3LeFdrfCqdy4acj96zai5wH1u7YGSBPEuTUBwJpqvvxWNDHwK",
  "key9": "3Ec89zqMYsabnA7i4R9dXBTSdrHeW84NkJMrxCWUWUM31enrAFKTAdwyrQwZQg4wT2kka8yNi57JcfheA1fR4NpM",
  "key10": "43bEYfLzTiTLBrVtZqqASQT4nfu1iffhn8rUDsFXWtWpvmS78RBauSo4Hkh8aUQJ39YZ4Pp1XjHPoK5k7K8i7iP3",
  "key11": "3ewgv5yPs8VHPc7QDMzySzCxukvtVEEoXZHvFg9kXvbH2HZCd4X6HJ3w1GWDWvT37nRoe5eRocnym6dmhVXZbFzs",
  "key12": "4HzFEfeqxbRw4L15oL3BRuFAXKJiCM6cBkFWxKrKfzGHwX476b8xY9SFCxq7s6odon7krMjePZbVneaiaMETk3hM",
  "key13": "2jsj5o3neRZ57PVMD5n2J35prSHNSDGduWcpUzm8J5M5mEpMMx1bDCJCsK2Spgd18Wg46Znp8fPVkJenZjFmFkuQ",
  "key14": "3UKXDzuPfjXfcNqJn2iBX6zuEHPwQZ25uqZoEADZqNST3bac7y6B5ABfJKp15YuBM1CGKVCA7UmyHiMbNeYTyo4d",
  "key15": "5iRU1gSHaGr6FqzqWXNNenqCDPEoYSjqoKefuSaVDE5TeNXVbRDn1auwPJTY25QXDaRmSnxbo8notgqcfVNxYu6K",
  "key16": "4syjykaZkrKGo2R3PAWW8J9PyZPmZQpbuzsynio1bBvhYVhQsu6vx9szNuUFLTs9tV3MFjq6MMsidXtDTNNyu94y",
  "key17": "5JV7KrbXzCKaKmH2SpQzt3PaN1WVaKHANfexkFka9WCjXTeK7br7rfzvh9TnLyeJDprxTf9xzcPp7UWgaLjwTNF4",
  "key18": "3Gqyd9DQc3c6CnE6inmJMaiicUNZS5DPhWoxgnkse9FwRMqeEC4wGCScgmAhXz63gjcULdgP9bvdccQitJ6Buo1G",
  "key19": "5SVywkmgbUWFMLC7ms3Zo7QfBnNEDTGXJCiuZmb7CyDk4NbnLE3szHLQAawSM3YVcBixafvuNrkvxk5cK64daqfa",
  "key20": "2J8KckaVZXfP8hN5JDfNKXUNS1VNrzWgfBobcrYz8tH4jBxXLP1BCKjbx7HaNMaQcwVQsjboyuiN8DDxRaUApKqK",
  "key21": "Bpt9LY628WU8Une1wbG39XzfznuYeTZSg4mwtcBrHhQugg7WdtwsY3uRqAaZs3jaWFA1k4h6K2cFRsQz2ZDDgKs",
  "key22": "4qm1W82Ch9qJGirudkNiqfNsmMkH9vjQhAToHtBS6mEyaTyy3WHspoEu5saXhkYqouHrziydRuituGMBrhAUZ7sM",
  "key23": "3FMFJDZiiJzU2XyjAFRjVk99qwVQihEyavPLuEk1wSSjxPRh3ccxQa67J5sj6wiwWPXKZ82GeTCTfqruCH2DvrND",
  "key24": "4WXCC5XySXm66RsfX45dg9DyiiZcfPPgWFC4M3xMUMYDe4ypLmnXbW2AcMJJyHuBsQp6s2Mo1pucSmw84BY1JCH8",
  "key25": "2U88a6ffsF7CqjngeXTTUK8DuRogP6epwHEhA7VzZqFk8psKBpcdJRECxGoim9NwTmevQv1eHmKBUnBPa7GPhq6h",
  "key26": "5HMhVs4tEz8AFnvnji3aFpmnKWH872MUotdbWjhdME38KHyuuJzDimzfGMC3Z3BUASZDiTWw9wg9WrwA28xvBJYm"
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
