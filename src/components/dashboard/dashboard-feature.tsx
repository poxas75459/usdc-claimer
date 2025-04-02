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
    "3U9KuiJAZLxv3JSrtrNvRLN2iaWmkK7jLa31mbhik4PJtgGhxHaw1epaWR6UkdpdrNLG3He8FGd1cobmFSoCD7UL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bNLiZPveunckuAGKKgxZwa4e8fQxXLTVzUsXhXdxBo62fV5k6Fnw2psPG7S1xskcThpeqDFa6qcCieZ5ChdhCsS",
  "key1": "2SNVg5BTazpUmE8zXsy1N8CXRqvUDjWTPWrh23Znc8qHi3uvcjgT76ve1np9xKwZYcnce9tDawnbNNiqKyu2WEHS",
  "key2": "4PvvR6MEFBLMvfLCEXqbma21tUs6mUR3yjLNQtfzm2vrtohwJBB5xD6DuiEZSobT1gpUwjLFKx4kEacuA4RwqEuv",
  "key3": "2tQAqR787b3MHsJsK76qXxiVDHFdNKpWgiM6AVgGBozADJbbmuyRScxZqbhTDyVvHdfw4sc4vFXSmwH6wXJe1KXJ",
  "key4": "7A8kRBSpCYrBzyhAumfSiZFEqPyzHjQYNjUcRq2gkz4SezRAT7fYTP8PgCHMjmYHzCJFLK9mQ9ezDL1pYRbjdKn",
  "key5": "3SmvmzrUmEsnVqsDB3ahez55KMiSrVon7V1aNqUZmrCTT869FYkEHFSrFvB6JYfondJKV1RnA4z71N65UeB5QMnn",
  "key6": "2V3f9JjKHuAXefthgxST5mLs8cJrGqmjF2U8h9i1hESsuedyXD6Z9EEBEB49jdvRW5BwoTfUkP7PmxmKbveTF1eo",
  "key7": "3Zh8woUWRxMK3ATVQXSyr1hi5vWa7ebQHwiNjGVqYRMQEBSmpuYRoNpytCwZC5AXe4XApwgDjKW9VoeduXymUUbJ",
  "key8": "keauA1cfmnVLcWofMJcJbQezzoUqojS5tDkWdWWoE4GPGr3iDDub1LXdyHRGB6qaNuFETamgLw3QzExLSEeoybm",
  "key9": "27U4PSv5iXF4SXCvBuS73juvhPRdx8THLupNw529cVgQWEBb6FssMeyKrjm9iotUvwdpAMFAASwUgfd2DERsKosF",
  "key10": "2f3GoJ2ZbR5ZcR2kfX3YtWiX3XPreohNNDqwWWReVsmsAaNSAjyKRznqvxHkDy1XZWmxjBVLi44CvN6g8RnKKEQ8",
  "key11": "5eH4zyU45Q4aNV4BJ2B1H32GzeJbjNJypj2N1DeBnX1Whvb87dYBEnhYBL5FFgq5gKjnvkf1GSipz4FWpeNsh9rE",
  "key12": "4TASM19cd9g7TvcqbMnqGZhbNUqNtCYBT45kZ4wwZLmsb5kFzuk2YXfEsnqr2YWkxXMwfa7p15rsyoFVc1Wbv7DT",
  "key13": "2ndcyxrBN9buXAXCscvuusJ7i37fBANBMkpxdJJWZpPZtSHpHoBJcJNcSxE6aqgcFK2BbLoM6ZGAVE3453mHem1h",
  "key14": "3uMVb3z8uEhFhpoFZQHKq3d68Dbn24qBp3YKEjESNx1GmhFk1nhYQU4RqjZDV2uQDjm9cY99x7iAaydSZz8iR8u7",
  "key15": "ZpPZVmZXLe7Du4w8c8d8QgHtnER2nWctrZ41MKdUcaew1HPivS3SUV1Z7rb9uwKbiMVVdAmVQF7TnrRgKRr6oFF",
  "key16": "5LusvqPN31DvkG7LZJM9FpaE2gJW9cpjwuGpWETyvJGRX8iBs3LtQkPg4JeuCE61awsUNA5EhyTiH9DgXksLvMNe",
  "key17": "3sHKhdMPAvowVoXZryTnEh1C662As3iFuwirkkfLgSAps7WVZVU2tUobf9RAGjNQxVhYNSAAJbpEV2N3yDyccSBp",
  "key18": "3vwBVtFCe3brCeiZeDWFJ2TuMyJibYyxbMF9QuMZrYdWpSLRjGdN4hYCpnvz3NWAMVcX5w6jXJk1WMqUW8n86Vw6",
  "key19": "4Hm7xBEAagynL1YAcPhbsW2Sohe641ppmi7DeV66xHxspFBHhZDjDc6dnwtHKGCJTAjFPxT2mxQoxKXmiEet7MhD",
  "key20": "4PP7PAfzkDpQfeX5VtDtttRqXTy8Bz2w7Gp8m7GJnYvLW25QoV2kUQ2GRWuBJbFxzLrhVD2j4neZsL81kjJ9NJo6",
  "key21": "3X2NeuTS9Z5CGtF8bCkSFQbYss7hBVxYpxNm8MgusJK85ysjqFBeJbtcsSTwyVD9Xf2PncsJwpwdeByAVtHdHtQm",
  "key22": "425NqMi6yPzceZvVD9Snt2ZV62Szr7BYo7XkYXUk6QMhkGTF13yBjGrtkzCYzDpdb9tRRJWvjypqvMkgeCLBnigr",
  "key23": "4JVcpZYTuL3w7cPrhL6C69Vqp4JJrmc1VwqcmvfMPQszzDJ8ZXux87wrC4VNUs8nRMsjgcUa3PHSmBt4TTjPyHtv",
  "key24": "UzwxmfFdKGXZYrvmiZHwy5vaB13Mfe4Xmn7anj2U4nhjXrPUhQsE7VPPNvPbxZvu9AqPDsDfdLHHwti6m8QmXP9",
  "key25": "2bcwECfvTgMscy2pgpyfPUvLaPMP6sH7RN5eJxckaXi7qnJdsVFU2akUvboneJ1miQ4cpXQvDphLVhxGcAPRE6U1",
  "key26": "5NDALhMeUbbhVYxwiMVUqjJcsFSPQZVgf1mAfejmWF3RK3AFXubVR3SaWq81dR3S1cRoZwv3DJbyHvBuNX5JAxGh",
  "key27": "5Vud8moNgWo7QerFfpaMwck4TVVDcFiEWt6fkesVqmmjdq4zMaXdDdUKzUcq8n8xxoU1Q1LWeKRKvMEGkwF2vvaK",
  "key28": "2kRrBF2T7XbHzxpTHFLKXAcV9bd6NFNxaLChvYs6EzbNRKsiUyHznhvLQMY3uaKBFAXXNZSiQ759AY1MHYj3w6RC",
  "key29": "PpjLLV2sS82cVtNrShgWCxE7bjjH3YsQzXGyg85tambnQBEsW73e92Ee9xdmLiaPpFhTgEA9Sx3WgVpQMuPSAcc",
  "key30": "2SU9whBPHsEfm6ucoca86n8kN8NwJZXEJnyX4zfUsQfy2wkZ3AvCXWzsUVTca164HwVvtkx72UYHTdw1WvCKWyHT",
  "key31": "5v4aHnsfR3SoPzBJ2SbP7pCgx4SkNLayGnq44LRncxcRsDgrsxz2PbE7QjmM7Y6TgYYaLc7dwvpQmDfijJrNzyp"
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
