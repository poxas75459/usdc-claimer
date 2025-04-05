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
    "nvCjmhiJ5jiSdaZYECdcAaKnzMBDmMtmbLDhUUhE9ikyEjXUpDZ45Mci4mTQSeRYtvwEmWbc7G4h1BLqX4zjK9F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jeZYY8Q4gG9FesU6i1k7xQ5io58iHw6R3FbjkhyJi3jSu3AcY45g4FgT44vbVU4pSmFbBsVqnHX8hdP8pXhbPh7",
  "key1": "1whox5ouzgZfZ8PZ8PFsZU9LBb37yfgHuqHf7oEsjpF2LcZBw8z6SV2VhPbepqaMpNDgNfR3WrKucrqagZeqJdM",
  "key2": "2ytwXYzEoeBFidAgQQ4PfGkdreQu5AkXdjhRQcARuFGKv9PPxASZn9VsvoswXJzQd5GYkJiDdzRzkEBjEtWtiAhE",
  "key3": "Nwo3eWaeejY5vSG2QqBQTBHLR1D95X6P34zgnjUJkW2x8yWTSirmHXscMWcug77UJ19pxNAo5nxM27tnESicnc4",
  "key4": "3D14qfjt4Lbso2cQGHEPgkKSkExqeXyNMKChmoheivMWNWULj37X38c5CSKV4fqJWpyPrXCXkd6AvV5WgbNFGnTV",
  "key5": "2bGQx9LtkxvJY95WhM7Pd7uGQZwSmXNzMGez8tfCqrQrqqkDdALLaKLzsd1bXB57xqViQwbpXS9vS4tmfXUceeaP",
  "key6": "2HUbcsCLbTiGJDSfEttfsDocF1okkQYSwnep7NWvh6UVWw7a32s41NPLK1Z4tb9f2bPGqmyz6UAa4Lw6aGwwJpvj",
  "key7": "27SkHEeHQuBMXqXq8d6DfnQ84GRUbHRZbzk64qDckBzCwGsXiCXUxFPdtKViDeuSYKqwzFhvjefpHsXgxAQLTAcV",
  "key8": "63efgyicYTU1QiVgscN9jmqFnf5D2aWG2uRfJURdLmGqu4hkSVAXZwc7pL5CQhW7sbNS5C8L11zXG6ScXwFXdXXG",
  "key9": "2szaXxbPDQfNccEoDZRoBk4gPwTFiKDvkHLijxoevTRWhN2Sr9TFVBncob7v6JKfeBTW1PvKf4x8PjB1Hjs2EiSh",
  "key10": "KKY7p1HyyRDrLYR2eCkE7VDCgiqkLV73Qp1mLBneaeU9eQf7FuCg6gKmr7x2mGZvVaCyGASxcF694NyfBkDd7y7",
  "key11": "2yPgML3V9RD9LgWC3GJgTkpaC4sRbszf6bEvfTgjq5rDBr5DVFHC1JDsHiyENAhH4Wv3VUs8153EuhHWiCswFDdr",
  "key12": "4Wt1VhmZBSmmPtm2QM6S93io9iy7582Pgx6WgziwSFEXyeJCFtwKHEHVRLbXRBsqgp54kYGduohS42QeZBbLxPHj",
  "key13": "5RgjjyhaKxcZPUXbA3uvSpC9sVHmf9qmN735yCvczReSw7JyJum3GHmxnNkfsNn6k6trXMb55Enk5xZgToHArn3w",
  "key14": "2HsbzPkpLUveGGZAohiDHcTmbSN4WJDQZU6ZG5Fbt3GCGfB4DsT1oTzJf22AWGt6GF6krX8MGjZJcogBQdBgfSxJ",
  "key15": "2u1KHUX19UFfpaw21vCiyaQxJ32tmdeu2Sx65fRYbWu4G3bqLSnnjbVpbj51xypjQeQDNXjZ4uJgyvzdELoC4bNk",
  "key16": "WTpmnX8K6tqDsZ3vd5QhnPCs7PUqQHGaozi8CDRbxrdM6QBvuMLTqLRxdJhtymK6FMKUV5HThE8KJLHpC7tf8ZN",
  "key17": "285uwANKZb2qzEbRVjHvMbCWCBdJXRB8D9oTQjjkks4QKu3EEVyXpVZX3BmaiLE6mUXYuNGY6MvCCjRsz23MjCQF",
  "key18": "5VGWBkFAmqGDDsavqELmw3fActZo1X4GYUMQsD1QhNKT8WBaQFpjc7GL85HjKTNxcFxhqZgHUg3cPw9N6pv7WLSw",
  "key19": "uNViLYxFfdZkvEFaxYTcSdaeYCWn16QPfmo6u4dyZTkFBNGUSpQYoeecqmsoYLDiixmnR57Rm5XDfE1NJ6RCR2S",
  "key20": "2ordSQTGb38LXKmzgcReZaAMTGhg32x5c446B8BYry39rtK4EhjaqjLDWkLCSPnPjPDxuQPHLMubaW1ssPtj8M8b",
  "key21": "3bGUQ4ehkgaPhsEURrxbwzMh9uvbgK3S8ZN6cLA3B13eXL582ZPAQn7zppbAL5QtxNgSLo1dyXdBwNzNgH5zwN6C",
  "key22": "4qQArVkkLDopfjKZJWNWDTRvTj3wKE6Qk75tiATcH39reysCQYUUkr4HbDXardPoTBLKvBcZNaU5tKkbUk6gQqcz",
  "key23": "2AggVd9zsaoUnP7jsJgxjoesNKbisRruLfo4vtgpns4bB9YfxPcCX7LvGMH5Zrc34rNgpFKuuVt3UJFr7oyLXvNN",
  "key24": "3DiX7J2MUZC4GF7mY17j5W6RWJs7Fqg1PvhgLYc1kUvGsaAuhN6RYHNvi1q7QEoVSqobzK6nLhYf4MRPEcAhsmyz",
  "key25": "2kz6sYSN8BNMYizF7M4cvg7JQDAkR5R38d6XJhp6Hx62i62FB38dhtMY2UfbhunfTqcTyk2QMM2FwmiEoq98CTdd",
  "key26": "256AkVugroYKGVsromfLszkmucfxvtgDs1KuPJrXYtvm1Xs2nDTiJq15QhdmXWtibiqV4AvLDpaue4f5KfRMYtVN",
  "key27": "4r6zcu8Fm35aaKhk2iTx8qX1cqkQqtrDhtDKfFhFNoM7k3a8SLHhhJMSrFKeNwBwpJ5cCypirVUFWVZ2JDQ3hPD",
  "key28": "4kRt5CooUSqkXWATbXubqB2awmbyJr226nEDG1JLdy4sreYB8TpXoL7XsR6asvD986LSESWd9WSs5XCX5uenbyZf",
  "key29": "4hzrQoBMtcFtbjZY5tNZZ6HdQoSP6JeU1maEPbSdEyyhTymNkwWiCusoHQgy1HSuEbuAqerb6jHMGzL9aSBdQpL",
  "key30": "WRCZB1CX7sTrRcJaPJiPtwitJAdUrLP4P7pNg9nUb6sQLQdHE1UMkeyAN7TcUxcjL9bmoVMHnWteBWpcafo9pTR",
  "key31": "3GETa1XwgBk7JRA4EnYpxHojmuiQszVoxRXLd5cdtUDVy4AV9wNdSaKXLAFTRZtViUbs375YjyMS5dkhe3mkhT3B",
  "key32": "42Xzt3SsZA3yZzwjXr8Xq4A9f3bVaybjgugGCX2FxMVWRcC93vs3YvD2zzKbG4DHMRtywvoDDQ9U7g4hxNparkMV"
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
