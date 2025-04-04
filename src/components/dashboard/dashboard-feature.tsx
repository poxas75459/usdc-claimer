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
    "2u3vt4gdSX5LaMXu645h5CDT5YoLhb3jc8gWNE33DrHtS6z6jdwDjUmEku7k35ZdFG6H2aag184HvMr9nK5vAHya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lv7cKEs7nMTJBTWde3ZEFVPUtnhCsygDWcDJ1SbdTbP8Czocpt5dTZ2rjwJKXomeDAjgfVJ39BLyxZCL5A1j6vm",
  "key1": "5ZYnYFkyDQXyN26tYd5F9VxFN5FXyH5m4sMZcoj8PjRUyjeTM99wi16qRkKqMYwvkYHAP2gcMpVNGh8wvPyrWzXh",
  "key2": "4krFJB3r3bbXW7rS1dfCodyx6Fh77vGDzmSFgmLDEbkexqmwovR594cEnpLnwhBXomhHd3RM5MYYwPBYz9NebXqf",
  "key3": "4ums29MjoGjNUZprNL96We5jzCiwPyaB3qiW6vLtLWLHSrbY1AoC1mfiFnqkNQPyk1PefgK8iBfrUb56D2rBjZgs",
  "key4": "4V7uDBFJt6ZRqYVeQguSbzUwfcLcVBkTBUDnB48XTtJzqMyhVb3UVjANT8zAvpxT5RPeSoASKDBwPG55qqBqMfvk",
  "key5": "2gheUnfLoFEfH8JpUpB1uoVkix63JWf3GUxZizxgFAJ2MbocuWN6kkU32TwBiNyuMcx4XdFtx1aQk2mV2wvZNzXF",
  "key6": "3oKytERy9ZGqgcEcWtQewqJdZyVLWL4VwBhwHt2F41XCiXAMRBbGGefzpoNMwxBtcDyZbxQXjiCZnvMrBTsALyYx",
  "key7": "3P4z8KiZREQgQMtf97tNFRCFUptmfiknAGq4CgNQK4AF1DJsCN1z3ZkFPf3R9Sqjcekop9PPUPtdaERkXLW1cyqH",
  "key8": "3CNRN7MuvnksUD3cEpfWvZ1TrRvSvA3HotjMqFtx5MpWERP6991wY1gDfT3ezarixxF3PzMjygmsGWDS1NsCGR2b",
  "key9": "5bceu1KggUkaP9xhfdgH1rZrYjSpoWaZdDZhePvXyXvaCsqeoXMP1avxYXvSRxXQWgTNhEScmqVVJAzhep2rG65f",
  "key10": "3kfSZFf6wU1hUSyJfu6MnX57ntSaYF3KyaCFYQRJc2YaHHaktN8ibEbpCFdMR8q9VNDnkUoGvEPwqouwXcBJnMdV",
  "key11": "2xy7n4sBfHXiQt4Fa76z6f4YFAk9ppesz7GST4nVPwNWuFuCnt3yPou5SjDDktGXsJKB9v96weQRP2S4tWGfJFWH",
  "key12": "4eX2Fbs4Mattjm472rvkKtzaHYSsp8fAXTr1brstnxefT4b18YStfnDaDjrNXTvEvjHV19ufS29htDHLotLNQrqT",
  "key13": "riEVg6SVaxMGAQnX7w5RwNN72JrpsuemYEXyC3BLF82CXkozNRMdvDdtjVEvwCcZkmfZDnXEKWkMwZLXSiPHrLS",
  "key14": "2FbF3QChtKLivhFoiQ5MLMsvXeuHtBTrokALKMjuvnob5cht8PpshN42Gz8aNaxnKEGnyCSwLtiVDnfjELKcigNS",
  "key15": "5k66YmpM3CAK4L87Lj9dgXN3mhTnBtLcSRpcXNgZgc6CTKhEpbqbvNJKMrzdVP1nMJKrxSyXQv2nWg63FR1aqz3v",
  "key16": "5dtE2nmGqgomL5dQYDB65RZPRcDEm5FPXeRfWiVCgmAD2BJN6e4RuF5RCX7TbxWHan5MPrw25YbT4mJrVsm881Tt",
  "key17": "48mWGhHsC5on13B634KCt9fPx7yoGPTr5MALzGPSz9RwyiZbjmeT26WynSRpnV2Bmxx6UoU7wdyxFs3TKET9EPhW",
  "key18": "zTJvoGrD8PS7BEtKCxZR7De1FqJB1hjv9oWzya17ZFYk8xGjjyrNw3B15Q2BRgBjzmCvr2ifTTxRcYWg5Pg6BCA",
  "key19": "4Mwme394x9SmWSEutidDTT1NyzXgS2PnJSKrKNrGbhXRkYjrAVsbeiDsK7nLcG8XMY57qpbRzwRJN8QWpvbHuLUw",
  "key20": "5AoNyC8LF7Yu8QWNaWCnCas6aqv9qXpjwworcShvXwK4Q2bQTHkm2ooJhUDgdQa9e4yUC1vS3EC9vXPmMy5qKwC1",
  "key21": "2Y8GPMgpXkQt2Rc67n8sUzkb8z9zN7skZCFcSvYHvVvUy9DHrdRWsjMChDUr3ToxZXdCeWTDnj35HPpYHDZCn1sE",
  "key22": "4KrzTjq9wtGS56K3oZa5uy3f7xjwqoadacvfJ4KtZEaZToaUGmbichw3doTn2too54FerNT1rQc5wWorCGfbx6Ya",
  "key23": "372C1HVoTk4gowFhpvwpSCanjFVVJxfHsLwhLXqfgHXdHzyVvKjU8tAuFvRuSsaqWFPay4zzdnYMtYCy6BGoMUfN",
  "key24": "4Mw6c8DYJHxAjkJ7PT17Dm2kob1gGd4haCPmfu1DrMtvv8oKVrtNHywEMyvDcwdf9z89tXvWY6TxtWvFLdKYwx29",
  "key25": "28c8MEygqv5xZQWikxc3ko12YRQau273Fv87fciuHLufb8vkgRphhC9GSMSWt6ptrdjw2zysbyxgox6kUTs4Cq7B",
  "key26": "2Zvi8Pj27ZnkSyEJr2ecGEbtjVmTqkGyUR97XqJT3effy2A8hC5M2sJfB1JzRGjNpG2f1twS873HGnKgzL2tFY9H",
  "key27": "2fApFXunDp8FqvSRSp9Csj6Zdk2jMWBXJYCEt6az84xPrQmUYwCopC2FevQ8q3WmsCpk1N8KXGXfC1hhDKfiHitw"
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
