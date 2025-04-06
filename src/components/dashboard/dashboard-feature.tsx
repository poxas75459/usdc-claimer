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
    "5k8TcdkiRNUgbgHCtgvvvtJwkEjAMjKBj1jGCv2qhFmTqxgpbrP9Edk3cdu5RhJ6NGHh3gkrWvNrpUTn6zFskvgb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mWGyUAWdfG1EGuHjoDKinhqRUtrM3iwYWHDBkNSYkMHyS6Mc39Yvi4HohwGKTRVNPaP5MhaiLTriev9BKz8fC8k",
  "key1": "4GXg6BNtUMG3yZDt5CnDbztHebFVNHwrZKX9UTyBxF7NH5tzr71rW2VZwSraYsmM51Yh1ARDfkCBT3JenEaYmu2p",
  "key2": "4dsaXHnXhWdMc6aPRoncywM6kqKLgp1yzDFrYNd2B56roWw4ABWNrKhXMxgGV8HBc1UKqsnMtd8BoBjVAGkM1NEA",
  "key3": "3TWM5EhGFzBe2nKcb889TRE4t6gurRNfSYBNYapSnjoFgSgpBdBodGnB97SDNNiZkr6yGRsujZGqgq5c9M76F3UP",
  "key4": "am2Xs4xJa1Enx7ihGJFDgfXWn3TQ9Vs4DwcBgnh3Cmqo3KHedpRfvLWEbQziLiCd7S6eDT1stLCRDVeqAhp3Q27",
  "key5": "4CZrCQupK2uT2u6UVbybuW3umqJ2rPELyVufAi4uZhJ1jErBErM1qGigy3r2ZkyTS7NhMPuvQ3eK5vF4CvZZXCa9",
  "key6": "5aXep8qufLDcBAYF21rVWxDpLkGTKTF32u1hsadvS3Zj3DyDeBfKP7aZJHVeLGpDtgpxEkr1tTdKKLg9NSp6owDj",
  "key7": "4JKDogEakmTJdACmZgmpSCf6BUezzJfeP9Y3i6Rv7549da85JkEcmst2GhDr44LETjY5aSf5aYbHPZLH3JxRYwtR",
  "key8": "q2ZtUzaZG8E6Yz5gYuubdSmWGrm3Z785u6YuDewLsBYUeAV8pJ3xJJi3vBLFhSpv1tjhNjMtW2vfV13Cac86CMT",
  "key9": "4doBRxjVuYVcSQsy5gGoQ7RYoFsfSUTRfnrACb5qX8nbJPcv99EnjrWRrAHY7rBSVxvpYYEjDU3hfdMwPSbwyGbm",
  "key10": "DarjyzGpGKEsYHcHsdFRNVGopEWyodXMtyMp6LgUwX1jL4odqfzz7S1qu32zjhcgTW2aPXHAWQ2GiaAAx93ewLX",
  "key11": "4b68RqnifSfMPCr1hpswkzi97njyohMvhsUdHfM72PzAtQYCyQPGrh3Sgf9pcKkiSQNJMU5i2qXsKHW9jyf5tBWk",
  "key12": "3PXbDeb28vCrg8y8zA2cXTW8mNVPshVf3XwnQJtzkn3v74Z3LXMQrNAD8gSa9ZSHTd6ARKZUw6RBAC7HRUxaxnKt",
  "key13": "5hB8KjcfwcQQnPo8Vitujf9PYtNvtZE5cfcfQeV91La5hTrnF8DU3ub6eusnmAVZdwc4AXqnRZ5oC5Mv3yAE9XbW",
  "key14": "5XpZ5zUxd5MAQANzw7MjAEhqyhraRqmzRoUTevi8FrG6v9hZpVYZLJseqBf81GyA4mq22CHQFv3QEbYE1rHc4gPz",
  "key15": "5v7z6nMU2wzfFpBf5FdZXGtvMHdiya5C14wemysCVkNtW7wJBUWb2JzKMmpxV5DF9VYHe8J2qLs6uiua4j4uhZLL",
  "key16": "3dFSsgSCc5Tbp5kSBnUUgR2PyobVwcjUnei5nW5ebVS61gd3WCrknMu2rayqh7PFPka6NtrvMJ2rsFXjL82N276R",
  "key17": "xcTnFbvh2gXXJYeSEXoCDRi8H2QWh9G6j4fEWnZWCMc9q5EcvyTTzYX9p15jGgX7oEog6oC9GbVejhY8r162BUS",
  "key18": "66MNTjiwdKNFncx13Hz8YTt6TiZQwsR1QYLVUbNDHssMpvbA5MvAfYEBMQVpen6sKFWnfCzwC3KfJu4EGNboepgY",
  "key19": "qgfGSpNPp8hHVBDbcNn526VhRdJ7edZVfhxAmutAWYYJkjW7tTyDo4B9weCDF9M5cK2rTwKeFgDqXLnYiuGACqK",
  "key20": "3KBjKiKKq1Pb7ec3PJX9i3hFgaLLFt466fkCiFBmJACYUeHjeSv2AcEkwWTuWxgxnbwPonLXCb8fyP5XAcsD2187",
  "key21": "5JWPYbipxbWpkNroLwtDXLoGJzVaWoSbuFEQeDM49tLqCtJYSY39m5srsciTymZJw28VFFpjebUFt4MJPon35o36",
  "key22": "5huVCw1DDeNXaYhraewyesyKpDAF3NjXVv6qK5FmR9uv4As94W29CakqNK96rz9L1wBem3UDqexDU56UcQxS9ox8",
  "key23": "8mDG64tmsojpSHY6GoUZK2CBwzo8jCoWjizLUiUZK3CcbvoLojqaME1zvMb1pvBYpsKHJVcQa16Tqniv8SNbNtu",
  "key24": "3PK4kMBAdD8t9dnWTzR3PxAtwyLB2VgeyhhfWakkgqnsdZ7i97sfR4huWaZwUCDxdH7gLvPvQv5AL8YG2GKBE4LJ",
  "key25": "DxEqHnRz24NGFAE2QCyzNQZbL7BRdJ5NA6oN7uUbhiJawsJsRrQi35WfNbmvas45KxcPZ24fpAWV31uQ2MXvDgX",
  "key26": "4iCQHm1zh5ED1L3ux68QH2qUVSb25utvGS17mZup2zxRJzK8zhqHMg4Qd7yvT6rNrJgWhams5RLL2ug2a3ekMK5X",
  "key27": "2pZQbLArfmtEkQgEGDWJTDvNSao88tG6uCGwxL8hBZxfjTbzqGe9EgxLKYQNKdW8zTNsrNbPwqG6eXZguaAnRKbW",
  "key28": "2VMdxq9YT99ptiFXWxjseyF59ggHv4BP92dYrym6XSPBQa3rkSYsKidNkridJKpXYuZj48xXQemedFqrkiXdrxsh",
  "key29": "BPYJyH37G2BizLK6CTtwgVwuUS2dnhQ4AoBQ6iX14shVTZ7jHEyeuYRCfsgMtCkSAFmrmH6x1iXswHB2r8wCwgN",
  "key30": "3MTXGAgaUCyecziQq4mnT1mF9X3a5Bnayid6139PqgheDGMecG6mEHFyMGzF36YjYGYrV86WJfhLKs68H5GL2TLZ",
  "key31": "5JKfpYBKViyuXE74bVnvL6ZDBEuSxjQ4RSJGQZRJH22p8bQgTPsVt4uPgqiMC4toPwcrBfvJ497QSJ6YoNDnN68k",
  "key32": "3wdQ1Fdvu5LWLykaRnmdH4XjLwRpqTnBzfwwdsJRVx7nigu3XCkZnCBCYKncpB7BKALNRXRGsnz9W4V4dEwe7U2E",
  "key33": "52akfshF2N5fhgRAFJe6zCJYpz83qeB5d3uHmvo6rPrs3r5DADZNnj1QW5oqVw3ebV7r4i8PHkRybupTPpFteZHM",
  "key34": "5tojkBzNhe25xh1zb8zbVuJFa4mMTeBYpPXZb1zechuvj9oYG6a17fTnYBV8iWqXUxwUByfJAd3VdViFjrFyD3jR",
  "key35": "893WTLGZGDecgwBWX2rkENHvaW5cch2JgmJAa6jHCuFAM2e84YhkQEfpuqMcJQDHErNju6hKoWBM3Kh1RrmHNr2"
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
