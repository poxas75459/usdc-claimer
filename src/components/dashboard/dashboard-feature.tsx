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
    "4vY4PSkYREsyubZhnwBtqQxA6kgM8WrUok85MKn5hfsCNhwjLyzxmEKoLHC3xccAKtT51izNTmSa3xA6kAe6uuiV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38DqCwK11vB7i2aREpRrTJtV6FQx5gZpuThWxhKsJv8QdZfy2dbyyXaRsBYLKebrysYbFDHkLZCPRc92Xcof2ooR",
  "key1": "3SVZH3Kkka7onpUNcbTxrFRMNz8t8JhQiN5vXE5dL2fts64nHtZhBwr7ibfjVC8nDnJwygH5zwWhDyjdRW92cGzE",
  "key2": "35oK7oTHZzgmDNoMg9UQeC1s1xPmrjNpjw5K3BYBeYVdqkUS3T44SjjZMmpp7rnjTrzrfdSePSS9SLBi6uKHRadu",
  "key3": "5iHkHddwGdmJW2qN8SJrAjmnhVmizkmMKi2Sa6DR2te4ELBEzemuy5RfZFaigvPUVe4Z18HpnMkyrq3r6sbYwTLC",
  "key4": "36qicZoEELXmSe6pv7P64ELkzGbsyjLe9d4Ww4THyaPhwSuvpGZrbRyfbNTrsZgSM5fyz8nuGvnPhr5BbiRf6JG",
  "key5": "X7vrRepLaDSsqr8a37grFMR252ZJKb8FVpRZTMB8C6TbhSEX3AmkjgMkEmC3MAmrfqNajAtr8SvuqZgLhzHzv4e",
  "key6": "2C9mNZ6cGXnL7KbKNadDoDLS6rVtc3zq1VS651tuZFtLUzawYHaaLzMjxeZ4RMLygvRrfnXdTUABi3Va34eSeWBo",
  "key7": "3G52kXdYefJB6nVKMKESrRiNvXpRQNfUTrXfmFYuts1CakzWMtWgSc9p7BU7kS1WAy7uovSotQEX9gcCcgzJYhfU",
  "key8": "kWQ1maYdtPfKZjo3dSf7XCrtb8Nmf4gBQq2PudpkHPYSJF4A96ht95oTmSGPAS7EKvrA2zg28ZfYsuThsgPBm8c",
  "key9": "2reHv4CZ4SAMt4bWeMkhEeMEqwV1h4H8oSqt8GAKPU3zdy5smdKHu7Spqm9d9VSExLGP8g6h22UPpmrXfWu98TD4",
  "key10": "2wotHW5DEbXnDjMpNefhZL4u3ofQeSUNZknC3H5fYyzVR3qhR3Q8EHhnRxj65YVmAQkWVGHaKje1a7k72SKdYrez",
  "key11": "4EPGnUja6TV5DegPjKrDnozZAuzCESjBtRT8Sgi3KYZHPzn851Z3JrWeMRZWnbhWjPwkBK5aasHcpYniWMD7zrxL",
  "key12": "3PUNGtU6RSaqcko8epFEXLrmzgdfUsweWchziFUndYts6pxMZBrq2zQNj1m3Z98gif2Fzsgumu3NAJpUTunrCcrG",
  "key13": "9MDQEYaw98cC2681v95sm2JCGg5jDC8gtxouzJDx5D1zQBL2x7mVGMfN1jt3aCyhKsQs72vhZmPrsuxG8EKXKyM",
  "key14": "bguaCsUtWNfjzgfQge2u2Kh1kvT9iVpHWjQojiSqhnvYqicMuyTiQZP6wEwaKKQyyK6HGW8KsHbij9quDaM1UoC",
  "key15": "3KpZg7GWKNeSoCLiaZ7YJ1DuGnV1L4w61FoUKZRseeXKCJTH9srape7c82gxdhwY7iLfJsMJazm3ZCy8nkrqaZo2",
  "key16": "5ByrLGLYHAgX5b2nynL3tsnk9UQVGYkPRyd7naLaJ4ZWKC24DstK4sVJCAnohw9PDvEdtTUZ72Vrh6y9HneQTBnB",
  "key17": "5iy1366xMAFidbNT83m1HP6MYji8pP3FPwrcoYipXyDYGfrjsY5xdKdf8Y78gqSNrTpzTscnpJ3nKLo2qTj78SA2",
  "key18": "2Y2TysmVbv273xNGVibCKWPLDF9iMxdX8Bqo3ZZQTCatKNuMDBGMc8fM9kpi6xxB63qPRQTbfXF8KTFi31ktXKtD",
  "key19": "Af9DvHDjjUPPEciVutUGM3oC77HTt7CWC2i5DyZY2NLspkXEe4jjCWreLvP4gyG3mAEX4Fs6adWRFCtWLeE6z8s",
  "key20": "2ejwkfE5g3JQN8hxHrTJifjGjub7u9gQgAbq227w8ZAkVL1k7JBY3Qy9QAwicRZk4Sk1vvJPFEMws1bqwYdsBBjY",
  "key21": "DchrRQKEP9DhKypK7JgQPUWUGd2LbtSMcbQuJe88SmuH1DWcWKkjoN3E9quJMExkWsp7AdttC3e1fc3nWJLZUMX",
  "key22": "2zHyJJNwmgvqeYexZjHp4qAVArUdaTtg98rfJN8YUHP3sN9MnpdnYqzifKAMHQhCdT454SEwRukXrLYwCWzpBNsk",
  "key23": "5iDZ4GKqhDgQ91fQf6XQx8fqHekYyL1k5fbtb6CdLqPjWPPdPQ8UXz92nR4raqVExLAF6ohnhsu7ki2fTmyxMJFZ",
  "key24": "3T3T4d33VDsMNEQKB5AVkvpxta2jrStbX6iAXawhB6QNTAJh5nxCFJGuMjBmY7TZoXG3xWMquDMPKXxthYnZNrXS",
  "key25": "2ss68PoWZKLcqBs6gTCTTxkWeXuU4LGpD3G1PaezUhccUPWBeXDXLsrdB86szvf7vbMBekLSd7qemrsQqwVG6Fu2",
  "key26": "HASvPvm4yRotwtJjCteetXG6J3kenaEPaE3YuR3woQjv3kkc71SBJ4C9V6iMkgntEm1cfYNSt46anBo2g86zAfb",
  "key27": "bShvSNgxfavL7ueUBViVqPTLoqyrnw5j5d4yHCfWC1D91PZQjW5ivLxmjbVKLNFFWaVJ6m6syJXxGT8sZeLh14f",
  "key28": "3abrL9QJgcM9CjNjQHDiNXYAMLj61WKFekBXakWq9A9FNScHQxUHMT1Fsep76CEVpEUSU9nXcSmt4kQvDqzVnF6S",
  "key29": "2RTgTu7frMcz6Z8rKMEdZQbjPGszN39xSAQYztotaSS2BFFhuWYXYCJkEcnQvAcSXmJTpzY6e6Ds4NVxMgqcLFWe",
  "key30": "3wBN5p1g1vCn5KinXY34que8fx43aQqMzp3iLs3ijRDbLnXtGk2pQDxZXvEHLdbqKSMWzsMawPYufoV6ucHydYTP",
  "key31": "5z7anVQ3CSVfZ4U35YYLJuuwLmzkRUJ2zTVC4iACiKFG5xixcBPy2Hc1sCRbf8H5Gpk1brmLb8rFJa1MGN5MkJR7",
  "key32": "3WmQUrD63MFGfam4bY3pyGGDy7eGzRuY2DswmjxqozotqUFoyPqSyVT2ecbww73FRz2KAXgjUtVszFa9EEdjyvS6",
  "key33": "4V7seQDnxXbULJVBvvWaER4hMHmoSq2qSYFsCZ2nDUNPD1GPGjQqUMYVB3dCD9vJhWUMotvMFUWq2JPRsAxBq5MQ",
  "key34": "j4qxvftU3cRwBiucbgPuWcJpaTKePqveDT6vsbJqpyTZzFpsLGX8ceSYygdScptLQD5REQ3u3BjjrcJVjiR3SPZ",
  "key35": "5CcgvpQCj5QHB9umghsbR3hVhMkkpXZnPf14EQkWNeEZdacztAfFayKRKfN79rrtxfrqASPTPFmQMJzWkdTcQDqz",
  "key36": "5RHaHGzMV4zVnicPdiUTjq4KAjSHLnaTBB6U32Keaa2DRvw8Yd1vywL7p5pXLREUrFBtsiefBSV7TovhrcxYaCRc",
  "key37": "5xymujNUGoeHbkm1zwvbQZdZJ3at4f3YryinixjKcRef1VLoV3Qi7UgHBnA79atiznsjhuGF7GTQM6zkZFb86Ca9",
  "key38": "52sLQQoibJbL5crLjismjFme96uTemRYFX4DMctk7DbDph3DaEtj8WxpSC2UbhdnRKJh6qnUhNFWVLm8mXSf3DGG",
  "key39": "3p9JPoZSSU5MZEFuxaHhRqFsd1DC4it7Qu7g6Tg5okaZdEQBHpQL8HCQ6hhpfXXaaauDEaZQTAQF43g3NYQSVSzF",
  "key40": "2PinbJYnsLJJX3yZAY24vFm4pRdZvrhzRXnbWjWqvKV6U8cupBdGx1ZRUCxmdWpCDsC6fstKpQRVbksY2vzTL5er",
  "key41": "4hsR696M1872vQCHaRkow63aLgKVTbSFMjmned15XEo4FRjE7P3HJttbNCBZn3FcMcpfTkEQe125hqrPmpF4UqKA",
  "key42": "2Vnvngkhk1svCkuM8WfpH9W9LUdesx49fWGHJgnEhUGgdZUcJA6MKZ5zeTPkKt1TwgfQz8Fset2Q6vMTyycogN7n",
  "key43": "5dugJTW34ETMY1BtZGjbJXoBwcx5K3UCEYvrZfy98ihxgpNf5VTdYPE2q6MW4Pk6zwCHHKW7NyuvyjGMjzL1fEBf",
  "key44": "4ahE5YRMrPeMkfrcAEtar6mHA7N6QYAC5YLX54ypUVuoWUwG8RTYiaxgBLXsxz7wWtcGkeKkXx24dWvEdyaCP3s2"
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
