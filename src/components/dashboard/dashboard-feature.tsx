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
    "2Av3RijCh1LQkEGGY9uEhJjiHuTjSYtvzoHR4cUgyGuk93Sx3QMAfuff4WJE9aUnBN5dZMDCyFTd3B71ik6Lncwy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cEriJrJ1QkRGaqRcJcmVM4AUzjqFv9bnzHuaLwqz2o483m4TgFZz2BT56J9i6EhqoPyyWCQJeM4o6KWdiGYAztw",
  "key1": "2zTTTS1Vuw72MdbiUeCWmCoRtyw91Kj5AyZZVqZKP5SjRKRagogGWii6zkgAL3hprBVUHxrzAEfTB7VP67RNzpEv",
  "key2": "4fYey55umSEfv1yU713EaYsqa3y3NhC6GhpVBHSDqDUxUbmVbpJtxwzvXZTSxDhc4TeLDL6fLapA2SVuTF9bmarP",
  "key3": "bSMKd8azPPBefwN8yfsMVQcSCn2inUYm13jmtoPQHhgU5v4xgkwBWFAWeknCqdMLk8gvRU9kpyBjw7qzYWkCgQM",
  "key4": "4LPbCajUZTGJcK1wZdfkAtWqPZ396AoxEc55KMtFxQ7GoETNaKjhpsuVKN43s9epDxKtKXZz1HGN7gzjuzNSt4yU",
  "key5": "LVbPKQUC7AB2g8L4Qmcc68LJoJXa2xgttcMN39jTChRRHZycNxEKWs4cp5bJjMFrWwUUBPt65YcaN8et77NtTai",
  "key6": "2tHCtg1YrLazJexSNiErDt4Gh5JaZteWmWzDoDDBvAPiQY4d3y9fUpYNUY8qgVYsVuwfCf3yL1u8m2jv4TaoWmGb",
  "key7": "5TXzgFWpu2xf9F2gPs9vvUpzzjtfUQP97G1zvaa6UoxjHqfierd5J5ZrAqfhdBmosfTR5RA4BrhCsMDVmHYa69tu",
  "key8": "2FMQigHjo7g27HPBn9MvL85EHkFJ2QhwFvVq8Zh4tntP3CqgsMBPKCq4sSCg3BcB797D6LSx3ph9wVHSiPVZUB93",
  "key9": "24muBC4tYNVdNMtPoHrm7t9V57vGWnjFWpBhE9wcX67DAhN6NsN6CMfDGBUu3sMPct3Djteh7FwMRaerLDndvVhk",
  "key10": "4BHEype1gKkjaq4tUhv5uTYrwHG9jQpxjyyGto9FQrBHRdCXmG3RSdHis6XN1uKv7eAhYEqsRgSE1czv9w3XfWm2",
  "key11": "K23NPAzskX7ZemT8ZsQCttbmKxjrC3eS4j7xtDRDRi79rz2cymEqzapWeMm5e5NuFsP2DXU9vN3LVutwP5zejLa",
  "key12": "3pfPYFLYkfx49T6qwdHbAAwA2pundZtiFyZvzsZDBF6it9NAjfFtiWadFS1PTnNzUbbTy7FGUbxWtGTRvgBW23BY",
  "key13": "5D3qn9gMEnPjmMsbvPJ4BQbJpACBVTSDEQh6HeRGSMprnTmJKKGKCFf16hZNqxUdV2zCGYbv35kcFUnT9xMxYkF6",
  "key14": "5sKxpJuJ3EmHVFmNt2Ch1d9dj3qiJTUNL7rrSfd3t2cT63Ec6SA5ethqFYvZACpTd5SQPmWoATVPw9Xp9dzb6JUf",
  "key15": "3Y17HJU8cMtpGhaT2UvcArq7V9CHLuJQxqQBhyS4GTBDQe7sr1b4fM8qDyMiPqRfUH1sy4CfxNxNX5vhFVYVYQ9G",
  "key16": "Mov2rbE4c3B8u1KdyTyjZoEwPRSdDm89Atb1J25L5sFX22ZGqhzJP73NK1f5HmLRrEK74BwZN2FQrFeZgAAWkPv",
  "key17": "7VaXQFKnxcFKEYZQcaAASqf4KQmQmtBEXV3HCCPQrLKJiQxn4FfrLYHJm4oDsMi4K3n6z4EPXfiFTQiiiVWKDF1",
  "key18": "37kawqXSugMpPTX9LbGapokBhhC297mNtybCmvpytpUgqbsucxKGz55Nn1MTjxpGXJFt3ohPDTLEQaRh8N6pWbT3",
  "key19": "3ysb28WTo5kfqK2rDziaNJNWFsR9DZT3SZ1cmJ1nyyfSKyQ4aaikjy7kTWWCZrEDEK6sv1N33Qs39PeyWeTavYCM",
  "key20": "5dUPvAoZL1RNa6ejnvRSme1J17SeHHmSRg5ywp4e45KikT8x11k9iEFggYvorBvcMeP5ELJmD6Mut8nhVJ2hJTqg",
  "key21": "vXRZyXnHhLjzaLwQsFMATHyTPiQg3w8NwqYLcG6CrD2LVRESfrXWrGnHrxpZs9zVukU6LDYr4xyDt6WhgSXLLaq",
  "key22": "3TiZ2kmrpmpbj5CUKuMMyGd12aruVmWjPTX94oVnMAuSQoN1kZMHFGfw3BYDXLkFSuTBLqrVx68pXWSj8qkzpFKW",
  "key23": "5xJieKDjpRfnKJvNCqQKyyZz8hPrrykk7EGQDS36VEbjY3inCXYBRjNy1jf3p6MuUZobMZpD5fLJQrYVK5XtSyPf",
  "key24": "33CNMJ9rwhxdZGDvBQkzpatRU4zV8RKrQebYf3d1Wt8dCinS8b7hYjqPFFx72i2QiszMTjDKfLgy2Rph34SkMU8R",
  "key25": "mnuo9gHYRaeozsHt3vr5FX1ZorjpHr4bpV6op6iurA7V2ewByKGJX94534YAtnT2qwMrgMLG4RmHpEqV9up5sNR",
  "key26": "36FkwyjiaKpGGNFQaCTqDBWQkk3gefspgyMWtbvFZZir7fBzmoUbdDo7cbiCBKk6GXUTnH6wnnbM48MaH2DVnbrY"
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
