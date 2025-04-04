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
    "5b335AHXTvdRBpDT837X4jjRktJ8Mc57o9NCTVqZ6Rvyu8EFxS7VLgJW5LmnJWXbKuLjWFDuaf9foM2aXNw9Ld9b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KAFqqX3dVgRscSFsSQTWkSek3VXhvtZxJYuv3TukXm3WYhx7KX5dxQwt6o7gybs3Q8N4B2PjH7jB6uPstnP74zM",
  "key1": "5YenXM33rFWDtitwfx9NaJDgig2H2yAy3qv2Wr5WTYYUVryXP7PVqUf4hHMepKFvohbhEyGYNWit83pcuLbUNyQ3",
  "key2": "2Mu4e3kHSTHXVW5jcWnGhpN8FXDyFC4JeEdLB7uFZA8cUqtdWZsmwJdzi993HmgPDxwR64SWe6wJzbidCwE1ny3g",
  "key3": "5gjWShxpC7hU8feySkLm9wyJ17K5UT5WiRbbjyZ1FoStsGwt9PGnTvRrQ3Gz6dT5jvSAnBbTqQYTkr3jjx2UNSs",
  "key4": "55mQ7pwHu83aMRgArH9PWGurxniDGumG4dBYgc48BYdwcxQME1T5hMpiq3ydRdJPGvAs3YNCLz92wovpZupSJanp",
  "key5": "oAxCSfyazJinTZbWJCtqCiNCvqiWpTUHBrJeL6boj3nsR1DHov9oJdSrfZ3AddDsVB8jY3qdvkrDf4pvetPWWrR",
  "key6": "UR7JipQobgsJb737upN4QFYU2hCvrmYFVxNEf9QJxGrM4hc9B9gyGoU9yDw5pi8q263qbFDVTbaxerQeWSaXRza",
  "key7": "3vU3sXkuFwjPtoFozv4WQiSAsPBJG3nwPzi33qwvBTroaJyoYNjaL4QikYzLtog5v44GzqmR55bijRzwKmRvxrSw",
  "key8": "B6YAxm3XeD6AC7bkvFeF18Le76CqRbTDfpqbRf4vUcsb8mNKq5fpS9jLcG1BxYgUhTBzeuXkUaPdK45iywr5rzA",
  "key9": "fywKmNyDH2GyMeFjJsqPdYK9d84QN8UqTFRE7epbBYfNzjCWkeuHwa9YnsMuTEce7hwkgrCHrLWrGw5Ukgd7ZXV",
  "key10": "2MP6dCkG2FQmTJguL2sGtAsuyijVN8AdjbA87xeGDP5TjY424MsMvtPgNyDKsDdGa6yhGEfDke1Q4aF6d8BSKeKh",
  "key11": "m1xVdomtNGbovj6duUb2swSdQeAMioAwVpeKosLbiCxx5LUeExy1SeftzYe6M4Lu6ZQ5sYW39yRJE46UHRnxupn",
  "key12": "3A5aqGEZnHSYLo8dvab7CByuHCytiKk9Px7smwXm3vaBEvdXsUB7sCeKiynaEEUKG1wJipWRhpjSq3fkPimk7pkP",
  "key13": "ZEib8QuNamfadKTXNmB8cxT8EcDqF7gQvdJ8mEJ1zbqZmJ48RVqr3LRmx3Z7RjS5KEzq712KNfRDidgw7o8kFAP",
  "key14": "5a4Qo3LCPvBHsj9KKbhsUzXJa2Gn2rBzU2MXQ4Q6jq2RfKMiTMJkZccz2eUQj1dZeoEuYdkT8VXF6bn1mpHsLeGL",
  "key15": "4jtihNrWbDaRSmKYvZSj5nXRf9mLF4jm6LFHg3qQD8aBRgKTiAW7o7sPTR38f2zWwwArHDwvGgzeiZPVoW9ruJqg",
  "key16": "4rZjFvwkvu8j5Ah7Uzz81sWpHNzbZeDQA8ySBaa3QomKYNdty6hXxWPKMTqW8Ffu5Yh3CSKnUqihdkgmNSdoydvZ",
  "key17": "4EWvm8rvwMEM6DfwY2FJMTZyuHrP3aMmhGKFVJ7UnGDgThsQs8gvG4n3K3GBuoYX9d5gpr9qNLHRWnpkJEifJHAX",
  "key18": "56fw4zd51ZiTfMnxuo999C85piY7EAbERQTQM1pKNrk52nin1Q43hfBS5DCBXXr6jMYdJk5CDaU6ieZ7xotU6EeM",
  "key19": "YQjofdLqnvTrPNV8ukpWfFwnHR8roQ8FoCuU9dYpmHDYvUR5GSUfNyVGqttq4nvQhkEvsoDnxkACwwJUpHWQtuJ",
  "key20": "3WCtCuvAPxcznHM9GfSG18BxfuaRm5prFfcmPtQZ8vdjYi9TTZPR6zCtkgEJPp14sGCbuSjbvGTUox4zrMHkaQ9d",
  "key21": "24iVWpQjn3Npkgi4exWj1zo5gz6GdxMHvcKvh2FHWAx6NroyDRHJc1WhvfoTe4gvX2vux1bEvKJbs8xnRzRRbYEF",
  "key22": "2MwbwWc5MPtPDsy38jPGYqTgP5UJ85S7Z3FibbK3QobHe1ZAm1WtVd2no3wt1LdqJFHUpmVZZMQKTDue2wg9nN95",
  "key23": "y3LMse3GUVFQFMpCo31g6hRKY22LszVfjodEBsuRCxe7KyEWMdAGDfKtDhUNfVpin61YT1ZXFuBwn5u1inJ9gfB",
  "key24": "bj7JYNZCnBeda23PtTvqSJR5MtYcSoHaY1H8Lma6j2bpQiH4CNtffaGTqgvgFCfkMZQniwkrDtNs2ETygk1UFtQ",
  "key25": "3yCkuMJTEeH58bozwEnXMQLxkpJ23UUrtzEZLn3U6XjVhsvXRGUshsrEvV5ocudMv7MjuPFQSy4AXde5YqTLkzD4",
  "key26": "2UGFDpvtydjEnxEmMzwmbaHNaBYz9N2v2Mb6GjKGRsuRd7a5RnRrZSpFBJFC6xovvosRmv2gqnDFCoRpfAgxrqMc",
  "key27": "5HUHnTZbBZ3wLFbtEDsERX683KBsc9EGhHJTp3QFYBHB8LCbTJpczPexNEnphezjZ5u5wAjLu9LngAqaNBjNH6m6",
  "key28": "4U8grZb5znRBmMcRTkvMiH9b2s5HUdnJYp4S9eXdz3DXU2s6adpnR6P52MWfSobLLEg356cQxNjjgc1A6nMoE5uJ",
  "key29": "5R1gsJQkZBztX5LtyYse5WEVbTAwAAsgTu5BXQUqHdjtZkFaCVzy8irezXeRsZWnDepgqoNmJPpq6JULQDLWemKo",
  "key30": "3DYBuXCMzW2AkUTgfDTbn5UNx3QDG7xYCygGU91Fhs8HaGBf1k4qDmpudRNtuNFLyC7iG4w9FE64HEdBuEAgwDiw",
  "key31": "2zcfEXDMCDRsvMGJs2xAsHnUywNkenVS4y1417wGTNt3wUWZ6J38EJroWFM4EaFvDu5FbHBUfApos1cSwjtUjQFw",
  "key32": "5nvVLP7Ca3HCT1PcbyZnHCREcWsaWMbGLnXj863ingiMP9h8YgHvZ1mCf2DrWyeq9dxLbjf4taA8YFEEmvFMpkpm",
  "key33": "3ABJebdjzeGyj9ZonetBzi5YmZRTkaYxq1HhyUW7YdkckP9BTQP9VWpk18kCa8V37BhgvEXkaxHULeTSFvvyaovr",
  "key34": "SXETEKFZWu3eF4wFXSb9NCuQy5abZoVFztBzGfmDAZuFUhYnJE3v5tsN9mjZNWNJeN28ZgS2tMS2ZgkCvN8GxuP",
  "key35": "QKUbS23LyJ1gHJKmgd4q9VFDmZKeDKT9iJTsXXnNfSrwUzRZzn3vuQCd8o9yhevCxpYF8vLv8KUrnMSvEupFNys",
  "key36": "442VSU3rWE1fMecdWBEL68oXDHCzAB3rXzBpUHq3nuF1j8SpgfEwLNLajJkskak2jF9gSijcbrWdPKMKpzpDxpAo",
  "key37": "4Xeb32oadvsfY2CSZMyCXBPoSacf1XevxL7UmxpbczJN6TgxBwruhTfcXdKcYEuihqS4wjt6UYJFT6YivWLnYzxj",
  "key38": "4dGzZNrQVdksWeiSPxNHujv5oSXMzu8Vdavhzco14ufnTQmtca8Hq6M4MNHq3M1BRcYCJxEfNvmfpBcTybnxSu6q",
  "key39": "3foqbud1CRLA69SPKffYTLX4usTqkpp4cTV4esdV1BouyQKwexYRdZtwYRw93X8HWuDi8n9Hmc1pyqnBDhL6GnFo",
  "key40": "4N9L4NMeZSrPySETB4xTfK9Ccx1KAWX3xVt9Gp6GNed4vuVVcgQtmiT8ZxNjak6uEVDy5U56FnaaZ7jWof9LxBAQ",
  "key41": "5XVPYEtbKsARUd1ixM3m332CGSQSwEECkECq2GmXS7wfMUquQtPiqTdUbSQgFtZcugwmhiGMEsySfdrHcX5NDCYL",
  "key42": "dUKXYg2r9NdMe2zxc8mge2Dbqemk5ZWjpzqqPWrCg6ihiT4qmqa9tet53TTQKjTUoMckeeWF3VakHRErRdWnDvG"
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
