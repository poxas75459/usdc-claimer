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
    "2dZrxWYKfBXEyz4jd6NUTH5DCvUvrrSHawHKumvv4Kn32oXGsFj6idxMwY43r9SzoqqgNMz2YNV4nkZuF5okNsvu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yyCuVjg79JTmMeMpYHW9hdoWmETrvRaLLgMhbkgZYzTgZGd6KJkN1oYsdKTDFEgyCjVwAYPgLSJEiTgPFfeBbCd",
  "key1": "MtJsXHG5oNofEaMKATBDC2A4xbBe1xq1DKMB8uxqEseavJrq3EbbrymXBYAgGoWD9W3ZMF4AqzuTg7HAMNbKwnp",
  "key2": "vnwWfvJruNbtoG59VukHTq7U1ES6UdFKgoJp7kLKZsfABXWXDGmWyxZ8JUsoEgSSp12zskCWAE6fz9PYJbcmLpe",
  "key3": "KKr3zkVxzPXFg7Sr9PGWDcxWSWKGe8ELt7QQbwVKSMPnC1q3uchNNAJYjaZL1MzJ8n8TARkg6dr4yXUSnjQP1PZ",
  "key4": "26CpngS6PEK3PSc72NMjbSS6gEUobrPkSo89CvhrCRcpev2Q6MhpdMcTBWzy23j9rQkPmF3p9apS7RMYSsrii94M",
  "key5": "5Ezp2XaFw6BqoNeVQqKYv6sczn5FnfnPQkm2REZ4URyiMfptCQYa13L6qWpKVTppSRxnF1R63VinfUKfYDeHERcZ",
  "key6": "Pp1rhoA4W2qzPSZU81HJX49HcxTYv8tkZE8Lf9oYRe1gEhjZpFyGj1uYRMhyc8ygYxaKT7pBwBR9oSLwc3LqkMg",
  "key7": "2nnBYxmXpsAfyMA65A5sXJjp9D5CrKMxNmguZDvvDhs2K8uXE7nFtnraE1cMJaa7wV4v2jYH79F2H9tFK3gFtwwR",
  "key8": "4B6nHD3cDKid4XPdap1LGaXdEvC1WSMrE3Scczn41uqNo8KwpjfhBYrcphZqmXcuNJJ9uYPtXY38GjLraX4mEKka",
  "key9": "n5xzRxUrnt5ViiXJ1RxdfinCsK8YpP84EHnX6jPHUr6fdFrikKgPWZhQRG4jsTq1M4zyaSgDSdc7nCW97MX8UE7",
  "key10": "5YSkJT8f6YpDBMHbv2EGhmc5C9DD8wUXXYnt7ii5gsQ5wMzD9aXvC8bpWFdj8i6zTttnJ8s5VHtKRvFo2XJ64kE5",
  "key11": "3Nd1udUeg2E15CqQCYYgSRswzP7SsMDdEw4fGMRNKz4LD2ncbu2C5mZQb4xUr54jYZAJbqPFMKszWzdFTeL5wFn2",
  "key12": "4bzfT1KcV2bZuGYaHww5jLxQQLnyZyF9SoyScyePj8JL76YVMQF2TuKUwCaHqaFQzp5gQP3dZWm8xK524TNt3FKM",
  "key13": "vo8EFLRsxFp3RRkZf6DwmRMgcM4U4Tm2L5MzciA86HSMxVgNjayxtevhzXnyWPoYk9uKW5EW8WuMWu7B1a4jB1B",
  "key14": "25ctuNEbkDD8P2WcohL56u7hpWwme7A6G7B3LiBu6eNeTSYWJQiNY5SSJn4Tic51ZBaZFTUdNeuCpZ5cdQPFZF4q",
  "key15": "4dicN3F3QPMEHueKBMGzPY66HF6zC33rhjmE4qHMs6R1iYzaKKFf6xiiPPutRSiVFF3f7tFmASy6ippJNihuCQmn",
  "key16": "3Xokqs4herYWcwK874UDumxaGrjyNSq9tDoxgzpDnDavmo3tM45eudjFxHrVcqcDnpADgDBng3ZhTbWvRDsrsvv1",
  "key17": "2ZVVcgL7SRk2WNJj4Y8SgTowcoCZe2gyos13p4SS4UTVo29dF7gZwjbBm1TxLU34jBELa7w4wEDpBMbfyYn2P2sv",
  "key18": "3R9tKpCCAa9DF3xB7hxoY8Zn2EzuZ14pZZnVFZtCY9SpCupjREKF29qpQoMCTXjmBiAormiXJuLo67MsCfuU9Mac",
  "key19": "5Pj53udYSzdtFbAXJhbGdWkL5APqgz17sYqpkYZDqrGnH44wsZKCpaWhoYhYe1fhM7A6Bgsi99aAyVDbcf4oiPZ8",
  "key20": "q3BNMNxwPYpUM7v1NUHUWhrBn3dpiKUuYduGJz4YsCrg9ZPPrHL1uJRzuirQkYw1EBzqbzXrGnDrNTXj5Ga4bcg",
  "key21": "2jbVc7i9LbHCFsy3pf4NGm7MjcdudNbVigT523KzjtwdYfqtKJyGwvTdkNTUGtSbD4ZbYckxZf1SD1VNvJnyWaDo",
  "key22": "2grRWaWGr7hptB8wymt4K45SffnoaanVkZcRBjd7ViL4GkcURxufxawu2cHfYxiMwxTn4ALa9mvtgiGbw5fsh5Jr",
  "key23": "r3XaA97aXARyNRVsTsTY3pA1RVT3inu4SGah1B5JoM5SZY7kDQuHNgaEoX9AVLm4moa5frVq1yXN614cqAbNdmN",
  "key24": "2EFYPrmbwLDwiZUWGGK9182wyvTgeysnit5C3i8AYgtbF9ouPxkQFBbcTa49zxp1gFpbFxZj7ggjvaX1XKFgeGU2",
  "key25": "5qV26A7DDFNLZMPKCu1hu1VJCTVTk5cUhsAZjfadCiuuY6UTqQTkkbvVm8a2ric85NnN6GFiyNw9U5SQXDMGfTo8",
  "key26": "2daNV9yD33LputrUg2K7gm8pTLvYtBs3Bd1cJ4wmTvj7G2FatVR6Jo5jaAM3XNSRgkXUv1yXKsh5KmGvhqU5WmpD",
  "key27": "4esoyu599fE84Tt97UVRZXMqAsPySej79XgWiLNy8uRokKtR7gQsXDAsS6bWVzR4hiWuY564ctxtkPPVvdF3R8PT",
  "key28": "3MGBHdN7zu76g9GGV597DGKpr9MU94LRPxcYeSMh8PNHvxx4R42qD9rYeBKJjvcz6GuKUh5dcCNbwof4jioHZET1",
  "key29": "22pgvLZ82pdDX2ddyL1bdUPeymDe6uAi6xfWqjhGpLXwv6SZcPQCe9AaCniWukr1T1M18CyPkC3j8jumW45ZxPUd",
  "key30": "3QkuthARJYAGcwM2QPDFNxpmnK5CkmcnU5jb8E2a4B6N6iYnTYk3bATa387AVa2oMdeDQSxTev1X1Bf6WpjkyGYD",
  "key31": "5rHwpY9YuxJbCiHzGHLuiLBAf3LeMNRGWp9SJQFjBLxgpnzDKBp4GNwdjha7hd29MYEXgsMWZgwcbiceT83m8Ttf",
  "key32": "4yUsaofMKiwBPFcNZfErgGx5ySPEodjD6qKmrpNwyKGnd2M7cQ16Lyfs1JYF2ZULYRJdujYYEv2c8Af1FH616VjB",
  "key33": "4L1r4r9Z8K9HMUPTCLQKBrvrfAfJ3YyEyxnUp1EHZgZYvSPxCqXeYZ2CWRkcmejZXHAvfhALu7wpn5E2RLTMaRhK",
  "key34": "AMpQMsjBoYS2ME5grhnXqWJRJoz64BrJNNg29ds3knVCcMiiALYo4Jy1ezfH6gxjsxVBrZ7eHPsEvgBw5KN3HgU",
  "key35": "3YsqFXV6VxT159gcSiGbg5rismjUDZGWDAtB695MnxNNYjFvhEy5RTkcb68YepyJkrrLLcTwnUebkC5aeg9du7s",
  "key36": "3qHnpeA4MN1ihPBqo46DxHcv6kZnCsGrRr9PbqnYoWc5SzcyRUGLkjV1m8ytiusYns4o9scYcn315BFfJXLTjMLW",
  "key37": "2VuZeEDPu64n6JpSztJJnK8z6quPwbKbkyrgHrzSYxDT59qmZTUYXnarrdiJTgmdcwqK3LdDsDqSuMhbhh1iHjwE",
  "key38": "3NBxJJNB7PShnNBZTwDfSgY667XmMCq8sv2uuZ7vX6m6yT8zr63LTHSKTp4bJ7s45ZruybpHzv18mX181M46QS7r",
  "key39": "5Bz7iRT642wq6Z24dpexkkQqo5zKuQaHnGHsumPASxrFEdQHNMV3ABwuEn3KMgi5uq5RUYcGkbNFkVYMWnMBX8CA",
  "key40": "4zsTShbxXYWvifQdwKrwbiHH1UKHzULPkuV2aBAhUs45USUZk4BR2U4QB3kihFZnAGg7qbNYrba63UtBqe3WoNtV",
  "key41": "5VsHDzUrtdStwgR4syXV1bPv2Kgost784JXCB4DtHy8LerUKGzbYA2s1gFTPUXKBPRs8hqDGSsa5GVEPWVAa48PB"
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
