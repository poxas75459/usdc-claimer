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
    "2Bideq78w8jh9bGyxrR3qnKsVbrh4iebxctFmjYziLkXP72qQD68YVyNKnZ1VHbVPX5qHvZcid117aebZHCV78Ch"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "372PQZisZRGjBubuvXxUgtvQpN1VEodzHRyhHd1422mmwwPAxta62e972xZ89W7bWGLqconCGkusRyBrygN1Z1Ah",
  "key1": "5ueQUdfPSGQhWJagQ4B8i5debzSaDcdNJYnRwebCE6FJ3RpvHx9iC7wEhaszpTe2Yabb2ZKaMyZZfmxagrDWkWao",
  "key2": "LEniNi3Amoknvai9cpeFFhuDwN3mFxp2AUWU3MdVnmUedfRuekyb6xC3mEhDaRZgwmqVNoJ4tg5qMZknPQJ68CS",
  "key3": "xebDrXLAfW4jeG2z4eScjQqh9FQumgswdo4dHufyCZg2cjNRoSbeS5YR3hbKsk9Jw7BghZ68iZUgWqVvu1HCP9h",
  "key4": "3HLmZ8zTpsx5Gw2NSPrDpvbwRyRgVteNJ9ficDWi3H7B8QSh8jFkKrGk4rffEf8jwS5RBc536ymDGTwMrENi9obG",
  "key5": "2EJcWbyD2MyMbtUY6WTUfxJncLDPFsoXjpPjrBPkvePS3Uq2NjzjJtjr55woRhsNbGDyvcpWpK9DhkVMiMMd4wcY",
  "key6": "ot24WHP2QsdH2avUVZkMM1v5RozQSpE6AykTpNquApHn8V4V16wPS9it4RXVZf6oWiMbNDvNdqX4RrC6aBrLsZb",
  "key7": "2VgMTgBqfJ5NfV9gKiXDYm8QkJrUycMVb4Mi8Gbx4KsBLNa6tq5khTtNzBeJsk7nfs58xSzPnc35wNF4izwV5ThJ",
  "key8": "5CQuUJnXHwK7zxtXkz1voaebKA3FfpVKRY6r8hg4CTRz93wqvXj8Y6a4KsiPcDuG3EpbTw1vGbq4SpQa2a2yuMLm",
  "key9": "24JLni4jFh9PX2bBVZDfwHuhkFkE78pEMW8SAD1sxdKi8fei7DXGtHGMbHX53fV6ccK2HwzFksNUPNygkC91a1uy",
  "key10": "H4whjcQXHD2BSVi4jzefGHTMkev8ASPGLS28RY47gy96YJsor122TZXuXm2WdXUeF6CrwRBmMWArZiZq8DeYCzf",
  "key11": "4T3ePg7Tjn1t1bqotzKR7V3PPVNc2n3srJArJUBbvZRfpXuWpeA3eUfvWTtKo3X8WkT6nHAzDULzAcyoD7TJdv9W",
  "key12": "4GoaLhxgwxVJptDdEz3sXtK6HHVzcMDuK9ZjuhSosX3stwjevyyDnk3YQBnk2RtUxEEX7Fkb8jzVQm5nCHpsafGP",
  "key13": "2EefJdPanbTjCPiPcrXKFUXCisBXTphWpc2oEx4GaoWcefshk55VywwVVREx7ZbTHqqNF39W1d4Zp5pME9G7sFGL",
  "key14": "5xsBfh5gXMswsvuEh5dh6f9dvmagypuQeVEW4X69d2Cn7CrEMNWiaqFyJQev3nDaKMVBXrQtxLvGF1VMgYqjUzci",
  "key15": "5ZXQQHfBo6KPc6i9oyAWpEF52Aw4kyR7ueqj3tW8xSfCM3WjBLzUVXKkcQHLiqUHm4xdWoWxEZnZTZaknDbd17QX",
  "key16": "z8wAwaqV8B9hqyrvWTRye2FqMnFeuqQ68dTSW3xJAEGojstqiQJH295Grn5bwGGrmiqHHNyu5JGHMxjvioxy4h4",
  "key17": "5QYBEqrCMQudum7bFvojiDoPZWjjCeT5V3fW9qbew7ZPTujFkwXsVAnzoZtkN8SdUnBpiUTPgodEvc7DffxKX4GN",
  "key18": "3w7y42FkDm6pC8fbauTF4FCpjyyEA1D26cnzwBi1T6upcYNzjcpUnzBTuiJdJyaS19XnR1GvRJtoSd48sLpprixy",
  "key19": "5rvGg4tEbiFKX4nPY9SaB73SMmGtS7Yi77Yw7RsJZcFbrVKboG82aTCcepPhgRLbQnkPHLy31njNpE78cZfkwxFw",
  "key20": "bj4xPK3KVLSpKnMDJ26daurBoDQNY3g8tofwWV2Vr8AUMHqyRQGnTYWCsKfgiWc8mLZa98ChkGhAGCKRwVeQXUE",
  "key21": "5Qw93uUKNxEK8D5XUkmaTRSvQCpw2u5mG6jCKbyH73dXgMMEiK164Qc1ZAPKzBm1MMFPLGbxGxecKPugg3FYYdfr",
  "key22": "5P2ULdSxETV4NJzwg4kwojnMaNQm63ksFPmieqEDQ1VTi3U74aJEqdY7bQhNR5NSmaQkXxGxtmAQ263jJQPJrS71",
  "key23": "MvmKPzFJrtn85qWgbJfM22Ab9vMSE6vgr4wLcZ6YMHSTstG2vPzvXpdr6kR3awPvh3eY5fuGn6n7Y5Nx4AGTFA4",
  "key24": "2VxU9wFbaK5hpnARhBXqThW3AkfCQ8xEtEpoFKf5hf9CWH4mJxMjxXQoV2MwHZ1Auf2B3fcQACgNUUMANh4BcU4B",
  "key25": "3PC17NPVuRcXNAVSxab87BG3xFviTKMKvKopmeCtomLM9eue876dmXpbXnBJbxuW92ruGxsqaEiyTtxs5F7qKRqo",
  "key26": "hh8JCeJJkBHX7NkLV9D1FKGy5iYtwAXjDcgZEpeY9FGnhM1Xg9is9xQ1rFkziUkByEg3sfLfhMRKW3Ttb7ArZ8d",
  "key27": "cKnCdgq8vi6fWuNemkeYfS7jd7XXjdvTFARKPFAihwa7KivJw1tg7Kd29vC1qB6DWtLKQsHdqpMpAoYUovYXhi7",
  "key28": "2c3gcZEPRkgWnS6HVF39XJKjgN7u34eBggvr9FrD6MT1ygP2DrUJERMTxvYowYvZ9UnhQf2Dos7vahH8EZesThXe"
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
