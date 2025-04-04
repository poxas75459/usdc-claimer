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
    "g1xueG9wxbhu7mvWfbV2d3iETwRV2heY1UMFyp8GRDrCgRykXmh9psQoE2Wa9nbXHfUA72Mc14MMQ4FsoTrozzM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ehCd4wcTdUPM7zNz9GLPXeTNZV2gpHcFojgyXK2haRueZLKkM4mHuDLGU8kUC6KemUktkBhEKD9PnSn6LCHD4pT",
  "key1": "4ELCXcCBYBSrLEJe4SR923j17yAFjSCUi2VLQUC9Qyb5hnJTWT3SY3xKdpJPiysag7Zeq1LsT2NXjM7BD9WHqU1Z",
  "key2": "2rs6tAZBiVagRFPUTudHvKG8tG9BRH1uhjtJPtQUm5YWVeihxVQ7Me6KfgZkyEiH9Bo6g7KZKueaHocYv34yDbuG",
  "key3": "5pm8yf4moSi3KgY1jaPafRCaChg13zu78cREV3wvLwKjy3jsW6bqfrPMPmFHWePLqEncUGgswhSucrvbciSy2FS",
  "key4": "2w1nNopFkv6KvYdbjzgkw3qdqoeGQf4cuWgMnp1G6LYbBX95oAeXayE9WwcTeH5p5cZz5i4CKhycd7tzmhZPAtxw",
  "key5": "MUwNaqN57SPL4WMGfmDppyLZaDEckWK4h8S3suuv39DKmLb9gDhYr19LfrtUWxMmNqMWhbKekQiRZGtUMoMSGbj",
  "key6": "4wcyZYH3RK1JiZAht9RcbUH1SSpSYJ5kv3iXWr3xvgW3F5eaeVpuez86HcVWEeffHSy6hXsdLUbkNjV3NdA2h834",
  "key7": "5KNtcxte6xfjZNGZmALeZ3abmAqoAHs9meDVaZTBevkTAD4AdEM77uk3MP8Jw6veThVAykMH7r8Smz5rkf9XnmNZ",
  "key8": "CYNckNL9jCRM7zufVATipfMECnK83EPtzhnvbzzFt3of7bXrNHRMpDccax1aQDkHhK7MFxMXsaLjWtdaD1kaiFE",
  "key9": "5dXAjETeguyo9Z2jBQfZkUkW2mQ2MyApFFctmZAPAra7psaJTkG4dF4zjEZ49v6XtsoePMtgSaKXYStztMHx92hx",
  "key10": "DK2GNiJauj31KZHtNsCxxg4fMPQEVwEUfyKNFyvPJjGYtWw7dYrkSpbzeM5ja1T44hq3YFkWKmz3FNbx9sgNzq2",
  "key11": "3niisG7nFiqBE3Tj3ijLduwSS6vp3i3FvDVWYXjoUay6jwv9HLwVgLW6qhVuDw1QaVPB4LtNky3atuzAx5J2eTyY",
  "key12": "3ZvNXjVsR13XJEgN5DkLKn8BtAGWGTexzLNA81tnq9VSQEtGj6kAjEhdCL9a8cvnLvN2HfEJBZJrDjvvRhecyEWP",
  "key13": "5k55dPMp1iqju6mwLghpDiLnRZcQJB1h65LRQCxyWNUYU26n7CLUyrfNsgPfeVAsjCkttb1tgHtfo4LMijPuXgHd",
  "key14": "2u8pkwmjWh4ap6RQv5e9z6EB6v1LKLacddmBktPk9yVo4xb2wDKqQvo9pU4f7stxuanPr3t1MDGgW9Rynqb5kZYV",
  "key15": "2BphahcfMBjDextvkNxijR5YoF2FqjWiEDuNNNcwwQU32L8A4tM9HXifPPbNPsvgzhzrXfCBcTszGeW8EJiKsKFu",
  "key16": "42qM2zLHzu3cuMjKsCxLe1BfrLxb9oucrEfxUX3F8X1dyz5LgGA3J1f7p76CyJVnjNufxq5ZGY3UPnGsiRptDd9o",
  "key17": "2wRdaWE11UNmJzcpeYoaK7g9miU4QBjgiu5PE6XiJz592FTHxsy5gfsYw8FrVN52NfFnzH8SYBgcSjdA1FmtS6yH",
  "key18": "2PHT1ia5gXSF48HKozM54icvUraj2cS9KAyPgkeEbFU3Y5dX64WEMiBerGWdyQejVuS5sAk1cB9wX793zE4w2whu",
  "key19": "jmbbdFVVcoXmwCdjd1UinS38Rhfs2sgRTo6Jm1miEkb9XYJkFVyV2BFPFN9fCQpUPxqrw1mzDrsd8Vhvtu9sLbn",
  "key20": "2NFhKybNgiooMi98jAM9oEdoxsmuMKrPkvwyzvwKQDDJW7LUz98a1ibt7tfx9VG78sVExjsstvvqvcuVYuRSgTbp",
  "key21": "2yt85Cf3N9NgPTfdNs8QVrr7UqSfjTV3bevD2t6iBPBV3NbVjf8iy8kLTchcj74LNPfqqvJBLX1HGuzgJSA7exf2",
  "key22": "24qUjxRkBYbju5MUaGqdjUe2Sv6tUcYVMGoXrQbXFwnizb9dqsTWG7dQzFp5SQpSucKGTJFBKatxXjcBra1331TH",
  "key23": "43o5ejwWFFcNeKK49CRRpCR3GjxYQdygzf3DpXiNnzVDMqbATEXzkHSYa4pd1gj4mNieEbdF7ujm7gDAk4WFpfbi",
  "key24": "3XNTVJFbuK5pVqh1g8L3bnmtvgrKg3jBcjQ1U1Co7HEBn8pKmVQmDVRYQTKT53sckhQULPndjtweCBF2GWpTP7Pa",
  "key25": "5A5PEwT73pFLtETPQq5uUGM6Vn3aAbjw69MBDQSui6vjkvunge9tVGryr7GxfgzMMWaAoXFtDQgJkaQHwFquuusR",
  "key26": "JFjCqWDo4rFVh8g8bQA6BGRQA6mZ5Wsqz2ANb7fWkvDNRnB7S8nXDsRbdZuqFMRusWyt2fYRCWE3YAScjagcEmR",
  "key27": "u2doN47NsRFjH4MnEHj2zfWaAK9Qyyxf1tzt8nFSpTLXFzKbBip3HHVfkW16Zikwk96ddK6LkWMchijZtvuTCpS",
  "key28": "3u8Kc6G1xLFSJ6Pv23PPtUY1EusPxbxGC8ZF2rRDREwZ2ZbXVyYSMDZSZRSxVwx84EmLpLF531k9UyEiT6MuUydU",
  "key29": "2JmxQFqTwrPTAL8efmtpymdC6f1XR89u6SfbffLZKtnD6EjbxkbTedVEr7fN2aMyTuYXehFeqqvmiC8DqmKzxwJ3",
  "key30": "48CUvT2ZwJhovdweerekEXQeJEzcGA8H9GTUtjLSEMC184VvPbWtRGPRx7sT7DWNRamGwvWL34638bEHxiK51Vq5",
  "key31": "4nxYTTiPh6ZoZbJkBARpGzz4bzFc4EzLn1fQPmhU3nxWpnJhTYKfwVC8pAtKEgVvctW5i8pdcCgeerUzxXg2BdZD",
  "key32": "5uuc9e4KxqMP9hLczSUtvxeRdsupBCffwBzLWfLi78jwphLzZy1o45vDJTqR7XjZaw8shiXuE3SstWFmWjCvbXJ4",
  "key33": "QBrEr1YSbvJ6KZUnWUzfbUNcszyoQVggUMdBnrK74L5LSF1CLrEGuBBeDXm2ze824qZJR6SNrwPhqBSwu7yLGu5",
  "key34": "2D9DYts8sGSCuTozYLRfJAkUMVZKKPKg94NcLJDrU9YaymbQmG9cvfgwZV61akpA7zJPJChUbkeruRk4G9K1tptu",
  "key35": "2JTte2LTjiQwPkQ5mMi2ZPQ2s6aW3acfnhjqf3GkGyJc2nwzwLbmS6kJM6xEzVTtGUfwtbWKPRCvNM9ykSYJ18Xg",
  "key36": "5VQjKHC2ts9e8m6ixxSGPnXU7r8siN89WWUsyNG7vWPQg5QkrDK8gu239MCVahtTDzzCa1CVFZBK6LSwmeTFPmG9",
  "key37": "2w6f5iJ6bgHgwrSRADAFCPpR4ag3v1kc6wpNkAjqqLDjXsk8mpUG2Bw7UN1wSRzVavH49tRg3RwxPNULR4gkFz54",
  "key38": "5VJi5ZinjawauSkfPMQjPA8usR3dCDUQ2zYjKcDsnGVJK5mWPKDNRjxxhp3YBwdaPR6MMuTQjq1te1oNNsrhc3sG"
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
