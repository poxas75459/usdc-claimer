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
    "3JLfWzcN7z8f2Djmh1HFpsoexuzphg8apuxuEUQvtavH7iPzh2MmchGyPF6q2Kc7fws3rTBbqZKLLS2arf1sZTu7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BbwZh9byNjpzamofwQS3agucQMVQaULK7W3xefGjWXvknhK2bm7yj76U1wqRqFGLZyziUZNf2SiomMkQMuU7EMv",
  "key1": "2HYL4CHkTryFddj1RMjxPX84SdSp6B7DKere8cZECYJXUCZTo7myQbUu4vvJFZjkBTmTZ43twDBug15qHyryrqTY",
  "key2": "4N5hLfvYky6iBqaBndVtuE4WWDpZMh3VabmcCeJJgLuPKpqsnM7GARDnZGrAqcqtwurqbsgbuB7EZ6gCzSUqxaud",
  "key3": "5rDgfsjzi5TDTYnxz3TAQPED5RqptaNcemzYD9EHygSr9qhZGxZ4tDX6b5n4CAN9225k1Q8PLQdsBTdM2UP2U6om",
  "key4": "2bfo15qquPKFDkBmKUedvMQqvFUh6Q4LbPjgsKTyJvTyGaotVXApvw9HmkKpFp2WjG3MPc7scYwdSTvoUaZHYiUX",
  "key5": "4KUxgFbw6PCTcD26x464oVjwCZtvVec5uBgdxjS65t46Wqmfd7kaxekusm6AyrSw6aoEejvUVAuuxcpmD7c6fYjF",
  "key6": "2MFfp3CbdNc7SdyRTCVcNiKDsvfWEbjkUoHHLsxS1e5G1S9v1esHQmE3VrZiikV5hJP4PJpjBiDvmTshABzMirRi",
  "key7": "4eebT5j8TAtQ7guQsrFoz2cW24hMojPFss6to8WvyEfRZiVwokurjqMundSuavEx7LjszyYWTGEg9nZYmB1c1mXR",
  "key8": "2oSCGAkPKf1uE2UMnDVbVywVwEThKKvaqXYKoW6hv8M1NxBR8NpgHSpNhVfyFMEiuD63HAgRgimJwD5BnPv3RVk2",
  "key9": "4i4RQESMb1CuQktts2FJZZPsidxruz5Z7myDVyqNY5W1bvZDCp1za49MxzgPc9JRVc53vh9sD3xyAeXhQesoCEHT",
  "key10": "sK7KpqUuvk7WKNSVY9NDkAJt6eMsvJc9trmNjRCYmQaCJi2EBW7LEuGUg37ss14m2KhcMYSEGSYvrTcxv7txEHW",
  "key11": "2zCbCP1ubG9uS5rGqAtmFkqq5haiDgGn951KPXp8twsPJrmaa1SLdh8CxtFdsB1TBqXtxRHJbP1KrbfRardYvnZZ",
  "key12": "57sqSaDTGArsWxUxujs92F8NiP4srEgCHKqmno8Vp1bbzTNXmnhW9pduovQMoMWvTfHgZF2fmPUzZw6h79LoPzWR",
  "key13": "3EBUKpkScAfJxpzdJ3fuy4CXw3xpk8pKoyTMPPo84pHz78dCc3eRE44c1EiE2jq2mthUuiH9n6hP8SiuhKwMCFck",
  "key14": "2w4LnuyUbpZFfMYugCDwQWjELS2BUnvyVTCwRhRE4mb9eyYo9ehiLacq3ocSbmt2EMh7vyT3BCwRYDSuTqQ2LR5D",
  "key15": "2irS1ceLo2mfXhHH6NJSbqm2szTCLcZVxzn4sb7V76cd9RB1xadVSPpnHdFRdJB7yhEtQRtzbWS6RXDKtHNiPAV",
  "key16": "2bvvG5HWzxgP5LmQT46N9dHEkuvtShrg9uA7UXvLuDVBzCxzB9kS2SYrktHb4sxhg1zzda2CcNfEg9DChgN3m129",
  "key17": "418VEYmTXULZRcn37YcjN3URpmgY9i1QGQipEoFM6FyTp7ZwJnJcXXcSkn4ye2GvKtJYyYh4YsUsKYLdaomNd8bG",
  "key18": "vajvvRuhDbnpdKahd5GkycTDzWsXXt8wLxAPkiyAVPDCKC7ZBjWDTVW34tgaC3P9GkGTc8kCQPRP3qd8ahHoGq8",
  "key19": "FDHLmisPsJHsApmvVGs1KFHRBVx4X6AK6vdEx8zsrPowfqeCuZyu1qUkLgFVXdPpnmmcpFsjELtkn7StUAb7gtF",
  "key20": "3PYMr7Sv6JpoBj9cHAa9HnPgTtYA62YdgUy8ySTiwJX8cH8cXgnFTf5ecRvgKB2sVJqALQC5sFRY56azUtPNvFgz",
  "key21": "4wGKP1FmncPTwnr9XJkPfoMxXven389hr6oViudXYAtQojcJZraXoeewDk1Sc1FCsyrPFbKtcQEoGFDZmBNfKMDp",
  "key22": "87atE37Bh3naB1xYPuYVR7UXzrAq6idiLKym53iXR52pnotas7amfktEUKw6NFtzhc8sRLphPfoM1zNVKN4LZZ5",
  "key23": "26d4hXHsoR3RaQaEUrMh3iR2jYnustSXikrF7KNN241UfVbQWoGZiEQVPRbNAPeNTaBZcX21Vm7juRQPLenVA44n",
  "key24": "4ccKNyQ3nin9sabUkWFHZdK2cPSuANcPW7vmKAPfG9dXdtoDSZzC7CCjyzKuxAh8nk6e9RHsiMw75XGtHFVQVwSp",
  "key25": "4wwPhRnYPCcUN5JkbBEWzo5yWxhqK1ZMzsrT7NdqiYRqFfi4K4S4hFsHz68UbV6tF2Q57GXXbTNEJSfB48ifJmL9",
  "key26": "75YNaQu3tdw2oAw84FKisnHAVRpeMzwFnQeon8EeQH2DzsCdbyxyLcSWd1cthJomAZtzpNXF6NVDJxUChGJGNjM",
  "key27": "3pTD1BnRdJevpcqSxZX3gUAoN75BxELABA43rwgKUX223sSrREMhgpTqUQNCf9L9kZK9LkjmPWV7BN3seiyazw7p",
  "key28": "Ww22N2M9KuEMY9gGMBkGQ87QUhLE3FbicpNhvSkEsDsqrdwqMRLRLwqGGAqE6HUFn43QL5wirQokf5A1hFxdz8n",
  "key29": "3jWpChKFDkTkkBn6YBcg7e2PdR63aFC9LLx3CxtuE7BzTS5Pj7esspxcm6UFFRAWURtwNUspoRoqs8LUvYzQs18r",
  "key30": "3uiW3ffdCqLcyx1dx2f1YZyFksrgsU9UiEJPEhPmC36bWRPPrtAKchgjDpdJX4KfgYz9uMVBs6TNVJsJB55RYUi2",
  "key31": "2iDrHjUkkNLgBg9rLKP5j9ixUVRJkSJ6m3FvizpkU7f3L84S3mGoKdeVpMv5s3zLRpZBEcsAArithwM9vJLQK9gK",
  "key32": "5monTsjwPCxHuCVSB4q5PVHSyb45k2FBR6i3EHi6m3Jhs91e2MtGMYPDKhmnFUTMqLCdh24dqpkayjBajB2ppnUa",
  "key33": "iZjnFZxUH7eHxuWYbqusdv2pEy6tqG9WSSXJeuKnBUSjVYVNVszp7uZAvaVnrBzvknpt22JEaHnLTVMULEGsv84",
  "key34": "uGYi6yz1ZDswuXq7dvsj34vJavTFLQgUPBHbAjuS1yTqaAX48CvT4LixqTrgXWxj9rrgUbe3g9uMR35TNhieFgH",
  "key35": "5ci68BAgiLVyFZ8F91ecjU6uCp2fRibPtwLbX4D93oFpKaXuJLywGzeBLgv2gU8pGXf8LNygZWXX8vcvhZTLtsry"
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
