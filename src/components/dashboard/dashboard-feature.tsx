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
    "2i1fuywLxhhCAZxXrjinjTm8ukBpoSVUW4ph9ALrstmxkddQrijyGFmrRN5i3oHqcWXnDti6PHHAYJ5FfehNrdVJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sLzxkQxXakXctMWGAgA3bXfsjU2z9F2btbWd6AV1Hw7cdrcrvv5WV5FMjVTJ6Skr49fWNkfwXiWvpWkywiJMWFx",
  "key1": "3MxzGv7NxMBv9KJ9DkRW6YachgTAUrn4mkFKCHCbWCHkhYCKnR78zsK82ULLoMkmPusKobYSDXXRhno3JZn9VKKg",
  "key2": "4Mm8RAnkMqp7Wr4f6xYDFgCBAtB41bruMzN16DdnCCk8ZjTtMaU3CufebBzdjmMQcDBCJUpVkKxDne3ktnao6wPs",
  "key3": "5pBq9fkDkpwmFnff4HyzZWCoMWo5kt5R8sKM7vFg8pSwbs2bLR2kAnyWFVYYxVgAngmgQxWfN42aCqXMXr4qbkk",
  "key4": "2p3BpdejyA1cL9Ks2WaCVjEjxtmMwegpLGMvFiiY97TKT7nrFHGCcb77qFG9AqnCSTfwegmqd9P2MQWuMjsigBS5",
  "key5": "43MXB8f8QNeiebW2oN4DGnuqZhQ3k5bg33gDuRa5mcAF9yXaApjYpfQSCoXQGYdD1ac8nhbY2NNBYbRcD4h2oUTi",
  "key6": "3mbQqhZT9DN3iv6QBeQY2G3m2QrzwpPkNvqjcF12CzFQvDceyaLsg2nmAhbyT5EQzihrphJycte3cZCTapnsBLkH",
  "key7": "2XhavSsbbP75vFDjsCT253S3LC87Uu3EfAmWL8v29SpAHn27vToKy58C4ixjkrvVLpuGd8GR2UpzVQdtrGTTXFsU",
  "key8": "3YM9pZZBcyxVHizxdT44hkb9Fw1oJbzidmgBt53FRBgX9Rb5DjiE6jT4sVb4xs7SBf8dqn4BewXM6d9monms681N",
  "key9": "3qthrgk8FRxEe68rr4drT9rxan7RcgqmLHB99F94dnJzFkMpdsMtjA4cP5rNAvJCE3MQrYwh5s2A4MNZkUUJwCoc",
  "key10": "5xbaQfAkfKEuoVhRgiTq8EUjoEdZZvRTec8EJcgRdr3scSt6HhASeW1uJf1ZMf3qFKRTMjoH8oALYrW3kVAEZKgL",
  "key11": "3GagkDHPZsSZ1sK2eyHwfN7C3wjDV6k5G8teSM6t2aXJjZh166aPmhGrVQrpnWhF4H4xHSMQiTGYf57NM83PopBw",
  "key12": "55PTvDpzN3kwkL9zusdnEzT546HMFoPNKNKjFJ5MJZHnbh8yfA8Trhtnnkbsd5X3cE3sqPecj6VSqa3cQoU16JUP",
  "key13": "FD9DFi9n7xJ38Btcr36cCEh3GxUxPVZqphAzYVti9PnooHVfwcFbmKmCRHdFtBzGhRA6vQ7qtsshz5m8ivR9h7f",
  "key14": "4XtD9P7JP2dB3xM5Socth4GnZBYfANVsEPNTYKf99mi3JLQNv9KeciYAqJhoDfUTFezbEfgFaEomXMoHTogGFAxm",
  "key15": "2Y3cHjyY5isfuZPwz1XsnefAtWHMYzyo2qg1zMq5pWad8Jz9BUUs4LphAcz3M2Jm71QMWRKJafP1AMLxUHGa53vw",
  "key16": "4MdgNorHRhY3Yghd7NAddQMkb3RaQeaN2VcC6wacEuFadNUxxohC93DecyjkgDjE1eSov4nYKUc3ixf9xHeoEp5R",
  "key17": "3AAWcdD2rKKoCgcSbZx51psR3nnVcC9He8GFWXFA1dxRiTe9rw3uiJ67Qjo9Tzcma9r7AzZ6xiDT6EweV2x9iWCg",
  "key18": "4GTndB6LYXQYLywQHGJ8GQRfCjiMe6YBoDVwZnP2aWAezUUSEyXTAWF8BXZJpoko9bGEtb1QWRbMPBVyL8UR53X1",
  "key19": "ysQ7Fb2u1eezydngCcp9RtxDfBP3SXLSodBHugSZEaekNx6JcR8P5Y4tDAVFmrhYHMYZKpGQv4pYHcx74KfXSHR",
  "key20": "ZeyKHXquF3hX1utriCiur5h5KJ9LA7mXBnWK5v8V67oWdpuW7y14mozSXDHNsrU25WbC76jpMy7zKhLPaKfXQ4M",
  "key21": "3yCubPbMA3T1eM6ZXceuwcCz3AbPkiYhF7xwVPDUL6ixkXNmQUYioSgLsNV7DpCywz4mV4ESosguNJDU5eVtTwvi",
  "key22": "2Cw8r5G1DmHFgAhJu5ugiXGLWNCwwVoNojjFnYLosZrqCSTsrjQcff7SDeTDat6d1QuqbGkovE3XSQPf8BQsW4XG",
  "key23": "4URhD1TXx69Q7tuoUdpUHMj2y6SM9cEZNxMwUJeWchTfguMujJ43eruWmkWz26SG7b6Vaa3Btzt8SHwzi3A9iyTd",
  "key24": "4XYiYbgzcVjJRaFkVimcJ3j8b1MmvmnFZDwpES18yYZNoX46mMBW67m9oxjZc9U6rdt6Ds2ZRiuZpokj3gMqB2gR",
  "key25": "45whduLbDdyGXM91NdPnH81UHDcbv8QtNFxvrZCYoZySFA12YBTDWJ5ehFScSZyFzHdydZ7c8XVr5LFizwDWVceW",
  "key26": "5VCMrGVGqe6PtYpVgQyxMGtRiY9aLWR7rWf9CnBvh3N2ddywjUGiVfRkSzfsX4WTDJ536mFtXVu7CfwoDdxYZShy",
  "key27": "266oVWDpLVnNjWw3bDT1B8S2znSRWA5ZWJQZaoPUYVFxqwjAUCgvpAA1Dzj5yk9mSJ3fSQKLnxKwU8Dyyh66KhK4",
  "key28": "3b5PE964WJ2B3Pht9DPjJ985BLvQiai8X7M3zgdFcQvfWBRgzcoyTx1154SHSyVCHSMmEbynbDFCYKxJizjvcrUL",
  "key29": "5pidakxqcYViosFia6saiRfWReuR9hGsWqwCjJu2q2RNLncJ8euyazQfMcFfmZ1QqkG3aC597iVHumTuzdY8RBFj",
  "key30": "5YHaPnaw8YqFM4MP1Rofm7FEHf2q4evvj69dc1ZPDm8WdCF1Sc8Dad36JJwZgWDS2DE5moCxKjVPpwe1e5BXuuud",
  "key31": "2rbozhAq9NHaVoqyGaR2or5JTh1y8jRn4GLHBM3Fjcr2UxKMqeAqcDzJu4uS37HiWzMdik55ffxpWpZkqhprZAfG",
  "key32": "e7f9y3A4uiz1s7ytdsYnLxwkcgs6pxU71hg3apkyz9SByn1gRECLFXgchFJjpXi8j4svJWnqidYvbWpwM6jwZhQ",
  "key33": "4iw5NgzH57gpdnhajofxnDctiKvXYWekcFcuhNCLvnNwqxFUzAkHTiqTrzBJN5hdu5HYzpTCXXgyuYkXSMtp6oot",
  "key34": "5dSfU2MTj81p1X6XkJ5khh3rhjy7R2LhkWr6x4KtkQ2aUvkzGY5TsB7WwUTaVXwQfcvpesLJokE1kMvtsdscdbvC",
  "key35": "g47XpDptoAr49PwpAcNVEbXMFvx2dB6t4WiPfHHdU7UQuFvTkErEKQexL6EMrAyRVmhhnsTXxmUFDpsAqscQ1Wp",
  "key36": "5ZKjQWanEarUQeZqwEg83w3dncA2ePzseQq86Rd2fYQ8hWK8NSbXW7zAQeUwV6nkePzGgr41cQb4twDhXNMxeL1J",
  "key37": "2M4AumeaB9q68GpCDGkn2tTsmA2LpgEoLGyfQXn5E9UqsixZNPukCQNhrXVrjX2YihvJAFzhrvvJhskwddynCSwW"
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
