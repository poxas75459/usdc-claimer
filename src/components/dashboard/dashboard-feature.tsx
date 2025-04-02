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
    "2YrtD5o3TgbcKiAJ6D6mPcEGJacNdsJHoGk7qhhn7qHEagrX95NeMCdgEHqAfaNd3q3WaAk8StpxUS1mACyAdRs3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NMLpTpMaoKzzB9hAhNCva5Z8SZaMNy1qs6eLHuXsvmYEWBTXEfyD8phoTjbYXb3swbLe8byvw7ExJ6SENcPf8hx",
  "key1": "3TBF84Lyh13hFWgFiYTYUmGeXZpLnh8g91X9dT3CU94mhsbUX5hWoYwVBfrejF7NwejgUMFZ9D4D1oSHSncGQ83s",
  "key2": "3F2AXXANWRFUdU2nXBH7hr21vP34xFQhv7f8G9FZu8zi17qFTwTmV2M7MKgCThUwpaMtfiCSSsJ3ggRyAANmdnaX",
  "key3": "4oC2jwsUG6qDzXbtQsxRV7NvfoBTMavd393swg6XLyrUM9XZAzQBSX6eMoqqatW8zwrZx7rvtuuSyeh8gcqMrYyF",
  "key4": "2TMyXVw8moEZK9vWUYDrrbgAuWQKWW2bAfHTYtmL3xges2j8DdfYU3pPeqeBV5KVsNgQuETvBEAGsBgLyz2uXcni",
  "key5": "3EtPAdows5ZBWEqPU6U2m9ePtqcokH35DBAEfVAueAm1GsAGZpvCsBy1pcGieXomgpLiiJW2G1Cr2QNgWyetG3s4",
  "key6": "5ArcapPuZXQuxkJcbgES5J8YpT75FktsJRnxDp2vYHB4CTK576x1SKwEBvqr6VfvobR8ZGjgHR5SR1VKswrRFbMw",
  "key7": "2xThJL7guqZtzHPo9xJxsCjfFMtDo4KvRKV9BZEmnrqVrdzgEn6ER5qgFYSrBttTcLtYjDKt3mGv7NtPJq2S4Kck",
  "key8": "3UBRHZx9xAxk3iokzNFVrfrryHoVhUukAtn5KLjdLHJtLQ8ehh43d7zq44vEbwR3Vj62zurUPbexwcCFJZ61752P",
  "key9": "4UoVRDFfaexXWSs5rrtsN8ZpPAitmSu8R1FEsiSrJUTSuTVVcK7ugbrfpsJhsw7UjVZohLkbBY1G2bC785CjtLA4",
  "key10": "4Vhok3bSp8XMt1syZwYmjfsC14536nDzL76DBu8P6DvRaV56PW1ZkNykaWEjFP8wGznThL1y7aRDH7Cj7anEfB7J",
  "key11": "2CfVeFCVhGhtyXojVb5zPRKdG7NnbXEZbRjRQ5DD38rUb3uVWNyZv9T8fgb5sVqJwgKD4PbYhtL4QwocK83qZ67x",
  "key12": "5YYCpgh3xC8gFsxW1SA3erBZGkPDmJGPsdTWdKb7DZzjNYQ9EC66JpAqXUXDScjKvQEp6PmjS4vAk85KNQUgNuPc",
  "key13": "3pZFakKFFFxqsDRq9JxBctHzs6C9i2ENtvjHagPYnCWDKkcsqC8GMhkDrFqwSR2wtMaREzdkGCyLELKKvJpFEcN5",
  "key14": "CtnhEHxoD9E1H4RkXXMiiTE7HqdbhBAYgFXEmQycMBXScz2tvLVD3TfdXzMyP2JXq3gorBnMcDbfNDLWHJ8frdJ",
  "key15": "2GDxjLF8qQ8iN4wx2BxD2pEWqZPFu3Tb5FSWEyjKs6oQ63QQNrZzsZab32w7xTEVVUrERxDm1JXXdknyf2WP1bm9",
  "key16": "wQWJw3KaX5ouHvnLF3LQuqjv4pAXZLLyAW6xYDshbYoza5VXoDSEmp4H2Up19j2KQR63cxS59Bqjw28xzMHzhKa",
  "key17": "665vxn7XNWLcmbK1qcnyj41omXYXsc8e5avgvwk7icPvCjCdyiU4wVFtnR4qvQUKuqVyXsbMiZZUVCdD7sjusC2M",
  "key18": "3nbjiPEXsUQxRMSYC9VwJHUuQSiR1LQFp3XLoNdpM3aUpHpAUXiqT6uSgQorUnnFMrhBTQiLQuNx4QYLVqZqgfwo",
  "key19": "4z3PKWder9xkbmAso8sjgPr7ZzoQ1W6KHh7DKA6D2zm7XYyjLqU11FdEiSVUuFuBZqip6RpH24wvJW54DndtwCjT",
  "key20": "mEbeKbKBKZbvu1nXwLANxZaDUd5L2iAkX9iDGafR5gYRY7jSWvy3ief2WXJAiri2oezp8KoEJPtgiAWG7FkoibF",
  "key21": "4JS8ZLfxG318cQgh5u4tgkPU8snX6vtkdwH3CWVCux5aWwnCEZP1ppybY1D4CdXLQvkyU2WcMUpytxWL87oDVnxf",
  "key22": "5nYbBE18j5U8RLw4AP9My6acSh32bEgmPgX6RzcZSCjvoo1FCRT8Ms5x9nSPLQWurg47rDSLaTwC4h9r9dEBqai4",
  "key23": "wcP8Sz3BVWNBR2vizP4MgurofPkWUZyeWdxuPN6Dder9pEg2HZ73UgBXiGjnkX4LktY2FKbXz5DmZm1uLBdrAAJ",
  "key24": "4nHDyRnyEdPVcsy7J7qThCMZMvS1A4W7FzXTFPKXSw8cRXFHbpu2ReaL8zSzKBeVNGMmxCsrWsBytkFsT5J2dJ4x",
  "key25": "5hTmg4yPDSGMT5D1HHSJsyAWpGjxHEjb7HAbfG33FuzFAjVfdL7GHkLi2bNpPbNiYfmMSVUhSPDbUMSZEurhJLWE",
  "key26": "3kBXrPC3u1feC7NWzo66QLX2RReXi3AJPZaKy7LocNPrdpzmHv8iumZhbdwEt8ggj8Ydg6wue2SJzYSKxzKzQrj9",
  "key27": "31XCHjnBqFGbDf2M6tEUJNRCSmAWNwfb5f1g3njohTVJRpMFoESQuw1LV7bSWfXkkFhN4LhxcDUKZud1xEZU4VSo",
  "key28": "3cnwiXx4nofJWpeKCZTLthGfuLZ2FuBwpb8dKJCKJ4DY45exdVp7XDNgkFsLJ5MaEn8VjcWfod3U4mMwq3QQ8r9P",
  "key29": "4XfjoLzvvaMSFqXYfRLqYKEFzvUhrnt1c5tpaYy5tFdmtG5sZgMoPpENxWWb5ZymzRdaBGXHGC6uTyQnatYVBeg7",
  "key30": "FKz33QaDrowGKYRSfHrDrbZuhDM3CMrwerQKDJ6vWLaWVc5GszBfs5x5VJpZoWwCrfVozmMEhSmnKsqqcdLKV6U",
  "key31": "33g2gejSrrfmeLE33jCndVKydw8utSeH7wJ7rPiSpH6y2mAqVmW1Uyz8vUHzjXMLfEBKUugdrRE481VvMa6diNfW"
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
