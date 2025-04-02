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
    "GzSTL3YwpTtJddVGTZDY6hkcuZNVPSmxaqrmzVsFUaE9GaqPeiTvzhXznSq2UgRdhCScz8r6dngJCGJo8nDPY2v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FjzJLUhc6LwnXh1Axc2TDMu7xMn27DkSnSWhH3rkGerL4QU7fSPTaQcLsHKn97a7FeUQTd3gmYoR3kqShCfNJkC",
  "key1": "3fCB9XeccaZW4CbVHbJiNTqfUQGW9hQYFMw7GMUcrnV2TpJ7s1mDMWANhaFiaA4z7LiPXydQWWM5ieKxeMX6fXJ1",
  "key2": "xQVacnKnKwu3co8Fjq6hPbisdfDaq79EPZN3DBtAcL2hcF63r342phBXJ29v38v4g7JFwLfxLLV64xPJvxQ74QM",
  "key3": "2hjbSXCM1XNRSZFhJZM4FT24qrDqdEVrxL1UHtwTm3NMKuFaMjjnSuL5qawyJn9v2Um9J9o47Crr8qsRKZz4ryWQ",
  "key4": "4s2Rq7bsCSH33M7Jh2WENBEYXBXV6ZZxpgdNeENpMWW3YTcFC2EaRf85xPcv5SU84Ef8vCnP4zVvKqRVAvRCMUxM",
  "key5": "236gyHDmQvKeKiHgde7dNzxbvtHZkjnb87Dvn7ergWRVLYTVJK5CXwMjmdddtm7Y8HTEDqVVbDXUpCeY1dPgDpJn",
  "key6": "46LAXnbGQ9fveMzXdpSBjc9uz6qSnTZcQNmd23kf3GXAK1f9KxZDaudxU8nqsqHjGCHToGrdQWEYG37bNTnTZqkN",
  "key7": "2uCWCNq49K9FDX2Ytzdg1DqLjhs3h7BVSqtRQ8psCRErdNdMySMnSKHZ1UxpcFvWczDeaVNvoFZ4oKV52rJghpSc",
  "key8": "2Pwdcdy6ryesvAqabYFfn1Du9dBD6ePefJKqyZacLpi3rBeaHZM39pXmjrUWRMztG5wSsozttRNNbuzajA3yxHtJ",
  "key9": "36beMsUpUVpsadiEKYaDq5DcgVogTP1qLHrBHqgHNvAbqee1i1o7ssm8D6bku9VUvsSefP7Liw4HZVf7c4Vt1U7e",
  "key10": "4xz5MypYU9ndGstkunUhUBaJXNF3Wi4jw1xHTFaeokPm8dnDsNmUfZ5ocKg93a7KWAcXrNszaY8VQdbboTQg26Mj",
  "key11": "P9oHSjCHG7voLuNmV7h3P9fkUQnSddDeDozL4S3d6PE9AjaVx9aTCAQczKCvWRNk3Pzo2grUR9TP31qaKfgekyQ",
  "key12": "2xbh3Ybe4bmXzzsF3GWrS1ctDCGb5J5b7QwWn7E9Whka2auedx7QxLNHGsNXPHad7f88UysDzPU7C51pC8Yb4dJv",
  "key13": "2VX3idqCTCz52NMKR3EwgpprCA8nijSLjyfzk8DPp4wFeEGceW9JEVULdutNEMxjH1Ys8XYNViNRH7DdBZWDJykK",
  "key14": "63aiesru222BXrnDmP1wkUMYpMZVTH6uzAJK8b9jWFkXG9igMSTtQXyQQcGjLudCLGs7fR3NzCFAC6cMfjmui2a8",
  "key15": "4WhsLRnzaCB2i2fYCe2iBeA48Cdyj4oa7e3ZGe7iRkbTWw4TzBCRbUsdWarrjk7hiU5XAVnnBs8L1n6KfVV4BHiF",
  "key16": "5EQTsxrYSAiBn4ykYD5hEtXg5PMnawXkVHrWxYDwmdqXXU7eW8T3ZzCxsGewviabhKR9jKM2rFtxyP4ddGMKXE6A",
  "key17": "3G2rDRPFJpH3hs2NRasfJoYz28UKx6UzXi6Ra6vGHa2EMCfWKx7KZT8QqDLehdt6xqBKwBVJHitjGibfpxGE1YAN",
  "key18": "531msd1zN9ZSoibkJt3XcnU2h4rd8HzdhUTzPgP4VFxtvty4ba57bKR91kA6YejhrHzfKKELrWZbQDsEzZXBZKvm",
  "key19": "2LKgpJ6qHGxJ6rG7eH3L4LLLLTbAaFSS32hHEBVZDV6kDqrD5HjRT3c9AXVj9gecrE11JvDgFxg9EwfsX4FZYu1d",
  "key20": "4kmX7tHk1coK66LA9q3Lqf5VNr1ftQxr2fmg9YVVN1BU5JncJvAuHiBTAewkpoPjFDgZbnncz896fCNt6iaNg2Hd",
  "key21": "2YRSFUfJqy9W9NnUSau8XyK1FutaL1ka52h7SZoPRJox6oLUYCXSi1fUXQzRD5yys6qsD9TbQ97dtVFb2UGkSCEb",
  "key22": "3PiPTvrAMsXNnVryeBd3vLT1mdssQaStUFm2AYh9oveqGSZyG5NuxWnxJzTAs9UGPefTHoU67R98iem3FXNES7Ti",
  "key23": "mbMV7Wm47Tz5Zy8y8wan4j7biWWe8ZCz7xyq5x1W1Qx5wbMtcxzxBmPsDFbkPohsN7pqMq8RoCfdzoBAY6RHjbq",
  "key24": "D67eQEz23UQ7cN9YPDwwR3Xq4ZqdSZkS76drTbVJSzVpnZkA1HrsV4JSQhvUoXgnmjixyNKzpDKr3kNUCoYRcyo",
  "key25": "4jiQqw3FNSWjXpVZxEtKghAfD2TLctvVCZe6KyiLwdePafvCYWD8JkH1PGxHq17uEhU3eH1xr5uovGGwbj26vekh",
  "key26": "64ZBA4KSDEwajxcZc2bPNHdo7vsJuF6ARyCDd8ZXoSapdKhFzrUCC5eei7gF6LL9S1EBwJQhd91MMVJDmMx3czMC",
  "key27": "4AWE3C4kznjcHtkCVCCZGSf1dzSR4QZTwEtrV37PuC99Wa2HWA7t1PFXmtkt5WrfgG5eUZGRouGPPw2ijgMH1rJC",
  "key28": "4HbiLSVF2UcMpJUdz9uvFcUQyfHKcNUVesp8oJVR3jin5BiZNZA6SzCgZMudeTwxTzMV8w8inWUgVZfBbNkgC7Ja",
  "key29": "3Cd8ymcgVkXkSPhmuVBNVzgzsHEu3yjsCK7wpADEHC12Toz3pZFFqcYBKYc7S8YGXtzkvMPqF7ZBy2Dgqm7bbrAp",
  "key30": "3H131k2iLH662S3Dz9FT1bDXsv5873fq6yGzgcfrEfi3wM6Bh5sfYVUKrgqfC6iZANkSeAHEo4hTgaaDPyVQKPcR",
  "key31": "4XXVB4nycyHmQ9AfQRzFkppqF1wVZnkL9uz1qVLaHArKddAyWLSe96F6FMryGyTy4FktUyB9mM41y9wpGv8xWUN9",
  "key32": "3tSR1j8Bu1mn25zmxTJ7gcRrypc837EyQYJV2xb8K5FEFA4GNGNT6cUUrwQNjQDq8AipG9fDvFWSgqK3b63XeBD2",
  "key33": "4qdo8Z9NkKfALihEa3LNVvBMJiMH4naoYb9ZYwtnt4TZt4bBAoXeCVvQ5MxQWnRY8cu6gMkHszDcYEN7o9cXxNbA",
  "key34": "2Cmebm6uD7NGBPxGoGa3HkWhuK56fBoTFgMhfGAm8pfcC8tBjpnN1yND9no3azbt3e9kxpGyWoqxmjC6qwJKFnsc",
  "key35": "3xhmSZbLH3Kzjc5PSHjzNq2xf16nv5bEBGZBLp6e5SskXahAxP3JK5oqV8b9nBseL1yWPshnaGpRWsBgEgeLWKfY",
  "key36": "5SXRRHv2eDNU2TZojESanaQ1GBw4Nd7woVnBSMX3xpbSdRePvKspaFQsrbJrLSd6xuWjmXKmvtoZLDMdrwDjWY5H",
  "key37": "4TCjCXyg5fUq6LQq9X4if3bXwpH7m3QZfCwrrDKZr5e6oxLRkp9ebkSNRvP8sBfDKC65PucZhLfDN85HJczar5HP",
  "key38": "2ujNbdbKXnQucN2LkPkc6patBBwBE7nNKNugkT3LSzmxvwywfEbhjqVKq5UZyjZarQDHuiucZ3J5BXGN2PQqjXd9",
  "key39": "47zU8s4GK2KagT3oChME2y3823L2mPAqkNcfgZ7zezdShQBfW8e9in8xKPdBMqCsAhgf3N8Eoz4nxp1YWDYUqF9R",
  "key40": "4PKy8oSEHv965DCFHpsnghRHqG44eJw6XVZVct2x4u4Z1CZ2QxvUaLbDphniAiSZ2exLsqCbJQNj1426if2rENaD",
  "key41": "Q8VucZcAGh9xc7CDPC4gSWqpRu6Av2kNPBjVrfjFhPdHGmqjztA5cTawa7zjVvCKQM3sCqmMsejFsfLseD4V2vo",
  "key42": "29K2ZY442G93Gyizq4ep44dmkBVPNyLZiHoWkyqrxZvFVm4vUAYn4hTwhGatbFuMepYsQS1uPiUs5ycHbaqCF3nf",
  "key43": "5tJ8bpfcTa21XdQayRuRvvtoojm4xWu98mE1vMXwL9Pa7qwtbTVLSbmjRRWHTZ3C2BTZbhKQTiTypBHKbLkvtniH",
  "key44": "2hy4NQYjdfhjfeuSFzenNQikQFPRvtVbURWjrin31gV1w7xeN2jthpgEkVB9PCaATjJ188eM9sCCjDrAtJ5DHkx4",
  "key45": "4LWiE4yy3qj8WfcnxQjmdzRfTksCYK92FWTaZf1hNnkdv2xdN51295tKRjwZAZrcSe1bL3YzhjGctcRQqEjjAc3L",
  "key46": "2SPYcuvxEVXJ5cbexDjmN1ZFZWSWAA2y9HwvP4mUJhzuJprwJPv53nBMx4y1R5oZS9JLenmmoYyLCJ3NJmVLo2Ds",
  "key47": "4oQ3nSrAQsbox2ZGE1Q2ESvrSxcjrwEUELBSDnfHzNCnC6GqmNPXm2urGnHevXRUVgaBJvJoZQeo8YMjhFmaf69T",
  "key48": "4qwFDwQkRzvi19BaqC7bz4ba5nNxDttSNxvMJfgTQehpFgBmaAezxNq1LBDS8SBd8M4q1JSHvyiaomGSsVFXytoR"
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
