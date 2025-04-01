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
    "CRnf5JDiBTVc6vv2xeDture1jXvrZSx1UXVk1GVA6rCduA57Aym49kTM9BvwfiwFDstKBTgcyAQcyF5UNvCwvCP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nvxL3RPkdL7STkznzugtyUWDTEcLYhSJKRLQBtjfPDZcVvuaKMA1KnV6v7DqE6Qa6jeXmZnYn7ge8AyyhPfJhDN",
  "key1": "27ja4n9DV1dxGE8WRLo9tpAnHaf2sP6j65r1RQsn3KReJXvJopekfMnjS7bEbPU86sew9AtUe5Egq7Kyd6vw2NtX",
  "key2": "25meoWLFbZYZZcE85ghAPSWpi6DGSxWarTfDJxuHqTf1K2uCEFq9ZWgDbZoKsoHWonVkK5YzPe8H94ZF9NyiG2zx",
  "key3": "3HBqDfZU3z8m87Z4watjmVwdPXRng8PzZt3bkjF87YU52mGBJfomgR15Wp1MMa8HzuDC5azJAaRpqGDGjjLA3b9H",
  "key4": "4C3GnmzknWAEtKZyhXFbRtVh6svQ4xBfWBf9VB23zLxp7w2CE7v3kUDipthA4h3KM3gLoVnU4A7WpsX8agwHBfnY",
  "key5": "3Vd5RFXNiKeyaJESRo7AkAjxoFs8c7eY8ntHgqugSg7jADCFtkFCq4Lp68yu5KBWRE1Hm3hawMZQQzEA7uSw6GW2",
  "key6": "3rEGuzbgKoWrXoFRNY2D2EoeCj2wWAB3HWWsyHeGq5axE58AKKVZCRXZcfTdHyef2RiGdvFHyrqNhmDrU8QiMMe5",
  "key7": "MW2ojHkvekvHcjQmD3rNER2gHTdbRUbQ1ConqfQmBFvz4DvAFXc9RAZqejAXWEv3hdMwbwY5E1UoYzoxkAM39Dh",
  "key8": "4epAaiFjFsp7TTqj9CtRreBQe597LdEzdsvYGqELZARpS8wqbc1nnRbk2zpHLNA7nmT6Wogmrs7iTXr9QMQuyrRH",
  "key9": "eDxKJdt7GbKx1KjQ8k8G8tZ5o7FnY2HXg7133kg36TwZwkYqN1nQCvgKmz6P8r9ba1gUhVPVFZ1Vh42yGQLSbfE",
  "key10": "4gBa3gNtMTWbpo3oNcahyvWgqkd73mzGn9CoYQKxsjvdwXM6pAh7TXKARyLqgf7KK8twSFboXYZu53Bkw7qSpY5Z",
  "key11": "2f7ZMKPUEzuBCKPB1goARyLgjhHfLXKXinaT36UBNydv8Qmw62QuHuB9w9FHCpkER9CgAfmCdrKxcQczvj5JDv1Z",
  "key12": "3aTidKVG5gsCx5kSYiEy5XxQ5sn8sNwfsafei3TFRr2chXpR3JAjeyJ5wPk2h9c9uYf66T251znupXRVUVkatkaC",
  "key13": "4rHeKChcrBeBj2MjDexbeQocbqRDsih1sKmZ2NVVc5SbegeGXazwpUtMQJ6rtsnngBv7MUSAD63ZmfzBChHUySsV",
  "key14": "28UosmKAVLomGSfXEBNq4oNj7cbdapTRi76TVjpQTjVYCmiyEcUNkG3QiRvKHaXGyCCK2tG8eqqg7EQFvzNRKe8L",
  "key15": "4SYZ4oWWW1xKoaSAgbxBZosXZJVXbk3CvFhLGkNDn924qyAjVsXZJEUid45fxNw7Ya8QB12KAfVRWU4wBHc2sMDx",
  "key16": "4Tn4bEop9jFAvjbdbqUXbM4ZtZMynob34ZEjftPwbvV1KGjvZEZTA9bSLyu1ocGWP5DpRvdfFJXW6YNr54UDz6ZY",
  "key17": "zHtvLy1kQLojjX3wTChQ4z2cnQbLcD8L71VM1SdHcmZiiUm5amq99amCpf26KKp33kCoHjtY5CoyCv3SGiZUUvv",
  "key18": "3oiG8EjcAoUNuZSWjU6XsRFm17QEb4HC1Ykr6GjNukHzwfwJ7XMKins1gMPm8HMYE6s2PY7VRnn3skct2wbU18eP",
  "key19": "5ArXeiedvrhBZNnGQQkSHkMqfMUSWttsmKHD3qsHzuqosegZBNJRDDPtZZj2hSxNoHPRErWitQ9cuoZc7AJyDwcU",
  "key20": "2VJGgYr2SbzqkmLms3i3vthgxkVgCSMHduACHDNQGdpKDD4TFMuGFPJpiWCQr8AxWXgx4zsrDA9ckdx1TJgm56EQ",
  "key21": "3jGeuTpWSdMxSdMY7HdJS84qcEeeipRtBJPpZZs7ZE6umbh8TxSfQSyKrpLDGhxL3Vp9XLU5Mar8cWAxYVJVsJjw",
  "key22": "3q5S6ufEK33bxwtRR2pFcz4QGoJxNn76egfbgGgNRauREg9XxaXqhnQwNeeW1pS1mgae5NArYjDZ6sE6XHub7rxh",
  "key23": "3RrM56Gb5scV7YTMi9euz2jUkbtFV6goTmsbHBdwA4xD5K8qh8vzaF53SHcLcKVRJqDsaiDzEt4Ztycsg33RaPgv",
  "key24": "27nwEmA71MburYCgsVGUujRfgNxNwvNDhwANFfuibL3v5kBi2NyvsTuCPuJJiJQQYfmsukMRvEifBWi37dkxw2ai",
  "key25": "JDfHA7Rk5bHKSNWrW1Hn5qe6BcYe6WTnTUAhDHVkJeLP5xv4q79BBoWvh2fEQi5qGNEZzTsZbhJ14ac9PWYJFkq",
  "key26": "29QFykw5AYTgNFFQAyBxYoNtCk3eHcGHbQy8GJR8egY8E6BoRy8GQYdgqSLmA3i976LXPcNkA6ntQJQax7jAGzCS",
  "key27": "3AEvTmiZFGAEn9UcbX3UKCCDaxfjLwDBKdgLYFBzvxsT1KoVeQiXGmoMjNAqCtVz7d5yyyeZGTsTU6D4MBmF7Wpf"
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
