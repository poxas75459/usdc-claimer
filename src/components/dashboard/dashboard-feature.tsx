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
    "26sur842is9weRdZXmTu23Z1MKb5GG7dyvfdj8y4xAoQp7LZLvgG22kuUK5UtL1rJfuUgd1XcNs8w8MzJzm6NTnH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eNhu3uexjSMVSfdf97gU5i9iJWpUPn3roSBx6guwsTqoBQjPPzkJ3dji5rUKKNLMxoPq5veypgQ7C6myedfoKNN",
  "key1": "bdPmVpmu5ekCFBiX96hwukXDNpE5k6XgqvE6xkWdDc9mRuD5JZpEgeahAYCPWnbj5a7631GFPKxRLWS1iw2gCaR",
  "key2": "2PuC3c8wXdbunrHneGiV3eBeoKv3We2wNgueqytC2DhLoBAuroi2qftR7YLJEDc23nHgDrvkuxh95d9W3fsFsFQk",
  "key3": "2MAgfKd9aYWFBtJFxTvZLvhvePErZcEoC8HYtWSeHEjhsUXAKkR5oV5fqTa7FFtNTdYJKWYW7fTjtZ45Z2PL8aii",
  "key4": "5PEddFiG14nCZifRtwmj78SWRQMjBzPD4cVMnNqqa4LYzWNeqgYt9SCuQw42mJ4bihSJev7Lss91xM8WZqHRhjyv",
  "key5": "BKPSyCSrUUZgGuE6z49rNkiSs7ntsh7cfKSi96KB37Cj6d6JiAvmBoe4pENnbU7ubMeMmWm82PMoNaoYmnaPbb9",
  "key6": "3AxtmxoDh33dYgn4YAmDive6xCcA2JTDZ31fxH4R51v2GsuP9hkkysQmCezfm4VmcTHchf2kSWqSx9opWMiPRCvw",
  "key7": "2hKfxcqcxLywM9rwMEZFBP3dYQLj8quYNn6efR4aoYKksf4SVTQ4FFkUaq5hTD1apWYgvhc4VfCcWktt1bFAAr3q",
  "key8": "GnvEMPqt51oM27ghoJHxsnQAtNA9968nu1ushEjSHgDSmBzaA46vVJQkUXHr5sWGMmu19oezrrPqkDXJ4oqnDgf",
  "key9": "4N4i4QFJ7GNfJLTaWUiMcTbJDqvQ5tQoGfEEdGKyb9E5Zj5X9uwLkVt8nXdfRV4by4mGZYiRzKWyX2QRSYjkzfF",
  "key10": "5sCVfYoN3TDGp2EKCBpnyRVGzyYuAEDeSNWGzYb9UXb7FjUkAa5oPwduxNfXwaqGT4aGc6C7rJ5ruZztP9BxXsLr",
  "key11": "HowY5W5KjYP3HFPNQAY4N1HarCm5ket3w8todV1DgAhudKSMC64uUpMxxxhiz7nHCgLzdbBTiDjAqNAj1tfihBo",
  "key12": "3FbEE2GxfHK2HvYyH4waBfTtgukjMZg8x3seDub7Sj9tnzHZWc5pdRPZZHR9qe2M6HkdaWnMER77A3F2VdK1i7Tz",
  "key13": "65Nn9nCF6egQXW79PXedfMp663JAk1ognMDrfMTNMrr4Rn7Uwe2pSD5wiKjadVC7PUdyrWofpAQMmYb1BKJXCxww",
  "key14": "2vXsvbMQYnym8hgihafqgCc5BhK6nRwMomv9W8RU8UASHUjgTJJDm7LZTgY3oMpx46bs4RjrSgeQDHHHbPSLsd4d",
  "key15": "3ntNEWbC4QWVuST1eeq6AnXrnbEDCbiLhm6M2mQdn4mDFgo1dnPK1hM1AZqUAHmGkdLstVrmi1VfD8mqdrnGTRc9",
  "key16": "454nXoFLSARV8QMZSKTR48CrcaoGKNr6LXdbHZ22d14C1ieR1W3N8uqAHcCKqphHAdxpJKxwsLuQrSP47GviLVGD",
  "key17": "cGdmSzQHwK9rLE1pdv9AeJczX4zQUQXyDMqf6eihxCc97NJUY5LNH6cDrVseJC8pahLgbEN6FTbTQqsQJRyKuUq",
  "key18": "dLuF7J2JgcYYMssKWA2LxshfSiLQ17XmMmFp5cmdv5BTW672BaFqTtKR1gML8QURUDthiMaUmKMASGaAezuzGLY",
  "key19": "EGWW4kseQPFGB5avCu6LcFnpjoLA4apC9uZoCLKjftoeNbrMkuGHyyB5MixRFZFVQoKsE7PcniLk9swKrDcCyQc",
  "key20": "2kjukEhjwntB2xpHa5JfEXMcUiP4VXD5nux5XjLWsXzPoEAYau1teu6mEhQ3fSgUdxYU3We8w15mF135QZ3R2kpQ",
  "key21": "32CZHtcAVSKMAFYwEJvsLfY2id1QjovbASrpLFT8PfdYXfJVC7SEPnfC119CVsneVQ9h8yFX5psE3VEubqL946jf",
  "key22": "4n3P9g41fModYj4FeR12E7TUhqqK53mxojEBdHqeQ8kSfXZ9D5UpTMD4ywYijHyLNxXmJ332ZKK26UQNGTVzWkjR",
  "key23": "3Qeb1zwy8kmLSi73QBPA6g2xxCy9xTVpkEZsGUhLEBJXhmazb33XcbpnGJkyRd8CynLTs5LFvPQResJZQZRLARFd",
  "key24": "2d6NRUt4WkK9bAShXtv1knA366ibZ2a35Xo7e1KyCedZkvUeERMnHeYLxh3NU5CLpuerpznR6jdYj29XsDkGUXoK",
  "key25": "3zmgY8xRfCVaeuBHnkSTEdaFF6v5yo6mW92rDSNQYrJwVgtf3A4dr7P3uXyeeZVx1kpQNAXVrgVnboa982ccYDCR",
  "key26": "k53sHFL96Sk5orz1VtCLjDRWjiitK1SwkxbMFg2c7iRMSa6EbDvf5QpQL9ULyPoo4DBL9N26bqAorJZBTBFrNB7",
  "key27": "D2ghTec1mafkHYXattPjXmcxDaCD9gMaxvPTTQ3RCNDv6XQbrgMxM6rmRV6TDwfkW8y91bBsjx5r7LbwzD2ZTag",
  "key28": "4d5C2RwcvZSCgRY3LBm59YhxHXuXyqE6B79Mj9ZyRS52FADFvDV3BnVD3LxzxJr6R9tkqY9sLekriCmaEtBKsdQ1",
  "key29": "3EAwDgfqxDPnkN77rtZksVTcv5QJrrYCTKLBM6VmTZMF1mxqwXoiNp6oreFc1DsFJfyj6xsTGwuVwoyy7DcypjgB",
  "key30": "2fY5YuU5f1ruJwZV1XEwJZsX43B2nriVjABSTFRSHwwGejbgUSM5RZra9Vj3tpFVx5xxPtDXeZKdyU6jVWxBG3aK",
  "key31": "5MzQPyKvPL6HqjbaLnLZsvucsA7vWkFakoZnSDxnYov56i1oSwtu3DeSm8a8mqRnWBHEAv2qtvFefVhYtyegg3FZ",
  "key32": "3GJfKasGBvAazWdqHKbxEDnXjR1EAtwMqb8rrQQUKM5Tkge9p6X2MYiCiz8HsLYrGFaS2ERvoYFcbmeESSgEhy1u",
  "key33": "5yCSWCD9sHF5pzjqh3LwoZk1i3RHy4ozFPY8bBnmYXss6F98LRVHhg2PgDfzMJRzsy5nA35zEzbAmBjCzews94tC",
  "key34": "3xfThc6gMnPTF74HV7b3HWukf2kctCTNSpaWTbFRhV9neq6UTeQAiGjdPdwEzJRGQQ91TCQgkaWM8RBt93h2Rx1G",
  "key35": "5UCBH6QDWizqbhvscAa3uKwNxiZe9m2Eu4vav7yxvfXjvNr37B6ZHmPBbEZyvDJKDAXek5JyiFrHvYbXaaPtjccu",
  "key36": "2SbwRebBrFnwDJvqSwu86UbUCZM59AQHE3knwNkrBWape7Nf5C9Hu7fnKyB2E198XeT2ZmoKd2TxEsY2jLiUrqHY",
  "key37": "8gWQYPdADRgGmiwyJ9pFtdat3BGQfvkGc5a18Kw5zRY8oBYY35WUXvwM9Do9Bk9g2SNtHvmYMU2e7UzZ8KURHG3"
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
