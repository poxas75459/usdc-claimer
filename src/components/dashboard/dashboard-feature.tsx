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
    "4NTC6PUiBuivBmGEHJX7bfsJgzYszCoYQooLnfQLngFtcfmhDSc6aX1F2e7qSMTkFrGxpu4hwTRjUotoGMc7d9Gx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bYEze1ozbsiZhuTwwqskCJ6f2H3p1RzxkE3CQyjp6gra3sZ1VsCB66vApp8ZrKCQn5Q62WZvRdFkebqdtsHktJN",
  "key1": "foz8uG6JcXjEknNacqrSaiNYzdbHLZyfSxPN3wThzJTHrkFUwc6NHhkev59jsjm3oC6QMotnLm2R7ooYJ4SSCnm",
  "key2": "M56YrieyGueHPbUpjw6y17jogVnZFsigoEm2vGphZh8XrkVh1D5afgtR3k7Hv1MZ9BjLsg6t6UmU42x34ezwasj",
  "key3": "QN4ubiWyYZyLS5XwGheNQi8Gvc3qxTqefBTncq6PyfDKFeJ17tAqkGixfP8kvTBh2EhmYwJxaDzSifHALBqCNp6",
  "key4": "3AHSrMCBHfxLjFvUnQifsEHoRhj5e9CHH7D92ECU37FTFpefu4Bs1aK99mcn9Sk1GjsKd7dC1iUxpvU6AaLgdEjo",
  "key5": "4Haxtvk7mXpTQGVbyH371xHibMbJKSuLCBzNtGUKHA9SwowSNagdDwAdgGmetP6PHvRFw7J76Fz5uP4hBAhZQzPy",
  "key6": "55AKHvmmiD51vBN2GDS3h94ghGy32wax75gg5h9T8xrRE4fnDw2KbdrnfJe6EbS5c23seFMaEufHogwmK1gCa3UQ",
  "key7": "2SujdbyCByPr41dw2UVx7Nzw14G2A2V9Tdv2e45iubYmZFqB8zKaNNGadfMpJQ4kpHK4Z7aWEqAV15k3GyQdCTDg",
  "key8": "4KXpSYrdR9jSPCNYAMj8ejXoJh7CtXQkHRVr15hmyGA9pkqMwJyq9E2ZzdAPjAUWn6iM1Z43UF3skgeessM7tKPx",
  "key9": "5rtJLc7Ydr4j58QNH3LTrjSG8dAv1ZQTkf1qcXqEUEXipnSoGEmYbwudSCmzdVJvHqbvDifDAkZaBP6aSmnmKuUt",
  "key10": "2atydNH6ZqLEDSjmZPBA6VsXM3erTgk6AwweQPPM1KQQCzwmvBzRLKmiCrsBGUWd1JRPkaVbPTGwZnKDTRrfngY6",
  "key11": "5bYeXcANpnD2w1EJjefESy4HEGi3ymmSeeX3tWks263dBjSMVJgwp9iGmUyGF1dK3qf4N8QA7KxS46c6bN8Atgog",
  "key12": "5Pn9FuX3LwVFAywHaBRyH4CF1HL5GRiVoW2e7DLyX5vZxRM82x31LKpR14tjXs4QYMobuzT8zMdWxpZ5ndWHGK3t",
  "key13": "4BpEahKjKb31RngbYqctx46R519P1h9keKCTzJX85YgcUKccJPFT2jYJhZnD6EQUbGsqr2EE4ScRTrnef9vsPcDx",
  "key14": "5cdPbcVrRUGftbf8uFMF4imAuDrqmtxvMmM8ineYqGs37wwGMoAurSuhYq8HykYWwFFrLEb67hMYp3ixWgw9G6jj",
  "key15": "5PdpqdM2FzDhqmpZv3Wer286pUGCvgfzuVdYFoGeyFjrMBQq3byYYaSd3emk1ki1pyiLyYPQupSyWbCM42bwgrpR",
  "key16": "nsjugjKRJtbSNJKRdVT8hRkCY3diRjqqUsQvobevYkBCWPJCqfqvfakp4PG5hcQkMNYuVHmejmJ1v3pEvyyeSzp",
  "key17": "27pFZaXp8GxoVWMkA7sha5dVTXzhFGpmvjPuseZMfatmjwP1VnUjhMFkKQNUSjxhBfjuKyFhFmGKurFZZBaKcqfA",
  "key18": "335pRaKZE69i18koJJvpvuEeRTiBUUQS91sSTCs6APFt9vJFAmMzeMu6pN769XHfYRXAhrrEGdWaYk8EphvKWMcu",
  "key19": "C91Wj7e8tLbt7ik8htYWJ3Yqf1RcbRHuEXwNhnvfpeMZwJ5CVUK4YfZDv4YqEGnYVfTFjjyQ3yfqSeUj4GPpPCm",
  "key20": "5TG2BB4jzoGjCJ55jy5iJuDT99hj76T6H1xsjyCrcCKbLnq1HBfnY2VbLioHpMymoJrceMvR26NgwcHdga2cRbaD",
  "key21": "2iApDi1f2p57mVBJzDGS24ApfzyKtnuB2SiDq9PfgV7axdmeXDJmo6hFyn7xqRv6cEXMFvUtu6M2Nz85rLcQxxwb",
  "key22": "48TgzeSYsKSKuEXWHLGw1hWdH6z3M2ZA6C161XysMrFTdUiR2j4x2DvibBzu9VV5xuEDT86B47t4PCPwe5r1ZodT",
  "key23": "25DruHU1PYifNkDtVQqNmZX4MxXABbBPCNzmHsTatp2EggK5kNCGSWYvHNKnVbfg9srbrWAbr3sGHvTWZakid3XY",
  "key24": "37jYjrNDXgwjoq7dBpnT3QyTauBLA4Bsf42tGM9GfZ53hHCbe1fhSxvxDzJNzW5aibnnzowGtKRUqBajW1k3e3SZ",
  "key25": "2QmkZaxg6r3sj9vh9sQnYdFDAE1LB6tFSW75wBwdQRYb9FxZgSh59SD6AScqeBoeUihhmCCaQBLj85RCdake8Hth",
  "key26": "5kucbvSMMrqYJi2PAppMxKv75PtNQHKb6DkPNTy3H1szjCSs9HjcBKRFtjPfeVaeWtDaa57WpyS9M8sbSWuaWPdj"
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
