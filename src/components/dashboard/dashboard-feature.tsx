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
    "La6pqFv5sSXpGxaNwNwJn3yhC8D3MeDSpxsifGKXqweu273u1HVHXVV3i9ceG8yzrV71D1ct18vgzriN5vVYnju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MRMm2XCosQ5iih7aEfQGqqyoLWQMny1VwC8zS5wCNkCUVL7GdSrgxqf5ZZWJXjp3YTF6dK1qDaQQidQ1osTfA2H",
  "key1": "5EPQgXg3KkwKqWKyE9JxXpScvqzZi8aTqQgAM2N4BSE4NxHn3Ef9oxofkh6jx4JvKaD43svpTvFgs1ZPmLZbzR89",
  "key2": "3cMhuYFybCgVwCYEfq9oazj2Mex1qSYH6W2oxUckxR3ta2RUE1M9REfzsMEPb1xYKvkat3oBsev8ixnZUaGzVBVR",
  "key3": "5QLjWrEu29KEv11krQkWgZEzNZeLCvxMHGrBGRGJK3JY2URxARJBo6G4H9YP2tfRTuBhLsfu66igEFHpamDi8uxD",
  "key4": "5nrTUyyPf1cGKqsScZgEzfZ5dpYidedSKUS5uhSTqnG4KA6LmEyQNQ8DLdpvXRABQbVupgJdFRqdxG4w9Jv3s2Dy",
  "key5": "2KkDBXSDmSVTmKBXbNwM45yC3LNaG34oUGCuxY6xCxuG5cfsPERmEJUvqUNPD5Pc4uhhEqvHATe8SzmuxiYj83Qp",
  "key6": "66Em8sgqHVmGfzYJpmr8oSpMFbBaN4VHSQ6G8AAzWFfHBKD5hs8cUNzDH6Hfpg33Drnpv9Yk61bXRyjgjd6wwp8x",
  "key7": "2VVLYTXMJxwZCjfgvTYWNWFE8PmrUHtyb94svnfcbNpPVChwXzrMphqBXADp9j8TsVQuYnEJHft4kVmdjhJDNMdg",
  "key8": "5DQWUTZRXhs5DdFrhEfFkteoYampKQEQUToQ5Ecm5RDgjApRBL9ja3h8gYnK5FgpMWQKNxC2u8x1zijhb3gjqUjR",
  "key9": "669M23wLQzSnM85Y11CzwNWHoCt5ezmqf7KxHfBQAQX2U2DkG7JqSv3LetkYMZh8UnVAopBZUH6dwxLxu7SLDbXd",
  "key10": "4H8qEHnewXMqtJTDVAzAaYGrKSyuTHzpaqnL1CMSX6yy84sFdRvrYvRc8cmz5eJNs9BWJMA1N7HAxZAWeemoaR1i",
  "key11": "qbQ1DMJVBqVrrqjh9pNBwzWKBVjg8cAdMXCyYWy9mm83qconBpVr4JmFxuYYPjqyT7wThMa5C83cn4oHVi6a1z7",
  "key12": "4VPWKgDALmpK3C7EiyqpsB8S2K1TMkMETuG5qFgZZSyqYT2DDKCtosZixt4EvSidPqtp4hH4ECuSPSfYhrSefJuj",
  "key13": "3cW8ySK6i4Yw3GgiSmqhTQPSF6oEYFTEeeep8Jm8ksG5M7VR7MeTZzYRyjyDS1WFu7hLC4ioRksBT36Um5mFPzNP",
  "key14": "5fVy5AZPbNjzHxT4MEUBWUzV6863mTWWWmP4GQbJA52zvxt9KjXDNByuvrR4FUV8AuQMEwRamadUzeNA16TVVcd9",
  "key15": "3wo6Q37rHq7e63KNb7zfEk12BGps8JENm3TPj7ic9VRFXvbqowD1gKjstApdvgEcbaN1BcuNnExdMxA7v8Km6Kwd",
  "key16": "4RNjQhpWfrDig6wcy8gF6yp91JQ1puMR3BupALs1Sa1157VmxcKbEqyT32oCEbW1eeqCyB5CoXmDqbwZFiAdtNUb",
  "key17": "5T9DWL3qkrJVinUcktwsBs7qwsomop3TkQKys6tQ2LFNqNJ4Y6DuYbAtd2ay7eZYU4sf2nLXXYX2brVMUCavxQdY",
  "key18": "4o15R6hBEhmVUhB79aUbjRx9iS5JGBc1rPRJ1ZQyhBzto4BQfQuyZrsebiFPabPVwXX5xVvbMZFSErThau9XEg4R",
  "key19": "4vptZWMJKmMmhsuyWzmDyDa8omdb8sURuyZyGRG358gs36NrSTsK4XhW6wCDmvhUAigQDn41xuEEHawV1kmHNdUD",
  "key20": "q8RGjwfBMYP1sKnLuyptSLsv8CtAL72AwAC7sjF5jZcTN7d1UKtTat1Ss6d5f7xnDbnMnz5LjBCNkmLcEnrT8gG",
  "key21": "2vDFYQWguSrDUzoZcN2rmKDL7PeuEkDWBcd2dRicttDErYNrth92fET4dkXAsbLD9uBBVwAtWwfvCVtQsJFZzVQZ",
  "key22": "7JvkSYafu4i8CyFcXtfbzydczhkjvBL1Jd1esQiJsxqpv2YbLz9dAEN51nvWN93pfdLo3DUEDw4UZ689ZiXqfer",
  "key23": "2Ukqzt9eqoqFXy3o3heMRpKeAJMMt5pY3EsqhPbpTmGnCx3uvD9iC9VbCR8eZP4nU6T9wGHi35LzNEq19oRMLY4m",
  "key24": "mft8CPzzaev78RvwnTGUo3UHgQVDhYebwmbGazpDmr2edGCsY1VoHfwev71Wvm9VjJSyd892r7RchwagNQa2YPn",
  "key25": "5TVCXzVEuhT7sw2tMobWwaTdYeQB6v3WnApVWJzGcmJsMcB5KUZ5NHm7AMF2NHio1NzQS6G4HCXCuD1afvJd74j8",
  "key26": "3Cq82cQWSJRbWgnm1zrZakeegAd4PYrKCEUTLPxWEvLMubdaGV8rGwsLegR1tUhPY2fGfSLPmE6epVUQeWxYTg1r",
  "key27": "498x7p8wyUVoQkQsR7vXW7eyHAaUZE2MDsEhhyor2add8iX7dEKKN9zuznNsjuHA6JR8TMPSJkxqG9B6cDyKgaoz",
  "key28": "5jponfejFY14L7EienuLnJy1ht37WxyMTToY23GgvuL6WLhEzThGaPnpMUtEmUcvMWZjcawh3nTX4n8ehjHo5ef8",
  "key29": "3dzkVV5UDuBypGha88isY4AEddy1BrZUgFTJronAh7YAQYjCb4YxiCDT8B4Sb6aWjpsDTW1A8cRqHf9PjWR4x7So",
  "key30": "5JTVzvKvkJaaVeQP4j13oRHZAsMH7v2CpbFrTpvX3Mbcm4TTwmDCxv6VQD4mQUTQ3cXfFFkg8E8BFoedUs6TwzKJ",
  "key31": "5nknyTqygMYbPMNM3EwpcKVVPEnnFHhR7Fk4eZ6WxFcPMDZp2a6dDwKT8hNEK7Fn2CNUEBizeSu2ZQrz2RHUZu2",
  "key32": "d2ah9AwWTK6BZa42fihWsZfQpD76xqwLLgvWRzKkzBktNm6EGJ4i6otw947RtM42suvb24y5zmgh32NhaxMhVjP",
  "key33": "47kkQaiP4M7fD8NUrZKeqwGyFmHjL94QEQhgoCVWikibQbd27UjjQCF8jrUghFK96xRwVpQxH3PiAb9rKtPdftyL",
  "key34": "4jTjGQkwmS8cS4TNwffnwHUX6d4QBdXr1VcwCDye455hmyRRSmw4e4aAvxC2qmUbQibjku836oAPAuX1RFYEtsAN",
  "key35": "r452dc5TguodYLMnU1XHcjVLRsY6K4TpoZP1s1zUt8EPLEZbwvUMT8pXRQ7UVzztq8p91vXytHKWmiK3M45bWjX",
  "key36": "BAHDgYg3LqQGG9qnJznQoWnuPwXyJ62gTLDTovqWkAW5szAczBEZigxjCXYMnXsDCJF4FwWQFYmUHVWMnafocar",
  "key37": "JCaegAauc9stQuFUu5imTXUPibXBUXpcxQn63aByYcHvXsB3wdRXVYt3aQ1JDguw2MarvUw8mwpWFp8TcowDhXM",
  "key38": "5JsgGtD7RpoCbzgDgxz8eLuGwBHivykcTCZsytUdXYBPWdauCsAheNttnQRutzB1pmDDeg7tyMuRcMKkAeQr5rT8",
  "key39": "3H19VTfwHSsYgCe1frcX5rvWZHRfhZWGqniHBLYG4sXg1kRPuYNz1icf6FbpEbGEZf7rdUcdMi4o3AYW2HtJfXrY",
  "key40": "2RshtbMwHo2VYquEAnk9wTv4iuxvfBtSCFeVxPCDk5xHUXJHr1XgRmhd3rHRC47hCRzB2HqU7i4UJ59ia5AKdEfx",
  "key41": "4FqiEx2cbL3fpHa4Divu91XUs2F6wq2hWT8LoqwUwQaJMLZcs4rBr9aQpU7QUMwpDzWiD3swqXYm93eS3N7buthS"
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
