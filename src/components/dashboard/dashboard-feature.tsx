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
    "5xPfb8hy5TxLMEvCNiDaqswYWLCsz9rq3NBRT2e1UWR3nSR6tGYWrbLpjDBMFsxrdSQ7QbBXq65vHNbrSSa5nZPn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zkZBHYjgtcY6oZNDCwMJDrYByVDUvQfhPGchQyQunK7En9BwEtipDqYK5ciASE9KWRM4ELuwU6qV27EQTcNcv7G",
  "key1": "658pJmGRSY2tCPtw4M7wPWT29mxVjiyDB7pJH5nU9rh1WhtFE7X18AwNt4RbENqFnP8WYmEw49zehRqfRrJWsHTy",
  "key2": "2D5hDco9KyFmx9wvho9yu7iSHqz18Fxxe8mtgiWhozTba7utshAa3gLz1UmxYsb1TYjMwTcQM8mQbSaGfB5KkKd9",
  "key3": "2vd85hgPiX4iVHq2SGJ6dyCS3aYgeXyMvz1vFf9ECQGnHGqYqJjfCwjtapvsAvEyGZQMVFmnZBzgrpt1Qm9BUXLi",
  "key4": "3ffBRZrwwPogbzJW22cakz9f2tbuPK8puQK8wnbwhi629UYtNNHanpQX6wwaR6PG5hbRxADz6ctvsVEgxgcbCSJ5",
  "key5": "5v3XrPuD1NbLM4z31SatfV53QYjjr7NFC9RMm5CJQ2GsWYQHoHfGXy1jfqGfyiET8dkr5ry4wqsVfPCiynbHNXgn",
  "key6": "2NEMub1ASg76nfuseX1L6WbMrCgq88Y5GAr6dnNswc73kboXmqHSgiyAVVEdtUUueFLfsbzPwrsfsAhdkoqUSsyJ",
  "key7": "4xkvEXPVAEJrDwoCvY2anhLsK4xfHJk65kZrc8PHQBoGZqfx4k1Yf7qSZaixsVee72Gy92gjf21WLia8cpeHrT1j",
  "key8": "5P8W1Yd4VUmFSEqL5popnrGPyCNC7hKdem6Z3aBLvWEwZiUubdm3EcjghYnfiM5e7PoJPq6ZXCfZAEpbVenB2JRj",
  "key9": "63hsmWSeJ94AdSCvuGYLsYs3rDL2r4sX3D5AML8YGmGW2vqFynNxa3qUPriuhgjGLP4t4hFSVydP8MLAqEetr2cB",
  "key10": "5bZt2WypmZicn9wfJiJw9Jta9hosA1iZPr6Bp9kRGxLDhvEFnjsi7swTpEWdMYxKHHWN1bLhSg6Pft4S9EkRdg5z",
  "key11": "4SMR2NhFQcFp3weN8y6DUA7RwotEWo2z8hTK1GRPnBeQJNR9Pg1tb1uUviJN4usDjqQyqthDy3cNS2BDrpquahun",
  "key12": "4BGDPe6QBHvH9qCKu1anRdgchu8N3DSWwkkVayHGZiHk9uDurQeLUn3YxeqoJgT7dBrysQhMJRv8nxkV1BmbQM1F",
  "key13": "4nTXqmfjfnD8any19Spm45DZqHXJpRHNTa9oErVCX2tSTrgze4gy2422irzF7dm8pVNxWhH1rUYAUipHv8BaUtiV",
  "key14": "48hEh4xd46YK1DzZL15Va1SwrDNQ9j3gagfyZBhoFyApV7xNQxNUgRXWxZgnxxdWUCe89kHZZ25ssewEy1ekAFit",
  "key15": "67pLWcVdfqhJVYph9edbMZQNuXZEd4baxUhQW6KCJAoxMsSWBwfyLGMfRqfKQCZTpTBYuXE77prq2eiCaTgMugJS",
  "key16": "oifvAs5sWBSUfETxy6X3m9MGqqNfzFfmqfbU4uJvVTzMjtdR9ZzMrihvmMTf7xdu4sN7T5CqMLH1A3CTxF3YXW2",
  "key17": "5zB8gJutFc6t7L1wx1PsLFzxj3oWVr2NQGz49cPBcXMQ5dB3s357kGv89pi1yffdq26wVLXhxeZDHCSwftFRdwrA",
  "key18": "5QpcCf71a2agmvef2HFs6jjceKRLZPPvRS3nq5CXgPNJnjjHH6ghX8fpJAggjganEVzq9oM6Lpvwbr4ZUNyTmBVa",
  "key19": "5cGYNevsY3CKKViQD18prqvTPuTESsyJYtPCKB34aVunVd3rkAFTZaXQ1wFN4a8PwRcmj1P2tzLsNzzLdCE4knAM",
  "key20": "2mJhBDERrRoSa5S1ViU9UwtHPu8C5BxFNZFg67FejTbdUqzUzTCogK3H9aw7apDsCDPZWEW2ftMfLV5SPcsVhu64",
  "key21": "2K9KMNvqveFe19mQERj84xbK8Wcysz7UpNzJEuN68ANLzvFJ2VCJm5AedsxG3dTcid8XUZ98P35w512YENLZM8SN",
  "key22": "35mwWZKRYB9NNGuWmFcvFGsWXPUrv1sR9KpMQWzavyA4CYJhedfEedSFfJCx1Ah9Pm2XZQc4boKFvs4zoWetBWuU",
  "key23": "3jDp9uDeAxLYUqaC9WiPGJTYLSje1jSZkxT4ZMUQcBcG7veJ87NNvWm6dPbDhBSExYCtCKZA6wTh254GavppQM9M",
  "key24": "2QWjZbG4UkrUvcrsG8VH4eD7Gh8HuwBzcHyLtGxQY4fyrGdNq3Q694i4Vsqb2fWHkLKZByDFvU8FKGzwfE6n28LB",
  "key25": "xi4Hu3yvM6j8rRL8mrk4oeoeeYJrpwMDxB2Jdd9TkxAu8rMc76kDs5dJbGN3CPCHMaqP4mvNtgn58nM4nbCKH7y",
  "key26": "3mwJDELD9a5iWFh7H292kTJt5vQh9srgwC1bqkpXx2PoqtVFrUVhyPpRUFmcEjPx99pwQXENMNaSAyX6H5F66oMH",
  "key27": "CPEmU4PUtap38gXdm83gav9QEQD7zje7T3rEiKY1tik1U9VE8WubRaywdj3mEHY7Q6sAqyHAssbctH9z1m1DUJy",
  "key28": "Vwh4anmhujmSF6QBVBKzruD17Lsitnvx6QtCmqbQg6JpoAtGoSgCWvgcSgQWWKHAzL6Y7e7k6XHiNCaqyy63hoj",
  "key29": "3rm9HDcC9gKiSxdt9fygJnR3pYkwnHpSKXPWjDr2zSCHMoXJ4JtiRpRgTWU5hAsEwqwYNjnVxcvX5fGFxfYHnd2X",
  "key30": "5FEhzUeMvqkUJEXyqCA4f8GS6G3dKSNX1ieZAw6F1ND1buVmJqrVMtpzuVeNAsRu9NZvXjCcXM4xkcLBzgcqT4Vb",
  "key31": "35zCsvQPFe5JHpwGwzkceLwSVPNTudAuyA6vTH2yL1Dj4FFGvcXK4W7sGgTRSWoPpSYsBMXVQW5vye7KY8VWAQ8g",
  "key32": "3WupTdrVsLFJL9Qr3xanbrkEqRYVyhpkYYzHqZn8vEKMowJZZhXeMMHz7V2Swxe6YuRddCC9W1uRanVQ2GKA6v8R",
  "key33": "4LcKF9AAE58txFx9x8CrvNg5sjT2pGjamoaJdzLgqVoryWu8xxzFfoL3S4Gcx9orb34TUZ6zkpsEYNWfuHYY3KRe",
  "key34": "4Rfun8R9GoMCjmx4sQa4hso3DgXQLv9Lt4wNgtBMWbrBzJcrxiccAEadc8S6HRH4y8zacFkG4g5ysAHqewSaWRM9",
  "key35": "2Z54k84n4AWazyQzSmJAAKhngC9agEGHsqFQMMi1Noj41LChLBW9jpPBssb6Y6N7T7QcE1qf3FX4qMznrQUiZQpw",
  "key36": "4nJWM3K9gcTyuTSUzWGD8KmRMQw7QLxMoYWfGEdkRsDwHni8d42YANBMTC3PjxBjGtKZu1zFDuxJuhJEZsejavLY",
  "key37": "2tAVJQyKUpnUfRXP5osfuyL5bPtgiR9NsQ2wopMi58tgC7fp9r4RvFmZqvz2v6sxfuP4uFcVcvLBo5TDmzuu6bGG",
  "key38": "38hrytgTQPVrDQcviFo1TGQupVvB4nGvUHDeccxaCZDfQ3PpXTZU2xdpu33FnDLnV4fisJKauQ5SfuKMXAfyiRep",
  "key39": "2QuTSb7fw48CTG77eKpNpvC36VhozSJcG438omEBGCTRwQEc4JkZCmaCkwKqJS6WyzuyRDTxUTtQ2NXbTUw2eKYX",
  "key40": "22DJ198pGTu27Xc7keBwgPiAaBaytZ26R1tQdoLVyvqGbmaYPCEXbX2ua6nL9EE7TjTWMqZfiR7mBmPfGTd4V3ax",
  "key41": "4vhDX3Nzny72sFvCCr7bRu5fiQctRXpRCUamHV4b3xBfWw5S6HusT6H1nFf2mpJQCU5PMwknrpX9w6NRh467bchU",
  "key42": "5X2BNNmCGBJwxu7g9c3kF75yAWdkpoXUgnWhqXYahkhypctTAwbYjeadwmV57sZyCCVpURndzWCC6LLWjudyXUns",
  "key43": "5bH63QwaXqbyAdDgwidubh6rKnkxNjxWP7UZmY4XYS7tFBNU1R7GsCLHpcugGqarxZxgi2gQnWWv66C1jBKk1BAi",
  "key44": "3YMbfVbEx86eSLua9gR8jCU8U91nnAhVwauzppG4abEy6BxDyZ1YpBEdexastQC6NLMP8zoHMDE2esFaLyc2xWAk",
  "key45": "4G2u2ps9BfsCAUWpsVhiNxdMmQmYQ5fdrXs3VvcbAYgRjmuzNyBh4a3oXxTrzzFGDBTRwKi1PUL6pgYWUHPgZspk"
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
