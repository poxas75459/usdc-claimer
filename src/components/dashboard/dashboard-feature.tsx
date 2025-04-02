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
    "4ebf6Pu9k3chVb41bf5qPdr2tWTfb5Xryq3SehXLPwx7HgNSiLAyEtp3NFaHJFeZQ9xDfu8LDEDXBvqdRfwicq8y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rtxqF9koTnwprD8viQfC8kx4RwsAbFNdZK5q7fpzbHxrzU8rgx2W3oNwM8umiDNxKH7KApAzFsiYsMafJtkDv9K",
  "key1": "oatrpSBMXLQ152eGzpRsdosFxmZDWU4MP8TufAeRTSChAcNGnx3HwGJCvFzYn3CY2fZEQMdFCDRJ8HusvV1iqMJ",
  "key2": "UvUq7zYM8ZD29gR2g4eb4t2uLiowhBwuQFy6qmQ2EXRop88sXANWpFKyrXDxALWaRzcLJ1zj6qXKJE3B5xB53pA",
  "key3": "3c899henWxWNnLaepSctENJCR8QM6cqdmpSox91zCHbqEcLvQKeiA4u7dgrZbz5iWWwY4QMjc2BSL7HkzqEdFss2",
  "key4": "36VAoxHc132wosTpty5JWecXSevHPQpiYVpmmjNGv6hLUwmccA9EkyfgWqdDu1GFchETkW5m8zF3epyxY3sphqk",
  "key5": "556QgWMKMCfoJ4J4vjLrFNW17jSqtQnkBcphM1mLJdD9d2udyF6Vu9KcUMvKKiiq6k9E2WSWVGNSmx9Y9WhrcZcR",
  "key6": "3x4gKRxznyNmXb8jUCZTfHTh6Jhedm4WF4UnL2XqZ1QJ2dL7wqWTPhoPtHKM5iVa5pguZiDC8gUSai6kDyDS8uzX",
  "key7": "EregSGYXNWp5S5bNDnwATVN4YUF4kRVuTxo1iNPR5ZD5gkf6Djus73BEbNLa9C1UmdXW2omzr9QSDZrZFEdtRB9",
  "key8": "3SxuQZuCSpW6H9fcwT2ak614k9ha1eNqKHN13cGN9N4EUd7fWVoUbSwPNvxCMXbVJgb6v6awCVhX3q3J2p7zFgng",
  "key9": "3qY54QCxnGLkULj985Mj6zqrCWAQGriugGnvZPUGZsVhvsw4N9eoJGazE4RiAGCusegMF816SzmfgVdW3LRfyPvV",
  "key10": "47S394VcgT6ms6vxa86VwTWqHwqGr2WhVdTvWmN7RoLU8iPJjDHbsn7nSfzo7GkiP56CAFPJd1z6vsd9Q2QQMBCs",
  "key11": "2EC2GKPdBdVtoP6cxjV5K8a1xvfAkNjduPp8QF4S26FVj2YcV8rejCwij5dKXrn7ooNn1XmP66dVjd9cmrWMjx8K",
  "key12": "5cSWknnGhCfaqAQhZvBTY6BhaDFeCD6Lyo9HDG7eUL5Fz9MDinn72Npye9E6eQ9sBTeALJGfiwKJi4QgVrDng9dr",
  "key13": "EqDik26EEWnWMxKrnXRuLEKQHacVMigD8eoo8kwdhHLug5sP3mAWyr5xDUb9E9zy6mqWsyDB5dKeancJs5hia1s",
  "key14": "2ixBhDsVDEf9nGgcJEH5jt3psSNncTBbcQEjbQsH7bdkMTpSvPinhXRXZH4FSLGo8LDqA9gCGq6NtQV6GyrQxFEt",
  "key15": "5XBUivRXYAEkEJXXJnJ6PaTHf7G3jnpDu57FgTbQjQYLEfxcg4bcfBnHrR7FQK9NiVa7fC9C7VbaL1DT4GgMhyTd",
  "key16": "bX8qqF57mjpEmP7jn7aVnCNZ1QgVDXCyNu4Meu4djoCw7mNTdUTSf5ciruk9JEpWL6qq1V5TMAvWYd2sKmHqEm2",
  "key17": "2r8QBx1CghBVrEbwQFQ44ZGw974pZaqhRbrYcmWH8okxa8HDNxBgMTcFwrQBzCpU9sB6qRy1S3d67xa5bkQi31Rw",
  "key18": "3S3KZEU3sMfK8yVcGNxspFpxLcDgVoanxrb5DtyH88ywR3xCoz5WL72GHrgD5pn3NuWR7QvZKWpcv2iqWfaaU9Jv",
  "key19": "FHA4tibG8wQ3Wa5yoD7MH1Dg58tw5FBgYLCPXyTpwb2USFBFUyN3ddgHzMBXMfQWnZgfdwodeSvbXU1xydsPQbh",
  "key20": "2UNKczYYuSNienng3H3yagCaJ2k1bf8TMGs5qMUpUg5eR1kmFfavsYVRRcZtrfDVTigYqxCUZHfis2Zzy5re3Kdp",
  "key21": "4FnG5Kd7F9bnUxherRBLpQm8hifvdTTD1YSsBbEyuUZmLiQZmQTttZ3sZdwLM4N2CS4jFNNr3u7NRz6wgJ47LmvA",
  "key22": "5gnb1QJf38FpUXi6c23s2BcQEm3Gq3QMGvaYMvboLuWEZeBV2Bd28UmPh2f1xuBQDt5RoE6izJAz37acLLacg8JN",
  "key23": "5aksg7jBNy9dsgiEQcTqFzu2pZbjwxCD1NYP95qpXdP9RGDayVUrrrCf8KzXMTQ8sLPqZKdkKdMvK18dvrzTut1J",
  "key24": "5KndTqdtg4vKF7eAqiKhZyDkqV56ZKrPFKobWpG6Kv9GB6p5RzveSuuK6wrKfnsH83MrZHQQbRpC9HRUDbxVNpS6",
  "key25": "4Q9XwTPANN2U48gCEFi5NEpuQQJGjHZi6qomNvU6sUttMJwsnNn2KDNgQfrSs1VNoVLHaCsUKNhC7C33GLfJTvhC",
  "key26": "3jotJXjv2ek6RtXiyT39Hq1PQCX5dSvLLjFWaRTshnrzitzEu35AFSTeudSX8Pmk6zKzqreHrr6fFnwDYJffVG5A",
  "key27": "4Que5KMYM1yS7Dt1TFZDMTTwa9LHcWqccSNAFceacCzq6P3BH158zkwwyG3JqTGssRzsWn95gVTrjMUwYidfF2Qc",
  "key28": "EbgcxLYSZY5wBf3eGEcjWELyFUWs7h2QfSTSphBJ8RG3rr7GXTZSuW2XpxjArAV5oSM648X4McpkH38szzZtM75",
  "key29": "2a3A4bFuuiV2LYPAAnZfJhQqjBoczo8Dxgb21S95F3vupCpscXLSVKdcZFTn9G4W1vrp4vPzNNWYW4Yej8d4fGoz",
  "key30": "58f9wGh6NjKR8qcn748Aga194RXsLLFMn57p3buAdLj9ktZUze9wv18iFnYHtCcZFLDetbQDonK56Fxzs8SJuuBC",
  "key31": "48wx1RreCJ6NeMMpBv2PPvd93fhaRg1EqGDyDr1eRFGdMW57icYXVqUiitmKrx9tcQNDKXniBC8mWU9xUtvU975T",
  "key32": "VgShD68zVaHcxD4nPGjAuEqyVyYhic295Ta8nQm1aNa87kDuWacB3Mq2ispAVPgfDaHmLv2my2RxDZTmTcG3CBw",
  "key33": "xwfJaGrqcHZcKg2ovy6Zj4woLwCMHnTXuAHAeU6SFhEnmA5FEXK8kD9NNDw6DA7UJTUabQvCBQCKpJeG3L58cLd",
  "key34": "2nhQ7rYbatrET3N8HsvBgFGNQ6MJW2zz8Kid9rgR5xwHLuDBM3efZbKLRvBGm6K8V24HPbRptGNGAP6XNvgiGNFB",
  "key35": "4jKRaQv8aowG8qdik3BhDtywuPSm1WxRXEFaGsiKGM7rJkPnPgqwZLF5Cs19SsjfeiCESb5hexeSrk3DGZXVNGZX"
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
