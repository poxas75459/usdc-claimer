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
    "2SJjENCtckg28qrWrdSGZwwHREj3jfy9LjjXrfAmHBxC1vBwAtC6UwdMNL7D7hyKFxUTrqZBGCYLsvANVsg6dubc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2poaUbqe4LVuDX5hj73tkEjmrMUYPTt37ewALeE14ERh9kj1KxNHTLJ9uTYECDsJvqbhG1RJpTdrYfXnukrMf4f1",
  "key1": "YRU9EvAWmoy5pstSyFgr3S6JYb8LwTfkborD8721ctDjvhQpeSpGhWZp1YtpoYH7EquNjzCUFnfg4uwwHjT8U2j",
  "key2": "43nyqV7Bg6AHAgeM1Sjo9VhY1Zret2J3XrcN1B891Bm8u3qND6n3oqJa337HsATPjC2RLRzsvL5BvYAa4SzxwTFL",
  "key3": "4aYz7hR7Ab33SRNHeZpB3V26v7dppGT8jrrVvAwsfmNoVnCeUwfTyoV6C3E9pucBMpRfNpBcW393ZBh6M7Rxi2ud",
  "key4": "5NZ63ufVDBeDvYH5ZsTjefCuBuTmm856SsQkGumnWfnpAjR2RPF54TZbnfY3tt8ENCmWxMaJutMoj79DMJzpwxtt",
  "key5": "56FASDUrEocixYJS3aUSWSWD3NfBkB6G8HtrmsXjNMRFJn8PBVrqqkoC9c1a2pZuGzDN5y7Lcw5WF3VbvzZDzpwy",
  "key6": "4wFTwtQYrLXRG4xaSMNrTUbMC89BZcE14G4xBz93q9nEXTbxV517epS2aLbHyRNYqhh8Q9zrcEdKdMwViRt17PmC",
  "key7": "cRSb5N2u1FJb4FazrwB5xSmaoHWpyUgr6b1pxUZuV6V35kRv1W4L8tqKfMZGQigQtT8MTUkHhEU6d7Z1GJncgBE",
  "key8": "5WfCqC6vZFUWEZ5gnvX9WDST35bXHGQcugpTxcvKY6WLiDFrQk2ojkAieWF8tuUAo8c9uB3i6T4RoqxUgL9ZGfn8",
  "key9": "pxsnSS3md83GrE3oQjF1yjJx6imBq4dRi3dKXz5F17drQhVqJDSnLoEm8gXZgvPaBHi5QduQvpxiVYpPNMafn1s",
  "key10": "ZncwRviuyCmWFe8rLmwhaQQw1UszPZrCvy7wi54TncdT13JqQQVsANwS2pP7pdXkvRiv8em3a1aAnxbUDvSTiTh",
  "key11": "4YE1hMamwHTMbWu3QUFPRqk9micQXRGAFzUrqQ6y3vYy4fQDq8HNdgd8qJjKvfSWE5JeXgfPR8stngRbSF7TzTeX",
  "key12": "3L8wdUDwAVFNd8L8oXaHx8mKe2At5xcZCXjqkLzp5Nu4VbhLxAPX5dzWszwXhN1BJnZ5cmP3r3R6nGtFMEVRoHSd",
  "key13": "3y9GbVmaQXDuATa4R9F7ZEb1sXNV7zcSVu5rwYDbLuFVTqdTEGTwp4h4UPZ36XvyHQFdbvyoXWmpXAFXoNL21KLJ",
  "key14": "bn8VfkC95ShFwLN27e4NiFshBWzURCyHBBMA2PZVUtcF9AH8PWFCvmq5X8UQ56jDNvE39xLNcKAdzfcRc3J2J8k",
  "key15": "4h5tKfr9B4zCLsW7ECyNpgUP3oDypKLcQbtw7iXYJEcTAB9TGrYm2Du1P4Z4TkYsp5FUg4yrkybhNSJaTbGD7SfC",
  "key16": "4BCpsvRHwUWm57ZkagnXoFcbysgvsq56F4Ws5LAW7GAddAWNqhWVJJe4AcdzsToFWc98t4yHhY7JkoUbppRBVxca",
  "key17": "BpQKGVdJZnooQG9w3cpo5W6Fa7tNEugGRMejpJcqKA598JSGRx5Eg2D9DRaHsbMEDHhDDbVaiEctnVZL8adMNDQ",
  "key18": "orfUwmTJXPuwBJE5b5hoV6W62n4byqKnqDwiMJN1tFJGPFt3Qs5TvJ1iySyon69GL3jtz4J9JAUQf6YBTtoWqh5",
  "key19": "3VvmwdqV1pN4KLRYKTF5sUkTKXGQnEDrvnVAJWFrNNuUQvXBdR71gw7SDx8xpmdGe5ds36mFM9hx7og9EENfkWMZ",
  "key20": "5Gw2tsnD4tQ7aC8H8pVWhQe1H7UrfgZvL4bQi1G2nffMZDedbfz2GFCqqGL6RvDynv1CXMFkEs8V5hY7oh6H1swq",
  "key21": "2EnxqdbwGmKgtNZ1qNUZKd4m9sGEPuFz1n2otQjqEfQfwPCoNR7F3iArFEwscuumNhoNQKM5MmX7FvXhiDF523Z9",
  "key22": "3fohqsU5G7awTKWPtuZU4zLdHJDm7587LyAkd9pMLg5mca3R65F3ZauqkHbyiXAX394HKBN6U3AvevzF7GcsWDQb",
  "key23": "gVDVkGaQ22vKTDLgt6ZDDtVfKdzmYmPx3wdsB928aMAqdGzT3YQRTLU5A6NUeXnha9SE5ENdUYywALYrq9cK3gX",
  "key24": "2cZmUApxPJer2bYiAVRX8Pjij6T3XL6bvkKYNSVSN5HS2wx6GBUL6h68rWTaFjfgafjfnWK8m83uDMxt46ypXa9s",
  "key25": "4J8WTqGD7D1KGNUaSxWgNrGNtVM5M54PfpoNegmv2U9g1PmDKk1Zc3EzRW9mTA5qbqpYosQ6Q13Cx3pcXgNcbqF3",
  "key26": "3GhLoPFJGen2u7BENUQtbG3t9Vqho6N71tHZ94GqMwtNQncPZuESKPePyZU8iRYwq43GbDqaXffGw1perbHz4Dmu",
  "key27": "4EeWzTdAfgsaFXtws1x6MejLpVwEigYGjGja4QBr6iyavBDzvnxdm81ApxyZvoj8yJCPnLURUkmHtZ8NEPRKiMbf",
  "key28": "3DQPNCneJGZVrnXbo1xjotCmZoPJPeU4FQAyd4ng25BNYvm5Wy11En1rEN4vDRdvjz6oYWfHrAacsZouYzv4Ly8p",
  "key29": "2go7NheuSs9snfEwVJ89X3ociYMWoWBL12QhPsLfTH7nTXLMu67asyNf3BAYavaJoTrVYPWKh2zLED1SGhgqH4pL",
  "key30": "3zv7gSSYhVV5Y2foTaqPECnUpis7eTtE8pnY9TsQVW4NfkKQ9rjrWrbL9kNEPpPD7ZA5d5krL5SYqaabnDjSPJCE",
  "key31": "2mE3niM4NVVkMTx9vHJ4r6mJskYJJuomXtttL2maBfTTXR4gQanYB7E5PqQT7L1MvHKAuc8ueARDHeKjWEFymLxm",
  "key32": "2qEAD8eXusT55bwrKszGZDT7RBG1G3CzqthVG6wi5uNoPE31CLRUaduLUKsxShhfWTaDbDu1sgEqnfRSyiiqYemP",
  "key33": "iAqtSuxzHnE7cXoneA3qGn7QQxr12svucZQUzsJA5PGGN23TH7QdV7u4QyDSV4HeQHWxKQAgiQZ9UDmKX6g55fM",
  "key34": "3MY7rVcUBNjxD8n1VwmPAjSQKp4g6W2qx7qoLzmZyXgXbCLx5ksB3jETU8FguWLu4UtGoVkaekj2R4arX4NBokLr",
  "key35": "5cPSjKvvJHqyap97E7izmhJFsdoFZ9CWCtcGJw3hq8FC7jZYRLcwUseMzKPywa8ReaDvvR4LU7k5rcqmeLxuZP6X",
  "key36": "5nrrw9gFyTj6Lc4Q1oyvC8As8r3Nq5VBHi8Hs8Anv4hTSS6YfkNKshaxDBM4aHd7XX2k4pohr59aDGc589SP6ziW",
  "key37": "5NkD5ZB73ktBjxfhoMbxJaxXHvD1zDPbbjRWjQLBchK7C3NS7sChuf5QZmRRuoMiRQD1tDYSCf79PJLqpFpZDkEU",
  "key38": "2VxywCFzM643GPUrTG4D7oyjep1Mo9dtvP33MaKLDEN7dpGFF1typFKMhaPHSYdxb2Tbr5SQ7oyK1TcPQtipCqhD",
  "key39": "3TE21QPbzB28nfVisknQP72fwkS9KCLevQYvcyeUiXFgA9uJscCmM2gKJiq6eMfescHMugFtp7ktKHAMcbGM8FaL",
  "key40": "2MjVdJuB8s9fm1TZBo8FKvGAEoMoLv5EEPMY9nuk1TcqJVY3f64HTzDjsy8Ek16PwHFUf3TqKLWQsaFnEaGBA4Ao",
  "key41": "3XtYkMbwLMuFdKEvWs8KWtSA3fNRjZvjEE5JiMxdGbUWdAqFzLJSDFuM6uviWjv7YqRJ9YDmFD4nYWqxTmZ859RD",
  "key42": "31waWrceawp6u5XZq1BQkoDGJArHgzanyiEVmSnc3dvNTdXD1GuTRYLcqGr6wArVN9znL733Q7CXBjdqBLf32EYS"
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
