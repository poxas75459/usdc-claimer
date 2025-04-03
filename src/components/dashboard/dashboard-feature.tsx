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
    "3Y69vh67zG4JF2bLBVXKtpp1HDaheobSj1CSjsbovBZzSsQ8SX2UDwqAQEUQSvetgPmEyWz3Qa62bwMGtbPX3WFW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PguS9gjmmZ8F4DjYHgtvhMpnhJi4qjSjSeNmDWFXsPoDvhbsErGQdoRK7TSUTbRgpJE2P3UXis4zy9fQe9Gp72s",
  "key1": "64kUidFHVNCXX2GdxFGdaa1tWZWqkYgE12AcLeZYC1h6QusV9wviaLPzPRKNTgeHXNKYqkGBSvo6D2E93yZeQeCK",
  "key2": "4vscekQAYRJLWmzuSUYMK2iaV4c6FVRPkCb9thgDtWLVG5Xc9sbBM1sYFkLRbDVxEw8kvSu87mhXGgm6HUoHL6dH",
  "key3": "5f5S8Cct2GnSd4WyJGvCNBk8LTyT2hiKt5RW9qe1wFAZsxUjE8tT4bxJLquaSt9uZ4SS2tVsWefvNf8brMvDzMBx",
  "key4": "65K9ttKKM71m4XsX7rUky6645DyXYYwdyTBFDVGmKAqfnDazoScvsSBgoLsbW9ccYC5KsxK3PkbTdRyQ6Qggu5jP",
  "key5": "4fzCXht4btxbDXZMx3k4cCEefNXFZJi2XC7wFBidS51UZ1VWmwskPgeUrFjrKEUXtZRs2BShiV1BDUU1cekf47PC",
  "key6": "2Va6jDu874FY9bXVnhRKofRcpqP5hicMWUFAVSvqjjC1RzX5q5uWzwwPyPzsh2Lh1qY8CeZfnLFj2gmiB6Ekm8ek",
  "key7": "2bxBSZ7NGH5CSCXfbozMnegvqsYcrERb7Cp8kzsLXQ7n5LAmDak5icoNNLwfpHrgry6SiTNvPoNGGqHS2Xq29QMk",
  "key8": "4pHf3dbSXn3fXCGR92iQi3UAhbwHqKuWfEoSogSbp5JUKMLwr9kEJWDNDkGzAYeTKQAE69qYikkhUX14VU8tXpPv",
  "key9": "63bjTwdZwQwyMm8fCst3GGXYNrctTTbfW65QPXGuwssds2pDopU18BQtwqC9JoDFAo9QEkcWJJsgjFjGdjUoSrHJ",
  "key10": "2h7dmHnHfoo1S92vB3Zrxku2nYUQ96Ptd9J15Bh6a5ogMq9rZyfpLGVzcheHoi99kP2GpLzVvzfJosqwtaw6ofQ7",
  "key11": "2hHk3tAsUbwSWkyZhc54gk7MUmPiBdTPyhkKEZnAc5rvraGt3N2azUT3cLtMkMXKvSAey3fRB9Jj6Z2EAnLP1FZs",
  "key12": "3BRSxUj79P2CkGabvkqrDA87eNVq1BdP8dpGELT7dmQh8q2HaAz9qG1o1MgRH6ae985AcbauzLM83npbJnjoYcQM",
  "key13": "4HjieyEABMLjqFD5dqN1dPxBACyRCxhGY7f4zKyufKPQnuAaqtvAPnmCXrV7uyc5JRV5RWTva7m1Nu5PsnPnt5Ti",
  "key14": "3WQoE2dYqyukXyzQSXgCWajML1oVfP1bm1396gkn4GKwvrrZmCXRBqGarVgPjq35pmahn3VksFKpj4gQpqQdw6dz",
  "key15": "4ShzZSYLKiWjG2EoEUSQo5bMgaeqjSTsBqf17NJcH5o4iXXMpJMwSPYS4pheLkiyCdM6GaCNAM1fnPqf4FinGzDT",
  "key16": "2Lft9DwUkkWz1VKeGz9bitaPDLvDVgnqNFYJJGKdxaFWjXW4ZWrFHwwDPq7hLUTPP5i36AYYR6tqEavmvPpFALCu",
  "key17": "2Cz32A9GrLk4WxQkyjy2a47W7zjupyf4StCaakGNLjbC91vAnNudrkxNtrz68iBk7BXK5vcDJeW6gXGWuL6nYKQk",
  "key18": "4MN6SJyHnKCfcWXdiRu1jVuZ6BFJer9TbkUhMemrFMbrfS2mt5Rrumb5Qs6kkA7ZVchwxwhYMoc5tRVwEfNhc6Bj",
  "key19": "3n7jSpGeDHRtVu5KVxgmF6VyQz75gb4tte6xLDAtS4jhRkE6mzWXLv9QLVfsxffB2L7q2sRRG34GGY8EMvpQzkSU",
  "key20": "4jaGsjL5FqWwP748msjX1zrs4N5UNYaUxBTTtDtHMQbUfWwGPSSJEci3NDEHJP2PBtp5EkYqbUe8FnLH8yXJ5Hha",
  "key21": "4tEE21fa5Crm3D6h7TFSgPSe3nUmPNxWnXRDqyHMyWZwrqcZAoRQgBMxjw9cw4dfYrmRPkHxg81949L36YcRWVBC",
  "key22": "2YMVbj3g25LjsMgdQCEuvR15aSMCiaFQmC4XC2t1aG1kckBipj6nuS473hM8KiaqS9ZGPccma9UkakeQEigy33as",
  "key23": "3Tnp2GLShWrmkJ8K6XvngyhcGRCTdyYfD3huNqgYGexsJB2Ef2kZHwQTn7peFnBxLhyZd5jRRsWbubs3br4TbD7B",
  "key24": "4JuSZTRNcJ9joFDsmBiBuL7Sp6RhzSYB8VZ7k5aPEeGjtGeXo53zshD6SpY5wW4TzpspcQK5KBfGceRczRmaorm8",
  "key25": "3ZvX9JNSiALZ3uj3u2qd815JK2cKH2gfB1XKr8wvJWH5BdBZkLWNjAMFqw3nwsmCcwS7Bjh4849gwsCzUb9jXuyw",
  "key26": "5gdaZYTvVLEHBaUcYPXc5vebbydWHZrdKa5VEwJh2R7YP7JPTxZM4TsGyQ4J835hQEx1fJRyejnrNbFxoE21YyYY"
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
