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
    "Qgoxesg7yV5veEVvni1jKtXXRYEYu7XQE6fYoUzxY7c7hxJQWBaK2d4A4BDkuxGpy5v1pB4JddY7KLWFkcpwkLR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PWEFja9xCztnUTogcYjj4yRSzeYE14AGzxsQkARW6AwwTLsFGva3zt1HCGJsH8yeP4JkEVVawKHWahKbfxBKXrp",
  "key1": "4VS3qEZDYACyWhZiNhjsrVrUaQUonQNhHJjw8z3P4FGeSbupg2QBPCUKRaQoG5MiyC2LNb3Fa9YNfnbZxEY6ooes",
  "key2": "3QTAx2ftJmZHF4QYjvaVJmwNGg3jr6qdaMLvN9pmNHATtVcbC6KTSqnMYKEQSCd1ZguGvQKd7qN7si12ovh4MeZ2",
  "key3": "QefXWfk7ufPEo8sk9hSDV5ZQ9Mf688mrci1iBiNFsa4FTC186qCCrw2oKnpPKPNQp1nQuuJQ3dGY23PnZnMXQzZ",
  "key4": "2xEcgtaRopS55NaPBMqW2utdUvxAGWqzGeRK1EjZRiULFbXjwC6G6uMiwAr7e8E33mm4au2q7qwe6PfLYt5PGHnh",
  "key5": "4mzs8sHKFF8yrEGDSEwJwnLgL5MF88pYseFYbyo92JmLtgq4mNxrZozaaUw3LrRyidvvxNhcPnxhWk7gkftkmkFa",
  "key6": "4uThAJe3MYZ2dnF7knJD5NBEZx4UhgXABs1GQsiyMzaJkfHBJNWezbDWJKzf8ECvc3m83eRbpGzTPAvPC1VrQM37",
  "key7": "4xyGKksdsUdfaakMZDnF6trwPVUB1f5Ms59DWXBw6AHW3f6QyKf7jXsG1xthH65jdrhd8smZvW2nsHyFKnaWhmFF",
  "key8": "4g4etZWykoLgLDrehKjrvSuvhPTAUqLwghmKzka8oq1J9XcuG1H91sPSVTvF4pDSbh4D59e6hzEUUURXgZHkFTT2",
  "key9": "4KJix31Dss7wRCpSxvucRAv8PK9QmN5HETd6hgkEAi7bfrDSyJV54VR3kWfUREYty3DvqdhfFRSJFWaoFmfRL7uo",
  "key10": "2812BcNV88yu4k2XM8JGmiJfZC1xnedFzAPaC6shkg5CHNhYSxW8hJziwLa4zf6dyeRGVKXiVJP1jcsi5Xty2nPz",
  "key11": "5NLsUKapTbnqBzkrA3tVn7As6QvV99j73nusUNQhaVNfVdToCdjKwfQBRoy9G3dPntxYM4n6oEbwB4BYNt84ErvQ",
  "key12": "5E7Xa4riPBscM66SvAbjXGhukpEyYH1HpC49P8wGfwa3xrADgrnqnFm7dsBw5zS1J8TPLv8iF8LYWt6qumtksmm",
  "key13": "2wk952CduYrGV6x32iGkxTSUHcYukkRJ36znztwmCQNctXYMLiaV5UVhbVsGibwWQcg35ajzGAF9U1FJ2Ehow1Qx",
  "key14": "LibWFxyPGpNuCt2RCqkuoBr49hAFfZd8v3u1hkXopnizZAuevBn1qyBMqY4i8wskr59JbZffZdJHvExJbxw12Jq",
  "key15": "2HDNJoctA9bAZXRAGXwHwWMJeSvtxjCB4zkRbd8fb3MfWcG6AdcvQsRzZjKGGY1oTvVLfAs4DksHN9DdKKndVyfm",
  "key16": "2ZjqwcgWSiq7dvBTd3QpzE8ph7rKD3orqbonHivJKNbEzwtB4gcpz1e2p3TMuBPYxhoCHB5z9vEhh7cLmtqM9MN5",
  "key17": "2xK3HAd3mgvaXBKHqbmLnDhFsiLQVPvw8E5HGYFVX1RZL4T8eKqMhrGxajn68UQnPBfBiEwrtCX9PZ3eLGxhgRKj",
  "key18": "5fUb9B3n3UGdMnbZq3L3vybRCo1EVixoARBg5X6tioM1KSc3YRXGsEb6TwX7SGLHDwVtHatAxqjqyPoc7KQzH7RQ",
  "key19": "677FpaTGFRrXX2TfvWN8STResRVmk2yktzqbWhnvoJwTFw6i3z6wiskLqYyWtyMmHbfwnweTjBo2yptJTS3D6GoR",
  "key20": "5kv2fBkbhEXEzpxRGhQomXvtE9Xad9xuC78imP6pbkxqfLpVuZ7rT63ELbkKTrZYeHtRfcyrr2QrBpRUvUr29NH6",
  "key21": "5oj7JAfoPpy884aS5czUQ5EpRhv56UPp7BLdwZPpAxvyYeeJPBYwmp3XUpwQBMXyoc2tQiQoMTNKCQ9CMMsyP5nT",
  "key22": "5GNUHSPVag3FehZXfHTPdQ1ert1utjuXCGUbAJV9WNKH3SvHYxJtwUn8vq2v8RL2W7qqZ9XFhZg2H7u4jpQF6jN6",
  "key23": "5fJpeZCzWR4YD6QuamnbcUSxBQmaivi2m1nCAd5y7UveDMWGJK5kv47Cfa7BP1fpRwVEAwhi1Hk9itn5iEhUPcbM",
  "key24": "4bpFuT6b1McE9h37GNxj2dL2sa1GCcbXYbW4WaCD6pKV8TMLgEVGZfGa8ocj5EDt3Z74kq8BgnzqFnPpcHPAEgQX",
  "key25": "TXrcXj3UNYv5BUNcEPbRjfCmw8HwHe7ay7v5ZzBACVbg6e881fmEoJJoHRaxEpTvguth1VxSdESbbZ5qfvz1RwS",
  "key26": "cUtxe9EjCmn8G8BuELUDj8c5i4LnoffniHtWfbT8T3iiyk9NVR14SCo8X42z71VXXScAiCm84NWdfY7At68gmzw",
  "key27": "KKNiuNJ3H1SMA9NGpjYQY8jmi6acueVQmEQVUqB73SzVnAuVAZpjydkABfh8GAVW2JhCFR5u2Wfsiwpmw69rMG2"
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
