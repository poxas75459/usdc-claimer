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
    "5fJSZGgM1nasGGrMyAnQyWQbKtaFGLafU4zK9WtDqHHvMLgPfkFvZQPN6NebziqoDijnXJ2q9xXbwC2XeBBVAxfd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BuhLUrmjdxUobeTWsifjhNrHNx4LiJ9YXFaU7qPa6JEW7mrbdjmuX21fC611ZtUHcbgg35J4kRXmgaFADMBWwoT",
  "key1": "3tMUnZn9DFv6KModZ2e3uNUEPyHmiuP8YhjUeY15avby4nQ4Tw9H51QFbqfdUoRRKXbKMkuWtXpxR367CEJeKryK",
  "key2": "5irBxub2zp15HYEg2qZBFzHf5s4KArDNfZv6P8CqUhBtVCf7uSz4ZDhF2Ls21J9abxxM5mcjStWq7zueVgtwU8J1",
  "key3": "2iycJFovbNcADpTrkYx9gMyQ2pPnoShCZAcuTr3ejZqXYUqYtodA9Xeap6aTLouvKWmC1dxA4KbnVSvC1SXa9BtG",
  "key4": "4nAVaRFgNyYh7n8u6z7iEjNsDAnUxBv2EQZxPT3aC8MGismUiHUzdAXrJkasnc86AN7dASsTCB5FR2hjsK8iFuVB",
  "key5": "4fbbniJwdstPXJxGTrgdmudfG1Tj1T7JgzVkL5dsu15c5E3jiAuVHMm37bEph1miNHf8c5jHr3WJcKXxKZzfqjc4",
  "key6": "4rCFoHDf1CPSeXruPUmkrNFksXWedHpHroBUT6SkJ4MEKTU854hhKpSKbLZrbuz6dC9so5ZhKep5LDe5UgrkHe4b",
  "key7": "4rABoCtxD3jaPfe8oS8BhEfTEf6pQMTdJ11wh4ufhgsiRpWheTDDL1RvL7nte9TSsfWYTvPeyaHWNi2Rt76geAji",
  "key8": "5mHDJnftgWU79PTNdJjbEB1qgiS2SrREfw53shJbY98WTjUvzGiwT64CRePLCUyAbqqc5WSTtSFir6g1dg9zauru",
  "key9": "569CYuCA76soaA43NpgwjQdmu4bAGX34fnQSCGGF1ke1vwRkux47nmx9jzYgD9LiDZhNpLZQKfqFyG4hzBnTysQk",
  "key10": "55ewdW1h8FRLXbUskCXCX7ms1Eqh49zzCg12dajXy3EoS5qaJqdcjnG4CMvZ6TwFTMtF7aDhXgNWjqZGYYC39dJH",
  "key11": "3BLtmD2WJ7Gwa3yFPMKqtmP96fchPKjWzW1KHRdAfUSfpWFWu9Eetv9AKExzgaWycqn65Y2QhEQ7UqDm61WsQpek",
  "key12": "62HD69HKf2GZ1uCNsvAnyp3KCKL2LtLZGXGaf6BmPNoYveb6yW67b6BxwCiC5FXL6LFuTyoFQybjJfgztXnNward",
  "key13": "5fvHXLFVXmJBnBrrzhHifT8HWU5ppbNHidJFrTHs4UHoDpv2p5g89hyKexEoywcqB52Cw8J1iUGrU8cady1YUEaJ",
  "key14": "3piFEjrAdq2im8rVDhUu2UPaSmF59gyj5hkdVB5kKHx5wceWjxUmBw7zngJaM8GmXXYhh2qJTHb92oG6ycj9Lfj6",
  "key15": "33R6pjN6RTNQdT1qwsRwERMQkN6yiLqpN6f3ybhQghTMvTv3vBmw16Vgo1BMWxoPuXPvR8paZKypoSLP5Jn6exXs",
  "key16": "KuExLmi8aFQkqaUyji1miaXkrVkgJg4Egfzf4N5Ys3z8BejdD1myBBStkLRqpSrZrEFDr3rHqSJPSTt5dgppzua",
  "key17": "3MG4As4xox1DbNfKBy6aXZ7gnoio9C3rZDjt2FFqjx7UQwgASbiQ9escRQhNKfktqaYVRJRTbtSZjirtFahRG82p",
  "key18": "5ym8cnqum4oiYBuaCqe1puhGTER3Yio5A4NjqdF3Mdd7LyHUPTfN8wPthRxJXEJftemj3PPEdkdWnq4QMCJvQXmv",
  "key19": "2i3nkY5zVzy3XYfto8ox3XjmWQHuneNsCDWXstpfT1XGb7LcxiRBrEN4cHfVk6QnQEJhsW6piufM8oGkKZYx7x84",
  "key20": "538F8sS6LrSk5dkc2gXbxgJibMvz2E17AdxCuZDhSgVk1YnVb9yC3X9bbHA2E4vRaZV2QKSGQ2fY87GzXydey2VF",
  "key21": "2UBHjDuNDVgVx2JXUJmqWH7GnksWJP8A2wTzEYaoSwrP91E5c3CpYaqtMgm14YtoZ4JuVs5adF1Nrwx4LWznxumF",
  "key22": "5zC2pRqDX9jAJbW1mCJ4ZwTjGsnQ1Qig8AvCM9GTEib7EJJ2MsXtbGXPCPyzvWJ2sWqFSnDLYNgjxXwqT6aE5k6p",
  "key23": "2biMf36ESFqxtx2QGd5ZnWxUo3VQVVGdW8nbJ2iV3WLUgBgLcAS6gKFx2i4Mos5av6VC8KqMcQ9pT58qEXfmtTLG",
  "key24": "5dErYRtujY58a87oNcLCsBFZjjY2YU5kufUMSxZxrRGk5yuy8qWcVc9Mn2gTDnhGScMqgcJnWTJPBL98Z3eXftdf",
  "key25": "4Pz64b4opxgkHRHDC8tvQ2kgF6u17G24iTJTEdP5htqMKoR1cHAzHKmM11radNQD7nd65hyipDvnhtXwCaFjSixJ",
  "key26": "4EFwA4rvznCmQ7VGKdsZgPpUq2EzGVviNz9ZcfTVcY5tYEnY88FFRrQEz9oyn9RsroUdo1AM2ng4m8EYWEmvHDJK",
  "key27": "2D5W3qQGisKQgEX7LVtqXk8Z7KjhodUp919YxLdUaefHWEYJTHEZCKzLMvWubT8QNi18uqRjQ1cCY553LUavQjtP",
  "key28": "4wBrPKPxoxRgc78PK4hTaFottQhqWgsXn3q2pM5AsDmF8zgNrJWeDBoMW2XdAiFiixbQFFcqeLNRYZMTmLMDRC7E",
  "key29": "66xpQuHU4p1f4DPRFZY58eCDitG5AJNaXtZ9QPMntNzpNw2mF2iQSK8jh4EYN3sFWG2ZXymCBuwUJhjFLjPqMtUk",
  "key30": "5KfzKAWM4BXn1cDAC7ZBZabw9ZjkMsK4nafPNX3Xs9j3eiw4GL8FWCPeLx99iZzojCDT2c74zTR6mtghTiUozGdN",
  "key31": "5H77bb5QpKxFv9DV3nhGumF2SUhtfnaSJMHw44o77dKfVYkpkBwXoZemccZyXEnq5HHKWKHzmMxmJf7823phF3SQ",
  "key32": "5JWP3kRh6j4ATjKevUjm7qehenmTdgHZFgpKqDoKXBWE5YuqscMA6uK2GGCiaQV3Wng5PiPUyJMtZFDMwSyJ8zGj",
  "key33": "2kidMuxogcdT72rH2FoiqwzcKhh3d2G2gxXeSdd4T4oVm1YVjZxDWbNRu3mNhu1vUQHsEseoWmJAB6LhuenrBC9j",
  "key34": "3YKJBV1BvPjKucN2DvPcR3qpxs7zFjNKA56MX28fDVCrTzZDNEBG3y7qvC1QZD7fc1Kt7vCjNaxF5fv5R1UV7ixY",
  "key35": "2JfNjdYFNCe2eRoRbaKWBCRDsmJVhNBCsoaauWijYRPGqKwwhwMJYXqhjqnce1zzWs936ykuyVJnoP52uQnACqQj",
  "key36": "3jojJHJ6ytdr7R2cnZKNb3aPq4Q27VeW9iatSUfjHGeeihqev7NJB1Jxo8A7sEwKsiWbniLNG9A3PvXXBFWsfzWr",
  "key37": "3Pu9GU7aDfq1RC3VnaXqM28HEEKRyhS5BUNVWobuwzZi9558Jr397udBoMHwaLnenoAMkckredzLMY7M3LH3DbJ4",
  "key38": "58BMYJQLzRrpK8EBAnrPvsH3btrPTG7cqfkFnQ5D34Jv9neX5rUnh4qzxzmfqXdLGgYVvpySM49V831ttVakWtTU",
  "key39": "5rMmkFX4fiUZ2ec6Qajr9bimEPNRVPjErj5tANPDQGQgxwxpyNVisU16a5C4XwLEu6QvSxEgukN5EG789cymuXXW",
  "key40": "3od2BXtSL73VUkS8ajJryxEr7ZNySFuHZnVhvfVkJY4s94obdc8Viweu254Pv7cGjYaXo4ciATLqM5y8fcfSPAk6",
  "key41": "3LpFRCjvi4BRSSc9cZrQ33doVDfDz3Xy2gMxcPMGaEEPoywimjBsBtMZKAi6tsVLxq26JJJLFNcKyYFA61qViEN",
  "key42": "2DPXE5oDMnNL7b7AxBRGTFBv6KeNZt5VZGMJkxf6hZg8A8hqrCKPCXa7wmaRnE2sZ92r1b4w8KKsDCetYuRCQ1XK",
  "key43": "aNUKei7QxgX6PtG7bx7URf3TTHP6tfLQUEzgcD21Nk9UW9kc1NFfoSoE2oT7zoV5Zk3gPLe2cSoi2ct8y1RVwD8"
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
