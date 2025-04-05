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
    "38HuPey8o4kqmExjH4uo34WVTQJPSswnmUbYCE2jeKiU9an1cgjD19jv9Am442SYtPxepKCxk6CyrL8ehurmC1y2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GtbBoK7ev8RwScktaAACtvVXL1piZMLe24CGqHKm6XhSdFkE2v7qKVN4B67rXRgfL2FwCcrPiZc5uQiCSS9jWmT",
  "key1": "2BMviNWb3DHpxGFN3dkefHRFtx5xMGA78Qe4FMepiiA7ddgXDHiZtoG2sG8EPcCzFanj98sbt3r5aaiHzWSgQafe",
  "key2": "412HXsY2itjb5781oXnQvSCa8bKJL7gj68SU2Np1p87iEGsVVSTUL61sFyuoSWFJYYkpkwdFvrJyTRDwb7T5H4cr",
  "key3": "3EkWxAWAUaNkbwazsKBpeYpJ6G429KeLsLaBDxf2qQdotS9fENWyLayyHPKEfxy9ChAUqz2VpNT4RxSVeqa3ZcBf",
  "key4": "XdMUYe4tjzruBPMFRZXxn8uZPY5Mag315uwQqWzXdtewe8ChfEgMLXmVmTSPCGQwiHiTNHD6Zwpj1MT25L17zPT",
  "key5": "4gAMED7Fae1ZyRTSAJ4xNaDpD5qVYAFTjmoAH6pVFzA5fcp5RhwbrcV3riNhtHNiPe7eKAZAAKuNrtb5zqpYJ9w9",
  "key6": "5p6qCZpc9y7S9Uv938pjYX8iVGGjcsEjJ5crbcki9hiLGkbSBMxLsgjoudaurdsbSW8BDkwVEK6GxkMMgUYhmJ53",
  "key7": "48P7pnG84cjrLg8Lm4ySTJ5oUj5SBMKdrPzuBKBKCh2V7HCoqAakBCmsoLwC1gE8Las43EUGearLcLecKDuPocmG",
  "key8": "59xNWzdWwpBbJUxDKeY1H6yKcT3hRaVL8B9fu2fyp5aef6qw8QxDYjx5tefHtsg79HFVMcmBvyWKVTuUeMMhhQWY",
  "key9": "3YvEPT1usNWApYJZhZsBxpENFpEHqsZYjRXq81pECyFaDZE8Anu9FYFTzQcKqFw8EP57kQ72HQBwnMQEf46iCh2R",
  "key10": "YbpBrDP2GAGuhKjzNhy8wz6tvBobsjf2BZ6RmLv5YcMfHeiDUxWuZrtKzpWVufr5GF1MRquacVxDNJGRaLppQoJ",
  "key11": "39U1Q9mpRpRxfQYgPd9D4hs36wHakKxouVe4uf9KbRMZYUh7jZnoFWhk3LxKL59La3AgvvBnRGw69YncK5iNJxii",
  "key12": "BGofBoPy4F2yLuea8z2fxDngM5pZrcARdVcVWhVzC23AdW51EVcELAgUHD8QVCP2AkvfM7aeQUa2RYmRWMKLfV2",
  "key13": "2hm5vzXbaUaYtujiog4dgEazMP7LHP6n9pV9oNDRZs34J5eTcUTDN2qSeuUHTbdGKRKRngg4ea7x853xJCjXozgj",
  "key14": "5u4zmhpqazGJbdEGSq9sn6yFy9utMnaLNNXwcrJaehSSmevVjyKXGcEpDV5oSzrgW2QQXtLoKkRj8zfiWHgKejpv",
  "key15": "3FsM2ZVdPwvn96hMMLyfJGeWKWjT3xtDXDQyvvSw5Mh2Bz8QYRJc52cLfAvgQmAfhGjRNF6AH2aST2JCLTEzfXvA",
  "key16": "55MUYUCbaJYD52PdpQBJoxsFF3giTh1M8GTy9vwUcUEtKiqX9YpXd91ce5cGFJ7jYgYUWbg4MfE7xLHju1APm9Rf",
  "key17": "35MU6aPfknZBCdfppfSzkrty4mSXsBFYRFSdJsEXpvo226sDKbkHaiA8wVb9o8wejhJJhqo4S8Saa7gAf89YsrZJ",
  "key18": "4JKpeB24dBgNb8zWTkkNTFgEk58BzaE59sMPtdcBWzgqhCstPdeRPMxA36yH8sZmThXu6BdPyARU9hZMkNQfnY4U",
  "key19": "2eR8gUVJMkg4DcpBCPmvb7S6iqCDWiGyuTum6qukT36E7Kk25JrenqeZGP2foAwjBMS8fVnPr771jNpKxQr8mtVA",
  "key20": "56j9e5zfSCcxvBqMwCvKQs2VabUdhjYXe5KP9iT2KxzFQDXKfhiPihhFBdztC9Zd6PYoEgVPSQwYeuDpdAGa54py",
  "key21": "3Wb62LC2W1YjC3VQ3SrdqMf7qv3ZDsigu42NBpm1cRJnUWZMpRYoQq8Y4161b8RcVuxVzjXLmfxohFrikxfSYkik",
  "key22": "41mHuAKnjNuQ3Apn3WdrnViDpenr1aoTCmFCTJin4q6RKUzNhj8mAKe662UEBia2LXpaCiQPAFGKvTBbMKfbR2ja",
  "key23": "2WvcjvMyVcUm7mSwmuTVCQawFcE3C1NYo9KnAuHK2wgpzdbAxtcaDhragwSuNDdSpr6yBMJ4RM34ijqzREHvsWfv",
  "key24": "3Xp9Dbd3v6umBYzE6Xchpb3ezZzLoYgvmcB86uh6pCy3P8ibkoZhZJraVz4TXjT7RkPaC76TTDW1xgziF9ZXq4XR",
  "key25": "47WZWwVnTdgt3YZsF45QUTx3bTLNTyMgAEQ6KdjetVH3TizucZQxY2u3K11pCnMCkyY6rJPTLHpiGhs4sMz8shkm",
  "key26": "3Hz9B6mNgGXJnBgUR7FTGV7sXAGuvi6hjWkeBEb2cDycSU4oJrYFMSXaFFNytfR2tVT6kTasss5ZARwb27Eu6KAg",
  "key27": "5uvbkRCphvoJC3HLRhDHKd79cWfFVRHZ58c619j3KM3yYpVDkXgNgiE2TXjj5NKT3xmgiyAET6dKULqCr5J3K7f4",
  "key28": "4TNZTHtHwDk36wKH5XYwmsRe7kXoxoosCPCFVV76buCcsgfwLJqETNu5gbEGj6gk1UFxoN4W6iMwvBEbfkYnDHc6",
  "key29": "3hGJKUZYc2hZGmyfhqcGxbYskDrKXkZWQxynqoKy6cmnhVMFABQx25kq55r2keuDFLJMNR3otxFK7SDhUg6FdEyK",
  "key30": "2t4AiKYhEcZux2T84NRJ7owyLWSb1PrqeicgSvkis1XuZAjCo8mzY96DCSnLSpeDJUxCjeDvLnTYhsSMKZ7MC79M",
  "key31": "4AXBvZ21jfJ3K12arEktJ1aoeL67S5Qb9KJhDdW6mWsfM9Yob4fnoXbyursEFgntQCSqBMvV8q56MGLiLpsf7DH4"
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
