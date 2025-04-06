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
    "5eiKZ9sJQ1V7tTGZkbhPmjZjTf2bMbrUpVBwnrG2MneUVZaMisk1jDb48r445KgW4osirav4UHu9oiMJ4x9eZHH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ztk425wr8TDwEuiJd785np2EyWTHvRqVf4znAqTAZA3BhKZzKipMBkJJBJkf2qPW1TnLTEhEmpJCMZNnieq58TA",
  "key1": "jnpfDiBKDoVV7jdZvZobLTUHNhe6gUD8noM7AQi6QAA75u8AknZzSZm8eDcaYwjMSkVZhsNL9d3bnPBhBAsEWhc",
  "key2": "22bWkMdwvJAQ3QUsggtMdKaEWGNFU8fEYxZ2xk8iC4PDVmn7TFQAesu3Zrz5nbW57Ee5qbv6QEfoUp431YrHqPSP",
  "key3": "38aNXdCdKHYF4pHY6ypPHcR6WJqfMrKrtmbp87KNdE7DPpkfCKnscuc1ncNwZt3R4J9QFjpDfCSMgKwvic97WoQ",
  "key4": "5SCMKXza418442KrfBj9A3rev84ANE9nNKYDbQRnuj1hn3hQoLrfNFpPTUVTTfGkKwSuFDnms4i12NCK2Tii31hn",
  "key5": "4eB23z8jRMcXNiXUdfcdK6oJBzBbKy1Vthk7pJ1nhSMYX1ukCu5coigDoQTyEqh2EWpfHiFCcGCKe6BfbGjrAFmK",
  "key6": "2F3py62B8tSTpAM8E5mEiKDUA656TFbKXJXY2DkA5y9sRTxAzHTovjZnHmB3WM9Yes4STfzMk1AEZXg7Bvs19RsJ",
  "key7": "4ZE5Sri49gnWupBubXMw9A9rY9T1sG6CCjcH7ggEeoz7rhgUCmG35Vkj3ejE4TECXuK57HMERLDK4hR3RfHzk7qS",
  "key8": "4Wt8yNxdDgFnzqLp9wGrbXqjsbuVEYscxauWT1yihom9ww1NaXgcFpVVofsk3FyMJnxfh3oe2gUjdQoRL3YLqr8b",
  "key9": "4rEWoCM3Qvgmzh1MxMuwLcWWcXS5mmNAt7kVbrkB18Z2eRRo3PG86ACmMKHp8jscoPiD39vPqZQ7eMFR8nxiCuXk",
  "key10": "2pUHL4v87c7wjKjzGiTNnhtzmq8eLBtiSAF1XyEwkbTQjPoPZ777oY3MmyZAF7ULRad3XSdEdTD5smCDS6Zz5irN",
  "key11": "3EwQYhK6CYAinvTbBsj62bDAi6FueDK4bpNCPevXCgopxUUJKchtz7y75AcubM7uiaYwbv7ZDv8gFyTvJbD1PSP7",
  "key12": "2zQfWgiddpWwSbmfQHu14hEj1r1ofEeaeLoRHHwm36Ep5EBp72iA4SziFcnfa3nk1zJYwE2HrsWNqaCYaa5FHscF",
  "key13": "heqCa8BiNfD4S7V9RRq5aHeKzsMbk2JHvEDVdiDPMhYgyTAQ6gGAhxkvMGdsDSBHLXNnPH53DTSaYJfpyd6P6rC",
  "key14": "5S6iJyozHVnYNvTef9adu4ujSQxWGjcKKKR7XWhasMiG9Fd14TrjVTxWYYeBRfj1cKrbhuTQEo9NHTFrWgPWiP47",
  "key15": "23uhtn35ttstoWiNbcjmCK6ECTnD1e5wt4UGZMuEQ3rHkn6yR7WB21FbPb1rpCxHiS3D7rVSZypppAgjpt1FjzQk",
  "key16": "5ggvkMJ9HKfTkroZS9sLDQji7SupRQJvHi3JnkJt38uR82qbVBWJFpPYNhjw4TTrEUFC1Hqm2rYYf9pgo5voUsZo",
  "key17": "5odoPn4xwc2enVEU1ccFqfjuirkYodEdsoJ3s7RoZHCngHQ4JQpR2ZERm1s2LwpXCAyGAGdjL1NMqgZwyGM1Dk4M",
  "key18": "4TzKscmPQTjrEJcne9rbw5342ty8WmU74hMrKmyCTbksXjwXPm2CNqH2nzp91WMuz1MwTWjsNKGx17jucQDpCUBg",
  "key19": "2ACys8sSqBzrWX5Cp2zPEVAjXCP6YL4CXdkanRUywDuDJNeR21y9FfQ5u1CYgSayN7DXurUR5c9xLkc5J4wHXTz9",
  "key20": "21wKCsPb3RZnjePm26C1JchiPfxhWA5SS422baXcsYvHqmCB15gKVwMoMQde3fMoQP8HEcT7JJJ6sTh7cks3R7Di",
  "key21": "4omeeWSaNFewP3HWfnc6KzUg5D17v7EiJGrB8jpChhTNWDGVnb1fovswrxAQJqgU7BtWTy4YF2mXBcnUSor1z1qt",
  "key22": "5NLaWVoruJ1hG8kd1AvpVWwcJkJHfWy2enWt1mejb4GvPaqcMuDQLzHKSHU362AnnoL9oBrYFft8UWi6TsK44Ncn",
  "key23": "4QUyCzmFF3tSkTXHaDryyD4CuDzzv5hXPmBSRzLzzxcAPXoUzosoUkbUeGCJxN4puJcdAxx5VV2qtWsFz3LVpgAD",
  "key24": "2y19G12KFGbkvu4MwyY8WXs37f9dttKiEVjBhXnyceMzQpSrHrsP81iEWnZzU3bAvi3oUqSoCBHyqq59MrQNeezF",
  "key25": "3KmfWHEtwV6qavcW7o6qBjQns9XbvExF19b9KHvgM4JHUB9Gcen1MvgV6weX4MLgUd117GsKEgWBmDjApXhp11Ci",
  "key26": "54hjD71mgm4cgyDYr3pRThgz2wUQ53EHk6d244fHhcSZk7s76BxbAB22wqrBTPMmWNyjAwMkBeCgFiHSkTGZrkeV"
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
