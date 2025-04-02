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
    "4tnegRytyWVuKiwAKLRsEduWnCpG5iGh1esKctzv9cPWhhRtodRLU4TEehnThdacjR1c4TEPjjCkGM9vmurx1FxU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NyCB16FKk2w4jsvzDCvBxbb69RRM4SBAc7T5uharotHoaixhihD4o9Ep1zhQbbYV6Jc31K5T7xsSmJ55RKFgeXZ",
  "key1": "2T3BQxNpJH8y463K7Q7a67XwUEmSuPxPFbBUxufobquqv8Mq3nz4aZZvrpAzkz9QKjEisE4fpPLBhAGSu6UcTz99",
  "key2": "21midfkrLqMzTaz9mJEcNSRLiXJ6JRa8LfzCtRr3uH181NrArk94xf5wwwmWXN4v6d2kRPNtid6gFgLqiKuxbQWW",
  "key3": "3py9bSBCpaheoeQtLcZDrEiHXVH2cBEUepwQ8TqnzUPDezGikJqGDxwG4LfmVvh1aKjmjyaVPR149piSE2d7UhAJ",
  "key4": "63GTJw5EeRGSppq1ngnmXzi7F2r7weaREHceq9882VEAHifLwTaKshjWocJEU4TVXz1CikBEGiAodGvqNKjLZ6o6",
  "key5": "4nwcqoZZ1oZMuWfKJ2Q1yNhccwo1znLA4Mjv3gnPm5qMhpVXNFeaDyVc2oZtPkuAekSAbEfDDasReAdhZsS8KASg",
  "key6": "3E2LSQHbbGhyLnDWiud9cbMub7DHgLRuz9DHPNK1tgJFJi2MrKE2RHqVi1h513KjGtj7nQJJHFcaGxgNMUTU1Wh1",
  "key7": "5j2KJxQUXuUvijdAfVFd5rnmjbJHU8sjAnMy7nh9Xap3eG1U4z9tFXpJ1aiasMjUo7QsLzduMv7Ehw9zM2toh6vY",
  "key8": "4xgz6r6CyQ6HtdrystkZiY8bXBJubbY9yFxcUmwBCPAQWs78z3ve1HpP54Bg9CXzb5b4nLGhwgBpz7rQYKcJSdaf",
  "key9": "7JkyG6yxJaBUwrWv44fGqhr7qE8EdDdRwvyV9gKs9XpnBwVFkS4V6kYxpeBTp7JYN5DkeEgkdR9fcBQ9PSicTKA",
  "key10": "2e1DiconEfe4ifkPfNdai7j7a5WZqBNdn2CVFxGijG86taieCRKiuWJN68YcLf6wKAhoMF2gBi49cSf9PG2reenR",
  "key11": "48MoLeQP9BdZfTaam88S9G6mLUzEoumAGEoTRAy4vM7groXAaXdazAXKSjSc9pLfcaYxkGLoVFE5a42mwW4hG9ev",
  "key12": "2FKhpS5PXcH88Tu9n2Lpf9ieSApFVjdq3rJDrHoLjbWr7gQjTWbrBqMtLQsH7TvKgbyTasfwhptyC6cBREvEMmbA",
  "key13": "3o3Krf5Kxd6KpcPsCKpvuhq9qw4b73LFt2qjkZeRwRP68pjeiuytWhNTVVcDViSUeRRkJVhbNJh68MrHbGqs8AJ",
  "key14": "2kgQe9bdXkoBDrUtNGQ1mEpDpeyHUGadhZ6rA5yb79ptqXfV6hHX9syHiezFqq8kbzCChRu2uZWcTxE7Wp1Akq8i",
  "key15": "4iahqLmK6i2adnuW42NiNQcHiZ91MaN2vubCcX6LUnciPPNYB7ezhmwvpuLBnuaQhBLR9z7hygg6gVpBFX2f6E5N",
  "key16": "4Gkgm3XyQsFEYKHnhjgBx3aK4YnowwVMoWExDBa9BQBdQoRpdeNzuNHr9WPPkVsEmPrHTXkoxRbXqMYsyBS8qJuD",
  "key17": "3nVWsNRTZAZBuTRaprwo219i7bezwEsQ7v2YBie59ZF5F63TUFm9MhCGZ949f21Xi1N2KbC4HKoVgNJcqfBK2FM9",
  "key18": "26KLNNxgPgje4so9QHiyUuartTFNfBXBsiNV8aPLeZjAauKG9oGU95vSM8KWCHHQT7N5sNS8hDxVfXXZS3vtMHKp",
  "key19": "5ZJm37SSoMfD8EnmDySCtwqzyukqUgcmubc5Y2yD6t4VZUrjRjqZFXMj4BSNhXu8VPSYS3HwRLwkQzWhTyD1ff2V",
  "key20": "nwvy8iuttJurkuFB9VFzvCr7etVf4P5AAR2a86pzZCw7H4doLFPzwb3sJdaU4TkGsYfWz1HbnGFuJLCwU44svbE",
  "key21": "4NPKe3Vo4GXcLoYGSBQFB6USnMyf3K5ihYEazTB2JeRiuPeuPhyaWoZYmDj2fjktgtTFGDhV1W9njWEYRt6dogjQ",
  "key22": "3r3LRGg4mRS2GZTHpqv6HmhY2n1ZoRDLwMej1CmnJbVtiWZ6igWNUA21GBWahsWhNYgfaLX2wmeQFepcVDBJtjXg",
  "key23": "61sPCUhCbcEDt15swBNUGB5rzCqr9A5SWbbpEC5Y5ktPK3FsPQdkeneueFEH9YEXvqqdNmwFVXVVRT3aE6fJWesg",
  "key24": "2LF77RH1fKqGmPr3BvkqSk9DYPfzwz2zcVBhfqBZwFVAt1TMXF24x4Ux96PDhkERBfBM6J7v2uNbDFXUL4bMbS8E",
  "key25": "2vcz5YYnTAMr9WNoxJuGvEamyYw2oS3WmeKZfuE1rVVFMgdgvwNgWeJcikDZQ7GCy9VosFZ5cQ8EAh4LzrmzMC89",
  "key26": "3kvY1vbQckVYTHeHggvgyQNAQGDH1Vi5BSHEPymBwQ2BcesZQEBtjsrVeKR14wJvEThzCSBMwgBbqmpXLqA7Lwiy",
  "key27": "41kSvRkDHRnwK6jk7cxCr3AyPH6atGLqCPMkRc7p3GXEzU8sQ53o7cNBpQrTmvNgmPjYserEiYHq8xTmwcmfy2Us",
  "key28": "qirHLDrKUHWFiNetBDUBVzJTkmuYy9ZuonV8jCyfHqhXRz56a7VJpLLoyNebP8HRALBjU4MwDwkaKGEpX9t7tvk",
  "key29": "5b5P9BY8cCWQWbBoLQcUnLAfTGnNoiRN62xgZDn1enmKMYAS8UYbZdgutja3PrdpQdre5GDPoWLCHAjW8sSR3of1",
  "key30": "3Y4yw7ZZmMUFSTecUnwDjQEQwBZ29WAhS71PFQWgGLPXMu9SshBbxmSnd7TPwC5W3AZpcGAdQ8q5mPeZzBYEDXdi",
  "key31": "ZW2LTRanXqKAML5bqavZD1YT9i5dUSeLFcFAe3E5JrkkUwmzTF1rjiYXXS6aspXRzK49Uvw2qXYCrQoprHAdw77"
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
