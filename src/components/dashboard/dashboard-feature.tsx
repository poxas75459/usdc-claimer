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
    "235Lm2UryNnAdCVGGCyfVTbZWUCRBdZeYjeB67EkhzdBUPuWJKp7KosTPdcWKdZNPQjTjnphHP3cEAyaaYUzg8Xc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P6aJUqiHZfUtWvV4LjBPhWLZFrSP7vTjVbsdtzCnwdkKtL29X21ss84dwKQTVseqjcKMsqRLVpyna99WwZQEXvp",
  "key1": "3eWTQziyuvWPM86k9hVj1ridPPM85PKNPhtLSXFmX1WvbNrLig4ybyadYE3QhCJYBt3NwMhRRki3kMLGprrQByUd",
  "key2": "5Xey3CmZgr1ioLePf6oYdo9jERgPc8CNziRKpktMAQPTpSwDniMvuhJ7jC8UxGzDcrHtJ9x1RWiQNzz2GZLaWinf",
  "key3": "gYvVgn3YZpL8NY6W7emcNCqCZUGTTvmLRAAVKsEUDNMN34CADnnsT93NDhviq2mb7yYmQ9fMun3AwTvzjebXreE",
  "key4": "3PgMemaBLxnUsEzAsPGubF53qr5EmSGm3aQR3jRCBmoPcB5ieT4sSrT94YeTEF9R9xxtcF6X8wM6XwLycPYLhYX9",
  "key5": "hrTaGHbQ8izXEBXQtQYoK8suxX7nWbwnkCgRbrNf3DDrExr5UH8iAQxwbULhnXHnygbEZa2nUEwGJhWqtaYBomj",
  "key6": "2RaUwSyCqwKGvHicxKtmApAuXDA7syH2cqne95RqeQzkTC8ZokvJjVzS2HZoWygjpXsj3u1dnuHTiGPB9duqNedS",
  "key7": "4ZMSuAxBF93o1Wjq9QURYF7JmFeMnepjnJfbcdsX5ezw8XtEJDbNZSPczyuqje2GMLQAVSQfX71ZJPEUUDYSVw3N",
  "key8": "3WWWqiHSLjLNfy7oabNJutkLwiYZwafdStLFY5ASZmNNL8jhonb2Q8roNnsgAYFcqYGsbQaLcQVxM6bT7z9mvd8x",
  "key9": "2Y6AbWtXNDTzEcq2X79hkoppQddCLTYsAXEa4dsMwW5HgGzHNmTqgSXCB4jRH2vWd9eqq5gMizSgoQC2XzWXa3qD",
  "key10": "5c6R3imoBqmeR9uMd9zHTHbZDoFoKtwXx1GwTbQnFiuoZ1p8GnoUywj97abZ51hF1Qr1QVacbRVVEa1Jg85vpk6s",
  "key11": "hBjBH1GYiqcvAK5TNkfZZ9vPcJyW6kc1pSpA3M9mQKJyogh2caTWy5UedYbWMZpDh1Byh1Sc9HDRZtA7MqAh85r",
  "key12": "xxccr7pdqhDhCsuJTzjx9zxwKMMjHLNtjVaoTknHYRfG3L4YFdLpNqYECu9ocyZVYd1Tc2s43uzxSnEJuz1Aqti",
  "key13": "3f59QZEPxvELETbnYy7hirecZMVENLhhVjx4bXLkDpqU6kj3kbPBRkFEkw9jDh4rAV9ZQzFpwg94W8hELKfPmSBJ",
  "key14": "4HiUSr8kCBZJiHDHmhfpcYKyNXCkHfMUAWKDCFABTAPfd76QqHy9hkVgYXdpPTB8R5T936v26rNsuPkwKsfNtogs",
  "key15": "3u4waMS6pvNdP1hgESXuKAjDxMyqWRqA16Jr9fyavc6U99rHGLUgmg86jqSdNcUSA7BHihov92rKrCNEcDrbPAg2",
  "key16": "5Tai9cq6wV1gUKjJKAzznLvravMEpmMbnxReYo2acXq14hVDL7HibDhNADFrtpob2U6Zn4XPBhVYvDvQMdVUjkXz",
  "key17": "2WitJcoiAurMsvHHrouNsY1E4wq6YhWoD1U2y1EoNjnHPnh9xw4R1wxz5axrKTAKzthWa6h92ZrCJQ56zue1Wz8g",
  "key18": "5YgvJUcnNuuTjBDrFiSRcrfBKxKw2UiMrfLT4cSppAWGTAFWi9CNs9wWfMG79Cuiy2GgxAYKRZjaKxM45M6UEFEV",
  "key19": "52NqjHa4wRULiQ8PRAb4439GMbqtmkGuXxpNuzfoVhEnTy8gakzrQmyRXEzvDMBtTQZyg7kUGau7N9LRAVw1Qh64",
  "key20": "4AW3VqCZXuN9NgybpoquLz7wvEpaCqxmgNYyfTXUNy6mZkq86xTKAgrGGMp8BY4QPfjzgiKSKcB4GikQoL5nmrP5",
  "key21": "AfHsf7LJBx3MJywUH7evXDmFgxkkSGQvp2y7UnfKKe4hsSNWCYtduZdTcSJctdHtD7bwDqNaYUCG5enyebFhdfR",
  "key22": "5R2a6eEEQb1xPdgy2JUibgorG2X5DvqNDwi9g2UkpDQiTnWZxvWtW5X6JJCd2BZMhcWHmCmWFxznKU6DjqBDBveq",
  "key23": "LVz4sodhUwxAwygbbJZKfDRcLACQun9L2V66fLe9VV1n6vctapk5kHGh319D6dnYuUnCUqxLFu6i7VoxALiDJuG",
  "key24": "5jCtunVvWvW7QYN38YKApoBdQsP53jrwmqU1uY3zaaTLYWVvikQLjU2LvyJiMr8WKa11saLgvYdzrPSEq2Wgcpm9",
  "key25": "4ndW7z7GRJMriJ781jhJvZs2GvcKeWjMQpXEE57ELyP8q3rkae5SuDGNR35VVWJWqLzwQa52jrowDcmXpidEXQJ",
  "key26": "chBoy9a6osQwPephgL3j66HLUQA2SWyy9BQxL8RxcipSJiFtNk9e8Y1h3Uy363ULdNS1cQUwsfLmu3j6JFnfqXX",
  "key27": "2qy2Gq37ZJzGVFVZiv68hD9sbbE81JfY5Xp8K1mGSz1BJG91r2QiDzw7Jtw2kGqoACyGHpocEawd5HdU8rez5SCo",
  "key28": "4CJ5n6nkN92KfKa3iV7FWSZVf5rfBD8jBpU3J8V6iDAVaDsdfBhUHRKa3tfbejwfagV8NtFRWkyPJnYbk4nLwdKq",
  "key29": "5opz8jFdAxcDv2mwK3Vcv1BMtadLBzpdcJxZfeVBk7gmRqRtYkkvAEpt26NucHqPSMvtJPtceR8JvuK9FgqNth7W",
  "key30": "BfL7A2dPvcRo3FwJMW4cfg3Tfg6TrwuKCSy8LThVzRMtKoQtYR9Zqij9H1XMj5twDYQzoLZ3GK3HbBWae7Nunko",
  "key31": "EnBFCQvCY7HJ8zD4suK4uDUPmZA1tC5SFFzVWrzhvxUXRPrPUdMnJv99B4eAzYod4FENNSiAiE9kgTbsvHxTXiw",
  "key32": "4yqPodfUAuqb2iXeGnt5x2pGKDFjky69G7Z5S74nLW2CHFt7UX8qC7BZb6AVNCrMEHfLUxTpM6jqUmZsvGubESuq"
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
