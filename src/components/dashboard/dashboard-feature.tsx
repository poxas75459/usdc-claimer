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
    "5YikcrkYMGC2DzApSsLxsV4C8a7GEVCjDmy8Nb5foT3yg5mNiy9yUKji9DKHeSkCUD4V6mN7Nr84uhJqR2DJTZmd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SayvgPF3RiCDMDqBongUXmo1r47Jg66oYW2MoXLZN49Jceq7vyR8uqbLK4MxEBBKZGgzDbcJppjQHhCEBkMGTde",
  "key1": "5ZdJK9Fis4cfJjsasRc5pddbCX7Cm9tmYLKWWnELo3BMZb3e9ZP7iwmMk3zPieibpGcRAkpuDn7Dy7ah8HewYgds",
  "key2": "54gkBMWNrHZCRAkhXFSnqKpsXo54DJTJrdXvE9VP1hrgk8AZVF9SDWv8inicKZGPx4gXeXusECHvxBrzUQkcsiSL",
  "key3": "5sZs9yK3nFpgACtHDQwLxA4mtqpw5ftWcYZVDEqvUisYSFRB1s6Km5QcjKezRzfCBWcAQQ1Wt35bGdRT1e8BAqhQ",
  "key4": "4SsXzoN79jBfRD9REJdizFYCwaYHMhxpk1SS49odX4CG38KqwNcyyrRCXrspZiwZGxqoPqPBU4CPmJG78dcWZSq1",
  "key5": "5s7Ws8BCCCVkHkGm27pX9fksbmXSxeSvNLeAFGAKRKE3gTDLHLNKo7bTLdN1HVuDtravHctumdg6pxEiM8mAWKdF",
  "key6": "3b34cs3c4GEDqyJrWPdFYkGQabMkx6MeCyYLE2HYTnAz42Nt9RWtJAcGkDo74an4bHWrZcBUNHkykRFkD1EeQLAi",
  "key7": "2FyLyj5CQ8juo2DDAx7uG8FNCXMw6ZZMEvLQj2QSw6SkNzQDVfeYgSdospaEiGMDNu5hjpqXGiM6d6vcejjtUMSz",
  "key8": "5ro6xLMjQLw8dGCpZPVokfDjEEGnRiFxNcFogZE7pWPMcDCFTihrMwDmcwQjvXaGVxN4C1KTC6vm1KjjS3ZyyYne",
  "key9": "5QexBxFTSV28gPAAsj3K15Dtv2qgpyUbx9PL9Zeb2PW9byUYVjv2fNFCZaKLfYUF7VCodN3HZpMvLeJn5mzKg4ZD",
  "key10": "294Tn7gA2bE79tB3T6Rx9vyLe64EY3zsqkVFggQ6iEJGC5mDtgQjjjArnHLut2Dh2P4twZePnVps3eXL949Xnufq",
  "key11": "2zQUoqqjxvHLjNgW3fQNSjxMVJgEtSF4RKXBe4MesVpwqys8dwQznGKGeug2ARNCmGAfWcuquNKfNwjvh748Fd4r",
  "key12": "2ubXmdofTLWRqts5ta5ZtKeBNL7dKkfgBppaiJwMHYqSefJofJP2ckmQMsrrvH5qoLwtGmjUnsgzymFFu7hHjMLm",
  "key13": "bBmNpDin8ybcF3JS2M2RLXxDpq7quMHFywmMK2wfkXUsqKJr4YyCoKLa5dkQebKXB9UiTgKWVm9RVxzQtv4swci",
  "key14": "2LNSnXySWWeHNrTo5HD8TFiAQNwGfgH2ehZ67Q23oMek8kKopuQeTRHhHguV39UrorDKTxDU6nBd646tpipC1R6G",
  "key15": "3Ws9XNT8Cq4yXQoTDHroy8uERsCs88bhTU5Xfpr81tT5HcRsMpAQ31Z7srdo21zCGNafTRauEGkweZ6djbA5Po1e",
  "key16": "jpfRcwT6ViYVMxVMNoDFKSc1kWwdHKbYZ4wGvjDk1wMzaW24Yf77noCfJrKSh8YsxUKEUkgKtm6wKKh3sn3NApL",
  "key17": "5Amds5FHGnvSbAegzhwHAPV11XKDCE8hTJkgRUGh73RmW9nJKTG7WBCrvvcTugpNw98bfE2oogcziuTAtBceLDM4",
  "key18": "34bTkmmXbbwm194PkCciC4c3Auc97ipU3FumPmj5qWhNZvDyeroNJrcafj5ckfWFXqPckB2JD8eVw3934Au4zTbK",
  "key19": "3Ze5uJUMZV9XNj8LRi7SfoGoBPAcy8D7R1WfuE6gtxbQPEvYz72dtWCtRTo8ELGqQQQfxWTvrGXhSLCktppR2m82",
  "key20": "5mZJDxxZCWKArFC4nh7YXCUvrp95AJoq9Su8qcJMvSG62Ejy3m2nGtygpxK3dhZhfzcnhB5KmvEscHA7Q4RLH65U",
  "key21": "412CAQ8qzcBn7TJMd9xZ8wknRGZoZNVbJabGRvJHAdTo8nRvTXbdALPDhkMmcKYgkRBXkVH9AeRG8BHQAs52jX2E",
  "key22": "5FPKQNMQRzHv9G8jVaaMMbMoMi3oceNzxwb6UV2xHiRP8595SCMRgw9TnH1GqYcY6QxnWt8XJQbgMnMs9F4QUSN6",
  "key23": "2s3uWqgcy5QKroNScmvJBmCqzHTJ9TDwx4kveaXM6gvAcysuyRnz1qSrtnA1ZYAhJGoWGmz4kHiAt5Sak56pmxgo",
  "key24": "4RSjAUpZwanKsfXTtCJikQF9pcW6Sn41T3MJEi6AW1TbuVRQq4jBUAue33Cz3rq5n2NaBQH1b3PeYjZCDG6PRyh9",
  "key25": "4D7qtW6aq4GdFpcs9EGRdJXmmB1jv8Lk6df7jEQ76L3dCxi6gYNdhtBWY9YLJW6NMmujqvxXXqLUNLmcqsPnAFTD",
  "key26": "2i8bVStoVNotPhzV92DcNeU2e6oYQpwwBsLDsZrroFRQgbZxeM5sZK8AnU1SAYLRmLsmGneVA3U16wjkgbXrpWhs",
  "key27": "4246VfF53yc9wYLNUH4jvXcVqpdc1qqv6KWKHp577HVQ3XaCQ4wLQR93bNr3LvDmFmhdXwNwGrwBCr2qdVV815pu",
  "key28": "3LZo8D3VLGt2hzLukPriapoJDABkBwm6VtDzjtCTi5NByHdH91Xg7yn6ehKfPoZR8irehhyLgYHSKAfR7LhNNELP",
  "key29": "2b7n3T7jDpsi8T23E6nSfzJW8voG48VJP7GP2s3fdH5KpzvCAzM2bgD8muBSJ4SiqHH7NtmhmVLW3X2jWBTHfKv8",
  "key30": "4QsN7QgG4HZBZVYQHHLpu26hdVF172HoQcDHe2JuF1x7XSGQzjQiSVmnDgVmwVsgdkjpqtggQLX9D31CdJmLjvgo",
  "key31": "Z2oHh84XgBFSNZGk4K6XzhWKtbujczGNf8CN3HnAmhhEK3HvhphKQ3Qp93TYeQQwb3oXegYCKaJtDgT1TJ1pK58",
  "key32": "4wWJDytbNneGibwqe3NA5K4NQqtBoyQmMiTZbaCwD2w4LTvn99nQtDPEEp3WPQpbkhQPxQWRkDCHozjVAdeE4Sep",
  "key33": "4SvqYdff9FavqCPVJRFTG97E43scCf8heax9hAH6aqGhy3QbVJB9q9HnQVADxPjiRWeuE91yz5UrxDF4p556wtqo",
  "key34": "3wbAGhrFNMtckdoKZehjSscyDEfSmAS1KxUhzpMJe3TPzEkgXjvK9AAKf5BgPFhqnsYNBHsQDu86nnseMwxxSCSm",
  "key35": "47p1csXo3cMXTcLrTENpYPrFGhbSKH8Y1FXhegEg37ZzeQvvHuViLVL4SK1ZTu7pJUM4SSgLoRyx4fK6jRWXHpUU",
  "key36": "3jN4cZXkcamxBxUFewnVzsGx2RMwjH6kTYr2nwzGuAB5tyy3DdtPmimnkgU1FzVRYu44UXraxEu1WzBUManj52X4",
  "key37": "Y6ndsorTC3trJXwDhTqDvTecamaFcswt8jckws2WUWQ7rdxrqqzBBG5d2e1WWqYgnjWuPeLhdgYB1oBLqAcRKHC",
  "key38": "23GdYVNq6hRDCRdZdQ4jr8PjKXo9uVuxSSJvqKU2iKgpJTanVGQr4f3Y7ii4jFc8tT5xY3HZzrMHeDGoNM5fPYqF",
  "key39": "3Qoib8MQKCdJjivhS7BSqW5asg2aPyZRtxtDTUmMgQZ8fXSoyhFUvyiqHXJWEewMh6p1D3fEeqhttntpJL2TkNmX",
  "key40": "5Ubog9e4aYUARMm2x5VKZdiW3BUZhxi1Rivxc9VZz6XQ4eoPEN4vBiUY42C4v4aHFhafPxsycYinMdhCCoZGkJQy",
  "key41": "5qXbC5DnhaXewUf9PaziRCCeWj9zuAY1CjTBEisazEUUeP3BzPRV7CES9y96dkXfDiWshWjd7Bq2L5wnxU2ZVE7X",
  "key42": "5stiMZwK3VHiySAjEBgHNPsBQFpo2re9bVRvzqs3ttoawMbqcHgCdoQqfdGJmfaDm5EGYNAyRX33fQLEGWR84azV"
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
