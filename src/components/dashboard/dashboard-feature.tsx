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
    "3ZskjVjSsne6caPs5B1ipfwbDSJAzz8B9oHgCuwZAXc9jt5v4QqH3C1AswqX3WVs6Pr39ETLNTRk5Ed3zwvxhq8H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33yRBrFBZAijKcThVF3k7hVqEBFUKSZqx7QATzrcgSrTLnp6E9h4gzj9qRXwDSDdb56ig9Vd7cvUqu9Yf1uwjmZg",
  "key1": "66a1Aohi22XZs7VKGd2xr9M9rsCcS92z73brv18mEuA2VEcR7qiQYMW1qdQsjsbreaSU2ZAQcJNdpEZTfbtHAAB3",
  "key2": "3NTT8hSmnfJ23dMLvpwNQAWqWuKKKXmVGtCyH7kGDt8CduBhKZ21ZAaPw5qhuCpqZpiCsyX1fKK9JKWHbSwKufWN",
  "key3": "3JXgSHF31ST7wgTTV7BCQGkJeU2RzgFKbNojKP2CHZ354SkPbiqRLhsp1eLnps91Szno596gpBpzujVte38D1Dmc",
  "key4": "5tdb3jjChWCqSL4DNygaZRwdFtWMKkq8oqPPXy6KJghdaH21pGp2QVTJYSQFfFxLQfyCVr6Hobj9Uwr3scWDstp8",
  "key5": "4x2mHs8nJJd5A1Tbq95NELx5xc1eD9xZJUx2MLPfmjVp69U46krdvR9r1HUkCPS5VvmnH4ho398VPjTD8NarPYbp",
  "key6": "51t5MgXucyrvEFiVmMDnd9aFKAE3TVYToEoF7vysUsVwYf5T6mYXLGjhgqUEfCMAfsKxts9i2BGRzCBWJxryFeZi",
  "key7": "4CvK5ky44R6MWp6hVfM5emVntEnuSpVCLRQnLCefaZkTX8djACzzYiZ1VKEmiNSvNct4XEwUsyMxmnW9sJf7rArs",
  "key8": "fb56auBbjEKVboXCUJTmofgUcoWxoC86zvG8busyYGK5JYMDxTx8SjvWh82mMLmjB3UxRh79R25qf7kQzuyDn1r",
  "key9": "5s2zTPv8NZGfzoHEthR5Jcga9iuRRJNWi2mH975uHoqdHZEHX2k4NA1J5J4hWBcZLpLS7vxUKTtLes85p2jE8S5J",
  "key10": "4eTmCAMxSiUja7UiTa4x5mzZaVFjUMQ4KoUTdvwcubcHdBamktSZ7nxsEc1PMHxfwaMLv35CvJMMUzpxnKuGKb5Q",
  "key11": "2YVg9uN45BXJ4P7iFk9ARR37SghGkLmVWwGYKS61o1Hx8kTLRzKpa2gEFT9XSq9JhFjU3HbNzHdAUnjcHSTG9miW",
  "key12": "2Me4X29HWUBH6ZHVLXE4wd8miKpDLJADz7dv5s98J6BNyqP16VBXnf3TydTrqzvaSsv139ai4v1UtyMpwGJR5BzZ",
  "key13": "4PvxrS6RBaaG7zB9ne1o4UEs8AHDCzBNZiq5A9EeJF3FHAUBo1Rb1MRzQEHx8pp4HeREzMB6fgTQLr7FN7eNfezF",
  "key14": "4n3aDta3Jq3M4ymeDB4GQUeWRhAd5qxS9XyaPtPDkyKQLuMiUTuQvKENAgcStzaySQ9boEYLDm7LvdpV9jH7m1AK",
  "key15": "4MFashKaP4rto2py7UWtWMQA34TJnTiB9jCNdqf7rNjkTN6HX2m5NJrDgYhrKJhocHLGrQCnGhcH5KJ5tN7cHmVh",
  "key16": "2FXux9QrK7sX2eiHLs3KepGbNJvFuy2wppzxHpaX6m89CgLFQT8nyfY68AJkptfhakZJgJHZ57ScHSHDBSSDbKHz",
  "key17": "65SPK6waYyxozNUTxD5C3EDpHcJprBu9rggHwm5CPx6vdYJSfTHdS6NFTma1kLmnUTqi8SmDDW9pi1vRDbZgi9ur",
  "key18": "4WH8DJVR69VAd6wkFadxsNWurZF8aysk1PrVpemXN2dbep2U6HxPzum1Mkr7FNG1EkeLRGimeGVeazbYwgA2fCwW",
  "key19": "5jw6z4oyefM3XcGr7XaJvgdTEk5C35iYfZ65BkfVAiaTM1Lhqr8mddCX9YezBqZnieX9MnG9gFU9wEpKhjgMMjnK",
  "key20": "365XeB4AuSqXdpTvzzAmtt7GZvartZJaTnM3xMhDxpGWB81aneVdMJM8yh6BogWTES3jE7yjVhpdiFMXxByFatfc",
  "key21": "43rb17LW3MFQpN6Bsc6PZM2Uqpqyac3sW15pcPREdaxL3Wr6c5oqAW9qrWAdQMum5Ko5QJML1NXqt7sGJyvik6YV",
  "key22": "4j7EvXtYdZkcYjE3k56TbUJN8EJSEzHzGpDgrWxBcb7B6e5fRHEuGxRQxqyxNVYhK9y3Bi6PYEwL5PkMWdrUnJna",
  "key23": "4KhwPhQdu5o5qv1mafRLcCrr9TxoYC7mhbAcaMwhBdzZGum4oTQ32Nb2cE1rZtKQNvj4Zy3q9MngtNDK8HzJBmbi",
  "key24": "21GEmtU7KyLCV3DZSJC3CTT2BMuMVg3tQ3EA96eyo2qX5uJ68i258uqeCPz7LgoRLVQmEfzgQgmBFUi9Vgr7hKx6",
  "key25": "5iBwWEpcoBvLCf6r6ujMNyfbRHYa6ozC6BbijYJVZbRvvgwdgjsjt2kLk76iYYoXYbEAXDzKnB3jyNWT18apBTsT",
  "key26": "4tPyXHsWa44g2wyjBxiREy4rEwCwaPY11i62Fi5DURbVakhUAjg9dKBUJtxCr7t8jYAUpmxScjbfygyPXZb2vUQy",
  "key27": "5qCNfXKs6sj9hMufxswfHCZ5KpVLJF4j1XoTsiceG2v4jRtGfXEB7icBnnCGqvW8VatA3thLFg3t1kgzpmxLMokp"
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
