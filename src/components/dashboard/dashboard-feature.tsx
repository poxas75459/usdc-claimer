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
    "5Uj5qPDi8EceWR1R7htUg9oBA5sXswxYKrsq21wPU8HUayKrgnKyJc9i6uf5gv8Qp3cVjksLf8nALRcRLcH6i2zK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wJXx3ucR8pnNcDZu38mJbdxLQjVntKkHygYMKnF8hanFkXAoSmWrEdxFTChS2f4ps28Zh5nzQEtCz1BWqvXkxX7",
  "key1": "2cWVy72NdPCUdX7FXvTgExiHwB5oRqnMELJEWcKpr9gY8SzxSXTLPVxkUSEJU7CAUTJoGmSFJqgxhYns2YK38Sba",
  "key2": "24U7qB64aZM6c3zrKywGQ4HohAvSxE5bXpCfnDTCGFR7NbqUbM7DJcgtb62NUYo1AYwBsRef1wEZxEta8qxWBHCc",
  "key3": "kAqJRgv9Zxm8ynQMQrg3vEnwWWBUfiqcseKDKBcazRfWt7779ZEHZhXZjoX28qLFGpyPeEi5jbwRCwvZBGxwZhc",
  "key4": "57vR6uMTWHfeqCHXJ815va68NkjdAtwcMFZUQ5xcDBsdvcNLhkQD366R1orfnwSMGQRyEMyw4kaDyyNsA8EE2Nyz",
  "key5": "2avGek2oQDZfqwej91LaLzv5TPXMEArLWoFvUgMt9MRqZg4pwqT2xvwUAzfJRSPUgCb7yYy6K6agueQ1iqtsZXTy",
  "key6": "3dtxi7ptocSLjEEqDPiocwyCVSkvit5sR8YDkrqVVyZwDXR4eahz859UQCFKbyhkHj7YSjq87CAxQhMR8nVB7cSP",
  "key7": "5mtN3pjjE3vinsAKjXiNCRh4kd9RBvTmKsJt2LpPyzfLkhqYosjUSZ1vmYqZ47jqNaX1orcAFWyVFLLoidbb4YkB",
  "key8": "3a2VPhpaZTxy8oGR2DnJcuDKKHBMkZ8GYcwMJ9TdsJpQ3GreoTUPqgC3xgcp8qkycX6XzDGiC2zf4A37PSgDYaaX",
  "key9": "QPCFyZLRogg99vtQkYxbSQHHZmSvE8CMuKL2R9NCveT1EtaiF9NzwGAP8wHN2QVffTcaBscugjia8v6Qi1PxEpv",
  "key10": "5FhaaBjpdJBfihdA4jCkNVrds5SfMBA6g5JbRKKFzhNzuCqgB29CguhQKrLSt2skscZfQRoKFAM7q9rQEkhMsRxS",
  "key11": "5xNmyVrayrMZgZPBkKEH9Rz4o2hufG8tFrsE9R3PmRhR183UZy8a3V1XS23gCsr76LRC9LU7FHmWXjzwE4KTGqNP",
  "key12": "wQe9jSbJYEd6jVu1RU29g1NoqeWYdbgq6HJ2deaTxVxQ92crkKrDfTcguL79vkpCcCC8kUZPew5ygXuTv4oSs9n",
  "key13": "4tBQby5ioVZwJJ8WuyBJiuZVvdUbEdPk7466z4Ey1FzgvpPqgQpJ8MtxSrjRsD7aoj6vMPtft3k2XanAyktBHTHu",
  "key14": "4AzeSUNYn1bWmkzK6AZsjDg4L9UnNxJwrLo1QvAf3mCmWhG52Jj7rum4i98ZSaS71aPmG8XYzE1R5Nb8qhW5Qm2B",
  "key15": "29CzyNXrYWhDZgK58hu9yPWBDs6rnWjGcsC6h3z3Me8f8ovthUxdk36H9pj37vLf25XTK2HsJD8Akq1NawWdPbwD",
  "key16": "4RH87wCCc9HZTypr9wTP69f6PoxdKMy4yB1PAZ1Et3N77xh4M2AUUep3CtrfrRTioth16UhtqnsmyofYhYfRCYbB",
  "key17": "4R2BVupS2t49Xe9KYvhUmdoX4g2deb9jC8NP86tc636GCwiTvGYWJM6uzYbuft2yoSD6s2Wt6fVRDoCco4AcQNwy",
  "key18": "5H6KE4ZcAxpBKvUpPs5EhLYgXEaiEpxSiUUGMHT15WiWXNZeyup7qvHjSgVbKVyyYbnyWiAXbfdJuMgV71eTxkPZ",
  "key19": "3utPsr7RweJ9x3f7F8odbvfA3xorPorWj4AeRQ2WnJkrASbFJJXbc2otEXPov9ZUC2mTdcG3ywXEemi36d17PgJB",
  "key20": "5QkG58f42TXLBh9qX59oCVXMJs6XddLYhePZDgRBq721xsmpVWHf4Y3bkbUM5wyRbH63Y4mk3XtQPSe5HF2wVmvA",
  "key21": "4bjPYntdnDTQjtaMypkxXq9WdNdysnaLs8ASSsm9kWqoEQXHoW2TthcsS93pJV2p8h85j1VFTC7MRHzgDcNx5ozA",
  "key22": "5oCs8Hjz9Wa3fYrzZkVWZYby2kHpSxWZ1jzX1rSvyEQaHMVTJU1pCKhyNyRmf3KPK27KwJffcRXG5n9Jg1U1ZACM",
  "key23": "3jpBW3gV7gpfhSbNHSE3BU9Wq8KLuHE1Zoqsjj4GgJAyV6rfB3Jpdf2eDA4CwCc4rgNzbgwv2dDivacL7pRMjJf6",
  "key24": "2Z58EoUQd81F3SrivBdhNci5g2tAfHk5dgWVWrRvwC6Bkjgya6yA9KDjU5ancaq4tBYfhRXQZWVJ6Q2nbnynZRJA",
  "key25": "2CGoHLNc98AQQViwsK6oTEZbVKytdXBB5p1Xg6vhVkVjHDQqvPAhLqZCK2GqWsLMUwGj7xeNvdiEPr9jTEZ1t3Ns",
  "key26": "4PZ4GNcbnxFppWSg2mf9ULm2dsERTvXM2pxGRRHAsT4F4mXQAkpCv95tTX6AhmwNKW6AAZiwQ8zz4s21GRYuvqds",
  "key27": "5Q7hG7RmNps9rjoSEzG4rtsUzwD7D1djAGR7SPeJZ9DtGQqAYG5zAoKaaWdoeqXdzoEVALR6iUbsvaLVXae1hDxh",
  "key28": "5o6ekKoQKV7nRre89zc229UnFFfStrhZZMsFL8mWRUUdRUmcPKSXSt2bnJMPtnQNwBqG4mSkVvZu7fF6RBxibHBS",
  "key29": "4YZfqAfNQSMPXqrkEWZj3qsVwmsi6rQER7YiPoMryMZuJeRpCqMuTjmtP246pPitZPWNAPRZ8VBwWxDQADqv93vi",
  "key30": "4s29NpUhESnzfZ8JaKPxa9zN1jBF3ZZRZwRYapgJ4xFpfDtAPscVcPbW9ShovPCHaZUzRi78KHGwQ4MJSmLAippn",
  "key31": "L89YwkEZjwFa5gbnSRqEg2izqgGpPzkzoE1xNr5uEFSS1mp4Vyggx1cVFvWfMqRHc5qiVNi8gSpZoGCQUtixGvS",
  "key32": "B6CrWLG8DURhZCeV6Y25p7XTYvwtUFJsXMkGQFsM4nN8z7o1ZGmVMoPUbEF9sTR9HJQsh71jtG1L5NyqrYvsbA2",
  "key33": "4BHFQsv2RkTEiufSK8cKYAESaqF18aevPAwZQRPGZoncZyZn8ffgjzyw1uYjHNyoQtyrCaT39jVP1YLMcVwtvAmi",
  "key34": "4qXVoQSvLu5DALjadXKtSRQHGndm4pVSMJPVVDSap4RTb3PV5YrFaqksYqpjZxUpoaiguaDkurVnoubdVHMamwAF",
  "key35": "5y5bsUGiMb7P1B3pexKEgFdFmLj7StSgjp7CCkqhacrbQwsKh5zPWYKpL3BqYa23eo8UXC1KZQSGji9uwHiVLDj3",
  "key36": "2m4B4dx9MzCjQTNSTgrYvdg8xG2Ud52zbr4m2C8KcKNEWv639dN2ApVrt6RcHiFuTEgAdMPi9CMUqEUmzGE8QDT7",
  "key37": "2ABs69XyXeVMGrKgbewEF9EaxKfHHcmZF72sTeG1aWwcMTTVPDb2zXVXHnYBpNTPqpV4QsspBmGS7Kw9FyAw7ZrJ",
  "key38": "7xunYB3yVFozZ62t4i4rzF4phNfuoq1r2Z3JmCfkP8sk5Sd7X1WyKsrT3GV5MiLNHHeiTuAjkH8XkR1JcgpyokT",
  "key39": "3sYdTMp9VmKWdnYNxBc6jkppYGHLMxMpn3X8DSBvvqjF8pziBeYP9HGdhcf99KrLdCPJcygocxXhnp8iBTXU5MYg"
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
