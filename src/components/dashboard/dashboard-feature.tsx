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
    "3hJotXZQj1fJCVzFzPnh8V4552xpZt6w3Q44CNof8vTsePyUAgwKYb5NtwP9mAsygUJSahZtYsUfv62V1YuRc4bv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P87kSF8e2GX1k8o4pDsN47mPnmHhvdDT4nff5prqs2Q4qZULafJiGwC6XXeH9eumtPTiFRawxyjVLxAC9Kj6hAQ",
  "key1": "4XsGRVPeiBvAfCvmgswRur5gsMqbhKygshBrLCyxNjzZe1k1VT867CN8Thw2aLcZWadMTZzN59sd4CWdedZe9SZ",
  "key2": "3ikPPvqHRoci44anKvkXbpzp1uFGnTq8Kv7eALiSz13NAWPiMMXLkoiuFuHVJVv7gnosvqLvFNJLroD6rSePaHGZ",
  "key3": "2uD1CU7jqKvgLuEQFc2JzHWVwqB2F5EEX5vFDu9ZgXSgaApnRPWkXxAfbdzw4egUwnn5Bd7byVNT6spxmrpCUzuC",
  "key4": "sGaf6P1aHjx9fdtFNXNwViZaLdVJThxkwxcZfufDu7LfEL58cqXHKJZB6ewawvYwnaWQTeqHNUoHfwjq1vUPkHC",
  "key5": "ojikLB7iFahyuXvCKMMicSkya1nG7Vqt8JFk8yFDaFtHaZFQN2Q2ifnM2AP1VSme2wp4MuuhgPrLo5vX9orZ7AT",
  "key6": "2koSCFGjT9ir6GLHPwkoprKDG9jjSdpmjhEsBPd8fqUyoDPKXp74ykokqa6ZJTd1r1YjMs82xUtKdaHxbkmRbhfj",
  "key7": "3YTi5qp5amdAg95uaSJHBqtNnTkFb9Pp1ZYke5mugAPmCuu31JmyNx2htQLtjzzLECddxodAk8S3TmCapgRkgybE",
  "key8": "2A1ZwkJAS41frFnkYHqWaoVwfVWefcwFZvt29bJmiQeFatr1hKNTBDg5Hw16oBKgjYPPDeBr4azkJQu9rKUzQ86e",
  "key9": "AJtCkVYQQGqghUGq7ajiJbLFp8KcD78ggQS35shNkwc1Vk4QzUDwfgxQzzBHbWjq5AmEwe54Zo5SUo3CxEMGaBW",
  "key10": "5Ng9zYCisJ5xudv5Bh8FDwXjxfZgSy26CiZp69ec3nmxnmuF7donMXKR3iES8v5utUATpD5KX1AYZFLKNyGyay4Q",
  "key11": "mY4gUQeoyr8WhviNfr28rBaFfsSpxKzVAc4GR8fQP4rjsyvFYpkTVG5yBgNXDRe7UV1B9geeRsPFo9jZ1BZKBMB",
  "key12": "2CsmkjSBWPEMXgYBTC9S2P2pc3gH6vA6pVEENitMddDpkZYrXh86pCfkSfLKcZNu7y3o5brzc7vgNMzbDPjbJTcC",
  "key13": "3myKUQkiYAGuxjgwoP34q8MMvzw4UGimZmP1r4K6DUqmdjFQBfJcPfEjsyT3m6VGq6w588WWsDXXGMxnjaVTrpww",
  "key14": "3XMWSLPPKxU4zH29C6pDWzv572qMngxzmct4TiD2qixHbwvfhFhd7j9mREbTr2cPF47kX7TEecEiCT12hHSNWhr6",
  "key15": "5aBGfYpgZc9frHSfAgXPKtHytLfmPCykP5rQGKGKteBn2kszGsokD3DKm5C9jvWZuUeoQKg57rUEqxac6MRiRwiE",
  "key16": "38vWjG7fBM3puR6DgeNqRsAJsuwLK5oeMGWmPVPA8YyGz5BVn7uCzx3KUMV6dFQo2VZ15ekYccwwgwaEqkwJttw3",
  "key17": "3qwEerNA36dYWSRWLyo8gafbk3Yay6CKHtbub2kXWoxEmL1qTDnaAwyVTbsKzCDGaUYmnTaPzjaqxet47psw2GDq",
  "key18": "2e4iTXTLJfQ74U6K7v5yRep97enpXa1Agt5ftyxctHJ11bM791ji1fku3DGxTGFzbb5vFhFYx3GXPvBbDMgQso5R",
  "key19": "3aAxPttzQMwyzPT9S65CwnCH67fGGxLTcmJa7zfdv6YddW1djapn1PFgVjhFLaX9vaAmtDGKXiMZD4gL5g24ck2a",
  "key20": "4zNzBfX1Jtg9BzVMYrSxNdq76urD12YGpH37yrBq6o3vawBn6MyzoZiXA5DFAQMyXRR5fLi6AKkwT9tqAEWUEN4E",
  "key21": "5PjyBLBH6kVKUHkCZtFmu9KDvbRU47nVUyoy1A7pYYqrPRqZpKiiUKkysCRQx4NMiKxfMj8poHuWncS1RePe86zR",
  "key22": "12aNqT2HwRPqDHsyFjfWELjaThaWvU4yhYWBsYx1MTt6zinwqc8HFuck7KbM61ej2V3VhmpoxhmWGHExthtxUMc",
  "key23": "3BmCAn5BSZeLcCdQzZKcj5HFvGKT63UbRYtmNzR8y1sG2utsgWv2qcb6eYG8LJH4sANUveTbtHCm1i4ufq9th1Z3",
  "key24": "qmDZza29X3B874bRtPFn4c4LGEhNvizMbj7sb4vLksvRbgV9haZnijwiq65KFPRCQhbYCiQsLewSPJKMqWzb2aR",
  "key25": "ryvu9zudL1MiYdm33AuALDF12SPM5J71a7QWpVo33ZQp9rr3i7ZZ4xVML3LY2xTVXq8Pr7nDDDeChaPoEnC2Edz"
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
