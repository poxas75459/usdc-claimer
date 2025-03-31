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
    "GmEy59FqnK3eTyVzSGHAyHagDd37T1SfsGJJ2sd6TXYYXZHS51zGbN2mGXCZePkCzHtsJjNwGXyFb5zwCfMMhDm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1VXFgC4GqZy7PNd6TVdjYGS1iUcS1NFeYjTAMh7XuAN8GCEFhaCWoB3qKsZSEfq1fQbfb2N6tYKCf2uBBAKuwUg",
  "key1": "4HsA5RFViG6Pt5kadom6rTHJMtzejetzD4sf29us13QUigyTHkHbR8zQAVr1VUybQdhYSdHTv9jKrbxka1JpYSD5",
  "key2": "5j1eeHMVN8qatbjYTcATkuXe7mq7NjrKthjvcXfGD1pVARLPsTcmeVGZLkqFh8uRaUvKUcCYqq7wzAdTfwWnhdw1",
  "key3": "22xcsZtXqyYxv4cTr39wNpcEKeo2XRubd6YJS7NF4LedGzB2RsQeyKakZyDz2Cr8XyRNS58H5Jtt2DbcCESS2P1u",
  "key4": "4An1EQTeQVM64Jp5VQgBfztJ8KN3PSwoaYhCmBL3fxBgD6vVdFXbc6jNHPx2tSUrfRSMsYbmHMFTe6wN9VdUEEXr",
  "key5": "4pFZDWuwW4qx3aPamMYAJGNJxdMcNLA2dS3MuH6wMnnA94fDNdiZfSmqK5MS15V66g7YLnriuY55Rn76WTzaZ1WW",
  "key6": "5E39kVJd6uF1Emm2YmUgWnKQ94UaxURSznZE3AS1F6KqWZ82Nh3KXQfwLvqkYML6wgRF9QEaSo9VbzGeFfs1x5Fw",
  "key7": "4G7ojFC6RJmaUd8DE5JELqNsP6s7CV1e6whJAWSYdkFBTGBLRFfnMEFsyNMzPRg8jXiE2pja8nYZPtUBsajxB7gQ",
  "key8": "35UCmN8ehdctEFF6zed6rhNqQBkQTVdyMwSp3CReE6s94W45R5aMe69J4134b1BH1TxicYVQqCiPcp79tJ2Nqz1E",
  "key9": "3jP47rFb7NxRMdKYaYMcjQSLJwJzPc71viVbU6wG5nBhsnjB5nM7zth2qqTJGcorNx83TmHz9PfVXLqnkAobQXj6",
  "key10": "2a9f6Yscu49YyXXW4qTnNy51bmohqGjVfTaYzEq1H3rRzZwmaa14vaeDFiRPLsauL8qZUz2Msi6JgcoeFZkDui1K",
  "key11": "5VRmWs6Bmxci16K3bNj5jfygKyNspNGqzyDefQkADztpf1AL3NDzxEX7Uo8zaaUVwVgVtho76pvTuxCkeJqp5chj",
  "key12": "2vjMRrXU1EbqyXangDZ5sbqP5CMhVprS2HNpR9B2sBawi7iHRGnTbmxTnm6gns6U676Yuve9UdA21PeAYb8M4Xzx",
  "key13": "5v3PEm6QukascDwiDk4YmEnunEJwfAqN3mMxR5MqPPhv61aEiDwVMMYAMz3D4Vq1GSX6i7gCT7qJ2J6N8ba8cazD",
  "key14": "413t3zmNoGw2JEXHw3AXn9i7nCDp8U9qjaG4GZ34oswXjTKGyG5F3UNp2JhwPoTExV4q6kV6rnjLWD3383K12HsU",
  "key15": "55WcKai1b5wYafCjxEgpre5ycT2vupz77mWaxT94NcvkrR45xkomEJDRFg8Do5bCkA9xuYc8aLF68QZKEXvQLHPB",
  "key16": "kfhjmwk39RmgKoTCQyiLGgnFWnAKY4NYxfdDELTC6Wmw9fPZjYucPK9EUeYkBvfAfkUoqnE139WvaZVAsXaB7cC",
  "key17": "4qN7L9nVaCHmiQX2FZfMAdHVaz2EvLS5sLWXrZmnPdXFb9M1fE38hdomH19kG558P5aoCxQBVshUUf7JKWSfsmEE",
  "key18": "5p7NhBQkyn9Z6rpSaW4CazP5VNxjdEPSZz2FQU8WeZ1HqgcmJWfqs3j3wyrtyqV9QB9CDSeqYN3JQmmTZKhPU7Nx",
  "key19": "VyDMDRUD1qcqXULdNegsAMVbX2qUwd6gXKFAkAMNTcxGroNcM7sRerHnERVfwHXRF8Zi7KgZzeNJnYDVmgcvE2y",
  "key20": "3Bs2sKFLiF1aq2YsvV3qfCEevNoyTxQBHowtuE4NsHUcFouiq6LRkur7grwjMwUDtcV7QeKpmaC2tZTXS3hjjDjs",
  "key21": "4TWyb4v32sMr4F4Q2kzYfaSWM5dwTZ6hVEqzT9ccjynF2LenDfR7M2UAWF6hhtcztjaXStNsczwuBtgphmpbaTkH",
  "key22": "2QLxFWGjc3mK2TfKA9ZMGhbqcY4jUv9riQFvthaxaFxaV6TS8VqxigpLW4zjDkoYubzYFPzJ9zCjKF15QyHX7yGn",
  "key23": "2hZ1JiWBHdV6n4MzxCYHG6aZk12m68KRoK7cNC7tCCRk37g8dhZ5dsF84z1GZhirVHuhyuQVigmJffEmkZf4VBHu",
  "key24": "4ZKjCVgcK9QoMh3U6Hb494MB5E7oEDQtP4Zv2R9ZTUpyPvMMZZ1Sh5ZHgqq2or5WXtyGuSGf3HN37dxbd6SSxCWP",
  "key25": "4HYKofVbZGBDuj6WnzFmW5eDvB3CZJrra1DsTqnSYQYi49t1mFjkJNwJmAZazZzx7UDUM8hU6r1oMaAGztn6ReL5",
  "key26": "4ffwQWaw2msHAW9TJTN7iZU3sSPDpyeU4C96qTm3Y5JvmHDb8wXznXMDS1kgSW8GBuc2c82eKkaygSZdVxJaX9xC",
  "key27": "22hFS3oDFeYyPNjYxZ6Wp9esnckCYeriDJc6vWhN9DCtPtszRxfaj4kYimMoecSifFGosTm4DgLHzDdetZpRMyHa",
  "key28": "tjFAbgpnHYzGo6PfdjRV4jN2kPsNnXRgZPe5UV9HGfZL4cgQCGU4maxZbPmkDnRwx9PRQijbcjnf8ZxF3YEA5ja",
  "key29": "5TnVj6xaGgH97ypqRM5hAaDU5fnSibtGWKG89VxnEswh5JFbQpYPSPxTQBpgugswQFGRPcA8gQbgrNoegp8nW9vE",
  "key30": "3PSoXVqprLuaVbou4wZDzbHwWMKFnsTPFPvWfTtzSc2M1BgHzjv3PpY91rVqHPXYSRq8MdByXAJgGgYuiBUVNr5o",
  "key31": "4CX7L6faXww9tg6w8XFy37vJyyfCyZ8cvuefkQSiuBtWPNna2NKjRCP33KCoYrR3c5cFvjNJromXgVKo32gCx67w",
  "key32": "5579MJUzPxE2e4zMi2m3TnSH5vGij5x6yaTF1PGhQZJKSCbj8mU2K4J6gK3QCkgotxqwbLAkNEpmw9MHe2okDCJZ",
  "key33": "3kn1sTBKstPU3cDvJuMC3bkYn947b46XqVhHXuqKrgdjK2vBGyo69peWYc9UBeSL5oJ8udkon5P6XT7EYfZyBQ7v",
  "key34": "2cwJzGjb65a3kfVWWXQkRzdz5TWksbr3GG7xLKv4mNQ9QoEqGnhLTDN9i9fPS8hJQPyWNdgvfxGPuETSVNKAqTJc",
  "key35": "28k7q41FLkHdxLHgZuPdujnN2fthxBWwLhidFWY64Bb3cgnkESB9uYuy9rT673Kv6W66FYioVqvpf9Nae4NibPbq",
  "key36": "2VTid4G3d2iLgyHZC5Dn8w9wa2w3B4JSht4a4cBFiZxbNHzkZf3X4oVh2D55ivRTBQcgfSD2PjK25rvpVNtE3LP4",
  "key37": "UEKv4WpejqtrVGxk1r4jQjCDLeDSgPmCb15dBXbMB2jEtq1XbKrdJSEvwjtAuGSHnEHNGK87uLvxkoyDvrunPpH",
  "key38": "zoM24A3Nj9weCLd15P3AZkMNPqGxkaH9yUzj7aFenePUoHWxHVtDmFQSdUnkP434HrxLDEyzZJthoBykvrux6mz",
  "key39": "5YgQs42hzEmweQULHVctG5tXBU85hNqyPyDMA1ETwUFia1HHYPHmuRUovZ3KTbhy6MJUdsoP8fKeUc4gzkS5B2fb",
  "key40": "2AYBHdnA17kCJWXXrPgnLimkbHYneAf6BPG9NFiJ2WonpVRWreEdMU29kJVAp9CVz5sPYnareVxjZcZDUK8rCmvr"
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
