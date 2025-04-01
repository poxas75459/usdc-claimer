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
    "rEfBHftFh6kiuqGvWEgfRFJYQYWfCJtqKotR4Xfm1u5PGJ8J7RP5rfpwZXSUHyhTSbwHpvybW9bG5WADtqmxE7D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "253SFZk6cit2knaZEbYMeMmYA1vYnsd7A3u5TjgpgXRmThJZ6HgibMYXMPm4z3uH1j89EVpY6hdSTptTBzQj3LRF",
  "key1": "3mh3NT71KNnJnUSU5pQsWuMUVunX8YaAWP4FQzEYvUGCviz8Sjpj2uNxm3ybHrbnV9s5gvPudJgeRMPBw7NPg45c",
  "key2": "5Vk2qbsmuvQYrFB7JGp2uBmuE84WH5jC1CBurzzktRm9nfAV3rJoE9x5cH21AuAwopShuc4VyCMj5hktHHLftUCG",
  "key3": "2akeZMYYSWLLT7sKQPe7piqtVgk3DYHgiUMSTqeEWVQku58RDMAi5E1E1mJ8JvVkcLnL7xp8KxcXkQg4geSrpHfh",
  "key4": "5B6cPqMrDCgGafSgC9CTLKJ6q1iqMoadMe3ueTVf3XPjfK6d1EsAj5Uq1D9Nofka4cgUL4MaGCY8p2qBTmdyS9xv",
  "key5": "4tsK5MFKFpYvRFm8p2d3QuHcbg8byeVFR4KsEzSXFgF5VzTGvzeU5NXo4B2A3ERcZHrezxiBhzY9LtpvTR733srA",
  "key6": "5B3d3mxJTCDcrgMSvft8vD6jdiEL3eQ5g6uor4aEwYt6Vn55wXQhKACcGYQZrF5nDjKrykZj3geLmwKbcNzqArrD",
  "key7": "2VPaSRNNC8NFQjHsgGpVxGX1bxxDLNmKdxAWunZmhg57RW9NDjdwV8kTfEMuDsfgeemidL9D8GHqh21BWLu4U6KB",
  "key8": "3U3dTg6BGtu3rY13H9EzcQKsRtLXMmhqi2kz2Hk1nfFvFmc3cG7NahGPhKRa7Jd1eXaTBrx6sBr1ALs1qbvBDTBW",
  "key9": "5We5RQ7v68kwk1dPJx7iAYCnSnJtvr3ip3NvgvPWysJGDgZDNNSXfBc4gVHevrypUsSLxApVKDpZH6sAiz9UAeQp",
  "key10": "55eWa8yYo4S51XSDWwUKpjtcBYBtJVerKXMHCRNKfwRsXPToQ5ASGrAHS4CLuaozx74onwdRAvokYsRJ3FqE3LLZ",
  "key11": "3B3WxuUN1GpYHZugL93TDVKpuk7Msy3QyTYUVQicZXmtdTYTAXUGFcWJ6qWpkNy7zmXV8mJQCqSzspnJn1vCdY6B",
  "key12": "4DR112BcJEY7FjD2GsSPqEJDCCPpMhZR9sSjELzXebHEtxJ9cfb8UMkCBVCi3uYjeVYzmNoDVRY9jeNSWRLbtf58",
  "key13": "5y9oXmBkf1dJHLJGgyn68A1XvEuYthkMbEeBGfRWGanXoaA6ACbR1u7XAcgi3PhfqYTsgQWCTVrDjienSfK1j8nb",
  "key14": "zKQGiqKGsnRDFLoRAGMGS2m5MjwPRU5xW2f1kSbXrgUSSviY4Ugm9KzzmUEez5K2g9YCcBUnjqcURVDjefmi1hn",
  "key15": "zTik5ng9cxAWKU3rcC5V78x33Mvb5aVL5ANw1tToQEYV9rwYQJ4uWuzTtxZASTQo4aAebZ3mciZDNmq23WFiZJg",
  "key16": "5fioMc9tfaznTvXxVLrB6dcuUAFwZwQWZLW84VPW4LBCSFWzwm68eiBN9TC3emyWMZt8ZXJnEESoHG4G1y9b3sz5",
  "key17": "4uCnjn2kHiqA9cR3sWHn7fnwiW68qDPLUyJPP7xrwCUxnpr9T6g5GgyHNfMKEuQxmybncs6z9KqJHKGmToeYRUA4",
  "key18": "5rijR2Ja3r5ubTyg5AiS15P5fY1F7BRqc2NXVoayNcqNrDZwTh8Fo2J4M1fp5SADjDt4TSneXtPguPWwmi5voG9q",
  "key19": "2mp3zfLCHYzgUuGMnKtmc1m8zffHMFLVcDSnA2qZzuTxgziEWnfn3Dk897CUo8mKevaWarg6eP4LWv1vs94j33Cd",
  "key20": "2F1VQqSnejT5rkxmwTL7RUXMEPXu4ffpJny23sGpuezwdeNoe7jJWbschTFDscUEZiSpRoPjEXg3xnsxd6Nupndd",
  "key21": "2XBgYq3grGVdRL1Hk7zYkUKg6NVKLRQs8MGgsavXbjRsXpXCQSo5Erz5MuTHpxEBUuu7vLMB7VRqMPjVahPoiBdB",
  "key22": "599fwoXUDrxTwvtpozNrXwbsRrXHoEi7Di9He4h1kqv9rYdzFLCCzVFEbVcXfbxd2EGAJU5mn5NRxWQpXPKgq1zw",
  "key23": "QgGV2jvxD5qjQcSZAZweDdN2tDzaUVTNacBY823cZyJdAP9W1Yg8dosY1SgLxAy183ZvU8Q1Azz2xcrM9doz4Sw",
  "key24": "4M2i7rtGqkyBASkSyNjsDB4qdeqrwdKX4Ku3EUaf29ZSo5xsGPvjmtoPwfQrS9whrpsGLKNcgXs34QSE7fw227md",
  "key25": "j1q2zfeDuNnJghaAqqUAiEny2TY6G8r4DbBY98rHbpQseg3MgjYgQwru1ALatBotyWX1K1AMXXn7Exxam5x5gmK",
  "key26": "3WJRnn9mmrjmi5pzLZYRfSwbdwHCEMxwmubsyWowJRzZSUPmhdhYaMR4A9GkoB19mhjoB54EDeFrJfLMa75hxALB",
  "key27": "2zyGbA6QasxNZHrhE44y7hWPjsh33ErSBKD4vnYVDxB5xn4aJ9rcZgN1WLV9CwNFS2NMaVNFNSpVjL1MhfYMHSUT",
  "key28": "4QF2A3ZZoErB5fzeXjyGAvLCm45iWGVx7RMJ6kWTifeyUFTYcqPhbEdWW14BzsrqDpBR5s7sygTD5ZqeD6oac8Yo"
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
