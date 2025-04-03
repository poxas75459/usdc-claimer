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
    "5BkwEjiXh3kpjiCsFznaHgnksq2Hi5b1zyS97UVX54JaT9vSVttgT3c8xj4UGAg1jwTD7966s2S7zkQ47f9aTLSW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59ovue418jYNDFuXDMD9WrSNAvk7xcCGHjGAJbEm7xMw5AzJcp3ZpHsYFCvK81A36gqvzGyaFxbfPZdP2AcsBM3e",
  "key1": "2ycLwU6JYZkiAC34vLqWqjeVkRTiSczN62gnAPq4EG5q7fTkqzRqZR9isYVcmbRCWrPuvN8eNKqhfSmKMj7e6Xhi",
  "key2": "5qdTqBZx9RALCeEKgDzZt9RZR711zDcB5ndqGG5GpUiszGo28mJ9ddPGw4ssvmqKiXYEmtnXR8jj9MNAxq9tkf4V",
  "key3": "3frSTtskmibUBYvsj2F8JveKopjNguupSLYXq9wb686sMnPRh3wGtBKDGx8hRQfb9bK47oTCyf8rYgzeHtY12JEE",
  "key4": "3kDmgWaQJzGNHj6DjPRsSpUfmELRqmhn5JKw1xCxDYgeHMWqPaPvwGYeedK3JRj7KV7yY8EDGcGd6ga3Sobq6qxG",
  "key5": "5b7yHX117FqqojobLbi57YHJr8tpnpAQjDdjo1tFgrBC6JNxwgjbpyxFpK7b9EegcYiFmzfgDeoWKNEMazKNNCEn",
  "key6": "5heauDo6n2o99bMeMB3apnWhn78TXGBF6PKjoV5k2ABVPcXKayB4DfepfBEc7df4Q7YMZZpCdVfrtQ4q2hG7HakD",
  "key7": "4UUyUSWMwSEJSvJjeLPP1yzkBrDhMiyT7aqVLNX4bT7y9GA1pjHoW85VPkNoPm2jMeFckmCR4UCCDvm2QpAKWPyA",
  "key8": "2h1Etvtx7RW16BDzdDP1vToYj1xGvty2LCSmJJ6Chu7yLvPxpxeQmxyFx8oCAPvJV5paooeruf4Ks2GQMypRNcZx",
  "key9": "391VwbCEWE4vrBUNFG8D5RqU6GenHzQeVsHy1d3gRj5ZaGsh9JWHH1UzMKZkuHnynD23HYmfET546udVgKa3bjc9",
  "key10": "3WZtM2tNZCSA7QGDDWb5putaPQLPVDpSBrGsGywAmYFCwahG8y86UTKE1FwXEM9VXM9xQCJHQx3dnhPUaU87TWnU",
  "key11": "Y74B8U1ZjHBcE7zZXmAjETQaxm5CoTxDFQJB9CZiyWoJ3Cr3hMrJgn6WT3KXnigwK2Spbapwt2S1BrwZDTho7NZ",
  "key12": "2bAgfNiSTvNpBbcdHR41Rwki855MdEw7rFDimSruSVGnfkPxSHy5cRmWykd5dpKdgubCz46ubvSfVHe2zZJVV1b4",
  "key13": "5XUpeECU2Nt4NLUvxN2no4rikJBonetwqWhom3kz8UHxnHNbyzEgU3xV3xkmx2ih9pVTjHxdBA51kqo4F7zNfQ3Y",
  "key14": "5rhV5dHVGbupBJAegVFsq6NVjuhFkTWrkHZshbatC9erhe4twaVDr64p5bBcK6ywqyk2tEsVTVYt8yQuzccnuySs",
  "key15": "4zyhfkHpbytgJNqvsPWFJaqobwN1j9g8TTyba8k9bVszDi4AK9y5tiKPjLvqccx64c3X6igpYyW2NfsMJppcKexR",
  "key16": "26grExftdM8PgBDyPpgyRYooSzcXEZcfGaS3puQ4pAhYRPGz2JJ1esrVZd3GvkHpkfZ5rNvidZivZ5wAwvra3yT2",
  "key17": "HoiuEtDSVFjpuBdv772AyPH6r6inRv8gcsqxgYbbD8rqmW8ufZh9x4PqQxGYx6sa3ef5Y4FuaYS93ma4rTUbUXk",
  "key18": "1cRVKGRMHfwojbGpYePDhgZdbmcpu8qprYqdy21YgEBmf3DDas4SQ9jgrHAjpp5a8W6sYdivVTXwE1hUno5L8g2",
  "key19": "3Wh7MAn3syAJEwFUCXkp5jVjKaDg9e7QGqATi7Bw7n9hzGgsm1E3ocLFe9ixQhevnZrZyL29a3EvZUmNKD9TYhus",
  "key20": "4f6YHaj7dVVdyfFmYgya6SWZV5ct7NB21fwq7rfio62CsN3PwWyqeNYA6aAPR9sojkZoQCvNgp1ENUKBwFtfzZEn",
  "key21": "3gakebtDAicVZy4sj8R3ECXUjjSrNEBUTWExxn184dE7zrs1v7AwRtgjWAAHcAyZwG7ZDgbbrChZdvW2hEpDGKBn",
  "key22": "4Pq8RfNZLn3mK9gRgHAuymjAgWDg54QaWfi6vsFdeQk5DT8XfutvNWmmQSYmYAvW5MjhYeNEgyTNtg2VuFWZKKt6",
  "key23": "H3N8GhdjD2wx7QLArPf7aKSp3vBtrWvJFJjWXWWyJucZQ2XgnZ9AFAnJhduu52H4tnJhY2dJQV5DyPgWPAWfMr2",
  "key24": "2FMGVDc7CpBjhW76GTDtvU1Env5A6AaX862ftkT62HipEyrYHKokVYt6iu6vQErN1H41i2RmR55BJJ9wBiZRApkc",
  "key25": "h8FUJNwFcigq2Avrtv5XvC2hAM5JzVi4hXc61iohhwybh1ZpeAZB5D4VSjPwwt61wApA9t7VfG9tEn6NyX6RgqF",
  "key26": "59T5KucZuhruBZh5aXkxc2LaeKFKnanuycwabWmjVrsUKPUogBmtqEHVBvKtjmshvbFbVQmLpqRbBVJR56Es33oJ",
  "key27": "3x72thma7QFGMXTTKeTSrAEJiqJ5Tu4nhQhVPoquUnyupukaiUN5QGX9BvCBiVDFAYGGHB9b5L4ghuVAvqctvyNc",
  "key28": "4P7ia3x5fACWL69PJtRFeJqnFEsXb8FN3oJSDzWZtp21tjpgDnbZfYi2AsSwVrduLYm1fWYfAuUTvapokR6DsvPf",
  "key29": "2otgWvAAdmhBgohvAZ9kmzR9MLxHCAKubLusVHuPThuqqi32DFw7tkeRKKZwN4xxy712X1EtrZBDfiXTcJNHRMvE",
  "key30": "LdiX1YUXwbZsvoKZgyCgT8YbWWDQGsSMYSBnMb9Uz49bWs4HQKfQ1LPWSrguGbbJUvmS39t4fxQEAPejBCg5tkQ",
  "key31": "3d79nWPNS7rxwrGaGJgFq2YDnJodFX5aF5SC9d7TN69hmVCaj7oNnbjkaGc1yJiScjs62nWK1rnRDYtr73FBcv4y",
  "key32": "QhxXtyFEv6gp5E9vjCvGxXYkapX13nLU9gekAYPH1ygGCy9UJA2jxcnpG7oGnhDET1F8oYf4mW9qSMN2H8ioC9B",
  "key33": "5sT7NvkRM4vqfKQH6WUo8PcdMPYEdy8VX6KrgZdZuMxpFZhAKYrRCTxxUjCHu3q8Gf3AhdyTqpVpwN9movJVfsz2",
  "key34": "5aemi1nPWDEfHV2cGzT381dRjcXKaweXBYurqfa3JPwmDEVkcqxs3nWyWbPscyDsijW3dRTgypMVrE4Ye7bUgHSh",
  "key35": "5JTUw4cUCRdpqCxMG7AaxW9Mty2t4uezE2tU9WdJaNf2PjKdJo78524HsAQH9WzK6uih5ozNrpw1KESQZiPr6YEx",
  "key36": "y4rPKJbcRKHJ7WwqF2w4i95SxrZBqSZk2YYTUHWrCKdoiDoqjd9Y1v5ZGVZ1GZnkiRJqcyg5KPzQVWm7g83odZ7"
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
