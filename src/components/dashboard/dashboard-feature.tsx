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
    "Kn4HVk12hQ4q38f5okStth5M4nyTJ2jWEvtym1DqNHdXxc9NBsk312FkKXBrVLxBWRi7oHkEmNLWRbHzwekHUzo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4daadRjRfuhN2Xyf5jcARajKmTRpQKVeeX9oZyunq38Gj8E85EUGhRP9iGqDZmgWkieGeAGzCT9EeXM7SxR3jKfG",
  "key1": "5GR8M2WGB7Ypg4S3pN7W1st9gs1zBA7nL11vkfAVujmdKeX14CBySc9tpGJPC6MhpysdwpCRjCsSzRFWCErkdaai",
  "key2": "4vZ1bFumUoG95d65626php55CfKADttsaSXRp9MKaMrA4eTpkezDH19RKc46b7qDHDAZCWuY61PtnKsjjcBBqUsM",
  "key3": "3GSAW4jjB7hka11BB8wsYNEhJina2DQB8Mmk9HLQ48yZE9dZDW3C3WtXNW9fLoeopRsUZEJsyMr6cFkXyRdzBmP2",
  "key4": "3QfkCJjcARvPKpgGsg6Pjb9Wd9Qt6eejc7qWm8MWPn6KfdgkF3zYoVnwkLHjX9SWniTx9usikxxfWMauMbwo9ZRA",
  "key5": "SChgHSnjTQ8fHgRAcwm1A6FNr1ncokHp6Rx1PqSRiKxvTeAd3GuM2LtBpgZ7kDhJmZ6FuiTyi8YN4sc3Ujh9gEG",
  "key6": "51veBJS7ijnDb7U5MtiCsV3ceKSniQadFGGJj2wokMMjbESSK4x3Femb9CnS5Q31QfZm6sLzBTErhjh79YMH9TMJ",
  "key7": "SpSbwwrWNXrbn1rKuZkYLriYDfiiUaB9KBuUVgNYj7jbktz1ReQzGN1HayWrRDXm8nqBhM7tdStPGmyjagKhLzA",
  "key8": "3HhftyTt42YLtse3VTBtkEY3XsgP3k7pz9jWcrFEFgGWnj1q4Wo84rucDvh3Q3Dm36aPDn1oM6eqmJPZm1pHBYW6",
  "key9": "5soP5kbhpppURfMR6eqtVzJqjQLqiBKMTuYJ5s21cCCop5tR8kxA3GoN8VpXAqNYg7VzjPNpoKLVQygKfPWuM5aF",
  "key10": "3ff3FNVwDa3JER2bmCWdhX6y9jqvPJBNpcyxmxHH6S5WYdhvuscxNX139uwgEABMh2an8Pyc3N8fhCUHh9Jt2Q5v",
  "key11": "2dyVbV7ZRUQT3v1ceAiRfQQEEZviPspMW1cVRBvzw1x5YkcSHhRJv62nrsRwLoRYMHa315uRiQuc2NAn4Kkz1juB",
  "key12": "5DBZ7Ms6TPPmBftzHyX2bAd9g5FtbT2GrYt61B4ijvEmUeJzqNcrXKUkLhSL1UiGwTnMCz4eMGJBDNEMmnZAtvbW",
  "key13": "3frLeb1iUouF6R2ifAQ4pNZA21JYereAQryz5BEi6whqq424NrHM4JNY5tyTMWzewFHStzhcCaemDurEyrNAVJcV",
  "key14": "3TdmjszWTQhQBtLMtcgkxFhMw8PFUHa8Gsx3Qu6xT1PEXQ4a5zrfzuyQgY6BykhNXbe3jr16XAVhWZQw8gxejnKv",
  "key15": "5uvVE94FMnbsZmubrLq4qEgnot7WHDPtH95PfvND9RUmreNXzJHWDAdFDwVEmXuGPqSm9UdSkx6LtksYJhNJMVta",
  "key16": "4bucYaTmA3AqQq7DBX1UxSdrrYLMYyo1tWyzkfzXB3e67o7V3XhGuYfV4Aqas39wyugc2DEEPsg2Ysps62d4vavT",
  "key17": "DR1hVAH2ZYUVRs9rgd92zxfLbnayEFe8vYpVcHUAv2BaEejFQixc8kqjh7DyzQbWVsfqrJJ6G8a9bghK9ypkdnG",
  "key18": "3a5oTU64ecP1GJnkWkPzbuTfrcmyydTXJN9nBnMWYdRXesDqbAYj952mRkhjFHin1HPXa3J8zLWbHFRiZywBYRhm",
  "key19": "4nZSwiDS98cprpeX6L2CsbReokiCufRBCzQQ4gXKp4reRfuuvBfAuPAh83EwxkURQgQzoPd1kPKKFQK9yDYoemLn",
  "key20": "f7DLKzYsFisvh63VRo2ywj9zbwyVKzQ8PixeDgzd3tdr5eTBRgK8YvQtERJ79JZo85A54Q5JkN2Ksn7a2cuATTT",
  "key21": "5mDDCre3ymWtrNBCcT3RGqQuKeA6cHEfcAK1j75kNWaWMNKeu3K36qCKm81iCbzkrxi3WoYg4h7zsbMCMnr6TarH",
  "key22": "5HmBf317uUXezGgPeNWFshpVj2Ut6qEnrkVXGWuk2uNrWFRuTA9fSFirJdgcuGYVzV2MPag9aecqDzH62fEg5in4",
  "key23": "4Nio3ju6qZLkVj45KEeMG6DpFqNTa7BtTWvVZJLdifHBFfAxHb9okAobjXBzEwYFS1koumAzjFxTZMfeDYZGkaMs",
  "key24": "3g3DZgC4uAQBJfxuvM7h6TpgmUaWtHWrMmB8H2tXZggKxLvggA4tNFq6buTEqpaXkmgTpYPjN9NAs498U9QCmtm1",
  "key25": "5Be3LCSdGQmdr1VV3845LxhvSxgiZyp1ho8cPAiiAqEqjbVBq5TuwGo65K1FwtmUWJH1iyUBFxntGCfQjGTFZtSA",
  "key26": "56XPzYt3AFrfYoBk31AKfDm41yxNdMo6Q24xSh6UAvUJR1BxA9zRkHDF23qbTCjLLhavx1rqGUuVmTssJLas7YEC",
  "key27": "2DmNg1nZW2W8wt2MSN31hs9JwdiaVkZj3YczkAzxT26K3Vydaii1a6Lhbg6MGzKHSvPaKKmEicHSq1UGCv66ieYD",
  "key28": "5cTGxMfgm1YHtW1uwdb61KvLc7ptJB5m7qgoCCHv7iqt46zmRCS2xcVKw7RpJhF83xFgWvfmxFnyEvFcUSxreiXi",
  "key29": "3mCJDxqkzwXDcJhfgrz9NW7T8qB9FsA97qNZBxddBXg9BkuxURwEkZnGchgYy1FtdX1opuScLeGGH76AjQvCc4RB",
  "key30": "24FQdvLKkMevNy35AzDvx8vAAm2e5MAg9yyoFDXjrTcjrh6fzBNy3hNhZLQ2zZccjA6QxowL2HyceaGNcZY6Gw6u",
  "key31": "3cL7hpGNqt57mjMRkwg93Y3fCizsQXfgRCDDfwEoxKJYPtGxVzUuWBvbaXXXHebY9T3r2D6xLsRGoXxnCsH2zS5Y",
  "key32": "4tF6bcwSBYyr5Ym1EihUo4RNwQhF9czP6XWazG3x4RQUsCzaXqL9yhUn9iuotWowPfNinR4NJ5R5w4CLGQCk1W3f",
  "key33": "3ZR2y5khwAZTXDyxEXdCM3kK57krhuNFDz7c9aum1izqnKpYduTZ11yNNbJVqXUvfipX5dG9P2gCoKHvK4w84Cyw",
  "key34": "4WLxG7EnqMbgRQufBHMhHfpAdmaoB2AACZNi5MbMVefLeWPmv6UBZU5z4Hx56mj1xfjPXvjuRu3A3hwmbrxvkW1p",
  "key35": "5mjgCRmKFbaGQwrdTvLKNj2AApsTzTojXshx15Ku16uBuBtjcFi3F42PPvbgeXGynpWzcGW3nJQC9RoAh7zuBmKq",
  "key36": "2Q6QHHwWQ6q8e5hoiNGrFJqBhvkKNK3GAC7WtdxMv7zfaojkLhQJCuAMerkf4d9C1Dk3WVB3TZHtquRReMx9uWT2",
  "key37": "3pcSNpShg2M7krH2hTs4EFJjb7en3ZzaBejGYAcGxGFA8LhjKpX7nDAMQzMc1tVx2hBB42DccASrmmrHzzRPUU6U",
  "key38": "543YGy2DweHudEiVFBsisi4zBPzXcmbMv7ngeFxRnz7ASNphNE5DyY52Vh2aordRAjBfDemr5ChA8LRz538p3C1j",
  "key39": "2FXq1GkLffU27Dz1x9uH5y56XMrZgWa9VrBp4SwKz44jP9Wv92mCMna7M342obyWN63JCExJLAZuZ3ueZYa8M4ZB",
  "key40": "5NqgpoPJknbpyLRLQZG6FSSsRs2VRcd81M48kv7eLK7xYudcGeyfcLeFDiGNkHociY4BYsUzqYpDtN2mMH9envC9",
  "key41": "23JpZT4VwmAeYindefiHSpYaVRr6Ehai3xJXycZ5xds9fEANT3vShJcRS7cFJANYMdrggK2PT4hr5pQzaDfF6f7m",
  "key42": "MBZALbec1LPABNWDSwEVVbpusVVReuqm6hp64T5iQWguPV2EiPG8EMmJW7UrtPfYnki1zNGSrND1jG7ozGMYS5C",
  "key43": "4WkaJrDbTXRaqeto4p2j6ULri5iB565ACAxmV47JPcs566Z2LHracHLftSrXZQ3WfhudLo5Pvix5PK3DF2b3S6FE",
  "key44": "hKnFnL5DaSVKxR7HA8Xg6x7Evj1ep71jye751ACT2br7Kw1S3f4Vg2SG6yT8nzt45jWJDt1v6mw8p3aJdf3RDkT",
  "key45": "5qUGA2CAUcsQ9xrXbvaEtb3fWMa9ARL8Gbxg8wq7p1JyYhAuZpKH5Tg4RLLpRzLDwmo7fbJVsSFsd5TDpqm9euRb",
  "key46": "65u8sf3P3APvFi6wgJJ7Z9JvocTcMtjzXNm2JjCc2vfKM71gD9wnwU3HoNn5Mwo6BG2Tw5bqUCQ6mFBKkHfbQ9Lu",
  "key47": "629FzDC5Y81fBnge6wYq6WLhqEmQnmZhJkEFFyJYB5jhasTEW5BGkkxv92pgcFREFcCf1sQQRfUUq56kiS8S9kUZ",
  "key48": "4zwVi3XMjv7UX2aujPdyBLnMVAfYNRzs77gbs7iZtKbnujfTtf7hGqdsRyncHjCbQCkLTRAYAQHUJqYmbCRKpm5d",
  "key49": "2MjQ2K4hWRZ8T5yQ4cQUkVZYFgRiSpUhuroj5fYDBabfgPppvCgudTUUg4PoWYzpgdqJbEW63aD7TbUP8hWihkcY"
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
