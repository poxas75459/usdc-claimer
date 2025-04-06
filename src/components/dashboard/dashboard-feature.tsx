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
    "5Sx7WDXLbAHt6itxaGNVSL4hT8WJqKgvE9JR2BqZHoHXromjv1UzNzCebmeeXpzppQAwoSG6H7vYwnQk4iDyYJrL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QaHyoJjydgV6hAX5FemrH1btKLqW8ugKYC55CCvyKvK3ZkxRPKNW4jRw4qvPoWFa4TSkGLQUvX8XuEfWxQXbcJx",
  "key1": "2kdKdXLd4Zi6rG544SdGBdNg5FthTzEYmzf1AVDPuKHstBerrtUJkHpxuzTYYLrvYR4vJeTJRjWA7ijXifpAJqvf",
  "key2": "3pqHEbN9tsRStN8mgnPzzwwFnrwSFmJJDQZdJ8eQgBtm8LcHLHUbDZWr6QCJFiRfmZp3Gs2dCJbniCgJ2EYExWjg",
  "key3": "4c6WWwQ4C3itwRMRJVh45sqAvVjf2o3BsqEhqoaDE2153GQDkHqtmE3oqvhsZz8JqK3kdzLZnjFsbgwG1GTcXpNn",
  "key4": "3QqYVVhTL4sWkdXRwKoViRU8bQusrAHiEts1P5DzyUKxppauG3fTovzRWSYWS6WrowjEeTHsNbafYva4w8WKNP2F",
  "key5": "3aWgUUmgyznz9nJ1xveDpxpvgxETWfH1GDuD7745F8T8iucuGzp8trXMGLVe5R1typtNEEyge9wqgPYg7yFidwEe",
  "key6": "4a8KXkZkt6zne1AmwCAWqa4JYkVfZxtk4stzEWTafiQzgARipd4aUnwCaLZ2vkfyRz1JNtN1JFAHoGwGsSEayZ4u",
  "key7": "2pkio4NkysszQiWbFdJfkSFJZs9CcFe9RpVdtE2hXf817XFnsmucRG2CqL8EF41wi5NmB7nGhFV1abgzdzLCnH57",
  "key8": "WsGMB2Xde1W2ywtkLb1jkR9TSUtVrrCLPhZidkg8ndWxjeT2g5AzAzX7wMEKrz9RNzbSbL5bk3KEVSvkxM9c3BJ",
  "key9": "JgLkfTDg6hL86DSGJp1oZ2ptiNK8c7nZ2hWcHgth16cWWrH2fEZ5a22yP9riZetaLAadnMPTjRgZnnzTNv4LENG",
  "key10": "RrNng2pg9QjrN2FDPW4EnVEh45qLQtYo8VU6Mzf8h4bTNLitxUzFLxxrL9k9JVxcqV8AiK5yUMtXhiKH6R67Nr1",
  "key11": "42DNTWxYJQaCv2K4qpysJV4Y4F2FfHjZQnCfBxBK8rtoRLt2HRtjzWEBgxjdHwWmqymA7HJn5WCBpdG2whv48PYn",
  "key12": "D3WQqMMJNatES8m3oqBimDf8tdnnCvnFxyyogpcku8yysjtQ4U74HAYkN7RJ4DKJDei2W71ULFeTLNngLek2jPi",
  "key13": "4MsvJxXZkLzCbzDoTAd12oPNxZUQPfw2jz1jqHsxNxqsdquPznjJ3sKoBtv5Uc5gJncNxEpkj5RfpFNpxNcfinyw",
  "key14": "2pt5AiimU1X5pRAyVXWDt6dgspcdzVYHugb1AF8CADPvDS8syAf4tbg2Rj4fyRK8ia11nX6dnakUAusUYXQkNyn",
  "key15": "5X5wrzMeY5VXjZm9FgaKWmFb4wkYVDfEmq9au1BRUxW7xRVEACUWyyFURL51y13hUmwghQFmvoz28xzKHD78AfbP",
  "key16": "3ZJRvzypqp7dq2MzXC5pvUA2xh9SMjTvRqS1iHddUv33iTQxDCkUHqhhghkX8TunbWUHtssBM7b6BJsRXizjb5tN",
  "key17": "j5G4FwsDMAkkoZ6RYUiPYEZbto7LytRAbyMZqrjpjBeopUpJ7gDJZXctVeTCPXZM2s1FNQAX5rZV7g2nWz9rkPe",
  "key18": "hGJg8bEfEP19QDUoxmdQN4iNJr6wpC5PqyHmBXTg5YEPMa3pDwMVykbaXFTAyAEDVsgdY6uM6VH1fjUJnAYFGKp",
  "key19": "4cuBZ3Nsg4dZrLJL7ZMT8rucUx9HRcBNHeZkRaxoxmUG6WhUEEJxCTHZ4T1aT4YGmLX2Yoghcf2uLanTHJ19amVz",
  "key20": "4H4NCr6RRqhgZtf9hQ9AFJcTzsDt5anfc53L6hiqpfrbCdEdQ5mC41jFvE7p1B7EoMJppyCPD3jVjqnRQ6ufcyLM",
  "key21": "3JFfgErLFsJVNJNxwpabiJ7eU1N87NCjTkBidx5U7Er8kYUUrfDPiPYsuKFYgRhppKs57AjaERimD1iLVDW7zctJ",
  "key22": "42rrCRLiZGn4JzWQscmEDQWmcURp7DQWjCHVtmMMvKF2axtjb8so4BzHv3NSfCMrnxpUc9UT1445xiWKHWo4Z6L1",
  "key23": "5vRaz7S3qBhE8eCKqVn1jd8Y5ujgwEnRoTb9N4Ux7o6jTa1ZsfmEgXdArhsZdvvgzwEAD2chHgoQB5bzwpqiV4tJ",
  "key24": "5fDcUBr5hWmV4NCcncnwGFksJZ5sMLnhqjx9wS7g57GZX5xfnAws5KUUghQk1JxhtmnJHuEVuKukkLi7rqRnChAY",
  "key25": "3z6Z12vhFC37uYMAdQzu3BSdFCLGY4n43odDtwB2HeNuQ1iw31U7oVUSPU7uGbFUWAxEfz6QqB87b7cLhNTszKnw",
  "key26": "2F7AnABBUvAPGA1MpXiigYrQpinRxTMV6JhefD5Ht72z5gfxJVRjM3Kd25ptzqarJATuCSN8Xy4Qp8HDSny1q3UM",
  "key27": "5dTGdpkSDLZSDo7QdSmugN6d6niVEdAkxCYbSM9XNWA5nnW9FobkaVvaKrSbSf3HEQ8srYidjoSZpDu15bhQsXNy",
  "key28": "4b4L46yXb4f8MkwLUn2YT31KQYBURUWu5bNXdduggKFAc34YTbKXxmHWLBEDRUZzsLkPpyrW91Z6BSVkWw99Rweh"
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
