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
    "64UN1pAgpuDwqiA21P44z8KWMhzSZ4iNErjSzRiiD7DKSYec4Lw31MvY5QKKiLGev5KHzawBcqqW8ouFogCNiDN2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HmiiDUiTfupRPRFkHmSRSt2v2bBr2X8yA4Rcpu8cnT3WF7NMXBwHPevsMEJ71s1Jwov8UGzWvHqfbc6RSGCHkr9",
  "key1": "32hX3GwXd6mbAqGNuemWGwUt1HdKRujo4mCdySXjT9k6vwpLrdQvjj5w51q5qM6s7Uo2hMgQEypEG4nH5P6dhVe7",
  "key2": "28xTTQCuLvzqJUtWaeZxxYY4eHjmtgx6p6wAMpDeRdnG1WQa8EasphCbrPhDTA3dbZDU8Yao4pdNrPBzFJ8mq4ud",
  "key3": "3GukuDSnozQLvP5zzdLg7TXqJQ6jTmtQGh59gwVEahxCar4J5gB2TRj3djD2rvhWuA77NtiR9fdrH7jBLrkkH2dZ",
  "key4": "45Rge8Zgvs6mSSdb5S6BAJVCmYTqN1YJRw1hoV76eargPfoViVms4aGPcWjVTXYvSnCTm8TY8XBfX2EAygBi6ToX",
  "key5": "3owTc3hhN3eUMwjwGYr8nx4ErAumNbaPUbBzfSPvteQGrau7oxC5TnnpmFanYP83ZaHHV1Mf7zUDALfPggyuvMMG",
  "key6": "5rgNupCVAKV2fG8aqCWQ5Ug39txLUtCvHniP4qpJ22PkrJMW9iXkQQVGGLn8x19JxVtLpiu2cweXCU9H85SXKQUH",
  "key7": "LYAh4X8cGk8x4UbTB1tmsFxK766n8ve3BMjNxTAvxa1G3isbvAAPWGJ2HCwrJt8DgRQzwEtzHWuU5etPqUDEFme",
  "key8": "5kgGmxk56u8JkxRdLZxEyPJJF4dDbnQC7c9mpKrDFU43q1VTD5iahiGKfnuJXFYYRipEbVkSK5iu4CwGqDf5bhjR",
  "key9": "2JEJ8zgMzZdgfwqeP4FtSJAXCdk2gvKwp5jhU2Py1B6b5DpKa4o5JRA3F6F2RpYsxjmQgvW7mibE7BdtVotrCB5F",
  "key10": "2Wmw7EXsqL7kjbuidHC5zvgBHvZzVPFWZPSJpudh3vHuufMibScu3cvZjmGLhNSzgVoyv4EdVgBzsob9Xppr8BfS",
  "key11": "f853XhA4JaUooY1AuY24TddqKowRHCd8jDPdXoHWxrXjPBKuh3GEiz28NppeEu9SPgjrxRj2zRSNxWhdv3XWvmL",
  "key12": "4CYqK6c6Xj8iY4Fqtb575s9GsdJvbfiz7qAMVt6AMhqs7M2ve3pJYqi1dxXJYPYu6EzJQhWdBjLsfbgmpiEG8hnY",
  "key13": "1HY3icvxjJuJozMzKha6fLvaUgvfbE37XuHaSqCbwzJKvEctiW5qya8cSTRKvzWwyWNJ9rpJxmwAjvCDbojfATU",
  "key14": "irzqf3SFb2p4fUgxZqFMx28DftXoQJrKhCJkw2k42YDC4prv89LkzmvCoZibc9s649u89zc6RR5PkDvBnX2ZbRf",
  "key15": "DNao9wtFpQLVmGvgQXa44FnAvbdawTSNqjV2XThhxqPp8KhKJ4juJkd8Yet6VZeEKdw2oR8ZRQZF24sHQZxV81d",
  "key16": "3e2fqZ9GE6NgHzqYsVXEcJchDJ44DSS5wdtJbh8nxWJBiZYhrgvUSBf3ocmpgYjvqUQB8H8kFquFpzeanuCRqmb7",
  "key17": "jWmgzWDevho8yRAKNcZYrkmG524qUZ8im8WgjFQqoXUDQB3snMLLzZsJFMDz7E4YUs3xd9624n8HHbwRf9yCoQd",
  "key18": "3z9r67k1pjodazy1VCN8oAs47JSSmbHdug2SeeXaFaANZUqg3DiaRww88ddCoYv6z6YY2J3bpkzzKkmTcwYqXdcM",
  "key19": "4wenTZchAJRrdBYC1mEbTFbNSwAnFZsRZTEZAgob1LEab5gLRKQLf5CeNk4hzPr3t8SPNJ85tJywTVjXYjDiRSDg",
  "key20": "2M92UcPoAHiReH9ZnHs6cYMpRh1X9ZEGHaSTCLSPLs6wUfjKYerR57bnvkaHMgDCbG71Q58SLMcnpWVqCqDin7Db",
  "key21": "3MMpvfZFGbXEsc2GgqPvkpgpvCgagtStv8zwbctnBAzxrWA8ghmGmSfFgBuJ2Dk5VGVgXywgrWWoMRJQjtYhwmYf",
  "key22": "3pVAN4S6u3weGRWBo5p6kws4qUpywy8cTqNGxkVAHixKZJJ4j4JeNTc2VVYmiRjhgRWFFEPvsZ4bBFp7YXvVMBZT",
  "key23": "4ucpQvCCzuYPg33fw54532SDNSSDoDjStcdke1GQihJPgXGH9HcqDNSfmaXeNhjUwwD2LxxmW9V8N6reJHJztDh8",
  "key24": "5gFyWrkvB1thKDFg9jb2gpGEMqYQSGKTps3ra64XLNj1JCVsgDYFjLKY7ZiqiHGKad4tpSXLguLjKu2pd4WyV5KL",
  "key25": "62bdXfQ9c7yixGbXzE53SWZT3pHmzQiTYsBJsEK9RtMfVA2jbHea5mLtxYAYeUEbWAsmdzXCP2hD7Vsq1UrpUfL8",
  "key26": "5Jf5DNk1DR49bFLFbNb8uR7fJ5w69nmRDuCUu6BGvip6A9w327z9xp9RSe9k9GdAjUms4DD4aYrmh3QPwKL4KpYb",
  "key27": "4mHtJyEbHTfL1oKAn15xFey8dfHBAyqPqNVvXST8iG7HXVmskes9De6Bhtsef4XDfDNA9R43tyuTfeWYfwGFpLV8",
  "key28": "5ZoWqcVpJvGx7U8ZDtmQJseFTcL9eJaqdUgFzxDqLsBtqM7C8v4pM5rrnRKkU9PUvX9RRSx32rk4Crr1zuh6zzEN",
  "key29": "2T6cRRz7g9HzTP5HMZNJ7gH6cy7ksHimDu9MZSmgNQbCejfpx35rtCyCM9pHvwyAnFLoKF9tL1K2oQtjS5UiwR8q",
  "key30": "5QdxF7PBqCiw42pXgQRJ4WfZWAHFUuEFMxXCASGrGHfT3AXjCGAJEhiFWDBHEs2dJeaGV97hn9Wi5sHWkYWkES6W",
  "key31": "4RWkQYXhq8gqYHwEsdRw2KAy9Qr5wxNdpFJ8P9EvBkRVLUyggNKhfF7TFYq4G4Ldiw1YuVSadiyqrdHg92shtp6B",
  "key32": "yq4zJddQuBRKjgRmrzvTHhQQ2vvFwuGCPch3DiS4T6Digz8yCBd8MnHrtQ8uJBgJkmJYD71ABrQZxHy356TfGPz",
  "key33": "3M3E5i9G6z7ZfFQSBEYrdSaS5X4BQuQ8Tvk395gzRAqASDAGrt7cfQaHqqAD86Q4412hyd69SiLRkSr6pq9CtGA2",
  "key34": "9GAh1qq8QTQ8JQnhKidVsqSYBqUz57XWQB2yRmT4kkNn29QFV9PWr3vhLzr3AkPrNHvf51wMJurNt6EwTbNWiBy",
  "key35": "8BhH4Z5rzkYB8ptRpqJK1Xt9G8wPE68PQpD6fs2kxUNMobU8LBSfzvvLHSofoY3NbJYLzEz2jE4kuqgbTLpaWgh",
  "key36": "x4cAXTA8CZVqK2zSbiRyFVRRZ4hu5rFqD3Sx4HQvpudpHSe3dgxQeD9Rs5ZKG9ZDxFS6mTTutAGf3oMA18om82V",
  "key37": "hJEm9tegGxhU8ADaqp4cBCNPcXrqVXjqk44rQvfAppGBwzRd5Y6XoMqjwH3ULBMmxW1w2x3j91JRMHT3bsSyPSj",
  "key38": "4YKZhRXqhP7TEn1KErsixHPTuvRsb7MjdZR5SERJykGRw9bTQh2mxCNB8YiS2gCQDJpYJ5QcP5cySKEyHoqwhR57",
  "key39": "4TjXpgnJer1Qn626m5Eox2DKeVXjq1djryb3iRxVHCxptMVYc4oiM5VpnGd2hYCdCef3QEMP4xJXzyYXL5fsq6Wp",
  "key40": "5DShNf2U1PHAXZ5MQ8WtWdz7tEFRxzmNPwQm2kWhqQS2XamiHoZQrvYFapvGmAnJfi7D5F2pWX5CzwvDtS5cQYZ8"
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
