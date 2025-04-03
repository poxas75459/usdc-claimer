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
    "4rtDZBkjuAT2ZpQsAuXF3stGLa6spyBCaCXHAsUYYKk24uvs3nzMSZhxutsChTfr2bMyRe6xnhnTRv7t4xiDhG7M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qqjxHHevuRvPxccNGMzUPaxbjGCyELL58q4wDyy1dFjvoXiJ7f5GSfD6LSRvv6RPs34QdEgxrXzodtAjwM7Kog9",
  "key1": "3LL4MrNvtmomfioTymnCVyzBu8AZNcT4t9tM3dmiFYqVuKF91TGDHGw93TSxm9jgGrmTB3vyTQrpHYroQjzHNEgf",
  "key2": "2y4JPH2Hztx4PZ6Cm1NJRiQ7B3EJhJrhKwR2gmNqtWH2kBk99s6SKc9YAb1x3bbTu5No9eQdeGFcL2RqQX96wZUw",
  "key3": "41hqpbg4cqtom1j6WbdD7QDYyK7CcpReBstC6nbfGiXBWWhAW5Riwi5Hg5EMKKziKmZCPTECtgzBYuhKkuz7HVgP",
  "key4": "BYeSXDPrgymykuCQYZNbhk11km8ndSfbroiZytpA45DbXxsEdZCwHTNie4geSfEoB4tDaYHzdqwkYqUbSGv8mti",
  "key5": "5RCBzJuZeupJh3CW9XuGJQBbGfabJD9bZaxWeacb8xFU7KtguzBKom99uGdaWpDANGGgkNcZVDnjJ4soWbUAMJK2",
  "key6": "3WeFhGPD9gp2pYshGD1R3UGUxRrNbCMoEoQbBEWgoB7KZSCvPsCN9mijQSneqVyD3PS2GkTMsVDWqkWKa2wnfFZq",
  "key7": "2BUEfgMjSqYt8uud7oq3WGjNep4z3Lg7GMw1SBEn3g2j4PRnoEN7EUGWJz2JLJ8sbMUHU3KAaR5UyuFKizh5scqn",
  "key8": "2szJijuovN48kn8pbnvbkAedojgQXQFwsTwWk9oVsTkXF3sgTS7diHsD2T3surDmBUVFWrKwPa73vmQaiXBMFHuC",
  "key9": "66LPU2iq4Yoyf9RsnGybLRRjgBhkEhaGZbgZtgVsdj5BJg46SXN8nNGKo4xvJ5WUz8rH3wiHYM99NT5gNTJjbrAZ",
  "key10": "5HWk7fuAchrPBMAof2EVJCz5UCUk1JAehjAjhJTPUxTZjiE98Wrj8jFJWkbAa59dJHLsQmtusYZmYuhP1GYiYo5S",
  "key11": "5rmJRR1mJ2GC7yn5596KfY3SgQMM1ZtFoJsqdCi4CCyMJJjt7SvVLmc3TbsvWqATn21K7eJLUk9ZHCD9QoufNdPa",
  "key12": "4rMobiB74DYLasptUxTmuaxNN2AHJEL5HQtQo4rWAu4CrtVTBcCYfZytQ3XUBFHVFAcP4Amwxvh7m7DtQm4cR848",
  "key13": "5geKx5DtpR66UstoUiEeQcYQ65F9zcLFGgUfekRtgkzRipMJD9aWrQe6An4XnkFJcwdJLV6BHJ588FxQRKyXHR1v",
  "key14": "5HX8tBmn15Ybyvky1AebPWa1WiCR7YxD59MYWtqi1qWUFJfdRrmr6QUbAULcGHyiE79zSDYATQVBaTKGj8RZoUMA",
  "key15": "5cgkzM1gnEmbc27Mh4u2VDjJ8yFhJyEHmaV2o22Tjz7en6BYawzj6yw41E51HrQWwvYeV72N6F8TBM5Yt81CiW2n",
  "key16": "3Rdud7iJBGoD8KdcdfxS2vpZgojScdA8VydhpCNviRgC1AorpB4pzjSHg968152AQhpifFdxn93axE8RS8zq2M9F",
  "key17": "4aFHjHA1hhQCnjgUwYFTQPpGXZBTbfaby7n6T6r4accSDhYwjVWJoASaastBRMVnhvCBz7f3AJKYmEu3SrocqzdY",
  "key18": "3uGo8PuC5MLwKY2tWvMaRGXt3AFF5SFNpB7xAUWenzCjtje1Z1mMYTMHMNMc1TJ6abA1p8taK4VPqvXTwZd8ReTZ",
  "key19": "5Fxcn5gnsokviYjiPgTTL2VEPQ1xKJiGrDCFe78D3fBcz4xDwpSZaSSJSdRSEFyVmgdHtJWu2DqnyQ5r22FmoLq8",
  "key20": "4poqaUNbiKtk2wQokUb66ct7EWEtayAhBS7CA5onDuLxHwj27qJEWWJd7i37SAnJ6k6JBjxNPHmhGmm2VFzeSmzJ",
  "key21": "3xahuun8j4hPAzR9fdLywYAnftuBusG5VHR4tgnY64purYSR8RKXvLsHbikh8vhzXUmhoPUuhW3LEaUxHvHNab63",
  "key22": "4s29MsGWsxaQuJKSr7XWzPMvzBCUbEw6wUA62msTPoNRxV8adm2Z6VNnqiuL1cp5Aj1XHqsuTcvaodyNR3HLjKu6",
  "key23": "2KrVUkQzFSic63FuVPkSqWwy3hCwvFvRZFRbsUZvq4VjbAB4dZ5NdWu26bEf9cnzY7PKKYtW8amN6Bpr9NTMwUhX",
  "key24": "62rKYj1jKVPSFr9oo8FXmFnxPKYhqwmMhDXou3fceC26nvNYnF7q73mjW1pYGekFLPYtfo363fxPGxm4qeBiatzS",
  "key25": "4XmKHGCqpQ3vhMiXRfGGG5DZK5KANb9PBSdHxcxEjkd8GejZK5aq5vpxx4q7j4PCUjTJuYgcGRfAJ96fmd9kDAwJ",
  "key26": "2ic2Gf35PnERAZ3aX2fLsKUrFNARjgfgkBxdkty2jWAVHEwYSB54xiiPTLxMjKSMN41LkKxePZChg9moBxhxE3Ns",
  "key27": "5fMWnCtem8cQumjMS91KgQ8wf18Pp179bHeUdbbAMbUeiMEmtDDpxY5vHpPkT26tX5yaNaoCLbzwceTgqCHpGgtG",
  "key28": "3WSZfJEVZrEJsCdKFqiTuaR5AGSReoA7vKs7NHoTEBr5dvenDX9BwgpfQfdv5BeiUwbXHiFEVrFBFKsBST38MqeA",
  "key29": "5KyaGoEphPbySpg4j8ndnb2YJkrnZNyoCBMpftsYx9dC8ReMqcchfPR2vJnyKfk8J4gD47BAeYT7HQyao2JxizEj",
  "key30": "2yKw1TPJh1TSHDPajM17LfrQhbRFAsem2xw7AqHx1eUcDg2wfqKqdYFDLeiJiaAFNzZ1MGzxFRsLf9hXZGyZjWbe",
  "key31": "4EGfiGtKRvEaCd8ZdRhsf2gPc9r1B3GgG88fE1pYKN3h9ZVQCtZNZY3WJe4VPwXKwXyBBihmm792qp9w9wX42xL7",
  "key32": "5zEjfLGAx3bvU6SMYk2AaSE6V3c9NbKtv2YBayzLLQdgj68naTsB6gnusopzhsccmYNSXcjkBXje45Dn5pegwhN8",
  "key33": "EDSFakREfwRPwAKhyj4q88UmFxCn9dAPho5u54P4SRZdor1y3VG3KxM8v5Gv9PXo3bUvKWh6VEZGeFLED9m6Ank",
  "key34": "yF8edFmtsY4eFyRomJhkhqXXnkMNJDUfFkpEdkwTHoDuAp5XWBq6JyPRgcnFVZZUgbfpzjuL3QdT9Ye9XEtBAAd",
  "key35": "J3Ee1WhbsFCfMRJMzLHeMzGpkoNH9itLFqrdUGepZdpuY8qb3p4YcBYsGhfeYiPVEmVEPwissLoBb7ZtLwqpZvq",
  "key36": "eXW5PaCWdZPrxACakKR46UP4WfgdZF56MkacQhXszoHYUZvoxyzeby2fhUBZkqh2MRpSCNeHsa4Egm3wHpm8U1d",
  "key37": "5EzAhDnveUkb7UpdCmKdiLWqFgbEXRgswc2p8ySwhj2UVJaoNPxkZQhRZMVnz7DUHKrhekKLRKDEnJk3aAtop67Y",
  "key38": "2N7B58YxU7rC9xxoxtjeHdjCrNzkMFzZPPQuEWANVmMkBfU5cN42VtypAZoAqFpuwkJx1Nnbfh6XKbpJmXD2THtj",
  "key39": "58hCbLhoHghnWsNAvoSZVD6oxMa7mMp3SXYHYxUKLa1mbzYGsKaMVx8xNxzbQwwQBXWq3BS8yUYXqQHagFzhdokn",
  "key40": "3f443UcsmR2t7ZABZyuud7qdcpu35u8bMVpuhDEBWX8MYq17uzCH8d9Udk5bsg2LdECC1hL4YXnHWp3tGTMh3rS4",
  "key41": "5aeweGdnjfNBDNnwWEm8PvxqSuhd3WZoWbceayhV9BDPbTmq6gwj5o432NchBUyxsn9xMR2T4LiLaqoEwoXjAst",
  "key42": "MkurjPNQ4Y3o9nmhsRqiD5ov4HhHkiNzdomsDaZpf3i7qRbAG3tFcKqtpEmH4JkdNDi7wDJUP4QLZt8zAjL4nAw",
  "key43": "JChkabhFor99S35niJCGnwcGKc8kGEdo39MoNt4p2A1hUsnmMycBQ4yx3PJoGkNH3YAsJ6zpfx5C6hYpk47jVwc",
  "key44": "4ybXwh3AtaCWLwE5hAkmeygna6GqLUknJBQX8m5KwUun47D2x5beMcgSqi6tjZLNvHkLWmS1KDqeMykUG9Pg6tEp",
  "key45": "jB7mhymGnvGrffgBxsdT1yxQRZZsSSU7uCnbVmrqUdPAaj6jfuU74oMBkHb9kDL89ruAxsWs8qAtEaU5hmXKXDh",
  "key46": "5cR9dV4XCGE88oBc7LLzpmggSz7jtRsXaZidCrrXp7rTmzP4JtdD9zZnfLvdVyD5iGL8gMW7gkff7rff7cGwS2QP",
  "key47": "3oKtnSFYTj5RUUQS3uSH4fXkBp7mMMrPypKYYBW3UJpGNJMxFWAmF1Ep5xiUVoFjiosugomTsKmCjNbEEjJ5b6Ze"
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
