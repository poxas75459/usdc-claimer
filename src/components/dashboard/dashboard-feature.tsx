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
    "5cCd296xPTYY5KMeJ3ezmTLacmDcxqn4qtejq1yPpDCW5kwLGyoZGiiCbBDgVkcafgQ6yZhKuKADshCjqCKDztkX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QmFySxuuozeeFoQ6T6omqow62gyYdgtFcf2bq5b7xSrwbWnPrzsTqbptgfmDhB2wtb97gjkdVKUAD3id7HfN8cR",
  "key1": "5EF4mLe38pbfrAAhdc8SpGDAN6krn4FGcS67bF6UgEajVK6LDwwSYmTE9iVD459hTDwBevdzb8xLHc8wNAdXNeKY",
  "key2": "5jQEpm3zhiYt2iHiXSUtAEDL83XV7zyGiEYebcHLm79gXkGqsnyzQsKnhEUUZyJfMye4LmJqYwCRpQiL8CFaQurL",
  "key3": "4krCEYHNrRaQH2MHzDXWdBhwaUNjD44cyYA2QTNCkzXhibAStxjkWi11BrE5UWW8wWLiTnj1ua4GDCitouHWbLxQ",
  "key4": "54Par4YtgXyTu18awz27Z4X4SuvN8s6XwgXxHVRY6JFNwTjwh19Sm8MfPhC5C56k6KwFC8Rsdrvc7yapEDzKXjwq",
  "key5": "5LgrfUtgCjpHC9QG3SKEZTSVSKqZsvtyjgRsXZsX1c23AtdZ9wdXvmMV13ykurX6mQLxHoMuhY33WYkPBXyfDarU",
  "key6": "fSPG1awKjrn7YeU6KHnsGBuENScvkHsuMu4iwQfRH3PuWhmtRbNh7SLmvnUcU8m3NpgdbJWX7tzhrHrjv39KjpU",
  "key7": "3Dnc1aBhTFKtbD6T2oBwrXgEUMeXCCVC1MbNe6HGtQ65z1nGJ6Mcss2RiVxPBwFhKN58idUxbVBztiwLS7yo3c13",
  "key8": "23PM9TYS2as1z8Y6vYve4ZFPuLAQBaQUVdMtFkkPreEFRH4sKsG8gkPx6etrPrfUXiz5aeLGvH5kSf3GayJmmqd1",
  "key9": "4EdbNRz471SFbHNYj6fMGfmTDogeobVRjAfjkDUYoejEXD2z2inQPRSLuMTEeJqvJkeb2BqL2o8MDg4NKaYCx5qe",
  "key10": "Wtwpx8ACLzFMwy39dSsT1YoGz3LovFKJ9Vqtn1z88TakL3Q3CbUP3uHoYJKVmRSyytivEBZYZ6EbFsVTRXFEGbA",
  "key11": "V3ScHvZ5gjJcirAXo9GSWPZfJ8Wd7oFPsyKu2w5p4m52mjS84dqJ69HaAkLoGN3xknRWL85E1Y5qhGFA5WMTpcn",
  "key12": "6cJGLk1huu4266GiAVURN7FLSiA5DRpFkcbkdkrfMxfSuFL2o2B746gTozMgkcrC28KXcGQ6kPYBJ9HVQnhhbDi",
  "key13": "261QyX4MUvP4bMnLnxYmMJA2sKFPAco9NudCqt1bKL8teV5JMKJ6EfuhAKasu1Wiib71iLs4cofvDmA6zwicNddk",
  "key14": "JHg2Mu7JKUazs6i9nLoPvg97TEY2jyVepuRyRrkqWMRghmN99xZjN7mFyE3ot6Zv9zYDeHYuAdLpsXpvFXyGSox",
  "key15": "5U9ugD35LWeqBrRBMV8zfcmkHgeNCjVEvrQFVLFHhk3qZxueRPtuDJSDxrwoChfj64KrmhPvmSvKCVWc3g6ioe93",
  "key16": "WhPk4vSWb1wxNr9i7VYehvdfTjoHuFn86GAubKHrduzGEnNeNw5zY4TSKuhNHy1FGssSGeiufeCoiJNgfg9Lwzm",
  "key17": "4jYX7dDYUtJQJ4xLyGcGB3uhtG4XT74xn6JpLviPZUFNgWnc8XHey7vrWCVqwhZk2T7dU557XyHcma3KSU4VhSGK",
  "key18": "2caFwRm87DbyGuy3oJjzGzNBi3ineRPRRqb2AqQpSPDkkAy8ac5ZSU6yt54Sy5nSE9mF2M45ima67dniczpnFVBe",
  "key19": "YbsC3iZYRg21dfyWtvQKFTmongXsHadFuVziGQtF7NjRyeemvW1koAKWwVs9zPQrhcfvUaSZ5FqiSrHfNgahX5K",
  "key20": "xcJGKTP7vnSP9PzE8jAXT9R9yoRxJXizcJgj7YnKwycGjDmhVEivNvxTGYCKK5yQ5jnEXoagZY3UAZsv9QxAacj",
  "key21": "qDWV2UahE1SNGFdzhzWdhtQ4FiK6Xfd66VE7CrMMYfFuBqgeGEnSeexEx96ve7djyCmtMvAKEzBYpa7DURhccBU",
  "key22": "5RVZRf3L3rs9RwUVw77PrWB1EGZFPCGtAYANx9Q45jwWMLBW6WGKSaYG2uLDrUXTHmsdCKjw1evttF7JMAJhG4tW",
  "key23": "3Wf79JdoH7HozfEZ5YrmAXTD3ac9qrWVwgYf7GTZ4gXBdCLmrjeeBteU3nAKn6fkj7C37kAm1DvjBFVZ5qEJqvJE",
  "key24": "41iDhYfYMAYfDdp5pN4Sq4GuzfS6vw7MPvviauWFBLsW8HvkXo8MgUQRE8oC8fwMwzAWvkHS2MPZP7DzfCvvJX7X",
  "key25": "x2bZWkvc3Ez9xNMhNMdcYGKsEGmoRzCb2vEXfE9x7A6VdHNe64cPP6NQij1rc5bciE4HX3hBrnGXDiuZ7Uz7qzo",
  "key26": "mtmgoSDrDDNQrsgusp4gogY5kr5ukEcw9yiogWwddmswa73SgMaVHNYZfXVnnUqJaX5Cbhf42fTMKEPbj6YJt74",
  "key27": "1aeFsGxEkRKQoiHEgkiyJjFs2gszm7c17Q7vUnJv9yTE4QJeGwxhd9brADDZwHig2Lab6UnvN7UFSAEQrrGRErX",
  "key28": "5riVz9hWXr1UK75UFziukeTzsukB7rsqDVN8qkcDU5WqF6DTWuRv4qo6TvfzbpLXEPfep2ntnLdvrMUwMZpRMDYp",
  "key29": "4S28gJZSyF29rJvR1TkjggNPD8mskx5EbUtKTSV1fvaxdPj3zBBvfnrEWTecoDS79tjbdgXojjYXsT4YRLVodaeB"
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
