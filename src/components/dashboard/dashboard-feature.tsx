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
    "4zGGsgewQPLHQoyQeL9YdydgifuPjcy4Bh15MUP1vGpuzTXJbpMd6QWuQL2i59UMMASqsmbwx3kLPTHaUySsLinC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JL5952TmQ2mCQMdBcYQcwMkVhwnu7vBxYUgSGwCCgoYzsypmr2rLU9mJDwMge3vuUQP5F2pEcRuo3oNMYByMUsC",
  "key1": "56a4ZmTkYUYcpaRtxDA2UDXot4zjKwJJjHSdrx6vnvX1G3R4T7hCX8UKWPtiWFM9VHtAiNn6YqpgQhfwHDqzUJnJ",
  "key2": "2mjR7JBn22wcBVtPEihHobFziGRYi24G3pcntzoL4RFPUa89HU5tzNKHK6cKaKrPefZou5K3ApgDN6LdgvHG4pwM",
  "key3": "vz6u2bv5GFqMZDyCN4j2CXwMtUHKdYVxBCYrk1Gx7K7xLKm3jYnTSGsYsPfaqGJ7kXvxzDwY7XTdxWXQQjzRmm2",
  "key4": "4Fo33QsWJT7SMsLEcgBnjwgtTvzvGg7tMHEFhEpf8xo5NEzsTAzW7AVkPUWArZBJ3wBGrfweN9jxoTT8TpA72aTV",
  "key5": "3kGmAbFb5dezbd79JxAWXmdvht4x6F9dvi66nefBGdCZXCxqqeppRGGeUFBvdh512hLdqMn7SJLdhUwkciCpMjdS",
  "key6": "2sFuvDRW2aGdn7M7Y3qQcptKEARyWCXKi9W2udsRa9hw2FaBpDGW6AjDjmVrJ2mun6DHaZ7zmDQbfcHRDyUmTWPX",
  "key7": "4ZBSz6u8zdY3dNnZFN4mSp85AdUys9zDmRcBgRfLkKsPaoL3yjbo66f1kV4DWJNbZehfazxxpxSgzq3QLEAzbxnF",
  "key8": "3B3NRyFty4LeMrijuoxBC2mapywQ9urX3BxZLA2VXnG4afNQHDnjzJqBRarF8zSi1Y7G1GaxK6C7B31yiSCPVx6Y",
  "key9": "4mdmN88pSNuZ65h3XkuuyMGVJMaREf87Q2nPbgiJmWTxwRwFLpYvHgLnBz6mq5nejmsigym8VsNMATDB4wGNT5Zm",
  "key10": "5N7U1pVisUQEecnieSvPiUxT1HMEKtjY37kUayfVQgXo3DUNHkvFRdVP435fY3r99AsSzP3KSTu5A1Z2azNb3egH",
  "key11": "FSXishFZJxUuQpDGe7vMUHvmte3gW35LXVfwQwkLes3PWcgDjQZuVkLC41yoJeZisVVFbf7TkasZCHdqt6syNNK",
  "key12": "1FZGqMmcb97B8zNYRMiVKmDuvCFiNioEXvBZUHb8frc9av9d6CfpwG7ZLWXfuiuAg1EaPqrtA1Es7yasd7Eut7b",
  "key13": "2EUgnWsswRt98rUFoJUKwcAcMGrXBtaxLyJbF2Ffk8HnW4EMp1FpH94mb46FaWEtB666MYMRCh8DWo9qXYhQybnp",
  "key14": "4qZ6TnKSgm1hqUZFAWhvwgsUiosKAwf1839YqAKxAAFhmKhokoLmupJ2pbWomxLvScP7DhvKHEhs3vuY3qSs5JsK",
  "key15": "63L6ZWUmSPJW8wmeFsvYW7iJZHjK9rcqMeUWk21Cpso5Uxys8mttNm4TxSpRA9g8hnVuUHmUhsFjeHaoZP2PMr67",
  "key16": "2RX9D9GfF5YJDNdHRr1gkYTD8DPEX3RhjyJYivG4LUU8qv7DAHpv5UTErCeFjFh99LMA2dNSj2gazuXjud5nPrAy",
  "key17": "4HAuh8X5PrUpJjpSJLzeJ1E5YFzgBJx94anUsLjWkoS3A97f8QMywEL58vNFqr337ipV97XRBJRFkXKwLh1ShdRr",
  "key18": "45oMSjHd9zACWN2kKDUw8sroFiQ7YdEt467EAN75pCPAHNgDqWZBjsHQ2bjBi7juLBRZ89v4nwn4Wrx4ZwMVZ53F",
  "key19": "3D37jXAYKahpkYaoxZcd32b9SbazHPP8qauRuhJw5fGweCAjyVcw735fpHoHoMEjV2HPzXLJwnQGbma5ZHczzuiu",
  "key20": "E3EtiPVZxh6p6csr5Tc2g4CML2ygx7K7nS8naewaZKDUZEpybCWTC7P8QcWoMzqKBD6uM1TmwRh4M3rx4Ddpney",
  "key21": "5yRKXjjFBkGJFnWwAPZgxGH45KKZVyLSvXdauaVimtBUyVuhUGp1n9w3YVnJkndCZ79H4GX5rJMJAMzfhx6nJGTX",
  "key22": "42pWrEpbutPw4Lape266HBmckaD5ojBbnCTWTaw7UudMGxCcrztdrQkUJbWJo1h7BUS4HqWW6dtZRfc95Cr8dahX",
  "key23": "4ej3sBj7wSZhvRUxUpXzp7vACKZ1Bb28QbU8YER4ZtAwUXwviCpNoTUg2G7zEnuqvMEjSU7yEzLajMZnKrDy4qFx",
  "key24": "s49RyGx1rin7L5wtcREU9vRk69HZLQ8bLxMgePTusBce9ghGt6TaFjb9in79G3ke8u9bsLQVKGFDVqGedxeY5AB",
  "key25": "5xWgXwEoTzHhZYi8zUfp5YKxUyLcJSkHaUQixY7bd7hc7a3Ru1meTfTh7HrMZ8TKPA8VCGSxUj7U5Awn4A5JYEsD",
  "key26": "2VTcLTQ7TzGaWFU4XbcBoihj2MxGzaCXJXRPA1fYmVZB8DSNKeLa1dBwmWHoCRm31nfjZRqPqdmUtJq1xmH352Z7",
  "key27": "5stWQYunKZ31WegPJmAVWeTShydoKJ6ccxV9Nbddt9YH6jcv18dNDJnZHDcYCz4gDgRyTZXcLhy1DbVevrFZe5jP",
  "key28": "HCeB3TQJ5Wn6Xo9nu2w93urFM7mJJ5a5grgF4o2h2r8jXVticjRNfa2sNxkFmKvM6utRqugtwHKmVnSPZvU1br1",
  "key29": "3fzqkoKFwqmqXAi2r9D1jH23E6Qad2mX8wxCim5Bm87N8y5dGHG5KiixMtbvDSGM2W9tcWJQs4nKPpjwgz8tY2jR",
  "key30": "4aEKyBT6um67kVwgNXjLGmjH3dhGvM5FnCvCAwzFCav5wwZgg4Rmx6SYMJ5ydcWSRZ9oFEfmC5vQ8p3S1N1qLwmf",
  "key31": "4qSkKP6dE7W9pL4uNWmYz6jKNGMhnVPhru6ETyerDUr99GzPmD9bQh2QgvtC9BFzTX548ovpwNW861Q56hkn1q6p",
  "key32": "3d2GzrVEhj54JVVn9j9urXic8vFPfnwihSdXpW12MYv9e6wHMpQxVY6q9AjaCnX1jmEZCLNrwgbwEyxWDAfjRdC8",
  "key33": "5jQ5eRcqnfNJ4x1vy3REEaxzFK5Tt13AriCVgsovqx2XCvWRuEFP9Jp2YhEnDFrs4VPZbARU1cXKezxkhSDrVK96",
  "key34": "3xNqsW7D6NSqENtpYbBWLqBJ2R5KsD9iAF5z8XFtABbRJXRz4imM9ScYb7DMykr2SodTniKdusNhyt6bWQ8f7mKh",
  "key35": "3vgcZcwNobjqtw8MbzoN8Jwrirp9E4NVPP4XGVscEv36uCbLUGG71vipkXhU4ViEeX8Tif8yRNDwk9Xqc8BP9j3m",
  "key36": "2fbdW6HmN6VFkpbGEBU1gbaLvswUHuPkiGVLiPFAc3pCderAYhLNTY9SCn1kaHSrN9wu4PWQe9BFf5LFXPTVm645",
  "key37": "3zGd5NVg7KWW8zq4351qX2pkadXfV4EVXWHYBQTrqbsB1K2MuyVvrkoj8PcuczG396KDNU6Pn2MHpdRmxiWSJZik",
  "key38": "twoPL7dpSCHoE6vs7dnwnMZY4JX8JfYVGvaBmDC3xLcdm7dVzFVjpDUijumUo7qFrqdhxDhyEdScA5B56AkYJiB",
  "key39": "sG5KqCme84kbqrMBt2zbtgaehnKF7ikXURM7JyTSxDqXe4hJpzRFNzBa2B3DKNizyrWKRsQQLNeGQs2EFcu6p9E",
  "key40": "WUfEE3TtZtyJW5ToZjswNKv1t2oL3cmH1bssF3tFzbDsHat2Q5jjZWoWfazKQU8e3Q8gKzLJZ6yzM4tzkBYgydX",
  "key41": "4sUm7d6v1BkfwADZWhC45FK1MEVkkghiDnWgsnKs3uhJzSv4ESYYpJQLRr8Wkh3yHus7ud8mShzWEHVvQ6LfEq6w",
  "key42": "5S3UM4B8GZQxEDVLAr9aiDcwSzXLFDMJ19J6WY7ttTNWDhcjPXgfijAodFJu9VhZ6Sh1BJy8vSSS7A2sudxRv6HC",
  "key43": "63ydCtL9CKBZ4Mjq6cz8PEzgsysYXyq6G3ur6qa5V6k3DPSjM6wqXKAQqA9963jXDs2GyQBU93Sxkqp3rPoZX9NZ",
  "key44": "3p3DnjqLCsD3H3EWjCPWEiT9rG6G46TVnioHNFH1Qm4CePTBFQ9bKWiP6173pqUrEBCNUVPcRnu22ucBvJU174Dn",
  "key45": "ksoNC4RpHuCZjTtGbsosbpXrHSMYpYmvBu9QYdZ6KDQfacDJbB6X8n8LqzGQT9C4EiWVGCP8S9LJa7YCBD8gv8a",
  "key46": "2oHJdPabhRkSscVUBh6RFRg9GPfyeeTmDoKDnQhFeygJJTmorjagZKFxEQrZ7S1tFyWboatdis96dz46vuybTiog"
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
