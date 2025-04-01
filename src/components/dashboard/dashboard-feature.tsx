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
    "LwJTAaAqZZryubq4TXSjVRbdgESxiFa8rqqeepYsA7rjHCUAuZZwzGyr79hmLxMQMhE1R6knt2GCUJHzNFcCAdn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wzBqJSFPo1Gw2tzVQQUhquDHhYbjJb3FgBrnqF7da3EAmdemDh7G232VnKvdaGo5XbzWT9iRLoUQKAL44gw6nwt",
  "key1": "4SevzqgkH2XcxW1f3m2TwUXxCy5ebFJ6p2gaksowKbHiMQXmRrARoPWFnG3SYBJA9q36uHUycBfTXUZGdTqJbngP",
  "key2": "2tMioKgpZp2jZSZk1Qeueq6XULtSy7ihcEJuygNc77Lr1D5ZdrkQpLEzPvot9X8i2Q96NPpbJPmBfzybZ8HNk77r",
  "key3": "62MMxcWRNeWXqznSToNGD6fLiW4XwmMk2qnbsziC6fg8Ycpc1kyFoMwPnkio3LssCNawZV7CKcGpGDXYoEfXZLD5",
  "key4": "5HHDD7WVt4M3cGmB2zw7nLcxTXoFfq7kiJSmaq9m1LS7RHmGqBC6f3usGWQEzgBCRWaftQtdmCNrPWzkmWqsfxCo",
  "key5": "3rVGfE8YEe1ebTMQaBugv7fjZq3mgH3bBfa3JKgGPgkSuEPcqY5BnVybkM38FbXXRvSDB7Jx5QyESPT6n99oivRb",
  "key6": "3AWh1agGAkf8hWvkLQmuzHLCM1b2nTk8wPfBPZSSCSttJCbDNQJDxoJxwCsxtPbjwfBNcGueVa75w1786NzKLboh",
  "key7": "2R9jZw6AsBnVrb5V8hDdEkjAxTBhYG1jixn3VWcH6TvM7dJomMHzxwAQ1Dii5M7mM3UFCCLk8TukczqujhejPqRn",
  "key8": "4radJpLkuNb5Adn72U5Fh3NELpj6RsAcgzWDX5MQ2uPqnxWLk1pMXpRpKDJJFJuS3cxY8v5ka24r7skQcGmoyjMM",
  "key9": "3nrGgA1wRvurKNtPTYVkgbSUijVQtQxPYz4R6cwnfnjvNS9KbZdxdaPRLuvgXLcgMw1S5td78fGhqsG2F8yY7zAi",
  "key10": "4S6TSeEKFB2kHHTRZFjUpC95W2TsSL2WN544RxVBxZH5gYbovsXBaqEbSCoxN29d9BTe7XK4NUMXFzY3kKvqit9A",
  "key11": "HCTHYD2VjV8hkz1SmxvAQSJsCgHU11AKmajdXRVyrMRp3PZMsbEy9cRf5Su8K5tycSGHJaNXkaFd1Hb3KbhXP7C",
  "key12": "2vca4pVk1Awq7o5T1hpMKLvZ23XSXDPnXAuJd2tpnN3Hm9nTiwkQhsxAqnkzJkfRqjNjzhd9nDzpP73xzkBLq9Wd",
  "key13": "43BfYMT1fTHBRTT3tRLZosaCQe3YYHegqBrJRqYygbxTK5GJJ7yDmRH8hD4Pn68xXWDnzQNgWFsF8fBRLYvvT79x",
  "key14": "UGKj1beWEBntxEVyunvo4bjwH13PKxutGQNf9rd2pibCAfLsKBa2iZkdJWfTTWE4uFmAPBkJVQA4Qvvwux8kDcg",
  "key15": "2oawCGuhHD32bjpLrepgeQ4tFnf2kMqfFFVF27dxh3nd5Kbr87hYo5Cq2vGeMEhWM1mfS4pyrUFXyMdwvD1xsQMJ",
  "key16": "2zPJ6LrYQ7pxhkWi2DYnH4U4yQd9Vs8nCsEmwJdjSeR4V7i1u4Zu9FVHE24EVeNFSer3ywim7iBDG8NK4f4citMn",
  "key17": "3aniaQEfsbGwxTrhkwKkCj16koeFBoAE4GHCPhHseFwhGMcTstBGA4dyycfwuKhhQPM56mb5EVpojBe6tFjiUbUK",
  "key18": "uzqqG5bi4ZWiLDMCy8SCHJtnzraJXAJzorWGr5j5crTPCxPjobAxugzEFmffxB7Mzy1Sr9tsB5Eh2iERgandzVw",
  "key19": "5TjKXvskMf8tPuEKJGztxYoMUoTjWLr8uyNiMjUU6qxvRj9PvcrBpHRJtuYXapsZgFVyuVTrRKKsYh6bh73hkT5w",
  "key20": "34ngrbd6BGQait1cpA89uDsNwNs5TqKHkKHJ99wWHbCRD3YUxLWBEQJ1TYdwTMSugnVsn71nHq2unAGoBoEbngx7",
  "key21": "4DjTXzj9YSFJ9WwfVMAPYxvjaBC9hiTHhFr19862CJzxejYEMvqJA5xH32MsKiCjTzFXGRynLubVMWDKvQeRrrjk",
  "key22": "47Sdk2szGx9KBdCruVggCzWSY7TciP3Fca5zgmTYBMbgHL3dbX5xrNghdx2aMUmiXDMCZEkf5MhVju1gSTYX464U",
  "key23": "2Cbg7N9W4orSfCEaYVqMACXRdQHEDQ4KvAc3QgzHHF5HgecMGGVQBouDSKeLcztqyBBbYwjn1L7NbtakmiHg9NAU",
  "key24": "4fpNUQczCsuvdTkxA1qMaQRsdbmuJV3pJdYcjvP4a67yBgU7MUgaT35G1ShTTTVmnn3XXFVdJq3gpekJnWeVXrM8",
  "key25": "4XtEyPAqqej4wJTB3pSAu39GcevhWKYBp4fPMvpqeXC2m7nEuSfeH8Dph3jEiM6XzTMQRCSvKjEjde4eingmSPVa",
  "key26": "49GkbhE5y2sSnWDrzbv7jKsm9QwV6R4nAdpSxK7B2sBumSDkP6wemEmthSvJRvvKTkma9w5uh5dK2x7NPSKddNYR",
  "key27": "N8wmieAuzxyJSv77K8fED9hQt4t1ePLV5wUo5TLJHnPiKCrUA2BoHTh5n4qXjp8bkeaS9dR9DDxszSV6UZ8ctT2",
  "key28": "EffsxKhZpLx7C1FRvaWQfAtnZfj73oTm6hMoUDENfkNHjSu6aVpmFy8Rax3Pdcm7Efxhmpw5yVAZpT7ZDFcDBrF",
  "key29": "5JbD9oCfNnz9s7aR3N595m3B62Umhtn6PsmioHUQQWrUA1XSD4R3RzH2xxxqHm3icQNd4uK39S5fnraianhRaibz",
  "key30": "3gQdAYBa8WnPPZzF8767VBxvHv5LfvEjkjpNxGhBamxacTCdpG8VCfNJDixmj69VD389AMEoMUQazmB6jsskPApR",
  "key31": "3YEK761pyNVPXvt1hdBerBsKa28DcVRxaeg4VazhafC2GoVgzfQfirpD6KtzX1kD7r3RKiUDuR25h45vGrtvSQwQ",
  "key32": "5mUrJ446dvgfmKq1Dbi923FnAsKTKT1ADs5wrizFExCwAbyX2RcLG65xgNtQDhpFLNHKmLsn2BC5wLL6rnCzKaMM",
  "key33": "2QJYAgNqS94ZEKc6H7DzmfxQCiN6BxMyFnRiteNC11fF165mbh3po3WYe1ej7Wc1rGUDvQELiUdXGYsTuMxHW5La",
  "key34": "39BkJJAjaLcWT5dW7JZBjdWZ6pj7mgHiLKE8a9v66t8p2TbpHW2z8qRfNn2nApF9sN9ZbTxnwFZXuEsnd8uwVKee",
  "key35": "5v5Q8XrghjaaWD1A19tRxhw1gWEhgkCgvq7Ypm4i7ajZwQX4bC829oDtSxWApJRjC3C4dXLpBUjmj2fsBraVTrHb",
  "key36": "2E67T8MWySquAi4AezFgBecxrWceEVZDirMrxEDoSS5mQFv8mMoDwkoT8qMjkeaWtWsMmLTReQmF2AFJnXHEkULP",
  "key37": "62WVgEZZxBpioVq4kJYo8HjhX9xjVW1G2cwp13qP6RzWrgjqWpzzH65qDBCEdEBTHNURNPSzmUbf2bQivZ47qtm5",
  "key38": "5nbArig7MPYcntua1fei4hC5zKSSaCQNCzrLAvBwMqDh6ZmE8yFymLYwShD5mdAMutYdSgGffnVxYVEZo5zrXstH",
  "key39": "5zJPVYVHqZQfvgrCXEFXCWjn1DnL9DxxSeUw1P7wN7tZAZaYKzttZ6e1Sy6B6WZN9TsxFjrJ9zqXRXXwcNZnaUHW",
  "key40": "2wxoFjf8bsqwANL27N4yyJQhiMWtUHCSVy55fdjS5Xe3T7vSvDZsxVgz4Cp9S5kqiqCmHqMNWoyMJhxBVBAw6qBS",
  "key41": "2LEv97fiXF5dGivEqo3MbwMtN9bftofreA3iarcBdKuYg8bM3FwVKMCS4Ksz8Aq9XUrXeisYTHMXMpjR6Ha1yCb2",
  "key42": "4cuVpnFZWhUrBnRb3jJsRkRcwbzrRdP8h8f5bN1JnddMTioSfcR5fnxX7VxCw7UBNMTfq32jCF5Y51r1qgtemZTR",
  "key43": "2VH28TbqnW7btvLCQet2rsqct1YTQNsPu3nrSo7WanUnhNY2iwQSDFfpD2Rmn2RRKmEt4tbaYHKewALFpKMjyipd",
  "key44": "5GP4UkFGuAte598zvazGM5cuxsJLJ7pjLHgCJ3Zub9hjD55J3xqcx5Ft7rkbP9LYur2ds9MJYNepf8EDravEw2br",
  "key45": "524xAKHfmzQ1Z8AuRpsyrX7PR3aUGtSmMdpGqSWh9VqnkAU36t6hf83aVEoHgUhFRbwPdcXxiP1uot7ibxEV7Xk1",
  "key46": "2sK2vnUVWVW3EMyzn1LJK49MQbJwuqg7RoEryQK32oJyrvta3vqm6xWpAQVEMLcwzMBbsd2GYdRWeYmykzfWR6Cw"
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
