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
    "4DQDkLWhGtXgd8wpja33AbtdCRnnzyQ4iX4cMQrcaXdwZh31Z21aNCMkhAvQmwpRwfwU7HToX9qQa8aVE75QLv1k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f5iLQkYVp3A9X7uELqjj32MTvML94X85XQk5665qPSjDso7ZGSrzKF4SJudh14mfJE9RBCUxqQwrcsqADQ5zftb",
  "key1": "5pcA7xKDMPHuTcvDadtzcGJGMsDEcWR9S4aBBBK1MSpgY5hSvR7zUMNh9zXvFgdH83AJxqz5U9n7nbf7nZXK4xzp",
  "key2": "87AqNpNk18hRWBeZu3QfSnoKFvHnARqFrNVDVJ4LkeEGajftJ5CpMkqGbRMemFiCWeyUxhxajaNo5Th2byJTNX5",
  "key3": "4rAYoFXYef5Dv5DjpiKWQ8F9xPxjvGybov1zsXbaNhsokEAAeN39fKL5bCh79bUUQSKQSBcUt2ebHG6HAE59DD7Q",
  "key4": "5Uf2wf3niQkbFsSk63HevVFTZdN5E4v5RxYgAdZofQsAXwKuN9H5C9dvr3kpHkiDRGJtC9cFUuTUzvo6rBZDuFFW",
  "key5": "4PW7BdUzZChMdkuvbNkcEnSTUnVYpr3kK869QPbHwomgTtYUfFMD784GM1sAPRom7MaBD5QXf9JGGYvS5yi4i4NX",
  "key6": "5CmEXAHhAiYEygxGtpcGgNKz62LDFk4HK5Z9hyqy3x74qC4KFVykJE81ZoYZDgitGDmvcw4S9EFqrhwJRbpoPS7f",
  "key7": "5V9pze9v5kZgXN4e51q6eBy2KdjYy7gFeawdKMUkFpQ4Mmr66Pm7k7iNGwKG8jgdEzL1xsmqEp5yS9qdAgMcp86K",
  "key8": "3ep36GEZf8UCtjMdziEXPtbr71r56b5NdJPvddoetYhdzxj1crucraFK9i27CmL2fGrVCVAtLjcUefYZdsNGfPA3",
  "key9": "2NYZ2WM35SopGo51YaXoxApcZs9VjGZCrKz5x6zURkF7nSfw9w1FYqNDntZLFArQxKnzfTxXy1ANU6zCKGj3YSoS",
  "key10": "5oEaazn2R4jNaEWXuED6FEaMeRTK6fgRPEy2saxZKG5PuAJjVPP394MPRsoYfFcMRv1ArXeHeLLgP9QZdkfyJQBA",
  "key11": "21BgAT7x6HW4eWSHyUsziagkVNax2HKHxG8epGEQdpetL1AgqYGrrJwe1RLTt41rJwcm7ZUztx3LsQMQTfQtXis9",
  "key12": "Y3NjTTkAo3Y3LDr4ZYqbBhs3UXgYMqzMnLGFQDeQNraoHzngWr1ytdgQeWHmK3A6BBKQ2smVpoqfkUraB6yawdf",
  "key13": "2TWFtsXeoDwZB5fdJFkgPyHa22D7CbKxe1fD4U1DW7RS9KkdWatcxAvSC53bkvJ9124K8uKoipvtZ8pizJMump6C",
  "key14": "5cWq8FRRYGhoX5joBniPk4At3CH2cXJS9UX3kuQPAkT8BSGszM93JBkqNJhYTfZeDuKCbrywtCHEPZBTPWBy7PqB",
  "key15": "67rjupRhDCfT7iJqBvqxNXfqewVih9cRZuVv6crBmtzbHiqfW2BnAFMpV7wLdRQqhKrx7fpsnVCcP754ogQ2FxKd",
  "key16": "4YqV4ADwXGP85Fz7KzRAHSXxJpdAJQaVxvsSWmEw3jxqV1SkTRWeWDVyYdQqmgobPgEqxYN55D3U2TPc3wLZe2qM",
  "key17": "5NUjNYAB9KF4tr9kBrcDx4Wsx1XAUuBdjjJfW7kiusTTzjdK4bWnGbFjvx8vAzZ5jUdAdqDLZvzEFUjw1GupkXFE",
  "key18": "3u3wfM4WRwXwFG5u4LfRwAzPFxnhHtdqiNxTJumcJoNuUMHsKrkFBkMSQhMhaETEYQ9C9x9juLLXMqXwVHhyXpn2",
  "key19": "2xzkXvJ7FX4dRtYGYbJLdAuzWDWHv7kFZ6v5ZPTi1xGpycDfmY6GquvBbnsb2bPto6pm63Nsfvcnr14qjgc8jkNQ",
  "key20": "4RbYWYDQMp2WGL1pxWWxecMPNdvapXMwpfzTiHFb3yhszVeLfcA2T9kuftZg8k5wX37bXZCChQmHaPycrNLPc3kA",
  "key21": "nPFZJyJnie46dk4CdHersXs1rEq8W2N6aNoHhMEupKDVW2XQ7H73bu2cBHc49w3DsUhrBnWZnJbtG14L6rMAtCW",
  "key22": "4L3GN7ik6migvPKyvQJkeMExyhzb1xT9bHghK7PdCqzgkyyWPtie9p9bdWEZCY3SGsDH6Tt9NMkXW5MK928QC9H",
  "key23": "4mhyFnLF82cGMRrEYv8L2foGCd4nhUhYuSWnaEvrSjzhcj3s5px9btVW2aHY8K8R5d4x8WozYjvtnQ6AMwtgQde",
  "key24": "pPifvgje6iHV28X8hVCwfCtX8ptBehzefdnPv3ogYTK8YuSthedyTS8BcsWeTm2VrWJxo3LQS6eQAsCFkxsWbaq",
  "key25": "YCpXoT8VPJfkyyBacjtp218ep8XSs8B16ihc9KU5RoxfotkmneY3iBmZSbuUQFx61YsUhc2mPMdrRA9PTHJdE3L",
  "key26": "5636vmd3NJNbwTgFQ4BYHiqwW4E9fGbhteCUkLstZhqv7RSFBx6Frp4UUr4eLzFwgzdApmxqfzKVMghRDdK1Dxa",
  "key27": "3vn4FcSXDiwHZLThGHRVrnwz4WeM7G7nH99iTAZJS49kfdEUST1bEFo6bPxK7T1tUZU65pRnVBvUTMhG7gQ171tM",
  "key28": "2tjN5XdorJpw8ovZ7shdAkU2UN4ugc6Py5bU4iiLV9MxUvzT21S123oJFP5aDkNmv5jHRpJL2q2tep8PtSLWAFd6",
  "key29": "4TdA162xuvimQ4tpZ43pG1wsLF71RKXFfPdowE2dij8kvbqrydoaqUkpLgx7hpBadeT6K7Wm58z4U7mCD11Lvexd",
  "key30": "2ve9HTRctszb31UUwQvhdawo35NKnaqhJa4JUhSFaFQRzw3Ky7uNTh7JQdFrqqVQFK6RHdNsgiu81XH5TscMEEV5",
  "key31": "4Yg4ytRRXozHEh6jbhn4FdiRHA3RiMdetnsYbBAukyhdQXvb8RLB5rjuoWDeMRHpL25QJ4v7BdDKzkac9DANJKT1",
  "key32": "2s1RiQFCQuJGxYsXMt61bGELVQHgWjeSRyBNmzZjeUyfSTbHmkfGJUijyooVid9apHLGEoBWC7RhwpU29ZqsJ5Uf",
  "key33": "2n5h2e9gH7hT6JXtJJMx1VjEJj9WPS6UK9vM9hFqMT6NiayfJvgGVP7EoNPUYnncxUxd9ZSHFY43buJ89rt1TVFu",
  "key34": "2CLspWif1NeuaVEgtyZdgtehtnim8uae8H9MuWySrMEVxzqUSUax3qPHobn4axY1KqrfCJGsuDJGcZ1CgoN13aYH",
  "key35": "5jpMdmtjWoSM5A58fvAJtEPfVLZnTYi5DEH9W4kBamXdY1GXiLPRFAP7SD7ZYj7gj2WQW8JFQxpajpHLjXPpE1sD",
  "key36": "3YzGDJ2jWLSPgbsgkcyAVtTERj93omy2aboCydCjhMvLCLjPZgXSgpbg9ruBxgWeT3GAYCxMP9ZQijJofs5h9198",
  "key37": "4VBwBTsCFriUTqfg4nJ8YYGuv5PVfRc5MbNUcRMbLk1SqAQrueArNQV8CeYbkiAiR4xxon7DiX6fdBgrPp4tE3di",
  "key38": "3Gd5wciduj8djhFZ4nq2cHJRMNkaT8yKCRHUXzALYB3wXQYKPskzbXSxJi3ZUKTMPAAs4ygAoKykFFvEmWy8GGrC",
  "key39": "22EWjhmHs3djs5D5oQAUrh6SnMkECWWeXzk8puKF3GkVBCh6WSLDts5iuJ9cW53qTG3nfqMmY9YhjK826dSzCMbP",
  "key40": "NSuUxqpWSQBgJLXQmNLg45BoPQ817WuANLkyY3jERF3du9vWjaPKrq31KomqpE6XQkKopsUGcLvQpLGqBSyJHP5",
  "key41": "5GZCKCMBko6ziDDVSjyxQZUzH2tGfEMKtBh5f1QVUmKQVU4aDufdd2dGH79pp2YRhhL9XABUHkgWf5fdv9eJZDFH",
  "key42": "3o2S58ZCDpRtQ3R7MQMzb2kAeXvvwPkCZNi7QMDK7PSZSN2nZ5RHsburMNNgedAZs4p5tJa8rmdNwcG7Ams6xZ1x",
  "key43": "5CiVHbKTvuq2xVyGw9UYwvVpQuCDGRfPJ5HNgx7yBHTr5RfsD8kVnyE8Nv7pd2NJ58xARZts3E9TaZwNgnADaDAn",
  "key44": "4rZ3REwpGyZ38Rex6XKji71sH982g9MgtcqsC2uiS2zQXqx89hj4wjk8tzSjonU93J7cvGmbzFrWeEsCfAJLQCn8",
  "key45": "43iTrvzDwgsThVgxg6YxcdSRW2mkBHTFHmdu54Hn9bRzDAd3nhSWkAxYWUstCBobhw63oUaV6Y2qAz1kjaoNr6jb",
  "key46": "rDPo6QTBd6VNnjqiffPMnj7j5ns93sb8W8yuS2Xp4s6arjA7NxieZ2D91r2rCdfQ7qeDxCFT5NVtowxZa1gj7SX"
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
