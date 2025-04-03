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
    "53L2X6bxt6KNdtWH1kpSHi521FCJaWUVJ9hkRYhd3xjhttJu8zyNwPw667dA9KeiBGXfffBkF9HZFvK4DgPXX6Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5juXSJMZdAmm84M5FAtAPtD7uz65QZCMq9er7KQkdus1eyCgJfKSuxd1kQ589eyDmS5aJ3S3SwL8Z7qpMPc3wrsf",
  "key1": "3PYsad5gTtnFjjjY3wJKFVpH3RRXfg15ptSz9RxpaCFxaQqJKxdrxa7pjpmwE4btadYQNu5Q9GePZRy41Ze9XnyG",
  "key2": "3RPKcTjootKnkj5B7VcDdmDhpzZvHi9jzA1V9sy1vXgjkmsk43igsfLdZhr58ZtHEdyoYwquHFQqPQA9HqF82KUP",
  "key3": "41FfUkbBJ9q1pDgyokQbmgPrGhVj2FK1TARcZPrPVFUwDkzobSEPacFnrtXv2yTtuYVzWFd1v2taHzbiZ6QQYgg1",
  "key4": "3zAvNQEqD1JEjH9XMvPgG4o9nKCES1vxEsdPTQRkn9aGWUfkmZfQnprpRwBDUUQe2aMeWpf1oVbh9u9vRKJrbwPL",
  "key5": "39rRFzLWupReMvei85YbFZ2PmRqYyxqjfUJAeJAyy2kTSrn3zHS7tPZ5NaTeqwxbE9koMdLzfrkWCCvVJCPMy2bA",
  "key6": "53mtsTD3mcZj3U4tzEQ7VGtponLQPKqicB7XJ6HVocJRAG12B8Dt3TSjCwrhRbNFd3FpAP1hbBmhy7Tqg4yQwXYC",
  "key7": "3hf9bbHTi2Yn6Da1HEZtqeHuvNjfMnmAEDHc5rxeMNUJno5D8vAMD8tHSPtgfkJbAFvCpQHdLfbS1gnpsvcHQaRj",
  "key8": "35pGA9jXtYN2gMSPeXyBYoKmeYshgxc2Mf9VLyRojpFB8KQo3ZP4YioSuDYhUwcuBaLnHajYnXaNJYhBi6hDFr6K",
  "key9": "5HsqxWYADuPW8XieC9GGjSWG2NQHnGf4VovTTzGhfBuZ4nsdF8ni3CfH1qAMgSTp9UL1DbQFnqy1ay8hPRAzeB1H",
  "key10": "3YA258MbL6W9MMWsQJN3RkojnTFEeujNsyceRRZvcoeWHEUrF5qTtqk9DmAtM7UyQCeXcj3myjKM3axj4yiGRCqo",
  "key11": "56GGY2pG6Bm1jjJpNi53BMdEYNFLvg9rsDTPSwHDaTitsHJWRX8oVJXruvmSf6sePdTZMmnQ98MQjQ7G6zdDEbks",
  "key12": "3HfUAYHss5SZyFMgFFFo6dQPbwFx97Yrdrzk2877TGbW1Qi1W2RpydMvqVrJdkb3DmhqR4kRHNrgT3TmExkanz3i",
  "key13": "rF67DyRnN2kyHNdn6pokBKdiwYeB1jJm1Snqbj4v3X8ysEbL2RobumXs258qqQzxVmAqs4e3CFcxpneHxbo2qp9",
  "key14": "3Q98dSkqSZEHvhTpiYMZucg8u4h6ugNTHSLgHRDxDLurobMTg98SwbWsJnWjvTtB9qV5vnQzkxw4FHBkCdf8njzW",
  "key15": "3SBGTeDwY3QoEpP7qjv3BWRgi7CaY5scf3VkTGbWRcJAVRmgXitMfGsTDdUgnQVoyu7okQdKD7PfKh2xSwed1MfY",
  "key16": "584RpUzqJfvsBRnwfyFRvhXj4Ji51H8gj3RZ8f4ygJVsvokbe53zpcGdCxacu7H71FY6LGsANPUVSM6LgNPQMFAY",
  "key17": "5jhqHqPYAtisSmFLA2oNesVGKcavawy2vXoLVq21cYXZ9TivxU7pdrUCMifbuKtmybZFiota61W5HUXSxETyQJFv",
  "key18": "oTmxxfXfePYkPncvZhMjwWvD5DHswXtRHwwd3e4ar71P92JRSfL2q2YzbUrBJDYa11PqLuj3hozVKSXiRBrnAgh",
  "key19": "bBVzbsFR7xTszduhgA2XSU4BxguEV9HTUxuENgreHRx8K6cSfMPc1PTEHcEcwjQvJT5sGqMUHPX1pjTJEtTmn8B",
  "key20": "48SUeJubsrBCcoiY3UA84tPVuf1DKvwJG1DVCwDhJ8PxHsDMmKq33hADMujjRWgCUQoiZUqUpbtF5RAemVpEZiXQ",
  "key21": "3qCAbbikEz1J6juiNhCzSRokr5LVJYs5uQqM2CzJ6fSvdPBBGZryaZqhbisuwSLkmJQVh8VgHC3oag47qBCuNggT",
  "key22": "XX14vYRGKBahwVCA3Y7fGFYsBme4jkSJsa8ujSqFKbpyjQdjtjmuPNvNtwFfVDZFsfY62SLsEdV8fLt5HWGokLp",
  "key23": "3LVeGqpWUPtktFsqhw4rM9T76QfgWSiyJJeoeJx1RRocUyttbQjbqvqXk3xvzKxJLvqb3n14nr389ijNFkuj93Fc",
  "key24": "taCeKyVA6J8NdC1pzBZ21TmNuh43ewVDk19aLCxtzWR3suaP5ttDTaVb7S2RwGDQTcxb1det2xSjqzjXtSMg1wW",
  "key25": "47MrHra7xfqRHLpCpLMamfvFVZh4FwSGBpRDZXN17Gn5KrU4Hkrw5aQzMGRkW5qUtgTMDa3ZboyHV6tDYU9UaHfX",
  "key26": "3abaUxYcqCojy6ruJPVhiz21gWh2kqp3WKDnUtrjMwu3LSPcKnY6dreXiiEZE5XezKv44jBsM1eiah2CbpkBWfpx",
  "key27": "3Sy6gwAF429Pf1D4LrjmQQkJRFMMeJjYFN5i455owB3cxHCESUjmNZ9b1QpsxJ6nM47vKYCAjQ9tNChbmSrjjKAD",
  "key28": "4GyFTRjNQCBw2W56xjGEK7mUeXAU7pu113LpNhiuydM9hgieMdRwCDQ1AMzgtJCBnniS5x1VzBCSH5yWeWgJXFsf",
  "key29": "qSPvih4n8o1wDkQ5iCiN3vTqBz9kfScGfdb3kWrNVJPgsoNMT2oz8vMtAVESLczsrdjSYh4iYCgZGBFdEr4grCx",
  "key30": "4P7c7gsn4dW9FbuMWqL93csYVsncxzmgFKeV6PokNTViDepT8Lg1BJY3m9Jsb1EpfpzQMKtMAdFER4sbdNP74omL",
  "key31": "gz78ABhgWi2R2kTDHkQQBAxGxok5vALmM7aLUNkAkhfLTKTGKFfxQRHM29QVsk2Esd3FAH6HWp4LmGMCUBEPnCr",
  "key32": "3fy1EHuJYrm7QNkt2SwdikwxZURBEbL7PMhqxifAHcB8ihu2RNgZJCv7aGxRKLSw9sRQcVRWS3va3KwyRHPKzMZe",
  "key33": "2GhPwBPWbBK2D9k1xFZMFxfTHKtMP4L7UxHoVhSAyyq3vzarAUZUYvhBqA4wzdHwvokVVkRWi7fjPpoL3VvRDb3j",
  "key34": "Dv8nDc3QCmS5o4kDhzivrRf5nwus2T3T2SPd3aWNw6a5ZuVdizgJHMHLQpef6gEPCoWNfDpwyH3ka5ZnQEzQf62",
  "key35": "RJUVVsrYfDV8x2VFYFWwwtHWwBrCwXe3KRBSvPG3tCqufFZWuhBqvHWnjx893fHuZKNmvGmqatRNx4aX2nP7NRn",
  "key36": "3RxvAjAhvw2D4Kyp7mmAQvi8aZFWo2ftNxdtfxEuxkqP3K647icrTy6EgovJohDFQg8pLZxHemJENGpTyDZvf7pv",
  "key37": "5tXJbzoodbgDmXmJpfjLpmpiFjJd43X4T435is8kK4y99VoA5R2ihxVi2isT3VXqWSdiDAh556zmbjMN86hMxgE6",
  "key38": "2yRbPCgnbCBDFoMrsn6rtyRjn5eoQ7XeeM5yuRAp7RaUVZgYM9TurFXfetcEF2MT9MwzgqBWLSAjk8svFPYvXy9o",
  "key39": "32D6P4QuUfL8r4kSmnw1QEPBjRmwr8ATNNV7PR9VdL3knLTyVNa3GuSAdRemGsej1reriZc5MjYXnF1oThQVTDUy",
  "key40": "3SUB8fbbchEWpMAwxYqv6a43pRRJDiydL2CqAM3PwdpXS48Fm2HwgKBBMcXnFgbPR9cKjpap7jaA2ngRj2doeesC",
  "key41": "4AtpufxSyva1yqvC6HRyfcvSdKs4MBC4rMXnPAHxwjyYDLVd5pLZjx5CnNovAykSmxfTYx2MWH8uD4MpDtHWrbBN",
  "key42": "U6oKksbwPLutMq1rod2C6VgTS48tJAbvh82KqcATjjsWPR2c9nUGg5HjA4YVRANuBPeFURxkCqvtYQ95h48ZGt3",
  "key43": "2jBAo3TqXZyc8fimNuUDRKHcoNGzGVafAuKULK5fgxwQJ7fFpGX4xN5FbeQVNgnUNwsBcSqM8AmReAwpiJLD1BGb",
  "key44": "5uPu8T9KLVu5WLRg4tkqs71hCdC1QMc6qCythYW1dkMuppuPB4XKPqLFS7P65UsdJDmcEJ46NED8ZyZBWpMEx9Cw"
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
