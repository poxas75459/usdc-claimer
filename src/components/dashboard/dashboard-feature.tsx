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
    "2omkYFCu1pcgxz9YwUiJuL4mfcB4QyMLG4GpMyS7PY2fbstoui1KqNrLp9MCav9sVLZkrXN7PHfoCYmqeYR8eMes"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wZDUuqfc7ysUtq4BJ2vvYD6QorJmEBoo1G45Nn1pGwotXnr2HELnCEK37CcC6uquaEzGKXJpF6ryvTXLWWBVvGS",
  "key1": "3RcBhDD13JvGV9hbNfwa21sw7rqTYU7PKUjAuYVjrYv6n6fSpZoogtUkEGw8vQgu8qWorR6E7vzbjDnQfubvnp7K",
  "key2": "3mYma7cWpxrC57XVrvEgZMD9zCdMx9nmEdsi17skUateApuwpWdHX8ZCwcQ6NG322YtVj9YijP42JCzkUfE54f2e",
  "key3": "2yrivy8z3AEdeDNWYCfm5mUwYtQqRtap7Jc2FtCpYmRC6vKJnyfcFk9FoXWty5EqLoQLXW4F62csWM9ieJkrxVEH",
  "key4": "2FunTPsYsj1tuDNJoz2BjRLPrKrb2KHpXiMrj5Bo6yGVjaNio2qvdrKEh6Y3w2U4yH7sN9TWkms5LPVCgLySUTh4",
  "key5": "4QGsNF63eQTG531bigxTEfqcrS9FW1yzi4HVPovFLteBP7bCs4DKXMntoCycx85HNYy6wqMizQfL83m3ynAdvXff",
  "key6": "4apnDcwonfZnLxgpmMbUcLciVcC5sr7V7wmtSgP9Kjfd6mQJ4FqrTResZPPvQnoETSBckeqzhaXxmanihGer4SgW",
  "key7": "R3kqgVHrkuY5U1Narbi6pRSsy9fmtgcVMWqxJ3UhTucZdqoPR4Gko6yCjXFctEZe1vF1v6VzMdS1DZLZkL3CFtx",
  "key8": "43Ws2vRop8UyyC2RknUXMfD3U4vq9LZZpL993v1fVEQrZ7GydnnZyreFESgoQSyBkNW2aseMMF2BWWosZhPiav1u",
  "key9": "318YFE14oYx9tqjY7QG4fwYge7cmVyqhUmT21bPMnG8FpLmkEVX2AFefhVN7vjUwwtw8eUd7ysDdhvBatME5ZmMU",
  "key10": "21EPH85z5f2AhPvwGzsNo1Pi87t3rH5dkTaHpW5P2HSxBPEVRwg4wMSkwNY5wEJGpyGZyNdBU629gxgrK5s8q7zi",
  "key11": "HMbaDBzYVXqkPcyqzwz33MnT85Txyo4Lwp11DpuwAgQ1ijDwBee5r1gSPFMThz8PfVkJzDtgX7z7dyufNvXdmFw",
  "key12": "2ZCag2vk5XzSWsYZgbMc5AnEcH8r4EGPFKEppcq8KKLsHMpcf6zchJnYMQ4hxa75aL3UVeQSkMV5kqLGBarfmKt5",
  "key13": "5wmwc6FnfFsDPdH11FvqJEZrxot9aqrmtFPmLiEXdfj36SFLDLcPxMHj9EoZtdgpKG1XzbxyE81Ad68jFmzkVHJv",
  "key14": "2r2fCKrjJ7cNCMkux2ixFLP37F5fu5WBFgUXCNFht44Q25CEixnyxCmpPjw8VX15KsGUM2Dms2qB4bgbtMLTPEKM",
  "key15": "4WCFu3MmDdSkjFUZY9fRhz9SdnW6ZAweH9LvFMBZaTfHDvvg72jDkHmcvcLT3it6XgAZCS5X9i1aR7REKRbpEYxt",
  "key16": "3EwAuDwi4mn3UGCxZhQw5eweS4fhR2Kb7RwV9Fifge8b4F7Q4EQsbckumKjgaAWrocNcB2RyVBT2dFcZZH21Fybx",
  "key17": "cupPMxBE8LM2Ayy5A8w2Mts94KwjAkYqzuip7iKK1wpL9Tf6qiMZbLccnVkw1oBjS3ssNQbyzhndNt1oYVQJCd5",
  "key18": "3S6WGJkXyn8vKYk9T8C7xKUN4wgcKiL3W2GmwXodx2VXfBFj6fq6GH2s8WqtMqD9w5qwB1EYbQZsxEDoQE9MFkgD",
  "key19": "Q5Y477Xg8skg4kzpZfAiumaduBJ5hrGmz8iUz82toyLiCJKeKaEi8Z6aC1wj48cTcrWikUumzwQsSuDfD9ExNAo",
  "key20": "2kjPep4dGzVHgsFsjFzuJmyLgSwZJizUgb7n5FiA9aPKVNQE9ZdkfTSJwxU6zjF8LEMszhMTNPctKJx7CgyXop1x",
  "key21": "51pPdKD4RCExShpfr1r9cGX9WtkEoUPLRx2y87kbgHGPxK6nHFANZhGqCHke6tfQxDbkGgYonUBQ6JhzwFYzkVed",
  "key22": "2zmmCEQ5QzQ1S8AYWLL69XTmis4iV3Nfc2EY1i9iD96tMti5pAsJ2YCjtXorE6Di4BgTZmwtuatjiao5368CiLhf",
  "key23": "4fXavhcrAhNKuYyzuS9qsbjCSnF88Yr3kZFADwhXB6cmEfhijZ1B6wrPJTSjPb78D6no4PpRx4Gsxq8sfvceU64",
  "key24": "24imCd2TQcke8Gph6kx7o3ZXkPJRt9uQ4fNs9ezt9UnxESXoUXh7PmRxoDBumx1QY9iM9UrApvpYXGRK17wevHvF",
  "key25": "4Vq1e7sMiuyn8KgNhHmGn9QFmawSRSWmRbMzoG47uDdYjLu27hnsskHGarefGFr4Qgg88N8vWfJD2c3tSFENXa52",
  "key26": "3xW4frXF6h1WbWkw7vRwVCYJh2ngRRQ3zWiFKKiw6fSx3DYESfSoZCbbm458Ct9U1SNAntHgdGGjSrjsvefMo38q",
  "key27": "5atyL3yi7WNra8wgZqVTmwtFe8UBuDiAn823tb4RPaSmpf2SLhWuQA63s9bPozGPrsee8rdmBY5hm9fexac6Gncj",
  "key28": "4KuonDJERz92zmXCLXSF21ST5p7QMQzyoutTzae56wqFvHMEbVKsWEqtPRGwd6eLTvSLxmmuNRyCGyev35gJVGrj",
  "key29": "2KysVpJbCJmKVvZnWgH5XD4H6XExBAmdt3ThcbuTBZhrjxtjoo8hyeQpMoRkCABVE7k8ooRh4QZwwiypYjpVszdX",
  "key30": "3pRE3vNu1nfZqgmF8xxvy67eZHaTJiHEQ3KANgfQXw1SVzCK5Ep2oqxzYBJHME7ixKc5ER3veAhM3UXsRk2XTHbE",
  "key31": "hFUqEXeqqjHVFr3BhcCGN9epREDeas85McqEZQB7LndM98hGp63oUoLR2Jm3ZaDfbvCFdZx2BJ7K1pDocMQaEJV",
  "key32": "4b5m3ooBXW5sJvzePXND6tG9WVZ9ZALG2HkSi8VEeEZaPWVtiCLAbMBzHRSTn4L3A5iCFx7wo2MDzheBc4kAY3St",
  "key33": "3Puirmzp94UFA9FXRv4KANWQN1akbP1okbjAKo7BQhhifXTkmZT6A4oFsqjxy6wFnkKxpDQRNr968ZvhokT97iwW",
  "key34": "2GVBMrp4RRjeYswXpHSacMzGfbJnkvPfdrQn67YVCq7g1ZsGZWR7Fny3trVgbdW18MuqVK4cqbSGT4bHjCaagr5R",
  "key35": "5aBDqM71xGtz9HcEHx3ycuDSU6Qq7fuVFagDz6socpyeVGzpCNYXfp3aZXzy4DrvHaghgnHwHCUc5GRyypT5RVMs",
  "key36": "qhGyetddCLESiG25DwiS3NSZHJELsBH1DZ7NEJYCqvz3i17dsfxWctUGESix4WX6Re2KEJ6WnbtndKMxeefyAjP",
  "key37": "3xvysKUfKGMz6Xip917DjZaYLAsHaiqi9SCFbGhNWKFbK43fSQYofagQQUAtWsM2XDTYbH4cAaiZJ5YeSYKsj8cR",
  "key38": "5kpogyU1zBvrxx9HUvsR9F1AYK6dPvUZWhEhY4ucrxUKiedbpgS5aPNaB7LNZATt9ShDYxvhfgNpoYXhYweMY9eK",
  "key39": "2JaC6824bFXvbwkAExsX8DGTom3D66ixnV2jcNmEjExTKoVDiY97ZXfyeRAaS2oUPw4a6pEqkZr78Vkm6p1TkjZt",
  "key40": "5CgZapa1oEPM81VzAhEKnS9y6uhMnquLvqwhT9Em1jNdVC8Gb5XoCJGrDJfQWCqBiDdTBF8GR9QCBzrwTAgk4RGG",
  "key41": "5oBXtwwibjkLnHczyRr44P75kQEyUpvnde7UmSp9CdSvL9qivtFknNBb5orxib3r3oAreRf4iZpeXUqY5jmPgGLD",
  "key42": "4PK1pR1UGUzd3QQ161z7rrCoZpQfF9PwxScrp1nvtxcqUUHcUP5PgtMzUQ51NEUfLiG1R6tGMtRnt2BMmk8ccYCY",
  "key43": "44zkhjZ3HHG5m4XLzTTPdBjTKp7VWEFgxEY2ZVn9oXCZsdyXG5DcsjK7VKdHxpK12bVSN4cMMK4meAFgEsXZMUpF",
  "key44": "3g3fBF4DU1ph8ZP7sXybpTomyAxGkwJZcqiCPct7aJsy7bAd5jrRrkhdU9fLtkQedLTkaLAX7STb2CmqAqw168wU",
  "key45": "1h3obNbkKKTrKsXoKt8xqetoxTVfHVfgAEuenxrp3TCpygwEN6d4QsAq93M6UaK92axdoXwuh1cknKxe8wgk7Ny",
  "key46": "4A1iePU4v7paeBgCfp6Cz8acKBL9x6zc7GBmSQ4CZfr44CyJUvNFjJ3CnVrWE7Mkm69zg22D66Hf4XBA5wwUgP2E"
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
