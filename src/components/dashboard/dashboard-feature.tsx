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
    "3PWKypuBQhuGFsWk9zjF4wPErA3Y4jHa4xQ2J3h9zWkXj8hDyK7qQfdgX6J5PhGD8gvJzBoTY2GjZEaSQDJ6zbwz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZPYR6cEFZSpoayonp5Zzk6iBZb5UydXjtcUBN9Fv3zJEqjmD876knpMuPN9duqN8uhH397VMrPYy4RqQXHbmd59",
  "key1": "2FF4MGBZQdGcNYw32uMF2vcv3MbXWT2b8E8eYakSgRmYUxpLguCtqzSNEshkpQ6CawKtvhgjuwY4mf9KP4SZfLup",
  "key2": "2aW83zXhEFUpNhukyEX1x2ULhvud9aKssaaRRSUGHvoAoBry17Ru58bH86LLsSCERe619AsoCheyTsuaagX6U3g4",
  "key3": "5uTgqYuxszVdChrtksxfiAZiLPJ1G4tQ9KUXCvgW2pu7Wpn7Foi7KdsKAfzWhC7MDrcJ11hNyKSW4kVMGNzJyLVZ",
  "key4": "23uV423jd2aHXFZTGoDyW8tAjwA72Vtx8ZMFG7XmvQKrZDmUnnYWq7mgNVjdjhptzHZZWcxFx7nZ54t5rW63reuC",
  "key5": "4e2RHL7CMhwRQYhLM9D6rpgFUDh4rTYxQPg3iwcTRGYdMW6jBL2xQHVMjNv1RSjWPttf8DbvsDU9Z5UAmTfhzWHo",
  "key6": "5WqTBtZojpEcZ7oyLEaKPWxuTD3Rw89mwSvdQNd1L3kwET8G2oA3Xvcgs1sEeHPbUVakck87JGE6iQ3gfrLAk9xH",
  "key7": "yPZNfZpzeh2BfW2ZeMHPjNbz448m3JH8tVirmYE1rVUGXKstd2rn2zHsrE6H6Ay1ULR5H1czawvP5784ke7b3eh",
  "key8": "3REFcNyuMbobws89h8QGPzbximSNi6mFTYkhXkv6fQvdsfRmuteRUTc225B9QVkVgisRW9617y475xQ3h8NCM4an",
  "key9": "4R9oQ5yjBWfcQvJweHWA5a8SpN93w7HacoTpAiM7LGj5ych548JYaBqkwNfFbkNP4GcT5VtkfEjNJQHKGgAHPauD",
  "key10": "4gU4WFcdnL86cWyBhWGeA2tynEmstzRAN2mwcn7qgGXwrRxhUZqmr1PSRX1cbwPCJg71VWNou73yEox16zDzAgqb",
  "key11": "245QfyZjZHiC63B75wFcvnPzDaqUmbnvUbfYkb9RW1gEU4CxBzPVnT7Rn4rMdx46SoognGAbJVD7MHo7PrdKNhTy",
  "key12": "4pd5833tF8GjhnrW9U3sqPzKn6R6rz5cGjMkspz7JuB5rvzuzPmSzdSFZRCHpYEPbJsmBFGnQinFYFfnTZNjy7zq",
  "key13": "3GMfZSyuQ7H3km3mKf16n9bhg6WeE2vVtHwGGf5vFwMMY8yrycMBqeZyFqcN1PQW5JQ5W1LfDfB3uJHhL9K7ziKX",
  "key14": "3rzAPBQZKvYCSboT7zaP1PCd1hYsmsScDfqFNrJezyCuEu8iskxGAeBb9JmKSCn86sKuH9yfKK3yxA6uhH3WJwg3",
  "key15": "3zsRbfzK6P1fnSc6ewJ4RAC4uszmdnNjzL3ovWrF2MDW9MPWdGHAJdLzsjMob15UrWVhnxr1g7zWiQys7aPEwjP6",
  "key16": "24GQ5t8mGBo47UHRmudm9J8xdfHR75F2BiN9iGQbMVYkPktyfDEq8E3LuqYm3eJiUftrDtxumcbQnH7H5Cijgm66",
  "key17": "2KrAm34nuawUFpfrfMpALRTvESGQtkqDmUyNS7uTVV3yoee9fMj8LkjLBYTGL3b6zVJk9t8uSqfnWzydV2Ls1nJa",
  "key18": "j7xwmfS5dRHeGg9aC8viRhMNWkmznXPZT3p4U1xuxhW2GAp37XiRExZTwKBKznrdF8j5sgmXFCpDdgWAex5rXi2",
  "key19": "59erSeL9YcErJJoezxMwa5UsPv1y8LPsncfBdHfwTDer6QwVmTKM8pbnBxho9Zh2xqmSLBjaz73zxqfUraDWHsw4",
  "key20": "4JPCQjkpaqFQM1m8VqYV8g4uyixCdwPKhKiVDLRvY6m76vv3QznipSLQgPDAjavPUynigDVHZJr8QcgFz6mSf1JH",
  "key21": "4ow1f8DrVQVrkpVr4zcP6X4tSPq6hmwhrcVTgYVd12wsvpB7E4nEZDCK36WW49nUE7tvgK9sUUWFWVtyCtzuvbJm",
  "key22": "MpZKJQakCfEJTL63p3oLLBe95irD3E5jkoM7cGiwSjpGMHXjiP6DPR3VbngScMzw789GKaoa8BcLDkvqWC5mmY1",
  "key23": "4cxdLnUG3aUjJAWCqWerUeZVuKbPoeWtNzqVAfCHxnkBVrqwDeGenmbB9gnPrW1wv5jL5vUARDtnn56kA64Epci4",
  "key24": "MxVBiy4rD4nzP3bWzcnLSXgnnXoh5niScufVSKGAvsNXpivZUrpawpt8PjQVbMpZaXf1xAYnJYgGS9y6wPu4tkW",
  "key25": "57FU5WJB9zgK6ZyGNq25SZcbJRavXRFdmbocFYDhvAaG9RmxBprh5i3VPtJsmGu5J5YnGBFbPZ12xFdartijz4q5",
  "key26": "3eSQfcgCKSMqRBk5BRwBn3diu7EVufARX1nmQ6SL2RQcdLNgz1KeNoxWt2ktWTBYbRHdA36RLDYBTdQPBjemrJuz",
  "key27": "3GdycEfFN2CwWG2fLsdx6tyXPW3UPyv6Fk7Tr32oR7ierETw7eHJppAH3F4UaUn1F4pm5HC6SUo17vC741h64omj",
  "key28": "2phXw7GcKvdmBZhF2fuF6HV9XNCmYXqfTe7ua4NyeHLWDztrqe5uPRfp7DhXztXpUk9XxmcveCpnGDhGeeFSWG97",
  "key29": "5RdJRcHkJMZN7A4f7mRBaXKXozEruaWhgwJPWNQmbfEbANqER8U6wV7p57g1Ezhg1EGMRCjJN8kdAGdxaS5wuhVS",
  "key30": "5utEBKozY8CWNDA2LvHXbToTbKj4MNSWY1ZjhHT7SaCrvtCvwLJRATkJmH7gL2vYMHtoePPaPokJUAhoUZ2e1oMj",
  "key31": "4emeZ81ZLSyXhiHFeANvcHQL6r9kmTJwaWdUqde9q53SnMZuA7esDtDzM6VjwMt5fZwdmbm6WPAvpr8kQLEy9fhb",
  "key32": "34QfcQKzw79QhSbzKQGRwvWBYjkH4vP1PiZ93NPRg8MANKN2ok5pqtY942TCJwVupAkLSHJ2rzrkwbcYzqLLBUxi"
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
