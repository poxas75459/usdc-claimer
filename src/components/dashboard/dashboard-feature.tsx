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
    "2BiDqWJ85Ttsk8YbS2zbDXTqXkDgnebGQprxTSgALfGE2LW1EhRwfwCZzeHWVp3cKHC7FHKKwGFbLdgEydErU7L9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mJPfjMfp7hJQXYvTTJv53wFsrgyH6fzGoNqpYM9Z1HxjjW4exp2GhwLDqX1dcZsRusFwGrwqE1bganegBE7KsBY",
  "key1": "5XZFdDsx49a138RoEfiMRpNmTQ9ENJdrWyjhc3ooMLY2gQaetvKYhYUUq2RwiVSGdNXVTNpPySy6K4WVJvTE5fgP",
  "key2": "xcHJD58Nd3MRYFuUwALBW65gMQosWpWsNmJy9tKYTeYTNBuBu8R7QJrRM744zJ88kMsZ3Jqy7GcusDb5Ydm7UhV",
  "key3": "2oJ1sKotE1pE9wzggJjdgamujVtphMfyhpLHw3oJb956L8ingoVnzVsbQurARKacgUMDB5Z2nhdoTqk4hQTMMfF3",
  "key4": "4CsqZDmTVSAoRzFaUVJu3km2Mpt6vb8PWwmT4LFvesn5gFU1u7BtR4YYhzAQuqxhweTeM28wTWjBaHqkfGoBuZU4",
  "key5": "5MMJde9uGj88Sgynk82DRETyEHMc4NTEaam7C1AsZxJQmv5Fwy4KxNAwqXLeWdhvemuo1T9Q8mV1ARChQZgpMDyk",
  "key6": "3MMjhJPZFwE7QkfRVZyCiVyCLCJjzMQC1LvmcCvMmB7VN8pajYy9rxCgrTtwiZD5utFZWVHssj39R1qjpCS4yFzT",
  "key7": "3Xr9r6GcqjLzLijVZxwP3FD4WoLuPAECUoPFsafGN1A9SNQ34RsujgcJ59MF5iDtcEhhfrew6eNf9c8B3xMZnY59",
  "key8": "2NPLRYmeNeyQSfxvNh8JxrZNZ95pFnEDXka29xSbkpbBgpkyhwpgDNJTKXwrzAETsYWvNUCTmdk3tJ6oR7Y6CRhw",
  "key9": "4c7vUEHRsAtYWaQsDLiAdUTawNKfYgPzTMZgiTMHhThUfYVRFSYWjFzahmEu9qLJTgWP3D6qQ21aBZxDJ71qoS4r",
  "key10": "ZVGyDEtKEDN54TvU9jMv4YDmHGrP1reShEuP3xwYL4WMFFWNvD4fraf54tDwCeNmBtDfTjvrSDFDyKuyuPnZkHE",
  "key11": "gGFZFPYM8tAWikUPCWKxGu4jotyJQnLaKpNCWuzNc1SKdUnmXDgUqZSceYEFySM5fbcPArcmfnDMH8tA6AoCUpY",
  "key12": "4A6vhD11AxNfk994y7TFNP64jemSSx19zRtnR5WcLh1JTdHrHABY9jr8kGpYNzpf2oQPUpVDjW1CUsziQq5RpEBv",
  "key13": "5txYVH8uoC6jrqJyrNpyekqckHdP1mPg5B9wdUpnzHC5e2h8z3o5g66kFDnWqdkg5ztDLVCUcKHZfCZGMsz33n4z",
  "key14": "2cP8pYnzWw7XrjLmtSQYjx8oAWMJr3bwGQ2jXMdp3yyWzQCj2QyTWCXTeT6YgMyoTBDRvwBkVd8UFUqf2gtnBT1M",
  "key15": "5HDL6CMgQnZRsysiviEw5x9SjhzUjK1okzMF9KXhUTVkgM39w7WSFzufwyrJwdcv7DTqfJiTnN1XZfySz1HyZ7cP",
  "key16": "239scois1XAkRo1xVq738qHhqipVMAtDemYRbDPqMT8Lu1p6eT4CvkguRtuSW9Biaj8HPNLFc941kbiB3yVphMP3",
  "key17": "4oUb9j19HjvUkQRt2K5PSiqvRuc77p46kUr8MANDs3RTXu7RHa7DCx5s8bZ93KsAnqJn2iBVR64UYh77vad2zD8a",
  "key18": "3D6Fm6tEULzCwd759KAXkSaZNLqGz3fp7q2vm5G4hJfAgiBFnK7hGMQzz17uYzbvhps6Cu9ertbax4n2nyjAZUws",
  "key19": "4cjpmcodfYwSjNrntHBu9zKm9vxP4ZCyo6WjGsEX1QYw6tCcKfxvDLhqkiJrbm3TZXYrVQY7UNSSZxt7teUL8Vp9",
  "key20": "5kKWJWLgCjrB2WUU6fqg1mbhx6TqXSxextAYg3Evh87t3asJAmPwz7uw9Pnc1hk7vqk9iZQHfypM9ic36PSLyaWZ",
  "key21": "dbdCMejzYequf1mKdFPemvaaVuGiTXKRzzkj3JNWw7BVmGx2Nvq3AZaM4KsarfjHDQ2fDXPkAcMXLUBMDLzg8pN",
  "key22": "3c3GHW4bzeLHqVnD5ygfksg8SkVeFmwgTLNYZmfXJy3i59ypw3ty4NZeK6vpbiJwSgeTfsHRf3rchke5x6cA8uEA",
  "key23": "MXqWJfDjwy1UeEfcCV53JuaJYpqikpjw8Ta56oqjsKkohPSFer84pMvWMWqnQpL4yiPXpQ6kp2CcmNdicbetKZL",
  "key24": "4dhCQDJKHr1TkyEFpsRSvQESactYEbGPwNfsvsZ1B7w8hhcg6tiHRQT9TYJjD4BDpTkz1TAhKfjMm7DvHSpqEpJd",
  "key25": "4RNkJMuSL2bcF5FcuiFKoZPpqYHoxUq6BqMSdsp2cYN8et3sCSapzEVYxzU7iTkDdUE3YoV6Rq4C21yXrmCktK9a",
  "key26": "4JoTPBQFDKHgLkRCsmK3E6j5JBvwQT4Tks3nP7j1TuprAdbEsmyRc113oWxcGrUPR4jt9RMpLPiMbowhs54ZX9fM",
  "key27": "UhefTP1NdpuJXW85bpWa5mYJmRQ5WA84ZUZcFuSCVo8oMrMRtVoVLUCUSn4AMgoXfFrgyYJ4QjPVrWpmbAzshCY",
  "key28": "5L2yxjm8K2xKUP8oyDNGspdqq5bX3Bw7bc49vdBWhchTCLvb9CVhcFwd3VKPQGJREL5d3S9PUx8MRDcpgLVQSttt",
  "key29": "2F9MwdE65ScgYAtPtwYyQPttmEY3GbL9CwgFaGNnzbG17u5wQdmwNdpQopcahPyxDKXaYxGHM1dmFYghBye8X3p7",
  "key30": "3vykmeSst6vhvmZWkLEwoVS9s1yUPEc7G1GCEGkhRP7Y6pH4L4HHgBbammuDkPXfDy23A2JRumbRkbChs5nDpBSo",
  "key31": "2GVBAm7hbDuPW48M9PLDeFW4J1KEGGScmiGtsYKxDTcrtV9wtjPM1Pf9jpY3abxA1vR9NjR8nxjy1UZ4f1uCkr2E",
  "key32": "5ocyGkJnshSvnPLk2rav4NLKuV5hy2u5AkwZZCnQYkdSNWEiFcjKWz5dKK8SPtwkxvadpXFNMZbzhD7xE1W1Xu6N",
  "key33": "352FjQPT7ayemecmh64mfapD4nvTiT5monBLxDJLSTveVK1QVGTq6hPa9ivHKwsA8VHovmBGQefBG2Bmcxq2qAhW"
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
