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
    "2YsRaDZaiZ4UkAWvWPpkx6QXhUwuMD9Q7jR2PJzxrr2SbL5WgvTxNo1sP6UZEcsTJ9qc8imXV5eTauo5SMHHd6MT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35qQXiWUqkoBLVFdKQod87Un6vCaPj7jafHuCJH5tiGL9Vvxr3tANpstnR5DQivYsY11XotHSi3wyGmHwTp4Zqwc",
  "key1": "53zth9d4HrvyzDzestemPB2mVrbYJ82TcrpmRzKt8TDwo5u7yAvKddo5zsVNWwgK7MftXGcVGUASq9bG2FJ1DbTJ",
  "key2": "yo1EQsCN7SD6UV7CVcDv5VZMUQUDNc34gXK4AzvcfwUpw5y4oVazgQzznsviM3owGfniJWNSXrk5QC98KY3jGw5",
  "key3": "2fW9wWw2ycqtRNee1BwaLo8WreN9on2sgF6RPtSyP8hzjNyUZTBkLad78i53xU7Bt3jEX1L4YwuZ4Rp52yoptQta",
  "key4": "srJCwk2sZ34q5d4Ceux7z5vM9PYDRCnR54uFsHpkhCPBFYYmUw1x97VMc7cPgiqA5GxngKChoCAJKjTFNeqABEi",
  "key5": "2Wfda9cXFLxiEk6nVKzyiwS2LnyaHywxTQKYpPKiGUruqnydYehSfy4NHmBrGxTTmcaVBMRqCVwf6M6rkWgdEa3E",
  "key6": "a8hoETkL1jg8txKnaMpR56gGMreB9heXvHVaueqTBpgBSvwreL65oLdbckiFgjFpTDftFhWvYbWfNJzuhEm9CkH",
  "key7": "3ztbJ1Mm1chVVrokLTu3odXZWPBZtFKYBwHC3EbeEdhVzizZpAYSPBYdVEjzC8hvp29sGApqERjdKoQBv6RbEnq6",
  "key8": "4MPvX92cStkg4dDZgcRvwzogJXDj8kNkmYQh9JivpgQhfZE16RFbs2yWrgEUnQ2JS3sGN1WV8nz9yXDb7A94Yz2g",
  "key9": "2g3wBzVdqPWXj9gFkGca3uyq345T9WYfUHLTyUbNSgcjf2BEgSRBEDVuWERj9ms3cvxfGWjjfiCJEUgYardQ8hWx",
  "key10": "4E86QQRe4dz2f3RokyjxKtWtaMZJSdT7R87VErQFXEWPUVUq2VcfUCLGy7NohrxxSzADF6b5JhicATgsUWoKKt6c",
  "key11": "AvgmZYwukNiAp9KTNmyFAtopmyKonb3WUMmmDS2ZrNoCwUUPYxAnCC5652XXZKWmQuwHMj6fj3LsYBFea1uyzbA",
  "key12": "BAYEV88y6pxKwyNUC9wQ6m47ADYBoK1cf4dnGVe8SfNgtNFiPcXWdzrniivzMYjrKpfEg5tevXw93NY4go1o3RM",
  "key13": "nYNjhrCYbGpJ5y1m5JRi3bwvQiv1Vy4rKftW6nhvhHx4mQkMjfW43FyxPyX6x6beQDtz6D6GS29iTpdY1eutiBs",
  "key14": "3yftziUwM2tyiwRVhCMFAWBFXMTDMo3UW95ArVYWppV6LNdG1CbFf3uZMViteiSEeW27xrLCkzLioaYkuhuAMz4E",
  "key15": "KFuZHa3rQvS8ymhbZLDkskAqBDHwRLpYGLPE3egLzb1szXnWneomrC1LGT6F4EgYBTYQUBrSWCEBYHg173RTtiR",
  "key16": "3ekBtT7rxZv7H8SziRypX4fsvktvbKCwX81wdaX4QMinwAkR1AcGptSQoGyZ51oxzdH2RjipjNHVSpoSZyuTEcgM",
  "key17": "3NDVJ8bwbS3mHWn2usFGGF2jorCycqTeH8Y6TA2WWNiH4YkBorsRfnpQmGPwtP8DAnAUZkmrzTxFpyyr6Yo7gCUL",
  "key18": "4ceyy5nwRTofuGE1A6ScXxHypcnzBtGPVRTwTLidW8BZ8vXWyNdJrtG1uunh8cdgqnLzACEWxQYo8iEvTqd5eRPw",
  "key19": "YDoz8CavZtCGe6MibHXPA7cSbTsAHEUvNNNzaUqBUd9skoftEDcB6vVq2w83KJRQRmZm2dRuDK1SYdrRn21ywRY",
  "key20": "cmvwV81ZXYtk5crMdwEDH7WsBGd4NmNpTmqSsC2MRLemdExQyC9QDC7J22rdXL5UAP5sgwzU517UjZnjampGTj7",
  "key21": "3bTmrxfm6ujct3QgbsJBzxy5mKA7hB2dTgbkXa6dzWBQ3favSsfpo3viSat74btzT91FKzoH5AWgXxhXuPeaPDT9",
  "key22": "3ZP92LZhhHccB1kwugEjAmKujFbc3QvhNJBSYn5tczuYAY47zBdSkZA6Nz2TmD6nbCtVVnUuPtXBXyqr1KecvZaq",
  "key23": "5549xcjc4MYU11uPegoYfbAdaqDxce5pp3zuw1Sm247MoLG1XQfQ4BCuqS3prRYFv1YZDJL6XBkL4K2grQCtM4CF",
  "key24": "3ZeEBrRqW7B1jAkBK9wJNbAXUUAJif7h3fST9zwC9PMfDDbsqKddKqYk9gfaE9VAgMsPQVkhQGbD9pNzTqizCPS4",
  "key25": "4pK3y7HUCtecin7TZSbUyXNPV7iKksw2ZHW2qs143PCFgZtnz8UcjVYrCKVGfFnvhpMPeuLGJvTrKgHMXbDfhica",
  "key26": "3JQUKRpdZLLFtESKSTUyjA4qqcejRyH4SRNRS2BidBFw5X4MbuHPhsPpdYyNgarVRD8naHJamL1yAwUhkJBEcUAN",
  "key27": "3AdgoRrV9FzBgFrxWZ7bvzoe4REuoTUfPdWigm67PB87A64D3FiFeSZUPd6fhyTKe9fQzACgV1FKHGCCmXvMhTuR",
  "key28": "4zp8HXNwK5B4Z7eJrunuWfTAgL6MXKtmYduvo8LgxHTnnyCzsMeaCdtS2KecHqMWLjdWyFsH18XpyGgWDkUACBw7",
  "key29": "3HPNn88Fud2xh8AqhFU117zvPSJSUk36Vs4gPcgfF618La2FU7k3C38FnVH5Cn4nyHwcK5xMA1VKhEF7ZSztLwvk",
  "key30": "bPGu2jGdoY1uHTZE8YtLRQcGH1JGPqMK8T9eryDuSUPEhS9mPNJHa1MGGoqHYJXNdSTGivfEc1LwQ4Hr45vifgS",
  "key31": "3sGZPVPqQ6D7jRKm5Edqpv8EtCwfjrBNjep97RMCF9ymWUetrKyb8RBJnJPFL96anVufZCc61knaviPAgm3UvcxN",
  "key32": "LnY2pMAoaeULSGBqqQD6JbWHbBZMZ4N1Vmxp1hkuJFtKFPw3LGLewhLS5LdF4yyyT3sk9s5x7sNyiGZnrNGFQxq",
  "key33": "2LpwrdL4ZTweG9kkqQ6dp3VVJrxyw8zNMozpbHF6m7cjFJvDXNxbELi8CHPEWxrh2KHpkGd4sQ2z5HQLbb7hY7Wf",
  "key34": "5oCdcHCJUqNNrauHUW5gJmabrh9X8hXoNsBBRre5Gf1Khdusowyyf9HxAJnM513GBJLqwJ72sHymP1WAXdrnZ9zZ",
  "key35": "5Ros4DUxYiLggtf6qGAC8vHmFHH663hN7xKuoZyKUUuAoiMJrYSG3ZaWAjAMo8YGG7oPvApPU4teiQG9svSF4oj5",
  "key36": "3bMQzCjWYKb4JPizi8gUBhbVBwVttrEVTK3BM8ESGCWRD5t4fw5v7UuQ27tVeZrNu1m4RFHffYdGBKKZpvR7vkWr",
  "key37": "39NA4P4DXwLG4Qyq6jeWtnwGPYMh9VTtv5XXSP8ByZEjr9GYdGovtVLWrB2CuZezgUKTmYVpzDGU7jJ176GvgnYm",
  "key38": "2htNY7Y7mUNNsstQXJLAtq3nzYbkMfRdDia298WgGWhsirD2rPQvbADWaPggFnmjfNtrN8EJk78BuxXPW2h6CnJt"
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
