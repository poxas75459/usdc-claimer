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
    "5aeLAkvjSMcxESjrrme9Ba5tqq4iwQ96qhfRsGvmPHECExeWh1BdDYPgPdAmw3d4YZkX5otLuabd627v6v6y5Xga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "op3zSr7vVCdtUpvf6SsZQs19vhkiVPWiNpUahQSFSoPue4ECNud9bRcs2jY3Zq3CuJcP3iErVLkUTb37qSnUQaq",
  "key1": "4bCmCcGRp6mVvEL7aBqU7JMLAEPxpRyBjB4RanrwShREnue1Ckq7pncw8kygMbSHNh1HLW5Sus8LuXfMM8bH3i5L",
  "key2": "4G6K5zj1ZqGGdrQgHrmfpXcqZiZUM3BJUB7D7fn8NKRmAcKxqHEvEJhT4NbtJ6jvnyXpxVEzD6j72dReCFSJYW5g",
  "key3": "2T3BocndRZUH2Mr5H9CEBfXjXnnJ99w2Z67RXsHFpYDYvGw5GZcdpnGax5AE7mqTGp58EAD5BGuLUMUJhsiZCS2R",
  "key4": "5AX61A9P9TrrU15pAmMFNDHLfxqA9Mu8s2QsGrMxH8KLhfJdNYBJPmZ3xrULBJ9C3EPNPwQ3socLrC4F5iQZnF9B",
  "key5": "Y9av5Q5bG8mktqH55J6syyLaDdNTnK6UuRn45aHBWnpibQzKMpt7VRhq589PjBCYQkscqFCfNXeZvmL6N5NfaZK",
  "key6": "61bhiS7kfyim184iJXKr4sNWaVab8N29BF7ZUBNJBXw82wq3D6eULQ9qZg3kppjFtXu9QzH38G6dxMg2Yxi4BBid",
  "key7": "2kKaBpykKGmi9FPiSyhCG2vwY3fDSbPixxcDxacWDm1AS587dpe8afvx22XS2hJMpEwfdiEAxijm5y3pmAdjZyhU",
  "key8": "5QVZzZ9uQVzKGsmNTDXwnQcWXWwgznqcmV4CXSktfAGZsXa1RJvpJBi1oHMGQCAcysDUgq6dJWSzSoNXdc1hg7ha",
  "key9": "4ruJxj8Q8aTGf9yD9NaBSiZVtzBS2P7aTWAUdM1NwZdkJaD7Y1URkCZ5HAw1Jif5QJHBbSvmHCR2A3ZaRr5WWxau",
  "key10": "vkuCag9fJ4FQpsUAM9p9LbwwKQtoKMteAZu9XTZSB3TvcGgazjXpuSKyKZdXuHKYDDfW8JijTZhkQorJut1xsRY",
  "key11": "35WPRnCM715eToAmQFJMh8Thsdc9vo1XTVKGn8cBNR2iP3iS74CpnK9rZo8U2JXc1f9LZWYm1GBuUWDAasAy7HRe",
  "key12": "39Lp4p2Dub6r7gEkXfL7esvbuX9TNnGMsgwo4Wvy9wQZppSw9U1r5HNPwA9sd3tyTAtke9BQf6RmLkjrpEyJY6za",
  "key13": "5sevW7gR98HeEPjuhHEMRirQCZALe9w2KtaxhLw3Jbj3TF3bQRDprWhfv8T83CNkMZzgioakbfV33vNaH5zyoq2x",
  "key14": "2VmCVf8SUP4v5Yk96uJrUyxDVAh4quF2i3xhvDNrdZPEU2U4GKWWihjaws2rHNhH8SWNL4dQDS2QsR9r4vrQY1ce",
  "key15": "3iWvQuQofjhMtXgXFDpdPr4vp3N6wSk2sVzyk99zSK57m6Tw7314w9pwpgGa7o7GSVcnZ4EQJM14CNbHnqrW1Tix",
  "key16": "26GgEgB6Kb2B38nyfQVRBbgy8bRWwK3NfvwczbCftC573vUgQRGquRDNQbqvk1U1JEp3VyUu78wSfCCSYv9au1fv",
  "key17": "4VyoiJcadw7r8owJdoBQzArdMF4RwvGoGW9nyNXuph12v2hMwZtHZotjfQte7nUyHHrZeU1g1fynJbDhZDSJtQQb",
  "key18": "4Pv6vMPN9RWnCEA2sZhF6oxUvjJHbspCHhvLweEoBYgRHRQ4bXecnGzDPNPpfFrAr3LJWxVKgBc9XYaDFiq8KNcx",
  "key19": "5bk4pzgM6sAGG6AezUYjjvPJcd7rneLkWF68ndfu2Nk4qknmP1XuUkgmmGnsuFruGSgdkbapbvmyoYaCqY2aAiWA",
  "key20": "cUQWxrHAKW8GZQWVfriRHxWp4TELi4vfxLorDT7huBcrp1jTSLcPM2vcyrhFksx5o3Bt1L8XehCKNf1ZmWTcPb4",
  "key21": "23bhPJ9fsSx5JSh7jmBHfxSJUbm9pZoSUZ9MQetksWxPxiwe8gLL2JSXuVubUSVqvefobwP9EE7auaY7FXaZVZ28",
  "key22": "3ehMzx9wyKx7ex66hFqyyNWR2FBjpVBpNyvSE84YHEKEjaApfW1daxuaU7S9Buq9Q7q3hAF3AivZFx3BPAiAc1cH",
  "key23": "3wKA8sy3zh91GQm9Emenb8snXW2H9koeZjBKVztcruwceXjp9SXm182X7UGY8mYzRLnSFkcL6LzMG7Z5kBMv83QU",
  "key24": "WMH3vUmCu5Um5h2Vb6rBmJZgitdB4e1yqGPr3W8H5DnsN6w4WZrUYts9TeRTYprGm3gzTXf5oe95GufnKxfKEYU",
  "key25": "2HvpD2uUSGbLVi3j42kWCPwWCLAe9aqQhJE7SUiAy2AhmriwJm26m4mpqzW84QtthkRyzyBcAK1AXwSZEcoLBnvZ",
  "key26": "3PE3L3pqBiV1rrn1Wz3ZJAx961MTbJMMCzBiG8k5EeAXmdgydQUDgZgS9TM3YJzpoy5TAmEJ2HG7CnSHydZZxkgH",
  "key27": "5BDfLSBS7YJaZccdDqdaTQtbvwHggviH41mUfrgWLiseXSSapZ1y5A4pBtAap4qYKkrcTnEz8KgbBV9CRRNQW4QF",
  "key28": "DRDMaHbf6WSwn2RsTc2waykF3Sic37ttEDQPgFVi5ykyyhbuztj1SxPGrCkq9bjpSCxbj559xidNvTH29d2SRZy",
  "key29": "5k2yoQKkmfKSgA99NzpK8idMSHTfXWSNdKoFXQLrFwX5pNS6uGiQ3Cyc9xhoRs5dg6s6EpEV9L7BY2QjPb2dVtUx",
  "key30": "4tni1MDbFsBBRVGjrq8j8wyeJ3EJXbzFXrxZJ3aiE1XNH4Gn2tzDG8HnYQPLMRHmDso8J7VpGKqi8bSzPWASjNeo",
  "key31": "62K9GePTuekcq8BL5n9cFDCssh8tToXUbicXPasiu2xuZgiV2C82nHL2CUPYXFxGHunkQWWnySNzwc8CjvNBd6SD"
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
