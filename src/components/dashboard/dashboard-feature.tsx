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
    "5y2vg2N1kccYc8FVBiNZpJiYYDbPofH3JRqckt8Y5qyLx2AaDvLDzFNXiXRSbc1zdZqCF5mSaczuao6GQdoPCC19"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hYnxCNFdJNGAmnZCpu2Cab63Uk8GzSPkN5WeSg8HuMV5vU36VaEc4wDs8dot8bcoYSkPU724zV9YDxwnbd5TAxe",
  "key1": "5QhGugM479WJ9Q3KTTXoWQTrqesEnVJpDpfn6uVLxykezBj7kKhFG8rYFiKoXGQdL3zCKegVmgXMpya35x5oBM8s",
  "key2": "4zCtgHDinpSrPWjryD9MyuRPfbRUBP1388obaTcbcZepcExZRFWLZiCBFxX5PjC2F46V56A4fcjXY6q1eph8SP1H",
  "key3": "37DY4BhuJxq6oPCEZuwYgagfTFzNdXQcxm8H6TzNQAwkDMbU2D6DDekjuZbPS4HEK3ZTURyroFfh5FqxoXt97ctZ",
  "key4": "3pdvagU1R44aLCiJPXkHQ7EeeFoLSs1jU8i1KXLMVoNxZGBENw4ZufE6uqwp6rRpD86MqvD5MQoXFQTLEjeuXMeU",
  "key5": "dFJEiGqsmSyw3YkRHgT1FEA6mBJZ2iRRPCpH2hYtidT88bvxa116FqybB7vEdnkXyZdKJsa7dN9u8G7GwhesDb5",
  "key6": "5s6p6KMEPyAozWmgfn5TnAxcBvsRwsoX72QGzJkeL6oyVsb5j3a1rEHv2pDG8VFQe8tjoRHV8UXTbxwGLrwr35q9",
  "key7": "3CTqEqcYJAV6vcBN98bLLgDApjiJ889s4e9yKK6qvEa4z1LzwtVT8nXU64Rk7rqL1k5K14XyNucNAzch9fWCmPoh",
  "key8": "1Dfz6d8AvHg36JXnSb661uQeB4zD9uDDBwQsCQayBdddhVGKHteMqHVLx3iQCidRV78492KZoWR9vTUDFFxtk7Z",
  "key9": "3DHjrwAfyg9fngaFZZGzevxWCiZHFhyxJuGEQA1w6ic4DWU2nUeiJYtExmyysAGzqqGrvRToXKJZVQZvX49m1dSA",
  "key10": "4CxnN47mznMetzJBoZjDjULEjNieP9tyQYgjyKJ3C6KHUgwKVk2Ngbc8UMmF4fEfGPo2qRMkCCkVySRzKWKta6rf",
  "key11": "4Q9Luva4k1fFpNg4eghV5g7p9A3QfKCaukd5GnXzR2GVix4TidBjrcmoHSeC1LjB2KV14X6iCPVHrwErRWR6Ev6Z",
  "key12": "VSKMkzou84HMhpTHidC8ZygNMniXSwcMkzyKdt24iJ6FJZorZ91PVxWyAya1ZQM6yERwg5oDhjEc5wLRHHeFL42",
  "key13": "4mcoN8rgYfTnDeDyt3byyYQnLAXrqu5VyCBW79QiRLPRzzBemBz8dYjxXT5AqVM4EJ1WsFNAWPdXTJZcEXT48R2Q",
  "key14": "7Yn5DBUD6CcKWmk3uPj1XcK3eeDMthoUSJ3j17tJYgWKgaczfkGq4pQnikXNfV9EhfPRaTERocV1qBtDbBmscry",
  "key15": "3PGTFHtANxDZuQMm28r6m7dSKHm57ZrMjKjTTZrmHPTWu8u37tszsa4pYEXUcjs1qw3iycLFbFB4szxoXmVtgvGM",
  "key16": "vWstUeHoGFpQL2ZWdjwgEtw1RK7Q6qN3Z3RmrQu1Yb1wrMUFxn9STTvoLyLtocRv8HRq2ogrQdSNDE5cbFvGDyY",
  "key17": "gBZKRzodnvmW86BPwQZJyPVs3ULgbrH6vG6C5eXkBAwvCGFvvfjYKmN6PJ9qfFJPnMenM7rSJHGyRCNKudmVypY",
  "key18": "PRacxgXBzVrki5moLcXWxMStMv8sAidow2QEgzeDPS1EDNt3Qugncszjk1sYdtfNLzdyZEXs8395ueYz5y9YAWM",
  "key19": "3KutA5dmWjf4s5VP6VMMpmsNmkxpEGXLhJakmwWY2tw64Eagx1tLizh8wSHMgwHHpLq1BwBvoJ5kTgSdQLdTeHq",
  "key20": "3yknyhrxADyphCAHsyDoCPEkaZK8pwFya4mxh4i8tavkGxrKSEMq1fDTXERhixqk1JnaSikNWeAUYaYza9et8cv",
  "key21": "2qcFHcLzzh3cGbkczCNh86YZ2iwWCZpQ2o9R5YS8VLybuFreVkXCQAgqRLETcQtGU7UQrA7oifYjwARfyFsJWKo8",
  "key22": "29gmJbfen7g39j1jYprx12Ftuqu9TMEK267tMBg4zkRSCdTwzd87bV9pAGCout2uRgJyJeF94tjrHjcNHNce32rN",
  "key23": "3jh5JTD6gu7ubYhhxC2P2NQsGs9ziMCXbcmR6hmtzH1xHxSRKiuMSVM2qnaWQDTnj7yv1SM2vAtkqEq9JjQ3SUg9",
  "key24": "jBmE72NdqLTU8FYkAqHeE6WPZqhAURK9zNFK4t8CAMShvDknjqpj473H48ZvJQhxm1JFUC5CXPdZDyFcjKyq26Q",
  "key25": "2xJX6JSeykx5cSDEcm7yhHU7TxpqkVs4cSXxBLaUecJGrvHajUaAoB2on8WQNNPfSdcJbqGaj36YnZ53MgQ6NgZp",
  "key26": "5ZKphDnqFHo4JeXURSGEv35VU4G1C3iWd3ZHZ7D2VLFSRNhHBjBqFw6QNhbFn3gVqSDi7X9ahhaNToh9c2maqgXr",
  "key27": "MRKFiRkMaiv2iQ2rpfYrPcNavJVdreVFme6mTRcq3UuNWh3kHQWr315igfFvtqcASN6jAg5SZAEqRAXGzneQude",
  "key28": "2nZm52xKHRHkWnSpa2qa38KRuUZCmiv5nugccXbJB8pTXu61riDFnXXRHKm9m1pDaKb3gtBAnCsFtRZ8CM2eECWZ",
  "key29": "3USGv4Xya3JdPdcJNaTHm5cB4cPHkiC3k5ieiduU6uBtgzzWLMmEPfeBZzcdSpJ9XiyK5KSZQ5Z3HRibBsyKZZEZ",
  "key30": "3r9pYcPo4ttEMCAsVr1LH8246mW224kmV6DCjhLerdLP7ZqqBhGcw9nYefGQRL71p9Si7jgoseVf9w6RtcFHPwXW",
  "key31": "4seAhh6fMAW3cbF73zqwYnxwKDg1q72FEGJRAJwqnbg8x8EqBPP9VxN8N1YHqs5XSyQEQTTZctikDdUYmN3rF4TJ",
  "key32": "4ZvPsG3gLsKdSGuLBbXkFxUrSh9j8UPxKZo5qiBMb8m12AepiYWodE3n3S5VNBw7HvpDa3Ca9M6igSJD5hsrZj1o",
  "key33": "ybQL7aLPsgNyYgDcwHAniyhP8YkuktrmdC39VtbjgZJcD1MnAukpSW78H4jib8MNbcu6JNhZf8NC9WVNoStijfX",
  "key34": "5qedSkCkgRXu29Mx47FfWZ253PgRr6A8xuKLs4cmfunsh7qseCNq2K7KXenNWqswWZhERwxVpVH2c4eAiBvgb9DS",
  "key35": "4hVempFVJmEvi7SKc5WwfosYJtNHVJn85wdAhSC4EV4avYm8rqmK95eQQoFdhBFEef5XM6vEokKPGjwVCsxVM1hn",
  "key36": "2vAbcQ7wQNDykgp5NV5pzPULhmYwRG3KoXL8E5zJYFV7F5pKtauL8h2aApQvu8Nv8pLFaj4V9WuB54JFyXmCg3Tt",
  "key37": "63P2Li61fk5azsPB2jqXhFjnFDx92CT4tgXuve7n1EFekePVhm8aKtZnc2RJiuH8DDCpDHXDdByJc6nxfxPyUKea",
  "key38": "MHAU7gJhtVrFoXCV9Gcz5eEEjabZ2FvQjUm9HGeogU7ioYJL2Wh2pPYWp6AJTLjPmpM7KEKiLL7dLwDUs63DCuM",
  "key39": "3yS4juZUnWRYFMtq1LZ75hWC6PVvvRx1dCrpZ9V7xqpbJGEZqCbHrxCEayux6HfdWji9eRXWFpNrFuXupRmJhsjg",
  "key40": "4vWJKzbusQmyKxJPcJfDck5eC8xU2kqh8jCJnQm5zQzbHbgdVGgZqyu9aZavu8GNbCvDebrSnnurNcE8c3gvHZZ4"
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
