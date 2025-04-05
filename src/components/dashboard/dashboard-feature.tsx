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
    "LVfooktc5zHSvsXJSMNztnJq8P1jNtQL8tpfMDNewyXQsC5pwuh7x5sJuWYViRk1tggiuX4u4xutos59YEcYe7Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pY9LuPHmcWM7sXGmTDPBgsadf4UvumFcyXZ14dXcFambLuKp8xnfrtG8D54Yo3rgemvvfXWj2TG4cNta72Fsi6u",
  "key1": "2ZipCQE8C4LAi4941yt5EGiVUGD6P9M2Rn1twrjXtGKAEMytKGKMhM5Q7VychTGp46bmT4HF3PDZwkPneWmj8uVR",
  "key2": "3fCuwz5AAinENLqTFDP7xruKUwc1jtKssCyKdbVkxhGk4bdS9dC62qT6J9MgPt7gCejwTfXtx5hUKdeqrRjfxJDs",
  "key3": "2cW5zB3Z2P3GRedyhMBe6yHPHwaHeaTgRwsrmGmrh9uQcheQbbG6eL4QM9qMrisjcSugamzBTFmQXBmX5PmYHiuZ",
  "key4": "4SqtbPu1hMBD9bCJPbpGPQN8pButLFpvdAeioTtxouzJ9ALbyVquyKGdnbtbSjMeCgyTuYESVDh6eo1GdntUxXPK",
  "key5": "R3AjYAV1qoGJrSzvDBftabRBFqv2sRPXagteqAGh7mUsxBaKYPVx3QUwhNpxzgPaM3LP9HqpUWqyPKdUcnhkDSy",
  "key6": "KxF679PbzATZh2C2CRAkaxkgx8jZCo47Ee9WGXtC9jF1GxzQ4P5Yc4EdBG7zpCQf8XzressJRzQgXWcoRJJYdcs",
  "key7": "5qsaEZyZ4WAH6pAMgczAKLUvH1u1BH7YfQWUrryD8jTpHp7Qio4p9oks7XJB8LxY6zo8v4aWKaw1TLMG8wVQc4tT",
  "key8": "5ASEGdbF7KEXfprsjovCaCkPa8LuuQxyys4sC63XPvyXYxFnX3YnWAonfkE5FU1xskFzhpiBukwyhHWrXV2QfNAg",
  "key9": "4QwGBnKGosMU7rQK8cX6H9iHGDYHvuk9rSG49Q9ZHTs8695TnizfnQxEosKBsfqQoviJWzyFtyakb1MaWEdNHaXm",
  "key10": "2Uc8KyWoUaQd5QEVeApCUCSa6NMLbLL24LY7PA87EGxeSH7Akd8mp9mBdHtfZuh1DWyacRHECptVQpAYMrzXVAyz",
  "key11": "45pK37aVpDu7gh3YGjJTsWANMjm6yHGZwoyB2kaRGSfG8eT3PohjZXXGizjmVC1r9PERHvbwoYkaucyHyxKAUahS",
  "key12": "2M7kHAB8KG8uMcdok5zAQsoi5HxpFnb3Gzmezh9K3bNET34yyiFQA8gBjVaTZdJa3nX1iMdXFRPCnz5PLCAiA49k",
  "key13": "ZdmWugyv2zp6uWmqMpZ79crVvUF6ZuQVkUCN3Tp54qfeRS2gDTXnqarpPkVq2DuA7d8F7w4Wt2ChHnFqyefiGMx",
  "key14": "5Y3joBy4xxthBdSjgxGHb3VuaKMz3hZCmFCXfZ5UpgaRk9FYvGh9m8ricexRd7rPohN1YKsQZXUx4ByR5qCbEs7d",
  "key15": "3MMCpreSb1zHdSE4bwxe4ZbfEa57SVHd9ZBKy4xTwRU8bd3woVrVYRXyTETS8jfiSsTTgdiaxUhF9apCxPRvPsCU",
  "key16": "5NS3KHprydSf9Cx9oXzF6MViYTuYHQccNJniqkNp1zzVAsMR912NGUQ9FKczenf7N56ny5A9L38kNppBHNmzgguT",
  "key17": "39sYWTi7bqDg6zaozFEFGDjYAKfR12tbJK2HUkTgyBFn5g6Y6qh8jTAJFdVGrU6T8euv7VeF1SicWFXzvUEfHbNu",
  "key18": "3VecJGFSov8fphtyr9NYWHEKTnrTMp6oJGPgR6vwebhTGarWYos25R7gwMFZFpaxh2FoEu37CvYJqLn79ZWkKATm",
  "key19": "DvkNSdsxKCTU22jBgbDxvzVwr9JyT27MnDzAgNnSr1C7MTe668dx2qv8SgxT2E89KE3LgYhpjbdPaV384yWzot1",
  "key20": "3enACoVqwCEeMa2Zg7gaaarAn8odbavMmgGNk5RtmFxGJJvqEFVtcy52D6HLUE2bpLjF6yP5dQh4hBX7S2nzFxqn",
  "key21": "2a4NB6jVZUK4ej8GFFCPAYiMgp8NUpWd1aJthUrv1KGM2jAHKiXaABHs9pcHipYZ2SZ2TzWZVTrmGYCcVAk7QzYu",
  "key22": "4ZfRmsN8aP4yXqqyCrLaWCx8vt8vb84aj8Bo9zQZa83pUCQUtvPyZ48aQ42SA63bwwuBTMV89HgRv1Mk9g3JsSdM",
  "key23": "5MFvwsFXm1dzFPLd25nwKMmxbEiKx7gD5WEFu1oVmYudehH7FyoLf1HSYP1NF6w69bkmiXXbWRaEPxwJspC4XjYq",
  "key24": "PEWumUgyE7TVVuHWJseXDvwf8xAK9pvzp1f1jB3Qd2yybhDUZXesD5WWxmwyPuqp3MipaSahaJNkmsDqiypTDTb",
  "key25": "65fX7y8pRHHSzuZmGpGX6JkZHmXN2qoZUyhFMWzRW43xX9Dz8GtqcqrNbpaDKji4Td4F1LtaXi1BohKMbXeodgfy",
  "key26": "53M3yaXyNHsdY6X6Yt2WtjLJwbZRXc5ne9iMYRXy53AHmfMrcjRn7Np3jmsN68hJoxuNhKudB9dST9JEu3kzwjyd",
  "key27": "2z1Xa3dB6J7JN28yKW82ywTBwWNFE3yUN8GdfB9vSFRmMW9hnUvMgLCJGRGudoufyCwqEpBcK66xSeEcno1B4iU9",
  "key28": "4S3QyksdicVCRazHDEKE6BQjhJ19xAH3Ry16fy94zvcbd5WXDpG7iMK271hvNmHyNAH2GLajPSuhz82KJkn4qRQF",
  "key29": "4JNFz6DADsgwrMnb6YiNzvPBbZ7r1aCNNemboFtKd92TzPvXLkkGnZNUPcFkjaALHvmwXrxxV3acitkUBDQ5kiNs",
  "key30": "4Pbp7BwDBR8ntteQENaxbD2FdXoNWTmCQziSYNg82rySuAcvi2w68v98NMRjgw5x6DJqfQKHwJWE97XXMTzwCSqY",
  "key31": "4VS6jGYGpeAqX9ovRaBALRESqc6iGxrz5jyS778ycWJUGzqXXs6q7b2xsRZZqaWMBayTsJdvKQHzCp7Ak2LzGYmz",
  "key32": "dirz8w4b97u77WLzxH5RQZuQP5RdJqy9B9f3vtByiy5oExmuA1zHzAbKpZxKmXbvPnjvd9qPrr7nUNyDxY4cUUM",
  "key33": "5Ye7CeSgVhCF61Xugg7ixHJTk2jo7TNEYPC2iKpSAwczJYFaZR6ZfmXr5Arf4j4rJScm3PdebdVetxXBrszShv6v",
  "key34": "LSZyGQRPKnj8g7mso5u2FPxzMYTrmmmiw21rQENxf7z5rDP2TwBLm4vpWHzesWP4ju3PKsCPwfKeHgN3GeMymHx",
  "key35": "5iwEyoLWurK9iRJuYNvB5UpKcfSiZTXX6wPUvAZtMtbFFDPxW5Wc8bV81UdFyxg6zjyLnpPCQgWyLaNSwb1KDvfK",
  "key36": "3tgyR1VR6SEmFXhkNzTpbiH8AxV6mJLGxw4ztkAbAaNsBvorodgePYkxrbeY9ndRUeuE5pGimsqGSo2vDj1TdV87",
  "key37": "3cq5HHXsRLpVPaMD93RL7ARo4U4hvZvXexwtjYMqrEsD7EEjeFNarBBu8xdb6kggbAC5detrbkoLRXdCLQ62dzkV",
  "key38": "2VjGarPWSEcN9ADihWGpJZ5zdmB68S8jw79N3FEb4WPEpcy84JLTtAPfTVNheWsURspemnS9DYP5Q3gLvvNsoFw9"
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
