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
    "2LzSQJeRfTPtu4cwWTLTSdhgMf3Lho5LysV2xHCraaJx8cBzrEJPCofVVcYtpzRAVnjapcqu5oQNutLTPp14sir7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gU2of4oD3nGnpGqF4cSs24sHiS4BTGpJsH5jcuPHjT2t3CN6v8W7BunQziFUGWN3Hv9rw5osJpHqPUcDkh32jLc",
  "key1": "3v13pyDHZipYxhCaXdxvgXhFmaJ3zvrMNDtkLckgQ4232aXsPtCP5wa4wuDtidfvgMuTPbcXcut7XMNwuk6fPukk",
  "key2": "3CiBoojPXkcn2QdS4pMShpra27MtTTXLk676MsuZDnsdbnFa5gXHsfWMbYvXYnRXjq14iy7UpmDhkMNybk5mk4A2",
  "key3": "4gwRUXvydfBvTw7muHzG5UVTYNViEkzDaq5QNVvotH7PrHqGAVW2GWxTBAG4TnvmVWFvi7i6P7e36hLjuZK1vtLL",
  "key4": "4quDPwEBZuxmEtXwQ2a32WshjhVa1HP968cbVkg9wLFGWUotCBicngWQTVtqgKfsEmwkT6SZ81ZmdDbMRzzNvDd4",
  "key5": "5vpC5oCpM9CeAGkX95b7ewoQpqxUAgtRPvZJG3DJSiSX3FqcW7q3S224Ktd81f5iiSCmDe4DGKNSBqAyCJAUDbY4",
  "key6": "4vJR8KAELsKEUJ3AQzXZtqf6rYJVGVp7UbfSQxXStMuHoHtYca2prJkPxe3pxiodixbpqTtdr7Q3KnY7zK5zvz9F",
  "key7": "4NmBHyiZLCkbzuGz9kpyvg6wobfe7wJVXUK8JxHiCybHRwkyNoBQEzW5rQGxDEJhdKpcWZozuiS4kRJyZvFfyaVu",
  "key8": "3CYWt6yQKKXJhGPs5PnPk3Wn9hcpwdyWUkPhSibf6TGEHgXJGXZbtUZQ1zJX2REXUZtp4fK5GN9ed2B6FTmDuYYT",
  "key9": "35SscdqzH26LDrGJ44LFF8KrS7U1y9WxewxcYEGbHNcvnsxLcaJWXmesJHnnMssfLhw6FEBcgVdonYFQ4GLBLCTe",
  "key10": "zhwiLFBaQM5iBS1dCWwPELzWZuQZxAET9Efzc5VzzjCStXnoE6NV8DTCMR2izaNG9zv8CWtaWt8fg6vQWWwQ1VD",
  "key11": "4ytKFJ9y8DCfLEyG5pVYTMmJgdJWznPeMqK2iXjWBi4mRhoW8NUVwtTnwM8TiQqFFJgq7dmZRT5ZrZr3QsaV16zP",
  "key12": "2UoRnmqw9WCyuq54FWZHsBD1bQgtnx3qhTMY9fYqzZkKi2GKKzSJ2kivCzQTKqCg6BVGbqz7g9VgzYpRVPVteyzL",
  "key13": "q8Ubi2nQYRhkHzCSBByhM4Uxt18NVFF6bhYJqdk8N82JSY4yWzFDTV9duHy52cUMYpQUcsZKyt2ALjspus2if4Q",
  "key14": "5GWfNGwGtYzURwCiNe3UWsrow7qCBgdWSy5RkGQLjqKnHjwRwiTJmqyVodY94yy5zuK1bFmoLXYu8BBS8fQ7aSfx",
  "key15": "4x5SaFm3s9ahHrD7Pkkpxneqpj5YBrdki2Gu7DhFL8gXUhuazvtAvrQr8HVYxjBVKBKdbnKv4qb21fBvn7zgQntk",
  "key16": "2daueGfawKzpNaqiz5YJLTVeUbwvZ1aNXL3PTvR29w6qvVc9Ww12efxWNkUwa62mxQf2RPvfMvtRZ9PfoM1NX2kY",
  "key17": "3dfv6sqjr6yqAC3Zx56gZfnq8Fg1MDt8DZASbpYUmKxNk3Lsq725i8vY86ppSTwBDm6DUguisnS5bA3uSVkrc6Rq",
  "key18": "32gDfRmTamSrTX2vvxwYcQCUwkLoFkAyHEgV4JducLDiQi1yWHNYVrMxFAdUUUJ5ZotaFdF2NDTSNjMaA6BmbutA",
  "key19": "3cftrYFmRbBabmvNsZ5mwhC2a7p4JU6ms94xjWYghZiDo4N3wxqohYVVJv9Rd9nYuRgmk3xkQgfS9QEarNLS2tdA",
  "key20": "4c6hHfa5isjjvNamngWiuxg2LYBCCxEWuxs2q5X7D6w9veUbyLBTjPCeKk88zuBqiy7VKAu1dfWkfv5qd1fmyMen",
  "key21": "3kmTd3FLH1LGSaeZqb4CTV6ubEkiNCvJGbNep29BVQ3DTi8LGSmqRi41ShVqbJGyVa5uaW5TguBCvCgrS1Pd98dv",
  "key22": "4w6awCXm9zFeMitvLwSyREqcjGDjYCQVobcPjyF3Kx5CUwKmtQV9hBMJVcH5hmi4gfEXTw8PsSX5vCbRcWvsjNba",
  "key23": "4zrzJCU8rVDGLjNjCykMXevxxbsqag1rwhP3rbGLYMHdAhUdhgPEyXVHvfxAfXXHeFeZMA3P6mYi97vuP5AoRUf6",
  "key24": "2VJGwZJBRA8DjVGoZvbqXgayjioYtk49ceLJivu4PWDTS2XcE1kYRfexd1HaYXUuthXENnizLqud9EQ7NCK2A5fz",
  "key25": "3yLHDUCPHnqN76u5fLv8HoBKRKpjjHyhjY9pR41yn2AeD5Ryp8ayRhBsUatiLvsEUR7DZS9ADNXTfRVrJFg1zobi",
  "key26": "3JN41xWXHbaCRoDyKbzXWu4Gxmms63dW8fCXKpzf1sVNrGwaR3aGZTgS557Hb6xci6czaey54PH1ZXW3cxJzj74x",
  "key27": "4soSDHRq8ubid8rQLbJv8CFGJxZrCgsp9tvnEAf7vqqVt1DccCnor4heXpfcwJuEgeSExwAdXRuitcWa2Nw3aFP8",
  "key28": "NTEm7ZWP5spYg23J7LNSxCbKgCNh6LoBXWo7WJ7QrtjmY8MBPg53LUVnAPyQ7rMhevfPeC6N4ysw6fmQqnJD57n",
  "key29": "5PqpV9A3voP6pYrd4pjjbzci7KLmUvatb3XaK384HMKjDEWch1ZFBqms3jKTCepxjzyhsgYYjH2TuD4yXL6hRx2c",
  "key30": "3x6ppk1tTycKD6mgtfHgmwabaYZK7WEsYTjkZMZZcad4UbnwdH8PT5f7Tn3HcC1FRCmXnt4UbNjRC26pwS1PrARR",
  "key31": "UvPTt7V9GvNwWXNHyAgGxuKtMH57sHtcMSZXS8CB7iHShsnKMWr78yTg4Qi7YxiHLj97MDCyajWHo6g3NhHAS5t",
  "key32": "2onuu24nqRDt966iaDrS6r1CyCQhrzDeDuMSKH5x38R9MEg1ar64CJ2ZsPZdadH5g1fghjAQZC7TPR31UPtv4vJ6",
  "key33": "3WHvVdxm5YfX3CsRmmC4LwBgV71RhuJ6Bdcmd1nkxLPFKZKhi8CeqZHcMb7XZb5y3RzpA2W9GH7roz4rWbjDkQkb",
  "key34": "66bm3wx4QvzXQZfe8LZUCb6xVyfEjsp9GvTwt6MrVrK9ZvgGVjZTE3TYj25KWMtCCnuKAX3WPbc7LFvG5uBtYqj6",
  "key35": "5XmLFvEFN8VzWEVP4EMj1tEHkddG4aZFT9hqERzuZADhnromzukcsVBXJrDc6CYyYoajU5eVt97hzQcTku4R1hi4",
  "key36": "MLk4i8uTz8XVNAvxHkR3S4hepeGW4ZWV5DWszdayGPk9xDnCTTLCf9C76oDhFtGco2P5p9NrTv1kc86UdFSEwGB",
  "key37": "28TVgnLKrKVuJwm7FGG1ysvvLcsBBBTGCGq1ZTKiKmBM6MpRCfUiaUzDRxUu9Nc7PoTGV2fskfYjWUVmbZuHUp9A",
  "key38": "4hNS4UKB2iiJdUXRzfxMbsb43LJEXQRDtDx8i7kiwUDrCANF1oZ9XXyVWjVAz4rQzyTyjzRh9gPdY9nKdWHyQz1j",
  "key39": "5ccJ1tdQsYdpx2zraATqcg7YJzHPwe46c6DX7pEwE2Fwnfh9XyLgmz5GUJrb8LbX7PnAkT4iJJ5MUFZSUeApUR9Y",
  "key40": "5oSiV19rtCRtQYj3J2MQtwfSjXsqpdRMkreUuENHfW6TrvSKaTghS7DzVev4Jc8iFyEsGS22oSNU4GGXRjTH7f7S",
  "key41": "3bXprmLW7XFGAbAyvuju5HEuPJgsQ5dH8R6GU5RZWCxQ9DgkLr1KYJKtbQPAPHYYdKmWJRPnn73icQsU87HVHUYT",
  "key42": "3ueSAQzbizx946NUqH9Y8PXfVuKj5ed3Fywpb4jTuGpWoFSejULisFwb357sGqU8ys83KEpzYKqqi2UFCzB6PYZG",
  "key43": "38sFSXooZntPmxDmDvu5RFMiN3DhDCZN4XFTpcS3Medru1bZjkU7AmN5EtrdmsvzbYH6KniKqbA4vZBfCiTBw3Vh",
  "key44": "4z2p9cYpnvgzCorx6dqU9yEb6mNBRCc5HRo14zbcJa6mmXjY94jYbCBCK6LbJqzxkgxvbWdh1n45HCdQxfrpL63D",
  "key45": "5NF5kCNqBWrgTnybcMbnqy7th8tbkguA449V54hFpBrUzm47mnrnKRQXbeXoy1grnSWmvBw4BaTVBMyAW1EHNv9i",
  "key46": "2FSWepp6RenGap4ohQbRCjAm7XFEtgP28UaUdWcqNG6NEX1GA295XxgmkBGgJfaPwkRoUjeeosYZDSAcU4CiugnZ",
  "key47": "5xythvG8bUsHqH9QRJNNG8MHcWMRCQkeChv6WFhJMxAtsVgKJZMYoWHJUG1WjecSkSdUakx4kv1y7ENwc4t9SzGW"
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
