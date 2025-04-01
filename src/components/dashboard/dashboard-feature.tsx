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
    "dFHNDPuPKuMHcRT3BZV36TXCAvQq9Co8AihRRypexkyQ5xY2sgd6ZnUHMHiZWY1EWVk4ZBKJgWVwvudhkZ2Zj7N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38ZBCNqH5JGyiPxxLBmphCxfmksqJw7myw5qVurutAKXKA6eam5DQ4X2Cs22x9hq1TnuxcDCqy5dfVXkwUyXseKM",
  "key1": "M3SrGScReX9b5FRNdbeJ8UgcRBuqLNpA5d4ywy592cTWZMdnmny458q59keQEc7R4gTrvpMsr7UwMgXqfNKTqmJ",
  "key2": "TmbYA8WMCuZTwDwYA4sUjUEc5fvzMvpBZ3zRuwHpaMufrWCE7En1D84seNpbYUNqNfcUxpu9LNdUbZZAgt76tBr",
  "key3": "4vc9QoimehamXmbnqWA36AyZbKjPAkcsdKD9WBH82psNZgXYJWjPBCxN3grdCCnQUpSK6bzPaKLfF3EVJtgQTN4H",
  "key4": "4oF5wc2evjY1HxaESRXNZEQgmtZ5cesDiqhLx37vViFrbJtrzg61KxP3Noc87693rLFfcGfM7js36fjHK3dzLiA3",
  "key5": "2fQmcdQBbkXf1FP4MS59qomRu3sGXkvX9ei44wHZ8dgEqe4kthcL6uTj2mmhcGpKv1nb7EnAPsNyTDvC37sMhExR",
  "key6": "5gdoDLwEpmBZY82W8fh2YSzTijK2aAT4QNzidwBVMwixDP24zAqfremTVPNj6xBEnAVGXBfMejKQ2u9Syf895K1s",
  "key7": "3Rc3Jjng1jCeaT5iDP1ocPMVzL1FBnYGrMmkymM6f1G3y3UEfMK5Nd8speWbVzyhFR86HYmPpXgevBQ7f1gDU2aa",
  "key8": "4qKtiNg1fsF2b4HoaC6shAP2GUw8DKXDycrz9puTmxBC1rV5dUcZKyAqGYKDhr66ohtiEfBJUcbh72uLgaDWk91g",
  "key9": "2rC8NNERVyASvSmxxSyfHMW1k4Wn4ZVPPwRhfqUGiBFXpemwZQHS1ocx7GbHPrxBxJsycYEYLuGWNzZ1WGWav3Dp",
  "key10": "4gf9q5oY5ndCUyfysomhQjwLGGHfhXhcLiLhnqaD5gyRWci9ZdVEiZZak9QyHQsznKEutfvJQ6n2D5gDZZhhKNKK",
  "key11": "59UnQYPs4wowC2uvtBK8AbYzcRnEW4T3QGcFdaUzsVjkvBtQHzodRApbJ36UZGnSRn6gfrxVt9BrJSJVFM9mXkm8",
  "key12": "5EREzG7eV15WHvbEXJZDmhWUcvJrF5kDWZRphzAtEeJpVk5NPaFHaJnqxogpsSzdMfCpPXPtpv4rjfQxz5vf4s7s",
  "key13": "2shMjh3n3VegN3bJ6erGjddv5wedSagX4AF3vEpoRsBk1kTQuEExDs3UKaxzvbvMLfkgrX8iw2UsNoHGfv19a1QX",
  "key14": "6GtGTnPDrMA8UfQH5ZdrNteEzEPMofTgYHKLj9kKcbzeBBGS9n2DoUnRVMmizXVBfZuPh1dFgCyhVsMvFkEpV6v",
  "key15": "4z1tWcCDRx59nBRFmXKnNbU5iYdwGpEpEo6kpRbjfNExXT5Cr56mBcuyUEdM8SmtZQVFwRANnHrWHqFz5481U7FK",
  "key16": "2FEaVNrTe5dTdJrvcpH2iusVdT55Riuq8P3kWUrp2s7vf9MR4tj3hrdkvRRBrV8cgKkhEpUDGyR2f4vsM6ACKKzX",
  "key17": "5CiT7m9dng41cwyKVCbhdPezXY9P97V7qAyCCuG8b8odDi4CfCfVe63hBNmJz442mSYwGm67GMLnc75oRMbByAQh",
  "key18": "4h1eHGwH4ZVScg27gUyWkSsH2WKdRNFg7mz2BCHKkcizWURkWU1uakrX9TWqtWwLAFGVwp1ZgBAGncqA3ZUdqocN",
  "key19": "67XB4gXUz8w7MzxymsCPYLopTiqwiqE4VPzCnfSAVqGS6CW7VrByiDme3u7UcUTz5QLfMU6zWr6ucrLtSCrL9bim",
  "key20": "3VRyidT8dzQvcr3hg427p9M1VmirFt8u3LFx4enrrRxgbK3cGc8A1V7YQ1JWUXkDf1jda2CWVhVant84Qg1ZtuqE",
  "key21": "3f7kKHrKVHzCaYmTuqGw49qQ9xg1r9VW9gvnkgrkvuPaDPxNim9uZ9NSS8CzUqozBBYpBBK12LBqvRkZ9xQXN7jh",
  "key22": "4X5CotqAK82z7PWYfVzUoBn3hg5CKyGwTVpmsQEEcDamJXZHdPB5uKRvX2sbpap7XRKkGQA1gjUMCgYtZwJLFa8W",
  "key23": "Esm1HatVCEFt4AGxBxrgvGimjeZJkcZW4QsTpypqaFCEcqebaq8hnTqFtpSnS64nYfSE1yjPFKpHH2yjEPy5Y6n",
  "key24": "53DPQuho2kMDb4Ljvybqe6xQLC6fhr2LAsqXNVQLt3Wqi6epCtxMh39xiNUo9NQBj2NMMxiDFTRFSCUzSz31fpYm",
  "key25": "3pMrSP1gnuGLJhFgure4CRiGnMBBXnczJo3qUhgUb1DyWzoyp3sDY4oNfBHwXgqQBStdFqdApbA228XDrtWfdqoU",
  "key26": "35Bq4rhwgH8zimiXTGLLMx4GamquTELbPZ7oeqHHkFBTHVHAsJfpXfS9uaYtffJ3po7cpZU3WgMJrHMFQ2JbaSSj",
  "key27": "3Q9Cnv7e2gYtcg7DgrDYADXd7wGkScfiFvUTwtTG7XZLJYXqq6aqk1m9QVmdyMNedDCofN7Z7UnDy9yhd4kUxKy1",
  "key28": "jwTHhJKBuXY3jiUR5brB7jhdNQnn8Ue8boX17VDSWQoU6bqxMHYAUkBWmmxbo2YRdjFgUahFLDz7FWmnjLd3wsh",
  "key29": "61HMSD81Gd6NuNANUUgPhRfEZRXMfx64xAnF2B26aJ5cMFXBCjcYPrzrv2cdtqX9dNEyDsa1AdDZUZUPgY8FugDr"
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
