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
    "5aWCWeNGxFnkUPneefdMefWL5zpThFyWteN64RqFAfstTAdNRxtMzvh5YmQiP2ymqzLfNJCXRrxUEvoC5vo7kDZr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GnsiyH7qF4yb4c2yGRWs9wphFpxrNazu3XEWWLPtXYjGbAWZwKSTjSSG8KF4VCXxejcUgVVc9admzs8JPgg8hv6",
  "key1": "2Y3pfjonqkeWJdatQsKUBpBCFRRJrAVgfeRA1nNPbXNnLyeCvGAhAE9mCuPpnJhip5TeAoY8owoViTy2fHYvMQaT",
  "key2": "34HpG5qoDvPjkdkkumDnjMMUnF9ueJ9MHhkrxCuvCuCTt8nvYyksTDGuw3dTyDzDi72MnUKFVNnwai2yEbgJBeKc",
  "key3": "4fHDdjB1aA1wYsmZKC3wov5pkf12rz2MZvb8tmw3xdrig1xKhWa2HnQSrQFTTKJk8YAiWAMNK3zu11RnMZkeKNQa",
  "key4": "5SHS3XSViXJtMzZuC87n6b4FgjbAYEwgiUr9saq4WSchDbaRYJGhVcFknzX1hVCbQPyMMu9xP49bRcFVN25gVMqk",
  "key5": "4BtHKQJ8xy6tj7iWtjrghdzs8Yo6q72tNb2rJM28pc9kKLV4drvjGezgdrpexLEBbW3JR9TsJnS7jmWePjQ2ZY2p",
  "key6": "3oNGxNLzzrvGne1Na1kro97NH1N7Ytfxf3S7dyqUYhE7bNWWTo5FXqbh4jVmb31oRwFMuN83tonNCapTXHRXZi89",
  "key7": "259rcB7obVNv1zLLVhWGyJgBFXnBuHjiLjjVCq1TS2vuoNgra2d2wKVQErr2ikHK4Y9cVr73UaUNBRJ33jQAmGNS",
  "key8": "2WGD9hpCrSMSYtUVkyyCK1LUMfrfuGo7nuWbt6oS9M92YQZgnRe9BFuyMkFPXqhBW9BNq9mYbzkJomqibxjoHNtA",
  "key9": "4yQ4Xq1dGaGwtcSw2dNDyKAPL1MSHw7hVFe8umk2tMnXGJyBcX4Ruoh9Zx5GVDidvisaQroC7iQji3KQZFoj1Ep8",
  "key10": "3YrLDpDi4zhA3cGQEu4iP6Ab2qp37FYomdQTDJrSh2rLTaKrgqiajsHpE1HSHh1qw6FccFFTSjWwG4PeRwymYGtg",
  "key11": "3zTunayZvycFxTenBodEeJx7fTNj3324kvYRZ6WcW4KrBcW8s7SyPNMhJCLyxdhVWk3MMyQ1GAePrq4Nwjy8cy8E",
  "key12": "43FkfvxAZ82QC5wc7sHfMCv1hu7on42ES5Wro4xY3C7GFwYS3rTJWZZSVN6vJEyjiHZD6ySRMaWwoTaheKmEF8CG",
  "key13": "5LVfgsSRetU9zHN1cQmkAT3nL1JhRmamJHLuKcb12KC72T7kv62XNxfU4UEExtPHq64hxBYJCXd991u7CdA5P2A7",
  "key14": "4nLA7FqgC8isM5ZcSTFqE3w78Xgn4VMa11fo3LkDpP4UW3mwb85oAEBvZp9Nsp1WNjiT88s7X8pz3Sn4kS5qv54M",
  "key15": "4zFJuGPRj4P2a7UcMEndQtXgkxVkvXL1piMBa542xuNFJKpCahoVz6r6Li2XHbwifKK2t5s1kQWki2utT7p7sdWG",
  "key16": "3y4FwBm6X31hgZzJoTT5PkV8iDKfRmQjC67wyXSuPthghLP45GGphow1TQS21fCRwMJgBfTBX5QiHE9SQMDhFgjR",
  "key17": "2mTYQQvdVdb1FwCLPodz8unsQUHUCPhxZjXnpd2youWy59JqCfA6hUznUSMfAeGRE8tPrQ9YTTyjjC2F7yHVPm7E",
  "key18": "4Q9JXiaVqbeVfjApGa18fR7jWKkoHxmxWDqXx88W24rDVgZ5PLvpPopzK3ZWfzM2Pyd6SNU6aD85CqeDv6BudCer",
  "key19": "rtZ2S9e95xRMAqYNujnXnjsRkuddfnZ1r8m3UWP2NHnDy7q8MAeREa3igWheoUx515xBZ5a4JqrKg6px1BLW1GU",
  "key20": "2bhipX42tKptGVA3o6MrXVYxcX5xuaTvSm6dQDejt1fyF7rLQfZSABVyh9NoRzkrUN3cSi2RVa1fHdDbqSBe2Zdr",
  "key21": "3FCzTzn91VfXXUsUA84mBEfNCUbJqE1qVFq9JCzb3MzQrj9gnKxscECx3f7qrqdQo5YwrRewTUc1hS5yBNUTEYMo",
  "key22": "37vWf9CXfSYCyvkoZ2s2xpMzR23EPyDThHztvycwdLQeUSAdy94sRtkjqxjXgtf63Zbq4pPr4VBSRE6hmhZKdc9T",
  "key23": "5ABYPZ7dfFEjWSESTkutdCmCPq4BnA9ZBsxiC21pBTyScsWfvabaHDyxUN6xn7vkutHnV1e2MjPuWz7Q424cvLj7",
  "key24": "2ynmXzGyVxiLQiSuq4Xu9GkJRAoujAVRmgSm5AfPe1DHGxtKtz1xrhDzgXCxtP4f1N5bBakMYi1QHWuojCgC83Nc",
  "key25": "4e8BXvm19NsPKPMCzSdKNXuPtnFSALVKBNUcDnZtG458XPuBN9RFJ978hy5cCSon1iMUswEyS6q6S9GqJ7jKa9u8",
  "key26": "38z3ujS2yT6gz6EiVz5ZD1rZ8nupiEQhv55Mz1xUnM6H2yvQqbSEi8RmdJeE8N79oEYLHznvmLHLgvs28WKEhecC",
  "key27": "5ouAcjv8VWviGMHbaqBiifyQredgy2FW7mWPD3AHazNkKUKdFYN6ikpq2Tv1RVLu6UKGgismBSkdxDxPpkMb5wtQ",
  "key28": "5E8Q7JdbmQL5PNZGZYeSNzFTnFqpuSnHgG7T6nkksBQEajaJMipS3Zc2SJM29mmtKroKTooajw42ip3fFSRj5mUT",
  "key29": "zyAux94kfxqe67ZcTxcHushA5REE9Pwo7YmWmpxSEgJR1WfSpzpaGFiiQNQvKBGRhDnBZ4odobjSUpd7MehCqkr",
  "key30": "54ivsLr1LzduMti74LEvVGdpwiN2HPnNa28eAPZw11H4dqRxSmTdZrSS9FzvRtEdgY4ZiP9KvdJCdcmJmqvDA22X",
  "key31": "2QQZKX81Q2DP6gdjNin4iXu7Vj3t4TNXv4JnpMPQ7BmmhTcTu4HiDnUbdfcg3y5tpeiCqViJYB6TGSjadw4pi9uK",
  "key32": "386ZcjMpXQ1qEX8o3ihJqDwmYT2HrwLAiB4sAvnenBkwumKrCFDzYeou99fitytHQ5TVSCaHeL9NsjHFDw3jKPj"
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
