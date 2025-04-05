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
    "5Sjudcr92W3WtD7PAD6nC5FBf4H3h63MkhSeXBKrpFHLTpuuSy7gYc6vkCv6APmjj1QrhxvDDVzUBMcGvTErA8in"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47WwHdaxyxXLphUm1KnQ2sPVpSAcqFVm3F2i9KuJBWrQLX66gEWnycBZk7e6t7zcoNeyHj1NxFxnDJi4itRqTZiD",
  "key1": "hmDhdnb99tkmxWNXBwj2T2dAzoLisBUxLUtbH7fk4KAy19fiGt5munaqd3obX4GABEnippCbGfiEvV5o7QhJzcV",
  "key2": "5XeSi5sYGMv2hp6ATgbMsqGfRu4zrmpij1oLAniAKSNozVSQoshXHxtd1nvn5TovpQUFwbswC2mpHmiJ4JujSLWf",
  "key3": "2i72PZQM54ZgNSqbHiReQKRNSMdbXq5NwTMyMKbX4pvjDSZTtR9moxfRC7wRrzoBFAHdMmmXSNPTh23U5gK4avg5",
  "key4": "4yaXdtSAoMhuQSNyFcbjS2PePjDAzCF5wDYzJWBeX3WTsWBscJk8oCMMxBdgJbVK12nocHNEuoMhpTSMGVuNY4kj",
  "key5": "5H79jW1TZKxvaE7VZRvPqzHsawYBcAeWRARH9jCwVn62t425AZYCq3iD2LHRqH9B1yrUBASBVViYWkVuyhb1tGvV",
  "key6": "2zBh4cQxvTGQX97PKewxxfWTStzeLDTUAimbHWyUinc4AJCqdgtSfHuBaDTa9TucuK9aWVU2Qmpj8nM3r48gsaCT",
  "key7": "4KqXkPvBUUbfD8pq6UafqopQCSAmhXKpLftYXPPoPcGcqH9ccnxBmKMCkBdZeErqdFAM8ABXDzAQuVky4SE9bDaL",
  "key8": "5HrHeUqUTWBdahmKYtdbaGZ8czCvsqEqmfKnhiiTh8bMCvjJvGXnngwprQiQm1Mz4j6nc6U34Jvg6DF1GRDBG6ab",
  "key9": "2hHxsJa9MsCST4zFkQNQysGBjqaoxYDU2w2W8iYWqHEc56gkN2EcP1bY37fcAUP78fFfb8MXjPggrb4DcibQRkSG",
  "key10": "rgkL2MDYqTMpurSGPEj3JuuiGcqEcA9wAyAtaefJsjEzowNBRY1FnMh34pB5GkaPAc3RUViYX8kWLpv37uQ5ssX",
  "key11": "573h8ZVXtDEchNzrJnLPW5tHpX8ApcdH8yXRt4YTv88gtLMm2qiR2guiLRDfAxVz3MAjcJTbX9X27FjHs834KM4K",
  "key12": "5b3zm5cr6VoT5M8JVY3LyU63zdBuobEktafzTHLj3apU8xZDYsnk3EXFzKJE1B5qoZDSVNVJStkdPSjTBgnDvyUe",
  "key13": "M8tjU6Nxzv3rF2EcgSrfXyk4fiU9kBE71QH5hX4NuMiC4yWn7uMvLaXKuN3vZheAUmdamxFT4pB4Jcp1w3yy9At",
  "key14": "4ZMgYHz1e8nnzxHYbKpQSTgAByhRBvoDuv33b8rSwGBSNKo4N2QJDC2eUEfSwi93f4zbR4mjHqMCADZyWpCau83L",
  "key15": "3iPVtZXDeLok9ZABtkkHzac18p5XADDeeqHZTUqPG2bxvtji4JMAsfvDHmv1LKbjrkucq79NoP9bqT53NMMGTphK",
  "key16": "2kyWeFFpdtGVFebeNtxWiJSegfkWbQXPJzb88WcNm4271SJsQvrz2Vu5Wyvdk5r3JDcHqZx4zqC3kDS5BffR3Z4p",
  "key17": "56DS2hu2yFed9MB2L23A6UdDtsGWqUdBDJsasC8Z7THsEWzCCv2CsdHfLAPumWRCv4tud43XtppKqSpURuVRB2Ko",
  "key18": "2FvZ2k64sctqcZV85dpfQpVhM3rqQUzTzdfziDfXxKXbNpyhmgKDmPy6xSdzP4Mssa2ViBQ5RAaMCH4KX5kGvYRf",
  "key19": "251BVJRGoQdQLQCiNNgDvxFhZD1UgX4Ei47cqcHBrNnBzGcBUxpuDNabatLx9zfZNVonLZd2YteTuX7ULFH4p2Z6",
  "key20": "21cUgD1UgMGbXCeGgbaVCNeaprJg7wZXMu9VZszLrsdJnJzer2ozVLcyLtR19m7VCUzk5ocD8wupBabwKZ8JoDeW",
  "key21": "67qEN37oCxVKh5J7E34a1AJ2irtcsVNwBQWePtk3djoaXxyMYbLjC9zHVm6tLh85ADp55tcWC3H4amN9quTQPiVv",
  "key22": "2wB7biArR46rNYrxQv2aJ3vKYhxxwmkUWGJjSZF4WEjY5onT9RBwfuowazaSUsTBYK7iiRVutxYabzYaq51qP47q",
  "key23": "35DrGP8ACs3QF7fBxLdVmgCRAGKFwNmHLcyj46hF4iuTt5zufXN2gcWeSgNMSmp4N2NxnZCVDiUpenxhYFUkLJcn",
  "key24": "657bjs7d8e6omnnTYXWzPzDCs8x8oZteoJ7Hzq7xGTLoTSHnoWBXBcsXwjzREJgDCYz59UXRrMvjpSeQizVcyQBP",
  "key25": "3PBTj5CzufUqvnwSuCGDP3XX6pfMXNceHqbidokQTfXkeAL77KPJq3ypYBnd5eDjkKSsj5WgCUP4oDu2ysGGSMPo",
  "key26": "66XFbxvgepLUQQiGVksi4GRddhSu7ErVEXLk6XRPtqiFpfvCebjpoj9CkoqBrzf1oJ54a1d7nv8wuLbcp9XLFBNc",
  "key27": "PhpUmWMxsGF4NBscDbQGCFbnkrxassVtSnzkMNXBcT71PcndK4mEpKS1WuQHBW5WL5YDaqtp4PYhPcAMuyU5uc4",
  "key28": "Sxs5wVyGXzUhNabsvaDMa24FQFpexNHXxQToHcJhBD6kSWxrWLmMds2VBkbJzmCsEdLUxkZdVkeK9ntcSbcbspZ",
  "key29": "2hEnJ1NhfvAHxGDJmDHkx6Az4PKrNszub7dRsTbQRnJJKZe9j1WhWdpitbbBT4anC6M39PBtR3WRH12w2gw1AQD2",
  "key30": "5pjaVemfQBxJ9h6NXeSahwteRhxgWh6ANv8hQ8XNKZ8xSEAURVWs3pXKjEzz1bEFs9ZA1nC8oGypHHBnpixUiabw",
  "key31": "2mRGFziHydUu7bd4suVjkNiTxjvcXFaBAtetppcZ7U8Ymzrjd5HUax4HftHZDvfRtdd68kNy7KYoQCB4L9n2242n",
  "key32": "yZ9jXPJS67op9VX1ZbonpPgo33TL3B7ez9aFSkqUBKK6Jtua7RLzGPkezRvSEaPR1GeQ3PJHLen6HtSmEdK2heX",
  "key33": "5F9oTEujNRzChE897Yecj1QeDE2sGgcKD4gJiyuBd5YePd3XccuCrWEovDVPGQQPjdRmrXim2igPpZJVvb7r1s4K",
  "key34": "38HcaqLX4hWLfdamPbgQNSYau5TjzAFdJDpyot359piQK35F7ZKnqcLJhzRiWbFaXqTacs1evXA8AC1YgAtg1Fos",
  "key35": "5NJMvtKyNUmg4SYALLudmZtetQK8mnsfLTtKt8pEJvC67ET1hjxDyH4ApevTGvfuK5UMBa2rkNQE24UuC67ePmVD",
  "key36": "55pN7hJ2isaDDK2r5hGwd85z2HN3geicRMUrBwG4RZY6UqtQS2P8wBNgT2Cy6AMcfqRtSdMgRbwEN3Mgi8HKbTNT",
  "key37": "5zJVQ8piieYULnWRy2ixvw7oMr6LXy7mEBMpM8bGe8g2SiUQeZaFujn4KzhF5ciStAHHpeY4BNMSStmh5DLSW1aF",
  "key38": "bEqGfi31jvDNFgj4JKXmQ2155mHniJVwHxSADu8hUPUFpReo9Bhe9jsPMm5tKvh45XbqJgwAfctL32RWJCXCnkH",
  "key39": "41XGvh9bv1P32w1aCvTxjmpVqCT2qAuzAaPYnUNp7psTWMr3UHDmioPUvNSkwtXSkaNR1mvNSA9QcuGpj1dZWbaP",
  "key40": "4P9DUrnVsa3yAfZQX9DmBpni85ZenJv1icCp8qp6N5aum8ZeJPB8L7KcccQhPnTQXT9BjNTkiqWTwjqE2AbDmTZy"
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
