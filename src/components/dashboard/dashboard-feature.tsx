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
    "pDyMx6cQ9sTc3ShFb6W24xX77HnyocJPmVGP6oPUW2GDktjMJ4zjTbdFPwowef5ZDM15xBZ2FCq6aiN2BjWv1nM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SJ7oZg7KmYQFJ9mssrsJvuA9psaUQvLAwdPa6pbr7NNDwKwvZZ9uFtaPJRjpddhXV5TbMDw7EK3mj6tC8byk64P",
  "key1": "4wHrQP5ZtN4SsN9CUebKxV1jTbsojJMvXPnzQgsCMA9ESpVRnQVG3kKk4Q2TPdy9qhgsqdkEhcoDWDBUaCt4xTGj",
  "key2": "2mnQKpWbicehrxvkoQSmz3kVrpGhKf99nzXUBjFarxGuMWn1uNfSodGebp7bgJZdL8VDouuPzUvioYcUqPr6zLyB",
  "key3": "3N4ej7qTDxw6K1CkQjX9iRiTFsXEvjJC7S8Vh6sec629wA6EAYu1zDs6PfKPiYZUmWPfDXnK6d6XzH3CjqoqCey6",
  "key4": "38HyNmRxrgLiFiCe1ZQbGhxAUdHqhZtktY3p1pjZrY9FXNNQCcee4GGGoz3j9oHCK9Gy9JNfXZyhvBv7JMZPGwbn",
  "key5": "9CXFa7Be7X6jSEKW1eiu8oxdtzL2p3yD6yHnfSCKephQuEDk7Dr4FFSNXHJKgtXBZ4Y2ijN677uHUH5f4NBcTLd",
  "key6": "4ZpQ5tif3JkN36ve1UWAYL9ZMRZWdWCYKLUywygV1ABpZkrxcYFUzwHkoZNsGpxgoZafPftZpjLyhsZE2jnLY6Xs",
  "key7": "5ZHcsyQWLHGwdox2mwTdAdLYPaQV4MwD9V8E5abDMz7bWmfrJEw9nK7v6X3mubFhdLzWY8jHmfctdxKhXxzvjYMB",
  "key8": "3bT9iADEod71UKsQNgMByvGLez2JDCbhnUwK6gkTxnremVes12YcY6F9bxtBcjfZxJVXd1Fr1QgkAPF6Xz6C4TSJ",
  "key9": "43eDpzqD3PUHHrTLgx2wDLTh7w3FWPJo83JEZa7ZDkmQ4Kbp3uns73idLJKkHfdB6EU7ukRFdmWxphiXydnAL3W6",
  "key10": "65QsctSeFcjGAKy9E1Rq85M7MBLXRJRwNiNJAKyAMYDaKiYvxNoycewByevoZJPuLoHMjFQ7mWCxF38JKohDK2PM",
  "key11": "Cv6FtURb41qjy5eYSdC9McBt9xaey8xYhfLpxTgDqEMornj3o36RW8ksEhKryeJEVcBrYxHue7CcEu3mDRo789B",
  "key12": "3J6zL3BwQfo9HBQ3V28BoTb8FHRUtdpka5YWJs86dynSdtRYkzJhiiMy7ZbuDB35JFDePqrHbnKopo98cJ5CFN1s",
  "key13": "4nDzADjFsZ2RhHFZXG9SW4Rh9ZXest3AzbrNoLBj8mB4xWuC8K5oRYPT3ZCShRhQ6Yx1AVa2TKVF1uznwk4yhfP",
  "key14": "UDq8QPtbe9CFvuNMGn2Qb3EyapiJnCuqFeUwokGsy3E5yhBtKGGrCjgkpLH9WqySQ94SoWfD8rj7L2LpVaG5AdV",
  "key15": "9HT1Cch6QWJ7aUEGRe2jhddHFvgx7xRMjJBJJeLDpxYjYWmZGBBCmwQusUkrg1vKiCXzmZTZ7DpvL7mgqzcBEcH",
  "key16": "2E22txiEwzcVc7KPwGjWmaR7toPCyNhsfe5bwVmPf2VsmvZQdd4sXbrLhDZfHjkuoBf2FCVeXH6cBCooQx2ZWg1",
  "key17": "3v5HTwSpFJJvvWtPUMEHbeYzAxbkM26F3q9vrvaaCQXXdRUgYKmeDpXoqL99ayhZvhsceVjg4WeceXMbUgLshBMg",
  "key18": "4GXC9JD7oooN6qwCtWTzagzUoETJEvRBPwTd8MhcUevxqEGd7PbkLj6RuwPf7bwBnBjF9wiy3ch9Q3JeTaPm8Thc",
  "key19": "2KC96eDHfN4pCtDNaMKNEF7pvTv92onyP5P78XyWn6LuCoK2PcW767Dep2D4GpcbEL8iGE8YivUtuovUWDqmqshp",
  "key20": "3WCJV1ksUp7j1PMWuMT5DyNDA3yvKwycjhxRneVZARDfyGpJYpwpFmep9qiVGdfHDrTvS3f7buM5YWi59tiEvq6E",
  "key21": "3xxW4h1ZscfFuTLwbHBHW99ycpuCS2mugELDbaaJ6JDQ8UeBX1PEwGSszBMNWpZ37HnfRi2EucUJ2PQXm1YoRTtg",
  "key22": "4kq7NVCurYLqkkNAw7eenqFAg5FTJnvuhnWSt2kgJ3t9q12TajZhwkvYimfCxf1rAUejCVYrrkQQH3rmQ7AsRTEQ",
  "key23": "DHJCaJo8S9r5sBsHqbZn3dQrTRZLsYUqvovaaP6urs2N4V2XeQMyhnQAMEfWakAayyHePe9fhsrFULxzE4kLHav",
  "key24": "47HotRCyM22wFzXeSpEjt6VvUUyUFVTDb7Qsfsv64jA7vNB9e2KAM5F2ukeQJ5G2ZqSAZwtyy7uZhuvJVLW7798H",
  "key25": "LAK1VKwrWgNB5xsufRuxfwuCd6UbYH1yuZpLm5rGmVmoqm7ZtwikzXGoWAUJYHUVRem93CYTndHxotKHL2qPsZx",
  "key26": "4PkNraXf1XXR9h2kDLneXn4kpFRPexFD4hv6Dw53Tuik3Ku9PHJpHPGMWcyM3BCR8Enfs1pmez5Nz7NkNUTGwHcU",
  "key27": "M7LBdRXMRhTCAkB1JrLkDpSkxAtyxuwN3HSkeU7wpVikHfbLfpT7TtqsVqEsMcZG7qA1rSoBNQsizoY3sk3EvHg",
  "key28": "3xTtWMn9YYKLe5LvgcMUj21eMTjYgRUF6fK95VsCd1XM9cWzuLXricVVznPMyZ79Wv7mM2bFtpCsLZfLbZZvXPw5",
  "key29": "387EomQCGgrLASTuDYFiYQkfocwJHxyY15HuDEuALtANr2ty9iDQ2nPWvoiA5XoUrLwi8HPqZLbStMs7Ea298AGL",
  "key30": "5Hftc43CgRJWespR3WB21fF9rUdghqQ2MWF6pzzJdJUHhjvJvB1V2b9JhjDWNaohXGXM4BJqGKB6UFaxVwcSNK7q",
  "key31": "564oRCAGsEfooEVr186wbqSD5dHdjK4oQTX7NkdnwDbDjwz4MxjvBtdjsNbQZvBhFjG5XCREJqkgnfH5FsWBHbdg",
  "key32": "2AWADYC5WQ8WSwZgcveQnyGfeByp1jZAaEZ9CqJNZMoAssNu3FRXkUCeo4kwC6UiDtX3VqnEU3JYPqT8ChVyeTJX",
  "key33": "ygm6YoRGb5oMv8tQQkDDUsFNqYwUd5G9N9NTaMmVVTo6EGuPVinDRsgwoVfb584GyjqnBDivkKU7hW32fwDo1tt",
  "key34": "5bA6jc5JMHXosB752Ec7d6QQMShDh8TkU8emQsHuAWU7EKaxUcJTp8fYVPQLWQ4U9eAaMxZMueVRgztrsp9dQM3f",
  "key35": "5yGv8dqUNGgwQm9FG7UGoVKESke5dhWMauXqVgNdABtK3uEFxGoTSKmegnByKVSohHEnqXooof9ztfX8fv2cTdkS",
  "key36": "2Jt9odW9eLi3vGhdfeJ3tSRw1r97JaDfCoAJwjQ1nxWRtdVEftVDJwGHNcYp12gTSUK7rxCMxWhc7HFJnyPbzxUe",
  "key37": "5MZDQ1zZoqCvQ9Pa3bEAT9P6ZfjKu9tuhKJd45Lt8q4Ai3wXbGEr9Z9psZfHkbcygXbwCFZ1f88rLiKbRxCRpzh9",
  "key38": "3S618Go9VVnhvYS55w42Smq94QJPLEBdGwYDhuZMvxQUDJXSaFN96yE9yzTVPxjAYNxMknsAYZUMB8hFqvQ5cz1o",
  "key39": "3SyBFGAq9U9johFQXrMc2u4J4jhJkj4HxK6YLfQRopUWEjby2L17gvGSrqnBGoAA3BZtCDgeAbidpL78zQEUo8MX",
  "key40": "Jk7LXYrzFTPDuk4aTA5eFxwJUpNffgZHUyGGyKugbXcuSPqfF3UgmDTzjAwX5yzXSLqo8v3Ma9GN96xp3nyRdkj",
  "key41": "3P9KMqcT2hR1X1n2u83kEqZJ4kiS2gasyYNzxbK9MeAhtRq7qTuEmYWus3BNRogTFAtBzYvxZTx7zvJMdbBHktCy",
  "key42": "45RaU8upa7hqZBwEGedExJKVR6sQ8yCRzjs1e8L9T2P3knZeVEMKAgs3vekRt4XtBHm3bcZbRpCbhbucXzzE5qEw",
  "key43": "59KJ2CPbiecN1q6CiAPnfZA9yD1syLdkxc9bHJJWpUXVPafTTY8j57BEKwEvPfsLZ9iZpK3cTKA7a4FqUJEuYDo7",
  "key44": "23e5ydCg7EVWRc4jmRDpD1HNcXuURqPDcRtV46H4wpnr1hnPzThhwC3VfjwNqAKntYWn6L2y15W3SvdBqqiQVRXt",
  "key45": "5TxU7gP7hQ48foUd34w1nCuh6T5XHQLKPcdvgTAjL7am9og8KKNPxM6uoj5hKh4EHGsMa5nzR6Mx4R1zPtiWSXD7",
  "key46": "2pVDCoV8A2rDpSi5eNpeKkuXm82pVb8DAbEN7U15oJ9gFy6oY4hEaZnuMiQQD6ya9KAmTzzPLSCXfQRcF3MuQfFk",
  "key47": "2MDig4ronnGYUjWnMetH6q2xzLqREjqetmnZyMxniUb534z5FtmmW3BoFe3nRwnwJecGLQZ2EeE4u5c91iU6a9Kk",
  "key48": "5nLVEuAYbHN6tZyCBVDFsxNVbxgGHt1XiCydLKxLwM2JGbTQc6AQf8qM9FJNSKQJACjpsABpCGYYoTeVfdMvzhXW"
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
