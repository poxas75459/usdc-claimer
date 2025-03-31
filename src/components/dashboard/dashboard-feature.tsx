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
    "57hsu6S9ttYFcDQa1RAu6DoJbdE7SQ7LroSBgnTWLZL8wvKVHtgdmqic6vtvZQZc5hSsTedrGwGpe1scCyCKBzKM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WuehD1MzFUeYm3fd5p3t4JLFXoRywkfqmg6PZVsRKEYiM7vUprAyissf5GDmTGErz6bJRfH3Gs69Z1GTGxk6jRB",
  "key1": "5anSZHYd5UTJ1z4WKBPbaAeLsDvzFh4VPR2Dbah3dEkMCMsWW7fqTbsXWvoGizR6J4w1YYyFV77822PXHkEQmNfJ",
  "key2": "2nyZkQXBb66vkQdPVP56mnc2697Zs6ecxvdbkJQs27AQYLjHML66MQL7TEjtLnM1bfuhLT4MLdAD8MGByKpPTYgY",
  "key3": "5Pqt5FRxCRC3ohRq1BikmVNZp4Phqvx1PhCcNoQmG7s1afGth3XLTyFX6ZnRQcxAkq2qFf19aq5MkJbbwpvfcPz7",
  "key4": "673MtRgQ3ATv7puBJHgKxDeB5mqpKdVJoh71Waa8W3CM5jmH7BKE1C5vCDT4ihg5UgHbjEsairK85Ab1X99Dotuh",
  "key5": "384p7cffUBns6R8rTYPB2Drqserbk51Tybc36CxNtw3fBbDttabZFQKZWBPio6k1pZmm3uXcsRy2WgaUyDnzUQVx",
  "key6": "5TD1HCDQA5JT3W8f1jkhjxx7EGj2gRZk4UoBBFNRTabF3oK1Rt7n6GYuVALxeBXsKk8Uk6mGtjEm3MDJBCrRP8nT",
  "key7": "34qmUSJD41yFb7AhmgWZwHwvPyxhAkjdhveGdhxjBqwfKn1CLMJCoydiJNTFSwhkk2CjSAC9sM4k7JeTNxYbYksF",
  "key8": "2ZEPcwizBD7AE3k3KbibbxUsxh13dRZ4fRxdjQb7AwH1Kz1qdMtyKWfum5r393rW1nbvmcLGUDkvtrQ6W8yWmWXn",
  "key9": "5x8sckDDEWYQB9BReRjgNrx4pXgbWFXFVdYdBSNpdEGSEVBLxtCvXbNAoeKFdoiKbFgSbQrsr3ARfvcXWRuiV3ut",
  "key10": "3DykB1D8SESjEQtD9eU4pMxRU5FsusByZ1a1e5KHTjvh1ZkWCZYpYrgu8dhTVXCpiisbQhocBVxuJisE9SXffbSh",
  "key11": "4P75XkiB8293yVRESyYVfGaTcad3Af73wELwfod8eTtDZBxuBvEwe575J8ciwLZNgvvZa4f23zCHp7LbBfP8UbnZ",
  "key12": "3F4Bp2risc28wsDVqBR3DnXDbSRfjAe3P1V4znLG4wRqSw6LHs2nqVQpH78Ej9kC1Gg1wSsD3CHzdEykh8eMKsKj",
  "key13": "DGQNFLsnWYnkLJ6iUncKzj6CNEXaKjescy23ua3SwY6h2aLwqnk153muMugahCL93nxSyyZT16ESZcfeSaWLztj",
  "key14": "3hwjtG7yKtgWqrBv5eCqPY35UoRUBq5cJpJMFkpRe7L6yq4oCXRTpRNBUD9jLxCskfNdBki8Jjv4awH2JE6pjvcm",
  "key15": "38PUFMtSjAs3QfH4j8VDKq1HtsJXk9DBdNNpvdUPUFukkNdpaJ2bkfufTWg1bEg4AbYveXXcCLD2Sv6eFMDNmHnP",
  "key16": "5cnFG4H6K8KQCqFfq4z6vh1gqJC158HkQrgP18tBDAYcfu8ELATeLwhFPEdAVKRVTynDKzb4ygtyyeiweuE5vNeb",
  "key17": "3AkZCwFHbSqgdWPDquUUSWorhncBVMuUskUb51e6hcNqPmmSoLdPxAcGbnSEjGS2qtxA5aT5tmVeqxaBedDgMKVS",
  "key18": "3xCQNbasfHpScBc8t7MPHMZLiZ3Ws59XhaNG6qKUJyZ3SnCSiQ4t27c3KFuUebFjFHF2Hx5S7hp3rKuFo3U6EFn7",
  "key19": "4FotBnaxZhL7psaxCNdBque6PsL9YPpwE8mt3GabY8RNyd9TGhCYPSYPFnsQdRimeajyfkDUFxWTg4rPWBrvZj5H",
  "key20": "2FDfsagz8JpFsk74R9ciEdXT2HngPbaE81ZtqkzMUEvfKR4xTzwjwSUDPhr1k4LtWoHuDNVHfaEwnJcC3XmPi8sa",
  "key21": "4FneS41PomHUHmXTnc9XyiwxFznyNHo47tWTB6vfiNxGxPJECki8ST9oBVVwccYxVnr2rXopUmf8arLnCSbAMzjB",
  "key22": "NxRG7gDkceCVUUhyyFeuDkuntgGc4b1wEG89mM1mKvNWALyvfuXpusBCP71VGisEy2PmS2Bf7mr6L1S1ozEJhWJ",
  "key23": "2i79v4zJ8s18MutZ2A435Eo1eiSzpeDznmwfGNDpQZSTeCcQEMuFKnzn5XEfvDvjy6ifgdbttw6A3ERaDMEKjBsT",
  "key24": "3ZHDxJsjgxuqYYCMakBVVrFirQePP8s816uFMtC2xF51izD3PqUmDBMECBJfsQQUsbZmTt4bvK5dhoZ8hPfC1CAB",
  "key25": "3Yu4ozkrk9BqQYZ61E1JNZTxhVjewR8rkMKYZZgVRMwAzvxWdeS3dc7semEiCGsjnyYUzar6vgU1K1qaLnF5HnQ2",
  "key26": "4NcfPq2WdS1C6G272YCHiswfoGsfD9KEKVmHbjXhAtK2URtxH5uHsSH4gGLusXJTc8eGmdmvwxBMf9Mk6AGeJGUk",
  "key27": "5eAn4BXL4vAaxTkUA2Xck6dM3a2iHJ4UKysx4nW1hC21WRjCgdpB79JRcpkznw7DkqdtZEt8QUHPQPj2ZJuniJYV",
  "key28": "2JvfyXuZPYQEHYfEZSFdZiG5idkNZBHXeMW4LA3C87Zz3fjSSeCEKb6z8A15QJSMMTwqZS8aWdBGDyXb6rC5gb7e",
  "key29": "4fUdKr7qT4RoHTL61DSC9U5D2wFzg9d79StXtueq1WFijcHpUtBJGkuKXtzikDA2MoQCBcHCsavAzv4F3Jayj6SW"
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
