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
    "4cUFw7VYnK7M1cPfsBn9hYqbFeGvK5EUk9rwsiiVMGidqcAnwpcTmgRmiFH9LrTGq7TnHVdj76v6L89VFbH5xv3V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kUNdzu4mBXm6ZNjjgsmKhxzk237XJVk53yrra2tVzJQMdki9TSX3KP3CLyuh8EBMTGLJKQnP3vS7wj54dpyHgcs",
  "key1": "62PFKuP4mRdpDtuiWj3jjY8QpwFbBp8uVWnh4emMbHQZtDgSPA11sDPPapzeY3NxGkJZNzeoBq2yJLjQNv7fa9a4",
  "key2": "3KiRcWRTpds1yJ64k8Nj67PdjbZ9pCh28PmdtfsFqb4zHagRTerb2y9PP3uoyG3sgudcWcBmrjfDLq9tmvdxCJjj",
  "key3": "66RtZdg92BguSa77Z5Px4KqLhC2XC6gmnVNw284Z25DUrtmyZtFGBEU9co518A4k6VtBMsoA9oSsiQTMmqGigwcW",
  "key4": "LXKvhF7xULgCTrDaegjSGPDFANKQSt5ZysnnagkY3DcP1ngFAuVsEUxgjW9tzveFWZQQcEh7qqdL2DSYWmR7hBt",
  "key5": "2eeF4WZGosmqqE8VtiivjhWnpftJDRwFxRTPtgaiRadz4SiXudnfwpKagi7jjsXkQ8CyZmaCT72eMyz2wD4HvRp9",
  "key6": "4GMHatBSQWLwhAm5hXhNijyzdLP7M34LoV2tcSajVm3eEX3nBwKs6P5rUamwL2cEkiG84hT22jZ1FM5K1HFqFFef",
  "key7": "gCzRi1d9nh1uxRf78WGaSPoJ5U9nrApvsBsuq6hHQ5Di29F26Qn5YufF49cAzQ99CkYCgjiKUxL3cjdN1ageftb",
  "key8": "5yvWESusPRukghLSzSBPXxGk2YvziN9fipFNY5ygycWM2JczcP5kQUehrwmpSPR3KiLU4Vwcp2qw75ooJBTpWxwW",
  "key9": "i7ST9nhEQbT5r35318MpnJgxNLGL6zHuWdTXvXtcPhhT2nq7cGvpDjNMoZSyEqehcmxToBHnBrNKUZTCgQo2uVd",
  "key10": "4Jsc54q7txaURmraxbbD2p9w5ekM1axeLLYUHd6fh2KY7bkkBEE3uRgkvRD6fPKJ7Ka7rhuWG5zKkQHKQhPtgfxh",
  "key11": "6412Jk25XPTpYoeRCJUivXTP6Fo4uvDZpBEAUg6H5NYU1e1ezYyKtXrPo4KMcKn625NqgGHCUe7rUKJK3n1tsDmR",
  "key12": "gFpG2Rk6Ue9RzmbVBJXiDUfEqZE9DRnSjiDV4pLf4u1GBHLQgojcN68MwxgBuGF3R6gyooDQCeE2UYCqKgURfpf",
  "key13": "3wZAWKiS6vw3nF5c89HzGqVosvA8EoeT5wbz22kdiQSfUoYaBihdYBCCbJJYRLsQ2G8ENgkXUCnqjt2yBwEBvhF5",
  "key14": "BFpCWo9iC3LhLj3xoMpenCSbmrBKbuAvtAddyf75gnpk4WZKSj9kNnnQuxtFgdrxesEsQyA4EWw43xvRd15k6Qd",
  "key15": "5yGQQUn94Njwsxshv5wM99xifQnDB1onh6j7uW22yCcf8hHpSJ7BkE2mNrJZKB2S6SRh723LEJYAvbq3AY1fHAxu",
  "key16": "NVAUKMKKQNBhQDYf1MzqLYfFoRf283dLUEDNcZaXrFxqzhFYwvaPoMKN13DzBtzGZLyhi3gcC5dEUqUYPS5y42u",
  "key17": "5N6smjEtrWKQXN7mwQ1oraRS9LLWky4RoGMsfuXGERbFM7MWsJske5PCgtWwhH7t2z7ZC72gPMow3n2bWUdf3fzD",
  "key18": "i6c2j4EpEo2nMKXU7buSS32fDb5bttWFC6qMD3D1bqQuEnxxkiYkWFuZyBENhiuZp2T5NpKcuAQV6bKoi84Le9p",
  "key19": "4byDPW1upjU4uKutancTnZzG7b6yZyK4me56wLgSUzibJbK2TVKgMNrXWtxwgSmznq6Hx6YNF48kUq8WWdmLcmQL",
  "key20": "39peK4rW8uC2nE6eYGfwdcGM4GHupaASmhT6Zy8ZGrfW8DobxEbKamJ3kjtewLMrXB8i1JxBMEGGNZSL6ok587xY",
  "key21": "44JVdtsJ926HDGTunc8BySV2vPJ6x7CzABTF1qyUshA7JDGDjqsW8j4LNBos4sZ6EZpTJcWKe6JjAdkQeBbQ88d6",
  "key22": "3rRQMmCZTVVb7NJYDJNBG9Pip7sNnjici7LXpxo7Hdxz8E8R87vxhn5ikaGbTx6qXRduHFBvWTmVaaoSrQfeKJd",
  "key23": "5etQsR8otqd68fKT9uodazjnzr3aCBjsSYoWMVftJazGZnYNxLNYQoY8ksN5ir9Hm2rWvVm26Rd59C9ZFv5PsKNg",
  "key24": "sKvKE7fZ3YVe3vjrPv2oKFEaEzNMnU9Shb2655VscMv4bw3s6EBJBQPZ2hggznbUf8P734tobwHy1rcZS64quG7",
  "key25": "3kJ6ictwZD39Y47FVYQyi9Wk5VNDDTaPYY3ns3ptM9m1jocCgXSywdQUwmx4KUQD1jqSn7beAZjuk6o8GqACnj4r",
  "key26": "2KbQKYFZpLEG62BcXK8xrdBKU4VnJoT3SEes5kT9qS2xP35SrrQTp113DsLKbNBpMiitrQ1xXsyjLZEQ16N9dYco",
  "key27": "3QQZALG9Hf9g9qC9xPvUL8S8BeeyDPPeCWhskdE44JJoBmYAA7eUexZr2EuSKenTb85khDqWCqUKTvjp8kAXHMSG",
  "key28": "2TMuJ5iuxGv3bhfH4gh1R7UHQ5GQV7a8CaBAXiw9j1VRLVjiGEa6dUsp2A6Nc5HGboRZP2EkGn3hEw9T88ynyY25",
  "key29": "4ZNzWpdburiTHEhYTNZtrTinRTuNsGksj6TVBLNcDNC2hqRnQr513dxU49NLPQxtErGM1rzRtoAqjVMjENDqwqER",
  "key30": "2XiSJ4vWX1r2SyU35TgdJ6i5Htf6qsjU2U4GhbxPAtjGm91SKuJBavsu6KMAPMMQyQqSyzefYZvgMdRgeXN3pvLH",
  "key31": "44VDJwDgDxGxexxzJ9mwswBGNUmRRopdTiovFWBXLw7yF3gLvPbSimbfoBV1te61nDT3Paaw8ko5Cpt1YBC3fWmH",
  "key32": "4A1VvXn5VGn2d55W64yJXs7kpi5UzTVToJL84mPtzLPLk4fGHHHhWHBQfVxQWaMioAXTU2frvDMWUCzBBBpzork3",
  "key33": "32VaUrkj57WSsZTa1YTqJkHUw27jACDX1qd3JgweX26K1giaLD7Ys8Di8kWNetNGj72HDEqKRrR4XvMKtqo8XbrC",
  "key34": "382ZtGbPkFp7RLgJcjA4JJj6o6JwUM6JhfwYwYHycFfnpU6n5LJqnwMsRGhfMvaqL4zDPTMUqfxdoFVZyN3FycX",
  "key35": "4SUoYfcjesoWKfZaXBaSGcgriqiP4TMEwp5Cd6Zic9jUmEbDwKW6NBrjUhPjuNW9MSkMdRF5wFUJHMj7EdPBihb2",
  "key36": "3zbAD8Sv2oXCD7ytHmxxe3DCGSZV2b2zLLwQmurU8wEeeyqAmeenYd5ukK43qcUqFiE1Y4pqEtjJSwfaAwkVpwEd",
  "key37": "4q5AR3rsiLreTrZF1fzmJBayV9vPNsDSXph1FEza3ssbqXG3jLdu1ymgHK6pWoMg5z3oonJd5PS5LUV4v9iw5aEs"
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
