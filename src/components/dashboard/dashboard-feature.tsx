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
    "2j82Mb9pNvF5MUJp25s2yASCFVWNpStFPhfrQKAGrAfu88aoyGho2bZ8pkqMeGaHFLDMCF5goBpHmSFn3sy9fhkx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tRKGRy7pmG5gxyKg3R2YRZBaCMWicCwchENfHdJPmB6otEfVtZCNfDBkhTuJD4sv5RSGfLLNXT1PU6wZdAttDkK",
  "key1": "5fLE6oqjnbSuBdpUjV6BxitoNtJUM9hLcnquS7rN1KpHe7wodjB2zBL4W6yZKZybmDoFtLrEnror388982qKwE2A",
  "key2": "DeE9oapBFQGXMbdn4VoNBgnuP6ASvvhSVNZ6Uhodk5bbVhRUNwZae1d5rLcintCGMkdW5Xs8Td3h2sHrhmqHECr",
  "key3": "5vNmMEM9u2XdoTDkwTQzX9RC78jDMUjGBBS8cwh8SDGFN15igCqsyXx8nnbCgLEf5k1JHT4nTmdxwpnUZUt3QDpv",
  "key4": "4xrxtWRMe4kNpvqXZHL9S1CXQPmJEovEtV4sQjN9RbR1KNsySPfWyPCxwR72Bt2N4cCtUNdybM7tgesssgBhiUHL",
  "key5": "2LPF45mMNfs9ot9nUZnam4JTwYXtecfYX7FxwyoAWm11dRUfu9ccmn85LqiiYCUZJswcEbxL6JH5UDRfd1DQxkWs",
  "key6": "3hvQBJRec3suDNbF1WYytV2HzsL3Dvjao8Lt7LSsWnUxqUTjNz7QpDJS2Z9XaEK2QoHaugcrGiVR18VgK5pwB7gL",
  "key7": "58t9GspQ7kU9BoGaaFtWvw2T24eZGC1yG4AgnS7v7zUudCpuwLNvQL5EC38n5pMv5vCn7k7VXxQ5BHmkTU9M59pb",
  "key8": "5cDnoitu6as8frtSg3KHvSZ5n4Rw74cNd68cntaaAKmejtFrPAj9pyB3n2JNpLMKVLWs8iLTGyY49tegwqzRyqYE",
  "key9": "yuC17tBP3TDXy41N17GCAMme7t2eKhi9VDQ8dNZAg5a4y1Czsi91vUiXJ9gYosyNEKym5F98GHCy5YiLMjf8h6g",
  "key10": "5scsGH84oVDjT9P2vKqfHDGcbbwprGNNm1TU7UivJz2KsA4o4Vg5zfLGDwwKn9mpaWC89g6TUnkF7EAUNEcYa6mA",
  "key11": "4YJELtLt45xAGdk62gyCovGcPgBzjKcXkXq3tJYJbPXtM58oQCXNhXvSWavnuPtFpPa8dbnr9FUrQbjLn8AfCpe1",
  "key12": "53n9P8eS23k4J4Bh9tb9JNenut2DgovobysJmJw4KGtXz5qiQdUXa8ovBz4zNzBnyy6PCD6wvnoyMKNFKgdi76UU",
  "key13": "5Ndq2Sjg1rmH9eysMH7rLwj5VhfQDii2gQV9X2aq7bkYVnnWhQ217VDAy3U3WqZnZJhtHrmkRsGePRFVnaQtm6U4",
  "key14": "64du82RQQjdnw6c7Jj7HF8QkmY1KSo5zQAwF3QKYU5d6UzVBLrtdYmvcP2TTxAsrrTdCxAFdX8XKTKDkfMqAZU1K",
  "key15": "2HLJ2wicAKmhWNQt64v9rhh3uKMKFWv65RZ3Hj88w736FTViZ8v74P9RhM1NSHv4bTjyZsAmBVscjd9T6gDT2JVc",
  "key16": "5ts63YYq7vQNJfafSqhxfNUjcY2EEkx8eLk35NizLKUrQSvrETVztwtRmoii3A4EhvxeFFMCtwQLtnKtQSsse2jZ",
  "key17": "5zVAuLBFqFwEL7JdpwLMrm4PiUoK3azUjWb2TpwvgstgLkKuCtrwvEnjPARkSMTRzmNT2Cq2hbiwuux8WVCQwsJD",
  "key18": "4pbiYa9hyjNq1eASFALUNgXaYvQ94MnF8Ve3uGwF3hYC3XGGVBd88unAAE2kgrzjL5japw9FJPgD8SoLpjdf3VZf",
  "key19": "PiVg9jaAPkorenNmnMA6NDnG2AZerR4RHTU4x9szPS5Ts39epRJYn1F5puLmGeX7HmjSbZMM9s1tj3gXLrf88Pi",
  "key20": "LN6nFs4ZQn9UkE3uvMGb2hPg3WQTqiqDss4PFX2Je5AZuwDNkm3xhcVmZvoYWzfAPdYRGpaZDCrTQDmVXEGZfyE",
  "key21": "Q1XEmmJh2mA5XyahKrh7QHEWKgQStMPmBnQ8wz66g3BicKDzRVTpRptDUTmEKYYmSvCxCBKHACuZ1vctzuJSUYr",
  "key22": "2bineBuSmBjy75urq7gQN493zH9rTZMuKsXqVzAnN6e5VhJSMSzWn9cjoj4zwv2TjmnLKhfWwJuwPz4XSVXbdFGr",
  "key23": "Kdb2rUkne8hVGoBH5bB8QQeahfgGRqdBFQHVN9yVxk3YxyZVMaHVGu63VxjDtZLjsdDM61LwU8khaNZqH1a8Zgu",
  "key24": "2ivqa3DuvmyuJxR4VVBgvULRvafmDjp2m4L47iKw8azWfGgEWVGnWvQeu7cdih9f3gVyY1ikEWo8RCuaKUA2SvUM",
  "key25": "RaxwVvdn8YRMBgene814JePZGLXw3uGo596B8AxtmhYDotSy73PoPLozUPidZkryHkuiWyT1Rn4Mshm2qLBNcaQ",
  "key26": "5RPypsMEn9RXjZxeGFpgjgqz2yj4CBGJqHvoisGsr8TdWWo38zKbMwTRcmaJmM1sejLQcA82vScuZFWmkvDRkPvj",
  "key27": "4zLsGkwFtBegXMZg1bKvMmq5taK1owiza13cfL5w7sWppZaeT9bFhYLWignjFZYd4T1Kt9Rctsz54YnyAC39irWA",
  "key28": "2K8Sdexf8GZysdLx9eofodc1TvdpAJwRKfgRKdfbtf8dbh2MUfExwnq9AEsphxKZRoWkYXXt3qPwnd2WvYKYag64",
  "key29": "28XikbcJNy9v4HHRmxRPegnUi4oFT1FsKANiamLXk3f12QxZxk5ukLcqfYeDAicHPiQdyNKrNe7DMavLQDyFw2P2",
  "key30": "4nWATkbU9RsVE9xckzA7hb9JW1wFsYE5cvJ8VyMvCgD8GqaBL4Z5tRgiopuhRrZPPbfRPhdAtpNHEFfqUAw1GyJv",
  "key31": "y1iAGEEWsjidbGwV7CuX3TrVzR4zq5wNYLcQoAbuvnJZL21TN9oxCoeEr5Ar3vrN6M4eHjVEgVMrWqngUsoeyf9",
  "key32": "3GphnvM7MqL9vbXCBmHGaHQL1poX12MKjVacuRigRhceCLNZQXPfTURGJ3kjgNWmQXndqZrEfE5Wy9CweNxooCcT",
  "key33": "3uagjaQookrjyLoCj8pg4kgiiNhL8zqZvZKqhzY4EgLjoUSQ6DJuVtPj5sR6RaeAgFhbnNstzWpbgxHV8CkCWvq7",
  "key34": "5R8DtRJ5XXszp6LukFVJuMaXfdfpnKC9WysTECsNZgGeeCTmP8djCRVALtJEvE9NPxXgzFZ1issiw6S2QQixzjE5",
  "key35": "5mMgZYmPbP5SAdisMaJChPJJfbtgPuwN5ysUF1rAXufV2w9zdEUv8JKeugXKNd32SQGud4zTSCTr2eDzfE85u9v6",
  "key36": "3Sjv3DGLyZoX1G7nLFuPma1gGjbNLXDYp9VsWUqMkm5p8hYT7rSXqcof21ZVgo2rz1yhSVSeqZEx3D3hbks94iEz",
  "key37": "CN5jCnKtqGs59xK8R1shkNoiP2Qj32jaxLNf2hjcu8yK71K6MJifsicjnct47zXwWN8TKzJcc55ZfRFrhVv6BPx",
  "key38": "67Tm3bkCFJ2sUerjTAWCEGgwfqt4gvWWh6izmSgg7azdGR28LB7NWSRJY5bZyDTGTiXJDdATQE3zcz1Z1RVxoMzx",
  "key39": "4Ju8oMnydBGnFToEEvuDpZuQorui4zygMgJEvNeT6sVzPucb8nLKmWpCA7YcqH7XJ7GqpaQtC9yfKC3VQ3w3yQkP",
  "key40": "2G3mzCCARC78HtYVpXRTAVsM2aTkXsoyeD9fLFB698Nc62B56gfMiP8WXC5SJry9atZQB8ZKm9rwyg9HYirBHWnH"
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
