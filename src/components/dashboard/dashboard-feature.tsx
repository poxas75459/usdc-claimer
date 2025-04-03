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
    "4vC3QptEmZd9q58PuSb73Wz6mdrjzKiw8giUFDQ2jb6yYX6c2zngmdKefa5s8j7WcmNszJ9QSzQCq2edPMQYYJXH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25YC5wgmmLi63vinFB72M4bL4De831GWCVkgXw8NGenToQuzbsc23d9wcQn3JDTaEfaYkHjKJoiVar7eTZyk6449",
  "key1": "4gMLVDjm5Ey9n4hyCGH13ZDdj22RdthCTFvDaHsSs2J8C6EqYVdRijaG6Tz42dZVs3PkwTswfVBzmKeHJD7XdHTy",
  "key2": "2t6HT6tRxrSo6xv3PFz4nuhRe1MXJDsdRKzm3CSb8nxf6UHFj35BaiFgwydwzA7G3Emd2b7uMQFGvHQnAwB5ZMAb",
  "key3": "5iufRLW1Hsyfvw7nAr5jcV6zrCMknXySGXK7ENegLBTZuFDgQaDCZ95XPidiLar1xotWTTdnYDBZ5ExfCxkqUjUz",
  "key4": "5NocgYbxeTigajWaoYBMCJdgCXL7eCp88Qdn1TL9c9Z8UGsMiQWum68qv6YbJypDDkz8si9br16STMpNUpoLSWWz",
  "key5": "3B1aaD7uQn3gaiKJC6ouEG8FCmyShDN4nVJnLjcSUf1pj1JpZv7tcQ6ZFvxVpEdFVehJkG8qoSRr75nVHhW9VC44",
  "key6": "3duuWSh9nDhz99zzSfiutmDyEQDKP7ALrwHwEp1dGLs3K9nkYQPwADHZcYuPGvpru9GbBqWizij1wkL1RuLbMWNy",
  "key7": "4nAJhAy73MFNqywu1xapStThtWvMndnuMT1CGSqgZJw83DLRcdEQJ49HJapHmocbSvaTa5joBruaREKoMEJjRP41",
  "key8": "44Lhpcjus9Q1cvKTKPxrsbM5F1n4MPTkpWvnK44nSNTZgzZvpZ3roRBSPPF2t5iq3hfts9y6s8HZZSTNtTHGAbsU",
  "key9": "ioeiLR4RxrC8rZT7EpfEt6ocPABwkU2Gg8vs6iQCEqkBLhvXnXqKr5HQjbPL1Q555oqWdnBgQz383Xz9kxX4ZX3",
  "key10": "4yNzeLgk4PMqv4rGmiJykMvm1TwbEfZc26czvMGYzPvKbtyUUq1V8U79e7Xe8t5EToCSTBZgDP4aqtLZRMKSzo8Q",
  "key11": "CPD15Vhz1y1gpqVYuJK3AxmAnkJckbSzEfhZzfNutx2ndoeE2wSeeQKEEWrkugQAHVGzhuTJiV31LMA21nW79Hi",
  "key12": "NM2UfMndWzeakJocuG6jbyibURZY6R7a24uARb3zHD1RreJDxV5HWQi6Pg3SzdUqsgRsxyR1CTst1F56n39Pzhh",
  "key13": "3Bu9z7XE7tJJu1iQRqm1hru9bqPjJ1im58Vvgpzt8v8uXm7qr6ffcqD3c9GAqTiqsotAKtK8uMukmAKihCdjfEhL",
  "key14": "3vnjw14PGVP2qBSX5FbwaC9Zg1GFutYTru9B9JTnv3fTEzXtVznwZF2YuY1Y5bVvsNXje8NXiBqCwq88EscNRoig",
  "key15": "Wd77dXLnDuGHPeVisn2eWpZ2bKcMGKTv3733Qar1aKSAEeJYx89u7ajmPUxoZ4Xv2b2HVTovxkpzo2ovMRmSnzy",
  "key16": "4jhqbDnaJ91s7FYKgQH9uKdDNuRnqpYk8njAEUqdphr1X7feKN26ULrf6u8qiRH1npqfxggjYDToHdXuxS6eW33d",
  "key17": "4JamjMrp9XNjCGsgCDUT71x2A2feEewBfHQR9XXn8489bGfUsN7YEp6HX8EKZboG1JYXf7iGhHMgUSfDeFf5mhvi",
  "key18": "4VFsakHEiM6C2znbCFy4AMmUSArp8Qnn2ucRf7fuC8WUeng82N6PzHQVL9nR3RVnPtK6rPcKTUZhVoxkBDSGQDAt",
  "key19": "VozVVFyv2a8JegeSSNp1Ry66ZFrMexvYDv6kWS7Pb6GV8yVfCc7usfXY3PdFGnFbYLQNA1LHz8K8SpPawzKUCpq",
  "key20": "4bFmzvmzFfae2UBrLqiF6mqFzSHujL3VFctmHPinqaZcNf77LHYKdxat29D9fBYfuSgZuP6J1K8BFy2ESCcMGuuE",
  "key21": "2hFTDkFec8vEfdGPxHPygPdVgqU92JH48oXVSwz1zwNVdesDUEjHHowEG9PbRHoNZ46PQTw7urCXC29HTjfSYeFK",
  "key22": "2ju8ZXuazps7id1vW4okNb28k1E3G1vLG8CAh3rp5BJC3g3dpeRdJNsJMW9dXZAbsx8tdQju1c2JfD6yhHgroDua",
  "key23": "5joKrwf2V4miiHV2nPGZF6qf9wHJe2UXqAq9NXk8ZSFEx74qqnddN5vgBZmyjtKoVduVc7t3GL7UZYdazCnLU8Th",
  "key24": "4jmmbcavyUV8zxhy92YEj9C9ZEhv1TEeamng9jrXVgsd94rjqekaDtaJUaw7TkHJfdCZdP5n21ZumV9i6Kyd1nQv",
  "key25": "3xYX8f5VSLaLBoZ8bBnWjPueuC4MotLJiYDc7gXTvVPAwmzSkxdJ7uS5Xw3pVjghJyUgr6wtiZ2HTcsqWTo2s7En",
  "key26": "67FrfohyFyBfMmrWtxUKtJXVM8kM5S8XKwuLUacGa4gPSaUSEJ8auAiyR3kHy32PZhD69BM6cLUhFXumnEtSG18R",
  "key27": "mKQPPhsP5ZU1yPu36kUr8g6L7x78AXzkTx1qyVhBE4K8HqMiamWiTJMYWYXhUZtJYKHRZEyY1Z5A3vUQtAjgqYp",
  "key28": "2EvdpEHUyEft74xLpPBpzG8Qv2hWjhUtsy9ShB64rSfoXMmaCb6WvTiYXWPVVuRuymddmpSx7gJLC9bobXx1Gv5z",
  "key29": "2eNzYGFK7d51zXVd8aNHKmt8jCsB5De8pXDoXUu2V5iCiy3QTZVXNVsBF5KpFXXsH8YB2Zq2Vw7ZNCYbWn8i5cWE",
  "key30": "2zYjaUfyRmFzArwsVp2ehJDJTRT3Arw1Pej7eNhAsbU6DAGgfyDcTvsLG8fwMFGHqzWC15RvhMJ5g56GS6MgQFG2"
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
