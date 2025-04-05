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
    "49qyzYgwfuvc6bAEuj2knBkLmwyWp7gyva5qBpDzCTHWEog3EVHiuvWvjkeRTNzjnt9EaMYbcLhUeGyS7DfZiiLX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AByaAhWB4Qvu6RQb7AY23HVup18imvdkos2rXenEiQmsTNyVSWLtpqgNySJRemVRp4ssUs84Fxec2ox4TwbhNnx",
  "key1": "DhzxfjWoXRQdZLd8wutke37uQP1W8qHaNH7jWjZn1Si1QFJkbwo8FzLaaoTJFZ1B1XAMmLRTqhVfHbwCkLwhr4g",
  "key2": "4Eeknf4fK99jcAkTTAjDpAJ1rwmMstdjYUF3GuBHrq9rCwp7r7vxYxc7HRjM16DznPwtGtoA4brAm7XYHr3tSE1j",
  "key3": "FfcnjCPsbh3TBHrKu27qQZa3rhTHSd1rTxBqGZAFyje6MZsCjoGoCKgEQDrt8tYt88CBKWQEtTyKuGXMJvgWBfZ",
  "key4": "27GVkiSW1tmZ9YZTLqr1k248jBVzVZfWvLzqe1hS5JvupKpRJBKmYnFA8z26XqBX1PjN8Namx11rVctHNREjWvZ7",
  "key5": "3hpNb7df4D8p3PjJnKKMvSeefuf7Pk5KdwsycxgVwMRZXsDTTFDEZEuCSU9Wo2MbnMhqDofdwwxZcCz1L9u5EH4Z",
  "key6": "3Gf9Z9KNFUX1MdQ6ENe8Q3F5XvkDwfvKzSnb1zFPPPXMo6FsVEad8spD6ijuRBrKZiRx9moa9qDkPm3Md92zvNMq",
  "key7": "3LBjYGX9cgoC6QYA7nEuoL1i8BS5hFFHCZmGXAPZDgxAqDnoAkCsvj2C5sB3YFbVeWCFbDeZamBqGSrk94mHfkBP",
  "key8": "3DYfndeGUNDQGovJh461asMSth6QfJciZDfxzt6HLgSm8xiUopiWEWn6uPPwxws954eBm27d656S3siuh5WKQUEn",
  "key9": "2Sg1C8hasympZ1iKWiC9s24nfzfC8Ehjoco9snYSVkar85jsvGhFw3gasvRH2di4LGKrYhp4c2vU2UXSmwZk8pat",
  "key10": "5uvNUYpeFnptG82bSoUT3hSodoxsbfpuF3hJD3ub79PQPra5awaEeu4Bz8MuBBHbsouUtkUCLej9UkdDGKbmjPrD",
  "key11": "3BTkhmRipmLZQ9gpscA68bH7Sku53mb7rB3QyZsrioAL7nwK3nEFRVp6z6bwHcREr9PieWq2PGk1s7UHzwXF45mi",
  "key12": "2nRJ5Tg2RJwMmLJEyisWh6CAYFAQ6NidDEYxMdfZFXDDE6y4a9YrFKWKVLNPHzx9n4nbU4SZUQjFPCgNDtkSeVTt",
  "key13": "4wbnX3KFMckx6tvj1SeY3LXLSTx7NyFemhAFGHTMYiJ6k6cQWyEt1PQGf5qYGKcWT1X6tsY8GhzLMGBuriYFZk7q",
  "key14": "3MizZB8EvZQnUcs2BodhLxj9aMi3YCTGMyRCqQa6giAfPFKzAwuRBLC241PDqo9xjc7qLYVk5LmjtrS3s9QoAg73",
  "key15": "TWd4irsRts62NxE961FBrkkRxKXnx86M4aqKMra41dE5bGckdJrkRgyKSimNuaLvGiAmCw8QE9hmy6FLarxjHjs",
  "key16": "5kEsSub7kU5qEWG6j3t2TBaCXp3z97xtRyq9c9Vf4nmscxyyKNY8KyuWCsnWMwXBUbcVDQjtc1jwgaxEp9ThYAQq",
  "key17": "3ZxWSZQ5vopeijVAMtcMJ2apLN28dr4ZL9M2TxFcCkYZh1WRcAQsG7yVFwtWfkoVLWqspK6v1e3QKvitioQ9UnyL",
  "key18": "3RPXueF44u189g3DSC3iff18xJenFeKiUaPHJkgyBKJuWrJRa6oPWpQk7vNKQESE1w1FrLtfxZhUadh2HTCUmXcM",
  "key19": "4MyDN6H2GRrMVVifvpcVbv9qDbK8VRirJw74q6otiPJizmFUBtm7WXopJQ8xt5BshrxH9SzDFqz727ku2hYoNnPy",
  "key20": "5EXZ9JoNLSGqgwCbMFoDmYZs8n2zvToEvdQFYcGQVCFrPkMaFsxJfY7LdFDPgSkRWfi6jQGMEFrsV1rFEX7Jszsx",
  "key21": "5GcaKvroiNbC6UNPhJSJ4q6VStNhfiRARfTe1zBWZKo6mK1dwnu69ehvCWFCXCacn6ofGry4a2HcUdyqDNHCwjhB",
  "key22": "22ongrMpH8ZekGqo7K3fEjfE2Tx6V7bv4FL23XtzAv61ZVcc3zBYMgATgnBcXdBRAHRrhPs3f8cbMawHC8fWoyfz",
  "key23": "4vLeLsAnet5eRXLWqZiKCeNzUsHzGjw59112SddJV1GH3ApKao5ny5WJr468BGkJmxAVsFwFStUNuzNoqrQRA45V",
  "key24": "5Y5cdecKcHNhmBKizmKrtPDJoxeEPEXTCeuEaAyAKmks6RnsNXUKZbmAREt7ToCV6wjPfDBPc89LM1w3UuEHQGfs",
  "key25": "3yy5iwpQRS854ZJabJbtvco2Y4fqW2sMBpbmYkgPWLUrPjiWdS7k16pW9bh7tJ5BDDYkM88zCSYh247NsJe3JfSG",
  "key26": "2qUq7muc7FJCTnb6z27M6pJP7EJxMevdYZJLk2wxVz8PJVtnzE7ghK2ZF1nzkJSxii7aQGsnre6JGdmUzJvyn3E9",
  "key27": "3xMEnC8PcrexyKiWwvZwLhiBrvBc6MFp92rC1HqoNZGqiF4r8EufsNz7m9W7zBPxf1Kuk5TwG3SGKNdmVbxsyApR",
  "key28": "2Q7s2UMfay8cnhtVUBX11UHEpmhNZ3GTtvUZKMQzuHueUJw1xyWSoD6z45esKXvrvSjPAM62u5pWNXMydcNtqJKb",
  "key29": "4gzrc1ERaY9ok4iEKpeza13NVwm4Kz5BG2Z6m2BC3HWdFcfhTw8MjChBVCN6NiK997HzPDxbZtGgQjCbg44cJBq3",
  "key30": "2Gq1koGBGSBadyzK4iaofNj34mj9yFj9YkVerbnGP43pkksoc4s8QPEHg2gPnoVAXpXH2pFZQa6aTvmfJt5H5R4J",
  "key31": "3wCpmuEYTZSjqm3SjDFZZTqJiLg8X2s7uyFhiRbpLAsDnqcjhekGtNuAHBF9wJfx6vEQBM5Ni3TWx9StWaQioWie",
  "key32": "554za3TpJNm8NQMRBVJXz5nSRGgSC9deSYC5ycfCsgGPtncGTGUhaiQD2iJVq8tk8eYxhwcowF2ACGtt6ch1CAEt",
  "key33": "2DCynJLbiLxnNwG8sonfKFDHjQBTrWY1y9JBzy3991GGV3uY1hhL1GDmwyRqwMxpZffXem9BfFwevMNrsvR6VSLp",
  "key34": "2WHixZ8aVNBzep4E4xh4Qax2ZfmgpatiZLueFAdZhApv51WVzRT2oJUYPuktVPJFGmw6Y622AifsFMoFcZQRVqU3",
  "key35": "UwtTjStRdT1ikj4enrwTSQSDr4BHNTodTRD3wrZzfxDPeN19UJbBsA48SUQckXnvs4kHVDgX9KyBCUpNnnVeiqE",
  "key36": "35wGNs8HeA7EfowmfNWdtmy5dPTX49cxTniwjjhTa2AbWDCdDdRCbHztGhmAWfSu9ksB1Rrf6thzNuAGH5RZJtDP",
  "key37": "5HsVtkFYLcR644psXfyruvCzX8cPJwisjn8sEuPgHDnJjVQwCwvUSFTXXmdrauxvM6XtEdxhFT4jbEBfDP1nsUnP",
  "key38": "62QhoFKGjw9qA3tJqNXMgjCJqWha4EGwrNERYmvXBuzyGAxxcRFoVv2eTaLAszdcdtGXvLgUEasbG76pLAGnCz3M",
  "key39": "4ErSHH2xepfTXFJve1SaMLxcpVDAG1UW26p6cbwFstgcg4Z6FgpHuYi24tuSUpr3gt7dJAV8PS8XgtbBkM3v4ZQW",
  "key40": "jAi8E8yXnZKWwDXSXTEfDyWRk3PwweCUj1fyjiDa7F3rjprns7bkQYfno6mhuMjEsQfjWq3XHZaRjaj9VVs9DX6"
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
