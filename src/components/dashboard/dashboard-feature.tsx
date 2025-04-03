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
    "2EHV3A2VTwBXNjx4ZRwiX4ETF7kj5RwmmKVxsUyYTkE2m8XgfuGzT9f1EdDvbQf9Zo4vQMSsZt81ab1qTJfX45vo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YjBX6xt6zmvTHZHbFHpAT89pEadxrgTZF8GbzXbmcg2YizLt4zZA5YHVbZiJe6UfULYrUvfFmEgegxSZ9QT29oF",
  "key1": "2PSzcvakTUkMSxci8j34MZ2BNRH6sWVtksgwiDZLVFxU7cWNbpuEQq1ZRz7BySi17KPZazNiaSrMXGaad5HY8Z4N",
  "key2": "fTYvWheHwTQDimamTXbsgDP6KyFGNoNhgE12PGTYffSWs1UrcNMdyzpXr5w3dP9syCuJzguRnmVEQicPKsiC6a4",
  "key3": "4wG8mwTkX8F16BENwU15r1SA3HfAQJcjEXza4pWXmLKDr6s5gxZixC96VgwCbfx6XEVru2PNKshWsFRKXYZXNBaZ",
  "key4": "5FLcDdmGZVfJMcc6c1TmS15mTUwmKY3SBZWFdqfkXwhiGYgb6kqv3nme2wx6WFzMjtMc1qxDgw9sSeS33duSxSg4",
  "key5": "2WhRaAtotrhg2xizrJc6W6PfFYKdTUeHu2NNP79Guh4NGufM13jUYEw5rctUzcjN4Hsqn6hsLxJrTQwqonC7PZSE",
  "key6": "4bVGAna9o73PeDUcYuHrPXDLPZhbZukwVdFTjVN3TzAsdHREW4gpDBc2aHyjQyb4KozwEs4511EcA1fbbYjacGbx",
  "key7": "2LxWxLm4B2P5EoZGoCAtZVk7MTJ27DSdRHyW5FUUJyR736fqXdzHhGBTCu9aj1jdLpGyQGVGzxf74FkXiJcjcR2x",
  "key8": "mvdk7YeHjG8EdNJJsjdLAzWdq9cpDBvkbpZRqYj3eMBjsAEMPkD9xGCWCXpAUZEhxbrxvc1iBK9p5eu4VbczKVF",
  "key9": "4tuiGTevqYVMezGrnySJjPB2CDb97GJcrZpAntJc7gosYoJHVoeVXxc4VuZQ8zDe9GnF2gWbwWW8bwEaDN47xCTT",
  "key10": "58Xbgjp6bmYTu7mwoT6bGCMFjJ1zf7RJ9GaDLdsdrcJGtQNdaC3c5hU4y4V4gdqcK9b2xMT11JiAm1ndGAsofKaw",
  "key11": "3gGDjnVxCwT3kogWqiwWqe2XVWSojTk55nH1JRBMuPF7i6PqfVdbSdDEiNUYuYkDCY3kaoznd8F7QPTsgf2paaF4",
  "key12": "2tR2yPfrcSWv4niL2SaiT23z2A19CBCoJjZ4ExWG39ADrCuk7p1K1h4ckRs2AsL7VY73HsZVThmBmPHiyhincg6R",
  "key13": "3DkgBpLH7BAkc26yF1seMdPBi2nByu7UuAcn9Qa1MPzTDVJQzDL3xbPmFcZkNRbKZJ36VvCneeNe3Gk7wTmCnhjf",
  "key14": "4RWhTv5ALmjVHup4AJNCP9thK3TSKFybumipdX2aq1wb7uSaDRxB3zWopbgmnKVd25dNnKyXmyYTf3iskT7RWhUK",
  "key15": "3gLMuKFrA8Vt2yDy8Qjism1aitQ4vXE8XASZRi2Mh8djScPHDe4TyadoTRWYLWwzemHSJzfcH3TFS18oWcJiRzwq",
  "key16": "41296Y2MiaxGGjb1Z8JzhhqTWmjvBjVVrQaaDivvh9cMZgYgYTvUYiLaRdTWtB6HLoWTvgawHnA3tAtwtydSRFNq",
  "key17": "3BKzaeRjtAQzc1d9G12qWZxKzCrhumtbbUiQQfdbE2N61iue5qFZX9S1eU5KAiVfmEWpiTRTrouYXbS8NqsuCSJj",
  "key18": "4jueb79sogMbq6LxyNiHN1UhqD3F8DvjUCWDbE6f8Rjn2odohTPgZgwjQMyqGQ9Z3ahqGXNg4cT6ZL7yKDqHWiVq",
  "key19": "3nYW6PEUDuzxtL3U5WbQBKQFjDbf3yYmvmn48S5EWgBF5XkQiPueyTVQD5ELXPmZwZq5v2xW6LQMD7MaatCGeSzp",
  "key20": "oigtd5QNaSAZMcMKQz5qLZBDpf9LnEaUEiSSwprvzFkeaxY7NKfZdgFvWJPWacxq6uPe23th9ubAhUmJzWJsTFD",
  "key21": "3uCJ3UpvX5t9uv4NFJKhNv1RescxY7EgqEmk32egkt6N4CoCcgX5P1KibHLz5fTMojwQHanMibeU1q3W7tBVkaHu",
  "key22": "4egsrMVxVHea6EZ3DmsPvaXgbWKXaV7pko4kY9qoz9Z7UF5vog2mdDxUhytdQ5aMcby3kPvFWCQrR8mT3G3F49b7",
  "key23": "2XneM1gSGGBYYRs7tUbrrARknLyqFS3tzG7jzoF39yQLHwAfFay1vwRkdraqWn3hYo4M2gpHMoA1JxAn5kvJvXG6",
  "key24": "LTCzvvneKckEuDKPFTKkKXCeSMfhejTbbNFkBZy4ucz42M4UnuLNz8tqMUFfbQoevDAAZMiWY5YSXgjXHwkBwyb",
  "key25": "Z6xoRXP2FSLt4ejRK6CDYG3mkSQvaC4YBK8JtEM1RKbCss1UFQBjefGLU1ffn7Ag7bQTkbp6SeGLgb5EVdxpdsj",
  "key26": "4ikWAYhNVMPrNSS1AVgRnsDvEvKy643C8r6zXmPF9mrT2V47wtBnDEPggfTsNhFZHhAtL8HFDn8XdjsE9QEujfiu",
  "key27": "T4n8PsxNDNep3wbtYNToFJXPHZanP2476RD398EhMzp1Qz8NXhL3LFHWAqiNxCq6L2Q6VSUX6KP54cU2M8siecn",
  "key28": "296r2EDFhBVcjj3xSP7L94UzuGfRvDJTRtLp7A6cSZjmHq5wd7eJgnvqE6L73NM7bWzWjueg3pi5CQwte5oWbb4N",
  "key29": "2bB7owf5XThovsgtwbWvsbFhs3kgqpuEfGqXdAobTHvjZjMW1N84TKzAoSQ1gzYpufVWL7FkoUbmzM3paykVmFfn",
  "key30": "3vbF6hhJewGq9UFj6meiqXjWmM1hQ6X4kPFgtGecE8LnvtrAa4pPYa1j1vxJDWqixjqWTNwRj8rt82CN9zADNn8e",
  "key31": "u4vmPs7PqPvcEsahfBxBEa7QHSzmit9Fho5ykqHP3ifycUrFYe7iSYSEQyWStuF2jUNN1aWyjZRKP5QNL6GD8UT",
  "key32": "4PxvyZ8gy53MGnHLBJmRRMvQqBuWZRwCypx3VoAhDgUvvV67srEV89b8cXej3hRLryZ1QmNu5CWNVHduZqAY77Xb",
  "key33": "3CTQSmtQEPCQmiLcDG8R3fZiZW2wAZ1btNkasAcGGn3ugyYM2bqz7KDWPe1Kq9P5pCGKZhRVHUJHA4MkrddKrzWn",
  "key34": "2AmuSbpai5yutbNukTDPDSfdKQvbycNKxQwxHHePZqyDGdoWRRdNhNiyU1eZV5o3dMBRJMqHEwTXN2Aj4bkEFxkK",
  "key35": "5EBzm9K4x8hz3fDESDqcgo7h524mrMQXrbSdKnVbYuThTs3fhiKYuuEeuE8ePtStwqyoAgbzQDcA79cEFt1nALv7"
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
