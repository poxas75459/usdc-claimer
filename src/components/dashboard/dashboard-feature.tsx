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
    "4wYyuhveBFHEEGeQK47My8cQ9CzQrQDUyzrZpxpM5kHE2o9pdRc7qCtvTXPimF3rRTwrrrqau1u3eEiQraRhaZ9S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RpU5vqSsFpR9SBxqvupoos4Bn1ii28vcJjPpS47GYJRtN3nnSeynHNwJgpES9Lx9WXKAEPppSksUQY6tgi38aHr",
  "key1": "7MqZRUHJxfEts47g55FqBjRtMQ664ggtptzMEuuPdU6SmBDsfiXEBFBNoYxHDyUDHxtWvC9PvqNqnjiFPFiVjz5",
  "key2": "3WGy8uckiPEAU3osZHtrf7Kroq8oQaQ9h1ZSNE7C2BkA64zDEX8u3CHowM1uCcTo9u88C6dHY62F49sf9u5HNY5D",
  "key3": "4wqDr8VDKaHfh66GNZsbtwc12JS3udmQv1F1LbiBYEhx6KYJy1rQudTUQYwz2RxGN2rxcfeqFE591Ycd4ZqPr651",
  "key4": "nJdpyEgCW6U29bUBcoTGTwEFCw4kz8wYu93W2BeP2zEJn1RMezrq29UYzXj1LhgX4QpDx6EodCqYXzvAsJusnK1",
  "key5": "5PbznRpZ1CXkQsiiCVmD75PxE5QbLCPWowxMb11iUSDjpVK8josuFrf6GbWmcQm9CMbbZ7CfyvUpigSkmNES8R2d",
  "key6": "2bwwjpaCVkZJpgaWU4rNY4WoR4TLBSEzUDHXQnhXViWVWrkPvh7q5WK8UHjPMMAkoX6B4GnVAd9mPi23vWmhr3a2",
  "key7": "39E5wY8J6PJ8btBjA6SndtSb5GyZVceuRUYJGi12TpPsP5H3fMk6sQQHM6o6YGCeGzx9CDD5c1D7i8jknMJKf4Pr",
  "key8": "4oQpWGaqiduk6qeFC2azANvTdQxpiaKW9MQh7YJ4NDBtvnpsvt4vT1LXyD2FBFrfv9f2Erhe5x3gnrHk1uPhvMZc",
  "key9": "3uFsbU6Db3wFm8urfPSNGxtM7obnLCZaUVXQroBLgKW3FeA5MQSgPZKPtk8TbDyPjrm5aBH9Ga7jwG3aFHV4qC2a",
  "key10": "2hy43jjhJJTXHKVNUcaLkhWRELts56pG1Nt7GSymAmJcETL1dtYwoWDQjKBw9Ho6A4y3HJh7KyoMKHDBhiLVTd5W",
  "key11": "2nxAbrMkrKJyNfkC6bFKswQCNpSKCz1pGAsQdzSvtDmVV8GKwuNkRJHC5k9LRwwK5KatFdSnJYeJ4Zmef5W7SyeC",
  "key12": "56NLCW51ZHhQGEet8SDodyzR4mgzkBmUANVE81CRfzDrQCA691kvDQtxNHAMNiwW9SZ8Ket69NYuLPQ8hgAnfVQs",
  "key13": "3p6XotqfEPJDq5BWttVXovMh4yNT2paf8JVuYHHjwixuqAo9dNbekpEshw5K9mSuPnftm51WWdiz9JsPE33SMUBi",
  "key14": "2VTzhw4uA9nGjUEsWbTp255H9y6KQSvbYiyK17Sz5LNsbVpkgnfgGqfGfMgpshh5Fr4fp53opjmiY3rZMUJsccfx",
  "key15": "4gf2UdnT5FTZzZzo4gB5tQP4GGWuNcpVaZdky61TNWP2woDX6wj2P72MG65EHT5wJ3xwbiD745uEUiLev54GbKA6",
  "key16": "3Uv7X3uMdiRoiJc6xCWXKjVW2NWf4HDeLZU5RgYPRegWyM7WfNLZQZPnnL2PpWWxdu5CjbDkffciP8nFM8BcDRBR",
  "key17": "4g2axM6hm7oHj3MKhF5u9RLYenq6wyKpn3G9Cu4HdZeUKh8bzbDKyA2LpWNQmUim5g8Ji8uhTfRgYzNr3hqY6kTf",
  "key18": "pv742u3fc6VYgR8wsdKJDN7JfncKcsjmbW1U5REN7FT3q55svwK5fE57Dezikqt8fPDS8s2eVdKHevK9RMT4PwU",
  "key19": "3AE3bcsoQtdB1tgGuceDTKcSxzL6Sgx1gaFt4VnUB3MXT6kA6y7EMMqMZX9K98pGUYi8KfiXxRbUTsYmaUhUbK6x",
  "key20": "JVSxJHHi5E93tixYUzbEMw51bAV7aa1iiveCsvDWoQJ2SdAx59ua48jAMpLHPXDH5exJ7a451H6vdYGPus1Xc4D",
  "key21": "4ZYqGkm8ubkT57mZT32vKkJrLNwCKns4PeYcp4aoaStHBABjNMjr4PfK1hFKWiX4YhfJbSJeshq87AUzFrkSsVb1",
  "key22": "mVTSv5QQSHzwG7QYMd9XxzWcw79zuh92THLQ3haVBBC7PXTCDdvLAXScDAerM6ziRCGWT9ohXLjnLvgqUQo5T4u",
  "key23": "ZfeggpocdDhZNgudukBN3E8KU6HUW11oAvUeVxLAMKaYKAyC1p6NRsgH69oAs3RxR3fG1kTP9zdyNMbZwzWXZyy",
  "key24": "3wXqZFBoUqujQp4ywvQtKcwaAE5ycsgFeEcLHZsP2VRu5DZRiLWpobzXA7JD7yaTHFmvZXbazLEft5WkjCEUVGU2",
  "key25": "24JBV5Km91S9dy6ESycuWRGGbYTUbfaNCgUW5Gd8xUhszksPaUXeSyWeQi3PAWyp1ArARZ97zrcFqi2QzGdepPnh",
  "key26": "2baDS7gLJchadGXz557DYBMVqgsxfqFjU2oX98JBvv6PfVadfCd6GtyUocJGnXNrRCv6qFU2gmeaTwYmEGWf6we6",
  "key27": "N1BDwWLToBfMRZ5iWhHdGSP9v1SVAyLYETQ65Fm2cy52YXm6VUV4oNCocTSrCUFvvf5kst8BoxxXPKsjoFtx8S3",
  "key28": "BwbGPftbFKMf1Kj63eYwJq4NkeqmtEnd3vbX4d9VktfFowubUtAhdppQ6xnKhLVX3KpGRmUKEBXKVWuz3YqR5Pf",
  "key29": "48WcfMGP7TjJAGgrq2uWCstnn9axKxUzHiwJAdU8rXFyC4M99p69QRR6ZB6X7kfz2mRRR3G2mBVoBd8zWPQTKhbh",
  "key30": "2sCzCdAfef8EG1nqDDsNNYanNTjEr7JTATmGhvMEQQhDR4tnpEBh3jTapYS3W6DFE89cGZ45qTgCf7hDrnd7p4jc",
  "key31": "3LJtVGAuVu4AtX3S1j8GJaqD3jy9J1Cx3N5JHwXQ7BxZqjwie6AKqBxc9C54Sb3UsY25mwMmDgdNJbVb2o2nNMhK",
  "key32": "2n9x5vVpP5YGKhxf3BKmG9fXoGtEjuJDp5ipteyhwmwtogXDQngQ3R7SAFkWp2N25czG4uUbpfSyTrcUKDJ1ghTT",
  "key33": "368krLtbj9eo9zWEhtZPXk5UqycYkvMdiRMzL4vd7Cgo3L5r554UpT9fWcJ1tAEiehxuWhxTcZBNb8VTveeeetUf",
  "key34": "4yBhjzWtVq9Ki5mSq1wkgGiN3HpAsBs1yVAcCUnKcDeQ49ZYmVfUqP7dpQara54LB5Vn2DjsorCw4UkDF9gTjoTz",
  "key35": "3uQcLyHnRwH5WgU3RHJX2CVbdU8riHxmigzNzjdA3KWaPSDdezaapm9guq6XNdCXxszRXhVQeN4FCGKXeseC5fGs",
  "key36": "39ZAmuwWrEAZJ571QMF4mgSshqJvH4yA65whWp29CnBo5iYA712cjvSXNgNfkztbtHNwSD3QE9awfEaj8C3c6Mqh",
  "key37": "3TZwTadVUJo483G1nqP6kKyXcvwreAWKwSoVqwZsedpvDEEsZ45amHXwrrGyTGHGjVD1wGmtYGMhj2uS6sNiH2nh",
  "key38": "4GcDnFh68ZTxvbjLJBYLmJ5CPpAg4Fq7eRgSYUoLutd884LppAGLEW7GTytamg3bmapwAQxoG5j4Uj4eVRQtfPCZ",
  "key39": "2UUb5TEyn3DS3m4cfT65uR7PFzvtTvE19jHRMh6aBLuB88UQ9bQN255B7GY8vJWBH7wkyekzE84SAtHJSoxpeYg9",
  "key40": "59FZa5bD14gpcoKiZMzBSpS8jmwHPAMCvpxPRn2BryZUhuVPLNHkuGg3xzAzV69nm96kmMQhxcNJRzYzc9v1GqJy",
  "key41": "2CurbrQwNmJNM2UZZKFoHLmrbYDhxzfHT5JfLv4UZ4AdLqir95Khd4kyHmd5sbyVVQ7dXRFRdMxAzxUNyZi1sqeo",
  "key42": "5y3yMzX2jZQhJD2iEzwTsoDo4HDbPCefYZMJ5h7o6Tkzg8ES6tnKkLDQ5ZtWjUkdKgDHnP3fddzsaesH5UEfHSED"
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
