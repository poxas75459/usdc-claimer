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
    "4dCdeEnodoYKe9WN1kbPtWh6S2XucAtQddrbzL6UmptoRuwm7ygR5RmpbHX8trzRphnLdbDS4RJynPXNuu5Z5jiz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DdE8fxtQSNWtYsFDMpNU7HE2WYj6MHiN1foqgVBdPHykMEDLJAPcUEtNN9bVgqTTkVTrFpn1kU4dMjRQZrqAhqp",
  "key1": "cjeqeu3XzsbTmki1czpbPmSpr7cUfs6zxZ7dzDU1n7n8pD8ZGWwsWqSih9Awcq4YYU96gvy89c9j5XgdqR4dWVT",
  "key2": "5YojJnLM5SVsXhzN1sqpSp6oQD6Qeqb9mrVPuEotcEBusxGf4RqDVu4TKTb8cjtRcGfhBBQyE395C3jgJH1f9pYF",
  "key3": "pkndfZKGSnyk8xeqV75JwsNxchRAQxM7rnS6fGSZuLTmbBTZnHC7bVjoLf9A3nPhKGbKzN5xB7r3CindJHSkYxt",
  "key4": "2PA7RjF28e2j1qodP64dDezravufPZom9Frt1PbQsssd4yPj8Q5kXTurdEapbXn4jaHSD2edQoa3H7ee5ZmarMvV",
  "key5": "2dAi7x3q8ez5HS1Y3DzESDQ9H88sQjLjHnFL6mo7T8c658JHy1dUZpsEey48vkdaZcyjePNYrXtNUTnrwvkfvq4F",
  "key6": "zLhMmgJpxk6DDE8soXXpXNAQfWB8ijFgK9oPC8nJJMU4qSspSBinPgJr5oRjYKaRXjd7fWiodw6fUbsrZkG8ox6",
  "key7": "1ik5RwSm6CC7Fa1NGZwnFVUsVNGnuq4xRnPSp1ktVKDTMVmDDUjx7WfziRDoR5rsZh4ojGYQ9uXpcdpsay2o3NX",
  "key8": "3DcaJPt8F9V5giRPUfcYij3AwdSt6BMYTjCEJavVAbQRr7DbWssje751xuFcdfCCSuHJ6KSSPqTaKbApFpsW4yqZ",
  "key9": "wSHbyJFabFdyhsKpz5erXbknK81da2b2ahJQQQcnHsLhh8aEvvS4TeS8GQfNSfarN4wfxGNugEsBLgVJ8kHByeW",
  "key10": "5bvD8YoAWkA5TdK4Mw4CyWzUk2bLPEXkY3WAxMqd8S4ExsBgaLizzvnpjhjjDRgzKLn7yKW1EZG32kmrSh62JV5w",
  "key11": "4GfL74bUP3HjzkuNhZMJuBJnrzyXr77HmvHK5k7oG8jfQ1zDVf7quKcjCe7QRh7NyBdPyuEaKiAwY7MHHAfkHEkG",
  "key12": "t14Fsc8kwjnX1Xwm6SC496udJM9nwieRypLpo5gdxXjc7TVTo8EXaN8SJUaADGo1hDWb491xS13bKz29ysS1xdz",
  "key13": "4PXrimSjNxFNheZir2jRsBWnu6Ya1B2DS5NYemnSM94eNhekUeEY9bQ2qZeKH9mBvTDuePmjCVWCzyXHrBeh6b3r",
  "key14": "5u6KQZwW4xdqWkfmRsfAiJo7ixgmwnAaBYSTm7gKGYSZgFgY9w5gRDsSqQiPXQcrMd6Nk5kcVjTK3tQ4Xk9E6aqY",
  "key15": "67iNJdVUSyXHK46PZ7urv8od9kuv2KxZsk9VfGgag9wmL71cJCKy3V67nLFCHgsP6wbiuiUNthEs1KSa6f9Do5tC",
  "key16": "5CMDeDYcuiPNJLqd39yELt1cHhbvSKPFt5MwVcneNng71SkFSL2rAJ44wMSrYCRhF4mLmmcnudNXhvWH89YL2z1c",
  "key17": "2J26LJaGVKAzu2bqQwt5d1VLWvWTqMf1Buu7kVVDF2owN3aAeUrfgntC5cb3XhSMo16aBEodTgdCJV1UU8jZB8zq",
  "key18": "3jQ9CJNmAjKR1o194E9qPuseSnrEWiwyZnteKjgVxnYApDj4yBMRGpmUMiQD6TSPwmSadLEeeT85e4HemFdhPezT",
  "key19": "5Zxhz3TZ5f762GAnUoGEMT2Fy8vSgFh8wAqLpmDHSft3hXXCe1Xu1WzoiyriNYKEAUf15DmdkUPXABLR7xNmXZMc",
  "key20": "3zTT3RkBjzCrzz6X1Awv6CzStHuYjcvpKrmfwEzugS92aYjaFNS2oBa6Y7FWq8aPFAwEoGNNTZ47sf8tPABZTsRj",
  "key21": "2GRWM2HYbTsUt3BuXcXZAEH85xFpN9hyr2ZFv2oMZVpET2Ax5ebmYCr1uRN5q13xvrhqLAKAY7FcTmWQsjtKcx3",
  "key22": "5gutc8SKzhQkwC3eauVXdydbAdckPfot7bxXAGGHj23sarcWtHtk6G2sEdgNTmjtAmMxcHyydDNt6mHbDvgyRcSh",
  "key23": "3S6dKqcZ1MxQ6CUCoPXysMeD3PQa8rjUG75NX9pbFbGMy2F7dzdvp4yDVgoJ634yegNWJn113XTAxeXGhmvoH3L1",
  "key24": "5bFKVzJCDHcA5vw33XobuWpV9vWmsth2hJaF2ZKuSAtaiMpA75AQ6tZ9rtCujPa2rL2KH9HDrXuguE3JpL6eR6D7",
  "key25": "5kMDHHLw3nRVtrtENDNhqnavJVnroR3xkL77RBdrEexGV2fdFDK7n3pNhV8a1pps3aVLLosKMkGiGnizRsBrSAze",
  "key26": "4TmAQwoW31h3AMLJZQyiNKdiRyZfVzG5pW3WXQWSjAjXY9PrDzi5QESdpoKBUb1b4pF2JvvtpykprDze2SLNWCZp",
  "key27": "34ESWpA8ARf4bjRTrjYbaSYtEpuM24EjtcBQzSNJSoq7u8QchyvzXoupWTMq9FhTrTqgMW4nt18pwQAYwgr9MAgq",
  "key28": "2BZy2TLnicoi2R4jtsDNSa76BssFjPvZbsguHDU4fnvj92ytKjHhwREM6MkTXfkuXVfW7PfEPB44tFJXkmb4mvmA",
  "key29": "5wvfGqmuyhB8zSgSetpj8J4pmVhbY6nJfTGqoAj2MnkLnTbo8tvS8rRJpr3FSL5hRHfENdSXpnwn4qeLw5KWeFjE",
  "key30": "gcDDq2WkVFakWA5g8KZTk56Mzz9Wp4spmn3QziMAgui6CnYWbBUPMeasDtjRNZahVyePZuU1WPhZmKipG2TdaWB",
  "key31": "4i5VxPZcUkcQzVuXkoMFzekE5TAT11f6GTdLhBMBAL8cbpFCfYxRDSSjSDV5X53tuimdg5YYJBmfrZhsue3Vt9UP",
  "key32": "Z6ZjjXho1AakuVY3vaTuqMWa5SWk2EDuh66htHo1RGz3uqHZPBfZZq2SXij586CH2GASW3DRMjvGCt28XwPN84b",
  "key33": "3VEbQSuu6WuMJwXwH2FFLrf4gj16MCe5kpwcEyPYDKiaUjbeoaaSFTPweFnsYxBZbeDPwx8tViTW3vb7LiZC3dUw",
  "key34": "2e9j36EfEjUdN3yGRcHUkF9EftzBGM5D9xN81NXj3LKdUYE2WqyBJpU7hgVxvCeNLJvSJ4BxDcLZSrBcJRn3snvg",
  "key35": "24gBZVm41513zwjGg7eSYSRNemqhKcyA6KofipMcNusqkmHc5hcZz2tFHq4264JHfJ1VC1ft4KZYAUvGvrsL8ZtM",
  "key36": "3LFvwKg7F5zQ3vVXh9L8qLBb5s8tpw8FhnUrWtgfASF1pmV9ZKkDFcQ64qRGW9mDTamPuEzPpg8FsCNbB1LECUX",
  "key37": "3VHwxzvpAqPRZmTUBZCxT2naoh1JYafRZnV5adzH5U61jD2LeRedyw2Eo1battK4HMUafLuffRVSvz26mdV9UVBN",
  "key38": "2GB5356YBmrAPGJfgc2u1PQiqWvUnS96CUMfzQFGrgW3BJf17pms7kXf6MyNynfpZrR9eZJG6mbxTCoxshThKNZs",
  "key39": "2kqhxVnKetLckmYdBgVCHqUdJ4o9wE1nfsJmvz8cUJcXphpFiqCrS4SRrc6CPV6tzWkfBZUCGe8FxCfT2tu3YszE",
  "key40": "61xPEiXm64eesSB2nsSJtaB9VaH4T73JxjypU5skAvwNMqP1NFN4PgaXCXcBNii5gMaqWc1nLvoJEkGWHwSNv8Bo",
  "key41": "62EixD4gJsTtwJWFFQdicmJRebJ8qgcRsngG1GfNyzSBz5Und5ugyPj98xgz8ZSVLe48PCru5UqaiMhDXofuQ55S",
  "key42": "2kfEUgCSnLkvDM1faL9ATj2n3hapfoC6TmgqmBs7kfZUut3q3CNTj5HARxwciUFoUT6DNimqT2RXQifyaMARtR7x",
  "key43": "5y3KApaCKnviKCvDHK57zB9JLy4X1RhsFT1QMbtvApzW36AX6NCfTJWnXJftVx4NakoyQJ49WiyRxp4q8y6nt34V",
  "key44": "5pFpxpQ33CbNhChPK1mT2Raxv7fTSyT12CjHHLDABseApNLY8wmjet62EnUiqPtnaYsoGpWtJUUf91SbbeNNJetD",
  "key45": "3pWB83ggJFMm5e1xnYwxzVF56n7BULJBYub3AYgKyUcNzfPTbRkWnc7yQL1N4GpBWNp44Np9vH64SQdcy63M6Hzj",
  "key46": "4ouuVQs7BwiDq9YWotjnvotFYmEhdhYdYPMSdmzgtPa7yuxxEZAbi6V5w1W6rF4LMbeLcPR75qdXKkBPyAfCfhJe",
  "key47": "33JpyD8JNYA5Sieh9wqFYNzb5q9PEnpw5Xh6rRSD4U39eLm54Rq3D2kUiVJdEX8nMXwSuce7yUJwVJA7fhELSX5F",
  "key48": "5PDppQ2G1G47X2zxUQeVuS6kUpCyUqXS9tP4PCSDdR8R8EJQnG2Gnshi5ATFwfBv9LZ7zaLFVVeDW1gFqHnJEL3T"
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
