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
    "actSetSZMwpd7RQ1SvaJH76C8c21E3VfUp1xgEfSAHxWqjP8MmdhkHimEA7j7nHzPbXfhzpf4aMXtPKtCBFQQCY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gqxFWpyYLebyHW11A1EqeYkUEreBHNTbPTiGv9PBVGJg8NGTD4dyxMDRbCqgDkznkRp21N3y6QKnHegTH3XKHbv",
  "key1": "gG3z8VWDeZBENK9dQwY3b1MXHp5R8oQLHJynKDspS6GVkHVmCLbrBhnMQfpYyXq4JXXr6zR8Eaa4NfayUU9pqMH",
  "key2": "4nVhKnuHHe2F5PjmrgKUoM9pvs6ssc8sLA6Bra41F1h6doBs16WPLJDESDE9U7kNp58NXqqvo5yR5zm56zzCwWiJ",
  "key3": "4SLWzewxLYUCRu8wCdG3oLxf2XhVwtHeRtQPebQu983dRdKwYC5cNYwvG6Hg35JMq4ahuSN9PzY4N61JAHGSRBVE",
  "key4": "5GBbDhpVAXKRQRdwDYCsM4TVgnWVnHoLtgktG5AZD9JuicCY5PAbJ7NunfqeqAGEHv1sBKSRgBLqx2yNc8ppKm27",
  "key5": "3QQV6GMXQcR6gpxY2bBEX9FjWaiK6KMSacuPVnQyQTniRmD7XVenqXw6N3vUXWNGdT8qZ25V2mrz2kLmXCdCVGYa",
  "key6": "65SnEBeyLMGKvjZJAtazwmQwCqnehFA3AJ2SZcpKZ1FWgEBcdWa5bWLfxMkvVLNdKZ39PXPvyZ9uG69vuHuNH34t",
  "key7": "4MArxdTFhVxNV4DtfDn82DhCeaXEbvoiYnk6rt3FsYbp9UiNaz12AGji8DFZuKcAZ5aRyTo9Tpy2wSjtU58C4UFA",
  "key8": "4bJokUeFr3ybFQogGbYzjkT8EXBrtw3MJexup4PCskwuaT4jrkJrnJQj2NVXBPErE1WZM7RdARxLFcqayJR5BTxj",
  "key9": "51UPuipXjQdHcLAXSvRL1Ws8jPMf1G5DSnpbBLrJin7ZMDPaRPdD9Dno82QN4WghmQ8bvG67vKvdNworUhtNR3VG",
  "key10": "y3vaYce4QungVWT8GiYiUSCQvrZup8QHtNTvRVYzjwZDvc1xDLWFiVygmkvTiHDAPwFeyTrbDAJhhBPWr8vYqHr",
  "key11": "5LBamPsjwmU7TeacZ5ZsRD3SKs2dDqXnYtFdsNuHxBLC3nKv4RvN2YA8Brj64p5ht3cA5X9xSjwi425xnniZg1ft",
  "key12": "5qc7F4svYiDwQ2uQ1D9TPskBST26SiK8M7Rz8LAHeCJXDszbacCK5RbRcfij3pqjBCwTaavnJ14K6B3HZuitenL8",
  "key13": "3r8CMZFfkru8E9jDfxRtGbkreApzBVBCzAsWLxoeJror7q9TucK8VzY7fg68iFKFmF935f196pHWC6DVcfhtivUh",
  "key14": "2LaQ4Qtg1Vto63mM9zHHxS47WNwuxxhVPUUWRVySeB1YDuWBUcwXB1T5ckLNYjTq5F6sucVcDvDKXt4JU2ReM3wh",
  "key15": "4EMx9rnL7JuAEKFJooDWWqcto9fYSGzKL8SxjFjY1ULHyfK271uzsQPt2KjBcuK8jvXFZggjAcmHjUbUJtHTU9wg",
  "key16": "2EEKsb3vxJ4RkTNDyfZExvA3SamBSuN94BYiJxQPKaQFEJCuETeV1iownPjnvd64jgw41NgDhX9PSZwR53sNDcuW",
  "key17": "c5Z1UUeDVQZ9vguPzNyKcCQpK6FDyDRfpHsk29dCWu9bwdt83y8TxwirJWByFHFZAEuNFHTf5qnyArhr7qdJkEg",
  "key18": "66y4xJa3bTgmmXTFxmDpVNUrvK67AyMDxkh5yT16w1BUVnncAZWdAj8kkLh7ZHtEbiuXqLfoDQmxPsG4awEwwG2t",
  "key19": "25hQKQJzmhKA7du5jBZh8txRWDuC6bcuMXU8MAAz43KSUdBDWkCPyMfYkT6DYtgdxU7f493BVx6CNgTDDvvGZ4Uj",
  "key20": "3wpGBpTNi2e7dJp88uTktrxeYRoCA1DVnaNSnM5RB4zUPPs3XsLz5nKmb8BuyqmEiJznepVp3o3seQvKSwrsbYAa",
  "key21": "3hSuWAfbaVWJ9C89d9j2uKhfEkN7AKCXHiAeJhq8oNzYRxk9LrRc4fn6BY3j3C7vLFQ7LhdbgiqpEGapupkxwbt9",
  "key22": "63EoGuNyCViCVFcNsS18mg9TVeMt9e7LPNu4evi52a5UeA2PyRhXvLmxEkfm5abeBbnNctan7akfTKwPJQG7BhAj",
  "key23": "5xYE6WAUShTL4q2QtcQtN9uLLvu7LxXwYSPrcGD8FGCfUL8Hs8MnqmSYqtz8DWjb4DLnAyhDWhrR5LQN5vKiixsr",
  "key24": "28k2buhEG3Jf6dCjLFZ6RDt3QRX7XAEhb9jArjLDfRpxyCssR8tvv9xqfohTHn2CzzdxiY2beUBegpffHbGhEXrY",
  "key25": "4Yb8EFBm5LRLgimY5YqFWkLigVUibCENoqbdDNKR8J8bpCQGWY9HPpmRPemAMFaXqur3HVutzBfs5jJvieMVxKiy",
  "key26": "2pisAjjux5cnkwNs67sMzs8EQ5XkykG4eLAaJL6z9Y2ZUuwGJyE6ZbLbdZQTZzbSAbT7LdCLEZcf1Yc48wUA5gFh",
  "key27": "3wozNjC35mSW8NA9keYVQrSUSBnywsSWDiMs7NRhf31Acs3i5SDFL3oV12rKxpbuEkp9z6u6ASU9p6DbW2xbnPuk",
  "key28": "29z84jyfG86nqiSpCYAgkUd2Jy9AeLqxHFH1EcHe8vL8NCCCsDV9X3nuLQwgeqhkM57tyYHeA3WpxACcFpQpBuVw",
  "key29": "2YwdmHVfwsf8SAG27v5VUrxdeFcfH1PqhzsPYJR8No9hkCjYhzM6MsJJjQd5np3ApR3gnJwzdPGXqCfz37DddxBg",
  "key30": "44kocbmD9bNW3MMGG78MFMGBLj53dC3J2T6azR9zgHhi6xscCFUR1axvKEX6BhHgv3DuYgyvsBHFuZG8Yo3YHGWm",
  "key31": "2fNKaQ4GBRv5tKSEp2Yq6Eb2qRMT3JD8dc867GLNFQjcdkJhhWXFYybFiStenMtBegfQZB5U7Y1Lq6i8WgUvFiHZ",
  "key32": "462kKvftRuczMmF4pSH6AFM4YYbZKZpNeT5JZc5JYB4DZLhHavpBhbZUjBFBJ7twzJdHVg2UjRHKGpYW9i5GgeGS",
  "key33": "4PxnAJtYyvzj68Vq5dhr1fs3H8bYBWCDLVwM8gWmPF8YWFHJLRoJTqa1ni1coubDRqncwPcV18sMwbrThDSiM1d4"
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
