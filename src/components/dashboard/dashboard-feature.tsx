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
    "2miutu9LKHVVknkSZXUwsSGLLZmEDTHjXx9hcCwMkX8mcFVPTJhETxNNP1GBbnWUmoVNA88jk2Ph26DHpYQfCrwb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1BBGWZWfBMP4ZnTtszsp5wBR2o5MMkAmSTdq5ma3KKdZEo77thTbeZwrGcWHrFebAZtKL5qDAHcZX1KpRV6D5Pe",
  "key1": "QqqPRiesgctThe7opPDRwqVvzkdr39F7LTggMfLKNzcdxD31i5g1UKyaVKKXaX6wvUSEXaT2jmgM9722D1UGX2x",
  "key2": "5Ty6mKDJMKzWJVt93RtQCpNm7wRrJH4hJs5Mtiq2YpcNb9YtXtYQhGt8YpHLrHcUghk33FsV6on8bpZTooARNsCy",
  "key3": "4HuHaARkJAqFbwDSKJ8Kcnom21aN9k7bG6z1giCmjCEfQcT87yJjSNUTGoMKmUiyza9SzeZsTM2j9Xeshi2iRwMo",
  "key4": "4hHGyDioW7eELCfD9VepbxMRvhFcDN9N3pJd8GeGscju8QZyGLcMrjTXVbh1CfbCrDSL9cfTXr74o7SGNJRi1zch",
  "key5": "gEVrnBnuA2MnmxKYEu7thdXFH2nMzEvPHNnEAthqgcUY8XWZLgni6Utvg6AfEoUNKSD3N3djA6GqqeMu9SoNnZj",
  "key6": "5mPcWhL89GUNhQ2tCf2qLp61Rk5H3DBJ6G7Nmr4JTgvinth5Kha45scHo9HKArfukXuFo8Re2xCWdMKdvDWfCtzc",
  "key7": "5xmkayX3saM8WRFHY7z2jJx7jZ2M6YtrjB6hWCinXwRiVvx3XNRpeCKszVy2gBfupuyzxyLHYzTbf3TapsYqrnR5",
  "key8": "ud61qzctA6yV7pEprgBXtQxwSGMoakYEBF1CgTQq4Q83RjorT1RsD3XQ8CjU9mEzw89EEUDhQDibqpcM4moxZPm",
  "key9": "64ngz7cCQsRDFJjLzvwQbw64Xhus5cQirUURjbepSJWoN3gthBRF95MS1Q7uA2fZ8Qw5wi6FHvxhf7wW8AJTEFvz",
  "key10": "VwXZYTCdeVtyFtZD8AMFTkqDEZk5XSCGV1zLo6W9zxBkrAcaHou1EBNxJfSxvQBYxZPTZRg8v9nGudf6PR1DvhE",
  "key11": "5xXvg2Jbc4rEfB7PqyNeRiMaAxbJkHM19GkUANwiVNhgDXU8tKLNANeHD4Grq9EQ7QEUTvShbJbmec421Te2bxBV",
  "key12": "2xGJ6VuzYrSvy2fcFBUjQ7fDiHqTbLgmLqWm1z5c3EztEVKBycE8hoJvwBfBjDg3muar9ier6DDxd52Xy3xHiws6",
  "key13": "571hqs3oBowQWdEdC7sPeE2wE9zUzwEQoG5cUcZpjZ4trj1njRqZirJdmadyJ1QJeejLrNvruGS5rA1BWXj6WpGg",
  "key14": "suxB1xd5uWxoijUMRjh6BgcxyErActMCPEhq3YkSCTsWgbgyiGXy2PXm3i5K4bU2XXUjZnySxgE6ZPHsUkmnxiA",
  "key15": "2UM57YF8uzCRZLbDunpF8GgtHTgPJKVSQaPEMp7CWu7dYrWH7oETFgwNgJu2MQfNiXfyCqQDr1z2aF4gJ5s1pdAm",
  "key16": "j4s9cRfiYgg52zuBx3fE8ePEdLopqW2zrX5171GwxNVKZpsV1WXdH4jyXmAdvrhGerqBZH7p28ZQWWVSZznuf8T",
  "key17": "5NyeexRTfwFHk8CY3rVYSqV7wqy8Cdi2sydPLhiYuadQVgvntYoZayGMQyBNyWZ681UfWrAtrUN5rzUc2XuwvPT3",
  "key18": "4KkxAj3Bjdz6Xn3keG8VP9j2HuewfvwKqZ5q6MATa7nMUQXk5iBqatnWHr5WqrAsy111Ftg2zKtcbiDsHinTU8Hf",
  "key19": "uCtwXuwPKf32aa81kw9SgPQmzBM1cvrrM5SyFnvuYTcJrdLueQxbH2vihYqG7VuFU7o5RgXmRzJHnULcfQAZKw5",
  "key20": "52rGKu4HSofyuik2ZhGat8o4BH8viJmx8Fu9xa9LiyvuVCp44cLPS9YEafcPLN8JLhkic4v9upQSte83cGCKZBiG",
  "key21": "3574cr1DrbWyrwCoW1VB1wsjZWHibYp4J4i5Kv8ADHNisCNzu1oXofpZDU6m2X4FSzxR88vfyqMZb1hFpurbmWo6",
  "key22": "iWfAKrHepUgKH5r4qMKovusz4LyyW4z3tb1kw1SGschPP8jnLPNq3emLqFAukq8P755aWrocfXXJKmT97Uj1ZfA",
  "key23": "5pt6QE2U11bwigM4CBdJffQmVerEhbTLgdMhW8KokiMc2hSYzoE4XkrQVJXHogUS9MMjAdxxM7MxUkpm7rNkKL58",
  "key24": "5X72HCR1LkGGcBh8Lp72rLAtz21ogEtpdQqBXm8rhpF25w617ATpoA6C21TtrpbYDue6NUQkYkhfBqnnMnyFXkVf",
  "key25": "5ppizPvLHTsWFd9sAvfizV1P5UzrpkL968bTuda5Uh2sp9bvKy28Kx7whtHNUBfcMdse6reH1wBdQzt6xjJMHF7h",
  "key26": "3r8PEEGRepYSEMVxnfd24FPghmtwVyMkKPcT8wY7NobzRMuf1NbBpZ5vmGrTPLR1yco39KbQfGXpb8FjM6Gimg3D",
  "key27": "5j1KcGShuviLEcSqUb6XzJASzRWXy9Z6i5mNbaqvMDDLekVHLFy9ajmWk7tKJBeHbUnxCCMZGfg5d9Ls9tk3Teiy",
  "key28": "4obobzHCkUPZ8aP1hk841sNH7VFHofS2eV16yo7nULKpm49GRKd1QMK7HGi8SpiQuUMSvc9Q7CSkQgCvJnCQZEzT",
  "key29": "2XNu2G2WQ36qrPpDt8UHtnFq76UtSFyWSGiX4tZFEsBmxme2r9MuCb3ydPdVjWhs1djvq6G6uh8oyaS17VcT7Htc",
  "key30": "2xBDaC4Q1khUFC1YbAZ8fnGwUaz5o1DDvXVBJfM5QM3owM8vtuLimoHSrY4LC8FkTyiCVtPGNv9gH3jSRShspudZ",
  "key31": "4VFK3LsVuPhGFoeEP2mTquyLUwGbaXh39JjmDKXd7cvgwtYfZgpGVjmThHRFzbfHDH5KXhLvsYBrSvBdWus3tqJT",
  "key32": "2YUaUQct4sD63VsBWbD6ZLoDkgGWja1BPCYR5DAnV6FYC86Gk1m5mEsS5RX4X5Q4BALrKqEofzYWam3Lkfy32VXK",
  "key33": "5fr3V9xgfCBPz787zR78Fd3N3TNw4AZK6qTePUzUa4SLgVanMLQtAeBdthdfREE83qyLZPJxCYUAiqyzq1f32qju",
  "key34": "5tMtz4BqFvnVW292Fxo3pVRHUWiptQ7MVXhVqZQ2wUDqgp1RvGwc4NZ24cBFGeFtVvKYf2xJuKiyW8fJDHRYyxbH",
  "key35": "21G3WTmKyF724F2k9Hfp5HJhdkrmRRoYNsu527iczZQjb4dy498NchN2kchPFv6TvGgM3fRU599wSNHzxa2MF4P2",
  "key36": "5c4mGBDDFvx1ybNU4cfEKcWCmCYM4UTvCCM1xHWpZ7UTJ2RZe56kmRU5wSQNGsCRFzYKNkgBCQiRmbde2hvWUxYV",
  "key37": "1K3bm5mSudL46xi2M5P6he4PNRUyUoYEfwiKbuh1vhzXZUeEhMxN4yJXwVjZ9BogVK54hGNQp5NcLmpE4u2vScN",
  "key38": "3FWMnQiBQDtjVdsPdUyKpF4XhdYeDpMHrNj4P71BPCfJ3qYsZJsSi8hgYTmAqB5DpGduYqpVHyff9FiHxmcPWwaY",
  "key39": "2U26wiB9XmQCPixd4voZCC2oFkS9kseoEX2MKXcwsFD9dAZA7AZPd8Cdts36DZ3Lyri9zTWbS9VA94mdtUwdNjbR"
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
