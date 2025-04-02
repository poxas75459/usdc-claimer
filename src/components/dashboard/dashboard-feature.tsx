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
    "S21vW3ySzFMreSC3zB78wGz86sLrooXrNwFakemkk9v6SR62FNHUdp42zahem5fP44FA9na14CgVGuhh8jnTYV1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mAjP3kY4ct4stXGYFe7HqGgK53VnBc7DenVPRG3FtTmX59qhS7tQ2wDNsUEwM3cKWdneir337r7LYcnjCBcgEc",
  "key1": "53r14uvwjtimbcpw6b12XmqmpXHuA1vcAVEgZym2HfvMQUaxKiDoGgvPhhqQor3317GFoiekBakWHMrUH6PSbLXd",
  "key2": "61kToYKE4BR9WtbnyLfLfHePDHrNjas98FYxZHkWq2JVjqe25WhpB18Q2Ukh5pmfKxQS5CtWfpKhV3TwMu34SaW5",
  "key3": "5ZQMKzcPQbnhvB2gae6eSoejkyV7m3CzR1mrjDXJd1F5wX2wSZZU9c3MRfZi2pByaFXN52CdJcUUGkTb2DRrDom9",
  "key4": "5oTdc8H2JwfeNW344Hx7LF3kitTC6ARHp47ktL2aMZSjJ5C514X7SD4NjJmyKm4iDZaNjgRpieqgq6dYj7oyUsiz",
  "key5": "4Y7Fxp8mT7WvmF37bJgZKMvaXLqeQKUF8Q3XS7Mwxiv2NB8xAEXnxQzb8X6LSsHqHBkx2SN5n4pbPo2Y3QQzzjKr",
  "key6": "2TGncfmsBN6Z7vCCbiV6KLvSjpK8LapG2LcqqFnyTDZdnHCTomaANWR7ShjeJQ1w6fGEZqKBkzbzUozwG7tyor7Y",
  "key7": "4X1YTMNp19f9oZbzFzNXgeuUZW9MeZVznH7rm7SPtWHF8Feo1adh1LVhdUzvqD2e3kewrnKmdYiEEcXtt1F5fP2p",
  "key8": "4AqED1WDwd41NeMRtJhqRmggCbV8J23h7Zv9JgiEtp3Bd6bKf2VKFuhJXUMaeWwpps3kCsC6PLU92MisxMYRFbNE",
  "key9": "5x4GjnyESKxn5ugYF4nkRY8ZMAUPUNQb9owAZWeGa4w6omamx5xHUGbFzi7LckthvbzCDLtrvC3z9XQV7tmYoPtP",
  "key10": "46sVJC3C8HUgjV2MASGnjeM4HY7iYEQJKv7876WGKoT4UYUDCmRQpuw7Yg4eChfBC5Mg1FoCVCFMyYhLVYMiZTGz",
  "key11": "61yC9Wdbyyggs6iHLU4b5wX5cFMRtgsYipDb3SvzREewrCRy9qr4HiwWVWViEJvs3bCGRAbW5f6s1zeMg9rrncGK",
  "key12": "4tzLFPLjLogyK3mMkA62EWPumFPxtQz3w8P7P2ZDkFi3yi4Ub6KNXNmkjzVD5uMa7oyzxZ5CenEsWwfucgz7w3dG",
  "key13": "2T7rwMq7SHSQbrVpt9ScyZPYkbnY24jPPFNQtc6KeaLuijc1HHGdmXGHjvaMqBFUW59TTuNje4aBeo6CHpFEaY5J",
  "key14": "24ds4cw7ngHWezypHmwkrNFGvsqdAMWfdmPqsf4LEhFo9oAqPdA4GGnJnoq28n43iD3XtZ96NQTTStc5vyJCKzmP",
  "key15": "5ETNkCoUJcxaSAK2KauMPnVKA69xECANw7bi686Yt1zLkH7iQeLqSRthZe6QtfpSqagmZNKqoiLzuo4mwvG3ePSp",
  "key16": "2bfPA6zcgjX8q2LqTsoc2NoL9rEKwWpett4BykUaoM8ajNjUX4bXhRW4BbeAPUz3HjuMqp7XshKyXPhscDZgvo2n",
  "key17": "2EE3PBMusuyvxhbqfsCfazFid4d7NsYGt7yUHC2ErBCZi4hWkk8LhyfnCppPRrJ9QPyb2nQ8YPAdEX4kCkWWa3bj",
  "key18": "5a4jyiqZyXKjKCcvLLDbmArtfKfJcfLvHhur6DZLB7k8Mo8jxnWr2cNybRGuouFRFTkcNUSQen1PYcsfX3TsveD5",
  "key19": "e8BWxTiyVYp22dGx7HkM8smZnQeY2R3sPDGeotYFH7ALpdmWcpzgYScN6M8gjtJorZLwsXsT2C7QygN4pNmvgrL",
  "key20": "3SREzsjD4U46o7unEXCVkma1Kh3aWEaUFNuNLg2aRCjYot8TqynZJm2XNQkT4zqizZ6fnAf19oAXEuHrMqUBoVYi",
  "key21": "5Nx5jTvvjegpukhFUM4cEMmPfBqbLB69ZYUL86WwNFKqDYspAVN99hnYjquBZD2KSGDbtX1tscrWzX5fXxTowq9C",
  "key22": "YxpR82ArMSNU2h1xoUfY6cv4TiJdRCh67rBqkojiZ3e6Qk3ThqDc6TBUWfVKYxPfBE5enwEUSbz7ypce4SqXfrE",
  "key23": "3dhu6C4JnUFY3Zk2UB5p6FY9Dhtafv9EfNLaLCp2nueEWFZKUDD33aLNwdh4UMUnbNXqGWRk5mo8DLKtdWMAm9C2",
  "key24": "5eaS5268xzh3CFu7Khfm1icRVzUMzAYpWLWkiecppCTAiPzHa1pYwQ25XjXgZvkoBx9pxrYeU74gu6kwkHJ5cMzK",
  "key25": "3YJYvCfqDRumS6amLdWBBmhzBfWuyc1UiKVst3n6RzSEW38A8ne8moxVEEdLkSfYS8Cp8cbvCibeLssCLYg9baVH",
  "key26": "VkrCSPAMYBbKgQxQMBR4drwneZHR1tvMd3BJHvMbPRtyRb2LpmFbJBZeK9YFBQMb9VrNq7xahFMZtZTcvvHu8FE",
  "key27": "2JkkumuWPY2jMxEK3vxaYGJb2EVNDgcZZQBTZSXieczWkcLLoLEpsStM7kS2fniyPpmpjTiBtDWMkNZMKyHTrB4v",
  "key28": "3VQeSJXkXMFJnnpdvPAYFSvsWMNCaNQVDrt5SwiL3VMjN95gKbCRi8FKqftoGCgrhB13rsSdcVfNWvuwwKQYkN2m",
  "key29": "1wvyuvG9B2uUbyNswMBZMjQNZ8PxQrPxKUZJdxnxzoQvufcAQRrSsymXfktZbt2dMb5AqbyVxA1AGq4kv7SHxYX",
  "key30": "4fA544LfDrzr4jn7a2YdWNynseDcNeQemDyr5YZN3CNGJ4qbzJiFmAhDXFzyRQdiitDo82eYLXvu7bLFx7MYkf2o",
  "key31": "5WhQ5ifwjxi4PTPskCvTVrABpvxj285BL5JEJ5Yd6nV5bwPd7DKp8V9PF2hdgo3octhB4NFwiDuMCUGyEh9uE7dc",
  "key32": "4mWUqKihtx4vqWkpccj1sgwtaxB3KowJURrXvw8Q744FPGrFfuiDT9op7ZgQtGrkCtwS7ecHv4rMKPxVgXUZ8yZi"
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
