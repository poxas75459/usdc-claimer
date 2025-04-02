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
    "4pHJahtVw1KG2d2Le7EbRe9wC6izGs4gAWW6Qt8yT8kpu6TDZe2MfGseCEkGH3eJF6AXQW43969TDPMt57KgQCoM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sPQn3StzEtUdFYx69HJgMpMNm9T7bcXxNJY8fNayN86e8Q461qKrS4xUnQnC5AHLZSrnqAweo4AWu9onsRLNnHa",
  "key1": "3UfP9updgHpsdw6NsVfdzJiFjmHPUfKVHnoNprj7fyAgAtKJq8RQBL2td9DhbWh9Yip3k4ozjPUzfxW1kZ6MK6sd",
  "key2": "AE2oiPGcYz86X3iMmdgX4LR9Pqq8w2xTYXE9Z6a86mR5RKTnnGLVV7stvs3ZgBSrAKbFe4D34vEfDdfV1erQr4p",
  "key3": "5G93PDtL9c4164P46XLC6Evhjapq8U2u8bZAxKudjGZLsbDmGMTJkzvxDdY4jP1aTNhueRVwTeJnhfPSTdymu3mN",
  "key4": "38Qc4TvJ64EjjhFEeFG48H6PgMNE3BZ9avrXWMmvTWomd6fEHtWqdx57izKGRog1bg5ARQtwSBqwZV2iAqCT9ZYZ",
  "key5": "kuz1fhM4dNshdy4XxxNmBCzknEDdpJD8DtHhus9XRVnkQPVWt9c2uLPgbshDPboRGvMfTc4RKXpK3QygkkDhrQb",
  "key6": "5RrsGZwrBAjTC6SLy64VgY1Q7QGZjmCypcKCacC7DPLGxGLzY37oykbC8mHyvsV3rqZJExjtZbNLpRqf7zcvBE3o",
  "key7": "2shecKuHDoAr1e5yXaAtUrppWZzEMmSikrbucMfatBs1vx6AKojJGB4AhtgGPrNtzCzb1aEZfoATsBd2ch2hnZ8i",
  "key8": "3PV76YLSvsFXsYWLMba9zXvcdvKMMQmvHJ1qAUfo2eUAdbKT5P87nppJRQqxz8kBrQFLH98t6BM8VQ5dZQgYMfUh",
  "key9": "4HNYEJ7vLdpKDcnHFd77MYhbrreJ5gvorZTnnnGusfvtairzZRRZ1WMxUn3GGyc5mpxzhAc6D6NRz9HCrdE56moU",
  "key10": "3NxYYsuHBdb6bMEbB4MjUc2ms3wzeTCLNYrspoCMPHHLK95JdPoqXpxH4zndLi2ye9ubbFKqwmN2rfjVnWuedJUE",
  "key11": "5y1pxzm8ktJkWT4WDZGgRjNpiJ4TFLQjCFqkzBfFqspa8RtqshGVekxjuM1woH2omzS6CvEDLJRndPTXfBLT3Ug3",
  "key12": "PhBwFurKDVFFh82zdVATrZPV6oVQ7Fp53NPjMdguDvzxmsQYRyJBpfxZ7zDjkM4rqvkFBPiThCpUia7LABFRM76",
  "key13": "4aYEfMVqkG3FiXr1nohMpa6szyBLzTdSNkh5X9RXa3x8v1M2VqKUxJupVsLLWM7CnqXfagcn81EZKFYrgs8sunhU",
  "key14": "4XVEdvXf9Muze9qSN7tCyX425Nwc1bvBbC7NaHMYGnFDSuZLAexnUvzov4REKLgKdVSciQq1BXC6d7Hc4MoRZxJ1",
  "key15": "61NaQQ7fUbw8JZsV4HRvf1ux4aAkJH1NcvDQBNAsSpCQK8kQEwkckGTzqthn8ZjSMEYwUTQGfMjFLcAoPFu2foMX",
  "key16": "4VWpyVQMV2wrgjE1GU9UNNN9mVi9FDKGfPSgNUXSdgr6Xxr47kd8FDHKFpc5eVViRXq1DS87zFCg6YbshSnJamwG",
  "key17": "q1A8dv88dCTHzRkCVL4rKdFGAviJNQx6FG4Mg9p1xyjYNhc3roZc9pczWXCmpUFvk1MHgn4RTEtkACdeAasLt21",
  "key18": "2xkKLzP9pYuo2koxbtq9ySoHKKRiLHuqJfuKZw5qydJNe6F66k6QWfXANfBBnvYJedqraJHREnoV4qoCzbkLX6qr",
  "key19": "5br48KP1Z319j1fnGE4sRvFEMVZzWDHKriRvgP6LoNmtkhxZNuuit28adEqx21FkiJjgASuVGqYPPQe8JGe2Zh88",
  "key20": "MMatXUViT7SUW2mAjFbJ5BT236sT2qFa5ySMMdKJs2HH8zXq3y4hasm36D8W7Srp8SCadR9PKWNQjWbCnNuaFys",
  "key21": "3fCukyU8ZzjnFSDgh283LgNqniGYG9oMyz8xhieu7sPeAL2DB7qY1GkZoPD2TTY2K7bJEyVnD8YzJgrdffbCVz6B",
  "key22": "5ynXpCpGp4ab8iJtWGb4qffUUNXswsC1bhzuMNSg31DjNAmGA9iz18aTjTSjF9GFqgTjzoDR3Y1RWx6ZTeERginC",
  "key23": "54vRBCsAGe8VdEDTDvP5djAYZvp5U8mvzYkCCnzYtsKpxR44wWXS915HRqDAhxgmgd5j7uKcv8nME918fVobpMNc",
  "key24": "3dNw6GEHGFstxdggnVYjK7fviMJrw9z5dywh9KrdvK7TT44kYqWgkzW9gGchbM9BBDJSV5XRWhSUMuHYJyBwKDfz",
  "key25": "5ahdumF9v7WJeKdBWkbZAfgN3z1e6AHrrZANRVnj8NtRVGHEjdJjxpDPMpCrHPoPkz4RVzxASHM8s4HNRW71dWjj",
  "key26": "2pod7LFz5cvw8SyNuQ17K2X8QSDf9J1Jj1KgLsxFV3mNkuE7cXghw4PzeU2MjQ3UWCdg3NuAsbtufCuC1WxnemZ2",
  "key27": "5kERU1PLUCKJ8f2YWX1BHoWLtucdUSzSyAjtKCEZn2uKCf8AqwFspyJDsPA7W7cuifMMy6UfL6ob3g3ZUAxvqqYc",
  "key28": "3cJF86Ur7zBZg2e7cBRkd5EDmmCLYULBH6ivs44jwRnfWgxjVMVawYZLtCJFzEss8AZsUjtsiWicvmPwDmqJ3dQT",
  "key29": "554UsRSx4VEc3GEjAaxonPhDZzZj82Mt8Jvv3sLQtTjoyehi7QPLv2GKkiQGkpaEydC9kWjV6UNvqmFFZ5M8cCeQ",
  "key30": "4pZShtZJD1iW9B2XfJwiZnB2U6oFCVPjhDnqeL2ePW3uKSkYgmjSNjLPhHLrfPCHa4G6ozJgLmwUWoyV7QBumVpc",
  "key31": "3n62sN5oEY8bV4NSWPXcTVyYBApQZNGzRkXXDwVnNf2tj89NRY5DcC8MfnkNrFbXzTWaAKvZ5S55YjovQSqUz6G6",
  "key32": "5MSmeTGg5QR69y8Fanzbu3tpYW5JwAZiwEDtS3Sk9ws84zyCa8dhYhd1YX4vfEBJE2tKpqMm4djaeVtSwxUNWRHb",
  "key33": "3QBVxt8G6xWSgQ8p9arFM7o3XAKyPXeA7eujikHXN1RkbYtttyx8qwKZK2YegC18iFPMJ2QoynfEbDGwm5yzaVsV",
  "key34": "PQHG8ZigJ1dp6au68DNiuctNDeX43PB5e7bub1Y7b7PX4P6vdvLBDjdsxsPPNthTPtRBnYRu98phP1trK6zQoWk",
  "key35": "5FZVJRTF5MTkqucNh4GA2ZG5qCqfLdt2YpyUcS9xHmqL8SZbb2yRSMm3v4VhaYR4VsN8X9diFbyegNi2GfGWp9NP",
  "key36": "5tUR4MhsN6uCz5As2mFDGfWQ1i6cZXUgGs2geFagAoBUarN65YVXgNQrD1Ee8DQE9aeuvFHd9ruS3fKRg5FZnchE",
  "key37": "bXKdNscGHTBr1JGDpK8CcdwFxceNm1ii4YVpszx4HBVZfFQoDfvNX4A93DwgPRmv3MYKC8q66ZZWisJ1yduhe1h",
  "key38": "4QeL3BKvN3ovycHVC3dfXvETBm8SdTpPevToDqHN9sw72ZeJU16Cvnq3MHtmC4HQW72dPtkB18XnJAmm7yCuXPvk",
  "key39": "vK9xLMspTGrSQDZgpQbKWq4ZAQop46UXovQKciszJMcgpuap4aHEAUakTSRUtQXDjYegQ6HW3a67SZfjYV418Ne",
  "key40": "4p34vhgxiwzsJWWGaWK3LXK3TXTFYtwhCHLDTGL9nxCUbpBYV9UBqF7e8Xbs55PnsdPM83HoaYRMmwyQFPn9KJzR",
  "key41": "4H3FAYANc4NVbVkUanYQb3Zeeb77Lpw8ya3UrSA5Tafu812UuikRRwGYN6ChLKo9zdUtv4Nw6oYXQSoTbedUgCmE",
  "key42": "4GRtULepbCfTSxFjgvb4YLhYSfjueSSDXnfMUphNNTBFUQNiFcqTzmZqxBn69oCna9VFiCv4HpjTwUDzMCgJK6wr",
  "key43": "5hzCGvMi4jp1dvSie42fXfzxJMVasWo2RxaVZWDr8jJFqtj8qAiyZWj8F5Fgaoet4WxFpkjiM2tivXDVMRdHSiEf",
  "key44": "24pNfbhT2UujJX3kkGS9Np49tmpCuEAfXoZ3ZvKq562j46k4N2719RC23EJt4Mif3Hc15GSbUfYR1X8ETD4jQ7rU",
  "key45": "4dYgBewMWpNnubZaHjvM91ruCurV8SKsDuTyYouqv5paoNSNmr3nT7v2NixP1DStyTeh7DsQLZX2YdHQ4z9btzAA",
  "key46": "LJPRwdHbahoXhA14CUnD7Cnspt8RrCyCLZQd3fuTTVvveTF793qxtZTjMCK7WwgGBdQLrJS5TwZQJodGsakA8Ee",
  "key47": "2DcuXU12DtLfwK2VrmV9FBWBRiZV9jeiYYsWzcgdqcpxqX4sJrjDLHfRTXQ8WNzb7qLWUA5AqhiybjSioNGADMCp",
  "key48": "4fraF6qXJAVVWpHxeUJ5UCvQDykmDB2nbtmaeQTbEPadrqQBAcHK6HrtfVdiLdFoEWRWjYZvErAo5B1hs3kV74JQ"
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
