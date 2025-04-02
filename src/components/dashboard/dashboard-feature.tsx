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
    "26zPKC8z1H4EbmDz19Du5qwEhZt8DbpqnsxwMVemncYhWAq1R6C7dV8rig1FYRHNUsQHZDMswvGbR2w7Z5sFYJYC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sLz1UGN7QRnL7CFG9nLYwpZ3nooabxwi6ugc85k5ZMhwmKBuu3gKYTts7z81c725VGkncQLq4Q1VRfGazv5Xd3D",
  "key1": "5oWKKsp85A6eiA6sMT5pCdjJYAkKeDj8AX9T27KpYHVNPBveKgckaEtmdibSw2Bawyi7cqADAbzT7Ct7kfZpmScU",
  "key2": "3LCHowCfTFd3mSx8p2nPdxcjrEvqVpdXAKSomP5NNhng993Eig1gt1f9sse765fqp4Z6Jhrw67TFQFL1kob5879u",
  "key3": "2uAc8mv81Hk9GKpvgL5Rj2Nm1LovSf6fFtsqV41dicRR6xFSRjUofMRuAqgSF4VghEDhkdXSjxxi4TfP7dSD9vjG",
  "key4": "nEYHTxpBnJag7aGXj13Sommc5dt6iEqnheFPZXoQam1ATswbDqxFyumX9xjjKx9Qur3YiJRZ6VXfhA7PnZQV7n8",
  "key5": "jTTXhuEfz8jARHy6Vebi6sFkLrgKckcLnzQ8FutKJEUYGTGrnA6G7rKC3VvendQGPkUV9Fe5C5kb9H8NT5uJNiW",
  "key6": "2WwTue9YYoCtePiAoGmk2sNygaavQbXsnGRwckT5YDM8LEz8LQu4e9VujKWRgyuF6eCVGKU8H2Foscuus8bQmEct",
  "key7": "42S9FexFs8SSXG3MeHEpWStEgBxaot5vsFiBp4y6hxwxpgyoMQdJiXL6e2KJEHQmvDzeHg1H4ezLVJMorv1wU5Ym",
  "key8": "3TLuMWAt2jqaCAzNvgH6xuPN5jhwSryws7WzjTZnvpTUpkCRyCmAMJ66e7XrnUZdFnJjWsjAcFaqC4osWu4uKd3Y",
  "key9": "4jT2WrYhfgJEH68CecEcxuDRPsBGbDR6NHnvN9auSwXaDcTgudDWmyS6x9Zj7sPhjQM6epVL9A3vexjQXvnpwUjc",
  "key10": "4zN8z5oLL7SszqqbogceCb3NoUtJR35LU4q4rAQgNFcJZZPVFpiEWPbRRa4xZ8fAsN6PeH5Um9GQhnCdiWDsD4uy",
  "key11": "axArHkXifdnkorWRzEUSAEe7tiKgMAstEMUPrRcrQNZj4BhE61npsj27dSSCSLjt5DxrPagFQC69GfU5WH3ePBp",
  "key12": "4rVrLuBH3ArKcpjF48NJMxyth62WmZwyGDmsMGN6PdDpwmiGphMFggygYeyCZMvQrwLTZtVYpNZsZWfAgi5foZge",
  "key13": "3HGQxHPm5Xiazym33cXdMEUN22Bv2w2v4XgHU7hUGkv4FbwYASJrBQKV7YyYUSmRwhg8DhHmkmrHir49tQuU9Qef",
  "key14": "2ZZfgeYMQGx3kvDf3oWWx7UCja1rER9yksZpr4kVkCVYTiKXDANJLDE4tKTouLxNPD2FguXjynb21BLx3SWLfAC2",
  "key15": "5noaBrSX3otaWHcQSXgUaamq64nihHVxusXaoTwGBgt6SdgbVqWNe7odvxeJgKqeBgxoZaZNzeA8kFdfsYwquA9s",
  "key16": "3y8VvJcz9YuJj38yZys7CaMFTkXzncebA17p6hukoeJ5McgbLrNinxxww2isHeDMA1F4LVPv7uvGGiWtkMpAC9op",
  "key17": "3HssQoAPpueUEqBJRqNgqM918BnmxqCssBXFtHSMAsCKwwUQYikVvA6xkGB2W6JM3DVMtDuQroDQCGmsnFQZVWYU",
  "key18": "43PLhp551noHU4oAkbynZpn6HYBfn6aoK4rYVBsDjDbRPLVeAs1QBFVx6HU6pVYKXchiF7w6yXXPFZByS9dYWNJD",
  "key19": "45BiGFBwBM6EdNZnZJ5J8hjEs51SwgqfGA6SBnTpNHypTB4EXXn5PC9RoXkzEEbQspepeQi81TzLuVb1bVHFTbaY",
  "key20": "whsCBoYuGADhtAJDtJxViFmndWZWpYyLVron5koFM1FH1CbyBA9o4kJHdGS4sZK2ooFCZjK93L7KXP6ACkLGw8n",
  "key21": "2mg3TS49sCDfpqu4k1aR6zLmxScWBcjbLh2kj7afqgRekxSPRS7nj3Dxpgi7XF29KeuJYncNwU9CNQSjfBYPhDdA",
  "key22": "51TunGLoZfLCD3mjzFhLVkH4TLtjvjHo9N6VFFLsARf2dVEpwb26FaQ3BsB5wKnMtawJDVa6epcqZdVCWSBHF5Nz",
  "key23": "4fELWqCg3wdV5SEUmgAPeobRFReQgYDinaWNsT7hocg4WwHG9kz8fLPMCe2YMQtbe1Z2LrWbyhmy339YfAfg5tAC",
  "key24": "4ZZKdcsiT84uEiDS5Z6rxxPwV3VNMC7fDfbrq2nrgBQHDcwKgDzME1RpNYLURgicTgqYySg7QcyKmAVrFtuhRk5T",
  "key25": "5dz1eDu2D5uzCmu89DbPimfbeBXfC7GyNpWuBrG9T88D8iX4x8m2gCFTyBNYewdE1FfiUKtQrai1SWgTnU8A3tRt",
  "key26": "5BH1j8QmRdmGuRGAVoEiK7DzFHFP3xbxufDhtTQRnG9M9Kk1bMfVy94S9Kb7cCiD653pPwTeBmqun2fQjA9pFDRd",
  "key27": "2Qu8mj3izGjHLE9WV7VoQoX2w3UPExnh6HigQFz3KRnG4QQBrwi4F37eGZLfWHmqp9MAfmRi8kA6CxJWK8CGKsXh",
  "key28": "67ffKNAnbkvGU3wdCAAbXLwQskQnF4Bi6M534SyT83edWuBHRLiNju3gXiJjzgxbkiG8QZMFDZkzMhiMCKGmHaC4",
  "key29": "4wP8om6mqbq53kzBa8CKHwfMhQzRb6Nq31Bybkt6ZTPbqBuz9tpLXoxniEAg5hFrFoewgFCdYBzRidNzEWkMAFZF",
  "key30": "rqbDqZr2WMS5zddga94eGmR3MfboLRrYM4D1T7AnsFjmcEDvTQHkpXACrt7JiypJVeSRn9Fa6iWMfSkcWoGoQgA",
  "key31": "4a6AfQDGYNmXnhoJ1sKt9vo89bgJYgt6RCrHu7h56muhcwBQL2C5PDLUM2V47yYNAWLwdoLA6hBvz55mNbZP17Mh",
  "key32": "5BCaJvqXx1udXvnncCwFccijv1r6WWsRvhYwVvzTJ4WM3yhXeLkQd8ivF1bCSKYaxzz2oyTMCqQAGwcAXRqruzYm",
  "key33": "Lc46ENAniFCCfKViwWonPq3QwkaCcMbBT4ssovsq2PpzrpSP48zWyj8NuF2gWYVd8yRnq9zYanwMuHHujWGa3Nn",
  "key34": "5t1oX4F6tnk9BUvSKXfwcDRPfDSaD1kyComBacrsyRRrGhCypo71jr1BULaYoEWqLYTXDzrtqzffH7rXJKhhKY7z",
  "key35": "3Y7s9rLg2nMsBbze9xvRnrh99VgZYbAN2CbFoRwTUSqeQcWwHBJh2Xwjek95cothjU2MBMRoNE4A8ydBQCQkjZuP",
  "key36": "38YBVKx2txQoHtyb6aks6X4MJjJCXJihKW6kjttpzPiG4eZj1CDBgDNwNiSFiDLLkiAH6Vpyq3utfPU7pG4W2EkD",
  "key37": "gedcouVDkYKJHXney8cB55JmA61P76ZXEfiCocXdnK2eVmBTb3M88da7kdA62UZonMs1bjEyjxYxjhzPvRbRPrW",
  "key38": "3sy5RsW6YPVrg2Yrc3UHKdQEPGeiEFb2yzRj1Mgh64ASjuRFtGQJSpCGJCZHZwoecuW4qcSkgAmRSfGG9hrHJnvG",
  "key39": "65acSR6QNKdGyPwd2VWjfGkpQih38fyrjZS3kcFLVMVb7Gy8GWxrAWf4BoAmZbRxvyYTKZb5LRJbb3XTU4bu3ZM9"
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
