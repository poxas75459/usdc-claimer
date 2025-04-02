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
    "3V1H5howK61zr617xgxrMWJUYiMbsXn1Ti9QeQQSVuFESxxoih2Vx5DuiLciuepgMYsia42jHVT8y9UBdUfd7o7t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E7T1A8BF9U1hv85ocfPHhfgLviQ6wHnPRyjaLLSXuzivu1EHb1Hwigry8z1KMmhBSqJEYxddxWr52cCEn5VKGwE",
  "key1": "2UkbpGunFV2du941P7F3zAyC5i6XphuGSfQPjajaseZwg7z67KJi3oFdzdVidqnRKuxCCp9LZWQ7fGHrUH6SSCn9",
  "key2": "2fTJTTPLxLffsNREM4gAYivisdzkV7M8CWChyZfd9aUHSwQ91PPw7Jcx1EhNprSsLAC5K7gfaB51FHEfxU1Ubj2i",
  "key3": "2vMzipNVQSighF5BtZ7bjfcwZffeCCNYaF4DZKhmTX9PyBfLt9GC4bmVGpyP7CLvDN9ecYecf6WwriVjT4j4VLV",
  "key4": "32aUG3K9G7LY8UNebqQwvVhyit62RLjByX3DVhgEUFqDHkjEascVf2yrfRbVPMzXWnZouv187DJ1UHLZHHrGxBtJ",
  "key5": "3ghqNg8QddrPBq62TPN4eCzeTcMUMCfKhq1dsjyCvhecdgB8F2nQgtYohb2PzdLSgAhs3b6yFrTZthaj2hdoNmxe",
  "key6": "2DwRGK4R9MTrSKuFrGWeArSh1DYPjpdwBRF8dgXtJCUqx7hRT2zogHjztTUsLnmXpQ7izQPXtgcryS8KcQGAptgd",
  "key7": "63YLAfUQvsqTK9aPNtGc8EqWaMUyybwSPr3wQQfeBxXxHqVQAk3D51BuTGcVA1ZizLmCidGVjY4DsGcKpzjh6a6D",
  "key8": "3Z3Qvi6dk87fuc3caJ1Z8c4iKLfYabrBteJJ2Uar2dURUBthBsgboSXe7VwAroSnJDAg5cAJk2r34KVtGRZ11Q7L",
  "key9": "82D3LVZ2y7WiTZRd3A5zhEikSQgpnUbDmatGESJRRVMJM6csH73UqxHiypokBeEccta3Ti6PAKm9pESGTq3pEsG",
  "key10": "2xeXegXvwQir7SbSpgUaRqEzZDsAzNfZwiQA8TywDC1BFrfcJp2rUpdxf7z4tnqsmW66RSkif8BcKFgYvG5rntcA",
  "key11": "43rvNmgwwJGMHANhpEAm8NyJwyMWtRem9dhnGrjjwKAmmJTf6rfZrPC1HqjPuWJZNtbvY8aYEHhJ538MQfJj7RAW",
  "key12": "7AudBoCNkJXsQKjSBYS9WwmSTx2tQpKDeqzGLt4psbAakk5sRzUgbWnqR96Wc9vWSAD6MoYp3mu9R5bwFZ64AbX",
  "key13": "2p2w8aAYWZrZnJkG9XiMRUXPik7a7SrRTz1wgeXFJNGGSn23tRH2doMaXSQWt94RpqLh7PMnUoGqDDgB3ZeH8wnJ",
  "key14": "3mtdedN13W6UxxyP8JMhionYWJhhBQvgftbr3W3BPQPGf8MHPrP1qeGt8sev1mHPUT4DaoaFoKXWLgrzagMxv3gk",
  "key15": "mWui4DEyGjFzSnjxuxJ2nPpnQB47o1E35MmvLVKrYoJMr1PKfNGG15exsxnH6XA5Dyg7FMJi5enjdk9KDZ9QfYT",
  "key16": "4R8XXeu3EeaYiyzd3DJfaZEhhJbaBjarB5pZsTEkD4MQTYGk4nFYfTtQ5H9KJtrufJZ5iwvMXd6xCzPNCWnreSsq",
  "key17": "5JxaUekqYEbJTjS9kftMsFNDueu1YUBuKQcQdQptp1BfuZPwb65qTr3GENJmHn4ex5Fsp8vdMYyTDNHY4EBqzZzq",
  "key18": "33Sb5E4bfJdajQrXBFmgU5pJtJya27m63mFvvxcaGf8uVRCZb4YYo3FDDXs2P3LC4smin3qnigfRpzpUkHd5hAp2",
  "key19": "3zbHL64JLDjiLGfXhEFy3mzfk4T4Fn52RuTkY8RRMCkVm2F5qok8mzrUgRLpZ6A3a8fKdDZV4do2kiRRis7BaNK5",
  "key20": "47ZuAGZWpr5yYRoAYr2PcZT84NJTAKD14ZekGwzBhXwKrW5LezDMoLuzSgMVyvtsBAymJMi7GKghMxqV6Vn9hBzY",
  "key21": "22LrhE1wCTRU6wvd4cgTiitzZiWWjt5DQSiNQkdQ2B3UT5F3H7m3eTGMFNE5kN7KPjvmw7ehhvBKTADDJXZvFBk8",
  "key22": "39tsBsKtTQGNh1Zvucm2R6GgexiPfq4BfEuD6EDG8GuV7kztg1PYgcFontiMfL4kFNHfhjDvxroiUekoSEpmwHbd",
  "key23": "3YvYQmYfcW33JYusmiEBFpUYxtoBnx7pp3ounDxcXNv34KrHA6UfDqKo7fTWPAzYesBbtyjj41tiZoHXFNaGr78X",
  "key24": "3RbkVAwAL5cc2Birx9PbWPhgN1B7ebUxZGQJkuH1BWM8JTZtED3eLCDtVrURtUVGw1bzwY5ATPYy7LjK7w3X2msN"
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
