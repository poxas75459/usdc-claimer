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
    "4goXUoyRCd6mN1kkjPTDXQh4uc7YjwAaBdNofL4Cjk3Rw89iXxxJjgXYKdKwvTNdAZLSwFTmKRakYjRjsNPtbE8c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CwvrV2uPwDuPYa99fgeA1q8azvpCuyeWdXxbqa2dk2eVtTQJ2kFdE8WSKYa7bxi7nTxM4t1ESEf7ishkjhCYJbc",
  "key1": "2NzNw5NyEkq8raw5KotSUkchqzqpAFrTxC5sbvTdRW3P7DyemeMbs1CdJiknRPCkA14qJNwqQCSeB1jiSio9Qq1A",
  "key2": "5Skn7JJDqt1yJkgorvAk64PkoXoN7YnQj7QMkFErd72NdPmM66AhaauvppGNFdfgubjcgCnV8ncw88vJWFxnkLQ2",
  "key3": "5M1LtG7udb5uMcLn4E94ALxvgANPnzZVDtB1pvwvzjyxReejhb5C8Aaa1xap7WhnGnw6JYiqMTynkWcgnY9GFhMa",
  "key4": "4N5GZAoRCZV5yPFTALmME38vniBACepnLaKDGtbDKhQH1gozuPPDULAa6xPZZ7WwEogp4yoFENtNSQKo7jNYTZWY",
  "key5": "5mGD4cb7MVntnbDz21u2rzMQw8sGSgmzsSr7q7sn7gJsxAw8D1YJMcKph1ko5bn3GyJdTnFXcp5QWxjTgz3zTWJL",
  "key6": "2Fw8Aks9UxZzsKzbPGR1o9XsBJe15n6i4xbwMuNrEkm3hMsZJ2Hpyh59ZckDPYUsk4qCPqYggEtFtfSQq4cKjmrN",
  "key7": "3ykWC7AmSdfJf9zKS9Qynf5DQW5LTo5rMexJmKT3YC35JwtD73qBx99XP17ogR5ZyBYvw79moG8u7N4i5u76Pusd",
  "key8": "2rGmCYRSND5VtRCkq6kirv3XcDeaAGZ8swcUXs33V87fkV2Ktda7tHVbjzsYoaHLojuXxnHGsGi5p7o5ZYb9j8PU",
  "key9": "547UFicgWERauCtp3NgtrFHLRaTusrDzaRdPLTZY2TxVc2Uv8Gp6uxGYjzQgEDrzgQ543Cdcc1b6g81xSRWJzgKV",
  "key10": "5zvSLGZ6g2SWBxFuhKCD2CUNMsLWCiB5GUiMvP2FHkrDaEJTHam4fnc3tQYaGCDtCREu1jSHjTMskrip4ikdo19b",
  "key11": "5CsPXAvJ79QFoBkGm5cMatU4ZZx2y9vWYgoMuKBn1T7ZGd2WMFDPjds7pfYUHJqrHzSUS9cLWLAww4WA91iL6jjA",
  "key12": "2ShxKtwH9Fg78uGox3F2KdeQaowcqxATexSEw9Jg2Lapd3Qpj6XrYLpA3UgRNegntBgHEeKCJsQxyQYzTrNfPfpZ",
  "key13": "4kHfe6EYQ5Q96YwW3wAPcymRsiXyQwqhbPRkP27kdaRqrTF3npfQ5iUFV7wNBU77N3cjXvRBt9gk9qbbEjWXoFsG",
  "key14": "3FNkmjBinxcuQYMB1NG5zH5YcALWGneAcR4vr1ukafx49M2B617kwqBW1VedghN7Ni8Kuer32EkDHAxUjTTxiAuA",
  "key15": "4jt4SwiZMSK3Q9mZLLbswuxv5mbZyd4PBrg5PjgSoFpe71o4RNuMwNBMob5VjNG4Y8rCH5HSywj5yC9QLXq1nx9J",
  "key16": "4RV24GK4nVxVub4tocBqBmUr7aiEwF1jHcQympfPtaf8MaBs1zubCnLnC7bzioeLsDFLUKmcCVys4dewrELwcsFe",
  "key17": "Ve2TKX7YwBKXR6pCiYNfKai9RhTX7fEToobsgoMsZuGHoDqAH2fd5iUz9bC8qUjz8JuN72LZ6utXzWFx7Vb3mov",
  "key18": "5U5rmaJYZAb3vs42TZrjYhW7SFmStEjh11BJXPq12ffBnHRo93exd1YFotFAB7q3eawxnjbt5pSQP1e9P1gx47Ys",
  "key19": "6Dx9pYZ9Ajha2Yc1cw7UDLKbMcuQ4vmhJdkDFgqAXbB528bxkUP7Qbzhp42q1UDyGjxUV2kWg6EQMkQzQJhepVP",
  "key20": "3GeTSWgTM3GEqMBkQbH642SXTtMQEWn5ZQKvKZe8W6LFMyteyZWu7LKPHKm1NswTeSu5FtY6hGMX4BSj6SAVtZvG",
  "key21": "2tm9zQSrqRcepUA9cRbq7LBx4YooPyjVbxBas3SoXnAtGqHNdMXkcrjtfjMFxepE5qNHV7xbp4uMqvzdT3H5ywrb",
  "key22": "5zPr4Upy2G9Vhp8iL2UsbwkvREBrAjWkPQFvNzyAL3dTBL93Nut66zXxRZ2cT2H7sgBGTSydph7zCuXoq1EJ8W9b",
  "key23": "3EHoNRsbRZ4vpFo1xKuBjax9kBnNG47J9TZVPVnjQy88DUanRSRifWZbVJmrykBAUEzY8znDomTi7Jc3Lis5LiM3",
  "key24": "42MT4c4s8cPbeMizLYkxXQTUagdKbjsFtjPjq9WkYj3smWfyi2x8vT9Gpb5ESkUv7EsvNGLCxHnxt1JiGBKBkdZD",
  "key25": "3ipLBCJwmFNCDyxpvUdtCeDoRjkGGFSx2iEdiWEwWpvEVVUwnV8sbhnNnpcJv9yxSVGmg4u8axvbNx6yc6Si6iKR",
  "key26": "48D5AvyP8uot8NZD5sb21deoVwz6LJnLF73tp9D1TtxCL4pYptizQEE8fUszNx12eBJnHtGwXZ71Qhk234Ua7qub",
  "key27": "2mxkfsgSufe6cX12rJZ1Q7FMcWyW7qfPXX8PSSy3cFWU1iXdXTHhzsrarUtt9aUk1k1D37KcC32ULZXBSGzstqrR",
  "key28": "2VthWm2v92gcpniuf9R91nJ2iEmpWdfgnkHReZwvrSjvkMHQQmH1Ys9Z6jbYN5uQVQpvj7Jvr4YcxqCHUvMcYVbX",
  "key29": "2oYYHn5VELnJPx4ZcocR9aHjJHcgwn1Am4eFAgKAWWEbGc2G9dM68iCNQ6yk5oiKr4utAsGxZ4KWfDmoGxMNFhMJ",
  "key30": "yGaUQn76E2Cy46haaECKcefekDtHFHneBLiHF2A6yyJWeSJcxGQVfnrmPBsRmdDQhhENMQEMgbHWey57k3AB918",
  "key31": "27WUaKmgbsf8keWUXC5C6T6eskb9qawRGnLMCSG5Ty26mzrHpDFpgytMvM1ApyMtbfpdrD36sSRtJGVrGwazjhhs",
  "key32": "4JxoABuRXVerEnRHeLCuCm4X3D9mADbEeJAWyy25ugqsPRMwZG9cRK39AiQN1EYE7DoT8LS1AfioZh34kmVkzgqd",
  "key33": "rjuZiK9nm6TnyJ4KX1cvz1T8ErdoA7Gk2nBWrGXtPycLf7uHoFW7fs4orao96dGoC7h2nd66QS1zoc8fAqKCa1t",
  "key34": "4LK6tWckKdEukjvgkAt2SwzTUCbJCYzTNhipCRf3JfTKrjy9a9eks3vNLw9DBE39Awk53dqvoNbkE2xbeEnTpTTZ"
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
