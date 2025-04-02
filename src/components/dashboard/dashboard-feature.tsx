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
    "555R3m1u3F25RcdjimGFSFguNvkww8ZSRucAyssLQVsbBneALcmawemX1qZCoRW9cDowkK7EY7P3yQbErsfCWyCW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "awSAiHBaK3LtvjntWF7CSLkCiJ876avoeVQiXWEGtwZUtudemG9yGLmKKHYQGvdSevq3XJZzXzHpATxq2wKfUgJ",
  "key1": "mraBrHCCcYP2217qdtoZpktcJ4MkyJivgSugZ6zfssvZfFAoVRVvhTxLz3YtkLi4EHdvgY4fjgWmuuVdofWHHHB",
  "key2": "2ZnxxSff7mBqNTujAoFXYqpLFN5U1W42AhAyWsF8VYj3TuL5NYsHaUpzXrgfFKDofW76umohvyZCfk1rvnq1c2nk",
  "key3": "2pz3atK9DJs4YKCT3XmZ7ZXEjGyi5DqmHHzMuUHRqDnnSchRJF2DyMRGoFvSaq2v2JGy1GmpNgedd74ZzeG9caEB",
  "key4": "C3Sxp64yWEkHDY6iC74oycHEkXWNZpHerZao5JjxtQQ3BeqPwZCRTjYHPLre9RghsNBBzUsNLMjjnLcXcVrYC7t",
  "key5": "34sV8ZBFyW6LakkY6qGDViAdwknGNGctTdTJmnopX7SSTUyaWQ2BtYsVV7PbNmc1izMnLDxK8Z3qQrT9288ffKiH",
  "key6": "qNayWBDKedX12QSb6otC9VP52Ne4yqVnkAcagkdNwbsK7UpjHEQRGiiBeHnDeFXGHhiewk35iT8mHdqQP5RUWth",
  "key7": "4ZqTNMLEYkF8GkfMTLo2RNYduA8cSKejE7LDTRBLkBFZhyytpbd9H3Mv2bRGXsMWQ81PPeBZSrJ16mm4bS68xrPz",
  "key8": "4o7Kghz22bkmxvC6idLyiFS8x6NJqdkFiLW9gCyMSrNGtTiMDH6ac2hFVA1FQnxQvXvMk21LhJcbpkrgkyrYTeTL",
  "key9": "2SW8RL71ctQoz2G7j3FqcC6WmRf6t26AkvVYY4UoN8ao5G7TJD1qnTLmgo8oaaotMp5qYWB2CZqBWMXBBvsy4oSb",
  "key10": "3dubPSLEFLcKcS4wFFGx5HkDNiCKNovpcYMHDVzbFPfAQNZzBYPWjYViwiJKVNi7Eq5cyBvx7Fx1eDVzHs1tmdR6",
  "key11": "4WYDJamxEb84S52TK27GnoHPs3j2BtKgWvAuX3g1NB8BtmZnwfpeMLpzLTo4m7GbYPFc84dWER4MpWckCT1qckQS",
  "key12": "3H9na9gb2Rf1wc1j1qJ63MiqjTwSjDZqBhdoskEEw2KrKL3uJy4Mjupaq8FRMH3VFZV9QunZn1DQAtG437kCkSu1",
  "key13": "4BoSV7FwWeanDmYo6sFjFDGTaegsHX7WsWbbHYhJz7Sf4dvXTXdRXF6g2yDfwsUg7T2nvAmLY8AKteGB6ncA1b5q",
  "key14": "4HYeVqAeqPJ6ezyYN2zhamURkgLeU9qQf21SWjKkocrAZoy9DyUCsGirLniN7Ujed9TKkJ8z7KrJrLoeH7afwHW",
  "key15": "3AngCqqbMYhox9MusTauMSBAs3SFdD4cAQuBYykjGRNLYWuj2QRJb9VYjwR9WGkcW2BB3F69od6g8WnwubgXpwty",
  "key16": "2xsTsBxYvnbnYaTdPQHBj4vjhdZLqKUZJeS5kQxUQcozC271pujiC7qdA6FpeLeo4FiMvRok3MZbPEMW2hHebW23",
  "key17": "5y4zUB147KoCZkBj4ivKRuQ8r7qCJMot8FhzgdFKCjDmUoLHcs6Aak5sZPmtP7QJxt6x1Ljqk9SZPycCkZq7Kr5S",
  "key18": "33TAu2azAKznfL3af9tBM92EgZZ5C31woyVAvKyCES6MvfdjNsZvQ8TXfiXc7FF8SbjwDJhrzPFxEVfYDTAchbXM",
  "key19": "2oif5o7w9QoKM9FvEovLbGSm6JYdxHmmEChsHD6Qfj67C7w8KvUQDxveWKSQsNHhCVkh8PQ1Ah4jsrcw5nNNNmLk",
  "key20": "5QYF4dcrH2ZtygTM9zRA7qbd9ShC7WjWUUkbrZztCifwgFdkJUfoFTUvBE4dkpggg4d9UMxLHifZQVaPCPnkgjKr",
  "key21": "5jZ8PaSLUCcKfxrokVBPJ6ytX5X4jBH9DeYmWAJipafA1WhLD6zyxuuKSbXbuMaYSqz7yBocCgH57yyCy265mZgs",
  "key22": "5Ag23ohzZdKy6j85nyrq3RATV4r5Tquidg1HtGHn2RxWidmKNoZwUhZmknvDhdNxnvocKV8R2FnE2z2ot1K44YfJ",
  "key23": "2Rp6p3qBDtyUPQar37CR4PPRxu6pQ4vLC2ar3t6AwNZLH3dJi2SedzUtqEB7v9Xoj1Yaxcn5Nh1S98Hnbz39yf4f",
  "key24": "3RCNgen8u3BBYGz48WuH46rmusv5tPp1kdhUET2FK3uFWb6SgvnHzyxwJoRZ4zYJubSmQUGoHWwizGvPjaU5buZf",
  "key25": "3guD1kSq58GLetxjVGCq6kLSocXhZzzt8QWboE7wyRaEoLsFwnPiY2WXCPoEhmgiMmDHFtnff5ZKUEHRFqybx8zt",
  "key26": "GnkoeE62AsWwWMhjwbpkPXsCmP2mrUwEzoRxLXyhTZHNLCTLCdc4QGc6p5oKvNNmQRHDgd7QtGH5eYoQa3fG7Ff",
  "key27": "4ff14Kir8VMy8KnEUMHrfACZLA3a8UvbhJehLgv8rFN8epxqyiTQkj6p1QXc7XHuuwYeX1CUvvWCgVCmWbc9J1tK",
  "key28": "3NhAUAQHPmhxYEViP58KdEdQiiTBS8pHuKpZVNotGSzGHtRTAkwnfWdQ43FVwnGdTL98K8TVDoppDDdCP3uvZFW",
  "key29": "51aS45y3wbE8QF4WsKrdQPbDRLWXfb26ih76zRu838tzN9Qcg3AYnt5xEAiN6pRoJiKYzf1cABgFPJSBfNLKNptt",
  "key30": "4aSPQ1UAC59QBKZ1KrAnvhAwhc5ftwnUVJ3W5Po4rU55iqy2m5ihRVnvb8twCrWoUoqY3txbezRTny1Rmd6BC3PE",
  "key31": "2Z9Fv7mavrZMq3WnZz3DC46aohUNX515X71fFiK1LyQnnVk9n5KWY1kWyXsBRS3PSS7STVuAVbwcqhFbWjeDWzhK",
  "key32": "5XoLYdm4T42FVbMiUpqCCknVvnvSXHYt7cKEdjY4uUkpwfWXEqMJFPpzLBxxjrYLQGVQqqpeRs5YXatGtYawTH3E",
  "key33": "5DVZitLWWc2GFVwktYtr5RayfE9C7P8rZrr5pnwgqks6cUx1wT99C6eAPMRZyGF5jUsRTDzDoB48LQo91GnPLWd6",
  "key34": "2jnmdiVJLLEDtiZnwMcT2uv56FtacAGPqkgJosrgA1UetE5Epm2ngNf1aGq6LQgQdh3eaUmB3jS3b2dkpWLgKZzy",
  "key35": "4zxDPnFcGPD8dXYb2pAnbeGhUds1SjJHFWZPAZfFb8sZg6rWpQx13t9ZVdHqFXHWHY48C2EYgbnHq8RgAHSbPHTR",
  "key36": "3wGZuwgiwmR4y7ST6N8SAtVs7ezivEahtmQmJiij3yq66Sxok54yKnZAQNUVwFrJTi8eAGPw8RT8oHS4g657WRiS",
  "key37": "2B3sFKSz2RuBnGEbLLpYn42oyhiSW1qm11eMnn4ZZyhCL4igypXVEQGK1RwEQLLvW8uMigRAqEDkvnwtGQbZrjV2",
  "key38": "sZdfokjh9SmmyFAbkXrT3wLDRdCALP9UftFnnLizbybqGmwxYwJz7LTkDbgh8o9w92dfqjVYEz15EaiZ7wmpqXm",
  "key39": "62u8dYfHXX5ahnwkUtEyF7yuitCU7geLtB98k131wdSMZ2Bmj9eRqNWEW6tDn7QQoF4YnznLSkuvogkWWJJepjGS",
  "key40": "Mp4eEAKMSZ4ATkRVu3pf28AJKbCF68zskHGbKBvuYJNKFc4nG2GZyQ3ncngnAV46fRwqRwJGR2ybEWePRvktBQh",
  "key41": "21Kz6D5qEaRXXbvbNYuGC9iHQVB9NxSrTMVhbF8ALue6U96oxcUK6ZvBQ47ynG3PF4bnZV2CpZEcdQbuA8Rsa4U8"
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
