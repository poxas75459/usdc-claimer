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
    "Z1VYs4m5TTDHMfbHNqczCtGx1sKS4nF5qz9yDm3rzgS6D4vw8r5bueNnWH9iq8CNGYn5SwrbEa5KS1DPwXSk8i4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LZNNnHDsAnP19QuzBoFVrX8eaM22Ry4gfQA27rdFu21iHKimZpg11YpXNjPFB85iMxSLS9tusEey2DjdchkK88V",
  "key1": "4ntKU6b9MA7daTCrrpTqvhQ96Jq81mZqfjvuqL36moHKij79vbYk1xG8dM9sHVXMvXfyE6pyY8s7wckgbzvtNs5e",
  "key2": "4iWz7373iRe8ixtc9pevGqAfRK7odaJ2f3ZrWDvbucFmMBdakJyQxNg85xMbGfYmhkJQTVrTQe7rr3aScUzn7MSq",
  "key3": "nXFSQu4bQsFXQeT69fURjjRPwhXYjZbcpzbNwoWqSrw93vX9XsiqG5mSVb3oZgdE876msxP4dK9euuCKLhV62RR",
  "key4": "32VRjRG3V6U7EmApf7KBSkinQCubKVt1UMH9k4ofB31nBt91e1UCmAdmpMAwA9AQFiZDVztKVWCkzbisfMkH9nek",
  "key5": "u5RMtjoKYKvw33yqRsqvRW73NttTStMo3rfSozbknoFZ61mztYwcQM6Lhs5ZvVgAYFepbsB9qCJtiwAE16NhvaX",
  "key6": "3Ba92zqQ7Mz4y6W4Ge2HFmgWK7Kge2EPkw2CknyyVdoz3gc1QZhKPZ29UG71ew15XkcUJkbZ9vYUN3hZooMg9f5h",
  "key7": "2JaqBPHr2eL1VdHPH9WeraeVUsA3C3RXKD22QWqDrsMwqzkyTvezNbWo6Ed7thupSDgP4eVPDKxTiFHeH2tVeG7D",
  "key8": "PyBwh2kAUmKMkuzEMY2P2XrKzqwL5NYfcwhqCutAKEVHajUmomfvbE6pQbmAWbxcV2bcQjNuY39eXArDDYojAMZ",
  "key9": "4o6hWxDN74Gm2vwzYzfgiAaDXxXretaoz6QF6NP21f3tgJ4uQTyQfwxgYvwutADELcDRdvrif6HKT55Z8BKujLUw",
  "key10": "4P5czxw9EHEgkNkEECkM6Hd4VHZ2S7LtKAQLabeLxKkZ63YmyDPEbB3iAXaMiraEY869SK3PWPtGGd6U3ZkauEXj",
  "key11": "2S3taVpFeM39iPstjmhsqzoyNpzQoKz5TQq1Jf2pVpTbV8ERKUr1n4kDFcFJgczPkEcvZUJgaV2UyYpZb4dWdv6h",
  "key12": "3bz62228FoM3HZr3K9uAN6ssqmAM6hdXrNpjcRDZQSqgSAZHWN7uZKb1B4GBgESCT5EK5c5ti13f29oimurtY5W3",
  "key13": "2UmexaLxjkPF2ALaFX8YBjXmyGy1RqM1MLyaSyFd8N58Vh1TycNEmu9U5dWYuRvCkGD5TKTsjrBWcQfQCiQzUStV",
  "key14": "547WNQ2aL1eqtkKnoXwoy1x8FMfeVMJtCRW2ptHPpaqTZ9xxB79qUDNNmEuCeKe7brmmLA3AJJ8Zr7K2zpLiQfwW",
  "key15": "4A7Rhd5YVNL96YS1NmKq1BKwbKutotyuPegfNcADfinfJSh219D67oEAZWqUqTyPseJXfsRVadkU6aLNBtZAA5ni",
  "key16": "38w5hmMDxDJsUwiVSqN3nqM3cBEerYoFFuHS6VSmtd1Qda9R8sQpNY7sq5Kg3DPTHpZvMLob2ikzMaXLbLY7HJbq",
  "key17": "4DMxW89C26PQMdBsyV2Z6JtAGA27L9nvc6UkMpyPWfn5ALUtQuqKNanRJTG5Yiaq2dWj2BvxMfy5Nx8eH9UbpfWS",
  "key18": "5strrt92TpyaR6BuXV47jkBCmQSYsXyVsDhU4tRaqAX7zymq2KcYsZ5zGyEiTkHszNxAJ7EwYkyRLn8A68c7zo71",
  "key19": "5Md5pcY1NWhhMjiLaqfg229p6toJPBzhJwEjZaZtDnbqU8Ts561pJ95Snwde99LGZboqEB6g2Bax6DYLVf1qCvxg",
  "key20": "fAzS3aWD5GBdu1Px81etmqNXVrtm2FUkF91256TdnuMWwJu2ckzPgChN9GEHXuohxgLmfT3aB3948HJ8pGeFqgm",
  "key21": "2mnGg5keUZ2NafE3teM6ztpuykFndSTMvhe51iCkMjbU3oBdxpJtAGMm8D7XWPU4h1SwsabwUe9cP4yTciJjiRwF",
  "key22": "3i9cKfa5AukqkjRUMdZgjpTi7YVT582u6tLmfyVrWXxjroh9Sa3cJ4wgoLBqngVBmBew2ogGwDfczUcc4KRkVtLq",
  "key23": "u436rhYK87ancSHYkdf1wGvDM587V3oJ8FveKb4WS6LXymcbXUobnkqb6mWDkTk5xBu8uC2xFzYovUYXbS6k617",
  "key24": "4DbJ58tJWr8fsMxpkDq7Fq2aVCDvWvnv54GJgFxCwFVRTLCjBfNecn895VQcA4KbY5kQ1jAbbMQWFtv1YTVJNXY5",
  "key25": "4zjJpaxrRFBw3dXF9UJro8SSCfj3qfzRfWUyjAAipeFuDazs3m4JEbJNhYRxPg2qpzSYcHJzGspz5DdNjkPmYisb",
  "key26": "4gpvcDpQxWrRRqCqcWRFYJrZjFchpeCxxjJoXYDQZu4Kyq7Hx63e3ZdN8yiFn2cwkydXybsALouCYYEBuHrYya5",
  "key27": "hvXYBAkE8x3bTHN3uvRWFFhVenPSHdhs1w41ALtwW1ckkyZhEffjKdZyZMWxAKpoQTLLdvdgu4QroLMHk57Ks9Y",
  "key28": "3PfFWZLWVoRLcjhRBtXVkMLiDy6hoTQ7SjuCiCeFycKoNaYus2gVJYwNpnLeyhVa6t4R2Mhn4WX1Uyh37WKf3DbD",
  "key29": "2Zdgvs1f3xBctmaRNXNaS6jm1NYqkoLbmo7eb4Lv5LctEVBmTtQWxDARPz8nhpQZGBusfPGBkNAB1XZyh9L9x19D",
  "key30": "53ZSc3ZcJC54weP3U6siFA1wRSvgnKXwuNRfE9W4B8a9XNRSWcKrz9iR42sQm1Qcxjooy7veBLPtgQmrTfcFFaNw",
  "key31": "3HUZkgbeErGMXZu11yavwEPMKRquSPzNNXsuPEB3bkauJ59R9rEFoaVgWq7osst9cQ8M74GzxYxu64Y3F5ZDStnT",
  "key32": "45gTzEdcdZq6SrzHZ2K3R9qhxG1ks4GmoTexd5LdbgQbv3Vws4rMZPwvB4v2QD9734NquN6JacFT52LMU1p99f8e",
  "key33": "25o89MCo9FsxpFYr5Zfjpr4EKL8w7KJGBLspZv1A5jeKngHjuWNS5Zn2pXW7koNdUo56RqjC1M52CUUg5qJvLhtV",
  "key34": "3UhchKbkFEDiiA7MNfJoK4SSLyGVKf6nDRGTKmJyTVXjnifTfZScnrAW82NXpg5ntmczrK4pgxWRWfzE2oxNKE1Q",
  "key35": "421M9CwSxiLgWKSwxXREsYQ9spwkQV3UsxUjAYn6ULAKK5uphJeisp6G8CS5LKA5WJ5m6hCFrcM77NvsmNkjs2Lc",
  "key36": "37dEYAen3jYopKQogayJBoG7tcfH13M9zX1jpLKG2bgec96gkMuDFhbWUUdEtaU1BGkoxjUZ9ozT4WY2YazNuQk1",
  "key37": "3DY4hw6ACbAcviGCvKu5D62sVNRN76rieKK4PiLaj8GTMuNv6jDJLfmctzBsqb3X37ZdaevxiQn5LF7woJdNbQs4",
  "key38": "LvNeaCuPAFk8pBYTT66vPBHNzUrr5TA5NzqTpdwsFWL9RP2RbZCVMjDP2riJxNNLvS45m2QLhsFXapsdeZTPnwe"
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
