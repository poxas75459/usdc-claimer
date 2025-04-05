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
    "365EfctKZvNicsGzSh8vFc6beyigpsfgXaAxjw8Buon4aHTbAKJVx6CiAuo1oh1ZPQkQcvVKYKegk7gWLXNDZjZC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xG7oxjFQ7ekiY1dSvfcLw8EcTucvrFBuYZRDUszdjkwB7KZto4HDs725zXXtb8T7StehaMzaDeYJGZsQ3KSaYXq",
  "key1": "4zJ8PwguTDxP5sRkrJdAEo5rZ8UZrKdUWCBrsHCsQyMij3SGBr9iGuNZYggorpahovLpusZkSGKXFjEczC9d77eM",
  "key2": "49mHxYJPn9CvDB6cGBvQkMCwggeouBYHiCVeVaQVvP5H7Uz3yYMBNai2K7s9jG9eBANQMCqHLyCWjYqfndN3xn41",
  "key3": "voBcnrELjTY15fyvaJx1eGeoFCbnXj8cEXA1Jom42t6FY37mSFrAEBMnzL52bc8udFnUfHBErZj5L6ToSUV5Cv8",
  "key4": "3WhgAJNLmi6zCABmNxLdHAQ4jJ8m117aYdouDfjdYdoyowZMbQFF31S6mEvXJ3R6QYc7Y1rg8RPtniJQJuqaJx3R",
  "key5": "C9FcQXjFE3q2vb3YzpmiKLiaUN1JuwWHv3bNMf8UkaxM1bp9YH2iw4aQJxpLMhfwX4n4Uotx5oKU13Ve5DkBzMd",
  "key6": "2F28oHZ2pBzMKQ5hQgb12y4QrDnsYeQhZ4ryVGKKq6zJJdfRLitHLK2gcRSh4UkAqoZokr7zUzqLJ9aeSPA6dcUy",
  "key7": "4eXF8KEVxeZZGetLi1a3xUEqSgQU3tuymzJgYdRR19QnzpYF8qnV3jehcH8ipbo9NdEiGNBpMWNdRkyjipDKrMLb",
  "key8": "5iZ3aa53j65N1okRxmpnj15a7vTXGpJRQC1gMAyz8JX8MXNiJVhZjoWx5k7zMzSF6GCk4BUfYMQHgsLdFTcp6csk",
  "key9": "3ZLTZekYL5ra9t7pdNKduqKQfSKJg593VhUDNAVaMM1vcNBk6yWR9zZTxHDsj6dP3fUDtkikSTJqgqLpm2owf7T7",
  "key10": "5JoJd6TUDcn9eocUumiuXDY16aTh699XZNGNvSqaPP1t2cLfJ951gxSB9x2n1KBVioauuukQ2LZY8HjxWXCVN4HJ",
  "key11": "5npinxyUybL5hDPRWC1bERfbdET7q3BgE4io4CLSZHswxmKJs839Vd89EAiwGQhaGgw9gniSDVecdzLjiyusAuiA",
  "key12": "33CUiaygY9UGMzEdd7ucnqGk7LMQNAWZCzCpMkUjZt4VXcbkffLsEL5cr5c5z8LFsMstsxejtXApT52mwDvnxiBB",
  "key13": "5PFfJZPsD7VTY6WH39wUr91Jxs5zwYWZoafK1eEEYb7GQzYLfvMZw93LpjUEu1BFrkMXtNNjGQoW5GEvZ9jpgKWf",
  "key14": "5ybcAD5f79RrnpsEuXHKf9fEdYtN5pB5iwEbAVqjb59CeyAAitGcLCEdXCs9xxMq6HXbwsQXhjJkyVyRCswKwcQu",
  "key15": "3JNZamr3CLhJ2qFQc9KXkjPJg14zC38DT7rVFbaPS8HGfwDV2HvNXgyBg4FGCJfHxjstkpvN22DCW7WyVF9jzWhy",
  "key16": "35wd6uCSmq82mi4BpCHcUobhbR1w889DrrjCpQbEHFZToGyuJ6vBsMATPxFwMj527U6t9SCECYk3RqKhGyEBrkFz",
  "key17": "418sFQFvT6Hk7dozjcqbB18rgonfZw9V1Ra2mWrerRxAqwKnDvazVz6UWCCPPiXWagaKyfnAvPCLk1Zya7Um7V6c",
  "key18": "646nPjyqZJakBFu3c42SBkkPtgg6HUqX3TE4PjANN2B2SqsAviNhZUyCiXhaLNANDHi7pGSWQgg8LbLddt3QdAVQ",
  "key19": "3VHuGbAqStYzu9hytK8GyknKyDxqYYBgyRNH32UwrT8DbPdWM5uEeXQTHviQBQBjYS4ULtaXi2LcHBaV1HzX3R5y",
  "key20": "4zmfJKp2YPgpZQ9T8bEbF1hZSBBa2PWSxqc748q7Rk468tHrGFgKLj2M2ASy8Kh6HFA24skRfsrm5SjwqM64QNnb",
  "key21": "NrPnU45P7swpEGcW7gFdmUQUvbZFD5K8CfrcmDfUWUu4DrmZhZB3Qie8LDmtfJVqQvwziS4pc1yjxM45ysJHz2U",
  "key22": "4xgL4KjRjmjnGn5hTqUBr4Vy1ztC5vyKJJJnCwvCizjpKH8cnPtKZgjDzNKZKFxfriqUEnrei5BwHmdoT8dwze2j",
  "key23": "2L6pw2YmbNEp12cdR1HyDuaL54ksq5KEgJihBkbiBNjD7uhDJnR1xPZTMEJANMbxHsP5F74PLR624WU1wLuCC6Ko",
  "key24": "4KzGB2xpRL8pFaNFJGUzSs2r5HkSTPckwSEUj9yKbPDtwgDpCZjtGrkoc3BfQQfdaVeyL5Xydd2RxeDCc8L1688z",
  "key25": "22o4ttWTPB2RurrX7W9o8WQregMdp8ZWn2GJwxwgcZCmLRbFddskgqqFFQeeQHSJKjQxqHHvkbFJRhnyEawQaoMw"
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
