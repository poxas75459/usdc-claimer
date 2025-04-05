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
    "52zYCNeawPeP1pEysQE5AVcDkjDYetqHLKxaGFdBtWBx8zegLyam8jTHCbr14hZb86ee4UvGyCKSa5yiZ1qM9dh1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WAcGqEGv5JMSDu7FnSHvP2dtPooT1aVL3VE26B1okd6iS2goKoHWTq3884i3VgforDpCBHTNiL9cXA65UVvBdnw",
  "key1": "5CQXgMqKKDwLkwuELdCEFeJH5jvUncCT4Z77fFhEDPDEY2pyKDEeGPcXCKXp5x3bbbCiBfF16ctEHoSFor3NWft8",
  "key2": "5si4at21sA9PXg39ngAStbg63B4wjexjDEDyhs51S2bTippAKC4p9XFStKhYyDDssTQbBLbhXeDEGSgfSmf7ou75",
  "key3": "ThiKcnyM6T6oy162aw9oeNXkE6K18FTCmhRKZHWh7iY2ZXRaybvPQNwNmZ91tCuNcJA58gwwCmXcz12iNH5MHZz",
  "key4": "3XY349y9FTkaDnaUkwwoEUGUqu9dPkqoDjy67bjs8HMmHxytfknu96VkTwbMgiTW9G7jR4n6Ad16THgarRHWZ2D7",
  "key5": "5ESTNdUvMvpwBumQ4TwNg2qXyfDgcKxVHoRq7XKnLs4QBh9iiXb4pK1tnUdVZKtds7xcijeRhtrEP1JRMnwbWTAm",
  "key6": "2FNJaVuoTz2MKp2B7SHgKBNpRCeTAzNUGSsTboTrvr5xEPb2Vz1e2J2q1SXQ7DRreHQpiX1zAmuh9s7aNVVJgACK",
  "key7": "2N1M7Xjro7M6oDybooDq2LBUempQAx9fdzTeHyhGcDx5r9DzJhATCWJVwLvbXo8PUtsFzFg6CGoNPkToE3AiLywi",
  "key8": "58K2jf57RQ5HxvhpMmbn2ZLyoP8XQeFndZBpYf3RVhD1Xes2cNKCsptFzFHgNLYipGCiifDbvUF8aYriEkKs8sB9",
  "key9": "4zc9AxS2VJcpkJDFX5q8BtvaUTUYFApniD2PhT8mhww7FyL3FnieTSiJPLk5xH8y4F3QnQDY7RMJV5HdwXJyskVu",
  "key10": "4VYf8aALUeJNL9mLwke5CSVbWtim8VwF82VPxkhx65Fx1ZX4rXggnFpJrPi3KVXjWVLmHh2ii1FQUeaXGhW6rcZ2",
  "key11": "2nnbdDv6HoxEVAC58BxoWAs9Uqee1k8B17pw1yazBFe2quwQ3fKTRi9EABd6AfmtpTz7DNyLjcytqtmjJwdRoXH1",
  "key12": "5ER1UKpWgimqBmhgFMLx6aDBoYVYKmgiZn2SH37xuwg6Pw6ce2B6V4RhfufZGCNa7x5YLdBvLCyuKJT3R3fgwDZ8",
  "key13": "74gHJdbyzuHWFpEKz5LHRS1D7bUVXc9NK2bXFDV8Us5Qa3QMjooW3fgjUsaUe6jaz6279cGMxTLtFFx4yMfW8pK",
  "key14": "5sNhCs3Lwyq8D8EVtNTbA2cEA37Cpb9fdJtMbAjHwea2gCeyWjG5VB4xgRnr5SshXb6ghHSpP4tjRKk1EgKvRXtz",
  "key15": "5W851QtjWTBQTHxxzANWLSDyAo6rVkX7Gg2HHFSMrWhK6F2t4yciAQSBFrHPBPZhokP6uqWrM8fzg16kVYYRXPoa",
  "key16": "24RnY6W1QnS5K3ponbCtgXBd2mYfACELkYxo5C1B4mzfNWTPoFUu5qcY8Q3LJfSqPVEjWkFi8txK4AXecRXzvmpZ",
  "key17": "4DkrjmYN4FsXrNp2DPmNr1DVjhrzCFawzM49xRuzBYxAErPNHXMM5GPaeSLaPyFddALjnSkftSPzk2kZQnd5Hg6d",
  "key18": "zxpqSJFtic3aZrRXzjm1CN1qKnv8YB21CyNPho7mA569KEc8kAB2qYDd4K7HCoqEJ8pob2Bghk98c52gkzw6T9o",
  "key19": "5XZSy6xsqAUXXVWU84K39krmFEuQZNmDRNRNP8xr6hDuq6XuxR163yZexPv11QYUapN7RmrfiJtwYUaQ81VHdmUd",
  "key20": "4yLsZ18iu65pTHHoxCvULiQr28HhtZgSLYiYyGccTvEjKWosebSPQjp6oxf8Kx1Z6Ad9XhzmiwvuXviRCS8e9Jrr",
  "key21": "5R4fqjceEEy5qy7BB2ugch83W29qiCKaPVjS4dFgs7JHDVnvZTouFBBrfRQmJUEsNTjuJ1Rg93GNUKp7sZJT7vih",
  "key22": "3uocNc7bNeTMoP7mbEzwico2vfq3oFCmKBqAhHv4Aq2fYmLic54M3g8FNKxkqFkUNqPqaw66og3WDxn8Q1a5mUMH",
  "key23": "41gZHF3URvKTQhd3XHwsPMogawovX3QUvRwZ27tJ8zrhaf4egLwfSKLZR8onT6ZTVGy4GuEuc4yZt61vF66KP6iC",
  "key24": "jzrXU6qWhambjRe3uUSnnay4W2nfyyNRUg8arKX1N18TAiKhXVjuoThXtEz9n6zTq629kyVpPcPtat6rQzevD2Y",
  "key25": "3eJRX63pNZvF666LNqy9LTWmmTndXnAWLBhPL7pmBJMepzA7kh1nud3p9fYACg51ZPtJG3fma5utmFx61q9DkJLX",
  "key26": "PSuZpEoh8jG7HyiedSE6apgymy4Q9P7XDNaQKDjEULLKLLJgPAdosd7oqwqJAA8neWjy8xbAgLzixvMo7VDJSzm",
  "key27": "3MYuw7kWubKftCN7bcU3Zb3sahxwQZLGAH1rEC7TLMTMkTXQZWhtpv1HmEYShmZq6HUCfjCXxSaZW9meywwWPhoK",
  "key28": "3SPcq2A3pCbhUNVkDp5AdbsjxMq8Vf81KmaZcmyG3orjNuidBAvFJMAuhHSeSQcYKpK8HmtMm1WULnBfrMp7vY7X",
  "key29": "5Uujk32nj8reSux3R4AzCjwxwqh2x7rBLYPvKctC9e2j7SXNAzm1BESvvCLfxvJHmt8LsKxzcgaTGnL7mqCckMaj",
  "key30": "4dWXeXoJhXPDAgNzF8JFYsKtK78zUsLXsjc8Q8ffSJQTs8uoRURezd8RyewSAeKK4uvkBofdfeqd1ZrNSf2wYPF1",
  "key31": "24mcH31p7B15yebWQCvErbyPuWjahiJWKgz2Ap7CHSa6GPhirhqNAmWJwnMip4PMz3Z16ErDwyEY9Fc7G1vRSUpi",
  "key32": "5q6fbvSg3r4VAv6GTPNKjdukrC4PhNPoH6xUpj7kLBqkttWtWMcMcyFpVthQvXVAPhDnAx6ZSXkE6Ryq1evNHypX",
  "key33": "5KvviA5B4qiHn3uCELuWXKsA3s9ezzq5L1h9irqwASUs8YfaPSqXSrGnLkqr2eHcBfegh8PX1HHpQHLSBLuAzjUM",
  "key34": "4sihiBXc3W2DEwrfsEzebFkk2EuWR1fSY35ZqMoifv4DKeK1Xfcwx9NiS5Emn877y2MUL3Tv7fMfYQ73uTVLPSzJ"
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
