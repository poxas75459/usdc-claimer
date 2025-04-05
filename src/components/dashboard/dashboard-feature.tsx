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
    "3B38ACwF7Qf78LPWXy5SQSB8jFZuXgo4FjTMKp6xrdPJSMWaigFatvw3237BqCigjZw1LQUob2jGVrVsVvf3ZaCN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KQrpEeG6WTxPemeBwiUmHhNR23AQsPhWuVpBtosBZAk1RA176GiVWB6buP1skoAiZqEiYZGekCXGX48xC97XpEA",
  "key1": "4dnarAd8M4voiYDGaacQkm4jmd1C7ay8KWxomGDyTC4N2nWz5aYeU9iv4LpQD5z5nB1joVho8JvvQhEsg8ukFGUS",
  "key2": "4n8VVeUsQwTWfnQJPCUwT773PSkidSQqAJBmMo2Shsjtxmw6f9C83EWNZokh64WCAkUMnXeb6KzTudWPade2h5w9",
  "key3": "614bhsCqxfbh5U1tCmQSFvWpR8v7kP4UWQoY8QDehzyPv21XeTiAPo27pGBhCVoW76hAPndYDcbH5aniw4hY88UU",
  "key4": "5UAoQBSyRrXz1G7sDDZc41vDyKE5YJ4Vuf6r65XdnTcXouy6m3zaeZnbhiYGi7dq49ZpDsfckNkTeui4svn8HSFk",
  "key5": "34NHe2dMZZrJEV4fNbRzVBQQFsJRhpay2JQrst4Mr8UEDCsh1Wz7zeYHUq3imjzPFUw6avUVeZAhKjXdGeB6ozN8",
  "key6": "4mfnsAeSSkRkoBdMrXnNPTANxryYEChQ1CFeZDwV3SbVGHthWBKLNLSMAkTD5LXBL6F9P3HE2AC5xPY9KnFWC6pS",
  "key7": "4N4D2zpgzgNMgKH8hkcEFSKZwwfqhQ8WDA66fUDenusVF7484mcB5vbnySphbtJL3CKtu7PXFsvrXJQ9sKNUdndA",
  "key8": "3UALqBnFJLszsZes1yrZfQPLzpkBo79e9HrBvdMRHT8w4sqjdWkXggrbWR4DfQjZJzcXCPV45m565PDWCHzrc5mL",
  "key9": "3oMykYMZrgUCfEDMeiUiHcctAXv3ypoAHu2Cm4L2m36UDivsZrqE1wzJHjZqBYGrZbT6P18SbEMN4GNFS8QdkSwb",
  "key10": "63BXZQZZfc6kC5VRMYWk4M67r5BaaZ5UESPZfYGKoYUvhvSsVRrsCwRUPso81HouYxFhAovg3PfZLkLxk7Vqb5UD",
  "key11": "2q3kuztWUZmeLxWqk9cNu69zLnKq3KXAh5UxvdmBfTEYSe1KhS8vYZSAF85L1UEGxFB4FwA6PXAT4rdXsjvsRfBv",
  "key12": "4nDK8aDfQTjWZWstCyc9iWPV8e1RMWf2Q7TVG3vZMd1mEr9CGb8A8nTQSHjwyRGUTmUMY9WyRh1dgxe9Be41ip7H",
  "key13": "hmCCtrfJ7MvZeDTxTfx2b2TaRrpkg5gBPzyX359YyQ2dENXHnrnZWgaUhx5knFsQ8NdfWaTBZFHCNrfPbf933Ad",
  "key14": "T69njxxRMgvFqFbMKGMgiYfG8DNxLSHdVb2rkTcobqi1zhzWVepWnG1gtph3hCSGYuAduQAg5n63AmFfTDswnsx",
  "key15": "3qbXC95CsomvyLFMn5rZKWqBZrzSJUHhGiLmaJXZtKgFCbWcQK2kAwagbbuAagNh2b9inau2rJzXUTbb4g2vqgag",
  "key16": "36e2MYxZH8bV8NGSoUutD8zwgLSRwScqSRKPqyJphb79zRN6RqrRMAyzDAJAPiZyxtU71q6AmGgnJGHYcZuHHhub",
  "key17": "2wNLfSKykfzn65bySav9neEAT2WJWxk1c7nWHoWhfU9nAzpCMoQJi2S1AuKW8PHkw4yQFXVVNHvy1hcz8HGPmo3g",
  "key18": "4L5E3ga7aLeTAhrKqdwNXRAZQfx6NMSCmwJ2Wn7dPf3WqmrsiHu7nTmtUexZiiS94KZDG8atcAEFYFsfFYZBaEfr",
  "key19": "3gcEKzfEJKDyfpsZwJWLT38fxopBydDsx1hZJu7hAH7bEtFocSAvM9LZWCssQkzHrPzNdDN3Fi4TTEb6V2MBKTE7",
  "key20": "5H585w3dx422FJtGz4T8j65DZr4YkpuQimwaN2sw5irL11MB3tjTR23iNZHT5gWGFKqL6BKEm2SwuNHUbo3pqykC",
  "key21": "47VaEWDka2qwm3kHF5RnxYUWTfYfNk4GYHUuYCrqC6MNdJud2s1JLa6cKcLoJrnoNX9zcWfF1UyZZk4g1SYvwks7",
  "key22": "4zWQnULsu273KGnZbdd2zFNBUa7QVj6xqcbp7JxLvihvFnom1aXuFdMJaS6p5XMCVVJZe6kUGkaJC94dJMnMXca9",
  "key23": "iL6KptyptMo4NVQ56fkxmW3AbrgCA8TMK9C7p1fJkzxYfELTrTFWMTRfvtEauroVmaRtrf8FHL4dPmCdzeG1FMN",
  "key24": "4oYP69pxd5X1XhHfiSNpT3Xyr6NhrEMSpK43yrAGF2MhNCjvGwgmg7w1HgcRPE3RBKvFJZ3HxnRdLyfRYnWeDv64",
  "key25": "44iTWx9PWu9nTvvLhvpfb95czRhxRPFSiXXMgVKsZFfnhB534FCcAQnEQfecuiMAn1d55W8gzusWH8stmA1UyozD",
  "key26": "34Jf6vyvBGfYB5hJ86s1j8Hk9h1uypgE8JFtMDT7yk5XXoKxvaweoHovwivmcG7J64W5ToNZL7CjG5eAMMeuo8gq",
  "key27": "3XaVvqguL7SSYpsqNLaHm8hgSUnAzRpisTqKyVFYavQchxzcppGjfJiLJAcRDN7gPpGhbS5ou7R96aMwfBKypYPU",
  "key28": "4W79HFNy7kpHufQEDsCR7krd4BVaCFpGo7QpCEdgMn6dR6bdNEtWhmWJgHwySiEgmKX5XaU73AMtbWkuuib2mfBn",
  "key29": "4LxbE3yViBjqFPxV4jM2CPrLTK7z4bp9Hy7Zc3YEfStb6QzYxUg8tiYccwP3ojxefhW3fzfwJoESvWMiqp77bFNg",
  "key30": "xFiXEZsEo1CuDTWFDuom4MtCQA4qvmGaDFVfuiGvsBfYCw7QCue86GtDh2wPcMCR5zzR6usTcZrL7nTFRoEkeur",
  "key31": "2XCTuP5Ui8UMYYqZrws7sDTx7wzz4ZUVqTsroXfhbJrmLzVkvBgGm9yGyKAZdSX5z1YkQ3WhDcdxs7SDszhz7c4A",
  "key32": "pgX2nr6WtQKScFWAqBcKcTgT6cYqRHaicggiKkjzCz9uis3qCPxJuXqGTjxzDyGv78RdyTqG5a2dafgSLsPggKu",
  "key33": "u6DiygXHjporpB2d5YwxfA2zSiYHwHQeDM3UTAP8eq55htZ86mcsLhmSEVBhiqdhCjgSZ5iYBDMwQ47KrPmvJmW",
  "key34": "38gohmaPQovrpKRSygv8WuUqsqK4aGPZmw7cnNXVWpVw2Ceay985bfjc752wsqweWxM3D6TGGwM5SzD7D6Fi69hd",
  "key35": "312JVmmLTN35v7fyT3ccnho1EDiBXeK6kVcDskdESgYbpvjaSREwsQeNUruRGJFEMjtDsmkyf6zfkTtXSFGwVfJD",
  "key36": "38toDTt2hRj83uQrGu1EUTvnBJmMhiy9VSmBVpYEkifNyQRPn5GxsBdzEX8HWwpizuy6r2kpeAEf1gzRbvGBazjP",
  "key37": "2Hu4VozjyevY6mqNEsNKj6id3yDsXzqfvkRk8ivLLnie3qewq4GVwz1et7487PZM6hDHKzXQaQVNT51FxT4NjpQu",
  "key38": "3aVJBhFw892qyk9T83fNuAzkuv42hsv2NHuXSTtHJTGQJGLeSFd4RbuTcFBdcJ8uWM1rX4i4TjzEVAgtg2yWeAUi",
  "key39": "2HTDNwxH55cbUsgsdwv3TUMwHBy2L1HUpj4CALNUGo4vExRxnVKgR7sFiNY22zwtxByApZ3mSw6E1grFacGC78x8",
  "key40": "2iosX2BaJDXWXz7wbq7iMi5HAJZQUwFaSRFbVUhxi2Dpj4sFPMqLr4iMxaEiPFW5gcMhGf6DJmoXGi7LV51cJq2t",
  "key41": "4YXD83puC3CcsADrh7q9rmYP2oUaHzGTPyDgRXXou1dxLLDvCgbhFZnYxSYDre5DLE9yVwepPXgyeF1sHVEnQPpp",
  "key42": "ETUXxQP6SgFgweSXpoy787n7LhKBBixbp1HzpQjcr9HTo18FXwJ2X57Nf9nUjxCEF2avaWNXhSX5nsXKx7MLtD3",
  "key43": "4WcTnXd9BB2bZbRvD67jzShYaPCBCfsUaQFxTSw3hcLUBjgiLk8gqM6Cx3ATDYLS9iDeCKKW9w4c5eLaNqDEdSxL"
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
