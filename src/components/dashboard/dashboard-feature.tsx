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
    "3jcaaZg2Uo5NxeWHzi5uTts8tuRs42SZVeJWgJ5wXLdMBwftVm8hKSBN2tZHButupTeR9zhwyWBYyde2nytWKvY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53wuFTeXFX87tCfNf5TTFGpBxpyZGvVyVjQ5CxNcoozGf5zzTjKPfG5JM5AQzpGSDXNBehhZu5d99TAYiiGCfJQb",
  "key1": "3J5uZauFLWNLy4qp64ZtSKnAemBXRA2Ph7f6z2XCz5EWwSgDENmxsWr8ZLg9i5N197Xxz28NhPDdqFa5tJPBrzVQ",
  "key2": "65CFpo11SFCzPzNR1grFHGgTirepApYXu75WUhfCQY8g3kYZe6oW7GrW8tMJXmvKxaG2HpWrtWATaXTVpzNqTjk9",
  "key3": "4dqsEDc1ZdXgju6sKsUk5qVmVoM1UFyb1sAuwuNUkstNjyALsR2ERm8NznnHiaeinwSjPbGsmAorHcDQHNtccAPR",
  "key4": "5g78Mwmum4VJ6f4csRDC5DNmdsfL2rKHx5XhdZdNUKzBuP7DSgNCjHCkkNfmjSEgPQ5uN7nZqntGUioP7nabw1Qv",
  "key5": "3riG587kRXVWM4Usb4SgUTzzMZvGdVpUmgg8e66uSJPCva1Bxj2JDhi1YsWebbrGRpkjBJp913mrQQLycu4FqeHr",
  "key6": "2NH14sGHJJ8f4yBELLJw2YsyQYJ3gBZQZpwPqQvUzb9CYQMpCPW9GZdFxXJTi6yXpyM33V99kavPae5e8dPvU4fp",
  "key7": "5TY4HuUChUai4M8rfcmq1rize4kcpp9E1h54Yq3iPHZAA5Fy3CxGxAuZuHkYn2AVnafvUhdQB4WqX1ZZw7LvNLWy",
  "key8": "3ErB3uXg2Mxu2BM3rVD76ANP3DqMXLmpw8K9MAr4tkqUkLKVZz8B7EuJ8Gi9aX5ZVcXsc338kfqePA8BaonCQSZH",
  "key9": "4H9hwdYMrR262ShLkjWWepxenAQ6JqGUvaGvPUYfbZXvfVovvCb1pfDxq6Bsaoo4hL8baCYCeV3Ycu9sthNdb3it",
  "key10": "FWrPETS1WQ8UcFHjpbMtbAs71pfwD5YbNWgwNgFwRXmvG4S9rE9da9m6z746btcadze2tTwB4iUg8APSJuoVogG",
  "key11": "gQzA89KGc17PEbVvj83BD9hF8GbPZV9hhx9ntjUh1bQ87no23XkVZggXyap2zXECBXgRwn5BusDjeSjJnp2K31A",
  "key12": "5tZ7NiazbRrtB9yuHAob53DNW1ruu7RSQz9xCY6mjwA2JWQZiCR2TVRNvG3YqJYZwz8SZxueWg9BQSbD9AX3hBC1",
  "key13": "4ZPXg3qHAyH76ihG24VPYgA71QK269D7kqFqPZCBoURHu6HmiYfxH5oh2Lf9GoRfdQ8eW6Dtyt9kA49KTL6pLstV",
  "key14": "5ib2As7V2tZxt9pmZTUeajcfgGffTLUNPBarvEDVjwQCSDmzxkgxJvarfCowtUN9fyU2ZpceJjLPFfPkHGijekZ4",
  "key15": "4MEj1zEa6KP41fWw21tL9HbUs4GT9CkU1cedfwhWyYQW4pG38BZuXD7qZSZtYB4zLfbTAv3rKWWF4Lq9eNpZFz9P",
  "key16": "2mTDGefa7XgAu2LqaguGUDHZCHWvdK2rDMQQX5qwsSGPQbyCVEi6NjfB5i5m9pBmQcqhgR4t5oW3Kunot4qfdyt7",
  "key17": "uuiPmzzkhQxpi6fZM2SRa7mJGyHDokmyCJ9aa1HUqWpGqs87kQA4pPpY9tDZyEttLQ3og66rbRCCf7GP8hMnE9N",
  "key18": "4iutamq5F9zNHbNuAj9sAYUeZSCWPqoPo15qZEj2pgWiyn8rvWFaeq3onNvic2gi3S8JddCgeVAXPGq4UmzHvJCy",
  "key19": "3hbWz7p1futbFxWrZ8xYuhZ1Qr8Fp1jDev88uGSPB5Ab7QqUfxFEsVsX68b3Lrphi5oQfvza4TnJKaSnyX66bFeV",
  "key20": "57pvbexDL2L34j37MpkW1Bqqbph1ehnZ27k7zSTsNTK7LThKHzeG7siQQW8dMiuSvdCtH6hx12aneG3eJWD5bDMF",
  "key21": "5PaZwyigEhg5UUjHdGekqBKrZWvbzQz5XGLoei4VDydjVu9pvZHM6wHoEdz8NfiqYWCeUEgaPnK5e5b3sgoKkuHF",
  "key22": "EDfmt6nBaFF1h2dSUZwUiT57tdxtsTsKnKfUn69MRYWCmaCZno4nFgXL5vgyMUVe5nsfxjWWDxm1j6Yz6ip17jm",
  "key23": "3JerTsZs7EKns7pt4X9JGihN4r2hriy4853p96vdzSD1JPST15H1qeX3nhdVU1qUko8gjGeP4M9BSjfSx9vCh8Gv",
  "key24": "6hnpFB1EWH7WVFYy5yX1N18TWqmc41B6bSdb9PqFBidwVbskjaRzD9YdBNsz5fpeJmK5n36KmLZX7CCwwyHSfVM"
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
