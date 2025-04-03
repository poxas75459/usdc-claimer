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
    "RwQKikjXa5WqzqbZGR7ju8m4YuRhHgMA3nncUB721Kz7dmRtgMxGSEdVDE1SR78LGVzzoBBpoWvB2UMpcNH4rDh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oc342HiSKu4p5dEH8svjt7SrnF6Ybg2gSWGpmYHeNZtC1xHVqmM7uMniUoUjS7an1qz7HbwNyKx2kyhYvEJHtwV",
  "key1": "2WYGHDzssdE3UPZdXjs7544KjXaqANc41R68zdSnYh1Psg5EE5oBHU7TVQ8vEmNLrpUn6o4TBbc2dG7cgvtdE3ZW",
  "key2": "cjYSm1nzPgssm6rfpJk6M8BAEHYY4aL9WUjtT4HAqXPrJXVmtBxo3pg84hubq39dzPLanVZjSfoJFrF6MKTH7zb",
  "key3": "3xFpqaTdn9msCXVBVPzQNtm1zsAbYrTwF3b1KqaRJwUr94fFZQA3VdSZCacwHkjF6gQqVocc2iGXbCrgwdrm31aS",
  "key4": "5aTHNB4wrqe7KnmJZ6gJuMP3w3AYrxyrCDKCnb5byEXVg1pUaU6hM4w2Qxgh9FQWDSfgC9iqp5FgE3wwjL7B1ooT",
  "key5": "3zBYKA6Kn8W4Uo59Kq6sRanWavcmJFkgZmSKaAoDo2beB3R9gxdTK4EPY9KkBKZBQnuzFmQo1dUouaZBDRB82Qa9",
  "key6": "SobNwS4UMCZepkAFbg8MCE7WoSv4Gtv83F1b2P31tzEpKhsgtC7J2ixG6E2s1Q2NszXMmktq8GLcxMT6TPNYxYE",
  "key7": "33KpWJcB2VmhzkdgV8ekdmRcBZLpsV6vSJHg6SyJchNLzYSrPqbAcEAtMLsRXkBScjKqD4EVfXi8rgeJLsKoX3Ta",
  "key8": "3CtcfU1FKj3ZmRshQF25NCm1hp8nhq5jcgnCHDuCqUiUFhSJwz8kvNF1QSw2xcKeT4aF6TR8eTKHpH6nYNd5cxb7",
  "key9": "kEnnzeGjwR1f7LUX3dZsrE39484znbGkVN3UVMhrNd1sEnE12Qsddaihc3qsJXSbQSaC2h6qvfzkicjrr4yicJy",
  "key10": "47EBr6VTjW7aXEGemq2VgVCF1xwjUeZtPWGMdMgErtnHw94jwmhFNiJHgYhNkGjtgx5ZQhNo1VeUraiZUs72DL8n",
  "key11": "2mT8r4JSAg6epY2gTDMBYinfZr4aDyFyoLYFCmfjoUF7pMMXebTcTzBEvnG1nu9W1DQCqktrY9Y4SRLugdp745UL",
  "key12": "2pc7CHZUXpQK4Ds2c27cMKecfvmNgGKt9fZjvSLbxsXHFFoNazRjRJTgiuLRZ13A2hoBBAVMn48LgpY8sKn8UrYP",
  "key13": "2wZLJufG12cVeRXqwbqfpzLBgwEFmRLTwk7ZRsY1Q2RDNx8jXa8vVrqsDpZTxjg76dQKxqyEwi9vfz4f4W7DKhdG",
  "key14": "9d2tE3NdHyd8kC1sJt3yZPK8p3cw1rNJKtmGZ66Le2UXcy2NRQLS4ME3YhvyCPLcGXku7SpgiqGBDpQC8Hkfh4p",
  "key15": "4owqRBRBGBTm2aSFM2bJJLdZpJ7PNfcPsABiAys8Mgne6SRZur7BdmYdUbu7rxeg2kKHrTKQ3nNmdot2Aztnf6QK",
  "key16": "4qYcWdUDzSJC84EAah3LvZbL54bVNTUf6pbo9SXamWFn9bqyat5WcHMdkeh1sFDEk8RnwYCvuSpuctSvUEq7HrQd",
  "key17": "4s3DdofGA66Qe9XksT1CAMFMAvRnT5jVYPaa9NEHXRLQNToxEWk77bgnhewvkLPLBWFujCkcDCV3byaDe4kJLcsY",
  "key18": "2rzaYLoibrgGrGw73nx5rxzzDjisEt56Z6zqDVT4zssTZA1tpjFqdvFKXoxzkpHE71NmdKxMwXUeZ8nyKoQ5A4kb",
  "key19": "ehHkR2n2vXC8VtYHNxWfDzxefRN3A63FhS3GVDPVBgLmKpChj1t3v5x9kdHKfboMrw8igu1guRpfpAzFHodB7HE",
  "key20": "25SUTN7NC4hNYu2RvM3tfh3BR4PzGRTvZZpwJFBeVJtqsaX8pMjAoCNGasmFyqkX4aYrBPgwpmUvFxvaXwK4UWXf",
  "key21": "3h2B8ThStbPoEpqaVdof3Kv4mLC9k73GNqgEHSbpYd2HFZYEMVk6JuKjc81Wp3afnaogdqZ8f2qQZjoTK7GiHcjr",
  "key22": "3oYeNv6A8R3fw8NzgWMd4M5xf426bgseEj1pPAc2GuVJmDNaAJGYMBZt9Uh1nGxtJmbD7U919fSD52whEteVjxJc",
  "key23": "4fV2FFS8BqjeHbX58gRWSuwPYvFcSNC2Zg7ecPjddpZmxW96UsxGfSVzKQsGQbECAhnYotax8Uryd3RvMZkUkyt9",
  "key24": "hJ5Rq3MEtkCWbpxcrJjn12hzT7PLR22GTuWmrJE4mX4Feb5u87dojmt7XSoaU4SGuyLQgWoEmjGFhgPU9XgntHT",
  "key25": "3gLPAy1a5DJLZ8oT1tDNBnrqcKM9rTnC5tD8ToBT3oYWE6a8A3tQzpiu4zoA6S7aSC9xjRSdtqKskTNH9Dv4s2F6",
  "key26": "4H3xWcVWoLHp6BnVshk7uxfcBaGsda8rDrPAFmUgXg5LN1Pn2T19MFnikLwm7RiAwuNbr5TNmrPhUXFMVapG8Roo",
  "key27": "3PexuPhDYrq7JF2WYzXE1Kopa3Szq4yYBHua8PMwfLzoZdYcAHWumgktU3ui7PEtEivkgz7C4Qqv5gdyrRt19wv4",
  "key28": "4zkvQngTAHgrD3WGS9aD2nyYQL2aKNN6RJ9T73xAMuCj78pXJCrzuNC5GqKQebKe2cX3noFM9fwKqvVKBcKar1iG",
  "key29": "49mF9HndJrDwbQYYNJBSGC7Hi5xKdVGGWVp21k9qCW7jWZMoSqqjqygpGhvAJvqxwja9ewnA7mJQhA3EnK9f8udR",
  "key30": "xmS1SmS8pgQdYdBQKj9KMULkJvjcMDdtnx2Jx6EAoFzYQpC2crZ5daEUT9m8YzXgxWyDuRkWqDDqLB9gQaXqtJ7",
  "key31": "638zRL7FVm3kts1Ep1qUekNAEKEnYnAJNGzmhn57ses3oN4sM7c9pQL2dHya5K9gM3xQuArGfDLJQ4td5L4FM9aA",
  "key32": "4FTUnUPEyftjsQNF7r7kMSfHMrwasbQZ7wtHHQN48ov7kx9mX5PJ7YzvzjwdqjQ3k7mHCFSpXs62K88oqaCESREo",
  "key33": "5oHdVD7q6KxmQg95F93mKmP1pxu5am6wTkjLpG5YLREAa8MZHfzEa1aLTZttBLLPbXjVp8x9PWkow81MchcLEETg",
  "key34": "3gA9jq7qpNNUUUVzAUJnKJ5L85JJQJVwg1bqXW6Pu6uZUhMnAfcc6UPCffJbYmtuFZHyzatnp64AFQuXKBynTmgz",
  "key35": "2cBkoWJ1CKq3KHnzkC5stNdxa7vpk8JevhMGQoCmLgFLjcwtefXujkUrzACqPu2NtBQVr4mRPq5qXEspL1BsZX7C",
  "key36": "2RRbzGJUfS5pcvR5BxGw57Zi6isoaNd9iJDsnyfjT6MCQrgVjkuJrgvwjQJwPy9JUQYfriFw3xCZYyFtw71ovTNg",
  "key37": "EATCn5FvXTqgVeY4KA79Jka79GPL8PdYgAA2Hw1sSy53PZZkcW2jyvSmfkgm2XTFS1StWA1mwMdCLHNA84VqGDR",
  "key38": "29pYDFP24ZQRWMMcu7bwhZWwswGB6hxmTu8i3pg7r6wXsPtSgDXCUWd2pZHaw1sRu7bwAQ12EuW7z61iD52x7tgs",
  "key39": "5dkxteQfXdqbknCNW3x8zr4xFtYzEtA1N7aJu4SasPixgh93GvhzpvxDVaxV14VKYrQwu24WGGgtnpTfUQh4y8uv",
  "key40": "2yBMqQ4EEEcoxx17EtaToECfdHow9SgFbF4YMuUJ1Qgv3XPuwy7jU7kzwQju9CCRkxdUgktjHvFnB4wqMNMym5QZ",
  "key41": "31bVdUi9Uqx9FhrQNJUPQEVx9RcvUraAi1YRwC67WD9Zmo8MsbMfR6JMtu2hHpnYfz75bWq37iJS74DWA4DsuUS9",
  "key42": "4CM9i72MDgnPdugP3Uzu9Krc82x8NK8xu4BdRVj8y1sLyy854TbQBv7hUkRk3EMxepLRZryShCbaCmZRDHb2n5rG",
  "key43": "2vKRzSk4vyRtXQwhFyLeHzApekqtbGPryi8ST6mQFXw97Dsv7ya4vW6Qs2yyxX82xWWtdURLDetTNAX55WNB6ai9",
  "key44": "5G4Ae3FDnNFkYXxV6NTTNzNxpJWAbP1H9UTdrq69MEACpk7TK2TqaeeTiFjQGCb2XD7C9kuHMrEXXbv3xCvLMk8p",
  "key45": "pH6RnFYkjZ5JpmQJDP66BNecH9m9rbxa5uVTneTBaxHkNxzcMnP1EJt3ujybv968SSE53AqDFVjsG8CskZdcWkp",
  "key46": "2L4PimK7jdd7MCdw3TgDCKxP65iAhFxiKM1ogRnvfYWf5gPhoiSFDtQUNYjrFWY1e3ccKtG9cW14LXiGoMc4uSft"
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
