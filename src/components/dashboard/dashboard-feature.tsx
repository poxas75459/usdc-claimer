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
    "484gF3HcNKCM8bxsvSnopQ1zGhdPyA2r3n5EqJYcZ9GjZSGc1G7ncUzZKtaY5CJ563sazreywwHVBFmmd5YTPo9a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iofm82Aq3K1zejuddXHXY9Lzfi6i6wDGqakXHGjFMGpSF76kAE6hT1K426CPo1LzfcupBXWeydkYtZ7tdcWMisg",
  "key1": "PPPk5ueVyuPvpMBf8HTHiPaooBebWhS6aBv758hMYvGSUmEB7P9TwL5ZaaLy3QkVdZM2h4hychUtMfToQzYTFv8",
  "key2": "4P1AxRgBGBK3wzMETxbffwuodFv94aLa6LuKyFaWJeXjvVSWKVDJF9Cqnyc6VMrnUQqyz7WN2ioMaQy885xorWqz",
  "key3": "4HCgKrkXZVKDdxmhPvM1f8bq91TvH8AJq6KEj9MPUU45gdbM6VKvx7hNz5ES37VKzsfxbz4dSS5TtjFnQcWdqyQ8",
  "key4": "4n4wKyv5rqRJNdGagKpjeZRHxGKb965XrWq2H5CgrHgsEqSr6JY7AgzrL84DUy9fotYid3Mh6n4HqZTrx58sgZJb",
  "key5": "DC7mD9vtjzZ4Z7KUm3z49Np72HrpLXiGkHvip7NSbGAKzHY6fWSDAV43h4ioRp7yR81w7cSb9zcWY7a35Awf5x9",
  "key6": "3WujFHQqGaicFCE7UMUtQw2bUJypkY6bxD44uCvbD81X554n2uX9RatCCYkyrpEecSjwwuJiFxBjCjwQohFPwx9f",
  "key7": "3QU4ifhntWVZjT6dLXXG11dkqXQsc83mGwx3yKBN22iGgX5XPEafPcAF7MZTVdFrczNCSTud6b5ipHejav3TLAZd",
  "key8": "618GqHmtLp9EcywB14PYDarycgGcG7XaZ9hu52uLUjScBYTqeLKs1LjSRv2NfytdfCgWCNF9JGGZPDyLA8Vqnj6T",
  "key9": "3TX1cPmDVvGXcLeWNrcNdU9UFYuTZ9k5xPXNq4n9h6UxiDXgrKq1gjQ1PkDZSAWqieJX76Gj4KFRVH1dPELhAxsG",
  "key10": "3H8d8hjY5gvdEknaVLmBj5eoXEFK7XVMNNhguvLr7sTGrvfK8Eehf1aCg5Nk5nzHbj4mapPmP5VafrUTAjQKwErH",
  "key11": "5ekQEovVo6nJwYv73ybpP3e6PV3Ar97fRdjRr2U4WrguSToV7Gor8htZ8tyZtRdsYrpMVFc69deEg6bJKmM775bz",
  "key12": "3PWmn5JGgCNYLUnDppsvFZMjqTQTtaMeBBRDDynubEcDxe7uryeFa4cfd4yapDy7EXkWMqdKVjhLdBbtqfRPi3pS",
  "key13": "KYPKrKebeCBgD8fLSLFFcF1QkEwkfigVHTVtBHcLvZyKuK6RuaukEidLBWPWxsCxAGtxLnkbztYrAGNbLBiKpYc",
  "key14": "4qro7oEEZyWffzDE3wRA66fFYQ45qNbnfDexoShzqAHCYcm2dXHxjYBzqCTVtXrLXhFjWWnJ8QcnekYFbKJCK6a6",
  "key15": "2bxnDKf5vEfTJPympuwyqUx5AUDXG7uMNywP2bLXsuGPvzf5xend9UVZruj6HRNebQTVmeVm8RnHkhL5HnHjoK9H",
  "key16": "4iUMdPAkXDL7vF6JZihbaqdKwrmNLfjorVL58m1CMDvu8vb58tckpgma1hfod92DRntfR5sDQSJeHdk6z7JDZaA5",
  "key17": "n4GfuBq4jbf7Arq1FBydeM3vgETbNj4CoFFsihfMm4Mpu8SyTi9AaknWTSSmtU2jfgWAoK6n24r46BvC3S4B64h",
  "key18": "29RNfELq8hjtrJCNZmyZMp16bVzMgQruZiyBc5ja5FGE7quBkrsEwzpk5AwUJ7nL2skpWhf4HLX9RwEYsvjSKBjh",
  "key19": "4pfiD1dVWMacwbvjN4fhgtVHr5w1QMFN9DazMjipA55WQ8UHwqzgyk5H4SSSMoiAjnwzEodQqYMZoJqFpm4YsqzM",
  "key20": "3FpBQPwLqiBemN5C1n88WMyTGEDkErU8x4RunXNLQBi6BVJEXqLWJmF4KRHh3qPRco1nnEaDgTL3xmmtuE7Hs52L",
  "key21": "brW3LDHMWC71DLrZSpX1RvHgT5TdKgVxXZGCFSWtbXcu7Sijcoxre1GB5GFAsyvQBMdhorVJPdSzcPbq6LxvkWj",
  "key22": "4WTX6FfexZ4sfkpvphTkhmUatuLkY6wnybd2Ji8QyHrc611FEsiobWcdh7DHDKKeR9177reoNo8R164UWxfTbo95",
  "key23": "5DywqSLNS5VxLJ4X8ddWRV2dADMar68poXfkmqkdU6o61ymLY64rfSZ5JEnSjYb4DBN7Ac1nrpwuLXgxWSmQpP26",
  "key24": "4YFQrQ3aPnf5iVNNZy4e4SiLex9S5iR5gPsnUPDgYz69iS7qsQtKJ1eLFgHusCKZjHhURUS3SZbxHmCsNaueJUFY",
  "key25": "d9FVM45LuWNpKtjHpPGAVvy8uDBWxThaLaWaaKKCdGBghmzRHXiSkYsPiH6kQr5zBJPivK6cfzYCVmNqwibJEhv",
  "key26": "3JbFxUQ15GhDzw1hERdtCbtzTsmDy6v9hG8AQFZnWDLP7Lnwyw5z6GBrCZDsAq6V8dvxRP2iPL58JEx4uj1bdwXL",
  "key27": "NgaP9uSfWXymK6gZuDbeJCjLrPvT3k2Qn3Dqxb1BcdpNBZNu3K7eV5cxXyj7xE1XaEZNkAMziJS6bkTzE1xL7k1",
  "key28": "KxKptpzHxkk3M1WdBVTJ9LrdYdPdqPs8Q2vHuD1eua83UhiMQDPM5Z4Yn5smqtD8Gf1ZZG9YMoH1YTQFmACtaCR",
  "key29": "AFAzX7GVfa23zYGPjQssmakTYQbz4dar3azq6nCQcrbRYmSB6LFacsyJiR1wnuw52uZYrQXDjJ3HbL7D9hRKUg7",
  "key30": "5dUuTEvxn8ZuKxnrMVYoNsJk7rPDjjcFMLwEwLNX6BGQpHUKoDkgbkCerJoqLt1LKa7DFSdef8eodPqUmsJKzErb",
  "key31": "66CWW56sgk46iSsSDzQasZ5bNojUTMNQ4yKdymtpDhd1W2T5bXD8xPz47kNtsxMa1wFaY9oytUQ33jPdap3cuBb4",
  "key32": "2J1MCMLAkYpdd8jbPR1hqWCBUk5sm15tzhvUXAH5h7osvHhZ8GEYpugeoYnf6h3tn5pAnjDWE9eUm6cN1rjArmCM",
  "key33": "2u5BY8kuAS78zvtKD9JKsVo1HmHq5fRkF6fEC7bvBCf9WoLFKt3DmEcDMQkmQJDyobrG364dpZAu3nczXxSwBL7b",
  "key34": "3TaMNRD3dNbd6Cqo5TnRtgXB1rGqB2MoaUFpXCVnd5gdUvhG1RkBqzZyV2hYKt4bLzXhr7eChrhiRYT4ainjkwtH",
  "key35": "3j49YvdLCPVrkzMfhgYxuoqLfbWvkQgkAyJLHarwCvccMJAxxnKLyXvngBFQ9hcF6wtk9nHoesBe1h3BkpJtdqbk",
  "key36": "2X1abdFoxtDzS4yWwuwyv43umYqAnF4i5XcTHRpsKyfE4zPwPzxjNpqbCdw3RYr7BqsT91g44Cp5PjQJjgN6Sww3",
  "key37": "5eEbhQXXbUXzqhDV74LeGhHaFxQQ5NP5PAcdf7B3hip1G3qw3LnwXGixNXokVF7EAyEAPNP8ucJhBK2FErDaXmrF",
  "key38": "5Uo5bHPFDRYtRC6XVnVupfJ4ebv4fcQ5ZHcVuqNYsnYkKFTagjkhqowSfG4nqMJvofh5zXBwnqv8ZphxRbqUiWtU"
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
