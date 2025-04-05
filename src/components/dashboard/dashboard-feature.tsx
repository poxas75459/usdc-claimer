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
    "2EiEoj75VHBA8CzcN9vgzJF5Mkmu4L6KSFqcdatvgruuc78aDcCHegtSKTzhv2M7NaJHZ57yu2ZJtuLY3nZ9qZHk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FE9WMaRbVVSKstcCbaHVxXpevErmbJGzneuuMGbSNfCtcmzbwdjF91Na3sFB4UULpLacCLDpuXsPtEgUacb5JMe",
  "key1": "4BtLkfuLmWFq6VKDK6tbcwPtxPJxyfxLo6jnhdAWX2T9DJYFtxZHXaNZ625mW8JishAbxgS7QHCCd9VaHFFhHAzx",
  "key2": "5Ch2pbp8szrDHJsmNbZKZmoMY5DMqKuNZdax56Kt8yek6ALZqTeYmWzdKLnf9TubyaKGQvWuvsLsgfGPyzEzniQ",
  "key3": "z1ZNoXK8ps1ceoeEUULDrPJXQyyR2M1US799UwT9aWEqgau9tCKK6gJN6nU9PoP4nKMTu2v4DQDdDDup2vFLBrk",
  "key4": "H3AmWRFYk7NoVK7a919ffCEBUvoWAwu7hGH46v7yVxawR6Nvfs5S2Qx2TNr5P38231kS2zSaRP45J16EL7CtJn5",
  "key5": "47SaP8jtJjDhXefPQVsTcA7daRy89bMLp7pXU7NGCLBhTwVX74EgFjfS68AgHawhRTbFN63PNqdbwzme3hzbdF8H",
  "key6": "4js2TULWbGscNgAbqMnudVNz1PYPh1rooqMA9yLsfBTymu5kHk3KCmLpVWJLDdYd1qzBaE3Zsw4noTziUNnvNJDP",
  "key7": "4UJkckS1Ur5BmyELQJg7BJVzuFdVYQfgZZpns523k45wMP8re7JE15qLmMLK9MPBYaq2pxT1hKJEhaKhRuRhgAKw",
  "key8": "8LnY3eHHE6JTfY8JuE9mGcZpN8y6uNBHyXsiFB4L4PHzwoqitmfauS2Rtcg36zCkwmMh6rNx7yZmkVkTxwcUb9s",
  "key9": "5ALu5BzQcGqj2LcivmpzYFuJJbNsJEfeRLFM3Z4sqUKwrVZGnCnSL6TCbRd5w8vFZGvyxCv99tn4sHohKmUddHYF",
  "key10": "2FMHKnRYsDCxtajg5a22x599Xi8XrPoLiAoE2FLvkaAD2EQDwxNDndLMDGFETjFTZLQyv4ji9nnfnmzCXbcXmEH3",
  "key11": "FMqiLYSo4LiMC6SmjZEp8yZG2fLiT27LG1mDrNwWqKRBJsVJE6n9cwMxiM1DaxvuZLvgtVw1usQgKvZEBhk6Qq6",
  "key12": "2f1suADFLxEuXicQWnrujZqYGyb8Tekfi3kYwWxU1pEVSfxhdkhnUe37VsKHVtDmFK4p8Ba1MaofGhgDbTpkHJ8E",
  "key13": "3xca2a1qvyWRybwda4z7vmRpFhmsB3dShsTGwuNZNZ3hhNagKc2MzztL1VABNpaBXdbPrQSeL31rRokJjCKhqei1",
  "key14": "4vaULQ848SyT3ppDbAXRQrJZoWU8t2XAj9EwAurSKcEZ79jnUSJ211tx3QkFZL11ouAP9cUdPei4yNLZx1eBE4rn",
  "key15": "3Ty1Pqxdp6YFwDPd87K41Xg8Mm98nNG47DVcx6M3AAZN4RGYHySzE85JZXBiWWghL8Qc5MsV49qS9pjRcDDRg4B9",
  "key16": "2GQtiNu1MrAj2B99r2hzznVFEk6wDf2jUH2Km4ezPAmNF8xqkn6BhdD7phiqijpTt7LEFCCPqb2bKYzYcrExYJaK",
  "key17": "2huBkp8JWXDipsCiffrPbya57peN452dD4HEMatXs4A75acWw7mMNPGdLhcJDea1J3uGjVyKooBQynAea4MkcrWD",
  "key18": "52pKDQkhqQmKYir7VTkySvzYxbABvYrdyHa4pS9vFj8woaZQWgX7M8Q2ZnTt2eRVXhn9tFFYHdZ4wRrpCnGZBnRa",
  "key19": "5eTBBRSZdyakMX5nGFbQyrixzhVqKTyNACfYKDtCsmAgZ6vYJ5pnzZitboUZTCAGm1XRDrD8baEhud1UCDabZSS8",
  "key20": "2Mmp759tuEkHbZ2gJkmg9wCCF2F5fA83fjVhrke35zELAMZXBQRCMAiPUtycBPv5wafJ8UmGtQic3RoHLiuE652y",
  "key21": "34aSpswTMgJup1FHfn7AztSDzaMqXf7CoQg78y8F6HXXkpZA5o7PgiLQup3opGBQNdHS6qCcrAqG9ewJMu4k9o1L",
  "key22": "sbea14pyDJDZRXjtRQ1wYVahLx4enUtVbuQ3u7CbgvquFgNY1axQRJGrpsvZBeQVcBVpdUSm4GxPtnas5DR4NQJ",
  "key23": "5orjADubmRNijWzWNpMWdr4q6hXb6VqkHSRY2goB8Tfh4PwAXrB8Qc2f3oBsTbKZXkMGySMeHxHjD7FKZ4e6wUyP",
  "key24": "98cDXyK6BBD8s4tLtJ9wDLyz5T3XLRNauqcBk7wXAMr837psiFsUjLa23sDe2WrY5fvpC1cNgtK5BRBNsod9D5d",
  "key25": "52rGWkmyu5FFQLCntbPHXaJMiKuVC5qtZg4m5yTd4RodkHw7m5WozvH2DrcwfVE6d2Xnzw8TrWRYmud51zUwE3QM"
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
