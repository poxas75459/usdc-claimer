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
    "3DNwph2tj7B4AJCKYa6ja7pXAaTVAEAcma8if6QvbjvBTKbgDWw53uKttMZmbXsKKoJVB78qk7z8osJ28XNHEog9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oJyrKm8gmjoKtGAUX83Nv4Dw1kqrnBTrFEDZLaXjNVfUtyqEx2KhEe4SLzmhe9uP2ryvL7rDWLjM6q5cv37jxdF",
  "key1": "3es9is4E9aEt46HpUih2mDTvmTBaAYUuAHKbQT2JhQ5pxNnMdor5R6zDMKPo753TLfUoSqFpwmzXRoXdtmAQRTyP",
  "key2": "CicjuNSiuHkzBmW5oZPLtK3wvqTThVpiKWUpEg2SKK3uxDjgezDGZj66KP62myD3jV3yx7rHeAg2Ry9sTJukcEH",
  "key3": "4nU5qAjJhWHKUh19Djk94WFobDDNFACZmThB9yG9ctP21xdM4SGt9cYvgFJB2jaUkCJtXyxHPnKpr6RFqW3FWakt",
  "key4": "268s5RZAoYyHkiVTMoiJdTprVMejAo5EUwTEgttwWY8G4wkkHnmMxXjTzfQNKWKFLVo7bsNT3ph3pqkRDptGqoPQ",
  "key5": "mGMWZ4JsV3fFgXJ3mdz757Ch3mwfSsvQyJpGZvnWV8HSN5FTYDyFEQVrCjZLrFzFyGVXE1t7BNmTve5ziScEeXU",
  "key6": "AcJysLfbNr8vXYcDz2oV4kNCjPmKnsxpgzk1bs6RJPVe26JC5fQeNc4qoHPimmxLobynzLYCFm1z2cUwV9kYqgK",
  "key7": "2prmLqpPJRTxfE8rzPXq3guwJYsUxoLXUf5QXWgufcybNtc7iPkHXnwipgSg9cmjnnvmizSsEjRAXcBLEX8oRhfG",
  "key8": "3vj8YoPM6vUE54xs92ro76Ju1B2fRtbSZTR5HDCkxeGrigP78NUg7TyiABVYKY2TKizWJN9iKFD94wKin4c3fQdm",
  "key9": "4WU3fqE8zgpW6C2gKFwkGqWAmBmiwubmK2Bx4QAZk5LDHSLLVxqbVjB8LV138zjM2nKivkowQgEe3E9MHBHaimpf",
  "key10": "4oSseLQCihRVvHyu5qCWtyKzuh7rBKxNQ6KURygip3w8uyMaGChfg1d8wffhDRoLUktHfpzyAe3pc2t7j92ZtwHE",
  "key11": "4CtKk7wpfgMfdQDS1fciupwQ4FJTNM2eskRA78rTyWFYyunF7z7VHjapo55JhzB9q5tbWammkbE5ayUVjHmwyoHn",
  "key12": "4dYRMBdH3wyxAqsr2uJRYuQSSS9opxr7rBqvE93cmFmP4GXZM7pAXwnt59HRrW6sVrLDJfqAdZwiVAvQt4UeXroM",
  "key13": "44QnczUPTXE8YCAXiswVPuMnbDdT4yHPsGhibb7Kr88UW5ktyiLrs2eDx7awVqsG27JkNYd9FHYgAf6YGaWHTRTE",
  "key14": "2p21sJXN6XRphvpuwrtHUvfo9T4K7nqj458h6YxzAj7Fic7Ny3zWqfa3FFSTiVVwBYWsQKx2GpetAT3v7Mc7WbLH",
  "key15": "2nPN5eeC3tntfR7gmchoEhBeBW4vhB9uNF8SRHmgCS6EgCAVGjYbk1wYEbfuMHj2HftuZ3CFZkXtozazBVvqn4is",
  "key16": "3N4fkcg3PF94Dm4Lp5CVVCraGf6PrGSqrhQbPw9s4d1f77dzgAsGBcg4bKzaebRYnJTMJKiRi1DuqbreSxs82EbX",
  "key17": "3786CkCjQV3fHW4jvRXeBfqizDDowQMQKeZ15vjo1FZQi4jvqgUB3RhfqSEWcZ96GcZMQ9pkqEszLV2vCCuija5v",
  "key18": "3qqsSVEJNEPHEy5pHMwey3bfH8SaqThjcgVbpfGu2ZcV5pTkTEn9yGQkyLKujR1CUi31SUb26u1dspdHp9PoQHPz",
  "key19": "4FUbgANBerGbp3Wha13oDdqioN6Kp3mhqph2vZZ9sWGzWCsxNpHTZrvdcvsqoQsSHWJTcdbX3rvvMybd9T8dFfaX",
  "key20": "38o4PQ1mN9v2aGSEfBjsXB6ZMrDXCcny7bLi82RbcAHAHKMt391uHeT28CogCGjniExvj4JJ1LkUxJcA4k34UiM2",
  "key21": "29GCrYTtaCJfjpExp8RHWKfCyLxSHNi5i7sBYkjdn5efMyrgJeRYQiWtxvXGFpbU5Hrfq1oDGJJA74s4ifBfHuNb",
  "key22": "3qN9UCEbM9Ya4woNBRwF1znWoFL4NebEJkpzPxvWnmTjGvNiZwkv9QVBbRXbkTEVQvzgd6HR5wA5Auysf1sGmGAm",
  "key23": "2Siaw8sFMGpoDsdpH9cD5cqXmgpx3S7qwHMFL3JH6VCeaVjBNz4awAfZgZsA8NisRjrEJLSqNE7s9DULRSgxdQWi",
  "key24": "5FP9it3EcM5TFeq2JYLmZCYQ8YAUcNa2Cms3pT6HocxvxCpg1Jzf5MjCK75hZahEUuyb5sM9MSMRqHxELdcEzH9T",
  "key25": "pHDgdHSMituR5tKmE8Q7RqKVCzdkxyScRiAAmRhnq1EZ7w46s5fuSLxqmrgVJMEfCxALZx4mZPt2jRCiVCDPR92",
  "key26": "58UmJTegTAnBBXEisDzXr6N4rPyG98VB7DiM2SsEnKUuf7fVwwBCMcbbyRmWS8ipF4eANVwYw8CyQrjh1mqPCJLZ"
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
