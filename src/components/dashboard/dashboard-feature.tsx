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
    "B3qKr5zXePj9DFdM9SezT2uqFk2eZjNPfpEkc8Jf7MvynHKMrn8RtijYASuKCqckBgAVHx6DTP7NtHdkSJajQ1J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YFtibxNCDfaVp2Sh1pkUHpkdbR3iPM36oZR9T4Gvsb7NHffxeFPbnxcrZer52Eggmikc7SLN1FTDpo8cvK9eJjP",
  "key1": "49noybDLuefe5JEA1DsSfh1CabPTeh3cLi3YcWqzobqUnyFFtLXrq3BKahcFv8dGHzGGutX6hc18afD654qjMAu4",
  "key2": "36tVhfu1XcpisWd2uuqi1WJUcW3xPqw65X3aUjBuhTSmqSXefNpGMaXRWYWhG5EfF5Bdc59ruENv6qABeZDiX26x",
  "key3": "575BC2FVsuzHD8RqvBATehGwPN3UZDyW5zhhmL4ox4KivD6vuhu28Ckx7pizucgyQuCpXvgM6iFSHkeTF9Pphref",
  "key4": "4RWDmY99TwNRWCLH1DqnLHeFED28kj7UDxx337C3gvq6qU6WXrgq43X4vq9mcJH8fh5hpNMZfjzmcgFmhrZA935r",
  "key5": "581jmn9VFzfMDfVyPNwXHctJWmG7yRmZbAsaXWy1i44kVPBfRacpnjjeCZnKZ6pjQFt6NgTsEwhiAre1Tr7WJ9vq",
  "key6": "5WEskRMGWxyvgpg66AZY3KepGsy7wa4okcfSpJps7M5KZbmX8B2U86Ad8eQxi9ZNERqdv3nRBwcBm7wDjkvRsiGD",
  "key7": "4doQjisPrHwxtuSNd6qkruZKAqqXZRUJuYK25DHFJS234qzNUuL1K9cFSG4NMNvUkc6dA3DcHAjxh2e6ceUnBL6q",
  "key8": "3jfC1yNuZYW9q4joccvWwH5dXngHYMEUgufT9yEjSThYNKRskEUCNuqr4UKYVCoVHcD1jxqCLcqeHLJgq5Cv2TmJ",
  "key9": "8wNX39feGavJUbjgYbtE7NyrP6EFVMvqaA2NCuMefxowWWNcZ3Rky4DytWM7cqeoSXWezsiLi2VrPPHUmygztsh",
  "key10": "5GLPQsTSKLyThnQ33K5ymzwrzwadoHSh4YVUXTuoTL6a8yY2nsABaZiGX3jZoBu6JyQr6QU9UNVGRLgatemCbh2m",
  "key11": "4TWU9sGFGMihhccaxRv5cRcBPHK52pX2X3bJuJCz7LSEig17TpTv4bNFa6dJxQGwpbZC8sDZTNHFxuoc9KnWtec4",
  "key12": "bHnMpPd7wqbPgU3Z9wpr7TiRn2vL3bdTrDqruugwRP8nabVzZktD71aAetfzT2Jp17Jaa1ypUechwQeXwExYk6F",
  "key13": "qF5aDTe1H9mnptDwkQzmmXa5tfUuHMRVCmyc126hPjXr62i2QH7Ngcnx2HCwR18u5anpMD6dpUApYHJAY4LqNWg",
  "key14": "4kLRcA6TZPz3TSDEV2uHou5e5JH8ZFaC73jiXH2eXhrEynsxYmHn7YadaSHvMmq4H9hhyXX4Q1y1DJ3YyA9X9Vck",
  "key15": "3cZMwXam2yWgxyxGtKPR87DoNJyqeEyBNgctaSXVYPCAM4k5rmTcym3RxPvMPMJU7D3og8fhrixAg8zM3R8iGP5w",
  "key16": "3schbAfi2AbNAiGNqw7ioW7eAYugMrGHPh66tT5wemhHDJRXbZ5C1ceoGF4AtH4qN2aLmvVz93vMMtYYNhuv8SQC",
  "key17": "5pLKNcVZg8WV1DZNWbCHMmTuxCzNzgKZysDfJxDGZV1JWhg2cokSSezRjxykfXfyEeKWL8kSwFReC9GVBK4x7sP",
  "key18": "46Nb8RWBXMQbBdfQV2wQ784uKieqhxvuuZtqcvMkDZVj276XYwd55HtX3x2teuuYroMrRhWD2eL27uLY3VkNfNsw",
  "key19": "3bqLNzqB2ZckgyLPLcnw1yBRmDTDEvCqBr6icc2oH6ZbkGw4sfvy4dB2ri1g3ZDjqYpWfWdirUsT5WH8zFRQCuQF",
  "key20": "5bGpAUFp1o6n9QN7D95YZPybAw6KgimEeWvj2z6UGHYCMLZhvBwF7gMcA68SKcnDzXBR9ydYfxzLfPB6RpmjJDG1",
  "key21": "1qMCXpi7SB7QLWq7wRbmQ9FiYGqpYshvsun5DTQDfk2L4zgX7iK4DPwY6XoEjyKdDmvBAh47RUjUHYPms5v1n5d",
  "key22": "4TGKb3wsReodK2gDwFH1RBxaaK8MRXkz5FbjUEnqezzkBAS1XE2Jj79MrqDGJBE2oUpvU36wXzR1odQHLyyS3Y8o",
  "key23": "4GVSYarg28iP4QtWX1DbQQLQV4WYQYNzy7zfzuJuwu9F8szjqS2Gbw1AEwRHQA8Vho41EPdkvjLaJa5AtFomTMyM",
  "key24": "5eXyHdeUxkvuuJiLq1WF33Ph1VswDNFmimsWPZZHWfvQbt9WMJh2duKjsw64oGXthVbgYbNiUkST8B5QAhw87UCG",
  "key25": "33qJ89mkQGFZLACYRhYFSanYvwggT9XGvb4mVvwrxR8tUTuUX1EDStKaXXBuKZ9fkwiayeCdoKpfewnk8CpD6E93",
  "key26": "3hS3BvpPbo7QQ4mywXUjsw95puTJ1jubm65GR6D6mNXbRSPNSdFCcbxfpGkd4cHVosk24VhMPf5hEfMJBRFwsugc",
  "key27": "5THU9xyQ6uYkTu6kG3nttKF3g6Xajpph9UmRtc4JJmUnxdiFxG6M7a9fJMwyidTMnFdNAJgUgWsaLigdSM5zb79W"
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
