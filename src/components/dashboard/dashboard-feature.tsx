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
    "4jyDnWBCFKu8nyQxgHhSgXx8reNmSFWYp3EpaKtCpXhj2WcbUBeFhv46Kuw5GaSmqYjG7NQWaEDGyc8hSP2EaGNL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37m3KSEJgj9ZTWSQrdb4up3ni5T2hBgqbJi5TCodeyLcuuZvCR5Amd98MUkyrQR7KpKQ9QM3kvUf7pgKEWK6zJdK",
  "key1": "2ypzP1vkVum12cqiY422WmtEemHnZphXwucWrgQ3yMbae6kqcVhEQ4BtR96uWz8jjLndSN54iGNy9gUvcJ7K7NqW",
  "key2": "2VXg12A6kSuwt1ZpoxgNTtmiC7QuAwEMnnsuWzRovigKXJYmCu1VNjvS9wy7Edisr3PtsDpyjutHQHBGZAKNg7nc",
  "key3": "483YwXmenrDcP9osebRctGi8Xd3zuHYDUcWYQRVmfCipavgdpbcfGeEjkRomCjBf4tSrDVfNNcCn599hqwHWNR5C",
  "key4": "5KzJQktHNd4mGX3PUwTYbg4FgVPCZzLBUQhtU82xRUk1puTZGMFA4TT8EQ5ooEqMrhC1qYPVSz2geaCPFse81tKN",
  "key5": "5fXuyWwbSwtU1XbK3PapMDTpoavGo7sCA743DEddcgJzVs2G6ZzvdQjZiuYHjMm9kM6HPTHm3vk3UKoxnsKa7V1J",
  "key6": "4QjTkcYuSna3tAPg6mSvyA7G2uxgvrNJrzGy6DGfwPnauNV6UbkJN6H4TKHspS9EbTo2gUpDbHwrAwZYBtTF8UGt",
  "key7": "2NPhYqwh7Sw3VF1A12CMTCTmEoZXqj7AqaTHdhNoihYsUyguwCowgkudK2Cyopt2GvkoBPJo4P4HCydHNDHpuTFz",
  "key8": "jYEXaHxHFiGbJdaraMxUp1DkHq1CuETNPx2XcZBKu2fyELTbmYXDfAZebzt23aV8Eyhp1cgtdJE1dYfTsvaMx9g",
  "key9": "2dw8cVUxjgpwdbrj7fFPNMKxzETGMYzKXRojY4Ns8gQaxGuPAJMaHHYXuQQ5JpbR4eyyEZCV16mjyypcMbiNoKY6",
  "key10": "4mhtjt4ZGnSBF9xo8gf3MqTzHgyUGdBaJjGgrMMpnHbi4JF5mQZZjADPM9LSGaXs86W9JYR5Qk7ER6Y9s3vg8jYr",
  "key11": "5s7tehAWkaHSaZNq6Ru1tDJk7oHQiFkksc2tWrbZ5qrMNMMLpDmARaZJx2SS7EacsQrZmRCYVvWY8m7LgcjZ1Yzb",
  "key12": "5BfUPFgvcGzxJ9MMu9BGUMLQ75YE7wybSphgb4qi8QPoAcJuGrSwzRob4dZ7kaXzrqDtA4y5DuyTfZXCvQLTTXLe",
  "key13": "5wLDWLMoWFbSQ3pdZBicbb8Wfg423ZcHmAPpwjCUMNEG8LCCbe8EMTbeikP2KpiohHxTdpZWrcin17gY6wTw4Dts",
  "key14": "4gXULVeBQmsvdruijzDntoEwT9WXz7hJZ3wqZRvdhZEASykmix4ABz649bu7HwqHiq7XvWpCtNrhiAiDBJyrbWV4",
  "key15": "24Atc5hSgS25D3wW85PAx8sZgtm7oxoexbsqX3ZG7f158wnGNJRngD8qFVbJ9GSu6ghfF2KmqviC8q7qGE8qtkEB",
  "key16": "2JdBwuh5Z2mvZjN2VcFvK6mH28YHtw5JPK9mnH9YdxC61szwbJszU6Jn8pb1NY8xzZj8BCSBXXU4N8Atd5AqWW6U",
  "key17": "34LEeCjFNVwa3XQki8BqMaqHkk4V5Yh7JtCRB3Yk6gd16dxeq8n1VTEiSh9T3q4JS1FvarqSygj4Z9bMfRDgwCHq",
  "key18": "3t5B4GVaL3Tvb2LT8XMhRVimtQUYtbzjJmd17aTpyLdHUkdqpp1eWKo1KUBtwgsxavaHyeFRGGsMH8NrnaSQ29UV",
  "key19": "ekkEVBkEMqGDxTcDcgyiStRg86f2hm5hQk7X2seeBP6PqXTggAUYq9ErxCtKwhKWx8CZ8Xsez8cmBPFiDrkNC7P",
  "key20": "4TCTmBegeAHRV4PykMhGDndhpQC21gWBzZbbU9AYqihEZSyCPh9U98TXdD77ac8NXzp342CDARjLFhkQaDrjGLJD",
  "key21": "5riB7BgHmnYkWeFTAciM6PMnPYSF85UeBCWPuo6Gru5mXA9QD9JB9RyvxNcTkjtQBK9xBmnbcqtgp15EVB2eAC6f",
  "key22": "4FZwbNsn3Uxb6tUkqUBdYQ2RYL2urKa9T7n4zgt6cjLFLrqn9eG8jDo5L2Xwi9UeSr2PTZFXzm5e8WNxQuQAeu37",
  "key23": "4cRHHnhtfRFkPKbDunyqhfmip8UwBJeJLctsCnP5g1mcDeEuyrnMFgwVkN5RVVhsWNe28iNr8QkvAqQejWvHt2Y3",
  "key24": "31z7SbEHaraivjw8ox8zyHeRVsyCntFgCZ7D6iCpZDHMxy7kSc4vVTjRtWJpwCQ8ptbV93JTGRqThwgUqMp9EdRw",
  "key25": "qgZ55meS2DBGozBXZgv1L3xgyxQmUmXQyiK8hpzgyTNBF3mQpMPL6z6pB1DrdRTi7qJrspdWfbqQcbmWtTuUozz",
  "key26": "4iybeXzGf3Sm5spDVUvhR7q3ZwGvgzstmhz6MZzhH5VLbvh5bH3t6s7HNGWP5vdMGGCboYomaw6gM4LbkjXWGwMX",
  "key27": "4WzzwpmRCt66uHUfHeNSA8D3gP7gSZcDPx3RUVVD8AsVk6vNt1PD1PJTWvD83doeNgEozcAvq9gtkcsdVpbtctHs",
  "key28": "5wysVjwYnc5qsJenq1kiHCw69kc4qeqPTqY66CJucLUeoRfwDbnY6z9G28qDBLr7a8EycEkmqi1c6CJ7KKbQqaR6"
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
