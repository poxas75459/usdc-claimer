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
    "Nz6AwBTJVN2X2jb5fpNJVoKX4G9Hgr6ghzexFqtnxNVdU5oabXbp46uahia5QC2UoqVSFsNTNDYipPbSCqtb6gB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2thCNrY3tTsG4wiurXMJqKk1gtqgKtYHBdubFojoNeYZcTZzErvjHchdnVTFrD3F5KNFDVggTigqqP2Dmm9H8Fph",
  "key1": "vRWuBeX3HpQyTECcTefFufEJKfNTymiu7TxqDwCZKf2aDj8zoYn7BLgkrh6XRizXBHqkfrxokx6z9qpw1mZDykw",
  "key2": "589nViwLPe1ZtE6trMengXmt5A4cUzJfY9jf4WwNM1JpcJYGxm7Xtfzfz3nqNwu7uCyThDaitv6t412ai86SAJda",
  "key3": "gJ6EuhgQ2jc9DbZkU4sD95SAMKDYEA5mGCKbKJdj2igB1PvR9sUgxPnPqWTwYjQ16p697b6wZwtZiT1NQN15ZYF",
  "key4": "4JsBUt44iXditkuUo9rJcucBtYarXEqi6hg19PobiVt5ozYMmnGnQouYFiTrGMrFvFALnctLm2WrWVPZNP69xHnt",
  "key5": "3672LLeuhXbbCLqNLpGtMxqTdQiFcb5TVu5n15qNFuE9qLoe8xUfCdpHGZour5BStbAez9DnRWKceWX8UtUtvFiZ",
  "key6": "3KLbgKoehZV26q9LGfUVvoYV58ivKSMdYsd9fJkDmR4N68jq5KqywWiLvYvtF6mEbotLfmw38LU8L6Tb5opnerPG",
  "key7": "3JSm93PuDkgf1nfa8GS8XWTLoWgUfcHYyHnAjpUbkK93X8d4grseCPYwcQdVzLRVxuvg8LdhTEuKyeeMWi2SPXdm",
  "key8": "2d9xG5UY4cNb1ZZPvSX88ni1TfBSAbVP7WZfSfF3iDYhc3bQijpN4TwHGpFqyQAVdZ29m3H75VgJ32fTXviyAa11",
  "key9": "5Z84jhiszaD2xajMiVtmRYZ374jS5orcxRi6v5fE1BNo7hujqxkmWxWc7vrxptnB3dW1rj7jcZhB5YdLeJkVSuGS",
  "key10": "4xyJpjvxETJjw7GUjk83Sdy9v62YGMcPjBFv1XAaRAkdhrJqEUiX8AdLh6i4R9PEpPUBCES6MQ8Lvk2hFbziab6",
  "key11": "2D1eqiwuqcTQwMNJhAi6uKVszLZ3GGTBfBtJibuT1sELDE4uk4vp8tpYdoWViD3so2WeRUbPWRPwrD26CZcXpp7U",
  "key12": "57gQEx5vZnwfeV97Y2sb4JCyXRHEuckiVnwErmrxo2t8D1NQsJLXeNcntpwWh6P4mwk9XhL4T2TTejjgabyViVzX",
  "key13": "54SbZ1hsA8QjP5FvJTHUK8HVVCkBNV7mMCY6Udpkr1UoCLDHm9teX5ZAcJLnZqMRsgSGpjwjZR9PTeKrgbaPGbX",
  "key14": "XWSaibpTQHzcjLVkH4917PdjgRRPmh4dye3Xify1nWxB3VU71WFgbCWP4vwVAsvCsuNoXoz9axuLuum6aXqPc49",
  "key15": "mipr1huD4ZWcemGxkkaptmxxtG9UG9yPQgzhMDtcHcsSZsNLLQ2VYncFHahdiAv9mVG1CL7sEywez1axaTH57YD",
  "key16": "4XEeGXBqVeP6cdxJFczEwtZxS2B41QBLpGhDyzRj71AFkQ4o1P1A75Lj14VWpFKEE1Gk9xWU5L5XEBx9NKWvX31N",
  "key17": "5WHRgVRbHrK6a7StrmDFdyFDutXGDxX1xUhX7ranfc6yLpxvjCHCs8o4t9MddwsAZzCk4q4yTWB8gUHsu2Lrjpnp",
  "key18": "2TjULqSaJzP1Kj6QqMsJg6tV5tvtgW2tcbS7EJTsZqeFocAQts3o3zfTs1XoxGXZvz6sYmF6QC6Di3pwgsstq61N",
  "key19": "438SYmky4tNNLWYtbuU2PRQW7oyLusjCxXdf4yjqmavVRgRPqWA5pfgrZKcDS7Ep7ESTDcXHyspstb7nW7cXh4ax",
  "key20": "3DQJCe3NwHRLpQv2HvcLqxL5XrD1sjEW26x2zrPtt4YBqq4EAyJMWqhmH3K3cthaKBMkXUkdstMxz1sQcVakPmih",
  "key21": "2CpcnnDMkgWEYeSDYQK7Umj6qkuXTdhidM88ZBwK1WwjqVi961rzuvXv3cLDxk3JkXdTnrMQRyHTMSHWNnKG9ZXt",
  "key22": "4rS9B7Mae8o69iQt3iM7VJ9LRg4pc99oGWK9ZSApzjQgabegRkG7kTv6MKV3US9x7yHqQyJZoWw8tAAJ7u48t9fZ",
  "key23": "2kxLt4UwmJ8vnaHTtEU3eS7kbaKRhcxMF94N6tcNHCWkMHvwiVxU9DhTGNtYcMUZ19Ma76TTp8JPxK3gtqm5C4py",
  "key24": "2bTYqtqVJvF42zAcxep8oR7cSoU5rLv6id7xkLSQjE6UxNreUmyz6w28SKVVigx1qswo5Q1D14djUrYGxwFzKHqQ",
  "key25": "5rHmUPDZWMZuoB8z7s8Kh7f2JN4w26owi3ZTG5dqEXLCEZy7QUDtbjHux1eteTgF45GFSgNLT8dEuGc4Fx65qNs2"
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
