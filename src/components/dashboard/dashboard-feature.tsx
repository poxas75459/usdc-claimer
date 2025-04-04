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
    "26RXeKzqjEMqH98mcRyw4QY834ziZLjQnAMHf9XzYp9obuymLWdKEroS8yxtiJfgK3xLY3CusYDtgJkAKs3HGetK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rZ5q4PDCGB4QmLVZxqixhjACHEGt7dvj3bxVoFAbLxm2KpsL9GWe7aFtisQtbbAGPgBonubnHn7rzASN1oQguRZ",
  "key1": "3hL1pU4njwsvhXFRmdGninjHmjPEj8MrwxydsLggZkcB9EMeHKhUpHaSbjKM8vnHgFqNsNDSy83C3w8w9xwhDhQE",
  "key2": "3mpgx8Vxg32NXpsm3wJ3hALG5XgfHpLzJgZ12TNNZt3rw8BZtUokjtNxTppuJYmBXkkm1omUy9dQUBvHsdYBLuso",
  "key3": "59pTby5g7XMCvuUnXCzuRwHZm3LgZd7grp2X2Rvvbanu1tv12uWJsfimANtjoRBEVPpwcJSwDEkGMBHB4C7qXy81",
  "key4": "27MKsGjPy9W48F97E65A3fh7tKaDsbhG7EYMLPv3iWzwo3BPjpsMxNNvFuWzoSv5Nb4gjaemupSXanksw3FRp9ox",
  "key5": "4MjbA6xWmS5HLvJjhhXeDNJMUYexwSfuRikcgD3cYaCL1gtSKZDrEMsWhp8qhRbeJyyJp8iSkMJYN5XJXKXNpnxr",
  "key6": "5tYbcuk8M8ofcHkjgxLSLW4ixGAnLv6ySLABq3Sv5rq8UmrkjswZqyFP2jCEFkUmziwE7hhQrqkRdzmLeoFMEWEY",
  "key7": "3YUETHhR2ixahZcks72F33fjtsT9yXEACGDe4ovRqvdRbW3uPmYrT7af3e4398Sw948y8jYQ5Hmk3fM3sPA8L1M3",
  "key8": "3CTGtcL8cbncj9EWTHhWZEmZxLqACs5wacGpHkcwr1gduPcukZqprcEaEsWMowkEMs1Te7FkqFxXhdnyaFa2nqrS",
  "key9": "2LVQUfMyNKzRHJ2ngukgdx8JKEvHor7A2j5PYaCA9px28rYRPPmHx6VU7gzNYci4gHzRbRMJUHVvyZRc9oK8QaQx",
  "key10": "2eEnre7mVsq6bSusqT2JU9Uy1b7QiqPxAcT36838L9Da72dmmrTQEYMVyrwfjpYj4eKhRemATYdraCiSyobUbTLu",
  "key11": "29nKp1zKk3ZKw1utxGVgWqH9d7uKxiTHkkwkGpiqerW2cCfcfrrmyDM7nhEJ7ytJmzo5NHHVH41L7Nu8fLEWk2W6",
  "key12": "3otW3oex1U5WZa9egS49LPGHAiwH2Lsj57qsHPBbbsxi41qAizADUcXEc8RjJuZDM1byPV81tRuuEPcwmc8zJxgL",
  "key13": "4KsReAbcCQ4EzfdtPtQPwBE6p3mR39SnwLsA6ucU1JmUSMUM5m1Fw4nm4EfG9ZsBtkXBoveGrMM5QgGt2LmqkCPL",
  "key14": "2jQPYqYRzvmXa96iHohzgeFtotJ3vSRio2oBtYRUQuE37QTfEaV44PZsSSEiG7DXudTgQJun8tHbk2zvYowkRMdN",
  "key15": "4TQgEGPwxjrhiZUGBcJL4KtWrTu6FrQWzdU2NBaVc7m7NYJJzPCimUMC3i2hg9PLzpQLwmJgcWtvhPQvwm1mZbPa",
  "key16": "426Hmehm7qwNBUUNdrEMxTEDQitRNUtbJt8jiQm5endtPttESUbBSP45H9842o2XQaP31DHpkaypYScKqcEbntjm",
  "key17": "ghYbveuQLX1nYKfSc1chXkdMc4fSguujfjSLmtQW3wPbvb7vrNRqFW5FoLsVTqaeJ7P9s83L8uXrDVet1yiS924",
  "key18": "3ERAGQtkyNLFzHi1QCQyvCSvromqHQ2GfHtT7epQSHJcxmNjknPc43moH3ar6uQVodDUKkhCWxXq9nq6o31Dhc4",
  "key19": "bbYBkVWxHyZaqkNcSW8683DwgxF27cogp1Pqga4pc4WyYDc3GFiDZ7fLFtqGb4pi7xe5C5XGBauDXmnwwxL8YCc",
  "key20": "2w1BwRhGgqfB6jDczhjqkRf7xr7XzGgHi2qRwrKk7ZfaofWqneVfgKCi4i2Q8LFVfLtWS2crM9zrUWqSkQiL7Svq",
  "key21": "64wwdoCN48b9WV87VuvQhzZPaaUr6K9wZkXmhPQ5V2Lq4XZMNo1xBcJBEsCdrn38nDDr7spC9D234ehrndiKxVnM",
  "key22": "55cxLFG8tcK3jRusv4xLJxL7mK3UcWJ1eijbgkukxmh8HCttNmJuRT7aLDyJsAj9qRUZBaCWZNqgiYmcFK4BDUFd",
  "key23": "2CNu57LDFnK4a6P1KHc5vpPt6HssouatnY85zcBvyouqcEzxLi685yRvTNuAajiDJyLcBTDDwriiQH7wm9VU5NwA",
  "key24": "3QjXZyKZKq7fqpDkUPkLMMo4N68LNBaJFYB6EMTu7gEmgLFzsRVJogH2nV3ieyNAc7K7HhdRAuvb5Mjchjz1kw9b",
  "key25": "3BdcT7LSpAnHGcF2i7CDpWxGhbweBbwJBjuTuHCFnC759rDHFffBiqFyxHJ8fCxu1JF5jVoy6Lsbs1ntgdUM6q2B",
  "key26": "4R3GFYvRMiZNKcDeLemocYWKbtwN61WNk2nisK996wLKiu17y8vbHH7BXGGHHxvbSz5SehifN5x3PwtuNYHggNDo",
  "key27": "4WxfbrhDMp9HEdrKu2qbxRE8ZmoQwgD3j9CXbFodDWp2RaubT5JX6XEd4Ft8BvFhTK5Hbpyge5bPjaT5YaynHkVm"
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
