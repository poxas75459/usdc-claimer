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
    "28R6P64n8svroYLcLmYD7Fz4zyaVVBbeEwPKdtcTnc7Q3DpbyP3VpzLVFv9YnwHoGXxufLpYcMWihX5SFZpd8LHp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PwyFfNtFenZ5Ar2C8GmpJotBi9xHssiiNjwAb1WqaqEaWfaKT5VihAceD2hyjRpTUNsTFywEAB7bjg8T2am5dZn",
  "key1": "22HzQDV5445vWGX3htAc1jRTbFpPGNgmrbpEzPQTkidaeeBwKRePhV3UxBFhomas3QjS4V8WyU7WZpyVQs8qBEtd",
  "key2": "5s6Enjm2quAT4t9hkLXBuW3wFwLjDMYw81AgVBqXS4HMs3fiUJ9achTkp4dYbpyhMXzduKnR5ZpxaE5qey1oimUs",
  "key3": "3WoCFuakrxi2uStY6fKMSR9vVTsEGA2gujk9zJp9zq7xZKD5oSgmdNP7V7CeawC9MeKqr9veec3nboN82Y2gdTya",
  "key4": "3fM4gUGunhvNspRve5LXToLa5jSfmC94eGUGUHYo7R525boW4he9RmwSTRETN2FEKqezH7rRHuxiAbTxY7Q8sQ5V",
  "key5": "3EgunanBbpt6A5UgYmKS9pLoko3jxLCCzfC2xtRwpGLrzRPUMrWHzewDzxTcsx5Mn8efJw5naHjrRPeR4Sw3CAEb",
  "key6": "5sU3Y3Ghd9uVsVXJPZhSRTHiiSGJAdKEbkE93icCN9rHU9vGAArCjmZnB9nb9CqkLfTwCqXWbNFSRwNgfruzXdWk",
  "key7": "TUcBZMhA2QJqwQMno8fJhLscHvHSiq2Hne6it3crK1oZEaB8QC4UDdawRRLvVa5foiKjTqm8CMTKwNrHoSRv3nz",
  "key8": "ui7UugfTtFJf4MXT4SSkREwoMghZyGjPHvHBXd5rHfFCM7UdiYmPxziYFQteHd4NoqtM6Kk9LfTViVho5hhW1uH",
  "key9": "4BwHUjjapjj6zBHXCvxbhp8LVY1DaJ63P7RNrwWcsQiHAgrJxm2zSviyEKJotmrd1AiVV2JnPw7FkovnDJvEwvtW",
  "key10": "48YnQpaDQiWTPCmdZpKm2Z2aRyQMiZrWz5eVrC1vuqueHMmriiJ8rYVZnpooiLajtnpkNzDG1APxp3cm1mG95BHh",
  "key11": "65qgWEwG6BPfysDsTvU5L1TiD7mVa8Rci5vhthMzFSiRKnyFn9U7ZW5BLyrKydEDmeLkHXU1WoXz2kTdBFjqnNq4",
  "key12": "4Pphgng9feuJcR5EVuZsWV4qZDdvxcvsvu55VumiCdUaxEH3sMiSPoJ8mPXYJ3CBB1duBAdNMtWYJnkoyN9rfLgY",
  "key13": "2ntnHdTkyMYhdjrzXPvF3nAQvrXfGs7f3kSd6NCSFGsanBpzQeHTedqsT37VT9EfHFZCBKFFuns5XyFb8hGayd36",
  "key14": "2a2L9WMuhJPjUsS8EBJEyzWMai6BbBG4qmcqLzCxpx9kKyhR8xXs2j2c88aoTPzAokRmiGymR2SHDYGy5ZCorkyt",
  "key15": "7W4ogjthDf4vtFYZ5NB5GXxeR6c5FcUZcEfrz3KnGq1HHeWmov1S8184CjY2XTXFHP128mDNFkXu4jZpSGkNnbk",
  "key16": "3KFPZwegpzQxRVcUEhbZQRpupRKYpoeFsKP8e2kRrY62EnWcU6APpzggzrM4KsEVt1ZMgdzmuEVS88ByzgTWjdce",
  "key17": "4y5FRVjq28fG94wtHWGoFMeLVh75DYMNCNwfSjCoDCoujxtpohnQNPmdgTKArohnMw6iF8CjzaFDaPh7Rm6BAgNu",
  "key18": "Pft4Ye7zAuY6YdWzbhx7nUZ1ET2mdmiZgSr2ghz2t2gtyu2F2KH9afFmEmosvG8V6g2Nn2zdP7wGhXdS23tRdtc",
  "key19": "CTBBTrYgERokY92Pj7G4e9ZjnRMx91jV3BW5Nd8zw5SjDcvECu3yXQXq6WzCKipuT7QCBwNVFS7gDi8yhne1zSH",
  "key20": "4uVueAERBERn5QKo74njQAZCoNWoiDzqESCDaGH3E8Vgowc4KTgkn2a1KRNXyHdm4kfNxWQLu5ooTCsfpu4u3ZHk",
  "key21": "2KuxAswTbiGtw4XYboWJVPSUNXzS1VUQumyou6hoaBJRUFnBFqHZBj1Zz2TRAfREPkSrvo7HJorJM24suKkpjua",
  "key22": "58FJ5crqyrgw1Ezw6Z4oisThgsWet1P3hczeVKKuJ9RMSn5pSMJagUgeKC9ePoUV96iX1jhhKe4kPqapFgV83dgr",
  "key23": "4pH9guoUVcWbQN6AE3Q6trozDHECKL5Dv7uQRnYU2F8sKiKr49wpsVqPpa2ZCg3mo22MpghnUL1Y7VdxbZVDD97f",
  "key24": "5uuqLmRh3oRgvkkZMt3kHPhTSQibQvT7gLdwvegSS8NngmBHvLA4m2cccTXS5tLddF9ja53VzzbRah9SEb3PsSya",
  "key25": "vA8BgDaMNH2sub8qAkt8Zd2tKWRHyThUuSmGifVhgorqvweEkHZxGUjp1LRGHGGihDsp5ffqbi3wBzzyxT3EGk1",
  "key26": "2oL8jsTP1XsJs2rtchkE9L8RkRjKipuevsncYjVmQUA6BnDNaUkgyvNFWaaxeaUwqPpuTGfPgjmjuCxwuU4k4XED",
  "key27": "5LnQ9z5rFtz6BMuLMpDyBpJVBe7G3LLSo2LxZfi6bFXkrDJr23GdUZm2XTsAdyzv9zMas2t9d84EW3XJHozsqNto",
  "key28": "7vwfkyhF18HrdKcijtkfNd5KREkeaifcPAjEnanWFbQndhh51DPVo7F5hCDhXb6cMkBJTHaX8QbcSLUa37Qsh7p",
  "key29": "fHbJb44fxzxx9E4ogtS2hwufHF6TRwfgjzYB6L9jDztVKK3aRN2qwBEdpBggoauB4jiex6NbPPpp9cZaz1mEvDT",
  "key30": "3Uz9T5U3gHmFzPjwNvuP7VEgKysZ6ACbL1zLamf8oXouTyGo71UXnX2fed6nNa21R4aJnHhcNDszYCmcnz1wiyGA",
  "key31": "2aGLpCbPsDg9xXEvs8H1ayCxEBH2FNP7MHwkwgH8KWUoRkWuPoc9mZK1PWJkLW3BxzVVTJY75sZVGWit4UV6cCB8",
  "key32": "SyxKCf1p35ZU4SFsfpdRc7bmMg9LaHy5YwCJg5JbTB2edKwkpcYHEfZG5Na3MjGUAfbkQon3kNFXPAP16HqPVrJ",
  "key33": "53dcCukfPa19jNZtt6XQaSqVmc5Laf2FLuAtJJLboGCxrX5XH5zM4NEtKS6seZDH44LfmRCXeQ6uR1anyDPoNoE8",
  "key34": "26yavnm1eF2j9R8fV9WAEPUo1Hcwfz2CtFLCYFSdX8RnWRtYimU2hW2wTKr3yzJrZeoBZ8xsJYwcQWLzJ6pWjRuC",
  "key35": "3C27JafV2zc1pNpA8xhnQz1dCLH8q8Hk7UBFCh1u2J7MBpAdkgyqmCmACjwkspp7BL5rdpTCnWEN86xRTAFgxbuF",
  "key36": "2iBw3fx3jz4r7wRMotL8MsmBkwPL9XFHsZxHqZwfeJYK7Kb78J5FAENLvzGAu5zQ9YDxPx3JMhsqS2nzPt2kJ6Ts",
  "key37": "49qMRx2CaXDXUQnKxFXuwvphjb7cJh5uppPCWcWiF4kfgdVCgpGQXF2D2wVzNkNhre2tZvVHNAjfQcqEV6dkTJ4r",
  "key38": "3EUUU2Bf8DKRA6LtXNjwfdL1Nsocs9h5YDXhRfVgMKjrFcy8r8JTG98vupXhVgpshoDczTUDGbqfKHy4SRV2EuQp",
  "key39": "5QWxN2wWC6suk1kTyS9hxzBTDGQC9UHRPeq3Xk7vAkaiPgFDFegDZqSyGBqwfmznamo5GcuAPfUzSvYhQc9XZUo6",
  "key40": "5DdDpWs4aD5X397K5CpNKpRLhgeM7yGgCbC7Duce67gAb2cC6VkZ1mixrG8Ak5UfuY3aQ5yKaYsrvzEsYCVtiMb9",
  "key41": "5kwHoqNoSDfD3vC41mJ3RoJTKeejrA5p6c1Y2s2wTmY34nmanPBZEyod8zgisN2QFuYcQNAXoE4WDGf6fM81r4Z7"
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
