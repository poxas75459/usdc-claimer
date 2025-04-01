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
    "4xNpRSGFeH7H6PrwiJ4LSm3n8TLJ53MBV4dd8vni3yuci5QW3rBHry7WHW6wMxTb9hCFn66BKbtGeUk3p2q4ewHs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5poheptSqXE5NMfedRunizaeBsxa47JLjAJ4NuBcc7W7nV5MDMnDnXpUKkGkiKXAETZnkU8DRxdLWiWSsvRX2gYj",
  "key1": "4rpKiF1S2uPLWKcdBWotQMNYaaw6EH2vqk2kSo1b4kNnAKsZs4cz2Ck4uCu3xABv87mB54XiaJW1FHgPBqXRxGxd",
  "key2": "27xHbQo2feupt665vFfxdQ7EGP8wRtvJk7RcSW6qsw3dB19kAdUXgVYPdzQoT4rEftkaa15oU5UCf1U73dGW4W47",
  "key3": "5E98LSamVnK828E14fKrFozATU9YLbvBh1D5XrEDowGarMQQ7pEimdF8D8aUTxF9y3BjjqEEAoxRDAq5nREdSC8p",
  "key4": "2WWGQogap7nBjer9ZvxpJNEPQLTtPMejE6AbUyC77dxoeRrDE1x38gVJe8Gky1pgbfDcsmzjkeoCc4naK64Ut61",
  "key5": "396hjesyVJAs98RH3ugJcJhjGtpsgfpVCqVkuNuQJb8wUeRGDLJZwpSBv6zWgQXfbACLiMXUTcwS88pqU44Hr8vX",
  "key6": "5519GM8TqfFp1zf1pZKnm6WBNP1j7Ucr3pQyT9Qgg49iW1sDtimwCDcyW9e2Hi6ufmVuUZYxXS7j46N2DPSY2yPn",
  "key7": "3zjKVqQu9E8HQjYHvZgFBn91iTa4GYnuN4tNEE5QkHSaihgUEdL9sd3n43M9mmHecZbEnUJB5cfF6GGfEtHuWwVR",
  "key8": "bLn35KnqRxgdtBEWP8ku5gpnWP1DgnHSC9Xm5kiVpsMEuN8asay6CHC71Z9TVyRk6fyHyos7tGR8Ey7FGDyvvbf",
  "key9": "64WgwPGEWjijmLRvhvSyR9NaNedvWgadpQ3L7WXjrDCF9jQFhjztD51gH1G9CK95G5zEwgrQQf6CAw5xhscgjSFV",
  "key10": "3kAjw9xGiGXHYiqWV7g2WrqhKFAMMTdPyJfdzTyCZbFGUSwv3zkmEPkDCYBDjm8hseydqvMamX3tX2PEEE7yRzJE",
  "key11": "2zgxkYTt4Pw7MwezNDvSaA9GMPhooGrBnSXuqMNtABwbSPxdXVGu9cNNhi86JxztMALrNF7hBsQGukVfzbn5tWRU",
  "key12": "5iVyBt9tqrXEqUR91zdYwbAtwnRk8Lwz8QVjgwFtxgFFcn6s3tVrzBKQiDDpCWfX3wCwVwUYqiemjAzHXmKNDXN5",
  "key13": "4k3EzpT1Ud9N3bnXrWwQycxZdhpJK1B3zcREcbs6fcUPPZceBo7YhuadehsevUZZsAzePox3gMPNxT9y2geR9V2X",
  "key14": "2qcqHYUDVXZ3j4YWADcj12pYGcrykrAHFfVuarezTcEZrLAHt6sXXHAvojrn1YNygHVtR3PkE5qjJxDPk6Zhjhe9",
  "key15": "dbbfZMYsrPTiawtX48x22FEHd5hor1ytWbpzzPqFw77maPyFUTqLjDcc1iSD1B9Z4RoCqVZTpesT1daVMqhM9hZ",
  "key16": "SjZiKkGqTBBVqMfeh2TUeNhLXHBvYScsryDnyxUuTiK8vheNV5tWx6u1f9dJLvRUbezEZ1XEnNtP6A1HFugtadN",
  "key17": "2mv7UmLGDf4dPRsZ8QrmVq2XnNDBfR8rDijRn41LGNXsP557g2FWQ7E9kUSfZEM2B8tdHFekgx7tv41MVyhVFJuh",
  "key18": "RSuWinRfjy5rgML3vu2LxVhNo9ro3TGT3Jt4Vmc8QnRw32MQYN1pT6wznZVUM5JLZdSRze7XVfXgaWpiSHvoW3i",
  "key19": "oFZe3TsNysSimo9TD9VCK6ruq9impMcozLUVPont37JzGGskRX3zHKP2rk4xKrdUdXXmhfCm1M6AM8ULMi6zfTy",
  "key20": "4Sk8nbm1k9qB7LgK5CC8As79yM6nGVpiCgkmARQ7LMp1AGLMhGBzddECUJLeZhDoNB7y14wo3dc19b8K28VcxWZK",
  "key21": "3QAdC8aqrw6MrXDyAZHZucmFGrQfsb5vAu2zRMLFp3fkxVHpget7Jk4Goie39Ea4EtWuJe3iBPo8jnDQBcRK6yxa",
  "key22": "2sxsoKuhU1qjPiiijQVSKV5sMWa2zynK3A9fsyEsFESLd6p6Y5MXz5knRrEDLaMX4qp168MXikfExoiScVrwZUV6",
  "key23": "2otDe4iqdje2ZyiUbPLf74kbcLMsZYWkK4SsdE992wbXbmMeV4xrQNRDvizpEmdw6qRFSk3Q51t3FrnocHkPGxs5",
  "key24": "5mnSVLrTWoChtJRj6ZRrCC8HpDh8KPcRfnByRkBDaPSKz399KLWf7v23vdqJYfT42DBmZ1w63SRUQCXaDkvnnymh",
  "key25": "2jC1yMRt1is3C7MqWD9QCFNoDmuTYMPpLrpeWZQvq3D2CrUA3CEkTQeTRX42Pe6XtKXhybhXRij91vs5rvy47Kpu",
  "key26": "3ataDnzsEarAFahFFX94Cm5uBPdQvmo6bYc28VpUg4QqamTCZGN4Mf7BZWbNbA9nSyjmryYmv1S9LhDTvmydAZir",
  "key27": "4piMNoA1sKpWEZXqXdCncf8QxdVaoBrRRV7CpBu1Ye7CzdHefYuEXmEh8T4KxUqCof3FQ1sgPgADVwtorvdLh8Qt",
  "key28": "268xujM5GmP9xyZ5zqAp5NKnjM68x7XR45LLHANewi5AjUHknaeqEPxLqcs8WcazawhtCuyJXYxGfyq7nKHruKR7",
  "key29": "TCHw36CaVGbRYdUz7PzBJQgywAUK5sbxKo4erZRS8aoZDh2aikNpNMyGpxWLAkDfHWJyZjWsWRDFDj5hhwuS9mC",
  "key30": "45cANfeUeqjQfyV8i4zH5nhKWkiQm5PFyP76MBjtbLPTc4Jos3BhJbm9KjmdUYk4RMi87eW4c6oJqpefN2Tq72RP",
  "key31": "3vTELjQLFhZzZasx4MZyPpAenNKewVhJ1pFK7TTC6opA5yYC22YPoNZ8oLNEYEpEvVBUdmttf8Mt6atoTL1Pm3Lz",
  "key32": "2U3jtrimMvyiRboXmvWoLngahKNZkkwyaAqNqS65KujUjDT4gKZUmTok5Y9SBwt1sQxtqESZzbS2u24aWgtgNbeh",
  "key33": "5WXppx7sdM3zskkG4s1R2zqG14qdtorubhnLX9za1hNrMJwTpJHnjNZbgpEKQRtxoNechD8cyYWgxdrMCtgKdN9F",
  "key34": "2i5GXAmi3LaKxaWNd3K62rV9vz7DTvpje7BsR4tkNGXkAUmfqZW782poJ1et3rJhtM3PrP5upD7QbyADNHzggd4q",
  "key35": "4V38BSKjo6diFeEkT7WwiGEZaCRQJibLF44akfZPKBw4AU12Hr7mz7wB8i11hv8MjPsiJTbdTnnM8vx2uyL554eg",
  "key36": "4z45osUxDpNkRTMhj66zToTxb98tGyEs5MBfYrVAPPQ1CNJU9H34VXvR4MtndF7PAjdEVq8S7vztWw1VHujwoW29",
  "key37": "27uS4tBG7jyLE1pp3b251Fr6a7xTdiZWjL73fNQt18XikXXvWj1CF3d3KLN3Wrgg8GgdCpaBMENfYX4DDJiQr3a2",
  "key38": "mqmXC7epLyErVWp4vtpxijv5Ejxc2ytAfFPUYFnKTFTaUPnHvkDzEf3XQFDb5ksf78rWXhBHYCpkUEp9DVf8UMZ",
  "key39": "288WpMVox5diswV4xgK1Bhvge1fz386amr8HY9BXVsGBp6DSMbSDTu8jWHDYvGfPFyqC7teF6abY3gZMgynZdDPZ",
  "key40": "tfuEQYv1xP5ichqKe3XCVTy3afSYMRZe1RsoskDBw4zHse8AhFwQNv8rY2p3oeaaE45zEm4EfhAnNX3ckfxFSm2",
  "key41": "23XEUq8s3LC7dkordfnksvzUJTNUAedbD4U49GneMdMxfa7Ymob1b4N8mgZh2Sq3At5aeycFzZUbhL7f76nWQWQf",
  "key42": "3SpeYZcsVzmM5jmkkbmsLZTw2Q6kct8FzX3s6wsF2fcqqUSw3SrPCjm9NZUAGb6mSBmUybZFnbqftdi69aSBNRD2",
  "key43": "5CgFx4HDYtzU3RfSG8hjtjknizmKDcwMqWL7EcUwdrVjhxjWnWahsZfkBPjsUksafZEeSBW1FfcAojFfYrSzR5fh",
  "key44": "5KzswirUrYyBBGRzGzWMQhXRrmGevScjR7HuztZfjcbBcWKWN9V4B5TUMK8oQ1RJ3mK8rypJmGvtHroQZ2fbrHvD",
  "key45": "5mqxdQfsXV1pJeuPomGa9MEVz3emDERVNNtF7HmPxmyvYGmAeeLbw2sUVJiQuKJ7MrR5sFn7pJnx8iXBdZUqJPac",
  "key46": "35qAurD1KuPtohNs9BBrsg7KYFqv1u5o9MwPc5UfcZigbwgCH6DGCS7jKbkfzknL9tQJzxPYcseK1797SDocAgvK",
  "key47": "QxKgQ8P15EbYruERN5UgqEJLG22e6dvS1AavdnA39LuFEwYkELZh3zUWgJhdPB4pWEXCfJXmRb7dkM13FvRHybz",
  "key48": "4Sij7ZW2K7zsx21PRDCaSsB6MPPJCQrn9qjXdGvWgDtTXhdBmTqQKmmSYNcXSCX3T7932biRqSun8eCNuqsx8VTc"
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
