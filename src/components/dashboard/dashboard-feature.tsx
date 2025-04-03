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
    "2LqNsWSfsJgsxqFViAQJBgxRo4JxtG9FUhyeU8gV5XWLzoaw2J8F3EdyYC8eXnzQcCAuSjR3F6oNUJCcY1s9jue2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uMdEHuJague7wwFgcFsQ4HNrvURCziD1tePhJn2EGyfxEcaFNxhLxkkLVSSmEg1rQTZxH7SWGjRFeNMSyCtaZ9",
  "key1": "2Sut4ENsS3yqpx43Mfir3FgBUNNncDSs3X31uM654WCKfjt3w7kHBXdDa7r3AHa2szZmtudbitSxvyupWzyGakw5",
  "key2": "5PQzeoXvafE4Hpxon1LgLnFSg2CMuTApcvzmrKbj2VZZFNBPe2m9vsvDDUARRwBofMzx595pVf6NrX27RcsFgWH9",
  "key3": "5x8bKGY7ZchVgd9tJxu2oQvUymiMEsALUexA5ksfFgVL1rSvrh4xwJeSiC7NXKY6xFHJ3MPmb8ryPbyUut7ggEAu",
  "key4": "nPA1U85LjCk1fwhFed8pGvuqfzV41TEKhxtvcyYHtRHfFGszkx9JgUaXBEFvA2fueQBQF7mXMsfv8RMUd5JQCJz",
  "key5": "2mAkrv9am61xq4Fz76zd548ySgQ9NDFD5SEoDjnTHsa6qFdfWAsvFaqFjUk25vkNyqCrWm66EJkV7gzWNTWcdQfS",
  "key6": "6pHr7yX89TrKtnaUqBfUJX4DtsyQ2ayP4YCPFHWNXSrTKEQEehevaeCoxerLgtBQygvqQDsjXqNijS9zZGV6jTk",
  "key7": "2pZ55rLTnoPRATT3JMJ19diKcwKAExHt3vYJ5xadPazYnX95V16KHfQcDRVNd11tKsW5PDg6aoj1QHmqutdpt8R4",
  "key8": "5cZhC3iWLvyHJEK7GMWbq7ZH9Yrw7aHW7gXFgq2RFMWPqXDRdsamUnTGddAwWJSfVqNdP8VuBnNPTkoL1VNA6xNJ",
  "key9": "XQrxksjBX1YrvEoHvzNaX1FDGqVaDcK3ZwH7dwmoWMjn1EhYSER3se2mDfdY9DK3kxV3yTsgGbcY7aWqKdqvde3",
  "key10": "5brmnNjVqEhGyvJ9KMHsmvX21wGTvJsWxtxvBJReEp5vj4Fk2aQGZHKQastYo6h8Vg62p4PM6MRAZ61Nv7seqUsX",
  "key11": "3aFJzArFHdQQhqMjNqybrdfyemoSJEf7DPCSdZHVRyaaPngZ6FvQ2xURZEmuPkPrTSRKXYHLph6UPkoFYrnB9Yk",
  "key12": "2DDSRvKg5mH176jqssAJZeJnZaZPfwJFZcApFxjGUFkfPLCuLYfjnwD7EXvNDgQ67KAqhGfn5aHUYv2g8GHmN6jj",
  "key13": "4nhmsxok6E4zgGan3rv44rXBNzzsvbMeH6Wd1vQZMuam5GEUNBkYn2WXSoPvkXQhvfZStWSN6mEKvhezvKkN7NQG",
  "key14": "HNhhyrfa8LfXdx6CQgLrTbfQWiBMQBifoxcm4Nerxn1mcW1ELcy7o4SDsYMoywui6RqXNRnawcHYCaJnePMGAYX",
  "key15": "4muRA4Ci39UJaWa9H82dWnz9TvY38nMTeJucXzgPSDXKyPtjiwikFafgm4XuyoGDYA33PdiksV8baTmeATYmSgB1",
  "key16": "a7sDsif7YiWQcK1KAiBF8jBjVwYZ81YBnVBp9BpcYwf6qPaoRFtquES6TNWE9CLbYukfx7Mf9zR8Hv5tbeHhfyS",
  "key17": "aJW6b1WgFui7Koo3Lh2LziPPwy4t6znHVHKC5jPEsWmRi4FSFZLBAj3GrBfND4Hv4DyyoERBtmcksypMTyg81Kg",
  "key18": "cngWANWEChML6UiMLhr9zi57H6d2Bd5UVbGrC71qKki1sNmubvh7s2Tga5dDQfhQdcVAHMyLvCS76h61V51PYL3",
  "key19": "58jDBYaKmAebiFC9njWDyetsYPdm24m47WpaExKPK4KsNDmfynv7pTAMfjwkTskNH3QEfWmLk9CvuXNRQNy5Avox",
  "key20": "2Hz4YEza7omywR6vfCZjZNZaGCJFsYVMvpmYzGojmdzw9tri1QskZuV4a31rME9VtbiUyfgUeXPwYQF5LrYgNhzf",
  "key21": "33CV6fYxVnoirhVUVBNU7ndrhsNN6Pk4vm5L1DC36QaMtpmwzJiBFGBPPwatFsd7yjuj4a7eRPnLYqzYEVcZZYLA",
  "key22": "3vtiUFC8t6QrsVHwXKxkm1HiJFUTiK7KBxrmppPsGh47DqmwzDKNgHT3GgmHvou1iosExxmVzL8V1rCqT2pLUPg5",
  "key23": "2YH3GSwFYR3GJ7CmWdKG1NvTDXVKKRf41Nx7eKFfRpqxhM7zMXda91Nthk8RG2bDF1ZLwFYpWwtLFQVdEfmW4ZSe",
  "key24": "3p1VneNVzKxE6awdMD2qQaLGS9ztbAWsszeteekv98zTTs9FTo7vVrtDE7eBW8TQhMcp49kYuy4Eko6Uj5HGVzWE",
  "key25": "3Tqd1KERCTH7BwAHoDHqiThAmN6UPqXxQeSvJ7q9p7S8noUGSAQhcmhinCagpunwNkLM48u6VtemttyCxXYFxp88",
  "key26": "3xrPzVrKU8LkkJMqHbHYqwRYFPRM4DGukk2biZLpep1EsWt1KuYMUeWrTFjQUSBqi8JFJ9YWLtGtSNjuTJQNs3XC",
  "key27": "arZz8wQ18LrbviCpb72V2TCaCKK5XDufKMVbdNuoyU199qwaTNfKU4iVE7HBjgXbuUsJftmQmyR87F19WUUzsPe",
  "key28": "2VZvKdHbP2cXD1meDpZGbo6bL8q3ypFC7Z2WjhEgJsphiU7FGyUZCJFKQraraqukSCnV1RgLgqHhKBNrgjPbXBLU",
  "key29": "5fmMxqGA8SWZHMTMfk1KNgz2aGrGmkpFkUu5ic4Hk9eW1mVxFgbLPtGVVGEuCGocAMKffdvecFcoTfD8mBmgDNBj",
  "key30": "4hdYfR1emkM7XVozyGtRDVueVY6AUc9U3ZtDRcN1oH1b9fJ9y8zSiWME9rdqtwkxKq7884JYJ9ChyNozJSjZ2XYk",
  "key31": "uPA9kW9MHKCA5E6A1Y9MzMQS991rQc669VKiv5WkNJytpkmUUGYTiWfidr2fUgUFFnhdgzb9WAxrfacq3ayya7J",
  "key32": "37PYES3dJgMGPG613EWScTBHvgJzLuNQzjRc569uVTZbXtTxTioRb4pJQy2jYdJMfjAo9tG6XGeQ6txTMxCVnNjL",
  "key33": "2jGGLNQqE5RiqH2DW69e7WgoHXKxFy7sZGPHVTX1dJDmpcdWusaNtAVoStRUUWZ9iebCXWhsEQtCQL4W4qVCycfU",
  "key34": "3q7rag18XzMya8W6aMmPcL9KUyk1GrGRMMHvAk3xsiBLzU9wpohToY2hYmFRXYMtCXisiDG1qzBQVd16wT9h6o7o",
  "key35": "3AsmgzwUmuoCbVVUxv2rpd9UTd3TsYxTwrNNk8A6SNMuw6oMeEDwLGR2rTbKFgSiJbzvpF3QyJhBucCjJ3tA5Vsk",
  "key36": "23Zk5Cfovi7AEXTxF3AAYNacXtmPeEKMzvTqbdNhwbyKXt93Etr4n13GVhA89Buk9V7Sw6JGB6YdBRyjiSmRaU5d",
  "key37": "56Xw3FE9X1Gz7ffNiWhDeVsvmyXdsB2RDYFXgsnu3B8w5RHQjsciVSTPYFc9B9qou1rFoTdYjVHFArcGmKZZX9v8",
  "key38": "4bu9oAXqPxjQoXCxstnHwmrRV2GZNkBNdN2UKBkYaNqwkwi21M3z1Xdpfi3m756bHwn8pfZabpuTuH41NdPqwomi",
  "key39": "4RzSrv2fFEL7yKj4iD8VT8zBXUyK5BxbGdwXVpcHBkqKr7YUwy9FBX7PPuuzEvhpytwotrdb9ydnAu8uhwVWCuW4",
  "key40": "2ZwiSkyvFJwr3VUrk5qdi8YxU3s38N6WBNFAWYeM19tEL5dMh69NgHHAEKJYm6CXR6QHyQ3qQfKH7o4jhu4aD5uW",
  "key41": "4bo3JH6iQiSeGcx2db3VV1jgSfjxn1vyiEUJfJTivZfjQXCdFf8aZvungAfdXfAAWysTthWqamZUReaZSVSJJiEn",
  "key42": "LjSDKaovJryU9hNjEo7e5ghHktbTEvZ7VLEFyZYZXYztkVf5oBgZ5Q3bW9MRRWP7pgVL5pGu41cmqEnrWB9jvaA",
  "key43": "45pV9eKkGX8bRLrzYCRCcPNaeE7KjutgJAjdfHxuGcPSLejPaNi4kWGTJVmWuZc2tHg7TZ1uuxJ4kCMVbKX51UJ2"
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
