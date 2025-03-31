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
    "44u2E4nxH5qroA1oHFsxgnMGsP7pYzLGcWRhQPBvQXjqx7gBGpzYMknwGJxsoSkzBa2cGsQvZ6DtZ1GPTQqRt2gz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33PMNWBXqSNWBCmNQAhxFUW5qZ8G4bK2FmbQntYiaMZtzDQqFWYzLeY9j1aJSrc9RmNxPwsGixKgeckmHMZkH1rv",
  "key1": "24uDQWYnvY6xfVNu8SNtM45gusA2bJVP5FJPQcrfKEbTbecY3gvNhxrnYxaMox5yQ9WASyDbEqxTWvgsvhqmUCXr",
  "key2": "3Yf4hfYPsia2JeKaK7V1eFMejPid4TZLYq5mC6ZCcGCswnkMixJXypjCmCXyVdsQJCrEzs8ZTwCcnLKFg6HzcZZh",
  "key3": "9qs3gBMp9ASh8keXvmroYPBZY8pXHt721PkuUQK636EaS5apmJthZcrTNm1Q6kzy7qJdqY3T2NGZUgMFWnkCgL2",
  "key4": "2Qsrvm59WDiUZ5DDs5s9x5HWvpqr32Jx4kjC3kz9gSoy3YascH6mLNTo1DSm1Uk4b3KQpsqjkn3LtWi8gZwByjEr",
  "key5": "cA3A824d1RFTFv7kQ12nXdxB88LvkHQ4eqQhmmac4Tpe4gUWNAsw2LSdHtrFDTE9RLiWmvfxTj6869aGkMdqdc8",
  "key6": "2RgD8zJyvpP1aMk3eBaQPxBCJWHnSwsZJmJoNqVMXJsB7ZgBx6fbr4D5vaNXxjcMTRrEmafKUynScfzVEGkwCdoZ",
  "key7": "2PQ8f1wahev8Ve9tBBKnSUzjQZp97gMyNLaMyh64wLAyFjTaPgckBsh1EMJhddzfxai4XvKcwodQNr6MvgKxdPvb",
  "key8": "45RSvT3vTQrQjE6CDeUnAyfmxXy2kDTBNwp32pyQmRfWt3bZe5BxjNLFmuGnzkAKucgoKskShBWpbqCvPiXqKsop",
  "key9": "35JPvy1A5oKRr5nj8vm67Jp1WX7mkfmqVzNE5HQEoqbae8gMPii4TtFDTkBE43x4j55sAAg6GeyCscioKVWfB3oj",
  "key10": "5ZJXgerDoh5nBgJjAtuD1tqUypbatyNAq5Fmf1PQiRoMeiQLjAqEX797rAxD58boZqikoSGDUWzU9FPks64tsaNL",
  "key11": "626omxtSQRAYgNB1zWyUrLP3FjnAsVMWuvF54ag5DLJwNVojVj4McFP5DuZnff1s8paAvaqXFsKFbsMi8qiBF6g7",
  "key12": "4otbo1tpZd3dczwm5eymKAPEZysF7v8UQ4fRBwaEbeBXpKVgcqRmQU48C84wtrpvFfHKkFLqp9NxZjAPk3sJ6xHe",
  "key13": "UxJmbL1YS4UyBubpmmdCNwekViygX9oBHHNiZTbDsf8sSWooqkfC7gH91WzQagugWnuntMC2CfLb7YSPjopmgGy",
  "key14": "23H7e1KRGAuQEDj7Y6VS33c4oMef884ShtmN5A7MFP3oSKL8D1351VDNV8LwLHAKM7jKKp9tGW6UhoBYqbmLUJxv",
  "key15": "5Bh5TQ3Pttuh6DJT8sbBqpKC5HUgn83Hn4t85jUqYrzNbekVDavQVPF2L7j2sTCUCNtfqVCxVcr45Fys67QXUEWd",
  "key16": "qTzTUBnMqrzuBBx8kNeVtQeXripCAT1jdYRwvxtipQY7e12HpwYro9yQ1btPjbBH2MhZNv4iFqB1FeGZjSRBngL",
  "key17": "3GaeVhmmkUrN4oE8Q3MH6dJSz5BcG4qMy8q5MkqzPUGpz1TMjmLjUtHurkaQrFzY3FHdVLK1NtSHtyJs97G9G4pC",
  "key18": "2VYPBRj8odrkZ531QvBADkNka9g9fuFeRd42ZQWzsoAudD3eqngTmviBmDjpycxs8fUFxpX7D36nSqqqV79eUXKu",
  "key19": "3mSHQWQxuPZ6j4196Eq2pMb4VYiY8QpNNQeKhQikyfXJ66igxhKbxcv8it2WRNYP3WWwXezj7raT7WJcHNYnsVi8",
  "key20": "2TA9zUyLwQS2Xm4isE3KdnmFGecriPU4MNHUfRXmx4LATnkyQjNociRxwQnEAAodMaTQ3YVpNrnGYmwEf8hdQZH4",
  "key21": "3dRsmfXm9W9pbMJWnzTniyHzS5ZUvD1fTW7KPZtBTdrFPMXAixGxNepLJ8raGzDDqQzhrW7tpkYhMESkE2wsw8kg",
  "key22": "3XhkeWfy6uuWHcAydPCEGEZpBSWWoVBQvmJM77gTcqbpS3T6qfEWcTRJebwppZGij4VRQkVVKzu2ph1FvKqrM6dJ",
  "key23": "3n9NPzGLwbRw9gGieQ2kjsgFY5MDfo49Rzf8hmX4FpBTPpBQZDk6u5ywH1DtdJtKpp3xkYUP4XqR8rk1bRVWSaCP",
  "key24": "AQPkCVuZnxzjVyXLpHSgYB9Max2QKsi6u8DEKwwf7dhj2uWiL47MLBkiZHQiCriPFXccPsFEGPwKGbNYW8dqGbB",
  "key25": "5UPgJpctNiWM833Zbt57bwAWoY5tedih4PC3B4shf4MTfsFpTSvJoRgUJMDx3yovWRDjAHV6su2bDzpzg4ryCNnb",
  "key26": "2f74RNJufvQkGNKfqa3WTYW4RH58J38D1BadEBBgnfm5oEULU5kQ7kAdFKCQBcf4Fn5T6MV6bbusGPAVzC4GExUK",
  "key27": "5fJzqrVDgxJoQDdcLQLE56LRsLCmVFVXtoMWtFbiT82fCcCpkcSWsbJoXGjyfjqXSoDh8AzMWNV6bmxnKh1J2f63",
  "key28": "2nRLFqJBjAXcYXmFmRxXW3kHw2GQVTDJUbSbv2KsZ8kMi2cJfV8PH8g1uN3JhLPp1DYrqiHY719zcZEGNwaMYcRw",
  "key29": "2YDyauonnRe3pKjxUKKtXFcaiJSDVTzEid1uJMpMbaMJ2qQEaVHtmFLUL8fABDa3d8D6sMPc9n4S3UvFBEyBJe6q",
  "key30": "2RAb6bHtPypgnvSKAdTWWV2FmPLYbzrXHBUme3MjnTXj4S4Xmy2mmb5f6JzZ2X9urLDz32aL17CKfiCeKeGAJZyp",
  "key31": "2FuUxT41EFLrm7w4QMU9soUXMSPq77n3SmRfetXCV2Ui3rC6N2BQSgsSYD2XY4bsNUPpGVz2pjWrioyg5zw5KHv",
  "key32": "5BgNr1yHoWNDnNPKkxNPdSMURQ2oFUjxtXtJ6EYhzfj9LYVSK7vsHVafwwuaAb2H331heDYuuiTdkPTdJr8EtC4G",
  "key33": "3kjQqtFUpAbQCpc8KLF43Fm2VQ7L5YGbGnTwyUxqm9Nj1qQuG3yeei9yuXC5Z44VXyMmZP3dFk2nNkav3wenFesa",
  "key34": "Bc5nTGv5DttidRPHVTwM18wVkbywijjMjHyoQNJkSB2Ha9MB2n6GvqkZZdBGk4cNCUDcqiyQQexHQPxmPHaAviN",
  "key35": "2ixxG4Z5huBhe3efX6SuqhzMiATHbityDCbexRBDuhYomeEBog4iP2Yoe2yXVGo9LUUtsVJyuB1Bz1uPJqXBeCrq",
  "key36": "248Vg9hxTBUvZgQsx6iTgBMCA5qvNdRd23UFdmz7BNmzMm3SEHniKfKYtv4XvkVJ898VM3SQGLEJcjThPginUnYa",
  "key37": "4HAC43sNBF7MUTTjyCe6B1QrohkFYxYDAirUA9xYrpnsyYCqLZowQzjfdQD6oGRaGpa3zzzpBumiycWJKTXvSs2A",
  "key38": "5ydoTcEjzVHcz8C2ahdLy2xUg6an8GCiw3reFpzkuVVPmg48Pfis9b8SawLEJLBtb5w1z8PD5RQWSwbZUgKnau1n",
  "key39": "DedoozbCWaCq4Ttrnos2kahtkJRG9XHhcGiwMGEpa7q3hEfzAy5ayq5Ngdd6VrehPP2bMCkpvt462BrNXrwe7LQ",
  "key40": "yP4KUX2TKNw3LU6Apgb43zeMQ3ynVdDQ7MevrBqHxDMdiB8ucAdhGwCXMRLsWTWAu1RCPemXMj1gobdb25EKmHV"
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
