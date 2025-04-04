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
    "3Bbt1M8NzcEh87H2TJ53HtaEts6Q6vjgXSdmvmLUZVf9yomo5KQh7ftfJwnjzptrpzk9E5aEy2TqqEZ6rKuryGsF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55nRRpKrtDH5HFcBt83MXB4HSB8VZKPMCw4Mj5iZhDoKTzVruji5xg5vSGEZbu6Br9movfFdi5xQWYuKamYnRqrW",
  "key1": "jQtwQTEiMoxfihLsFjG2F2N9WNtrKfj21MmL49DUCgQjc6Yw8F41ecD7uWSG9CuV1DyaLKanwZeDsyVVo2ozbXz",
  "key2": "5rwn6tkMcNig6QbBUSuAkYDNRDiAAiJFS94wUq6QyPYxBaiRDbVP6U8aHXdXGtwP6puCb9LVmDGmBpJwoKGARUMM",
  "key3": "211WVg1Phxar4PLMh72iPBm9TErShsXadugZHNZVLZ3Sc2Y7EQpWqWsCUA79x9hRTuqiN95gRHBGEh6hjBW8fiTF",
  "key4": "1JH89f7Q3DS1jqypA3Cyks1uwSqBWfoj9XRhBrg5pX8A98AyhowiHisSCvUvjsepaozQ7PfaVvcksqVZiA9q2oV",
  "key5": "4pP3CpGXb2HRjazuJSn8YzFoHiPXaohfR5BXuGzvdbjjGF9QkAN9917337ntYRxYqVVeSsyfk1abLZZgf5Eys6XX",
  "key6": "3avb1byAcXmU8njWbnyokVjMWU9HKuAMsVwv6s5oAVyiwqUgYFEpS7Q6RXniqgVBA87efj34bTA68NQcdzQWXcvF",
  "key7": "4rX6feVUYgfw2kQaG2dSKCDQQseggSU5zW6j5SzwXbLTS6odNcead3NwkWFEAiUbFdMgt1BXiChgTA7htJNixPtp",
  "key8": "2JpJT1wxjux2coWkAs1fSNzpXAfLL9Li9zbXf2uF8UCT3b44rBQadvKWc7njBE8VbAh8D5g2SE43Vy7Ny4PFT4ww",
  "key9": "5vkqTgk6yvmhY1gEmk7NbHWS4864hGnoRrBrCNv3Amnkf4epRy9YZCWzqRpZ7gzHaqw9MvGvrmLiPmgAk1Q6mXwW",
  "key10": "6MNe4N9V5gKKPwV1novZnLLEhJPqCgvv3qpHhFyPuMVjdhapASSMTLpg2BafCcdZK87UNUMkGJNoA5Z5632gc8F",
  "key11": "4dprriQ2nMTDwNb1d8jGX1UvDHAZ3LL86kbBrCNtHknLE2LXcRqYvPaiozhH7MtpxiaLAQDxmoqBSo8LS4u2rw8r",
  "key12": "iBsvbCJbFGhLNJgBfAAJ24PkAsB19VjXsytEcgC2MJ9NNyFEjsp6j79v5y8wLgJ4RD7ypPmgMcDMP1HG4cXAgov",
  "key13": "4RzaXPeYjCThXq6USoKWTpQ3Z9B1d2kgS9yMbT2jpfnrHGPXxKonDzmzDrF1ALb5awQKsk8Fk2TGpnKAHyHDtsJz",
  "key14": "r9oPbMgLWmMjT4P5E2EKuTXZoH1qMzqdQ2gHPYidTMXRAkoxnUnViLCTFzcyAXZAKCp6Xpn1JQXoVSkEAye7UwK",
  "key15": "63GAxBJHmeaAjssutyYZVU768y6Fhft4jXFxYwWbZhe7Y3LTbm7nrRq3qUUtbo4He7u4maxrYjWWMbskKZ6CT658",
  "key16": "32bPTdgzu2QooB7dTPPwmjrdxm8J3HwHV5M8WyQqyVA5DaNaZ1FecwRbbQxBuJyTpm9FBt28PWfA22ueyJJsbe8F",
  "key17": "248mTPiDZn55hzm7cJVpvSWP7XHwDjKVnxyebykqGnUcz6zFyFHyptXKnhXSWzqktkd4rqX7D7qi9ppRUUExQUNt",
  "key18": "5Xp5fB8oEvUg1Hpkv3WatGV4cBRqBkGycnNWaKf2vtvdtwRxuEL2i5AZKsukSbQCLpnRFV7KYBJ4t9N9p2ES7E4e",
  "key19": "SPB4QEvmSYifuwn9iFJQRpAUmoUYLctH1pjPQn9EtA8TQCWCZxT5DwEQcvVhieA5KdrFTCk2Necaz7jXjvsJdFF",
  "key20": "2WYU6Ryq7DFcxZn6bRSmm4XntATd1mCGnm7vASWLN6WF4jCSHsWFfT1ULJmD9hQCknBrRR2AChWT6saqh4GAqpev",
  "key21": "2r1JMu422EYGzeHcsCrJqCuEUq9FaF4metZqupYaoDEBB5UBtqho1aD3vQfyPCwT4NaYZSfrToYJ4rfo8MJPKGpz",
  "key22": "NEwA2zY4cuSfJjBsCS7htawPjbBpZfog8pPEbUVC99wfG11Azzc752EMCvn7yD86xLeXn9N2zTdYrfEYuF5Rvg8",
  "key23": "5EVQRzhqiv5wzKiaLQMxzR3PSTdT5r6CkHZccJtZoFkRVZYiorrtrKZv8tEhUMfzvhGY5APq4x986iARXXWNHyCb",
  "key24": "28rWbh1on1yFDaGFrgqs8VpVu2mJ4XGY4iZu3Fs9Y7cb7zBfLERm6CCMH71AsorZgixfiUxtGnccS5zEqr6iNBUx",
  "key25": "5fSi4qr2haMKHeaybmbUAdY5BPAoHaNiaZPZtj4F2ax3q13Stcgukvr2ZEvEnQHJ1MfYJvy18V63KxXhuEawPjQY",
  "key26": "4PuPLEwihydv5eMoDeNYdq5eDKLHQqhj2SFrR9Y8a8DHRwAxAEtdJ5ueTLR2bbaMTuHdDpJQqEaQzcN1n9rv53Lx",
  "key27": "47pAFwEcQucA7m8kVEMAqMTAfVfMwqs4e8qcqJ71o25LNiRWgLCZk72jN1mwQNPdu8RYfr8TDNTbVkXFy9z7yr2E",
  "key28": "5muqrQo4JDNmEcPxqvNVFQXHSAk1SUMvKsBa5AjwdAs54TnWGx3qZov8XuJnDusYBbUwfvPCjT5xFPh7vMKPrgFy",
  "key29": "2BDqKUsateU4zMMjGNPZe9RRmZAWMqATzCkBEEcB2yuCm76W44KeK7SpJ3HrgArzbCTvyd6FoFqWqUQLXvGmeFgo"
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
