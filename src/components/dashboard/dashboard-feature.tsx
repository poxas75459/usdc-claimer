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
    "4TYuB6g9kmsWyDhhZDgzkGKeXU6PoVEm2tAQ3xg7MBBQZktMG5aGMjocr6pp9ZNouUBQPzu243vpRr7CGJc6dnwd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49w49VMiQ3V7jYzHocgWUYCQ3wqtWPEtAgWxGjFvD35KHACXbVE7WSsmetYEHMLSimkJKE3fQ6oTNxnruJ7L2AMn",
  "key1": "5oCPsNuSKf8cboM568d4B6Xk9rTbuqM72Xrw9Cc7UbLaDXA9p5zrXB4j3EGemext9qbt6sbnyoXxo1qR5j3TdKvd",
  "key2": "48pT7XjL2U39ZtucrpCeXLdNtUBEuadjj4qQDQLU2ok4VPyZBzSYfyridTnfexaQeFtoK3L33yD6jN3tQ6G1dfi4",
  "key3": "3XwWYc7vJB98mnXj8eTufsG1KD3PRhs1MuxAwHWYTF4Umh9o5WviUKczJsThp22A5gkVMYNLjxQRexZEw1SkdZyg",
  "key4": "57stuQPSDxtGL172hzS7Hdb4u7YqTAzjVo3CNTVMvDwLUwp1U55hZaNxRtM6tMDiwgtZdDTZVxtFbZix24aCndGe",
  "key5": "4mGJQz6raS6nrP3NHdZhfPTDwJkhouvvyxVjLcEmU143yjQ129MYzbXSUtN895wnwv9pPUSMckPeWgke837PurKQ",
  "key6": "UobLwyTvUTGp7jVHNjS4nHrDwB3hZqQrFY6FbfPeVQLGoJqACgxLr2MG1YsaQ26XoWojgqnKbZtQ1Zc1cmNiUao",
  "key7": "c4kMzKgjJafDPAe1GY5vf83CZz7v4Yc8RqkXhm87MZPm8i9oncK99S5U5wLegsMsaBmxvSptZrmqk2u6HJX1ebg",
  "key8": "4G1UHw44Hxt4QypMyT8gxAC7y4c5DZugnbisEnA5grBrTXZJvZXetDLK5d1iimvzXTM9dUwG2gXYRyUy8J1TuFXE",
  "key9": "3xetMUkCALjU8ZLyUApB3tzYSkCzaVbPSrQrBGT7mQusYDwZDeC8ZxYmsnj8arYdthx4kAobmWk9hifZCSLeCjHZ",
  "key10": "43DwxNZ59Kfo5SrjNhQSF3jopvx6R9egHtfxykSNnssaMv62cVvNg6KcGPLCedityHPiRc3FUNbpjkZDGMmeRHfm",
  "key11": "5aYgHvHf17ZPdCrZJ5VrAk8SXPyUt8r2JhHVYNJCdHvBensTZaKpcsaL2Cra8cSDG4y18ZxC9P9kjCgPFSn8aF6a",
  "key12": "3XaqqEhyQD3uCTgWJ2kdFYhWov6mdHjtEmbukGfwLQuxggsfUdZPkzHMBhbgAfspz1PRDtzEMtFVb4eJtcCEnXnY",
  "key13": "MLSkHpvYqWbkLc2VECPHFLsEPAuPvaHDkjaNbnAWdymE4aKhDYQjMFqvWGbypErQhn9r1KvUtPn8UspMrVtkdyC",
  "key14": "2nGgkoaVuXgY7tLp11q1hbk1FzcE3Zu2jzY5DZk7YWXd2vSA4s6979jgUtJdmNVdRtv1CgQsFiUxDqDo28wG81fE",
  "key15": "61VkCaauwckwUrqFQeekbroWuCMtnzLBQ3NxgeacLEYBoMhQPjCgfkmERCATyLDTFQvXeVGaxuTz7iHzShsbWNhe",
  "key16": "474z25oyMMDpYwZWhKs2ZWAtVLfpQmeZ1axnDv6rrUWD4jcp4zh9qidfGYD1jCiAML3rGisWnVPXx4hjSyGvKwJf",
  "key17": "4V3RUnrTBPPfcaH77GNkM4C99kG82jfYWuaBay7uCKCjQfeDCWf9p9uZkFoxjeYxwCc7PTEzSQsUF1Ebv23k717u",
  "key18": "27dCUwnYY5eqc1ddZEysdhvBmU7eohf5NA17tDUpziahNu3BaPWUrxa4DPjHr2DUsf4QJYxCbYkcRGue3xi4UAAX",
  "key19": "2eV36jJLfjbr6VpMXK1aULEfyFzzDWSdC8QhTAT4XPVKwKGxYrreEduNW6jT7jM1pSzAgPbTi4BWUc9B27hAsTFC",
  "key20": "25Pj9T3FhY1WbyvumqCg79cRf2Q8joPHe8BwrtmJc6vPHetVce7LGLHhFhkZN2yCs7gv1CUxXC9ThuLssDonN7ZA",
  "key21": "5ZGLmpGRWce4ZTECY49WUC2orZha13r1PUr1kn79brnWDJ2cUorKPWLfQKghqBMRGqEowehL5teE529SM21gdbZS",
  "key22": "51Ru3ErRiq2b5SKd2WepysRPztbBDcCPTcKjLdoeAWEKCFitrL4AyDTdDCQcHo5oiYXMDfec66vRSZcY5Ax3WkXb",
  "key23": "2QD3ofybtLEEuWWCHr9qBS4ECsXXxEnPWWS8pZYynntsJVJyGbwXBPhr1nTDHMVufKybxWDB7DXefPfq3sfzAQME",
  "key24": "3YQwoWy53TY1WD7sLjHXnK7UBpWJFc9bBdXifVKUFALvjA12qp8vJHyfGnRMDXde3wciXbXauTu2vHWGApKeMSW4",
  "key25": "Ujsc9Abec5ee76nnAyyMWaeofnZh2jd1uFuH2nVL8KaPhqW5AXYAg6WMAg4koc5A5ZChD62Tz86ezy7rsosUCtv",
  "key26": "5g8MQKvssHZzsnqRUPTC7k5BFxoKVFAaQEyGtbMaR6bHb9FQRXSAQrU8MpvM8fnpFhDd1AkHb5S7xTNnbjaes33",
  "key27": "5tnjvAouzrd2UXGEb1ut9DWBR94iUN4x9kBTPPvVGVZrR8cwpLwwRJys4V4adRB5ercyDeShDAqdfVfhDR6tFD7z",
  "key28": "55HrZXPqu6UNjRk96f8nGymWt1mTuZ362qHFjm9Q6mvJZ6QEWjaWZL7m5b5uFLGggUSoFe4njRXVakcN9Jrvee5s",
  "key29": "x2YwfVf15M7JFrrxxHrAZ93QACB97fsY7cQMCSXyQPkUhV7dfAaCEGpe7fdVhWUr8URbXoLms7ittFSHUckpvfm"
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
