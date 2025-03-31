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
    "3WiC5hk3ZH6TvjJEprgJJZw4ZknACRAkvNT2dpfUGHyNxhZ9Zdto4NHYA7278ZNkhETQ8GFev7sCiXZE5cKQ1gEZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Sg1rgi3E4ijmASpbD6CouLZQZdavA9ffrjgmXmrreVBWtGLbMVHx1e2vFQ8sGbsj2f4t47ohGnidobDsDSvgudX",
  "key1": "3jhMgLJSMhDdxH9KZQoZQvdD6r1Yn5Mmf4wgWDXvkX1k1861kutFk48jqe6zTEWmKRd8bdXncPm2B3KAbxEzjzgg",
  "key2": "2ZRdUaGc3A74fF6bpL5CzCjMPX1XBuQVaj7bgxAy4gNP1k61HjfcJZxX3fmTEhyjhuL1vQdCvKFkZ1212bxdDmm",
  "key3": "4YuULFsbjWnHAaaGRN4bmx4BbR3vytNCeQs2TeBckF5A6vVX19JYMA2YRS9rEcUFQiLeAYZhSEpdco3hu4yysMwB",
  "key4": "5hPVZkxnDzwNDJAJ9Cy5ETWWSx9gC4iSEUfkatSkQWGy5vqbV4JQrHiuvCWXccNWYWqkoBw1Fe5f9qq6MwWhpaWv",
  "key5": "4jUGZXZiQbaoBUvG6JjT4sF1VUKrtD1BbQ7HQVTau6K6waJqkfTDEP6GqZtLw2oxzjfbgLEjHxpqW7Ww8nS1uL9D",
  "key6": "2amK81RSQaZCvgrPTGGDDrLva7SnwnzaNqGQxkwaiMigkiArX2vM8esb9EsWneVXuGhJWYWF8CmfDUjYeArJdwwW",
  "key7": "3UKUrQGVMdNoyWCWjsQw8bB8r6EsqQFQAU2DRUAqYixxfXdHrPGSMmTVHAHvDcc8BEnsFMgLkigfvnTkqozPpgwV",
  "key8": "5BW2yA9dkRBzwdW7T2J9rif21pXZDXL3m9AQ4ee9T3qN8nFUu4CLAUvuJjyoUQGQQDY5KocdYmorcHgXYheBGhmb",
  "key9": "5QYXoAKCaHhKkgQinjnNP1zm9Qt1nNmb3QnCBmorEjanLV43NTYoRQNrEVD9kLhMdMgxvzC6Lgkd5HbMVFTtrTaM",
  "key10": "3mEdbK869nzUVQLViGh3CxT7FvMH9prare8MJK2zMHfDPTeDqihSftou7bGJMV4Y9S7dWHyYFCoZG72dun4ERExc",
  "key11": "5ZTJsoaTrMUZ89FC4wbN3NnDcq4YTC5GvSHfFesSrKRcaxCRcADK7emqEuAgcsZubjE8mFBapefvZJEK5yCrD47p",
  "key12": "jwifSzjhPkqPXY2TQeaJuNBB9ZErZUgBXBa1LVvJacUveZg8HquS7YAwfk2NzY7uV85xdgZ1rnrcDWfnA9iBghv",
  "key13": "3Zo1zrBQthPgEPQUReKiP265u94rRvpgYgTR28aqYe1RwDVBFFoVJR1U5rcKnWK9Ziq8DmTu1p79kvY17HDZwSKV",
  "key14": "47tSzAqD9DqEWjJsJvuz3BHWmsXruDmJJtENJdT5e5qSVKkzU99qL8arNDKx1Aecy4nR8J3wDWFWr5fs3aoi6EhW",
  "key15": "5xTjzs1VWBxoDXgK4mk9F7KEW8h7RmFhz4HcCfTpTB1rA7jVUG97qCNzKodFFJNtm6PEqcmZm8t2jSydqQ52hQP6",
  "key16": "dW7nYrbh5WTS12YbDvnwxBWdpnjkewfqemW79ZZU8WD3xMh2aTe85BexqNdUJVzK3y1Qy8wo1nMLzFbJVubvfPD",
  "key17": "eHzNBH9PSYyUmuHL4JypEqymVtcN98gfxHYTUPhERVRKds9Xkzk6DACaNvBnEuRXpsu2vFHneU8YA6LCh9BPUV4",
  "key18": "ySxjHwx3ggPTo9kEAGpYAHzZev5gPwSq9K4DuCXnjrAMP1QCarYTYkEmvHQ8vhboqzzU5dTq3hXsA5aeKhcDX5Y",
  "key19": "43K4oeP6vXnx69dqLagJFeQRsTFnpZsA7J91neVgyR3GnhXYTHoHwJS61jmP1yPKQZCHmTDo622ofCbxtpreDYGw",
  "key20": "5duA3UeSC88VHf5Kfy9yqvyBBT9JEevJYCtrQ6GsJRcgecwkAzWHimGS3nQg6Hvbj1fA4gLyJ1oFD5uaMYUwDLQX",
  "key21": "2z4oS9dn8FJXv1bficGz9CzFLVnJo1d3v9XNxJEP7SG3WYGj7AxBSb3hLSyEo2kXmQkTbfUXBgb7CbKXYtkBUEKe",
  "key22": "3aFxPpdmKsB1vBmbxUZTE5GGJN1NfoDNYXYNVcCg8AKZVUNK33cRPGaoHYyns81YasUpvxMy452sYm3zPMHZeQeQ",
  "key23": "5ifsXYJYaoXXkUzhc4ZpjrJxyXpbZ7UGztNWthbnk8B4BV1L67PpT1PvfpsuVKHBRLAQiBuJ3KDRd7d4pwdysLY1",
  "key24": "2FormyvAYgK5uBM86R6cJNouUJbzUx6nWtB8YiqoiaKLvorUfMez3r8E7Z4gMkZFQFqJy2aXXYLziR2uXijKzStL",
  "key25": "3bVovXcgxJPNrtseuKWWMcukZJ7FTtRNFQzvwshp6s1Wm1m2KUSWB8jX2MW9JdKGmyXGWLZbpbnUWNiwkK2inQMM",
  "key26": "29AFWj4oyW7enoXEXzM51vsbn5dJWUssiQXfprDxrvQAKynX5VdHXZf7R3ByrSwLseoxeJFYjKyKEoZoFvQHLA2K"
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
