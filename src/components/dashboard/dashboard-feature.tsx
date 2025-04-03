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
    "3UXgDS6vSAaFZw17LhsGq3GSCJYLY7FhTxdwYP1Gj6veUmxsvkATgZZbDAiHjiTbc1gFa4ejXvYuwiz9NQUgBbf4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q2DvgLNUYsHiSQ3iXBVMtbz74s8wJsDPNCDVNHTnJGfez8pSCoJBv5DktizuuW6KpGJsehYsVAgnpW3KoGTj7NE",
  "key1": "NWJoJ9vv41vzYfNspajd9sAKGuo2u4uXDis4gwNHqRRSmvhxwJjYsaMrww4VaAouYyjN9noc6YsTEmzHbe8LiQe",
  "key2": "2JC5UveNCKYKvGMbdKigUt5ip6oFYjPdjF6haCXY46zkMRiL2x8w4tc6X7xKc9gzGJBfguaTjfqQu8fgG9quMw9r",
  "key3": "5Df3BU1fNXcLwMbitJTps1crAmvhYN8yUrwrFYzpKserWGvbWpYwAZojt7nZJ5ZSiTC34NGHNX7hLSDZrbde13Rm",
  "key4": "YyHUPhZdzGBQM3XRePjbyfqDpPoDtXcTL77MQMbLQBckF1cuns4sCuAMZwyeqd1dHtEGtE2Df3WL82BG56NAwkT",
  "key5": "2gUBQqSDqvJDxd6bxSqV6gFoXdRSA1TaiEZtPGYoVCjUSXpFnGGqWYVFveuewo2W1r1vmLs4dM7bgcQvLDRDzJmZ",
  "key6": "xV7m1koziRZd1HhKB4wDG2aGYsCcSV1xag7KDHnkrukNgfspR8ddiAcFQctBwf18B1SjshVDPPEHbNNDHU9WPTB",
  "key7": "4YephMY8yzik1hDjajTCuFz4HUNt4JdT7ScS3BbTpunWcsg81LWtZWk9YSeCKBPuuTXapnYvqxVJaZp9FU6YfFcV",
  "key8": "3PueGrbrMbMmTQsase2mwndLMsyAZxNs4qp3JiXfWCeAfEcfmF5cKLQBhopVvsYKNF7U1eN7ZtmFEn9wEKTXpYqu",
  "key9": "UEaqhKhvfV8TYDhQJG27sjA55avoRGPizzJerSwK1JbX16VC4nuWuaf694mENjM8u8XJeMQ2bSkMackxgDCKgu1",
  "key10": "2ptQs1wb2KpivA7GHSYGUB6ASXDVxUVUzgPSRSmKxeRK9c98CszSpsnjLUagcdd1KRuuwDhcE6PWBnuwPhP5cK6L",
  "key11": "XvETKANc5ogtaRx6Jr5NfSkLp5LSxdHizu4jB7fQfXuw2XFBLkhzL7KYctfy8Fwzs9kuTBKD1etRdV8sBfpdXus",
  "key12": "5kjFZsXzLP6gfbx5t6FMPfR2i9eM9cdbfJNf3t6f46uoLpz558kdmiCoLgKS1vBUBzRDeugvsrmdLp5dmYdE1tDa",
  "key13": "3gkeaTZ4oLY9gcg2aXKFDusDZJsNBz9ypzEUpbEyCqdaLQcSMHXnVwfqNoscX5kwFUZw3bZpCb9Fp7nQBgL3wcXY",
  "key14": "5ZnjUHBeiJKeCrkgsv3ivhNprv7hHKJWJQXCek6jgfzgeF2AZoNHE4JxhikB4WGFsiTfDwqof7NVN2uh98WKeLNN",
  "key15": "41XF6rQxrFc2sjiB6oyX9xobecyouowhbur466fPeijgsdQvk5CwSgWK7n2JhYCkL3gUJePfuuQw45Tv51Lypqtb",
  "key16": "4iVQXZAFMqGRhGryDkcNwZRcVDKA2MBZsZwS7JDaBDyQzhF8zmBwWpwBeAZd4hdqtXbvZ8MSuVhE996ptktyBuqg",
  "key17": "5fN5wLucxNapyRup6tPy1bAwsNt5f9Tg18mreWmgnZXEyGDw1jQGUZQzBe6x9Kq7KboKEs8rGieTfLYcz4RC4pwv",
  "key18": "UrhZ4EA2tJKWPENDSfTLpxM2SSsKevsnwQqrs8ovy4wJAJnVMvHg7nDvsqWnskUjApeyTALDV8CFCJWVbeSvDBH",
  "key19": "3bJWRahgpm8KabZYZfbguBmvnhCtyMHS1P2sz2QjnFyGmLKHfzZb7Vbjg1M34aQGyFa5jsAzEJ2oFZqC9XbGAygs",
  "key20": "3y1RQzAd7wbBHSpG5pzmSUX9iLhVNJxy1SSkzAABfatms6EUv7kci9o1bZmkzX4SdrMov57cdZj7EJo2WNWHdZwA",
  "key21": "5hq3DdcZSNvh54KUdsjCK5gvvP8gRWqDkcuXwUz8Pk7vDxh7GXWuuUQqDrtsvTj3jX1McGrswZ8cLCo6joGkWSTB",
  "key22": "3WEJ1QmCh4Xo88eJjDpoyioeEK2Q4kq6wgxsnczmW2XDWped3KSsykLhQBSYsrJR9k54kjLPbDH2CWCz51mEML2F",
  "key23": "5mxijGaodU6utWuhNuFPmKTPwvdvyptZER2ZvVUYYwZLKdro8yznh1VHy6493esWNRN6RX1uyEZpCYDaAcKfkHv7",
  "key24": "2gwnJ4GGES6xqVPTgMnnwS87jcpyGVhHzsEemeAYYgz57CxTwVPKiDtPr1criXXYekeKM1N6brdRon5BgraN2we",
  "key25": "4xxVaQoxCba787bidAbmNW5GMvSRcAuXuBAxAdqAy2XynxkspxYLvkmLxzWggcMZH6FiSat4x6mmCNF5ge5UxSXF",
  "key26": "5xMebsgkmvBumwNAzkEt6RQDR3DBcXQBJkvE5amuKSgqgoMfvaECjmVDqLbXWJn95ZJuwvH1ED6iCGVnaG5qfqyq",
  "key27": "22cKv5D3gnDc9keDHeQi3GGoodTdRWyhpXVF3t9ATKjYSc5F8d89AgkUh5cuh6q9HdMLu5uY1E2Ls6KFbKdP5616"
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
