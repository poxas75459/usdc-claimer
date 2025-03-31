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
    "2sGYnVQS2jPR89xxD8jgc4ixntGfbHwyhw6sRXQjDcjS8JSyHr5TF7oQbZ9xujbRnkmwFyJsG68SKxbNifsQsWKn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UrQ3L1QytRh7T5MnFVzPpFTshH3BtKTrfEEysjxvpwb2hTrxdpWzaNmT26buj86mczsAkWAvjAXizoMcEwqGeGu",
  "key1": "4Vibh6yGAomUsbNGTbcuzCbTevHatpahF64mudc4Xf6Ja2gesw61zsZ52w4zFJgMBqwd7DeFD553u7pMzzoXUvrT",
  "key2": "5Q1D9Dbv6cEHr1UW9fADFJkJLALiDdrcsVia8ipH4mVMnrMX2igaU8f2josnXxwi6ok7zas6npNBZj5bWNFg2yoz",
  "key3": "2xb4dGsL7qbKDtzs76NxQCuztLhNQaqzKZ5rE2pRCerqbotn1J68kxqmGQDzcJjkMJJj7Et5EUCq3bYU1ceJrwUt",
  "key4": "2AR8xJPb8pX5yinPCj3RAA2q8aFVgK7gHpAP9T5phc7GpNFCsGVMeGhy6xhzWNMfQSd3sf5dzm5KjTWxkkP9TMHv",
  "key5": "K3KmiYvEpEGyY931LW1eVXGnSuGshB3FBiM3C3p6W61yCNNQmPqBHCa31FVsqbsYXv7m8TtUCDuqYoPJSPh6hea",
  "key6": "2Wt3TNJEBD8ZZNrHhaNxVVYH8g38MFvqcKNjBMnhEZ6RyFgCZdJuph5aCFfejH5vG6u37TimzKpnrrT6RWrjCVDs",
  "key7": "662ypqqvhS2xhxrnE2kLfEKSwVcdfapYBW6Xpe1XFakKXNbW1GroQC4SB7yTC11ri9Dn6t2mWQJgDyWTX2XjCXsV",
  "key8": "5Y9929MXLQvqPeydS4ybXKKfqoGyUWzfGEXUMszz7cZk1sx9sF6BqVtfrLuSVBKt9VvnA85gDPaKu43GjJWwPMrf",
  "key9": "5rL1VRdpWZccCP59phwQcyTEfqvt6dTXFq2QSSTYhT3FLxxpC1TSPNxCNMcswhX3vRY6YFvAuJZ9qvDP42p4SLng",
  "key10": "3VDAhJUmxVGj8NNs4EEXV3eg3naN6zRwUzDcLBy7j9ALv6PN4K42fY2YxBjDgokprEJ9wcptybZpmBbuAcw39HoU",
  "key11": "5brBE3YA6JrSJG8AiGZsAH5UWeevaK6Ga5AyYnrJBWVjfJ85ZN8vAyFpjB8HtoRQLFggM5gTjm3aqnvKcfAiiWz5",
  "key12": "5iUK14zkUSDh9a9n9QicprbHxK6QusYg8k1Cn319ytPRP43BwgKjpdYbKV9iBKGoYZ9Hkg7peMf46WTkTjtyKeD",
  "key13": "5g9VLpHBRTKE4VuT4ytKFHKtH2pfvLjPxSYw89dhTJdHzMS69o8S6aeH5zpfK1pmyhk6ReZnAGj5rp1s6GVFQDV9",
  "key14": "4jhJXSmWXK2CiBdiFindfWhQx1gNN3yMY8bFWqJuMUD65xJNEjj5WtiUQ4rdmQ7Ett2xcpCBRDw9MDLTqzFK94HJ",
  "key15": "PKj3Yko8DVzYTsofcSzowUWvLdTBzAvkSqxLyJ4EtfkXf8Q9CPLRvuPwMwrnBKAoUtvnER8L4KDBDk1S34ab2Ed",
  "key16": "5pui3FtuFxUygHr33izkftFoPAEtLFq8JCowqTLbAfbxXmXEDtmxuy1LL1jW9hQhqxLSLLKbUvyqfHvjHawKVPQ",
  "key17": "wTu8kyWumMjzM7LTBE8pRHpWPrnvXBqABst6DK2tpdqk6odJoafu3LK4agCoGpXPrcVgJ7FJmvocvLuEpvMZjDC",
  "key18": "66EZDw21a1zgujk7pdiULZxEVHf4UPuVobgRGCDKN2zcK1ySB8sCay2nTxhgYW3T82UjzJvDNGgL7tgr7iyntZKH",
  "key19": "3gLmxqzeX9VhPhAMNxvwuLNSRTCwvgNP79iKoSAs6MLQnrGA3MMhePm6rXDphAzeuJiiYypUvUuo6KftiFALbHbz",
  "key20": "299RKdEuDfWbgQ1KgV59iKuXvxAdgKDkY2orFNShBydJe5UQmkn8egKfVfWPkNqSQNP5gGitQ8VAab5baFYf6FKX",
  "key21": "31spWrcrRg29fa7sqKrM3q9GTQUgCTuYsdXJE2n9bBpGeFJd6uzAMEPZfgH8uqtEwGoDG3GLoUduCnxXVVs4VLK4",
  "key22": "3YTKn57fvfH5UsxUmu3XFFCzb3xDQyu5tY6HNwdmj3grnxBpLmoDKRDsJVsf3r1vtJXnn9E4ghdEQbJCu6uQ4PUm",
  "key23": "5TUF451VX7YCpYRwQ3JPnBbgeK47E5LCa8BMKP7L38DiqmKRtEaWsqymJiW1gALKpD4fGmcJoQ6YMxHVnrHa2Ypg",
  "key24": "2jqciMNJLfhcsG8aeQvMDKbj4PYFer84MzrwxCriobA9hFgtoMqWCisAeemznyQkr7fFLrDWoJsg47fgF67njucg",
  "key25": "27Bku9pPYUzGRBVuMsDwJ4SfZvcEMuwMfbcS3qtjK1fB6mD6c5QpHkVwaUKwsdtdXN2ti6EES2j9eJ97nc22wNH3",
  "key26": "521rFfVryXFZyaZEDN7ig3CpuRgggvbQpZcAWs7CwDBA4AgJoS8tKCxCsvF28be6av7CLqn5DMYueVnNLQUSrtAQ",
  "key27": "3aJdU83U3Ueqjbg5rh6F6T5Ao7gEE6djefwZsSPx66C4jt1qENyAuoXn6hi5XeFqddBAUfp4KhUbauhVRuD64X2A",
  "key28": "FsUEZtbH6wbhdo2vLg1ja99WnuQHcXDQPZQnZ2skMUvvs7mEFuKjHf58zzb79FDmzH6LwwpEYNtcriVA16KVBTG",
  "key29": "acBK2Sqdg3oqxJFC4t7wpBoqDvykJhrDyzisDDq46ZV1L3SVYFmQcdvTwUfQuML5jkRSzr5iKjKdgF2LmeVVsta",
  "key30": "25gKAAx8h1Pi7jmfBV2319FhDQYXkmSTrAjZjj3XXCVoMgXznjamUG2ugu4VRtVq9kNX9qev2sgmwbo1xZ8txgh2",
  "key31": "4D43CVHWFHGvGZ8BCg3DkgEEXTRPzeye16TqSFeb1YsKyp4BQXa5xfutJqYkdfBUci6QikWAP1G7XdTMNQG5zEuc",
  "key32": "3fNmmP1Rf6gh8Pb3rjj8RnqFYDi3qR19ZsQJwWeg2ztCrhVcQkuCJUgfX2Lb8e5zq421ZM7tWpujxD73baNcQrBq"
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
