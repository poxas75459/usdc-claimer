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
    "3zCrfV5hAY3Gpq6Dbq3hBV693qAiTzcHJTBXGrvNJXnpPSpnAViF4hpfAvrBmpmX6Wdq5xbdcZnz3RwcdkTgdsoB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ugzWqe6fE7VwNutS2Dz2saRbjGJ3vBTnAviPy3tkYv3Yjwz1GQuecmFFevhWZKQyHFQyyN6p51EVGgwXXn6QzUA",
  "key1": "3oeRxdmpbad2r7YWkmVYdfh2BcW1aJzDVua4e3ZykA97vP7vtnTaGUoFPQ34w2szq9BhtYE1L85Z2Xh9avgJCBLN",
  "key2": "2a9A1RFaZNNEfg6pkyfFUG3AXGdWfdbkV8pCuc4qj1PtfKB4mzkGSJYp5V18FpzuyzZeTBnZWN9CRCfg5rMYwXtk",
  "key3": "4VzHFSEqQbcrh9pv3G3XM6mEVLZKk939QEBpLCPADXQxiyJSHwJAq1ZhFzoXVoYqVTHsKC5sLerJRFF1JYZxWVZk",
  "key4": "2yp2xm6jVZHx9YkrrQzPHEVnPeyQFBenMokdMez5jJcK65fuYbMgPxEGm7wRbnYp3QymV8JWTQLJyiQH7A7RGR17",
  "key5": "4h8SgQGo4aSv9hzw64ctdExs19c3y25eyAeVMhFkVKNTG7AkbPCemLFyyaeA67MsNvoRtSFgRh5zYWPtGgFZRMe8",
  "key6": "3YxdyZHSFrg7rbpedziQLwibBNFQ2fK4wqKouwyhJggYsYdUMMsPjFfexer9JMrHyhg5wAWYZzhxfwstNoA9fEdY",
  "key7": "2CLNUqmSUYrxvzTtvaTaaWgPF8rEa42K79YVXCxhsN585JpkpmqYVHf7QhYwuUuHcyEab5C5UfSVax2QJzJEbztf",
  "key8": "4iXQAGmBN699AXGQEe3cqNEM5RgQcuKKanLBjoXQipF4NpwjfG5QXWRr444rVM7UhX81FdZauS8on8fk26J61Ebp",
  "key9": "2vWjLGzArdLzGWfBiUn92kyE4bYerHaixe8QHE9gJGqBpp3EMkqu2pog8D6PdVmS6EcPLG9cD6JpZuwEKhPtBbJc",
  "key10": "xob7L9hdUiDbaFCTMa7tppWmRmU43EfqMQgCXt8FXpJEGntBruGv8Usk2EQWohUGNom9J2SdnSzk8vMTDuAZD1h",
  "key11": "48DNLSE7HKhAi8jiwS7d66byFctosAcmUkVtp3WEuN6sChnMwPL2xWYaBb7nsjPBm9xcf33v6FB37x2uViBp3pZS",
  "key12": "2T4jwQH8Xt1mo63JDva6VxxYJCpWnDhEHfn7KZjQJGb8Eo99CD7GzDAc8CwecKVpW2nrTZ85KkobS2KPQXko7xHw",
  "key13": "vwZQ4tefvW7A17Pzz4NFpcfXix4XoSLd8XvoD3B5CAPstLeBCK22YyU31G4NAQ4TWBLtjmpx2UBsHHoHqMLAtTP",
  "key14": "3WzWPTRBhZJoznJuYLe6HnhBSJhaX4XxG9BrDCWq3YeqW9XPhNfrXqhTEsVtZGEC6bXLBoXJ7Uf1FDKAgs3gaNu2",
  "key15": "baXXv5oEtXGfxnvdXSG4b74WFBLx7ou3NZaQdZ8mzws3pkn1ZpBxfSHsFREfJj9vQfvsoBP4iHKYwWYg6eimi2p",
  "key16": "9YYPHk3HsnsMNGazZkebeB31bvVZVJsN9rm7w6vN5VrJQMbmQCs4K9HNe8395ii5pGuysZhL4aHizaiZVFKYZjz",
  "key17": "4EvWyfNWbiK6fC4x4p4pYqfm1urpK6RLYp81kkZ26EDtgFTqK9dotjLD2T12QdjTo5YSHmSMc5nzqUKriMLC8Kjx",
  "key18": "62dJzyQovp3RiCAyS6yaViRLGjZGSHrp5RYY18GWz56Ze6iy8G5ArnfU42A5L4w583ck8WfTuR9PAFFuq8GhnsfM",
  "key19": "HhMzSPWa9tYKTJNasCFJrpjTHGHgsVkdPfnztBgAwdgdhTbT4x1ntt3jzxFyVV3ycjzzEbPkANSnCGm59yggqLG",
  "key20": "2f66X6jCWn4piY5SRysLrRUP7WcJYCYJ7D7TEs4YE7h32X3A5RJW6oBbNtP9eWVMQRt6qDy1KZJ9L9gZHeqEuKa5",
  "key21": "2LwQGGFJ1qQSiop1TsnegVKdS9yXf3TP14F87gQsUAbZWbpEZQu8ijJS2UFNjaxqfhdoS5gNiU5pAfZDxqR2fogz",
  "key22": "3q3s2ncWSAbibad9g9iduA9tjzT6p4trXwoeqo2DJhckkLPVpneafsfk5qG7rVZhXWGBeXHq7AXGhyxyauPA9EcW",
  "key23": "3CGoFux3zNQ3SiqJ1ejEGB2Fd3UoTnUExbKDZga1dQq5ERZcrxGTAVKS7y6UwWy5vaXuzdJvTiQ2GR7123VDMAo5",
  "key24": "6TEeg8RUsrRA6fe4BxDwcBFX8XQbB4KZ8jCo8bgK3RZvRhHa7kENFFn4Czdk2uBQia24RgxdqTa28oSSSZHxSMj",
  "key25": "5BtQS1DoykkCLRMNhbgLHVFLWhhvj9HBjZ87bAJEh2ybWjKAuV5nWCwnoS3nrvehczrvoSqizMEMwWyz5aqrc9vo"
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
