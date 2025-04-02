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
    "4SLq2Zt2AyVUz2PFR7xgm4V9WE92rm1ifadWopADXdsBLq3XTD42cMSgNrq7qWYnhzPqdYTqVX1GWTUPT7Mgnkjk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8sHkhuNgudRBSA7SjkgNwa6H71y3UDoCfx7YZztgEhu3qZCyRpEnKCLmAsoBAjPq52JRhuSWtbJ1kA4mFMbmPhW",
  "key1": "4mJs7W3reVUZRh5fasPm98fKsf6dRTnuarwjKuuhTMTrCeGhVKUgtGkfzoB8wEfLXEZjdq87hp4VJ2tbyUzwwDJp",
  "key2": "xJ9zzLSdkbLK5guM86fF1n3Z2gyizu99qeD4buv3Abvn25w1QYXevDe9GbvYhss7X1X3P1yFyk1kr8pGoZw2RFa",
  "key3": "5ka4ZB162C9tK5SwYegNhc9Crm743BrgxgPc9w9hfvLhFt8XxNF1X6CzEoZNiYBSTnPDqxGREQpgLnYBwZ1jz4wU",
  "key4": "5ru7QBXxtaZuFNELKpnSShd1cce7yMNH7pNyLbS9iJse26bZHkWvSnjinE3SFF7YcnDXBtxmPDF4agtLKMxznTpf",
  "key5": "3w6NNofiM7Smx7FhoYFGfxW6TyYCMmnKFsGVNTiVLRyo7oKSAkWLdihQhVNMLkeDFSrJqG8Kf7kxWfskcrv5snRa",
  "key6": "2E4Qsft6UkMoegifS7fKyRLB2XjoppePGKpJqoGfwPD5csHmFRtAYrpPVAmJsc5pkkdp9PfJ7AE9MLnvY56WqHVC",
  "key7": "2xSdSUryNkjVtLyokizi4pEtjcFdESjuGDKJoocUWLRRuyUxesqWum4dTBt1PDvBhZpm5SYHC2NUaJr1TYE3bCRP",
  "key8": "2BCaFQiFiSUXT8YkEc83H76JuecTqWbBaPZot4eJ9cR9LERzVMSqass867BpUfz35fJoy9HhXCzRzKjCxqHoix91",
  "key9": "3peKg1ZksQjYjZ3CmTgQRgeFXRVCC1n46y2vKYj6n8C1rSRSCrcSe9R9XBwmeTMs88EnQnRyWWusfB8V8ujHBhcm",
  "key10": "iJ7x2zAtLnUtgiksf15LydpP2LQQcfBA6w8CeH5EK2gqodZEJEX7g6WUbS57E4HWfQDz9iFNNjvtkprDaSFg2e6",
  "key11": "5g2QNTxR3UeLJUze3RYoNXHLB1TELBUwM1LaiyJn7chTu1ut3yXedw52SFWRyE2bKV39jsF5gwm7mvPEfG8vZ4DG",
  "key12": "2qnKefTeXKXJ5CrvhwaKnxPeJTEp1hd4vUHXxfdjCzg7UvYu14bqXDqjAbxcUPbFTn9J5s6Hi3Jvaqm4MUtbpXWj",
  "key13": "5DmaGrCtU8SfMPcKFdTt1pWHc6NNGY6yMWg8aFeap1UoEodUhUZd2Tb4GebB9T2EXTLs5FzFfuypMx9oAB93jEtJ",
  "key14": "24H5woR3SMtFZ7LmqHEprPXJCL7h3NmUoKvYk8nPRJ6AZCAbXusSDaK3AUB8fpeEnQUxm436kHJEHNrg8DaBb9QR",
  "key15": "5qFsrK526ScUUFfK7GbNrfnpvFkxUVdwuJa61yDNrdQtF57uhSEh58Hbb81ZgEhuxu2VF9op3qNeCG9ixanLYVof",
  "key16": "2maBcy8afgZq3LjiqUxsx89NnBWZZSxd1xAQppU5m28EgSm2NjXf8LWEJqPUABR749toGKqPBc8WEMa9rSDn7Bxh",
  "key17": "2mVWST3ErJz7L2dNx3XRAUJGLUpCszScAtTLrwyjvPpMoz9XVQNWPAHWyVp4Kom2Lp8Eatgv2CpD4oDUk5aYv4Aj",
  "key18": "ZfDbLeNigdbaC6mcHqcm9r9gMqTPtpGBwMKhePUu9pMspW7376gcCTENa5ky2WnmyWRiR3bwaAmovLnPu5PLTx7",
  "key19": "47ymCCjsTP1Tfxb77DD4wJ5iuar4iyxJyfDFudpUJU1WPwG1Dc3fz4hKmYZSGURVatJWJZKoHy751FVMPbDeSQp3",
  "key20": "2EYcKabKVSV3sLmYa2zf1vtihpe15VNf51Tuic2a8MzFVDQs16A5MGG18NCVFYbofL9hU6QJThPNf3NBSinJvNii",
  "key21": "2gX6S6EK1GggFHwXQFaUNy2LuQmkwfV6Pbmq7kMarE7GkDVQ9K9obAy8bFzKC9TuWPCN6NrjQzHZaBCyPt41w7FU",
  "key22": "2BQZvgfBBZeCHXFR3d5Q5qq6EvcuLZs3VGcnSszkm7y1AHM3H8TJVaQ1GPyUt1g8dScvLy342DPig2xTTU4TJTKC",
  "key23": "5NFbujYDpwPRSF6BnmZg3v9vwcLXXmwiL3wkTYmnPNKvbmZ9JZC6YkwGzhXW7zgoL77xKwmknwQjW6WbM5gwJbC7",
  "key24": "5JqyuaHWH62pujVi5EyE5p9fMCkLWoB3ZcFx5swbkwc2x6Mio5LDs8hojeLaKSaYoo7gT9FvudE4RbZu71Nzykoz",
  "key25": "5vBSsrG3tK2nYH63CXGQhWyg9WumqMDwzKscn9AdviH1YwEoJGsR6hqQWRSxKkT48ipMXe65SpWypCr89CYG7kXy",
  "key26": "51BwyUu2VLJXQfjx6xUDk2uhcrhphJeYEjEBX1Ryv7g3A87nW5rNuYbPQFUgS777ywemAvYTR6EvnYTVEVzSBoMC",
  "key27": "3dGEKMMJXurLtzoAgW7r19XZmK7jtiFsriHTRr9uU98Ln2oQ9tAZJGAvbN8RrrZLUuwg2yZWNrqVsLHVDz1KR9w1",
  "key28": "2An3btHuo36xCPgmMycoQuY8ekU61gyJNpJXEWEpjgq74BRUHRvRkgpRcyXEzftWbbevBFPKHxcqsRL3T1UfVQY5",
  "key29": "2yvPTrU85DuKAD3yPKUwQtX7ZXDVA9XBdBeMatU5t7S1MyPZMuyLBJaXr8KnjZrAHQjnbm2qxCEnZ6P4nV5T8QPR",
  "key30": "5FsbLyiT7dUPgPDCF7QvszuZxiWy6XeehTA5rmtWQohT4LamvnXfLWTUsDzd283VS1ivoqN6JFadwj9Up9QnzHSf"
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
