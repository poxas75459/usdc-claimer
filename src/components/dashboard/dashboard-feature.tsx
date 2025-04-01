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
    "37tmNqwoddYR1QF2YwDEjVvFAmN34Bct41GmcikVMVr2VnA5ajwNz3bK5tb6q3QTdphy6JCJo1mWJcJuYLZDCwM3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sYA34ETFVV4thKd7yBwqzFQmhz8QQcTUYX53UpKsqwTCm1tirC6u5FCKgQsghyjqUmCujGfVWBWFtPpvL5vrNQw",
  "key1": "hmwgUUbFbMn7jgDed8wDqryMQh182AuG5AeytL2DvzEWE95zoiFmTarqx8SJaLvMypjYcYuDs5DwzH4KdZeqYaz",
  "key2": "ERmbkXqrJ2eFxdom2FeAawvAnCktdb2aawm9HXbnUWJ1cMWzwXpZxusTpo6uQr9hAg33GwyRPtJb7mwAM4HBaUe",
  "key3": "61tX8BvAWDDQnQ4mXYd67iRpKNDpjRd4rgR7c2v9xKntm3YpC7gWbP3TeQ1JeucuhvFjzCCFkfuegdxqrG7pkMk7",
  "key4": "WQwRVu8cuyAXTBfQoEgPzziiiP96CVvA3ZbbDtUbeCa3L3jGeDJw2Dr2AyfQEMqZv1g3L3sBSDANac8eqLG8DWC",
  "key5": "5rEiCPUV7ah4o3mzYw4XEU8v8gYncs4RgmEWEJrD7Eff4HJdAKPK8ioxABzfF32XtaFQ4STARTgE6D3jx9NH5jKi",
  "key6": "2JNGZBdKZn2AbAaMZ7E1yoNCFYsq6pwR8ysEZZhWkknEGexd7TewzCrArnRR7RrjSr4kyUfBFeYxQkETL4jrZKD9",
  "key7": "5i7DmJFWWmezxaiZj8hEVr1xWKY4bvswGZ9R3qiLuTEDmMfu3cUEEvDgKBfZtk1RhdPsxaQgVGS2NdiXusRKKNAZ",
  "key8": "4m8JuVeWyCiUqkCE5L2CH6T6mbmyea2pwJredKsJnXB23GgB87dmmSPphCLTdFCZ9a9C4nvVmi72siD5brkH4i9F",
  "key9": "1MZ9cFX2xDnjph9D1fBSe5bswxHxku93KpZu3nCBytLMabdaUxcYxpcTX6CMv4JfjABfcdbrUVvGXCxT688WyDs",
  "key10": "3U922rqdjTL7RggSUM156p446ucNUYL91o5E9MmtUz8rUPiGXjs1bFYdxczB1cmxCgfkgRog8uKzoyNCAq3S9Fk4",
  "key11": "239jkz74xvTsviTtjar818g9jLdAaxH96fnkePnTpNDBsQfbeyGQ8EzE1aj2st4sYME1jHU85VXmSZesYe7hAP4L",
  "key12": "5mEi8E79aoBisBvRrvowdMrGYhSii6h7Uf6hjfCmJeYZoJbtjLmNfFssY4m32VFczXGCTSe54GDmoswmvthpCj8r",
  "key13": "2QmWVeMFt8NTo6Ay41U2Frgwxo9LJPtCi5aihyx763zrm1KYrLas2UckLrj2tJHyCFyUpzv8e7kqPtbdzuRGqL2o",
  "key14": "4tdrrDnwWvxGyGWxYVTkHBv28M52E3Tw4fqCEJWuHJLVr8vUDwLDEV85eb4DJE3PspGchHEr7aWUWDYsB8ATVGKP",
  "key15": "8mcY9rNPGcX3YZLf36ioBGFE6RDccFgDNxRzeo86mrycrW6nzywrW5NoHdH21UaejpfxFjQAawQKTUCo3vRdJn3",
  "key16": "3Yni3tgKUeA3pNdJnW47cHGG44dcH7y3ZQEDEkfhX92NyF2zD8UYRQuc1YegD8DN2XKByUTbafu63iwFDDeqdE2Q",
  "key17": "4Ap7QBq6qnMKKykh1F4A3oecj4ENcue1qFJWrvDF75pyir9YNr8KeneZTDH12M3qJjUYhVQdk7sMtwVRhKcjfgrJ",
  "key18": "2c34GrsTZESm5ZBF5sCT4PGsJS55J58Q78NuYwN4KLsbdv6SfKicevw5T2NV5BztLqkqEz5ycp6e71qHbzoHxdRm",
  "key19": "iiCttqUQ9QEj8qrDPfVG4q6Edp23TTApisNndum8Aqk4c6KsLAs7kew6BVpEmZPWqBUtWHeirMBqGhUQE2q9j6g",
  "key20": "5swfFxWc2ZqpcAcR8ruxv4FjnNikbyQUYKb743kga1qxiTskBujLssS87Byttenem1BzxwskrNdo5X95pJ7n2TPR",
  "key21": "2CxYzsfVZjbHatdfiWNNuDeV64o3gRPGsvXkQPRgvTjN41LZGYnCjcoR8frpUkfNL3fEcfSdJ3dxEXydbWHtuqPZ",
  "key22": "4btDspYSR8WR1qfdrUqf2XHBXs8RMfaQgtGNsbEEK5ctB3vqbEi8rCbVFGeYwV2ECMKYwqbaJF11JjZBSXM1bpr3",
  "key23": "4aD7N4kzo4YjdtvS4pn9awqke8G3uY5RaePEkLhusMJRY2UQZQjSX6aG6p5GF9aWe3sRjrxvSkJ7qeGKZEBpBFTe",
  "key24": "4YEL4TAh2YgWhLVQwTjEZYbo21BFacj5GaLBrQc6RcxzCro4jNqp5pg8PVvyG6C53V7CzWPSTGxPgWvJZTsj1y3o",
  "key25": "3u7EFx8S6EgPCFKKJfHQ4Ub2c451aU8CGvoCtsMbc1CLm6Nwp7kcDCiTu4PT6ZNNfm8UreWeiXBS8mFnf97fLMJL",
  "key26": "3woyspB66GFoUHU15g9LhG3pYGrR1GCuNh8n4Qj5NjcL7aPoAkQfg5p8qUeMqkVVCjgNVQNoQ6KMT73i3g6tJjzm",
  "key27": "5aChutBcAWmyofvGMYpn8F4vDuPchWWwMdaWniDo6AoeMP7umVKG8oAz9Eh6kJHGocC6TSqYnz118DQCXGRX4xTT",
  "key28": "4jesPdVLRQmocXJz5QndmTVggYY5yqJxeeWiDHFw5rDUs5X6yDKRNoUcVGX1YRPurdUrETkELNGvv77zPrKhUHTB"
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
