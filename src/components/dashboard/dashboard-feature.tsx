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
    "4XCU3GSVjjAuwGsfP7RNwacKVxC6fmvXX2C2S9ftsEEdP4TrXKRmUGRWH4gKM1J2D989aB9mVR2EUQPBRAsoycTH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MsSQG7MrT1uAwSdJnqJSZWnb5AF9pX16FFeznjNDnYAyZSdjh7jJMYeew8ToP5eqh5uWzpuFjH9cGmpKp5PtT2Z",
  "key1": "5Sz8Saib1NoDzZvNxRZ1aFAQnTk1SJmeUX5JdXXiJYmwiK2Gv8xfHAUrWyDjutYpDc64vYGpaVUu5Nd1yHbCENG4",
  "key2": "5d7g4s6cijM4KkW9NuaYqy3BZFDfPZQr16pN2T29aSJcrrPgvxDsh2mtE7saBb6hzoX1Be6rp78SzcqRthsCi3eg",
  "key3": "46JxCH6ayKXWqpPWnPsr5yHNeppTYiKh7apNC5NsLNP4uv2M3QW8Pj8ktVtE4uVY3ofsEjr3yxSDicRcNMbV7HFh",
  "key4": "qp6o4kkEASp6d49QK2XcWdLVB31Z4dVUAZ4VzLccmqkQWVg1cFhs9kMkAKCFec4mrx2yJohzvjkuR7AqP6RbKhA",
  "key5": "5mvNNfXcqXvSjiHDrifRN7pJZd73ZvJvJdKw17Yo12YU2WQaDxdNMB6WyzbV5Zstc6LicvWSCnEHnTgiVPL4raqk",
  "key6": "p7eRx1MMBNR9FDvUpc6xHiuhwJGboNyWwUqWVXy9GtwN8VagpLNbV2aigNSPpVaFRMjyCv9tjvUR5J6TEdKcpVP",
  "key7": "46P6k9VvF468QJi2GbtJWwECDnr3sh4qNsAuPVQC7ocjYYM9CJ9DiZ8xr7tkKsd7UG3MrUuPPBdVcFDdGvghK6qh",
  "key8": "2oAXxK7ffaTNWup41t5oPsABfSYwqn879kEDVfLyHiD3AMA89vBdcTChsN87B5tHmCFpnfHbwercZxNUVdBFf3PG",
  "key9": "3VvenqWi6tF8ZUgtf1UmLEcCK37KMSSbEmKfBvjKzB3dNMwiKz2pLMKSHnPh6VGPMJGAZuGD11xSYpESyKjhq3iR",
  "key10": "3AwJbxyoU2xojiVnRNyEmi3LS7pBWTpfi5p2KpfDrDnxCDVxzrAXKi7HeuehwuVCnzU1kQkAhuYthm1DyckoyZh6",
  "key11": "MAV8RkD4uuszu9emtimbPR9Kiin5fu9i7eQhnyb7tRELH4eUS8pqeapaoTsUWU5NsuerYmRHdx569ZKiQwFUjrK",
  "key12": "47h9Cj65kwRTUpCP2K6HCRnu8bq5Vj8kfLucfGNAp9frkRE2ctKrRFdMBNgS2UKXUqvtSBSG3YGmuELTRx1uqEup",
  "key13": "34mxY73AvwBTgwwHgsb3U83PCNbAfiXCxXvocaQU4i6ezRmLpS3o3HmmF2AWbZ4gjjwMzbhH7BF7uNkZemcjDuJD",
  "key14": "5QaZcb41NpDe869seY5eMVDLaAgfWhE9U6Dzf5PBwR4jEmS1ALqoFShqshkBmraSqZMQEuygms8eCupAAjiFDEz1",
  "key15": "5fMShXyUE4J72sNzNdbj1mbbGdxVEpsLis91qd89C8zQrHPEb4H6hSsDPzz6EPVPqcBVda8c6V3YFvV9zXpupMYD",
  "key16": "4fEKmD9Q8nLLvLMm1Zxjh6iLPTx5gaKr6FSh26S4gTJRdBYyZzBGYRpR9EfLGNQQbAow9Y4PYgKTmtABj3Q6EHWz",
  "key17": "3R9VcsM7ZKfN2U21EEqhr123EqsWaxtcJnYYjGrtraqoiAU4D7B3JzkXAY8WxLCM6ugXauKH3i1CUop2unRhyR8b",
  "key18": "PhA7geGKA5yEjMTXWxJvdxM3gicqodNTtZf8eAEAxopyiVT54q3jZqUC456roah3UfrjGX3hdWHSxDAPdAotpzz",
  "key19": "47MAdrtj4bnyC2Ttp3Sv1McKfnhD4xoYr2Udrh7Q1hSkAut1hF3tVbSSJZbh3Zovi4FXRKvWKKaXfMMB8JRy8MZK",
  "key20": "2cGnLXgYYAcuM8XtAje1bWDvdopEuct6xi4LDxKB2MWc69eBQoUFTtiStuyo4SaXpAvXxQ7PggLrnXyNakNdFgUX",
  "key21": "2wpnqC3MXZ8pzgKmLfiUKmTdUXbzVKGeABpRZR5sEdbXWmr1Y3MQTFfRS9Qt3hUcDHuXPKXfDMt7vZRkrcD3pZ89",
  "key22": "645NTSJGY4ot4M3Tf9pWEDgXMeVzaNBXSghHAGHFJbLY3CY1wMJTgUUAApTpU9tk2qZi8hrA1G6bBRyZjiSckUjo",
  "key23": "pd9PW17kRL3UDpALTqyMtXmUUiJdoFAbkfojuphHvPQdZXfWUR8u1Pf31Xadj5SpnsAmLC2S7UF1c4ycwvfMsr4",
  "key24": "XqREEBknFvGcT5FNNFcGhTtTXHiARw6yVkGazygM2E6yna5DHKZGcUJHyHpUNhzBpFmHGoXQ1wCz6Grgxxws6QP",
  "key25": "38Mce9YxrsrucbrjBDwRA5Di682AnrDTPtAB9VJFb98XQcrTrFG1ZFg1tcweQ3mueLk9W7uAB9tAQXGydPdUe46a",
  "key26": "thaTD9F8J74krEnTRGAnmkK8ULYTLrtZCEc8wckzKJFBcmQt9zS6TcDVfPM6dgynYQH2TXST5XyWiHw7H5VTozd"
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
