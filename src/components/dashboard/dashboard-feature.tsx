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
    "4133JmfRfcJxuUmz6dYTrGKVkz5aZTXUduWc8nUYdnscyw1ttwjKE3jcC56rPSHVVNxLtsvGcgXWS8CFuvkGC8zr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48RMDjJBgkSA9E6NUbPA6xpPFbszzmSAdDg9m5vpLXcRkn6nFRkpJpwd8Gt1WkgB6agCdPunFuqHYBtxQF1JQG6J",
  "key1": "ZxAbdFjAAUybQ2R9C15yDfRCrxosWDhbRidq2Z7tBcAUYKWQxFjGUtxePTWi2TTTDjtaveoSDK8yp6VnW3TxNEc",
  "key2": "38vH6vS3PPddkbvgCzS9HSVxdEQcAC1dHH1dpn7Q1bXiKSnbPKgrwiqVXYehAZKaDFXbSr1N2yNUZopGZczMKvM2",
  "key3": "2nLuYJFBwY8nLPfy8n9ZRWqxqnbk8vJfRKoxT6RPrYJdi9VjpAg6uKL7WgXLYkXDpHGykA7CmVtZm8uUtmYAy7pN",
  "key4": "53eve3kFX2YU7h2JEwXSgZhSAZUiDoR7zfTqRmevk5u5j4gyuBHDVKyvwaTbxzagXHsNDXLLaJYjBpUddssfgk1p",
  "key5": "U3ntUTk6iJyadzfe37nodXHQsNuYc7nhZFiYkL8Q9u8MUFaqhvzW33sjVuQYD1ibzZ29i37BMXsh8LvHMfcpcJi",
  "key6": "xFJCrAejWPnyQF7hy6aEuQ6GwyQMMGrt9Tsbu6jhMw9EKagLdkQPpDVUiVoGuRTBPgAqPRB6fCcV4p8QBkmN3iH",
  "key7": "2nSxeSbdLDa5FvaQQhNnMc38rLUGnMKZBhu25Wt8KfhMVgdfQK9aGU434GC6BPRjG7nqScTmYZT381aPYBm9dbRN",
  "key8": "23MhruqGDjhiwJMUrDdwq7wgkLY3tetH2Jg7tf9EaWfsabgpCw5c5AoFkkXyTh6pxoc9Q5qdnkY84Zc66vnEgHB2",
  "key9": "21pCj4RTXs3BZxDsANukvsYT8Uh5KsPLuV1HWVn2gfu7xHuaU5xGZyhWZaXemjUg89BxC46fu3Ex61dPGeJDsN4A",
  "key10": "HuE9SEr6WgCbrtPkr3duCUxtPbzh5uRXNQiSVuH7Zw2qyegC6W1MJ5y6q95SFybCyUhhfXspcmn2qqWoJJXUnoE",
  "key11": "4AZoruKyqwhPKGcv9ZvEp82uJ7dc91xumhEvkaUxj1LbVnvrbEbzUV2K54Ec3SFYwVHuemprMdNEkonyg4JjqnVR",
  "key12": "VJgjigY2aazsSFfVhfNZQWHCw1GzeQ7xjrLbsEWnM8BP5hLXu7iwB8CLfpACK2gaNP6xHykYxrJSLCtdtxS9HHx",
  "key13": "2bDrAz68zP39PZW1qTeWWj3ajGC8Ernpah992vmp6n1HdsTGRf4jdv82vTU48gvKc2nWkdB1PTbb1m8Va6rVnkLF",
  "key14": "36KZBrYw8Zun4TmVszMKsa6XV6hRj94SMPjpSxLRfYcpKEADuKfaZ4rJ6ZvAFsTAQ9kDizWvHnHSSA2MbZ62R6V4",
  "key15": "41hc1jSbavZP9qxKZNw92RAfjmK89nJawJD3LqYT2crXoFS6G4z9ykVTy43ejdZkdKR12gJi7RaEfhm5o6XSqW75",
  "key16": "43BTG151CQyuNFoqHvF1RGRRMLT3PAhfwomWq62YdkmEquLQhQ9HmHSkojqhwr9U2QC25mk4ZzDdeSdfyf4xtpmD",
  "key17": "63cwRfccmo89YxzLWZrWfoVFwan3sMB1j9tDQ9jcvmdHMvbvTa3R3jjz56Pqh6SfFe7TtLyfgGUu7ThmJNGfU6iR",
  "key18": "3TedDXPVbV1XB7acmPE4ZyTwr4RUXGZ8jnpWz7xxNG7ANzk3SkqCB2LdUs5Z3XxZCGmtXMBwwceLwBECf3AQjYdy",
  "key19": "58NRq8PmxkTBSeWtbnrrFi9UHUJoj3AtZu8yaKPoPZ3xU1T6rx4YuqVxpQCFnMJteYfaebwjEy3YUDnhfZvCdh7h",
  "key20": "5EsP97aa8FvresCDC8hWb8g3cPVZ3UcMvJSVJ4Uy2xr84nvJZ7R27pLqc1PLwDW2pzDwTadEVaRVFK9NyNAVMJAU",
  "key21": "4dTdiQFW1UCtBcr3zkDAx4JYH36A1hEP42o7csmebxLbPbV9DUepgQw4bGcREkPweJRbCKwnJF3Kia3EYVJv3FLV",
  "key22": "46id3pUSLDX7RUxTdS7fcKpcai38VbXahwAhz94CPRUbTC1KqcTqxMX7EyrESSjtLT54Ved9r6qHc9MNVE4a42nm",
  "key23": "4mNweUfCp9DnpV6chVQrheQKdLvtx6Bj43p1KAGKqa4gCs1PkofFrazFipGnCaixoeAtbxi4ybi42AHZ7NQJbxBS",
  "key24": "4DuEcByKsptxtGUi8a4CjJy4PecZuedgfwgQedtS2wpHNbpRkTor3SLte65qrFyrK3d84dtDDFWgW8nVEok7uy8e",
  "key25": "4TMLmmng15wXmsZEsK1Kf2CyhV5rNdCn3cRDX9xw7DqMGradB37d6QWPuTdNsP5V7MpKhNLy8FNR6PGjK3o5H2bJ",
  "key26": "35bCuRP9Bc3wushw2UJYBc7mc57XbzjSCDBNWsG9rCRqrr7c1hUTnf6R2exs7KZZVLRhVNBH2PeFXsDCf67h5RRQ",
  "key27": "2mJAgJvWoq2jTU8hBcaPgvLzH9JCFSvY6puKHLZKyRkKJnDZ4HgwdeGb3p6y4sduRt8RRQWzBBfAEkUCBRxKCNqz",
  "key28": "F6kgPn4hb8BGdrCGaDLVG1hgsvqd69iyDsjgUFeqPWNC8G3s6tkjdTude3Xi8kyXwXKDt1VhJCW7quAQTWuCPF1",
  "key29": "3BSNjvMSzMuYnHzuaafNMd6y8Goeb4wFEJ8TBm3J587eoPsxnP8ejkZ31DzfrYodXYbVn1T8KSTfZ3zVakBVm9Ss",
  "key30": "AuMEYA9qTMnbYxfP546kP86dLq8nuZHumkBCSMLGvhkmeC4A3tZjkgXQaDgi7jHTgU6AGXoAFjvAjQnz2nJH7H7",
  "key31": "6yPBZLAKmAeiFUJNCHuhtQRXCJ7usiNJCB88yVgRmeGeXFZUiU9ZVBU9WcTFX9atG6cpYr442YsbS9wP7quQzz8",
  "key32": "3zfBN2zhv14bBmqcvdZqRN35cAHHn9eZsaybYtiKMMyz3fZXY3Rb98F7hioSqvaX9yghppv2rttX2zmj9q1k7Myi",
  "key33": "4oaAs9V2Au39cTYqbcTFfgHichtpeQeLWE1kv1SAN4vv9SvawcZP8xba523i1b9stLmh5bL1JEjVVaBGRdduWpHK",
  "key34": "6tgA5VoEWKRsv9TQaArwHE5WCfeV7ogn7rZMDQUgyxDAqVZTWCZhZnuAGctmg5pFjbXUnN7mBtm97igL1Q8KutD",
  "key35": "2qkxdhHGBnMS91jhFcw3Zki6AuR48HYHZRtoi8tMqyxNQhMDkLiWJmFw62ggqYQJK3qy3SYdbuesxxHCV1HN28ek",
  "key36": "3EZTWfMRAC3F5MgH589mXStm5HXf2rusQUNQUBWF5rbZ9t8BD3opjwVDHXejtVpD6wxczj7Eej6xgMXwv6bPDXNs",
  "key37": "ZtRByQJiMKBbN4EQ9jbCU5AQgzxJkna96qxHZoGvAqU7EFu4DEk4RzEoRma4dK19TnX9YghQKbSndUvqQRdBFnV",
  "key38": "wuHyh3nHyzQWmsQRFvUE93nY4K55L4s167JJot2XWBvVzfKnFDERsM4RTanNyCYS51jeeL8XK9fmc2prcfknhXz",
  "key39": "bHWtB8AG7u51wDno7M435mWdV9zzqoaBVKbmvxxLffCKczYw5z3LSpEwANo6hhiCWxwXnaqsThaQwh7CVGCiRcq",
  "key40": "5vcUs7RTpB2hpbZrPKzbDvdLVrYC1ZXgd5iqoVJHrt1aeArykS1gvfLK3g7DHYYAUJidwGPVdTfvGc1zneSd95GW",
  "key41": "2zTPPaUEEx5hByW5FiPC8pQ8giwbczf5BBYw1YhPYJ2BuXjFFLHkQjSPxP3ZDmwva8h7b3p73vHpQba5xroo9vN7",
  "key42": "4WZsizrAeWhvdoC5T5MyL4XGVULCq2vUjnQVosfKVuhzhP8rnxB6JiruPUN5jD5NaU5uDgERKFPgTmwaGHXDoQvJ",
  "key43": "5MgThH4AduHqnYUwA745WZqg3kE15UPMd8hNjkvzuTac9Bby13iKS3iQq3joiUP9szP1gtGidPF1ZsmXZiD27QCg"
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
