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
    "5e1o1PuVyFCiwzk6vRt7XpeF2MRCmUme2RFgeV1X6TfyLDaGepuJNj84uQGRJwk9CmYPzXZPh4QLrJkx119NaCRb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CmDoCKUd3XrJbunarAK7DmmhZgs7g1EQiz3TjinhnNHzaBYtvbp7uUcwSwyH7ujEnjkjpKRxS65s8pGqEQ8PEBf",
  "key1": "5nmSAu7rJQJcNZVz8PrU2quiKUD42hXrzKKvo8YpE5RpDcSegYUk2KjxkFQoJGN87nopSMGRNzcTTPNYBTd1zoah",
  "key2": "SzpzKURPFXQRQUKsaw8ceQPxxZsEtSZ9NakTcUwuidJcikgmKHyNKTYeaXp1BdSBVubuLCALpLtysqMZn3odUbX",
  "key3": "5dzJScfcMVPui8tSybCDcUvwytfYRWLcaRVvEaBuUsX97DtQ3r9nMiVnrKH82o18MszSxy5yU98j2nuFYG1o7NCx",
  "key4": "3pYZ7A67GrLtwQXyKTZ6C76Edd93b9B1QfF9sBvPpAzfqtxvd7rDkhHG15Ha2SVq9321E5abbjNCW2UTyZGpftjq",
  "key5": "4iCKo8LtaFLxiyWW8bPcPkXcg59TDjUGi84yrKgQdcchfWZHFm6WkJigxS6H7aYfd6hhFPtBRQ2pYioTdG45xWAe",
  "key6": "36sBL43vvF89vLuryCgACLyurR4JoDcdBeZsYaYPD6YRPFqYAmsgtFvzGTGG1nJ441dyKefcREqMbyDs4NVqDHSt",
  "key7": "G5ey7haek2aKGAC8Lg9CEWN8HNhWbETb7Jec5FTQ8pSbwPEHwnHKveB613AXdcRFdK8vsLoUMx4SdyJjWfTfKdG",
  "key8": "5RN6Cr475Smso169ovsCe6q9aRn9R2ueJUeouExwoLVYrxzUJfdau8M1XDTaF5kqUSfekru5qmwaai8EqoTqL4nb",
  "key9": "J7gwtNW88JjUSpdzdNycK6LzGenascSz3wZphiCb42KNq2nSmQxA9fo5cfXxHjBBUz3aKsngEGsmEBvC1pvF89t",
  "key10": "RBaFw6oZ348SPSJ8zdrtKTrD8rFCbz36pDsNqLChVkmEpNJTGQQKEcw7czt7V3dhmv1DaWoZEkjzkR9jHTt8yHo",
  "key11": "5Y8U6tmAq7hDfWXVtVumBx6kWjmzy5PWofprV6fHJTqKmosZev85n6QTiUEXAgy6huJY5ATknPi1qRvc8yFcmJMB",
  "key12": "5h5W43B4GMpbfqg7QKBa23s3Hvu5wA2NpLYeMxngYVpCr7yU9i3eMxmFD8chFRcmS8ML8kGXgkdpGTVCLtstypnZ",
  "key13": "4nmN6riPD3sb9C18vZKELFyf3SVoeUEXtLe7gV6oKGraaxBqms7naM18GAFFrTi9PqduvYHWRENxxMtM6VDgbJuw",
  "key14": "4ECQ6pVwAavdsZyn5R1s52Un5nL2nE2thpwrgdE76cGQksirBiPcWWSk7ZoKkYJMHcvkCr2a5bGH5gion4cg6BNP",
  "key15": "42VMmbkAcEuZijTVr3DQt1QbtY2rJ9yB9db4HdQqmcSHeFvVUpQdTJsYQL9PoACFGRRUYeqLx2hCqzafnkkqnTmB",
  "key16": "2c7TuBvFR6N2gMxZ88Q5s79r7ssZrJXXWhug5s4CCUHkKXezbHrcZo1Q4fm6jJE7EZVo3nwtqMoCF5k2ANYS9DqS",
  "key17": "5WmvtbQTztVhRcSBAMscJJBJCeCWAg5G6VrmMvpN9NWm5zdxkkdCWkymg75MAMgwTU93pbm6sX32C7gmqvpxSyFQ",
  "key18": "zRDcVHPSgY45o2MLyWzpBJUc79oA2uhMyofx6BibxFZhyrKv4NiaVGZLirvm2Gy9xxQHccQuYDRKeR76uc9PsVH",
  "key19": "KXAxNyVmUNhWYb4B8nkKXTHfCixFuP6GXVqXRPSyohNVFRGwzVmXa8sLXNLxASfcKsCBiRVQxixa8z2aYR4oQ7t",
  "key20": "4zi8LqfdJodbuCFdZGgJqiipGHpB2nkgyeKpZU4hcK2frVM61vkvkqNe78prK2eYmeJgF49b14bYFnWkipqi62iB",
  "key21": "4B9FQVy3wXDS1p2MqDREAcFGo9TjjpnbjQ9ihc6ASY19ZeFGw1w322gttweV4kwq1pMGUTsCfUsmWRzaWKgQY8rY",
  "key22": "8Aur2TsHK5i5spLrfsWTodo8KjjNcA9cRYSDga4yZMv26ALuci6wz5BNmCK3FFazwhLqMiitpBDVkbK824f3xXc",
  "key23": "3Nw75whQ8qmeMznG7tPmXQDWSwCAk9bo7xxZoz9TovLS8ifu7zRNkmg9JrtDj9o9CrrsDhsdmrMoebRUDWQjG4KE",
  "key24": "62LBbNcjnXLgQdaQdFUaCK73RQHVT43zTnD6DXqCYYNo4gaMkxTzjy6vLsx4bxS8HVNwFZkWdGKHFmzCrMZkLCS1",
  "key25": "4Qey1KJQinnMGZDAdsWojBuQaAa9AwpghJq4bkj7XHmrv4ZNSpTbZWW8VxtJy6P2ESSyMvrSDZb3aYcz8QFgjDai",
  "key26": "4ZKDo7VwzV3k8L66t6eXNfg3EuZg7E4JfavbvkmYF9ZSbniDqgEqUwXvfg1PyDpac8AC6qjr5sxdBFGAQRKyUMbz"
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
