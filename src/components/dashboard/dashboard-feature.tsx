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
    "2yo5ApsfSEeyCv4iaGhkWmnJr9S8myKtN3KVfbGKjUxrZUT8b7sAmmQFUU1VprMfSbfYfcAKyHhDw5aiVKUn7dww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mUsmqrsvEAt4p8jJSH5nMbHm2uRciaEwo2Gh67zyokdo9gW23cNRrTXTKDXEqXaJJ64qT6JbKcKciwwFrZ6tgjQ",
  "key1": "5FsbRAi8x3AFy1NMdG8yLxy6LRTS8vkpYnEfity8mqWpA9nELeZ7kNcKa8RBDrBF33CGVpPWnPh92LUceZ7ZFLC7",
  "key2": "3BsH5pwrYzxtsoEWom9UyigxgEscq1GwSpDtbUcAhsQHZiM3fgBBFLj7AuFnfhu3VnDS7NTsmkRotaWrzjJdH57V",
  "key3": "3na43c8xd7PxwnuCvM8tPL7vRZwrorStjpvqNzfWjvykkXiDRazynxvLLP5UQp8Fy1zM6qSwX2X8Qv4g4StRj5sp",
  "key4": "4DspVaoCbPbWz5LPTqQDFbW4oRFJV4m5xygrzDZjmVFWQ6m3rxTzTZPDKnumHyXJnWG1oyaSX8sMWiPK7F3Upx9z",
  "key5": "gqyAzxXLSkDx9tsMkg3GUMm4F7W6QSCryYBdZG33cxUAMCcQkWjhjcds5vEQmbb3m2v855WtizHBSxsuERpH7FA",
  "key6": "3nmDf7DaeM45TLmsxrR2mffEJrd24s9yxc8wGrXeL4d1qnbyo3hASkPDZqbgkZX5RJARR5jacYf2tCMPG8FWrbkG",
  "key7": "22EbwmYtfk9EaEnFbLpT5aA3e3hWWRyVEXc3wYBbFFwDUGbXENTUDcyKHpUWxZWKtwbzxx8cYxiXSqSvA1eixuWE",
  "key8": "2gHAP1qhdAwwVmhVCBSg26S5Ur3JgkCu9WTudmJhshZWEYKnVWRCXpJhQqWkN531Gg4abmT4juGhU3aqLi7HLudy",
  "key9": "4AYtoU6jt9NfBAVP9Nzpq1UXwxMUsjLfmWYNC45bxd62EkBXtYkMPPFjRxDok6vXN4MKtUbQCX7GR8gtXr1d9ywv",
  "key10": "VvGPAwkGThJFguMMbiWbTzj424rUUgPWNRsz35638cZ8pjXQZ1MUinz6ctSMcGT5dSspsaSURWQYBTrQEqXHugD",
  "key11": "2sGTnGawZ1keTCYUitR9PYc7dVKaiGwd2Qa6F7dLMvA3GJQMj4aLVvkaZSu8VgL4fB1qFZ3LRRdyNV2sndqDWnU",
  "key12": "5YQouDP9RRyFmXvJ6KUSunSaXUbPfz9qAVf2m5bidLPFoVekWVp3avbis9VF6MJeAyNmXsQDb1Xf24hhZtnvANy7",
  "key13": "3iMjGLXhKrKwitZJngsQ1iHevFJ2sZavADQfqDki66fQwEXbaN7GD8Pe577hUtfhBUjXmyeUa9QFj4Dj8jBCAkBK",
  "key14": "2fqeyTCiymmrqnn3iVYNrgeN1CNeYJyep2KaoapxCv5ZNqynLDMYc4njNWFzQZFjqMezdQE59CMNdmhAnjArgCKo",
  "key15": "4BfkkrFsgFdaKD6nk4rNrmEuGTX9Xc1vrU1NBaEqS31r3EXh3YgrMBU3rvfffAAFkxN3wgar5HMnPQZVhzyFdDFm",
  "key16": "W24RHV8Z1cRSCMsESycrCSWYc4urYMV31ZLqo2LhqEXJWKDjYjLUi74CPWRU7WDvMLkd8A1LqjfSdMZaSmTscRk",
  "key17": "5zusm6ME8SN5RKvkKgQgoE6ozGJGtnbxWPKwmheZRuUKMTJFm8Zw85CWAaLqBHh1pVm1CMB7pKk95DDtaDf1HLvu",
  "key18": "2ivGuQGp3NCwMGYBK5VMiQ7wj4JrrJKP8YwPeGHv6YGQZu9pAZHfp2dcJMiXqe2ZfxiwZjvdD1zvZhbAepLo4UaG",
  "key19": "3aUVfnd9LoLaZEgD7oV24RtMRsnBf5XzWnD96JNpyuYEyLGqzV2G2o6k9va2tgTDMvFZNvwv9dmv83RG8JcGCcFA",
  "key20": "2Fc4KtCboo5CbMWQG8MiSM6Q7gqLCyiX1ny9GfUTaWxT6gL31XmUQV5Ks9awwPXN8wGUANLTnJKxe6KGPir1Ju9X",
  "key21": "4TAwPRkX9vN9MKk3iw1CAbNGSZbmedKvJvsV9Uct6dAkoQePY1BKszQf1wLmkaMhpS6kK6fAbNEBp6zun2QhMrA3",
  "key22": "5jj51e3dgnHur5V3DngEVEWNwVvmkMY1MeXKEKFoQG3EVEF17rs6LEsuWjGyHD42pNikgxmZ7gL8JazKRfDB9Abe",
  "key23": "45AKK6FQdQfT2DvzFjVxTMJ2zr73mS2ZPghKjYQA9hqt64zHCqWPEPhPduTz4VF2nPkcHho3z1DzKwUvKEw2opak",
  "key24": "4RFbdG8WLhwdkDaxCHnGdzLLjX8uZKLKZZZMqqiNMDZFa13cmFBfV9G3rgNDBsRzyErbjoLvLQBHNrFckF1BBkht",
  "key25": "2sPyduqYXwHhbSdrQGFVR324SdE9SXJ7ov2BRqTnXrsr3h1VsCY9nJFFiUaqW3NFS3th9kemuSHcHoNM1bshzbp3",
  "key26": "5CqZ7azUrmSva8pvT9ruQdATBrju81nVxsNFCQFTYVaBbVVfksM3gMaEpygD9SxFG41NwEUYav2YwgU21UeJKVqC",
  "key27": "zM6Ee1NihLqQipuMjciaEpD8xiqRxvNvbdGrLtLfnQuyfcuAsHaKoHazEVarxqu8LBsHXzu6VbKZcMpM6ZeTyev",
  "key28": "5PyWqF23m3zvAx6tZ9R7KQZ1m5VMfm8Hj843ZDMjK9g4QeGtXS97kQFbZ7tDVB7G7d572jh2mcMjcC6FLzHDtan1",
  "key29": "2cFyQJ9E3M3C4khrhZnfSH4vV1bsec9ef2oxDSExJzJ1yJLCX57j48EAAVUoes9tfhozXHyJ7Qq4vmoaghsEpwvq",
  "key30": "3dT78fMdD9WiJADxWQ2Wz8wYheCRs9gvnxC68yyaNJyKvAknVpfYLnQTkRVA2bMGcwfftMUr5vTzRNgZbBnf9dWL",
  "key31": "3N3me3hvuB4mDs8CU8KDnLCRoYHopgh4bDPRzJRm9Y6L6sr8fKpaCXexqQuRaaFUCT5i6BaJsQJPxbR4aTPY1daK",
  "key32": "fzv1SwywuY2wemiGaY4LBUKEMVAKZgjsMNW8dUqR5U2rcfsnkakeq4XB29W2pmg7jBZtc8u6ARhgFq4g25e7dK4",
  "key33": "2UfbNeNhUaiHByGDPNXWMSACV3AZVUanHgnjPAn5gDe4r2B3secQrhrVqQoCfBJH6ATPaueYpBRhLXGYmcqDUS5g",
  "key34": "9FgupdvzWUpjAaGcwBWhrgghFn48qjTHcTFTzs3YZUtLMgeHJioQBv6umQ4y7NkLPzdSDkmk1yd61tN87ywaVPz",
  "key35": "3o47xFfCXvnwJC1HBbYKVobqB7DZLzwkJ4xs7sFMQFgUwULH6qHcE3Limom1RrP2P7Gje4ZwtHJksV4oygcDmH3X",
  "key36": "2jRrPC571Nm9kmMD3sT6BNhDg4fEDCAxRZdo14fTGUzc4camX1uwPvAjNLuTa5TD1M9G615Bff8WsLmeRRCH2kmU",
  "key37": "5vtdJA9UCZ6qnr64R7JptHzQwYh3q1b1mpYoZKqkskDD84DuLTYHquvsQgxNk5ZWnYTXUVD16tUDy2ACKTdYZ4tb",
  "key38": "5oCivG1hscWtH7T9zt8f3kVfLtv3ELVve4MfmSnBfifmWqZovZ5aPX4ZDquX5xvjijMWQe7awyCwy3UdCV8qqvyS",
  "key39": "332hF8oT1St1DBBh9FvYKSosgsWea7vAMbYM2osKsojxXjAY77WTCCPfQfDC57mSaPSUXzVWMjZpkRayUWRESL7T",
  "key40": "3erB76E417qCFQMuwfR2tHF1vttLr66Yf3wiow3XXryavEjCU6bQ2QDBq75upCwnUkCmVVKQ9R4krv6igX3ULxra",
  "key41": "4BbeaAdL6YVHgJZqSWS3Kz56ekmMGa1YZKMCaUWTXCi1RVQdiAdJ1ewbZwCynzHWwVHpmudTyc5ajS9ZbjTNaJWo",
  "key42": "48PzpX3cQZNmZydbKhzEiL5ALio14QxpQbVUTXRVx5sz3PJVApsEtkT78bKPGfbKTpZ98Z6ZLDixvTUiGLfyBDFo",
  "key43": "veFc1NkuFbiJqAAuktLwBeNiS5icvVEAu98HhzGDoCAmM8RmcBrE66Sa7KTZXA52cWSq645GkVfiZQYBBTQDE3u",
  "key44": "3A9QnXg5TPLtV54uwaJfeSSrQUwhvQ4wHR1GphF8fkgVAREZbTTLKS5Gh8aSYshxgkpEeJjEEECWLCvq4EmXbPpR"
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
