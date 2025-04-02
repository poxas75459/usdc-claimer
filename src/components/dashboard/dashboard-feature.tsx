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
    "259CeNznmckjfR7NSz8u7bRVgg2GTBeQKvttomSNaCBCyjDu11jmH52ykrgkw389dCe6M4EVbPRXa7bGqSAFGXH1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NU7TmFguuuVa5oZY4UGnjHKTejU2DRxARW87tewS29LX5agSxAAuhEjre5KpcWT8vxqWgw2HwKiMb7f8HobxcJ6",
  "key1": "4oBCosTFf47FgtnDd8C6TLMCLpc8CzpDA2QXiFuXndce5AxxneB4H4D9yQmAwhgkSXrrN54EqgsRUpXU5it6aJ5z",
  "key2": "4ZihHjAKoiwkMbLUP9aFWzpHfQqBJ75WgAxtKFadhEpV2bpUK17Fp5R8wN9V5Pd9heELXfhKnp53ZU5NRroxzCHf",
  "key3": "WPhQQqDgRBfpfX1fCERNpmwQXQxJBeSDUUEmxACdkQnNyxWrCa2Eb5v5XuFA5RfVksNXR4k5g6vPsNgrQR7P2ir",
  "key4": "62uhfKp21KGEjMBkaR3UTVzEGzYBZQ2up7Rbq49VeeRr5G37hsiZUGtoNWmZw8nY1Jcx1qNu7iVkG8iQdizqL2E1",
  "key5": "rrU2rv5oyTMvWnMBUtLFwHfVkVccAGeRUFk8eTup2Yy6k57w9PaMWEGJkPceiFir2YRXMfRVA4VBeY6NKPkwG6V",
  "key6": "5V8gtbyoQyz5GZi1LABwE7ob4KQJisBynvwwzuYvpYaufofGvLEWo1rqkRoA2DkhNvP4RPwQCEj5twC4HRP7srcY",
  "key7": "5kHcMMnHJ7eUHqkDNa41oMJZhtJM633xgUXazhnBDzpdws77L92D395Q742rJ5h8gPLgFyxLNyExmDdvRcC47WSk",
  "key8": "2fLxcsoF4EV91MRFx98QPhmYvsHPCEP6EohhcwmkFsmpKHCPwoZrMWrxNkezogSUtCqRRet9yCAs7vp4h3JqBph6",
  "key9": "4PSuFNwxe621v9pbegdM6mYph3eMKezzNhjyw1yKjDbGdFDcH8VzS4FFs3AReUUdiBr8Uv11uBtQpWrdNKJ9wtJi",
  "key10": "4x3Spu3eCsqV95FAeW8Pd8AN4RrEEiZqCai6yz1XERmdXt886yVzeqzJHbTpzzstwMu9FSdxZE88JUcu62M1zKg3",
  "key11": "2fVLjAThYwDLpZSYH4YGpkxgKUoySVNGq3VA3TspRA2BY4D7QrFH1RgmEugbNrgwopfNZBh6LMvEVWaYWJ1d78Bj",
  "key12": "2EAmH9Cxx7dpThyqHKS1puZxug7EiPihM12oSqHnH2Nf59C8zgwVPtatMabtRAuTMVVrQT5MQMEUpksWB7zSixaR",
  "key13": "3uXkJ7Kx2hL9Pmw4MqvQP9pTrMSw9LQ3uLPZG6TK5HNFue1SnuVuSQtbRLeDUyz9WuHUYsGAcxEG7wcmSPAFNXdn",
  "key14": "3LPp1sAtpssihvB8xt1AUepGDTf1eFFyfE2DETT7N51gN2owXSyRt9eGPenymxKWNfzbDkPNzi23RigKBbuE2Hcu",
  "key15": "5ditosKED5ewiVVskb8iCgz39kLQiVvRe7VHDZBQFKb5G4c4QRfAyy48iFVw8EpNQYofNxdRd6ALsGSfRQubzNAr",
  "key16": "2DApm8Q2TZEq8VEQMNaKEAPBf9jxAHUWZhLCHX88XrcjLgcWkhzjwYhKw27Zb7zEyKSYxw13gFrZ5dhZMjuEquJQ",
  "key17": "3kqR3rkhrScmPDoJ4hLcgh2TqQLphaJv9tZtmA7T2Jviq3YMTzRhLTB8v2jCx5oyyBeSBePeNbvd7bmEtvNcKzj7",
  "key18": "2mLec4A6mGmYjZEicQGnTYK9wZuvUqthfUwyV2fAxizZBtRDFQWkZiNSDYDrfqLyKstkVKS4dyHEZTG4AjM9X4pj",
  "key19": "d4AkFyX6Tn53zTcQY18LoeAkEACBSMoTjwZuZiBmYBD78g6Lfe6oCtDfMX6Ru24CoFt396ohzEU98JhD1WQhAKj",
  "key20": "21Z1m2fLEWT3MnGumMtRMcMh7NcvHf5VhjCjCRXUrDhzQCydpbr3LVF9UqH6YxArq9RFaqj5JwjHwfttWw2FVxLZ",
  "key21": "4zyJNGY3rNwzZYYyG4gVsTXsrKVt6yd3NUmU7VDUtJgzk3PiaSJouXhd33B53xHNPts9hcnprz71rWQNStN2xNXg",
  "key22": "c1qAm7FZnZDYgJ1kMgZgaMZaK3J9ZLoyzhKz5EBemuF4h59ns5tdFuqFuQvs8s3X5iXWZvN6JaZ7UyXtaQXLg4T",
  "key23": "2WVnTFiDMxpJ6ZRVziZV1JmWntkY8FZAamXgVn7D2ZwRaQ99ejWGVWaJzAnBFb4fwdiytHu6D4dRWHod1DVdwrrd",
  "key24": "DwvQA6wFwuDjE6RiJURzYinjhgzA9km37WUYNjnMgdFaFEsrXGk7DrPcUDKcbqiXrGodHbRG6EH2b6mkgqveYiJ",
  "key25": "3yAfV32iHJPLQWyzCAQGckvNLErii3pcViHM1kgD8RKx9U85DXnxf7ng5brqnd9FDc8PoiaVDdpp1X2Ccqvci2GT",
  "key26": "gPRWJDK2M6NXCjifi1aNJtP9ELKNCQSMtebK3CfjQNNgwxMT76XSvBiozUvzpngTxaDUyL1MTq8svygG7hCf1P6",
  "key27": "4XrmzjQZJiJ8Nubfw3Q4J6wKpVbkzPCFPFLoPAv1ZbETmPu5uagvpVsHcFbQtLTSGdnDvsw1fcAqkcSKVAM8Aq7F",
  "key28": "4jNcBaH8vX1wTmoonZpTGNtaXZ1rXKwV6kpe8VRdD7LzixmFKxmfdiU1LJ3hdhehUvRYD8Kqv48mgENurtzNotui",
  "key29": "fPd7rrAUQg3GHZujBsXVgBpe2aJkNbS5P3VQ132zwDcYKc2DpxogWCxF4UjdBaTWMW6GSyyg8ELs2WngpPufENw",
  "key30": "ZajB6YDTPxi9yq1beLZLt5jAnSZz9XyqvwUxmhPca4CGaXWmXT3uCdbsZRYYLWkYy5EuQ76GpwnzrkvhtN1WgsN",
  "key31": "4jDk99YPW6bPsARGu1EAYEYB4hJaPje8vkGKxCxPPKHMMoV2KXg3rUm7iwCwkN6pwbxYGLQmUccbXEVGQG7WFXSL",
  "key32": "4XzwjdGuqrZ7K9xEbnNgfmUKdpQZrcwjMDrz7FdMEzQZpGCGafjgq3gzPtvG6jkqugmgUNTegmffqjASWy1Shd4",
  "key33": "LBB7ZJ2V8B7Vi2BKzHCxDJPDRPQ1A1nyycLmayzkHJ9FY99jwmZ7Pe7oKXjmY17kFbMZLdL7xnbpwS9zEsW7z6h",
  "key34": "5M698sbm74RX7Y1aX4ggcLf4aN3UmuYKEcbhsKvZJHDqr7w4GLkrJLaXSjCisvo5eMpHtZmj8CsHk1hjMv6bu5TY",
  "key35": "3dd4h1eZhR4xEcBC5DhjNw7ryLPU6M3MkQSTTwfRQn9CKDqQzYQEpXJYXrZa5X3Ew7G9cXdRPYqJNcrd8QnZ5kBp"
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
