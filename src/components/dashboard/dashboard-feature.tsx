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
    "5hqiisZJuz94L59PCCuxdcnyoyGdbGh8qJfySETTDcjxaRXnngBjX8Hm76GozTR9pGvkr4hWJGLqgMz8Nd3isUXp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BmgF4QnbNcVfnGiarJqL3w1LY4bJkLG9PxHeKBbuZvX3GrL38K9ZCFPQsBsWM7KN7Zmy5Gt6Hb5PkJwecvUnXTt",
  "key1": "38sdBHefjstEA1nL9ZeEENC58STsNc9D9xu23sKaRUS1BPw9JWhaR2P6U7T3A1R8jzgeYSWoSmxEvShSY5nAPB7J",
  "key2": "4Jo35vUAMqXAqgzBJDZuqV26MhngidzUwAdSfBJT6gqGxpG26kwVx6PgiF9p4U1Fct632u5eHsiNJn5bHBjp4t1c",
  "key3": "3VMhXir2yMkk3e5Bj4qdY5pnMhjwUBmKjomNAGxjjErYLExUuH2xfAKoZTwnXuQUGcUksP6iHTHDSjB9VpMx25kz",
  "key4": "6WbSDebqdy5TcmGYuY8kHcYtp6EWzEEBUVJADEmENAQaBqPbTtEmNeE1ePR2vdiZa2tpRNbKA2MBP4ATqDKJ3cK",
  "key5": "2rwMXcbJrxrpHjx47PU5Po4NevdVpCuJaA6JgY24ipMBH1UbCexccEJZdX8a9kxa9XnV6D8W7C6fe59Q9FPkqspL",
  "key6": "4ihCnW1rpgGW1yJkGHW2TMpRSm9ko99UZB3CHVWkJLA29iXv2T5JNH9bgd8jiFjYyDDcXCuZxTU4hDvfKb6s6kme",
  "key7": "5DX3jgEhGM8W8JL8UKjEHaykGX461xFmZ8iKfFNyUQ13A8exvTMf7VRUJp61bZdToCuGS3HdoHoVp1KbZfdCcS5T",
  "key8": "5P266wrjad24AgY38ko4yxseQujbNPb8xMYMwcB5167uHComrFsw28veBiqkQSAcbq1fTiYhFBNqDW9wEeaoPqgF",
  "key9": "32npM22cBrkAhna7kvFZuGoaXHA3sU3r783ecdRHgn2EQWGHrb9GD8NtP2TDtjXbx3cdWwLFGDnQk4UjKdaZBybH",
  "key10": "3qD8myg83CyMnTgLZRxqce8NHSj1NiJdwDzjW8UMkb3XZ6nMP3LjhCWuyULXiQdYz33oTwYBTZcaoCN1PEU9KxU2",
  "key11": "3kz85TS2arJJwMmqB2Pr5wbShEmnBztHoJvPYMjwb55U9kBkFaVHKVnYrCXHbrBj3mxySY4nL41uTpjsseZB3GWE",
  "key12": "jfPorwHxGELh61wF651BvAUDJTQPRyUdn6fbMi7dtnzhkFewnCM3QXBA1vzWU6Ds57XDw5catxZB6W1ihws2U7E",
  "key13": "29MDTJL52hJcv4mjnEyKjHdmEX3ELMLzS1fQn4amKFzuAxT91uBno7jyUTUQCuwdnicVWN4xyBKgM1thNdfgivz9",
  "key14": "5oXX94rR5uQgat2JFi7ZLxerBZWeg62H1UfMa8bvmMgmdNmPMQDoMqJmGF36zE4U8SkHMAJL8DAM16ACM95gRGyx",
  "key15": "5oSbguxwYRVnQ2ocuEQx6KtxRu5NCSZTY4VxVrjf53aHSPi3tg2viMXmkkUP3HnRzAbNFgQoeuKQEYARiApAWJYK",
  "key16": "4HBiFr4TJAVNzGbQrbq2cPxeFKwnuYJsWJmyR5gsq1YnxZ7RMti4rYtAFciuB8c3XZtc7CnKqmU6NZTRoj1Dnp8W",
  "key17": "2K4E5wVZemWMj8zex2rwMAt2Qrxk57rkBbX9YqJ4s1QKW61Kath9PMs6X5xFPgiA7PZYm5hZxZ4RMFYkj1n4tfP7",
  "key18": "5yTvoPYrqT99ajBNkN3s4Zijphuk5qoHG1eKPo79nh5fb94vY9eFx8dHDiuZuEHBV3zSBhxLmGh4rmueQSUGSmdR",
  "key19": "2hFoeMy1vepspmKNTAYypW5tcmbCepS4Eq4D9bjVvuxWPeLLba9ucFFVG9fWgZiSy5ZgMab7141AMuqPbTae8wf6",
  "key20": "38yRKKbfiRaVpNp2dxu282kA5YJCJA8U4sX8uR4y3aUCBuG2mCd9gP5H2MfeZGkuaUzJhrXY4QYxD9inE5KH7w7T",
  "key21": "4euiCcCH54j2kV54ZnX82ShEzZbZF5TEcuP9dgnLB1K1eiWabAwJuzRDeKfWfgn44n7odE87c2Eod5MH8Uy9oxKy",
  "key22": "25Rh4Mr2EbhdfapcrBoU4WFuhvxGeHqkE8f88ZnBr4KfnMQjGM6tDuzRnfYayZVBHqgkqhKT57CYmAgkL1hQVXAS",
  "key23": "5mMQco8LmNZEioYbHDAtmTmSQzkSStqtq7AdTJbqNZBrSezeQcZDpr2LHyRhC3UL7SyLAk8xyzeT465NnuvRor89",
  "key24": "4eDKNaknanvGYunarR7PmDtf1GoFfZhXextVmRGUm7pzmCQ2v2fgwPBWuSzgWYTFs6qEVs9qxuU8Y5ZKg3oshpKc",
  "key25": "2aM9R4ePHUe6LbcwA6ZJraTpF7GuPq9vD1bTczfVQasa9QxvMAzBqba2cUu1sbpzhTaY3k3Xn2ZFnnYyEH196AUT",
  "key26": "2fR4dZVS1nTDRVHNUojLvc2cHJPM1BCA3Bopv6eYKmdcKFWhcHDeDQ7SMjhRScaNw1MzmwneMuhPeTsMV5uuyML3",
  "key27": "517mWtCMQAx1w1Fj1HdPdVNz99m3ekXzpDEe7kmGD7xrWGSCwKN9fQ4qX3t4B2XApdNUKoMRgVddvqqiuVzggPSD",
  "key28": "2bjXvcda6qPUMgAHYgkwfG5eYaFUa6jvMVReuwT48FvVMjbZZyfm5HuH1vHL1KAYMqQoyTF36NDahUMTxm2GwZqV",
  "key29": "q4KYfe2BXkMwWjvEUtQJKXMiahr2KpkT4hANEAGMxFKb58adBWNDJqN3ojmTgLA2Gw3M3L4bkLP5RSY9dysAf9L"
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
