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
    "3ubzTdNQ4DmbCLvNm7pJEiVNw7NKACRkYFGfHaVy9deJC8jWqWbaKx5zgZZnaBvDu6MzvYXnxnfZUhBDYzufqda4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zWRSwWx38n1Nix7Vou7DKNtB3o2xQK1vq9DQKxJXkzaJS63Kt99EjAUMWncuv5D6Z4MU8y8HsQMkswGmdAPmchQ",
  "key1": "3JvYbBGag7kgpquQzLtiYo1H7KFsNeqfLuxk2y3uS7aeD3WKvu1d4b2xCUm8DFKQAmSbxPvoUqsDtyVt5w72hkd",
  "key2": "5Po25guEcqzBN8MEMXicpt6ozxqqykJnbp1V3y11bv66XcRwNXb4R7dhu3gFxJfjSCbkYftuX1Sv7Uh6opjkkn3M",
  "key3": "2axTPasdeFT22FVvVTdJzpx8ihk6zgZu6GVfGazBt4gu7ghgWzgitjaDumUN4TqQu9GU3N6tv8dve5Q2qT5aCwGH",
  "key4": "4yQTPqXH8yxaLdPWWARZYmCJtBduVQiybu9QQ2Lb7EdFi1q8dFs5anJm5mM11Rbk3xLku4YpKobjhYbV4qXMDMxs",
  "key5": "4BLmjMhY9AFVMe4NYEZTYfyA4c9HhRdFrgj8gYQqUU7zaB8FrA7KCp9Cunf7nPyqXaZhuEJSKuzTDbWnpuWHF4T9",
  "key6": "5QTgfBnm3v7GjLuQFTHBYJWE43kmnMH6Pgjfwv5LUwuN3pWc4wM49DAw5WX4Wn1aCaRhz6UJcEQEeF8uYEzF48AN",
  "key7": "3vLAqrhxWYvA8thx8Y1e2V792JYg995Sx3dUAQmcBVdrqFJESNhfZtyFa5PPUjYN9v7nqyLDUdUVKYL4F1NTK5Ye",
  "key8": "37nrM8zxg2mqnsPLWLJtmA4pCmoFGjeKQ5FqcrzGFycX7pB9aUfPmSkoityDAN17dmZUUDBt8cpG2u7TcMdXGgww",
  "key9": "KwdDizRpbDzVUZZ8PGJpdJVp8vFFbBGe3dNgxTqQtE2xwNZyAw78MrtKXkhAtCYjdmvELfzbiqwHStCgBBUmS7x",
  "key10": "J1h6bbideb9j6BAasVpkf6cLp3eXg6kvqJtEzuCjxbi931rY9di4ZCHHECSJ96eSfhxqX2g9j2QGZzwgiACShEu",
  "key11": "46dGD6LYqHP8Wmc9WBkiJty9ThTkE8MesfhcQBfmiAG6TPcjwNR97qA9fVRK9U4hqQbVMvxupv7uLh1Jo83W9sAc",
  "key12": "5MaMnTXLnJdfLDVnUs4kqtb49HWQF15qKjiRGmSEdVGrXMYnbaRyiCvEwnHTuos4dAKyv2uvMNVmQ1Td3wrLW7bm",
  "key13": "35a69JGTbUehYykU1MD38ixxfbZDFUBpEZn5ah448KQHnGXsgSjpv4onBBDCxT2RqJagTidNGHi8x12zDA5hqLir",
  "key14": "4tUPfaNBRgWhxUnrQUmin86wu1FL9cMyPMVE1E9VVeHACnT1XwghGR2xoBKPBYE8e535BTABh6G7wSNSp7f84Mvr",
  "key15": "63wYdFzvrjo8xUQXzyKhBbJ671S3e3Md2Tu6vYg1zGXXgFrtBXLDRkriEFrCBxcPwrPREgkNToXUDg6721auWWWn",
  "key16": "4ZjjDWMjNww1msdP9CxTUUp4hnDJrjRuK6kUWG6DGtUwmxQxb2eNiVkWCPfgtyfkyuZXknE5s5d7VrJ8ZiJjVkrf",
  "key17": "UJjhoGZkDfxpr4K3dC9e9Kk22JFtMyYsxgNvbz2FMnKd7r7fk61bHyVDP6QSoQSd14Ad6sHCDKyFCNWHq4uWjHw",
  "key18": "654twzqmqgrEQgppM3XCcWhD1vcHX9LqNRimyVvx6ooRF8s3igZgMv8xEc9fNF3H7mBnfptZbRmF7ZRYUug6Kgsh",
  "key19": "5ntRrx1mbNXBHGQpJEApxsWiR8q2HYwXsJxjMxMA4BQ9QgpKhe2pxTiVFoFF4pVdbpL8bzAWV1nKSTPXYRQ39HUV",
  "key20": "4qVoc5x6pXaPTRQjpjJWr1aoE7e7JoSZ4pm6Z7ZcrFzbxkqKxupZS9red1BA46jQjBi3AN5ig4ALDyNeNWCRmwJE",
  "key21": "49rXSNA2xVzfygSM7B65ch8MyX76fAa6SpqsQJ43quzUqkVeAWN2CudWPNGjXTsvseJckygWCkTdxHuYWxRbaNTR",
  "key22": "3hKDx4ReYYYWrfuDGq9mdAQHQVbL3AD5G518yLAAm2ePLP7W2mBCLhTVeHRHZyUgDNaGsGzHSYq2Q3ivqQpz1rhy",
  "key23": "UiL2mw8EjhWk23L6E9ueuAYk5nnyKF3GHANaxM7SJossVhikHSQdgvUa6QYMrMXQzFfQvH5CPsxZsJWidKaMHsv",
  "key24": "PNu2d1qt1KxyCUpw1zzUdDfhASFJc8bkt7xE46CoHPq5wxNq3paxqrWwhCh5EDaTkeqSYLJRfdorFJ4a4ffDnjy",
  "key25": "51vzwjr63x4EDNTXbpCuEMTExHjzQVSn8JyQXaDdyUx6VoK3AsfZyeBEyUPEag1GzC951VWDk8V21gezEFmUGMjz",
  "key26": "3mR97XfnnydMpQAjM4knHJ2BvJKYn2QkKnVG3yC5jkqvNxXnTHVZ73yox2NwUo3AkJL2X1QkBfGvsTjHPewA1obJ",
  "key27": "3H3eEUpKGGUDFZRgDq9WMrCTZVjB5YkCd4ML9zMUQSKmiPLoPRKD7CToNPSATcQT5ac6AGMt44GohALqDdqm6ocP",
  "key28": "4eAT2ouRXv9gRf59oKSSKytMBefW8AWqdErFEbEwJjfXDuUgXsErLWStxJLdTRqYotbsG1cxrnKG8wYnfyLZn7dj"
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
