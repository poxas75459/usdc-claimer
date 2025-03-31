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
    "5jQh7jxee4WMkz62L5A56dfLatt4CsoktQUFWwwSwaKj3oLToFioZ7k5boK4YZCAJdFAqUqieM16xH1xSbNPMWM4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52ao92QfFdZE4B3JeN6SgEWgYzyhPcdXS8pJ9xSs8m7VXkkobZW5tZvuc1awGmmQsxwf2oMT3VBmnKViNew4jgf5",
  "key1": "5MiTwesysHxMAUgAsjWa6BRRqS9K7jHqBuf1pioN4AipNyL6ZkQyTPQ38oXU56SJomv4Sy2GqcQ6hJyGr6dB9YCx",
  "key2": "3BeSgHZZuExdiguem7V22RM1hYTXQ7TTUh6mbcUHhy1ALR53BLbU5QgYMrxNCoh665LZbNcJe5HQuoBnTHCo96Ea",
  "key3": "5on1UcmZDzjbqzG2Hqr5UjDdwaJirXK9CivmtxdG7WHXNCWQxKEyJncfxkSzSCG1qYZ9EVAcsh1mXDUEhz2XqtUr",
  "key4": "4TBSXvWxBgqCxyVkr9fUU9d2z8xviJSccKpTzT65UuTdCenMNXxjwQ2xfS6jPoNEyVaTVcXdyVhSaDoWFTWPaoSA",
  "key5": "3ySFhajd7bAXCe5DcTA4XMQG5cWJs8jku6cwrs7wzU2JUSifCGCy5FFQdXHw5cxRG3YRTMP9pRhShdbj35YQhWbo",
  "key6": "4r7LAJitm3BXdBioAcLfHBXASWsUWSC8g5zUQ4P6jdmvtFCry351JSuqVUuTeFinNis9NS4d1FoffTnNPFhew2J7",
  "key7": "65zGG9a5AMT2dWrNCXDDQDc7PbFje43QGC8FV3XrN8T4JWF15Vw6ouNn7Yt6H7T5sAZGQiYDMG7jHKNeAuGg5rFk",
  "key8": "44mgK6PVSt5eDLkoiMWLx7dwDVcRQs5FSsxjpHevFaoWnyRm2EaBb1MZdB5Nnjrm6vix8kmFHXGA31tDjoHv9XLf",
  "key9": "2z5fkpwi78SgD5z5pqUvJ3wCrKHMEBJHqBsQ8Dno2uGE4eVfQRumGs3JASWYDfRehzp1v2gxJkwDHuHz8u7vddvi",
  "key10": "5uJq3EcYQwY55ks39dtEry9To9RkDF7Xn255WshgfBSjkDSzX9ffXxYQNkMKB8EPKJnaj61eCfQPaSyMqKbEqMym",
  "key11": "bLe1okmvagEVvk2VnFsctustLMUojUaReoYx5irEQ1gBrhLs7oZR53fkffTNM7Tm8yJTDgrFBGHU8gjWNED9PWA",
  "key12": "3PJFgbRf4U2qjjbQVeNXtMmh9gN78KD36LvRCyAynBauJkFPujRmx8hnnjBVWs7Qrmh3HQ2tnRDqPQT8x11spRzx",
  "key13": "2n5WvJyCSwrRYFJari5RqmX9nFD4MUWoDwFfUb34SdGpcffDcwcvs4xk2wmRyshrTWtMbF4soZ4Y6gnQw2Vm1PNH",
  "key14": "4uUzxHW3Lzk9Uki2U9F63qkuwNzHvDeqpSt72t1h2yiiwDAoFBdggbjHdyDoeT8tBnXBWjHnqY6mMZosXwSdbotr",
  "key15": "25UDqgtBdSipx1ybR8rFdbnoyawkQMyzgr4GzLCXKe91cC5SaFMv1JeCCEz7hqdZNNMTnvmdMF28a1pZfMLQDDYV",
  "key16": "Cx9iD8eZNZQSDCga7ghhuewTbQeGRMQZ7uJogb7kqeS9LXXSni5XhHrBgCttHipdu7KhPirLftBRbSVnXSxVdGf",
  "key17": "2618ERAWhzUczGLRrmQxWsZuy8S6mcJyMTn9rkGcGPbD7jY1b9piU9XEcY8CeYn7o2E2izk8cy8JQoJgHED5mad3",
  "key18": "3tuMHeayKLzvmgrpRxVDvVLMaPNKSMqDwwh9Xxhy2PJe2jiKsfhYtrsLZFV8PGokXFP1GhtqxKw3bRrAscdWwh6J",
  "key19": "2CAVVHxx5TFnn38g5iLXYqNST6RRLrR31tDHVbnCxB9TgzgfGQ35dB4fzzXD8TM1LY4fq1aqXYgH6CKEHQv7gUQC",
  "key20": "67cX2pCvoYYk1Gg4UqMSggdFTwGnLRptfVQuyZYg89gcUZFVkgtid5SooZgyfk6ukQPhF1DV6d2LUwpoZhCg9dT3",
  "key21": "2X3oBFPrLceKhGCF9Jm8VFV8t8QnbKLdim2xbCgX4szixsbXJDBtiGcJ6YH1yPie9AiNtmGjXVvmonjoRLWAkSHF",
  "key22": "4nbRU5X7RxsQanFE93SiATKtPi1cbC4xh1ZdwUn4yJBZ1DE74rrsKBFRTZphwoHtTZsLHGT9yTtuWCUJSZ4XAYN3",
  "key23": "3gFjWe5zzvi9ZgbRFA3Lw4KnvHm2dKptiAjwKjrJhGrQFFuhJyaqD6iAi1LsA1j3tzfA1BCwUQp9sP8UPjuci514",
  "key24": "4WK9xDShPi27paWJiJw4sYf45HVyrStvwSzosEcC1vNuJyZLaBUFQp1osM1ahpXqAXfGPvSDfPSHJD1hwJCe1Jsi",
  "key25": "5ZrBWHiy1YWZLnexCr6spfooXEn5gfC8GEAgc1yUqxgHfTnCLowpwp8b2S8pTaNCXg4u2Knekri83a3DkU4Z5mCH",
  "key26": "4Zw1JWcRD2AdKzLWmnVkMqNLCEzXgEegL1WwD4ZC6EN3MJLFzMjieoWBPoasY42n4Tzr88VDcpQjhfaoZuaNsuyq",
  "key27": "Joverz68gaNZXxvL7VqtBhMxUhDuAkSdVrsZCzw3ykDLDujLcUrFNkDnXNpSqQWVvdkdYffyKyRhG5C5sdmf3c2",
  "key28": "2JrZvnjkoRr5TZRYBCLpb267Vk1vbsEpkYsCs7ZdHquykGxV6eC9Z7tpf3VLoeKttyjt5oNfTrNa6PkJvz6LtHzA",
  "key29": "3tZXcaFtx6UJetVuWPSeNyonHMKu5zSozrAgEdWPbRmEE5Gf9hj1waWmiV6Tnecpkw5GJUcKbMAkv2hMyG4GYLiQ",
  "key30": "4YxL7tcTcVc4BexnHevu8xN5aPDxVwjzqDDhAif1h79qHSNDZ7x2rNZVwaHNNT5BJbpf3jCqtD88AyHyZPHEGdeG",
  "key31": "54EG5BTwA2tDbY2zf1WmUp4sjiqv9fDmwHwso1CtWyLMLyxEoNu3Xukjr6XtVBYWRnQiyjhFHWgyR42EKdxaoo28",
  "key32": "3qu66wPXWa1YMWAAWKHLiMRn8htevrE4Bric8o14eVdL5vngT9y4SfPPZTnoQm7f6X5bWkFj7DW8gAVqRE87BHB3",
  "key33": "4U9fNvqgSHRSAmm2afekzdR5Kw7xktpH7aphQejFJPVPqgPo9u1bnotoxfGQJ4vuWrsfEHLQTx4qxHcsSCe647Tv",
  "key34": "baPqsyE1MqqACkf6BzokztXufWfepPKGqS9Kg6xTkYv184EKsWubZ2mcQYvFjiFGDpn5v4f8pJSWJFxgDNCwMCk",
  "key35": "5seandUp5GBXFoa5XFcnWCZzWSiUvVU9LDni6HbZMmHRQvnVcTPyU14iYBuTSbdpFML3W4oVfqQdMC8wmdieFB1L",
  "key36": "3hpic1af7PkE2C2cXY4iEivkoritwQnngj6dYisTVt1gWBbb1XtnmNmKdL33CheE1KQC34ACtAq2gsTK3S8Xnorr",
  "key37": "KKZAb2w4oPBkCRpaePHQoZqMotHWjifFLwzz4888sCUZhwqhS4iBFgH3C7hVZW6JTEP4hYZk1f4Puw5UKMcjtha",
  "key38": "5oSRPiy2PNhzEGgob2FdPq1GfHPPF6FuDJ8MC7GDSE4m9y4AYScvA1FDhnxaJwL1n89qHJHLSz2g2ZssviKCuRUz",
  "key39": "42cnQ47YQd5vJpc7y7pQSofQ8sL2gs9VGNVbCRWFS8K81CrXfP28NJGpDHmGmJFUC9byTWp817n7aZq4U7BWfQDG",
  "key40": "2dJhjehGM2KATSqqQeM2z9jheVeRiviLxHiVegLmcAmCju5Thd5WHsryrD17mY5ziRWWiPCoE6hHeWuu6J9VDVVy"
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
