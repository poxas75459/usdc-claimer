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
    "4Waj1BcZmqBtLNgUTDi6oaFNaJoGaaGKKaRgECGE3uAJjuWRKKgUMP4z5pjEwD6v73iWr5Ru5gzqPgY5MgEEXsuo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JBem7W9qKJnn9RDqjRFSDoTJuvnJdeXQNXV6L8hTd4Noh443KhTtkuuPfLa19WDBJCS3tX8USa3wFozYSfCwK8t",
  "key1": "47rpEP9GWJ3ipkVBusAnpMtephK8tCrJ8kH58UMcAVcXvCCmHfA2xTSdtDV7atihmNfJzS1g4zzbhDGu5fgsLCxn",
  "key2": "3SBGpTdg6rmrCC6i9NQ4Y4ZaMyFxnpybfxyFN9rQUFHJzzaumMwbntNPrkQcC9camwUxshk4RHBQjHP2YYvnyyZY",
  "key3": "36SS6DYjDW8ZctzMzon49oisAc8M5uZ6tRtc4KVqFzrpoX426Nu6dfbQ1R1h6r1PBsHDEYayxoFJ1orQjkXyQbA9",
  "key4": "3hHPMKA27JixBPpWweQ6keettZtWpdMs7ba7SgccN2kYTZkGTKm73NokVDjkLcwB7n1Rmoqz65pcg1inZSd6RCC5",
  "key5": "teDZWrhtniou23YiTQ5QkGxSD4oifuxddj9r33ej9qfyKpfp4Wb4B5WDEcdxoH9TjZxzjayJHUuMdSiSbCLe6qW",
  "key6": "2MVGnY9NfPeyVi5qsjMiqMnX4CL4VxqhD7eumsTjG9nbMV3rNA872vVeg8YUnUzMPEoUEMmJUSfaJ9uoustLZ4e",
  "key7": "vqKYhMEQwjK4rNCnwYJeznY9auFP1GnMUVSL3e6YE8XcpR8VFXmxUNjMpzUtAbewdiso151kYESWX6ekm7rFVXt",
  "key8": "4qA3dxW19BiXvps2ZbovLD2c6Sbm6qkgxKvJdnv21yJS1vufQccFSAceU3w4xDJh56jns8r69fGg4t4Fbw3mxoh4",
  "key9": "5wtvfQbAkQtSv7Rawwfyu3A4U55heTNNLskXwyU2GeFqZqecBLijBNGieRrYe81pZmbZMjEdLhnr6QgwX7x33iuC",
  "key10": "2vAMozGgELJ5c9DvqEBAydccTLvazrCWVQUxzpkAmk9Gpj58fvTPiFjiQDVACYj1WbZySZwjyBvsi7ZtDSG5HR55",
  "key11": "2UyKQB4u1htbVpkbXgnjqk67WX2gi8mpvXteJVrQpNr3CKP8ib2tYs2xyiuBqHHMuRG2TUXcRiWzFCwYbss7iPFp",
  "key12": "638c7A2HFvsvQk5G2PWTyCRSEReV9hi9BBL2rE1HxtcFXqDE9RUvda25WJqPvv9WNGkCvqWvBuxxcgHoShxxC45p",
  "key13": "DHmRDh8CkoPRTp69fbvorT8abZLvxD1jMvbuSZ6k23xKetj54LL6tNTvxJpgESvsxQS2WrGLEt4AxDiqWdSHJtk",
  "key14": "vRYQrPcjQ1g7VwuyiM4TE1TheAMY1mFweZpiTVfLWzQ8biw6yWPJQi5jeXBKM1r3qfZLcJP8GQMTF5mZreS6YUn",
  "key15": "Ldja7735L1ZNLTypSDgyMxNEpHx5z3Ut5GSq8pGitm1FzXioLuQP8t8FwJZD9QqKpqxnE8XuQQQ222E3xbiyx42",
  "key16": "2BNZsBe64fzja5MaEAPHpVoB8Lx3ut3hC1qwdEi7WJ7QxCDQ9HEq5w4zrR5i4Qb3vrgN56oU7dMsWQmFgWtgGPa3",
  "key17": "4MRTMEJh1NqDAYUeeEaKMmdcBYcCsRAzeXpvBNzSn551TjmNtaJeS2jwZj9wSH3Gs9mhtB5ch1h2VxWML4qTLE5S",
  "key18": "2uoMkME9Bf1XZPCCfdoi3w2hYCFi57HMPrpomEp9WuWKeT46QDFHSW1TLSeKpZ5k3hii1APmX3bTogDwYgt62qsT",
  "key19": "5U2HcgtayZ4ZT5DZhsvqHSuy1Zhv2rkFApFPxMTzSWSbmMz25B9CLyb1GA4qi4kn6zcmpwGQwXK7Nmzdkdc5eooa",
  "key20": "yoYth3SWgVNedpWmSDuLPwFiyx1BnvFX1i58ZFTmHTQzGKmmfz4yYLhNZCV1Va3eJK5gyudiJAGoDmvyuVJSd88",
  "key21": "2FT3DXYfncy5sqgjdVe6b3izCc2yG1hJVUPdo3TzCDQuRXFnRSqTKScKcYefohzHsC9P84LaiZFRk5tFeRdcS8ML",
  "key22": "HHWgBJqEY6W5f5HdLB94zyHmuBi3jhVgho67kGXfLmE9TGU7nsH6q6bf3NmKVpT3cv8CARTsSF16pnqwU3uixVe",
  "key23": "3vHYC6dtJeFkxaLJ6bkQ7ntJgeEyxcHVDSZZDWfpfLgmVAWpTXhx52tNwSjmCZg3L1D7YJRJ9wBTQKnSLU9RwPU6",
  "key24": "CHiFubvXHXU1hisTqDsJfDgE5LgJaP7mwtx1DYK8zrRSNUmJJjftrHFRwAGoFWYjFsv5svanBsPQcJMzFEMxMAs",
  "key25": "4pSVj9GKAc8qUW9ok6KqVSjHgNzC2jyyUKuZDfK13zCKJG3eqsdVTuPnjwmMzYECF4spibjtCFX9GgQP61kQox51",
  "key26": "jfzZGRvGBuYtF2QPSnRKVtFfGc8ST4SNboPH6SEpktJ9JB8858sf6YdrCt8rYoR9Y4di6NRtaYxNrWMRHX7sTf1",
  "key27": "3joWryFmb7CR3JEXiiZc8zyBp5BjXvXXjWLUTpeqVNj9xKYUqXMAtBdoMaab5Hhb2F3z4fouBXxz7SKH3A1ttN2K",
  "key28": "4JTv8CAxtzvMPyqQjiswo43rWSMPWHh27d7iSLgtPCmRz8oBa1CXu3fJQhBtCMHBEJjxAXbKUu63wvp13KPd1Y2Q",
  "key29": "LQvot5PfSdPDVsJGBvT2z2WJBWSpgkQqpWw7pZqnNxXbeFJoSsZSxVLbKCxWaiF3n436U6yBvLEKRcGZ44DFQ7n",
  "key30": "4YhRX4YDzmQPZ9b4JFbYmuBajcbaFLt7yfqFMcyHPKT3bbmoCiYMeopzq5J5zBgkT11BjjE532gBjRPZ5j6v3WhX",
  "key31": "5DNLVkaqaeNMLLYpWaHuouiX73n8dNaknVbYRvjVAbHcjsVVifAFXj17oXDZQ6DsTLNzqCCxioPw1GR4L3FRHcsG",
  "key32": "3UZ5hitv8LeKWsS5Se5m6zdwPgEnhWNr9FSgcPmSxjx7VkKWka2oip2PKkmbQLQ8cwnEBoWDUVFstgdJmrs6zL3i",
  "key33": "3AQiDe32bvK6f1bK7NQFDc6oWCz16YFyKX6o3JAZyiX1yTEBqaWG5acpturfXMxUoGAVrnUcHbAz2EWmNxP3GiMh",
  "key34": "3wmJA1194UPHWBrxeh72ecMNXDsjDWmzxjGLAoERLAKgBaj7nmh9JHsciWu1GdWJU8P9vjgAecaLGvUa4tEyhy8N",
  "key35": "5AuW23cmVbQvmqcLstuAneoxUPG1FJxYAVdwqQCSkCTBTf5XZchJu4fjwcreF7MYp1rBGhhKfQo2ZbbP4fV7sULK",
  "key36": "2BsUFYhm56wX5YyfTK9MN4sHw6z2cHezAocryTid581hh4R8Af843rR7FQzA1siGpo45F5iwDUYRUK2uqM2vd4n6"
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
