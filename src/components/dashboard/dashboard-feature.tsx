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
    "3eKdwjQF6UYgD5Uu6RWSoR2b1ACKdZQMcHp5XXLcRaXuX79hvoA253TqrDLxDKPg2bbpAvYDDRQB8AdEJS2yvVEk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1DDBDgv63RhHTg5GfpLR4e4mjoERdUDcZeE7pJuTDmjqhHC2V4AVKrbpP93h6V7q57aPNTATkncqcer7ue7ois5",
  "key1": "34oYxgqAVC4RUxYGoUSSpjxfwLKinUn4udF4mpjRHDwpUeUyq26qNM7aZc7qDrN7Rs79AWbJewQ4PQxtnwxsQ222",
  "key2": "4Rbq81MJ6wop82FHptRSUyhvYjgd7cAg7X7pMsMyCSKT9bVbu6Bw7XR6KoeUYFXz9wuBVyjaJvdUUmjmF2RXw3AA",
  "key3": "28uHhUCKuz4Z19bbQxTPf6K9by5nhhhMfTbmU4vubvUBjKA8oM8t9v1tQDcssaWYTWGTXXvmDHNCDnrGRvgz4GRm",
  "key4": "SD2wNMHdxCt7742E87xhnG7uDyRjfwf4AuAUH1iYSe9W8ZZENuWeRapTQGs7JZY2iJisaFuEcB1Kfi6F5U2dsGu",
  "key5": "5wwZvN2ZfcdzCSCTuozHuqG4YfZXVVwp6jr2K4SxrC1abdDTDnRoXco6SJ33iKQXoLViVm9oR4vXcgfE45Je7PGb",
  "key6": "4y294Sb4EX8VCvoroeHooh8v7LeyVckaFaAqwETc65MPRnt99QQnPy717cgX3bt6Q5qDp3obMtV3pqa4jP8Z65yS",
  "key7": "bLMboddWCFwoNVkCDGmPzNRcppNHZNsRG3cqfcjEAjJZi2wM3xdnMBHWigw7tVW2QQXCAyUvG8aPGEmXfHiinfM",
  "key8": "4xrQGDbpp8qqDkY4S82PEpshSQj8eCgcCmFhXibUHe7F1uHcrEXwMVSXR9GktYm9dQ71JTwtcQwZqMbPJADxVY8u",
  "key9": "wFD8WRSnJ6jbiE4smTjV3MHAVn7zPGjTiUbE2xSqnU4szCvRTHijy8G6CMBnP7FKDe8vy1oQwLaXUBM5eAJbqez",
  "key10": "5yK5FwFU4Xt65H9SLBMurnGLKiaU7kxxYXqG9rr7NpArmzpUBhjsAL4yhBBYfMypkGFve7eunpKnDc8RgeQQj3jR",
  "key11": "5JJ2jup3JAfoZfmPUsfVru2BeaRv5jJffwrbsrHzJXL9rC2X6D1Hfs2ZEPwhgjUs5Dnghh6urxmcwZBCNuxd7oev",
  "key12": "5DstLTcFBJBi8Zx1ztWHpRTqPzfgiFvjsueKTCXqGA8y53QWrRh4EShEWjh6kzWPGAgVS63hMLvLmKQnwKsXEiby",
  "key13": "2hiwedYjReTQZM2wTxb9BYxpv3gKNbqifXYdSFLYF6PL6qwezY7FqSdMssUJ4g7dntDHHWHhrPdrjuHv1hmwD3bs",
  "key14": "5tCCyt8ZEUnUhRDBLu7bcQHFHLy4sodHtHBv9c3iE9X6jWvZ4E6458fmnKVsANFZrLLxzwmR5WV1nCnJJEXe5KrZ",
  "key15": "4kUbAkWfFxy42jtyXgKwdqHjyc6v8Ky8jPHEZXeQMfyQ5UANu4xquxJqHmrLDj1444ahX67UJPDed4WnPWAbCfdY",
  "key16": "DCAKPV5saMUV5YBsew7Y8FkCXF1Pbk1jGLUGxd8gdrJ2krFUzisPaswKWkUyQQSsWNPPBnTQUFNMBsoYPiEAqmb",
  "key17": "311pU7iZSuJid8CfiUareS9PCvLm1hH3PMc58qGSTqLiDQQNDR7Vvy5k94eaoY2YuhJzxkP6GrSKivTETvgnhFwi",
  "key18": "3v2vEXbVpYCXJGEXZihrajMyNDoEhmhJGdCtANZ2o1NfyHu9w3qLzhHbvxCb2ujBCDam29Raejmw7W9B5jGkYNHn",
  "key19": "3Bikhm5LBUD7YgGRd84ejMUGr2y1UUkxmcmbHi7WTQZdQyETPobkchcdQjPvAknVzpKri6xxJzazPFiCbDezGHEq",
  "key20": "3qCdZx2MWx1Ut9eBxTKtpg8iaXQBqnNdvTr67FMvgbHW1THzzyDmQfwudET3oVmSstPFQj6h1nk77C2f1ReAVgKL",
  "key21": "3cf6qebPhhmdb9RjnH98bP8AvP5CCsWqVTShHX6txLDUrnfJYZs94dWVgWsnHQA6d1UFiF67co6MDT7WaC4mfpWH",
  "key22": "3TTExWonzDmgVTZGHRf87B4Cq44RTurrZZ3xYo5WChm9svDSmF7sCeXCG73tBS6aDfG1S1SgGYyH2614UakoS4su",
  "key23": "2Ps3tev1aypVXaFgyj7a4BTSVfLxynP87iWmMmJ9mJECSkEcB682dNZhbjn96AFiMw3aVdr6F8ZnvZ5ESdu53L46",
  "key24": "PVsAYgUnsdpjWBMtfaxxMtKzQzN7FpwQyJGZmbF5F1onFsBKgPYngug1FnC4bVgfNhkr7bJV7fVRjMM5TXyGsRn",
  "key25": "2hTJkZ9GG2Dt8MFpfTZVkarHhX99sYyvrcqmSnXCoCBqA4TWVznytuV4z1WtYRDaSbu11P1Qsm261E4KffqwCytt",
  "key26": "2r8MNneW3WXHQTNwSDP5Xy9yCMnB7LkDe7eXWsSrCP4cbYF95osadU5xVmkDH76kerLYYPKohb9eezDxJjWdBDr6",
  "key27": "46RpmRtfkkh4NaZVq7g7bhynEWGF4u4YZu44uRztMAkMvsBgEQEiYbqRStH7oMBbe71zPng7cb4jtErTdgRb522p"
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
