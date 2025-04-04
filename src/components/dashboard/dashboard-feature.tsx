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
    "bmsz4n8FxHD7J9z3sCFyGyX9aUJRwNDbzRu6mZd47unwkSxFnHefw3y8DPPA7H9uG8NLtx5raPMUJjXWgQJdJLX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ANGymuYDezwVisfocrdebR4ZMQNXAQuwrKoYWBXP6F1W9gXnaWDMMYbxbs1V4BLNkCcBJGrsSDQwGh16f6iDYni",
  "key1": "4a6zij4wNudqk8XjYRsaCpXTv1Ef5b1fButRuatg6JQzBEw8LQaVZCf6nvjxzK7SnjWK7TovCAzGSYn1spR1eYxD",
  "key2": "5BFHcNjSUPyveFxUL5QJJ6NfjyBV76C8RKZgjfV8ZYR9Nyw165tFcjEQMdEuZzCcAzQfWmo9CEPCJp6f9u3T2ewg",
  "key3": "3sXXUbWBX9RfFSE2kfkmtpLz1LzXEF4HEnJ2kPqZp1vsJuysag28kEknUPPJpNP77j8j4xakh63kZEvV5zPU6WwC",
  "key4": "5ytszcuVszB7JojJnbu5SL9yikeBj975M2dLemK3DZL9SzvL1kxnYBPgp8XJXGEfobbBwdZn5m7pzbrHQaxRffXt",
  "key5": "62m7BcGiRcf3RQYLt4SNtYSSCs6PdEp2YHBS2igZE7zJ7h455m9JMdM1CDoJ6M66HUtp9P7ejsmRrmiqoqpbd5N",
  "key6": "5Zhvw9hCXSbyKgPsjFERnEQESJYNnqgL8T3v2kxnrv3JRTPsDNnWMvQdkRqwuTPAJ7fbWkQfg5MS8VGswe28nDkV",
  "key7": "RCofekynFTYJ1GiGary395G9UCnKfpeYXpTN4pKsXRsefwUUBxHKqeV3dQWtn735aoddzXAFC6gUAudBiHxvh8a",
  "key8": "kjPG4odYGgAKro1in2FpZtuafGwvBy2wB8vimuuLs691fsngneQd8UHKjrVk7cWXjc2HfAJS6x3MhoXacX1YJZx",
  "key9": "5mkDtbvpa1BbqGoo4QC3U1EHbbTqBLj5jWp9cYDRTmqPuP6e5oRtnYUuxeJ5M1VEFGBJSMJuLuoYZGNgGZgr3iSC",
  "key10": "2uZavqoRxkcaD9YauYiENhgjcaATfGgXWfQWpSVjjXkHomDRRHUGPrUjN8vduecEbe61kktNZorS1i4cPHwYeazJ",
  "key11": "31ed692DRTth5bzgi1iPVWx9SxMLgVSsVQNDZUp3MmxLuA4jVXVSuMaiqFkBhHESDjW5b2XxoFaNy5K3eCdGdCBQ",
  "key12": "4SvEy6Hnrn2sfrhHbDqFGoAKtxSPQdauQPb2JVAcaXnBqpB7zErdxqtYe86Af3rMLvBUB31Sfqi9mL6FurvnEDJp",
  "key13": "5WbuPmMdtNMpt38cTcTKw1AvwBXetrXNx2p15SD24GeNMhzny9YquJ8ZyufBctUA13mFYMphqn3LQxvsM8EqKS2",
  "key14": "4cuPkhfMJis9AzcGwK9TPhtL8ie9WCoFFCLh9gPSKBWUqwd56py8K14XcsR2hK7T75kB8z2FLQmJKocZKpets8kN",
  "key15": "3aFD64Jw3C3WAznb7ZiqvCraBSSAjGf4c3br3ncxTzarQq1hbxxCho4XDCunpdF8XsXvDJADwE3mT4EDSNZ6AHhA",
  "key16": "4mzhYtG1Pwy1Va3GaZc5HM6sCJ3ZPtG76hCCfoxTfSjW5SvBTRSh8goTbwAUVJTr4J65nKmasCC1k1NBzx6snNKy",
  "key17": "53GkosdmwziHpiVPDnxDLeTnhX2P63GGKLGQABF2BC6dT3K3jJESuL8vb7m5QWdAjRTg12HZvacvUmUrrdF3zWxC",
  "key18": "4Z99P31seLC7AL9YrwWW8YLHYVew2bHzVYzjPx2L5SPw6ATD5YxM3xfmSaYaud3eBySKRj5yDmbwWbv5Hx63rrK",
  "key19": "QZKNrpnhGszsqELuNEoBAPuxURddpfuf7STwTebYfz5WHPVLqiXeDAM3tX83CR43p27abniy4LUjrFXF58GnxfE",
  "key20": "zpcJ6UGqAesefuRKxUFqmnmKsSC4EeqqAgz1gWroUHB9zrBbMLfDdbqzqsHCa9732PDNM5dfLsoyreH2fTfAsnU",
  "key21": "3DcmKRgNKw8kC2GtKf3zJr9sf9F4nkBGbZnVvyvXv1aEf9AJ5KNiCWcMQTVNio5N1JiZcV1W424spcPSiBfAKGVz",
  "key22": "2F3S1WhFUW3EoJeNT528w7GEPpTQuRJxBvKBngooYEBJ3kuQa41qgpqJR6AHqiVbRrqBG4kSsDkRMu7VnkJPYLXF",
  "key23": "3oQaiRwsrrupQQNVMfqXaenxKaoce2Zo7eZGnLgSu6cJWUZHEVhzPDd5HdWQyLo84aVHCc93LQCaEQgwLuEQsEWS",
  "key24": "mEPHch62PSz6rFjhYMr5jSm8oTFuthTgdw4tVnYKyQgVTWeNVFApwBJ3xpGo5ADrXBVQEZpthZzLtGm83XcVKPy",
  "key25": "2zAok6vVfJrG7DyvWddmwwDn14TKwSsqS8wNksc3zzbteay3E8hoGjrGpeziCL14sWPTe9Pn4UMfNmNvCfxz5oXJ",
  "key26": "27YyVQ6WJoWgfuJW3is8yyBe2bPGTaKqGXFoAxTcsRp9w4UD1wuDtY3Z2jNL4C5EwipkfFKrJVDo7xwqrgEmJvic",
  "key27": "3FKqGTEfKucHJfzQ3KUYL8KoWWrh8aCkZpe22azhbJpcMwZgd2wRtXrGG1GtFzaTtkX9W2jfpQQkREXjajQKVMRh",
  "key28": "fvXR9FtRaHeaayYKcDxfdXsYikKmRhNSaSwcKnWz5r2wwJvC5j2XrmkXdsZYoZvEkfBX7DFRgHJwsFMeeJGqbJy",
  "key29": "2ijskxBezJ6ez6dNsqx2RrYfyWamA2BWgWmoDCkUmeMVeVEjj97s2Ch3kytBVegLy6YUoaiuin7uNL7YXJW8bwN2",
  "key30": "618ZAaNj2WLoN7w7P1YSL26NG78CMvMBjCgzUJoBesqJwo2B1Ntk1NTnmtdmY71Zz6SHCr1DjNJRcxDHFMCfcYsA",
  "key31": "pT9h282utvRMsnNKDcm8SAkE62smHDG3ZAjoGRfQ1zXFonJtajZ4eCAMUzuPQN2gM4BTLxNCATRWNdmLGbo6nnk",
  "key32": "3rqwiu9tYHXLxXCHmB6m4BENNEH5YKZD2ZSwHhbaWMYNArBcB4v3S9qk1KXbd4x17bhZNWf1F5m7JA4n5nA9RR6h",
  "key33": "2o5FzYVwBUMz9emCjK9QRueHBPBr54GPE8ajmxhCLRP8pVp5QSArE8ENuQckSPApvBVvrm2vnp2Y8Qa5oSM9FUgU",
  "key34": "pCmzoEjKAxxyxvebgF6QWFZ93RKHoaxRaXCAqPV5HiTMFjzAHB7jXBuWQ7ju7gz38RjwkCMW7cxYaECgEZCYdQk",
  "key35": "48aG6i8gzu3VJ5AVi1is5RWBe8KVtPfhvFuS71bks8AU7yEQuStUyVqXPVZmAVBaG7iQqfCAHBkVV1jEir9TmtdR",
  "key36": "4GNXg4Uzz4giVH9AjnsSfg3g99EC2WF5ygDNLKAUL6C7GxaAj1ui9RSNenMh7MUz2At3Xy5gdsQD9LcJYLPZT8Zp",
  "key37": "3yGz5wx1gbXfUhHnDD4BgGfFt1Qa1KFnWos3rCx32TZ9vH37JgwDgedXnHcWBQ17tMdkfAEVVdtX29WoptGcc1Qz",
  "key38": "5ZdtBHrqznMNVbTwJcdhajTvLVjXacmmcConv6pbjo9TkTEjvDQwNcRQ17eymMREoWzrRdfESGM7sCdt3dvzc8fA",
  "key39": "wbmmJyb1ofuX8DyxisnumoeoiAzQM126g25NXWupX67vAFnBbn3ZwFuwUtsiMrNi8GjgYpsBaMZUiSZX6FPRz91",
  "key40": "5cpPijufHYEeuH6gxQummE8MYDyGrtV4cFiqFxQ5WtM4QFaSkLzmaPpAEQziszNgmUGDHsRea5GH5t1NkuFNStGo",
  "key41": "EyvZJFdEy7yE3k52D62MrjuXHDYUGGR1VRuT5YPLpFjHgcw1R6KD5xcVFNezY26N2VmaUwW8K1yFVVSG5ZR1g4r",
  "key42": "3PG4bkyQVsLspFNb22RLPE5FYVTzvUHSBqBLGZ69veJDZ3hTC7PymCcbk7zq31siqMfkK2z9TKJ1ifMTeVLBH276",
  "key43": "53g7bxQh33hQ49FUT2euSLwMNPYYiARNXoYgq6VnFiyjJU9qYdZwNSrFbSC1AGyZgajRjF4oMwGqF81qQkYww3UX",
  "key44": "E6HLQYHMFe3J8sSa4VhwiFLBCo3GxTiBDFeYHFvnfibhotNrN1pRENYeidFqxaTan9jFoKGDxhkz3VAX4VKsado",
  "key45": "4ABMbda4JKHCAZ769hj7ws8Vc83xin5Fz58qzGswh9RXKwngowYMPFSu7hAyBNcQJoPAWgBc8TNQdFs29ervmfqA"
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
