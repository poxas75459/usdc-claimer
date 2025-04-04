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
    "hZrjQbyxHniD1zynrPYwmieFu6xpfVwY3NTJHQk2ddViXg2TorFeZZiaJroeHsWcCNquDL3YRp7bKomjksGwdi7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66bkig3PWx7Kuh24eu983tgDbGEAvgNfXGLadEcVv5uizSx8sC9o9JiDzzXnMipUaPvd9QjsTFs5iJMANUt2XeYv",
  "key1": "3RQ8BBwphvhxuEBMLUcPibPp99CegsBskRLecHM3pV5Mo6kFDqdN521Ng9DeQDWkUVMuowTgxxi4XKWwPELMbXhj",
  "key2": "5QsToLNMFWVa7ksE9zyJYEt1acnz1q614Vp4NBPPVCiDCMxKmJhF6fvXPasL45vueCjPpzZM3iCmS7oM9p2EKMMy",
  "key3": "2Daoa1h1ZbGbSiyySGvtL1VnxtkXwZ19LsNq7Au9eeUrpP3VtNKAUGKER5B1cL4L2nrZvgy2CPUkGwieJBhfuC6B",
  "key4": "tRVKhAMNsRTE84U5UGWMncoN7wLLiC4Du1N3p3EXTDTp1Uj985649UEuxRZocFBHWNMwUhG1xhkVFXVXJ1f16Lw",
  "key5": "3ftUopy3ikBK6mMSdFhRqBcJNtVAfTgAKkanB26ZhZMiH8aDwEJaaHMbhUNCaGRSM7z8b4dwmP6L1EbNmSp3xX4",
  "key6": "2D4AGFSovio9wwxJWBqp7NKAHqmo2b33yvSnbdqkLMZF5yRbCvygFMWrt77g4ZVc2aFXsWJrpGej59QgymTgaV2p",
  "key7": "2BLJ3oo5Zijtfhc4h8Zh4Vrs9bzufR4kj1j6f4BU79cTpmvFCBvHnq8W7sGfnS6gpW51tcnUAyYZ7Zc7BqDdiP1r",
  "key8": "3T7sakd1y6Rv3csMi2bJZdy74Ajw1S8brY4FoTbs8JCjbygt4bdQFmYaaq882CLeiEQRa143TTzvQZpn13ouUEm2",
  "key9": "2upp45sWksSUHRKJKDzu33YNfyYeLDVcV4Q8yqKURUXG52HYThE75NnWFii6dtsnxidottNJ1nmBuWNrFcHkAFHd",
  "key10": "2SuFvceLUYqDC48RwrjhTBCD1Fw947Nhn9asDdEHnbCLAK35bK6c7u6JToxaCm6tnqmgwkoN4iuMsv8uPzpjqzvZ",
  "key11": "2L5YhNkW8tk1D8tKRkomUXCipwVm3aGSsEcoVvdEpwuWG8p6BGEoGtT6incxzwwF13nQyaNDQMcCzuZycFdVPWE9",
  "key12": "Ke8DXnGsmmUptLgjgJPgjE4QAVjkE7fD2jcV4wqUvkCyXs3sDgcnrEyu6yxYFvjcBsq73X8rRxkj5TPv6TVYEh2",
  "key13": "dTTNPgpFv7u1P9tX4S3bYG5jbhAsfHae6rFocxCjNSPUhy1wUJAnw5gcKjQrXqQQ63fu9nMidi3w3XbbawpqRXx",
  "key14": "43WWh12h9au7JNh75zz4GH4joT6tYBga2NC1zvMjcdSjnDKtiebXqZbiVxV1uxnv3KSiyX5bDRPbxnNrNWDosRuN",
  "key15": "3CrpG7WXqS37D9hYgokkKja6UpMxNL6X44WzNk2i4jVvoXim21q2Veq5HUQyeMMETut9ykGyZ5t8wJmT27u2qmbN",
  "key16": "5jE4vpMdDFABRY8peyw3wxgxjxT5WikjsDfxkdfdw5sFDDJF4wCFo2jnUUzDW8tCTLbuaCwvHp8yUWy1ELN4MNGJ",
  "key17": "3e1Jvm6spu5ciqCmhSRK9FdJyXStT5L19iuF4PX5bKYTczyRKTpwj1Gg6AZGavfkEj38qzemHSCVqNVAwf1b6Dmn",
  "key18": "WzvuHxEZqwp9HQ17hCJ4tPYMFP7pRT3WhWExmiwnH9g8t4cvUw7EvFYBunoxdLCmnSiJ3uDcmhRFGQMZdshdViQ",
  "key19": "3mxV8Y8rsz6ZCsHHHytN3myaZMXwvAEsMgiRRWZRGR8cTDe7B1vD3ccStjBMd7H8Le8QA1TH45SKR2nDmHTkeKrz",
  "key20": "26Mi7z6WBs5dRks8NuMjWw8qo9TNusVS5Wi8Jtcnr7ujK3qsMQPeHYGnJvuTwKh2sPwxcZe1KXXaZGihTxHhUGXV",
  "key21": "3ewc7d6VMgidznNikz5pbKTN591zuVRzPzeUhRP5KF3g2cdSecVBM8EVjpBzKiioYpPvQftdKsfuraHDtJxNmASx",
  "key22": "3Kuo8Tf4fHkw1fWpHMVkzbwGDcGsWruh48T7P1Tx9j3Rf4ukenhqyW7vMaAkZ37a1bqjaWfQz1nSfbpSzcgFaYu5",
  "key23": "3pyKfkuE1e4Bob7cySoo2vTamNqKYqcNqWfhzfq5ggZctaFyjjDJcLRUkKX5GBv4n8tNJPhh5A3nrSrvChJWcKxY",
  "key24": "4sgWzgQF926xNknQmVPiZNcPEiwsouW9Hg6oBGEhoBspHaZLdM7SwpNFux6rmnHnxk3tXoB8i45oBEQgMTGx4hd2",
  "key25": "2p5wmbyLygJFe8gPovKcDud6iYrx5ruGWAGc12McZzt4kaj7ENBMvtDqH2cA5xfQk9ZWvY81N3xxiLgt236n8qZv",
  "key26": "27byeZbsvX6XVRihtT5f2dxVdeiXU5es5JrtUxTy1c4hsDWbCkcVxeWeDu56Ea5wrLumr1NhprRZoYGhHbv17aQi"
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
