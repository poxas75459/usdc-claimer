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
    "3HVpmFJ7Mh23Bmi9H3aDe34X8cFHvtN7FSC6myF2gXEGRM29oiWZhHHwxTgP8me6zhC7TA5wKN3pNbVNuSGUTAzo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HGBEMFW3TvcWQPDC69G59JQAqc4asDiPV8VYJS9FcJyKvWXMzgnjdHZa8wRpfEG84RcdfKDtc1eVGhVSG6HbJai",
  "key1": "bAtPLCxoQAEGJ4TVFuHqTxf24c833JYTmerFW7ydNTwRCGDvNcJHYTukUv1G4P13SvEz1ivu1um5cxXGQctiw7f",
  "key2": "jr5mgaVDPQjmpgV8kGD39PVLrZwbHXbkTaEMzU4qSp3ZNGrFVR6EwnVantX6KTLEZf2BYyx17m9EMoVqrJ2ucXk",
  "key3": "5RvQ4VKch2FPJ6svqdii7BLuuXqqjBoE8u6Wz6QuJLeK5PLi1dEqaNwrYJksTvoMkJAWaXMxWWT7Y8AsqHhMuxeA",
  "key4": "52iwVQP7BZ7Zd9mMbptZHpGv3YxikD83LxQ8sq4iinTLiATiDt4FsQreyM6fWaRbS1iP3TCWuWszaJMgGnQ3yC2f",
  "key5": "2TrD7GjfAtsD4p689ZEKDDhAZGQm1Gixtkm4feavy65Sw4q3xvUFt6rBt25mSYm1HAcBS8k6GVMAdvWjHw5YzaPf",
  "key6": "3RN1HzSswX1WroNp6yxN2QFcPpT14ZkZjoTVhrgZg137ZVhzRJXm2d5QhTc5gzpwjqBxUnYMEm4pWVmgP12sCoBQ",
  "key7": "LSkFCfWCdr91xxQTtZNBSFqpq4jTMpEvE2TQ1c28NxhTwTkQkzqB5xmuDppzVTUMf94CmAuyiw8Jsuhbf19SiH8",
  "key8": "5a3qhk2ABpNSfiWXf5UfBhdZU27RgA8jVT7cXg2osVdngKh1zxzERPRgaQrAMTpvXJx36rgMLjDz6p8BpmN9irvn",
  "key9": "HBxERR4oThs3YVL7hcnfmcrVZx3rVfmeue2L86AuyZrNmjyG1vd4fDMxVYoLVAv86ZhKMK4V7GkTG7BrYyHM9cy",
  "key10": "4ZmS4fJaTT7HpBcMqaVGgQzdZaYzqKdohQ9Wk87BqMUJ1aivgE1eeSUjVbkS6HPeDpvUyB8Zn5dVamacroPrGFsZ",
  "key11": "44qovc5Jr5XQ3i1eUkoqCAqMKUNtfNZy8gejpckGjRUxfLBwBF46gkBYZ16Qy8rdqFnzRexe9hqCgNN5Fqf5fhPA",
  "key12": "4hFLVx643MhsAgvdCxN2YBYyrcCCHBkWbDARvaNdtqRaZA2Kagv1tqNxJECWWPyt4rbo7JEgnj7X3ywzXPEWMJLk",
  "key13": "5CHjKBs8PuN6DZMt9K8R7YbdppyZSBfrHV32b2vixpPwpjvHaCSnjmy8tB1KyQUx1mYKq4WzD6u5HoV67y84EKEv",
  "key14": "2C4EDecnCHVBhQqwoULJkHoQvv7PzDAih5R3CAKiTEUESNiUywvddJJNWVrqJ4WNCbw67gS9mWuqPuG5Fqxi2rv5",
  "key15": "w5fVefJM9hbp1ixRed9Z3A2cbMhfGHRc2VsUrzT513XfDoo5d9acqcGGUw17Lykufb9dS4Lj8i324gZHksQmzPo",
  "key16": "56EtoKTm4B1k1cVyUheVyczPCw7ME8NZmwy5yAptwHukR3EtEwWg2MXgqKNxjbLG7nsap6nESetiNsx5jrDgqDHc",
  "key17": "SmVsh8cu1ec3uprPRzn3hQrhebjKyE2wdmPwiT2afNBF2f22uRu8JcXhKXd5aFwuYeDQ7vUUvswkDBo2NtAZxR1",
  "key18": "2xeJaL8kq9ybmPpEYvGHS7ncnt36joZoZmqbBvAavacArrzwJ1YcaZpBDZfGYKN7VPc8yB1rVPua7ZFxTgyHapje",
  "key19": "36UKkmKZUs3mN44Uh3enrDpGLpdXnzoeHPonfVXP23MHvRD1PUe98SgLrNUGCMSEhHcD5ZVETkUpBV4vvbRNVw31",
  "key20": "2LS1BEgGxPTLrbmFdyweR74XZjM6QwBN2Pf41CD4ey1wXfnCn7xEZXchVnzvw1c86wvTypTGoCUkiBi3JGpGnYEK",
  "key21": "2QHhyJUydF8vpntkAYp7o3eEVVtazjjSz7wBbHwHSUxGubT28yWEyVEpLRQS4xX5ZGGXRDhZoqkTPg3ADLsna8jD",
  "key22": "4Pwy4twapbcARAyGKuhqPoo3eRHHkQTLkkej3ueMnvwrz1Sqt9LJZJAmhkcXQKFZZVFMoZ7DofwxbuQJRwsfpKVe",
  "key23": "2dEizBiYuqnrk8oA33vW2Yf1b4objCSaHfWR6v9DfvpCCvkR3qts3WiVNWQb5eSaTH18YvSqMebTmxCPeB1Rf6mm",
  "key24": "4GC1M1w74seM9j45xbL3y6Kiqmai3CtWEKQkts1XoSCQiEkp45PCerDBmKoLt5BY6vf9Keg89768NMMEcnDxxNua",
  "key25": "5edjWbNzy1poGuSN2J1KMEWwiftJzucXqdYcN7oMxUcBpUbdq7CphHBjPjc4bA7kXQtkctwuE4bb8PnWoxu4d6wF",
  "key26": "hJuxUi18ip2ehnF4FpaExm32SRs8b72TtBg7abxKU9EsSVNAoT9qrdQjgLafsVE6ebgPi3HGzCZ8Gx2DDZnLXk8"
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
