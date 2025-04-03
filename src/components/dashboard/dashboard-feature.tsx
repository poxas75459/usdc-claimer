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
    "59ERsjmCSggY8NB2ySqa5npX4iQ48c9q1nTtpgFCTjqVJ7u4BxHjC2GdJrP142wzNHPYWMGEP8ip2ZX8iR9vVbQ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fuyycwQQbpvo38UHghYaN42THz47n7e2aMSiTYQozPf1xBpeRzsF3NaqHKDhACmBDYfxeL52CoWeBmHBpc8LJ3A",
  "key1": "3VdtNMjeb3YKj5dTNxaUDhs49aVrHv5QSYtNoyzmw9WfSP2NRdgnJq2RPV8GRCVSmG21GNVUDqSJXRhqUXeV3r9a",
  "key2": "5o3V13kUFwd8ezbVfjfcnTh6d2CFTK1X1paPN8HMxBA5CyzXBovsWXxCWeRrDtjTxvpYvjb8ACUi3eKeWtpa99hT",
  "key3": "4cM3ivMP8UHnFRvXVJRAW9VaHhZ2mp8HUM4dNd4wQyZzJtktQqAtyKreEkRWSuz1HfpcnFpV8f6P72cYb1EtY3XG",
  "key4": "5p5cVhBi5BrPippwsACYL3BUtu6KA9ktfBqe5r3LqmEESPxESPUyVfwNCDVi5w1XdS6mqfAsjNC52ny7fw7Yd61g",
  "key5": "5xb5V4sJ9H28SHBP9DYo4B9BB3LFbMFbBDuEFgvXmTx6sBemuJhR1GWsBiep8XMisHZLVpjrWytAn2sejHcREvpi",
  "key6": "3BkgtmExpn8ENgKH4mRDZeVYb41dYLv1H7T1unNNBQZt4THzyaTwfQdirezH3a2jxBFMscdbJdKLAKeCZr57Xbpe",
  "key7": "v3Cv4LAyU3bVEHpReVFdMHhndzX9awMnkgA9ZK2kGSSEgr7X8fZsv5xM9uUH8dL6ERV4QrWxvwXLRp5qZ7K34vh",
  "key8": "5h3MpSzPW4z5D57qmSkpNEPMFUYXGvkto7okqCpT5x78vGzN7KrXdbA16KJiXXZstZsvwMLH2te4tCDCpkzEmWsd",
  "key9": "2h2Pe2jhMGwFnB73DtSgKubpT4GbLJa8kUn5EkSQDJU1DwVpb13XFn6n6atcRp8k2gdpcmrWzJygbQRwbHqBgieK",
  "key10": "TJ13dTbNsRq3aRQdbDkLxu7pwNekgoBaSewqbW2YxbTZFAvNUn8N4JeKoorEWwNbqPbEUkD45DpHRT47R7xr17R",
  "key11": "4PX9XznGpeXmwkVciFLpb6YyQ6t4Q7VcuKTX96SEbrNootwXVQyHiTrzAurWS6Zhp9r1FwNMH9EiuU1nNgDrhowB",
  "key12": "AJxEYd8XWvN971r4vYNuB2UWjrRXZzWEMcbixvHQ59c7V1UhzotGt1i1x95DDpSWG7SCBDSb8PgZe8LFPd2z1Lg",
  "key13": "2osqUoYv2othifGYmaHBCLFBfHC92XgJscEn71evKafZGcZUR7h6yotUJ5TyQtNWJ5PG57i9J7Ygaj5oqfcb5V5G",
  "key14": "5uKoALBG8hokUMHxdJUAx5fusP1PdmvTUPcrskwXBmj8h7vEjLXZFBwxq8uPFzhZtgSPuxsi7arsWSn5oM2b3F5Q",
  "key15": "ZRcMTUuwtVX5DPS5Te4boXyf7Hx51XgZYZLGo91zBZPScPYBQ8dXW1KLTbHz4paEorCotTmY4BZQGj2GZaRBTDq",
  "key16": "5j7u9hvVMxmuEhq8FA1LA1A4edUjNErsykZJ9PfjK5kC3YnUPsK3iyFd35rV9kuGrZn1ZrcjNa2xSYheUikFGCQ7",
  "key17": "5EM7LnyQbW6CsDE3jYoK6nKDmPprKzhoZuj1A4JznE5TTEimU1S7SZXaHzq2MSw7fUbR1bUb67Q3MLAcirSMUbAU",
  "key18": "4owknQqxZpQKnriVpmPipP6ZW6kNeanQjKUoFhnrHm3TsJQ7VavZDRJrTSVNjnzunpKSJgoGqrYnNJEWukHTMrwi",
  "key19": "2ezZyM8oFTwK6VuoZvvbtY9izkxrmwwUp7Ky5ewDrGgy2MErSYjwwgy6LcLZGcPfgXedtMiCUAUbtxkRLY4kQ4Ki",
  "key20": "4uP9KuXtFUjAGcacsdsaghQ6bCVpURpWuQFTYaNkaV4eci64jioW1wFCumJNKDSqwU37V5BbPLxK9dejGAh3nuVf",
  "key21": "5t9vnh6CEApSve5EAaUMX4g6X3p4hh24jdKehppRPrzcndJPTfd3jbFWJ6Be1ZtpKhDCYmdwsqNGzG5zUfdN9Agz",
  "key22": "HEMgQ5U234hpH3Hui1Xsxe3Ep38dPbYrRJsHpikDeJetyQ18xF3DCWcYQtxq12RUbydvbGR5SkgJg2nBXxyYVyJ",
  "key23": "66EoYrepRSrUCs3oxM6oa69bxCqpWGtprraFisvyYsReqazwaETRUDrPEckW2bkmc7cX7HWQjtsYE5ga8heUtfvH",
  "key24": "2UYbdT9GUkhcoLdw8qiqRH3S3LpVy49njgRW7F3ZRRNqfifBL82gqBiBNJMoa9kEThKG5ePkQCezGUkrTBTYEdrs",
  "key25": "3PrbnL3YVkdCu6nvk56UJD5MgB86KB5KeXV68eKmDbgmSMWdtfV4MeNevdtRwbCLRrJuVqxLcuAdPVU8buCypiJt",
  "key26": "5TU3UjPyxuA9sSfzVkfD3rxmTDeBJB6i82WYhvhwXWVe1e2sxQ4cYfUxrRT39zKgKhRBugkkKqgWzZWY9Yu9F5mL",
  "key27": "4cuWoHzRwFa3YoriS2XrK7k7pkrd7Bo1ie3HhZAf3gtC3qnAevheKcHDPnAV9zGd3FQRdqiW182QyiLp7Y4ZbxHG",
  "key28": "3KQfiwRyef9gm2SGPEJeC44Qg4CBNVoA2xaM7EaYnCHuyZska8SMKt7YaXMwu1vTM7bbbY2EU4CB4AT3EbGQpEfn",
  "key29": "2uQgya5FXDrSdvUaBaNcEHqoir4uydedwFDXMv7aAqjspLd8Jc5piDko54To1T12jHqZqCQR55QKcxUr12X71iTz",
  "key30": "oMt22uHT4CCfouZda9SrrEKts4BKFUP3aBLyqxTYZiY9Ca2fDJvDF8wxdgcqTyi4GysX4ZfFJhreue8R3AvXH3c",
  "key31": "4zHqgByxUjyj9ryo99ChKKfBsUHxSSwFDhUQZiN9SKtMvmYjREQRdfrYXorSWyXE71jmbgR4TbB9jkN8xBJeBS7X",
  "key32": "2poYPt97viWvgzuPJWD9angqEn6xPyCkLJ919urPS1M67MnDQW2vwRG2AshEQDAemdvVUPkwXJ6YxGyBJUP5wkCv",
  "key33": "2JNa93enqrZbUmVUXC4PhMcH9ZMHNhnfHS5YmhkqLra9qvkqbAGwj8MXb5spiYTdTLAFvHxUujqFgS7PubLcVZu9",
  "key34": "4e9VgpFLL8WG3iZwoPUDQDp5KVJbtSzj7vSmQQknhuBJyh4FniFWUARLSQZuHcgcjm6M24FgXjirtqL7yiDh9seZ",
  "key35": "4fxosMLTvTPwmykSLjWygqKYAXhXEJgH34oWCBDUA4W5HcKbxeH61zhoCtnABpR8B9PQNu1oMVJjdRWEi7N19rqJ",
  "key36": "4F668VNoESjMaVptmpL4hy8QpX4bz1fgRcpuytsE1dVYNyKGcyT2Drn7utGCbo8vXpCQZYgFbzdvxJ3TTedyVCPe",
  "key37": "4d2EUVm1Yy8zDAAWRX6Wc6UPu1chBJJ4skY8MMQzEiMCCdLxtkKfBsVkCA4n2fh5jqUvJDJ1n3yi9atyMBwQVa5k",
  "key38": "3i3ixKL4reCbz46f8TigwGQHMbY5SUqf1iukLgPtaqcWkDXJYEW4rvE2yW5Djh27prCE3gp6TvouAQKPwKXiRaoq",
  "key39": "4GjeWwEsjpYEZocjhXmJrt19Kn8CtTSCDMRVgzPLgXh4H3bRVaqqYBPkChrt2ekoDYpbrPWHU3GwW8T5FHMe8mHV",
  "key40": "2PsdX6aXMR7nzn7XVbjyBVHWEonmG1iTrVto4YHaXUKeWumwb2DgE8wHpW7ybFKhGPpVPAxBtf1XSP6HS2tXHh57",
  "key41": "29BvFxL8Qo6qfSewA2XHcpfMH5DEbTQs8Vm5GkpYGEVRwRz6znzZf1kVwTGCfEBb7jnpo1HQREL73Xps3Cm4aq1D",
  "key42": "uMXZYYPzaWespQfitkWz4zHvGiM8XhA55i49CrbcaBCSew8aw8tDZB319fjLvkuneKP7LkoNzVnvNrc4VYhBEAp",
  "key43": "crXL8dFvDM85jk4pSHRKFfZaioHt2x26giGKh4JoL1yKz1B7daByXPywfnUj2SQRrXXBADLNSyUjxUQifYv1Nsm",
  "key44": "5D99QWV3rXZDy3it1MQTYERKg52FnQvvcMhjVq8pMMyM4oTJufh4E9bVjytVcJYFQXLtrsn65N1VAYaToHgrivMg",
  "key45": "79LnKBLQSnrJsV8inLJKbqCVGGgDiQ9BrmsbxsGBiiwY9qLT3vcZU1We5cTgY6D7nfrVf3hNKxecS9NRjhYTzde"
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
