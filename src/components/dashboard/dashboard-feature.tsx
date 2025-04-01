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
    "33bpisJPdvDZCfu9vX8Fv29xamUEGiLUapa5zCdy4Dby4dToGqmWQgpkYQges3rMW4komVADZez8T6vGNpKQACVq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BNfoPb3V1epMimkNaJxfhtFEbxzvZYBjbvjGXuYKbxh9epTnn71fDroe2k6yvE9Kr1byJSaSoQeT7jnufHWWXq4",
  "key1": "5WFW1ToFmM5PuEoh1JMaE3E15rGKgzfjjK44foBEqaCyqo4mcutE3XiTuH8enUDoQgnn1gV34C2ZLaUQVMQ3Y7S4",
  "key2": "4N5gPePE2PMdBqaztXbPLrzZmqPgGpvUEqJLQCXGBQ8gP7C6iuvpT82uJL33Dn7wtNEN7GQce2epcMHsK4cUqCUy",
  "key3": "5ySD6jziBB2WkqJzc7sJvARBsnhMGockqfzeX3opwvvvf1GkM9Ndg6a1Xb4QmbG7xQiUupJfZVwCLy9AvmyPeB4e",
  "key4": "X1wLQmBvpc8PvLZBMkVAFF3yigERU9wCgvgsEv3G1CLttfkMiZKerDx3eWdbRwjtaAwxcqR1QsrrinzgUeajWGx",
  "key5": "56ES8nBSce7taDW6cC3T833jewXcBVSgEEwGjSixCL2GrHyjw6Gy5dpqXxfXRNFyep2AteLoSLeBxWEZcRVgkMSf",
  "key6": "1mkn5wKVVvfN9uDucrudRMeGGJvNGzf7rnfqKHHN4CtAKUXRCVPg7mEu5USRo2aC7e4syVtkxCjK6fvTuPvdTPh",
  "key7": "2DS89N7UH15Fd5WSFWz9XJNacxyzmABDryofm3G1kbQFWu2fnD2DAhe7V5vcKGuXTAzNxew3BJrRBBoMBEjZ6y5t",
  "key8": "tMZJhUmEuhbwXiaWqJeEr24sKfM1d3koDTVqu9C3fufNUGyg6ejGwDuY4UmSZnaUNqEC348zPJ8XH9wz8TsN2Vr",
  "key9": "22eytEUCH3PAWmYoSteZBdip2xn2SngdaTQEnHLB95HVd9Jf7PxT8VCxNoZAEesAayx37KQfkBiAFyERNa4vaAbv",
  "key10": "2HPx35uiueZwnknYVfvoQC9w2SRYaEzA5qpo4vrG7JcSVu1BoSYQV2ipGsAse5qYpYwcq8YQgpsyXMA9yAknE9Nr",
  "key11": "2HJ98CY5w1K8sMsmULXKmhjYd37js3W4amjcjjgQEgx3SFvtBmFpR18DcnBqdVToBJ1gpWDtt5okc7jok4U3Mpux",
  "key12": "2YgiFzotKV7HGoPp1gubE5otX2UBz4EPSV3hqgbzek3i6boxHV6MBPrYGkVuvaNW4U3WEeq3iwmBNpQgQDNZCnoE",
  "key13": "3C1znssUfDvUBmQy7BT4pAkELU2iixQWb8aSUhyjXjV8gE3PL75UurB89dW669FGJagnbjGfR1fRJgJjm8fz4Swd",
  "key14": "54DXxNPnG8fLDi9WdYV6yr5CowjhmwAvHzLftMJLHCb4PywhW6LnsBQ11YAsmV3G4EJBnLsSre531dGC4BfoZEUg",
  "key15": "4mijkMrS3Dr8D1QchKqmzkWkh5wrU7u5Wy1oL8ZXitYWbjwtBrZzKwjJMhT6HfLdV4yVEin3WPt1DUREon8bLZqk",
  "key16": "4NJP3PFvTT3kBvbAGa4KUEpZW8buk4mqmWXHfYxmC3fndk3qfC8RQ3zjYDNieZxaMxzdEXGZ22druMztrX1XTfFc",
  "key17": "5UUodiaDtdwU118ti56zrXx5vHZbsCs6F1KvS1tbFC8Bq2XiWgWTcCgqsFg9esQKXdXiuoHNKtSZUYX4RTVHyfE7",
  "key18": "2Yi8Gso4t2cxWfJjDr82Rf9Z4qeGrCoL2KCTAVeMVAm5CiUCFZsV52y1f5eT78mpUMiEFbBr9xxGazuAR3ii45au",
  "key19": "47MPgtzAG82kph2JS2MJR73Hh7g1mbVH2FYXPC9mcpbLdhLtGoHHi4BpiHjW1kZerq6XcBBwBnv1Ng67qKUDpTef",
  "key20": "pqxVyXaSGshSZHqA31AFvRwHwiSYAMryPePZLskARvz3fFEYATXbuoR1pL42kt9LFm8zD7UzND257W5n1sMoemz",
  "key21": "61owspV1tZeXnAswBHnsdsX5ktbwXbgjfQVM6g7D51MPjwjobbVGjjije9VB4MGTA4TQzEsNQAYu6Cv92X4pH9rY",
  "key22": "2h88fziatCUqvbhyfucnACRAZr5Rg9xa2DDRPiP16W6K93YgNW6w6hc3zBJkpbp1jgqsXR3JMiyG3ScmDUHfvYDc",
  "key23": "6uNJvad7XXMdVJu4BeqFyw52his8LuvxqdNTz2RzH5523BXYKfhkSbAmzQgAk9ac2vyHwPw4Ri5KZwcjW1Etwkh",
  "key24": "zuMyZgx6E5gi73pnQLfmzLUGxeu7cAJCtBXnLKY2e384i6rYGsoSNLTby1wePS3zV9rWMHYShaRhrfRtq7wLV2S",
  "key25": "5b3gKb5iygVUt9dp2X3mJAS72XmuHdyT2RQuDPJCYFbPzcjphG2vNneWBgNfuyf6DoXLfaSdKGw8E7BWchVxuALg",
  "key26": "4jZSynMPeaLac94VQY7CYD252aE3o58TXdh7kpwzYAfNaG9rr7MLRmMYUpNx5iNf7ueqid8dv6dpwEDutFariM7E",
  "key27": "3556CKQpiz36s2rx1ZQ2DnEfB5NFTNrRwym3XdQPq6DkqgUYUn1QyNNCGXtsqzVbqKsj9bRsz7Yd3K5gCBMtMv5P",
  "key28": "3FhswQv2iPk77QxrRd43Sk1snApzTbbre7urU4wgirLqAPdvXiSopTqgw5aJkNMvxfm6uevdXVV1K8vwFZQc8vQn",
  "key29": "5VMWLCanx9mRQEGZeYPNA133hKnbjAZJyg1QTA8qU1rNnNi6aNb5Wj4KQmcYSWHrgDdDGpZP9EvzXKZ43xEAkJhy",
  "key30": "3yEeqY9kryrqg7Cp64pazGugq8QPfKU84wCDBmRDzUags8kgUhmHpcnBBgSdy5in6KFVUcBNEap2iRUhfYNpqTN5",
  "key31": "4GTBTAPJmy6jvcS6bJgSjEnYEmNSeoZXzWwpkawr5wxpssHBLF48spwD4t2HK3P42JfbxKYmS35CaaA8Cun1DoJp",
  "key32": "5XxRm8mqLSU2oRBZ6mPN8jh5k7NnNHygDDakkMu9qpiVJBFNuwACG8qzzE8kJu9QcpUtzXK4mAqZzujf7bQ2u5x7",
  "key33": "TvBXqtWARF7ercohnG8ghYdyXzmMsCZsH2ZgyG1YjDhUsGa1TMJG9UFWeqP4VSaqHMAuzA8tZe138EDdArPC4Fc",
  "key34": "258WQ4gJTMgttWWyhDqNYskjaHeqhrcgibCQuzdzKiNP6bJxtiBuzmq3kA79s45a5fQue8vZXiUzDf8yQPZV6qno",
  "key35": "2CMLHQQTGH1A9bp84gWURvFVJKheRxjShBPZGYoKp65NSpViGu8QasWJWbuhviferTZtGX8L4f1f1QY922JuLwPc",
  "key36": "4u33sammQQinEUz9tApvV9HLeKnux23r2Ay3UkQTeS3KDntE3L5FpYvzpwzJyJpyp3ehhgmNbNHFZVMB3wv9wBtc",
  "key37": "5wy4Y1KV4AVMEWP1BEXKQsgkr2dEiSxn7YnBwkdaZVvDTKNQ6vgibdmsRxYthGTXZg2TFc4dUfZKmj3AuPTfDChm"
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
