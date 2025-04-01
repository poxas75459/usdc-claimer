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
    "3Kj84Pz57ocT6c6g1a4UkG93wRJiMVw8u35FbHecdpN6T344afBaReZhBK9GeaPazrHpVXVLMitTqbkxxgkEenpo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67AQJiToyeDmBNvmJDiYYzCBw59JjBvMUiKfEBE7uTsRQd73QgwxJijwVJMMUma3WvFgxvKh6hdEfWLgrThsBJgD",
  "key1": "4JDCdXEJnRr1YMJkyvzJAXuUHnst7UFu91Q7v7UtTTEbicshdQFWXfyk9qbe5W8sfdN815FQ8Sg5DA9gijvGBRfe",
  "key2": "47YdULFF9acM7iHjBuhzyJXGvne2dzpRVUAw6ToT5V97Aim31gGaoCRFcBwBSTrKX8eWdXKSxf9UWPDqiekmjRri",
  "key3": "5Lzpwi4sfvH9ap2okEVpsSQFN4GHU1kUscRyskNd39qyDRF4Cj8A2ngNjydof7E3AtCMtnQJuCqKSXsWfKAQeKwm",
  "key4": "47SnyecF2iDQsfnGVHhY3tZtgKLmeJEtfAFNGowNEb7vtYwDZpuiRTnSzLMqYKy4Mqvv35JJbMQTZvJhjP9wtNZY",
  "key5": "5dthJt3m72FT7T5SFs6Zt7CBoy7UZZAjoA4A2TEXLQh1Lx7oY3GYyw5JsFc5C3Xry4yzbybbxjy8wRGFcxA2f6zL",
  "key6": "23PcwB2DW3p2voe22aQEvRVPzTFLCurykevJagueZGwwmoQRjeV4JA11CmGGyRttfTkBD4TMBcPBCaTLXnKryx7p",
  "key7": "5ymYeNcnym4bzmiBmqNze26iiZ9FMjif9yD8zYFPWgLMxkYUVb4fUDPeKD7aUmRsrCnr1GiKsJXExZfCceinnLKv",
  "key8": "5jPAJFeqZv8tEKaTRZeuA6Wwhjtmuy5i9A9VUbmtptDcxC8UutrWTPY5bZqgMfMFamrzSXEP3BbbdvFpDTtm4chb",
  "key9": "5apZ5yW8ut1vYDiZG99Eb6KE44MZCe8bnGQ8FXCRmCP6P8NpHuQGZTCSpwBxgNShSuvjjjbs3ZhjdpqRsFLDMLDL",
  "key10": "646rpJBjN5rtbkeVV76hTPsuhQz71EUxh7nBtZJm5B6XX4C9uPEvuDP3cP85DWnBi5ySP8ParCiTSXkAsGPGwwtJ",
  "key11": "2pqcJXfxRWEFKekGTAuQwc7hpovnmxaHCBwpvYA9WSv7t2znXdZgDy1eavXGURaikGkBr3MM2Uh21ccD3qH5ELmW",
  "key12": "2DfGL1vzAydXLwoYTLH1Y58aTFj8aHW8C3UYfQYCZm3dXhbFxMKH3erPpEKBm7UZH4cuU4C2iimGfUgwhBmNmooD",
  "key13": "5tPA6zMMvYPx989a9goVj18RhCHaeZ7sHReRZsHfpLE6GCX6HELjc7CPnhVBQ6AM1CTb3E3Us6pSFajDDWmaQ1EG",
  "key14": "pdmGMVYV7cFYhPgUSgNSe6NRv7vWLfCk5gkREoFtDCCiFmfGQgDvLaEZBMGq2DZzQHViojkXEPsGmC8qyNxz4Hj",
  "key15": "3kh3S8ffGJDznheTXCUYRpwjMKPuYu99GFsKo3UXiC6bkT45MQfSCtVDWqS9UQZsPw1Arf6fpWHBRiCU7T5WKryL",
  "key16": "5CqmFDMVZewM3GiaPpP75oqXCSK8AD6BVwPGgNF4JU45mDNniRiwxi4KD3oCCpE1KVGD87iVrEzQU8iEUbeNgMf6",
  "key17": "2QEPuehE7MnUndD5eZCvHsyV3iZMPPpFev5arAn3E7YBEQPk7WtZxEweXrm5qpR5iPoDerpHDgdz6Q2susCFsK8Q",
  "key18": "5XX6M5aAjJNitoAbnYMBTrNeR1ttGNUvQwcnvwX8EdpfhBLMhhWRNNjutTas1smhVePKHfnsGXd89AnPNvuSqbWa",
  "key19": "5BGqLp21DCzLhq2PbNMiAmMpycJXCraLnmGwwNJDVhH7ymrn8gFMFGNtrZbfookFkWoTP2ktegHNLdJvRyz6wjb1",
  "key20": "3vCf1sMNohLBC5dZ2SGtp1RR4ydUGJKRrbQqhnsJNaFTmxNzrb6GNH449Yf6ovSx7buPXGpM6uc9o5muf8BQmcnz",
  "key21": "2WrEzGLsLtBhNhi7ciKML3JuwqdsRTw3mp2fntDzPqoGJpEjbMwyq8SCbs7JLXankA5sfzpQgh7opiSHMPwbYUXk",
  "key22": "58jx8uwSYYyAzo17ZZJjapPheRTNdB8AScchdNAXsJsMfNxxUDSaNfnoQVo6KmrJG5E4KA7jXXxDktbvyt9iYsJ5",
  "key23": "5XKiU9KjdsFbXXvs4zLMWoqi1AsLK4QUF4ENj1V9Ng7bnhDxv2r86jgwE9aUmgrRKWczwAZzEe2GBghXXxtPtzxj",
  "key24": "rXEUnGuNqBPQmW5mqgyLBJtM2KVhL9mPsYqgQHRLXD3fF3sdao1jnT6Do1jqYmriciZMizArTb997ehU5nquLJF",
  "key25": "hyisCYXU9k2ZzEhKq5WfT6m4ZwGpDg8SYduLudj9z3856SudFKxpEztFxXK1pFkyPA24isnY5yBBzBzQkmxXrBF",
  "key26": "9j5HdqHkv9VUMmGXvbFpsxKT6qc48ddwQN4yFFBt7QmsUGbkHmgNxCKPhcudx4Aa4VwfBC8Y5hwhJgKCBuNkyez",
  "key27": "rDAxHwpsE4q2mZTjDiU6T4oHUL8uKH9Kfdrha3L3bfrFWKcVGTP6dsaGFebP4eGR6EsBFeQsPio4wD2vopLqHUM",
  "key28": "suy522xGsRKVC7R4fKJh5mw25yqxXhu6JuD7Uw47VjUXgQVVD35nEMxhvv3zNQ8qLQBrxQKUAr9NfUnZ9qrK4M2",
  "key29": "5HPTjZA2B1zN1ANBWTwWHK6AFSd5GxnKGUShzF8ma3u2Bivode9GjvTBoXbNJb8YMbuF2YLAnFvESAmrPCWfiLkP",
  "key30": "3QJ7KQFemq4vXgV8HrQ7sasAFhWEJMQYw8HRYDftGmNgJS1dvzgimcX5G61eG2e7fsGVB8reznzdteoyaTTSHeYj",
  "key31": "5EmtTnKYJJksF4GSk6LnFT5nQ4u1tCrwtT5qFDnLiQki32SiXwcrZswgZ5tzupQnZBoAoqEYKMrgWuuHRYudgcfL",
  "key32": "3ufp5vWfFKgn15xaA7y28yU8rHdujkQCVceh7n2NqdLGn3oaT6BfVs2yEBtHoea8t3EffMQhPGKXGAW1orMrPPNR",
  "key33": "3uCbRjNdBqBPCqCy1xPjFZomTz61DMHetS4g7UurHy2R3rNaA9um9TbUAkbrpSF4MEZcVYuqWVn8gCUWG4idTgzT",
  "key34": "2aqLA7F3J3J8jVB7MySaKVPjsxvPUZSf5FnhycprRkYD9we8yUFXA6o8ZyWG9zEckNqwWjgxZfJqbvBkQwKoF87U",
  "key35": "4G4wxoLTQXpjrTNLGmWTiPQNVHikJp3gq4x6WmErYGmipE6vaFAXYMtbVBWnFoWzJ3W8VNmde8c3NEHoAozzPZj2"
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
