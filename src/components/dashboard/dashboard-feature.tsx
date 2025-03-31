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
    "3NoDnUBq1Ee6CUvAdQJRpofpBUS6papk92Q9yXdofnUxoUCciR4qnueWu31Q6zT6kWJcciTgk662Yex8tR4NR7yC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aenFU26fjXTeZPCyJc9QYywvyvnw64sXizF8aFq4JNC29M6HT2XMxB2jh7N3uEMwsyBst7CdkebGXdoVMsE4iQJ",
  "key1": "5TvsDEvScZLY9FvAePx7RWoLBAVEPxPXuNiqEs9a9Nebakz2nisTnnd6fgkkW4fdd9XXf5pFoBU5y6Ab5rxutFQc",
  "key2": "2iQHiUvQtEgxjZQPxkJmYrVEq8EysVBgFXAQqqaieESSi4o4vG4Cxk9N5R4kzqkRpJfQULhxnCS2dDkmTnWHWxU4",
  "key3": "3bdp4582pNZr6BnNQs9wXfTQMuD7e7icvQRh5h7G2psYXy4Cc5GDLonDgP9EnDYptipCTDaiir5h6HyGCvp96npA",
  "key4": "2UFDPYozNm5CapTU3XEJgK3fPwoHaCZTiWbVh1f1CWzeu1uCswL5HD2roo2kdtaQVcH6oUnncTcB4TtUce4wTUja",
  "key5": "5E2m8E7BtNXW4hZWLSiezkL2PSyAJh49fLx4DWNJX2Hbog81eJQ7sHTs9PuXpMCASFK9LTTqeJFBLR8s69Vf5DfK",
  "key6": "2jPxNXRXbQxSqZqgnToj8ZN3ugAXDFvhVNnNwd9YmtiU7LPCn73g3KkTLCiBMVt4uY8eeEPSyCwWZJ9XsLPJ7BFM",
  "key7": "ysbvhtcbbriT9m5wvG8ksLk2gjvVZcuSZ85YKVZ7k9dpVSDMzqar5Bmh5t8Y2UAUoKbrwsSDxJmbfgDm7J63dT3",
  "key8": "2Yktcpw5g6nsYUd792AkfQMrvvx6z44mynLEQkTif3xZRE28dyfRivZtmP4fAgs5yCH482bUGm6usdsaCF1ULcA2",
  "key9": "3361teo92PHxEGr2ZUuGWXRYzsfYoDYFjX8rNothMwmV3Z3JqVFYmeRmm66qRMbq7sXbPLUMrnu4jfzxt5gzDTz3",
  "key10": "2iyASrX76BXG8ZHcUjypgxeZgTpdZwpJC71yJVL7MSwsL5i2Urz4R9t1PfM1wQaFFdh2P6PGDZjutnQeTLCr6enk",
  "key11": "LzoPHbQcrpqyqeqK7S97vsQk8eHK5ZrCSxgWdZ3y4BYAYpdzksThcj8rnWGsuAdZsD7ENBsEpt5cUHMtaMhD7tF",
  "key12": "5Ld3NCaBkQZQg2FJrSMFQPgkjTZgoCALwW9Xw3LHN4co4AAwoJGoz5KwXR6hW9AdMMXdwb4N24e35vjwatPMZ8nb",
  "key13": "DzK33p3nzeoPDWh1quFkKWVcCANpznYGCHDbPCnSFhhqmNS24zSvKHNQYqcZSU21jPkvtnqfmRDdeBkDDyvzUgt",
  "key14": "21JqiEWPWEnSUmuJWjebNiWwhFwEo9LHDuEzgBsrjmhnRTjqDEHo53oAUUdvmoqRGAii4MKEVBkzMyahktHCFgzg",
  "key15": "bstCKHtAhUqR5n1ipRRBqH7xveR5QbHG6L9MizHNDL6koy1Wan5Aw6S6j3q2LWuEUKRyk6ajCUHKH5d4W598LBL",
  "key16": "35jHMfexmbKECiu72do6Exx7t49AGbPXCNGpxWBBRJQ5dpjCY7nmffzEDuzf7HWaLroouA6kSA6ALSmrCTwduRfc",
  "key17": "4obntzBgbpJR3RXU8T6RitpR2sum8T43YwwYJrkd1xcs1oroqTw2ngTA55rqwoVirUzM9z82qdbgP2nRL74YChgy",
  "key18": "3Kfxd4H1SKw7QBDouR7EN8KgQr3HDiM5SxC9A3K2urMC6kBgp8zwqTHopPBYKPsyoQUiJTCwTVjJYi9DKPfJRgcM",
  "key19": "4K1EGsQdTwYr2vENXE2SCyNPbu4S7LC7fuxYr9Px6R4cLZX66gsmjX97FNA3jsjhkR4fuQfTqPMqkQNZ8dcgMEv7",
  "key20": "3rHEid2BtAgJPDe1krBpdEuUGtpuJK6xcwg9U8tixrbbk4RYtDFHUoBBQyZubvLsCEP44bK4o4RFxLFvqQNfoUTL",
  "key21": "4jjpAG1mJyX9dNvYBiY4pq69q9mzUXgDmP19z6smvdQw1vuMiiqEECqSLQHsfyh6jUrUTT6qnBRJBzroJVA8fkrq",
  "key22": "3ZUT7wKWnNJhVuwKRWsoVxz1N5MS2oYQxiyDR39LKmAXzYT3GVXhMLA6PMbkhKcBR179PbGxYzewcSbxrXpcYL4p",
  "key23": "3PxZMANgMB1pk9NX2myw5mw7MX75e6axCSfS5deNQ1PUBDdpUpRJyoeXv8eJVWReHzvGVX73aVB7GMhfbWQWzs3S",
  "key24": "39dKuPFMvMrktGBBfvyfCCoTR5NA2UByPWpjuijo1go4HCtgPZYthvKcCDjRSxQsNgwqRyaxJwh132JrUNFymgUK",
  "key25": "4GcK2eLcQ8kPYEj86MSP5br5jdes4FVtGTCTV2j7yA78U2r2FdANMt8VCG9iZJ7RyMx4izm7VvLso43SfzbqjLMo",
  "key26": "3Hmvg8kqeecXzkVG2135UgGXRXVtjFpHoj4hHrapHLoME8tJ4DG74h5FkzY7jWxDrJDmeCvq3MeyJF4x3u4r6EKh",
  "key27": "4TXusWTEDU1MaeZrtjJmYFqpZ85mYhuQPdgGvJ4BcF1iqeZBv1HpYm1VbDSiWbcu48b4Rrth7Amrz4ft8CKtHyNT",
  "key28": "9e21UkuYF96nTyd53EFa8JQaQ2GEaXZuYCN83aWFF5Wq7kR9i2m8QGVf6PDpz8whx7J8bLN2FZABvNhFmvftmgK",
  "key29": "4a5booizoShym8qdnT4XqCACVJoqAE2ofRPePFYTgGRMKgT8vpuEdAyBvP2V9j3XgwrX7v2rQWQ1smM3PpmzW5Vw"
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
