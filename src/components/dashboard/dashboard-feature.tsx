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
    "5v7whfQTumNhK3cbJUBnG3DKSGKJrFFrCv9kA6VeeL1RiDVYupwGdZvWGBupjaiQPbEUKTa8j9yguvNBjBq1CMKS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZW7v3znHoGX6JX1KXPP99iGYHdcs3Pi7BwUsBNmaBUe3zwzApoE8xLhKMyAXGNzaSBYGK9ZqXTbSC4emQquDPKM",
  "key1": "2Rxs3ZA4gHXBUZ7YbErsJ7bHQLWEaiGJtt1J7fecxw1bhcPfTVB7K3PLTqFK7yRwxCmHYxwVPLJMWER2DzoYhwgJ",
  "key2": "2k3ChQZwJrZE7UVBqC5gi5pbnJvkpn7SZyoWXVLCahuCsQ5iGrdMFm6HkvPxkJcVXdZ6iXY3cbuuUdqiMGhz78Fw",
  "key3": "QSVVwYWSkyStCd5bsGSddVJGFysCCcVHGF88ookNQEDdYWK98AvsUkS9mcN6JeawNqR92mJtN8XvQ2Dvp8sb17A",
  "key4": "97kAUjoShA9aQauH8dSVGxzCZ4fNNM6NKwP7PC6dwPKQFQ5SjisuEEKAdQuPxdR49a25MDdAzKUTL7MYTBVxybo",
  "key5": "2HZkbkUL7hDFxdcSLTobHRpwrT6TxaFhnpBr9TRC68EfZi2m6gLKEkrUHqppkMF69cF6KCxftWczmAdaYRjCxD2r",
  "key6": "3P1YWqsjqYuvYc6LNPeLiXnXY7rJZSxFWKfVvB3Q26ym2Q6rBebL6VkcVAFmWKJ71Bv6moPvZNSHt6jey5daL72L",
  "key7": "3yPQHribC5syAkdSXiEd6sowCB1o9sMhY1apJem4rSau6hhDkoZkwnwQes8Ff6FGkJF8HZo5rP1kDEtCuinwxSyR",
  "key8": "8ar9wTpBB441ACsDkQiFrFRdTzXKvsVY6aRMCYqB6anbRzZkmBfRvKYMC4ECHkanQTCCbgpVm1Q9xDqggDvZYEc",
  "key9": "42RTqngpj9q5XqaxMKMM38yzT4Tv2GvaW2hUWZGhxsohftf8cYxPmxPDguugnE3DAJRCurGxUg1679UFV2Cjqgn1",
  "key10": "5SssGLA4UZuWJrkurcM6HxrmAxiGuwRVdtDFx1RdMfSRRWpqR7yJdFjA7Mgm3fvq7UtuGZk3V2Kwi5ZEpAePyqaH",
  "key11": "TMu2wHBoWBhrQBCKT8HVxA2KJE4kkKufj1EPMpp3PefgEd7VDfZJa2sVsKC64KoXWnAPZbAthmhj1bo2zA6duvn",
  "key12": "wHP4UpqEpbW9NuzUNdsyXyxchfG4D4z6TLeDCQJitg5LQcoNGtPkaz275iJA3bzshSVs6yusoKdVJU1VpBiKWB5",
  "key13": "tEKZetRVMgxSVW4q4h54LroSdKaxyANt3YaudCjpJcST55CFGP3MegnZGwziXDGdiYXbRQbHhUU5YkHXdPvwU5N",
  "key14": "2H7vvF9ZmW5r2cyTsP8FWWiNi2DAyqNdKJKszbG5Tm9sSAtYs3cbnxUNWtL4AwCmh4i2ynd98pkpgBe9KWufA3RR",
  "key15": "57jNMWsXryAvZUGDwoAWm9Wh3UDXsF52uwbKeXh3miB4pUDmWP9x8dNKPzZffUngF3aLySvTKLkEinuJ9zPNts2Q",
  "key16": "24nEbeM354pdXovXFy44sfFCDEJjBfvng1y5QHPEAjc1s52H5WV3HT9B1pd4Skar3rn7A434jnHMRxD78ZBq4tdv",
  "key17": "s2bJC2nQBNqvbeHCx97B8Ty2ux7zw4fq63SyPkhkmZRDgdNg8xpcWogWmfAf7CW9t7qqyTsQtG6cNkhLVLigaUg",
  "key18": "5LbuR6qAfHvTgg5GLf9gRQu1iasw5W8om1Hqso6Buw1sF4UxXrbXJB4vhSxT8L3zb5q4aqq3Pr4Lc8MvtocnDKMD",
  "key19": "4AP5tZ9WrmZ1vGDn9xMH54V6SYHFzd5xC9Zo9fdESsjvBN9SKvkxMyH5hZXML7FQDbuB5LrbNdfzEcR7hRVowx1t",
  "key20": "5rfoC5QAevF5LG1KAAhwUi6K7fG9ErXecdVMB2o47PbS7YvKMkhFnuEnxSpY744mpZYKFSDJGXumdomTA4C2MK8R",
  "key21": "pizYAbHtUdJjZgn1UA2L4R7eQAB7kv5zUjjP6bxEkbXKejZSMYxsgd8hNmn5BgjYYXwrtFz6TmYMYJ811QYih19",
  "key22": "jXx6BDgptByWBn7Q5tDhdqmeeYjVYykpyNXbqzgYHSHPzquDC2HpX2fUfKpQJaKd7xRtVeCtfQ7Hg2wNqa539xn",
  "key23": "4SRc6scP3hka5MPtfes4kd7zDR2rEF19UjmFuRG2eHFddbYHjDegsoGbU3vMvMEynUTZjBJVuwyzAyAeETevMmfX",
  "key24": "2Hehw2oxMUaVezruA4YeCQtQqF1xXKzoViEaA1t5K888ZH4uErMRZyTNwA63DNbGF68Gvz5bKhMucZXGvv6sXoo8",
  "key25": "4LmiUbD4GXMxeKdZfk9dJk6AdxHeHKLdb3GsdBHZX4nYLwfMMqvxGo361ZzH62YafHEDTD4ECwM79zTmYRf9N15C",
  "key26": "3tFU7svCMXHmpyAkNy9YKeDCLvMjhACmkQVqMCjFkLEBZLzkbLkaDGthsCdpYFDxZcALaLuivscafydqa2oNh3vF",
  "key27": "MJvphqF9bKrg2ukASZJnkBc2QjM1ycb1n4yrBQA8xVKWknfJvpCFXpvNJyePLCtjigrWszurvm5k3n3NwJW8J9P",
  "key28": "2wqhKCXtLnN2tarKedPCBEqXWi2VufEhS3enZhnKrkxWZdd6Dyko2je8TSX3w57iCvqDSrFEN7Z8UPoebgdJx5BQ",
  "key29": "48aRjbZV5yM7RyKPMeQZYHo6XcGPTDAQFn4xKkhkkA6nYbuYXupgy8qgP3DCW5Dp4Eq3N3KYnMqWK3boFm8dZrPP",
  "key30": "37yPo4oUdJWRKnw8bdZQ1iEpnwUiebpfc9ozzCs8sVKh34MQ1Wg2ZsCTXWMBQa8iME7JvF3pM8tMFtyuxWZNg53M",
  "key31": "4WxzvEQcJupoNyPp9JLm1pNm8zdEPBaPx7P45zsYZmo2dz3iuUFWgkv8Mj5ZqwKpJDvaPHEgD728x4HeBg9VmpBR",
  "key32": "4ffNWDQKgN5rUij9dbbS8L9AXFt4SFEsKQ2uBKQ5wjsxQJvC5LUeu97Jogt1usDC8Eoujw67iBSTYcPDNUVFob5S",
  "key33": "3ZxJMu81yUwanpAN3BzXeBQLeaCqQrhV4Vba6PphwMk1QNMsTNKFojYC9rZkAZUgjFdEQaTpXpJFo3bkMDctzbry",
  "key34": "5Q9CMZu8LVHCR3X5bwtRSkoCFZ2Rg85rRpA59757gdzdG8K7CEuraAhXeHHHsm7EfFdjG7YfAMsGG2PbqBs3iBeq",
  "key35": "5yDiQWqUJ7zs5XBNe1LMhE3dXyvHc9reyLRqEHbNqAxuKudVBbKeKf7W7n9s6UgNZpZ9AjGvb6Bt9JMjpiR3qjNX",
  "key36": "4fzXyD9Ww6JFjrR7NMVo4YH7kwT4AzvA34tzLQmZ919DHyzgHuhWJgw7hCkHiYznjREisD9w3Xxeph9DddqrkUi1",
  "key37": "2foCA5fxmF2N3QY6MQ8PgZzGK5uuEbj6UJEu8LdTCUwH7h78yp73PrnLL8LpmJbhhzKQ9ZB1jSKBFKRJrdfu5sEA",
  "key38": "293W9UP7Mp74hEh2hxCLQ4GhBhh2zAPf5hEpP6MKoZei3v7CLNjYmQ6Qzs3EbDJUh5QAtdz6R4Y4CqRSEZSGxXRZ",
  "key39": "5ZGQFCyPbjnv8JPujJMKb7wLtzvWd61UtgdZkAqDJQ9gpdHwokhgmCLqP6A3WKXo19yNh3BxxHQHakt6NPAAHwEU",
  "key40": "2VAqrjYz7t8ZH2QKrh23kxce7Nquymn62Qrkr67Uq489UpCxmyXuScW4K15aM8VLUePdoicBCAWKhxBkyZ6YfxZz",
  "key41": "3LxNqzpxZrgjbdrvtQBWj3WtLMhHaaghCU35Bc1K4mhz88zyD2kus1cGUQaTycfJe18KB5XygUhsxKGHBsayyQxR",
  "key42": "3ZsH8q45pa1xWGyju7Emgovs8L1VFGYUf5Li1GVfKjRvMfmqNg9g2ciVCtqLx8o4gsFjxu37Ui4P8zLsRCdNSiwu",
  "key43": "129GhExUv7Y9eYMFo4gstLmvznM9V9zFB4ndtS8DahkAinX6kAzq62g9wsqFLRb4HiTvsPoAcKNvQYhdASmYTMUh",
  "key44": "5A4sU2iW82iXJXe9SMJtNFFxPddRgvusM1djRk7s3UwYBVrTPx3NAVfeNphcmYCoiBjE15WAcsiXw9v4GmqdS9t3",
  "key45": "52t68VZe2KT8hF4LqRBKZ2ZsixPM4tjf6aRr8hM1Z5St7wf3bZ3NpytWqMVGXZLxzx7pTucLcfFQNriayhcHyDF4",
  "key46": "ArUhY2vN8a7vLDP9oWxUcRkn5bSVZXRqf7biKbTodMzBazodt7eSwZVC3hm2Aykbv9LXhfyk4VZTAPnMjRtu2Rk",
  "key47": "BNpzSp7B5ENHD6XgiYAQJeGYuMi4VnbGV2bApzr2fLzFa8QTR1irK69Xifq6rtA3KNdVESRiCTnjeyVejEQqp7t",
  "key48": "5z4etBTeUyeFz9fPAyfCwkoTnbQWwtjsvGzVmLCvfKjH9z9KPRLrosYi3UmWKBHDuWoq2xRz1eTi1BbYeQeNPjkr",
  "key49": "4eiVgVQZw7EQ6w817vASpAmQdFpX2k7mHj4zuYqZKiSgwRA9ZbDxb4tpqRkEtzZsxxPCaAraSm3Ku1rH1VcbmDJU"
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
