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
    "4PLxnpsdCXJvAET4V5QuV5anrd9XW6tv5e2WzjG86bMtzHadJd4gVW6LEqyayawJg5GR28eyq5kRzGYxND79nxV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65cM4ev8DmBehTdiTappyDfE9u1THgCWnoUKP8jYBFKMiQVaQHcwtGbVD5Gg8XtNbuLiTNaBffLPeAc2w86iQHjW",
  "key1": "5tSqtp6tvu13GExVRh9KSyg8BogjieEbCH94zeD98Spy3kTg9a2jzdN7xh2aBJFykBYkPDTPGF7N5178Qch6duGZ",
  "key2": "5D8oDXRiyK1yXLJqUQb3PGDWFCkTxYGQsZmcoFb3Uwar5PRmZBjNG7RoF7rLELsGdFdytT8zxfpqzTmmsAcMkbQQ",
  "key3": "2wQvf7s49DDB1NaxWAXHvQbPkq5GaLkPCLjaQbNr2fYcHmZfT3SWvJh47aTQvempSpHHLQDxDkpW3KQuibno5Jjb",
  "key4": "2zG1FWuyqWamEtT1gEH9LDRq1kyxesjHF4cxSxeUytdmNNUKfwBEwG9PHAggSGxmCuvhJhyDZ2vfFTqPbY92H3iC",
  "key5": "u8x4BddxWrSL14p6ju1Tcf8VoBPjyrXvS2MzL3b7PVhG7bseHx6GcvgLwJmTEHsDfW5hiqivNKG7q29i9bmaVib",
  "key6": "4RrMK7YqTNWezzUxQPCNb43EzZ2NJLWTYmegZMxnfJLDWRMrqisQ7tsDRzjik4EF7AvEY4q9SsiZd797TzzssyoP",
  "key7": "4yT2jV4BC36j5Qs4reDvA5XeuousZMTRAns7tcykbcpcvFteqbvggEQ7WMmNfWoR2JFaozavYDbhH6pRaysc25an",
  "key8": "5A2NbjwHTwKjx3vvNPnsHnEQcZJD5hDaRjLt2JCxP1igjjb2J3sqaTJhcf87VQaR8rSPT9iXS3N3DCFVP2xTGRFA",
  "key9": "2eFTvK9s6tWwodPdFWFxKxWypJfd63ftsy93RgxAGXCkH9xruTwFXtaGuP8RErTG16tKw5W7tfNmW9DDZu8DhQGf",
  "key10": "Yso2XQuxj49TxtBE96cws61epFbdMRoocjhzzUW1vY7y3CyWcPhmHdFpV3MB1gqsZRfdhh3L8vbKAApwCqywXqJ",
  "key11": "47pRn17NBDsXehqTx1UxwghFpRLLTueVGxcsmbHBj4pbjdhSNQ9GZoZBLmt2nvZF3872WLy8kTj8qsG7RdaK7XWR",
  "key12": "4cV9MdM776n5DJd3e43B19SBfVYCvGFLuHS5YG4tqayNSXMxXuk956RSBcK2NTGhXxmcEBTiyV6PdEiyniyzQcb7",
  "key13": "2JHw6mCic6YY8jZQAXisc8LSNVBgQmQvqEdZcf1h9yLDk4CBdHYZXRmCsohzEA53idq4H3qd8pDPY4nbdN2uCFBN",
  "key14": "3UrfnDWoKnFx9Tr6HqU5yVeuonvEZJG61MGJMEKzBxJ4km3rvuqrA5R2QDSsVQnjesfZ3gFd6FZN1UBhJs5hri3h",
  "key15": "2LWgNd82WGyKsYQpqNZugq7QjofWyHkocEGoAHyCnYwGk6jZqFdHxvV47jA8s9R4G6BJjD8TmyvKvVEXvc56Lm3Q",
  "key16": "3S6UTLmLaYuY7YwZeZYBkW8uf7w8fRiQiKxtZbYF36iFyNgoyjLXsM91x4V7GUsYJwCoWYQmAQj3LKe3CTRFEDFw",
  "key17": "3NNy4NLc6VCtZJ2BgGfaqHyPQng5S9rJ7KQHcDZKf8fn14dv7bwsz4juTE5f9WGcZzHFxCr5zyEWMUk2x6TBX7mp",
  "key18": "3dTM6SdSTqnp3RYTRqXezQz4ovdLAeJRqUtdpkYg1QBWQu4NMPN6SbYpSgC3eg1LXG6SbsDvPNzAypNJ9oZWxzsR",
  "key19": "2BJFbygdSagfaq18xfLNYEnBLT3AQz4iCarLDoaYtVtYHpF8mpiCt1GwbM9FhZXsN8L3W3qo3T8xCodyUyqeuuxc",
  "key20": "4QGvhxJab3iBUU6bFhR9aZdB8PDPbVNX71RCN5S944gKGb59LoVtsoe98TJBERvy2P7ZwoxcVwrsYwyWWkTLyTLS",
  "key21": "36VSebt43LdtgbwSskaV5F1WaSFBq9a82CaoM44c1LmWqcWk19Nf6dNtQxbUMe3PKFqWFUkZzeULA15FV66LNRsU",
  "key22": "3Hvf7KPbJsTCGpvXHayVT9VoVXcW2Sq8jFcqG5W6GBEC7xB2et9m6m7JFGdUy7z4kdvCyFHM7NNFuyxr1igo1Nsn",
  "key23": "2cJv3aym2UT6oFfxiNUpq7gyjzpsN87N4LN5Gbz2oFhowRx5jRk5UD366g1MFbA4JyuUUnMogDLTsaykcThdUYtj",
  "key24": "3pDAXmEKFiDZK72vWQoe5SURqj18vTJ3j1TBRhBrmvpfwRcqYbGjzYqWb3iURYSW9vGNXGRBkqLpuNsfQZr9Nm2J",
  "key25": "5Uy5ZDMbULjir2LXUvtv9h87Gx2TrXnvp8sgecZnPu9Y76FdE2iLjzqatQekjseaMsZPXd19Puq9BwWrE6o39avS",
  "key26": "2TYrUrUdEr494fCRj5z3Tom2fNrVXBH2Z8hqJBoqs8rnBiH6qTkjo7NeouffNSs6EhLTpfy5vCGtThDEHYkSx2pC",
  "key27": "4UyrPV5TZ1LNk8sVD7EdWXFTng4BWfc5LehrJ4UFjRKmHAT6xqVCbsD1RqSwg6y94f1GaQ6SfvmZdnJsrsrosxsD",
  "key28": "2pK25v3eodJta2vRfwVjGBBX4tSA4Caz83Ey52LurHH9Fm87abDyQL3KMuTLidtWgAyndetegtRHStUjimkHoBiC",
  "key29": "bPyAWBhHMRDC4S2whcWFtAUFnKKn4YgGzKzWfV8oJ6ADtCchibw4YPrC3vs1ndpRG7QTEEovEzjYQeoYL3UTFb8",
  "key30": "22PyThcEG9zUwGAgauHpWWzsbQoUFK3WNPywa8tgM85DrrmqvLpZym3n8zEt7VagShicoLwFzuGpCV5XLjpdhoF9",
  "key31": "5jbFzpUuZfcKpacRfBqMyqrpnUFPqtzJw65n6qunxmqkh1cedZfpAyZnmAuFumhj6WM95ZEs1P6w4ATE49NUSPLq",
  "key32": "5wLq1rPmCcdkuV1U8qxiTC1if9Y5m497t2crmTUhxrFX5R2Zk6JkEJArWnzN3s971kK5TPApXYe5GksjXsovCTNj",
  "key33": "QESzb8ow3LHA3HMx1yd1FS4otRLaJHf44gUKo3dxMYfFU1FxuXiiJSkGsuVhN9WywVm8T7Qmvd8L65eSZqM6aGz",
  "key34": "4zgqxj3BwTKuzCFaEHhcmc7LJXFsMyK1JxkQCFoCjPEswkpfpNk4ngwt6QAr1PPZAYbY5DJ7RWCH7ZaVuTr4zC4B",
  "key35": "5yvrWcejAiDkn6VERccRPhSyA3UXsqqh8fyrNFJSVoDA1MYzaa9vjdtvVowCe4xNub7CG4BpcsELnnzmpvU8R4Ax",
  "key36": "2ZgYiX14np6daMe6CZf3ZcYH4MTRaZi6qf69qnEk72qrHoFMZdGhrFQSFniANMswXCK5FiEuH8F3XDDnFri1JZAh",
  "key37": "62fGYs9xf9Ms7MKVf7wWGSVYT47TSPqKjHy4nMHVptUXhjec55geQWfxPvQPwYgX6UKGpRDLs1671Hpeu3hogeFB",
  "key38": "4Tc81YSEkvTuNrwA2e44J3K6cAHUL1PTqawKkhjLS6NzTZrr4Rasf7KPxa2VJDENUCxK3CUCKHo8ZbGBENHEyuD4",
  "key39": "4JvKyDwNjbAizUJYbLyrSXVoSSykqhzAaNr4SYGGjvSBBm6yBihty1BP2HHDX9BAQL1isKYZ4pZV2H9yHdkyjwUw"
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
