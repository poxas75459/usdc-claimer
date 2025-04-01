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
    "5pdhQh2d1HqYk9gPA76QBJQNTjMQSRpj4h7WeptJPNenZwmsLK9RdWFiUHBiWDT8iHEpq4yFpFBMFCDWJzwjHsya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58RZJCpSL1LxFAHjCRm973W1tRBhvUH9VW5xMTHs3bwELu72JyQvnX41LkjSr8R7z6LzAMeWfEHbSYtXCazoYXHB",
  "key1": "4GaaMWixXqUHbjS9Lq6rMzqaNb19eeaVHhVsSkfFUZp4N5GBVZWtevuTNUWoKnZgkEQbReEfqdgFpgRZZiWk3Kqu",
  "key2": "3a1A5Dx6SykBowpfHWKutdyDYbpVWK4FKA7KjemiuyUqKCp4isVViNFC85NVPuehbBfjzn5UXWJsLCHK4kDsr6Gb",
  "key3": "bY3myHNQYTKc9krZB6Ppxw4VKwDTXSq7UGShKCi3oJcCpihDeJ6TFx1iVTAZoDdaYBPqLM9TUDdH28EpQyY3Gcp",
  "key4": "4JwUbJp1jMvHdbrdJhEZtZtyXfF55ibLwDm8JXnD5mQbqd4yBRkLaVZfJuUD9jWgtZFjkXQMNrAR7pRiDTePzPEL",
  "key5": "52PqdbyRhJ89ppVLjJaJ3Bf8WJNfGgqku9rb7QQG6BGSNLT2BN1GGMACSBsK4grABBnwTuZc5DBLu68haAJ7GzEQ",
  "key6": "2PGERh81j1qyH9rp7BeAbkQ55cnmrXDX7pBqBirAshd1KE15jXWnspoCH7Gd4X9Po69qshJrxGSSiSoZ6ppGy9po",
  "key7": "3MdxAYoCs8t2whxU6eVD8wSkujiacsxjtJQ544gZ9usrBeoxmPK5eerjufruYUsJcMreQAi8Br2Uojxt385jFxbx",
  "key8": "2rL5wzt8Ynyen9XqZhqGcB8vzVVfBjFFuWyHGHULKvhND68pUhWz53daRohAi2xL24PSwo8vgpMbAEF7g36pteF6",
  "key9": "hBeWBcJbEEDwt7JeR9Afji9C9GJ8cKPV4Zf31mjsg1ucbe6aFLGU1LsxE7ET7KYaCEM22qH5VbNPELCieL1TU9y",
  "key10": "5vKGEoum6EGmrxn9bXbsfGvJ4UE4FHNdR8h7NHK3sircGsbpRKwc9Sq1pZ24dYftSW5wN6WEQVhzxAYBXjSZ2bGu",
  "key11": "22oRzGw4UP3bk5JJS3hko3pcJkUJsk8NxdcA5ukLW3ZaN8GB56WoLn3hHcHJh7oywLqPPHSu8aXzzmFenrejQwae",
  "key12": "4FBJ2BRahpw9GFvJpsRVVxv8uUMP7BXnoLfSAAiv2GPx7jMCtDvZXKmUQNaT15LkpTL1F7fZqg6izYcizwDvNNjr",
  "key13": "56NsCyjZpAmumcEKWXqUpWbJmccn3cuj5X2rSBdMJc5H1QQvZ65GcVV8x7ou7QcDLHRs9aWUKofLw57g1gDCdbRJ",
  "key14": "28LcoPJHa3H5mBc53u3CCwrDBxeQiWDw27jkuseS1rssSw5bm1UrcysoGLgjxMVC3iaCNeoegkG1M8KY6VnhghT1",
  "key15": "462MiDZBssNSLq3WiUoTsYAzh9reUtGFYdNcTzfNJH94Fn4JS4VTCjjoXAxXuUBJ8Uvys7LQvvV137nky7q9ATHs",
  "key16": "DLt6g1RZ4wyoWgoz65duKvTcgNL6feofCpTkM6AU5b96jqKeWaozdLnJg9b5hkTSWDCBZJKP2NosknDscn25kqk",
  "key17": "5yqcCFhnvFx2fESkniuFSNNzE4SQfP5QrQrM7kbCuo4ryqzLEXJzTh2Bqe5PKAZhQQ9HBNG5h6bmBSAvPpcZgw7i",
  "key18": "2cfCQic3Q8ygfS5iUZPQE5oPVed3vFhJjSrXjoBezWqeRHceGiREWMk5yQEcqR1epd1M4cQaBiG7B2beGzgwMTPe",
  "key19": "49ej2tu6izCk4D5vMwfzh7dc8V9DVxBj921SEAFw1eawUQqp9BtwFeuCKy8sJNfmG5vxUcyhnQ3HFUE6oxsZjbCe",
  "key20": "5nxJAsMS4h1G65pozZRrcNxm3xgWyu1ymdBd5GubrsrT76DyDcF6a4oYn3uVr9XBoLJ23XSAmyZQTR7vPRRznj7y",
  "key21": "MewywVNHo6a1bGLLTy39ju3zUp9SH5Cj2EbkhFSvXTGG1CXgfacUYMu4zhLdeLALtfr6ktWBkpvP62oragqf3yx",
  "key22": "4WqFi9PJisYoRcfHRkpiGFdbdjaioi5mpHF46zXwvqVYpyfLB5nYfQgftEURPThT3frYNYKzuWHDvvYHKPJcPYeY",
  "key23": "2o7QcUu7mpysTxQU4MZdnEHxfA2j9RzddnTfgYWHgPpzZCXMxyfj9PgCqg9LMmik3MAXVJ3mnNFWmUbXa7GUWSq4",
  "key24": "adxv9fd4AwhN9zbE6k5hf5MKbMHN3eMggJhoXeibLzFwVHi4mivC7mGofomVqyitL64tqh9oZVLt1VGcn9TEbx4"
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
