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
    "5cFrUpNALiF4Kmmb6mTtMfZcKrL19aHiZPvQkMCYf1H8wcupiG36DaWpKceTDwu8Vdbm6fAwp254tWNbVSzcm5ni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4prkCx1VoLoEymehTHCpXb3JUVHQe33dkTJSEQaHaaeagGc711VPqqdUL57k7nrZrb9941JZihTbyxWMnS5ej4Xm",
  "key1": "3inJvYSpPfEprXsYzRsNozEfhiijd1mVbEVNLfJ5x3kdhCzdTZieWgKxj6FFhKdqf9rTiityotUsyyLrrKLqSerL",
  "key2": "2H3Cfz277hThGj5wobqJ4TG1WmSe9mEvpmsBPR7Ffh47h5FfF7NhkwhmjwrDmzMzyBTJwshLCg8r1WxuJ2XPD6LD",
  "key3": "2LsHv2vfBEUFoikhKk2FKKC3EJHSAAnstoFzSQ8NdHCUmGH94v2XaMGLZf1vJoSaxsiiX8n81876FijRW3yUGd8R",
  "key4": "2M4pVsx92urVRxYbrr1d5UeduDgFUdbB6zpK3NkVfaUjU2tyksBxyALSms1nYodyfxj3nKhAzqTUnDsokZ8X8mWd",
  "key5": "2RQKQpu4iQq3aBi4PMBhBk3k7roXaZHEo1r6mifSfyg3neicnwmhGyFDvcVg11aqjhSkvj93KTFsaKeufWRgGpuC",
  "key6": "4iADp6pS6jMYorXqCfxpoQWMo1SuKsbhB99f6MqhoLUD1VMbvTcABExHSwVAwwGFwX2PUBG6MEi4kKprn7tLVwwi",
  "key7": "GqY2hi6JBrRRTrwBk49qP6u1KfkHMfekGW4wbN2oZG33rzRorkbXvreUMyEXXu24hWxjNERQxX9tcuCkh5zqSHj",
  "key8": "4uwgR8xV3Y2NHnck3n1jcvVCPuWhzcKd6ru8XxfoGokF8tYfw3x9LNzdKQFy5CUma9XJMiYPC1k99ajhAPKiUa41",
  "key9": "5sBBavzbSiETcBvsk2vRWex3uzJzLd9gC8tofw8a1awGBVbTdfFULNjAqJtqCwZTzyqNskV44E3mpxW9UUJGsUNf",
  "key10": "41yV4XQNi9xvbyDhfhBkN5BPS1wFpAeYS882e2w29Qsty8Yf9kvGxsZs7C6pxdw5pXkd2LgyeJcJckF7FvzR4g5W",
  "key11": "Hf66GsL5SFzPNx3L7oBigEvRhepRc7QWTKXF1uWx8VjRiwdQ7HzpHrqvEj2HUg4Pqv9z7fKiDTb7RxNGcxtYurN",
  "key12": "3TnoeaNqiN1jUBDAu6jTyxiDbKPbYwW6zbRwnFtMzYELAbeYTytMzWXPwFHhj213FH76YAWyghfF1HBWgZXDNfMS",
  "key13": "4Sqd4mRHwGbBzx4v24ZizjodUWztdLJtRddyEYJJDSJvQVsrRuKup52M4sN29xYFGzVWoDq66pzkVix4KQqDMADZ",
  "key14": "4KcGYxqvUKenfqrtk5e8bS45XsXvSTKUyaCpqwrEyLetfTvPjNcKPdn9RcpohgMAbRWEEJGMBEodhRgEY2gP55Z2",
  "key15": "kWNfz8ceYjWNpWSXJtg3drekuireEpKG84sjDkioA2ns7TGNjaFqPnVR5WtUzf5saqQeSsH8AQ4bUqUtiLLGXDW",
  "key16": "5pyTrvDDr1twhpja2ccrWkD5mNeGQSWC2PcNZsLMJH6u6y51wXDZJ5RixdGNFxDUt9Jv3e3H9qkm2NTZmUX99bta",
  "key17": "31HTnVbqvNrEQYEp3v5NkhZRNBhTJjMiE9fj3zg9eqfvL1RKySGDs3HSghzQfRjrBrfvw93dLgshuLUeLQaLmSFZ",
  "key18": "4oMtm9qW6PceC7gp4qLmnCV9zvdEnZGEjMdfmUpbuLwwhkd99nm64PaUvdvT67RdK3hNTwRnP1qbFchB3W58huKN",
  "key19": "5ecvfLHrFBfh1ggaqht3YJs2NUqjhWjAYW2EiNP3aBVYtReAWBCEvBPfdZBmvMmxUnYAkgqEugs1hQMun8Atfhh6",
  "key20": "2QzMjUE77zWZsumsQ8AqkEKDDgfeGi8Lpb8b9tfLNniRNwjMnnxHWjjvTUHboSrRJcu7FaaSsxSBC3b6tL5cRgtf",
  "key21": "5XuonM956PZaERRa1YhgzEXtRB9dzmgzbrWYxs4i62TcVyMK8v36PCth5i8CUY2uSsVDvENAYQ5eCuHEVugaSDek",
  "key22": "64HXjRchiCJtJV9HtVwJvZcG2kcSdVe3QXvUyZZzSZhYmzhEJDSYRESwMxfxFchgWUHwu9DvroEmJwmaZAaj7U3w",
  "key23": "2Q1mwbpEwK4GPtxTjdkoPyeCwFmrAXGc764P4hHicV7jkLLsXroGrBD6tP1ftkk3ASG61ATo67D3nsxkUJbjpG4D",
  "key24": "4z5TRQb1cudXJ86jW8v1jd78abLZjJutiK1saAPd7PbitGQnMFtM2PFr5ZkhkhYXLpdQYHDMbUgPd8EEbFszJhL6",
  "key25": "WzZfVamd2faPADQEVsXFzp5Uq96fRTK3HxZByki5e197YjFDYgnut6bpbAWN1f7w945Xr3UVzkuaWu6sQMJ13ey",
  "key26": "5gBubH6Xu576vA7XFuj7xhYMhMi2wpixuBdJHwospWdqACv2FjzioYA3p2aV4dkAMgMJUtwKoa77s7aUQqZBzzim",
  "key27": "38LuGf5krrpU8KgNnqHsESQsMoUESLBhbYzyue6vbX8wNa3GRU8ZqRU8Sarxf29EsUnafFjyQzGJUPmayYYTd3Sk",
  "key28": "2T27FfR7kA3JNaF5jbdu3FxnpqN5ohoeaXJAV7Z2cDyrgBDNDLxwV8t28bW6tiRn856JRDD85G1X1gWzQAkk4aVP",
  "key29": "5Pt8hWBryM1daYCLS43tWXvfod3DCS8duvFUBpQnhajN4DhnsY5MgEN3hJrdNddhM9oLwbTNuPxEu7oepkbMCS38",
  "key30": "3MAUAtMn4QLD1VLkuShanezGSgZ4h7DG54omva2Sv17859ypbe2AMDBf8eu9jVztqd7NBjCnD6cVQJGKNibiy1U3",
  "key31": "2dpffdrbdLFrk9Y7ZvGjtkYbzCtteKRjqhnELq3LJDSgWH7BkvXG9eN29UKXXAr83AWyoT9TAHVVGx3UTeDtDwLL",
  "key32": "5TkqtiXh5BtqYN3HfqFKu3RzABNaBd9TczyP9NQmE56N6dBwUBRCfsjSrXreU8B4RUrgV8dDn3fZ4bJxWNyUKxef",
  "key33": "3eMNcUrX9c3xn56nkYXFnaxKizQrQzPXkhiq4rGPf1ZYx6EbBkRjXmKvjtexEwEctcddTM9BfZpkjcw8FQH1GMAZ",
  "key34": "kPYSJzkJB4sPSx7TrQXPZzaGyJyo1pgPuCUUTLk1aADAPqyhg6x1JxunPUPKjFAWqmmnPwSeJHQaR4xcp3fDRat",
  "key35": "32hZJHkDLqXkoom8FpF4gzMnB3Pptoo3tqH3yTS8f623WXapAojkiCHVBp6NKGaB8JKyJkRCH8NF3VMByEm3As2D",
  "key36": "5o66c2Wh7LNNHEyGDWpstB1NsiNwqx5bnq3EH3RT19S8uBBPhoWoLEtbipviP8STPtCTwg9yAxQyNKM64SuJTwDm",
  "key37": "27zKba3DBC5oBVELhi1x4S8oDSQdwwW3JmnMKU1niobrX3YwuV8HzdQB78ejPubN7TDXFkR3GnAHooZsn85Mf99a",
  "key38": "4aS8vQ2TbqdKrPYF3QLrJDS6wwPyERxjF5cySC23FgiTzgJG2D2VkbLcsAE7Niitr2psEHWHYvp2Ni9nDHgjq3as",
  "key39": "2hj3SZdqDRDYg7bqKVMgQHfQSLTRKfHzwgizvBK2N1aYBXJSLpFCwD49Hzsio3aaW8oxZkWiyCyLjWnGFEZaoZr6",
  "key40": "4LkAmGoCDN2EByB6kLyzaDdBn8aFmVww48SAwpEfexAVzUEQsz6PvrEZS1iFbaKuLv85zgfdkHEF8x2i73nJT7qY",
  "key41": "5bh5cMftygSvGA4d2M5mRhD1SzLwkFp5CpU6NbHiF75MqHnPwYLoYojtJoq8i1d14ZmZy1zYtrr3qB5RBVwiYLWf",
  "key42": "G36q6Uqxim3tdyvmn2vrjbi9B8sdrGaLfbbytFrpjzsLSJSW3DfCqYgJmtBLaxn9Sd8vNt3picQdi1LWcs849fb",
  "key43": "3QUhpXLevhmW3aXkCi1GK99pSrgeJMuM4827vSBCoJv7UYp4UpeqdHJzbks7EigqJEGPnWmJAf41sQMFfzgvnhoW",
  "key44": "388Gqs2zXXSjXz6UfQzjLZiLdiHTctZNxktovjUiQZWWS7cBfVzJBvUW9u5ejcj9upcGnhSYr6ERfPdEFbBai4c8",
  "key45": "5fvwCMEPCs7GckYdQvtF98wB8p3ooLpH1GWGPy4QWmnGVnLTWZ5CuWYEvsYsK48Gk1tqdZ5ktd7jro5Nq9RUXniT",
  "key46": "5x4yusFsCDQp7A5JLHkF5Pc6tHM1WBFizYCEph9fEmVPvh9AuCeVRFfkQqUJ6zwNSS1Xhp29SY43unhCk1H8Pctk",
  "key47": "3eTzxyJNvPKYj2Kmd6Aywo3vmjNyVyYQ4vWHbhojiAUY9LCvD5feUNNAtgQANmewWQ9XQXjii9oQUpsAFc6U1psC",
  "key48": "hJ8oQCH1U4HGMh4tuqqhkQBg4KeB8VoBjxTAHCDDHBDyGZsZUtkVQaRi5AEhYq8NTmHtvUym9nhB4gCCgpahPMC"
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
