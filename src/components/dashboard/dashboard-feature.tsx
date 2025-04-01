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
    "EuHuN7EdqFjUZR38hQwPm4B2PN5GtEFS1j9EhY5n8iRDB4xCb6x3MKXwQLTMWXhDN1Vd3ycz9ph7uprhz39aytF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bVJWQV8FUbTb8SQStcLJjZigkDSJ8e3CRMpM9HTYEftH771KVtLSm9dhtJQYurFXmFsMfou7gjSyQkPA5rpwitR",
  "key1": "55cdEzgMz2nSso7BV81XpW2fxCpjCg4bkwZaq7zf8GrGjGgYab1dGJVoZ2n55HpPWxkX3x1ZcnEhFVYDH5Cv6cLT",
  "key2": "2hmtnM3emEVT5QA2YdtkZg28W62CRhcNxZUcQXhUGZa9oDbEFNA3DTo7gxHLF1DgA5mFEXrneXSVGKoUncR9T9Tc",
  "key3": "2CaZpxcsJZEDsknoRLh3jsbMShbrthqkT5cpP4eWQQNNhAAkTtKUe2U3vT9pa4VgUmfJhRm17LZaD6oG7jx5i9SD",
  "key4": "2qQ9MHPoHfCPSeT7gFZT7Wikj4iZXbjARX1ztns5t4disQuTZvbLuT9xXxwdGrt8B18xtVqcDGX9wbf15Puzx5Mv",
  "key5": "5ca27fhLRZF7fgjfL1EMjdT9HBf7kzrwFAZ84zBrUBSAJ1R8XYXm6MNMyJmQFcdkRYaS3uexuhiHQ9nBx8waJoro",
  "key6": "vSffsCRtQV4xhr33sPuJ8FdMRFXApqFkwoyjNcBepeH5T5HArTuBCtsv4pSzvTWinqYU7Si53ABNzy7KabRZDhs",
  "key7": "5SP4E13tWZfnQMxwHf4fWKfsYprPKdKzzMABv9hNBwEccgEpz9cz4EwiB1HsEN1SjcwpxocUQSa6kUHEwUhLhQx9",
  "key8": "22VMzqpbo4VGDDpGdozZsxqcBsJciPWuubxc5p3trnmg6AV7QGQ1HrjYvcuUohyy6PKf2iWebmxtXieK3bYWqvob",
  "key9": "5PZfGamDX8LY6kvBEvMbZ8xEufLd1oSLRR9eVH8NyRXt6UzjGWMrPZd6DuvDGyWtNqdRBhRhBrc8ZjQyDtzc1RwY",
  "key10": "41ngoDQJSLg9wzQWfQNMkyY1LzR4fo6MvbhNoWGSAbftM5AcK4GJ4WmRQA5xzuAx1XZEtoyGPimnw2izmxw548oS",
  "key11": "4DPEBiz6dwy2uvMBXbqqB7kNpaXP58DzdjkvHgmPUMXskRcn3xQYfk9ZeUiE66dBcybtmumL3qW4x2Lkh2RrzRA6",
  "key12": "8unQicnPdXJj9hhuVRyrBbRkwmJMe2Qzu5E2mrq1DpbJ1oyVSBSZcErtargAZw6R4Pkthnz2yFHgbLP94NZknQ1",
  "key13": "5opLnQV8i8PV3LvCX77a3V975PGTHYCkTH7a7dyM7N1stxaGpdeA1Bih1SBKiuvQ8eF3jydVjs5TdPinobsY6QUy",
  "key14": "51KVQMwrsyLEGkN6W76v8RMN5GpKg8kJNeW3Jqbwj7j5AVCCEgKcXQq1cGL8A64wScBomJeWmNPv9N5ocUyHp9oz",
  "key15": "2niXumJ7rykXY6BEf3mDZ6hKKv5c8pAj5Z6UZG26vCZavY1rsFyGV6KXT7Epu5qHk1WZekQXPqDN67eV4Cjn1BdV",
  "key16": "4AJ1rpCM9XpLGugY9WrN2DYrEksi1oX7NeiL9zm6nKW84KNVqPD5yLhAJeyfUCS1RQbJn61y2QbZR4XkjtZi4Raq",
  "key17": "3SBhihwpq61G52ziAAGBAmwEBKf7kRWhW6aCeRqM2fVhvk6oqHGDtFzWdBZhBbrHGkrQxMsy7StAm9Mu1BcpQnAu",
  "key18": "5UQJv8DSeCPPRSEgnY41k8XzCWRugHF8fMBZy9rmQSFHxhtMz5ABVmNKsTFFQLnjAxyxfXGfBryXEgmKCosNsDLi",
  "key19": "3kVHWaEi5VnyC14H5kP3fn3uzGp2UsfgCpUqUwEGtrBGZSAD4Q7zonjfTLTeQc5Fa5YR749EQFfmbQ8A9vxUWkjW",
  "key20": "3xuUsqQ8UiYEA47aB5F6B6iwU7oAdBjEaBqbNoHaa8szotGBBRruyk5kyQqkUas97tqKRKNXJWzXHzZm7F6ZSM4b",
  "key21": "2TgJpirqFmhqADxy8mrXV4A1oc2LeXGyzoQ5vqdHmKB8Tdw2xg93sTYBuajVKEmsvJ5Md6KcSG3VzM6zUUa95P6U",
  "key22": "5gJWqkut55dXH9f7d1ypQduYAW8FmYR9QoC8QRppzJ5WEDCtAdfjYnnW3XuC51zxuTriv6sGQ6wm3N1Bi1nnj8zr",
  "key23": "yqgnJrZtcBzjVpi3mvaVWqU4LU4Y5QH93vMmXtB9ji8bDGbyR5WWJ5qYc4n3xgBLekXQWs6ZHKQSj6LkFSUkcP2",
  "key24": "3cc4syekpdWGcEQLLM2JrXP1JrXqozKfnhD3tMvrUVn2sx4uEE5s94QgXDmZMBtdpkDsDhhaqd8A6uT2hiQe5ooa",
  "key25": "5kZZMN2uxqMQ6o64ccB8mMaNw8ypVX117qt4umC9CcKkMdFeVmJUsEybBhLNt2TuWDeh4jY2bsmb5BQohcQbsmbX",
  "key26": "2wFZtA7cKnAB5qcd6sru7CPFudKzqxfSfoyYM9kZ66r1vriCGpTwzTkitAFg3KEpshDdVMN4QKqMtehnsYztgoRh",
  "key27": "jVfxdBTbJfoaT1c11kDH17ti8DbqvF6da1FmTV85Zv5qitFkoJcW7ggG7Q4koc2qzmgZSiWbZoAgUNXubW9Dvco",
  "key28": "TEG73HEQDRF6H1jarrwaZqw4Pb5DLeRgecyh6wadjXfttCCk7Kavm2AKRZMWiMdXbhneFvbBbGV9saLKJvA8yfo"
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
