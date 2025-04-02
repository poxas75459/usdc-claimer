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
    "3b9TuDhpcuJh45asssTpnr66DhqjXSNKzW1C8gPzNbzb2hu2FimBDRGBcbwbvw5Jey6B55chHpxxbre5W2boU1AY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o1fBaJxF4APYFgHKFgf4cisNw6WoT617F99nrxD5LuYH6UFvFQqkS4fcNjML17EDi8Y6uZNAXxUvssNFVefUYow",
  "key1": "NwLDGxcgP1RkNh58JLXTFfrmjZ1EYHyf7F1YuoHckNdVBUqv74WK4KEBgMfMnmBG1vDtx8dAHzdEQMgct2NxFvs",
  "key2": "mLJMce28xEAv5XFPsvmBVULtXK4tNVExyAb5XXHet4QbKWtDx9fAcZMWUYgkPkVwsFV2z1CPuuM3zq7zmVLzxi9",
  "key3": "2EDpdGDZoVbU3Xz7rgjMMRBjJFxCrQaUFez7iZEogBAYa7v5nTmHzFiFk1YpN8dXEGYi8t3oNxbfy3Gy6W21LqtG",
  "key4": "4JivJQ43vnVpkxjuvA8RDZSk2MeqSwCFsGPCGBfcUuXbJLaR8z2XwhykNchUf3vE9MdtahkaWonRFq1Uzmnd9xVu",
  "key5": "4GgCSWtXW95H9Yo8CQryB24bZrZvaRymZ2QRMnAeSxBfEx2FzbwCPvEXn6JTNj4xTbrdM6LQ8sym1LaM3NpQvE4a",
  "key6": "4qwD3dN8qb31J8zfuqf2sB3gzC7JosgBjBqMJ87XCpLoja5ZibALUQVD7HzR681aYoVFmz98cF1SmjA2Z3xrm1Ri",
  "key7": "5wqwhNZHeaGArpPaQi6SiANpmB74NXVLk6SczLn5vsQq5MasJAYzDbCmTqEF6dwYkPuMc8GJpDB9MJyEu7gsv3eP",
  "key8": "4u2ta8MnLK7dd4AmDC7pZ9iSzARPV9nSxmCpsJaRNg9WzfrnCmR2CviL8DyR49ugmJSFV5BgvxJdqGjVDwCYNGQd",
  "key9": "2VGSzhNLRz4GdmbyLB6CxK9LiVUCpKHqMGj7Sueaf3v9esxXXpPN6bBiUemYJnD8jaMqXAFoKcqHdPbo44vwxpNE",
  "key10": "4JE18vTm5Y7sEk4GwjSsCkCkEFK4rEhofQnevUqTXomtBG9YQxbaHpFzzr4BpMbtDdNmscK6u7rRAdYh3sAfDqLw",
  "key11": "5DYARngjkUJFU8fPwQTPvwJZSHC6wXyPqkedgCt5bTRV7nTdGS4GEcxhLx1k88RjJrZzQJZuUj6F6HdA7HMAezZh",
  "key12": "4hyRwt2zxnfaMThjMZ2aTC5XbYbhXXhreGPu8z6wNbFggQw7K8MTdjAvmS92bZhVWD1ER9jgRjjbZj2Wv8VNe2tK",
  "key13": "2t7oPW6XpCuRRGYAVT9QtLNhQPbjuYg1Yjwr36voM6sPYiLtTNXJmMb5sUF92eMe5V5Mjr5tTjK67ttm1KW4sUen",
  "key14": "2JEuaaUwjYQAvhMRaMSSNhwdcXexNUujQ3JRiX7voFB394itMSosiFK4R8K3qiC1HDe6ZpzyjTSd4F7U8cFmrnk7",
  "key15": "297vetrhVy1Cxd1y2Pvtd4uCeoK7iKhyZSu6SsH95VxsHuRCSKHVZQmixZKmnHKaESodkZYagmwHy5oyfBTHJzyE",
  "key16": "2SS7zQ2NRcUnjF2txgtMh1iwE2ykBzs4GFp2UW9YohjWMXRngsm6JmKiBcasL3vkazAAbj9wcarfGrGarveLeP1E",
  "key17": "5saoKb2eot71ecYmDNCYgr8RSHUJrj8mJdenVRE1smEoS9ymWNoDttBw3RKBVMQDWk8ZKG3Hynfaj67ba1z9ekc5",
  "key18": "2gFBV9LkJu6pAwMKGeMxb74BSRER8zyXaAPgP5Sy2PyPw4dWyQZgADK1YUGeTbeLYeYyzA14fFePjG4NQn8g6j85",
  "key19": "5r975Ly2FRiPoqDkrAAYfUhGt2fW29mnw5edgWiHNicEpSoEC7FLJ6ZZPP9nXVBDZWQVoe6ThabqqRSg8AaqdDEG",
  "key20": "4ez6Rpa4Xc6PswE6VyHLuEp8hsbPRZQgXuWwuBHWh2bUarhYTVm41Y4mGdrz3vAFgboVCV8Byz5xXcxmjKgvzVvX",
  "key21": "2QNkUmdksk6WxKFcqCDoigQB3Psuh3M2EJK8nWbUNV46RNHNjG8hdNmfUgiF2PYWsph9Z298PiLq33HVPxkXp4Qu",
  "key22": "2wAqunix8zK72ABWtw3aVVmc749oXtB5rAVZD7xR9BGAMHNbZuYMGFYNxwMp6cvTa17BLKQwLST3RpFrfAPsMACZ",
  "key23": "65rF19BSvpXyJGVbHhaLJMXZYPJ4gKgdSj5S5TX9jt5kKtcMzgTq3BjSC2CYc5twCxaav8cDXhxL7ALNuy6n4Ber",
  "key24": "2oefo8xohuKvwV41i1QdkuF8QroRkR2jaomaAtv53F6Lv9dPwQfTowGHxLcn168YrzTGWw5Td5uxxz9cDpG2j3eb",
  "key25": "4N8e4hCgfiqm6XqMP9DLUx7Anwwscb3rMCRNRGaf5XhAvggLeeKa72a4iFuY1xEoGdKQzGE4tP2fWB74dSyD7ULr",
  "key26": "3DSQJWZWWzMCZTHxxY12JevLRXLB8uWuK6GuifzYxcVj7q8zUmJE14kz2DGULnZc8c2ExbWSkenSK545EEJVHEiG",
  "key27": "57uLE8PtqmYDqbsTBe3r6rv4xrgBa6dLdmq1FtvkLoD27uQPbud3Eb2iAaKv3JuiaJcfqbiLRi8F9p2GStmgqzZz",
  "key28": "2bygkBLd5ZHTA2TeoGsYGe3CmZhuVziLse337LtvGC4cP39pCx7tS2q7Vuw5Smawz9YS1W1cYy4KsrnmE3kBMrNJ",
  "key29": "5pvoM73KbUwj5JBeZCcFSzt2PdhpK1JH5tNdx8KEyaizFKNj5uJrrh1hPurJzDxXiR34ZCpNBaQKQneX8yVxdXGF",
  "key30": "56ZuCNpDxKbwBJEEE8Qjez3HPgwzbEfuKtw77fwmDJMooskcsp9icDpwh3safFXamToUnjUrxDcdqjBkJgfHkXzP",
  "key31": "38R76r1XS5P5QvwdTRsKXrWkV2gKXMjvqfofAFZdChrLHsaeCT8wvznVQsUdbRbD2XMVsGAQzPCgoaU14CwikkGb",
  "key32": "4t1rTqfh9iyNcFryZLkStjasn1LGujsQW8azxuQzuxhmErPz1vwWM21VdCBk1BgHnYnZii1b3uasraPVgXiax15R",
  "key33": "5LEmtQvPwM7mf3Xm2vCtDCgXnd7f7iYxf5uZVhtsLHdbBtdL2fdsbWZgQrJk67FqoN7BBmrcKKhrjfKvCWVN6aor",
  "key34": "YHCL8Kp7qFmdhsBANTn48Y2dsKwWzLNrsS8HoCH5sip1mzkXqGHK25KEd97ztzEBdgsiAw2Yzdm8q2gBPAZidVU"
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
