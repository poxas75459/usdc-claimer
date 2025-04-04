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
    "NdyW9JRKEXfpY2GPbtMms7bQ8kcbtzCiuWTYErD6oJTzf7EfrG7ZKUmamgnbvHEGpF1Rb3i3AEM4HbwPeBt5MzD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hAymRLynFpuzS2usEsizxeAywdER4aoybxq9ZP3Xd1gjXBNJ8BJmMNv1ycibYB1sTVbhWukTfbgw2TmV9wAXhna",
  "key1": "5ti1GvxhrskboyTEweed8h3MUdbYb6D77QTEmtUD28Hud84ssgJPSTEjMDED2zXL9Eo6sCrACdLeSPRzUKjjUHDL",
  "key2": "e52EDVX1YcozehEoPrvviewbuFergA8ArugwDkvosd3aRox2vYPVUZXpj2qZpvCxhC7wHxW4WNg6VcteUxHcfn5",
  "key3": "2x56qrWrUz2uwNpeUVNUk4vGDWJ4efhytnMDKvA3USmpitdPUzGKayhuh8Mj1XYCiUK6CEDUNqpPYnqcfd2JcDyn",
  "key4": "52186jGHdyQSmby8AzjNzkhkurdx6EjZQu2894eivaLR3Gsfd8PwnA5MUEEEm4R5zVCRAhdU7tuV8CQvRsr8HQb9",
  "key5": "2Xrkro6uG3NkUVXU95X8FvfFNU6onhZUncvEgNZugXPeUaDhcnUQ4kWK4Z692rXp1jyT9ssTLKzEgfPAU5qg6x2d",
  "key6": "3WS7gYoVQBkE3pUSMnnLFwCfk2MHy6S1tq98pW96UmCAo1hzBEnA3XcTeMW3bCuYY75iiSgpe3ZsBF1v8MxuFWTJ",
  "key7": "4zrBSbQB9gFHCjZjBHzuR4AyD1H5kDfPoS5cnP3942J7Uuq2EKxQtQhcGHsAahkWih5Wvu6LD2dbiPQp6vzR5y1b",
  "key8": "nMywQciNykLxKio81k8QAcJniTAMZPFnVZnF2jnBC9qTMDD8jn1nkGi1omNzaxb7pziwBW8kXbznMCxPW1A8v2L",
  "key9": "4TdYqU4MRNrtSo8rw85aikHPSjkPS1FEjbpoCRwD6tDdHyTcQP7rmhX61RGBegvjCHCCKfaznUvDBUDgyEWt6mTS",
  "key10": "2vAykgqLcjGGzztkiC7E8FifbWKBoYffwF4zgmr5o6JvM9nEn3uwwbGfg77yWmQ9wBkkcB1qu5P8ZsAzVF39KqFT",
  "key11": "DiPLBqurb3MTBGGp86x5HrLTBaxpLhuFM94GcECxFHT49Kvqi7izGQbDiDQiPxrKnV8KwsiE9ouU6ws1CG2U5pv",
  "key12": "5knHmz9fzjbpoTQ16GLRLBVDG2RH5sQ1vreEoEnrVBHurqxqwpHHP5zVziKB9xVbRG7UGNjLG4Gsm5FHvUxz6TGj",
  "key13": "pAnQ6JpVPmDCqtQJJT6sNGsyoEiGmGtoGd6J7RywEDgfyjBVFxe2AtMZBagA5Z3DmE6vjNqieq6xh877i2AAR4B",
  "key14": "5Q8UZ2vsXuT5UAzCePgkFLey2eqWxUtqa8CyJxLmiuaNfDyokynK5hHHqFYrTo2ukER7EPGWUP8TmwS8xPfq3HLL",
  "key15": "67FiscGtAs91jyLLpHec5rsbQK1scHkV2zKgCsT4zhb6oRvd4tQV6wsJSRyz6vCRPrXov8Wf3e6Gxv1VWyMwAnaJ",
  "key16": "3NyStMxhH8GJGuxpsrn6DdBJLdg9iyn3oMJdUNHFPeWLvJqkpfphoppp1WSQzWsucKVCYtobuty1mgoBN7iEvF5C",
  "key17": "kejNXCdcRFa3xiGsXsUHrTY4KVFsZVBtNkLnYF3Qdg4RquduNM22T8wm73nsWoQRKcFpTczsbML3krqyxMsZxZN",
  "key18": "45W1mg4GeUnK1mRpeEYgmzvos2RYuFEaMf2z7VWfrF2Cu1LYo3U2UhpvzBpaftUofBnrS1SNjfwb84JG2szFvrr3",
  "key19": "5jyyRnQEB28isZwEGmV7PSk9TXQweVkPdjoZDbs5bp21HCxiVccE3rRjQcFWTW6H94peYujPLQgza3uoUS18MZyL",
  "key20": "3jo7tWJa41TXEzSPxbm59gWG95GcCKSbQcYVHohkBRBDZhubwqRrvuXeSxozD2mixfjMet9XP5GJvmPSiAsgwZh3",
  "key21": "4rtZfmsqoqtJ6EnKAkFcrapfDSEWLuwhTuRubaGD4pgJyy9MktPRWsFcSMu53YnnPmuEqk7GmBGZv6L7SUBz2759",
  "key22": "5ZppX1386LejfMTQUF5w9E8oQ1CcRKTTsezo1Wg8BZ4YU4QaELthEqG7HgvhcWLSXJ7yC5ZeN2yWQhxe2yrNfG4t",
  "key23": "4k8UJE2BAxkxn6dfEw8NauAzeeRsWyEZ8UoHs6TEAefLKBVLLSeUz9tQbd62FBw34TYsbRBYyqTBc2Pot1NN91Dc",
  "key24": "4LPKgG93xQjUztdjM1BqreHAZgkNr5N7yrit9FmC6F11QgZyhjjDpDB12upkYShGCMmz76Se8DbqxVByVg9VcyJL",
  "key25": "3Ln4uwU9G4DkZD9yEpFxZPzw7bFERBPSvBoGfHXfBBCwaqW3RsK92W3m9YswAaZKMU9gztD6zuSVgX8J3DZUohVN",
  "key26": "3Qr8R56oEezqZZdrC3BZWzfefjueyV9DWj9YE4dAUp3vApMpvcBj4yhFq34dYSbvwAUk8yJUEfuTFt6vZxaaqbT",
  "key27": "m5qW39dseF4GtxYHLJmiAPJ3C8hNZhx8ucKaMuzTmAgcgmVpRcZP83BAsBFWVHtY92Tbx31dSSLCuz1ESXgoBT4",
  "key28": "28i4WQb4B8LtTfF97NgtNVq16VqK6NFMWpnPazs95tMmmD1WDscYQyTNaPGDVzrBBkxgkp4QHVzfdnQJqPpY9Wpi",
  "key29": "22FvNjahZj2XKc79NtbDKZNEUXEdN2bm3sNteFFdjp1Z7M7FVR41UCYjHYhicTuNDTVSVbrvaxkGC5YZE2tQFd53",
  "key30": "25KGDrUsWT1KNFrUhSuCBX27cgTwGLBRXEPwZhkaoq91vhp91kRfAhGZsGXFcX8h56PX3Rfqj88nVhLcmcfEPQbo",
  "key31": "hLqXHnGZwMAnvB1K2vuzopN96FqK43pnkPXNktwyRSwCia5bv8v2JPxkwWZYLCKKgoNn6P9qWCNw8Fdg4o5BzKN",
  "key32": "3fqJFCNQkjeB2dU7eUfYVbw2gQ284LYPcdCBGyTPdJZEmfd4yp6UE6FJZdNmskDXjDnYkyDMEqXbrad7oqRoit6e",
  "key33": "5uum1LMW3cBgFK7qiZR8fqHeehuR8mGgLXtDSXo4mLEKpeebd2BUSR7GhTzRf5jbB4zjHdyf9u56wGUPfo7LQdBt",
  "key34": "5N9vTCxMuMH4KxydFGga7rkTQhmzke6RzyfAc1Z5Et8NH6m1FbSr9fMD1GoC6ZNb5JZnP8KkMQ6BSPiRRoM5Nfmf",
  "key35": "nqxGnU6hDthEZx7p2YmMj3VUheULdp5222WwMwh83YfpxMtJVjtzE6zLeuzUiwXuze7HpZazNEG2mB9H8Wpnobd"
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
