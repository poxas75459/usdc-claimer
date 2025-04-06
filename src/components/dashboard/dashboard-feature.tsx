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
    "5E4jTwuDtmPfCKB5Xxbdp8hYCDkWrf2UvJVk4NbVK8ruLRdTQkE4VBjkpcSvJd3EfxfcmdgfhUBMvEbusjpiTj8T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XgBN149HRo64e1hd1YYCpNYSMszRvENooYpgLKzuD6JSEeooRykU6dMJ4XWJeYy7vqiauugihkZTUmLDHZPBDjq",
  "key1": "4CCgVGfhvsPidC4E61dv2zbKMu6wwVp12buQBr2LT2UojZGTcaivu7nr8XYTaZ6enC5QxXjzjZm5SHsE981BD843",
  "key2": "4kBx4aT8L1NzhtH1qmyfxGasy2gpSswWcSqgXr29m7m1eXYXjaP9XbSEdvgyWtyiNBA91BUFKZ2uv7d7zR97yDWg",
  "key3": "fVYq1rG3FV6NcwBipGYbsEEczb3aRzhxjiNvPhgbWqpvKfTWvwuMLgBgz2bxi9pgkXdM9uFUFFD6TWJSxQNLARb",
  "key4": "6xjco6ZFrV5iJxGCCXAuNngy5kUcaLwLzC96T5NUZNu4urQLTWisaX35pjWkngDUcLUszue5nV5Jk3oBxWD8r9u",
  "key5": "5LFSk3iFiQdMGd9uJEsDtJiuxDE4VPqxSLn7X2iLRLNEL69mowscDuc7e4AWFjQnQkvPpLsW59hY9mnEtrtXSpSr",
  "key6": "2SpzJnCsjY1ZSsosx6t1dMwgs5fQUS1CCrZXPrGWSmPFGBp2ota4g592PFjV7BmYYsy9AM92CUc8VRdxkMaVRVq5",
  "key7": "315r56SBdySj5VTBaFishzumzCp4SMrufSa5QRKWy6ciGs7heMySq1mCRqEaDxUHyHgA6vrRJsTRV5DJ1sAjg5ps",
  "key8": "4oLGe14HZ8dZDv87VoeKhPF7DDbhi2BPuArM5eqMDyQtJXVdZDS7gjKj7ywmYZsrTDapDExZFx7svqStoZvHu1nP",
  "key9": "4yfx1zU967d2MdAZ4FgxrmgMdpWoDaoRv1Ye5W691fdfz1VpAmx4jke9Y9DewANFZmo6gz8EoafWNiVBLd1MBiXz",
  "key10": "5JfT6yZF8XSRVnshrRWTVtLz6eFC1AzhpxLAn5Kr8mL8qNL2UZnNW3ybXZfWqAEqF4b7nyHg5zMJ8kUSfqx4iEMf",
  "key11": "5jR2N1K2SNDkVqS9PK7WHzSX4JFx7q2yeYyQDYDfEr9ak2waodJ9QHYC7irgy7iQf7ZHSCbimkokix34BXfFhP1q",
  "key12": "4iKX8nCc5qz9uZuvpE9Wo88jTuwsJpZ21r3P16tSpL2bqSPQdxjd1igXPDentmSpgMobi3hB9zhAxzTtQtPuwYfu",
  "key13": "j4FRjvPwVhbD6dDFinj6aaforsAMXx7UP4UU1mdhzfNthTHF9bUQmkXCCMWqxKftfWrfDX7cCXwDd9X2EGm9SWM",
  "key14": "3jNqDsN99hAa27EZkANhVYFkQ253w6P1ZtPKLXeto9hDikRPsM9ZdyQpXUVJbF42jPaygGDTWk3r7XJ7m4jKZEXP",
  "key15": "3xFnDFZNTB5iHAvbPpU5siHMPjuMXUr57NbmkmQavZgKVMhTekU32jZt7DbE2mxA374JeGSZ1rxAuaT1PKBmoM1d",
  "key16": "3aZDkyzB8CdJsUAxFNfhnLxKCgkQZ15xPJKxw2u8fCcqAey8PmDW3SdSU4qaCTaoLKLb1Y65DKVXDG3WeK8ZCnKy",
  "key17": "pV7mcuBd9dD1hU7RinveJgyHNNB9CxkScDAMgVzZuqp8YntFDHpPmwWqD6cRvajcLYZMj8Cw4wJpnxfXBZhLHMg",
  "key18": "2khsDV4XShAfHYjjRhD3Hc94qnz3iH74ydSxfkjvbU3DMUphy1R1DrgzJLZ8oQUAEPPFXsEXEajqK2NbbjHJX8Pu",
  "key19": "3sienruQhqAwh6q1RsAqseZG44w5ZuJJJwMoK1eFkGq6mv9o8Gg2D9e7neG2cRcBmcRdHTNHbkptmqCY1ShzAehf",
  "key20": "47g4pa2QCAPKB8VQRrfPkib8iM9mQHFiE7mHZ1GcGWzKxakAoNpYFnVvd4Jj5SzwwRMDBVh6wRxP1jsNypvYqnaY",
  "key21": "4UCWyvkK72BixfaQaNrHNWPGNg8qeD5rGSGR3p6TQfJeLk2MK7dW35k8m29aL29tGP761J9TvsxtMc9zyM839R3B",
  "key22": "2TookoQ1a4ybToUDdnPfXJxijNQV2AbdNg2gtXrWk2kMTVrHRKXdCkwYtNf7erUGueNCD6xkxKZ823dLydvEotzb",
  "key23": "5TUvK1xmkJvL1Kf9L1XA1JsxkrhzGPcdxuVYCjKQNastrQVNUAj1Gdp7VY2BvhHeTnAjwNVN2YSfWHDB7y5N1pvT",
  "key24": "5yKLXMcBiX4Wi1dXkQfzm1xxaK7NTqXr4AuiaECiEyQrTy8AeAcyMysLTo1wGMD8Z2zqcqY4sBnY6Y7DA8KUqXus",
  "key25": "3iCmrEbTHBZCxegQzAqZH42SCC7rGokwJLhWtuWrDmZFEadDTWAhLkwUHfNNt56Kz1RybmafbvNCwehjerfFEUr5",
  "key26": "3xYGNvvX3qneaDJxRTgHwnwihdghYBXR4sWVQZ57HXi68xZiKPhV9wGVWwgQfc8N8KhJWUGsc4UopNQeCcFR5rTi"
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
