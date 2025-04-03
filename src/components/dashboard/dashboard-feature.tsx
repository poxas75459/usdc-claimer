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
    "2AunFEebZnSfN7DL6qaEgTjX495YzCSKqaia2Hmi96oHAD1gBZRgrGmHBdo3WtA8LxKviBeHwd4aCqD1EeQsuNng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EqGitJeW2PtGXjwErY24evETQ7QQX7PaeRre7x4DJUcAu7MNB9noK9NcD8jS4qTxtVvt9ah9NpXWSFki91ED6k3",
  "key1": "1JxWWLeyAAiy8Y83JkLbSU4BUH3CZcQtSESi1DzLN6m18QfQHjqMeKAwLEXJ4m4efvZV4h1cUimaaWh9o7oiRcR",
  "key2": "5ut2HPEzE3u1zVAvnmPAEMzhdY923UGRaQyw59Bti3AYaWvS8Dt2NrEGCwEuqZ2kDU66wa9P5Se6z5sjWVo2dXLB",
  "key3": "34LPh48W6mAp5AJYGsTq33Kft5QDzoYSx91JKMzYQw7on5ynpe732EV1APrS79fLXDXT8jfT7WQDtokVvStHpgcQ",
  "key4": "2VnVFrHuSM5pQJFPWZxy4SnJUEEARCrJM1vTY9L4kVzfr1ND5BzueLBJbAREVrsd7qqwrHTmGQspjWxjXdRWcRu",
  "key5": "4ZNquVxvRLiKRocBotpsSKCibpxt8MGkeKDyEUvXifW2FCKZbeSgbX2cWBU6f3rMKBXD1DD6cQ487wGtX1ynu9kq",
  "key6": "36hx7XWK733cDQKqUgmtJxnKHDPq9LTRxCcTLq7wruUChCBVX9N4oTafuD5fCBnca9Vsco8QM9JMYKnjUpnUc1uU",
  "key7": "5hXzggP2Cc5U3uHxCZKcZ5KXPgLn2L3S7mMgB4d5Amnv6EtoU6PeBkQ72ui8t1fzEFTpNuyno86dDpAeAu8UjwS1",
  "key8": "5dGfjTUxqdXwvveBd7cv19AuQ4MVtxMn92X2BGT4KonYuQ7zmi1T8ZRxSGAL33GkCeyfgJ56RPE6a7wX3GGgAtiC",
  "key9": "oy6xCYDHii8mAbaqRmkrQgKMGFVdZ78ow2gqnX6nhbh3e4AdevVdzXiVA5Hj6vxFi6JshhBuudwUNh6VANhct2a",
  "key10": "2QvjF6rv3EFsV4Fa2geQv929DTKcNBpuDiGE2kJsqn9nymv1ckVFo3pmBGsLifd177dK13e2BHUH1WczoND6v3ig",
  "key11": "4Rffji8KNwmWiAzoSyLgzyUZTN5ryCzmx7MRzHjDWymqNWLP9D22fm64yorKZ7v5cEPfaZKjXMcTLygHAQKWVWDK",
  "key12": "2p4cCxHB9fUo2v2cT1EDn8eCY6ExZAVPiTc15qfuMPn4L4wd1PMNoQZ2sPz6WoKk1yGVb7srn1Dyi3DBavQGZLLz",
  "key13": "5JuyZcMbRq57Dx89Zhtx8BBRzpthEvRXp3Qjf8nmYzF1CaBJJPq3JySv1XL4dNKS8aqyUS3ydkKoerfhGRD2VCu2",
  "key14": "4AW5EGeypRptrFxC494u5CLxE8sRkc1H5poypBtsPN4L1FFFkX6scWw6BBf57nx73JxUoy3AxjeMtqHhaaVhFfPa",
  "key15": "2yADBN4TQ1ziSj4twJvgqfvFqYoPbMtgh3XpQ6jxyG5EomyJ4UBbArTE6ZPqFagwGKxiSSkgTVxr5ZiFjPjw9kVb",
  "key16": "4vU6yP3sdW1ohVNPCJ5GAXNAUM8f1XwNmfchvbyBjNHvKUTB7eYQCH4k4xRxwrqLgarvb7558JLLUYqSg3KmK9WA",
  "key17": "4ZLaXg8DNPW4TBBiL6BhsKyQ9hGh9pV2sQQY9uEaoRNqpM2X7dVFd8wYgvv7bPiiyukdTa16RopyFBWQSPcRHRNT",
  "key18": "4AXYSXEJQyjP9YzZcAVHFby4RYn5jWwgpzjWmYZuRcph6RMqcFLAXF3fomioGaVrCRvZUCmu5mruWudoBgec85SH",
  "key19": "2ysXAgSL9H672GW7seZmg41mUWAAvPTUUEjzayKaL1APHcbEcWMsJi6R7NXNFqtZ2yoyytiYBJsnR6iUxfHdPCs8",
  "key20": "3wsKuGNPXnxUT5nT2fWYDibZC1xD4FUV9fWBejAHMUGRtL6p6qESKhkwP1uKVmXMcaKbBTdAEy1EWRHW6aphnASe",
  "key21": "3BUifHcvDHJSJgVQP89e3NrKkbYwCVsCEMdNw38fDq6qx2BQauzu4kHyHXvCu4TZKVTmZFqm3aVPyZf4B2pHfB2E",
  "key22": "2poWftVWcPoXmw2T5nES27PvcBQLLQWjnW1Htd1i5P1bVcjGJw7fDcaB7F8BFxeruf67SZ5TDADkBszn5T7sW2Jh",
  "key23": "3pxexZw5SJYog4iZ4CKy8aHjLoi9H8agZhLZ162WPuH9AhTNm5fyxipspebdo5yecK6M1BEgag4GmZ1dy8EdNmdy",
  "key24": "3WT5JqjBFZEsumUvx6WVHLoMJTK8QoPdhFB3QVGEBmEEwedYNc5HNNpu9EAZqN7fAuNg9pLyWJNRfnRD8eou6Svq",
  "key25": "3TSXKqSZhen87FYLFJqmBrzd2BpXdFvrxHpiPkXN6g72m5d7QAiTRBcA2srsS8KMjLtLoexpQ5MqLHNo5kjqAtxH",
  "key26": "5Z3wtSDoEW9UWFNUCnMonAA81bgDGkJ5ePWiwzq5ckqHQ8RpTofTaBCBLcmC8Z7K7sJaVt5wjq1foQbydxbJpPhz",
  "key27": "4RRxxtmWG7BzDjdP3bUeyAoEssM3bH3qosHhRYxc7uJzGGyRJat5dAwx3ZMnKCo1xXSEtoPmJe5co5R5mgPZFqsG",
  "key28": "3dfmn888VapQCf8D3C6RwEbQYgkkzqRkXWrXN3wLNtznjeNEktZXBDxjr1UZ7G2ajGCJDmfhMMoMypP8hWBkrTKS"
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
