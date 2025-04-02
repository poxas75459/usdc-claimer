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
    "49BeYebVfiX3Ehy52BcrvdgAPjNtUGLUHi8aTquFkzJNHRWtVvUg5B8ojiXhwVghn1XBwNyA6vKUNJ8teUy5j4tu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wUCDxmYiod894iV4vdbJorgNX7Zq4UL6fHghciuJJvDoehExWJZLAJT2Wo3P27qSEbRH5Qefo6xkYPnARvVpQwq",
  "key1": "5GsSPNUun1BPE4f2LHUfzAB8MEk8nvuNwd6ui6XmK89b8B8JZroNaCHGAUVCYTK1RaQ1SSeCvCDwjxdijGGWWECh",
  "key2": "Z77jAh2vw4fzqaMuAn8t2RBfVUC6yKEAmvm3CukffWmd4y5dfYdfD9D5GZS5jjMJdUEXS6D34Uo2Fncz4CRi7Aj",
  "key3": "5pKBoJqbcCVTZJDgM7NP4VTXNXmVLRdjYFktuvAxN7MDgrD76MdTrYT5bUQGLi5KN8FA3o4LwksrUStCmHP17p4z",
  "key4": "5QE2NAPDsH6A1DXQvDGd5i9NhMvg8hw95opY9LEEr79LkXBDWfq2bJpXhGVMpkiRrfNPqBqP3Ch4xZ3d8y2ttdaQ",
  "key5": "5SV8ijaXHB1aEofVD64q1dzGtWQuV2ZfNYUcyoVvpfzNueBLqTtARBcdtgsm4ckhoDB77PJSaqnFXaxG2XpbvhJL",
  "key6": "BefdDXGsEvE4JPk4GgMuCkBQV32yHMK7mqbwFux8q41EvPCGjckfyQefS3hsGNotyAmwdBQQQdqQP9UYFfXd7cc",
  "key7": "sYQ8LPopz1eV4NeGsGExQwVgbTtKbJHBC8WyNDv2PPoeAg8gnw9vNq6xxik9uunaxDiBhYx5eM6E5c5e1TVWLUU",
  "key8": "5TKNJX9jXPiz6eAySLTwkqiE8DLWogAy49abVpxjP93ZQDJXq1UEEwxNMV2y4b28T7Zquz2UXhAkAhUXnoU7pQ5",
  "key9": "42vWAyurS7VsP3C2sMceAWbeF8aUCwqYNBHaNLW4DrWz2ctd4AUcaDU6M6mWpWFSnxyrEJLY9AvCwmpi4Yp5UnB2",
  "key10": "28zbuKYKaCD8o6yrM7WdqzsJN3sixSxVLaPFE4B2G81z6NXbVGnssnKyZjEwKTabmG7LY8c7yM7jvjJc6fKe6bmc",
  "key11": "3fBnD6dAeHfNW2nSCSX8sZoT4jofiU7dFHBYmK31BfQg6cYPwPBjbUrCKZxfZHNP7PoXrepzgBRRLqTFyKtKXm4J",
  "key12": "4HiifUxfNzKBTru5aMa7qzBJcFwfSJ7oeVtFhvSkDG8gizBu5yDFx2TGibVXbjgVDRTVEDjQeM44UzN499ZBZWVQ",
  "key13": "3WiLw9aMiySErMcB2czMRGn9JaYhDoepkczGzr6zYRwnwC6qUXMfSeYjXBXzWc7ti5gwbgCP7M9zR437GojNs2Z1",
  "key14": "7sKetTZRQDkcRGUKjVLWqjjv1D5sSVjSEWtoJpS4QEyAorSTsAMo6RoQ8giD1QNQZFEUihXvx3yF1AGGF1Fbwic",
  "key15": "3xytUYjfqjNY21kEyF3Z2o9SMqnAycMT65oSZNs6MeGPyhGW5FFWUFkjzmjocHmF1FZapoBX78pM4LzZ4MtbbiVF",
  "key16": "9QH7i4Z34jMjKcdLk2P84gTVGF5y3toLxtsBX3AEzD9G35Kehyqv2SDSEqaYdoNzd3RUkSQnMbseQarSE94f65s",
  "key17": "5ZdYjmnX3kVRr7omiGFa24eYcGSpRQ2Bt94iHwiZfU9fu4g6FmqRxJrSsrPQU2Pzi67az6jeg11K5mg72TmkgiUb",
  "key18": "3mDkJuCMJnpQoF5etpq4NdpCB7vAxZwqfXjbsyMYMh4wmokNb3PMkLQUVoMiDxoHHNVWbCBQUnT8eSvzth4ZVgXc",
  "key19": "33SYZbgsHMVQ6zTTLfWc8DVfTCPGvQcpChjXJQYhCtNbLcm1EGRk7BzsDNARJWz5b7v15nrC9bufxZjisMa64E7n",
  "key20": "5j72NKVMGzyfzHS5LyV1DxuirNcTDcUJr575twHW5zdXr1ZRrYjnLgxM7AbEXVxt4Si5dh53QRVv7Q9NhStogwM3",
  "key21": "3hyibrciHHVX7gzNBZVTstZG4G6eCc2dMrmpgkth45BzGAbiDe99H7ZgxV5CdgQm3QQRib2HxJMsawrBJaRX3JA9",
  "key22": "3dHT5NKfN5gQTjZbFwguPfRW3s3jPxWEA7qQpLgunjoEJen4gCnwPo2U8hnPRmnkXHxPFuhmSZENESovvaZp3DD3",
  "key23": "5WLBZVAyeKC9pWjJJwqutM31e7UefmaWLcHErwLo2ZM1kqKUw239cb4MMffqBNM1pZMJbxgak6GVN9LVJrAN67wb",
  "key24": "4riQW15NV1utXW8iMHekjeLkdCNfNC7Am6yX99JoFuNk7UbSFm9ftXq6N9JGkZV2N9nCqiLdoh2ixNViqd4RosFf",
  "key25": "5XfFeNdQ6erBpjhnhbc53LRafxVhACqA4RFaNAaJ291esovBDRmnbct6qa7W4jPC1vN7iiGPWXxLzi4WiDkq51oq",
  "key26": "yxSCdjWttF1uWq1AMFdv2TanDz6mqoUEhxvYfqFFcqcH5QdJJLUVKKxi61ikWXLAafSu8PW3FpmkzRfzHJi5JfF",
  "key27": "5GXcaii6s3uetA6CQyCShXzNUnHxYbEjynL1qpo1oc18CShC9SvjTCi15mPU9yzafZFqhsENZF9XMwQgAnB4MJP9",
  "key28": "4AqRDgK9JBBJNYwahTet2fTCSvdN75841ENbumtSP8TTeKLxftAfWVNFvnhg89TKp9nBQoC9xRR5znsiXiDfvrQW",
  "key29": "5QiDhCWCnbgXpEaqXVqVpaYyABZQcQp5ukVRDXfm1WD4yKw4DR4J9pSoKUhKH1J6DWe4WSdHeWR3WpnueM1srsJF",
  "key30": "5JVrWmHvBZSJ7vTDY37xucw89TRmLXLjn6XazvofXRfsDdPguDKvdEcptWUgxP78ZjYd8ZsiR3w2J7kXLsjva6gk",
  "key31": "CFiL2Pidvt3B9xSRs3APf4irVqr9ADS6cRmqKdVHVaWVjfFGryhjBK9jqRjp4amEg9vcvkR2j66cE3FboMciNTm",
  "key32": "2MHFfr91zHCp2N2xEkZMrbU4UNyVLorAy7ebMBFyaeXvMFdmAwRSzDKXG72giN5Bi1aAtXdQBd9etL7NxVMCWJUd",
  "key33": "jYfhgRezKHzKCUStxkvWHWP2BRgaJ2tFQM33KM9m4vJupJQPVXBeyfoXiThD5UJYukYkXqpgRrvW4sg2HevGdac",
  "key34": "3wTAaJW7jb8UqX993KZutR1cvHsgw9h6i9ffAhttPQxCnUd6dtE8xp7wgFBf3GF6TKucJ13XYD7Utk1zQeU8YhqN",
  "key35": "4KvxCWSwVxi4VeKnCstpn71U3NhErSoiRjJxUgPW3p29zgH9BQqfPfdqPA3i2XF8YsYrQnBoQsMbxbJfEKKHjx1t",
  "key36": "9fWjrDkPiMxrbFXRtga9Hsns6o5PwVkALaLffQGDW5buN2pjcwXmJhNYCJU4UkB9X7fX5jJ5xunyyHt2zJjXFFS",
  "key37": "5fAF8cuty3MufGTVkuipVZQ2sRrMxqCnPRdHRFgTfzxs7MMcyARf9DptBgRRfKFJbZLN2QLvovLLtzJ5tFQqgKnr",
  "key38": "3viPei2NSmVEyY9mQktrBHZyGacthdW9XVKw2DGJ57pwwnNQ3mEebgeueL4StXyUQa6FN2zoddVYdT8MHHGjG7bF",
  "key39": "5nJFdeQBThcJNevSn4rFPzUFdf4RYePngq7AoW79jcjzY7h6MbuN3C54bMPzAd44ssvq5czBGnbjxJFFDo7JX5pN"
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
