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
    "5e1omt2MorErF9yUEvo9rMeozQbYyQKQEDwnXMGSThPDBYCXipRBJ2uWp1zByziL2v6PT453rW72mg96YzS2FZsq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cgUfWZcHJWrswTGiLQ7hG9dXyhirmnbe5cTRSK17hvffcsCTrx979tNgiACpio98BLjViqT249gY6py2akUBpXt",
  "key1": "2TKsgN6LopxK4VothrZFWR2w8NHKrb5r1X4wfhqnQwf67E4hrVrCgdsUTuYTNpfkDTXAq5q1cYySfKs9xiJMrFCy",
  "key2": "5FVKfVHxrfv2q8uK9ipgwsTzZo4rxMXxVVaPZCzo5h8oF6DL68QKMmgw84JcHS4ExV2b11cSyaRwZEK4WrjHdvjS",
  "key3": "2dcGwsqbpCFzZLNwHRPAMMhJ6kJf8uJk1SukVHiPgSGb4XCR7ERPWSQ92FVx97q8hYFYUrzaUVA4mifQqW7nLwm2",
  "key4": "4BudzfDreMYevkMvbsqpEttPRDMWQEoXrPsXkVTeFrvnDih4Y3t7p9CnFLhGqk9ZvGvTc5ryRfrMV4BUtKNsm4FZ",
  "key5": "2B9wQ3SZbi28qfRyvMiRC6aNREvhJf4bNQ8Lt5u1JPRY8kkrsV3j6zbCNxmx6AnmK4bKjHaTC5K4opzU15oCAMET",
  "key6": "44iBRAf59cXqW8z5iGgYChY9ShKNtr7mMB8KTx8vBKR4AvyiaC1vZtn3GndVoDshL8XKPT5DH8TtTqq8TeHUyNAn",
  "key7": "nuZxhaYxQYW9Er8XGfm7QiuMXq3iNhezhYFnEjyXTw3XF511NGiYdhFTMJ3Rnq4ZropwAj2Wwxaau3QBw3wkwdE",
  "key8": "2WuVAP64c942UKdLNYCh62Dh8XRdqbfhec36zYaMZKdqnkAG8eGZLSw7SFS2GmbnS8rwUM4K2aJjF8uniqCjrzez",
  "key9": "38qv64VD86KbH9Aakjswb42ninHEx5QLpTC7qETMPQQUmQymKuDiBmDFAWuSuRfjWgif7ckWNJs7CosmUhcJWL8H",
  "key10": "3T4gYAY3U5seN2YkVYQr9v13ypu7iCjG1BQeUYkr9Ezz6uvABpTwcX987WnLiPzKEr9eqWYKidSHzg29SE1bBAtc",
  "key11": "5YARApPLFRpu8PkYRpwDepFmxmRwwNCFKNxE8jk2WZhbS8cMWorz69GrA9qLM2icb7S5eAXiH2tuzLFQxSFKj2Hm",
  "key12": "Ty8XC57CWuqNyZCf7AE8SS1dDmGzTNLLdJXu8h3MaxXJyNxQr2wQto7LWxE5t5aGvRMyx3GNVk1T3fipYsNmiki",
  "key13": "5m2PJLq8fTB1jbQXs1khC7WiQBadtgVrT4jn6F4EcNmZichivorDxyPbZQg5uQrZL7AJPHgr4PtTLhjjuNQnQhor",
  "key14": "4CDyX2Fx5U5eUcVjNXd91aAoVoW6xxN9Nmxy6XV1kbofeNXBDanjWUwzKbYUHHDgWDHBcMLvW3kcuwNmRcAps9VJ",
  "key15": "4sQD9ditWeRgEFvHjPf4bFuzeS32QvJ6nYmnMy1ftt7AdhDq2vWdSoX18bMxXmHjjrYVV2rA4inLiC4Tit8BmNcC",
  "key16": "352Jk3Vy8tA2LzDqe8DM3eN9owZbPW2WDu5HmVWoYXYMEfZN9UZpwv68BM15RsG96jEwiqsMX95udds97ScFm2hH",
  "key17": "2imKJFAsKhgnvdis4rNamZMNK4Pc7ULokQgXanj1R1hJEJtzFMNx8NsttoH2fkhGAgdvDHCGtLsuN6rXCYqXQgLr",
  "key18": "34WYNh293euDmkGwegrzN6b7PpzRU56kj6LS9tEgCjcYFxPJENELPfh167pgsPxyfepGJFdJKSHQmTSqu9bVvrYD",
  "key19": "22gmdcM41JCeU6Bv1ZdDGenSHXGeypJqag7dVZFqTT2aioHj78VsweQ1mMCAuhBykCx5rNdr2Zf9pEpANUUCSYuR",
  "key20": "2r9CVV3wZDD1ETSTwxS6Y1mefowQguEyMozmME5yLB2bmjS4L914C9gum1sWr5tTiMheNVJX7MttMN86Z8qk2wAK",
  "key21": "KZshZqpWfzPK5nHELKcu1y8KfUiKFaZC6nhFXusihFrMGznHwRGX3WBVdtQ33tm2jPWjDaGfLPddmajcAC76us6",
  "key22": "5Va76X7g7p4n62TYadGMvGKMETdmcpo4yRqipCqGDBMWpP8EGrY3vTSQT31k2uhSSyAvfvgaKbgDtVGf9xwUk9x9",
  "key23": "457TT3WiajKxgAtnL1fBduBQxJCPhVBX1YDTBKjYoMfKbvPCrtjtpU1dwKQxLBDhWsZ19uwG9wkMG4LPT1SFZyKg",
  "key24": "84UccdAnuMgTTehmMnNmJVJ3Jc9aMwTUjuvjAFTRpmsaxVdDTptGoqt3KQkStBZH3vp2xQQQQVGGqwCw5w4CfLx",
  "key25": "4bi8shwFsVBNpSTWf9jymYcPTNpCrcfdoQfZnjrNLmuGQBa63HffgSSf7ZZGMqjyQ1FviJXcWcPBYUUffpeVxAsS",
  "key26": "vkM2wjbxPJJz9EARkq2xF1qjNT9Uc5rMCtaczRHfY6qjUUX3QcWc9n8Kb8c2uF6vEDYGbqqqa3CJyig7FGBFiY3",
  "key27": "35gThBEsydoWqLNMYDFcHu8eHzYGWER7uSCtwQPpqUiLBVfdb3hMj3todBAKGN1cW4UZE3okuTuk9MQX7Fn56MUj",
  "key28": "5UDAXozuYHoRWiSqAnNPSjA9hdz4M8Rs7JvogMhYHZaQJX4QRu98oMgFR81kcihJzAV44fWcjow5qJyc33zneAek",
  "key29": "5erubVVAHtsKvjAwn16jEzw5mZZFhJcVpXoseDmvcnscF7Yt7RTgZo1tPJbmTPAWfnaaHwHbzfEywRPBqK24W4cD",
  "key30": "4RLQodAXcF5VTyCtfUqQSuJ9kSJb3T9FRbPzqiMimS1mvJQyvjmRLDeqNw7UPegXnAycnhF4Bz5qhWqpKY4wUgYj",
  "key31": "4PATpSGWYEYapt6KMzu1QKyYQHqqiKJvWUX4WHReDKaasQ52W1xsYDckcydCR6DpHohsqhtEN1p19opwH4ctssxa",
  "key32": "2QTHraUgErToyhRMD8bCipUJqdbwpejx74rpa2zCWvv6UyHgdoPgPGM67d6MJzo7WBukMSY8Zcp7ZyB6ztaKbTFE",
  "key33": "5AA1sEfghEK5ozNKCydrALgcvqyaCSh5TU2BMKXrC56bqZD2SnaQKARofig1CjBCZAuDJPBVgZUWjEZSud8k6Ykr",
  "key34": "2koK7oDJ1vvdWjQ2Q29MHoSNPthxykNXABcJQ381MyM33SYzQcwPT9ugRJHa14QAjYgmhAcQxv5TSCA6Kz7HcXh4",
  "key35": "2W5FSYPdmwQUabqmw1ovRmwk8P1kY9nAWQhcG4wuHkHdSPaTDZMTBzdQ4Fpvh9DibDbVZhHpwFXAaSeow84tgtPt"
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
