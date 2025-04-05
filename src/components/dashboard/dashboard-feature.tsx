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
    "36cXDzJ9MYBmg7nELXRNpAQa2wq94QUA7sxKFKdkBjLrVKtfVkK8XAvpH356KhTCrSG6BDocPh3y1MLzovhiK9YT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y63gEWyCibF95QT4eup5EuZ1kGYhqRqNJ4exkXM1DfhyzZ6CntAbfvzZsnEibQgnfVvXAu3suRNaqHeDbB6NYXi",
  "key1": "2pd7yt6NGXeDTa2JW1WUhmmMdsgjiyN51hwdhKB2U861SPExdjCU7fqDHUFR2KAFo3Yqb7rJW3jtAHQwfcD31j9o",
  "key2": "5bmQCK5VSMe225JH8JvxyBqXSJPUCDMSizGg8X7XsH27gYZQjcmPL4WvCjZdiJ9tRQzw6pEfPVy5PW8ip7J77kWG",
  "key3": "2aJ4RxuUUBmZhjNq7gDN1bnx2a6WVyDrsoARzci5eEmNA2AJcg6B6QHZaYWBv8q62FMFdCAzTMWSYraor9uRVMHJ",
  "key4": "339qbC4A37cs6BXe5cJemy7vtgbqcFjCJ7a6eEWdvZ9BCeaPjkvRz4U9sp7tYRmUKNHWP3hfw84g5AnZGGQHYZVz",
  "key5": "qxqEodie9w255eJUVsa557gjgayB1UX4173mX54H4cWWsku7nuVN7JE3k6v3cgGT3AhvLDGebYMuJg6hKjpy3Q9",
  "key6": "2Mw3mrUD1b11SzQB4vdu8H1Wr5qPiZQnRwTH1724YyYYQGChRqjzghaECJVSuyhUJWWKKRW7TswBwYGssDa4tw9y",
  "key7": "5SYddsRxu6kwPprEszb9mSSFdkK1WGAYLtcnc1E1JUYDf8knZwRpgTQt3mrVVKtSMFMVdKT7r76cgdLhqtPbAnL4",
  "key8": "5CtBjiGoCyRcP5A1thjDp9RdDde38usfXCMBTAWwnvd5Kn2fcKX5XT1xx1Mk3VJV9rynJRRG6reg3FtiioxipyhM",
  "key9": "fCmXtPT7i15C2AQJ59dCHBi6JAqg5BmiLc2ATUuVHVYsL1HEZDx2e5D6Axz85raUm1y7LuMcUonFusR23aqWdPo",
  "key10": "ABZiGJZ5DQTLsAyoU8idxWV6NmkSatJiHs1xF7mAd8GXvHiwcy6ZH3pkFLf4jUXBa8s88mMqtA6JPWXFZN4SrdK",
  "key11": "43qf9XZcmTB8iG4qvArb6vNFxdvg2T2ZkpMaPCgX6UAt1LpxnhiuDY1ym9SjaWhiXCGJjtRigcUEhAs2xPzgMdn",
  "key12": "4kzHKxU6uHEjD2fdrViC4YBPWiGK7g38GoGH9cekpj37CyPwNH8uZaJ94VpXV9YhpV4a4rRVB9eXSgA8j4fFkfvG",
  "key13": "2AfoWTg8L7ed5jLTPre7prwKEyDSZHrCd82uyeKSzFhkyYAatDb1UUyQu3ceAnGy9zhLofCAY5WoqH9paJjpXaTJ",
  "key14": "GEEvhsPa7uhoYgFNDkYbuczF6pv9GVk7Eu61ijDoFzx1K7VC9Bi4VvqEGCSgg7pdMsRxsZPjzq8rUSrR9C6zwT9",
  "key15": "5JurChoMXr3zDoTE2YXcHkP2qJCi3Xh6LtHe4tU29gg7Y1a7QZE71toQ2K2eRwFNJSbsfXSH326GNL1Lo2JYBrEj",
  "key16": "21byefSPo2B56SyR7sTcZvzyq8PFSzh9ZvxVM77qHeKBZvoauojZ21SfFoNmDRkKX8KXmMbxkngvfzv69eaK4HDm",
  "key17": "LGpVQDZfEoAB4e4Rzm4DR85Go1JEESB1P8re2ptY2cSHvmX7o5QSgnPVscVcAEyxbM19BUQK2a92bUtoHWuj9wD",
  "key18": "5sjTWe3uyd54W8VkyV5Zt67xSUMnXjEYDaAhMW7tyKTZwXbU3odkfHqjgUUcpNWp93Dv69KLKiJFRgYv2N75xpGX",
  "key19": "5sYzJuqXQrkUiDqAZanJ8Eh3ianJZtPUPP6r37R5Y9nkuWauvHFPnbiAeqvFNxjb4BTiopJDb8N2tgWcdG8r2Esw",
  "key20": "4tpmZiwAb3Ygb1zmzh3MVCcvfMKzGiyqjZUnfwNY9ibKmiU21sD5yVkSm4uBUnLj7CXm5GhNkQW4ucgAdEuo4uh3",
  "key21": "GnbDMs78aB4eaWNwubahPcNDn1FQKJgJb1bvm4yMLwf23PUBVPRXhfUkbSsK4ik7RbXe8VaNaZC4oVccNW48cjw",
  "key22": "bSo6uCAEJ1EJp61fowAGB6g63gcFJUX5B3yUKbU7Kr4bNaafQ5FUSv3Nowu9QuGLPEUrfcNTMTdSqdsbV7rDyrp",
  "key23": "1Qmcs8AoJoU2GGaELhakikJTarFU8cLXPyWMvsTdLrVJDX9boSxNSTdgZQMV73kuKV11ZEKSfa19481DBpMyQ9M",
  "key24": "5e9nzpjPCJ132A2mWYv3nvqfXZxHXtQ2PihQZ4ypuLtDoWLxq3WGWfmvTwnCF5Dh1aZxzzZ4csbVKRtgmD8SAk9S",
  "key25": "5x2SgukCqpzuyWyqptSuEKd7TkgdqcabhB8VmT5TkauhCrJ78jvQoBLEUMxTnWGcDRVMPLMyxGWoSE1hw5BQLWyz",
  "key26": "5KhcnaQVGeUeBLwshYtC7jttqvvUgvFa8qkhh1E3McKAsMCnpvGzvSMpd1NT3ToTD1ss9YdUazNMSQYe2SPKeee8",
  "key27": "5DPyA7PMtFLX14fh592LAugAgBtZtE7WTK39ioaCf7k7x78HmW3cjghKLKanaNhJwmjRXe6h6dxMz9M9CsdN2mrf",
  "key28": "2oFmy8o1Q1fzmNTVY1nyPaSLVru8kP8Kn1MFPQRvytjazYpENrs6EHxUitW1kbAbtV3vv6tR1KtRQiQzoZZJpRfY",
  "key29": "4H7CT9DGeBNK69JLsv7ZPxRrye8JpJ11JUV49dnyy64EChwGUtYDfXtVvknoCgtCWkwfzeDvk1aayuwQdZkKRspR",
  "key30": "35WQAAb6vh9au8cEDiPbrENYwwBMPBnGjtRezLUBZexyoefogddPi3NM8Rwaj5fX8irm4REbuj4kchdUimJmEHLn",
  "key31": "6LGue83PgbpKENPKmWoVZ8h7SaLKSuuNseMwdGmejCQz8w8MXaQxLBuxcLu3234V3FUSDiPs9x4H3s22PgsbbfY",
  "key32": "4MpeFc7jweCaZpAT4ZLqMiXjxL2jicFSK1f2dFxxDYkdcCXGiyYEt4M2kqEUVkLuHa222WgY7Wa1kyFjoBdsK5vX",
  "key33": "K2GoeMuXapZdkxpmQay2mgYSbdPsuVfA3EyWaBvbHmYZyCEE7dcffn6GkyG4fnyJyPY7oikGYxmBxLf6c2EyBPk",
  "key34": "4u7Vx3W6A6mS4gTF2S6MhuEbt8GDZjesNQDUTFpNShHJL84uFFvPvnwz7gsSJaNzFoNuDYAhWbLdMVEv5MigwTmu",
  "key35": "4LkVgYNVv4ULedQJ4aLPj6ZguxacALvo8eiWp18ErqqXHfXEi8h174sE5XDTzW3T67rWdnkW8rHhqSV12P7nwdR4",
  "key36": "DpV1JKfTzyz8v58Av1YDNs3mz718nyGKqcAxkiV5qo3c16QQckbdhy1Qn3pTX5Cbt4bx6CTL2rmaAyVikbA61TD",
  "key37": "2mJHR8F8UjBnxRxG3tBzEB3F5cxZ6Ns7zk1gAzWGe1fxxKD7RD5tAWLkAAjCw2HKM1uMR7FFN1BYPbryWf5n2nTg",
  "key38": "3FG8eKpMVn6b8npVwDqqs1TE2Y6etx7aLMQfbLrU9ZXj5kh9u5q2wd4q4QkfXF2cThb7HMQQ2GuX4oX8n82NZYP4",
  "key39": "DXwhRzN6ZLGEF2h7hyqpoiryenYhT2wNdLiwNSqCBmZpQ1jEjb8E826YJ25k1CWhJVc44rkWRXngrnnucCmWeAj",
  "key40": "4Nb9ycmR7uZYHJm8RVHEwJYvPkNN48AfGBL5dbVpXoHvAR5v7E97YP3gRuh1ze4vqwis6hBDerXQwLh6JNLVVMGK",
  "key41": "3XPt5BGHCZ2gSVEDU7CA4QEPpT9zohx9d78omKPG9W6QACFtJrok1RV1dqovz737sUcvLbnrCeoyjZfU5xHcwEWw",
  "key42": "3ZF2BXue5LaDfKAsyfj3GSSDG26oQd3AsFM2zeTREgwtkFw9zLfEs9AtMf29DUK7ZsPc1mWtYtpuXFwUxsFKh4fY"
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
