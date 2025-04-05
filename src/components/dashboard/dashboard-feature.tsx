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
    "3buguUQhTM8br4ShV1ZJoqWjqSnykyysNt4a49v7TAAdFpCyVV3pAMCTgSvLDYA5hLcdTnWa5DtA2HP28Zprv8gz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UzsVfmMkussbhtaU7S1TDAwSvm2ZBxmPkSsbsMnmiqpVsx72K8QEw1irPedhojMf2J8YLFKXTQTBTBDnaDSvMVg",
  "key1": "Ni2ZuqfL7E41dpVC8hyXzQNWWUWU7Fw152hMezXoLHWmvBVRkHKqeVhzGr1U5a5XqKcWwS65VDZHMU3yKU2sLaa",
  "key2": "4SmxbWniimNGYFk9UJTJVhCjkvH3dztzvjeJYcnKWu2qjkH4X1SazmoUXN6efRp4vCPFUqKj47YakJS9k7cASRLH",
  "key3": "3tJZM97t3SUwDzVej8EYPTp5JhDRkdXAhsNJud2UC3aCQ8GGc9qSX5ytbEjkPqzv5byrohCSsu32mMnrcY3EdPsb",
  "key4": "4znBuTzpL7YGFyWw6rvimDA4MKbruWiLcYEPUGwDtYaBjBtoivQhm3bYF5fApefwXUHhrq9xqRRfW4m8xk3jdJp7",
  "key5": "5qrK5tQp2pc7RbsmV3QM835az2Ue31fahwJ7mwrqpHtRskRGwyzVKgcMtsKbNXU8Ey3mE2HLaTUrjf7JuDBgLrXY",
  "key6": "5vcJaCMMGx28i9jjCrGt1LwLwpEzcC4h76m1iTnkXPHSKC7JHUpqV6AXaFN1eLGWYC8MWVQy7wbearCvYpcWmpMY",
  "key7": "5StXygxZX2v75N54krx2aqR1yR1s1JBRnU7MkxstzmtHBz9ohvAJV9JZn9P7QomtYcZS9bssyp8ZRoSLpVUqaS5Z",
  "key8": "gycPgvLqGCefnKWTorAWtSvCVgtCCd1jty1NaUdYhMCxjyyYu3zTXGMvuFLcXtXoFkvTqvNsdPyWL5Pc5asxdGV",
  "key9": "5bgm87n933Fx5NwR5WNp8QQyFqZRaWo5bUXxLUy6C9TotByKrmGv4oMBm4GyRicA7wveT9WQMZew6M1H9kb3pFXu",
  "key10": "4NdkYUziqrupNLuZCmFqujfS8heeU4yewpX8uMAzzmp36uuyaV5ki61qpFbfULTr5CQeCsLDv6pgkXLMBjxQuc8P",
  "key11": "4kBZ17uujeF999Nv7dkzr1DSRnwDZkAPiJkFSWNzXMibrhBhMghnjpRNH3x8kpzjRi9PYAzmusessebaMGAfKnfh",
  "key12": "4jSj2q2WBSuX94UrvfUJ8Gis7MGWUXkpD4bUG1jmEgrYTQLEtiDspF8YGx7xeUHDNHAkrZr86KCn8ffGxJYwYiLs",
  "key13": "4HxwPi8DigSGiNVEh1AdwfybaCCHAPzwbmfCoHx43hr4zkihRzYqPMAWK9RwtS8aB9zB6kcBbAU4gNou2q4SAKUv",
  "key14": "5kuuDYY4Mr9JtD7ak2FhBHviyzpa4y4VoukdQCACLtPv6VJHfecEj4YM4L5AsCyHsn52ZetdnHVeNgx1v5FPUEhw",
  "key15": "65ppa9YYC3KipMyKFJbrRNjEnRRp1cBgq5DATW95ExowofTZPnJcxYDGhtg93eLWQzcYLgh8Boj3EZ8tFr1oPAcC",
  "key16": "5yA1tUKWwpcVVjv3p5YozqL13qV8XvRR6dnVFSmkxS6RGmZ7ZTg75jS4GppQ8oiV7UwcpSJzgPrSUPHH6fKq4M9X",
  "key17": "45ks468mAkh96dVXHVjkL1URUwpRyCmo148UjU8uW3TSQLUWdWoEZ8WJd4zkMEpuvk7S42zZCcj19UhhoakqKreZ",
  "key18": "2CrzVhz9Wc1mG2kwrJoXWUnjQnaiv2i2mMd4EWdMV7pZcHUuBDoMW3fCanhCVJ27WyRv5BHHycgRL2C5wEv94263",
  "key19": "3ADzeQDjBKgSAjSQsgfae9boFoMuUMtopvbkoEn8UraL7hHGvZw1BBnzsFYzUGGxktrYKCmjU7Ptvc8ses4MXUVK",
  "key20": "3V1v4yoeQ1xct5MASXozJSwsxzXPyHNcwkTgK4NywAiEm6wYxyojHWQESjy8dNWbnoe6CsfYndSqihh3AYvhCp6r",
  "key21": "4mRKUSFf1MBVTct6uvGyV9Rp4DT6734ixww4NvToQi7Q3KLKtswJtSZtTVCKrfpGQh1ZbsSbQF3BmiapDwGiciEJ",
  "key22": "5j2fa2rHP3LofHYLBLrc43gGvNj3e7SVE4LrrqeSKGv666Nwktnn6T6PSAphEyUsSGKAkNeVnJjjpWqN9xtdmF4t",
  "key23": "4faySYJ6HqNkm983eKg3mGNZCp89vniwExWCDJf3P6Yad2ojdnquAHSDiRJGJJziiWsMactrgkgX9f7wb7FwBKQq",
  "key24": "4maHaadK1RUdDYUPomaiPsWH3Wqa3sXQaXXF4pCYKhDCpZ15QJtumLE1E9GKYHbhR3QTh3CNBKFEqsNrJyrKVQCp",
  "key25": "28CYr4c89D8uybFBoGJ3oaxZdwYzc7QL9Q91Fi45bXTYXrbWiwwuPJifMTw1Zvpu2AqPPjmzu7edC2oGUNyCf1H5",
  "key26": "4rFAkR3eNcHSLpXQsDFKPWm3HQbYsVwGWp1EyFvFuanqecoiDjA1LFCRKsrwTotCnZgtF17QuCNrZZ28pHYLdW5Q"
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
