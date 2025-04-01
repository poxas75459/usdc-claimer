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
    "44kawzLkeV78yoRP1CEJZrte6YKfgKFwpNUQ8XWnah5g739AbzKaUwgSwAjQaXDmDgY2fUAYhavpw6ToYRRzfpvv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XF7GFzAJUCJ7VZSA4Lq3Wj12EG9MigLLUqUqDZVtcRBmB7UwWNuxNMEoTEz6wkfis7e6Z6oinPkLgkuTKmGPyp5",
  "key1": "2FSM3PGqnbmk8F2tS7EQUdo5GmnXtzLyrMb9fSvZG4P4aezHFZmLusS5VeQYbyKovH7u7jTPMAhN1ee9zo53b4TK",
  "key2": "2eMurBJhFsBPM8jxR5f4WQKAa4DpA3jJcQ9RTTt1e1sLVgqYNLHJBF8G2dBRnnpD7fueM2R1kHbRU3vAEUyw7JoJ",
  "key3": "2dzsVmtgZaMi7ygpNDtW7Kw9TaBG3zFgQxZe4xJcCG2RLP6QkgmQcCtAbxqsmKYKyZ8YqSb2xxAp5Q181NC8523j",
  "key4": "52xcA9HbA54geXb7hUeovSracuV8AmHyzyyBA6CeQHYY5YLZSXpPYkVteG2hav1nC4kGH8VqnUrtsGR5ky5LJ2oZ",
  "key5": "4vKKRDS1AcM6dHFFVsUxURn8fZLcSGBvTUzxbQNyx2aytaxbcA1tjKfork85Wv53itqeCoLRw6m8KEEgL7UmyZVA",
  "key6": "3QZ7NzePVWmfkxZg9GmfVNcDUw7pAA4DpG6YseLPuYq4RLYQkTmnWRWPqngNCigaKStuTgkJePMySgFQUn7GEoDV",
  "key7": "5xYSEVJn86nDEBhdjAaBt7ueX4gyh2pP9WMFcqsdptR8kM6uxMrzG2ihvgH6cScp2TMJqTuGZ2u9eeYEw3baDwrm",
  "key8": "4aZKgAFJP8dqu9TkjG9LBrrzUc9Tm2yPqqjDGrxyQZvqMaptJBprvFQP3T8nqvqZqDiErAEbQsVgJs4CtW3QJ9vz",
  "key9": "3UagSBJedhqQC4UsNdnR4VPJ6Ksj16QYuo6zwiT6eSJNNiMaQmCgBsWRw2JovomxP6fcrsWAcm67U1ictpndDNHt",
  "key10": "3x2YCZ3h9BoKE5AtCTJVJXyKSw5ymC4AXTTxVAMsL41s9hx2nMyFVVpyASVfifpULBu9m9XfoNA5nEww92qvfZsX",
  "key11": "4CpSictYNTA16ahbQjECMqkQU1p6hzXtB2Vc2iwTXmnK3eFCEit55WPPwDQtWTXz4gKoU8DypXS1sonEUaaVpyb8",
  "key12": "4KhgezappSiTKcGqWa9VvmgxkavH1UUuRanbVhJKiWEWW8uw6Qw994EZe1xQgC5Y99qjFKbCX8MPahVb6TQ6MupV",
  "key13": "2Nm4B4jDZVjjMTatAossnyR24ebF8qXiTEjZteJgoWycwT7yVXzFxVaD6G9GaaCrCkxpm3oCdMXiYPN9vzQ5TCMi",
  "key14": "5CDfBt1fjsTB3L3xuKQ2oDm7JN12bwFePeUeb5Bi4wJdjRUiMwNoCMgBfvqtQDsqQAP3t1dQgefcTo4qCTgxAMP6",
  "key15": "4pX3jwBVCEhCRNcdR8sF55JM917J9pPpki3kmPrrtmaz1YMWPFsed3x1Va3mG19G94sncEoN6JCeTjVKaCTgggBu",
  "key16": "25rkuutYX6eh49CFgayKnKFwP8MAJNJmDvU4rAEE8SWLVoPFgkmMbvjkV3wpRSvr1ut4NLdP2SRjcNQQbP8XhNKT",
  "key17": "xGg5duhvJyuG8kys1DCq9AYfchE9GCbhP5GQZGU6xtpoGfRkTPF96sqkJZYcWKnCsTPqW5fNT8iqbvNF2K8jfGd",
  "key18": "4QS2BHWMGZWsc2bptpnQLKw2Jo7Eit3v1iqCjhe2ecu2JWnR2cS4tUVyyYXQdM5eeZe3pRcnsaDW7mwWPgPkFQde",
  "key19": "bnMRE7hBfisYaYNoBabyGSUmLMxBx21fNZM9tQH7H8Z1jhDGDCm1Fw8nbLjHVbZhoZJoTGeVNpAQCCo96bJnYex",
  "key20": "3j6A5nCe8wfYwxtF7LopYo9Rmk7yi9jxipbdvfQDvhacqqZXYoJ8yxmCjHaC1zagWcXp9RSH4LypoSue8PqCUD7f",
  "key21": "3jAUw6x8g6t8VbwquEQ4fU3GDaQE1h7a8uetxv5DNGJ7AbSEyUdEuvG5b1ZM85Wyk8e37eTv5BoJprkjyGwR15A3",
  "key22": "3VpocD742rPZBBNVzkZF8mbcH5rHMFijuSNAguJafVEBfC6PFd2WgY3RPiqEPLGFV7ceKBu3PwBXrBbhsLm9ESys",
  "key23": "MFuJDQ5QkYHHDRkLSfL4MtYaS3ZePGvzY4PzQdByQgxPX26E7nqsoKYYwRKBidLoYDWTnbKwtypQ8PvdN8gd5KK",
  "key24": "DHHxncakU3Btxj4CVPCQYEtJsHBPbhZwcMYT78avwJSguQrvV3gCo2xh1hSZquqjSB12MqoZFXmjppsYzGD1aXd"
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
