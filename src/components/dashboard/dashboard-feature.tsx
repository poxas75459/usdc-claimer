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
    "5auK4BvntvH2VQHjEtMAGRwnBXU1aNNDWM8sDfkM1zztkgNzeBAKhs5MGXNDyL7AvYWooFUtwVJgoTiDEDizzjux"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x5v3vCEMWvTdh5H4gqz7gEgMbkBJ7joUYckKrrYyarEmSJL7oWXCDcrj7Q1AuLWEJMkZWDMyqM19eQthsKFW7aW",
  "key1": "5hHLMXN7uAgKbQum3k4bcYGfvWf6T8AdXpM5bataUfM753ZWXWJ1yo2RNC1vKQhrSfRKHaqrSQkdvFQs74PZ5mow",
  "key2": "4inD3oC75weoY3YuoLQB4j5LyA7aZfZKrbWfhrgDX15ETUiAD3fyttgmfriQxA2zDsDSAbtHk7LF7VUX3TuUS7rK",
  "key3": "4chsbCcBWXasauNvMzdvRrF6ZWFJfFhtgD7v5Gbb5p8eixM55v6DS1NSBMW3oxcYe2nUxMSEuDYZFH8vnyAzTGt7",
  "key4": "3DEwDVNKtj2M7Htyk8o685YGm3FJgG15hsCZPt7hxp64La75K7wYFEXzKEDzszCPsTqPC6L6rhx5ZoQhJG4FSQy6",
  "key5": "22Rtons7YwwiiYpD97ttHjvCPGiB99C98FK4dr7U44xu2R767ep5SntRmD7niy7X7UDgfgFvzaXk5xU6imMk4PsA",
  "key6": "1wUPzuPppjJekC3nUc8W2SExAa1EzDwj8Y5XGsw1LVsciWdxDJpCxu9tHLoWSHnUH9suiZzmHZx6HBbW3Pw3nB4",
  "key7": "5zpeAmDmvfaoMvn2SzWcyayND91MW3NauKQDx42vsSpEo1KzBbKyPpe1wTCwWSqYyhCSwjagjPzqss4YhXxpRHnt",
  "key8": "3XoHPwqhY71uVExVuhcZ8RFDaCiBb12o6EGt8G9TbJKGiBetjnuGoh1LqiXJF7DdsGcr2RNtiEPGH8ELrBvfy8cM",
  "key9": "3atfb65mhkwpe1RgosXMXKL5ReTCzsU9h1p84nnos3JES2eVcqjp3ky3E4GmnEKSkzvksgyci9kTnP2daF5Dt62W",
  "key10": "3UgRLSJiM6jRz8wRL6zSGV3W7ofyqmhNYN1T9SStshJdrQdZHjxeQz4K7TEq5pkiZLGfExHhm7NCxU4GySEJj58K",
  "key11": "KYwAxDFwE7E3s2QRPxA75gUAqbT8crHKdp6akMYCTdEt4eZLqfUT9qnsGHVdGXmRgZSy3LLZcVf997uShgnHCNM",
  "key12": "5n39zUHBA9uZLbDnDakZXnrMfzycCwaCYnVcFy6gCNGkSnTqGVny6cXL7i8JApr3QCQxfVcezUdNjviDJMdTduUn",
  "key13": "2gLCiT3TbqjcsTrs7sdzddLb97LJjRpE9pXE9ssXamYuCv27AbrAxvGRt6BnyuRaoqHozvGmaP2s15KRaMYE1LCj",
  "key14": "4sT9k6MaV5i1vzvPrWAtzkoSwUegM7dA1odazH44RHYEyHxmTP9ftMsSrGJFeSpAgPsRXG24MfTp3aZ7zSj5oUc2",
  "key15": "3WhnyBUVECMDmnmLn9L8FyS259iDa6PJDtFJWcdXV4V8rFTU5QhN6HQZVecYyP6xBuCm9akhD6wevuk6KDhinJkd",
  "key16": "4hatJfYz4gThcQTLFviNPLiHDgLBQ3GfAzEJTBGKLk8SThRRgaURPT24Jz1sVGgv4vh8efrttKosdanZg2x9T1TH",
  "key17": "2JB8aFPYzpcz9Q9HxvAVaD4PLLDgvYnjW5XhuLu6tfwvnDJCqSRsoZdqEkNGaVKcngUNyo6DrjR2y1WoECeYdoGf",
  "key18": "5DCPqkPuR76JfXZxSvGwttVdDm4Y8sY93HEW9fSi3sUx8DpnhbAQPBnFZU2GFnoPYhrsHUJ21spNbNFgacG79kk3",
  "key19": "4ZDcmVEsTpnTe2sYcRf7PXxoghwT9awU2kCXFkaBVpDH9TtBhPi4JjcbSm3zrV3Sqm68Y2JeFq2nnNgB4P63ec8u",
  "key20": "2382j78bCGwefejHkXsY9BMX849i4hRU2FxUvZNhEqxQGe9Cu8Ujso8Sn43sNTab6xA4cM15Z7nntQd4cikUYDoX",
  "key21": "2kJSJh8QYBNsisiYN5skDusxEGAFJNXB6E5juST94KZh2hEsguytGp1cDVMwoMHkzU52Gb4XfzvWs9EJFVENk3uu",
  "key22": "3Vv3Z3ke9fFbm2WndCfntvvEDdZCxATX9gUWrzo692Ud8k4HTyTjeTC5khv2qF2vaU9jdussLQc9WeVY9XvhgSw7",
  "key23": "VfMgUBHY2njZSXZdTQ5qyZB19jkPkHGxvrBXp8zrAykEanZGhM8sDC4RFEPm6S4qf8UX6Dxye1YQdx1VJ6XrHq1",
  "key24": "23QZmv9mzc7CCAzMbKnFPaxRkhBL7M5oJs8BRbtJRcMP1sLHTw6YJvWpkbbQQF7mkTXJeTqqVnbEWtAwHuwriBUJ",
  "key25": "35KEnTT6X1aPwLzqX3H25ddX9y7jKdzYEUw2vVVp1BEYeJZ3mvPviWAnLWN1WRwqtWJVnhkmqwGtD54SQxdJgZti",
  "key26": "4YgkxvT98e9vVsXc2thwUjS5DxqKy9YyNQ3XUahCwkDBwZbLpKrZuUNNyfmzdZVHDLK5rh2fdESWxnizHkYT6UVR",
  "key27": "676DzFnNEogXfKKt8YZjJypSXw9dAyQ77AsXqKXptiKxJFBE9vbUJTCFQN4g6e6eCpJ8QiKnhY6WqcJHkdffvj7G",
  "key28": "4XZEouc6kGjF7bsduXHHYBVobdmSe3Yf9jTLWgSPQ4QrZa7RYnSLP3UxUWyymKhxEmZEiLZMKoA9jLHEN7JKjR1m"
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
