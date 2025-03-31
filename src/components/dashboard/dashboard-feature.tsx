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
    "5zi9kk8SamFpUevXEhCB83byApKsfXm8xRZX3EK6qxooKvjbXkfRSA2cYEZx5smPbFrd688BggtqS6NnSegBMh8t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GH6hFTTxGuKVsWXozUSMt5NB6GBA4h1pWc69XbtsaFdXV25cDhn59WTMaYKCw2diqhmgwYHss1YEas3WtAF9PfV",
  "key1": "2QfPB3ujeUUsR4FfGPMka37zLS2Gk1jD6bu3aXZ5nUaSHjWZVa6uhi1jyDfDPmST1Q7hYRaWWqzWM15Wi8R4ju41",
  "key2": "3mXVa883qsa3NxX2yoLERaTYkNBzUwzSeJG7SqgKZonV4cCFmpfpkq2h4LUzq733ShTB4udLQ1ZFoXQ3yqs7t2ZY",
  "key3": "LjnqW3Go8rLweqFCefBL6WjGjXQgumB7dFA3KCK2pM22eS7svLo67w4jE8s8aWZHEiHh4PoNQw13v1doV46FWEW",
  "key4": "4KLmPoP152FwpfvnBZUaX2gerXVYYj2x4iK5D91xz2BPzjQM4s5oaGs84LL8FF9SUBd5rBGJBBmtJS2yh45pcxDd",
  "key5": "tyGPiNugh5DbdujP6sdaHtfxuMQwTkhN5Sy69nDNeXHTX5x4Zi6ddmxWTmfykHyzFfXJYNv8QsRTKHWsLEz9SBg",
  "key6": "4qGqBkjWmSceXw24dqxzbiFJ5FtAXkG3oXV5wZ2qt9Hty6Sjov6EXgeTyXFBNRhTkAfbac3K5SUXzwSnZswmL1hd",
  "key7": "4TXbx5gwpdpEnB4faj7bK2cjxsG3jmxPC9ZvsjjhvmzTU89dxe71mZHsMvsCPxvJ6ydhriB5R6vSeT1rEqNeE7L",
  "key8": "5TfjiUEangiiBHARuhFGtWHjMtBafcRdj7WVhM9MjiMp1PX8zwrvnZ2Dibxvnd7SB1MQMEGgFJPAzPrrjcBcj7Ar",
  "key9": "5Kp3fjWQvqibDrWodqK8xsavxHn1NJgx4cHrM5sDYc2mNj5wKaMXNxX7kKsxk2gUA2xqsBG3ynYBcDZxxxMB2sRS",
  "key10": "3aqERaEF9kFWb3gWLyfUd4rxQ1aSZUZYxFrX8LptooGBRhLQN1oMDonVD2GgLADdwtjTPeVUppMvjmTCzQVTURcT",
  "key11": "5SHvWmMg5eizXT7idhhCFSCmYH5ZSZ6woevKS7161zKQTWCFw3tsPSVCoe7vH8Kbo7ZBgipGHuS8rQxWtdnDPpE8",
  "key12": "31t8ysLbJe4mPhJxGSdjG6eLe6xAFAswB6QSbWoKqUYbfpqzYAn9KvcEXFtNDJcn8Bkn6uPLWZXK1B6v2cgV26Av",
  "key13": "2iGhpxVCf2QCWgPj9iHgb6yZvkh3FTggfmj7EXxmtC1FwQ8qEm7e5FJuqN9wYTPLuUVDsdCcH4zTvNZhaYN4L1CP",
  "key14": "5bAptf6nv6uCvqN4Gh45e4zyHsRYrrjTg66YGcrMHuoRrrMh2MthxJ8x57uCw6XaDeVwonnY4J1iRCgEuZS4AGVX",
  "key15": "5RVsPBtZZXKZnbbDU8qz7wkc75U8PgJiZe1LaLfZzZfdbuLvfzE9aY4rDaoD9s83HLRJMZHg593xrYEznpgK654c",
  "key16": "5bEmwArN2o6v8m2FN8qvCdW7UwTfEVFSKDHPHNq6j3SxC5oSYFnTpckpnBhm9DZn1WWrZJRUQF5A2tt3isSV2UJA",
  "key17": "5oHo7vtSnpxGvSZCiCHzCVUohQawTfcx5HPKxdQTywuubapCriXoncuX21Sbei38GCUJLBNFhWHUBURuY9FEgc26",
  "key18": "5jFtbhZtx8wpbmrBYzwm96MP9v8E16132QRpNnUyc4ozVo9aeASqT7NvFFSmbwYtchvVMZLNJF7z64CRfzGpJ5c1",
  "key19": "3yWLfE47rkhewcyfBG1E8yS5kKfWi5Nr2gcCTL6P11JHuc58TxJzLD8hXjpz9ShisSufhFVyqVoDoDGP5ZLUKd46",
  "key20": "5oXPTdCMBomtZJhi7RsfnXtBqecG4kTrvjnVn4gMifexDfzQHt7XnBkhJf4NdFb4osEMuvRLZuy74B9tohNCd6Cy",
  "key21": "KDWCrSRFghg5qhHGBqLSi2jPeRufETYwaAP41by7nWy741syvdR1KMiyWEeBaHotXok8bkF61FxdKxEXVMDugL6",
  "key22": "3oGEkBn18n6EW2jLsW9aVAUUJ7HqJ12tpWidW7U18QeXJor4voz8hpyDC7hNRNBP8idF5bkap6CT518k8HLKiiLd",
  "key23": "3Ar7TRFxfz3BarxXMhFeyzxqkEihr7uV5PU4dxFczC6PikRhqt5A7VUkXyAPLDDQUY1zGXwm8j1JEKvhQb9UTHTC",
  "key24": "X5GkXv6Y9MZEtb11aME7PnYp3SMw9cnAXoPYhMG5Dmxyy7fwtBaUfjGuYpu5u62gFD6UyYnACHEX6TqPkTs51r5",
  "key25": "4PKz8i5BfXBfoP3jns5KafbnUpT699gQRXeQqVJRtuFZiJ3JQ7UUxvFW91MWmBQMS7vbH9jpK4d549DLMib81YJD",
  "key26": "PgWhMPvBVFLSq6F5p8TJFrqoet4WPk5deuxCBcaXM5wqqSKMTmVz8iCc5Cz3hJ5XqLhgjtbsfmRPhn42mVehFxC"
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
