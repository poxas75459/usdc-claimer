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
    "5MFSz72P3dZ2pa83TFFHXScaVsGmRn9CFsoD5ehWPbFcr5AayvseGKksNGtja28qoE2vGCXYJqRXnKU9zwTusPfc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wEEmSj8kN7thQ73Stz9GmUc1ttvozrnyU6WkR7vTLQkTqyzVoGigVRqNM1AAjDKMk7zm1BTd8UuAcwqykZTDoqs",
  "key1": "2mxGwvyGbwdcJSDS7aJL7qrt1He3Lw5FQgnZM9q691WsZi1VTgRbCy5XVMXvJfyhL41ryDuASAjfxPBzbGWbv1fi",
  "key2": "5MWt8pHRHq3sYiG9ZYmhQpdz1Kp6rTdx4Q3frYp7eJmFYhy3vFd3MucJPvSDHWPhJtyTpujEWE1CNipQKtL4PgHC",
  "key3": "34w41b1DAp4KE6ZKhbfu1BCKHpk9eBnWVuHGQYpPdikBegVgdhPMqAarzFGMgQcaPoTZxkbC8tyZzHBJGiQ6D1Uo",
  "key4": "7g5L4mudhf5hBjmy4pb84An8r8rW8Nu9pQBrLPEmpBGK3z7MHaSdhrqd1bYZQt92CpCGqspRHcfFdxd3VBXjqaZ",
  "key5": "24cWWNRMt4YXznZiY5X7An9c4LaGDrebNcpQXMQ6c5DfheLrjSMGBKzCYQAThfdBqjPyiwVbKDEmuShXg5G8HMbw",
  "key6": "VADXU1tjraoKxnVuxXWgUVKqLYPSPAjaKU9zyLqcPopz3PSE828rknv2SNfjCEXVyMbsEjtiuYY8jjaZFhtqBHf",
  "key7": "4Uy4RNC2iDEAJ1x7GYiiLpK3hExR86msVNMZeUWyWio6cxTeKB1zew5FpVAoBs21wPPgxRWNgpRcTV5sMouRtD7k",
  "key8": "4ojFciZyiHJkZRvTziaZUi589SKX8AjFfS38jG8PpN9X3kwELDBbqfLMzfxQRNwQ7AtqzPFfW6Y9M3N3xrRKjgiX",
  "key9": "24V1TqEBqE9gT9AwKzX3JgmZ3RKAaqydadn3MyyTziJRSQ5HiWQ53N7uuirUVLGBw8MVoRc7Ext42ZtDdzjKWMAK",
  "key10": "461d5UDSMoPQXFpsDiaKKhfjkT2LrR15rrEBdi9zKpqEmcYgpJpKiwjsAEBSmZnZzAUAPm4tXvVUEsaiHoXD2AXz",
  "key11": "3WLkaDWTk1o95RpbzBADDs8Ec1iNqh65nH3oBQwndL1jbVXmCr6iwc42naTvR3khpTPJrB7twDdSWJv11s2aBW3a",
  "key12": "3ZwBAi14ycWymZqn37ttJhkkiCHinr3o27XpD1p9MsUQpgHanchQCSkHxVVGzjUWzNioSwhgbDCMwKTKFhEjurgw",
  "key13": "2Yu2eMzorepQZ7JvY5ATXd2PZwskf3GN78qsSr5mxtFjEy8rJuhn79jr72kh2tStRHFuddFaU2X3RJZE4f6AVd9",
  "key14": "RTCpCBwdtGPYmEFpEwHuSTpJFaUhVoAaCuWQsEsBV7vUsXWQ626CXTjaXtSCECkJ8rx5QzHUCE4DCZZ8ApESctX",
  "key15": "3vLLHT2rA3i99sSBUAL3SKZmG9Y5wkXcpRVEYByxhmJ9rMGS7apuBeEtYR7Rh1H2LSDwREue1uiXCGaiVsVQqQFA",
  "key16": "5GJ9s76nB6TuakDAEkBd7pkgushKuRmgvEwbUK6EayaLDcqRBfoUNFETaeuP9BP8hLqoWFyATwPLmLYGmijfLyFB",
  "key17": "67W9RhkpGTKhUSFDYrgCzsQf5q3REJBGCFbRFSHGN7RvLAvWCMjPW97K4bPmgL6vwWLraGXGUJfqzZKagcGFLAq9",
  "key18": "7R2xmZkvYziiiWC1gAZK12QX4XxpcKPNHtkkXrZpmj4oZ3zdauK5AU4AtEztrLmXZdHP9xwM88aDge7owYNjHN4",
  "key19": "4nHVyWySq3b3sngsnUusJvWkSSz2VmhBgKsQuiNhXw4RtxrLM8hqpey4fmDTaj3rfW5Trb7sf5XrwxvKzVPbQk8z",
  "key20": "3HN8HmG5r6NeRd2zBQ6Cud2jfGjqHgJGneFReEcoQDySimvkaQLFh97dfToMQBjFJzeMZcXm1X1YXLGAoMhCzgmn",
  "key21": "5si347hWaZKNF4Y2mLCtzP1f86JxPe2sBm3zXCUKBq3Yvp2En3wHbFoKHXE4D8wARvPzsvda3WCMPUE5nCB4upzp",
  "key22": "2pEJtxoe6362zG4hLKX2B3WPkZY1Tz8pFxMmDnwTimLyNQTCSdZdTsZbfbSvAc7eVjuxkLWm46GCJgLZ3FaNESMS",
  "key23": "5TtWiHqRhDXA2fFwwYd5y6hXXyq9H1TwksJzgeMJNqjrTZDGKCZmtLCH5PakDtgLbA8naVckAhNWadfB4ZcVtza8",
  "key24": "5YMBpdqQCsx32xN6DPoxDB95rNzufx4sbyXo7VgMa4Zcs86cyGG2MZtHU4vc96UufXDihRG6Wr6NLKbbVma4V5Gt",
  "key25": "4YNqnsUL6qn1kAJfNew1A8pm512ab5BGrTdp6f3XBWpaSxDfA9dfmMtuCeergTVN839GbtgCoWmfnGngASGk2m4X",
  "key26": "xoH6Yyd52MFVbHuhL9PVrFSMaUb3gXc7G85xCEfsEMvdD3RNq9GUvsxRR7k6rGGDQz6a39iYiCaYGYiEg3KtqML",
  "key27": "YeZrbF3YAW76EKpjipDZnKHChDpPq39khZNCKtEMjrwLHtGeLsC7eWsuscdRfdqTzTNR33XLZE7Nhyd7N7hJw3C",
  "key28": "33vcExjdYqpcEQhcqfJxhVWcaSek2QrF1nrrdaLGHaPSxwChRRtJsa9Hkufqk8stgeuh5asTZZfqh3HLTCyr5twr",
  "key29": "5ysehoZyKJzGrwwRcyd5w1pQZPNxHpxGCRPb6ePyPPKJwGiDt1X1rKRnknDAhfestv7SoztcwmURmYwHY8nbYVZV",
  "key30": "5gGmR3gNEwkFhAcCzqGBvPJdYyLRmg9gPMfn4tYFoETKsPmrkpCxtfAWV1MX6AWjuNRsu6jy27yaUH7vKAJqSwsY",
  "key31": "2cNLzFmCNGpAvx6CR5rYgbHVHmAWNrv4xSPUrufyyCU6whLr8E1R3vuFk3bbY1Eqg6C9VgtCwKVYvbueDu1i8GJ9",
  "key32": "5LpRziEY6DvkoTcnS2aKKusnz3fieMHt3Jt5hdEGJr85K82fLHYoxZVmmtFQhXfQ6R43rGBajR981y6xP58gpzvV",
  "key33": "5s9kofA9CziLUwxTNRxQqP9jAqAjew7z3r52LcC4Twnb659xUENQhwVickYzirti4PQnbtXMD9PPug4HABiS1CVD"
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
