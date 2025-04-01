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
    "431EM8Aw84NQNXBnoFm5mUaT17LU2FghhNmZobunqejtGoEhi56wrwLeGtASgPrAZV9t7bTuYLBkCqoFJQSwAgkk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gcsrnLfS6SEaC867axf2Qtxz2CcNUeYjwAw3HAWzKx1YTXuxWbwJw12H7ZWPdPAVFjGfiwmxvew1LzcrXhMrACs",
  "key1": "5YbYuhbF6fbKk1MTBfLtFRZYVqNy3vg9DdfdMqrGo7MvHYU7baHFjDpVLaR3f2NK74B9dVY8xfiHPN6eZ36JR3m3",
  "key2": "434DjzH8mefyvDjFHv7z8qPN7KoHtbHrdjoswejao1VWXWMotf969N8gD9tWVfayZh6JANkxX5LjfenMUis5wuEH",
  "key3": "4R7YpA6HMD7QcTSmVj4DpiUSbtZ3DLRwjePNGwcuiLhWRyMXLFMyq8rhBhMmjBqRoVc66cKbseRvdRWPCvnrN5Bc",
  "key4": "648YwcHpBZgm2MhzTkKgcM4kFYn7j4CZBApVYjV2smRJGWxP7WL9eoqFBuHaCsVB5PAtmVvVPn7XXzCQa3oyFUpq",
  "key5": "5yMSEqXmPjB61ugNUWLvLyETyMvD6RBjTLEtpeZH6KDwRS1dAuL2P5gXVzuqKujiPxT1ovJ1XYh4K9zF9Va4L6Sj",
  "key6": "31snQe4AbjKVxfzLsc9315CGyNSSnMvKGYYjYgQ4LGZGRn87XGcdfChxGkPox4QWKRSwA6aCbx75JFzxJdnWKSY8",
  "key7": "5tJYNmXME4JP6gHqyWbwU5yEdLFYzue5eg3sWnr9taHrkVLZEoDxxPyiGYFBGrLk8eXkxuJyqLQo3CwAuBPqXr4m",
  "key8": "2E158DnppsYhUR3sjkAMjFuMNMA7kNQ16rtM5mHsjeKoAybWtqqtkEBpyHSXLqr4HazLFoYexbN6VSfifJtCvctH",
  "key9": "1P8BtK5m2bCoQg4GU5gvSUimqjY5VZLodVTwQvCJR67R4wxe4qAdq4XGU2TheS3AC4p6k6VTf8hKtAvCQcbCzor",
  "key10": "4qm15AewNwxHEfATorzu6RBwjtMhxzKjGGjuqDU6oAA8TYkFULj38jbEeaoQ4h6yZPT5WB2i6T61pdaJ6ANmJ2nR",
  "key11": "5C1bQMBbprZfhiy2pEE8vxdvXANn6robRFJdiB5dDLmBdzi8Mp4iUJowzt1vzScVa8yGL1zYSL14gr3fNPrpiFgJ",
  "key12": "4tcFLeprgsdCBp2s5H13uoAPqBirwacjm6bgeFzr8r2zgpE79H1EtaRBCAzg86n58DiyrMMuEVqJgPraJg3YCLM6",
  "key13": "5QiWUG9C35wrn2YcVpZgbb52HRgM8CJKTRmYZVQJvFu5PZAwbzzEt8zhYb5dwUCtnDj2Ye6KCXpQQXSprLhDpEiZ",
  "key14": "2RcNHmwhZ3dNCANqYWaguadRsKgRQHYEBVLZHjyiUjgNt7XbdFE631qaMNcwRbpZh4D3x7yqDSp2f8xkwE3Twsmq",
  "key15": "5kk2zMN8mLyPb6YpRdQLp4re5nSQYrXpwYpwTECusrYe7W7xLvGP7nYVBWSrzXjmVPmEUov2zbPVdAcPSkGGEtXh",
  "key16": "2MjPzYNfZ3HSk9EJq2ti5WjYTGve5TKcxbWWJC3yzvYhfAwNw2bSkCUjaNvxBqM6fQa1ApkEke2Wb2nrLNxLCnAr",
  "key17": "24DL1ENrnPLB8LpJQuu1Pum6ASiHc5Ppme3R8D6CcnEGdRrjdGmfbiso9eUrmUBJ6sMxWLsqXkpFx3KL427mPWz9",
  "key18": "5A2F5k98sP5Bo1vf4ayWsTJFqJBNm7m8KFvCL9BFaQV5pn7auJBmMBiw1R4FLitxM2iVozSkCjjbUuABtXhS1GTp",
  "key19": "5Ved8CiZBX7uFY5sBfWjnban8bpSUWdMd5T2UUVkkVMMn7VBt16otKbuaLkaajsWP41qqWucySUHXBmBwEbZUf5E",
  "key20": "3ok5fr7zxPwZmvZJf1WnG3LsaRF5zfXFYxkRweFZgVjNfbCZpUcBpBkg9dMhXqAWZ7BggMYDMcUtWrPAJ2sJ1tbC",
  "key21": "22bojWXw3GacCHLNopf3DB6XJSGabubPTKTHxdzRT3nNJMuMCogMM4VbknSBbyqAtDrQMiKLJ23AhuiRjaHTifwN",
  "key22": "3yvTzPYBgFJgoJpJJdmHE6h7FbcfLANtM7yzWJKAoLnStJpJi5k84mWkLz5MaSNSYJRztfyoNqUTSKPfVsYjGQbh",
  "key23": "5jqUZ4HbR9u2HT3r2nY8HrjDVPC6vCxFVEKfscPHibWK5dhXwuSDeSfrJhBiUVHVQnfhCCiVAyddzaScYHPvAqPD",
  "key24": "2cRHtSmjhVqzrBvarz9eipR9Qoabcz5beUumZ3RzkAhTHXqUBkDDUiDfxNTrGWTq3vHqVSaMbK26RVFg3P5MiR5E",
  "key25": "35u4J4C9SmWQmHnsUEw6HB8CWFschCddxQb28Q38XbYgBxKdvX8jqPxmkZEsw8GrYCh6uLnDLhYvE31KxmHg3nZd",
  "key26": "9WfpvSmNeCCG7fiupj4XUQYJcnMRUeVG5GVEY7c2BPCdLLW1piSB4zyVeK8azUmr3TR794HbZ75mt4LZxLHbzhW",
  "key27": "2gupVa5aDoTrqXz4TuiYFVvTjgwNyfhCEWVw1iwQ21wDVHe6B9nzsYQDAqzKzCrwwgfEuBcXSRsF3MRFe6vMKE68",
  "key28": "5qvXhTxagKy9RxaT1N9Ni861WH4SUwUWnyXHt9UUzi79g5dwb8rxk3aXi6sSjefXPVVXkSaD4akBPKekL7WWG8nr",
  "key29": "48JeJqpG9h7kiXipGmv3m76xefdx3Kuu54sdU9bJYrRGqS4WG9qjmuFGLxd5ChMcHJnRbcHvadYVsL67kn6znF49",
  "key30": "27jYZacQiDe5UFALxfn4jNepYM4NJJeVJRYHxs1RrMxFh93WfEv22ALcs2bkpP72o33GfDiMGamTo6ubtrSSyTFp"
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
