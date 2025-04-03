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
    "4bnHuQkR8EUouxgKXowptx1Je3F6YM53Ln8smbVEVceSYm7i46y1Ph21M6EmdLNFSR7NGi7CCwMne9gJHgrzxNFE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BMSmxDYptPZHGfudvcJmfttGp8uyo889tTatsQb6rhgoNRLEivgCrruNb3VRTLYxVJyQWyQreE445qYYBqmx5ok",
  "key1": "5sWwxt6Uqu7M2ziLFPEtJ9PnvRbpQnX31wPy5DtLkDiLT24yP98WPmG49J4ttzrqjYffJD5nTByv3G8eRRYGuK8h",
  "key2": "GNm2tizy7HywyDBzzjQLib4uAcwTs11nYa2gipXcJrQ7eEkx6n3vKDxsqL4n7eZB4WW42tcDr625nr9CFaLtpCk",
  "key3": "7cz7wVYCEfKi5YgGygPwQZPvupDjUziBVSmXjC52r22DsxcKLWYVo1Gr2fQg2X8dDNqcZaQwzED1C79ZuSmPScw",
  "key4": "3Yqaxgtk8rGYqAceLiXVoXpqtNqU9sUK45DUMb5GicVHvHWqEc2Xb93spKqejzSDrvvLA6cgwqDCjTLqQMFW5QLC",
  "key5": "5qFUaGCR1CFJaSSLvDNfhydAwjgMBSMQ3tw2hHEPPugH1HKJmie7VaKB2brfzPgsyjxvj9zAfcqX3QgYeUE9WTpS",
  "key6": "T42A3nWUErbTYVB9jeewMdApK8i6S6zcA6pYY9GxkXyVTPryFkfsjnzCAy9BPgCoCjtEx8XEiwJmP9tcxSFQarf",
  "key7": "2kFwWsVkubENbRxkQJ16RDhRyixdRVfStxpXYcXS1GBBvkJDkpF3G6y3i5jRuwFziwTF392FokgaGHEueWYi7V39",
  "key8": "5JqcJeoqotkobgdYHkEAG1TPwjwHLrZsSRjTMCPXfiCERRPpTSbLznZ5cS3aBijUmcK5dMoNYegQMhpTU1DUMm8M",
  "key9": "42iGM9ZnHNPweHeHkwV3Dt15J2AunbHSZnSYBq6nygLDma8CkSSQZHSNPswMh6ZmSCfnPwVjR8j6bYf1Z1ebhuLF",
  "key10": "3ZFM8sPpPDAo5HXFetCM5zHTNQUACd9fR6aSmazC9ZcRjfj2Atkc85YfYaWeyjtYYKzanywitYSCYYLPGNKapnHY",
  "key11": "2cDQkmf1HBNYZipiUyjSz1vR4PokvLWiszqBGbZn1EXpqaXpXtroN5EGVZy8XC57EvfsD4jKcJCLMUmwLeeXZcqL",
  "key12": "p3YUjKemMAbSRjn5vmCS7CiGXNiqnNbmksXnemyQoYoQGxGeJQ38Y51zrBdmDrTRL49yTBMBKzmseTJ4esMP2LG",
  "key13": "5ai11CACPjYakHMj3koHS4B568jE4rjxxWuAW8DPLnpJdYB9GudahnqcHYg1kzeZ38jm54nJJUQioX7PHfZv8VsH",
  "key14": "SQB3EosLP8wcVwdxtXrUBfumpquuTmprJ8Pvqse12no7p4uzzzBNsjWnC2TZVaonbzqzKNwTdj5DA88bTMNfugy",
  "key15": "62pDKz8MnWujnZvSSeR9FRAgLh3eQZiPB4S3gDKdFNKQJdJRBaVA7W3ezJ7x3c7mR1VDDCjjvGbYrmaZwHypijez",
  "key16": "3nbWYNME1bnvc5ujGJ1AT74ukfV3fJi7wPFaqTZyqv7Dahg2CuAK1fXnr1RnAhDSnayieRYrsdTXd8Ed1titF1Bu",
  "key17": "JQ5YBUXZseQmgEEGkrs4J6KZLFmcc36aQgbzYujnz3qia5LtpCWHUATgozk9RFjQuYTQJPXEj2sXfko1SyRN1Zt",
  "key18": "5MxXn1XR1uFcJkQERXzR1Ky3BQ5f7H1eqxZ8PSVEaT1W54EhpLkNimqDAG81iLrRGhcjmFFdP1EKPBsUattnAnX7",
  "key19": "2qtdTM2wAJP3VwztaPLJCgY31CoXssujsfdboMU9Nbg69cK2rxnehcr7XkrhsraRc6cX2C8GkEe5dL2F8DyfX82w",
  "key20": "2CR4CUo37ED7zhmiDUh11sN9CYXtxALz25nLVt9g8e6hNwaUVrEs9hoBLMH5HzaeJbyYYcVPwDneUhHnxEndD6mX",
  "key21": "4Z1zryweT6NgTBWdyh6bx14Y4XSfQPxm1k7V4iBgfGrfP6kHY6FcRYhWiR14FkkhphUNfu6fmdztE3qcoHy3o6tp",
  "key22": "2QHSLJTfiPK6NKm1Eo7dibYRonRsAqFqmrHXza3ta7uwkzk3omyNYB4WJgMqoCSMPVFvDqRn1F1qzDqFqoRNiCiu",
  "key23": "4BZYHz79TNZFuMxbN3SfPT7NnNZfTT6rqcZ29Qk63npYAAZHX96kb7SKLWXVeTRc7hzJvEH5kpUK1YAVidRf1uUE",
  "key24": "2ovjgQ982iqdXWEZdAizVxjBPGbYpUTk9JP44339Kxs7SK4kjLBbTTMy9GQM3fKRFA6JkZsZxRinGbhoGwu2Nw17",
  "key25": "3BaumqSp3k9Fgsco2ZMUc8zWPRqCxkTRoKTZi6pogi5dnPvPTcxf9TzatjLjwk5TC8VZJWmxB6doJsSYpJaf7zVe",
  "key26": "43MhrC21T8pa4XiYXeNM4i3Drcjb6aVhkfo6ENXa4C7fYNGvPMhzPd6Miu7N4XnkjzJzbx1Hewn8aj4rd8UTVGnN",
  "key27": "3o6VWJ2voQk3gbMewDPNcYNXMYuxpHCPAk1asCaoJsWPYZDBYAdSQdgDHSS5wQPmwSdaUZNV3sy3kERD7tk34AaG",
  "key28": "4UdTYBGMS8kKDwgqkv1whU4b69PBjBCM1nTbXWHpEwD6aShisFhCRFJAhJTKoxfht3Qds4NQis6tLXEBMu5FnFw3",
  "key29": "3wm4JftXC6cC2QaMKEARiQVXpAxKjUDnJzMtmF9iyzTd3opvPosJEgfWPkHiFgzJRK1dSs9jGMFUXupxz8kHGHZB",
  "key30": "5jsyisQJs7eGxgvW6Hayw5HRhUJPJzixH6ysvFbDM3vwWEoiMS62wHN1shX3rBzdyJPb3ENuZb3b93NHMhhEMhh4",
  "key31": "4edekmWvTmkQCVH2ggXoMBQeLn7GtncTarFwtGfks5awtAb7CRA4kegAhEMERFK3hsQbMhJHxuTFA4DjMdPedveZ",
  "key32": "579oqrnNxNgmj423mUzWKpZQTKXCXqcJxj55psc6wWXi1A7puWV3Mh1QwHc9FZPr7ASomCQV2xTezWrAaghXVTaV",
  "key33": "tGwHAjc7f6j7iMT95rGaXnygsbzfMNS4woHbMNs3NGZi3pwdkFzoLtACzAXJTbVobqX45cWLnTyC4wQV8pXMhQd",
  "key34": "D6JX4YzZC2zh247am2hAFfaLb3EKfFp3sQdBN5LYi9jq2Ti7Bqbxsw5sGo69caxfn27xKjDpZLBDt82UK6gm9EM",
  "key35": "297dx2TwHR1yPYPZystWVApmz1J5diVsTBDDCuHdN4SzBQQxdKXHt1oP7h2Q8gd1NLrVxpuQozt7G86mgtXLP8wg",
  "key36": "4AUizcBgcXUgHJoAs7ej3Nek9EdAJoRYfngmKHQw6tKzhgVtGy2m4MVi2tDodynt4DFmF2v2hgTCgHDjCeQcJZEW",
  "key37": "wkEpvPmHM43qDaqyNJdH2nizjACHkL3pMkJKMrxFrN89W44eQCNYUuuPvmLHrQAsoybSxkYvpJxTbp4CRjdJj4R",
  "key38": "yRB71mfqHqGdMBPdXg2JbTy867S1RmTeBprqABP7xDtExK5GLCj77j45J9CYuHMSr32TnorL5Vk5Uvxfqs6uBeU",
  "key39": "2q4EdiFUA8zuLYekAPqtfXsBWAUb5UnTYCpTHcrfadYfkNK69cCd2PthmtSStwG4kPtEF1fKEtssfiishozLwrVt",
  "key40": "HDn7PveDqCAsDMWKk3B2pNJ3MkJNEpsjrb5ZCAVFa1aGrNUrFC7ffZs3oV8wQN6bEiPwcH18UJcv4o2JEFGMmNt",
  "key41": "3UBn99mxzUc95gwFoaHpuE4FPHXr4E1wFNHj1ePoTxb7jngvmqYdWhW5Uo9KxRu7d9k392QVnYC8utbJz895NEkX",
  "key42": "4t1PsJiauYWTzjG5khuSzHJGSM7KQiaV2aoBG4eF8dcqcskwq2j6uMJDqS8uXSbE3SzqtxMB8uHZA8aWkJFwrb32",
  "key43": "5guozPPeiP5eQYVHu3vnhtq8bfSDg24z149Xr96XQZqwkRs5pGAbqkY8T3wrQYsP6cYt56zBrrEKqomC6xcxcQr4",
  "key44": "28uBYyGUptjFVXfQ4VniA9swZq38UAu1aZ2CmnRVe2gZRemVPzpqV19SiRLj65irLCZAvUAivHw2p9Yzh2YA42dE",
  "key45": "5MqyerKxS91WCBa3nf4Y84ysxVGZhZ8xqmFsrtsTMnmtobC4P6J4G4qmL96oe46xch3BAJsRbh9Sja2zpDR6HM9b",
  "key46": "2B5oHqko8tjjopaRma27fxVgTKAN6yrz7vb2e8VXv2m8skxXTqm5HVvYAHimdcCmXUed2TfuyC6xP6UxR5smzBwc",
  "key47": "53CByPA9vkP2n5X5MMEcqiGibNb4XjBzumD49BoUZ4b51FFtGazr7jBCrn2jHM1jCdRiSGSgCxmLYVRqtthYZ58L"
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
