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
    "31j3AaSyWAgXDwvWiGhuxoY4X7LG7vWTLYH63uEhuNvnj9V1KTAdEv4DGyz7pM8ncFtnpJJARP5wwn5Sw3wcACiL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WVyveggWb8fguWV7ZyBBxTLhhvrQM6Xp37TyhDXzeA54rh3pRjNqEpNHcpba5v3VTyFFjWNPz6ZiSJNfdYKHRga",
  "key1": "2F34H2eiqEmbRE5FevgVJrLXmKdnTB9DWMfsiVEWe1bDjH3QHXU53NrhLVgEfChBkzsPpb8juxdXLnzr6SVnyyFU",
  "key2": "3CgLka9veBGSBFBvQFr5vHBAHhArG6wAENfWNvBpFEprGxd9D5jF82BFXA9Q1YyVjymUG9W3WsdegpEQfkzqZeRS",
  "key3": "2gybzVJVdvmqMg32BEtDdoaNtgJghyDoo9KgnFzH2W1qx6wfHZ4LQZDnEnMfWYzHvKzPMMANAxPzh2nbRDEk6Y5f",
  "key4": "gkKK6wcwjLEN4DCKERcx5ZuBdFYJYXPWYyRG2myCdsoMpEEF8X6wgXUi3XNwd6kNQb1vLkpYJxSwRE3mQPTsVz4",
  "key5": "42S21pAcGkjY8gZsCgz3n4yA27QLUpLCJzUeMRJs9MJocU4MrGY4sPKVSn7t8hzFBonhyFMUhub9ePgm43my9wKW",
  "key6": "MFciP6MmkK3EUnN4xaUU7irDGyr45qGRdums42QBSZx8rn214uHvgcTiyxbGp23WjFybNbBhgAm6AnVkAmBFVZt",
  "key7": "5jCk1XigZdsUnhK7ka9s6A1rirZAFfECi2L8zP25z4bztTbu28BESSVWvvdpqfQnpFifVvLEXZJxocbR8Mmo5A3H",
  "key8": "3vc4isfPJFDjaGXEpyB7jAmfm7HUDdJ7J3YN2T1BkHfmsm5ttVV7zAgnn5xRj8W7TypbiXk52cCXnXtpfiSgCc7b",
  "key9": "ZSGJJVknqQh5g1BAoEtjCc1HARLk3AXqPT5ZhxnnFSb816m1G3dK58uBgE9fLAYAYLeaRDdQmsv5TfM91qQpXWX",
  "key10": "3qJ9N3xV11U7JUhca8pKxyzMG8rzitVEYL1Q4yDsYWqcUuHeUCnfmhoWzsx56wrnpPtQqxPV1vHCsUHezZzi3ZhM",
  "key11": "438Bjp3vxdrDwsXfx4jHWBunRi9ivyoAj6pkTpV8tRisxuNZTkjVneFPSuwBsKz1kuY7Rq8SBi6YNgy7aj4WDTCo",
  "key12": "5WyPQZ3Vd9SqNxgGfXV6BUpy6QGdUfdMpZBRDaXjWcBY1NErruxjDjAG4y6SjNQharwUCzBHtPWuKGxy595rkHSa",
  "key13": "61xV5GXJfSgrjczhPHPHVkGdTadxf4oEHmGwLuwKAWsDytDUdNrFYouJVwLQY8aU6YBJLjWoxT82LXZHVje1hYic",
  "key14": "umMQexJ8qwPhk7SS3Pb8EPfvpRuYq4h8cpd1YCToeH75iXVZUQBbs6JdmunD5oRkYbbHRWcfR5Rw1kNhLdKgzPa",
  "key15": "2m5QNuZYUxnjvSsa1o4Ciafcd2iELWa18YsD8jzmEuPeWjavRYmGSd99SMR1QrNqj3CSwc2LtUYAybECKmjHwv7y",
  "key16": "3bzGgLEgAgqLYEdvpRj2st5vUrU4sYcFnnBvydesKzw3vYSjNai5Y1EhqYQzgdHtus4e2eUPnGizjCq9tpS1Scm4",
  "key17": "59oj53oHtuoQNSLmbAn9VyFGoUFT7hdZpj85Umgws2czpHd9myipJQ77gSfmMn6C1crLgz481gWNfAcdJQ93k5VN",
  "key18": "67iLDhZWHk38g6Hz6UJtMtHhoxWRvknAE8nmWU1nwJ6wXxe8eDgFiPs89z9Gh6RxYwWjATr4LWp1m94Si7FWBeYi",
  "key19": "5AJaUNnnbeb3HipEYvQsQQMat5Dy22erwk2SbTC4PfzTXwQ7xbEgjAi8jBY32LZ6zZDtSGZLLy5bMMXGDGi4j46m",
  "key20": "TaNpUgYbi8DVuUXC7XKG1PyTvyafw4J9A1gJBYNYQCM2BdCcjCP1S497GWNGpi6WTDCkYoXmoh4nniQdSxw6JYc",
  "key21": "4aShSFuH36wEMiUwzCsh4vfA8DwCA41x8wa22zGoFbXbM6PJSdZLjAnhU2PDpbqXXHEGQhyQSvZggWy2tqW7jg65",
  "key22": "5NoDa7KhgfRyAzyMXJcf7kXpcRDk35RvNb5kN2ut4pawq1KVgbYkWbsx4yoMogC8LhFtGWUFu6pXXxVvrQqVnoSW",
  "key23": "4xFbgVXwaKJSzhtsvfK4uDg7dzvhj2WVqn75xjqQD9bpJHF2VHiZyNuq7u3YM5xjzoJvCZPk7QePPnY1eneAdrfd",
  "key24": "4mDbwxfUMqKJYsfC7GEV5SkzgiwB1ZXyvAdBADDok15kZtugNsbYHt3iQzmDmH6M73QYAqKzqMjtB9yM1J7RzjKM",
  "key25": "2SxcESKQizUiBrPwMXPwqmoW9S6TLUTVuEyj8CtDNypVVzMQut1RjKc1MeUyxA8Dxx65HSz1tNEnrN8PpePoDhpd",
  "key26": "2RZ3LUTreLL4kjTp9E7VZsm9AngebSPE2o86AfAa56gQz4EmoJCCF4YSWxA9kn6cXPSPdLkVue8TMGWBBhHf4XHy"
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
