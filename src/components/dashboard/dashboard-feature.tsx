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
    "Z9pCAGyHJqGHBHEcwjmLWAxKqDhrPEbjFZReXcDZJfzQxyrsqHVHtyULjp5Spn8k9fLR1y3rrwHesf25WNP1chj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mg5TJG7bNAY9Q46FrJ6nj9CJ48Ewy31c2nXEWHYpNAwPbPkxThuKy9Yjkx1s8hXkSv3L9FEVE7mG8m6uysseKwh",
  "key1": "2w1LCBgUWZc8H3ZDnegFfruRT2NqjqGA7q4u9qVzS9KkwH1nTMj4dzg8xUf9favfjVFHiNPq1dNNoLmoFLAbBjYo",
  "key2": "FpK7CM4VBi48z62g9M2fUwTnzrdtkGEBwcKDm2DuSCacC8CCMeArrgLCqUoKfDRUTrgUzyj941jewEKvAKxaYAz",
  "key3": "2KoK9M2BDkuGhR8p48wrFsAoZ8RLNRcvrYztNCgWUdkDQLdPjTAHFDRCHKsCAH7fX3N9SoePnvPApSsw6XqXLfta",
  "key4": "5F8KFUTC4nbnC3tc8umXJVNFEAvfRNqhxNgKPhZQG4NPXZwLH6Q8r8yxrNNaLBmB3isreJfVBBD5X2oobuq5UyqC",
  "key5": "4MPtuAfLYdscmyunNGvsRpcm6mBtAjXUd5KK6Zo25NTpEyGonoMxb5Vj8LrN3Rh1LiErsE9pUHSeDsr4tnQhXxN1",
  "key6": "2LJsJw5jC6Th7TEQqSmDnB5dbobu7mFMQXGPtQxyjCFYcwwCMJrEtDkdsSz5FwrrCJNrPvuRktBUhwBgA8mQ9rYF",
  "key7": "3jLQNkPSWKQESYvce24RQD3ptXzkC7KX6qTeggfF9PegjCN1acQmv7kKJjJJaQhLog1hGiERfiNhxA21jFp92XKj",
  "key8": "4qhyT8kSJc8ovvpDhuJVsVkoPdqzP61rszNAaBshARnDrB9fdkvsCTvmfRaMWLRTCBaLwoQsvShnW2YN7NkPQoTq",
  "key9": "4KZNGz7BmhwzLcKQSzpf3KrmAEBB5cvc1GBj92TT78ExPEHp1LNjm4QPGz7HXwayEZmczJyGQabgF9NyhYs4R4pJ",
  "key10": "nAbVAatgxiskkgQ7yqZ78tufuQfyDjtnJ8wjDhCkRQDL6h9EsMbEeiNU3GtbFwsgRkkVEP5VwjFyixJQcAPJke8",
  "key11": "453Phqzxp8ErhGcjMv6zwkG26C9rUn42FoijC1wBLvs8XHSvT2Do1ukby2MgPypjDQUHEATzZ3j1XAsqS5xpt59r",
  "key12": "mpqeFMK4unFgeK5CcoLdvFz1wPzDYfijngwhM6GZrMyHWfV5csomd2C4BBA3N9cAwCu8UtM7FLxcQP1GYBAyyFR",
  "key13": "37TRZ6eTjVe2FWYZdrArGkwHE5FKnGDYArY7pGh64o2gVCKK7qkheTSoadiN14wsrJYbMNP176EFAK5JQtdLR8vU",
  "key14": "4222MjhoJtpGhBk9oW8VAwHGQsJSxHkTv2NMzM53fQiYcB2tv9XJ49cR9cZw8isLhVMB9iQvBSD1WQgg69wWCiM9",
  "key15": "4JNa4PSvE8Cd6eeHZe7SPKkyhLapjRiAiT8r8Dm5A2446PtoLAbLUEwuMX2aoCzTsBjQb2MjpBQDUYN7GgpSpVSv",
  "key16": "2DG1twhsSVB29Qu11pFwKJbfpzMYf3RdTVVQRorQxpjEAVGbZ2RfowkmyN1EQWo7MnjngKWzQHR3UJb5MXP1JXJ4",
  "key17": "5b1287x2mnQqefBSjFr6nXzu5uSUFATGgwcLt3A1HrAgt2W3TUH7ekbQ4P5SGRmmCMPDC611a7eSV6cjf7KxF7fm",
  "key18": "2TKjMkM1RAdwJJyFgbSxWrFzn2JPRXmzsNEeGmxEARBwpzDquZRp4PH29HWe7Mvf4xXRpyzpeNs9d5y77dbATxcE",
  "key19": "3vsjEDccvYBygnpTmF2V9MGxqfT6NNGoo13nKSvxSJtK3p9xq9HxLFPcnDn3DkpYgJg7Y67vCSjWkna1iS7CUs5P",
  "key20": "2D3XJjypW2QeB6otipwq1onjKWWy2p3sEdB8LiEW23gtm1cyN92Q6pMfHbqoggRR6Kyb3iDjHvJGp1NQpHw2KKbv",
  "key21": "Lqb95tgaZKmtfoPJPeVwSLwWdsWwwNQcB2qD4Jws1cnuPnYz3MpXz56bw3ZB7i3eWNDDbz8tUtnT4D8jRLrz2e3",
  "key22": "2BhwaRUYqTYLtz2Fawb8NnNPz5EaxPLF4MUTeqvxNZ85wGXKfPAzQRwhnyP1UR5pkQBnaY7kcwiqmAnc9BLY47j2",
  "key23": "q3CctbxqYqkqrLwLySLpd7MRzAkBFxUWoHKbNcXCUtNwzUDxhAtneqnkmAuqYWaJLeePdcDW1NFiPkxbjJKJRFP",
  "key24": "5NiAjrRZpw6W4xgiG4MVwm7UJSbHpCXci8Z9Xos15hrBeXxfFmsGeu5ndepXR7vfHjcokhXWfompzg9rRCVUefyN",
  "key25": "2rDDptKRJKxsTYVWCgNqqrA5NkykTP138czmYezXq8PKiJ84ESBc2Lx8eM8JB9bsFTxApzbnsVPC8cjdZVRAAhDX",
  "key26": "5kJpnrKbYGrZwGXNJbZ2SsFTyohm8HVswAgRtDg9RaRoaoaaXKPiEw9NipjRCdPeZW7aoYnHLmNdtcgSQ8JhgoR8",
  "key27": "2t3XKGaFLZkoRKH6NhQvQ16Yh9K4MNkpKr9SjxYoh7GWMJ3ysRd7GxaR9rLWQna6UAjL6iqSicUgFpguqUuK4rrg",
  "key28": "2QB1nYugyngtAQYjMKWQAJY5TBZDxjHL5XtsxFdd11XgbfNQiaggWuCjmaACrBTczkocHmDR2FiRNQMZVhw1sfGC",
  "key29": "2oECx5GR6tGSnaj6zBkLXrKEqqfH416r94RTi1n86kRAqnfPRbEvEqbt59nj8ziefWNHCNpY3F5EM3R2esmEeLGb",
  "key30": "k7ggdsHZ1u4YnZXTfyvbvJVsBU4m2VFJmb2bGHyFFZ3Lkj7WoEMDndVKhts2BvwuKWq2izFigZKum2piFxA8GFA",
  "key31": "5X9tm35MAUVapStXw6hgnChv1V5Us6ar5kgv8HL65t7vmLLVx866WTbGoYJ8LPp8km52cxmhqdnXG3YHZp1vjc6p",
  "key32": "3iDj8qjeJ8YFcm2c9SidMVxKsvE7m9vG13WCQA4vB7xrgEnw2so8qGcknPAKuD8gEBiXzz3uWohmpjzcmGwG95np",
  "key33": "4pNbg9r3g7Kv1npALpnUL5daJ3dxQNwjs7u7JhXVro7p9sSAgqH9PRTtWKec3Y9heBSHCw15kwpNzPdGeuXAvr85",
  "key34": "54xsTefgytG5wBtXc2ytJzsrvNxzrpgq9xFkhCKQJQiVFMQrsw7g2392HyMxCX35hBip8r4DG6KEw11JCNK6wtDF",
  "key35": "4xgRSkphqD2kBr8PZ9379FcvaZyFVZXfAWGuNgJ6UDnJZg9tyf5F7sUZiVXHP229DvtNehWarXQs9EH97umY7zaR",
  "key36": "4G8yTFKFtVhEBw6NrkBhBdNVpjUnDfeJmM3qDyMvmkDPvAgRWauPBin7Tgch2B9WbZ8cE8Ptwuh4AVGVnvetfZDf",
  "key37": "4Zg4HgSLKPjnDbMjKkYxPGcrhVpvCrEQkQxugbT8ntwSUmrHoUyqLs5o7o8vVhghy4BGArNrH6HesePR9qNafzmT",
  "key38": "4buAYfwXmAjrsC3k4siWmyXWYqCHCp1xjH5ut342xNzffNdRSXF4stAtWeARbb9rQBkjbFY8sqRB9iJcsCBSVXB3",
  "key39": "3cJ8TdrnxAeEToP1f9CM6PRLYC3MQLsdbFKvtayxoFp5gSD6Hir5te6WSbR4pGdoRkntc23yC2sp4Wm2Wbb1YDYD",
  "key40": "2PWusyyipvkeLXNLwiqW6GDJUfMmNViRySDryCNAUh7SAwiLuboQ7AdmZbVezw7c3JQUHkAUs655TX9K7VoAc5LF",
  "key41": "323S4bwyE1qZcupfiTTAT1TBFt4Ku6Qq1np5D9pqZerGf6aDZzihmSvSSDUA1nEunS7QaYum5xcM2qkWDdktwiNS",
  "key42": "4RNTA5Rk6MHCUf7JBGLi5vcfuM2HT3ST1gLak27T6yr6DTGhDZbiqKMtqykWZNMaWGamkvypsM1R2cDwsWkr8A66",
  "key43": "2x3UcaY44dxKYSN3th7DMTSAJ9bbnRSk7AhvcstfdZX4EFf5bGJmBVU7QEMtcoTdUdjM2w6tsQcpv1M795ztPgWP"
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
