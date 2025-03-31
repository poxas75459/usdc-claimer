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
    "4V9Bc2mHuJieVUNmKM9ayPBNfHDkRa6Z7J6ixRsA9SSeFSxFnjja2iDfeYJVFzNThqxUUAdww71Aa9uC3MpCLSB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xDcRAvZAuXV8gGHRHivFbVwQjZCtotGYGXrttqBNbkLyfdKgU84RMANVafeoNUnfHfPnCRrQmaZ6g4uFhWRMaMU",
  "key1": "3ZCNd8ouXnJBXA5dnoybeqy3qu9HEWUUHPsvtSeBUKdJSELuZfy2t9fpxrekymb47ExDyP5hfvmGyXfPeMVujTaw",
  "key2": "4dXrDc7S8rWgeMaA64GMUUWPjYgieNLJFfseFmG96artTGrjEV2vVtnMtJC4kBM1mwm9WG5vzuUboJDSUjT1cUVV",
  "key3": "3qbxVjBZ4nrdMh4vd35Afcc6AUChy67LaqmWyCrxGTsV9Zavy9WaLY94Xp7FjXes1zQmnyCA13H7cSFCP8SevGtr",
  "key4": "34LmzpQeG95GNypwB2UQp6dZktVXVb61G2S61Q9wtb9e1GaAX1CpwkL1E4yQaxLu5hFTQ2hXc1bnUoY4e5TCWyLf",
  "key5": "32PtqwJJTMGHJU6F6Qdm4xs3KQmTpGx5JkWFKQSAy36v1v3Yy9GpckYjLrvgogpgyV8XRYdjgSZYTFqTnxghYCur",
  "key6": "5g1kbx8scRV84saSsUQC68fW9c1eJ2wh5AWMCLYD1cGhW5JVeziPFaLJ9FGTwhxa6jUYc4yVTszg6NVt9vBsBn9S",
  "key7": "2dgJdoYbnaZDHt7my8tJdVeqvrLxtYrWHDR1GQhaVpHCftdb5EUkPyNttbvCLdVJxi33eNqpKpSR4jd4p92c5ZYf",
  "key8": "WUxqZ5j8oEKfMyC7uX1cYcVdwr6dMxNuNDc7qzD3rQpLekU9HVCkw98FJS3f7NfW5Fhextqex5hh9baTzJpRk2w",
  "key9": "2NXmR7sq1Q7StLyNi34MVv4Y6pTh6j9EPKUK9fYjZo5moKKzcjNbAZCcXqwwa9du5Rr2NNVPzvuA8SWNpu2vNpGF",
  "key10": "5BYc1iv17YwQrBJNpGDBJzBhuNhPgXK6PPZ5r7oMXygmK5PDYimsoGxyQGh1J3JrRMPu6zAAf62xCdjeCQ1FVEHZ",
  "key11": "5atdd2WAk7ZYepCBkkiXnMKAdZarF5GKzhiMArppmesVP7fjzJonk7RpUL94xNNb9sTuCsFrmttj2j7RqH9U3TU3",
  "key12": "2nMY3b3erDi31G1mBBivoxDhXJ3pmCBxqMz2cnBBj98oCTwHWWFVWi6p27CeoittJJKpPPCnqLhk7vgFtFhAaQYU",
  "key13": "kuJ4ZRJRbzPYS3TAU6PiuPA9h7guggYT8MjbNse6xEc11WW532xLJn9E8h6mu6keGXSACjs8hUZ8VkCyAfa4jc2",
  "key14": "N9F2oE6pnT9oCeSb9Y316j6FwbWWJ2zhaiXaqz2oWx4McahGdbMFQpwH7sYGShqCMaZRY9aU89825sD7aHL17vS",
  "key15": "R6n1k7TCfCyyhtvGyubdz9UQraRmdq8bsKeMJyqRuoeuj5SgdB6adoFtHUXb6fzTmE3ESsYmiqBawhYSGowxV5P",
  "key16": "65tM9U4pcQP9rWmAhzDE4m2BWQEqZerbdQMEbzL8emPS5uzrWzYsibm7Rv1KhjCHD2Ui7fVuUbE8mgXhjqZQrZ22",
  "key17": "2cQue5enR7jWBEfZu6HRuKps2mtGAYJ5ihi3Yw2bGfaP4Lk6WK5hBDLzfrzpEp27mt32HQKqedFYZorXApW1y2iN",
  "key18": "4JfQMrU4rxT2r6LmiijRz2KB6utawae7LtAkDHNEpjoh6voycWDPWFpwF8AuNjV13Bi5jXJ7q3za463WNwcGdSRL",
  "key19": "2cVfV54ABw3QEsZndNVTRAZbU9tbwdaPb3oCS4VQKjPwtCvVqMZgWNPNmCGRoBr4kbkr1Ltn4ArDhP9Rj6XsmyGe",
  "key20": "D8Kw6ipnocgHpQk95AVH1QWwLWbhczTPbqLfPrrSjSmW8VKH1RH5jStzBxiZ5T6Cm4A8HTvoKj7j6Mb9wP5yzUC",
  "key21": "NxrNvzY5TfMnbTrXyAEh96rHjmSYtR1t355kz1ivsXVZFJ6zYUusPQQCngGjwnmKUj1r7qMZZ1yY8ZneJ5Ghsj3",
  "key22": "rvia7DsFMYsdTHsMHzV8S3unppJ3EDGSpjavDpgMWAoK2t2p3tprzguTPJeBwY2h2VKcFm3XCsZLMwJLnJL8ujn",
  "key23": "4d4J1Y5QyESFhiXDp2uDBs6jKfth8xavgwpyNoF5bYYnQhYReDJvJeAZcLcYxfhmmdgtqVt6F2n8iH2YEYjm9KBA",
  "key24": "4UmjvQqucCE6o1DdpxGxv6f59dc8fYDWjeJM8oC6szdLjYdMn4xAfLiKCZ8YSbM7rf69fmgiBQFGZatvEaSMF5c9",
  "key25": "3QNJM19yFDJRM8zjSoNXw3FArcwtc766fTTvZ5rRpwpeHNwy8ZnsdvLnmzmKh68pW5Jtzug5Nzah6AEtdTVTbSNn",
  "key26": "3XHk4qjgqmPu8TqdPZKvUzxgJ8TmkGRT4TEx4JkFiCzNMuoTqQvqVcSswuMGTLnDW9oqRJZayg5MgkjxP2ATTCBg",
  "key27": "24sdBDuCUew5Z8cNwa7fEW5dYYvJDYj2GsCDGEf6F65n4GiDUJ51YCuzn7yWrHZHx1MMZhnKiaJyEMBUAP26ei8A",
  "key28": "25SXW3GDYutQNkKQu5QGiwKWcrxMQ7eUjK3h6e9LMYhp2PQ1L4fGk5JbrGMuiFnHL2hU956MhhTyMAmWkEFTDtfZ",
  "key29": "2dELBK6ror6NPFjGrKqY9AU3SLdgzsDrDgtifMasNbesTk2XdWDaAGxTbEPyGbjSHGbWoBdnC5ra9CNe7ASoWduC"
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
