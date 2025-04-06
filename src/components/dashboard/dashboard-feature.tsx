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
    "SoYYXiPt29zwkvjCh9qc6giaV6NeQAxA5PkBSGjUWuFryubzhmcZUUWSRXpZzMYY1uLb1mGnUH7ff48SDq9aq5K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kU3uHT2GFkcq18NYbTSYQssEricEj1mAN2d4eWjqBMZMBjTmXwJh9bNdcjNUCzN4kZY3dt6Y8bUwVdBnRBZ5T6x",
  "key1": "3L993FacVZdvQP7FQR2dPdb416cJ6LYvn43GtgzCJBBxS7FaMU9EbTatyG4NFjGDMm32KGKGe5Ndfw7siCJGixMe",
  "key2": "YtXFieqnSZ2t81F8ejTnCNf3cigZFdsuG9X934a6eVf6AYjyGxeWiPv8HQnqSHPALbPw8d6i1Z9K6Dy2q8pGdMu",
  "key3": "5PmPi5pid718R7V5Vehu7zNQWhGuGBcUKKCS6ucMTacAbCTQt7VhpXsKQJPakKccyRpSvHR3SRXYEfMcSmk52MTE",
  "key4": "2s4mxdbz9TKMJdz2JuUMTL6pq7iNpnG1nz3DxjwcaTL8aebpWBC46uH2KZHCjozjFYtcChT56xSfZzRJdwUGrfG2",
  "key5": "4uDUJxMc5z7ZFVydW5GTqYk6H1fnsAZLwuBvAnMCwYrV9xZ9bgEBXhaLT8iRDTDPdAqMDuibihbsebgHpWnrZRo",
  "key6": "2xS7m3TbW3rPH3ysUu78JpieUTrCN45fJTVa5kRcrcQBK7M5mbhC2A89UTsgrnHK7f4nRLwEJSSfUP4BGxiH7NQs",
  "key7": "auNVfS7bRh1GRCU2ZL2BorFWwhZrBDAptnWPGrTvN3u8HxavCxuHaYk3tYwME7nobkiX7sMXUrq6PAf5DD3dSFa",
  "key8": "3SC2rrAY6YRnLtLpFBY85YHjL7F4XETsxasHkF3KPGK3TUA9e27mEeCKbtFY3FtCGR2MLGqzyHwGn45vydKwqxX3",
  "key9": "57qCjDdL9Gidqe8Jk8yanQeSWZzAabpqkyb8SB6tx8AvDdRzg56YxVExwtX4ospT3hKLBCzWKrSWNUqBB34BJ8mM",
  "key10": "3xyJTDoA9RjizQUgAUFjg48DpM3KMVhJiVCb6Wumsb9UyX5bbQMUNw6iFggVPBJaTqjN4v6Cj1VH2uG62NgUT8iE",
  "key11": "2kmb79upGpdNmuwvqxXh1xKUL7ZwyGdkrKiVUaKiW3G1CPEv6ds23KUtgpkFiscyiykD6LH5qkRPyCBk6M5BWiqY",
  "key12": "to4u5rUMtrov93BbDJR9E4HcATiznVMxDcc7jUZFUV2SPB9nuFDSYKjNqNbDooJvXQpnFgxdfnJEJ3CZhgziT9e",
  "key13": "5HSemafRXnjwuCd9V6oq6wB2cn7WVzWYaLjj3u8kZTE8ohZKLUSdn26B1HAcq8cihKD9DJm3Y1Bhx4QE9HZVG18e",
  "key14": "22x9MHCNy1yNygsJ2yHSz4gv9wgiW6sWa376cCf2HRmbqe9ZuCuPLDXX2s8YmTw7ba2SW4NFkbMJHc4Z4SsUxp8z",
  "key15": "65o1dUea7DVHfrfrW7qSq1rREnG434UwSTcjQ4PmHegMj3DXbUnDgB54n4nAWHyeGBCGxC8jS3o4zhKtEqPd2Hg1",
  "key16": "2j5bz6oEmVGCHQZtPG3PBVgCYs6DoRFzTkZRRRc9Adqz7yQMWu1rWGbBUBDVkiK37gXfzPFu2b2spk6EeLhh6anY",
  "key17": "fjhY2qoSH7cnnsXJtzfdPojaPKn3yhvkuyAuLkQc5Jk6fhcKxhWiDCRvHqn3EjisCyCqAEepf6x26kBtuMGtUBy",
  "key18": "44keXWtn5psiJsFT1XEW7VHaMEpPkXjXTuj67vvbp7XQBNpEmQ2ScAUVXnhxvfU4vviMY4FGdVPBzXUjd2q3R8XS",
  "key19": "2W9CqhwjmFAPw3hVkt7bibfbfQU1BCSKgDE6LFozXVJy36qdvWqvLw3Nq1mt4fmETjXo3DSPUPiCxKKaG7jaKPSr",
  "key20": "WGs8662Dk8J58j4fKwT58TvCGdJkqBe8QCbdFP34LsmifFPcX9YZ8ssC5SFp3n9tgm4DCwpcGeKGT2USpDxugdW",
  "key21": "pttrguMcHcdHq8fhqQYGCGCCzV75x6qkrU2akZSHhix83AYqJueiEP6h47y7yFPAkcHRdmxZcSiBhFZHGM1x7M8",
  "key22": "5BvQFwhfVcTLb2XNRZ8nhunbzBf1c26bgxqXmShADoDFiTSUPdj1WFVcZsxCX1wrr92EFKUSt66mYoL52PyZRi92",
  "key23": "2BmCJjfFWJ8RwFZMSfUYyvkKXiDiX4uXJUM92y4BTfBhZBwRNaaaH87Abtbb8FxuFJVue7DRG3q4Sf3HMXbkgqDU",
  "key24": "4X9dM7qmVNncHyo1sfkUiLsmeUM5RRZkz7gtRh3rSA8yPiWiAN1vMsb2jDB3iTKxpMMY7q9AmUFj8VxMHUnjbNTY",
  "key25": "2FfVNgUNwrSsCnTcFtsqT9M2Lw3os8qL5uDsoBWrTkSL1vQAiMFXMU1qRUKDEf9ABo373bvPRKs7dtMPi47SomnG",
  "key26": "4kKHiLH6rSDW2dwntJoygi4FwMjBRBtLfM2Vcevy6pGvXG9QqUwZ85stLEsovqi49nKeeM21FoNpUgFGno4k4ARE",
  "key27": "48GXT4oJXRBUHj8erT8HD9R8PhmAgVE7WcNpvnivgJR5FoFb2XimoQXXdcFvWJg6xSj3bqvJSsRjy9wVrxXUzdjv",
  "key28": "3X8UUfSSWVrsauEC5PkhUvNq3remtrA1KC6HbjufLZJNWfTKyRVhqQsZ67Sq2EuL3kPCG1NWpnTtBg6mmCTDXajX",
  "key29": "qtpGjSnY5qk1iuqfnhCzeNtr19MzSTxgyG5F21NL4p2qKUFaLRo6Mrf6Mq72bUY8o1pD5ikciENtpr1jCG2Sorj",
  "key30": "2dEFLDT3Pw152y8aTkx4c2hwSzP89UfahndWCi1WUZ3Fi72RLnGZUCXa7hZVv8KmomJzXuT2QjVqtrVz7KAcxc8K",
  "key31": "2aWmTkaarL4nsyUxcVHdkJ17RBjNmLxYxUkcMoPQ8ZSnauETsLgpHo1fWhMGoVTydsqQoYSwcxDQzPVp7GbxtUzP",
  "key32": "3MC3DTRh2jy4gJo5zrG2C3jpauNc4GfneD2X3hvZ5rWsMv16yPmY3A5SEoi1KQZPkYjFs21zeBgfVY5NucjHigvS",
  "key33": "3GNwHwhhLhSqjmQkNZjwYsWsWFxKjVwW78D2LgXdmQkWBzEUbyYYnvdry9CvUk1iKhrAgXpnKbwe2stSiP6nyQnd",
  "key34": "2J3F71ZBKUKHtEE6NN6UTdEX6dGPnVUqsuXhxW4RLcn9vDC6ivnPcNTA6BT7AAQEv6cC4gj9TEqXfNLVbj55vd8v",
  "key35": "5grs9zDS3mcxMGPMxiK49tasfGXNNeDvCN2DDiEnpCadNLK9m5idN3swcwpr9Wom63ejYjwhiNtgKCd1drpYDjrr",
  "key36": "2zENQ2w6kKJsb6JTdzzMwAfiLiR86J73fePLSwgB95tw6HN3mJgYCdXoGvNzjS2aqfbYxaximQavhv8N6GAdJfLp",
  "key37": "4v7VZrW1yxuYcBK3bMSJJQrj9JdtWBgaVqnppiHhiF4zZ1bVdSoYstCsAtqgWdRnHPnicvDChxsBCrF3MpSYwkNF",
  "key38": "3ZcUz3YTHX58d1DSUMC3cBjHEWWnU8aPRYR7hRaw2ivbN9DAnSYfAW2sJjMQPJPF62GDBXdiyB1kf4FFrvRMRpvP",
  "key39": "r3YTGrR2D9u3gjTKVVrzLA1wdvhzcGY4mWPzoSJaw2eaPhjxexsiwDxgEHgz673mNCUrP4xbs8cAwhzdSdCdSaU",
  "key40": "tHSzmMXnHiBjmnZNpeKCwhRcUmRfDhvXC4ZQFzci4J3DsjNjoSQRCsnJZFo3GBb1myjQPNDeEtjzLoeDfgph4nq",
  "key41": "FmbrME3EHxXb8TzdJCVZq5TmdCqMp8pMWY3a4xBYnGp49CFdJmLpBUQKdLGGU3aEYMgtDUCaa5qBLDMDoUCLEnG",
  "key42": "jfcTnKGr34Bsjkyvf6AGoLSdLFf57M9x4Wizf6WNGaaQfyurqK4yqAvhbG7Ly3D5TEeVpjzfMaDEkmXh8y1Au1u",
  "key43": "398LH3woaqnwcTX3cv1vYUZLX96dDv8m24VkujdNBeWc6dpZ497DDppkmTgdfuTpc3ogcu6vxzxmZFn5rH7LRRAc",
  "key44": "4Z4vCjxe2xujC4kSbhTTwJvjBkDRMxCsUDjAuA5F2kqD4kaQdiMH5RMxe2b73wsfLeYPeX2q9UwXrFVmveW6Hsd6",
  "key45": "jvVRSuNBqVVj1xgd5g6pCuZNzrvYM1xAtqyYKbAmohbqNsXgJzQ1bpaXwLzNm9vPNE9ys4iLuaqR38BuNLkQQis"
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
