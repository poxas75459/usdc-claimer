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
    "3d9ewcpphKiMKgsQ4K6U44LnkqVoNBoxGehww71P33KGguJcfCFpRrWdNjsanpgUbC2XD2RyzhXkbxUj8nyzWbRV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NsWhZzvmiagwBDhxhKfsLxDcLESqLyK4qiyxYpokrGa8XxicAF8JYTvy6ZDu8Zg9hvXHyXZe6Xsp54FJqFMoenb",
  "key1": "2i51s7FkKPfqpCzpFKKfPTheHUYq5XFGCp3SYTK8qVrAV1FkhMCBQrfE7JcHmJR8Wcyxv8BSRiFjcPRAa2zGmB8W",
  "key2": "3KPk96TgWyvaqt3bKet2HAsUKgkeNCjgnzR3SYRAEHF8eznNfvBo79hLzasJGJR8mq9uQstSzsRqBgFawZ5BBnPa",
  "key3": "2YR3JZooBPwcMp4jDhSZFi3Kywpd9KZBzpWqdK5DcEzYiEERJKaY8D6EFq8NoH1Vb8yGAdbciYMtCr9xiJKiZMv7",
  "key4": "34jx62nDE3L1KatqLXyjnobnXx8mSBmYtmQAksiz4LxhML3aukmHhdsuj5ejcq23GM3X4m2VPgtcedcxP4mjEiUZ",
  "key5": "34n7M1mAE9bRzCyHdFsAH6tJ46UX2W19b1YBKiSvc9Tg4CiGGH49Dut9fyKrXUNG9uQsfTLLrLLcAuL3yVvhfDAb",
  "key6": "5d7xWq5pFHYPvP4dgBs8AnX6AqjZatJLwvSYmSRUqoy8gWjzJbnMcTVLXbpFwwNx6SegV64xqji73mjkzKNTi7jF",
  "key7": "4UGG7BHaqQhGT3MvNFfy7mCQXyAhfmBFMKRvGKvJZ9UoknXBegASp7Rikia4cf1yDXcJ9fmjwjVR93LLoVpyWKBL",
  "key8": "2dTSDRiFKPLaziPwWT96j82pj3qZLYH32phJVibx9kmR1wENTE4qEecgrGqmx9p4Q84EAxep3ieo5wRn3AeZqDWe",
  "key9": "CTGo2fbmLB6aBsHhg9teRRmMvfhEwd8rst3Ers7RBXpqoKLtGgA6KS3EopzXDQzZpauDYFHZNpzXFnwLdNXg3VR",
  "key10": "28GwcC3TJZ1PY9Tp2hoiAzc84QtADsFSvwDZJxdsJNJCK1EiQuaEVvyneqweXopjLnzkkbL9ySMUf1G6WgTR8TTR",
  "key11": "d1EXY2bFaSPXWBH5BJ7XbqNXs7mva64rpKZdNUju6qB2EHdYEMgTkkHrN5yYmQEYUC8thJHG2VMRfQxTxsYSZRn",
  "key12": "2xn8aBBcrWrsqUUGHQ2jYVsPb9fyyC1vn5W2HftpRJHSs2s7aY6RgQu8GXVAStgTMBStKBsiadpKxhy7ighBzcSn",
  "key13": "bafTCYj4jbADcS1z5tQ89iRxiNr7HmJ1U8XjuhJiXPhwZZmCQ6PHXxGYB1MS3xWWLMPMH99oHAFucKxQZd5Cz4K",
  "key14": "42NmddVgLBTYVc1Jas6PmcDhqHQghNA3BsnbQFi4WR6ywStk8GXGxY5tBgTFiohjrXm5bQZoSi9WGLV88UkeeujU",
  "key15": "27gChaT2a6YYtsQpxFGCTzpzLKDM9hQgjeEaYigLcGYhi98XSNFwy99nYTuw6nqUcezGGa24S9MGm4KkBDFbLp9n",
  "key16": "52WLFkL6N6PohcJyZkMvL6GHsM9yXGrHp9hicUEuKZ7zkvYNTSJmRwvVsHQWDiNNsryt5hM9cyu4FgoFfJRkNZ7i",
  "key17": "iikBJhyrHxzrd6D5DPNT1jqmaCF4FUBBW2mq4BrnmD9rCam15FnewyUKY9y88f7za7PywtoJhhyigabq3rkRHBe",
  "key18": "319TdtyhSigNSwX8nHMbZbtaEWgPTXnbeevv5qddT1WpkQiimNJFAQ3aurSDFeTzE7crPPyyJXQv6E1PL463ENH5",
  "key19": "4AiyTtdQ8m8b5C3cymugK6MmLShaM1ioUpRfV5y1WEWJxtoDm5BiafJrTjSZPJfQ8oEXywFhXJe1oMCLzrcjVQNg",
  "key20": "2CqmV4K5129QjQ3yDqVpGquwLZ2Ggrsu7kMjHuBD3XdB6j5KjPDJYsR4Lb3GLgC756igDo9bpJWUZAk2hE8v8fJi",
  "key21": "63QE7ZXDYKaCv4G4CaVaZkbv8oWGcQkmMF9dTithoDKQxTM5uB5pVcxw8SEt9HZpUUJgLjKGQuy4NQ9fFN5XPsZh",
  "key22": "2oJ8KLJJRQar9TsaHMNh9dkeTzXqYZLzAnQFRm5KvdMFho8bRgKX6M6yvXxa42aarUXAkZ6GLz3TP13ijwZGLSzA",
  "key23": "QMciK8qAKwgZmuhfPci9ikXcMiFz13WBA167Mr25S7FcYS88LMt3Rvz3AoKUhwKmWnhYfhepvVNAeSTKwCHhM8n",
  "key24": "2zqbESkNsWRkb9n8o64RsvAUMWB78aktHP3EQk8bWu3T23ZyQSt86jrVAUDVyjkW4GMDvCz3QWy5GdBo3Kh8c91B"
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
