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
    "kiKMXT86pBBzbAg2uxUHbrwuu7Bjy8irH2kpwgBSa6y9jZex8Qk5aDfusKY6QvCewoshfxtRGMCxAJq3DnyqMv3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "624Gj7kB5NwevEE7RabPpYx9TTjrxFF2KvZSh7gg9VZYfrhg2eYbED2e68BEYeu8LRMuUqjPmgdTb6GbmbxGjyYb",
  "key1": "4Z1MitEwYsAjfyJGpnB857opmJtP5irhtiZw84ApLe3bK9dTAtnkB1EkzAvyFAertC3Zqt8q2CgbyFAqpMrX3fog",
  "key2": "5aS4UP5LFKoF3QW1KLq8ACFLoEugL9yePBeTwVu1dyHAtaZQhuxoFLB7ue35N1y7JefpzjwuGP21ndeTCghvqrFj",
  "key3": "25Ak5XUkDnHQQD3sbEz1jL3umBFfUF7b4sqSRQpmugbRni8GijCHdbzvbsoAvKvriETCxhwmMdhiqtAqz2e6Bi9i",
  "key4": "3WsE97kJ342A2vGd2MEyFo2y5HYuUVTWu8pF52GeTVQ4DrnVNrT3VjnargRBUFec6SoAVPADZ4zZsA2kBvrPwYV6",
  "key5": "4jnYt9bHnbUR34etY5RjH3qrqQRJ5wZWqsj1BxjxB8XsFgWaVpGMgJr7uK89Ab6gfax2sJoAooaBgACisjpsViDL",
  "key6": "4M8SY5xe3hT28vwhBmr6YgDPnsiJ2LjTz3ejhJJikCS4sQG9UdUwSSu5M1KFCYDrrewcYy4iaHJTtf2MRcUhzhme",
  "key7": "zqAKPu4b1dEcivCTKGufby18U4Psdsw44dFdj1RpPaaUPYcwyySuSiNCX56DrjAhawY4jLpe5j416qYU9mowJDL",
  "key8": "52zV7LN5fA1aRiPozREHvMKZ13xPi6e8quzjXuGRrsMj73qJo8FLavTrQitd9NQGTqXbrjWuSz7e3G7TmhjaKqeV",
  "key9": "5XKD3TuDxLxRh9THcPCf5MVPLAgvyMYF9Y2e5CTtrnK3eC8vf2apEG7VtdpdgA4wHhAhdR2p9WJMtqo6c5xzZuwM",
  "key10": "5ngTBDZCkpvu8Wn37Zb7gG9Pq456Fwi9b7ogAxQEtQKPJaDmaHFBWMPcMAKQkh4hwuYgUgsoRpxts3zSqMMnC3LE",
  "key11": "3inDTcgBRR3GQFpbeaz34u6hMGLdmJRUdGvUfibCxQNhqXjdFBtNCxFPaoqThJCDYoENKyted5sdfkHVJzXDqXvh",
  "key12": "HD32n2Vs78Fk5AeBEj9tKGp6pMGegLCBGwxQ1Lr6gdsi3Wb7HoHHvNooFuEFmmG44ts6Pzg1jkGrUs4jy2sBpsz",
  "key13": "4s9C2VpNaK5MzqMvHWHJWYgHf2DeVc4KAHcHHGa2ACYqce9JAwBckNZh8tkcFictMabATtYoDcTXMjdWw6o6k87c",
  "key14": "5WB3gXbXECbm2rramNxZbNjroAeiMPp25VxxwdF3juwKNM2fGBP75JQ6rLrcc8KqCMw3aqm9KWgP1Eookg739Eue",
  "key15": "284G9jK3RkHvCYFeJ6TAsMCbC9m1EG6q3BhXR4iKp8qe7S5hNLAz5bYqQu9oaTgVD7MLjm2EoPaaEaZWWPhtSBkd",
  "key16": "4QVGcPhQ8g2n4eNK8frMLYgXpDdcavctX5aVmsks8z4fCW8VNUif4RbUKcXuroNkz3QNxnWGonQBUeGtzpaJF6fR",
  "key17": "5LgrtF75u8YhaFf8EAzfkzw5mazQhcuQpAzsQ8futXCTaG9pQDpQtKsCcySmH9FwLUv2KgdLH2yxgxyzyJ5Qnru6",
  "key18": "2m6eoH15qcKqzkk7R7CCWANaojUBRUfEz47Fi7buGTCqeoZg2uAyNJv3xksTBki5UfaTQR8PVgqaY9kLvE22peNH",
  "key19": "4RB8pCEFpwPGqi6TN3J7qUAP42Cdp7whgWehy7A1cWCZMkhVnLm7F4x8oxntp1GgbtAFDsyxvESQBAFveaQTYChZ",
  "key20": "5FFUSnQarT5DnTAfz3FNvkEUKxedat5bKgiEpM4x3KxbuAbCGeLbh91TF8VE1tVpjMzAee9i8R61gaD1kRQ2GU9w",
  "key21": "5J6bNzNkohJQwuP4oKwhzcdqqD7uGsyYoM9h8NiDMk7xbUtseBnZuyQRgAbooQ2yNLrdGHnhMBBYpJ2wBoLiK2R",
  "key22": "3NCGqxCi9xGvLVtmmHsQYUnea7Jsdh8z6xGQBzPFrTKpnrSRon8zFyq4bY2KC8HgKD5e7DbQNwsaCfJm2Efa8VPN",
  "key23": "5KG3fGR3QMnobXy8zgQAa7ii3F6WksXefVKucSMwQ5jDjF1bXfqAsYHzkq9wGr8zPJUXknY8DV75kUkQqsRyraUo",
  "key24": "5muWbq65VC4vUFL8Azxo24WLyFSKd9oKmPs8Tyu37TmLYQ7p1RueQF9ZWZotkcjZ7MstewPSse6KN96T9bGeWEZ4",
  "key25": "2tNDu5xAGF6rBFke4tjR5eJLNz2zQ2ig3wK5nj3kFpZ2W6XwcxAwA93e5JhPoThLCHsjzpVAcBXTHG4FnY8uL1Lq",
  "key26": "Hd62dujKMjLLjHLE84dnosGmotrK8anxRgpXJ3UBQ4tMPEjaYAg6iME3kFsW83o6q2N7WgPfo6mJTtgLtY2SsGz",
  "key27": "zYfUi5cQXnZ9aXQRZv6EpWocTtLb32ZDSX9qvzb4fF2mwfhWdMfh1rzJBSW3XJoG6mdFuXHLwBoyxZZdc7rrdur"
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
