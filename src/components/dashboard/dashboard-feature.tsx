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
    "S3FVGqSBri2sHnhuf4aj13hJ5iBYQDshtVxpgLMDDD6F2cKTC3k3hJtS3X6RhwM4ndUHbtRWvQ8AX2ZMXSkjSyK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kBjwBEqCGAwMx4h1ZePDMGUWtREtgmDSzHAJ8sdJkwJLhT5mkZjrdgBQUQ3tCM5HANPbgowvCQwEiGnEnC4LboG",
  "key1": "3C1gEtAkR6DE17tornMbZgAwkewGtaKfBPEV3fEmRHwPuQfRDQ14ykeK8fwmFGygbuhUgqdXT7khF4U1jUMLC5vb",
  "key2": "4Kb6nLCXWvGGV7PkzvzDJSUgYYZpnqyhQ2jBYpwpZM2v1YKXbwqMHuVrKnqLDSySPWSD8gxfJbhMehhoGe5nA6UP",
  "key3": "3o1QEJzwacJNtUceqfL5dnnatxfuqi9NY4ku9CzvCa4poCfV2PhihrJ7kXiEPtyEQY3CtNVDNub8iEN4VUQc925U",
  "key4": "2ntV83XQ2m4jGW5adUJZZeGHhqzTWnnqpbXAertyK7drsDZzw3CDBRe5DJcvvtAGxSufg5jXNPRSdbbtzPd2frxV",
  "key5": "39oWsK32QwebBmEHTxpnWsqf72qLFAprrFTJYYFbSqPy6Pt52fMRioVNhv1KxoHS9xBM7ox9MkXmQaiymTTSh3G2",
  "key6": "xrUPqRhjTMva1urQpYQL1AEyQXT2F164xoogMiAvsTqdjVpGwRgMFh2DPrkRTeCZV6EiofnN14k8mctmsYS1cFT",
  "key7": "28thQh7WUm8mq34hYtLFRavuKeKAhCneF53YcftoGxP7i5kKXxPpBa8vLcM5tnzpJer9zMTJBYgnMTtXfwjv5T1B",
  "key8": "fk51GasAatAowAJu3ia8hNwPNJ3B4TvU2b38DAnzhmu6GsrEYRS7zwdVbSqBm1H1Kp9wjT3F3292mqoGoPJegGP",
  "key9": "8XAD3ZitVNjDEsNKA83wMLNVcQ6wvZiDZJ2qW9D3PRBwnzWuzwGExaVN43WGqqrBZDT5Sw9sieX6kDf69a5LFK2",
  "key10": "VpdwMYZcA25Pfg4cDn6oovozTqhjYE1sWv8GJ7C9w14tQPWuGWob8FEuVvXk1zJVHf8mFaTCQ6yDXCBCfm3qGYi",
  "key11": "5BLvjxEZmsF83ZLXb19PcJEULynEmXLJsxi2BefYjpJWrPvseGPGy3Z1YWsQoYpHZcw2rjA9N4uH1ACdkwBbNVtb",
  "key12": "2Vo8Q5nx3CS4JAyBVNoBP9Wd7fG7ke67NrC4NQjzzauyqgAn8kKodLJGtH98fUVhngZJrs8xjWbf485rv6RX45ta",
  "key13": "5QbMSHkr2LhwW4kSTwiCsBxyhtDeEgXjsEArKWZAtQ29bT9mKqDBu1TGGLRbCEyCDQFKMq76VmXL68L9QxswHDUb",
  "key14": "e8t7Cy1GA7iQRTQLyESNu3Jxft9twg5zVZHCszR1V8j9YkxrBNzQsYrtaFJZ1QCjaUQc8RD9o1kEW5RJUW3QmMa",
  "key15": "31RadqbgEwkAQ7wuw4M4XCcEfZJJZkMFkqd8KkoZHXX5rpdmgEpBXPPM9wKBWwTL5HRvyUmUBfuyPzHDHVPFAa7M",
  "key16": "32B8qJHk2zt2KRZpC18wTD6vdMf4AkJtQc2HNcGHbHvins29wAYs8wcsA8cKNFGCBT2skfwE1ddkwQu47RPpttPX",
  "key17": "2YtHvvx3Ddcv53E2yfFA3JXsVppTF9dyu9Tp2JzyEV2eLugYPrvdnYuzxpyMAKq1gpWjWpBVnFXQTts9SH7Lz47z",
  "key18": "2Rgv9yZZugSUmdbo14oCx3QGyaX9sMArJcqyMFv1YpcLUhUTVinstqe7N3j2dVVRkXD8FnK4UBQbrhWp5pzCxV4i",
  "key19": "4PvF9KZSRVZLuXRF66X5WaFWejDyMzju3MMJvY4ezdi8bvXYNS1M6sMcYKpVRtx4e57jbDFLFPuWT6bWDZYY4wpF",
  "key20": "2C5gbfgLqexMCCkoi8GgtUwPSDwxaeiNqUZCk38r5wQqmkRALxkMr44Vh54pigy3oPpdp7CUiAwY2NeMiHkrFD5D",
  "key21": "2Ba5LGkWBfF9MrpQRjCCYTCwvGK3AEwZk2nXcw6LUAPgWFxBc3uSa5Biz5EPfTeh3ffuYDDWykY6ZfwvRQC2Ccvu",
  "key22": "5HkTPsBVPK5vdXtrquPgKfrL1vXCEuGAaowCX3MefGmQn8WNDiD8SHRR77hQ6SG7R14HkU6877X9wxdbJGUvmJzM",
  "key23": "2n9E6NAXY7WuvPmgB5taVhr1dnPRrE2VwgHDR42AoEhGizaS5kDfGCt1ngsCEEr5937JeqPzju4nPRnjYcbfuJG5",
  "key24": "3JkbDGu8fVpE22PLvxPT4zNWXWgiZnjCQnGDPoFRkkSEymDcLspLMm5dt1ANwrYSRFkFxZ9CkwmFtAXK3ypUh8YH",
  "key25": "3TBeWtcwVdDGwYK4qUeqnq6wwYW6fBR9gZNVTpK2H5qzsP2XgVzm6nSxK1Ufin8u7m4rNvo7LZwaKPtQ9hCJfTMk",
  "key26": "5LnJ1CSW9KY6ikP7G8CE5aP2StqkR7Bd35zGjo4svGEwxb9vSjMxjRLoxUDRZbUaDTmAZC1r3VLPs8kmzVsx3FT6",
  "key27": "5WFyqQvXhRSAcKd8mX775SSJqnfNJKVWS6frEBEd5edGUrs5P46KVK5jVCd2pqzoKkVvWSMKDYnj7UV52X48Zcqw",
  "key28": "3KAynpwmVTrdbqB5Sn7ax7c5WdaTnLbP9nNrqgsJSPgCAonQGmZpiPzxN2w9qw64Y7HVmVyfdH8bt5yiZGcD2Yr7",
  "key29": "4UadQtTbemYeVF76CY7BBvtF6qXbj7EKytpqo4wmV7aq7iKqB751MuoeJBncwDCEzGdChT27LKK1XBYFAWjPCGuw",
  "key30": "2ioMPqhJXVR2CTExfbt8jy3ZzqEJp8oQfK56HSUfHCh2YQRqFfcHpPFhNj6zdYwbzBTn7zXDZK96gcg9qCLiGFS4",
  "key31": "5c9ccmtvMXomEdmjXU9EEKETtRW41UPVrLnnLP5iX3erSesNut6EHAVaUJR1NUNbWKw5GExoaGUonnrFhZxpe77U",
  "key32": "3LhZA6nfftsVpFRfHirY2BodPEQBdvo1e2Wgxr8QiWyPJgojWYy8qM77JsvsMPopFoJSnfRpV7nGRBe4QvppcQkv",
  "key33": "T7xqQr5Bny1bNb1mBLbRjb73eZ8GrHo8ep9KLiGSgX8JVQEkXTbUBJYXuYCkRdbATC23ZucoxFAfQVejSbMMf8U"
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
