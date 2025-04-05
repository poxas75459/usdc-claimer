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
    "bNhENoUWbY7yKBd5Qx8tALs3gSwuN4E7xpGXbg4Gj3ox3WvqXqEu5o4sG9iCwBiVoUvjPRT2WAeEjrSYLsNEaVS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EALyMMTmNkjjvwnShVTXUKmdxk9CSnpaEGrJUffWfWzdHT7DgfYZaMDdw3JcRD8iwLmFQUaZFDkFpbaTE2FDGaf",
  "key1": "2jgwywu5CUG6qYvw9F4JYi5SrpDRNDt3cS14gg8H2CdzFwjCPTuWPYbo3U7M9eg3xpg18qU3kZqCa6YjkKHiSfFN",
  "key2": "jzScuV37jbqMKdjNrkWPhVjLW8RSbK7bgcfy27awqBjtEy7vrDVqSrwicxNrAac7skErsNCCW3jLKCNTTQvn3c5",
  "key3": "39yZrguSjHR6ufwdNKR1KYYMH4D1shfdadsbbM97auBY7AebjcqA5Sm9RxdGeHFeFSnV7wr8kMNJYn53rreSMytZ",
  "key4": "2gnQqkj6tMXUr2uq5tMjyrq22PNuiyTp7pjv7WTfiWKo4UTvq9GGADZJANhXFJvUnKg7a7S1rLM1ffnUSbKwoQ7Z",
  "key5": "4RndpLa5xA1p2iNKVoMi7jcSuVTWSX19FYTiq1NLhFRJN81MWJu64WqtbtTPBTRBJjb1hfsWBR2AgH8ivAajKPn2",
  "key6": "2H9nie61iKXGaqrKmBDA4mpy4kNXy17JNiunvogdyyZic2iFqFPDXRp5hULxYzGmXBw6CRNUfWrWpJtEnHMHTMtD",
  "key7": "HWe8qcEVWdaZ7VF8eAP9X5Y3QDeQnKGecMgiSVv3bSukdh46zYaP4F9feP6DFb4jk3Yr1YurPLouMz3ryiYpSMV",
  "key8": "4L6hWnWAkuXLUepUXMAxwj9m8zqkYHEb7GgPhHuNRNH1UAN3tLdXzFA7iMWtVFyqLkdSyNwM8MLfMCZeDW6WiQaC",
  "key9": "sGuJMDEDNP7GvpDpJvbDH4bX2MNQda4hHdad2qwKPdYzsMzs3xFXdDEX72cd7i2HuttfG5PaGia3G21KohzQKZZ",
  "key10": "2TVJxymFxrsyLQBHszLZQzkYn6d7CC4jVzBMZyfKJZy8Ac5bjpCLQBYRRHtAbFZcJRg1avwJGNzGboep7B8sC8m2",
  "key11": "4aHwZQ7x7PtNSZHHYPmVgB7nu5sP2CrNxbc1SXs1cpG4oQiX5pX8zgcbNSd8WUykCQYrUxgcyjBvM7hTAmNBGma3",
  "key12": "1GLoYubHZFZpgLbi369DibdrdZV3AQoJnxNmJuFNsB6NMBgiSfYN8zqWiAYiCfPuc2tRcz5LymQaWy7MdqJmKB9",
  "key13": "3cLNy8pyTmTAUEBmuy5qH38wNjanCv2XmXgTJTQ6PtHYBp1RuyfXQdkCagwME1RMthSXKEqUDY2BmzXzftFFUHGL",
  "key14": "62Wq6KeRMPhKYwasagSVD2Me4jW8XX5oTAHEuo6n6aqAApu2sXM9wNgJzdQnJA2kNwLsiY8GNy5aXk2mC2ZUgvt",
  "key15": "2KXv2LnsTbgPMRWktsTeokDtV7vD7TY7hKcs6NSG4Cn5FuARNVohnAxiwroLdSa9KCbfPzh78szX8bBVBBixGsy1",
  "key16": "4cLszkyu9keG58J5VVaXTNnHC3S9rQBa3bqjKngXJPrecyXrs9fMqMxRjr74vUgZky2y2jddnJ8iKUiozZpSG8GR",
  "key17": "4qLrUctvd9w3PakocgXCjrSpLKeWp1ZRXDYycFb7wRcaLu6L6dWJY242qMZti6ooYDWiiJuDGRxXN5j2pjULdLXQ",
  "key18": "b59iZSV6Szckn169x33cYDV7V411i7jchUDANwVAgvbnn8fNqBFKb7EmktDoZPySeS3jLJEVyLAqCnFshRzeDNi",
  "key19": "2dQ8Yr2JVgmkRCGwMXt3mvNhXAckLAHr1DWLBLmcdvnokwVu9Fro3NPBNxaxWFqEdY83p2zqP8ZJQm8fDbuxumNf",
  "key20": "fk21T1voQXApwMMhvcr9RBCFiYXppCUuit6ghkr1XQ5h84jbxtXH4pn7c29D5ZcNy3VCiwUM2eFpXRKjEAqAg4U",
  "key21": "3262tjuKWQHAqqbvEZXcyDEUbaqNHSG3yBrv4AmaEXF6xETdm1AXmJLwkkDKoVCUxFrvNqTfZKA53Xn7X9dKgTyy",
  "key22": "5KD3CiwkvBYoScRGZSQDQw838kFMbDLaVrT2QaxZ2QCwfeFdnW6h6e6hvTNcoP3gxWwnSKaWZZprQhiqUcBk8WHB",
  "key23": "466HdV4vTdDGE1xuxekWwBJ5gTf1yFTLDnsb66VWAwLPW5cHtzupV375GhGNTRsrCTniYGSWxCzbLJXXKTtwZ2Qi",
  "key24": "5cJ75JT6eFp6iyhQkoJqJR9xQcReVC3CpV17559LtdbdCawNJyC6wi3NJt6uJ8FXKXSueKQuQhVSx91EMBt4nzYa",
  "key25": "2BMNPkoMokiErubgoNzMMtzjhM8agLNVmNUVpXMx8QurVRhSjVXCKDhXKj3KX2faK1UUsyrjYi2RjLbgPZqzVARR",
  "key26": "5ooJLqowqRByqMRm7S6wEeXwgzmNo3uoEgATTGvh73HTUDTxGwickFJNTvSQ4qgUdjsxVMkzQHymo68AX52KFEXj",
  "key27": "4CfFFaeRhHXEDKjsz8EuMeWJZNgaZCDTs8XpqmBvMxhSQLhShyGRZq8uCDJecb5za3owXWYDN861ckdGZxaZ3p2c",
  "key28": "4SGNmCG9vfwS79BMR75gUosFC5541STKyHotDSAuDNzqpiUyZHheS1dDsbWzvscscn3ptBUofWB2UjPXehV8qxZ5",
  "key29": "3RVJNesR1Y4afaL6qtGtSM1g2NxVQMwsmTq942HbhM7Qv75onf3AD8TJWqRTffuFc329UrD7ear2sqCsPenD5qxD",
  "key30": "LJm8KjtWoPvZLNgdyn3SBVLH77sdHTUrZUjCZiqfiHR8VgWcHsSoCGUffx8byrLjvmK3wwwDj2dU79Fuvxm9B9R",
  "key31": "9My1pLsWab6qifAca9vqwb25LGfFx8CCJTmRTukVjBTtfZR4FeiU3UAFz2FAE998Cggsitor3KQb7uZ2ocTJhMv",
  "key32": "PbR8qF96XJoNbuV4SZj5UntTWm5kT1UuSzL1QbK6o1Qq5rsL2Dn9wsLZhpf5iv1VV6fY6ht1VsrZni8qWM1xPcB",
  "key33": "3xeb7VD9CeX5WGPqkDFo4pFfRQ6aLJfSyMiazU2Bi45u4VWwpMaZdw43WKwTzK979VWdyFKFbhXDQXwC2EmE4XEv",
  "key34": "4meJgsCVU1rJu36daSWdFsJKh4urEMD1V6Lexk6q6UcPaMXA5BJzmnk5fC15gjjgu4LeiKvzcrSuFcpAUQ5NqdAm",
  "key35": "3upBCQwFRZhjAu9wAHwrf9hfnEhJ1b1YHof4cVRuoXHiw2ijgnE2UBHRWHxskEtpciQ5GWboiqabR9qaAg8BEfyz",
  "key36": "NnebdR9JQCmhJXhErokEfharPxMNwBV5XSbnB5uQgZAPjBb1n7n9rUekjJJUDpYHtq6R2fGrhU6u8ghRjMXKueF",
  "key37": "2FGhqTQpsWCaWmJCW54vh2gmkDPU8PzBGTf2mR2XwHDs5dWSPR9YNDv11hyA429hQJJeQFDZwx4TYFJqcS56kyfE",
  "key38": "3szV4GmxsEkRQyVxzFJwxnrEDxmVrqBNAagvZqe21emdjR9qHHd9WuUt3mufsc9FA6rhx8MpK4GrzFxtPkQSsjXU",
  "key39": "aSHuT2XdFkzazcF2LZyySnMKrsF8MPbCnxgEhBdnVENHDff8z6KbaCDfvWGnPUcmeJc8xTYkrawHBPdZXMrDoPa",
  "key40": "2ECAsSSU7563JU1PehD4uAm7nzoRXTeUssh4cDa5HivqzKy2nQ774PnY18552U9Bzr91GPQM1W5QRn16fHPdCwYR",
  "key41": "44Sa1egTLgENvXYPpiTtrQFHfCGqCKJMk2rnpfG93gThawxgKWXgUtoJq2rxCkcXpwTVuS2r3L6AMj27ZeQAFh1j",
  "key42": "2rUVjodYyB8gMwv4RdKevXhN8EjsTzENJ7btZCyQXMPLiHhcFokLiMCxJjhBMbPtoLD972Bp68nsMmuXUCRDfASv"
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
