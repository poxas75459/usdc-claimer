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
    "2EC5y29egoWDM8sDffnyDEJo4Ey7zmz64G4YYaWHk8sAh6XK12CLjGs9mjCUUPkNN53xM4JYJMmFYif4RVj5LZ8C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MWPnCSFQ8C6Ry1C7yCUYqqZeWMcq6qtF6tT1q7RSkmwrvcyxWCYuMZd8QikCjphCfVaPrYPNpaJMD2Nok7P3Ae1",
  "key1": "5mwv48B8d6eqiTpUtWcuJWw1ddNz3G8akS5TXXSn2topTtV6GtVaYBrY5NvSnrWgeqUYogpjY4F1PDGg9ppWAPsb",
  "key2": "nSqy7kqUPsd55Lep72JY19LobwywE8hMmCzhjBgyfNneW6534qXp16UtEyYQibcBU3XjBrsRXHjxwnQVNVrx371",
  "key3": "yRyiBZiqaPAgSpfUrHxUZnf2NUFtndhU1Tj9TNHXkt6p4KbzTnWmGc2wBUwfpn2NtnUFSckNZPndxuGvfW4bKpr",
  "key4": "64ERkWCmekRSzQcJRMz9i32SGr6iPvGwPwXC1wfXazTA1UJpULSguFpv4jn1YjXKt9C6vmWwc2xriDoBC3zksV72",
  "key5": "476Vb22jsVcFKMFPBbnPMfuLmU6YwJcgMa61q1CAxtU6hfCQdMGfTZxWXKjwNwfZF7MzouFmEepDyVio7snmczMF",
  "key6": "66Atz9HdDsfagmSkaBKxzM5fJEpMh8x7K6vPBK27qCwqPwpMn5hCnErLkQyi4hYkQmGkc7otCiTKxGox2yvMYEA8",
  "key7": "4nk3r2xYMNQ6ApJJoHcKpPeprktLsw38yPQF2HYbNDP5SF29JdA33sBL6zpPJL5hyAXRpuShTb4yhvw3YcTHGEnc",
  "key8": "4Z2KdFE8z24QwSzWDqn31rVgAkKZubpmaa2kPfFgpvWEx3sHXWdtEKZDuGdkHm9s6aMLzsf16XQJyyw42LbFZBr6",
  "key9": "3AQ9jDDrJBkV8a72nHFP2MmMovbaWpBg8VSyw9ewuAtLXJCR9UnKeRorZDDxZfa7uUU4X3n9bxDZ6vv4B3GzTiZA",
  "key10": "4MRPFjv1uVDJZB6JMnjTE5bBUmM56a24E2h7cMeuYxGERNMBrYxUTESX5968aHaYdjvZKo8TuWGcxvx7aijbN1pV",
  "key11": "5LFrd7mDupMDNQ4z7YhdqN52prbXRU5UnF71deuKhmag6kHyVTyPYEoc7mix2sGzRFT3NJdTuCY2VrfeGgQp1Lj1",
  "key12": "2Lksms8hJpcEJfyC1my95Nzq51xqCVJYSdUNmLXP7WeqFFLT1t6qxz48ATG4o8mP22fWXz1tFG1yTEGJr2akXtft",
  "key13": "3RuEMYitHr8BdRjKgdWsgD9MByYyUkxhnn1Yi5vwFf3obTdL8nm4UhcvMk2kpvAunCLo9GXhW5Eu7UvPjNaK5XDk",
  "key14": "4Z7VdLtBcZwFyMBXaAcmpeVaoVsZ1awDqCAbB9zzGWhDtATaDJQgPv3SV18zzosGwfbaLTeJPj3upqzdivCU9eVT",
  "key15": "FVTSxzsxLS55SfHTTovm3byY1jjwbdmK1BtKYe4jWA7ayTurMEFnmsHdSjC9sJdzMqw7L65jmt5wcX6myTvQtJJ",
  "key16": "43DnA1iE3kuveJ65HDZTBgeiwGiwRBfDYBwcnZUbFivexqeeX2gMRHJ9ZLRok8umxZkPf6qty5Zu5MTinuSYM2kQ",
  "key17": "4zCmzVp8riMP3CUYV3bTvmMBHUoXd8RxSR4GepmHfquUjFMBFZgZaaDDwSvHTNJoe8oc9J7g83V8SkoZ7EKitxTL",
  "key18": "4ymc5tt2NSnYPcCnKhLH6GyWjdFWCvhFYhBnxfLEgfaAdkrBFpAKWnPxNA858FZEXFxSFdXd6PCVaXXiNw9ycJMC",
  "key19": "394dnQP9pWPUk9d1afstNxSFYDxU3G85fDZvzqyD3nPRHcqAphbadVGWvjf7jB9rBtdpeWBzm1pojv5kSJ6FifG1",
  "key20": "DfUaqPTfu5jtfnPiNA27iPj3QwBfT6sLLAqt3WqCa7GBQAH4MQMKNYMTFvKGSkb7ByP1NqTiDVLW2CyT92Pcz4w",
  "key21": "2P1iaYZQ84XMNDzKKEYa98i3YXanFv5FKXvy9B2DheXyaSo3h7kBMdbLz8CAgeUmcJk9PSJUVJY1BaHc3vKE6o5z",
  "key22": "4mM6wWdz6Qzgdf6ZubfhMxKYPoqWKE17syEgahhjYM4gXKzCjKvkh3ThK22ZAewgL8LU1ce6zrTbBFnp4unQ5aCK",
  "key23": "3wgBQoq2XMpMkDiDGgFQnS2S3Ffj11ZWbk7RS73EBLEMCeYcLpDHWS3MwRt2kV4YvB2QfFQkNpGqJrmwn1JxgeeQ",
  "key24": "2eC7fAdhjvbqWSeu4vM3SJWoL9MCrYNVYEvVnQ1fAm21pmBsZLURs549P7zkmLudW3fqKWJee9Eei2zrqQbB5PKs",
  "key25": "5eAyciXS3FuL9eNqM6EhhrEfFLiKszughsjRwsyJp4y22CSMDvfvTGyx1teD3BQ3TxzYnULP5KddLxXD8zKwCbEG",
  "key26": "3LLVtHm3ycgzrphDG6D3mc4BeDKFY8V4TmBm8sm2csVKnhYh4fCjCNVn2XPffcfWaX7hjJRyE13JofdeUcNM2PHQ",
  "key27": "3dyHHawibMtaaaBXs4oSiJ5SBVqPQyKZYp3PL9mPpnCq6vfymaEEHQLMLENae1Fcw26tWFwhCc15eCUB3Sutyp5B"
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
