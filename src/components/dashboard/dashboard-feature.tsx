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
    "smQxWVA6WT3RsRtvJBTcT6S4Sqb2AG58o7XcmbUeTzHpovpBjqH9m1pyUUgPBytyBEujxQYsAE2CunUoyayUYjR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mrR3FBF89JFuSc7SUK4C8ZQFQGQh1cqjYbzbFYSXvrpbY3EGzRBAQMRMsC95QwasCu4ga56JHkAk2mHfMq5i9hv",
  "key1": "pN2yctzNGeuPQ5o3i7mHTRUCMNgtAeb7zQkuNHzGG2vdPxNufAGP7Vu2scBerrBioVDZoyBiReNf1cTwEbBq7T9",
  "key2": "5ARy9WTZYtyGrbdAVhYBcm86K3Wxuznn8KHNUAhNMUwqn4scrUEwzpkqjCye2qbQbbZeMHDReQvkToxUe8H9HUtN",
  "key3": "2SCxMCYcDbNntcMRNMjsFPhBy438goov9fTh3fUsqPeWmUP5sB4W3vHmA7XBXrbcDUtbRW3xuEqyP3yC9ZPc9xx",
  "key4": "5UbcQKAX4sYs6iydYoeRdgSaMEdCUs99vU3DjhktuhWBLWBpLwFArHuBgzNXv8A466pT9v4Gi4nFpxvSXPi5epyH",
  "key5": "5skKDDMQksy7Vn4noPfU2dcPBm9ZSao5AaAb7jjBcnuoKZrFAsBL983CsHZLLoGbsX5mv2koHFeEo7ZdcNSMs48n",
  "key6": "2HBMCCcn3uyiss2ZMLtjeaAtKSDYjNiKQcY6nbPRky6LZ6kLiX1yNgXy9XNjvxCcD8gH65JLBgVnkg57uvCDkPSb",
  "key7": "2fBTACzQnNgKYsoBgW8NDshDqUzVcq4z3Hbf3pVnkurVcBmFNgeUwnp4dAsr5W8LHn6D6DZrUoMVSSwai7winZrY",
  "key8": "2KTrm8mcVSsb4vkwLbyA8bsEc9xrsehV6GMQEA5SpVszL6LY9KFcfLDjqCmfNBTS49YigwddSUzvSDexHFrBXZKV",
  "key9": "3oXZfwzjfxq47Ah1JRoKf23118VCHKDDu4D2rPj7xHsjPQpjZTy19jyemzbnkBSNbLxVpb4BmQUti2MtsbHcpKPK",
  "key10": "53dfMkev5muPhViwpGgotPuvJm8q4ufLzah5krp8mHM2hqCSjKRxNnwtmke3RvAU8rv33PVHYcZs3jZ5HnmmZQju",
  "key11": "5mxUA6qa1DEa7QfuTZYLUyK85mreKhDyctq1U3AtbHhTRhx6uiQdD8ArhQgTQJYUeiHYrZsPyrHuecnSbe9GTwz3",
  "key12": "3oTVRrkcwRzwtKQ1pLb5p6C3vkrbnTyCi6sJPfA5H1y5yyechrDfFrkE4Qt2UGwCNR4YC2BXSEcAiHNJeJvz6n4n",
  "key13": "47AhvMjZ1KfpqaBWmisrtqpcWph52BCRewWE25zosVX1Nabc9Mweaw2PcoFGF21NMtwbtfPT349CUEwJaFtbkhNU",
  "key14": "2EeH54bBZqbhH8HLtUad5HRm1zgSdSAiA7J91GGbKuSMYEuBebEcNry4F1VSfByUT2yhzhWJtRVN746b7SqZBjJj",
  "key15": "46QJHCzVTxS4E2rug4PxVHFf2DYnSz24orUvhrHWERvox85xpBb87cx7WrKnh1VAQ1QM6V1nt99QvtYWgecCujfr",
  "key16": "5T5L4sYkddus76dDtyNibFUL1RS2GWhVwijJfTVndBj9fJuCEdxSb8WhArjzDHGCEd1iMQxSyciafeMn45GuyVfV",
  "key17": "3BoPyCNQDUMAwvM2hbh8tgWEQmsVbMFrRD59uNbRVPQUqrVoLnhKdNT4Z1bb7CXdLbuFAwyAZcCE3PPsp9k2eeSV",
  "key18": "67RHPRc8MbkJZVd5frAnbEJZUfAbh2DTZYD7Yzacfwvd1ugtQnxAnBwbRaHUTNoyVKM1Thnq9EsNncLbR9VKrY13",
  "key19": "32cfXsgnbLGXBbLri131YuxksuJiwLzUbTguyarxCht6Dt62oF5XDFWzdRoTuWEdTpvMKKiTxT1WUH2JfsjCLTD6",
  "key20": "MzHSJSs8R2AVRCV2zvEzhVEJHjgK97ekCakVcPQ5zrfDSoupiwjT3ttapvskXv333MQ53SKNbD3EZ1GDWrnRNAF",
  "key21": "5wboXXXJLRCrGSzcsCzk9ztY84yRtgbxwaUZYx2bbnG7XWb3SsLr9xY3T8er9suV7gXgWm1MZmakZf9kQyN5avjP",
  "key22": "58LhGWNeru2eV5YqPKtFbgkLcCuhY8hGsD1RTQWahhktXj4vWruEUBjPDHCGSBQ2WEouuriZaqbDbB4NWmtC7XNL",
  "key23": "4czs6UeCmCBGTFg9cH91aP2mX9A46UnvojEdSrHUGsrkAFFmQ2jDs1ozZZygAELP3y8yFEzGNpGifkzeA1SoK3LH",
  "key24": "4X8LvZGQE7TpxNypaUusLiuWWjs7b7Vcx5888Dk7rdsxWWiJQ8JWzeKx22HKN2VdH2ZyZaFmUVJ9KFZ7DyeGAoN4",
  "key25": "5sYskTXxgyzKFTrp7XEZ67iiZUEjJZ1Zpcia3DF4wQE9XFZyLN9PqNRQ8SUT7AmNDRGeRyY23KdFGKs9Rq4nk9CS",
  "key26": "3N9KCwDMfR7kDYHPGD6a7aEfP64oPtZKFqEFg9o2buopLkD8qSYwCU3yjEXwqeujx29tyjhrknTB5QTeXhcAaTRG",
  "key27": "3gJhuiNt5Te2NZvJCuPytZEJfQekjGppjEaBuaG9vviRuQNYorvhegqhAKew32GrTRbEu34jVbDpPwkvonc4pANY",
  "key28": "3MKrvGWxUBa8pi4JD2fNprLZW77eKwisqk1RbTaG3bKuq8spQYnhBTdsvzpRwvMNjdjcpzyCk83dPZKVpNtvmrTp",
  "key29": "sGh7ku9q6MsCeus8Mwp5MRk6i2adqPQuBbeJtzsN1povWqx7ocgC4CAQjVv3aPws3ANiTXRZnipveFxCneyQcX9",
  "key30": "4Q9cWDH9PJoVxzWofjuBYecrgnDDDcok2WTYDdCEc9anff9b5yYsNSEzK1ApRdpHYVGVaXt2LifMvi9oY9cna7Ar",
  "key31": "a2ot7cEM4R8gKyt8AyThgUBm3TGJ58hFvnYiWy9eWUf2bpKLtXVbqRhyJRgUnaL5EgxN7JDCNHh6Q3MsSiU6jGD",
  "key32": "63xppDRfEtyQZeDGZqw318BWDM69mH4QMqxafxbqsPPvPJXKkwLNKd5NEgHFTrnaKjc7jEvmiJp8G6qwUWGPM9da",
  "key33": "4JRPR9ydFJx5k6fGU6LHkJTpt1GMnxgJfDfHNJXDefkhRuuSRUvujir9GPo4dffeMTTYfMyXYuL3pVawFFwMvQdw",
  "key34": "21QGefuY5SBzUpHaRHCPynNmknfLvT6CS9pnBJ9rgpfpiGUBCzj3Ne13dXRAJEvH4qWgWQDhFBch4Jpp5xvTHABN",
  "key35": "63aLJeK3gdb1MAPp7D8AjKLbVrPHKELBqgJDCVgEzgMw3Tcb9dN1UDsTC4Z4n27m1T6hReHR9fttgx5pe3ya29R1",
  "key36": "4PSQ3DRz6Qf4gRNMGQ3qS2aB3qVUD2kmMDaRFS3Be9nXE1RysXM7G3dUQNzZNvanoQL4aKcMLSPeKv1Sv87FWdag",
  "key37": "3rjXTu2UQbqMiw1VQHFtWDy94SCQBF6j3NNKYz6SQH93N9jdiNG4S1rwawFKU7GPiEkkZKDiT5kXgbeUSTi5tZQ5",
  "key38": "3X2udhp4rdS2kNYQvL7MGujsp7aahTa8RSHhVzWNtTK1rzTKr8mNRdXkCVWvasXkfmSV2PRp8yqfCi5QAGD5Note",
  "key39": "JX9K5vU3GuTG2YPDVGas2sjtpP1VvqH5c6sDNuEZfHGM5o9wnWEXGZ8CJHmxphWJXb1MYhcoNCt1nm3cgHbaLDi"
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
