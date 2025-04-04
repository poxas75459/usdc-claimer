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
    "5QTQyRCSe3rHzTAQrUxVcFyYFBZ4S4Ej3fXP6Pv2DJEkc1jc5QTWoySwA6vfhXMRoFRXBq3GBNJEfcujTDCuRS5i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Tv69FBDR52FvJnuZnntyKDQJMHYWLruwWdiAMEpM8FmCHfUMtvCwARA8D8kp93XUDbadM9o9fVwvcjQFkeFT4oP",
  "key1": "45jHxH83Qp5yuedqb18tvPJfJXP2muZvwtGbL48fV8djxCJrpuzz4usGmSAbQy95F6xG5KPXpprVx8DVtQBv4dEb",
  "key2": "5ouC7RHaNifVSQX4GPPu6S4NGFerwqUovZ1mmy2grqzdfnEPEoQiGc5Cdq5bvHGkE9iFdU9YiJGPeyU58xb52Zko",
  "key3": "wFoVdCbkmNHiVUPdwVYiXdC7oyBtjuBsWXApMswqJKyWwMeMTxdwrPQXQCYuUq29Eey5P4928bxmhpCSHYDLfRD",
  "key4": "4GA82c66WbptKHnaGbGRJpms3r4p4gTnvXBBPG37UqmKJJzXjHoGEtK27kbCq9h8SghMiYr6ZN4Zbd4fuV8E9mDa",
  "key5": "4YyZr8DtgyLe64JHjsJ52Y4GMsmGwuFfpGYv3BjD1wx78ayoJG91hH6mrFD4e6biyAQvHW86auwouYZRXR7uHaam",
  "key6": "Tg8fjz3tB5Q4J9zthcCEtKshn2oWwKi7aVA6SnLNsPHdt5N6vKnZoLVCSrT7xvgriC9wH7pMWAn2sKmsgy11nbu",
  "key7": "FQTQZaJbMkTU5SAT2gZcsV4shLeqAudnFp1YibJadd5J9xKcojZcHaJkg87H2cmRzVzRgcTPXtSoqcCFt3mkRJY",
  "key8": "2zCbzqbn8Yhn9dLVQyKX8GG2piXBKVNYmsQ4eG6X7udgXPj6gieh5miWZyUNanN31X1niJBhG2qJY8DynNd5BmaX",
  "key9": "45LSgFEkSkRpmzz4SSQavQaouWHFHP2RaaYpH2P787wVheGcdk1mDzhcqUHW1SvxvMqSVdtVcpFmYRy6KyY8gPqo",
  "key10": "SiS2No3HLBQJMhzZHbe98Racno6w4R7rVdLDiLNKykiSHauZoJ4Ubv4VLGpo45t2EndHkzyS22PPwCWuoQTBa7x",
  "key11": "5kN677zLEKTLnsrt2ZdSagFYHx6WuDMeWJgewZJ4atTGDAVguNvRBSNuQXMimfn3fuzCST8ydHFxDcffkQ7bqiyk",
  "key12": "z2isLXULMM8VQQc7gRRxAHyJhKdRJLs5gSuEtXy6LRmMhmnNMkqZg9BvUzsKcPbmM1Kq4fwiW4yz3ja3gPiYgb7",
  "key13": "3dwsmmDcW6u7a9pq9nmPiimPJHYomTxQiJZTAoT7mxCbVfvs6WqUGKeqakwZJ3iakaJ1H7uPEBcRjWuUj6iPy4Xj",
  "key14": "S8cRx3qd4VMD91LLsojfedTsYx51hY4eXc7fhKvt1Kri8n6qw4YtuA1F4LaasoJM3h5DaHewFzfMi6ZErdvax1a",
  "key15": "2eddDYzKTZ8fVZYto3gKb31pmBSARCh2qeAzpHL8KbcJUoCxsQyJoDoUquARq8mVJ68SATejtLofh6YJ6FtHALbP",
  "key16": "AzNzexyf5y4u2x5BgWRpsx8cx9BTfD75jzQ5J3VUfftSK81tK81xgvWCTuXLXjmfAdJPPfcFy33QqgXZcATzRSf",
  "key17": "2dyqJSYNBoXPbWB4CDVvhgsHr5x682NCBLa5JUWEPk19MGMpBkE5V3kgwJu2TQyvvGUCmxpKqLywAT9AU1136e1j",
  "key18": "3dNp2VMjwZzYCv5uYc3kPRKvjLYdpHmtYgdWxxau3ovsEyUyGNxC8uzCo532EuAjnRvjmztpeCRYGiCtZN4ZNk7m",
  "key19": "4V1CeqZW3ZpGV9o3BdaUeBeoiDvUaGmjbcDPs9mBNEZ3FHeqyDHXM53RDkapeF4sLfXyyJs8jqMsEp3S4Den214P",
  "key20": "3CBTs719Ey6rEKPqxWW97gG7WqLVBVCMvByjADb3p9FiJ9BZ4wPk8wJVbu8DHtzcKhzYMDJGY7ojCK4GGy8hCxa",
  "key21": "2oyjzKFWUBr7f1X9Jkg9STUyTTUBKuU2uhHvJwj61M11YNfndKgmNQ2HoUJuNtc6jts2joFAMBDL5e9iDyZDM7qy",
  "key22": "57aiQNLkQfBNehayU8sHFFoMSfNQBjQzMAoLKAAH5e6tjLbFeRNoaA1L2iLyiAfCpKJRf3AXy4bj2P9ymcAQnSBK",
  "key23": "5nSZB9JfAdXUrsRbPY7AT5Z3uNXHdcvKYDt2C2DiBU5VmVgLgE9juVHX5EqPMEyzFtT1FivmGKG7VFSjsbuEZ2zY",
  "key24": "5V2Py64MeJc4geEsCM9UDCZavH1cEFtxo1yTJw6rbjAvEANZE9vnfVYU6sRiPsNy96njeHEXDPwMW4SdtzA5BbuH",
  "key25": "3G365gQV3hNwrRN3CtaBwQPfYc1SSHgbgtujedhrxGB3JWABpMRsxAjubnhFPgQXsb3CiEdSjNyEUpPsPMTtrcHb",
  "key26": "2onJ2zzNSdh5QEamVWGSn8rYwCNG2dP6nQzAKvhdCEkFPQCeJZN5PzZnA5pKNmoPhKdihJLssrWC57MEavY6CdwA",
  "key27": "pUa2PcaLoAiUfWh1K7gNR2rWjLvktfdS7JwWcxUgtATfAGytJ5eGSojCxsFm9Fo6ptADxbDhJkesd5qxqQHoPuM",
  "key28": "48zVL2d5KQRk346Hrcsg2UVQR38o1Ao3fPQHLZkrQ8HRyHuKnPpHGfzhduUMCNqmakjM1M25RhoxBYJZwpgjaFAi",
  "key29": "27b3yvY9aQeiG6NR33rMasUnRJ78pNhjKdH1XFtkXmcNbaZsM3dQyCMY4okMv5LPFjVnHYzXcMhusrMkroR6HDqT",
  "key30": "617Fdt291t5ik2dTixafzc6bTCeaSyN1wJsbk4u97oGYW3ZcMt9bC2Th8x99pYXGL8WGGV16gXBAvtwCMiLwAxMP",
  "key31": "2M3RM9e13FDSCZ583pj5RtZbnDruwLkVntxejHY34XiqmK19xkJi3EweRKGPsq9GUt7UVTmoGYnunKvMosq7zvSA",
  "key32": "WF7WEwEUaYn1bGAoCkwH7fh3xXW9x9gs1qZPjrTHKnWuqP1KeYDa5YEgijGcF8nEjJn6xfrS7v52nAAx6aUbj8n",
  "key33": "2RMRXz2zM5R2F4DQ3bxkxjzEKERApTXy3LuLLU7fFSUHSeZu2kFJxKciSYqbhonxuyXaMYBxXhfvPbsAgAyLM2ke",
  "key34": "5iJcCiYYyc1DAxf1HaLAmhEM9Ecjcm92vhQn8oZm8gYAKZV2eqs42qoDjAS1Fua9ZZjgeuxUoRNwBXs2waXkFFfr",
  "key35": "cHNw5rRyqpKNji9RHk5q9bGLV2yh4E2vZNft9xDtqjdv4RjdUTjyr5ELgJm4skD6bbbTyZdbQtwN73JiQaQ2e6M",
  "key36": "32F9zBiZ53m5Wb6Bp7A58pCHUun8794bgdNX8cg1K8bMTwutCym1Faj5YNyPRWffYAbLAcRf9Uw7uB8TuTcAj93Y"
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
