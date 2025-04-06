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
    "4fiRPW5RU7zXEF8hw5cejrrraPTP1Lyw28JvoFTNLZs744JXUsEvwb7kun1kHQ63ZMeFrQfmchcdLAzvRFvZiyWJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uwdTjYxDZbAeLgoBm9NNt9snoCJzfCDrUigVNSThQ9fXFH4pTWKtde3v9yyiQm25HBzDvfEGn59tYKybxFWjPzm",
  "key1": "33HNqRhzrQK1exh66NZ3CA2bfs7bMePfFT8uomBHRsvXSLawYQTA1jR4ZGGZa7ECHrgvcEPXx9x5sVW7atnbegmr",
  "key2": "272PoXHn1Dsat9XLjnhboynp6dDGvec6PcPxyyDqopd4ubMXNsd2VpcHKSxdEG6Jbs9K9ByqsCa6Arqp83i6RoLS",
  "key3": "5xdobvTVv3YrmeStNf3c9GCDKzX9kqMA8bKHCH7SJrjnnVLrp58WPgvVyW924CbvkpPSvHzgqx5SZndDhKZKV8qL",
  "key4": "4c7ZfvUjq3Euah2SYfxukvsazecwqh7oYodCp45JZ3pbyAYaAkn5XyuXvUTypVSAE6K6Q7XETCsanAGMPiRcyPQu",
  "key5": "4zdZyGq2h6fzR345hv9UfyEMXXqxjg9nhV2p78ksSrjQGhdvTqn1TMSFMtgwN1NNSSXgqLsTzPxp2W6zSpeMQKWX",
  "key6": "rh1KMDwy7M5PNZSDghTXWkt8mAj2vqjmCLEfYL1S1hu9phSpBJAKqq5PiRRWPiYuE79bp44MoYn6u77z5kEidEh",
  "key7": "2ezJRta4K6MsdE5my8VSiioiZXv9s3cd9oTUf9qcHhGBfVWrCdqQZ8ocgwPyF1aPrtEy2DKYsUuhuyHQMmcN1j49",
  "key8": "4A2h8c9Epx1VP9haQh6kdj5rSwENmrWZatr8briifujq1ow9CTc97J7xhQ8tEePftpV8xT47YGqGxgRrjuT2v3cx",
  "key9": "3Vougm5u2LpGVnx9KZ1R5pJJa4UgirRWJC3ivyazQd4ArHkGhgYLVYUBNBQChzGq3WJGkPu4EKtnNVTPTmVusAGe",
  "key10": "28cVtkMVT1GkVPKpEXQ9E5xMZBeDuMHmumFHfxEbtHdyC6HD6cPk1vbznjMnbifcarhC9bsPw5BZ9BXBj5BNRugR",
  "key11": "559B6Z4GU12SZqPFUipcvJtDiwb5Svim11NmqdsApsD69ffdRyxoaJEGqmpGH8yBMdwGSqVxwJ8iBCbd5ZxAv2vZ",
  "key12": "LHb32R5UWohZUn5QDVEZXTZJ6Nrjb1Xxe4oDjRDgksSn8TEcSLSE3QBRxUzvy1q3m629AbUV8DvhhXNRXy1ruo8",
  "key13": "xeR9u3FLrMDWjMdz9T6q1EDBJRLmozZcTwSXRsR8NRV1NKza4NQEmsNCnjJtysQyuoumm3zk8U7p9YriczRL3GR",
  "key14": "4xZbgXkJbYDkf8e6EsoC5BkJBxR66kasuyfr3sZF14Ah9SAB5dYAG7c7w2xow7JD2BXBpaPeMZBaUN2Rdur4ogRe",
  "key15": "2BZKtwVTi7g4mv3HjzV7eeEou5hF6vPgbwQyP97and2Ue2kfk9RxZuKzptrTqReNxCGw15eeaZTJ3ueeiFGTdnpR",
  "key16": "23e8hYF9YR5SBxthdPRHDBn4woirRhx1xgxsBq2VMyNtvDor3h83o7UGpRgBipPeJXNcUYW4Vyw6rXyXUrVW1Usb",
  "key17": "46gDqN5SZRM6xXfc46Jk65HNSawPcELFBWnPdPCrK2FYZVpu2Qktvij9iTD5UoBDYLxNLBcktGDYKHqk2LF7HYSj",
  "key18": "5X6xenyHAnNhNURXHERkuW45j1aiu5nqUDphsFepxVxywRB7vXyReyrUitdJm8eKPQSdttwt1kp2VXG4KqZWGoQb",
  "key19": "4ogQ1iEeGhCCBJcjMaeRKhf7BZzPa4RTBJRJKo3gNUvHKqvp1PnzAdToeZGhTwauM4Ue1cz7KvWZcdxAkRjP2GA2",
  "key20": "4i1X4R5qpXpo39Yv2vsbYK1HNSjVQUc6kXioquyniQV4svjcTq9ra2eh7bfAtMvsqBFtzPn3ci5QvcAXMB1kdXaD",
  "key21": "AEF6FTBKtj7nQ26oKwfNHWQMkqbQoSYKnzQzzaAGJXA711XTyfabCuMgRAEUUHXoRSJy81xYbqzqvNAo2wvQY3n",
  "key22": "2Tc2WCFyC9GsDVF7k8PR7GbRkiPEb3JYomRGyWBGLHLNLiTyMh21pw7dd7E8ubwU4FSBDx5GBj6g85Q6tdHsdGJN",
  "key23": "Na2rJ5wo7aDgEeVZ7w6j5SsJsNxintGG9A9bt1svGsCXebozMYbdweNi25rMVfuijPM9kF4zUZiHkBFa71w7Jpp",
  "key24": "5gPPyYceVWQBeBC5LWTTELah7iEHR8XSdNzQRRSNEoHPZWUVtFv3ZYCQLhyLp9sqfFp361CCEh5dDPSkptep9YXg",
  "key25": "5TuaodNxcYMJzvZ9xzCatQ4fftUeFzThcovDNRVSpBPe9UvmKYQ4KYWfjNz7icULmssD1pEfdAiBkAjCQLZjJ9HJ",
  "key26": "22vbCSRk1ZdeSoiuEPVBgy3TgoiQUA1jCssf6WWfnvgUo2nLR3zuKPhUnwhXYYMJcspMQAtjSEdAgDa8dTjb2Ucw",
  "key27": "zPRVa1PpwVYGk5JVjJXUWKHSrCiogMPrMFsHVeQUfwPn91ykJFEKQfkRL7MTNr1PYp7G2s5SjgqPvWRUdav4r2V",
  "key28": "2TiGvmVsUPo6srERgMURUwJLFP3CjTCfskLuKrdQgz4c39ogtfgVWs19aK8Mu6Uc97YLMyQpkxmz61CKwfwLMX5y",
  "key29": "3KhnQQ4aQynXWeZptikVvmqtL9UjQeZEBZjJvbQtNdFDNYX7jihk86vZDRfMkMrVM9pyAXHdPEczzYCijrwroUpe",
  "key30": "4AdYQUvU6CW3igVgnuuU8S2Z14hH2b8UyhiC9iBbfjWn9sRcrh4GwHcLJuskmbRSD3ni7xcHa1C73nQ67D3FP6aN",
  "key31": "v1rQjRJ7VfFggrdq6B4cZrw4gFZMdm8Bg14dQTUcmboR91b54j6xCvgS2qH5Dig97x1k9gaF4CZueJgBa3j5Cw7",
  "key32": "b1wVj6KtNB5RXmNgWPKpqXK7EmnZELb4BydYKbMnyRFBWCSxpS1ifZegRGYjUAwgwgNU27VgggEyyw62VQyweXq",
  "key33": "5WAMh3ggZjE6X91nYJixY2DNpSgtqHtAszUQ8BP18MhZw6wkkAB3CR96nVsrwrDspACfoEhTAhXtRSt61dsYa9A9",
  "key34": "2jBxpXE4XBiwLL2hKwKiJjbkhCaBbHirmix5iMpL3B7eN7Jq44neVTZ8HtT8co26RfMaJ7qNfxik9CZ2FjcN4SQe",
  "key35": "729EsD6LtYtXSYFEACjeY9wmsrHubnkVFrH7ah3WxLqSJqFTvHbDo4ibRk8zh7g6cEnAvaGvggEZyzDUYgwisBN",
  "key36": "8qnUy26Hx4MKyktNRimJSg2VgjrKEMugcs33PBFA3riuLzHb3rhLq8Ly473EftuuAtZWMsDSW9Q6wqnoeoUcGcs",
  "key37": "2hBEKvvnBCLyXSfQGXbqjqG1toQgCVKqaGqvkUnyGmqWotAX6vqLgcAPP5N38L3bU42BGpZpzuQKSkQj38zD9gJj",
  "key38": "3SAPyoNSzZr9o6PqcdxvgpjR8AXEnd1aMUoPPeyGwJfYTr7uddmj12YG8zYS3FzVjpPEqhiLbbVLiusvnK4EVXEM"
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
