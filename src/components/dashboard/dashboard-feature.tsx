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
    "4npHJSZXanJjz91DjmUFUH3sHKWsvVNQuSi8ASunyUq2ScNqivPTH6W7EabKwRbgN6p31ZycgKPBvUGGYArTdcGX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FCySU4XFUWYTcThGZHVo9jJwiLFFiAduvswJ3BDmPBqzgux7nPwT5DWVXt6YzafxckSetEVRv18PHNW6D1pV86K",
  "key1": "5Cx1LsoAJHDT6DsSeoeTQvBTwSpHvR1SgqFSZDKEuCVzohkFXBsKDctu2JpA4gDKjrBfq2hiBBp2cSRcU7xERPaH",
  "key2": "NxP8tstM6fjskMCgSdEZjnxapVQAqrtnNnVshK4xZsmFJ1kZDxh2CgA9KYgaSfAUZukansEq4smLPFzQokWBt5G",
  "key3": "4xu3ap4TQBWMDALh8Na5aC13cARk13rufx8fjZpCrVjWjWWG8126khAeVP2WyfdFqJ9k8oKabgRdS661HUpGEsfE",
  "key4": "j9dUBfgZZYMiz8iPpJZitT6mcH9AGQEMp7uErrXtx2taBzJZ219b2sLEvEuvjuEfm4YMVuxcxjYRe13rpPk6cTY",
  "key5": "qd78gGymEpwvCR52aoJ1cZAhMwqMmYBkMEsxtt7nagzYwUCLrbmPe8iZmdXAL1iVtDW5UZjUmyAcWL4gjo8wTV8",
  "key6": "5GMaEmbEaj4XHex8E75KkZA9qS8jWgC2xtGt4PNAzKqk3uN7GBqR87G9A36PspPCD55mUzfKYT5q7FLFh98LpTmf",
  "key7": "3Hts49AcLw7y77BjXgddMGwrhUeFhiTeYGSCkkFsDxNHmMVa4hanhm838fekdc9atuaaWYdfaQyniPyRy9Bv6UgL",
  "key8": "5Ze5wooZbHrLYkigHSFvyCMaVH43eMezZLLjZWD647iJBALrpR1oTDVZxZimBbdDWk6DP68XcQHjMazMHpjqWuj",
  "key9": "3ofrHGXkb4QR7ZC2essi3m12nRznsFPYpEkfxwTMxm2ie4y6kbzLEQV62YWues32Ctfj4urZKJ3zApvGVUJnEi8s",
  "key10": "2WVaBazmyuH6jJ6CSqnHYT4Yx6fAXNSrfXvnrkYhafUQNMmpbUuh69LjDqkwLQLTZvBRyciq2fRk4R8pnGNi9aVr",
  "key11": "4RepkonMtfy1yf4phm8NJwgsG37qysogTzm5cm7kHTKTyT8mfKMnF18c2qxC5bxeyjksWXrbKM2rSXWyrWRMy5KB",
  "key12": "34ZVuHVqBkzj17WG4CG9ALb3WZFpqACeWVZpap3AyNe8vBnpU7Nb3nru1Z1FWg7vSsxaSfPWJ9G38ZpxZv6kRyfR",
  "key13": "2HbDR8eezajBR1sEcJLQc9Dcpy64Spe5HvDx4g9eryqP7g3XuPAQJLPqUXuzd3hDFPKc5iGB7VfouP2yMsCGGVCc",
  "key14": "3z3PhPk74TSDXibL2Cu2RcdzNjnXvceE39wPNVcqLEwo85V9GvoT8aBXgvhsfVw6SHTjjPqyHB6N7A2mVCgWgGoC",
  "key15": "WBX381TxHbSYgf2oxh3srzFqNe1wC71dSGqF2dPNZSP1SEYFFoFFnQFKscQLytxc19SDTdx6uQsvGqsh2Mj858R",
  "key16": "42rAzG36xxkhRFyWTGuqkACTzDPQxWWW4dXUPfL4BCTjMAavPAKJAGKtsXQMiAwcrHyaJqfeUGpfw4AQo1djqC2E",
  "key17": "613b8ZPVbwenx8mA2ADxtW7fdCnVckVdjkgZkGps5f3sPLVa4VoSmYWZ4Hpjgtafk4Zp6V4F2qvEcZLrSTsaSLKA",
  "key18": "353ZTFXdvmEQHkmoDygrf5CtsVxgd5g328cx9Px98BrZv2NicGachmRZsRxqRbteqQXxHhTgTqi8ysASXE1PiVh1",
  "key19": "2ZbUuJ6DiWExfggvgwGJZ13MXqeWhT8dBsumUefYLr8hLAyb4zwgetn1czBPJiw5ajA1jGvdiNNqAnCxEu3FdrbY",
  "key20": "2kCjDYPTSfkVhfw6gu9nZ2HRvY5eudQgxkiRBK5P7oPnE3eQSabkYiFyiKHVyypQ6SvFMGb24785EgqVxLoYuMFd",
  "key21": "2ZBAZgKWRUrdiQcTsYw6zPRDA9t1k818353WhvfNfusr2meyGdqWorSdWECrAsDd9HX157RpU39SFsaXeiYaT4QG",
  "key22": "5hrCmSeByi7MXnJY4bDn6WCaiGJoKsxobW2ECDYBiFxgLjhvkuhvHCGJBWa1Kdkeo6YAgEvcfDhqx6RScCA3nDNq",
  "key23": "5f8hzAFdMMT96CqQ5U14ADZpYQZmCjR13xyHdcQg94djvJfKHypvCFQ4qdDd8hMx2vGS5hDmTKyDuDnRch7JNwxg",
  "key24": "58nxbTPrE53eFgZfMPq9eyfrftKhJrgLcERk6mHsoS8vCEXvv5gd5Ho3MYvLmE1sJ3Qcx6oq2oKKLAy5bh7Y6m5j",
  "key25": "4iuw8TQMh7zpN8AiZ7p63MLXVbhWA164GwhspE1e2MmZFXN59YnEkeZi3nToFoaanFyCjB3rhmVMj2KY2BDZw813",
  "key26": "2LHLgy8pGC11Tbmifbgri24HzoMdhwBDCG3fFV9amgVWrF4aRzk7XwChJhjzQbT62gA7d8iDNd29ojLCWiB2CFo1",
  "key27": "5nxS1XW56BbSWVenwhEiB31EUbwZq49ZCpu7RhEr6u4fb9Kz5p42gSuecymYZ5gHQwesAa6Zzn1H5j9FG54dn4pr"
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
