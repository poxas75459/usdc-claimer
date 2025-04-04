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
    "3NhLpuDf9KHhekf2cAZXrMKB3nRAdmCc5JmxUWYPQBVtDSoBmDs61LUajnNwHkKWLoWVXrGhP3oAqMod6XV4EqCj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p6eDGuEz7giNXh1kHzW1ChR8s6zZx8B59NAfjUdDiGHftjN8qUdf2YDCF42MVFcnB4WojqRLN4HbnwvCXCkCmNC",
  "key1": "3VQETVsHWvbgKQCobAfq6vbiitCVfmwzzeXrNiNJw7TwSqPrq1fjbNCEnu6X2zZB1iQCMH8wPBRZ3GqSECo4TZrN",
  "key2": "J6LqpK1xV2e11KEXYRougjZLngDx6Wz1anUPasWnD1Md5VsjjHMuTDHUanYwouNEr2sJBgR4erhdG98mFuj1wtu",
  "key3": "4XkFFatD4Y6ghXR53gUX7yTNGkpoKfSmT3NMFtvs8zbJHSxwnyWpApPCwjZssVtEadfJKDqj1YyGbPWfuxFsGiJY",
  "key4": "3LBRxRkACsJMbPQdo1LqnGp61GJzswjCxipkowwmCcSysfp5e1qYj4rgFU9unwJp5zVV56jdNMRQmDiysy5H9AeT",
  "key5": "5xhtvi6HsAbYnUovm2VRKPrGv7zevYqrGrxgeWRdbFijbpGxgpz6zaKzofGkZMVbfG5mXzXcDLrxUPXKgKyqJNxQ",
  "key6": "4NX5XbykjbR5qsxjK9wfrwLKdF2Yu3bE5FunSjGPwjudRemqvNfj8oiwe8CH6T2sTVARUcVhwSzeHDXoZcZKtXG3",
  "key7": "3tgku1oGJguW9giL7c9VojfBPzajJHYSHdmvDyW9SZNiWQSDoxqq7E5asm3tmyVMrkVBsqRxXBRcEx1PKcaRq44d",
  "key8": "DE6csfeYXwXASBdGoUh2fW7GPnec7sd2gLtPEVF5HhiWGFhJSVHwdUWDoferSX3gvqYJVVWTCTDdFrmmFPB75Yq",
  "key9": "yo8d324tHYBfjBpPPJ3AfqJS3NMAySz84xw6ESvfyXuVJXPbaPDxdFEGXY2YEje7YEAZNPKxTg2gsZjMXfT5hbE",
  "key10": "3aXm5ERi2JVqDSSuTvauNr9EbNLudk6kZEfKwXCiaKLXmiwntseHyQKK5yZaotKNgeDeAffLC5viy9cV9Jss9kSr",
  "key11": "3YBYk4kdWcSJMVQ3rhF1joDBA6xP84uS86tj7Logcq26qgApGa6J2bqGivLgLwzGf71eciyD61QP1cxWJBxpBMU6",
  "key12": "5VE8Ky1NfxWZFDoEKpWnHvRRjRaJwrs7e9oQQPHA2ToCWzFqtxEgFgde4FqCCEQuH8hmK89WJFXRaKWXe6xp7w4x",
  "key13": "9dt9hwuuww8jGT76NaaeAaXqu7cDrKKKDb2doFiN7inhrBVF25jnsym7Wqd5HjzeKQf3Jxo6z7ViKfZa1CkAoVZ",
  "key14": "KmGzWWUY8DC68K8bLhFQbc8nohZtnHtvapsTA65gA9JVA94DYGy7qxxFUFFf4Z7bsTHGn5Hysy4TKdr1xoYNdX8",
  "key15": "4WEmhk5CyXfngWuuuU2soQLMNg1i8RR6bVu2ZUUB2DK7BssyRSp44dEiWy6fto91pyiUxt7hpeTNF6obfMEbjDKc",
  "key16": "5vAVaqiZ4SBXcSjStzWdtsGn6Agr9dfUTLtMzPACW59g4y69LZzf5fQzzQ6RRkjppLX3kahhS9bFZ7YC8R2YUWXp",
  "key17": "tyZuSqsCt6Ge6gbbpnZgGudUMre6UzVeU4ZLcacmqw5bd25a5oJMUEw24ybSaYDwTjRskWMQ26PNtN8g5CQdKbZ",
  "key18": "3UnpCF1HA3bXCQvvfiDgcpZd5rLBhpiy43Ks1Ac9iwAgLuRvGF2Qa7WjmvcBANczzyxChLSkzRvtzRzNTJmrkvAT",
  "key19": "5TGm1TdFPHp3SsvLVZY2QufhubGZxQmhqyybP7Sr1KWzpLSYYwQqSbUhHzWdWtaYf3z3HDeY4d5zgci5RLWadTGw",
  "key20": "2WLmyvZTYomGiLjJ3bpUKJFvnVFpfoWGKF6aWsxDGsjtcYY7Dy1SYa1yguySnsLNsmNnPFu1AgiBRso1CT33sR77",
  "key21": "4ggeBymDp7iDZkCKKqREnVJLesyX98zeHXHZVsTwxQx52UWk6i2Rt6K21w1CSDcvEFn75hAbtY2mAqDgFDY9FB56",
  "key22": "UFva6s2Semw9KXzf6qEGjiinvug6GXf8mhh5Z2bypuZ4mc6P2DX4x4abLRf1XVPZnLLTza4Ni4LzaZAigqxYMvC",
  "key23": "3b9Npo7dZbWCqJrPXAzNQEtsfJsY2rJCxj4bSVn5nCMcnZbkrgUDisedt1dQtEWQjWHokv1qF14n6WJpcdKFBG7W",
  "key24": "3SWE4LWtnjuo54xx7K1VmRKpEyZRzFoTS6UM47Y8SecK3RfyjJcBbkm9hquRqAr4jqZ5SuarvGgtBBNA8zV3Te4C",
  "key25": "2CYsQ9fTTik2BmpB27MqA2HssxynnogexejkjTEj3FqugWroXQ8XHevVZJCCeSQVeWvyH1r4C9ReZQ89dytzzdDA",
  "key26": "5rqpo54SQNujeixARUujT8mMgwnPGSyTAipwLL1aXmUXenriNWgbmkmvi2fC8RHaLDRuJ9ZzbC2H4pgkL5Qo5pnn",
  "key27": "4s7s7J3SfzF1TDLgpSvWssTrcgtgUn4B1Xpyynp6WGXHLFcGbpw1G5YZGRpF1JxSyLvnjmKBNibbvofWD4S9HTG"
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
