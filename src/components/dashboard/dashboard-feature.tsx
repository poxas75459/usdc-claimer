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
    "31PNcqTpj1WefZ2KMo7MHVQYeJVjHcjYvFAq8cGXH7HJimJCKPcxjB1fWPBdxA9R39VNL7ShCmH4WS4RkH4SA762"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ezRuUqeXVBrH3zESdojKxqLmzn5FbRzC54yXR7gZ54NXS2N84xThsr34Q6JCeWct54CpRm1VuN66SfMyFnDE1ra",
  "key1": "SEKxeQ4GxEznAnmED6MgUdnqcJkmJ5nDN8sCtDbgqu7ayVtcfkeg1tQyqtWw5j5TbU4xB9f47GL5kmxeeoWTtqM",
  "key2": "5fsHv3Q21etvUjUB1oYi2dYZe1Bj7WbJWt5z33itjeoKPxL3vUftk5392b4yUu5YFNkt76TkCVdQKFVf59gUi5FZ",
  "key3": "46fWLs4JTkPgeuvTZSG1VyMMXgSmw5BU8hkTNUNZgLUZtwPFQXVjf4x5vc936Cw9fp8LcAYQnWG8AyWRpqS7KuNf",
  "key4": "35DiCUisYPkoXx4DFEaesW7nxVtVf2cFcJa2JSpVXWDUkddtsk36gndtYpFMxDLe9cgDjcr5n7LL1sMnuZaKNSQR",
  "key5": "598C2fHb32k7KEUE1adzdin8Xe28xN18KPngh34g2KHC6EVBYWKkREoWAUfB6u28uRGUnC1TomqSQ7gfJJDJ1FVY",
  "key6": "4WBLYy4rE6kuwjqnuJvU8bMMPJgKTPCLvtwhy6RXztoHnPz15z8qrtUbDYyVFf3CT6U7azgNWcWWkEJfwZrce3Wt",
  "key7": "2ppgZDg7KmRu4XqMUbfM6zbyL5NQeKGRRUCAMnzkh12LRTneyk7xdBKqgSahkG3h85cbTsyGmrEsuF9dWSqMTRbK",
  "key8": "5GTydHCXicKSfoGgKRwtpvcS7T8FwSzLKqDExNSsv4RPjjCnBgFVjDg281i6Jg5nC3Ku319J1hTZrAmftFmku5SU",
  "key9": "3eQEYLueEfa3huLgvr8rwTXW6MHpYg6Mkx68i2mCiLcx5yYjFhfVmVQoQcDVuqprzSy2ww6rZJkxxcx6QRTSCLDv",
  "key10": "8A1rUM47hySKuN2uLXyNTFj8gbDqucpCSuotXhCDA7cSYvkgxw5QNePrdGVjSoPjCzQ9K4YTkqvYo6bgT6se2LS",
  "key11": "3SzGSLXQhTaSyDgz3kF2mGzkvQKWSUZ6qPsVCHg9UjaR1u8Hjr7QCyASJknkrj2WF9t3DYkWT79cK7pMM7ftRjzt",
  "key12": "koGxHR5QPJMeSDBSmNA1RXHFYswZioQzvZx3aBPr22x9rUjRa17XFqsK18NWGE8oPYJ1T7XsWuPqvfTKdXwesMo",
  "key13": "4oUNgxhTgDN6B23WvmrnosUeVVKXbWSDSHDeteZE7vKgqqzewPvMCvRfAHbDVtu7C8fk6KWdwqfKV8MT6PRdgRoZ",
  "key14": "4U4JgnjZ6PYJiBY7eVNvr3R233XyB8RL3RKu5dBfWSPpQmUbThTBJyLx9xy8tjzXuh98QP3PRKCaJGeKrbT8wuTH",
  "key15": "5zdwSoXnEttDsEAJnskfY5Bzh1pTngKjgUxpyPkQWrHGUumiueCg9Dr7MU7371hhRsUaDaCcU6FWopxo7e71tJib",
  "key16": "66JXiPrryLbuV6bFe3VqsT59wWz3HaQfwreLqNMfEZHXaXAWZHVmyxFw5MeX3Spfx3VFVcaHXZj9zcnHWQQZ6sDL",
  "key17": "4RsQfnLHjZ89JiaNLm4wnFU8YV5HnckbzAtucD9aqhVpqApGDHA6fjGfaHMgXnym4gA3pgquib3RnRebbioXXRh5",
  "key18": "HeUZaJBsBbJRbk8QxNCF5B6puzzsCE28rk8ZdGbkiVqFU5DNurWq4QzFBNVRbKuA8FfjpMK5cx7G5w1rRdskhY7",
  "key19": "maNaMWvcs1tPBQtPS4cT83bcyprdwjEKbYH2pmQoQVtnd26fGU392cUF9gnEu47ZBCQieKXRLA8Dt6hR6JDVKpu",
  "key20": "m583qoawcNSSqAZRafTNRN2XRGNynXcTod9cr1NJ3t2QqujTLMqGJxq7tFWDNKU1MgwcfKVrCXSCK9P4cCNJo7m",
  "key21": "5NMCbLoCWHux4SpUFdVWWYaMjWQTJWYJMZmnSQNmCnBnz2Dkv575ri94txY2oooN2ZVJ3iJiBLgMqHaqEhExi4PU",
  "key22": "5q3mawkHmW3SV327AumZNKohK7uYacoKm9GwUmf2ff9nUxiwbvaCmaGDJreZR4MDjqoc4zMZAdpbskX276E8MZEz",
  "key23": "5NuNVEq5R2TkraTkE7KcpmVF1hZWgPSrsMd8fuxdk31Ga6rvj47c8YEaviDb4jcAhk6VGiQM6PY9sgg6BfivfoSb",
  "key24": "DqmK6CCP6K2PtRsuQk9pd8aNZuAZU2NjneGdEpZBuESSTV97umCS6c625LWu162P7mGn6PSuVpcpi9yueqjDv4e",
  "key25": "5BG9nYqUg2XB2XaQ44xMQyV69XnSPz71NTwR9y5W4zCAc7EevLtdP1Z3HoJFGwAGeqLJEzpWVxaaiGMjkLnsH51U",
  "key26": "DBCshg7iEQBVQuwqdmhLF8iZw5J2veh4txFsdiMvHQHkZZQAcHPfXyyQn5MiHCq4zauY6fjn2oopcTUyF4ZJJAz",
  "key27": "5jH71Bsxih9KkLhDWmJ9VHsQpqgqBzhbeZPFoiKTk9iomsfFHvHk2UxTFTx6uKugJFCsaWQFaKSB89dBNemJJjoP"
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
