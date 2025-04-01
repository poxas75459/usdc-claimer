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
    "4T6ttzeiFd9dbsu5BMnqjWj8xBQSvZLSFmnLgm8wxJaLniRfzXHX3CVqH8eVVg8VKf9LR3647oSqAbZyS8QFLTWq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qZobj2facoCWE7FXThNTciRzfGo22b1rkVTxen1r81WMeB5nnDTBS8AXoLskXom28aRjYp2FRiixEZh5XZcurka",
  "key1": "2qC9Q7E8SsdDEUFjGK2PosiejVc8jKMCYXx4k2xbP13hV23DUgBpmoLqNihLGbP4uNCRqHs7B2TWhVLvZU4UjNut",
  "key2": "3ArTXniYDpgt7oeuM8ZzLWuEmxfJRoWdWKR4fngYHWEFU7t2En55Hd6ZiAJ3HMpGnKAT6ixm9awgnt1EWETFGFQn",
  "key3": "419tLeGtpvARx2aCA4X2LaJiaFyASS2NHGvv9qppdWuZ2WMpZmdqsMMYsHxA8qUdhXBmpLXxeC4kUBnYXEyZ5AVE",
  "key4": "3DfEDH4ecKwL6ZYtyrfRu3hC6hFdbtNFNd3ndXrr3x75kgwHAzVeAqEV3VsEtsmSEybzTMZrRAjE2xX9PfmGGMSz",
  "key5": "52A5hMBJ6Psdwjrxfca1WMAzqCm73TLTxJ1h4YhzRUQM5cMMvdri939drfoPbP6ywtgjyvzogTQkpoCfn4xYaQ2N",
  "key6": "3H6vs12kzDyLvEmS3tFcLTnVErZrPh7uzaRzzoLB5RnCmrVzQySSRPSLE7NsZPjSWQPkED5k3A1ogyQA8Baibn1q",
  "key7": "4WijPoHyuAJptYBcoji2DQiyNo7fqzi6s392oQj6YX4R3VYqxaNy3KURTKR9NQEjUNwQHAUWtkWF3MZsbvxEiAjP",
  "key8": "5ddv752xAMHwikwATWb9uh2rxy2MYtP5suKV63NLrLqg4St6RnwgisBoZfbqMM9tVsYz8BKjNvxVSeB5TXfxv6FH",
  "key9": "b3dji6PYDvVnsE5G8eVrivxBdvF9HWLba7rfuTLNSwBrV3s3PT3LPSH5m1fXGVyK2H65crCLjezFdxyb75EjBMU",
  "key10": "4yiGbVMRSQXMWSDirMLfqs7vK1uNqAztieYyXsFRFMoNuPBRAXwvf46bWRYt7wntMr4a96XmGzQxuhPBuXc2pnb6",
  "key11": "24VGE4MPms2L4VF5TDvirq4wb9q3xCzXC12Xj5jbpemKzN9wSL3ogPQsC3gt6XAa4RY4Ek2Ufq8eLqSUrEZfRnnQ",
  "key12": "3ZEh2cnD8nuJ7i6RMDoGFW13SGbuzEKeFRDvgv7q2bxfeo2XJhsz2cM2vHisdwF6p8YtDWXGUxTJfF5618nL9hdc",
  "key13": "22vzjav6MxdxspeCKYg3pSrKCuXViCQcVk3GkoVmzgWjAgz8DHLsMw7NDhyc6QWdQT1iQhwsEJp3ptiRwGDPvn17",
  "key14": "3TankAUGTdfEyAVuuPqdRZ5ze3daCt4D4suitFD31ZyyP7ZPjmBtmkbWp8Qpcd5UFRK22mLQKSjKEDjoUdDYc1r6",
  "key15": "5xpawjqGXxtsn1F8WWz2hJyEWMWaF1mueRCDRDB8iCbLUd3MduULvFeqhCLpqowyNk7QFNadjFy7kn75g2wuRGWo",
  "key16": "5wGi5kJyBfoEps4PLCXGpEDjNoM6CodCm6uMAtcQXhNa7uyB1PQYCLjFPvrKqS6uhBNdXttsmdFmX9djXmcnhr1X",
  "key17": "37TeiQ91jH9d5ieAJJomeQyfcfebPEJ7SzRCNG2WJA76WW4uaAxWDbqysrnpj8UgK8xUyASsn8YWKcCTaL3F1hio",
  "key18": "4PzeKnsYYtVZfT493fRReuQ6gGA7smP4E7tt7qtyHR9EQNqj45u75XPHKDSWgMAKNuw2o7DpxNKnKcGTSwg23cnP",
  "key19": "4z3QHNjY8nLt2MFgUWSXuGsEmqkujAeykdqjaFUuknwmu2hgaVzAeLY3pe7Rk3bBuUFf2EiyhFLuE3xyogwFves9",
  "key20": "5LriYiuU66VVKRFseDFWZn8K224qfjKeYK7ae1gW1XKJnRnfYT9yGJu9sSWBmkxrnUkRh9CaDGuzXyZBWo3qz7qe",
  "key21": "DkC9CbyeAEaCgu3zGKKNmQHSQnHohKjbaemQExjUvdXuVyxD6RxfHhssRPMC5TarQBZXfeZ4BNdyeDxLuVrHrdm",
  "key22": "2iu4qq1B8vnWCpDvrbNxEXjNM1pWgCBoYmrcyZEK5eXheoJ9rnAL2nXBPAbcLN1LXTBJe8fmtJS6JwYYQmZ5zLhh",
  "key23": "4ghrcEgYSeidpEdQqJz76MaYhpH6o9MUprtqZ8g9cvBGWbZqzaDV9uLauzs3E125zBqr2wArNDnXnMRJSnAqH3y7",
  "key24": "67p2mpLTHrJFzjZAMLgiTu2mfaGhsuAumtnzqpHn9PgBwRV7GugRMNQSDPTYZVmbsQV1SsqJ7HDowBTivdczCqhc",
  "key25": "2A6G1GTcfMTek6MvYcMGpDNmbvPM7P1EtqtUE9sPZmZovzjrDCFWVMxDi9TGrSxMsHWJ2GgobdQuskm2P49Yz8JX",
  "key26": "2WECxyJDFLUcHxV97WewbnPjuP5JneHBn3bsXUQcn9jutuoDQ8Zy3Ruq9PLkTSepEgwxEsMRyrYtjSG9mpNFRFzn",
  "key27": "3DbBVYSZEA8C5NEohT5VTFdG9YRRD8WpJzANkaBgiBVnjTNu4D8JzizYBRJwutfhBuuwznQFv1Ha9WXUNguycTnV",
  "key28": "2q7191npiSdwpQeRXskYfFyP1waMXU7mRu7EHw1EZb24oFpEaT1rzPwMparLrhFngTDZjPvJTu5Cb5y1FCMXir4V",
  "key29": "346mY2CDDpntLCch9ChmCyEDk7bNDzDGq1BaZ44fVuoVURMeCVqGkYM8Wsf9uym7mTkR4N4i8THmDg3ymsXTJDSv",
  "key30": "633VfsZhNi9z2tGH7Ekvf8RXopCiUKd6gTbVGxHLcrE6yKw5vsmXRzQ1MY9u6BtndRMBwcUqmuQDcR9xrKZZH9dW",
  "key31": "2Cei4dav5D95reCGjMmBnmdTSWdc3HuuFGiyrpKJyPcWKNQhwM1BSmJeCzWavpWSWsMSqRDxGNSjJLrvpDUFttqz",
  "key32": "2wGpQnVLkaYZZtBgrKPk9p6zZvmUcoCN4vUvLTY2nHuQqY1EhCu1NLwv6AJztV97JdUug5N9wDA1sZmcPrVtqZzA",
  "key33": "3igAyh9yBUjuK4GtK3ESRQj2ZxQTkkfhBzcGKCtWoiMzDRKCyJ4Q9yAJj62Js165R9CSc4g5JcW6zk3bPAGgszVe",
  "key34": "22rqfDXNuwiQs3KHLbjyBFn3xweoLFLZCZDtQfkJuPCZZQ7REDXPsmnZYebjY4LsKop97wv6bvWXcRPNKuCL5vbn",
  "key35": "4mfkYD2zY312CXVStw3jUSN5rKMH2QaQRAydDGBkj5avF4T21nhjfGmMKYPzV8ckGa1JpfcCburaci7CSuyb4vo6",
  "key36": "2a5bqixko8zpTQfnZLGB972qqURGDhbNPqi9meFAoUEheoy54T8Vrfc7nKifcLmLKGxVke8DCJDiLiZWVY4Uo2Zc",
  "key37": "2ws1uuDxXQHnnMKERGB1KGapMWyUakWmgWPXh1zVfaJenGu8To7BYnTDZXBPuvS7r5YazUmMdVFNp9xantxYqunT",
  "key38": "5dCN4k5EhTGn3fvxm9imXVzpxtNaMP6vox52yRvM3Dt9bA8kMM6trEYDjoDwwQHF5NLiTtsYxtMQJant1VLUk2Q4",
  "key39": "2MhucxEwVdxoxM2x86LguZbBvxuecVAWgWVcziy1M9dyFXFAQXHrapAyQKscZHbhmHBsRaMGdeFGXySos4xSmksT",
  "key40": "2kJcHTxcYBT6wZLrs1pcHUXyAK2viEFJzJ2NQ3mF3VNQDrzynk8CkLjEt7ibFimTLo76G8j9b3NVH5ViQWtruraw",
  "key41": "5CZimjyMbbiW3KBLoC2jBcE41FEqLuTu2B1Wmbs7Bd5CoDFvJTP8F3SveXvf6xcouwHCUVRSjsNdZZcKG7nhe3Tg",
  "key42": "3mT6ZL5SZWYBZ3n1kiqJNBxxZZhaJmiAZyDHbp8d6mfBmx1EN6rAS4Vds8gBUKnh6zXkTAMTB8GQTnUZ3oRt6jhW"
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
