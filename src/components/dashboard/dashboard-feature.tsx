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
    "3UoomCSkSKB7Bc6qS52RuGFvFYZ8JRu53qvKVhssruR4BUvGGM2nFVPsJAmCXvftiaA9NSnuXQbBstzC2S7z7NFW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qvok3tSuCaTH8jsi1K8yCR7yQLQMHFuuxCEEmAEEBTHPmupeVB16Nfr5ybV6hc86YAVbZ3RPp4KQQiNkLoKUX9T",
  "key1": "5rFo3TciUbtK3urETxtyiwcSvY4TxJhwX4YKJqpuArD41yPxGjRPasUdy1pxXehVj712qeHKHDExdPXyReov9hBM",
  "key2": "2DdkGaSRvhaG1EnLjAfAjkqu5dhRk1ogonvpyUuHjLktXqekqhnDUbAauDo43RaqkqyjtitsBqVqYSnaRMauYSjk",
  "key3": "3cLQPLGSiF6H5Wp36rUcXkRVRg5VacKFP9jg1FZXggfatuvUzyfBh5MabXzyjrPJ2M9yoWoj5U14Qednz9Exya3R",
  "key4": "4Z1txn4ZKjKerTkjzM8TESsPHk6ECj8v1FGn5PvLZw89t3jndc9TtYt29ujFWwefrBpwQ2TGbXfed5pkpWqvxw2z",
  "key5": "2u718q1QKMBNw2nqkniGKqfvU3QTcGeZNovpqjAw2oTfn9NXEdNNRygFJum5Gs9WfX3YkcWaCWutAerjvM5dLRoZ",
  "key6": "3Nu756K9j2E59vGKRV1PQ3Mvf4uW1jQCf7hPohuwFmEwKnQzKAERDLMevqGmRKrt2q5V9XRqQmn2KQ1CPtePLUP3",
  "key7": "339B8ZQ5DYGL4BqzZCZf2QAvNPbubwMQSaVmKLHPcJBJ175z97rAjUTAywzV2vhV9Zb2YtoWpr1uFkucvRL9DCxJ",
  "key8": "3efij6RSaAKHEqbH8XasNkK3QD3PZwXaob3ijfsyhyZVVFMYUKUQwkC6ubhmTRS18J5Rx2Vhi1VT6DjPLR6kRyqE",
  "key9": "G53RAWzewTKtx4SJ5BHbUkEhMdXZukUW9C7T3x5o4if8s7f1NtD49hwMRy7D3ZE5GySANyyu7JvRzacNfWuM6Nm",
  "key10": "4hRA2iLnBdCECAjVj7u6R57FZVkBTTjHExMv4MRzevnjidpPNfohc2Ktu7U8tT9mcx5Yy64w8Efymyz3SEBMubk2",
  "key11": "3NEiDNUH94F5kYRzhEQeKW2uVXXqc57B6N31BYH8cVNCp1hJbTJaJiaGTbU5kkg5DmM6tYiKpcT5HJgpAnpjeUbh",
  "key12": "3KmZdkeejBKfXQaNV233TkF3oka3XjmKpX98gdim7h7fM5Xop5cZf7yk9wwqLejRGP1Jubf2R8nQur2ufJ6Hqe36",
  "key13": "5ZTnCWbqTnRxDknUkBraZSHzYA5yxbCQHBandbkrCHA1K2RNQdc4HyM2wVPou8fZ2RYcRhz5EQqkmMoaMqiZC3fP",
  "key14": "2thxeDd8zJWDfFUHrjYoxQyDb4zfkVi8fJ5Egb5YEAohkGSStJFegzr9Ro1kz7DU4gaGabUCuuzm8fpzTxLZMEG2",
  "key15": "DMne9guJX24ZyNCP8SNtRPoPwL5u23bQ1pTXBy9rUBbFz1q5kJsT4bi1W2kkkjNQxCaceqrTYefAX2ri3LpaVrQ",
  "key16": "4sVkZ2oGmbRdJhTbffQmXBCfkQiSNM8q8yULyQA5ovmSiyeE4zV7UYo23BtZaLDbwiJb5ytpaJNP6fvyVQn5f8Ut",
  "key17": "3TW2tLXVqCQp4wntt53aFMZZ9GkF35Bo2RMGcUPyqtZHJQ7udnH4WXC5QPEfKLW3KpePRRs212VmYuaAxE27x5nt",
  "key18": "29i7SjBVewRjoyQnPE1RGWyWNUgNWBLrhT1YSPGtuahsCU8s5iZ38E1eTiVGTjF8Sb3xsN6zXUia2EykCd5F8UR5",
  "key19": "4oYHik6kL45ugBqKoQooypeTo1jarS9d5M7Pxc4wiDf1iiQqKDjGzD7mCmefc9ChF2ECpmHVfNbwzDotmwwpHT2z",
  "key20": "2Fe651vfd9nWrB9sxq7sR3bKeYMGSDpAnY1BTq77v5dXVqKmgypNGf2Q7Z79uTdW6ViBHuS2tZU3WDpekVYdLL8y",
  "key21": "3mTuWJkVKW2uXjqVFixPtJUNvEnhQ6Cbt5qyMXuAmrteWQdS75kwCqfuG3BpB9YgkCdFzZFWw3yjushiA98r1ukH",
  "key22": "5CzxyHAzed88feRVjctQqKW3Yx8Y19dHL55T83PvmjrG6LW1w1dnSB3MUA5va2rE1PfiUHC5JdgtKwDTbaahcHRM",
  "key23": "4Kekz1qjT9rfTz3vFDKmNuYGWHKBU5onSRt7UosdznuzagvEnerbKWBK4fK4RaYJJzpnSchJzyru391tmGsJrrEu",
  "key24": "4RDcfVgcuruwMwuoWLZX4E17TzLnVq4YDxSXs6TiJQaSGYY3sRE1HBuLWv8U83T98bxjSqgeFkzfH96Eod76esyE",
  "key25": "31W1epastKNL9LsNcLYnHv3RgCSvmSJ8s5h8jsLRoSGKz3pSKANKX9AL6fx5zH9gHWrRxRPxkFhaYKr9PS7C3F3r",
  "key26": "4rPtpcDdobCGGvosAiwxmhfbGgtfXzGNhmGAobRBd7o6VBEvB1FfjVK7nx7b3SpsysKgig6fCyLhHMy7FZm5VgVZ",
  "key27": "4kGwXW6jM5PkdHCZ5zGo8nbstYPoKiy8iPb19RU2A8od8aPHdUBGgxtHYKDj9poFpExtzrFurCYrnATxsDGbxjHM",
  "key28": "VW25Q26XeR3kaJ5578UjYuDGBHtDeW8wZHQhhLga8ticp7beFFteFNzre5SoDCE2M3iY634Q2o6Apy1QPdWEYU7",
  "key29": "3phjXeUxqsdDgwqVd5jE3Wvdd8iSWuGHfESiucb59MR2RicH8HHUJtZeac1qC8cAq7MnXQyeSPLfRQfzc8V27e4p",
  "key30": "2jV1a7WwTfg2oTLwF8qKQrwjBB7yEpVaQCN2JwjR7zcNL4C1ppXJgZr7sbhDq1GVcNMAU6EgBMi8CUo3gunkgVgS",
  "key31": "4uak7y75kTi5tvCEBDiHn6ZGVQ72DjyrsjJpq2BRmjAWKg1vLNBsjAziAiK59wM5LByEEYHxvpjF5Ar7jQAapCEr",
  "key32": "4xuW16Z36E8M9WfLFzrZHoY7oW8TMfLFXdke9RPFZRrwpwT6BSgLoGJESMPxtqZgW6aMt9jz6cZik5txBcsM8SEM",
  "key33": "4upAxM8Yrqi6yF5ayQ8jUNcGjhFdzwPzkSXMkEQo5WxDTY6ucHvidLsu1YHUPLrV1m3sLwPxL7t4NZoHcV9LPihb",
  "key34": "5jDb9kBBqpCCwZFq3KQSiFZveMFbya2J8k1m8dVj3VfnnbqYKHW1PwjHxc3kRNMWA7wv7wrCwwbiDXPTDPADzbPa",
  "key35": "66QWFi7kTV2wzb9Zvxu9P2iBBYxDCnCaCbVWvCHRs4UFEAW2gy2L1WTofwy1GiMCo3rCYfTfyzerBZJgG8dfgaxR",
  "key36": "SuvPGRDBYYxpdzbxMchkeafmgjPPe1gwAy6zMdnQHqtmLv3jyfoHmXsjbr8Ghr4pRvBfdRkk1CbLc7nbLw5ihwF",
  "key37": "5Fn7Hy39mEvRTjBQ8waBB5iLJXgymrCmG8dJ1DeScj4SyScorvzsSUb21eWyvFPrzVFmJpVRAznumz7LbMiP9FCv",
  "key38": "4xwrHRma2kLWAc6fptN4eMZGU2pEJ6fzzr6FQxnwqYjJ6QuPSXp1gV1CE9tN1N5xMqbmL3feqNPSPoRrveTtM1og",
  "key39": "5ALBkaFskyHCYJhjrjerNE8XUBsjaqdeHjZz5DixMk2jLRn3NGC6Ai2Rgits7UQXzrfTeqm6njZCWqXJEpadqouk",
  "key40": "aVsxfExRTrBXNBpzuPL75VifaJG2jJz2Vqv18WTcfaNEWNzFwjjtvpkLfxDXqdVS5UHRjRNsgFeCNc12tmXLe2v",
  "key41": "XBRq1Z1svSP5EYNEp1ZqAbBZQ8HDLaT6N73cLTbU1WqkABDsYGbFvVgcP87pjWGkQKjMcjkpradjTVaAk8A2BzT"
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
