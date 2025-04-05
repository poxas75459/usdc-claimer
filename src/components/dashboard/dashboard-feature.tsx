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
    "wMgWCELhEVHFqBzwCkskRxeXyQPRqFBEzPV9728xKMqrdGs7NBoE1gAPgeewZwKrbuWu8HA1373af6eqwFeZyTb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U6FQKHWqBM8S5ybCTeNuUV4KKTNA3kAFEx4pQQKPrZX9c4q5xS5JatUqwteXLuCEhNZqWgpcwdDdsmVDVo44z6o",
  "key1": "4fVAngxQVafyrTYY1xkA8b1jhRKScqbCWrtrCgkuDPC6G5ueRo2Pyy692cuNJvUZGkV9MSbPgEESUcK7DRvfEuB4",
  "key2": "36nWYABcP9RWdijNmdkBhhSA4FDUMpfbMkteBRuEjqQjDf8A1dzyCG2qn77DF7vxr6PmjESzYHtQDTNZmyjRzaLe",
  "key3": "64ixAeSTFFoYzvhL7bMjEm6JNvMjTgYdogUFPPu6MRtiUJZBabdQhq69PEGp6JLgfV8uHr9UV1k6na3PANBDp451",
  "key4": "5hBYfw4gVYQUrqd7UsZNgvAafSwjL7fyuUt3WKYvztzPjT85wXf7Aqo6r8AKvhK6BpTH2tUy9bDM6UBGrezLLrxe",
  "key5": "2uZxpwfjrisbU6GSLA1vRR6iYkeNUj2jzzwkXaNDFS4QXocx3qE4EZuzmsPrBpPiff1Uc7YZtLPENHoxKmeJ9p5Y",
  "key6": "2ESMEgZXSqUmuaTmnp4N3LuEzx7LsPq35NoVzbcRNRVeecQJh8B3x2N6MBj8tGDTsr91hB3hqwcVBoXz8sM26gEj",
  "key7": "Stg2Pup3Dwuzhp1hwgvD2pgeR6BgccchSWKogNVmg4fLHA4kT9ZkH8kGiCHoJDuFuATs5vwkgTFNZAJhWKZ2Ebs",
  "key8": "EJmXicnd2zHfrKY9FGyi8UMjs8ZSx7tsKCJYC94qWAqLsumxEnZyYfZNqpGLLPNs8fug8Pmrnj1mdHb9GNejF31",
  "key9": "2J8nEaJWAvoxUZZFp7HdtEzXdJyPEX6USxqnZ85SDNaX9zj5X2V2ce21roDTNSEru4pfUHTy3PtMtKTQfzaK5Nbw",
  "key10": "3gNArXCPjabDoz3pNGwK7jPupX2GdrxsD9a8Nh8d7f87TDj4r4gC2em5so56ZBNbyttFRwaavV6abmSr4fhSWo9C",
  "key11": "3jqGagsiwfzy1SKSi3hWPVNLH6Sx6FhE7V7BcT2bMKu1SzVU78vFa1TzrfJ2sua5uHs8oevM4D8nBTFN822XhMNu",
  "key12": "3nKpKeYmMaKWeJxJJmCzWtXTni5TRHPVYcPAAHNWxhMxVpVPchrZUx5d1yMuooMEkGkoZLtYgyGZoX6sn4kz2L7t",
  "key13": "25jYbBUaSbzBKFvB2U3Hnpw9ZB7VL1Q2vFYCTLQF2e3tfDYoVBoJzpHU8Uzjwhj7pCLEUPs8YDh2KXEv1bj93xfH",
  "key14": "MrJyw83WJWg9PxjR9ek3o5w5B7iZgoCcND9XCFkLoC1yPTu6dLpPXX9bdDp2fBJ5gy3WXybYaYgbP7LXLu3Au5T",
  "key15": "3wUvaS9DcCWrK9q3Hs98ukDyTBaGmqMbsWiqP84vR3bcdnPY9GWrL6o3m6TYuK8LzMLaG1v2vkJpGha69oMEf3P9",
  "key16": "YctpCBBm3XXeVDHNcFRKtJrd8ekCZPGZJCHegC1SyPHNsuZEKFESnzdRPx4fH4yvPiKqqasYsp8T2vdbMKo3E3L",
  "key17": "MguKJkc83KiaFYw8romzwJD4DUBoZ1LHs1PFSbkT8FxpsEX6gCkVAzxvqcQgmSgUbX82QnfBXJZA4exLudZLGsx",
  "key18": "4q6Mcwv13PTcYGAmsMR8ow9zv3tMBDSZH15WWcjLU33wbagbkvKVDXPX1rbkm79RMiJYH9kz4ttv9bnWiNtjt6jc",
  "key19": "2nv7XtcPzAMe9fjGs7e79dmWabWqZJi74bygr5i4WeJA5bY2YpHf2gmeziggVQaNftfM5bguJaPN41t5XMysWM7Q",
  "key20": "5f1DJbntmeWQtmVXzixN3TckGueCtSPKFTLgWxWvEzHxdmWALwxeYoY8gzPGg6ZVaozWdbSDdmZWQhksXRBsprtC",
  "key21": "4dje4Aee2XNme2LRTexTBkcEu27T8268yqtvmxwGa5QF5szjxyBbevhkBAZEQrErdP4DC83xLWNkNn4YM3jQFjzU",
  "key22": "52QeXHp5d5LaHsBjXkV9DxBPhGjQp11SXwaac9pEKk7yZbZBrjUgcd3u6Cnh4h1ymGMfd467ocAJ3TDPW2nScgDz",
  "key23": "5QWtmKmeNwHxHuvTpWxhQ7bqLGBivnBbNUo1aGADWo2K5f3pKt4SZbZfZStPQZuUnmh26ypoEJvHxGKktCkMndcK",
  "key24": "3YfPEgRUgEL1FMsB8mgWMFKryAqRtAfHCS5YUoD3cDGQdfoQcyeMdJn9A28eawu8ph72JCVzZiGqfyKc8kZZPxsi",
  "key25": "282Xyd27JcmpnVmoFr2y69E6VkKWFAAxJQ88siF2DEq8VBXYtPRHpkKHyKnxrAHsVJ6dV4tFxgaJC4DdbKvfKgAQ",
  "key26": "43oYYDyrgETV1fBHYnMGrt7xwoqKzH28USQSSzLuFcYzjH521D8rkrGPpJSfr86CpVRBQcqKG7KVXKWbbRLrzES1",
  "key27": "3W8wbPe92hptAmvddw3pYSD1zf92hMfpM1UShaQ4ULeASiQQLgSwX5JLSXMctRkeDsnvV4har8bHpQ5LqBX9bJV3",
  "key28": "2cXVND8yKRoMQbcyvwH1JRVxUa3n3aLw1V837hQUMVVyZnUg6r8Ccf3yFxBQrXK74vQ2dQyYnFdFpczZkTPYUSTW",
  "key29": "5kknTx2hQEVxxPFWhb5JDhzEa6zuyRhhGRc9YVNTDBcPoFmMjuyeCKJxWbXHhqtfRMbPJqna8VBB8yirApJbos28"
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
