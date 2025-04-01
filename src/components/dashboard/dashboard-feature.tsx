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
    "3ogngkUr8L9NFiUGyRajfB6Ew2yKJjfaUn1igHpLpmthLhziyYUQXDERqMveTsVdvmtiDWcV9ZMBkmZJsNk72YA8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DEchZNywNpegLR3JTU77iXh8vgVUATCHYmSXmSL4LwCUNYr5PdTJZDSYu3oXV4JYykFRtbffzEj6HfCq2AomWq1",
  "key1": "BL2oit75khUSVZ4C8pUSMM7ehUuRjNUXAhj8RS5cRWytBLs1bXmy82wtn6NqYHntyQwhffgQ87LGFnmCUTdVHYa",
  "key2": "2SVpYbFUBQLZgrEMPiMgU63o4CBZ9Hoo6LN62CBSKrb8gAU2pmfX6UTYiTFuJUdvp6HDAdBVcj7UsqjAKwzzMaTx",
  "key3": "5XZ6w8UVa8e6zoDeJaa3f5C1ZgZUSzCbb1fWB4kUDqyhfvtTUv9ognjmx6H1VDg855HUPdjLsU4ButvnA443ftnc",
  "key4": "4ka4UUd9gi4vSAyyiQwRjPbf6tiLVugXKNXa6wMKhommknqc6CaYgkMHV1irqrR7Y4ezFdiim5yauGhh2j6J44xt",
  "key5": "4Sg6bF8K31yYSoTxmwsve98Roj2N3Zyr6kmcVZVCbJLVkcfrawiT6EJbQ7QA6sy62ygUaiZz2gCoMwoqzkJt9Uye",
  "key6": "3y6yvPuX6m9M6ioVGXbVkHBd6tJBgjfGPzuGgVv7mvahpie3qnK18vNNUetFCRauqrywbNhdMcdcnBKPtoKKwPEM",
  "key7": "5XskQT737UbLo1aYSa9soh47QZDcbaF8RwGX2h9nWg3Lz8fncjFry7cC1jCFKSkNxwR4nPD5aTYVUnpWhMa4u6ya",
  "key8": "5hShs87TDM951DZ4LiT4au6e87SAUg77JPvdUgR6YJQdHbVqVQJHK2fNeNbuKiGvrkiBMGT3xy5C3QtDfJBUWyAG",
  "key9": "4ydzKyPvdjcjavy8aYPywxx61NeMSZ7nQiW2kLFiVD5xXTcFH8CAYb3iXsYZp7mHmEuKQVwWodXXjektNCegNh7u",
  "key10": "3PBRWVx7vstbCQpJvkNHkEJ968577yYzGSwQTXcUz8YhdGNtxk7cVYP9LfpCZktWnSQbuz4hBWFqymJ9cVL2Xjx9",
  "key11": "3h4741LyomfeyfvoGCC6oPuaxQgVJ1V5AJnco1cdXgXmNg8MpXimVVJpydjuinGYxHYACs9TkCQJ4RtHuf9Qt1CP",
  "key12": "2h18cvPGVCaTu7m89DyRQa8DUVb47EdVhhgtLFfu2vTLkTtTt3Ct79ZTZJkv1PqeQjHebdxpdUZyvB7CdrSB39ZA",
  "key13": "5exMeMmTR2k1CgSuCRYbbqsL3Exfo1Egru7h4ex7rqxCvXPEQJavPUddNSWdZrxPV5cqBc38jqzKze3KSQ8EafET",
  "key14": "5yyFdTNKgqXxVtjzs7gBAcKKZoH7fkjbFdwCi2bEaHrKp6FuSAJSnvqcMNRT8PHS4wRTaK8LvQqgBjXkfkJxeJ77",
  "key15": "2NSVwzQwyhatPmoqWbCkZUQXvAGzhKWhXhgZ9hkkjRfK3APrkyPpUJJp5XPSRTS19W7WEcVWdxcBVG2JTbUQNs8P",
  "key16": "5oLbMzhd5gpwFAfdQvoKVWysawBWzPoGsagc6Z5X75tgBJCtGfLnLanZUzo8HWUPKcvCoW81WXGxdkvpr4UqzFCd",
  "key17": "5JQs7YpqFhA3gG8tbSNbHKR8u8g1N6mt6bvA4vEZQGEQAu5cpH48ZLRUnMk7vELLhVGQ9i9jb13wqcBdcTBumwWP",
  "key18": "54kxoqRm9jCAbA4vhr32seFNwrvj16LTR5t11dXH23VRGQaLdLMoUVsEKmVVYfdLaMrYwU5K1LExozf2jBpeS6gi",
  "key19": "2rGWGS8eXQvTRddumpREeopL9EuxkKBLuWzC71HVf9z9AQCGvZt3gNgPayagLvvobKsQumZU5kGfgeoDGBekwntE",
  "key20": "u36Cfgm48QukH6UtAhRqBz7EapRXiMdUohWcJWuH1QhJKxYTJ8tyERefnYwsNyg63s6HQrPqnaA1nur3LESy2E5",
  "key21": "2y7tRxvTM1NashdPbWpZSwPZCCKrkCXVKz4JTPcpphpwXnXHvmRpXY6XuVcrLyi4u5gFMK9c2K2YyoskCBD3bL7P",
  "key22": "47tW48hGX4JQ94skK7MTvNaX9TfbS7cBLqSxvYdzuQpg3Nq6bUAzjTaHaEuVXnXrWKDCLbsUiVcg4Cf4NTKMbVtU",
  "key23": "4s26vpgFT9Chxptk1enFa7zzKFvY8WR7aThbnmXPxK1aWnjXJhKm1ukkmdzn8UFrWJGuJs8efFd1DqkPGCX4Rers",
  "key24": "DdrGnRZusPeExTpCSjjrbB95q7P4XpR69esGjZhaDYtfFoaxd4aqeAPHY8FS6UeJ4nenkSJuZ3MnZMLjeeSSZgF",
  "key25": "2Zv8EEjaUo4nP395xtSszZwfhgdnSv3omD1JADUsy4sHBMomRg4PSGXtAicaY5kiyoxYJrRi92M1uN8A7cySHM6F",
  "key26": "65pFLubfTXToLH4tCbxvf2rfWAKjt2cchbrT5FMd5JW1LvepjxxZ3Bnmom5VsLZUP6aRx3FVJjSqXanoHn6DuyqX",
  "key27": "5oQ2enkrLVeJ62Feasq2mMjxd5f97ZtxNKWQ5yXxxRd4ZmaPmcMCpBUYKUDk71fatULNLCXYdTbMyFFhKzBYRz9H",
  "key28": "5AzkhPmVdLBy99q8nfka4svVEwWeN72fc9c7ucQ8iR2TL5K1Ga82MRJsb5DwQnzPByxgUcyckuh1r6UxWvhsSLef",
  "key29": "5HqbNqQD8cThaPm42mMtrcahkDHZk3UGGGfSUHsmZtt2HjCjY9BvWYRb1ecPun5m2kUkDzhzTxMb4xtsyiS51KTY"
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
