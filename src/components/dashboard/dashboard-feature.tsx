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
    "5xJLwhB34vRgeoZEXP6npXkeCAVuVZ2UXB7gwDpyFrejfYMtyTeTUNEsFQD6zPAPnocByWV1zAu3noFtVEZDYPiQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mG15hA8cTun7hUs5MBpex8bZKYuZtxqywLHxrTJibTBWUzdNQdhoyMEJBzVdzC9sFkJdGAK8RcMQcDXJv3uP6QW",
  "key1": "2xdQMHF2xU9iCkcjkhEbcWEgkPU5uTBpAg69kWotSJe1TnRGR454394D36iuiTYykUpGubhrVDGQWnFQRjM8vnV9",
  "key2": "5VoWk8nPcFMEfsfu85WDTqXbK7NJqdrjgvxXQt7tUwgd7tC4ZA52k5tn9kHSJKPPZgQXH9xbai97WWqYZJ588nVa",
  "key3": "428m2C3RJZWQPM3tXU2K8cCuc8fBD6Pcfer4u5PRe86obP8WbcedU2RVg2kQvbFrGfSKxsHkoT1LFC4aAWFKEbWm",
  "key4": "5zmJcu62pNsYpN3hQMt8LrBZcnkKQpyXVTK18NxhaxLYSmb2WzTRAunTALMzLZtwAFnPb1NYtAUysvyzGFdUYaPV",
  "key5": "4DVCsgRq6JpcphU2iZvVosLzgMf71uSDcG5kHeyCP2CDDqgZienqqSCYGVtGbsztE38gCgneV3C42qJPiKVCnRVm",
  "key6": "5oEshej4Jh6ga1VHPNUCqDDZNAhyGTrV8T3uGDEzyEGFKiwHfTFNchrWeYPPuKKL16vTZuvv9YURnLbsQfweWWdi",
  "key7": "4G5pNvRb3evedyPvnemt56TXo4VGUS9gsuFzsJ2gCGxkK3pK5AGGzrKPzvsJNupVd9EQsn6cZDkx8MZbzFyd4jVp",
  "key8": "2893wrtXq1rgFJ3x9273xSF8dA5rc8fjVbyaAumuN3tjurfaDXgWrGkxWjWYwBRPXfNyQpTGRpgToDGBy2qU6jg2",
  "key9": "Zo3bjvLKk1St7puseina1aTBLkWCMJZLpvZQHJhB6cgoGex9nVpLQp9mVS3qs3fLnaR7L9SZbQfypvjmT3oX2w6",
  "key10": "bXtZgwrxLwBSrbp6unA5RzpNvxVGWUyD56ut1RwbTBm4vmKaknDZRbUH4JYkqiCzJyjDNgyjmfwQyE1Hk8zZzhG",
  "key11": "3Zyt8Kr4n6kj5Pe8UkYQ2EnCSQCJauf9rYhScoySdxEqEbQMj9LGSgNvo3HNNVfXodAYNMerKv31cTai5HssRczz",
  "key12": "59KhdcM4Lrd6yr4aQrY8WAxtEPXzsBZak2yon2Uv1q6yMD35wFXZpAgUL4SSfpagBGLvxQQ5RhHZSqVxnWjdtQbr",
  "key13": "4t9UNUpd8GfQHSFriR9L6kMqmJJa1P63c6MyK2sdN2g32PNsS7EeunZtBVhcd216mrjmYQwqDyQqnNWLY8Xmm84Z",
  "key14": "3ydx53i8m1XUFpG1QB8Yg1YxXbyGmyDonVpZPaZj17cuBEJBPxaFRo7WdhbDescBCux1g4iBQRAKZPxy3gTPmtdi",
  "key15": "2bUvjMyvAZUcLz5b1eaYxQMchfUHgLq3URN7W4Uq8Bpz8BLrPPFYEmKJaJrxKUyTSnKfmswRXp1bQfPWf8U9d1pt",
  "key16": "3W5JAwMxfSXifqpiugZhyD9ydS5QujtumFndD2P9KbDbuEY5dsBSWEe3Qn41THoXpbUHq5Xnxrvf8bbqXVghhfoG",
  "key17": "4i4YV4oWmJxAZ7367of6LtZrktUgztHY4o3apnYexheQfM17rCXkEWa6DVYznD5HCVq7ax8MZxZFFTytGi2TCCfv",
  "key18": "24z33cEvvD87fmzJakEU3qsjXDB71SeQXDjEvi5Giia8cPeVi4y8MQcd6dL6e7fHojNyySuDJEszRkSWfUMZw8nE",
  "key19": "SJ3NKPerTy55ZaFR11eCo6cUhwhxaW1QKifU5CdnPgecJLXd3niMmUtEejceHLRsJvLd9gwVLnXyL8tGRzxUF7c",
  "key20": "BQQWesDYoeTfv82VFUCcgv7WtLk8MXFRQJFm6iCTUswks4txGHoKpmdQoZM6Wc8akEBSV8SS1pXKc8iHnD9xVeP",
  "key21": "EvbJGfAt7Q67ZwV2avWBBtZoZyB9NhChqLycVZNozatCvS5YcURnLHsVHzZdMJugifpLGNMa9GpkJ1XM5hmKbqH",
  "key22": "5rSFPMPPaxe96i4ZHVYdijLCUYsYhWc2YeSrmZX9KoB7nCaMv8VgWEkt5h8zDmKMvqkGrYFx7JRbuQZEeJthpij6",
  "key23": "5g5H9pLMUH8LMq8LiUpGiSoqxzwtn6KuoQhFeT8FpvBVYhiaUdHDZLzAnYqaNY6PEpYizZb8eNZ49CUpsJwsMmg7",
  "key24": "2pq7VZibnyxU2Wgd39g2de8eXgiHZUztzqT3tY1FgK5h3ELEaGnBhtHNWGDdMhdvddprjcezAa8xA1fpJCHqNDcJ",
  "key25": "3gcjzTm9bB5R6j3f5V41Ji1GbBf1qqS1Z5WFLA6xfqMHoyfu8P7vicYUDMRjxELWtCAKDs22JzKwZmNzubc9vzJx",
  "key26": "2dG314DYLjZ5EyjxakNTk63MsnJUwzzBR9NbLqpw39QdRG91wkeF4LsPZ6po8Hk7w3zjSRxPN6v6mxANPrmaYVgk",
  "key27": "3zmaJXfZGLVDbWwo3ZdpLFyUn894Ncpy1tRLMoLXWfJJqSSG7rpRuZbi9ch2Cq9TAmRP9g4XCqiCffqaxh3JfGY",
  "key28": "5xB5MTF3VdbkJjQoiC9UaomS2C3efi7tit9BWoh27wHHu1Hy2rxFDdB2ML3K5Ub69TgEQjuTbYWVGDAv5hMHvSEA",
  "key29": "2oLNfaJCZaQWPuZ4oSKURmyiQW7DyAtUm2Ssf9BvMnkTAcskvCgVonGQv3dGC7UYx2cwmgyk5qkGwNd58GrhA9vy",
  "key30": "2o4pDkXYuWMRRSTxgPjuDwLJDENwPo9rrJMpqZwy4auPERQRE44KTbPBbuhVJQgCRaizV8VAxfHAp9SiuQ32ZC29",
  "key31": "4zdRoMx9v1deMrMP5LuVQZHC9krFt1w8pckVuHhTran3wu1Sgz73TPoZ1G3UyW5ZrMzsotD2mqWUUGBBbfFkYpnk",
  "key32": "59gRz9suuNjDuNJKRmywgMnC5GNqi1EUNYvNUwmNotmfDrycTCSwYxumdktf1RvWx1w94NFnFWjwFXYdfxExxFox",
  "key33": "2f3zSPcaj6nrCW4Z9sHKJn5dFcVae2CQzaYAGVgMpMFzWbiMVKoJ22wwtBmoxbXLmmra7zWfN4zKvagpDPg1ZARd",
  "key34": "5g3uA3KXTA29z1JCMYBo6fEwGbQUueieYcei3pePsdovs5w1QBceGXwgXHjvDv4R4je3yx2qDMgaZSVMcVXyyEgg",
  "key35": "SVZMvyou43PgGdX99VRMW99cisE5x1BwN9g3CxVMzEYiCSg74gTAaxbnnkwbyJpYEFnpjvDyx4xDtg1HkJsR7MB",
  "key36": "5aUhz8QKf6xpM4mwkcRR2S13unrLwQkELL8dPyc49myq3e21bKAfCstZRPqUPnAQdokNFMsDXgzBeAHvNTWLM2Zy",
  "key37": "ggnwFYAmH5WqmzcqYavH38Vf2YeJVpg3LQKQGzc79auP9jdmKJ8Wb1Xvp1w5ddoERe6a4G9PhesqMYrsPWjkxh3"
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
