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
    "2L7phrjyMKw7DNs2D2KM87EfPzKvGJe19GjZBdTjvSrJVhCbr1Q31guQGD4FRiVxT9kLFrRojcExmK49U1JLwfok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dQiX7gyyWygtaBL5Yu8g8KwVBxdmdsZiXbo5crRid4FTgzgy4vEMbdqHfZVFuQrCPDQZw5HnKHiyqWqKvM2y3bD",
  "key1": "3DoXxjiRZx5bhP31tizjPrd2mgdirsH4UK9BonwyzQYTrvb3fih3gbgUMF5MB1NjcKmSWZsPPPYM4RPhuivoq3pc",
  "key2": "23NB1GXfySwqykERFJLPwGLauYhcEsuzQSF6wzHPRj7UQMkopxVeWVo3FqvxrFWWiP4PoHK7fXPnbnTX2fn4epdZ",
  "key3": "B3tc2b6kv53kGtn5G5mHsKCSQYSTXBhawbzxDQ5m9Gg4oJTzWZ96CeU6VSTKRDUj7CWnBhrnwU4TsWMa9W8iRfM",
  "key4": "51A9U8JU9CFLoQURy4LeS74ZPJwRP3MVTefKDfxoqAniXmoKqwvcCT81CfU67dYz5bKUdCwtJXqxVwqjSgZBzNHw",
  "key5": "iofBQrX5kszoT61E7CmDXTQubqydtzPAMLt6fqrF8DKUoKeCznxVNDGQ9Lu9gZXvZqrDbALdWddckS4ACjUEHTY",
  "key6": "5nZoQkr5JBAvbWY5yJtsTDxwxbAtH2o8MX64z5W4jxKksxxrMbdyNzTt5V4Pcn29Pv5ZjYnjSgBUi3tRb6B3HdiF",
  "key7": "25yRYrBjt1teZw7EZbeaLhZtCCqW3VPkFN4jFJ1HYNkZJ8rLbwb3tcc7gzGq6C6GhAv9gwBJ1uJygwJwprnq4VNp",
  "key8": "DCdqdtbbNDFrmszQfW7f3wdtySFyZ6zPnduSd3SJAY4AdirrKhwyte1ddcSsk8Rc99QqXVHirGt9FZVCU1ZFwR5",
  "key9": "4C1zT9S6DhVYjJzUTVaxRR7XdKp8F1DKF6AA1SFdTZ4p2kidHnZUQM9PtdwCTA3bnvbFr6xxGZQ7oR2vxMzfTiEs",
  "key10": "3kqzNRxjJUfDa15rwzghstj73rKmizZK1fADEDfE6xMbiBW4MGbsSozJvCQrVzUs5mYEirvT5mSGpqwxq11Yi6Qo",
  "key11": "yco68rhr1Em4gB396XFfXQDStdixKm9ZEb9niuzHUv7d7hXFVcjudrQ6KQtbh5mucuEL6tZt4eNFk9CJ52UVdKJ",
  "key12": "4fxxu6DbxgS9aQxUMoREDPp2NXpFFoJbyWWVx1tTNvssFoMHEmTm4mu8V4ofNnKKQci3Uuiq7ahpp7hiZEmcrgZa",
  "key13": "3Mezux1sGDvkAPQQMU1tg5c57uCRTvmuGYkpSgNBVFAKBBZKdLxWdBSne3fHHvrmQ2TfYHBKVoLbErRX4dQsqsXF",
  "key14": "5YJrYNpuDSqvnY9UaS8bgY7noVFyyem4eDhZLK6qjbCEUGFkpsMyJa7w6niqxcMhqw6VM8GsL8xdymcaEVa9LGbq",
  "key15": "4Cxy7niAwZ3c8BxQ1KSNTH8qzrX2rZSgNNPUAimeqfvJQvJeSecwPd3g2Gqzq9Rwh3yqdNMfN2Z26ZGsdLUKuyFE",
  "key16": "2Uu8382FD1Q7u2tdgWjDFpdaRf9XogGVaCqQ3rugL6R5GRNZCrfAjk64rDKCCQGcxQUS3tUAnksKXCHNrMSS16ku",
  "key17": "21NeTnGdnHoZPfZMsHdJfc98uW5EnDVxRBHe2L77duEj5ZEr2dgQuRqkwEU3gQ8Dc3DG5FhJvBDKEJLmjjq2cjbx",
  "key18": "5v75Ab9jfCcAejvSXi1KCLbAPhp3iw72ZiAQT5eNVm476qaGEuaRWXfFqwp95cUxdiLVXP8A5A9Rj3zQciDjvFPE",
  "key19": "ZN2yqvZuJhqZF5gQVSLzHMhEjQKucTj1JKQ4xF2pYtaDUiDexaXaiAMuVgucDzDMiGo8FtR4iSdBtWsCUgkuXnk",
  "key20": "5RQZzA3WE8iyz5aiyYeJ6736ZgVQrntCGSzHaWYhaszSLUz2wWk4dEw2dhCH3FgQqhYNcNNbxioTPiJQ4izTZrsb",
  "key21": "3hx8u3nZDfwxkSiNhyJrsR77oydBh2d65FpsLPXoBi3jUNerhE1LaKXPEsMxdirVRdw4WDaKsnDFjFELhi45aTUj",
  "key22": "2RtK4QxYd1jArNrNTTxRC9FS9fpQUE7k38jVtXCkFoBx2TRWYCAFCUurKtqse69XAd45DL83LssENgtYRriY8vBy",
  "key23": "5f36t78e1Zj7VZixxjkkJisJZdeM4QXXDBHSsUA28mdQQSy5846bRoS5gCnKgxkdrtj3FzXgAHoVnWz5LVrdJrCN",
  "key24": "4365iScrYK84PaWqnvSwNsRB5qJfND2mMnLK3FgBN4iQsgCqzZdemZDPNR8oHpdBotSBf59PHh2KBEr8kCGPNbcu",
  "key25": "TcuJx6yF38xX9ufjotMtqLuRtjQdg1AduTbMvpeARpXyA6TrpQJ8QWD7vnoZXQb2jLyHBbCpZ85v3w26q1BHP4J",
  "key26": "2SSJkMXwtpNKbkfMrSnPLBJzn66ejQr51gy4UK32nck5dzgFajVsSNFc2VjN2CBRptrQxQFHwQH1HTZW6oNvxEQS"
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
