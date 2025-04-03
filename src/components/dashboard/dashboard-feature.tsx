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
    "4PzGuibcdgwPNhSCitxPKrr3zvAkHuSZCsMbTdp45RnDhTMhybmfmJvqP7At3qQ9ywCkoUSnZxSSfyrQx9fejNdt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "83Afn9qsa7anyP7LqqHduDsZDKuAQRzfZA8bq2aJRnpGnUn327tYxnLq8EjuMU4UhJESANsNL8EZhAa8rXufgHp",
  "key1": "5dEoTCA1J25DEYPx59n7b2wGpGAn9HqcNUYV1DEhNbLK1QV6GPAnyGj3m9BuPxH5wzpRVoCsBC4Aq7tpQCoonPeS",
  "key2": "44Nun6VMJFmkhgDmCYs41eViFcsoBW3tvfNkEgXWuNjYkZfgf6qC32etd3SJSZNxerBY9dym9Rv13TeTYM1PBtiw",
  "key3": "2D6tY11vtHfVv8GTQizcyyiQErh7TfDWzd5WSRJgY9f1bVS19Nt2edC93pDWssD6YyNsnB1V5YzEYJM8EBoA1TK5",
  "key4": "5unVcimnYB8qsaBmJwJ2d9Q1QjjyUzCR7wQjLVAcqYahhMdeyUT67Snkp8S3kzWGfonbb62JRsTs2VyW1tF7TDy3",
  "key5": "2h4bGc2baPX2k1DU1VNwQF6Qf18oNsfpLnG6jivXqawGKSkxntrQ9nXvPcD63RfNLV1svNW4ovVDfqm1yM9KTqKB",
  "key6": "5XuusecjsrHz12JFut11x2oe8K19GKi8a8t6uVJ7dTxK2XoW2BFNEj8tnckU58PfKUC8wB8BxyGULVmTsYmekh6z",
  "key7": "22vgPwynkX9jpNj5odN5DhS4tuU7V3SKjeECULiWTjHiYfuKgBg1fHGR4RmHzbt8A5eKqrSULF8DiPRe2rk6fpme",
  "key8": "CMcVQUvucnuVouEgs2ckgr71uBFACh3TG6HZNHpXvMW6ggLFeZmSRJwtksuqT38Az7gjZYCKL8DtiYLgqkr9QCR",
  "key9": "wChaXFP549o3kHAWZFmuDVytHAiyetZjv1mHdPqt5EwhCDjkt5MGyc3tsaWeF8voXgpo8Kp2aAD9y2U1BTKPsci",
  "key10": "4DUjUP1SeNqoEL39Wginoo7geR2w9HD9VVviqnQkfaWkTWa8yjt5mVFGBuixAAetrdrBEPdqrmv2gxB5cWAHqu1f",
  "key11": "2cNqSy2jp8K74g3rnZhuLfTxc83bNctgwPMkqCwZG573xo7MYkVDVC416o6GARYy5hDfdcy3xf3NWjhaBsWakfes",
  "key12": "4MF3qcisFVDw1PbUTyVprzD8WRD3rLGe8EkM98joJq2WoAQ9GbbQYUYyVg2RbF628LEnQJqHt6ZwDwYCdwJMymVu",
  "key13": "65a53N4FzPSbSiagsqGikPf9Mb4CGwiji2jZTT7j617T3hLyPozSBQUEH4t1Jnrv7aeszr1t53NLR17SWJC4ryVT",
  "key14": "Qkr3ziUkbCrhcxGnVywjNGhfrd83g5Qi9titUJ57XGBTSCzjZPZkcrG9VVw1WtKo988P2ReKKM8CSY89THkBoqy",
  "key15": "2BmEEa2CQggrdiSS1N3SnSGTxXWj5r7ayc7mr6aEReY85Lquw9YHKeyyAEAq3NQA2GHxoyS4Edb77tKkXJ6oBvJe",
  "key16": "3P9C5r6yYzcpKYqsmCE2htpyV9HsH1PxsgYjvPjAv1A2udrrhwK2354e1s7j1ALjRt7ZHKb9ZNUURbtfkJ5kJmRG",
  "key17": "4e5Fyd7Qm7TWzFbVU5fgkEAd9gqvF1vcvD14111otGLfSaWU9SrXE6UK9jF3ZGDRQkqr3kUzNCH7HXUaKQXehMUx",
  "key18": "2EUHixS1TbnzWTfXHo12L9iX6Y5bw25XAccBz2GjGWzhe95u23gTvnq7ngYLG2FLQiPamLsyRUkCHzLrw5Z6VNW6",
  "key19": "4sZTrtHK3b9dbF3JR1THRFmW9iBGGCJf9Mo2uYz7EaejogtZiX7knNQ8vWm4u2iP4QudGSuoETrdymdxSLwGbMKp",
  "key20": "3PsoFc9TWXjsCCAon8d5MpYuzCwGWUJ551dLphQgHjrt5f8oKntWi5GHeF9GNGzDm1js25A91up95rL9rA8mzPdB",
  "key21": "3FbeYm46HmvofZzhAmg6VhReS6rVQz6zBkrs8ZFXoY7vWr9CU5EeBZ6bx9L29kqqa42mdmBtDv9scLy1V2eKhVy3",
  "key22": "59YiyyH5hpwjoFC9YiAoy3gBLycy4SGL93atSj4SCgmFjQNBZoTUVSPJ6pygVAHmkDPtR7N663PUMYMnZFaHHvhZ",
  "key23": "3vtxJS4J7zZ9jmtXCVkCsUW8557qrbxubsShDdHNmx5sCYqKZWuC6cB7Ls6XFjPct9qjZvxnEvetjYbEN6HxwmEA",
  "key24": "5uFEQsjBrV1wULudWnu9DAPBaFBBdrDcpzYVKgSUcCjxzxrGWigkWU6p7vhEdEMabkdehPKxLkKtCWnRDNHZaEna",
  "key25": "2ijQCJpPgxSUwKSfeRBUyQRa4gm2GffoagKnYGSvNYXa8CALvN3JwEZSyehuK3g4FSPUGDY6zDnETcR7EsLoybHz",
  "key26": "56c1af5R1E19c15iaZ87MvVsiEksFrm1FsEaGxdd7foS4VdvVTCowcxCsrFUtBwAyrTjAx7A2QxEjVWcuhKAnGJj",
  "key27": "2ytX6k1gDS1s5j4cVdB8dgc7Do13ibGxEAvuyjUYMvL2ReMWKKgABv7pG7WN4Totyrd9QVZ9TNfz9xE4UcnqMqWq",
  "key28": "4ng9t4CxQpe7GQAoot3JpUEJkQKN7sU6TA68WibEGiZj5qsczi6KBJXivBqFkjWJ68ucLQsN5s8m1CsMzKc9t8VS",
  "key29": "5vtiBLJ9xdGqPNGwtdit2N2nbcxscHPJbEJ2B4A43u7tKz5i5xYhyVmxwGRzwCXNvQirKoPUw4wHFfZ37bdSmkr4",
  "key30": "3NJvwauTE4EkEM3YJb9ur7TrTRj3T4bX6vuHHErcD4NebWNhCX4BJ4hKmgvboNxyaTrjzs5vaktphFJiS8mLhRNq",
  "key31": "f1EsEtHpH4UoYQST2xEkp8PnLCoio13wGJtk34YyWW46eMxTXK358nPbp7784vnUraZdK73FPecyPtyezfJFEXS",
  "key32": "3Vazob486URshvqBrgHUKfghwTmJ83a66wQCavGTuTuFozAzDKjdSMgmoXVi715NhNhG2dtcRCNJNB65ZKFS2c7z",
  "key33": "4iAooaCazpjjRGzdJhE2iQnWsYe1MSzS7Azxz21UE6suEQNwv5rnArqWd1abhLK7MA6pzk7EEFTEEnTKuQ7Fm5Nv",
  "key34": "2DtrESkx1ycWiymZg21ACU3vnu7nWZJMgubyZ8gteEjUBA1E6vz7et4VnWGCCmFC2rvuPHytH2Y4VLajvrrx8q2g",
  "key35": "3t4NjX3tNBGnCSBepVW5vr23QUkxKXNZckL8ZShM5FaxYM48SVhzBtGcqNZpKjsfWyVkKcRJH4Npy1FELqNqiCjo",
  "key36": "5bQh1JMFLbfqm4teVVcoS7oN5VEEvWvHimPwULKusyc9p1RULTtWrkX1PnpdB9X9rETGLFZBPV7Ec4wS1QHzoPxe",
  "key37": "24xC7YnWfLGKn6oXMN8F8XQC2wYiE573Em1cpGWhxmWodgwSJD4kQmTs2ZwLkSupWznF8Mfo1kkdZxr8khAiJtUu",
  "key38": "5KRVkJvRTeQQvsbnugf2qGVyxHAyCPfTG3DrSSXMAy6jf79h4XFxexej3KzBVRDQCbktHzFd6xLXdtTLWU5q4PUQ",
  "key39": "3LzX4iELKQYQiDuKgkz1DGmEh6kZuE22wGDEPAfAzNwLtcYvmjZxoPhWnXqkZaXAfJkVmK3rmw7yq97kLAn5tAQ5",
  "key40": "4MemqRpGs5RLYKHavzQ1kf5eo72NnwD3eKnMhRx6syzqHNp4GTGT63cAxAxYSR51DtWb8H6iGRYux8rAt41TxTBf",
  "key41": "67Ra2bEKCauu4a66cxEhgPLcBJWZy7zn9CuWvKN1H3aRWKpmeCWQeY3QKJqM4JeGt3KuQaV23htCv3fS8DF5mZ3r",
  "key42": "2nSZVT6oKpgpkRTsXxVCRx1AdfrnxAyM7yrp3hT1Nu7GriFdc9zMKRPKnrnV2tnUMasJnfArw8w2x71XRZCzW3R7",
  "key43": "EcQsSXR96rAg2EB2UFG5cHuLyXgvmVLjMe3Vcz8iKt4U8m6e5o9dFsLzrg2SJAHVo9Dm1Jup5sriTcK4uQJgJTu",
  "key44": "1nePrkFzBxH6irDbASmCEgTrL3dh5R3Rhxm1L3mZJ51T9WScNMg65KEEbUMWGCfpfaEBxFZgUUR6bvnub3ZoVL7",
  "key45": "2uWjsi7Nf4UjUopzQUejnuNUUqghyVsiodyvmSBucvYLUJBYb5H4fEbQ779FfPZB3gvYjq4KHeUFy5mZXm2qTTa6"
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
