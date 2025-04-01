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
    "5QU39dPXXcaDGVQR6yp3QTz3dnT2E7feQoCr7x6TWp8UJ8UzeMemaJHNAxHyr42pQQbvDt5nt6pGSyj4YCvyP8WJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35haiQrTqKHxcoYjSdBpovWk9DvsdGRnApRps3VUZgbRcixbap66gUmvDpgRkwbyu3X1sat3CacLnkgxpuGToLLr",
  "key1": "3SjFHfDKbbczDMSV2FyT8uK2SaKcYWnvA3A6pXyt5ZQQeNAZv6YkJaTf3p6BrfY8cwKfYdJqsgcY895Nk3a5xAaU",
  "key2": "3cCXjMk8hnAJVzJvBoePyEbecWVrcBjZRF31hhAzw1VeQzskrnZXVoRqHaduxaY6TxuuGhgBPMD9c5oiSQxFUAwS",
  "key3": "2HwVmZmcAC1KYXQ25DcrH8vESkvrdJcBAefFN5TJcCRHBwza5noquEdR8q1eR4DmWn3vH3pYMssxxErB4F5m4Rv6",
  "key4": "8NcWH3a4f1AkSgjtb2tGeEPd27ojm3Xhb7Xb7ZwVYkibbwbkzP7jDwd1xHGq9QdAyp9tjb8exf7HoMzNvGuCsBm",
  "key5": "4PhAWCzrDDyDjxBpypqzsJyCWixkgmLMcoqdTdYzyemojyMJ2Ph9EPLHNnxX7y9LqBX719Harw7qfDYu51ieKiQ6",
  "key6": "2XuiX9V2WnrbZqt5G15D7N31fAfMBMLhjiL7AeUj43vhzJ42xUwzEers5AYK9NJWU9e2rC2kW1HJ46mx4njg5n9m",
  "key7": "5buHSeEXVhayoXZeDxqGNegfwkbRoUxTRUqtkXenjsnc1ViXz73gckiYKQT8FD7u975RnLf1acf6sUZbaewCmc5v",
  "key8": "36XPH2Z9KmmWHRggeRKK3ej7TdEZ1JxZbJNN7ywrvfm14QXs9PswZWcBJF5bp6zyCxsrMkpRCubYFJPc86pTBymY",
  "key9": "5HSEXYiLimmdihNbLKvBSNzspvCT5FgCpERv3SsvHCA24FePU4szruJEDsMdkVz4YdNA66855kjAhKE3kCx3zMLX",
  "key10": "XUR9k7WGB45W7jz5FRf95Q1zhDwhkAoXEbT5xubt6pXJ5ojvjWtvGgn6Rx7XHy3xcMsPVoHWCHe9GYjp7a99on5",
  "key11": "3udnmwxrC3eWtbc6pRY7FYymTYN7519nVwyE4cm398UZyz7XL77kAB5gCNLBpKdpWaaBcnyPNVf4VQHFf24Hxcpm",
  "key12": "2CNsdQ9iqF3yEoY6PLr6iJWLxXdZm6kkBFmyK9eKzY3wA2kVaRSnWguQ1KWbsEoKFGSR9kWKZqGYYDo8NoFp8W4o",
  "key13": "29Ks67NaMDhV6eJEAv53g9iDtUFJG3CKbA8hE9Vhh7sn9fEraPfjZTLjKNfaCdLNoaHA19rFnVLjTjEk4baKaTMP",
  "key14": "VRCxnZWv1DAWpQFB1eRNWskM3DAmub495CjYDWXWoTXFaRUoVhENFWUTaEnGg4C16REJU7uxXyxVzr6BRdjeA9g",
  "key15": "235ubyCDjHLUTmSkqbvshF842jEoMJLERXqVea8xgvRSwQTBtJvdMDSnUZoGCfNZsXyVt7RX1RDgt67rBQx7MTBX",
  "key16": "52ZbTzqA4FvqiiQXMVHE56hroB8rPVVbs3vGjiKgAgCf4587V9ceYz1JTZrrhfhiWG61EH7TNwZUkXhd3vJ2TQY9",
  "key17": "37FohYbRy7jZG5n8gGzwD3vm2NpbZECSAesdLbBfKzSMeS3gmRWUnytHNYSxMyonSfMu3TSKK1b58SRMd5VJG4Yo",
  "key18": "3Tq2uNU8p7DAJhgJuvccBtfVicjUVSLkHoEFzP5UBcfzfxpG1exxCetnya5j5k24yQgmoterCN9Dw4oCn4arsCDa",
  "key19": "9pY8kiiucS1CxFmSBh3uKaYabxKGdiP3SrdJVtmGHgzVEnDCYrHxHcUiJmipc5NfP3YGEAaZr5YkyXtHCX4K4vL",
  "key20": "E7qK4GgzCnU417pp8B9zU3Qx4vPxXdG13Cueutj6BzD5gG5v8eB1tmNwqtEqA67orA5g1fvh7b7k4o1e6nkMKc8",
  "key21": "3m1A5QVNJYCRNXiqPDzMmftWJjbRYAHL6eacK2EBtSTrQUkAggf6pAvZGhzjtkwXXAovHuTTHa1tDiyavebUDdzs",
  "key22": "4XwGsGMqC5YEUsh5GqnYxE5RTvSdwzHvXjGWa3WMTMQpbHjLBXbX63Za7Ar4BA5NrTF4vBnvPAcD4pBT7HVm3zDi",
  "key23": "3GBBYdaPmUc3MHF15DEzDFp2zp5b7dwch57UjgiohyFHUMECq6qtG6VeYjLFRRisjbbKXcaERZLWsEWfqnfHAsqX",
  "key24": "X39mXBzNAGuhN51V3nwiJaGyyUVT59PA7AMH4vk7qXaEWoWqbrQJaQHDS3nqW5cZzPiPH9fjQTPgQePFfb8zwqF",
  "key25": "3ZDjBFRVR7cRDNbisCnzTo5rMzvtrcti6iGMgNTJGSDpSrC8VR5vH3avRhgWLQhz9GZAYogFZVYPnN1qazUqcA7p",
  "key26": "5KGS3r35UPGqxkBAq5iLsEKCJcGxQjSseS8DJd6zTWkDamkiYi82CY5htofk1W2LcWVSJi33URnBL3sAoMSdPUEB",
  "key27": "4gmvZ8a9J9UZ6oXru2dJPajD1skucq6ZTFGbczfe8qggagzpw5QccYRzYzb3BRSx8AmwqudZtSshkFZ4PW78GpyB",
  "key28": "62vgqN7aRRYTb8JHgP1h1pR84tdgrdRG992yYvxA2dRCVKafRRCpSrnMzEaSS7w4oqkU8bTa7H5r2AUoLHt1ttFP",
  "key29": "4ju27zsejramApAujQE5322ngcnAqH9VbCnRDFARVZzNUW5XVtt9h9GbcpMFLN5vSMJ5VkSHqsTPcQvjA4srKH9z",
  "key30": "2yfgz4MaNXJ79pfiimkUw5pM6LNHgTLpii7RXENeC8Wadssn91YwYefSRp64yLoUUq4GLzKakqpFcfnDKHs54PuD",
  "key31": "2h6ebc4G2PNPS8QeSSK3RxeJbk893uLN9BqQfBf6SsvonDUDnQam18vu7yCtPQk8bPxTfcueMNhbPYkBLnAn3XDt",
  "key32": "2iAZBmvuufDxi9duByK2BbriGWT7MjWRv6bBo1QCAh4LSmKgM7xDKPvrFwYpafA7qT1xu6CmQn8eq1nt1Y6qKdx7"
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
