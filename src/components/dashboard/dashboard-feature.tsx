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
    "4ribEC79K5vcpUnaHRoPwsZ4Vr31xZ8qJvYQbuSg2cs8aQjd6T779rbqNnDL3fj4V6X47QLG2RocrXXXz92G3RD2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QC1MeMYhU7ZNuN5ZGozMB3Qi5Pcd3Rj3Axshwaa1BCjamNrvrKUXhnAmnZTDVbz4RsykDbo996KkR9jz4Eczg8R",
  "key1": "2GNMVCHP7jUHofU9vrsnbuLqNq7UApoE4F1SUSofYgefzCPa2S3h93unzuxMyf8yDLiHp3GYebdvt1KJ9ExUARLN",
  "key2": "4BqShP6H14vc1YL1HM2DzDwqMFnxFxf92Hn3HVm2Z1FoJYcxqwQYTHD41GZ699JSn1TFqHTdSjdmdujqNhEtYwLB",
  "key3": "33j4dsMpMf9g2t2MYrWjLaHjGq6U36ns9ADPKszLSK7AT1UVX2iuHB5SBsCxphTFHUF6wYz5wcvncHdLZoJhsNYt",
  "key4": "4RmnZjVdWJgyutjXTpq1uwuim8znUBYYiXcBcxDhmPS6W1Z85E24pkABoTCNxB5ZQvcxXKWhCdwQ1YedEwAJhKj9",
  "key5": "5m7YJwhqTsosBKPVeHQkutaiTj8E3eCXQXeE7SJabQiuKg5u7zz7RVVgVHeG3UAT4bYfsTWhdU84hYBo6nUojUNa",
  "key6": "34kZEhD1ZNCmZuDtN3gXd3GY7dAEstdjxnXHLkAjkgPDgPTvLvnAezVfbG1xpkbTRhQcc8Jexw39VUt9iCACzr8c",
  "key7": "5Mvb575zucLMwRRiogh5QuiTyfE6fKxwAJHj3NztXfM98RbyG2sBP3Cjiz3BxhFAzYKDFGutt9hAryASALyS7BJs",
  "key8": "2NarWqcSiE2iktNFryAmmzsRd75K1FBpoyBggJA2F5f4oxozNrrzpMAvKPAcquBbpvg1XDC3K4U67vgit676qeYG",
  "key9": "8XfdJxcR4t54cRNmhZqfNXn42Hx7NJ58gGmcZWyM8rP23iuVbddLydnRPoK82q4ZCmmHFLU62GTrsxYfxQ7Xmyg",
  "key10": "39S2dC67n2kau6DzU4v8x96KQKXcRMSnC7jYL8dSYRDguvziSB4AYmJivoZnnTEkvaMBXyp2b2YWjm6yJ6UXUsyd",
  "key11": "5U6ngH1TauNXz7N7bbuFzsD28sDWYNcV73Tf8XbP9R9KVZFDF3Ly4wa6KK8tCGjwHqguMwehgLUVWVbMXNLdiLT2",
  "key12": "5iapoYQXABYMvqmeeysdyUnHSqTdm7PLMFzSEg9EkCR3WjV5v8yrW71d9vUPWdd37Z4tF1MT1R6pRDvLHsee76Q9",
  "key13": "2kasBchUJcWaTw22zGmVS3Bqzmop7u8HRyGkStQBmfrCEoubsKraWcfwwy5zBg4WPvRdi8jjva5qyfGjxjwkR15K",
  "key14": "3md7ekiXMoucgT6F4tVDDMk5cEUkEAbZx4VBCGEAmgbHuac4Kxa2yDooscXU4iBLkmQ1G1tEuQvWFyvMBD3zUJsC",
  "key15": "4by5TNWmPpju3ALuSnT2Enbf7MZjs8o2J7hQdi7YjbRnf7NkwAFo7R6cZuKwzUjcECJ9Zk2ZWbKs3g99p5ibtVSP",
  "key16": "cXgcms7Tw9JDmxXj5YGnRiHyQUGszMttbJvQ8n2sgDMsrUmAzwyEk4UJj3boZWxqhALWQ32HK8iJNWvnB4hLjWK",
  "key17": "G3g4VazVfCMNZSsbgPtFAfG5NoEW3CvMVNkvGs6Cz8GDqCx9uemhcfZENh2duTdvsCCee1ULs8wQrVNgB56UwdL",
  "key18": "3TB6fyRrbMm44WyNDPYXasfBFtJppJuAtBzqVGSfi4MKzpUjwSsG7u8EswWABsCYoqLnXYqijXytkdNZw7EPF67X",
  "key19": "2swkxT5BHu47KsFvVFKBHXyTbbJHxe2UGvEyhFyJoemRKBksERzZWusFRFZXa5esXEd8zYSdPvPqffbQEX49GP7W",
  "key20": "4s39qPDorAVhJ2js3dG7GxC2TQKLui4RRpp5JS6v6DdERuHkTW7a41ebFD9uSUf3MDCWpqx8eVtQ51kLMPmNknzP",
  "key21": "65DZxjUBiQYsaCP7Nre6NHhuMaQvSCeT2feu72im5zP1TTTnEeXggFEAbxfAET1AKMiLNf7MwBhjgcCHtgDNgsqT",
  "key22": "3Gwtr2pqGDDqdTiFmSAyhHvHoUhvFnWH4yYKuqqZ6HNEwMSshiT3R4jh8SfxwuYL3CkmhwQC2pEMYbuaEu5aUWeS",
  "key23": "56q9mV9AU75kKdPsehc6aKTm6yiZ8HS21H1pdZFq7SmFLwDsKzy9paJNCgnB33CcVpWPpAVrSmA17fbzb3oYrric",
  "key24": "4ZbEmYhaZVcx1zSmGNQiyNumx7WdoUACVrh7FLBFrAkPRbtNtmNeZf2cWab2qXS3tLNQzsAkRpTuCW8d49axA8sR",
  "key25": "uY5ioFS93CQizSb5FuNjTUJCs4TA9phNiatoWQx4t517Dpyjfxng3KEW8cLHime1fokR5McdarB1nssMpVjWTJ3",
  "key26": "4rXRGdpxmtGRXdLDD1Y8p91YuR5oft6kWWkHq69b2qDSg7TAdhqyEt7WNeXyVGkdAL2ynkRG5GPQCyjR2Y4KG3wA",
  "key27": "4X4b6LtyU1q4xMjN5ktS4WnBHJpf6FFmQXApF141HHgqjX4m2TWaPQZx8igAatPkZHe7q6vjA6kTswhLoL97K23T",
  "key28": "4xmxoZGyDpbcD4Xkb6MUmPDqemDKUTsHq3n7TpP2VsTg7KBSMKb7768Bw2PB79h17RRNa8uMQq8WHVmjobhZwP6t",
  "key29": "kV732MiHJhUS3LZ2iLwHDB5c6mKSFtd1FbSqTTPRfwnUwsWvkp85KknZ6GS3VRzWHGmTr8XmMcDv4uZne22mqr5",
  "key30": "4Y4XaJdiwJtT39eqaAhQPWScpYxeLPgJ6JMcdToEkMgEqTLBNcCc1nADREwH7MFj5sujr8viqss6rRuap89jCULz",
  "key31": "civagYMVtEPnjv3rpEWFrfv2mxEYPp61sx9qVdJtSh3Ko2zQ9wY4PuE6Q4t4b8R8xfWC2pNVsPb1Q4umJqNiTT3",
  "key32": "4AvgG93mpJiCsd7KZdLFyHAhH3eBxzRP74d8aFkKvHAvNPQpBg6tQqvS6HdD5CiohUYc9hLkW6CPy9riQv6BcqHp",
  "key33": "2ASAxc2mvANbxR3oCwkC6UZ7gPFexQwQDR7MJnauEFcxXj2o3uWXmDMCf91tTqoighMF37oHBxqkgogwpi7ZqNFT",
  "key34": "5ySRHcn9LxZeicYPGU1roWaYBTU61iWk8XsJqUra31MBeq467nPpUBMYxAPxcyG3vW9Bm2DvrXY9RFDNKN7T2GGX",
  "key35": "2stwB6CYWa1G9nKrLgRiwMjQRpE9ox6mRrbmgH5V7m6JW9EjkuLxQJpPEBDA4TaFsTx1Pe8ufF19rY7jZH28keYr",
  "key36": "3nBiEYwBSubuDy47XqmB86jYmpz2v9fQkpSHr12DiQu4xcMN9GPB1iiLTXRV58fToanBomZfjibigEijVchqgDSx",
  "key37": "2FtDt1s3JUbuV5UL9MS2KdiGuqr3d88jHRE8Piit6uNCEmkV4XA2TAcWD7TCXdffvrYmryN3BvAXCKW8wxh2Vv82",
  "key38": "4V4NyR64b7m8ZSTzdxofTC68edyK4kByMAQJByHCh8HfsZ4uQtKUfgGe7dcruzweF59RpBnW3CYqR7dgMJnRUPgq",
  "key39": "5eAnQtqDGzdQfC2J6EJ7trq4ECaXmDeLPjTcr1ym83xuoQRiGsCRLnDeZK79zdWrQDnhdn3eUXhLwXHP2fJ3RbV2"
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
