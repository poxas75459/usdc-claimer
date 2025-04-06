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
    "5irsLXKRCJWbEn78A7gc6tUTtYZDBS6MJuN68iHYPgEayFgDRu5bTRhta4BHm3EwrBgY7w7LrPw8Z5hDNzgwkzJS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iSp1UEsNyRvM4qDjWyS1qrSUq9apFLv1Z2Dfij3kXaekKokhVLD9ibdbgy8tf8PjaJeos51N1myJM5TAsXau8Rb",
  "key1": "3QDK3yeb51JZyEjQtR9fNhQa8ZbHnwMkcFc8Nd7YRRcKfCifZRqtMn7GfDkDCMYhPxDGaMD9owDkqAHiT3EmniAf",
  "key2": "efhfo5No1n9j1euLGvHiAhoAvEThGMaFUrhjFLtoNxggXiFTt8R1rHyiaEdbMjU6VS7dQcvYXEdven6nXkw7kum",
  "key3": "4cqibBS5Fwehs1WYdDKp2CRmfhmsvwxGjWebeBUZW6DXe978ii7R6jow9J1CoCd5ifXBZvgQaBrRU6vo6yf18sSm",
  "key4": "2pFTsVmgVajcLeDmTEYdXU6Y46QgU5zCHYFePt4JmsDPkwLkVQQUdr3zq3mNQoswwmxzYoNTfzrp8cjyDdi7LkZV",
  "key5": "5XCAfhpPmEUnJLPUDFKCQKJ1N71Fn85aSLoNMnx65ugJuR957kz7KWJZPU6Pxxi1HrFHjyGVK7Q2DajR5mdkk9pq",
  "key6": "4gze5hykVCacbGBC8pe8WU7AuFevKboCMgVw7Ay9SyS19v5fyvNxLYiq3SjQratX9AfQ4xNT7zQi68kqPoWSxxvp",
  "key7": "57hb3jeUtLn6vkWUZfhd1T7uPcAFNqEc2uqysKbMkczYiNXvVrWgHXFWjWPDcBpfTXL4STCd2y2rW7qbwm7AczjJ",
  "key8": "w6SHPuK1GJWbpu9DvQbrcEabKnGYwnwRLf999cXe2eiboGAh4ShEfaKZF4Qg5VxmEsFDCAwAcuCwxetsbTaC6P3",
  "key9": "5djqPfM6wRbnMKSwppNYqDdWqLbupX4erYw27svQxfwDTtpWq63Ttm5b1ScnKH1Q6FMqhTgC5LAovB6XZhtfUscL",
  "key10": "piYiAdzUdQkbCwQGGCYPien9G233tp2LsJuDQihXmUWLU2ZH2TgvY5BDYb6thZXPfQKxQv7FvQefmXn37tUGJnu",
  "key11": "3zvoEtoTJ4okon1JRvdQpDzT6nsKNKCXsAQvDXjysdvptVhEoVDuf94wFrx3VAxTJMmdjZME69ozn1WxVwbPHHy5",
  "key12": "5B6rGgz5y2KGHMXeWCtKrZ55u6QgoTNM8guZi7hFp5whNpitiLKUd74tY7toPyxk7YPPYPt2gUL7hRFPii24aQGM",
  "key13": "3LNwYoXX344P9SwRj5RM7cTGCxksbYZRudwVFss3vSG43anLMg5MeU5SAfFZKgWryMXZNmHfeL5BMSeabRf66GpJ",
  "key14": "Lfvh26HN5nAxa8DBxycJZfuTCdLzzhTPvPVUoWr82bTCLrLoG3g5YnTXjEUuHrxEiBGCpB5rgySzXvGR88TsZqR",
  "key15": "5sf4hZukwgspX6aNGR6P9CBDyCX632couJ7aajNaTY2AHkK9dWvXBAfWu1EboYWsKsgoFH1numApVbUtjXhtbNS",
  "key16": "5ALvHZ4HjywF4k1Mjr6tTcvGVX7R1RoN8G7VJNQsCJmx7i7qrNZyQcVu1tA6LhN7ypL22Vs6g4TX1FBhPGyS8tML",
  "key17": "3rPTkxnLviK7cS4Vuf3nrHJbfjbZrCWnLtfZvk36L1ywuirwfCEhDW7YULbhuRTGV5Pq87oKmNufDLSNwL3nuXEn",
  "key18": "3pRTE1CpGhUrofwzxMxJkX8b9wzSYVg93X72MTL6x45eBHZMeHYHH5GkjWSu982vBHMrp3H57uLdbmVVosRY4K1m",
  "key19": "5ctEnBd2qcVDaw5x3KDt7vHtso7izsjTKN1QZToVujbkYXNB51nYmWNEZ43v4nzJmpJBVHf8eGucfMecapefFgHk",
  "key20": "38S8npoqb9R6Cw2DryF5YE1ccw2xP4UhwpfNUXr2zHqGdMUyUbzhhjQLYcJmEta3VR7ixGeA6C4kgiWjYCPYEjVx",
  "key21": "2u93Kcjh4NC92X7J7kxy5mcKJRnnU78iUmr34G9G7m82h4fRTLERtJUoCL53YNe8dx6Dk79xNqX8RMZG2HewWdEt",
  "key22": "5vWuraQdQdrzn2EDwCgmthwVh6v49Hhstszr2DTP2jcs8bWST1Ti2rDQjb2fVgiGCznS5JR1y19CH7v1qf71nbRa",
  "key23": "5KkdxP9GhU28rE8LFTMRYyg8mbRUtYuBLPAFjYfDs4HrLjr6mHPXsaFsAUqedrHPn19hPednBVAVA33rceuzA1ih",
  "key24": "PKS9UV5WGWaJgW2jrgAyBkLocaVUwdnsnTcXguisTecycyyCd5mdQ7eSYbi2H4G7qNUMLC7J2WB7HUaTW2mDEyB",
  "key25": "2kEDqgXbQ4ipzF6t52Wnvksixsv6qk5LSaqN4p8Jv67CudHDYc5tESgn1NA89Rex6KLepkRMvRKhaj89JP72cud2",
  "key26": "2QNjx8jc2tantXXeTvn2jeUaCv3e7wSjwFCizNGcJ8vEWRVdKtS1H2soYDLfjNw5M1HhRKujTEJvK1xYLwNuAfms",
  "key27": "5cA2itQknubcKJzu9DuzMgT7zmUW8SWqiXc7MkkP82kkD1MTxzEweN2dQPsCgrdxjByUResTuP3Js9pNAjG1ccM1"
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
