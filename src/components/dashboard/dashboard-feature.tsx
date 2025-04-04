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
    "5kQcMzwHYAApMkYsohcJzEiNf7boiLjMEAC2rxMKHe9nqzwpA3qJMdqocwLLoWDvKtp9tWSywLcx3r9jSFL6sDkk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MDBy3WTzXHkTaNfsV7wfmGYA95p51rZvfmd53FENoj11r8ZgHeHEBRUCnms3XUtZuUhP4wfinncL5kz9AzL8DHb",
  "key1": "5XKBoTbC7aNY4JcPyRaDJaDsUUbtA8Tk1biCS6sGcwPST7RdNm2TZo92xSRt1JQsrA6Kc88drMpuu4Yn9DiBeG8z",
  "key2": "3xqEX77J5EbFD1pLYrz89shZhJwLKFiC2AFk7v6hcK6GtZk1xNS9hCah9VtwxXX7gnkG25TQ5ZmSAJmi45ZCE9md",
  "key3": "dpTwHixLatMg37a5Zp63RFmc2646c7E2Ga922p69am52Ue93K3pYWudg9xLL4Syr9cJx7FweeaWctP7AyxWUfyW",
  "key4": "4gDBCXjdy9uTk7ZRnBvJZnF3WcjVanHxwzCzZ7q1UE7x2fAexnqi1dxxw72h5oJ9Ne3PMyqtDqg7BvpLK7Me4XGs",
  "key5": "3LK61igZqyGyWTDeeGE1v1UwmkA8z74oDFupxQ9pW75aoxE2UyMg93JmDgvHSvNzKmDLjEcTtgzJDgSiKTkzxBDs",
  "key6": "Bpv34PNQAvRHgHRxsVhVuFvFGPvpRXWRR3aUVaPPfiHxNqHC6ZsK5WcjfEEpS8kQormmjvGQimk6pPFMUGNe5zg",
  "key7": "JoQiUCjqdy1AnQNCGz5LqymPVxb466NF2bXfY9noSQaiox4K9CfyoYPDuhdVfQdetfP3HQAdVvPhDtRgfyM25oF",
  "key8": "4bNEmWYx6BoKoPNMcEvvR3ao5x4oK2RPTDtpdgYo1A736MBkBCPDBeLruscKY1KjeJzBKkp1DQRVmX4mEVuxPbH9",
  "key9": "2sibEzGNtoLGAzzBJxR2u8uPxQEsz3w4sAggZV3b5DxTNdDgEJXgCB7f4wQPybRVzGRf1r8JAbHjgUaUWi3dWSrq",
  "key10": "5Qg7s6WukDVURxQAiXjcVBGZaanavEF8X9ka94fbKvN2Tuj2REyYjD5FCkdw97DbjuebZ8xxB2qUYaRz1xeNvST7",
  "key11": "3jdP1dtBysQrV2cPhWekDixtUAbumPGwtQf6JdAGymbyrLfax1N3nxTcuuZPpqZtpkLG9Aq594i5xP25obzQJCnz",
  "key12": "3UwJZHKjn2dPAqcCjQJ4Kc4t7HR3k671ekaPoca7hJHYQ8TQryPRXnMWpx6nT3ADDQ27gU8G4kyMh4WUCWyav8NA",
  "key13": "3ZR1t4qC5k8eWqZUW3QGiwhN29pLF8EAQtrMLxq478htqSEX8keauQqsDE9MKe33epMdx7a25MAuWaqRHGmwo7Gu",
  "key14": "4NN5YZLqApVYkduNt2YuZ5WyYWVDd1obmohofj6FKhFbe4H9SmYKaPZsjEpMGAQz8woZx9RP6ug8BytQvZFhw2gD",
  "key15": "3HAffTX1Enxp7ZTG2bvNvc62BwQSbRS3sw3qggviAo4WzSg8Jaq64rcMSMkRcMx2yRdNnjAFFHrNFak48a3Az2TT",
  "key16": "wPiPXyJYqVyYv5GSzGoWArCzbPA5qYR8jyRHvYnrjfTVsMdBW8fBn9aErqYuxfWtrvj15vhwt7ogYTmfcPoKxz8",
  "key17": "3uTyoyxknAXbchjNgjEjGU9gaBw651nSFiyzwGMxJoTHQYYW5HUnzHjwDw8jKGPzT6Jo6xeKUTF3uxXNesdbDJPp",
  "key18": "3zUxrUmv4jLbTVmNZbAHFWQBB3eaR4QngLS1HvKpVMkvcciNVkfm1GeASHgTVcGkgMn9S2QxTUNqrDdax7ZPkRej",
  "key19": "YGfz3VDPoUmGeEKbNszrQXq4HrtHUB8s1NgAo9efScd8E7rj2uRHfq7WkZmN9PtztEGJS6uhbzfCyEZMSpMtcBz",
  "key20": "3fujxWgad9tH8Q9TN3xydpMR5Hk9TSWaZsUTvpearrbLfMsCzv4dRYJPkmcxCfiR8hjWstKrUwgBckTRmeffMMAx",
  "key21": "2c9GC8Lice1F7h5UaH4AkG3RVFPr8WuEBmwgePKMfKHvwhYMfrE2GJgTit2KmV6kvVV8MMk1XHfY6uqSDV5RANs9",
  "key22": "HhJnYuujCKnWKXhAj5Rg2nbJ9eamp3qx8NMVjSwyDWfSxuDQWexEY9jbkK4rwUWK122S3ayfaqkGiLVtNEWw2PG",
  "key23": "5tZcpGgnZiv69zRxDYA21Xcd24vHc1ojjUdoiev2yeju6kT3Y3zZjDqADFARs1rWv3RpcZh4cJBZ97o1KLpKzdqR",
  "key24": "2EZfVbH1waLE3GgYX5SADHRnfAnZVAT9RCDAEUuBsrQPgvCaGg8Cf3JZDQX9jVWqdFAo6rqL7m9k4d71UWKcNajU",
  "key25": "3i5pBxZaVdX9ZD8u2S6oTme1N3XcsXGw8SgUYWfzMXTBuqN6gqsXccG1sXTu8HhfEGK2VZgvZF7P2Mr5jJK2oDc4",
  "key26": "2tLoXZx2yKkxhcGVmFgRpsUMavYgXfR2uGYP935XGbnAXq57dMsq3rmJFhfgkaZe8Kd9CBWg7ifq2cESAavzzA1i",
  "key27": "3QtrmpRxXN7KyqCYrnVzS5dSsATDTKucDzVkvHsKToPA52uQsS4Sb5FnNUeBwoKtsp8zVwZu2KoXzekJdL2RHUa4",
  "key28": "5EQ5LsVHbcq2rL6ru7hb7xoTeXvtx3fbJmuhLgwVCEEzRjmZs4sN45ZrCBd2bDrgTEnujgv1GwhroYWrnxcHbxCW",
  "key29": "2RTgwAT4rVACWF7w1VsbdVkkym5bFHbE3sibTMLpSgnNXydj4ujNi4ZSYgv5wXtJ6S5sUbpzDwYv97jGLgCs4dTx",
  "key30": "4LU2cVvE1z9Sezsr2MQnzfxiouBZaRhuZ6N1uWuKek5yuDCRb5cJkZPV9cceWip7K8WFGLpN3XCt1GyLSnVwpdbw",
  "key31": "5ScSrd3fRNiY8BT7w2zLGFN6biafRHeknPeNV2KcJj8U8yxTubPm2duv3htanCR4dK4jvq8bHRXv8eLCFrvMwGck",
  "key32": "2zdjMahvB6wRVsZTCyVnaTSPpV2c5nwMbd1iUYxJTybMqdR4u8JsArY1wYhJa5i2duoqJ1cGi97YKNVeZ99H46zL",
  "key33": "3c6ERh464na1VFkk1nJePUWEt9GEDzMmB2dCfjws2duMvpAvuUCS9GFuEkbADcKWuuCBBgQ8pEB3r3xBbfE8CdET",
  "key34": "2TcZWDmtjM4SLQ6V14ivqAsagG4R3pNAzXfTN2hiUNa2eEVrU255hmdZfrZunr3YoPBaB79ZemteV2tttW7U68ri",
  "key35": "5aWz1J7VR8uCaavmNr1QsKL4bhxJnCPdSqRajNAz8eeRj3RfNPJZjvC4cFYrCr5HEn4vxwfYyfsr879q7pF2H6oS",
  "key36": "2v4b9pQdw8Vzr3CnT2sZtyWLrBwCzuDMZyDNapGmSmTickjNJaPC7NQDJCehDWHy2W5Tb5AmD3EhFmPFMGd8kXYi",
  "key37": "4uu5yyBpYbEqveuBs1FpVTje1WHzSH5avykecEw7Jgc9aRYjSt1E3UQuSPL9adL6ALjkK4jkzGJ6FBx6RoWB7F2v",
  "key38": "2akB1XwkmBXrmMVRsVHUVq8sS7oRPYhPnrX418VkTbV6k3yfnP6urMdqwMySEsKwZzaPvZt1EkE1qyo4EcCtYiEY",
  "key39": "2EGQLw4w2gP8gNfztWpPmxwTbRdCtTPJePREqWg2rKMUhuWMbEiJp99Xwg5AWZnWmsXMRhV6YUpiETJJyiHBkEvY",
  "key40": "2eXXZy3Her9fE6BgtZJqZUoSEj6BXxAmyruwZ8WzzijrcoxbQuRgJSMg6XDgVz2LhHNQvWfF3byNCFN51bc2jDnb",
  "key41": "5rkPJ5QGLHsx7jLjQ9b3uQagW2Tp5WHMXkzcbJLhRrYMww2kgmskckqnUStTrmr8XxdgSLh8CkHCKVVT6tW6ED7X",
  "key42": "5mSDRbFxMguTizZdcLg6k1B5FVqzYhZNdqjQLLrZS6K6ceRnKBsGWQTGziT3eV8GDJyQKL1TLfqA8a3t8eWpeHhf",
  "key43": "abnLujW9B1YavbDj7jJbxr5hvkEFSNdKFc6W7XmQxMQWLk5YEpmXW4TyB4ddcaPQ9vE9skzoo9qejoDooThxfTg",
  "key44": "3bdxKEKd91ubFPAesvGmDs98YHGmdA7EPE97BLAKuQcmkCQpHiaPtVYahyC34qDmzBahgbRVRMYv2b4FC1d7Ufo3",
  "key45": "5cdBeXMbVvdeoXFafKmEcdY2xv6TdjA1YSz14a7gthwH2GUKgzFgibHaK6QNHWGLWMmY8E5tBurWz6pAMxqNJuWP"
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
