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
    "4KWe97SomMPLEvJBB2y42VFCLcVL4twh5YRWW4DYxwWj7qaJosoB4bKirb1vUHD648udbDCoGtLo9C7sXNRCVTmC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JQXS9qWBiVJ4RinGk5QgFV5wYic2G9reXPLzRDHVjkumQxGjy1yndUNC2xdajomMHtEGeVhshofebNTMdyUUWbp",
  "key1": "5CjxTokFFrfgvcFLT5MRrdD3tBCRpu7R4bbn2cByVfqzhQhUM4Jgf8fqd8eL4YTa6p9MbY5E7Cg1eLoyRww51vRq",
  "key2": "4swfNj78hBTvxmSXYehKwJtBVbfAYK6rKZer8PUtbzuWXnyVNMv1rUhEGcXwLpChm41haAxDzWPcrzr4MMwCokWp",
  "key3": "5qo9eHLaJi6D3wdudBMMBtcrLKUishNkLYBHiD8ajYphfazNAXuuMDqGT24tt61ivZMEBUjCFdR1tyt7sgf1MVZ3",
  "key4": "SrgQ9UkFjuQ6MCdT5UQrC7CDeEkboQU4JsVLFVD6DjyfhBX9RDGhGqfxmLxUAgm2EokBd8EVrJ5zYszKqPLH4md",
  "key5": "3qBrahuizBKMWd2JKMbrvaG18EpbV57ARfyca8ReXQsF728e9DUZhAov73fW9wmnS9DSRA3D4wU1xG1kBM5KnWfF",
  "key6": "4PkEcKEL14qBkXQnH9MxoY41qEHRy7hH4SN7ndW8gQCcqXMecvAx8ZhVo9Jd9fZDEAaFBFSaprb8fiu5QzGUHthz",
  "key7": "36Jjk3og7xPv2n5KRQBeiMPs8V9DrcTe3pC9mCqyLUHR8TS1JM3Km4WCM5Xg9cT7XbfqP4iauVz48vgGgrVTaf6g",
  "key8": "5TAwzgaeYmFWy1Kvs4AxHpcePnYHHiQxsJh7MxehrmjWd6eLsK89FEBJ971JKXk9mD6Qbp9zbUHUotfygCyjZ5bA",
  "key9": "62LPK6VSvpEfdxBxVojwuPp7Xv7dw8L3aEG8s7cmQcb1LZsCSMJAhEwV8ZZSupiomo4TzTqZgKLLAk7LdHqnJ6fg",
  "key10": "2MCGaV1rifMkR84Fk3wVtjUL5XTnmC2qtNNcGXPJAB8dfNr8kvwQN1xdCaRnFtMaua8uVkf8iJLsS2hdoH57tvqX",
  "key11": "4hijCLkJ3wDZZDQuEXDn8eYid5SmonwYhNmMeC9xCkshbHboyryCzejaLqg1rCNg6ZLhacmCsjBSQ3im3kr5Y81j",
  "key12": "43jQN3q6bXbrSjSBBNdAM6Acpnt2ukTknfAcsPL2U4MbgyyC1FZ8cDAaytEVXZSigs1gua3iPFdhcYQA9bp2SRj2",
  "key13": "5Vu5fGFHRGbbdhHCzc2E3V33CU1qrtKEcYdtZJsaWec3ykTq7cPrmrH5c54T5zeNcwPVbEEWtq8fH2C9CYu3xZP5",
  "key14": "3djHjiBbq6FXUZA91ziHhJqCBbakhHM3pmEdDARnPB8GnKg6KjJfhCbTgzrCtpR9u3nZyvzUM85duDsBEojmATco",
  "key15": "35cRzBPGaZPkFNLG4DiDUdhPXXLc6wYq2kJ2m4ui9Gxeka1Lwu8k6UZuh94HijAU4eSStnMBuig2DQGgcc7qfRNp",
  "key16": "3RnTBwGu9Fg4mbubUcQGomBoo1FqeGzpq9cKL9MVYS57zafx4d7tq5WwVCZXTq25ex7KAsFZ4XpSoQBSUM2MFLvg",
  "key17": "2iuFTKY5ALC16E2dfyHZFn7ewqK8M62PdVKYTHWcbDn5iwxBeGVufDFLupyPCLAjZJAML2XheDR1n2GnhX1Ty4wx",
  "key18": "4LKGBkYv7v8cV8rfd79LktcYS2yF48rD2Q3Y4hkRPmgEf6NCHQk1D8mW7JHFzYYAfLGQzPqDrNLnBA7SLW1ceovg",
  "key19": "3XRTwhujwezg8p9cNvr7BwoQrE8Z9rU13q1CJ4qt847QSebJHcQqxEcpHoQxRCiyYEN1WP8JYGFV5RrLMbkyxCb8",
  "key20": "5xwszoifnJDQfvxKjoQMpQxKbEASdzAmUaP9qDywxBBgRzrBe5sHRTPzKewiWZ9yFDxAxpjszyH2vk2se9AEQvDF",
  "key21": "634SUfwE65M8KpzzC3iSVefCJdA4k9XtscFLi9SkpVu2CgBac6VPVjYKinNfUwzL6cyELEVgw3GmazxbRJpMpvz9",
  "key22": "UfzwBRaoTxPEvkRrCaGzuo6zs2nZgPMP3j2TEyw2Qxw5B4rrUtwTCrr4WPyzVBxEJFxLRW6U5QG9hhmZkE5k4Mw",
  "key23": "4QLbR5QDQ7RV4t9YHzJkyki16dHab9DnqkF3VQpGMqYWQNAfHLg6a4RTtoTMfZPqN25JmgnHPRt9RFn1FYLE9Lh",
  "key24": "2GLpss9o9KF8LXbU1reBTsQhVDRGs7zevjmhW3ARw71Ve3ymRH8H3EpzNeotny3kH9XzQZJthZ2sY6g2cZ98kfiK",
  "key25": "46Zo5HKbhEgfRP5zTqgeuBQCwdMMBkuN7ViMN8ysSwPjVYxBC46mzBcY1hhgGR6vQrsQ2HHv2u4d6HJnqprLvHWY"
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
