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
    "5QEeqsjMgaRcJ6oPbS3ogXDUrekWEZerEqMgAESiVgGgVbHfj43E5rRrrecjFLPKGnHD9zeDXEFWttaxADq7zvUv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qW5FH3H9QAuuYwNLXGrMDcanJdYJXRcZQd7MLafGtALGnpwyk1UDVeGDRQ6g8xJkvGeKkebwiozavHZMscQueTj",
  "key1": "4ftHtz1ceyTFhs3iHme9sHwck3AMKREaihreNQUZt6bq9VBwFBeTV71N9oZXraUDa1b2DbbVcmG2ymfz2DdE6UVX",
  "key2": "4ikMVhEF5jh5CYDRvAetgbp46NoSKm1QepGeRjGezYf98f7iCLfu7UXR18dpwxZ5a4kHLkjDW8snLSvw2Yfh2zQR",
  "key3": "Thu2e682qxk52jXrWMdWtJv1r5cLAmSGid2ZJfSzYxK5tAQ64pUcgjPN6V4R7LqqZyxU8zmjeday1jmPtKLJNWS",
  "key4": "5dTVf2EZpy7QnToLPuppkbS8BHvj56EcJD6UJq6qHgz6PGgB6r6N3DVDTbHw7qNQGoWHFGtFnahTsWFdC3CoCFSx",
  "key5": "57bcReK4wauU6vMHrRqKP9i9DMupqot5tor9xozB7av6coEsAQXswKSUmhDb9XdXHnEvxVRJnE1uSc6xPDKMSVwo",
  "key6": "5sag5H3NygZwZNxDxEC7HEjWV5atrdUVcZJtwgWqGQWQXXWzEVBHPg4i96XQ2dkLH6jRZpyN9kJRw3pLtc75qxu1",
  "key7": "2eq63qhEe7kPkwPTmppvx6b3HGy1yTjEdjxuJ1LuxqYaTFMvayNvJQx9oukJrcTSoMD4PCWHZ9QqGgyaBN8DmraY",
  "key8": "66R8Cc87HMNz6t3jeNJr72YdxhK1T1wsyJqoNBA37W7f1q7sQRYGZD4Xdzfa1w4rUybmQ6WCcgUAQeE4RzAYNrLo",
  "key9": "3TKddFR593KWD3Hvvb15BFjFCSoCTtf7V6JhS3Mpx73S6eLNQofzcpAY1e3oxw9ASKkmQzqFz3gXGTudGFWUbsZa",
  "key10": "4UkrJzpmrVCK8taZg8N3hVijdCcRfWTa8qFcKupjJQx9yPzJR2crC23MrStGidxeNJyyo9F5vxQUoKHgmDi7AtaG",
  "key11": "3eQd9X22Zm8oVYYcyZsDNP73yVLuhz1Cq3rSkGtcabJqpGvmKmmEtxrZ4wePjnZiV4wxzcMixH2WB4RD8E8e1vy5",
  "key12": "27bwEzmFCmcJkB3EW9Ca95XqyJoNi2U2ATydwByoUTRn2dXpcyDwYhV837uXv8rHGvVJVMaWsS9sVhvCADiEZqWn",
  "key13": "5M6o25yiVc5MygdnPLZ5pdKFpMTWR6KLkes9BeyJmN4TzWkkJ1gRDyasnGFJhjt9Dio3jqVhUboCvz1dM9mbDM8R",
  "key14": "26YEQtt34x4FLAr5LsLYkUwJjCT4KC4mJ3ELkPZqUg2ms7wCf9KJZsEbxdbBg8tBW96WdGva6G4d2qznGfRVDqTh",
  "key15": "3PzDvMsYgx6px2tbBa8qBhiHA3sofZvnjvAcjDzJvyUK8cupcbgfG6kig8NbgLypGRFYUB6V3HdMMVJbjgHtkKcB",
  "key16": "4vAwuYW45xDjXi8tfSGJVRBpBX3vcGbeVviv9DFDC9PEjRfAdZBLDHoRNzFzWpqUQ9WyxB7woFh4wZMWzRay7KuG",
  "key17": "58jv6G3bsEcJ4KCk7DosWsUE1zY4qRPyAgJZpUXXQE4YKN4cCvC98637pDxQqDmQhAcqg4czdRvmRa6gcxEmk4sv",
  "key18": "55AjVSHK1ck9pgtKV4FxbnqorDSWUsEAMubGv79eiFXXfz2brzB5SsXCKuvCjWk4QCTttijyiVmuDv7zNoZZTq9m",
  "key19": "4ejUeugMkz9AWsTJftZGAexfmP6JKDfA9Y1GXL1c3EoVHYg95kp1RifXbF3mhv1D169nS5RK8Mb1ESbbkw6pNYXG",
  "key20": "436sDb4SghjhtC6ENqrGX3XKbVo5inDi4r6QZFHFoN2ohYpX59aU99hrD3ngLBFihpAkpFywBcjHUUh8jcHNUDyR",
  "key21": "4ZJvmgnng6jzPWwgSCc8tUmvUkMezdx1qWTmZMZzEEwGfReamrU2r91eGzB73Ph4X3zBZgJqCHMDHmeC4Rv7wQfP",
  "key22": "5AK1xiNg3pEJawxW9oigCUx5rTbk5YqtEXpj11GQbrWAJNE76ED4KMSnkeWvQEegfuzoBGqxAdz6a8gmp2RHXe9H",
  "key23": "4SN3BUREVzw752PHjHizuSMT9VQsdFp1zoFCdBz9X2MBYKhDyEm13RQqJuheTd5b7ifwu3nHTTiYF7Lv3HCQp9N9",
  "key24": "3Ms7FDv3Qzdm2WShLTf7nmSKfbFDMJK5xnZfs8xjNjRuiX6FFSoBUoWUJFoNhTjem7rJaURAyj6fkyMEFDEm7Fv2",
  "key25": "2nd6RwJFJLaFfJL4LZuR7TfFUS9N9pJxUA8mqZmYm13FbsSk8w3T1Fv8ZicUfpqoPaereFpj2594s369GSn91T5h",
  "key26": "2BYG6v559DZ1gAHUDkLxgiSASBkDu3Axwtm3HjLuvBtVfF6NQ3HcghXg4Nrbu16Uz2bfBms83uVEwxYMmjKYCKDx",
  "key27": "v2VoPwAUsRhAUHTtABgYvNgvtt1BqgNgLRGJehJqHntELs3jGs76xQfKr3KUo5xES7y72CZ9Ez2uyuxRo2yB5vw",
  "key28": "cdiH6BR7taX6JQaDWSfTyhq7DjqUK99EyqRVEC4cJznASnqGWzv3b1Tf7J3NMz4vZJbKBnqbEKQzvdRSKk9o6Uk",
  "key29": "2oRonrs24taJHy8QczWg3S3HacYjvmgwNPsJHEsygVPfw7sTXShFXfxU7sGDrwjSjspFhG3dqkbXq1TVw7JdHQds",
  "key30": "E6Ujryxhek8bNv95BTPFiXFCLMNo4aCt2Lt2jQiUVc2x3HDNPmHUtsiQpMx4d38coFYgfY8WPNo4JSTWWpKZkfx",
  "key31": "3hEcwoe4Eny3KiaN2T9EHBTxpVQErGj2qqvumumwkSiFFmiFqiwv1cFwG9jggZVk1HjXPbLCaWMUfuc4afMkMus3",
  "key32": "kt6fD7ipXBwRwVsoznEuqmCLkZsCoiqFgNycL3Pp7LT9jhGX7ZR7AM2KZum82fcmGdvy5hN93MCmqgfh9Wv83mj",
  "key33": "4aeB8MWQQPpZ5M9nHtWpk2mELxFcnoqmXr8nxphL4w4ikfBZrqQqVYb65TkqH9Sj7aUp3ewvKMtzK6aEHWJ9QgWG",
  "key34": "4rkGsnPEG7K6ERmeEtGwYg8oZJfU4mJHo5PtdoTRyeG7MxsaUH94KG6yWe2wZsGa4URiuH8TjHmkHMhks3WhVuRz",
  "key35": "5VDHay1JymcRSdzfssAG8tiwyAGuD5wVYneHDpHHLdwhAeLtpjCjrtMopG1CVcjAjVknhuGiXyNKxo7L8KjswXUG",
  "key36": "38zGE7FKb7XwjQtwY2ED1KXNkoxMpbD4N3e4QzXrk9p4t8g7rVcVJMa4ucjba9JuUCfL84VwD5zQ5E1hjjJjkSkB"
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
