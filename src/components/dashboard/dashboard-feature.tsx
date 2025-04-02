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
    "4SMVvCRBJ5WHQdJPGgmsPD1bbDe7kNPaFSQVbmoT7vRfwRdnSMSxv4sb9GuUxqugfH7BV1aZEy5nrv2jXtM6hNR3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ieefUkQvrbYviaSe3iS8YNe7bCSuURjC2Agz4xTqL7g5K7CFdbw7mcCV82yCdzW6v31R9Zw4CG6m8rjoEMurUv3",
  "key1": "3HUvshEL2jtDdarEbiBZFCUyN9wmn5d5RFL5iHaydyvvPX2XPh8SCyPyQjPqwC59f3TqJVcGfxiLAyK1HkwvNCt7",
  "key2": "4VY2ana97JECzZGyt92kEN6p3zfcxKm3TAbPhCGzmxGRSLdZdGRdbAf8Db8LbxepHAsxpYgUnpya1w1QDeYTGbik",
  "key3": "3yLVjdEtp2KKiUAdhWcfVPcQSMJAU6xp12hd2eCUXNk48xQ211hX3ZF5kxsDYBemvYeECvfRqjhCnQocRBkXFY8a",
  "key4": "5HMuDcBPi82ZgtFZHEA48HAhDTr3Xh8jrVB9fGzSMw5EfKwhu9r7aXuiad6TK6vAYG9qVQ9jxBHozmmF3Yme3pRF",
  "key5": "UdwdQJLLmCk4TTbJ4rKyDmUSGrnELFvH2qGUQVuwRS3igKVRsihDNd4qK8yzMyL5H3zP9ZWtetNhSz7Sgvr7vhL",
  "key6": "58qNcV6KPcPXcygKykNcdcVheRkHWcGNgBD7we4CxuyM3qVvW8sYVdDDDw6bH3W9oZuNEsgomTrwk2t5Sp3sidwb",
  "key7": "3JEd4cBitavvjK8hAbbixGVgc6N5NADThSo1JpzV9zNsaS3fn4QorqZthavMPLmxhkcvDbDzQdKDc2ZC21wnffzi",
  "key8": "4ohTG6zN3ZPoLUhbpJtkfmtJEiM3iBTKBJdPxw5HZRWfJC2UVT6KHg4PJigAtCbrrw4c1TDbhNMwfft4ea8hdpis",
  "key9": "4WDwCJFMoeSrbfGJ1R1K3bSy3JLovWjWepMqbCn38FnL6wouSRMr4Hdx3W8LKkqMJvyPTF3WR7rjyieJUpb1gryw",
  "key10": "4tsgbj66NQ52KM5vLij1kiaPWVmaE2wXQtpAh8jTS6CgX38wAZ8u5zDoZtb6GYH3Wd6z9oxbiDiEWf9XKUB6TGuk",
  "key11": "57n25Rv7rypDtWZD3ymVChkiPh4MYXWgzyPN1nCFZgb7TSd4YPptfy27EhPX3yKzVYRLTAnZ2D1Dq72fMEU68GKe",
  "key12": "2JCgfYYHV9kapQ9GtdURTAzAg2PiCUPTGBCHLbMh9RGRUUHBpsBZCDLjeX7C1tmScrrbwsBtCnMwn9yPcD7bUxbe",
  "key13": "9gjF4DPbFKHPY8hSpL3UUn8TNAZVmSqSQvbR9uMceCxqxeTGJcktZ7tSvSnfzGydQQBquCzAE9S9ErHbBmTmciu",
  "key14": "3Xa6dSXTTVLiFWdxufC5b1zXK5n7QpaPthUpBJUrorohL54mAMWbtUte5yJvDwnurgiZRP4rPLEjF7n4in8J8JaD",
  "key15": "5fo2zcq6aTm6JXNwqjLKMZQ7h3YU9tRWvJ8KSW6ih1gyTgbNVWXmjruvFFMgEdYBKscevKpBiUS7VT8bCjoQEmQt",
  "key16": "2UmHJTTgz8Su7DkT5G4MT53mi2noXV5KEjR9evd8k5BemuPSsLPv1oVTQtox76Rpm22Pu5cG7zPhtXJ9RdmEmW3m",
  "key17": "4Lgocd7vLhMdtFhPsA7N2HsonauMXCv9njsuxLWCCLjz4tcgucqxvoZcejGu7em1fuTauu7vW8ipCVoxSEHHV17F",
  "key18": "LmodKaZepjGk1cBiwe7kqRdLtczQuqpRAVzPWinLaV61QraB8w79b678vX4BDo7ffPti8mFW6npYRzAgXCJ1rP8",
  "key19": "4G1ax5RYpX16ZFGNznHEwsJo5HE8TWgc8Ns4PicyeQGB7R1vdzKAMBSJ8nAKLV9YwzGLMh9k1H1WTWnDKVFekVdG",
  "key20": "39Vf9aoghLiFYU2JKDJq4kNVjW2yVP9GtLVtC4W3BgLvtJJnTA4vm2ETCzoqeoNMKRB6kUy47te34y2fJDT88cDv",
  "key21": "5FrdufRHxoVAb6wA1tVY8YZrsFEnVB3PCvCrv8xBRD2oFd5tTH47ETagUrLLDQ4Q5TkMEnYfTEZ3WSTZuQs5eyud",
  "key22": "3r37evnU1zdgipR9AfiPuAJhGfcyjvRrotdPUZKYCt6girg2Ly7xr6N15JRxbJFNeotayhfaCvDPu6a3SvbyoTft",
  "key23": "44RyQH2PgKJ5ssvaCSCj3PpPmYbWUJjQfLKs4VVY7tFeyrJScYdYqYK5H9gQp8zGK829p1RJJeyF6N8fkxuxX33R",
  "key24": "5iEyFCdckKwA1sTTt4Qcp6VmepTjsN61KXi4Yha3KvdYXQWKKkpETfpFrbtxrDFs7aDhv7YXHR36qfWV1VbiJBeQ",
  "key25": "2DxTezednX3AVf6bFZNugrFqN44Cpk9b96bVmnFsEfxVPAzaYRNWuDT5fGRfMYzpi55aECusmsPi584dv7KPKJGh",
  "key26": "3W3N5WkaeGbXzSaPw6X6cqXCpu4e4J9bpWndiBnFcb9bc4SZhb94auSso1QydgoB6nRpsWmLQgMVi8PnHQSu9UE4",
  "key27": "fmCCXxh5L7Kz13roBBVjKox7WechHgDj8mMjvGULmj74yTr4vVf5N1D2oLjC8CmYbxWAbVcXwqLCyCPxFSn48uR",
  "key28": "3Z77fvnAfPyLLckYkXZNUj714fMUkVDh6xTeVGtrQSzfRhUT1V6gPatq7K9Nr4Wo2hts4WhPahkw4eZ1wquo4z4K",
  "key29": "4XhgvHNA2oTL8F9vbpXAJfJqAzbx8jgD1vaNJzfm4GSUeswcaKqevWH3oXM4EyS5rDTzd9dsWjymRG1k3JV3CPAY",
  "key30": "5L5vrx61N2XsS8cScVPt14Ewxvh5AW7aAUaKoBFHeBKH5m5FAsfCE7kSBwsnCUb9PrXteimWpoxBGf2TFQnUvPKS",
  "key31": "2i9iECgewiyvmNRgnCVb8bbQsyJ9Ktn9FMjnVzdrnui92zfuuCbPHMxegVjfmfjUuGKN22JSiAvmALfZ1DGAi3QC",
  "key32": "wfnN2dqgk8RZJMX376Jgh6DWEwCRrt6A7dtqVBvStYgUM975EAsgBG6QDUagfRdtsja3ZNED1a1uNntmY5VNRNf",
  "key33": "2Frp34tEY53q9UFwdMkWmiSpjTPMueD57ThSAuBkWW7VYEapidAxSBMPASvaUoCXKC4rjLHQuJSkPed4JDe3Vwwx",
  "key34": "2oJAFUHuYj2dGHFUGV4otG7KBfzkZqPZLfm7FcBRkyzwkhnPZSBs4P6ixsJKtXdUSKYzkSrfPoHt6XTahPAURKoL",
  "key35": "5GNJDe3XXepjctZoevHx7vJEYW6PLXDKwe1jkmg79n318ox8P5W62pkD6oWAVjPccdFmjPTqg2qLNGb2JRLiQE9z"
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
