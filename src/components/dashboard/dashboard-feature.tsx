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
    "99Rp5nuEkp4i871M6thxV4GzyTfEEZ5caaQmvAFhzFwtjZ6cHoARDYyepPJ7zHA2oAL359ug4q8abTmW3eDp2PC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vxfi3wk6ZAYvifwwBZwwxmgbC99Xns2nBrRu7dQnBW237sccmWraypiurcf2jLbXLDmUoR942eLQFFVb4iJKZ8J",
  "key1": "6LBjCWJVUo9NJGuRtEBuifgTtoSV8KXtzBmyA4xx6iqH98aAQLGtpGnM6C62BpWWj5WexR5YkYBLz8cFGf71EWh",
  "key2": "5u8G4Eqg71b2SRyq46HB2CxeqDi8HCB4RbpHNPX23B2X1X2yy89FxzJLsQhrGKopSpHM4hUvUcyA2rw3UzzShz3H",
  "key3": "4juQmWitYVDREyxTDbcAe94ye2KVescbjBSFoSVNzyQXSEqUVsWiVYqYcK4Reps1Q6s1E9pEQvaxvoCJGnjMp9E8",
  "key4": "4UNLWGDJ2EJY7UGTiLKvnJRxFYKFa3Tzdm4EBz9Cd2vQ4vd7xVM3ZbUsAdyw1y6HdGSGtdUTwhZLofN4h4NDZtWU",
  "key5": "3ZxdJfHQp669CCFFADsogtSfy8ek1CcdaKzV2NAngRGMuyR13SWCLqtwdzk8EGvLrH7TKbRjFr3Jss1pJTVzirkF",
  "key6": "v9JhtTQwcAt91S87FA5mFJKTbkxgxbtaWtpQhpmXPkHs1q5yxrubouzmgaeCYbJjRBBtAovAS4cvqyCQkxPh7HR",
  "key7": "4sUoDwsGG1y4inDog9e3gS2cddAmwxfpvwiKvrMit2m1Zd1juZmNNm9XHdx8aT743pnBrRDS2hjr19S3TwkkN6zp",
  "key8": "4khQfo4D2t69hCbUi2a9191V9kNmydBSkfP3Dwd6QUBWvEeBP16EUvcBfJr2xWAXCKjbnLDdXRvLyWvVqoY9PMwG",
  "key9": "4wrwL5oU73crREyHbmWkXgxNvDZCXvsfw57q43GMqmtah7AKjtSNyAXeb3utxdokeYrAi6wERjPzFXMbexXg16Lx",
  "key10": "2e2t8C9p3PMxp5pK1skqu6wf6XJUB1cvG3PhCFDbjmgGTwc2Gfo476fv9ZoELy9Mx8mCJhrUQpqh3TCnPocvmKBK",
  "key11": "2n8EReGYyb7ib8tLzjHiNymqbfFiHezStFb22y2q6NtNncsUytWQMb5esJdVmKRwT3RT4Xy6gfJfxD3sNCNJpuTx",
  "key12": "4texiXtAMWpBvdNL7TeL2fRq33X8M52rczbMxi55o5iwvZjcVRruENjYUH3QprFSusznqCMrAtZ5SphMYEsoU28s",
  "key13": "2hG7TQfQAhXAnSJxMgnrnMu7xs7g9ZDVjwKfUhvXuBN1Le5sFia777kQd5jaQgXLonsnUwpCEn29fEWQLLKrkbrC",
  "key14": "27EHLk5iVXhefD8jKE3Fhwz8jzaGb6dCTZSRJMJkaqS81Lxj8L5iadyhbmsmP7oMeqN8AuzeZ9tsyy2x9g8WGokU",
  "key15": "2zifTXpNKpezdFWGQpGwGLgp2y4EREGrbhhjvaMDCfgoNeRYj31yu4SEcfKEuqTJMKM9WCwboGr9o61EbZgMcQXb",
  "key16": "2hyqZLhdzRc36QRwMcz9gjVXgwiZUsmTqAenRwAuvABSEPht1vt1UziF91pJRhciF8hq2jqhmhhLtGpc4SXUz8st",
  "key17": "JxQpMEpTAegC43YEarTexb8YrsNRUqps7HiFdn7NgELoGCH5hGyQqyeepqp4ELLzG5f25Xpz3rK39ghDnu6f8YB",
  "key18": "54PhEVDtqpXvcdNmGS1wTQKCGET54EHgWE3WzBXPZSNsb6HFda3etou28oNQVJSHZVdiddX8tgrVBfKj5khSmHHM",
  "key19": "67MYMX5k4ZvjHcnbLpnb3A3srbXwgVtUjt2XbcLtDJaac2Ju6KWmLjYKeypetmxUFeKuCqJjAYcgRptv8nf5z5YA",
  "key20": "3hSJjLv7JuWjz8uDhK71X2UrKw4d2bSKnc4yqGMgY8DWVxqjpRYVaic2fCGvDJ2PmHGq6pbyS9qU9XsT81nLF8Nv",
  "key21": "2bTw1GaR9Lm8ZRhe5PbKmrSUPosVfhyJPe7WHcEK3qQ8ukoC5fL15WNBZuy4ptxund8SgTMkKZ1q3iBUmF8UgE1Z",
  "key22": "4eWcqSsDMBKB94VGcVJY8MQb5r2137GE2o5YfzrsVBpHeRYUYQXrgFy1XBq4qw3L3KQGLFBystuDy61rLwKEhcGa",
  "key23": "4oq2QwUYRnZ7BWbd7ezwh5aHRVbFSftkDRYhWjaYPG7b8jCyMHXZPfNxwUbLfMejWkd6VPiHFDp68jyTbJHWS1CV",
  "key24": "evk94ALEGPm8bNquU8CkB3qQrF4kqghY9S61xjZNgazNndT3dLWWxjrRTHwvYxqKzbNbx6TkLtuJzzZDnP2M4kZ",
  "key25": "3xtNb4iZ3hNEuKRrLL9dZQ4carbSCpypozfnmrKaWE6BqASCWqMGKwBThBNkkCsWyChwXPJ6XUZJRr9xNgY5GgBh",
  "key26": "32iwJYbqLpQ4zbRXtAMBmFBx6yYyJ3nAe57aZUhvUi3ERRGoyjHXax4Xenm7aJnnLpVSeUrRQB55Vibixxme7MLy",
  "key27": "2msBqQxB8Yu7w6BpibTDUimibfWhRBvjDP7Rr86ZnRbcXQ39t9WJ1wTkn54HYq5ec2ws5k8jEV3ADr1rsBVmHqUe",
  "key28": "5eHfQfGnpeaVvPGvH71t2u7PasKnsuu1uZkZVCxtxQ9HD4Q2JyWr1bTCuxeFXrH2GrUPHNVCyLZhy8kV4us5DTPt",
  "key29": "33jWV3vTCejpXXqB69HthCjmE4w8JKERFaYsaBXTYZkrK38m4RskWRDCsdnTWCTR64E9qqRDm39XFRhrkyp5S5xJ",
  "key30": "5vo3K1BAf6rDN4wXjDX1os7CPgc7LwtWAdmm1kFgMQ9iH5ATiMyQUisSHCtL4RnZibbgeq4BhuLcep9SkefUYEW8",
  "key31": "4pZ8nLHiRPXL3u7cTpK6SFZxJ53kzEU8C57c376UEmEzpnZrN3VJh1VUxARhprxCiQZteu3JZtKHNtgBRgVghNMD",
  "key32": "25kEA6aC4MYnv4kHeYybM93X3Ybv8d6Zr79U2jdLZhWcq9UbPYHac3CqDJ1xJU8qhW6brNc7M75KBTs3xVQXstzN",
  "key33": "xwySYW7TbpHeKgqAjwekN38aHkPiVuj4uCdnTPtAwUnZdeXBppyHMt58tZYxU3QLdLQyKHZphyaY8RepMGTeq4N",
  "key34": "cXyUshm2jpDK7kHDqbuPgzfxjVFBWGZZ773qodFDVwtS4gfuAUMUGLJSSbNN1Krz8bMmVQtfoNYNCVgUiTEbEbV",
  "key35": "4Fi13vf9bR2HwbiQ6vvRX8cp3X5zGu2adq2VgyVnw5eC6vFj5HJvEe2vpKCmVJVsTZ5haLYwpST7WLreMbK5KSS3",
  "key36": "585ntWczzCGJVRzkgMHHk4QKgUFUrScjhiCw5518eHXBj2GERH8cSDQ9XXFKC7uorwFgsR8avnk6Sf7ZGypRu4Q3",
  "key37": "R1wkwvc1G9XGa3GACCZrCWBsJAeVqCDT5njF3TfFJ4jaooAVbJ3h7HvRYZ5Ya798QrfiGT9Satk1B9DM3TME3fe",
  "key38": "aSbPDd6tWcB7t71v8kdxsQZeXqoV4U9UYrNS8e1QFWbhVLztNFePd9QMy7FYQNUdhN2k5bFGTp4UEjmbzKFeCmv",
  "key39": "2fp6w6bHfZdcb4Z7DRXW95e5SYrBUqv4bsbNqeRkJzuEFMRjaCaqd6WXeSyBKDa2KUuuixo6wKJ4KS5urzUbm3WY",
  "key40": "qzpTYS8JniT83XN9kthZ6oQN36ijNNZZWcCwQzxRe7K9ks1JXiQCUdzXuKrAwtvK1prBHKHMgJLtiF4Y2pUqqzh",
  "key41": "1CDPnxWb9G1KdvG88DhphFNLxDQHkroCXj6qTFZBvJbh8xRTaDXZMgUfz8Va51BFWxJbEaTudqGdqw6kbSMnko8",
  "key42": "4XEf6GTRetf8AXGfpr6QsYV7z5s4ih8ArpAnaVoadXAjtuaEdjJjd68uGjaHNqji6JcHZHSngkA1cDihxiwrb5zj"
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
