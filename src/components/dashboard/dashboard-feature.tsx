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
    "ZU15p6ytAgXte2q5RHtEXvtSRktJ5uk8cnSTQMx9Y7cDLet6N4b5HGRqrpcCqcqcbtKQzfLtMvnyWUyCDJctLqk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CUbt5vLWA4UVr7krgCCUbfwpwiHuW3ee9jraPYguaSsdRZsfC76BzTYiV2NaEmjJVCzwtj5tUGu82noZEAzyfaz",
  "key1": "4hKY1VAUAVsucRRUtLyMRigmsug7CiVwdbLGvnwwKSXqoeMZERm29AvdAcTAzYnZL2v8bZ1EEWPtro4N2axWGcea",
  "key2": "2k1VaPB8kJpAqkFGbTF9fnFvLZvwDNfzi4v55R9NdLXNQh1vu9oexmP2akpDhw7hyt3ASVSmHoFw6pcANpU8PUb",
  "key3": "3m8oSM7vSDhQuWRUSDLzDyzpVdqs7ffT5pjDUj9r5NRt39bxVmnjYs3DqJXLx21P7BaZ4JyVT423rqLiXaGgfWkp",
  "key4": "3onoX9x19YCQZS1sw8gKV4hETqkjguosGQnAqZbB5SgQm92JLJAUbVmznh6q4Wm7mg2yb1jYG1EmLKUvixGZjsyu",
  "key5": "46GWEDhRHKweUCduiY12xU1V7h5URPHRRhG4F3XsBMhvRmpPLGWZWr4tuz5dvQ7wK9fv4fdk6np6JFHHrbAregzh",
  "key6": "3q5hRmrJSHqn9ypgGYGFhNAjc6prGe48c9SNcQdALwURKd5ucYRdbeW7oofmpUs69DY52ZBjQtLUsvgUzPKZ2d2p",
  "key7": "kzwQzc4W1aqP1uWj1RGsg9wYDTzU9TXRLen9XVPxTMdSzRtdajv9HsyVsEgerwMzVNbxSJaghmvBD7e7QcURLvk",
  "key8": "3BVY8aKc1nLXjhXxBghWdvVNcBVtViz54Kvb27t1GE9faYx9dLRdUvx9BSrGNbXeo6138HSbKd79pWh9SjbmjEAk",
  "key9": "3Gtb61FgJWJ1YngAu4hSjpxdys1DNwp141Y39xARNnenGfDuoFoyGf4Ahg76Fj93y7dXm9eV2Qf528XR2KGJSTYh",
  "key10": "2jrXkjRALKUpwRmtz186Kt2R4BrUPxnfioJR71aw6thStJjiy6awM4cCnAouzaB1sS4ppLPocS2sBzntuRhee6t",
  "key11": "3KTP5b7Ffnbc1KKcGApTCXLTc1Pe82kd8nWewzhkFvTg2FkhN2ErVYu4YYXF677Vyh1rGNB8knXTPR7F1BLxRsLB",
  "key12": "5x66TDVYQM35rKX6fy9oXD6jQUiqsm91eU5zhMTUwqaZjYofjYD3o95SPouRMFXVqYhyaQFfKuSk9BdYbXdzpeJU",
  "key13": "M8JYR59B1i2SKPmpgBq8bXFhTXAZBUmaQcRWjTu9WMHM8Qdu9fnEWbjv7qf5PL1qUBssM5j76qPbvFvHDaJhREr",
  "key14": "4e84gs8MDXgHRinfdj5VxSjQsEmMiYSBc2DjbZ5HgWDJTAeyZok77pByzq2qAKSAB1haM7GbEPuK41wwv8jbJK6j",
  "key15": "3NtSG9p6TFZjxtqYWySUYW3ubqsfGGGjpukNBSPE3s4m9Gn9AyFxi3qnnB21mnmg4n5mdiXbbxgz8oQTCzLsfdBG",
  "key16": "4ku5vkZEzNdyD3nqwQ4p77SYUVi8Pfkgio4FLvAp6p4Nf4fjQBSJtF6XkUFDRH9vfXAEaVR9UgkfxVnLF7iv9BMQ",
  "key17": "asNCy6jt9QwDM4jRA6e4D7Wd4h2EqtsDx8JjEveCY2xLvKCM2V7vobZEeu3WqSjRTTRDQ6eS1SAkqECxoiPUWL1",
  "key18": "5VusSXxyD5RxMT495SnzAB1dG7czcu83K82VKwk2cGGLZypVogyVhKazCWDXqetUhnQgDr6hp91NprF9t5DvWtTX",
  "key19": "4fMovbLFwgsXS3qXGZCS9Gff5nppN71FBDPUj84jMhYsQfBf3vxhdSFfXfih8qQne88xm4HP4LQ9Tvp1BdtYHuDy",
  "key20": "k5AHdsHW7dPgtVT2Dc6vbwoyois5o2LuBsL84z2g449HjWiP4JC2sjLtpk4GYpQ8hv5mB5bouuJLt1VEsR4rBXD",
  "key21": "4nX1ZfBMwqubNMJCsxKxrCPvEWmunZbD3Rf1p3FkX44f31UmRmo1mgFVQKYruxjGRZZLFpwRaHrDNrW3nGWcjRS2",
  "key22": "2k3pFTWLWF85oNTCNmcYa83BeJvnhipSh9MC9pnbgHUSfdsEVXU5Q2ck7hU46L9z6tvbf5Y7hZkpYps6iXFbMd4E",
  "key23": "36p9TciNxS1ZYk9uka7GEERptausrTTRW72VeQLmm53e819iu3UUeNs3kr6mBM2WdgnDNTPvvywFiU32rsgfNWRV",
  "key24": "JjQf3jwfkJmfySa4HHpfBDWWxr41HSpvB3XNaEm8jL56ZWrhXNvuJrM6jRuW2AzwYc8rZMxwQH88xBPbnh9aRxP",
  "key25": "2wjgdafskN2dWV4ZPzcJbJJHSJAJjBkLjE2Ydfm63EsfS2JiCjAr7dzZjkbxZrzwm42vBm3eGqS67WT7rFZqyjuX",
  "key26": "2jvuXtrXHNzyiR7HQSWoGDmjDZB71TqiE92zUpfzMbsaJvgRASuAMDTtYa1tTnCdWQFsRHjLCvHvjxvsMFcgPukd",
  "key27": "5u72CEN55e7m6oHGTq3z9Gm5coFyN2eZRKvnkK1ie8NAVbZvvX8TZkA4Um74QW8pFZhhqUk2Mv9Gk4wPU1vgyDAM",
  "key28": "1aWfAz1ajw3WyQoQXRcb7H7zBFfDzc5rDPCinFuDZhK1tnKP4KAGcv6ttzYn4e4ymsfocapChWQfkYb9SWyeA8r",
  "key29": "4x4UvyyyQYuAxvSp7rmf98QXBVJbi6j27LTASX2iy6D1WL8trfEcxr4zjPTxQGSJ12ZrYoDf3keSxvxWt9ZJDCgc",
  "key30": "TT47WVtGd2ov8yb93wJydpAF1kTPHxzxreg8KG8VJczRFdtRPLJwKikvQbswmnnjRVy57rzHFTpUNik1duxPMkf",
  "key31": "2x55gJTt8K3WqQ216Cvu8h3UEd5pj6G8z6xpoLdQayjEu2spz8an1UxQUVaj4BUpPF72SVcafjeUjjAvtWJ5xyRB",
  "key32": "5rRsoZrD3jjQ2TCyrh2f8kkKFE8PUGSxEG6zsVo7r7G3V9B43gPDsAD22qH3uTqWQw4nP6kkRvRF2APKdS2KVj4V",
  "key33": "2dq6CnAe4hU7Zu3vxfy9nBJJxeGq3gH9vorHKs3YUK2nQLaMRtP7DFFbpihZ9VUyFLsthDjSRxKA5MpckZVgzpBz"
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
