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
    "2d2su8jHXSdCvsFhx8o9L2oQFdZbuWty4hAkRuZJAR212swbzqQPSiQb2UEHVVuZbKTy1TyUMU7eFy2skTWG3sBK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39ez6PknvXuyGT9SAsvPjTq43BdpUYKxSCGjdHeNPvG5XDUZXkak2tTp4F9dS6JPdszFx9eCLpzzfB3BMVasnAN4",
  "key1": "Z6mqjhxUdDoAVuccX5Qj1mvBmm96FXekYwNZ4qznqK3q5hy52qxNC12WmApiKSvYgNZc6HWzuJi9bS6HsVGxXZd",
  "key2": "aMuVrxY3ak8V57mEtLWCbTU4KXdUR9uvqQD2AJDvxZCHMDhC9ruViT3Gz3tL3cUzgdq4Q5WUTYB33vP1DpDSjse",
  "key3": "2ZCixQPFHtjkexuwrhg17sXQsgQgr8PpSZTCopw26Kf2nFAHQgD5NL4SkXmuPdBYip2WFYX9orDT3CnGHr9hMAFj",
  "key4": "2Mh7mXwv4H7wLa7pnhXyJMCc6N2KkqC1hjopRR9gXvK5Cv5A1Eb6gGg6XyJGw4zNkSHVtNcxjsusEMRS7XUqk7dY",
  "key5": "5P6Yn1h8PQgGaXgPXFhXB2ABVRRur5XVYrpNvR76hVLS8CjfKzskasUtcpxaBPmZv9zXd3mzWSVCK5E47GJFv7Rz",
  "key6": "3SimR4hdYU9JkZMizukttqg6aSHn1pg4qLsKGVtAFk2w4xfF4UpkaS2gWUcGSf9qhL7vMAWdAT1B7qRgrLufHJsJ",
  "key7": "2crggYszKB5ymRFeipdTSebxG2MEriHTAuw3F2K4BG3SB54NH3Ewdk7s95cx9B9VcLP9daLkYaVKQXp9PYsJognp",
  "key8": "rDn44HTWUXo3TxYFKU7LQxh3rvFE4TzCYZHUQZxPxCEx3NgfWAdqv1sxvCc3MCcSWMf2pzd7vdNeaxJvCsTv5dt",
  "key9": "3dHnQMcUjF9EHFXnsCGrfT1LQbw4hzsVhZTzmPRn33pmkWggMgmfQWuizDshPnFaTifM1h4hRZHSzQbg2PGap9hg",
  "key10": "h49C6wB99aq51RtEAtuGvPGCxWX3MjP7hKsc9hpghV7jmVnP5YydZQBdB2S5fPP8TySwmULGdgQoUdrWhyYQHfK",
  "key11": "46HTivxoTAsivFN6iGhgGKCucLQM15LYHXX7kASiykEHnV4neT6bcXtXx1XXPA27LphPweRsx4L2P7xafmufmgzH",
  "key12": "31HZDsoLWapU7rFmRnVKoiMsKUBit48eFMZtUjiiBjiTNEcnwZJknCJSaxDmeTQEch7mbnni5aSLJhWBdMyjQi6C",
  "key13": "5Hybk7QY3i22FQ7eFBv6qFDav1jGRw51wBdctXx51AtQgVEsHNE2wFCNi82ZsqDNJF8Dk712XsBDzRuagcYuLqgv",
  "key14": "5bsB35c5LujTkf78GcsAqfb3pCyNMLupiDVoRQUjH8sR24c5P62CU6YLtYCLSNuckp3AnBTpJXgeHtmjd5rUFw5j",
  "key15": "3714cL4Q18EZ1QwSbUFxRGECMcKdZqrLNVL5Uvgk6ntPEiWbpW3tYjwYoVMDHDMb9B2JbBZSntnxCGqG8iuigAn3",
  "key16": "48RG4QP5R1L58owR52psD4aJMabGjsd7Djfe9LCnmMRYLjSBPemrMW4bVLJBzRP4WrotYzx2Yn8ZNrT8pRiq3EXN",
  "key17": "5Agpm3LetQNESyWSf58uCx1bRqbxxjDV97BvYm512ARcJ2rmmkgVvUrd7AnA5i9cMZBHyRTv9LGZNNMDpSThE7pA",
  "key18": "4dSe6iVKrgNaZQjQpFyRUS3shcVLsPoPHWbKSqougiBUczCK1cFJbRqgaGoVstUBYwUcNiMkR2Esx6iTigL2AsBF",
  "key19": "62Cu8suybMuRV3TvPJeSN6Wco7u5LiBkbgR5gzCTyiWB4APHLvxKzyU3hRYA2SyQrhgR6XF5ubik1yXBnqNxRcWP",
  "key20": "5ZPmcp8xgCp9hN2GVmZiuqCpBus1ynQAVfBnZ2wJTy4wpyGswvZp2ZyRqTkBWbVBJ1gWd8x8qt31A9rNkwwkewnS",
  "key21": "4yYy1PJAiyy28opL7gWMaqTvcaP6ZnYYqYzK6vxyLutu1wJQf8jYTsc2nGYnCuZqobEA6eG5Pd1azNfNHEc1x6Lq",
  "key22": "YgKwNMnWsRYR7H9LqvWSn16uv96CXV5rrfTHovxZedaRxgk7BhCBFSViQA6tu4L3at3qzjeNhkK1CGHdcPt5oAW",
  "key23": "651tZLXi3bYpFhZEvgybBfdGV19hBt1N3gJ2egc1VujU3WsBSantcqXrauKQT35mA1pxD1SU5XK2b63z3yrTexvV",
  "key24": "2i5Z9X1cx2GbqJFfAdWLDyJxtACGE2j3xTzcAgAdE7qAUhddTzGvfcfd7aAdGA9EGYBuPRfcpaeeMyiyr346cqdm",
  "key25": "2vsnNBmS4aUSMXtMjd7rjTVmNxG12RgbZ91b6yGSKhn3dzT987pNU6kRAjqaYoF2KSUUYqTbazheTzKFkGQxiGvA",
  "key26": "wfSMrf1qEjXDwNX22kFNBcP2WaoT5r8LAGgA3GyyLr8qqMJ4mzrNWrk9WD6g2Nqstkrc12SzVmk1aCTHy6Q7w2B",
  "key27": "4xmiRJFTgmzjbtT5kdugvJRFB8o2bMg3ec86FYGQjFWxoXJwX5yoJZY549Y5hgjfgwHGJtx4oqpcccWy7LVuPmJc",
  "key28": "ptu2mqDBTwA4WmDfrYVyw8zZBNWsoECDrz1EZx1vHNckRxFizFtp73LDYr6GTnBZdSP7cfWK51VQbFJEt4S6iBu",
  "key29": "39Ri26UEzszwNKxiwFzhhTnhuyv8YbCKU6xvB4M7EX7eMq4xLVgHUqPuRHnKu1Ff8sYfWj5LocGvGTyuvVNYUVCF",
  "key30": "4XQxqKPPkdrsrTfZPCtqB8Eps4UuQBxhDf5tD8NjhA5uGERnKYYQK5mnKaixViuZLr76zwMWGX1EyGzxN6TNc878",
  "key31": "5g4Bufd4QETH2aTXTpwyCxDkK1EBtHn93ys3dp7bDCWUwEAUcRCex2adNdtPpg1NFCckRzRCJcZ8TUrS8C6mf1zL",
  "key32": "4MRFrDbYDGn3LYNU97dn2aqEUHBQvb99Vx3Q2pmBqxWMm5ExZTRyXMmEv68MJmRCcE8d5VCg6Aw4jrf5YPcaCWyk",
  "key33": "2x2jBP1Ap4QoGu2QWhasMhnpjLfjbsSD87on1w86NhkfxtVLZHUyuRd7DCGUbHqhMCsgRrALnxP1AoAAHFGN4DZf",
  "key34": "LLLkMsxK3saADqY5j7ZEmbRKBSEfC2mjLwF5435g2Gi8tgMAL7DVWhnTmKbUHdcBB2JyzdwCPfs6YDoa7iGu26o",
  "key35": "48MFm6NzPT4wtPN2kzpQ7nzbDGMe83Q4HpX2MH2Uhin5jJ1TDqZx4nFy7PRPSarx4qFqr4afZupiTEfnrDR4rxUY",
  "key36": "3MfsLFxRvMv6QPfKBKvys6SCkqmQccFJCyWxsAUq84n8zSdGWCS4emXuYWEvV5GMDxKLSHPihqmuFzyLXCMcSx43",
  "key37": "5fQNCUx84YQd47GfFs4o9G5AT5dtNnZkQisy8weLB1Z3B6fyWMKsDHM4Nkyc32JCZLA8zpLGgdF2d3KHzo48sFCi",
  "key38": "21aHestXVZ8PzQxsnj7r75rcdpF4gCv1MUm5or6TsH2L3FzRqkHYcQW6peBuUQj1LZ8QjqCNayfwfkFWJ9iobYaM",
  "key39": "5hUpvtiEWt5pekaCoBB3jnPyfhEsenFV2HSayT6Kr9A6Pkdx9xYXHo4pLVw4VxHvTh3WxDbdaqLmS5KDeqrzX44t",
  "key40": "4uu7tKHkNwAxvqaKCjuZtsBe9662uwHNPjUFjfKZagTPStT9PCSm5dU3xbcYHH48inVykhbPUjkFuq1yPKRanbq1",
  "key41": "3Ye4m562s8ibZJSTTexMgkGZK98tDuqjhyMpPsrstgKE2wj3zCMZXfZfk3WYbA3NPJidFkHgySDqGx4knu3e16d7"
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
