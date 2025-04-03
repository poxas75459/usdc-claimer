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
    "MPcmXMVhYnYutRYi5NWY1VcPfLBYgVT1HSz15AFdULG8tdeRMxcvtnDwqnm61BLsaz3GjifsPpYNo7KkwRdMZvW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KheYzqbbTGyKwJkhwF5iRH1uNqcMkHwv4UgDRcq5AjhAS7vWTQvVudoRV4XvKNazBb4jkH55DkWfhUn1NpoAGDE",
  "key1": "3qEKnLpULnJYxF4CWEnD2GnLV2NPis23fLxPxeGYppJ7yxMpVtcivpCitRdTsu1cviD3qVk7mHQKadAFutCiuZ9t",
  "key2": "291Wd71nqhRocuALdNyohjvZhK1761r9FaChskTmaGAGWdzGxti8HkswX9jVgJ4nE5Urn9nZ3hZ6Kryk7tF3SJ2r",
  "key3": "2RtueiccrCt1GxwGtXhxXP7KTrEzUhGiUFVJV4z6EszvruSYwJFMev6CdtubU4kojFmhyHWwZBLLDViveyeAuPyt",
  "key4": "2CgVpmVvNXhvq7DSm67jvp733x2eeij2pmMPor2xCdKAuYf5k9SPmhXTcnmnkFeYgrhnqVzr5cBJfAue4T7KdTb7",
  "key5": "2PX9bLKsuhUbsekGjY2bCUZcLeosjvSsEJwQAJ21EfdNPHYGoyiv9uphQDYFcutHcmWCE4dfmbvg9cBjuxoXpszN",
  "key6": "31z7vEKfasFRAAEwtPpZgExcTnScneA6iiaNNHHDdDB2paMsavKJStXGzXdQRpUuHhVF3nMPMQS4oXqwMFSfU4Du",
  "key7": "3aPtVMBXTxzbLc7UUWLEdAbnmPMiVWsCsDcWjtaJAoChj4Zg7gUwhMRmea7EY1GdKzc8M6WNCrNZHW7FetinsCyU",
  "key8": "5Xu4WsJkadvjyHo8cWZ6ad6qo2HZMi4eiaM4BkmL82PfmZdjNwXdCK6MK6J5aRM1oBNCmbjG5bPWsn5HMQ7Udq1B",
  "key9": "62j1v9CjKWEvBQnRPABMmnZeyZkTKAgyo3dj7QqUCSmNfZePtpvFkmWnEoDg3L3pZTpT2SkjiTrpS9Q3tFTpNzMf",
  "key10": "5qp1aGC4yCi33i4P5CkwgWBH3j11cbSkcig1fDNgFgzzYbF6vYicpHpPj8JRGZSRV7jVcepjZvySyU9cE9nyPo8W",
  "key11": "3bKizaB9BsZoZKwdkdDvmM7iv6P8ByhDi8M2hpbx9MbcXEX9fDrgsf2G7bLbcjK6m4TzMAzfKxUgX9nQ64HhL8xG",
  "key12": "4zrmAwmS4LiF6Sy6wx61H8k13qEGTAZJW3CKb4Xj577nYabZXg8nsV7qi4tSa3QYGT9vgkSiGfwwxtB9ewh6KVXx",
  "key13": "46KAxTDTXxivspb3ZRH7TTzEm2ZAx8KpswKoGcDwhjZGbHsQEvUY6AV1yZVWCt9yfg7vqDaSgmMfeb64pgdz9XGH",
  "key14": "59GKzT4nzZCrtbW7KHX5sxWNc1SW7pTwxTUnqAbbjHcet68BXbPMfcrwFTPWr7nx662uLCbx9xVoJjk8qet76NRn",
  "key15": "4BuWCzKE9CBMaHCpWnLgfoojV4N5pAyLhR4o9ygrrPyE47fbVVyS5MBR62DGTNtsDjJCNT4qF7MP6fbSnZCVCLo1",
  "key16": "3LceHpmHEK9MpvwQ4ZdyhUMqZTfq5PcvJu5QHD5nkzZMCrYwnoT4gKQXSVThYvJQsKEksogy47hgShZmKmkgFtVr",
  "key17": "2XYby3GZRqCzeMXViivftSHSq2V1SqGP9sBjoy8jDdwJ1UisKNs36DhiAS2xLfL2ZPApP8kJpfygpt9YTJEm4SUS",
  "key18": "2o8dfN2dEw1bPsaJJTV6UcKmfGU3qQ85k9QwnRXinCLwFXLJ7cvSE6oyzpQUbLQ772gytA5BC3QuN8kCtDv4iUTU",
  "key19": "fQXYzb3M1JWutC7PVCGALbinLZxm9wY5TRnDVs1DDDT5vHLZuD6f8zkZtHDY7Tc8ifZc7fL5Xa32YcugK5D5Yrq",
  "key20": "31kVMqas1kj3b7L4kmGvo5sZwbFDCcFut3vhvYsDEHh7rCwWmdxpMyjWaqgZVu6hgB8pKUmSKCMFiVa1wt81ZG4z",
  "key21": "3E3qvSs5S3mt7DM8sMQ2Gpy7DotKMevdQgCECqkJfKHT6mQe5Jgy6NtXw1R1mAaNpXv7bCk9zgtkygw4ooZVyf4S",
  "key22": "3jhK8hPUGYU5qDB5Cd1trvPcXVAVDmNEhwjErdzeYvCtHSjefc5sz8wmjQ6e1dSUS6UWFPysmjXGGX9QZTSEx11w",
  "key23": "4xb5jrEwxqnzwLrGBABJae4r7PUGffowZknwwgkBsEmszkxJBfibNoNVm5J6sas4xDN65VQbP6gX8oNWzVmkPxdP",
  "key24": "4Tr52YCHZpngE2RKdW1uvnBDZ6Pn83ahSAuLbYWYPakGdzmyXjnaPMrXmobxJwQh3yyJFECy7GeYnouS1fDTGVZo",
  "key25": "2PHAhHo5q29k2RZW5Y65hv2N2rYMWJtfvGCEPqcDKMBQ5n9R7bSmKrZF1DPM63ryYbM3tt6scbQLkYkdHBMKekza",
  "key26": "e73TsWyZscKqfWJJEBzrcSjJajygU9hwmMb5xoBknQZ7ubtPpp1sJ5vNgfEE58cywnex2enKub7v1uEKBtw8ntc",
  "key27": "28HziDV1JbE7KhsnnoDastD22VeUC6BosWiXNNaBtMA7ivGdqej57R449z9Z38jG5uavHiwjFNESfWdjLCw16iVs",
  "key28": "4ryJYALZjHoaSoasjvhSZtJCNhqrz3YN9GDiCWMPrwCwCcxmPPCBQVBeSqH3HLvAK5pTeqrtyHDZzdKuWEyEmJX7",
  "key29": "4Q6TNHpmHck6kBrw2pUwCBVp66xUmAHok7NPvGbj2TrJnGKWYa35Y7sVX4nRChDbH1VPcpSwkfi7S4t7EtWjyWfA",
  "key30": "3zwLJxdbVxUNqRaCUJYxtUFhWUQ8cs9dnGfiSQDgmbDiPZzdxExMw79FUptV79LuMrSDTz8iUkgBQ1Uwgjr2ufg2",
  "key31": "2i4QTpnrWp9ae8Ac4kFvhmFF6nUZBcmzTJqufZxabUwwSJR19xntiYmRDETUAB9EieTajfTy9cFGGn4VTCsk6E2T",
  "key32": "21aw8pGsxv9qTNiTwzmmsWYH5nXcr5Qp9FmQzSAdNEcwoxsYm773duWBAa2ebWk2ECfFQnGJQiqFUAjMBkUVFbPk",
  "key33": "3jAmKLABVT5HUbJ6NCvSWR4uFxq9nBijfio381FQbiTK2acSnGN3Zz9mork67TAyR4sxcMQqGwakgnrWwuBCWPem",
  "key34": "zUdDuB4vMgpoTxGNf9CMwzL11knQFvumuUyHBcnZVQ3BkgVEmXioPUV3VsvaYATiLSVXdTkcZXiTkeQ3M2c5hFn",
  "key35": "5f8LdpEozTr1R2sHgFe1o2DcW2AYXutSvH9T2GjwFfyNPmZnZVSdTYhFtUCLn5EkDACT1JL37G5G2dxjYnAtaGcC",
  "key36": "5tboQaHoxAoMb9nRCQaQepVhkHsQoJaQSswkJi5UygHSmvBL3Cvg1qL7JQqxqgZZmFjb3mKQk6xEPHKeQNdqXyCL"
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
