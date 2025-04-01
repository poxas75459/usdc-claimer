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
    "5Xq7FGZL5SpgqKa764LUEfUyv2QaUZzzu8QhYtT43mP5P9RJjpmFyxvfJbbw5vSJ7pENnCjhB1HL4GWPt7W7Tkhj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vkPaoRFC4zdDXy9gEaxpBgQGejZEMSvD4nCaQA6CCPnbEjjB2tRh517iybxipq5bYwxiDCnassAVeZihYH3e7yt",
  "key1": "2LQmKL11qSeQS3wojtNRFgTLPbvrtmoPskHmvUXx7WWQ4xuMrKtSbJUgMJ6jQiYsmnH3t8WFmHFZH4LN2TQ6UNmo",
  "key2": "5hsZJKCyfexydnFYuC9NM8qtLui9HQZKzLSnKGKhhtPSy7qoERmSsLmSo4vimJ1LW7aKa8gYjdQdkW3fm53syi3y",
  "key3": "4MiECwyDhZrW4wfioWjoFGDxcocqkuGCS7DJTtfUtDMLmbzkfzjDMX3njY4AKJdpg3frWE6TmeepJZVfADLf6P8a",
  "key4": "sJPTF97rtsnCenxgVyccar7Q8KLJ6YqycCYwxbgHxDuQghcJSRypHkoVxxK4rTh9DTtXudTafRb8AS1NbqcD2wm",
  "key5": "4Qx9U1hxYfQKwWhFmkXKmN6jKivzLJG416LGSXSUkeh4TddorFSnqbPX8dzQhZGpkKQbHhUKD5bvuAUUWPKn68SY",
  "key6": "UKkXgcQQfHNFUUBkchbKfcX5ASvGjbdJ1RCWs4ZcZgxatqUNoqMvTaJtt2qH7ktLoqiE3u5GL23Lj5BB9MQJkt8",
  "key7": "2Rs2TMiBnR6ocbC4dKNx7kUFB8zQZrSXw1qYKArNTiA8rKZPquBHR4eg4fZXnzvqbd9ZTFtQ3LPJe8jXtQkp43sY",
  "key8": "55ihVg1PgfmdYJYfn3FyN4x9FWhihFTzWtPRYFPLHYWj6pUpnwaNdbYRyY6TJg4eKjyGAydyx7zgPKa37w6WueM4",
  "key9": "5eFabjxmuUaSmSreUyAAxArpDV3FvgxjyMP4NHJWEcVFnzMqdARdoL3SUeiCRkbw5QmKJGGW7o1HQsoxjPWcLujz",
  "key10": "2ws6C8mohHBsULbvZknNdLGwxsYKEcXQxiN6jRgeUgqEurksMkpx8HzxphZ3NMjqXJ14tPwU1GMz2gFtVQyxhZyU",
  "key11": "JXicqpzWDao34YN4ey74qhtWNbUfoXDPCR7uhXESbuQr2ajHthrZ8H8xwVciePpReXdfZ28eqvH2uAQQ7DMCdBM",
  "key12": "1HnFeLMxNx4CcpwxCB1HAo9wUgarawqjTZfTiLPHygNXbEC4xkpQCAXzEc4uuPS8gbzPgMA6fwi7hSc59J1L1Pz",
  "key13": "5rbu6HJAT9n9wcFu7cgBvV82av76dqP5HUHv3TgAKBhcCK1g8UQcZrq1U73etC3RZkC6N7Z5WsgLYCi2csqWR6Lf",
  "key14": "c9WRt79wouZ8xkrNEAqubPaJqTeUgLcBv8xZsYpkzvC1aqdwTT3fQTPMm1upJMbgU3gAYXCcfpBKGqRsvwrjmtw",
  "key15": "3oCtqs2YcF9o8NaqLZ2Rwj5xnASkY4pLYtJRmn9viQfa8iJeZCrTwaFkTC4LgzsFK4PuE7XBwUVQF5jSPqzvHp6J",
  "key16": "2EfuUrbJjbAsNm3nAE1KKqSUYRbBbq89X1p5SWzEHDCqCoJLf6hYFBDLPupxYhp1koo9yX22eNYNQwY1ttgTtN36",
  "key17": "466kCZ72vCzfjnFoMtDe3uGYBqcTMs8kRp7sEGRvwUKEhGdpG1kEgot1VCb87qGgVbNrnGZTd3qBvzUoiSP5oLUY",
  "key18": "3JU5oZy9GaAU5VRqD4wqsJNEj14pVH9HQr65VWKtknvP1K8FUxzJNnaT4yiGMtKjawDChWC4ET3EseYrMVeJ1xud",
  "key19": "3mLSwd7RnRFDeLHGfkeSrmBMazag7bPc5CpGS2cn1R7ErpNpRBcW1LU6mbtQjHWVsNvhTSYXBad7kcgwQsmcFiCt",
  "key20": "4h9wxArJVdUj7BR6x1X2KfGCYwoudRECcrLD5rCZn4j6avUXLFzVAcD4sW8Eeas46US2sT9Wae4ksozorbqEoGMX",
  "key21": "4qjEuo4xjctVDBmu29sYwJiRpmUNkL4mfqtJsdGLv2gLqipjheeuRN7vidm6gLRtXJPhmLfC2kmhTpiEwfymzzK2",
  "key22": "5ZBnJzBZR8mxFcGfmYiLu7bXU9kehn68b9TshfyeQny3zjj5vNa6edJGvtFy3eRZ2cZyh5AtY6dUVgSdLYozr23M",
  "key23": "3ZmZw2xYfVxiH4gge9S2BKA1HdWtcs6cEu7KwAaXWsgj4mswqFGGutzUzhYqXS93wJoKoZ78TRZzTq3sqpvQe8vf",
  "key24": "2DXYqtD5fzLkNd8Q24KDe4SzAUMSUUcGHS9eCYCBBK1cgbVw6THsQsMR6KivgVpH56LLNs9tuAZghTSYM95HynHh",
  "key25": "4SBbB8ThM1gmjVNyTTG455EFbV4eyK1yGJXsbbP5Yy53kwBSXM2nx1toV6AFMZjr4FDrR5ppSFmHJeQTR1JnmpG2",
  "key26": "2ooVu8rwvmHH4r41FaTy9HqvjczdUcvja2u1RzWUopdmLMAJ6GEySucX4pR7QnQKtCCgKipSTya2FybrW7jFfKvd",
  "key27": "5PjYd6fF4J2yho7zBVQo4jvKbXxBkoD9s34Sk43FpPvmvrW8ohzrabPbs9ycqcMaZnf19rjTgPfZpwkEQbixX9x9",
  "key28": "FXx4TBLwAj4McNzqLfJB8uifVU3SXHRCJAweJREqrUmVvFf6PC3WJ2zFpH6AZiYVrD61o3FNJpWnBkM5s52bAfb",
  "key29": "3r1eGuB4qrexVzqqE87i4rZxUDenav6i7hBXRwkPAfXqTv5hxWgKBHVQro8SB1bk3YST7duJ4Mp5wrqXDNaR5oX7",
  "key30": "2JWSsnEn4TnStnuNHNnAf9fxjj9D4mFNwi1bhy5p5LzAkpomF6jT46g3TnyHmHMDz7Yvz5mxV3Uy7Kkt9xPSz4JD",
  "key31": "GUZFtAA17WJ8nQvRHiU17AGoLjFwMXRnfuTRF4Sc8DMcHFKNchPVcZFV7oNDVVMMXvyjRjAhWCcARYarAJRPMdD",
  "key32": "4umdE97BFpebgaAjpGwHCEC8u1VeQogKJNMNs2CCW3uEUBpLWQ6TrfiuPN8iM2D23MWfVewJqZtXSay3gMC2h1Ai",
  "key33": "5HELriX8ng1Y4ze47WBp2nC64m8oSgBfUB2AdoWed2XvUdvahn4jhgB46AeXYRjZL9zcdSn2mzoVXJADnXVFmewc",
  "key34": "5ggKbawubv9ExtBkMcgEuQJYJquzsZWNdDQGqcqmPxjnyzeVx6HY68QrxmNa15fX31uHyZJmzk5o2rUbQ9YrGgs4",
  "key35": "4A44gD4TEbfys7ykSuLZPRqkTQqr8dyDEeVUPyNHNcwy2L33YMTVZw7WYdp3YrKiWBkmvaL7VLjQbBoqqf3twgKJ",
  "key36": "2TRuZG8eo4fedP3EsH754VWU7zRYYjSM8BzTnWSB2bo2z2EaRdtwLtJXbSD5zZffwxPuskP11NExLS4LcURNY385",
  "key37": "5uKt2KqzvuK7AwgHyLGAeP2mWHEhdJGMsVWSVTaYiPGp8E8MTZmzPpqs2bsZcLbXGB5nfp9AQuZkWnvbest4UZjF",
  "key38": "4nw81dX2LtpcMp3wobH3X8zKLyFuEe3pMLLSNyu5XsZv1NJXPU39wMz3LvsMD7mZtaCYu76xwfRsz5Mrav3qPMtj",
  "key39": "22g3ygds3SWtE8LLsJH24Sz3SevtJascrsRCu2gcJrUria38kKAGkpc2zd2x7THtk1qbxQPrKawF9CPAkKfhSEDk",
  "key40": "3QECZZV7h1ZavmgrBK5ZWhKzz9eKWvnVXorkWsEyJoF1Xz8fVZq2btFCxv5DpUm5J4NTMjPBaaXHStJkn7z8Xjc3",
  "key41": "4gSfdY2PrJhgTmzxXfcDe6jEfyGFLtBv3WxXCb8zwgEPr9QMLAgdJcTjrH2MupNXFhW66poehMBi4PoHyqaGrb8j",
  "key42": "5CgMdYgmQko1ZjkECMrkptkVSTFzAPWVXMTSxLH3wnTRL5LPqKnmSDi1kNNWUXUn17VWR1UAAbttfrpncT2qQWEG",
  "key43": "5wy5NcWXResmkFo3YQjTuGeLDtzhNcjazFZFZTmm8TBD1xWEcpKTS5355CkTH4CpiGfEMQFzv5uWm2akvKH8o8PE"
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
