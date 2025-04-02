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
    "iuNXbSroCDTwhgnUhZ2C2gVeLoBc59jBoJj4a88PtYn8vfwcMtsoTLzayBsCBjPhcJSFj9VANyFEuhCkkDFdnwU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fK2XNCpkZrhjM3honJqZ8df8uRLP1syFRH842p9UnUAHhoHVDqV5LGAwY4j9Unt5qBY79LMgPi9NtQZtdiJbrDa",
  "key1": "AU2wa5WoPBN4LcWTHohLd7joostEkNEmc7GsUaYT61bXQTumUFGWeBqyFNa6V58Vw7rzg9BqBcpALdSVShagiVN",
  "key2": "2qwij8AbibPpDKThkfihyLgxYRmgxUewJCAHik5pBRowyj7Bkxf3wcvcs7xPoNXgsvge3MLzTj2HkDZraAWeKXSQ",
  "key3": "jPXUusL1MeZTLP2Mr3JXuxpBzt4gj3QD3Xe7N2Te3mytc8aVKTkKAuPamzDfPQgrtvVsz5SGDpN7at34v8x9Bfa",
  "key4": "5NNkUePwU9nqNBRJYpuqQuN2LwwDNTMs1UWpJFe7iXzRsawAcvPQTTF3tBJqqqQgqFHUCLJsBAdZJApqDoAC6kK5",
  "key5": "24BvRBAbbdnrDL6onTHLqQBgvBZNBALJ5rZPHZ8qauH4HUEZgR9SQ3BsKP82BF2fH6gGYx9nTrWzEk4VSVFX29FX",
  "key6": "td3hv3picyDVyQfPcAiKEzpsg8zyv1oxPfLsPmYNY6ZYWS9AeJunC6Hsos8Psth2ZMLYsT6vK4EFDVStUGWwF53",
  "key7": "4csn3CjQK9uPnUAmVvwGtxB1GuHWN4N8FFG2A3RETeEENRmysJTRR7tuqvnskPnBRXyojg3De6bpAyn8r56JG7HT",
  "key8": "5c2LSc25wPjZFtUxRn76ZD7XGnm5V94a8cSFwj4Z4bXtrYGXvurGhezjHcmjkg6dXKBRBJDgZ8bwdgY1j5riVBAs",
  "key9": "36Djk5kvyAHDAXuu3gy8Urr3JoTkJndJW5yVsGKWfHwEBt1RCrrev33AHWC1QVVT69zZpR2nc9oKUgWGMYCYMu8R",
  "key10": "2pwmnVbyayZasBzr1A4VYFw2cXfmZcSaXzG1iCzPvrZscqxbZ4voeTsur2XDiaGAZSjZFuw5HzzMWoNaHcDT3dR3",
  "key11": "3uF3krPphVkJ8o7v95BRTRfHWx4cimCcfPPSq3YPQXg7nYzoTD7MDTe97FgDW8mQmwfCJuipbbLnbTtULscpS34c",
  "key12": "3LGPzdYXJJitZcWs6WVe3NZcg4SVAFEpL59jta63y1vgaZE13DHqBu1JE8XrWsiMheZ6NSCXdE38EhpGh7bNDzJB",
  "key13": "cYA348QkhuiehDFsPtCnqNCHBYe8XYjXGJpq97H5VDKUWw4FF67tdT1bobPbwMAPsPz5PwjGppCaDLguixtP1wD",
  "key14": "4U7Y9JgcW7ehbshUURKGQgkQZYCKwRckFnDh5Hi8gKJk8F9g78ofEVEEtQPhXJynsoTiNGGpTw66qxFZgBYqqWNN",
  "key15": "3roHjFK6SU6Bh64Km5az9SNPEwMc27aaCZc4HDSxaLQ7VwFebjTGHLHNPVcjuYYGSCG7afeJDt2Q56B4ujWoMExL",
  "key16": "4cGygnjk2jHi7jsbrxkz38ATRwN1QJA2gF1x1ekFPFF9mCR7SRht4Bp63faB9McgmwDTv98dwfL7n4oj9h8GnNqR",
  "key17": "41mfor7Yu9z1sdGrJb7RhUtFVm81iAhc9wtq2bgkATcQZCSj2hhQtm1hDBGPjrbb9YpTEbDi7GBF11Yv357HNJxm",
  "key18": "2MD6NJ67Pm16sJPjkDeAKmK2Q6nUUyAZYAg86VWoEC9QZ74dyzVcSQovYe71rvnez1s3kuJxcJjY6WUQewQdFWiD",
  "key19": "3ZMe8waZofXvZbpnrjeKAWKKkVd7Q2VhooDNbDLxou5d2nkQFi4UteRTtsxK5Fahv6A5T4B1wgHAeiLhn2h4bDpB",
  "key20": "5c9nv4iBcwE2MjiPFt7vy3u83dvkR1gtACCCbL1WWEfcyRpFBtqVV7utQwVUoUf6pA8K6hGBEB5a8zEVN2SDA2Tp",
  "key21": "3J16c4pDmxRYCqbNZaAYBiEG5M7ehATTwEZNbaYcXTRPH2fV8T9ED4qN1bvzoHBM63XUs3UjmN6qxvGFVAqdxpEy",
  "key22": "46dSvrMDGLwKYn4fXn1UJCBYREAAn7dvzjeSUAFavfxQ3MZAN7mf1vazFu1WmddPt8QR8xCB9a6UicVEy1DirAKi",
  "key23": "52LKYQUjfqmhdkLhjbSbz4xNpnfrjMFQrH3zmsrWnyJiquQxKQfd7qhx9qtGs32f5BaB68VEsWtkd1Ri7qxgy9EU",
  "key24": "2TBFHYgtc7mWdkwnMKdLWCagsgHSrPDUxKF9iAWgXHdYBT3oEKBqMVQDb5FgfNFXunUonWPw4PRF94o8yycDXc1p",
  "key25": "37NwsN5hNN7DyVmums2v4sNVwWTnVuVmxqaRkKfefHYTF6Ra1ed7daq75RFZSJx1cCuPq2RFZFiyAEYDJZrJb9wy",
  "key26": "3wfUS4GfdfrMkKRoxTroSsJYmkdekrmY8Y6XHPHaNrvHiV6o9nsPYVdboxiE82PzvN57e953EAsP6nKbGUhm2nGM",
  "key27": "ooK7JkVdT9jMrzdBDPdjDeNeBW7ia2V6fSDzmwSNPdxihSRftaY7Xsdsa9SMkZC17c5u9vyWrrFw4VLFdZkFjAe"
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
