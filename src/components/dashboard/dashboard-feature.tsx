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
    "3uf6uNRktSwEaPDEm7BjLSBGXQqZ6DmdcibWisavgEFYV3rwzF63bdNf3HbCjHoPN25NFD8VBkfeUH9nEQtxeK3e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iPahiVidU72hFchyECJegVFN9vYMqjRQc8G1zdA9AjEHtJD2Mr8aH6ih2hgmBdSNpAqLjrvs8t8Ts74s5gS2cuf",
  "key1": "2n7naz26Csdh3YyXmSgRpMVngE2vYS7KxQFdgU1jcLR6SAyXeZdPv6z1oFNCU5xkPXJUpfMvBmhVmZFuE7uQTGNz",
  "key2": "5uV2cdCLsmgUVhXY1fqUryu2Ruo2gt1iA89cGXQ8vzPG2dps4fDfEJYmyq4bA9ndSdMDx3VGuRZG5Hjs5LTdrzLX",
  "key3": "3kGEKCdQVcdEbmjRZUKSMWtK9mhiXD1dDxYtem767LJ1CMcBr8rivkEJqmiTTVTCAZ9Z5yXDffXgxwzGG4hH2qbK",
  "key4": "67b6aJFoGtw9mHNNqMbH1N71x19DoXufjqpQmLtxhKa9jnGZRiCehsC3WqDP7mVFXGvRrmu5GEDamCzTbSnCs8rz",
  "key5": "5gA6JRbs9JjvrPbfsYXkydJXLxsFYyxdcMHQH7cPwoj4jGMR1f3W8NyjNun37Vn1R82A7QyaiWnh6WFfWetRABPf",
  "key6": "4YtFtQxaDrbYLMLmKdFFBHPYDBY5X5m2xURRYqTCsVri3xbvJ1toniE18NcRkbTpfvM31cqaA4hjkHr9Kms1eKe5",
  "key7": "27dBzNXjFwEAYLP39FFkirenGgW7u3HyfBcQsdVM9BL4gw1L7zmeCsrRcmB9M6UCGg94DaYaaY6f6UKos4fcm2vC",
  "key8": "4x5CSuLzPe8ssnpzjutrmEiTpwjy2iP1zMpfr3imHvRUxut6gLT7XMcXiU5qzW3TjAUjGmRLtgiQN4FQ3BjZxBAu",
  "key9": "61nY8ftXERoep4xGD7dq4xvsTgeiVEPntoEy7LLAfxK27cxcJvdCeaHHCNfiVrvXdibvgBmAzUsL3JQ62ogxav7c",
  "key10": "3KXTb1fhxh3krLZDjUsykmbbeaji8HSH9Eo4pQSBV23FeiyMZg9M3iDjwrKekLjWchb542FTiDZnnETQLzAvgysx",
  "key11": "2Mp5NWUXGstGDB8yNfBqPyVWQSqVcyxAtsnuxReovxyXNCQyJ1wserWrN719H3NDzJabqgv5Jrkmi17WwyVoLiev",
  "key12": "2ZuMcsKu2g8UsfG2ERbMAPrc2FQRhZ5mrjcx9ENxP9dNefeLUWqM4FEgRyVSqzXLx1cNsJTShgYxeVrRuefJjJ8J",
  "key13": "4C3RFnADjnKfEywmRnvHHbmKJv8Zzkbz2WdDZzviyapMNg3MEtV5hroMErMDviReWUGAbn2EuUKUuzmyaLpXBPWx",
  "key14": "2TpwwgMHrNSpPaEFtW7pASMiPqmwgFuMNCVnbHsXWiyivviuFvrBfppRGnJSUikfB3ad7oLjub17rZNrDbyKai2Z",
  "key15": "5w9zcRfGJHDqYTsuSmawp8DxMVBG4bTCYNKjQ8VFTzFkXqq95Rzx8mzjp9mEh7Tm85rB1vCwG8rTNph5Muw31FiF",
  "key16": "5MARwhRVZ5wQu42YScMSwgjsSUUgU9qkxQ88Q8dmeyGdwWuyNEvwSeHLPRaw5qi2SmhxPUtWAfE8JEw3BG3Hvz7K",
  "key17": "6GCuF9tPaVzBadHyvs9V6KQQQUuG23wwdvAQydZBSZAKHYfNeoGtvuM14jzXJ7kPzdCYzDTMZHivpUG4nTJNN1d",
  "key18": "3M1mQAxBZ27CVgYuwS49wGguKUupNbvwqkcvDHHgJCURg3oKQa428u1HGjsEaqL5BN99TzgL4z4HGVWKmCkQPgF2",
  "key19": "NARhM4geC41zZUKbGsE51f1vvuJPWdA8SJpjfA4RXe7UQXa4qyHCxhNYV7YApgvY39H9shFqmSmWVpTcyXgMf1S",
  "key20": "5CLqCoD181LtZFarxtaU41Dz3d3DF4axknY55mJvkkdg3SvsszkSfuufQpGWCCwbYMKogi1zLmDhSYs3zDk56dNo",
  "key21": "2PfnkS1tR5yFYSrUhtpuuikrud42yDRiTDbUUsdaAWHzoy4FZJHBz1ta8vE1pEnoyWqag69F253SYFcVmCviGCb",
  "key22": "4k5Eh132XHFgLJa3L5ptowNdRHGE5oJYp5FMzBmSvy8TFyFzfpLUPa9Mz8z2kqoq4dpc2nsE4UGS2tRPHean2eGu",
  "key23": "4pv2nVDv4avtAJcg9kR8F97PBaZChmQKVkDchAbuHeF7c8s2HqGnXBpEU3moY4tMnrEeAaiNQrohAuT8PbZ8Cw8z",
  "key24": "5ti8us6uXSoRSUk9V3YS3fFVUKNWqXtEnsmnyVbmDDifV7dbvZm8gwFezaGgCmg6kj5j3gEi7coe2ph9aZ84BXet",
  "key25": "4XCqC7LzWvvTDHvw4TBTdUYAoaBSS4ogHFSFHpqy5uTo67jg4utPgak8kkNTZ8sm2rfAKtQ5WEKUkhPkKdvf8ug1",
  "key26": "5zwy2tQVbisvimbZhVpDxwDB7PpCWChMRkk6dXbcQTdoU6RzvGyYHFYzGvQSmAX2TGv4AW6S3dnKUMxFm19LCema"
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
