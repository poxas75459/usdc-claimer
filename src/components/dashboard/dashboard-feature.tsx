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
    "53BQkrZQKwEhnCghsP9bgYgPhFGoMWVBpJqiymM9N2bWsDZwZ1vN22uazHzaQRQ55Fkr2jh8Hg5yvQzMNNRaSe2A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E9GMvG45LDBvLkQ5q1oF94w4x5rM6JxnmZPuQGHpDomUfJ5XHz7MN3v6NEAzARZekibtJ4ntztbwygnPpqjXH4i",
  "key1": "3eNTWtRhdZbKZLfvNb8A8z7Z5dvUQ5C8v56DiCZaXniXqVT65xahDtS2AzvqbitPj1YiFpdDZCLsromRF2S7aAVk",
  "key2": "33wVfmB75PewdDGuiwiz78PrcdFNyHfszu9tBN5N2BQgDAtmNVkmBJjuZgXyMZkkRE6dSPcqbh1iVF7TxfPsKr3G",
  "key3": "5dkPdusMTJgzYoKQwSo53EwyzVUn9tuMNKYS8QDmtrb6KAj9x8UU2CZ23VN5GtXSeMEXokyi54mnGAuZ5Px84Kbx",
  "key4": "5GSzwJ7tem1Tb1ApMrUZdbNNeUe6Ls65eVDbopBztr2fh89LrBRCxEoQQxUXmYruezo8NRoNSnwR3XSsMp3RvJo5",
  "key5": "5Xtss2mz5Ar9iudUm4pH8TsUm1TAXaynqmmnDcf8yMr7HenSwJE1ruv1k2suLduN1bRRgAy5p2CtzaEUTe3x8TjD",
  "key6": "5ogx256iPwQERuRioiqu6e4htgznMsFSBknNDWW2X233puYy12cr8e6eHmDtaB3BBwrR1FmHKst8yddN1sg78SJY",
  "key7": "gL8epCNGFaUb5jjrfJUnKprWV1cAP883VFgjQnFsqFY1bdk2YhmuXbPBmvids1s6C8qNML5Y4auxKMMhbHthnQ8",
  "key8": "4qtCzhgYJbcbQfQNnau7BcNvkwF84PMdQYMuYDbWMRSgUfQHaPCUtCCgUZF7bTomKBPszeEFwYdP4C9fQ32U47XR",
  "key9": "2swedgLSjBTy5N8p8kUqV3JWLtxiQdRCYokc3UjBDScQ1CWSn61xSsWKHRmACtDCtLD7HazkzU4jHJp6d1AFtbXg",
  "key10": "2s5WudRXv5ZTqwzx87aiVKjK1To1Q5fsnqs1ctLRgRLMnuqq7kMb2akzchJGMqR79gaLBVWL7p4fUXnvSMwiYFPY",
  "key11": "5shADvWtYidK3LY9xXc1tDDUE3Vuwc8MPX9MJzzRTZY6okDpsPCjGBYexwhE42mbqompyMGTVk78bK3PN3BDwyft",
  "key12": "5ZpXuQcBZrUZvwsTx9KqKcuRMJoJ3JTzkqzVBJZJ3X3wKdDTPpSY8YRYmk1VYhhGCkWzJYDStP4UzdKDuTLJ6yJE",
  "key13": "4djyj2iTW8ZZQWHVsjHt3AcLxkrqEU1fx7DEbx4KcUQ8Qd78gGXmwLofxZMPvc9Km9qf65Ebtfih1A472sMMADMx",
  "key14": "2w1bDMGVgf7JifqPKQdwrgdaMABeJHP8r2nSkjytNeruCEGVPq9qEQEjQVGKQhVLCU8Co8viZaiCm2ESVfw67Rme",
  "key15": "bKEBHrp1qx6VUSAdVywfyCnDTa6BhfYM1PpLRTNyFoWguCqNsTqrHBMFEfpmg72FhPgNFemubUYHW187zj1XXFi",
  "key16": "3CMWJrbH4PbkTcet1qu3XBpLf3pzDnPNkbHUMjS9Bw2zYsQz5Tv77ntHTFa82M96CNEhYxc8sLVyNkjo4DNdpM6s",
  "key17": "m9mgYD5yrrE7yregUV9jsLPsMZZyTNsdstVP2bcC2Rboq37G3fxvmjKwCnCz6HHz5rV5vXxKifR1z35RhHnbTBT",
  "key18": "2yvHH3kHsoouy8HaGziQhJ831ztgfgkUK23FFMMbkdxAtH4i54Zmfkv7RAjQnSckHdCyiNw3tSNSqogCdS1d9UAk",
  "key19": "eHaFKcbkBJ526fPwPayLVucDXNY9Yh2pZrw1RQJRhUxLyRPAzaMvaTDh6gjWfqqwBinTjP9eD6mzHteMEQRagn7",
  "key20": "5YZKqrLKrHgzqNebHmu5T2PpC4XKEMHi29TVjqGbMi6VsGKmCfkkwJRN6sbrB7Dx9KAqdim57mpsWqYV1owB8gWm",
  "key21": "xNhtfpqa2mQ7nfcR7a34rjVWbKodfUZkCQMrGt5xLcp4dtejZcz3ndbMaHVRiwZ36uGHN2zy754kqZJ922dQLUf",
  "key22": "4tKZJrSjhL6zUjKFqRSN8pfehWPBfs6RktBjW9bb4ieDB5jcmBSjJeHZbmPpo46FQLY4jFQHiGJcyWgxZDpTiLUu",
  "key23": "2L8GX9aDDh4tPrgoRFyCfZrMAYdmrTDvFGDF6SgKPiMrCPaEg8eBS6YGFY6C7yHAfwQ7LRTcVc5F6MB8ZK1qrRtF",
  "key24": "64irtL4BDmgw4cS38x8tRFktG2jV1ahYCJaZVA3vcf5Lx52KHbaCieAY8LxhRwX2ww8pz3QRtdcFopaRCYCNGqwc",
  "key25": "4FMaPDd7Zwi3TyPKhBDptgXnBnc668ERmwCkZYGFNh3N2bgZTqtEo4kb1DipG3sAp76SUzKs7KQKqwrz9nyHfzK"
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
