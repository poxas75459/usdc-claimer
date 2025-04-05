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
    "2Qq4L5a2mRNBBkDHoHWS5wBgmEQjPmsPPNPgZWh5KBk2NuuuBJA3HRcqpBtS8Dm364o9kkP26njJDj7Po37BdLZQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56CDCN7Mu8mxL9EELVmAVbvahTtgvfkomPZTDPdvkyYUArmgP84YxHWhPxHzdEgNHWRwX7VoNGqEWwgh2XfWdsFr",
  "key1": "2eNXiDsxxSjU61M2VuAzaMyarVBo3HBUMQLF7zSA6vv6ZL2EuaZhxTMMK5hs6cJY3EKhGZPgGeSyVEvpgSDYJjd5",
  "key2": "9j2VTZdejdyK43mKDoB4T5yDih4jYpqDyA5qiycwzU4JAy425KwF6oEHK6RGsDGXXCXKzg45HJj3mDkss9pHYQ1",
  "key3": "3ZuvHVrdEJCAqVS35UNe3WGUBeYBQr2ZBjx33nuLFoM2PfV9HTxsXGvNcmjorMQ6xjCLQXCQR1FJS64w51hrdQmf",
  "key4": "4WKiY3eVdZ9zQY538bTAEpbu96px6AQF2iiwSAU1d9zsATbTeCyjwtu6TrgWcthBkXEHjvsruYtknyoEW7GYFeYA",
  "key5": "2JHj6cQGsdpwPWJkDw4azrTq58rSEBaY5WVLdJrbT83MkQqNXR7hTRt4CEEb4Z7zjH585C6xpUtsgypA9FQSAGRX",
  "key6": "3m1WE3GjYL3jTL8fB6p6QrbYzbhcNiWEV5k3wyh1Rh9qtQ3ZiEboRn43GNJgYobupewG8mFFpSwSf9LLJnSQVTSk",
  "key7": "4cyHiUDmBFpypv49kVCpA8CV7C3HBhLQ5GQa1v69k8CZrLfeeXX8Nr2FxNjoejo9mAxiLcJThM2QAuhFSPXEoC66",
  "key8": "3RGRi48xu5eNRkPvTAbZSaYPv9k7Hf5mDYp9ELP7mFuuJ8tqK9XKHbFD7J2fgy9s9VfnnbtmbkXz5qe9yQQNpSx7",
  "key9": "217nsT6h9E1ysVJ5pex7pwb2eV3VsRUSF6mAp1vC1VqMMzXecDQgHCsEn1ZWMAsTYMQ61FPhaTTQEfo1fgec73TR",
  "key10": "3rVYcW2oonn6MD4huRfZoM6pebXAUqSZPrDjbESXzxhEGJ5W4hKQdUaBikRud3B4RxagVpXhon9RVQT1Z6XeY3E4",
  "key11": "5ZViDZiWBMcmZaysPjpDRpUHx82cjWiqoyWsXNXvNzcKsKW7p4R2NQLzWRGfgu1Gggmh5ggP5oRQtPNmNLd76SJA",
  "key12": "3q85acbRzmEMuFtrudrtYXgEjfkG6DyDrBM6QDAcVhAx1cwBiNN3EgUSzxZoEXgRSTNWdKi4BuxrdSdn4B3nGPaa",
  "key13": "2o7pdQRAdziXv2w9NQJNyfqNzm8ovHszZYLGMNoL9jNPkrVmjrGsE5vdXbd1hkUMB6wyeyowjnt9dwPgUQf1xN4A",
  "key14": "2EWALa1gBDHShhwLMKWbmaqwo3P4NbkBauf1mV64u92fvgSyQKj9MMsNWx2ZEMSiAJGWj837umkYczgve54Wu7Un",
  "key15": "WxxFtHDXLSWnP1nq6gHNCKaZwMbRnsLXhhfzttzxz4CzKiSuV1V1jgdEutxYC1ZWiFWSXPVoy7YAtB8PaZnDihm",
  "key16": "5AMF2AteSXv9vZjfUyYPjkN5FpF6cRiE3epLycEPcD48m44nHKumbYwtS8YgwV9H7fWuNC1X6HNecunc6QALXxi4",
  "key17": "4Yy46SyS3Y4dHdBWqvEo6EdD4FvYEhwT1MJe7ap2UmzfKJ2VvLxonVSmDSdE81sAQyq4DHffTeWivTpYcgTCTiaJ",
  "key18": "3UmaRKMTC9a9TyPe11tE8zVFC4eGimc9f1wokeTFBNbfWU9PvUTw54d4gZXvreMbp1RtcjEZppqVCn5N3YtwyhZh",
  "key19": "65mz37bin9bzeo2vjEoCQxsTsS9zpjRaL88DrBJzUm9LCChGzB9hQMjVwMV5mZGh8WHR8Zy9fuPMc4SX93ZsPTAz",
  "key20": "4TnW82EpoK8cTtZZvYFHdfgjChAd3uSu91bEAg8JAqLymQH3wNe1sPHj2j1vxwxpcNZKUmpYs8KUktas5Bs3WViL",
  "key21": "48Vkh62Jr2aEZw6xsRDJzCmHkeqq9TYhj6FwZn5fQp4AbXj5Qhhkb5X128ssFo87muokKVJZK8T8fyotfkieGzEo",
  "key22": "yuPfTdKW32Jd4YjGxkzXL1BkLSv38QN49HhNnrHxsbeYEgfZee1Q1Aa3SkPbAUdtshdYfuraJVBeFMv8eeFXftv",
  "key23": "5DcopwFqMWcW9XT9spafBhfPzs4muF5PSGBgcyz2GmruPaJn3jT5dVLmzwi9FdUAfUPg5z2VGJJDtcJDyJQQpC15",
  "key24": "42Yc9UPY3bQYDdP6PusUxPfxWmRNoeMqZ2Kt7VqaPzhgMkVB5gRsqkbc9fp7W7k76cZYLhG5J4ucD8PoGffAfFG2",
  "key25": "3HCYDZhSu83fXsVVT6rEZPDFhDX1pRNEXthLtg4BCWmJHgGWgNu8PxZopRThEAXqbgz3qt1fgDU2mhoYn8tdtccT",
  "key26": "3Uf7DtnhV6MJNxhMPbhoSDQ9BgMbuanbMT7uNL5gStUwmmnfJ3GaJs8K9RKYaX3sZs3fZhatejfZKdFqDDLpRZif",
  "key27": "5fe9hCfFUfGyM8MXAbFkaiYRfmapg7aoLrKYEGDh3mWxKfkiFwE897upYqg7jLoqLpaMAWZD9qM1fbPNxtjGt3i2",
  "key28": "ShtaVU9d2rqgofMrUE8XUXGitsh9JwyhFcS3nNWzxffHQjPTEJZR6byXP9WjZWLtD8BXX9efbpTaEMsBwhruQg6",
  "key29": "PBzgRycmMvcw3pjxUxqwdCNKq31hSqYjRSGmygqsWHeS6kXGdQ39Cxu335kVKt8NDbFSgsiTjaxWFDaiwHQBUYT",
  "key30": "3fbFYSqo4byFdmHzViV12ipGkwNisL75jj9F6EUSMLDEJhsrKuR7oooMRMXD6WdQ9QEGgSjMy1P8rZmESEELh7vf",
  "key31": "4c4r83Rhgz4NMPbM8NrSV7mhV6KGdSHL3edcKrt2ChzyFDKcAkQNxf8WvjRMdWF28tuJrbUAFQAm2Bhw835yEtgu",
  "key32": "Sk3eAmuFTgb8YoyczLWNYLvMf4sVgDqF8pZ5GS8Y5yFL66hzg6mnggLsa9qzzRbRYcSH8f7JESVGebsZWSnZepZ"
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
