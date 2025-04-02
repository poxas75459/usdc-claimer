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
    "2xGKH3mjuWQgGCfx4EF1GtGhFDSSJcSz66exovJSQ1jxQvCSzuSGufk5Qpukvk735PznKfr7exmxUcWRQxpsRyj2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VQnX8aM5QyNuvwW1vtqnB5hLau6Va7Azfw8gLmsUL9bNaB77Y4cQzdZJNh4xWGm1DVhuoRpKXJMpXukzoJuJ8fR",
  "key1": "4iVey3UJt4qwjm4A99tgG3dtUrURJbvMgwmQRwNkTiaJF8zgpkpej9L7fuCZap3rLHMfcmuGuYv4QisgbXz7m72n",
  "key2": "4977WfexUA1ZNJXXktKJxFhFkikzuJe1z7aokDcQKrGTmMSRmE3rVUhRbWYkfLbmvfvvWVG9XfWNU2y4JFQX1BEF",
  "key3": "62HnMZNWQ19k64jVf2R6iSwJtXcQnhBG1Hh1DBeBQGSRRyPs2cJSHFtQn5vYGkNKQkMhJFMKFLEeSsgE9xkfWcUp",
  "key4": "uYi4sQvPmecQSCzChsQzHTDt5AfEn6va7dD6UTGQmEjqQsumjSgyNDAvmHrEQ7xMBYBvHUhrC6dQDbHX13eCpfz",
  "key5": "3iB9oH9u8ADH3PAiuDPVhHDVYGLWmGsTLjs5S9VmeLByDPuGBCMFqo4Wbqw8Pbok1tgrGjVGWEUDXFTMWiv6tJdq",
  "key6": "5oV1FguzdLSp6JwHekmxDqYNdHJCEfewAtApFwnAoxBH23QrL7SPdARmy5UXgmdgqUVRZeVp6dcSXgJ4KkL2wypY",
  "key7": "4N84JZ89n3HgvGSs2hfRaoTQMLJwTDdpTbMmzFycZ5JLt9bEpt8J18j4Qkfmq63ginWSzaT8KzkjniY5fHFiwzNd",
  "key8": "4o181f8MttRdEMFrmQoXVuhJC8Ud1DStNFN6dHHiM31K9TT7hv7SZcXzYsHdShxZouA3y8wiA84SbWTCnAiya4Wc",
  "key9": "dbB55keHJjmdWpZSJ3Yij7uNuiqvAHrZRk84CXWxd7FvtoiEyDVDCULVobDaNBriRDQdaT8Wwn1XkJLYPzCJVmC",
  "key10": "3FatWS54KXcBdTQ7tQYqYu9EZ2Fqy9qpNr1RgfteBuNm7QPCAYpn2uQX5SZAF1Y8RLAfYbmDESdYGCmB9xdebh1v",
  "key11": "5UGKd66eHYFM4RvTJvbULcwomuN93nJVcv1mtmPYeUZLhqdnMtPLUbxK91QPtto7yBjMygv1PCbVRhy59d5r3AV",
  "key12": "5RasgZ6oy5RSwhBxCUVZSoKL4zRDHKim6idXSUVhfY9yiBxEUAf5j7dKBLQDic7dSTd4Uw8qvF3MswYS9MD4BZEv",
  "key13": "SNpBZ1Q7FNTq28HHnKyu1yDgjFdMJa6Vqs1dL9icC1Gxf6kFTq14ArN3V1TebVUa9EZjqecFwM9QKcYGvP3RwSs",
  "key14": "4LKkX6PuqiLvBtLPApTRZRPyAz6P3zGd5JGuEGKA8CcXHMDWSAZAu3fqqb4nqAR6AAYcb6gsvqfJoF835aTJSasm",
  "key15": "3wyZF1aVuKh5EztgGQMVLp8vZSAfLum3tpaNDLkBXWAWEecprUhjP1FLWa7SS6SEvpf9RmHxpvBrU5RcjJSov486",
  "key16": "ws8qAY9YXB7RppiSPGHy3cTRanWXgLecK3eXwRViVjXyKg3dRS3SKGfKtbPci8nfUWin1uU7Yieqt72knoobzLY",
  "key17": "3cctxPV9zhHhq6khwKJWr1FKgaUFuNSxnnDcrRfzUe6izegX4ZtYhKLU5qn8AjuJsmMgWdQ5Wz8YMQihJTQDBjbi",
  "key18": "gvhm5ueYStkJ5HWu6qRrkJ5EjGLJH7Jr9QpRbXEZwokCbcQEocHBJ2bfRZRQN4mYgon8VnEEmvTM9n6yN5B1WA6",
  "key19": "4dbGhi1ENAa6Q4u5xLMFzavgxH6Pwhjxq1QJ6kafUWbKLN9osS5FdqF5RExBteWPoC5n885mPKzaGQ2pyksZjS3h",
  "key20": "41amaNp4EWM7mx1VywdfHtoVpzrASfBpLCxCKE3R9mCMfMgVYn6rPg9QZH8Kg9a18V9eDyUjmhALV257ph7EU231",
  "key21": "5DoLBacyyYi5nPbRjYtbs4MfvAnAYb54vaX1HELgHB4yGabYrtJq4Z38DXaPmCcLHUp9pQoRfEGQjNEWUiTkCLhB",
  "key22": "mE5BoGvcgNYag97NT6LbKRtzjwttyKzXazt3RaY582h2fV88LDz2bx6ufvV7nEpSgzT3tPJFbSrvUvDxY5fDJrx",
  "key23": "3HWYfDSDiDs1f6DBTYDj9rQFTNTUPmTPGsMD45nB46gC5eqCJFReF3cTyPsyxKrZDhFrJ5YqCCPmP7QF78u96AEV",
  "key24": "3LWscghLN3YSvJbuy75TricZFxDBCXZRPyG3GRD45YDfEH9ZA5RJU7nEo8CUtojL2VNKSZWsR9MPuvFQD67EmiSz",
  "key25": "4bEagcJfP3doyvxaVr5GhnBiqTTJMAghnMacLfb7H21HtDcFAvh6Et3SfizvU7Cjfbss7kGb4h2tZ5n6P27aj8vy",
  "key26": "4odPUgBxQ3LLyrHPgpCmZVaAkK6v89Nun78TZb9daih9Bx9jZ45Q6MjF4ZhHaERw2XXdm2HbB44KpFC7BxgCrgj2",
  "key27": "4xBnZe3fqd1vYcJQ5voY2ymMKKaRRoDvQd6LU9G1JGsE6jCwZheoyHSs7pidDRnv9mdTpxuwdsLbGFvpJFoezja",
  "key28": "3BtPghxFb6kf164eTHk2gdwew2hHqqSmeA6ZhhHRbVQz4vJLGB2VvBu2bb4ncYsjXpo2KzhMmdeYuAVbzQUfQTzp",
  "key29": "aubHNCbG9teq3trvptCuHZgGGMtF8wWY48DxGYKGuJVweK25MEPN4myos5bmkB8hN2DUg6UZ3qToPMfCNymz71e",
  "key30": "4C9DqHic32Pd9meJ117ntPbqUj7DNe827PkMK7mFwBSSXFvMLoNnC2PzjcYM5hdfJNs3zhNxX34qnT2X7GMxMtnW",
  "key31": "wHr9SS9C61LAKuXMDm4Wi9KmvFuMJJWGiLMfmWZQzieGSmKULbvzSejfCdpegDCwh4y4a2qoLDXzScR5Vi6KJxZ",
  "key32": "2pA6oQv2drbaV9w864qtkdZCooCX9N6CwAo3JKisxr3g9KmxfktXvcXZgtT8515nwcLMAX71GXvQhwHmfgeR1QEM",
  "key33": "wRP7y2gia7xPnucrcUqyif6CmJdtXHranzkk6DotA94FZD2ZYKWaTF8Jng9PeD7LgBQrpkkwnNj1K1Tj2hhxnxY",
  "key34": "3gATUB4oL9NcucRssFQasrP4zpskUV49AHCAR1Nzgj5otBcUzH9q7i1f25k36KQjzCC6g8a8iMA1kjHSD7VdJzqz",
  "key35": "YSSqLMteuryT7HCXeoPxZ1gAc1qeqV8DcBHP1n59NXtF66FJvqMEWk2aHFTyQ1Dd34kdLZeUSowvv4vT8Wh5Wiy",
  "key36": "4zbDbur4UsNscxe9n6UBSbXpytAVAHYbnKKaG8dHenYB8okmAVVduPYnjBTJwcQH8aGor1wyJvshDBuqT9fDqSPx",
  "key37": "5wjr56hW8eQtcSVCGW1UELtQeabzDtWP4Vf6x691gUGJPams1UWmLg9ETAgxDJeyjHBtoVjgGHNRAbpih6KBqFvU",
  "key38": "S9YozsUnsFm4eftBgQT7An7nKQTfE6eMSah6rAP5tXk1R5VJ942j2rEtnST8iGFYmkpxqqecKLeNPQnDLFwJ8Hz",
  "key39": "2JVMeFKUfvBt63wDfc3oHNr6bkfnurVQZ1ZYd79GZMHQPb27emgfi9PmeSo2YFCKCH5kAqnuZPGn937uG36PXjpc",
  "key40": "3q3Cid8hkrEj1sdGzpnXgtaTQJZKfdwfJ5ZNBXBqjQJuUoaQ7jV1igcNSzH8AHF1Hg58BqBLV5cNfqFp52LNgYJ4",
  "key41": "3snG2QjngKU4WDTuNwaHfp2KoDmJEPi7fmQcFqxWXDzTDuTCvDvSu66LMyjCT88QxVx2NZACA3dcQ11KNohpBf5U",
  "key42": "w1RsZxzBRbicRfBP8XGozacV4g9rQLRvVXY6hRszpYt6mSxowSbnNswyW4pHSA6ennMHkVnRi3wB5uUeqH3QAHQ",
  "key43": "Ue5eihp6Kxs6TxTxDGeMC2J5EwudACiP1krezygUfyFebAj21TBGRU1ipHcAbFWGb2PVAsjBqMytTqHcoNCEumB"
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
