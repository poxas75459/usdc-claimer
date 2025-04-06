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
    "2pBLiw32TbzhQk8UYkYaiG1mnh2Rec1Kx8xo2co4v1Xy2AgSfUBcxFjYP6ycjvGRsNB3yeKEaJTnqCUa7jzpLams"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4viF8c3woePMopLHf6T3MKWUbuYXBuYQfhDA3LdGE73K6AneE9NmkXVYJfGZU1P28Kc847SkWgCvQvwCuuq7hKsA",
  "key1": "39mzpbTFB5fiNK9QwuEYipS3HrABKv4zB8Ur2WhoYvpnLmAPisWqEaH1kBwm6HVxc3t11y5iTMtfy25NaWmDy2Az",
  "key2": "2qqkbbuHWUW9kEWxDAWMip9bonGjXNWBwhpig4dG1quD2kb6zfG58emHtRPR4CEt2MUxzPWLC2FExbBytMaaVpgm",
  "key3": "kdxmYYf5kNTS6D6kYS6wjPn4KKuaZQA2XaGFZ1brMdPrR6H2Qr1ScYBaoF7VhsbzqeddSXqvvknvs6FAaD3AACL",
  "key4": "4VZkYciQuD6gkgYFjcT8ec234Wxj7CwbjdWcggNdS5CAJ3jyATHE3m3TuVzZfWqxa7PcUZUqjZowans4PuG6SACp",
  "key5": "2uaKaooVuAPMeYAFB4odTupw9MUj8hoMzeXiCUp7hAtLhRFi33g3EL5RT72ZeXi6ipKNq8aJtaH9Ek8BDV23Qzwf",
  "key6": "61X6Z5yRUMStMFhvbX5ejdjmQ3JoYQgnsp8ZR9m8TN9Vk7W5tBT91v2u65D4iJLdRg3iAWvMASoGbwx8Bw8X1ZLy",
  "key7": "4j2r9jt7K37WFrvPw3S3mcguoPDXy7MaukK8yKKjRfKu2Mo7HxkdSc5TRKa185CSndvCuuVp6BKpLm8Ae2bcsaJZ",
  "key8": "5QML69u9YdPRrGTepcY1bgLhHz6Qve4YB3yki2RJeaVYVWcCxLxmGjmUf2SQRbRNsWJ3Wsd3wuu93XmeRCNAvBA9",
  "key9": "3qkC3VnZdeN6GeH26ux7SzpiRPFySqqxn8dy6ncf4pEiFPzsf1oKeBzFr8vvJm6Wa3ufY8ikjgSj8y1mcqLoYcta",
  "key10": "5SgmQmaDQKjDPKjg1Y9CjMG6oDUPvvkQdg9BXPVxD6JNFfa8eMc2iFTSD6yxYu2nHLFZwhNbih7NGD1z8GU5mx1c",
  "key11": "5tgNbjeUFb8jACiKg8sCje7ZESnzKZsJeLNgPvhCnspTyGKweTDqRSvne4DywfMwnygMC9uWZGS9TF1KJdM3gvms",
  "key12": "7ojryXNXpRTbfcT4zgG6Q2FfFPSCdshapxHojj9FJnG6HfUo9MRiVSdnMbYd6HhXc4WiKmuqdmeoU8UaEPeM3JN",
  "key13": "2M4fUviZkf1rABwJhkCHgK2LGFqDWbpwz5msLfbiun2zYgTpWJ5fzRRnKTK54SoArWoGEgCkYHaePa3RpboSsZoc",
  "key14": "3ALfYrn3RdiV3kLe844XFp3myzq5Pt3SAFjpNo425weeR3ak1STh6exLmZwSATQTCfehGPkD1hn5Hr4q4zYJAUZc",
  "key15": "513X6mH2ZupCwGBMU1n9BLC9botvKicFuTDmhVG62M3dnVSDM1gjCwXYXdvYun3rUJ4oZsCE2xzSGHRsRiRcPXjB",
  "key16": "47BNx7UEbqm6Srs1FaHzqt39K3tT7u1FAuqL7i2TGVkwjVDzeNsbfifPuiV8AspJ45GLFjAgFrSofLKUt2QmRzMC",
  "key17": "2x785cCnkWZ1JV4RYf9U7Nc7pCDxtSXubPtgmyiDpXWKbJJLqdfvaTEc9gX1e92GQji4R258GNbG3wVnLEdbAX3j",
  "key18": "5cBjZwSYLRZvYWTaDHLBBHtMez9J4YxqYjdayy5ytykuGy9UDdvxEyrsaYMCK4sb9rhR1su6sL5AXyFpCbZ3YXv2",
  "key19": "4zsHJTkchgtbJ8x5vXDTLkrxyAUrxkDpDrixJgicLfoZt2yXvWM9KdLyHUpuG6avAzdLZCV596JkqStJpfUoKCz1",
  "key20": "3itCFXVcqBXNGQk5XsSbMcEZLWtYKueKqSdGtkLo3StfnfDNHH141hsvwPJYuYh14GoaZpWtqX9hVcKU1tYFSMza",
  "key21": "5TMAGdULrTU5p4Bdx5wR2HXdjbgGg8Aixz1RmmExWqcABhdpZuBcohgQ35uL8s5BNz6HK3qsNx4jaJkKujf43bND",
  "key22": "4yk5CPAvyu1RQdU941RsqFJwiyXbmfAPgMSZHyPLExMoS5173nzmmGmtNw8cTSW6zDdCwazr6ZJVravUdKmaW39D",
  "key23": "2FDrCTJ2MpgVmyB2NWr6DP4ofWQtUqBxwF134M8YzBXft8PQQ3jmbKiLQSKUXznaAWkCnZGThyBG2fJxqrNiNfwn",
  "key24": "3EJPk4d5YzTepBwioy8VviMGA1GEQpJWdwFPgJGiMg4N1iWRrhv7r7z8uE4nwZkJfQHMkVgtUYrLAmn6F87WoQuB",
  "key25": "jePksWq7kg3pfL8LLZgECb9hyL4mHpniotCktecxSkHbsFMXSofbuq4JJftLxkT1M1cyLu4ZVwitnLfuedypZY3",
  "key26": "3hekaqFpebMFdobmTCKW1DNG64Cphs7jLHwkYeuqPoZkQ5VUHcmu2nz6GHzj37qoCJzG8Zi9v7jutskHjp4cmWue",
  "key27": "67Xng8oLuwZd9m5wXdrHAvEGoFEAuWsP93VoyPVYCeJqcbWcoNUu1dQGevPJkFgFhs46cXx4EUc9yUvhXwUK81uW",
  "key28": "2CqnUAFa9Q7P1QCPQhuwDRA2qvP5NUdrKLyWm57nsnzjBrpWk5MZsKfrYRmiWhc9m2W1WajaNjpxZGSNv257KGYi",
  "key29": "2h4nQqWCovXu2GmAVWX6HPyfhuVcsBt3Z16st6TkBvPPy355spKTMoQzowGQJZ7E5V281vu2duv4i2k2TCKsZcnP",
  "key30": "4az5SLLSwNvyahMWpiPLMjcE11o4yM38EL1Eb2ggESBK1ufbTpAJwh2oXEfJzxqzup399i4SjvxkfYN424R3AFUW",
  "key31": "3cQbDoucDqu62BTYiqWhPc5zYq2eDchJ8feQDVPFXZ6Xmbv6xTq1QVpcJq1teYrkEwk68ojFi6SR77rNLjsjYryN",
  "key32": "4v5XHvzkckkovsTmLVG4yStdXida5R8wUArbf7UbdL2RqyxJSUYUhJqBth2pzHp4NYZLtascezyNtJr9tLxbc4RZ",
  "key33": "3efCB4zRdkvBNKM7i26koeLnQn2iTYEVmHpgzteqixY85fNxYP3QGvX8NpLui7VeRyq1CRGZioiuD996Q5vBuScx",
  "key34": "27mzKXzYjBUGt7PxDRfwYajekvzj7TqLcN29CYNHY4ri2KSu3YT7cxoxk8rPUsp5S6L7ucnQwy6Py3pgKfj2H6nU",
  "key35": "2qwUt9zZ9DaeP6pve6Hn6fi7Df2jCoUny3bqJUE5FgxKGcXFnsm8Ft2v7JdwYg9AorcFCUbHNpzrFSbYAFghKRun"
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
