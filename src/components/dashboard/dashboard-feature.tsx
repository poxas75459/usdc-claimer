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
    "PsM2DsZxAHkHRwbvU7QnwA13Yd5Mmp9cLsM7minSET8NVQUWHTtmXKLo7xNzcXb6itRy3QvHv2h4vkxJ5Qcynuh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uvcUXWfLnSro7unKzcvcZAg3L417pacWjxWGUAycgNdvRTUhccBioznpDNJCE7eevMqyZFdSzGCnk5HbrAVVtaX",
  "key1": "4CEngTHt8euvai9FzBq2oG4C4x8K92yYrF8SagVPaP7trk1xPjDy6ZuiPNNDdQnk3e4My7dcS2ggsvZizcwc6MU2",
  "key2": "5fT6XNmLXKJBzKwWAY9dh2uwaUCDvF6dg3r9v4LqFMPMqjHZBbk2k39MDUPmKob1iYjre6XBE4RoSNhNNpqFoUCB",
  "key3": "47kNKMW2bf9EoFbsThF2mbcMhN68c3x4McFg1pLLCnfdb4RGdMHVEuNhxETMC2jNj2a5DxtuvnTe3pqUA1hGXRhy",
  "key4": "64mcoNzeiDJ7vXqn4Zq1JTHgriwoJgY61hDhYtENvv79zsjdcKHqoSmSGQ1mV495byepEkQGVEiKzBXy9eBFbfTY",
  "key5": "eNkANPZQbsVjrBHtEhKxuXRSWNRwq2DtNNymMRGyTgSFtvvhZrNvnX5eFTPyWC1U3xYrZQ1ZYze7UErrri4T77R",
  "key6": "2PDPp1jU6hqsYcaaBGaaJo2P17tNo2oENBSh6pcoNgChND8suLPk56gCNfoubVzcUGu2n9kE6MdXMhZv1kGanNVf",
  "key7": "5WDNhw3SRQ5DL6tjcvUUza73PgxGwqPx9ueXageBYXEJXTvG53svWodSads6XGZyEbLBNcQvLuEdV4RENwRSLJnD",
  "key8": "51LWXhQ78iyg8YcrhugbucV9cnQ9GvrEE2iDAVqiroQwR2YZkAax5PXaiq3ur9sr52vkr6CN1VKwqBHMH6jbiYu9",
  "key9": "UtmfKKYqrBb26UD9qqw3DRdQoNmUgyWYLW6PwFErwQ1Feay2PVdVoNwkwPF9AJDT8H1JoGqZ9g9ovRr17j3xbdg",
  "key10": "3e9jLohdi55739YwhqMgU75gqvJuib4wD4gQSwA2XdXRfmc2L4gpTWLuUAvVtBzUdQHG7iNw7htQgsMz5BCWjMJb",
  "key11": "3wqhNbEEeBHPhDSVNZ9ysBtJySt4uaECohDvByHWi8DzXqpsnGTwbZyYPKyCJri5QfMnKBXdYpAEUeqXRosxc7Jf",
  "key12": "36XbhTxwCc3xhfphcQPgWF4dhZTvivTNooZC8XgBpkA1H3kMNXW69oBAWr6MwSk2SvnBFWV3Nu94tpYDbrHBU3wL",
  "key13": "2Umkez8usyLgDNudwV5CFmJByWK39k2naz1zMB4nfTbK73iDnKwgqkUPXHe17csUQjJoWcTnvorr6uezm73Fxt52",
  "key14": "4aRddZiEeGVtEA8kNbH7HCMqppvGybunVViyhTGc2eUQxQo28TAT7bpPoTt7ZA6WACwNuuKJYUPg3hWf7mu5ZiVn",
  "key15": "3edPt4Jy6fvf2det9MpAxPo1AjNtD1KUUeFmjPTV4eskXZ4WHA8tuCTAADCg7wpeLgPMkWzyZrSfdC53U7RAQKak",
  "key16": "2edYHp67dnw42c3ugDe4FQTCNYZxhhsMmmZmqoKgEbQUTyUX3qadPYXeEd4erURBGQUC45ffZoz3Q3dKXiZ5b8x3",
  "key17": "5ckZQ4zNgxzeK3YLhXkVdXJ6nLe4MSXcbC29X75ojsfnTpJAm2LFNoRsFWDpud84ZDDyKDEwxQimSbPLUgDYTgZ",
  "key18": "5gd3CA7cJQ5sJtQtmM8SQFF4pCZnQDH9occkVvP1cbGUt75fC7fWdYQKnEdkTkRNXrZcqhxfLcv8GTJKki55EuVU",
  "key19": "4GwsNkHHm81DyoPsLsePCVdnK5ykn5qiJrmauccqvZVNtAqwQXzGskjTUHviFbCmM5hV6sbsf5QyfRTUXFytAzo3",
  "key20": "5YVdErdmUC77gMNArvwHdqUQvpJnefz49f3ZLCQbxDmqmXmYFuWMwRHyDM5K1Q3Y2E3a5GDdvctU2kqbe7cfqXvt",
  "key21": "35hLBipS1q8KF27LQgZs6MJgJCRgsBQzmCouUzDudnznhUunPz2khc52D5rMu1KVARJ6ScnKzqcViWh3gwrRrAz3",
  "key22": "5WpT6HfvZUTeEZm2NNBrNgnRRcPNM6aejNkDmhWtg3agahDs3V2g8gTDfNuBDDxZcbLAtmruVxPzkbKNxAcFwiAt",
  "key23": "2xH7HpTJt3JyR6HaF8tPVK3xD3owiBruoTHcheJTqKSp74Xaa7o9VEw9chTo6EmD2WifEZNUJQ5wiFmURmicZTBK",
  "key24": "4zp4Ts2SzzuXYZHNu8cHW6tNwiyYDUXqPDRyBwrePYhtSwqNnq9c5kqfex7HTa7XdVWZF5aFGijs3KHHqYZLdWjg",
  "key25": "3WF9fAjzssAzSFvt55GUY2s8bZHzgeq74SazU1eq721tQVuNbDMJZNFCjEnLtqCH44Grmzx7hWwx4KMyDuC5KFxe",
  "key26": "ejwQekK7vS3JdqpEe1MV8VThfiC9GrZNeUAwwmRpy68QpdAu7gLtoQjTX79gF2Rr3sTBNJZW2cEarhGiN8ad67A",
  "key27": "2WkYcvBSePZLomvJ2bgD89HVt6eviZo1R9k3uMRouFkWWATrk9s2HTrSXRZ4CKyC9TsTWNHVEubaHT37Y1be1kZy",
  "key28": "3eRdugFoaakbpu2Hg2KyU5asufiGr1sabdPFnMJwzFZyWJMMB3QtJVhrFg3eD8S72LCZUDMKN6PqBEmNji8fM5iJ",
  "key29": "5hvY6zE3UN6KJwzH5WFvWNeoFy7kpttXDPpF5S5efb6ya8JfAQNCRJBKjseWazCrcm3uWcXyAwLDM9wtGvBk7QzA",
  "key30": "32D7DWzErxGW82nbPF8oXH8njWX9MNF4zWnfZhGUBuE8jM8vuYEpJCFRoaaJ4tPm2XdNJx82fjeUErN7r3nvFFWo"
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
