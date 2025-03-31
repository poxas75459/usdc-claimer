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
    "66CXqiDFrhJaDuTk9C1MZPhCca62vsznY9vGPwo9gWVheQwzLNc1esS15ArKmfDyQvHxuAyUeETDdzL3U7NKw3hL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UFHBGsbphbrLA3vduuRbUe6LG2iNFbgeNWP4sJc3GG9rM1jz1GHdf7QJKQnc1KvXBsHYhAnGbDG9gi7Hw1VzgUe",
  "key1": "2ymsWuA9vjU5t5QeWN1va9BCPLAsLBwPJpLPBm13VuK6xZ1ULvfpAW396Lx49HpVtSBkQNysuoRc41T1WShvMqGo",
  "key2": "2EeE6hL2HP3xNbewfXGPn3xFZ2Ym7g16j1GWccrvz78Hc7YbFdqwLqZSU9YLp9Q3CjZ7Uc6DUXy7J3j4gQB9mRvE",
  "key3": "2CZBRrABc6acsraHSSXYaf9iizk9gamX2EgDRU9rbm8Gq6KjjaK6inAaL1NL8dcXrgio33rkwRhf2kQLz17oMYjz",
  "key4": "U1W8CdsBDrsXFDHUbTxdNBHQQcetajKETEQZhv5NBrw2H3y7VECbveEaVYP6zPGH7oNZG3ad6zGUqGmN1ybt3mo",
  "key5": "4nkPE1SWfGsSFQZNk6shtG8LyfAVqcyTSVWnFvb5gVUhJPo7d2J17yygF1hvAkSGWuf5FMM6bxe51Werxs2AeHPn",
  "key6": "4tKS5fiiMpYE2nPtiijY56HsvTzQvfVqY9MwiPdwctxT6WYfA4Hh6yxEo7hkKN8Ds3VCBdCUBgGQpaU69xegEf6i",
  "key7": "3WQQzr9T3W198MnnMBDz5hrYv7MdgTdPuGYUTwd5zFKyVYS5n9zJ1xomsE9fE4ZZnRYDi6rKmpJMakUL2dN2aQaD",
  "key8": "2fE8zZyDwm1R84d5pwTNsyHuBpiMpCBSRZnVbw36bAmdkrAvHUoNqTykoMTVyya8pfNYqS7t9noifayANNuBGwYh",
  "key9": "3wp8DremgmDEwd55hzxu7YoZmzMFNVz4hk8sJQV29ks9QJqPdw43kmnvFZJN5xpLyEAQNLUTWPCWxFWNeVrL4S6v",
  "key10": "2esrvQaeBdaBgYDvRWiDaABFSHq1NYUptAPNGugaLwdbZ1wUwZJePs7wgLEXjbsMPbSgWHf51wRUqjTaXorwbFPn",
  "key11": "4XrNfbVjNycb1KsB7RfaZ6cYtbHDgJSU4zQMh2QU9oodAtRgvbdhrPVChMztVhxCwz6i1giEDdGxsxaUc5TsT8hX",
  "key12": "XuFWxjCkjErGdE3AcUXNt9EenaHkgptNXUXjMjGaaxkGdNdwyPTB72EZTsZHcZyPnBVdFCHMtrXkB64Nm8LwNDs",
  "key13": "4KHcTJJiLrFHdN6q5yYpXtFs3Kw5QSdfTxQFnfVzY7dHKjr3w852eSwNtZanis8bcLHNyQPs3Chhh9ZuJMQ8e5GT",
  "key14": "2B55GoJJNykt1iQ9JiKwXZzQ6kfQbrNhLMN8uZD3wRnQ87daHjzgoHjra9L4xJMonSJTXpGNUKByPkZhZBDZKJvC",
  "key15": "5bLJxQZFv4yGuqkPNvLWiWvfk2WafcJyrcCzSBV6baHvVYnZXgmvAZBkvCC5rX5BLApeX7bta6jf7DSEyZeyYLLg",
  "key16": "cXebsYtQJ3CGAxy1NPnNNQF4tjJ6mJKGo2nzwB3pRfA86vcUgg7E8vs9xd4K39zSyBEjHa6Pbpf3HmftUDJ1pT6",
  "key17": "4mtE19VkqD9XJkTpCJCsBc2pTfAeK2NQtsH9XcBQo875AsRpgB6RKt4VHAK4M5mhCJyLFu5ppSuUJc57C6kbAhs9",
  "key18": "5rxfThHZzGPxMzRseetdnmo9AgLrweQyKdC8scaC2vV7qBWaCRkGFECjd9NaJMsLM6ypctwzLQEdzjAFoSp938eK",
  "key19": "41yTVYi7UhZWBAPn9MNCLJHHK9kyL78URh11bYVfSJGZuMxNJGeCnYimirrxnDWWCy7NPVucVAaAgzZ5rkahScj",
  "key20": "4mKdgYWAxNcbmZzrdpFKeQNmaHe5444KjpfexLHGThtwULe1G7uMK695eb5JPYWZ7r3LnQfnwLAq6EMZKiEiRQai",
  "key21": "2HZoEF86uugjt49q3zhyecx9BkHKgbMswBpNoELxGo7PJiNBB32HbvWcNFWxxssEYG6mQQQ2ddxnd3srbVkUVKFm",
  "key22": "3RRy5vR2EaDKmhkfXmwQ2ShGDyseLBDsV2V2P71YiCxGzJPZNnxLKhXBxLoSnGzYLnruhkaqoFUfmnziRgbakBR8",
  "key23": "2qFjWCkKHikwbKoVkfQQy7ZVqch1e5cUWbJfYALCKJZDnQZAj5JWQeknwdbzXxcjWcemutFPFfF3xf7PkknH1ofB",
  "key24": "5qjtzLLAmAD7WvMnnsH9vF6FWRkN7ffcYbhnSREAk2m9eXniaXmVYmsVdbtsRc15eHivNXikHW66RmChJ7JpAT1w",
  "key25": "cbT2Fv6AUdT2PpppwNWw9wYPPsMiChZpPFWDcKZss9UKwzYNhm6RWF1jM6TH9tXhnBdBGquH5vJFeUj6v86vBK9",
  "key26": "5ha5xA439mZs8UTnx2ED7A86Hhvs9e1mhGEhAyXEHJ7tFJsyZNrLFcUHfiyakFuUrB1p6uNmo2W6PhMmvSPRhkBP",
  "key27": "Fi5DHWdL5mPDqFm1MA6GDCBT2yesvk4HcrJFmyqf41yk4YuZfywiM8nCfmxpUiPzGAcEdoiStTYKR5K8vuKwohx",
  "key28": "7CBMYRxa4Tf6FRLM5KZ72JieqzAuWCPorVheEncgzM9sUuoxWFcAKMPPHukxxufrGaHooWFYHM4tLBioR4717Ud",
  "key29": "2iETB3Zn9U1jptQHvLUnGJpgoxp6EGV3SAYZsELSHBYNUQEZsG3XgvwuUntwFTJ2BhEekKGWysYcWwsWiH7imvaD",
  "key30": "4LJP9M2vk1AogxeHACurQfQexXhg6Bn4CE8PYkYi2wnX7RsGmNbgzhKBCx6yRGdky3sJ7Z9gpXYToLpNQMvL8RJ",
  "key31": "6p89NR7LkXFcDjbVzmJzXQX8sDvpFfegwKQazzjUhwrtvU6jnrHMxTcddz1yDVEeyjvfQC1wUeEp9a98fMvcTMm",
  "key32": "HGoWVrfLxdo5my6cCsq4Y1cwgNeT58RNG5BrX4EaEcZHWT5vV6QdbfeahvuHgVawYpDZFeD7EjzLHNx7YRQc3RD"
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
