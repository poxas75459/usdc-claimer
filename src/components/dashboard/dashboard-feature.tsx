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
    "3n6yeNWCzjTREfkGaufVZM9Rzwx39bnsN52kbbTgKoCNhRrM3zH9wxDLGDW6qo2CXW8aixbP3DvmkDfQ48AHwr8D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39289CSzJkwF2TXMHhU38WztNBEzFZfQgnZkknAdKVPBApkU1cZaES1KTtYfTm6VSdagYNPU8p5eV9HjxzhMDt9",
  "key1": "3Z4hfbXwPJJz1RWnwxHBtrsu3pHQ34fHCPSmzJBdKaF4MD1yizYoFGATHxDYd6RqX7P2jK8YyFDtdSj7htZx7YkK",
  "key2": "4yEx9vMQGRoGTigXdUzGvq2T87PykfAoeXdJ1HETFkcyhV19eUdtcCUgNWHKKqm1LZ9ZjBa8o3BjKmagGiHoRRRE",
  "key3": "48nE36osnnZ88JLoKhYQ1xdqcZum4J7ZtMGqCzMnj7DAATQuHnTSHzg5UR2uahNtCtDwMLbu7ov35ePGpGbsB572",
  "key4": "5sarmBYSNZ28xBgrbxwJAzu96gs4n6sMnnjpG8hpG3xJWWSunxV7y8CdBcUSfMbme1FtgKgtdzvqn8uL9gPVw5Li",
  "key5": "G28czGgTQwDNUwS6obYQBp9HfNnVdtnMe5R252cTTGdgbu6iRCSHbMJgmtnJJS2bzahc76CVtmfN3D7qhTW18NE",
  "key6": "QgBZdHtT6inLVBHLgNA6cGTEGKnxTKRo4cWAKpVv9x1KeHfd5A64sp8SdnU2bNPibdghq2N7FKcBkqVQ7R2AYX5",
  "key7": "3amZhFYojXt3cVJDsY7XmJptYeQW6jwChAAn6nMUmt7TxJQiLrgTUcz4VFyM83Y6HXkmTTpwn4qVQqfTQtmMtPFK",
  "key8": "39H2BtwbzChgC8fiRpZqH9mUiLvzQU3UpjFfq8QcQssKvEFex9YLwP6PuZtR4ssqhEsduispozijhGKWGQGT5isn",
  "key9": "49UN8kS9giq8ZoChAcYzJYwduh1cChbBcP1uLbyHF8LD13EC7cHZzR9tfFgE1CFjFxtRsmUiYfQv1WFTPENojSbZ",
  "key10": "3tvYT7C6xXGKop59uUD22qKFtPegTSq4USdZriNoe9SJjP4G6LcHAeCafrw9k8cyUKBVSTRCkV6FQoG7PNZ8K2mq",
  "key11": "3eJwBAnKK29fjr8Fk1cPuBGqftomYbdXacrxaKbzC9urUACS3bjSKBUTLqD6MYsd8KWN8neA48FtC1r3bsuznn5H",
  "key12": "3uRXA5zjMZ2JCSypYHKhiTBe28qwwwsJPTMKJZYZMKb79ufwWbJzBpYF5RcG4UNJc7bCVErzao1iV1CJ7G7BRsjh",
  "key13": "57632GTFQLEnJzsVKBwrFJRWTAYvepWxSad3VkD7nSc1XnpSpV9yS4iBcFspbr3VAVv3MY4hptBgDQrKKkxTQcjB",
  "key14": "5A2mgHosepSUmrnCT8jSN2XfYV6EBR6SF2x3QFHFBdTabaHLLjPALuDdAChtkYVjjbZGx82VnHtB1bCxdGbrB8ya",
  "key15": "354kQigDKSg2WmQDbFvQFjUMhdzC5dj7nSfYYLWVNPrNzXcbVoBV3aYdCH9f98Rc1FshrKTBX92pWq2oYtZe4pRH",
  "key16": "2G67CdcWqposc1mbZsJDB8LqcaixSUiTTFJNyYMwSdW3Pma2dsa6z5iXUmCjmLjGCDGpuv5Y6xAqf9UBhHhjZLhK",
  "key17": "31D2m6AN8M9BWzYNuZxctF6YZzzNsg7g5FubGeeFAMhmwpkdgAQppjSXvscL176DT8HsMb2mMHEXeqnX1sSmL8Mu",
  "key18": "2afvuRUHxni6PSXkEDs1TEs18kKpBpX3bNrBuW7gCT6u4WNRp51bd3oXSACvVD5iNzmZraiVKbrkwfEdsTgut7Ge",
  "key19": "4s2xanAPTuECnL5S8siR2u5qADtd2omRK2RmpBCYezCDTGXL17NVNipC7rGExqioLwghGUJ7vFkXYxx1Dijxhit3",
  "key20": "Jy7pQWqCuZ4KgED1rmNaqMb6gcTFp6AMwfcCtBPo5b2TCnNofRNjEQgDb9cMfQ3dHbwEny7fa5gQc4mj7sMuS4H",
  "key21": "3Nso5QurhQC3E71bLejXKaLXgA11WrpwPgeCraaEXUrL9jeXsnAGEogr1EJ5KzYTqEhqJCphvXbvhdmQeqdMbvaC",
  "key22": "5qk1uqwoV3dne8Q8TU1aGjKp8u3rAdBanLrYTYbYJjk2VUxGPLhmBahew1SNMKquwVjaJpMXu4P4pxKahwFi7HDU",
  "key23": "5VCWdwdMRk3jcuJuVitTrAVzBT4ahU3GdovKQQFqgxvzqvYykrd45cxe3LCD63ZWwMviEZea8YxntN4VSoEpENei",
  "key24": "5Zyy3N6m6Q1xvGde8nu4xa756jCEFQek9LRzu8EBNt9TfxEXWP1dZBE9a8JPsmmJHqC8rKyf1195UhrkYiRMMoya",
  "key25": "3CRZfCLXzzvwFQHvpnFCmKLaB8drEp6Z6oRqoxENEgp9pTYa7wbWQhnnqjpZkW3ZV4gRhvALWcucGRS4qWSUFyfX",
  "key26": "Tp5HjcKpxpbJmcnbQzpjYiyLiCNsyjyLKNqDVUtVqY8agKuVK6LmCCvZKy3mAS39dmnCNm2SCckDHtcoSSTYA7R",
  "key27": "4XoEPjyhyTyU9WbaaWW5EeRFAHhzBDUbaerSA6nTN1jTzuCRonAbpu8gWQsyeSHR24D5cjd34ygq8evgFYavh542",
  "key28": "4bi5vLgWQA5BYDLPEWdoVJMhtdwtUVb1sxwbVADtDstRE8FTdLM4E2SQZmKwGjMdEP5Ytm6iPHr29DXCDnBdoqAs",
  "key29": "3gcQHnz7DoikP45Zi1CAc8FSuhhLLBfQMsxQHGCz24E2UuRcTPv3cjU5uAvridgbscXi58T3ukaVYxzgiA84VPje",
  "key30": "4353m9342AYt833cicH7R1LCAjGQSxAQ2QxfGEHaUqXRDBzfk7KNcNTYGfWTwCKoQBa9yoLXgJPNXEwXKW62i8se",
  "key31": "61DytyL1hr14SePLbDdsZSz8x6F4paZd2D7FFHcGfKcnScWLWCueXWYJbDgZPazqJ98EYf8cWXxyjw6nirMNiQy5",
  "key32": "hzqAttkfA5EaZ85Gewm1CaMvY9Xj3Q44EYF4fMH3y3UaodGyf6YxZHZUM2U61AqKiHvvnS57pLP7tbaBnXXASML",
  "key33": "5PPtnvk9YYCDizD1oK6kJpm7PHhspCcBTWvmn4iWE5gvLookU1NvQvUHMZtfxRuZUQjU3PiHS4naUvSMEjyDR6tP",
  "key34": "2tuNDqsjfP5EJZnnTHtTF2CRW6JBbLLSF6g476muxZ9tG2PymhPwANmDRGhfN4987dJPCFMZAEKuQpkwaRV9xGEz",
  "key35": "3tnb2hSQvLY9htqKj253DMHs4vbJHrR2BCjhztymVQ4cUiXYP1xYy2nup6PWuLcfGBMbJofYBdqkFeJYkWfuCMsa",
  "key36": "3G8MxMtj38QM9NQCWrKQXXTzpud9YfdinQu7KNEwe6aR4tD5weoPqF6vRiC7BCC9HQDQEeV3PmJDDLPCrYrKV9rU",
  "key37": "3xBxsuTkQRZa49Sfby3uaUeRibegaFWtpbX82otMTc54VRt5QgPjsApMVReece3LCWBT59D677bTY3LewmtBigNH",
  "key38": "3RPXibVEWWrLPh3gsha41mfjZnbd4L3dq4CVz5hrh9C2N4miPauviSomx9LzZzgKheqCGsF2opsbdNhgCXuzAiS",
  "key39": "5ABc4co5yJnfZ5ffrnsckbTE1aKZuiTEi58jUb2URP29GHJY7muMoKtp8MBaZjdqubizcvfThaqTasTge7Z8xm7B",
  "key40": "4W4uYsifKqAw4Ur1qDGS3Ux1XXbBfCtXY6x98vCBkxfU8C3uPzMz4p1njF2YMyrMNhMj2sncFKLAkyswBYfy9ehK",
  "key41": "54vqo2sST1vUEG1djq1R1ukmXrN4TqrKbTmVBkvrRNNwo8u1G8QxreBR9XHTBnCSwv7Hj9TpVUB4HzStZF7Xakrx",
  "key42": "2y8XVHfsbYj16sAneNDURyMvpA9zUeEJE3qr8xqLzjdAcmUBNGUFR8S56RTg5cPwLGpTKPCULmhz8G6G59tBzLPr",
  "key43": "4nU13gP52RGrxEhL8PZEcAp4i3frWM2Lj1iJ7TGAhBndSMUZsL5osZ3nhfhHZxXKsPgybmBAR6DFG11Ce9EY27SU",
  "key44": "3LHkceMkFoT9G2mgrXprEhVnF5vb6pLqmP88yzaresawLN7VD85Zn5dv8B5twuWEp4YudL6uBwb2S1BjhVZuikwY"
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
