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
    "5p5BfLxkVnGGjxgY59oDWe2xdqi25NTLuZUohpzDpEPinEjbVdc8vYz65DkxAWaRsYR5aqibh8rUmCEJfJZgedAn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yXDKWJviGJHBzw7ymvZrfz3VU7RXwVoqYiBG7HoEXJ23LKR6FnuCC7U4bhnyWanspoi2e2VXHtAvNSRJtForUni",
  "key1": "4mUyam5CMZLVrMLj4nCVGQvqnXooxmbhBt1ntPHoBWUgb5GqrKPRbSTA73x3da1AvqKhSzWdB2vJaP2JD22pTHub",
  "key2": "3s1iC6he8jLSSMtU3q7qRRqbBujdtLxwBmYsyQwtEATbwHSnu6t8kuoEmThci6neNxhwpoZZw5mju6XGsdQvnLd4",
  "key3": "3x4hKBsz3L73HEkquKJdAJf2ZXUwTvGcmY4Xxa7KJUKvZgRXzjU5bBFwkqYCxeervJoJryAV4xmZVCNWzNV7utkP",
  "key4": "48cxm9zC5MEQz6gpSG548XQLjokBqRAyFxKk9oWh23Km3PYRDNMMv6hFG9vZveQTsFi2vFrkkmoBoZkxYY5L7yj5",
  "key5": "QPiTSEYM6ghsVWdDUNaD6W2s1rRFX2r2gZNSuCC1ucRK7zn5MjhJQDD7M4xp2Y45zTiNbBbBGut863M9K1vB1Ax",
  "key6": "5oN2QaJPFsc8obVn7FjKC8WJi5sRkn6QwLEiQ3pVLD22TKt9LScxBPtCVsqNEGfvFS9vGxwhS9AwMmmkZELVXkHi",
  "key7": "3kyG16QMZJRdbcXGdErxhMs2SjJXZdtXAmxV1khBQYBTT6rCbYZnJrqT3CPYbw8G7VQyvSwTpu1VV4pnHfUdjsFB",
  "key8": "4RYj1woWAd5kt3YDzcfz2MtWTFKtHJ7iQWVHwWiupke98GYyBYHuHUsMgEekn4oVBbxdhiLkqyomXSHwbZ6rZPE2",
  "key9": "g3gP5m1VQpwsDMw7idfzhveYauPRMB3ud2hGvY54V48gz6yHUpe2iuadEUELB69mqZoVNf2FP5rzFxmeQCxVPi7",
  "key10": "4iqvoy4QJV3J7uC4d1YhtedWt158m9Rqh3MwedS7CgjNEudNAfekRXfeifZeF9wv6tgdMeB1j8EB2qWk1dnSjArP",
  "key11": "5YpZVhts1Shj99xqq5EqUvssf3ZJwyUj7EWMHjbiCR4LcrKN546kbpiueXmAA6rgyrSsLrqmNYcMfjzaitCg1mWj",
  "key12": "5GtTw6ULj5TG8CkDjcs6qeUrewfdPQKPfspwCAjgPZFHPdLdfSpifG1AxqPaZmZGey11HXAkYiyZEa1nVzzBTU58",
  "key13": "2oy2YJWFLKT4trijgnNwtvyrjYfCWAgrgCFqDN4osQM1gHgVTRqAAgiXMBVmJ7M5bjL4TpEmrmi6cori9aUzgVXZ",
  "key14": "5NjT5aL4HEVPxn23vko7VgTaBRLNYc4ar4LB5B7sRgucKAQ147B4ycMtBQDJwACJJr9jEJWMVYpeZR2DBwdn5eW6",
  "key15": "2XygnMUbAnMYXL4wjQxxcfWMZYSZTVtKqecmD7rWWjctoFTpiKQD3CBZR7htNtF6T6ZsrmhnLDn9qhpixCgbpxXT",
  "key16": "cxrEi6RiBFaJggmorxJJnW7pGhihwu8yrqntrkYL1qpyNPZV3WMrAR7gEQNbFyNLr1g2zjBN4ag9F4bHTreJSfM",
  "key17": "3kopubpKYDLuUAhpPgNvJBGwg6P1NQSnEAkCQbTZ5cr4oLdqEwDA78PVoebMSPna4BeKN7rYcqrwK43UaJ3C5rPR",
  "key18": "2Fg4PkNDcPsJPCXKQs27nvcrdFxRrSuwPCSS7xZbLfYovSTWTjWFLB537kb58XDry3mhzqafV4A2om38LHjWjtdQ",
  "key19": "3ZUzyb65TtPccJNL512dPsgQsJUTKvkgQM2Y1hzJz45DkiprEHxkVJUeN22z1PD5jDa9YCCgAyLxezu4YfYed6s7",
  "key20": "2PtmX4E964hPiPnGXZFh7AaGhxSszqGt48x8EiA9E7MfamhXyzafxChQmRvtC7DHrfo3Wrjy3xVdeNDesSVTBgNy",
  "key21": "4rjG2hPNT5YKXnKAztSdTAcELYAdnTrYZ1orKiUzDUFFBDbKpJPdS6Dm3nNHBZ7cH8nKHGbqEVerx8tvWXnh3R91",
  "key22": "jomf9CfabvBMRVcw9ZkKvVatwccLuAGUWwcaUHfGeMWkXn7YrZhSB7j68FHrW5WhpDFHwtaGi9tp2p65zCui7qo",
  "key23": "3xR47yu5P3nYcEc4e6Cs6ekKHiZz27SewNTT3B7ny6Qd22YKhca9hqnRq6C2zJh2HKfyFUhe1c5EqpofNTBQdpCS",
  "key24": "5hK28Td2ZnH3E62NWHWXv6P9gtzvCwLZkasZbHDLvp5wpSZsteWGRgseDJAb3XJRbDN29XLaUz3QprAEkDjswg8A",
  "key25": "L3Wx3YfSUQxgdWxAgE15NFjdHmWM9bWwyybTfAcTmZS4LtTHE8BRZbg6Xso3Xs9tLsWo3jXCwCFj1QDG2FoyaLf",
  "key26": "5RraUv6PPH6ag1PxSfvsxGCSSA1Ks4fCWSCEBtZpN4GgVqmLSpvQxpqDRb6kzYM8XQJ75p1r4b35ZrtZEnganxKM",
  "key27": "2QuaA5a2CqSXDAwAU8md2kvM9kJacyvG6jtytyjsnrtxMmNDvrMtdJPsH5wZxMoZdJXf3QdT8UWzkGhW9DKrys7f",
  "key28": "5GARUYy1rHfxBkG8Txu2z12qfGcAG3LrWLJ4asBBUnrWYTiSXcMGaYJ3qSJHiwW8Aduc1vb5CvtEunMUdU8Xgy3",
  "key29": "N5EbUrfnprm5MBdEG63miTMciKbwQzUY24vnmrysKDfTedeU8LQbq3QQY6ZPThUaPJTu7ohJrfxJ6YF839ChVEN",
  "key30": "54smXcFM7A1sJYgTX4dFygLU629S5q7a8oABa1ftpQQFTxM7GiEV98r8ggWwn3nkoRzZ5WJNqaUMyWFGY2EvbXhQ",
  "key31": "5Gyedv9VNNt27dVhy5tb5QQBXfBWJM1rXtA21orj74YrEXrDZjFjxyaTrSm8Ma5iS74ndWNAkmwdEyMSigrhVEJ4"
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
