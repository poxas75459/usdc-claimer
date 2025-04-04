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
    "qxopXfUVquTyzeJtnLVxpBmJF7D2Vv7vExBDEog7PqooK1yJQ3AZNRNmzXLZEgMQwfAjrdkiEyfVVvHCwJDqxUS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RnvjozgwedGyG4Qsw5Ar4kTaFf1Nk2WhJxThd1MRbQckTGMrrC7GU7NXTEyK3yraHnRgqZhALevrPb7PtZe8TZe",
  "key1": "292CTsrajsGJrEiAbmEx3zVJ62542gJUy48kBrMqamxv2XcqzeCQKKbKtzZ5dDJ5TCtv3XY1uBAMS7Uh5LSDC7hi",
  "key2": "UbsSQambHUiV96WeW4SkP81SYwCwj559tMK5Ujih1xW4i3E6PCKsy8SEHxpodvR5yHzW2n4a5wDNcanK1pLu8Bd",
  "key3": "2PAHbXUTcNg9R4gp2WRfC6yFcNTzMpqYe1ZYYUgFfMS1a9ZcYgZYkgW4cc6NQQ4qHfGZf96z2xXDws9iqE6LVKZ8",
  "key4": "4QYSxDxnbGiDX59AGHXjExK78DCcvMRgv43iXsFqdxRuKehk3At6K1shMdpaWw33B3KHA67U7oZvLsUedEqLcZ4v",
  "key5": "f4xZmm4XJSw3y7hCPmu6HjGuYrtccvbydLts4RAzftFBR1szXtDbzUN3kSj1FBegn9wxCtV4npopaVG6pJNfNGr",
  "key6": "4CaLRbgKreqPYxo3J8x1CUZLZCJLm2cQkwFVkuYFUuiKU3yHohrRuczNzVx22jxhG6PpPwH3587iNM9Do8reSiph",
  "key7": "3GcoHSRYscXJ6EGvG22s1DJNb6nqpQxFRAfWJnQFRLc6x4SfYnrboTThokZyenBdsW2913wHHgFvggy9Zck6JCJU",
  "key8": "4c8Nwan6bZarYqagCiT5cjqwsurCrZWNNszRgK763ES16nTzzs7nDFPzdpqFBRXiy7VG7S3Fpp2Mdry3XeUx8ANo",
  "key9": "4GrabyuRd8W6XmNruVb5JW3HmDnkiGyqoGGrQzfyGn4DxcSCXEY6CnHjoGnBXrhnK53grtTRCZobrMrvk98ohYJt",
  "key10": "22Pr4NwdREX5rEsfntp2SkQvixz7zh6Ti6LKa7mv3osL3gWa7qS2xHkaKNGGXGxh5t3a6163rjQwuc1R5iG8Hzf7",
  "key11": "2MTJcKcLD2c8um8zK4UNLLGoEdH4EACnnEzG3TVUYPU8J5fUewW8VD74YdxXFouZCyLS9sdjGh5YwusmeLgKPpbV",
  "key12": "396Q8XDw5sQSZMGChv8RMLBiHEM9egr8DauWp5NyNWWeU55AQ6Aq7jKhV7GfduoRazSzaop9itA3q5vnMGY8z2SS",
  "key13": "2GrqTDzttgm25utS36vFKx1s7RUDZ9dNNyLNNhA2V6dXih9K6PSwd2TxsaaAtkmHCt6gWk9VxjUk9f7Y9MD4qFss",
  "key14": "66JwHNCN26xXVHtrpkG2kUiucs7nri7Fc8zpk3xzDPA45FJN7r5D37s93oeQg7TbiX916XNtTTZoKAKfEQZasenJ",
  "key15": "24WJ5xmFdzTjpnUNiXKjtNdP2LSRXXC8gAmQgeJj2TsyLyRjAGjVmzJBghLdB3kTJbA9F38LMTnYGJ5Wu1dWbbwc",
  "key16": "4j8VBV8qA4U1kwwy2d6NjBKyP9AKbFcw2ACnqwMzpxSWAkPPask8QSgNxQAVp97DUwzxAqAK5v8o5MiStXdbieJb",
  "key17": "3H6T5UwmbTsik43q8VxZYQRwJhRhD5aynVDztzofa1cpnpfaCmBgEUfXN9qQ7KBb9Tpmq2bx1EGCG7GsX8gy9J1S",
  "key18": "3fVGmefuaPRaEcxHxQfYRdXC1GBGmveAAg2zUQRAtYGDgcaUvATpSKECYdrJXZcFHaMCHQqmHDUaEeEJeNajdhfY",
  "key19": "2MeoPz3Re9f2FnLqWXtSFRTjRznUf2ymui6BG9dyebSBiBs9YeGUkqyo6eY6aFtH59XdSMChDFVkxGnG5vDUDpqh",
  "key20": "54E49u2N5tsPb2CTmGWq1C7TkyvCif3KpwM9HWv8436Y4dWbK1EcBkkRSZtHuAVxHHuc6aJfJh2VZyjspxCcPR2u",
  "key21": "2sq6ZyuWppGTqcRpFsxJnEgTFpr6z7J3TpqZLH3UaNoKpSJXu3qtQZv9p5iEP9NjeBnjm5UDDTGXtEHyQB1ycegj",
  "key22": "oPHd7oGxbXKHKMSihfeX66bjsouJcM7jygx5inBLAVQXxFR6riLVxvWZ67pt5fcK43mmdN2B2njJVV1EqFihaZz",
  "key23": "3TsdTnaPdFQPVSeDCGKDA1F76M5ragRD4cNJMHaKKUWd3J41RnFTqVSkfzr4oY12oVf3dc1RuCAgmcL8yGqN665q",
  "key24": "2aLUPUsrNkZQVvbw6KAhGvDi8TNrhH2Q7zKgT4oB5WeUcqXuhqapRS9XtJtULh3C1EcRvRCzyC5uPokYB4HWF7Qb",
  "key25": "3XecT9PzXFw54aiFXVDLo51HiQ3GoT1UDmB6EKtbLYNkjA7ZjyXFZfWjPQM4Q2EpUDmungxFCTUiMTv5KucM6ojj",
  "key26": "3jKHLcDjnTb9gCB5ps26WcNTHwf7aPxkWbLxrLocqDL1RuVyqCNWmTTWyFJYZpKkMHrN51iKtwVDCU17JRXyvfKZ",
  "key27": "2WBUatNUkYJwEFVRGXswu5JGBazgk398NP4k72kUejvr4btw2xMQPpnZBUcRPYMf2MLG1QYe7JEAE8PwcJGSfa9z",
  "key28": "R4pCEnw8RmGdMTsW7pgq6AT4Kd4STda4deh1hEHnRi7LooyCEFsZ54wmisjVxHEAARxFvDoes2ULuDyMJ7adkBK",
  "key29": "4bABQVyFS3qzFUshW4d7XhngLYCpUp2YSnz2GJUeRArEWsJVQfSxmP2gKbxooNi8UNbdc2K5bZ3EPbDPRozrSEDT",
  "key30": "54NRVMq9Aw7ahgFH1f6gd5nbLNhPp7zs4F8N49epX2hwaiV9UVE8pa9uzNAVhoG6L8YRGw3xoqKxWCDev1AdREXL",
  "key31": "3XwkL49rXfhZm3dwQZJd66YAEPnaUuNGUWdp9tDbwt4dDf4Z1Fwvkkx6NNZ4ENpZxpxRVTAEJk3BAg5SENgut5bx",
  "key32": "25gEJapURp8xQ3DC2s2QXmsQPGWTcTucKC9XUHdmZkHcdeSHq7NQ12YGQPLSjXEC3PVV6DR3c6oEUaNQnqEL1fW6",
  "key33": "5HLYjNKCckQMg5eEomxztoitsWNG1getXKHNiiEnzmoD5qcsFC2sJbE75dfvEjezNxtjFzGzZsBU4hkA51JuXhfE",
  "key34": "4WwBtjBXqS9k1gHxUjE43J119KbCV7EEjgfyic64vLKAVgS7EqnnYKNLqyKypAEQ25vLfiVDmAaBy8mRAHRgFB7q",
  "key35": "3Pxej1jr4jSEmmDefAQWKSp63KaY3EpngQPrqodY8sk37ZuHi1wGWAi2cc2uQ5keV1WVwWDq8A2RY1qfA8XskZzN",
  "key36": "qWT8tqMFZj42NdvbgmqikBQdn6ME7F2BrgaPUCxpcwxzMYRJYhGyq11q62ZM6ULtifuf27XJdxPt6ur2UeBvP3m",
  "key37": "MBrTd761sfqvv9CygD7xEWs3eYYBmVZPkYNKhzcCAn9SdzxBKAB8jwazk2cssqSYZ5nM8nRJsqqJscJ8E5uFWLN",
  "key38": "3pYJ3d277Q9EWi2iVpicQPBFfwXXLduMWzXG8jFSHtS1UiNsEqBN7GR7cB9twvAR6iRFmthwXm8koJ2cQNvWHzpp",
  "key39": "58XsggykLQzaqCWFgDxvyb5KvNRSoKb7kGidRUVjfc9igZKNVNkLPkR8VZmnWjBu5sk4K8i2NprdzKwGT4XRZ3bc",
  "key40": "5GZvV3czcotpaM96ckawJg51YUsBvNmYwFgWQonpDf5duMsE9qmxYyXZZmxnHqiMKPpPWvw5bD6D1JFphj9m8jx1"
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
