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
    "3BMDRbUotUjcp3YzhRMRR3PB25geqe9siYwkE56dNUpL5buKucYnoHpZNF1pYQAhdtBGJ1Kr33T4QDdH7RY8Rrj9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PoYt9WN1sQcB6nvVU9BFh7MtgpjgiEmT48tuSXD7Z94PzVhY4V4tqwb5ENPgEqUZ2gvsNgoxi4XLj3TpQDCH69g",
  "key1": "5UVSnz4mm1dV91rWACLPytwJrKkoMTxQma6ivcwyz2gen3QdhjoshkRVjb1QyFpzEj6Zs25p8PVptPoPEyv9rqTB",
  "key2": "4BYWNoFEDPfKU2xu2oBAgJjmhU4sRopjZyDJnMmeBLSHKH7quoE7xMgDgF5MmSrQ59jfRgVH38dZbLMhoad4cKMb",
  "key3": "njVmXXefoCikne9XvngEScKQbrirgERizH9WG6vMJDpjGiUaX7r7e5pxe7PcaRdSKAzj19tpc8HJ6fSVK9B2mg1",
  "key4": "3H9jybCwbuX4fZse7wnAamnqv3cykXqXWDbuspdXxbNe4wsjnbNbwYmBPzzuwxMNiqMrvGg9R3Kq1d6k9A3NRkha",
  "key5": "27xTkM8Kr5XT83ym8jaBNVnc3zMahfP8dBD8GCygyaERwmeTcWNH1iuefzGgWXXbzRwSsRn7jmJQgZevECCMmoNs",
  "key6": "6285apAkkufwWFYWEXPS59sxdADsjQfaFhTNPA5wfksmsSsDrBzSLm4nDcugWTVnicfsoUcknnLDuBBgRx24YvCL",
  "key7": "3tQdyMEBzMfQM3LXqfVMN48JQqvF32LA4eokPo7qjTJr1YkAgbb563BHXZEKxnzFkRezy6SoHret732yBh1ALZ4g",
  "key8": "2gMZkp6G4gUjiLsJ83yXRiJtQJSj44JrmwBHjMXbGWPWZR1bxdnMKcyAw2LjAQZWMBPpH4QLpMB8h6Agj8JbqQKJ",
  "key9": "3UkDfJRfFgLnr5n2rGgp9ANu4DVZD2tETJsAnPEPMfq22JNZ31UjdpVX9FpryiDvQu2Tmt8MWuXorx4m5ixbUzLn",
  "key10": "4oZLvMPvnDGxfxMreapnGbN2T3YE66ewHxzxJ9V2jCFXPjKGuHkKYGGrFsknvGvnQ4dQds2Kja7EAtSDj2ZySU1x",
  "key11": "2RmtTM5oKwYkxPsJYHe8J5EfZs4kgrgEa1KJL329tCFVzamPMWKGr5832fs75959brZcTMmGRQ7AHk2GDqtLCEtM",
  "key12": "4Bqu9GFLZBRkKz2aknbnPmmZMEtsa6664L1Ta8ufbhHgmTdfpcdcCJcdL3aCokRcqErHNBqhuzjobFHGfrpvVu7R",
  "key13": "5xBrgjzWkn3kknpS54ttYm3Dzg1rwT8H9PvNsChowUfMD6dchZNmnyvGLuZyimCnkVH43q4nuBsTtnHCXYaTnzqv",
  "key14": "3zTh9nVn4jQfKmnvgzjUkMmjfRAHykW7yb7sZjoUBVmQ3cnQTubK5TeBAFcU4xLKaJKGd5GuKm2jscEcfLjWiTd4",
  "key15": "3pWucUfZTyN5Ns7uGfZyC1q4sVwSF4ovGdRiPE5t5cg33ShSodnazRgVfma3ABYidCzcjnFX94NSHH6gbLJKnkiL",
  "key16": "5dzBimCyxiPL6ywuyaEnZifbrVzc3HrPDBsXJCvsb25k8tbDiudXz5xR1sc4eVVhScet431tSnSgZ3fNfWW6wcw8",
  "key17": "2C7H1qptPRJwCz2NJZ7mG4hEgckHWxwgzHr1v7yLvVQpSpUgzqz3UKeUCfEbGANfUFpVJ8mYfSf4nsofKAku9sFX",
  "key18": "3y553KLhHiLSFU1ydZypUbw75mbo2G4mmXR71xahaXiutf4GiS6PfdPSJ3zhnEGUeaBYhoA2pWjeg5RDgZijdY4r",
  "key19": "3saKzhrYCwzrPeqULk8nnfW4yhX45PD2JfGKjWJJ1dGkK5H6eRpdyjesUPHPuz8uDRymk1fTj7LEML4qSdMyxcL3",
  "key20": "trcJNRDYbuDU6L64PFz8EzubJGErhuzsciRmsiWjJ4m3pNUarKDvXmK82wXvreitMWkBCkFd9fhzofSVMFGjdQ8",
  "key21": "f3uynyBRytWuEUR9zqiyKaqRLR6EYQBK7kfEnzk48vqgb76auVBQgBkon3ibqZp7qUzDswJs5xBWYu7wHrWf97A",
  "key22": "5UFXFdXXkj2CDpBPMRNJSLVt8BTBXKmaF7rU8GJNYsJCngRdhNyHahHiqkzz7EpDVi3tvZ8GEbmVBpNyYDqSAhYT",
  "key23": "3xhCnJiLSj3FkyXcT9gL1b1r7haWiwABCdgaRWR4Jpzs4AHS8cdF5it3eqGhGbiFNjJQSgbfMNDssscH4mtBJ8rP",
  "key24": "LZZQU5e52Br7cqqx9bh6o5mPdr5xvKWSQLA6sxcVs3snfijduMNsaGyu96oNJVekYxaoq6Gbjby4Z6PLGuLE2nv",
  "key25": "2J2nQhjy6FotuPx3EA1n65GfoB251hxUneFjabRtq3Wcdehuj8F4g5JVhJ4piTYvMh1btq793msFF5oQK2oVoKne",
  "key26": "Q2yNY6DYd2CCtTadcorpUyXWGkQdVvmU9FN1LDzNYudnaEnuRSptTstc59UoM6p6Gt13WR79ZR6vSY1NvZXZDpW",
  "key27": "3WaGdbLsxoVKQWHnZv1xfukbqf9dWpgzu8udGkFyZHxoXLsyDmU6dLxWoePEMHUEraaMi1nhZMd3MrmgHweazGMo",
  "key28": "4AyZRn4P6EbPAhQ5ZeyU557w4CC6voK1sdRN8MFpoTboesKV8NMVKfRLEyFhLjd7Lk77eEaRtbgWkQELqXF7RSES",
  "key29": "3X71ocbwE6e2bjVe2Qj6eC3MUPpqjjGjAfeCYTAvKc9e4UmzkoGgmNg9qqoj5ddx7rSt4FzniUFrXVhc6FXmpBSh",
  "key30": "sXe4LCQU1RHVBCvFi4MxYvmgxASc5qBqVvMdi6y78C2XyBP1UCFdWVAkCn3RHSJomxnMDFPwxMebvUSbqLuYnUr",
  "key31": "5DNhm7Uk9vzcn91kYL4TUYvcTUPEHpzRr5gPm7Rv1dKTi5yPypFGvJcr2L4ZJ1YdMTA6mwx6niBdpUutvP7zrauV",
  "key32": "2cHFiHTux2Kodc7d8yrtBHXZNb7uJftDNdkzdxJePTcMUNVF3yBaEVNHW5f9BwXffrbvFiaL792T22fTn6TPwB4f",
  "key33": "LSoGbw8RnoAqWGt4NdPGVgzwA7iphnUSKAw9mbQobs8D98UXiPv8k7fD89bQjTbegvApiwiwJJ216fazoC14ZVq",
  "key34": "4n9MTBWRL7T3t3cG27AartpA4QfuKLjP4KZq8RdGFsFtnWnrDkqYNpM6mXK6erpNJrkfsE2GEedEvF1tGs8m25Ku",
  "key35": "EsH69KpmCHLbyhKABayxnjgBemD4vSQqFeg3rAgyE3g72avtoF64aLBx5aeJp1w32Ggj54BS3vVRRwMGoehRgDN",
  "key36": "49jwfKZLJ8QnUabQSq8kJVsekeaBF3PjRTcTPjgfycoupYhNFyPCwDTjNr4V4LuzpxxZ2Xg68UcBpTbhdX1mEEHG",
  "key37": "4nZPBqQGz5HWruuqMm4QSuL5zci4QGhrJrPKekPdrKxSoKgTA1qif3QeAarXwxQp4YNFzhYAzUZ7HzUvMkQ6QKzh",
  "key38": "sJW8KzPDiJFWsWxYRjJQeXSqr6Vsc4MJYxyNdPEmDZnPSXtmXBhFy9dSFXXRbDjp9jrtGTBwyq8tAUWze6kQZ1N",
  "key39": "21pgpGAZdAH7ek111LoMY1ZQjDDyEXtLdkzY2vjZi9P3BGwu5a4AV4kV5dBLB6X8fNX7fzqtsjcXSBaBgd3kbgNf",
  "key40": "4PRgSvoBH3rkZL9GSToJsJw1bp6cZH4WsMW27LkEDcJdY61GZsjbTzEAn4iFKqFtkPSDayJ9ooC4PDJQGXFEv9Fe",
  "key41": "32VHkcyvnRBEJbHe5SArwxK9udtVD1yZrBxGVkTFX1wVHqCo6vXUyAULt8LUcCyqNagmsNim9gTzB53W4qBLeo6K",
  "key42": "3Uzrn6UVTGAaZ9n4cmkrn1sJPj5vWVGBdMinQwM5wrbMi2iYAWv7s2R4FEBzdKvcytUJJxQHwZVuYS2hnHjuJsq9",
  "key43": "3ixRBaaAWFsbNEvpVsj2wX55tuvEGUZCgLxGHiRDPJTg9G1xspj9NwotqU7AZgVGwkcS85PeaTDHdjWiJSCnj4qD",
  "key44": "2oo79hba24zVZzd84scqUgSmkQEKARETMtaowN6EZcVRjNqDY5nu44Lz396KqstuwbL6avEhqGe8gdNjMgdjBhTH",
  "key45": "3QEvTTyZyyb2QVausjJNyoE6KZLLTW3T4et2EQzkZjyyDWoo7YBiZzPXpsZc4asMTttcGQokRktZLa53Z55qMzaW",
  "key46": "4119jVUaUcWJi41nSDjcBEB6ayFz9cvKxBYqKFoSVPpJc7rJ6i4UaDn6hyhWQ6t9k2Cek5Ewe4swCSUYxUisG9Zb",
  "key47": "5UWFjfMSi2yVgQBkkLcb58ASVGw2Tg6pkLQoBKR9JYz1uyQEqxBwiPS9Fd4WknRKsjfCG78dQVXYGP8nF4cymoPs",
  "key48": "3AyevutJrrnXg7b8RKadYnvzNYZ9ddPqSpudjooPikqeMBafCXqhoz3dkQMBUVdaZjLKpR8vrbopsYEYwZChSVY5",
  "key49": "1crb48amjE3LePozDxUJodMAvFX9vxE4HeAbojtFtKWma5BcJCQSCubsoBCMZPnE8jTFRsjfyTxeeecUSMCtYPd"
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
