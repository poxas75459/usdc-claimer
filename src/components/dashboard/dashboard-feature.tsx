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
    "5Ywpd9XPJfCvHcbJjjPnM6phwMexoCcy2Z4VLw4PE51tZmafWxjDC1KoBvGbdEcBvXMXQ6yMJVHuobfbPaMLAz3v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T7QAXVE9S9PLkTK8Hj17TVCLZ82TLmYNh42t8yEkwojTCwpyJrHnP9EW3Hsp6vV1D6C21Qiajnk2Y1UAobhTw2P",
  "key1": "2VKes6sTNCvcTnEUj7dRm6gwu12f4JRMAoQPdYWtnzJis61Ecgxb8NbBF9vj3hPhC7dim42xKRXXy34Mm9M9Jsqj",
  "key2": "nGEiLxSyEKhXCER5Lue3EGcpk7LYSU2f9xstyvY3o6y3zhq373gGsRV1gvqcw8bEF5sNuSBDCVc6A1vQ91jT6qy",
  "key3": "4SEnp95qJa1YuWNq4FKupP8Nwr9xGdj9J3YrXShdw7jN7EfsJaPy1bG3RaeofbnTza9mvWHQFpo9dPHmPKYa6RpN",
  "key4": "4fAF6heSxYF6Mc2wxeXjpZEUb4uKqK5u7ezHeBkHqAMeZB7XN6KZJKm6ZTYCeRh4WBHYuW1u5h9QxmWiLRcwS8zR",
  "key5": "3KVLMVP3RrwJ935MCXHcuCi9kzAFHxdEvm6FcvFmp64S7JVHaCv6sjGwYCvnskxuM63ZPXSeYDxijEc3WukLp8FJ",
  "key6": "2UzmHhmhakRDRtKzb9kMVhhe1KB7pSjFq89BPNKFeof8PTxJJnLq8ja3uiw6rj5HwG8bTKtbY98RUhsPVG9FyjC6",
  "key7": "2yFEoPiUkHGPANTGKx8QTFj3bzuauVExgJVD7wNmPYQY3im6yHQGpZCxGuNJXPwmLwzficdyLxgZaC39X8W5ZVt4",
  "key8": "3qZDpb2oga41XAwHP9tbzXiAnzz5R24ZTuwoSDxGEn3rbeik1frC7ponCRcVtjQNsKbeGcq7uUpFuxHGdNpFQidK",
  "key9": "3Nmkdmfp3V2XTt43xVv4ifTzRzvnMYfVhNJK2ScFdkwxikSLSF6LoQrERKhn62A4H5yaahuW7qWizX7BLfDgnki",
  "key10": "4Q3ZuSYFpPsyx2SepVfQzBVECui1XDjUbTe7tqesnVBgwk27hWChCnhitfSrQFK2LGpypKaxVG7BRhQ16gQBnKe3",
  "key11": "uhgQ7v2Y34QHfr9DoEZfeG3NwE8Ju24L2Y15aULzQAFWEeP1fQX68FnxCeFVzzZZBxox3KnH3zcXVS6CDKndHYR",
  "key12": "24KZzxgpE5XMV1tehD7h74a6dMadsVZLGCi2YrQoh2Xud4FgxLoKxH8KL8nzEd49fPN1JDStqmerQiVHTWFCceH4",
  "key13": "PPdy6r8kdQYd4Hqnyc1EQrS48Q8TJJMk7aSkmNonUqhmxQ6r1bpZJQGReBuhzUw5W21rpqBizhosozWKYQ3VKK5",
  "key14": "5XcMx1wVcuKB8J2otCnSuPhWiUuH2878pnGxNhkFXvfoYG7jPNDjap4kjAYrVZpjaqdY5zEENRYexSdgakcaHnVQ",
  "key15": "5wQR1gJD8KSyceyE5T46WCRyu5G3nsbzXQmshE3TXkmKH1U6hWYatD9b9x1Cuoiza5117j1E9ihcc84C2HQVmspF",
  "key16": "5qzUVaGLaXdF2KDP1vMXbWxcyhpxnpZ5h4bL5TPE7QxkFQ614WwSAY99mn2XhBHuLkCMxbWsN3CGwphhfrBtyyaV",
  "key17": "3GWtrtnGbopHXxK2WU1vBFv5bDrAx5XSW9YBdxHPjbvfbVzpNe5ZTBgj2qHgsGVU5AxWrQYdnE6W8nvXCTAEvnE1",
  "key18": "2TrjrDLPzrrSZSEDRrp7GhoNNXR4AKCuc5corsDa8iKnbZWfyfi7bBkSKKvN2HqdRo23cvqcnh4ibCzkPasvfCYM",
  "key19": "5nZ16iaDKCeLt3cgJQnD13FmdZrdrPbm3uhGd5nUobSgqYAbMsu47WM62KKYBcbE81xTKySGBUtY25k8otooD4Jo",
  "key20": "2Gc4swhswbix4LgFzRwWeKUTb7YirqTLQcL4x17ygYfQqN11zg8RNz9VxpiK2B9ih8eBNNHxpkpYAcUggCeUpgZv",
  "key21": "emuGVcfRpRCMiiE8vqu6J2D2amUcZAh1pnuim2jWYNn1MMWTszbMDBSrL9SwPyDVDww6WymN56NeKEHqWtvnQHn",
  "key22": "2mFx5uV9KqYpZiNsQ6oc8w5JZNvsKWmiYaJp5x4BKvf73VVwXM4cwLVSuynH9vd8Q9SwgbntxtdhRYj3mXgvqbBx",
  "key23": "4hMYXfma4WhpqVXcmdMUbr4az2UdfJCzwzJPnfq6aHQacXUDvAE2gs9zrTq6qEvk3QY9igCaNQPX73vNUw2ueUnh",
  "key24": "3EFZjDmyKNaZJBKoS7JQRxoxdgxx6RtYZgvucp9FekxmctzfVLEJC6WaknqP79zepBdQgUmnokgmaucCgyixebxX",
  "key25": "2r2TThVi8Q77TcCQPP2isaPt1x5uuxH7L6Vfz59gdeSNCkEW6c9Ao29cQaKNyJFLCctvQ65sVLrEPEhx1VDRKpT6",
  "key26": "5EkiJu7D1jBEGp2JqwWRbZb9ZnwgiGEDBq9oVJPcHHHCnqypxWAhTVrjEMQGU8qmatG5sCpQt48Uhms6M9h31EeF",
  "key27": "5JcZ9TYUeDJz3r8jyFKcTQhyf8iBFHfGfCR7GpLk3WnDJpiCiPgMjjDvwX7Pidw81PRKT2VoA7zpyfwCnLm1nv14",
  "key28": "2zASNRNwBXRRD9W91yzcKFArPeHq16nnKVgKUgrgMjpCrQDCnxSb2aKiNGnC8EvQtt2q4486YCTYfqRUxZszHKZ2",
  "key29": "5hsioucwPd6xga6VnbG5rrK5inFFGeApCWTCaJTh15Gi1N95c6hne8Mw6giBciMxL11MLD4vbQYULUc8RUDX2DPk",
  "key30": "2q6bNjJcskz8RoQ919wXWTeEdCjpwz6nfN5WtuGKNfdHhvzPXuCRriU3WaZYU3DvYfga2cXzqFXv3UvX1qb5u68x",
  "key31": "5iXKxjUzo1CYfupdiwUGMQ5FGM1ugN54t7vKXSg6ERzX9VY7ahfJXANnbu5UgnEdmsu4zrsNorNgHGZ2QdUhXZSB",
  "key32": "2DKKfYsx7USYWR9R4jxLk2yGsjGbngeJ9bLAdwNqGFamjKGdf1wACs7AcxDxGda2W5M9UHwk4iUpcFWjMCZ3WbSf",
  "key33": "ZBNXX87RFejvvm49XWL7V2HeUZr6WLdG6XYjzzELzrYKUEkDMFPq6ZBkhfnTZEC1Z9g2g4puzYPPno2t8ui554F",
  "key34": "4c878mG54BuSLpRF62YJW5H5kBnqZct2Y6xpxNGXvxdqbqCdZAAYKEbY5uYmRvMVdqmGc9Ha65Ve3PQgyq1STviJ",
  "key35": "2ZyAc9R2nAdiwKbw253siJXBVg59T1B4e4dPSkfxEXyEv6qYb424tobebWK85DWPuAX6WzNpHkbZw5cjC9Z2cWJf",
  "key36": "3bq2kzu6jsuYaiUwasMiuMrKtM4xgKbR2RBdGqQDfu9dUNPfKk85LL8twA7DPvFPeXZcmdeu1U3vf12BEfwG91vh"
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
