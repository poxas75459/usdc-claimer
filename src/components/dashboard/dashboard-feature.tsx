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
    "2eM92SJYmCNAHFNRcR7AyQNQdDQogEDF4qBFNDoBNFhVmXENSGCtYNY6FKmUChD7j87mDYguFujJzqR64Yo3QoPL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y9ZzkubY3v9wjun96xTHDvtf3HT1Zm2TRPYV9wqMqf6y3KY5GvupriWnvmiDahMgnJhdbJkaJMJSA2Gbp5X8szW",
  "key1": "FWEt9JvERnQz9KiN72jJNqJqPNxgTiWa7yZmCSmCQD2gudCqtFuQs1joq5jPXQiVs7W16Wzy3tYQiUW768EnzcC",
  "key2": "59X931E449kVEyJMJBVpWe1TAtHygPWewBwXFh28TNvVu88etnn1yDvkQ38ZG2SAcwybiDZU8CEwrdjR7SXmczfm",
  "key3": "4nMMQUZj69JrXYrcbVUGpsFQjx8JkAmNzWsoWp2NLDVB5H4wz1hGmzKhaz7eC2dSDhjefpKkMbZEJXyoY15rD6Lc",
  "key4": "3dVY33BSpEuEyjAseSeofxShqBrZPVhbg1NNJxTJ8fa2AfjYb2r9Gc5hjzShtf3oEysENaMv4KvhaQz1AuVUNvyq",
  "key5": "5Y4fEZ7TYxZeVc29bCkmfCGrLQmoacoxNXiWVTDdvE76PJoPUL5R5yMwWGzh2jTgwaoe6T1DxuHGvCToD6Xzp5bV",
  "key6": "2SFDJmM59xFSV7rmsriMS1XpkAfERLpUYq3saNpaAmVSwniNVHVcqiGTuKqTV8aC7hETFPo4c4Psk5gD2HLujZG7",
  "key7": "2TGUQMgsrwLvfg8D5jDU8ZtPwNY3HoMk2GVP9xukNRmnTFM1yRT8jaqxUEurQFa3hbUbuDjSPifrNPRnmQ1eNAA3",
  "key8": "5xAHxbs81FZcdMH21j56g6VkkZvmENtspficKyQCH7XhAu1aqEYpo2ZExAaN9sRMt6gZAqXHgJgpSrzzyWXuY8HX",
  "key9": "2o8M8NHuicfWKzQPwHXKotkAAK39f6e273FBtdfbDhy79EqZuhgge6w9GivaYeLqSYMSPfssXWBVrV2stQCvrmrY",
  "key10": "2vrCYq8qwNiDoaum6YzuuQac5xmza4vg2b8zpLc3LoMWn4P6rVWkQytFvC1mHUjGbSafAx2DcUHeniWRk3TGXsTT",
  "key11": "2J2neYHhT1vzCRNRCL5a5vPoqWMNnVCozng5MFZngtTTkU9RRXLwGUghRiPcqNyk26G1Drjbvq7RsV9jRoaJoZxS",
  "key12": "2shrMrXndkheZiNmLNPptoKQiZr2ahmuiH1wGQhLdysFYCa14zNf2SPbsPGXQk2qr3smecCgLmknXkMR8PGYeVMX",
  "key13": "32yPFrytbt1XiBhw7buspNMW8vtHqS5somJ5yzfaGbtUZ5eaBE7mSnfPGHL8u5aCbThYFNJGVXcXZhh5ewj75GWe",
  "key14": "5uaYTUYsrrE5RLZhJBTzkjpnzD5FVG7DTGvKBW4TGkrEsmvNeuwMCembavyu2HetkW46rqTRvgwKdP6GDYAYXx1F",
  "key15": "2erbMqhCRhUL6shxc65vYzx7ohsGJP9d6MWxJRrf9hKQQCkPZCzimHRqAKA3wTugYK6Zn98323fmZiR6cbDnnbJf",
  "key16": "353GDaAwm9RntfcTLm2RXbkiNQmdTAc4q66dJShcfjwQEx4Mf9f3dgeoCTxyhyyEpDuWE6LNoYSYb8tVMyMZo7M4",
  "key17": "4W8dp3A1ji1JYaDYTGzPkxmFfkQAJR2mS3co7jyxbTJDkbt4SJSqDTC8oD4vAnMx2p9rXnLWbLsK36q66XEAqpgG",
  "key18": "3m5m64v3cxTNaTvc3aitgiSKq3wrm4oxq3q3nePZdrGzeLsGvsQdUqtBo4zYa4aHQZjmqMpCAxaYbcAsF4r8hPi2",
  "key19": "2NhCYVgtZMTywt7q74Le4vKSjCGjTovA7nc2J4oD3rwiHYwEyNkKxHesU2DwwLNah3gW4AzbS6cTQybUu6zFstEx",
  "key20": "4XwCrm3q8JndVRAs6SdoxpfHzeiBc7a2G25gPFWn3Dpz9cMWqETg4ELvNxPpJiNHHSHbVuPRHPqgCMnFUUs4jcW4",
  "key21": "3VqS87peowafART8fCpiGwH3BdeRFfZqLeP1o6eySGrSt4NnpcPknz5Zcd6v66BK1seRZt3TxaRmr1FoxTCui2fd",
  "key22": "2VYFhugrw9QoNWFcSM5Ju7qLP8FLRyXT1KWJcmGmaUqTEgM8tegv4DcPE3oDFrkNNViCyYz6Nw9cKTsSkwJn4wJt",
  "key23": "5wUhtJ6fe9pQVBungKtRaCjhSGjYEMx58AJ4pJAokqUZvJCS1DfVCgK5grDo8VBq5tvYaGnxkmfW9UQzYQoPKHv9",
  "key24": "4stBWcfAqEoUeSMGJqJPRF3Qi9Nh8KiaBW4ajMCRPiGmdPyiayyLFK7TFEqp4F9T4vuSxU3hN8WP4RciH9ia8S3N",
  "key25": "3rR1NhVZduDV41UiaWeT73aGKiBZZZAYqEirShouxTYg5qfCpaHTNm7QjbGqNB1CWyQgcdtgbU5i2CzqWi9QPBiY",
  "key26": "22vuWypimSptXQkHURp4SUkzxSAFVP4PuGYEkwri9Huj8AqSr1NtL4Ki6U3iHGLG3Nyed2RA2niwSaGJQumuBThM",
  "key27": "48QdnPCY27DtG6WS7FsPk8xrj5wNExCZAb2vqNY7xU5c42y4DEhPTJa574QrMetqyzjNhxYBebeyV7rp5TKz6vUp",
  "key28": "E654Pmpv6zBMnhPeNApZJHSya4xFMj2gnYoXEnmk6hKiYxLn9d582t8YhnDS1wfeRGqxju2K5FJAiDtrDMFAmFB",
  "key29": "5Va4cjYBp5uamv1ggrhykisyoLpvC3rKpwBHXFJEqo58ZQjTNfnC4krhRXV3pnsKJznqrx1bB5SKfvszvx17WoUb",
  "key30": "3JjMHNhBzeLcsz1sVMvzysm7ah9eqL31KWeCmwQpEJegMcj7KBRqX3oiBunUsrthksbimhXHpGLLLKhgr6xY7Qyv",
  "key31": "2TJjJDZMUc8g7vgmeujke7kRfffTasp9ixxkeEYwKRephNAJbo7hFf9n37MRoZvT94SJdyDPnomxJW7WRtMMPi4b",
  "key32": "3EatWG9UcnQd4Vnp2oc5PdU8swZs9kTrFudsHQx3tL5kiwSiW9p7dCQCUGPvhBMEE7QimBcYxkPj8HVoPXetrAXY",
  "key33": "5bBPDpqf8bMwUR5LadPhPR711hdwK2HC9sRkUJ4uS4VABuMQHuShzaZWzM7bZaB1msgPc8dNEqcND8R2Lwc68Ki7",
  "key34": "4d6s1TjzZDgKCM6K8uck9HfddJnAUGNsdTtT226Qu5ApmyJCEfiMpcr4qcPbsfVRADjPappsCbzdnsKWhNFUQJEU",
  "key35": "4k2LgKaPY5k6vRjGdVC1XC9VgPvp2qabNN3Y43pbyt7eoqew6fhtkgKmrNY9kkVRbCqGfBxbjDL5DQzQuUYCRsyD"
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
