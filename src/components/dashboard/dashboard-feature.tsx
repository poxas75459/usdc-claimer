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
    "4dMSPP9j3kJnVo2dm8dRTcSZcXpMLwSTCjR4QugofyoM1i2Ep9xKv8Pg4P9NYGDPvHqt4W8HwwgyD6NqtuzTkP4H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xjpaqHgLR7ysHMdhFbG85vyeUFfSFggPNLvvWC4j2XdC1B4Wif4XZWU9UDP6rpSqvXqnmnDayRUAnW6u3THWvge",
  "key1": "3soDZGKR7NZs8CpdDJ5xMfVqyPx2obWSrRsmGpfuJhUjBfMmsQ8rjDnkzG2tUXoMct72w2LJBSYgve2e2jLsmQik",
  "key2": "2BncYoFYLMzCo1fuSZ14Mhi2tBctfhLpzxEnUysnybQ4phokKiReBdaoB3ptW6JKbdCX7KvU6edUEL9NaJ5QYqPg",
  "key3": "2e4ghE7xAJgV3QMj42yRmCWbHqCapCxJwzcnSjaQnqDaHz4ivkibwLj9MpbCsqUpvMu1JzEByohhLim3q9xq2rwy",
  "key4": "2JmkTt18ZVWwXKt4J76LdE6daEMG2FexbKrQnUR6jjaSkk1FX5TE7Nz3QRyKe3aucA4XTRnejF5dKFC9HmQG853d",
  "key5": "3d2nmdRT4M3fhnaTr3TKmGDmS9juzJAaLJGFZhAq3ffgqPvWP3Kgr5T2sKibYSfHLta8Pzd3b2vrQzevNc9Fn7mk",
  "key6": "4vxfQsoVoZVhYd7MXpgW4U3HEYoCpCcVFmUF5R79kQGUvnyNdFuLq1rrJsW5GufZZVDR21ugbaoj3wZPYdRFKdKR",
  "key7": "grzFFArYuAYhzQ4bLyDQWv2g4vAMEdTnQ7VgWiAXieSTQ2zwMJDhsHTAfzf1gmigQNzUx4ujYMsiRrgJrXG3Xtk",
  "key8": "yatMGfrnrU6EmwrKegABhhiwjHGytZNMPVb6QdEGbkNSpz6sibFvCFxqthtgNMHbS7BjhhDMdRQWuJek9jL3z76",
  "key9": "63W89rm2AA3F5EjP4B24oaohG3pXaJwRYBNeXG1dvM7dAmc2xekvpr4XN5DHHtn1nS7wGrMczDQMvvEgcaF12ZpN",
  "key10": "5xcKVuzhe1XPB1AZdU7Z5o2mbc4VBV74zZWM9Cm1ubm4gEQURTEMsWiVsjJaZScSGGhDrcZbu2jKz2ZKxevkvpgF",
  "key11": "3YqpD94evUpM8m6dK13KiNLDLS2aX8heaegWjyiJBa6B3VeDZi12DxxWZoQn1QqKqQBPNKHbY51HxTSYqmxXva3s",
  "key12": "QmbfzC8Xd13oz2CNkCBuAHUTp8rsFAKe2Vo8HxcMnxnS5wkgPMERx4DF7DK2MDrJSzNv4KJTUDJDzF6wYBdJy6P",
  "key13": "5CMeSAbptorhhhCKTG3NJRXVJiSb79PzqMF1fS4E9yJxBn548b4MTwpFgySqFSwQH6vqLf5cbkkFTJu4xPbP4buY",
  "key14": "4SENZuJ1HSASFuQPkkd48YtqsNQHDYS9JdqWwkaJWj3CYW3xFmu9g7t3MHFs7M8gXDeHoEYPFBKiisZGtBUAfWxh",
  "key15": "37FQpDxwDxjLgc4dFEDpKLZCsawdRXQay1ywDaW5Erocpqv9f2dFATfb7SX1FCD6ggnPtnhNtJtDR6RBLAvVKx9q",
  "key16": "xVgqdDttYufZc5PAVCgwxD53fKA7m2bp17dHoFUFroWyB5648nJ3ZQ4KzAyBvGeZoJ3oC4RWpJdbgu8kYQc339F",
  "key17": "5vy2TDBtMDDTs6uVE233Rhbxe1yckksnbtkihVfNnUgvxhjQ315PvnT6PQxMhCPtP7nxEMR8YhiD8cvhAqpc1ZoA",
  "key18": "2Cj5NVTmQDN49mWGAt1CCfA3tSbsHjvjCDCQC86tuD2x5544EZP28WuqiFwntL4sD821sNLMYkEgsJ9v3dP2Pgoo",
  "key19": "2ZgE24mbuX6Te8ZQ41Z1UrY2FLqQbU6Re5eFEbFrRJhPnybxMhZNgbAsGtFhKHpkZk4KvefDn1N9ZJ7b8LjSdPJr",
  "key20": "3ZEDz3rk3mHxYUqkB9gC2SBwbujMq6dQgR5pQJLNxSVSQtityzmorSsuH4AA37k32BAoapNHxevbhno8eBTJnJEC",
  "key21": "2q3yFUCjnnqDn7KXcKFgTwx8nWfJUdazwq5YKy49c34izcQbwuRq3jgtK1diEAbToJzccLBcCm85TaXkRmmDWyRJ",
  "key22": "5vyPyKpTkj9JGrkaExnrE55uERXAT6fDSB9PPngp3Vd1jPAbgvqVhvWAUxVm6rQAs6pM8bmzbswunZ5c7dEJWrRj",
  "key23": "4P2k5Kqe3EWyvW9d4GZ62H9Scdxi3kefs4YwSyTsYSiPM2rf9k8wowrHvvKHwRBvdEfwfoV8h99vPihk3322Qrm",
  "key24": "oC9b3xVap4vcegTcbX827EPRNCQuECahyz7UNTE3CMygvd84xnngojAL5KXY7aaaymX6NLFxEb6bnD8SzKmwQ8K",
  "key25": "5UzvSCgU64dVSkWr1dkJVDmt9gNom6XhxWQWQMV83KpCMT8589LxwAjredx7dZiwd3Bop4zmPteSceF15AqSkMxY",
  "key26": "2dpJqn3ZLSYVWAij1kZgATivZVjya9gRndHLy8k86WV9wVWd6TNik2MLgWeQXewx8rxXu2ga8XhLYpqsAmjrdmJ6",
  "key27": "57M3bA26jESJbLvMAJMdcqrY6VDiQEazkLe7FWgSoEBTUj6SxgHm22WagNgNUwHtCohgTMQT5NoPQkgHmxcNMnKa",
  "key28": "yUmeLs6B1R5TVfaNLaMeXFjDcrPvwkXiZLANbw9B5aiSiWkKRztQCimSJFhcZgxwU1AZRB45vE1XuRydEnKp6VQ",
  "key29": "DqiuAeB8HvVmdZWdsXeSN2aXMypRN3JLykhazyNJ3v1qpsPWaSTzcvNrC1PANkkfxYeX47DayCKwrf6BStprMTg",
  "key30": "3ggnjJF8oEqX7oa6Hqpxt6WLFHi78zmMj98gYTNDS1YuufP1tTiMCigZ2M4rouWjEL1Cz8PvzkyUbPcviUFAdkns",
  "key31": "65dwegSAfE1C6BZQTGDiRbtPk6HA1PJZQE6E8ewhZ5oH2r8wM5sFHnwV6fKbyLXawcxP3fWPn3YkynXT8H5vdP2h",
  "key32": "2tS6hvgWjuaDh7LVCPGDEp9WUbNKWg2wtvwhbch651LXtExQnoRGbev5C1bQxiTxb28jAgtuQD98MLdxmMnEVqgM",
  "key33": "4mRGQBJmLSwgPKfVLUeUQx9Pe7RyiNhDaNgkjh5StRmpi4KUU31dJ1ZX6jfuX85XvQwAwxNUs3D9Avi646MoBTj5",
  "key34": "NeQBLqdvyifD6FzXtmQYm75EVWmor7NVGkp8qCsAro8TDsZRGDQpj6Vt78zxryfLjBx6N4k7gnpEh7vitnnVttu",
  "key35": "392p1Zy8B6PPHz56SB4mi9yQC3wttiesrWypu425ezSdyMMesuuVSW5ewRJNQ3qWKr9N83CbLL5heRBve2Lm6Dni",
  "key36": "4A34YN72QSbpAoFpWbifPVx49Rf2mkoTwpEghMTzYMqert6NHHvJcwDLz3CngkgSEAgQhr1tWwrozXsvzCUYgHxu",
  "key37": "5YKNQueyhNWbskGpD56pw1TXZyWYZ8G7RyyHygsgP7e2HP61JqGG4eNtRBqtpoKGbNEyzxexwB6eg3RpCWXZxfFT",
  "key38": "4zgHW22mSZcPPfix7mndsDXTVynxuY3LYLyK59RgNfUZZhpcFGdeyhQkVjjXWuLhvNA1LaqrEy4BBjqh7vgsuwnn",
  "key39": "5CxpAkrYPxxUfwCnSmm2TYV1PtMrYUXW5GSeTRy3XrQzbVWcXd3243ua1c41kfp1NoSiN99zNtnRtucgXnkH3DqS",
  "key40": "3tNB1kDwXrL9EoGzxDtFDuE3doEGz4bhg1rfcB49FsjGkVVebJPwRaUek7adgkR1zmPArWfB17xNKUBmi9H3SksG",
  "key41": "5DacwS9ginw5fN811eFNvVf9ZhwhHKJEDajAuNF8VEFmkbr18Vh8Nhg2ZJyiut4umLukFnmREu2qiseAZYLAyNiS",
  "key42": "23Qz1UQSuht5kZaadHx5hhtV3kR5SYGnuw5FEtQPnbxzKQKA3w1LM6hFuPRzozPdVpuFgxcXEY6wV8uWFwDYWcsm",
  "key43": "FicPvQ768pH48Zme7GZByrhrucjJG9EcsGjLwWjk49rM21gEcUcFjJhtdzXr2ZUm5ApyqZ5fz3xzY7veFxv4NsM",
  "key44": "4dri5FZn7bJNyMmMuC3nP72hApHT3FvatBBK8cpNv2hHggtNcknaZwyUL2BWq9rUv35GiKqmVhBaWs4UVg7u5A6r",
  "key45": "Tq6A6BiLgLfoMMDvh2z4biA3jR59TLuKykYotu9uAowZZwaiwM2KWo1jDTbmundDEi9jNQF8WkGasfdwNLAamoC",
  "key46": "4C7bSzkQyBFVxV12nvxg7PauXhDLZEFzLFkaFsEZkfMaaboEGevGSvhc3M9mcnL7TAFUzxihzv2SHZavmEtf9akG",
  "key47": "CwzHvX6ivP87uttjQLc63sJxGVVzqYfXWdp4hNKKECMdkNskkAxk6AzV9uERmcCPC137x6kmJYs1gbByV4baFuj"
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
