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
    "3qgMip8gkdix7u3XVeSBQy2ejMG6E1toBsVc7mWVzJXNqbQWUYCNFTYYNTvqhMuwtoGf2bbk4YgeejLMQf2yfC36"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7zrkuXZsH5ynF3TM2HeULfmVigBm7H4UFTGJDPXjaT3WXnxGBkYwtu8boxV3e35KowAUebnJbsJKi76dxA8QvRZ",
  "key1": "qCkhJ5JGrR7dpkVszDzto3UNXH891LWHYyw2ySEEaEpubu8hQdDBpbgycywaqMAFN1hDqeTBaaic7MfvoPGgJc1",
  "key2": "mrX3o2pns85qDpnrfMb798TLi2Qqcm4xzK9yPc3mnUQxocyJ5LGtTWvEvksKoNsXBf8h8yUQuYJ6NYKBzJrAqpz",
  "key3": "3m1FGoLewVjonQj3kDdwqZN3w67YAf41kYdx32PTKieju6KZxaHqgwaxTJjRjt266NWnRKZ6vNRDGxcFLXY7vaYB",
  "key4": "29REogJx2dieVit6D9ZoLMs7nFwyee28JYruVEViYEnt81HDkAW2cfoY4aHZu48P4riaEEF3seGruPDdxWbBoV9J",
  "key5": "29qNPbkCpNAeUuHnKH7GRAPMZusNc9jirnXj7yfaiy1zJ1n7CFwPsQ3y2nC3pu4zgoStJT2BbYx5UZ5pJnXbiNBg",
  "key6": "3Mt9VLr9hVWmRpHoTCtYSZB6pbBkeSbucxcTv12ge37EEGFDzS7NoQsSNKqkzGkxXtDnu6v5o8qM8Fvy3RjzCo4k",
  "key7": "L7t9tZSKZVypXaGxHVBvNZpXQrnVnkaA1BKubo6BWrMWdW6d4CHejFgXxEY77jhWcrD38myC6ocE1jGWo6KztyN",
  "key8": "4KWxoggDPhuBe71CgsMRY8j895eknWRuhqG53XeqDUuJWVKAdvCfrhd4y75KYWDZZPohMEAgjvEAEm3Zn7hpdeTE",
  "key9": "W5ifRPKWucdmmLzyPGqE8grQhiJia6KsVBDdwqsNrr3L4kVX4QGsNihLqDR8XLybvD4uUgdwNkt1Xt9QwqTSa5n",
  "key10": "2Mhp7Rk9JtmHgcLFiera5LGojFdKWNWV2igqRrQr2AbRGQv1f2PFpgy8UQ11Nj6C27KZjwkr41aV4kEm4Dh6uft5",
  "key11": "4u3NEs5VBynpVkYt4ZVTuYZLRSbADAhMaZXqVbQusMALC2mMboa56p7aSizTNXsTLqSU6ZAcbT1NcWLGw831eXJ7",
  "key12": "5tVyzztAddXSAatGVixuYftzZny3QBRBLTBjCz1TnXF9iwygwhK1BasmhVrBdMxx1uyCJH1pN2MCVB5cxWtpeVUM",
  "key13": "5xuzDqcVYzKaZkgRsNVcrBx1qwvJLY8RYksBFZ38o6w7vP6UmfkdtJ8wPQ9kH8fDaZPPKMoqJi4rHPaXLeoSRC4D",
  "key14": "4JYkygHeH5NuHP1kMyk9ne95QWjs9CSh9fNX92hucfW3RAhK7LQTbAw7MhhcGamiopQXEZX3CTrYc9Qt5X64UxLJ",
  "key15": "5HtpN6N7ChNxQ9SpQLTrMgyAczwDcGqthwx4qyU2mwSpskoV5RhaUjPxUHAQpBtRtafe567Md48DM2FZaPSPf19N",
  "key16": "9yWK2T9CJpC6wnqZHAwDwJc6J2FbuVfCdgTfpiSSN6GcvgQyTUDP9EVNNh6P2SD6YbcSvuQ6Y1n6QzLTEbRfpFk",
  "key17": "5w3acSH49xcSoWEqeniDRQmQY8Spo8iQwBC8pvvEDoavkUa8asKHYwFQ2CgzAAkABhZ6oiqtdPEnasghs3NfpQ9",
  "key18": "2x5YLZSPHbuE1yDkW51acPXCWv34aHZipD8V97akmJfx81LhmBT6tMdVkXhyXKYEzkyuNskjWh9SekdimhzG1deM",
  "key19": "2QxuLPUxqYn1Uz82tMPF8WgTAEbDCqNEgpBJdjJYyfQHrtGjwSUqSzxFhw6XxXo4s6f4TQfWn5H9Chvp842C9ExM",
  "key20": "2GSTN8nM2qEUAkP3GvHg3MkgjpGN1TPMzp6hTfoYZHzGD8QXy9nB2xTbScUCL7ks1NUEeMNbhqqpHwpj8SWFesKR",
  "key21": "4LbcQMNi9Fa9dwGH9SaaQwbLPVAMj5WWys23K2DyDLb1azQMWkKSU42Sut6aBxcAyV4HcVKp9B7DMLhAJG9myncq",
  "key22": "64noRVLRRCRvF3285xUXS6niY8wknUCgwRmYBioP96wvmzK9jezpybjtP61GseCki65nwgAqoDQoejjxhXwAAshP",
  "key23": "4tw66ZogR5CZHjFuVAzRkJ6aGgD2jXUmJHn4cWWWX6UdkodTRRJLDqNz7bjG3NEgac7wQmannpTRt46wZ1ekZZi2",
  "key24": "63a3dXMYkkc9UdrbbwUcHYSEVJaNTvaW6R32ys3nXT5FCg8CEqy388xkz9AvLQdfHvt1Mgps3SNor1q3rfy9is7W",
  "key25": "5YArYesLVGFqArrLe1xCWvWToxoqYgCjwgcoGstPUHyi1YHv6d3hvTCMnHYUMjSBBF2pEesFDRByZaQEEvDLjh4E",
  "key26": "5h1DruVJoL3XhXyLeqJsJxeFaEA2LW5W9UeGVeR3DbBnRFTBHkeNqqCgnEV6inQmPxAEY7S233FZkcYEEFL3coGV",
  "key27": "31qz9yWsio5Trq4CeHg5CKbSXsXqTRRX6tCz3StW88Yc8nThC4GnzEKzdo7w7KPqLEf6FztWoBJdPWHwPLsyttSX",
  "key28": "3WRwoRWCNhnu2NAdgcM9hBZGoqJhyQJBfd7PVxwYkuhWmAXLET9v3bjdBqnzLE1im5sjHJXEtsQwcgc8duaTbf2v",
  "key29": "53jpWNTDEeQBSgnKc6KEGJbGPNUM6ubX9daVTbATdHyscoR8k43FudKLqh53hPM3249Psacgt5dSEDEdFSL9jM2W",
  "key30": "5WwUJcs8tzcdEGGcTJNZ3PN1dMNZF4zyHkuKUfGjE8F5jbFYp2Mn1QkYYvXfaHjDknmp5aU7428YF9DZKX2cS72Y",
  "key31": "5aKJx88w2JPYDtyjrZCkpgQuaeT9jpp2hRfoL8rXoUghdr4xRGJ7ZuvKu4YDJcAhBiw43Ajy8hkWhKpDRwEfrBWo",
  "key32": "XQ3mDYQ7V6Lf4kgYqvkv8tzS46DswCWXnrANKqw2JnQeRBhNkt9twquRcoKt7iUYBrF1wXNKUsy187V6NsAz91h",
  "key33": "4UqfvU3pGQbTM8i7ikaZG9Hgbq9sbo2S8nbEsGYUPmKCJPDFrDvAjpa82qJAvqdUR9RemLusA5tZRqcXWeRsNDnd",
  "key34": "ECZd4NFuPFc78GTJzha1CuhDKebMnfGpyikXNAujvzS8F8a1fx8TRz4736mvV8rv1x61yzeBjA7fNnTcCLgd9BU",
  "key35": "4AsPVUvD9qDb193ed2RfehUCtQT7xz6SXLdARUoZxuQCGt3ykbo2bdjUWWz62f8ri44o5wguMB5bKSRTNUsSit8j",
  "key36": "3c3tptrEtW4rjNLXr4Tbv3jTGLujKgU54WVf5ypNowzaXA59C4Darm5SJ5wf1qsQRDWUXVmkHxVLMfeD8axE2hj4",
  "key37": "4xaVEJVdFxD4t5yZh47PMDJVuL6XgU5vmuyyVD1D7GiCrMsQAZBNF1PWbeg45bMoSyBQ733pRpyR36VDQWr4nojh",
  "key38": "4XFhxX1RgsGhZbp4CAzdj17YrZatXZBRnANEASGmH8Niayhe46sqk84h4RneKZPGq1Nrj7VYov8XguBoeE1vejg4",
  "key39": "2fPNL3ekhoy7yb8BeBmQnv4UtGuYc5xLVVwTRzYztGGy6n2RWovj8z5FL17Ja5J7ECWaFQe9E2pQqKGMqeQb7vaV",
  "key40": "26QqB6FeLhf8gBGZ6udER3ykdLjP5inRaZVop7tYpVSLi9xRt3hKxJJUD3oDwbW8Qqb3xZA5v3aqFXhFr4Mjx4sm"
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
