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
    "Fv8qSEqkkhjKHhrQcwYrqyaWzU1urhynWL3e8seVV9VykTLCwR7aA1ZrWmvnZNPxWT9WbjF7Y4sjAfDuw6kDDXh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uaVRoH5U2KZoVBdKe6XAhFh2uGVUPiARSN5ALNXPRnwkZwjoHt4ZAS7fpvN5R7RLhwdvbaU9qqCjSAGECtQCGaV",
  "key1": "21zBqB4hAsMuWNpabS5kvBB1DgbG7vVHDM162YxJLUwdvYYBYMP2C1RYFzNCKZQi2XzKjL6oQaNR5vaGVUvAFDXt",
  "key2": "2ULaqUnuVtwsEpDCXTjZiYhWxLuXCbwbbzkEzy1tALuhAkiNk91uNoeXvYFrTQpeLgms3bFqyazEMJFh9RtbBbpJ",
  "key3": "3ENEZa3BEee1yj8qjp2h4NK5dRYTHqD6DYKZxesi618y6Z1wjeYej76VBCzZMqyVjgmYjxuj4NF7kSaF4q2vjbn2",
  "key4": "3hRzZRFiayBXgyZ7mRZAHwYarMhnxQDXqNYbmNQYWe6Chfpz3dAZkg8KQr6T9BEBWEzv8QsVEx812FL4xnFxcWUp",
  "key5": "22XzoUKiGFszdNxCuCSaA55rypbfE51cw4d9GDdQENxs9jf3s7rsbjZA9hPdT2M6G9fxfjLkbNvGTxn9ajYt6Ydq",
  "key6": "5kPQchHxHjnnKtSpiW3fMm8wdztNw4efpjNLmbUG1fJ4MFvTDtuS3jx6f4duD5QJFywdnw1bL27tSZ2rQJcZf3zh",
  "key7": "on4vmHVdRWssoTNuZQGZ67gxZodr9c8kZ7WnUDKe6bpDE8v961TYpqB1X4KgyNknasn3PQyTLi8fkBnQf7sRV13",
  "key8": "4gsriVd1seYb9Sf3Ry3qY7RH12GBCFnTbZz8sF2Km2S5L5KJ7hKeivpABN8fpvA4ENExiB1ogpSjuHy1ogYmwtbW",
  "key9": "5QNkpKxA9E6biH7QpGAdpFgumnopheMmqKCqPcFpy4XaJj76X3xragVSfZFjSnjjo4j3SKN6EXxoxrfkhFGPQdGJ",
  "key10": "2XcB8ZsQVsiPrRJBJ7ADbzmyxByhNFtmn1jFFgRgFyrNZe2SpHENd9sX1HvwaAfvM6juMUfbw9hy5tNJQ26uVXyb",
  "key11": "5woU5pDndEr9Bz7Psd1ZnQTLvTKCUoEEaX73PPirWqQt1mjqaHf3g41JnA9AiJswSo6YYCi4gi2tgeCiQzWH2J6u",
  "key12": "3HTPXRasSV9t8ZqUDWEHHCc8AN9vuK6LsUJT6DVMJHmBnRs5ZupJLEScWDF8MCZmMk5U5K8oxNdA2eKNn4fA7BwJ",
  "key13": "3gtRXT28mx3zCwuW3Qi5pATF3o1vAEZh3rBoxoMZ6AwNTGBkZtJwLCbiHdhCAdyM7yXRJYNWvuR7b6XBybtfaRqB",
  "key14": "2yeTPw89GvFLEkq4hrVYBRaz2ke64U9hqkZDroWGFeUEhQnMdtpHMLcCGnZMZabCnYRLN5ziLAy6ztrQ2ZC2LLT2",
  "key15": "ZGmqxqskxcFoi4ZQS46pCGEwAqoVScV4A77nZuzoWrrUU5iBQ6BK9s3smTb6vtSBfXcztPZPov39vxTwhpBkCyf",
  "key16": "5jWh87S3Qu1pKa4g3imepXiWjDyRcXnPwWMYooMHtERTL6o6CgmHGMgaT3H87ARyjjJJUSW3mE7D296m9V2cmoTZ",
  "key17": "2ADxa8mZAJFABLKt8dFmksma8rniMQX8nbCZLCQFPRaZnrw1ffxCZco2Y48NU8jCciLVek6mchNy21Jd4Dew51LP",
  "key18": "4r7iyf6k5qJNkeHrCynxDAEbKeQjhZjHqxace9CSAqfN3EY58NoJvs8hasAxahuwUc54Sex3rRWP2FNe9QNKnZsn",
  "key19": "3ngc7DoYah5rspzqF7kH7zi8ytAeUTqE8Xhij3NyNsMBSc5AGJwJdYtGMqJf8k3uRN6JJ5tgBwpBXcg7mwh6shB",
  "key20": "3kM2EZugGnosUwnJ1qRo8eN9M8aDGbPUAGKnD8J9mLnzqNfzmcxtHSRtb3X88yFDj7ktAq4bSUehnA3iu78cyGLu",
  "key21": "64EwNBNT3LJG3tJUVJmdc1x5igtJ1aqt32epdhENVuTZs23GYud62HFid7UgizaJnNMmQBwsgcdEDfuWWXTeTUrQ",
  "key22": "5tymuDxn6sSdkUuynUKVvruQz4pza1FpBAmgkvXFqKzd2QVu5rzxDqTU8eMUdyZ923Crn8pJnNxhyWoTDjfN1arp",
  "key23": "2hJMMgLF1PG38mEDTnu3rQjmMYia3Sz6GioTU3dmCm8hacU23ZmRhJfNKf68JLQr4nN6JCY5YueZ1XD5m6qEabUn",
  "key24": "4mHCjwPuHSjvV75NYEw5kjPWAfzoyCtWpaQv6fNxfktNXAsYsKcR79s9Vneu93m9nkk12BWSHjGM4zEJR4wuspuo",
  "key25": "WYQurozkUsmMvsYXWAmCCSZgEqYUbGtspWMGCZGJGLV64JaeyzBvQBFVkafF5f9yjBA3HMyeV7n8KVhg1fTuatj",
  "key26": "5sgYWxJCBaJLpU3rft4kUa6D3pFeezCP2cNyUj8JuTLdQAJLj363Th5L2J1LxWUfQrv6ovs1GisLnuBHExHhTUB6",
  "key27": "4i9jMg9LoPr8EJcdkkzNpSqdbiPoJ6ouuvUzCLE23aGZ3GjF45z4Jt9uQj5tivMXf2FRApLunNjxmEy8YqdYG8Dz",
  "key28": "25yz9wdtCYpoRwLPJFtt6TNAHyBPBURNeJxdvPyAeKMCa7g4s4T8eYEc1tLhqA4wVEvn1LTi8TJCmS5KS2P8kdiK",
  "key29": "2GE3tPedkYTy6vrZwRQoFjyXyusKS6LRzKSm89pWdCroTkwtENXtg4pKT22nF9EjafPgtxmFsG3SvEELTjFAJ243",
  "key30": "4d3axmMMr4AbznXh7DRqZbS2ouYsjuEFtDzVfNyZJdV2mM4M8BTmqASFQao5ZzEs4SN8HPwQTpMMyShmK5bru365",
  "key31": "5btjhXcKzfPRSWzYH5V4BzGgsm6vH9VCjra8MJdjBfnh8Cqukj4MJo7uWGWtLXuwEB3aMNrjg9wLiguzUndce3g",
  "key32": "4PtL88mU8r1SZyyd1fDxiQsieTvAFs7k9fhX9abJwfRHriarhiBz94i8NG4DouaDp9yrWxCCxWXH6w3v4o4Q4mF9",
  "key33": "3iGzVMPw16XmAwawNq7Uxt4T8UPERo3vc4p6uHNde5vdNqznrAPQBdTYUAVx95NiHnjj7dd7AESbexX8mXJBgtHw",
  "key34": "4Kh39GsVkwJHqZhScEfWo1Y9FbLy1BFGFHiHWyX1W9wyALSVfKhrx9Q4nqvib5nSjbM545zyqkinbFErYpWP2Dc1",
  "key35": "37Y9gFwmDLgJFrr1CosCa53casvn41GRhF8D4w9rdNHgpBJwdveUnPqDjmH2p7aYajDFPvx21kDqRKGC5gyTJLov",
  "key36": "R2ppuyRKaT7UsC7rX2dpHzQP3q8SZNyCWYJXUDnMpudFxk28zZPYhBz9RGCkEWhZf3fyzJJjV9iU2JuePPXrHNG",
  "key37": "47bxqxvBtEipGnNrX2qX1jFN8cnJAJ6SBArhX6npvWtnFrws1HKaXUna94oXxqHFYkYAiyQPEiPgs4Yd7XfP2v21",
  "key38": "5VEUAVXDyD5KhDBAfPFgNMkzeTRxHCxk6A1MES7PWyj6vyJ366XZ9XPnXDRkydnjd3gvh1kZuyhND532pGzR39q4",
  "key39": "4BEbuHDJugreBh19xJqpkyPbHZn64ufa5777avBUBh21kGs99z4qtSFhmvURoEjN79WyHRTy2NjsKYmVig7iBimZ",
  "key40": "2j3ogsuuc4zLd7adgRTaMZYy5kzokr9PUEsYpgCC1wD2Yqr4PV1go3LEoEkK3mFJcDwAzSzamJooo6rk55gUn1EG",
  "key41": "ssqeZCYonSy97WNmfDtKLkTGv83TupEz638PHkPqkLa1buyeoQa6eBb7jigVB7mSmK16HZvTiMX8EgSbnNhkp38"
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
