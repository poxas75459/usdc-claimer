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
    "4gRV7ntpXcG1JU8RsrX4ykF5TZE27DRGNf5Vg3Ux7YGrvbooc777UnVT54FALYfy4LvHetn7ixTj4nAwKHuT5sm9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "626F4tXJXAph1qgRsabeJEbTtw5gYeg9Znxh9YLD1mJQ4mgE8SazcdBQiu3BfBy26SaRqBx4GYgUSMr1DdfBfU5e",
  "key1": "5H8aPAcKmzv851wYGz5RdNVvYw4VkKFtmCmNZootTf8y5cjDCDrrAjzLNUiYbLNK87RPDBfAzikGs4mjRno65HW2",
  "key2": "4r7c9mkoVFmEwtw9EVxgkqzPtVgnEWuxDeAbo2E5yvwXRB3wqNGpio9s9rAfkaa4uxrrFkrgmCYUt3YrEH4uTdmN",
  "key3": "3FauxhLWqR7qEW7FRmNCkpbaBjFVLFKe5466sn3YKHvdi5kXjm2oE6oU2bneFCe2SD1yM5i5r15VWc9WaDE25DEC",
  "key4": "4Z4CF8T1ZtNFLH5o5qkLagn8yF3fuePNHmbou3nx76wAhbz2zVcUfGAdY9D1v3sdhhM29Q4YTJT3cKHjWdL6mWnf",
  "key5": "4m4RPKwowe3uksYSBVezYSt9Xga6iS3BMR14W3VAtc4XXmmcFK64BQmtX1YqFfuiNb6oZ7hCwfGmGkwMdunBnGCP",
  "key6": "4TUR7TGfY4es7cMFeMWL3XkQBko9VEVTZ1LPFFX7LFsgNzEYHoPuByFy2wQwdFBEFbWyxiRojZ5HFkZVwMFzT5hG",
  "key7": "iXHYrNkLvqDuXN2j5fyLswkiWbB4UKxpkf2cfcMD8QybcQx4h8AENryCfbNCmQTdApjLrPExDcBU2JikhNLxwAu",
  "key8": "2BwQaaJbKC8tn2sqQwanz9W16cRYeCHJTwQBUDRi2noBHuJhYqFxajTcNvRiRhWFUfXozk5b21EP6GtitnHPqB7v",
  "key9": "34mLkvqrC4nLbQrg82md6h2WuWHnh46A7Mny3eKdeMTW6rLCFihXZuuyeFNHvQfNbCE33fh3c7DQLHimNxCtZTQG",
  "key10": "2HodazJqfaiJLmEzZRSD6EAYiNkegLB5iENRDeGBeKRGu19cATsr82fsFSuehoxiunEHLJNrokNZipLuv5y1CSuw",
  "key11": "2EM8uTSe8KGqzgktWGD7GxXSeMvni1PHGMctY9yggipP9CDfd1ps71BTZKw7phw3Vvv8W7t2GKn9bgSs8b3CJeL8",
  "key12": "3ccy6NiTCus4Ehq6gzPEQz2BmY6dc8ZzyehaNfRfvwgnhZtdZqCCdsN7oepREJ6S1Apr1YQ1QQ2QYaY4738vu4sP",
  "key13": "4w71v5nmFTTxzWRuJ56RrCokTbEEMfJtSE9WdATCrZ2VTqN2Wd6QXzzXYDSxktdob7Wz5LvVb3BnXWGnbQcUdc3p",
  "key14": "2wrdHwj7cyAZR91SvdGxaPC3xepNYrzq4thcCXvTBQnZE1N3JqpeDGgEbFqxAUjpvjn2PpCnkjUAu5R6yx1E4EX5",
  "key15": "5yDNs3xWK8pjT75PKEncUHcydypg39Ncy7vqu4Siob1jPrhsdmnWVV3k1WibR88V2yiQHVrV8aoJoKfs29YCfexc",
  "key16": "4ooXBtDoYCNh4WEQo6UQAtqtTQhtkSUGvrP9HyevWKvgPqoQk4SKCm1MuD18C5we618s27WedXmTzAzcs3nMeJbP",
  "key17": "5abxVaXzBm8msCTBBBaTxVDwBnxgnprxAS3VNaEMWSKHftBynv47wQadQRENFdvU7jNL34EH6MqQnkmRqG28BbRq",
  "key18": "4wV6RRzGhKvht3KUvjgmkZQLLnXhixFpPdQgjwA8TssaJgT2YzvKbuDFxPoAbEdwcfp3SDFuN86sHPpLHXF51Z5u",
  "key19": "3Nx4z7CUS5odNF4w2QiukQV3rsWrTp3utxnRARpqPR1E7j718VCA2zDhGkuzYzedcBPAM7zusK14n72ocziUcX8v",
  "key20": "3NkP3FBGc2SaitiBERWN1hEdxga4dNvau2AJ4eYjpeXSmSzbWvXRq1AUyefqiQaCo1jMbFQrCc74nk5ppGLVMMqJ",
  "key21": "3VbEGgV5b6TH3Vx68hHHh1fJCV27eKRF3y5C3R1ovQvdHh6Tbsew47CeEiM5D1ZbdUL4rzmHQbLHC7e8RT6V3A7T",
  "key22": "NAStMsfQKy5KZuCp84NJS2MAYtEPU2mG8mxshrkyTkiBX7geriSpEkdYoU6r9nYRkFeC9nA5QV1SEARXxHMLGpx",
  "key23": "4v8BCHhrPPNjK7W2ay8GV3zNHsh3wTTyxsSL83sSxpFQYqrETTXKGxYV4VH69boinuMmcxJhC6kFcf3hEPHB1c85",
  "key24": "5WrTRtdfDkxhMkVwZyqncZiqfZ7sAFX7HCZqYeL34HVXvm2A3Cpk1EWsDcoTU2LRAowwY26RWkaotzPDEyiSurAF",
  "key25": "3avu136sFGNV6LdaD8vcX42JEtYFX77q5qfqzuA4KKWGKjA3RKahCUhMgapaWqGJuLxPfLAaLr3a5bBkDSrNTFyH",
  "key26": "39q7yj8HEavhsgBt8ntaETLNqw6a2twQXKAXTdFKRRqZ8ttu9qffcqLN8WbiyZWkKHoPaQAomiKVXKthfNp3Zz99",
  "key27": "32WY62XqTKdnLeyijebRXr3sHC56yfRW3fuocQBfM2BH7Ji1sMKXQEaNy8q6of34hoEMjdbxdPdjZEYDzjUmQbeU",
  "key28": "Xzw5FPTceY7ZRfgLvMoCcJvmiyM8wQUC5gKemSkQ6n3VraoY7gkwPoRMjrVEv5cAEcLfR6qQwh22FGRwnQRzztf",
  "key29": "5wKnS48GMMEmAXkjSk7UzcTruYo9FUy8epmE9gDsq6HWN2SgjPHYXqfUscRRRXmRBY2tUMamwtXNad5NTHf3vwHe",
  "key30": "4rsmm8RWmhCnAzGaZCmHVbGyDo5o2nJCzPvTqfHnTYL42bdYNkhLoBVMbFAeNqSG7sQLotfEgimmKxTT73srM8qB",
  "key31": "2oUPewuC2g4K2Nusx78KR9mX21S9jxwotst3Bhju8Dn1p4zYX2t4VMRuLNpYTixBwY7BDdhxNn81XqiJpiyXQNGa",
  "key32": "33i4A8dL8kh4M5JLQwsKu9KVm1hCbMNpEpL39DcBNNZ8f9dpsUbaLzRYHqKeZo65aAJn8xMQtVEerK1T32RsdDTX",
  "key33": "4dthRCMCM8n9eqJFiE2n2K21rMVVK44zfcz7LLQdZ8o8AAWrawumHVw5VQGxUy4RNKaaZeSashLrvaTyLzTw8iZF",
  "key34": "2bMzgpQ7wFjH6XZzzra2rJjkJnbhJydExuopRUFzDYhtUcRxfCWogCVxgAVvWappRPDAkrJSJnD85HCtqwDszDM2",
  "key35": "4ojsrKbtQTdxxHmoQNkctddVFssP7sh4k5Ktny8KqXZjBmCkEjwFauRgZGNxZPw2QJYon1WrL2vTn3yf7GE9sMUJ",
  "key36": "296bJEAZxbp21YDExMMmKVg5vLGw3WZfS1jaaGcBUFD7uY6haURbRFSx3HowHRUPo3To8DCkDUF2wmmoNXDSwE3K",
  "key37": "2wWRkWUgLhtvKPNwjEYMzs7iGFiuKN9sBNq7yze63cw4t28hhatYHdefSgJNb85DkNibuGZoMkwxBLoLWseyYMhi",
  "key38": "2rb4mCTz7VUVjZjAvpBgtrc6UhtzDECBWa6jBBPVtR8hDQDgj4Vp4uuD2fAh4gPEHJx4skt1JAb5jdCAg2D5YsMc",
  "key39": "48BN3ea8xxCq4tib96gThHhj6W4S9YTieRaYCF4bxy31boVx2pikSmUVcX1mmqP8Xw2DUSB48fcX8iw4rZMdRGnZ",
  "key40": "33QfgeKTqH8212KGeuagFhwuuoYN5Qx66P6wE1fYxn1YWrYiNm9N6r6WDndujp578f3jXPLxLFRgvzXH1yQskzgC",
  "key41": "2gurgu9X9WXJQgteJChkR4LAH2g9Ze5XjvvartnjZxvLVqC86y8GgL6mXWmsXBFmJidQK5Lrv8pCbyYbrmTZq4n8",
  "key42": "5Bo1itGGEBwB4RbjB825qL3dzB6byYnyBpeVWGZbsCBiB2fnDpj2y71SjxgKjJHLUi5zk9BBivzQTrKgBiHmbqCt",
  "key43": "4P1mZZpcC1zccXJaijCkL6pHq1X3hiHU8tJAXqbc9wwZNXpsBw9EimUkAWeC5nMdG9KVyJtuCe2gcZADY23FDcKC",
  "key44": "4NgMfa79SpdACNz9XZ8eABBzgH4xn6srHPgMNtyyHFqox4ERdFKhTycT7oCVjoZMf1GbwBjYwv1vdTPZ7C1K45Dr",
  "key45": "41mDdjsaDAZA2warN7a1eUqzDYomMPXAfjjBj2cEaRYTJNRKEJc2aT9WLZmNBghhBX3RSY41CbHHcUAJN9obxcYv",
  "key46": "2esd41FoemqsiJxBdvc8RYbc6yLK9GvAxZDkdbF9cjKqiKCjeQcedzeuUQRN5LmyK5pnWoUsWLfX9L2RoCCJbyVN",
  "key47": "QLVParSUZ6ku1kMPNGqhfT31Xig4xXU5N8BDGoKHBEYnuTkLvwNSEpmT2iUPcNfmNyxjNoKWQWmEGi9T53DrSWH"
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
