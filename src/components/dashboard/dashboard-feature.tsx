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
    "3efAZRRC8ptnkxsP69qFKFGySRK25k6ewU2UuTmkkpjMtEfZu3iEtdfGSZToDbZeFybk1cGJnUQbr6wkXwMyXw7Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CpS6MdqNbqq4t6EqkVAbJRL4dNYQ37WB2VAwc49UYEg57fCVrkmcMp1uDoQhf74HxXqYucMPQamMDuhs5Z3aovY",
  "key1": "2L99UDGaHE3aCdNgHdD4iQQrDPidvfDFeF3Yv9grzGUiQrgUNoU45zw7jg1UukzmdPTG8uxREp6kgwEF8JTyFF5a",
  "key2": "4RiJZX7s4e82axjbHk7YU6JsCf5yfQMvZRNWhjPWhMwiCi4wehYZjWgtPqpaEsaMfBC65mv7SCJ2WhQsjwajDa9x",
  "key3": "4D45ereqmEsRb5abidq5NPmdpNukux4dXb8f88i954ZBDi3Xfvs6aagCdDXPGscYw9Crrdfvaz1FX3aFQorh6fwq",
  "key4": "5NzZxQ1gzE1oCxStnSRGWZxCzfkfwffV2C8Q11SJjoaPTqvxZf5f3Qp6pyE48a3VcA61vBXnNKg59tRJauMG4HGu",
  "key5": "5PmPiiccAz62jdYwunhE3R1jZ3S73DJfzaHgNQHiwtx6As2jPKQRuDa1f5M4ewcTU7dJGJReSRwQD4ppw3kLcMVp",
  "key6": "4fQZz8pzDEcp2vgFvJnrmk7Gk95u9wdenBT4xSvCQEPBQ2cGr4GctWeguUQV6iv4q9xLBMtrh7VUAwU8zkN89bDy",
  "key7": "34RwEu5rPX2XWeUR9dkTKxJcCx7cTZ46GbvQXJmWFYDpJ12vcK1N9QpB8xPVk9kRLP4e5XLVi2KBqwzU2mEaVJqG",
  "key8": "5KZbEtZf2cckBAhFVADMimDStFP99rqCXjpn2ukXgbxiNBFfsNwwRgcuUfQN5PFL7CkmAJFa95Preiws4HgrJp4G",
  "key9": "3PjK6k1u7CJ3kCF4PPCZnm9xtyGRs6HCyXwiYDrd7HDMuePsWGy5R9HzNZvd72vZNGCf3xtj2Z3QNQmPGHR5F7Bz",
  "key10": "BcfQLqy6a7mDJfAp8LGmaASut76vGfXmWuXtcLypNoJ3sKBP6pCW7QZkU1adD3b7taCoFJrjXHBzf6QGP7XKVVn",
  "key11": "2bdweF15j8qesc12KRzqXwRnPCkE3GVB375NENWccE356oMvWoTeHZFwdE25eRuv2rW1woMxZb7DF6LhP4svRc4y",
  "key12": "2xcXx8WYNTb7VCiXwVorRgDsifoci3qQ3CiF1rjLaNkApKnRu4e9HVoUxfM54tjwDnrbmGmfX7vKP3EhUTR6MzDb",
  "key13": "53Vn6Y3jbaR26PqMtBjHih1ECseHjPLKgXwULaLqD3KGLN7RqRYwbRTq1UM6y9EAQXWAKsuGk6rMYEauq76XaTp6",
  "key14": "2sa55by67vtgo8nXMCiSGd4N4Lbk5RBpRnAVECq1vfPKhWrzTjduHJFeMric3cMfbembs71kyuvjRCZGJ3nMaWDX",
  "key15": "5kZbJGkNW2NJdp6QoAFwvGtJiGjgr1N1JQ5K8wfUrJep9vfhqkZaXNrSSk89N9QttyLXBLx33yc4UubQe8BC5Awe",
  "key16": "2zgo2h62gYrX8Anc71fwqbNxmmNzVZezzMPfJZn2EnFHs7ZpJf9JZDLY6v4TtXo2LweibmBBEavUGJXre1oFEskj",
  "key17": "2KwdQreykxxo5ntzhf444h6enAfD27ypSUULppGXj6cCnxRfSLt2FVk2TMJsvLHCtmBbUqUDuooZc1Yp9anwxfQx",
  "key18": "YSoVrDR4frHggxqaNFaAR3EKmLLksY1N16y34zMk9z4s4hFtgugFUqrT7foKihxcmp7jGp5C9BVdHruEBU2sD1o",
  "key19": "qnk8jkAsZtVGEHGVFzNsvMSBS7pcMRbbkH2HeBJmbwtkH6H4tUpTG6SdP5bGBPJERXysA3VxcDX4qmUd2CigFDq",
  "key20": "4F8KVgH9qcx93i8rBHBHhoCzZ4KL3gnLxiuML2Vir3Yneed2GxrjmvkTModNschFsArDNzSwnFf3KUiWd6GfSQpd",
  "key21": "UfJET4Ut55tyumyM8gczSzmWpbWNZ7ro1TuZ7p6Yc4DdYdQ4haGjTdjzhSBeUKBfgh4bKZRJDf3qLjmCjAMCZen",
  "key22": "3TbJqrFKNtkLDD4oMYPQSP3heETvKbWfjA14duvg13sdhPDMytKxhxrDY9tZ49i1NFc9uByBoJev78P7Y6aNpjEj",
  "key23": "LgZYJ5MRPcbJTzXydBiHJjpy86TxFh7yju6NfmcNhWViMuwtFF7UxxDkMqYgbnDkbqzMM52djBpccXAaGvtrJrw",
  "key24": "2kRH2mEdRrKvzBZ6eDRQw75fjBRTQZX2uT3Cxp5op6UdGwUrpfptgio8fCeS4Rg6U4LQrzSWxKe2W93dhHwKJPdv"
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
