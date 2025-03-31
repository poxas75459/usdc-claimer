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
    "2jfiUNssHrzsn7gVkJywgVu999YdpNHWMKS7iBKC66SEaGCy3ke2tiN6SQtm5MJewH6d7CmHZkbDsQFK3BtUEFkD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cKJ2zrjcoxBmziKoZ83dv6PxQ5h38CS979dKTtSo3ogPP532tMAr4jLPdTwT2BkdaZgaTakwvDUFpjXhTNTWxYi",
  "key1": "32yUtELAMpiZjYx1zTEbnASrR48nXNnJ3x7PXamLNHkQLwyTXdMqMdusidPmdnC8TQVBmYSpSvxkUVmw687L6JQv",
  "key2": "xMvxDXVZ26Ep943duvbPFNkLWA8EHp1VN3BKe6Yve4CsfNaz167aab31jxRqiHcx8kqXpwca7gSirk5JtqU6Lzu",
  "key3": "2C645bda5hevHAAgVVZgLuybdUmCZCk2HpbB9WgzJ3qYRr8vBepX9z3xo7QV84AEcSGNAqzu4DFV5r7PajjYjBm5",
  "key4": "nxr6vjVgoPus4aRojiVVy5mjHYo6za2xtYz2qSmQoMJfkFxSMD3L9GbWvCauEhznvBAw61iRpjP9SMzHamCtLDF",
  "key5": "yRun9Q5TvHFtEWjjSweEGm2YjEHNR8AWR4bDf1pyq58Exr6wEo2FgTxQPkapqhgbbRts5cSHFaZqcmBhLFMFKWC",
  "key6": "51Pr1D9cuZDUs4AbuQJfJNDn5xw65W1ABfwwYDY1WVVBYgegGcGdUuK5UEKQMQRGbv9LX9Rvn2uuSQAiTrT38NNy",
  "key7": "38sJhnoWEVFJ8b7onPfEDVL7GndprovuxzzKcJWNJWTVfb5nK8KpbfWjqKDSp6McDGXQmPt6HESGjLgAsaEtkYHL",
  "key8": "2qU9YoiNAZ3oGDv4aEtkrKziJWfTgDkerLWCQNWb8uPAfbXjPS15simRoB1stn53PBuHjJjL7g9JP9MAPBe2Gnv1",
  "key9": "6pRj9yWU18T2URkPXnC7DCSXThrDxsbjvMKJ78upCcywkAZk259bsoARNVkvN2Hs2iBNWBUc3127zNFcDtS3nMD",
  "key10": "2WNb8jwtHhKLaJkf34fLT8ydbPDd84RmaD9VTS41pYF6qoxie4LKAUQDoZm4uqZrEjXqtRQVanzrdqbYC3YJ9ZWH",
  "key11": "3LVsZYXMcfskBUj6yQMTJ3kRdJbTGWMTWWwBUKWdhLQg8AHJ3LYhpVHCkTpuGxfPk1CS1BaZVPZwtoWj1PjzdHiF",
  "key12": "43JqPQSWoDhwpCiZaCYwZN1WogyuTzcyripFpjRv61vVez1qpNyUhpXNzE88UoKZuzZ5TbMXjuPTNpDuafN9vC1t",
  "key13": "64FL9xXNN4qj2NhxVzHtxT2mkHtrK4ro4UAm7hxDtcrLStwebcV26QTgmfr7KqdSmYWEqBMniq2DMzmEE1AS3jU6",
  "key14": "4S5NKszymWbibsPPys3d3hC6uvLZ2sUM7WjVqUXZZLHUPypuo1TNinqaxhFKRpvCZYsifN1TjZb8gTFTJcHwm7Vz",
  "key15": "3FLnU2VXy6wHZ7mkxvLGbRdwYMDAt3hSCaz7KwzAePPUz7fiPeyTwHRPrXHur5Zh2Ah4ZWBySJinBvHET282AbX5",
  "key16": "39tUeL61azU3hbgdqvL5Ug5PfqhUsytzzSffcm4zxzdbifM5SXAAyCATAFtfiUV4DPfur5DtyvY9RebzYxHRkNKk",
  "key17": "3Wrkw1hMnjvRMrkRizhG5LExewfREaUNKkUinEeaSKSeVSvEf2E4o1HZeJpxQ31fSHEjbfh8CnT8yvSRSNTH9SWZ",
  "key18": "3gyeCSaGTECvFdpXX4bTQCdwKpyFaXVZYJASyWy8Jkn5gVcikY6UkEmHog3HfLx3LLRq3hHBwYp3L8uykWLPd6g3",
  "key19": "4WXi19j1T3oKUGFuPxY6n7MK5vuMZE1WxwT1nruaQJWzsioVwjmh2ZAG8nbcxFPFAcBebvKRatgyacz42oxYA6To",
  "key20": "5imxXds27HgZnqAborvPiZEwRTAzsTD4ZK9XHKQiGwxQdkmMfY4Rj7CsNp1GmQT4HYWf6Hsu16brCNMLmVMgFfJq",
  "key21": "4qXPyDiJHHgSvFM7PhpQte8FSNj6JYpRMdXCTtxgrh9z9iw5nd7oqWLqFHGAm3S3KDGAeYFTyikLTevPhU5EQh8A",
  "key22": "4ppZDkxpVypsYSNrfKAk4WWRgh1KM8GBdiu4ARAeLS5jo5BfSfwnBgapCwyXkpybKib6s842eqvAivHHM43VdQ8X",
  "key23": "2Xa1V4sEqHmF2gXoKFq1U1sLWjA6EjvSnLHKnr762sx4xYvRxFxk7Vp8N7jjmUNUemZeYcNqQR9Qum6sJBsKkAro",
  "key24": "3Qshn94zYtZTvXYNx4YRWywXasqFhq2HHAYazqsrJaaru1yXEMb8kFFQa6Jw9cbRVvNoNYJHjPVN17j34GrUoDFJ",
  "key25": "4gDZJ7fqidCXB1hSPtYUJhtphi3xooYJb73Bsn6inGBeLPJ85xrvBXzc5uda1z42uhmAHmm8a9epXuJC49V7SS64",
  "key26": "5X4VxcqRwGFjcSPXCqrKzYpjaaUB1ccRJyQA6iWfWzYrA2YhAjbHqbmxDceSi4dL3EJZNhzaFx1AJsxgz3u5MyB1",
  "key27": "4TPwoPbYbGKVspi5n58oXyisFZYUvbqJpnhASkQ8irhhHSwUC4RwbN5riGBbPEezAVVU5fVjdiT2ZphnA3na5EtG",
  "key28": "A4aZ48A6gHEjsbZUe45j1zQ2eu3ZADMavXyFb6qJhN8WkE1J2PdWQnkHbL4zDE9evTw66HNwHsVQnF9EjWr9qDv",
  "key29": "2xjWRKMvJ8dUyour6zPM7hdYn5QnHDAyh55u3jSRxyT5N9jfgWoNs5x9U5PZu4h1exPN2CrN3vWsAFqNTv6NuGiS",
  "key30": "2j9XLnRcBnzhUSoLiQq4zm6R3YQi8AetEDhsfhCPHWbpeSEbwmQNTDUJKbrMv5y7LnVjuqTpYZtKBq8f1vSeu2Tf",
  "key31": "3FQN9Wso7Vhw5KsVCQf3wJJDLpDdZJ4TWWrdd6UqB1CszUgKBzEaLEiz9QksVvT4zjFSgbeo59dCwpsykWwi3Mpx",
  "key32": "3QYJi6gSwndxYi55pn9ykJUgtLCesghYzzDXPtaCVfqfnygi1x6gWDQsFhVaVvH5mDJ8vRLtDoTzMrNDf5QqE4ZA",
  "key33": "g6NzvgMo9pz6jo6LfnhUcV1zW4M7XwvVCFbY647PiMa5ZDUoqFhRjTgkANCBcJhYYbTcmdJK4m1ue5gk47sjDMq",
  "key34": "4pRibx4SkNReEWxKjzLoiwZVYty6uNbGqQU19qNjTbuJGESS8X1FN6mh4oUEDo1PQ9iYJw212hf67AZMivPZ3KxZ",
  "key35": "3Vq71jxNjQEHn44exn2U8JUXJyNjVAaK1t1UcaMpmB9t7Z3WnkgtnnvBq9mcyGZE7Br3TU6CEucZvs74H6CWZCCG",
  "key36": "2W9MTnq3sDA668VdyBTnctMX5wSV9r9VThmacpsqr6RG2jCF8GU5tRMEVBwcTc7Xza5dMnxJBPxsVTxHXoxJ1GqZ",
  "key37": "vC3XeXHXvsV7zj2tr8RNDgSo5WZ8o3NtRLqDZBX2ZZHt9UebfWyxFAKPHFQGNwFFFzQM1waPbm3W52VzpTcaak7",
  "key38": "242KtwturPfbNBEFNZc8nEVNAUUF5epmkrNNTrNzeQuXRGqWC5NteApVWveGd6erJnbcdBpdLvTrqBz3fYdiTVhj",
  "key39": "4mqJJdb5JvjJHAHR18hUmsQkqU9xMreJ7wUX3U5x615V4648hJ92VCM3T5K76YstX5u965A1FaBurhA6HhtxQHTd",
  "key40": "3tKcDRR5mjhCjMFCgC2xZ3oHjFYGW37uyspQHVnHnyKCEVPL8SGGrDnhZVR48FpMgteSSkqKtY25TocZkxoZwevw",
  "key41": "4Q7jUJQiVPzTu5iTkd5SDBA7amXgDaAAFHpt9GnTD7KZbvtPyGMj3W4dEcLw4Xi8Vn2UBYxvEyPqijcyPMUpGizZ",
  "key42": "4weeFRtQcz1EpdvHZWbUqoCcCeyfzbhMh7xcyNwoX5Lb6Nurskp2Her1PAHdiy9EXrRh9TRJJVzMRnYSCHMm3uaK",
  "key43": "ZwbyssQA8XdhKf2f5PkZ85bzcQbzYV8PcotEjncSUQfL5Vi46gMz6i36X7UGjXJsmQDih87pUnyfYV7dVcnzmfF",
  "key44": "ETBdW8PJce55UKwW8MGg9SChxqd2CpvGtiseYrzXs37tjXqwXCMsqQd4m4PWcGSbFLHhbNbcjDkpLn6g3HdkmUt",
  "key45": "37qe5qYqnMTQjAiUKMnR6A5LGDu3bcfGtRvGovwtsuebQFSLpcA3gD5qmxsy8JAcFsRLoext9U1q6oSEbabmYzcv",
  "key46": "6rvV35fwJFTjXyW9UgwhF4zcwv5gEMYWzhbXang7QEVA7ibHNu6VjpmnkrzzFwNVuSZghV2vYQgKYoUMAWYV79P"
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
