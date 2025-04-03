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
    "ByudwYqaXg22SdsdnDmSd9Dhek9RVTdPJcbPJsNPCeuUfgCCC9wahGoEdiqJ2FnBRxPu7eP5XNvQNYiKfcmCGk2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3umfq1XoQ93mDuz34DhyBNnmvKHpsFo4UfFc3QpBbjZkuqRDv9F96T93vpmgFHeGMu5LMnb7bEDLPftUefUZGX5F",
  "key1": "5WYD2fNc1iQ4vrShoYj8ZC783nW3gyb2FNyUx6bJRkt3thkHdR8LskZxqiCL2uC9W8QEAHw8ZDoEPzi63ioPTTYQ",
  "key2": "RWr7tjE3WxuiKj1Uhn2SbsLuJNiTfisjkjhe18bXQ2wrbYPgaNqzzLG8UHzddtRyeRbhUPXhKCzmQeZCKwcjjej",
  "key3": "3XhNnitHGkSTRcXsGPrAZxCEKMrKL44iMGHPE6UdZHnMwTDcW6BPUsA1yGzJzhvfrUtYwSxoppPKyDKVFcrdc47j",
  "key4": "4o69sogrHfeojethxyuNdzKzfvngPNV9wgTtzjotSX75wR3TkLLtAWrCTMrckSbzcYfXMjUTaJowB9kj2NSeDQxe",
  "key5": "4M2UqNGmVL61DtBndd6cMSJMBxc7j2PGDX2SY6NVAk6ZWJFNV8AB5qpfLnFNFZ5cX37xkhp9ZAUJFo4HPzP451Sz",
  "key6": "3SSVRALJekL6ZQ4nVZL8ansTsbdgWczLbW2bxa9eZy3SMfJfEFG7EVzasyNKumb977vvLLCDSokNYY6a61ixjP5u",
  "key7": "5BujgM375dEEsrPSmUwcWFYbAUc5SJbVwTb4bfyhGzTxX8F5TeaZ42FCg29B858dse9BZHGvojAvftCndGH9NmoE",
  "key8": "2mnNNjNg5yBz59jyozuTQ1FuGZG6UfsdaAHoUJHo5crq5u6zut3PYEwGT8U1XgrD77ZM4hJeM4XzdKnJ3ZRiFmBC",
  "key9": "3yzWeX1jmV8FkTrLTuMtsarif4rybUZJ1qyhxNKvTuGKJKph4TXsZLkd1BGYvueT729Mrtd5h9KZEJhKarJswaLS",
  "key10": "28VLGiPUwv6YkWmRm8eY4S9a72AmmvYGBV3ByoUWCQ2LhoFWpWszuRcqwKHnCEQMyhjnXK3NZptGMtBhc4Uq34cp",
  "key11": "2MENDnsPRr4YncanScMS7U7ba6jqH4x8FTsQ75uhtRqsCZ3GgGgVDdtLauqGzdUyCfCrr11YQU88gyhwDmqXSVuy",
  "key12": "2vu7i5uCwG9gKgM3Q32DgsxrWLausegyEmBtPSg5F4viFh9audWGe3NbC5BLZjs4VF8Ltf8bvAjL6wGY7mS4n1KK",
  "key13": "2T53Hy9PXyCmV5ztJ6tqWfJLxKC9eQdMqWfSxGdy2kqVpBUD2kP9HRAYbvtB5pt9Nx2ttGekkmRSw5GsEtB5oXp2",
  "key14": "2jsfHwPDsX1gyfjGRedZWjYFLzPdSVKydcsQe437K3YjqRJ7NayyGmLrQ5R9SBBaYnfQxQS2mDGR3zY3cCiyzQvz",
  "key15": "5zkeK6cNLNJYx2ZoWGFB8uwgYjQr4wSoyCqN6gLHXHzufUdzGmKrjqoCrxBgKMkx4hLsoL7rDn1e7QY2xXUExw6X",
  "key16": "3qEPJoXCFZo3JnshCCazrTRkoc6jzFfPVAmn3r7SRUtcmHf8Pu9Vacp8P3gmCWQ3vJkS2GH5KMGuRUJGdxdTCVD3",
  "key17": "mMcLDPt4X43x2XwpEq2YNyKsuSsSTSwrPEVkMttA5EsvyLUQQotXn73aE9Rsa3MJbB8TUTVeBt9KJDAwPMSAmXn",
  "key18": "d65xDgrCDeMiDk2kUTkaFC9QCUpshD1QpPLyTWEqr2nifmrFfJpyGMmhDNxZMqNaFsx1Nofa3ugLAHncnCfmGKj",
  "key19": "66s6EkDvzSVK4kH3E4rGR3J3484ZhtqkWMzde9jNJZQEJdTGqroYUt21Q7mSMiv8dMHCnRBpq2NgCf4KwPUjt8Vk",
  "key20": "4osfHDjdrPYE1m6AnJTKPzFuJTK91PJSNrwjBdy1Zs69YKjV6BS7A5WLE3w7Bfg5HsCXP8D9ZcmBLHFy1xwEVGHw",
  "key21": "2PcsiPhMH5GaEdFMzWtytiMHDN14oJn5tKRQCRQZWxn6vKdWXoMUEdDx9wMn2vZ88XSQyFT4up3SUnvYwMnKHYKF",
  "key22": "5GWMpVdUjvSnoC9QftCv4UR1wtmYgbULXSYbFoCHtaGuZ9E31H2Wk77zCFT4b7pV398fYTaRsPZY84tYGXnjwGb8",
  "key23": "5sGpfiJ5k6eeaeVqKe86wPjKK87Cb26fVcgo2ATPFun8UJ6mDJVWumTwtUf7ERGQCWhgq9ZwbE9EURbtLReBZT4y",
  "key24": "o4xPEpi6ao7Q3gFcwtNMLoXcAbFZUhJE29VDzkkteQKvXbL6dfqNoMBXmwYsRnUibkM1chtz9ecycrBJ2tiTEb7",
  "key25": "2NYQVqL4F6aNiazcj4ejrYHkmXX3y98jVzv68yF9ieAV5jmAuGhuJuWdeiCbcEe4AtsD8hx4xKMRPE15csY5MsTb",
  "key26": "qFFPRmbJ36yW37BKj1C41SXYzyzWzo4t3R9SX6wCgKhdg7aBxBMVAenPF67hjfVDeFA8y24cKokHRMxzdDZ79MG",
  "key27": "sQBpmrzT4J5ZhDMx8eSr6zSMi82wxJgwagZmpPBgSaXWGd3ns4SwtAMn4ra1cNA3dGYyM5kTeUEJ5jk1KMhx9f8",
  "key28": "4uFUpNjAnYy3Mq823EHV5Gcc5UBxvaxJDXBN5orgdyFY2xTo7kWAh1Vu9ibM1PChv4KU6VwbTAuvPT8tFUhQAVHx",
  "key29": "xuK4paDzG67cZAw5EFa8vMgcHMDyw5v5nHTrCmdeozGrdTQmpY8qhVwyox4UnvYvKpeRpMkEa7bRMuKYMUygPi2",
  "key30": "cKkAzYzHz2BoJFUm5MvgnZw2i1EYn5VD475LeUvDph4uhNtmL8WmriXBi2QsqiXZaicskF4koChmioJjMZ2j1mW",
  "key31": "2AwdpPm2WVAgfdR6uVBj7mq12jrcR6nvv2jzur787NvxiLwSf1hjz2wApownKzh9WpARKszCzfYjxoNx4GqXXXCS",
  "key32": "2VRKv4tdKP9PgK3ymBE2a4q8YegTN5wX4zKimD4kS2WemyDi4Z8kJfwx3eJZ5qzpmyrAVLUu2mxFjQTnbNbBKmb4",
  "key33": "nab2isLiAeHj5BbZ1dKgt9Ng1KjbJkWqb6gBFA85CS75EtCA4QEMws9h4bE2krmzn4FWiCczJsZJhDCfojMz75R",
  "key34": "3HJy6BYw3Kxz2bVpYFPsHJTrDHvYZLsax9kqnz4hhnZDGeCAjY4ARLLu9Tpc9esy6YZspCo3tprmEpbeteuc6Dkb"
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
