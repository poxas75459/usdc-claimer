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
    "2EyYFA9LKWbakckqHhNbVKAwvPfzk5atFXmagTK465axvWMWeySMgSmum93k6oxfUTWnCYt8xpVotAEym21XWQvR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "662RsyaNoz9tNrTDSBZoxmAjEQFqKauXQug4Z3AiWK4ifXP6kK7N3NxXMihT2623eAGjzT2jYdoxCLHV816WyPuC",
  "key1": "4gwX9ryr4oG2pdhLbcfNBFuJeqWp6Tmhqw5eCCyeogKadjHD1BuQz8y9P64kr7vkdby6hQTQ2L3rt6WFuggpMeQy",
  "key2": "47e8d4nm8xX2ZPtrE4TYbdyLx2bt4W7z25UGcBsME3MQnhxvYbYBPtAYdhGBFKDnC2z9M7gaYY5ViAU4P3TDz4GZ",
  "key3": "2Afxhn1oqaXS3qophezsvh82nGFoGYHTtTAfDj2SQpkVm45GE7RbDEx9xe3sEnZLyPGDZTozs3njTbbTFW4uuWxv",
  "key4": "4TsC9AT33PTBL6wmM1rq54xd4gT2e2idsuyAFwq29uPEzokx3VRcyZ6WNgRvCW9VDoAF4FRfht7FpVveftbdF3AY",
  "key5": "5FFWqYU66ve1LQcGU8PJRmNXjjnzxVvJbTvbAk6o2KYQ7kUKFZQVfCWsuRbrA6455po8e5ZvLioXxMjnjKzSeEBe",
  "key6": "4WpEMjqG5SM6dNC55pGbPPVKuNWiAtMmpVHk1wppjRX99NvqTq5kkVo5hdan7FY5Zk4Sdab7FAuusur1Ge1dQ1Eb",
  "key7": "2PMZwrHEJSh45egSysxnuNkCy9xQooRS1H9T43WtXVavKes6tbzbM8x2QHwc6WXLY1bQoWDmVzKuDyxJq1dgQADt",
  "key8": "319gvTGC29a3VDCEa6BZhzjN6FsJ5EG9wRsCrgqpC6mRZG2bKTp58vXo7MUGm7AWYQfj8hV9i1dBXLmoRXWfKekR",
  "key9": "mP6B6z3jQ8L8B4HrCUnmykBcYuDXgFYNik9fHGSnckHoiCtoEatUSRs23C8UHUSHv13oH2GV5b32qnoEECk2Gm5",
  "key10": "57jX16P2RrYrVBskMo77NqJiHsdFnyQiwthCF1TZVLTyEfBZbSviCdu1WrisScSAZVAQqKHMvMtrfHWnktgAFFZs",
  "key11": "5LNy5F5mA4sL75pAtBt3WxmMsXAWhizJ5Jsu5pXYaVtMGTSPLAHzwuJRT56vXJUZJQDLa7ypXZeZWQ9tDWkrfgBe",
  "key12": "3ZBqTg5mpTZKV35gxYndjDfuXm98A1A24UUxGs7a8b3euT8gbgYSKbFDq1EiZAPVAKpRMTLro4WaMmGk7zi3EUhw",
  "key13": "3yukef6nEELovWZZuSRrKMcyGrV2BMdnZ4MyC65qw7He3KNhWtXV84AVhY1ePTMbCCPnw6nEVNKEr52FHzhLNBL3",
  "key14": "5MuQCncc24ghPRo4uqAXQnCgtu8Ay77DWAigJeDvVhhtiPtiKAFxVw8YQswyqtcz4LQZ8FbWyRRRZnY1YDjvNgsP",
  "key15": "2MgzwLh1KWU1TjXsNSsVAPXMZDGshcNJjhDBry3UdpqCsMAJmhbDwDzJMkhQvPyMaeNDMeApxuZHgxuzMoHRKNUV",
  "key16": "4oYZ4RM3nPkKw1tkMccM2aVytx8vWsEYtuaCnjL7JpDeWyUHBY9r3aan8JYGGsSNUavDCkxdZ8EYWV26KZVfsJPT",
  "key17": "3yqgYTW9dokNNMrz6oTgV6cU8eDmG414dykM5WjGZuZHmCKqFRVSsJcvCuHk295ggTujQgf56swrCT5kgnDGfqqS",
  "key18": "4H75zePJ2Jm8vE9ym8qTx2oxfxwmtagcVzJmetee1FGdmhvQvx32zRHm7hZoqTn6K6KAS4LFbWxEyXBoxf8ZWo6Y",
  "key19": "29PEjpWHgKUMMziWHyKrsR1mjbimt23YpfCT8pa3EWHgVxUV5zE8Nm1YUVJFM67gFSt7TjE9QkUWw4DwKJt5a7yb",
  "key20": "27XDAbqEvfFDSU5EFxADiUzZqCBp6TqaW4xTacaNLo6nRrvVwPB4JueFqNK9tCHLMbHG5qQdLXJDcaW6WoqWjZfm",
  "key21": "3kzVoRhr23Srm8YbEc6fGSiEabWWZvms56aKSTiccvBn1MRmhbKNETA2966aFxe7NUS8CCKHQvCh25eU8vjR4RxQ",
  "key22": "25adWqqNx9YXXo1BfT1imBCGBkd61Dvi5zJnE6Qk97Jm7kadLCHmXnRfVcJgoxZcNuZgAx1a9dSojsCZiBRHsieD",
  "key23": "2jrREaDnYwHM2QmCpoP5naGj3tEL97bwv7diMW9LsgNvDboDg3VkusjqNR3jX3hXzddcffGxDBCGWyWL31XwHWk3",
  "key24": "uj2sZga7hjV447h7bqWQadYrNMACXuDRJceihU2BKVxSLZ6rMr5L9PKEeLBZp8ktDfsR4bLTzdG6TRLoMztoCEC",
  "key25": "2XHDPKnkiE74SQLcaeih3GTMRcPYZUW3CTJ4rrpRfnQrCkJcKqxzxAy673rt4WdBgfmZU3iXegek1y1PVdm7ZTc1",
  "key26": "DGjnEts6J2peTWjfw5F3W9qUK2GLQZVfUWiSP9wLKJ7VscHe9VvZdtoAz4X38FjSE2MPeREeUxwyQ3o2kcQNjYS",
  "key27": "5MGCKBU4XsoebnfXyP3nZTJdZFddVcHFWhKx4DGoDY3Edh87HF85z4M3R8tWCF9An8Siqg173vBuvnQY54VpXg28",
  "key28": "4pNUif15cZHa1pvG2nMLLH3AJdKXinFd1FMDiq5ckS3Cq1r45zc7Uwvj8pYx8F3xympQZuAG4MfF6wktJ4dsxzVq",
  "key29": "3dFYQ8cVX29fRPrF5ATb8F4mN2vaRcDBMER3SpQX9vTYHpJBbeUXDS2UnRih35RHDcqK88f7S8zcQiyEs44TaaX3",
  "key30": "5cJznHKLHsNLTUQwqyk9eNCoryDAHaaDzEHjoQSTvp73JXZRUyfmVjjCYyVLqiuu5QPApciBFxyMwEXLmTMq4ogW",
  "key31": "2iUM1p2CaWx2XTnrkNgL38cQCLSxBbx9Vprzrebjh7LyiTqtZNQCantW2ycTDuMAVNwBnB7s2EoaXZiQMyCq66KK",
  "key32": "3TkXWNaczqHf6giEuY8mMXjMmbYfpfi2J4MKpXtHWXv6EwCWsZgGGzHFMoa7jeZdhHPPHwH5qdsECCxJ47QGfraX",
  "key33": "9CJqxXQjVqXneQcjpL2MSmJAfEuiwjR4aBPzFJCQBdeDvZZr312gcy6LoFKK4T8JJZE3QwFjEFb9yTPymJBLfaU",
  "key34": "3LsEsPRLkuiA1GiuCdJ4Gb6PGTVtiZ25tS6sN5iaA1jFZAtY8GVKhu4XGqn8LTtXoY7wMvDtVTSBckBCWohfWw4b",
  "key35": "68vkdxthGVdD2EdQyew4qzacERm72spocygzk6wP4EjfXszJMsCY1KrgcAsCJVHExyzqcTstLHKDeJB7aiA5AWF",
  "key36": "2sYtNhLhJvvHuMpN72bXpTyAWNwQJWJZvLgQ4RLa8LPcsHYa2GckoNe73Ju155kVFAf1YSSCWxocnbPDpp9cA6RY"
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
