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
    "5vLFSHNK7U3yguufrAhsNeyHsn6FxEAcRH1ya5LotPR6VT6YumFkKrz2wEVYnVLi3KaT7NbUKeZzqCJDdt2ztFq1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JnyqHqH62BK4jhfrcprw8Nx6UoJGw1Jx7yi3WFbobYs1DcFx33nDiNkpGhQLeJQTkZYFSbM6ypqPmGfrJG33co2",
  "key1": "3spMQZHsLFDk2d8r8rHkonbPTz9vLhwidemrTPmZzxtDdCoG8eaaSZNd8WLRav1VcFfMEJvBtjmRuoTYpdDwGQGs",
  "key2": "43c9q6eWPgxoiTGqMvLoW4etDGmurWGPfkmJDBZSvBrdNNKuyuUx5K3Vz1khkisBCF81GSqEaBCy7vveFjbDemQK",
  "key3": "2giMn3Rvm88jZKsL57waJW8965FJdrgDSWFARyFYZsrw5q6iyxUp4VjURsJVhqMdu2gxVv8qPussQWTRoVgH7GZn",
  "key4": "WxSLsj8M1V5bkrv45NPSSuoDEMumMiKj4CvHckM2WXtitMmmQZ44QRFDft4M38gh6xL7zzcSCdw6oohp6PdkH4f",
  "key5": "2ZbyirVbCn1uGtSXqBm1oVDgaHsL1hBYVtn3Ndwzk3ZMjXyBWgbN1Jz2UF2oyr5SdorstHNxHyxqGb7jmFiFrZU2",
  "key6": "4xdJoaZvdXF99CjpHmfqzHELo6SG5AkcRQomvnJt7H4V6FxFAkgiZmHJnY16kjjBMs1LqXErH1T6GUStfzhWJU8V",
  "key7": "3EZd6QtXY5syxNB6Fjk4gVikFViULqiwHaWVnxiKN4AgukHNsYCFZZaNKv7894UgdsmZs8y1QkkyDHpVMTLxEhJs",
  "key8": "2e1vjPsy1tVZmGaBNEwKc2dfe8M9S9Y42EMeHZtumsoX5H4iHdb2UkYzWwZRiuLKDCnmNRZ7yhGSLvPPeqrUT9CW",
  "key9": "4pjcdH8xswQJVA1QiQZmdhxfYMeA5mExE1xAchsvsMu3zAYGse46jMYr8BmfT3gEDL6ouFJoMJxVWMkqEBDjoLSQ",
  "key10": "537N8yuWchf5BJtNp5gpbHVRVwcVs6hrrcovg3EJsZoQX8DTQmbyEwAeUBgj4ix6dowHHEeG4R3bfugbYMGy7zbk",
  "key11": "5E4VkwGYCDoiEKeFBf8Ujy8dswNBYYSdDZTE5rnUQwyqBjbcCVj2SeoFNqeyAntgu8efvn9fELruak9hVrNfgNs2",
  "key12": "7FzUGxxpHDCzRSeYWMJiCyHHZKcrwszg5a18wKtKeMr3gG2WvfeuXeXsNVjV4yoTZEfxQmNznhDHVxs736KttA8",
  "key13": "3xVvdCimBf1eztczpFJa91XNYyyX7MiGxdrx5foh7TRqyGxgcUA1CvwxZquuCsxxmYz2GeTbXvoVrJ5nZwWk6E6f",
  "key14": "5hmHXVMzinQc51WCUQVbDNocxT86vZNUvAUJFD7rk85iCi9snv3teBmBJqm6YF64gPTPPGGwKuyULoA46HkUZTqn",
  "key15": "415zJms7WHmDaYyKqnoztssP8K79kGRnokKzqvD1e7pTbk91mSoLqjnW3GQFtnZA37s5EdsVUMb6RUgJToxA93fq",
  "key16": "4HjwTo5mCzEiH3McggfRzxwhbqmpo6MQitiqe7m3fGpYd9VpptzS5itDUjPN2QC4ffbCaUHYQao3XkHfbaT2ECm9",
  "key17": "3btw2eLWskeXdv2stMTSW8gUj9aKoy5kbmHcErsRKEzv3F8qkKD3CSbLgzfooWx547Wp4JwkC711xtjKfDB8ayYW",
  "key18": "BJtZrcbATU5q4kSyGGvi71u7RLrEhZFVZLtkjPXiwdbFGMZmZySYCTbhmpiEwBAAuBPdJe7KSXngVQP2q7caZZ7",
  "key19": "3FKyxhM3CNcfftzhgqM8aDCXGb41n23D5YJ5xxRjD7ZqQ2XFSpck3kuAqVwz31jJaD12FMMzRDfcTZiBhkDKqCmd",
  "key20": "QrQ36osRuGfQaoyDqHF9E3CwzHDfXtqwexprfErb2XFYDom98TkPMHoD8SMbo8vD1FPj5EmRh3XeoEfMvoD6fxF",
  "key21": "3rb7NBXFnnujAKnKe2BDjLTT2fKWLEJa4qJJt1ubsbMLW2ebDQey8XdiigFaKBBsbKK7fKWnd7xPtyKCEYeE7in8",
  "key22": "3pS5cKV93tKb5whmqB7rAAbaW4ij9bm5cfYhsrW1hR3nrcP9CVjavfXpHbkzs1R9exZmAviF9Ebwmg9GEJAQTzKx",
  "key23": "5t1kS2GRRetPC1Woka33ogETJL2Hh8s4cUwog9BjUKCTnDiAPVdZvfRBCuwyCmLXX6yM8JiV19VFsmqSwJ39LPyo",
  "key24": "4DfxB6qZMp4d9V4NsfBUHcXVQnJNXqQuVdmQHiDN7MQGXXak4SjbbdqYaEbXqmaLMiRQAEyjJLDES9zFMqWiJwoj",
  "key25": "63vbXNN2ZQyZi18csMobnbr3pkpjnm894sTpQ1hZqGAdSC2ktJ9kEZcEpThzhERp2LdunaoEas1HNuSriaBnBiK1",
  "key26": "3zkknA4hZzoZ9pNmdhcXVG2EYvcrYD7ecjZwncj92zk1bkW2GvBkRckD3iyKGQ9uyUaF1At6WHPZcxxWg2iYLxxL",
  "key27": "3ZvYpzMBZvirkT17ZaokUW58cJEZTXezEwjmDxgB33kHV5Su8ggKaEk96DiBn5T4JssrXaqGeXMCX3woiXKKRfdM",
  "key28": "taQXzcpkheUGgzeeL148bUp95TJYp3uf6b5xxMHqLvfejHXxfoePzvvSV5n1W3B858uVqMDSgRtbtccv1Dug1MF",
  "key29": "3P5vMN1VkkkCRM2yrsG7L8XMWiAuFAMJc1dxg1APLZr3Psf2ZbJGfB7yChZhPPiGwsAojFDo8WoPY4QttsCbDu1t",
  "key30": "2adx8huzVGMn8HF1hdsbMQwEV5wYwmc637mh1dA3KWwLTMmfzSmxddTMVYjFRqXMzFCuhkJ57eRewVHCaKZxXJca",
  "key31": "4JGVCtycrsfXyWRAi8gHDWfreRK26LDMB5htcpGEq9xZ3gDuSbForFVsEw8Ryt6hLXtuXS23DuyyhTJ1vkx3qvZr",
  "key32": "CzLhnVfsXsvjSBYZYDBXbUyC57gX9QUWxqQNgM1jEdxTXmQkmcwpWN1dDwr1S1sx9EoybyMeM4bxxFBr31Nmwat",
  "key33": "5FcP3VUyKfHZpZ2mB4P1YQnSUsa2TPWs89sbKD1dVpDrKio8ApuUDZtZNbC1KFznqHagKbb4SRAfMjhv7Vzo1Pv6",
  "key34": "4r9A7hRtGVA5SHcNkxUFKPjBxTA6CXkudUvNzZq2HPN2vFuD78diHSLYUoZGdSL8nPFRcWyEw74geDJHw2rHqYCE",
  "key35": "33pqshh2675PwkzhLWwWUEesiZ4q3HKzDv7Mx5NSXs7wkACWvD45Bhvnjaag9GWyFyGMqQ3C8aqYpG9KmSbLA5vo",
  "key36": "4PXxJ4gF1rkqJUVyca91BqHmSNBXbZvhfS8BKAks49QxNzLzxSN5xJbhWQnnDJw1jNa6o2V1dFPvhnvTPExhJQZ7",
  "key37": "3kdQRFh7RnUp8sDizU2vR5SyV6RSopwWvMbP2TRDgpJYdxweV4q44v4DVNQ36nFsLodnQBzTqVLNc5z6SKQTTAMH",
  "key38": "4uDpYJtW4sB4mitKbEiiTSnfU9qam1MNcpALS7FcX1u3qPzu1Y2LsjCmas6ep5Gd3xJLeUwuq5xmJsEPGifsZDnQ",
  "key39": "3s5XFXv4TZTLmz7YKyNH7HBoNRubZyWY4nuy8eHr1a1RhucXQL88iWns4iChtiRLAJSKDrjNj2Jia6n9YryWdBmj",
  "key40": "5HmMKERYYHwQVcmafZrKtmB49FAevarF6zaYbkKw5J9S6de1NwYDJgKxdDA18SZTv4XTK7Gg2sjBcgWEVH7mcZGJ",
  "key41": "2jypS7e8NagZ4yC4q1scp1HvqeLTC7j4thEZDhxp7deFd2cxnz2bMuUM7FMp2wGNLYJC5bhSMxW5pGtDPdgvLdQC"
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
