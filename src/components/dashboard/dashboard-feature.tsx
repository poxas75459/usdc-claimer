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
    "3iqjpRJKgsTb8GHXGYkE4oxMda4AXrVLj83VwqLNq38c8ocf11ZJroqhGf7F5Gjm66nXruiFxXgLnT2qgJ8bow2W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67ZXCxLv3hCK7gHqDHW4o92LijVFrLEtBaAN6FD4MGGN2GPhFbAm8ume39sYrnWXqGmhoSzjgS5sKHbtTas57WHz",
  "key1": "2xsU9N5bbRgRFtYRsHzSaegnrDyp1QRMD2Gri6oWSfGBNLoS4yXgBbrZwAVSo8BKGypMdumuYTCkjKJd4iHv3wa5",
  "key2": "2MCntATEzcznAzJDaDWxJ7wVqyZDCfXEQ2aafEsR2fNqPAhbvkX1iSD13ZDCCzccFnyUeT9wqYg18gyhwCUD3jQm",
  "key3": "4KJGCJGtAzkbtVEwkRi65KKorQhZzNcWxyzU6kJVZweawWaQhsiuoMmKCaUf6gf3e94Vewc6xjSdsSuYdnML3dfv",
  "key4": "4NcGfpPEVrV4gJge2daZL95du7siKk4SBCVb8Vpdw48zWHrWmoDbxRsqUQZhCSCQXm1mPo8EZvw7djTDn3HX8ENv",
  "key5": "3o6gdECV58gJDmGvZg6JyKbE11kfb9WTNVWtdLQ4DyiY2MD1TYN5EfCTcRRg3E6sCECUsuSpVESRpi9aeVJNdQ8e",
  "key6": "NNDn97dYDECbYvVgV44e7U79SwyjXZNtcjGNto2e1atTL78gdGWRKXUf8K42DyzU5vbNTzchSYoNk2XFrRKmKVq",
  "key7": "5xXLvznpv7h58WsyhBuqASt6CvzcxQjoqjJUbgv6EVFcEWbtAE4P4knK4GPpHsYj1pj4ej82Vq7Qhtfi1tuogWjf",
  "key8": "5cpMxgC8JSTAo2dKJAhQofaWFaJDsHcTg3aj8nE9ZpefXox8JqNtdHc8DrLwjk33QayHF42a3wRZreD2kmXAzAEG",
  "key9": "3h6Zp2p7gFEP8dr4caqRkNdHG9RGwE2ztWaPeHQL6dHuQ7fkHeDd1GJAYDt6JnTAZVMPzZpdfXxbH8g5GHoNHVH3",
  "key10": "2TBGkNT6wcT918twbDhuB2e1bo2su7q6GeYgPFfBpqZ2fCkxkhFukBzqFrqLQvPEgsW48223343AuWCD7tfwHZUW",
  "key11": "5F8cG2d4iwPBUKX2LTPAiEZzgmjsAy6g19FckD6f6hqzXwntjeGCnZi6NA4L6fgVmU4C8A65TUuNCybKxdsp2LmE",
  "key12": "4ZbqyqLHRNDinUuMRGDmWkGuE4ALEfMqkiiMcPNb2RvwqfribvP8yUnwEEfj93834AdFgS1aA9oxgBbrR4r244vE",
  "key13": "caNgcLPo1hC6PPuY5h2KpBwwE8qMFx72PGqhSxLkrTVugcm7dFoae8veky6z6K9UJ3DG2Hj8XX4BHSzDmJoLPPG",
  "key14": "3hQXefJ9UzY9841oxYFucm3NvpyuEuMdMKR6hTKmktt7WoCqErdgTRPp2EPFJLz1DYvtVhkoeNXvYjNeXsButUQx",
  "key15": "3FkgEprGKTchcybJ78RUnRTWykwQcvjYLZaj7StA8wBKF9AX23LGxZopNEALxCAYMWttXDxRnkbJqpSZiGVdm93y",
  "key16": "2867xM3MuGiL4uF12DK9pW7Mc6tGYFJ13pXzWzYjXoXLD6h2kCkXk32biLyEwCUnjoPNfcvahMrS4bMAN5kZQzqm",
  "key17": "3AsUcQWSVP1WxTszJLXpP2uCHaiBrmirbbJdG6RXCyoDL6QYxUrr6K37czxJq1DDu6tCPNbWbpcFwVHynn2S4zjx",
  "key18": "3iZcdTjo7zE5PwpB1BAXVrkNBusz4BdaK56r6GFpJ3oF5Z2L22N83UWFBqWbmCve41sUVGCpjtkvx1UiJnbtB4GT",
  "key19": "2f2AiUeeZQibjLnTiqG4e2V7o9GqjF5Tddci31dxuP643GosDuwdzCBd2EA5dZS41DttzJoqYjoJjaeru83VYygd",
  "key20": "2nmT12DS28mwMQsNmvubReANwtdYK3jphWKEtxD8JeB9M8ZfDrX4cP3QytacgMkbKYfcZcXzPEjcY3AzD32YaWqS",
  "key21": "5DfFAHkni3hbfsLa86wB6MBiokJuX1wjpKPw4tY7bEiqUbBhd56Q4hBY2q4ymACRCB5VzxTnuHypeV92vtAkuEqe",
  "key22": "4UT39MzaFF1p32A7TtrC3DHYpxWdWaTDx3QVnZySthLeXe4teabaeWbpVZLjHm5q89tMNHLe6FwE2EUJbLEKcq6E",
  "key23": "4fPW818vBdyAC3unvCd5WwwTMKMJWvg5E3WXJvErepoN1c9mgPuAzhJtHiv3TxGrcHqQeyEUpUjEgSXKC6cZEgWz",
  "key24": "k8791h9DQSh7Lycb5LnwVGWhXjL8MvFeaNuBRN8zzhVDzQ92vTcWpHuSzf1D6HL8VDeg7pqSyoLqT69c7ffTy5v",
  "key25": "3PrvENQk8kkgALFL6hSET5H12uVd3jeeu1ds5QmHouKYCSrSXuKFk9N44ujsKGepaEUcDVdoBFCzKTwyyB7bRh8o",
  "key26": "5fcfW54gYG9wLsYBJMam8ugERrd1jzLqDoKaVqvspZEsU8GxB5EwRAWBgGc8reSJK6hbtaKcRw64kHRhZ3Qimgij",
  "key27": "38PJxqQerALGWoWNYtbMF9RDCJHtmACF1basVsujSZS8RKbHayUcv71yiAn9eF7CEH6fDnuz1PiZmfZYqmLR7vbC"
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
