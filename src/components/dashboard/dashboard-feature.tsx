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
    "4ENx2iUYFJoRXe1T8nmzR9ir1oVgCnEKSgBgjm1ZuZ4XpFPEv8XkFYwBJEp5FNwsyQNRe3KXor42sCSzXitWKERG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eB9spJBWG49YX3mi43KkbBq7sbd9miR9ZrNBE2v5McbE82ug4QyiFKWDjZBtXdr4bQKN1TZS29fcEb3ydWA5NGt",
  "key1": "4m2UWpcApaF7xUSdFxNkYKHsZNbRZiCbnv1Xk7NoS9fNDkAUciiWtW1G3GoKPinzEpvRhMxJCyckMqhRorLyrLPK",
  "key2": "5Zdzx4KE1MpV61KaBXGtDuk17ASXQoYnBS5NFYq2NmxGVunfU7byGxJwuALpqrM6sg9NTheQ39WF36fDBZTdzrA7",
  "key3": "5wZrMxDoK2yaJpQREABwQ4M4rtj53wdsrpc4jWkzV33mSMCLgUVQCciNf3uxmK2d8sQ3rpAWBEcKRfwu7tuFao8K",
  "key4": "4Rn2QKe1Pu7NhgvvKW5xAVxdz1Kz7q9iAA4hEt4Xoa6f5DKpMutJAtHWRTEfzdEWaujkHhriRAKAw6gNqr24onUM",
  "key5": "65eLwZ9yD4jD3MTf1kTDktWbBH5fyvwmk5JaMHwzPRXhRWYA7HuYzQr5kk3GZyo2aygh2Hsck66DzYMoBbnMi44z",
  "key6": "5SHmYGv6jvQfQq9APwf2qNy17SUrtZRdRYrr4F3MAFNPb4XUpBrexow7bUMcd6kfYDigmKLFsjKi15TpUKrWSema",
  "key7": "3hMC3LtGYjyptyU7su1FrtEFyRX7PFj276xFvR3AYz5UMsyYESWJKeYK7DxTi42SXkeqNmRkyfccZqZ4RWxnvgwB",
  "key8": "VDTkasERuToe1J5yiLYbKmqAyFY6rdQykC1w2Tdo4kfu2vpLvE1Mk37Et8j8NbGYQD4Gs22Aeur9jdGkDQFpSU5",
  "key9": "SPhS4vYvEaTiRFXLXMW2zhVDPdzs6k4pbFLUdaN3kHtLZkGRYesH5WtNg47cX6VWPiC1Vqk5wGS9qVtg459Zh38",
  "key10": "5XyjR1JZWtcuSS1K6eHczayRFKfecDk3E4Dx7NoNt4rjjoKMtchAPaBSBnocVAzingxAWNeyHXnBUTL72RBognfH",
  "key11": "3HVh5zS38VA5sHaGTGjzd6DDXiNaeqcwueLQR9ahr8ZUKiZATWyZyjhC64pEXMWCfJhuUnjB5fNP2azzPwRdmEsq",
  "key12": "iv8imcvokMEHLWrZFc16uQY2Zqe2xyT74CEYqTiUQiZhu9JfjQfGe6R7mDjN8J3KnRTf3y2EsSY3NraEB6cCYnh",
  "key13": "jnpFXJxzU87vMHzVwQJrVFzAVFAjnjdpfpJstVcWouL1dUkEtSfcUzeK88bpJdr2zEuPh2WNfp4jsS5FPTfHpgj",
  "key14": "5kFr54rfkSvQW9WLw86aVTpbjvvKu3zyjxAds83HEaJRU6ooT13dYCU9CtYr5mHmfGsUKih7iASR8e5gyuFcPA1B",
  "key15": "VQu4HdWk9VcJcoDPBNYqQcb9mLQkckXFPU87AZukSCtoZ1mBWsFFAs3VRbJgVigVw9GfoUQzqJJAGKaNUpMaT28",
  "key16": "5uTV6VxjK9dckV4zLHcGvrd37bLALm2vaBUoHV1FitkJH6Fqbf2hHJrVzgKrifYBJwrQw1Qdy1b7y4ouoHCmRgBa",
  "key17": "4E4PMRxdHMrGmcpPwuedjHtYWqn68htLKgdfF9QLeuEnVgKsS1sMr67F9a4zv1ZtAx5iQj6UKNwcDVq6g2aJDhnb",
  "key18": "4byARC45JsvkfYqmsajKE39bwZRo3JmaXgqUudCrf2wiQV4shiKMkq2CFVeFaF5XT8vhLcMqVcPTVg1d8TjViabf",
  "key19": "4hsLGneiDT9YehiNcx9EHhTkoj7KoEBJ3LQB9we2SpSeQWknDpXZ9VaERWe1fuuEHWjZh2UxG24jpg2bL9JzXLDA",
  "key20": "4HVfMHs62b1tMZDSCAXy5eCMgUpxTsqeHHHgdTRUGnWZ4w1z1KxjHJSLZVR5BwtKjSd5szT61KoyVAzheS3VGKpc",
  "key21": "7vmxSXPpv9yizwJFuND6tfsYHWwjazeV4dTJ118njBa9TrxYQrVPxrSopu6W1u3ySMptn8fNVtLNcbMgsfvYzwd",
  "key22": "5mUp62CdJbqkixTjM69iXvYhYWv1M7Kn9gn7QMy99f1fwpzK4MRGfcwZNCaY7ZzB9uG2to9P74mKBRNk2hW4AEhv",
  "key23": "57jXTLA7xZLPKcNf5TAE5aXgYZNHfy6zEMcBway292nWZNLdTspHZBT7T4tNf42KUN6ZSU1i1tHQ2ALBbiRpYssB",
  "key24": "93FTzenwPSepS6bYj26sFZKGDBZysPDdyAVLGTosBZeUtAM3n1M21dFKgGse9wTdtxM1D2HqPdtqc8QtSiv8WDa",
  "key25": "45H5maNi3GE1eeeq62Gmpv8gUiZiaYBgFakYv56BDxjSEHQFMAjFhRUbXPts7fdAc54zQ274c2EiWEX8SgGPU6bB",
  "key26": "yV5y72i6VQHFW7RnH181jvsgCQ5h9W3uLJkXccLk4EisTazth6BbqUbebbfamVnS4hwQ7tYJpP2PFqw5u4iX3SA",
  "key27": "5tNWcJJJb2txaeZqL77SUiwwdMqYbT1hkNeUS2aFYN193gcUCre4EhdhG65wLBaMwYrDTQxnwWctxSr4MCuHaD5j",
  "key28": "2wWgdTgvhx4dAnE4Pj7EuzekVKQJiM2M6RaVdUj5cP4egiw17JeEhxgCGKoAH955VT3dQTEbgUWss9sJmJiaADqp",
  "key29": "41DYjnWPH4TneVRyQ3aSj1afEWjGoVf698HGw2LEe5Tq94XNaDCwYc2Wu7EJA3EQCq3STReWjnxx2h5XxhChZrAj",
  "key30": "RQ9YEQFjFNoyNMWm1ac9CarsdMq2dVsToaZLCmSz9pWMaxXsPfPiaVk4ERne5CpQQudX2R3dNLVUCQDQ2FyAcWd",
  "key31": "4QHXW2vqULSSyCCKMMUVT5AX3WpDUPjh5Uq2JipqSG429xAVg4cnAzjWipGUjtyx55PbVEJZcUpLVLHrQ9gAFP4d",
  "key32": "5gcBDT2g1ffN67yewFnKsb1XADHiPGvk89ftbDSeT3516yZ5EEshLu9RmqCX2nbcauSWZxXyMNjnAm1qKQSk3o1A",
  "key33": "467jNJPWTbyyJCKWEFUJytiot8MjFo1Znt5rNi9qbu7tqwAJXjpVnBryYCCNeatA4F1DZRiSMcX8sS7U1wqF27JL",
  "key34": "42GviWuV6HXWZomdL2KH4FrS6FNnbYWgNehztNaKJu2MJQbYtpJEmKQStrdNQjU26vZGxv4HKgMzwJu9N45MPLHJ",
  "key35": "SFMjh65YsbthbnmAEPxML1mt793L4RTosyWNUZa1NexUvyXH8cJkba8NxkFe88VewJYYhUQgPLGRYyMdfSC7WJD",
  "key36": "5D83iLFhhL3r43Q54PjBLkxZVwqrxYyhPHjg7HezehHXFjnPW1kz3BDUdxr4g1FEH5K8Kd5UtnwycoZY45JoKTVo",
  "key37": "j6jbq94cDFneEhkf5Dc8dBJau2QFjgVaqSW86C1Vm5WZYk8HvdEm9cbFfpuzNoxrPgSfVkrtkfhXRus1SVggMMo",
  "key38": "63JrteM5NMa8gp3EGvTx5QP8Aze8obADouP7n6MFMaLuUbzQzfHnXs8htkPPpDpBdPQje9cWdASjnU9okQ7mYF7n",
  "key39": "5nGSHUZ8ReyRLZ7m4xE4Vn2T9Xb9ncXVy14grW6AtswRZ8oBcKUJfa2PNgaTjuYbTL7UVmfqHoyini6DuLneMiVV",
  "key40": "4DxE4TpHyidRsB9LybXV2nWwxUHTq6fqmeXSLEh6Qyyjv8ZQuKha7KFpQ9kVmCbq7JjkzZPfTNy49ibXmd5JFqVP",
  "key41": "2pzMx7yZCAZjCehHFMNwcSZTEEyvm9RFdijYveWjBFS6zjSMV4ygW9nmmXfYx81hyjhCKW1fzVjYEoevpT8sffZV",
  "key42": "3uBzrUEpNTXaMwt51WT2BazfX58STzSByzHMwTyNHdDJmH3mafg4DdvTQ5aDu6JBitaW5ZWhxB9BMgkEXY2nmFpY",
  "key43": "2G6PpQ2EAAyB7nN4Cb6t9ZcDE1UDtegPtXYMbhqjXSSrTVjDQLgDFsm6W1vYWosDfLwiuoEKrVDXgmMo5fxstfop",
  "key44": "65QK2MKChppBggWiLRTTQM1fvtBaWKYHckP1oXeArccuvBvU6cQUmahSwcvGBkV56siAAKYktqEvzBBQ51dNAY8a",
  "key45": "3qmD8D71mLKTqUvq9YPDPLonMrQSBVQZa36avrkZV1zrQ33azUyp9UsJkpKCQAgyHWCPBmfhdR1GBXzPyy5WkJGM",
  "key46": "3FvEwpWTTnronVpyCXZzZWD6dqagrJ1Z8gdxrsczVKP8UmLT5UNBppNgub8NMT7nM4gifMRu5s4MsSy5wHCP4Cu5"
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
