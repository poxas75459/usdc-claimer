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
    "4g5J1YU17q8jtHsan836cfpcutm3xDbLhik2wLGgMkiGKez4Rga2u44XrWgYBF9fZekA4GKSbF22GTqkK9EjNHfA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LDu9bu6vV1Qz6WQNc61wiNg7aJBWyfnvr4YYCPsiqJbAwqWYh6U6HBQsrHqgiaVkZRuDp8JwptndMZvHVwkZ17z",
  "key1": "uAdxvYW6UsQsmvakDAyHyxfMcEepyTe73c99QSpDwgK1YACtvsBRp9jux8oTauyGyeLtPhJq2UnvapHC2Tb4B9Z",
  "key2": "2eviafzud8UwcQaTsK8NBsB696Wnju5oQBuEkG6mpiwter4RL9G4yPSrgpWjhxkBAwXfx2c3Y69CpKwZu7Rj71BK",
  "key3": "3kadYE9cvjGuDcesUq5118phjfCijCC9kuWZexjYFSvNwFa1zZc6Ku2fqV9MN7VDvDPbzv4Kfuy2sPnqthT8Ny43",
  "key4": "4mMnNHHYrgmMHoKByUB2GimfmiY5epNpLr1iUBS5Hx9XzRzFw6zTQdTTAcapvJ9szEXKcFL1A7jiV12t5K6biAbG",
  "key5": "fDvbAZnug2StPcV1o2As215ZnqjRSbJkfy9Qs86SCFijgkry3pxkkMxFDDeWUHbvZQ3ibm8jwfrAXvFVhtkRoWP",
  "key6": "5U7fxjCit2j1pnE2Nf6GvpxPjQpeRDEeasqe6gupsqg7ofpXLYnMbPD8V28jDBvq1i3fmKopypmkGpwAZPcGrMtB",
  "key7": "5T3UFzb2ALS7xdADG3S7pcZkqACgHbxi1s4wyuXXU8kFZcSu4FcPNbWUttP7L4oD8uXLoXCi95ztMQeQFaGccVta",
  "key8": "2ZQec6Mpgs6TzuB5AQYLhhsbMWfpt9YjZrXpyY3kXWPrVB5GSrUeqkjmnW1P6gA2cvTDDZVnBiRm94Y3MGi7GkWD",
  "key9": "3cK8Abur4tZ5ydXmvKon7jyq3ANDUvTsSDsFG5RpVgMgaCr5PpFwHw5LgYNkzx39VcXe8WNmhpGVX7qNCe6FYvRC",
  "key10": "5JccnwZScJiFMnXjtETtD956Jwo7MUc2vTFZgQL4P34sKDkCTpmZDUQ38HwcGUptX7eSnyoe9yFpvgd1d2gSeNNN",
  "key11": "4gj2ikMg1sdnyq8qKHX5qFvAKwkeMyitjmsqmaEXmpvyJwqTq5e62f675XSVXMVXNYZLagrYHsj37hKx8eMnvVEj",
  "key12": "3dAsLYWWVDMxeDxPv5H8C1ZJzbqWQUrZsjoRgZ9ku6TzCjVavTAB7mwbUC4VU7WVbASueBZgdPwy7nbHwyWryFf4",
  "key13": "3EWxDttVt1qpbPkYG8FGjchCYeJ93cAqhuqRJoFPkoD2siJgY8mG3i457Fo6AKKG6y1ZRieNjTgcvuS6ZssMLkgX",
  "key14": "4dkVEJZ57co89CGyek5xDgLDfEsUut8SDU9Re9D47TJADVAwLT2CAci7vCs5P7VnSCR8CJHtPLzNnk3qxfuUJq8M",
  "key15": "zVF8JLY9v274XeuESUbJUhMUaXwJyneRK6wCoQbXwDdN5KbGoXxBymSNMUghuK4ZXdKXnnt5jai9VpR6tzz2YM5",
  "key16": "5SWvm1CVGZF33E6rjoWVxqcUZ1dSNqJzHEPwjRrJnZfBeqKXmSHxDEFR347Zc7pBzhKmExxnSpSinSXhCGbtWojf",
  "key17": "2MgPBSg41bdYTyyFUHh3nX6qJEnZRbyfkbf6ytGvCj862iz8dErRbQegK5KDprYtimGnUWwN1AuC8RmFrAVPEozt",
  "key18": "vwTeYCz2f6dsX8CaGs9m5uvexf3FmJAJ9vMBgnLKEs2gxeJV8uCnKuSSBdgZqWtE6akwJdZugLHPEbgyh8BdWSU",
  "key19": "4v5bjbLjfqpLVNAcsuiF8omvKArzDdkgTCSBGax8SJCwwXQbqQav8vfdGiqGktpWB6b737sxJ91x7iNwFDzwmEq7",
  "key20": "64hyiE7X8S913Nq7wx8a666TRuXzgdCUKmn7zKdxkfLaG84fLH6ttRuXSHXTNpzNdosUA9TEVQocojccZTUcfH4Q",
  "key21": "AMDdQK5dJ5HQcQsDKu6iKNMMegpKj3fLkYbeV8p5D8TkmYDW378eM1RdAzJpxDwXzMXBzgGQco79WU6jaH7kbLz",
  "key22": "2ycxosbNT4raxsJrBscyBSZaAzERZ1Gz7aw7bsHCDFWXEAs1iPLVKRW37vcurNdchTB4WmWTyjndfgqcTVjojMbV",
  "key23": "ZCN9Wkz3KhwAoyRTzJbjVYdgSS585rLCHZkQPbNgemMEnWPMbqtxKMdVfBq5m96wjWsLCb8vm2KcDZ7b8VYQ25S",
  "key24": "4oN4j1d8Sw2NjuRAzRLxX3WUsDMEHDURgDd4yQrX1ejMtXwvddCgzFiCk9LdJsw4udGWpETgfvjxZvmcSob7qX7L",
  "key25": "4bmAvD2b5VWPQJxvCFvsF5jZfNAaAntLwxp1kZnjtg3fqvPkqwvQEwGvHhMG6mhkCi4D7ufySjHFcF5e5GCGmCYK"
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
