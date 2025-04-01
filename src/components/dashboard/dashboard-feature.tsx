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
    "8k6Y7UVU5ycFHJjUtrkFG4VJ3JcEQTYbFT3USArvrqxeMnRNSDkEMky9Frhe6KxskwHbMGntuPXaY11P9rGDZLN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GfgqaFfQ8i5kyUMAPDa7k9Ey5DNeQ4Jbw9jne8JoTeYXKWx4u3YKrjb8VX43c3A1fJMDHRWcCQX4jxjqorkjno6",
  "key1": "34MNuRVYpFcBFc81YyFSnvGwK7tWcUhztvaQKtXvbDy15T8EgBGa9dLCCCMSLG5gDWcmBwjiYsFMruRbgfqjtgEX",
  "key2": "EF5xz1kYeQwYYPE4BnSPp7XQmmVSKmtU2MKSQuemR6zFBsKcFB4MwWVq8ZHUNcinVAsZAUA6U5mD6MdbFM1xR6m",
  "key3": "5rAUQuAAQLNSvV6xDF5bzSTDrqH2U2Tsh9x68Brc9vdzQMVgJwtpkGEhQKxnRB5KHtcFmChfUynivCfmUJWMqMEF",
  "key4": "4aWYD2sg4HApudgtzPJ4VwdHJ4F3qC3HsTQ3FrYoPQ7RR8Xt6kbZsqGiAQGkhkAmNbVrc2XHiZ3sxWD2cfSLkmke",
  "key5": "2QwGBiRLz2m7opL2HqefYRaSXejYavGL4QfYhhjhdNFTJZoRdTBWxW2qaFUnBnM8xE3EGdaZfSjVbrpMLjroJhzB",
  "key6": "2dUJbwT9mqu8Pg3HATqwyBA1baztU2nyWUypXUWXTTx1NfPhcCqbgo86JR2GEfeybYJFBrnju5rtqtmjEuNKq9wX",
  "key7": "3BJ3t3LdtgYRoZ93ca2YzSxTPtQNSSARMC3pAL5hbya8KvoF2fnManjU8dWoGNhg9cEkistyKnCh31xMAjcToRVU",
  "key8": "2m8wWNXCwLNwMdUo5AJFpeH7m6wca2U94oCgLGQ6KNhdTj69S8F5KAiLpNnBFkpTkeBCa4Gtakdvkx7Dvtsinoyz",
  "key9": "66Wngq5nXKn2vLkA35s7LPYyTBNTuTVtSoQdWSeeUto6e2Gj4grisRy7L3NVnMek8proWmUhLJNgdKGcQxWuMWH1",
  "key10": "5F6VAPjxqvtEnGndT6GLLeb1Do3R95SkdrWbuH8We1y9KD1PF48Fp3DjGZeHYACPvE8vB1gnjPwkivprrTwHqtR1",
  "key11": "4Uz1SiNEx3H7cRoAieBN4VKmAfie5Rxb23Nu7zWtgpVwr3coVPReuUr3DiKpgCpS7Fdom2UsCiAUM2orQ7q1zaeg",
  "key12": "4g1Kf3rg8M8g1KDW6vrHztsH1R5L5uhiPLovdodGTMzgWy6NNuXXoyrV279KW6RWMHxcjiUuWiyicrgMsXUN96j5",
  "key13": "3bisdHNPPmVvRPYgn4G85L4HWEH5bdASvGzU9GANyRrFuJrikUzvYmtoF36RwK9yYXQWpEGDnxcurrsgUHgUP9mc",
  "key14": "4qbxoPiVovfDrWBsWgzr4ZkigcBcRsnMZ9bjffir1vS3H4ReahMFaXjuJQ2hn3BPH3gXCgDDu1kfuTgh47s7najn",
  "key15": "4mQK5Pzp2WGx56sMimCxpaJBqd3n5pK5T372R3i1mNxFAU11JSM7V3stpRwbEDs19LModDyHTSpbfaAaV1PVJghc",
  "key16": "2bm6KXA6Q3YNNNQ59cRjejm5nMGuyDnNgfGHfbVwhxqj85SvXUnjirQFSqZiHTW4msAt9mdPwpVSQ2bCRUBZpe5",
  "key17": "6q9zx1WxEwpSApHZfxm266SFbBDmhCjVTFUYXe8R6QMEfT9TgE9xDxPcYFji7yHUCm9wx3uXPJFQ7A7TaQmsr7N",
  "key18": "3tfzxZAdgXvBZji2DF9Qh3D8ys6VEtybaE1SdSJ1X1eUdCrSoTNbepRcGXkjc1DBK7fkGBXMXmkS3SZsvhHGuKxz",
  "key19": "4SJbFt4nFcytPJSrW1VZGeVAnmi31JZ7YNuhVpPf5KMiuqFo9YfJGdNNRy27Woo1RivuchQ1dFCya6EZ6hutAGX6",
  "key20": "5mGyPi5hsKHQWLQVnsxyZiiJ3odkzvhE2gWVRMn6nLZQpqWMMQVuETnPY6bHMxQbZhjBDSpQ1vAapXfo6Hh8vxkz",
  "key21": "3UCxQ3r2FY2HZ5wue6Mq881gynbtoYCza9KD2kUZc1rHzVBAGDaD73iqcXUDzEXuX1FqUeTiDieKXfbzE6KQAf5U",
  "key22": "2JQGai5J5t76Ri9unDUqh985oEDEhVBBbjFyVoVuXGkR8CuHeTayJqWxoM2Nw5tDHEezHAYiXZqCQSeXEmZmbjU",
  "key23": "67UsWPfmUGtnqqGQ2bN7ajXufXGW3sDWZYd2aYuYRy7JLVSfeiZfT414sVeAhNH6LF65zsJQ8ZSkNoxDmUd6uSnP",
  "key24": "5WS3S15Nj6PQCdMDDe3Shb4PSqu7J5EMxGUkydUhR8GRS6cABJvvwKLhggizQtSorAn8zdoPvoxcZz6uvceNgNkx"
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
