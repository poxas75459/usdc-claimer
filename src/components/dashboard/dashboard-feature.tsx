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
    "Ly9F18Tf6FJnoRKN91kXmRDCrhCpQT326oZyWmLEuTV75V2MJFvB3Za7H48gjUfwGkpYRtuvGPrL9j96mb4w3S4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CkZ3kDQ1pq3fFSx99odEKJVKxcomY6SL4yTZjASK1YCSRjibVnWH6B4PHCdV4zCuyv4U2kwt3yKG8Yiqxz8fKU9",
  "key1": "2UQ8wm1W2tmUBpS9vpeGud2rq7kc44bsyojnHTjF4YvGikTSXyxaj18xoF6JaBKpWGwKvgUNPq5zQgTTptV7c3UR",
  "key2": "4jTPmepp19LXNKcD1yAyzRpxHFB391643masjJ1HG2gnfHt5aN2QSCMSBccw56WP98bkx5jzyf38RneYyBqVXkiW",
  "key3": "3W1xjDoaxBQfnwxVfZzZSsisNuYgjwAMLzBbVTJ1WtHyTF7CsKtbKaVb2WRPRkrkFdRMXrUFWR7wNhyPReEXBtcx",
  "key4": "2cScSDr6VDacqLcMR1aiTrV7Jtf9NdcCWTKH87gXMVr8bxCevZzWQYRyuxtaP4kSLGw2kxKRR1t2bVZTd6RWBoH2",
  "key5": "64xfVhwqyz2ViCNJyeKhYuZ6dKaYQuCwWAEdrBAAa4sePUK2bDmkfi3P3SrJRTGLu73ZgpQHTS6mPFpQcFBvRKca",
  "key6": "BaeePDB4Yfokj9eJWdLrjauFUhmXr6hCDReQvC82eK99L1tRN15ZF6i4Hbj8UcB88zoQU8smNJPLMTLBtGwS9qJ",
  "key7": "3KqGTL5KSpoQfHBis3gjSJZTvWjE4pAVyJE74P362UERdG1ihU1eu9gUE9jxu447GyF56ZBRqEa9SDrPBD7omjBC",
  "key8": "59E7xbeKco9JeqUKNhrWQaxMa19YMPHEwBcpiTVz7zdLHceSHTaateAx6EjCBmB14UdEeTEmrBvBxSonM4H7pCAz",
  "key9": "3NLn19VNJs1S5FVKkNkTwehe1jh1r3FqtgwxXEWMbvfW8yEw46zNsFPZqX5JhQhWtRVgSfHJx62m2NnPzqnnc7jF",
  "key10": "noXRRwiPpF4whCp1KJC49X82uSNJw8ce5udytA6AFVBuNs3GwBbxHJSWm6zJ7mbZpSH5a2Nom731FBiCyHYcAC2",
  "key11": "5HyZ1buafjihT18QeBMEmMvUY3Dbf3vZRaAXu46px9YNqw2XEYGtxMDcbC1ATuj2bJJk238UCrRZoUC2qCcHXhLZ",
  "key12": "5y74tJVGp5e6qpb5KRzubxftSMY93QaKTkHLBsj8MkHJj9vMHkDCHYxgH4frcJWNZjBqJ61FNcGC54znrwtPex8b",
  "key13": "3o25wWEtaVAgVQCYkPFkt8zHSTZvw5ySEMsPTeP5GkH1rgBGjMhzdVXQUchRJmsNpmHDPkQDK8ST2xLShQi3eYJD",
  "key14": "4kWuA49Sq8LDTwrDHAqWRA77Boky5t75QfQCVMjHRskF9wRYNfK6DbvWtiRzUgBQejrXZZtvZnCWbANaqbRTQWSz",
  "key15": "FTaynm2tGLtSUYuZBCKRmusUmbDSKa28tiwpbUExp45AkZYYYtq1TaDdxzLAYSqRBdmt3PBJ5Jk5CzqqqqeJU9Y",
  "key16": "66iYsZ2fVmeKLEHeG9eR762AUdwzDAtjgWVZwNdDgrHQjtEGgzyGsx8TenSBnvQgtPVjd4Fh2DiQdgCDoEZw5mKg",
  "key17": "2KfmTFWoCpRGAGxMeUeZqtQk8EjFUnRfWs6Zw24HR3YhtuH5zH9ZDuRDDPTjWayeXxvgCBwy4aJ6Aa4GMKU6XKCj",
  "key18": "2kp7Y7pEx4yXn1JrnU2Zqf9nxNdUbrBKAqnX68h62nAkVrH6uJrS51UVRiPXNr8ceuoongPXeDzvLgup5pPtxkuo",
  "key19": "YC7bqQoUitXMvRbpePWZWwUgrHiHhDuvcpxZ158wdnUCYmKwuygJ2TZkifUcMV8zTQEncVswdKTQSuJdpDqQfZ5",
  "key20": "2rsPHg8NwBWmwvoa7Yf2gBjvVJcV9nRF4XJLZAy3Q7L9FUQDzBSWB5ayUu9oUKPn7ctQVXnqfgCke2nPpBe7o23s",
  "key21": "5VBEvZ93STteFzZzdGBuisZCtZkD1dDi58BPZuQLs8hu7jA3GNwyFNaHwPaKDFZwWtdS5dLq2f2RUZZJqBEu9bhH",
  "key22": "2TSopwUVLf9y6hFELSY3wucWVwuidy7EDbsnfpJQqkHRyzrdvfH8sqEnSAFd3GphRyJDeZ2nh6HL8Dd9iNhBpKxN",
  "key23": "44gFfQjCUgj1mrv4uuniXFx9r56sW2MTUkr4jg3JrVRVfa43WAQxb6FMKvS2rGL6cKSqMb6pxeY87UTVoYtHkBiv",
  "key24": "8ZdZ6Tda6i4a5RUGTwioYa7X5wEGyiUJRU4kYSfg8RFFV9vVcKeS2zgQdXCBTCqyyi1BguWFqqrhT85tfBCA9G3"
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
