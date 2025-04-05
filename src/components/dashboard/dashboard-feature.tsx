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
    "4AwLHEkXp3qiDYc4zzYiNDHKYjv1khc94Cre36ojyaT38CLKQMJGPWmTegNFXwPLVdfeJ9yMx7jNnh4jXjH89h25"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DLLK9zxLgGWdwPnYPjozoXeYhZ8hEjS9B5gcAX6b8t19VEX7VUSevbPrkZeLoJs4QZ2CGmnimK9Jrs9gkeN1iyx",
  "key1": "4SnV6FW9kw81G6Mz3LF4Qs3MyN49Zk15FqBpBjmNicXcL1shbTZkaXtTNc3E89a86XMjw1tRRgzCkxa2EQ4cfytV",
  "key2": "5jDaA6sgGx5UqXEprQbgE3T7fnvBoBqz25jABVwdCwHbNvt8kAkVX5Vk3spmAg2uXMqxy6vruDayBV9vaPf9Pznk",
  "key3": "3FjruH7vv9JJRsr3QdxJrmQTxDhgLhnx7x9By5yHuMLY2CSXeBpjny2Z8SLx64Kb2dWxoCxyVmXbPwa71h5A9Kbe",
  "key4": "cRHxzQRRLfFwJ9XqFDRxpXcGZWgrsvAMQLdvnw3ebr5LayjU4rF6aUV2K3u6iNKDiQDsmKf5vvPAnKqzLuEfyA7",
  "key5": "2tcYj74Ymg1qvy5AYForYgwcYCaTppL8r9FHv32pKULuPtyEziBHgjHNHHFK632RD7pVY6u4Y12YiEm4rk4kE6ZD",
  "key6": "45haUc3bmdcxrHg6tw3bMar48xn6QCk2D6H4WUH8APNG8QHdG74Ua33Xs63cnfc34pfYz1tv8tAYFuWa1y5HNu3E",
  "key7": "4MUAEuFNyjQNb8jHpUpNXQA3qDfFtpyJCEtsCa8eaym7E49esy7aXDmPtaWbBn4VKn4zTCJmC97BeWZw5nmGZTBa",
  "key8": "RTZABY7Mwuq3SwvFCdPjJUckiRXv6HKXRygCMYLy73eR85dSHtncm1XLUjdr5oFjnHzksUochSMNx9tXVzVPmn4",
  "key9": "4bVKx65q3W9rGu7hiocQu9pfzf3SdPMRx3ciR3CLKmtG688VKqA94N5zqoFzHwro3uat2EMMMHnqCGSAqZ3go5k9",
  "key10": "2v26f77CndQoraaeGm54m7Y89a1Cot3UoicSe7fiwwQeay6sP8ZMykECZQXZJKBkA8v2ZEidrhCApazdrc4foLEp",
  "key11": "3hvWEXtjE2CthxViTE4y8qiqvBKKbR2GFnbxy5gippzxZ4DgAcVh7jzzvANXjqKEijRFBfMYPvTUXbtucyey2xd4",
  "key12": "2XakuSLfSrG5rjoaZHngzsBN9GPa26mfyNosrgY77yFaBTb7UJEcGhvEFMEQs5tt44b4Sh26BDe7BZ6FgBjKBt9B",
  "key13": "4FdQakMQXNfRGhytDxdsyVbMpGGQj5RrtKAqPpDYsYn4FrLKeJW3beEf9x3RbNuDKG3H8Z5okypQ3xyowGX5TXkb",
  "key14": "dVXbNg7wSgKLW9NMT3CAoBhW79uw6Z5FXGFd4p8LQbX2pbJcRt25ToFBNtFJapAUwZTR231qoc6ip9Z9JeJ6ftk",
  "key15": "4ATWALrk2qSzkFA3kGxaNdwjSuCNwaLeFfwHa5pMPNGzMGVTWSLF817QFRhAryasAbtfNeL1Mn8CYQjDpyvngmER",
  "key16": "4DBc7pCdmMjXR3ShEp19HaM4W9K4N4Zg7JtsBisEKFKho3qUWwXrNnc5BrNoQ8i6Ad3zsziWVquHRoMRnDVsr1L4",
  "key17": "rSewKUaDKiDWkPmDiTVtn4FdJjDqd4BugdnTmaCH3deiQ2VDznaQVP7nERMaPpY92u4i3tUY2caagd5C85uZct9",
  "key18": "3qx3mebPNYXsQcQLNNdpaG5EprwRBE4bcTbuMWTmcgELVGHRM61iV7Yn3pawTuLvdENdbJvDQYiYE48hiu431yei",
  "key19": "469qRCoQr48tfYZRQ7Z9gzyoAmDDqKZy8fo8BirXcuNgRUD42pFKubBWzJbY4Pz2z6PvtSJ4gcTqe3FtDnZ8Rfog",
  "key20": "3BPJhZp4h3SD23qUmxuBV1s2xvd9oM62cnXQ5yVvK9U8Ycbpazp4nVRWrqFdSjvmUjzeebWxrfstpSFuUfguMiuA",
  "key21": "4erLyk7TZDsbdDVifr4a8jcfkUTpdzYjZxdKEm14YAqvzgHRgQz9oHGDH9kuPAuFeZYFbeMUea38emigBVjZtMzt",
  "key22": "8vwmud2tojTQ55u6fngkzLPH72KkcecNVQ1b4cTCR37LkHSJe1hSsigsECmHmQLpxc8rqE9QDnkVu7vP7W9KDmm",
  "key23": "JkbSQwjXPwA1e4K2t9iDbrNwqjkHCizmqepjUMmLYKfyLhSgam8MnPZJGEaW3ncxagu2yUXrn5s2LnpTfgBDi1k",
  "key24": "4NBXGf3YRMkVRfhDhzj6ieknsWB3KrTvmRGt6ArH4z75r6e2pYgJ7aFRpFpVZaZ7EQqMV97dySXBF4kGoEz28KWm",
  "key25": "ifmPS71KqdjeUWtkMND6symtycsGDbu8yW3c86FBdWuKgkfjgU1EjdQzNX6RammPx5ZdJ1Jiy3rRZrDsWBPtbdk",
  "key26": "44Q4gX5amTJsaoD8eaJD1VhTxC7cYkWhjvSZp5J4AWnsUV7Cemub56P9BM6HQKzsQEsyQyLwQKsuS3kAtMqoEtSG",
  "key27": "5eB4bLfsnUK94jJhuN7g66j1PBcRXhBsW1XnNgQtSwjJ8G3sNPg5BLRFeUE9ELVq8Zhv9gfDTodGnPYRcGFj3vHx",
  "key28": "5WsBH7iiwEz5hY1fM6kDsmkwCdU9x7gtxZn2uHw1vDtB3qDSi4LfC2PUEyTLNTWkXtxbcZcMxmnbrxnKkh4Ms4Wh",
  "key29": "5sBiSBFJ4kUK3ak2xJd4V7uuEeZJcSFHyzEqJghxi7AFQtkHasqW2zWBpwwUfxTR3oGJQswe7yLsYbJHis6eF6e2",
  "key30": "2PKn4jmUv4YhS7ef4y7aBCeyidzVWJZ9M4wMFKDYko9hTSpt296RweLNDc11icpedNgoNjzj7Zjc5d2UwJRg4Pah",
  "key31": "65bEQp1bi2hEWzp7KRkoHruzXQRuNxQCP99YkrodjnHpoC5bAVD219323CSTPKNCPU5HaXbmEKzytDF61vvj54W5",
  "key32": "43rH6XLS54tDkksViKoJPtmqjFqEqDkLL7Z83qZoXPF4bgYYeuqicV68nx9Ha1h3P4T5AoCfKfw5YTBKu3Yua5Qz",
  "key33": "5R6XjVmFKbB8Z4gZW3379uoomv6r92NZhrZkaG3xzg6S8f1FB8HQXraJjQbd7syUgNhLu78ZdJYNJfmMvrKnP2XH",
  "key34": "4FynvQsb8gRw1jPCxksmznQmnp7a1QiqbsW6hKG8Qiv77kHXy9od3r1kjcpXaiofJ6AGbYSsSQ3WXMNHMRm35wGu",
  "key35": "5duf6twXF2c2Vc2pRYXCwBiawH7q1e1CB9q7pxiGvqaDfmxcbgcEXE5zwfzA4FNrop5eiMAq7EPi9T9QmM84mY38",
  "key36": "4CQaSSJ7Z44HG5hkZQZFifMDR2ZRSEixhHDXfd83wCsHzdke8gNK6m2jk4LriGw1Hkt6ek3ezaSDXExVd1Cm2CXT",
  "key37": "2GC16drZjJDXUGkjn5p686xXjWYmLUHUXkP2iKgoqyojSLHXMqBfLs3q1GDwGztAP765V8dWh8b6hNoGqxc3GtSH",
  "key38": "3AshRkXhS9E3bdJbW874N6unKN6GDSSgwpAEuG115AskZzcBuoQTJiKHz6AWYsEdbTvgL9BveUaDa51B2rjGwo4c",
  "key39": "4L77jdaYPZVapCdtQunBb3RuwvJ95zU1hhVrH6zRdB2e6qPbiShMMv3MsYUF2fPZDZ16bi8Ua6eWkJPjTcxYohPU"
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
