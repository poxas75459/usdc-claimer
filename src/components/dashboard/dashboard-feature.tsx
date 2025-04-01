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
    "3sdhupfJjY7hGbJVo8xgyP4eq1CaxTizG6HAAJpPnMP7MFPDAXuQTcNRuq4GMU6ucoX8RLbJh6WegsrxJmyhYwZT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q9dB1qJJH84TngQgtKDpoVHEmTgvspGbS8W5a69uzAWBYwE45HWvQNgziNSX7eh5BZKivcwNmR1pQcwrognfe4C",
  "key1": "3Uxv9vzTAgxXR1j4cJ5KDov4afLxouY2sHdGwXZRPhPPgRbtswaw4UyMvCg5od9LqDYYJb2LCDfk7MbFwVFQo8o2",
  "key2": "nfoYLtEGV2MD9h8A2dDDVMWXhb6tS7s3UPvy2rQKAffq8dWE6Cb4zRAjkSCrN1iq8226cUvDXP3wQfDwkdBUNpi",
  "key3": "5eEAogzp3Ef6kDN3n9BkCGHyg3qGvqbzpbBY71zhXzVLbaW5mkUpM53WFotetrT9ac3i55GxdnWjQ38T9d9tfYn8",
  "key4": "X1jo2gzAkd9aDCpG3pLuPErzCFftmzTFkRarahFQiDjJeb9a5XvGyfskDx1sjHpF8a5sWv5cEhY1wy3VDfYvxuB",
  "key5": "4fZzXbB2cew4QfV8UwfJbaZBGPpGHAvK8HVcvpqav1LKQVjC9zZYWY5MwsciM2HEMxViKY4P62pvXYvhGABfcFjp",
  "key6": "uKG4pRk8XTu2WsDGZYVVHj3wvokwYeCAB8s53vTPBYc9oirBbS14asQwLBnrhzxR4RMEpXoYMVGszLGoq1SBzb9",
  "key7": "nNdCWufHXe2DcS3LScny9mYDUytSfByWmjZSeFyHiqAND7moipoaHBoVoYPm6ZSwXcd4kgSTiYX9UrAJLxejf4w",
  "key8": "4CAJoiiJNJg9EqqmH5LtyGHXfS37LF6M1MzjqFNJ33FWbYPGscaZfyg3HJV1DmZEdTPv1LqWkFJPvPqyiwVAEHqe",
  "key9": "5oWtzWCS9oVo2r1LC1TqLiD1eXceKw4TUTVKrASMnRCoGZQVDNQeSkzgtsmPsVjEPsayrHddDyoWAAikS8Wkg4Kj",
  "key10": "5iS7eEzAsHv9UJYukf6sRKZGqKmumMy1qmQq4mWeMX7Yr7fe15t4Y54Scc7ZvLcMHpdyiUbeyvTfwou1MH4PzMRX",
  "key11": "r4y6Z8tJvskvmX3712pP5dxZY44NbWBnhSuy2JAunA1hEHenJZtGBdwAix316jHDabNNdcXYDvVrbT1ddqTxkNV",
  "key12": "4q8Z69NoEEREjrfAwEoYAJus2oay8ZcoEcEEWtpMSjMXMF8y5gUEmVcDsLwAsfdwRfPxvmd2tBvQdMTBGaEU3hsT",
  "key13": "42CZCbV3MHeK3hCAQR9dBthjWnss1Pqm2YoCXcYd2FmH8vkbPm3UkRip7sUYbvy28X6CBZcEcLM8HHrScbnsHja1",
  "key14": "xyrkC6hsd2AtNsEmC2HEcuFc84G35fwLHNd5SDvWgA5EiTMVRi4eSwD9EDjxbxWReQ3C1TAdY9hPkWwYnFGwhum",
  "key15": "31ufWxU7hB18sb2V6UdcfmeHWDMXhh9rFszu5YrBbB8DetYpfKGNX4oCpgjqWmuW2TZXAtE99WqqNnQqNrRr77QA",
  "key16": "4ZeokCESX2MTaHvecRuMxdMkRrFujBYZfSZo4sXcdcswRuxTMMHFPC4Ak7ZQTzhisw3ryqFigQYLndrMzaHmun5Y",
  "key17": "4arjKSRwqDw3Tw9fWx87FiKLjFtrMfimGtkcRSguCbKFwudLByMpVEPsLkG47pDgSAw3ydm7qDsVzkr7yxonrAwk",
  "key18": "4HW3tnwpASRrBDfNegDM6vAXmBNxqUa53Nuum5HXGQb5qSqbDUSUbuCzsJZD1P7a3rv7JtjfkQNGfZPtmbwH6s4S",
  "key19": "22uFPak3UbZ9utxChzWKc6mVk4UtfjVMm7cCz36vrJ1fbkzwWMUaoQGMMJ3jVEyfyzq1cEorwtPknuq1DsorwP6T",
  "key20": "62WxHY19CN6bE7MVAZ4KCe2Kx58MxQ5tUym9EUAE3KjicyDjDZs7yPDkorNUYYA4f3gt4KHFijgGbLREqweESBfT",
  "key21": "3yGh3oxM5snJRnLsnUZPtwEmWxsPzdtvPDDri5NvLGfBku7Rr3T1981oV9ukmM4hH32KejioqHwFvddVtY3Q7uyZ",
  "key22": "uyJpBxXEymShMFLNk2RYqo2sHR6Wwdo6N7CkUeHUVoULDCkx4xD5ovGz3HS7hGdTCBHgxb7rHHSVJUL5xZhsjkD",
  "key23": "Aou6NCTjL6tXyNk6UcD67MC8XhcbHN9RzsDkw3URr73X5sNRK6QWyeWwucsRVVHok8PftZRUanDuczCypMKKBtP",
  "key24": "5zCn7Wo5iPVRLdESP5iK4N4AmJ9UkBnbN9AWewxDtD2XrySMT2P8VbLzwfe9tji5DUYnDWpF21TGQm9dWR6manQz",
  "key25": "3mjsU95NDq1n9XzqWL9hSL62HT91LpK68WfXwHpA6UCBVm5waLkGj8mUm1XoauyD78W6Toy1JE14E92Hh56hSovQ",
  "key26": "58UBR8K1v2JRwKFgg7hYbWATEfQ1MN9ztPbEQbbEszeMGTG2P5htmp3fsjKF5UzJUtWNHpjYikkrcBfYBYWUdz2R",
  "key27": "5ZxHy3difQRGJ22ot9r3cC2FPmJa9TgiWAYxEEBrtGDZYNuuBrJ71QNTkyDWUE9L41zy5RG6bU6YB1mfreV3xD88",
  "key28": "eAgopv2Rrgx8iuxpJFDSHobHR5fi6qcrEsBF7aNZzEQuHiZgrGC3eCgG5C9yZXMwQ2JADz2eJFkQoZPgE17rigY",
  "key29": "2jTwuKhDUGWQLHeGnAatJQ4SMd29xRzWNjQ6XpFyoDv8Ga2Nd7HRqJEngq3eJRiPqiPBRbKXRrXqehYpGaWeBoQw",
  "key30": "4Zz2isNfXQED74m4w8bCYAmrx6zXo9sbXPuNE4tG5ZXSfhakye9QwGhcgBBqMPtA4YzasTnsMkS3XVmCQkrSYEwF",
  "key31": "1y5jM2bC5m5NZLsnHhSb3pTBDLSnmXid2vUt8khwdvY6wsNWz8SKZJUi52NviZdvGKpjFro4BXRktnMTfCi6kGY",
  "key32": "MSicCqAySPAWLQBFNVPZDCqJWrH6sEm3QpfUvf1oD6aMVuT3pQLPJfpq2p9pDh6PCw6ZiVG1duxdXmfU7HsNeEC",
  "key33": "1WZnydz6cTtUyxstpLAKY1zp3pEjh8V7mnofZGiKaExY4Rd5SrsFSjcvV1E2SMm83T1EYdPDEoUQmvvCP7n7NwQ",
  "key34": "4wkBZQeKp5kvhtgfru7SJLkZvnZkZDbrdu7PDfJxiPGMs1YfX8gs6a6FAZe3CqTeKv3h2CKFmGLdZWR5M4LQ4KNu",
  "key35": "4hanhuArFNtWdGnNiEy5DE51PTyvxN2Vgd6HLnYaeuEF75H3uct92GEWQpj6eDqov1H6L3h4gtzQQcAKAe4a3npJ",
  "key36": "25FL4JMx39naJVgmhGczMUYY1Jj7K1okDrhyyGoRW8VmUEfw5n6UUnA6rYi2ke1YPHwUv1v9qA7B1QC7qTMS22gN",
  "key37": "5Ke5ania5euCeu5Yn4Fs9NN3LCv3V44CukiyoQJDxyEcViWWyGkqhBb6tMcJE2EGuRv63A2JqQ6qRDtUagC1gSLv",
  "key38": "63bT3ihRPNhYLPCUsiyKR9L8N5pNZaNWcoNTKBcogmHLqvKxdQA43Jq8MfAoqNiCDGY8qruL9qVcNqb1CjMbo8YZ",
  "key39": "3YAyg7SSC7efJsPu83J8aZzhStWqCJiAmeMebvpdXaRCdytXtwyF7voFAd7JzbVcxYXLXwBSyqMixCuoRpqgoGXn",
  "key40": "3VU6RnuEWpX2XPc3KvL1XQuyzSLyJL925p1MbKVWGY1mU6hqqX59JZnYfGrBg1dgzaUoFD6zJfym3qg1teY52dAn",
  "key41": "s2RMjFNfTyqcr7ZMF6s6TYEdG6Kt6qf13yfj71dF7y8ZuPAH1WRFVcRNUzWUQKUHGkbUWnT4pbuTR23e4cVoSwz",
  "key42": "EWd9wj6kVT1LqPRGeAM3SFm46HKaS1i4jXw4jMUnSJkDPT3Xe9C5doghWhfUFLW7yQSC5Bva1mtpFwS4i7eiiH4",
  "key43": "43ceD6AXnDvweSFdSK8nANFc2PA7Xx91yLcf7hRSzmhpkvmPpH79Wcq6CqW5ARBLBzFXK5ZZ78rPpQYLSKNzEdiq",
  "key44": "42B6bJEunuEu31EjM8SqL8ToGyupby4DvwpVa6iziL9GbAhaDMCYqhZgi34iM5eNhxZ7Jdox8pHvXQjstq5rAbXZ",
  "key45": "5q7w8LLFTLqpT4nxGr7e7X7xboHkLF7VJRFFShmz5LDKWaBCur3NfUyjwGLBeuqxVmFamnMPtBu9747zSjPCW4ry",
  "key46": "335h8b4kstfADkpLb4CVJnrfds5YLgc1umSRtWy6uVsLr6rH2stFZCqW4hvwQcHBbA8vDbB1jx2LcQzUjxDLkmNR",
  "key47": "3qigjRKsc7mbdoTp3CcL9hM6q8BT8m4Av6mJspnKxbMKZbVnXaSJ3D1jAx2hidBAkUFag9taE6Zcw4rYwMeZfcQX",
  "key48": "3ZZxKxMzsefeZcPe95XFrgcj1aha7GKuR9ytHrhdxUAaDtJZjedZnyCc8CcUt6khqmV9qWiipYWLkTMWx8ezuWUC",
  "key49": "btgucisP8AhECHH6C2WmLrU5eX5qxVu2DzjXUw7sCaRNRvHSE8qnC5qzcwtc2EppuxqUbtkpmBAU252u29EKHGy"
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
