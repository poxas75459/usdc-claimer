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
    "5tXNFumKVw8tykAjtFC1Ho1jg3EnmH3dNukbcqFn388DAA1B1JPor2RUzSRwL85MSziLBakexqYBv2YeWxwvfGmW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oX6upg2hMKpoZvreRfvJCUH6WxzWguEG9BtNYsC2WDnewN9sEEWQKMDCSy2xd9rit8d2TUEkHTYCzaPokKTizaZ",
  "key1": "2vVBrYDLLEgh9DsjiJYHygqKTygnqQ8ugqSpTCHSnuwTPtxkrhDHv5aRmmoA5WFBJ1wAiLxEx63Sn8FJqdioHPKR",
  "key2": "5LL7m7rUQPMqLUW9YPK4MhfxbHbZuKVSb9rkWZZSfmEaEdvK5ayxeRuEhAJiHeegoAi1JoHCGxGcKC3o5PSLyyxT",
  "key3": "5cVVQgh37SmQfZAozCJsdo3B5SaHYwtJhDhFYmFUQUMkTdaJcxC1Pt8GeeGhh9P4Knybxf75LvuRYC6uKhzsgf38",
  "key4": "2FmYtqLTyXZYF83KhU1uxqMtp64Hu8M8zPfzrjoNt8HcopAvmeVENFsiHjr6K7h9AmQmr4wjeQgWTa6YEsm6uPLR",
  "key5": "npoH39fampk4MSHVgW8aQY29bbwAyVoTb6Jid513d2BhapDQqSdWcdYCzozikBvXqSosnnGCjPn7JXqAoQyt3N8",
  "key6": "35CHyumeJJyyaQNGFrRMzQtXzvgqYdqx5MUBKVM6KGjcdERGAdqc8unBGeSMq6nX9F2zRd8ke22XJ3fHeFjJZvT2",
  "key7": "5oNqw1ZHu4ube3PoqMV4RXvubGLudJcgHKum73x9ZHTogDcNhAxNCZ8qUEKFiwz7PjDSv7HmBzVy9N5EvJ1KkwDT",
  "key8": "4Zt1QrZWMZtgxG7mLqP22rTPHyhde8K6MbBE274QghccLkqnqy5BERw16jBLs86BKbndZJu29gSfY6epr8ozn3wa",
  "key9": "TV5Sd9ZA4pD8VM7oy9ZdGFB7wfBfPrkvbG8S8xmdsXWMFUByFn3NadD3R1v3wLFjiT5NdZ2FUdq5rnjBNt2nGa4",
  "key10": "8zshZuCEjcC4p3TwpmF2FbHjrXxs5f4wKVSMnVhhWqDtgJ7TPo5pqq8D4mWEidf4YgytkkH8kR3PmpGkLGA3zPA",
  "key11": "4pGAfAEubwEY8hBqqpEYBC4TYAB56HYRo2vcMh36QBdHvERirgN2Ysx8KGWpT2EJXtE7ec2eFbHfSY6TP5v9EXom",
  "key12": "4Hujuv2cnL5K68TWwC8PKxo3h1s2UwJADpk1MYJjtbRtXCwPUs1KCQhgwrv4S4TBpNzkVBNiBBtbFfRYzaTXoivX",
  "key13": "2aoJapgoTNUbqTD1SvsnYWTf58rhJtCAS8THszUzJCQtCvjirKkkAkvdosoUiyJdmj4akr2cDJumFSNSJV9W4xET",
  "key14": "3wakEyUdyMoqn8BB4Y8r7c8RkzjRtQi4ZrGVPifERpBeovkdE1mr9SfM4tg9fkbE3QntTgMz64SpSeLWqpwryUwd",
  "key15": "3a4xjK86r6JFstWNx4zqHPy1TcwQco6VhhugHVVpajtAjegt3CBxRfdekXBF8LFvW7PGX6j3YD4L89mvUGU3QTzG",
  "key16": "3HbzFSrY7Eh3CW8HCPKmUNH84zomntK34xYLHG5eMggH7Z5M1a3qSj7PH9F7UQrLTTxSz2p1XTWxopmZqBFkiNCX",
  "key17": "36f4r9w76MSPgYYRcrqktwojuLBqX7qd1R2DdfZ2mceCxXDB8xymKADvoPgdmtegQUYaapKZNFqgBT65uvupdhFu",
  "key18": "4HULVE52dKPxKoDyaYy9X7CwpufUdYsWzSHionn98CuM1ukeJAgoNT6y8WyGNrTWR8EhfYgJMF3MqAjkJBKqvXzW",
  "key19": "5AfW17WjFTHXJQueG5fkqnscUntGo4VKZHwXGTwkoZXeMehEZipdi5huEcA4nrUsnrvCgQN6P6kDW4ASrdNWfKm7",
  "key20": "5P8HDhYNjKPB8udjVJ7c6uXugprBhPRCDsYfUqjPPXfTtaM2rki1RNHtpg8kurcS6Sa1qVpAC2hehNnJMSyAEyD2",
  "key21": "EyMDs73LDsUhrwruM3eqxmkpDaPX1xCpUTfVNgTdwfakyD77EAWEaHJgqTYGTQGBdmg1JQw7bhReyPWBnUfKSfc",
  "key22": "YqxSRmeSah6sBzFaoTNKjW1nCN9CaF5xs55s19et9p7aG3pZAYP978XEdqTXHitj8MCnnaxLjtXmtVvXSeqNydn",
  "key23": "2TCg62Yvpo5GfZwDTnBvaRQ3BYEuHe3ucN2awwgUPrb2Us9AopSLRGkDTZ9wJExq31tx6JdEbG3nnM91Rd1VYCsz",
  "key24": "x1c9CVLKb5Uq29Xm1dzJcJTG7Qdkv9ZSHzdg1tbdVttgR7opbbK1cuz42sWgoeugmRVjT1LqSNV63Yh9viwdWyq",
  "key25": "5jNBAvsSHdgp4tVL5bG1dk55vHBaF437rWpKgxv4LbaxwmFfnf1vNU69zGXwDGRNLF1GkLijkfN6us5sFZQ7j4eT"
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
