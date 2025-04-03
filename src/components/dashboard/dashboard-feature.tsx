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
    "559idVEwKWg24zWwPK9CT5h2yKNnddtCKPJovVTgkjA1mKMbXBw6ikKzjRZwrQanJ7HeVrQVhBeGUyT9C4UJckyX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hqxf17uVB8rQYtXttB7Za7x2iQjsgL7GQb2UX4fvbrn2tbskFCd18i3EAfpvCUCHNteNTsqwj4FsEmd4Q64aqdu",
  "key1": "5m9Vmxsasji59h5em8Tt2dJH93xNqoPjFS6EjBinwJvbPWpRqqS23eQ81uF7hss9gC8HDVbUVvCXpcgNbwPw2YJP",
  "key2": "2GjoF4tZcGKWDZrRa2fvQBvs5Z8EgBPPV3WEbU64PZye1bSYUBddDpBeTbXcEoSnbd3zAJuPkZ8LmeDLfs3QVTGf",
  "key3": "3rsDwKa61dQBZJE1afJSdJT2EEGYGKGB5tLoe9NJbHvWeKjjn1UvCrTeZu2roTZoXuCtWgPUvAgYZDHXTShPxPv1",
  "key4": "zZXz4nWJH93YHbEA3ZhD4m1Yi7p3s9nHeTGF9wfJBNpck82qa57Z5217GjuNGVn9V47pbFYgzpz8Jkft8iXEHtJ",
  "key5": "5oky7U1aGJdXTnbB8xJ2uf38NbQHZLhJ3bfxjXpPArDMK6F4kyoZCruebUneHeXQJjuyrCfh5vCdiz6vnsuPMgia",
  "key6": "3VFSmQrRFUAWHiRrb93e4rn1XParHVh9HeLp4pggXFQkeZ4e6xXUYxUuMZeM4iutNWHwNwMNvG9igD71BMVajfFY",
  "key7": "5HrgzUVkhdWiqyzSpStDwo1MtAbJ9Etv6aTcrWVhdYv3bNzDDHo5bnXdy18m9rqPQRyMm6HThdstTkr9UC4iqh6S",
  "key8": "3j43Y4EARLJoqmexB6wyijRHADQ6xqV9savMbgvN53yNzr5mt9mkWoysr3iwQVFRFAU27LXPHNqUVfoixerFUq2C",
  "key9": "4pzEMgTV4FiLijAa94NU3JtxsHPrmaZrX4H6MUL3cbYH8HugFbTXdMEvQCZxKavpStHU8AzCYRj9ReXJ2wBydVgZ",
  "key10": "3AfAGWx1YRZMVbb9tfsHAPDV39Jj1iPsibgsXPmG2Ef27KE5EzNmbJs7D9Jn2LveXvkuyjPDn7RRwaEmEjxk1Jrm",
  "key11": "4TTBpazWdC8KyWx9cb67Lae7BY1PrRwRKv1haT4gVjro8o2YV9UACPh363CHcjxnoenHD7VYKPow7CAAijs4ASPU",
  "key12": "41qSo27xj94j9X6f4n4fG9WQxBhsywT1Dw54m8kFrtRgfKkQSxo69S488XiReGgyJpvTgFD9ZsGc17xnETJuUDXe",
  "key13": "56KdGoSSbVEH6XP72u4VxVYjxgvxZ5ki1v8Dqig7pLBFBWkGGLT7Q4kn6Zqvrvtt6VNY5ZfSH243WXUKztSxV7qU",
  "key14": "ZebXk5hEvDaz67LZeTeHQNNH7VNZBpUzLfZMxofdJE7KYir9iw1p68o6aPMzFhgzsMteM4n5JWF5ED1MbVeEZ9s",
  "key15": "5oQVbBoBGuRW5knU4yY4toTV7X2TenMfoeDMXCeRpxK8uEqvNUkFSovgzLxFsY17nn76vevSzp9kWNHqeH6b2P3u",
  "key16": "34TYVmMjRmC6gYFsLoaXBu6BcL2B1d1FqVNNnhY8kXLDfpAWUhdc1GtWTyzpNkVdg22ni5CLerVJfqX9HmESCNk3",
  "key17": "2uvK2XTrhh1WcdWePhP5eNLbasNcuuiBjPMt9fU2o7Hs8m2U2tJTXDabAKn2pakaDonTYSGjJiCGgjPPLLhwaqWU",
  "key18": "4EdWuWK7G9eTSomUocRXKLNYV6jRGmVZMDWMGpVbFeAr9HjDJVTwVBNAPoBYBuSuernip4pGsdAqMu7osQkJeJLY",
  "key19": "2V3JncyfyiDU6DqN1XGKuH439w9QonAKmAbqpQFEV99SKcdnNcc36noYZnx7oeB9zBPzNWxRXQ3NMiryFHTertXH",
  "key20": "QhqonAKYTbFbmkBJ7TuwTpTGbfbxFhgZrGN1AGH2kLA2XZLA5B1UqFbSKr5g8iyF3FoS98aqX63MiDJFFFvZy8L",
  "key21": "2jMKS5K2grHsLJA9pANgR48unGtFsutUrbvuyREtdPBRS62H1nuDXkrDF6wqw4FrrUC1WPyCA5FSR9X2Araq1B2D",
  "key22": "2k2ytYysCuE2QqZyQqkjq7oeoKpYAUc4pPpdoXL1cjCERUg19avMjNdYFrWRKQyufgJYyc2dsEm2yKS9RiK2jwKf",
  "key23": "4XKx1ukC93ns7H67tLa9qJ7mrXFE2btnRxd84tzKtT2QZVaQncLARhaX8F5xTzM9dMqPNgZFZUMX4A4DVke3uiAR",
  "key24": "2ovpwUGbMNVaUurokcQcXsDGHzv44da7MJunNhpMxnqT8v5gw4LohnyRh8Jk9vzJhV2LDcogEDrfyCntmSuZTFfA",
  "key25": "3ktd2Bm8T5P1pXUL3DHmFHcVhdTbbhpGfqYnuo8GZvwgr32wUiPeKNwLVp9eyzpJ9pXYf4GyMYKS9uQZ3c94Lgic",
  "key26": "4CQFzCbQi3mgsZhc6dPmMVXJfFUvm9HPoARyDD7TwFNZ6TSqWQ34YS6kMFaCUkSCKn4dQgjg4qdDaWjnkiNhzdb9",
  "key27": "5BaJRR6oz9dgLVETgpWxFrPPY13pVZraWVQQicoSahPUfDPHYfaFKX8QREKfFHaeQpwSRXGguVEGX3LaGpTr8fT4",
  "key28": "4qkwDqNTiXLVt3wSAVeCeEHJvxAHfbc1A4Ym9RqXKyoigJuYP4z1YBb3A45fMjU9VQCeeEKr7GdTq26fcouP9rsG",
  "key29": "5adCezwjNjLbuWndKbP12h6ZoNQNtdaUFbv1BiGHnC71SdS3g1bPrhnkV3BfEdnFm7kMyBcELW6HLcEey6Pwb54D",
  "key30": "3hfX66h7JYbm7EFv81Wx9ysou53qqpw4cQxP8nXf2nCUw2DMN6xtA8T8vsHgsiDPvxA62yuP6dYYYXqinhQs4aoP",
  "key31": "4kwmtmmYMteekFCuKF3Fo8RNLdH3E6A1vjqp1LikqAgBqkanionkCcyaFXVVRXMaJY9jPcgb1tmfNHi7KniWdddD",
  "key32": "4jNNhXnm5NMwE2nnAJDKeoqXYiNHZJABShXZpA8DcdYfrAjcvG2FoqoxAsgf9snkmGxzL9EWKBdQvzhTxAvXyUwL"
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
