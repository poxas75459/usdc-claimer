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
    "2gmx3ftb15QXE7T697scZ4FKuMzwwvF72zyNKeLyfjTT21bckZjeU9JJDSALh25fxe43c7nLmfuRBrU2R8xjHY8R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "opntJ5wrUih265v4yXH3KmSsVf3HtKUy9xFPADN6gArmwtrCjG6H32q81YoPKNXCNhDBw2pviWR3Kmw81dgws1a",
  "key1": "4M5jd86NdNMVuiza3g8n2dv4PupKb4n1j71EzajcWmKo5G1dHE16zAieRT864NoVbjRHNXAqHwcWf4dKV3FGu4pD",
  "key2": "2jL8BamPataZHj47o7Ufo7CSbjGGDKYfHK8F3y733MvWwzrFgzcLo1wyxB2j7M7yD5kJzwDntyQ9G5KQpWXGJtAS",
  "key3": "5qq3fw94c1vsCRAMBTbLi1DyvxFnQGCZ84e774t7Mp9gMQEbPxY9HPR4BqjkhwC7F8Ewukwi89QkXy1p82ukbF68",
  "key4": "4N3f6HQhVhYfi2xhmNo3egMHLRWpd2avBxC3ZJ9m6KzMYDzBrsTffhNE8eTCSN9DUFBncyeNsPAuomhDSAaqxp6F",
  "key5": "2TrZKzYuFRJ85vaTtnYshM4a2dQ4gBwCDVH6gaQMZjisZopdEDQYiPgBZSRPQTtuBgxhNbveNyKPc9upn5HRX4m7",
  "key6": "21F2NDp4WwqbNF9X3yy2dFy8Vdx41FHUuNPcRqmg5ewvEdVV6Ewym4E8byGXp66NBDVy6LWfsTwYZTCs5Ht3XHB2",
  "key7": "AraBEXTGHzX63Y17XKbiYVN25THYdgBfgqxfoYysWns1ExHqTPg9SohhBbAKk174Ww8EGtiE5bBjLJcNqtoCiJe",
  "key8": "5qPNz2KzMAXPFL1iWhCEJwVJm9zJrs2nikqpbFC2UDhSfmqGpu1uzW45ubVYU1JWQNU9aVKcQALnpz3mJQoJj4Fj",
  "key9": "3dweHagd97xNtWuapjoQ62XnAetNPM2zCnAuYXzFohLREzpLuBVKL2NftwBN4op3BQLN3yU1yTK7xRhsVMNZJWXc",
  "key10": "26rNLSroqd7dyDg2yAZWCYkitn4Bbx7uw9tpN1CqTSHbz1Nb686aRuLuGz39HdsaYDLGgx81sNfUrJWvdczoffLL",
  "key11": "36JXYXaX12sWSkH5aPDkxPDrbhfKDYAizehk4WUNYPug4dLCwWALSTs1V9rSLg5K5rMQm7d9zmd8iVEeEBDuG3mQ",
  "key12": "2ywUZEQKqv35LyEY6jM8m53pQ5BsEuKsbhTfd3wCaeYftYSb1xEsbdRFF8rbe5a3kzho6mtEZ7vfDspuG6Hdn5iN",
  "key13": "4SwfwzpsNf89t9mnFYRefCg3o2tTNWm6k7L84jPtLDGFmePeVB6GJhHhMBoYUPww1i6terJbKoFxNmDb9XcqsdbZ",
  "key14": "tLBDNfjHCXDUkCj9uafvST1VuaWXZ9ZM72ZsFZKwgcHtnoxJYr2RuHmC1m522Rf48KkDApBz85CnKq8JcBwxsrQ",
  "key15": "4cT5CmYJtMisc7wSajLkw1WBL9j121cWSQ7qNAxNpk7yKwxUYfFSpsBi3qVFpo85XaNf4Q7MZA1DbcRBBeUtHFrw",
  "key16": "jXTDCC3fb6fuQPaFXRXuNbsvSTARKayznkiyuzfRe27mScjFh9s9mQayGLHaatg34qbtqmhJG43RDXBSwG2mDfU",
  "key17": "5sohjjU4ddgworgRz7YH2aav6GeUq6poacaszNxg4bkRemKYqzfja3FJahuqEwsNBZZ8AGWbbjGAkXiTsoYY6y7m",
  "key18": "4pU8nTttGSD1zeQ6F4atFFrMyQtArHVQG5ycUWmjtrKqP6zaXPzS7E8VjDdpkfLpB4vdsYTE8LdSFvA5MH17VkbA",
  "key19": "3zUCqUf7ZBGCfYA9SJnQJXy4gUwbNn3Q16HpApNYZYVKj3cV6fSHrH45Cj1oHvTLYMHsHB9kp1qKndSmVtD9U3Sz",
  "key20": "63s22GerMG1iaNBq6E73JVTWnTjzRraxN5MZ6XcvPkkAyJojXeoMvsri1ftmQYssWmEsLjF9MbwW1QReTGWrA8DW",
  "key21": "41oaR7dxCrXp2dzjxuFyqoMBzfT2LCGLsMqcnh1ELCMfRnxticPZe8mBYjfQSdkpF9vMoLsaRrPdopeN8Cn6L3xw",
  "key22": "5NRSt1nZ1hd7CFpTYS6C8hLXyPipFaQWdHUbjLhKKwbjjKyLi97V9h1DQd6SNbdP1wheyDK7f8RpNJzsJJVW5LPR",
  "key23": "345EuFWJe78gBHpuRYTb1nKTrfswxkDFXH3KNZ2LuhJE5JwVoNJpuKAn2EdiiHVZNTuM6Q8y9fLWQLet5ERGHAjm",
  "key24": "5eLq414mNG2QMEgrpNmL1fTTaxhxWhvVyYxBaufQs9GGsoXp7yNRTCQq75BayuUb1iRucyubr2txViMSqx72ZMy2",
  "key25": "3XbcE533uASyXWP2s8hshPkegTfhNWcei2oRcGFGmnqTuRHuKXZp7KJRqpncdE4kndNzenXeF5znu1QFGFg7ALx8",
  "key26": "2ZdZQ37W6yAPaYMAhZxYdkNoGyeGbVnJ5ib34rr7uYp8xqEYALNKR5qAt3Cnw2stQKRe8eKyqKEUj978SDrXkfXp",
  "key27": "2qwaQEdQJrtXHKeYzm2PGVMKrr2Hu9FjR7TftXQUXdjcPBfbb2Sp1EBDyGfwuJiDFrzarFAV1wQT1s5uNmngN1Ct",
  "key28": "32f25aC43fpFnMngsLmaEf3asRTEckoSRDEhnqDStMYmBfJHR1YkgxDY8LEQuj8hH5f7JaG3XWznVWbpmKKJMnJh",
  "key29": "gvwjhAFNAg8KqvijX4uWtXZBpxzmV8Eb1pdGsnLgfaLJBWKvAdayoQHWW2TVpb9aeHuSXHH98uWEZJnRVd5SHce",
  "key30": "484yEwVMYcVqYKdhVuNNpGEgrYuG5Lbm4yYfudpoP7bVk2QLXKfL1TZ7FfrwzqkiUJU3FxWrL9UYJSvBHBZtBZyt",
  "key31": "2cSxo5ALQZ1GtLNzQZTd1minfP1Z1ATkvFHgrQgoBrc3zA9M11nVSpJ1RWmQyS5M9doM8HUwXTgYhvMkcioLp8Y7",
  "key32": "5Pj9kWowyBmpAft5kDHmESyde27uY48ECA8qQR54cWheEiDiqWFfTLmPpJFPLdYbiTyQxo1WGBgUNbwgydHHeKeD",
  "key33": "4QFHjFCGHNE9PXvfcHSwecNpromhxtxnx4X6Aq6jz2zr683VWMQLJxBs8TtThDbnMxA5MkCmsN6esuWn1HteG5hz"
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
