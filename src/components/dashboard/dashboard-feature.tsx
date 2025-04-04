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
    "5eSj8NaBSvkGVjVWUZWZJ6ayqMXLWrVUHdEQehNQALwipigXxre57GHujxPzvVt6a3LA7V6DD9on62FmXbV8X4za"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d61JVkcBKCJ9jNqcuYECkV2ZTLCK5FC6yLcfx57BzcopiegFANZSj8GFYGc93B9bmqbfYGGg2GeUT59wpy4CgP1",
  "key1": "5pxfJh7qiZzogSvKkB24Dj7YPgcGapdTpr1tZCxjjsBaCcgQXBf7TBWB3cTp3ykwVTU6zfL6B95SSyVKbjNEa4pJ",
  "key2": "3xheDr1V6qqYgcdEAFMm6C5ZhMos6poDGTBERMmUftj5LZkQKimj2Z3Ms337T2xihHfkJyhSiAocphYYdGkmJDGB",
  "key3": "4ksPgYSnWWQ79gEXhrSHy7nNoN3VtuAAEmSgECPE8wjvuMMxyVCnmgqzicLgyFLs4KEX6S6fcHDH4yLU4Xshm8ra",
  "key4": "5oMDePH5zVWrHiE4sunXApgkeB1gsgaDPbHAAo2iWXYuVQAHhz2KLCRwxCNH8rXSPjL3H7hbTjU3tVAQUTeZDZf3",
  "key5": "EDwtnW97C6Di69doodU5AMJvES2q9VA4rTKtGQAnsDjeVLQ5L1vSAAssc5K1qGbesARtyodFdXYf97TwFEgYsJL",
  "key6": "sUPXM66GqnTgEHYdrMk47LZoTA5Rztgkf73BADmfTcJ5udabXWvxS4XvocJ4ACQw7HVkqapgNuvk2mmu29xY6C8",
  "key7": "aY6iX8eMetdaJbTZHFznpng7T87382MfERpKX4Zzdb6JFWvB1HpuTDQ5JYZuaFRvbD4TgUQbonZSTevxNqXCHRy",
  "key8": "3yp5u3kGUptmK65xLh4N2bb5EbBMAWY9hAdZgFTdLAQc2ZFNp6d6mn2DLdqveUie27zczaG9CMFguofBoTNWmhEF",
  "key9": "5iB2b6xF7xVK4HiqyfmLvKdeTJJDh7S536xGSHv3VBMnEu7SAysXf8o1gKdjXcZgo384b1LyHkFd5mnv2VgYCYjo",
  "key10": "g7Byogn1yr8fsQD1rhyC6d5UbMXJoy1EGd8BEsWjCjXWAWeu4jA7FFuF4sjXdmLpvHtE3B44SEfNmdXLSFYsnS4",
  "key11": "3TsPsKrjNPKkgdp6hg1zFbaeyxJR1GRiRhJmASK7V7iFaVvA4LE3JYkZgYT8C4CzV75JjLKWLbr8etZVLW9KA744",
  "key12": "5ho3HZSTnU1E7KnkZsP4QHQcmW1YTcMLzGqf7ErqRMQK6ikoVnZayFSJTbtMQZTEGdFPziF9YaLMs5wzJQsCyGzM",
  "key13": "3jbdpHDuRqR1uTjsKPEVVbPZM4GYegzFcWvpaU5r4LuyDGcBKpvoTJ4Ke1zMDcsLCRLNApG2aSJUWs8iQx3P7QyS",
  "key14": "45PVw3NxeeZxLHB7WFr8tcx3EvxMzNLYX6xsNYQrhSbX2dZrP4xsY1q5crDUMh89R72wD5QBJ2bTP4ESxeuMQ1WQ",
  "key15": "9iLZU4UwcKSUvg5iJxGpQ2FxCgVqCKKE8cuRgn2NA882BJT7uVvk7HH9FaVGQfF6wt3ndv23Bko3tQLpnJYMb8H",
  "key16": "2AVuxsAJt8XqmgZ3oXzQLAzKLitQK8fthhPLzZt89v8EpQVgPFfUTy3Nh7Z2ZgePRGB7ByziWnsEz9eUSA2hadsf",
  "key17": "2G4fixAsbF3k3mVczCNV2yfJ67Ziim1vWXLA4Wwdvsv3aN2rWuvnQL2cBSpGu3c1wffL2soTdcNFinSYeGCN5eje",
  "key18": "2JPdZDWPR2h4n5rmRe2wkyVqcmk4ays6eCRCZndUspy9QjDVv5RRCPrTzdpoz9p5o4LmXwBLTGiuhDpdz6dMaWay",
  "key19": "53W3oRU2A18CcdGXKmFwGgZ14ARcqgnnKwmFBV8ZQgAWskckkVaVaZK3hDwynvg163oC1NAocaZreyfRBbFcmLTE",
  "key20": "4L3EvGzVBgGU9FyuGserY9ZaZampWaAc1xs26LNBDQnGpKB7F944QzhrCut4ndRN1H9NTufnp9Z78u5KseAq131h",
  "key21": "5p1hk9U2ZL7YThHYHhFYe8Bcjgw6YZUpRG1GfjjAY74nUbx4HLbVxRqpFp1V5SgYkUoBkT98PU9y752JWUZVC8jP",
  "key22": "5GD6xZdHL9U42PsLnMwK6DP24gvEwU4hyfiJmUPeYhCPvs7EULPW8Sc6D5oN46XZcoam9bbvuMmWbJre9ZWcSMNZ",
  "key23": "3PkwkURoQVRShKB6NUtF9rdrMkKcVtK1ZxTcGzRhU5y4GU9VBY1Q6izoYXTwxbneB3qfQgex4WniqhGw2K8eAnRf",
  "key24": "5LKrVkD9YwiGJp8gwQvTjE4cGVzqojpDQ2h6bui98Bx2mqiZfnskezJN5rQkDhfxpH9nSyYKpxbWwNZfU9wJe5f",
  "key25": "46UXfHHYjq48pcfLH5wb4hbUCJWK183MdDiHeBsNM7kfCL4njJY8LAJe6AWbZYiSmYS1eNtEGkKXQPbi83HdveAw",
  "key26": "5zF3PefvZRiJY6ZNZ7r19RPXWRdkjJvxeWbgjNkrGSNQMu4GiUHczLrp654xo3qxUAe5QX2snfmrcUSras7dZ8v",
  "key27": "2RZQfdoSXvqGQt2CXq62Nz7Msjk2Ka2syVzAyfv4Dn1rq7uuozHSEaqiDwdMm3dnBv52NBQrwaFdu8XMZWY4z4N2",
  "key28": "fpYnWZKN9u4BzaPtGVfyFeW7hctjH6xYfXxhQx55Pu8WNoaZkS4JpQGcQ7ULAox7HNmtMKNz3p2CDA4LzdVFUse",
  "key29": "65ErLQSrzmSDjJCzBjdxoY2RyWJi4DAvm1norSV2coLEYx6ehdE21btw7P9aWUdjjWtWZjDUdLjG3mYhDe9taAKW",
  "key30": "3GXtmiBQXURJW1vT6eHJumz34sPgMqrAFqZY51EWSsxx6UangpHffHQsgB3x5ogZtpjWGfxZHL7md5JERMqUC4z4",
  "key31": "NoUftm6KoY44KZQBucpTNESGvbzCas4CmjCUcSRxH542Q8gKcwmozvyzWhrWRGb8tDTQVefhbiERDVVzLg4xZz7",
  "key32": "kxw7ggiG66eLH4k9sVrBb9WTP7pNtXSG7g4ahHLwtyJg34NSxC4Zr2maB9EkSqyxZaS2CL5yUziHuNrZVbLHZsa",
  "key33": "39hNWh62v6Sh9XzzMVM4y22X2DhFKbwTJ2Yqz1Jptm2JT9f4MqqSPLAV67UKJ2voakDiRUVFyd7j9XeLPzKUES4P",
  "key34": "5r1ibLcVzdKu9QLdRnvuRq2Np48qG8tUHnTzLUkycMcd9cm2g7GiwRtk559VG2iRypDViZYtZKgMEWw7WuoRcCY2",
  "key35": "5ACypVTiFivTtHpCUt2PHKXXSfUneyFXR98xhLLVpgSozCmhaXoVDsUMfdRxofA8ciZ2PR6pT2bdccFXTdE48Zxj",
  "key36": "Jbo1TfiHdQDU8XNgLJCe9ffJ3fQX2E3H9JX9jpcR7c8Q2f16bSL1Usk1cxzmiNCSdnXY8j181biMb9MEbRk1BHz",
  "key37": "5REkBiFjBQwpP5Hokzmh9j9UVeve8u3CoHKPsuwZvW3VfrfwQhdx3MNCW9Hsrp7yn1DmRrShGGct4mRHryt4A43A",
  "key38": "3HCUMmRw69SPTMA9qM92PV3i7Q2PmAzkp5sRqBm8W8Csu1MdtodPmrJ8aiAzzkkvog9UZPXzszecZ7nJ9KZDr9Bi"
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
