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
    "5HjXwzDWM474owKaA2wnr5zcCEMauTMM5b6M4XCAK7fLD3wcd7s7xz6PpnDSzsGH5bYN4NsnE5RLU7CE59H1A2No"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QdK25QqkdqYvf2ncG1DRm7XAJqjdpWtmVqHSMcDccUw9GyZpkRwxGGaAZCXfP7V3m6hsMS6F3HbpFjbyR6VJ8TU",
  "key1": "ckFqVaEN7iGM8zXJNiFGUkXVb4ay3jMi7YFzxkM5ZnvnYZcMx8inMsCJr91suw3Ur7DDCMvd32zo2RVGULYyi34",
  "key2": "42XUabViD7HjgkUMz4r1GhKhbvP9QHZ443evtj82RotZseMG5E4GBB2cCswLhoKUNgUHwsPfFv5f3qYSrGUUZCQC",
  "key3": "2MCuTMrVDioVVuSEQHWKv5X4Kb4LUJ9GUgSabZyvA1Fk7zFQjAWsA3v4hvFxABcnZH77h8A987kgBvBppAUptQje",
  "key4": "4B5ZCJ8Fnw5zWSwg42b5MT1xPFigU35UJ9gYSrooifXk8wvyvkv26fchXHmcs7yNbF7EcsKYCkNHBpwj72YTQFYU",
  "key5": "vgbJVEi9kq9XeutYYJX31nCkMzTkoZwNnz96CVQQQ6xQX3bNSoqVdyrSabdec9y4W3akvT7pLwVC1WmXsvCFRr5",
  "key6": "KmQbq6PcDH5bGSuA7mDWLcAywuaor8pfPLUUU8AX2EBN5pN4Ao288NWqTFz4dNixaSjgBksks6mV8GKNaQ22q98",
  "key7": "2FwMbuKyJ8ZWpS3y1F3QB1xfQzV7PWMFKyAWb5qhU68ooZv1aEFL9qvbzV7MZdZukP881T5yqqNq2Ge5PhY7msBA",
  "key8": "2Yahp8bUhCmDetPYtbZitauT99pbLit5wKcXCFxkrmEivGi7yJaj6bbtNB2VFbE1BW5FWHQZMCNibKmzsNve5XPh",
  "key9": "3gW6LoXxjmJxYHeUVhMj4muJdSNkJy1dr9GFTTqAJ4TX7kSHgee7YwRo73R8QyvsQudPR7FkSCA6jco7pXxYQxZn",
  "key10": "2ox5kYqBbJTmkEcmuYgXJBy2XEsjevTiS8UC6XEpYWj8M4Hjr8Sd8xQi77RJrdHqrh3taBX6pcLx24jQST9PJDch",
  "key11": "V7KytSSHm4ZmMSSK38gFjX5iS6mhnCaEzkwJK9pK1GkuP4FCMNvR5FqPwTUGLGZpi8oMTebtffV9tM1c8qVhimY",
  "key12": "5RPaFLDwFYJic9TGY2qTBzUv7HxUm7X46sVeh3X8B3UnfzRqAh1tkKDm25YortkSSUA7iSmxWQfqvfLops5JmndK",
  "key13": "4LhmC9Kjb9GszLqt9RXsGa3LQ3XYWLGEgotD8Dwg7krANgWwZ4EADDcDeViKBHZqnYtkMZ1GiTWAzJTB6FztvNoG",
  "key14": "499t9cSM8c1ZLvZKBsrxTbxMudxycyaZ9nFJczWjWD3ttHZSg4jMpWPgCF3kbg2GthgexCQ8XNiL6uKUQRR1353J",
  "key15": "2d5t86PMuVHunJnfjQ7SCdT789GdutPE7u9viFQHL36z5Ryj999wTA8Vhqa6JtCkiJ3WRNtDUEqnRt6f6WRhdtVR",
  "key16": "5MEtnnKmRKSac7e6ogpG3Twkasenq7wseDqhw62PxvidyQ1MBsmdi9tCRzp3ucXDh1MSud17aLQqb7JQD57zXjcX",
  "key17": "5BMY4X915GgvZeAhwHvaJk4TvScT9aawu2QTFPUsi6ep4HiHCrDJSUbJpbNghqEbtwPMWzkQ3DUL9Ths5Q3HUjV",
  "key18": "i2cmvP2EvCmkc1RKXftMyLryfhTJutRQqJqAeVLMsSANjKKDgrYE2ZnwwqzzqgZFfvA1iHc5jsagU8SiXLUNKFj",
  "key19": "xrARhk214jADERWGW21bCwsyQPxTiWxespoGH8sjbgH1sgdooyyajMUnXGorxY6xxFm72MugxtaPz4jTwu7X7SW",
  "key20": "3doK8J9zywfdyBCdxvDHi5tLFKbQpkNfefpJEZNQ8s15H79wSYZX62oHa4FcWpB8VFV3zzRC4E381X7TLWR2YK1j",
  "key21": "3vryv9PG9UTDwddaEZe53Vxu9S3Nc5LeDPNhZkNR9eKLkgVUhVhvk6UoBUbvX8dcCS6B3UrgK2vDzxoDBnrYw1Ws",
  "key22": "64m8xFQh2YJcxWMDZH6xDfk8qtRWYdMaX78zwjK3cGQJTaJc32dHATqUci8bXHuJTQo3x7vtSibtGMQM5fYjGzPW",
  "key23": "5S4GfEmd46acGPgmaxhxw612zqc2Ab8P9HHACyS9rWNoTe61yi7NqQsqjvudZPqoLG4mQAediU9h5EvAyLrMYX42",
  "key24": "58LETN2ExXQtTFaTxkJEJV4eHdMvwG1jtMgRWxy9utiodvVmnmC82ZA2YVrnbTJfUR9bZBNzgpAxH7woHVatC69R",
  "key25": "3VjJZdbhZJVR5Hzs5EC32LiJXPFvcRbuid45WMzgHcrFDq7z2eH3nnQ1aqxrUUSBc1QRkcyVyDnM8HwSvvGYsJCf",
  "key26": "2rKX3Wah4bGCvN7UkBrtdVp2wAL71LmBKYP8kcJXHpHr32qb9cPsFQJYSWFvBaqG4CZgZZ2MfiQgzfFQC6TZdiKC",
  "key27": "3HcT1pXv7Vt555AGE5aFxN4A7AHLwYvBnK4voZe9hKfqzXdCvXh9QR21FvNiUWBbrcu2Qbv7N1TbHbDnxc3hXaFf",
  "key28": "65y6GfiRPA3nFhxoLsTtxM4QSDsigD2sB87RDys7VAwEv4Jm1hmAxdUTWiCUGKoUVNVS17yPhKAkjdAKRgDfm3Gj",
  "key29": "4DTAnFHUEGKbbQfg5ghZ4Xz9BoWXTDESjMD7dVBVeVrE1Heo3TdXPXyt3kGYm74NLBCcfqY6ViBzJ4ioSzcM7H2A",
  "key30": "3wfihgGsLYWW6uX5vhSpBJJhS2KrgaqNZyzEKSjijtprGrqzfuG6bUefmMgcjDLb1KRmGy7ceBnTRSoVU5D7HkDt",
  "key31": "2YcUpHsfSCCx93qXBWjnqNv7XAPeqKqNcqxcUcuikVGAwCZBjmMWUFH7ESGeJpnx2UjJRMZKs7mmQd8H4zUmiCZp",
  "key32": "5wW3z1Mp4shcDXcyvzfcSPQ2XBBbBf7cVAQvHH1kjSn59PEL28jPZ98HA8gFRMsYiwt74pCQTwGATwtm9SpYEyM2",
  "key33": "36zSuHpBV3P25sR5N1dbLdikzQJcgML2tqs7phW7hfo8V5p3pAEcHFY1E46d8BVDW3KZbJrkD938E5iFKUCDkPwo",
  "key34": "T1MzgiR3o79ZtqsmzXnK3WPTiakwiZu8iP9zRbD8qVB8Rxiky5QCfFBPeoCTsTgD8W7DyRj5PyytJ78zrYJTJtb",
  "key35": "LSp1paLjAxzQSTLU29hkwYwt3Qhvu3TX8FLSZb8FwF3pGJhgK6TUKAJFDWzrMGFHCVKB5yV7ZLTqYEjXu1DuvGd"
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
