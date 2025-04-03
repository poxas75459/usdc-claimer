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
    "5bxTxSXFebEssqSrEuuqhFpvkbDQ6VT4zETwTqEtVLGp61Nvosb9YUH2TM9gKxWtt4vETYsF315dJGbtjn9Bf1XF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FyiieyjHfnzJsFan4gf7nvwvSJUumYiDpnoCnvUyBFKmuXoKAw7zCmR2EhBw3fwH3QgJzyPPxBPyzsbcUJGkLNC",
  "key1": "2iUUamTbSianmcJifgzEAsBfF2SKUYtEvDDBMiZQs4Bdu8uBKQ3DNX4XPuYDXeuEJUzsGTk56NH9pXjD97sjsDHd",
  "key2": "5T8iTWx9wx7asgxgyiWqkD4MsM1Lv1GFJuL3gw6LQGJvGvEudRgjaSWwsPVVLEWXVh2hQ5HL2XKGwaaZ1HgNN4tt",
  "key3": "r9dTuAb3fobANohgUcEZBvpiC5haY8F2BExdyr1erUMLQ6tjoSxaVTdzHMLVfaqQ7wazLrLYtPBdJeTQt2gZhA8",
  "key4": "jYm64Ym5EatKM49b61awgrU2Zs9ZEDvnFtH6uxJbkhCCGwkXQRqTnVhg1wkXaGzPAgHxpj1Z95VyixuZ2vE4TnX",
  "key5": "5AVMGk3SWoNKayFAc2fazaeW6ca8icWJK1moeF3e7NebDHADwJuFxDRDG1CGivsmG4e2XTuvN5mJwMLBwAjgWm1K",
  "key6": "2mkCiPk26D17pNbhrB5Ph5ZuN5dFd55HMvFe9ps3vcaQ1h9ys81hiurtCBKHrdVqTCDPCuCbL4SaxMMPXnKNoRt5",
  "key7": "48H4DZrDsbuJkw2xWGQmA3whyJ938TZTkAn21PFb6c4ycp4AYfo3a1rUYo4L1zemE8tCakiqRoTzMFMXQvfc92S7",
  "key8": "61FuRiuTtR1w79wGoxtYJ79vhNewK5Bo2reNvBztFxvE99FTzT9m3ZSiLvZreGMFCJeoUUzDWM58SjpRg7QY41ra",
  "key9": "4KwCABi6F8wWabtJAjSrQC8Vh2fV86HcvxJkWJeMiumZJRAK5M1e4GxHbshrA79Q5HeCfHNgJEyDwxxe8NQu2wEi",
  "key10": "4v3FaiVUSkei5LAgezKrxvQKYqxmE69wAwEM8HtTjYFEjcys9sK47dcnQxVpHenLLdXANRZVy23A8mux6QAUmAeC",
  "key11": "5RVbUYvFrZ6pZVe3p94dazkhGLuTbZqBPXSaMqv1twERGTRwyRcj5BNaicghpKCbU281V1rv5a6ydnDw69p9aeqg",
  "key12": "3Gwk3PJ4Y9zSAryxosTszqUkmAPqAApLKu5ys8qUz1h273h9qjjNtq2xxVrq9x3UR43PmhwjdFgdiSZiRovaQJCe",
  "key13": "5tA4yAXKtz7DdjSmdUwd97vHCxuRX2T64Q5V7DnifWGAMowAQ7QcxfqS9yHi1ECpraxr4Ej5riMu4tseuxVm5ZKk",
  "key14": "3JoXFvYgy1zkqjvF2hrQcHKirgEk4AULJtUHwKqFYkqMx6gMQNbyedzs6JqEPYAh7zZpwyARjFYDCXreXYj7QK4G",
  "key15": "2eeD8ZQXKRNcM5qL4B4z2VcqmyTyGHAwmDhfyVkwhEmAYJxu9hHNHDZEMP3AeCzGGwB9VZn5dRceYsVU5PnGfGZx",
  "key16": "3F2VJseY8WvHzYkZjxgM2mk7QWvYQjsTfe7qtG5hCitdaWhn9AtmmigA8z517McYzefN25HrXiKizcQRcYXnFfzb",
  "key17": "4wKkQokn7MstLTSzUSmU6ah1DJZcPmHAdU3kzV4LYj7BtisS62dZNggKRP65brtMvfzHnRmfhEWUn4gzakoJTLn7",
  "key18": "31eYjQckU8KfirCpzoKcbq2DaC4YbWzw1bbbZDN3xmDhWZMSUXF23CKVk661tKu8Brr8NR2AoVPFxmYQjbTX5wQ8",
  "key19": "5KxmmvBtDYYpLBn4iUSFdnZtUavdE7YXLuhD1xayrqbRNSKPUKsdsMeiJU8wGbjaNZTAV3gQzT3uQU296mRcDLxo",
  "key20": "4gBwv2RjDfRMSen1fztFcCvdxdCYZpeLigqLACpmLrLgq7QxTY1hczmJNo28pCQzKUdTmEZiUXkCk1whgRm2jVyb",
  "key21": "2yM27Tm5xTLEKCNV8VYF1bQ414jzGr4RBHgAdPRs9vNFk3N3RXZgBvnYMYmv4bz8UBT9QZiCS9AbKPQu4cMj9LyQ",
  "key22": "MAZfva11soUmsiqnxYmYp12G5f6M8HvaTS5ur6p2eYnJGZUTxp4ytC23dGd2XVGm4haaiHTXaq5gKQzishsURg4",
  "key23": "4H1HpFSe2FLLJkeBY5EhtQgqREP5tySPD42CqGrJEUGBrwPaGSiEJ3wTuncN9WBxeibj3gVmzpDzyUeK6gN3nPmy",
  "key24": "2UsQkFeYeEeR6M4MwhLfQh2ivG9aT5vSsENujXZdWZRNNn82KcMsdLeSfQM8LSWZbDAzHw3T7KLyyKGAkkpRgcYq",
  "key25": "4Q1yvwpGCLrBkqFT42KjzW1QsUSnQWb6oXEGxZm6St1s9Fz8KNt44v77JoDbyMyEhx9wL6fJ3CVV7HxUr8GWU5bj",
  "key26": "5MAUCR62fgxoQ2p3iN5C25dCcRVTtkD8oKf4h6uBqRZzftwwmGZ6ZfqMnWQxLfEhZQda7aU4NUWRVVokn1axPKvY",
  "key27": "3fogertX7fvSdrxUsJBs6hhvHqAsvRxqrbGgi9Xd6C6dquh1rn8NxYTWMJoNHHb8YFuHYZtRMyroqpSCtbDUucHf"
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
