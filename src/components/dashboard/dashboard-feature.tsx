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
    "597ANJ5eVEihaUux2Tm4hjem9u8DP1DEGwPTPVaVWpEZ9dBzjkiaDtBUAXC9GpoFwH5buKdAheKswYMzisWmAraL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67DcqzphgyhnKLorSu4ah7miV2qT7uG47JCPbrSsUrXf3DihK7yRShfwBartDYkEchWYioB7f6KrhyFgCaBmDMXE",
  "key1": "3VgLb2d46bQf7EfAQvvrXcE6c9cXCbcU64n6UJNCp4ei5LxaXCnASxXRkHtp5qs4S6BZLUKG3twrbFzRMjarGsZq",
  "key2": "5fkjt2X86wfknc2zgH1MUEmTsU4pByAuUspcsueRdivqxjUJpLgX9G42dqbzR3uhoGXGVmp7wLkpmVZsUGRokBTb",
  "key3": "3j7GaFxvsv41QdDeYPo2mFX6PnAjbkj4tL7eiWXb8gRpupaNCbdGcMvSfy9F69DsBEAzkLsNz1fbD4GkXDwrwoU",
  "key4": "5vJYUkxYZmFdVrXNi3CVtN5Y4eMuEe75YeMxbmZErMZXfammu1VcrxUULFe4ddUaYec9GkhBxtu424r7MAR8Wdes",
  "key5": "3PoGvgPFsD7i3WXowJBDdMVKNP9uK2H2c8WFdz3mTgchLjiZrYPMiP78zxfLzPHmiQJctRpN9cJh4JBBryXfHfzs",
  "key6": "3fagRtPGZdZBaXfFaDHx2vEpFFkxpwETWtrhAzHUm2Dtw7ewiAxiHFmudsh33kHocn6HtHZd3abVFssA6N4Bh3ZQ",
  "key7": "2mKfiXJAJBq66mGdwZWmfqQZAP3a9dTYH9uuw9W4Pv6zPZsfu9HHNGTHGcCR1NWayATiLsvRZYXcTeBTByNpLKuF",
  "key8": "2So8HsSwrGsxYSCtvzHwaAsxvRyr4FpNXZ9f53793EcVSy6Ec2XR27k6QvrYwLaAuSmyhZqSdoNpDDKoRpp1EGrG",
  "key9": "3gXMdzoDEjRvSjMrW4mmmTmD18zjfB43bmwGBgwJ6zcq3SKrwQwkV9aL6f4p3K4KLZULTztWtQUFLdJHYrpvmGys",
  "key10": "4ECGv6qqMWLX5WweQs1sy5n8yR3LT573uRpBsSyNpTnWJ7Tvoco1jwLfzSEbJXMAbSuz8PzWXecZW3x314Ws1VgQ",
  "key11": "4bbg7eAs4ANqTcFRbXwcmkwtdQe1hhhqZpyCpWVZCwGXGxbrk5RgdC8mRc8kXu6NUMgSDsXGMe1ck7hrBTcoFPef",
  "key12": "31tWUvx7nSE1ctyNUJA3qePwSUgYf3UjPMFqDbU1TTUH8MsBHn77TrsPs8VyJuemX1KJLv2NVHwxPHBaQb47YHwD",
  "key13": "41w2xCVupSxV1QtezrxMfRLSzVcUDEFPzd9fDyVcuxKs1rqR1KF7m9nBGuDdDAsF365R7ZcdAX3pZZGiUdBTQMSq",
  "key14": "417F77HSSvWMBzB9yv1T1FK9FSDJRGJttX3skJkbTdWPwUqprWHgT1a9y3eh8e7aoMED4EzU29ARwQBeBptrEDbu",
  "key15": "4BWhjvTrhXrKw32JLehMPAfC8n8oGxs5Ngkms8BiXJMfTxcNZjaQVa3b8Q6joH5CjFp4KasvLqpuZBGU9sySMigY",
  "key16": "2wR2bjf3s1gNvk2bcc5SJF4G3WjKs3vgRaMqjHSwi1GHfw9nZm9WabTGNxXymX1aKa87wViAXt3j99KC3iHKdWaB",
  "key17": "63X2ykz2ArvJW6A5rXuivuJakM2qvLGjXDWmdt9zTVyHmuXxLTGH5nDz1WrG6WLJLwefJMm4o8W8m7gVHETCHL1v",
  "key18": "5fXQpJwDSAQHNUf1w2kAdZMDgLk3Zu5vs2S2o28QUMA4zz9kUXouj4m4fugQaW7w26FqGDZjQeo6F22u5adLY1LL",
  "key19": "4QZEkNzkTbrEbeEbVZYZPSE7uNsGAGCbMCDVJ97XKXux3QeGRoSt35bcCYTWpmNsFWkC6maaU9QRvQ8Rg9o4orXa",
  "key20": "4WP3SCpvf184WL1TbkcD82rYq1KYNZJCSaX6pBpJpWTKXPLWhUxs4tbA6L2bikZu6XWPjAywyQ1FMjkUTTCmr3ap",
  "key21": "2gyyG6QhysrCSo3LWYFStsAvvAVjJDahktEVMSgpz3E1h79kQB2QcW1by2cHZEC9hHoiEbBTPgZXhhaPtabshzPc",
  "key22": "2UtzzbCxtsBBnNQ3nUEecuHhwJACG9WiUKwpbjSnVZYVTynf1vFvSWpKiBA59feBZTfSbEnkUp6ByiCrNtKSjAk6",
  "key23": "3YMGL9h3jfcfwoHCZjws2GbSwywTqKBWsbUtRazCwoy9xKrL1pDURAfRxTg8c4ak9akNfN8D2MMcvkb8BivQxtDS",
  "key24": "3Gs2KHFQLWHABJvPduFHRwMj8gUaqeXuif8VEG3pFkB3oHdQwKRMNso8zwKm9DwDzm9cttvBk8qA1L5BdjumVxk4",
  "key25": "4P6txK2uyAX9xv5ndtMWzPHSh22ZkNxB3TLhM1qjF8wbmdv5kD4fyDx5d2s8nrCpUhniLwHqBUQ3iovBBVGp9iKG",
  "key26": "4MbZf9gCEEPPnnAz4azRskmqsRGYS7QFfxDDfDLB8WwsXHYRVd2VusMiGW94x7y22wcEpb4FbE8va8jy1G9wy6qF",
  "key27": "2XhYaTHujKrMvNKwgyLgTM7z2dX9yCrB7T7Abk3LjUSJRmF3HggWxf3o5M8Vt47wUsutkAEFbPCn3SHwwqJx98F2",
  "key28": "294krFKLigao4SRt8zHqDdFDa7MTC9Lh9qpgsThLkUxy9c6fy348Cdor6WoGGZNpyDnNcYmTg8MPqEWdY23cuL8f",
  "key29": "23HugWkrRh8uqtvPotD9tu8iPM41sesEXeHT81s1Wx2MjRQPFrBuhvYhspF6qYCKcmNb5Q8JcojjnV6D54ovqs86",
  "key30": "34xPED3fM652rGM7Bu2HScCEmRNjBR4udzauY7YTWwYVBNXBg3fzasiEowCZvhgGHGNtt72L4twJgLjiPY58LZuD"
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
