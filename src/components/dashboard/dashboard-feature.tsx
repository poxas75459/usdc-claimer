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
    "5xMt1hC33YB4hezpjQMjmQBD5Kb4sxDyqVzezzqNpUQTphANnV2TkkRu9tZfPsYg6z572jGig9zJ5tezkXfWhLxN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RRrFBwcQ346QUaESvw5XbMNf87Zq5mLRN8Fq9izVM5LypJ5ngG2UETCsh8CCRYzPh13CygEYxFxqRPKU8LqZSx2",
  "key1": "3ZXWgGpCA53yhPAGXtebNPaqi81rd1X5F15FMLLGsKNBkioaBXC8bDuJwegacAkRBCknQJ8ULWwewBTpZAT7Xzrx",
  "key2": "2kmkcKU5dhuTpJ2sUc6pH5dcc9PbvqyqmKkXouZaaEidFeYKJjLSUKAHaT3Zo6piTPhVs5cR5pdmCvBAV6ontFZ4",
  "key3": "2RU1VkyF4nfMReqkm5edr2b2eJrxRaKzki3YetvF4JuTi9WySY5CrDo1YhvhMSRe54KQvCYsDXw3gUXSndZTMu7J",
  "key4": "3BNMsQHwjqfiiHDj9NGYWQpdHkrKnxNk8yQh7BJPDow4p1BbtdakJdLkk8TquNoD4hWcvKeoGqXJQXPmzsRQPFH3",
  "key5": "2MwGHkp8ifYEbAvuYwoyrYW2i2SYV2ac6v5vA122FG41uYWV7UcAAEX5swWLKVnjHDLmRgGQxScrgQFQm1XSdPzQ",
  "key6": "47nmgPjaEdUWz8UMHmLVqkt9VHNZuZgWRrJ4CfkcHSQJfcWor8tBZhsTJLbgyR82QvonZYVSYytoygoDjoNjS1Qr",
  "key7": "37GNbMzkGi6BQd4Q7QtXaE5zbMpeJ2gLAymU9dXTbbswG1h3TKVrwtB3pNdAyaxGBVgXtFFoeTNmvRstC3dG6sRp",
  "key8": "5dzzZawYJUfWXq3zMLCQvaTCvN8A2Yo2jzVxMdDamj3f3B3DzPy2ZaEczc6p31i793RUgGfM4vLog1dR8tAhHa7C",
  "key9": "32vGEH4A9ETwXk4F2gxnQyoYXsAntu1WNaScs8X1yYJ6yxJ9Uk6izXnWgsVWuMQQz8CmWVY86aUngPtr8bMyTrck",
  "key10": "2ZskmVBKBgvEaR5xJMREwhmem7kaB17jES71MHwDudLonDF79L6UNT2KvA1CsL2Moz2b2T18bpLW3Dn8qUeAGie9",
  "key11": "4Fj3Xee8J2tVL1qJUVZG8KmcsWwqRnX2VEmsJfFfo4gutdVwLph3gMfBpH4g3HbAeaXgm4bufS9HSWcMYoQJXZkk",
  "key12": "2hijfM7s5w4y4CKSNBr1k8YU5a18hX64AcwxhouZboPPEqKayGGK1EZHD3iPhgcR26mkEhW2VnX1c1p2V3qRjM22",
  "key13": "nQcgPHTGa7GhMwHHNukVsJmuZzLJqvndn3ZB6jW2E3sjK8UCvWgPZuSk2U3reCUR7UF11bH2Pzp4bBS8oqyvWH1",
  "key14": "3yC7apWufTMh92VyfbrqetDRn75zkBkLYxx5VpvAjuFAnXL5qPCAdgCAdWvSrfYcD6e4HHY7HYNvjFrVH7f5E5Pb",
  "key15": "5hdqBWUaqFyBvmUng2nwLk96HDvfPYGgBrfjbZQPDDKgLuGkbixeNdKG2KdrdsarkWDMdXPGtYY5PL1Wwy7AhLQ4",
  "key16": "3ANfsVJqQaFm9NwoBf4CM4Rzg6CvNQdiHQErBgxLDfhCeuPeJrvTFy22SK5VGd6Fj84pRNd1STkVtUK8P5nwtSuJ",
  "key17": "JHpG7gVsbAkRVdHci5TF8adsy3BpySQHKoBfeE28nWLuRskBPjMRCGWobM4N4CkJWHhNJQwXFzGYL8TGGpF1dRD",
  "key18": "2texfCoCvjXA5X1SBTSXTQtNp9QGzHQSBpCR1HE8zKY8SAEQnzGfcAKskBYvUqzq7ebQvXaVEScf4Th4t79BRsij",
  "key19": "5SKaduQZ4WuWyuNdaM7P5TA1YewXxzJEYkEcEZGSB9hT16MZpXwKA3EbSKxu4M1rMnhr7rsY2WHn52xH6jEMKeyh",
  "key20": "thWBeiTRoqNaoy89NMd6eGLWw66WJwUHESwWj8GJbnPY1VpwWkecULQKUSkpBWnuZ1vorMbcpLUtUYrCPNZiBxB",
  "key21": "4hnBaJT5ovzDwVxSGXLS8qTKwAeGVszj7HGjnq1SW1YvqcyGTsbJXwjgAc5M9bZeEp7tK5gWD1zW8hwgPhmiQoXB",
  "key22": "CWGP7ZnuDLRtRh7nhkC3cWP5ND4tTehEqv5fs8CqxpBkkErgnwbxFgcC8rcBs2SE8yxyCgddezPRmyRMkRwuF1t",
  "key23": "5yE1QT2ukzb4t5N58dyaqXVDdtEP3iDJJ3Q55hb34n2BgcSm2dWSmN2U2U5Ex2Y6vKBusWj6nLPoPfpzsJEWRER2",
  "key24": "5uX3hyY5oTpcdKPD3XZkU9RDxvu1tX5mzwhdEALBYoNBJmr3tTuyp1MU4VzxuPbsu5mX6RfXCnEdsMTSAuV54aXK",
  "key25": "2snmMAxygL6UhwQ6Wrt8DsgKSBofLHn81viDcW9JExqUUQyPpkihSMqzX6wNL1Y34amFD1qhEvZmKDAMfEdqNjcj",
  "key26": "pCb368MkgiajKCsKPecKZU3RHztSpoeWSUvMrG7QSoQHVkbSkNdCAmvUqkSgfJHbLic24GhdDx3w8dtrYHFkLB8",
  "key27": "2eVve22UUyNDd4ZS7isDAoDB1UE6epUcwV6CnPCWtL4AXERAvg9xfszScMrDAo8mLnd2MARE6CwdscsTrQX1YrHe",
  "key28": "2GzZS9LrxZ2hMRP2SnoTcMXUfDzTjSFUfUY3Fy8TZfnVkxfMfH9L7drjjRncXRhnTu5KUvtzzPKaR7scqb5E79d4",
  "key29": "2JLuPMXyd82LGTLk1XF6sxZFhdJ1Q1CGwJzZJ4FTq4rga1UgQ9wV1sdan1FuSJdfU9Mcm6txfW5v7Xaqhii2YNiu",
  "key30": "spcHfKC2d6Mi5Qbp8jdQqzY7YkWrKvC92F4QtgFezERTHN7JtW4hpvvKHPeJ8o6dbDDpHChTzutss7Bj9pXn7Pf",
  "key31": "37itCBcbEywiPbzDquspXgHrc5dJuQy3D3hSwyC8TGpKLDmNRzQcoocLrVXgJCUU5AaETj6q5PE2zUTyWUJMozwM",
  "key32": "5njGkrsN9upNGYcZK3xP9kkMeZxbfFkJfQpQYjpFXsEXKUu25zypsCZicAe7shApVpUY9akHFm3c44uWZhNmFpfe",
  "key33": "4jY1bixBXBVSCvns6Hp4f4Mnq6ioSpbADvWsPz3z1soQ3PbqjJ69QhNNJ8pjEpt5eZmNpautWrF2BFcmRhCRuFHe",
  "key34": "3eeApF4xM35GsePUXKtPT3pu6JTbPdXJgQhAmiXsT8PVbwGVNiHRgfaR29GcEpma3y4zksY48vzcFPnSb5fmVZGs",
  "key35": "6EqtJUJ1cFw7NqNyakHwjr58ALwgEyWbuPor9yQnCnKRaZFpsfgidtQbUKjn22HWA7eRjDH71sjkyUCwzjNNor3",
  "key36": "2QCARNREAyWvMMA8Ce55AckdR8JQ9xhtKfkq9iV8ujssQTbmXkAZ1BmpMvLDADDhy9i9tGwfpVxrNHsBVbYJMM7S",
  "key37": "4L9vKePJUZS9Brsfe2Bax6gbScZHoSmKB7LyfXSEtQR49idd7fNAhkfUsTpwypgiTJKvHEKTcWwiHP8KYg9vgaKv",
  "key38": "25HYtiMBWYgMiFnSqUcGmUnu19Rh83ya5gFpyS2mTmx4fQF9q3QFohm7kcz52FhP35aY7npfW7MQJ56hL1vZVXvz",
  "key39": "oxoZo6Nb4Lcmp85g2UQHoL4XZMZ6RzZXKR8BDNjgRdNtM4bustWRDK3yNwjFkW2bECaAZqvCu97x717tfWqG8ZE",
  "key40": "qXvXBjBqYdTrgARJ1FztL1hNNS6G7LMD6cYdu6EXXBrjrENBhFTAXSfSAurTkyP2hYT9W9w3P57V7RuginLWXut",
  "key41": "2QUdxApErAzerNPabT5JP45efsBj5nJJQjUaJmsQxVXUpKyAZWk4vRRuht522bhFqs3m1ogubm94pemotFG2kcT4",
  "key42": "42dEn5wskue7Si3wMHCXSEnayvMiepihTNrqG3JS5FaQgQXdpNAPvpCcoNWqR5nKH7XU7McwLCSosFZiytH34sHf",
  "key43": "5smStiB78NFrHbhoRaVuyRuGoc24aG3tKckjPeuuWduVeigEa2iiM2x82hrGof53ht7tFGCCr1uqhXXTJ68JLX4h",
  "key44": "2kzXs2E3uLnxdCZtbM11kQAz7B9mFBcADcsRaWuCShH3kK7bhHnYDLVC4NQWNiin5q6TNXyuLh2h2LFUoynNKdDu",
  "key45": "5BLTZE7kQ87FFjrTwbA4GN1HULeyB2VKceQ7KTX5Q21DQkvJjrjDbHf3EVrPsaRzFtR7qsogZvK3VqoyUsvYNkfm"
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
