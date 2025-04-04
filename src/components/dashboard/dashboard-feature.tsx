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
    "2cACZGbzQCjQXVA3odRzeosrLu1Qm1GuMYPX3WYL7nmUQteWDgiibLbfbGAFpjV9cxdkYCgnPyxML6Skjs933WVW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oZ1Es6UJ3zZ2zyez1vJENKzQchxHxHh2a1ZgrFHQkQ7PjY2afJqrZGU3pWrxqfTXdjHccZiVNVBMdLHoQoC3TMT",
  "key1": "59nzHYmQpXgRncuQrbikyLYQpw1S9dSQzUuwxsYtJXYjjmtqqSkwmzh8Z3y66SyzjUSJdgvpLs9jUGjpE9fKwHPK",
  "key2": "4rFwWLXSyahHrD24rNvSNFpU9BgK4PeKx7xZJKqyBFvo7HLnwUpRK6MYZu5nU5b8uUw7LdRUiyDWEJkomu1cqy8K",
  "key3": "3v1AfKbNzDgzWGRZdR6RV6VXdMoyH5MsLSocM7KTyF7YBr21WhNnb8Muvdj6KcDk28y1ZSGEY38rUMg4c2isCL38",
  "key4": "CQzcoj9KpbSF53y5ZKMNXbAGiBk69hp4PGwqvXM4HRYFGwKJ1xV1zLKhGLQLhxkLthuV1jZdDt6zZirSufN9k62",
  "key5": "5fY1MvExUMfd2NNH6MgV9BZzHRfsxBDmTrwLsqbSZJE3bGcQ2bDG6nUDrLch5ZpezmNU3t9YeNHSN42UA6m8kLjJ",
  "key6": "4FPaKxaggLYtiAYwmeB3dJta1XguhD7LwfGGoLF3u6rhjneTorCSbpx74iU2UrfNUNrwixs2thj4xFi8yx34xAr8",
  "key7": "5NDRLfdppmGFWBRQKNaFgn3xe77gWXAzPU9LWgwxRd1Hx5mYn89TomfnMZEDhEowZvydC3MN6EnGrSHa2fBW3Scs",
  "key8": "iJyvjfqegYj3apyUFB7g7LzFxh4hb2GFSRQQ8ckD6tkVDoAADhQhiRWjodqH1iEbmxG4hQh86DxJyiRRW3Ja74g",
  "key9": "oXVzQH5jAD5UiH9K5p1fHQwNFB8atNoz739RL6yUqpgcFPrMGuiPBr99JLNHmeR5NG2BKhBtrGtXtVLVWbtA4pt",
  "key10": "4XiQPdXDGKFjxWonjYyNCH5SHnN5kadZK9ZJuwprPTMntxiSyTvVau6qkk37Rup5adrNY2JmBy9PhC19pS5UGhzF",
  "key11": "3RKpeoq1oz2ozrq12VyL4nerVPPQoduY4SpcFZZwJECjB1n6ect2Pk68EWeyUBTwBXk2N1CjV7J61cgApmrg65aU",
  "key12": "3CzLHuLjNLpxtZTXSQQXy4qezmCZvT5BYqznP612n6zfYwuMxMTPiH4bNGy3Cfh47e6QnBFhhgdr26DcPXCJBVY3",
  "key13": "4NFHAJcxc2w9tDUPfUPXSmD2nwdPLQiiDUjM46og4W8p2fPt43fdPAJJLpRcDK8Xvu91nX2w9HfYmVQn4tf2Tfor",
  "key14": "4mjAPNC7WNPH59GxXWXz1q77j5LduWQAxyR84Zbax4i5RkWAjTuZsWUrHsdiZ7YTr2B5boemrhijN6p2YR17eEUu",
  "key15": "3nHC6YYknTAoWdfZ9x682UC7UXKVUnXLK5CqryvgUjVBUkJJQ8QB8L7rzmpU9XpNmP6DNiBwN3oEsPMpxojcmsr1",
  "key16": "3Wzhchj67S271BY2Tfvgw2rD8T8hdk7Ji6Z4YecieLTbxRTf34jM4AcFcKwjMuehaWEzRioxvVMugNh2qC5zs72s",
  "key17": "2CuXzd25PQWR89oq7yi7kC8fU5PoBgfw8Q4FVmsLUzDKPMvKfqYQtK8bKX8kWkpazNCugynJVo4fMqxU64L8hZFg",
  "key18": "3oV9KpPzciisXmrwwNsjA6yYQCzRU77NoGKydm4p6wAAf67E4snn7KHeML838CckcsDzuDehU2UYkv1r8b7RrApM",
  "key19": "4SuMpvv1BrSt5V2TSvog9WzofjbvdTHsjVCWFtSQnzQV93P6NtG6nPQGzV3Ryfxkh1h2pw3aaGZvN98gDGcZTzQy",
  "key20": "427TikUXw9w6pgcnwiKCE7KFdziXcS5VaqE9etQnUtiZWvUQTqYZo8bHbLy2ZpdVLbWtnH6tNTC3zqsd239nfge8",
  "key21": "2bUVDQ2BMHn8w297ysinCnLNrXJP67wdYDdiefmGWHYGD6WVkuBMwnKHGsb3yKJX2EnbWCvWgjTLUm3LMLqS1QuY",
  "key22": "2iL2mhkRMJ5ByQcMEzmWxtQj4Cc8swUCmNNfjMtyiMMyRwekc84PkHuXcW2QJgevh6z1VYmgyZbzCsjDopAiM74d",
  "key23": "2XDARXYy6yNAWLvwYdjfEvZNdSqZMU8A7t4nnkno2dVcPB2uykaiwJWMvLaaoHYiVoThSTFEVcfS3wcTCxiEkuPu",
  "key24": "4QeBpL4r5Q4h1UJzaHYHn5Lwz1dVFWx4ddcjuL3ZxP93Uy27wwa3bbt2rmqwc1D33NXZnVVrNRbSSL9NQEQgBJ5Y",
  "key25": "52MqdGkLxZgQXKfeZ9Bu5izd9DMWUitsLHyNbkiJ8e3Q6i7xjSxPLgNECkjr6WEPtY7GuMKCNeopbeuAMwoKVbzH",
  "key26": "35BZxD9iZBceptxTGVVB6Xcco4JYyYb1eAQHwTEifu2sEyY6GPGLgXo7TNNRzY96LnzrGtZBJzViB7qcGth3aieZ",
  "key27": "J8KtcMqcxpwXi1o9fHhGDpnYWMWWkCcn1rBrrJbZ3Ub4eGwtQPvSKay8a8g2Rv8E5qdKXebXhras6HJFxPW85m7"
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
