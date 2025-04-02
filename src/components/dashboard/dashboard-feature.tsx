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
    "5x3otNwtd8TRnU3msZNZ2FHh6tp9XPi9SEk22giMN652Z14hkQC7P2muqj42cZgjyLTxE2uNQ8o9yXf1kyczNnd9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MENEg9aY8Rj8FCnEFgfxTrir5AZELBTTZrKjkw7KhCagqAHUFrVy6JZRFrNtVEebxapnVqmG5QxwGNzbnqeHWPM",
  "key1": "2EpPCMGmzqD3CtXjfuLwQ9F1DS9qyCimbcbr225M5xjEwnVXRq7WScKjbS2T9MW3RV5AivxaqJR5GH86qovfox49",
  "key2": "3Nac5q4qRXrWZLN1gK7vHqErvnjerVUdgkFPiH4jWWA2rudCG9Vwvd5UGtJvSeU3ezQbrfEdkKrvmKJmVedMXdrh",
  "key3": "2rbp7swampM97SNkZXzpemke8ripfgqiRFqt8GckzVUKr39yCLrq44eQAt9HwW2LHpBqfFLUcVMxqs5gU28LmjQV",
  "key4": "2ehsD9Yd8mzLRKkmx9gAzWHNNsKRAwb537cbq4rVpSWagKBeZY1kEureYjyR4Pz7DL6VjnNeN8fdRGacWFKYsK1o",
  "key5": "2CXYmHHXLPmDRSYj249SS6jdgRcMZ2CZuvH9fwxweBFi8GehLQpdfYkpa6DwsNjTwoSLo7SSQWVwKcMArDCxk6gT",
  "key6": "4YGxkSKjCHp7Z7cVKLZ4YCEJ3p7zs9Zoece2RUWXj1saY5aDZN6ZB68Bv2hRsdNJJcvMkZhwtYhCpLaujtWHav9x",
  "key7": "2GpkaQetPuvMgxsVEahU1p1cfPMHwp2VHDJpB2CHSgxuZtQ72YyaPrWtQLtEfPQTfxhBpGpvmC1LuGZSuD9BvNGn",
  "key8": "29wjap4mQFRrh8DgbvXXuiThGWcuRKvHfidh2icDU5JyUTn31RcoMLpUoySUNHk59TjZ9LP4PCqgB1btUeNwk7vK",
  "key9": "gPAHBR3rkfpujHtswAkSvarpxgokDWYASmiZnxYJ2z21VquUrVioyHBx2u1Xtte9B8rtgQ6YiaomjNYH8GxUMSa",
  "key10": "FCH23Vh5Ua3k1Q2ArpjErzYiLSH7VnHnu5qsqLLPXhhoX7xpQDCBqrWxTAaqH1LVwxjMuNjDFxugpAc7rK5Yox5",
  "key11": "2Gh9pzVDbikkBxjHT1xRW8kkFYxHobnYX9jH2meemH17NEcRgfuvUHFMxexMWe8ndDThPgEx3CjPp9RvJisiPtG8",
  "key12": "3bvJsFXtdJfkRSzFuWKAdEKoQhHeMePxsC9aa4SzJmFYsqLsiJntKfnernvKRFEWd2CykzScuWQwE4Q4VtRvQBMm",
  "key13": "3F2jeSwhnSSfBejFUGchr76hPj16fqUzkSuzzuoG4ER36ZshRRePc9PK2iZfkb8kkSNNwVhTcChPymsGNjTDM2RQ",
  "key14": "2KuzFSpeqRAAkJhudsrC4GX8jmoybty11JPiTPe3y5t8emR44EriXgz2ferXKm7uhTMd9DxQgKz9shUeHcC4fXie",
  "key15": "28Vg4PVgDjtpDypMdAX5VQJrjD1SW2qR81eTFgS3HSdF7HuD1acfwiQNe29kzV3X62uowiKYvvzBZc75oUnJmuzz",
  "key16": "56B4qAQVHue7cuG1pBoswKEDqEEJ3RtVedot9zvSFUjRCsQo1AQvsDuUjiyuvofhdT67rwdzGzufdwHbjuKViuxT",
  "key17": "3WMSQ2Ne55GwTCezSSYDc1PxgCczgL5oP89kKCQjCXjoWYvqapnT3nwiPiNBQekM7VTv4QpsR72By9LkwcTu6MP6",
  "key18": "34Ze5mEJh25xpeBPJbzEXHuFkPXFv3yZFZxGPPHiwvtpBDAtNjbgSXf4Z1JkdjrEi5ThoQnLpmnKsTZJdXUa8yD9",
  "key19": "3mL9pZ5PKLgVc5GdYrwU3cvVMS53w2uLa1v8sXqfrnD9dQrnfGxd5Wn5mg2Qwzt6m3zLpyavLmcxFBgrLmYQfQwc",
  "key20": "uK2U12JE6HgMxgPVpwREP9f7xJtuMLnxq9hgxLyjhtFoyGU4YSbzUpDrp5tWwS4VNF4GH9cp9M8VbzRSa6Tbp2N",
  "key21": "4CrMgH59Lr1BdCpQxamEeYCVFkQYt6m5zimDSeHb9v7S15CB8wbZEjFE6z3LjKqFCBnSQPvrfQSkkrei2P7ZK9Gi",
  "key22": "5YH5YJB3BWWjfgRheQAN9psowxWFLRDjQzFVtnQxFTcNXrarPBXhbQg7uU7Qy2AsfgW8FNNtHGj7X4kk4wsZnYha",
  "key23": "45oyc5reg4BLC5erDfc9rMTUEyW5Xn1ve9bxftEr3ecKUHQzSZmPRddroU1eavg9egas1AWapgBfkWUVpTF5ubBC",
  "key24": "2zphizULokaMZJ2soPPfYKpuHuuTSD33sDzXjf5HuSSv1nLkzF9vdH3CEH1Q2T9nre53MisU1F3f2uB4ZCNZhikB",
  "key25": "5tuLEEnDrz6v1RpyEK9kGmoWzW2FXRQbttTz28mYkLzR2EqiorxpfAEBHfxW4wVDgfnyct7DpktFHZGDeybogbTE",
  "key26": "H5mVepdErS83Y7d7QoTrCkzsqutsWzUL7wegiAQoHGj4kfkAEgJdfAXADY2qB6NFSCmuT5nTskpQ2wFqcrLM6oe",
  "key27": "iY4gX6KPRPXQbUDEbbTdCpj174QWQMMwMP55piDkcGXDwVfzQUijrCyopbTd61XJAxTAnN8A1aLSwmEErP6Vr5T",
  "key28": "2KQ2X7BuXccwaNiRraWg4S8iDtpqpSPPUfV3R5zjhVhZVNLajXqA3bzH72G7P7WCSQcme8eKMVmMu8agafR8b6Kw",
  "key29": "2mvY2dzjEkFVJbK3nnyuTZJoDT1qosEEdmzjE7fukfgfeJ7vbM1BzGWQUapVW967Uq7yH4HsDuB35WjHi4ZgRzWb",
  "key30": "5JMVqLM5t6Fc5ErGx6KZ4bE4n7e6mvPiyFQjC89EGrEaQ7AJCT7D4wMJCC8MCLGw5nmP7keBmFvGYuioqFsjAbzU",
  "key31": "2GXTa1fTCU6p3T6MPetDkSpFJQuznzti9jin9z5hhambsi24QqT3N1NcjEViUtfu8NWD97WLJT4696CiJU8N8uHg",
  "key32": "5vs2wfyqefngvnSGEPL4p9AUxLpAZ7e9XpQGxLBiizrcv5hk1g4gpXx2aJcxYTyFEukSBL9YFsYnDaPcEk5qCwnt",
  "key33": "4LfiqRmJ9c775fxR6a76MG5svNjy833XdTiXPMTszfUtX6VrAmfYb8ruetDPWgLr4YD725b5FWZzWqkXP3vdt38M",
  "key34": "3qrFmUomJmiFVdncSVSxEutL6LomZ4ToJpGLGnQWFJ91yyRYNSbwF42BhzGtgenxZhbUKzyRDtEe2amMYnuW5b9B",
  "key35": "4Sc89QucpSZmx1Kg3z858DWwjir29pPuJbun3i4AnsZ1b2Vy7njvapEafSTYCfXM9LPbpCfjhkkHzw83tX6Ey2B5",
  "key36": "5v7v7qJGsXANq7ou8j8EWnoNYd1MiGQ3qbP4nqGWgqoLCwVbNS6n9AtDKefQifhd7CX9nSe8J1izdHxgbxEymq6Z",
  "key37": "i5uyAmFXM4SY8TdAyrZX5B2UVs1G82qMQLK1KjKgiYEotNKDmQZvekYx37VxHhSDkGiqSM4NJ6ogwJKhX8oSgWy",
  "key38": "2JaMoRPgG1k73P3K5p1pYwrS6FBJt5eNneyCS41jN4zG6YSg6CQMFGR8NGQZDeSYyHwNoqAGKZ4ac78DHbQGZobv",
  "key39": "52tbypnbtuZapVqTR5zZa5F19Nh895nL26fmzMZ3W7VnraQw33hFeVNm7RPvvGYvQ188fran15dW444antYWonNY",
  "key40": "2dg5u6V7TmCDQXrQ7CC6QJzhZtWPnaAYhXzAs5oDmqosdnfJ32EwbYNFCGGtu7UtzrTaoFbZ2FNXUNBBJv2wBcPh",
  "key41": "46Zvd1GxwCfumuBgbt1k5vrGE2Fox3zpQfJdx4PmQp6y3MDv8ntUdYqop51iUaFBRJCYDiVNosRvKwfnxvtY5xVZ",
  "key42": "SdUgaM4ceux6YDcz79efNY3Lfm38jnyc6v2sTALweXUhVafkKbFBVt27f2xb5oe1PETtzcDBe9pCfZ6TcfuWZvA",
  "key43": "5r5abPYKqvwWqudSmbqBwWgkkRNGUx3TSqnnNKthyNyMrwGYQs2Eb1CKjRnUUSiTn3rLbnAvv82mCMuV8m8nyuG5",
  "key44": "4z8kU5skXwFzNVdoRCFqXZQrCDNvBqFmMbAdcmCWoycnmFkZ7FmhdCteKibVzk4o5Qr8WPfocRLBXxPUspFNAHEh"
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
