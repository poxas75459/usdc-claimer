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
    "43wGafZWSBgj7rHZ6GewaX6Zhrqf8S327t78ZLiknbyHgNVUBzXQuYUxZt6TbmDQGqR6eWt24azDPb8nLjpKx1sn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GVTx97ATZNL2fHZ1b2yYFqJLNVxsMo9ZSdrz1v5rc6bosRfm3bKtCDsNS1EL1nPWj937T97AJy3DTdxFGidUTM4",
  "key1": "4ji9LUF5kb8t4owzp539dNWYfW2Ce7Zyxo7EDsbxxcxqUKttL9x2zv4Mn9vRTbA6yT7eV56VZGt4DyiqnbWDYcvN",
  "key2": "3uBawwLrv8kh6MTt93WuxEgt371GafFaE3TYkLTyw3Measj7hXG5Eu4wyDdLx8AccyDKjMozxdz9MXXxqGAEVaKX",
  "key3": "2cAhVMY2JaoTCPDxsaCC2yyBHjpDgSmsQ2rXaJFR8PKf8ePZBXKy7Sh6mLT7PWfUWT3GvbK8iKaTgjLBPwpEVm5b",
  "key4": "jrStjE3qncymmCd9fG1pKSbNTJJ7M6qGy8nUDbmXawa6A33DBregyC8imuAqY6GPCdtCGXXFdmgd9EXdvadhCcV",
  "key5": "3eSW8UDk39DsZkzh7EPHFv1rKCgxXe6XSJ85aMJteYBFKMUvHDtPURRVSRaXaENiS6QrpMiDzfpnYJ1e3msbQbQb",
  "key6": "4HE2MSMGsMDMmresjPMqVkLS2QojWcNor8TP7BZWJ5g6YKhgCcjjwTjW7kzAmTmYN7oYug8QTybga7gziyZ9gkNc",
  "key7": "2d2bsBsKD2t87KyE5nXxbRm9Muu5faqTNGsRKAvj6fX48gj9fC1wEHsNgDHDFFEfiwwsmMsu9FaY8QbxyrocfPGJ",
  "key8": "5EeTgRXpqw3kbnafZUgrgX7FcZzVUruJPCJfFWhsrCyCq4N2j6FDnSStY6APALjsxdBug7KySa8Dc3Gjo9W7bRzV",
  "key9": "3H9muAgkwk95tam3zzzbvrrqMZHXu3vyZjpATeDe493R62gVt9vicgaHEJgmGn89QwAK76DrAnh27MUKajyJHojK",
  "key10": "2X7dyMR31xm6a7VtH299CNh1LEa6ZYdcFxNdPuVYsZPq63o1f39VT97m7Hd9Ge15tcdQiBc9Ppv6yKBw5JwZGHv6",
  "key11": "2uvBRJAULTk9BtrMdQMKoTXE3KLUgccn5rtGw8zKGVA1YmbZTQbCzVJ25P3aPemXuprDHJYuz5T74uZP3DuiWSgG",
  "key12": "2PLFsxfMSFrZ3ZukTWVCko22cRMqBWFqNG328VE1452x1qswSQ5WLpe2EZzZUMVas7TcvByx7CeSDECz2uu5Qipe",
  "key13": "GsFaxQ31CMosG3jvmokTf2c7zu5Cuxti9VsNpdJ3oMJcCaPnc7zR9h4cT8akEwrdC8BTvrqkiyPhSqGsRmdp7P5",
  "key14": "2an5Wv2dJAGBMRRCQiakHkpf8uwDkyz7xdYvn1HNBu3T28q9K3JaSFGPq4cLq9sdFGBf7rHkETckjWq5x6PsHWVg",
  "key15": "4diYu6ppTBsLBuR6JgQaTpcrdZNUaBvbXZRWvNvqY92TH92qMHgLBrCQpadmcNHjathVyGwBKyUhhCRPHtfP8phB",
  "key16": "DFNRVpZHmDJn4RAF65YSHWzCMgaAgeqeGz4WectisyxMDdRVSCkuv9KsGisXkq7TSb4VsEc7hJD8VbHCqsqvajh",
  "key17": "5BZnJsTkfPhi1MxZY4gDwMDhKFs4CT6bdTUELSjTEkoFfic7xw5SYYsJcxqHJnXifMeKXyV5no9fegtE9mbyTq5g",
  "key18": "Pi6GzqpDNWgnL8tnBFjifSW8J4HdRQq188cS2fYDyHdKkNwuisoTjDneijyad261rcagYog5nfW6DjJQkzGAeNd",
  "key19": "5Jgnrnpzs8yZHnC1ePCvsYa2h5imNLwEHKff85fMxcz3WC9ZptXRJ82zPZn61i91mDoEJFkjJubfQLYNo4WJMTkW",
  "key20": "2YbiSobP9eSNWCjfu6gwfg94ongFSgqqyHfWMVFcUye1pnA1UFGDeWZS3bv6WpWQcFSAvyUg6xGRvc9PYSNpGaQ6",
  "key21": "3jENiGQQaDt57jUSvntB7fqMWcc6ZtfarQvvkQAgCAzqU96igrG4S8DNDF4PGTqWTQVTZTerM8WT84UVcSgqXUDN",
  "key22": "TU63yskvGnaWCA9bH7LvHXFd1tDQdRGr27efDK6DPVu1CpAo8KcTAw1MbNrCEaDGWsPFqbXtWdvogekzZj6C3wB",
  "key23": "66xLLPY8ySmua96K8R9AkKHpo4L74sUfsimkbjVB52UQC1anyM58hpTmpp4ZKUGqD7mDDwL9MrDASsvXDTGyQ6jw",
  "key24": "51apmTdJaXdUx3UHYXx1wTeG5QTumHxh3UmmWqZ6Fiji3d9eePa1MGoLzPoVW6mWnvnaiixfRdkiS5ZX1jL7Ryib",
  "key25": "3TM5faqyvYtqPPNqSxLtZeKYsg6d8kzfkx9PFrSRfcZi68677Y7HRyUHicp8TF4qsQtJYFJPUVeVQzyYE4L7WkZC",
  "key26": "3nKaxpcHTCRbPyLz6U8TnkFQLoFM4z8mg6zSRwhEoMD7h6SNevsN9hqoiBmnYctppDiR6ezAs6ohmyHdtMJNxYuk",
  "key27": "2aWLbExuSu7xY46wMfieeWfw82H87ZvEphPHzjFUNXV3kMViRDG4TDwVfeWF5QABgbYJe8bL2zuqzTkFPc1CUUDE",
  "key28": "2KQtGJ9bUSYxHFj98YexJVJGuNEXJjcXBWVr9KGZ4MfAagddQ75StWWxGPMBdZTXHNeECaM1Mwy5SQ1JoFKAunTJ",
  "key29": "NgXWg4kS4ejBQQFAzqpWLFfCHWntyPVYsnyEkfoi8aBTzTQt3anyJtQi6RVHqRcnXfFE1Nb92rKCQRjzsVeG1a6",
  "key30": "59bYdAwAXdi4APjNocxyyq92hhCHG22Ge7UnivTSNZabmgXK1QgCgDXSc3tramTv1tsCSkpfg2ufFSqq82LKp4Qv",
  "key31": "5xsr2KGe7A6DkwL6cqb6xHQpiA9FY8oBaxACv5Hk7aHw2yco3GAjEwWwa4J7TFHYv1WZLfRuMPd9W9UwG887jzFQ",
  "key32": "43U6hS7mRGHLJGe16QycdrnPaiKGnmP7r77fEM3UpbjDxc65uUYP2TJzmpQYHZqA62ULXWy531rvWrtvka6tnaPh",
  "key33": "66kMWk6Be7xB6iFgsH1fjrEC9p73HsRq6f3JypMSTan4JcHZxD2tJ7piefMgZ7PzBDTTuKQtX7WKKaNC9aR9m4kT",
  "key34": "2ZD7kLGoRbhwWGXsLufFZDcpPm717R4N6SVhSPsU1ckmbU4XsChzWBxfVMD9HkL3Sv9BsoVQZ1wQytZvgDLoRPSy"
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
