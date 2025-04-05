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
    "4mpCJEgqu9X9izDw32VSMqMFq9eabBohahnDz4U1aaV7VpXxuVGKcfei4yK2KC6uCZKvkuywSLmsP5LopGgqr6DY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Qq8QzsxbbWs8qLPzwe3En4nizNQEYWqMT5Qjd2rBEo9pitEB6x1cpN7UxhNgLLFHCKsHHiPneHrw8TDxNps29c8",
  "key1": "2jsGUkV9kJvE79QeZeu1A8RTWbyUvTXVREubMSW92oMyHafXcHmtVFG7Tqv13FvyRNxikJkUM7UMMS2HRC9M4o1D",
  "key2": "1iEq3ZRYKLmVU1HqMncUURTvsvPQJ9MtZvr3dsEcbVLGB262S8oURujRtPJgkEkWfdtBXikRVKpcV9Y4hgsdkPp",
  "key3": "4kkooFtcsMNA4nf3FCewNwtjSsK7JmWZa9T9KBFMB9DpyuLJ8BEJeZqh3FCrUYQCwJUgNjdY37ZG9qA7qPYrsUp",
  "key4": "2ZqZN6NnuX3k2TadWqEugSej4hSqtscYhYaL7FgcNTW1XZQ96Y8WRCoWMURpc8DKSW629WmQpDnfjYnufbFvt9mK",
  "key5": "R9ztCkjBXHBKcNUFik5RTJtoBqwfbACnZZrcgH6wtVTrbBQXwcKhxAHjsLp6wLXcTthJ2nVkyp8onoYq9Va8LQN",
  "key6": "5gArGywneDeYWqAxM1EB6iraLJdjY4mnJJYmMuUw3ovXK8mngpqxtbFw8te9gCoXmgXjj638D61pBaqvEbtQzGV4",
  "key7": "5YdqszJGwNMUMJut6AVzqBtSr8cy7qNcXDetfrYcvic12dsXafFBSTVJRs1FFwhxh2TftfQn7FGjSub3xeq2hrau",
  "key8": "64n7prGhYKotJeptrP7F5njxCXMau4UAuJfhwrhBNXhnYZM3d5GyJvtnJfBbc5nSBMy64UhpRqDeFNzF7F5f2KB2",
  "key9": "5HpdvTpPMv1TGr9aGGWaDVEpFDwvyVfiYUfkNEzVtXbQR4HJ2UWjfZyNBMawvoAwQ2HsoHe2U7FsbHcV4M4Dwsdh",
  "key10": "RhCRhcUgPzx5kngGou6Tr8Rn2YHdPDvoNSZWcjUxcwdPVrTw4apXZYZFnmwhS9m82aRSPSENDSLTRTzJ2gF67Qy",
  "key11": "2KFNhwJXf9hLPzvmwiNfP6veujREwfaaUwrw1LH18scjCeNYbG16qBGNdnzfoDM1K6bfZKVpfFdePM3zhMAdKEhq",
  "key12": "2ueioos2J4ynigLm4ZviGwagQ1ecjKXwigKbfHKoLhhnASidUcMq7weshgRZu8bFRFKYXrv7QCMFoAQBcehhTc9s",
  "key13": "2cG9VnKCXYdSs3y2xU14L5fhcmnu1fWQvGjUiHhEAoZvmLMNiPxn2tsseWvdoQybyWhpN5ohVGaMScTG3uhVZN98",
  "key14": "3x8ZNLmF8mQg7tDcEP68KAS76tpSWWCVNQquhPHNijyEDwdaLuzbuX7Bu1mfCbtStaG69MeQmEfjxh5jQFiDqhkb",
  "key15": "5QZ4SMYwaqUTzwrjRGyqCTUifLo1Ljk6aNrKFPAj4K2j4AAKgMkiBp5QMdTNjZRc3TAfUc9br9i9Pq4hFZPJtKi9",
  "key16": "5RMbtTt6SrShKMCSgFYkHiRJLK4yhyoLSHxJz3jAoEzMtUPU9Z1M3svv7WjKU1yrwyxTRuZcd4mXmFT78T7qSRe6",
  "key17": "5LzMewW4Y2wi9to7XtkE2iHq77r5qBpLjiJ8d2652n6fZmy9v3AWCkWMMkMr1MLXbcqUciXQuLnQBUDRjtESJWwF",
  "key18": "apmt76dGa9hVgzE9AYYfMoR1egSDaDL7turib5kfeSSuyvrRCVpwesD9PiEt6SzGWUdqoA3aiXhM1KbndGmjiu4",
  "key19": "2nzGSSz1qTfYWAxT1mcd6VES9BdN2TT6HhqzJ6cFCv4dLz3ypSTtGKgnSUrmvZGp8Cb2GmfJdaeRe9SVE4oKf1Mo",
  "key20": "49kTd4Q2XzGgqrphNEPrZRzJEJ2aotd9mXLrzfP3uyFh4aA5DkTLuEHrF6VnGCanfRwG2szaCkfLMwJEcnWWSDzk",
  "key21": "2QgRZHaMqaV9KkmH6YkCGcQR7B4RqgYBFBHnHerKatGjxCq3khdx53ctiSVSBJnQW3T3cb51x472ncR4hfCc3YxQ",
  "key22": "65YUGTxR9oWnuwMDptXQXLCf668tYBjNxAUFHcQPG5TJP6a7GoJbw5W2sdRo9QcYhf8JHEryg4cMRLUkyZ9KvDNz",
  "key23": "2ZKsKc8JDrhgvL97hAJHqghGdkb7DzwquXmFvXd1kWX4ZfdyTamNdsBM4RwBDgFUfFqNYsUukqkL1jodRvSz2nrD",
  "key24": "3FFbiiDUqaHny16Sj3jBtrBeGHj8YEmD6WF7N2FxKMC6Neqj9DNtDTYqwpjK1arQns2sgJits1HCi4vgsz6PMoa3",
  "key25": "2zFZ9NgP1QHy3wenXT5PMkb9YsBgDoNRAHTguHHjoNzUKW6KRoitqtSPhQZMFkzYyHKBEgYzT2P5QvR2j9yd76jS",
  "key26": "2BSpHdQG5eqbp1Qph32PNe8VrtqKYJVrvGhKxMGmsJ3RDo213wfXpgbJxeB6A2GVbe1HmrYsLUBR9REvPhBi7H16",
  "key27": "kEKRXjSrv4teFBVBkXLuvdn7HzYhAYwTL8W3cHPj7Zd7e8P7kanu3ENKjwJrCDb62YJxNyuGpcbUsvGZNbC7zDR",
  "key28": "2dCFwqXBanRhjfM26Tr6Kx54oJu7u5TngY7aHU59aRasstj4gXMRySL2YYjUATSudBd2hLpEZgq7BYZhLnnFAsMv",
  "key29": "5vDMKQrRWW4cNeGxC87d2E2Sf7VHs3K9rRRxiYN3ASCB9zr1Cz88NByyksLRM3bvdjwZUMA28NQPXFpfxr6mLJvY",
  "key30": "5z51kS6Q9rRVrZA53sucivofZ54dnx15irgkJAT5pmW3jW8oecvvowpEKk6e5hVgLsZCQsDLioQpoJCftHPC8v6w",
  "key31": "56ogBXvLygo66QSQsMXP6Vam2pky8c2pCFnnoig42WZ8JVTguWd1zdCe7xS7aw2CVtiVpoJhFGzFSM4cdBwBzLZK",
  "key32": "JZyBW4o5HBzSabqnCkyeHvm1ZdGb8KP36aXhMN7bnhaJFWWb15dEqxc6PDsrXCHv1iVBEwoG5QPaM1P2VGKR4vp",
  "key33": "3Ja5rdabBvUPbTdDFVu74pYxFSTNR9d1UTk77JqvL9TiDcxCmqFhUzzdZWeSorChAp1q4LLk1tjnzzhDStU5VB6E",
  "key34": "4SSC9dRV1Tr5TiVqcrsPBotb9W4NVkJ6gQP5YbfLSNgXVVAceMpsJeVWQ2PUiowJsZp4DdNxNfppQk7BPd2SHJ1"
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
