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
    "nCLiVRZA2WSSH4mCpEFQHSEaZL6GJnoLMMaKy5pihaJubLULkTEzoDF6dbx4mzH4Su1Uzctxap7E9YfrkzKgE2B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Tzw6G7TGzsRquVF9z1f3PodeiuUxdSFcg1NpnLXMoVnrprzG4U6pMsSHK4CNhbyEdiRPZncQLueSsyknToSVdCD",
  "key1": "4p4QLKzay1gSsjiJZYbQAgCFZcMGk2Yp5M7pAy9gGV7kufqUzhxaNbwafrtMPdvAESMcR3K2feZUyD6QggAR1fZq",
  "key2": "3LxW4Rp15n2tmD9M3EyzHKsPQt95ceQYANF2E1tXBSBqbc616V8xNR1CERtYtnkeSQsxnU7EHEHMtinzEn9mDJnE",
  "key3": "3nrym4vDLW8uf5gVd4a657MDUW7EWvH6VoHiMRDqeuo5oskXALBViLL6xwd2iRFQBqPkWpAzH2JUULhpZiReChYw",
  "key4": "pAPNB2yn8w8GwYmmqrF3cCgdVvgBmQvq3FpkMv7q9Zh5GqMmpHb8rBprhnYekKhZoWDBh6jG1LsiZXfPiQipRn4",
  "key5": "4qLfkD9yXoHEMpjRdzWYnfLCKtRQSeji376xgaLsLiqt2fxsNn7e9bbfMLDp1iXCNcs3dbiw49dk4iVzXaDVvsdJ",
  "key6": "622HUtWUe5jGhGhrMSs3JLEBSdAKxuwF9o1dxF7YMWuXwTgQ1Lg5cPY5m16jLrHRQ17D2nHNgEni2844AZiWS33S",
  "key7": "b2uY3hK9fUkzc67bn5qAJ5yo533FNGCW9xDdvLibmqgXY3Nr1rH3LEqLBDkwGgRX7SvdGbpwkEHUhMf82cEkZBe",
  "key8": "3zvQzFRhSaoCuPZoJXQYNFEMQbwCJseT7c7f52JRza1CndqpWYQxdhDgsyc5VUqRLsjZ2m2GgZX8h36UbAVF6aT9",
  "key9": "f1ng3GaSeT17tqA7jYBwugayMPHb6sssp1y3aH8uKTxKyHny2MfdPwnv2a5khTJwqm2QmJPLoeNbgMDbSAsjchR",
  "key10": "32M69cNNyr8g2LBi6A1c3L3RE7JWtshUXXBGUMPrdVLK3mqbX8bzkw7gqVfJdWEAVyRGgZQMSaPe4ke8yBPA7Ce3",
  "key11": "52YDH1DbyK4eRhterzwipWRqM8921XZeHXjhizS5CE5roML3ETGFMcxaJkE33e4AYN6LQ5pCZYwgTB8p6Pkw6HpS",
  "key12": "4yNcU7ZVs6VFjeYWTS1xrcnm4mGZHbbCj4p9Nm5jKvycVHuJtf4ajSVCzWRh9KFo9C35wkVijnEW3nH52E7Buj7s",
  "key13": "3SVU7QZPNqsNbksVnBraLpFN5AEMfdafMcby8Zy6TZ5MRFb2QBupsYWp2A19E9ZhxgGSrtVVZsFFCPMy9qJYgQhh",
  "key14": "yk98BbmY893s8T3oFq9w2EDGGsg9FVceqtGdr6mpefojMFWT3C4Zq5xdDnnY7efjgzvGEmEKAdfUZLnDVyGX9MK",
  "key15": "BYynZiGo1NoNAF3W1oinSVSUhrEnWHCKHZp3Uwnhp9RaBx26odN5k6vocrZYP9x1dJ1JbCndZfVasUitpMussCn",
  "key16": "3vmqbTfzEMtVc3zGwZjq9qhYZZYf2w5pmQgUxzf7BWnxNZVqAR6V9aUp8yPrjvo8CTeYBuRjpTXwud9wDuGAGbpV",
  "key17": "JYMCawiiQsBf5FuF7547zXUqsKCxfbfWKa7gf7gpx7DYCQGXnafmivAXDRUfkF6ynrHh5L31JHFPhfDaZqzmCsC",
  "key18": "2316knNiheoUAzCKukYTVFTJSKMP6L7QwgSXjgGCwWcoz9VSrnVEUmqXgpGUyujx1AkmxoZC8gvzHvi239PMiZwE",
  "key19": "4KHz2ob7xhNwVmm24VCGx3HAeGRRSHntVZszLY5owt3UfMS8R1gao43x3bPVHFPS8Bu5puGTMcdUUt1MSRr77ijJ",
  "key20": "4axwuNWPNVZXUXxsuDL878aj4tFA1gBfBUunvafk4kgFqqquXDWUqbGomSgQiaWp9bcmQDTsfPiyLTx9Qs8GBABc",
  "key21": "6UqPXSPf9ShM4obyT1o3Fy33hu7ikkBzyrn1XhLXBWNHAECNGe2mbsguSTqPSyKqPbKvRrRMPzwg5JrBadCCTa7",
  "key22": "UaLpgn9zk36TBmPaew4m5BWysU4gupQYdbSyFoHzSrQqTQaqhRhsFS7ozzoSn6Nw29mCzAHLGFXDmr74JjLMH67",
  "key23": "2rmkc5f33g4XqDXuxyBg6ZZWbcWxixMWLredT9JCabbpsXh5NadiiF4NYfzeVPFT5yssfdYwAmfZrvEGV1RYsMcM",
  "key24": "35ryXUnj63XCeqVZhQ3dB6e6uFUEpK4xhugARWZC5Hwk51wuRix79DfwwApE6MHBNge2J71nNkXsV14DJpoXLAs2",
  "key25": "2SNXLp8HYHmANGUZrk7rbGodkJRvqq7no16C4LLLK8bHKjBwJ2iMQL3ABpBDv1sEAzRCW3p6jKDQcdoj4v1XLgzT",
  "key26": "2iHrSjkkda76eU9YaffsZKzWci2Yjx9pqu4vpxQibrL8okHdn1knkeTE25Go1K9iYFAtjYRPfjcVfDWKdkQmqqpd"
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
