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
    "2oR4zuk4wtRTyNwF4xQuGnD4sKWQrxjE2MV2TMuSH5xGdKeKpgtrvKhyzTugzNthaocDz5qndYNVRTtEJ94QwF5g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oRnm9Re3g5Z1iQx5gcF3tGr4WYrPUnuBv6RrynCgFUiEGfrBF5q4CSxvJyNrNDX9WxNo2ULtgmUiL9ii8jhqeVF",
  "key1": "4Nboitj8Lbs7LAT9Emka2zBhqcbeoVFdALAiHEH1HXFx4P9VFJJuukf6Bf8GUcSCa4YEq97vQJCcmP5Yvazg2tRv",
  "key2": "5GFpUTbNuTjNBjBeRRjoxcFryt85qKfkDDiPjBRNogUSrArjazMTX8itZ91wy7dQSP18q36cPgQ42R4JzWwaEZTq",
  "key3": "4eLJpfmyr7Rnkuy66d79z4LPqNq5Cw4CrG729yQHyXyGSn5eHeU7KRhFvRpSeVAs3CCt4stEqW2bthvsP2G1o76o",
  "key4": "4ZLaYuFn29DKyJmU5UJEyGx43igtvDXcki5TQU3iQpVfrSo22B2Yzthc1yw7j9LK9NGQpime97FV3fPHBxVSBwFY",
  "key5": "3nNzKNNX8wbNrFuw5GS4aVYHe5tUQMubvHx6Kd1efcT58n2YvcV24WcmqHL1DcUapvCvrv9vPdWo6ETj9Jk8jAbH",
  "key6": "CqHHMeCrxMKa5oGViCXeSQ7neU12ozKeheYL3xagFUT4uWsbnuPDQqsiqDU2RPQ6vZbvjDDNfYksUvE8ywGV6KE",
  "key7": "2P4E6fJ93Qmvx9XShwJM5WD19Ty8sD3PoNyn19veNwPkT88eHeiReaaLHAC2knAHwBsHz4dB2dP9WNu96F2s8GNZ",
  "key8": "5Xwmf4aQPnyhtMK1z3YQvsC8bNeVeDVHsT4j6HCK2vqrB2ASRKYErdDjfBXhqrAE9Ro7oW1LyuNcotd55W9FfcBS",
  "key9": "mJ6MGFCAfBvQYFWMgBP64CzxnfubVudHTdsSnPx2HhPEX9ZajohjvXQ6RzYEZkk6FHEKQg36JTQ5dBJCvDBM9yX",
  "key10": "2HiqfVRUp6JHRSL9X66SfYtsx4LsVaShGTuZBS84oF6ume9oKKxkCSAmnJP7u29Z9uoqiofTkGkPDqee4mkX6rXJ",
  "key11": "1jUcsUeyX6E4d16hdMXLXJt1ai3Nj5imW3Me9mwcfnyWvq23QhByNosSrE3hFvFiuBvwCnpk3uXrSWBFeukAdqD",
  "key12": "5nLAKG5ainAcW8C4UjTFikFi4b5MwzRKgSviFWfkU1hoZAyqAhD7aWEfF9cZPbW28jFAw5ab6f9NiopozCH911M4",
  "key13": "4cqyZjDM25jFPNGqXBkz4kByk8wHNkUhrKNyTVWfo9SN4hkkdnxYMzLBLBB9FhUoUeJ4cegjRsY7iYThSae6EmZx",
  "key14": "249bqnKxL9SqQnpNvK5Ff8ouoHJJGV19XAPSLAEDRqX8erFoupLUeL56WEdDGJ5sU1XZZxu27AQxveb14pjmL46J",
  "key15": "53hDP2xcbydrhbSPtgenFHg6DQkA4nUZt7JgDhK6gXU8c5TkSWQZiGKsaaxFHHVeppKNuY7EyLeitwJfgtqiRMQs",
  "key16": "5M9FuYZmSxXWRnJLTUMa5YR8ACoe51hkCKrU3QYqkT2kaYCwiP1tZPKFG5FpfeSNfF7xjVja1QUvJAQtnSyKyFRQ",
  "key17": "5iSpr4YcboktjFfBeeZtb4CN826iq3whrgTDRSN2AHumjRqo9e7T7tMuRmWnEXeMf1B27iQQMZ53AouXrwSfLDGu",
  "key18": "5ZkUqnTpDcLd47GF6qhJCvMkb2CaACXSkN3uPcJqmgN3Qc38SV7CpteugA4gDkAj6UNbUhg8XsFpaEQntdxfGC4s",
  "key19": "5LxXd6KXKTfhKo5vaVyy1y3eeUK3GjwVr3wy8V4JxfKfyRdoYBQAT9pgUXcnRMTq1KnL65zGrxYeqpKi2fiAKzpS",
  "key20": "7P8FG2xaVPVDUWLq5gCkD5MjvwW3eUgkVUBKN3hxxAhckQmCPci1dQ1njeS9Kd5YNNd6wZ2JPp2EwHeEmbUEm8i",
  "key21": "xthy2SCSSWMeLM77qNLTArESEivo9RPxpRkg9dfP8xDwuHyYjWdvGMN8icuCdjTA72SKYmhM8ZHp47hgwUtZRKu",
  "key22": "5sqvPU3pANZimGfMdYYwgQzncNuuCTu4b5tiQFqYWX4vuaBaPdvZBMx1nV9enyFtzgGUcahRJtytwrfK5aytiiHP",
  "key23": "2W6aBD2RAe6GsNdRZJUcqPCJgLpWNh5QcEnNShrBsh8LZQeqDqXnckg77KxqmoQJbsXGfgnA7BANLXNrscWnZpxk",
  "key24": "66LaETrAN1Fe1p1dPi3y8Pm4kY2hby5YR2Asp2YB1V4bnRXdhyXCNYCoZQDw7tcp3RYrcCuN8VLmkApvZ4jJKUjS",
  "key25": "5VzJcj7jknhV42cQ5xuK8tKhGRjEidTxgAHfoQm687iDbpD6jCRrqu7GN9iqRQMeLMTE7VWt3xzyCTsLLyHvnbN7",
  "key26": "51KJEJKXH5nQWfGmWEFtbupLYCAEVYoPMCVytkeDyneMbB9XrAqgRzbVMSFpFYgiJydLnBDPCrd2NydPzYUAemcz",
  "key27": "4FF4fGKBnhvdtS616bDjPivR3CSw4APss4ZpmPctWki7PrmAbsFB8rHZgqGtQuU92q87pxyQbxXgiSuFvEDvdn7T",
  "key28": "5cZ9uBsk7hhx1Vir74R7kMqiCALPCtwWryULLkpb7EFGKV4C1Lhga2aXg4knhL3FtxueAPN8AwjqXeLQsjHvbaC1",
  "key29": "2sarpC1wHKns36QxufBjmdjukbD4YVx23u3BU9yD83PD8vRKExfzTb213t51YDY2CYuTPkJ7S2hUSwJjM7ShyNW3",
  "key30": "9MSFpp7LZAHEatyQrcsh9hdfXmadDjgXwe7c5KefPeu2D5bEd3xFVfcs9xiPsWv6r4FkgwSmMo7DydbftLBSw1X",
  "key31": "5PwnLESeBuiXk8NjwoYucU4niMb7HjraVQ7o1Yu5daj45kUML9792R7q8ciUgypHif9WBTCw1rDSWR6G6FPFSq31",
  "key32": "VMU7AyWBUdkwkpDTwCtj4AEyZEkbq6RjxWsUYjJSe9etM8F4fTZVcoYjeete5Y5ovM2fB4cknkHLqx914RqYzwt",
  "key33": "62PdzKnFZCNBepdNPUDSrCUJffTVK9ce8i3ogaKLUjZzrUW9PDRHcuMsjE8XqYgKLum7ssiDjprUhACjGbNpNvx6",
  "key34": "65vx4scTmv1Vmqxfq2L85h4we8KB2f8FwHr8eZnYF66WH5LRUTMvSqQ6YvKQVZ5z57y1VRocrenyHFRfpmkPVnPA",
  "key35": "35YhgyogqYy8yKCzSrT9xNymUmJkEexBp3nNms2EHGrm3WwTcpNTwcW7Kn7DqsVVK9AMNYxjCS4wLmhUYamVXaRe",
  "key36": "24odahHbZMBcEcKyL3zBnYxwybMNvNuQuAw7M1kedsmY8ttSAEbqeneSy5iyNSZgAK9hTBMcNii5LyTCBRUCorHU",
  "key37": "52mk6Jt7ppnLqWLiX6RqppGrLcaHg6DzF5pM2NFZjuEEDwjHB9dkRUkSWVYnsEdgTEuvDTg1PpJDKZpAkZV6qtLb",
  "key38": "wECCfszY8x7yER12jC2nuVVebbrTEdBRnWVcNhzzo2Vzi6paaLWSLGHwwPqY2mKdaH2tDfjtymZbP84nkeq2hMf",
  "key39": "49jEtgDfNEqLURjPfqZ5xkJsuN8YfNuYyR59EeTo6BNSML58bwMJRKxrNyzTZAeyszxZHujHdCWwvn7RqqH552mp",
  "key40": "vbngZ5jTti5indSEfMBT5D4mawpN91MTtfbrzWaNddRfqMAsVCSZExZondfPdCy81hQA9DjGBafNX75BcSQ4hqu"
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
