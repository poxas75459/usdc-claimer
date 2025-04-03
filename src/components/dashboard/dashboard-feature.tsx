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
    "4P5sqWPZ4zXgYcr7YdFSqk6Z1DAtNq4bX5egXy6ow9aEuWDg8mcKJH978bhTykAcUQEDNmBf3hkkf3eMsTxmUuVi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nc4iyRHPfQWXtTSV5nSCSSMikmUMkM1RosJ8z2Ny7GAgrtRNCLXPb3iusnTeVEBZ4qrgaGECsh4q2MjkxWvgwzJ",
  "key1": "88kRv18wgryNPqQCJD1Z2x28Mjr3qM5cSmTjvqtMZya36VXo8eFob5HcVQ5YckhmzFxWHs6XGUpg4yTeKUvnRAz",
  "key2": "3JwPtCxsoNhfEDMd1p1JjTKMCEKiZnoSESgkirePekveDu9dEcP8xoU4oZ3hPHcWBEztuMgu5MCEKo2JF1cKYm4V",
  "key3": "37PHqpSFriiKPssDx7cgpBnNM1KkNqS4m8prfPJtsX5TuYf4VsBYwrg4EBdx9BYjcxqjCXDebHCse8mA85exfcBk",
  "key4": "62CTt1r3hQYJr2R7orkQ6FzTtnj92ZrCQE3eWgLPnSgM1gHZRMg2xG7iahu6s7v3WLgTJxmm9kiE2PR2B1xdGxUx",
  "key5": "LFPwjKEjbSBmuhxV65z2pkoyN1xod9LwMEzeTvekW9t7JvEcay658m9HyypMK6hQNFLKxHt2t29gXU2uEwXrcEo",
  "key6": "CvjFY6my8jJtEogHjqworUV7zz2WB27R5VeuseCKuT6rzTpA4tqCcJgJ5uTmTKEzGMcPd6aP1PcALxE1Rh8TFvi",
  "key7": "3nSXnMaFD9SgHTAxQGgSg8ycbyBmNRUzngPrygX1ZQ1vMjKnAsXSvRXcjtf4qkvnHfQaYy8hqMyq6LoPzMHyoM2X",
  "key8": "4jkc2HmCTzedLS8u95o6ZeFcRNLQRBokmr2iPgdhsamSeYuBBaNN2q4jE3STEFgxAvyPLsBiUrznjsF9TTBqZGJL",
  "key9": "KKYpQ2m1vxoUsuB75bpYfWRUUtMFJJrwS2Zvf96peAZ5rksVKYj8p3AsJ4XwoaVpjTYhWuSbyXqPpjVKK7eS62c",
  "key10": "34gkivMbF2Pju7ERYS7B8EmDzPvQbZVYhKS8UpycZQrKatLQQd1cnt3da6SD7TXLXWGLnR4T8yJG3EHrm6d9QNky",
  "key11": "532t1eiEZaTCs9T7HjCyuHrPVj7TF282XGrqE3ejX6TvwxKhJJPNnYRf5YMuMnL7a7AzzwgaxkCn2QxxexdAW3pg",
  "key12": "2XS2siZbKoeWn9tjVDiUhcH8spPRK15fpohgcx1ccHduzzY7BMVwVwxPCdQnDMtSsm3EGs4Qx1MMuy9qDAPG68gx",
  "key13": "4q2YUqFQWvwjD5Jo61xtvCustfGV3oHkM1Mn3z3fMVJufQ18K3v5QeML6q4a5dDgPxtU5qEWJiSGkefYQaX1iAP2",
  "key14": "4dUF4KJVkSAqu5U4UHTJzB2Xh7zhpemVaqCbtusEViZszgCjC5pH42FJnNxTuZ3MuMZLKmAbbqw1h59Rqbjnrfm3",
  "key15": "2o3Cn7XHkzQfZ89h8MkdPYEePqRFSjpw5ynaXy4GBh7gxriR1AP383ejUqenAsAEDkjT8Qp3ggB1rHutaL4fEM2t",
  "key16": "2Vk5aXt2JUX2znqFEQjYhJzY3KejdiQpSj9oXSUnhhqpZWy5amCnuwVzuGMUW5JWR6QryJQNjv7FdragrWGYv6NW",
  "key17": "jJsMULr9HrrHKnL3wZtLMppifrLFLJCxKViJKuxfxPUZyn55L1h2CULET4j8TZXwZf3yU1noVMm5a1oYhauuh8T",
  "key18": "5F5swsPSzQuJbUqKCvtvQxBYQW4pH5TCSSwLRoD76C47kDnTniwA7SgZ7m8mnCKs63nYp7r1SXESB2zHLg36msfn",
  "key19": "4nciUUviq9znRnKL2Ae1BK6vScaW7WyUvJ3PDxMvimveniF2BHAxD957UJj167zqiESNsrDwKTD2RtKfSV4QCu5y",
  "key20": "X8b2fjRiSn2CKc6Jz9XXtLTm5VsZ2MDX5qqGqd1ctfFtY2WPRDBLUo3htzD9A3Rb4sNoLFZmeRQQGf7JvPjg6za",
  "key21": "vmambd4suWENfnEBisKzojB6u5vMZEqxwZp2RDvAcmCDEWX73243Sa8G2ttVR7cDWuDY7vmNoVWufeeSq764Wyi",
  "key22": "3rs7EAjvXQNXETBHDCrrCZvXNqpDUWoGsPEwVjQytZ3zzUsXzsr8X9seDqukRMEPJeFquNvFaG9phNmPooyw1nVK",
  "key23": "2s8WwK2XzubcugiadeH4j8wZ8WzMVca2HRMnq1AHbpsSp8jJm6KpLVaV1hV5QwJYtg2MANTBuehqG1gjmDmo7px8",
  "key24": "3AEeJ8TguJQnedCQnnKGgHFnuJ3cNfkJ7PiHvfcbRaoiFmRtBL9W6Z9KYwqPYg9n16s465cdYhPxyCgtV83fTyhs",
  "key25": "4srNwKP5weroeG73p7ryhLwssReVyUPPPLtUKqSpJqXxiNJiFCq5jAcfvyMsD8LND5bVLDekAzkp9qHnECEDvbxn",
  "key26": "5MpYux2ZhKth3FFgPjkgeb31UoGuQPhFuZLshyAr4qMbrj44XBhAopyXx7F6DJpkyYwcJxBN1R5qDEu3gxew9Y1y",
  "key27": "26H4j8ujE53BcJpX1JP12JHECvLgMSjX1pmCiQSeGRrp37cpwLiM5iLh87DMhqRYx5K3AzPFszL1umoQjxjgAjgY",
  "key28": "23SSHNXyXidUHx4X2zX4BnnjqR9fHB5df5qbniESz41hzw7eK7Ytk9J7gDgP8RrX3eCy65kMsX1gvbDCPtVSahJA",
  "key29": "4mX9RDh4UsgYzRdLKnqoWm8Z6P6mBqsArbXzbw2Lkr8sTTkpJkc6oy4u2uanDZmvcn3aKBPE7bxoX7QMatBGEiw8",
  "key30": "5yZ6gBDc8dt1r6FFJZCiMFGdeLKo78V1Y2ceZd8ig7VULR8yFssEeSo99Ga8ymernXC4oAY6MCwuEJvEi4v9p3se",
  "key31": "5kpEqNRfiaGNUC1CdggScTfPxmxVcPeH8Ge7e2ia3Po74usq3o3Jn9zEKvJDxNwKbmYADY2RPu3EpMTDPxFrFJko",
  "key32": "49yemugZnQX97iVN8vjCcGp6cQ9K7wnff9dJSiFps6PExDzaybiXdTk8qqsNSpsFAxyN8ZdFM8o8ZvFqT7NX42mY",
  "key33": "2R1G9Dc8vCTncgw3uaCSdzdpR9hprAtsEuHRKpySBp1xaDk5tKNAzToZh9shX4c5Wux9otB2dkNZcnVpik8R2SDp",
  "key34": "4GmrLcTSj2U7M9KxFheJ4ygwfNcURToJRuRnnDYQB1VaWu6bQywLA15AYFNhmHSgx4CV9N9TDv579YDLGk8TQ4gY",
  "key35": "57Cx5BhgNLmE4hHrbKC1raxB82A3dYwb3WsVqrJWCEUnmBTpxgiMxRBxLRkyFTm1L27qfUdLVmt3cBP6QoXcNFva",
  "key36": "Z9e4M61ZgUpgS5G2rLb8vDN9FVjJTnJpfTcZLYGczex5ZFuDe1xsWkHCw5oibGNHvFVPKsKUcTpXcZGGQDByKXd",
  "key37": "27VPoowJMzX9esofDkHzuGJmBnhk6CHV4ao5YaWd7HRX2Af3orXezsCCM1hmx8WhMQbWYYW2Esg2dNnwpxJFxbGj",
  "key38": "5uc8GyYP8uzAKnMamzSj8ncRPRAm36kNwpUt22CdS4WaUPoWaW78TvrDi9LBWUJfi8U5L3iuoL3rvo2RpWFdKcVr",
  "key39": "2vscjhj5vvQ9f64M2xQNxyWibZWqmom7JF8QaweYtsppAiVp9y2UbzKDF6vkFPFrBj5Hucf6pWKToJCkgtxV9EYt",
  "key40": "kE2BGYgFFYNdzFWq8sg4QCob7bPPLYDo1pseY6PVDvoo2b79wYbFJkKerEp3tMYMVc58UTiqHuyF72WdYPSrGnr"
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
