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
    "eVMBcxwFKANXiwY2Qcm94KY2jaNehmr2onwF8riGZivDvEcwzcVib1EqqXMptCeuM9xCFF5939zDiM1iQCJbw2G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k2Wbi5h2mhuA1AoA963B93npShzFJgvsxMw7My8WU1G4QFHq3R8L55rvKiK9foBwk3veWzVshSeQgZ6GDbmRDSh",
  "key1": "4iMmVmJWqw4dvHYUMdDiSZJJLbYxLrbuVJ67KgkL9MsTndmtVifvvHURwtN8rrfEtKtJbKzHnCwrAq5QwPTUYGUc",
  "key2": "4yDE5Y3XPtrV3QCqHMGXMPTvPxqs6ddGU2RQ4ev3WQCZx8SXZwEFv12Wo5HvNF6tdkkPxfJ4ST8RqtH29kmRT7LE",
  "key3": "4MQvyKx1ByjpGdmLR5ZHooxhqYTZeEFc2xWJg5GE1r6dAk8NAuT5aMwonNnyHc8YkRtUKS9ppbRp6e43DX6v2RXJ",
  "key4": "5d7bAKMpFLHudxGydhfE5S5QfMyRKKzohE85D7EfwRY2WkvJi9WmbFHw2pDpik9G3iJEuGqm1gr6md5ftLjXRwRG",
  "key5": "3gxXz9gjR432dPUD9Yw7dkXekzGChgMQCajHQSvXZ7hTz4n4FxnNpTUc67pX8i4UNdTTQke5Mtc6Nb67xKYuwwJk",
  "key6": "3Xo6Gfxfet9HGWwC3LhT6UvJ9F9tDqaQgiNego9nifcqdApEd8nrBGezV3R6vdtoj3m9bzVswc7d2wWDJzHxXE3C",
  "key7": "655cZHwZxseeHCgf2vcGztRHBz27pq27z6HPCGcKKvQS27aniUv1C7A4Xk7fzLqMPL68YsQRKZm3tFETAgKj7M1f",
  "key8": "Zd3ADYbyeu5HxH5a3UwYhKUxFNAPYURYgcxxqvXNkNVfkCTVMTKTgGthaX4rDajTGw8EHuoHp2HwveiTXNDBjtQ",
  "key9": "4FZYsCTxRgPu7wHfmdCtK9NdL6hbuEBuhmitP3ChmZE337kzR2okcqPmjSyPXVc7kzFTCCKmTVhRh7CJvQPpBZrd",
  "key10": "dNykRR9QLUuqo2FjnbDQdBwUAuD9zp6hNhrvQANTGr1AgfueFfywru8kbhnMWq5kDUTuUjiZr4gT5WTqZLfkNe8",
  "key11": "3gf3arfyE8chQCVidq99eQThGfPG54sMPPQghDJtveirfyfwm2F4NaiVg8TY68HU4HCBK7qnv8i6o6Hi762D8Yn",
  "key12": "39W63Pp5svLeu8LZpA27SHEaNNxXoB66d5yhG1crUaB8K12XJLuEP8zHHHqEQLh68S3W5hyC627QZX5pXWFq4sgQ",
  "key13": "3g3vXEUSyP7n2u8LdmGcM6JinV4JrkLCVPsupf9CTN8ynjKR11qW3ipmBSA8SMmKizVxn7MuUKAjXiGEL7ehArtU",
  "key14": "4oaRJeSgkULUFGwmqesVoS1pZimxk7vrP3VBzLuZC5BKDh1WCVf8XvXvYi4bG4wAcdMf8BgGQ4FmuREjNNfPK775",
  "key15": "5ASRVSUvF5Hf8RbEkUmbndbb5sBC2DPHpp8oXdftY2deoVF9eN8KRfn9k4PMkoYTxNfijG21pXspDsJvPYYGZGjM",
  "key16": "3fjTGwd7vYx1kzMKKNsJi7rJLsU3ct3VorAN6ybJzoLQFNdvmhqrkuTbyPKBd6y6SUZB5p6Au2AmrF6PCVRxRPQg",
  "key17": "2aF4fJDqjZn533AcwzbDFrj33skTKD1jaJZ8gFXMyTtUD7Y65qFL2YybBDQDWDh2UtzwgrDNMVcqE7MZvhqBfp39",
  "key18": "2quhMYj5cy4UjCd68jEMuLoocU9TRFjePZGWmoaJRobLhHyX2xnVkKxsQ2imZ85VmnQ4VrKKtVHD5s1uv8Tqg1hu",
  "key19": "5FyHohiifHvJCXWwLBSYn4UMG3Sht9cBCyNvhDsXpHEKtUvHy7pjM9vVzkYYakDV7o66983uhfoVSe4JYxMCLDi",
  "key20": "P1S7rLYpXCAgG8BYm8mKSowSw9GKuXQfjD3HUMVEcsNhhmxZMxDk9qUbtiWVbViDJqspJHqjEjPayg18Z2L4xJ4",
  "key21": "2AQXTfnx6fj8AGFCCuziQQ7U1S48H4zvCqyWULwMaKBou6ErsCsgTRaL19uzNhroj14QqdCaWSp9fyRgbwGdjB5W",
  "key22": "2HeTmLEncEJBUnrzEDPc6zwGPyX4wP5DPXporGyfr1gZxFtUXj1So3LddXmpVEba2NK8zLtyD6MSKsWzS3RE9CZ7",
  "key23": "2u2UziPkR6GTDEyQctjcHLgJfwvBUwr2nQzXwkD7Xoq1CpbqezSoToNhSZiPEGaBrZr4S8LPmGXygPwUL7eH5G9q",
  "key24": "4c7R9tfyuCQPxefSeCD7qr65RjbMwEft1WQWgpWbBEZYYyKCJBDkDse37XjA4EW32Fp54Lu5duiPcAuo5NZkCRDz",
  "key25": "2pZCK3ovqpVvspJN1dzajQ7FwpxHs3qxASfyuokqHVUfR5eVLYKciafTFufi4n8nT3LeQHMEM66kFpx5yndd2GxZ",
  "key26": "4wepZeKgaDPchSNFWc74rhwGdVLYReNtivDrNkJtFSzrY238FL9UVZ4Ly2QinmjUZPukU5DyZ5FZ2d1MBiVBrqJ7",
  "key27": "4YPQrwt1nqAy9k6MVTGDa4Hp4ubkhUqTbDW1GzQLv2ooYWEeG1CCjzqaZsmCrSdkHgd3DfoLdoEgMyeS9bBxZmoX",
  "key28": "Jeq3PUFXymEKwQn2vYcn2YZAtnLcEvDb2FftjFMsHPQchp7Wzf3GuNC5De6BsYrLbp6Jh8wB3xY5M3Ec25STqKD",
  "key29": "6sceZUS7J8ozuNeuwEnovpqvNkkQmAbRLikn71bxsTNcuSGWdmAacdfDTE4J1Lij4P2LVRXTz6Zb8vjfSaTMuQx",
  "key30": "UGMrtEq5y5Z2DqZqx1yw3tEF7LMuu8WvAMGTk79v5NTjwLnyZ5DEwSQE9gjGyVLY1iSarYk2xaUyswPjPvSTpoP",
  "key31": "39sL68keY4VS17qkXNrTCTxLUpMj8Y6MHuCn97X5mhaphcmPLpD7CF4QDmShmhitzzsMpDhCJRm2xLgK9d7PhjX4",
  "key32": "2JsZfZWUbVWSSJZoiFdfe2aoXmRLyJB1BE4Wz3z9nPCPGGgVEMUqZmPQpoYFsjVakKTCSVujgRJMfbm3cCyEYNdK",
  "key33": "4sPUM9uhATu7RVNAAk3cNEBHCmRqkLAPHwpoS32pZNV9PX8dNyE8bYrWqtSBbdfnX9BGMZFdm5cDkhSToVzk1SQ6",
  "key34": "4UVJSCQD7tYsWSeMCCvPG6C4p67ZZ2bHB7paeENgYNmVhvvujGeA77Nij1mBFKrdfh4a81cgw6N3PK45W1MXhgPU",
  "key35": "5xhkYCkSZY6ARM5xjXQYJebB2XBXHXR7sohFteZSZ6g8BckJiUtLJuEpGzN4AFQLMnUTRe6CNp1tVhWhgCcxNyXe",
  "key36": "3MtzSNNWZVXrsq97Xhr2Rm6U15YVqfjBs1k2RAARpPprMKSSWLwHpKdGbZxbzGgEa4uUg8AankR2rKdqpPgbZ9Hu",
  "key37": "2u5wSMvPC1MXWEhzo2QTZrhmoQt48f77eLdP6K4CdmbQQZuUAjJxtcsGq67fh9qnSxSoesLreaGkRm1pzzojNCn1",
  "key38": "4YAuwNfbwXdyvMfEm2HsWXpXFtQD7CjBDW76wR13CrmDcc9XmyfDwGANmzHiNktHCuThv6BauMCRRJKFSLC1tTYd",
  "key39": "utwvJ2QovK4ybv1mYzfyFbKDM4GUrCQ1jj8Uwp1qgsJVkfyPi39eEAfo3NX33wgSBV3dSKwCq6kpaSLps3MqvnT",
  "key40": "2XTTSyDZBqCtzUEXQuSz9p5bYxPff4xFMi65oSa5qSCDLYu7YUzF6KhTFsF1qfbkPbdykJg96jizJkysuCWqYTz1",
  "key41": "4q187CPSh62htrTSozguaTLMRxVdkiFERv7abf3XLe7wst6GbsDGN5QePw8bow1BtLQHTtb5NCzZnBZFNNriXSwu",
  "key42": "3s6TYapSZBuUYtAo8KdndSZ1upmPJhUwzHF72BAtekrvvFufyFW5qxPhk2m63kLhbGbg7KcbGRbbvYPdsWEaJNd",
  "key43": "h53N5KkNFVCgXYUa1fJV6zcF11PMK7jhvxXHGFhSUJaiuzJys1uohfzTKAQfXxkjBSnoVZnnuo8vobDqeRqnhQX",
  "key44": "5cNcaBj9UMPofqxRjQCn3Lx4BGe7PdWu4BvewfQoEh7Grkv7e4AdjH1NPYqADyVkGjaxDwQV4Nij72DETL33f2xa",
  "key45": "2LMvEyyLwfCp2mPgsyxTZ8jDXekE6xJ64sADHhnZGN1tfGfwETvJD9fxph4u67rjbTPDj4n6rjfHLHZR6AkgMpPD",
  "key46": "25BvBzXvdm53zfG3dNLGYX8oxQnuxHYW89H3LnoSnfGu1fxGD6U7AbbY52sxbGmorShwdiFWdnG7sWNTec78p4Ve",
  "key47": "5vkudaP7EvUGUFBE9DJQREbvnL4rvAHcnbbc3TotDd3xiEe5PsnxTfgytL1rJkYzwponBAAzwNoKz2nyNkAfY8Xq",
  "key48": "HGBM916TuGkBEvj3EWG9GmeNGdQw1v8ne4dWyPFE4S2bZR6zDEoAgCnHCnXeiHxCjQWgBC53gejKSNcdKDPgXdi"
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
