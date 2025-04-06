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
    "4WdrJn193pmALj2DsGagNdrou6nMPuCVDezrGJwZr9j3RUdYekijbbbFNTU9fjM78Wjv7TUHn3YdUtUsdMnAHr5c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LjRDkWZ661FLPzz3d5m3zqF1yQsYX2kYv3HdQsStYibHg2a169Y2BZqJsTPjnhfwd9JoidX5nCGm2maAEXTdmwG",
  "key1": "4rZhNm55RJKtmwqpZM5ZJ8weFCAVjNsZMgeLyP1CSNhYJFj41oeboVMRZNKpaZDb7cgSxESWvK3ckBvRsutgSkKy",
  "key2": "5xBVPRuyez54GBzRryaPjDvjPdwsiaA8kLW8Bhcj3R9WTVYZ83D2EveDioo3o1amvhGZuQMUy8d25eU8HAzcafeE",
  "key3": "5fBwPDLvuSQa6RSrMoHgiwJT4mkd2KMoHwwxjoC9m7tcjvDXTRcmAJppdxnckVmBVhX8HAdXixboFjzVomBEq3TR",
  "key4": "T2jLHU8Sr1wTtxBjscP2nWzoWFcgnptJBLVjtFH5dczWdjcckha8M8M6Uq3RYAAxwrAjPyqCnGRLtJr9D8zbNsZ",
  "key5": "4nXFhdYie64bovcwHRghzzswE8tfDWPYwYJ3HzX6NdBcuLXCM7cZ6MDZVtutGhzeH54Twbg8SrWa2pWU8FkVzZWR",
  "key6": "4oipzko7ji5MuBp7pyaSDsWVhANF4s4e1NSkVXnqEQBjw2ncgHCQa7iWGX29vBp6fVdVKAZBd2BgjksLs6yn5V4s",
  "key7": "349Qy4cCkvwYRH1UNDi9edNPiYyFqPHRTRxmPcVeS4WgkSbff1gzswWhSUYtSw8f9fzgGSyUr848yutjAob7F839",
  "key8": "35xGDRnSvyAqBkLJqv4hRdK8Wk4nir7zUbqpgDrzb11z3c5dYwZbsbcQCdjb27aiLkUypsLgbsxPECrkEUfouGL6",
  "key9": "4RxiT1U87BJ9q8tLkeMaZWaxB9JJYZGEmRzi2ZrAKT5JFYZPmVyGB8SoYwX3EdvJyD6acKnfLuXzuNcP8SyEsUDc",
  "key10": "3vL9ckgkdz7os31MkSrfhianDudicTYfruQmDxdstB4JmPW7ksanfjWJU8WY6pPDp69Xw3DWZ8veuSbJQFZfxHsV",
  "key11": "33vPCjVfPUVgSyS2mX8NuWArj3mGv46zyZGFc3wTDPMxPgmEmBKBs7SiZ25iU4TwkHJSAWw2Be7PQktVDdj71znc",
  "key12": "4fhm7Pd6XGmkyoK4tojhb19AEiJ2dpkkmQdv6462k2VmdyW7r7oQLv26MaQcAabBy2xbSs6iaMK2DABVQ6vsVBAN",
  "key13": "2UDXD9iQJhsBpSkoodXX8DuDwN3u3chDSkfQJCJCrYTca2nzddUPVMnUTcbPjNUZmHBbp8ypmSEHQsNG2VUSuUu",
  "key14": "4q4pT8uRS94w8xjVvwb2xSMLrt2JMp4MEg3et8SwcKjnszACSSvp32pjk5A7H5fVa1WeVmnj1s97Y25jxTjN5pZ7",
  "key15": "5GRyhfKBfX3Tp2pi8AhTQ5JcuRx4EMF8xy7hh8xkm6azm8rbvKNxyBoQaZvZ8nsr62ocCkWAxGtfV4kaB4vsyAUV",
  "key16": "24j8XJkQK3ZwydWePaR2wvNUTiaUsATnJyu3XXWQHz65MSwsQtLPmC32q66W3wVoVFZkPpMDuTjJjq1WBXoRACeL",
  "key17": "5nyTaBbogfxJPmXi6YWaS75sXYP3G1xs8x7s69heGM4TohaQHBTBMJmxFBbkEfC9k6GEtQKdk8nLV98L1Egxx2c2",
  "key18": "2aSzAXW7t8TUyZB2gSqfXcsZDYcsaUtFF8BEJBLuW7LjUcYhJ6cBqVhJLhe6f7gRfh4AhnWDDrqWTafFGbPr97v7",
  "key19": "4cZr81HQeJRmwN6sLdBK7NbkhHeZMkp5UFAdwBCRkjpEudPtQ4yrcqT1dJcRDbXeFsxc6BLtG9yMrkgfvVCfm1Pz",
  "key20": "5bc4yaQxdMKp3h4ZVySK77dqHTRDNFBkexzafWxMwTHJx6bCZ2VhN9PPfkCMXeY9PQDmnzFNr6oTwmVmiMAi3d3m",
  "key21": "4SosAq4pck7cLp4zjHkZxBKSvYvADUAvXxUNozRWZEMo4YfSw4kz9ijtxvQSHiQSJr2gqe4rbY38DU2wpmZTfgUZ",
  "key22": "vcNrpNxwPjDATvaPdYXhvx4xfFJ9iVjwyRK6A3Dx2kU9YVyHiWJDEKyLxY2p1xxG37LqbccozL6WMthZckC3Z8c",
  "key23": "255sKMA1fd946yZo2W248fCqsHBmtyZd5ktgP5CnnVBFoH9NGWZRWPQ4GPAz8f7D6q6d8KJop9pgu6HTrzcvq8F9",
  "key24": "53Q79MTtz2yApRP1fvQgBf1M8angj71LfkkMVmbMQygkh4sixg7SzUMhf8F5z2fU6MPnSTRgoSSxRF7TLUPwS8wS",
  "key25": "5pFQ8CjDR88Rxh8EM2E4avLdhxyp2gDaSmT194T7kLoDUaLbrqv12VjwxKhq6ZjF83VcBs3qXnrAxmo3eGmasMdz",
  "key26": "2d59JYoHhisRWqzj4W9HQXgNZnTa8bjRVrmiDgfmjUkKbexvery6oD7KqzzsBdv4g7U1bwpQXy52HkBw6Vvw5k3A",
  "key27": "5ZamakmD8mZhpvxBN9jAifM83WTKrkDgHHdqVM4EaVkKkD2KXAvku4hL4iwi8bkLjKRRikL75sRC3wPPRqC8ZKy8",
  "key28": "3MP3QLTguZpoFf3b4w7Grzx2cZBAWZZisRwVXF1hB1Rjk68pABpEgjrh7uZtXeTn88UrfhATajuA4CpBMniNCfJX",
  "key29": "58ScXhCw5jhPr72J2KoCYXto66ueBJCDYKpEyeC2hMaMtkbZNJRKAxuQpuWzyermCXcFXdYRZo2ZoP6MET7R7MFZ",
  "key30": "5pCw6t82Bna1AGR8AueqQfQ1QtYhXXnK63rLi9WmZSSwW9sx4vm3T9TQfzYWDsEFi7xDrWoBApoZAzdx9hNSULgi",
  "key31": "2hY5pXYZYY6wtUx8bpewrRoR58CPgVwSRbwZ3izPNiE38NsToCYBZSngVdPc95v7u8VqRjLpnaYCg2xGFiBaCp3T",
  "key32": "3cWhBoprBwWgBXka6eaFbmsuBQHrpbeht7d55qntQgZtYb7jSnj8D1zFFEu6tAe1qNxfjDjTw5Dg6qg9RatiCX5S",
  "key33": "uTHJcBQX6Cbdt4yivXVDFRL4DUHztCDNg4hbiaqAaZj3ugQN9BJCtix8FCvEKvRFMUWtjhDBvYvhrYqXxkcNuZo",
  "key34": "2gcnz94siCBDBcZJbq1hbv1bt5Z6uYMpDkEQQVWmvf6DhnsbLp95q39rybFJbvnY69vPMGVShZMH8qNH4ZmRrb3p",
  "key35": "5NpMjgqgzU5ppxh9CKeMQcYy9Wx8GFiUkMTkwHvvzrxUXkqT9TLG7WzbkvRdzcY8UC8bASZgKxTbYo1Vr4t9Joy2",
  "key36": "2ucos8cUWpqUKw6y6nWxTaujLM29PkoFsjkpGFm7ihJXZU83PBwwHFmgso8oitQv2KL5pW2CwUDjN9MjoQ1gYL2Z",
  "key37": "2XpM2vzkju3nZuUiZokwrWFJq4Hoit7PLdDD4uAbgTTKYg1yqm8ZAukpngU2CPRGmQGCtpAnUv3MTvFJqwtTVgQR",
  "key38": "214zS8LxEdTgBJ42uKoPWqCwTr9tPfLyLB7BfhHnTPmL4scaHgsxDhq4ws8omYbQiMh8KMjMDA8Mm6eg6dTFwDmm",
  "key39": "4r3DZisyzYBSRzjUgpapxRvopD6pVi3BkwyzLMxweWik7YwLumX6ganSKpHsn7TLa96ePVuL9oHv3yKEi6xvinR5",
  "key40": "4ubBkGVxkqiDJ5yhQfMhtc1DxRqEHzTTX6RSqiF7XRvmJ4d4hX8BqHxxDf9j3jZiCFs3WoKD1GyAZnSaCvg2z6q2",
  "key41": "4rtCE3ws58szVL9NjSd1pesXoXDmYgLPGyJKKSooU33KvRHqJ2XEQJ8AFkLBW6URASJLuCWqH9ZhYKsyxapcf7ou",
  "key42": "NqRw1NhXBqUKJyiFAVgvxxQ8hMGHr2Dz6pjcREdtiNY44nCHdQhJriccvt787c19Hz7SjjcMcpbMvC6dUcBRh9k",
  "key43": "g8bbHX6sLy9nnqQ4C9FFKdarjC1eMRrGj9rNX463Mh4B1Af5VCoZgzCsVTLzB83a1gMF1pkmTJsbKB4n3yBbj2P",
  "key44": "5pqrMaS7bUz2efT3WxnZmKXVvZU7gjRwCKbSBski7YrS5iV9dRxtXCnf584n9RNH7oSBun96j3XhqVA7skbgB6qG",
  "key45": "2TYsuc4B6iEjetGe6yDbt13AUqikAvv6qiW2j5MY9QmbhqRRuiEP6ti92QkEfcXgQ2BB1uTmgXmakjmPKCjNgzVx"
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
