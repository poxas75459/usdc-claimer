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
    "5yKmKJ2BLvjKYD5K3suBwLiVq5YkAZxVnqpnQrz2UfCE8SJayYQ1q3ukxmYM8jsF3NNZcQoAN9Ni217Kz7oiiVx2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KE5sfSHjM9Jbh3xtbv9BdLdsyfpLBrszACwWJhBmMe93qq6oKaQghndxXYx6ii9Hk44BBdmTeymmwb8LXhKa8cx",
  "key1": "5A9Eixz1mDBqqAmMH9DFcC7ut9VTQFEtUUj2g9EExK89XQCjiq7db19tRnWJ39iyrYcarTJFnhvJHTTnnQU4z5Hh",
  "key2": "Txo7kxueRusrFcKzuyp2Y8Vb1xyhHvrZXt8kGiVp8QYJbW2s9D6ooAt4JzSzGY644utAQLLbBwXffXKJWAdbZkY",
  "key3": "4kkSwLck6WVqAiwwfb1nKoZEw7vxjKsjnFSrnPEAs7fTmKnFwExkfPS2FkeyoKnZJLexHvuPugHFJdfB7FXEpcji",
  "key4": "21TmpD5wMSkfCvi91iWraWv3j4w6BqDkcBdYnxb7eiRQyp5myk1uUzZPcK32W2sh923YmJopZR92JbJQ2nr2SBCh",
  "key5": "4dSgQMhJCxzZdLnFwuzSQw3Z1FPNVDgDRr4bZ9oTJjjXyMAfBJx1y4k8fA8zv6ZEDWKmDPzWBCiec1XW4wEfvum5",
  "key6": "3LgQ63JM5rbcBXH4EzFUmDNYWCPcoRKSTxzpoNpAaFgWb1dUBWBLiU94PtGyUyALHYVgGDv9BDCJ2wXz9i6kKW2",
  "key7": "3coLcF3W3shAf344SamqGujd7AwAckNtmyFvk4iDzeqztdvu41NcL7A4AXxSnt89MqbWStqZUaus1tWE8Qxsw5Y6",
  "key8": "xPcPHMHBVGMJbNoD7rTEDCRBgoZsD14uZZRAzFY9THQBpha8PAvTYUTjFgG47i3o3PvkBLV6hbXeh22eqmsFWbg",
  "key9": "3NkYrTZccLt19aaVhuzLPDEc2vYbnsEW24KR8aapBaBNoUGWQ9epCYuwmeL9h8xrDs9g5mp8tatUXRvJCZK7e3Um",
  "key10": "3CQPnqneicuqZyouic7hbh3nMqq6fRNEWTfAV1FjEmS6DnA4WKcJMcgjGaNXyhzVfbdw5okTBsoTYpG9Crp7AjrL",
  "key11": "48ZWokYwom6fjooktmxGkD3EFNxJzXuJoUvmGZUPHA9odBLcMGhZsF2bHV4bumk1Un7FZNtMT5F3iveiAcHQiMvm",
  "key12": "4NMzmsgxfzkn73rqFNrVtfSpgvSjSwHgDQdX4yuUAuocE4Yif61BkSBNoBHeYSwtCsSShRefatjgLzG9ZbT6X7xX",
  "key13": "5wrr5km7DeN5nh7X8z2zxLfe26NnSoorYAqh7rrw6L9JtfUSn4VyoWuPYX82Cq6cbuLZtsvieMaJxBvK1bqXDYeh",
  "key14": "2LZ7PiUXRZUmiu8i5CcJsnfteVX3xsXXaAnwEc4ojWWALHhT4b7gRYhnAJWvearCT4HzcXK8uG1dTQaxo7Zp1G4U",
  "key15": "2MCsJFTSsiJwvNL8bF4weErF5vs1XHCbwd3nJfAo5oQnakv893svU5jVo5RgVUDGPt6P9noasH6hnANQ9niJhBKu",
  "key16": "5LNcEa5npzgg8C4MJM8p5qWtKAfsQ31PhoUYFPiDeANRBy62n7xd47XWE6oDeBz1yuja52MDHy2MD2c8Vas9n1dC",
  "key17": "5mes9yWgeUYDvd4CDBTSPFhbU3TfgAd2VooVpvGaquKQr1esSfx2yoLpFcqiKwc16zcyYj7tHFhQdqwNcKgMptmR",
  "key18": "3ADLWm6iSPYJ11KMhyWjE82vTWWfU4s7bJiy7DxBzu8KrmfQEnir8QqYtSSxrKGKSQBei2k2KS6UrfZ16n5xuZyo",
  "key19": "21Znhwbv9rhnu4HEEnRXXyQTj6t7SnCs2BKw9vjoQb8fTYh3YsGpMyZvMrfaUswJiuEFm8BqVTYhvvCTMa6LLaz2",
  "key20": "3T44Q1qsXqbuA5UXHW4q9fLeCT5PWW8cRe11Q5dmyytZ31W99Wqzv5XSJgCnEe3aaNK3zuYDGPWfRfJk1XuEnS1y",
  "key21": "pa4pGxUzNsDLPpr5ETYWVt6ohNpnk8XDymYk18TMT28G1b7jeRoHPV4EawPsXCBVWA1LCFxgrpzDSP29ghsTL3R",
  "key22": "4fwU4CRk52y1ohuFg1F7fBehKLo3HRqAiuogZLXNWRcfV6a4YJ7kpEz55Rnkw6naDdEcUmzonAz7iUa3FDgU8fpD",
  "key23": "2mYxMqbK3yuh9r9WSkXnwzM2GqHcruUwEKrL1h87rpQwKbEN1usAiYnEwTjR2TDEJ7hdagUhXqTqUMVSxXj6cJvn",
  "key24": "5aV1LCKduevW6mWcg2GA4926isvKtSnD2gBgPY6fK558TzP7Nrj6SMRWQVFwb7a85KVUhR4bRpnE7TaHt1xg7ub5",
  "key25": "34VHb9U64m13C7YLrE7eGGvzgTaDpbPxFFsyePPnxQUTYv1LmWkzYuSuvdU3BkdMNLMiS258fTiJhFUms4fNZLCu",
  "key26": "4MHtborgjFe1bFjfquKUj48455dJskGNQDrzjQxHWuZQ92EzoebTWNE4daBcDd9rduDQpAy2uvqgaU6jT2jxeUuz",
  "key27": "Qe25ZjsgcuFAEnw7hpRxSC8yoqcjkZ7aSwhyb4swXrXUiYJ7bnwKT5rZR3ZjYHcoAboGXqErmucfgeKWT1i7L27",
  "key28": "EAX4nRybM4pQX7HPkFv31fTEccHqPbW2MeQjNs68KKP8rncPcixCkEWNxivamK4TYtwAWeiRKKzxC3gBEaRHF4q",
  "key29": "3LDhhYJqZgmS2Hsi8hiReFoDJeUkVTWvwVhG83bXNcjtWnYDSKETb6VxQeTNngTeK3DeMzhS8fofM4BkNHQ9UhZq",
  "key30": "tVo8cGZHMSiF5N45Rr3B1tSVeE98CMyKGLx5YskY6HeR6KS25Uf9TgDL4kiCaBm5Xz2nRqAo7B6rrF5f2YJn27Y",
  "key31": "61vnNv9n1cuHQXcys9A8MzLMmoGTieHF7pxGjBKrwXhbNxMMaLBBm75TBFRMmoQhXwGPi3ZiPSDtQiiQBKpB4qBg",
  "key32": "5ucAbRqxP4feUYxcxQjPAMduM1sW8JguoRJarieoD36X17oxgZhqDCuv7qq85oWym8GBxACkrHAVPfRKaZJRTAtY",
  "key33": "3EjSaN66HG4oAfinq3qxw2nMkv9gKVXR8edx9w6J4cfeDKM3vYnesJZfeARKLgepDRmAAPP18jxd5HcjS5Wb7ebw",
  "key34": "rvcWKbEbzofUqvewghFFHaRvF6bXz5aqS3LJSiScjPUBW4YShap9dMzsh1MeNgTdrXdHR7TQdCsxFeUzrhWfbVJ"
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
