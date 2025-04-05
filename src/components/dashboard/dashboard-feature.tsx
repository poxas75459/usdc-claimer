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
    "4iiHnQ6E255zMzrD5LzruKxHDD6ffNzpw5jqQ6rMHjKSFBunocjdnLP8Puak4LKBgWkxXLogwiABcHa6j48QWrdR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uTTbvvFz2Ci6juGdExgR8hsDRc7znpbu3MwnAZWBCFevFnCcMjXBrRHGW2Q8wDCx6wN4wzr9intAPk4Uf1zbfM6",
  "key1": "3akZyqwSyTxF7PqQNB8QjRFwXHFa7cYt72mmaKi2ykiE5FJEf2aJVFdCFhrdWYmW1ih2okzkZeYCKeo9xFA9qBGq",
  "key2": "23oMGS92P5hqEc9XND2fdfG9z5hKvRCAqGPLghcREk12ReKByfB9co5ZXXJHzuR86JpKJs3H1ByuFgWJUEJzm6rk",
  "key3": "4L3PmZNd1hBdTbKVGQttferAH7MLhbJ6jH7TFKUXGwQt4aAfrR6rYJJ79KQJtdsYSeP5FH7x9MvkKCY4n53dDCyK",
  "key4": "3EGE2NMB4LTNiime7sZVdapJx29BeGebcitgpwq25c4K2um4iX1UgVanCArTwSMv3DbJFXzGLyA6MiAoQsByPso7",
  "key5": "3wAcFuFEXeMUF5Ns1szrs8p5wwKtJqea67KdoY9vNJ3kaeWfqCyKBwbGaK1An914nXX2sUitJa3qwRhmfPbzuLei",
  "key6": "4UaVBD3QmLq96GaBBirTk9LgAUQVBu33Q3KDEHxehqCDVxAxa9xf5HS7tBeCmT9uxskDUuHbJHrgomDtti2Co65w",
  "key7": "2NNVyqcSKkByYJL8VHf69gz28urgZQuQdoUwu8phcf4FUkxPMgGqnhprESb1uhNCNgTzufZoc4npJD9URmEziDS",
  "key8": "36osnB71i13xjbL6c6U5xNr5nEo3wesBwZ5tX19dB1d9R6Vu2X8pxJRYCemQR6byzhPDvx8Vor5Fam4SstykdXGk",
  "key9": "4NcSCFHkW3bsZmoqMhz9EaMZ9E5xg83u7rGwNZQcptsLEJxJvw8gK1ALk3PB9WD6V7Kghg53aomgUqRCr23sYzwB",
  "key10": "4sC4jYhHXBmTQ9ff39rWgz5Y8NLLhoYDCw9XTQrFed7zmiiWXB4eEEfx4ybipF7ycc74T7wR7iXbat6SZqCbZSm2",
  "key11": "2orAPLddPJgXu2duRm5E7hJ3gkz2VnLRp4tcWq1oMqndgUEGPNkSA7n9oZRcbtDQAunqpXE6LiqQoN7C5TXbd2jZ",
  "key12": "LU6YXr6Zs4FYLSiWiATajZudRCXFh1Bo9jConGAfHrxiQaDz5oJbc9NSwdejJV9L3XBpLnuHssjUu7XwGBxSiJe",
  "key13": "5xPf2GzEtqHRt4AvQhkKnLk2WNoccefd9dUK6WZeBdLwDxJTLpArCZavPaBb6Kjtwf44719iRnXYpdENFRu2gpcZ",
  "key14": "2xjs5ZPBLoszPaGEYCCD3PsM8JAMjvUaEUGKneEJWxDy4jkBGwtWZhmhtbwCn5KMvTTLdCYK7a8771fFeRHgkQNb",
  "key15": "5NvJZ8FYSnR9bg83xdgfxST2Fm2o4J3j3viWaSnKHfcD5rPbp4eHfYP9vPBYPJ7LkF7vfJfuhLvCDNXBevPABauQ",
  "key16": "5QuGtKrWL7H1dczJKDQofzFWukM6qrPGMEeFGJctXeJhhUxgmYHNYn3QdLxLdSzZCpUhwFDEbpFjCTKdPZcoKnD2",
  "key17": "23dF2mgCZGPA5fE6aRTvndvoQFCRULCmMjrSLWgufzHeXGL6hBmTkpXU6YHzdhNXd5gsHZvNJ8XqsYrTpDbcXcEk",
  "key18": "5p66hB6Wx5m4FMi52EB789Qq4SgtzrSxZuPkn7M9y7gMrguKsrf7KsKLsW949q8AFNAXebPKpXY8jGAgtLVxX62i",
  "key19": "nkxaiBnmNu6awHkLGs4rmouDfgrNRNV8nYhjGq46w4UwSP5oW1i38b7RT6oqaAwZS8SiZnfVGoGvwEwmqPdMDjd",
  "key20": "5aHcYEx2EDTVWueydGaLhwwHxzmzvxytkHPspFbQttwuLjok259NCoTy1WuJS23FeBr9tB7MPNN4Zd3GaA3LP5A8",
  "key21": "WPa8bthQLyhR5wVc48xSy3WxixxqgfqAfP1F4bs2yqCpMU1nsacUKnfA5VMFKGGRFWSmYbpmFgf45ZAZzsNzF4A",
  "key22": "4PsjrvMoQsSutwBBx4XdL35Q59KxDoZHdipuQoFzHi3LPQ4vwBAvKLcPdeKx9jAY3At2WrFiA1kekHXShmJSJwYp",
  "key23": "cdAxzwdH9DXViZDSrb9Gx3XuRaj4XLz2AVowNeCxrkhYTDXVh1oeuDLBjgyA2qqJngA6Na6rBjN6jfsU3BQiyZq",
  "key24": "2yrpDTrcKZeLzvJanyt6dvVGxzBGNnqJQEozuHAkEsHM2YEc9236ePsR3xmR66q6eKikpwd6SvNPt2hfiqCDG5z5",
  "key25": "3kJKgJNM5NRnNokKvFi7VAvggo4FCLkYvNrpdJ26QNz8FDpDJL1LGoYPgGygbDsjzWJjPKwK9nD51RLXGYYHyZC3",
  "key26": "UfjGqaejdexuUBAXmQpNwdYmFQ2L9zRLSHNwcDTpUF7frj88aiSygWcr4AcT46hRdEXZrp9jBA61GYCSTvwuiUX",
  "key27": "36GRf5d8Y8ysBthTucpX7cx2TbTQKe9AjxSRUYhwymhffZiaknshRGKHuNRyku5Sc1VAK11BPN1qLU53YP5nhXZr",
  "key28": "5ZRke4wTNDUcyTmnV8YkqXbd3nGyAPZTaRjmDzJZ85E5L1jB5DE2AC15FGMVaJ5kZTwa4paWMgMdCTFQg6xfRoU7",
  "key29": "2rm17Hikqn1ZpdmYJNCxqd7rF2KRwJZreLedPSyjCKpNzXAN36zezKhygAJg2Ds5cZSeuJvRo36hg99Sv7tMsiDc",
  "key30": "oHwy5Qf4LEmCc2PMLL7maBeaqCotr6iTpGyQpXNqxcKNtipMAzRDPgfFqJNfqfd9mvcKDESVLjxMC8WYcRwoD7p",
  "key31": "2qaLujSvuaDGQnDEG7gcoYDgiJiTvg2XNzfBrYKEuNXCTKhA9NKXd7sqAEXb7qJESoUVXvRn4Synf9hT7ZAhKqic",
  "key32": "5jacFDuTQjeTKq7vWhadtzSypDFu4679zgpNYJhrMxnuSckzMatKeBFkZdiLTSywLHNg7p7MXXLY4NyjkQVj5cLa",
  "key33": "6Xup85hA5tFpAxyXE555ZWCnRhmAXzH4sB4jyYFTagvBwxRv5Nrht6UVSUxpPiKh3R6bjrKSTu28HHnJctFY3eA",
  "key34": "2BQypjx1HJw3EX4jqStrFQNNhQZnrtjNRy7bTuyBaAtM4AJJhZKt3JghSBUzvYSE1AuUKzJGZ2VMXXueJBjWyyfL",
  "key35": "4ujNrF5A51pChfcLcbS5fEbQBEocJaja6VN52ZNqSr7gJUpqBVkmSxrgqVT14hg3jc393gSRQywv3Qsmz9Hve1um",
  "key36": "2cFc2KWWRPjGfEuoyXjDZNKmpY6zWh5pKvogbFeD1cGSnKRFNjvt8w8om9TMS4KHDYfYXESToeUm4BPYxK6Rr6fz",
  "key37": "61LGocXZxaydHXtmt5bGGfoEAS3jqsjjJpvSA7N1v9ACPBNuxkePRPRavYT1mGWfpWfHUyiuEcpTioW6Y9uBV32L",
  "key38": "4MqkeU8JLF8aAsvuwRYgGm3yrFXL7nTNP8yxLNRqZbHWBJHjrkkoSz5VQz4J4zKBhvFVXJ1j2LFeDTVVMUTF4L5o",
  "key39": "51eLfSGQWVfgTg8k7YgEPwuejBLLdxzYPreWrRXGvxEXWQGhtDiQYd3e4P3E4ywZbi97xVKCrYZ2TK8Y1tQTTwB1",
  "key40": "5Py6FU5nWeeTjvwc2eBtqbNe4f6xJyh4Tf3RJFd4FzF78KjkXNZu1HUeMDuFLdqjZFfkHMHNRHFM1dHa4WdG6sau",
  "key41": "rxwaMCWMwEnDhXgY7EevRQ6E6WfJxgz2UydC1eT89ppHTUFd9qQnx5xcpFhara4JkbiGZ4LmrfP4Gb2veByhve9",
  "key42": "3nHAtkchn9sY7AV4BXzUYqN21FxCef7ANpitFQyvxS4QB3HXpgMp7KH6jxEsyG4ByHKa6uUSHsmaEV2T6vLqBJme",
  "key43": "2u7tBNFiB17a76rZH228svQhdf3KamUChiXyvDcun7LC4U5G3eDgukEf1Dz1wzqWbWdwkfSfWNHxyKkg19yJ5a2U",
  "key44": "2yVojbPkVcYKRgNqmKSYG2DqhcsDKkqoEDPvkkQ79kLCCm11wTdyzmUGZJ7FZ4UcUNcf3FwKi47PLwEbWgZjthJ7",
  "key45": "48uavTth2TqffbxyTiUBKVo3QECSy62QDani1GNT83wxpsyLwohxQkWrdfoYs8MQacahZoeseRFC11V1Rtn2JXC2",
  "key46": "sXM6A4j4LMv3YgzRFbrEhPNf8XERQ9uBFjVbz4vx5eqip6mf2GTpZ3kyFUXgNRvrbaQa3Ntnsiq8wDL5ftxqzXH"
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
