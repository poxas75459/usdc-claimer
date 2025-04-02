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
    "2o8Veo8m3EovLeN5MM2cV9NUaaYotxz8MHNd41A8mSrYnjcFyLG2Tw4GczJrBtxEJGgezHyLvhihLeQgWX44kGn4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pDxBKjCouzGbknuv4iHBec4HydH3BBQtaZa2woizcqWBeCokg82Yx5DoRqTexbnQsdcfzDKgNNSsTVDYrrwgKrs",
  "key1": "5ef9woQLbae8d4cehYX9x5JxEfmwNnDrJdTtjtE3jxqLPHtqNHVFB1UX1q3D9R6y2HihJFsvYd5w3GPKrLdeER8E",
  "key2": "HYdeKbmpbMpyAVwomkr3VxUKE2NwkjnzUXjz3j6radW95QxKkPXUU2qUzGGMTSHQAoVNbuKxDqAAeticxexXJf4",
  "key3": "3Eibn7SaCHsD562Muv4hDDNDw1MG6dzrbdUvrT5SMByh1ge1o1YDDwrFwuzhDJ3wqxapzdvEAdJfuWtNzPWr4j47",
  "key4": "3Bd18aJhvk3F5UssNqzPwDyeC2kCECB8ND6TPH2VYW5w5QAJdr82RScC8FQHFCuYirTAiGPPYbkaie7tfsEn8AD3",
  "key5": "5kDVgCDZUnMMwmJR4yN4vs6hfQsuaxwAioboytpUGNZtueJHVwj4HPmJirKd6DrapomVQDyPCSUDL9SrmqXCeJGP",
  "key6": "2fSpx1o5bK1CxjMwu5kpBSaniTaoXQXR6obeScxLH3ziHjTzgz7V8xWxXT9gEG1cV1HqhWTGGaUi9veqGDH9DLb7",
  "key7": "2kyPH8kdJ5WTzbmMSJRDo38H3ttenZ29GHBbjNACM5WCPNrytFNDeEMfGr1SbCQ752Q6VvYqfj3fCXgcpc1HhjxA",
  "key8": "3id35E1msjbdgrsSsjarBPQZrMUhg4pQAzQd1UJijCXtGAgmHWZSuhayiMVwVphahgrkBMcU83YH82HwBprUy2kG",
  "key9": "2HyewkoD3h3r7MckbrNB24MD1z5TcZEoT5cMD8YomSert9JT44Fh6n7RbTfT7fY83xDnkLLhV5eQrVp811wAWV7c",
  "key10": "3i8VPxocofLWcEswQZqzgodJ8NPHo4P9jxKSCxLDG7rpZVq4ht5qUiqNpNPpFPqYJXWydpntkhPfzKipU2UpUoqy",
  "key11": "2cCBJKm677iCyQ839eFSpBM22zzET43nnvtEe3cD5X5cHjXrmhodqCiDpZvMCxC77JzC2T4MqyZagMsUroWaQ7GC",
  "key12": "5nwSM3VWqHnseyV4ubLijVRGVdoHAaCsaxUiRuKB9xAitqPzDKQsMkrmtkzoomVSLX7Tham78pFfZxj658ynsfGa",
  "key13": "4X3hcoeQ7b41oNj68hgpf15VhbMQ55FNBFRSEfMcgxbKq4CWoPQbRCJy5cEDDYPjdrvEWzA9Zmwb9ZFwMk7LphnW",
  "key14": "4z9F3HBzUTyihKYr26ftvBmWPyJa278MbpKVSLgEooxf5XLUtC3xBfyYuBTbMg9AAENvTVnyZJTFPPm8qAKCFtNz",
  "key15": "DeQ77iD2qbgWEkCf2jvksG8pAAHSRZiqPpQwjtGopUCsb7nkzGeThmZS6w26Z7CrqhVwhAoUnuNAQ2icde66GR9",
  "key16": "28Unbb5oUBFxYAikdR4QxmYuxM7hPpqGqPkc9BvdwApvtnTF9HzGoaydenjmigDFPBEgSZbCTJm3V4F8pNFN7sx2",
  "key17": "DqYnA16nycBgi5HG1nSi4BvPLWqY8w6yPeCzRQfT7oxq7HJY753HpQYemKPMKztdBzh5EqonhNervQ63UiuZY63",
  "key18": "3QDim516CDPGpzugv2m4ET3VG7KJKravKrcDrXZ62ngU5dsLvWq6Dm8N7WQdFzCb3vq2w4QABD9B8MRZpBb3T7GB",
  "key19": "4rLJ2w5y4bV3vwFz6764qkKFYrBiJWTZTiyxutssh9y1Vq66HjigKedEZKCUBsuHup6ob4xhEPkfSWSwQ25uU2r6",
  "key20": "4hj6AwUbjtoMKMxk3z7HKio6aZ2gE1yBoQ2Vat9QWMfQkpVitvhsLwkc7nev8sRDxibvVkpruiRn64k2sopaWQrz",
  "key21": "3ZrHhPQMJ5zpo9YKP3pah7N4hdESgm3uM3U9f3YjERpw2FPnN7XkLEaPAdZdozxhmX4KAG15nR8mqcbovcXURTxt",
  "key22": "e5pQcoGSLWkddL8ZCWrceVBUdt7YPu29jFqdZELyU3WTXx4JLwQMgkMwGRfAjgNd6vjm1SqznR5zSx4JeYxLo5W",
  "key23": "2Uxz4hifUTcxLE7R31Nkswcq5jqR8VuEri1MYd68uZaSLTwokuVE6xpaKV4nCUUEQQQcX7vRqP5m5UJaR3D1xt5j",
  "key24": "2DXU3q3SLDT6BVEdPXQEad16JEQ6ExsDZYRK4nhKugqyh5MSzqBiyWVwKD2UbGFbmBXse1YaoA6KvMYsvAPZJbfh",
  "key25": "5CLjPwiusgM8V49HRAyHyv1ifB4ACzHRw6aHVqjSKJzTzDBD3kdsgscAmxLUNztUZZW9S4ewWX9nfr4dZxnvTHvS",
  "key26": "2YtqznKx4RkiiNYq95PnhDsSMETWK8w63UcSb1tUgvH6qQrJiRbaE5zrZ7kt4SMeWGk7vkH2pcFLnbmRz1FxAkBG",
  "key27": "cswpGt3btBV8ktLZfWbCUBDo88PCXMctE96ZGPHCsz7WUDCPMRc3dHa7cVtHkCzyE8Wg8EV1D9kjUT6zT7rFEXT",
  "key28": "ucyBD65hrGGUzZb9PqRwwqqMMXfg48P2Lf7FJzKzG5xWhrSrknWD1igVPP8GcJ6pjEX7rTxwA9WDCQzjzfnDLTP",
  "key29": "fCJxZ88GH8B9b5HspKtsPFq7UYgWsCz31AtdGGohc3dyPAv65orX9RhvQQqerHPDcPAwWuryWCWh4YNbLrzFJvp",
  "key30": "4Y2H4ot9sTAUwkzi7sxX1BdawfjFnYBUETtBaABpy2WTtB87qtvHQczRZN5pvbcb9kWT1fdNZbze7PPp5KEtaNiT",
  "key31": "38oDcUD2HBP71GLwuJvq6j5aLEsUhFNuLSuNLYf53YhcdzkVXuMHHEhJQ2nrStD3KAtXeQhJag5MPzCn6J1eC9XL",
  "key32": "523AXVP6cESCwB31jCfCYLeSCynES5XJRybf3EhgjBmsrFcfvpLkqgznF9HHTKFzFi3KcNtU5WgtfSfadR8n7zhK",
  "key33": "2jnaPPiAciwjYdTP73HTppi8aXgDR5MKVDMTA3oZvfzKoq86dmPpDBdkiRgAbLVp7uphQFkGKT9STFeGyY1fPRwk",
  "key34": "28rWV5csBfz7S8yFD5Gy9dM4SZopLmCqsc1NPCwC7rPWb5PfmWDjFKcGFHTjU8apnKPnA3BdgpMdD5bTFCNq2bfx"
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
