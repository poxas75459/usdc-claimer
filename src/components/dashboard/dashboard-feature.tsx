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
    "37becg5ZijSjH6ubf4RJkrQHiirwnc26nzGni5ggVbHwCzr6hfgZzQDm8ovWRTXav9HNY4yrBs2vwZKhCrUtgdX7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tQvFSCgycurxR1PpUChc4ir6kTDUAKrrhBw5CTTMdUWdUoe7EWTPGE4hCxQ7m97cd9nLtZ3LRysHQdmyPziGMMN",
  "key1": "JZpi2GJWHXRxFnqE7Nu5G9GC4UiKm5EzfZyYwLc5zMyusqW2GbKxDiXjGQv5fBdYu3FwJXYDepKLKuPQ3sZ3e1u",
  "key2": "4wxKSRt8nSUmYWWWQ7n8LqppJzxFuW58df38KoaUS4qKkjKhLHhTwBYPvV1gdwS7RXGYscszKBqjaK7UpQeVYQqr",
  "key3": "4szTYPwwZNSFjtNVht3tssgaii7sMeKdkSCmmJp4omv7TEAtTPctHtVLagrxmDm6nj1xS32w5x7j5LCHerCzBXxR",
  "key4": "3mfzgHnr3FSuTPmRZeWb9mj3VztC1H1KTS9ZpdVHniDxdX3eyBANMthkxy2oizTYPXda1o2r3dmaQTtWYXs1E8BA",
  "key5": "3gmTbd9SbGPzGejxoLELJ2SCxsHtXhxNzHTpH88gL6zB45HrAPbyUr1VNrvGeJ6yeyr5zChpvdVKFJrEz1JTZMGL",
  "key6": "3wGkv7TQEjkRMoX5wFYJGKHEmr3YknqGLCFiT5YRvxDmFK5FaUJJ3T61UhEqT3LEyBwiTbjTSyYGvz4QLmdSKDJz",
  "key7": "4aH6qMQbhRiyMH2EzUJwLGLXZimhbpABgs6dcyPUFU1bq5xRBm9YtbvamD2XtiHjENv3KHjgNpT7fagFyki7uD6M",
  "key8": "4m68sbWwyN9L6urygGjDTXyaeiZS25qgTosGjAV7AaQHbQ5yD9P1ckrDZ6GMZEmYZ5hXshozUEGxzxcNZvuXjV94",
  "key9": "4LjAXPk1hgko254sWPuJ2BYmzDA9TQ5biw6PuFgfayNHBdTNiCmJa3XRg8xsMPsZWkZcqSFMJbCioXwKmjWePF4e",
  "key10": "25v54FAAcH1zZ5JU11e2MuUmRrCXtsRxWmPNxELhPQeDz3vwuzUn7BB2vZbco7m4nErb6wms5EhaSqJt3nrEFptj",
  "key11": "55irEsojwQpojCBiXW4NiyS8fqQhqCMJjizsafDofkQoUK9x4q4rnrrqSkpaBsnU8r3e5uEiuh2jiUGPqGT2tKzK",
  "key12": "4LNnBEauQidrcNGP8myLs52qH6xCJLUpFkmZDpEWrbUD45dTNChsSrQDSfhPB9zebcSFURP5pyi7pLiPUGhFJ21b",
  "key13": "3cQxHwaR4RZHeR7jKgdWVV2aVZikvzs5qXjFUBiekt3hom9WEBEq69qSc2b7GC6R1tk4F2s9mGQdAFA1m8FLWJw2",
  "key14": "51jLqJRyeMMpxXfGiwzZPzMadbvGxA9rZMrW4rRvpX8PWux4CJG19JjBaber9BiSR4ite8Eo3Uw2Ch1tAse1DLgA",
  "key15": "2938YLuwZHZ1FoLNuc5NCbcY54vi22a3bbzn6waiyigNTHrE6NmGLqvAsmFzmWAM8ac8F3szro6qTgPmYSE5n5rJ",
  "key16": "ucDTHPzbC7znUutFSr3mULqwxUBkHP1jqqkGWHn27T5qcLeqr49G8JSUZedBCBdhc41c1xUsjLcGJe8Mxv8L37v",
  "key17": "5Rhta1KFeoXjb8YCLJrpyxu7bXVZJfBim1RyKCWPfN68WNpZo14DHMCCHgo2wtY6nGFKo9G28pkpgwWR5wG1Q6QM",
  "key18": "41gUWVudhU7QXH2R1qU95iiFbM9LHmC64F3BeNfPJdiEQs1jitsfqP1BjNp9swZVpJe9EbdmoZyqVUUVWhTtSY3h",
  "key19": "5oGkrBDgSaVbF4yhY8VHCUek4pbtHEdMezS28ExvuihywUFX2ZkpWZCere7C26PxWAuDFLZ5fWTSS2HW4oMS5LU6",
  "key20": "3e21kW87AwENGB2Fz2xMuNMi1YaLesg7mV3QZ4g1QgGWv6vQBZBpgfp31JAqZEYVk4NPAD5UP3VbLQSvVVrFUDVj",
  "key21": "4mHd7kqVHGkaKUpqisrVHo3uzANmvEghBpLnJyRey5L8ukHd1MGz5sVr36zDhw4WewkdtthtuWuPXMowdv5a6Qju",
  "key22": "Xb9w8wDRWuh1jrpQYY6K2xN4sWnmMHA6thHpzKH4MgowajxnXMRLCCzWAyJajRWqqWfoBxmsPaENd3p2mpE2vXS",
  "key23": "2DQ4RJHtRmm86uqDJZxhJJUgTHj9vHYPd8cdekqEpxiQjkgea57TYGEhid3Vv23ki7KoGRKdYwbwCVj9Fdhm43DB",
  "key24": "3PhKeuf2ykjkPpQd6d1B2RYtSL6qBUjDk3jfZ86zbDeDzKs2TkTutbkMNZazfW44o6NL1gv8y2z3s1PEFxXieT41",
  "key25": "4B6R4XNvpgpqWJrfTipcXyKZAQeiyYPLauenhhMHcKS6f8BfBiEc1gsYYRbUQbsZqocFf1J7QM7LnUVG9zAvNs6p",
  "key26": "24ce9QD3krEX5M71DZ6ztprgzQv3PcSA5kAJ4bpkj2ehRzWSHcUWTFCqbSngWzXZh6i7hKWdtmAhxYr1bfiUhE2H"
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
