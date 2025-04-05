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
    "3ukrnX3YfVKD69iwkjvYeroT2wXNaW1gy18VmgmTMogpZdDCzkPt1sX8AMab2hNYGDcGUAdTnNc3b9GoVUtucP7K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41sbDerpseHZZv5db8fK6uJYBNs1AM1rwXbEPhxEwLvHaUcZVgc4mpo1ThKNpd4ZqYqSrXG1uAJaPjB3w73hTZ8D",
  "key1": "4CsDvEhEwJqT3LvSADRDdGtfjK7GdFm48n2iRw9uVuagzAas5vbcewLghj45s9iuEh88hat65NBUaBq8yLK51vpL",
  "key2": "2aYSkN81NwGptKaDECHNa32z4bTwGD9j37sZ4R8LbZwUkw4tqQShcqgmHTYsdmHWsi9MRRYbeBVpS5qdeJs6Zt19",
  "key3": "4NHW3aDKT5NZ9W4cQZq51VLmxT6Dce2LWnxnc8MBLPJmqp7eq7wqDB9qWiqxiTFqygSG58dpYyShhaFaXqA1Xv56",
  "key4": "3VxJ6eiekfLshUtGDWpCkdWu9AY6caEtoq8zHYzwSKZRoxM2Lp8mQgEwN5t23JLa61HowWUe8JsqG6K73ahAf7Am",
  "key5": "F1PYv1LoPM7iMy99ovbD6YZ3iCC7NSUJSCdKjmDTUpoxfAPMvTAVrptqE3sBAgPuYLHfHivoVTCKMJWDV7r4Kak",
  "key6": "2TijfEe7DAgcqyAGtqnXYTScGJxuHhrb331NGfVa2Ff658hPhAUKG7v9JXDGUmvrWyy8FTg9QpV3fQ2ioe1DU4AQ",
  "key7": "63u63sn8vUJHg8H9S7pURJ5EcwUg8XNzsEKMuxZGJWoAHQJzXVgCaqdtZtgCV3b365HDxcCopVDcWn6R4GBYFRtM",
  "key8": "4xerUHn2gJ7zizzKpwKVcqsmhvyaPo5fDenaWzrjHG3DdNwqA7gFmttSHbtg1KkopZmHQfGfD2gSXbDEBZ5rcXGN",
  "key9": "2NJateGppaQQKuxrUqChm9n2vDvgaDHVADy69vHF7tx8RRDYTNrgZnAyjBE6oCnQC4FQegtppVeYL3eCEigat3sM",
  "key10": "2gKUUexT9nZmwqqnfVqBiCoXY5WXsehb2kqzA2mBeGVNSYBZaU5YDHfj3e5LXPv7im9HV95L8DBPGY88pUsoiZcR",
  "key11": "af1k2o3cgrTJyZRjbcLkAzKeRkShR52Lujpe4VFDm2bpTZsY5ZCkedC1SCMi9VG9Qj3DyoKpZv2eBJCyXjq7RrW",
  "key12": "59GnDq6qcbXyK3oHubpi2XGw7Cau7FpyqcPra6Dvr8pMuaJi9VZaDT9Bn9Diz49pfM7cDX4KPRtX6n9tKNiPVi3T",
  "key13": "2otdEKUeZFge4o6z8nC7Wxz7yJkypJ2h2aovfdmXVVWpAbonRuK4mkGVQLuxrTMWNE3Sea1Rhb8Uq9LKGVJiBjUg",
  "key14": "zzK5T6wydVCpPiBMn2D2TtVKVGZ1BcVo5XhLtNPCwi2Z8GgabAUDGDDQFXnpj33CkAgZQ4jzaXvJAm2RPj1NZq8",
  "key15": "3i9r4yiiYWgz4iKQPDExzhABtXv8phpJKwf3su2KG5p2sFH87atLNWo3WjSqkrsMaS487VhLyFkuLRGSrvcAauo8",
  "key16": "3x799PiWxHpLNVTDyzvwa317dv1f2dUHSpzWFGvrkedwZpstNw5xZqoinZdWQu6gnJhbZWoPvW1xbCoJFVtLPCRz",
  "key17": "GHVq2zwZH8HyTtaByTSfyKoQyKKxJB7ueB6DxNwDkcCEi9zdUQEc72GvY3idmh5VoLnbS24ULMUdNNPvdSDBZUo",
  "key18": "5ZGCnrx1covBK8JZqZ25vz3xT9tvU3v6v28VLdfza9rxv5vyV8nRqjgaVkSQXG16oVLbkKgwuB9mZLNHzWhsyAu7",
  "key19": "5fpTeBcZ79gwKwPhpkT9MockDoQyYnvxZw19UBWtzqJFxvEwxhDQ6HYNFr8vGAY1fb63YAR4wacpPxiieWHKH27m",
  "key20": "3rWh99SPGL32wm4eoMRw5BnfnWTUJexiK5YQwSapAttMGJRbmegaetx9TfvcAKrbm2GuWV8XSSGcWDJLjHfofy4",
  "key21": "2d5dViKQfvShPabe7Eaq2cD9rGP2Xsaa2YLo1CXpPDgUgDGXKGyzrEYBMKiYpWPkQEKDZ7Q7eX3HarNto1ruAWn9",
  "key22": "TxEi7JPvV2DBFM8LhudBbWqcqFd7AUVXikXPDMvh9eT2MbtumQrdNphm6aK68x2fxP4L6wqUShCohtZmLcLBhdy",
  "key23": "TqAhvrTgEc6FfVtEDYK9npx2wLhpfV4oUrgdCuq9WtdZRoBt4dErBYwh8jmkBpdZ38K4fXv6cQuocsbrpxeSr8d",
  "key24": "3ztAjfLHZjmi8ZEFPgV282sXZ1bBo8BEspuLq3JW8XqstvE1iME8GaNKCcA6P55rUS8CVnFq8TJsxegPsCWQPzbV",
  "key25": "9GD3LzzMCVcgvkATpSR1kysSBv5FwGHcH5yNQehkRCyiZ7mV6yiJA9e1jb3pZgTXdN77XgaYEqCnTS3wwZcNZWd",
  "key26": "f7RmgRiMMvxxgoSvq9raQp4zkdQSwDMJgeCspGZSRustYaa4sk37YSqLHiENomZd3G14BdQRPtxy1TsDB5iTUDU",
  "key27": "617Q1Rb1mYrUk9ZZyMMpkL3z2oPoSADJRfkB3hxeNybKaP4424dBYFMCiBfpiTkmpWYaP1L9A8DuDFL4qMXzKvi8",
  "key28": "4MfvGXzPdwYg2pZbmfma12fy3UkUfWV9qiWuz6q9ZytpYrkGx6oigP4eVVWGHCfszuGzfXWqFG8BRwgTBdVH4fKz",
  "key29": "4xpAyFSFcZaiUqj919UAvBo2vE8sPxW9abkvdsAmHPwdTFbW2HrEULJzeDVLv6w2G8677i8vvFNFsCw9Vf74F4zq",
  "key30": "5ecyppn52yUDeouD5v3FyTnmwVSRSMPwamdS2TrwESxPKNZ4BsUn4wPdGzVVs3Jo1cG8EzsD43hKpwcTuAkRivFv",
  "key31": "4SwjuMoeZH8KYzM4QHLD47xfEoHKGLYZNiDPvPH4wJeEQ2hKTUhPXpaYxWkrXrrENMsY1988Nui3uH44PEJMk9oh",
  "key32": "4zFm2nvYysaF7akQ4osdwzxJLwofufzEGacoHqun33Upgcsqo7M41f449VBdxzZThSnEAXwKVCD4PkuVGNtSLYB2",
  "key33": "25mZSMSjHRc7XRbTDnpRDZFC5ZYZPxxr5Mz6qh6hyeUVCJWQGz3b1gi8s1dwsJwhAJHyiGDVqQq2ZuuY6WFzx3gZ",
  "key34": "4SBRUrbs8yjMyHU44m5nWyZxn18rSBXpiRWsPnj3RM5rpuPRby15UmC1SWGCsqxiwS7TzBemmVRNLAs23vryRVra",
  "key35": "8RkZ4RAfyvMfy2Y2GqgL5AqBxzw3hgn1RammSfHjb2Fq4icp3CK13cq6odn7hL7vEPWYWFKoUXqCX8j9owfJRYD",
  "key36": "2zP1ZhTVAiQaAs7VzGrdMHAZB3Q8E6UMHy31VGsMjy4p9d8bnm4jjUSGfEnRb1BKJT6GN2MjVUz4DAKRWqaqj39A",
  "key37": "5tRRQxJJCe2hcXLcf2T4vrgUamzvhnJi4CxveRSX6P4fof2MbfwFHP9w3cXDXvtEqKQTh2mGMCb1mx8rAz9i6RvB",
  "key38": "2oLPa39s52pTeXgMb8ifECF8jSRdpxVV1CvpmiXoFSf5bDKeUJjtg5Pq8xEiyiENhnbUkqReegE24p9amxs2c7zE",
  "key39": "4HpRyWCEbGgrg3Zt9uhqMEaWW7FNaw8CQz4r3qAeRTrsz5tssJevxL5FxeUtJX7D6UjSyKzup5HxrZgWtQ53k5L1",
  "key40": "4hKEAbUn4VZ4U5NasQ1DLqzeDmmSvd9Sv4V1BtQcXJmQe6QB3LcztXWcAazKmRCqcjfv5DK58r8WSdzMY2QGiHC",
  "key41": "4ejGycBJo2kCudifZ9PHeCV2L8ZaYtEebSciyFsZABHfgy6Cg8bGtYsLc3rNZLBazhyr2tMy9JN5pHxzJK2m3MLv",
  "key42": "LkNJCqEeDrZAWENd2mUAaFNaN2hffJVALArpqmWTfZB1Va6zvimC2NGwVSF8PqaGLv3UrCXCEoqwJ3aCXY29WDz",
  "key43": "rQBb2xvorxTX7rAzAebkXJTzVprRotKo3kSR1HUWAt8B7oCyyRbSjBq3djbmv23LCjqDsJh7yj4NwdwswKW4yW3",
  "key44": "3Xv5WCB1iCcp1DGUQrJp94HLL3hNJMkGJaogzuyEMnkDMridbMGs6hJPSQnUvkAjGvEv3F7j1KSepGcKWPj3jSch",
  "key45": "3TiPqDTJXcvhgfJmH2CX16e8EcAiyjUogHdJ3UXmig8naw2abecDRAabf2dRoAEwybRwjTtMyWjtdGY6fajNUDpU"
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
