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
    "kn4esW8QXhv8Bfnu5uzaKZeifyTbCcKKezydBymPXeaVNg1thLsHrRsHrueZi4KDwGdzr9MLRrpgfPTCqmnrnZM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fVfsRTMrojmKd55tnPsEmGAy5hvCw3KUuBLP7pPDPyjz5b3iMdqndPZRY9r3LDhuhYcJb1afqoZALXzepVHCuMG",
  "key1": "38AWZ7engtEuFoEnY1fhD6A7poDDEzFn2rRCKCn2dcEXpQkSUGdWnaymQ2mpr1dnuiLw9XqcdjkSHZ1N5s3UwQWm",
  "key2": "rWN78ibZTFdwhafwNaSaKg5zs6Sk5QEVFR3VY2BWrXbAkndaJmc3hynGNDXMkMYLvuuQVw6VfsXzXHZK3siTQ4R",
  "key3": "2u9UdiaQBzU3ChxZ5pwBPyDiMqYt9FAXAbTdsXxgYZUEwb5Hfm9MhryQWvD3em9wUtY5xddqUoT5ZYwyA7t5xYGy",
  "key4": "5JVGPTHf1Z4yNexSHa32BNTqeEVdSNFB9Fu2XF5Bcx1Rma2jNh8DweLT8LdjFnhmYZ6JcGETWGFcbkYqgGvkgqCk",
  "key5": "631zQSVsPLW56WEQcvgY5XkeoGCwqps8SVSZBzasaQCXuPeYXpHDBq7HVuBiHZLSnazVn3y2SDe7HHtnkA6ScPQH",
  "key6": "4CDsGDLUet6dnqs4drcTNamEqoFSNQ9ay2Jad75eYVgg9kc1ZakCFzvB1PAYqLgiQ9hacigzZjkTAN845Rvq24DY",
  "key7": "QrFdJ2vosRYQaKEx4jHKY6b8usnmzyf72yxw2hwnSMq1C1wjDJZWbXddHkgDnoh9QvztjMt1JUHZeQF2dTNZuPF",
  "key8": "3ipg1RvrSLT2CdSd29VQsnKwv9hi3x8eZHzSmxagbAu5UGyxFEtb5N42nHLNGWd3vWSaFDB3TGDMdwb2TALcqUfq",
  "key9": "5at9PabBG2pyJ9rHtgHXKtnruFp5wovBALmSs8hpi36i93bpwcWWSjrmcL9TWCYWxVbcswuhZJnhQfNLBMicDJYw",
  "key10": "2dbkvXyvfs7g4yWCCsYmoYokfeVebX9t5o3LDh6MEuRzJVZNvdxavtMRky1Kvto5GPxfkx86K59UsbbfX3cGiNyh",
  "key11": "qwvHczxJwAu2JGsuGgWbMusqK87TB5GZSYjBwruaAsXLNA9hstjm1dxqUZPze1BVZAXeyV4Fqejjv2EC6uxXyQQ",
  "key12": "aEwSkyRpkwvg2p3d1tWrX29jS3hq3TjPS7JBW1x2BThk7ScsScuhKv7JYE56LFtC71GB7SmuKwsPRDVCANXacrj",
  "key13": "4VqJ5ntSqadoEeEp6N42pzv3XJkj6GrQ4JNcp2Fyb39rG4Z3eYPZ1Aw5jG636DMQJr2nGA61fnjmNtyZtYVG5WsV",
  "key14": "2t7yf7i7iXHnTsx7DqeURx8SWQhh9LMuph1TDMNMZUu2bv3tWZ2mtYeMdZDXMBnxsnuxbtUMK9dj7Vhaicv36gXk",
  "key15": "4bC3qj3VnxFp7G4PqYvc4rnAQzua3QtShbMznyAx5VEj7cXELUDfVtjknJE4TnKL2AaMhHg1nDYdEkbo1oyfrWK1",
  "key16": "4NBCns6EAPQybGV5t13Nb4zh7q1VfxMRPyFcHSKDUDS1LzHumJ3VXHd54tUNpB763sioJJAGxDTakZf2YJejBNaN",
  "key17": "4Mrt9pqCDdScnTE1WusmBn3ktQB2CxSRUWLTCbYHWbuRYcpNqCF3dd4YCwksvr3tryuKr5w7cErTMbrPSDfoynhi",
  "key18": "2JEknvo2a6h5EtwzcmnWJs7uDrFfkbuTXERD9sQYiBwStv5Fed3gBgEhZaSN4qbk5MxdBknJJzaSLnMM12dHfY4V",
  "key19": "2RNwrFsrN4Mbriy7FmuETByCJq4T5XAACceigMk4PpmTB1zckVG32dYrZ63BeHLt9rGWJugi5Zempw1Vx23CPwgL",
  "key20": "3qsT5XzQCoFJQ2tRYoXajUeHbR4ZwoKibbf3rPBbJG6cUi8frsr32Vcox2cpqYP2bqXzbUWqy7fsiCPCHEAaPDU2",
  "key21": "45bYZYMiwrAU8JChLeuuePMuoaV2rzaPyqAfqG4E2TTnSYgRCF2AeBK2X2vYG3weC3h5aLfzJ59uujUop1GbaBvy",
  "key22": "59e8VCv6DyoRcMcccVpg6zsWD4d37fMVFcTg7smktQaJKuFz12VkrP95wzCa4CoczjB8Fy8sMc6xDoQCvAnM2goX",
  "key23": "4sfzymbDHyWJp8xoSZigqYmzSzBA1FJ2vb3HoL22rRxqRMKRZHunvz8sHXLzECBvmKKckWMh1KAeJosJ475VDcht",
  "key24": "VJFYdTbBauJy1tEjE2NuuzagipnXCZ7PF3buNrJJvGc5LqmXdgkGoKXEJGMb7cw5de3vL4ZfuPEkGEWyJUTS2BT",
  "key25": "yYw3NPxN367Hi4ttRj787M4EuS4dhzQ3gn9qYjBk1Cn6dBk79jKtnYi3fNwUooUUyGJebYyxwUYd8cF3uspK2dJ",
  "key26": "4VTD4LXCqRdDh4ccJ1SLwQzLM27KGmWf4XJGg55jZr6FMAC7hCjQ88tYfke1WkhQuDzjiMyou5Q4Ujy7mQaSg6U7",
  "key27": "38EgehcHDxGK4aUfdu9kRsat5yyfsMnZ2SnZYDk67zLuUFqGzRjFLUd7n5j1mtVTRLWqB6bqTR6JqQfeXmb1HiQD",
  "key28": "3vx15YWQYLp4nzVV7WGTunwr8EzhvdSTM9MUVyyqVzMY8oq1c5HzfExDmMSGa9HPgfbcry6YLJEeUk2ovpyHE3H7",
  "key29": "3C6mi4T5EhfovDTBih4JHsPGPLMedYmt9EQTtaskqCET3xLEZethcjB5b2KR7BZoUdEZtvLGstTwcwWJTvuE7ALQ",
  "key30": "2NXSC2UgdQJu6HxR5FcDJvPnMjT4xF6LFRAEJv1wTGmc5ovSfZv1h1ywrM9qZyETYRF1Zm7jkxxTpbVX6oziGf8B",
  "key31": "65HdsGrJHCnRGtrSHfKPBmMyrWwVuJ1pzZN2uRHCBwJ1X4itCvXkXke7TfXPLCS5vpoSz1jMH9vv93ChsF5DmoiX",
  "key32": "3hmHxZvXSXYR4UDvS5pdDT3Rzta2Rb1Fs9Uoiv5vjkizhsC8WR2D44gsidNdofkohSRWoSzfVczPfbKZV8SmrkGu",
  "key33": "5SHfUm1kCxvdYTWEVKcYkgPB2V9qyeaeUwoijTcRDUaKMZiqMkbswm2rDVg5ErPgBy5yVZ5314zoHHYkwvWnMhQB",
  "key34": "2m7aCnPyr7uvjeAhh7iycv6wFvmTXCeZagjj9FwqFFdEQiPWzxasxt9zjWeyQpr2iTYRj666ULV4YfvaaE5gPia3"
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
