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
    "5gchk5csuaUMTttKpgdeoFx7PJCtRZTCyPYai3j8HELaQkD2zqaivw2DoaSYULbp9HWNa8rksGeJuk1hUCQm33gr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Kbz9hY166n4jywJcYP87cZmnNXFizKt1tkBHsKxGoAbjCA4LiwX6nv9CLd4K1AAYzhW1s7W2VuBCe67FXSHMNic",
  "key1": "5NyVRxVnE9cX4XxZioMgZvAkoXyuEVFq8ADXpV8iekEUEE9g6yr3KukaHMGDGcBub9G7AQEAH59y4FVcj2gfGa8h",
  "key2": "2MTZ4VstShkyGogpfuJ1Frp2gYgU45Hoce7qmB84a7JUHw3gWmhu68LpFj9J6mvVtcfKwF3JHdyhrqt95PEEmTVh",
  "key3": "43jpcnezWBhRug9R8wjZELmyCfbHQMYeHfJGuHDaw149rNGontA82nLdzruzcNzJJvq8H9npcXZMAbxcVrcFkKVE",
  "key4": "3uY18A4KuCLViNjfCU33aHZMdvueLxH6Ny5RCDEZU922JWnqjJmmwYTFM5HJ7Mz4rUZncoyMeyLLZtQczNNaGXpm",
  "key5": "5nB4p3haoYK7P3AwF3YbsJ3MLqqmJYtWy6wHqDXo1W7E6AacHkhgHWfWFqGbZkupMYVBGstzKvP3fNtk6YGAnrrq",
  "key6": "551rQbkKs21iup1xTvpva52UuiQFXPSdTzrzsz6etT5mJVwNbzbfcjTvWgMfnF3kjtys3UH7C6C5m6B4VKLgn1QY",
  "key7": "4LeHbpR9mwBFAMpxmjCJ4jGMz33AfcxHj9NEAxZqGtLUH2xenQUgpNJFvHKdXhUfrzUyPHQHHHCs3ghtEPeWoQq6",
  "key8": "3ThDwpMojFnScydp835dggGUsWLbmq78kYcdZmS1Uyov1yjU6xDHXJLnCbpmn5WxDSHqDJLuyqVdfPZ7Kqj4an4X",
  "key9": "27BanUYAxnsvcgnkHgAUzZtUcZ6wvj2RJT7V5LdyJK78yEMNf3yL5ZRzLbfGjgfiaQgh1KvbwtihvfFX5wUYKEJ1",
  "key10": "2swuduLBR4oCGjK3ZWsQ1ZBhx5qBaPQuPGi8VxCmNqX7QUiGJJnwGkyHWTMpqSHWByS2nL8iFEw7UbJ1MpsKJDos",
  "key11": "411kjycg7Gm6QKjsTM4S1nEzEir95xtpDqxyzLBqf51QCmd7CGKVQtPQ6iGv3ytUtFZwLbMWaJtyxzmVoYJBHjBZ",
  "key12": "3Ea5FPPDXG8hh7JqqWJjSWHp2DZ3VMxZMMd7Zm7eugiMGyfMYp4rByF39i4daVVexH11uVAMuSsXEE5G1oE7Z5fi",
  "key13": "2Bu9kqpJuhBb6WBUZv1uFc16DXXrbQCsc38uo5vBuPxn8DycRnvz7VV6sXqYtQBsQuQQM9ogD8Cfttz3Pas1ppKF",
  "key14": "25eTjwCqaPKC9LymPL2RWs4gBak3cPAq33w3WLUSvN97T2UieAqbm41kDHNZtvShJFuP1cmnzPuRy4Xrr36VDviC",
  "key15": "2SnUnq6bbgLkXNY4JbfZQGqitAghesSgdZ1pguf5p5EnDjVroiSNZNrxZih1mQJgkCNng4wXMwf8vMyfHKzACMEc",
  "key16": "2n4bFQRw5qwJa8bp2zB91Kv3VoybeugH9TZBX6La2EzayYPZDKqrexro36AFHVVdhszphukLvwn3axFD3MbQnyhg",
  "key17": "3EbgUqFtkQMg7zed5yVyQX8bpKe9W1qszgQzrUp1obr98LrwcH51zL3LnkJVpS62Dt5zTbHMV66m5bEQgFYd4RvB",
  "key18": "D6swk6PpsfdCRXDHmFbGbH7AQQMXT8QjD5hDTDud7UZizCd4VyZvK1T5seiexuE4nWKf788k9JMwnPEV9QaX3h9",
  "key19": "4SvjYi7XvZ9iJ37xTisn7zm1MVVpC94HJW8R8aQeShvYcZbvsUkf4zLnyBLHEjtQBcF2Qm4EEccXVZsNajUzSJMn",
  "key20": "33jA9CQEbsUctAGgwXw9ecADa1bNZRnQQQWv7Lfhye8cTbDVR8KVhtSDdcMkEhvzzCs2e8RxwD1Qg2dV4PwMpQYb",
  "key21": "5tsCNMAntAAJ4Y41bZkmYSmvDMSnfV7wNppZaCxATYsLPDn7sAVqXM9zNSxkMJqrBY61HiMkioYBhNQR8Z5Py5vL",
  "key22": "2SYSP8vHv2HkBFST77cx8XE8caevsfJwKK9cogdarp4bxseChweDQFmAYdPcU5eaFfpPkcgkdcLR4mwgHzofnLkz",
  "key23": "ia7hMX3RNj8dpxWCuk9NUT2SvgU1w6wcRAZZYKwAq9nHALCu8RAWcm4Ti7fNjh3PHEmgk56mj2Ns18Uorm1cpy9",
  "key24": "3oZP5bUKs416CicsC96cLTWYyhxY8SmESD8waMDU5obCysCfrDPjUxKFMAhpwXRpbuQBvMBjT2YQBSvgZ8URsMAP",
  "key25": "41RDBrMDrPd3sDxsvEcNUm5FHuAFAcBpeR8owtwcihRqJZz2Hx3uN6uFWXMHpa31SCmBwcAnmTQacE2ggp2unrXv",
  "key26": "2JcmiH4JkZZQFmfRxbscrkfRrWGiPu2Ezb3HCoEb8W1z75iYcEREk2Eq8SXLuZfcMeRZPX4EZE9aF2GeGozZdrQ6"
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
