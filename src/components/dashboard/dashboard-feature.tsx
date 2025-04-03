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
    "5GeHUGsaTJidGU6RUrnu3bkoF5haJDRKzxmosxiJtnhpkXg7QyZF6V4uzUgP1DDVeiXAoQGtZiAdjkftUUdDXkMn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FCoSwewmpFgLChiHUbp9WgSbJrtru1K4uvnXBvDmSFHQW7FtRubhb7kyDeuwoWDrHwqVAbC7Ynh2t5pWpS3cKGf",
  "key1": "5q7u1oEf4xLdtq3GKeGxgzkH9PtgyPa8aPi8JZg3J4S4KafD6jmWdDb9RNjtnatA7TN1pEn9xR24p2hcR1SHAT84",
  "key2": "3rXGUoqTLjYitW61xHY4Dhpzv6NRU6ic73QQGL23uZib5ESSyKZts7nSAKKx8SPH7CK9x6eQWFRHogXRoU5CJ5ZF",
  "key3": "2fsZNSZnKiJWiCLN4jvnDHCD4S2P1U1A8QAaexACTJmpu1s3RPdhhLhgjuoSyBMTbj7hG7WuFF6Uix8a9FFnYvFG",
  "key4": "5gdYDX1HT5ZXwp8AGYR6zSRHkRDUNrJuASgm6dqzjz2QhUcPLwxCPUgoJiYfSHdom3TZJ6dnBNVMayCHJVeVQZy1",
  "key5": "P6AEPxpdkcgDeH1J3rQrxW3PPQSvvBBfWpoW7i6SF7kSM6oNnyQBHXZ6zZpZVV2SyM1Jw6kKdyQrTbE9LXV25aQ",
  "key6": "5MDuFoEUJbhpjySZ2T3s8SXFpnPyodaNpmNjGQB46m279H76tK6p8EkW81Y4ZqP3oWHBLjYniofevTXHarhWe1M",
  "key7": "4nior5XUrKvywYwE8U4a1totqi3xSsLPsuuaogFUigu92VtDyuTVrurJXs72XuFXd31qAhHTDESArVEqsNW9XcEg",
  "key8": "38pwMn9RMsPjVn5oNKXSzXWdftfW9u1t4AxBiHMKuQybkwzCqbXfzFEpVAaajDuQZhNdEdK6ByuUVV63kLa1tXte",
  "key9": "bqpkDaovGVhF4cosfPgEPfNRntFbXwRRVfpnR6iQFR21Zqpvc1mea8aghZ7hcemPafKSnbaFX6UtMrkV7tdeWnj",
  "key10": "DSV8nqpuvwTYJb533B14zkzRqM1mXwszusbAiZ15uXpzgx7Ho7fGi45riXJ3TWegYEJvSj28kWLgfhfwWtJKxiu",
  "key11": "2H4VPWnC3jNTd6PJLbtYtpKpYexcwkQst4pLsywjQ7pg4R7AKyxfK9WxscaWVpdL7KPPQPstBaKwMXsz9GuvWYp",
  "key12": "ALCH8BXokqc3xJi3ssC6DUr93XmT1zwRPySfPcDJgSdPgy8VeRqzvWQq1feyXfoYMRSsn5ajFhq9LsXnkfULFgC",
  "key13": "3AWVebhdpSjwPLsmaC28LRrMsLqmBTUrCmsVeMnT1GsJbjkWH578yxfgVmfoAvqU74B21BGPL9pF1if2uqPso1Y7",
  "key14": "42uvkPWYgPegEFS2UnPbG1TPXJH4L79S5YtU8B38ZYedp5tHY9HrqAW9RSF1hXxHqN2VX4ZynDjamtZW32tz85re",
  "key15": "PkpDnpgay2DqjtjByCofmJfpeNRH4EwXBavVzzduhy8ECr5oGxzJtj8XsoMBYLQj2HEMQ85mHTTVwC1tUDG1JsM",
  "key16": "3mD54QUymWw1Wv13ckJwPd2Hx9CSULwhPCWp1qoLaNdg8YfK6k55SMuZEsnZ893Uzrhk3PZDz69eidw3MeTKgCVK",
  "key17": "392VAHNgb8tbADVPFZ9U1QTS5qv1Wrd7dnd45R1bircuSjRAPT1oPijTZjXKA2tTSKXJYjETshARHkfXSWfKvWBW",
  "key18": "3FNFe4nF7ri67C6ot5mdbMy2NDzD19JFrjnYLYxT8xe7RvsjPAHK5HyuJj5acYbeuWJvE4MvEBW3BzSBrdrAmfqu",
  "key19": "3FvYS812yLxU4Znk6qdyRuKKtbHnVv1P2yY8aknURBut7vKRnkXMutBHYQdmVG6fiD8sffdgCWPRbznAAG1ThaGf",
  "key20": "5KhEoJHc25Nv6MAqNECaB5prTLTQSazSiLzG3tFdPbzqgUFpi7HZEaG27uKmZyjGk9JGMRKK1DtkJdiN3EwhzXh3",
  "key21": "5J1LRQNdeXyzyr1hsxQt6B5TSxXxwTB93rCXqVJJzt1h3km9vTWtjJxYenSzevF7K6AGQy7X8SuVFNo82w7LpUVP",
  "key22": "3dhouRMiLMCKCEk8ZGu2J5LU3dv7LD9HGpPxZX3YkyXahrsZgV1Hy1SpuT5eZuK5Q1BB1w7t8zw9dKZpeVtD6hod",
  "key23": "2rb2HazrQJe4TeR92SW23fTESy4sC5JrQSPDPTX4GKLLqhSsS3W2DjEsFkpATVdSCdk7QboXVdHR4GuRi3hJVHJE",
  "key24": "5vT45WJce3eNL7cXKBgaUv3JiFvTSDHkkzhFEwHhHToy8MEMdN9enezCeXp7FeoJcD16zJyLWW4HT2nRprhtXvDs",
  "key25": "4eFN4xNCX8fBSEhLThfas2EpVgTLwPvyTJrpNL9UUkgRktjeeTHYBfM9xKFvu3GksFVuZUFkVhEFWp9bN5gPXiBh",
  "key26": "3nTHWY23pMuqkwFsbQdFuUrNJti62ZQhhtJ497B4peYCddVAPdQUcf361fA9FFGUwtsab3X2CDG7KNoXUgwVtS1N",
  "key27": "2NU6m1k9uddmFdNF7G5PSgxWWY4GnudwKo64kSVPzWJC5CfABDAfcK6oWefWRSbhCYcabjJtPg1etP5G3TSA84mg",
  "key28": "2rU2AQqCd7KSyLsMnak56MDY7e1MawQWSeEK76LssLFEwcHKxfqdRPGK9PAiZAicgS3o3Un1RJV5TCbWTnr4Bax5",
  "key29": "22akkJJEduoFMxrAP16i1RNrQCmcnPrdc1hVY6xSLEo4EB42MUgctfRWw3eUboaK5yBtMbUByfxiwgBJw67zJ1SK",
  "key30": "H6NCRYa1wLfrLqfYAr2HYgEPWFxPwv9gcUtZhoJ6AdxjH44UhduesvpimsuGLa8xLpDGnRS5VBEGb2CZABbyps2"
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
