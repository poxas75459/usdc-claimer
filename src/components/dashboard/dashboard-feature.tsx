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
    "4CmzwhebKAAVgLq9D4sq4C77GTswXg6dcJgWee4ef5UBQHs4pVi5w3vfX5id6qyFAk9RwNcwhFmimLNuHrfBTGyQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uE13rX8EddfNGT1TLazpGTz8ki9WAmCKCEZsJhBS8tN3UamJXnE1BvvT3dXkdbqVaAaSCArdu4RMUhqoEnu912Q",
  "key1": "31rV9qqQegKHgYznfhGVBVWv7Jnnxrt3issbkRF3GrA5WHiXLGN2Vs8etDgLnyWHKCrrLxhP1dQSjQDDQiPPPBPK",
  "key2": "4N81wSJzmE9GSEECq64mNjLaBk4kobBhNY3mkbHBWzEaeZwaxdTrgiAuGgEhyB6sQJRwZXczPtF5CG8ZgDC9nDn8",
  "key3": "3PNtGRAc3fzA8pH8ycYp9FYwmdxsAjKvruVFC1SnRrjUL41dMDYyxUf9novtabP3znMx9JtUrm8CHryt341PBnYD",
  "key4": "2HkdZ4FohvXYPq6LnKEXtXcwPdNwyndB7HVcqkmTNreVJHKLxdSRaGVSHkpMpVCmv7nzf394qbE5a7w8krpVzw1q",
  "key5": "7cAqCwrNTsRD6PQLfrEntqgwj85pi25cMLD4zKysNXkU92hzvBAU28zVeWcfS4n1xqVQBVth41r8PgLwUSgkWNM",
  "key6": "5RpMVp3VyKscJFuErP8o6S5qug7Ms7Dh3S92v3HL5s5rNFExaAv7FmTWeMDiSn3udxydB8RGbNo6ij6qC34Yp7hR",
  "key7": "jyK1tVrce6BEfCtevuaGEWaghkoEhvMNeZJfNDpMV7omsXsW1rwyPPKW87VCsAgns5kj6ZWDNV65kr6z3s87iv2",
  "key8": "5nEC5sPZ2wPfeezDvhkjuFKUJ629mtUcEJwXdLHm9FTCVr8DB7mmu9iwvD6HTpponcdJJ9m1REEjczr6GecLofQy",
  "key9": "5YL3tjhu2fjXLPLz6QxEexVFKxfyznnApsKh71o3ScEMDSX3stzk5k6mAX5NEqsKLs1LAMy8Q6iRNy9t8zKTG1UD",
  "key10": "2LxYWinePBr1wnPKavkLidKfjRwF7agobpefxZW6MWJRQxa6obtakdJjy9nnvZtxfkSsEV7xLvJXqEN7nUG31cve",
  "key11": "AnegX3Zj3XvpDfvkeZgekyYF5y3u7uR3Ny3gn3UCi8p7kj4Xb55dst1taHbJdT9YoXhs3p448RmLYhL1UtE1SXk",
  "key12": "3gxNjRZNqTaAJDnq2btUqZ3M2xQqJwB1Q3Q1ZPd4jtHPyuQ4QDZY4iNYbejaTwXpuhJV6dn9gWaqcVsAwk5mPwzp",
  "key13": "3n8AC6dskwmU4HRUU1rJzSknzuz7DFFfNbF19u7jbE4jLkdAV4yjfjrsikkTyPv3WsLaKd4QBwjH3Ak8Q2uAMpU2",
  "key14": "65LRsbdKaHzkyqQbtcyS4KuQ3TqovoCTrWNxNQmrd2d8fMAWDWC9HeehZseGah5HyH2kyVdEwxwxzT8o4YRd19iL",
  "key15": "5kjgbTxL99BZ3GqzcZ7r3NyF4ZkBJiuUz6YhWHu5cTe9YVmTmniQFTrLGe5UrLwT21dbwqvQ8ki94PHDeVphuaPG",
  "key16": "4hYiVvJULrAFfTPRtY9nk2SaYcz3egofYYa96zYX6v7UNF4bkKjrhHF77UxtCxzu1XCrxYTzhsJUm12sqaXWYadV",
  "key17": "763D4kWoVS8MQ9Dsskst8m657h5TsatB2xE5YnNgsVJE5HFfnhh4Wvq7dMqKYK7DbCLpvN4S9PdJ9jFrk8az2Ck",
  "key18": "4oPbCzLfDV8LyKxU1PSH9GnouBiTz8dPoPMp7eKvNehrDNYsbP3uq5A1ECzicLXBfmZVo9PoccDYfX9rVkYXDAFp",
  "key19": "2p5HZ4zazKfp2AXEqTm723FkmMjb8pbthqvVRSjHjyF45WQrCsg2HG9t6xS126WCaqqxQqJJRJ29AYbQV4QMr2Ys",
  "key20": "2H2ySXkMXTMMm9iF3Q5taVbnVPZxQQbuY2irxmycQrdXRnYwFgD83V2NWFMfXTDwWiUiLAv6PngBvtmzoAZfCde9",
  "key21": "4P2aJZBERCDF6J5mbwYXT11K4fUxfq5XBv9Ximm1m8cHNTS1d9rMpt2kw7o8dRj9zUTJHrG1uw7NZb11tAgAuim4",
  "key22": "56Gw6K8vgyQ8djd6JvdYK7iPvxXZhVSvsTHe2xaXj7gQ1vwekWW9Q7is9HKyJgciUqYpg5nEst3L1diTp8qVNQv2",
  "key23": "5rCTqMZehtgVMb3QBAJ38eXRw5pek6dbuK2vnDYXc9A4xSGxxtZLFj1bF2vtiJ6AwishQtD6e7er7tUtzUwa46Hn",
  "key24": "4ZTtXoDhXVSAdSMeCNCYF9nJj1y5EdxivmvqK7KaWov8mTRDUMTKbnEwEg3hTVFVKSdFG1io9z9Av1bakf5yPaFu",
  "key25": "25a7SQoPTGaQrh5RHcpNpwBKoyKccp74Km2Ndm93XVsfHbDqNSLXKLtM1vMMkeAGzzonqFqvsKhCSL65Fj192LeZ"
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
