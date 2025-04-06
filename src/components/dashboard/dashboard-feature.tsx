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
    "4VHB2UzyP2AYP6L4GNdnJw2GVg7jtk8nWvJmmfFaBFumsLfrDKUNFGHeknXXEUUKutYFU9c7iwpkmUMaMeZYe6h6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ogFACS2zpGf7x9z7H9qFSiXiyikntTEranRjL3YsiYcLkVr3sg63EioDppvBh9ZUWCQfuEW4GLpZjwbN8ARDddF",
  "key1": "5paWDjpsFdobhVuocg57c7CK9NHtKZds76F6jnEvfng13L3kK6hdb6QH6j3U2NhefY9WqG6Q7FDPc3u4pbZX86eW",
  "key2": "4bP1hp2B4BUQeVXk415tbBNkmWwFqAohPTwRUZJArp5W8K9prQV3qJn31ZaLCp6jv6a6yRFyu43HZ5MN1PgupHsV",
  "key3": "3v3UkCVqsXQ9U42BSSvnt45aQEcT3SqC9AmHYXRQt3m3gWEvHHVs8FVF9b5tq9huUZLtRq7oxMYvdqAYtMEkjHAr",
  "key4": "2iAUrjjrdwByiDiVYpoLitEdFJEu8fNejGvKoS1zDBCaTAYdDJsp3WWQzMzrsBgTcjmuaeTKjTy3wTr2R3S2E9nz",
  "key5": "25rdwMac8NvxD69XWQbHu7V1o9ez4Cm2VTfgjWkCCgcddfF9pKoc2n5SsYfnANgXfZANhbJRwQgbmyFK53uGUfjW",
  "key6": "2ZhRwASPr33QQhs1rEemYwbFtNo2NyVNP3rJMm99GFBbLY8MDZSXDsmEtMf1nHN9YnvrzGzzMfJbWS6YctfGAYbt",
  "key7": "3Xt8fRvjTDS8v23d7kEV1nvbYS8J27fuPysDfkC9xyz5w7aqAhTVhFM4yjmYcfFtiWGdkZ2mz6zciAFzNh7y31in",
  "key8": "NTP75FDpNc2DhtZWjkiytcKG8xGNGusYcCZNYuwJvhQRrFfX3A65hneMVYxXTn9RwHaiGkDtbkKfKudM77b3pJD",
  "key9": "22Ek9FCo7EzbmN7ioxyH7Q5L8N39oJ79UjKPLLHfwZ52hKoNV7kcvzcNTtGo3sRe8ApS7T2UnJ16dT6sR1EkRbDH",
  "key10": "2XuSrS58LkevKyxTgtHeFHkHDCuLRDUGm1NxSn1uc8sUSvET8gEVRw4yFaxufEZwSrLn5XiKJBRRmz3wznorXJt8",
  "key11": "3kJzd2vvsGAgwXpQsHcH2CFEg1gccMekhJKfgvuXf4q4Q6aoPYGv15sjRGzCxYVJ1PBPi2oisy2GuNLKcqSaGzBF",
  "key12": "5ZvrZFdDC7kcamMoHF1SWcpuACnHtjUy59fmx4pqErUasRtRdmiVsQq3Y6zEw2p7mxYRkAmAv36j9jfCJyexAKNq",
  "key13": "5B3tF9uSMp2g2Pq9iopT6EtVM4JRQWTRDY1sPyocfthajqwtxx9qJdt9Fob2MXbb3FYcLxej8JtMShvtc8ENDbxW",
  "key14": "4it9RBkfNswvUrhfdksytknJieascRidmFZJRicqhUwCnzEaXrFEPToVtcqbpMAMCqmjQohhDNC5APSxcvtQ4N2S",
  "key15": "3WwguZQgBfLFzTR29ToaBjEzToMhJavXsQdbpVq5Ezokx7cm31n556afE3VKAThV4twRcA9fDEB2yR25hFWw2yGE",
  "key16": "619bXUnKUDgFgeGrwPwik1PFFrxeJwyYxkHqrU4GFHu7RMycj18cxh3W9Q9H3qnR54K3RU9qcfaAFEz7hVgtBpyZ",
  "key17": "23ZyCtZijg6Qfhz2DXhvjHGiFmG2Wu3mNynrM6hXV4qNMBY8iyLB5Ax2vSoXBU3wPck5BkKKowCxNVsgyhK4qMH1",
  "key18": "3PwXqh1Wju8cAMpppxJ91Srt9r7XefjFMJoQPErpSHSozV4FaJq7dhpoNQqWAYGSdtp96xAR79Q2aHBeGy51eWNN",
  "key19": "4tWtCHRiCRF4UxCb3GRJnEJFmVy3gARhg8YXkexNPGLcpK7qTqmz9Dh59uYeWNrAPDWV3T5VkHCxRE4g62T8EuJR",
  "key20": "iZ3pQvsM9yJtFyuRNrLJs8V9N9MLiMEPiCmrYPG7QmXsTUxqyDXfghYs3jb3jg3LAA71bK7YZJ66exXf2bq1v67",
  "key21": "313VEWyowwoUSJse2Feipz9nFgof5pev9ks94QsEudhAK6N9484Cwbj5xbhMFRGQtYaXaTtYZ4EdEf2DGoytmJTb",
  "key22": "2BnoCbm5c25yiWvpmHCUnXVEhSvLADCi7WEJhMsW8sP4ZRzPjYRwuQNfvSrKep4c8Xo613BSaVu6xoa72MYCUZ6k",
  "key23": "62K6iSYBcpFNQUmQX7CmFbrbDzEsG76peTum3nKUX8uMgw4PnfAUNRT8TcKbG1V4fsGh4fz1GVhnwKxLXGMSt7wG",
  "key24": "3wfaGRBsQuRznLZx5LcDfTSm9TLLtcDmHyEwKj1pfU7sg1y4eScW63K3gduD9a9oPfSAVbN9WF6CqujMGN23rSYH",
  "key25": "2cs71TrbGyG3NroocEpYCVBAxREosg49qvpjzakBuqkGLaTEQXpPY1uz91oyQc1eMgv8WAyKKm9HYZAUwGh9Qkxk",
  "key26": "3hbr9JJHJ55aaT9uqrJg77QpHVkDnnNskrdLqKVGrE1BN8udrbdDxNtCZmzp3VsRRokkpP2HWCnaPxbQwYKfifyk",
  "key27": "5PTBDtMrxru55US9zdPLdAHgmWFPc2FUFDKd2NpSGaozTQEgC2ePGbXjyh5NAH4PKsg6pMeYM5B9rhUrx6r74Gs2",
  "key28": "337eSUpG2u8Y45Z9irZ8kSMndbrMhWrN6c2iHsyhcy85ibpc2MZ6dENEqaXWgdbW1V1JCrHiPvgYRQ8Wz7sR5kJB",
  "key29": "4u8i3MAPbvojGSUq8qFtbsyJt5qrPoorF75bdjxAgWHT2TsJtUyuGdB73xYZafdvw43oJtcGywEguztrWLG19NVm",
  "key30": "4Qx1EjcVMwS9QgWBvwsNZYeutDhvM9Jd26Y9wnKamEV2XR2g1gAQdP7VeZP84vE5j2c7ePt43cyUNej7L2f98XcT",
  "key31": "cydtkY9XYAX7qCopKQynbs8D6BYxr1saupPmLafRMZeJtD79du8ZhUFbGXQukydHxw4NuisVdfSxvBH82Bm8QZ7",
  "key32": "2R8M1xmEMHUQEw7NXfLgDGnnKrLHuupexLhf3Dhuvqk25oXYGFThsArB5jwzhRAwReV4TuwJ4iDKzZaNnpBtKS6G",
  "key33": "4vQY7GqjAFGFgamFHejiNDEgWV7FkEJ4XHfhqh1WHRzQdTnbp117kS3MVKa8fnRpxxaoXMKv9UUjGupRk8aD6PXe",
  "key34": "g3xkDMrbwmYAmSVni7vV1Q5CJgSDnSPiS29kPdFmmd3QCVoWHtJwgSwo7ZWdRnsUNLeUJeF6xvhWo3oFb1nXvp7",
  "key35": "5DaPtmauFRQpHgRhDdwQXZ17dNduUF6ABGqBHWs95W5hP8GYpfRgwSbTRLLuADGcjJa6txwz2p9qpDQisnTDXZ2e",
  "key36": "GBTyDZ1Pd87xcLrc8JXsD2BypPUyZebhC3q93j2tYE9Ng4zioFTnQ3etwszJkB8soXhqQY9az8KXiXnCzbWejh1",
  "key37": "3yQjD7N4qQuSfsH5izQvsiyXzakcNT6wjH7Aaxeq3cPSm4BsjU1Kg1xGgDAYQJBk3nRfho6dWuFcnr6sX6jM2vBA",
  "key38": "3T6xwb2Dx4cdNw3QaJEeqhcjCLJfbFMXw3q1sAvnEa2aNv641PSRauaZ4B3rS7524FZ7ZAGbDrZJ5eDoNFdEe83B",
  "key39": "bFFZhmsAbKoL8vGCdKE61t2Ra3nzB16GAA9xUAi9CHweuRqPP2DrBthFogSf9EfNAmWvbpq7tfgcQPFAuQmXy6P",
  "key40": "J4f1mAr6uUvcdTGVsbtjwL5UqBVei5ybXfW9JNbRtamjkoN1UKjwtt5uvsGhg59tV8GZNiYDNLJtaLhhgZ22xnX",
  "key41": "3crfE2kEvAGK1FS6GSqKeaNRS8dUG5Nq41uq5U7Lh7BYnxbtwVm5VkdBkwfTxUarNBiUwtTyVCEALrPkRZAMXnT6",
  "key42": "2KiJSoERozAtgKdWitS7ejHwyq5Hm8F9qHxLy6qnAnLYCMuv6xmzkvBwZvXpVh7mzh6NMjTGJ1hyom65Wsb8AtpU",
  "key43": "4CdDw8MtiHWVxVJwnRKsAFG2PxkgjSTdrS5j4uay6E3etSCqg6nGwyeBpQDpwx3ERzQEsDXdJuhMCJ342C2nNsy8",
  "key44": "KsA5cvSXT2mNMkZNtXHkdtpUD4vZm63qsnDrSHXJDgVE8x7ucTwnPb3DQrNMjbaSehG6NdZjEqm9zJBJjtR1E9F",
  "key45": "39RcwDhgmBpehxRTzQ8qcv3US94262yUA2VDtsuBBPsSb4Bj2YGguxMPwmwqbXePirEu6WW8YQ3UEx6GWhfS4avX",
  "key46": "459VYX33ehR9TYS2z43S55VtK4BrMYgrUgNzWDpAFN4rtXSDYcptBYtakGKUvdctLbFLTNroRwMkY1j1xCGgjEA8",
  "key47": "jYLPB2WYf9q4JNCSKg4m9SGAgyXH37yQJz1UzktFNfK5ZpXfcm8oXkRnCyZQBFmC13htnYHHyytQ9LrQk7NmSra"
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
