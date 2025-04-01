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
    "4KXsCMEmHjf1sEBdF3EEH6dyH5hzXwowR2NBHrd6UNhSsjwh7NhEzrNW25jxUmUiivspe5FbTcV8cBKzXvMcuJwu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sK9KynqtDs5YkpTJF4C8MNXnhsnGsdyfDde5krgef5zuCr6gbbdcG57AD8sCcgGCUaXWTWfezB9ca7WfRr7QM5i",
  "key1": "4oAdgw2xWhqkJXNJzQ4xzyqaudgjPoUqgAFySBwfyX2PQWuT9Wujp1MQsNSzKSxFHqE68WXvHWM38pyAJPHqJXNy",
  "key2": "5hZyGgEzhYH2wGRBvaRn7uVtRRVmN9JcgoSyYjGpdMWWvVKPwsdDMHPBFcKDfd31df7yGSfDnKG1wC5oABAfC1wN",
  "key3": "5LBpUwHwRFUpxbBbmbiwqy4Vf8D9GM7vzphK83jBWA3MpL7VcXcCBVURPMvsLHUAu8G9KazAk7tFFEtmbCRnDRD9",
  "key4": "cnrD7GoRKsiERhgEFucVLAb2BRyhhiyG4GmHNKwy44CcsKpauj4y5ixeL7ipG8HJoP1cAXuKCNLXHTaWmwyXNLz",
  "key5": "otaJyugGtqg6QKPXwa4gmtZuTHHANBHESfKWeBKSWoajRXzLRduuvM3kyJ2Lo54AbiFssqyJwEMZYk43hQz6aPJ",
  "key6": "5VWkMQXEofRxQEJteDRki1jKjVdp6ZL2ZVYNJf5S55tb1mvyydavEQuuo9tymeujY7Y6ajZnr2Wx4vuehjDVAbpp",
  "key7": "2KFrvETvGpuqE1HQpao5GUPeWxTxZzNXBkvTMooz3DxnPdg99b51CvLevzTv113LJzumh9J2Nr8kiwqVvCsiTizX",
  "key8": "4wMujovNY2nAWnFp64hVPZYBq67uBU4Vd4hJw532V1xEj4cTpjecRdiSCrPFtgy6HZs35CcJZtacJSjoTRobP56M",
  "key9": "4quX2jmYC5qX79mYN6wT5D4AAQGh2WrsnyxBF27bhEx7QFzcWgK6Qr6Rw8xWB8axVhtKnn6Ezhp83hBvkvMuXqcz",
  "key10": "4z12r7Ldp8G3wDoyV48Gc2sHjq2z8HFA63hMEeNDGFbHHw7bmididUtgu47tgnfVebkS2EEtb6mz5zTuTKN9UAkU",
  "key11": "222BRcN1DCYbUHMe3JbCj4WxJwiqnpvnuYFZF9br4Q1cyLyYw2S4zHEK8uUVYExAmsBroGPb2kb2BBX3poj2eau1",
  "key12": "54MQU1KVHheUEzBGpHFKiaj1JoJYsizHe7GsaQRyk1HLVEcReE63CKRT8cXi4CmMnNWRZEs8Q7QXapDjuSE96zVN",
  "key13": "4HASVVdasSNW7SREvquhYFHDCLMAKF5mputk57gKJq4FLSfTMDByP9KV8j83eYscRj9jYXVLenwETezSZxPtSFws",
  "key14": "7WCeyDfba3HDQjSEMprkVzur3QKj7M6qTYxEQTEyGR5srvwFmDEfhQd9juJJu4dDzbKnAReb8Se9UXikNt8p2sw",
  "key15": "3zB1VhAMJoQtdkZNFCqRvPfYJnGb3MYFkEYGhMvh2pYvhrEDeGBt6rmghP6mLtwgmeCGY3ZfvreB4vKD73qysJon",
  "key16": "27jqFNCb6DDuBjZETCFBVQuusaxapye2N5oSf7DNyAdFiDJMWAoNbQYPTAduTbiWTT7pZfcz7cyswRRUVGvy8LY6",
  "key17": "yc2aGF9MWwhYyGpWRJe8nFXdKfbeJrLydkW7UdM6bXNnTEp1Fm5NGYoH2B34pDocMCEV4XjhJHfwPGA8xSDeAxD",
  "key18": "4QNzfmj9vjHeFe2dTCpmtKNJo2dsv4ixg7Xw3SPrZDNnMrDjCn77otVSCJjdnorVg1kU35JvFpyEKm4FN3oE8Jpr",
  "key19": "66L7JgkrYKeugXM3xQ3dzAabgFCwa2iZ67wztDfpBEzeSh8VkQRCqjoZb8wb99r9bQNNCMpoMBAb4Yuubbe3sZDV",
  "key20": "4pa7jvFE3yYBZQbeZ1Gc1YKdDQGitFEPUvZBtPVEHTzgDNZA7sRLh5r7AyMsQKNMPUkJsQVzQHWzXEs1ET4gpRgF",
  "key21": "4nWNR1ypGPGRFxuKxqyTxiaeziPUZxdkJWHMr8addaDALQetQsyJ4YNjanbBpZADChkiT6nacSS7NsTfrH9TWACa",
  "key22": "23PLqAwuxd16KiFRTAJzj3FPMCNa4KjSBExSYQMs2H9zrp3dysoWbYvWRy3TFP6jxe6Njut7EXjfL9jmfkXNnPAE",
  "key23": "3AGC9e1i32nqC1Tvr9fgYpEzTSztpubFiddc4tjLg2V169x7RyMKJVdKNt6Rx8HUsxVh7KnCizJHQCYkojuPe9j5",
  "key24": "2KH3KemszqxZJjZPRk7AYRTtB4f6XiLQne7UMFiyN7XAgqw3zNWRxBXFuWJCXD4dc3M5Zi6x4jbkE5aYzMQPndyo",
  "key25": "avvAWzpLTkLm6YRCiPAeqXLYuM99aayqMuPqj8HDhw4eakwfUB73t5U8hXhKPV7qepCrV2Ycf3c4YKhWUoSrgki",
  "key26": "kY5yNxyskG6ZocaSSDj93ry2wqo15cvZozpronSWhoATwMzwBqFqiSBWxbKFqhMXHYU6f5QGYPm2GthFug1ZGMZ",
  "key27": "4eZ5hPMBorwSnmtCFMDmDAUonEBuZ7ZpznnFyjC9rM9rv4pHig1fU8HrddvFeVHXGsej9GJpi8NyPpgRfuuYU1kn",
  "key28": "24JMpeeVsRcf3Vmz2RzW8WH3fMCMx5npmrVAac76aYmNfSHEiDxc9DoyCDyW2ndvfjGKMz7kRqNqvroQdX17Tnto",
  "key29": "3jDTcvRAFzVFv7otXBtFHJj3rwvrW9yDbt5Wt453jeTGCpdAyKnUcFDwkMepWBtUz2At5j4tUfy37KCzzhr57C2Q",
  "key30": "4wbcnMcPNw5TCzrrzhBCpSaBGn7jCkVdYc5tCjuroXRUdShoPbnXahKe4bLw1XLhKDqf64ukjYzVfStba8JW1n2p",
  "key31": "4N36YNXnes5m6MHmQd72A3H6jFZkGBnDwAbZwZEvYRsW6FtpbVB5dYB6rJ4p8ADsk8PdQ3itxxrXxjp9LLHwSwTW"
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
