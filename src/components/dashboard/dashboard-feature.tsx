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
    "2eWLL5gPMKMZ5fG2esHaHm44QQrjYrmiBSqnrmtM1SxB6z6i5d1rwpu7zzkJuuFF5yneWFkzyu65mTnTLw72pSBD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46k9pKCU3rv3rADZwZ96JKB27CesASFmFuKpRMG2hbxKcXH56wVbnKkvG5hShoWTCrED8kRUhtwtyJKEPhqFwQgA",
  "key1": "2Wxss8DrgaQFo3cyxraSM5js3PYKtw73CujtJsLFWkTQLdeDKEC1M5v7r22xmmFUJfcd7dEJvYgT5wqSumxAvfMX",
  "key2": "672SPiUnBsuXVvVPwGNp4ztg2DBKWJe2LCSgtZjb2Efigw47P6cKLM93jrLrVpvAtb2hBV6zAacGEycXgVbwUtTc",
  "key3": "3nLTasSFUR42jkTuTRTLPpemDjcSFsjMw76R5UADjPhSizaFVzVpUgA6NCxXJv4HzsLPHaUyp11zasU9hJciy7NL",
  "key4": "Pr2x4Zeh7Woj51zVb3ZPmdnrsaCmfreWe54Tkhz36p5XaNcgtoLXBqbmdT9S7QmDjeUzpY75LrcfWHnNymWQfaq",
  "key5": "4K4e2Ds5pQ5gYaQWTE7PgehHuSZbKsjXyFbeXpqchUmDCXEaydgDj8fMRjbqDV1e2nc314TLQau5Rk84bu9LGgbd",
  "key6": "63iGw6mWirwDKPz5MmDATqrzvWWMavNkHRaGKJZVoRU641LkpVVk87xJHRyLPE6AXVSHhzzVZaFQqK8cunxYTpg3",
  "key7": "TUfEb7QEi3e4cvpPskDJ4MEEKwVHNLMT6kE27yaDp5f3rTREaxBdFHs3yjGyhcaoVtrHTJq9RNp6CiTioRJgReX",
  "key8": "44hwPcCLMDXzYkojxiyvByvAFTfBKZVncm8SX7Z7RMJtDVi4rSqGw8aRQN8HcuXzAymg783yzV4YRfWVokQ7bV6S",
  "key9": "3m5aCq8DBwgaa3ij6VAWXV7oTmekf2FCSeXL4RwMgcoLJUrMDCng92hVRQwmTWcaA7biyHbqWzRGym7i9WQmKpy1",
  "key10": "HmmxCEj1tRyqREMBSg4NoBwsNd1K5dAA4aywkZu5XZQGAYox4d9oZ6CQGUZ4SfjJVWbPCzfphkDe3v3j9ixDB6B",
  "key11": "6wMr9yQNiaJ3Yzaqj7Ebmo55Vftj41gHmuFvu1oKdgovNcFmsJJFVHGDspyNHiiCX4qAkuzWN3mRJApZuSszxS4",
  "key12": "25bFXaFpBHxQ3YXnZXwX8xr8XoW7epW1TtfbA317pkPEKQHA87qRimFCKY2yRYwAwyoWu9otxqR1HjLjnDugP9ne",
  "key13": "HQcV89HnUEnf2cZq7b9hkV786mSaqoWtLFVYzRtomRxdKP9YJKxq7x7bNWDJiW2EgdHXTzRpjCoqjjH7EMTbFEq",
  "key14": "3ZuW9VN4wn5uqrxUXV1idDETxA783DrKSPhE7jD2FUgpBnbPbMPvZJn8ZfhB3Uswc3X4t8L6J8RHPY2o51LZd4M1",
  "key15": "4BB8JBzjFxXBWaoHRKu5TPfs1WdPLNxkmVcgneBtAGwt4UusomWwZdrtvjzcRaTQaN251x3bAshXmpg8ueMagbpG",
  "key16": "3jiom5JFH2U8Cm1SoU8ZL8GNBdVXUcedErR7njVPMBpRbYiaeES8hkoCQU7FkWNSS5sJjSscAyWRS6jnYBA3sc7S",
  "key17": "5mu4T1vsjTWQUpHGGfVja1RhsmNmVE7kgREJGMFUF63UfKMmiMxnxv9Wr7gNtmXZLLUzF3FHqWpAr1ZdBRhCVBds",
  "key18": "4cG876JHAigoUzqJNjC19RFdqpMFAV9SWwU1GafdqyUrkbUJNyrzkR3jbgujt1QYcE9gdpEMMD4AbKMbMNYLb4ZZ",
  "key19": "2FuGMFyb1WfSirBrNsX5KFAfmb4Uruzwrc2gQA9yiMoMyHvo7ve3VgEXj4ihJouRBcahweoafkSapQY2z4W6AHVB",
  "key20": "3sVCXTaNnkF3uaTgSFANNh22RCEojQk8zHsu4EdBCvDqMzf5xzazBCZmtnCZhoQeRsJM2wLZdpNxBm4NMsnmjgBK",
  "key21": "5rgh9LKYpedCS9VGypXDWcc5Z3thpEEd4Nkgwts6pymnAKiGbjfNWzMgVCeN5iYNghUDwaDWuiAzz7aJDfopgF8U",
  "key22": "32KY92PEy6MipUD3YnWBM6uEUVVYUv6N4UNdhhiffS9zjYYR9UmrzjuxCBh9NzxaRqYVr5fwa7JPmj6yy1LrnGw2",
  "key23": "2EmdJeM3uEPTqd3dFBADyqw3VJBFRyF3WvvdW5wLJahRqCYFHWVfRchwaPHZLTz7HcwKxeriGf3YMEgFwWgAE8Qt",
  "key24": "3ptLHRCcRd1k66HdM83VovoquVdEZkdJjnrxVkTZ8PJRmqbHQEtATZmojqoWAJvbDybcdep2fsFuofakyqaPRTDY",
  "key25": "4WMfxEECTxNDFLJPHwuZ9ax2joCYA5fLz7rxKjTAoxj6vWB8JHe4kEMw55513czbKSJ5wBrLYnME21eA3UEvbjs3",
  "key26": "442KgoQrUWiw2hc8FvZyhXubT9F5qFkGnjqQ7YtNXsAp5iBTqtWuvSeZAEQKBU4TeuAJS3So234fn9RwW4HWcQu9",
  "key27": "3AYCLD7R945f3dd3QcDsc7FXBG1wF8y3YQaAdwLWUS5tsy9MJ648LBHJstVzDoANrgUzdTsn1kCVVruTU3o219V",
  "key28": "kgsKTDgw1zYKVXukJWnKd35iUrGyafgLuXgo1p8vgVrE8P47B6SYcJEZBhHQc7mGKCottdt4naFtixJh5qNW29r",
  "key29": "LxAUj5fVWRT8NSHkU8Xg4xrVTfg11t8KdA5os3otneuS1vnmB5VUgssjUab5GzQxbFVK39S7vfbknezEJBFYrWQ",
  "key30": "4ganVo5sNFhoPsADmd3BoKNJezd2pQFCKgMx8omfu4sqm4awK1JcQmdaDexK6yJdtSiFvyci4B7M6pMKtBc1X3wg",
  "key31": "2U3o7zzdVoAbqjPfNMFavJxhXhrevVrfpTYLQHFBC5ziCuFJw4B3aPvQMkjjj7wdZLWPCpyeeipxf7JaWvu766X2",
  "key32": "3W9MtzsBoew9meZSGyKKD4CMbEwyRn7HXAhksBuHE8eNxsK64122wBYBynqpCWueJrNn7bJq9K5kcEbMyMRUGfZv",
  "key33": "jtEk6PyZYH4n498LEcJzUoT2QAo4yuhuQt9xFx6qoq4LThBzbb5ESP8GQvxjK7Zgb9Si1PU4UY4D5L68mNXTSpr",
  "key34": "26Q8Upuj1gToj9bSMFutwSsXsZrLdVWY75Z3mhD2oDLxceTw8UiJ6JHeqf6auE7CudocG2ZyD9SgiaxfmGnwCqof",
  "key35": "2ZLaPU5or1agXCPWPq6kmEJ2a2QGRTsG8kXSGYk4giUDKWnXkbzvDLXcsrFK5rQSmx8H2Bz6TsVnzTthqnvxFKjy",
  "key36": "5eraphB51mSWthcE76gjpWpJnrnbvSCh5QBmvtaGC73DQVuvcT9E879eti25RgqNt75BnuXRwxHfF7s7a1q22s7k",
  "key37": "fCivYU9hAtZVz1SW5BR8r3QBJj8vtabCK5NPqHgA231eWg6Mq1YzeKHQ512RioyDwZwUHtRCXUJ3v9C2dvrrNFg",
  "key38": "2suHoT6jMdTUamoyxKZVVpmUFq7pFy3SrQurzeEo1TasVG5iwMLgrgCM52Act2brxpzhNDuqZtgfrLeLp2tD5Rg1",
  "key39": "4GRx3KnymfqKRqQvkskZmPJdscfpL7zn1E8LwAkCiCKh5jBvKy4bvAhXVnFhYFMQAkrDHUq3Kaxi2kkAcqkne8nY",
  "key40": "3nUAcGYXPWGd846CoMNCR8rdm9LdBedcbpXK5t146nznTXcRdbeoY1Kfgt9gfVBvVTpmqXuDXdtbkfxZZdj5ZJKD",
  "key41": "3tXaCLThWsCKfRR16K1nZJpKBW4syAU1uKThCCjs8ZTbZJaZpVcqGWMukriKugShAXuKLsgAZtvHn1SSLMrGuyjm",
  "key42": "nU7smwoQxVHT3YtyD5ziYGTUudnHTHktGi2pMhgS5PEecB1BYSK94gWLhG446RP9Ds612bSc6BbWQPVFRPEn7cU",
  "key43": "ronPK5XRBBp4aFehRXJTaU9YpoSM9yt2UxDR4GZKZ8N8G2FXuGu6SDZKm7ZsUpkQCsTyALaYyfqerA5iMreugGj",
  "key44": "2rcfSiFfGUFJhXRt3kLXYXdqit3PvMZt8UJfbqxyZbBnXY8dHiZ13vfd8EjU3xcacN2699hpv14iztqT1Gpc6t1T",
  "key45": "2ApuvagRger1gPJvAwXgKxUaMfETjfyzULFJvTU1iSpmnYvF5GfNiBJoGgv19SPJVgyLxrKar5W4N9sR1jRGvAB9",
  "key46": "261vdpPF1ZYysDm9Q2FL4NcCqh1Xeq1AvHX1N3mmuM2mQJx7e9zhTHGmm6DFWgt7qjCCqt9QM5irMtSv8nYn8cGT",
  "key47": "4sXzPrn9kxf3DTLA2uRjtYSShvJ9vmR9Ra23D2cSCXPd3Wvsk2mJw54gwWmnYP1GY1eCG66KiiZzQ7HPTst1ijZZ",
  "key48": "4C6pBssFBvsBXD121aXVczDaKJSnH4pGAdL1KiwvDVXa3ULhe4jgr7mEKTGy6TkqAtwNLj3Zf6zj8ztg51J5pfzH"
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
