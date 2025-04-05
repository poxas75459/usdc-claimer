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
    "7v4ffTVTqQkGP3dC3UB6styLMX57kooexo89E858Fw56wpCsTByrBNE9YUaYztEdXZ5rWY7rnANLcaiY9kQp3X9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RqqCg8AwVuPCKr1gb3HAR8a6Kn1pCdeVojw8gCWYoFGRT4Satp7hANbMhv5pTYunQ6Smxn3Bvo6RZgsQsRroSNY",
  "key1": "4TkPbKHUCWhdx2Rx4n6gScmj7J3PJ4zU3AGLd16cVcrdStZE5KmqftU6NqmzdL9G4tih6rUeACgM7NKPnVMDp2V8",
  "key2": "2K3S1DVmMxkQCfJpZCBSfc97nsLabTN2qwzt8bdEWPh5pfAm1KqQAD65SBhVv1YhviWXNczxHa9LmgzHJhk6Xq4W",
  "key3": "2jNsCtxkV4d1J298qGv6DXxjSHYit45da7wCKPyyer9yWGtHWUorTVMVj2Wck6aZUveZh8UaYDo36snqnhsgGfie",
  "key4": "eh3ZF58M5XXbK5KUKRuoyWjfGo8j8Yd8wLU8jzTrZq3iED4Ty1VjUgNRzbWTsZbMCVvaNNXdu8EXcbfNrT9fx1f",
  "key5": "3G7Gu7ZKvPj4KBNgyRdss1kj3hDovkjtgDxtfJfVeiDunv7rT8vUGZwRX8X17nVnnHowp93sSH57Ewg7SKA5jTRW",
  "key6": "5BF4e4L93FAKxDsaCkaptfxXDjaL36WRF2j6HdGYZzjpc82jLDmQEbXnEmcr24JQghdTcNFD93DRvd3t7z3seDgL",
  "key7": "3U7mbknvMe9C2pVmDTohgPAFdd6TkMyLdAJRmLELprpwpmQYVJPgGBVtxPUXsUEMFHPijcyktF75zoyJzZSbXQhb",
  "key8": "Xfud1ii31FGPi1TdWfrLS81THJ3FzPcqptKBve13xw79s7A3ohr8hfETTkD4iZ58DX74ipfRgtFSvYgYLt1gzPK",
  "key9": "2sq3oFnUMf9jBGXmecyiJ5aREGirkZ72SJKB6dgbLTMsV8dkAq9hSAUQufhc3PPyGYB8zM3h45ACJ4XgTLXVFL8d",
  "key10": "3HQ42qXRW84gH4rngufJ7zGQPcyjGZwrAy1R4oakY2BSPZiEaVzjQSFfKfd96u4GXyktR5xC7N8WzZe5dx4L45HB",
  "key11": "4g3PkdxSZLsDtG6e79iHU348YgtUBmwduqytVMAZkURp63CFgEE8uZTLeibsTTAQDodEQ3LJ6obwnHvNNp5eatVy",
  "key12": "3HZD8aUEPuGv1WPFZvjenrLtDj4rkBtPavXiiuwiciR2MfTqJuVDSuKY4aKydQkN9R4tu2yvaK6vxk6ZUMDw7v2u",
  "key13": "4tKZVNn6k6bwHnEufTRFU1JWcQJKrrAvb5UDuy8SGrZfdCip1GAU7tznCQTHW4rpE2jBaYyG4kUJFWtXmB3Po6hS",
  "key14": "3mubcDcBLv3e3RjBXXfXJir4Wo3Wv2wzmgZXJ7t4C3FpCS54hoF3s3yaoD74Hy6oK7pSSxX2P5y7tf1EcLh5zN3g",
  "key15": "3Zq3GZsZzDR5rTWa7NR9M7o4ygqdxCVwwGxErsNk7PNnR7Ry3j6TNAHXQViDWLBnxovXoGmxsSwBqRfQvxJqYaub",
  "key16": "4UpFrQXqZAndDsF4njLUsocyaqKSUpqPQxekaMgtmHazAiLjGhQbG9D5ycg1yV3GzYVxhuEvx3vne1KTaf7bKkCh",
  "key17": "2sTWRTZ3ENbW5v9ZxHuJFsWX7F1s7fvp7mNmQLuMracgYecUXo2nmJMBwg3CfqfuF7TcAUSqdKoahhrDqo24ru7H",
  "key18": "4kGqi8y6gRREqvuPtJWo4Zs7MqKientdD3SFCMkrkW4Ltj51PGCvAsW3YdvXdkZkupQAGvk4Pe3PN8qA4HjuY4MB",
  "key19": "3tgUnyovsZY1tEaeQK2uHmaNC9aq5DN5BvkeZjyDZFCbVByY4Q89NumykhaA5QtcbvM9WKTh4uPZC7TkA8KFPf2",
  "key20": "5uSc43XpcHczDxJM48r1D3aosmRDcLDELrtTW6DmGUFQrQFbMZgHCzdGyPWgSr9dcKmZXXDoPksduSj3McTuJULX",
  "key21": "d35GLk5yTPgjXb3jG4MqvpBmsqptrhQFPBZVjtRAk6h3hLcS75dZk5EJogjcfLj844g4EosFQwST3bHwCqCreXH",
  "key22": "54AFDcLfzz68VHRMEYebNhTWTqBRtVPQTQhJD5pZVDYYhidmbDeve8nsmwod9orFVTq6NSTXwzMmrh5K3Ecs45PF",
  "key23": "44aqSJ6SB3ZzeFP4CTcTpkpv4z56jvSSscPLxYsF1oZ83mNbjUaR2PqCFhSekAgX6LQhLGmCnypsLHnjsu8Rw9g3",
  "key24": "53puv9guZHdVAmCmiLrgvVXyBauCHLjCMR37Ner14QeaX5rakRQXbVRQzPqomAKsVo37ZaPbJwzMYdo4CdUCgmM",
  "key25": "cmnCV7GbG6xmHqwpC3YyBTa8ezkTgzoH54sCJGGpUUQBesFCzg7fqQp1LskNBu5kbBrA51t4pykuxMuWWdhzpGW",
  "key26": "569XgrQQMG3HB88fVW9LoDhA2KoisCUwrmJ8Ry2H7R9KsANy2SSi7ZGja7MaLovSqTq5mF5hBURtSUbXBheuFMas",
  "key27": "4b2JFLuuKpZgFbj1GZz7sK4YQKMNNQQEoP2L61msNvAKC1R4E9YtUWq4wxjxb1aHKGAdv7hwthBDRsfFPY8LvoLL",
  "key28": "LMNEjXnRNK7KK6BuU1ZKYbNMaJDLpGzFoY8RnE9Qj8T9FA8Va37AHASsTcn3KrfUKrTHjXTteoJUfbs6wAVDBr1",
  "key29": "2N4nFau5eXdFzHJ3wmmpN9KBUMwaXP2ndWP3J6QpiXBzJoko5zBq2TGd3VPYMtAiADCzRTxScghLhiM2LEogw1rX",
  "key30": "rTEP5bhD1jia6zpF9M74zpx2j2AXmHExMhKnxtn6WSo1KNDANTXKrFyKC3gxohZW6CHnokNAd3neMmfUmcwFFHr",
  "key31": "3afjmgc9LSLF3uedcgyNZ3gCNNmr82S3yuKxdGsjvacajmNFasjF1oBqAtaThutHnSJVho9aWp5FkSBYY9aELAzm",
  "key32": "2r3fajQZUJHUaY3TMHEriaxnZXSPzVh9pBzAFg3f1hkqG5WrzTUDNWfcmAYSCT8nnSbtuSSkpPM5BNqKCT1qxqZZ",
  "key33": "34jJR1kUw99bz563knLqg11aQUG1eY8or7SfeakHy9gYn4W4ndAWMo7ZZur59EnjzL3xovkpD3ctQm4QWMqs8Bu",
  "key34": "49aoLJ6NU1k7Y5Hn7yk65iWuEm6zvYtForodi5dwkoJBjfFvSYWUm7dzM7PK88Qg4TTBZJqUPUM6i7AMqh3dJUud",
  "key35": "3p6tRhoaRBMopyc3rRLPXywgdNK7r9wkyweRp3H2mzJuCKtUp7V7p7oFW7eGF8wxfAEUKThrQLYqw6WvWou3ybDt",
  "key36": "ixgptWQhWYGRxmcTHDXppbKp4XPQzaKCEwozcoG5RXMmUDeXhY2JLNAxwChJGKU93QE1pxiNH2DQJd6UqyBfVmU",
  "key37": "5KmrVQbAjdvtJhJ5YcFFE7Cdj73wCDfbLGcdPBpjHoYHzKvP9C4WcsquuYDmxuYw5b3GVZt9DxqgWEzHucmK47ix",
  "key38": "2CNHsM8R9ZaSvCB2MhFHXcgbcMUgfNwcbzS5XmSn38i2oyqSJs2YXYrRp7qseB51ormZTpYP3NMCkdPNb5nmeF1j",
  "key39": "5RHc71t4kXp65VNXXSNLe1YvBgW8EbDRCKux1jrYsNVZ5Mr95JWfNMALpvvi9sbt1QhfrLsY7zXb7yKvvZFiS3Lw",
  "key40": "3PzSaY88ae4psXe9iM2yyV8Mypo6bNRpzbonZ4FBwUcUkVhKc1VdhKKkSAhQteG1vnTCbMGPM6Z38tYdFfrUZxo",
  "key41": "ci3cjbqAhVUCBtw7LPG4kPACpoB13iptj3CEDrAyNBAehG2VKv6y5uykg34DMkb8uL8JdW6DbvJ5QreD5TfnCHG",
  "key42": "4EXqsWGPidg4ojSKQRLdhtatKa1LSRvXYzDojUp876ntbEWRyw1F1nPXGt7cVKAjmw83gV9YMh8BJLyY1uSLwBT",
  "key43": "327ty35bpqWnTqJY7qvw5z5k1Dqxa5onGL6fncPtH84HseD8KFvdGETnbfCo1BsGLAor8s5zCJj7zhKo75ur7rPm"
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
