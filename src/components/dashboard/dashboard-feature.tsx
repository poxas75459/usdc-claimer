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
    "2vGt67ESC7xLYQ5wvVpec3Yv6oGkjJrTiyJunaQgBksLsf2zDpaTekyc3Y89Nd5MtccHHMYgy4iyqh5EVXxZ8AC9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DGzWgH6p4WZq8HAfH2hJKtK76jmEVaq6UeBnNY4hNT7rQdtYtuE1FXSpvPsrf3cpT2dkHiQDwcmng6cRrYBvcbd",
  "key1": "5bvHHzXZZHGvam2sqT8V1tRsw4X8WE6We3HwmhNfSJbgPaagK6rttfLc1JGq4qRjb73v7RFu5uZAWYYdwW4upE3M",
  "key2": "5oMPFx8zgKcT9qwLK7UEJR3HFc8Pkn5KwPmqenNBYj3Nr9RqdPoaYjwxExpN4xk68ZtDsfuVYzJtsMqHNodjqDwv",
  "key3": "3L97KJPWZfp8zmqbuYrjdCPN5aNoPZeMgtE9n6GrKJSSeVPxqprxmvVTJzNH39SgAPfpnA5FWE64j3aLeUWnYMnS",
  "key4": "2RCTgjgYMH6E2fkSofTYohMAN1FG1p3R9UcV7EGwrRaFJwVvWUkwyVxpy3BPiXZnCuojaG6dQCJUW8QcgFscnbhG",
  "key5": "2HpMJhjFdNGN1yy7w2ocMSVQjTGFHLff1vGPofizBbKXumunNHgv4xENMwb3HyxbbgfLwedU2aeTLXiHjMoCFuRd",
  "key6": "5es9GcprpT6E3xg8rST5WN3mYZwF26tZ4rRAC28EMCM25SiVcvHfd7mDEaZixN4pPnEupHa8kdtu12B1mZPpu5oz",
  "key7": "2GYu4ZYkPrBSxMJjmEz5xegG3GWSTm4PAkuJCVGeT82sdBD9tQG7cchoad9TvF1b7MStFtC3g9WgJnD7sYKRLmPA",
  "key8": "2Krav49fm8sU311fwWgvh5yKn6ARmfqioLPWM1PWZZqQ5ZqJJh6W1cfKXxfhQwVwuLqZp1WRGaVYNBPP1C1sBPry",
  "key9": "4ZBP2xZxyEu2nyRVFCZYaYfq2gMG44Zsnq8Bq9FW22i7inrbWvWBUdVDCh5RmDrCo9szWstA6rXnupEv3Duqsg99",
  "key10": "4f6ZGQHZ6Sx5SKe4qQSz8TZXM3yG7pcJJgvZJpcEZCBGmwNfkVMuRoTyFw4WPHjihQH2eDUQo7JPevZRB2ZcrVxj",
  "key11": "59BYiwp3NP72a2PQLaWTXNWdwa89RFVXEDDJ6mqdDPGpHCprYdWy8ZDVCas65tDAQ5gGM3oN3e2Cpe96bSxVKAKg",
  "key12": "2QqT1Sr6CM2ikGg88ZSsR6Win21713VW8pLv9baxKW1kL6o9UyFFCHtiMqLzaeTmivBJ27mzBvZEc6w95q7V4fEV",
  "key13": "4dY6ANauzueWENJRyZjWt33SNeioCJ5PotRzsPViLiXiXNMKgpN6nqVota4yCPFQTkn6KuZjGLWv1JjyNfbi9ojq",
  "key14": "5dzG25ox2zk5NsCYtTgA1Q892TvYKqvNfFJqWtQKx4VxvKL3LjLeLXw8NG6G49YUiYRKqQVe6JKH6Ek3h58ZkfLD",
  "key15": "4DQbQWudVjTMryqVYv2uLyqcxT8s5fVNTcvRX6tcoeRBNGDqAr2gqvzqFxfqV8dN6qgutEs131W3vRsMEBftAxpG",
  "key16": "hZn6PVqUvXbENXaWK9pBxGKo8xHokELtRyvfyJQG9sdnJBB4TTNy51HpJBZhAq8tHbHg6vpdotawNyQrfZxuZBr",
  "key17": "5BRMtoybD6CiG6WrvYWWo9bz9oK5nDCufRzDZeudpP87EFQHMZ3z3n6d63nkArRbF8MLdutr47qgia1sy2RJqNXF",
  "key18": "4EfeaDqT4uTWq4yBhUUCs5bsHYh67ERYcTQjdiFWqPBGaBxKrNs8i4CW2ZJgHstfDFY2LzAVNK3eYo9Rk24iyhwA",
  "key19": "4EZmLsAuatNGGrQHu8cdJUWcu6ryidYZAiMuwPkMZUj7Tr1kRwsjyEzuvgycgpPC1yXYk657GmsgWAN7ZTW4EnuD",
  "key20": "hrtEd2YQnYCRvTKGsBe4uELNWe5UYpU2D7oCuARrearAawpeeZ5X4VSqAs2Jfd16rtXumGKN3C1sVLAZLTNZgpE",
  "key21": "2oYA5y5hMJovL9fWn1kQ25XHXDBFowoCbY4SBG6PSpmHnA1PwQ6GMSmHUwC8Yvmo4S515T3nj6YiVP1i6D7ayv4D",
  "key22": "s1w6547edeK5ytgnx3Gu1CGak2AYdXawNJNwzdPxCA1y8VKu3EApvL2v2PpAJpgyVKnDUgBzSetLuvafqh8NEwR",
  "key23": "3rCSg9znD444QMSNPfTcfUsfwCvmm7GZCnT1XdLtk639vMKu6xBNooPmoMbcJhbuqh9pcQdUc9xdV2qdPjj6BrJx",
  "key24": "5PrfSCHdrRBehBeFivqej14rFHWe3qXfgMFphbkQemhmQ6asBWSUobpGATa54rh3KYiPmDDTQBkqhX6JMWttoh23",
  "key25": "5AUnr6CN62Mn4TPWrrP6pdHqRkVXYomhU5LSgeE26KrEPXH1Ejz6hqeaJp5mU3RYdKL3jaEPpMziTSikhavVq74s"
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
