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
    "5XgvfXCDykBT9Gxguu7fw1PPLUk7AV7MmubwS9sh1Mf2x95q4ENo2AZLdkAWwPW1d6HJzY8FBt9S1xn6AAL838TK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BVyt1tNkNsDM3mHJ4W29SZfzQfG8KCsw3u3KHgDzunku1ozupMzyFiPDb599PAS9i5uUqBnect6L3sCUUq8NXkh",
  "key1": "2SVAPNcJGnbvGHNukMkmUSvckYt113AyJ6earyBabgnbFZDdrAcfmWE9URYd8xuL26hJdEK1D8NjHTaYbsRBvtn2",
  "key2": "rx7ZKv6WemuGWUQyZNtFfmHdWawaL6vPDfTSE8BKz2FbJZbrzCHYwPn3Qg9Wwb5FzBehxiZ2gt7W86nYLYhtsQP",
  "key3": "3VGVzrYqK3atnDn4NgJ3hsScwQLwimS3L2ME7AEUwK6m1sCgReSWbF1YjsPJtk1Pj6E6UuvtyAgprE5K5P3tBch8",
  "key4": "673qRQw2kSh3TKBmpx7AS5nV9VXtGCnF4BEHDuYW4HHAF5ytoHKotCzVzPiPQzamo5kgLNLSevZBezZibAffY6ii",
  "key5": "498zRyw4PmB93ime2KQZ3YvrYeG5YpuD67SHsWoFPp6BaaXCikXJKRHaAPbxpE2pbQWkD2GKAnM4dX43NT33Ba8S",
  "key6": "jkxu93Jj6kT9tGLS8dYdMYYuUKvjXgc7svDWDgYv8g7KQ3A7HcQMiTNn5XCZ1w8uj3utuSAiNwr67JyLC7o4vaN",
  "key7": "3zNuRiDn21kosDaGoAjchKygWoVoH3EocvNCYT697G2XuYZp6z7QwChLeoX9SuK7jxbZnoHPUTG2wj8cKcRgy6jE",
  "key8": "5nRfDpoW4sL9v42PVTRWV9Mgg1pC45PgFMYXYhv7shRCMB5u9BpC2vd15fPSSJmsgXvTXz7x5TAT8QxwJaM73Pje",
  "key9": "ayTknAXgUcZRgenBAD8bqkDPeFacJikcCP1sLRL8EDajmi9ZX65z1CwDwigb7mwg2YLhyGavpM9P9HdoBHXBBTf",
  "key10": "EoXXxwjvPyrVsxwA12pLJzhijyEuChNZkWiJUq5wX7qq9yWKJiZVpNL3JtMyiRFsSTg99TkEFa6wds3NEC8mz2B",
  "key11": "2twCpiPJdfgD3T4Kw91gx6Q42iv1kt1AAxFLyUi6Sn1xa9hS6ciWgGTr87qnEHPiYrtkYpEyLoia5eoFFKGYLN5g",
  "key12": "2KFQbemvRedZ3RoCoje1L4tCWGU5QnN39sEG1vdzvK2AUHRY4JE7DLiVNSZBqSTD5qV3Ly9w3p8ARDcyQr7YTwkV",
  "key13": "2Wxrn25BFxZXKLjhjKgBbSvQzvzYMAt3yNvh4oqdP7KXYQuHLnLocuw5VWx4p4MaZgaB2ZPJ4AMbBwKZwAgjf4Pg",
  "key14": "2SPwzY89qEmH6vGsW5ufuwqRSFTwaW9x6XQzV9GSFdk8Q4RYaMTVFzmgrtAiBRoSCSfidXE2zEBKBPBT7CWXub7C",
  "key15": "3XocjqeVn4iaa9zbgBDzYDMRrHW5hLrG7Vy1REecCwkpikitzsmTe8Yd5XkgJWeDUvggicy9UQPCRY5SznaVBxuH",
  "key16": "45V6jgSE4dGkgUwAtJf5jjaWhuxoqSr75A9VStUo29pcEP75nFxJuhTvnmF3sd3fFWTC6UJjzWG4foyY6dxXQvoL",
  "key17": "46wdjF5e9yx13sgfDcPGEQ9Zr6pCN2cUwoUpfpuzLwPNdrh2D7tJv6PHNfFBNNg8KKuzth8nsvPUqWsuesQhtoC7",
  "key18": "54EcgSRttsU5YL6UdwrX2iJCBXjaMXAAv7n1Y653BGw36JKyxK4cA7PNwGtobAqcqWMwPN1CmemBMqXrrFYqQfn1",
  "key19": "hQKEUenmYrRCDoKiAcizSh16nVUw5qPnebzfctuvJT1d3SQNVMi2qaNtmvU1Jer9j6yQhaafvL22w3b2nEE7Z1s",
  "key20": "4Yy5E5DE45mamiyb75ZNYbrvDc7TtZHg6LfKud6perKh4h8BzkJzG2X5JrpUtZ6jL7zgecC4s5Gm1hjfsVtAVSmk",
  "key21": "3S8WJgf7iC3uBSjiNpbknvPBnXUTscyhmt48ZmacmhP6F6tCnzYCHMAYo9aS2QWgQRQyMiqARS4pBwG7f4EMjncj",
  "key22": "2bMgYqvYvniwAacUunKCbhaTuJbxLv2atBK3eUWUck7qcj3turhbokP2t1AxaN9wLq67kN4uB2AeELx9d7garKcY",
  "key23": "4tXgZjq97PUiq1NPSDUSdGwD5C2Sunb1L6cte1psW9fxboMVTsqtXBMfnNUN5GJfL9K8jAcGTtG4xmX2nTniFcD7",
  "key24": "568No25Skie8C9kxufZEogDCxW11FKNxtkmuVsjpnavxrPQvyr2jzW8QQrcABaJY9WbynVkA3HeUi4UP617oXrHP",
  "key25": "3zzg5EEtXF7ZknrTBmpATHVrSheV6JUrTm2PPiScZr3pnNNiiWKpDDN7ZsiHzbaZivnPr9WqDzj9LiX6EpdcbXfr",
  "key26": "321o79wBmTpbfMGba6sAhtu94SJJWGSsXRkDZxyb6THysFbWrJruDE3fBcDeoNu62nFGxUCskfPLotF7FpwTmPJA",
  "key27": "5BPBo8zvGJy1hUnd8uHYuERXocDTt1qCVQfAMXVbr9h3DkvPEjj5kZoQqGsH99owJfLoxZSucuLtVcK6ARqkxWN",
  "key28": "3w2i6QgCs9Y1yfUAAgxoVay8fwJkCJXyNxFhAsUWpBpeM4ZhfocktK3MU91sMvN29eUSheb36rSkDqDYw98Uhymo",
  "key29": "2pbKGTa1uC9jVss4F8n8tGNSpVaugkcFU31H6Su2KWt3H168TpSVTSVf5f7N98q4FUEr6rUs1XbRd6wAMoQMN6Dy",
  "key30": "3UfgZA32yPDtPvWAVsyDrZ4vFkmULZa9ahH5WxLQmQQaqXzT7trnfHxF67uuoNTvx35SFnZ43jr8zzSxqXrjPhG4",
  "key31": "3zZqtHWBkLmq8BcDM9CMPL2fEWkRkMxBaHR1s4KpLNyJ8NaDYWev2WBX6nPTaJtdKYAgwfFZPEH5jS6UEdyLmSLW",
  "key32": "53dapmpKdZ3wahriMUKF1XxVTu3x2eer2U668FP3BvrtYpKpHFHzokvT1zxvZsNQTPj6D6WAj6a9jMgfLtn2iQAb",
  "key33": "2DRkgVxWU4i845GXu1rA8vkYLtd9kUMVwwRxXGzp5WE8rYNdR4UzqoTY1JWPApwzBbjUdNm2wrW2zt1dqzDGrKW8",
  "key34": "5ou6p9Mx1MAAoUpQ1vp2urjhJbveYR8QEDGuUFKFpJqgA5NPot3x6N1PYerGxKXLC9a9ufxuCwTT6m7P8gzdWdy7",
  "key35": "3pe1QQkyeDHeBtA4F7CwejjUZEaruAYum1GE1e58GmM4eRSQb75dXLpUgG2AcG9uZh4b5q1RShCs7n3vfQKsCEtU",
  "key36": "2ykosShNMr3FxANB5p2gypywjBv5Ji46PQMsgioacL4xJQNPJmrQvbaUWxJNqEvFGyeSt7nMw4AvNKuX9B9fQ3au",
  "key37": "3xxVG9Xh9pyEbmBgosS7FRa7DfFN3Z5hfqZK7Lz9C2NsodSyAHqUSV1kMtMuvXWYbqvYoVguGCrx1Rs4RVyKiUdp",
  "key38": "2ogEAQEYX7wswENwTQs8Z9JV6zh4q85nYbxFZHKvFU3MR6aW9Ed43XKJWtVzBbbk9csC7FJjdWYJpUVg2cXnGUMY",
  "key39": "5aFDhhzbV7hJmNkZVsjrRrY8FXquLvccRG3EwPaj3BYTXX4P9bsvhPz8K2PHGqLSfQ1LC7FDTB4Ed4MR4TdbsnHo",
  "key40": "4sGVko5JdLL4PG7aPjVYAZApSxL2RL4dSWBr17YhBhWnxq9WPNMtX1XjurYjKyvDeH2PXpkMiCuhnvhDMdk8HuCm",
  "key41": "2YefdACFdy1mfguTAQQLNLZrVQTR5jpP2TubrQsFBYUbmdpzht3NAVk8uWPDnJVJrSga86jWJrbPZN9nzaAvFVHv",
  "key42": "2NEguNkxrXGKonsHJGxYvzQ4Q48gyCuGroQnP2KM3udmGiaJvEdwpvGr7eYbLUwVUUTDF2XqVrdbCjumUd1z5aLK",
  "key43": "39dvB4QNp1Ubx9JsEqSmGH4RtioAWR1C15gsdTNnhbEyLJSaYbCZSqhjJnJKFTLcemVFNW2NJXv4X4idP6mgvMQY",
  "key44": "FYQEwZPZ7kQEz6WJkxu6JP9F46BskGm1qwDZgzeZSt3N4GytT9jryJ13DcWmNUQo2hVWMkFs97TauaNdeQVu93u",
  "key45": "5NdaQEHhK5NCLaTwu4u2q37cMGudkJJWG1Cvbmo6j5cRDFM3YaVD2Hzna431zebYrj6zZ3sZWqE3dHuvPb5XGanV",
  "key46": "3ENgVrKbpXjxZohdDrG4Bh1rrnS57QwUZxUXcher1mBqpV7v8mQhAkYqNTexVSLDC8jacZ1Azgin9jcdAHko9Ax2",
  "key47": "4spsEJzz7M38SZkGBgT2W6ioXLu4ompZgVQ4bTi2qFDSsRUncnVBYDWt6zjAPpy5nir7oKyzExoCcBj1dFm9UPpZ",
  "key48": "JL3SFUzhBz3GJ1qYkKovUSxH6Jkjg4GpFgjZLgvZBffsBU1QctyRbNrT71GAZkXVeCWNXhsTHNEwj7GEM3y3LFX",
  "key49": "4MGi3gZUrBt44fznw2gypopsCmmzb82EcRLD43kXP3qTYF1gxyGH2dyB5Pv95joUG1r8P4dD45zNHrUsPoa5EuhG"
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
