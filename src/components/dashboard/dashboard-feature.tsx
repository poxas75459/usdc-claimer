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
    "wnagMtKtTMahUPFgAxFbdqExCSTvSrKomsPpXGjZ4v7dmamFNxFZo8qL6pUY3mojtThJLzzqTpi3FbGrEWBfBvq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KREGcLUppxNLcPK1JnehbnYEnjK8HtMdxoSDzyg5vygUqAiTGHZnuRANedY7Pz2So4iwBJQCt1z9Q9Tn474Bvw5",
  "key1": "4Yp9FXVfouPjwqGYYoGntnViavspt4sVBsYADygnGZN38pdpsh4GJXCBx8NAJrCikJ2V6GZAWCo11iCL6xg6Uftt",
  "key2": "1YNAQppqsUtj9CAvENjb7miJq5TBdvMadUXpX9K5fhuCL7WdKNhxygSoKCxSiREVKAUQGHchdm6uprdNEr5sYYH",
  "key3": "3pd6jcKHdCqNnApgdFbCRr7aGFfSiT9TkQP5fngkwYDKFUwHC5yP8hZtv7DQSyW1SCNTWd5iRdwmpQXpk47LV9k6",
  "key4": "3epVkDWTrVzFcKq1kWBop5mL8AYwgMcow8irVbTJn3rjzcFCfL8iFAEUgf16ciNp2hH2xHYA9JSLttJegHvzbsup",
  "key5": "55uLwT4PMkqwCNiqsTbxgXhZAuEcZts2TQNftdkDaiSr8k8sF1VVLK9rV132H5Rm1Y1ANvGzrHeFuXijG6UazJsQ",
  "key6": "36pAkPsxs2CGtnHbmFxWFataHtvbkBYBpoBA8UMUkX7RH4AFypYrxEB7EZeSHJqjNfEDijfnQ4UT1CUPpPVwKPfZ",
  "key7": "oB9KTwo4ajCev58rnpZgjQ7bZhvC4KRDXEocqfuA7k9Y3EmWn5NrS7KtkvoH5ufZHs5a6bkgmiwZwNkBFTMdi33",
  "key8": "5HjnfJKeFR3WqYjUeiMwXLtJQQzNrErFRs1Ry8JqxrhtXcgkMgaMbBor17WjH8UV17BqLFN7G5XjfXYGgZLetE8k",
  "key9": "5Hz7jyT7ebCbVzSE4enLDd9gGpbLaV6fbZGA7qXNU4eBzT3WKe8EKyi16h9HX4Q39dXSRVD6TqXwmfFAemySp6ii",
  "key10": "bErQzcJ9FP6u6ivvciUvvSxEacnhZrooJQTAjBcx3gcBeNjzWTZkNG8ejw6Abi8QuHmr4HJiq7VHKNxESohU7Vs",
  "key11": "4aFkMhVH6LYEFhdBwFbzLnpEVewajPSizH8GqVrkj5fXvimR3MvvzSMT4JKCjjFzgYTyBwVjGVnJ6iRwasLTGNo7",
  "key12": "Edx7cfKxHKKjkQQ6B5x5JyQhdazhEkM7HRFFrTAWyyoBUydCDYikaNtHDutCCS2tCHHc2b8sSQMHz5kwq7Gf6Wi",
  "key13": "WU1cdeSThFVLQs27J7RXE6LKZ211wxDbWfeXyLegk26F4xoo3zyendxzyAp2H1bBUNDJJ46UuiGVg4LZTbzJXyB",
  "key14": "4j4dWf34vZnn4EGZf9T3tCkLMGk4TPhzeRDaQjEooudLzZsoy6ZEDpB1X2TXAnCkuRmt1zpejBggXv6h9TCH2wB6",
  "key15": "fBQNVTpYxwYCnGYseW65rvSWMupoi8qC5Ek61Srbhw45tMck1zr3pLEnkgXCJTUEFna8oKtLPZMg162ikSZrX4F",
  "key16": "Qri6dzywbapr8Eg3TMhT9BE5jasq1yeoFg6kQfdxX446CJihH2iKwZmG46BDrqcwhQDToBTz8YRNd4XkGmiLvaH",
  "key17": "2rn3i6FCpBfq2RBQNEvJSuVAruvJQZWvbCFZtjZ5T6BZRaK545LMoeMLoknidPh1hruHDDvtQyNoUUnysqR1zMFW",
  "key18": "2q754SaDQy5wDYgLhXL6XLQ6quxSMr58TNw6mbF68KnoYT7KcTKwBupPLuW7KDxw7qZLoCBWUC3eWR2vBTxZf5BZ",
  "key19": "2uRWYtusT7gHYx3UruTPMM4Fh3YHP87uC6o2qg81GJdUX4ouVAxvq7KSX8cJTA1B533ttGp5xWy9A4QsUdihYTYS",
  "key20": "3PR4UjHhCtKXjWMefvRq5ERL5oXpRcWUHykwcyu3JXozDTHXonTAk6GamLi56GX5WeWgJed8h4qMA49bDn84rsSE",
  "key21": "ABpvSgFPdNqyYZs6FbtnWsSFkF2WwA3jC8BUqFnBs5oS685RcCgtwhyRJoVQQ2iokUqmr6X6C2M6rucAW2D5cGe",
  "key22": "XfyBzDF29RsDix3WXaXHzaSccbcSdrpspwzfqD7WRB15kHy5PgbYTcWfs4XGiPUBn3fU7S4xJDndg2w88A17Sjv",
  "key23": "4ibji2oGa5ho8Qve4PFaEXk1azatjELn6RyePbMY3DWuRSSgRcYXH4gh8V6uyHZuEQM4Qt4aB2JqHMaaCDNY7Sjq",
  "key24": "4xb1NjUSjDCHjVWWQAwYi73LwQF9AKd4SqhbXJJ2q1dRaNrHdUn3bjxRE9bNMhqbeAB15sxxcyWN6ao1Jr7MMn7K",
  "key25": "jJmFyXxC2jnMe2QPhUStG1tgkwtgVjxwnSqtCAa6sYGbUfwjjepbsUgyFiK1cG5VNuotasgSyFB37EFqt3oRu9w",
  "key26": "2QpVwza1c8VFNzPECSc3AqRt6xxM87jDyZU2WLyjPdwbsGt4MDgawcz3JdZ9w51iLyjSQ7LV4uTU42hebtL7vgUD",
  "key27": "36m6d2HHGrYkebbMM56rgNPfW8hy6u8tCfE4VU6AKZGkq23NC2ZWEzuuzbfNhZYhiGsHgx4Y77DPMCLBhTKaZRdc"
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
