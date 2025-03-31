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
    "hcVJTt3cUPnZensbNpQvNsLvnWptL4h9rdp71NdFLxxrrfjwmNri8fGPj7oA5dVTPKiFCotYwi3Yw4qEAD8wnqJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t6wZ3vzfgEKNKJRNn1FBEaDz4bKYxKDpYQTJe8MPLTVPhrjuyvBzt1gRScndkCrZdKRN9VvgoBkNJAVs3CVj8K",
  "key1": "3D5eA92DkxH1b3hebwPiWphDbQuHHQHiFZ28FMmwkRSF1Zvf1vdipnVMMzNDpVnk9Z6oP9utDCu66Tuddg1kaSPH",
  "key2": "232ThxLgijd6Mz1aWQe9hDyArzFaWFrTsqxkRzQkJ7gpBHKJk3Tuqua8esQhhHDCb8Q4QxZPZHrPmQokMbcaFHcS",
  "key3": "GaL6ukHnLPspteED4f4g9q3nspjkYdkNwtwnjw9RBjkDRYkpKJhTzCxBvsGeNo3EWNDuzJCJcz6Vu7W7o4v6jLr",
  "key4": "64whSSipfEbz544UpiJTA2K5XuVAbE6KRJm5LALzj6CyEJDX2gsCXWuk12FTEjsrrBX9kn5KZZqLmqbAaWFbeMAF",
  "key5": "2SnGbCr7vqxAE2hVfA5aXvQv7iuADoxW6qinS1zhUgfJhQhgkr6WXTiBNhNubhSH5tciYXwFRczNAga7EqzTqu3w",
  "key6": "2katxUJMoPTo2pQf3PmRHj2m15QDN6vJeKkZcFkvWFakVY8Mo6W4GrrYPSDhSnv3mYpgqS2MM2ZwPwe4ht6KkNba",
  "key7": "psdGgYMSUZs4Gh9oX2sJteHiBXtr6FRsoytQiF6aYGwt2kmBgzGSh6WLqNRGvB5uuieytMQvBpVffFaewEQ6BiG",
  "key8": "5eAVScpqDPrcXerv7YydJEXf3TSH5YUBH5ikZkyozcweTpKYKnXmrzeryDWJq7tDj6odVKyBcpUzzZMQoS2sSbad",
  "key9": "34AsZiYtyytF7isS6mD893qkwsbYkDPbSC3JfUCuz2KXiX8tuggG1ppoJkGBQA1Rck3uxMb8Lae7fxCWXy5xqPaf",
  "key10": "3M6K3AQSBwkKSGy24pCn2ANo2zYLGTuK7H9ZSCzwg9cdRTUe9RtY5eKQrii2cSmfApZngy4Ydvg7yNDtJs6LVEsg",
  "key11": "3MVyLwX3EMBecyFimHFPrmyBiRzBLchNKY9fm82mMHCGNkwtu2xKXzAQQDEKupknYKA83JTooEnQGQHLxvPNwMBp",
  "key12": "2sVEYJDM5P1zNw8Nh6vu9FU3jv3A2YpHJbxCqQdL5cz24g4wqBq4eCTP55baL915ZY1zHJ9s2TTUJ76sDPMqGS6J",
  "key13": "4RvfCzsgXwx9za6JND2WoZT2BWDHsJMLAEbQQURosPPgWPJKimyUmKMtjyeTaa5ZxHxheAbictfisPHBtBxq98X4",
  "key14": "NDUJEymhjfbVxhVeZBght3mLi16YNB8RMbdDoHhQwvjK9oA8dj4JPE7uhjCUUVkWaMskd28qzGzwNirA2ugNMWQ",
  "key15": "4XYoXRHVCvLxmtBk6StFeJaTKVB1HazXgpWstD2YLgTZ3Lurno5gXVHSUytpegdXkcYCWkseqAoZLe8ktHPY6Tr",
  "key16": "US7WJmFA9VBKxytAyFmJip8ZKYF1guRRtXWfsXXhGnjTxXsJe1H23ZR19akiG7ErswZSsRGwDahf6uXPLcscb9j",
  "key17": "2EN1j9s5TFD9emdhNaqdzQvJjJsmSMHwWRVhxaYrWjt9PcezJc6KL4JFCYhBWEE5pecrmxXRUuawwBzjd5gbsiVF",
  "key18": "nu44wMM29tnSXCFoNMA5jHv78LdFmS2HHKXLfwPcCLBFQcNiSLMjWgdmfSKiY2PLb8Q6LJcbApJfN7QozhtfhgE",
  "key19": "3zwdNUfeBERb4woEoUGtLdY4HBLjQ1XYnV5a7bM3L3EjBN5R54bjWPZ3YhJX27F5Yxv4j31fmDHK2dkjj43JtPNU",
  "key20": "3gvW3a1rXmXAxJvJ4AE6m2rrM2vg6Vy9nP17cr8LuChkPnQy6HSFsAjGjqL76RvNFTGjJbhvbMAxodFVY5FdbTwc",
  "key21": "69V86LL15Tu2GWfYxFq4VDuaKjp37xC7Z6HuFghG9BE53bvBpmrFL5UgG2sEVbfGHvKpYiXvYvH9iiiXrcsb1gE",
  "key22": "5HrSHXTvcaHd1GvpzbuekNTnC3xaoyCQFEwfNQdJDvuzrbujLFgZSiKCbd4XLAvYVF88n1gyhcNUnfmwznCSCypc",
  "key23": "4gJRWMzTSowoCVukRryCdmhjNsymC55PBPuA2B1x7tsf6TmGnfozruTkbnw3BGXk5UmsVGoroDhhQTYybiKzS3Vk",
  "key24": "4bhENEGxYkhdHdLj87sQLeCwguyqhSkWmrXA6KDYtYGpR2tHgzTk6Yvd9dxaCBozor9LuRPQ9C82xbB1BBSMPfWi",
  "key25": "2fkdYgnXsAasSnRES5vT85xrGeazLvXjN9MWmPG5ofeykULQVGotMrLz9XeZs8xE9NZhXca9v3e6EVTuPokMhAKd",
  "key26": "2VhZXLNvk79JUMfS3MkrxKkURQqvJbhjKx62WYzNqhcysJ2V638dRzgXhd8qFjZozY17zzorPrE1NezbVSy9sf2P",
  "key27": "42ffGAZVG9hHnERPSWdGyQgcVqHbLeb61zkYxECGuQujm6RsL8nenoTdhXEut7WNwdXeUt5NeDsoVVcyjHva92KR",
  "key28": "3KHYHJ5csux93RZjLB7HenDjrtixbpSxkLcQcjV3iPjBE7TwrJotYMwGV2UpZvdjGuyLSr4jsKoSUTAKQ6cKnmDY",
  "key29": "kt3ufTLWPZYT9bJWNiD1Wpds99yVbvREyqzN6xJwzYZwJp5X5fiLiLisUJwBMdsd1TzintTM7dGKVspvE5YQ7Fp",
  "key30": "4wTr7zxZN87uzbt1myiduExftLHH6hE9uXDs4di3jtU99VJmZQBE1xK9BLRG7DSi6jm4VLtjfcYzS6jVu4e3pcaj",
  "key31": "2PQ5RLC5tMk94ceGqq5NzhJWKXP4XP1X87kK2epP3HL6eWuhVXUmdEHVzCuBC9JDcQgVYX9GikADbEKnNW2J1SBi",
  "key32": "3RH32TvjmwG2SpKLAZbZzCywQSaLik5YA57bX1H8C3gQ9TVqyrk4NMkmZUNZSzDxqjHfCVqBmuEfdT9txJGSHizC",
  "key33": "3CKLUntsS2qWTkJh3LUUf71LJnewXbe6urWBiiEaXqbHsaj6qtnqzh1jbBLi9UcaX9oCziz8oeka7cEuNu8E7ykp",
  "key34": "5GQ79hHTxYj7NNFTgEyguARxeZC4rEgHEFC5MNcrpx3EKNWsgLAVYUiDYorzWV6rAzD4XoZdt39kB4LErm2Y5Cha",
  "key35": "5am9i4KYfPuqvYQgy28UtM5ytqKNLoeuukTLkWN8yQ8BDU7jxqA96yDbN4Qsgiqd9Ern7NLqGmLs53TXWB9DPZ6u"
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
