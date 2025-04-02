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
    "2rJxsD5YWM47A1Qh8NDSK2FwqLjfMMXScGtDabatK2KWuushVN1Ax1EyzmMNnyMuwwiRPgPah3vMB5yEjXBX3SN5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p1ak7CrReNrAneT3K5LZZRhnaEQre9Md2crJia4UspzbLdeprNJJqyRKxxc3ioRae2phZf7Ce6RP4mU8fXgcNRE",
  "key1": "vMqmoRJcLwsbfzmotPzAzYZqfAKKTDnehD8Uzctg1o5yA434rhCeTnowAGwvJFpSh8arNfjtG6pDMUt8vXw2G2P",
  "key2": "2e1gibvVd1s2YomqJ2jd8n97daGP6AYSRpo9v3NJrUhJCxcJwaoNjVc7hD3Rs9U1arsZEouUACaL1SbPbE2DDoy5",
  "key3": "4izhWWVhKkj657GDe3cff8tVQCpVxyn2EJd4zS1Kh4tY54X7QY5kW16Rr6H3TTqDGWWSVzNYz5e8oaatAAR5THDG",
  "key4": "5W4a9c9P7cGUrBRZaR41UUz2XJUqg2DdQDzQU3K531xgtrk2wHDA3p2TjPkauDsDzdVP5BPRWUxPVy6z9Sqz1NSC",
  "key5": "28dnFmpobfCzvBJ6hMUw9oaRFXpUDfLEMyatuBkwickgGgu1ThZiNar6qEoeKDz2AXGbFqJ6K99c4TrP4YjuvEWB",
  "key6": "4jfZBAUK1mgD4ode6VWqyDvdvUDpqQJtCwY2jsAHQWGSPiDXBe3oxyaoCWTo2YMfZVeA1qi2mKnszc8iczrZpKg",
  "key7": "45zaJdFymxv4oXk463qGHxPbnizhZk65ZZXsbtL7XgN8P9yUcGmFz6BCfhgYzdKE6zYReXzvprtpZTA86V2fUJJH",
  "key8": "3srYeypgkZtoroWkrdxDbPi6Hyc1LpaAKpUfUfH235KwZ4N16QXfuGr8Qqadp3w2kM9Zn5Vdma6n1Fsk3WZLKF8B",
  "key9": "4kMcZZidWKYNepwykHdmrCHgK3tnmB8TMQJYuqswDD2yRRsjLcLtAukBNhGM35wQPJyhyn8vYbWMiLfQ2BjFKmK2",
  "key10": "45BVpFsVW7pfCnVsoW7xFyCscwL1GeMj5xfqCkA4PYwkCwhX89moHLKebt1ihJa5VGHyMvvY3VvzqLKbKNpA4FGe",
  "key11": "5UpEzt9AUekG6p2XL1WvxtjqzXiHX5S1VMV1fa2r2AVXkHN8fST33ChzrgpMS9eMmHSUnpvRSzkLvRVpaZSgcYaF",
  "key12": "5CvhApSwWLi7FAmuSQwvRJZBxt6RM4UXvJ1hjpC9uh8zP9HwGtThAdnQJWtSTX3dYmcTuk77zy7xb1diptbQ8o7j",
  "key13": "38NfFaTqXL3PHbMJC4CFT7m7MZAvcgU38DJPMdELS81DpJeg4LRATbXVw3rtztTyeWqmmXtZV5hKw5pfqDToPNML",
  "key14": "377EdRea3Jdzcf6ZfsAuYrKQT8U9oKpSkUitQASmpMX7TjmRbLvbPQdM3Cc25Tiq3E6ccihZWM76fmWUmNuvQ6mg",
  "key15": "1vQFFmUbdQeGEoms4coGmKKcPqAMJYsvfqcfKVV78H9p8tnRyZHxmxDj62rs5xbbqFbmK1svTRqPJtT8DhzBVsB",
  "key16": "ySRStoe5LZri644T2dZpxMA4eCTzWckYBJU9nhTAoQajiKY5kLYSxMpcE9AtjL6zo7G6Qn9Q6rJQ1aAj755kbx5",
  "key17": "5WUSgjiS3CgJFVf4Vs18YdUQh5mf8WydvGz1axXGNwP1zaNnEvM4TmseCPWYMxFePYuHJGWuPMbZ7fLTGoYWJFT5",
  "key18": "2NGDaqopd8cqcZyp4svXYgdmAvveUhUWmXZavCbCFjroLRuurX9GKRpDWNLZFNC26dXSsNm8jBGY6DKcAXRkKRG7",
  "key19": "i7djfhxhUem5o2a2k82CtG2uSNhjmYckHBgwDh32jJtmfqPYjJpHwnChTvc1Jii1wbraE8ACk7k7ZA8z7ELQud6",
  "key20": "62WtQ13HV9yWXSrD4WhLecvSXB3xvdoLjW5mRT6LpuDfmgog4t7M46stsobZHuzU8aDFKEPeqPChTrQ24vEpQWTK",
  "key21": "3uA3sxPUzE2Zb6R58VCiArS4bUyCtyGaqzXEUN6TBzNiatt7eYJtrGNpGkuaihPQCK3QaaDtrCpfiq7Ptf6S1kxo",
  "key22": "8uftGNoEfcM8WNqttQKAL976yn8dPik9x8MNRKBDAUuzKJqJc3U3hUUvNpGmwJ497WGUjrdk8mCHETvEoXTD6Xa",
  "key23": "4di8CPCVpVBHbX7bogLigykBpdtiNDJ8ULxu5miDRboYiJuMqmSeFYvagihehQuE8g3frJgmDh3txDUbwNw4anE9",
  "key24": "dWuAfczzryosYnVsVU2uwAcJ7zsHBZdwx2cAhdLc2xRczuo98dfqDfgwaTBMpNkHy72TygnZXnptyJVZhyxJEBu",
  "key25": "5o6VV9MjQzp9MFHEDVH192vnFVphi9dYgrByh1b14d2eMiuUyit5T4PiAPw3xXaBQSeJh9aaJZhDaKgTy1DViEPj",
  "key26": "2gikpLRoGFcCsY9J6QtMsc9m94cA5wrvNDc9CGKQpZx3FmtRzmUMkAEA5vwZBcrtZ6NVSX8feGohbMqSnrHK5Txu",
  "key27": "3a8axNVy3wiP6wppQWdc5k2kmRxYFsomPFEmVzm5mANGGHSsrocHXv8xhYzQuciqe64sbFNkLAyJ4C4KHj5Aw3iR",
  "key28": "2pn2UsqrX9zanbsbt4BtnQdEUQ6cvfPPdLbBt7FGePybyN7EoieDJcuyCmyUpkTN2Nq6XgbLDX9n2wLykGXjTKby",
  "key29": "57xsU5AjsqSrsY6iY5ywFoGHjnfHEYtYv6mBaF3rjtATaMpsDeiK4op7mW7s5QDmiwANWqar5rik49uD76Xko2oC",
  "key30": "eU8TngLSQGWSnnN3WAuWm9CFwt7w5TCfDSdnjhqrVQTLMTWmz2HEt5rsakjV7RzmbDgixfdwzpcz5DiaRaMkB4G",
  "key31": "5FCWBKTUuWf2uEJzTxDktGrL6WtVWhEBA6KUaMkM7WjbJkxn2SoCjbJF4n2NTUt9RBXtrr7ykvW6MT3eaYTGMite",
  "key32": "2d2FQLKsebTDCEdQHz4xpNswTudTZAXSGd9iTrWRGpUhZcpfv9Q98Y4dLhfTD2qw5XkzbcuDVRskL11FLyNqXQet",
  "key33": "KE9VxCbbgpYfv7Lb6oFEQ88cY2DurECrNgqdCtFuJ6r2TSYPJRq5UQh5h8ybNoPieRDbWmCLYgvE2GspKoSrHxE",
  "key34": "4g7R3CJbp4FLyt9sCrXvS1srr98Bsp8t4XMK3wXokwoGfRGe7WMZBVtuKPEgAJWZ8CkiAqF4KqSNYUFSwstb1KPC",
  "key35": "4KFFu6Q6D8dEVsNTxaFVi6jijB3Ps6ipp4Kkx4EP8YpYv8pJJDQTDsrBGHmfGJAXdmzAeKoFmyDKHsN4xTsCqSmi",
  "key36": "5L4KBd9gV1C4femWbDagQH3fjiZiGXUaotG9qu4XVA4ExjZbZ7u6Z3dFw3JNg2YRmPson9ioBfNFvX7uuDGrmNCG",
  "key37": "5RuYW9tPwptK9rcDoNwEFmfPCXQf8vrhcb7AmWbhyCpnVE1E2qthiwXPS5ysdLTryJFjZWy26J477JbiP2NMwWAo"
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
