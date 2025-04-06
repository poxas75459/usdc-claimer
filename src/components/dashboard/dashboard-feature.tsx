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
    "36sqetaiLAykGS5na3nvYEx78FAk41Jbg1S3HAgbP8mFm3MDXvkZzSpmqMECuHEjcj5aAuLodp5LfAQwVVMB1dj5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v1uhtymS2xr3hxUV9VHm1Hu72ingoSVgL18PxnkxAABgjSEpqKSTQr16VdZDzTnv9iF4iGtSYtPcWLJR9p7ZUnP",
  "key1": "2iYVjd62ubLsPsc4aY3KQGwH2bZJJXbH4YEVDN2iCQi1JrDMGMo2afsSgZ1jVNKxaBLvjWCgQsWw9eKtHPvfynrC",
  "key2": "ZFxFD1fWbSFgFRRoGyvYfYeJhxyLEUJUwn5XHyJBpZGWTe3TQLSUjxCa9zRYxD4cA5v13b1mo422vWipVNvEx5i",
  "key3": "3NJ22EPPPmdxS8xBqiCAT1t15R7QAMNogmvYinr8SiSEM93519F6y9DhoH3pDVGoNXq41T27xEVDCKTPtR2fh9a5",
  "key4": "5DAux3C5fEKzEwDNPNnbL1AucfHLyVR3gRE24MTuZSbTtbYHfuzEEHGTE8ajjUqspr55cHEQNS2Nw1d8kxVMc4G4",
  "key5": "2WhzA8Cr5ER9DbNrMEyPjgzhRSXmxQsUm9BZvPU18ynvzXNfbKunV3kP8PCox23EbGcQQUdC31yLeyEe7tnxjGbk",
  "key6": "RjRCPHeQkc9nAwR4Czc5BFp42iUuikGzUREBae5RXRVPMX1sRyLgMWWVwuNF6V8bo4Gqz7d2D9Ghb9fURqazW9N",
  "key7": "2b3zfyxZsqASWGPzh31zoya66nros9JUeMWixKMKjYGKnKkry1pTDQTruSsryB3tqspVAbfy688f9m5eTfZtaoJe",
  "key8": "33QHpGkhXhecMXMUoNkZwrpixV2ota7BzTyAaQaNDcvXoktsz5A5CLCcva44NjY9eXdnJ7wqrCSwvYjLYXLrDCuE",
  "key9": "2A5yh7xgTNbckmgvr65F2MabdbFHNPdfKQ6bUEFaLaAqBVdzbeUV3SG9u2gXBp5LzEmYRxvRAeyByJTamJSEiW1b",
  "key10": "2GtJZE4n7rCFd6dYV7eKgd3ZeuhUK41zcEB1jjStNBEa8NtU6FHCZb4XUzhSFcjJBgir2atunz1VMQnta3DWbqY",
  "key11": "4ujtKM85MJep2C7SnhQKxCCuy4CKhu7nPasXHqnPoafrNjQGYpqK7iHGjpYD5d4AWHd5ppvgMZw4hhdrE1zFvG1N",
  "key12": "2QNjt6XBpFLtUt3iS2dyUVEkLNuCiyiL9bdEPfwXhhA4UKBVkrbLZBvQBg86TJcHRAh6YS6LgZZenQjxRm9uDHZw",
  "key13": "xKaXjtpXhKvFx43495LkdN3Er8CXXtJ4WK7g8BB8qSFWM5vbNwjAcWe76ejdfjNVASpvfuJJeGAa7WGk8ZSwAGM",
  "key14": "3reya3PnhEsG9HN7xqUHAFKPYrevUwB8scfHKHkM7v7iR6yzB3X7eiABCySKSijVakEbNDBh2qi9sGr19fgQj8gj",
  "key15": "rH63qeS2Tp7YzGA4uL73tX8E3sCE9k6jeFK9Z785r65CA2rs1t36mvFUETWvWCgnvLyTzsED6Kn54ztNWdBCYxe",
  "key16": "Kf28q3Xq5h9eUiDwzoZREc5RCTSP7ZVMNxpTUEcexWDBkccvk4rSRsanMAt9cBwyHMqk7biJgqiVA3ZkjVcxZvH",
  "key17": "5iuHSd1zyHarvRDF2EmoRf5egaLJ1qcXEQUxTdc5h9rRcVmL8h71cp5HELnqYWwNknyRiJcDQRe4iAFQweb16t5e",
  "key18": "5gJRi6WEQVMZrcQyjfX8PFba3uUmG8N3EfXKAsQtDa9ducbN7Zt2W32rs2pv848jJvKFc5mt4ZJa2DhUiiBDhcbm",
  "key19": "59QUFk8EoKqQL5wXJ3KrUnAF5hyH5dMuP8TjAdWfz8wCLDW8od1BVXH4MkxiKpVwEccBK8Qiq6j9WMdVWG11e1im",
  "key20": "4qmX4MBqKKicW32Zx4nR3jdg2PBfrsmKq3GhJdMLRt8itq5sGa6FHNmFNTKwJnwAsyQiw8dGH6EZaTbHcfVEdswU",
  "key21": "2WyRnb5L3MT7dPdDG77psFHc9o1U8ZiGFnz6C7SG6VX1YFEFkCAHBwW9JLYGzixNkoLZvg8bziTP2CXdRNPmB8fd",
  "key22": "4gEtGXa5wjzjGfB5jZLnxAKs6wMu4gXhKTbXL54ntdkrJVdkNjaerWwp2JFZ5Th9R55CwCk5VoYXNYpuC8oDZHxo",
  "key23": "ESNBSZViaXmw2bpWfcVNucWCEGptQYdAgNsPkHSCKQNha4yg6XCSJCYT2LogVHkHp4ZeELFh1gJPTH1BrAoTEve",
  "key24": "PMftMaMoxeZtaRnp8EcHQ1eos5KhoVwEWeq9QgeyEwWLAFcdqZ41iitKs6jeXN5qLevNgjoEfAvHzdrcpF9iVzj",
  "key25": "2tXGr3oJaGXjRTVYeXdRLi3Y7mJDKTfr8EcjCBZHxzbcAxG7HzXsavAW5jPYvGhGga2Ck7yv8591jxstm4zYE9Ex",
  "key26": "4RenYb6LGxyJWAKSf1E4i78TNiPmiZkrfYkV5vDGFvk1ge9sdLd276jfCFbCeGQfhCEpch3naAsbmbKXZVmJL1UL",
  "key27": "41DbErnzTSUmQeqQCd8C2uVee4BEpvJUNTTFgvdqvx4Js6LdT2rsqAnNuMu8Di3D3hR9FqbfRKCXQgPdfoTQznYf",
  "key28": "47e4gfadMkPkGCDndU5kBAPquQjuKe1bY6xYwubJrf5gLSeo9r9fsSGpuRJJh9evW7btfa4r2wLQDFiaLrx1zqRg",
  "key29": "2CvHq4ohPhmGJpQdwDhdmPLtjspoKGqQ1BaePjv9BfAhbbEtpzTcgp7194ms238mSHXnh8xn3yuP3ThvtbXUbmcJ",
  "key30": "2tjePK5DpzGbXuFGkqZtUxPqgrwBCumtPwWKsSriKiZ5cBg221ezfhqu5HztLPgYNwtA42X4TtweH56hXouY9FHc"
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
