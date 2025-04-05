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
    "4EgRoEcjaZCABJH6XfdKhrbpBDQB5Dk5oC1y5Y1ENYKqh62ctUiZQXvNdABb999m162EFpooZ8tWHFfAvAkPB83m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57LiBEAAGzzzb8MUusQrX2JT8StBKB7RXjL1WhWY1QaQGNZXPwc1cLsDbE5p6eDqj8eF93ywCPPv4feuJQAQSTbN",
  "key1": "52syZdTgmXjTMEEAsdUMFe3Cq5iA1MjYiqZ9pZTUb2BXgvtyBA41txxDy2U93EmPxANpfrpkRoBXDqMLk8mG1Hpr",
  "key2": "27GHQphzUiWC9VkajaZB67YYBmAdu8C2pFstdR5k2MpQ1kaNAmCmtvzHh5nkyqsR1u85kP81QKNyzCrdei3BBw1n",
  "key3": "3z6JdEXUwYKE7sZ4HDiYQhu4T8k2VpQHCHGNRt1W6yzGeHjTSTuDgYxLyjxZ8He6iZbBdvmPwXNynb7rHahdLCmZ",
  "key4": "sqVsFahLNZVvc3jktHDMTRjvmRUhntJSnGcKVLdjS1j7msg9844b2P7DSERqfFscJUDRvBgnj6ykGvg8RQEz8y5",
  "key5": "5yorUnTUsUycHieTvcdmFqCtn4tLx8K9PqCwAN5D8uNLaM8YRBd5Rdkmvp1wNxhDh6Cw88WyyFNLLcirVSL33wNV",
  "key6": "5CcDeoQ2YedUbr1JFo8FYrPsGRRj5hAbEY7XNFqtMBYHPiwBaTTYKXVMQGsMyPT3DpvJAmmdpxxKRmjcGff6i888",
  "key7": "3YcDGCZoYd5MXR8bLr5tSMVxXWhqnYrbm8wn73QXotYhytH4HFjmSJWRuREDX2jKCyaWThdXKXijzZrpxuXy84EA",
  "key8": "2VE6NVuRgk5UP5woY5C2goZgzsZXTgaTAEpsCJjEFqLUgRTqqmV2n2q2sUnfAFiwy9PCWaPQvwV1oFX94SshjiPC",
  "key9": "5FX9CfN7CoyaMD8UMta1FxvZnRMa17YVq2h9SvV5G9jjh3DW8TJoZZJWsSvtkwPrixVCSpUfdCcJnHgsDb1BonwJ",
  "key10": "26ZRkNh7T8GPS7qazhwb4cebpPzqDg7FZ2kBB1XDE1WFExTFjDe7Ri9igJwvNMjvJU3LGN4DsowU7df9CVTjwwmY",
  "key11": "6JYCXUNQ3EozH8xKWtLd9nmT2yRwGPgTQuJyCHoWU1yvJ3Z8Z8QXqN8BVBR7JUxG7g4FgJ9DuS9PxT2GptgX2CN",
  "key12": "MEuzXfPegzxEMBHmn7N3qimNAxBhKde6GHUKZ7FtHfocrm1e7kmVbavayunEirHBLRRiWEupEqoourbswG4dX3o",
  "key13": "4yU6AgPiiKaZokqE9pKt8ounyPFEdwHAmd3RPyKVsBZUm83Se9sqG4gZJ8J1PXA25JEHEBXUc7scFhWGUq7ENkeZ",
  "key14": "5rL3UQEvzr3BfK8PH23THU3S9fRp3ZnizEuA9VVAYjPneYDMzgUVChNZBg5HwRkZaTB5CShnwc6XFLaj17P4vJim",
  "key15": "3JwijnTxejqnUWu13CyEfPUeQHdaNSJbQpkgYyjEvJxnY5YRY1f8k6UwQ8GFqbx6KDfVZEyQkao4UbAvPAyPy2PS",
  "key16": "3v3mLnv8tBBc12d54azjJnQTp8QjFXNKpP6ke63HAcdsUzz3N9zr69LVvjQV7EcWfkNwLAoa6SqahQWWDk6kWMWc",
  "key17": "3i5qaCp1JzJoQHSuis5zu7361XYVafJv11D2AQpsogXJWBhCRJEiAnGAV7xqeoBtay41ZrPKxMWqRwNK92S5RrPA",
  "key18": "2QyqeuuEwkKRqGgk894yf3SoBKcx3g72m6T4TDeZ5RNrvw7Qd3aLiFZmJyES2wN16KQ5v8r8pa3YUpE7WWFveaLB",
  "key19": "5FoJ7pPsuzXNETL2bjwSaD8eGQR2qT7r6XJYcCHoufxS4eA9sLz8fsrmFrGpsUjuoSsB6KtvKY6CgQFKhFVR7pd6",
  "key20": "3AeGcPN2xeYnvnKivdGZjT54igRHxr55TQ1cxgbEVbQVpwqtaNh8Aqphp32G6K4ZthCpEV3P4v6fxhJvoLopf853",
  "key21": "3ifxpzdCGMxTcxxzaDambiHXz7K4BTuwJdEhQSqzHXouucAhGb2MxvP2rMHibVrbsLYPuHW9yb7GYsXTABSWsqfV",
  "key22": "51nohmB4FYMaupgHJHT9n95iyzHz46bQfreQKwidX9JviAav6rnDdJhBDvPrH4FkSVJ9XMeGu3sE9XZXb3JJ8Bht",
  "key23": "65pvQwcJv3n5awzPTW3PuBCELpSn3ML9iC9XUMoEkh8yxXVpP6CZgfcaLK5q6kfzEJPPPDxLn1NUBiEtzkToGVj9",
  "key24": "31eicqWXPR9VftYNcNGhNqGizRxLceDH3hRbB76q1oGWsydDJaBpWN3bbbnszBHD3PeZKDn7QZsGjHscxEHB1mxA",
  "key25": "3HGWKEXyk5F3X627JEwzq13nTVi4pup731RdxktiKySXAEDoNrzvQdQXXw2ncQ1uoq7nCjFZbe5vwabrsTcDTkK3",
  "key26": "2DDWiojYhcAmBEqtQRxDZLE73UVm2c2K7AgsDvtxmgPLHzNJEuJ8coyszBnVG3f9KQkt8orrd5JSSUBmwZ6AomoH",
  "key27": "4aQjSg92zozy8DZPc1XN87sXPXDwykFt3rpy7iJ1T1XkXBvNoitKneMf46doaNS5J9mtsm6XRU9rEkFdTeD9gQRe",
  "key28": "314NPnJetj3Vq1hZKd6BeoRkfozsKcuKnVcjrQajncqqKVY2Avdr7vcKZ9BKBqedPXhkvSneSbuFiTyJw5z8jzBv",
  "key29": "2S8ZprrbqWP26KsmkTsosq3NhRdbKHYtN9GbdqT9J9nUMm7q6tp8pbmW8dq9STTW6GjNhBFtk75XgeVrYhuCK7We",
  "key30": "3ZCxZRnRA34iSg6CgHsXizdBy5P1Fdds6YA1f2cq35zNovgYrp7YfcsbB4EfNox1MPXRSbRXyRXJAVgL4dnMZ1Js",
  "key31": "3yaj3i3Vq9cJUpes5J1VD7Ppkm7qq65NCTFXybJsBBkppqucZYbqHfLQggrCsiSg7q7dHjBFZDzFJvULspxdkmWW",
  "key32": "66ewuHAtihk2ZfG5Yw2jqrq3PXfFK9C7pwBDA5Caaz6s6LsrmGDi7PPY7ruVNNTdYFma8baMY7WP6uHpsQGicgdg",
  "key33": "5QZ1GqB44Nxkh4pddVfsMkc4nh9inhVi4DvsR9NyUF8PnfVL3Vr9X7eQqeUELTc8u3TEX32e9LhfnihMbh4bjE52",
  "key34": "2QDonTPr2HtF3neWunuUqRF1s7C21qy9u8hJMjmgcJY9GwLZ7H5pRJNFq3KeubdNpV1xHDyUdWEVcdt7iPo2YarK",
  "key35": "46VoupJcc1rZjBUoU4sFS1efb2qouPBGoxuHJxsT9GQ2tnP3pwoRLC5XVUZFFUQDhbvwjFLYc61v8QCmcZY7aNtE"
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
