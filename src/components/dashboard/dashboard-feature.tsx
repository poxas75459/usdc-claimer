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
    "5NzsP5VA6EPEYJshrDp7eAMmxBgrXhabJn8rBwfFB8xczYnLn1nPupWm7FgRRymaXvpCVx5LhT5JDoYjTE9qKyvj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "252ahRgLCjoBBtDEGLFUgrnwF51zsLNjJouGxSqW1cFzAGYmipFbSavhFihbkVgJkG5ePtHwsaLcopVc3afquLAj",
  "key1": "59wDPWgJ273LznnqFPyMS1ZjYcpsUdffPWt88qKohq6Rg54F9L69HTWmETwancDSm6N2WKonjkzRNHZVxs2FntBe",
  "key2": "2mWoTTqyaSXBG3RukWSV9AVjrsLp2Y1pMcssUju5hAMjkdZBG6dPfXTxuJomtstNEMR5GJYrvTBLHZzkhFLA6sTF",
  "key3": "5vHkEX8u9TbWYBp7QT7ErifhkWrPjSgPmkfBzzTNVatHw77L2XHM2ECSSd6Jmx4sM73SdK9co2dE8ZDeBERJm7P7",
  "key4": "5N1F4JQS1HWpZbCYHYfZ1kjm3c3vVjE68t76FjXuTLz6K65oUEByuGGbDAa1ayLNB22h6DMY3z4A9c4DrB5Uiy53",
  "key5": "4HNGB6pJC32DkehpHrPSrFmtTXhaUQ8rG8h4PCTjAoGPmaktDojUZtBmjcCeTqnPYCdUAnwsGYAkLzWrxwNeNvi2",
  "key6": "2xLEygxVNfxEJ2Bx6hHVShGWmBTnX7bZgtoMMTn3XgusNssw4Su5v1ay6YHqNZmhs3PRLiBqUiFTkRkYZDhJo6Ft",
  "key7": "4zbxmNvRyHHyf5PtqcP9qAVZuxdX3KVsBBVAMcQnHGceMVdDSCeszHc6qqNHmPQctG63D7nVxcWiBRD9BxsqQDVh",
  "key8": "2FgrszQgC1G24gT3dK1ayC4BUofbrJzg6GiX6LwQy3zPJGn9MX4HeJ9v3gZvL8hEm322Wst9v5wkRAEpLRhw4rhf",
  "key9": "rdQ9oMBgAAe2Da688jH6y2vtGdQhKKyZuh1FxGXDE4MafwX27vu1xu8UhFgC4fSTPwvoDsgE8yMHFHU9j4b6wrT",
  "key10": "5pe2i8TtpYukVmvqKwBPvW5yZXcVRBfSgcx13LpDrSHrdeNw7rKF2FyDQ4WfsyxYJH2PegYdnQB54tErV4tH4wgA",
  "key11": "WFJTY9YY8aH3VWsz93es5N3wWtHhhoqs8m9wCX7vWosyR1hVxxqnZkxzfLiFM4ptKPFdcRQi5RNrmPqWAd8PVC3",
  "key12": "14Paev87Z6T6ty3UtBoqqW9CaQQhWv3g8viUcf3PzTZmvCHipjLcyA6Z54WHUDoERKS4dU3VHUXsumGEsqQdqYz",
  "key13": "44KEKbMTG5vrZxKSqV58YSBy7D5XDzn2HjQx6PXSMF1ixGZ8uZhZ4k2w7MAwoMwY3y97qrgrPPLA7vYh6uWxriRF",
  "key14": "66uZEUzgBntxJeLsGCskThyiNaPgd1FE7zuVfdbUNoyDR62ThnAXFLiNpr4o5MBKa3u7Q3vTu6eW8kzLJcPHryvA",
  "key15": "2WKVwRv7VPCN9vjpGeasZMJvG8AcaLDtse3XeHexPBATqBGTXJDARwpx6bDN5ENLSupdFoZQeAv3nqqAdyiStNYs",
  "key16": "2JkQzacTgTKQmVdnix1LVP5tLuvYkabrezuSixRcaKinQeCYuzXvXpqDv9Z2vz2dE5vx1DETdAXxVt8s23J6s5mS",
  "key17": "3S3HUhe2fJmPaXPoqRGQUDv87uaJ5oEWm8HgaQ4wrnvjZdQLs3eXXaKuzyeUCckhNRPufdMxpTbuouuaVAujCxeq",
  "key18": "21t7wEREgtu3w2AywuAFk9h5MeLJ2qiZe6hMijD8JtjzmiXMg38yzvFmz7QjSBcjqDic296a6NszhjsSvfgwPVCp",
  "key19": "2V7yLkNVoiExLHpV1nY4dRBRP14kFSeYdL8Qc1JvtP95NY276s7QH2xV8uj29BR6dZ5VdPQirbs9fLYsRccAyp9v",
  "key20": "X11ToGT5CAfBKGs7w2oX46Ue9BLRe3vX6iWvJn8G6QPtrNHMU4pBncoc8Aekqb3kdMmzytmSMnDhhfZK4tps8NZ",
  "key21": "51kucXRrfbyuzfxywq8Phrey8Sw5n9WbAsUn9VDntW7HgTdFhudmbsJ344PPHJm9wKJ2Givr2X4XxraoVRqqQ49N",
  "key22": "3YMx6oTk91aqQCr4LFxcEH2aSJJGbcQSWhizab9oGbrCg2JXYn7YpCYYxA2FuJAtBVSRqbKntPbrr2Tjy6FXo8Uy",
  "key23": "4BBGkCDfbJ74n6NsF3LgHyLTaRVgWQfrJhSHY68u7PBPgGEm3Y9vWNPn8Pu9KTXyU5YwBu6wAp1yteAxbR6kdCu5",
  "key24": "52TLSpZ1pxVLD1gzwGzaftBRjBJzHfDLK3PRjGnckBCoYc9VkR9ge3fMs8Pzc2MHQ4eZttrmhgD59or6ZUMGBAXZ",
  "key25": "3dvGhxYjRqLW1bxFSPkWM973m19cPftiKJnUX5vuvXpRnKBbnHKLXCsgVCgsCxaSGJwk91sLWg4rJNkjGnR3Qcph",
  "key26": "4vvqcuCg14qwBJqvbNxFwxgZ8BTidUmspW4FBGLWACA2zskhSLgjKXcy9uh33qbAErDSctP5h1qtTHeNfobZZsPK",
  "key27": "4Zs5Ldd9r5SRgQi5Pss2hVwGGh5dyectuYB2ZgBVJ89V2oMK1xZG7j7o2xhJXauH1n62z8ZH2Cpnk59d7JAyf5j5",
  "key28": "4HpqxVPF2giScmA1y5FeFQZD9zM6BJoSKDyyxroCpjGn94dBf7QTcAbstBGTjPP4KVkT7t1ZHRf7U2B9ZnKdwDza",
  "key29": "3shccg9mSEPAywJ6duyzzkgXyhSwFWWqTN9XDxgG8jNzL665twLoRyA2ftpA1mcmU1NXeark915k1wNXWEp3mwMx",
  "key30": "62u1EtNu2xXG2ohJaN3dMWLQgtajw4xToChDU2JEmd3es3A4wnjH5UUdxHsdXE12aY9Cc9QiLGUt2Nz596WR68ox",
  "key31": "gNeii79KurPu89wQ9We1dewY7XoiqETwgNY7SwG85GtexjXuehQpzPGBMKpfoBFDazSnD6EUKM9ETUvBSM3zS6h",
  "key32": "36DHp2fcbj6xQY3ZHaDNhinaSeGJLzxV1jhKCcDVwwhCzQ98fcm6Lbv4KbeYPUywMC5RU6JjrPCtahfkVhA5KLXU",
  "key33": "4LsRdgmyrrnxz3dEAXnDPyyMpfhmkS39A2MkS3pjpcNY4jiUGEJ42ebhDx97GwB7piyX4AfRaddgRhCvzywZLDu5",
  "key34": "4d9WRGrZUZBqBS4yJjrVrHwc5t9nWkyejrFHqvCoDigybnTM4C5Ex6CWmQECK6sSuzUp55Mhu9v1A8JKxSroW9U7",
  "key35": "4idsx8TUPRzoPLFYNXKR7ZkyvCLcSU9BL1eQXKgoE7J5heDfThkfA3bjzVdV83XpcSGKLXpf1mLTmYATz5MfuVFP"
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
