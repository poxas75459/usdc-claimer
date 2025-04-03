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
    "5opS2AeSMkMsHET8ziBdRh9JZF4GtabBYXJyeqUVfstUzvv7A4udSHpFQr3P8B9jsKa4fen7PYuBiwBUmLNGfFEB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d6VGQQRNBUpcvZ7RQh75ohoUaa2WKqogGEDxKJP1KpDBdns5RNYw5bipXXwH5DjMTLpUqR41TLgw3SwwuY4bTG2",
  "key1": "4pRgT3XAnZV9LmQLjJ6JHYacrxzBQJ1ubHTUdSywyb6Fpedfu2CMTMWktMoFAMLXkTzGKNJ9xbEX28dTGMrZomJw",
  "key2": "4BvGnZzJifGCeqP18Eh8R1Gfy3RpUqnVzFBno9RxmM9YMqMn95ev1NtRZY6yEF6EvaDsa5KNsGZiu17yQQFzHLgT",
  "key3": "3NQ83kLsTZBHwLxX4EEZGAkAzMsgjhGE9EJowrnov7iTgdLgZR7e4T9WLiYKcZum5276X7s8UJpEQDfqknw1VFAF",
  "key4": "2mqtTzneGEnL4drsS6CCXR7UWeRCetkrwnRBCXjkTG1GT1HrXvkE1aKaRk36hX6hoaE66iadNJX9DSXrs7ikWbJx",
  "key5": "45XW8UjR36AGrngmUmw2h3LST1iMvEyqWpaywm92D7iHEyESnpUuHT1s8okc44j3eaftWwqUyQKkb8cnytp5YXp7",
  "key6": "pq7PmpN3tK8Gw2bk8hHuUT8VJXM2FzWLYRZRXzwREUiAZnGRrB4XjWaVqVu9VJRFyR55yYagojJj6J8PCorcKx3",
  "key7": "QBMHkFPhAEmBVnTC8Nqgc7kQWUnXQXgmGRAyS2R8nJdvUjWbz6dHu3B2eQHqopFSiBURP8EAMgesa95xXtujR9g",
  "key8": "5FM2z7KJRVguWCa3Lk2V8DpFcuF6HnEAZTPaNHJma8WFyJDxkUMeTKj69Lk4hwY64sdobyEKdxwyftrqXBSUgpSw",
  "key9": "PN7QHL1addegAiPvZD2bUL3yyEEoYTdrLRLSCncWuUsKCr9c21VH4r7F2Jz8VjU2hVZ1pNtmcntC5kdqdPCTaYE",
  "key10": "NtXipxGU8rgNYsKrj4k1Bd8C3Y1nnCT7GiXbYwjGPr4c7DKyj2DoYeWT2QFPrV1WmA3b6WuqntsQHxEzrx8ASrP",
  "key11": "hC1ygwJab5sTBCtM5QV3n6S6eRtu5NBubibFvRp4xmkE5NudNnRGUGdCKtQqSsFxi5u19YPCJthx8DdphASYftf",
  "key12": "4p2L2ydCqom4kvpfUD7PEDRTM3jhGs4CDHivuUR3XyPk8zNVBFYDMxgd98bXXC8hn8q5LzQtCs86hv42qjarAnr4",
  "key13": "57toftHrjvejhZ2nZLoWTEUVfx3uwQfUCHFf71tRUnfnouV29NPgaLePZnrrV7yHTp8mvsd4N6nN153B8F7KPc4k",
  "key14": "4ey7GD1cvSfZ5SxbvybAZXmSak9uZTDKTG8AKuogz3rS6nRvA6e9f59NTkhKYFkzk2U1royAqYNHAcpSTGnHtWrj",
  "key15": "4M8x7yhnsywZkAPnraqQ1q5gL8ZwTxcFPiAVSQoBMAnu9vZiKyDLeFFBKu6RAWUxWdVMPEg7sBf2P1Wex36zZXyo",
  "key16": "2qB3wUCYb6sr2nVY7whYkjC3hVnia1x7CHkAPozRAjrMGvSNHexRzMp46GXvwE3JmNpcwkeEHaH8QgDKNh7rVst5",
  "key17": "486stYRyqhPMENzW3iFex1qVYbAD5sm6u5pLwqCibJCgQkPeDubMFVhuKtbUhvfG2kWf5KL1JXXBHt4dUYbHpvx8",
  "key18": "soakEkHkxHNNFNkdaSLgxC7vqw3wYJN9UAZaKNv4M9AbuikXV11YPAFtsGUaNPWK296xPnQEC92CQsDCXWmu9Nn",
  "key19": "5vWXMJUKAoBti4UEnNj1u7ancKSGBG3aUBjPHGN3h4xi9VkG8pi4vufSqwS8KasceerUKCNbt8NguH9K1ukcgDF7",
  "key20": "2aCD2MpdjPSo3eJfGbF991h3pJzn137ZaEKbGJMzT979eiAkAtcRXHQzFEWMW1adrht3uMkPtn9zYQjryx6GU627",
  "key21": "4XHmshVavhBmZHoLuLNSeTYwDp4UYQ4ZpgQ5tFs3ri467AtbLtUPmaw62cV1ZFzeUXRMcDCWyAoqdw2VF46UGT59",
  "key22": "4ANntUxBz8W1jXY99GMRqVrkATbsREhtBqNvTnujppvAkU8Mq3wob3ibzxCwgK4KXPL9e65HWqurpHVgkYWhsQJ6",
  "key23": "mnKBpfuatRUBiS591eWhhDEeTAfbPf76tmLFxwsC2TQZinUgQWU2Y4jSRhXSc9vjvqdQ41Vaa2ENDPCpX3Q3rL7",
  "key24": "5CX9uHzeKjsd8jUsnQGfVzRtRRimzu6NvuyixN7ujegSiyYpAstPwaCHu8NNcJhUm7vVz4rdH7yzuGraYZZdcHJr",
  "key25": "Z4hhLYGvwbppbGpo5tkyiPFL5bREkDV9CqFZvMayMeiGQ4hbVNSXbNUd58ud8pY79wDrQqxfxGhV9TsBmgXRjSS",
  "key26": "Ebmjb1MRTHTHsquffWhSTukXsEPZSV83QxL2jUJjN4ZvZLNDz4zk6eSobf4mToPt8ih1FBd1Dd7NJ4Hn7Keu61z",
  "key27": "2N48dCU4VAazYrfch3r5EnCez2XTpmjd1vZuuesLrX5rC5Z8scV4EK9ohbmJCZ3UJqdA4UAQ5tfcRGZV5Ce9HHAi",
  "key28": "Uefrs74Nm9ezxzTRpwxrVYdR1BGtNDSY5mMqxooeYBbLNpySiDMDPSdB3hR8n95VXfUQni4TtrEVkbogSkouwof",
  "key29": "VBe2SdWKLLU66KkaCWptfrMVGPJjc1k5gdZ7xnjWqusg1mxq415TtYbh8BAPivMvvNDhxmNqJnXYnDbPbERu5Ff",
  "key30": "36zuSZnJLmM1RsLRJngL883GNPUoDUPhBoevXayktSgAuMW3UNTc3NLVwKSrq2nLDEzmsceJL3qneFeoHbhnsqBi",
  "key31": "24qEcUvQTgcocv7CbEJ61L1iYDtwn2K1xSJVvCmLr5A5v1bpPFee72mPpt8WpQH5u9eV3MR4JiG99tEHp9C5XD9M"
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
