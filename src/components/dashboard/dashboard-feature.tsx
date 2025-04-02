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
    "5TWCoTq7bAhPsSVjigMXK3qrG1CtFKLNg4KLpitR3eqzZP8r1cmQNXfwCTjAhuZ14PGhdybtxZWJRS6wdiM6sA1N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mpkwyBqf3Kof1c4REj4NkKkDMVfVAcPWirYziaZMU6tcaqebrUDWYsxCdiRef6QMzxPi5YEM8vEbnd8Q5LQTpqb",
  "key1": "9hdzHCcA2YmMEBKJjtsARTU2AzGjHnn6q1yMFDwGKJTLqePZK7QCt2aTJfaf4yu97GiVksYgLDZGddP8SZGVkCM",
  "key2": "iYuXe4Zcwtp2cu1HY4YSSYqmLruCVJvy4GgKLhjGigdjgJCEX9zvd8dRTtSJ1sKvSepv3p7H9LqeQvvzuHktGUu",
  "key3": "4H2CLuKUFXcmu8PdrYZt5DDHZo9ssBHemvc6yLoNxvqWyrLCEbRtrpX7gr9NfUqVPPTdvKvG14pWWDbacfYZzC9R",
  "key4": "4mvo9nD9KKaZcNKEAZTmTFiR9RuQFRAh2oVUrpCYekWCiKvQHifjFaYjqFCdCzsSqUbXDdJJMR9FtJSZPuKLEAhX",
  "key5": "4tWchrorpvESbaF49X1gbHNdro5fSumK4A95iNNNT7b3afjZ4kwaaqeHtwXFxf1rBwsb4aiXMwMJM2dtLT2TruNi",
  "key6": "26AqVfDzwQWK5gggMBxBggs6c65SbyFqiCtN5eZEfoKMJoYnp1tVRR997DSpZxVYAK7ZWLVnctzKteniPMzPaEyb",
  "key7": "4gj5PKVFo3RmnKTaYxhDSyTihF8LqubJNEq1rr7w7vb48xDzzJ5grRgQ8Howf72AUA9FK5tA8LcrRYAuuo1s26Cp",
  "key8": "4GeKymarL3fCUxLjzGHtu7Vazoc4QVa7cLs66WbEK2pc9uiZisoVB3qxCfdoSnSh6EnwuxBCtFqB7KNuH6DZa1xA",
  "key9": "5osRM2uCoUk1UMj82yb5FLjkaPuzfG7Rfi4RDeTfQ6RvvNbih13xGKytg8vX9EfMJgyfoyfAWQBk4Gtgbqw1aMVL",
  "key10": "3aS7Sa14fBusRsynWybW3L2Z3cT5A5ruBf6g5tJMh7rSHUmUKEswiaaxTEw5TYURph6xjuw5e7hMhtpiW9JTqDnE",
  "key11": "36axK3JizRCEEDQ9sPdXGzr9Z37uM4DAWFnVSNqZ7jjnVP1PK6NJWyDqgh9w1ZUZpDPpQ1N4BeHyZ6fSi3zGEPV3",
  "key12": "3wU5tFYphGExfdrBczbzKjYevjgwM5viaUK7jUvBPp2tX72mbyBCSCKHtQDzzDpFd3CpaPTNdupJmUyH9HtpBAho",
  "key13": "4hE3dLMWQ2EAZ85HA5v18ivvycxdjqZBXWVpTvKrWwM5Z9XvLEkcU4ucg78Xsh6YdWz6cbev6u8Cy4mv4HNgGUuN",
  "key14": "2vauHDDjY83W3npmruZPCiUYGq3sL5PT7YD7sYHgGF7ihZkYucyiz782p1cAU3y8vnwS2vg72kQgntBn4Vq2wki4",
  "key15": "55nwEZRBWcqne9S2iAzoYD82PPd5CwPEBoQ6o1L66NELkTnBzUeRVPj8sKGPWc4XpXVnGNimP2VdsvoUAKYwsQGe",
  "key16": "6inMPdKtUu3sgcdYTaxpYkKVkz4gh2GZG4cU5r3G7eTKfdQVrwWhnoBUskVTGt4aHecZYVLK4uZ1LXnucTG4fn5",
  "key17": "3EqRUL3phahY2Dr6EjzL4HjR4yPYxRYjBgwSyivrQzwt5Y1LbcjCBKdHCzU8LAfxZtHnNoVe8i7fXD1tnG4LzqLd",
  "key18": "57QXhM16L9f59o6Jo28WqMiEwn1KBBxb9ebuzo35LxtLuZTbpdpb6K75XHnoR8Re3FvR8GG2wdPhDWWPcthfeHg9",
  "key19": "xHYhgB1vfApHZupKTmXdwt743NhLpbHuBZoozgsX1T4oAMsdHSCRZybQPeMgGnoQuDphTTjKaue5zJGALwGKgHV",
  "key20": "65j88MWdUFhR7qzp2gbPSc131j1chLm9XNEvbPVGxVgzbcjKC1MigDaKncRHvZthnQjPnQS55Y9yB5UXa6R4hXEz",
  "key21": "2oDjPrmDuR4jJyjVgqdVTEAoVcdUrzFrDDAXQtjTWvKgogLgrBkLzz2gDvk2YPap2qy5VhDm1LmyzxzJBHev7171",
  "key22": "3q48yvEspn6MRGSrCTW71nm3zYXGyPnVPXvQZDxTScRPukDdKQ3QBodmELmnBqcoQJJ12DMhTt8Qu9Afk85r8g3x",
  "key23": "4R251jY64ogkgpTuGdgm8FWVdtaDRt39wcQx55pQuEYBc1oQAdD96S8CR9Ye7vKBj6Yi17woXJPP6bG6TdHho1Cc",
  "key24": "3CUeg5QM3b64c5h8fQaqmzxn4s7WqffggSQ3zW7MUKTrudu7dedaDBry1dn5RWAXcNkTPx7LoPCvNXyTNwryPFVH",
  "key25": "3H9sQkeUwNvmgSA1wArAvrhn5j3xioAEdBYKi7XSNRZqPdgX8YNuc6MZ2vgJK3TyBLnF6QYVc2R54dnkzrQREgpS",
  "key26": "WStFgPnFZysf7Nsv84naV2z9eS61QGCDrM69vMmRg4d9Wn85u9iMQwr9M69c639Vncg7fWEFwPgAWfMzLzMjeL3",
  "key27": "gb6S9nUKtsCSrJQUy7S9eGnFg6bYMLbeeNhjG4eUzB4hoEU1JvktHYWqWU5aVj8DibeyYzizGooCwovocN8iDCU",
  "key28": "4VuDiSJWuuhQjjkruHsGUV4npRH8Z72nAxfdK78YPiEWqqdEPwscHWkV94qcdaAwXCQihAWz6ic8WHXXVwrCfrEM",
  "key29": "4ZcDvVd6eBjiroqpShY6SLZzDzTvxRqggF26p3PKxjL8Jvdd94Z4zXpJwpfY8dsGKCVd1gzt5jxczjrAUDthJuHL",
  "key30": "26ENpAQEVZhVGyacqctRMRjvsiESnnxRwGngybF6rDjVBhcb4krcj9UmeRvieZESxYEi2xfmpMAbAjyjvooEGPnV",
  "key31": "3ZqDh8HPTmm9xHSj3pDzZPSavP7V7abo4gQkgGLVjhN7WnUm2udkc9EtMzRPVyPvmdmh62heP4mJzc9En2pJWTCn",
  "key32": "5Bg54rrTDFGAwD3Co3c7ebmsrEdxS2pjZmXqGvSP1WhBr6mYWifXWjoBNidDESfMV76Uvy56DJr4NGMb1vqr3Pp7",
  "key33": "5D8imCKH3zNTGYJoay6k4gv7EX6czXZLM1ah9iLTjRtAvbMkyJoYgbc7VXCnR7Kq42j6rUwxrXvtHiLN7qXpG6cw",
  "key34": "24M5eLc8axuhBirjqVAmhiSaeSYMvYF3oZrmJNUk6fousKrPgCdZsgRP3RLzdMWBis5RBA2Tw2P92pGcLe8jPhb5",
  "key35": "4Mn1jefeYD61TYT64BwZMjqKUQEVGcbxPd6HtptM9KoobpkatTcaNgBg7bfHuzH5ftgUKd6hvMCtBFr4ND5sjvQf",
  "key36": "4UiCKEdSAuCoiZyWsRMWumRr8WFo2bY1SyqR76PXvSjq5D15YeaMaRNARWtALY96FHscJGeob6NcDNabnft5AHuD",
  "key37": "4HAu8wwsryAtYvW36RFJ19hEbaF1PfuUuESiahSzb8uwjdktKen3YUecVSbpobMB6VoaMZpwo7GN8iDJAQXJLawQ",
  "key38": "236AnFfHJZqmmCL9bzvoBucWWejgiwWVSKwiwbBQX9V1HgRxjsKS6rh6XTZvFbKHhqcS6AmbpcjMSbSCzUEzY5Sp",
  "key39": "2EbF3QsoPm8k91sNzfyawT5uEKQ1E9ztv4mKZqRa33BxJWFAFnxx8WAi4PiCtxEKaGRP4Ek8VRuRFmeeRatoF8Bs",
  "key40": "f1rU578RbySG7EDvgZML1hRPMei7B1wsag3RrqR4F4FTw5uxM5RLfXyDDM1rttbTv1xBDN44gVNsYCGm1fpjX1T",
  "key41": "3xkNvbNEhy8LuZDPwPG72cjyZrdyQxAgY67SN3rvHt3Mq1JDbfG5AkqYjo4Eod2cQFjyMTsS8QgZoNye9as4wezZ",
  "key42": "4WBGEWuHNF4P9KxvQpeXcuzG7pWpZH4hUW6GM4buNRjBVByyPycn8gcoKySaChjquxNjxVh3wQWq9yeJJJo4W2gA",
  "key43": "EawDgGcqoBHH6c1G3LPQXs5k39hMyt4HtnJV4jLzJd7mpytFQwqdKv6TRKmf16dzf9ZmFqUghFDiBbq94c7NzUW",
  "key44": "2aMpnfEpdBSphmFtSEms4KfZJSXRYNxTgtAbsbQmQyWeMBhuT2SMXozNv9NuZtSj64ZyBg3SycEeGhoNq1qgvmcR",
  "key45": "39in8H5YiMyPhhxDQjPCUVgWufvb9z751zPBiUnS18JstU2GJozijG34qwr6CmEJnp9XKYJ1h2f7kvsScCXW79Jk",
  "key46": "5D65u5Cji7eXggUz2aj6ov6nK99MeLC21J3KsXCiuSGpWaj44qenEyE3GpL11xPN2UmqcPtV4oewWLmY3uEmQ1Ws",
  "key47": "e4ZTMrLLM2WBAtzBJp6SNpskLar9XvEFtVQiT7xqs8tU29YkQgtHuP2qyTWqCZETdKh1B36UBM6FymDbDbHfZQD",
  "key48": "26PW4HLHU1JpcPXFwk78pztGSpJe3kZBKqUwQy1JbEVxucvLUjmffN3m1sYMaG9BTQnce8KFULynPM7K9z8mgUfD",
  "key49": "3utrvTzDas5GiuhHV9zLh3ruagcX4X3CB5tD6MNUq3Xxtf6TqDNSMSeU4VGjZ35QsoDcXK1cqxSXymJG66UJJy6i"
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
