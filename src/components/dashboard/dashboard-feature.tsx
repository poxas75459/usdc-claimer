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
    "5N4QFRku6R4jDzmaQbbBYVuFWTqWJE2DXPu5gzMGXB3EbppB8Cnspqby5EPsXp6teKAd5DMC4DfBC7rHkNt5zkdp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38G5qke9q1z83upcxKQDjGBU8iTJMvNff1d6vEUto1qv2a4DqVFsAXvDdtLmBZPAQP5X9boHohsKGKD75nhfTUkh",
  "key1": "39U6HmbU5zFdhzwV6UAwZhXeEL9qWHyyaNSzPBbLmUvphi8uZeNVnvZCdgKwBjrDhg39SL9ph4KpoNm6LyFC9ACw",
  "key2": "35Q9YGM4BY3wQLWojM6Lb78vxkoXdLKasTfA6ouSb83vM6EfuJ5ygZSfqQb8D9iRRR5TDWK2VkfnX1tZdDY1stSK",
  "key3": "jYnBysZex3oTqbJd1SmxkphUVJ7pfLYqszvrBUH87xRT5XSjw15PDFnCxF2Vj3UrDrDT9T2xUzrsJzNieqieuyv",
  "key4": "2fk3iy1H6GSs2L2pzUowYeJViTNz3tirW1SfCuBCdWXo7cxtoL27UfcxA1fYCiTcD8dwPrEPkoGdhicLUqJ8Z6vM",
  "key5": "5qg7RkXxHKuifAsyjGZ3Qr6HJySUGxd95eM52Dey3r3EG9qZha4vxudKVTK1uKoG2xisdHWaBkoLxruC7imtkGMg",
  "key6": "3fdX8u9gCe5S5sWCwh4oWeBWGx9WXn47BaDZeqYVMB1nDiA5XMFNDU6b1obS9gErZpkPV2aTrsRFYYUEcYWzEsC7",
  "key7": "5RvzJsRS3Mhm3gWhHxuwWJZkuxZPMEgbeq9h4ksXVNd8irHDHWYuLtV93UxfrdVr7aJWLMXB3ipwqZ8KKb5ZHeY5",
  "key8": "5DwFpWmSrXsAEjeSULjXdAeARwFny6xN7YN8ww8cZetK8xiwbJdJbwr9UX69Ez7SnAVSf6uP26Sv16FuGTTeLACu",
  "key9": "4NsXVSQLsBYs5v8UsT9VkvgJRuKk5LmEw1yuFAGqoyAU4dmpd2woEdBZhQRAtkMWUmZpVe6AsWirijEoDtk5yf2y",
  "key10": "4Dx7p5X1t5WeLhoXTQtGdBiKKxaHK6f8Rea7Bsg3RoPtYBmiApsKcvau9m5KiJsh1sneg7LA9H21ifPksUzn6fFR",
  "key11": "45ABWSG3cv55kqwy3PTuwupz7dUFRUHV7Wj6xqpkm9djEHKhE9e4eTTHU7T8oFdQzUBDMYhqPX6xHrSitg3NFSfj",
  "key12": "5txFJMeEC5XuNQ9GuRyx2sauBC7CAMEXEAYiUC87qsQM1eufhr2Cqs6sNmd2sEHLhmgeoQ2xnNLVm3mmKfdwtUcK",
  "key13": "4UzjjJ3M3rATPDoM66ksximEJnujJ4B5PXEyibtuqZah3E3YnqWD4K5ArfkbF9nqCJFwRVuE38Z7tMAUirsPGqy5",
  "key14": "3Qy26d2NfgE7LQwGuBeu8quK4r18g12awbthncPoz9AYHNMgCffXsjmDK1WY5mYerjAKwM7393iqGxcbeWMTHdUd",
  "key15": "5Gi9sVP88DybeafEhFTBwHNwZzrPYM5qcCr7Cc51UGAriry74GqG23r9pWrkuWgJH2MWM6Sq17yiQrYv61rLoNy8",
  "key16": "4MD1wZfNijx7Y1qGHmGuAnRmzrZXsFTwN2uHGbYq7kndu7SAmKcvTWAYN35L2WqiSVuShzdxDKHAiDDahpGDRTXJ",
  "key17": "4DkhVAanDBZz25pujyo9aBqooeF7FLzHsYLDVzekP2b3v9W4vNfTq1renLVDZ9RXQYJznZBvS9qLagJEuhkbwmeu",
  "key18": "3LhNnvQL3LGozDVDWM1o6ytipqshc6GRdhzPmTmabLEfv2AfZBiSV1Vku8mG4hrnvQqAEcYpkwxfL3KgiFuSVBWQ",
  "key19": "3irFsBLAANsJ5ZDYFrMpDkXYtkLd7d9uU5qKLMkT1fnHHr7qTRHRzi4jVUNAFzqXnsiLQhsHviWXi7e69SKYH5qE",
  "key20": "2wGUxDfAzB2GvguuMD5m3fvCBU17SCNu3xECYNfLGJdgDW8BLoViisBjW1UUyKryPs9fFnjrTTr39dB1Wf5KzgWk",
  "key21": "2Q4RthsiUMj5gYf9Gt57TDpKc4UxH5QVo6tDzcetLrghfbCvyYU5x3cAsfa4DDaaGmEwSikpDscJ71vy7Fc1Fxs6",
  "key22": "5RfnispuXZcNqfPqmoW3JuoygqgZCyxMjFwiKwNsYidPRWW4Aexr14ApJFhS8KrQ95XTTjTmR9VnGrNGNjxU5WhY",
  "key23": "2LVAhwFokjd1u4PV8Zpqm3B2B9EtzbZYazHkkNd1Luxfqxmcz61Bktjrmri6vhHWJdFTB9pp8Qo17BGoepEBYiu9",
  "key24": "4u41cF8MZFQGsrGZDcCvC5YdmjdAdZd67GxExFBUxjQbPLu71aYkAUgiyLuTnJHKe5tyxP6y5bae3cShnbQxBrLu",
  "key25": "66oDqwJxgLAtVCtWWmf3yQbRsXGZnft6Smju1Jumij3sjoi5mgS6MdE7NSfUiA8C23UFhg2mhXmAzypN3ayVpKKi",
  "key26": "4wZmHFtrqDSLhMjts8mzjT6QAjjguyyuCyX9aqVvx69HUDxsT9vPULkhTUnFEcHXiKN9sypfs3hiM6CtQCUvo25i",
  "key27": "3g7SuZqg3sWKSjEn7md6uKYEYRVCQp7iBAiqM8aVpAZZDT26zZn53N4xGZLEufae1zJQH8ggDW34PyqjN84toDST",
  "key28": "iYaaE3enPPAbdqkWCQxRGJarks5N1KJ6Y4EVCMCATqYhMo7a1p3v5r45B5YAwSP8T9kiEBkHWLMXmLYZywQhsEy",
  "key29": "3BEdTV1FDNDU9R9kJiE3DZBUR9i4NXpgMS7TDLqfpzB5NkDNUPVDAUWXgqvnqRXAdGZRdof3dRXchY6h9swNWyya",
  "key30": "2tRTMrJmX4J2adF7JXSz3G3htFLTT8cMLgfdSBiH1GJ2mQ4QJbcZ1ax49b5eAQbPEJWzfPmtMpw7io61G4SKhRCg",
  "key31": "5gQiK764Vf7m3pHKWus1oV5Y38P1dDN6ZvhQuMWAfJmQsdmLx1y2Qfg4KwYf9Aa8CTmiEoGP57Q2hGSD6CddGsiZ",
  "key32": "5GT4KZeeBhYpNwDJZSYorEkZtCq8DJQ8uinqEuF8jXsh4R4zNAsB1TWcdSfbLW65qUtKrMxoT56zptq9xhUE4nG1",
  "key33": "51P4waQxpJAYsw55cYxfSgafabPB6TmLnuvCskhD6Wk5K37DZA8SyAbB9H8W1f3vQ6hwhagtMetRiDkTEekPTPe",
  "key34": "4JrWbVMFkMCJYeFTRAvC9GdyzH43v4rckzfDLFt2fqwCwGjtmaRDevHdrUhxKVE5pSw83NTnWNpwmwkzKXatQ8w5",
  "key35": "2dZ6FAYLqDgNUEgvZ1p5wJjxNKwoLMcQhATSNcrcdt3JMrxLiKqUai4c9mz42wEozi1tL4bqn3D1HySpZX9EtwLf",
  "key36": "3CRSMVhc2E4XLHNyTKBv2t6UXRhrUyF8NTvhDh1YGVJbMDkuf9wjpv5g8gbnX2hPT92z8q4Sng8oTUpy2Gh73Uw9",
  "key37": "4i6G2VmtzDQvMGJuYy8Ydurn3b8n3XD9nZ3WasoTUQi9mGK2VT4aqow4DGBXR1ivZGy6bWgiztKhZ1crGSdcVSXQ",
  "key38": "45EvhkAWH6dBwu1LhdZRQLFkSi9UEQyX4Lf9JGbgPkfaA8bBPeTNa4nVpXYzENbQTM1p74cHGmzbkPXsA3QnzJ9b",
  "key39": "435uzbP2DtFiRKv4whd2uvXvTFqaesANbwmBAXn7cGGP6ZFu3F3MZiTH5X7weGDwnd3TZ1NoCQ9hhexWm8T4wRD",
  "key40": "2iNiMeTfMAgFpnrnBf2GdQQ2uEEHogBScPzbAFYduRxUuvf8ZfgR6yjPMuGK6Hmh9zVBUz8DA3mWdNZ4cVTuATyz",
  "key41": "3isTZJXrheuBwZbiCGGvuugRWGivmLa5XQkU639cGMqox5TXBj8WK5tnNbJAeNVfvdUAwVe8QWNgzBNz75ib3n2Q",
  "key42": "47jf5NPSzsESY9x92LeZUrkQTZEpvMRcZfuJbhNqvQBRfQ17CfKvgPaeS4Fe57S5vwPQdfzxjH6JPH3wdvq5hVAE",
  "key43": "fEBGvLZFWrWaSY8jB6AF1PyhkTStFWPisf5ackVoRDwhXsWMdDFcy4JJBw5xF1AKvN74tuCqUhgVB3B4PhsWg33",
  "key44": "SizK6kjBk57nhxcTRPqz2Cyd9jpfKmvzHR4ZcXdSg4T8LzeiUASqXnF9dGvyhASzWtsurEKGU31SYMiadigv581",
  "key45": "3zta5xEXDnATmX3CBj5WNeaeqUuPhbKu7vAFrBPG9JHKiMz6UJfWHWZQu4q4k84C71V9hr7wGkNCtWAydt7tWSVm"
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
