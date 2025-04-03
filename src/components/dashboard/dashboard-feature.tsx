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
    "3mDYPAJYn9HB7W3owvFpj7AbXCtHens9XsVmFH7CSaBxUzWJgSXrt3wxKAhzfjerfBKqLxvH8ojDtfefWoWrS2gp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57bz2xQqBbeuJ7Kg1qeCN3KjVe6EM8RDXAEUqK2B1KTsfmPLqzsMdceoVJASQebcyGUL1m7Nc11i2Cxm58qVDKJP",
  "key1": "4ecHhDa4fUqFrwokyjcdGe4nHDSe7sSfwxiZEg9V1gi2SjfTimYaJDzx2D9uLWqPUaDCRJQoATKPJc3jXmJAcuNk",
  "key2": "3hQpJgDb11uFWpnvPVomYv2UdVTeptC5bJX3XcsdrMfowyJB1Eg9kCXHuRF2rRfLU9qGfWRiaBNcfopPJaKfxfXB",
  "key3": "Xsze9Z1kQFpZrNkSUmpCKgo3EKoZrBMyDxwLeg6KVJydFULpQsoLTxofzVwM2hoJ985c7b1WaSSSHsecZ9C64oq",
  "key4": "4rVbe7vMJtMH2JucMfMpq6z7Z4B6CkviQKjQ8Z88gG43wWSLgQtdjboApXvV7Akd4Kea8Pytvd7QJwqkzAwWE489",
  "key5": "ce2qLFqm8THotiwA79BYGVHZfrm5xd4gRAvmt6xvcK2BnzfNhm86HBJ8r5tpnkuN74YGnJo5hskzKDtDWFwMs9F",
  "key6": "2y4Uver4KdgzyFYHa3wQU7Z2bMxonGsXcV1667Frh1ohuz7A5ktp1X89YF3UgKfDSV3FQfXk2sCR9wzfBYa75W5t",
  "key7": "4gjht9EJbW3oZmvVRaWSL9nmVbGo7wwLXUWccthcc4MyYZgpSL3bJ3ZVnwKhGD454VtYAATkHZxndx9EZoqZvwuj",
  "key8": "5q18aVK8izTTzWjQx85vqppjAjyvkYNrREcvYHTHhSr2dYXCQeM1L8uyeoF6r7AeASnHNzpMgEJAxKJrAVaBLicD",
  "key9": "48H7GsSub21haoPMtWKgKFGscyBwsTwK4ooVfDrXKAmPzUw53msTNqomnE3EvC2Vd9PRYmA6Emfu6mGou7SEj9ci",
  "key10": "5PQssb1o8EskzhMa9Mac1eAs78ms4ZuXzgzyySnwGMpktEF1wsg5VsKTe119tAicbRzCn53XtU2HwXDDuqwAuyoy",
  "key11": "5z9WRZka91C6F6xZbBV4JTb9YdDRWwQTUkGzArnrW7Lpy4yEv96dEP3KWfoSwWpb2d9gAnjCr37TKWH4RDChMBEq",
  "key12": "3ePCPVq2AcaXy7XZf6NQerGT1SZsWEEp2VQ7krfss7hr4gHz8oFkW8FEow3MyF4pvgoUjHz3CjSbos34f7rj6qt3",
  "key13": "noB7957mgjtW4QGaivnqepy2EDFUWiSUwwGNhKqhB29VfBusAJBw4oWKhazcawGFgcBB4jzzeo1bAhauw7YHmG9",
  "key14": "2fJpWWAv8C1gaoXKV352CFhy3ZVMDfdR4PxzB9kK274gXJk4Eks36ZYSpvDQ28K4XYQwpU5oqNwYWETdMj4yZ2gs",
  "key15": "4WwEwTgSwtqJLneUKCkDqWvUnpVMk84wMzm525fYXarS6xeS3NCfPkur1xjWsphXPW5apXHgJMipZbpZMSZWQsKT",
  "key16": "38BVEt6xjsZHsH3yWkXzj4AuyczentE82GAmBeUihq46hUiBpe6Dpt7ihwBoARzLoWKSYKscv6p69JZMQMh8pKFJ",
  "key17": "59xthVj4DShUQuxp4yDqNq5uumYaAgb3BLoTZNPRLCRDxuAYEAGi9ikjMT9Fis7KDeb6SFqSsUCVK4iLqGQ2n5tp",
  "key18": "4m1XjURaoJfbtCp1q4vyE1aecSLMrVLuBPbhEpKTQs7qA5b6D1WnNAu9QZJzqYUp1Yrgr8dEFSBcifUvG8QLYfoN",
  "key19": "5VE8dTipuXUEukuZmJWf65vyXHxDvekvuH2gLUQMvitGsuWHMFN5yBN3B45L285eMBJk7pmDaq53W4EhZHoCYkw",
  "key20": "FALZjpN6Tv9qVW5K9TNBVUxuUipPidgh679s8RafJ2SxbDF1Ef5CGPgfBzMSgMUENtTBhBgvkxRPYoktNSZKnt3",
  "key21": "4gsqzWvZFimcpK2BvPxCrzKVXps5kuFNZTm2ZpcuHDayZmwK8XJuPaaXUZCCUCq5ZptQbFTSN8NvSxFu5D5KfhTg",
  "key22": "4oeRiDxB37Y6UP7gT8egSBPGASVCtu9Rw9fXMmsXDJzkBRiQNBrVaztaV6ZPyZwKZ1i3scTZUZU2yGgVKqGeYJEM",
  "key23": "4xBbXyaXCYK7kqpdyxrKM7wyDyJiszif9P5Hb6XVMukTZWKnDBLFcdYrKkBRcoE39btgtsqqtaLYCYNKEbB31uTn",
  "key24": "3v5ZNPXDbc3LvftzLezfAS2EBG6jtH8e1M5HfQL5vspseSLwfounnKbLeTRoMXpv9G29mGN4TQes9GMb2yx7Xvrn",
  "key25": "3C6gTbiNNcWnJt6xwhjDhRdcG1PfzCqp1Tw4euEim6fKchRtStUtvyxpBH3Kqvx33wueuXNzWHQYTQKSCEpVb1P",
  "key26": "3SPEgnjnN67e4XATinrPWHio5k7uxnyt6KZUz951mMDgAJUqdD1TomBoBEsTHVz5nx8mNA86UHS2famnuxQ5bHVF",
  "key27": "5zCg1oPNRstGyqWUqWxj1J6sKLv5TbCKfxKJ2SmbWByjfukPBWY9ASvQYA6mjBaZapawAtXARf5MQQwn68BLge9e",
  "key28": "2QNmM1BbXRawcNinABEx9dbgFS8H356uTM2j5UnfmXxiKiM7417z6EWuhh3FrXTvR4Hy2WF34CJMLAcbPnqx6ubL",
  "key29": "5LnJo4HFdhaorA2Gmn9hLwGaNgPY23Md5TvxtTfTMMAkz1U2AasBnpLJmu48Z9DRWr3fyEPhKuW9hRWR5n5ZPszW",
  "key30": "5mTVimC41V9BURupBURRFQ3vYKv8x9NkkaxYqgMDqdMzpbAFRo8gASZGbQhiCk1XuSFnJgGCBNgFU3YMmtQCo8uo",
  "key31": "39VWfeSdP45NjEXJNmJoqfAmbKSxtdqqUfSHsTptGvHgPuKuhpdDciW3TQxBgVE6B2RzkeYqQggHDuQiYxzeC8hL",
  "key32": "2Yp1XtYwazq4psUtEDXJkxw61kPRWVszLzAoinAGK9peys7XAUJKCJ6D1R6mVvrcMucppbChL4MgF2mYrJf2jRL7",
  "key33": "3D5crWVHgCJQCd7evcsgJH8EhBiwTpP1yy5w5iD6ikotbptwzT4ox6h8FMim2j1CUxmZidKuQdAdaXy9WGGwwW2F",
  "key34": "4Ct98eSwyBz4aR3zLhCycME1oFBgLSr8RUm3Q4LgdQFTpDC424qjf7N2hpRbNGVhWCJWTqPfkmRM6NAHABevVx7Z",
  "key35": "mmvnEUeUawkQ7F2HpF46GX7pduerAMdRTVH66qEUZcTVKhYktagqRrX3eTq3CNW7moQ4TKgwXfwR1Kpxyt75eBn",
  "key36": "4qJqUZiGYZXy7j2Jq4qCxo4LrfPK9m2Jx31PPiAZp2TY3zsvqfbwJviUqhPCrx1Fgt5PcFKefnzXLojLYc7XVA1r",
  "key37": "4vKQL8omjMBKvLwxq1NvgX6Q7fA3PN5jMYEiKwzSE2NMRLrh28noBX4uTCsbqucHvfEB77ocX31uKkLoPaqTXSBQ",
  "key38": "5Y67H2H823M3Zxc4DnFpUyChVH7rQjqqq4LP2vhjfCFj83Q9r8dNUXDPnJruTeEek21VRTNr7toQ5rdwUHzVKMLY",
  "key39": "2F4RLajbnPQt25HzAPt2s9QyoTrzHzAeWQeHmQ4X8iTUs2mNqWfexXmu4Hye1gWmgZi1jRhkTwonRnNQtTfsuKJH",
  "key40": "27w2NWbitjd5Pzd5sXdfmRLHgNTn2hppFzfRq21zNaSziBiW3uSFbHHCmrCmgZDgWcycXGwtTLLff6yhpbFKqEmD",
  "key41": "7f9L3YqUbEe7AjyPci7DuQbdyK33GdC77zLDK9QtNSg5MvnW4LMwqxj4w4ZTERKRX2Td3LkFmmG39dQ4TV3c1xM",
  "key42": "3LR6Qsi2Nd3Bzk8csiaWYRNn1stfR6ERy7PMupGKBawYGvcodcuHcKHFB6zpnkLAd9bVEdXpbA96MUMnNtqprDmy",
  "key43": "2BsyETCgHpVCdAkgVeb5i8qvEwtzNAUZBrVkTotCKMMcMAhF4zzYbLwPiMnBn1tmbJDX64iVWpsdejtraXkyrkRM",
  "key44": "47ou6xWCpn4RHCPzfYv9r9DHhsgQvp7SksX1CAygkm6m9wXbWTmCoHyTB89nWcgH9jQBQ9RL4DpjrRz6dJ2QAToR",
  "key45": "5YconWXy5XMQRkcJbogcGzJY2kFDZGax8f548CLpPJyCQEZK7eteKnpyqkgw38wbzvz9zXQzDMKSA51jDS44VWy3",
  "key46": "5YZABZLDWHzonF39dbKbVfug7ryGVQ4bCS2jnKp88BP1NqzA3yMqnXhqsZLeTMJM6GRV7NFCQeKdbQRsa1gcKz7f",
  "key47": "3KLymkkKsNTWPMwZdjY5E2WALHWLHBar7MMT6nk14W5h6RA1DvwxsCzksVRFDhaih4UvoZwiFGrgFiVbjZb45y56",
  "key48": "4wL8tGuaRudR58VbLZ5odzdTfhbydbaFjodHin4FhwCj169kNzcKPcnKr9Akg7kYNC94xm7PyE6yvBk6PhwEnMyw",
  "key49": "Yfmx7KqrhaQBWz96Dy7x5HKAs5vv7Mt8jHfusPzcDkbzkjeeRWKPKLparPZTAQZCarkQwEmg4XKqvuPGoJfM94P"
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
