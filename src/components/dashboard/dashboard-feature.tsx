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
    "49JgfPkmSjEMcwHr7mygyasfkBVFmemmDo7r6W687FRrjCC6wuUyUPhCXVpbzpzgmSCJdV1RqDRYXv4pDuAz6iMc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KfJYtsJNbCR13ZNvr797H5XywNbfvRNocgFcj8YEKR6azzVuvs6miePhYKPB2pkawVApg1LX1QHEkib5Lk6eQW8",
  "key1": "4o5urMc7QCvF5n92oK8Zuu2LKW6zdFhqNs4B6JGjFtMyiMBosxaiGUQ9hLrvR1oyYkRZxe2X3u5u2YccdkdmnFcg",
  "key2": "2Mj4hvVeYCXekERbQ8CnaUGiHTZdRhEZSe4zuiNk632UprN8Ui1dKQnHJmA4MA1hrzStFFTjB9C4bG55BodZ8gzw",
  "key3": "ogzsbD4Vij7mcKzXP9jQ7Dkr827cuEksVybUbGAMxvsCPgoiWsE6cF4Xkxgz7TT4sEFAiQmAoTMtMof8XBTnbBn",
  "key4": "3WQREj8UjpwhEbN9P1wPhPCyJe8GMrHduvykMFRpaS2fA3VLp1ssxQXnbpeqniMpJDLTA6sTgFtyLuXmjyAkQtJJ",
  "key5": "5zAH5GSaHqaxYJfQ7imUcHUAkum9yh3rTJV1cBNNVXbBwWxXV2w5qCF9pGsqj1nyGcZv7v1DmTG6rMBinZuJ16qB",
  "key6": "2iKyGqEu6A15x5F3GzQDpgbNnFCRQ1sXfm2mgcQqxscXVxy7udB9KpyJyVyEVndJ4qbmkKpmvBwcdS5Cr79GQ8jX",
  "key7": "56TZ1XcfwA8NeJtAoSvxghtJztDpgoKJWm2mphQT2VPFgUNzEZGscvX7maorrH63dcgjUNE4azHyznKQvYfqnSUi",
  "key8": "2Ej5mXttydJgLzMcKfcGF8dW1EkK4ZxWVEMXzUE1VCG9ag4gcizaPAYdU1skPR77pht5PgD7Qmfo3br3phKsY1qR",
  "key9": "4tqLRavA52Dm7qBPqVLCXNDAc3p4cTKw7ueuNTicniW7wxD9YXi2Qqv8pyKgAHYy5Yt84EFcxPBNMm2gfxbEWJQC",
  "key10": "41EZaR1BDvgxrx6opaUBQH3y7TCV7bFg8njmUPW2rvmV3JfK1VEL4M6tFLHfXiXxKsn2MG3zc51mYUZNGtA4xEGj",
  "key11": "4Mbwb8XUhTbbnJnHUqyKMf4nbxjBnjfpwEiBqyW8byptamBYqqPEcGfDNo4F9vnNjDLNv65vYSzMc5ZyVbAQ87Jg",
  "key12": "5nKRLtSDrikwVAdEWEWHX7BtB4XADXUyoyrCGWSLLbJvirtQGr6o8e5uoDx5Qit2DJvEeJJjLy7KsxdStkXNvRxh",
  "key13": "64RcUK4ngwcXTSoDHwc9dDqmCCQTcoaWnF94gW7nwwQJoVwmKz4CYmsrWKvo3NzVQzc8fxYZcKNz5JQ6sjBk1Nrz",
  "key14": "YNcdmeV3Z45xsdGKQ9DshSoJPRU391irdrPrybSHsW91iePJjrCSWEti4uYigJ3BkJKz1L75CgSZdP9rqai9cbe",
  "key15": "XxpSjfwFSdFEwLib2sAhdTvmQ2a7jH8CWdDuFXJkPdftQPgnnxtJRBAbSm992TW8RntMFMSifn7EMMuxr7JLUmo",
  "key16": "RC5VNJV4hqo1xCiZFtKqVTDuEJfLCcJWFzbu1yhKrvxLsWcFrE4t85YDPDTDSPJa5Ytg2JJjRESVdgthSyXjcsr",
  "key17": "3Hyqjsf5yUtc98junQj46qFpr2pvhpbvHVCin8GLweDcju5yTmNSqh3KtcA4eznitGNqugxDiwnst2tYdpsShjMn",
  "key18": "5WqjEajdf4BsZQiavBGM8Bee9akBHkoFfWnseLwfKeTPJMgTkZrAjsz5xMD8S11cKdWKjqAxj4XEuoe2hkGMRo6L",
  "key19": "NcyptUa6EgmHmJVsHizMuEFgJ2SWWG8AWhLfs49YpaKg8DgCZLZFhVoEFWPP19nBW6dp3rwzrSYe4Kp975LMLk5",
  "key20": "2L1bNb6dyD763J51zWs4C57HWouVY9NLcrJKzA4B2mUa4Y77dgmUzXttNHcVJBx8Rt8KT1QQkdtsEzTrtKHskqh3",
  "key21": "vb3n3WSaDDs6QdZSPzwpup7u6wtx4LFPySrc7vSciNrYjYjgxxVPg2GrJQRgpNpbkz1SFFJ778q4DBy4eaDtUJF",
  "key22": "2YxXCCozYuhxGA8dkkvqHqSsZJT6YuzRLY1kzwmvoiKNq6z9dq98hiASBnqyWKLTK37pwH65jFsuKdQFBcmvTy84",
  "key23": "3XsUbLgRxLopzd9TexppeJHPTGdZiqD9A3oH9H1uxRfXuPsefdZtDyjgKFRHnJYgWAbrVuTjzSFxVJRSBie8fe5s",
  "key24": "2JP8CYJoPdMPdxXrdZ4xRji2Y18SufzXLhXX7xjcgSZaUt5AT9ZermSwKGg6FZcHx1AG5Evve84FV4PZtC2hjtv8",
  "key25": "28KjBcFf5nT8oJnraUE35yRqR2foHnPB43qk88Bh1h5kGngUNLmfLVvySbdxbvJMU7xfdYwnvQEdMQwnagP4LoDF",
  "key26": "3cTN5X3eer6QPPbngVMr4X9e3EPDoYkfmNU98Zo3sxgq5p1g4QYEUWbUW1HYhXiy8sELfVquYwvmPsRK92YYD6Ko",
  "key27": "3HMWvHQ22uV3DVfx6dVE7m5JXGJJKM4Q3ij1fUhp1jUNjwCVFE2tggGJXkfE7pgxJ8aBSxYRT3HccY23CBnXudTQ",
  "key28": "5CETu9wMveENZRHh17X9nyTV6P7rXMY44xfimFnuZrbv8TwehjuUS2QmGR3WjBGn9nLsSX5BTsDgousovazesTTF",
  "key29": "qmcBwS4ujjC68VnPL2cbPqFmF4bMzZ7HUdfnoZ4wGycEoPfj2nF27PAxDa96qbYo2JFpfeBRkuQtebchTRX8Q2G",
  "key30": "61DXPDjqusinZrm4gTcs7scVRHie5G92xxSJpRptWrGQe6QjiRLKVVozBddbgSnHuMGdAoZXTbYUeB155i87Evqn",
  "key31": "cYzQEAcaaUUM2VN53dckptjc2Xu7cWF6tzXPoNjbw7oPi9MW7wK7UeW2WuAVnHKX975bQMxMY1uSnZ2hy5nys36",
  "key32": "E8ExaTPUkzXPi3z15EoRXEGEPiBDQXyBNBw6GkFDUQCYWYmj6qDCGwbxfwgAT4L7waJKps8i2tV5RRySahqkvqi",
  "key33": "4M1QwJniwWmTeBEt83bW4K4vn96mpPtPgS9nh8S1FfNtescXCUDSr9EuJWbCW9A9wbgyDVFx3MDRnK38z8h1bZwW",
  "key34": "4S84MmrNJTs5WrbAw7L4gVMZfuaL3vBZjNE9DmWhk4EvGgxUED3rSxYHSSuYyFERYBQC4SrqxRHLVHiPNR35nDVa",
  "key35": "DQnFHnwF1M6koaT53MBnWyHCQGn32FVXemxDHmAhiUAdjtSgF88QSNjVyrjZp76ktsHBULVrK1GwTyKLULMp45A",
  "key36": "AuvSACBH8k7ARQq2P9bUZf4YDRNWNYT5xQyisjGHMoXFjQi4U2xwe8aER1mZq8TWc86ErZ7D9etovmHMR7wxMh8",
  "key37": "4w49G7ADEkK3EiNxTwhw2s19uFY7yaZw2LebWNQvmfTkyQGGaxdoAA5oaSU2B8SDPY5tb2zNwB4pTABfZSV3EYtM",
  "key38": "oxntK4MRXg97QHkCa8kb7rnY5d1HCgzFnrWf4JqHtTmziEeYFaC7fbBzJgZEMjjsSnJhKJ5pLEGZSAj1EqFL88b",
  "key39": "3U2NLDM7WsPZ2RNrhhki9yArW4HSrTPgwpAjo6QDyfYmaKWRXYugQHjvxfBudm6e3895Z6ibL78z6C4RssKLJ2Pu",
  "key40": "4AMvh6dusTrBr2mYqvwe7NBkjsyeZU9ACPqpDSmcD6hy2EAcX6RzpPYbaRmSQ7o7W7QY9xfnoo1Z2695ryrbjdZT",
  "key41": "ikLPTTWbsGoNfyHfxyjeCMcjkeuZvQF4vzm2CP3Zo5r4rcZC1V2H9pLp3dx87jv5hMRjSk3DhtGquYgFM4KdqqP",
  "key42": "5iUstDeeQcy1uZt2wTVvTDEoiWykqA7ByJQRHbCYcR5UvMvmjywveUKCXtq5SwVLhERhcu7g5Hw4ihZtYE8pF4er",
  "key43": "4AaqqKQUCvgepGAQDiBPkJD47wcCuvXLjfkt1niTqDM2QZwRzQmLnMqdsN2kxKDtVuiCUwZJURixqaneMs659nJ7"
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
