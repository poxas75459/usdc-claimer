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
    "2J1ueKnSCHzWf6x9q8boQUyfBgJRqyqcv9JCwDxFBz8dMNhPvpjUr4kwykysuwWHcAGdYX4oNrYbEdA9fZuN7oXM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EG1brB3X5P3q4mSv8JXrsKRxg2Z9PKWdeQpsVYYQLU1r6fb6SBqFiP3bfMWsNT2LFGoUgLSJQnvYx4qoJuBQEEG",
  "key1": "4ndZKuawFmWgwAyppoRyBtqRbb9t5GNq2Aypf5r56P7FxJmatSSnYSFocmnYKyWZH1xr1Bjm2tPVt2zZQoQDvtwv",
  "key2": "5tgb1kfwv4zj4uGUHbV6BHvGi2rNNLZEbSmCqPfzXcLmusBCJXdhyzGGnqF8L1uR1R7wZNez8NJ3WUX4HFmyVE4D",
  "key3": "Y1C5XWoZrE9c6F9NrMqzgXdtfTCXCEig4QiGTewHXbSs2H2Ma5mvJVfzsRY1W6awffzj7EocWRfNLLX783gUYsy",
  "key4": "32qmiHzpgGw1aSpufjn55wYbQPK9sLZt1JXJALu7XAV8nF2cccKSEvpcWqXwf6NZAFeTxWdbHdLpeprFSkjcD6pJ",
  "key5": "3MDr4n8bqWYRZARJUzqCda6h31xhM5vLakcfTfT8vCj1FBcELX7LHSdoiiGLdDtj2spi8xCPkNYd87jHkvYdcHwn",
  "key6": "4Ab4TwNvhiYGULgdXunRe43UYf8DCUTsKd2AZ9DAD1cvtkkV81bXh6bL3quMsdXvAWep6hDymyXp6qFMgiBBBk4A",
  "key7": "3s3iL68LuwaLbbE2uWaJcbY3f3kSuEbzrcYHCetJu3nJURyfi4oE5AKCho7J86C49x7n8e6aw3s1Emkp6eiECpTX",
  "key8": "yByUBGjsAeTRBWpe3Hin3tm9iBHC9xizg1CeNc1EvkFjtytDDJKivbmc6iFxaEurNHF7TxS2VXnTkctYvYUhDg9",
  "key9": "adB8rXPaWHdKrGz4zy242sA1UbHSPjb62FotoSWtJuVFG1wvS8DGCwfP3SRVeyhXScmJFVn4Vaypow7d6trcUwZ",
  "key10": "4s5PviAK2w7vff8qFxXYfcRWFXGx74QTKTzDY32bVc4WJ2U5QYygBp2P1GyBf8xawTdsfzhi91oJNggySPtuu1D2",
  "key11": "33jxzuzmJDxPfnpP63s6uZ7zfGgQf7hqQXXG7ebTzzB8tgFk7MQiQaUQU8Kx2kvGFQnTtC5H182eqELQo4NRXS7G",
  "key12": "4Y8Cirnx65jadHmCzQrnSEAF1diEcr2MySgMCnFucLTyhGEF1DkfsMkELHLxpTjfU1YH3GrmkKZ6AV8s35DM5xFi",
  "key13": "3QQTvRnfbUMEtMvMzsXC2WghVvDTPu6wJz1S1YXUggHTYY278g266MdQJWEKEbvYPGsXmVyNXUPLcMvMRYGa8jh6",
  "key14": "3RrL9NwUW9SwWce4Erv95vJRYsP2XbCitz2YjftZobuz5Gd4ntjEhQ5BDXH9U2eXduxSXt1kHNVveEjRvbo6M4xt",
  "key15": "4TcZTS7U8QZCJQXVACbFp5ZNUiv9zK7Narxu1zraCDc7zcyfVKsfnvs4pYw6K3nTyjgMNkG8g15U1GwhCkZ5Z2Ks",
  "key16": "4VmASehgY67AdoWwiBGkzRWuw7HQNZkiSMP55nw4oHEgCQKZ5dpRB54iRFC6EfiyrjyPMnkcErfrPzdQg5UyrUaY",
  "key17": "33vkwAieUrspfinkBUoEh42zHVRsF97v7ZQideNbW1JmPbik4LigqQgjvQ1n2ghktZT2bvkZGUpQw85oJw3LszPo",
  "key18": "29XDj7rZAHQrx71PiefDS8vNm8JmDntZ4HdgxCtYkNYgrsdrZDWYNKprT9cTm7ep8ytmGq5oEyNeF6TK5MHGkQ4h",
  "key19": "43g7Pnjkf4wZiMDtsUhN8GBbHFWdLQ1t6JiQ9vsAQkkUKccwFsaJHpGRz1fZCH6xqTNw1KK2mX63NF5TG8BD5bGx",
  "key20": "5SskdPU9G7cQi7QjBGQve8uF8FqREN6VMMGdufEBa3gFs19VioW3C1PrkMmjGmU2xaAMSSqhLRUMCTCEZtvDDrfq",
  "key21": "65Bcok5f3kEKJmwvGAQphvp8GB7qqmVW6vfAUz5iToBgQCGY7aqzMhaKw4QVsQMTwLWScLDUne5fBPTsQNYXkqtE",
  "key22": "3KndRbbxFsTjrPoN9AcK6va5AnuQsBKV8ceiqRfiXVGWD5qUkdStzHhWoSLw7iJBGDqyTcdfKWaMVEboD7fGaEdF",
  "key23": "5jAEpwVJKbBBLkWP6kBbq6wAwYSv3PsoxRNzdrwRARxJ3nKyHBZMMzXzUadTwLbqbZMQNPZJJNS1Pmb2x1DcHxXT",
  "key24": "37J6X2U8HLhJHwJyhdvgLfsJzWJTjBw2MLNzHEdZTbn3SrxgoWG8du76JQTd8e4Kuhcaq3fdepcTnRcZ7AhfcRfV",
  "key25": "66SfHyxdq5hTFLE4SPuF8PwNZjkzbYhRJwVSXVKXkEGSgzjLxzNcqyCL5JoK1knPmFvLAqm4ghPkfux8owVk1Q5y",
  "key26": "2qhgaUJ1uasixLRfsaAYXVa5oNnenPiTYRfZbRSLGUP3m9wgxUhQPxZbhV9UBEDVa4qJcAU9SVbUbsanodb4EXAh",
  "key27": "3xSKw3JBhGJbeDoUNotkU3YrVUqKsSTkEXBJH2KJhWwo4TbFNvJfrhUtjvGwJhRXzs5sBhYPeuhnqSiFzReayu5B"
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
