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
    "2ag68nap2bvqhhJ1hDhSMjzDhdSD5xwsftcCf7mB7Xu9UMAnVBy6sWabkXDDrnicuGaYSSujjV83G3rRqpn8Taa8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XPDFDt6W6QWKoouPsc9CfyjCCLF9DPBLC8JHoparNXAwWKGxwbKsJt2LQq3bRnopL5PXz2XJ3SVxPcdcSyxjyX8",
  "key1": "4uLqdmTzhQve6n9zvmzutr4bgnhxMVADPn5PXsoUzEFGzjVdu1QbNfsErpcwATgHn9292z8CPPaXyzQ7YHtZDH25",
  "key2": "hGE2DSkujoKi42YiMxKcGCh795TKgxqvKx7ougxaX7TCMZUT76JjDC3fRh3A4oiBz9ReJSpRJiDLTSu5G2TLp76",
  "key3": "3PXcpVCjQQ5KTEL3SCEvwgQF8HTKqnfwkjNzWYkGkVaEmcgneYJAcTtPSJwvAq2m5NYaaZchrzJLdakBtWTE4efq",
  "key4": "629cF9H7tqsjyUzX1qQhWMtfdRp91amYs3PTTFHdLVwVWZpnwwospZfL7u83BzL7RaKXuucsgejLYdfwvB9jgXQc",
  "key5": "5PSU1YCMVD6rz5Eg1vQRs9rASRxdpDjTTMaXciWkwHPZqNpQYBi9vWGb5uHWv1RT9fGzdiDCrTRxASQETzHXHZm2",
  "key6": "4tKda2kcuEM5KMT1gyHvCN2qr3JdzrrUPi1cKQcXg7TXiPW6SyW7H8FxMeBDixuqp3FRVTQ7C1GFjyRqt1XHjm7p",
  "key7": "3MCdbvRhtCELiZCE3GbtSMStLSw4FF7j3WbB9LdQ9K94AiRHRwHGysp14AAWj6Zvw64g6j2PmjTMwDbg8yHjGyCD",
  "key8": "64QniAK2z1KodzzVAVqNqcQJMxR4n4aP36Mhdh3LWX68WtwFRQy6RDgzp1G42tgMo1ibgCR9C4T1LwHYBvnukgse",
  "key9": "3yxfcZGtohi6yGzhhQvfRwfvNCBG8zZaiX9epM7jrtX9syunYySpuwX4UUhzAXFMSFwapAmqWVYJv1ZsWngy1G7J",
  "key10": "27nPzZ3PTwDWNy9prTCxCfEgNp4MCSDQyJ4TPmjj75Mp8f6Uhct1v23dAoBNrD3CvCegy1LCbCUPDsgp8QNTCLsY",
  "key11": "4NdDN6EPi4CQV2H5T1tKDnZTGuNCCndwRudvRnLqjY9tpBTjKr3WE4J7YUdxsWGtpim85tPZXwRJcs72cx9byipX",
  "key12": "32NhQThmSzATG3W7t9ETkAmUQky6CUF69hQWJbgaDMLFfUMjma7s3gJfC9fW7LJZSsiXyM48ATyYzSaqW8KHogJ2",
  "key13": "5uvFnfaYHT54QszieaPgTNrrYEzaeQRuoqX5UzLZWBN1Awypn2bnPdzsmFMt5o5oz7HyrDuPuQ8YbLVwKsEBZpWu",
  "key14": "4orgtCW9jGZQxL2mK8DTMzToiByD5kTytkaqLouUvGnDQXBLDxeBtLw94F7FUFUBed2N2TNjGWQBUF2ZiZj3woAD",
  "key15": "5ruAjFxWbxqPGEJbodRBEsKy536QVoFkXSQmW32cESigNYgKeG9QE9ovci1TKvAFbWVFPHadN7Q2gERivGRrst2N",
  "key16": "2TyFyfbD9tH8sH3UnZCd8RDAiMNWQ1PkGDC5gmxejLifL3KVopLr6nMz3nWke6sFdh3tyz1fQJLVQfTpEcpy5tbB",
  "key17": "3N75aLZhzFdEFfVPqvhw8BnomAcK5xrwdFTT2RuiUsd1ZiMRHmy1jfQ3H6qXNuXentrwMbhHPaHTGavhsTDqaFLc",
  "key18": "NVG1Nt2f9z6uDmkYrxhDCHihXzv8R8VeUAKs7H5kbtzd1PC6yhxbbrog1A1tVzYvq7FKxdDxDSxrW42rALae13j",
  "key19": "4Bf3gT5ZL3a9ZYHfg51M6XraJUVBm9rbeymKJRDQDPPe1gBkz17NiuGMcHfA7EV2rzqbChpEwZeVLWA4T5mTCqJn",
  "key20": "2v3X74zS7yjeZeLEEPjKekhnnnQBh1iyskZPdQrbcvgNJ1L4qvZoDHkftEP7bDxEJEsJbG7rG2Noo9zXCyG6rdyA",
  "key21": "44u2AmKo9FKU3KQLjXHj1J1zZ9w7WNUXLBc8UKpZAiLVp58uipT3f89Xrf2RAb4cJYY1KzZZt9pk5CWMfwodGdaX",
  "key22": "5m9WPbfwV2kqjhEi6MjLC6jQWbEbuHnZJtLZEj8ASeXvXNQ3PmxbM4v6M3VEDumWa3rmLDqb2GhYkCB9NDkgxdj6",
  "key23": "67Vi8pNJfQjWBNSH3qswRRhcEYeVXX19z1DjAgurTg1RKzEERA78cdaUoW9amwNzeUZKWrSV7xuqXdxbNnubfue5",
  "key24": "2LxC1NDxyZEfpYo2V2JWREwKuekWjPuBA85iR5cn2H22nCcsA8xbK35hmMSrjjeN4722qwhejdnfv2n8L8ndQbqj",
  "key25": "2xw7UZTAuXb9x7efkCFXWBUjjUPLNqKETgJSTweqPUcfZ1r1cCPocxWuTV833AceKTXgnVD7zcHU58E4n3ggWejy",
  "key26": "4hXabVn6KAHNB9gEt6dg7m25Y69EbyWrzU9Vuh1264buHee8aHnhuS14NHYN1Xg8qtvb1AbbGb7aaBYQDjgzJtwB",
  "key27": "pXGLUCiPux1um7wQU5weTcGzu9ERwkeDV2Dsd2NGigcSNUEmfQuVSwFVudx5n7ene4pYBzMVaM48uBJqt2iw7Aa",
  "key28": "5kL4zULT9kLmAFuPKzDTC7KjXN9TCpcYSpvzHub1Btjr4RL4xB6gV2RdXeWGvtck97mE6gsFwBgJCNxqykoX19KZ",
  "key29": "nLzcPuatTKC9QCDHxSaqti638wiXq28QbUtnnYZ8PxjQw654toY27gMi9gwcQjH827d84nfLfJ8pgJSw1W5avLZ",
  "key30": "5QtBVBYVnK5oGrMxa3SdZF7oXD3RyhCS4i4BKg2fkb1qB3EoSFjzZS4mYgyna9ei9YunnKZxvWbSFVJ93RdWXpH3",
  "key31": "5xQYm1zgn6Ln2Mo8HhiBqGRDMj6WibqXwoeonoZXDGfG754BrhzreveFJ3LXVZ8UZpkgLjF4Kkh1oAt7Ek1u9mAe",
  "key32": "5e4VCEtG7V5pJQNdWb4jENPm1vx5PXhK6tGsLUjtHMKPJj17sM1GuUCYvYxeJaSm9JmB4NPPhJosXhEpZbYgfDWP",
  "key33": "4Y8YyMePz97uTkS4o2eZZKxuSiBzZNTin5DQK5zy43euh1wtmzdbdgptpzYvWqR5C1psK1UHSANwMUtiB7Ca92E2",
  "key34": "27LuBgwAAJqiK2ohPG2pTsPMv8q8PoLNuG2FNLGuWGYpc8m3vk9wrzzzou4Y8KHLfaS6Fd1cdPK3KQ9EafNA3uSP",
  "key35": "gnkUBgGarLBsh2CAGu8LofNFDEio2AFNQfiAzwEHvYp8MLGSWa7t7phYQzyb35revyd6Uav5UGHdpmdCXx4wDSU",
  "key36": "2c589pAzGkQWDgcdmCAah1JtuiDwJg5wFWXrDit7vyUnnybZxNuaZNJ9sAwtkSCdTMpYTY1JWi6QErw41KevJYi",
  "key37": "38RnF4bv9DCseam3bsPWJQ8W1YHyMr5qSCWHfrDorLxsL7QKsh2HB39vZudQMsPEYKCyoUf38qJ31QGQ7fCUnPLh",
  "key38": "5n5UsZZJigbkEk6n8u4p4PBvRZTZwN7CTkxYdK2dJ3A3j4AdBzaS8C5oz1BFqyCxkBhkFeZFwJZy1p98f7kXmMru",
  "key39": "5xwXYWGPSPyZfvLm6AHUgtewEkwqshwMhQTNNahWCtYprQsPwAdVWgPTE4CJDtdJ6c19vHdBdBLXWyDnh9E4DYy2",
  "key40": "63uMEunBw7F4cJt7hZQHqXpgXbFwoXhDidMd45i3KgYyyF3zJ7ipKxaswFLqvmeWb4ma36SfcrJJbL4FHopJjgrw",
  "key41": "5jaPZ22DrdLFqAzYse4Hsyhzsf3LKh927Xuhs3eU5PPHRMCH5gsMDh2v3N7F1Cj4kP3hFqvD3euyLKuCZZKi1wmM",
  "key42": "NAQhqs9BXUe39b4DQptLDMpxfZvHHvxm9k6oasiL3EetrTCzjFkMHKxtH2MhUibMuzDfmYsSejD9T8w3vLQTve2",
  "key43": "2BoqDTE7LTCwuWAUmoFNvN185kd36tZQEu8kLWkungjb4UA73m6rMPTLpXTV1WTHMTkC9kP3ANno4czsXGEzMouB",
  "key44": "4Xt84ufsyNvnns8yWN2bGtK3HkM28e6JgZEQzCeLXxKxVAdPnKc3GZNmYzmWBieHVvcXX7mA5c2UuMJe4oPf9GpZ",
  "key45": "4LhfG1N4YGqi1ESdWiKwHai5ANYmanTiqs4mQGBDMVb4s7dY5CCvEwAp5JC4fjw4vGeMsd7Etkdj8fHhBpbeNZHn"
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
