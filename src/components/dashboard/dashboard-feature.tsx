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
    "4PixSQdaMtqB1aDsjUrpdE13qNh9ssCunhfEusRnujpYYCNpLGzawm4WdNeqUbMNUWRhbE8ZGjz8kdiWMKFnaxs7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dJdDpJJas6EKp9QMNjLYMuWiV2ix3Qj2ppeu2RGNgcHmd8YyZUAcuUzbEc2hNNWj8F1UBieVdid9fuM847aqKbs",
  "key1": "2eFJ9e66oJcYoLwABiMQmLE4FHTH8gWZ781sLarTGVG9n12B5roXduTi7eHaczDPMrXz89woVpVQk6r4uzhB1PxP",
  "key2": "3SGmFRX7xXHRBEgmWZao6SpdUTLf2qFXvbBnYc7Qzy3EmJH6WKTHhSXETYRWg9WAk2SXw9eGggcfSpRKrk4Rv5mm",
  "key3": "5HZUSi7nzFF8Hzby8a7v48fy9kbjGptrF9FfDaYYDoaUD4AdAXaBSqdZym5U34nt7ksRN7G7ue152FHeFG5YGikK",
  "key4": "3tj4RCeMbnc7NhfacVU2vqvPcTZzUZrFXLiujDdRkeeBi2BQbkNc9j2nrgatqR3NPsSFvSBXBw6MiijxLk1r8seu",
  "key5": "5NK9D4LjbbdmfsS7NEm1R8ZVafvfZ6CJX6CUuaXfKmHc7Fhv8jKy38Usuj8xTLLCiNFKozUCZKDAPkpJ9V2FFGKj",
  "key6": "5uTvtWLjicES7eRVQxPShm86ncBAAMGWZvXZ1mdYt7h6iZr3eQMaBmr526CXzEU8zTXQcAc8T5Lar8nyZrok77Zj",
  "key7": "3RWo2r7WutCd7637HyGMu6nu9cQH3tQs95ks37r2yX4CzMUB3zUhqQzGTEa3fhSXdPQE3B4jrPScz4nGGX1LpzAt",
  "key8": "3ZxBp8R2jxp3pmbnB5hWYzaMdwTphcb9fLet2G4xtVpht1sCpwARYLu6bD5vwPCAx2X9UsYibSWgUDrVoRX6SCbJ",
  "key9": "hwtUZZJRToTqwLCzNLco1irBsPGiXkzhw9Jxb6zXjPQZd8zYDvi9AW3AB8J7s656eXpZ9hQ8MraDFsU5waNUEHc",
  "key10": "44g1ka93kmBbJi26feCqX126RKT6t95RvTrgDT6SNnJ7f4Bwfo9ufwbytM8PeN6Lhiojt3SBm9w6qVERnZNLCh4v",
  "key11": "4JRzHn6VpqG7axxamRsCUwtcXTtRFcZR1h44hqsEQtYCwJkG3PmSHuEn9sfSkZKGtfC1n59uzTpuujPxmwwSMPFD",
  "key12": "38V4Q6gYcmSBnTBKUMLc114AwP7cWmnR8Y8RARwg4yDY5aUPbzHUj1uhpELyz5Vg9pUvYnheBz46xB8Kq3kVNzPN",
  "key13": "3Dous14qoZEPZGnFSrUmkfwbXX4vnDPV9Y24hymW1w4eDeQ44pZHvmeC86mEd3gTsu7SVxf7EdmcvXtJzqvm6QE2",
  "key14": "3qrVfs6iWEsGe1kazGRRaLQQW4aFkpmNX92hu7DQ1AuDznY5b6ecFovVPw82cwaJZW9Wka6WFYBNMJAPtQNtMNfG",
  "key15": "wH2dipPrDj8PKtXsvsGiDzom4rd1eA41jmVts7mJUJrPvSC7FDcu4aD37yYZ16ZjU3oB2nJhtsu6yC9ojmFSGtN",
  "key16": "2G5Hz6UsK1jB8ZUSdsenJqvGumAADgNCwvnKcbeM9yTC7nnydFg9VRNg3RpkvrkGE1JE9fcnrZKPKuFryDBbDQqz",
  "key17": "4ycGZR6QZSf1hWGu3CybCU3MfTDwbf23MFi8vu4QXoC4hknUa8P8rsZGGHUfL83akFioKf6cdqvMvEN16d2YCdb7",
  "key18": "3Bn4VCPAnx4RsPn5krAVVGfH5Reb96NrxuHgzqNDiBrcrYxKdsHiJGKvzxjVbnmFGywye8GCNjisKH511LyQov4H",
  "key19": "3EWFrx68bCbwwxyzT8EHNiQ8d9c224FB9tAdeoKBXGPmnVs1o5M8jnV9KZhUC2K7zs6JShBEPQqnbDDCasjNS3vq",
  "key20": "5J7AhgD6XeUm3Azs4K8ocAK1PwbWSbBWrmyoZKHy8Czp97JJaohVMvEKJutzSaQ1VFsLWhLQLpQQekwcdo3Y8vBV",
  "key21": "Mqy9y7VE2s3Fh7nzx2rvBS5ThEdFoFqMjrHxGBTYpgVDBRuum3iew3eqzib8f2oVk48Rju95XUCVooVXSZdSeso",
  "key22": "3pKPudeS4T3bJ49imULtTp92bQiaNKAUNjAeKgSDRXEPMHFKCywBSmjJUZnUgwyz7XuyYGEfkNNqGbZ36qHmGDq4",
  "key23": "4Qv26ePJj3cx6rB3V459LgMXro4gpadLALgwHdUFmY8xLwk9vrYaXypWHuZR6SWvyCK5inQHXP4y1XrRpRrLyy4X",
  "key24": "q1AttqxWovfKzxWYYwRpj9uf4V1h9C3hfszR3EhsCs475nu2weeoveq1o1QX68fAyXGLyHW43Wp4aR55nnxX3NN",
  "key25": "gTU7B9GoHmSjUdsFKnc1gqjJ3XfePqkf337kMQrmd8wVyJ4W4tVHHzcg4r21dSD5yVfBKUzCQTQV5N2hswRqPBG",
  "key26": "2knkenVTmWxBDdofb1FekhSr56xxTpRJ9aQRXfsEyEbfGNCJHXzTpmHpnunM6yYgTnK1ZtxUQZKAMhwuasbsYo89",
  "key27": "4jXN7Eng5KZWxFRDCwCr4njFNrVZ7chs9hkxZURF7vgzvmB3UZWfvy9UEgusnznGUW1weZR3Cpmj9V3bKBqHfn4G",
  "key28": "2HFX22NiHJucy2Mxp3nuLedufWxRna7jSoCZXENPxDQANsssHyhzMg1rY9thR3cT7eReG2cw6yQ13uwXUK7eD9yb",
  "key29": "yhsVEK43QWBaTAcSdGDdwXMBh5mr3cqBfJSpjN2BXXij5BSQrKu5voKq8qLUbp5oo4h2ThBKjRZ4t6K6gjn3KpC",
  "key30": "3xo1iZ8PGTbNwz5AdCYWHcZDnXyiAFKxMFGUMe9RXthPh3TqJLhEbzbzE5FkvySzrznerCHAEPw4ZWnqG9MiUBk4",
  "key31": "2n81LFM3yeQpJX18hkDk1agYZoRZD24FNk6QWGTUPXMmqmfVmSYukWXxrpS7nsp7B1VQWqLJeHBZ6vhscTxSyddq",
  "key32": "uWjMGnX916ab4d8sXLaYGVfZEU4AQ7z2qDe1ggpfHww8Rtm81e4EBojpDAzVKCpqRWzyNJ438RNe89YaMTL9np6",
  "key33": "28LsGE16zEKc5VEjjSaxe9u8XAAjYy5Ydi7DW3S3vg9qeoKnfrEsSAKgyty4ytdtBSSR6KrE98poKyNoP7UXDaPZ",
  "key34": "4MG158z5nJNTG8t3enDD37HHWWBDHcDCdppiDjKptsgXCfMTGUsPYQdtcWpDR9oQ8CV6L1JKKh5Hi1a3AFmvpZSE",
  "key35": "4g7K8XwQQAFVgkJK5VwkPAS9W3seR7ghGnnzoB2Cwybt7CbsbZhmzceErRh96XSmKGVZtgSU29TG7fJSYPsA4wjM",
  "key36": "4BRHLTJWieRyaitBm67xoz9ZL5pakZ6FfuG5e1yFzmeTn1CDnY1GbZHvrPS4KD9fLt6TK2hC9BUSMGzwiq7KLpqu",
  "key37": "5YPpshw484CL3yGj9ZYenyDwaHyuStvV7ERvATvXNdtsL62Eo72or1vNj1Un1c1tSBCBh5YdSgaV4uYi8vY35zbu",
  "key38": "3CHxFRE91YHUcQfdUfpML1Z6fKmMS2eQwAWpxtRdhVyBePvEASx58CwCNsG24yqTgEXJyGU18BX9wbjh6DhAX2Xc",
  "key39": "5ea7mNk6AHrWoJkVKh5UHHy1Zdomhzz6cqmYf8Q4mebEyUMSQBBQYPbVGjmMrSqtq5bvFf1NZA6nmKvx5zbVzCbg",
  "key40": "vpR5QzPv4e7QJgcz24RQwfJWS22USPFphHichcdWwTZSHNjEzbPorfpHZyzQBYrUTj1jS8GcCYaq8KM91EN57vB",
  "key41": "3SM8fyG8ggUHFqETscGjsnFNCQ6CyCmVJLnzkYh2MFiM8Rv2k6Q2xi61zHSoWkAjzpL2KXmvzweMTJQyQKzk4yAf"
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
