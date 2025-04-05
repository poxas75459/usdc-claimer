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
    "2URqmPk4rxA4pynhgTXbzpo78btr2kSxHktKHQuqzCVEHy55cTuMLeRgbcPK1yuDSnmdJZmqYm79iCyS6U8JU1zo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cKmo8Uyk3wT3JN979v2GLcFqo6fVvcmr6CQKDpQtjRos4DuVD4VXyfLmKsENaCU3PwNbfLUMgXKjqLTqZcbesKa",
  "key1": "19j3dcWZWZ7PmQrHdqy6efsEbZ3a7EeLdKDi55ykXzVhpkZBNvLxEeWYu9XYGfrQwXCbkeWhC4o8fn4DSg3vZho",
  "key2": "5Ej5QdwfQ1kX19STyGowYa4zyESsMLP4fsbQRRKhgZpbYUmkkUuz8A5c71HQTcF8E879iPExTFEFzmbYpcnF9U2L",
  "key3": "FUF3i6yc6Y8qnYTK1QdHXnmsbxoifwuaRHPCT9SiXMHErgLFpVtzZwYJza6cHj796rVCN7fcyuPDkrHjD7p8XJL",
  "key4": "3GRtRDUsXVeEHpZJCWsBgGqGxGuecGjUdWfUMznDTUuqykxexvy4xaJbJTD7hKBUV9xSkFP4TYtWZ4CLpW9ZSHRH",
  "key5": "VUkgkq3iLpspnq2taX2yF56SkdctFgxsPeSdbh88wHyhJkdvqzaUaGXrcPrjv6dUTR6CpFCjTqJFvBWkn3iFxrN",
  "key6": "4c1iTbEfF6uwfHvr9xoFvoFgfNDwc7vqPvoCz2AuhgacRtyaYrQVfy9mrdq2AYsUVcdPnWqhaTpggR7hqkBiEh2x",
  "key7": "5U5dY4kHs9dka7c7kSi1B1p8Dm8dxPLYKwezNU8uEabym3Mg3uKch8da7xdQCz1q4Mhj4WFbpyi2LTvUYWPuPmrK",
  "key8": "5iy68PiVVT5bTjQahkiM3FeiEyWAUR6DRFqbMyGGG8r9oDf2CK7sAPqgXun3MvTgSRFwCcD6KtpFmufjnRjkaeRK",
  "key9": "5nGAi9eyEkXmGTEweemHGLE2Q7ZuuiPo74wLsBwWBBdFCz9P5q3dDdwuBMZFw4zzw3o91HWxGcBFAvgW2nXTwCse",
  "key10": "2je9X2hU9pcQdWWLXzzY99si9t69teG3BcUP2ZKdLcC2AowYHmPz5xvxkr9piyxGfgX9RiEU3ycWQbPcXi2ssGzj",
  "key11": "5Ckm8bFF83p6qQo12AK33sBvs1pPTkSpFGSkP1Xb1KU2UVeo1sgDs3eUViTR3CkMyDUzDR1khvNXphmPSHGs7Y5e",
  "key12": "4Jjca9xr2YYzuftEMra1iTg3qvx9jhxMP2uCjoa4nb3GmytPCEkKWpGGRDaoHMZq2zPuKh4siYRW33W7Hn5hxoao",
  "key13": "3zbjafFNjHX139ckNsyrGP22djbRqtzyNv21i2Wfip8K1ZgeDK5tRdkF6k5a3SCuWBAZgUFsYnsN8Vd6FyCx7NJG",
  "key14": "gmZPMmmT3aBTNuTTwFE6Esf6SaE7K4HnuKZsCHzJ5vXFX8gyuG8HJsMu2eW37JVBQUb8giib8n1cPDnLBdzM1go",
  "key15": "3rfcBbueNK8VLr96donMdRkocz3CNtSsWuEioK9rHSt3nY3E85gChtnDPHZiciQVrksU6fot7vLsKF5yyPAs191C",
  "key16": "58RwENVQ7GbofpperkNswQ41K56PedouTzkBWj7m1PMYhncNQo3nKQpALTvGfhBBHqQEXMH4y8KtaFv6zXAB7TR3",
  "key17": "4Fe839bRkuSmyaccMvErUcxH3gcwVemEkJDNFAa1b6ULgwbWCGxGx5hobFsgsJjXnLJmvmyo9Ez4guSPMjnGeGiF",
  "key18": "25JbaZZVwBYXZHmHPJie2Kue2V4UJioWj6eNd1p4mVsYnviawTD6uigyZJpRQcyB6WSuwqppBkJkwpAVzzmnhPna",
  "key19": "yR4AuJrrpdGoYJhHB4oGndwZXnbAkBBULFKtJKaaindSB9oSoryvY8QGbfUo7dMM7z86Ky5TnZ65WrY5ZEc2QMp",
  "key20": "v9q29s8ezpHKyNZkXjzuSsokjnmcNjaCd4fkW2qTtKCumVpNqFwWd8Fu8ywgDEkiVNRNmb3jvYxT2HPZE7DoGfi",
  "key21": "2KfRjwUQASjvLpe9NMYBphj3oPfXkq5ZZ8LM5FcvTVcXCoQeaVtqPRsNwmmfAVHDbxkP9kez76AddGA9J6Taka5e",
  "key22": "3dsxRYENTzgpybBNEeUKPvJnVVsNCMqnAr8q6DffToaAqKVjU9XfjcYkg4A6xvaMHM7vsYoVzKHWxz3XZY6yAYUR",
  "key23": "4JvuzQF5K9ZKfML5Woi3boFMf7fUbh5RmgVPR5fAAtifQjrm1af8JHdFajMt7Np1TEKQvyqMZ2ZWxEfddpzjMGyf",
  "key24": "48vJpwej9FBvp7YduSa3z6dpXJRPSqcnsVKtXEJSgknsJxcvUJRZvg1MJ8GafqUgtaNnERvoDtQ1qBasukVSDgnu",
  "key25": "67LNkQGwP8KRgJVMUZamCcrhNNd3as1e1tMqUtta7ZTgs9zR3zp9s4kjjdQHvFjEWxHHtsAXcLn8mSmMJJaaGT2f",
  "key26": "4Zo9Kuznib2AXRXgTUEd72Yk1XPBMZbkKNAkhrz6Ezg9kyM5YN8xntEwiQRkk6D9wfxTJsYinVLb7ztdSKzQUZye",
  "key27": "24n9gomyHm5sn6gNRkdpwXikQkgowBgF4qqCvQmQegFsnUxstKJ8q34ssF3qmMbgFMRCqcgDLFSNXtHWbT1SrdTn",
  "key28": "4z7wVfXWwPqpbfP2RVUZ3jGbWAdGFWnx2VDxR5TYBDxwpjRw8KrtUGeYKADVQ3busbtnNtFjq3ZppkYtz4GCoC8u",
  "key29": "4A186aWUpMcK5hn7MthQA8c1aYAMERRrW5SzHx5Rdmoy7iK2R2ZqtDjNk6MeuqkzgaSibjoVkfNBdKox6cWPiaaY",
  "key30": "2cFDP64MaBwQb7dzDDZhNf3ZbzmcpFxTwzQWQmiyTfKVZTR643voqca2XkhovSsrMV27kLzSJGGq9iN9wjWTxybe",
  "key31": "4ycCFyDQFV7hmpat2cKn8gcD347yaEUeFFXws2syVJ8GYWHUDfUekHPhtMYbtxwBUaSsqH94pCxCyf1s4QfAe83r",
  "key32": "27wjTAFdYgTpU3MmWFFbUvAytJfbqk3AKNeZkndSCCy2BENLH962yK6kGVHjca3cqgj8iP5kgHZLC2VfwTG1ebE2",
  "key33": "4wUbjzsevCtEuoqhuXt4yH5eJ9AWTG1NxHqEftcBieCS2a6KRubryu1uHS3BUviwpQ9d9nJ4Bd23Dx32WCeo8xwW",
  "key34": "67ifYJpiffcKN7SKsqBkRwxvjat48ezTymhZ6WR4n5QS6pRqqFvY2hB26ixYCXEDkp2sjhwbnsL3Mmg97uWtSJm",
  "key35": "5T7Vpma4ZuG8gBDtdvxqzDawYGNVR93zYEbfWtakwvqDnePgrNTmZtSTixq7ei2d7NrxvvjWWMKPjFjbpx4RYZJ5",
  "key36": "3tXVAZ5s3NaAXezo1KdqEiFjqY3DZsgjGfr6VEMH63zPTphmJ7Q8iLfW88cGmNdAwWfCfDjTafHY15L81VtGs9NR",
  "key37": "5UFo4pRna8qRDbnCpMWqE93R6FfVCMUvTgMBsd5iXsGAXHWa15TpQ4p4RsxA2Wg3zVE3smsSRJzqwAfkrEAwt111",
  "key38": "5eHAymyqyxnGhmPbdHVDp7wLnri3ukA95JCugBHyV8MmgyggCybvn6BwnzLnMjcR6j1U6JVLUcywuyUCeHJnHB3z"
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
