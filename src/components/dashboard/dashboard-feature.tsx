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
    "5HTLDsHLCo1x31JRbD6dekx9N3Di4U6XvFEFPFM8qYK4z8eiQ1FXoy2z7JjYm3MY9XyDYt5EuxSfN2EhWnMrAa51"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S4Ac5j4jTWv2b2YJzo2ck2ogW3pg48PG9XpCWkYhtqWgvrr3vVSfQ7MT8o4YgTW9JvDJ5k2uKevVUMgu3acy93g",
  "key1": "65Wdztuig9NHWRDwrfEw7d99dCRqqj8vmCdZupckYKYHEmxw8WaWWQH5a2cR2RpWnoNW4hwL5wv9YRX5mvcLcQ6d",
  "key2": "5Jd7fMiaVQR31DqHKtCuuocsgti79L1EKDaSHumKfxBffRMFDgKrYNF4DRZuvTEK5yYMpr3EFAKo4mYQPkVArHpZ",
  "key3": "32riGdTu3iaGMUrLTGwuPQfRpH8fNuudnf4PwwAxvDjCVqavarJa4FkaxUjLJXXJWvs9Cxt4xn4YLFYwGbmvot6Z",
  "key4": "33N9Qy1TGNfDDeU5qyPaHvgFrxSJRWBUzqHY7ZKDBbBJwbMvqKioMoKfenbh5WxQze9gXe774vtm8URkYmeKHUbB",
  "key5": "4FhE9vdGWxGzcviNihqF6u8QwjrrqMoymiRW4sFAuzzva3WVdqT7BUGBoSMF7UA2saZubwxujZBxsbPRMPKYMukR",
  "key6": "5FXgpodGNvzXqKPSZxBRg8xBtwr3oBHj4Rj6N626ceAEUDRe85NdwSdJu9mkNj5EAopsbpUP4phX9zJzzsx8n13D",
  "key7": "4D11YWAQnPR735GMwuRjhsTiRqJwEXdokbeDYk2wPxv97iDWFLyd3qcus4abTcKgDy1ho7MwRtfByTvsKbz6yct",
  "key8": "sWFo9L19qHUTLQt9Mzu1J3ffaj2eTZKdRx5c2dGBTHGftx2gHSBzFhq4rdbUzdxRjM1kF9T7b7ny5R7YATHeMLL",
  "key9": "2K7otY2ZRu4yKyDg6JbZBwDXttBobbUJxAphUyTByFgTF8tBX9fz2r17Pq2NsNyDGbmz2m7QsUG6YDhCFnrbgxGB",
  "key10": "4bpnd63sfZkcH1a7W5NuwBAZXnD5p8jWqUDEtGpPQd1ohUqVAvjrR5KuNhDtxi46Jw5GqCBAGdrb2CLt8JEJv2jd",
  "key11": "EUzLG4twGsV6AfViAaAq7guEdApmxnnBrxmjAQFL8f7rpwJ9E7FatSuHSDeRfZ4SQJcJ5CHqzYMdKwYP1t8ZALw",
  "key12": "5b5CuebiQUTH1aAAerPDg3z1iNVdRrtmnNPJbt7a21btJjLBMCnd5RzNaCALLtPhd9EkDRRJMx4FFTg9xk4aTAnQ",
  "key13": "3Y1XH8Mp9CswA6ciHsZWkso4eu2LatWVeMQ3RUbWjEPFMizbdz9QYsoenwbavidXeENg7MsQ6HZKavpkB5ZpAy7W",
  "key14": "41mHeqdu33j8FXgX6xbkM4v3quqVurMZC7gH2deukh6c6RrAmBTVtVU7Vx4Vf5wxxTJZn9BnK2o1Su18t7b7VZoC",
  "key15": "3CsoDBNinSAkDezxsoHp85MhZh7h3a8cW3xi7pgqE649dR672xchTCet21d6q83bLo1qyALCwPXXdGeKRJBDdGh7",
  "key16": "3kc1dRszBnUGGQ6Tshz76FUtt4wLA2cn9H2bjsXXDKqFqDsEfWzBQjpy7mN4FyknbMvWbVu6T84qHNmPaSbYsEM8",
  "key17": "4K5JTJbrxKotVb551iQRTcRbimDw1xeAaFFtGASn4uyqBdw5BEY9ALPnagEimYCSuNbWqEUeEdR6B8pfsk7osVJr",
  "key18": "jgFqVdLSqMoEgKxSsEdMvGvh7xUZ8N485JhKLTyWFXV5a1J5jTBL6B2GKNF2cdjx9A8zTLQY6BzWSBjwpqtq5tJ",
  "key19": "5ywN2Mn1CP4HSKedgRqiBMv6FTb9f5EFbPTGquWgf1MUJkmk9SLpbb4hT6kmrkeu5qcFjuk2c4NGi6gP341XEc1e",
  "key20": "5LLBs7mX6PdauSYptd6BhwrkBFmM4wbZrDDNbkqQgkyv3sAjwHUsnw3RKn2cs1HmMFHBq3DNavDxixrjo2caZp5c",
  "key21": "XQYVVozZ1fprtGRsBvvY2HsikQvAvQuY7FeNsSzWuUq8sjMHGKZ26wUWfboD7BDRQfyZn3UDrRkLu1JqNV92dcw",
  "key22": "3jLKEZTrD4JYDyxhakK78nUr1qy9B6PZ57MdM4B4W6wbQZtpaMd9S3PGoEduAoPhowwi6jNEEXhvw8bN8RCiDL5f",
  "key23": "52wV1b95tJfvpe8RocRRLk2JNxMj6SzP5nUKYW7FWhP8BWcV5YdHbPNeFvoc5jRTyPC9WWGsASsnMW9asWaKWnJq",
  "key24": "44asjsf7JJrPwwCE3k1U6gfAgvzdQ9KQLXzrA8wXPmqm84HGoLcLerXuC4YNhGp9KNp8nRe9em5VXTimkyu9b6Bz",
  "key25": "2yWmURfqrsjoAHFMtq4dCo9ex47d7xECT8bMnjY8oJyPdGaxBJBHrQhn1QzM6iDneZFVxy72YYQda97so2ZLTLBE",
  "key26": "5o6FVtmxtVsMzqb4ftnqKFqe8UgLvUAxmFBANzJm38NLmZfACpuMuHF9m3ecsT3MTGff3BFWowHu92PcqYzCFNSg",
  "key27": "3V4nsz2secLN2DxLnF2Rk4AaCVVJwTRykFtgybME4oq5WjqK3PHrbBp2wB9ofk2Gq9z5xu6HbipLQ5i1zApRiRMA",
  "key28": "4ot4vZ4Z3pf23bTKNxW4vfcpRUCDXV6aQVspKvo5dPfNv5JAbqGKyXY945oYPZXZqcQ4VrFHK7oQFPPf4zuDeFfD",
  "key29": "5XxDkNhiXoZZakRXGwS9fNStopAjHpJny2fPfMiS8oZysVsJhTYeKjQuAUw7KmhQgdn3JGTA8mCasiApg8NyrAgm",
  "key30": "2SxxVg8s7Sqvk8MoEoMVpjBqEspRcKeNSmkWw9YdyFTMmxwUEj3rteLmW331fUYaXrSi4uDBFAhvFNoLeKnGUT6o",
  "key31": "4gncncCyMfDWfDtyZuqQYprzTVpEHSdLYuMQFNQNDdgL5VvmvCgXBRLimNt223Cgquq7zDdWkP6E5MrjV9QBKm6t",
  "key32": "GRTRrGMc1QkF4xxyD7tmmX2rdc2RpbSDrfNdRq2Vc2RQc7z5bSAcUhQY5kJf17TYeaHQC1co1zbjhd5uHN5FP6N",
  "key33": "4Sg1v4f7Nf3HDPb8S2xaLHNxWmzScHRF28sDwy4r3MCFcJBszzkwMvmAwgxk7NEZG1aMPKECiYNaCaHkUFcKNTzh",
  "key34": "4ejcEGx4eLA8gnZU1bgcEy1fmSHHco8mSK4Gs8oRaP9U2dbLBW8h4dPo3jDcWJfuZgf7rfsuo6y7ZrNVdyTnUFsq"
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
