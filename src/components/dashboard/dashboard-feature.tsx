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
    "3NHZkTC8P4AjNukp6puuQVyjziPHFMa2dtagb1m3Wk8oaXyJCBP9fknxS2DK6LgMRMh59zorHYghB313Lg6Mov9o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CPP3WoVR6Zv63rCGwEZQoFBL8JemPykQgcHiFYHYz5YW7NQ4t69ueybdvbf8NzWWDRn8brd1Q242YcXKxEgRHXZ",
  "key1": "gwZitX4hMNkYkS3QxD2SJGVt5weXuRXuir5zXjTgeVup1CLrtJii9JTYXgS9UZM5NYGzZvDZNp6CCDN7DrrwTmn",
  "key2": "4A9WomcxAKGoABvForj3cAQm9QHXXyqLAJu1L5oyMnqqZ2K8SGVwTg2qrvmdshcupBmXSWwCL9QVqvVQVbKei9P5",
  "key3": "seUSL8NscCM59no2QB8Boe9HryYE4WDHRX2bUeFH9y7Vc5rdiyxtjqDt2VM4G1nRQa6AmabzSfH6dnuWzRY28nY",
  "key4": "4TYWxzwi5EMVX1nUU4AFgJANX84WbdUeYUpM2NvGDX1w9AccBFFA5K5SEXZkvK1brK6trqYLN5fpafDn7pv7gDzJ",
  "key5": "65NuM1iqhR1WWMzg1kA9Z4Uy3Mc7fjSkx7EVQ9BTG3AcxWHGEBNzxvvg3y6MQ1SaGMjbptCEoXKTm9dLE1654YCE",
  "key6": "3mPSDjVZmHBPeJC1tiJTnZhwWayejhmQhYVL8i85XTjGLrYuqxTkKMgcwYq5wNPJf9zRRkS1JFT5YbugDWSY64Zv",
  "key7": "4oteifFhZ1pzYJ3jLtwM8sgKJa7jyK9jPA9EM3gfXxc7f9AqAeiyrxqJk34JSU1YzkmSyp6N6tm4SSFvx9pYuUww",
  "key8": "43htvruEBDQdFj7ThH2BWtD8r2iZGedjWpzhSZSzhHqvifbYyaoywgLm7zsVGE8mXUTvT5xkvLteH1JSN2WWczRq",
  "key9": "47zm7dGB53DYz1dbUUNEfU1gRgxAmEiCCspSiEYbf8HzNxPiyCcifeWPooaxsMDujUEC7yyWQLT4iPYqr9tRtBq2",
  "key10": "4VzpZkiQyd12bbudA2KNTFKtgpj9mVz8egpTfdkKaJfutFsPkLo5DTZj21tdRwhCddt8MgS1ZR4akwnpfgkAiWzr",
  "key11": "4TG5yQXfNTyRAdt3q4gS7n5zE5tb4RWo8Hn1YPNpCSKD61Jddao1cR7KT8Bh8ggjiwBXENG6cckjVMBASeNh4pKc",
  "key12": "xQVDBM6v3ffrpFTaxyYc8LF3hmrrPNLjPt2jzYwjfZ22aLJKKtvTDqjcNPf6EXnorAeq9isv3jKK1w7h36mqDLH",
  "key13": "2VurPD7XmmXKMkAhwurgqzMW7tdFb4kN3uGZAAcws8MnRc2uRgsiK2aDoHVAJAHotYQLTvqzUnaeecoybDikTEyy",
  "key14": "5qLD68L5QTHw9cJEhj45HP1waYUGRhjDVssNKuY7pPY5B3nXgSJ7PbHLftvPUP5B5AZwvCNfoad2hewSU4BPXZ9P",
  "key15": "61E6Toq6TzXtNPHMrAoffSmWqqaWbCpjjfbX5GnDB9KUXNTVUJW9RukYRun5YGFCD3HVtsBfAmyEbsUJ3ZBFGVoy",
  "key16": "4un3WYkGQeNnvTwQ7o8TsMvdct2Uhc5XxaadoYiGPGGyY9v2E7d93mTotR3KJ3gcRUSQo3evYuEMucHh3gLQcweh",
  "key17": "zAdhkMboXvnKMgFCBE6iJapTrXdubM94HAoDEoiqXRG67aAp8zZgySaVjFyyco1Ufn6MpgeuXfPTnd8QojZRFAD",
  "key18": "YxnWkUgscLs8EVTd8SvyS9ki87QLZfStgFS8PemEi8n2tL5ipGp3bfE16apeTRALBfW9GqpzXYW1oDuwFmEPpmL",
  "key19": "2nytxa1ysvoZdJSjQUWP4cvy4LRUr6QGSAi1a1DhSUCcJt3re27hAAt95FHboDYFqWXkRmA62wz2cVDG48c3mjQY",
  "key20": "5vuKoFxiSBXknVQNXUyKnWY1gWjbwuahR2kL9qSJeZqQFyCTXWSJQ6PAdAdJpBrmYQviZLbqDSqH7DRE1g2ghm9X",
  "key21": "2fzMj4nvuB6mor5nD3fbqRKhdJXkm8QWhU1L2UcGaqYUFDWp7W8MaNrsfDPmGgNqhPo2TG1NCdPxF9FXbj1RwtC3",
  "key22": "2taxhGc5wQXBbFCAvYstzhudLyQ6sDdZgKE9UxWvpct57SmrBXWWvg8bUG7zrNeaCMtx4bigvYxGuvWJyDpwDUs5",
  "key23": "3ewPnJMhpccguSxr38ouYeSrrijLNfvt1XnabZib9z33GgfXJVUPpwQDdTWowuQqYVJfqcwWBDADzcnNTycjn9Zi",
  "key24": "2wP9bAQPsLWLjs4N6aSHp7aJNaPdgMqpGCTfGFQvpwHAcbtV7GdovkWHEAjFudQjLafgVNNY3oPf4PXMci5QhXBn",
  "key25": "WzyR2wwetYCtu28DgB3aE1L7H3cW2J9LBbW9gVKZkFt9Rcn8PXzAhp1m6JYxdxRcK4zPLrFsz4hGei9uSMWmXCY",
  "key26": "3wYypHY8vP5e6JcnoA7Pn23anFKst9YAHA1BdHed2zeSk3qcweHq8x6jvwCDVyPMJsVCi3fg78waDmgvoS1dmEWn",
  "key27": "4gsx8zTcGY9CRsgt7ucjhfGJrvBTi13V6cri4GJWyET34XtEeBY9wMaosbxvZjC7yPNog2Quhh9EGAswXbFDw7SB",
  "key28": "675VHQ4Jj93kmW8ebjE996AXom4vKUYrBUHUHiTjxYvxLSQw69k43eN5j4m2JiyJ6sHnQipHRzYbbz9gsPYbDU7z",
  "key29": "335DGPyuUV7JGwAHw44JxzpYV48cjbhvFEtpv4UXnCPHWJjfqefUbp9VfrnQUeSgPNorVDYyswh2tMCK9wgjnNkn",
  "key30": "31becKBv6awZS9iC7YZWGEp8TSD5CXAHrBPuCtiC1c7TWAVFjQMuh9EhwMmtyxdE1hniNXQ1EkCAmaX7i2oRafMj",
  "key31": "3aBMnpKxpe3NR24GnDt8xKrh9uBSe6b9TChPwVDdBAYxV5wxRjozuxe1WSnV95XD5wekCM5qohCYwBuHpnfXfabA",
  "key32": "4cUmLFeYDoRXWUHhWh1LEFhnNEaxf2mjKMwwVwzBd1MM6qoaQJ4hzEJknBQQo84BicSMAKsbL3NAS4L9WFn6tgJ6",
  "key33": "2dpBEbWBLK3yMgkMBX3XuFeqdGnq54W1EMeU7Nu4zt7zS1Z1U2rKTmUpmFgiAhM24uVdhCDwwWKBHPRcA6nU6HrS",
  "key34": "49TeTr4F6dSiEvaxKTQso6gnRtd6gy7h2w7muhTJKZ4kvzxG76dtgQw1Akf1Mm4mHnVjHXFeRd1Zu7gCpuEPKBaT",
  "key35": "vmzXAENjdcmZurWT6c7Lpok8oiHDoM9WA59iNqYEgMNRowtZmCjm6neXmvWKo5A5gBnwc41vFDbTg8nWi97rWoy",
  "key36": "4voHGSswe94xPg63eJg4SJQqr46q9msk8v2MtJ3pBJ6SHZkgu3TdSA2hXuEsSXRh4Cq8CcpcLXhwayVcbh7x4WeA",
  "key37": "3kwZH9NdnRR1pzo3j3r3xbhgrDTn9p9KSzmyj2m8fTb1wgyNFgf16XQa1AC8TFjTuYohgixa3dUPAT2mBpLg1231",
  "key38": "62F8ygKTmqvMdrERemNZKnybYVDwfkktvm15B3Fwb5EZ8yRRUCBMa4C3xvNShNVTYLUqs1pyT795rVS54quRxftB",
  "key39": "4b9xaYmZL1n9AXpq2RnrzS9QXc9rp5YN9EEeteBgVo3kpubJVgdW6qgDLSDKXtr4TdFu7tc7yqt1tnzuD4VQQhUH",
  "key40": "2QaZhLRvqGegvnNQWPnfoQ7Frcb1f7w5M5LnspcD7x3NGGeYwGYRpp7cNSWLurGssxzFj4g1Xh2L7hq7FxKe9TqQ",
  "key41": "3Yr5eAzcfryc1rBx8W35suuCWBiMPZmPqoJNetfxjuWkWQQxBns15c8g5scmaysLKBMC746L8YSv2h2uH7Kk1GGQ",
  "key42": "3xtTBab3waahn7pu8nP97va3uRPwBYzGWNp7W24PhwAkyMvmzuh9Sw1WJ5Dcg18TqboWF7Mfe87TP1ezjHaNCaar",
  "key43": "5etq9bhHArV3AmvyUoh7cYD5tt5xpPg59J6qq5Kt7e91Bg9Ls689aFnUgDYT6bK67A1fxo9ZXyZH8HcREtwpaGL1",
  "key44": "3bA4rwkg8vjgxRd1NF6wtvDGH6j9nstChHdqeBgU5XpKnKiuhfDj9od5y3jsj7QqNm9y1cg7ET2EJ9t2UM13GvHf",
  "key45": "5BALc5uZ1KQHBSyBAkL3qF1bMUT3HBDczxrq8B6mfMYxS8LMSopMnjhJG53KiFGemHafa4Hut7TuhvStuD1McZFX"
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
