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
    "3LiHGrML1AGMXwGhGvwFBjiBHEpt9et7JWMd53WPXQt5QpUkNseBHcueuuj4gZHqRVLG7KYFctpHRKJmpW7ZNz6m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "272ZkDtNQN376z3io1eGNDy2QLMX4ULNfPSNd7PqZ49butbnPM6X47BmcwfdPnhgk4tC45yjbVSwBKqP4dRhWU4P",
  "key1": "22vE8aqS7hF6qEPuUu8ABos49heXmMDCuWxXr1h64YKotACpgG1ovwcNbETEtqLFmNXv6TfEVah98iTJfRx8c5f9",
  "key2": "3x48yzD9cZuNWzZpjmpovRuBnhJvwZrQ3Ftq5iyfYumo9Jyo8WzivAbCyv3U2QL2YNdEAwTj4nEKwF2Ks1naYXky",
  "key3": "5RQKHYkzMHLKk165DYEG92gv5bfpgXi1Tz2o8xDmojfvP8JG5Bb1ufRAXuenAQ8gnDhmScdMobjSnqiAL8hpqCFp",
  "key4": "4uJYUSYCNTJtEwed7QYYjbCzfRaij9sEYxjx91QU3M5Mx6rvQRonhyNi9qYvkCJRkGbC8ne2S7dYbEhfCWxd9G6M",
  "key5": "2BThwnxQ6fizYAaepkmS5VMc69E3DwPaP5HwrjxxsWnrHfR9mJsS6hmuJEkubgNQGb6EE4Qh8je2ugSo2pTWxpEp",
  "key6": "gsWYhSB7L8k3C4mSZkbR23seKLuekCUBYb6fVTyKPdt4up7CNoexzfwoJQVErBbc9Y8AzaZoJ3HoAiZyQdkZVJG",
  "key7": "3VHdR9BGEdU4pKwkzEzruWNsmghoirBsNPWZTou3YGr99GGvzBeGN7Ck58CHEVvac4XNR1XypFCSuxtZ3Ws2Dc5r",
  "key8": "58gQ965oPbx8JpqXE4KViaQJ13B1dQ5NLaXQMhiUdZSCpaDSGmW9SVXgDnpJHLoe9spiFzPG8cPWnuEgRam6jKMR",
  "key9": "2Kf4ivvAdvqmxiW7VHRVi1fmrSzSoE8c1mCgCpTtyeGwxe7F5BJMF7AgFBFvKBtg3R2wfb22fvb8xJUBr2d8Lk3h",
  "key10": "2C1wgQuUYw9suG9bbEXWPENGvtFdwaiaSTKWd6dq684pheVEbH6sjzaee5zcDcYMWhXmRgUyCnGa6AtZNvT4XMv2",
  "key11": "g784mp2R9DJBKoRXE5WmYke8wngrN911BchB3t5TvRLRYFgoxqW7Waxa4uL95jQYuT5dqYserpi6RgDyxcFZfSP",
  "key12": "5wqF8JDseguZJEhz3BMhtYCFB5anCEhrYMoY2DdjPbUWL6sA6AMVy2k2Ca5im8roqUeaw6ZEqHiH7aAM8vk14Qj5",
  "key13": "2Bku5mqR2n7REXLPCwHyseRRegXA87PpsTvZBk2Wf9tqzqn3zsCXwBVLkTK8VdfsssLYRiVWuUtGBWgoxHyBDDKU",
  "key14": "2d6SX7xY811xgHc83DR6xV6iPyhF5ABMeBScRwaeL9cowCMmgjWHVBWT6K719EVVGb6gLYoagfbp1S3gpiwqQnp5",
  "key15": "32gk1LqtL7FWorauVHTmGneBWZ5ieQuF9rwrNvKfEQAmRSPHMerWghuksi27tTQJ1eHd3cApUXvfAeaPc6FopC3H",
  "key16": "3nHAUEb8A3nndwkPvrKgmAKuZuxinCn9cgfTEqDpWHZ9mMKv2ZasaY3vH3UXbviAqUha2no1nEPAzQgkv1mLV4ek",
  "key17": "44N1GQhuggVmboWEhwy94zN1cA4UjAP3n8qtYJS6ZhqNbncg2mxPeu7izmzrCvA2jD9d9K46Fwj247XddZEyxy9r",
  "key18": "3gXCcbJzL23koWf3Bb82hsTMzsLHV14qk1vuUBBF8cxG2nZd5197XHMPt8cjYLjM3NiZTozgdqrPoiRX3qDwGwvh",
  "key19": "5R7dVtLZ2cxH8VP4pmdLhepNCzQ8uPjLr7XqLH2XMEkxmKadd3PPDtDX3v4PuCkg8P5Z8WcdRqLY3Y6nEkn1BbTz",
  "key20": "2FbNd64NuhAfxefrR88GyS31qqXXV7qpG44eevMXNC5wnykCmaR12viVkQEcfCdweY27E7APMkr1EKLoHgQVbGqn",
  "key21": "2KtDLJonCL1vJYXr3LPf7Ci9VBwHssy9idcgyTPrXQnrWsZXTTv76p1QVa2E5oEKxwCL13C3L2ZFQ6e9sPrqWjx5",
  "key22": "3gJyGoaATQPy9sXdWhiSp6U3iC1NrovgzxH26k7svonS4cxQGSBkRZ86BT5qVem6SfzMiMLFfDj7ohccUVLZyDSe",
  "key23": "4KZBmPVDvrxA7tVND7JmZUpoBmgPJCCbjAWrYkuwPb7jE9FAJnHuBUsg8Py9Lfh6dXF9bJfteG1Q4aAHxrgHREnv",
  "key24": "23C95Ae8izRQzzCKDue9jKvkqhYkC8sUogXs1Qd9CL27bFriDd7q122kPacuvVfBFtgFKx9Jp39Vizhif4seArie",
  "key25": "524nTbLZYQRQKtiSuqDs7h1ELqUQZ92ZrGmZagWEUxoF4pz1hX7LtMxtoAXP1FPxgkB4jQJn9FxFYGn4n1ZvqKB3",
  "key26": "4bzjUm4xN1GxnPY269ZWsVVjXd6q5w2ospfkfJqCGypV22ig127X2BB9GzH1yghbs7hCHeUWvHZv6xDfkHtKGqnL",
  "key27": "5hW1gJpSFTBwagTMYr26NZX6YCmMX2AvhVmUND87DDqvqonf2mfTzCQbyRtrTmqrMS65xuT77bjdRiU5PZGYNppy",
  "key28": "55hhnVM3MqABHth9FuJhgNmreibn5xeYFLNLJPhaDNqx8yGwrrAE4pvnVLsimLAdtUWwN7uBZZUhtUxZWW2fKguG",
  "key29": "UyvpezRco5C4Lsrcd79m9SMkiQNjHW3rBhPvYgxNSd56H8dzpwqEASu5Zmy1EywTacTHdVwigZ9o2rQjYmE47ZV",
  "key30": "5rT5j5txgWYGM43NvAzCFPh14eU4msWMKqx9wvSd3HNyjdo49JBP6kVDjo2oimcHrYxZU7ExW8722M2GzagWqB7M"
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
