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
    "3VZfziQLFvienuAS2GV4dkRZcUr6kWGLukeHFr3yxejCmySUKuwiteDQ8LT2FhNcYvWwRUBzdAx6JkZAj1N4RRdj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kaCeq7WzanqJrQSYfCVPX8hL9NhN83t5GLqB8wwVNse6X6ZFHaKPZ5BtnrfWmHKodAdvSVuPMiuJRR7JEyWoaUp",
  "key1": "4skShpAkm12GCErzk9F3cf9ie952uLcD16W78dprUvjWu9uygw6RPBQNgprTtU8KBVLzh4K6HNTHtxU49R1zWP1b",
  "key2": "YCz6EAo7mmtztuHDDW6nwoex5wVN43K1MmHDu1Q7rDkZQDkeL64fH55pHxPhVUTNChMAuRBMhprTJZ5Z8jK9pf5",
  "key3": "3THMVLhDfQqVdPyuLyWeQbS6wuyvYK5k48aenkG4vUYDEFdfsPWXjbaz28TKCoqzdYmezLc36vQDT3dJi5GuALgo",
  "key4": "4qc1ktXJ73Bi4pLamVYqgCBdpxNHxuTd9ibnNvxkhq4DUiGBEUPjmfqEReK3xR43FmgiahAUgUDUsSG9voharaem",
  "key5": "478dFc1Qb6LXWokpLRswgKdzRbZdvnTMfGanAXe2XdeE23SY8YFNADiGm1St7tQvneTaGwrBaHU6bdJdXVz7hufd",
  "key6": "3ZugXG5FqsGSFmmxCr2pgMmf25njqgvdVkTm6HqevWf6DodaB2nHdfp6Sf65cL19aVATCSxZfpNmUP5XmcPRbke5",
  "key7": "zgm2LthgJmshieJzFfXYzzDbzjm9q2VqCQMY2TLfFqsfCyXWYGjZADpAQCwU64GVQRjS2mx1GZjnNbgJs5zfJaX",
  "key8": "2cCGmhym6xymztjeQyrEzAnDnQCkmBahUD4skV3h5ZTW2QUbmEyhKUY5dR9PMyWFeuvqjvptfiPBqCo8Bco7RrX5",
  "key9": "2U9GGbm3iyVqUsxmdgAKpdfuCEEVBt33ZSQfFn7P3ihLTHujVqGE3oicdxazbsiG3xKbC7ZbKA3PBVA9ztBd4Zrm",
  "key10": "3yog5kb8GgbJ1Jxkng43aXd6CPXExh5Z7zTGmmfugcpthtPWk7EUpN2QV4Be2Dyn9tFXS9uLsAPJ8HGmJnbp2MnN",
  "key11": "3jwTyZJ25AjWx32XLnVwrpTVjQRnjJAg41hyTehef6ZSnkiF76vRFiKvCQ1Sy8kQdqvUfuu5kLEQkuMMhT3mVHpL",
  "key12": "T1Pp1P8CmY16rpjkJKi1NhGAqHfcqLXhktGBQxCJqTnoKptCnxnMw9Py9cKYbfp8A9ExRLq2qTNR3JFihadWaaq",
  "key13": "JCi9akARGHfC1Zuy19KFvbbeKnGJMsQ6edST2wuor976mFkmXbsesmYDjXujPhzuSQV3mWdtKSJtKZRntdeGoW3",
  "key14": "2nmYNZkYTehD6tfjNVAvfDJnZ33S5P3TQCXekvFBChYXRmw1vnGgckgG22t7ksYKZs9RUoFmGASCJyCr8BiCBN7r",
  "key15": "4U1ZYmboAsALSgy5P2egPabZDfrBUybd9jDs3NYdJFRuBKmoAPnWpDuiHYCqn7KPRMTuCNBD4ZoRkMY6W9GZ275K",
  "key16": "67VVPhEei6K8BJjo7XxFyQ1Tvsks5ggEpZJFLYUfXfNiuyoniEurQtfV5peoKTigZtGQQNbQZPQMKduDz7UtK52u",
  "key17": "3YXgAgw5HwU76c1ed1Ve9ZhH1fMe1YFTpRNCyL9NrupWu6PndkjFtCtVAi9JiJuGW9dGXpgqf5T8SxtusbZoivAN",
  "key18": "4n4eAZijPjuk2hmwZ5K4E3Xd4tzRj3AGzuDzXqTzPwKEESiAm5sYAELQV72RxtHEpXyLuV8TabEEWR9u1hmGvjnj",
  "key19": "3E6B3YSXJrNXmYi243x6sMmKfqacyswvhbk1E3MezWyXCYChox7NbT8az8DydVSXzU8nTwzzgT2aoqTxQEp2Y6Dq",
  "key20": "63QfhuwqRLU4VyasSSQmevbDNfRrNrx6puWBhR1qEJ8waKErH5UXrt7vfdF1ZmzGEYwuy47PAeTt8rgzjqJn3czL",
  "key21": "3YoQDD7NPhawBMjsxkRdQH1eaGvkXUtgE9gfywwzqZpse9f2yPziXwoqWY1adwAsDE3piean3nKx7brET8gPJvT7",
  "key22": "3H66EnwFNdWBGgdbWq4BTDxCoYhyzSGT6naK7XigCSbPmpUrM2GGeDbFNNJiWa2N9WondRcVSVgCfxyuBiP6km7U",
  "key23": "4r4VzWbn2T7PdhTmcrN5nwnjMkt92YVCpxdjUh9cGtn2vWb5WoRZqot5t1tfQ2jZW3kNKB1peNR4vqBV442UDQZc",
  "key24": "2vENYRWtk4a4ecWAD52jA6jNqJqVCfhdANUxVERufsdxgED7dRJ9fhfDqRULKf8qm51txxE1CfAFcKsGpFWToa7S",
  "key25": "3D3MJwux1GPrAVVRRtEiDRZ2wxoHKaaWiGmLteuyuFSJErPNQcUsQ2ifQngnAuEM5fTbhzzfhkV5tQWeAxeATQsG",
  "key26": "4okYzh7dRNgVudSReXQYtHznvdb1wFKN6Yzokm5DnQGq2iMiJZGnnjH2iLnoZAjaBykWcVKMaqb67DfaqGdkrykS",
  "key27": "3jiezhhj6FoJPsF5HxbQC7GBcX8fgbcTBAbpULNGPrxnHDJExwaZH69Z2bPdzi8EPszWNhXyQyE4uCqzGC2KCMkR",
  "key28": "4wNpaqz5whkmY7woHgbaFE7W5b7k5SLSSKDgYRwKpsH7hYAzR2YB9EerafZjkLPyLBW1rPHjRaC3QuckqzftUrjP",
  "key29": "5MKMagVyKFRHYu7GZaewiRRDAHsnahtBjQk3RVqBiNvMinbq4BsA9kV5shiqNBteHDuYGtsYgAbRK4Ko2m2idUKQ",
  "key30": "4UF5Q5YqzeQT6p6XePSgixJNR1XvkYKZjewLoZ3ncXjbdg3Z5gLE5Q6pFecxAUofVdwjjsjrt5fhMoyFS1kyByPd",
  "key31": "K1o6S8MypTLTgCCh4DP5HaTERK7xmCNN37nsHCUTD3XWreA25qLAFTryNVonfUP8NGpbpXcRoHuE54StF56Bhd7",
  "key32": "48n7cjvWdswzLV43p1CjgN4VqgmcbgsMPJbU44aN1sf7N9L9shwazEigVdkfYWLN7BAqYoZKEyLrpz8Fms5x2iLB",
  "key33": "2uSv35AbtChWSJW4y5YzqgND84sdhd1GzyE1cb5wKYm2EKnW7FUwUaa5L67XW1qFbBQUqQRrJgJFAZoXhGV9wseD",
  "key34": "5wUea3Twpuw5SH5JwwxXjFefnEx2g56exh4q9F6wXcgP77jdHu1UQ8B4hS5s2HF4eUC1JdyHe3RPLeJAnzMX9VoL",
  "key35": "2XJoEFy7oSaFNzzfMQNBXVeZA7Cjb9ugduWF2VEBB5ANwZvTrkkDwHkAhkScJTriUNBfC2rV3qm51m4jN1gqvDjJ",
  "key36": "3rw9xbVfHDLbMtN3omFG4vyoHYgFhHHMXppVZJPE219nErDuP4mT8eJq8vkjMjw9XPYCVbLcCiWJVef1syQUKahs",
  "key37": "Y4Tiq7uV3bmmPabDagGbWbPx1r812Cb1DESyors6eeMGs1YG7R3X8GxXL1Sm4mdZKaesvyxvHy7xHMSLaa585pJ",
  "key38": "KpENh5PNAERn5NV4GyC3XauLUxnJRAkoKFaPwUJM2yecTJ9Vd5Hqro7Lfu4Mfiz27nRp1BoqNvkBCzs7pvRPq8c",
  "key39": "3FEaGWiyqQzZ6hfkCfhuUWWwpn15C5fmucCTAiRkHDQdyNEyHgDTJisfpHB1xQEMJhVKgWRWNkNN4b2SHNCWoniP",
  "key40": "3zjxuu27WUumAtZ6eZiY1JvEXZourC7c6G36zo4rAJFag6EbGHahbEBC4tkCfDCc2Ashb2onqdfuXR23AruFUL5a",
  "key41": "5n3fMB1QPK5GC6JsjAvKC8BQ1dmiRUo3U96vu6VdHkXjJJJVZ4pmEH6mhLp2io3u1zn5JjTLYCXZm7X3XggjDKYZ"
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
