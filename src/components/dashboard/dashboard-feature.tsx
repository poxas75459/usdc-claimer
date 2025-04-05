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
    "4Ytm3HkUNwpEcz1X7wdS4MUgQLWacgaBmFKjCoYRiDqJ7NNZkAiBN4X6M5JVCdwGoCouZNWmJZdh1iEnPzAikPTA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aCUmkks5FEvf5Z7uX5SmN8ysjdJXj67FNTT7ibWbP789SV5N23mBcMSRKJqoLdzscdEQUK83DDR1Lxg1eqV2cs5",
  "key1": "dmW58qpiYsjcUDgXLCxAnTwtYNza6EXsZnpUGdvH4gf2v4namV2yspeqvmEdPMSrSYCySK4h6MV7fBt67Y7HvxM",
  "key2": "3snuM9fqyPXDzodB9P7iRnhfGBJ2hxSewFnvdzDoYxmkrP1ws2sijahStjQH2dea9ktNKvaV3rjjvdjEx2JEMcfJ",
  "key3": "jqKuBiBWNVrYfGz53E5w6mMp82FZpkP68jeVjx1kbJWtWmE8R3xMujSTnyUwz2Nm6Ga6kY7qrSmGhy6ZThjsYcJ",
  "key4": "4cet72j1bLwpD9LwJCxQniPJNDuGuW2WiWgVNDMuocrspGvQkxJ75j2i9yvKtcUitFpaBjixHXXnJaBFyt8qmUBa",
  "key5": "3PffuLBihrxSpsUe5oKSc4XbsQ5SkXRWJjJnaFw2QmakzNzZqju5PrRUSg6LCoipFLWQ2VgLJYZ4Pf3unLxuVSXN",
  "key6": "5vCFfn2Kyu59yvaWQPS4E2CdhFbVnn19qQCkuMjzRmr6Jp8T68Ea1NF2naWvRuJnftn77kSipGnLnkbUXW1JBcLT",
  "key7": "3cCN9zh5AJnmFRS4dNpRAAeaW93HPTHyzzN1Qf1EbNhN2hB9bwUL9CkgiTxgpFTAPRzotMc8tTnP4zezNeZRwC7n",
  "key8": "2dhHyb7z6b5HzuWLFhQDJC61pW1nSUy72hFw5W3svJNfFgCR4E5hQ9Fj6YwWoLMUAP36NWhYRTT6qKJo8ezGkp6Q",
  "key9": "2hWEXfGSj968iCFovMZhzPF2XuWLFeC8wn7P9DnWYqX3EVVyuGYb8C3viQcLtTh5EtzTu2gFoQPqDxNmSpYk9Jbk",
  "key10": "46xNJKPnDQ5rXC3bvyGRCu1tLKB9FDEecXJ4TrNRF9kZFiaR633NQBVvCyCaUsNwE2nrgb7tGyb81nkvtUdoLS3m",
  "key11": "43TYzCyLEAF3fQhygCtPLVYkSfpdMd5A7bpz9dysxmT7rCKL1SpqtwkuTXpXKjFcwvJS6XAM1SNyrsbVKo36RwoE",
  "key12": "3xXqBrxjFE2mjV5Xigwy944bgtyupL87iqDp4D4xSoVXJKfn1cUKaT2ghZJmMtXhwdjwM95E3tJgxM8PZLfMXorv",
  "key13": "2BD5gwBiSKM6EcfLC7KwWaotp67z22PLMgbR8oEVZLH3jyfbNYdVsWRbGnLLQ4rCyCs9EuvyVG9YwYNb1byQXGCi",
  "key14": "o6EeDup6pvEsi5266eM4FL3nAw9fi4ZFa5coqKsuc8Kda1uY6b47EZdtJ2QmAnappmBw8bvmAfu495TKj2gZmnK",
  "key15": "2TAGorThSNeJETXmnP7bawEZTaQmwpXibaLx5HrdFs2QFYJgt8bC6dMMZtCi5xe3J2KXBXJJ3ftqrpDNE4XG8zWd",
  "key16": "3dWYZxjsdGduLcnho7t7f9ZxzGKZt7TgWMuZD71B2u5ocK2X3TaP4RfZLYfViv5HcKUMM4TQbDvZuChx37C1Yud6",
  "key17": "5yi5z5V4g2AYyQQSv9zXoWWJLfeWYQkLxcTzNWt6mUrBVMZc3PUomMCXkfeZ9utdRq5vRSxWYAuQQDJGdrMQCEPv",
  "key18": "5atFt45myert1goxYvaJukrBW99rfkprebpaiBsuWfMjtrRDkFVuWg7NZYdn5RiLHyD6whLK78LsJpgBdZUprurk",
  "key19": "3pzke4y2eSqKPmyioBKekSpT2X5p9V5b2erHvDAvr8veG3cLKFeSYuWwWCxRSk6WsxG6gNdB1c5zYmfJirEY4zFg",
  "key20": "3gMNszV7cQcRW2wHNWM2by9a828PN3tmzZPgABiU88UwjC5U3vA62e7xNrLQmw7A3dS6NbGwhBFaRDduJkr1sP8t",
  "key21": "d8qcR2ahpxaLxm2KjR7tZ6cChAep2Y3W67PmJ3SDdX7LaokGTACLiiJh4L6BgdqTFmag52AkFyD92DqVP5w12Mz",
  "key22": "3SMihM1VzXnzbJkFTWa9PC7y27AsbLP6xgZ5dHNrtt3gNt3BMqB4paim5YrcE8hRcNeFN5Wu7K1RpstzcL6XsL7j",
  "key23": "3QXF68pPvyShq38Y5dXaKsqLqswLyEjjX2D19TaD1pruW7dTzxziesjfVG9aYBBcCpv1WwShZGMbnQzWEuSMxoDM",
  "key24": "j34DtfSFQk91yhY9v2vSFi4QtE4AzJ7AbSNidsE3a7Mzxe6y53PR7ykzEV2teRptRb3jAtrmKecXd4WZ4K8PL1w",
  "key25": "2iHgpbeXbw2guV2rUwDtMnNKouFS6rTZKhza2ErpzyPwfaYZESvBfPcakmcX38dtzidCDpY5x5mNwiPakeUFDtye",
  "key26": "5Zu1qsSPZsaXvbeLoej2LP9EcVkYKUyXh1GyU6VY2qNRaVZJ5BQXBLmTwfU64sjbQeccVcDCT5M9KGVAx864PCZV",
  "key27": "2fNspCRC7bGq6JJLW1yd3kEu3dH8J3xrfpqPszZPqwYFPAUfk87rsbS1hgrzUUFAcuf8WaLGhqcdfvPyyu9a75w8",
  "key28": "uPDDzjZPkjHw581YoUq3YH6j8VG2aQ36RK8S7TRo4mhY9e9mnHJEAK2doD8yqaq95cTC67SUDsQgQ3DLbPJPKSA",
  "key29": "4fpaJQJdpZnneyPnL4YLaG4k55C9HSptgmTqTZ7qf74L7ihupVBsoXji2jxk4sg8LbsAhy5AFnz1XppKZ6AXtgM2",
  "key30": "5yYimgLijvRPUeybn6nfNKCVfARTvcWqRj5eYRjTedg2v5Z5AiqymuSMFo2VfC74oub8DuKvHaUNm4aGArNhKgrT",
  "key31": "5EAnUJGx3fW1W1YwZvizrTdfDrfCe16Rfj1xFriKkf77Rxu4nq8tGy9ZHFjCtXU4dXdMrkwp7jE7Bw15NRbhuDqr",
  "key32": "4Sw4YxrpSZnyAq6Aht7whfNtG8VKYEVyexdoyRGvA1sJjCzN8QaKKbwYcFHSVk2ykjpPCE1GqXGtWnuwwfFE4bTq",
  "key33": "3va9LnHcpnztBhK9u4mBNXZ8eFFAv7WBXTc6KxG6cY1PpTRcyGpdLcLenjP2atCmNnVRF17UGJZuaCZ2A7tbSm1w",
  "key34": "5waLW5US6hEAj8u2CbYGVMp1xXPAzdUFLRrYAMW6DJeE3pLybZfveEstj8NuL9RkD4tQaYKBDMaSwPxXczaBWTQM",
  "key35": "3hHWWo2vKrhfpiv4eLH1TgX1UwRePnaJZpzdFxyq5xhFe3xjeoVUC26FSSVtzZ6tD1UJUEme2NGnQ8q1YPEcoDnK",
  "key36": "5GfPYKx8hQX8LKep5KKLp5BKezEnHfeWPsFwuBWBdFRXoeD9QJ6H86f36T7pjjGFkfX3QDbNohBMoDGy6ZNxAxmG",
  "key37": "3EAr8yv6SkDYnjhWcFySkoJRYdzcbM6Jd8vcmJgZeASSS9T9DHGzEQ3VdUQuTxWNy4wMbUWgnky8ETbr48CVWRpy",
  "key38": "2ygaw49aRLCNN87dN8d7Xtz4SgbQtsahzxwprjZH6YwsCumJ5MMJ5gFgzKEGrgodMGFGvTD2ZRhjThQTxig12hKH",
  "key39": "2jpAZS9MzRAZ2uYkdKA4c2MqXswwrG8763krbJa2wav7dTi5c5KWXWvcf55UvpxJ7uBXeiQQYz47YcPZegwrMctH",
  "key40": "3zhrFQD566NyKd31gYvGQYeWhaXQY3rdKLoTBA1UBJ41jBYShre3vVYfNPXAnNezPfXKuXix5JJFhAshYxhiso2V",
  "key41": "3sVTMjvfrh42BqzFw3GitAERZCiigTWhh5EVivsDDnKW7bbKxSkLe7ugHXcVUL9nDDJtgsPTt4J8qHU9VQ6DDPPA",
  "key42": "129Yax91Lv7LrXVXS6cmQ1ydm6ZAsYVVPdox8yBjAbo6GDaSR4VtuSZn9MHByLZMJvifVgkCsM4682tpCLqWFiM1",
  "key43": "NrBqAzUbk57wmRZrtY3iTcLzVHG67N44xoxuet8qvEPjjsgdJjTkQ5aNZkZKMce74sEtMbnxxvJmfS1byBDpDRP",
  "key44": "57AN6AtNWiz8LDkrRnMfL9HoBNmeKcc7hfCSqsZtXn7whAZk8oJ4Ke7wRWcb54U65VRr1F7Urm7Tu3VxvTi7ampP"
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
