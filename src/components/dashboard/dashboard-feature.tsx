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
    "2jr3FVkKmHR4rMj1hKcd2aeuGNQRKo1UWeAGmc7zM1LpYoc3waEBC7iDLQmkbx81enjwhhoQKdpCqw89YgctZxgE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fUhfidaQjJuYkATKvHRVfxjKnbbBJwqxTPnp5PhWk8SDDrKu7xwiVVKFoiZE6meUjkhk4BL2Wdi2FrKjq4wb3Fm",
  "key1": "5DKG3JxHsRmKKHEQdbw1oDEAaUfRgBVYy4bYEWSzH8vAi9ntsELnjkc7QY9BmRfXXWmwQenbzh36vgYAqJVpdvHx",
  "key2": "2Jd2nb3eBTrjR4D5NCkUrc6nRaNyMktk8TkChLuoZfiGkjBtoKPGWtYf4GjuYcTk4dpjzGQdFe4cXHn4rpdK2bbo",
  "key3": "3XTCPi4JA2obLmF9mNCVUrYsodFNJhVD1Gzf46m9Qyebvt8CrWjpBJ7BQyNY8LSh8XCWRkSRyk7yNUtE3MPd9ind",
  "key4": "4m8T6JQqFo6mHcaojU2vEZYY1pUmRBx4KxxPSfZ9NSQNGB7LxTTj9ww8xa9fP8oYuKXNuKg4Kg2XQYPmWznigXVA",
  "key5": "P44A5rJNpTasESNe6RpFeFQ85v83ywf6xAwCeDuaBZPfScAzDM5gZ9AKnAQFiuUfP2VpaBdux1JwNijjJSA5zDZ",
  "key6": "2pdrLk2QuHbmoikzVkAYcUZZzK1ug3ViehebjpRewpSMK1kGrHerv19VN7tquJZ2FFuRXn5QDXBSLT2hy4nNA4sG",
  "key7": "2qRx8DQLPUmfJJEY4UqS1u7kCA7boPavYDXH3Ef8n9XmetoXAzueDKLXqeb72QsRuNx5aNnVrg33mQpB2iZ6MNmX",
  "key8": "EtTAuJ5yrgqbo3rt4Ps1UPnm6gGWsXAMYP3E7XFp9txtSVhpcUM8gtr88a8Uzor7rJNJBfeXS45QSHqvrdzYsg7",
  "key9": "L7u7S6asQeTtCCfdERxvvchk4odHJAGXZXY41Ej4TkB2QU4HcEsgGW5XkFa82jgrpJifREbecx8ExLoZ6P8Y1Fy",
  "key10": "64dvdBTv5NgzVsRBfhSLdRN9r9UVZ9Ugm9BBMfYgoQ4bhwetCZBBVurL6vrHGE8SioD1rNAKbPMKLNFvYfR45d37",
  "key11": "2Bqo8zL77P1iQhfsJ76s9UXkRfhJKr55d2pvxvyTHzr1KV1ZPBEQAWi1m9eCc6RfLhDpjGPCDGaSsxYGMRKNpK9W",
  "key12": "mqziAfxwKdv9uxZsWvpwz6ReJbr9geUzcGA9kH3xrJe7zTjKtwpRtW9KBq4aVmBsEW4DcXdyHaYbDB8cpDTfdH1",
  "key13": "6531BHTWxSoMD9mwuo6oDWL4x6B7KkrJQJi9uNvyTerHTz3Qe3rwGp6AHsHMdeHjUVvC1gxZVe759F1AdYSExZWb",
  "key14": "3LZsHNezXpXkojC74H4d4TRhQjXWePV5L3ZDNZTsf5XcTePgLQcePcBETpAAAVHXtRaMv2s3HJkyE3rCA2kahX6Q",
  "key15": "3ZztStdrwnwzzh88QP212P3ag2c9j9esr8iR9gXrYk7NTgvzqmTki7VyRKtwSp9D1hh3HjLm4jqzrUCsWpiSKRDr",
  "key16": "79RB68FmaqryH24kHNGKQeaB2WiJuKtKbixdef2RSQeFQqrkmfP1SvucawwnsPB3y37vjTXQwjq659XJhEkJzpa",
  "key17": "55aZREGb1roWJA17QGx19rnhgejU6k6LVL4Wc6ZtTcsN2hjiVLhqXRx7ESU1vCAZMvgoe1i1EUgYwqQeDfysYjBz",
  "key18": "2iMfhNcoWbBBYemamNVUGhxPatYdsePPa9K6x5VbNecJaeM8ErvrPW8prLvhTEXnzxjNQcTd1Cm5TPg7MwRDoBkR",
  "key19": "3BxMHwSLGYmEkJweZaZuudefnXYnFLY5FtJvVDG1L2fguT3wZngEay7TgeLc6LcR7ggxL3GF2q8K6Rg3Xp5mFGBB",
  "key20": "4YLZ94Ap9EQ9PNQKrn77aruwYLign66e8RYjNrQM4pGSMwY5n3MdARCdHdrX93Y81WFFXrgbhKLc1xnwurgdFFxJ",
  "key21": "4ZG3v5FDjJmcjwraYJj4B8imrgeS3CvcPxrA4hLBYM9d6q6JcX5SuLSZMT26McBCjhHr2VBYdu5zSLwS14qkpqEE",
  "key22": "3jJGacVcn8WHCiDhHiTc14vJuZFbGMMVNq3DbCF2MQtgfsCR3mQyoYgMXGkooumbbTWncE6BNKXkUENk9pVU7UDz",
  "key23": "2MEeYrodazmJPgMuPQhM7dFiKGG6vxodup5LGwYVM61KUZY6QGWHY4FpwacTPrn8NKmxsSwLNK9SD4v5iiuyHD1P",
  "key24": "TXJCnfCZpXZJgNyDvG5zGZPtPTZRJBQtdCC7A3YH8suGuxdBuFmXTKJs8TfoSxukoduyMoyu3wxLsxwPDFYnZGZ",
  "key25": "NpYtYT5c9K6BrzyX5tYbs4yvx8u3LzXcXgJLmQhbrAdhuBm4ED7bQvGENLMof4KoZXmh8iaHUK9mU9VtXKNAGn5",
  "key26": "4ganZWJdH5bBbx3CAEA9qVMtFZUXuS3iLxtXMojNWnncU9skkNpnFQrFy5q6ekDYsV5xCDrSAKYu3r6QpSmEYP9h",
  "key27": "3ycE2pnKDBE1TaAWyW8jvYeuejwUYxTZDn67p4s1QLNbxLJ1DJsbWBTKxvWreC9k8WK3zsrkC86vHrmvXjZuPQna",
  "key28": "3jE24hEXBdqeKFpBWz7ktJUdU5iK3myxsrECGXhtwctuafwsdvbAEyoUiMjCDTkup5ajWEPxVHRXsbBhGQ284Ky7",
  "key29": "4w2htyAiBkUUYKAURbcZJxEFeVUguoZPd8mXXD8YoWoM8cHA5sw7oZWpWU9Vp4yLroSb76chKc4XBcLfioGqM5YU",
  "key30": "4Lt2MsyXtiHHqAtqxebGYLLoXPcZPenbHE6rFQcXu9TARzzbZSu6oVtqpi2FWukYzeCHU5iCZdbcYtid5xQ6U5vv",
  "key31": "597EjnecWdBgoazRq5PbvdaKXNbeNjNJiuT3vr4Smo6MgAHZXvvcQvyS6Gi8aRCnjAi432FDsp3nhnpAeTYKX2X8",
  "key32": "5xotUdevoVNVUyN8oF6TUc4rcfoLuHEWXC98zK5iQDhw7T8uN8JW1EwtyuU2y8LqZwzk6odz39KNBabwNZxVMCF5",
  "key33": "358ngv3VXRJv3V79SsW4L4UjnPvmwqLxh1ywYEcEorMSwbGfHBFq4weTcT1qr2ufkMxD7peuTi3DDiFpPGdrdexn",
  "key34": "5o6p2k68DU5x7Etkz4ZgB8BPKT1CzXm5YTv33oDGYKbwLzG4wVJJASN97VFWSPZEwXukqZb58gjEKewSeLSXG4RM",
  "key35": "2NA3vYv6TrruGL6B3AFN4amhYgjssthepg8msFgwzT8zd5b3dgsAdVU6coFi2jMQs8oFECJx7KK8dfDajhJ7GCbe"
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
