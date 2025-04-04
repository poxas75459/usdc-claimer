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
    "5s57xbQSSfsmDXsBCG6m3nmsdQaLv2UctCTL4eGW8f6o3zWcMyq4oN7WZbrTZo155KdsjGh7xrqUcuHUeoi8Jn9E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tLULVCosGvDFkcVzQcfT1o5HPpYccfTTGxH8YS8vLVSVG8FvDBUt7LKMPLtk3xKoVLVN9JsUjxsYgwGJEQY5hn6",
  "key1": "62asUKGGjhrLRG2Pi9iTRo82nnxrjPjdYwQmHz8NVMVYW74wxWqQH9YWWg4h1K2NqAKxJYhYXs424XGmfBgytta3",
  "key2": "4oi8Vb8itmihaFDTWnHezQrWDEagUdDdSNV18sEfuTGHU8JKPBqhhT9b4jtaEmaBPB4M39HxZ2i8zpbwcr5Y3MMo",
  "key3": "2P2u3oqvbFspCsgyEGZoM9DzRfjT9b37A6ed1c16XNY7HHrfe1Nph2zXcHgnveTb2so2qK3uSjTuuYeFf39vp2wG",
  "key4": "58ubBHakKpBXAndd2Uu8fifH97g9BZoLMjt6QiDLr666F6sRDCRr2dZiLWm7N4DChzkVgmiqfcHyF7teF9PVV4Li",
  "key5": "3FdTg5b9FzaQLGNCwYFMbm9zFewerZJ7udeMCfRr18Vw77mBD6Mw7oHhM8Ckkrc4PtwNCQv4rgVY2j2Jhpom1X7p",
  "key6": "zNHjr6P2EHtDpiKFXpDEmtFN5NJEZbErnewpaex11jJccjfZry39C3vyawKRw7hdadsFaox2pRarYx2w2ubZARm",
  "key7": "2w7SSyzFEt59jBcM5jpgxWsxvxiVxBW8N5mBvhd5bKggnQGR2QU1hZKAdtxm2g6npb4QihTAE7Pnuf4MijxmxyTV",
  "key8": "38UvFSYb51ahxe6HFfLwx8FrTzh2k1VsfmT95SzDiXfwyKk9kFrk1rewKsCqXJqooVRWqrKptqkpm31hYUyXrY7P",
  "key9": "2w7uEW8ZRfkWuwcpSGLD7Bo2EgpfvtHkfHNr1FKzEGB9hRWCNk22riWA7HSZtye9SSCpm1hx3rR6zzGyLpamsTci",
  "key10": "o7rFx7uCDnuvsw58wG6UkTHPgrHE2dYcbiUXU9VtK5mmZpt8x5K2J8MkiEhGWHru6Ly2JybW6UyPPeW8gbkfDbD",
  "key11": "4mZrpFEU7iZwpbXPHEGf9grRwvFQuSgHowDXrkE5FNpki3mpwwYRG5t3pQqFi52xcuFeNZSQtqToLP7HmCmxQqZP",
  "key12": "4UNtQvtVY8yQR1xs2gwyfiZAcVi2tjvo16YNuubC7GQZagXdJVjCwTz7VTinUPGc82NuMFY4eCHLtKCX3mUsGzYE",
  "key13": "48Kt33xn7kZzJZwqKpAiVwdieTbFcUMsjKhgY74tcpd8ewLyYkfQTFYPMSXzCF3ygXxzgZ1KyHJBqBq2azEPmAqp",
  "key14": "66NZwq3j3KGHFzSU1FqM8h49ovy2GzCxP7Hd4FrbFMaJVaX3J4GWmtxFL5TMCbzhpDXURviMyXLrQjggkCFqpBkU",
  "key15": "cPiwj6dcBJHLhr7oWEfufdSmNGZzMUeZywo7MBS6Y1ZaQHxNaHGPxNgHDyARJB2zgbeAfGXQJGDkAaafDz9pMKa",
  "key16": "4X2vzxnuTkoabfbxVBBXsWGMFGMRDDdF98q4VtSShqZcDRYNgQEvmuKnPRwcqt7RodwCv66vmGdtvm75b8YJAEJ1",
  "key17": "2KpJhwXKaTkizwZcP8jMXjrQgCcCpQRk2M3bMtyZ2SdDF1gMaKeHHkKy2KVCTN7h2gTd7xaG6fP9qRUbzp4qNVbb",
  "key18": "62LmoD3esXNfTpddnnQrieBuWeHSy1BypWJ3hkFY12sh6DPXqfafoDHpkegr28agLSRLDU2HgK8tgvaCzcnRs9MF",
  "key19": "3Raeuh6XaHDbkYeo6Krz6Q6gRfBj6iGqdxDNfGdsQKj7LdpVeZ6qZi87AQvf87qaBy5A7vLQ9cFrLRG3nbtgx7x3",
  "key20": "4Gdf8SFWzxzpakLRbd1fZ138HYfPDHnGjneqLVNTpKpbj9TFKRQvX2YUFsQ5pkgcyaaTESmusi4NCeZRcH8paqGB",
  "key21": "2uZsF433nFraFrsBufpxmuiETadekaL4mTqs4CbYntfnxyqSDHCsf3cAaDcBypCjdTLg8WZnwKmhTqVQojzWhoiG",
  "key22": "5HJsDxokTwbRkHRNXjzMMXfSiE4vnH25BD9eYSnQumgMBbp7CWnsUw4VLpdqmexJJmZQsaKPos2jJf2QYghXUikN",
  "key23": "3Wm7xDkffgbq2B61nszm5EyoJTJvdG5iv1UUn3h8MZXvt6TWjWvduWx8SryuYUKAYmAtSG7e5jAczwrw1DCGMdm2",
  "key24": "2m4WMMnQpsRFwgRocTYtDFDqd9Rb11hBehSAGHbZsC6tDpoaJHFMrewppnbuw9FhdzwVVUiSrNndfCyNSWkXpeEn",
  "key25": "541xycn9hJFDj7bRbYQrEnNz2L8TsRWLKrQ5TWmCzpvyHGEEZoz69PHU3TsAZFmZF7QLxhxifyCbu5sSfbp7Tx5u",
  "key26": "ZzUy6ZJqs33NsAT61bUSKt1EkBKA4CiqP6F6rbn6UtxJqmhqgiFhdg8rP8kzxF63eMJpaw9NKiEpKs7zZ6MQqTx",
  "key27": "YZcS2AscFJtxB5WW9JiHCtBYBKCEYfnVbKPiKHuQVD4orpc1CNSKxEWMDkrAPgzdBihA9WycUdNi2tVGct7zJ2f",
  "key28": "U3HNcUDu4391zGMPd2GymUMQ8XzFn2X6CwjRVbxpiRZfAgtTnZUAcrkA79RaxfXTokTSJQeUmj1h5HfDKnjt1rS",
  "key29": "3b5jA6x6oNPBpaWGajLWGbRjZpWwtuJmnrDtu5q7kgavgLYadj23ovZSpGNRa1YGugcNEgr9UKvjmWrxLSdQVcHy",
  "key30": "4H5hpUGfV6c6wwEZ5MgcXG3eUKnBtGPw3rUewn5Kn2PJUZRsn8qxqUzqSvd3Yd6x7hDqLj7H7zMFeznDpxr4GF2P"
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
