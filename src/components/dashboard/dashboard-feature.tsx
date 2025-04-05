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
    "2oXPr8osxAXmx9PZgf1SjV6U4ZGgENJbvAFzRnb71t2FMDSxRF7UBHDCCv5oceEW5dYbKxGk3BpdP4okMNr3X9XY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r137nXXiJuhdXoc17fkCsF5ciwuWZ9EZ1nAx62NqPCfN8L9qgTTHJUB1ZHnVAAjPzgXMUJr63yXbMAo5cozcTNg",
  "key1": "55t1M3bCLnvWpAJqSh4iiwJ4uam418b67SUMWiHG5sE23ZyTWPZ9YhkB3w46jH8sALjiQzLgPUzrCbvwpG24PU9V",
  "key2": "5YxiEPPexV7ritN2b2CuAZvgUJ6o3t4arFGc26nWZV8ZYyzdwuBff3M5w1oA8F4nMq11z2eWPwmPNMTedvAD9GG8",
  "key3": "66NKC5afDd7YCLSkj7ZDGMmdBvxjRaSjJBYMnVEYpLPg5bamiMntVvBw7x2V5HHJBo4vSmg14afaSgJMGf3QfG7E",
  "key4": "53vX467gM1xM7cfwck931tbvAvJCF2j9hzebeFyLkgyXXc2zfnvgTrZ52in474Fcx5RGTZvuTxuZwF14r93ngDCD",
  "key5": "3B79T9e2Qim48A82WCkWX3h6jUBnzqVGnNo7gNe7QjvEFFXKBxNpXNcqbdFzRWEa91LuEo417MZyi3kA8Gbzcewa",
  "key6": "3wE7G7MRanzNQUqLEWLVJGXsaSyHZengK1bhzSXk8NSfjgCXGuxV8Em4ZA2EUa8t9yy3Yh7wietqKnGBp3W8Q2Do",
  "key7": "4joAmbrLTpbCsd3D4JVjBsLe98sXrDhzvcWZtTFWX9kU79BfXEGt87wiHjJ65jLZ5P119ozoux7La5hwQE5BvMqC",
  "key8": "29nnMDBd2tWGtPad2Fau3ZSBuWyCjPFByojn7U2SuCYuQugJZfZVRcw3UzGYGvkKnWD68YMnZyZCsypMa4D2hCro",
  "key9": "5aS8X26SxJMucG8e992C88VrMNH7KCFhkBwcMSgr374wDHt4S4Hb2bZw6g2TW5972cqzGGZ8JDLESKAP3Ebpwugk",
  "key10": "2fpn6RiAosqkGphj5hYWDWK1MjzTNQQqX21vSVmSAfNf6BbqqdhWwJ38YPsjra8gCM4kcj4bw5XsqAeN5uKwVwbv",
  "key11": "Rkt7D2EKQuz8riPuy6D9CHVbe4qBihKELTPbsMQM9bsXnPNh5G7Y4xvbx6nWyQrECmddzFfh7WzDufXDYryJE6f",
  "key12": "5U6ZBHTFybjGpmrNZitdkZoQ1gFE5iwtvEZbohsZW22eS7CXeVdo6LhdTQrevQbmy9zoXbNiHTjDuoBdGcKNiWbk",
  "key13": "3q1DXhhVPWkfcYT76Ysf1i8hJJuXkqJbQknJENPU1bc6KMNFbGkCBFpAQEc2jobdhGjLBKvVDu5MRQYtRZtbDDdi",
  "key14": "2fbVzgw665RyKQ5zeucNgevzgmvE7BqrJtB5Z1i9ygL5aQf9kfyAs6Snx28C5KhNH3XgyFcMtcfDnP8VRcnoxf8j",
  "key15": "5tnmLDXRRZ57SY4WHDerVipTWWkAQ7rU9xtQ7hN4xmuk8hgx8opABphuqF2BbnidUgJ2TcB3pPEBcFb6FW62Jx4t",
  "key16": "Kjr7G2ezxoDtmtmphcAPoZB76Q6yWuGiWo2tC9J2MM2FC2HVxPLSNJL7oURxwVGzVYmTjeHv8qq6fuXfWGy3vww",
  "key17": "2zWqJgyxRiUsbRfzujMTfH8REDuWAeDAZPG5yfLY4CMdp4ohnYsFtmWscpY3D21DYPLw6qjBkst3eW5MRiZTJ4yV",
  "key18": "4bGRbj5xaXkKUSK6Qg1Uo9XjTkEQYNKCa7YfLnyniyw6RvWpFqcCKR87yMdK9ps5uKbX2dHPZFn5j5KcmdZYLJgr",
  "key19": "HHiUTftZpdvVa5CD63F5PZzWz1yepJdhpKYa7MGMCyMqAupyGUbUoZng7QsEyMFaKkJJKuBK8VgUvHoZAxFYcfx",
  "key20": "2ymCwiZTLUpZXXw4v8yVUxUj4FLeYs4poWPLmxXdeQ1oWa7JtQyDnHJoaVBsgLqopnHAMjp67m41tc3mnsPVygDS",
  "key21": "4Z8Ct9iLFfzksrqefXEcvQQHc6YCnqLCqqHL1HmXPBu6oP4TAXULPQV4QE4hMUP7zFEWtpaBiiMtV32NBEu56mTc",
  "key22": "4vEPNeQFiPZYAM7Z4htLWs1KuVyWsR1wNiqVJ9rPMGniv1HJoV2ePRVpZovRBE8hfPywYaaUcrjcZwLfGbPHiNqK",
  "key23": "AziBKJBshhBvEna9FAGV8XjFsUTHuk3sCh2jjovrPY34emgPW1q9PhWbgFkPguCcudtLNBK9148N7fQhSwZuDJ7",
  "key24": "4XaKtdCZdLbfcsjje8XZEVSPeBX9T9tPMJrqaBy4eoTmbNawZiA4BNAKk8qXG9HXrmDxiuzzQ2aeSdADdcBon7AQ",
  "key25": "5coS3qSK2YuKi2Ns8EmAiKPZd16gKeX1GL5R6Dr3igbMYAwQXsaknGG2s51e1fieLq2dzUaNNQNxewK2tZNubnsY",
  "key26": "2U9fj4QB5psUM9XVH3nV2HbhQ3QLnUuWPf7SL36vNL6HVXHhe18Csoy11aQHGySPMJsRmuY1yV6nveGuYUZFynoa",
  "key27": "4xRUsDWJSBBDrbrXG4GyzdV1ts9LnpA7k121eoCFwWqyreMSB2he42bfYmgRFraTphkhoHfK3ZtLYzgaP6xHZWin",
  "key28": "2s9YTrocG9URdqYB5s8uHJUxqRhJWUC2d1ky9Bisb3zFii2YFVfzvzsv3X7mPki7MySk6Kd4oAmzuorZieUpCHb1",
  "key29": "5zJLfkCs7v9y196LrLeH7rVmckUxS3PxZy1MCiRQCHQDEWR49AcbDCZ55LDMy9oRiVpVqLnwFXZ4B52FywX4eH6R",
  "key30": "5B1Xt5TxaJdtnfurzKuVPdfpcD4EZwKguQwBBw7Tks75qV6FYudgyNpBkWmdUFH7SLswTNoeJRLgNHWuSzQwVu7h",
  "key31": "439V3i4bvJsFUUZe2YYKt6dVVSxvCTtiZGD7PkvbPEzhErfABWnDem1GgVPVQgqTHZuqWJcSu3JcrnFi9XCQhGeo",
  "key32": "5rnkJwE7MjmAUmpzPFxDek1ENnxTN619HzaUWx51QYkmWms8cdsLJQScmTtXG35kCVQ6MjHskbTaC946ViLCMBXF",
  "key33": "5ogah2YipK43UiMkygRVo6S7D7SXQXsV3rBabhk5S15AWxVVTqHPiuyCvTssSQhgzy13zUwWjPo9f96ZiA5aux7m",
  "key34": "5Re9mD5ztUMTNE4LtNe82hQxFd28TGTMrCB6d4cJWrw1A3UaygpiQybwcSoeyjpw1n8cv5cmRZQ59c5Hk1Gae7Gg",
  "key35": "2QoJ14LnGg8FjWzaC7U839nBEmhvTtjUzjsPH5HiT4Bw9L3HqL4puukXE9vs8pcmZxXonLLt3xboRPk6ojTbg8rS",
  "key36": "QV97P47ndYFzgCQe2WJBTHrhzRCr5aex6KrgUT579sfBPdpeGc2pJeEAWkSNg5mWc9SnSGtGGCj5aZZEmsNAaeF",
  "key37": "4X7pvjBQV2qKqiP3L5RH7mjZjPb2UGzTnDEsZ5p4pwLYd2v5Ph6xuWj57rp2haB6SsZ6qs2EUv9JvT1VtwLQd78q",
  "key38": "43koDRogPkun7cNGaX7yVc1mA4PM3yzxW86WNG2zJJjgu9vvSj4px7B4v82Bmh9TdMY9gZdWC4xDXYxh7YfT9D7X",
  "key39": "kV5uFDurKCLApaHMWrHZLHdL9AF98am2zMtnaEJPodGXEKNzJPK8KtSGM1o3cxjs8JeeZVYo2nmDGtGbqhwTVYN"
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
