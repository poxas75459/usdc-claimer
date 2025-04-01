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
    "27FfjvcMdGwDTRKyBzpZgdNLswWcnXzWxSpNguT9daAKCZD1inwvvzr5at8UbhnZPTNa9d6ZTwa9tyc4W8Vvn8as"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y6gg2LNkkeXsjSGMn8feoJeYHU1s9YeSvjoaS87qTZwTuQNKauWvJFafN1sTVfY4qURFdA4KsjNQNRWdbib8oUf",
  "key1": "3uMHBdiog7WrLRrNKYPTkorskML6hu3bKiEKAw38bk9okEVjQm12Ttnhd31aFRcSFk3mJwurWVCH7xMyyU3ZnyTZ",
  "key2": "5EJD5r9Fn9hzQVkktGgpSCTYayyLAXftEP2qV1pndhCqxf5qyfBySGjLdT5t2ykEBvkobJwRc2R1YLjoEktmbDgu",
  "key3": "2RTC3GXiTGw6vcunSRajBBv2EZHfZRzxYrS5fPrRxyU44wBYVPqQSSBtYnPWEtxMFUTcoZkoRbmvhqakQmdvniAt",
  "key4": "3jrEzL8iHjiKJY1hJ9P3ZmwV1TUfV9EvK7Pz9ErvPJHz5KMJEyKX5tA1gMrk8y7FXA2RhSQTk43KxFnPjsE7e5vP",
  "key5": "2dd1u2ynBtv537MfdHj8Hp6LXSdqwFCm2CzS3NDBEZe2VPernAgwx933fDZXfJzc7NYS68vboGPeNA9DGA3VX61S",
  "key6": "4gg5RL14eivvMos2LQXpKwK6EjAW2g4fwhXM8XALJE2xXfG1es95WC64w9NWwhtim3P3uEZ936dyvCYW8kvMEFsq",
  "key7": "33Gkmwuw5GtKsrhjR7hEJR7z43gNruhGTThotac5F8r1nvfkL24UDaZr2gGKBXd8dZ1bNi2fSTrsB9P9tf69VNRk",
  "key8": "3GTniN1ANEcNvgUyhzt9zq74noKXJxjbu4w68js5ocjzsbUKCMzftTjP51VYpRMaDyJGzegbm9QgpcWd9Mu8tBcg",
  "key9": "66wxqTFK4cLCpZ6omJTzrdmZU1ohKLDeimkUkwXmUvYSLisyemtYvb3t84vBBXK583AQ9NyP92bnWQ4wBREmakZW",
  "key10": "4L5HusBEbscJEqCBqQpxS8SW2KyTyq33Z9GeNGfubCBYZ9dcK8JcNY6fdy4VaARwnVbi6KyFzWztX6DuR9nWtQxS",
  "key11": "wTF4dAtqBPTnzyJRQD8QcGrGmFQVHaVuMo2rPXsFJ39f1x7WL99f9ngDqjFGXBAUQxeQJoXoucv9NSnhc4u4oKh",
  "key12": "e4xhNLuVc37ooY6NPHBnE7uxuqMME3AYgz7pvgSNe1k7uwAPrwYdyL9KxkNiyKeFKN2fC9jWqtXFBVMXYwECgqZ",
  "key13": "5JQXnJn19D6ZmtpkP4pYoyQgWEx663hjX1ZwoBfvWSzLYbEaLCXgUHvJZEg2BE1Vt32cTk7w37s9YVof7xEnM2Du",
  "key14": "59CkEKNckQovZEZ75wG5GCJBduVYG5hCte64TZAKWJChAyqEgsYuxdUDSdUnbLZqmXFFg5xsaxdvPfJUbzeaYWvm",
  "key15": "GVycCSzmmygh8tW4aERNCFJQsHdM4fjyiMda585mxVbkKiqt5aAWFYTj1YQ8LWHizdeLNQYpDmoUnUsad5bNVDB",
  "key16": "61A8dzyXSajqyg7rkwN89CYXn2zZ9ahmVoqrNzgKL7vxJSBXU3hJ9btLvBnjSfsWoBVf28dYHXLKYrnhqsfxMUb9",
  "key17": "4zpNQuKgCXLPAkCjse1vJL2tWq7aSNhLTQa7WznNEUfGUCyyTaRsbEcXWRaFdpWPrX9YkAAeZk13ssRCzSMn3sot",
  "key18": "5AYpZDbXdBzyHX8ybU7dUKURY6QygUJhN46RGSqquLwJZMeKrihaszyou3yc2k4GYJqepvAxCBBd5gYG2VapRz8R",
  "key19": "2rwQ2oHKfXagkDtAQUfm1nakbn5QTgiVfAU4arWgt3d6iTNCHEnpjTTUt4G7FHYrhdZ7cz58dwFDwbSxgp2uTW3Z",
  "key20": "4AAddvTpwmNp9s9uXEvnDS6g6aCUMMq85FFjZ1ZoAj7AKL4Su3MBgFeHpx1j2ZvPLYurfEs6WxLNGfRypE49RHNo",
  "key21": "3Mj6LwqBeVCTbv1bnLkgz9hr94AXBEkHbXaQ38hAJN8Kt3Yi2JxRKL86RXKTfBqyWp2dG3MF6TLuwS7jeojgo67C",
  "key22": "5KLc98asz3M542DKoTKwjxDGXCD1DU4gC36WAQLcpRyv2Uv1tKPj6Tz71VHX9gsrKKLTi6eVquBfma3tp8gbkD81",
  "key23": "3koMXXY1P3LtbqSqPuKWsWfCaSoWFXTrxWEFNynWcZuV6FRxdiR9b8n3PiWhQr1qTPVLVnnBtUuMdCZDTbgM5oKz",
  "key24": "2s5avgHsdV8vfRkU6jN94acC6ESUeotsyq3D1SqpzAHpqRKhgwMQEHVbTtjcyjMcYfSwueLTPXfxZyk1rAzD8KmD",
  "key25": "4fZaEcVv8ZKn1CCF81UFSj3VhPfmyeAqwPWRs1TbdqL6zNY3YbTuhkATeXDVrmfBPPTBdRFSWeKHxLbmMH2vS3kx",
  "key26": "5uAVgyQQTEszeZXxEuJgGS9TLpcRbUnom2Q4CK4wEfyw9r3GZ3N6nMzJg3AynMqtkfgrKNPTczwTBCX5zwJK1R1x",
  "key27": "3CJbEiPXwCRhsWZT9cYaWhiw7an164LnukyjuC9dvRh9twGVWwiNmbd4hefyn73QsX4sXHZ5edsoWqw8Be5tVuT2",
  "key28": "2h6JvvLuKYzhnbc2CwDMs8HaCwjwaP8fLdehgV2nTQt4Maezf21arkSsKDwLNsnveWchYdQqfAVGGUx1RjooezaN",
  "key29": "5637Qf6RW218nkcSpnkNVLtUjiTZiTDVNWTNrfe4QsN6bzXvRTC4epxfHuBTL4geqoUo5P2AX8cFnb4gaHrm5Stm",
  "key30": "3cX8ZF73TcyAKqVM4mksVsg4dJbV3T64m76BKHKGv5Jenbgk4BzeUVZJi3uM4ZdR81mLuFCHq5jpgaLLYJUDXYDE"
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
