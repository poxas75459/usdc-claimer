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
    "23LEuueNhRUDLguj8orjZEbdfnWT8FEzJ3kWV842PniQbcfD6zUzV5JpTj8P9SZb6SJB9F6NH4hXaombsuaEhkTE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QRhTtm1aYen6Kzy2b1YmeAyosg5ZF4Fc9z2tXM5kU8b5zA4kFqwjTMcdvMwbbzWV8PruSE4SAXDwUSbkJJY1hmV",
  "key1": "tnLx1nSgQw17MSFKYJMDvBiLUqtqEgn5DCzMdLEQbTuPJ9JHf8P68MB3kzyaaoowtt7xQefjtXi84WV3RmN3QtA",
  "key2": "3SeXbLfoMpB8yZmjT6xsxtCSKcmh3AAC1f4JZrGfMt8nnsagRNrPT8RW9QTVb743QgPsBQS1sRYAUZuasJNZEuKV",
  "key3": "2nRbAA2yVNDNLvykLmmS9uZLjLS8cUUb1Db11mPJgHnvKAvKZ13d4r7sATbP2krE8cEgGgCHc8fEaxENEnGBk8Ke",
  "key4": "5QwtXC22J8oDHYRRbP25cg2XgM7J3VL89HyP4Vk9EMeaMA9hSXN2W4moZY3gKDVBFTg4HMMkq28rSb3BUAUHwgbq",
  "key5": "NE3JZZND5NXU5Zt6Q8xZCzJEECMAZxyV6ny9RJEjS5EehrdeWSPxjngmsczYKkAqcMQs4hyXRnF8u8SN4E89h4M",
  "key6": "VjVBDowL8eFghNXJL5GduYS282NmXmMNxJSAF6Ui1G66ka22QgrJHyf9THZgQc9ciGXa7xry7gXGdZ8t72XQD3f",
  "key7": "5fayoHWehoyGP9z5VgWuLehNdFfJqV2zFBbPPfvFbrKDMzKnZbdKQWLFiD8kyh8UXej9T4RKkeasLNFh9pFipThz",
  "key8": "4Sf8ZewbWvKU2b4zKh9f8efzBmAMj9bEzHfbrz49UUgbAkoo6kDW54i8d1eYMWLL7HVcwWKTj6aQ1tLzaU9TFCsf",
  "key9": "foDzRgKXjjqgon6589JqrF6PqaMbxbFovuws1pWeWGvfsnN8BeeX6zoaXVPVV4nFoJcqUWgZb8fvy3WfR1JckgF",
  "key10": "Wikvzi8DNud6uNF2Hm5ww4R66tCMCYkFW2XobcESCMatrYmAsQfTTzEsJLjjUop6sc1TStJjdfaQMTB691H7RJ5",
  "key11": "qesKCNZzoUF3nz9KCq2m2xXmuPbWPGpv6YEpxbXdJFhwJPFr5aHhBdHDURQvDm1Z31DmDCqNmWTbB2hD2RXigfW",
  "key12": "3t4QncCa3h8zEfKn4x1Qw4S61wBEaRC8Hoa2QAadNUVx8nEWiGLxgS98Dm3DhyEoxy21ZxoRdAUn21qbqyH5vNLx",
  "key13": "34CzxjXqSCNddYPWdn6KBJDXGqh4vd8HS3JvVYjxouWJHQrv2rWKxYE5ZL5XRdBwnDDzs3M4oHktD8wm2insQu24",
  "key14": "286xZhjjDtAeHNJRNiN3AGKAJCYQZkBx4eWZepKWF7BQ9CF2GTnen8QGG2TBm6jNaxMbwHHUw34uAWn2Rm9UQJe3",
  "key15": "5fRjcxpYcEu51M94JrGURKrZLbJDXFpT8vA1Ns3uCFczTpW1MYjNdybCUHASnWn8pwKSaciAJFVoo8DsoTNd4QLc",
  "key16": "5QjjgNUXSpgBSmrXFwMBcYF2jjQnrEShj3HKx7C5WpwTUKa63SwerKfneUJb1LJxpE8U8tCNTPvnqTizWjb7gx8Z",
  "key17": "2RVDokuGACU9hrBA53os2ynLPeb5ea15eAbwULsK56kcns74cykbmHvG62fY4bEmWdSeQnk6xARXmpkkwmULhouX",
  "key18": "5jrhLGmTXeDTrDE24yYdHJSxM3RnG2q9Vih6dB86hTdjiGvRDr9Bs5ebaqVBtBuQNXbQAFtRafdCJetFUDDcFWQB",
  "key19": "2Awct1JkHiBBFPwSEBdb7QFa1En83oMk6HNFEcbrJxvKkKPP8EYb9M4Nn1gJVjbYY7oUndhBnSEKHZgaNmR775Ch",
  "key20": "45z2eV2FxpA3cTQNF8DVBXX83X5KT2xT6q2UGbSscydJMor5vjNCpkWUNV8cq95fE7g1XaVZBChpeX71jHUrptAf",
  "key21": "5bGknwVQWdiFXuDGcoE2dNXQn3ns8qXHL6SPXtrkMC4S5Qwb4Atfs5zc8sPtuMbf2ezwNBeafErBLCV1j6GGqQw7",
  "key22": "2mHLV9ekqjLyLUHrTAXHXBgZtdNphKFhZNZVvPdZdYFu4jtgWCdF2kqa6hFbjFt4rNBzueDX9WGCatRwojHp2kde",
  "key23": "2pf5HWAq7rexn2oQJXriwaGujeajVuDi6xUpyAxDqAzMXr3G6i3Q8UD58HpvbDfpzsehH5DW479RnfuGVLuC9LkG",
  "key24": "bPgU9SNx95Z6ziaySwFWdzheqUmhUpVnemGgJcuv26SJKGKp78tn5M256jizVEjkLG4xk9bRVn1EVpod4wvXeN3",
  "key25": "33TuCmWt2NqtU2Dr3FBu4BdQJt8LVABxxt5dyQYLfg9tL9S9hfgcKemStUwcKkurtbdzvuhCW8hHtvtWBXGvKuzM",
  "key26": "63G6KpdR1CZVhLXEWJeNShdcywwuCwFRZykkopCRpt8bEDhd1E1xbPHyeAEuMrijUJ12jZ83e9ctHvGykpdBAmZK",
  "key27": "2YqgqUJsUjkZtkZFST913JaHUt81vi8bNN2hZMcu4CmMuCRHahBMzdhsC1NyZ3PxmKJGvrvdebQ599ats1VF1vAd",
  "key28": "5nFMiQUbEWuUgbGdHgTkbrQgGWP7Y7HM9e3togFJ2rW8TKu3YBrHrHMtxTCrqSRVZ6gyZwsG6YzAhofSxQMoDU5y",
  "key29": "2tqau34EbZE44KcoqDRibxx1PyTj3w79bMFM4kvLrWcqGypb74Fb88mRjv61vHra5yinAitaEuDBooAsssZhLFAT",
  "key30": "54bRai2E1Ek87EEveJiSmZ9nAqYDySz9fzPiw7TvYfjHoiHVPeRomZUPovcXjGfk3LNMjqznskVzBdyW4XgKBEK3",
  "key31": "4RjuKzVNZeNP6oELovARvxJkHgJiifK36B9C4rZr53MrUJXfT1hdF7QeT8oRyNyMEJHeJnyohL5H4UnLLD4Cjtj1",
  "key32": "4xjid7wRrpdyxra4HhqyvNoHaGSMNbe87RqBBon5T6vLFQdRRkHT6xp5DcMCw6MEgNKHWDv168pSwwo3DGQ7Eb6s"
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
