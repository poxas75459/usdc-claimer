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
    "zPzbogHC7APkiyPKBShHayo2v7TfRMwBFT8i9Lo6trKqQ1ogjGUo2BjB1jUgbE3KYaNmtV9Ax5YyEWme1AHrmhc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HvYkjtgfMUBAw51GrcZmmcGML8biRUSvnvyMEoX6vZWsuqFTnhUPS7sTqWFLiMU13q6CWovR8RSpeQCuv2V1nJF",
  "key1": "3nzCt9uPHoAnQj2YrMARBwyuoJBpEUqpzWUTw1X4G5cCPtcE33jYqLUo3392WSLE2NDgJzXnNXf3yoMNchJTbskv",
  "key2": "2YnVySSdpg1QKR4nJXBDeFgrk2gdXmKj2PAiLCdsnqUGAxspJ9b2T5LWkjzMdytpQne71u5g681M5Qp5sgYwshc5",
  "key3": "2ax9za2LBYgAZf6dp5j3duHu4rxJTH4om1jTq8nV6ZuJ1R2JYjLh6wKH9fnzrpuBRBLKuQu6n9ZHw4G5tDZXbt65",
  "key4": "3JQmAGZoJqqpm1SjPhc6yyvVLQooFETgGiJafJjmVcWqBABomkhewkq7LioBozYDEDSrLJr9z8d1UCPa2hZRJV3",
  "key5": "2BN5Xd216LABCNPCc8VPJTquZ1c4GWcJJhoDr6k6dQMHxaxNnKPtvK1TnzoBFJAWM3r86su5x3DiYHXc2NXzQGTc",
  "key6": "3VtMEGciBYQUBu21vAL4mPmUyvkgwAMkV5xaGysAAKFpQ4SYCwsB7hF5SEyiZWkkEDkZGs8ZF9NiDKbwhxe3aKES",
  "key7": "4wcaWdbnFNP7fGCrinMaNgrTedy9kpFEoEMQ2vwSnJgJjXJPN6FpK9xaDKNGFZNrN6Ua3EypiCVFFyEXj4gDqvfV",
  "key8": "5fJNNAs3bjWiefBY9rXRMZPDJr1iWn3ALcFN9iPJ5ACvVBGnJQ7sqmBiFLFRC76vggpizqW5cycRBXD9KUx55rFq",
  "key9": "4Wnqukyexjro9NvRDxQtCJii8v3v6o8HoZbirLapT31BwBmAq4N84ddkxmWnYLgkxTTrxRECg2NfuVz36M6gndYh",
  "key10": "2B3KvF6aWyDtYEHrTM3P1JB5TpWUUDmcXrUEaYg46PS6wGBkphPZ4ijYdL48Dj82tVXuQvffpPyGTjqs7ZzvyML5",
  "key11": "5pzrF9EasLMTZHuJQpmCtuBszxKqGBKzJsarGaPezcV28FquW5FDB1uJSKKfKUnBSRb5Xvbo8s5V2w8GtM8mpSyK",
  "key12": "5BYaD1Qe7fKXKDdMSKJnZBpoB8HNCU3hPCToSnX5xM4pe17FSyJphs1bzVspoRSiHtT4HFpRtwFcYF9SLH9QTQqt",
  "key13": "5gjze7evUeSXpoCmRZF1HkmL9NSp1BLNDf9kniJBSSmYe3m8cyiyyfKBWyWSjHFxJ9mdPSVaDu4aM8ccMSsnf4LY",
  "key14": "cJJXDRXp2P4bEvcqbmGnF99E6dqXPGKCCmH5NCnZJHGXPkRJDDp6uaXvyp5naycTLsq6BbhL5ySdXMHJnAJr8p9",
  "key15": "mBtUFsUsbMbLp4F5oHmnUSmNozzVNfxSZkCrqe9LcX64iDf8EhYLfpNguaUyA8Nudeba8xz5grCNuH18wMYq5i2",
  "key16": "2HU3aTjbXaYrYeZbqC5zHxCWtCvBUi6UFuNiKRYKtEoATerEWpwTL2PveW2pe3RHeGjGzyRGwVftgwFkiYBxqzak",
  "key17": "4Ec6UMHFeQYav4Kmna37KSaXdktDpgWrBU3Cm59b1FciWXeXd41zoHtwb4R5xVmiqDbRjKFk53Qh5g9mR2CkbwYV",
  "key18": "5QvsxHB74795XEnVGiiekpxf9FMbj4ATdzWPAMzfsPt1X1hvqrsX3JNpTt96TRLjTRA55usJEYffZ8XNTBXWb6Bx",
  "key19": "5wFaeEtvLP8UG7rpdAkfDNfR6CuZzfWRw5urX7SnEuNQ8HGdoasV77CKiyKfKJb63dzN1D4eyWvVWqmZjDU87SZa",
  "key20": "4Bd9iBPGbL9bppsqKHsGWbjNuipwajEAefiW8q7bVd4F3Uuvm8mi6h6QrLjTu3voJymeWETMLRQJyCzMZpPY43te",
  "key21": "2Z5T9HbSmsr1LxmQHhgqD1PJyqEepY7ym8bKw8HKYvYynKKy6hVZeLRz1vrNkmc5mZzn8tguLCk8wV5MnqHPjbuw",
  "key22": "4e8JeKt4yWQjLRsZdCTBftkREMD1KWNGKizWg5AoaxVrXQNxj5k3EgkSRgUPeXNuBdEpW1dxbjvHqz6hXpsLnXEv",
  "key23": "24CKEyYjy1pJcKWtQkeZDB1KvbocV7Gqmx7UFNyTYR7eKHXZ8YZbJRkg41ttGwC62Fsm8B1NqSriDbxcRgJLfA3U",
  "key24": "o7EkyxjLip32a4reQ94pnwj8eJhouortb38NeudVrJ54Cxwf6LqS7ap9mDCEXrSUje9QJNR7RYa7go1KVbW5uCi",
  "key25": "5WMyBG1yhdsgjz7oUFYZBz5h919LGuqGggTpcTMKXoZP8Karg8vwj88ZaRpdLKnEskfWbbSM85f3mwHXX5sYtq8Y",
  "key26": "5oYp1pvTbJcYxnMB1pnmzhYEijfgYNPj3PRvFb3JtRjbCEkQwbZqmrrmrpW6K24A9GZ7m6pWgDTQ8bt3mUJiKvME",
  "key27": "3xK6s3dcH812T4sWVbKYqrBy4kU7Tw1zNyzQbZbrRxebMAt7Xkj74dfkFX6yzVQ2ay31CEK1qcPcokXznkRdvxjw",
  "key28": "5y1ZZ2HbQupzkZbHeCsJ7YhMYisHUfUJSudbMMCdqvqAw2TisLtJb4kquaqt4HwUwF5qjWRKhqBRPc1UqBpMjFni",
  "key29": "25P3ZrF4ZTqktRtWAJcQwgugkEbuzDy5ugV8VJ78spTx1oa1DAAo2E6GMxEtBiM72QmhP5CSh8wLcYizkiEwzZsV",
  "key30": "3PAAJEFwydrQvQBXwbJK8pNwmdzFcQSymZgFQWhZeL8Gwajx1mUQCceRYGTNo5GGeGhTCUmnW7G9UeqkhuDKCsXv",
  "key31": "5UagqiBTccxTQphL5qgzQ9yanLS8xZdJ14FHCetomvg8LNiq7sgddbG8DPX8bjE34DAanhuRshyMVAD5e9uVxeSz",
  "key32": "5naqZhpcZQrdqGMF7U6dpKAEtExnNQDbs9sKGzV9WMxyP2aCZmB8m9kB2a9KCU6isEAy4z37W6CkDEiYmz6rqjrD",
  "key33": "5AB3cNg1WWAUMs7pkCcVdZb3h4VnStvjeoe4SrcVZ6SnuAFik8axgvGFPpZDnRVDkyWK287FiKW74zLzeyST48FC",
  "key34": "dDNF4Np9QHghXp5yMvRp6NjK7u1VDR4dfL2Pu6H2MSqWfdEjECXBkAVhqzm488cfMNc4GWZyd9X3UhnjYyxDXyc",
  "key35": "55MfeES9oeprqXZvcevE4XeGDGNF9NsYPViYWgU4fpX8D9jmMjZzCoKwN349YJeoSm6PDXNCHfbgVev1ZCcratxm",
  "key36": "25HW5US2kqEZQQsLCqqZBbgDczbaQ8DRCMrb9kfgoQmb2hiHhZunymaxrjzWadMrU3sTdu8nr41ywxwethYqXD9v",
  "key37": "5MnuZtsnYyLYHV4zvDG5zqfjDBHyCtWjWpWd1hKcqqStc8mG3Myz3xweoprEdMchZNwXt7M5V9DsnxbvPTb67wZo",
  "key38": "4jNWqFtvs1xGDTR2uFZwcFE2fhizbJF1AWK7bbroxvc2RfhArj9b7BwMXeySxEpxiXa1kZcmRojV7XgHDW6rTo3q",
  "key39": "3jBbTwpUvBZGTaJNhdcigndBkDZx86sDHCi8nA5e2aWqMv1mmqPeCT69qvgeART5Bw88YXC68pjF8WbDqfZARuN2"
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
