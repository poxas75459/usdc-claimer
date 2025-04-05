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
    "kHznWBT31RbHzDDZREGPzzW5hK6hfsx1a516yakHmSWafq4Z836G5RpJCmjvwTbfbZhBHrsfxu1BLW7cFqQSaUD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P4ruTvwc3Hw6ynbuPjAugeG1TzLHXAuz2HLtzHzxuyMqDizuKetDLcpGzvRsU1fPNrNXrHqfrsh2dfME5r1Zmhm",
  "key1": "5jkmxWW2Q559B1Av78SxyNXQC5p9zEGNqSK548ZtbRgu9NWbyp7WsQcp4N8kVgJxHymMa8JJ8HFE19TnQPs4625m",
  "key2": "45chiAAfySPYfbj2Mm3SHqdNM6Mwo3U4RkZLiAowV9dYhmjoFxKG8Dh2MPb4g3HZ1ShHaDWbsKcXVKwgqo9qGPR9",
  "key3": "3kmfJa344taZRM6b36kPRpZd36TiRejWSiys9eQTnRdmmQ8ZoYH5w4Pt18iHHNfXgr23VMBznKNxWHw82T65rHLN",
  "key4": "Dnodu3p2ikifmuth7LZoNevnTQbPJEVk7omSbtvMnC3vaPPDS3gj6WzgXVRB2trpTCjpRFowrnviR2SZYLcLVAM",
  "key5": "67inZf7Y2ygUFVeRbyE5bCRJUzdrNqF3yahiegwtAG6qAhNYJM3MErQGASxku9cF42S2cYteRErrt3Nvt6hMbgcL",
  "key6": "4zZMtdf9g17cfmjBMFLtbz2E3M5BwfszPGo4ynbfk7N818sCt1EEs8CPHHARtLEK8HpaLBSVsDxmTsMqVkBw6iet",
  "key7": "3zgHcaU3apUXAkvBqfB3iPdaethm7ZHnmfKZeJYF1jPyXvxcyRYNjcRbgwbZ6UHgAMd5TfmvzR79rw9ywKCeGppd",
  "key8": "47u4t2EtGPe5LagRNE6JM7v4Kd3JTCxxaBKcX11V8QCyXJ3MkFQtdQChxLkedEeditHcBmhJBqzuMFfrQb3k9WBT",
  "key9": "5gqG7Q8ZPsambDjUdBGph4kyy8iAKK2ySDcMJbvHz4ENCrvgvtqabSgkXNP6EYCKhVBnETxgeAxXJX4xDCWnAjbz",
  "key10": "5DUStmh8yCHLFK1pVctTmqstLHU7mjdnGqSZRdAC2QeLZ1v7fmu1K3pt67vX6cC2rkiSbwSgWjsxjKNdJWNfp3TJ",
  "key11": "3948CNiyxiUqMXyouPvTbKUzcjJ1p3E8aTsW1nQHKoViWi6ynxJAZb8k8FDa5tLNR9RH89yu7i49JqPDrBAYFE2H",
  "key12": "2hS5g1rxYjDi5aivXzvcC68Pc6PHgnujtdLRjiJdfFjSkykqNuqDPBGMQptgWPoBg3fQi3HSJRGynNir8E1DBFPS",
  "key13": "2vfnp4Mx2DfSgpxr8bx9xSL2hqajZxYx6Rymz26Amr2BhCGShE8rbQcmHqFdsqqrqsCNPEnXE4B2Sq7vP8jJG7P4",
  "key14": "3KXCY8mPB8ea1RhRTDQCW2R5BwDUPPGnnCSM9nL1KMV5ej35ZWZvznrJMmW9L42GJaPvW6i9SPCbwcmQtvVj9RdZ",
  "key15": "5Gfw62ecYfrfJyEM4CcXAUqLtyAVQacGSeHxpHFuENzFA23JvRMzBT5e1VUAou8mCDNa3xqoG9Yd8SCRh3UDypt",
  "key16": "5rMgMkKzoSbttaS8o86U8xBsDDKMw3jqYimGD8Gndewu1fUgwR7RPmKRq2TtsuXx7mHbZkCPfbCwoBjS15P1w5fP",
  "key17": "3FLxvKpcePFm2SuEpoJwvTwn6fCpjDQTP9L9stAzBdvUwkpbsRionSEnkFMaqwsdL6vBCVmGExEi3ydjpnQz78St",
  "key18": "5GcCXXbJ663Dq2f6jjFDNBZmtveC7shaEjuaWPPhxDYBctqTEkiu9bDpsY5TGYRGXnCX1h4D9cot4BYN5QumzCbr",
  "key19": "5JNoVuhkT3mvbDRpz4hbXqfG7DByDzLP5ZvVreA9wzAuL6qx3fdqHKJfgDTxyyv6JXSVEvmTHZUHdULFkpN3SPtj",
  "key20": "1C45MMX7UHs8J5SUHFaWpN7vzQmEM3oVk6K8xvwApNq4JhiA5wdCGBQgCThKFAfSZsCGFVuwoHAj8vtWzmWmZ9B",
  "key21": "ae3UpodQXxgdewYKsb19Y6xn2jBuW3ZPi9myPLEgXyGNYiZbBETwiKw9QDvgtDZNRrYgomUGQtxuAaz9aXcoGsw",
  "key22": "y6dbJYNtdivuDN5No4svkz8Ysmc5qgfXu449QB98GjRVndTCPDoyQjNBG2P5uPcDP3F83CEKQtig18A7jxM8xDB",
  "key23": "33EvRbGEW1yQsrikBR5nSTEc1aeoAeTKigYYwi3SVPmmKPHAvQvY5Rk75b9FKZeCvEqXSYbw5nhhLhZ9QpJttoG",
  "key24": "4hAd3khaWbgbc5KHo7kNv4o7fELuofiyu8PCvnNrRsNsHK4UdNws4WTPuujJXzu6Cas1Wxr8jYw8U5exdggDQDyy",
  "key25": "5kWAT7LBPJqw4aWYNdmXYWvEMNUaqXukZr8tSKkr5BZZdvo2o6xatuUziqPZbmyftedG6hieQeC4t1sGdzt4qynh",
  "key26": "62vxEBwozQ8WeJPdzLZqkmXCBYNt6efrnfr1nyApexBYkbRSuHA8vSt8Kx2dQv37cfgm8wenegJgv1NtNhoWPd3j",
  "key27": "4BqEHgCV8zQyByhUBFpJxtU5AjxLBBVezaNkXotDQSg3wNvamchjzZ45t2KSAkk2vHG623AmiX2cUExo25UmAFyP",
  "key28": "3UAjikWw2tdWhrT6B7FSaN3oBr2wGZeCyr76G3Q8EoD7hkRBWbUBz7DNgYxXwWZYe5ao9XpSzC9CNFhfRiQo9YJp",
  "key29": "5FpqMAE3zWDQhzfsEh1mc1EHD4jWZV2foqsrQ9DShmCNkhNKD2N3Ahbfp1wkzP7MKQ7LNsTLGD84i4havYGfHQiz",
  "key30": "53BCWSjiUECSWe4fQWHJKDquviXvHJ9yFGY1zmcVYuaurjJf23yXsb8BZRnm8mbj8nz8KcKFQiHNwCdMhPo8mv7B",
  "key31": "2fQDNwRMB4UHhb7ss7u67gmfxNtHq6sJvuwFHEDDJndKrH8vX2BU4aBtEevKg5VdV7meHvLB6czDHHqGqcChXpBV",
  "key32": "5FLhb8xLQEHMse78BqctgFdfRJxu2N3cWtf1jBd4AhAbSPVsNrkAakCjaLApTMi71DvHkGMVMNdqRTNLjvgeKW8u",
  "key33": "3tyUaVANzuiuJqgShtg2tWKn45jPdeegBoqHMPWh1u2RT8NZFdYLmJpt9PnKn9pcJfCXB4YzhkmKhR5eQEjnm7GH",
  "key34": "3ykJ3pufZLC7BRXiADRCGJjrtU563ngB5tpBMpQ2WLxbdFS9R4ffA1JrDEz7XdoB9KDNt72j3VgkG9oC5j5VQMa8",
  "key35": "5aay6sLdhNdGvd8ZwCNnLjqR8etpzUnL8Y7abuxiFGuwbqjxvkgE3kKgXA77tZyUwvwJbuyqxEt9Sj8zZkQEKfX8",
  "key36": "jfyhbFQAsRPEHMUdNeMrCnTFCm8BzrCoEPePh8HaNyD1rGPZX99YT3rMU64pQtUpS7Mq1VvzEMEUhg6zCvydazD",
  "key37": "2xcZiLdVuvMCpSmJQjG9k4XFiTfMkuZnFaYa7BfRBmnUPu2H6g3pqXGZH9hUFQuBgv9kov2unHaGGjGcGSznnuQD",
  "key38": "388siWPvi9tfexteNehZXpn4EZrdrSbc3szRBU6eVqrDZ2Yg2jZXiAAQBRpbdc9JRw2eNbx5n6J7sv3nNj4obkXE",
  "key39": "4Lin41ucThKfGuJv44tKfj4fzv1ZBxtPuUuEFFmzZb9CbqmAsY54R8R54XM8fYtMbZH7DQ4bLcb92zQjoDjeZaVU",
  "key40": "3Qh2qSVwTJWs4moWjCvk4LV3LUxogonkGFHWQiyqVWX8aXTYcgTQjEQdHhbaKxH7kjRyve14pGW5KqtEoPttWbNk",
  "key41": "3MeQPAiR4ybJjLPjpUjT5GnUs32qErxWGMLpyBdFVXtyHYLDzLhx79DNE5aXGJKAK1mLd2S1Wx1dnw4VaDJY5UB3",
  "key42": "588R8VRduw1sdRYvq9c9ZbnHBbq6o9XSvaiwALPj3AJreBUThAmLbZjrJtxpYxZzc1y52J1HbF8KVKNjsgPBVEBq",
  "key43": "5EwqxXECzZEHBfHBqiDQfns21pfP1sXcneduvVe8YNDXXMRq2qRhz8GUjzpFFXBdR3E19LG19pqjNtYZwfn3u3do",
  "key44": "xsuW8bScFpSFoEGaoAkEu742Lvwutj8FHxwwK12E2U791QjiiJihgijxhdZkCf7gqyqRZxStcFsH5vXCSPbGcdD",
  "key45": "5ANJw3CwJA4m7XGwsw2KdsVVfXSuqyYfyDPuk8CvomGgc4xpHPWjMZzfzYH1s24seiU9DaCMXsis5XgRehgPfeAT"
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
