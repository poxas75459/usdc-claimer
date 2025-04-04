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
    "4fqDbPA6VXdYEkShkyneHG4uo57jd6NWA3gz1tzasCscm3g4kFqutQ18F7wrSc9DjvhEgFbJqm83uBkqGy6RUn5M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iRNbWCNrcdHKiyMn1emGXys2y3C6BUr8NTxFHBiVuXduggN6c9ENDimWwAEdmXWcYSvoc2ZRwaSmMkGdtY3ctGd",
  "key1": "512HAdY35Tifh1Lw4r1mtw2U4TwnJ67ofKnW5p8T1TDWcUHbK5Bk9j6c7GXisr38SCQEBKcT8GMaGH1VC5ysYuwU",
  "key2": "3XtCfAnegVxup2mjastAEnSy8pKmUnJJ5A43pw54ucfW3HYfgnVzW35o9nKVwMWaBX6S2rt3bPS3HnmHPLWHBUPT",
  "key3": "3R81x4mtz6aFfFWr57v8FRqrNT3onb15tDhjwuvSgiSTvbkcdfwvxipKCYxzQo7NnruzcWos5Q6pDd4PK5YvjVcj",
  "key4": "66BeDdc4ekswRmHspwnBuozua5egadVU7i8FQMpsRg4nYdaQwzfp5qW5aazdYfeiRdCasVSDKNRGmHMViAhF9T4g",
  "key5": "nUWUTuwCiwyZHurw5a2826quL2oqD1i4KhrHVPXtPXzdqWDixT6We1iDrgFLCeXineNjk9YxmjfeWKpn3BD6TJw",
  "key6": "3BZVtkWphGYjwo4XUpd9ubDKibtJHPRUxhpoJsTkfGTyNshZ4u18W7STe5L19UCqW2jCJuV7Gwkn7XZY1tQAsZM1",
  "key7": "DBdvU2F7ZdK2NFvbNZ814MYS8ZJr1twBvyKaYKMp9om9cRuyNtKc29QMs1As9yQAfRSysGvxDU4cvNnGe8kq5mJ",
  "key8": "3U8yuwDfa6RSVuhGFE39aUfsqHPjLtrp8wZqnw7qFFbm6hgKifTdKR5AzRfscDFhipdTJNuPwD5UkQC9XUYkRXmQ",
  "key9": "2oND5k52RrEJN9TJCVjqY3Bu5QALwXwHUioSFLqdnoLidnxYf5KFWCwrgzoDzAWce7XTXEEfpgs6eRtzSEtEM6yE",
  "key10": "2RM4KD2sMmWdUaGf4Enyokd8MSrgioXkvB9gPa6xBvvZXQUD6q2JXLhnbbffApTyEAJSLvGr1Sr8jkSk2je9ubRV",
  "key11": "48FFXjGStLPT62w2xJtXh1yXHgxHz3FQjyMezhujfFvQWB9zWZNhX3HirpVxkjd3iynYESV6eCV5amCjReWdEawQ",
  "key12": "4gLXobq3SdtgySR5KQW98vG9iLuhEhuP8135NzV33sNo28mGHLRfHv9Y19AVFxa8KxbEkyNoqXvh9jiGHdXrVfH9",
  "key13": "2dcpxhRHjtoWk2AdzZowvspXwg3tmCekfodUub89ZH6Pe1yWgjmw28bi61ayXLSHuc7kFBqStRRvexSfkJ4T62Ux",
  "key14": "5Q1P5iSrZWny9SwHa4NFw6KHRTaW3RRgFRpuTWBzToBqcP4Xm9crhJLyYqBW2tDBxtqQWMBykNEnpoTze6aSRiET",
  "key15": "2UydwCFTVQkdHxs8axtQt5s955kPtTk4j1txsNMsCmKAJbEg9GfRCccmM7MmgvU3zKAy4YiiDkoWj3ac7AjT1RfL",
  "key16": "JcZQjyTqMuKELtCF7KvJvmNW3uR6qWWfSePLZREDhw4zo24etB81JZq6bSh1NBRyMeAubfUSmhSz69pjUFA4s2G",
  "key17": "Sj9fmWQ2UCBh7R9RKMEe4kLPgUBWMgtj4NfvNCdFfqtFoDuQynYeLxmDiFGcJGrr4JBjH78NnypzAD1dJ4mXuTS",
  "key18": "46sDYpWdDARaCy816fNszgdnUAiyZydv7fX63VZQ6BDv8tB2W2V89Kjm5nsX3hBfqX81cwJVAKJrXbkbq9DhdQUu",
  "key19": "2ZgnLHF3fVZLNWcC99oFqeq23Srj7KoZKFrm9YLsk5AdmTTbBcAVgnRAXtZYmuNJ7ygw8d7zepDmdAotgw96d2zU",
  "key20": "4qZZVx6u3bmH8tgj7Rp9wTzFovsGMYf6VeQYfQqcGs6zcrBffDrEtFh8xm85VbsMzCAgPB9JS5o1auoYvCMMDZwV",
  "key21": "GW647kiVCjxH7UVvbUqwWk4rVn1nPkKhVEMKMNTqQ37Rf4rcjyZWswk3Q8Vx5KfELeMBK2P5EWPDynPD3EFC3oY",
  "key22": "4hSKo2KQLu7Jv799jduzrJJRuY1Kb2FFi7URg3Krcbg1rMUDvTwJjFgcXzuGVL4Cp75gRHMRDDYWntdctrVNP4pf",
  "key23": "47u2xXCncKmYVbFSteF9xmKmWyEwNajRALhe4LM7LV71n5bdV37561H8Phat5r4p6f4xeGpeBDnKwAgKcYYEdTd5",
  "key24": "4zWHg8BkoJaDxcVTFpKHdDY9Z8pti1kD7b2Ww58N5TFVrc9QvpSqgasDD1zM3bdUVf6Y2H4HnSSb3iHGFSvX8GkF"
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
