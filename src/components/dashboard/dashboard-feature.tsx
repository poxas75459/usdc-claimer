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
    "5JP5zokLJiKm7YCnsxoA13uhoVYppPLkPqm3xRWMqUtVQaYGu761MmpspEfHB6Up5xMGYtUTfzPcDdacBC3TtJJj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GmQoPVbucafmX47SyM1rNczrNEcCHGbzaenKL74iEVoz8XHcAeyfyCe7uL2cPcg5vidKihxLnVaL7EDmoa73gAH",
  "key1": "2P1guwKcs3qM6fgGEqvthiGcRDxHxGQMHxUnQM1R5zbuxge8CPSibdzP4DXihRDDLTMjFsa9kwPv7y9YjXSX9mDz",
  "key2": "4LeHtd2fFEQ2qAa5UPyXxWaPVh11qFuNanE6XddZ6aKe9xDiQ6VqsqYMQTTqMCHV8DpD7UNPkkKz7CZz9nLe4joX",
  "key3": "NJ9DfxNDRqnawHULKdJcftZV9bwawwgsTTFKoTsNt1ArYCpaKHw17Q2Hu4dzPmiCA5iLghhdSQemVb7zNuNAyGW",
  "key4": "5sLJsL4fQDBs5tjVgaQcAsCyAAA42puuDWXyzH9B8c8C21xW7qsKbWdzvsmEQTdJjYutWQFdhkBEZvMVgZwhq4Aa",
  "key5": "hqoZjY2DLXsS625kfdqU838ThH53M1QHtFnWk5qyru2a7azspWDw7cKcYRkuBgpsxwjYZW3PkpU42J3BijwgJR7",
  "key6": "4mmvMaxj7BYidahcxwXw124ZqwkZ24GxUjLkAED5MvviRCuM4XWVgA6YE44UaCZTMGfCa32YjPMjnpcSQNWqzz6M",
  "key7": "5MC8qwGxPn1XucrnhnRqUwAX6kLmAPr1Z7FmYjuGd5dvPMD352R9hVVddgPWxi7G746RVC8mwqf76Mbqv4N7Ud8j",
  "key8": "2bL39vzBG5CdFK9aXr2dfUQqC58WPYxwkmiw5ZP6bW3muDuWqDM3u4t949q4pzFfF6sBkgnGpAKNpthaQGokyEHp",
  "key9": "3GjkfttUzYuKxycPpGbJGRGZJAGstt4rGuNaAXMDFYg5yRre3DwYLX5FiTMkV5wfUtmHr6Xeuj2Y4WmWhTwCmQ5M",
  "key10": "5Df6Yy9RiW4i1E9S8atpBMAVLBHYqs1eTDzcbguDB9Z1KCMviV8x92PY698rH5wSrP97jffPUbnXeZasbEEFDyBQ",
  "key11": "4KzQ6WAgqQmuPaozS8WZCw1XAso5MZZ6yF6n8nHCJ8HLkrnuPWyt1J6WzLKnCdrBx8t1sxKHoiYKh6M9GCeAH5M6",
  "key12": "3YKEFNtW3Sh4nLsAAPtagDKRCuYJsE1XVgB9iPjhQS1YA3UbCXTomeJc8khzde5hcGgdwYK746dGLjUtojSGC7yV",
  "key13": "4dcdGnQdYyyHMUhs8fGeMwYQqHWUPYuyvy2DahmaoLkvBWMpz7pvJWCJgwAYSepxRnuf44B3QeuyLByYc23rzW4J",
  "key14": "5YmRLWJ7Mtr1XnKW3ovrYJgLnaNY3iaVbTGydnhBpiJ6JmMVuR2nBTdnCmZGX6jZ7qyboAQRZur2r7tjchWioW8T",
  "key15": "3bx18PEAXDtCnp62nm3XLQ4ZhHJCJKcDY98bzUevk2CzL5M7Sxw9ZZDt3xwgHxDKQnEGQh9dLFWLkEerj17KUMqN",
  "key16": "2G3mmccchmR5Y9kAEJTXQe2njKuGG6KrWpXvciTxxH8RNd9GWAcxNTPLgakzT2nDDDeRoJxr3FsM2F5sueqdMWgy",
  "key17": "4nXarFTeaCRVf5tqYQ3kZT6wLpZCXEzaRqEL1edBtWT8FAdKAfwhxcwv3WoGEobmiANRi3aXiWWxsrnV1mrnH8Hb",
  "key18": "5aCAtQy97KQ5StCZQaMvq7HN4SJo15BeWTcQZ9tSpUWW9oVkBjDyUR1kWVDgFgykD7YFCSbdKCEtZLmpwcmF1KBT",
  "key19": "4So5dZ68VP8x72e3kCg4asNsiNzLJ4g3QGVbxD1Vg9BX88C3CMHbWSTu6nkC3Eqo6McWivWMHpSnbX74eEcZF8up",
  "key20": "4WVt4RyLRkEwZiLVfFDtov7UgzUNcmFxyn2cLqR66xNcvcVCxHySgNBa6XCn2YQojRfgTakoCBL3MYswG2pY7HP3",
  "key21": "2X77VFSXG9kFLc12jwq2pfr9uCAuA9TQFchAibum4fekt1roHq3VEBW2rSBAT7ppKnJwb4asrwvUuyRBFGhn1n2t",
  "key22": "HmpAx5vsRALX3x3xcEX3zZ2Er35A7CMyq2s48UThMHBG1uYLU2X8qHoBPU8ZtnZEynSSWajQSPjNNWSipZuvTYz",
  "key23": "2HLPTvVgfVJ7VqofxkHQVtKniKrBpFsG4mGteqp8FbWteTGNKrdL7RjtXedxj5aTpMGtKnPU1rAZP4EV9JhEE6cA",
  "key24": "4VVpNugK5uJ1HtCuYx1ZCxKn6UhrkwbLtdMAosEqqRCbxFAqdSDcPZVXUaYmbkFgD4zsAMBGUDM65UZ7psdRAsBL",
  "key25": "5ef3CP1dKcs9MMLiEWbk65MjyKqqx8PP865gABH39wCeYLmTBBr7xJYNMPEcr55FYA2XCCgyy6rKn89JbwcgzLND",
  "key26": "nTT5hEG7T14E4vdy1PQiwsTqVUy6rP84pWEBquoSHWLXvnpjLFio1aqBBdCbXShCKJwv89p9gDGgMZoQhvsPcMu",
  "key27": "3dLWdQZWsPnjSJPzjeiUyLBcHuCPWmZ2SUWGFpVxEWYNgvUymxNVMsRKrZQfLC6WEZj2dRq4JWKke4Xxf6zCxzQ7",
  "key28": "32xc8Yhdhct19hGBR2eQDnGcYVng3WU3yZoFft12Swni3Z9cAmvJyiUUc2THZkVNrbbeVdH7a8nKFVk7DGvwe3yB",
  "key29": "Tx8s1uH6QtTSyHZ36vYEU2QK6kCYYUfrVpeDroCXRA61y7ZaRuT29k8ohWgWrDfixoE8f7Hb5jR5jnebUbo35S9",
  "key30": "4NNDqDPkWcksDkA4gAoFzwVjXP2ttbq6orwGWXTFvrWmm5cYcVZsNKMYR73q3oHAv7NKH8Hf51XdKwhjatks7qv3",
  "key31": "2gkuQmijGsPkZD9hckj8CzgPeST7fhf6kg3twMNx1bqEDvETDdDMmJCBDW5LzSPuDoRWJnVE3UQBJ3P4LxxYU982",
  "key32": "vsMhPJ297MrbUQZy5Lp5wNMYdSRJr7x6mSvWF77Tt55boNp3ALjQmJG3Z3mXnqxZJSa4U1ci6vi5uvr3rWa3ugV",
  "key33": "LfYGEuKJUQwZRRovmeRg7qC4c6uzLFAnNqSkeXmxX5vQnuF1z26zFUYVwCXrWh8nkWUiAEjqUMMP8XSpePzFBJE",
  "key34": "2GQ8teN5PketHVnu1n6G2n5Nwpc8hnVzQnNJMGqKbLzHfNwgSGHCnmjSrQ9FGvwJJbHvGuL6MLB8ZBFzA8DhmgfL",
  "key35": "5KKy6XmwB4PvfruhJfmMD37E1TsNwoGmjjUh5nWWTLtnJrsQq1n3QC879jGGXXacAsjTBoyA2pqHNeNqpngEb2jm",
  "key36": "2fU1kMTvKkA5zBkVkD5RhUnd9oWqyW39Ybgvk6iHPCNyEbERQG9GwEz3Xr4y66DXZoTbzBkH7nPNDHWwZ2F545EX",
  "key37": "2F4ZaHirFeLCsbcAivogTuc2zqr6nP3tUA3WzE7in8Dkuv2kAFtK1Z9Ls4fdRgzppRQ1i2WLNv84rhZhbo4xiyLg",
  "key38": "TGvSzmkEL98YyxGcEnuEEagKH7xg99QdwGRWzwrJCoMBo4M5LQfc1EhDKYPz7ScrA156igYqwCrCw7YacLDYdro",
  "key39": "5P4baV8WxQEhfiP33qsBtqnY6ZJjFVdLEYpxLCaiuvoqioWwtZ4FVoaQvtcMgC7gLkHEws8XZr881XtciDDZBnE9",
  "key40": "2Aar2n8vNLXzy5tAJ5hbj1LnFnJSCoyYvgGiB8TC4uGSpTirpQVsSdWa5tDZn3LKeDFmSEunTaHuifSYwQZ2w4FP",
  "key41": "3rzuYjDDiBGLtqNCRCWYx9oGBznu7Yg4CAznnfsnfnWFoxAX9QMaEp2j84CEnPr31qoAqmVEAPMpoSrKhwV2FLnS",
  "key42": "X4ysQ2pEsJJoxCCYab36GjQFQnWUZijPscmeq2FZLTCXtkCfBJKn5KASxtR5dCp1TSvw8Bbgcu8JxmRQRzhTk4N",
  "key43": "3LFpzqrkALtAhTzLjtnyh7CPKfphJXQjTgLmL6ei5EauGxWq87GcwArQAjMGZpWNzTAwDgPCYjW4kHL7EQ7mpJ1P",
  "key44": "3jAcQ8oXsNesGEACgRJ2W4FGML1Q1fQnBmWZzhfSfHCv6W9b9y7CKRzud5GEym7XM4xhLRRDumaWyk7xt3uGrPfn",
  "key45": "42yrxKkFw1ikwhRNxrf5nnpF8FkmCS5FsKsQYm25DwS8C4L4p3FKaCSvQ5FPkdK4FWjLXRXMQscHFeAsdCKLKv3f",
  "key46": "zUGWQ6ts6yQeiVjBTpM5hhttCHV9fqE8WgVtouVVeHEC19xHWpFD7BNSEfFKgNgPZVWZQt2UEYUhuF4zBhAyD2p"
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
