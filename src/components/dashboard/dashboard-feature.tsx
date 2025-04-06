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
    "2GEZoGbfHMT9GMKq2mfNmXfEJv2x23XntbQeZdwpT4jXa9qhp2oKJGmjAPzKQ4Cm6auRJB871fcrnjPakST71vp4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MLBCUJDrQbeRYN35KTodZosZwRs6eiXPZS4NRGohFoJ6FCCaYimsMk8Tfghghzp9hb2nCfCwn6vmWtuwxAo1oBL",
  "key1": "3MXgTwaN7YggG8d3yVTgBjX2VWvPCUq6JFC7wTpYvvzekRMdBq35uMEKw9UnN5QcLMH4cG1QH9KNVVth8aqCkvR6",
  "key2": "29CcHxjkydUi9kduNumZwHXZaiTMc8qWukDeha9zCRg2FuFJpGYTPrix7yuNqk35JAAjUc2eLSpBZcRtreEpUsiT",
  "key3": "4oSuHAN81feFSNrJ1j549AVPtHemj9XMb71oGCdZF5yBzVJ6MiqGkYLsSRDVCWxatTEDwjb3RFgMU1ELCj1WfdWa",
  "key4": "5DJhqa27yooxjZaWh2krV7FCY64TiozrVgVimyWbikpbHcbHnkn921tBjvNVp8GtMNpmSFSxPdTe7bx7Pgpd1TrS",
  "key5": "5PU7hz7VVJQRfPZ6DKX9LgvQPWApj8drNX3jF6JwtZp2tJC8cK5LXPD2Z5mGVwXD8eqSDpkE2K5FgK4sR5RNvm6s",
  "key6": "2AinUg1nbVVGi71GjLYCySfCUJAzPZy6CgKyzZaZwS6exaN6i98cKsZG4jDxfSQiDwBoJGezTfvuhn7SCXfVHPCp",
  "key7": "4UsavqtxrcbNN9nKMCgCj1goAFbf3SjPDX4GduGW5MZxU8yvdHsqA4KnFnu4gERef5KqWPj42NN2TYc7KsFfmAi9",
  "key8": "2r9tQuZW9taNSeQQy6jswYttis4LSBmKnQGSDbdUsu5mERRmFkmF7xqeny1xJvn62L7UDGtk2kK1Sk8B8um1u3nz",
  "key9": "3h3vVKGphtYw9KdpV1SE1jcv3XVf2u9Tqsz9VMi2tUqgXAc8cqSi7wcXgi5SyYtf62qH4fZ1n51JFZQPGHHg7Bjh",
  "key10": "4MccY6nizeXfzmarR8UvPPwN4e8j6jvYYYRVNtw1GqhQN8VwiD256Qvg7BZ8isfQSh6SBzp2YoLnuubNETkcFFZB",
  "key11": "2CLDjJcpyJTEkYDqYj3UjpuSMuBZGVHYgX1h9FrvqS8hjWPrsQ8Ht7tmPLhyDzmHo66aaRfpiv2D28Pxcx2hzQMi",
  "key12": "4T6fGHssCqzZkkVuK6cQYHTypvN9V5yUiww8Rc93a7rqu58rCHvDLj7XTuySBMPTjJPnPvb67eoodsTfD6cG4Xth",
  "key13": "4o1LeKH8gxjHkPfcsvJVNqQkGxUFe87zQ19Ar8E7F14pWmDc6wH1P531XTfzah9yJzfuQBtGoYoVZW9uKRSwPY69",
  "key14": "MgytgCxHPhxteuCZnUXjraffRmnhPS46EhVkLiap8jE8Yemf1Xwsyh9FkUcxvFDc3JXCFUeosNkuWce9bRLmKya",
  "key15": "yD3FEyXwJ4iqxWAd3J63rQinKsjitX7ioo6QUkW7hNSDSB9ZJ3i5do5h2TqmnUaoKt9MBBtHwZnfJJ1s3SWsUMU",
  "key16": "eBzJF3vNxeBuecbF1sd9FXzTSZF3KmCz6es96GfGwpEM4aHYk192ef4KjDChCJxgiYt3EZPad5uML2YYsGqSgKh",
  "key17": "EmL8Q9axX3PaFDLctyzYUN5ypjdCN8F744Ei8pzZYsKaVVrm9YuqjszTmU4sX3wWhGkJ2CTez1WDGZ2edsSQnKF",
  "key18": "5qBjHSkqkMrzLJNM2HJx99KWeeTmV72z9vtUeWU998H5geqot4b3iKH71xcRs3JFfX4wMsuNL5QeBg28yW2iJjvP",
  "key19": "4w4DT8iziiht9jj7u4ww49NFvSkybLn6oAhvkeW3gsdgmiq2fDnuitqPWWLk1ZaKeybSxjYP8F85nYCZKVXxj2Fw",
  "key20": "3V6McrfYMiRY9ruwP2FebVxJwWRZUc1Lf1FqGU4iNUvp9MYzfGDAhtdP1GQd9JdqiupGKubqtGP4SkKjear4worb",
  "key21": "3N9U3JaeaV9MgTqDysc9ArgHw96YhfcBmEA6NkHLwV7nRbgWgpQcNh7bvaAfJHCZVoNhXwmVKh4EUJ8QMorNACva",
  "key22": "3nx4tZP7rit4LyXaXPxkJwuavqkdc8JGEcgvAXCsr8Wm7VxB5MvVUxrr5Htp7YNyLExEMWMzE7JPED9B5NXMftSV",
  "key23": "3YfVYXBJgiW2AQVgJPo4tt1AVwJgqrzSY2ykiYyjmg1eYu5Ed7EMNau2tmpB8XB8FXDbdz5wxWJMuqv4xiLKPppr",
  "key24": "5zrzX3rmAZ2rh1jZ7qeLkHhcKf6ZPcaiM5AhT9JdfpmGitEFGd1ixFWbVgC7koX8UdcsuPi9fZqdZ8NVwhS1Jv4x",
  "key25": "4RQSq22DAkz8TgP9miunKJBrxcJXnSm39Joqt1HT2LRhXd2yujBv2vgzH6gYoPnsR8EeZUGaTf7nQKf5CesJrHL5",
  "key26": "47xb9oBDD99eQgLzz5os2yUXYftj6dF57c2FgvFb5TSkJzx3gsxpeYWy3ZxcTmMBc5BZgNVbPgYDhae3VedF8iML",
  "key27": "724WcHEPegwT6uFK3ThKnt3gUgcvj3ZHe52dKNC7MY187briiUvtNW9TvBCetWP7LZJiMq2rjvxs5rpRm7QQS2R",
  "key28": "3RszyxVRBxjz1r8wirHWz5u3Mru1jLJVnaqg8mA8YdrjqH3f1ZFi67NK1gnKF8xQ7pXv3tz6oYEJvPzUQSiGBtFq",
  "key29": "2hSiCfmpZe9rK6CyGxQKntkJ7FxpchCR757m6faPodVxXHkkuntaVEtkA5HmpirGcxi8L8TZ4gPQ7rrydnwrFdzC",
  "key30": "5Ck4thBN3ed88FCsLPvpAvdAAnLYNod9o4oAodK34214vzxJbYb4uRM9Qfc7LiSyaA5UFGkifYdC69zvqgfQ8vmZ",
  "key31": "55Kt7Wuj2fXp7LtBHXnXGVcoWqeG9F1zNRZPjGfZEwmnKjGsx8kaSooZ4kei9HyBJrSWSCfPXfiR78q3gHBqPNN8",
  "key32": "49cNZYWsa21K3RpUSu7wHKyXSAvDjo27VaGMpwuh8Rvpx92QCeph9twgbjBnwm5cgn8KQW8axVrZz3zrwVmPhCJB",
  "key33": "3DNPx9Ar4Fxw7gFYPrA9d3dSKLHgmfUAkmQaCDRuUSMNhfi17u3EMyPpUxuikHzy5SC83pN5EXESWbqqyMfATdAA",
  "key34": "2oj7RTR6H2BiyaRDp9yTYypCFdH94f8WpUt2u9PPDrhGSQMj6N7BGaVbLDWbgCE6ptFBTpyh7YXoDQwGsrFynjYZ",
  "key35": "3qZeXxtoo4sW82zqZYBb5patthR66kYjx9X8HL7zFncRzz9QPFWo24287VQSw62zubvZozyLrovJunwHLroo3bu7",
  "key36": "591qXA6UeVLvnGZrrthZF5naybcKUyDSsr9YsMXyuU6Shw9z7wHUettgmM9Nzj2XNv8yZweS4uJv6vP7AiF3GH7R",
  "key37": "3uF6Gbnrn2bRgsiNBT8PP9GwUXfqceHcaKtohgYfyf7qoEGiSNLZZFh1vRxYfWjTzwFErH1RFjRPwgBW2Lb7cgWc",
  "key38": "2pbMbbZDyfg2D2BTjwQMbDezu6V5xpJn6vsNz4VtE61jqshuHCengupydHkCXGQqGnJqUKCYgXECGq9y4ZQeCX1v",
  "key39": "F3j7TSSSJC24QLQnSq3KL5qkPLv3Z4q9zfSyQ7JY8WEXU6fV2VSYUD3NJTZFCZs287CvPjitSRYiYmm8F6iTP8g",
  "key40": "45g5HLdMwErQBLkUyAHH1VkPhSAmpjC9jVoxMGftGTQky4wBZaXqkfkGsyMNVXs9kT56JXr282H1vc3pPAXrVfqy",
  "key41": "TGJQ67hMvNngJhCLDSesaFeLLN9foLuacqxE3urWXMHg61saNErJCyCNvPTwhdQm432wWrtgiBaFqsrfqmzdm1Z",
  "key42": "5LLL7JWFEvZoFg3EPWq8pHGAFyFMKZkn8XmYghBsEfQVQDrn6TgGy5Y7m8XnqESapGM5LPAzkzGVMZ1fxZYk4pR9",
  "key43": "4c4UuH3qbd6bo5JVZ2GJXuQPuxXdNnhMBWQo3sqQwSqVAaj2uwUnLZ1gGe3YyJsgxPnHJdmm4pvPaRWTL32msYVa",
  "key44": "4EyewJMR8KQpASm6X4N1K5d9RYoGCH8t2jiiuk7RXbv4kpYErT9TW9RS3ST2RrhyjRCH3dWrhb3M7LffgNcjFCDh",
  "key45": "4atPmcaGhnn2zrHnsyrJiAAxA1AJJjp1hyNqf4VDdsGg4jGVQMZ3VrkMAefgGAVyaDrGaLzLJiVvDmmNeDMPj9mn"
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
