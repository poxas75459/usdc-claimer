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
    "5FYscgSpovwgb1ckFc9TKCDqge7zu38P25wVoQFdSaSdDyjhmsDbZvSaB4B1R6LE9Y7vURY7zj2xGniGYuyuYpb1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EBYYEfS8DHhBA29bdzgcW2rdmneBdryVH8N6tmZwkH3pUe2HzkeuZiqBgRW5QfeNyTtQ4AcTChwjzXSJ2XR2M7J",
  "key1": "4VKAmJ816A66niu8Jc5PoCzYoawcQpTwwzRuN8PnKf6hSgv42epi42ExmE5eC4hFqkaAohtAKWW5aR1Pwb6vkqtv",
  "key2": "4SiFqjfo5hADf1BSwVY5tjvLvVUep1wgB6wNrPHN6NXrgQBtjByHo8cJL3EZY2XWVYgXBukwahpZX2nfvCkjHqfF",
  "key3": "384rLKEzj3ZEi3dW4VPWCfdsnY6fyMMVtyMMqtiqQzS8EiYFS1M7ky49b622RtrmhCqKz7rzzhC2ZQ39DF4LKWgH",
  "key4": "5dXqe27jPnowSH9U1NDPW7npbkd893VQ5LC1yZ5fPaL7wfF9cbukJousJu2vkW4UTnpvdqchVtMdjGHvDYokFRG2",
  "key5": "4a7fAK4thANNWSHkjgSMHbqzfVVgWm1bncQYH6qfa2U6dvtgCCKqDQjtB14rHNBceGL1Ta49tqciBSu5y1rUg1Nh",
  "key6": "2FLy3fFRD7DGvsXHyJDbkmR2wofvb2YzTrzJYddu3pT2fCDQDWKDLXmeF6jiYXpdG1PwjWfa7bCmUpZW1XFhtMdP",
  "key7": "5izx7kR1jYekSKn7LC7gUJ7u2j4bB6tgXCHvfcmbzR24XXgb6pV8ZURkmEHY4PpDQ7X9y6Q4m7LMmyVDQzEyvqsm",
  "key8": "4nPqzmkMTvroGDPb9e7kSKddbFCdq5qa8eKTXg4MAZvWX4ndmMgT7oSxk7p7v1gRwNqiVn2H9JcXwhp9eeqBLfKJ",
  "key9": "59ynGsJAJHWK1revk9WiWn8CGXgv61jC2g4L4ApioTcFuK6xn967HnjGgWanAk2yfttNFrPXSXQJnNVYX1Tg34To",
  "key10": "5T5b3CNnJSr3JzrgZ7WCz7o8cvYibYJfYMKp6iGaj39GK5PidCZtypv5JNRYA2fHHsccGp1cUTyoKsYdfv6f5jcm",
  "key11": "4Eod3Tps53kTTtDih3gfPtN4yUyJftHmfv8ZAtUsrqjUcMaYr5yTFtn6otoP2nngDZUjMxUDXdtnPwtmNnW7ivJ4",
  "key12": "3CxpBLwKAFQYZMqbFQVX8A7gnPVCKSbt6oCW67te83q6uZdHh4PmAzThbs8pBDbngZ5QyMvr6gLGbfrjjX9wUT3C",
  "key13": "2Jb168PbqRFSkCAiGfu7vLxGn1rzxn26cQWkJWUbRoXNBg9e1SSpYnJ7267KhXnsQC4bLsspXCmL4pxNwA9sqXR8",
  "key14": "4BNNBjxgCAydTEQbKkDPJJsjUWj4cLQf4iAWnZLef6B9eDDZyhjbHTduTNLi3g43Gxa5pnboWGdZ9d5AoYKT5fBz",
  "key15": "3FKH9cPLs8m7nNXBWg9PCg2Cmowv3GdRMH6caUa74jqARg3MTWffghkTeVx1xmfL6vwM2usMvds6q2xsmWWvnC6L",
  "key16": "CskWW21T3CzBgmotuLsxo775eUQqp6nT9WPuzSNoJqbj2CAkE3qHh6Rm2RikTADTTY6ye8D94ig6trXcix9bBph",
  "key17": "63i7avxMz51RDMDG2rFpiUW4MvyDpTzymEjfg9pdtVmXiLcKEoLH4Bg8wRQ64JsjVYqjZVttvpwMBqooSk379sWR",
  "key18": "4trvZeEpuCEDMxnm2BaWaUqsHFEd7bLcny3R4ZqEa32yoaf6CuSq1wEgcD5ZoPNazfMEofx8Be2yWDh8STAZxxWB",
  "key19": "2TMqHtJz2VCSXLBe63LTkCGjvUPJ3XBS3G983bKxURii2QSvsJ2EvQKhp3bref8Jnu6yQuXEoFQveon3t678zyZL",
  "key20": "2qMf9pu2MRZ4Tg2bZQskhaQRNxynsD3QG8Vbh3nenGsVHagWaiARbc1kPk3J6xhtcZgwjsaN5GiDXCavmVfsAQvx",
  "key21": "4dFfx2CPMiAqPL6tViQLNembLcfUoDtuhajvQRTeoFbgvDT6J8XMrAQKjHEHjqFGJqVRH3cwXRmN8DFm4qhFWypQ",
  "key22": "2WYmCnVcA4rAp1vbkKdAWmmu7z6G1gn38QxNQoaHTjaPAV6J9J9VZA2BRTCPo5bFRJMKZFWLfd9MjTibzmyZCB7W",
  "key23": "5zU3Q9ZmtTJN2i4rmD9dMcDo4sXHyqjYG2SnmJg8QAJkj196PB4Xm5L3Dtj9gUViB7vByzQFjnoJHCWrDDUU5wxZ",
  "key24": "LB5uzHsRkf5BkEsuS1hdLN34Nqrtzifg1uFMeaas2bjR1RMYacfVCgq29M3skKkwbbTPtz7ZyHCrxsEUTcPzNMt"
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
