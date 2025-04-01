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
    "2X6YXkEQuYJsoFM9tveDhg6YuMFMTDwURtc58oXmYewvcWLKhBEMQcr9oo5EuoVYzt3HeksGkyuYa6Tdm149Q66R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YcNPcT6vvzTfxsAKeQzqcHt7jibeuH1qzDFekcbvzbYLthHcDYi8M9muxm9GT6hY15kLuNKUzPwPCDn2oPLz1m4",
  "key1": "5fixsb1E5vvdSaqYNGx7GWJjvjdxg9XR8ZR3Ni1i8DaMx8zgBteD35Ea3G6d3i3oGJ3uh9MvLPYvPaeUXa8Gr5jx",
  "key2": "4KSSroBJhBnRW3zCrjKMsdEjhfyVT8zMSLXfDMeuafEJnfmvTR2D89TqYhfx9yR6PtvJevBDmEStrESAdbXvuChY",
  "key3": "5efSXggbFDCuu7CTAGMagoPzEL2oXwgsqcGvgDHbhoZzTh21hnUh6SYmF3tjkhJnbNkcALA8XmzQNpMg5VbUSu2g",
  "key4": "5tf8N74Mxr6twK4iU8njwxjFFSyAeZ4T8i197svZZd2tNJ1qcGNmfJ1fQHWBtAcSqRi8YY6YnxkUANGqhQJDe7Vh",
  "key5": "4xbAqbM22KmziPn5Ht7WPnbeJqTrp3JYTSDX9HwfqNPUSA77H6tBSAkZz3g9ngo5cqZ8ivwN6eh2Qe64XL2Re1wY",
  "key6": "3yoRJPgkLHky4sQXyhvXHCGbfBBH95GG2LAZgA9C5Ds6kx4nfSjtKWSFsMy1f6fH6ZPDNbiFH7mo4sF19R19EvpD",
  "key7": "4VN9HamNGkH4EoXkMsRRMPf42ywcyviVhMM87i2bEr3b7T2M3Vy7CdhV5Bys23WyH6bszTjAvwB2sJ4sesS9oA3J",
  "key8": "76rqtnkHbPyEJw5Q9W7QAgq7UVNWdobFignDDdYHQNn2fLZ6sEDoSAo5HG9xLsYVu2dESk4fxenSg67nFK1qs1C",
  "key9": "2pbiT6z5cvY3uoxtoU4Qaj6RFfGJUKuLKxaX5RQed6ef91qfE7zndynm44kjBxZsrAftfNkWjHBrV8C3VLVGzrHB",
  "key10": "3dEMjijZfQ9YKcA7dGxRoMb76ztMPo84xWtcpvVTPfPyLvC2AmnuUACFA35cf7fyBZoXoURiLETm1uUGcFYgDBYS",
  "key11": "3vSivhowPUgA5PfFnqtPfaM4ereuRHxs55jjgFCbWjuk9bskcbd82MZ1MyHuAgpmPwNT6zFDjk8Kd868bNj8duab",
  "key12": "4xH9pXncpCXG5xoYrEQaynygwd9HCSGeJc6nGTaJWmNJURBNJ7JafeaSBnRYLFLDfftniHgEQSyd9P93n8tv6MrX",
  "key13": "2WX34bGVTsRVLzSDLeop5i4eBuKiQF7Qxwk4R1p4R8DYcAaNESxkpAtevnRHaY4NX8EZSmQrDWUGZJTZbUKFw1SA",
  "key14": "65S2HNio1Z6Km8fM7ZWJfUC2z7PsHn7PnoDj2XAA7NAPcXQhkH3YBTB7LmLK1HdHs6efjJ6Evi8yQRPB6GNT2mpQ",
  "key15": "4jW6r6ZfSGUC2HZny52G5nPDmo8bURBrERuxY1tR6d4FcudYXudoFAQEdTKQMw72fA6Annq5bbzWtqpwSgLHRxdZ",
  "key16": "523gHCvaWabfYUdSxgFtirRYWy2yJ8e1Srk1eN8TARmuF4RKsGDUxsn2D4214Hr3bGoEuZvrXYDWWLsWYXxY8Dpt",
  "key17": "3d1dPrMQstuvKoRibipxcE6UmtVwJDLhVNY41DbXqfm7GJGCYL9Mx494gwQpUPs4B2JEWxpJ8WCHr3JX2eor8XDe",
  "key18": "3vNrEk1fh1tGN7c7FwZ4kH2RAuR2y3B3pFyow4n6C7DxejcZXts2docGM8C38ft5FttG2WfGDWqqZHvPyEzj8f3P",
  "key19": "4qHgqVGe7efr3kAZLzXTVsueNpM4DuinrjgHvxqWvaKntNz989rLZpY4YPP9HKSaDmcwoaQ1V7gtSegd9yc2E9oh",
  "key20": "2kYtGFFsEJDvxh9mJiV3dyABDbfLiwj5M9BN4Qnfs536AMUDkQy4hNeEmXBRLQ9DHJmZH6JKVbUVbyJUKjDkU83V",
  "key21": "iCdk7ApLSHrWiTinac1RxgVnJBcJKwTaFBMibTn4RtoRcJLwFoHLogRjhNk4XzPizhqc4BrfmwCG6e8BFTrBR3r",
  "key22": "5S1ffus3HacihMt1NttSLEPec5xWTBQ56UTrMWzzjYDkxj4z7WefEhqY4DdX9rr6XaQv7nxNsiaXLwVABbxTUb4G",
  "key23": "YMCsAhPVLcWVz53qKaCAzgTksGZLEzg6y5oyhyjYk7oHqpc5unzrHkA5AkCdJA8jhtD83yEz2hHTea6BAnQJVdC",
  "key24": "3rFbQnbetVmYB6gD4PeuiiTer4kj31JRb2MrB88siWfNqRdGem95L26qQJN3NaLTemUfzdytYEfShGWU414GpSA2",
  "key25": "591VJi5Yz8ptPNg8WvH1mMiZ5piJia2mFgcs8deeS7ZWpG81JHsxvKBTP8k47od83w8rzT2CMcscbus8J7uZhpt2",
  "key26": "2Bgi6shxuEZ75iD9cagL8jDmMuy35quUkCpcKY3x4T5SwGeGf3czu2KL9bBHnur4dWkdJ5yduUWmrebfF1FXd1b9",
  "key27": "4deJrEAYjwhreRFGAMK3iQ66jez4V95c8MB1TtnKQwGj8PeFZGBRH95oGzhnck2LpQDPuXVBjMyK9djmpsrSHMoR",
  "key28": "2hXSsZYqR7VN8cU436mHVonK49yji3Bjbhh5cWBRfdq7xdQqpkYNvpA9j1JHJrW5rEDXtb7kbhjzppvAk6nCQAgg",
  "key29": "3i4SLBbJgrHRPL6W9zTad8AAuzS5X5sPAjxr3u9wWXc9qBHBGhViEaFhH4ziTXkwiKFJL5pHjCtaQSBHu2bkYHM2",
  "key30": "4iyhCPdMJ8uyCZeqNkBeVUTm5774Wvzyr47D33X7TVBUMtkEyKj94ZLEwMoxxdK9FDj5E5jqwhMufvH6xdvf3Wh3",
  "key31": "228iGjmdN3eCX72nbFSsLLFztJ5yXZczQiN4PRRExvrZp5akim9eTpDBTVqJ9VBSqaYG1qbPh59R2ZBg4pgupkdb",
  "key32": "5Zfwk3LeUyF66TaJXRq9hSXadwC6ZiaYVfetVQYD3sYZcXQgvMAaYrtHg9m74qk8RNTXATrDn2MgNZtYybkU5xvE",
  "key33": "5SxgsXM3ibqrQgKzou684bNqacnUhktPXwjYHmwkT9a29LvFoZnEC8TjCHzSnUKx913p9JY29qAZe2pHTBbBxvZ6",
  "key34": "4jz9JovJAS5unoRqe7pMoFTTVxV3CCFYLK8jXFujSxfvni7iqj7PVKVdRh1eHZ2Xxzapk7VH78NeAsRydf26rbP4",
  "key35": "398AE5zYowUt2hLTXJANQ8rSTYcsSkkPJDWTzHXUkQL7rM58K35wUxoRfeWWKdtDVjekLMCzhMjn6BSdpFN89W6a",
  "key36": "38vtasZuy2pSqLH3Bfvx3KtNfmqsnKUfT9dfUawhP2L3uhshnDvxp7ok19hLGa5Ay4Udq3sKmk17nJiXn8T74RE4",
  "key37": "34E6NyienWco7kSvydZtc2MSMF5YNotHC9AsbXKgB8rVFJWHmPFDGLA1ZEcjfkrKHKf12x2pPkheazdEWAZmjcNU"
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
