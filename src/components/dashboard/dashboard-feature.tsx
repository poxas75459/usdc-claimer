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
    "3qwponNHKyn3cnXDXK2cVWmzSkvLbrV9xAwTFooa9EFVNGSshFzzW2UPw1tvLtK2s31t5spTz3C6YAxtXJDd81fe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cFqBmcGCvJGPSjzZcYuLnid13xXjUb6BXp34RRmPAYijhYb66Q9N3sEKrCrBKkCtzZPZTBryhKYfTA7dY1gKY2q",
  "key1": "3GZMBXiYeURSSxYTmRu6XuBZsVouia4Q47H7g3WzGiSKXrNnJbG3SceKTxTah3Y13zCu7yXnHWSgDZ32A9BKJ2J5",
  "key2": "2tom3bujjSfAPnxeuuUEVzcLVC5c9Zgmp3yHssA542nP3ZPne5oP2QeRpwhG2B8JjtYTxrNCgb6PAWsh34vUPLDd",
  "key3": "2htHNbsMHBCjXtJ49h4Y5TzxgbqendwGEdd2aX9qrFJH5GKGzVhdPAobtUH8AARb9ErJn8ChiBGrDXXN6oCPh7nV",
  "key4": "3nTJ5Kh6oiEH4SwatcWVAsPYidsZp63yGKdv9fKGzsAKzKZTexAJ8Dt8GV6v6CWakxBjnuHNCc4Vy66qhnRKaDzZ",
  "key5": "MvneSqHjvRfGVNtJCTe85kDpyVkWyNgFUJqKNUkfGTBruz2FjvmRKhGn5aR9UhsvbYEnUL1njFDwQwgLG8Bsyy8",
  "key6": "3fuGRqNoksapZPpjyWszsbGexV6wvHiRNF5jeQK2uNGG77Bn86xnbnZp9qRmK5GRimZqS9Qm8SYkvSNB9JtP8YN7",
  "key7": "5aZ6yHEFCVCsZGrYxJEHPgVRx85neaTyc5A8hvhT3r77MFcCpVD2jvV2TVji6zE3nzBFaLxxwVnV6w2rSSWS1akW",
  "key8": "4RuuBArfSEMhm6KiEDG972s5QXCuu7h91qoCA6cEfRPPruvPee9W2kosPkRjpPfSn4wZExzB4HcefAZLYNX22DaD",
  "key9": "648RzG4DD7L1yD9SQe3e3GDiVj4EugbSeh7dP9qaoVNFUhtYtzbFdyXg17upwCoxj7iqegPAyUQF9LA53rWNs3Bo",
  "key10": "4AwxPTD8eg7rgRZZ5En8WYsXN45mQsuBonR5FjpZKdpEqLeqTna8uHHFdjhf7JUxhzV11VTR87pt451XXAGv9Y5L",
  "key11": "4mvUV8i8ZgYFRH7CNv9QTEnET2izwh7wBBWL2dm2q2Y7Zt7ZmuRCAdJX9T84gXp9i5FbPMd8XH31JWEex9tNptkb",
  "key12": "4RnVvZCk8pKsRXSkyyNdBV7aTx2QhDNsuJTyyVbTkRm4BWdxCejzX5STfdgPMFBexUey4SVXvggYzYmBEkfZspMV",
  "key13": "2zgo2onLGGdqUwWYFknVE462DotmvzeKGV8TNXFXEuwSjKEjFvoARnUFhc5xnjBChzJi6pvrNjmyQRXCW7swQiQZ",
  "key14": "5HMSpSNCuMpJ8rRVv3oAiygjKp4y2symoQjUiMLwV1qAmwZaqsem3HY5uHHKKo5VyFNHv8ZYHhYCSg6eYzafBqxb",
  "key15": "4pCahCuAJKwGUiYE42TXwJDL7oWrSJkLvysSKBxMFBQWAVMZ3eC6wargE9bwZRaHhJJKantBg182VsFpXeHekpTf",
  "key16": "2sBtVEfa5MP8hV66MPr5NjocXj9rsbiqDYUpLTPAJxt1zRvLCVzgVtYioyrm5gHXDgc75AsC94VHJUb2zcxP6CTr",
  "key17": "3LxDyAwrtzBi3eJtrCrFeQo79XLYPUjoUhpbx4sd3Ntgs7rVZ3dWkEcgkwot3rkCjDswzBMwXGKy5xmiTkgGHzQ8",
  "key18": "3mgUxwjDg9RMFppG5XxPGJsxtLudU6qrsE7Pwi54tciNxcHqmWUgvrWyeCcLv6t8hbH5CDQ5AQ4XuU3ZENHy58Bs",
  "key19": "2YgT49xzWMaWFcrv5PkWwaziWR6Ch49hmnobUL4m4yBWDD8N2JBy781qGMTPViicMnDK6e76CUqvofXW9dGSjXai",
  "key20": "2qihgmvEwXv2bHviFj2jd27RtKt4X25LwRGqNwP4xrYaDEfEYARfYAD1bfy6bCLhd1FgL8jZvAq1yTkjPdHyGYxi",
  "key21": "3uiVkWWpanwqvSzztdsqserxmR97anZpNSRKfyVPZX9i28nCa1riQEMAqWtYMr7X5UmJPh43qTxS3R1ZTTBvmP5Q",
  "key22": "3HhuQUb536XkNodAEBfMNkD2nswtMuD5kJFogoTeXmrodKwbz2FtPcGnqjyJQ67J3hbrwXKfC63F91eaA8gcmGwu",
  "key23": "295iJN1EmZcPZQsDxGjbQqUv7tBCSF6MHG9Cg2VQu37LFsARQ6H6bvSWfUMpRLpTWUvZTU73SZ7wgrDs92gUebUJ",
  "key24": "2vBTYFKWZKHAM5HyZ1kmyGEbz6Nay7yxSMokLo2riogDZqBJzoQtzikcgVYp8vdfbQ4zzA3x3UxFJmFk6kkp44vd",
  "key25": "4JdH68W6Se9trEQKNGAiFgdb7KcHkos5H1fuKMMd5RYZPPrPdpBSjsmPCZLU11wmEBnJhgTGnqNzgep4PSZmJFHi",
  "key26": "5QhipnnyhcEkTzZkVnb4fhQUznouguc4SV47NZb5gq221Euz3xPbRt52HkBbcDoJRwD8xedMTMKdc6Nyt5Sbp74d",
  "key27": "4cGnHzKMz1dVy73Tqxm4pjUxxXUJQPdkFayPT4y4E4bM9QRyAPU1vcHn3zx4PHCXpi9KnSG5U3pHDY5t1TzC7Aqs",
  "key28": "2kUS87g32Hm9Y5S4XE38UEL4ARx1bQwRn67bdFxhkGvMincrCyWU7tjrYEuUAJcf9NzJTusCzgpPbThfE13sehxR"
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
