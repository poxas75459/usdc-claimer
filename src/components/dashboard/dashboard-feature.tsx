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
    "4Tn2SD7q6k4hZCEqaNKvfFQkCYfaBv977Rjf4hZtuojpHgca8WJg8NM4EE81YxJu9LXbJ2b5hqNZNVNaeSMaMxzk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B19XJqT8J9ZCcdT9JpFkNo2K8KShGAit4uYsLu2wKw5CetbVGfqFcadLjbAtD2LygaabSRxD4gYNDTjkqiFki3Y",
  "key1": "4Rkosgj5kPCYmqkgeBvYFnrXT5L2F8Lg9zcUQ9coG7Ps88AZ2NbwQdugqRVfvwkuAtcgX6RcXja8XwxMqKg3i1SY",
  "key2": "41ZY2qLt5By2Bq3e5sZsAJ1jL4aq4ktPHGFEyLUGgogDvNcVSCvG2GkMWMV9e4LZofKVvLvpYC3cwEk1cvFd3783",
  "key3": "2mjrfdBiNxvw84nDs3udFY8oWmhKTJp8pphEvCGcLBeuzUub8zJRKexyCdF6FDRecs78GCH1ZPpjowxxLF5J6ATC",
  "key4": "2a9EZzPsoAKXMcmQLiBXyxoufTayi5yPVoZTsjA1bLv7DQMm2Jfb4C2UVmeWXKLgkiVHbdrEqJ5SfiSD4Hu57GEC",
  "key5": "MZakBYsxgX5HLZf12FhTmMXjj2e3XU7VA98BNfH2KB91bymLfaBNbb5VKU1SFini2i5vmi7fRWSGWaeZSGNcMRm",
  "key6": "AnnSPrFA5dRqH7zfuR3cf9Eb6CgUbz9bvk8EKTvv2qPQCaPBYRvEhHvYZ3g7vru5yDCEAnRmVDPFiB3ZFDGvK2X",
  "key7": "4ujdguBMnh9Qu8GCTCT7TyK9DSWLtKDcn8np1f64izA1oQ9Cyw4Hng3VbpE4CuvFNQNPMNnRBZNGtAJxSKA9MpuK",
  "key8": "4aq35v9x9QnENWL2obuHFiXLsjfmJWLPo5eSG7a1xHn96KAzb5pgyYjiRSur2R5d5LrLjDG9PewBSf9n6r7gmYKo",
  "key9": "NdhsGW7tLYPkBfqNeLny4Rjv11h3aG4poqMwyUTG7Z1w1t5F5JkooKZwQr56QrKDhysm6tF9myazhT9zF8rQX6q",
  "key10": "692pKAZqomYnMMPQVgu4x26DqXsmew2HysKuv6t2V1N3Ln4nHopjS8mN9PX4Tx1isGfMmqBBugmnXS77x5VjgnX",
  "key11": "4ZgdhBv7YzrVyJZmZWPeqM2JHRaBvuN4c4SFrzeC1qYfofH7hRawTUYyn13HozJtDjSfK9xLhZiByQb7MGfq2KC3",
  "key12": "9L9E6Z8Wv44fxEVg5NAaFmDU2q39KSde8Wk9a3cKxohfRtLGafLwMsumLMmEbTFURJBX4JKvjhVsuJmLHXuBdYe",
  "key13": "2fHhwE5sPLxMAFDfBbYyGnghDsFj1miokgnPhZxbaFAL7ddqGoVEx6tEYX6NwxBPufujDDFobSjfKnLSFqr61pmy",
  "key14": "2gM4PERHLVWnFaCaZYSMyqwgWtEAnkrhbtWypyzzc1286TTNMFg1EWS23gJ1qU89kGBECBHiKVxYCtS1Ge6hmyYF",
  "key15": "47bn2BJ4rmm3Zk3WokyAhpJqzYtQeg7SyFR6Abc2mhGYUKRQRXAinnrjtvzmcD14PMsc7U1p3K12VLKfJV2n2CrN",
  "key16": "kJ1G5TQe7dgNtoRpywNXJq68C8fpPb2qWu9V19ZdaRsxA2HueuT7apLb1kG5LyuUxT3mFKKUkvDi9jeYXXLmEmk",
  "key17": "5TG7faXhe9THWq8pY89kxQhykfDwKMNc3HjxeAWn1r39FEgRcMo6UgpaBmB7Cjqzjv616y3H2DzUMiPeN7XnTusw",
  "key18": "4R4tHov2xW4D67xHCe5m3whkCPaYqVyMCbHemtuGqrF6yw3a9ADxnFaVz4Vvu8gPwLpQS17ZMUHmHvahtSB9LSDU",
  "key19": "2prjmN1mKcFeNTyz4XNM2S3nWFgAqczaEk6EByTZ7FYM2xZX4fYJ2RgFSgRi9rvgANKFv3JjABLzVjFU5zkqd4o8",
  "key20": "2ENzZBFWLyF43U3j3a7H3NWbQTMBE4RTYdX45jeAtMYqQGBKHiCUW7TRchfUx3cF3jhT1zEdsLJL7UiLS9Y8dezn",
  "key21": "2PbP9MNbEgvTeti7URLjyffh8b3bguvyoSfqXjd4EsPJ31duEgMn8vxu92rKM1uYRpY6V9AVk1Lo5Losd1msM5MS",
  "key22": "8t6n5bdfikAa7zfJqVmNLSCx4CwRPmzkzVHEAGEPHfJasuV3KDXpHk1chbZjKYoD7NtPMYpG5CiKEXVnbRdGNQ8",
  "key23": "25DnPkfQTzbvGDtXpmh5m1rCxkTehb3ihzMmjednAMSVc3onXfjksGxfGJY9a6trt2C2kGbQXvptg4DzDMUn7rzx",
  "key24": "4Vaqf2rwsHnFVq1HxJRG5iqC6jvMiquRyWxveHF76iu6wn6fhbuftSqeL3EpEHcFavWTCFkDBcu659aM1rPNQKct",
  "key25": "3F43DWyAeRPPFY672GWSaxVSjeudQRRcMKTnS6HNQ9NxARm1LmCdnKJE4QrdfYagu4tFwyhEdPQ8JRKzwbKBoR26",
  "key26": "3RuUaahxMHb5v3iYpmeKDZZm5aGwCG2bZ5e9ZyL3eZzCKF94j8J1wkkzwHxNiTW5fGBAN8KUJnFuHw5z8QtMuA8t",
  "key27": "4QgnyyJ9t3pmRR9KaVJFWsGN7r6y9GtHGkGKVr7bcUVp2NP8ofBX2ejMdXS1KrjkK2go8eBeL1zCAioS4GYk3zAH",
  "key28": "3heRfen25JdTdz2uZ4JaZ7ro7j4Xxy2x7GrmMguuVb84a9bBkVtaDFMwhDcnU3kvcP3umVscvXKHtfJ5o5RUzJ3y",
  "key29": "51s2ogRcibULvv5e4e1i1bGKEyLXeAWp5mMDmNeNekCK3buc5ttsyspGfGqggwwDRrCxFqjB5YM1b1GfEdUogPeD",
  "key30": "4aA6PPi2afihMHbuSnKjdrfBKrzdNwvzY52NaNsdPh9qAgJQrgGRjELHZYXxTstnF5SpJq9S22bm8V6HRhKNmNfy"
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
