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
    "3wkd3pRAp44VEm7kpTgzA8sZxbYM6LSJVxsheA63YkcfX8JW5xjvZPsfv51zJbMzveVVLiPf97oLJifJSepYHoo2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F5bbUpSawbBJXhMrRcRV4UdRTuJsFYQv7D6L62AQmaWEQdjRZRq1RQpBciky8tcJJLAnx9DkD4HbK8g8bmXfSzk",
  "key1": "4vvLYheM81w2VcUNyQ7sTvRa6PFh4zhuRLeWfK74H4h4wqZytD3B1S28df4XbrFfCBTpjFpEf2wnp3sxLnhgg1P8",
  "key2": "5WxfKHVwJUdXkpo14PNzFjpi7sXXHydLH7kKTBty6sNdrhUCujSi6r2qt3Uy4Da7cHK7g9P2n43YxzkBQaorTBvU",
  "key3": "izeqdJBxvrMAK6jbBcQkfGFecyt2bZfcrzJnxh9nBUduKz81F9KC1RLAuBDmcvsP4LiVpE7pDtLnRxNmCJEtJVr",
  "key4": "5QfDS5wpJYoHPExWK8wNmSCGHM87iXsd6rXn2NGkwPbThiCzAHDmoBipUTZjDwzBKmPSYfqF3urGe6tnLkSYw7JP",
  "key5": "3uHzxbYMgMCJxk8WQTQ9ko4JHcDgQv95hymi2n14Z5BdHLTE7FP2DszyBSYxxa4WgTYDskYa5YdMq95yijWtWjGw",
  "key6": "5UzgU6ueG7tehK1v5DLZgQdVT936mdqMFGvw2h9AiNiAgRKNEvvXXPMrV2rV6vXRK1kP2awHLRLdj73kcxnJE9ap",
  "key7": "4yuqu5nAMYJbS2MZ2MAavEtkash8Gp7sbgtNEkQsmquDTSJ8CQWvaYP4VBrPDbajKdX5HtW9fcWovJ4Hr25i3e38",
  "key8": "C11QsVZF9KPqbtNzruvoYhD9VR1sZvtkVQ9z2iphY8cfTbVXbRzPotuqSLq6JX4eHfbc8ZTkiwPtBEFqdUy48T6",
  "key9": "2uG82Hd9AsfkGzKFwz6WeJocLET7efksEKTkng5ffJnDpLykLvhhtPBuLCUawX3MYUWgJCo1dsbwJggZg3siW3Lz",
  "key10": "5cCHwxnZ3r82XsQxpVruh7ixoahnDZetbnfUFEX2JW3FeoA3pynBcMNTUxTdcn3qboDWpbz9SpXSv86h2pi6g8TJ",
  "key11": "fjbyByHeY9s76qzA1zM6fXsbgreQjZ6xKUzz8m3ark6AC3BV32kZkkMhEumoNkfr9LK31XNhvK9nsYDGYS821Hb",
  "key12": "4qSWzYspzk2yUC6SfLDDWs4DrKD8dng9KETeRkr56AuusCxS13rMVWsfwPAsnpr28Ksc4xyEtXNS7nyTFWPFPMek",
  "key13": "oLRGQXzb8Byuwa42wmx9xTCDP4FfP4YR2BmZiteDWvWeMTRhiBNFKhqh9nbtRzQd42QuX2873FqV95zLxXsjFFu",
  "key14": "65m2Y2QTyF2eRuybxAZiTAdNsg1CpB8mRDh1QhXL496zg65k1jUXSoDNePnA9sndumvCmUvZMfspCTh2jv3x9KK6",
  "key15": "3aLCkdJkgbSQguZhM61JouCHpqh4WEGatctDjfDY9zyYPUaa7LsrZzKf7vcZu1cXXLULzonhVQq5m4vXUXYiL5SY",
  "key16": "5qe6S9keBhaWgXPkX2w66FTkZBivjUr1bMXixtyj8d65pzBoaukWuHSo4S7wverHrPdakmZoeyMJxoiKJ8uWG1Dv",
  "key17": "4WS39nuHBxAnjoUWZhRZeafTxG6UwC6zbgKosgfYHYiUjdYoWJyBg1nQZqPsMAfrLDFh3KHbaBF3VZnS6c2uHuZ1",
  "key18": "2Ubu61jxPiBdxpXJUMnMVk68EU31ZRZFscYgPFQ2rBA4Zx6DcwziMMrQWGF7Tw7dfJuW69Z28c658wvUXevir9o4",
  "key19": "jta4dcprAf76xAJQwUfuyAwoAteMkkTnSdp3v7RfrixbzCbXw6FEXnJCzDae5jX4iEf2NL5BX14zjQ7ikoZJ4mo",
  "key20": "E2XAZomAps3zZg5Eq6w9yRmRySzM9n6qUQ2jdGWMfLyPsTKUBYcFkYPPqstT3iSjyLgUKs7q2jpbx2chWA7dc1K",
  "key21": "2S8jh3Kesn7Vkudziehr7bHRnHsjpvcCaFS3hBQ6aqZwPk9iZkmyzx36j2Q2piFEV7Eq3EmHFty7j93BouPzfXno",
  "key22": "2DuGcs3VW8PWF2Yx33a6xNRN6nAzYvTogPUzTLrKqe3ShbwHKZE2Ag4oadVhXYTcQ38GSAWdy7Joyd7e2Jh5VtAD",
  "key23": "kL9sSrKN26KT8W3rXD2pvEjuAqL14en2reXQ4JQs2iUjjvhvNejpzfBnRa3WCNWitFx93MszoGdx7fKpY65U99S",
  "key24": "bHKCgXAKAgqMq7GEHJMmtbqMoZ93oh1zJLNCXue5wGeehpdxLtnBjD33h9v7stLXG85KTfZsXQX8MALsvPcpodE",
  "key25": "2eKwhaSwmhL1GABkXBeRC5Qd92F6E1ffxC8eN5bYCiJt1YnVDM7wCHi5b4CstwoUqHCWwp64AiEhtdN9kRf9ao27",
  "key26": "3mmLxnRuyQQPJ2RR61whq76Rx4h3zzaYQr9XjV9FQ5G4pZAnukBtwXwpdWSMtqp1bb9RWE7B8a7Nx5cAVMS65QPk",
  "key27": "4H7JNjnE8RGrBJ4H8LD7aemhMTa2bdyqDN9vdtjULNpEAC1WJrqpv9U6XMoa5nuesSbQYY5UMEYuYorDqi3j3UVY"
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
