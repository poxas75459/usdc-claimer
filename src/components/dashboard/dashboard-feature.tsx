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
    "2uB8TymQvJeyHkAvMPpV4cea9m6ZpJbq2Xy4K5NAi7kgeP6miKyKHQpytxZ4AmeTzHTFKbVyfm1CmjWXdKpB3CnZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LH49s54JmX95cbq2vbSNvCGnVtYcwqNAcUTMJH1kJW2AjS6KmFgDVoi3XKgiBTddspWU1aaPYZAVrJLRunVRSZt",
  "key1": "5RGCEzbg8q4CLfPCCkY3QbVE95WsQwLDyjPqBpFqR26nNBSfYEjX1BZ7aaGosZxxXZ9Y7uV8B8XLPTz1XZ4jNpSW",
  "key2": "4hxGUezAReFQV5sFDJ3bwgL9CDU77THcF1pJghfPqx86ecNhrKhw9Nwcfuq6c3HPsWTyDBTBHdRaduisT9Rkbysb",
  "key3": "662qZF6pJayR4HkCn6BBiXN3KzTcmTf8AHYwvSEcmutgy8M3Kq8EicKViJGLYFYTgwuVLSZ7UhYqvKZyx1xMB2hx",
  "key4": "5pTK8yDda6wB36WPsKjeDFqFhi9uvuntoYhLDRFdorREwjtdCHJLxBHFrVnvJNFw31XGyy2AnFdijmB1DePTq2Mm",
  "key5": "5j3dhg8k2e6fAQ7QQ5unjD5irpwLacCFx3YQskbU9MnNr3TaLZkwLySNBXSSNbMGsZt9XbCzXJFfGoMu65X2tpxm",
  "key6": "rgesLWaEhYmhFXhFpZ78GHYpV5coP2TuDq5JjYAqKJnXEqJhZnHrg5iGfGmAz4E6V7beS9q5aYECCFeEk96MXhV",
  "key7": "3FR3atwZWn9QUyDXTH8XmWKmfskmNNgjKidWo8EFRFaf4dkrqpMayPiQJe2rGdHm8ph47FFSqS9FsU3EA71EKtoz",
  "key8": "3becQJQj8o2JPvhYMWyEgd5jgbesApQk5H7LUHFQin5pyohTevX4kbC49tUPYBLnPP52cvfMADSPKTTp5grrJkGu",
  "key9": "26EpTwvQQNSjC5m8TT5WBw1rvrrw9q5K92AnSXVR234iPG9UsGGVSm1TXYZq5xnqXtrR6byhJPZo3EXiL9VFgzaG",
  "key10": "5tBCmahJh5mpZMRdkSa3aZGQq7XTLUZbyLJS72dEt5fMAAKBe5Ne7kPQi4vV4tei7ZpBvv6dUXuraGPMPvmCQyMZ",
  "key11": "23BRkUppFF2Mwynqm3sSqT9UwyqM4H166yuooU6eXAjePreT6um9ptmo15pTGsRG5rE1F9yjNGqsL9xa1hMZMwYZ",
  "key12": "2RMZ1xwgLdMkQdGt2refS8sjJdG2T3eEJMRtE6BH9J5wfg2qKVP2CrCzYLUpt87kwB7Dy2VgVRGTq2SQDThhSCTs",
  "key13": "25jfafmk5MTUCMhkcu7o8RMPzQJninUSicuZJt85p9P34f9jHeyzzz6BUf65NGeQts1dtXC6efnJwouvAKJhJMzr",
  "key14": "29mEfvB6viA6Jk54JKHa9xvrPvRCybhz7CvDQyBGSXkkzKzxaffGfkgF6w2gfSBMnC62fnMGBb8NwYF8ipj2uLvL",
  "key15": "557PACkHw72itUnR9reaeSZJRZTxJqh2FCqcZKkNWxUKW3e3T1hFb756BWe5L2Uxs3FiJud2o41JBiqUk4Utqh81",
  "key16": "4bL6D3Lg3caXHd721x4FU3nqh94Dq1zW6V79UUByzm7h7Nm46LT5W8dpLTW1ng8fdsd2osmiTcZEi3CRnwNA4kAS",
  "key17": "49iY26Y6tP6LXjFwypraVcfN1zVVHtUXwtbgh7YpNwgGVyzxdv9w8UjJvrqUYZJz9stYLx8DPcyGzNX6fzKtJvr1",
  "key18": "2nkjcahvN2gW9KQuQ4tTMpF8rPXQLQm7AeiTWPmJmnj5YBkMdiXHJw4jnADHFTAJxDcKMS8cviMya4cR1DffH7rd",
  "key19": "4kdC4nZwbiqc7cUsHanGHkDiHKruDwbZwixRMx9WgdTRHTWyMUpMNyY1ZBns9a6QgHcT9CM228MbiuS7KDCKC3S",
  "key20": "b4EtT62newV2phT4auLVbLSq2LkpZ6dbwY6ve5fGdgm1gzRVFLX6fvHPhWNKCtYgRN4mo2qgik5XDEpkFTBLiWL",
  "key21": "4srN37GMptEgY6iXeXEFoYJBp6yiVwEzHceB7bjesECa8FVevtmS4PXPXv84AN7qvAS1perfouWJaPZvctjud5ne",
  "key22": "23CUGYnVuyMJPssL4YujRdeDNGrD9VYYJQzd3KxiVy58HmrZNwYrRNgF3k5TpYCGnBqKH2etUm7WsyERbDKs1VkP",
  "key23": "2PZzLDarE5DkHUEjJruJSJpMtdzr7yyRyvZUXWN3GsmL3wszqTEAQnSd8ZukMwLaR9UdykCkxLS88oPG7jD6mLbY",
  "key24": "3WcMSCwiSwQU57262P2mGXhrgd3zcXDard2igWCB3qE2EVc31QWCyEr5ezUz7ULetTfkPy2WBNREKPHB6UtLLpYV",
  "key25": "PMiecthTVxpDMHxikwemLt297z6hRmCXUgPme8o5JWB1jpNbREFp1HxonFLiCgqyvoXE6QJGQWQiwz8QKxkPd5c",
  "key26": "3HTV87tK5NugFdhhpHax8vcXRDt7K1xb6jMsDHdzTDZRQWpKvQJ4DdkFCrkoHBNyTkjpxqxNo9nzS2oZ5UN4tUzg",
  "key27": "5vYTfndiDvQNcSZJT55SBQXGWys5iVZQ6j7yXNJUYw1orXwcuXvm6ghChXmYFAV22vLkum84JPsYsL5QszWDHBwQ",
  "key28": "2PBsog6FQ4sGKdVrkEuMnxE5MdSDyrxsMHEb2dG4vwwcG4UmkPyDLtqnb3bFckzMYaiYhD6sXz5RcgrXMAh6WSgY",
  "key29": "3J38HgeRAKUqdTksq6Qp71vMM9xk86sp7HihpUCmjVJvk6Hitqqt6ZfoXhABzwqcFoHytHgan1HdpPPpyv3gJywR"
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
