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
    "w2dpgXKRK47owb12zQ4zABn2AKFwWRvpSRdKDKDHSK9M91cnLw6hxWp451kXPUHXXTZNkJanNoxMZErHHP2yWAB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mDNqUR9H6iKiwdFWVQFYdrPYzoe4ZHUk47LnHX1KS27w44y2zt62zwRjMdiemgv4pPBvhfZahNYyQuv9uvNBuH9",
  "key1": "4y2r7YQMTER8Bm9XLXw23vD8syqn5nNoYroPhPcj2dEwj3u2ZB2DT7YoGngd3YJCfDgefj6qwm823dqjSBLPn3NK",
  "key2": "4p2fowrSW9q9jBfyNhj3f13dQRFeHVKGLgMtBmf7fKxrvoHTucGWGeS5rJwFMqNC2J1dgRjCMdSCZL7xGDWCzJWh",
  "key3": "4gt8DS5uhf2QVs2PcRxzR4iekhpHJHXKYW76HTKCBEYTieao3a1yJMrXY74B7K5YREmZgkHPnmmDe9YkQdKAVJZ2",
  "key4": "GDnWoHkiNmVQLX5kGvmPdu2jdGSNyTALUL47CnVboPS9fVs7zYDFyanUiXaFvN9cJMKheV42RdDt5XMpAtPEnVz",
  "key5": "2Z8imuFHm2vgRmzyzcxwyaya7s4ggm5EkcuB9jApaX8u2UpaP9aXDF9aym5FL4jYvipoP29ypyR6NQNScQGJMGCy",
  "key6": "36cMHnc1fty4t4aJbFjbFiaqsSDHtWa3fwTrSfvXWvMHi2ULtDLxcrc1tB5spBtKFZN6RCG9G9RPrwF1WXmgb9jb",
  "key7": "HNezhxU5tYqbzvUPcY4nVyCmDt4i3Dzbb8HtLcU5uqdTRniQNXPYBVtWDh7ADMfVH7FX6yhXMuGp3JvMckNsQG8",
  "key8": "5KiTAr9zAKmsoCPGPAAnQ3uWec6J6xidTZnBNkYcnTC2Y5ezTpDbtKWVLHo84NXfnVyXBWTFu16iS8ayg5G3ZpQs",
  "key9": "4qjsVjan86o9tEg4mCwwqQE4uRq5MHBgaUyzCKW1vFqQ9BnbQRcJMsQ9oMTtry36vnKSgc2ztVvWuQbe2FXESUfL",
  "key10": "4AcjnjQ8NuthmTcg76EdiWTrCTu5vMBnpGr4Bfmnk6kcsqV38beToG2qZC2h6aJYZjkd7FwfqMBYPH5Mezm4Mf7z",
  "key11": "JjwjJyX5QhxihV2ux4KJR6pAKsmpgoL75oK2dJ3THPmiP5i4EDFGebbPhiuYHnujZBTopZFPuYZQTxydaCikFhK",
  "key12": "5UWfjEiXN9BhcLJHrDwD4icCr8gNCKrnFcRbLnE8wZt7oYyjGNxz2NNkLLufBbjzsayQNqGUAYrMRoYykVFkDcML",
  "key13": "2SJjb2UYmBFUUJn4ZuAo2x16pTKJNCXuNtoNk175MngcvMdQvfCVpEyM7WiwrMDCFUAgcMkqhXwpMJkWJXbPgam2",
  "key14": "622Lxwb76kuamcTpKc38KazAfP4ot3qzAGMANUUkxFciDZy36XWt4tL97334w5VzPyrgLZUMCUUzFa58jGc8cmSE",
  "key15": "65VEkdHcdT2v3xkZnBhCowk849XvGcMSjcVwvXE4HWKkzHVCQreApFE2dpPzk55YoDxMsxQbY924BV5bL365s8hT",
  "key16": "5J3zggkQUkh5JQQAF9cr4TbKrwQ5bTwsm9zyjMb96XaB2aETnkFBgA9a9HBg48GaY5qZmJJPGofJKCiTBcAXcMqM",
  "key17": "5Bd8bocgaXakvePywgx3K1kokmqAQGGWThnSot96z9sYuiEDQVH95drRkS7SWWs6zuJNB2ZYWC5ShSziRheaHYtb",
  "key18": "pQv5Cje8e76CRLRk969d4oqLiShgHiM1zysayKyGfkqQrExpBzGqvjxHzCc4wJLPufePumtaJSznXWQ1YM7QnCg",
  "key19": "5hjyQkFDMmHDhe7vB3U6eYyg1shnX6ZBLVdjxmLCPZg5ENeyUWKkWBuUrW6Ri2r4SSbmr5qPnm7qUFuf6FNTvSdS",
  "key20": "pzRy5wq39rraf1UdFN1VvL3S6sf3TD6Sz8G9wEFkwydSx4YXjHmbgHcadPjfPHeBrY9XPHJSnqkr9kJR19RG79M",
  "key21": "yoXi4aQWHPvZF4a2L6cDATuyDdrpVodvjdAZFq6tKfVUZFsQdzTqBoMpRGrNb8v4y5b7L6oQmWjx62rDyS9hEnt",
  "key22": "67fGcdHWKaqMoQs8BQLeWXJ1vg4xfBct7vq2pXQC3zLJ6ztfewuryZAtm9HUNoswtzYYDriMMTcBKji2LrWkQpiP",
  "key23": "bCDBCV7ZLtsxCPD4seJNv66ushiEW6XQo35K4FruXbH6sJueNN5Sz38StEYJNHDGabYPrjbo4U4gh9cAgFA7zoX",
  "key24": "3x5JaGxsnyTBtwaQF4RoCA6ozkeDCuaPKw8PPind5ZgYd9fde6DXZNYr3cfnC6wxYzHwhq9yFT76yZcyH8mXowV6",
  "key25": "W7dGtYb8p2BZraJt2F9F6xN2WSWmXXc33XZGQ8dDq3jEhhVJpUEEhRxxS6tufdvs3H9C73q78c6y4LfmDw6hAmC"
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
