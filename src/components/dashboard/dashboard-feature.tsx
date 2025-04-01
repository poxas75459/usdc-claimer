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
    "2o4kf65aa5tqCZ7i1yXVYcCYqEh2EEeoLp8uDFAdTNm6Kqn5AFNFcHWZmMMjKvVRRR2iFy7XqKfwmRFKRzXxSyLU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mTsWmnyiz1XBqdS4t9aVy4JBD2KryLdAt6x5WHxahDM4vFLoU5djT7rrAtL7XJkFGp8ifTYdzsapB3KkTpDpJ5W",
  "key1": "ziVGV1kqmXHtgjBZ17L5wifnQbwLo8ePAAiYkjMpD4XZE4xYbxVNkfig1s2BhTwNevQseaZDHZAMHcTKqePy1Cp",
  "key2": "2KHsJWyUURis96yiDAppL7ZQJhrnG3o3dkLeUqYivjviM3noziUE25PHAXvVFrGsqDozW8EU9CTCZtMNGSmuEi4H",
  "key3": "3QCCLgFG44rCbcWieNRxSRpNrb2J1HzFULMphbpUVBSaveL5r3AsuGLcUfZSpsFXSVXhGFdGm6w1Vtp8jGzTvV1Y",
  "key4": "5pTZ3wYRX9bTJBaacyFcUi4Ax3XbqiMtnzc6abfF1oKCHZ3c6iqQqZzihZRNxtuUuyWfsUMuCxGTB5VLtfv5f7rS",
  "key5": "3QkG2tTzkMhsfoSbdSPhJ49rWQFwbDh1DEmJswJ6aQmjH7E5VMd767yffnrGdtUq9szRhKAASpV2xtRaKwVUQbby",
  "key6": "JjpMwDzDUrHfVE5VPvp5KkLUkhnPTeSp819zLA93zWJXXaM5v38LtrMBDyrd1oFc4Pa4Gj4N8G8EygL81a3gezL",
  "key7": "3PvwHGJByqNUEunDadtSQZzYEidERZ5AcVmbnxWWQDUgQ18bZ95sfuqtmxgPv3aJbYHa1nYQGRYoiYHwnWNunXmn",
  "key8": "3Xo77HN8ftoiqaP4e1ayhST7FnFEbeyhSYbWHvFJyo69hoJ1odYP2U9ZbW4vTMmg94gc2x4x8dDbybgZ5qFEkndR",
  "key9": "5nfzNG5wpY4fwGGmR152g9oDewXWxx4K7i3wK2FeKN3Jbig33xfRc5nZNwodKhBmtkpxS192B1ttmbSRviNkfJdc",
  "key10": "Fsx1emFqFo6ycjDpSmJyhds5b8aaBbTCocc6x3axzrzZt9Xa11FzCkTT3L7UgemDvrWZN7td8ZubKrdTRdjUuQJ",
  "key11": "5MaYvmWCYdWvzdJAGzFRbf8X653BzA3butsu6QxwB1jzRKKzdrxFY3eMenT59tuc7pbVK9EJ4ZthJdXzRxxoGRi6",
  "key12": "3HWdciv8aUuSv8KngXfdQNQQYu5ZCNpVCZv5tsb6Gx2HtyjWHGBeFZNCQpJQmkMBVpNuuws2vZPCk3WxwkcFiiPw",
  "key13": "4z3yBWSBJVRqVeEY2zcutcJbaB5S5NCteqQtkrMsnYshvXrWg5JuGDyauPYTiPhrXvvpmDG7yB4ukiPvHCTsni7s",
  "key14": "31Y1BUGn1C68bJuVc2WWmZxarYoANbcKYD8EyR6jLFAFG2L6xQiUYJ6NeTeF8s2yTs3wDagt9ZbLJAhc7xSZE3ox",
  "key15": "3dj9hdoxwHG66CwS2Y5iVmwaLrGDQq884VJRkp2JLV4CGHWSZ23JSurWpjVCy227RHKSB1EYxfoiKeKsk9Bj7hQU",
  "key16": "3R3RtWEX5QPyxRs1BP9mTydgF3CKoZ9KNHaUmeFczR8fQEoRdu2YhSjR9Vxpwsh2gtfY455abL7aECpidY6x7QYC",
  "key17": "4ADZak5uqw2BHyMPLnYn2rCE3Ea7bVRAgL8TGV23HiXMqUSTz4vredYKzS5Vm7UTuZW8QPY89qZAJewh2rtrrHM4",
  "key18": "3LNtpgSHz4fGQC5M7tpqiJ4nQv65z7hZMGPmMnfB5Kt5L5nwNXQgJN5BDHUA3NWac3sWAyd5t3zFSNso39HBGUEc",
  "key19": "25sZ1wMLk2MmihkcPN5wdr7HHnxzfniaqHsHHrqfFbSaztgqyZtp2izeLYFZB2WmzDDEnKA9froJh5G9ZnveHViq",
  "key20": "5M8FfphCnGDWq3MXNHK98JvwerKN7cyHYbhnMtTpV1ZCKUW9JUaYwtTvU7ovQnGnyCijwKkCobPi1f8DB7rFXGZx",
  "key21": "3bG3Dr7UPzjpKvadCtLQgH7m2BUKFHn9RHNK62t1LGQR6uYorrQeBURDjEnb5bvxtLExMr5Wnx1fAaRjQk4kqtWi",
  "key22": "3Cx6AfaWAPDZtideSwTrovbtrYbFGxwpVBQwEmZp9SMCX2VMgQPMDCAbeKJ6tgEBV8qAtpkt3mAUkTBwkQ39L76S",
  "key23": "4xkAMoQxi4Xk6hQmHs1iK7nbYzyhgED8spTZGE8nennxnHkpoPNu4VGVR2CMJZkcBHJ8MDUvNFudhzi1Ga3qtsVd",
  "key24": "66ZjUNpZNa6LcdaPMFASHi76mxsAj9EWwgBhv73ZR1hgPWA6ojcPsMjzvrzHcdy1Yw2QkijZLgZTsDx7bHj5titu",
  "key25": "D6Ve6MtHkcazDVCfRCVUVVHpMevnjcDJS6Xwn9HH4kfSvPfUwpsNJHWqwmLHkFrqAJXXDBaVYQLSE9n5yzwNmxP",
  "key26": "5JkwQFjgD4PczPLMBjtuGSBzBeS6UQs4pdD7DqdnqYf8rY6nq5iGoS5cmKNHUtAmbzr6ahosjLcM1SPfvuDQMg9U",
  "key27": "4CCqgX2BpeFvzyKPN3xtJhyojN3XV8848iNXn7t4rpFfJLrPvs9WQpZeyYFTNZE8bSD8uiz6RJw1JgWuPWhnkaC3",
  "key28": "61mbLQmJAAbiMNidpdkV77v5jYmu3nGGRBHce9QS8iNvq5T6TWFgy5vcbz2ba8SoV48yd3hB87WvFvQ4mC48K2QT",
  "key29": "4M36BLNvZGvuU7jsw4zfggeFHFPWXxdVJNfFgVqq11bp68PbSkZ46g85DNieixGHzwMtCgNWUpgUNJWVhArLZDpA",
  "key30": "Rf7Je6qAqw7DrspN1X3PjoNv1e4bMAm3kLHQNSnUp1M2iFH9R3dScvxbUEAoobx8ZsqSGoZY1mUucZkNgZJFpKY",
  "key31": "4B7djH159D3ehbufcxAUkiJq5ja4TJdgeTQ3KeVw4g1Esd8k5UQMVstKHSxvET3qt9RQuSsg2ACNGyuFa8uY6mJY"
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
