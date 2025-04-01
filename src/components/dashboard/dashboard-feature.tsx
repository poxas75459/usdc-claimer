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
    "2rvDdPkYhQN8Cfj4qL1QSX6S57YVFhUNM4JJmkG1zSrGY3PFCrM9XgRwznB8hxZHTA3db5P6TLzepU1KgsrLAWU7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43zAa64Jz7nh1ne97VwZCJG4ni1Y2RLbc6qx3b8WUWJoaZC5k1fuFUqVhUqreAUFDXLMhbUn4qtad9TPYrFJDa97",
  "key1": "5U3UiLopuSw5WmobiDCPCz4Pf9gDvjNAjDAKjHHoZ1GBALNwkZ2trMosJ2KbMK4uDqg4P5c9pJyPpHXvpTf3WoF",
  "key2": "5c5Gmn1stegsxqUBfNQCKDmz7QEvEjxJPGiVweLFLBeMyTEJAefyghe4QvHHMQ1zUyWL9n9i96sgi4D2JD1RVBkh",
  "key3": "3f9nEn6qobKmd6Qh4rtAUQSgPeFbuTSuBzgK63enEAwKo7VNoCqGGSoduB4y8jyh4FjrzYfJLfx1TSRpdAiMq5B7",
  "key4": "3Xp1cxyhZ4ebvqMcgrL1CTpKABc3PGqJYEwsh74gq9zpEJCbV6TrYoA4hbzSBrE1mwK43uUbnVRFBXxJ9swwFKug",
  "key5": "61yEtq2jxcY45TKtR8y9szdq42PWVDxME2FkDtrM5inZXtCZ4yRuhRCrWP9ZUZ7hr5tYgmFWonfw4CjCe2BVsUZH",
  "key6": "uSWXxpHvkZt3R5f9bJQ8F7ceQHJvzS3JC2hKLMPikGevzqeaD435kT2dmCSqGzPtYo9Xiwxc1Ke544U2y6dZEJC",
  "key7": "2mTzpJ8z1ZWYDGdisY6Vk83F6yWrhoFCuFQbczKem4DJMdM9exTWfxtxmqbdBbfxR8eFFPJUudk5dGAmJ97Q4Q5z",
  "key8": "2wCiZzZgf9TUd59d1SmnfDGNs7hmvqg6Pna167Jp6vHgd77JmQCKX5XpiwRDPetGQzW8bFJKAivuz9D4qkAzk31K",
  "key9": "ocpc6SFXR2Bg6Cq1EyP1XAQJ3GH2FJxhhnbGPPXhNyLFZ52vhiQzpxwoA9pNZ79RLaNkN81jHu4oAYtDWB33BPG",
  "key10": "4j2mqGPykWSGCorgN3ennLcMr5rzWaRjzq3WqmRnkWk1rWTYA94BD3u9uH3FUzm15vtE4JEaoB5DpDadqNuD3ftL",
  "key11": "62FinqrrzxsKPN3T4gjExatYihAqXkQBHeUUyVJWWcKxKnGfLdPqxNTCV7TmgGhME4Zd5QHfpHPH8aDNZPUx3HVU",
  "key12": "23kP6SUChfvh8ZyS8PmN8bUuyUhxELYnHu8sXkrT4sJW3a4ptAUZaJdHccn3kM3xLrdeF67TCzg7Sg5it9nfcq8f",
  "key13": "3nY2qYk5fm4sdBNpR8Q63SwbtC98B7sevqPnZojDFZUgvQT6kYYoVdotmqFAZakn9XY7RQBr5Nv7DJEAsiPf9WKu",
  "key14": "3VgX5qgVihpkgbWKqo1ygmzPv49AoRPHY3A1KviNQjoxNsqVTzt3vij5kAek8haXDTmXAyeCVFMGieDRMdRHMAwZ",
  "key15": "4YYFaa3aoRJ15rbGGwywgBPCRBknDmcnXzsc2fHYAkpnJNk6NhbUWitE5czf78q1RLbs6cLGDkdjrpp2rittxMwY",
  "key16": "29mCmYdAu6fRev28rRuiHHiEGdLC3Ej8FjzuPvWgLHY9ecYWPM6f4tiCCuHRhr4T8GmXt32EodvzZnG1b2BUbdAT",
  "key17": "3ew4K1XckgbAUaVZvToFM3TYxzELZuTxHi8XVR4vw7aVpegCHTczJ677iNKoSg232H9oA4yRNRW1JksocFWxRkWS",
  "key18": "4NJ8LzrcLiRMzeBYgS7USJBZPXsgXU74cw2SoKAyXM9ZaDQMbT2rJP4tBFWso5d2xpbSa5gyC2pEwx67CEpTAPtQ",
  "key19": "518W1Z7iB3zkU2YeXx5KQ3q2d4X1EAocuAxRBkaEB8T3WHCenm7FjxkL1wtbovhyZMxdk6gKz6d5NkV3NPT1N9fy",
  "key20": "631TEpjabufcgxWLh951ZB1eWdf7CAZxcDcyjxuumJ6jxvvAk5TyKBsgUAPnTg12efm4zLx5vTEN9Y6gtVmMkME2",
  "key21": "S2uxqqzkSRbukTb2DKvSeT4NaZ1tJ6iSgytUg8uZEnQd89j2vbg99CfewTTexbRyafTUqQBCrtwYuVuFjZrmkeQ",
  "key22": "39kifhVwFjTaPDfUtXwoTocAdkVr2ayUe7QscQFPyfufbZoMA7YpvQZV736nufwmYWVN2VJn7yXno9yBwAz2Ha3y",
  "key23": "4PPwSxk367Yww9Uv87s5JRQU6KbjZNFa64VYfWNYEsXy3ZS5uVG3qZmeMxX7rbL7rXrEA7dftGHgyWeAAqrn65U7",
  "key24": "4BVKofnGbx1MEEXD2LAisaJuvhedbbZ6Xgjv2WukpXfQCj5qu5TMRax5yZoMBUS8oApRQaCXMfRrrDT7CaXFzBbU",
  "key25": "3fPS1dXw9eUY2Anr1iitbDqUM2KXUtqkV8Dz5mQj9VzEzJYKFbkp1Sv1jcHwQkGLwArtyaLBTpE7gxghMFyK8P3v",
  "key26": "5MLNkpxCT2BMcAXY7UaEeSeCt6yxqLQra87EER4rdehsf7DHRweF2v71Ud6yj4Apxavd7cuye8jAYmrHWi6wBvM2",
  "key27": "5Z6R6ytpY128Poowhe4VkjovFucwHURjSyMoPNiqQVeQHDZF3gXFux5B461BaGnF8X93S5SNLCdgm4RC8KoLhDNx",
  "key28": "5cj5xHzfaxRWs2S9BB9ua3ZAs1F5Xt9qQiko1vrUtUvzHy9AGpBHWksi6ReQhocyR2htVDqi7P6qAe3yvqwWZ3rd",
  "key29": "464jJPmSyog2o8X9Se7EwGa6KW6LBERjG9nhjHohBEfAzoKE6MbPJVGwgRGmproHr5gw4Mryt6znKhEqZ1oUtKkS",
  "key30": "VXYMnLLipAQbCj4M3AXTAzniT9dukVpdgU6RuT9Lk8bVCvMGB4GpEEFUDugNAQa7R7yr3rQNrWdQh86rqGmdJ7E",
  "key31": "SMxYUsQPMpFG26Se67vNzMeYJNvCHJiUm2uFPA9hfNYUDSFxhSVYZgbJ5GfMvBL9MABLzd2mQrKMixaFTY1WuWv",
  "key32": "2eDsKu8KtzdnGcPw2zkn2wfC6qjJ8epuSzKGwfa6iTTg7GrXQfxKC7bBCqWosoZXhfGcaJEidReG7KzBaUzBjeGD",
  "key33": "VfJvFGJmS1cRA75SmkB349otckDdZAtDgSahUHUd5gxNiadiJQn4Xzs9LBZ97Lgts3TkiHNEu8J7rhZyrkaoRVL"
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
