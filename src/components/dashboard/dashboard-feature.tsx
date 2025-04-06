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
    "4UEz7Kmqjmx56aCar9CFHY65P42ZG5nfFiB47HohE5QugAkxoFnLkc1iutWpZCg7eKipsFJ8An4TwCz5n8cPanUt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LkLirhtW1XfxdmocZHQ7Sja6NCCzxWSxgz2R8HSgbQYs76QvKkgfT66wBrM2bKM8MdzFykXsbkvKGp9RXyXFRRn",
  "key1": "249S5Nr2BbHrzs4QFR8BXGCZxBYhsLU2A2tqx19uhWQMY4FPzcC2GmodQTWT27GpbU1tGEEuK1sHWsc41M2ZKdGL",
  "key2": "mGkTxAmpaTBtcRCxRP89GHBo7MbeYQu1oSKai1G6Z1U2XhhGSFGAJybvV6RMdRkfUb3X6agjqRdLfa5Yb35F5En",
  "key3": "2QGRZyUGHpxps3jGCDqbA8XQJUCYF9cYC3ZwZ8MHpqWgJwQNMvPBa42dFhL13qDn3ZB4fjhCodFjm17ne4mTGu1D",
  "key4": "4PVYjwMa56mVozjMr5eYEkX5rUfw9NJvz9K3Typ79D1PQfX2FbTmfkDpwVW33eQVEYBBx4tcHpm25vgrMzGu4DMg",
  "key5": "2xV8fHdoAiw7zMbtxviugSo7ds8Jbpcs56bapxCeBY82PPk4cHVxQcNya2nLQ23EYwE6qtYaGVXLFAP4mw6sn2ku",
  "key6": "24pQinFLbnn1nuMngXX1oVhhRJftTdi7TTzeuM2mjSeZMbaEmRAYkmhCsy428QcE4RLZ5JiCSCmbaZMYmVt7Y9Ah",
  "key7": "4qLtJh4v2CM1F1tXthZ7HhFbzAEZctD9Ho9Ae26JnjS9wCzMQDdpYeUypkD44VyfRhtVEYRx84SbTzUm7mGweV7o",
  "key8": "54fXi4r4c5vyTcJZPn43xQLpAhi7HgCFfyKEH3bPEfu9JPe3u6rPmKtuvpoxR6aQxmw63zba22xpusYso1x14ozB",
  "key9": "iHDVtERqYyYtQGrHPHUzphbfxWnaeBdbfSaqejeaVo5Sb17c7NBa7NnWjQuuv49S7hTBSV9AgCCPE4EaQ6UTQn8",
  "key10": "5ic47tALeJehrykqHprihWiNjZimuhu9b4pXR9JVvKw77BpaU25Y3kqeE4oVKfzyT5ENJeniTRc7exjgEQeimqrj",
  "key11": "2CNYjmaYgwsE7PsAhDyDWaPuEN2zu69diThUPXirz5aCnceAB6ZrPa3JCWkPMTXDp3WXkNj8nwXSd3QbSsxLq8zo",
  "key12": "5AEjt7nmTxxGnkAARVvcoo8dZFgLLJuG2NM6YQzwqS28Eh6ifAgvBuxuBK8QXjeeGXH9JQxTuqEh4nZxsutTGKgP",
  "key13": "3mbUYLt8xnox63Rd5LSRxaXJ5jMM9gamY3jUP2W3jLgGJFzco45iNMHzLyCe4UAGsmHEqkhf4qEkZh4nF2HSp3Ps",
  "key14": "5EhCTVXFytfs6rh7GQeRPgshysyprjrK2s5hcrVoQRQCqMjG1TJ3zeVbT6oLxtbocpqU3eNH1N7gCTjK1PNGHpUx",
  "key15": "7PoWRXmE7etqwZHmxawNywGKwqF97dh72rVpXqZjcAr8sxxeCaX2LHF3HQfsvvfevi6Zs93W7jNxg5cQwwMM65s",
  "key16": "2qjQwM12jQUSkionW12BjC8FBTAFgtEJ82fwFhBQ1wcQcE95xKZD2VpuebuRbQuqP7GGyLCgDHK6iYCj4RH3oQRY",
  "key17": "3AaTf4dMCf6LAjnsWrBEHbGs3D3qnoVm8SRDDAWjgwtrkQCoWWCvFtTE69cYba5PzKLXDWApsqAxXpkPBrWGCYzV",
  "key18": "5ddyKdXvdtAYbEpiz4gm5bL4iFC7fpH6TAbv7maoYi8rp5qkP7JTk6MpRBFEgjWHEhkqDdmWkbJL9AnsUR8yTC6B",
  "key19": "LtEvYdLmZbtXk4fhWqLkW4RD6NF7jHktWsyipiv72yaCjnrK6Y38ajhxBQzbLhWpPrX4usa7Y9YkMj8zEkHuXzi",
  "key20": "zsVQ53m68sfDyj4V6WUbnB6skMSWcWBJguCvSKVAnukXQWyRBWuGJzEuybcNy8rnPKobsq4KRxperQKpjaH6tk6",
  "key21": "5qWRXdkNkeaUTesZPuCYiWEQ1QoB2uKSZxpDNcXPU7D1LtxDjkn6EeCeijgWgUwzJR9hbd1h42ACSKwfpN7uWsCe",
  "key22": "375HM9EAqvExcVwZoYJom3b49kKC7bs4jr7ofvhDs4jTRLB5ukba5HBeTcnturFq4FQazEwrDsJtMj5Hfu34hQNq",
  "key23": "5D2vuTDW5yznit8N66pCHo5h8tLUfhcqeR9coFQQn98WFPE2rMU9ZEDowuEfJVSFBF6vszWK3YDeNgeXNnSdiux4",
  "key24": "3cHAjP3B2RgAkXipT5brooKP4wTCcMQsJkjLptRm1Gg3x7i1TmPAKwQc2sfWAuQZtgjkg6bRwrJ7tnMJgMkGxe1u",
  "key25": "5TkNo79g1CKeonPhFBAtLUy4W4PPLfSB8ewTsYpK9pR4kxMHsUUhV3yn3je41ap5i3Penu44H9zf4M4D8AentR5x",
  "key26": "5qJxtEeb9trBJFfXAMDT7JyG7wNnZzn8AtTUvewCZ2MZfUxbyA8qgc8K2cy3VJh5rPxDcK53z88hWi7AfeobqKq4",
  "key27": "3gj75LifDqqMsyasHgsmekajkS7DNeKy53Py9RwcJKspJDugBntezRrGHmk1j1QiTfEJPtTF1o6yTUsPUdw99H94"
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
