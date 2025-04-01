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
    "5Y1yLqqViZSjg3GKXgTHPCxggCN7nUC1daZ9tpPMz6j5jXqRV7dL5t22a7msWUeAQ2v3xdJH48XHQjdTWATSjj68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BJamMQTWhCTU3CpiREaLeq6n1iM5tg3Xe3BNjR4eRiAKpw1nXEL1nZhYVaBoCsAViWbRab722a3kYFYjYH4kF84",
  "key1": "3iocZQAjSY3Yuz3z2ZvSfzHearR9VGZHgT8gTW5nDjanw8JPa6D1N271ri1shhfUri87AFzJa2XAQhth61b7Ri6c",
  "key2": "2uAP3kgZZmtJsniyG5TPEAm9rMWEaJYh7bmQ8FCPLMvijmksvAg2fBqYa5iBp8DHd5WtdVWubCCTfvJnXGBq4L4j",
  "key3": "2kRQGCtSLoHdv3fsaQ4r3Su3G9XDNJSw3DoKaGZ39WCYEZcrkQYxHEH1ZgqiDqtzqb2itPikZD7ERsTHEDgNUsZX",
  "key4": "5fnWErG1NmqaRWz14aHVaBeaX3J4RTU7Mwrc7F41X4VvaKFpJXzDD2w5iT9ywdzXDv2uRcPuVPJ4wD6Q8a6icMvu",
  "key5": "5CUdaNW33kGsWNLJenath7CqJsjSCpP73EayLigYrTyi4ZZaSghBcmSaGATLStXhEvscdL81xxEvYdk25ZvVebqu",
  "key6": "xkc46zfzRw63B28eNNZk2H7tCVL8AP6kwEVPv8kYhxt45z92xKNXG7mxhvMjAS4vL6moErwVYGzHwsjnwHGZsaS",
  "key7": "3RJn8YkEb65FCYvaS959YHhiD2avmi9GUNEUD2rqmiRNTYKdTbF2J57Zi5kc7stJKpAV9SskT4uoeoUq26vUG9pX",
  "key8": "3PGgZqA6jabTCu32SznYVmQDFxFRJb2iKazVnhWNFaCZHEA5eJTS5fCoZyBBhHkZ5woxgYHZchADh8anVL6jePBw",
  "key9": "61WWisZD3vZVpZje4KAnFPVfLFcQfSNu6njg6aGjaXH9RmyR72AKBSJekJwXMfHaZ5BP2WvyFLxgqT9vRjtj8nwC",
  "key10": "5WoBx3GbsEwHsCr1cLgWFHVpryAi1PhrhXBPHbjzBusiEsdVVuwnpHT8tqLDBBNMJ4VE3BSF7Ds4Ngk9DaurqKXC",
  "key11": "nmXSpNdmYJVFfCuvUHqkimD5aAPX3TwxAnA8DBeUWAdaNgEvsZK6pKsxEWV4QXUynkS7JXMJN6Qt2YQrrhGnRFc",
  "key12": "3Ae1z9bUoPBMSxkc1fy3HMJgyprHbXryTKqNvLP7XdDBKNFrQN2Jo64AiZzuCndAT7WtpL45eoGiBcCergGzto4a",
  "key13": "26K2KKjjeLbVrSCSthAyt8jGaJF4aJFD7w9iHSF5XsU7NtaZjYAjyAfKdxbNPTTPquSVmmso2J5v9Eastg8kaNcx",
  "key14": "2idUShynuiQ2wxZMr4PmTThQFXSfGQ1LTC4tL5BrNU7sQEDvjB4AcYUGA7FARzbTPGtp2e62JLXKpYBjxoSYq7kh",
  "key15": "3EPNQYCBfACHqcy7s6ABftEDsDpXSb2GGEfTdzdWo4u2ZwCE4MkgRTsy82qKHnPwNY9KL67ju7ZLw8g3A4yoxDWf",
  "key16": "4jzxjvbc51mUPUjpLPaS4uCKEYJQyPwGa7JHskRtrLNxXcEP5xaDU9xADykRowfVBrPRuuvHzo1wv2Pns77KgACZ",
  "key17": "1yLSLysgqyiQmMshUMVdDAYvVDvebE5kHJJNgxPd1Fz21fe6cy2ogkc6raBon55XZYMbCBZCPYaf8xpdjc3MPTx",
  "key18": "4JGbCBnz7b9ftfkEdVf8MZw1oFLNv3EkoB4Dt3FjeqPcEna1wnyAeG9w3azjLcR21bgyiP5g5y67dmmnhbFSNQNb",
  "key19": "44QEb4gdr7TVFEeKZ7oWd4se454aUMqDuRGZotNxNnDLGYaJ6KAgn1a14zwHhFfM4EgqfSq1mtAT3RNidzjAGzDX",
  "key20": "3GJZkP9DH8xBwMNZyMHjVAGxYxRrEed17bpL26Q3s6VgRkuFthBfWy6h6gFaBHHosHjeyC89RpzYZhWNhcZWjcFE",
  "key21": "2h1xfHanZaaVma9hXFYkRCaRPRxBr1g9qEAuScmpWbvayVA8DnkjTGHQY4d7K7aZiSLMQg5Eup4d8CwZEF6Lk5tH",
  "key22": "5ncnjm9FoTv7mKDhybp1iTfVxbEn3EWkwcpypPHEv2nEnqdTM6sahx4GWMEj9DV5CN8wrTSnYnCy8yYC8na98pDD",
  "key23": "AYyRCoEygMV7AJA8NoQu8sTZoaAiSPrhh9Bgywv89DNGPgne1P9cymvhxMC8VNAXEtssqJZHLgntC6P8DLBsCuV",
  "key24": "5GJ6KiCtHv4CyLZiPLYhrmFQ2p3Y93XF4n7LqYEuRK6ZKCR7Wa7wiDmQkQJgZaCmmuNATQkuiwREu1Mp5gqEoeUD",
  "key25": "3ZHLfbKJW9x8QWes9GPhV8WqY6hvm328fSaS5tN1gv2PX3QSxHA4PNJjUM8WZJJqMwsQctxYMNcNPff98H4tHvmq",
  "key26": "g43YyfmsAU8SBpAgybvXPbm5ZY4ehDLAeQ91yJqDC91rS6V6wiVEhDZFTgWKkpwHzY6eVAPhU2wrqE717ovCZcP",
  "key27": "5RZL5tz9XundXSC9eVQfE1zipce1DJ4tXPjFudoga4tEjspw6VfvXb6nRsYzsketc2DXRS6UdoKZNEDLyowd3kkS",
  "key28": "4tHAPcz46ogsbRULij2khmLUdpt8HQafabB6sG5yQxroK1yZyMWwahwewBLTZhc9Ta2BiRr6u5gqN7aUFMMQ4rYW",
  "key29": "2yK5nm1DXUqxZemdiErmHcAXrTM98S2jLmfTqJTPSaF3qAKHXwhrJaRnaAf2Qitctfe7eJgBX5MGXaazCJhNGM3E",
  "key30": "31fS88Ed5qu6yFcUyK5xUenhDzRRQWyXryCJgjjBbBpiQEFhgqRRX5MSnPxpz1CCHvCMZ1im7jyt3uXjStzAsrjA",
  "key31": "2zFXcvDpmqxt7Tp7bQNy2kDgdTjiA2hUi7Ln4bi4Erf1uH2YJBNv6zDLzm8ere6Tw7wst1b6dh7Hnh3VYykXng9X",
  "key32": "4b4d47pXkyVWioe2PaSZuC4vYzaaPc32scZEXNpAPXueYEwjSmeLxzCf9i2j6qUi1qiThc9mBibzHhuxCGchukeL",
  "key33": "o1D1qxH4bdVrM1PqT1Kw4V2tNZaZRCGLAEunY92c6MREoTUAFCL4vDjSpLL5rmtR21Hv7tVB6Rmg2vkXNNjASQ2",
  "key34": "BrwqV1johtPnUMnu4oFWBNVjFSECtp88Kus1ipkicfTRmAP1rctq91dsCpQMcKWACpiUbDqLBTwqxvR1hm2hx2u",
  "key35": "4cn6YJG9iQw157LrXLwDA4XDQmkuPF3uZoHc2cVQhZRq1E2kaFb3TL9KT9J1viqWzUoca9yhwWtQmRKCD2ktFzhg",
  "key36": "5dmAx4s1KaDgC4CeMNeszfh4MnyWBgeb6B5PWZjNSLkGDtMsxUKVBVSpfAWkmzbByXr5NnxYD6ZKmUJwwpDBqcUf",
  "key37": "2tTZfQSfW57UtHVkUE7DC3hM7omq2BeBfRjXxw3QrQSn82im4L2haohAHcLXKWPD4sU8sne2DEd4ds9GVW21D1GQ"
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
