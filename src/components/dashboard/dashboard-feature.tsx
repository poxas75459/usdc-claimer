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
    "5mJ7gDYzwjaqX5qC4i5Cy4VwuH8qFfZSwZijLALMojkvRZWxV57pEWRoiJvikSSZpFGc3AFrhps6D9Mmy99hoAW6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aWM2L1ULnfRjDYrwjMg9ZYSsC15keYmRVV3UyHfPMrMfnuAzjPqxQxv8ovWD4MXcuNxNRPjysfGEJB57KUCb9WZ",
  "key1": "bDiUmuvXNybcRx1eesW8ba8yfgX5BUDm6F18bFfoXvCD4HpwBns4vyk7JWNkr9PDrxjPL8KiZZKT4ZH9Ei1UaiH",
  "key2": "47MSm5RZAYCfj57bXjjVBCPg7YiQgp1uu7U8QUrMrKSuez7yYvfuqYAv2MTziVtzKfnJg8Sh8PSUZoD7P3WGExws",
  "key3": "3Fc93cvGX7Ba6EwqmMEqybhU4B5butvgWjSpJCunhQ1F32vrHS7vm54ZVPdvMVdmXCfpc7sRcRVSWxmRbyiucJcY",
  "key4": "5XtgDzYbM3GtZmRmd34nwo4sGeKrsBijK4gBUysBSubBLYMqatA1eDir4iiTtMwNvtZ8ZmeCeC6gSuYPan6caDDc",
  "key5": "3JYyzBUNaE3QtvYufxFLnC8MhDKoaUHAvhCj9THUPe1vqQsRJgJtxLNCP4o97ZhSpfCbEcrcK2HUTsENqCdzfsiF",
  "key6": "2XgnUmD2iZ2RPe8Cm1Fuczw1SGaLA3ryrULfDWiWHRFcnsSv1ZxkwGLB8dVT1koe7h17grGgvoa3vy4XNn1vdnBn",
  "key7": "5piHJ3haBYQ89CHoQ9vfmNURo7dJE7DzbCdjn47Eh7eb3xKLmkSp9Dkk65nxteVP2Vh1CETisMpbpuyAVy2rNwZn",
  "key8": "3DY8b59vncxCFjpTU3QuFWZsq2133X4oBAbk5opV4jE9aJMmjQKX3w5HmNcJhBFEf4R8Vw8sCmHhz4YqqyMKsJAm",
  "key9": "3W8xYXZhjmNr7Sh3afrDqewskV9nskYhXGTMBNL6WBfjMDdUeqQPpZqi1pv64U1SEkZjxCg5tFW2kmuUW4q3q5J9",
  "key10": "4n9v8bdkn3UsHE7Vw4qcNk9FG5L7XP534Yqpz66mgE9ckPmyQqd621DS7Kd8CdtXedhUZdMKS4peWTyGFv9zYBwd",
  "key11": "59rwSdWsGbpsPvJmfCRXxX4vmByTW5anhG8SikzAcyPhYzRDotf6gNtykSaCbfbuGKuwJeecUJBdimY8UCBWoZHf",
  "key12": "5vSY4ddui9fTL7xvnFohJngtvhxuN9Z7Tp9gzmiMRSqa5fprDJLhW8Z2xPTHPZxESdaz634KYPsimVbdKTZ3iFJR",
  "key13": "4CVYGSzJDoXUxLyvkiXjsE8RvH81juocsbZCJnbXpJYMDifrb4DUZA7sDMn3CYvAR9jCfmU1To5EJrwPNck6sxTL",
  "key14": "NNWW2GP886vsgzdg5KLTQ3uHRP6FgpVEYh31BorKazg4cLAoqzkjaQHAtB5vEEEEa7HTuMWgXRstPHxKSruUbFU",
  "key15": "XbFbJ2MgvyQi53qd84YxBJXr4DPrTsHA65TZr7w8q2tU6kqpr7jWaoeZ83yzDiNmY4rUVSeAa33Eqn4eWsC4Tom",
  "key16": "496kLtL9MSpPdBB7LS5tBFP7fJ6FKwyHJ3yHHrGn9giUdTqjRw9dxLAFp9L6dyWmgGRoMNShXvNThbuZWi34XypC",
  "key17": "51tBFoyRHqP3iisjqCpaMmptdTEDoyZK2NU1A2BwSqDr1TiaSGYszAj9MwpaBDsxqy9wzr8kH7dHYZMQasb37oMv",
  "key18": "5RpvhaVRuE1vB93UhpYZCiLZ3w1LxMeui6jH4jQSkryWyxhfhuBgihDiKGMNS6o8L1kbb4HFBwmev8qNyWcR4tio",
  "key19": "wVG6z2e7AtRarTwsxbWn2uZxnsRQyYskdr13JGzYSTwwFC3TiPDCzeh7mksS42Jx2HQrDughVJFUrqWGXLXWMob",
  "key20": "3fGRGpNno8UhfQYy8ynhk9tnPozSiuCR5mkRuVUKYB28Dw3Qo8H6qkM29yWwxJoPJtZRWBvmfPc2QP1Dn87mWWNS",
  "key21": "cx477tXCa2ZanpRcUDh42CAfs92dxiEbCij2dssjDUmTaY1xLqSHW8mjZEFeg3UXwho5eoaq2fkVJ8FGfmUX9Xz",
  "key22": "3EPpiBkkfJBW2u477v5UmoXpsLB34Nhrc2GmG4xt32mwmryWQZvLDcwBR2Bv5zccfVVChvTZVbCgi8VfDdTrksY8",
  "key23": "uA2164W6sQjmztTe67c6kYjsk8xa8BnfPotBCn6abBAXxtCfGAvMWMdusY75WYS8dAU9RUpLG2aZxYcRhVoNxh7",
  "key24": "2tG5qnM2evPZKKM3NWedPyyzEmqSLcv7M2ryfAtHe1XqNheZ6zpz3CegXmuwGy889L9DrAAN4cKE2iBAVBnq6vzW",
  "key25": "2wVeiHnRyCn28bp5oTVpyu7DYkdx6exxxcjAGuyNRHT8TkKcvqPsDPdvknbTjpJq7KLUEprcntiRMuYkPcApKUZ8",
  "key26": "5ktzAQ7FnwvLvSKGQbefZDGuCEiqa6VKt4R9LuxjBRQRoC7wmC2JeqohqiRyRFHupUFHpn4F55t6THSQNi7HEsoh",
  "key27": "5dYRLX93z9S5V1ZzeVcBGBWwo1rRr7MxHWJ8Zrf5FMR1KTSHjQtFrCBcJERxu7tjQ4iejEgsETz9tbWfgLWgq8GT",
  "key28": "3mE9VvVTs7Pcig2ifvCh4yV5cLgzvwqCdYMrXfh5HAn4KgdbCAWVKoeFKFeXXhJDfeqNZd5DbATWCvPLd79bNt6d",
  "key29": "hE4uduVSQTQKnLFGbP58AWBWZBGxhbAHSE8dMJLSr8HuVtB5H4puZoGPpPM5TzWvybGcwb7NRjLjanvssZa34FX",
  "key30": "56vknSKNCFdWEinAV7iLB8H4UjM1CjGMB1DWqZQrrVtMd9pwiWUypYSFwNTdTXnbcDCSfTvTz5hX9iyHYuMEktGj",
  "key31": "5cTDVwMWWXVZZRkPKXgucUiWXNAhs9JoTJPz9D3vmP39h9bLXhjHRFgPNBmmjYPWjHyCo3hoPNgp35vKXk8FjVRC",
  "key32": "2nEy9RdCNyUZbDmHJggR8MgZb7H3T4Yq4uZGyntoPFmXeR3kMJp8hmpMysGAZ3hAqovQqe3eTBJLsDLAeffUWuXc",
  "key33": "3HAJqgYpj6GdEQLNFBUM8tfRFNxGuh2A1S75v3WEvqBr4R9MfmJRCxkW7BgDcU7Ji4AmwarcZ4SnJqujR9Vd1qv5",
  "key34": "3vfk9uYjhWQaMDeKxK4PcBfxH3wgDhAmP7tskntMdXqN8xdPDwYuLELipZgoti8DBLFPjRwuea3q8ydMTtq5dPiK",
  "key35": "51JCLxTF1GWWnsR3K9mT3qktQQ21YijuYRqMk81X1Y3KN2Jr7YrGzohJgH52eBC8wiyZFFVEa4saQnxaSmRk2Tna",
  "key36": "2nx24fYgmfTVWcqLXxHQTkeVAjpsoPt3WkaJjDJYZKBQv74b3XEXPdmoS7qkmm1oiZS6SEaLBAWobdTQwN8Ta1pu",
  "key37": "4SAjCAux5CNGapwb5XaEQj9MiiKNpNbLfL57uTF3mNaAubuUCjkbZHWmtaTRbZ8LphVLoVth56Xy5U9kuYEge4Qz",
  "key38": "49Hqx3mWfwPeVmZZm6jj8ghGVAofkqAWjP9Hyk8FyxuGhgpVnmBn1tkg9zuTFWE6uQ98VqWDyHP3J3zNaCFaJJa1",
  "key39": "2wbRMvXA2NThQpejrfdWSrrRvdnendgKgxKXLQUiRHuLLro5wZn4NHFQzggvv6UQzY5Q6ya2D2Wg1C2BPWxS4ah1"
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
