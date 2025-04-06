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
    "2yFaSQ9NoTWLhc9mje4kdhuEjUa3mAzzRzxvMxJv7FAvgXvEcwuGq9aUdYfuGiN9jSkuAbvTSABSXW6BH6xG3LGs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YEAUrPg9RmTV7Ye1GWc1PMMLwSGKHLo9YSjHDiyN8A9N1W95YBprUrJMDPwoDPL8AWUPH2rdFV1K18n4J3rwne3",
  "key1": "4SqeLcrHqwu4iDCLdnt4XpmqUesAVpwuC2Zs4URVxr8ttDMeaUgWuiKvmjb5zENzsCJRpdsU29YKSfydxr2EAZ6G",
  "key2": "3w5WGMaafvSjweuYssem98zLrvipFehVotvrFzhGy5Bqc9sKs9pfoTmTXWrHYPrvmmDZCwpNFtmVnchgmkg8VDe7",
  "key3": "4RpcYWVzv2Pd8a9gk7ztPsywX62S6dUvVp6UVmq2bf5Srie3rwk8xEcaHEeYWXjtDVzgnBj5gRwZ4xLDC25DF1Hc",
  "key4": "5QwVtjRmKoYYYLL8X2KCSvfeeE2jweu5kbfkKmtr2MYDVMkJCXh3KApdjsjiKAaTaXKmh3e7DC5Qzp8omQvAVXRq",
  "key5": "3WTmFfYMXz5vp4LxcDtoy1qYJxjvHagC1ZrfZoVXgYPCGiBLTmvX5gVA7wCGkVaXJFenqjST65KuiDzqkA5Y8Jb2",
  "key6": "62xBK9sJqJYas9q8YXww3v5BkxF26oHDR2jCUbNUnvwGkvNkUmtQ5Bn9P51j8XDmG9FL7VdyiuDqjZiGiPMDcxDV",
  "key7": "5eUrrMxDAB1ABYt1mz39weHi9DbnKN7yhFKwvCnoeLg11K3qq6FAgqfX6RL2Ga6nsfQ17GFZLPLppBhHucqPKmVA",
  "key8": "EWwDgBG9zxRthUzPvRaBKb9LPHwC1drUuwQ5Ryvut8tK16c5LA6X58U8EJq487L1H5ExEYRXqi9RQiYTH9WaR5Q",
  "key9": "8Sc6fgSJRrFtEDYnyz6yjMfCpfA54snrGvtrB1Cd3KSrMGm26JwZjBPWVf4XmGWFCq9PZWkDes1ppEbeh3iBFHg",
  "key10": "4DxXE65bu8exTRgHZPkTqo5vtuR4cSQnvw5kuJtyXHK8j3JFVrLfm7gtwULpLTDHeWpUbW8GHfmcsNc23NVw8rxD",
  "key11": "52ssvsXGUXcJS6PKUsrfWTZvuj3N9sp8733Fr2s4Ht7UKwe4bXWAXbrD7wgeRfkNdtPJAMJuP4nipnhHnq34hxxc",
  "key12": "3m64pZoYDu5zeuTwodJ3mBMpicwD54n4js8BRpfbZLGVFtcG64VGatzCCvEFuyJK1wTPifdHuaRmGSU8Hze5HzQW",
  "key13": "2esHd8bry4TAQnAJTvY8xqRjB6MnZhFuPCvsURcLR9jpokgqzHt6QBx6L8ET5r4pywWfTQmZ2UfCvxeB4npK55GQ",
  "key14": "64694uE77gu5LGLiY5L3gqd7XTyxApnA8raBJBz7dDtYjzoHMNQn2N4rcLC3yT9Ay7W97RcBPZLdrPaoApNS34Mu",
  "key15": "2GtZuxdPwbFLMw3GPYxmRPcRk6knJAzRHRrd41fgrujADSWhXwAkrYnuSKM93jZpJtmTuQcZkqjK7EYHaDNfhv6E",
  "key16": "2dmKk8KCqTwF41zVkygaEJCuyxfp8W2JEkfmAhATxnCgPyN6oPjCJVnG4PmzLURmGAcVFesAR6eAWuhqJXHLKTfw",
  "key17": "dbJg6zSFd1wZQuWNFJxnA9pUqLwm3TzWd179yarTYiSDBWDwJNvwpaHwqnmxPdj3gky9fsKqNeTAv2LHCcgy5DT",
  "key18": "ivQDxENAN5D5xozRZHk7L8RdHz32MyGmA7a54RabmVsJde8YRjiz8ttvZ6ywBni1kVLRhVFt4d1tzJ9yMfDuqt7",
  "key19": "33qTyjiPxC131jVYsgdVByGcE27JVLkhGfXgL5dKHhCoLLDy6m9RcvSTswzi6yXWQumTZRZEy75ThL5zGzQ1Z74m",
  "key20": "HszGcSmYA1hkxAF4bnGN6P6y2EcrqtD79MFD9C6kLpzJDnFvZZ8WvoqjF5pX8Uk9634dwroR4H79a7cbcSNq62t",
  "key21": "5k5M7DSCZRrXs2b28DxtRigYALd4UGQmUrvtqv3Vpin7RjMxXp8rF2D3JXjKkiYjpnkiymbdWCHehvUCJ974pDXF",
  "key22": "2RqwDCfrdhY3uhA7Y8FSPFMH4g8sHUBsjvcfsBCgv2WpEGduSpqPL5WKt4j9JMQ15PCfNYYiaPPah7TCLqvuxPto",
  "key23": "gNoLJ25bx87uRKAVx2uEAFD4sAUVnEMc8EmoXTwdJ63mUSzQwHgaiXK4B2yJ9zw81dNcZkwTVV3LbinxWXFzB9n",
  "key24": "4WVk9jXfha2TjDcAfYJd47tZcWiA45dC84CB9PNbUZDDvMYBGMiVbcdJChtg7nBuxqY1LYaVfGsp6Dc3aVun6BTC",
  "key25": "2KE1u1Py9PbDG8gPvPJUnBW7U2dt2EpW9zrdimNXuvMNjxPpCF4SGgQKJ6Lq6ArEWx53rgPCLPQR4ZsZU59HyG8R",
  "key26": "4rAkCMYm8wGx4382BouoCsZxjWnqZcTrNU7R8TaZXg7rL3fJqQaFoijNqUR7zKr2XoVEi9MmWWvBGYWMJBxqE4LM",
  "key27": "4M8hxbpdX9FvuygJGejx8TzcVLfAEMLTLsJbaY6T514VUr5ZUB53XCN1KKYAA1LMU2JkgwtMz1GDxDHxNbBS9iE2"
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
