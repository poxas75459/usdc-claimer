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
    "5nkX5ujNZyZs9NcfuMcKjsCmikzzKqQYrr3rPa8HNWuVxFfo1t9qXkLwA6jnZVXbkKr4zX3jMG2eeS4pYqsDBJCc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H3uFhgbWaCZBpNUKtkwHTBVRRhty3vFr51jo9CdGoTNVKhbupjiLawcKkQVbaxHBYjyiWM16vRWc2avoQvVsJX",
  "key1": "4LXGFcf76q9QfGwzzYh6kR4vChbi2gucbonLH5HfauAtpwXJ6SCpeWPMxakreujBuQnR33TaoBMPo6HY2fw6qo5Y",
  "key2": "2X6ynSoB93eSSuBMKp63L48mbyQKAg5cXXyHrr6Ycrdnhp3YjbTd8rzvCL7oEYjHwgcoVAJrSCogQEVKdDVqs38L",
  "key3": "3dbMLkyxNgo34bQQBG1NxGoCekgrwYZJjdohtj9f1zTtqaHLDzsuEWb8veotTvAmKhGWWr8BEw4uaKndWzKN1cDq",
  "key4": "48PyqyJVxxJDoszNaNh2h5sH1n4CBkoe4MUJDKMZ6KfKotMw4nHsGwgQSm2qZWAtPYuS6apTzi5KzBiW6TotpSRp",
  "key5": "N6CWtaXLwe7uNguLrE3gzVqSmNmByeK4ZLV3ZMwkGoPGEzx3TgMDoMf9rWBwU72GaxxzxrAKpC3dGPeKLwPM5ip",
  "key6": "2brYDisT5mtDMYojJPfvvQgpW7gb7Gwcn5npoUK9LH8hdDBfVLnxSvZYT2B9PwccPECSsXrwZSmzWgsoAasTeZh4",
  "key7": "r9vMMytQrvhhLRYym17Ma8cTTrH2pM9kKtGd47emAzYCpGD9hZ6T2buz5QppfPif2vGckxz9BL9TVuTrSmWJaZq",
  "key8": "3c4v6jSxXb9ymuYcEDd43pZcn74jJ9qpRxgSXciZ1mSVTgrHFaXxvMiGhP12x3dqnMLsJCnsX2C2Z2LikFefgmm4",
  "key9": "3zQtSSTdtbpzJYs2CbRQRdGMxCA3GaUwLkNfPSRGQJhWCrScfDH3KKLEUqsnZYqLg4gDtAL7uDWn4E1giW5y3CBX",
  "key10": "7P4RpnYwn7FDtPMaCXakdmccPV1gFh9qxSpoqeAAeX9AytZDg9HbNrryvtR7JaCtmtCfoXnbcbKqx6BMKMkEZXo",
  "key11": "2bAdJyib1q46wRGPnZCcVr2Qw4qbwF26ihU2yYxcc9xwyqkjwdxRLV2T8SFpSoAVWHEVMBVKt5Xz5V8jHUEbVAo6",
  "key12": "5fpn9zNM3wREJzCbuTdgg8tbpozsyCZU5iRxrSTYVxpWj8b325EzdWW37rM921FbRvvFQF7VBDLfsEZyNSwNoF7G",
  "key13": "243aTgJCFnU7wh7xhNLDZYQbWyb5VxEerT29g9xDe1rzjv9vG1CM57pX8UdBEjcub1WLEbzxQFPCb2j5QuXenURu",
  "key14": "63TyPjTzL9NCwTpwpf1xPsuYopVefLXpXipcWqte4kgriPobqChL1QTdPLgUqtVRoiAC8Ytkrz6b93DrjP2TtJAg",
  "key15": "5QWtDH3hMSvV6CzhG2BhnPjYLBY4FVEehf1bomWg1rwmNjK6Y2XMn9spMZEL8UhMnBtKPNopNSjYf6i877DLrM9C",
  "key16": "45qJvv7iQdJPc9J9iRH8NFsWNCuYsRbiJiFutxiY7ubT3bYBPbYK3jH6yigqvWAr6JCSFgphQUVhBXwH97u4wrDY",
  "key17": "T58rfwzzpmKxPEGqhb3wYJNe8Utg5gdF5r7WvGcthZw51TK7jnrC11Gkbp7wyNKgKG5Mp9vtQtNmE1WoyEjxq8B",
  "key18": "3FY2tvEEZEnk8XcbyEr4BU2qMmZc7jRoL1dtv6W1bU18rAXtYNUq2yUPzKdnUVYaQwdPPdgA42QiHbmFgat4Fw7s",
  "key19": "5exCeAX2UYadGkiVgzwoPHc3XoeuELxu3puGwVHWyqko2s1QYwQ1jnVYFfdBVCHoUA7JJpSPf4m3uJrWm1USjubz",
  "key20": "5TgZ9w5RkLhFARjEYq46w7FH1jkVPVfoJfJiKvBAS4ZmTrgTCNSeXzqw8gv4psnfUv1P55njLUG34GHvbYd7nbXF",
  "key21": "44PCijiUWiCg66dPK9XeR5b4BbghkMYBXYaDX4Gye3Y61L7eqrJtytjnCixw1CvYgT5n1KHhCt2gqFAzjVbj8A8f",
  "key22": "2bWFAKqmV3kuzCbBr8znod4rLny1RTF2ke7QnS73w2GdgVsfXpczeug8ALJzV3771zTTDq7VWbXSB2Y34J8ZW3dQ",
  "key23": "4bTWsbLkV8AV4YkVYtofpPezmuFaGz7P2PC2whE6cD6dbb2rP9UZPjeBZVyNukXA9jJgy1E7s6ec43VPxbsGpXnt",
  "key24": "3Qt2u5xbZMABVBerB1wbtcqi7soASHkQwtSLmS5yoVKfqmAirn8pM7QcL81Qyixp6ojqmNtcm6VDGhS7CU9Rrfv4",
  "key25": "5DhbK6B4KtirEsd8QL399okjVidW9HBSqKVBmRgo8htnJtFaV4AT33wBt815q9rjv6ADvJ7afTB53GdPGKyz8A2j",
  "key26": "22A8grw7yiT9FjGZAef47JBv8bJxb4pLCx4whBcYH4tcSzwPRXnXB8VFGVLAkU51MYzxAwBtk2qcbNTYX4Kmq5wb"
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
