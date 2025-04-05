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
    "PC1xNtTAU4r1PVFzreW3gguzrh9JPP1RNSwKiHVWuhfTGCKb8ncmK3QRFUF91YeF7hNVJxc878XQYBCMoDhugEC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "661dinkaSjMRNs9sSbLQDSE8jfK824KArL4ZMLAuBaWn5Qv4cr34TxSqXD1SsLjcToSK2LTBs6ysxUS42FYmE6qK",
  "key1": "5ikc9LP9j3JMMMhFakKRVpCJGtJ3yvew2DBsgRFYaT8VbRdqCfZDsFFZLGcA7R9wBM1XqF4qHRxcsHDFbAAra3WM",
  "key2": "CMVtEMorKSr2rBy19KzMGqRj2PUSA83sXFt2joM6v1es6DDg9NbDropkws8o44YBtE9q4A2LWD1AMH9pQz88fnp",
  "key3": "5kvS6nhqC8Jix7oCdjyKmfYEbo4hKRiwLAF4F2GhuPUFHuodbULxZ8Vubjzb9smK53UfVtEEJmnFcyGjJsuKbHtc",
  "key4": "ThaJX4B7rSahYWXvrCTupPmEpMTTLVbt3cR9nrWYo8DupnbccgvoSq5gv4Q9wpXkg9dZEVUJY7TLWFHrjy22fyD",
  "key5": "3ENip9QJTT1FzomDbrsU58NQpyzGebb3ruy7UwbKpvw6njNbobKvYtu2Zo2ni11NXhdsDViXHufqP8gYPjzJmYn8",
  "key6": "2wJqZfdMxY2mAkk44o1mqdnSpRfc9nUaK5akwhnBysU3aK23WfZgGMaNGQffvHzcnpL8ByTcMw6YrzLxWt8XQi1V",
  "key7": "jB3LM2M7H4sf1Ur68xP9k74tg8HBJrZ26bMrMi2PE81ft2PYq5scW69BQfHGViLZDn6cdvaqu7EprvnoRoFBob6",
  "key8": "WsLw21RG8zVeSFfH2bAsXxSQfEWdRb5nUDruCmc27LRUrMweR7bAFsgMs9Er8d1vndnZC6FRzRiciXXApAg3DJD",
  "key9": "5XzYiXLP3TLJQ3X1pBDfQ1zTRmyWMCiqV7C3yQPzbsn5FGi2oYgpRp27nnbS7GL7bQpA5m37GSm7qYYxbjLiaT9p",
  "key10": "47htMNW1QztmZ2aephq4EtumpwEXfJkVRQhnNWtpfxNbk788Gb5po18JiWihwRecRJkKcezmeDGhWrQ3bZRQRewR",
  "key11": "3Qp7FPEvAPkBuVsNBhq5kEGfsBMa99RWMnCN7WhNiFtgykf2w5bUcFN7Pw9Tfwhc3SUCde2SWsqmuKYeNuiHGeit",
  "key12": "qbv9NSfLmzAR6bbznUmMj9USECthaY1ZfgATWdBvNik8Z9CZPyEavqhuoqeTABZuT81HNoUbv1RXuWV5wwoVZMy",
  "key13": "367c8zUvx2DrYpKuxwvyuJaVLfcsZVLNKqB24gRcxw5Gw7Cw3ESG2uepBqGTthcXbQLKZ6poM1E1pz6EPrFzhFA1",
  "key14": "5Ca8aqcDo4JbkaTxdqmRDX8Gz9VVBR7ThmnTUNE8p2ihW8MjMc96kjBAYHP334VPDLzXbRCdymBsow7gwcuM4qaX",
  "key15": "FJ515f6HcTde4wV1N7PXyYgp2MgLYzHFEG1j2bTxKVANiBmjPxFRvsiJwto45aYQnwNrG4mmzLHHGUmHqdx8CM2",
  "key16": "4jSWDzGgREsC8DBpfd8f7TLAPLMqrFUsYoZ42LMgpHYqPNUZGZYk8EmXYGQW3DYDM4kUDHXyENH9EZLJXUHEYZxn",
  "key17": "4YAgMxnXbPpQFK6yk9VpRxNgzDfWAo89hDjH8PTHD2jYbNiHhTTP7iAje1V6BbyTrZFTYPJyZcUF5cNqPMJ3mPVE",
  "key18": "DzKczDKrV63m3ZcUYMRDLy5xZ6jmoT2BRhw3TW8Fbg2dKVQ4Po4XkNC3RWBpNEv2VzKLAZ2XPhoVLZZyqQKxp3A",
  "key19": "39M5tmKixz15DnuKNp2Zkp8tEZDh4hWkU1Ko8BuoaRmJqSNTHGYqz9Ke95VSyQjQg7rynyKnpeDGGeGhjWrgLmh9",
  "key20": "323n3zcEWZHSswG3Cn3WsE1qHJ8okz6N7DFtm2jBocQR62nbRQedTuN63iWwKpCY8ZtGVPzKDofaQh7QbznjhHBL",
  "key21": "3CXN6RYWB7GcXA8DV1q5ibhNjui5ScqUXc3tdTqQfaBz5kipb4Pt2wobfojHosd3aXWHEry4SaHjoyKPjBNwTzsZ",
  "key22": "3G8wiSbQHHdxizU97aemGBGF4t7hwbT2HNJrskBHg3d9mxLWPHeC43e5hRL85RcyBenDQRx25yTDwPsvuBGKcySq",
  "key23": "4dzqQUQyN4VCW4H7HX4HLjkefrrsfkorHJpVkoD8GngsEwjXUe6pn4mFLjKBZkDdv4FxJzun2HiLfaQRAYDu9zLi",
  "key24": "27jTzA5xhDs1ufKoX8L3whfyA1KnauoDvtt9Em6h9wTbxJ7wzXn1WWxRhcADJbK6MtX37RWdUcoe2F6sfcz7nnNZ",
  "key25": "3LH5zJ4BKmdXec9fd2Ai42xtDuQRjY96pGSbShokfW83JzG8AUt8sLc7dFPmxWgC9Keos6hvMSkjWmCSTYkgXUgo",
  "key26": "5L6D6zF9FTTxGpbnsP2BHNrEEDo1Qwh6DoeLo6j7TdFNoBfGCaBvv8eYKPVbPfEyPh2kjRhdkZvee4HyNDJn8fUv",
  "key27": "2k82Prdeo2QiFKsJX2M8FFkRSDjbDQQ6VhrAqfgcEQ2bstc2fXrrH3515AwjeaQ2sSdXPTy8wq1HK6UCzPhTuztE",
  "key28": "3eMHNXdVgHKk2pS7zpX5UP2TVqQjE3gYu4j75QtZTfckFEfU1q5cthwvKhCvoxt6rKwtNAGhtWPNHassTA554z9k",
  "key29": "DDqJQiVQLdTtgU45dh53kkm1NGRLwismYSNX1GUbabkCuP2r93ZTEhCcJCTc7ihGqHnjNvyH6CN5SnLYTp1PmJ5",
  "key30": "2gKqpDGGcTaecoETSKMDzKBfAyMEdJ1HN4crLsqv3ymRSCHMTXMuciiJ5RoM2s9Hg4nELP9pLNwqUH5PtMLDP39M",
  "key31": "26UzAdewcMYERwW2win91B8juUvE5sUsodvaZyL4FbqdXnqmP96CFT9yECbprEFsbJPCAWiVuwJb6juRjkGwzT7X",
  "key32": "3Q68iGY7QfTENuvgAfxTKuo5qd7LDg2DHjAKu5k83LDXmW4hSmqVqJR97GPmmiE84jCbg3qAH7jE1TER6Lu2MTHD",
  "key33": "2ZAk6p6biDgQmqhxuH5uRRfVTWJSxtnziVJ8aERST49qAFkVZtR8vneWe8uzGt2hzU9ZjV1FBnWfH1NEx7LTgxcz",
  "key34": "FDSZzULbwLEojyCrHzZ9XeogAWD9UvkGqV7wKEHRxpkaTMXfNABQvRxC6DJfiosyka9Rb6bHXNqUfYZPFBt6xMr",
  "key35": "3fiUspPVP4mF6F9msLhnyLf1JTHY57casQT3FWZ8HTnjmX51196CumoQrsXxHk3oF9fc3WnsPaWwwfmh1UyofnNa",
  "key36": "51X8eEsh7fmCw6KgtvXiSL586xas4CBNunmi1i4aHf3Y5qQTmg31RJbrJtKevRuSmA5LEGPtsxTWHqjKkZyxCdP4",
  "key37": "BAFSX3bycLT4YQdZSmgHyHCdLzmpNYQRwnwWLXY7QM3BsFtWpv7AW7CA3CW7xrvW9zzojXRXGD6NrMJRtX8CGir",
  "key38": "5i54oV9HvR3AKQjS5KdZ7HbS6wGsVxU9PbfSGiHHHsrQYiEqBSwRmyjWF7gKZja4m83RD2Dpc6Bxcpd8JhwSejKs",
  "key39": "4i7oX3LD5Uy2rZmRpofmaK4mAV7ToUxj9TRp71he4sDzM4sjBJWhtdH4pU91AWXy5Ap8qgNJVNzPH9xqWutpXYs5",
  "key40": "4UxAYjtNGVKVy42nvq1nbUsrtFcP7JRQdmBxFh1vwUkePEP87PsuuYKVSvhmCgB1MoUYxf9MoUcq2xhNcqtoqHDh",
  "key41": "zfNmtcR3h1ngWuMAERuJYoieruYyP4gCEfCg7otSivW4e6kLmNeXbh2yYfLzFF9pSLrDxBQpos1DFRGSFQ8UHrA",
  "key42": "5w1cXJE3fNdE2imRQ11bshMqD9cSaEQ39b2UwRyJFYneqHRsfzph2r4RXVP2ec866jzcTxkf3f2jaP4yXT7vtGue",
  "key43": "Rk8zPcGuUQoajuqkub1Y4sBAXpf7yen9rCsyoxMpMH2Kdn1Ys455tNnJSqtADyKJGGim4wtALfE3ZFkU2CXRP6Z"
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
