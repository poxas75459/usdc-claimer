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
    "oeZ3jWZ4YBBJwFAC9kNNQpmAMsgH8d4xGbG8k9bSQFgzKsbpRsKGDTbyLNo6xrZr7FTc46FseBYduJmFrcN95zK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YoQ9GSGoLP75FAMz7uUbRgbr3ow3P1TdrjJxNgdq7hPBNWZpT47E5pKwtzpSzFxRt4rHCKwzH5B2V2NsQ3tzQBE",
  "key1": "4qS5AX7YAkN7irnseWSSa3GtHMpaiKBkWwX6DLJpmjoUV65BFtX3P4DL7DpDEzMbSbDc8NaiynfzN4NPwVnwhZm2",
  "key2": "4GrYAJy1bP9aHHyG1gcquR4PmJW8pLHk2Dr4oSCWB2JcbsyJzeQyuk1HDYDmru18zgvCuRdjn7w5WLv5fS3HPvfB",
  "key3": "2MDV4GYoTGAMF7v7Xcu4Kee4DFJahhsxM6NsSw49MJtooM74W86wbdkBFXTaTqpC2GLrRNepPJGXd7E8uSbd93dh",
  "key4": "5nLmJBB4cR952mVkZhtY2wEpTNFbKve6HGdvb83TG7eUKavcbDQFsqFosvN8TsakH9aK9NPvkEpgJSyZKBiDe3HT",
  "key5": "425UqEcYeaU2F6YUnVcCsULhjjHbxDkdhtZsCDfRFq1bpCVieRMkNkxtx3wffQH366FyB2snqNN7dXwQbmXqZk4w",
  "key6": "4E4CDZoMhPce1njnzwjFvmH3pzN92z3Jd8iZNztfrQLSbVdAJrqLwKdGRVL18AdiZPbRiyuYYJ4BnC33TXiqUSb9",
  "key7": "E2gY3ia5sv2KyJXA1KGFW9UsmyqEAYP9NbuLc5D7iS3AzE562dcibbqawSdpLF3pPhfAdGX7gtVF1E154t9Foxg",
  "key8": "2KDMNb2JCdDCfnRY2rTZNjWBF63Gu2am9Myn7gKpmdZfUVeaH5V1jUjNTbb1CdoXQ4gNfbYLBPdr6hrx1PBkhnMC",
  "key9": "4DNPBSzPGmdaFRktCi9dkW9dDtyXYPbEUwwtLau1X8rqfAL83gwNQXgQt2ZihvwaBRKFGYFxgdijtAk4EHxRYCPu",
  "key10": "21YGotLFCBSGuc62WHLECTWPNumCaH7JSH2KorvYLHhHCCaoANjRm5pJcBgPKukQQuCjCqXm7nzhtWyV2hbPhnx2",
  "key11": "24PkH1je2uqyoYGQQGm2hMJVVELLYDxMezi6x4USSoe5jDDbBwKA5T9rtrcztnk3RudHCdyfjv5jBViML689XJue",
  "key12": "4A2Fbhc1Wajnt8CNXDZbwRuT83svjc2BjkBc48X9xMBUkf37TVzUvaSqEyeaD7NB6zgNN1zPFNg7rn5gDyjZNb2g",
  "key13": "3intLQJVqHhiLFMBzn2C9yiK4naVrfULB5yvgiYPvbnhYF93J1Hp1RYeYCrMyvgANQAw8sL61M2vqToeuwd7RDx4",
  "key14": "2fccHQHpy7KBqjdZ4Rd7dDt6iy3KT8nmzgaZZjR91yf8zXRr2i9RSkiEifNhHMQsLhLh5ru38NMd7JSCtRKTFngE",
  "key15": "4ZtRtPvNqMAhjRPU6JyXL5vSs9BBZfsi2EYXKXJ99u26ouQpKbbaQj1MurPXenULKzM2C7ZeddjRmjJ3DHQbvSoX",
  "key16": "4qgUaEJVfPFH2rRn4GEZB6coqmm3f2KC1N55TUemqmtQwWpiswipsXepSp26ePeUXomGx5BzujsZM5Pb5AdGZfVw",
  "key17": "acvpAF59iiJs5zW6HW3GaWkxQ7WQCtq3BNQ5Zgfu9YF3zjLa1rdAUD4eYsuZRxsAiFgraVhdvQ7FdCcAou2QjLS",
  "key18": "uWxe95vi6UTdE7zn2tfRtAK1aEJPHNfAX1LvSiT1HnPSHbFQGejL4SBu5jBHQEiKrmqaXRLsjw6KQ3bLFy8kt3D",
  "key19": "53KEaT4mbBDoNL3RgnM26qn4qzSgYDR2tRNm61KtgQ1xW76Fw3DpbqNRwKNGBrBWWjE8dhyeDwQMagaqRWhWsB49",
  "key20": "3Zv5pfzkwGwFEB84zTRdU67RhapQp9Zwqc1NFPkhTeft1ThbrvtsfT2JwifbAT6Coosw4WqqSmHjPsk5jZmVYF2R",
  "key21": "5EAC4Rp3THc9f3vB1G4W8D72NHc2vRNchkSc2y1txem8f45mwTqfR7Rchp6zvVJkg4v2otvWQM4vi918qDw5o5RR",
  "key22": "47RsWRHfnFEWLnk5S33Vhv7VHSuedMjcfkPrtM4uRFjkP97Cdv1aiv9pAjsAzCasapcCSY8XMKjfMrUuSj9PGWGJ",
  "key23": "FLJgMyMnMJ6D9PBU1k5azfvfBFcy9jGaxmaRwsTAP9s7MsXUpmSYevYkA87LnpcoxrsJtSoNUfXhtGY1dUtJ5vQ",
  "key24": "iSCMnsSin4BxWuXpt8sJPL86av3Fi3nCo9niXVfxLQbWkqohivCWL2Zm7h2skZZrbpBs88UYZpNMx1yT6rCDqhc",
  "key25": "4k1Nzd6Po2DVgBzpKasdstJY5xRdNGwVFYr9PRRMWWoVUFT5FDCfKTtfaNvFyPtqaWRTakv6XNMbhZM73arcJopn",
  "key26": "3B4kJXW63f5xAmAD6h1awgDSHxmw5wNRTGiw8aecAmdM7dQGYsYTA3RmWPfDckvNf4xdFy8HkGTR9QqWoNXN2duf",
  "key27": "2wfVukaqibbNRGe9awSgZBS4b36HUcb28zK4jLJm1N7mwVLYWivmyc2UbmDxF2dud1AzYrgpKdhSUhXRNQxS3J52",
  "key28": "5qQcQkxYGCLwZjtroUJLCaqvu2dA3Nw7d4KSSkyW2E6bERfgUdbEZqEwBp1F669KmqEbsd1fyegpRmnJUKnoqxWa",
  "key29": "2CQkVBf9sp9Lj2zMUzHVCUFJxmeevo2sBGdrJ362A2uJhERARoZvA53mUu7mASZiFz8snYRPBkieRL2G2Xiqqsxi",
  "key30": "4bpWei8mQWbSL5AuNwxdpyThJTDPsytuHkTuMSHXNojyBKqB9kq6uN4mYxbfreNkvHf6AgM4rCV5exUwx5NvaTqF",
  "key31": "2BBXF7bvDoUf6qDhCjLpFXZGCUnGny1MkBRZbFU2fozJ5Dty9NNS47SvBRuBE8LhjrwFRDNtdvrkeqSueubC6ub7",
  "key32": "6MBkZxs92DkS5j6SJ3mdvrpeb2kYJjuTHJWeCcovZZKfgAqZzRtuJX6NCVr4yWNUMD3m8xgUSbiHRVXyEBdAqfx",
  "key33": "3PkLzaPrhhoiSpWg1aCHeyUTCfsC4oaHhBZPcMmztN1yqUcKp3Ut92FVBw7wTWQi4dyHyVFyhFzJPoc7RbYRWCVQ",
  "key34": "5AWnaBv3ZVoKYfCCt6XaizvwvM2piTz2SaAUNW27UuN8U5eah2iZdVVc8b8M1LZueptd1axbskTBtXRDFDGygBib",
  "key35": "5nYMW7YyHKKc4VG7e8yWuXXrBNhmwaeB1jGTBchYYUqFabSkQM5cRsEjhr4SCQJPHKeGPTd6VQxnznVywVEU4XG3",
  "key36": "5H2mxJNVMnmXBpbMfhcNxbEGruzoaX9gdDCvZebuAE7Vr7FfRaJpE7Uv6jTaJ6vTBDpkyuB6q7fJNyeXYWmS9EGy",
  "key37": "4GEwFJs2rdSuE9m6vDRK7pLgfS8ZEzMNi7EBMhsbPPjnNGPj9Su4njnkJyNVByGaZDGGV9zFDNjFGLHSZteLC7La",
  "key38": "5H4FsLr8Cpa61BwoyQ7Lc4yfgA4JdSpBbUi9zt2Wae2epEJ8ghQmGbhSxTYr3ffoynJ7RkfXsa34YDVkrvhmvvDk",
  "key39": "GDwvib6LFbFwUbg98BHbPPCehBdMLctDntwtgqq3iMmc6AhkXc67pNibLkfvYQ3cEq7RJgUfyPVNwxeyUrZk4zt"
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
