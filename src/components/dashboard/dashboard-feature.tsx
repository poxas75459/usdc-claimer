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
    "rQ73vYmRNd1WBxfDfQAZETdrrWVVVGvPgxyq26cUC6QK24NkGxSHiUFdPz2hS4rHVaKGDNNB9buwVVsNUHp9W96"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64WQtrTxrwjW1CuUJctf2RpLrQVhmA7y5Qz9SwrpqFppUxun5k6BbANWAyWa8dmyRGNe3Z28coUfZFFPu571tpVf",
  "key1": "DSn5SPTQtMW5jNUMnG455EULEFRzNCs1JYo3LtRAMhouhEPLxKqzBcXyxSvPbi6F7Qhf8k8yFMhQLEF87rEdCe6",
  "key2": "3QuhvaYjN8YxMbSXSGoQNH3qdPkMbRfyyqZpesHV6hiDQFdgpJQMVVMKiAun8bHjhVanZ5h4NL7HmUiTV8a5YREo",
  "key3": "3Yo8NqmfFxaYmKQiYKq2UDTy1in5oH4WV6fHoJkQuUE7wZpcQJRfdRoeagGWUCvaXMLEofbrUSWjMEXA3CruwRVa",
  "key4": "64WJkkgPweh5SoxLG6dWBGpZpxrvzauwX641Ls9oGJvjQ6BDWwaZMcNdPMvKGp9rXWZfjeAwi7K5EckLfXWjjPQx",
  "key5": "6agyJeapT4xCLaqrpH2BSwKTCmovzBR6t7cpSPJ1813jfTMUGQALkdTXx1n4wufCzgGx2r8UCCk7dfYrzsEenEZ",
  "key6": "64kQw9knV5SDNuZU9jzgzj7Sk6vSi1piSJfnz3smeZhEUM5WUnpS67C5DLLgQxY42J4qu5ahsubDjYDx2eM5HTfm",
  "key7": "2HfChtjbZetH6AVoM8qPCbGQ2cXYH9A6n3SCyKqbdjU5xed73jy9vhFs6LL7mLQu5u3GzBdpMPsvRU25KKEnECCF",
  "key8": "5gAZPEnkYAUinM7jxUEYQicHkXAuR4WsPxQ1HqcFa8zjmirhhaeHh8VLMUEtmb9BCvPaNpfJisU5qQhur9SDdh9R",
  "key9": "4bumMP5CrJNmZNAww1Kj1gaXEeJfbEY7j6HuLSHnRS1XwggoLPrUDM5oCQ1YBsziF4bwfhWARKSnNBGmpWxG81H9",
  "key10": "5JbxviHEh3DXB4AQwncxataHUg9WeWYwdQEL1kJMVFysjEDvQKrCQweeGDoXgSj9rFHW1yWdUpCDdUSPPpvVsBWL",
  "key11": "3WJNoK2pyZb7UW8YzmR6u3cUZTJNPd4NGomhZCBiuoaum5FcPoMzo97kiacdzsoXfg8GbGcbtkWnWagQfTGvxUkN",
  "key12": "2buzuJuPK2ryQGoUZGWbKK4QyXa3bP7cdMZW99jCskWWXeEQfrtrQnorJRnMKy9twvjTisfgqRBUjkz458d1qkvk",
  "key13": "3jM71RW3hLPXpBqwfkn7xmmH6kZ1yMsiK3SD8vaCiiCaycynrXHYbAymiEBnJ9TpNNpWRs1R3AgwWwXRpLYrTmuV",
  "key14": "3fqM2wvFhjxoC3oZMgW72SiMZhHTkguRxb5nxpLsTEi3WwKtYvuUK3HUE6FJT6dRoahZWqc3AS1zLZ8Pa6gCzdd6",
  "key15": "41cr1ZSHDcVHy3Bo92Drq2kaY1PpRscMtSKtyhLmNjKuZfuha3pZhL6N8RTscMUXsej7QY1whzz1FeiLru5aZZry",
  "key16": "2fUd9BGzMguKiS45rQ2mdFbAVADozgAoGtUZXF25yvb6MKxXAoBAWesMDXMdsSUz9APoFJhekS9xBWqREnMdn1W2",
  "key17": "3Td1mrLkcQW7wyVeMSZ9KV2FKNLVRmQMrzpmGkwL4Np4xjH1DC6cqMv1wi3BHCSXuNnqsWxiUw97JbfrnhSvyhar",
  "key18": "ChavdiAZBgvHiBfYxTwo1m2Lf9jFGCmZxT3X4agHAQ6StfjBAvzm8wJqrBdLTKHBYJcr2LPq269FRhf8pKP1Trc",
  "key19": "TGiwgZCTZ3iHU6KE1JNrfFgFRbig6VFiJgw8BXyTFLm1pLN9dDi8yRzZsqRpNzKQ52eu8DfyqjCEFyfT45k4Ddy",
  "key20": "5bkq8XKroqMSPFS4iu1aB3L15uHS13DixrA4Nn1cAFB6ATy2ySKQg3dnwNiZgFmyegV6HUFmAgQrKKM34AWWd4Fe",
  "key21": "4gVpgwhsLe5JMuB95PW4Dd7G9CrQFs2yCZnUsxarRMZ85z6TDTZiKtosRGrTGjnqBt3GjDKX97AbG8Bi8Ud3cnGj",
  "key22": "3Yh65qsmDfiH13VUu81EaU5Lc76KWYiKXSCuXLLyeGRjf8Q3ySN2YvTeH2ewCUNEbMNd2JiJHbV4fPJorD3LLjvV",
  "key23": "2fghnJWi1x43ie5iWKqyAfzCwyKjN1gWjqWWQno9tud4gQLT6zZsn1BGpx4AyR8sFvoF2fvHWgpxRn4Pa3GWALFo",
  "key24": "4RgUfus6Uty5TL43Mnv87Na9Wv5G4XesrULQQi5zPuSeBgXKup14d3qHkSTWkWPi7Thhigx7DZr2xB4jtsbN25HU",
  "key25": "5UsYBtBUW6vkrCVABsKjbgDhWn2DMuDq1Y7ucQvQDsa2u8EH4zJ8fRB52pPNc5isZ9rAmDed4GVKteW5CptR7u63",
  "key26": "2a3DV4zihWBPHYzeuVjUWhmSLsHoYGnbQhD5xt9XjmYST2dQBAxrRLgZL6hxKMuG7VVQ9MrBPLm5jgxHW3syqfUf",
  "key27": "3RXGS9Mg2mHKsVFNTeYzfcKDD9ccyoSVoRE1Bidr1HX1zM3Q1c6V39u2avFS2v6cmKakXiVue65g1GCYoBKDFycA",
  "key28": "Czj6w4BdkvhLojjzmo9pjBaozj3GJN3rhj2sSVbUceVvp1Fcbt3KcoMrkHJPB5rvHA6KZmAEUP1sEm8fqbJaogJ",
  "key29": "3WeYrwTcPkLNGVq4h55x3vCAC12GXNdLCazciuaQRcbMsnYmThs8ZTAoVrBG3pdR1T35ZFLU6oV1GYAZTmKs4M8D",
  "key30": "52GRof4QKahgGvZ1kBChwbzqar5dWY1dwpN4XrxWZQnKo7PDaKGBi1dMsEXq3R8b4fbWFWSXjm673vrtviGpdRye",
  "key31": "42BfBhohfjYQJMC3C8BPPhYtNprBmkYwkgeZeK8DXEpfvBgkLVJtgTQrMkvPfVC7JkshdaoRed8cQh4WaKpPnuKL",
  "key32": "5nqGQjH3VojGy48GT8kj8MShiWrjR8X9ZbNyeadXgRzHHP1KAJzyxYdJb4Rp3UN57yxQtwiQzTCoRAGJHAf49fpY"
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
