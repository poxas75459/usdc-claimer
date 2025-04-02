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
    "4ev8PxZKHJXmfBGR8SytbdRNtgELKv3SSsGg7Jj2fdDJpWcPmKi8ZeX3W5mS5VdmgJcXD9V7oMCt1M7NFiHmWGmt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wGm7aEog8tJ2Zw5zJZMDmkwb4WdwUUg8YJxvT3pNAX8zo2HpNVEdJtH1mPDh5KrWwsyfF9iKsUXmbWeMeka8is3",
  "key1": "3UgqXRki1Wd3uPSC49SH5M88ZdxKGVBUCoU9HLLPDaYGtWHLo6T3j53Y4WAJ8DsDQcGytgDiCtghtipNnrajrBoa",
  "key2": "2HaaCDdq5y4Vp37Cak3LQshAFQjGU1pEyEsLXEnFNS1nXNnvZq6if32x5pv87EVmoyPjXALyND5QyyCMrW4ohyNr",
  "key3": "WSoyRzEYX9hHic6UKj9UR7ntPXhLnnrxu6x1xcaBfPmCuCweSMBbx9c7XvCZQBjNHR6nMZnRXJrNBzRz2h6DV4d",
  "key4": "5W8YT7bTnsjdZn44KHsEAxBDe1KHP5guSpoSvuvvE1uivGbDpfgrBq9pb69TM5q668qL2xaZKmfuth1BLfiYj5aY",
  "key5": "5N7Sr8bZqkacHcniYJsvzbbjHvN1kpFkhKBtHjgKCiZZBUVWV8EAxMzHaGkAhwo6hVDc6nsgHRjKwPivTFjMmEmo",
  "key6": "4HgFiE3g5nKQe1sLGVrqKatFV78vDkKisQWH2zPFxQyDuFe4PepNMFupBDfpqEuiarSWnimqZM2jcau4VW1VHmNM",
  "key7": "5Uo55dEuUD4eUTLHXjzpR69fmFwv788uUiAB5qDmccsv3tLMPx5StPHcdAEZSfegDbqEYCaPcJAbmm2VRfdskbj2",
  "key8": "5dsnbsBmw5hTiPMpCXVfGcgSX2FKEcDV3LUkTiijrcZgG6p8PdfL4M5mTY5BKWkVQ27qr416fVZw7JyAoycqvdLW",
  "key9": "4WcLTT6gjrEWoiNMAVLc9aZ1ydDRAg7SQGQu76HctfUwnxT7KdbG3KxkxSDoctUF2kvbko98eRdegA2AkzGCttnW",
  "key10": "2bqGjWfH8qNGJzSp2ayMKFcyPRxBWjNfbe8JVetVTNyKNhKaMmRFwSRtGPeb1a5iEkS8UFTkDfDKT7yPhgnmy15H",
  "key11": "4EGGv2xWNvViTaHjMV5N7fouCgPt7y4iJvAQTiC92LzVw1Wqba8vZd47BkAFcq1fFUEBoByvNZN6EAMGEUr9WoQX",
  "key12": "4U58M5Fr7oPoUrXx8my8uXBBFMZ4fcPB5c76F9zTe95dtuRmf7vAVnHWUEvkYuCK3mmPS9bBBwth3MiRLqkaDK56",
  "key13": "4Wy14Vs7ThHdhFEgPAdxPvb99ojcXq71XwMPEd4ZGqV2iBaDqfnM7XY36KX5rZUdw99JjEWefZk6xK2iJghTEWQ1",
  "key14": "56FWGRewHUg4WhyvpQPLZ9ReVNxW15QgKMCU6aqb6o7Cts1aiJHndAXAviKbZaoacyCMtbdHr8Uz7FRXLSuLgzEd",
  "key15": "2vEgKSMeuQjC2WtguFcj1U57njXqSKhSnk6Q14r87bkzaYKwXdJQB6Mz4ZgqHZsb1LynPC14nXt4Rp6JNu4ipCZ6",
  "key16": "3G1UcwE6MzHMXbj3FCKTrQ4JwcqhHa9GuqjLqfk2NfkhxcGK4mkSUSf7AYLE79FPE74iGh4rzH6hx4NqFBZYsyvK",
  "key17": "5jkiiTNLEHq7HDewRLKccvjqF34gcHUWsD1tsZAraRsYoYQxn52eubSEL4CaFm6vmJnx1645eVUQNCKxJgUeGAkm",
  "key18": "5JwXsswMYoGyGfCfJYx3GBnF6x8sCSfzjvuqFSRMFsUKetrLqV24Vyea5s6NwXwMgn7tCCfRFsUF5YrkAMWFs1rW",
  "key19": "5c6zzECGMWAHVYCj2Wnx75aDhyHst1WLM8oJSXX73g8G15y6NVYNXDSTeiyq5b37fXFBhybZYX9MoU8eHHR4BwVU",
  "key20": "4zDKXyz81FKRMVLcdUufxxSvnsitZZJXgHZ6pPEdeF3uriA7hu73zLbxsUMEYpX7V1NjiBYBbj8mG7Vtizupebtg",
  "key21": "2LsqPGrCVqTYyc9cm13W1mqRGNZpJmX6vkpW9gBDHzDJAoZGbh8JdnyPJuXq6xiUqna9RAG2ffVq93tCiHZaMhoT",
  "key22": "ii22L88mzLmfXSDu6iksxwTcvA4V76G8JbNtBgJyBtoaTAkQGQYcNYyLVXEc6opcKrVFmTzRvteRcezUFLZadBE",
  "key23": "Kj8RvRyt9cohhCHP3obNSoLapNYgrm9ikVRFqQgJvNubn1DZbtaMToVcYoR7ohki8AdLkxBTyxWn9mw9bTNNqmz",
  "key24": "2ZzhSvCCFFy36zdEMJQaVq5LRCviEpCZA3aeykL6MX8bG2hT29HkQnG1vF1bHaDmesGUhN1tgymWjskUp6zcm3ap",
  "key25": "47Mc4MagbAw9Hn7Eo1YPXvq64WiAhYeUqRVDs9szYsnof8x9ymbrRFUuSJV4fC6Nz7kXcjaSQNBLoy6UCR5NbsAN",
  "key26": "4y4oF3WmhHNR3Dm2dhxFViKSrRLvqKAz4rrMj5zfGEDUMW6eVvJPug2fvmus27qNRY2kRgv8c7C29G8bo5igwoMd",
  "key27": "rzNNKp5ZDWTjwRFNNmZRK4tCfQ1FARhtJXFQebXwvWiCkdpWhDhgBR4QVYxbhQRLKmcuZqY41ybeqH8Wy6kaB1D",
  "key28": "hD4TQVcnDM8UZQFeWZMovK9Viee5we2QjgxuSrLtpX6QG1QNPyvMm5pthLqnYSTBy3XF1NueoJNtD6hD3dXsyg5",
  "key29": "27Q7Uz9nVQud2R2UJjke3HqHAtPp8UdZM2XtrhcvzijPUAVjitbbd3FQosaiqLmMAUaMhpeMvhzPEnASiZ3jdLMM",
  "key30": "4fW3LNMJHE2pXV5MHLcT9cK4wzWMdP7zNZsaNmDLS1Wi2DVY1zDxV1eAyGLGmcG6sv3L816pQaW1z68wP4TFBvbS",
  "key31": "3GvFLmXVBkEvxufZZxKXP8ceNAgzBisyuN8bcZwR6qWDiAZVf1aU6d2w9868oRGyhr9oipK6tD2DEgnSHoEwbPLH",
  "key32": "3emAXFMwVd4qZwUGkyFYHL4CvK21WQpitTY7BxNHaLvFfhKVcT9TFLMJvjDoPR3ykeWpgDxbBWLWubwfiTNLHGKg",
  "key33": "41eHD9xPs3gYeUnu77DKPbQSrCz4cuip7oxjYCdLFd5g13dJzKy1yVDeRQPLT5tcEpUD4TUeftx8nkttSQxfUfS2",
  "key34": "WK4d1LaaMQbYyR4cnPF5i39JLNt1Wgk5dz7SX4UCGhpfiEQeonxoSnXrG3qBjoKeLpfgnQNkWxgjDxA9PpkpfMc",
  "key35": "3cNNgQ7Em4Air5N33Z5N7NTU6gxcQBthfCLCrksptnEEnTV4XfpkofUdy7s7WFs9Ku9qBMnRdxuf2Cg5Td2ACoGU"
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
