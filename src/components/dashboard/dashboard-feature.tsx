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
    "oC6Bf1rNFkhuRzVvYDNbdAZp87H8xkBBQQKhA1i2DNYq8JNuJKP4ZGXpuYWYec4ckTsAzgh9ksVX6CaDTLZZpJh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UKPg4kbpPZ7Wd6Rvx2Vgds2FynZqsadS9WC6CJPgHnTXehwBEHPHxjb8UAXaNMdCuv3ynSxNSXtA5XDgNBzwQ44",
  "key1": "321wonF95usJi2cB7yrfwgXCYCxQDfsaubw5BHyJGb16otnXaCj8jpqtJtw97oxoG3UQ6YNSh7fu5k5mqduR1J3S",
  "key2": "5WrFvmiwxXB1GJB899aYEbLCcVNNmxYrbB5UYDdtXkscUnRzh9tZGVoF1prugWiHXo9Gh5RYFBcRgDNcPrxxxQpo",
  "key3": "dzYpEywN1iEroeuRjZg4QCVW4Nc4heFdBBoYFVtyyr2jfTb5tuEPa2E9pHpronrXQRT7XpqexzmHdLPokXw9i8w",
  "key4": "a1HJc4Mer2PG6jhvUmAGXgTKWaYDDaVLqpK9L3nVjHa6kP6he9hYbPHtggm9dJ6oK8uYX69hVPbAP1wVhbj5n8C",
  "key5": "o1T167r2Mv4L5AtGQbjxSar7UhjyGwjE3j6BwfFBHmxTpAtuZ5oFdboNZJknnAKvKLV3TvAgUxdrgCyw9nqoyuA",
  "key6": "4uatkeTfGq7GWTvMGqaXT7zBxZSp3D4U7Tth5xH8QvYyUBvyyn5Uj8c2RVgTYBqS16BBTe8tyLRsHqpDbnAhLiLH",
  "key7": "xr58spXozcyYWftuUE5yvxuBvJCQ6hCN3ERxueGCWET4L2swJhD49uadVP22qcXCXLiERfvgbp4c3zhby7u8CNR",
  "key8": "3WJKSuQCaw2KN8kwQfXzR2NFfV5WqHEUmSTzusgHLbZ57Lv9SMjkpVozhyjYHYbQJmUypBDkQytVRJQ7KDjRpV53",
  "key9": "D7ANe6zqGUaqk9u4NAktsFuGCcbbmWZgo52xuM1GUYN7p2EbPhEJpLr2sbiEVrog8tSFxeXE41gBJv1Y9bj67TC",
  "key10": "2fZbHAX3rSuNXaNYAhQEeiXz1cDaxvD3hm7pqHEw3nCN8UtTyZH7kDPAGaiKCgRtarhtqE5y6iC9sqmEFtD4dWnP",
  "key11": "469xh1Tmi2VF2oFcLXiJP2nzVn5ZpgwFMPdmGarsvG6jRnHktBpToEs6u9kzEYNtFdSLyUDc2bzKQDz2rF8NJqEE",
  "key12": "5tejacf6NEUpz4RVkjq6V2bgAz88Z622yiEkqjyJVjqhA3ZpaH1JLW8X3LzdM3Xb33UmwM9tRfJsAb4Qvp31YA1M",
  "key13": "28gwtLqey3irGAXWtQmjeCZ2U9FWY7Xk7CTy7pYMykzvNRV7yzJVPCYULHFskMnMgkSRbRgPPNbCgC7xuatgtVYf",
  "key14": "B4d9LA2MxeCsTGjGn7NkWNRQT2aQzD4X6uqsLuEQfKDgTwUFP7mJoro8s3a2TNkgvgxcsF36c63oEjpgYhbtjX9",
  "key15": "9T1wfme5g3nRYx4PGSqxA85MAdtkt6RiEGBuQ8BGLoT5zHS1um2nxe3EcZx1UHm2zBzLC2Rhzqj8NxT2koX9TWw",
  "key16": "5gvy1wvXFbTxqRpnj2wPkRKNBjD2Gmbr82kEu4NHHPqeUYowAEtxxyDgfe5Pqsmjs1XCfotYBHNhUD98wLvsGuWe",
  "key17": "4KeaHgdQqy9Ng6VjWhWSCUZKkWrJtYwpht8Pxo59Yea1by1pENZQF613WfK4QGizpqm8Y8enqAqv85sgyR9cLppG",
  "key18": "5chDobj8h49aazUjEjPJxcJDJTV2TXk9tHn7DUpGPZ9MRjLX2GpWcbARFuvoAcS2CeS6fwfYSitKceWst9BUbzpg",
  "key19": "389o8ndLFXzkmz3v6L9MT3SxKTLZKb5tix5qCbwRjymJa96D31HE9rjTXS1mGPiBdm4ujQbsvnhfHwYxfBndJPT7",
  "key20": "eyTpZK1kBcHqhxtzL7MLLmtTjenHF7p4t8J28ZPTkVc5FrSCBMP7UsJ9gpFoEuw9kvvHSBj8o6F7XuvXAdeq5Km",
  "key21": "3X3Mwsfy3YEawKHM4k74AoZhbv6VSy3kBtxH1zCPPdqnMzyjmVsLrNHToaWFWqF3ghjiLriwetrBXcHTVWn2YcMe",
  "key22": "2BSkWW3vswnSnoNpMXohrF58FpS22GhrVm6dh5JtJVsG8uiVPzuQuRHu1GG8ACdKPz5WN54eeohCYZ1PAH8RmGwR",
  "key23": "31DgbNsW9zCrdPbvsYfibfED77tvjnKgh9EVFCdyTwz99kp4Law4D1mhhraVG3eKMTh5udPgMF5eYXwaEPCpa3w3",
  "key24": "oVdPGh4gHPt1k5vPZ7mHfAMvKBzFa73SQxeSypBpXUie6DDijBpdcbsuoLK7n8LKkipHKmYh7Tyt5yS2Kxi3Fed",
  "key25": "5Fct7zv5bA4mfGAM5n9tvV9t2AEAAqqjXErkV4wmrk78HfLKoqgCDrD3oANSGoF2UbHkqe7e2v17owfUEYimjZkP",
  "key26": "oE5mgy8AJCsJbkd4m5R3iF8qFRkZKtAoBT2a2wYda1JBL8NQXB7vmaFL5EMPAA8cu2Sh5xRRbP9QctaxMxCna4L",
  "key27": "38dxz6LGJW4PmM4NjdS9ESbgo1SNn4ZZmVCERMFGu3iAV84gEk9dC1YUVfZHxDazCfJnKifDHDW8GuHs3FugdJhY",
  "key28": "2hqk7TM4QzrKdy2JhXBED7FsdwzUMGHcVrpTN3c6Mtrwky8ixwmGLAC6ddErSWJswVAjj5EDESRnk69yFyw5N5Rh",
  "key29": "eQYEZ7sH4ZzqX4WjxvWiDwEMy6sh5LcREj77juvkiinPUp4uKJGYic9G6DJqP2Aqf8axsffXFRhDbt88obTJvzW",
  "key30": "29KgEvNhorLf7GXFWPAx8fTiuQ1VbX2kFGr8x68VfNJtUTXEYZi4Uh1gnyLTVn8sz3VFXfakpAmygvDeSz2MisdG",
  "key31": "557hAijLk9UEkBWx6cEAWyWD5xxoyhttuemD8ucFZe3KFNtEr1Mb6Buo6VpanSyokGVfdVv3pcaTH9hEdAePhG1i",
  "key32": "3jGRYinrtMSDX6p6sF5CffQW7vkGBf24heU57EoRyK1BnX2zz8XJktYSQeasVcuZH5iHATP1s9ZnMZURqp4qGH3C",
  "key33": "5kr4cf8ZhLYoCoVsfABc1A9HqeiwTNV4szYv6b8FifrNKPuE31Va1GP1XRjcLkNPK48oq82sKvW4j2vXZ15Tr6g1",
  "key34": "31kuoyQFgn16VqBTbDjPgsPqK7fZ8dED5Ss2AF351R7UzikhsVyygGXBLHrJ1keRBYhHrbqtX8XSQBrmAcygfy9n",
  "key35": "3n8iU3R1gnU6f69JjJhmA8DUgQv4G3Ki1RdM51m7Awf1VT1R68oTeKhr8TdBnz3TM7zvUvH5k6z9Z8koDUBgjXsZ",
  "key36": "U1d3KP4JzB9hsxdmKE6K32xsRaVLBNcfNxQnwPUsnayDLXAEbpY8ARCAygXqwg6U4YUUitjf5MCJEkVRV9R2k1V",
  "key37": "58Janqv9FoqKJaGZPF5aNsdgTBobKs1hhAJyzDWvxyMMKt7SsWtq4B8nk5Bg7U1hkwzufQmPqJhrb15yTNTp42fb",
  "key38": "5NgtHxJZkidYU2xv8D5C5QqQBVXfUvfEpz7UmBzstjEzrnuhf2repwWpkXPrYiYzUFqSnFCKttcpCpp4HHgzZeWV",
  "key39": "57HWmth1DCYWiFn1pQS9C7Up8R7cLvtRsZrFp5i9YU4eFpoVPc6NULnN2vXciJZzSJrPuYqJ4nAfad8L6bV8bEu7",
  "key40": "DY8CQ6mnpw8BzvNXLapDWcFXDTRg4BEirWY2WVxX5RN67ob46UYP7RUynJPkm1NshyDcesD9KkpGux7CjYd74Pw",
  "key41": "4TxKytYuCgHopiwZEsMuiSQFcYzRYSWkhVKXXo7pTsTW4nJxa9TsmVp28MDLpLWbksvwMZhKCYpcB8L5286T4Bou",
  "key42": "RHX7uxg8upPM4VxFWqRPaUQvns6YoQiyFhSmiAKK98aJBjfxeEhMZs4QRcKGNVyq7PnJDjSHmeJTAYsVkRsDdf3",
  "key43": "4iXsY54RLn11eY8q9UjLvKMi2HobwWY3decKocaMiKx64GYFwj5yAM3LCCjKhdCGzNraromzHLqTTqoPfF5RkwcH",
  "key44": "sit6XSSBfqQuTVEo6BkdCvxTxFsnB4GvgAnhRqEUgrq8VkXK19qkh7De6CTjY31ha3Su2KPFsimkoZXfRgiN9Ud",
  "key45": "u9xNt2k6nZc2Y2RFBXdehu6dJfPpRg4sukFewp3r3dBxeQ7MANirT7P4CoxVt7eSq8TJnSH5bcNStAEUD4AjFXf",
  "key46": "48yc59w3SAJBKZehfHH4dBwKuu1YcScvZancbEBn7tiQnwthFambCCw43K9VqzbEifQf2fxL5PT4aoD2WAVacNcw",
  "key47": "4C77QT5r8o7UqGFgAWinzKjx696cebV6oePYTmqR2SyPHVBUtMCpDUCVHkeG5ryga8xVJ5GXtbL4GNMNcojcDzNN",
  "key48": "rYGbBvZ2dTYqXCRXJissnJmD2EYLiHSZxorogZJtGvxEohfsRCg8See4CDhU9fqpXeoY4ydnmUbb5YWaTinMJYe",
  "key49": "JFCnAnTPyqyBo458dnTU7FJyK6NyL58xUkzMfzBgp9oJnPE6zTLa9tW5Wvk6VJC9o6iHV6gwiWDGGxPKkkSAfjk"
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
