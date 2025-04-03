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
    "3ZQiskFawe5YHdSaBsrrpiZ2VNhk2TJHeiwDpTATXvCerV3fSiSTuW8aVtp2X5EgpQp1UZ8BkGXpuZeftNPPWMGv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eafSy4aZcVjn9nvuyy8UYnKVQVsxusgHxP5AYLeVcsFFzU7ALegJTBfDvvRmoTVP7SJrZkHcioGEMTbGxzH2ufX",
  "key1": "4hPAfe2m2u4ZctmQLJcHRcpJPvtTXesjKratQrP2JaMLYo1KvbxU91t2G9V9Q5k774oRxb28tVfDhjsmpKhwh8bA",
  "key2": "4LknqChFRn3f6MTJ1HGH2WCkReJ6CmGS4fsaD2rfXFsomwkTjadYLh5VmmGBkiium6vo3roAAAQmYxCrTAuJGGsP",
  "key3": "2QHNhyyVZn9ZkoQdpJJRY4iZ8KB6h69s8bkAhFm1kVtgqrSWUByoKWuC8Zh2f3r73ZQifQ4SHbHu4VXzW1b6695V",
  "key4": "4GN2vNXeHTJgyLX8m6bxtC2jsgZranw9ZPwQS7P9VRZZvfGFBqrJHRNuPjCi1cfnrUt9Q35rQLuCsZHaTMg7Up4k",
  "key5": "5NCxtLkqL3MxuX4JB41fvr4NmYWeAYyPyu5GH1dxz25KJyR7cjKzCkjiidWv2d1rEpbtm5F6YwDR7jz6QWjSsx8j",
  "key6": "4CfJmaY5MWixXPKESBasRQVyfmpfCeqrWYdzKXdeKa53bMyjbFfkmpK4WxgStAvNYZVEFUcJSbyTgc3ATrgBQeC3",
  "key7": "2VFe5gpkTcCSbziqZ8hCxWet7AG3hyZfMyCqYuKDjGKToYTwPn9dBg9gkD4hPv7Jx6iy9F2HzmBf7KkHhJVm94aR",
  "key8": "3g6ML7PCSd4VoWcAyuVXqt5HpxZvhBqe6D8Ndsse2ep5AHdr6ZnXq1Y5gndXmmzkfkgT5W2dj9ErfKfS1DUwom3N",
  "key9": "3adioBzrRVEvd1xdSR4YNkcic5NkQnLF4q5VC9zuEd93s4oJD6bCdT8eTU4bcSapYUpT6qBTYjnJ1xQj7jRtZSMT",
  "key10": "wTdzyxT5UBZuuJur9pdNYuFZCzRhqK3evedK4mPKhqNGhpNxQEF6oxEFaV4QT5QuRQY54gguc2fb6Bb7n54AYN7",
  "key11": "5raUNR42xFaTr3MVgm2nspYxsfYsnGs9XELvQZ4CZX8vW9Z1S2WPAmTsfPhCFXa4tHdNkp7zaayTE5YAHMpkLFTi",
  "key12": "3x6JkFjVozxkKBctgjCKvmL2xSZLNHKVDNp8LyadbA1Dd9MCZi1wnntbxXNwwh7xVkcTzvHuYfkk74KoPJmYUgjx",
  "key13": "Q6EnQ7dVbeJuPE7iiNth3BgNoPrFFRrmz2Vrc13vrMMhsjTxNiYGCnWde7oYHANweXFYLJKsrWjLCLpva6hQjgV",
  "key14": "R8x2LsxziuNpdigLRm19UFFLhLhnkpj2qpcuX1WKzZ4uGGQVZTGNabnpCRNUayfCG656fdtiLZ221uE5xHLAtQ6",
  "key15": "44rUiFuQFXeP8stQKBMLmu7D83UNoktZXAxpoT2Mi4pBjyofp1eQBzJjdynLDJ3riGbDvC3cLG8CekxDsP2irq7R",
  "key16": "ePeXVrQ2fjJRnZN4Vk2pzMZqmCx6572tccTtGihPX4PMf67CzP478PWfE3cNt5ksjzcHhRWJYcZFFUZzhomhwMf",
  "key17": "5AVTji639wk77u9FAiamMG63HnqMkregFTEfDn12pqDMdRwCy2J33S7EfGtpCCgZwkxChU3rGzZvCx34jM8uAHBc",
  "key18": "5o8sRyghcmffanVoAQYkL6k1R4YnBPhQc9dFd76gD7YXg4cbHZxASnpUuUd1mfKGGtYtTsZwyfD6SqZfPg4dnCi5",
  "key19": "4wXsyXjDbWL46tHigPdvvho52TnUtAnnC39cszhE1gaeMLaXKTJxxrJszBSwu7D21KAuKERTm9q9scym3J1nqyDC",
  "key20": "2Lo5VsYz4zywMj3JNBqbUhQ6qdRBTMwGz9GihTeV96iW3KeQ2hjiZTjKLR2a4zFqRkLdfkb9vEq3nHHK4Vt7kfRG",
  "key21": "3GuBXbfxW65msTuwdappcqEsLsrge319j86XBi71xs2KU9ypPvNA1QxuWVZx8MKfSXFgD2d6wwZvzyJWX2pc5dRx",
  "key22": "5wJu5MasoydpR2QvPhCUBuN4q6z1VRDyL4yGKdvukZjinpmx6EXEktJKYHMqN5wEGqAe98Jf7dJ9SPquQEcMfn9s",
  "key23": "5tpTeQKyDqt5BSkj38ndnYHJuEV4qp9igdKqw1TYnLEJGgdfbqEvFAwbkRcvmYEaBq5SgKUV98GfSy5oxMBgHabz",
  "key24": "4Pu2oUha8enRiQAchyi3bPivCPAwvAiGaprkZ5KbikFwSEkPRZFmo3KWLfaQXp419p7VBfoLgg7yVQe2KvdtT37C",
  "key25": "2RMLqKjrY4rcFFj68EAsR6y9rP9X7MvDcX9et5czn2J2QbdCyFaryqYrmWXqyF9uLmhb1Y98ULpCtExzLee9gLsc",
  "key26": "sEC1gQD4gD6xExf4XA5Pvf7H9CEndBCEiNBNVQsS3KfBi729K7o7EAvQBDMgTJu961ZNZbj6ZXxhag4tAXfP8hs",
  "key27": "5vB4UL9kzSLDuh8RFWyMGVSgMAQb2CviQV3aJKpcEGcu9eZn1ZMp8qPVYfgpYpD1FD94RCGVvP3Sx6jXRyFhkr8N",
  "key28": "4ftr68HNLmV6dJDxfgpZs6jbrgyeu75Gn9ze3PDsefNuA8kGocBD7TmzpKoFcFMsSKrxC5XYqki2sfYJN9Xyutod",
  "key29": "2tbJr8uqAvrB5fc55n6usnQYkXuZ51gFjhHcxN93Qn4h75ZmeYqnpHtbghwLZg2omcLCfEYn9mVWewVrfH8Z4VRw",
  "key30": "3c7ajBd7hn3a5cGhs4JxzeVeEBYGMxvAvt1qUCaoPrNvafoTLHBkPuVEADDrNJpRXnuYobG2CQdZU2PAHRUfenF6",
  "key31": "2JYWE5LNWBQVwbYrpHna827dCz2HTEDMtsPKr1ZXDytfWtkmcLqV9cxRcabhCuvAZsa3x1ziSiN5Tb6iHiz4bK7c",
  "key32": "4o2uxkqy3jqbCxboHwjMP3zzx419naAGQvchGaDvx1zosR1pwdP5wtP2SB7GyaEKUHxRadGdTcWfk3SYYNLoEjHe",
  "key33": "3yTsfBQ5BD2ur9DbYTcjNp32Unet5MzAjSqteEUruBZMCP6fe17tDeQwGd97m78gpHyXRjQN9hGwMq8yBkbqLRgn",
  "key34": "2Shk5kDHmZEPCju2ThpH6dsbb37n7d2BxWNZR9oJY78th8z7cDwdyYV9Fk3AVKrbgx32VmoM41U4SaTttpNbyWRk",
  "key35": "4YHXwMLKw5j8pSKL6uDiUCux562o1REHvrST6fhc5iej25Lg7zH3ZuaeBHoVmA5Gof8GcFumU4wknJtZgQNFCAf7",
  "key36": "5e6SX2YdiZPAAgU7YMJHNoYtf2VtbjyKcw3fNjQrnqbu1YHB4eLNhAkRDRoDCMrKW3Cd7U7PGBFUBwE5uk6VFZjL",
  "key37": "Sk92MDAZB4AXSxeuFZuHfqoNTK6QkCUDGcEHA74jbmbaAKE3QqrVX9QNVgbjaMW2zz1oFygSrGZTDJrm8SUnzGA",
  "key38": "3YPi65dc2i6K8G4pBLgDza6YWkQ5PSn4jWYLfaJ41Cdtfkwh5mL5CQTvZJMx7nQ3hRiGMSCDspxVkJuzi6noMfNE"
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
