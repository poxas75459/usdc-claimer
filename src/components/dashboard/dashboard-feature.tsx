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
    "66wzhcYcN49DcKprWhXEeKpF9A2Rp5wbzYz88bMHzs7egW5FCqYBbZBufRhfZDk7syN7XVAHYTQboF69kzVY74CV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43wPoGLaPUgYya11So2mQuwsnqZ1DQzbaNEnR6kMugZTCk29RkNdyk8XuyQvq1LpEKmCMxLXdTTC4AGToNDVa438",
  "key1": "2eej4SMbBVquCMwZbjKhggqXFDCBHB1SboyGhD6FxWqxL2xq7KsoYmWPLMxKV2RKaQwY4sGLvEhzBM6GNQKavZyt",
  "key2": "K4zyK9pbDfHtqcPACSXzdE4TL3eSsXU6NfKSV73ueJG1W4TGa1tk6PAAX2mqYYii5w7A6CKfz2W8pB5kLWhq9Tc",
  "key3": "4kKw4T8nX6HH6axBWfnMu9wXvxq1tyKsC8Uz1hMZFAetjEvz3AgB1J2fbdmDnn8RUzaXBvYScpSzXrEyp5YiQ6jb",
  "key4": "2HWB5jxfaYt9q1sCm4w3f1hSzCdJxVumvvZxacNBMY8br4n2wsUBLr8A9CRPy2HZa9wdhrhX37ZN1xqzvY4NezBH",
  "key5": "4s7ek3s6QDh8cs394DR2iK8uAKRfoFyET7vfaMNgPJ4WJiXt4ggF2zpH7iButew1bGgSFe6FvD229PchkuwbR99b",
  "key6": "5bsFWGkRsiQnpLYGQLxP9cYYN1JMMpp1pdij4CicTy4vSFFYCTBmChZK9mCQf1bVtjZnzf2rDfMWFAFoJieYLqpv",
  "key7": "2AKJWDPDhSgT3UTv3vVpQjZmr5NPA6qWYYB9CnGE9bxRFwkrsjwhtX2QXyQ5Bk5roSRt5N8A8XoM6iv145vSw9vN",
  "key8": "35a8JhESGunJRrFWXQEMcVwv8Ez9zEKxpfYG3smS3nDjP424Wbnd77s6b9KEKzfSjhudgsi8n5Nbuvz6xAGUMUnG",
  "key9": "5cA7q4Aj5bf6Z2gw13SvwghYGRa1CB5yXBoHHHJKugUfLBaBAJwRhb7KCdP9DP9pBLKCu88Lgo6T4tPLmUGbmYnk",
  "key10": "2TU7cibaLVtx5sF9eaA6YbfzSdABDs6GPJuXdmpHEbCvNth3ZEYoZUt6igM7goBDX7GSyLxBneBLpwZCFXuENRwT",
  "key11": "JBXG9dkXupnLvaybMQGTFBHficRzdsLgPigH9gP48AYAKPksT1tE3xhXZz5i5Y5me5f4zk8wmZWsBi1wHdFkrx3",
  "key12": "2ZYWibYRo368DGif7Fk5MnEGXQGHtS7ypFjnAJACKBfonrzLa3jrg4tQdtaYYZwf444kPharCtAiPVpw7gf4G94w",
  "key13": "5AW9n9jHuduNZZeNtv8bpYJ2BXWZQvSoAKLiZugF6y7AFUEuUQkm8MERAQVLJu4gCPWvKhTgCJnT7ozE8J15qc7g",
  "key14": "2VGxQKTMfAYHrDBNTKdKLCDvKMeuRtSjAMmSNbPo2GcyyoqvRpvQ9EVZKMPUToE4vwriYME5e7WAfS8QG2ph648Y",
  "key15": "xXfFVNvzJBzmUjsRxS8kU3hepefNGUc9QDbnRPeNv1A2rthzEgNsaY8A26f7zcZkfyTZAZdDx4rEjy6ZrCxn3M2",
  "key16": "51BEeQ44PiTu2ALakTqXWbaWWYzTqHrGF2Ek2T1iNCeiveiJ9CjiMfjp55x5fyRiefgMLzcLB3zFTgyKXKpiixnv",
  "key17": "3QsZwfaHYGENtVm89q1YYarEwMuPV72eYffqhsf9Lp1MQgrdbBeh8RvLc13bEVyoDYcTV3UH1zeQhPpn1ad2Xyp2",
  "key18": "53sPWJ2ZsMXiJddGQzEaSBt117MMQ5UZeustMic6G6cijvPJcYyyoXcH9H1QJJTLKhn3kEkGr7sSyPTdSiXUAqgx",
  "key19": "64HZ5QwSTvo1ky3N969itTpLpD673Zi66RuuwEZFRFq7fQ6BhcboUAQ3ZZ4aqrGfYvACzbo97QFNNwcjWHR6DFAf",
  "key20": "2m5HAzkFQP5kw6kdmBwUeJnkjt71SVpwQXjupGr8nQxBjop7mc3UEaWwvEQKZzs3MDWur1XDbWXCdpN77JGqiG9f",
  "key21": "z7yqtBjYJcryr7ebMbuxwWzHZgRnSuwuCWtXxYyoRtFNPupQjkTTyg28s3pKUhZHS7HmqfnGEGw5UsoCSrb1ZcB",
  "key22": "2Lw5Kryoj79dwEnEcLvb6ywzPx5HbLzz4cbguwqBDfFM3EdnwyrFWmLxJedHJ9HnLnNatiadqVV3UWWnwNvvUX8N",
  "key23": "3EosbHaoHcbeK2a5gbrPv9ULBAHc5WdraFngt4ubCTbRahsDXefAhBpmVKvU8hJpGBuaPZLWejRwoj5V9MCmSvXn",
  "key24": "8ZDpzSzdWCw47DsuddRkDY8AoTaCJngMDh85N2LkjMy8Fp3i5AYyMDmDy5xs1eNwLtzfpT29unmc244n2GqtWTQ",
  "key25": "176wbMGXY8yxJtQyxf6mff9Dm8GnojXVm6S1rXs4kC99WoD7MpE6rR1tXZ3fUKdg4QfS78yfeJkNu32w2a6RsXt",
  "key26": "4pPcGGjTJ2VtpLze6hWS9b1aD89tMPQBPBSU6eqvJGfzanTS8bj976BMN21ZwN7UxZ6a6CyH5CTQSa8ugGmtEfeh",
  "key27": "5hgUpW1GGXVKATFCcwiANxGmjqMrRKas9j4YDdk7U6zimucZspkCYmTn6e5ZAkBUwBdn5PUoCsiA4JKTWGZXFX6v",
  "key28": "3gHDVn19Y6WdjrCNoMRR35Z9DXKQeDcipyXSHfhZ7L3ngiR6CybgJSmicvmSnma4KFQ2XHnbu7XYKYCx7KXM5xNk",
  "key29": "276avFe5NesS6H9unjaqL25ewTiAoswGLAhsk47jKigXU7JY4iE3A4Loxd5g32bRWeMMeUYU19t4Ne8BFNMmqiHn",
  "key30": "5bsZsPuYUp1XLdKPib337zPvdiV7EtZE4F7LA1KEV8L8uGi96YH2ZZpopSabCBVWgnEN2Nqnci7gWt681SKNRXJ",
  "key31": "4NHvNWVi9dsxDgJTxKm2HjaEHumDKsUrQRGx52oSbdkiD9fTqVZZmiQnuuRBxLkGMW2166WDZfnfdsiokXAXDaE9",
  "key32": "4y6uMrfTby4qGHCYBZkY5YgKGoGQzq67KwGDxt2AifAZcB1gpcQ72azhwCs8jkg96rWfJRgsjeNyWvnBr5jUrZsT",
  "key33": "5qAoaJTk7unzekzauti8sf5MB3UtcHMJQMoDyJUfn2Qbbo5S8p8nGZnrc9xDAKrALNuKQqap416acW7sPYq1b1T9",
  "key34": "3Gt2RLPWcuxtUoLaLQDajnmUkGq3CjeBWb7pJpH5jYn39vew1H1qAapBTKqtpQGwfBeQCpNwwgjoiTjtAhDQBwBz",
  "key35": "h9pri2tbzJLQcsK6Vf2aZSvsgBCZ7qSnh8Kgmby2R4KZEuBqMHU1aL1Xo1XhYyD1AKHpwaFjSarHD1oj2J6ka6v",
  "key36": "BEmi43VCi42APvtKP2AW3gvKHfzTcVvAYcR8CQUfJypZXtrTmkGHuEMXkkasFcGM7mmb99pGa1WWPsswTzXLmbC"
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
