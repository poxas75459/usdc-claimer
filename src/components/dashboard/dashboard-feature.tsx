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
    "9AwmDJawehUZmxkKjGDUZMuvnQiXzBV83LSrAaj47iezM4RCCfvSUEstCA488UP15HfauPdcEYrVA9zggLP88GU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e2vmde64Ar3qRE8BZ3QA1YAYzZS816kDijXEgTHiSfajzTvZgjV9FEwDgWYdrM8qDRT2JDs9U6RKrpctQ4tmAs8",
  "key1": "4RcwdWRbLuGF3bhAmWKwh3Rg2JwnACnm75GDvRqwt9XgQBct3YaKFNLjPQWQjexqsajv7jkskyF8YhoNnFzhQzrM",
  "key2": "3Q5aMokxTuST3PLBct6q4TPJD7mWt5WzCt4E4o31eSVBtTDCh8SuTqqurWGYHWWPF1Ks5TAEneyuARxYYN4Neu9Y",
  "key3": "3C5ZHs77CWuyD2JugPHnhcEBMed8qdfDFU1YBQPNuKeVU51wovcSCV6A8B1XuFiXLDxfk97UdcjJCwe9PVSQC3Tq",
  "key4": "34tyR9vNox7jevfFoVY95K1yGzMTM4oXDTHHGMZ9oeHJG8oT6RWB8G4THcWRovbrJgNcUeC9PXpNLA2U3ctwo8Lk",
  "key5": "2oxYK1SftvhmVZF4j6x7NCbsRLgbESnGnY3HQPuoXhLeQii2DUfwz3LHaXZ7iEwmJrhB197GUrcewznQCd8CyVy4",
  "key6": "Qf9wZgok6YPNeVAP6pUuHd5M8bvWdmUvxrEUjZ3wWvgmatbjzFTfmK82abysbXzC8oD67P3r6xWbmpnWhRzSVVB",
  "key7": "63iYQ7xpgzt7M7b7gZUyeAoTCua3pVTPPubFn8dZ1ao3FgRE1abrkBmBskDejw4HgYwRHk3RapkvzJimaHiCYjz1",
  "key8": "3PhonBDCoeHT1Lagaqfy1RdzEXDa8K1TkMR3DNoUmFqcxK3dYcoaUn1udji85wREEUG3Nx2NS2us94seAF6qLibw",
  "key9": "5RwcLqBcojBjdLWKSUW4Tiu15q1Vkby87kYo3wzwaVFC4XCehE5x2nYFsqmv1yf9QDLbuFh8pkjMV4K5bPo4Rcwy",
  "key10": "3WGBRdknAaVpaqWXXfenPfcNxY4rtNg6BMBpGrUcYbphcQnpemiyM7cmvujsdpfsHCgmYxspV9HwH1mhhKMJ67D9",
  "key11": "66npMw1DmPTYPnpnMAhdck7roch6HHBcu12Mnh6h5Pz3HeLVprDVeUvFx3ALAJQJ16n17XredbS9EHmDqoYSLc6E",
  "key12": "bMg4TpyAu79e3xHVZYbhNVvAjQbanqcUaVdWEigQ3dX4VEGEpfMpT1qX6kt27CGSbX6XyMkB4uNj3NXsecoTHWb",
  "key13": "1S4x1fX6gwKAyRcgQErFEYaA84NMiVd1cDuaGFVFF5iKQrFsvuNrmyeda41tVTvGQz9Xt8tV6XsL7e6tr4CTCjk",
  "key14": "37WRaprhEHCUhafoHeGmBWUH9HKHKsxhh3v1RtFiCU7UsLjfvMfw84bf7jdk5xKr5s2aHBWDSvPqoHcJS3z3FP8c",
  "key15": "5PtMyLgDzU1fNG3sibgSQeEmNZJYKWV1W7DcpVimpYRHzXmHbafwSAzDSKSoATD9Xpwso6fcUZ1WMqeBcWgEghEy",
  "key16": "3Fi3XSokpvBugT9anKd8ixXhhhsbZTqwqKJrMKT9vQRuRcLfLao5pbNhLUUVvaKJ9XcaxYkYV6npGcwWXBKqpr5p",
  "key17": "557Zzy5yegTDMBRkiezbAJrfAeL64n5Uow77jhrzHgajt3Hd4swUqRZWJZP7nR1jCqzzjDRyh2C4URWpFYTXSkNi",
  "key18": "5UWdf1XYH1SkLn3a347PnrhPkjLVgm7KoZTWsxfEm54ofLjiSQ6ZQUMHzvdGghWA7vJ78cVpbc6fegJowrXfYjaJ",
  "key19": "5T2K98agekHHxd4CSFLjaaT4AiUsmtXYBqJf6PKYNFjCKK6TW9ijTrH9BHsKpkpD8pykqNQNB2kx1exCWGBeMHJD",
  "key20": "3EK9sfF61qezdGqgjwhPi5XcZFTsyDaLSMh1fM59JLVKnSCvEP7YWU1dv4fWqnu7Hgwd5MbebJSEXXo7txvGhgDi",
  "key21": "4CikqbA1LX2DTXsQJUoD2oRqQ4GgG6nzS5CgNX7KVS2KKhUuYpmMFBgyuopgJw2oqKinLXwKB6zmChcnf19BVJjY",
  "key22": "ygbLGDnLZSVse68UsEAjamFQChMiqgKuG5uiyZHmzH7p4oX99BCSBt3ShJFtkwVUGJwW1W9UdTvtABXzGNWpMV4",
  "key23": "3LWV4XQJaz8L8tq3pzATT7mcxBkP4gnKybYsw3SH7DNXLddS4faGAAoeNv5sLSrecYtZV64CwVjho1nnMLHWhSBd",
  "key24": "66pRo5gVmLh39psbiW3krNixThMbh7RVkrBNjJcZ8RFaDWyMXeY8DRQQBRwSs7Ht34xYb849WzdBFZKBP4fiNRpE",
  "key25": "sd7dqbLe7qNvGowgcWGZdBtMfK5bVm8MxYUxYGuhfeDimH6pqkZ9FGbwDUZxoXcJKoLVr2aKXjcnFo4ZdLBeYwg",
  "key26": "w3KRtZLtn6bGhxhostCvaWKmQRK2uQGxp3gGtdu8BFNvpHm9iWFXDLkmSXdcrkrs9w3WYooTyoFsnnpkULBpAu7",
  "key27": "4AFkXxyXiCpPBe9uoS2SHijqvLeTadduGvW6W2JqbGiJmK2ea3vcGhSjcq9HXXeFFbwfSZmMLpeGUMuFcnHkHgTR",
  "key28": "3oEQsv1hibawEQnXQ7KwdZ5C4B4JfkurPhNkFViTtc7v117K1YpNcw5qpJfHtxC62knUUbVUPzRq6Cg9TbgeMX91",
  "key29": "VAd4QYJLKrP1Qe9RvpCMveivqggwA37uK8MnrdYeSUzJxCTEBtvPuEjpnyVF1ym98JBaKm3n3rkqumdmGfmWUTT",
  "key30": "5jhw9BkmC8yd4wqXJFmUu84NebUbSkyprVU8KcvL6516L1WKgeqz2jv1BPUgKzFxNRV5KqH4JS29YXSjUAV1t8uX",
  "key31": "55cMQNvrsvbg9ytPGzWEzWYY4vK1Kr4xacVzdRwahoyJwMkLyPaxsXzLe3omSu5BMriBTGZGRm7U9AhMFEhF8FAP",
  "key32": "4y6qdV7YMr9VMZ2rLLR3eW3EB9CFunaVZcDjaUxrCp3BmJM5JT33942pcegAUFSKztJu7CojEqBWCUtCKBmSCHmK",
  "key33": "3nZHsohW5NvQs9VYkaiAumxzhjsx446RTbq1xXcytUC7vDKVxR7WQTSWii6Z8HPc9a9hfsF1ePzTxBdhcYSUY7Pn",
  "key34": "4NBmigAyLnheKyJosRASQ4fJyt2ao1KcqCh3AwGjb3sh3gM6qGdTFvh4MoJNXM3PnKvyYnADQagyG2XcgRzHU2GL",
  "key35": "67FiJuVpTDfmnxeCZyg5AZmenzCE2UYNEb2gb4XKBmuHDdr9j8i6nu7fSJ5o95QqPhnNmZ7W8geoQBrTUwgUioXn",
  "key36": "55zw19Q1ZGwRAcjZCNM9NjzGBaFSTBXdb8AhnUQMSiQj7fEDdtzBwkRsQbzjThvRXjfxM8wCAfuAsWwYE7AmE7md"
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
