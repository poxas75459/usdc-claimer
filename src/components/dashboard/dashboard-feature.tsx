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
    "2RBNrc4UTrWFStwTHE9QAPa63TBez4SWq6fEEu6hG9rkq8BrJ1qiLWSLi3GDMUhVyj4pznVspUqYh1t7BUYxgyWh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WM5eXq6ZRMe56AyWyDcTYbkLQiPPxtxSntDNQamRxDdYur98jigK2oo7TaRCuuQ1j1apSqaByD6hKYTg2CEz5vx",
  "key1": "4MSiknichY29SDDmUeGFUNkymbY4GFK9nrdY6U1JaXaMAScXEnh1wNjcYScku2kBXTAyebxqPW9ufnTAFxehJ7m",
  "key2": "2BbEoBtqLsfyxoZtbEUL2Ugy6ZmTjaFpkWPvKHe2RtmTXvrJMwHVDWjCTAkiqTn5w5mFgjQq5n1MFhF2Qr8YNKhz",
  "key3": "3Q4MGtnkYFPNy7b4K7bcAXeXqsvTCXQrBrPamQfCbL8CrUgYxvjUMWRs3c8Mm2d2Aseavy9vDgtx94P26NUjKumq",
  "key4": "5PqoxKuebzShEF69Hc9Hdvr4UyCxBbby5c4Ub86PnFE9r8Uoj6jqBFS4ZJQCgqrDEnfMxQVDP7TR3vFhxyLxRxKn",
  "key5": "3UJizG2NpFk3Z9ZM3NnAvecdGhWxd3Jt7g3LZYXi6fL5bN7Tcxdj2aWVppExAXvwZkDnAJDxSJ76Jxj6SPJf4jnN",
  "key6": "ujYCtigAzKhwdwNKeYsSwmrcpaqYQFUmmRyAHzx9sSsiDkAZP9fB2ynNthhDch21DmUbnpotmJ8DDsmrM9iFua7",
  "key7": "4EoqxjTfN7hdWNaFz9Cot1PMmivZGc5X4h2SSrFVRJ2N3puJZ8M1zPbMVpRnrmpLqc7qZ498PAVgiMhoHDj3tpaL",
  "key8": "4XPKxYNVcxVXb6VzhmdznmE7YsF5WG3joSs6Dw1M1vTQqs8Ym733izUrVkyqFnqEP7bptXbkNmC8NeVANEJfCRoF",
  "key9": "2JCSgkZo9Z5TZddQq8qpGLF15fZSLmL2ogiwrJ3Hz3VqDqbbHsqiDqqYUwjNoK423tLDUJHARNFQBip4oDTok1mJ",
  "key10": "5w1THn3QmBLRk5gn98ykn9REesSpAFESRBSrmEKDRP5MzEqtg3gGbnGZdx62ifAjpizP2rPneRhPXhtSPah7c4tf",
  "key11": "CzR8dHio3rPBRR34p8smzBYfyuhFVxaBp66NPXjpecuSyxDNf5nnhdzzA2cqh2vLA1Jo4cygdp64pgiB6p9QYHF",
  "key12": "2cxK8LcgStYXDQvknpQZnJoE6SrPYzQz727cQXB9F6nv2Y8GRx1FT7KJAwtMXPQxyPwwd3qJjHVac7P4w9hsGF7p",
  "key13": "j1qvxcjxvAVkJJLa5oEhrBXGfhmHdsBKyXSkswxf8zwBRfU3XEdkkeKAKsx4TWJP5PxBWQNQZWXUkhzqj1kyyWV",
  "key14": "nUJ4UqK3Yx3QPCJyDyvdxB3uN56csfCA7vPMzaXt9Lfgnz11xH5WDKHhEP5Y8iQoytDbwnkpRUFLSoiFQJT7VV5",
  "key15": "5D63vXujrxhCbjZi9ivqkYeS7TmNx5XQpDkHMnzAVKz36E6kVvhUq56QK8yHQcQgL6mZnV8TFogoNB3HE8Lfu7sS",
  "key16": "2yEziWu7ygEyFbrYyLoxAc6QvNo4qfVBH4N3QEebKpUGRDPvSGjRA1SaaPmP6ZonjorUmWBtCwKRktRKxVwh8sPX",
  "key17": "5T3qqKnJswUp3xs7tDLyS6WNsU2nhFrA4sbwSVf699c77dY5WthvypQFS7u4eENcWLE56NgBFLdaSU1HvSSqmNSB",
  "key18": "5bhhVNUuH1BfQsaExMkzgKD3yhATjVGyauS64wwjDSrccgeU2gCiw2yZFWLXTAcSU6Q8dFAYJM31ovmxTsQ6SGvG",
  "key19": "4tSEQc9mRNQ37PNWvLfUHkujF7g18d2K5WGxCJW27RG8Herfr1erQkznzaGKY7akERmzJ3PCme4QJR8sQ6gm1AAy",
  "key20": "57gCYJttcyw7NKHtfEJdaCeuC7BgD2qhiyak2zcHUYS9RqE4N19G3PvMXkv7GvpM3sVEQBun9bMLLJK9YETCNYCR",
  "key21": "2YsTEmFKY6odw4QFh2RiW9fUBDX355Q1FHuqCNH5FGyx4BRyCNSduEAHuPwABJvgKEPJJZvUTb8ewfmd7QWCLmru",
  "key22": "5UBPiYtNmrNMvCZTLyjiLgnNbjj9YdCfKcVeEcBsMQXv8B6ouHurgfnVsiGCFe4V1DACAv4JJoQqsZcW8QqFAkt3",
  "key23": "2P5Zn7JShrw9BfPMu9wgLJaitEmGSAYUjjCoA4vXQXN7NzBS1hGLoHaujzSJpEAzJ6eQcet3cmPBznurRSPLHtzY",
  "key24": "2iGNsRysVK8vG999MM79LzDCRuGUqBUFHTnAJGekfPbnnEvxGYpeURAGmoM8j2ePgDwbWiB6jerNSc4zXub6wxA1",
  "key25": "361fjQF7tCFe8CtkoyicaBPszYerEg6BRfbuZ3z93Tk8z4PhdjgGkyjFYmDNKGoQPzokjC4sbixfaoJhLwqoAZY"
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
