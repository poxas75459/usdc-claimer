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
    "3p377n8dMzGQPdLNc8quCFvCGSLrHAxzFHyMMwjSB1Mcen3z297ou7qDcG3JS8a1ps3nPDfd6JYDmMopPV6ryxm5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tHCw8uzcRPESChcs3trv9DExsU3imBeSVm8S3ViG3Bec5dAdzky6PpML1YDSgaiChDq8nKMQ3mKC2hqcfqWG2Ys",
  "key1": "3htSvxiKWF4BbNBdGEKqDyYHHfYLzpegQAdafxuV8FZZ1mmp8z7ndKZzXNh7yKrq5KmNYpjyewMKHiHAhsXqkdEA",
  "key2": "38wH9F36zVrYH1iSDAda3mFeRMNgmpwRpGR1aMZz5PGTQUCu1qjnSz77NLRbkzbTmRj7VnXzbcrvmo4tnBEF617U",
  "key3": "4pVzz9tnDhfHdJgseWChs5tazdYMoe6XUDfF8rnmY3BuA6oPdk16FSVtfMjufXSP3743F4supGRwbFWgF6JdryWV",
  "key4": "Db6h7PB7F5Zkyu8wBULunubL2YKkAHs9vKbH1HzYLdwv4n5jjtQK3B8pAFFFDSdQupTMbeA3N17dNp7MDeGmp5T",
  "key5": "4RFUmcYMUuZvAxSfLcLcNzEKTMgHsJqpw8wNLy4JkrqDr4uADbvrLwioeDgcCZkFiAsFSfrv8CbYbJqcQNUyYNLq",
  "key6": "538DgsYfbqgSCBBxtTP4Pat8K8AeQ24sFaRqY2y3h8seuSaGbdW38kRbtNZCcwx4CExHj97cWxLmVVwNhNz7zvM4",
  "key7": "5GbTMbtPfzxK6DMmxtkfgHxro3cH9WfgcizUAef5K81zQm8KDkAiYwcewhiFcSi5j3Z6GxJGf5iVfx5wKomrTLny",
  "key8": "4Emmxv247hXDAcVj3HX6vZTSsWS6UzBnR92jDe1XTWcw8XvuN4JwnsEMhL5uwvBe96cSqv5hkQqL7UYBYhE2LZWF",
  "key9": "ZFgGewkbpKGGMcjQFxprcXpkcwTjYC441STpJmoow7Xj6qiuETDrZgbBhinXBQXsgqfgubHZJYyQDNDe86CuEtE",
  "key10": "59RPA8nCasWJ4btrBnkVqidYt6PevPUCaBZstFAmm4pFi1ivKhu3JcyuzuTYc3HLpSUN4S1tz6Z7N2Sp6qEFrXAU",
  "key11": "5zAeSVmR99MDV5JwFrZwSTN4sKBdgWAfSZyM1NtDuJXN7f7HfH1rS4hXSXKZqcj9a3mFcp2f72SWpmwUYA1KnQat",
  "key12": "2rrQgAowt7SA8zDhxqqtUDPxG5FYn63PRPx8asFPZHEKAY2DKA72feou44xNGSrto7e6YUBtEYg8wugSAZLsWrKw",
  "key13": "4sbf6WCZTbcfrftrKXDkBEZ58mh4HkskHo36U5ApYYNcbXQ1PVvnyuYUyWRpLfEnAhgSZFwCKFeY47BwNkY7fWSF",
  "key14": "2bW6Emq588KLBoNmoRFjESvXSUUtYYvadz5Pnr8z9S2MLzeeAUWAZJ1vmtVuRbcK1J7F2DgDYSPPR9ko8G4hRyAE",
  "key15": "3rkqA4USNQWrsJzWMV2wLEkMpi5UERyuY4wtKeyK9WBkRgwqqhdU3qs2esKKkmeAQSNbdwipzAV24AK5zZ6ZUDPB",
  "key16": "5mTqrpQzY26QWn2j4c3HQLgA1VNNHKbHB8xKdtSBAtEVd6BvbtnET8DckrRNUGA2usinMjqYyoD7XcEbvv1wYFVJ",
  "key17": "5azUEcbsm4oQWHvyRDAPdhWdroWUbDd14h8UcRxbi7jKqaUeZgvVWb1pmpGBcDboJWZewoeEDw2WNGK9XtrMnUd2",
  "key18": "3aqdNt66voS5559679UNNnxZp6AruDhDQe9cWLuCCiYTPpEvYYRYgFGMY668Atq1qexaHDNXexwQSk77JvqbH6W",
  "key19": "ZqpgLXKnv3oiZRWEXYwYNyeARnk5JAoFGaoeyCZqzBfrbWh29o2xtjppJfM5ddo2N3nMTsxBBgF6KUgDDmWqf79",
  "key20": "2atA1tWfjhj83hHTCSGQL12n6THShk9biEsGPqXBMafhA24Xz2TU5BtgLobVUWxZ9tuGd2bNJ7bYjbqax8gGg7pA",
  "key21": "4qys9dzLWaDV3gk77nw6DNhsQE8P5MBgGMcG9vvC1WGeMmUPuU3r46WMoViboLbe76pZAbB8aqrtVVATgcapWaDf",
  "key22": "5iJUuM56SLQkJ3eNRkb38AAKdWdnRRkUFXuZKMgNTv9aVMMbzpeik7NKRz1rrfGmLz38tWM8owVswUYYh2WVPZfA",
  "key23": "5TeL1JCX345HFVp9o9f6pwDaSN2SEEk2eyRDMNu5HWFdAuHqRuSmtau7XD3vavw4X7R1uLSdoKehV6bKcGupdsfv",
  "key24": "2VFX1kKWmz6Xnj8CV8VhujFG39PxMdjNauoKYghHwwcnzoo2xnVP9QULU12UUJ5SfgBrvMwopStW5NGhthScmEKj",
  "key25": "5qM77XJPvMai46emkA2bTidUZaoVmgjtpx51Cj8tuHBrD2Hc6kWf25iJCvtXU9PaegJirjVxEDr4Ez9mCwPjBfsC",
  "key26": "4B9a17RnCWR51YHWkbHQT4QYAAo8zCEfdoTHk84CEkYCbTKRSczJwX7quSNtjhAQNxqndLQj8fCEmuG9N7uTzdxJ",
  "key27": "3WTEBcxn3dchcX6qjhx3Y75r78FhZYxb66G6PBLUscDceycenVHP5ELXbGugcVDtBsrK6RBEZMqUQ4GyLLZvuwXh"
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
