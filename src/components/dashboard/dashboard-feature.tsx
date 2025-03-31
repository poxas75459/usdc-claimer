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
    "5fExG6zZRiUFxk3eR4BQYNB1v6ZQeBhiB6qMvxthLKUGPMTfN5h1KESwsCAzxaoVFuNXFKAv2eJJT6aSsZashepf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vVs8aqXu7nFuspgDbHse8FBYSVsePPUNHSAQwem6UpdWoNxwcW4e5pa4bmeqEcgPQxKPZugi7kVoxNGe4iKRbiX",
  "key1": "2E6dGDmjZSBdwVomq8J371u1ii2aGA5pNWk3QCvHUXREstjRPWsmp17vPyoFU5BtuXMMmKv6SRPzec8HkgHAGezT",
  "key2": "7JezjGoP4n9PnYRRCUykC57QRhtfSGapLKdNUmYYphHHUS3dY3Xq426A1UqKquSwRwF1YFPdtymiavUeo8vV8Xw",
  "key3": "AdpaiUYCTa3jZvU2tV31A823jqrGuxVZrcLUeFKHcLTgxwSGa4Sjeeq3ExjjBMp6pcf9si1nWWXWLDtHR6o8nx1",
  "key4": "2oFZrQjxPY7wb5e7iRYkMBQkk2hRu8B2NQvARYVb1YGNXLzbPNCfD8WjTpWN1M9xE13ptXGNRSc453y96MFKJjJN",
  "key5": "VijTj75Q9xMrUHZG767gEXiqFopLrYTE7EDNMNSd1Gwg3tyqQQ4oY8ue8CBakXFhxRKjaJHorGRonkgMimtcwvb",
  "key6": "3GomVEVrbGyKZxcXVTMFr6YUFXyHko684dfWfvpnygEh1hEaeKLE4rVfdM4inWSWyMcUievxEZeQaUjskzzW2T25",
  "key7": "5we37ennKUQQ53eyuLzR1oHejdoXpeoQt6JshEgiCXLDFg5V7VwXjHMdq2jY3S8sUMwRgBra9FFMyrd1XkV8Bpce",
  "key8": "trEJPwX6V3sHexUHMR7NQUDLM3Dp32EYFhaWhvakAGkWru65X3Bbj654y3ZCV9ZJk3tUeiVEUcUumiZo4XHDenm",
  "key9": "5DVEPDoR75geDS5vAcuRncBodopcSN1GSWadvFxZtdfuSb3yGANnxEfKhSngNZ2zx2DpNMTY783SGE198fhpFek1",
  "key10": "46pyoHiWnm4HRQcHbrAxgSEAjfCgGaq9G7nmL92Ti2tkN4y7R8quZy616z2dBRK6rWimtATHTD6jsNBZtDMwV81h",
  "key11": "2z7uombkJcdEtmQLDbzp4cekozbRM8rrQKp4z4zznrqRkHyeHsF3Ar8g6HWaXYpibWShL8VG6PCv9bHpp9HFJP5P",
  "key12": "2ZduaBDoZRPgPksb93A5CtwR9KsTYGjyzL9veGTcGUNk4tMfCeHxqo22propK87gppoFSEuJd3qkF6pySxAMBpkk",
  "key13": "23ZUVSxDfrdKVh4To3kQWwhw5ZAfPcGkUctxMHnTTmL7zuYuJMVWCXxKTdLMt1uKbgbUKaXut9NHdVKSJmN2mTYT",
  "key14": "59UkmbqZc4eQJYH2DK7sut7Ph6LhrbLJtVaT9Ne6t2gJBmP1nUKdPVAqfJpm8Ahe2BieV8XS3CMT5C6s7ZSUsv8x",
  "key15": "3bw5K4PyVGKt8wYtVY354v5nXvqp2uXinU9dezYMVzEFfQfr3DvHL9PQY9B4gNRsn3eqPU3KZZkTthe9t4CnYkDY",
  "key16": "2q5wdRJ3tGSkMKEb2QuW7k3MyRdhj6F184eJ4UU4ChxWrUwuCDuXKU9ThFCiD87Xp4V8SG18sfs2nKdyRxAGrA3m",
  "key17": "5BunSZZDLzBWD6gzspGo9Npe8mnnYLnwVTn9CNRvixDKr8Tsrdd3TrprVMywr9QWXuiwDTvMyPmGvvSuazZiEJtW",
  "key18": "4qESkWXWeGwh7TTepRsievTUm5odJHLfhBBKf56jyBWaVvHLZJqJqDhzFt1WxsEdoiHKqqwG1E1UDTs85GtwjiDq",
  "key19": "vomJMVKbwwNd6658TSA9XyATrdXxvFHaPith1MPEHoG6J1H41AxJxACTWy6C5yLJRZPYn2hqperoA9yV88oZ1aK",
  "key20": "4aykrgcsmV3pch3JvCjnNQakhZy5x5u8Mvz5jxKEEY1n8Fpzv1VaxJMuVNxuQs3UqWcgBoJAD6K4g6jYMXNYAjhY",
  "key21": "4LtGLvvDPScBGEUXZQBPZQW4JknrG8F79wja7FqU2pqWWBzcaCtCFj4nzr6W4HPV5G9b4PoLubx5zbpAGvJk47Mu",
  "key22": "3b8zgPYxy6LcVwXkfPj7opCoRUMram9eDCDbtPE167aspzXik7AoGLHFjtwZQbrFTe7FBKqsjYxRQt2bCJS8yKs2",
  "key23": "2vae4Q7mekEafGPNVvYD9jwxPnvzWj56JaKVVQhi5X2CrgptYe3q4ipDrgcLsu3CVZwwEXp6gAFBQpUTNMtqs4TD",
  "key24": "5hvUQbXtsFWZ19UakELZMGCZmt5DbgsmSUZCnDzFbArpLNZCRYpEEHUC3ht1o3PxRnKVADEHbxQexc4TEssuNwhn",
  "key25": "5iZn1yKbGTz7HTP4duNDufs5FFXk2pXVSwtdth1hEUY7R1RZhnZKRyD1bhXFifF8vnmDcadHQwN4ZFnWPLkb6jXA",
  "key26": "22v73AUbu4nkfLgVCwe3aAxUrpSKqkUu7PAiJ6GzRpHJzKuifMFnUGj5qXzdiLYw1FHAdbwNTSumVXX1Z3d7Nwhf",
  "key27": "5rGmKWN7792hoSTz6KkW6Ek66kHbY14un5rpxRLaX3njoSf7WxTxu5nNgNJy1YuMvHak5MYAT4R6uDvpAtGdXdXM",
  "key28": "2Mea79bGCU2nZMP25pttEBipNEumm9ekCrJgU7BtzcurCQDCa4r6DfUzsCghxQWzp4bxGV3WZvZTfWZE18CH2mY8",
  "key29": "gUZ3rmzPzvEYDNtrFxaVbqKp7pRHPxyRsdahZQjkKKJdd2exJu68GGwKzWmMfKaeTCfP5rKzH7AWcLpJgPhEMZ2",
  "key30": "3r6KNx7bDLKvyjJo6fGpALGxoE5moa3a8vJkKa2cW9U6hVsrj2CzL36gz53UY2dUkZG6xCCeRPQRekYc5d5pLXB9",
  "key31": "2oMQXbGJ6DATgMSR4GgnCaoxGmMkyABEyCysjB1pWtDFyXv6kRLvnLK6CtsDutPJUkth1pkp8KTruRMChw3hwUjo",
  "key32": "4dRZFhXeSDCxoZrpy5WxE6bnG8yX9WTk5GZ8MD6TLL8aY3cBj8uaLbqyKJyei1YFFBWxk7UakcoNT6MqDxD9xTRr",
  "key33": "5SKUwADB2MQ1sScHPG791UcPy5wUQDNubztPnaUZREd8zn12AUczpmFRAJXYoQah3oWk7agss6HbQJqVvdrqeBzT",
  "key34": "e2QsKcfnNv83NXBJ1dfUBzBhxW1AfpgDKPaDfYb1FNth2aEmhLVzNNiCY9imYyoNXkpCcPDW9qDEFz1XaRt5j9N",
  "key35": "Uc9y3BNVRWCbFz17UZ5hPKsEtpQjRhQc3rqYjkvZU1teFxkWyqXvxYPkoBjhWvS9ZSgX1MpETCkLXHzD5BTZMxC",
  "key36": "2daRZGtGJNEqxEpg8DmLYbcr8toiTXMtePunkCEbYSzCn8KKUiajZrDAGodyeo4PCrY7TEUgSeLkMu7LA8wBn62X",
  "key37": "wmc6Wv1oeTC3byw8SA8di8dUFze6BrrJktutgSkQpPHXtBgAz324MxVhKGX7zACNjxVdkhCrK3EzY7DQ4dg29sv",
  "key38": "2MtpbzQi4PZ3csKQtdUiH459jUn9fooGrhnwLTAE8P3ZVCUFS4WeaUqdECwukMqHpuW9WHR51pTAzXvowaUxngrT",
  "key39": "4SJX9DYit9983Fati12RAxoAyyG1vdhnbomJ1bN9XfqpXamhHVye367y9AmNhN9bhTqdUXqr1PmJfMWxJbaRfwej",
  "key40": "25vnmevL8FCE6YwnZvA6DELgAKyRJuJkhGaN1ZXWheL9K2yhJad5zZAXuDiU9BnjZWvpYzFbMsqCvqheJ4VPuc2E"
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
