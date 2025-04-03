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
    "3wqeZocL1RFeQ1uKWfkt8MoP5vGUjnfRDHkpBaDj4QtwLuBNaWbvzqu4kxj1MfgH5PEPcnmvD55n7N85nvAAiQZS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52h4SdQDLNfHs1yxQDcLq3TgbTaYU1K3KpvNnCv66PQbCQZAUpgRSw6EMXgirKZsryixhVEokSbtZ3LFDJiKjQ4T",
  "key1": "4jGj2r45zUtiQgbt4WfhEhwbzZDVT1kBvEWPazvw2zfn4KwhAobATWKdnbLJdzVavEiqHsmKkj4a9pxMPFEkj1eZ",
  "key2": "4Mr93b1fvTkm3Cmaa8dDKevZ3XEo8XStPohtCCMD5dWRHmGXsEAe8QdzxVj5nx1HNbfiytJbxfyEf6whdCpoKQfY",
  "key3": "a8v74Mik7Us4QXesFssFa7CERtMh58N7WB4LK62HrsHDKpPJAEcwwGM9g6Spq3tFJxa1bnXL1zTQQ13xCQr7SDo",
  "key4": "65MMtUEp3xj9Gy8WJLHAUbCTt3dcUkz98AVmfXbQ3BWBZQZueLwimPcve51EfUmjMYYnCY3Drfi2vjxLAXmDMQWk",
  "key5": "3SkFJJEM2ViQ7wHRB7QZ7zVM7DK6AzEdxXwz6jHpYnjtTgcxiJqy4MXjDBQJwBD493yQGRR4W3K5VEM1BzeX5KBU",
  "key6": "kxVtohxELqjyqyrreE1GrbWC4wmbktMxN39ZQ8qG8EdeJnFMLPD2xnvExRihWKtyPAMJ1A3WBQLEmiCwf87y1wj",
  "key7": "4CGCW79rTrzs5258aPEhn1vpCsbCLs6KKd9QCT4Z4d4F6CPhXDVgSww2HkvEWmDsBJzZGk3ohr8WHw6kGK3JW75j",
  "key8": "369zVjyM39BFkft3zRJP9P4zHcBbeaXvDsKJgNJHo1264jrv3KXDp2eWAX5hJT68a1p4M31DYvSuvF3QdtwRt6rV",
  "key9": "2otYYrd2KPGemVDAtpD5N8P85o6uz46MJpgRgGvucEPKz26nAYUYa8XXSSVh9v3bFWJRZkqbtsWWHwfp9yrp6GrG",
  "key10": "2D7kDdjAkAChP5ZwVAVr5i9tVfiPYe4iNhbpoaqxtoeBLxfLpQ2xK22jTerFsBjJqcPsZEkUaAGEfhj6eRkx3ubL",
  "key11": "3jFhM2wDmitJF21tVWP8nSaiVkNQzErnoYCUfUQJNsvLKZYQJ5Zdsmo5XH8xGhLfmPCmxSWZnXtu26CTztyS69Z9",
  "key12": "3ZANffzzX915TBpf4r7Cr28EgD3dFdRfee5P6T2xDDqttWtDKcizHiQXVNRtzmNZgtvAgUpcK7atLKWLCXRPhTHm",
  "key13": "5Uvbyd6qerqGJ7NGGpPLDBnBhe1RD9w1CF4c4DEjpGdFY443hJmM3LQCAzyda16y6P8iQiGrWMBDCPXP69ZYzrMm",
  "key14": "44HEGxLjFa8FzR3Xo2RD4VQ9Hp3s4iwFkNdRET8woDEJofhR1vBJd4BALb5yx9kyKAWTMwiwzvY2AUGo8LpUNcjP",
  "key15": "4wRxXw2FpB9SaiPJzYdcS5bkxnBAgE3X5ocBZHPBjbGXTjpPFU9VmBwzabRXRyXBT1eRfvZK6Hmt9R2dfC6k7HPn",
  "key16": "4CxDbKTuDbtdnwdkbEC6Q19Jy7TeCMFvSsw4i9RhY13mrtyqYyipbQVmocomi2dNv9JkF7Konkrduu2sTeg6R5vM",
  "key17": "5FStgr6dnARkB5ueZP32uAZZWDCwurpwyoiq4WfSmNQFJTeyUYe4PRMa5oTUwXGtkTQ5xe1NjC7S5C2fYN3mcJEq",
  "key18": "2nBoGe8NZk8vhG3TpeXaayNpSXMnAbq8EiH22MxnqBkd7hmc2QSZePvt7j4eL2uYb2Lt3AvRWT5zZM8AMZ3Ey8Tj",
  "key19": "3wPNeBeANzbUcV7cXeHsMDhdxhF63kDQfATiHRWgLHMcXY8BA7RSo4NysxwuJ4qFLRaKZxJbXi6L8eTqYLEXvEBj",
  "key20": "5p6VCVcqh9fLyP8FbDm3HDUYjHb7nCffmi6PQZJ9oUvboBjZkKYwcvYPfh6zkqCydzw88AfTg3qptKsJ6sQavs6y",
  "key21": "ngpsWku16tX84txWqXEfd7SDR9H8zMDA3dDEDQdmi1gyQZ3qqEKnQE3nBNjAMxSWp33MZ7nmhDoDzyKu7LosocF",
  "key22": "3hHvUApGtNgTtG8Qm2kCEEnWu6xmAPrRwFE3KsZTFQJzEEKKSS8x1yTSB6aBXpg8nsqMFSc3P2sHPX9iLEcbChGk",
  "key23": "58N8RUfbCHQtH9cgnGHm6Juohtfa3frfjRiGKSBs6FLhMsnGoEbM1MtJvHkXAEFyjqezSxY9cgTNSTQ1cb5AGFiW",
  "key24": "4CwT4rKBuR2ndvuUoK2ko9W9zAugZfj9dYSiZDDBVa2CBcVNLcuNDSanU2rsP33vceiE89LCBfVK89d3KVDU5NUB",
  "key25": "2DggSihoUwc7W9ysRxDZ4eJGFxigeykGGttnSjZKG6pq2rB9aM4Wk995Q8HpVNZWJLKrQ5tBdKY9XGDkzXwyeYv8",
  "key26": "3Fx8J38kpUDPF6UJnWNUWPdX5AnnajMDQRQDUW2Kqntn6P7YfQyrir4CUiqsSYgV7UV1p1WNbvHGjAb2nLTWssvt",
  "key27": "48G1FqBTGGm5aTgaSMB4dNkT6S4czMXDQNKii7V7E2dKgSi32J4c3XyNsVVYLjXKcNDYgvxE8MAb1Kze1jTKnzs3",
  "key28": "4GDrmrFnTsb7frRWvXD3oSoU6Usu3BNuV1iLA572aBeVY11hBkcSbVsGGPgd97WgJC7kLg8ypcoHY8d4GCjA3jiE",
  "key29": "KtwazUdUara3DgKECgRJc68WWmCVG7DaBSkrgNTWVyspjGQz1gtYfTNEwT6eejq9qwtoej8jsZrbrSq5nkkmtnQ",
  "key30": "2dJMdL63iL85Y1bx6Ln5tnJjD1i2GqHpMX9A7FPUAe8LA9PuV67LxCqRrPftp7fX8MzrJf5mDQJUceGnoTE6DQUq",
  "key31": "35xJnY2T1bJoLEBLDQtFiXaMZvNRJv2UqAqLdNaN5z1YBZWJYuzLRnxbQt5yq9R2ys7UyiPVJkNb5wRoZGj7r5EJ",
  "key32": "46rpW2j5PsYGThw7okjRrW4UrK6vVoAs5e1QcmbKYVpAARFRWgu3UzFwWonnbCpuvKfUrXUmqrwGXfDNcQvacBdn",
  "key33": "2rgjXDXgV67eUn2GBXL4JDryTcfB949cdmxL32UWuNgTKmD9uN5GnrdPkNAzTV5UCybpan9HT3APU6aTBZxt8mYm"
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
