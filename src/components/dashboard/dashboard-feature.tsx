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
    "2Lo8AeewNXzzaC3EFG3GX7m3jssLbG9mDXZLkRyj65jADAoZWr1EtRSx9QwyDeocZj5ANniCyodiroCf4RLEz4jQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fASS3rZww3wLSMv2fycZhQrGNCz6rSM13jAMNQgdw5xQZbJG3jfnkqiyoAu5omfucFxUmSgiArdtX3HnRUcbNYT",
  "key1": "2kRUw31qi2yWTseyv1nWLR71hTnXtZ2o45as6YaAZhXJmh2Q828AU4mnX4bNQkmsZpSd8KkQoqxf7Zm3776YFHpY",
  "key2": "NBC5ha3dFZate4Scavy6wPdSK5YW2dxfWKiCTA6JXKbP8cTKYTpUDTHkun7muTT1z6ENGdHbyAKHxYGAAtyP6HC",
  "key3": "2nGi7k5pShSmCRTDRhtwPiJxcrmWVTiFQ34M64ARfvL9Hp3uCi1EdRJb93GcysaYtrNugwkTcMsHGCKCr187T7XY",
  "key4": "28S3QBEiyProLWnUH4iyYT67FGnNMiUBEtMd1H4g12xQJxxkRAzspG9vQ3SqyfQoVR8tXPuNfYKp2o1xJr9mEkku",
  "key5": "5mSjPU1hMjwQrtSNZtYogVckiFfUK4a3UG6pRh2LMJAHq91n2R49dsYLTFkpFye7jXipFGkZLMpguiYuzJrYmDuU",
  "key6": "twC9xVE56AipFqRVMoihWKTQ9nDjoabQagLMSpavwVq9nsg4ibimAQkR9oG76JLjZugGDmwPBqGGtnWnc4mfgsh",
  "key7": "fv4oaidhfQwaLhKDVhoALHLkPu5rfDwFkNn4uvKT8s4CVsM75WKCJzwx4jnEGgKA2t46dCok3V3c6uW4mEVguJ2",
  "key8": "5VcFCZHti6rdgMHjAwJWofVmuf3pRCpnnmh8nVkjmEajTXm7A7k75cAWbsAxkRZU8dK8oudomp2agSmtgWfDwYxq",
  "key9": "5VhJnGjqVTd1xfXPXBA8KsVoYK83vYijwz5aHNgLqrPB8UhLsx1R4F8uZVvnRGcqAFL5ceBcWPJqJYi2Lb9efmNK",
  "key10": "45Y85LRFUr3dPniqNuiS7DxstVgU383ueXJzCxaLMuYU2uCwXZGvhQiLC37NEoyD7JMTTjpGH4DRXvNxVrEcwhEh",
  "key11": "4AEy8KtsVummtHtGzKrdgAGQb9n1chSsQwnRpHi6sJwQ9kACuPK6M4TQeiNPwbuZrBD2af2skLRA7GJnYMEGqKct",
  "key12": "3B9TQvd6HB3Zu2NjEmu4LHEPrecQEcUZjRN6bGzYW1r2ka6ykoqPqeMZodXrQscSZoXpmoLSv4jVDaDszQhG5d9X",
  "key13": "L1cNTMHS1VAsvrJbudEBxKiKzK2ezma8Jk6kDJnUzvnatuNMFEeDd9p3gffz2Zd1PDPDKX9M6Nztz66WtfEVaep",
  "key14": "48tM638HCkKJT3G3XCt7SZKUHqKZ7jBLA4GshmS3jVKMVduXHc5XcBUbMneVurNVjBz1N7VBZPgzDqLsz1go8Vok",
  "key15": "2pSRcXe9gmxr3ioCn5jodUhsnpKgERAsvWHd5WEtLBfcfkgWn9sUChu24taF4JNntzo12geZYXyhcRRZbJNCA9PE",
  "key16": "5X6RkVaexrQ826UFfJJSPzjeMo7CopFEW1EubaVhyvqdEnXogjP3Zi7mV6csqqctUNRufmcpEH72RP6ZEUw2aPWA",
  "key17": "5fMoDr5GFmQLwgC9Zk1qaDoRCsemU2VCjPLH8rQVuGmrmHU9KqkkUS34p3gQnJR2UkhQm3mk4GaFhnZ234Y8tFwi",
  "key18": "5t4pAidtUCof2PxaF4Uva8tZnuEoQkSpK2BDySgyv4Y1qu6hqrFDukejsWc2MifLAce3aeEfMMHpKD1trcNWczUg",
  "key19": "5dju1g2UM4UWt8BCpknHfKSYAvNyTajeYWEwm1p8vBUaxTnBmsx5kdwpWV4F3asLBJVib9CgyM5cdPbLxWkr8K2s",
  "key20": "4b5mDSjyyrLxh1tJvJzQ5XLaqABJ8fZg7LBKFqRGyPwadNaZ7AwJ64SJPkfBb2zLuSvP4Vt94tVJ61oHdwrhwp6g",
  "key21": "2fpiDAi7LJRpnXvSLqsmPX59WKZknvvrnrqaWdP2sRuYjXpAAAEsxcENpFpcsAXN4x4SvGDEG6eJNbC4V4pbFF2G",
  "key22": "2yb33hMmM7mNhpNAGH7u6mDarmCJbk2fVapQ26VNRUxrCtsxBKZFPK8mF6R92FDfV5gdgTxYxoxTRTXiJbnbbvS3",
  "key23": "4U4yyemJvv62PaHVfno9fZLkbXWrrhN6cUsoZDKrtsP9CiHUA2vQykJ9RP4Xo2ES46KugAvF1UU18P8V8iBkD66v",
  "key24": "4Tdnf14hRbKKerMRJqyShK16wQqx7yc5rv5tj2BADA9pHh7wnqE8nv7CgvgYUfTKK2mTAAu4N8FPJD4FykbfmKHb",
  "key25": "5imVDA8SxvJx9sXmHSY6D4YiN3hAvtobTAAjDtcVnDk7hGoi7M6rh4iXhdv3eRdoCNm6Z4f4QgPBkBT4HWH5xgJv",
  "key26": "5Z9ne9ythcY5bMKTXbDfy7U1JssUpsQ3TrqhGQtiYCbwTGgRBoL8jwViA6aKJxrGLLosxhBiMwnZFEBxpvdQMRoY",
  "key27": "4787Gqnm8gfzebN3SFc2DY3k1t1wB32nnjVaXa68RjrkmSRUarT96VvKdoX8jxjZdGCrTe88WpJFfhRk9Jdt7xeE",
  "key28": "5bahGHinfc9ky5PSt8WJHpo5aVDfxdtNmoZXjr33b6pcLeK7MLCMSuZGJPYhTAwPXUaZZ2uev1HztqfmafeJ8wSX",
  "key29": "5XmAGPtRFxBvBtBypUwHkKji3o74pSRu7bZ1oP2mjgycUdqXCdBpWVXSxFtDCP3MQBrmw35JxsTmeAG8qmF9bc2H",
  "key30": "61szdt5DsfETsyfVffUo6W7kVvjf9moKGq1NveEP7BrMrVA3vznr766bRXZdz4Pu2nLCFe4HoFv5etHSb7vPmGhe",
  "key31": "2w7fbeYH5dKYJzRKdYTDokqC3bRM25af15s8X67rVPKGvPxkgopgfjRNwbWEc65DeG7mdzxgWtmB6ihqo8XVtvtE",
  "key32": "2PKE1XLF91mc8vG7KrjBWbXhQN8RDWmWaGxFp8pHHybM2zYrxsQaNbCFHMwrGtYnsyNb21eduEsY5R8oFwVfcyb4",
  "key33": "329xmB4Nd4WsNyD7iocNmxC46pq8tPNGstuumWTdWUWWNUqprKtkeckfiqQo6AZymVCkhPgp3h9DqgfEzGrLqtuk",
  "key34": "25fgtQ5CtSDumFZgL9ZPRxptbQPzFZx3rmmEWBd8WF3qgF9h9MgGDQVzjw9xY6Zf6rsyWs26De4VKK6U4zCLtT5Z",
  "key35": "32M3THwzRyAMaiQs2hyNpLRemiu65QZZ9zqpuWhDpSm5wZRGzMhSLZgrNJnUWLGWEZnggUfCm7qzHEb7iLy7ueg3",
  "key36": "64FLuBmignW2LsMErh8nTKj7n28MZUTB6FuVSbaAxum3KgUbH9kx2jzoMX1sQTssMJu8dGVeqxnUGPoVc8W3zVGb",
  "key37": "5Qy3nhyEQriTdXo3sE1VVHuxibBmN8aJ1SPcbxXp6qBomW9XuVvJiR3EK9QkJxVk8uResuZou5TP3Ya7nEuTdzxK",
  "key38": "jYTRpAvkjB5AGA6ojRdJDarz9LycWUkmCESPWU4zSAZQwEAVzxfjh9TEB3zpuej9H4Yd4v5vMggCynHHNGd2ZGG",
  "key39": "5o4Gw4Pg1EN9Y6966sNTPF9JBLZhuNWxRZsNZZM77ZUBdfvNBYwFAZmKqCG1JyofSGHZidqa9ibnebL8TKTtv8Hu",
  "key40": "5hKrmoHSaRVBU66CEDfWxamD4WyR6MsEnMyc24LeKPnfu24Kp4E2CjNJk6kwm5vgkQvakMXqc5AuDxX75rUweG6Q"
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
