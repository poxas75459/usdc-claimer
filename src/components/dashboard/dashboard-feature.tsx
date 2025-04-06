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
    "4Yst7gS67Spfzh4VDdmvZ3VANz93hPqtpCkugZfYgF8UfwLqRv9xAZXkiTn7E1aQyZ89TczAk5Db2G7jMvgubUVd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eEU3XYYRSqFwWux4JgxuXRUCsRdAztJjgA8X9b7pXokzuVC847cK3LugRLDitdof8eHRS7y63PvfbgXBUfAdDqv",
  "key1": "21Yxy9CCbRiVBu4bH7oaFQTvfTUKfC1jX46rhDMnuX3ztauF9xgKo7vyUyJzQeHzHBzyJ7xBrF8xQ2GpoRAZiq5p",
  "key2": "3vL5zhmjiBPd2WUbmDUoJAtxW6PvQFxZ5XtVTKcybidJRVwVYAJd4UaCqfK2igpoCyf4adUtbCaPBAaLMk8Ewdev",
  "key3": "45R15YhRnn79G772WoPS3g6Wkc8js3d2wZc3CeMztpEynsc9kWJmkYKCz3UKg2jkUZiLMdj5jPmYweejYBBXzUxx",
  "key4": "gAz8VCoayieSvL7ZigVr6T9Rm4EzKPQYV8G3DWVHZTa16Yep92jb5ioq5fMpotsiYGEMQBTmRd8MKotNQuj3oua",
  "key5": "s9QFVn8URGQxsLSbzmTSbvdiTZcs6USRmediV1nezCgVGeCocyxmjoGfNsRdKJXUQo72sPW34ZkPAuKMfm91wwY",
  "key6": "2Qh5de64PGCWd2SYndPCRQbCcP2ZtzvuoGnfDNQskqshgGFy5etEjnVJs3bMehKCRXgdaAM5mxTD6tNDRSXX1Bte",
  "key7": "VzDPvqD62iKr796TVgCK1UY3F3t8Nbc78HGf1LvH2BhBitWAS88ARKjmm1v2unfDw2WeJCpHTCGC34oQhocm4P4",
  "key8": "67HnuP2uKhEbsbA3iVdanGgmyJxKL1htcdg1M8CZ3KLxk2aVxEnn1RUpyKJFWE41Z7rY7cxz6jYsiktyWZWjHGvy",
  "key9": "4rgUVh1jpEtmNoK1Z5C9vunEeKgvLQfmrvcDVxJ8JuH5cLU8tkV6FB9aQPg1w3VamxwfxBmJsHrKf488rsKvQQjd",
  "key10": "3iJVLUU45qfN1eSGmGonpaEapgdvZ8oMkyQtBQDKp3gDNPNQ1bsxHFEapfUGSYZ8Pkeg85Szw6DwDUR4vpUF1XvY",
  "key11": "55rNjjXjqRKXQsnmZFJgGtDHn9vN2a7KCEmon81HoxN3ftZk4QwZvMTo3ghacNN36cgV4i9FF4f1FBTFH11U79cV",
  "key12": "hYb6DGdjf9GsEweXZQcfv4hEfBmhvHHfqiKPEKwaSciYjs6uRWnmBdm4PkYK28odgqQYPynNPEfTbAo1sLRGj1t",
  "key13": "5V17BSNdtUZ3xrBJJs3cJwmTQtm5dy9d7eJpiRevFBLckKPcMjj6cujvSdVqhoaSVSoaa2PS5Z6ifF38RkAdj8CA",
  "key14": "4oJZzyp9fKXvPvHdXKvJ6tkYicVQ7NSo5BFanm2s14HCpVXdULvuBwy9WaUeykcMG7CpDj6VuQHm9pwJfgX2R9gf",
  "key15": "4dKvUc2K3WjMnCno6u81nm5ra7RbxWCgL175CH5rsBzkjCmdZ1NfoYdJVJozvYorAFBV6mn2Z96gTFYseGt6hAZw",
  "key16": "3JfPK8TaRAjmkL3c81D2mfUYXHsrcfR96xamWN3fapCrn4U4LjLNeot7FU7oZbgnuF3mdtwdXB4U21SM6sZ8DcTo",
  "key17": "2WuwEA1NjfZityHyNCyWFozzdLSRMBCWATJd31qRprjYi3xTf9mR2XYZ6DtfjK5MPH6ehXVLEqt78yAPfvJmArZx",
  "key18": "3QASFZKGjqmdtzrAFZvMuXH3ZeS8uChGkzCQire8CAtjTZb5rE1Acp5aZ5NDtoyV1X7wgafCTokRCJGrnWHhZk6v",
  "key19": "5cmE11rGPJvwh41mGAZBwcgTWjtC9EWXEQLGZ5qojALHDMnk5uPEo4isThvz5qsBiRtuFpUNBSCWMZJCp3BqKEDg",
  "key20": "3e8jZQYYhoDuS5RYfcp5vDjn3MTVTFxaAfECUHvjXzMew1sLxfmSBsWrawngW5euM5f9fEQgdCU5cnwwmg98PZHx",
  "key21": "3XZduMXAtjxfJDFRAfTJ94FBN4PcKp8joVmPQ72CWtgmYj4TaJ1KHmQLjC3ax4g1zZXcZHDqVtPZe5xSKAtxz8Np",
  "key22": "7w1eahbRAmLCYbCaUaMVqpptPrkN6Fvyew9VunphcatPdFdwsEDmDcLGASJH9p8hh2g51PjWTNW7n8JEEmNUCiU",
  "key23": "393sj3M9pXp33aShNnUxW36SdXtQosKzhbz9g9BjSFVgoPbPdKT8yz5CpjT44tX1NUYtfip5yR6SmwGLBVgSgXao",
  "key24": "2MvSTCW2RCJd9CzXTXXfqM85tREigEwVoDuYxVDknqrJH5XmtK8rE4MWFwuVDM4VLhcLx87vdnXAisZdMHKXP4pv"
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
