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
    "5SApkZqsaTuVGjMXxeWFQLtoUgWBAnMAYdgshPpey8FduZQrhZaVkGVPJLNvshSeiGe9q38qbTkhqrBCASGUmKea"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34SghqMeHrx5SPpZTwtu5VXSgpVGpzHwP94bvoy9yvJUJKjgKZpxm5BbtdWAQwPzzYD6XRAXJz4fTpEThyhVY4Lb",
  "key1": "GkoKUd7obrxUDB7Z2D4LS71FRq2kGQ8DTqPsMZCCBCSwUR4LQDUW9iQ3SjMRhzGSTwjUcNxiftvvKHiLSkM7psM",
  "key2": "2xgTZw64PWmRvo4vjugb7ZDSsriiZXNgUV2aXMzJcTXtBA2y37P8Vr9RGcDrVLLv1UdizbFHMwbLR8pRX31uqjxC",
  "key3": "46R1EUoGhawdV8udKgA3NCZ4Fir5NRkgEzcpmr1jNCWSzmTT888uosHHDA5Qy3Np111p5iPXw5GYdfrUkKJEPW3h",
  "key4": "3AmXmcnqarfCwGbssW7qZ441UpH87u2ft5o7CJqRLyfAv589XyH7DFpDtdfyjLHfwHndS3TYCLGQZJo1RQAKRviA",
  "key5": "5hTggKmPPPqMvT6vqrPgDgFHq9fKN3rxin9HRKJqSoo8YmmagWSZXLyYCkomKrNu1GhMqt7p1guT8x4WYLoDapGY",
  "key6": "wdsFZWhEg9Hbvjedpxxp9qNMR5AmDNcqjYgCj93ueducx5oixgZZHSdsykLZTFDHYpMj3UF24RC5Vyi8hiwTXry",
  "key7": "2hK6ofK7h9uCjuArjc9DDJmFrAhzuN24AxZoNN4PwmU9SmVVzur59Fx11TUiiXduDGEa3qNbshZWL8iPo2tDbEyo",
  "key8": "3kUeG1kkgwoqjm2MSp9qthAY9aptd66xbfgxhBR2UxrLYrStafLujZhswSoRUQesBZxZ1e1n3CbaW7mYtaeEH6Xh",
  "key9": "2q16RkP7dM28Xsk5VbL52YerpjMW7tF2guv5Mq1aFudChjop7fU4Fd6thRM4sDSUxNZsWWFP7LL53UNZdr1AYQGK",
  "key10": "4LCmH94C9ybJ8KFJsysbbL8CFFX9wxLuHCCgAZnd7vte8ddxy4A1ZqZ9aEAQvZDSBfqrcDJM8RXvU5mUTLdNa4um",
  "key11": "5HMaxM1d2zCqNtmHHgrXCvdFzrhVdwgi6XatNjRXCitfzLtzeKdib8cVBYiqGfkx1TXpWjihm1h2LWpTgWGrPk7K",
  "key12": "2Rv7vPxGq8vesfB5hGKTqMWYtmhPL23guqkSJ68kHZfrzj3D7asrbCEw2WqpfLXyGtGZr3ZmuJHXs5zPPqU2BkJ9",
  "key13": "4JRQ8s1P5qg57CGpHSGG2tuA7sB27FLBywg2wAuUJBzSo1qGe78Wa6NKzphsbGbWgFUmZLrN5oM7GxsyqNFYPNRt",
  "key14": "3pxyLHku2FLY3j6dNpBpKJs4F9YSPaU3ozZ4ms7Z4QPug2e6dZCdM6WyaRKtzTQtUVpTTcpewrS5ufvve8NYN5ZJ",
  "key15": "AHvwvrbPG6m5eDf5bQS4pEoaFM5986M6uxhUYjLXd6xtpyu114EyURMcxP6gX4uguBzwTUG6phNysuLPUK3t8Zy",
  "key16": "r2xZakPKrgHgDoc7KWWU3ujTPQwXBa9eeM9Az5TGF7B4yDHqYv1AQt52DMxhMbDgEWv3aUgzHc8yKzWcriyRumG",
  "key17": "4oY5gXD8j6ZkMPpkWs1zQcvX7Twz8YJWP2FepSiPVSppE9WrXFR7fojU6V8rHueGcypSiNUGS9rXQ8mU9Vb6WExG",
  "key18": "4jZuQzZbEFyLUXzzU7ev4MD6dVsvPPgZRX2rpsjRv3Cj7AqSKvWC7pvdaD14niPfA1m5CgEYk885a538SqeNcBpg",
  "key19": "3zvTuXXxNuSkp6yhdPYJUVKX7amXm4jz84sy7TjjqBQdF5qdrBSi7WggXAQzm9yQYfgUQycZZ4bnUAxJe4dB9xck",
  "key20": "2FFSeJeASSBbFpkcTPgqe96U5KBGz78rJgwmtLWjMfFCS6AviCvDaX3caikFfLo267GyoxG6YabHm8XG79FEySUv",
  "key21": "ZvFk1KPAnJEAZXjYLx5DmZ3D88UbV73GRA3KaknBkEjFTdogoSC2iBNxFp1Xc2YBS2uYen8b4K6syzNeZi3fu1j",
  "key22": "5E7r3MDKcuuLjucnjwNiwGPBnzMEGSU2FfQCME5NdiKenwqW6xGmrnzz496Dqt9vhAKVhn2BfcFLXzh8U8p9MsqQ",
  "key23": "4obHxNxWm3GGnVAimt1tTJzepaw152wDiwzpjGo7bZTSequxtFHXApiWVmy4cf4tEmo6Fae6d5oKiEswcvzdt2cE",
  "key24": "5L8ko5ePKsxucSjt3cMKsMTZ7LCX5XoP8P2rMdZ7QVd42UArpMB9ZmauKbdmbxNKsXUeK9g6Vgr86JZeepxciiDs",
  "key25": "2aetzX1Q6Bx8UN6MZTQdnKNcgPZpigDRyzHMrCgdEATbE7fZkSiMiXvB6ynScMsvjGxm11g36Ppzxex5mq6YwyYs",
  "key26": "SKZf5fsa4aD5GjWtbsezmy6V8EcfkuWvcygWYoHsE38WCY5AjNZbg5H3JLssDwTd6ixbiePJFREQhRErdcLKWhH",
  "key27": "28NUZbHhv3T1WXU4ZfVxaeZqaVqwFNzTzA7c9EZBVyUqnCfqnHJdJJ9uk3BcCSMyCphBoraMJnHPdu2tGXMdzkaG"
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
