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
    "2oxLTajaLJ9edBqrpVFas7LFs8ziMh9HPmhhoVYmQGcHsXcBTXHDTVSqubJLBQEn1eZ4KmWfQjBERiJad1fWx6YR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hnsHDE28css25ksmtsJ6wnHreGsoUzuqVxDRd3oYmt6tR7DvM4UArpkU8zNBjC6Mrci2but43HTHutVcKVoELsD",
  "key1": "4LUqYrqYHdrPnAtkgjxLa2CbxvnaqJQdYjB2275L8KUdkfGP61mBPE6YCVm9HNEui98joYr5vs2C1JTTXuNU25xV",
  "key2": "m7ahtLfDMNc5ijcnSwrSYx7PqcTEd7XJsFmgNL1T2SLXy9XfHjqfHny22ZJma4JSnGLQczB6WpopZgBMLJKdxXm",
  "key3": "JMJ5FexdXTeT3mQAtZU54bchjJUTjGvF2mEBQqTajWW2djmeZZvy9z3uhJUfBczQPYs4QLgMzkDMLJ8tbFrL1SS",
  "key4": "5SmNoakYrT8zhAhcZvcCCgGBhP3Bk4uEnupKTsF8a17jBajehtw7qoEKkr6tjoxEC5j5P7EVRLcZKnPtCHEUYniS",
  "key5": "5EgDpQXSLWMiYH2w5oY4tT9xHVX3nfc4EFBfSAnJWSinBR9qraoStn44d9XYpnXK9Cy7xrRwWyqRKakdVGgPW42M",
  "key6": "BzXDWJSekNkj44CsahXS2Ht29SFey1pnjT48hRa8dx5HtSGKbqVKZyDK58LsPeLcYaSKx3vh3dFhRYWXnWwB6GA",
  "key7": "2mzTZFqU8uPWEcMNDzEn1fuw6xVgxFMJXCDx5SpSTjBR5DuLYkyxUuuYj5CUSGNq26EJLsqWy5pEngNLjjijT1xZ",
  "key8": "5Fqxq9uozj4L28DBvFWRu5YaxkSP3H2Tjt3asYdhQQZ2hgatirJQswDzXnkQDStACZLok2a9cp1TYXDR43bA2Ri2",
  "key9": "4k5jFSXBpEGah9xZyNcbNVHZjfrrERcCReLf4N925vtoa3aXfMNRPQuHRZHpPMhvHbbeHUWYSjiQNQ1EYSTDqDem",
  "key10": "5ucHeBkW1kji5knNswhQnvM4ysuuLustjgn4Dg8B1L9Y5eWSpUYKyTCg8G7zHJquLoGnJmUxHuzaGiUfMFGXEcQC",
  "key11": "66SAqVsWfb2SmXDSG9ajCA55MqP4YG1EMDXcZEyYkrsF4S8BVX8sN97qY4Uj3fwGALUfeqao9acF4s6uKKbkuZg",
  "key12": "2rkmMGuo6H2GPDLoKuZGJotq27kJxsbZCXE9imk49t6kNdDTs6ujiEASkmhiyQGAE7uMaA4VNsqVB734TtqEPBFC",
  "key13": "4GbMaEmiTM8Z91WCjimUNNG96BoZr4AtjVeMGeF682aK9aumr9fYhXFp6W9cri8zZLdWPK72kmEnU9sQvn5ZiMQJ",
  "key14": "yvsQ2GLycChh8vbaMu3rGn7M6UXZMcSx7SuS6TzQN4To73seoQ1g7oM1FFYD1RbHTDX7YgQnDq6puLWgJfcVSXb",
  "key15": "59SBVmQQo9zKNtNH621inDvztA3uLnQMEbAFxpnk5SxWFSZoNa5KiGrvmRLUMqSP3DAZmmVsCkSJxrzuAzKzQpYj",
  "key16": "4exycyUDjNpN4EBEiWaXnDmgk7DMDmJ3mj2u9WrDeWiXpgCUYjg86x31HYCEa1qR3mZ4gpV5fHkAhuJZHHF24zAN",
  "key17": "1qEAAM2JRuKUdsZNSAvbmdTedzvfmsDtqMogZRUo4YADgbVjbhuGUfd64jwfm16nTHb6NKpfck1mJdmDq5m5d3K",
  "key18": "46kWGK8ZQ3tAdtNaQrGgs72fN95WXUMNHZDW5ibZSufQZeiucDngZvHD9m3c8iqzmi3fNjAksDicWmrmG7JviHY3",
  "key19": "4XBnPwQNQoKeWGkZroGcwDa5aUnCYwoojgBzyXff7U7SLXEZs1PJrbXwPkzfxsDLq6Tb18DzYGHxUuquNRPEXsFn",
  "key20": "4fTqkMmVrLzkSj4KNFzNY3j8hXGKevTLp3n9oLTMoGNLHBDkCPZxfV3387JKuyHUGAyDMLT8QcMPDhpRJ1zLxYN7",
  "key21": "2dfon65xb8ez9A7asMxvHxagvRTfH8xKFnuxf17AEQfJz34eUByvDDdB1f6rsXGq7NBv6wFJYaRxkNqQ62u8UQAz",
  "key22": "f5RcBg4oDWmXwhNGRnXqJPwsovv7ysFyU57C9vSDC8eArb4kZmbBh1Q4NdQuV29gRfkNdSv9YTNhoRAFqFzw4yw",
  "key23": "5zE8sWvjfvyyAE9N3z9tvCtbrWGtAYSPS4WWmcYcepLSNVfWApoBMEXKP1ZsiXybiygBUQmKUkN6hGgbjtDcaU1v",
  "key24": "3AQY7DPZ3Ci9WMpiG3QTCTgiZ49LZuB1YmQi1aFcnzCeKHvPW2fe9ccafvuExSFANhwrHHttMutqUCTw1rPV8LVz",
  "key25": "5NwUJwtfTKJFCno5hNH53LS79qYtfiUF3bBndLkbzgdmH7bdPvM9dsoBY2edZCMgdq1j3w2NDXPiX3mgDEHfyTeU",
  "key26": "4uLHyTho7GaRsAi3eSkyQyvpgZDzMGXBTpWyX3SuJPwXpKVuzqDVg8Phszo3KULtMxaoKXZZLoKsBsSqFkHQMngF",
  "key27": "5v2iYv4NhCsuoRnMoJ4gjMDwCU7gZ4MUvQxFneps6st349GAsoX64qnEwUJQNSN7WnF3KwiawkaurcAVDa4gVGAW"
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
