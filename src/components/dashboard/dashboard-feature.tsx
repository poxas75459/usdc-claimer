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
    "4UifBYCHYTeR3jMKgxuQRKaHGLGixNd39F5XaiSrWKUXbbguynuFF2MBkztgratqXBuDtUCpSSdc1NL6mXb1Vjzz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tj7vZwbqkQzKdr1JLohepGYRqSbdorYD6kY2bDnqEDA59KifhgwdHkVzoUhsQFdYczNee7wnXjw3DWrvRUKKcK9",
  "key1": "2bVMSGfucCZxfoeTRHGidgFSJF6C85zzgpoa9tsWfw32CDnQj3LhiJFXe35THKSHnCFjvLpeZNNz79qMBKH4b5p9",
  "key2": "38HV71bmgBRwP6Em7gVRSyzEJC2gNKHDQ2s4G7gJn7xwF1RFa4EzFBcm3GCQCPJiDrA5636DsS9qbahk3XRqQ4wk",
  "key3": "E5YLtKkJnBK8r8GG9kc3Dzebf4L5rScyFE6emaoAZNv5DrdScqUYWAhjwMA7EXWpQeNCn65HS1emAa6t1VZb7MR",
  "key4": "5W4D9oUbbo45U8pXRD5wSKoBvqW5GbGQprrWjsRjHnGMdyvexL74AFRD89ECi5KjAjZcKunc6YuPvafmXj2H5qEU",
  "key5": "2UUFTcK6PvBCfEwourgs3aNcwqGHcK5ot8jHNUnTFUi7mdFBnkvNUfHEL7ThrjNZz6TbpYGBSv4mqN6jowPaJjzy",
  "key6": "fthgeRvkaGQoVL58xhH8U22rVJfzHtTBsugcxTj6kzXtejxUK9DYoVWwqyS1RBv2FAJULSE1Rnf9kBr43ZDAArk",
  "key7": "54NAHnH7RpFw4SseHC6i496ARxBRM9pJNgryP5x3aG2qWwGyYCJc88yAC69w51iWEjL7pyiZ6tNqAWhWRymkqrKs",
  "key8": "kfSCbirGJsnQp7wxWRQum5cjSJyrf3UJTXdfhcLyQfXMSJafBbcc4VhqKW4uycZfoEg1F2Kes7BhsLe7QCProoa",
  "key9": "mdDx42RUWpf4JhGwBPMiEyorvMGcv5Ri4K7YYAjPMrNY421JCZjBcVNkqoH4s5jbTCFcxpqV1t283YTUD34deu3",
  "key10": "3WbmwuB4PjxbMCED2dFT6foYHyruZKh7S7B6L7RzMSEbHfcQ3XiX38yMHPrUG9dmUAjRjctj9DAm1WGvfM5S8VXs",
  "key11": "kW5QKgVhHprcH4NNEN8Y1MPpACHtbJRzDRVstMpTtHJHwCJXbtuDJd5u59M6s5c4AcQJ7V48za8o4RxTrxPsEaF",
  "key12": "3LEidQX1J1phbTkSFK5DNcECDJMpQP5PuysqPT7mA3qgzUFYvcnmKL5xCuRTz16pxepp9gWD7M3MC3nUgyvd5YMv",
  "key13": "2EfsMttMyvKc6JgiaZuyq2yvZ5mUZ1B7oAsW684vBeFB7htazB6KWxbicpZ4Qgrg9fh66g1vzpdfmdk24RgdoVsT",
  "key14": "4gZztxJFbn4biX2A1scBXXiRAUkkFTJfmdtDA8ybdxRzUnTKCxfvvCKuFq9suu9yihzwAJVPyByGM3ruwXciaAdh",
  "key15": "3JYm6QMhKD2N7Ywz4SAVpSKBHnbDcL9KbTKj6aQqTPcpxgd2HouCWPqjgzUhzCpguvwj4oSRT7amrn9G2HXCaqrH",
  "key16": "2SyDZZu47xHjb5ANMiyYLavm23Wt5x7mv7s55DioMDHTKybQizLaa5XyneLHUWh1Vm6EV18w7XFcSUXp6KuBvewK",
  "key17": "2AKZXbuqHSsDAJ9m8FDssta1jqxPvicCgs8i4a5uiahdaL6nupWitJJMW27yXnMtwvfdoyKHM2aduunUz63dft72",
  "key18": "5BibiPX8N5HWNVZWr4Mbn7rnuLbiZTEAdRUuyC5WSQGj1qKhZzwKYb7UPLhSUrtMCqpMra929me9dmvw4arfPrsN",
  "key19": "3pWTvUj7H85411VXLfyMLuaBKqTEzstR3fxF3AZ997xr3moFc95CG7odihcZDamNtM5eQhh431k3x7x61JxS9rhM",
  "key20": "2kRLdJKSYtudcNB4oR2oqNHJkDZV6e15f1aSt7uHYtuPxpzycfFyp47DKyXqtS81Bc4LwJc7Dvj2QVDsco4pzr8o",
  "key21": "44GCGsTtjC7R1txx4JKc6MbrgoBi97QeSAGknMnUYJWMk2TCMXRGx4rRyNfafKoeDySHVw19tKi2M6fcYo1msAK6",
  "key22": "4urHFnBJ8TDh5yRt6RNV6ovsVwjwu9e6n2cCYnn3mMavw7madXyKEWwZB7oESA6zBuXEGkL3yP4sAj8sM1FXofM2",
  "key23": "WynzcYcppvxdkKTYNw3DtsEbtpzBDz5uypKmWRgeWE43zEAai5CUnSH3EYseD2XatQhDxsof14KRCdyzf3yPw3v",
  "key24": "5wS54rHLnM5rVvWCGhJy3Tqz7CJpXovcg597BunuXJNkU6MewW8XDQofgMp5RquSsctBoZCd39AeB98ZxHtEzhPg",
  "key25": "5PAH7Yua4f9FRRcRXzaVX45rNLmTuFQ1ZFnism9KyLzkHGk5rYxskQ11DrLyVnERzBFHSQofyJKNZQ1YC3qUGMzr",
  "key26": "obe5PnX5QF32F38Bu6TNUvDqBkJuE7JQkWbhxEVDNMjoWDWsGFmJFN47LmoeTVy8CggGsLsJ7H5Mv5nf4TQb6to"
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
