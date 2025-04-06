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
    "5rTzDZKHqrcoSVJXg2Q47vZdiK79xWevURN2935q83SCAc3vs45r3taVn8Lmyu3mvRv2zJXLY5eB8HqA972Yg9aq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4toCDGxcF6ygBSfjz2j3K5nBdAkmbynHCAPaJpijSZn89K8PzvyeGQe6NpofzDZaSkpC8dow1TQdgqMxCxYToai6",
  "key1": "CreN1eYV4Zx2cp1R7qv5zcRojS3zybFRnEMLnBXWZJLKFRmjgYkm9bfFFDvq3jPLP9rmdESEV1MoMbC2YC2AatQ",
  "key2": "48FePh5nQ8Z9Te55uEE5ZgRPHf6kNz8cY7ZafY1PHt2GXFJS4HMbEdU2AmUZduwTpv5di7h1SuPJrTcxwwy4YZ1W",
  "key3": "4noWnQnQrN3ThsaKHwCqwTYs7W36TCQ7myDyezuSw9nQMaRmFqHCUW7pmTnAtim8stM756SNKWjEgkidLHuLaAbL",
  "key4": "7cvF65L2U6uHS99DVEMwERaV4xfh9aXqA2A7EsykH4N9dRgFa1ocjLATZDLVRawJETQpeeo77ZrVQbid1CkMkE2",
  "key5": "5riPzfDKmTA7mEAZq9efguYpnf9diqDdfmqyVJbiCLNAChNUUfV8aU3VwqaaxSpjApxyC76hHY7bubtBGPA8Dzkz",
  "key6": "26iBqp83R78Jut4LXgzx8YLcuG22kEmHFhVcU8mdaSQLnfNoNJPU3Hr1gwsKobdrEU2sBGGKMPfnmaDTiFeC52o9",
  "key7": "5ZwTtXEo3QeqzwTtmRy615HSBkYbRhJvEQNE8S7fNi8gFRecJNcUoxKgK5B4tzHJ8wJ6obeML1BZbY6TEe5ekEQn",
  "key8": "3HNq2fi5dG5a7n4PXtXsSM5YdG6sAqi2QGHHKHvLEj8iRTA2kBLstHQNbZ6PxvG1aijXmo5XLzC9EMXCQoVxFHjc",
  "key9": "48g3dq8f6a48LakBusJgEAKxcESPMWqaFkMxBTHU81c4zj9CBiQpPz7kVZ6BBpKwjKNKC2ZDuLdXAzUCLkvKtrmD",
  "key10": "3Tc7yBB5MD3TJDYeecivRS2wbkiLpgFCuYydemAPQAqkJeVAMEkSYN29eyAg7FNZhEBhxEFqFF3EgCrEdMxRrmMc",
  "key11": "4tJAumgiCzGMzWgp23Bx3zPLngYdrWLZf2XxqYdkVHWXzywRQrV2rgjFTchtKEjPENsobPrW3mgcco4yzdJbFfTC",
  "key12": "3LuqWt8HXGjQspUthQTQvS7AWVjFYM3bftX61egUNCKJ98E2mk6AW9nbFYSy73eLEZynHcNEdQewtQ92hubvdvPB",
  "key13": "5RnwhAA6Dwp3oBQSie75ouDoWR21ZLiEtfPLE3B2MogKbGm1DpAEd6qEamUiHQf3W3JoojCjbRnrDQgUqAWtUetq",
  "key14": "5P2PCzWJXxSuD8SipdHUmsCRPTAmtrFecx9iDeQGcdfhM8mtik7we9TkyNJv67XJvZoqTSzbYxogQ7KKX6WwTzCH",
  "key15": "4t49AipNobj38pvDGhsfhZNhuVHBsVmfjbuxL9NvCSU9UpRzysZYRZ9eUoioKXCByfQAHkwSDkFNYtxdS12c6qiM",
  "key16": "2yz4b9sRiCrzzNq4Kd2EfqeZfYPqAqY5UugmypkogA5SFoZLtynL6Y2h5uEnNk3HzUBg93XEZyprQc95WEAwWtGK",
  "key17": "5Hg4kZq6ejJspit8JtpZpfDzaWrTq3kUSX8zrnjAP91vBkEiJW4r7utn2FicmHJabTtUWejzypoxRdL66kgPzJ3S",
  "key18": "3p86LczQKZBXd58ZvNyJi185uz98krJFtKHq6yyKc6oa7Vq3uPbjvjjzvtsLhEPDsPY3YDCKxpBZ8s5nTSQGzbd2",
  "key19": "fqntjdXqn5knbcMYsAyh2jD173aG4ydmrD6aGA3K2LaCdDWewaMTTgaakg2p9BGnHSAK4XMqqBuNduFH6Dh1XGA",
  "key20": "3QRYQ9dQqWcFenHfN4We7eGwnY3Ngqn88qcobE8QWYoHH8LDsKtxznDrhEnyzSyPRqU1PL4ZHbXzVyFGZoT5LBAd",
  "key21": "26wZsuJZawDFENcnum1Ud51D9wbsgTQomZvkFHcM6ZkjyoZACjAt4axKqqa2yxYCVjjuBkTStX3Yysd46EoSZxr1",
  "key22": "3ZXL91sD6keNv4j6B5XymABtMQRWb29L2nrcfwqeCmdwWh7h9tuiRtivXbzTn7qwbuUszqhsL3eJn4ULrpwQnGPU",
  "key23": "Pa5ZNjsi2tUZXQEPskSesPed1fiRn9WgDXciK3wtRJ8uZhsGdgAkcU7NkSQYR58UqiXaXj171JL5bqD2kqjjJSF",
  "key24": "56FosVw5yMPA7oj3fzzEwUaxmpNSukuTLSCwJTNhU5JCUeYvsiTnkxNzfruPx17dfbrmMPempfiMYUcbkWLTY74z",
  "key25": "3uRceX3zvufZMMcC2w6XwPGV4sAUupfWhizCKF4zc4mcsodpyTkzcqfEycfX1XbHdtW9M3yiW56qXWmmrtHU4xSX",
  "key26": "57d7sv2Pycwcb4v5QLWuPtzP2aLtcJgXJcefzQi5ZKq1WS8Tp4WC294EC8io3qfqkig8oTWsrmMzg33feXVv6iNZ",
  "key27": "4AbJXXjV1zGdoqWX3ncNnbjJkBrmEkKKEEYabNZoTFtdrLezaoJcgo6Vyg2XmCDJinXtirSy3efwXzYkAQRdAPN4",
  "key28": "2nHeMM4AmHkvULwhe2ViRnLTkJek6L9kEZyGsdZMXxVd9pjetTHr39wmcEBj3qrUvFvFYNepKyXeBaTkfXHSzq2m",
  "key29": "5vxMbv4s9DRb3rjHZXTSYgC4rjSkV4WAEuVK6U7qSCJa9CkkYnp6DGeSjVTB2uamyo8MXkss7USvFZtn2vfLREfb",
  "key30": "2iwbc6EvoMp5dKRgbbsKJiegxK4aFvFXMWHfLs2vXv78Tm1Za9aGRcGdwk4r5vhXy69mEgQxkxYE539Sa1uh2TmG",
  "key31": "2VdDz3D1SxoYSKrM6vcEa8u4xGCCHexYYfZj8nuZFKrgknTr1TGU7ErzhMrjkHQzM1ed3HLsdZcK7gZSKPP3dopK",
  "key32": "3Cye8nWopKZqY1muJxRRn7EX2asrBYkfoHUxKkAo3WcGKSUuU3Kfc9XNw3X2UMJcGuZ5pUc7JU9Hfq3us1o7DRNP",
  "key33": "2gBSiigJ9YWnaqEsKEWEs5EG6kmcN3YbxT3tig6M1io2ce9Kv7FSbrpiFPJXqLVFr8mJ8RPtqGXrKxDWrD85JTFA"
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
