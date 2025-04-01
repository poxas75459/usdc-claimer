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
    "3WkHn9GkEjM1FvEAYAFEKiGwzNNttDiWq4a3i1h4k3qqeD4YGz4NCLAnbRewdULy1bNdWePsR6tpoVJ99BQNkrwL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LU1GYnwt9SFXbpeY4PPPiGtU5FLZafM9iRFJ8VZmMyJ6BvU8BdCcvm7KYaR4Wx3sN6jx97XSvURH3WfBYXv9nax",
  "key1": "5H38sccURiiW1UFYaSxxcva7QhvKvEA2pBaRZtZvybCoPWQJ6pAcvpUqhvKSvXxAj7zPhcsk3AuQsQofCXteFPc8",
  "key2": "5PfdEMiNwR6G9RCiwm2pE5b5Y2aawnw2V12LybDgthaLt4cbPdcCbEs9ymWH2z8T8b2ZmV63B6GJm6t56jkiCzJA",
  "key3": "Y2J45xUr8kXasuALakCKei6AaejuTs2jeMSQVtEgyhw3H9FB5RtD4VZM4KB9wRD4dqXqivjHdsJKSbcFtzajapD",
  "key4": "4iEbyeZJmVjXGsKExQrVn3mE7LroCJmkHfvND4kEzRQ7eHGaBvvHocUoezBX318mhoHSKMMAYGKoK3YaMqL6Cchh",
  "key5": "5GDZoAP9tebh4Rq9Mqo7u27PoyY385G1kHTjeUVQv5tW3cJYPMKNLWTsiBLFnJ7bDvfsS5zzy17BFUXTLunZGVXW",
  "key6": "5EudoCgUzq1vN9vJKUM8RbnwR5SFfgeN7NoetDVFiKKSt6mKBtAYx1RcZCS6mQtocrsVpCLcKkYCccoLEdANS3vj",
  "key7": "dBpenZwCR93YnJnS4QHPJ66CJiyb2G3jjPjf27rGLrHAWswQMgPkoaXuMMTKRJjKqw1sihs5QKQ3jq9gh35J6Nu",
  "key8": "65V6LYxRfD6KNzRYjGch8LxEkyxENZKqv6zMa9GeL9NaPHw6yutpJMBXvToJFY989xLec59qC7Ncpc4gCs7qYT8e",
  "key9": "2U48Vsdw2gTfUyuQUUS3Q3q71dRAYM4FFNu68miHbT5DFha8yKFQ2xFszbAGigg53ZE2xJ8WdGccDfo4YmMj8bts",
  "key10": "MxDEuEm6bLQxRmw77CuEbRRBLmFpwUSLAA2DZFwSXoa5zG5fBvuvauHqFHdoeHWjiG12KC3et7fKA76hwfCcq4D",
  "key11": "53bHpE9ks1nGEnoyiPwdaME7Znfs8f3DjUar4zDZdA9sPVdmqAFdo67ZDnA9TNRMVnUPXvqyGPdYGRSSv78bU1To",
  "key12": "3ydeWk6PWFe79D8gy1FapDnktkVjiHgXoY4xGHPuEkqxzoqizvMz55qUMZqZsv8ULZb5fMNvqXbDBDi2QZH5x1z7",
  "key13": "2YY4tQppbDNAHdEZjQrJ12H4mQ8irXBdHaxA6vWnq8LVjgB8qXY5uLwVSQKsTPRHuA5VJkUbuHuoJ3eRQY6vHSfJ",
  "key14": "2ewVhMhfwH2qynMjSjU89sj1CbrUg3jDef49w9y33mMknzQ1M8gxVouQvsfd2RDLxBmhAUZc4WB9o4WRqtT357L5",
  "key15": "3LguDUAKi39v8NRQL3XPq5uAPhv1vma27jKY4KNtPWSZy5vWAc7uxf2huWfXY9CJ4WLLgmQvikz2o6T5gnTn9CVr",
  "key16": "35sadBG8CpPoVBMevSNj3Y4GSbBn6fRU1PwcgN86WbwhtbjE2r3GonXSqBopu3bKuAR5aipRXwGkkJESGS5da3cc",
  "key17": "5fVKbEBtXZvm6GvmpPFJq1te4uqtUSp7H7mZccSv9SG8wD1bnc6pEK5Q36KAx14H5XVnA7W5k4EffoD7PY29B9qB",
  "key18": "3NAo78ZFRagkoRk11J1pGGhM8CKZ1wpmKY28jzypr1VnXizRkMKSGpkJnqaZgm4BT4NZotFUviN6ADY5tp9rbRJk",
  "key19": "2nKCbUmHiNY8DPjwQDXPYoqB3z7gKR74iKqHxHnWJk5oo3fsx5tiLd1Dr4yTukyQABWsbvkVwVRKD425oiZ5rNy7",
  "key20": "2aR2X8vKJjAEojcydYS8f3Snk5aMHh6AwqR11pdQGZhFknFkxaZvqgRdrWLnDAtDyMk7pCN4rRC7EY5D7dG1yr6U",
  "key21": "23JivKD6U92ftMEenWehGhiGXEHEmSE7zCvMCnJupEkydFXmZffvJbU4sLutdCqa4RE3WQjYnDNpCfBsrs75goNo",
  "key22": "3PL2zhFDRs1kAv19TomGsqP4tCVAHpCMg9oEyYPm2vabRmJnzdBd2TvBDgqRZREqAALVw4RP8X86TR4kBpJYovLf",
  "key23": "53ianavGmRUYhqkTMY9iiMXUNF3wHWvh39BnyNjPufSK4dqKUztc1qzMLHjGXUSW3y8jYzhc9JTtWiLhvKMcogyW",
  "key24": "2omtpMY4ftqmwt1KGj2Jdxe7STRJmBM1UBd5jn2Wjj1fmmfeNwNm4durPMi1A22fbnbBcXjaaYpEfhQuLGAr9STb",
  "key25": "2aQxHcHQq7roAT2BGRzkSC4aoudhkYkZdPsLztAVfcx7sesiM7uYZHy7fdG1W24ELNkJb39eYJWm56n5h965HVPn",
  "key26": "b21dPgHyHGs9MPLnqgK37dDeUn7HcwksHTxQcpDMa1o31HjnJycmjNpvhcjNc9vpE7tgQrWTVLzsz4oLXeCbUSm",
  "key27": "r6mGgNATGvwPhDPBQLX6Rzyu9u41pfrmSpPSRRF71tdoqVkPknARoqa9qVTBpwKm9Xuvp2hE1B8JGtKdWAYGwh6",
  "key28": "4Zs2gkG7cba961m2oMN5aA868AqeoK4AkMTobckX1dEXQkU5ehaVrwM2AHFCiLVhWxMJpvebpZyh6AweEsdDNQ6n",
  "key29": "4FYc5nTA5oy21WtnCjsWrTHKwd2m8EWDEW1mP5wRX57aGKSio9yxfZGURvaJXeFV4uVM8GD6heYv22Q2baC2VMVC",
  "key30": "5HNNUenbvet68N26h55xgGaud3VxR1PPQn8tzbzQ6yHschuNpY7tjiX3oHD7JLtzp7UDA6g1zSs1D4BA4qsadxeK",
  "key31": "4pwM85Ji21TjRHaMoXuQqG2oLwBMeUgS2aDFqAYxyK5BgQfx5Nsk5G8WyEkxeK55NWWpmw4VZwDm39FgBYmKDX3p",
  "key32": "5fdYiKu6QWRRavw5txhx8BY1K8G98hvJPnTwiS7iRcKWfTKdf6xG4RW9EWttmnwp6tXnYgQBCq4XZkAYMCv3hPY9",
  "key33": "4KWWoi1iExJXzbfcQVbaFu8C1A7ahne1t6sxyPovCSqPX3FRVxShbmAMWjsuY7oRvA9BuLsWu39J1A7LXnQQp3k6",
  "key34": "6ErELnPZbBW8od7rbLapnAQNeJGsNncMBFVFDVAyGkbEjudxWZu5zGYKUSsZ1Cx6asmvQ4DmyqJ5Wfo3p2H7cKB",
  "key35": "mT7NgykfJensRGZZGhhxD268rtDZQ9VURghxq6crixSBo4qzCEothSeFyzzcFMHbDf3bDSa99DPMUtiPVxWa5yQ",
  "key36": "AjocdVBATJGmFCQwnaJ2s8razu7ihuu6PDaQ4W5J8mzk6nykuJu81PpJkzQzbLmKqJo5K65fQPehYpRumTtuviE",
  "key37": "4xcDqunVkmj6FKmr6xTpgfxUMyWsq8tB2SZb1mtKwBszkuppYcuDmGJ67L7zMJVzzN83mMiV4GN5R7CfCVnJumAH",
  "key38": "4j7TtUP6mjDNR9iBDfS6nC6CiiaH7HszzDLVLhzchFKzRp6L9a8sb4wrPtpE8dDeg9v3bJRnM97q3uasHYnUyBmY",
  "key39": "5vBEb6HEhMxJznWbzMTmiECWwd7DPX8CprvMkVjdsGWSYyvkeWoCSf5TjJ6SRQvsafNCNJmzEXhvQPfqQzvqbq8R",
  "key40": "2QydzSRs4EfCqTtqfQ2jWDvULYt67zBXgoj588r13bWci7AyZf3g76dL6maqcPHfHQLpWB4FSin5jm5vZCEMgb6z",
  "key41": "cTFw5ivZXdcffsEJ9StjdAmJkermikM5ynAs63UQkzmZR1vQbPB2ABXrTi5p2fM8hZDoaDw3BSr2S4yCbpN4bWD",
  "key42": "2eUGmSJFEFvuKFVZQQbsX2Dw717nW8bL6v2WfvtLkh3ixN7ur5SDudbWg5rLsNTnoSseG8zvGjebH2DnagT7JwUZ",
  "key43": "z6vSFHPpDoZUJRpF4rh6ziWEVwsAuEha4SckZssnDzGuub6GtWdttzN7x97CTHh7Th5CpNiMYgJtRpUb31p1PDT",
  "key44": "5vqY2NNXSXqH8mTPZescJp4kVCTnVymwa4SLtCmdr6C2YzrNELid5GCbLs4oiPMJAf3DaRaD5VZxP74c1RyUMHro",
  "key45": "2EXtanuRQ9ZqFqw92LpgG7rnoBwyhe8S9RUea76QFa28MeurGDm73AYzJueJ3rtwrdA1pxbFteVx9EfTatjgXrEU",
  "key46": "29WUUdJK7oLU5ZxL94L6jZb9XAKL7kRgiaNWSojYXrJLkJtfKKzseBngzCRrV2agKWhMS58XhZVo7VTBPdji9ecx",
  "key47": "31rtA6Yw7McgjRkvdwuWiWW5YzG33WwXeXVsaeezwLhGuDWBykaPk9bnGMYCsrALj2xcmUgdztZiAVdDWLu2naNn",
  "key48": "49iaVBpascAnmgtvkwm5zyN3fpXsBrMjf2E17u3rcECBhrJ9neectJvJoGbeDJrQhoS1y7pNSupAaQaCErgEqvwj"
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
