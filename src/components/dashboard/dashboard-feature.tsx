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
    "3h78ckmQ9rRigDybyzW78LwPXxC378XHYcz3ZJYWitbWooZnNwCGCbFQvev6XcKi5bt93J3Yp67VZWNViCF2KWTi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pb7S3711fuFpdWgxZ7EDEzbTh2Xp8tMsNHFKucxnZZi1KuoFpAecipDHxxTz899czJhzun7nrppagLuyPSxkhu4",
  "key1": "4e9bZbRvyvJn36a3qhQEqN55TUTC9c2SAJ9ZgnhA4XFNmgJpn146Wk6GxDjpb1DFfELxixSNGNuSeGcsHLxnwygo",
  "key2": "5uhvX5wuYoAb2BUgG98LskiBiFZuZ6Q1GFeEiffLdeeWYbjkTCRNLBZz8fPR6SeMSfmJy51JmiVSMKcvy8KD69vL",
  "key3": "23zzi6cnLp3yQuQ1ixPz2CTfekYZZdasuqMGkpXQUsuG96McSi1yZrGeZNhxh12drSyBXEGYyX85kiXxEo5WVqna",
  "key4": "5XifArbHNDC74QCyC7xh6FsFvtwAtynMEjwfF17FspCNZ2VS677ZHZkZ7njRNTP8FdQg2cB2o9u7eyMTMFkXfrxD",
  "key5": "9HdjG5p7Ha5V7gjnrnGVCEn5ZJUzFn1L2mk8WopufJJwva44sp9V83MxQtEFpghkPgyY9g7YS9PwLsvdZ2zuwC2",
  "key6": "3TaWvRpzm8tHd4GAXbXGSNNaZoGcwQUC7wBrZhgQGw5viNqrYb9FQmeE8GY5aXvVCmFpecCwBr32X8yAPXCMKxgh",
  "key7": "61tvjsEhompcn81vLxcoTiygVWSFALvQE94W6KoP2poed1KfEVqARdgkZwgN2yEK5PW7CGVcfoQXhb9i2WHAjCHH",
  "key8": "3EB9ruugVfQxeAC6WEJRwNgpzTBcb1yC7BuEsEyYk6yykZHvKYBHC1PWgrkoRnRf3w2YL13YgQrYZcKEnZT6VEzu",
  "key9": "5S6K9fVwf5WtUCixa48s1iWAV6bEYdJh28o41BdS8BXd7yQxtJ9ZQy8st55sgepLiBSLLbVv3PPe5AAYbuWvRMpx",
  "key10": "3gVk2hUjYJvas8rSKCuQ6MZPgZVAx1X3kkkFoGfxPqua3Zfn1tjnjcVGdQfYG13SvaG2BMAP5GqvxKjo4Zvw6oQH",
  "key11": "zkFtwoRB3QfgBkK4ShHh2ETsF9itWrxtJvv2x4To72f8drgZGtAmjzhMf9tw7VDgEHWFkn4h3VeLd9P9avUSg3z",
  "key12": "542HPrvE2NLNeXkwJLTCSXy3AekdjaCcPJLfqjWnkxwA5RzNA79rUeAfDZErHMJx97ADK8wncLT9uusvaaehJ6JU",
  "key13": "5pMk7XMnf3rtBj962Uowk9toCj87uDm38KAq3AwV44TC6Y6GCfRPoekZnifeMq1dmzTkMUamKeMUp1caMZ3o3RKg",
  "key14": "4u4NUi8SrrTJ1b2QnpbockaRgfRdLFwU21cC5RL8hqof8KoWjjbJjpAXo1KWe8f3WRxhGTtnuRfTonAcuAjshHBW",
  "key15": "4eKom8262iBhdTcQqXv7XDEu36uaFoxPghwuxLt2U9hcotFdXDeNJZPAMiUiV7HLHdormd3HHFiQgUX3F7xjkdTL",
  "key16": "4X2GPEVfJk4WJqsXVu5gUg9VEZXQyoxbETJuAUtCVdwXbDpmih7PXnKi2MaYc7mkMKLM9PAfEMizqxaw8JxGZNaK",
  "key17": "26HHpytV4hoNud475nP5VDdxsWkJ63pC9ayzYXE2smeqNNrf1NMB9qyHphi7FHWY9CLh7pspm3poxKMGUv3pkwVq",
  "key18": "5LUtJEwy5r7YmKDrY3cd28XmAj3EUC6xQJh8XXMbjNQesvE2TNd1jRfX6UAU2TNp4o7Z4Dx5TFAF9nfwhfQL6HK1",
  "key19": "2M3moABu3dWiXTz1CqBscRE3QpGG9nQDA13GTjAeYc1uWyMF9ytXCVidbYuR9754v7X4g3p6o9ZG6dVRXoJyXaDp",
  "key20": "3ZzXoJwB7bFrToqB6s73DnMFryPBU5GJMvks71fTprrow99R2nxDtEBFhiRxnNazUkkZ7zpwUrYczznP7obirMUW",
  "key21": "fSWjNBhT646wGGS6FUCVb7wKUnz9gTfNjLmEcVLN5BcufudJFDuEpSpzyE2DjXSUe1vGrnNedVbeeNuWTvyn1AN",
  "key22": "4bsGmM6LWqh4g4pQXtx3j3CKm1GQpYJbtua63UMnfEPxUZHu7m93gdUDFq8qABbd1itXacXdvCHNMkm6bbdUx9a9",
  "key23": "4eGzKGBpTumanQ19Ek9zggQNQ7mAXc8hFwx3kK1LngEucCVQeytYGMhTthwSAPThsPposX1PTfwtQzFL4FXoE75N",
  "key24": "Rwsr9sdaYiHYxJgWejmzGL5PZhwnqLK8sWw5p3qmimgtFxUegroZCFgfE1cdWUTDnJBqPkBgCujU3pZ6mSPoP5s",
  "key25": "4ggfbxfaNwUrM2RaYwHRssRx53DEmdMCbSwphQbMr2uFcCmhe9YPf7AMRdebR7nadQewf5bnR4PR8zciQh8uYAP8",
  "key26": "5Y1LWvkYADFSmdiDXMTa33UECK4jc4G2ZRkBQvzxRiv2Bo7MZyLbsLxFFfoqXa5DbAYGcwAYfApEFDapET8dUnWd",
  "key27": "3zQjdB4eMrchczPBZZnmDGTBT7DNQcmjfimBLueysc1LFfPoUCzMthcSqy83YS6niAtNj8Ys8xd8UvjQNe15FVfP",
  "key28": "37USR19A7uFMzrwtgD8hnezLyQG9r686Y3HmhyhkZtvbGVujJJNveHoYhkEFWpqjbMCaXNDCauQx8kNyC9h47MgC",
  "key29": "59ytfLc52dCDBxcjvK84icr4jVmbgxFmQPinzDxi1HcfKE7eefPLZRH5pxTJSieRKaMiWPjEGRAQn6fuVVSo2BR1",
  "key30": "3MZY4T3tm1uVRy2FjducmfvWP1SjWGpQVk2KmjZEuBhtqkVwhnvGqizG6V1rC3e3iKuM1cH4mM9oWjXKHjg5GgKv"
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
