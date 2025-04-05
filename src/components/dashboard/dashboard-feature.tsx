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
    "5tcWHggomKCKWMmf4MZBiSB6WpoEfGQx1BGpAxGbW7BDpDau64BATQ1V48CWfDyvS39mT6fwHCZTJQ7WFJa3R6my"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EHKWWehhSwchkmb7ECH4jvp8wQYzC1qGo7uokFUn3ndGe5Zr4iyETVMLvuuxovS1PSgUgsYd4h82izhhFytBYwr",
  "key1": "2Yay8r8hJ6CJqkSAxKjJ92zSLMdve35roRduGMyvVy5Kg9oWQTsHYWAaPzRjYHruukhtQj1B7qpHM56mKdRHNdud",
  "key2": "5EdfNVMcvhKL8Ucm7rdDEj1eB8RMh76kRKTy5xnK1WyLv5zWqL2xz5bwK9576dkhhRBE7YFHgvzRSBXV13cZhAeo",
  "key3": "rgQ76p6TYTiLbkZBtmEJc8yC89a7UFPx16dKJR9wAfUwVsFm1ZR5Qvn4GWMfbYvD4u44FbUpLSVuvAbCVM1TBgg",
  "key4": "2BpfrEHo82maRs1r1FTZzRFPsij9yszCodDW5VnLGZmqZMqEBCZ2vJuPgCJTTkMV1zzcN6eCrkzG3aLgQo7mZKLK",
  "key5": "wC95HMqwLT9XbQkqtusgF7DaUoe9wLY9bp9iDc2z73ADvCeepArdNn5eMP1VqeaWjXw3F5i7bSckbiJRr4dvVdw",
  "key6": "MrDNUAaPncqpGVSZPVwsy46WPAtiAo8P5JMSj96o8h5yZCkiRg5jsxZ3gAZubgVmadCMwqXT3svqdxHo1KB9ALU",
  "key7": "3Xj3fS2rjxuBQ9MovXMUUMhFFM8acsV4oSCgcCScSkAHSNKA3ZqLPZ77ozqQ4qfTwevfzfpFUwd1NeJocE4YVVGe",
  "key8": "3fMk4B3eYenYUtzm6R7viUiZNC9tXHSk4eqFHBzmVvHVLjiSTFV1iK6xnWASioRMJ9JxEWQa1Jp4C7CWFtuHcWq1",
  "key9": "4YuAkv8Gja9jZgQv7N7hxGUAp7VcdMbUmrt7iVNh34dbwKNxBRyiTNRHHNpTvYSEHqdVnzAkzQxWbZrtXtqFL51v",
  "key10": "4h41N8HQH82JUwqraUKWuUfFcCyPRHjbWq5vCc9NGmynsXk26C9AuuUEaSDpxiig7eLjHf7PL5JWBDX6a8tqQ45U",
  "key11": "U3JaZZq1vqWEGwYBzUtD7gVWSJqiRhSoeNqippdW1pG2dD538eP9XPUsCjf6C2kZtjrHe17ReJfo2aggAr5NApq",
  "key12": "porZEoFAamdQzyHPyWBamGD8gyRDDqFQKYMnbLSB3PJ4x93yr3BAbCF5Lr6gCXY179Y4yJoLadSumtVNfTn9Cvq",
  "key13": "249vJV5E6B6CqPDHPu9eySjavAdQJNDmCPwuFLVHTJPQj1LLgEyWomdcLHxa7FsmwbKBPdxs9ocP4gHJyVrfrn7f",
  "key14": "2SMNQAeyXXaVhVHJFKJmQ9kFkXJBxoQW2i1nwf2WwHuxFvQHyrtcYUL4QssRqP17dBfaAGEnXK5xWxUJm64uvnLx",
  "key15": "vLjX6ScnotkLBPSwowgoasLzknUTrQLWLa5JQTuaBc51Swy8vksTjRNmGKmR5EwENv9BeB1j4pUV5E9ikhR1Ct4",
  "key16": "5L6Rtmq3dYruzdM7NMNFLjpnR1pfDaWxcN1mfTEfjYL6qSsEaRFNvXw6w6eo4ZtnhaMJBmL3AmLCb3Xou9uCBoX2",
  "key17": "pxDJFzNvgjVhT29emKpMuWK7srsBHTAm9XUKMkxYgepnc7TAoXFA6cJQJkYTt4JfHTyEFeGFBYj8H8amBbhLnis",
  "key18": "3obfr3UrT2JytmgNkHAYKft19ZS6nyP9Xv7qHvFnpCHYT2uKCHSiv1utsrFRUq9MFxFQpQ7696hV9LDe6qreagpp",
  "key19": "3LCFTcXbSbJShSWx9kuvoj7KVY4sbtTVFmjpGXFPrNhdm4wbrXtRuKBqGkibtQcxfi6fRFntWnkHS2xpT28WYsx9",
  "key20": "5GDvoPJkoZwyMnJwFp1ou45r3mueDpj7Fzi6NuoJrepkehVqUrtEkMgMZLKHeMRCTx8xxVMWNTm6g86uqS3KxhDM",
  "key21": "4tfU5X1T1QzbfA8ge8GFX3rHh6fJQYfYSoAYGZAVHKjpKM32Tx1TPhYVSEXjfenVpi4d4uqqabX3uFwxCbqSQ25V",
  "key22": "w1VpCjtqLJsE2L6P1mWEsXrSK7NBS9rDZ7XCHp3XR7MLzSWLkkiMoaNYN9tFdUrT4CWfHpnq4xMYt9XHhxv5teF",
  "key23": "CUoeCihgFfXZPRRYgE4gDh7oSkRgG9P1L9g4N3bRhDGaoPn7qNpnuPZhobNveVfcQS3BnJaAA3bnVayU6KHhRtc",
  "key24": "fXuk37BvWU4ed6tCkXR9WmtJJTTPZNmr4C6mHfDMYE7rptRw3JgAoNNvNv8pnPVTjFNQRAEmz46rJfUnwbR2gfN",
  "key25": "32AhRvJKJStzKgmfZLnSZad6tM28iH2JjfmzmkdTXRCUJqBbkw9Yg8R6NNEWRyomk3ggd7tc67wUwUXx3f5NWsxR",
  "key26": "MoPsRiDQzwBupa7bkjwWzgUgsAkLjW8DHMDkB5CUaM98LGruWeAvryxRNdwtaZssuHcx4cNz6ivcSLcJPiPsNeL",
  "key27": "3Vdn2kziuBPBKyvVGChRfAWNhqpenkBqEQ8NmFVV91JhEbxFVSubDJPNBY53ZQRJUKcN5wURJHYyCtqdU9ybmJS8",
  "key28": "2Ze7oFUgg4LpJkyRurxe219YJF5zPc6zAAL1LuRG4bQcRwKWwWAVy8GndPyjVMrnao6ETStL7FFMNoZpqryr5NVM",
  "key29": "3vkMvbSMyaoxTS8Yccebfj8taomUApMCa4FFUqNgiiwQCnVDaPfSaUaEGEWwu2GjiBCsRVyDHggyLNyvuNeR4LDn",
  "key30": "2G7zJVkMiZYTpvLmbsbRSsVXD4MufxeLsTZ74wEHGRTtaSPcLWaRMh8QvJ5CXnzqDrMuCZEyd6bLdgDGMpqFXQfk",
  "key31": "p35Eb6whn2mDbtA3QLCzMUS4pQ3BsTfD1r799tzgoTRzgn4tk9wWFL7LHZCfe6i9eT7dnqPvVFwS2heoczJVm1h",
  "key32": "3mBdLNZLHo4eM3rEEd2isA8HQ3b7iF47A2B88ZWVjtwJh7oG9MQtaN2HkKuAwntga48SYJHrqnyvpnsED6AXBpVX",
  "key33": "5QYSoUx6Kid4GkihhWqrbH5qYwwmqTsWWoAJtAud3wVcLn9gSXdPTR17UrCZ6q7eqNEREQfQxeMxa65eua7PDGku",
  "key34": "5Yfeau4ifyRKicyo5FaMjHEhrYEgkbytMGLdMAXQNSGYs2FfWMUgWAibvLYFNqwwgBi2ho1F9hs68Wc71noUiVYG"
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
