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
    "3F2LdEDuuPDDkMVV7WX2j889RkZb6PwJWvQmQCTNM9RJabUrSZ9v6GALpwimGa4hpcq4dmhivUmKFemSY4jZ2QXG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BhDbrPEEXCYEeYhnwzRecKK7PFxQEXCn9Wvo58QmnYxvLjAGb89P22B8JQQMQrwFj2P3wmPzS6UaNHucYS9EBQC",
  "key1": "49SLVQZWwKcZFGPpi4k3JVWnDA5QHsJGkkQ1bz1qW4omsvxfH9cGgXMcrmk2ZnTX2ucn5pkjirTtuSFr6HTZdrc5",
  "key2": "3PGkwyTF2JmxWGywttFVwqKLg4Jm3etLAeek5gwxaBmoGsoHqmhtbsyyUxwvYbm865LJ8xVhWeNP2nfnq93fFJUA",
  "key3": "2RWUsDJj6TokHRPdyK1eB3X8JmfWxmzDVC62bzGYxhxW89VFmd8Yoc1sCNxBz88QCTfTvmoTaQz13YnRJYkvrnBb",
  "key4": "5StvAy1f52jThRk2dkt4q46a6ZkLmHtWYtPH3naezYAcXx3K8H1HBWMZNQpTs2Mw3TwyUeT9YawanpVAiMgDRw5r",
  "key5": "5e9yv5gXzz3rPBkdmeKAecKjvnwfgN7JM1Rzb2rwDQAFit6cRPwqnJXJSyRvVJFuTAZ9i9AfvgpCLpVBFZBei2tU",
  "key6": "34mb9voWp4XCcMdeM7kTwVfufLCM7d8KmMHMWN2mUX8HohLw44tXG2SFPtpQ4J9GEVBDbP6nu92sCozf9WDuyRNy",
  "key7": "3va41hKbTSDHjNUPxBATaijNbEX84SGcCUdaTBY3rRaQqn8KAZXVjVrzQLMSqF8AnFgDKfyRiaQrKtrN4VEVgidX",
  "key8": "2zjymrEj9GsQjEyZpj4atKX1KAC9ishLbnSX3oDWpAJKSLmrTs3nmKwBv4j9bfDmCBjUWQFcP8KCoh8V4KmiGyx9",
  "key9": "4BcAbFuD4RXBhaHNEX2zVP6U8zoCzBnGu9JnYjte2hAsAkor1ut1Zjz5a3VWGd17espy7rsm1AKzLZkNgufeWTFq",
  "key10": "54B5gn8erMaH7C7thrE8JMPNeubPytYRoDWkAnYVZJfAFxSmiYv8MGxaKiwaeZeTXfD1xbe55wzxmfrbK68CY76X",
  "key11": "3ANPAvyEY22fiYaTDVFgKiy6JTjnitBK6e4S1R2hdztNzyuVPtNmD5YWJKnbwGinbAp79Liduu5JSDHg3KA58L8J",
  "key12": "5xjneRLpzdUhcP3AVkpDxAJtGHrykz8PrNdEa5r8BDEFSNpZn3YjMxG5irWcS2i2NYzjcK7P5p4w9uxVWtQ4qL1r",
  "key13": "4zLcknzV4Xj7P576WPAm5WfNzoxG9EbeJZtJiYj52cZsw6xJYjo1bL6a8qpbcDpPahxtyMS4Wiq2cRoyUZiPR3Wd",
  "key14": "2csfi9Fjnw3vEqjwGNibK6sJeHBSv46kK9GrySu3ALJWFzkKyB8bD1bYKZdkY2KkZoDhZ7swj46wqeogv7sSYfuz",
  "key15": "2DkLgVPbfh2BVKtX3jPSBTQLSFXHEmK3LigcNMotDqePG4eH3dT4JhuGsotuMLdPt8U9pdtKak3BrkuKtt58bHjW",
  "key16": "TdPhoijAxy5yN8VPAxREcFZ3oVw8emwdbnefGeyWkiMWT8763J1L2SXuWP7TC4N4SMY23LVsHEk29Hxh4bXLRN9",
  "key17": "4ppbieFboT6tVtGwnzfDftjP3qXTFzXF55cDAU38Yiu5pQWuuxguQA7VkGZ82KUma7mMDjHuhDBYHSAegJYPeKHJ",
  "key18": "5JXUP6z6gSLRgJKEi9XGb7wAvREoYPDJcuANRPqqJgYM36to8YnRjQ5KZ1u6X4fmw4MyxyLbyA2hY6hyD6mnrWHv",
  "key19": "5RkXoR7n5A2kLJ3jmHY9Aje9dsFvQhqo3yesForyWshwy725xPLbLoi7ZBBAXd1abKYLiRpMJSKmwgjqfzjGasqq",
  "key20": "4MkCTthbrwwHwzd5KXu2BDygBoPzwmsHbVxJBXTwt6jNvbcFeULRMibZF2T8gfsz3Xmc4Uged1DJXrfQSPyVco4L",
  "key21": "51WTQESVeET9wmnaRprdEoifhDrY6UxVrgQNKD1EcuXQQTZhYNReZbBApj2Lq5tSDAM3husUTBGPVBFdQq63JnL8",
  "key22": "dSDRpU6LXnA8mpD8cBWpZY77dF4sgmJoP5NMfJouooqfG6CGAEes1BhohRqsCjnf3Dow7w2ZGFLrNgvYnyXMk8J",
  "key23": "4GacvnR4aF3VJmW5BjAPFdwdVKdGsvb4NC2RYKHzGxNXQTNNUHrd7oBKu1SnfqwDoH2WZWar7Ffj9h7kVgjpf1Fk",
  "key24": "2bVECtvRpFLxrs7wQP54W8KYdEVZVRHm95ii5pt51vLJP14tdsgxb7PZ9ViWzqUQHuPthjonNT8wCkDs1C83SEE",
  "key25": "3UDaZjd3E4xuTFcWUrezTMvqRTXNXVZDNQ8SpobDMHbAvp1wXNCYRCDpZ34BpAJdumvvQJDdVV8mWhdsaPD5GNiJ",
  "key26": "4ZG43cJpUbq9Bf6H6qHaxTRfaZGi8ZQxdmM33Rwn53agUT2aHYeuBSYafmZbFuBWuPZ7kM7upAMyh6P5p1D4SYPv"
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
