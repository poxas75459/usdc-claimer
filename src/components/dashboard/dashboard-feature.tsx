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
    "4xRzxtuxCTmwEL2mxFgFdgbjGEPLLSJu6bGRCvbWVbAyBQU38U2wsjWKh9BhwU7G3CipvKEvww9DE3a4JT31sofV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kS7Zdp9B77PhJf8smCXfKnWufMxwFkUm7mwBj8NpJZDWXrBmphNU2gAr5UgYvZBd74wMZqo3APCVfHDuh6xcgJA",
  "key1": "4zJ4L83LU6hmVgxkXgMEvkge2ES8MCEGt572JNKkduBv1nFTEogw49v8rxYD1qKbQKjm7gFwU4wpKrhdfwsDBhov",
  "key2": "3embYxRKAVXf5WGZiCivnYVNAi1hv7oPcRWUUsyYFFNPmugnHofNWw2ejNfVDedhvFPSVBE64bzFsJr9LkfXh2q8",
  "key3": "KwYZyCQ9GjftvWtmumukofCjfr99bw3v6xu5XAM6VjaDcJEvDrTmvt3Tkx77Cd8j2kaCoRQeFvBmgb9dvKi1Qcj",
  "key4": "62EvQT5EHqV7Qsr2SZKaPnfC9o7dNDdKggU8xEBs1pFSvbkkAW5CUXGw2rXX2v6hficBJKQNdSZYMJmWSuMP2ZCF",
  "key5": "2pAFozrM8SFVDGp3HXmv3aHa1T7WZFLED6URpAoSwtgnYTWwUT4VqzamVV8ADqDuFKrmrsvMDk9Dc1Myi3ZdGD35",
  "key6": "3NrGvd8gWJfSNK4XHpKbYDRroQYZZisDS4V6ZudWPrD6FJqFPiewWeKozTj4mF2Th8NkCdR7spVj2YXLGXRExe4X",
  "key7": "CDBcPBjYLCAGwrDPummVn8zmXgdXttg58dvuLUSSupojMrN3GfnKhvSc3UER4RjB4vSDNnC8ZwccKm8vJcjPuiT",
  "key8": "47ZtywTBD5gCTRhjoe7FgSKZRM2U6429Fw3YNCAZps98fN9qGDCXAWEXjKPwgasdL9NYT3J69NB4gJ8Pn17fyT48",
  "key9": "4p1Hcds3AMZhRWvEVE9MRRN1jzeRL4Nd1GX6Nf1AzMCcUn5YMBh7zWH6KAaUm9sa1b7xL9rTeA9hJJoQkyzdfWwL",
  "key10": "2w1odduHEuWKpyTCSmfGbbQ7h4ejoFEnRy52z6BsUQvnC4JZMV73s8zwDc3SZmXTo5F2j4jkukXq1DL5BviCqs5z",
  "key11": "3MDAd71tWf913NwMXni6UxQbztTbczsBKCZ1PkNa9GFg2Mgtnbrn1x69LGxgeEifeAG2g721a1rDDJXCYMvbbTjn",
  "key12": "cDWPQARqwDjcKPGo4k8gR4fCN1RFvEpAU9j75kricYpRczDedgZKSkNSgZQkHHc1SgAcpbVS7f42mCAJTtxKD1Y",
  "key13": "3U9H6FEPRRiY9v7MRDEzABvYPgZRMRjsRhTCYyDyAkKemRC9tU7uaViKK4EVVMJqk5EMHWPXYvShNF3hJ9GnMnP4",
  "key14": "5LHLDUHcup19y5V7i4Mk4VK8XGLiad1BTngzbHE1mdbjREifLScdXMiLDDCQeN6XNLRsgGhwqTL4hjFmDkzH4bmS",
  "key15": "2XuSvcWdY7McWbH9A7JmAY5TVHyHMw4pWJm5DLnN81ws5XyV8M92W8FojFxDtsofS1cBNK1VcNCGwXFVcQ5P4Zuj",
  "key16": "5keMVRJyBGMknV8SzhcdbE5At9BqTtAUNnugak8fW4N7WdJ4Csvu6oXHkxWwQHJQczxG6khYU9t9d97SZZGft6LA",
  "key17": "5Uipz5TfGVmnU42PQiFKv945ZKQ62bxz1nsJjpBxhataky9ZuCrnKe3Npam1U8UsojjWeaD2nxVsyxcyEXGChP7t",
  "key18": "2XSNpjQ5LDbN7yEofC693eRxyjFcjGn6MX375fDoiAmRjjRXd24c3N6w5VTzQ9ViLGgMK2bNJxuQCUsaqDSsCUtA",
  "key19": "2jFFieNnNNSmBtHb7Vuj8WW4gJYEEBgcKvkgzTogePhpdEbWDADBbXGJhLGE8dMLA3Fs7EM7P93p3JswM3vmjKWo",
  "key20": "5mdbQSBQZ6xfXLYtavCheTPjMVWKbCNApfDnJnajaCyLPXcc2icjpwu9AARpKoT95yBzEoSWVdEGhyTLd4CjLenN",
  "key21": "3qk9o1jvari1LEWUjuZ2ieTNaPRJxb8MWdxoshLeyxWcCxuxhbAGEy4VLLD7i8k2iFw4ubFVc15GNVUv4Aq4PDh3",
  "key22": "3mFyM5PzEz2JZbo6wzDn6Dtmq7SkazyKcQn5i3vNQT54MKztLQyymqpYvK7Qnk8rVoWT7yeaucsPfY2DyEK7T5Z9",
  "key23": "3XJmm44mWCsvVsYAen4JcfNojjdibdU4UwVkkRrWygAGvQKAgoCuSHN3KaxJ2AJ3wyvq4EAKubvFhSbT9itnUDYc",
  "key24": "3BBFrTnJUV845k6jnCKkm8yQ39AcQM8NZcGZc9eG4cAnNUeSNS5dPw47KBRCwVbBeKUBRXCdWfyheVhCiubT8S2r",
  "key25": "3RDG1DAeJdbw2TbSYSWzEN4c2XXykPeJr6XmjbSHNxyw3TSAGd4C1LNCZP38qYDiE2qHcEFdWGYa6tce4yfpEq79"
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
