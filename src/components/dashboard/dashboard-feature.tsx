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
    "3XXm1jjd14we9TNZvLVJ7Rj3LRKhkVbqqdQDzjC1DYH4nFWJb59rGSRpUFCXzvHFzpjhHmaqz5HgSuL2UeBNpBra"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3msM5m3XRYCJ21GLq1NKeQuZtgSWzyVAGeDAyq6KCTvFr3HMb73RCqmW83hbBRXwh5SHeY4YzLqGAG6yULiuje28",
  "key1": "fhFjfwMv73MsoFYVVXfT13XXb6ccXKmWE9kNyZMpvNYKxG71PYGeimgZ8qbDUCEvPuYnmECjJHXXvGaAxDMP9rH",
  "key2": "3qwZCBzeBwmEJCfBxPq24sMw58RF3rptJNAFrqWxLvBCuPa6ELFSssBQKvWzCrDKVbYWnKpA2V6RjmZVniERskjN",
  "key3": "3NqzzoJdNPXLXV7xa7RL4ip36q3F6nEYnmp6QbtXGfUrjK1Es1ep2fh4inh9ib6e4Usj6UfYnFryYkkmZbkLvBnX",
  "key4": "2fgtv4QVBy1fHKPsHuGL91kaXwdZ68Cu2JXfYsR8FKyYErxPkNAk6Xs15b112oNDM4gk3iWqoLZeKndW6mjsqJ5r",
  "key5": "MQzMErvV7vajAv2Wib13SRvWi37KxJxv9icxua9dKVCZviZ4J17jLyjwRebqtsxqy8JX4c33fb3jXsK5MiCeF1s",
  "key6": "3epcCX179eP8xoF5hLnPfYzuP3SXL1Ja6vz94MHgsyeHJs3JUmTqJdMvZdem9LKtGeomFiykeb3S9PwFiJUmKy9G",
  "key7": "3jhNF2z1gJA7gQScLWukUtMNNu1fRxQSRzh4mPZmwNmL7NhdMSiswfLXPgLJWwQZsaCubmrizU8HZh71tVHcWTjY",
  "key8": "5MhRWKEAzsDSoXNhSGetcat5tExJ26dbkcopbcqyptptf6KLXMDF175kzxL3wszDNoGG7Wax9KwPFM2uNTDk61gB",
  "key9": "4XyGzR5YfQ8cECnfXm1FvpP2sFNzAtP6nY1q72Sg3Bu5NLUVwuonmUFavRynGb3LgukiSPqc89xqf8Y85Yqxjr77",
  "key10": "buvDCg6WqJxsrH45vqZwF6AjYRJqpu6aMMFRLLx6Ah7RuDMPtKNZKMw8DUkxQrQSdJNiRSxHG8a5qVatUVz6Sza",
  "key11": "22PZ5Dm78cKmuvnRY7vEv32M15ZcmcW5QEKocSwinWCBKVtzaGHhyZKRgoy99gMrMESWk4kjxpj4JZ76dMtGiY6B",
  "key12": "7uWspLa4mCBuNUaPRSTfdC1Z4JZi6TrZ2HLj6PEHh9oUyq4EUpP5CoJDwDZiJrUCwJVeidFUmYHiDidbT4Wr8ji",
  "key13": "5ZH49v36Js3PW3nfe83GyDc6xHvkSmAuVo8vi6zAkNAkVAkGqhq4vSdoZZijNsCdn5gYxAv3G7EzsFjUoBRQZhoQ",
  "key14": "PRo5DECsB56MZYwK9PvN4H3YXS5XjTrbA7bAeM1xMkCSdJBgMrGoUy6N1we7pUAsysqoD8fLpaUE8oxXA1VLpMt",
  "key15": "4zQ3hhdUJ4cfQRLwzEkpu8Wb8TawjfM9yKf38b6cvegMLkuEQ6bNS6ubASw9JGYHZ3evmf9wYZ1fMqj9eEn86Y9Q",
  "key16": "2Ex3cujURjeJ8Jm4hr8fdxWfA8GvdcbYQp4jL9GyK4oYcLiuyj6csJ7zVnnkndNwkkm5YhH2t4s3FpHpAVc78zKi",
  "key17": "2tui1UF87y6up9T4LxT8cfUEZp2dFDXi7HXPC8UuLVnoxsP6W2m2JkGYtdiMXHe3jF6tFMHLaVHERg3zXigtf7rb",
  "key18": "3uQbrurSPMJTXmhQXhLcf51SSSRPu68LnAfkZAm4oppVyjn8MPiUirkNPDChmp1MNybj4NmaDT7P3Pqq6EKY1Hzk",
  "key19": "3RLQ5CLfcB4CJthRWRuy4zBCdg5efEYogSezz55piyvm6yHczDnHzhKFRcB9kyZDMpcbj7VAgkrMPKtsG5e1ykLy",
  "key20": "3mHApcW7mD5PoFvYnJmEkfB7JiiRvq3pKcucBHVw8dqdf9ToX661d3C41zRSBCeDQk5Gh3em1jtMjq4xdNmehZjN",
  "key21": "2YvEsmh5qttqriWK6NtAWpsQV5X1N9JtQYeXN4rRRJGfFU53ptvGEPcpbYJGhXHpEeTr5AC4U2YDME7rsBEptYLd",
  "key22": "3UKFcir3d4ntbQJXjoBFf51PPUq3tL4XiNX8QMMC9RJQmv9jTk738P5dmbXuKyNokTXo3ked5AC2uPe2k88jNtU7",
  "key23": "XwQvXG1CCVseWxvQtfBS8TuGJuHYqi7umDjQj1TgJu5iRU66pTyn9wsa1rsTg9mndDkGVz5hgYfmV6KPgURAQGF",
  "key24": "kvnVzcb9YZy13wYeWWmtuAqBYV472aV17cXazbJdPBgA2VSeDBY1v1SRKNqESR5mZ86CQZu1MDywJfDzhpRuyBL",
  "key25": "52WYmKhRuFwnA2jWe5dnpcBucLZK27kqY28C8SkM5JTbZtQ9Ed3XtZBPSfxzhNAEp79h6FkWgqeo9Ft9munyaXPb"
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
