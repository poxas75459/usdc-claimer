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
    "T4kScwBHeBAGtGYJvthEoF72vKP3sSQGcorUPWr8pMrik5C9C7owr8mjnMx82AupBKZpu9Fxi9HXdvxrz3EcDb3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yc1Q2c2fTC2cKtgqPKZje1Qd3BqYBfWCVEFRXUqmYC9zze48SbdhdiHvxUXY9wZyGdxC4pmBmRQPDAxLwrzPMtk",
  "key1": "1NhuWoynRdH36fZeVrxQif68yH4pwQC5ni5x5VBFAep4o2y2jveE71mxGMEjzvR6ozNrbePTpn5grabci6hoeNT",
  "key2": "67AZ2opgktKE26FacqnzxAXJZWSx548FoMMcJ8EotECcnwuq7QsuC3xwaJ3MzkrMsTct9m7SLw7ZU7VAhBQDgoRr",
  "key3": "2LWyUE3YcL6ayPd9UL7SXA2QmhqL4jH9W4msvFo2o3ptU3ChPqiegojFkPYHL4YJPDWG4SX6gH17w8ivDUqv5K9y",
  "key4": "5ZjYHiDUMtoWjXZWDaf9Sh8ha6TitD2179n357Q4b1tZ7GuQ67pwVibJ2H3L9CKyYTQ9EavobjUihJ1EcFdG8TN4",
  "key5": "4LDfPskfqk9Q6f1DRojuDhLoTooWEvvimHxMhJD1zs1wNTX5ZiVRS3k5duyuhnShxaherZCvFQs2EZNtKXiKuaX9",
  "key6": "2DVRFgHXo8ArgA2ywN65bfggkMBTj2hkw3R48uHf2dBWkkM4bsm1ccvQuTfpnv7Z1o2zwpE4ReYFRoXaZWQ38ZYZ",
  "key7": "5EjSUvpuxfX25npTRs9qPsiXDVaNb7EFtdD4GbXPctomuZFWgg2gDr2njrK2XBKZPY4xoxCxLnXa7VBHjHx2zK7f",
  "key8": "2KF4wkbmhMszoWuPve5rV2dCka8wdZrccq855oFc6BAqgdzTZXHAJkbjFAGwtdGQcZ2Rkqsr37HsexR2wt5ui551",
  "key9": "VRcuQ81vSuG3RDR2nJN96MJ9At8q8XGtVQESpuChPnLyrBeQHkkoJ5mrG17Frq3UyDBAurutDnCE6cNQo69LHRA",
  "key10": "naim8Up7KFzPKeEU3Rk3vNMAE79xtZHyo8wx396Mnxd1zRy7E1ofabDLnhnioD2JWakdC1VBWnMSZSBLg5FsNq2",
  "key11": "4X9tmFvusWqxGMA7AG2jfx7XFRugw96GYygongZvzF197m3gXKVMXiKZK3CGGHNeS8gD22TA7LGnxGaeL4Q4RKE6",
  "key12": "3r6WsQ4hxQcHf9tasN12nnxu16mkLH6RxsafqnrgZUW5Nf3R7cp8qy58AuJNmpVWaSxD2ozX5UYW69QzyPzbtsZr",
  "key13": "5XP2LfzGebkKaFiHVMwA5xSVbKwPVXD8pV1n94WyBmdMEcdsiYQpReYn87r2d3VH6vcAL92ufzpyxEzNiKSEF6SG",
  "key14": "3Fmv7ZJyzcAfM3hxbe5sP5n2qsN6XFfogbmgCewoRJRYaZD8ANNq9Crhoj4vQySqswXjdm6tpG21S9aDp5BwHueg",
  "key15": "5dCXLC9XtnpzkgBNP9uARDuzxkCWWfcsFmpeViwXPYw5nLu5G3GgNEPmX1eKF2vpQgAzkek1rw2gk1LJNpmnAhWS",
  "key16": "2Mbbjx1KwfsUi6YmKfea99CmuXpjXAw6toNRBWGuQDdp42cHv64C2JNZQhKMSmf8gctuMe9BJhq178RHDSc9nVYL",
  "key17": "3GcRyCY7GpGSJ8XWi9zHGRhDAeL3ZUdeghFHbnhJFNERLLbviKNL4UJipCA3auqt9RBxWH7zNnTuBKrpJxf6Afqd",
  "key18": "4RkV3KPLkb1wzAm2kiW1AM3wr4YV1T6gjCm5E3Q5oys1aWZuUDoF1eKYc3JdA8wGcSWGmhmaqv6YC8yAGe2VzsA3",
  "key19": "4e3tSrNQjJ2odUgDdhPVpa4E4gm172wh7Y5zeUY8kmFdAaZuJ1mssVp8uiemBZ4ndjAtPNHywhPSwEVnBDTDZ2uR",
  "key20": "5BfhZf2XPzFMgiDmrEYwjb6Q5YBVxbzAC8KtmsXwfQ1jfzKY2hxQQSkMd4qvt1jCujyL33s1EgNYC3fCsggKmBa5",
  "key21": "2443KiBaaekp9niWCu91afjcbscDADcHmHLYJVuAfRJ8id1KYcZgcukoRotcZjweeiTThfimyg7jNybhfTEYsLLU",
  "key22": "3mEg6mLkWCKkrf6tYtZMVSG9JMyw8zLD4nJbKNUGDdvvnubhn4niLg93UonYYDdeoie7Z4WTN8P3uCEP1GSKVqEY",
  "key23": "5pmqoSKRLuWmwYBBipn5ZhKBy3zRxDNhqU8csveaDd2V1EvqrrMUdg13ni53Ztp94vfZryeag6awBTtN5BZPYgjk",
  "key24": "5QMxCwuE3YhbnFPKNm6ngih3itMZdD5BLXLzhBsZ9hJcT7Mfs9QQyEbLPU2nAhQFCUF7rdke7a6saZACWGbUN1Sr",
  "key25": "xmQmAX5TPwXxZr69gNiFN9hnrHVi8gtB9xe1U42tuTvGNsExgD4ED59SrcrHKkm7inmPniTyCgfcMi3Bn7d9MDn",
  "key26": "3ckJ1v6viMbcA2jirAtynuLV4b7nr5Xnjg6FASQQx3h9dNjF2u17bFkN1EgmKpR64qb37hDuZx5nq2Pt2rwRnqux",
  "key27": "2dfBL6Gq6SNo7kLkB1DnnCSxP4WFqMdbctkYuKMUH2Y4z99cZHzozrgpZgZVjaMsW97g4Q5yxSRxC5LtAHwRcg8U",
  "key28": "38Q826myoLozvn7kfiTVcvbf5c3G3nEURtaHoQb7qyfLbzobXC7wz3udTKrtXmuZBm76GmnW6yYBwipJDxvfSSfB",
  "key29": "48qJE6935RTFXtKL5UUfgpTTNnAb2fMs3TnkWG8hAp7hku16TDDwmLm7jFCY27PcmFotnJruvyt4ci7jYTZyfNEr",
  "key30": "bs6QQevdURWy7MRN6Y64fksuJMiycNVuqPMtCuSAd8SxAVnpZU1z5MxPnXAz84MbZCiQEG4tHyu1gpfgumkbj1y",
  "key31": "2WcJ7TGuopuM7vSvXP5xKpzVKGTpPEMyJsXCnRWxShQYjGYtPuVTWZnYg6WmZMP9oHL1a5v2GXdeqYdBHm2azok9",
  "key32": "7WgP5Z8GjxF4jRUiHmrq3GfKmrQu8AbukXNWT6rA9tB12BuSF76JGUyGzTDG7QgkiExfEUazyurRsZAP1NKhQK3"
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
