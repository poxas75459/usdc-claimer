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
    "2KZ2VY7ZrRqv2umUp78GaSY5RDNopT65CbyexeYrtK1A9wrfmKqTP8UqRstv8hVZ4SoNSprpu9WRGJyFzM54tyfd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CmAX3RNtasa8BDBMfTQvwXsqnFCs6p9cRamu3cahsggAMdFfMrWimJAvdx7ZzdFjvWy8bVg2ZPuSRf917xcLB1K",
  "key1": "3N3it93jaZH7j2eeaMnUNyTTwXSdkpK2PMNjpGseUiufinoxCJkTfRXsaCyxhhEpxgFSeUNoF6Kipnqf4NXUME26",
  "key2": "4F9Aj3HpAZvk3Ff9spLZAzt1RDJyKoUwMxwHs91CoGdcPa61NKoT4ZQiPtzkhNwWjZJ2WSExZbbgqFeqkJdnmmxp",
  "key3": "5m3gWQnGAJACKyLKvDKRSKysHE64V9wsKddesaCiNmyWGVF1d1xLGjaDEwQxWABJHrpCeSJ4P7A3Q1VHRxx7dXNA",
  "key4": "4kRsqTjA6wBJdh72QqF8EUSZM8NLVyNBasBfT4FChQrZiRtuqTr9yji4qMoZu7oCUrgNHUBHpEPXF3W8jM9tqd9B",
  "key5": "4jEexB3ehVLVCQzXA6kXaGeGDkuzPjgUwXTfm54yVhGLEoUTgPx3YE1uJYYArjAgB5AMTxFaFoQYHV9fZRPMXM2y",
  "key6": "3Hd8w2DQpDz517dC7D8WkvRYpEEEiw2YyaGq6vuHDoYE6z97c14RnYfYtENqtGuFUaWpXLhkEpHZxausPMHc1uUu",
  "key7": "2mxY6F9tg5rjo3Zg74tjwgGtY2dLB22usJCtEtiTAiw2H2D4CXoLtT8wcNinhDzJrifpPH87x7qwNspbvZfJ1w25",
  "key8": "4bJAqVsyg7xGS2rJEMmoJYTx17Fc9atFoC3uMvJ1N7KkGdidBhTqvpp3kYuZ7jhsFmiocuDy7jWnEfSqsC9xdRRh",
  "key9": "2m69jjLXJraseWMjJccF1Sn4cTAyBQUV4GkHt1o7Zkv8NiSXYqYoChgxzu1ZgSR2ejmWBZY5eut2T6hSyWc5ucpQ",
  "key10": "46yQu4JEvjxzrz3LwzxPcmLpzwBzYGCovbMBBS2jkFfCLqw2Wq4GMavZGnbN6zPpYP251T7NEDaKS5Fh1ZU7ENmU",
  "key11": "51FLztQZRC8stjPoPGNeFR6aDHk4CnTgqJEvL6qHxUPnUVey8PDz8M5b1Raoxf9uC6UE9cfUutDzbN9Kii73yTdz",
  "key12": "4zzxFEMa9D6N1wmPtFeuqKfYuDgEn7EVvN5SPFKseK8N63ADBwhVSmeQQJcS4ShmgtzYQGwJcRW2EW8iHVEn37Mi",
  "key13": "tDCoY8Dc6AZmUDD9UFZF33RfCybgxf3kAyv1fkTH39Bm5XoZxNUixeRR5H3Qtc2R3RtJGX9vqFhwdr89mHAkoDc",
  "key14": "Bbw6fWgfUSv5mPNMqXEebgfBhQskQBZaoeQ5XVwm9WDuRdGnf6shaebq59KMRf42SqbZTRN6DVw52LaRRwVsou7",
  "key15": "HPUKLJw56A37eLb91pkPmampRxkJDuSYThkb5tchXU8DLpfGEDtRZNaCbhtAKaUgGTMHGTp7hKzQPQkvu6PtZTT",
  "key16": "5EjyBQYCMCsv2CFagJFBkG7Q5UXQ2EpzxQzeRv7SpTRDpX5vtBetPj8NW9vXtyMmSNzi4ar1hN6GYBpzheQFNApu",
  "key17": "2St7wmsyhqoz7gmWXBRrxes3RDVHKDgzFHASQR3Dpzz4om6uBreitn4QjhkEm1zsd1Q6vvGLvkk4FnjN8anHoYFJ",
  "key18": "4no4hFdQgNaAdoph9EvvJ17h8CymAfoMtMhckyUsoRKADHvcvTPnYeBtiaNxcEV8RUnLhrsNWGRmNiSJiQfXo5eH",
  "key19": "5E9c9Eg6KHif2s3HAucysv9JGNpbokGCNbJDBT6wJP5sQyG2t85KT6A3F6aWdkkeJs7jR55wdbhgkN1ocU67Zrpz",
  "key20": "3F5fCyVwve83cUG9y2omSaYknLB1B85X7PzyXgd4Nx55NXnrsopjBrAQTJgKPKcJbkcSwpKaXd8MJit6JzqtQp1z",
  "key21": "4WkhqxbHptZTmMjizidTp5UMRtrnSJMn4z3fzAfZB9bQHDxWTfkGd8p2N7zuHTXyEqcZLxPvZ7BgJRQvu8tayZYq",
  "key22": "3qK79jVfmteVucjNd1wDc4SBnetPMxbbqft2k54Q1xa4qkQgb475PQEDsHrQKHqjgCmy81TL4tnDX2rXiSHibxJe",
  "key23": "5JwJouZiJqoaW9vLFojKMBKppfTPdqzVScErwGbCqjnSdBDqHHinx8jaFdgfoq6wGHPXw2vz28NMigYa6RDT13qS",
  "key24": "5FDmnwy9jVnc2tTeMB3pQ67Gaqp6oDXZWuBepgJbxBmm7TavCMaq6kMuaLRQ4iythekiFk3W6k33Je7F5HUYgzfn",
  "key25": "4i8ZUBVj1aLtWWZYtG1xmq1VWSskXFYTiuTuE9FZG9wvQEpDu4cArUCtE57iXFGeKfPFmsaVGjj6LMsLdpK5zEAG",
  "key26": "qcea5MdHsqPsR5dMDprpBJj3T7Au7bNHD53f3b15hGgAqX8tcqm8ksiPs25nfE5wS9ZRAdSdFKc2sJX2PxVDVBR",
  "key27": "5mrKgcCwC8vUUdLDx7MV1LfemCs7WqdjPMcbUfCNk7WZeofGkW46ZffTDyaqFKuTNWMF8AL1X6MdBpktGbmoD8u6",
  "key28": "5sS5fQ24GiXVYsHeDgMBBxF9jSXGuAvefFqqqFN6mwJmugr3F6F8me6TFV5rsPQ5W73GH8R9ZpQMYHFbgyw94DGe",
  "key29": "2BxeyMtHkxrSgmSZkLQALVS5URjyFGSxLuoCBf7UmqvSFhwNmjY6xvVpjFkcDRKioyhgpHVhVKsJyqcX9PJqBfRa",
  "key30": "4qc2p32gLr1assy7hWL2xu4eLtBV6xrB2rWs8HYzYrbjKv1tmU8SbtVQAWX2Xr9K25cgP5meGxgVuMXfMZ7vKnFS",
  "key31": "4enAsqvpBuPfrPBNdbPfWY9RbUZJ6QsPaTRmbhwkMowGHTknaRZYpnUyrCZix4kisq2D7qHjRq8owJQdyAKn1zhc",
  "key32": "QCeAx2SYVF7H7HySzY92tHSD8GMdxwic3xJmvQLGj1ysugWRn3yE8KcZvHqtFg4n5Rv1ymEQTXKyjz9WbNggoMW",
  "key33": "Eawi1LDzfi4QCx8KKiusm9QghnTVQdpcLTyVnK6bV3REJySXzirQiGTPqDc5vobDkxeixTyNPVvGFnw3d5Aaijo",
  "key34": "2RR7PGHAm8dxRLwSvkpXGvNExQgfE3QKnB5quUrSPEpvfkD3v1XfjgQeRHappYjQksGN3vPPWVBzRgLdanBbdMT5",
  "key35": "GvwXLkDi9W7cVkcG97jZ21AfgKmiugYZPhnd6X8JdrXvxVNUHQPXzmcofTBTAev7yh2ufhgNCt96j9axgTQiCPM",
  "key36": "123cvavoJvqXAhkt3qSfxtybk86v6APbBGytWennbo4BKdRC3UNpuhqBgYmxi7dYLpQQKW8QLFTgBCSwQo7cpN1s",
  "key37": "5nBJNE8VEjT3ohLavV1YE6ZqfrGiJQSgjzy4z5RA1QxpdANfd8hcmUbiwRBNamp4FuJgxVVHJdsH3WadqBc5uKrm",
  "key38": "5VoDvMLUPgfJx5uvJhAUtPqa1LPNSP7LscFNeZnGENKjC9WVs16qePd6MzjFzwDr6ngSuCuLutaVeYLKJ9KQ6jgB",
  "key39": "2p5DQNDsZmWyJ4hUAo7h7L41vqHRLEeAQVNY4HUJhtD52cqvp6nbUnfLUJPrwE1Xn1jtbYv1K26GZycFbfvGo54Q",
  "key40": "3GLpYcG6Hp8nKhQPgMwcYrN2epQtUAYHp6FPum4tRXWSFyWV5LcndqYweL44rAdPYLK58SRzzXyLYWKnepBPpjv5",
  "key41": "2WbKxBxubJda4W6niYnDzdjr2L6AGsqis26WAHvXxw7tcbX19B24EK44XC5wePWkgjHcGbmVZG4zWmaThQ35qKU3",
  "key42": "2Rssr5gvu9AVQAFdz99vdk6hSoGakXqfpyL7a8NKTDw7THmrsf1XU3grF3fESKMjGZZLrnRgtcHKKqPdhk72Z5HK"
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
