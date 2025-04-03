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
    "65WYL2A7qRsaDvxv22orMRuHz7tuLPkp7JUCLGJw5ESQiyTtAb8Rhwisajkg4HDD49BzRqBC4c82pk7dWyVmUB7X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hBMTf9iMPdETBUpv378refUVSecet3vBscGZiFfUo5PeiYuRzLANZfueYUBAyPXpy5kTkVapEGkUA5qBtsnQ8RV",
  "key1": "2PbXLRgQkqAxFNNTnSZj57tGNAZoLXfHiBiPhcXH53BbtjMrnNhGTgDRdoz8LVrkQDZEEb4nzFAFh6B9j5gWEkVo",
  "key2": "2W6kReD54XHt5YXYAC6h2bLz8g7iHK8Ak4EWuhud4AfZC1NcQeLWqfmEDrQwxXHfTUemdE4TUgC6CbJkksLidFcK",
  "key3": "5MMLBrqmdEMunpQMcfC48pDG4cW6QhLjgdswb9AjkB1Phy8dNfkrcHoBwWMgMcg9Sfwq57AQxJY2vgbtuoEHaMn9",
  "key4": "5tZQp65nZVsG1sERrYKpuYCetVaJf5tFwt7XfELm7QUKkRztLpmjPFWEyHtKe6Sp74S1xb69o6vXisLYXtYTWK5z",
  "key5": "3X9LJNev8WqFn3TumjUcWQNKvvZ5LAhUo2fwEdFhqaMRWznHFy2TKyWhwB9HrxsxkBMwqh32X6aZYR3u8qgosnha",
  "key6": "2r1dwDbvJcmHRCxCgEkc7QsgkAABA1J1SXQ1sXWGuq9LiTWY7Ex88s5hjbPoKC9WmT7ZSuRehgnUYgSNhMeByaVE",
  "key7": "42gMxibU2RJqVtawzzCNpsRR35E4Bs56f2oooquy4wW4Px6BubgG1jcQU364SsYjuNc3RvsobTpQ6eMKTbm5bBzz",
  "key8": "kSWw6GVJ65wNvmb9qLXMBMc9mzUkapdujENgNN1YxHuiAfj3BV5w15ofoJcHj8A5tD5gv8GBo4R13rzzE4TTbdG",
  "key9": "4voQDk74DnjiH8n8bLUiFhhn3F84dy6Vcf3HnVmmZv25uJAM3P9aVPyhaswVFvHiXpVuJSTFvZZcoqNr7fxqmyW2",
  "key10": "3yxtavFRxXarQNzVyTwNhY6uMUwQRwTkDuWWnijHWJj8uLVJ1DMujt3qkhPxXBG2T4hx9otecQoVLqtAN5SUi7fJ",
  "key11": "61fEymNaCXNBWtDMYzphLYSGqTucTcMLms8fQMaENEM4TKE3TLRbinf2VVJt9QTCUhQhQWe3gXPSHy5YYjCpLi9y",
  "key12": "273pbCpxwQG9mji2jPFa2Srby14QCm3o1WYPQBWX8poWtZczSYwcjZs6EyiqnfiAkeioefFLtYMZ5t3nY9CWUdm2",
  "key13": "4NYg2UGryJAi9Ubb1Jx2YmDD6Ws4q9ijSHqR5V1cb8QHD4Ge14wJdWBNexNVU7J7yvpPfw3QW7HHNDW2k7uxauQm",
  "key14": "3FtSHRsZdY53X4pDQhKbrhCnVTtx5WjAPXWgVhcc1oFET9Eg7P69GvZc3Too5cstnLemcGMar4sDgaEmfiH83UPn",
  "key15": "KsD7CRmU8xY7mgG1csyMGBWY4s64BVJsgZ2MHSLxtDSbSBf797tZVLX5UiKuU2TeDVhpxvwjb4sBGyJrgNrj6jW",
  "key16": "5sNWutQ6yALnqrEfniv4iqx2KiAmkYtFxRBbkLiW6hARM3FUBdUhVveSaxySFLkqLyiNv1akga9FSig92LUbNCEc",
  "key17": "2dBzFXJ1FbWmrUj5VUD5bJGLMRHEvSQFcCP8YhnwAu37p4Lsw7np3FtpC7q6r8SeV8kxKzSGdq6s1KsUkM2Cdy1X",
  "key18": "3UebmDGCPB6ebHhgrFLeRDqd2PJZhnDK3zvsgkUKAcWj7ZK6egN9aBrTPb98mSDw5MsrHXqjaFrwzNLNd5iLxJKT",
  "key19": "3L1XD3X7fWVGHpHbA7RcYHDy8vXhi7Cgt7K9DbuHrBt6YMdkpNKdvT8FU1z2VHMSe1RJAAFG6cLHXXDsw28ScLkF",
  "key20": "2F34Jv4pq9nHCMT15XXqE4FBJhAJfTNXHavEcLiRC1SpdPGf7Q9yRdXsDJDJLH3nPG4XMv4qNHPhkzYwLUJyzP1t",
  "key21": "2px6Q6WjbrsTuFuPEzkwYvHj5QZ9M5txNawhaQgLVsVYiPKFSmMDAmW4TBfwhoocVqBTaEEwWRqH5hf3GQxwbJJd",
  "key22": "4b341VMbTE6gHyJAeyfQwGAfjrYcWNiCxK7h81GKdhyZvUj5juyBxF12sFzcbx7TgJCPhzNUpYNfW7ZkNVGZbkXB",
  "key23": "3qquqi525sMQQskbknsPzuyvXctqteoALwnLBCJgRD2MZ6WUKBZXtF9meQyp4NU31py6oiUAfQKREFL96rnFTiEi",
  "key24": "jmc7MFhwQANeTvZwR7WBFeUTGYFpWxe7BBBhmihpPG2E2tWyS7oxPGB1Nc7iVz6QAVgGr2Ssh5jDqjS1bNEHcvh",
  "key25": "4h7fWD8vPWNUDgy5y84dnHRT6HA8vYfGLMazkLNU8oCvujD8YAqrW56EbxmChPzBDmmZdcaMkkvXX6EnXeVNW5gG",
  "key26": "55mxW8iF45cKhAhvDjyzmgCxnkpnL6MHMZoyGPKpH1vb59NHuLN3Z2uCLqqMqQ2tfnHiUFGYAyVRYL7PDVUojgdV",
  "key27": "4y6bWf1dFRPHdRY7jB2gekER4sJ9yUQcaQZNAKKBXjxhL14A8YjyxMp8JMKPSX3vkqBPHZg7vU1UzuTeDFtLvuqN",
  "key28": "3TzJBbCDru4tpukgtEoqrFkUrroj5DD8KJmCBni6Uk6Rucqcro1gbvntKeZdWB6desU9B1MuTEmsrzbJC4Th3sT2",
  "key29": "5sr4Rk7CG1XvEMp43CfAfNyEvy25JgGHSyAQeC23f6rPnc5vvqod8NkgPkWBGzNtUqmKhs8SZmBLVXsTqA323PfR",
  "key30": "5UT3bmWvGXXZigHt2zUU158CBMZUQotkZbaXP9ra2cRV1ewwdDQNUQPfDa5LkjLXiGyi4Gy21zVT7AqT51UKq3nk"
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
