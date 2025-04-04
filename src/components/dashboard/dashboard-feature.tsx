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
    "BAJyGoJUBLKafuNWRue3hZLFeVmezsKgth2DeGb8rcmjY56HdcgEA8MinaysXe66NcsFpokTJMbdJn5s5pzR6Gi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sPUPVHqK92A5WGaLunBZe4SMEQ6hra8DiPXbQ4oRM4vjEh15zB6JStnwABkCtFnocU52ge7xmTZNHyVa24nj45k",
  "key1": "3DZBL3YVA5t5EuB74ubRCdKpCfc2n1NpQNZJvFP5DPNFzvRcdSDJVaVHPBAfPvAYQNxqw5hRH1EuZMVFthmfYKE7",
  "key2": "5CcA1wZPLR4uynTwUJud747Qgcyhy35hQpvCGKCABomAP5DzrorTbRfP6sxuCMQo5ity8CrmTDVgMNv8K9b3yjPp",
  "key3": "2CLpvJ5Uk4vUWHo1GbLqojKqz9sKV4ZZGGSA5CfvryseerTuBPRG6FAMHbncf3XpTbDstWSrgQxwpXYnT11Mg4L1",
  "key4": "3wgSajFKL6eCgP4DXEVyj3NQ8H78zc4wWN5DY3nyZeUQgdqmt6Cv87VWhqp8EeVmS7qHTm94mtQDyEuwKK83DRyg",
  "key5": "3u1TtLnTtDE2M47MSfPpyEXibAJnND7i3unJYRXVeALdr7tVob5uQ9dPF5CBWabjAFHaoX9MdugNxtv3R678PFj9",
  "key6": "4cr9RdJtkD5hvusEwoVYFcpECf2tR7HpVFT69bKfeR4c2ic7AdxDqDXovKiuHRZzkTJLDL8zCWnoXSvo3Xeda1R8",
  "key7": "25vjLws2mGmCVbNoh1wibzjYuzgphNBV7EPsTk5YUCXykfBxRtEto12GtMXr4ZrdVm62SnpNRZAuBUYE7skEB7Qu",
  "key8": "2zmTEQYdyE7nk7gfCZk85NnTDHDKZ8bwSgM8ekVK7zG2FJbBqJVHyJVX6mU1aijUMXb7t1ir7c8goqN6Qmqrvo1C",
  "key9": "4BrG8uw3DY9gJCn3Jz3vqPeqU1XUkhajHQXUhu1UFjR7bqvPgotbh3EaeNuuCN79R8BzdEhb5EnMpyd2fLiYsqz6",
  "key10": "3ZNpTC1hbuTzBzB4ezknmBYsCoMhC4YjBRSccMB9UnRu9E82uieXpSxX2DzD6VaYJMiGg9HakifnY41EgCkR75kA",
  "key11": "oNNfwdKcohrK6UBkvQn62wAP68uaDcRVctHcgFqVXC4dHTQhCp1mG9RUdXhvMbuxvj1FZ9TcH9R6YHo7NkcsduC",
  "key12": "3jiYDPJUpRCKrTUjjNFd7eP9uJ9GL4uhuUQ1vsDtSVg2bXdmUEZkCokmY9iGedCPe4XXhuxLk2WmUJCzpgvLT7ZK",
  "key13": "3NXjMPjtVZ4rzvUQX9y7LMAEkkyvmqU8VXg3fLp9pXvJ5zWz56PY5h1N7E8DoBYyQJ7Pc5N6DDkjH8ZSkLRQVctZ",
  "key14": "4V733BKEXHBkmL3ZP5JidJjo6bdpeiwKcW5gEgSph3M7NMR7DyRM97wVqUZ3faW7ykAYteu7j5nBhNGg6Ja1m4tE",
  "key15": "2rqrHFpNWwuNKujzxo2v7Nmpmn8JDyycdHTKsxQEH9SDH66XBWkQniJKb5jscruRsZoZVezUgTUybTHhft6EcLRV",
  "key16": "aM2TubVfkBTrqh6o7fhfsKGCsPAFyg6yJwpeHUU57qCZnS3whswBKCCJR1HdmixwzLeQKrnTwKLM4T5KnchYW2i",
  "key17": "26J89f9DWKUc2TBSHXmhzXtq6DTybMsZRZYc4DDt7wZ1BKeq2LJWhb2wh6SSa2HKJKGTezCX7J31EewdTyduRrCb",
  "key18": "4doaduMqKSxiRKpinCn13oHZeGeoHvnEd2583G82Pvyfjw3Ft3qnGkR22eAfG68CXi5JQnRKCFBgFeC3XaDpaJm5",
  "key19": "49FsktpfsaroCwRvfbBfjvEh5GnPMj4fPF4TqSiUn4Cd9Jd3mxu6mDgCFRHiRKkB21vtcfxbQ5q7P5ZQ81SWhdwu",
  "key20": "3FfibQF9Cgmt8WD3A6hcr46zu1c5hD5bDQEw8UtWpSrfRwZ6iygv1ZiKFYrRucBjhGFfHfSFzNu4b6L8Uxv9FbAw",
  "key21": "3r1VGDwYAmE3KTstStNtZyHxZjHVEez6Sp6BzYyb48ajG7dbCYfsGd9dCU6LETmy1WENFM7mjP2Wa6M2M81udNpZ",
  "key22": "5KPqsr1GEE5CLMMUWMoK8bEDCshx65bhPYFyKxMtw3nVuyBMT9rqqYqo7HNnzmn4ghBtE5MPDmoRJBjXJ5fn18kF",
  "key23": "2Tq7YKzqBhkp3rmLiALv94PZaANwa4KEsDYPr3MnDdcuHkJwKLdPYK3rJww6drnoG8SwXZcCRqRDUDo1LdZATGVg",
  "key24": "4D1gN43qKp57YABVp9nbxgM85ufxEkebuAKiv73NUsMGQYMW7UKh787eWVgUkbzAXgJvt5oFBijiPfyMJD4Qro2R",
  "key25": "5g2yA7CXc8GgWw5Vusr3MfohMvaA1WBZFiok1sX5FUMVs7oU4bqA3x64K5rBLmyM4iPTXXw11pShAkAgXLLyZ1eq",
  "key26": "5bHLx63b34iy51tVcxhvLeQ1CEtqxx5SmGSFQefM8j8U2wdnByNJpHb1S4j3UFq3q9t1jTbpMTqqqoMjx76cTxVU",
  "key27": "35aWqiXCDcYdwnVDogYVk4nxd4iSmVNtoV78feXJvwGcSsnYPSMWPV7a6XkBmqTaXFet1dNn5G5PPwjpZcmCydSP",
  "key28": "3BruksSrCaivJNJb2TMqAm1E52c3SUaibhioNX7ByrRsx2BeDCpd7KZxNKFibbEe2ADuqCMvturu5m64eFf1UJ8z",
  "key29": "DcGU7dqAR3E4XEppPK47NpqTsLL6VypTMW8g8vvQrDZruiCRc3rEeFJ3Ng9F9LGhG7PMaSU3x8KvrRFmySnnmzM",
  "key30": "3WvBX6EL9W6RHEB5QSyxCVyZCh8LGTPc6ntC5qwkxaHqXfhigpF6mUuLJimqmVR3NsQEXzSHYrYjWEa1J7gyVeAS",
  "key31": "2LtxJPSSgkxWDqnt2DdPs4bJ1iS4dRSiY35M9ZmPL2kAMH6RYtmVnxJGqaCvgGmtQjjJmES8AkqMhwzo9MUTVDbx",
  "key32": "uboig2uA7hyaQhh5LuzTy5c437RGEaSjBTTJ6Aa74bWbNPedA6MLVm7z4CNCrPG5eQL3JbsBx2onRV9D77eVoK7",
  "key33": "2fJs3Mi2wynNntHoZhyXemMB2yTPLdkv3Wo1nX1zv7EVzHve6AXRw2vG5dRMM9PCv96S885Xa5uk3RWsEUKqTDWo",
  "key34": "56WxjX5JPDn8oad3GetqhTmgQErAz2GcBXK5mgyfPTB7vaGnxGDJdBNQB8j3mpv2JXXDNZ3Wc692Mt78VLJXfy9D",
  "key35": "9wJKRRv3tQmTrSyYnrmb91Pwcez5ngUFDyhXL3evBceZPKKDK8rU1q4BoUyRamGohk3SovJSsW8YDPWYNv2Go7H",
  "key36": "3JVQoWH9ChCjcWVGjrw7UiWEEzKKFdtQeaqFmhiBxHgM633zsmcXvETjqb9K1WqbtJMBUErMRQs6GWtVfdEwMsr2",
  "key37": "3BXKrFeWQGfamPdN4aFMWybsGVQG9kPKFFx9vyWFHHFrKqqinuUUygqKBJtbzJi7A9a9VFupzs7hj1jLHdCdDdJj",
  "key38": "An1424sZGyrUBKRmKp1dqB7vtzwA3vQJCSTTkyxngr5TRMQevbBsYtZRaUFHLzzknLaQnC9aEFMgp8NuZpJJ37L",
  "key39": "2v739aRm6wxsX1mHUJnpQyxEFXa6xoCi58wfWjDquz83J6tyimviXDytfUP2qBvZGpmbw1itnXvvmgG3TKetCJL",
  "key40": "5zzumkaX1Nr2n6bRo7NswHVQBHz4Wbue61souTTiQYYec7ddPvZMPDmyTBMjjdAGTi5Twh4gsmABCg2XR1xpu96i",
  "key41": "27aqzyDNfYAWquVZrEvpxKRm3tfUcJPNGhs63E6Jmj7JNuPsKqa5qgBpcdrdtcJdEBaPXZSadjqF3sxnepyWcAt8",
  "key42": "5617BLDtWCjshLMUFYYcBUXUtAS2L2de4LEfCNw8fJstrhVXhojUTi8Z1ySkFixdKYjVpfZr4Y86XfQyqjKrqFAB",
  "key43": "5o57NweQncoYzjpZCyqy5AFK1Pp3Bbo7JWh7zXinxJww6TaGjzH3W3QBBxLqUFon1M7Y39zVbbYxEZHpCZX8tEYM",
  "key44": "2bUpN8ZdsHQLZ2HsrWmbmVQLkRVGWUnHEp6kLMHzrWG4QcumuWceAyK2eWPgEHaDc5YYpcc6ey9AZqVW5sHCpEEr",
  "key45": "2uaBSMhPqu9Kq5BNRFBn8M35nPH1rKncwoaMndHHnN6tSsn85Cm2NEmoZDRaQNqNkkmLPWBYJeriA3Dupuph4iRY",
  "key46": "2qSW34zhFrsoak5uAGCxxnyo1cfJbZd9RCoknz4UpTUkjT6o6B4UdnaB2xidWXN6Fo3nUUkH2jyp82tAwceSEdgM",
  "key47": "3sqV48u6SJ7mvjvMC3fGsq78XXmxFVv1mjNB3GU3uUVMB9pW4PD7xmm46bkLUQ5EJJJRmqLiDyiosMNn93Lgsj5M",
  "key48": "1pxgupQjtXMSetKDNzk6r9kdezFH7d9C3SBoYNR3tVJfvWPs23gQK4GeD34JCRm3MNQRqpLBLxzv2E6wUBb5mtD",
  "key49": "4t35XwBfnJALdQehFR5iJEnPSm3oLz2hjhprp9FbqPHehCbbgn36YokenckpAJVYdxD8xTF2SdTHoGj3cFs5CxaH"
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
