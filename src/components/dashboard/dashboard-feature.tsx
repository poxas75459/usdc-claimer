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
    "5LvNu5V8RFfKKH9ro2bFJgXc3hNhj4soozG89McdRSkr4ULHUdPstCxq8K1x86ayLfZfPBgGsEdyEfuzA22mwMC6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rzW2rxKEoJo77wF16rva3LwBAKsgL9Wq9W7XCMU5P7w2CqUFSDvSrAWmTW5km7GZra1QmC5x689Yze2woqjW287",
  "key1": "51ouTV9MRSgkFhKe45jdEfdEDDfYZZXewFh9FmNuNVrjECuPgGZBcHQworPMA33BC3Ta1FFP5k5zdzpnpTavdyFG",
  "key2": "2uRLoGDN6veJUvC71sZ7RDBmapRJ1jiSqNijovgjqc5GWFysjPCXWYTiDQ2gEsdr9vC9zHVsD299B6XpJa74ZKNX",
  "key3": "4akgmGVtVzkyM8XA6fcaNoip7uLCNaSEmiorpRsgnWqTaLSy5RrKJmXMb6NUAJdDGTqk9RXzNbpc7a8cwiLtob4U",
  "key4": "5BATj59vH9vH4pmjNo4yEcikCUSLWfXRb6u9xrMbd5XEYe1BfQrzh6Vcdp1RHKzns3Sd2vFuoXN7tgaXfxq4GaQk",
  "key5": "57x5Td6BUkTPsLvGgha7DT9WK5vFqvoR1Y3A3BVaLNNm5VNXzojsDbE7opMHunMHMjoMDHcEP9MmW5fv8Dusxg48",
  "key6": "2ZCgayVY2n9KurcNHwCfBvZGoGeRLZ3KCS96ufwzQPYY2ph847d8fk1GJSCobmzQZ3KhKnoKgdKJe1tViK8ahhQt",
  "key7": "24joangxg3CmPHavrhPCag1GBNoARcpYeohx1pq4jSgFXRRjxCVnHxGFzK6rnB2bhun3DYjLLbLzTAbia4F3XhdU",
  "key8": "5UNcWN2BriEokf237BLt32WTf8gEkvEJTJRWg1JiTyfVJUNdR9RG2PX3YhyyVjkHrdMvB5tJzFnJyiFbSsdD66iV",
  "key9": "v8RqWkpDKsAYMzCMf9jCE8WLKqniPSvG9LPQG8epPykU7aXdmJGTU8fP3FXGnNJocnHABwSaCupC7kDdKHucSC7",
  "key10": "5vTSdmxskN8vqW41ARFdtSubimPnWm4tdBT2HaGRwssBqWXLXNqjHBK17oB5NpaiwjXDMpFCZxDncHfpqWBDQiTE",
  "key11": "4sVL961Cso6FHd1iFWTSWRd15k5KWg4QQtEbBwcMNBLRj8ddXAbVsnVDJNvX3Aez8f6J2TcmHrRkksnTGa4w71Xs",
  "key12": "3D7esTGZkXbMxGXKqCC9SmyMHWsKcc562uf9KUxWLrmsZnX9faXR88Jd5HuhxyatMUgNxoxW27J7Zp4m5saX4qQS",
  "key13": "4DHdNU66sRNtmTVo7y6sC4Rv9vQjD5DoPrxvJRV4KgyyqZgAAAcx23zabCoXqPCnuWHt6HkpoTjEZr5pZYuuU113",
  "key14": "3yoBhEM8Urm6jfCR8BjNoizvGbQAZZccBo27PJFv5aYb2vGB16rHzXFBGgPhw1nEjUoku5d4xGeQiMvtczi2aWR7",
  "key15": "urfwMmn5sBxnn2KpVu4auVPw8BSvpRxSebGNqvEQg6iUgNLwAzR4vSKSfsCk8unT51Y1WyS4JiUhS1XzoKcesRh",
  "key16": "5RsdYjD232NjfR7RoRzC5LgHGau6J2idjk6ApSmh4tNTSG6yxRtWGpMq8mKLmgPQcAfK6c891B5NNccc3Bbj8AVN",
  "key17": "4oQCM8nVrMphwiqExo31U4MywoWuPF72KmjxkA768guECb6413FUzUYFkUM1LPvMeEN3f4MchYM7kif1KwqmDw4x",
  "key18": "2UBvbH5g9AK6Lx8W5vYHY3DNfG52juXNqkfU7Hs2WMYLAHRoRoXpZu7poph7mq7uZbw8YTc6kUpUawoP8gVxPNfX",
  "key19": "2VDbYpDP4Sk8nQvmK5jNbZUr4h2DgWX5pNLzgJQza7LNsxzxY5pHgV9CmgFDXdgG8EXQzNv22SY6BZM4wBZPKBvG",
  "key20": "42DSLBf73owaPWAgArFx3PFeFPN49zU6PLrB4P6Uo7Hib6W4V7b9UUKvuE5tDEhgeZrMXwQdTLxo9R7p8NUAQ3a4",
  "key21": "3Lde1yP7od3epRFWZN5rCFgBLrAFSjtyzusJJD9pR64tA268JW6jVzpDXetrnAwvEKYbcD1QTvZMFKbnGkuu3dyo",
  "key22": "3BvpNSAWSPxLvS2QcG8zVUNy8A4Rk47gVPYgYTDHTjHeJrX3Wnkyc4zaZzgZQUQnzf2mQTVVHuNZupYpKXftXcqp",
  "key23": "4XUUqJ7w5ukJ8y9PiFBzGLW8SE4cRv2KwyyePnXcYFDDNLUTj8pGRmGB3VRQoxDJvdooeGbVDXXj3aJ7Pw5BeLAP",
  "key24": "5gzneJfTwSFfVK6pNCKS5vrwDqzBMav4WyxYYSL2P8QP65YVJfMz81n9buEjtVjeGf5Sa8hpyfBYsxHYHsYop2T",
  "key25": "2H6JVRUQiRUoua85EznJRw3Laavipvxco7mSHUUFZb9S4RWXhZhPTUiG7WLAE2d1Kip7ry5ud9qUMWvWZ1epniYD",
  "key26": "2wjtrknHR7U61GgJvcCpQtcKaaKaUo47jyZAiU1R8ZMZKKbZL5YH5BVY5z3gYX5CE3Gjf89xBEyM9bYtfGjUKexG",
  "key27": "3HddQQEikcsiqMaHhordL3iMUQgdvzWYoeytKDhWsWfQFtxbwveTniDgeKqt7gd6a8YmjVS5Jyanbc62DcjicNvJ",
  "key28": "5C2zsCkCPzCDJjDZvZPjUvSWcxFE5VnjavsjB6k67aHteyyFKpTPrFp2eJjQR85CTHa87Zz68kxmDXq9SyFSHuA2",
  "key29": "3yrTCg61J2TkYRC68p8ZpUMFcQpnqu44n6BfTw2gRK4m8PFPjPHviW8yxZiwQRzSut2TnhE6obHD9utezk8839Tr",
  "key30": "29XzJrDhDrNF44XsBMnCm7jDrN95HL3kRC8e4iKWwQYrsqecyxfmi9DdjP4amRXuARhia7Zv4qn29CLqvkJSUi3Y",
  "key31": "3GLFiLcuDFf6iNXdT6GYVCTEWQLvMUEHST9Jj9ygCshCUvVPP2UiagQowQxcYRsaeuFbPoi4aZj9UW1MwTcy6P31",
  "key32": "3WqkdZ5HM62ifYTvrjwEnpfrtbT2QkPSEvbaJLKZHHkRjDuDtg1Fd2tr4mRmxDH7gK7mk3PdeM5xWEZ92M9oxzPm",
  "key33": "5qEkYGu3L7fHGX2nc7YSoMEbL8NzbykT6NFsbVMDroiQJqHxtkYecr5z6hiiLfUb9iK5Srp1oLB1S9axxF1KmK2n",
  "key34": "3RryvUJzkKvzReC2EuJtfGeysfyA3pa3wKPiH2ofAyNXFndaHUGoCeNvxgwwCfdSd7i65Ge9gJ3SYNisR3G8cGW3",
  "key35": "3EEtcRm1qZX6susyguZQrZkWdE2g7EPwtJ19RNKAAagYT3LnjJYemxpT8fMB4XR5jGuDCNDWv2Bz8d31MNTL5kUX",
  "key36": "4X7sx7gZWM4oUibicCot1aVpPiU6KzcX6nZwqhGo4J2X3986V5qtQLKVr6QXMGGGf4r3k7AEN1E7n89CTw3DFca5",
  "key37": "2YrsMPi5DMG4vUrY5RXCCwYCKqhFS5rfgtkeCMskwpGSwZ5nNya2co9dsaHqrLqANDZiKUqBjmC4BX9RyrL9gqfM",
  "key38": "4v9qZ5dLhDpbYz1XtRpsur9eTB5JwMbNfc4Mj4KZUuH4J3iiDm1HeMyAsHiPzqJUWxcRbH5T1f3ckrJTpWAbTe1d"
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
