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
    "2EmdSMPWZfLB3jrYjBqCDQqzeEWGNSQ6RM9i1PE9qjxyyiiQqVtAzaZgQUX7GySqVueNK5WqWScBkrM3426HFeGV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n29CVdFAvSt4R7mMGNVHdW4p3frbVAGdhwsybKHpC9xy1ZPxnMdM5hFCHZWjhw5J8uad9rJmxZrWabJhrrHqV8F",
  "key1": "4JyZWvPdSc87VgcvBvd4Y8oxeGRDc9E9KGgCukXuZM1np2ckpQwRPoFGQknUA4mfJdZPwQz1ujbhuGxJEFh3ySXz",
  "key2": "4pejGHAYGpQEdfb16yqneEorFxD3MEL53duAwd178uGAhfCFhQ599uyF69goLfMXq21VGpVsQv7Z13wCtVnVtcVo",
  "key3": "KA2b2ohZhP5nZaNr835GspC2tAh3Y2BvCyQVsRMNbHFFXoTdnvssEUDeCM9hao5wFqyvonSDyBXoVJE4CU6dkLh",
  "key4": "525WRBNzMG7u6LZK3QqjAxSPFXCXuAqPc3YvLLHKqdWJgnqqfytjvVy8y5HJPoWftf6arXz6rBqxvobVpduTb6uw",
  "key5": "5dHUcBseChVJBz2SmRuugeDMcSoXrpoMfaNYnF4BrGcR3FKGxcXvoFhaFnZQEVQXbf3Nb3w5uAfWfmh4m6RkNtYR",
  "key6": "5D3WffvJh42cQgXskVEhikw8Ru8VfY4unyQdXxJd2z1oQfV2vmhnxFHCFM7HJex98WxMmq56VkveELs4dbapzyE8",
  "key7": "66gvWPKdUnNNzizuAVPaYYdzCchBjTYRfqVvXWdrvjMCyjg9ogKD94JwyHaeGFMEEAQ8QN5KbgMf5ArCKSxuc5zQ",
  "key8": "FLKcRVN3Y4wsMPzucrz8FKDJmsJmkKcoAdoSvvrQUp7FXJEDkqPE2isqzpgA4HfxQ8EonDeccdGXhoLHQkRxr5z",
  "key9": "5FnxDPmo92h1ahwPJZRwjP8rCVeub9i1D7a1duFVC6sbMJ7xUxpTqvVuNMAqkV3PLycRwJE49o24cWcXK7wHWCHw",
  "key10": "5awvaLCgb6auN2tRFi1SFpv9SyWZwc3Lgfyq6zdxHz74Y6XkiJrw3TzVBQhXypYE5C6ue5UoNsjHA9x4wTfCLB83",
  "key11": "5zYyuxDBiLFJGe5ZB7QVKgw8SKvJH8ynjNBUbBb2TunFVVGZXXJ3z2s9EdYXvMerMMMu1cq9WSWAxMkazcuLae7P",
  "key12": "5uPCM8Z7Ub37n1p4okMQgoi2zTfCAhroq3CsgpWMwiUDYp1kpWcyEyrvBoBh2mkc5zKqddKKDwz1AGyRLXpfpctq",
  "key13": "5o2nkhzZGT2VTBoN23bXMGMvPvUoT9vLe17zePCqQ5oUCUfGokfuJhwKxtAHhEUjGNVHuGjR8TT2pVaVA2LsM5VF",
  "key14": "2xpFT2iRTdiSFUW9UzkHSaSAtdTvdSmB4tfKa1EsZ4LwNMnp84Ly8CmvozJfAAhwjQqQXPdqX4dcDPXTBiSayiYF",
  "key15": "xTdEzSLDnCsZ82R4E9fYH3QCySCRAp2HMK2YDio8MDjmBPcDr9q23HGXpskEirYyFBQ4HtTyyy22UQWhwRMEC8q",
  "key16": "5LRShN58fFHjD9atsxxcbQyJqHsvCqhc8KaWG7qUivsf4QiPuy9TnD7gu4wjxzcbUHrcGPZtqdJrhWKTFoQXcsZ6",
  "key17": "3EkTUJBqf6mCtaCqN7akcPXKf7Zt7dFFzkPAN6ZFSfBy6HZwBozvAzixmYxiwwNKUQ57B3iBoUxAkbYjeaNM963r",
  "key18": "4jV4BNQgQXavtMRrGV3uJZ9VxmR2wFhjNobZydzLjyFwfSq1MMNj73sBsdAS4iDiYGQNHruckGRvU4qoDB8fbL4j",
  "key19": "3rkFMDFKGUhsEJfJhDYaiFMwBZ8TMtk7ggCgMvgkjkxZTpS9fPXzEZ69k4PFULFWJM28SUd71fJSGnBbSzF4vJez",
  "key20": "4tqBaRqgotMf35SnHUPTFWPKqjVUKBmn6axmSXXrZA2aqVVkBEd6isWCU3VRR1CV5dgynUG9REjkh7d7oHYGzKoR",
  "key21": "ps2dpHzeJ9ivGkgUNdRPDTSfujiLvbjt4dEVQRECPkmXQv2gaonAxLpswJgwMZzcuKFthum8DPVtDUQwta19U6U",
  "key22": "14ZNzgk4RgpGRmFLPxyPEaphHwZMHpjSdGYqgUVKiFDQPjcDvWGoDr9BxbJAULL31rEP16qXFVrCNkPJM5jgA16",
  "key23": "639Jf8NWugkVsok4dLW3ecXQ3Tc66v9K7SMijf4MnFhwDkwmtgKh7X2CfS4TYXhs5k7RKLRVSE8Rb6qanrXswge2",
  "key24": "ZN1eUR4mBVA2JKPDTsUPbAfUjbzTEGUFNF4cQiSr1gfMJDWMAfEqaZC4m9Fvo1V7XCyAcGDiLu2DFKuysgESbCh",
  "key25": "2suouHzSam9XFBmSuJUE9gXxFVyT4bav3FXUPeWyqVy6PMo5C6uc8XhP5sUhkyRWBd5CM6Bq7S4j5831axPbFSPi",
  "key26": "5VfejhzBiv7nBnjdK6fZVTyy2CbVYBXVT7g39AsfQ2NaCueDJAg6EHsUg9Lhri5WriLbRNdFrv7KGiWN3jt1ErPm",
  "key27": "4ukxbMx3jtdr1j2oLZ5QJJ3UJeYbpLQcBDA3GLypuB1AwACgHtHzu8cr64ErFG1gt3V9cptzYbZKGoL6d72L2msY",
  "key28": "4fXFGBLzCF1z5Xqfd2v2jXMqoCvvCpvrH8Haj4jHTfQveVGBkMx7duSfJXj2DRNfxBexFo3GjnAVVxPkEhAC5954",
  "key29": "3SJTRyKtXqSPSx9aYgU6EPTe1n2bECgodPE4MAF9gcs9FJ5JHw7xyattp2kNjfkYeXcX3wwuSy5pcuNibrmfjGbn",
  "key30": "2eP38YXbu8ZNCFG371H9tnHKkBmkJaCPjrkV7qsb31e2Uksdw1p6rBJTTDJWH1Zk5g8qENM7KGHBsHTgmQEAqkW9",
  "key31": "33qMMNs1QKD83KsHdTE4Meeg4Zy6ZNakGL55yJ8R2Bk4gYxWymaC3RCasMnNAaHcfHHz6WAgeGdXvpbKr9vzSg9t",
  "key32": "4oaaD69uZMceADgT8RRjePmCWJoPxpfaZdYSRJtCqAsQVKs5qfSda58uy6qsQs3RfZaHqbyh36FnGrow59mQBEiT",
  "key33": "4PP4bDNgYdRcahNun1nwz9mt4FmEArjY7aAq1Kqj2atEWeM7FL8s1w9isYKn8jfP37TgZXNst24qhkDBq2DLNwHf",
  "key34": "3eMFivKMCVgWjJjX15PSMHhdPBsUP8roV3qmHXhbmGsrV5zyFjAvh6CoQcVdjnXwi6xsEmQQj9i2a47qZcZHQQdZ",
  "key35": "HBT7CXSM5LZsGwFT5voYYCW7xu5JNHeRLKiqMntzmYboKFVdwaXLfNSm45wFEEsVgKLWanwY5YhVysWAUZR8A4p"
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
