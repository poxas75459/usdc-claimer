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
    "4GWZ54EStfbBPkWFzSYkb61bkQdRTDSTP4ecve5R4JCbxmqiYjjVekzVhGZ7uwGp1VrMZhtJAjJh4WnsWRnqZZco"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fsgZySJwLVFAnWTBr94xqiHWFTQ8MupHoUSSRzQ45ZS2Va11xLbmGtUgQ6uim21rB2bsZnvj3fTUfG4wu79kRmw",
  "key1": "48R7uemt2htH5bjq35TDTCg2HMNC9Ber23g9nRWS7gyJqUbPy74ehK5Rv5HcUZAKLkADJKjzrzKgVM1Tt28XQumT",
  "key2": "553oDDPJ8CYMmZDvYtmoDbDHzWKDSybxJzt5pS996MRHi8dybeLZqGNseWJ9ZDiJJwRhBCU844NCeEEuoD2SW8AV",
  "key3": "2j5SfLeTCfRYjk4gMFzspfpLfTdfdEDWyJ9zKch2uw1mb93Hu1mFdEiFmxpo2KYZUphH7JcEG3eJ9cq23Dy4hw7B",
  "key4": "4tHKF7i3HybjKURs9nZPswFRPhgwpBH5e11wwiddEA9ERdjH5UBUBAU5RShksvkUoggqiXEoaB4TCzmAKdDmdguC",
  "key5": "ZuUHHwuTy4UnXoBrrxvxcj9RbHEGnegrTanpvfXkrgtJ1yshG6w4r4YQMFvFtQa7hboMAFomahNyVEnJfenijh2",
  "key6": "3y6Ksm3KS8LCx2MaDuwEm875qLidiWb2NVAK31dMZcC3omoPeTihZXRxVbBuXo4Z6Sw3yhEvM1QNTFNohzUKsew4",
  "key7": "4nXZksk1t26Dy25AeofwUpRn6XMYHLisJoKxECuokDsLacDLFXsR2pZ7JST9Xxv5eWJXKUnQ6HryzE9nrtXt2bLg",
  "key8": "5MrdmySavGr4JrgfyutvBHG7FjRrhmSS3JGVvAgixdxrF1DpUeHfQeZxvMS1kYeZy7u3vZZYvnC46kVBtiXd8Zoa",
  "key9": "5dKbLLrzGp3TsQzDKoe7UqExa6hkxqhEsHUBG5ubB7BQt8RKqYRnwBLmV9ufczG9ooQg4W8kYGBuvLfVefZ8SiQv",
  "key10": "5SxTHtgfa6wW9sFZHp7LYUoaPithcU26KjTgRjC1qp5Dka2Fj9GubawFwH8gbn8zuEnnMWeKXL155RLNtsWXQWRv",
  "key11": "B7x6TeFzt4L7JMUnMfqzES8nPPeHogveu7mSRDYu39ZUHTDpypm8DohoKMMVQMiWeH983ELgFv7ky9FBj5tovxk",
  "key12": "4Ctuu1AyXfSj265QvwJebNrSRosh7JbxurqR8qx6Tazkg8vaGz9KKQjjKEtNSPh2S1iFoXTj5G5dYAKRZ1BwBiw9",
  "key13": "4e5h4C7JiQEh1ubFTKMaeSqq98arFzG93kUnuV7W5j6qtqPQizgD5CthFpUWrmEExAiG5fBq2ZNistA7kfERaHAX",
  "key14": "2gEjq5xjgs5w7u1JxbE2nbdMt2nNvcVLDGVGfoRzmuw3UseCsKKCDxQHxZQ87dyErwpbL2vhHA8HUV9KhStVy8gD",
  "key15": "66aiZckvq1zk7PBn12sbwcKJAZWf68uVxELgGScSUbRvuDZNiw7FLzGWqpKZLNKpMwigGEuqkcPNtZRft9x1W1Ad",
  "key16": "2HyyYZkXZCDFCqbqDvTQZCpySgSsJ6W6nBefHjCAwczJqhZyDt2a58WUvnzJ3KtzAkEp6hSh4KMjNWrf9Qp9vyBu",
  "key17": "4Wk7hPyv9VL8xMKhKLZ6iK7RzVL1Xjb1TNxap5Tk2QL6XUwQyZ9H3E7stYqv6ULMABvKyyTDhXWSpfZ6RLqWSzoP",
  "key18": "3Eb3juJW9LQyEf3Pz7uGcfxgFESiruY5oHV7ccvnEpKj8DEaeAZDE9YmhrtjySsbidayQn1Sr2F6WMUugZestvBu",
  "key19": "4dnVhij553SAdY98wGTMJLqXQ7kUoPiJrFXPx2E937WsJzufW7Dz5uJ1mxGoMsKspGTHX2FHGdFA23vdu98SDnoq",
  "key20": "a9Z7PidaUKCUsiUecFxvggGg6Eza914Uo2cLThPWGofp2PKWbr1AMuC98LX8zSWyRymRmM1D8YXvEt2bFMjoorD",
  "key21": "3wHq8BczwhjrbyvhM75tzqjzK5rHXTGBKW1ytBT2BAH2QJh1dKmTWWnRThdUW4BydTuKY5QNhWsmPse2nXS1rGeJ",
  "key22": "51TcGLGWMumKoqHwzBU3VamvEXZUmJ8PK7mH9ausnpmFssVEMSW8w5myQuZaqpCo6eFHsajkDRmXcyuAcXZxjiaP",
  "key23": "mTfecVsh2vvQ1ModCapPm6Up2LaEP39Liwu4QcodebQmeFfdcNgyhxHYY16xj483LWQiNBM3d6uU8eLnY8yHYFn",
  "key24": "4gJbsp7HUdH12w1qPLvX54kYpNrzNzehFTMJKQHFtPMJRngqZU7QETXfAUsSgHwhVF2vbd4Dvwd8sDcmfxZhuGtm",
  "key25": "2DXNKrdLsapX2Uw32aSf6tGmbvENhuVxrLqxqE57XZCnNn2UdCotyEmz4FRTp7XoJwEYYcAekz9GY6u2stFLEgi3",
  "key26": "1tMffsQYnzCgHT41gnVWjaFbv2xQd3gs7fbciwhpV13zMtvpp1Yg2JjWZEupaUFoR4xcgxntngRKorZmJ2yVsyR",
  "key27": "55wUqodGGmS83erSWfnLr7AMhHMqzYppxhijMCCowaTZVNyw67BEcajFNYSKFtBP1XqVSUwLrDzPWNjAwfF6XZmC",
  "key28": "2mSvCYPDWGA2DsaB4e33GKkZsqm2w5JLdfFD9EPVUBXN8YA1om71gPJ2rTA59UAdndjkKbyy3TWiMsqWUwCwPcos",
  "key29": "4PpMdnAxGq2YbZc2xyKp7bBQWyUZ8iSTtPmtipwUgjvBDmViqwUyT6KrqZnPEbbSaKHRDjsa9g3nMBrSJzy1Z7b7",
  "key30": "4XQiRtT5Lmf9TM7zr7yb2kP1FL86q3311Z7eT2LBJ4UywbrStAcFZo2qGid1L35Jzb28uLTrXXksJtgdu36feXqe",
  "key31": "4zPAwA4iZKEwTxYKkgnmYmHybKBvFAkqTwFXtsu9RudhPYs3gmjpSwZHhXYHKxFyW4GWkNAVjoMj38foHqHQpRfR",
  "key32": "2d9nHh5wFqfoqk2xLDuF4HoooKocu7peMnfdobUVag5VDGS5LGHg4mYpWTJxF6MSbA4WqJ56BpqE34VQDZma6EDZ",
  "key33": "5qESSkkCqXDzCVJAhscUxDTArPcADaQAAQt9n4RPn9Pa1TEwkjS1B2oqs4ikrsYwdaRx47Lj3Rc2pJmfkmCSZnt4",
  "key34": "5sYkXvjEaiSUWz5c5njeG1yqDev2atscobW1ro88RcoEyuWdWSCezZWEuK9thyXazCYXAbRBqb5AJSVAJto6Zk6t",
  "key35": "aQJGAB7FniNY9pDXqbDQHHqQXMWHkmDndcp21kFjpRtNYBpxfjhgFEKKgkLuUbgsw68C7EM6WBMDf78WXnWzJfM",
  "key36": "2UzVFTdew8iVVgnstJoCe8TCVw69LHPhBfo57skwKyxkwezkwfnB8PH54dAPa1i1T727XeZheJ2T2WGq4QhZPFPU",
  "key37": "4Gz8k1pAXgVLzZFJF4xDe3XuBBdQ1YdZ3HNe8HejN5f5LTbFTLYeoGwtY5cqAfmfBYNGSLUWt9N6UCtnMqC4y1Qq",
  "key38": "3gf2rotWSffjuHDCyRRstwNBMRKEsieQUeJvoa4J2WGDZ8sB37nZWVtoz76Q1op1BTZo9MB4K2W8bnHaY1YXZ5S3"
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
