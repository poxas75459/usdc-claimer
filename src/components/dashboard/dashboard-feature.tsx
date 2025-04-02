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
    "2w6AJ2emadnTHw6oTTMo6AcE6TmCzC6RhEMMsXzdpcJBRescrSM1hy8wBdAhW1jhynYtYL1z7fXcA3LpwLzMZh2B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pVuJTxQNWHSnToLUFNvZSbLxUBEEVVUqX8MEZMXYbFRY2G6Jsf15fbte2XLj9FSnGnaMzCxXPobYrJni9kZPxRu",
  "key1": "3uXK1kzjfSuvuG6PT42vKVRa2yTisx1EDGWoV2BFDpHHLvUDJwbnyUR7mKLTT1DowRS9oZMuRjCLGj67G4jF9eWe",
  "key2": "4wTmnit5NtHwAcHiR6qiZnk3CGppZKp9q4KuBqnMAvvXyUQEE9UcNH7nQcY9XD1caMEhU3c28neMdCZ5WncF6btE",
  "key3": "3RJDPhJ9yoypapPCyv8nntBGgqkRJ3pb33Px2vNFWneq7APTAc8ySZxXYFxAkfDLeBi7sKCSyjbPwcHBh6GhF5Zc",
  "key4": "2MsZAJxWm9VptdbPx35JFUB68Fw3ixd8tq2EJwcqdLp7FRMKdnSyKDmzcah7zKcixbt1VmVozExMs1oT68qYFY4P",
  "key5": "5P6W8r6Qevjt45Q1Pnm4VMPKksbXsFLogeg5GWB1iuLaWXftVWV6Bh7j4XLbfFT53peTr8SzcABymmS7G3pBrx9s",
  "key6": "5b7bJU5Y6VKqTaWfQMTWB7H3hcD4j4YWpZziQxhLDXQKUE5pVjbaxKthHw1xjrERkyLhb2idHWzT6rBdkRgEYLQZ",
  "key7": "4HWS3q2vYztSHdiqaJhtk5KUm2qPJyHUev7SYLKqsFPzstn4gLuAPRN91ZQDBgxT32YtXGUYKtzabuKqUPeuXJWa",
  "key8": "kcazhmf2STns5ZWv4CdrJcobswN1pLAFSJyEeTqcy4n9p6tRSNYpEmdnudamrFSncosGBBrTZNQ2SQqdvisF6p9",
  "key9": "3YBPupJnah2Zf8EZx9JSCmGN6cydnmnZnUSVjG143opPEFWFdQjHCMTKqWfMeccw72nZndgVVTU7L1iteq8AKh4s",
  "key10": "E8TfwsfavhVyJ2aFdApP3w7jVf1kc5AMbdV3yst1B2a3g7zjgK77D54KcusLKjUAFDUS1bBddweK5grZLXf1CHi",
  "key11": "2wQu5JEnpqA6Q2CozZhs2cYWWNG9i9DVNK2DQ6dNBmtQZh8KNSZtXX9SZEV9fuPT9Sq2Eu3j3NRfmnx4HcPd1cW4",
  "key12": "38jguuvYkfmNEgLMUsCmbWSh1yXRtJL6sXEMDZKQr8nYiHCUUQygf5pHYWYLgNYZChPJGF9hCie9DjjECQQAxsPd",
  "key13": "5Se4KkMdomRDyYmSoscB6mhJS6kdkHfxVs9DRsj7QzaTJptXGRaFr5vQ8hcUCLGq5y633YajCWraWfaeZnsFB3bK",
  "key14": "2itmKVzWNgnKLiNPnFgnqzcypXdVaYEAGNj992ry7gMimmRUVWsryYivNd8Dj6AcHCYAwKr2iwrq44c2ycmaVQ9f",
  "key15": "4XTXKURnH5AdCXs8VUJiLGWPvfjBXabipiQ3M334oX4V1tXwmyEenaVFRVwmrbuS3Vn8tvpF5jhejawZ9xZvJNCg",
  "key16": "2YvnFbrkDzjwMJJ3yt8SWAp5596RWyJTSJTP9uU5PHsvuzaa6e5H2zSH6fvUqUToY1VYXAnmQjjYpdSYLUGnMzbn",
  "key17": "4SCnKiE5DR1Ur7JvJAYTmGRn9RH8yoetiwbx8Ezg3HhdzReHANzb99638pFqAs4RRSwTkkNSxzwcF4b6ybY922qN",
  "key18": "2kTdnb5Pamwwds8ZvcbUfm2LcctmQSH298MSJfgpBEi2EH3LUEyyqxBmJxDAPtZs6u8c5Yjq8WDs4HcWk5qRtYjs",
  "key19": "G6knr7i4TxNgBCbyNg8REnM2haDo8SbMKhPa5kTMPW8LEEUBaXT42SmD5AgoyGpsDzVEMDRds8EgpamLYw4ZdVY",
  "key20": "4KMzptXVvgANXVaFeLF7acRZ5pe4737kZaAQHjwTRwWqSScv4UCrDHf1a6jnS4bK58Y86qCXaBBD32inyvsCatsn",
  "key21": "7J1vFFRA2s7MxrB56Kei7tCaruds4gV19QJ8gMytPwEwxefSn56cRiMahe61Cm3nvjd9mdLNt64x4Yw4VMaarfv",
  "key22": "3S6Jhm9hn8u2kR1MuBtp6RsNUyCVYzZSPT7X4BEsU2hurvje4KqYP4aDNvMMQmrVjcRkYsd7iTmx7yk1CDBAqJyz",
  "key23": "3JfC23ckqnTewn5Max2Znx8ZyMYuAx5qmhuqXPZji8d7a42PL2M7sAEWSxwdsZ4i2h6zvDGN5779xcWkfu5dm2BB",
  "key24": "2zX8k9KiRtN218gpHtdTikFPGZfxs1SctDjh9WZghHErWUHwJxcu5c57VUppQvLXmWKbDvci44TheA71CaFVSQXc",
  "key25": "4EJDBzeG2dodCDiM9BdganXc3PxM81yqjWNWRVAU9WUTGBBBFwWsGbj2GzjNRVjVYbYxzzKoXkoKU8dgzDBS7Mcw",
  "key26": "4hJt5AznQAAPqCPBZ4o7UBtNqURnvF2yzB44zPxsyzMue9Z7cUhAKKLG8NPP1RLAeVgvfGQ82w3GQGbfKgumQv4A",
  "key27": "3wCcdpMUSt9d1G6YP78miNh9v6EnWaG96XaD3rU7UAHMpr4p4YGERtWBqpxS6ZaNWcj8N78DQ7jqMF95u4vTNffi",
  "key28": "3Ehy8JoUhHEmwM2JwA4wJGsnHUktQqNRnMCY1vRYCMBM5WRa5hwY6d8DwmbVFv34215RrxaVcjFWM5ykeLMXfKfs",
  "key29": "sFJSQu2U5Bqo5JowKEYLdoJHuSiqfXV9fLAXgSyfjyD2dXBxzh1bc3oTjr6hZk8AGQAXJ8idA8vZK8w1o1sSTXm",
  "key30": "2VnTKbx2aegtkeJ2qiKLG8deCs9bURrbkqucECHLtgr9qfqn5DA6U36sUy6CE58yit2t26MUZtT7u8pUY916GTsy",
  "key31": "5JAMvz5nJQQDcwru1r5gQrkbH492LC8w7hAhB69jD5Qyn26vKdc4G3smWZvDZhMayMRr2CdwQR9GxmbdXMUyKGLz",
  "key32": "2uKyYNGwSiC7pAoUPmVeZqXiPbdeWnThoY391udxhrTfVqQfRHvQVaBj4KuFXrwjYwitHDBjwjV5QXZnPaR5BL3R",
  "key33": "4kb49BAm4JEiqkXqRtZ1Sj81rY4mRvpQFcWKeCRjrgtveyvhu1eiHSSCsRrP3USDZpFE42UVfk1ryCspX73AcQMZ",
  "key34": "5iw7yukHDk79JXktUUADF71iYzTuFebT1d9V4rmq3xmitAqct5iisQXMNgw6DZ4DCtHmtahcRQVZuQXtwpFGd9oo",
  "key35": "2dKY1ALcKYe2Vud5bv4JpsortFoKkcXcH8KZwsio7Eattp4Ec56gTsnEGEeES6SYo8Tjqc6YNPJ2DyLTKeRBznqn",
  "key36": "55R1oLKQDaVXYUp5G5LLbX7RT12Nt9NTGhcdcmfEfm48ZwDjdypYqgy1TnGE5qe6TyzH7abSWzESq7tNsVTxwSn",
  "key37": "3PzkDs6Ph8KuSKv6LMrmKdhEb8TNnH8BtoxQEKwaJadnwnKbnfQwzYcL52nw2JfuNGbzNDaVDXsrGTs7NJkvNysE",
  "key38": "5C5QJDUeV68ThBTSWSksUJpqFvGqtqNds3ZgFa5rPKFr6GVWDSvmnKSKzZTd9eoe6SC3QYYQaKwagTPiLFfZo6wZ",
  "key39": "3Z4TWT9JcdhFN8HUVWitMnESGBZDsNHoRqnwyh2Edtaj4Yi6uXsYRCei24C1ybFUiqvZ6nbEaLaMJD54M11zTGuX",
  "key40": "4jcVsGWppp2psrvdaLuD1aXPvFgoSDr5yMC22UPmfaLtWzX6HEowGUnqh1h7aqmtxLBAoWmVN5a1GPW73adWH5p7",
  "key41": "55YU2CP7bno3FvUV8FwiS6NG5uPBynW1s1ewEAQVjmdmZDvncqVEZp5Y9cwmMXQ27LizsFtRd8eYB9dHakwf9SG7",
  "key42": "4WWbX5TFMw14mq4Zd73xxdEnasjYQFzHCqM2552jw5hXfto2DQpAuyQqCystmXCWUvH6eDGJtCVpwAYKVGUuNWfq",
  "key43": "uMRnD8k7C4USbh45Y9DCcWy84qeb8tYHBoijFxG5huda3EaxN1FmDV4C5hXmtL62x2Zx4xkGphjaAWmjNw4tins",
  "key44": "56pWbNhfWeuYYTuhPTmEiXDus4Uoc837din7qZnc2kHUerJudtLRTi61Z9wUpbx85TFE35BGCG1VXdJ4L6hF8mhA",
  "key45": "y2jstBHPNcrkSKZPVMCMZjxpcNKN1PqiTKK6pB85Y9zt47gbP91XHdotFT1dQkuTY6w9WPE6Zm4Avr8RC4LtJBH",
  "key46": "2uTtoejo4dMuunV8WuVqFnouSeSpMMqjjqo31uHqj25ERmyw6zkfpYKTFiiiorF4Mtv1SRg1kkEFgFGBK7w6VEZy",
  "key47": "vWFbADgyd7MRHv3zvr1Dc1v7LbNfHSNHYcxEV5NsF6EqChbW6RinXiAidGfuu8D5WYfLv8Q8aCfoRWe8z93yesG"
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
