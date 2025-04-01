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
    "3rQvYNTXLiCPCUrrzoyeqjU6y4hsHbZ31dYgeWRyeR5U2myjbrBiF9VgDJquNeLd88zxHNujr4ZZ4BJZSH3XAtWN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DRrTJAY4vdzphECcP3pLJSsMReVHRksma8syYtAR8crcMVu9w8TR1mDFFg6o3C3hrNqs8ao4VeAJmvFAynSFhpb",
  "key1": "2iQsoFAoo9dyyfrapHrKUZAmitvpGsE2kCYQTBE8cA9rXwor7sW8ZMKzBuiJsW9HFiSRUYfnZVd2YkBsd8hK1ahN",
  "key2": "2gp1DqKNEXM88Umqe4wXJAKaf5cbfx53cj4ZweUv41LEqSwkeU825tvFJ5mjPtrjevv98CRoNQ5boEG2kZWd7RJB",
  "key3": "4vpGJ9J9WT6z92AGieC8wKYk8fDL5b6rEsQo25BPivnv92QxPaJ2kwvNuLNbT5CZbWr25aun6m7Gy1Q3rthxSmyw",
  "key4": "2TCuPYqfyv7wDgC3wz81H64ZpePuVCwnRXJCXh6qQZubD9MtbSDP51d2S9E9hYNEstQZYcECRo8WbytaatmTWS4H",
  "key5": "5rQmoWUPuWuistSdzDj7PQ6qwBaw5gsh1r4qpYRzzEgpjtFXbCdP3MrNzWQxugiToVqV7AeAN1UN4JhvRubGF6MF",
  "key6": "T124neUqyU6a6YKAxbX7GJHrRaG3tXm5h3AhMvF6jtSZFcUmCfRrbSB8RgB2YLhobfdJ5Yj8dPxLC2yj1Uwka5v",
  "key7": "5i9KTcYAFF7bY7aN5esDM1eNTD99mQtyYtP2Z2eeymfRPbrL851U7SvNdeVf92Yz8b1cFeYEF1Dp4oKoT4ZWUqEY",
  "key8": "5KS3WnmTAB2vAQYLFdLAGuSJSmmirP6sST2JQssJu9p4XcoNoAhckeq1G2umn4yrGGhRAcMygRigSz7A81PtEKmT",
  "key9": "333UTxmQMpqaWV4ZNkYbywzFWb79Xz6zwSsMvFiXdN2Mvqq7xJRgAnXNHTEkK42fCzYsSto2oUu6mCtpaWbMT4nU",
  "key10": "5cQkU5n8V51qJixcPCrSprbzbgMhxELtkVd2CcRNHxA5DQbiXm9ar3fXuhNJiE1MXsSCNsmcj26nf69pYWb53gBe",
  "key11": "3cq7crj7mWx8chN5DmBEfRseu5d5qNgzxvF4i3FHg69PXMtKBBBv4puctmtGDoGEwFbfYw5s4VQbYWoCB48xheFy",
  "key12": "gWhG5r7nPeYWetQmGdPdfvGpFHX6z4wPufNMixB14B3MfgXFesJ6W4W8kcxkrvoT4bB18xXGSkfW2odXJpj45XU",
  "key13": "5b9qW5yVwFpxGrJZ3b7GtL145t5R1zKgnFnj6cwx28tdbhXrg7rMGmMZdcdvgydBw35o6a2HjTrQ2HB6YViUcsDX",
  "key14": "2fSXLrm9n1TSH3Bf3mi9BBvW8zz3X3pk1WMq8Fs8WUbALWBee9DJjoWp4x3ZSDZ7eL6xAziu87eDFrb8K11QP8n6",
  "key15": "5DxnpMcwDBT86aLU6GQGkxuynsGAzLXh2gHZdqRbxijExebHPuFNfU8Gt73MWcXekfr4mnTXwemKEgDvvWr9v4Df",
  "key16": "2RVNYGmyN7GgHRXJYxkCgjz8qZHhKsmCYYjizJAYMB1A1WfSrfezQYuWhs3RXeofZ3DBhL8BKjkLo5MNEpcg8Tog",
  "key17": "4f5U5t4bF62zvGkJ2QjjekCDdKtyNjDdsAxtNNTsaK3WHxNcZks4xf1qsVjYQev7M2WwDmwGcTWwuRBycxb1VbAB",
  "key18": "54HquugBV1y2qrP31UR7dStBJimQqKc9FiJGTtrLHtQzBJEC8K8RzgsWvrQhBb1mVfxAGg7fdjM9xERkaBDf1YN5",
  "key19": "rYzX7d43LJWWWWL6y2pzeD3de5YPtuN697Wpp9hpys1jKk5Bw3Z1VgQ9ZdFdCKGtVdhetfGkvpQT5wnAyJ9ESLb",
  "key20": "wkXseHvPP6zyrEDny7hGDsFKdz6UFBRttemDFV3MqzJebM5XuRQB4R1KSPjSjtKrzk9JofjiMQbq5GwPobhzXvF",
  "key21": "42XWqk8UwnixTp7ehkvS2akiNAkdQF1mpVKvQnvjgv3dCkZdUFR5WteTEetiqre6LnUhDbJ3SjZ71ktKMP2GRUft",
  "key22": "2GwkjFVyKkxxcsQJkcW7tygKgGYo9e2DZbs6frJpfzsDqksTaQ9gno5XgeBj515AV4TJ3BJMoFRjpXL9KQKWnhho",
  "key23": "2C9jbtL1YudoTUHbjkoQzQxcAfxnQt8okQpM9gCUYT8wQWMxosNGGcUTPrC4293vda4dMdDLHnssgLqMwbXa4C8h",
  "key24": "3yyprfgZaXajP2pzauEAJSi5xbMjFipcqMHZyo7WBe5ziUv9SJKSx9KB2WaQcEJiAXv75ajHxcBpkscptiXAhjco",
  "key25": "5gzTNHgL4nE5H79vaSZmPUbHBFpeCZZd63t4gWpupc3Df22yzggGNK8pRG9YwDg3AnahX7auavsXjo3VD5EvRyPu",
  "key26": "3ZoSLPN8FugCrxsfa3QNcPAEL9q7D6X1oRsxAH2rWT8pJgJDN533yEAeZDojftgVZXpBkPKBFLbxPqpaug3LogsZ",
  "key27": "4dupX2ujPzBjZkuToiaaKuU4R5npFnnzPzwHK73i3ZcNtMcZobmBSd1cJsAiiphu5cSoWp76YGCTG5w6G32WUTwR",
  "key28": "5LUkJvw88SeoLUbr6fBFpZCoR2puSPkcHoSFvvW5113nY8nPikPCgGLcTKX73tim1i5vT8PPkrPHho48pWXkVYJu",
  "key29": "5C6gm8pyQ4Dwhje9xARekNrUCV2shxYdQ7cFbL8eZ6ZWB8j7SgdUmuWaNw5Kxj8q6m5HNwoxDmHeVsUMxapHSAtm",
  "key30": "65vbN736h7UBKXLjh4ZgJpJr1Y4NEMaK3QYoizWKqZra32G5YGn4dqfbyVYKboRz6p3Ly61sqZs3nDLZbUFLi2ck",
  "key31": "NDmMcyaSqLFJdtE1V9idW3fsdqSFVb6MYHuSKZLskh7rYi7qZE59zwinhKerZSzdtaoAxm67bf8Ke3T6JoZg1yv",
  "key32": "fdHBREkFedXh5t9Ht2tTCEymaKg5Ent3kxwLBp3i1L53A9swzKuhZL9SQMwpyKe4wgrpCuSENpyGYK2r8AYYYgU",
  "key33": "4mbx5uQGXDqmQeh8fxRzCYoXmbTJ87S2USBik7B7BNCpceKbdQcizG24zWAiz1GLoYcwrAcL6EwrTCEZD2UdKVui",
  "key34": "3M9aKcRDPCjN9eHwF7cYUbRHtr773Vr8AvLBQrpe43zE7MqjukzwCd3XDXsEhL6vdLWad6n2j6sHafsQ9ZFx3gEs",
  "key35": "4D5iL1KLGFPPZVy61bSiByVEW3z9wjYwpGeHFRmemBfdsZnEAhKZfSoyiA5RejXAB4Tchfph6Z3J6BQ3Gsh9bihu",
  "key36": "nwhPRgjrYHZhufuezqJZjrHyDAy4gozKt9FVHcCQKBz4Y5DZCdcVCjGNbJV3BDXJWkiv3jMjDCGrF4VQe9k7pjR",
  "key37": "3hbzaquLe3GfyJyfUUJXqqbYLQDoKbhWiDC7HEEYjw35QUT8oxB5RYhHQoc8jZeN57QZZy5oHNKUTybW1VfwWrMe",
  "key38": "3g9ks7vYkyyVyfNQi4rDvdtqT14DaRt2TH6BgxHT3P2RLWgthjE8JK7mJbUaGNKHBX6iK2BUJeySfykDLkmQeg2s",
  "key39": "57FDzLM11jYq5iJsLDNRmPKgwxXLPKDeARMi8js7GPR8yR2WawiVFRmaxu3GT2Zf6yiKQAAcpa3NPNXdLfbJCnsj",
  "key40": "3qhqNtCwgtvjaDMBwj58vMJagRo5HJNMJgQTBoXkuZnn5HPgEkjKN3LLVvm95KTPx4RwBtSaQE2jrR3BKCqqT6Td",
  "key41": "Hm7phTzqfA9AVsyGaSSX8Fyr16RWzwrePdjyriSF9UaqQaG54kHuRdjLLmpuEfEhosXkyncPA4GEBws8U6LJYb8",
  "key42": "2W2c9zXiTFsWDkNweD54atE9emTMwdmzuko443MenYD1xoDXpwLkVmFxBN8Nptge7Q8BPWHwsq2aBKZ9r6LxR53W",
  "key43": "2xd4Mb4t3A7fqpoe6fPXjno5BFBnfRodwU8Vh3k48mayUbE7XRTHaRoEtNVNnjKQjTyzKRj8PQKfXoCVtXjrTwp6",
  "key44": "3aoA9w97GEVVygyaECkkRLPT7xQJABPQKL4WzB4F4V8ed22tZbXASRvGB6s9pufTui66rtNrK5ho3T1PPpjytA7M",
  "key45": "5NFa7Qggx5tDUAXEP3NVktd4n9Wx86XVcMyexdrZHgArHHEHDeXrGZi8Kn8zkSdiEbcJssDLicar9PLT4aPkdUfJ"
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
