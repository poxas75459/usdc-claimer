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
    "5Ab1KYfUsErYFMdx7oBpiP1xzZzUFUzFVpxNYdpsdmKRFhrk2C1oAiwEjgb5phWBCjjRh9srXhYwptFHLJahKAi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LUaBmaRzpapBzGgxL4jgGru5JEtiQHqXzcMLdiPqSeoJrgE8B2Q9EwgDmESKmpFh2eHXCZvsTKYkCvsg2Jnzx2e",
  "key1": "ZqaV3nEiX7LXJUG3nWxNJu9eoCdCEihKDbht2PR9NkrKq2PQ2bmeZFLkVVbFgCQ7XoZrV5VsSDLFu96MvtiJj5v",
  "key2": "NBjKHKZSNiZebjVUW1vg6eHWALfdyVm2WwTDg912WMCsZwUAjxt52qpzvgPs6Vr2SuCsf2dqFjXU71wKiuUNutn",
  "key3": "2orgaSp2aNc1swMa8xp3TtnneNuV3SrtPecaeDej73E8SkqKmZdXzg7g8sfeV4gDA27fXncByEkLncPKaEQeRjuL",
  "key4": "5vWMVCBDgjsQvbuAL3R8Kcf5ctQ7fQR24A98z5Va6UkfLmFKt7Y9aHSNEccsDeeZJp8hNd78WeQAJ7qPW8iJuZJ9",
  "key5": "3BEgESR3gxJPZFAj9veK5UKzSpsH5hbU4DNVdvpXHY8DCkbfZHtceGLEdMJqW4otpXkiRaHBAC8YAVcyj4iVYTBk",
  "key6": "4xdUyCKdcRnpBGF18WwiNdmgpfLKZRbgki4KgmLL7MwNojC3p2FnxGeqkoysT2KdPgBNwYrnW6V9fCKgYH9R1oAk",
  "key7": "eVSZtYdoiYPKAzdHPkw3yNcSpzK4AFUfwMEtXGt5HHheurA1rWwWz1LvmHzJif5XR2mi1KzP4WPaZK58Mg8pcVw",
  "key8": "rqBj2MBSaFNMp9zkqVQMjspVEAnRMpTG1LzLp6itcBJcgxbVn1VYqvSHayT767FpD1DSGuRH583skmntntVUmZG",
  "key9": "MCR8DLXeB9U5x8ByULvyuPmVvTKH2EYV5d3EXMMuWbvFEeN3rxR4urxFnK92AWymH7aUXV7UCQep4QkDKmjvcew",
  "key10": "2Z1zexVS5a9DVSedy1xRaXnYVZv3H8uzcC3Y7ehJJ5ysDYYRAbMQgs3n5hBVPRYvCVN3DchvHwSau1LepeVN8Mza",
  "key11": "18XvcGPdEHXRNmYzX4ShPgFAE7FWvHwZ9ZDhzBvp5YmEcfAZt8uFRr5u71HcmHyMJsWbobjsGd1nhi5rLocpRRA",
  "key12": "49QT7kitgnGA5UabhRhpdHed1DMGWy8dwyFyngaBCMpp5u2FyaDt84A99HNgCgSGAujhVFmdFRK9PxQb6FYKeNpq",
  "key13": "1diKBGHCBTrxEg137GDamhZRquhbhWoHsAjPc3Jcf7HTPbMsrb8VAN1mirFmBrPfCPxiLoJbpz5sq1EevqJbLQ7",
  "key14": "42U2QfwShKjvj373K6ABjrYbadTAJxkbseNxn19zkSSA2ZubUXQUZ1EiUw8ZpcsTQYSNQMKXVPgcBKqfGEoY5Vnv",
  "key15": "HF4ToxXdhVKLx9X5rQ2CD5krdD47yUidhvHGxRyX5y8JeaBhPQFvMaKvnnjvQxoGKsAxeUm4jVD3J1T1aLTSVQw",
  "key16": "4LB1SdfoFg4bAeYSAspc8NUaEpQuNs28odVx3c9kxif5RptB994rE6T83cdTXgxuFNjEyvyXYZAMRk7oWX9HXdgP",
  "key17": "yVvMiR6kvHJghFeRqt6KE12StbN6rhK3XSD7rE8iPNpEq2G2Rqp2f1dsVyaY2xAcA7wzGckES3HcEjgWoAXNEcz",
  "key18": "34ETF6MCGfox6RhgzhCtbYNzVjCpUxrPbKQsSDLjeGLxw8LwC9A4CzNV6Gw9EoPokLJFBwJHgTinzTNrsBYccNxn",
  "key19": "VFyGugH1jueWgaosfjd2j6ceWCRFYTgEdLdU4Fda8np3RQNScvqhqg8nq21HN6DKR6KSCoSebtHxpB5UqBJmCtT",
  "key20": "5CMsWE7vqapJxGsB1rVRcKtDvc2DFJVN7wZKexrcip2iV7BB77EDQHDJJDKx8ttQHkKVJn9DPSLK3QUUd97WfCXw",
  "key21": "P2AXqp1jk7gKdKUoKxzfLQn9dZuQ9c4JnyNPAdZyTBo5hcS9U3fowSh17EgAmvhS8zbNUJDPfxFWyECf62xDJDm",
  "key22": "4CiECddYQ19S9rsG9k1b9giC3iqa8o7HCwherCZon3qBPUeTUptw2A6snJedqZsPRerGNtkv9449qFNvk5HKvjD4",
  "key23": "2NZeQBAEBWJafQWJfACTznvhpdz1pCV9Wz8i5KodptTEnMvqXyfvPTaJq64eVz5t2FEz7d8PqZj4TrZ9MHxcbPFV",
  "key24": "2FfSpbzrvkeNq9SmTvWNrBcWWaRCNVEWuvCtmEm1vJ6AZqBoLjubUZj1do8H9PZkCz4nncyzBR4bZks2qGdCMm9V"
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
