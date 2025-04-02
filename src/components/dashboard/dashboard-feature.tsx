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
    "3kjS4UVGNPWnYA28kUVZCQqMQguGRqFep4ueUZUD6s7PUoGPKAELxHVNsJKJeauSfLoVL3Zv3Cbsn4ZDnd96T3y2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M9QUbYx9pRAQ9D33N6voG9eBz4WRHnB1uEP7J1dXmD5HRXb8eKZSF83BPWnpsNkcochak67TP3dP2ka7XhShMRR",
  "key1": "p3Ci6Hdzk9Eknf1Uhm3ACRgfGQS8teZxjcFioFtPFNbKzxjxzeXUbYg3kZLjPnsGNhSZczXTohXurTMXnYcgiQq",
  "key2": "5J2mWJ8SaZx8MhY6TKJvr7cRet7MsVnJjAAoTccAAdDmGTtMyqUnznMqihK82M4CgnyRwcGd9S5yxh9gDtgs8282",
  "key3": "3LWvHLQVr3vLsjfbtnudenqN5VS2Gv9vQvJ1HiQHfeXuXRBziVLaAqoGRWxqRM7pYM1dpBZvxE4zvXdCNxcijETM",
  "key4": "2TNF5EwjVQ27HnbxYh7iN5iNAW9nzRanExzt5kz3wEoBdZdmqAHXYsWkrmLy83oiTgnBBC1BwiyBzXAKaed5nF5j",
  "key5": "uDynG5VjJPZ1SethM3FKNBSYa2sfLVsH4FKSUtHBpi9iLda3tqFqfKAGSsBEqtYiRHv34t3F3Yp9m5XMQieA77j",
  "key6": "4HoGWv5fYsVvr2EV3NLAARvJbaq7XMcG6tgnhoChmQmDT8MibCvXgdxcN8xwZiYMVNJZfJXpJHiAfG1MNHgpqZuB",
  "key7": "3KhNEVvDQBL3JPpfFC5siLBU4HSdi8K53c5iEHveBfXWG1YkN5F7ZA1igy6onL9iCTgJY8uXafhjMkdBkitiTvpP",
  "key8": "31jhjeMEmWuAzwPDFuEQiQSzHbX7kzCfFBy6jtTMKAivXKPaNiFCt6jZ2bkVa78q8tadt47cjaRrEc7sWS3PWUZ2",
  "key9": "pxvGTz78cNZLnTtawY5b8FKF27Wr9Lx5v8UCfTCsyj8CsTbLMct6RToMMYGNGTYY8uzMJyQHmxqbxq4X3mzGviY",
  "key10": "2QbrriUEi5uwGvHX6odgySnfxo1KkvUTfmYVJMJRQjhC94xgmT7wHJ7pKeW8gd3KdoVHHN6naD1xJDEr6r9SBBXX",
  "key11": "4XAFmLmy6AretnojatHSfmwkehTatC6gU1LtbVpMgXsw4n64mkNFyueX492UXEF832qpUCC6nkaN4BGAaYTZKxU3",
  "key12": "4oa4zzVH3L2fiNMMaEFQpoS7ohgwi26kv67mNMHRxqWxC4EMVKkLL4CPhtvjw2Atr4SqoS943j1UowoWBnXLYsgJ",
  "key13": "2XVEcL8NacnzSXyRumYT9GTy2kpLJCVM4VT1EzGeGfczgy9CeYv28mTLi1hUYFXvG83W3726Duq8GopaHYZu6KvP",
  "key14": "4EgN8qDmx4XyaTi2TUvczzXfazNzBEGdUuubV5ab6kNXqXpEz3viAULb3SFnMGePVXSkHXrzMEvqGt5EPEAFKT5n",
  "key15": "3zbRoxF8M4qoDEFbq3eFMMHuXU1m7qqYMQBwT2NMGcDx1yGo7LfuuDkuEqrj9nEddMcABg9a6JagCHfpdbGXcVVj",
  "key16": "2tCAyPGCaJmpHJWvTAQxmjzhRkyZveSHG1FLuSogFoCxjheQpyn4Q72mN4Nh5GjAMR9tdecfYuvTUHPhZaUEVdqZ",
  "key17": "2RHH64L5t7q838N28Pojbnyx7o7wy4Yjf1ArWDFWTFVjMukXdtYUGCSGpMW9KJ915ejuaSX7WFGM38HTTF5x2zYo",
  "key18": "3mvAS4ZHKRZ5nLusHkRGVVV6UWatV1Yx4TAzMGAo1AFoG4LXFmyFQZm6sC7WTS74HAjBBikLgBYn1n8PFA8h2gvt",
  "key19": "2CWJv7TM29rRFpQNLLwoHBzdE7XuVSrRNH45wymCFCffGmQcu2y5QMD1uqo3LsVdB7hpZhaGbjz5kGdFDPVCngDd",
  "key20": "fCQVFVxdG6TeJZWtwjZ5v9V9KWd62EpSgNdRTdLWtQnsdhG4ttw69MjpT6htX2eENnrD94MnfSCvxMejHKJ5hki",
  "key21": "5sEZwuMnBYYnBTVx7DtvrksVQN76RVzSg5zuUrVmZu7kXHNY2paVwp9Vh5YDwVXmW8qyroq7r1Nr2TAomeBmHc7f",
  "key22": "4RweBLNT6wDHqQmzeQYuQA2Ra7iLQBZ9qHC1Lh1XXZu5GFDsSFCvHUam5vDxorVEJaqcP5XdvBoXseogsu4Sunv",
  "key23": "3JHMUspS4tJdzXoXFAb6izinvKeZBbbanvFmpuc5cW4jnTJrXY919cTgcDtkSSBKkFwKB93Gh8sam9Lj6ysj5rW2",
  "key24": "4hp8XdDTwTq45WX69Q1t4ENySDvwqMVzRybKqjeD99o6pjDs8GL1yK6US7q2ujoC3DLbJZB1nBNq1RxFzdLCfmzM",
  "key25": "DRNKJKxUQaRy9aYa63shc18DjmqxnnmiVuUehThvPNooiYGDFd3funo3JrbA8Nd5gNWqM9PF2vQb6SZn9uUEiLQ",
  "key26": "28Fw38rkRSddsCDRQtYhmgwi3NidRHDWJiv1ykSv1DHk1MpEH7y7S9bdxFkPHFoVSJ7gGaHhq7bjBQmzbPcPCB5Z",
  "key27": "3Gqv6rXKWpq96uYgDxfJc4Y18ufuqeAodGgQSYKvnRjWHcs99wDczNqDgY2gMWdL4kmE76oeRNVhBep6TnX1xtGP"
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
