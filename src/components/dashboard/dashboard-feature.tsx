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
    "2QrALjn3wZshvzRicyvEKA1ckBUNMU9S3pMmdNCNotyr5WnRqWHWhwADjyt3t2Pemx77qV18KyRNGzq5szVXc2R3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UPJmr3jMgRqcQNF1qRCM2mHeF5SXfX4trnVPwcifzoc1xfohcVKabFr9Wa3H5W7gFW1wx8nfCWixgYexoDWL4cH",
  "key1": "48YuDEEmgZeT5SN9MH6JP9CfN9rzV91bEQ7N4baQQ8ci6XyLcE2nT9BpjdwswMdfnhihvbZmGU1kmH8qyPHqQJ2B",
  "key2": "5KH7hBsKELFSqN8N7XHNmR2KWyY815Cbg4TFedimBURXxtJzmsy9ov23r9PArJqQ38RALXnF9fxvKZYyKQVtM97V",
  "key3": "5FcYMWpYzhU62rsKUTkkmkwZKdbce1sxaArSRUtyapNYoNyaZsPsXUmptuXKQYUnNxvz7NK8L21k54zDEDAtFtA2",
  "key4": "2MdEbdvsrYu68sHTuvgYzCnXuW48GuMFqRfSTSZjdAwchLckXwGRx3zyzQRLmLnr9wsPVNYeTXcWESjP5g55CgXW",
  "key5": "2pT6DJnpgDSCKDr2giqJo1vC7EZ5d8Eaz1CA54pmPMfVYfXu2tgLU4gU6CaTA4iZQX85USLNA51sBQegNqMMjiq1",
  "key6": "5JtVGdCtJ7WNrgXCmMycs2AaTWyxC3ScM8qeurvsBBw2W3wrWDhBmjSP3eK2pZ1oo1HxJfjmKyQEARk9MiLgkDnL",
  "key7": "5hg2aWYFZ4RAGyYqxJr7kCTShWr8xekgehEb46QFWWdK27be7nUiJKcpEmga3G6g687UA9E45mu9Qxy6tgMBFUuk",
  "key8": "2r1bdt1KRFBeTveJYwQxQ5a1i3uzHaSz7c4uJwa9Svj5UX834garKffC3hDhJ2nETU9Vvydi9j9rHCEnXhjFFRMh",
  "key9": "3qw6U4B3VfdVBW69Wn4oyAtjLHi7RjKY9Nh7xsnV6VWM2kRRA8t4HEi1HUnwgfuX5gUgRSx8xsVsdFNNjSiaG7Dt",
  "key10": "5hoJQWHC7B7wzyyjqxoanpRjdzjCrpphfo3GbsiM7dkMpyhXfKxmPV4mhJzDtUGzEVLca44GPxs5CRrLpsS1ofbz",
  "key11": "XJKFTaRbzMc7xzcoifRXGaDqGgo4gpM4S34qPcoStCZABDUb5Vpapdn5U47Xizk8L9LrF8HhaJq83RR9eaSfPNt",
  "key12": "3LwDjxxe8PguziNtfuppWKKo22TyxbCKQFK1nuFRGW2AEjrHvuGkatkUswwNgzfh47Tk6VKiFw6rJDBMyDvtCSaw",
  "key13": "5TWVGujTGqGrP2Yg5XhGUVPu6KtXRbUscP3ToT43euwN3X8GNcXLC1YDbWsyru6uiPisW2Lwctr5WeVhv7cYcqqE",
  "key14": "BGh28hSEwjha3L1S2Y4v3qj4AbSSxZKSVmjh9ZhdEE75WTTYD9PHMhey151co17mnXwSzX8Yy9PE9P27t6L7UhN",
  "key15": "4h3YLcAuTGVwr3PUHgZy49S1uxQAZnJwmWT1oEos61q3RKTwNECcFXdwp8hujVYETCzgmat3kiLKQFALGD54t1qh",
  "key16": "4pQEa3Uw2LP4aJX7p21evvdjes5H46AtSGNh25bm9NPZZFWBm137cPweKvd9mLVTMWWyENPxDdyTKJKRCeUumHv9",
  "key17": "3otMGc1sURKNauuiHqyT7zxf7YPpxGoAEksMzPoxxD1Q5H7xDZ1fQi11TGqW29PCXmbAnPv28ctEuKD737uXMjVw",
  "key18": "63npm3BguVpqzR4m4uECUgk3rhtRBXcyVHtZszGgA33BpUPFyfXSej5yk9AZhcEgoj352AaBbMVPuFrYtuH5mq5v",
  "key19": "3gXpFKGsZUUDM4HofYRPVKt8CGha8MS9CkW5j5xiQcsu6AKLkJ7xAQ2PDe9NQw69bC88RKAKvN4aA248wns3PzoW",
  "key20": "MJw19WR72K6cmZ1NYPKEftNwA5j4XnysCSZDkz6fbL5X4GW1WoyaQtJ5EkRvqfNtSzst6mmFaM2tUzV1fXjYJbi",
  "key21": "628B6jgW5Z2kZLJvrwq1yTQoAngH3BAQkgsq8Psot7ygJ4xCH3eAKwFYyWSRoYkdkvJHMQjqSeTSLooxPqAwRpjc",
  "key22": "sDQ9BtuApvGRAHGjEHaG9bn2NzsS8691ZiV2rWWJ5GNzeqoMkQNDnFhFU7zwyKBbcuZ4uQV5CRn5QZcRTwoK8e5",
  "key23": "3kaFsZepuAre8msaS391UgXqvv4tr5BK1MiXksKkTPhLT8XjVcca85re9rPAoH3JNVdPk5ExkUTFHfiMpmAcQrUN",
  "key24": "M4boWqTCPj2CUZUzZUW378KqY6Va8CYeviFt7YxPEzA5bkBsL4wQ6r6DesokJNxJUUn8XrNCM63P4xFEkUiF9cr"
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
