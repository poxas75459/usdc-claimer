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
    "2GbVtPVs82JTefwBfN6GBtyhSXvonFh3i6v2dxkfejV9TU7pbg8JdJ2bvq1jDF6fdqguSHw1uMk6ipAqN3HiYWvM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52sg6BbZcsgPVxQw7AzvSmzZEdkEKs3atqzDwqj26hn5HhwzdAdqLvoqpdgTHJkmvQXRbiKEQmvZqtxR3K3Kjc5H",
  "key1": "25iveKnytffWyYEUbCo1yDKGug2PS5Pg9NAhNiiQTyimgkFUjFQAXkaoJ4Bvd1T82F3hPnRwxW96xK2DjiNyeyPm",
  "key2": "5qKj1CWgKX1uTGmjRn7PEvXpyxWWY8WBytRUVTAcWEezJLP2JGNSC9gLf48kB7C8GcB4EeumGFrcbN9ZTdh7Brsa",
  "key3": "4uAS79HdaUBi8CKMS1KkxUz1sZkU5UgKs8zkxXzkhmKwYoJFm6dnoqDufVykRoHUc6xHRFgCgFCoNKuYKbjWaxpZ",
  "key4": "29VtZ3pjpWgF2WXwUTTngmVFsoEpntsPak1GYiwzPM6BZQMwztNGPY8T9XJrnQExaaBSAdeWkCCoe1Zv2JD71M1Q",
  "key5": "3Z6javm5qZNunCTXNAvAMtWzoGrKQR3mad5AN3TCEmeNRnWymY2K2QzNefgacHMiv42SLAcGpqtwDJmdqddgbBh7",
  "key6": "46xNj8vzkicE7NRgMzUz7fWfiiRaFyYjLRwWMrd7erpVjbAdrzhUwggAjp6bNH2gUN9N2ogCcR3ks3d5N4MQUU6j",
  "key7": "5j9VTFkADJKFJ87vzkhuNZkvzdnbjSFZqNnXth34qzERpbBac76b29VSxoZNTu4ozaWfzmxSfCkd8ZMns6JUiCjE",
  "key8": "jc6YTYK164tpPf5EZVT4wFhGysE5F5YrC7CDa66Nzk71dGxEEGtrUcQaKeiCLMinjNc7mNMkM4M4MdfMKfzZNwE",
  "key9": "4c7VFEWxqxHs4xXDXe6bt3HW7cM6YuQLta2te2TatvEMmp2p7HA8dkLj9EYK9HwmPfCAC3sMvpDNwJGNf24Q7FBk",
  "key10": "48tXYJ4T5v2Fm6FH5urM3ACZfrpaPop4wxNYcZfh2nntsk5DXck4tTNe15PPZe7ph14QN6etbNZUKi5jV4ixkaiN",
  "key11": "5NZvGM9zLDew57nDoNM2Mf7uRDoJqPbVKvZA77C6BFLGPHz55pr8h4KHUX3kkGgapuMCTTkzX5KnGbSc16eDM9iY",
  "key12": "5rH5v5f4mQyYwvcdTer4ig8qPWsC4RFrj587nMGVqZ88obgsjee54AcQmes1AjkzyGhLbaf9UD6RcpMMLxsBBMBi",
  "key13": "4pXhzxtYgh9P4KgFkUbgFfJna4gfPqXweoJ6mVgwMatr3Li242tnR1bhdqcFKrHtE4hM563ufd82f7d4sFCZ4XDV",
  "key14": "5bGsiVh3z83GdFZSZJVvc6jLaBbpkeBk8KcNr6KvbnWFWWUpVdcnduJKZsuXaptQbsxsptLytGge5r3FSUiH1Kqh",
  "key15": "BjfbS1YuHnQg8yoYpwugNKJFMhAjoKTeT7WwGyhiN2oLDjd58yBGsArqiNUTRFPT3429w1QaLiZMRqqmDmsSf6E",
  "key16": "2u24F7TJ1rrZo5ievaJT6VYoNFKYagihz2VwgZQ5pLDeQEVZTDDeAX2e1HE9xGk92xcNHRNnB7RCUigTM5QtwWP1",
  "key17": "ntxdFNMu6u5UejHgnDDr3YJz3Q1Jss6ixzvk68jTwXCcsoVVpFK4mNcT1bh2pWTynuCkZau7AfdGuEKGBnXAun1",
  "key18": "35X47YohYZ9XzZ3E5b6TafHcL5ty2QjFZegMvhXLkoAPrZN5JiL7zQ72jFxauZtme6EYRoTmNkLNXoaFCU9YvzJG",
  "key19": "xcozi4dLiazcAx9ZJtFrLrT9Y2tjt1yT7FdS2ijCwc5s3k4ayfLotzZzNm19EXiYdNHe8Z864Uy2jfsvQ2v9xR9",
  "key20": "5qL8UEVV6HtGc37rfxx6kafJrtWDcm3RHeHmNFACojPXGrVa2U1Mfe4mJN2v87U8oPbFNsEj7PA65fNHkZ6qn4dA",
  "key21": "z9WfTtgHK1nV8GvhKuECf4NQLREbU5KtSKL8MaUvjaFiELCr7KCZyKUSsEdxqTP64yHwve1Nsmv5Eudebddx3DF",
  "key22": "3ycxwc1WS7N5niYEQ1jriGhchjMEzNiJqotjmx3MMa6vN5ypLv3aUAcgssa8zHaQrDGMje2Twm7AAsJyRaJttJKa",
  "key23": "4wg8JVDAms3UMRA6KVUcbCTUvB2VGbLngPzdbPLiF8H8h8sLg24AWae5ZxDXa1XnCDcn7kbXWrBeKX85MHdMwoU",
  "key24": "KtdSFrjpzjfB2V9WgHN5gRczH4FkvmkTbjyWCuVHDeYPEHzhJLEWbYv51iadTQA3JDHKxsStZqNjg6dDYYCnoka",
  "key25": "5ec9BHrqbrfJWBTb5BVfqH1ogdZcYvD3qF7tajwWiN59tmp8gY3m4hVdH58zZuhjaaueBENkQGXsUgmKPMbwP7Tb",
  "key26": "45dwZcsqFXoDkM5TfS6hG3WtgCAveBjT38PcmY73iid2vzKEmGpXgNRTHLZnoXhwv4fgVnNL9ciKiksWQH4Az7cc",
  "key27": "EWEbFjZKC5QC3BtyBe5yXdhc3HtxKVGYMei3kBx3FbyAU3HeyPScRgzbhkVSPucxMuQFFZnWC8c59dj74dHYM6D",
  "key28": "4Fve5WgzCnWZ2zbzuXFxu9JjGsuYq4KYQ5uWhZbpRF96oBjsvWt8JtbAXShsCbvAGCzqJHkmCNBGyrMZm5q6mgvp",
  "key29": "5r4vxx7V4i33Vr4wQyDkUt5p4xJRRkdae8T9CSVQ3bjyezxcFYnuSdm7jC8sYgM4gY8K619YieDW2nHCr2tR1Avv",
  "key30": "5F5h34oRv3aFcqF5r5NWrSDsoLYj4FX4vFaGsFC7Z3hABwo4q911EQWPG2NLyoeCcPYFTZHvcQKR2eHsKWLnDLwG",
  "key31": "3a9jBBQSw6LKDv7amdQHqBvB4Ar48RKeatyRQRZEUC7ztraKsr3Ewpi3UzGMT8e1qDkj6VnnygV9Rg7vqSDuqtZe",
  "key32": "51sXZxEtJ6bqgxoVZDK42qhDU8Qrme2Td1ufWhVV9fiCpy4D6yRExzgz8uKFTsiF6gAGou11jm4qUB5P7oyoDzzV",
  "key33": "3rLcZVL6BmZapG2PYSRoPs2Zg6VAYeiS1eWZaFGxbpwjormSJUoDrpxQpsMkU1J51CACVnVK4L7insdGfrvLaT3L",
  "key34": "4MKepf7Qqu5WRjBd9MQpXfy1JQQLUuAY1EewNi3zE4Kv7D2bnnJ69ZFp7u1VeHnWrXuq8TEaJwEa3QPxxFsnWwH9",
  "key35": "3Qi4u6GSRqe316C5iLUg4hoLu7cGXE4FwYbzkByjioWbqpfMhmdpZMcJpJU32QVBrqLHibXcMHbhPoUbKtcBxxyv"
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
