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
    "dMxsEyne9XMFTZ8ngJpogR5iL9uZ6A1622dnR6YKE7XS7NKGQc1T38tWKDEGQHgg6xXRgUBHa1zeDaXof6NXWuJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uirqnv7fWvByGpxrEEzdN83yWRAyJ31erdEq2KWbaF8wsbTUwdPp6AhuDQXhAj4rKg2dbBtDp6Hbg6T1NM9cgPf",
  "key1": "fsqbrQznghHt8Ft4WWzDT7XX298VM9GKpaF9e5CoyC4sUrzxiJ8juF7xJJdw3etppi8pgycKUTq1y2C51pHxy2o",
  "key2": "4W9q5nVbTs1X1pFadjtpxt8M41V4nWkKEcDZMDXpBE2T6JuMBagfrT4WsUkVNqqhbV2rfDLttHG52Pr7U2ps4VQn",
  "key3": "52EULHC79XrYPhxbd4HGWMRno7RJQLezWYZTun4Kmz7Z4g1j36vTqfZdHjCLQHFgomMsbAEWHdWFFZq7jpUBtnkB",
  "key4": "65gRLHHX1icx1N6xwCgEHFRcbMK1XN5TpLWBKtygoDBMguMJMSACGdvFxPYb1MR7SpPV1oQt7RMKAEsQs6RTCKdx",
  "key5": "aDcAvNyrdjD3Gte5rmdUzkinzi12feFcasCw5YGwuFfVz82w4V8jMpZa1ErKKpT934gQXfCyV99UHeyz6yPSZm9",
  "key6": "4MmqhKczLkCSckuAENg4meFfTnU1yh7vvev53nsuBATxrMJcosT1DNHGHS75ZsAJL8ZuHMJuNCkRTzXA87r4eBs8",
  "key7": "264d9rCp1xGpkRuotGqmvRtRoZq9aDp82YmPPaoasq4MEi9F3LrBacCKs95cQFZMuZ7yZ7vZcumK3fy8RnTqEpG5",
  "key8": "xReZRcM7RqiAJvr2RnP9XCz4BxsccUTS7snwbGnUaBKmz7pgNr94bwfG3LW23dNtwPkJy7pNUqtKbD5zL5g4R1i",
  "key9": "3DcV85K2dhgtrXwWXxnxy6gRfzTjU38AqtVwrQanshQgfXspfMuishPSKbo6vQmWccLyBHJyRWs5kLSmYjaKZ1N7",
  "key10": "jQb4VRguMjxkkDPC3aqrekEPYPRrzn57sJE6xDj8RZGVpcvRMaQbohQKCXHrTJtWvCKbimQDTsb5hpZPAYhG1dU",
  "key11": "4LftWPVgEQF4sGPg8ntcikGR81jkQs6b1GtnveQJXxJYK7NZUgMvuK1LScAny5xfWNtHV3aZQvP7Pev74t4zS5ya",
  "key12": "3zjXvS63e3vesJ7LM863sBwSjtZPotCKZvF7Y6jhr4jPEG4ceJobkp5QHd5Sjb9qbm5ivNFQNSeyf8qEnSdUKbFB",
  "key13": "3FeQ4rt1aH1pXAKYVstFr52G2a7MMYPX2nuvaMwemeBMLKzviAGEHvkaFeP1mnRzzQiTuD1ZxffbWSDt8f8eq7bq",
  "key14": "4ysJSiC86fR3LCm2UsstSPMnYTXx4DZcRyfHqPUKjsu188QYtgRrbGh956LjPH4j9jiVWAb6QHjJzt8q1mipsmX2",
  "key15": "4Dm8C4vENaBfSCmfvTXgmngWvz8q6GUY9qu77yF3szNqtaHvLfkYgMEvhRZdJ5ARf9de6yJpeP972vEJtpo2ApNq",
  "key16": "xWb32mTG4jNDXPH8wJxvMcX1cob5Dq6mhYJnpv9xxfZHAymtY69T7mgqgpff3rvn9pDnAEpuM2hyeHW7mj3DJGW",
  "key17": "r4RPnu3PejDzCBsagKNsbQZuxUfAGufsRusoTWb9N2xYywpKVdRnK3iUGRog3reVErxChb2iAUxyWH8vLjbW2B2",
  "key18": "5tScpUdEJY4v8UnTAR6vMXTnmmiGGXyH79c7nJK2jEDDNnkh5aReY7uJMNqdVtX36CUsQfTA6ScWpvK4zKoc7qip",
  "key19": "4F2K6x8rPTBa2DoMZRMEhLH1bTkSo3SkUdsXstdkDrywAWowi8QcFQcakN7u5CAVbcAMD9Dxz1B12BnydfpFaSwR",
  "key20": "5SAEv1KHp8jVHby4BCHXcNTfQnLGc1X8yDKTWQQpaY3UcSybTDjaLX6da66zb4prX1ReZSYvaHuymTdtdTy2Dh2L",
  "key21": "4pujFPihU8o8uTpmb196QDTEeDABr9QBqQnM6faqQPcR56nMtvZ7wxK5TVPqiWMwwmyureBUUr44Mvmv8hFCUJqW",
  "key22": "4uSDRqgMmq35v5X4ntyryPALDbKc9mBqtussBqUx9Vv6HmcPfP8b4G2KETH1KfwQDswyHbWih9dsDDH5tYGy8D6D",
  "key23": "2tdQWWQJT91bYuFo5D5mbWogoMPTQvzHT54ts8eRWy9nW4ThB5TUBFrxSy2M7N11ECdPAhkbyLYy9qPy7cLdCvdm",
  "key24": "5f7uGfmR5nuboaNvPmiLiWbmfJ8PdFJwHsML3oWLWqbmCujrVmdBRpSi73YTozXszDZGCd8sYEAVoi3vdyhifPhm",
  "key25": "66idDDHPxLueKugh2HhCKXX61LfokMKnqCqz6WTXM3puR31VTB42yuQXPLbqwcgAEW8vFyCzhdzR4grF162mSRPt",
  "key26": "4CkFMoKSeebKk8Zh3L6jjF8XPMuPPqVnmQjBpfb8NKcesfNY1uGzWdvzZ1GRJmxUtZMsXkGJNSKXp8Sfqd1QuMET",
  "key27": "SBEgiGEsJmPxoCKV1imwGD49J35XoC7t8Jfy749CGPxgf1TcGquQ3cHheYMgf8QXbAfwh9vmjyHseQohrF8axn3",
  "key28": "5fDYWKKxmb8yQA1mHq3vK9eqsrHxivqe9bRCh5fkTsRU2SqaFzEGsg5zqPw2AE2TPFHPJ31Nk72bQxc3EBvKu6sg",
  "key29": "No5HgjX9EUq2H7t7RU4aEN7GjxWntjLXTMRLsE8MrCLnDK9uTSuCAakb2gm6otKa7YjbTszdzHBw6tbVn7mR6vi",
  "key30": "61RbhYi1uuMpWrE6sMH3acJapxzZMwYGJs2uAhbxq7JcvB4rtxU1aqSokRmYnX61NwNyDEi7vvf9eJLw3VkrDQ1B"
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
