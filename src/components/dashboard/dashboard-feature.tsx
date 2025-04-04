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
    "3iiTxgBqLdf4eJ3DTGESq68Zkfe3YBEwNhyire7wmG3Qd7vjqNaL94efWFiS7CunVoMCbUigzfSFohN4ep7o5ujd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yuXytzYNN9UShPyPkHDSRpA3FCrPYvg4cqB4997WGhfcvjkCcwKmdhwCfbAt99L5sfwgXPaGBaXQHJciosfihUQ",
  "key1": "8YRn2WfBGRg1fXaEHT6NxC7wV9hUCVS8SbFPVxU6DNAHDnMywLUgqHEuu2cttvuRWZePP8GUmpXEdnUYU9LrhGi",
  "key2": "62q7enrX3HeNkHWst4skeMRyiaKrT9qGZ3SCnPCPufvLmb21eyuhZHpfapE7gsLVxjJ581uRQsxyGu7dkqH6UUpg",
  "key3": "5xRHbH8qc7onhSEcxRZ1JDHmCTrUcrnWNLYsJJ1eyZDmyaWX888WstZ21n49q4AkMs2Dq7jtkxtvVuU9FnJ31N4d",
  "key4": "3P3r5zvYrxDMgcRyUDRn2mfMxvEizrxhJpjW75mgu5FNcA814vVVZ5QTbXQmbEtE1VokgKTTcxEcQfVX97gZzvXc",
  "key5": "3QuNoshWm5vyD2E7hhjb4yuvURzETjhkmFiadqZrdse1bqezveeJL1bsCSgwn5rCVtvmPyvJRxKPSGdKL9uxYVBM",
  "key6": "2shqaR2sacAqTfk835eHQbc5wS69yTnU4Di1EJ4kmVBKaRGKBB1usRVoigVVUHrhV2rRcvux5dLYEb5rKE6b7Jbw",
  "key7": "3ix1LzAfepCwRsCExmdCS1ZG3CK6uUXyeok7eMxXUL9ZPY7oWc2JsyAnvcoBPXWCqdpgemFo61Yt7cWcwDbrM2ut",
  "key8": "JH2A2YyDWscTJcCCuPPx7HntuYoXSuNzENMZYEsw6UiYT8aTexjyNW76WMM7Vp83JEzxTKntEBs8fYLrNcUgLSx",
  "key9": "5gW3uCkRzey34tyhWaJPj8voqPizatvnTFtUpqNWFNWQpD8K8MSY6iahzcYu3NDU6QSmWsjho7SMqrwGrhaARQFH",
  "key10": "5DSKyCMenGweK5Mhb3SkdPZ591bTVVkajoxKCjVypEG4w8ygud2GUenLedVmt1N9ohA6zeHYicggMc5dWVAztzTY",
  "key11": "23vgGeMrQTEBBHMzXdkh7cgWMsv6itNJzWyJjMHH64wt4Pv6K2CWmuPitiYq6mBMpSRU5xQqSbuZYkCUqA8Q3qny",
  "key12": "CxSHGpUBL62WPqChKZ1miDhJk6mBuGSGJNh46DTiJjpcr7h6m5pJZ7CJwM8zuDEeq9s2rrmcb3JkX1Aku7fkf45",
  "key13": "3sTQuHDw6M7U98wht4hZPriqbmYzznW3jSsTbaoT6huYkvLTVC1JF8psXLEqHN8f5jd19PmKNH9BcYB8LxZrgWKi",
  "key14": "7EeQU8wR2LJu9sMNuEUcuWJpZKNLJeaUWaM6kTRjTvWicacSJQyRkxB2mA6Mnm4CFEhGTsE4msYedvzTArhcMx4",
  "key15": "UjuLACv3r4WBUmY77k4rWQayZhxQqLPGGgRRVfKTXPU4ohepMFENFHjffS4JNQsERPuMuxXoFuv4QuRtDWBPZNz",
  "key16": "5J5oDVysWGAiNbjZbsx7DMphN6bcBuN8hVevNyCEehGRMYaJYs3RkNkxo9ga9MkkJ5kjovg8utWJUv1PzWfFRzgX",
  "key17": "3DumpXj4qebMBy5VqMrmUzTxPKoLJRA9FNv6eeQwB4XreEj26ER3TbjFWJB4XL6PcmpLyJTjfY2cfnEAZrRFc5Vi",
  "key18": "aqrFTHFw3nMjbhiBdXz5nm4NRiw7qPfoCmNqUCrSopNEsawUXi66EG7eDhBpSQ3sanuvT7oLGDHmSembzzX3q7a",
  "key19": "oZ3WakxZ2tBDS8RxADGbUr3pXq8GvaU1UsXbAgZ4mVan7QifQQdQS8k1jSNfS9G8T39LrJGGt6oWrU7phh4h8Rs",
  "key20": "4fNrqDmxFCj5tRggYpScngWfBxmq9CSFBmN3qVFGbz5acSzY1TyHr9w1Ujgxf8k2fgj26UJRVPF6F2gmNEiEuFRZ",
  "key21": "PeQ3iw2N2nSoYBebz1zs3gc1jC3kryCLNLHnnj5SjGr41AT9G7d3qr4h9hVQXSzU4RF2fH8xbvSXqQFUjeA6cD9",
  "key22": "52kvFLTaTRp67dvSRGQsb4vagXg34PFKu29mAVPdcBc11kkfhsBVfcPPGVAGU3pjcgyX7zFDBGWo74Jgq3FALuZn",
  "key23": "3a1VospACVCAfHn8oYJfN72EVhRTNonhLQfph5RpnEoVYW2toW42198Q3WvgpPokRBW4FSdccLCp2212fmctFPyx",
  "key24": "3WtAC82uKoasiY4q7rNfE5Q8zxBrxu3FhVs7uk3ZCahpz4ow8CCc2zqR7mqy9ei7h819jQ7jCWXCcmMJfuyXwFjK",
  "key25": "3azg5rbgZHqyyxPHpjgPqsJczGsRHf8nw4hLWALs78QUrhtmCj3JjBb4ExkqdD5bwLuvqGVdotKWiwhfeQhL4fPB",
  "key26": "2cZEe6TMu1wcTaFfhYDimC34smCRbbd9pvEFR1uZ2J8FSDXGnvMQtGPTUDWvRXYuHGACFxu4mUoG5wvZSa4sfiMM"
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
