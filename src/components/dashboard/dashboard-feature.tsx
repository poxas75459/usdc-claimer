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
    "2LuFBjQcxux1oeHqNB3oUWciaD6XunXJkPavPVc9YEPLGFYFmFER2cgiscgksKkxwFo6xjf6RNh5jKR21nkt8xFJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rbH6K9Aba4CoBF16qQUzhp3j1rKHTT1FVhe3VxQaXe9WsXoprKuzSNfFGM5mcUG3vGkYxzfiTVnjp893MRaFvUK",
  "key1": "5Kt8LE4GgCGGKegwwxm2eAQSBPzApLaZfDMNCN7vtdQzS6tC72WwDPRuui2e434gsGJRExBVN9sGiG1QQBDPCS7A",
  "key2": "ktanTdbpLBa8VbXPCkx6KF2cGDehfZcQFxYTz2AfThkjd68x4Ado6mPToJRU6QwNNsUJXDMKjRpkWpMa21XNHyZ",
  "key3": "4pbAH8STWdwgLEUwBWdYALp9iyPvP7jnZC5LRijdr5zFmGMrjgGyApqvLyCZUzVvw7gsUZwLxhoM3kWd91sDdH48",
  "key4": "3Q7s4UgVNkueB5sUDUXJa8NGAoz6p7BcD8tdxn3NRTtF7czzWdVN2CLHejS74QDTxq2YjYSEBQQfGJpUjgt3h9oM",
  "key5": "4nd76BpjoQZ8Xu3JHChjWHqKXDB6BFBa3TDrZfuNcy31iCApx8DV9jY2qcwnj9o3QCW37QAdKXVUqXRTKAsHXZPu",
  "key6": "5BPXoGbdrryShPhZCJZtzdQkrtYdQdm1v89Jdnq7Uj4Mmfa5swYTDHxdDJgheSDhEde5StF7ZZXKgPGKtDNhxkHu",
  "key7": "gd6EqTYu5nK4mYBWHY6jgLE87ovC5TddQTezNf2VUEjrrn3LC96a1atBRyc4FxPnPWrmyUAg4ZZxgaeTko3JpCC",
  "key8": "3H6mZuNAaytkWTq6bXbK66VRTLtXhoEF4VgrXHkvrqP1PAHwdm6kXAbBKdSuKpwPgNhV9qKrPPnRhiS1GaSqza7i",
  "key9": "48Xsmpy2QPAZiq9N1gEm6AEqeguFng9yoH6XgivTomYBFbEf43f6Y1P7FHpfmNX73Dx8LrL2uNjo7nG4hySh88n2",
  "key10": "4c1jQWcXFq3P4X6ekSy2965tHnJFMxoHPGTgMWCUhFSdUKhTs4NETEjEk2Yf81HWxpffzxbUWN6c9a4U8sRGRu8S",
  "key11": "4W9MuPedvUphnYfEpgYt2fXKnZx5fYzJDEUGGWsHBHcJrwDRcyPRrBu6Fptzifz2kzhVyQPvDtiUPoLWWvWShFM6",
  "key12": "Y2i8mh8r4LXNTrDaeNXyWHLX8m1rDQYjReNHkDDC2F4b3T8gzhnp6ZbKC9xNRaUkHWBZ72dxbDBnBicMrX6bmbA",
  "key13": "22VtC5HiYhp5mQuwY3gH7yg6AXdrBfKadge2YJ6Ph7a67GUv8dhGgN2VAfdUVpmgkTipSxCmV39UeRNJa8ZEBYgD",
  "key14": "ARuJSAwP2asLWQ54GaLvrjFQJX9T9hu6B6VNnGSQBTRUcG1mEhgqX5zdL4yUUhEKz6mFYNEDQ6YGy681H4gwm6x",
  "key15": "4PNCgAFWoyuEaMpwaApu6qLMEFeyBSyYF3yR6CfJuSj1omjDedwfPqUqcapBR7uLw2mLZAzXhbQaz7RjWeS7ojeX",
  "key16": "GXJKY7udbgSpccxYigw97CnuH2cB8fciLC1nfHu6Ubs4mZoC6of6JSY1iALgNZcXxYZp5Gm5g1aQC6K2UusgmKN",
  "key17": "5tQX886i8fynnTs514iVS2J4tiKpKviM2refgx22jr4RNvi18a3LXND5Mrjw7vpQYMqWKWyhctP8pwm2pvBCBnwy",
  "key18": "422XpPSA58qmPHEB6L6Ab7uVZzuQb5cAUgse5AC2atCfTSx5bb6jmsZm1HsBntk4vwHQiYgz4tYNwHfxRSdy51MK",
  "key19": "66vseKmdmmayBw1Y7YbF3XiiykDJ6iaDTHWZbsV5W6xu1JSJJEsH1mqvxDuNU7rYhrX7DzbZhbFMmd1xjq4vXb6t",
  "key20": "5csytDfnEfzVRbqX1vFJzfT188z9picCbtdzCer7ii4ZaC95QHJjvJm8Kp2ccGPmuiUw9PMgRQU8fwMmQf93oRD5",
  "key21": "4xx9viALb2fqbGMVAXgk71yRY7uCYJVYgf8NRSrxtXxwLehpWxFqD2q3ByX7nrDXujWmaz5Sv4CNW89nm5PA9YLq",
  "key22": "2XVerxKzTdwV8HspxHdSezGpSd86zCkT8fhUqYemreS1G2XohZU4rUw3bjD6dy1dPSmqC2aMS4WFNQ9t4MFMo1YA",
  "key23": "HdQWd7dGc5odMBDuzmtpECNnUau92DuhDs9SaVKwAnsa9Bg6pdLQTp8sA7G5KsW9oo2k9Cw3ydS5AKPV83xNKq1",
  "key24": "2QwY6bWCQdSy5CW8DAxSwLfMGCh23jkJU8h8aypz1oGKATUQScbFtFgnEYSYr9yjqUnYapTWwR5rA9K3iFd9snxT",
  "key25": "2mMt8eeHcufX6dVqHAMhga84khC5mW9WX2rcFUzwcEdhDypEsyqNGxXzPxzucHgdMMDfyqQYfbUFwqk9ahVp19Xw",
  "key26": "3pF5bKVDw82XhcyAC7uNdWWxPWRKkvnNVKuAfakBuZHqKk7hvndV9Qs73oDZYLLxpuNDqr9gUofupeb6hBVHqH9J",
  "key27": "3xktxpKTQpcQ3AsWHPv1eHtVik2HuJMK3CnNUBZy6KV5tcQ4FpmPwozARLjbFRm876fvv5EMXPdEnWG1HiAa5sgS",
  "key28": "2VBzKm7xzweMLwonRS7t3WRn1HwmpJJzAQcLQn9Ahf5LGbXANr55aa6i6TEnVD543zA5Y5EUM4SeR1YqRoGccLCd",
  "key29": "2oryGrjXcdsahGWs5xog6WDVHsFr8Hi7RGWTtfzzt9c23FgYAPtkBTmL9jkzdceU4PHnDTFR3wmwAfrvYt97kf5P"
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
