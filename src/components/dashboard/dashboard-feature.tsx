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
    "2WgpuZvTbSVxiTvHsN7zZ2E5v25Jbma23dQjDSEHJeiRbpEK3mNU2BPrQKmeAbxxBDMPBBVTGPGLqg1BJTRy2oxL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TY4AgdnyGH6aG7eeNbT2PANQvTdTG94Qz3SEHYXVpomdWxfoqGZA4fcCrVN49c9nZnXkEH4trYMnAveP8fDbg26",
  "key1": "5EFN32hJqcSQaoXm6XLar4GQB9wVNo84Ao4TtgCUgJ8BTtGK6qM5iWBFMAGMQ3axDqSBG9YwBj1ZL1VGZHAbnFQc",
  "key2": "4n34pYMdEyvJnrxN14LC82p2733xvDSMdnjtnx89wK4piR27Wp7brHKs542fy7EigBxoDcWaHrucy5MpctQzoCxS",
  "key3": "2jDqrhaZbyqnUBELkG5nQAoMLb5v5QtDckoVsEUrmFvas44C49osfzx9uhCi7YLMfsi9YvEAzsx3NSJ8pLL5scVy",
  "key4": "5UoBctiMBUuxXTs5ppJBfFAJmFZzEHMv7RaMXD2Q1KTmvU4ZVobs4ktBLN8fhrwEZXsDxQQShGnP997piQgP2emG",
  "key5": "42sjv7zVW7SmuMvEKBLGa3gnJ51sHUhexa52yGvoqoubJS8EiDBCgAT4YSutWRyM9hsorvoM2JVrbdEd5VJhN7AU",
  "key6": "3cGr3CZR8BL4DnSu4Mp5uC7NbTcXDqzw59swWtyvaHTQxUV87EqUwJuBoXPTqkpQsGxVrNaZthpxw2V4aynfzwpj",
  "key7": "dLTQkkprKvLYcDTUaud33c4ytNdmRo3sQTgCiak8SZbL4Ya97Mw1mmdtvF2L3e4Kd8JUgeUqyw3gVzpjQ7zQyv7",
  "key8": "5QQBeahv59j2iJav7G9WN7mTbcjpQVnC3FyCxAT8oTaHa8DqFq798gdmfxSRkHVX2EkcXadriSNQiofGwHwFqis4",
  "key9": "RPXdc3ekauSPmxi4Utyzw2hh9udAB7QsAQmDhGjx9PdsG42q2TY36QUe5Jx5GceowzcSf6CLnUeE12WThqARKen",
  "key10": "4gL2aPBqDQk5sB8PagAda9ruVSewP9KAKSb5QbkbYkUTUyEhuN5pRN5HBNcDiCz3GNCB2CHVTqByWVhRW6AHM7kN",
  "key11": "3bZod4jqxPVARxDnYLfMf8b4N1RVphqr5nKwJYV1GDFhseDC5x9cYuZUAoa7T999ZpifuzCJkFzNxFvEjPSgKgT5",
  "key12": "KgWGekHQRTcjNvCapYAkBZFQ2FhiGgfsouxwMav6a1R1wpbgGJsQzLvMfy41mGQ9A4k1k9izCThejTBWiCqCYpS",
  "key13": "5NJhcKpkWgNQojmeuc2wP3t9icfZvvkL9hTtH1PtyfHbXEzUtUm2nyzAvLzVxTHzYYS2YVuvrBzqGie3qFJd6EGo",
  "key14": "4emJbdiBrmPQCwi7tDbzfU77ctDkHdm9FkQS6e67huGVG9AfGKVTJpQmL6UtG7xP5KHkEtPHroU1U1VXkb3qx6NF",
  "key15": "4MhqM5uc5WUXWX1MA9btnqJU9FbnSoYjkLNcsJqshBNpKuioW87XU8TqGToerGYyQqiXdaDiw7D6YyNAcVZ1412G",
  "key16": "2TBP4vp17QeMGZkxvhV4LgBKQWfqzCkRrzqfAZc8qVAMgKDNNFjeNLjNAnadrjLf6e4jYEHrMqsLub8D6L6AWdhi",
  "key17": "564MBTvBh35zMcVJPfN7SFD5s4xVagcexipFjpqBqHY3t1fWaJ1D6dA34LB2cun4H8Tr8wungLoJ7HAwiCcpK9Zq",
  "key18": "2u1NF8m2yEhNgdMBz7BTpbbnMf9PNRcdTcySemfyYXtP5zF2sVMnYW424j7Kaf8Y41qAEvUhB5YcF1gnGtFL4mA2",
  "key19": "2RXvdJUs74peTXUJDZTG3RCJKbovqQ2sTTx2gkWDviPjBHUFWbdL5AoyHrMWLNag1TJDUHrUtLzr8cph5zz8JDme",
  "key20": "2RrwyTtN7yG7gtScSBT43JdexjimwZbgwFGpyGA7bNFbUET8Uq5YoUcJYQaTSUFKd325NMWWsBWLGTHjJFwbL81x",
  "key21": "2KopXhWr5itnoFrdZCTagpizs3pXngs9EsKo6iqbXkUn4DAp78DfyU98woBY9igEXCHpKQAXHRNvW9dsXHR5oRFT",
  "key22": "4XgtT5kGLDNgF3KufMdyNTYQ6SsADRv6xtFZXMxoZ5CECW397Js2q2vpNF1saGx2aFkb7s1pXCntGwoo7VCzZHnK",
  "key23": "232uPgu6r7R9SYgMqwaXLgyrdXPrbW5cX6Y5vNWum2HikmYnwGtv833FG7xttKtYHhXbYsDwCh8r2fEGWsdZb2mb",
  "key24": "2MG8pBTrT114MhGxT4AidAMjstdsHma7LMrVPzqo3aFXWtHRa4Dc8xhdLpx1bBuMFwvcsPfbuCizzWB3yTnqo32Y",
  "key25": "2yV4TNR7r5dt8vBPCuvMV2j2KqK5Kgz2xNVXAomvouaaALWcGWKnav93Hgks9pdDxWJ3zXcLD4z3uZ9uPiaGvkhQ",
  "key26": "4YGbDECydB1R9DGSyGWSGekk4jggorNMuaif5CS35P3wFtyuyp1hDs9wZuCCKshF6CuNtMj6CjN7B6UWD4enSvDG",
  "key27": "fmAAATBm3LELmp3Ntp1jygmZVsZQFzJeprhXh7NCV6Jr4CCmSSRasux8Nnqx7gKLxT3Tx25jW52ZbVBUe9syUYT",
  "key28": "sGyownsARaAvFZo4PUirFbY2nkdNeyDkovzAsf5AL9E4QCP2rDKx6CUaoJJAA3k3R48k1g1hqQAUWGcD667baDY",
  "key29": "4rg9TQUyX8rznpLRwZAXWJd9T4MVuRLvFwryjnAYGf4GxdLnzbaHL4N4CDZm1UNhZHwoJzsGbRP79JnQMaV5WnCX",
  "key30": "3rtT1sTTvuVdkvnTMNCxBwU1siMjW6FHuztjhhv3gPUF1r5qE2VRJBtdKZghJsdHDC27S64XqZEd9FiYBTz3YAcR",
  "key31": "4e7cfDCRKxvNTg3vfDXuUPL9T2o9yorWy9udBqDJd4ddiWtXqJ4aQ2dhfUi6revQq1snJqurGFeQ2Z3LH1TWzMq9",
  "key32": "4Lwib6A86fhwkJtEZe6CX5JyQxTH2BxjzdLiS8Njq5Thw1AyBKHgbhtJi1SZ1Dx85pXqUeyCzKpfY5wxUt2SoYW1",
  "key33": "58EuMskYtNJg7uq6Zd2N5odjSD9wSFcBZz9opGfCjfLd3QWcL8rKZxtN2AjaBeV5F82zBx7SQ3Zoyp4XFdUcqa7x",
  "key34": "5sMTZSFjdhnAX634V8NSge5wgcH6322C62qRmUfoJj2Uk1GjgKmXr4QH86awUVWAVjzRNTrbTHJkgGDcsbh8nCsm",
  "key35": "dzsMnNEQFaFSbGoHk7cR8T3A6QzYSFCbXbDohAmgHAm2ikLiFuExYC8zpvag7hhHdrKmj2C3PtTPD5aTTAjErn7",
  "key36": "YYTnPHW8n9f2PtTjVuVeSMReQpLezZRhwewEh5vCHhABxAFQfdHTM6fR6855Jk6TpCqMRNnN9RnuG33SjyE1fbb",
  "key37": "4D7FaxUDeysAMto1tEgrKgyZJG7wxBnMDzSjwFCKddD4rcTuqXapBYqKB5RhN8krLHcSFf6V6gXid6BswVRyk3Zh",
  "key38": "48zFHSrJvWSgqZ6saPqw9mSywHDgsd6d3Hz9dbV4Yhmh4rWzGUiGoBN5ZFqVDTTRPhF6TQYWU1p6cRz8xcTmZ5k8",
  "key39": "5PrcNbGA9HFKt8ctturq83iMb1Wd6WrQsbJcgABNq5EDPMkryasAZjZ3KiTJ7YE5gRgTUCU5R2m4zTSkrHXEB4op",
  "key40": "3p1WEcDkFuWsMK34nK1mwkKEW67cuKbv7mU3e21K9SFqzHFrvwi6aKGVPG5dAoF81YmgAr4Sy4Sz222Lm6RHTEbv"
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
