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
    "219QY4Cn6xqnqDUeJ2TF9SpVSZZGPXsgLikqLGLRsXuUNF9GWRDfKQwzAnP4oLTZm7De47HV4m6sPQoZBRiRyqP9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54DD9TRJKut4w2hQszR2UHxmCrjdRsPqRWkGUK2kRBG6Co6e74YhJRJDwQMUdFrbquNwxTc4pvVFra1dj9yFwgKK",
  "key1": "4U8chcjFv1SSBsNn6omDMsPHuE4YSr5ebLbYeUR95gJGDoF4AyBb4K445NhutNQYr1vMmTtwhmgNMmD4MUCYe2xd",
  "key2": "2ZP1WfR2hgfuVmmbxoWYh6Q7m5FguZvMnojjdRC7LQKZiUdWmJAwZo41Gq9QYt1vpf7m1ntmReiiHHSUHTgEF6Ta",
  "key3": "2yVMci3PNwrk2mmE2XaDgHGap2k6tNWiPjLPiWS7Q4ycuaadnb3Z1QS3daz2q7bvPvRxahztRfCf6URajyYh6rm7",
  "key4": "5bZNguKqCHaK4wVNPzHoLEvLkwbUD2JAiFf9sqdnmsxYe7XjcfgXExWECcSNPrFd57q5Enf9Fpt1t43KTkRFY8yc",
  "key5": "5iQU1hcdRSyLS42w5pxYQoxUhir9P68coWfbbBJJmknHYKtK9Qj5k8Y4qLjfYVNnZV7BMvFaeMMETcTS7WFAsyj",
  "key6": "42eymURgbz65rrre3kHyLmaARZfVkq7VV19NRJwXqQnMCXWKYMkCzPKdqyy2bzqUBUt6fJKGUCyAZsknEXUeEKKw",
  "key7": "4H3TZeEckuTu9GXUji5iASMqUhCHuJuTdttJUvn4jn5orqxZ3DuFDV6UZozoa842apxz89AyD65DMbtEk2AR9wdp",
  "key8": "4e4Ugfn8XT5QBHoDtNdz6yUoFW9Wjso7pzETnCrjzefEHHxWZVz7Uo3UxMe21KCimbFdimAfh18pfLTok6coHvqq",
  "key9": "28fPkjCZHhE7wBZj8h8JCqHiEEB1KKpR1UNKmGLapEUkyN8NZzpHzvNX3PiArm2KQjtQg5BUMuvg7UR4jo2Jy6WR",
  "key10": "5gJkcktVvyHg1jCkytXoPvbVgfii6FCfHig1Z3EMqfuMgkVEhioMwFq1YjbvpTegqq7jTNUhuHBhFFPcukemdEnk",
  "key11": "2iKqXPN1mLcmvdKDbLNzDHw6M4aeDKBNWQRBD5jtvFRiH7Z1ZJ13gtrLER1bkfmKoMpBHnYmcVHhGrECQwzXomfs",
  "key12": "512zzvBjvTPkEcfYSp9KxgJzk4teSB4pMeSzvfgJsfMcRSQUQUoKVxRtGXd4iQeJcpTATPBtm7qxvSY2nwhsNPqD",
  "key13": "ctZ7BMu6bJx9dS2J7BZgNxMSAmJvXQf5pcTfmxytVkrjk7PTXhewjTEJStjRbwpuR3YLKREL1roYQsBCXKcR2ru",
  "key14": "4kmeVXDE42CnKzuqsa3k9euyXAgCKmBetNsP78yf3LaC61e9zbc624vMmw62gJhqcSEAwnH2vSU7SAcisXCGA7To",
  "key15": "3qa8dfyBACg9UCrDzr9JRdYVqdiYSNj3n8sHKubgfKoToHyEzpnVKHHs7Qv5otDdnUKs3Ja5kMYAg959jyyhuWC4",
  "key16": "4yvXS3rmPkeaywee5A8nmmfnmGFFF8h6t9Rv68EeYUzaCpb2WAfWGSiDHmTjmfLTi4QvqBwRZzgf2fPdyDbCHdrk",
  "key17": "4jx7TwNEbroBPH1VBR5c8wwbNMV4uJog3w3HKBRmiBbkMBXUdmTwU77R5UBX5PXXVQTjFtccMFPJ6SKzaUv7xpfz",
  "key18": "LpggQUcigA2EWgfnZ8FEXUfBCfWaydAADZ4jLw1bs18Fer1ViJ9gqp3M7CrRipKtGYDtWC27RnAUgC6iFs6NP2b",
  "key19": "dkpPcrYD8RZNuYEddQQJAhEm47jGFai3rec1syExkPE4v1yqkAqmSakYkuVVmiiQsydhz8gLmFbe7jMw1iKCt5S",
  "key20": "2exCDbjJ7srYWYR4EuGtmKRYjBzr6713QyTQVLYz2NwM2a93AL6s2jitqyz7c1qAjD1z3yArzuuBN4F9bcXM5V4K",
  "key21": "4qNSRwqop1tLCPFtiBiwggvyUCBaannDZBmru9iFd9oiinGdbvvUPzFPUf4F7vcFXBCZeb2PVrc9LdgNrLWgEt4g",
  "key22": "5k7rGvisa9txQVwyB2a8ErxLxTqFbMoE3zQA13We8U84XrCwQiWVx2UfGokAjkxXSYYirrdvTrMWcJygLWrefnC3",
  "key23": "5uk5zjndyFk6FNARe9MgewSESgf9RvodpiGC9hkKsAVab1a6uomehqyrBpqXayU1HMHBrXCsEADH82YijvVnR5Gf",
  "key24": "4SPxYsPqSwsNnBzWA6ghCs692YN9xs52PQYoN5PgpcHnw3ivZqkggtT6r9BVJ5k3QHTeeNSjzsgVxv2khGHDz8ST",
  "key25": "5JaeMYk1HpagiTvEktHNBEsjuDzWHQTh5QRvU28ZWd8FAQhNEeLyGjDXVc92vTgmbPfVMT4kWwFt5FdqSwwA89dU",
  "key26": "533Q86e3AKnnhShdomvN3b9PLqWoo9CGBAjXmBV74WAGThhuUENDpAW8RX1WXzjT2FdHYKsmwz8UFDb5jqpM4Zxd",
  "key27": "2xnXSZNF1VxfwzWYjoKEVqvHnsv1iLDdSdeHXERpM5tedsMqwL7S6kFSzXhSkjM2WWDEB6RseHb1AVqxTBh2qgD1",
  "key28": "22Wv2xxkgP6ZawhVAvwfhSM9qv53L9Uwa2kiHLD2PXENeKTMRoQMqxiadbsYCG8Ay74BqXDDFYq7JouFqJLQrDxg",
  "key29": "5N6Ff8CugU3hB2CZKHfiDd53Bd4fqCn52vA1RxV5avE3i11u5kYsfNpUTpEmck2n4Nmr7PqtoXJU2TcUpdmMo2bs",
  "key30": "2vvwx2RbWaBeaa5Mc4W8Coxd67S5nZsnFugDF5fefEZf6YBNgJ3skGVGzPveSqK6J8DfcZxW8t3ZVz8Yw5E5WG7s",
  "key31": "3dL8c14gfXYAM3fp4JzyXtwFtfj9gSRmJNwSfkPjmRHVJY3fhxkKi13QpxC3K1CVhyHX1hiCJor6BBhfnpGN8xzj",
  "key32": "64c6FEouUQHhANPVSkkj1YDmuEV5aWdNdzRWxyfZxupkqi4G3Xuhnu9xk7pW5gAgWxMARfwDFJvzKmuCfRNTGBv7",
  "key33": "2csdCq9kejjcQi1un9PP4tmuoUKpsA8q7eMUidAqcKoxUzB96xC2cTWWATZtysqqY2iEXJd39sc2muiXtdz6gaHv",
  "key34": "Mwbm7xXCyoHTgkP9zRf33CwodGnofCAAGbH6PdrfVqLeKFzBUmTsV9qScEewfsR2JAXXP9N7tgrqthEcqcgTpax",
  "key35": "5pN1E5MoXytu6eLak5XnyXYwVUeVKKbB9SzTnWgGUL2iUJ8qwZQauhMiJxQtw92knzD6z7zopFq7pMYtdptrp6pM",
  "key36": "31eZGzLNhNnhD45iQzd1oe8oZxctfxddwWd8yc9mMf8nLtvAM7U2j5bYDnxqEWNWD1ybShUmZomp5Vt4SY4qhm69"
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
