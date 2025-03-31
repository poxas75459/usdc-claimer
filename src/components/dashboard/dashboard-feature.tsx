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
    "2PppzrCRfidPhNohtgW6mYk3de67R3Jhj6nDzeAucyyoS38rcjahr67ktRWrPbzeYZ7Bj8GnKeiBp4dQ9im6L9AB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jpN4N2dWjcNsNs4db4LBgjgD4ZnT4t7JeWzMj2CUthkdSPwP6duonXHDKGimai4vufMM4ZMB7jck3D4d9RzinH8",
  "key1": "3RTNFtjMfbPKt9LTkXtxox39tyCA4dAkohKPTFSxxeUZH2cJof2YXUHyJc3swUhrXBm6pu6pPUJKWBft8MCuik8T",
  "key2": "5QyTFvkrCAev7Viv9g23uGetUhZCr73UNJpnEEj6rTEYBWC65WUNqKJwPFus7rgcNnjvHcEdLMXbR2PZjqDEQKJ7",
  "key3": "4bZzhLY3xcSF6AYrT1yCoEMr7qc3fsSsvji2VG783q1p7kXtycYoPB4TqzR3uGZ86gnP7XmwBxA3GqURLgL5EYcC",
  "key4": "5VgtKjC7HvX5xQ8HFwtM6aPZKfkXFNkyjWBqbHoWVpSdABPw6tkt84gkragvRymsKjnZRNjBcDXWufrWYmqFDH3U",
  "key5": "5q8hs8oBNNJTsZBDgtPL6c5ChpQJkrsToSeFyzq9e92D9xzbJicq66Nqs7MfjLrAAL7uoE8SZhetxq6XyZ2XEe5D",
  "key6": "3DZy57zzXL9fcRwpaSRKs48YBuTfrdooMdtCJbBSKmBHCSAoyMG9xYPZYZnxpiob74fLBwjjtFma2ntjNvPsABCP",
  "key7": "3aqrPdxJbCaVESouLSLrhmz25N6pbahabQapsdDh9ouKw6Xf9Cdr1Pifh9THCJLishnT7WYAV7wYTRzDvPWY2oxE",
  "key8": "3FgQ5QsDDnrzuxNmcquxUXTW6kkKr4Z6NHaimGpQ393BjwbhWFSNQuycUK7gytwtHZdHF7AqVigKXdFCmqbsHvGh",
  "key9": "22Pbg49M8RWwFUC7NjiFUvQdizDKAsWzrhX4SLpDhaqrwVHMKT5VcYm3REsonMmZAhocvuj2MVeRZ9ybBVtZnuS5",
  "key10": "2ZJCVbJ8s9H4HTqssVe3KvMdQVAKEcFY7QNX3hk3aB33Wgjf2d8hE3ggx71k2trWcTXyMYTzDqWPDCdVRLYUs3i3",
  "key11": "5EF7tXbe4oimJDg6CAwVeF7S3NKVYct8HVUhzMrLcmLDXw4MFKENiU1G8yevZNVMzSY3bqtDrMHTmw4S3UgBAxob",
  "key12": "3i75BoubsPkhcZU5kgUK1nNUpLF1yY12sdDGsc6HZg9knUyt2isqWPe69Dt2LKtpYkxE2uwhqMmmoSeCXWATw6vt",
  "key13": "27Rkwyj6oGde9haLC1MLd8dnRmLjdUQ76zqWwxvT6d8MBSDVqcDGWMjYM5yDchF9wKTo6zPCqh6oVCuUJsVRr7T8",
  "key14": "3mgwT7jVPiDx1eDM7zUUDX5fAHkcP7ShEo7pMR98fGyGEfEAqF9ERmA3dRYGru6aeREQu82vkcchp6kdnUHAuhSW",
  "key15": "4casp7NYVYCbucWP1xNdeQMUmcZHY2UXNCMbiPfepDHSMezp7f2Gfpjw6X2dFJHtCSF8CobURnLtgxtk4FWngSk",
  "key16": "NzQ5bqS9BNW2QA2Yum6qYn6bTkfbfcCdJBbLxPKZAvXc33WgWoENg1q4Fesv87coVFSP24qh2LBq12rGpz21326",
  "key17": "4gdGAs7WRH7qbxM5NSehEcWgoJLNoFcUTPMCozQDqrfm9Tn58LLd2VTGyz6JmvZSfXs6SgsCjvo8KWBBD9XxYkgB",
  "key18": "MndW76DGo7bNMU2sJDAvdQHVzbdjHA2Nw1kg23o7RxFfdk5JAvMS7EXqZjdAxhGSEwrtmHX1MbDhCNAYYgDdrqs",
  "key19": "5pWPjpJLnUeo2S2Gr2kG7uRHJW3RtDymeZ9BHv5joVR23Vb7GZkqyuAWn45PbPeGjfM7hhoBsrfR7TfEoBEPjfCR",
  "key20": "2myPBG6nBLstYVoyZcyfv1uzVm2P8jbi8DVKTCFwqupkB8C1uWSqqRCipArpCgQBRoisppNR5empLdfQH3heW4o2",
  "key21": "4zJdZxLbyZ1BMSzBTtnzW4cakixMLWhrAUFVSmrnt1FZQRBLitsoD5E52cFTHii4TSJB4kmHiE3orXAQdLNahPUY",
  "key22": "mJxGcikhYjnqN72j63ZwMvrWCSVNX5TcixetVBVNcvvmZqPqKQYux7i1UQMH4Rd7TjbgGS9PYc21DU7ThU7wkRM",
  "key23": "5G7fauvvsPsjbthzhSFxetj2DTsywGGokezbgRwhgGduL8WguL2aRCHXMwpUREtpTtJxSbb1QmzfVirMWjy5wsAf",
  "key24": "4bnZkuRNXbupjveEq4Y1NLHRV8kZKbkH6Pcf25eR31aWNJxDoPjipFkCdiF1HQwB1BoBuXSFbf4QZm8XQFijwHTK",
  "key25": "by4LbYbsQj5p13Zo4iTTBn8SprqKdwDFWTxrXt6DfwU4JoGFP1B84aCPpK9R2SrjShgG1TBpowVg7H4wc3NcLNK",
  "key26": "5UTqpvft77f1wkw2Ui5G12kbdY9EQXfTJsThoLqKiSdeByMawWkcvcYvGeJq6nFZsJRSECnnnnqBuNnrjbZ3YaGE"
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
