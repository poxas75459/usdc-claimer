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
    "3yh1Kyxw5PT33wGVbxKM9AoSkB5DGS8yrK6tfg39mX5u5MqLXxpHYdbw3WXsgFaAWrCnYDTRYm5yuuaAHCxQffWT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YZhf7EGsknRN7eGJZ7BwqtNw689fR7HqUv9DX5qHrpEswvveXecMrC9fm75WCGkDAPZQcybp2J9qtfLnVVDpLVh",
  "key1": "sBjo1gWmyhDA4Ax8HRj3UPmWD652cNrgi7ymAqj3NT4wMNHsueLcV1CyXNLM1mHmSAPbBA5uHCJvjC4vJXdx2JS",
  "key2": "4BuPGrPmL7EWv9HEDX423B4btLf8P5xmHBc2wgvvCSH8Z9FWihWntDdU6HVgTEbsDpnkCGtynX4x472erd9i3zJa",
  "key3": "2GfSN2yqEgpp3m9PmMhtzHRSv7VZXx3ws3MNPjHViZCsTDPMQ8SaYwMeNDaJBmKCbn7ss31WsjXyuqKesFAPr9gW",
  "key4": "5P8HgV2MM8vhju3C48nBXLMBTvu98jkBNZbgk4VvvBHQBYuqgAqQJtjq2tbAVk6H6kWfyD9EuFEsmQmdt73QaZCE",
  "key5": "3dNPzyGdmVEYr89rVxaqeMvGFmQUwF331Rt2ednTzBJf6WyWTfMSzh12Sqq6qnWWxhbpCkEJx5QryEyjCZco6176",
  "key6": "sXpxLzrWp78hfMeaoRdDY2PHwoehMiA3X9wFVg9HrTXugNPBsKSV9JDYvBauAR8aeCyZvdLbN6iGNdc6BUVR8kr",
  "key7": "2bxWs8fJAMGZ9bZYy2qnpur546js8yazSoSu5vcYU15pWDtiHQ539apN7PnY3XpTqZqxPgj5VanhVa97HUWH9a3W",
  "key8": "3264X57so1H4zpLf1hEzVTh6Gm19a7196Qd616ifJzXvhBASSw5NVcAK75bCX796joMLpqFGZr7F6YRuNqHfVQRH",
  "key9": "4aMSVLDoP2kdCBJjsUgSozFPvS5MsXpm1NVJqNQgJrQhZKgmPgjhHsNMntXT5GoyVv9peJdRW4vZgmgsULcdr83m",
  "key10": "2dvV3zRxkXB55DYGrbh68ThrK9UpRn5rGYq1m74bd3X2FRxqkktfLRXFeW2V96QpAGuNn2RiLCdcxfDtY9wYZuAo",
  "key11": "2tzhhiCTanQioYTU3fnKThxbSbFPsHuwWZKY1MJYkQgw7LyhP5dBo2afeYRr2DcZLmszujx49JkK7268etPk38TA",
  "key12": "3yiLEvSciCTTzVnTs15dwF5Jf42VuAc3qjbym8zdnNkiLQaLndgj2keY8bFSmDQKSjCWAVqy6UUnYrBUJ6HPDod3",
  "key13": "5cxVxW4XED1mMx7AMe3L8xXMxQbZH58cvfGSCAwRiCZwYiN38Q2tar4YQcau1X4zp8giEuoELKNE2st9NbatyKjc",
  "key14": "3JtEZqKUf9R2bFXgdRfwriFdnvojrFkV54ji2msbACufnhNtfToaRfR1qcJxdkqaeJs471dLbaFtgB2qxTWEysF7",
  "key15": "3BW9XP2hEYFu4itwYDRDTPbDPeSJzDhrRYLmJ6nbJspUAaYvwsCdr8wgPgzHfxxfeAg8R8zsxmWpSMv1EF7rmjr9",
  "key16": "2JuSggyTBymnwjcaELy1eQDhWW2mhv5jaoKsmuM9YrqDPgcZh3ukCqkvgtqeXNHTk7crmKnFtpfwmBEiSiMEka9C",
  "key17": "5sruBf6hmy5VpQ9JhwNTdV5RdhLrYXvPrPbYimQPFMJsEcP68GycRjbq36Am6BDK1Ms8Q4oJXLVC8MRC9R5xSseu",
  "key18": "pu8Bp8D3cVuW7gFY93mGzd1Ka3CzvakLPfGpXdJ96KbNncEL8PVBY5RHab9pjnjxtg7uv6RkMAwaTFWo59mcnTS",
  "key19": "4sZAk8GCLbzu9fPnnoLwjvDHEYpas3TiS875QC3kgU53uLEdRwCbXBAFgPJbjb5tZ9dpY8RXjSqrzwf3p72vzMs2",
  "key20": "VQoQUX3o1syXdbL6CM5CB5aJFzZtcA7rf4ybFAQDy8bigcAwJ9q9WfYgakFgzVSvMPabwaQfHtMrWd9iD6DaeVe",
  "key21": "2yRUMBTf8yYn6NhZWDx7tBe7h6J17RbzdRStw2AhHam5R3TnzRbTqsTuJ5monT4qgp4KT2Z6QwxtxDQAZ5kXehgR",
  "key22": "eqMSDQX1uUdjVSqtKjkguYFzDnkxBR65KDrSa5DqRyPr2f8reKs7ELuqhxUhQDS1CJ3aR2vaSrmg6ZQqcwuum51",
  "key23": "5xNcyyPsycNVy5bjHybxTdFGudEgUDYMPRQAceeo8LNVaaS89h1qTBQEHowtCDkZtMhe5JZVpFLrPyNZtuh7aASZ",
  "key24": "4rsV6kx6fvFfKf1d9TcHZS4RxNaCxKPAkFaLwDVzr5JeoDpk3cZX1paJzK8YybNVRirCGoVtCw4NgeCAzgNK1XiD",
  "key25": "2CkvxzFgFfg1p2H6b77pKonjtGTo3afhSKQRrvoJUFxWmFF75tPMAYYhR4dg7UGCyo6XfKxPqVJRQV98FGkFnPPc",
  "key26": "5u8BWXeqVxQ6BwDJh63W3D8YynP6NDEtcHsWzhF3xBQLQrSoT4Cw1dGbU7Quo4hHzQpqGTsapUL5pPfcGjAHb6qY",
  "key27": "2YY5eBVkLKwcoQvmDxvw9xCBKrkdkNjDnZNdNwUS7QCNfuE9cCAcmaFmQy3MpAaTNbQATiLyCeKdD2Emjn7KNvPp",
  "key28": "3HKJqDbESAWxPb65MWeVYcWdqWV3BiEn1qPXVJAFGzzPWeVwsxrW5vpuoYqkx24oqp8iV3YDTT8bMqUHpTrWT17J",
  "key29": "5nYYnaUTMmUhb9SRnqxJiJPfzaQtRtL85WdSMQrPjSJErxjxawwx4QnfRR4mfDMBP8g2e1QZGawdYBXkx6mcwxsh",
  "key30": "4f6uAurYWU7szHfmsz2y6XgRMHhSCEk765Uor7py6wLMsucN82No9Yjis9erHicVGoD3Zg5B2T6se5f1rjDsjUTz",
  "key31": "4sovHPD2ggwaUyyCFBoVWpZootpZ6AQ5Mopd5L5XxnvjVwJRmwNAxtyGPib7UL5Va2BXpibYdZ7YSiKBdLLCX8Eq",
  "key32": "33VnozX4r2FMju6z6A511t7qC9KFm3CU1MtmACTqP52Z5TnwLfHgrzEE7hVt9GujcSspFYJv1zi7V4wSyENhY67w",
  "key33": "3hXrwT3F5q8FZ7ss8zAy4NhUnMd4Q6mLtM7oyMfradcCZL111SyqRkrapyoqWb9vR7ZNhzqg33qVDvQzhdJb95qY",
  "key34": "2sgVLxpJi6MdD61h6SWYLiBv73wKCS81mrnZrvnGjXNeVxa7ukDJfY9ttBsAk4K2xVkc8Bn9zdwAUCMB3YkTofqW",
  "key35": "3mSicr6wkbc6wZ5UZAqXMZgNFDaj5CrG1D5Vmmc1f6XaTgoAbgzCu6obmNLUVFtmjybUGwaHYjhVmhQhqFbP7xEE",
  "key36": "2nLDeXF3dahTDk1L5gxLaprYnC3YFGZgqhqMaG3PyNUT19pTcmPP7LhXzgriU9fHZmx7XjymypoqJLCSGV8XKqBi",
  "key37": "2J1E2y6FGAroHGwne8ns2toke4Eb4ntk8cZsHJR3PqZkSEZfZapLubCf2QWzYuu3q1L4pUuwqiwELfaf97irH6na",
  "key38": "FcMkpD9mJ4JvFUaR3cBYsZLeELo7Gdf2JVjGN8C3Hh4FbVWtDyY1ACqrDdSa9v5yD5mC5P8Ctgpf5bcJPgkCzop"
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
