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
    "5jNwdvQhXzVyswSgLGDTFepSLT3FHTNyU6tnSWbskt3GH4ZQmX3SAK9ERnvYk3Yv8RGD8Jj6nYEii3yLFEE66Jgh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nmJKUFXxoYijoY4xT8BRroKq2SWsoDwJMCAWFXJtcvx8pwAYu6WdXx3WXq1Sc5ytfGwFzFaJUeqsNoPqJ9zP2fh",
  "key1": "4LxnvQR2JtnaW7pV2KyWJBVcaBwMUdc6VNWwR9qskQXSs616bfYfKFe36yHsxHEWwQpSNTeYk4Fb1uScZHvL915q",
  "key2": "2ZuuftojybigMCeYfNfscpbMacwFpPfo8rXkRn7Cb3xdVdCY37TeyyEa2DTeASeHy7WXGRJZZCnMM2cQtQqvJawg",
  "key3": "4F7tehmZLs2f2fL8tfbW7PNwjzJBJYuZyYAKZXAVM9dTiFXpV237wFPair7vk3qWa8mU5LGCP1ub7M43Gt6gbAHF",
  "key4": "4Eixe7pQF9VZGMHx1HF2KBV9q2h9UnvtoPgYRMgN3mnhnzMeY9U6BRVg7PvDBL26KnVxqpEQtucQ7pewqExeXAEG",
  "key5": "QU9ApU94iNvvbWPhx9ctpgKw17hBEdCig3M9ePdp3WFvDAzq5djHqweM8uHENihdxNw2rN6Cm1uqaKRfZcZsGAg",
  "key6": "63fgw3VgBv6BzvEepRZnZMCAiEyLj9dJsMrprR5ZXMzsduQz3GpbzpbaHTp1st5TCMe2NgovksLHQivd5NTZTYhG",
  "key7": "5NVNFySQrnbrQEoHZBoFFyiyMhZ8L6rnkprR6xBorLWgbw27tU8hFkzF9NJSkWkNHUncrRN7qg46GWZdiRycowU",
  "key8": "5ug1NodvjFirKrCzx3YAjFVzBaNeSa2e6Qi2SRxbrYnaR3HMT9D5gJvJ43oK5Z9auJytrYiXFFmpnVyuSJvaPUsc",
  "key9": "5GuhEnNo9UaXEnUogSxDagNcqAMwkSfXT5EfB6HkcyGAkzgJuNqzG6SJn5pDcSDBW73hN3qrUdeQNMD8UvySwVNd",
  "key10": "2puLytTiVMXhuY4s7VSEW8YYk17fVU3soQwCgNs6dMsBQEaYJJbLSuk89d923HBiyF7LfgVNaHwzDh8tZGaap5Pj",
  "key11": "2QXGbgtHaLAPtxmVcguTGBczdMBTJJBhQjZG4hapUrDoFFeS2YpqsA4e6MFK6RDvZ3HaPgEQu4mTuYQMGi6qyG5L",
  "key12": "5N8PT2tP8MkMA2zEbYncv6PaZ67ptGCnsPyLzh4wq2XNGJUaFXW6eUw7QZWY1ak2Yi5KZPs94oFXEpeXku7LUVd9",
  "key13": "3KpTq85mzreDro94WGzCnQbFXEQ4AZC1PxL9f6jXtPTK3QKmHdiFnUYXJxtRXjVfJdGvgHfe4PMgQSBjwZsqgjiF",
  "key14": "4TqEMdWXhrrFVEELanTQbBLzgg4oJywUzvzo5ZjqV48AHE3QKsdNPaHZufcgRZZaiBauYU8SNMZDMTv9tXL2QuHG",
  "key15": "5sXifCbMrsVNjQc9MzaesnnnuEMaKT7QjkXqB5XKm1DRwh92r6NzTummeBESFBwCxE65m5sKbmvMQ2Nn9LPZLmd3",
  "key16": "5DZ2UsZfHd3TqRPHFUp1QcZAQMud5DWUqH6sNiiUtkxtBVQtFLZbbauMZEvKxUanZxup9VFYhBgmXkJHacRmxx91",
  "key17": "3dvhXLPomBYZKgS18qsvo3BQH9tv5EuYVz1xNrBwq7f1FXW2cAWWPWVzNpr7199twGKfAmPta8QTfw9z61cUce5s",
  "key18": "34FkhBq6fqCNbgiKeGh4TmsErcW1pQDH7G7KMZ9jN56mvdmQQkCCEsv64KvSX9QLRfpKzkodCx7xK4EPA5Wok5KJ",
  "key19": "5zkg7KyWXm655Vz3FfbbCdP26sJ2HgA6gNjwipGkAaF4tXqthCsHSr6xB6AM68nCaGiovg4breo7VcpSWzynzEhA",
  "key20": "BSJZR9rmU8MEi7bHWidFfsoJ3ABXKuPrw5rZNkec6BkYVgnxVCCD416tQdjn8mq4FJBFp26S1EUF8g7LH895Mnv",
  "key21": "3ftdwirHRnBjuCEw3pY4Q8tDmpKeBuDEwnUn68HU6t5RHjbm752HUagSsQ96mKwbTvs6K7mM2QonPbGTYPUbf9ez",
  "key22": "kuodHCQ6pwDHaFCgdJSUo2QVRzYMvFSv8QEfpCYkHgU176uLVfbV2vC86mnQtAiLGkVgtXHBxbZZBqfgEcjuXWr",
  "key23": "2zAwhAkJH4RDtzVfrAS7pui54vFuJ4Ps6LZk4CKbJMrKKRoa2jXTzWif2XEadw4WychLskpZnoii8AA5yb1V3dtb",
  "key24": "2fxG19eoVBPodiGpPNCLjMBiEFUwsZrmD9V3RW8gGZvk3Pc4NZXqf6tb5XZKrJ2ogEKfiVCSrSxw4ctDWh339E35",
  "key25": "ThxK5Xz7RG9MMySVDCudmNiW1ro1s94oXiVZKREdUKFmvWERU32dKoJS67iZ27Zk7oRGWzZm7NRiMG7rjM78XjM",
  "key26": "yYSudRwXgnVidGgcMJw9oxZ2zAzTZcgpobm1ykgZ8DyQTJomd5WozJmb6Z4ZGWqAcwBet67V8LckLsH7ee8b8Dm",
  "key27": "5ybZSHmUQW8RebcNq74Lmq2LFMbrBjUm3uMswsFJsV1zwp9woqLw3nuwVoERJBDoYYLFRRqv9BAUfi7yLNrKVhms",
  "key28": "53Zc6HGVT5Rdkt6CVLVZcFyugZCRUwtH9ohXbuhcyax64FFLxGPnZDkQAq2HSxVmT6q1zU7xTVJkVPDHxf7qfCLz",
  "key29": "3Aj9Ne21voFH3GcFf539KUwUBptVYeehzZfsxUvAxkxy2fbkuj8FtS491XQyLtGe8bkoPevdHy8FMmFH6WXvP258",
  "key30": "wtLiiBD82PyPV6d4QN3vSsWG9ZmC7G5m2DMVUHbrPWYyzyJMR5L4Q3PTmJ5EHw1c95d4AXafaEyga9von9G2Rut",
  "key31": "2BJ4TSwxDDbQdRYd2y5Hi25gNvuidgZfVXHzhWueNeDLKxQVFJWac44ht9tQvj9Re99q6kavcntVkerwr6eMVyPH",
  "key32": "5FodzJAV34vFbWiWwW4DKuJF8DdG4W8JNzN2Yb9otEMC3yh3zygpjtxodfyheieZVTSPaXsM5yBZ3Q2rTW7v5nt",
  "key33": "5LBfidTZK7z5Qd58CUPy3cL35bsxNnDyq3u8DGT2QUxo94FAM4h7AXB3L83oftUyyjJz1k7S2rywshWmkrQj2g9B",
  "key34": "4JRLTLEFdQypMMGs67i26xd48ejXDLKSaR1A5S8uauB51hMrhD99WprmmqDDcdaDh583Ccqhpy4duwa6bEjS1oUQ",
  "key35": "5ieUc9ouPgzaiATLSJbe1M1dM1YMqkXZxPnP8ubw7rwVNu2bZhy9QupywJdBAuughS2asQfCYWN9Ux2zhTXoVT2D",
  "key36": "4D2BQbMDhsSZkH2TaYP6sqKwwauyJczsFUS8XXsHpfUo457tTWowy3nZv9oFaJBkAJvjJ3cbMGBgkF9VMApJRb7b"
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
