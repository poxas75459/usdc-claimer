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
    "5znZbfRBVAikG78zesUf1RLssUN5w35eUtkj1HT3Tot2mcHosLv6hC26qmj8m31Tr9e9sgAPoAJzxJYYrP5r4HTq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38PhbbKjwLGN9fCcSyQsQF5ocbf56oQ99146vb1gXdGYHCaXuFipWoVzN4MaLMGEnadGqhTEJy2CSpSqTBmsjkuo",
  "key1": "4xvPiWQH45wtXB8GPDCvEvsrLnkxdQKgxU78Z2VZw14xF73xnqN1q6tFqHHqzvsbzzW1EFj4a3hicVekTYhY9Dgw",
  "key2": "2BGHcgQcUELFrGL2NfcojMFprJCDeG6vnTsAE6SWrxx7EtD3N3rZoUJ76vsYv5PGqc5PPMycbPb2yAU6HeGd1GsU",
  "key3": "5kDn6mfouoG9vL9U4R5fDbm4CMQxnqk2JYF4iT6UWhg73e67fRKbZ78hTDNgo9NnprZ7ixoFTvFUTw5EdRx5reaf",
  "key4": "5PUecoKVdfmcAqAAFNGx2AYAuQ16sDe5NXcp93C8srEoa2G1E9b5hyVVEEjgHtVRSadBiXkwBpGTyoqhdE3qK4jC",
  "key5": "eS52NZWSjNr9mEYimw6zu5EbG7o4cA2mV4pj2tVM1ra2xwEwdRRpJbZKjHde1X1xdeEnEn7JJyVYgYGJVWR6uGQ",
  "key6": "d7dKbzfs9RmCP3qNVdy73G6Cha67UrY3Fb9W2SXr1P4cWTgPBazyKuptsMV2FppLoGR7STuPX3t4gME4ihtxhS1",
  "key7": "4uxoRc7AkM4QerRXHzc9tFHR8DPqBX5tBr7b6dkJp6KDoTVkS8gBvD9jboRiu3vrgUYGrtzoPwK9PkGFYqW2zUPN",
  "key8": "4Pwb5ZVwPNNbNgNyfJoFTzLXihVJ734c8wUYpr6XPYpkpTXuTNRSSBDs14iuw87Kkf7FcyT5wYw9Jmnmysq1VzHZ",
  "key9": "5Sz7ZsEgvMRHhvNyU1TBojirDkKNjCxQ1wkk7oiLV9MW7bVAYQFoA8q4wbhYo6KL8yQV3UURMbHWsFKF5ZPURuNr",
  "key10": "2mng5p1PtbYFN4upFAhjyTMC9zzANYwaBVu4xKonUGygFuLx8S9faDUrfrh6C7CkWGqmGb1p8gcP7n87ZGY5n1SF",
  "key11": "5zSTsW3K53oas9MMsPUc5YojzHBZ6Gzb4YyGnZGt398W2zZorhq1B3LGHFuQTE8ZGphukHwmo9V3FmVVBbmNdeJD",
  "key12": "5gaYNx91Ae9idEhghAkbNTmFMgXjNh2bEtKoWjLZBMd4JYyLJfi8TqaS3PW9DtMdGcVyToaqjV2Hnq9aZcti3UpV",
  "key13": "4WnbXrGa7XAU1CSoP9y6CqPahWm6w9rTKEBeeRVRfaktPiW9jhK1MumJSNA1Fsw7TcaBKZ4zGpnSXBFpAmRoYX6P",
  "key14": "25HsMNBiWbnbCcVY9iYG9zRYots7o7LpgHQtQ8h9gK8jSsAfLANFGw19ExYqXRdWAwSPxnx9ct3YGDfPvhFYxT2G",
  "key15": "4GeLT6DprHzAYB8FLM8Z59mGKt8qSyqfEKdckZ9axjcgUFxNLDye6nKzK9ntfSVqBJpTGc1yphPNgRonFomCozrt",
  "key16": "5eGx3XBdcjDQY7onwKhcF7vrN7aDBybxBBwpFDDobkeWu3kVn8rYznM21vppSmLC3YUwpWN7hXXKJbiLuESYgFkW",
  "key17": "4gJqh9KK2ScKoGUQar3tbftygTC8HUzSeew4rdmn7PoDMUGmKuSHJ4KFGvqdxcrvvbk5iFfmpBDJ2Np57Amf7Fb4",
  "key18": "3UTVwADoKY3AdG9Sq6Fv6SeVCqDGz6pRPBqzeiWUX4bAPZAmLJbLGm7EMgTraPQ1XTw1yj3SYBVjaqMbXSH9S9yK",
  "key19": "DeSSdXf6sCWX9jzDzBJj5BDy2dkuFGtnU7eUipMsjRYwd8G2ZBNQLRwAceQq9wZXig2wwonkuA9yTkCVbq233VS",
  "key20": "4GVBdbyrKdR3AfWTo4ksrJ3da8Rj5nvvDTz8W5ghBqJrUH4foZotJ5NtZvxhoa38Yq44Bzbvnm1L75PkhjC8GCk6",
  "key21": "27PSMn39BtPtsZnF6rGaRRTSQyeQgdKGAEkr4SscAjwV52fS9LTjiAFdsTrdSk5nEw5pAUAhXhQfs29o5ADXkG3T",
  "key22": "3VVXDLvRvVZ5u9MYwoRDwAgphDSonZ9kPMMLTsUvUKvoZw8iNfWosZm2NuhCcRVsuXKVoDaQ6b8jzep1GKenFzkJ",
  "key23": "2mJFCphTvpzXyC27U92rRCL5jryVbiQxjpy6kuxgaRXT4vr1PrmFPorHYMEGroUsznJfUpDKArwNqHZqFdBf79mi",
  "key24": "5imucXe9rP2bLvKHr3VePZ3aqzrzU4hfbSiPSx4ahou6WPs5tCegKzRNAuyHy4Sp9f5x8P4XeEKgXWbXPY1cVrMM",
  "key25": "5AZp5cWdxb9XWqbYzkXStNUNGSDrtZFjjVau3PJBDEJPTWqyQAGta1fwRkHV96tCdL4DvyDaVrYXdCFS2Y1xBLYk",
  "key26": "4ry9BV48fa5KoWys65Wj1Gh8f6n5oVNR14XYn47WbkZcBzYm99QAVRmtuj8afP4gtfouBLuVDY9vQSLRDnYmqWtb",
  "key27": "24rfGQvb25EUwf3AY4ATdDZat8ZuCJ8HWobdrdf3RcK79TP7yvi7VgKGt5kTghLFWgc7sCG61L2Pt2FQjonqHCDY",
  "key28": "3uAKgNdzJUyuFGczGfeqmJyEnR2h8Lj7UW4RqfhRM26EJbjgWtHTsV3RBW2PDbLxcQqqf4ZmdMkFYgAHZXRihePM",
  "key29": "3aomzqBPctf6sLDtedT2UzpNeTx3EGdYWDkkRrVZ9g6pAkoty5TNbo5VeGvGLNmJVsvWEQupJLmHnQzb73CeNdX2",
  "key30": "3xGewS3kYffy53zHiERDoxn3V4BAHZC9PVKhsZ9M3dhemhskFyK59CV3yyxYgxu2LKDtq3awoqUNmTsnFbEa6dG5",
  "key31": "21S6aFKk7iuewERGkeEJVLuRM8fqRyvAz9P2GynJ11ia7SsaaV9YUYZn2rKoSmSQmofdTdhNgSwNqthHKNtL1eKi",
  "key32": "36cWS7otMoh6fdGYYt1ZQLKNt68T6BFNzRxvNPfKJ1nwryC8M4vYx69VTWxp9qz87nWR2zkst3MhF735E6Hb7KNH",
  "key33": "221rnLtjkt1RbYoTCDYMcZzx3McdMBTiAPLTjKf24q3uvsj591HHLUQELWWqHhtvr6frUWcP9zpJyP7jREMa6izf",
  "key34": "2EvWBT1VqBiqWKDn9aNPQT3HpdxgSK1TwEZdrmJcHJG55wk6kyuxYzx5KRHvrFK32J1BJP1y973cE8bXK6qd2Ttx",
  "key35": "3PK9pfcja8LpsT9z9cPnLYmYncU7jAyhMBwrWozG9YToAiy8yCvGBswSn12qQM8x87ja7r6MJiDrNbAdoT3iLEPg",
  "key36": "3RgKXcahzctErbeUA11nwsKsDw9AZb9FRNJzYi1JfakXiVHUnyJusmUcSFXZPSLcsaUForcd794wqdQa2LrBLm2T",
  "key37": "Epsg8e3dGJBUpawpmWWXDjeMf955KuNpBwZUKV9mdLh3tnoPttKQ3gAUDRrnCAWthMhorUWuePCdRXMHdDxhCZA",
  "key38": "3EKisM5THwieWCMg1r2PuvfU9WBtUEJfcL4uXJRohzvxFXvGXi6A7tcwUcji5LUvZkxUNZtERGsCL1uc1FLYdM3E",
  "key39": "4uPi39TZpXPdMT1K5nvMuotJTTQG4wgRTw4StPCHtDB7h23cbKKrAJMCdqsa7ijPKAbdycPjVjzwqYPE3mJVgpE7",
  "key40": "56BXNMgYVyD2bkv6JaqzuFj3BTNkbpy9VR19giqBiokB1kFcoftWMQX8Spyk49rhecTE4A1Qz3TK8X9nVN6gC53J",
  "key41": "34tsu4UvEpnYBGWQWGvzZrAJk58hPXSb3mgdZajnx6KxvpUkrtv4uJU26rMkwgYgZhUv6ia8VbdJis5cCG1v7AMK",
  "key42": "4MyH4YxJJoVk6R6vEypBKmVpdYoLr8LmDHT3peFnC3pGiZRa8zsLr2UxAMtFYs6ZgsKbUigvJksgw2bn9nXDFBHs",
  "key43": "TAX2zsbMYqcS6dRtjsCxKuwdegT2QZ6n9HbNRcd6RWeUTHtxfiNxtKvfGiYk5xwrZFUQ16NqNJnVBZCU5KwKaa2",
  "key44": "5uoc1Teo5QrnRcEBSGunUAnHDZeS4VNxgXFPNBErSdEjacV75Yz4Qm4fiPbpxEnrd4e5ojQGaZtkqG4YwdBXksue",
  "key45": "9T8RT8jk1Zbp1ff3x9mht24LbcBWFTwxgcWEbXLkSvVU3wBUDQWehq4Yo1K36mNAmcPZ3wSPTSm58Xm7uGB44oJ",
  "key46": "3WSghdb8EEHNTwDeMphik6tjccGXSFhLi3wo4N4exJyG4Kkmevu2dfa4aDPcbVBVCtukTCNWgFDbmBQWLCU5bwn8",
  "key47": "35dWzqJ73KRPdW4uQN2uJtuEWoVg8cwmUupp5Wt2Pwo94ADEVqw1mCykBzU9He9Z2WtWCUqc6qx5g1yn5V4rGXtn"
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
