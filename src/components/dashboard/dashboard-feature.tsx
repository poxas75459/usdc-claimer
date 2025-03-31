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
    "acTBqXGZAEw3edZ1YuTmX9PJLr9aNkdppsxjAPpHztJ7vzNosE3AEsXQYd15kx8BKQ21Koj3VDqM8WHPU7cFuAL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bsxCF93ZT5UQMAGbwiYNkCaQDo6tDmHRFHAHMwNQaLEYtDNdAYVMGvf75ibdxJEn78w48zSqXDspXwveR61mCz3",
  "key1": "25hvBdukLGyscwSTBYvLYMwEdgAUKgyu9DzeKLHL8H384aauzVKvGUtiP7gDUYSXBsxVL9WAGq4VMEo6kE8fkHr8",
  "key2": "5b6HHy5j5KE8oJTCRJGxVrYD1jeKRciaYByxxwPEz6VgUfAKBJpSaUod8TSYduVXWZ1VjJauj9W546vnV6YSbtGZ",
  "key3": "3wrW59yrcfhDgVVm74yjp4MnQmc4WzjtyoQMXUxiwzEEZQvBoQghkcDaBWkRucHRma9CJoxQe84Vu6XuWrofXUaE",
  "key4": "t9uui8cUFwq9pb1XXB2WrSWSPnLGLV2JjFVBtLgp52mohgoP4GiehW52QJiXUxUYNsN2znTp1eMm2yiwKb27oTs",
  "key5": "3svgzMyXMc8fEHvY1im3RPQc3RSB9CTsLwSP47RRvpoxmemxUoeD3GUykAFsfsV5z7oMfBV13BEnpRUsgCQ3Bwix",
  "key6": "4dnjPayvmnESJVcUx2i4uSXZ94rK9BFYJFSVWYBuLJSyEDCiggksuVrhf9CvaSNmUsQtSvChY7MV1B2rSLxZZ1vR",
  "key7": "4RbfPPnfG5gq4z9eduYJZLvjdnT1oMaQB1MfXfhAcpnby2UfSNRj7bvXqNCQh98GLvubZezHYun4zn9rm6Bpwby4",
  "key8": "5pWNxmLuqLrPMmzCxAdWsYofic92w4yAkgeNVsALjRiedHAwsZYCRDWWVU1mUoBs7sLzmryiMpJ8oz8xfhKU38y1",
  "key9": "vcp3SuRcMuQBymXCgCM6N6NZqp8U42THSJJWfKYs93dQoVms3Zq4gAojCJw1aoj8u78tTDjQhUSLs3ju6RyQmsi",
  "key10": "5sCd4xVWecvVorWSUCYKMiAeZju7fZMgfDcavz8RvRutW9Gm3BB3TSp1hmejvBEnj5ax87pYRb24mcmUPQtQZ9kZ",
  "key11": "Z7batpHibnGT96H4sMjT7R9123j1XD3GH8nZgkMmitndqKs5H6p4F5j1N2YEEau6mz7wZ4ayg5JMT1UrLbZAU7j",
  "key12": "354KWb4YeYT81re97cG7sPbzVvAntH3WMbw3RSBnjGV98iaRywcBgJ6QnPHtKLC2AoC5pHFCd9tT3kLSUTxesicb",
  "key13": "2YPRLQNHuo88VwQAa6dK6mEeh5hHAcaUB91sUAfxKZMwwNW8e9UsWWfPK9k2bFCfXiiuEHHWY2PG3wvNCoxZ7q76",
  "key14": "3kTfMbdYTiwyuEYP2CFyK765k1JSgdnPNMxujxPiPga9KZy5QSZBgeD7WW6YbDJHw6PxYoYi38PkSYenc9hBK4L5",
  "key15": "37Gy2yrj6NuoKaS359ibvQWsB6Lh7YGeoNsfHQDr3snWPYzoYbDiWuYwysKhUdFYRZA4hBVefYL9TgZU6t4WFt3u",
  "key16": "2jDYL5EgUvmrMEr9a1CPXCSyofKGrcvXfZZRsu5sYjopWeq9VBqCbSqowbtioj5NmuSu3iJFAzEqNcfZWyP8KpMG",
  "key17": "5Ks7eJsRQeWPe3jLivhTz7c3mu7B3sNtmHD2yFFDjDHrHEuYneuKUVm1AXXh2u1Yo3DEnJ3WdSvSmNqtxQ484LT9",
  "key18": "3ZbrzuYFMCwmZyK4zHF7Yk3JwhuRREH8YNcswN5X4xNGoFQsjKhZ6t67YaEHL3JvMr9yNUio2AATJVxdMNrbgDzb",
  "key19": "q5wfKwMsJSoxyQyegrcBw3K4vXJaoqi7kbfSnuYtZrVCReULWqvcXExqUFjdeKqEjSYw9b1JubCCF5BLCwLb64p",
  "key20": "UuNnTsgaw6GeRnQm2MbeUNfEkT6iWzNDBzkFSw147hc6A646Mvtecn9fnpY8StmM6Ruz6v6K2YG7eP5yScW7cnR",
  "key21": "zHk9AMs2yfbaLyDkKyd5AX6s9X3ZDZrbS12DTLT1C1NBuXaz5Srsgw5SAnaPHyb4CcJGtWdcpDDstkpBR9TZ2CU",
  "key22": "3f3T1Frc3UMbQs52iYgSmKGV1QVfsHAFkDmNUd2SQELtJSHPnRTEC7TmkHreHp9aq6p8fd6hvETwCmBVpvwh4Pyk",
  "key23": "3HxMbqwV552Ae6eZLngrGCitSxVGbcNsjMrvNWtUCsJzdW4uV5U7g4VdPjMkLsDvAdKsPekKhLYWM7zwFVVC81P",
  "key24": "2Dd9W7jiruqNkGn6dX5NKuetBuVdeN7cUnyeaQkchoDsKJeKXkR8HAAR7fm6gSZ5wyyVk2X3FE1pEVL1F3GKhBtu",
  "key25": "2WnsdRweMmoCnfiTyqN73JUqVR9X3P7y2Zv6WVi8biY58JYJE9xpd6CiR33fB8zzhu7isgHe1Tc7aYYv3Sx6JPfo",
  "key26": "49XuDN1JT1ZjUNnU1tYsW64jGeSAgSeJF4DAwkm5z6Es1kWXpM7aiXpoY4jfpZMqQqcsF2j2DszSXBjC8kC6rnNV",
  "key27": "3SHZdn7qkGx7PTLTpZGt6zCBf2o8qXpfE3S6BWVn5d6BUygCuo84ghFpej64awoF5LsRQoU6SNc17avq8nbX44HJ",
  "key28": "3KBXw6yjndmPKhZE5QYcpXNozDJ4DFZPEZasrYJiwFWhRWUhDsekchKgMaGRCbmYwonERx7YvfTBnV9vxJLvf7PV",
  "key29": "4AHqGyGB1vhztHjzoKGvC7PQQpZY6xsjmGfTGmo83mKkUF2jEy66VewN2fWEMuvbNaJVNSPrgr3FaSeY723Ay3ez",
  "key30": "63A55TNoKbtzCAtMRaAwDZJ6T2nXd8MhBGRstM2PkGG28xw9iyNvpN1xt1XFG7CN8sTu9auXQk6hNs1rGKpT6982",
  "key31": "3LcAGpVRTnC6UK85uTnzcpcri1hGsDEm4gApBQdnAXvmfztRWQf8xmAuvLdSjDdT8G9pFoCdHgoMbmDC742trRw9",
  "key32": "55sBKQbcGC6PVenx4xDBuvYkT4eEA18AokiTkuFfSu9PKQUrFfYJP7fd6cDx6fDJhVFJybTVMxLJTAFPN1pznPiY",
  "key33": "5MnhvwyomQooQYacaNnifZiyAy2EvkmCt8W1GkpLVBcHV66N7e89oq5oJ8UVvaFkcf5d6ucjnFDHrWnRe7t9bidt",
  "key34": "47xuh5gRG3mvrPySc5twZSzhBMsRBptinS3vYx4txX1MuanyrQeVFHKXPcazfh1mG3sR6WFms7UBwSGWup9o2gsD"
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
