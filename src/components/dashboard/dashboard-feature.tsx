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
    "5WHJ6MDXCiRSUNEG5R2SEqQeDgQwbsb8y7d3Q63BvBsNnJY6rq6Dy1aMTGwtoRu9FwDtZR3bPcWBuwWeQ8FaQJ2U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fnr4CUNB2QC4s8AkXdcGzUZAAAmY5fvkoyfX4JnCaHe4jUEhaNbWdASXK2MxgUVHYL4j2smVCTbthnxFgfGg6vT",
  "key1": "4726f4ks6mg2AByiaCqeW3Gb73r46bc51YTF6of5Py1UwcbDipGhksF7MjU5FhafmaUd3JzD7sXD1YHzgy8TNVsS",
  "key2": "4h7BiYcP8cACt1ciQU7mio3MReHYWQFx5Lnc6cM95arGUEj5GJF1hK93tiELrazvDikoFhg6Db9TxxkLYpXqSoNd",
  "key3": "3rnUHGDgAonPC41dUxWPL4f5DqWriJZPR9sMqQqj1Hz4pqD7sxeKRoz9xxGTmCRS24BeFfdqKZHXGmTLSKqidSCn",
  "key4": "4KKx67S2Re5XFjcexsY5D8XxNGnemuMBTRaFjdDpAakU3eFxa8jeJZZdgykgEwsLh4QP5csuiibyYfr11jxdZ9VW",
  "key5": "25ZYLWXHN7CnX2HfAbqkxCPxZjFJJ3Epwi4mbfBfUvBESzuxV7sBAt429xpc3YN6D19Ejdh4utxN4ctr4x7nm5Yx",
  "key6": "5HixkgX8hTNjoWdbud7bdrmyLJf7ytdApqqBSR26J2rbyCiHgAXtkYdspRWW4PDgaXHqvUuXdfdA5wjf8jaz5nsz",
  "key7": "4KPhjr2p7CZDonkFExEENxZwfytomj8qwbven98FjLmjiRxvh91oDFFqK6hAXTi7nEBiRFpAHKaaqncVRTUErUJp",
  "key8": "LT6cH9gT4KkyLbWuZf3yKRU4EE2ueR9h7gFT1ze9hzaMBBJaacgxPbj2CMV7A1tjW6jA8hZpwDnh8Eide2DUha8",
  "key9": "65B4PYpogHNsnETpLZqjyYtMji16QCuLmRL5w6eSjPcaR6P8Z82C9YNZXK6sosfD2pnAyErN9BYWt3UsG3v5dbt8",
  "key10": "58ZWJf8nUXJzgi8RneQy8qd5bC4ngnrDQVwYTYp9Dgt99sW57XvZf6KsPpvr8p5h3Yvn89p7dcSCBWhyXk4VvFsr",
  "key11": "3jrDFBWBpjvztrKoSAcVeeCuqsZ1sxrPHNWKJjdNAEcnk4oCSmkKcUUaau7UrQ7BzJaUPAu1u2nq8w573dsQHLCa",
  "key12": "2QWVuk1u3Mgq42CJ2wYrSJhR8Qq77eKUfuc9WqrZpzzb3aPkECd2t3ZdjLcyKeJ7h81jE1D6pW8ax98YqF35qyqY",
  "key13": "oWfUNot3zmxHpy7ReCYyEgFSUbuTWnQpE9oDJt8DgencfngMsZN98o7nX4ya7VT5ft5MvSaE9MsTTwdHFs9PxXd",
  "key14": "3J8WheD3Hnjsh6ZNxge9RfzodMUPT4jjWUDSfC5tZhBiBCC4earCg2rJM6eb4WKPUnjfGtK44LNmUyYzbhie5sD9",
  "key15": "32mM5TJDJZF8PC9Kh3PyY9Sa4beVXLzP7VyX1xKXKW4tAB5VhtLT35W3o6gmXfx8MHqj59sM5ZY4wE2BjYZZrdnk",
  "key16": "pZYstmqNHbDdFwG9jEu993RKSqRr8GtoZYPv6jP7DB3fxGA8uF9Fq5SFQCReZ3MCMi6Y3msnw5Mf5AxdNUvo2W7",
  "key17": "5bQadj3zKUzo8omU63qC7Y6m7u1EdwT172AUPJ9hEDCwJrtNWaXWbynNM2PGNqjpxCarYCRQa9gA1KPsKcSx7xK1",
  "key18": "5dU6vc2FH15njrfGqM3zNzgFRk3GYhRhwHqciXvfwqEDNkchcSCMjj4WVuYe7LAe2Hcpni5XDX8pJ29MqV2fZfxT",
  "key19": "4P1XxV4XyZZfQggHVivzJT1pxnEKFTKPbe5TL8rvMMgMDAjiGVx5RVfTU5iDAxYEJvTmCk2Q13cN4K9EzFzjYmLH",
  "key20": "2eQLzGDF5grZr6nh13zJ1VX9kMPhX193cw9gj9bBngPYZNf92V1kk2mGgdZJSqk9SoPh3BDdfwfKjq4Gj5AR9x9d",
  "key21": "2TBHZtvubMFfWLTGp2xjRDYU5w2XHzZwdBHobY1f2q5hXH3WiFp9vi3UxQRtsqrFtZpMqxVTobVjd7r4yJJHrBAK",
  "key22": "63n8fnJp6Ncc4uWZZmbqoyEbAbCgE5RcJjhXDxwmN7nN57vLnsyXhAruKmLDQvAPeqQYnykpARzYGbVYGmeqFJmB",
  "key23": "5PAFGruT9Yvt7wgaSS3T7C24eSnJpqJiF1bxgHRcYmG4WC516yykt2q29fmCdy8nPc4DegKreGJGS4axPYKS2H1H",
  "key24": "44ZCfoAXnrQW3HTBJLS5YPhuUwgA7PXSWPCvnw8EMw6UDwA6SjVcqHvW3WPu4EhKEnbHzvFUojTpuPF7VX5PUXWw",
  "key25": "3ns2rDWidUeKDBPieNa6ANxeVVn5aXyFz2Di6fbHxk3ywAHp8o8bpzdHgbj9okaNNDX4HqqNAyXrmsNY8hQFjmkX",
  "key26": "3QemFegTjCWArJSbrTQPt6ECXotAYUUWNnWsSRKkLAwPbBu216u5zu5Pn5XomQAbq4XycHP69Sfu95KF2XntQC96",
  "key27": "5AttVfxCFyrPHxCs76vyXxbiYy4DBaBDSvp8jewHEgzwB3TTB9G3XjvY8RFVMDuVgcKwNwJxuoobSGywUSXpydVD",
  "key28": "3FpTV7YdvE2hnUFkNUytDQfoqCGbjZbuTSBdSt5L1GQnXc5sDUGdydc3K1F1ViT5YfDgaRqVG277nWomynivEZGw",
  "key29": "5thhC1FtPigev5BbZdpM1uwxZNoJHyMDkrmnbYNET71rLt1qDYzxvVMvHjJ956XiWjyNiB3eQcn5e2r9gbXq7nHz"
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
