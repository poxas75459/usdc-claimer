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
    "5Wpobq9S3sZovmpqmVekZGfJ2QHv6ca4NzZof5UiSb1JgFbWfyLQj1HFhZDRA2enfsGEfctNb9dP3aYyh76hNbak"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AqSrSLGaErv7wHsoLC9m8csLspqZSVPwNfVp74PgkTAo1nPN4hNKtsbjNSiwkbstLXbY3qpTS2RRs8mBicyS4s2",
  "key1": "417D1zj67Ld2t39CTN7hooEtnQJxVgqG97rj8YXJgpMuzuMGj2z2UqG3bBNBKqVfjZx6hqtvn27cpUY3PXnJrbsE",
  "key2": "3qxCHoqu6AeK6297gKQScGyu7NqthEve5ekAKt3MVJnJeZznazKk5ntqCuyGHVEwyJveBpgsb2BRKXpEEHsrk3iW",
  "key3": "3nHmxnPjnMwHhAxixoono5DSWCDmKmBY7yu7GBeUUcSYPfaeSpN7zMwmadEdn2BorwzGavA8M2mtgvo2QgJA1KJe",
  "key4": "mT18skbygwvSGpuSqaoFTc6wWZaeSzpQAe4FdUwcCAseuR8Y7VbdFop4AQbkwdFnvNpprrngfhteD2rP4SkFKZQ",
  "key5": "5JGq5KmMAg4g8jWnkc8VzuZbzmJTWU2i2gR1Rs8ongmvcopkHhq1fkMeg9ggb6zYeFj22XBkSN4dETfbQAtq89nW",
  "key6": "2FbWJRnzTJhS6qsM4NaiWquw46aqAvN53LzumqAmLSzCvm9CR6vypxevUtGnzMLCKUJ9u8pXLPrKUG9XbeGLmH1p",
  "key7": "5D4hm2PPBbrKhD8Prhe2SURk3cRgcbtPvbqmcsBieL47vBjvCgwLEDxKwjvkrbm7bhQFQLMnE93fB11WCgCqs3vR",
  "key8": "5qQKzf2JX4DojKR67wu9H3kK4iaAHGJJFoCQWbPmQprCwaesjKi44gRN2iYsbLSDyfvUAjd2U4XbwfD22iDeouzs",
  "key9": "24gruGMgmn27N1tVx3vDvwmYtG27zTYxHwj4S9UNEhndxyTUqsH9ut1TKDak4wrjMWWUm227Vovk7UieWumD3wEN",
  "key10": "2N6sDqTaXu1sdtBdkkJaAhbT4dRWU4bNWQKYXkgYXFrwUnKSiLrjYbnTncCf4jFR63b6c7SgK2dVRLHejP8YpGpy",
  "key11": "5cnJCnosDdqacXwAhxaBbhsSdS9B5FqVWhzRAv2D2PrkG4HMwtCrLydNYkpRV8EZeSc7nGC9DoV5bVpAmcEtLM7F",
  "key12": "4vqEAhcNBDsSLweyeq3caav33hHi67wxNMTgRTHUpHnsVHMqDzpYH4dUX5V1eh9QJGHjYJPZKitXqEhuLDwqKSAC",
  "key13": "2hL7rryXoHjDrBMMEnugS9BAGLSou3uo3BmypHyL6YsziRKLwNmTRf5rvY5vUNX8yJcyNEfjN5v8Xwyf7bAxrw2A",
  "key14": "36zn6VdzZJGV5cqwcc3aRYhBxEyTZV8QYVDgh8MKLyzQYK8JK22FEcPmfCaXv9iPpoF7ziMk7CbqSNH8WH8JenJ7",
  "key15": "26586KXRATKKJamUmyz3rdHd1FFZMhLJVwpWNL3gXChBQth3zUoEnY36yWCZhJjZb7Pos75yJRZpRwfGAYzEycfr",
  "key16": "62T8hb3Qpp4HjbQS6HaNtyvuT55hSh2jjBEMZHRK8tomEhSb4sAh3SphN9YuMoniaLToPN66PNEpwJDT9Skqibfd",
  "key17": "5wKHXa4BgDL9eb2AdSBHPBrCbHxWk7gPmUvwXykUu4RoWBEJ7tFQPou9HpefsYW1mnaM5a7xNTfgbWPhuKseH1rw",
  "key18": "3s8QsrfdF62z2ZvBpWafysSYRDqZE54qABoM8dj135CcXZcwLQv6oVJfQW5KpiLNeW5NvS42xgC1tdRy6RRBBKKF",
  "key19": "4cbUHDjbhV7eRDETeS98DH4usnnGfqQ91BjvEWdXWfU78V3EsdtYmwPMega73316cByS5BpHD9sj6URbWPykWoNv",
  "key20": "26r3ed9PWdi5TY58kpdvybE3uJBqAnFiAFr8sL4x8ZTfqABqF2CENaejBryDcAuT7ZzkHy2ePgkukBnvfop2aWdg",
  "key21": "4PctZ6VSQTy91BnMcF1Qqw5bSRNNZzdMfwBLr7ugunFCFijaxJ61nt1HzbnivmQ9tPjWeiZHDd1YJvvDoozhYepf",
  "key22": "5fR3fRPNYSDCbd7XAuWG26S98SsmVqXtYDj9DyHzBhgkgDvth5siZV5BSYLkXcu7xuZhjt7C9dvHEpid7ifeQgw7",
  "key23": "5gssoJGuVeQU54r2o2Q2shmY5mrVUyAdf3qeYrihenrFnfnJwuAwn4mtpU8AK35HMjXb6M3n6ZX4qdQ3jkx4x4vH",
  "key24": "4CU8nqKiBoXJVDDFPPbcD3LRmvdBSrW9DZpYR4sN3eiQw67NMhWQKebeKeiBkQQdz9Rm2xxRTJ5mt9g61aDwG32U",
  "key25": "2PkLUADXt4fuiYHH5ZmkKxxHE5KfKso3xEBghcGL3M3xn4kXrmfnTtcWvXQtJ13Nh8ni6Na2cb68Bs3YxTBHTkiJ",
  "key26": "Zsud1p9joPZEWscVJWge24BBPg4zw8YahWrvipbsm5rkTCpcxYq21jwsMFBtNRmcezdG1nSycwN1ZdPqKpbkJk5",
  "key27": "zkNkzuHpbHov6aHZ1euNHXWFf7A7MyNZEEdobfXiFoLGphfMm1mbZKUb5zxn4PSQtWEooRSkyom5LzSeUa93Kiq",
  "key28": "66jTvyLdGnDSuNJZd8nwNm84FdL7Zu5DRTxKHZu462Z3YMVvRgnzpQvbT1ddv5kSTtAVktdLtxbfT7XCqwA5xwTs",
  "key29": "5EfLdM9gAqnn4s29bp57UgMjs9By1jk7kAUsUdhYPdw3maEgi2NV1JjMcJTLPMGWBZ27csQLYEy6woq1XPKs3562",
  "key30": "5V8MT3dNnEikzHSqWBkZfFrmasWuiDMWewheVsCbJa6UNx7DCghxVJxByvF6ADRr5ipAdJ6F13wLWynmyo1EbRVu",
  "key31": "4FunGfgf86turkhACKVCMtyasRff6DnfhNPhE3fzBii11sSRtNjWuY3cmVzZoLznJd2HUoUSQZXxhYA5pB8EsLod",
  "key32": "4TiYp7JUhD9wzwqzzQKKeBcEEHwRhWezNye5zP9Xi5F72ww9WisV2mN3yeNLGbznSmuULrbn679Tw9qs1s9n7DcE",
  "key33": "4NdBpGAJdcU1yfrhwjc99nbq5A5uhGTGLf3yDNr1sK46eszvgJ1YA5i2G5m4qC67nNc4tcwe6EJqAb3PYNt8TSgS",
  "key34": "3awZH9fqhaBrXFLmZCDiuCMB83jXxXqNQ3scerPtRQxUPJ5bSN8QfSwBDRZAdsdmpKmB5xog7DYtgyfMgPybNZHu",
  "key35": "4sE46NWDeeiqx6XdvNijzGWjNgtf5AqLDrMFddQLZLb1oMKvz8URahBTybQrCvAbYvarXkuvJ8odRG6zg8X8pVVv",
  "key36": "5eX1AQf35nxS97QxyAz7RRCtNU37PSf5xQ9c25nRF9GU5JnhN5QrmJP7MnK5uEoeVmVY2hQnygbXoL3nwcNa9YhY",
  "key37": "5UiJ8zg8JtJEYfE7Xiw1DnL22j4FoSxr8uhKM7wpmeCm1oHgB9XqtCvMmRbLHeE2FGpsA9K4RotgpNFsuZ1HdoWq",
  "key38": "41Q4y3ecEyNqPxW48x1n6JYYoeZznenCzG9naVH4hZ9Cdpj7UauqeLB6uAQMtGxBuV5rzeXtE9yRWvK94NA5Cy1q",
  "key39": "zLZi37Xd2EKUFn2fejJEm4twq4MLeL2Y4utGRtz72JBrpSRjRUxEv7eaaXLEEZLqnznv9jrwKEHBTuWAHcmYEzP",
  "key40": "4qCAxKKUZjM2w44edoEUHSwUqTgPT37EMVp8kmQDzWow5tQe1dW4XKNaiQMxYmGtMBKr8dNMDyQJeg2DMUfsQzMv",
  "key41": "3d9HhMV2dtbeuD7dRg8eGuxFkGMfh21EoxR9oNub8DQvujbj4puPTsxMEgcjxWPpKaBNBQhzsPcYBByCHCHkphNR",
  "key42": "JEj2KNRLTLeiQZ5redLVaE3FToEjGqLwUmi2brBm6BFLCK4Xdxb8kNYtrhAxaWXoaEuNbNALyk4KvK3fDk96PxP"
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
