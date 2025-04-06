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
    "64CxQCptFwNn2XLaZgWYT6vjpgnxBF1e4CLF2DZd76tssNSPR83KRTfBryZPMhKXvu3QzEcm6ZJ7u7BPkMi5EueV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44iwURgMAiW1YkY798MV57Psvx14GZCC6PphTgdBdYaFpadNGsTVAbPPxZFh3nEpVUm84xeZjktYydHsyQRHPCrj",
  "key1": "5TsdL3RMgbcBfrvZsekN6xc2WZ1VEpGDJpUvYVkjQQh5V5c2VDTSshLAKTjVwm8DjWr1L1338yW3hbSzWhMYMmbx",
  "key2": "5Q97ehy9gpNxaMbHEWeREaXTK2fekU8HuhAToBxADJuP26arZg9CV49XGgXS1YxfegmzjdRnayRvpCtnRCwGg3iC",
  "key3": "3jCHNdrfja4LHek8pMqiHGR9gWVP3EtQ6dc122WZZhuP2N5MnwpCe28yYWozXUtMHtzocbRxiLd64GkpjBgx6rry",
  "key4": "4UBVMUmGbbiuaKVrRHqGf9LCVi8b4KCFm6fKtuQXxB2pHqvm1aJBfkrGvzYbhVoP5NT1Tu9j8vcKhuqtENUU1U1v",
  "key5": "8hUwhTafGifvJHbsGNikxKnTdVfh3GrbnuvVqsJADRRKZqupCcdSvsaUmzGW2GHCyfyBW427N9hk9hbkvGVBXxD",
  "key6": "65Va1jFfAzLkECGUShNaBzPWeWvdsDHpKxbG82ZmvPYg7k1xu5eViW7S8Sno6aR7WpFjdR8XFTjrij2XHCPCcGDi",
  "key7": "5kFrXDep2YpqkDsukixoxEAznzWeoiC7UeuokfoBXQta6xvq7ah68GWBwcpnHfJkfP9FWQV1HM3hfv42muPQXu8o",
  "key8": "5GxvbURtHr3BSswxULuLYbby2yS1UzbvVQa9vDwTFwrGpgoBY1YciB5KMxYHtzbwXadFD536Ea64C3AewHuusuEi",
  "key9": "ziLCGL1i8ssV9xiVux88yyP8pKGbfU8xmarYHD6Cu8kww6ejP5Qdwu8uqCPHpiGCRB3B4tPKLEgthUt8JZ614Gp",
  "key10": "3G149XbceP5EjHRaPgjwQAF4Q8m4KGMJL9QUid86dFB9fRuGyJrKEbFVxGxQk17ioYy5bFPzPMXQBKGL2bEC6Vi8",
  "key11": "3RZid9n9DUAZcaadpLBit2QsDnUPdtizDoojjo3w6hNcxmZaYFpR37QeFgWtATrzba8yE1MMvC6LPRfsUuaekEAJ",
  "key12": "2kmNZ3JLjd2hYnP75kJNsHnJeFhgePqE3CV7twm8KDxxdDbnwH2aYRsjWSC46uo4WyQuZDCxD1FEMibAyqRczGMS",
  "key13": "5rF5A9svJNrYbRkHT7mcG78g3f7KqBjTnYFGzaffy1eHi5AmpBvHgofaybcSSQLND8j2LcDtXybN4fzuPZpeWiv4",
  "key14": "5Xpz298MfcxJuBY22ZHj5A7r3tCpQ3kWd8JwZAWkVyXnPgXpF95EBkse8KhZZF37kWy4JZvg4JigsH9rh6LhwE5N",
  "key15": "2GpPEQUzRdyGy1nXk83zm1SWmMPFs4JiJjFA6EkaTSbKBggd1ythFAfyrDhSGnmfziTNQfokXnAhdrjRURssYVap",
  "key16": "4gR77ar9MDHNMi6Zuo91mqKCZeHDk77skFdvZjGC2kFg4kV7CttH7Tw3y563zKwQYcmtjsMq5LcthDjF89n2ZQMQ",
  "key17": "5VTgkEE6iLm6vkjqZ21gFacqLhJnW2meX2rPKKMpgXJLoSuZ7i39sGVr7NcRcLFyeX6HskkQnrTWKkWa4Cx8cRAD",
  "key18": "4uSnujJzPfsFYLqkUNqQs4z2w6Qb3DtgJEwJvXFHHqe8YsbWfRgj888rYeeKuL2CcKn4VSjwZb6Tum5gJHjG1q7V",
  "key19": "3MrGKnPKZcgZQX1pbR2an8Tf7UhdFLq3dLuM28CJkbm9vB8zHDLZXfxXpYYjTm9cVUxPucPTWKywdzj5yNc4f4fz",
  "key20": "4WPaZHAtG61XxXiVT45QnZfhFnZwPScPo8suVVAYoHM1taBvsaWpQhP7pqd2NfNHXCztqFSjywP1v75ayQYzGRQr",
  "key21": "2t2domKYPFJdr2qjK4oLJThcav7wgrgBPLDyEEmknMr2rvheHXS7XvZgRRJCqX3w1pYua9dGPXZvevTvjHTWDcQG",
  "key22": "4kGDetyhXuHMhW2BypNyVYyPsRizU8RgJuAAkck3NNC5bK5HCBZE5KsBkctbSrVTzyumLtR4N98Lgd4prJyfkFaP",
  "key23": "5jYmz5cn7guuQEsAiSsrY3fXcULUonscJQhzuAx95cxbSF7UGEimiRngsDaJ9BhEZbBBTrQqKcmh6DijRqR9guNL",
  "key24": "484XBxk15DT7YfV7PxjkV8MEkB6nGkkZKTGdzhsutnnXfsfwYNfkCseCVFjuCuJhdgZmc3NAKcp8vAKqe81idF36",
  "key25": "2aDrKTh7de21prWLEq6r7u6EWLfArM8JNd68LwjYzxwQAK5Qzb1cAv8kAZamVWwoL69BAHAFy78PoC9rEVa1BTao",
  "key26": "4YWWZJUL4LPi5y1iq3oc62CSXMgUAC8d4LAPySXZQ1CcHmi62i1JEY2g83SbnpGgezsbBHQbtJMSH3UiXWAqTpS2",
  "key27": "3me47ZKoPpik4izAhuUmAjaQ2UZWS9H9YUomPmsfoqAG6WjSas59A1dg689xxfbQ8bgFqVC9yr1ponJwn3vy8ccy"
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
