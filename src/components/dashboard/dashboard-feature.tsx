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
    "4pzfb8689MPEqm9xMv7JBY51G344BcQ5LZ6eThf3kK2BprHFVPsMXyJT7jZZC7LNeBM8W5a265DPGBsREUYAca43"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x67czu9ntvcQtT7qEHJTbFTD7Zmfsm4KPqCw3poFJ1bekUq9Pfprgp9AracYQxZ5EUyxbH2DHrKowLim3MqsswM",
  "key1": "27yp8kuVsQyWKqgmzMF352gWCgxArPrzjhb9txbJYNGV59ftL5iewKXnWNj1VA59FLwXk36X7CSe8ceCTqv491t6",
  "key2": "5HcpAbPoS2mz13aEnRfAZpaDZMkMAbNZYy3iVyiYt6vKucYk8PpfkLGWfhs4WCg57rPouAgfqGzUCqa779nHDWXd",
  "key3": "4fHzJRe99N73jMycw2MSFDJXH9DPzvKy3u2fa8E4eY7HHBS4V4SL1nz8fZXTK3t4y5RcDLyQKXv8Cbby929kYFPD",
  "key4": "3Vz5v3R1JYtoRTG2Ce47LEnJd8q9pQSXdHAzoKZVroNZXQtebWJuC5qaPrujKzDP2wAAak1TkfzFK4SsFzDTfHQn",
  "key5": "36vCmAmsMK2ksXa426541udfeY51F5CMxnyUUPWb7VMfaTdSyBm4q2FShFkJGDXD4ykXQ6JBeXMcQozzCH3N3DLy",
  "key6": "4dpiniKJGZddu98RZ3rTEfEM5WLaRp2ptADZ37K3JebmwcQeGze9vfpYCvdRe2ExJcczAJK1hEt5FVMRgbi9yJcG",
  "key7": "5AS7pGm1E6i6YrzLJP39YhS3YEHaWXekSBBM2UaNbc1beFwHVTWvJvUFC7gtd7q3LjA5ANR2tDZ177XorM8puGdu",
  "key8": "3VVfzPmtEe3nrSr8HFBejay7KWbKWoinbjYVxN1hpggytonA4TupGmgqGso9sXWpjNBPtNtgC92LkrHhfrNhV66o",
  "key9": "rx5cuNt3tMb3Aycev5hnbjZu2ipRqHpMza9zoHjqceYLrqGux7RwPL74ZmcjvcA9DgAUptXYyUhvnBRKo5kz2sE",
  "key10": "2LV6xyaEdj4AigBVDJtzXfqhiT4TTqLCkxPud5KXs8ZYCKJrR5gmUL2iLD6trqhZwq5oeJXz1McBbvzfbECkTLXV",
  "key11": "2VHxjHV1YFY4vQ6Xg3JPyRAL3Z8FWsZdyL9B8MkdBaohn2MbrABdCYzEHhQQiNsEgqS99nyasva1gRAkzyQGWCp3",
  "key12": "2b4LAKcrcdUfSeJQZJjjdLGJwszP7fwPu6L5Us5zHxqjTcGzWaz4pGkvQ28HdceXdNqPGoxYpSbuVsFpUGLyfKRQ",
  "key13": "32vo8AA3D3XZUzNXjfCVxuj7Sx2FrtdAr7Gg2LBSHNusrbuwMRbxbTNCEks2y2ZW3rK1QM71zi6Bg6TYdgT9QpnX",
  "key14": "cg769Ky7ZZXSsEJB6RiBQKC6SFFFVsB3f2HJJUjbsYo6FnQPDYLR9rMCoRt5GRXZSt5fz5qokz4qCcb5oNHPzqm",
  "key15": "4TQH8qqxL6GmYcXtrSF6FRCv8aQ1CyuPjsSyF7T9jEePPG8ogMrKrog6qXXj1WRACvgxyU5joKdsKMHF1WYjJPG3",
  "key16": "5Kz8mAhGgSRJm1vmicTvH96suU8RvXgbiAe1ctZBP1UuNDbzt6HeKYCYWRdJV8n1cSdGRrubj5YXABJUKq66b1fD",
  "key17": "5uaVTJR4Hp3jjBG11Tmy9RKFke6Q2WnNxEY7SgLXur6YF39rbLDLdS9qBq6oppzdRtggNdfF77HgAiZ8oYi7bC3d",
  "key18": "4frWb6UH5BTTfYjjQk5kVkTkb32hZx7LqHJ8TEhrTUKeeB5kLZ4oq9QiRbS1jodZCwBCwVMEphNJrAe2U4FEuAAx",
  "key19": "E1k6Ep3uckQksz1Jc3YwPoGXPzXCz4VrhvFbQUmdW2mWk9WcNMkHt7GmUEPK4ZsFf7Gfq1bZL7Fm2Lm82dmTdRu",
  "key20": "4imbRPH81Srr421MYSZ1yMfXTPFvCLEEeQxz6VawNMe4TQs4PGrxb26RVA4Y9amdtkfbJ8CZjasJ6uj6VepxPady",
  "key21": "2T77YqmVqp2TJbAjDt7DYPLRTBLJ2icxsjCBJTV1B2gA6W3aJahbCiW1vJfE7mzFq8U9DSgdLh8rSfiNhnGT7v5a",
  "key22": "WQJcpkbZyENpcKuAzN65mTRXHmK9aovnYYDS22HhzPS4ZNPMm3TyAeDjvu6JbAidNkxVi8ms4ymEbmW72exgEMM",
  "key23": "43VB8xftpNfqDZu57LwfaDcp1b6NcKRXYBHn6QLUFsb9sDCBCW7q15LYXDKrpGP8gfoXEVAwn7imE6j6oHRRyQoM",
  "key24": "5j2tdyAkp5QZrMNBxMsVv1iZSq429UbQXrPzoxkPbU9agNjxHtbar1apotbZzWw9ust5erc2wPSaEDDA4zbmzLWE",
  "key25": "4LWy7Uv3s6Sm5xyRyh7VdZpToCwEDDVijj1LMo2c4XcaKWhpacfVZiBss28MK3EwoTcJM3ApB5ab45vHzHQZx9cw",
  "key26": "2TZ1kFsV3jtwxGjBtzTnsNLU3JkFREQEmLzSYADYeJsiPbMg8d4HqLxGjBPLoYLPq5TpsNLRXUxcyJ3Pc39Bz73U",
  "key27": "5WcqzZeLbdneBXpgDQQvN4BcBMM5ucvK6qLyk3nAyAXjQ5YpsQrR9pc4yCD8vAxvYcprUZJU3hGkRVsuFTErqZW4",
  "key28": "5Sg3ezSHYNkye7Vw6XDR6z96xJQiDtE26hAshkns4AEPyV2gqKugWYyn9NiaTewxGScVGHVbrXCgtjsfFaRcPEEq",
  "key29": "52M7bjScRXgEJTy6Lzm9WPhN5YtukBsW24f1Z4LGNjj9dAeahWN8YYJ4vRLcDvV6hfPqu5vH3NdmHr5HHPVdHTi9",
  "key30": "2U2Fq7EPYoHqJAimPgEH1HhjP5nEWg71AtKhhBZ3HAhDn9HriHEpzAMGgWjttDM6wSUMCEpGyp6JatwFQC2ppEQ1",
  "key31": "5XJg9XzXjPc95ADrt8WYc9Yuff6rFaS3A1ALrtGSRcJ65gDSkESA5ZNZUfZ9DPkzBa7NBPpVXtuZimYq3e9rR6qP",
  "key32": "5Xn3J9gz8HBqXh1qtqiiLCsdpdDL5eLAzYrHwKT8hBMF5dNbqbbaY1XdSeBFYrhLt9DYnP5CSvh5ZFcaZjT1HsAz",
  "key33": "5nywUXya1QfGWoGZ9q6ePzZfAtNCiH6Tqba79EgFJxer5UZLDsi9LLvAKvkWtHC6hvDFYhz5T3141nBbiaM9cDna",
  "key34": "6Nr5rpUnz6zqXxp7izxgep5ZvUinBmdAGsd62DMhZFeJZs93MPFXYrwju5Gse7M4bPBo8hJNyoeRxMFBCoCSY17"
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
