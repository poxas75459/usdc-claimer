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
    "rXAibxWoFh9A75bmq4ni7Xovz3dVUAGiUUMVv6UdrbvBZjSyT4Pra3dpUS3Qo5f6z2sGA8bp64uova49hkxihm6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65VCyhHYdpjUfqyTsMVBjBvkVMEL4girZwTiaD38ZikskwesAsRcsXJbjvjA6qdJLhvvc7DNDqZWbWExNYAB3Du8",
  "key1": "2Zqgq3tg2f81aiQakrQqPGsoEdNdNonoAMgaQt6q3X9B9yNd5hZCjsMqGXeC4PSezwmNM3T7fjsNMEHPAjdQpSds",
  "key2": "3BVS3cU9Pj1rF4HgefxjX4bFcdN8y1Tee3Sua6kPgf187cJTtg2yv9mE4dwUmojQaYKp9UTdB62A3pcJR6V9DCsy",
  "key3": "PQC1wD411wCin162fhb5MzSRgTeYLnhza98pRaM7HaF3P5yCphYKb78aCNYcPTHGDtoetdM45Rye513kWBRTDeF",
  "key4": "5guiLHUqZ3sjC77xoxBqRLyXwzg5Yp7de4bR9Ju6YJ3z3SFvVmbsFf55fiiyoXBaf96UrEHakxxUC1qGsRMdtKCy",
  "key5": "5kFg227rMAQmhRSnWnC9bAT3Mvad7MC8v83TpMjLp3YKYTyA7TTY17Lpwr4Ku9vRgVVP1WTAzazPFHwr4FfCCJAo",
  "key6": "HCR3PXx1CMxyJ5fHcKVNwBAV8MXgijebk6MVUNXwv85jZGs6ZEGpie6xChzXe5BXwK6FndnTyi5srg3sa2nFHgo",
  "key7": "joZjXapRDJ211cYe4vrFkhnY9Xg7HUegJKpHyfpoVbmQBXKdaJRX45RR1k8jqtvLXr1DUiGWVwDx53KwpF6AqTE",
  "key8": "4pERc5EfqVQwwrWxmjibk2M3WDzztASShQket6wN7D9cZK6mKSyQvEc2WR36JiCAkN8v2Zb7HseMzroT7XV6CVG6",
  "key9": "n8MThDTwW7ZxHBKoKB7vpMBe25adSdmxStcc5EFyBYV2FqxKK2rpz7wWE5JQ9UA3Ycm67cu1rhW5EsxTkGX8KGA",
  "key10": "5EWq4Q7KKGQSUD8hKXoXe4sa2YYp6WPUgsikSWoVqGov8EyqRQiTszfR8utwXo1RoAma1PfTN8o63pFkpW5pvgcz",
  "key11": "2qpRmA5Na81dSwuN4XkrqFrgbFYcrbksvt6JTjDFv23VhBf5ciMriVCFB758wxxqzbYGvPCoscuXW9MCstX1Sxgd",
  "key12": "4wKXZ8qjS21XuzP4Q4sADboZzEiYioU7HPPDTkRd6uqbf2YMRCSq3Rw12MpxmW6rf5Y4QdgK1fBpW5nncGXUpzWN",
  "key13": "3mvEBqB3hPnfC74JHnpRjBaNqjbLTuGFeTnx6AAaHsX7gJFZN3fsQE6XWcGatYZVBpcNLZeBH11VdJc8q9qRQtP9",
  "key14": "28WjwBa4VCx8huBv66oZ86WUGVTdK3gpvFUzm2ZZ9Z1xwTEb6oq6CEAvcVk43yovKNYmciJySNcYoDTT9XhEGedY",
  "key15": "s5Xyp1WPXURmCNtmiBPT3BD8SB8LgRuUew6Hq3hy8Xr9gtuiYE2wL3uGSZV4tH4nn6X3yJMQa5m1S5wpbya9rEF",
  "key16": "2VbasZ1tjt8KzvuStYiinv4hQ6Hwk5trDFkUy7wqDg5tymX3rQf9LpB9suQcvL77antubPqMvotSLxZrSrL3xs52",
  "key17": "3AmwfwMff8b8snDCbDbEeMjwFwHTbXzmfQMrw72hr8TdgG9x11S3YGuWR2XuF6tHx2YgigVUxH3s2uzfxvUenJ39",
  "key18": "3QC4j2m9LBNwyectRskfFXYrBMP73zv6wof2N6XTtqWUWudvv1434isnKoNDKpka1w2RQQFTF9wj1LibPA84HtYB",
  "key19": "3k3pnxDkthKyaH1bwMPRKmbNS7kSYBmQnCp7rhgdPurU2Y4fMdxLcRGwqPuDCdVDiXvfDQzQKyAcjngevDcphuHc",
  "key20": "4KNR8bqvaJxxsCzjHnefkzK6h5E9dVjdAk9GacBhYoYMg1UvBDTfVx98Hf4hmbhFHqtYs1kekrgQdFGwtZUct1qu",
  "key21": "2s2CBL5rRgoz4BxnA7LzevjpiasfhUXSsK7rauuvsedM2x3AgRvCAYMXps8aeSDL4coqy1mv7sZKLi99fFBzw2GP",
  "key22": "58LPLiZ5AGMcT71qavzyxeFCbfHtWkNwGJFGSPEpuassTxCBQZx1GAX65gkJNJdK73X9YHY5pNw3S2Z7YDwGG5ti",
  "key23": "2kQKz3bFgsC7hrcw2pZcrLa9bVw7FCBkfo8BLB77bkLVZ4sDeK8qxJZCPLUZNysTHZMuFQ2U2yp6pSyZigUebGzv",
  "key24": "4wv3h96EYC9m2UAJugWdVyMSwSRFXnLarT2d9srP5iL58tmxQn8jDw3fqT57Z9wps4euTuEtMyeVt9nxudTWmdie",
  "key25": "1UkKxUrpdvy13DHpVoQuHDkvGQaf9kKDEkoUjdGwfkATxqczLnKPj1MFG3AnVrqHmx9f9ypgq2Um92q1UMTZfHh",
  "key26": "38yLQdRZcwXfR2XtxX35dnXhh2fbcp5LDZzUeNzi8Q4muC2N88BtmJkfdsc7msD8Zmx89pu5eymQaiSPN3gLZNor",
  "key27": "5hMtyzsBnoB7QmpPBc4YtWCt5m3Ez91jYSLpEZobiokj6UJCtjMBusYtgdQUgYPHnwR6MdavXARciCEWGcn5UHyx",
  "key28": "49nrNCzHeiKbtXm84Z1zgXcKwKjX3YdaFcrKco16Bakd4nZx9hBw77QA9vHERvemXX3SmQ1iiWjzQXs8U95v2qHm",
  "key29": "21ee6kuEbmrZ8uCx7a3J6qnXctgHi7Yp9RFPfTHPoP8MeaeUSeBYxhREud2rzV5XLAhq8aDJbUUGh7y8YaHv362G",
  "key30": "2uKiPf6xcFNLuXRz1vBALTrbqdTcLSYgLjrn4WVSf5PXxcg12ryc5McL1VJUAGhS8yFhAqP3hhRVX26S7tswmaKY"
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
