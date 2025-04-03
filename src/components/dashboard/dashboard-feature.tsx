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
    "4zFA7eQxQ6nYpJJzMJJTCcqpguEY1mBoZ6Gb5KtKATL3UL3LmgCPtQ1WrtVqTPPV6d8RUxpNSzh9gYrYi2KeFErk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jykP6TDrAHCeoPrxdrohw9JZgNajq7Hv93eAbj1MTEY9xmVZo8VbGnDU1FrAmpP2TfJ5FurLhddaJ8jwnhVeC3A",
  "key1": "3hxbTLf4iBnJABrV2XgMfDy68i96pszVzLEkfbhQN9cssdXFeMRaZzH8VJKJVZHE7iB8uxAUHgwucjzHg8YWxdNu",
  "key2": "5qyf4oqTYQaeayGY7ENXXvmwfHBt6F9ainDr5yTjBvj9bcTtrDrHbncw32TqoqhdB7PopBSJ7RDz6jBi5GQHksWJ",
  "key3": "4shTCyXysXKcCzbNj9ThK4mndnBbzpHxczW9MDdzhZkHXaYTgc1rKmgqKF4u4nVzver9AdDYMzzZTSsL74XL4Lu3",
  "key4": "3vZ3kNFS96EJsKGqFJs3SdYCZfsRW46VNpSg9QDJt3rsM5vqzw9CjTtgY3DFoQDjYQnuY8B6syQ1ABZheuMWJ6by",
  "key5": "5V1A3YAysiDsSy7K4AmXEu9baYdnDwDktPykdnjtjX7wF6eikX8aSL8DKRLberqepcFfEhpac87tM2s8ivFA3sqG",
  "key6": "5mujSiYZKy7F3Zkd7TSvoqaRGXG28Lz8G9fbxgZwjRh8eyyK8h1VwYCJxYWcX7XnGHzTP8pCdqU9jNBnwkojojEo",
  "key7": "2sMMTCCyj3DESzgrVfHmwRrySCDxptZDYZ6HeoP2jR5VyMyxLHCqtwNGtEkXFYvYa8AqDwf1H53Px2cdbWXsuq7F",
  "key8": "5Bq1Es5BvRjmaMQASzpcN9k4coaXmMX8nuGDAF5PUoxwCNeFp8TJisseZ6u8S8PHrp1CQ1AJUVZnRXxPNqyQqtwi",
  "key9": "3ecYXPydBtqVc4Jgon6ahs81d54QpRFP1hm737Q8Lms7WyQEa9m6EMqHkpCXMUEvi2SfbdeA5iFJ9WS8jdATsMDU",
  "key10": "2tZ4Bfj8TxHcoU5C93CZ54NVciwCSVsdkAZT9NFWbh9GQArCWCurpCtaQQX1o7LCDiv1YDAyEB9nVikxJJXPGr81",
  "key11": "2LzAQExpvsuZpKbn49qaDeRPAuD7Z3rAtsi5ZhngrjhQuH7cWBgAwtrU98t12Gam32NhCeaxtaF5yV3RpAdfpSFh",
  "key12": "2C4ZBsbLBeqZDcKh5jW7zkub2NVvx9DGbPiTVTZ43b7kNJTJXsKbZWmB1rfgJNhXh1LcyS1wGSLuw9ZJRuBE5Ro",
  "key13": "5F2gD7kZSMVn8dS5w2S2at6HcYuF94DUBqFJpGFkBgiPJ6cbfLGLQ55Ej7Ve9gAJWBSPFC9gW1cA4fpHAVKjMTFS",
  "key14": "xjp1Q9c7NnT7da7SFVn5W3gRnkYBsu62P2xQdHkWPKaJX4NmnnkFXUSKATi5XAWnjxyD1QNbP8ABqTEPFNsoBzz",
  "key15": "3hD1AmxPNWzcnfhgFYQfvHkV1mmqPJG1WJmVCYZPcf2bLuBFpYgZKS4tvVNkASvTmTiHB51RYGZC4HjDSd5dEAdp",
  "key16": "5MDd9qThxGivFYYbfs87CkkY1TU8DPowUwY3ErycFhZwQwaNKmS29Ki6uNFuH6WUiBBgrkKtSEBvPhYWDcXk1Qv3",
  "key17": "55h3e1ZfxkphCni3ftRNa2db6U4yiXMuAkYpmPaCAHeV38AouxtZetXsjbQQYuUQUmf9QdFBazrHote2v3NNVjy4",
  "key18": "4MkFvEWtCVw8LAooa3YBqYCA3h4QKceroxMK4uzBzWpErsJN8W9zzufTZqATTZp6KoccPGEhbV5y5LCgzf4uXUtS",
  "key19": "3fTrJZZx4hhd6YFf9kBjnDSwB7VoMSvvBJcLEBRJqXYf5MHkVAthcvtyZ22r9UE36SvocUjtyTjHWpoczDyAJiYF",
  "key20": "27Bu6rnva9ZPyQ11yaRNzAuEqerengd8dmDYCPeXc2mhWZp8798BPkpDSd8Fm9sib2ZbgqcQwD2PvVthLN9JNyzU",
  "key21": "3qvyd4mweSYs34BtfPDSXgWd3jP3tAMRWi4RYDcvFD7He8y7ftF8yooQUqJyfFJwtCGB5f6QQCxVHnfyFeFV4kjw",
  "key22": "5WioUzuJZccxxGJnfWNQFNj9dXyWg8ksNJxPyuGQPiPc4RJ14tNDkAwcTvRsmJ9sYYi2K1Eh78tFLrJA5rja9dPn",
  "key23": "4HLnFVuyGVw2WuEtMQMjGUKCo9Z7XVF8yXLyuSgyPCxpUtRmoEfajJaa32YefnwbkZJJVZFjhzwW3DiVHpXx2K7B",
  "key24": "5V2hgyqj6RiRGqeAQW1P4vHQU6Ngu32cXXq8v4zd7sg5yyMUVz3XiznJMhNmVb7PsL1RUsiqQvWw6X3Ji4ubs9Jr",
  "key25": "4UtjmbkomcxtFWqLTbtqCtRcmSUChjNT6nPDYSmbsw5osx6og47TgCs4Xn2XzPcfdsNeguwf3t7hn315qMDDVYoB",
  "key26": "yUAkF2ubp84c7T6vfcth9z9W5ZtUBc5fqDGYkan2Kx6eSqNaLKHdp1chkRArspEYgoWYs7phgP84DYukBJXbUcv",
  "key27": "5NVNTTKtmiWLrrr8DYThnRTDwMyiZyXQ65Gt2DeWXLvE54E1NS3GciMvh381vPkLjNuYxjYDBiYpuK7pccXkDmsN",
  "key28": "5RgsV2s7Q13oecK1sKSsJt4XvU1i3k7KvpZBw6M4aLNrQducuEQCRMnBFm6R7cpS2A64tKH9Ny8dx7GY4DDHNp2U",
  "key29": "37dKRMv9BE5Q3ZceH7GfWsUEM7yPWjwgFn8chqXQF1fNdBpfxPPrvkhS792CpxLX1SF9wqp5CwU7nhk2ovLMV8UY",
  "key30": "3hw9Cf3YCpdXirxBkp7v9661Z2pNioVTBvkVuqmKuGCCeAPEzEQeAuopgnTtPYGuJduwSbEkPDvtpNxpbBRvuB7m",
  "key31": "23Q51zNNqf32qePHBfqpSYPxHcihfyPxwMemfZFNCfCpUWEA5J5LKRSCNbidNB5FhhZzsjRqKmXfehnC3yTeh313",
  "key32": "29M7WCWffwDJBBPCMZ4fDHzszUKaFDgMc6Z28S3yYXiv4wKghUJjEhuVqLmha1YqEpLkVFy74mhGLvmqd4BM57T2",
  "key33": "512y4TX9gyPvimrQvtgBbg6TWx89npsz8PHPjheJbY9dat8xnHbihAtqtBTpMx7XwEzFiAQzzJjt1x7722gv3wFw"
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
