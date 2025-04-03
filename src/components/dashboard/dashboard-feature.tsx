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
    "uc9bnFzNPH8AGcZwyTT28GVCuuvtwSwNnh5WnMALCHsLiirCG7nMbps6KcRDot1oJ7mX22YeLhXbpoz3WqwX6EW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XJMqizw9R78AXscCVX7y5dkSeNpTirbPU3YuXday4pMza9eCU9ttasqKXDv3wtkhCipF5Kiw9wfrNEmDBy5PfWo",
  "key1": "nJEa1GF9tR7LSwT59WRGRZ8YWhfwVZuqjCDHeYpyodWbuE82dCsNeHhhHvccpuQos2QvWqfwJu5B6j8kDHN3Pmj",
  "key2": "3Do8GXBV1upGfYQX8LET73NgP1jejbE9TWkyoKfsmqNeCu6WHckW3NgGjCQnzbzeB235rtN4rBTEH4MaGycun1HG",
  "key3": "5y3fNrRZN4sev5NZdPaSywrHsYTBeanqc19ZBUupPeMLo4YwcoStKLppTULnPhJoQBNVcYRxyEkqcgmXPhGg6HmB",
  "key4": "5XtxLabmiPc6LvnGvrYqXyvCjX6yTwjT1DHviYKyjYzDeXkUXkox4fEPcy7ffGmHERj5WXjT3SDvsPy91GmKPqbg",
  "key5": "2PpHaDaj93so1hHLXyK1t6fbwwMnSzVSs2i2R46gaZ8XxoFVuQ1xdDYW3xm2E6r1EAZEsRJsuCq2jZVzVXiMuwwn",
  "key6": "2MUE1dGL5kfutMikY6uNkEvNJVnHFkpifS45SpQTyJsX7KgMLd65PNYJhCXV5kYFiJLmzSiEFLRePLMmKiyz2dFm",
  "key7": "3H4V144d5weKN8Lr5ataiyJahBmxLTWuTzUKDyBjJ3qZNfsJWL1X8mhSrjkurcGRjzLanKjazEFU8omhhbwBqUt1",
  "key8": "5iAaHefpVn8Ea3HkrME6C1GPL2yi5BxLHLpnVRvuYX8Q94p4e9piuxpQD14F7QAppKit8nA69tvn8QDxD1wytVCR",
  "key9": "51tKZ696K7Gqju5LkrisAAXGuwYs6jLSFv49ZEu7bwb4n9YknHu6rccpfUNC6gZBsyWyqq2LS5gtVKBJxEAr79QT",
  "key10": "2NZxwGZm7AXsmbwgSXcpGdFR5VMtLjWGAFdXFsWvtPdkYwcGpQDeq8t1S2y4GDtsbJ9kGREGcBMiFKFtvQ9REgxd",
  "key11": "54ja5A8owsH3sMYA468tdRBN8cq9KXD119k7XjnQw8Crv4gVG2ScLf5k2Vgybyds7XwzkpxNk5fcV6itDwsCf1t2",
  "key12": "3Z2SK78gg8y9cgfWVTwSsQjBKwAbghZiSbDeZEbTAsC6vq3Tyxy63FJwJmGYS3Y1ahKi5ooWj1EryvxDVhK9QpxF",
  "key13": "3J5f2aZuhUi6LyZc9BkBnnWdQXqwgT6qrTTmTvNeEB8FtAG5UP9QyE7yepdYoWoMBMr4kJkTSfFtD93SzrFSXtzP",
  "key14": "45osUkZKyT5fhxwU6gYL6eFHJqnzSbgb7bysiTsDJygMDtNcbh3sZFUKNq1on5rGq8AaYd7zSDj8J8oEEyVHmeNQ",
  "key15": "2J5iiqj1HdWEZ4yCST3H8QdRmJrKZK3TUaRtUohQAuwfiHjJ9Gx2FWxbQX896iDe5UJgToVvDy9PQr6ABB4Azg7n",
  "key16": "45XvShYih93yKYA3FQ6bq2s4SFesHuACHsdHXkigy1ZeAmKJ1bMsmWEz7znHrH3aeCnFmyurY5RBE7FP8FeCAgqQ",
  "key17": "4MHWL6tE1igXbQY7sx3jVQqmcqntyTyBG6DYpUXpUTaYR6abDJEhvF184K4xeSyZ3NEhHHXhaboWvknitARJ1KBa",
  "key18": "8hKonRDJ8rJDtDKc2aEP3wRefub3L3aqWgzbyxZ5socs7cKPce1cA9ux8m7b1CA5tAZC1MLyyc9MehsfiL8xVM3",
  "key19": "3hqtKwGqLT1Z1JfTeQHSjxpbbpkrYxDEeokQqnnvnAMee8Rb2pvvnt357pwoULDfve9XZh5cc28pQMsuziR8XzCr",
  "key20": "pk6neLXuspaeUToYF8vgCsGqSLQUMLHL7CPH7edyetzwwvTdUiWYhgjEQb4RUAmjqdjSdkJwvr1vUufv8KE8He6",
  "key21": "ky8aeGnEnhDHVS5BYqBKN3fMvh7WEdpZU6Fc9X5wD5sfx4aHS2vjLTZcyT1rzvYXJgQM8AWgadfjjDUM3rxEjaL",
  "key22": "32JAFTJ1GFo7n6srYk9oVNvHvacANWbHFy8g3NA54M8Rz61X32Z4jezregSqvDu9Yn6ZEmS9Q9roshPqA2YjMdho",
  "key23": "2TXxsPXupWhBr9p9DhGsvBPfTcEgZbAWfBSNknhRK5ifHkPUsBGZBYjMTZeLxKMK2eZ3ZUWTdPqW4aBVnMKVdZxX",
  "key24": "DCiRsXzME15LbjF4CR8eFvPjhfRswmwoWVjXLges71Vswuovn2aKdbkKvLk6KJfyQM3H7wzTkK9r843pTVGPnTv",
  "key25": "3S7S67zHgyC4ZHhnFKh4RUPFEGqC3g4xhfELUWD3wBWazbYMd4bakd99rjuRNjrtYHbPBRijXwUCRftcxF9FkVGw"
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
