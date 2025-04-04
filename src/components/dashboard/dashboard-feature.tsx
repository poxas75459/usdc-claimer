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
    "2wSieDzp3nff6R3USQLFmgfDXZRtVmNGyGgXcX7P6NefCPaq7kCWhQCZqsyyT1BLagfCcA76h3aKtJmLZnt1d2bc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nGFwhym7pyTfpA3M3hzkB7oXdw8oNRuoQVVjRYkbK6CMBoDExrSgCtaSDntyQPtmcL2toZa8BqDQ4x1ZysGfxfp",
  "key1": "3tdAFmRUFUkDLF1DJ9hpYVzihy7Vo4EUt8RpnzPwE5hrwCja7N3Bn4tgiZMGpqGFLsVsV8Vw6HYoubYzRyGtgaok",
  "key2": "1r65uFtVg7DnyGrsMzpN8vwdCB16ZXwK5yFDF4b7LhFWV9rksMruqSLPkgwwR7qmsKDGEBL8SgQMMEGunwRDq7Z",
  "key3": "2dXpj5kmNvEPkLoEEwsLRQPpCzsaKnZYWaZrpnViX1fqKK2B6nERMnhAJgzrJPzfERR96Z1SFh7aQQkrJcVxrpha",
  "key4": "4nb2XWqKM4VbTm8gTfdjt8xE5viEE3SxQZzjpaxhntcm9JurYcLuaxymdUy2MbrQsLHUHUTWahuRLVUjaK2m7S99",
  "key5": "JRQPWiHgskGqvyBkYwQ9ZMxpoyboHMpsLrRTL4ia669ZLAadHvTRLYBERrKbwwiDx87S5nxQCZF9y3C4KohW59c",
  "key6": "2m16GxxYFjHS2UJdVQQPuri4w9hwM1hYPeTpkZQAGUXnQYZRcuUjgPwdoamZwm1ZoHstBHb9S89KJWvYoAgWuuvc",
  "key7": "36JyGUWEfbfZtdytdxrPUqDkpMvqxeBR8UWxkvHSLby8EajM9Q486AXDUNYJkKqEk2Fm9EJoinoEqHRHkhMFmj7n",
  "key8": "VzJW18KPa68XsGUEumcEXjowupgaAq6jq5KVWwVYnFPhUmXCGmpLydGHnLZwonTKF9YTrQmvVQsBeCJF9HHQaFV",
  "key9": "rtQQyf5bK2YcemLszWez9mdCGFgpCYHuUvMnPw3SfEHRhr5NcZMYPtHWSBwrmRRnHYwZBM51hrRBqKQGYVJubgM",
  "key10": "4HPzv2TG6McQ7DWtCLSfUEdtWkUjFxZA8XnSpVY4SJ5hq64Z5Hxv3HjERdgSDWSBQroPeicr4bRuKA7nJSgai5Pi",
  "key11": "2Xh2iRMnJi8JCGPfEEjCwvFD1pfbAP1Cne4udtGKfCHxyWEABATYaRve3ttVmBbunKk3kQvHrwfumJKn5h9C22xM",
  "key12": "BKfgYtGNdLSSpWkqkm3KBp47Hvh8cisS6hrCS7v9ez7Jn2REbZF7JYzmqfn7Qp865Vvpm7BWyAU2vURj7zumV8x",
  "key13": "44xqRmy5QEbv2aUWDDoaJNConVyPaspBaww7JZbBJrC8NTyzGGmLN18GeTgPzhtQVziZwkNSaxiaoAQRJgzPrbXe",
  "key14": "55MoRC86JkkVciF8qZ1Jg2TyKoK2MLXiC4d2afPW6jdXZ6emjVca3qyeKQYjcGpZXJ165ncdx1Jc2q7X9hZFJVBS",
  "key15": "2VbCp9kiJwpZRuPkx1dehiqdmqMiV8eigj12BNr16vSkYVDBgytLXh8AKAnzGRJVziCkCHdHCqDt24rrBv46kJPC",
  "key16": "2qoybaHBCRqMudd27ESF12EV7YCS9ZaiZBoyVmHKefVN9QjVCpZRTtme4TUezZzsdLxwwzgiLEgs1f6fZSs4Wovi",
  "key17": "4oZ22xt56HSxpJ637y1phZescuorYFANa4AXgEbbKbf19aSpnv7sMyW5rgfLtCXdLE4My2eeVkxHRcTHRSoqyPtc",
  "key18": "3Din9csXTuqQWmdh7NiiafS7L8reopiEymgYMoPwvPZxjTPTaGi1pqHnfNoZKJgqxQVn2mDr72aMqruUhB6vAtik",
  "key19": "4KEz8Y8Ww74rSoNfUdpx5eFwi8YVRxBUCvE7634b5uzenir8jRNufP8AJeiXbrbuXXz4AXJUQ7dr6DfFYwfC1YiB",
  "key20": "5CLWZjbdyjvCKQUtw8a9USrri81KukeRzQJ6iCdGbHPo35XX2pbp9hWuwvoph9wERbf7eTAy49mEYLbAHtNwgFGt",
  "key21": "2uNXLiBch5chrnJJmbKndbjj3dXps1Nx6EhhKhuoHPW3R4U2Q4MuGEQpn6qw1F2eNhB2BnkpPHics9rkAZLu9rpG",
  "key22": "jj1kxtebRL2SNj5shBmYAGzMadd1K4G5eiR18Cd2ggqPDqZ6uDFWsuERd1QsgjTUQ4D8KsBGamGGHdcuFkXGKsc",
  "key23": "T3nUFw9rz3YVEwuhrp9N2bfAy5e9He821qqhckiu5Exrzhor4DE63NXjd8koAiTqzNQMo9UrNPqYtzNuW7hMxXb",
  "key24": "5zmR6YN1sgHx9ngMGbCL2CV36Q8Ldec2LYZL4QNtnj7GW4pRyxfWcmanEsaFezqBP9jkje4CnwrWBTx8M7uYG1Jh",
  "key25": "3ZLyi8sB2UTWdtYfQXVtZ47zSTtacpbTQ4y7XBvBhDBQNrKXfdTE8TTXzgWwh9ZmntAcvS2AKU662oZqDE7kVor4",
  "key26": "3mG3TKXQeN2s3HsttgJugnHF5LN3KfACE7btpHZTkWXrNbbRk79zxSj3iA7mJcQ12xUEdX2mx4g9ew6raD8zUCVd",
  "key27": "3FqytpbNenUUxD2caywuMG3ascQmKASuTyb11RA817njwg37aHePEgQrPGESUksmJ8TGb4M5mHvTjs5uYgeU4jWg",
  "key28": "2pLBM7WWeTJwv2y7JbXxB3njurDuB3RUuvpgfK3QndNuSMx18YCQGiR54q1USkuQr8fYppVGJf7jDG2JpUgcBEqH",
  "key29": "1228LMkunTzezqmKewE4vinL77qVbhDfsMCdjccV91FZDQUjm9YFV3fQeWSQb9bZ9AUPzMrmvc36NbmX7FuEKVHT",
  "key30": "29G9z3THz2jxaDSaT3DJhRvAvtFkWCqfzr4L7daoot8Nr5ZFD1vT1VF9uA9GL5SL5TkGcnZ3VMFonkpgsJraJ22k",
  "key31": "2gRLjEfjSgmVW39q2MqmCrfhPdgtaxS94p1RB17aoWMSfqs4gcupxaLW64g2Nq6s7VTfRniu4USX197Sb1P9DT2K",
  "key32": "34xV1pxMqCCunZNnbqTojhVSbeQbVooZjqvTy3sCxb9HuUsoGg81HxwE92cLumNzJxXEqZgPLvgSnpruYdse1Sm9",
  "key33": "3hrdLDdukVRLMuY82JoiFg513hWhMeG1M5uX6ao9McVeUVXepFEpWFHKmtDyN4eGY4iSGUzL5kXyLDgLf4kFSZr7",
  "key34": "3KVBcYi9BjrUBvWF3Lp5oEhvWQVreiJ7Ej8cQQH1iUR5oCtjhTWBvWv6AHqC24o1A85SWxpsBppvCAAgZr69XxMf"
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
