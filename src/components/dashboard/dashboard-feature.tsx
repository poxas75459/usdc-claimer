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
    "3qNFLyyk4k9WrGyQBccmrx5TynzBSBRs1PRNs4UTH2zcoeV2W7F64ABkEaFvYSZHPducoD9MsEdNfnfPG1SKXH7W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tuAykDLt6aCfuUTNKw6WagbXqPk8ymgfqGg23q2QCHtdcZYxCTnskqgvRrSrg82Uh4EFY3dbu5JK9CxezkN6MeG",
  "key1": "2ZqLTEahZzAFzVvqrbDUVhFW9DbWpbfQZW4aBN7RGdPVvk7uVYpzvLNjkzHmh6yXgWBz1usyMsJfjxe3jH9rQgB8",
  "key2": "5pS97LbxNybHtUyn77UDCRkaWBtA9AUVKTreAp46KYtjJD2TvxUqX4jGBBJx3GkrYLbLUuH19SyLnjZ2BaznJzkv",
  "key3": "BZaDsi52VeRadLk2BT3rrQxMPEkGhk4NjhF6aCzeZ2tcJvuWdTBv38PiKn73qBXgF1L1LAfySmqxW7VksiAQdBA",
  "key4": "5XcTwKcjZLb1sjQTKVyS71p6qaweZixzmupws6YM6Dq8osMTTooY3bVC3Hb5UELioneDSyabrSRr9TiLiwtCJgdm",
  "key5": "4rnPdSJp1Gy27Do5xJjHjg8fG2GzNsEwaNF5hQQjCVf9NT2zDuMVtcW3ESWVrQJiqrxCwogoZuQjNHsUdQ2coqRU",
  "key6": "iiEg63s8cnBojdLcksnZMQRKjbpGNQ5pv6oEzne9dxoQzGrw8e4ig2pN2mBxCPrqg8L7833RegrGWQ4LhpsinGi",
  "key7": "Dn3xtwK3rWSPWVF67YwtpcytwCSvgsbehGVCWEQkLGKQA2yYPciacB3L9CGh42gDzgmNXWoH44o9snNKjXseRAh",
  "key8": "jRXZQAnB7eArvVtUpbAZgGTAhG9dS1RN7qRScAT7xfUb6UsMHhDcMy1zYkRJmKVkmuEufesJESfUvawAuHJzBDZ",
  "key9": "3DSQTxYrmByrfACNhF9G4rpcembNjSdyQqNEqViG9bLfSTxNxxyFo1ePvgZT377ouot1A9jU5Q8DsWdxKc1huKG6",
  "key10": "1C7EhDPPMYANTSgsMnyNmxgX1P7AySWaHFveQYVqBojw2G7BQ3JWMcm9XJWT2ZqzSiriq6MVhKCtoFMoaT9juhX",
  "key11": "32LVa6ymJjVi293QuFyH69eJ9bDeV7U3WAqi96HAz1SejQ9GmcgHGnKoX1DzdJZRrtj1dPk6RgdkMbiRhNBtryJD",
  "key12": "bb1EPod5RnoZUnPP2WNdyhBoN2zM4KzfVdPRRJLgJpb89RABPyu3HJzuJtUpmhqdM2vBMDBnHnVYcTywT5Yq1WS",
  "key13": "VMLAjAyi1WJqXp69bURYVraGhf84QYmjYzSgPaYfxiZfaLYTt7e4Cbzyk2zWRQgg4f58hgnPWbVpVhYEor8iGFG",
  "key14": "2snAYwN1C8twiLCsNvYA3286eY83oQZGSTiCa7rmNPD4qjKwydxoAfwGaYb1HdokceygdFqdaNdUDFWMmrz3pb7j",
  "key15": "3NELf7ZVhN1z2M7zaWXPMq53rL7hnkBgEkt9FAraYUr7HUGzp8Rc64Y7CoFNkBfStPuqt9VJd35kNYM6JPU7c2rA",
  "key16": "3LBUJd6XHhwyJTQivHiwdLK9MMgJ4JFQt5kzbZok4o3MBFmCVdiMvdZXG2bmg4oU9o3bg97iHtgdhotHnb2Gkxy5",
  "key17": "47GNhxsL2mQVHyv2igHkWQ9BxMKEkPxz9u4DwdiozTGzQk2KsXhptT5eikCHdGYtAZaQCeVDKnFQW8mfu2AVDW4T",
  "key18": "5RZJLQyojYfLgubCyJB2aMBghM5gVsFXniZhqMmjMVU3ywZrQDVNAWbq9VG42dofzbZJ58zqpM4wiLuqBSHXX5iy",
  "key19": "34p4UzhzYkbe4MSfrvnsjntgXwV9j8xE5eYpc6Ef8dwzN8gwtnEDXX8VFdz1MNkAzdp7DTbeqWtj6Wf2u7ypu7yi",
  "key20": "46znuUsPCTRdVVvbLe3orKpUQ6qQ8Px6vnJACuMwaWPPbeuuL75kZbfvhqnQ49kcoDGKKbRWxyi9BV9R6BARoLr6",
  "key21": "2ZheEtvrTmdtcdJN178Wnhm9UJv3HSJS8BLLytJ6LSkSdYyLCWJ2FbksrdDS7dxQDdq3hZ6BWUJBJ7tNS3VgxFTo",
  "key22": "23Lz3N9ZLJaWxpdmjabf9A6x2CTdvfEc5ENEELo5FTR6TYiCmAd5H5ZcR5QGi5ze3rc3PxmoLDLEmSn9wYgssjVB",
  "key23": "5Q66C6ipsawJPdg8sLQ4oqE2ZS9iUCxZA7VfAheqvpTf8HA1rZC3eWxTLmqbtdRFuBpH9cGVPAshWMtpuRAzruMD",
  "key24": "43gFjNgRAtLJtBhS8mxEopo8LpepDCDjkA8KjiCaaDNSxLPwrjU4UiLVdQnfuCPHc6a3r9wDyKpXd2o52xakjGKC",
  "key25": "3hBp5myMDzxK3CKpE5FrLbyYejTUJpppQGDc8iKfQ4RSTvyqi9uTZfLE9VrPutmwZgnke9RsucgHb4QWLWDaYHob",
  "key26": "2zdtn8skMG7kKMjwBdjYLjxiENx8iciFTWimQyRRmxRKUttcVojRDhnjWDdm8jgsf6kMxVuf3r8tqLovEUhSfB98",
  "key27": "5w4fJGDFRJbyyE5sPLXk7jg1NzWxh1zdUe8K7neinErX8d4Dt98ZDVpmESp4jBNm2zbWDAnbZZnFj6j4FhGSDYTU",
  "key28": "DAq8uGhtV8GtAMRBikVUSXUpzRUibEZYGkhGHDbF4MwFvkQ5PT3N5YnVAA4eerXkWo4fxbLV17SqqZnoSoupuYr",
  "key29": "4ZRdWxoiFL4j9wSHfqRpCuKuAc1zSDxpY22pbwt9YDcLGkyE9sMZq2DoE2ys1iJQUiTsJhQmubtztssEqtRcV9y2",
  "key30": "49ALP1M8n3R8WPyitAs45bMLLNcxLAuv7xWJuSJfhTmDNftzMA1FSZhFrF5zF5N8AD7LAbtr2nHzRkZyHW8rFLaG",
  "key31": "3uK41QJ51JT2nuqvm3e8h8AxDJ5ZGzedMih6DBSDGCnMUHkJ477CZMeAqaasW5C49ExG6HGSmDYxKfKeYXYeLpzm",
  "key32": "8Zwr4Y4HWGafYEcjwtZJXyqP1JTWkkyMt576WyLVxg5atWVH4RAfhmrVjeRKcpUztrvHpENrbTyiYcs1rfw6VTK",
  "key33": "3zdWvSB3qFem2iU8vUEJfUxxTVJJ9N1cy2Qgo49bu6eYdp6eLRDEnNHDC81jpSAauXheS3etsWuooviVBgkrnU8B"
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
