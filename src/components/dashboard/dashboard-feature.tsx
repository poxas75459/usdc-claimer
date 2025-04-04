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
    "5CZH9h3cC97XdwuKnwzyFmYQdV9o9XErWQaXQr35R8Qwg2HD1d469H7g4zEg9d1A9gnKiSe1HbuaADUCRT3G2msY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26dM72VVygtX4nBmEivVJdtYH8EX3Sm4qe5FQaE1waztdadvM8PT1xN9zSovp8f9KHYk4NSkbD2qcGsSL173GvxM",
  "key1": "5bsVJZN5dKty9mBUf4jqozuVQR56qT6mevUEZfJGadAgNN4H4XwmdR3dX5Rju7ZetMMWf9CCPx8NYUEMZM2i9eS2",
  "key2": "4m1Tds7jhyddnT7NxyfjmykD7pTpPY4QxdPwb6aHGAkyK8XopFL3QJiCuonKspFy1pvgCMQUhp1frVs922VKaunM",
  "key3": "XmJF57N32mNE5GwXwFYwVZGP7x5ccfigkE9rDgAGuS5hTBepAL6x69jxmZn7fgygu1jXcqMk4MxDL7fy19XCAUb",
  "key4": "4Lvgus59SSomATNBGDJRS146NPfwFuCad7HrVGTepNUsMTRSqrmwHKziA5tCN965dfEn79W1CyFHtmZW32bvDgCk",
  "key5": "2GWygn7km1jnQoGXxNMhg1XHMDSqpexgrHfDzcNZX5fvW8KEJr7A7S6EjVbgYyXJfSu1ptzrKe2bvJMsFA9ATSpV",
  "key6": "2RAH3PxFpjwtH9gBkva1fq9No6rYR2kC8BQcMf5hc66s4zRwg9Qo74yKTu5gpQwoM5at5tdwf2UobxoEsPQVbVZR",
  "key7": "35P9oZaKZH8bJbEWea2p9LyyL2ZZec6hqUAXYag5cprs7FuK77hUD8fHF7mqJ8YQhek1oizcMEdHEpuPgHRA3T2K",
  "key8": "217EjuTCxaCUSan4bikHUvQ3A9qiZ5BZQuHqUbWC332aUFCpWM1ZYHKid2bUNyEVTPAbKyHhURHYGgC7XmVAoyMi",
  "key9": "3HGCAAqmEtZcVoyirZBz6767LhszGKziSMBA2Xb1jSEm5WoTxeaDgoyLMc53iPBSexKNozgnCQwzyaHKEmJBfxhm",
  "key10": "3kh2DksVnFreVieNMtHGUb3sPry5vXtmPABxx3Bopjjbg6hX4v8HWnyWfM6c8G3JBvqyfBJCnyhWnMJFxhjdQQMX",
  "key11": "2TB53DCeVtq3ftJiSiaVNvsvSxtAZbTfRDhEVyuUSRAjNEk7cKmWQPymXqaJdvuDFHQydvppPvvZofr3Sx1g323m",
  "key12": "WP85pL3BRoosAmosASGb8Zmbu2sPtioFcNNipEmCkzstxexUiMwLtPgDHq84JtdH9Ds2w7ePB9C1K9DZqqCH46c",
  "key13": "4ar6FP4tfoecMMiGBjK7TYGtT5XVmKpLQhn1mmWHwDU4imnCoGGQSqppYex4JZrTzGmzC9kRsjPrVhxoG3jcBKwc",
  "key14": "bSCWiRa6uzWjhy2E1WaQYnSWKRAVynQPJCTM4mi9uYvsVMoBoHDBuUjrvoBoEzBUA6PmWAizQNeBxejnwq8r5eF",
  "key15": "3FtqHbqUDQBzKmYy4R7yPxLFNentyqoYusf563R1QCMWf3PY58VFH1yLvaSTC5VE5iMChZFMcznMeUZ9AuQFodcR",
  "key16": "25rNDhvdjYc9eYZ1FSaQ8reY6FR6cDZpakpYXgxjzmncJCFRKzn7grrfHsRK8o4rvLVCWnHSxVougrt4wEqPciy4",
  "key17": "3VdhGbTFfNvatwa2pkLDno5SQqTgMPC7ToAdfnStcdUrNepm9L2TfNPhd7i6QZAq4m4wyzsEN4ScBmoxdpZmDMow",
  "key18": "5CC4euqqXc18fdWQFof2WMP8wRS6b7t9QrsPyW6YSKmdHfnqnWry7iwfLsZu45orMBAvyD85tgvZTi64b88b8jiM",
  "key19": "2UyXstwBku2Et4xCS2TBDNeZ3xdjvNiJopX4YLqJsE5sUkziep8wcoQk816fZ8D5DZ6qRFKY4GgGDUQhBWM8ADFs",
  "key20": "5gfX1xeRyUhDdva6U1dxdYH1Y1zKxCKLM1E8HirYuEqHEKLbMaZz4ee41jQPTaVwV5dcTgfUBv69ufWRC24Sn2fF",
  "key21": "3XA7dZnHEndDDDG7mscPC1PCGKeYGpwCi3V9ar1gKRur9hRHfLPRYNq5bxKUco3HYYGiF84Djh93kSZUV6xsx9SY",
  "key22": "23FdvWdx2i7rH9av5kjgK26JHuWepry7Sy9easNsVk7CEE5ThPSiPbe7Nqf8ZgniPdk5UQ55wL8DXmSNTRwN7RUp",
  "key23": "2hz268D58xDg8SyhxEUkDAg71eSMB5eUeuhiuj6DhuMkpjyRvhuAbco2wbTpv94K1rgB43ENjgz77VuBbjZcnw3G",
  "key24": "38JrkRDzsPXAXw6o57todXvFwUHGaMEVZwFzu6evAFxD6vuADxznzUqDyU8jxvvqMxnozYrrnRvNWkdLWTZjfGUR",
  "key25": "4KSr6MLh5PmFuN6r3egHCjCXhXMG9fzt7BXDCAcTEkyWqTTDMCpeWVviARamoHJ7Cxixj9dDERGnZWcM2Bz3aVoE",
  "key26": "5edp7Kto8FcbTBuhXAXDi8C6PCVjqdmsH1XSsBChVegSiGyE1tEiGqzZKSSaXnNLfnLgmtf2MPCnntGGaHq6LsUp",
  "key27": "36Yjiu1W6ELmXfQEw6ifYELu9BnL4MR5Nioaq52u5SaCnAbSdFADdY8QcjhBxW7HJicRk1qNtRgbYhnqMb9UmEbh"
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
