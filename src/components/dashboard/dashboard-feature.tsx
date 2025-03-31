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
    "2y5mMchttmduMTv3gnzwpQhJ5nghrz86N6oFFtwXaceNz2C3bYixaXZQnzkHhk1Qvi4syrfuN9fUroa5aCcnjPay"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rGDN34WcmWyvwjyZJuLWMChH8CwjZtPsKwaCYcowxRpJLJ5N1VbJrwK6m62Jkud8ST6JsQSS6a3TNtQZv4XaNTr",
  "key1": "Lj83jtFJGkErKqUp7EYUMKqXk353LUE7TPPhaTwXX4s1rkBW6yQ1c9XUKCMB1VY6fM9coCXpn7RkjMUjDjtg7nR",
  "key2": "65oBbxtTCV1ZZCRbpCAKUYWivytGmKAEgpaLyUu1vrT9StmiCMhfgaJL8tbF15zLanZAdhPWRcEGBBG1cmY6VoWV",
  "key3": "3KdWNvNgfbxavbQeRYpzV6vsNawhLmHfUGNPnvD2yutyeMqSZhQpxhxiYupjdmXRzZZBX7A6nMHCD9h6iGpNcKJn",
  "key4": "kcYsAmRbo5KQDezPTFAaxVrkLhUwrGznfEU8HnjULtJuDiQrarseA4Zti8QSVwBtHMQh2ChYjcFY7D9N6tnx1c9",
  "key5": "2p8a9vrkH96AiaqFpT7c9pmHCrnSqnZgZk45geqmmZavPgHF6JcTgELfZoRcfZPxaUNPgGtBbRMEwkpfWJXLcMMe",
  "key6": "3XR7H2ax5uGRjpkNALLATnuWLU5dX2u8kosUdq2STxzBTM69THbPAByv7cRw2uUR19wa4Q9XMHHHvYbwtk3wPkJ5",
  "key7": "4noR2bm4LHp2NLNNSqdGuw6NFmsfzvM8Jb1G1gPVzyopKkHEyrdzNtwVYuksS6J1SWLs4Qq95U8sQb6KLRQL7bVm",
  "key8": "4DyaSypMMGUy7vLyEmRBqxyJhe9BjtBTFLcMZegEXvJKjyMTg97Nfmx1PeUmwTE8viaqR8Te9kvK6mzwRYM8Jgks",
  "key9": "2vg1nc9Fms2iJH2cLfpi2qEVL2rAhAD7wbtRejt9L7pwvz8j49YDHwnPVA74qrmSwk4aucj8mnkDdw1m7pLZ1Kgb",
  "key10": "4usQtDHmWAZ6zkxjpugfdKStxLMqWf64W1MNw2mknHGzQSvFq4xzB55xUghWepWgTNhvD2F3NWgCMBS7vd7rgtit",
  "key11": "4nkqmoc6uWTEB7bazzkrKWo3aCjGsdX2bT2vFHHoUuQ7Ld8zRcgqpJzpGc4qsjds6ciHeGDZti4oxQB8aY4YNRy7",
  "key12": "5uenVuFZzETspuhg3KsfuzQ2y4LTosuEzQWnmxKz1tFV7XFL1wbDvQgTDrEEzo34mNoQShLFKGL2Re32Jq25dJeo",
  "key13": "2cHX2KABY8db23Sye6vjL2TrY8VXuFevF1KVGEuGamKukmBKdRufVTyGvH2xKK8Go7H4ckTwV113A1ykkMp1Vo5q",
  "key14": "4VsqZFyP2BVcxvJ2fv3MnpBPPWMLFBT6s1zawVmPfFYam8LqbKZ6WeHBxoAJ2KgRyFPYSjZXRwhJihf6da92iBY4",
  "key15": "3kLjfjY5VsWsWwakVMYMjGs2ManiDTMdmWPE72Qfi5ReZcXsQjLJLSBzFrCYW2nPNJc4MDQ6ywAN1Sm7mFCXqkRz",
  "key16": "iefBJgyChq3tBEecyKebKVwG3Xd1cbDK5PynP5Djoun5M8tx3V3WgUvUFriiyQWRsziR8p99kChmvsAzBND3AFs",
  "key17": "279Jj4GGUfe8CehsH1Zdk8xdEdQChZBATmDyuTUJr1AnSPshvarAsyWp3GbofUyod7Lh3DWG8gqjYeuaMGhk9WCE",
  "key18": "5uYU4E8ftPg9HnWq3VgDi3G4EWgkYtb915T6i8b89SMTNebPTvQvkGFF774jnYYUgB4doGUX9LbtWJ66ACBmMsdm",
  "key19": "4inec2fTxQRvo1aw9zQTSjhv9A3A6yahr9QGzkf6WKNaRFjhjZgX6teoGf89a2bvMBUHtKgxeQPi9QRNLnYbfF66",
  "key20": "5rFJ3qtLsqUBnycvPDzP6jR5adjzP4hcVhiNb3vxGsoZGCFk3nPmGwqb5LyqfnzJbKFgZSXpo3mVkBMp48bbXHA4",
  "key21": "5fW9Pv7K9j4z8xHWxQmBm7eovgqA9xv52LPa448LDks8fapbvgcAotkLqE2k8uR5KxneVMRZAvdq11A1jWNg4juW",
  "key22": "3BZYJi8BHbbYbUdumQwbZezxmP8CFo5WoCjdxrJHXSHJwaU735WoSqhpftDTLy5vLVbfGNun1Yngi5oTtUoieTRx",
  "key23": "ApktdapnoWskqr8Pvh4MEx5DBaPo1gkDPwDSuvrDoz5RJQLvTNLUNCwz4g9EL4EKqEdQRxhyNrqHCtjzuQu1Vhc",
  "key24": "nURVAVHHmfM77Xge9mmz7ksppyXcRmNwKnbhu21SiewXLEE4CrQNjJPHi1Q7qHqwZkkoLHWQEXyoUmokuSNx7wk",
  "key25": "2PBHVxM7aYDCP9LLtou45srTrY6DAfucDv7MCkXFfWndNdBqFENVGtyQXe8Es1zdF7vSZqvx3WL5SjdfDyCWUxBV",
  "key26": "4DAqXYTHfYMzNUttP9XxRJsRBk3Y87wfttZySjacYd3YChL8Qv2K5rfBXjd7WLZtHiuPtJqpr4Vg7D2ivRU3c3gk",
  "key27": "2VVfhgwn4kPWbW9wXWoL2zqF26dB8bTKb6MMEyVyVR8YKao2XHiZRKiW84o8A7jFmi8B1LL9NsokCSdAyLdPgh9F",
  "key28": "4bj22bFWuKfP3UdArkVmJyL2KnJKZvnkWmViRHVWNBSdiEyQxWvn4v7F4xHn8vcBB46xMF5QthpGpyQ6kVP7L77u",
  "key29": "4VoQXVt6iviYEC4K1keowoG6BWRaA8Q2jNjuFu2gTsZbht9zxXJksopFUgE8MHK1pfTscG1kQX83ur8DNHC5PBN9",
  "key30": "4xSnuJwKRvR1h2cMFNx6zfo5BzXSBVP5Y3fmXvX4H2gGLVrKaULRVy9wMXfUspQdx6Jy9KHnTqC1SfEt8pVZ1MQM",
  "key31": "3GvcrrEFJFB8cjUZZQPxyP7juoqn4Wo8yWpyfSmchpr9eUtXNdpLbGmQvts2yq8KAShjJAdjL6tm1FkfZHGuxi1P",
  "key32": "4PH84SGHHP2H9zpDGGs1Y6qxrhNLTYuQAa3bSdfYGbJnPgrZaMriPtV5sWGjUVR9Zug3xryGGLryvCDTveSyYnGf",
  "key33": "2PcrMqunvEuH8xj8HkJ55mKhMFmZJQXRmRrDhExZ5EvrFdjkrLkaztuhHiktYfdacTFwTLdT9agQ8D2WHpwZDpbU",
  "key34": "eie2x5rna5rK3AUymZJxXivuQzDeqVgrRftM5vcco433GzHHEw7b7FLnsg5N5rtTD9FfezKscnJjQDWh97p5FTK",
  "key35": "5FkRLkR6UXMM45KQ6DsLLfbYY4GbnKcpsuEPgtgtNnH15SBVwhZrHBfG7Zr24xfjxNiacULba5NDdt1ZVt2ZXi9J",
  "key36": "2Pg6vXXcRbrD2cKsgUbAUz7zmWRkTRHqdToJbSjcKTurHrT7MH1bpuaaFNi6kRKL4ksKmmqqLu3u3oQbHcA2imrP",
  "key37": "2C3HE7bCVCt3HgkFVsc6RG51p4RCkDdiU8jJnCpwT4pJvyHmyhaQo38pVKzpp82hUtXb5KDJMXcfk2jbKut8PeM2",
  "key38": "4qKWLauqSb68WoEcd8jw7vRH7h4KRqGjFFErkG2eHb2AQDi9f9R8gukfwWU9ifVBDZPnmP82TSJRVea8Vt4dRdX6",
  "key39": "R6T86kpbvBmDEEknv3dgUrKLsmX7vZiXtEJju31pexAR4Ahc6NXosLeXApAXX3N8L4LrA5h5Uh4edZC26YAC4bp",
  "key40": "4JXT94xHKgRU9mPpGTH2bQnUfX7E8dyKvxRrwrANFfpEWaC2rN9QDdvCASFrmxJ2mUUmv5jd71dV1U7aDkKyodP6",
  "key41": "3bZyqNNjQHq86e7N12386nzvZ5NQD9xRwkEekTqUAMUZcMN1BuqHHxpjvA9cWZbwU3JiRms8SEySFnqxRMd7vCEM",
  "key42": "HYafxNzmKRNyXQCuz7uR3x4vyXprTzGkZotEwyJ6KcycsjoeBVSMucTZKqqsek6SaGhFQ5hmVsyJC8MmsW5Hxa7",
  "key43": "13HcgGV7sQbakCbF79MK178XcrH1WMQq268KjXam9418jt6jfqn6Y6mUuhS3Hs4VbjKHKjLVyno5mibuY9r9ihQ",
  "key44": "a8tN2XZMrqMG9UafPvqixRRRzJzKT1By6cTXiPyD41ueSNvF4JzFaJymKNKhAKmGuYN4t6C8Z7mKTiSYFroq5wx"
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
