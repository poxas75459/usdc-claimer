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
    "41Tpb99jP7w1nkckWaqsWfuMuUdkeT96NWsEEuodw5CWZsqCgoy6Ehh3X5bwmLNbaWoyFzfuavfnViE4Crzaq8W9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6kvAZSU7cvsPNrMA7zTAfMtbsDmYPv4C8ogJS87f2TUhXoGdAdxjJjn5rdhYTswqtQzyKUkkfYk278BCXrj6Jwk",
  "key1": "f9hv6ao1x7ryTNEhNPk58JJR6DSxYUUJhntZq8UiYUeDmLUuxYSnXLGdEXBjzngGUf8zmXnoXXq4aUrrd5kTq7h",
  "key2": "4KeKiEaxqJSzFfPJQFjemzrFsAq5LZVF7DuppdeUUWe5bKcm84soD2iuo2WMq6JLUvRKfzRufr29LdKELm1eS24J",
  "key3": "3gvjxCuPmGvhSSQevHTcHsKB6JkmmULANbnorxuTezBjz2xm1E65RSPgP1q4vuqrj2zFLVCMdfPrLfJML6zBY2DL",
  "key4": "3GbD3CxuJCP5DQjjEtqm5ZXBnpgfJzLNJQr3dULCSNq3LAFMKv7qEaEf1EsVEhAmneq7vKgYpje2ojyv5KNrPFkY",
  "key5": "5skMWTytnQPd4yVipgxpJpQ866YLrEXeieTdkyZauQp8jr1cnmbsPWzmat3FB2y5RmqJNZ2xq2HYe1y2Xe7L7k1b",
  "key6": "32p9ZTcooSXj1QuL326ranMEe5X3cvxtEhJXsoevmMChR4GJxKSBBJgfLZf4tcSJM6aBdmCY5yGmczxPXbSmcYq1",
  "key7": "3thncBVvdVJkyvL7hU485MvSux8gAJDbVmNX4FKuTnLkpACX1vBPH5EMPHWBFrsoWAutPArajJn2PaTGeRjNsArY",
  "key8": "LGES1DWz2KaUjfTYCChKqQ2hUBFd2CPdMvtHdSrp6VPT4WuePhDTnweBjLznrVpdthTNB2uXHUUHR4QSkRbFa1U",
  "key9": "3mmy68EyhX5aRNkThm5igwV2taLeUSCnKAnr3ioZhY6qEUeJogghsuUSTfPoscqZrF9zmuBPyMLjx5g7SzEMLzVq",
  "key10": "3DSmC54LJRcSWbrnF5yGQWNERkt6Qu5Fhbg4YTXrJaS3HC4ssx6SVqQyc99S9RN5rM4wRKy3kBL17y1QRV8w4QGW",
  "key11": "FuErx9Y972fPWJTJ57FcGxmNQAqns8ijBaajaKP7qqT4p8Ko4fZWyaqVfFYMCrX5Ad8Dg4o4oHnVkB64EvREKw3",
  "key12": "3766JxMAG7wW4NZetDVXoXP9B6P981YXLAuC6PvkTQnfRNERQqC6kKA38YghHHd9ZSXmomfmDpQGkrW1RGku1ku5",
  "key13": "2Cb7sqVipaks33nJznYZL7TbXBiKnnmDgpBs719KyQFYwxMPwnj1CoSNo8jYQxYsoZxkDoG24ji16aTA617CuLmS",
  "key14": "2eDuwmHiiXjGuQhHDw5oaTStNnzXmQ1M5xUQ3hifAdKrxY4vH3UV2VxZ3MAP28oou2PNgVfaJt7Tv72dium1hoz7",
  "key15": "kqFcUGLn7NXmYDsMRoag3ciCvFg5Nj8khn1UzSEwk7PbXcZLnNiipE4ffvEwaZQfjefyeAEZVPDXGiYRHBeiJKD",
  "key16": "3jpaAfqqLYHhYcv6ocrbFCw1gtJMGhcefQXgU2z4rWeeqdtAXhyiPPXhVLE2j5wHJBKfZd4iPGTHCY17TGXMXfJP",
  "key17": "2Lw2o6U6mpr5MUSYsyJbhFgoCoBUz5foWidVaQfwrY9WD8nfaTCeorvWkoEQqRLdPeKn97gdDVZMHDL28FrW5eyr",
  "key18": "4VYKjFSpJnX4MYDiAx6bjMTcPDfnMhgHgX3yibCTGWLmx3GAa9CT8KwMeANDwhEZzipMjSFnwg1o8yvcBpvY9LPE",
  "key19": "2bfdrrJ3W9QtvA2jF8m3hzN9J6uNFX57Zdpf69zrmz6rmBjmbKJzECZBys5xPPak1nwSAWTPDsREEw7oQGHXReQa",
  "key20": "4dEzVFhzJTKmZjw14X6QR3P35TF2dbDDBkW7XtyMqQtodRukmgAcRmAf9j3ymaFipodQJdEHx4xYcTvw2wtwzu3J",
  "key21": "3Yocvr1emdNP5h62BAq456mGntmmaDoVc5kV7ZDwo3KM2vz8KzN7SNRVKobmG137nJvazGF5RSENn7s2SkEcsEX3",
  "key22": "2rNp97HGXcAM3qpxns8BKyfgrL6QBF3GChKmwXd1FQN58fzFJ6gDzZ8NdtpzDZbcHnZhjUeBRg7CMkaZGREAaWM4",
  "key23": "2Xx3s6dNRqJquLXy4mfV5jY4ktPQQSDREhnD788X8j6Ayy1tt4sh9dWGbdtU31tBV9VW2wQ9WC7jUbZ3ZP4cGBHW",
  "key24": "4GKWtSBjxGg7JYftdrQ2HS9PJKVxYyx2YyddLSqfaqR49so1cPUDMcBrTzdZYMDJ2VW1KJ1qbtB6HB5UZzigbdkV",
  "key25": "5UEWv5v4wP2U7a77T3zFGDYVTKx56QgVTeezU6pjmRXYZHMfYNbqbpm47Xkf5ikcUYUNBq9ypBXqUey1NbYopCph",
  "key26": "2ZJG9D1RiHPjkajXCC9JEMFQmniDTVM4Wk7RsAZLK1DfjdJjHsgoDAD9GCUCxnULJGBUrx6wW1dNPTF1VUswe7MW",
  "key27": "Qgrn5R6UYE17MF8EG15cRTYPqfhdKHWzZRGNZ7WoYbxGrvhgF6Y5Cpq9hoz7Kgx4WwE9UtmPTxGZtcyZD8h96n1",
  "key28": "2v4BzKRWgPfVx58mbgsvku1P86quVjRyxHUXrjafT4K1vJ8jBwuuUfpiSdG2g7po7DtFBpiyEwDetKgYg7mG78fS",
  "key29": "5tPDcRoyu6TJMYJfqRT7L6suocyi1q6XWD6BJvPkHShzjeiUq6xsUdXiEWaLB21hgQj3CW2SYoPg6egAb7Vd33Sm",
  "key30": "4F9hfbDT4Dz2BDX78TCt3Abe935EPbSApaf5QiokbwBTkYGfq5idyUibjLemc19DuzK8dRETv6ZqSq5QnZRaGQ2V",
  "key31": "2GAQ4DJJAFgB94zJvuMajf7F2xpfJWSju8Yh5vxnXAufffvaYdgzXChbA9cDEiqM36uxrpserTuvEVC7mG4X5fs4",
  "key32": "2BhsFPZ7sV5pSVjdV1PJi6NcN39Hsa9my2ySwmfLhzEm9GRNf9vacA1rSPH9jBk1J87uf6Qcn7CCSHVwbiDmMdDk",
  "key33": "27sUYvye1tEaLGJoVuroXvxe3ABqaYv6rXQCqmBZPtHpjvDscThtPB7exMD9MshaQdyAzcsbVqLt6cVUnrrUogkP",
  "key34": "YyEEeEMYV5kkhN9XqVDgtv6QQAmE9RfopUrK9UNxQAabsiMcxGzYaNKrEMqNb5Pk4jRUsG5BBYk4QKEh4aoR4Xk",
  "key35": "5bATQ9qiBmEM32UzpZTsoUMd6HMXBY62GGeAQf8zqGcmDSbxEaAQkpoPRyZYqb9Dr7NnYsXfDyHc6Cvg99EHXDku",
  "key36": "4WqpiTRCviV7rJcjFUwLZispFq4DydxqAcZcoQRoUfWhR1nJUZy1aT2d5S7QiJMZoXf5TZmzcGZ2U69WaSm6baQ",
  "key37": "5pZWbsqFSWzN6xJMuds8iHktfdbZowuBUkWfenaAefzTJrRZdzqZhEMzag2LBsqNcofAHGZ2LRiADyW3M3fq23QD",
  "key38": "33fTC8x41p6giD9GCaijz1iMTHgBnincrGvSMvaGKNYYpGLisS5D41DPRMCtBixcdh5rVoCiA3SyES8Pow3TABzt",
  "key39": "4DDgW2aL7jYC45EoXWj3GoYw7kYmfxN5dn3eggrtaAVwsfVYfHF7cp2UaeJB3S25uDHWKoSMETDPjC2rZFUUWXxL",
  "key40": "5mNPBjVdqrM6N6Nk2YvmTWr1Xb7Mkf6VEnaJg4egG481NVNVwtWdAMNQSest83zMwrd625wgcJizYbPxriRsHwCh"
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
