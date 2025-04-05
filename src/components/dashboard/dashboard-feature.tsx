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
    "36tWyKSTEwetDN5eb3BKmBBekXzqcoyJRtqVc7gAZ9Eujhkd7iwtR3GHk5xw77WfLbd9TyngaaDFRe86AqXEqrFm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LQLFeSUMd3hzrrnwXNC1cA3GazamB4CTaPZB3fEMvhd1jYEujb3PDT6xZkTFxFKthB8aie8MTRzzymCrqCq7SGH",
  "key1": "2n7T3UB3cN3HEVtzwNH7kssDxXdESL688CMTaxTunQza2SA7VKVWoPpdyhq6hh14ZCrEfPZi6JvGS6Ucf5DVESY7",
  "key2": "4TJwdVT9FrsJXYjTWdSTFMcGStNpdi8xbzaKp28P8qsWN5NiGSQW6JMq1FMdmRsBgdCRgPXVwFa3DVGoTsZHQWv8",
  "key3": "22RdguMUNYuixrWr7EmQftET1BGcJWfBg2xKtbzsLGSnUwZVrjstfwWNCUhX9xzXXLhY6dPwMiEEEGW5Pem5eddS",
  "key4": "584oaJ11atbju5afictVSaSD4UbTiSJmKicb8kdP2zHDu416GswkJ5P5QuCHgXE9Vac8JJg8tcC6qtdxTKxCknmT",
  "key5": "3d4NrrmAM7erkKvf7vVuDCoWyKy2qx1WDUPmirwq3MQDgTU2SVmYJVfy5tPdmWhBH3iXmhk5pytUEmogG6zgrN69",
  "key6": "5p1b9eZjW323yt9KXx5dDypetiZJF3FkzfmTHEs5BghquyzdA7ChcpEwxVsnAuyvZuhrUS1HSpK1R5BCsmx45t3c",
  "key7": "4nsPLtLrcadj2PkV7tGXEkLPwFktRmuZHfYFyJppZxAevqnzgeasoHWx7y6ufkeDqaEMgCLSD4LwgrvToqCUuCDj",
  "key8": "2u5nr9KbYDzvyp3fyxbqvBqqKQ33s6YG2fpk1Bq6sawfDTes8fcrVK1zgXJNhgr6TTYMkSMKb3DtT37v2gVjozSH",
  "key9": "2sPLt9psGpyUaCRCbrVd3VvpnZSfoWaJZehjdVF9MU8osTyGrvWsWog79NXRNhAy2VU1KGvMWJs54Cg5uEaYqAzM",
  "key10": "2dPdT3x5PyWBZ13MT41LRWtJR9aEHGSd4Zkfdqns8YJwsHsjfiv6TCaikp2HiRWe46jXTMJ8s9ohwb4cstd73TyD",
  "key11": "5DAMSkFsCEYNimzVrYHT6hMTBJ4jFtstfAWsEutck2rBpaagzUyGFSRUdDEPRs5bRTUCVUZVbix44nxBFUWvDRJY",
  "key12": "4VvEZKFSByUcTg12K5JL7L7rJfAnspssMy1mqYJDrrJf3QZqwxR12oARRDdPZaQ82kfYEnaZTr9URRndgvayH6Vx",
  "key13": "41SNuEGhuG1996JRkB38xDv4qvqBkG3sTh2SXwxTKU4L3152Pb697HMKbfcPtwd3FvfopGjF6Mz7HgngEauJTvwP",
  "key14": "2oiQr36BQD9aNPCAcTEA9By4B93saPVLJnUmJmjymoaGpykFySAjEFB7kdpFcY4BAcSPQyjD9Bj1HdrZpiWY2dET",
  "key15": "4yuwyE9V5VmxDULmbw8XdBBihuCbkyasqaME2BypwjzVQ1LEd1NByxdm9rChrc2ciuL4EQe6DgyXBMKm2ReEFT47",
  "key16": "ByrsHtxUq4KgjRxSjnAroqSV6u36bkph8K8L41kRmighYTs14RhFPyiVTLbnc1oEUXtYJhrzwSXXHkzyvyz1qMw",
  "key17": "YSEunt6nzNqEztCsA1erB5yFJ3CUDEmHRHEiSLyy4V2TMH2uoFf23gcsby5kNVXEKz3ampsSLJdRLJuKX27SZFW",
  "key18": "4kcn8748RUn4zDcbceaqWGVGjPw2pJaHAneDLcDvthrnkwTaT8XXX8iR4SKrmTTBYv5L4YY2o8ac2g4s8SCgHTu5",
  "key19": "5deSJcyDBsBbxnqoDw6H2aZZG9ybHs6HcEFHZHhDdLKvE9L9dAfZjQKe3ma6wgE2gYi1eJnnfYfrU5VgLHNN1PW",
  "key20": "3AteB6gsmcyazx8HhkR6nDG4TXGFfdDdV16k16p2c5tHNeC5WWLPFTU9qiwvTiHnzo11bVBugLGf7eEfNV3yQzgf",
  "key21": "4tN3XBbcfiy9YmEd6ecMEwo1FdgxndaqxkSQriyf1sPRUYQFmuPpQk7zQV13PWRS45ooi1dakdVR4xADDc6EbN8V",
  "key22": "4VxvzvF9jmMruS9e9Wx2iQHQZBjwsgBxe7SyURjobejLSXkivVu58y7iZ2jcuYmNRYNKCtZXJGnB28tEknKjQppa",
  "key23": "2Cj731HREN3Pbwjy67jgyu9EPixJLpmTc6unGxU8PFvfKDse6Ns1zfozuR1GbZreJpzy4RE9qcNkSyi5GLavbsjq",
  "key24": "5LcCr2opHVQrzMd6RcTS2pw5hubLzzDrJAo1xU6XKLgMUEgq9tV3VXrxHid25oWEYQTyb6NnkRfSWTQoeYbC4jXJ",
  "key25": "Mfhsp1V7HAt9A3kD7MhU6EF8WDitLJ3zxmeaodh5kuuarX4p2KNNaZEj61TCH7j6vWhuTvHTWGutSzbhYkWLXPT",
  "key26": "2rVnLpgurPxW4cdtHXKcwMvZ5kHghk7CQWKqPjhtHcmwMYpffUxdmXBX8VXUxi6bV5TWQNZ2WKeLGDrcxTttZBX2",
  "key27": "4a1kw3AR9t6WrU5Zo85bQRmtnQDTGBFtQEEEwx2YukMBr9jcPWab4HaTBmmjBXZJvTtZJCGa5qtbbyF3ScgU1Xj2",
  "key28": "4wBG5DshxTccU4uv48GKBQo7ugJvQRTc3GBzC5ggEVjtSr5jsUCM2jszTQQ8e57u3HcgNHbnhVbg8xM67QNoWTmE"
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
