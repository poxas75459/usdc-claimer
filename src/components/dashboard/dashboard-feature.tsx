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
    "2z18RWxDLmUcvWBmYWoQDSsGa5LkER8shuV9P33hFHN5LM4k89zfJbGzrKNYKdTQUgVRZtQqWdUhR7iUySGq5hEW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yMQCXyFzwRmGbL6TFsbRvtYuCW43VwKazwvmVgrSwgC5GG19VGvyiBvzWs1j68RBbro5pkuDkyffA3VM1XoBtvq",
  "key1": "2Y8eho7Bh3XYH26F83fsZmLxR5yXEESjaXYg5bmxsSS15kHd4ZutfTiyoqK2XJFjnvb2TyrnjN9SsosZGwy7rFQx",
  "key2": "5PDDmthjQeNPisxWYwChbyVen8DXMhtg1qStbBjVdGH6fQbUZmvjRkAJanqqpx4rcBSSMV6yfCzprMTyPhgSXw9N",
  "key3": "5fUh5szpFeqJ6ori938aPgzMY3KRcbQuSkadgunYQutTYQegCCEkvVrXjCUVmcXTgQC1ynjqTxaqSjPaxv5NLGY8",
  "key4": "8zcCVuV1DXdeTCLzMBoS9daVWbGQiA4DrR1kUzsEy3VpQytGYkwFLEQAfwgiuaLKSbtL2zcbsbuopXvZLLFuzsH",
  "key5": "3sGkFeadcz72md5WJHcDCsHkfDDNvkhG5574AY5X6ZTfxBZ62DN5s2DHXB4i1gJNkW9UhRqhP3fHL7tazHGPwD9A",
  "key6": "5z8LYbnEQPZ83tAs7gEYoRJXkK1kxi12PWDFdXwrKoGqRQAU5vuu9xJZs3bj5mGtVVRv4e3cMZGgpPzrHM3NwJ53",
  "key7": "5mcmCShDefhmE4FVA89CMcAuK1wPUYNQ1anKUoCb5jkVy45tpgxufa9SxvtF5SCbgdtK8jC3c8PL4rEsc5rAyzf5",
  "key8": "3YWyPJoaG4nkc6fQNw2iQ7aRyRdivW36vZFE62zAG2Yv8XfBRhnZhYKTZvemdZoshxUeCM3nax4c3NQNwWM98nd1",
  "key9": "4S77HzNELSVS6WMT3GLgBgpY9Txfb816DdToePyvVzxeqjcnE5jqTGCW7Zz9CWuxSfL56dEXnTRLWsPHKFQqV5xL",
  "key10": "4kYeACuLkS97miU3i1QeJSZ5fPCp3fmPhNzDn8DSKV1zaEbfhwa1AuNPB7by3qpKdaYUM7tTQkWBfRmDW13Y12WX",
  "key11": "2haXPVaaaSiAkipMxu6Km3NJ7Tx2FbsQcywEzaZgNqetymarQ8gfJFSYwu98ETZXMBT7iP95drgSSMUQ5D6kNWUc",
  "key12": "NFgiQeHPMwwdADA2cEeCZzJuLrrJ62XAaoPJm37Lcn1DTVwdFpj4eYczz4trsbkspWBdekQToRYwPSTqJ4JKWnd",
  "key13": "5gLTc6HLScnspVdycwrFS4g4McD2zTixBQpNdoNiPDHPYeXaxZhxEU5eirwk5vzf6PWbWPN8PAXXPnYTYhtjLpT3",
  "key14": "E1AR9cYhHKCuBwDxoSzAt3GfoMoCLkLHzpEWMhxbdX6zDFcm2YLP41D8uHH77QVN5qgTAb4o9vZVbhKV1Q4PCrr",
  "key15": "5RrJBd8qLM2VhsvyD6TW98rsgUvMBSnHPzcq47nBxv2aoQMda6RmMQNgtBi66uLnBChP4MAwGbgDm8iRk6M4eMC1",
  "key16": "2TVyYJcyVBvriHnrMH7W7BaTqdpxrqY5vJZZRerevREHQZ3ck26Pwz4r4Ch85PfKBvMHM7FWJngZhpQPM999G4Jt",
  "key17": "5zHaCWZjAqi7QFidyFgiqTUKdFNRQhkL9fYCC9gDs17ryVGbBrmpGWrcW9wfGSjTRBuGQDB8XhAtiNX2QMe8RyEF",
  "key18": "5AoqUxcuoJQTsQrLxKjwW62Zpy5j4aJH1kNo9ssBF7sBCEzRNdpgxMyeSB8Ai84EtVwBtcjh14UJtkL2h8Qioqc",
  "key19": "2kNdqXLHWUMhogq7tuov1xv4xcu7oaxedRZp6AXHqBoBp2HB8gEuc5Hb5VuC8zjiChxvstjSs1PqSSNAqdLxaT4",
  "key20": "6Yq3joMNwgyyt2hBKy6DonXdgMC619Z3QPQtccHcJ1uuqhHHgEkvhc6detBCs5hShWGnEVyBs1tkzsXRDphQouB",
  "key21": "4LARbagcRGpppanu94TJtEuKrZYBuhr424MLkj8vuEo7aYGmhk3VpFLVG1zXw1GPpPxtpvbMYwFDz827PdMoDv72",
  "key22": "5YnHdaZRG3eNKBvrLE4j8VCCx4cibiVaCfok9dBQhiDAhmnmQuAb36Gi9nnz9dWnQFfuWNDmx2scdeqz23vJNWfo",
  "key23": "3U73thiWkfvCYuG9pHVm2D8Rtye5XUAnWc6GLbnzBXvrtYrvkrakYk1BfaqSjvKq4Bgs9efMBaDRt8KF4DEgTsfx",
  "key24": "5Ci9qAa1yDQ1o758xdKwtpWYJLhWNqJeVHasMmbDyng5WkHKeTLWs3vneu4FLCMZoFkJE8uf4BfZZcXXLHtk2N3w",
  "key25": "2r5qYv5uYgfns1AWYufoMXwRkCcmkWQbdkzTnF8am1nTLzvAChyeo2vdFbBsm3JciKFeWddiXNWv4oJWgHUAieqX",
  "key26": "2PmhZ9YwXrrBaJButMPcvwpqATqRcJNvNbgozNRK6pTnSyZp3jAgNdjaiWHhJmrpcGZaMwKoR9hWJX7xGr5cVFHQ",
  "key27": "8YWQZvwF2zb8HAp3q6WUrYLy6jHULjMKGJ3ZFPJreohkZNq7SH1dbusbQ66qdGFfTwGun4CC1mZ1AMdVf6neDea",
  "key28": "2nw2nYpR6QyfvJWeq4AG2bTp9KgHZa16YnHmxzNYrywk8tWywyaPMmNbbguajpqkXQ2cCbB437vNGZP8945vEmiy",
  "key29": "4LfRwL1ve8jAJUs27bGeZb95j1AHWRMkpJNCq5mV1dr3WmeP6Bimbi1eAhM2nRhPWzDoLoEbtaNo2fUKssZyKd9N",
  "key30": "5u6pTqkKMb74hWPwHSbrSigU4K6MzqCW52jFQ6zgmyCPTaXHwR8j7WeSQKBoQHV8vgT4hX7sQgca8aUka9ikQz9p",
  "key31": "zn7vf5bdsB3Zz8Hynqmp1dhzsTrqTdgJFgSAZoNQ5r86ErN8ipLc7g135ywW2fsiDu1EdU1eDQ2X7gjExuRC3xS",
  "key32": "3pr4ekGrYHj26jD9Rkmo9bp52f7bMjmhS6s7Te1T5rGEkH456cu9M2J7a2nMBT19M3vXkrD6HKva7JxLb3d7LWXZ",
  "key33": "e4ubGVYF3GPAL139cKfrpKchUF1dFwAhHZxjEvenfZg65f6qKQJYf8ruyggtcdz3SViPebL3B1uypaYFpd4T47i",
  "key34": "67SkVwspaNHtaETqwFCF1VGP3FYUBwAFxd9tbMv7NpNSCWSBFTdeCkKNfLfCrC9GpajoCRRL8UpnWaSrnoKS8bu3",
  "key35": "2MGWXVMkCvDh4cWu6z7NT8HLH69Pb6g5hZoBcv2vSpYR63NTforcjF2Gzi7JYrpXjWURf5jVoHnBLp1ivJJQGVZr",
  "key36": "ZRDwQUHFQxXv9yP8K9J7npA2CodrG1r6FyZ5m1obJahw99Y5GMoSNNoZxgn4DpuRokChtKroSagBjXUFYjd51tX"
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
