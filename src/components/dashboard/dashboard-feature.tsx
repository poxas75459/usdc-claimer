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
    "NPYTW8qaawdxnT3M1MZQsToK6WdRiX2r3vyuSwDVFz5BDeAuwDAhvFewFZjWeqm36reePrcHgRVf3m5Vy2caGas"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EQ2ZD1VLKhfYLvUQfSFdhGg8BezsQvV77JmLmeTCryrBo1PxYdPzoJyJWSHnHBzJWdSgN1wGNcQnwGQFRCYFAyS",
  "key1": "5NUda9oXSYKmutydzwhuqHwSBLf6zqQjjdtNPJm4N4jY1ceHyKZPsfQ5JEc4iSTjSQR1HxmWdXZsiyt4g6wSSoEf",
  "key2": "4fTP5W9B7TJ9adYTsmhbBvxAmMvimB2PFzC68vnnMZaPRq3HDeMAsBfarVDud2yVK4ZMSsfQgH1s4HZ9A1UmUWB6",
  "key3": "4nQeFc87wjYcL4HEXWgcAnxg5NnKPWCpCVCimChhJbNmDGz1JTwjFyUgoVcjzNRbx4GhvvtQ7Q1zPPWvBqkWokuH",
  "key4": "4WWbdkFmoZ281NpsYUXjC3bBzEBFavuiPD8vCpmZKkGjejfu5RdrpD6zbcJRV631gqCv1yQqqDSwdmH4L5awUQC9",
  "key5": "3UUJ82m7MtcLB3sWiv13Pedcr3dmhHCsmvE3eruc3J4qxMLrJppkWbonZL2vKyRE9JCfFHe9YYzn3jYKGyCeWBLX",
  "key6": "45kALaKQLfGiadqumvnpcSguURcLwHAGhxffqFFscWFwg2GGwLTg6ffep37bvvCSD2wJvgM5kDwG9xo7VFban5ap",
  "key7": "HmKRuBYNdbHTnb3XEzAb7g4Qse6NDGL5WtWzoRx47fq9K1FBTZCnp4j2uMaZMgWuhaEWMhCRwGHzuJc1Q3a75zX",
  "key8": "44naAeXz2ygYCnLxffxGWRQpewJgoGCpw8Zsd8NxK8fqkBBsZMe9ovQS1VHro1keRxL4CtEKyRAJopgEtpvBnMzw",
  "key9": "5C79vJyMCEvFphFuRXx83VCgcHqMNqPSZU8tSSVQU3B3mwg9BhGzU8czYTZDoayzRAvZM4faLJMxeoPhbaEwxPJP",
  "key10": "3ycjXDNeTr8f6u9T4Wft6eb2pgVATSGQtvqf8V2JrqbcQHcjUJoUTsjBRSeaZDzCWYxrnf8dNmiypyzdPthwCWxS",
  "key11": "3B4rZ2oZ4vR4nCjec8avzvgc8NQdFRVjJfseMp3LsjdDs48uFFervZHafunP76YunF6BYG7kpppmXAWfgTX8TTAw",
  "key12": "4QgambNzJmWPRFjYXPnKbzR7ePxgDi4ADfrHvU1T7GhU6EBswDt5VBp7bZh1MEWQXcmNCvDUcYd5XthdBHDUrzXJ",
  "key13": "3cGzgyyRiZ3f1UwSXojB7djAQAm4CaoKMdtcpxPnvpz8K6nB4mhsRLrkj7haRHVLUV9Rixba656uoaYNTc5ME9hp",
  "key14": "3DUdRnn2h4orHCb8AsqcsHRdvMzwTxPKFZ3MouH4iKD9fqpYEikARZPdxkXyGUBva9vx7KQNYrgoBfaBLTH4AShn",
  "key15": "5jk19rwF5MEfyw5fTNaR3cZtGvRccbWPZ7R9afreXhrApmcuj3FVYXJtHoRj5RJJgeCQZtrSRSBJ6mU8xvavSsUR",
  "key16": "2mc1GM2bzWE5oj8yNFC13fGDBUBxjFfJp78eDVpV5VUNU4Nj9hNweCQPXoZQ1japxhB8F93nBQpnraaKGYav1FTA",
  "key17": "pbUoYfX2TnuAEJRBJjnNBiepsUWdHEiDYJjK4CZ6quVwoCzaYTR9KzVSvCRHqDtHwKX6SEqqNek9GysQfdasVuC",
  "key18": "P1jHXZha72JAZqY8nNBacg1RnTCXn7ujCsAhKqxC23dPCuQQ6BxMmvdPDFHNdUCagFyMr4n2JTSNsgVSvweQdqk",
  "key19": "4buZS3zVQ1KGWfPPrAqyT1NFpdhoDRHWqqQHhZQA7sAzgcdibg5eCnv4xBNequ2zBLDpzoRrjVDxFv6yDVf8odsi",
  "key20": "5MgQS5m5tU4NMmennPuTN7vxfsXAj9USGtXBwbvkKHzgnuXdfNa7jqXm5zRTFTWc3aCxJP5DW9mwkMp8S9hcZyit",
  "key21": "15M9FsLVrcJeiUiU7Fmi4VUaXiytsYEDdDCauKSUqYkpo9bPXNLmMmsVvyHycy2b8mioWw4QqzfL7KdXGmNNH4q",
  "key22": "3HDyLckSX9YNuk8nddQfGyu99YWJYeguUa5VM52sLgbciLHc9PnH3CfeMk74DGxbYoZ1uL9sGLZ9QzNZEyN4FSdb",
  "key23": "4BaYizrHgmzb3xhgjQYiRqkETRtBvnJXgfwCfywFZw2nCFMXssLpBfeviUiHEU9441qykBA4ZsxqJN6avcWLQhW4",
  "key24": "95zuDSeZ6nRRBh6eRpufmdP953838TWqNtxVZxuZy5ZkjEGkEio2TP7qE5nEGquCJs6Yr7CQqq2nyA5APkb2HbC",
  "key25": "2yNzLSHK7qHjtwYChi16R2DhW4D3t5Q8YSwBJUJiGAtwZ1pKy1ecUFHLkDXsPpbPawwQp5RoZvGzGzKPCcQaLd5J",
  "key26": "38zh7fceDV4ELHXwa4A5N5DUDaahEsVgJAaN8ZFiDPFrxzu7KC6RREXBz4XC4S6ypo1xYWwHZVXoj2WpHYPMDj35",
  "key27": "4RGzjGbYXjcWqsk4FgV9RKCzKLoYwzRqdfjFs9tQJmnMsJyxbWqG11Qkb8eX2wwfwQjzr3wmBC8wBy7hPpobb2Qu",
  "key28": "dNJxx5wguqokU4tQMxHHAzFdN2puJgi9JfHLzZFYpe1ETRVarg1t4F4uoTTbt9AM2xiLbJgsgxLWRXF4Qw18pPU",
  "key29": "jMGuuZAqXNDjX2WTSN5Ybxh6Jf6ZM2aahp2k1xP9x6SiEAcCzc2945KMYYc5dDfCZxFP3inYn9NGPV8BrCtw6LK",
  "key30": "3SJ89Lz3wmRtZdK6VLR4UdTKjmdd9WBkxZu1WPVfpeNrbcEuYZgvc4BokoBVAzacgNRa322hFz5zhEHhpjQETA9w",
  "key31": "3K3Skk5nbXuFaGAhUecd18o9MSyDWqqrfHpkk9XVPcRu4o5H1cJkitTKfKK8daZ92JWArk7ukEMoB71yycqw7mSe",
  "key32": "585AVEFsntSspRWkYfF6Lsdv8pXw8UR2HzGiTGKDCFGs114QyFvKLReyqr5hgfqgR11Pie9mcGW6K1d7oZ7pZmsC",
  "key33": "j3XbzByV8UgKKZQc9jHkc2SrHf6FRWMh8xqfWU5KKuFNZbohLA3snWHmvV1ehPiDhguSS3JB5yDCksE3y3DEfCS",
  "key34": "EKsiDXdzZNG2CnygF6UFdNQxYQEsBaimdQWjPP3Bs1wp63DpfT28uWvnLRCzVvp6qnovPvd3y7sSgukNYpXm6hP",
  "key35": "4QVEC6XNhwfGC1sdE1vPfNVNrbeFev2NBENaRKThJ7doGpTgeFfEyDp73QsTufoPvRFJQGX5iLLkhwsGxnC7a1vq"
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
