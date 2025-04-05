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
    "5hbyKYR55oi7Th4LnMa1PaJZC6GqZrngXNYzBscTQb5Z28yzna1pnQbp6vnC2fhEt8JD7G3AiWEHJwCDogg3FnJ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GSY7E8Mcgb6zHrDAkgxbEqFPm8n55DfZvhY8GqvsxpDao8LtYmmphBT9RpjEpejvcHZw2QLPV36EEAuKZhWu8qU",
  "key1": "35kuuLjZfWFdNMeGjVNcL4EssqCtgKibkyvjSfxNQBZ5nCUWLW3sT2VaEDZeX3CqFPGHGpd5xUFYW5EXMKdTgiMk",
  "key2": "2BmZmy7SYADWTv8AJhr2cYaGf7xfXxhWCKkBBw176i4uNhkahPmUp6yEYfUcQqS9Ek992dQSSVkZmjjjUqGx6hFh",
  "key3": "3hy9MY9omhyHjxzpYCdBcsMM4CuaNxcCyCLxfgsmrPDWTGL53GZnGqCV5zvhRTtaKtx9TM26qgtzJVzQS9rGooR",
  "key4": "RCPsfpTfCFXWk313dFpvocM57xrLZGp5sjmo9CSPUjbyxj62FeoQAxLgSCraKf9Mq6r4TAeUY4fBsTc6v81csUa",
  "key5": "fraGbbYUkKr72BT6U5pGicThjbnqQ2JUWM5tzgAdTLRNZsBumajYN8QW8n6hSynYMpR2cWGpNs6K9DyJ388et2v",
  "key6": "SiFh3Emzx7igkZ7JdQsiFD3Z1vv69b48ij3xurS6eotD3HJcsARbzZ2XPQqfGdcJM3x1vjf4FkAG3t2dJEwt7zk",
  "key7": "61VgfqERzpmwVmrmWSZBMh9HhzuRwgD14Nw8ny2N1CJtfq8eB5sSiVZap3iEjc63hKwCM1E8pUVXy8ybcf4YeAMY",
  "key8": "4UiWtBgyJpYqcTM4uK86ErRPgFDUwrUKaXL982BcVS2oFSapdAVBLKnTALnEhpDpMdGSXgGQ6bzq2exSryFA2Tc3",
  "key9": "51VxxjzthhZbDyetaCBK7LYACyC4KreeBLfRZCM52eGBL5tSw4C2GDY27nDkfhjoYTvQ8bYjyXwQcZbyQWhEuBp4",
  "key10": "pkpV9jJc1nvmMsjswd8UbAENeQ4TZBj5AQVBP4EsHij9nAMoVuoALonb67cEamZ24rWydvhF5LatNmEyE8HyDu7",
  "key11": "UakxEwJExj3AyptjKDpWanhLJkJLSLYj1Lofqp9m3viogu9FwVo4N5RWsKaLigFJLtX6zcPVCfWYtaoUoUqHM6Y",
  "key12": "34HYDt26ktUw2VPApV1h9GKA8dU4sGfgcx3qwiCeU8gpvMeruUeGhMhXBC4L7z59efc6k1H3Gtp6i2BhhegzLF2h",
  "key13": "5tH63XoA5RLng82HkWjRjWPfT7wK2SR4QpYvv2W2qNoWXv9J7LVp32cQqV1Nw72cr9NkQE7EJHBhMPrEXcoFdn9u",
  "key14": "5V5VC8Ro23tpXLaeCTFvTFaPi6QGt34Wd2YLencSvKABBcj36awRuuj84tP5q4ssUAJuGSS7g1ijp71p9bR2rc6L",
  "key15": "5V26huYmfPgLxPpoLJWzWsER9hQ6jP2FTwgeJkUN9WWzStCjDM13PCjqZKCzuMPi6wLEFCVLhso1KsVsnpSvjadW",
  "key16": "44iaUq7JuQ7B1cDtzP8mWmWRpHAmP1AtLWhZLDvH1B9RKSkEGV828ADmn46LtyLxcdh7JF2zuUfH6vWWFvJ1vnGx",
  "key17": "2aCF4VYUoq65WEm8a2uXs6duKW1NTqKDbJokgQcBH6aBsPBcWxjykx2Bv6Qfi5E95TpYKc9uRadxC4b9cUhe94tu",
  "key18": "2FcRr9i8tnoJJ4wbvtdPLZAkoDUeT4yU7M86BNEh63uEw77oxc5RVS7nQ9Z3eqzoTVX9Ga6GzXdQP3QQf4YvkYU5",
  "key19": "2W1i3SGiH7gVGXyrUft1FggZjDk5EXB1bWMu89V82jsv56h2ULXEAHXj96EcoqeUfVnti2N8VgjbW7G6jQpRn3Vj",
  "key20": "5RybH7SyfbFDFgnqC8GsSUNjWP1dKRUWYBXAv8RdbTTnodu6S67GY3Bu6wC5TfswSJjP58X8XN9jybXhskcesEGi",
  "key21": "46mk6R3obfmiNibSNTvGbXVwYrBr7Hufd9Zs4JYeG89eyqfKUtR8w1scazgmiUQeDa5RTDugCh25inmeucP8tD5Y",
  "key22": "5SCsTjiZNqCG8SvoCJQ6TiHxGUfprVBbnUTnDfazTx7CzUYtLuiFN8dnga7uaE4YYfLSVRU2o2eJep9usZJj6L8W",
  "key23": "zkyjdp61GiJt5qpNcKfi68HTsPqNTgPKG9W7p12K6bn2nwTP57oHqfQ7Kph6pgwRb1rPUExjBqS7asqJMy9mjKF",
  "key24": "2gYmNPevMxRBGZL1FcKbQP9ZDSvDVBnxBTsduh9pTz67tUMsjVRrPTkFvhVY6k85istSz8meGiY3XsbkPDjWAEZC",
  "key25": "22NHRdyqtvYyNQWqCZSCT2KfoNrV4B7G2JBnMmUgTGFPheGZsbiJ8o2uXtxVVFkkdcFrGW6W8oEWFVgAaWJb7Np3",
  "key26": "5PXGjva97ZwXFE4bjxh284bHQopwCdjTRrgKLUEr9hHXnJpVh8Xo2uFRTybsZL7NcGkqqaqpRwzGDcndCk5pWVmX",
  "key27": "7R5H8oxiQwMgSVn9HnNYLcFMrLtfE3Tmgw2ZaLxN12yYheWAckwTxvq3Qt6tVuBC4HYu93yovnCtchRniuoc87x",
  "key28": "7tvZsstrezbXWwTGNM3YoQu8BEopo9qgbY8FFYyQS6Ten9JUgQSJozUvWM56TXdZTnZdSFnaQmzvgrWjw5K69Fr",
  "key29": "5abrobPUN9jtRqrcAhF4D3P17tV2WXkqCW74Hz4aGCABXvrDfSjSb86bCcG5yQs8rTon6VwG4gFtvSzascQTfUoG",
  "key30": "YottCEFfUR5KuRAGboPjsfXyANa2ws8hsLzSjg1ccU1Riih6yJrvHihjeMDcJpQJ7hdBq2xadjs2mwmiMY4eXAn",
  "key31": "3PFfRgUXQwNnygE68MuEhbdbYK6pcKA2qSzQoAeSkQ8Tm2skpgULQuJomNLkpGdkoELHeBbpTGPPiHdnzz4DYpUH",
  "key32": "2Vd1cMjsEngWNdVMynvwDG9QE59jXW3niUffjeS8zhxBroVBxCaViufvPEXxz8yrXZj2TowsBEcUKNgQopHkJqsi",
  "key33": "5G63P2ktPSzPFrCK4FkXR73WwY8tdf9bdu5zpxE6ZtCF7g7JUq6ayCdeGRPLzWqiGrccR44koCHa5mNqYx2bf6yK",
  "key34": "3rNiXqN4Xs15o7Ko4fL8fp7Zjm42WYuhhBwXAAXRFXpchJT3eBLqzpTjRz9q83pYmbw7JEpYwnEYMGvG9pHy42Y",
  "key35": "3iqr3igTqEisRFCiUoUWCiipafAhzRYBRb4eukwZuy8DgQ5zHzrRRzJyusJYNRS6e4jKF4rptBPfyQGZLFtEAAU3",
  "key36": "4Ujpc4d1f68qRHZZexWQ5fdoCiW57rSoMF6XM2HmHFp9ECPLTc5264rUUkRpnMvHEkpbfCcgDmKv3nkSJH4NGT6p",
  "key37": "3njmPjWHfCyFLfGC2wch8X6AjeAR5arEVLJmK6HNRNfD1i8MdiYt6VFRcFNyzHc6CDgGdR5pJpaiWJxhty2n74Jj",
  "key38": "VDqwHtA2PZHAxhfXUyvGYGyEPTHcrRFVCiLfc9o4M2uzCZgNvU3kYXSs1Tdqd35E3FjNmsSGFsJ5jzjcuMBD8Yn",
  "key39": "2DZrZhhuRFi6t7QZxmPCTCHs7E7gQ5DQ4Nabp6AbPSD7p4kWsnWoM2jur9TyA27ZT2nRp5bMfgU1HBfZSGKGPPtp",
  "key40": "2V1LN46PX8LubVB3auXEn67F6PCNGP95dhbUwfMVvgAomD6yQuqEESLbuUr7KBg5ycNSnqJzPvbzXqQCpSuoVW18",
  "key41": "2bATqkbTCjzXMzzTreDD6dBzUm49sQ3yQGkknhAriEnR5RBRnDi4izALczBVHk2jDuyYFmZRjFTMezJRY9CmYoXc"
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
