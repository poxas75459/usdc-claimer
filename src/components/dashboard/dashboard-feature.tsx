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
    "svEHDCaqzYeX5Ps9NZ4XWwwKaV8vmrJeRwTxsbn1GQ3NBM2GC9koJDb334asq7c22Mob6EXQUoJEsYp9syp3Va2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z4Ut9yf2KSWZHu7cKMhYKr7E5TZRy7vDkRN89hZULDTGdyseQseUi37UCuPYBh7cKVdzsfh1eCrMTtmP56bbkA4",
  "key1": "5CETmovcQQL2ACxMpushKr3N1aXv4NmDBndRUghh6Y3NugaGmCdUmGLLzw5EXej3mYL48G33zc8QoeTZJF1HsYfq",
  "key2": "61LbVe78eytyPmi2u7E6fWjdHBZYsT9Wwy7vdS6VkoB4KqpjazGWfNesMKtbeKxnEuZPdJKiCjm7PRsL7kX5etMg",
  "key3": "9cjzMNan6EMbb5JDT2GkrkBKzpEkQojLKhqfcDx1ZKvhGKcPBK8HEcAs5mGpHgUv77AyquqMSvcjRde4QMHnbsp",
  "key4": "3Lu12hqyrMuAhXFczbiU7CB5tw3pXARQidxpmKU56eZFsNa6H5GyTkCZJmfUgyZebrHvKDjPLnUSgizALMZaHnCE",
  "key5": "4ZAmKUstvbBnkK2k3esUFBBFHzQQXRKKivk2boF49ot5m5wgPMZioChbWGH2Xa8Bugnz5RE2MKPfjETe88ESEK72",
  "key6": "38nTzqDUwurDQaEHyy4zDKLXSYNxetNiMp4wpGa6v6QPdJtHWsmeTDHZc5R1xWz3LiLPn4MhVCBF9jHEjqUC1kfS",
  "key7": "2GnxVtnJ63deFz1aKKv73jcxHZ6aq1wTQehsajUMFFq2Yhkt3RDKeyhdySuvqBhzF1vRPdvFPKL9c3mPc1tT8PwN",
  "key8": "5gCDH3SWUAfJt2QHbZMaNA2TQ2PbTn5E45qiDsiN1DzEAV1assPanoSBgBrvh2JJeUo6Ztk8oF3LsUpAhFXm5Ht3",
  "key9": "2uXBaK1adzaQjDvikf2wnfGVaEJcVhihPBbyPAqDSk15xfMSxYudouk8sAJN8nK4MspjpodNhTKoHs9QGsY4a8kv",
  "key10": "2nVAd3KccK3qtxHFLLercYTmyFVsRx3KmYqDU6M3SSQr3vMx9RFnoRh6VFyjnNeBCJKbKTqUCCMqofV7rzznrFYm",
  "key11": "2VtzZHHzDWLZ9Ut8xE138fV6SbuDbvjKYzUxzxYKQSv4BxXkoYa2pxCVkAmHxgg2b9abBspWL213jB8Gm5SxoZHS",
  "key12": "2UG5aifFjxKNVnZebYMrBGeKrwmsg6AYg7xk84tYwzVUv8qW3PaUdLe5zEwXdrMUENgudQeqcQ3EMsWe8TocbiJp",
  "key13": "3fDQ5DYoe9LYPBTD1iUuRJPqPorf6pVMPvq8wNvkK5GufZevfFkSVzFRbVumUPUbPrKQMVP69N2DZYF9ua3Lmm3H",
  "key14": "5khnT7UF5QepPU92bNNrZLdPCDb6YHKyhSFA8hatuFVp9PvcrfBSe9v7X3q3yY3rZZpyajxEqdKVQg2mPw6WkCi7",
  "key15": "5aRgjZB7NQ2tDzo54LfNgDCokExZb717dVH2PLBaQKrDBr1ukHPoD5Tm4m7cxspBMTnRCAQhUb978rwmkrwHZvS",
  "key16": "4bYJrB6TWwhn93um1sukbUsZz8wo3yQNUW75ZWEE6UdviZrK6N8EDDtUKN4WgUy7LkoJ1QsFyHH3hweaicSSdaC2",
  "key17": "4pouMAcnuAdXni7BLUNDSMERiASnjm4XhErWvsVFpYYBLPtcX2KCNeYyEE8EZDsDez9FkiJLrKqwGmTr58nax28C",
  "key18": "2HJGTd6kF9fLbkkfXKRY2XF6rhJmEhD4vNamcuvbwyAamHY3kFuigmA7qPefjS8yonKZkUS6iJuCJSekVJrmghrF",
  "key19": "2wxSRXqQkmusiDXdKfPq1y9EaGJ9QzWYWb9ot9XXiMZDBVZhMnwc8MDufX1RrT7bwf6Z99B6ybGcsQ17UfpTybz4",
  "key20": "4d9jE3qVvHX6m7hesyp11hGR1f67iP8b9mvfyikcM7jbDcVDT4D21xcSnpyx1BEJwyYVGAQay3KVDehbtFDK4wPL",
  "key21": "4ZhFLZRHvB7afZjGopYVh2xGkYTB6Z25tvZ7e4ZqNR7LGaS1QwsEuFXwf3cqusfQQRpbx3dpJFJ5HdNPMCDt6vmd",
  "key22": "5WR5DayoagzHWajYzb5cML9KzrvPBKAgei7Vrx6SGFaciABEkpXF7d5QzZRm4A4DEmydnpGBVDn47uy45escLwjD",
  "key23": "3Jansj5ELBDu2zHjVeeFQjyo4GZuzAhSPqJsaXbMMJH24fWhztn8Bzx2JDNR1RhE37hCXKKKJfzpvdpdY1DMfWS4",
  "key24": "2CuSohRSv2rgaZ5RD9fPVdiHDVqwU7h9o2id9QmwR1QZpPFBtdn2nGoXA77tGiTL6yXREfbf2A5oVQvBaH3SUMTF",
  "key25": "S3wpSenBNJ4EwLnKjvJAyjcf4LVBpW4bqeVCYNE31YgiaEoBh3GBhBffZGmtkw45MF3E6oLof3kuZrDfsYGGRBv",
  "key26": "3eHma8Ga8ZK7TSmKNRyKyu6wobTrq1CG5s4kokKhmKVcBgQNT2VY7LC65NWUwMWY8diwqMHiVGQUPBvuz1byo8G4",
  "key27": "2tESJTF1jV4PTygCrLn31DCW3WKH1pf3KV8YAWFr7mTf4j22nMbSzTjcEQddFfBzSS2a3c8acTdYvuoofAgE173D",
  "key28": "5cpsjJ34n91wnWbqBNKTA552Rc8MdLYxwLX7JNNYw2WvHEnBFCjDVP7FKHZ52ab7CE2kePatvcvimgRyAGUuuQAc"
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
