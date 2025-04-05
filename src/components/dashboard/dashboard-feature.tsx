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
    "5oYpta5R8eppvF4bze8WjrFPbKbaeC1bsBmUwoYjLdMaq1zZruJ3Dv9ZQp3J77ittNgvV95mh8hkyJPc1TQgVPbG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5575RiGDgeqXGZV6TTqHbY3Bixr3Zjxx9w2gLx9E7MxDsXaZzeEo4KkNumeNJeGmX8pe1vGmxxjHnokmhjWRPTRA",
  "key1": "2uMMt2mtmHVT41JcPu4cYL57xniiMji888pR6cMND2JdUoPCJKrekE1nT62BJ4kxuwzN5HjAFK1o2CquegJ5bzgi",
  "key2": "2cWTmxCoVmMS3jWwaE1dcC2qGYvxt2VADBkVWf4g4xmsRU1CZWkkiPACgijks6GnZkFr3iXR2N7fLzWVXnj2EQxj",
  "key3": "2vaXFiLty7nwyYecbRtCCVybZwHzmyk3FZzcraUKR8PPPceGSUAQyD7fUz1eeEhJcLtarEFTo8Bz4go8ssGGkCym",
  "key4": "2HiJmb8NCBC3qTc2imrZG59uhFiUCKWfhBpvxQ599bdEpngtcvS1VXwSJY4eMTDaG2MxLsxXcPPZxaeYFk2t4Qm3",
  "key5": "3WSMcMJKraUQySMeNznvDxvPnxLuFWSA84HitECvwVSdWPu4MKapAa7b4dvJukWvU2xwYQ5Qurq3eQ9JAoSMuviZ",
  "key6": "59NjHZRrNi3qGbZRBUQNuq4YtbPgunbuF81MEg1erjHykkQn4waZFYbsGEtMwpkpa6urCET6ujqQNb46YRWbvhFn",
  "key7": "kGSGmT8kKUL57A27NaRJqRghkYZUmMCaXGVbQUjGSXLjBpfX9CTeY93R7i81aC6H53vhxozUYxEEN2nQmyBVbgR",
  "key8": "4eCdHmywMJ7yvp5U4i1EefLNCiYLiXaAWH6QyDXzFFontPn9UF4QuLNvTs7xHV3cPPESMns8Bdsx76PnjJrPAuW2",
  "key9": "9USgrDSf62HapRMzT2PJtiv8qgTNWpkR3wUdRVxi2zKsUeBehukC6jtNjtGpbgzVQuMJD2BxYtYEs1ECQr9sS9r",
  "key10": "2maMHdtQieEHYxK9amNHhftGh1ZBjjmbWjPpaVbf3JEx8Gd5bnisF971r3dPjsvCFreEStkx5Ecf9cuxxmvicTow",
  "key11": "3xUkQvxQEgZMrxLPLmGVHSfFkCfwzUEg5DhuBT7gX24ro5ynN3Y9g1YyjtTAQKimPvtsefwbZCQidm7r2CfeazAH",
  "key12": "Ua9rohcsnjSwPD3fdqNpLfE2yxS9iJZUm4LTPtPgJABhPghsUdAfLDfWX4FPL3fqA7JCTiNe7ikVTmWNxvm3Yvx",
  "key13": "2qPr9SCvxUGNqcGGHLYR4mvzHiQ6yeRd8B3DC78tuYNL7t1ncURhhQd4hy3wcvhapguFK5EJAZKBHGbUTdeoiedL",
  "key14": "5fzLEk7o17H3sTPEbuJcgeVNSLaiMREpHxGXH79Vszo7Uw7J9fQRLrEANt86cPBvDuDWMdhgJ5C5Csgdq89co9Yx",
  "key15": "4etrSy76eNX5t7itnVkfGfPvMqMTduKF9EknK6miWDDmBSeNda6qRxtqdbbreaVnucHvSg3vVFfNExHK9Tt7WDUL",
  "key16": "4Z3eHEFtiKD5wLw59CbSXVJE1MPmbGxBhxtRmon2J4yh5F4qE53QWzDVA7Wm8CXk43HFJYU646emrv5an5EKJnUk",
  "key17": "25USFMjv3tXNc1oCosbGj5SMNzSjSmHLg5bfmoT9TZtb32HvCErHBb691QuLsGjP5rzSi5sm4vyD5DWcnUN893y1",
  "key18": "4mJUJrzciK5ZFjLUytYjErG2cyJvhcpDRzfFs9z924V1ppmuv3WvohyFq2rs753Jc74SrNEBkzuKSgmA8NVRwPBB",
  "key19": "3nSTUHAy88Yr347Mi1n1Z7Fk11gtgM8TKw7uXY4F4J4F9MshHykDKmDR2iAefSypPZZqkWBPTTvsh7bv6gJZ4nmj",
  "key20": "3AHCu1neK7RXiqBcC1x5oWE22nVDc19YNdYyAoZze3QAGFnqQgHa9N6kK84pKHz6Bt1ZmR572Uax7uNXmWNXWkw1",
  "key21": "5XJ4nd88BnHUgGcR1vbddiinio4zytr6WpxR2r47aPQZvui5DbtyiEWFTjhKpJ7YA6qvwopYSc8DYzCmqC3wLNQn",
  "key22": "4DTr9wc6sTphU7ykuv6SNjLcEp4DNCB1EZPmTM7DMTUmBpnaZBHgKatmxENBRNmQsRAqqfZTMFMkR16dawSAaa7",
  "key23": "f5FMMRfjA75vkNegaXL34FNeg537SGeFjbeJvtxtXSXJLE61xgc5yzMQYJgc3PZnuY1bHvLEeBAR8XcZMisD8TR",
  "key24": "3j39CDpH62U1dyRkGPK1S4zGWzFiSZcd6zaaoTg1BFSXvGUxqEmuAqJWhepWCxpoXbSgJPDe8oXhriCmWVHEiGxv"
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
