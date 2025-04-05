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
    "PEj61rJ9pVq1nXpczgDdWdHVZmMtpjEGMHwFhwWMvvQ5ihsdyMmeCg92ua5fY3VG4wowjTbzvW2MAYKoc1VqeZX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hZvjgJWcJG47pckbx5ri3bFgh5fbGjXo3dk7Jq7HL5An5vV5pwiZSNZjQe637sXqPSJatbWENYhQhkaFA9KdoGb",
  "key1": "2ZDSqWskXG1mDoeE8jdakwqBJJ7Qdj45fBXz6oWDjgqRva4bEd942jDL3V9dNVAzyJhncBfkAiGtVNnztfnfjfMj",
  "key2": "5m4mRCP4XVLKEZTGHL7N6GFfGJ1MyqaqqagNQYbKYpZL5YjzzCnqLoHmWCNoVQkyQdU2nfrPqjxJ63Tfzkg7ZWAg",
  "key3": "WxUu5r2HMJhxY7qm6GeX7tFXCJYhCewLY92rbAVJ59etJRZUyTcSdZChiaVGLXXjzp6oVZjw17FnZL1oiA6NE5R",
  "key4": "2C96fHTuyS6iZmtAHyHbTpfL3fnLtZKgHtRFkzx1RsbT4LXQ4z1ydW4KFwPWMKPHf48ozvRT7dvPkQk8Dk4oQ9Cx",
  "key5": "2Y6YW5WnGS2nDzJkzq4xqEKgtqk8Lm9ZBrDPSvbjMWQwu55NKkp891AkEfq1S2rGnKtCBv7DNLYGMJFuWoCQcAzF",
  "key6": "2btGeT7RvwbVzZrMN3yjAGo8QVax88hUTdEpd4qoVb5zoqcGhdrmYoMfJanmNKbktHeM2pfeHm5iPL75P6d2FMM",
  "key7": "2W8YAev8s9GEuJjxnD7H4xxuwfnUW9MZGtenLqHXcp7LUFReDa9jYsjF4iXvY61QiBvwjmeKyb84j6r6rW24syKg",
  "key8": "4YEKotsZf8VPeKTWPyAATTKRUQZMAmTuMPTpmDyybVQDycp8xN9GUt3ck3Z83Er3HUSfYHQYPKrH7HrytkxpypZq",
  "key9": "Y5f3juEH5gxccpQCVpkEQn6s5NiTTY6uhYLa3Wm23Hq2T7utq3uAyiAxSuUrgCKnAC7wXumCAHbhy4NWhx3ngVQ",
  "key10": "53AdABH6RGZewV4F77ueLYNdSwyFP85qX1g2Nj3d3e9wQFPxF8xZFR1XhfzN18mF8tbH6a6QCRWZ2fkenK9VbwxS",
  "key11": "3TavJ5m665T9eGqMhg8Yf3XSjyrjhoxqtg5snnv3cNE3mfEBhpPUBBJAN3UrshQSyHiGXURoS56Y1ZmZLJQpFySg",
  "key12": "5zfLdQprs3iHAL4ovPJKA5jLuPT8TnRs3mpNKiM9fHLAfuEusRC3wrTYcJ2YmTuQjXcUt37gdfAA86VUHAJdjMom",
  "key13": "4wq2hU1eCpn1UuSCfds5bFXebZgb9bDHuAp67peQv4kZmhherk5sLDoF4ao7vp8N6D4c1Pm2TSUqg74FfEDfeJZZ",
  "key14": "3DpWLqTG7XesV1SDiK2x33aYrujf8R6imaxSMGZ6SUhWSuE6daasZMtVCn1QymK3eQQzHSny8nXkrGcJ4XcF2Adc",
  "key15": "2rE5wWER2jaaetkHZ3HMcuoU2javxk2czfDZMzQ7sKFTSY5qP432KAzEtLnxZu8txy99u3disvtdHTUzBgR3MCcP",
  "key16": "5BDTXqKZN9RSghjQMmb3AfDSrwfW9wUFoKaoiUegCR31NfEDXmE83P8ZttiyZ93CJuDcTAJ9cnaw4zmHKvvNZrcM",
  "key17": "3QcnC8jP2gcRC2tDoricLDt8Ee7ePnHkzFadxqq9BJFYtWxzkukcU1FXd8VQbDbBywxnB2H6oGfZU8MmtE39jrBh",
  "key18": "67UpbDexTEZLEdn2WZ1xVCuEzSs7QjbK4EBXZ7vSFNJBt3o7nacAMwia2WhQwWSNJ87Fph2DZH4NEFNrL7JcX2Ah",
  "key19": "4hpyScvKLu6HiNdQUfrZtaSBC7KPrZyhS4ZkJ2ewS9k1zhFTaJT11L18BtDbwmCcWis1EqGzMngz2C3Kq8kaumG4",
  "key20": "2Q4GZ3CLoDj8Sc9gH18KsFpJes4p4NmFJEJzDWuEgVvt53XimYVUKGgWwJE9eVB2zLWPhc4vqgfPdB4ATTeCaL1x",
  "key21": "21a6fCF2zin9BGzY1wjPfBDZu7w9zBDbf86kCCedag7hbWzkQCPUoDTKWw4vHC1MMAYtQ8MDxBXm8fjua4Tt84Ko",
  "key22": "5AKvWkuLSacZzny9p2RUyeG9ftTgLMbL4G3MXQpZ6yT7nkLE2sWmtK5BbVczfeS4bZ853xdUVsi1Pjd6C8kbhr1",
  "key23": "2dz8U9k3LbbL7KLCTDoFdBzyWujgbQuspmFJoPxg52symqKM1v73GgNruqLUNLVBV2xn3Coi3S5v5yzuKZcKmQuX",
  "key24": "43Rr5MQ1ew7LqMzqM7U1tJz8gePdXgj2vu9n9H4BkvPbZNcYBxWfQq58swMNXoHw8Ssh3aPLLcJXXVSEDErmEFy1",
  "key25": "459gPDoMxbrKyiv2CKRNQj74iSQWm3ZmBStdUCSq8qUX2hoY8xojiSHDPx3WFpZTvAoz9zEBSq4t6Cy66LqkoK9G",
  "key26": "3oQcQQx3cK44ZFETfBaYE8NFGRhxwsX9ynoAcKQFBkaSYMbsoFcgFj6vPH29ZV8CgAsZ2NPAZK9kWqzRBJQHbMxC",
  "key27": "3pwBvhAQhj3FHoWmaWWuRiCWmJD3BU5HiPuNP26wyT9uQ1riJJ9Q5bF5cRjRPnsLBwvZ68dRp2qbZirmbK7fsfRf",
  "key28": "5qDBV74KJ1zb29fFvY6DKHpE3bVymeM1LfxnHv6HtfDCCHqVfMoPxjh6Nais6wH5Mv9Sd7LxGbtRvnKwBNcQhPsL",
  "key29": "43Ev9jnotbu14v2B484ME9Qh1a28WLmNbb43fbTE4HQaaU3R1RsBTdbGH4roQCsUbmSrJRvykyadJwGhCn9GG3Jw",
  "key30": "5B4MzUn2R3SZVeYhbBPkCVLijRwMxWtvWHAkqNrNKhYMZK1hvd2ftDEhKLXDAeeZdRfHdAWVSYS4Kz4ynfr3HY51",
  "key31": "4NSYxk4tvEfV6WtNE3hrJSkdpZDBNADu54cvRzVyEW3cXpQh4AD42QC4PKwrW4m6Qppi4HLgRLdwgcGNGBFWNucx",
  "key32": "2HyCqCXBizHhXhqUwfbbEQfsMBctPRN7CuT9xJgtgdYUMNoZ4XJ7bqsuxN8asWqi2Jd1QmiATB7tDLDhT3y9Q8v5",
  "key33": "4AJXorsmh28cUuAQhT78Y7sG1R1ZkwHkqNpnAS6pdfFYnDcoy3SLbzNtbPz63eDvGVUknMzfcHppsb2AoeS5yD5",
  "key34": "23Zo7ZLVWSDLhyT8xYbfETuC1KgtBaTVc91xH8dfFJreUDsqGNg5FRAzaDFDhm8jQmkA7H8Rz2wUDLD17EhnZCgh",
  "key35": "3nF8QZs22q2HKiUymKf2NJq4tpQcB624iVef4jGbsaLxKnFdXkFBWiXt56r1kPtn1stSogmyjYNMdWt35hEAnnKk",
  "key36": "3pmtjMxSBwSPjVnYXAHSafZVL8fmA3cqb3nPKKM1SvD9D21HQxCxPt6ZZWTkPv2wmMrD2gzHdTAqbEXQJNM7RN6J"
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
