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
    "2QvTorAnwoj2xAWhd8baG7nu3JQhdyXFWjyLvd19R7App1wzwGB3Thc7XuMTXjy8n6SUqaFoGPSLuhr4r8xzYS47"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dps5v9KV8HriLHqunXDfBggQSn7DXc7xhmDKiKbc2JfY2U9aktyNge5qfwuq5HH8v2A4dTQRXUE6XmgnxRCeGCy",
  "key1": "4mGjtKdMdxGQNxeBZh8aWskMUPC8BaBw5yh1eefJ1tczoSh1ZoBcyDW4ne15bzBAh8nNZdqwNq268pxm9zxDPZwx",
  "key2": "GsYZoMgJwdJa8DtLf9VCDLvq8JLzhBsbmkHRP8gFHP7p2Qv3oSQMBe9iwDDw9adK4n1LnNY2PHabpFscqUMothy",
  "key3": "2myumCeJsfqu1renRkwLZVZm88sZWg2RrJkiTrx9sAy5Uy9dFtn2ND57SKeicELUoQsqXtr5YABzhqxXCRbWRioS",
  "key4": "3rnwSr5F8q2DpGDW935xQ4eumKMc2PNwiVEdZ465XE5LdjZxmqmHmfcLHkodvKYtr1XXrXG1pTR12qXckAaLF19v",
  "key5": "43efsswoHQSatzitv5ufXiJL1W9XmJKDSVkdcoAdnY5GnAVtMgv6rDv9zpT7MiQ3JhfNf1gGgSpkaTXGdJjgudBG",
  "key6": "2nGijv8ADY21gJuvNkrvtzug4Hq2Lf1oBvs3bjA3GU2YzYfVAFFuatmy7DHahrosWQ51rjrYw1D9yyRLEW4uv3xM",
  "key7": "5hXuVje9xwMXbMoW1hGBAdidbitnj5dcJye58sxn8QfM2jfBdPXcjbYav1f75phCwNA82FPNmYVVxqLTdPgM4Nfd",
  "key8": "5TLdz1BttXLJP1nzt8FGt6zbA6fPMK1eYrvhHZbmACwp9pHLpvXVmJS3Yk6G4Qs4ezrD7NFhA1cgf9r6RJinPo4y",
  "key9": "41ExL2FauV1Vto7z2AgDdzBcG6JZC4gcyu6PemMcpECstM75YjfxrzM1Cx95DR696HsLPykXeZgYUuoCRMmo6b7Z",
  "key10": "ho6Lz8374ZG7exbXbcMK84FnsRNeTgGSKiwnW8VyGxr674Vb74MmqBp57JUWVSnNZcA8DJr51hHe9uhAzyJqxZL",
  "key11": "4RU61VontTV4pJhXDCEnQRbWHcSjRvHneegTvY93yzoKfZHxr14wtyn5nE7cZ7sH9KZx5YbfKZAVy1uysNTZ3LKJ",
  "key12": "4N1zYF65G9hWptmWeX67ogsGCeKjAfAPSAgidXkCa1NDo1Rk5za73oYAvLWpzuyuG3g5xigqaFGS6nNHEQsXP9em",
  "key13": "3Ct3yFFxm1u7z24KnUyMcF8hhkdBjYvUnBJzfDKnBDvZf7yDVDFPtKHcm9MqsyDxQrnx1H2YLj9gvjEtxbvQkyDV",
  "key14": "2xTk1ic3aXkkzgJccj6UnDR6vX5wepzFTdXs7bJCuAfdDGVSUJVyzRnGTSpGAdUsvAgy2JpRagDtqvURgjGxKzxX",
  "key15": "2L4d7At9QXXduTECS2FT7i5E2dPsfnaMXPCdtNrXBb1D5J4ciC1gp78jBQqeJYA7UtDtRtwg8c9D7ARhBNxiaYgV",
  "key16": "21bVAj3gdwUDFFsQzy6ffRyaPxkmsgZfG1GKkUF9Ljf1Jpi8Yakk2YzYpVZQZuCh2QTuCmMA34ocoi4ssR6PLyNR",
  "key17": "YNqPBTxir5iF6UifhQVcbqK8ciFtQYk21sueMoSGftBdgXs3P18wJjnmXRCvoq5XrLxFd3nGkKavfGqpu4hJLg5",
  "key18": "ea366uCmKsbxroJ6MDSru2kXeZ1bqxKYL44UZ1mXWQW2qTrN5WvJqisAyo9DRB47ab9q4DC7FdgyVfvFJo9h6Ym",
  "key19": "573zRgTHhbpsqS4Tvp2mdU7sVbLKx1VB3WuVLCxBeLztyHHf6cfViQJFwy4jmgDa5Gyrn9YFYxxuusA8eL7MRkJe",
  "key20": "2L9Q4diG6dEqsziAQ8wngPYmj3cnbFRVpjoa53j7En9e75m4YXiJRhNU9CEQtLTA6Ts41CS8VKVkJGsnYrXqSNbh",
  "key21": "27d9UgR5vq14XXUwuqMB1ypYvitov6tBym1uMhxHCFwMHgk7wm6Tmrz6QeEJgZhQjhG3HqZU41GgGTXdpNPfax6b",
  "key22": "3d6Y94hk19TF7Z3HtYeAyW4nn8CVRWVARDnUgXV6Q23ngLX3cBEQ9kshC5fRo9jP5twg5KE4nBpwsemqixhbfrmj",
  "key23": "3cz5a4Ve1TjVnNR7pWkjm7LQp8vymACmxjY7YndfeGBm27HXtbfbZNoVH3zATRm47jpu5BYKhgeBYqd14wkR8Tp",
  "key24": "3ywrnGeD2W1iucizpopYLDRZgUu2wAgs811Eac5zQsr6ZYVwXNu8hqk9ssT5mWAK27TzTCho7oPe5KkZSFFtHHKH",
  "key25": "4yYXc292adeRrWG95SwoAAF4jJUkKGTdfLGnfdzLLhALP3F2LpY8KgVAQAVRXa2KH3RDjmZF3HP2m9Xf8HAhfWa9",
  "key26": "4KCxDFWGn4wx18hsrxqfYuTG9E7rupQcy426kaBPVfTrjX8EqfUKt6fMzFQ2eXRJVRyqeKKrseUL351nWvQFZ8DK",
  "key27": "51B39Ku6Mo1oyh7EZsfsz8VFEVvmU6BSF7PW7rmY34oaMz41NUhsZMR4Fo82Pwd4XKdeVPine6c9ckzTaUVDox1R",
  "key28": "4X9ssfBmoTeRkvoy3hFbHit6dBtJnBAmVBE9sd1BXVFwreDNnKLQX3zSecNociGVotS23wD6DWt8sLbmCKvKGV2N",
  "key29": "3T28r1TTtDEJJUXp1GGvqtEs2HzhbFMV3mMn2vnKnka9fwNJxUH4SfKET2kJSrHUiQKT2s9egGFbsCdZrR7fbmic",
  "key30": "5XRp4fep4WcjbKPQisK6UTEJELQo5FRJT43d2sEjiRCZSZz4BxCZMnrdAgejHvt8wgv9Es3v7uXXisnRVa1Di4AN",
  "key31": "5JPq3kfm6TU4cWDTfwzeMz4ub63DoJy4EKRsLSY6mX4tgkDeNX3MGmx8itfYRLyQkiTyBEx7VMF2V91Rfz5F2M7p",
  "key32": "2UWk6A12m7oury6zb9UK78L9JNAAMKeuRq3NUh65GiLof2gnBeWLYTUAtWnaWbqKxD5NxgWE7rnjSCDPLTyV1QrN",
  "key33": "3PQb7ddQDGb6pyfbPbF2obHkkdkt4FLmRuvA8dNTDc4i8iE6au46x8f9CjNwx7zFbinYFTYvsq7SwSbqJFv8yqrh",
  "key34": "2cKWYVR3nKayCgjJVr5tJMHaNdCGbMrj3dsf38BQnE1tGMakfA4vbpMqedniW3HbDeu7kujWB2BV7UhDn3aosQcT",
  "key35": "3X7nDzvvjwn4rnBgUR64Nu9FAH5cUVfcAuCyN542FYgW7xGcUWJjc675ia5CsXuYqfJbKBHf8v7MxP1Ajsmyo7fY",
  "key36": "36RUwwiWJSDbhYZQzkF95kTbUFYiuX7yPc5Rqo4rwLAmn6CPJ6g6NfAxbBzWLGyZyX5w82E2aET5fJMAkwnWeHo6",
  "key37": "5JkkDj7QRpXMpkXbqxb55fa2cSM7N2XwjfGWkUEims3h37EjbfCoFd7o6a8wEgS67QDVCzYvJwevuxdghiZXqZtu"
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
