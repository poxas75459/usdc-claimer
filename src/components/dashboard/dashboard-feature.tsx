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
    "G8q8dWLdzzDGWbWWcR1noW41mKBYV5knC1ob83WboUXe7V3m2RUwdKHyaiNcMwAmn8zDY9sg4eoSxzG9gJAr6Xk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23wDAqmnBy2EPQ5JXFn7KH6rqAVfMsJ6TGcobFmpvX3ghPQ1PNt1JDtke6sfNNejRknXAHQnZQCn99NAJKamD8AS",
  "key1": "2rtpt1vUx1cKmdKndPaeyr34AqhTCUGGAcPyQ6AqVCB4PvFtqFsvwCzgp8fiWfMCYr5vZoULiNaFeSbF3BTejD89",
  "key2": "25u18EdC2MGw4RE4RmARnpvDTX8sftevVNaonGYpNuBYG3mCAdp39eDH9YAmBCu4yuJTWxUxxiCqiQuV3yzNErDy",
  "key3": "2eaR3AgWwA2s95DRHnzZecA7kVNUsbkTXafJ5zb1Ci3sHewCpX4WYuzVUfzmavXZsuuPFn1geRx1mo5XjeAeAfA5",
  "key4": "3o91FbVVC7gt44xBLkpVV44MWX8SVuowZackQvFZyQw9uHrJN73wPcYC3xGMVp5FWu1LjsThrbMHWVqwwhfeng3h",
  "key5": "66e2cGCkdGdkdZjroooLdsgHePHwN2HnCmV4orza21K2qicYpJpkFZZs92byKGdmiEzcTzJWkLw9zreBiyDmufRG",
  "key6": "4S8CYAaH8A1QwYEQLQ8CR8sYFn8vDfSxDYyKCf3YMBWq9rbj1sNbAA8HZ7EpQdm176XWarBXtkbYq4GBLgt9JjFQ",
  "key7": "3V4sPF78CeZAqfcwY4EqPaG7q7B1tj35JnpB7jFxKm21R5vNMKAbgC3djJ29Ua8i7nzbqh39Cq6wpk2CyaKiVpum",
  "key8": "jqgiGWEW8QQBzU7Vm18cg8T53Zn4pmK9bt6Yq5A6xwbzt6xQt826k7LmvjyPsrDJNzTejUxPokC8SYJqM6STEnW",
  "key9": "3Eop89YHHzgF1JF1dwPbCrNhvzSbfNWzvtKpUo7JDvh9uwAPsY83f9iRbojysHEoQJcm4XzoUR6kquxGsE7sx7Dy",
  "key10": "EyUf6coKNDALDEV3oU93q4Hu9SKSPhksBaa7vAzRKCAKphfPm68KCAs4jRZfAoJnT82yMXjmwU7DQF8dithFk6K",
  "key11": "41qXAeeRaFRPLEpbQWHdYp36horPP7rVPLRNb2My4dhVQymvikJeYbh1PkqdVRkTA273j5CydMmzSVvskhMjQpxe",
  "key12": "4u2Zgh4JZ8TYDFqHFD93EbRqPhkFLfip2Nt478jAB8Xp2G66cNQQ2XyMLFb7oYtzsLt3D8qo65S12TmgmMWXVhrx",
  "key13": "3g8BDBRaiK6isQkTVcqoVBd3YEV8zqFPyAuJAvhxzXQTqWiRufcTTqpVMV5akmxqp2Br8HLX5TyphhKj5YTAS7Cg",
  "key14": "qruMABCC9r3eWG4mgvPVzrhp61HSMc6pEyoEhmckTd5rA2YqWYu5CPZaMx62ebiYQDkeBxnwTB41TrrvPGcqLR3",
  "key15": "5KpFdtQ3RYVGAZFwyYAsLaYLQkdkN1UxM2onadkEPoLD3ocg3DvgeAXH9cgcLdDAvpydEEwS8NAs2vPcEuZSkaXj",
  "key16": "3huTs6vKmjb8f15nXCDsS827ZjYCtEHA9Ni32WS1CmFCXbwiCdMofvLrfFK6hwSySJt1K9qnPWq673AQ1EGW91iQ",
  "key17": "5ptJLGZUYy7xNn51gPqCJFTghMeJaW7SMEp61pn6CfaRXG6J9PRWm48ZpLyScbifv1oHdoJDAPDrQqGKSr8msviF",
  "key18": "txtWRCS4RPPBJVLbzsfYLXq8fVEZpSRjo3LvpbLDhSXShZe8ENzH4BAnqZhrAvt1EckcB41TJd3cy48VsZuzTcm",
  "key19": "2ZSQNnbGo4Wmcy46KWbJqzkjxrbtkfucFi5yoJmYLjjTw2juqMgqKQqzkbSSFZKQ7dm8fdYADPYUT34S3tfZP4sd",
  "key20": "4rvxGxQYZC21GQpwxfxH1obEmWT5jUhinv85LK3SzGrczgbLtKwVQP2iffdmPZSMZmDGmVVrx2cR8udjwjgobRSF",
  "key21": "5K7oyW8sXRdMPzUGfZuj7TVojZDyea1p5wJyuViDHCfE9U6Fa7rBaKLHFqQgAiukhycYUqejRM9nNuF7g4uwK7Nx",
  "key22": "4p4N3KnDdqktjy2Pxs8UM3MU7qUcC8owQRxYH9PzNfyQ3RTLKFKAw2nAuMQEc1tTQfPa5Y1zLLjDrSj6V1LvebmX",
  "key23": "3BYPz2MKgAygkEpvz9nGKrbD9cFFVtBAFdZG2353Y68ThSHmb9E1eiGi9YCprW6V6sQ5yvgrxdcvCvGhEpK2sMKN",
  "key24": "2oNmgmVVnjsxL13C5UGi5zTdXiUG1BtFotttstoT27Dmy2e9fZpr2BcN1iPS1f4hPJHH679yV4q1gYgqpUf8XyP6",
  "key25": "4V1HWUNg4nh5qmV58FKjLtXBL65oRoAG1qXFUuL4Q1NRTNtheoD9gpkdCGV5HGDqxnpJNeb8DGBW3Q6EkVvSLyw7",
  "key26": "4bFMDkEPMGHaWTcVBuA9vzW2ihVUzyPN5Ass8rFjFjJHeQXYHYcHgTJpcuwuKRUouJXSak8DsHUDQv6TdasoUTe9",
  "key27": "3BTsEQ2CvdSyJoAs1j5ik4LY3WgUsr2YDkNVmzyY742JFJxwazA8rmvm7jfTYZyTDobLJggNJNrLHbwPyqgvjqUD",
  "key28": "2A8U2rGJiyXXJWSxYmrc3cQhJoX9myPWM1iEr8ZoxUBVuZwqRumYiDiE7W6wtpxxZReXqnRERx7ZC6kcF3N8t3LJ",
  "key29": "4Znx5hDwaDWDhFoZqDfSgpoAoZWNZGC34PuBYbVGZh9w9oRiKrFw8pKu1GZcCKuz39aDj4hJ8un1BUjGcXkFCuYp",
  "key30": "4hXSVsVJqTwaFQdykuTM5fG72fAbet4H9m8oB8vFMwHDbxqEbVwU8V9FSkJ2pAHCuALyQ7HaKSyD1oZoD9iPdviQ",
  "key31": "3rohMXw6ge6rfdxoXgdQanW2Pvkho6ENLH38muUyv4e816R8SUZRcQtsYpWUchKSWx4cwGMRWbDoraaJLDJzubiP",
  "key32": "3c2JBKTHhgKUKjhsGDmLv7qeFMcRFNJXgGqmareAu7Bsia2b7EZkybw7rY4AsnrZQ3covvBSDFFkq85nEf73Umd8",
  "key33": "4iZ3DH4VxihaoDPCoMY5j1eF9JrrTDd1bne3n24ng4Sx4Rw2h4CY5K8w56aZKtBDU8DyjyUiypg8hvPp3Xkb8zzj",
  "key34": "ytHTQSs5p1o3GfHd2FnzcTpS8Sh7F3UZp1oNDZroMsatpj5pTT6PB2b4ge1rXhJbdVv2JAaftHvFTfQQ31cVe83",
  "key35": "BysxUMkQdS8adiGznY6BF5Xx3QN7SVYgwQM2DPSnCPLoCkF8kGfzf1UvQYW3VVo4AJ4gfXNFxhNg3wtuuuz2XWS",
  "key36": "3NEZxJXc9hc8AEmWsdUjJSGyMr2dAoAJ54J3xR5RKVCrTygMgzASS6EVbJRTT16wuKZV4LeMCBBfRSRtEif4oLCC",
  "key37": "4xA3addH2gxzzSuV1bFe1vH1gZChDu5gxKru9zDu28W1Rvogx6ru2RrezBps37E5Pbm8KJNWJ8TQSbRM6aLfeCkf",
  "key38": "3YuSnKcYLGpa6ieRVc1Z7WFxZZ6Xd7LPh4q385zCkAjAMVVnzRCkoxRS4eVpoAwQhRaf2Dpjm44QAcAVAar8MgL5",
  "key39": "or8xGJoeUUs3fYkhR81aVidKkcV7ozL5Rgwv22TRfriyeGW5beGEfyMAXpmzzhkdHiUu7VDzAQ5mycUqNgNEjtK",
  "key40": "43FerDHihafSDLxmbDxpz4qWJ8Dn6bJJcQyZoSkCQ8VsENbNyB8fuq7RRG6v4Ct5AgREYRW8sz8BXxH91JQ1RDLW",
  "key41": "5K9XSfSLifXNLBxdnhEhGZgo3KeAZSnnZvQ6v5AcmnL8A4Ydgo23Aor6uLkBpSKAKY5E2hqih2W7Wfvg8voob8zf",
  "key42": "2aQnLuAmFPGri7fXqn79yGGNCYfXg4hjQDPUNux2cX1LAGukeYgPH48xj6szybGFYc1c5rmnR2VvgQGxVWHZEj5a",
  "key43": "3WDXNExPXPRpuJYRUAcfPTeeJL2zydhczEji9tMUCKdnAaREfgBXdPAQ1faqjdPbxvwaXWCWmQKmXFr1p2NXKNVr",
  "key44": "4NyL43wWJG2JC2WEoZJXSe5ddY1gYsBE5mhQNMT7m5yNBfCa4TcEwiMATMN9PJTNTbbDyS3eH8tVMXy7fmzWkEbv"
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
