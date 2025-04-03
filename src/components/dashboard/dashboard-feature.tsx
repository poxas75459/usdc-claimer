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
    "2hqyeHstFnV3TcF8JKap6rfftAjhYXsQEPMErMSTG4Uz5BBKww9Zx4kVsLGyuLYcgrVNeV3kaszt7KBiUPQjBQGu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zrYc1zodb6wwG86yfo9Gza4qN5oocdThNPNetAGmodRvnDMF55jLRbhucYgiUmuanx3G8XQCRyi2CAtHQnbtVav",
  "key1": "4GnGkgneSsfwwyBBgnpTXY7hhZxutaWoCuDNtqA2p3EDETWv2dLoCywqBDkjCV2j65nVMn5oA7cdN2HhtiSyKcKH",
  "key2": "5VcrEqRYkmeZ4KzVmGN9TX3TuX1Hmvet8WyNUL1pregfK8uBhoCHAK8ZtNzgCx2gCBXgugKCupNJcBKXBxBMxVmH",
  "key3": "37V795c3TipXuRnDjzpGubP5JzK7yJ7GVyU8HyB9WGMrcifJyt9kCQGqatM1f4LuRBSb8JSenw8tjJudwab2UBj3",
  "key4": "4zWWsuy9pSFBfmtyct2fZRhFdc3j1xJbXTKt4JLNSNkuhnvzTbknRLr4q2Zn5TyYJSASV5jEBHEuy94tuNjSFCAo",
  "key5": "2Ajonr4CnBVWr8bxR6aV7Rqwx21HWNNsimwHFEtWGQcC3mo9jp36dTWbQcCaadvGUXBpn7Y1jCY6tSCCPYvhjbt1",
  "key6": "4QwU5PZmiXNeiGtMTkRaLPoJS1cYjH2oGCKwVFfEdUrCEw13g5XoGQFs4jKU3WvunY7MYB5DmceVgq921CL3gYrP",
  "key7": "2fKn9Be7niuZ3sReF8BfDKWmUkjgisGJVXn65sreF53sURmyqgCv9pVysPnDNCeHNriCteXhJGzD5zktvwA1GDTU",
  "key8": "5S7QtpuQbPx1BA1TEAWiWnHPMM1KbDidZyA3jDu8hYWN1V5xW8WAkWSdXr3Q3PkXubzB473vq5CabHUnH8Cm3WC3",
  "key9": "4NRT3Rai3Kh5AX2hQsbwFbyo7KgSWGBZzWUzztJBgEroyGd3p65DCaihkCGnM7o6bmjye6EbdqLehi6yamZGUCZL",
  "key10": "2S7CGbQdH25vqEvJFkEXJwwezjJEJaP8RF7aWv1rELyyVfNkFHKy2Fuh9frn49rBoEnUtcphXDiKQSV12AYkfnua",
  "key11": "2MJoPGDF3Ba4fHFoNVZPQBYSAkkNpjgBcJueo764nBVoNsTML9h5Gxz6xwXjygk9qhLukjf9gFKbwhy8hdw95FRP",
  "key12": "5bmUyfw6hd1XGJwnEe7axefsFxB3jm46q4zd5Vj5wKmKLGeVKAqMmCPqXhfHWSZjkx4EzzvHYKWUN3YND9La4zo9",
  "key13": "DLaGQQPoS3jVnvH8wyCo7VG43cTqwLkb9nV5mFMYFJmJR8AbcdZqkm8KCjgjAgS65eU4ABUaFnRqwkwHZg5kX2w",
  "key14": "3SBjRpZieysyN1Ym3fCtTAEqv4dKVrrarsKgWmHBLcUC2toCXb2CQRMNbh3UpzQUKUMRGZeeUkJnKvhC1Xf2JM9Z",
  "key15": "4RXQ2k8NtDegyRF798yvwSvLmGfiUPKiFFVQrC6w4ADK1nrDPkrtGZDfYRt9xMfyYefetrTdSTnCu9W5VH1knpEH",
  "key16": "5yqqdn51sCFCRTkixZYYmrEapgkCH6HsCQrQRVDmCWLR4JtGAD3jbCZFNdDBRisTZa89qfrPh655L2PLQUdYw6He",
  "key17": "2DSvqygDgYhXZUGF58RxXkHHK75KRLMv1ZprC3LYCY7XmWjEYTmywiKeizPueWrh52QtQ1Sda36rqhS9zygkSyoG",
  "key18": "3dpb5246CsCNvF45AvvrphifMbFsAdRvLG4UdiXQaPAqPqWye8f9mMD1zsJoCoiAUC3juQseZTZrxvEcxLE6UVbn",
  "key19": "2YX4zCSHj6BtHM1N8LPj6nVhSrhMABFCWpkS9VviCrjKabzgh8ByCNW4FK5WnPRAnpLMJJXkRpQLqgSGQMSkQBZY",
  "key20": "5kQ9U6HEijq5RyVx9FPovug2nptmaxaMns5Rp5G1cG8BdWDR9NKg6sLTWSxMEpmWNJejr7PRtobsQxNU8WzkC6Wg",
  "key21": "2fE7Aqx8JhpbmEGTG13yixUMKc2YK7iVagRs6k979KiGHosJHPH8xonDmzXvtMbFeu2vqoXTbrXS7n8hYJnAYPEP",
  "key22": "3y4NuJpSyXMqmSw6WyL2TLBU48XY1i5Rs7HXnH8UAmHrfSEXvmCoPR3ZdmnYMVQWgcMhf869AfxYwTgjEZZCkyzv",
  "key23": "ynicx1VkPu583PDr4Ut9cs7c4k6uoVE4UJMBSixNXhdFBBHxzUSmjmKpSfZt8QprPbig3KWbejJPdfGi6bPsg3X",
  "key24": "2547ari5zHA4wGwfym8pETK3Gs2hKor1wBrmDZK4X1qLeJB2vzDznFK9t7dGutURB6vREAn9movNEPkHmnPHAfU9",
  "key25": "51DhXUXSuh7JyuaPz6rHLAecMCtfdGkX5N9xR7h37F4ngAbe1Q9sxGkJKyP1fMc7SGN832j3fGzWuUh78N39wFJD"
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
