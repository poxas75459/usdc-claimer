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
    "5QeLWjgT9DaGveRYT1Bv9FUXp74E94U5P26j2HwHHKp4iDztM9oRDC2Eq6MNb9ZbW4wcQexa2pYHPqZCqqv7oCSW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MppuLPne4ybcNNsscWFxpUgCoeFQYQRiLcULbXDjU2bFmphrQAvQXjcRzzzEdsBjchidFHP1aPCA6n214K3QGTY",
  "key1": "2rAre6Zz2nmQfTVdJdXhAq1NQwtQ41o5MJ6s8jJAZ2yH5yKJWDkxFFGCJSAd3MYcvqjxyHzFNXWxytUNmkw7x4mj",
  "key2": "4Lrhn5sDnr774dTinmPTFZbbPCkAqGYL2A5257aDtDDoYKCotww8mcKMiXZ5hSNynrgZanSnztSuWH2Xh4SRq2xt",
  "key3": "4vfHKj1rmRvpHhqHRBATQ1j8A1WrKECPcKY5ReTvwSCb6Vksp3MqFyMfSLBqa8nhy1V4XATF5edyYR1rtmNTJqFd",
  "key4": "4qdRijUxEN5Duyv5Auwtf9SoGCnr6YppBdgN67fwPHkgSGYDs4c1zm8FX1xgEtEvSnZ97nsCPS98KJnExXfi1p2s",
  "key5": "2qR2j5pmhv4KVNkuPZw2iVYkcfmTx26yifgsnXsucsr7SGTwyUoZfcZNQPXixhsodiTbiU93bkrLsRLBva5SG6pW",
  "key6": "S8KVs4e2oRn398EFzfVACcs8zHerHaMJLMh8TopQnjjdybweYPQYkod1TmUan61zgtvYo2EsRiqvVnwt2LsyvMk",
  "key7": "3KSyrcQ9Su3J4oycgXB6w74ECKrVse9NUNQNGuCdxgACC2Z5nnkcyqXg8YArFAoup4Ehxe2X6VTDB1tFNPaDb9ko",
  "key8": "2onHRv5jnRfY9uPBxa4HMgy4MSsZmnUkvzHMLnbxgyMSfDTPcwzUwa74MUyBmMBSbtXQvjHVKJeSU9Pq8WPiuimc",
  "key9": "3k5FY8J71sViUfWAUZ4ZAik8mNJfe2JfjWGr1YShmZrj34bg79U3wjLwomUihdSQRJs5AeGMZjNADd8kTpA33RTu",
  "key10": "QoZbZfdxMtT7ngQWxEuEkBZkzDmYPEutBirCSj82NhX3tPHojyMcRsjigNnZdqXMmmCiEgU1TvnW7fKksrs9oB7",
  "key11": "3MJQ7Vp2eB3rkoj5ueZCMTaX5N9F5Q3tL45KHQp4m1yo6QKzfY69J9LZRkeyUvazV9hzmMqh2bWJj5LBz2yKte6n",
  "key12": "48stAVHbCYkGG2J6T5jQNFvY8ygfx25NiAkE1skBhbJXQGDXUktHqw6sTJgim5w91LwbNmuaHNgtfMZdVerXnjSJ",
  "key13": "3kCvR3GnRXks8AcnBi4ivGNSxaY3aKVLaKgKaMcB3wsNXT8SibMusVqrcNWhrD3Yx3oPAQ8dgDH5JxFknypTyEqP",
  "key14": "B8EzeEBmQGCuFakG4NFVAkDrBKwkqm78eU7rgQuLWmUgdRMo6WWgbmp7zrvwFUYQb9NTZY4BhAuNMUuBpv8dW1R",
  "key15": "4nGN1isoYrSYFqTSuDV5v38cXrLF5t94qzUkFqrj5AxexwMTyLbydbb4PzWHv3fPLtTAByxjmJc9DUPHSLV4xzXb",
  "key16": "3vr8jcMApGhWcyAzYfC72PGGu7d26ybdZadQKqEK9deery6rW4gpqVeqru8ApT3TmyxVCvKqpVdrZ3QD3oi92WL6",
  "key17": "3GVPKMGNfqG9rFQT6RaqqfGhRfMN2PTX8ZaqVQnJbMxt63TVP5wp8dbcMrdix6tWnYhVymjELf9iajyTs2fGRg5U",
  "key18": "1ZnnonaAriHPtVZZHnkJKY5GmHNXqh5RZazqbwtcxhJNKms2CpEN8c7AYLdacdmzZgkNiZ8dpPPtCTnDk1hgFhH",
  "key19": "75684pTVfWceddB4r1sfW2U5rN6A1afSztZxEuzUzazBhA8waWgUi6T9TnvB7CoyVVzt23zVVLvU21GDEPDgkQb",
  "key20": "4X1xFTT4gSd3eMagTbsiunAxCHpp3gaF729n5BJYXmuri1i4de18YpMNupA9LZGprndpDvfe8ryDbN4vTCAaURmF",
  "key21": "43g2EbbyobtSufrtQoaHxhABzxC6DPMahRXSdtiDWBoc9iAi9raFEkSVdrf77hE7BRZGmn2nenoJ9gKMkNEhL2Kr",
  "key22": "3aizTsZv1ph7QG5i2grJgS3hGKXoM3PXiwAaEo5Znq9idj3JXwAAw2LJQL25iXwYNRjYeNj12jG9ZKHgUw8q8vsX",
  "key23": "6yRDAsQsRhSm6rUKUu4GZaR6ziHkc8Gr34sXQ9oFCtbdEPJZioHkhfu7pJ2GP3BWyNEtNmikGGTWDkvJqVRN6Um",
  "key24": "2MxUxoodRvMZLQnrMCgBHxEVUMuvKtsK8epg6e3HVJPBttHqip6QjkjVJzkCDJmmvBnv2TJGEc6QKMyttkFHHbfC",
  "key25": "5T8mu6rqubSGWwxpxoct9vhHj61sptUnxnXFhBhT5Yzs37Ct1AS3Su6rzfBYaLxCH99LDPY64tDnMBzhPjNAPetq",
  "key26": "4GCHrU1QFruksmbQoWr2e87EWUARiJBPJ4WSopDSg7SXLSLKgLugbwNuH8vrLg6CELfmtmh1FKkxnmGxuWTAng2H",
  "key27": "25EbjuHRd4D3ToUiekVWKDVtmHnwqiYLiz1HSbQmVogqhixB8GCSJfHzWQxrFfEQRiBurVSj7jZ9ihuabmnefvau",
  "key28": "5yg9n3NaDE9etKpMBtgaFKJMHJS4CYCYeopS9c8bAE8MVP6fqFjxdrTV6peAB8BuEFS4jdVFnRGim7sCLFZUt6WD",
  "key29": "61P6e5t2wgEHqrEKVrGJg5tqaR37e3eRtKimhdAaakGXf5uVhHK8ScHjzUANe2VLsEAvjR84AhYdMbqDDAQQCZGu",
  "key30": "4FY9bjrbssJuizTUXaQEbGmBMq94oDJi5pNq3TLjjvNVRDWz4nF2cx1bPkoZuZG7DciShT5tbTtXzgfphBdAJnyc",
  "key31": "3hSykkQF3imSDnmE1ArdkAsrEbp66ZP9rH9dgxkwfAA5jnEL6BGJgaBos8uzRZaZWWoeAy8vBkwR4q4QsEbZddLZ",
  "key32": "2Ad8ZcbGhjuKtDNssSq1XYfmLbgJkuPqJYSuw4MF1UZyHzyxcJJLydPvemjytaPPNBQXHDW8e36HQ937wEEELxkj",
  "key33": "51kjN4ZfwsCXoxV28CaSkLQ5NQmjoLv4QZKc1TDfAdCiBHKA98EwFYJWacj8DFFN31UxDj4BN3T3ayybcmoeK5Wp"
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
