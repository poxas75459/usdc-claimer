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
    "2ZMzYrBFe65yKFSq21jQwEsikxGUY76nbfxFMA6R7irFVR2vw5HaM6v3FCDNjGQyYzmxxzUVmBV5HpAt8b8Uhbr7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SmGGy9UV6PASwYXkPcEQuF3TaxATmma1Y3cxJMQRAKAHHQKSkukytHF2iFEvzGUXm7y7DKB1Veza7WcPuUWVyrg",
  "key1": "2wfsWoiSq41zX7mYnuKwjRausRjMQeU6NRL1wA4WJWUAf4TTzqBZktpGvYXAhfkNavRnjrYVmj5UiyGewgrprm6s",
  "key2": "4yV6qSeAmtSAz1WQU3BT8WWnp5a8L4BrppAcPqUaGGyPsaWeDqUpPZtD34yeSkJ3bLhTjPqS2y39LLiyu7SAvY2W",
  "key3": "3p4vx2RHariTT5tc8rJSiWm1VxC1idZCYXRKkqRV2dRp29DrX5YwJEBjyYik3QEaM2jEwftxLEKRBVhpy6sAAVHJ",
  "key4": "4onrFTqavKruStZr2TASFcdZhWmm9ccUqkkN2JHkWUC9swXtZcwma4ysbt9pgLboQmG4763zFmJAeYaNXUmur9dD",
  "key5": "gkKcHH9YQMtRsiyxh7grR313aAzfWthLF6t4rAeseBWgxZcJevL6WPNpr4188sNwKBcyZjWjz6CxkF6yMd2gb77",
  "key6": "64pVTze3iXrHVb82zqXAPJMFAiEeTShkxjQdnB2wmDJHR2BnoMS1wuYcGx6xGEwEBegAgcwMU8BgvAN2NDVkFKDa",
  "key7": "3XKnzNxx5Wdumn5RXGk9V2uw92DvvDX472UBrFxyRLeddvk1TkbipL9sgbpwvdGD9nLSWZSsexwdpyaL6feAjmr",
  "key8": "Acwnrska7ywEyuRFS1ikvUCgRbPCkA1QDQsWyKu4JK8ismgHshJ78GR527h4YLFdWXRxxyr1ianZsYjpMHQQJby",
  "key9": "2txY7To2eGU1vPRgPPvxjrKTqY2hft2614oNKWr23hsY5xkdNLF7ZH2BfcrtNoPiEAuP3pZ7BxJFvcc5CBA1S4pz",
  "key10": "WibUuU7ZHh2ZwpXTSnmoaAvik2nmtFfV5Nwj8dabPWKLwuSwE3zvo2QcesbzWwQN7iM3MHoFhK2fN5WiWgRdyno",
  "key11": "42kSwbkgZSHGzhuSosQynCPynBPTYTGm5BHtHCQbNc8eoBQbqnVXY6nZLKY8mEYoU5PS53vPLvYhxky4rDucPCFo",
  "key12": "2ptgeY363Zr6qFmEZuAnpuZMy22Q5Bzq6c5u7KDhmeWW46Jja6fLYViwoq9VmA4yjyuH591LtfFxcq16h3Y1xCXt",
  "key13": "42eWmqFKhWQdWQWsEscfrfA4xE7Y7Qhss1q8ZBabhSJyjJ6uUtqK27qFFMg4Ni6druPbFYpywjhxtSpQdi9TH9dr",
  "key14": "4EWya6nCXLHyEzPeGknsrjN9qCWwidN9ScRQLSLbc4Nb4CdcGXtW3L1DLsKnhH7j2cypLcYnyVHCzLmLnLwsUb2j",
  "key15": "rau1uFv7JCxkSkY51tYnvTYt8sVvG9mjR14rshFsa7jcudyNwBvkeGFCajcWva3XLWPGcuR4FxYgYLGh8YkZda1",
  "key16": "4RcBVrtz7U69QGDMmhuosUUP2X72SQVKpsJUYnFxDcxhUgFttJMmWAMy1H8cSG526qET65MojZ7U2faeZ9MFy7BD",
  "key17": "3R94RBvk18CtfXGyuZkfFKb41PX7WyVHdfCnV4kVjtGhX6vBDhcQRjChDcW1Q4fdYHzgMy5gQhFcoKHgGqGxcTcP",
  "key18": "3WSpeAnmh2mid3J9K1wTsTYjVo8GLjRA2BkNhqSFLXpGT9hMNWXdCo35NSRmgUFnyaHSiAusQZXBRt7GDrg2HEX",
  "key19": "5zUv5n2cqNYcUgfoGqe1X51tJ9dyGaiuc2yCNU9kdswcbYFAS999rNxMM4Dw4HDe7Sj7m8LXuvUfWLfgkKqfiUwH",
  "key20": "4PUpGnZDQcq8XeoRusboy5NujFw5AazjYqRi85GbQBwoPQrjme9rfpyXVV9JBEr8Sbzvyb7iQiEvt66YNQuyrbne",
  "key21": "2WCtzfs5mpqH8QdptMuPuLiNkVdePE65JwKFXitjhXD1JjDJpK86gCPZQ5y9izyno2i8F99g1REwvmSm6RBhkKaL",
  "key22": "55BBgR6prBPYTR8gos8RZwsy9FLFNHR6b4ffPNkjGV6PrgphbZdwTK4PbSr52PdB8b2yoeZuABJsHGZVwz9mgajG",
  "key23": "wmqP4qe4XygmMEDQi1FuimQ3fjz3zECTpKgR8raDJ8Nd7efCEiLNxnpV5btSqrfwx8HkY9D7LSA45W7VmnLbYYZ",
  "key24": "2vHre7xr6Kek2CfbUhvi6EXgxU1sjGeUndxPXB1LRHt6ui2UA35Hb7Tnwdtfo8ehrBCHkWXpg95B57srCYLPzC8c",
  "key25": "2DF3JoiD3HkvSDe38rmHhoEoiVYqGoiKyjpKH4hp6qGv3TdViH9izgmMmSdftcrdGzPMApk1J6FnCGTRwPoeuGFA",
  "key26": "5jBHTJUhnUzYmWFeVhJrGSwHpuT2i4DFiWPZCws3ane2YH5yPZ5XwuuYLqSyPAELMe8hopMWgSzKbPgANB4mv4Ym",
  "key27": "PYWKjafgxPiSwCJVzVhyNBnNS6gBodB4xq4rgE6VpZhtSwsZRdm6NhjPvJLmJbKR69uHooyHRdAbY8weyLJYX36"
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
