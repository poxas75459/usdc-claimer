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
    "5TpiNQ7onKLWsLSb5q4YNepGG9SA6Z2oCwLNCzuLgDzFRLuc3zdTT9Fq6XqiMHKWUPL21hFh2T3D7enqQpVRWVS4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EJybebm16twcaXPLGPC3VNsmKDxfYn1dRTvnJDzfNNe7cHp7SgBqqq5rHKfJsdzDZ8cspoPvo8a4AbP73cEJgMq",
  "key1": "23nHjL2eJkSXDTDDA5raPEzZVogLtmZ549VX6pavUr4Hd7eCLKXiMVDEmyG7CME3t8yBMEiq8CsMUqfxTRNc1CT3",
  "key2": "NYhxDCFg78ED3D9zadLn83hWT5ZreFA7pYjMqsfS13wocH6Kzz8q2gZFJ1rnu3QmivN97eiVzUQt3kE1KPNqcGa",
  "key3": "2FzPXeKvqGNFZ2ySS4VprUoNrQsJnDyD4bGCeUAxNSnuueBFY3ZWuJYwqDHAdQbozfBK4DXF9WygjXGpnf8Krxm7",
  "key4": "4ndiNTzDvw3u3wLw12zULXpJPojK9wwLPbx8prnKEynSjjTtWzn6N2tNMMh42tNfcM8zmgtib66WTchsZmzGuYWP",
  "key5": "3eiMzZ7AAHZsjsRXvdR5Qrng8Nnv145Ycm3qQkZPqVBkRy5UJhErGycnmC1xfp2xuCjBRAs56TUgats1yM55ijAN",
  "key6": "3UNFBfYeBvz4Dt1WPifSxxkyLSwvjdoebWC1sdbA4eJ6vwnfXatZYngEPFiorwJX65oh17tjFZfyxLyXX2NY5QYE",
  "key7": "PGmE1UxEyFBUoe82NHztMR5Jv1dcdyePFGEwzGWZAS9bkPHj4oR7UQbZyd3eqvNZhC3UKzzeZz65uQJLs49eDSA",
  "key8": "2F2jFXPQDj9GHBXReswLdmmM5koGDnDTi3cQBo8ENzE2j5uwmkEMEHp48iPVuGVHPmKR384iikmxon4cNkQuVyUv",
  "key9": "3C1BSK5xsnjK5swpEG3k8ry5Jki1avHDaPtM2Rcc9YC5EJJGJbnyBMxrQCHvhmvjEtQkn4Xpw1UrtBMKUBuT7jUn",
  "key10": "32YK1NCiLgkbXfu6Ly4LEnsFZ2JNX9oxJr4veJcRxAmUPmHxf4LBuUiWdta8pmNvq6biLcX2fSHi6rFjhVf5myS3",
  "key11": "33cCm71rb3P7ejYoVR3M92cnSgFPzh1gpFAWSQjdoiwCvn7z14RFjKwBCMeyWZ6ta3Z3iXNNhdVbhAiQqeUqJwDW",
  "key12": "5zZuwnHADR5jBpbCiVpW3Ak6C931icktDs27bzb4qopxbKMqsY4qYgonpbo3xJWgkB2VaEArXYeS2uwxfDVjnV9f",
  "key13": "3GdG8y5wjQyF3gYPRcgH3Ez1Xc26C8VnJmYPmQfxkWNdqwvNFdGcn4bGV7Fm6GYMyjseuZBE6kJVVXjb8MWBn4xq",
  "key14": "2osn45BEeh2gbocTbGd85TuYSb2iBSBvoD2eevWu5ApSVHSpJF8gZyr9NQZmJg4oLKqDWQWExmnEUbiDySJCYBAn",
  "key15": "xtUQkE1ctQvY8S8yBCEMJcrdGnxRCY1AMHMk4KTYdGXjyyXmdxYeTYqgYRCfdMYcbK52nyzJJUtyAHoSuk5qcaJ",
  "key16": "4Yi7NbQdWoojAYG9AtyQzimeVANA4SsrvswWU14prx7EpKdB4dKiFxdUXfz3mLiWK7npAQ1WcUPEuyYeKtCGNBoq",
  "key17": "4NxmcLAiWpXjuPhgXZ8K2WcPBhfasTXWayJW6JS5mbmrivNSYBma8MKzPoKBT3Chjh8QxCTHD1fdLsbV1VctDTFH",
  "key18": "2FYnKM7ddSsqAMH44EKQJDqeSuMN9XyhQ825zdN5qoKWYRjUgAZa2vpMjnVqnXdtxvsqfNmsZANM8gzjQUdgnoR2",
  "key19": "2PLJbaP8aQA2PecQjWcyQXn4wLvzAJBvphjQ8TSL8dcpdpbUCuKgjg27uFJ2YEj7ycjgktCurzjMxcx64zPZkGoZ",
  "key20": "4L8g7rb9oidJiQDi8apNoUfDqDCjCUAeNG1WrrWU37cNqcS8j56HNERHaSFopo3fhucxCCAS6YjRQPoj7qg4ssKS",
  "key21": "3JBVt8UzhqHcbnZyzVHYjzQjEGKZZVm69eWho2yrJ896PtcvW3PA7pE5aviEoAwukPQNCZfwigaveruZT1XvouEK",
  "key22": "3BFc81QMG5u6f4pDrDGc77zhEM4iKvmrLwVn9oftd3BdTLxhYZ6s3FuEkU5tvjM5zfXocXFZZfaEF5bv5si5zDjD",
  "key23": "3LGdgH1cUdH3SdYVnLucVFEgafZMEaGaPop3qXfM1qebSbjr6ZXyDzACuZmjXTYJZ76jrPLJn85pW7GbM7a5pfX3",
  "key24": "2zXL5mwtWEryEmGj9RLh5ja8nTiVWtQRbpGxuWhA8VP7hjx9Tr1o14eUERMPYjrddV7d2tYYw1C9yotQcAmHAT1j",
  "key25": "mVZXfNJojWUTk1xcsYW1L8xoD9FtmTygprvDcRqaMFV6Qad4u8skVeGeKPAKNXifaZ8PkkqZhhXAHEXKzcYhrCR",
  "key26": "62hRb1SGsNXX8jN7jBzY6WPzJSddm3VoghghxZcgQssSzvB9ii3vrpmS5vG3bHrjeJ4siprMYV2M4XVxE1JonSy4",
  "key27": "3LEJuQcYn2FXpjaFFbaANZeBXq161SsVDvehhhHqf2knWExvyaQqLFCHr8ApqzvrBjNc35pTxbVTGQwENbDY8qii",
  "key28": "3P8heWGikkm3Apk6PqrfLB21BHkWMYHXMrRybLkmb18M3548yKVtLaYHDdAwCQy91MghJbKbPUciaKTzLmtzaNUW",
  "key29": "2YXSDxuEb2jKVkF7tcMRZLbAohH6V3ZQAfXKgNqJdHocp67G9saSkcMFBaSTwhSnmAaw4tWSShLdhmwNtq8pJzP2"
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
