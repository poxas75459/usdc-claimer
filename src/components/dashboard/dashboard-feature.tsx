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
    "25yGrhXav6a9RJ27EeXCMD2QRZowmypgEEEHYpwSAFP1L22WGsf1vsubDkDY6wa7NMtwQGY3cJcU8uuj9GBC32FU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36WtSAWac96oCXTzhiZxh9BhTrrPMUfnNfPrAyWjnh1esXthoYVjYCK3YC9eCtGcukZSy4QXa2t7RHWHkAdjdV9n",
  "key1": "2BdwrMnhxfosT1Pikb9t4aqqqBJbiHw2NLeV8NDKSvCvaCiTTerrQnN83QMxC7etiFErnMRvQaRxYaaqWjbWbq6z",
  "key2": "2HAcCB1Mo7UnaCpoU3kqL4QDZuoxEttixBWo2Qpvp2UhdsGjxdzXKJkNHCWV5uNTgmcBrtyVqZRmM545SA4sWutT",
  "key3": "5ETLUXcY1y5ivo6PHzHjyFLWfAgiYZA41SThxWLDSjVFj37FFsCnpAvZ51KHDoH3rnm5k8u6TkSryZUMGsvwH7YU",
  "key4": "4b3rczY68XSQP9GG5XgvobiNBZb8ciarvBdarcMixTMi9JiVyraCxhWLAT2NT8w8SeK3sgDRUTRAex5BXcdnubWH",
  "key5": "3SUvyCM9Af2qmAGLpPmKooiY9a5mzjEiF7CrMKy7ztNHdFLRqqfMh45mmWzVdo13614HYGtQ2xTpWnQjfc8iNPf",
  "key6": "5TZVZdwWwabe8212DQ8xvFWGAW6oUYdGtCxjAqbHfT6g9mnB1SM8R6EWPb3ANzY3EEwiuc1xa84Amur1Lcreybop",
  "key7": "4rCiqSvyBtnx97qhgyBR4boqNDjVWoQH1kYrGRaEtMZZKaSsK78za3WR42PuMFTCBpAKFJdWBmayNjUfbWF4b2Ja",
  "key8": "3F8DKJfjusZrHSBbk8TREF7dqKTDJu79W8J39ozYxvhseeRgg53Hm3fcEYE6PDUKVyLnG3wWdvoiAzs3dYCch1MP",
  "key9": "3xL8BvVa9puM1LLxhPHutb8EY4dxwonzo2YuqyHzJFhkNLPBmENrV96owM733LpWA1QpYorSVVYqXHmNuNvos1LF",
  "key10": "3LTTD6YnUvobFtov79ZAHiHFyiqbuhHULQCJfFn2YJjUkoynCbe9S6McKCoUvEoaMm57ARPFUVpchyo4FiJ1FWEY",
  "key11": "59XyceriAzufHEMXyM7MM9pGUiKXu3Y1No76GYTHjxNnqcaYKbmDcvP65gV3MeQczBq3VDQseUKebCjtzJ23wu8g",
  "key12": "5QeR6g3y8xuiaYHiTr4pSoJkKkDPr2Dq3A9K27uvC4UFMsyBLuiJTEzUNecAD5jnk8Lx2NEQf8so6dijj41NDVqS",
  "key13": "5dCpaWWFJuiRxRGiBt2QKwkh4QL7UKnVQ9yymNGdvtTrybn2gRJ1aCGxe5bzRAntmnMs2QGPLc43QZWrbKMHFDPc",
  "key14": "2cz83YUkUX7sWYkhhMZHyShtzJcFL6WNUgsAG2JmdW3dUbmpmNa8uDnyX929rV2LaaG9xHNhz4DViXitpDuXgKSZ",
  "key15": "YapjG262zJPZrToeK9a3uBQN98AYqQWdkRosVZGqR1Lws3gX5RycksMHXdgd4g1SEot1dSVAXiwP4mBz9Hw2RvA",
  "key16": "C9rFPoazFpiqNf2mWvi6PniVKmniPrPycD1RUHKUiYBUcVkjRD7r8b549ebdqyZEYKZ1rcfmMr2r8PG7natCudC",
  "key17": "2ZhToueUVA2wYtani7pSK9AnWrsxA3J9MwEiBXyEMjxe6NNL4Jo4d6SdB47XEphEtkwTiRR2B9VJXdy9Fmm5HWv3",
  "key18": "3V1v87pGaGzkhjKxSpqnvpnKdzmPgaDKNEDrYHc1ECvZARpYukNSdXWbLosPmW9Et4mrEXQUx1hjqoHpjQeSje5f",
  "key19": "2HFbq8P5udjgXyf7KyrWvoHoKLgaB7t9hD59yHcr32TCByuGiDhX5Rxc1uT5FNmJUXGnqwoSD95n6ayVoYfVpmLr",
  "key20": "3wdSJ7ebGasN2NaDvJYyzEnp66Wo1uNbDfM5HmSJV4yCNJpLiP1vszchAZ5ZDt4gGW4r4Bv1Zjhgdf5JCoANSWw3",
  "key21": "NiAJLub21dsjR7WLknXy2QSH4kqXhxC1osup7vHNBpmMucy7qmjxW9QEB7RjQm2dEr54Jpekh7eGfQEGr2DKoSk",
  "key22": "Z6uybRwft2S3V4rAuTZX6m5ESQsCdgQY1AKU5zhdGdd3hxpR5CkwsvrbE1H8hwCbZXquJEsc4JM1LkBwuS9UBBF",
  "key23": "5aFGds6SYecnjcK7f4QQ8kCGeBRkkWXBj19zhmY8fcW8osYL7Q2N4pqsFFxsu5E7n9VAQhs7ZPuPDgSnoDHeLXxA",
  "key24": "3rRNrhk8iUSGVBwZ1LcAKxQXLnMA7xceUn7JyWnq7tBEV7zwiSh3qjt2xisBajhBsfGHVejyg1zHbtmetQa74L41",
  "key25": "5UEPoDSbN5E7EuVRwK81xTxU8xPAwenyDyhfvy6PW6e6imxjQ9ad3QDP6TykpdZyU2qTiQb2DfihjJDv6sZT8HX9",
  "key26": "b2GhZH9qCgphXmYUhfvkzUdm2FexeBPgs9GKWYWmXiDDx81dfp5K1cNSNHrxUnDBmDbRsRtHjebnFFeaptNfLbn",
  "key27": "3yQPwAKYsuRAeHMGpDWsyetsdrgvXBuKWFKcvbU1azvo984Qw9KWATtMB5dx4PJaPxGnyd4vUrfWETGHZ2xKT7o8",
  "key28": "2uLUxrVQJCpLBgnkdBMzPj285YuW5qSzhk93C8D4tW2mTUiK6KUfiw3mKLwQ928p53gdkh9JPegZo7xXsHh63FBA",
  "key29": "3LawY9oPkph1neh8LXisKPjpCk999VTxk6Lyxz9R3dAXbpyCujTCqYG9BuWfEUoczJ87TfUCbTr3f9cHwBgDUynz",
  "key30": "4g39h2n5DaYZD4xZ3seWojdq9AFdXkNr3emnHxaMS9kEgnLfBnZmsGfKrAfiD8UgXcPPhVmjnRhVwcx2A3ix6SVY",
  "key31": "JDZobdc1TFPH5HcELGGzoSLEhdXEPGvQurFK88PPtZSCRyUfV8FPNeEHPXc4ZvUGMt4rtWynwp4BgnwvmezH4cx",
  "key32": "4K9BEQr2Q9c3qL48QfKqzb82reQUW2iXZRaAH44RXiWoyfPQcZzVdB6M5iGzUhmpeqcEWr1WFp3AEaFPTwVXnF2D",
  "key33": "2MUmxtQ7aWu4SBbxy4vLYPrLk7Lxx2RFBi9mE9rS5SmUAFdN3iyxNC2H3FVSWTfhd3deQUJRV8cXjLtJRKf2AxEC",
  "key34": "2EidXUKrgDY7FFanwQhrNs7tFY33RMU1qzEGyCcH3Yj36jw876R2f8uwQYFefpn9tVmfagyUTv9oYbpEuiCNMsHh",
  "key35": "5xWddHvvmWy3aTWQX3mcaqgjp4faBP3qa26MckfB4TmvmDdJn8cKvLx18bAP7K8V9mRJTWJfCTDooRf62zQZ4R6m",
  "key36": "5btgW3CbCU1hfJJ58uT3V51uEvuGWEre5Zayd4bLaReLFTDh9DZwyxKHhnYZ5PGFRmXwm61SUFVJXYwT8CQQ2pVa",
  "key37": "LtMFzYAQRCK6CLVucBtPj6WFnrZNCMML3YNEzvL3cy2UW4rRvPwVnj6w1Sp41MWRYbBSXZEAnUHgZnivuvY1a5G",
  "key38": "2iXbcdUo11WiMFySV1812YKmAoVEhKE7dGDsRwZpCd8EzYd8PKw4GYAzdL9M4iA1kVBNr3rz3447qnU7UFCnB1PM",
  "key39": "5xfPckCevKKorArayAbsmUX4VWcDAkYdcskRdsUeMf5sQRGgtG1phKWkpL7ADg2XWb4EHDJx536BVHCbaf6EXwzD",
  "key40": "2LgBBoSJvB5VJ8jKEWPY6ZVKpmviMqhXZyeDaWDGQduvtcnrgtuiyCRwz3Ahwg3BnuFjHJetGJcRCnfrQ3dAccPa",
  "key41": "65b9ZczAX18kbrWDraYJTqAS4M25JTDas5xdm5Wuofu2yh7Ux9gauPZTMZvc6PisyvYW1VLU5PoP5MHACo4hZkyC",
  "key42": "5WvrDSwB6BVKJxCBroAE1WQU3C9KSJpvPw18aWZkK17HJMkMqqMrncoc717vQ6fGYgU6VfmgKGoYHWWBcez2dayg"
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
