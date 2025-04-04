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
    "22eCFFQLkdiye7RbAm7i5Ua4bPWMW5LoSUUBkm1gpuhqZ61cRk592AiVJgxteUG4Lyg8S67e4WsiuYBg1WMuK7ef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21yxzpWjviynp3yFPau9o655GEJUFfjqzui5B8Dhjc8P5tU4U7tJdc8RVrxV4sgmYvLfmtXPkbdVDybWypwAf4Cc",
  "key1": "3oWM5dgJodKVGWKCs6GtvMo2U2BUzKfyARKUZP8rfXRbZ4buMxfqFwocgYBjBTWuKszfFMg6YCEhJKZgcCxHBCtq",
  "key2": "4UZZsKADYwmRjuTz4ZDYmGJUUBFvr87AmbJKi3zdLNpw13ckdcku9dnfwjPKzwcbcewHE3aS2CP4rM7kE5Dm2Ln8",
  "key3": "568vQuWC4q5yBdbTDmVG2BENRPoZEtRbRoRCQPuii1nSoHLyNDivLAMRNUJaeQ7rLXU4fgbpY5822TQRxzmzz4mG",
  "key4": "26YHJ9g6vropFegmVuxteupSrudFeUm6qeSAsRbu4hrrekzxBx3iUcCQYiYYPXVFBx4kDz385Zaic3YDa1gFHYjE",
  "key5": "4f5Fx358EaEhqnJzX64nhReVhYN8zbRk3zk8gEXAiX3WLAgSedbS5nyVFYisXSGh89Qh5K6fE2FsebTwJbqoLXji",
  "key6": "5yk1k2qkEXUiERwqp8NYukVTn1Yef2CKvHLzovCLgxynPcbhCqt43CRcidvpiexeN7hqbX8DBPYEk2MDoSeu34nd",
  "key7": "4TxaFvSzErW8tT5jQH8Tn4t4YCZLMa2W4YwppGZeSWccLfr6musCYxK3VAPF1cHygBUuaXFapXBaZqUb2wxpZDFB",
  "key8": "5gfWPvHRa5V7aVX6HG2mon2byoTwdER75j4pK4rKkB8eR4nYm6wJHGomQZqxdcrWQrytLmQ6NbHhSm7BYgH8qEJZ",
  "key9": "bgusdkTxe3iB7eeQFeRpfn3HX2hvCuRyfNveW4TreMssa3fEYiZNgEj57FUNyPw2xmWPETeE2nidHz3qcmefVL8",
  "key10": "3aUuEQE9MTuPZxftt6YaCWwEYwc1RWcGgjr31x17MAAFTCQvz3gDfNx94g3DT25AYxrT9ANMjKVMtT7CGcvPM3G2",
  "key11": "4HcVLrpEKEFRAVtB1UaJQ5QXvMZaUGKxs65KdwHP86fHKTKQkR7mzd8pN9k8VHJzFZkYi9y8Hvkq3RQpjduSxL9k",
  "key12": "3aMwMN9ndHWXrcTBGYLGkp5MWbENocGgRTFVCaJv9ZEj2nsEKMjB6AuJhwq9TkSqtmFUvdhzAMq3QWFLdjmDjMP5",
  "key13": "5p68jxxmpS4fHhhiSRWEkz77SNiaQXngVm6MAnMxrnj9385234xsgGZGYXArrTzzRAnAanyKWgYLMe9o2EvB3L5Q",
  "key14": "4uydGmHxpZC2Dmjq6WxaYuUeMHas6bbk9KsLF3ZQ3kb583qg63cu1nYjBSLimMxn1ZeT2LL1hRzoYHtDDmUrciVw",
  "key15": "2fxGCFMtyUH8mEyoUhGmKRvMXvQGt3hBrtLL4X3vXcw3SxthSqS2W2ZG8RcJTr28FfCyoKMKKKBJ554VPzKAw5xS",
  "key16": "3RFFdv1qzpEZG98x7NCkNU5SA2YDUREy9fCjuqHfpHeD9krv4iJABbEk1pLKd8kdNuWs9rXWzhdJdFNj6t5MZb6D",
  "key17": "5YUkcWhb8ceZB7yJapHchYMAEu41UAgptoztbEMh22kDHXt2rKR9fnuhY6ae8xWwmQUumw1SFYYebE5hEftZkScA",
  "key18": "2NvrtKA9kRSToURgKBD4AmTipH5VbFx5HjVNq9jmX4PF49ACf1ExRsh8dkfPfMUsTv471xJRkLegqCPTg599b1sU",
  "key19": "2cQzfYeRnzg8ZLJRKQy8MhkU3B4LWAQ6k4yLrcHArMBCTN45gfbVNwy6nb12Ykb3gLQKV1eZDD5Pbyj4YStZLMYi",
  "key20": "2n4bAjyyAwsEtyRn5tJfTFHv38seBJmCoHFWzajQZWsLz5y3VG1b63sUMkQwF1HPbLPy3jkS1k3NrbVVxtFfBdUS",
  "key21": "3wzerttQWbXQnPBayxBtH8MLB3FLa5N9PNizpxuznHQXutSCqWRcQDzUuoXyWEhP9BizjPWggJ6J21pAV2U34mmA",
  "key22": "4PdCUjAiqmksFgddgs7ZVnFZ1upcApwBMt7nCB1eLiovPGDtHFCGVB2jVHE2KRVnCzBKJcsfPVENL3yfw55SgtJB",
  "key23": "4AqGkc4YYa6XFJQ7JBKEXuBdbbRWG6oHJRP1vzfiYuX4BtRCJbE5pnyGTndaXDrSLhgZ2P9vGwUSAqQLuFjDxTt6",
  "key24": "4swgU3TZ8KXXvyZt5paEVopHVHLwLorxV5SuHD3vVXAbCqJktv2fLzoSAoJRVFKDETUcLkG17kDmiEnBzrimAYgT",
  "key25": "3zVYc35ARjJDFUEAarxXAWn4Xjrubba6bmJoZyaGzMVfoqHaJRfuppJE26ByBe4WrBkyGbnBV4TS8mPbAmxxXg89"
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
