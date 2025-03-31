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
    "2cbjFCzoxXdyuDWR8RVrMzAdhPSAYY1oM12NgMngEGqCEa9ah5H65vHZa4bM7fWnKTfLye4ET8H8DaAsS8YnqygD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cy6pBTqSpETmSbU69g7P5TCUjpmJCvAHSvMYoSiRDCNFetXWovHRBme8YiFitAuc1CHyq4FMdiLqfx3Up4rrvV8",
  "key1": "3of5Ho9J6j3ea4KjKs5nT8GYU9xSBn45vAvGQvDBRp6VnD9Zur1wYSmJdmgAL7jQ7WWycxVnMQGLwNCjYJ6GPHrj",
  "key2": "2WYzabWZVe5Z9Sc8T7hT2hLsCD78k5tuUSTQ26U5g28wCJxkypCgqTa4DbJCqqEDK1kgjvgSVrinSm6STdQfyZzu",
  "key3": "4ELfKtSQNxr1fFGoH7ib8JvGKmLHaEnsq7gBxaCH5oy2DaDqah5a127Kqo8RuSPLBpjhhFEhYxnC28gYKBWQ5583",
  "key4": "23BUXxoauXoSY1LBhZVyRVy7ty92gSRW8nwyEHYKSgrmXoUKzGjHPAwCz4u72QVMUUa2nCCqge5YMjVhGEntnpq5",
  "key5": "5AoUz7FYxLmwTGpmyhG62pc13GtgUGKeVSmjFrimHb8apcPLvvkJgBVC1NuvTwVbawUSUF6vj4M4RVGg4JbzPSJT",
  "key6": "2Movou56mQ78Sny437wsDJrRfpw182f6gv6EbGtZBLjQwdGd8di7rv9BYHw37TxybYnEvVGhEHVMN2yvnAELFaQP",
  "key7": "4Wo8xfqZrFp3HzR1XbT8jHk1mMmgNQF97VfKcfeLUHTic44wYEospYW1Lh9MbqRdSBqnsseEPU4aPD8o6M52MJbX",
  "key8": "25EqWNYPXkhWsoddeeDCMvQWNvg7rJnw1cmdzw5nPzhnJ2fwaFTwP8U49cbdQbsdxq7tVB3JUBEuUTArvTt7DMgw",
  "key9": "q3cGkNaRgqfzeKo2S1NZ4PkG7bfiEfQ694yiAGsePN7TmCN5niFEw7erc3kYiA8Qvk4rcnrRMFSnHRdhtfzcSAs",
  "key10": "4BBeXTVv7PzreD7YBAsf4uH8gS2jQpacDuz3HKK5Dd8P4rzJpv6svpYvfPoD99v3GXtQZFGZgzyaca4DWSx95crf",
  "key11": "2m8akcYVYVZwdz2jPaTtG2rhK91nPtbYVEY7WPHQPsa4L3SQDSb3Np5YbR4rEgam1Re8m4sQLrmfmZ1MbfEmZP1G",
  "key12": "BAG8m2M485GtyqfYwK3MKR6RkJfJdo6FSFKmRrPMJtHeUdQD5fjRMwuKok4eBLEnf6x7Tnnw29x8J9iKBAreaBV",
  "key13": "5UZhoNmnZke3z73Bs4UEvLKMSJ9izwowBhZxZHtN5cLiwCBUsBq7YB8dh5T2hSbF5HuacKnmB5rHZ82Uo1ii81oi",
  "key14": "fgAZ6zAoztbUSiJa9s63aVZNjadRfCJbuhm2k5WD2JbamDWm27vjQ3EEQkrRKEnJo9DSvtcW9CagNU62dDRbXAL",
  "key15": "SafQmTnNpcMnFPQVdw7zghdDivtti7FUSLekqDnymLUfeF9FejHfxijHjKzaMZXXacmpQSehiqRz4z7hqH7BqMD",
  "key16": "64ozMe9TV64WCr926ABe9p82JC6Dfj3JFsdyJ7JKHv49X4i9DDFxBz62FZwdo33mRsDbJPukPqJLT8otjr7m3Ct9",
  "key17": "34TWjB2E51Zj5g3KaL7r3gZD2b4Y8HbMBD2kkQUfisx72HK2xqsmS51WuHJmSWzrTjXQJu5KkJ1DQMS6A8ZFwuK5",
  "key18": "3YWugortB6ZjQgVP8Mueu51dbeBZsFG8MNQGKXhFU1xFaz6PhyPTtvk7VH7v5SMPxw9AZsDZLVuLq4a44LEXKHvD",
  "key19": "2jiyTtz85Prz1M9fQE4jA9FiXMAvE3sKhxDEXHDinBR8fwYJR3EYuDWhJvQoHDoRWpyAk2gTRPDCvsai2Qq373fs",
  "key20": "3eKm7grenca7CFVSkrSpMvWYtEgWRdTyetQoZSzQ1vdeaEEcLMC6jsDMRMmKXR7eeYTBFYt1tK1PCG8F5BUdGdmi",
  "key21": "1fYUdfPdKLWSVjnMS59KuUKMnzKb6HXxCxngojizHiScMUiq7QZycgaeXyfbtEkHVrHJ48zPCh5UwH9KnpJpQdw",
  "key22": "4v58cZmdErS8BdjakRQbKGjdguDxfeFAgijen55No6RNrKmnQ2uJtAqW11yqwMDJXg45f1LVnumwgK4g3mpMmpjk",
  "key23": "5PRypLy6BjxnZfYVVbwCgqknshi2KEu2eMWpFhiaz9hBjZFS76AmP8yXYozHWjrRDXKEo65vbtvHNkbPnbg4jtLk",
  "key24": "5yCQ9MUEYDaTQ1t8TxNtrbi25RwdHG6qZLe3aX8ukhBqzyksukz6AYz94eb1nNj4scUishjL7z1hh6M7FcuzY7Z",
  "key25": "3B5q7he64V1HnAXQgm9qWCzETiWmU8BZoUCERgzFEPeAqkbT4r7jxrmMnw8Z83yF8k3BPVFpid8tXXrVAe84ihLp",
  "key26": "5EzR1RDR36xwFVrAZYBRD6B8USmHTTYkVuxEBtVfjV1AonFmFJDrNeRjyAXzNbyymeGrjKMusBFVgSs8P8jcFMmL",
  "key27": "NAdYLLCnrLeyyocNsWLemwnfKcGpWjzjKR5q2xuHqoAEwfuoG5JoGieEWQjURnDn6a45NpFteMaFLcd9F9iNjtj",
  "key28": "igsTDQLb48VoLgfNWh1wzEm4quYJEiLenwg8DScmrkn6SGJZMWxmduN62jFgK8AnotTBC8WH9wJmLZjoKEDodsF",
  "key29": "YuwZS7JHuSJQGnB8MQruNUPaZihPL2BFhy4oL8RebsU41MBup3DwsPtz2QWJMQZiXwFyRuhXS2XawHZMdEP2pe6",
  "key30": "3KdLX7jxXvLNU1axyAMbELAFnjNnBrhanRrXSmUZuggZTQ1WeDoKuJqeG8SA6QhQf7GnuWhjQzTvd4ABTAtqzqsV",
  "key31": "DW3yZFYxtrBGNJnus3qBp4SeSy5KnxjB8nnrwDDKXzg1v5m98UZSKkhCZhab2xGpUPwKnMSrXAm4STdLFidJe66",
  "key32": "4m3cKfBkebuvgkujFutoE4ptUkZAZcQE4tEntFgg4wtxEeuHsL9s2jijA1sH9vms3vVGHxHLu4bxRNSUdaNoFxc1",
  "key33": "5kcG3EzfaFudeFGd2dqz2TDd72wdRG7QRGUs83espkFCK254hxpwbFbhrME6YCp2YfRQBvQK9jf3sPA4Dq2DqNyL",
  "key34": "2jGRf9XkdRkyEQLu4dsFTmBWcVe2vKFSsVZ52gpQgCwZP1AjJYSUgzNUxsVuMAX8PpkV73UaJXFYc9XXxcpBNau8"
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
