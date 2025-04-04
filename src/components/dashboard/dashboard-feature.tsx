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
    "5A9DUkj8SacEDa5xQEyX1MeNKZ3tGQwS3uayobTbFRDmnFr2wNFj3YZxrQq68st7pnAFDZPiWFC8jDipzJXVgLuK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VHEZkx5jJMSnmkT9VeUTpyioUiLwJMdGByvvkFK3UuiTcKQKSXp4sbK2LaM2wDfsCWi4gEKHWurCS3HR2LvDRz5",
  "key1": "5FT8P4MCMx855w3Eh9JUuVaUuEUZjM6wDnt9FLPF6BDYvYgMDxHhEEuz3vgQAN4FvSjiwrNz2irb8SM2BuEPrQEL",
  "key2": "3MNqAKSS5fbMxH9cQhBQVySemNBYyqBoWJ5hGLU3x4KYu9rYPMQM3CpqZd1XFkDqM1BADq2SHD91PSLLhK7rfJSH",
  "key3": "4d9KPGgVsSwekrnGF1GzhyJt6m8gsNrdN1x9yEU6R8VTo8HFtK41V15wi32noXGoTPSb2j1MGjGQVtVDxmkoUCnE",
  "key4": "5z34ksXeVq3WUnJV7miqbfzkP3c3TRx3JYgHxP8szbxJFXHyuZCTuFB9z6SPtvwh6PNCF1v7mYeXzbZbNaEQbE6Q",
  "key5": "2KSRuFC9b3oCihp7FYpqNmwJETJxmnTFZP2RuQi7FN5BZoypQ9twzFLjcHsAPmmdYa5FeLN1sgQ3gdm4rik5EFNz",
  "key6": "tR2kRgGForQYK1S5oDN5HGJemTKhUJv7KLwbynWNHHKYR1tsve8oiCKCDbbsqEEEaessqXFQ6an34gEkMqrLPmq",
  "key7": "417ubp2BtWQy6dpMYkc4inWePKQT2hAw2HJASYgDLKYv573KG1bq7khBCJrzZ1EY1KPgBqxfkq9qQgjRbhYdd6Ly",
  "key8": "4MfGWHQVVrVQx9CfsXnkbFJMWNhLqFUXsCeyTmy2yhCXAaPCovizX5b5XpBHMmuK19KxDXtGJw5SwQpB3xZq5NWZ",
  "key9": "5j1FY7PgMY7jUNH4U2mba3wcc3NdRHVxNeh9TmGLW6aKMNQUVPfbUdnuMeLj8yin4QSzSKYbyRPrew6NpHoq3y6U",
  "key10": "3yoWs4zEEmzZSLikNnv1HMWCr5dwmpxDi4fUEBHjr1eCc6JaQ7ABsZRzuxfReP8nPrgHfynoYMbvUe8PbpzZaoQw",
  "key11": "Hes7gDnJpyyzVbnVHSsNF5wqmKy2h73evMKgjqpi1eCZseb2tHw8ntNVUU4gc1m4cqjazd5gbUN2e4zRpMSpPxe",
  "key12": "2zhxTGiJ9LWQZLd8oyVRPsQYwbFWofwGSHf71hh2tYttHc3ffwhyPTXiaP2YhzZ9G3iMexwtVvcKMhUfzZWLE236",
  "key13": "5prGnmZzQV2Wyxf3gscqsdGLQ5ZTtiKmg4nK5QKDygfZXPCgGZydWUFFURx7Sx8uCtTVMfp29Vv2VGaGQKwCmaft",
  "key14": "bWFVGsjHRod3QF7FUvPrUX3hJvcvn6v4tYwfwTBUcZbowwcsWWWAkBuRg7VsV4qYkRQkNnSHuFuJBE7xtDedri2",
  "key15": "42hvqV7ZoBUjuBEFecUcHHQUyT3jTswevkVsQTxQX3aVNDkxe8FPoUo5YM7QMkSdZD1rP1gEpQHBCrksTYKdunms",
  "key16": "qSLhThuUg89U5g9kenpGvNzdP3CSWT6k29gTnfb9b8PoJz4QTqsH9uAKg7FBCDGoqshpXz89Y9FYHQdLJYR8UbX",
  "key17": "9ytfHxe6XsHNz1egw5TJfUFGmMo7tQUdhVK5tBYysZCojftTEkvwGXUQjiwZWfwGe6B5ZC8DcS58a9pxgXsxfXK",
  "key18": "4HD7p919VUneLUh317UPR33dg3HwrD3MbfXjwMrerRVdZfXXELXH7ZmyhjW1eqKHJsKkfrpz6EVdcmMhhBP9XdUr",
  "key19": "2uSmN18Rqmf5eW5rK6Q98yPYVLCqXuj554hUqtKphhonNgYFeRwdAeW5ZaWeRq15Evvs8Y7RL8ViYqfdvQYRQH1q",
  "key20": "2C84v7Ff3r8jEGFiCkPEEatCFGYJP7ZdgQwoxcysQWKWVsjiyBCuKoUZJB2eWjUxesPWrvQXYYAJGcgB4zDqYnLY",
  "key21": "2c2xXfJQWM5sY1GdLa8hJLuNkJXRJzz2ZawAojoAgvZ1hgUhT6Rw8Wr4k4rKNhSXUYt2ZFGkXGmEgLAVZbLDimjm",
  "key22": "2d3gweYyLMdmvgJQsK2KUA6u7RDh5pnkeRzxJo4S4HJdJ5CeojoAj9YVgCRPAesRFPhs3z6c6ZSf7qRtwJ8TxCFT",
  "key23": "4JSoJM6t6iu4zSe6YV92NEhbzrJfpvoMS8iY6VehLzqh9khmzcpMG8YF8nyWp9xeBTmKkdcPB1gZvtwngWUEZkJ",
  "key24": "5VBrDaV8wXjoxbJjkY9jJprov2FWdZdc4nYBsUAXmJatzQXmaaqbkcVFLoRBFmvW7u4zGTJAFyjcKsz9a9mLMxLT",
  "key25": "28tzuRGaKgVD93YTCtZZRk9EwYZegWMFEn4Z5nGXi9QQ8UYrE7ruLJfSppcfDG7KQZKqp8kDuFmMrUsyjqDpMeHG",
  "key26": "5w75Ngwu8Ty5T8i3epv18LKbTsaVNFwXWHSLLFmzxA7LL2o5pWAANPFaU2W5ybZcQLVrkJs6frMU8aAzFZXuVbRb",
  "key27": "38LrARiNZt1Km4YM3K782VDamdBJmp4fQDTZ7D1rt2F8gKgHPNFNKmRiUAd9s1h4YkfrzzygrX5Zt3CwXc3Y2oBo",
  "key28": "46DVnGKfut8HDGjEuV4oBj1GCzYHk2acdnBfeynrSx6LBgqPJX6X8kp9R65KQfaWEzEfNVAhAjxsS1pYNAPeqEfq",
  "key29": "3uw651Nqj8PRHcQSmTw11nNZUGFsSvLqBA4qkr8Fn2XKQ1aKGiwQ21rysCenKxihyH5iJBjWwGDznKMvB9xKUxYR",
  "key30": "4i5x34kTsMhfo1xAFnZXsEvseowsf1J5bWYKLkgXUyMjMDW9WJA34pRGQcNMTeqKumo7MpwTKqdBtgJoWm3rPJ3j",
  "key31": "3sRRtofHZKaTtprXRnzRUqeBp3umcgYZvTAUS4zXojG4c7hSmjJLgEZeHU4c2L1xLUpEnV4JDiexYAAtF9QoWM9d",
  "key32": "2Tpk8FFvbXKg3YqUog6Axi3uVH9XEibXeAcHVhn4pxGDXR2WibASKSs2R4Kcs8fLjNcb54A3dXdkKptSGu3cUnfX",
  "key33": "9xFJnQ1Xv7vNUphoZpUWADPd1Y4AV3skojrsTvJB3GhZ3g6hub9d8DJP9cyHcLpu1jkdMUKhHeagG29vfxvp4xA",
  "key34": "2bpWURKp5otLDWWjyVKBiLFJEFXAJtxxqhhD8k4ERngXWUgUkW68FyKGUaGVb5ayTvQPgZS9D9sLg5cacGcSbr15",
  "key35": "2EYwwJCHKGJmETcj93EaWZcu88kCN2eP6ZxRJ1Rxd9i8NaDMgQwwtDtqMXh9Wve1uxieKTKGCKm6dQRaRP8x1wNd",
  "key36": "cQ1L3GaPfJjSWABpf1dRnML3jLbS3evGmDw3DDNsWK12FAvARUwC45hc7HyKUH4rPipL8hrUn2WLWwMAMGPimvG",
  "key37": "2483JghcLEdTUmEXMU6BsdyNdfhB3sT4rbdXmvipQfccKY6i79cLgKVAGKJYUrowggmvUvoEaDYwirsnzME5ZYps",
  "key38": "5KfCmTVrQyrMAPh2QxdhFTR2YHP9wiYZ2fZWi1UogNsxSoDipVjpYqfr9ZJ1N2yGDDK7wczapmrSyJSAKmok8YHp",
  "key39": "4wa2ErF6E4fcnCoHyGzrGS8FFNMQZuQ4qiCsK2U7Dq5Redv2e25obJJL1nYCAYz6WFKNEzRz1WLDfM78bNjmGx7P",
  "key40": "5tggDTZBfdi2briZ87g3crB6F7Ysb5pZsMoYqe4t6Un7kidxtWdtAczYp5LXzv3eXxr4WGGMqREMckUwp7q5WbhP",
  "key41": "4pqSjqtEg4S8gJPBB2GHW9f8gpF1FXYksvWeQCBV98WZN51XvbHHm8h7sBG2z34Jmqnfy5N7KNutcEr2gaazEk8n"
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
