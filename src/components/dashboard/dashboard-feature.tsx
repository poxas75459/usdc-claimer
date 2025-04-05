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
    "4FEvjL5xhgVvFD3wyyZtvY9HzdhBTF6hVddrJr1TBhgFx3k2HzgcQSrmvWB4NMs6pH7ZMjGXKahdPzUtG2XyZtmJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RiKJavCpbZw7uPB1J4wxeNxYyAr6QRp3Bp4BTDMJYkDHSh7PQ9GrQZPpo9ozR1J9nWr3akbitbXSWaAsA3V5f8a",
  "key1": "41sLmn3cGc3m4jjfM6wmPZjv5UwLDkoybQGrmHJ4doGG2xNbvxtX3ut9pApi69PvjcCPyeZLwsfdAKoHnTTthcrh",
  "key2": "35qMCE1RTem2GEVeHrSWPKbYd2ndusDAf3B2NmUbVgRXBWVkALgVzxVjb1ySHGh14eFFG4L6t9DpxPrXpNeGAAgy",
  "key3": "qYZsfQ1RJ9oRVTT2W1mESCEq1UerorXRiiR3C2NB8ng7bRFV8bBNteJrBBGSSRMrhXmTg1dNLpGQ2SqprF8HZpm",
  "key4": "YR4xQxewgDwYx7ZWBLDtrEei4CskbVZhTfWES4rKPSebHKpocTYZ3fFFetxxhG6gSwkizRXVWJyWjUkK7DfwDwc",
  "key5": "5o8itkdJN36fEdmyZYTQV9pDToGzSkU4T6eKgP13jnvzsZLijKMKimCQCD7BNpK7osyR22Dce83UyyJHhq24RmBA",
  "key6": "38MZ72q1wCXT1SPLy5jZKaZ6WUAPMH6UX1ZTrWVT2QbHJAuRp7CHXKcrSQxP3FbQgh9XrTm77VxKTq5BdSZbaScs",
  "key7": "64Asrxbddm1gbz2j1fBoGWWvVsco1yaad6VMwmFFdhFXzG7fT24GaJqGTGQRc6uAYxwuGQ8TeovDjUM2cT2AAsjb",
  "key8": "4PmZBdUMA2mNuza2gSJvQtn8hhfK1Lgg7HogNkm95dYacHquZhctAMnJUsh2j1xzZ9jvD3BWJCMPttG4uThm2hpp",
  "key9": "TQe5gM6bAo9VdasMomLui2afMfeSgvaXDHGUogUze1EMMAB8a2GwPezcbwV7EX2gk3PgxvGcJymcMZsqtGJLz7m",
  "key10": "5XaEZ4eFXQ9GuuKx6PMeW9rEUu7hJmoA3phxhguzWKnR3v2gMJ7tqXVSJ3a4QqAGLz9s4bfJLiFSNCS6odd2pGHJ",
  "key11": "5GbhvDwhvQFa6sdeJoh71NerHW5bbEiYNf3Zt9fchr4885bBnFD6cWMcW4SAvJjEGJftD3f8R5eVfgD8T6vjYCkW",
  "key12": "24u3fAj6ECsXTEzVyEyk55VDizTEB7Lv65vRMRVDQqso4vSvbNCRQNixbrKKnqBd1SrdQyxt74wnXxh79L9ACE2k",
  "key13": "5EHG5v42zcwLEd9CoieuymM21djeYXVyGzjaLy4yrWwnsBQjaZxxz9gLAptkSKsHXApeAQ7HNjYxbzhEov19cDG8",
  "key14": "5gmhvszt4R1froSktN9X82r1CXgsh3ziZfFg4dBnheg1QENMdEaqznbxSgFJ5bT5LD9AkGfTkks7aDh6b3XLgFiC",
  "key15": "3GUrRipBfUD7G8KrbvEt7r2MKyu4q84N99KyYd3ssiJQWG1s95Re532xDznbQMmEK9GSxVnvda59A5T9twb8CpGS",
  "key16": "5PEGc6JPg2dHn1ADJXmxvEsi528QsEup4Jte8tP9e7XRhmjqhbFbqNeuVQjonSgADz4wcihfZKRfnasGgu4CGsqS",
  "key17": "3MpcpH4yMZrF8EhucFzo1Edwh9TCqE2AKHKSAKiNijFPP2j91g5Nc3PX9bjQZR7HjvTQbpCfxUK6KXwiALBwqN2M",
  "key18": "A2DuR7xQy4NQc7baoPQimmuKduXuRNgcDmRH8Up5Fey9A6nwwCWokujX4SX8bYoiB1RDjNk7mU8C7KJQree2AVA",
  "key19": "36yiLmvDxc491VyjAytspdVqBnX4VdkRMGR9j6bD1QeZnyRRpmY4BBCDrz3zU84acR4mCLnd29TGaHnJ5Zv2DnXx",
  "key20": "3V3bHVQ5CCGezPVocnnaPZo24CU1WZ25yrCpSVHsNGueT8zco5pagtS7GcenJkp6cycRpf5RnFrxnaTC6VZXgdfp",
  "key21": "2peMxgwxAoSVwzQDFYsnJ1mTGe1YbofbLx5rHkKw1NcGRaYavUUa1C3nnPeSyYGhBB1RHywTFZvCPzQpRpJpqxFb",
  "key22": "soSt2uAVH7ve9PgYgdGZEREcgfJb5Z9zNyAuJQG9ToRaVMuXPg4QEb3BXGtp72a5tTzkfx9HapCFC9uEfDFjmVH",
  "key23": "5k1oALAwMFKUMGtF93hY4fmvZxEUGyzbuySoJCLAwm26KdjUehSAyd6aV6T2zh7v2MgiaCucZDsQ9DQ4T4rEJwWt",
  "key24": "mPe1AZs7zV3oqRBeWxNz6CjpFTQfrFudXizhBdnkbYQxhoLy3TcFU5sUuyXq2yDhcuSYofwteRPDNYaC3H85ieN",
  "key25": "36qoEjtXp9SeceaCMGSnVyBCMadzovgFqotnYibJkpGZ2MZ8BHUvvG9AQnMyhan2d32FgzmMHzkT4MVTPjrL6mEa",
  "key26": "74qv9Hy9zcBkHKuAGiYeTFKeFonbJcsxbU4FrvNgKnBsAAkTbytBbmVh6s9vwMYU9MTo7iM7CMqyM2TiyL477Tf",
  "key27": "3dARxEc6gKkYv2LQqodVPhmHfR55yGrzKaf3Z72jTRgnEWjsVAWgGpS7ZZfLfXvpiQR24ivnX3yj22PvpQbTJR4y",
  "key28": "249qM7KkdzqUHuC6mt4NuL196nkNaq8QYWzRCte6KGFUj42gTYRBeqRdc9QL8nHE8VpJJuPShFrTC4x7yiysSwYT",
  "key29": "4QJ9fVQgGQojHYYu9nFqZXPaE4MJZFHcTRsxPSm9x9PFzXKF5sD19nobV4YvRArJmaRBBFP4GLRi9ggdomGapobK",
  "key30": "5MnhFS2t3DHsbsGCrfvyHem3muxxi9LEaGVeXs2TKTWm8TVUKpxWyW6VXeraXoVKcytc5Eec2Qhmuzsi6J6uawzX",
  "key31": "25WtiCBmnYzZx7UANExnzgCLr848cPqMELnUdax9P7Epcf3jCL58aJfGeVDAc4yuCqf43fZc4zx2tGMb5mpTHSdf",
  "key32": "3SS2ZTeKRG2yoPw1CWWhWGa8LyFToa3BAsMt2R6yupwm1foTKFYzvmWLBTnR5RaUUqDuGHuWjR9PL2pG5zyCZ1gz",
  "key33": "4eiTwfPLPyFYbqZwtgJPMfweLLtBc6QUWPLABSwbJnAJhhFbiLzrtybbHXY88Q5QWMARFXd4wB667QgBvs2Mf9hM",
  "key34": "4FPeisRYyGera93uwmB15BYFU1ATDRV5PdJc5zXVojeMYFvmcREDpUSuCzjpmCwmaXx8BUuY4ox5rDqaa3185rpP",
  "key35": "n1GUWr4GDBCQUuXEgAxs4UxJ8uwATuXfU7D1GcKwdmJwbC6nE32b1UjjbAzaELUQvjQDMvoVAcLnUXY1GJirDQZ",
  "key36": "jWK8iE5vCaSw8CH9VERvWsCEEw3x1T8RdTxx4avgH5Gf1DQQidYta92AEUWMndUJRqZPguEHAtBHFFYJbgYHauY",
  "key37": "38fd7AHhmCVSatP9pDzdUhtpbe6A6R5NCxWVAAdXpnWZydgn9sRLeKojnpjWJnpC1KRXzUGyatgYPq1trUtKLKEq",
  "key38": "dpXJNWbksBxYvEDeB8MMMQ3exdL7k6nmWynQ78163ShCUtYdMd9Bepsk9eGRW9LinLUK649CbtF3JPLUHXhDGDr",
  "key39": "3dKcCh4aQSqEsTnmiCfHmGYPKiKEwdMRqHthbPqStuzuEKM28vCMkwJx2sn7HZEYP2aLoKiTPixhQCaJLrc24xcm",
  "key40": "4tKnx6pG6taDuqagCzKAT3ooTRrrSqSgSKDCoEZLntLW5uRA1marEHCBBddKeMosqkemSMoi696yqMSg6fQZYTyD"
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
