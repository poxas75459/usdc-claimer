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
    "3FT2tfzsQzYQ1yjJPhNe6fGS1c3TLPuE3jkGiTb5GXwX3kYq3VL33JejSgF8Ak5ZPcuxDfR4JSQCpPwJZ12JUB9M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XVLYaztq5PBwUwSdi4Aod11UMdN6DzmjFqrhwDoQ4Ja1PCgxzySATBvpE17iNaWD7kWNM7RFbHxUs5q53yUHvkz",
  "key1": "51iJjN6m9ZFVUmTWGiEecWBZmE4uu3V8CHXskLy6ijW4a5VDrpynuAZ68Re2xwByBLiFrY6ga9bxhMRgFkTED4fL",
  "key2": "4ZnfyXYyfVyfyEoGeHHmk1p3ZqKiifNW3R5JsXrrXnoNUBaP4aZV1in4BNCz7iv8iMEw3VqNdQaA7hX2kAxeKDJK",
  "key3": "3YajwKUcuvNSbxB3srw9a7aqHz4Jy3WbG1LmbetkgmxViQy3UoueqamDMjVLpCzobE3pqjCYTfdEKihRtCRmiS3t",
  "key4": "YRJswqbRoaR8ZuZACY5B1KzE6sTLRiVJjFqDXNZqmMnxxoVDzsFXBsQhJ1KQdNUwerKj1jfFkSQrFEgSF7WC7Vw",
  "key5": "sLHvAYxogdWbxmxVktqp2zbVYFBoaeox45LsutS39bR7UFAYMeq5Wg63fEqnghUGgCUwdwiJKXPxeSr2co8BPfk",
  "key6": "V9VAPcVBHivvve5V3Vep1BigknMZXM1AtcAtqv6JRSpQeboXeCuKCbxzSVcFK8Y2pa2eZq9YUn89SHHcaTHT7L7",
  "key7": "3ibT3gV6cM6VWo7AtB77M4hfz7aqVmgoAY44ZkC5uz7TFMe3J1RnmQD6pRt2UzxuKLYEBv1phbHds9hMLEjVjNSZ",
  "key8": "5AqLrbV8wChqHrqDjm84z1guKK4aJSnjcTzCkJVShXnUCETK3eHtu7HNJ7Y1facVwsqUhuZHAut29V4Rn61Y9VAh",
  "key9": "g5gcnhrFRqK8Vma8zVajNxq7N1gm3NhsyWifNafMaPBQvVBVqBRk6HF74BtZUmoUJaFvyYmNhaBGKU1Utz2QA4f",
  "key10": "5gF6xSrmQYgkXBxKzZmTnBhDuoxT3bp5MWVbKorQQXCaN1HqF5CCGT994gZvjXRaFHjzLYQmUZ2UmGDb34vtZzaG",
  "key11": "5X28wGonUg5s5b4CEv2jmqGtzDzR6c5PffXxDKKViB69TJns9y4hmxSeGteBZedR4Qxj1KoJqGxXbLfihsFHHNfJ",
  "key12": "4pHJP8mfFVcYAPT6JJBmrQHBnCpjTsyT2WnNhFZTG5vA9CeTZcR7YDMub69F5yCXT1M37GNWXY3Y6JPZLZaD8fiH",
  "key13": "4G1MyJD5Xy3teRroH5PPptMa1FKkGTkSNTsGAbUT3xLY1rRpgu6MSG4MJtEymjh5TS4TMYVak4M2bCQXpcZLELJy",
  "key14": "4u5vGXa3qqk1pidBe2TPCkadBe7SmyC6axk3ExcN76gLsw53WZHBkt8KGcTzAievFDK9rwcEUQHQXYhRJprJ7bDN",
  "key15": "3cUwSPt762gsjYwFGxuu99jySi9W2VBps6LRTDd6tPdMDUejuiAocQShozAvxfNu3zZ37rDb3BGvhA6zhksiBGLd",
  "key16": "4fY2cvh3V9jor9HxgpbjQNPBac2nynA6e5apkdETVhLUjofmN9j6V1hBqQQ4MEdpqdTPkWBCXFuyaLsDvZkjotUk",
  "key17": "A48svaW2htemAszfUyByHSkEFrAyCmc8YJMo7cy7HrfEUzztXdjV8ayDieMTnnNKoLiJBSX38WtT2JMdYeGi7KH",
  "key18": "5MPUBnPzqesTszJY6h2N4HYXQrc5wgmYSEBEnYxVvn6pmwNLGkZtotQy6rLjKxkyxnZdf4dz1rmWmSDZ6MaZuvXD",
  "key19": "2mPZCpPKJQKEMtmVSyJfoGonFy8SLyQDm6wqk97KzNvo7LXyEkBMnm2v4ZRiDHuSWrWsWZq2aEBdQCYrMM6uBCHP",
  "key20": "3mUGwNYVdsu9TYcxxMHN1xKrhAUucotTtNRenVUdbKqnoWCvY6mpc3YPoa6MRCvwX4YyZj16upLfZcwWj6SanKeJ",
  "key21": "5jC1bfxD2sDdZemKk5JU4tzBiYWv1TC9Logipqiewfj2Zkv6KEbpA6EakoCyhrpm528LCZL5eY3HpMsEcMsq5jTm",
  "key22": "2o5i4KmyZV4GGQfGyTpHHrqEqvaXGVKVc1YZM9CFKFbfo11a7pB3SaV4Wdx8T8JJV6EnNbN3sHXrpksgj5wdd7Zk",
  "key23": "3JJBzYD4cSWCSyNxwFA72mm4JK82mddVqt1TEmfsnJ2ymYhkPva8yv429asvTwFSp8CxVH6ETdtSLJk51joAzHjK",
  "key24": "4gzsJFWEP9tszp1SQj4SwD4AUgfpCZR24ry5f6UTotdEvK8kwfEYTKAXwbHPPNRsTXWpZ2jRxGAQuDhV6PGE7pL6",
  "key25": "5N3NCbKKif1gDR1pFJEwYymbfnVkLrMUTsTGtbHKdGWpocDrFasCGirYxriZvi9daykUKNefsZ2K3WLReBB4bqG2",
  "key26": "4S6FreiBa5n1TkVSsTCaA7ChrLvV3H3qXU9d3kbPZJSTYam8wNwTqngx76UnkYaLXwbCtQJvwavMUNa91pWYMh5c",
  "key27": "3cNabXx4jgxj9HQGpfUE61UhsERtsP9QEZit5Giz88uNsfsHGeb64kS9XPo2grA2kxbbbxr7mvya1rUcoHkEm664",
  "key28": "5fqzHDNUQayJxCuFoSi9qbDejM7zvdF4mc4G7HrPmbyN1uLqViKEo5jA7CFoNeL5yzfgC1qiLeadRiSbkR8wWao9",
  "key29": "U6Le9eFiH9CBsb4PKSf1cT5zNBZrzUc6feoosquRjXfUZAJUFV7jRRcGj3cRzKGWx4wHn649pr8oqaMd1BCrpRR",
  "key30": "5bF32wr5Dc4jpVLrqiKPBdisYwSzCHbqvyL7a4o3ar5dB57sZehwubz8yFA2rm2vWcywkW6S7wNn4C6vkX1LmTFw",
  "key31": "kDeh7Unbi5YX3EZRZ4eogdDtNrivkCscpmjKd6wqcZErR1oT6EVV4dFXxkxcVS9KgGYBZ6SKdeh4Tknqnz3jKos",
  "key32": "4VK4dT6kwu2v8oV6w1sYBZ4UFMfekv8MRRDtD36AhHSR6BMYdn4MGhoRXYH1U6XGvZ1pLhTNUCNFzKv39NoCtb3D",
  "key33": "4rVLCL5aDeKtqiHk8zJbUKNYC3swtdKuYQN5XBLUt8KUx3jX1fiTbLiCXbm16KLiqUGNTj6mHxnfgNm2rudyY3mw",
  "key34": "5EmT8LyH3nw2ht38nByU6ZFs1QiEYNZ4awjiJGb9H6r3SQqiqLb9677kGAr46bWxsoARXArhrRpDPxsrmzFjVx6M",
  "key35": "3iUeax4BYpT11DcKmtK8xppGWtz7kXyZMtAQVib91YU7T52H6joDamL2ejxnarLF8wuk7pW3gHHcBKBk63qEt7ed",
  "key36": "7pB6ztS24mjc2QK24Wiotp27xcEYKiqDHWXjcz2uu1iCmbhAuRG82JTVef13W26jvn6NoY3UjDuSmyvJygZNouT",
  "key37": "4cbiJYJ13iYz4jqgQG7gfMkLRbveYp53gjjzEMn4ScFMAujsX9VE5xDSJNnXfh1HzEdY5mNn92xuwu3dxSMVDKeM",
  "key38": "5uvgCDih74v4PmNkBR8tuy7vQ7znZdpPz15TCLtfg5aTXEZKj9s42DggmzBVbjJnyfSftKhtvNC8E3e3MRAJ9Vgg",
  "key39": "5MsyRCGXSq1k2kRKsCZvMVUzBzVJUY1MmYgXKoUqetzmuhipURxe8VBSrV77Ny63JdrX8k8bhD1LAUKHu5N2JHZc",
  "key40": "4hPByTs1ETvZnYv5BieJCwHWVVAfAmRDszAQ4LJVhDXoZEQ95KZbL69noEzRc4uTayV6PruF8jDNq8wm6sJaPB87",
  "key41": "5XEnEMoHKJrn2qikvtY2NBuTXvft2cKrQy981AmdRUeSVWfM3mwtzB1VLwPq4st3NnK7jaCNuA7tfgWa47grEx9r"
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
