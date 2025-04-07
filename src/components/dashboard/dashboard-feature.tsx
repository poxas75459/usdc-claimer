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
    "yuGLcXSujtViBVZMqsteg3NacFg453rbYMLHzPy7Eq5LZrFHRZaBtfLGhQg8HsXxjaWDB86CWMmHa6xtjv3wh1V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HEiXGa3KBpYPsHoWLDcR72txYFpvsmiJMHGyYaJAb75NjMjsobsVHHb4bdeKEvQPuNruCJDGXBbQ3QFDb7fPH38",
  "key1": "65RnJDvVKybcmNweiuBehpgyojRW3MQJ3x3M8yVvR5dr3y2rV7nycYGtZotiQfW6tVcycw22qnho31opB6P34Zxb",
  "key2": "22Er5AKHRUP7nkRcBEWxQWncEahVcZU3bAPrH4ynZucbaTviRgFLpUP7R28b9dVuUi7g7ccZcrqmXZZu6y1p1CYb",
  "key3": "4U8HSu9GSGd5Z6efm1MYX2YgKopLk7tWxkRWEW9ePwtzitCpuDWwJVU6HX28txRVW68j4f3XuUmteXYTYqPoY7h7",
  "key4": "48a6SmkM2fJ7B68jh345cQHbxShaCdyHxrEyt9E4L7PSTC1FEB1Z2SH9MgHC4gA4GugCTHK5Cid53d464Kc9Gfp8",
  "key5": "3XDYuPRBi4LvDEhtgL1s7V6X88zAyL97VKRvhucLLjH4tJVZTSEXs7qdjJKET286mpWE2Ap7MhagQdxdtwj2VeWk",
  "key6": "2YX4i6NyKxBLZ1qTh1W7DUwPpuYgjar5SFW6GQPxZdVSGdQQdmbvKH8duT8a2hD9YfmvkZMzjZyn8s1mYS6cDEL8",
  "key7": "2xsHusGbXGZhrr6ASrP8u4nh9XQmhLBCGGUQXnGyUQEGtBRqCg5LxCebzeFzDHSoc6Pq7ZY8ELSJmQPTS6qkei9M",
  "key8": "37FGSEeTrK1WZbaLLHxExdmdZqQmy2Vdba6J9Tqpp5fp8X2Yq3R1tr22pRzYf8YEz6WCfeFjs5NyEudMmT36hzko",
  "key9": "5o4Zx1pnmNM7FP853DjCEXB4dFHGKWeaxXcqcvy97FpCtqkAADG8zuGT1kxWykgMBSg6KJmg6orxTFNPFhLzFVi9",
  "key10": "GxgoF1i1pPFA9WMSfnsdtkYETBgYGKrkYvb5kvV5AVzicS33mhTJkXVtdxFkyJgruN68kHbTG86VrKqb2MUhZKs",
  "key11": "3mxnZ4S9csTWzoqjddcT3W6cRnfNjMMS3U7gyBpdqoVqGz91GdadedPqhbVzPfX4KJtHaDXeWx91eU3N7KmmcwXf",
  "key12": "nFegzX5N7g81ew8MaSXkhCsbMVwRYFdA53aA1d22QejibzG327M3e8Erh4nq97AYmMVN5wqqV5AmMHRrWi7Esub",
  "key13": "33csjNdS3g4FG1WpHWqmLDDApJocRyTfchC4yGebs8QvYZxjygJXPG3AdeeEY6BLJ7gjvES43XxLXFQT3v3usB8H",
  "key14": "34EXVhUC6TTC1UBk3d7mdwEMPeoKkUmTffpPokVDuTqXPM5PJtRtcUiUN8d85NhHQSg76N8KAgRukx7EjEGseJv3",
  "key15": "3uzFh2eSrjDZSZV3E8kA9jx3aVxruJ9f9kP6aCFJscyeWVGwGznhizPboMoNkJLU2vqMhMwbeCmHvu8eLT2hR1fx",
  "key16": "5HhkCBGbGztUZVq2kpjQ3SGruGzctfTVRcpw4TtRkqj8FPd49ggaR89dxiEWhM7KLhJRsJ6aNuRxTcMhgUfrxcLf",
  "key17": "3vRBz3KxXV6hYeHGCtjqnTcNSE94ip8DaAe4tvJ7NEYhrn5gLrH98L7RtUYs8qsHMzrFANKDs6foGTmQoekeiuqS",
  "key18": "ziTGp8wBpfnhmDVRYHfKsdmCusnB4Y67FxBZjDQVosu43Wjro2UNhsv4UhHvMzzFGdiyDZHjixfdd3mrKYWdqp9",
  "key19": "4kUHKDQBKBCauJXKa2ehM8pnWM8dJ8KFFqvYNEdyPgacN4PzfBM4Cm1buGhc3oVctbhaRAWeegdyoNsvJnLqKJCg",
  "key20": "rwsieKGDbEUdWCUiYzRtpVX15J2tL4VsqJh88tsbMc1JVAzkeeFXkkAosZY9bkiafduzbiCwYvB5D6Cwhp58MH3",
  "key21": "5uPWFTiYLBJDVs3woqHdwwoFCDsePTYWz7KeFi4WVXhL2MpyVBZ3ibRPb98vA11VZxY4orrY9uNCKuhu357sfyTa",
  "key22": "3cn6EP7To17mEKsyPxcZmi6GdXDJDnF5AUyosHA14uxJmJbhLMSGkBM9MmXLMRCd8F746PppXbtsYkcTZitTscyV",
  "key23": "5KZhniAR3zV3MPZvifYtRaFMkT4NXgtG6meV2UwWbHtGiYBZMrxdXiv4vg4SZ6DbWfTGzTnzXM1Ve7T1CtHGCsWH",
  "key24": "5gQE4zD7ESJC66wGn6cBhxgSa9Q4QTrXvChPYDC8yuUcbjWDpakgq9UhktmAAPYs3EtNZTG65YybSsgzJhAvukGN",
  "key25": "54jYVBcSBhsL8GuGpDT5o8gtChvPsUuevLJSkrkx95xMRXUaV5417nuYYrYX2VRp5roPFY7UbkcPCUcZkqZPSMDm",
  "key26": "4eTnLpqcxCeHDwNUxiQa53aVTwbWV1TaJxKDeteQwXcb7T3Y2a7JnVbfR18PbTAMYXGMNYQFus8i2q6uFDDv9Kvm"
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
