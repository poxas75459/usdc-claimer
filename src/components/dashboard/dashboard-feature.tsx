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
    "prdWSAbaBvcAoRhJ7ZKTUnMHq23AWftekHUohtSbAhbs3pCjHE7gxokRoUwqBAU1GhQwbjcMEVrmSxj4s17S1Wp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GNqSsiGUtCWWZtjECLUgReU1XEybF6bD5YR1D7tf5BYj1eXhJ1VvEDCu5EWmbofiNS7fp6FaHr9QKCtARWCKVjn",
  "key1": "2VChvQtbTecpXsRHmt9wxAGKbjpMReQwyHY9v9ogJpcmqwxpjUrLytPFEGhGnhRBkr9YiLnhKsHQ95Me7Q5KUoeF",
  "key2": "2mWUtUfPnSnLRToBS5osDEsqGXV687GqNmnqN5MqYjq3eS8oPwswjbzg9WEBFhnRS9hk4MeKvU777FSV4HDBEuCM",
  "key3": "3DWR92pVg3T1vzSQpF631sMoJJvJFAtMq6ec7GXKXVaomcqcdHRiGdRb2wsecwsem19TFPVuJsfZVRogGSQ4Q9bw",
  "key4": "3LbqFDoLoqYAT5dd64QdjfhP7kbrAg31FPHJGPqva3P16yZU4QD2fd5BtMUVMydtggTQ3roMLUEkMfbGdcrvSNgp",
  "key5": "5FATaniddmhes5No2NdFLjR9Mv4HWc3t7XsLytgGEWMYWaLky1oXGYSrwAQs6Ws7LnmzcRCMLRWtV4bwM737vude",
  "key6": "51GY8HHC9VvqnLzA4xcFNi8EuN9Lh6635BonAWo9HS6arD7F3oHQ37Z9NaSKFZFE23sDGLzAkA74VSPronav64Kd",
  "key7": "5QoJLy8axxqa5uyLxsF5KNAJbsPBHQ6EpHGnNeSzCVGjocZTqmJKe1yqBrMYGudXn4BE6JgFFHRnMH5zcmLQKwdf",
  "key8": "4SyD3skNdaEUW3fWtXVVhRCZeng6iCc3tNanD57TjJRbySqW6kq3oUcCBcc3bmzWfk12TCEHBo6eB1bWP8s7YqTi",
  "key9": "24Khf5qBwxALi4jnJSrCG7CWUa49HqFeftuBFkgRUun8chijQwmY2bwAcGpypznJia2DLsUtC31faJEKroGSWM86",
  "key10": "5aLaAEWgkr4TihseWffvTnw46KEHkQBxDzyHUaNVRNKrNyWby719rXU3zktNU7cHWDjb6pGJo4dHMPggHzUPjm5y",
  "key11": "3UsUMMJc2opPmdmoVRE22zwz12ew4XsT6KZgZBGGjMvEX4WJMWemsNgunT8ybS6RMNHUWkokoX6pgv7jWKCmX1eh",
  "key12": "5269kiiKtfJyCj72v1imWYG7Kd6Jid6V4EdTvcsC71V62ZymcGyjBPCSQt7vSxedoPk7eSL5Nx7Y1znP6oRGH42a",
  "key13": "2nTPS7G68yhhGczy5dRPJfDw6iTyhhuuv1zbboVyh647QpLk3dVYdFyeT785corgcAMaNCg4MfsWrCgro5M5Af2x",
  "key14": "F1iDsbCeGJ8s5g9nn3EuXSoLrMJyNkX2H8tCR64KyNWCPx3HWcnZDA6asWy6ZR4RAz56iwGVeoG8JC884uXSYFJ",
  "key15": "taVysLiRmE29ACX7LXMg3YHm2nXAbE7H7BdXaB9efPnf2ga2ukzk5k7hY1opFQYfZFfQeEZjcKztGx99nydUfnR",
  "key16": "4WmdfFnefgTPicF6hGYNHmkmzEx11xV744jyiZGcoKWG7mjHax5PdH8Zb6X5FESKTgZZxdch6M3Ux8ttyQpxdJrZ",
  "key17": "4cW1rxe1yXxrPSw9frohw5XLR16YzKsqGGibaoZnQAEj8h8e8F9wXtTXGa3B4FYZwUe2RPjXKmcb3mfNYrw7of8c",
  "key18": "hXBNNViAd8Bfbj5rksoEcZF3DrEMip26KBrDZx96QwxCYB5zum2uygVnkhCvDVHGFQKJmAdfJz214Q2bzwk1XSX",
  "key19": "2SYnP2doNqNveA1aZKwcnoyJmvWU42CT32zVFe8n2oosGR4AexD18jYpnBQKpPwV8uVu46DuqLHMjURv7aXmzvRp",
  "key20": "JLzaNdh9LncwpMxBTUf1dx3Ykc7Q613f25pWimyBnoqGoFUaTF1Yky3V3yNqntes8mzgQVX4sFn5vyCTimSm7Hs",
  "key21": "5cpt1zPqgFCWzd5e3fYjWfDFT4PPFzTLKN3FUxVgSbY3HmTmreduZQiHMjFgZpn1cADTkaok7D9i5jKD7s13KZ8z",
  "key22": "5HKQKkQzEGQRu6r3uTW5GRaDacmYLPe5YMQ57uG5LUm5tZCLS2uBHw48P39FNTfex5TmLB9as6Z7mRz8QXAF5JCw",
  "key23": "yAy6bbpk7GpEaafLMu2XmmYmh7ja1KJDAiEs6wrD8rBxkpfBBB9LLAdUWoZzJZJyztrAEeTpbc6wNUsHrxuHgUL",
  "key24": "2Fmzw9cz8iQ3JCsQmmAqfWvZZMeugH7XLAagwRsci1jWL2p1f7SnjZhWJZKct4R6GdvJ4xHXVPk8ZfQmZNREjBnV",
  "key25": "ajCJxs6ghrcwyTVxtBhtqYh7NRPJBnrPcpk1e3tsYekx56Ni8EoNbEPxMFV1eZcuUFnMG45USoWBiqinD25BWD6",
  "key26": "u2AySjNffnVgBp2wSuSnafBoALkjb3TSrwzwKnLy6PoK4mBTBoiUGSpkHqojfU85tM7d4PJsQQrD1bBK3s3J1a4",
  "key27": "54d8JuEhvcdavzndopTTeXx9FPhwb2m7yAmuDmy8ayKJfVjaMPu9vZx7LzL3XKDC1VvmW8uNnVU9cYQBGSJN7dQL",
  "key28": "2wNerQPgYZxQBGECWwpK4eD82qNiPfbnVPWaHS8kpuNZ2TZbQLWkMYpwc6mPXnRKhYRYfErBoqxtTsh2KgLe33UH",
  "key29": "34BtwaZhXbygP7fTSa4Diaa8cMqaD73k6wzL3GwLNrLrKiMAmLX5Yom8pibKhShBeAxpYBfoHR8qnkSJerJrpUjm",
  "key30": "2jP4zcos9g2rMG518CSUNtjnEyeu1YuKad3gsRBfPtwF9amddzZuGkBxsFvZQ6XvQq1HPG148TH63TDj2rjVXxAD",
  "key31": "4hBug1vsSMNyKZgqBA3qtKDqHirzAJghu33paXAbKTzdBg9PNzUDfreoiUtU9WS37LU8CqbT8mdnsL3EkxCXJxPY",
  "key32": "5A4VU5wZZyQ3cvAGwutaiz9wc7EawVzZx1Babo97yq7k7K7TxinBMPfCaCdrW9ZcnQF8mrPJnnntGPshRdxmxWQc",
  "key33": "3EpGZSmXKW5QeXaCLZWuSYvZER1mBX43sTiUhgo48ZXRK6CJQ7VM3Gtx9graMAjSwD15sWTcG6SRn1zHg5Ha3G2p",
  "key34": "5Ai7arAMRunsix28BkEHxmNhVFvMWsS7kKuVus8syPnVYVEfWAnGK4cxJeSGCNK8nVYDBdcZvNZhGUeX8jcodz61",
  "key35": "3CycUCgwruYZeheHg8D4Hi7geZfd9XzwuNxZUpQk5FhT8JpsG4Q8kK9hPHHhdzkfp1SX3mDrqT2Q1Fag1iiQ1zB8",
  "key36": "42t43EfM14UzHuJF3Qk9F25XBkFSUkUkFTaGt8UWPEJf6KNZSSScUMzfLRFHtEi5Ju5NoLV21daHunLUHxB8mtac",
  "key37": "2Rwczg7v7oKznFELh7DKwjXEevm6c6WwYPAx5s4W3BwW5AAYika7sNn3y5wLxnhdhGs31XmGVXb5QN9uJKrZmh7C",
  "key38": "3AfiAoMdNhLHZfHGPojTaRrrKMhFtvCK8GRhr37dGR7cbt9PshQ5gGkeSXneUsWxPiBi8j6D6iYb5rfXLCBAwt7R"
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
