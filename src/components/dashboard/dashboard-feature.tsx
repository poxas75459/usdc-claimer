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
    "67AfLENYCa8SgJofJYsr4XugXur4ESSP8A7a61ztrSofu3iqqJBdGnvE6fwf4BSZ96CuVx2eeMX3smuJGt47jPuG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34SzUzR8RSusgykFEA4TPrQbhyrCQ7hvtVzpqQKCNb5EB5MZ2erYASmoEdh2sqdZ3LYBBnCkSxHpC7C4XphwRaTh",
  "key1": "3C42cRZXbuXf12BP63JsRTRmEcvXhGpfqEEJyggf3grDJo3dmErEsks8VDWKrj7o4aawHKPAbhGmxRQBKCebn2Fa",
  "key2": "2G2zZmMgddNjoi3VQXRttg1otcF8kWRV3cadiNpe6JQohD97xi7JtMTNJfYuTbAsnnhfNR5JGssztYgF1j57DVHA",
  "key3": "3kiwHyHw18hU2n8i8q2FfA5XzWBank4MKx85Q7Yqfp4gjPzhqMry2rMHRU7epRy8X38SHHqa2sVbvJ7hCpnJDjXd",
  "key4": "4vc9yM5us5UB25NJMx557PmossexJrQEySPRwKjLwTzMwtH6X3VkbtUbdi1MKDjZ6ZcyExTj3Pyjxev7wJRdz3wB",
  "key5": "3LXQZa4JCgVZKhd2UCnVQER4YLnjhkmmRswdCyqEuYX31W3mZgFV6LaXvNPptARLAXicWczeZMzMLZ31RPqpWhX6",
  "key6": "KEoaGnZRHmJuZcFYJkXobTJuDZHsZQG38YPHizYESXG4c34kZyiDYoydLT2bxj5PvXRGhe82sbJ4qGscmiW9tha",
  "key7": "Xppoz9So6z7dwdr8vypLYkhFF4jdCTHuqwfU5PE3XYd9wymUPJgjkevBEE2WAkJoxtT78PAqzXjeNy8NiQ6YsBV",
  "key8": "HogSdY6xkXDgKLNAps1yiUgT4btv4WT7eWHiGAEnaTgz3gYD9Sj6kBcQ1jgMWbVYgiQXcGD3SE7ks8K84suV3w8",
  "key9": "5TV4PDeUWbEoKaNZ2GpwyMJPfpCkrPEpfrBjvt3rUT5nGmKDWLg4QHvgz7wBX7CE4nk3cYRtCfZGx7dHs5khXpoJ",
  "key10": "323ipwhMcJAR6oFTqRCbWKz1XaMbUGRPaUrtYKPGW6pAAnzfVLBffTddzxjjYzNH2iFRXseTK99NDRyrSfmr33A8",
  "key11": "3WRUvrEPYEHdDFE6AWUvouztv8sFUfpmxMt4BdxPMEbMyFJLmSUZwaUbGj7F8xYcCAtqw9FRJszWSir2ExUHxs3j",
  "key12": "47seYd8aypsQ3W4ZfBahdN3XfMwcoSAJnDtoW8t4WZPLtv94VrmertQaqZuenLTkq5okwfhN5nnP5pG2tY1mavtG",
  "key13": "3zSBseHtDa4fzJdSMRxXKXDzGBQB2Ptfwg3bMzrpZ24K8stDE9cnvmViXohsJaKJC7Di4t2NU7etccmHa5z5s25K",
  "key14": "39u84GDZAi7BX6CwoG7Wi7yYjCVdnDLytYKuEtTqvk66XmxH27rHiPhKkuYicAFKu3LvLwLYjEcjroeoH5zSF4MP",
  "key15": "4JGHeAZfg55jJAYuWWrugpyvitVB62FJoaCqafj7J9vidrZKLvSAmrk8n9PjiW5FBJsTmTTjKETKhCXdL7q9hLCB",
  "key16": "Fupsm8i1i1eHT8ZGuQ2aynnZgAeMCYBCrDtRo82YGf8TPF4q7wgey8ZztuYX5FgWHSQSBHvqUinA3zHH2qR9jo9",
  "key17": "hH5q7xrEAsMhDbWWJ9TGAn5myFmrHW2GmJ1piBxBrrJXSqoTcgZfnBGuUxo1KxJ13Si5kEuJg6uB8vcHQDmuug1",
  "key18": "27X5GhQoCSCNhWu2Yr4i4rKTgsZbNkWw4bhPUJnXAYBuVnocvZPYHHU4nXp4ePDpKDMRJaktzjXVd89vQEoXw8zY",
  "key19": "4K1BbR3LuXxCA7dc8S2fS9QQCwnsnG6CcBEoZ9M2czDfZmJdUpqENUEaXpVBctdt1acKXMF4arzG7phRDoV5srwX",
  "key20": "24BidZtQxi9mEBviujD3CPJwMnEjyoXDAGUJZTY4NdfFWJw3AX7DaXzLbaVrcCJWcWwzPLa9BbgUaeBV3KwRras3",
  "key21": "4mQ5HzXDUe57r5dVvQo7h5r5DFsH9q87eALaf6EdaDJ3At744i9nh7kaARiajycgiL1P95LDka5M1WsT4Sjf8zPo",
  "key22": "LtctRV1kWnEKCuAGXp3LGLZxsV33aDCg3XSv4Z3ATSACLNSXTagCHhcWtNYNtxXekhXnvjDvYXCJohrmrQcC8vC",
  "key23": "4EhEnWCHVZGoq2vvQSp4ZfWSx355nBEkMXiC8n7BZyc6ZHYuvDJyCSL2U7N9BoeAQXcPcn28n82oUKM6TKeGnJX6",
  "key24": "4ReBdoXgJ9Wmzbub1UnuP9BF9eugXHjdDSyyuwEPV87gs7zqayTLfxKyGCrHgRDCUiJ5n2ZM1Zma8TKRdpszskLH",
  "key25": "qY8Zvczsy2MwtpiMqexXZfpNv3AsodFW8smv9PtbeZvutrNKGTcYSaU9SMkSfFN7r6VKau4icXsKK62Vyt7qHVd",
  "key26": "dtqPJFNzhGy5wAvSQPdVJ5WYNhcvzPgbixHF6wsmyW5zwrAQjiW2bEoZzXxBTi1sxNLQLweB7BxBSBkaCiKTGAQ"
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
