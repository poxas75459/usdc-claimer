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
    "4DefUcyGxo9xmC6AYqNoHELu2qSLiti187YJtCYh1KvY42TGShaNma1VYifCbd4t4rdRekx9PdJvC8qd6ioM9Mpx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Sa4HbfgKqGcLoJ3rj1cAimKXDvCgg5pjkjpFnimRg9i323QP7WEa4GofQgkVPciV24GaYxfrRq5vPYUxbcK9nD1",
  "key1": "4BNeXwJznr7zYg2UezRxUrataDcMDu8DrcaXoFwS5MnrGeQjGhAPbHapb1wxt5uqijx9yWtaptWi4az6mMWLEgDG",
  "key2": "NeVw8kMDnEA48NGngFAARyv4XP1hyjXCo84xj7ZhFJPxb9fy9gevncLQM3w1kitZwgcnxMzqe9icMt3AxhzdBnK",
  "key3": "3HR35q4bZtsYDeaRUptmHrwcpKC4boSA83nBjgfvdaEpyes3EvWZojYU8EqoUtT2u8YjZ1VCo2D4jmPsK12phQzK",
  "key4": "634St5KqRPM2YJHDnrSAshMphrrMEHG82C69BLp7DJgSuA3ZmrLAfscYXWXVqL3KWbh3hnRTGeR6tXEuL4uQV1VL",
  "key5": "4xrxJJy4Jmx9L6MMPZ2THaQsqoh91vN4RxFffCsLKyqkcaAwtCo5tLcK397nL9JwArpY7UBwdaFPfg8DKbzqnDJK",
  "key6": "G69u3RNx98c4rfw3ydURF8cg64xZCLwuAgKZHa26fqGq2rh65yVK9QWBtCuLWUy5pz6XyzY6UMdJ26HxRKPaMw7",
  "key7": "WT6ck9wYRkuTjwRu868mF2PrBzyVsbvDKRPjyBS8CQjzUeTUsV3zfzDE7FipnjFZVUGgYcppSGPEKY6fbWXeEoA",
  "key8": "5VS6ZkPz3rguYE2SoGh4LPbDo9xBZpZ4YcvDVvo7TD4A8ucVKjTo5aiPpEfijJcaBvouZBwoEYXhMJrYCFH65oLr",
  "key9": "5BEntszE3QnDvm25Dcvbdsx6HJBZScJbKqs8smrExvp1GjCw8tsVTsZMzFYKy67QHpemqPvPTsruf7qThG55fUoD",
  "key10": "4VztJ9vKxEmeerB6xQJB4DkJhgoCPP41xjoYoCMstCfUPRyiz7dXTDhRtXfHjT17xaxwsohCpnp19gzc3aWBf8V7",
  "key11": "5FpNnMMPHY4PyxSTFvBFBhbKNH6h61RLLJHggVrV38v5gvGMu7kdKY9KuU3Lqfv6TL21fgNJGs9SUXAjzDod5Ryv",
  "key12": "4rPCv81YwtELt5h96PVjH6QHVWWRBxZVchsXXvhHtiuAamZPEYkvxgnQnXr2X56VA1AXLm8Cx6XBXzRkEkRJe1t",
  "key13": "3x2rmrfv8zNDJpXQjPZHM9eLADahpXgzzBqtPsPWsW3Howf1VGQts4NXR9Y6F8dJDQJXswiqiSWEofHT5tJA6xwM",
  "key14": "2EL7yJEMnNA9zwJwGjTNe58EeeStWVmrW28rqfrgQ6TSmrP9LCDJs5w6rU7Qx3BdZHaDjjmsyVSEbv1pRecdW4YR",
  "key15": "2HnJRda3QDxGdj4495ngndSjoY8bXc5XmKaZhn5eBy2gpriNmzQEgd7Vpv5q7XdTauu2T335KwvPwDyXwSVKD4Sa",
  "key16": "66Nht2weG297CgXipAT7RQfoxSqBCQ6XLHHUHRsBxCJvSqFm6a4jem4bHttbsYMUWR39a84cjA2qCMkxukT8Gvje",
  "key17": "3S18kzzkcBbM9XNETM3m85uCipo1FZUuYCRriGntr9BSQDu4ydraXsCFzPQtKdSMgLWQNpU3iFEPvT2K9DcKjKPq",
  "key18": "3B3tYf8LQphX4qjC3MfrTx3rPeA9XZsKvu4NHScumP6vA6s28fz1QoeS2npf5gKYRnTgtzYE6mM8aTgCe7NNmkCg",
  "key19": "614CsvwmdZVvWvX8HN8RKrswY35APVheFP8wkvZGM9XTyCfsZqa55tWpsU6opPi858vUR2prhj34qv42QdQmBWJC",
  "key20": "5WtxyZhZjseqAKBdY6dSkUXyp46BH54yUaTMRx7pEVzKHtdbSQfKZeK3i1NrfYesAdi5fgjEGVPZFZ15XM4vXPSg",
  "key21": "uGTy6xXjNhNizEBJFPfAh4gbhGj4arho9xvGvA52ouCGP1SodrmZV5tco4eEoXgkPAyFMmFFXoFnDVmdETYshfE",
  "key22": "5HXH4p5eKVcYbGeQUUFUEWKWNsKec1MPzAWJ88N9jfc8rhGxYcvP6mGDQp8bHb5k5qeDraC7nVaEPXHoMBLQpJyg",
  "key23": "5LBHAjHehLf5efPLD5w1vbhsBdw2Y2GhaiagmjSsixtuU3RABSZUqKRg1L5acAoTEBDTXhKNMG3Px5tmA6bZU7xx",
  "key24": "2easc4QeZbDQtHxxw1NJJJgKMarpJQi14LihToYMB5kNjKrJgY7p6AdPnv8m12CudYrNmsBVtVZsVDXALT5D4E51",
  "key25": "4pim9iqQrCN9mbk2MhLRefcGVsczYhDcVSip1JeoYVNDxVgCBf4ZTFEPGYoupKBqEv6ApVDPimDNEsDnQLtVVZ8G",
  "key26": "XXCmvXwxX5MwPX7UUXeE9doafXZ19ESgzGwaiqJFxw1MJ9eR3um6J5eKAVxfmoXNbQdLoHbkTN3gTvwRhdgtsQ6",
  "key27": "49VNJ6yiEEN36NuzxVgdVwoA6exKHQCcTbSjYsih9TiidjLos1WvTzeAkq8NPnPnjoCFGV9dQEdw9gD795u5ZF5B",
  "key28": "k7VHHpeFozXkB6xAB4mb5vMFp9Kksom9LKwcYnH7euT6ZvWaxtmdMW7vEafiUoJQD9UVhiRU6iP9kLEFirZEXsX",
  "key29": "4ZengeRj1kJCWs9WjrXgkLaQuTF1WCKN24YNRJFm3ReEi79QMsmv7gjB8WLQCFFuN7EziBuZmceNfzeTaLNE9h64",
  "key30": "3jB7y3Y7EYRBDPoNbrDr7eSgMdEZS8chLypWtvPCyGGwZjhzZ9czieRRTGvBaAtrGqscPJXZZYKRTRBKh93Jzyv4",
  "key31": "wavUtTJN95ccrUuxtSJpcAUiLctzQ4W1hZgukkvSY17Ejumogyn7RxFXtt3LsooZ2AGFUQXinmJBJjAxRyGFUHn",
  "key32": "2xQ69X6xipJqK1uxr51Jxcw8Kg3z6Yx2Cys3vERx8Z5wZeAtjDJyMg4o23ng9rPHEQdgRRydi3Lz92873gA5xtxz",
  "key33": "3MmX5iv97VJDWsM4jmhnZ9fBiYbMmtnGEp4DbUrxvrY7P5ZqYw7CUbgdKV9xmpnM3BJ6ChBMU1tBtmu9Piq5JNSg",
  "key34": "39buAsoVULp8yvkVuNCBC82YiL3DKoqZxJUuQHoHN4UuHJ1XcJucXifgp7FVqzj1rYAkFg9VEVuyErizWie5iDbG",
  "key35": "4VxLeW2HHcxGSuW1U5SB4mrpNeNX9ZGFi7tEWdXUoeeMWrHa7Z84BHtTms7B1oGRV6HM712W6zkKf7zn9tQstDjA",
  "key36": "4W1Q3k7WtkjXNfpeYTYmrPKxH1TWdMUx9Hbp7Pk9kqsYGTpQM4XhEK7E82vY1tFQN42hLnTnYU2eZKQoXctDMGQ7",
  "key37": "5Qk15yktL2rTRyE9FFR9dMMewaUYjt8LXQr4NNT9uCJRyPXJPM4nLLoMTYXpXuXjmc2qp7Hk8i5spEQWXT8FYBi3",
  "key38": "3TCmxzC5mYQAxL495yQYwd3Kzh1M2TNpJFJ6bxZc67vgvFbcMTDMk9uG8wYnfQrcdLGXuaMptW7DatbLdHfjKVH8",
  "key39": "4dkYnRSqkqmN9g9ffwZd9fsQqWaM9ykvbBJPAMF8P24SBtJVPgsE6hgSVYj1bB8CUhVMmijeAUmCSQWpXgNnC1UE",
  "key40": "4UNCN9PPW8LXVMM2WQTTNiCb5Yz3LtqSnQMwTCwz2d1f4KPrCZ47TdZ9aDDXojrhfz6W8qSZLVk8jeHWd1ag6J3Y",
  "key41": "4PHhWiFi58R27mUAWrsSq5NXF6GvLjsZwXdG1sjcdSCDdym7oomRmyvwoTDpkxDFmSmQrqdFdn3syo1DoRquguQz"
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
