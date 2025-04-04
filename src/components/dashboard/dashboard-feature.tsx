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
    "26Fs7TzcbwZ8vv8cpMjw6L7X4nrvyebVTfWYNrJreWSMuaMY2eeFNEgPEA9x72ibaMX3FNb4XsY9sL9twogF1eWe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56fYQpB3Qwr7Rb9yH3Gh357S2x7X6uXQ8zYs86rht6UCYmdeYbzzXz5d9XDSdbKAHuPoadbxnvt9hYrhqk6TqWYr",
  "key1": "4bVfnopmasCSZZvUEsgkXodcxMxr2akRoaANHZVLDvu1CYzfvnzd5fuuCuNTD8Y8poZ9VHDNZffUzXLwXVMfxtLR",
  "key2": "4AYFTcerPhUJa7tsAir4GcPaRBetX5peok1WKqTzHrYYWgrsru73hv2H3o1X3Z21FEZK4xtomhvp2g4dYARJ3jCt",
  "key3": "29jKJ82ucCEBL4g4CM3w8NmrxJKwKXwVupsbwpigCkNzzMiUdF8uXC83s5YRkJtgoYHFAWuRa3hzhMR9SWSYEVSN",
  "key4": "52ZvyPUExJVbcJJ1wozyy4v4SH1CZfJxSqFQkGPPFXFQhCNw19mhvsSwYx4WdSqtfeRxiCD7KNy4C4nVBdnureRp",
  "key5": "2hTETxYPiUXVzoix9SP8euwk63WqCuUD8ECJiZpb6PuyGtpTxUkYMni4ULM6ekhw6JhSGBybhDnydywQVS5fDXK8",
  "key6": "5gRHNSABCGJJLDZZCDs5Cpfzoa29JNgjDscxSeuaL4uXbRSb3McxyLE2oiXBTnLP8ATqVZFkVXAhG4y2UGTggTTb",
  "key7": "5hKSoYNG5rGd19hFFjJKqPNyBCa96dLVpse8rsBYmnaP1QHVdXjX4XUaEhxcGCaGqqw3BwpDV32QCLzTauYGHx2A",
  "key8": "3WKY8dVtkeVAxVfsC1QPZn7tToDaRFqjzBBMV4LAie9dvWe4G3tJSxhD8khvN5SWwt6Q1XR5FH1i9ZKtcHpvCf7K",
  "key9": "4BtQgpX8GaBm9zLEeGa62nLbuLdeP3ZrT8d5W5D437GP3AMANYJApiG45khor9VFvq43RAD1mN1UZy3MmLnzSBUW",
  "key10": "58S1Hihx4JX4paBtGa3S6qxmDcLFD1oDDXMkczkTgscmMXYNRn3Mu6ikVboQ3bjnFouMN8xJrxGSbzqTShMX1UUP",
  "key11": "5gjCrPKFvJCcwNw4ZpN9J686aySfZVrpbjBYKFvqPt56aCNVsyxWPhsjBL1RhRGUK5kcrEtKPXypVgNuvWv81fVa",
  "key12": "4wpW8ppoaZbkfHPi6vhs19AhbAGhQbekEJpX7G1nfXSCuHXjmZEtut11xCKyjCB1ZDyvpz9hw5ZEQk2i5gPeLoGW",
  "key13": "2LGaGH6GJWHtBNX6tdtN8TjHRXJZVU7QaRoNsY9nA37E1f1ZChuMz39kWSJ38hcPsfSg2ddg8gREcLcPZSfCwrbo",
  "key14": "3W6qzx7YJ8gM2XsUed4ecbdrJH84C4GicuuC8eH2hxRJVZUMBxJN7R3qesGW59TvLGorkYJxnqk3Lghb2rNU9jAz",
  "key15": "2XtZR4AJd1eiRr9caJ5TCgxNjbVv4Br9UmPVgookU4QFwW9eqJQne44WmxtREJGViTaTzN4dLvKvFz7FXrqa7ctA",
  "key16": "2vpcQ87GyMN7Ay4ZL4T2Puh3z8rSCqBJ3253RYmNfQPRC13b3RFi8X4CmnDZybYsyCixPYovWBstF6QTZgrvRN5o",
  "key17": "3y4JTA3WjXAsoFMDEMYK3dMz7GjuoLBqgSdstSECQc4equAUZhmz6XiPtEW8paV6ar4eDbTNXnHdEtpxDL3PqiFo",
  "key18": "29dEbWvtrnKPPFrEZJfT3TDMPaDaoegu7vEDCjxotwLmf8csprG8rEVHtLiK7CDPZYUV2XVciG4SuhcWxcWzmKUo",
  "key19": "3xTs99WVeXAKZ7Wox9dgWcX8jsNQVs9KrfDLKG4KeGjNJRVWNk7RnbVgtu4ghhrpyC8c5zvAEZgRA9Ub1xZTzkNF",
  "key20": "4Ae2qfi1oYnrNimESePJ7Twqc4EsEbod8w1LK3jwRA5S7ADhYCWt8r6375hpGBqSx5qjewcf47mSPk6E1qsxtpQQ",
  "key21": "4ab6W67Bs7ycU7gYQ7jnzEvHBvq2wpuArcWz88iFPjfD5jGUujWMnDE6ZwqpeKqvvTExAbpa48RvS7aR51WADV7K",
  "key22": "XGxzMVvBEsZcWVuRJ4iEwyNy9YBsesM2LtCVp41NycdeudJFTN8GELRPQTXzo3KxczVP3tHXNEvyx9PVsGQwKyk",
  "key23": "34EMkNZRyaorWyytuCivsMhfvTmDCpCivvtRCgSVgdDGwgfR1wVdgsnrHygGJzB4VQKFDvHjh1FBmz7HLgJ1ebmZ",
  "key24": "62jQYhFHgcQyNDnYAKuQj2P5mv5NGGEX3rpog6SETV4TjzLewxq35bwYRdLMVz8u5gxZEBn22x7pCZEgJqSdHSSu",
  "key25": "29Y7XnAUq7oAvtF2RrusLZcVcr5unAgwxX1zncECSa2cvJjgeF9evX3sc511v6B1Ah7Jv649iRG7iwKRCmXePhRN",
  "key26": "3QZiDRiVqvAq6a1GVY9zCFZqUH3C8S8Eesk1td5yhy3dJ2DQMf4zrQfq8un2MNwjUsAyjcggWCKNS58ygLj4LYYa",
  "key27": "4uUb5kFAz1PySguAeQtWga5eM5z7tScYNsgG5qpMzARQbTCf3U83iDniQCiueRPKDLzqehpRFHaxwvy8sw7ijm2W",
  "key28": "64kMdkcSUjiYn7nFqk8AycpvJm4XcNpF2zoszLPouadgGg9cwcfe1PU3SXJJU8TT9SR7gXVaQC3KVRehJrfFc3c3",
  "key29": "3ngmaPtkCVseBxKmM6xDZamm1hPJiPhV8nAwL9EEjTKduc1qnMTBnSYm9NVGYm6sqebwRyHBvirpLiFFCtaFPTKq",
  "key30": "M8UKbHYzjc1iAwxFNHfBtdM8dMjb5koAkvtE2csDCzMXU5buWsKSwLZ2E5pLtSLqTPq5hjsgjcg8X2WNSc4DyKb",
  "key31": "4vTYcwzMc4PSBDxdw5YHynLkJMUg5ttAABHx3eVQVUfXTmFfPb745S62Vnc6SfpGq7ytquZR7Mt99LHbYEqTzNq9",
  "key32": "Uo43nuvhMMDT8pNKPvc9Eg1rvytQJyEPgWfnWSTE51kRHJEun1vasgxZksM4Nw7A6Bc4tffaPfLvZ2KcWeZwgTH",
  "key33": "42L6pe5ormALZpxHrapnc7f7Uk9an3GnWkXeqJUKTKtsR4fADfj2e6TKvL71XhSCvXVFuaxrnYGHqdEf75zp28Mf",
  "key34": "J8dwthELN171XY8HG1vAgxUiabfcPqpRUf4vwcFhBQumSEfQ6CP38wg58C36RsWV15XyZgvTKBiKP3Mu8cfStZc",
  "key35": "3xpAVwgFnCG6dofyq8rRHNmzNW8cWiVAKBLPqbouZr8SY9sVtXZ9raHzW8szB6iiT1M72bSMZwVQBXeB8Erqar4v",
  "key36": "2QAJaeWekFRbLTsfRXvEQHyLNgiBU74xADhXPwvFCDtuz8NpVZ3td8KJq5WKt7og1Ujf5EoCP73HfPHE9VvYqTP8",
  "key37": "R36Zi8RML95tQB7cxHDLGEkoGiRomzexr7WV31biwoT5PkciN9ZzVqURavis54SSnNM193fgG82bQLKm69GLwLP",
  "key38": "3gFjdWZ1ZdAAsR7BB8CUFCRqzgphnkBwixDr8XKpDYfxdQFpRinE7R84FrZyuWNjQyHS2NwZKnMFr2hhSyPkM6mL"
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
