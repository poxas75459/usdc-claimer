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
    "2HCsZZPNevSoXADogwtEEg3HGPdHqE2BJxwhWLhUMNUwhpDUFBtXWxbc68QXeMDLxYKdsYSnRqoaQr12oDe98y4v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nkx6ZJHeyiFNZWGSstavv2d4YHzvyCY2qV3upZyBGs1CAnWhe6BXWVHgLPQvB3B6PG5M2CJAPkng5bTRLPyNaWR",
  "key1": "5dY24XsLXZumzT86Jja2KA5KyHh7y6nGFMgF84JPvxPQyZk3iTnv9KTM58bDafyjEX62ruvrCsNXZFrssiLHGXg4",
  "key2": "237jsFPhTrssTBquqgRdXXQR6QcVhitEFQRx3SiiQ8v8LLMR6SKpjvtD4CzsjXhoTh9Usf8uJzWewGb4kmYHUNoC",
  "key3": "3g4h3jtwJ7A41L31QUf1udk5T9hEnZydY1qsdoXKG4FFZRUavv1fHieNU5cz9Bj4qKk9T6qvMNmcgxixC39VsRye",
  "key4": "2Hg6vUimWKGAcK1GWuW3nZZ7PoUDmwWnawft2U9VUHPEhkN1sUVBos6JZ4CihQc2n9PMmZ682Eo3Esy4LqqKWCsY",
  "key5": "2h16jAwsvKYhDMhKHNXFBt36ovABLomxPe1tQJt7RLvKmfRZMaMSFMuDD46GsrpLxN3tQBXwQ8U5b7XNVkGwxYT",
  "key6": "4cG8wVfTWE4sDnuevYcuruVWMxSGAtmgajhmNSEERTYGaKu2PqrxeC5TX2MfehvLf7ycQpeiMcmQNSizvAzi2r62",
  "key7": "DSq4k2WjA3U1UjkMdV33qzun1j3ifAZJkbkohjeWnCLYDqwsfMFVVVX8ys9oPnezFftpUYb7fMQPTxP443qu3ZB",
  "key8": "5Lmayo6C1LNu7WSs6nJVRcteMo5Wd6LdViFwbNbMajR3WH8PxMwpb63sDaBS9SgpY2jrtLK2C1Zw1ioBpivTTyab",
  "key9": "2QZ8yuTyEht7B79borZgbX51tmwq81P29ZSUWCHAPAHQUWEokQ59kGMgt4d77jyGKGZa8UZBwroAohGopaLQJz6w",
  "key10": "xJSWzAAT176A19JfnJMQDycvgcSgCJPmu86JFNjSUuJMszndFjT52gesUz2jPLgmBHcAucrvXv7P64oksxjTHUg",
  "key11": "4LJJZBA1NEaUWSASVCViixuUU7SJw859zRPksBdQuGFmwx3dudv39XJGGfLKLZxXSqSefMmDsb7sug77cHPtABp",
  "key12": "28oAihjf6GuxA2M3TxnCZZ7ihgTcRHWTrfpmP9CW1M2AL9yLqXcGC8yzS2jJpsxFm71N3WWgtm1djW2T8oDpVbwJ",
  "key13": "2m6W7sHgyZKnKVkG3tWVKKHGiigUfbiEj6ELpArXoDy7MptwVEQt4DN6MnXVWU4XqGNRDr61QMVVDP3M8BRyn8Wx",
  "key14": "4qCXFrxaHX2d7nfxvJ21of2Ue8CunykFEEFAmAHyyUbcVfq39xjafbrj1192kwXRf7e3upviiw9rfXFoUgjVyVLE",
  "key15": "4s2zQQwajywwH6adpFA9x8ciJnoDzp97mSgMBY6wMYeMBUeDVssV6fWUwruT8Y7qsopKgaKfYBf3vWMWmEZMZRox",
  "key16": "3kLThXuMVDkCLD3JaF7uZUHuDvA13JxevR4S6PvVTYC1YmXFjKDWY66dTbVJjUBC1GpP3NyTSfuLDc19QZCYUCZZ",
  "key17": "28c5DBFGTcZLUMdaxCfi3hvHfk9beYejewC5PmX8y8T1YxaRs72aFfSnyf4hkz1RevNUq1P1tdjZAFVfGz5jtyJS",
  "key18": "3cxX4Q4HNrhAGUPJd5MWHC5UidUtD3wqnJEci26FuRDMfqd3MRJkd9GnJmnLTtxeSkAtKHPiCH431sQq33D4gd44",
  "key19": "2p7wQdVYbepAnL68bHzYdfBghDLENbBpYYRPGk24pXbkk3DdZQtuRy94iRJDLLifkMkfwSTFmK6dbBUdamfiCzML",
  "key20": "2WKHWspF1ZfXHUaMmZRH88xL9ktz1XP12w2z7yfJa1noygdRXhHeauctNxV8ez38t7xM275g9qEx9oTM3621dgaQ",
  "key21": "64YWcW68ahjqNto5C41Axa3UvzXXRRsZG9k7mqqQnhGRuhDLYcXJuTsT1oX3XykpKqQqakbEdmstKHWmo2yeRR7",
  "key22": "Cu9mcVCtskKZwbZgxijt1ss1vQw5BSwbq4uTipRoRiDhzLHh9ZbyJpoqhfMHiHCwzpU5p8BJfGRaRLx1SUxH1gX",
  "key23": "3nueMvMWCvimoh7EH7L7Krv57r4YPmuktDCHGLDwKCALSnpgX3ADEogYud8fm4BXA8DahngZUSv3GMx24oZGjH6J",
  "key24": "3WUNCcpRkYdy2u4vWENfuJgsZzs7kdWAcaG787Ns3Mov83tBKqqj5VCLzwzDCxqZcnPEft4me48tHfqeoFNvyjbh",
  "key25": "2WuWLYudZTqnT4p4drZmzt9VpBH2azW3k8UXpQ3QMz13UNfKvS1W8saYp6TiTnjHr87dWNQZCqwRZxosZ9HoMVTj",
  "key26": "2Yvu728RW2o75894x4m98SARTyV2eKQwsErRBTdriuCBT1AEW3cGD9PfYpfaVWoTThbZAh6aShissY939UMqZRxB",
  "key27": "3HcgiWVHjDu3Tx1BC6D7q9amaK6RrLMGd7kQozH2CuDqz7ojUhF82NFAvEWtMFcp6vMVsA3buxsF8o2PkC39CJyx",
  "key28": "5kC7atnTHCW19oHiRCQwHxkRUjkJAFc3T48JXGLfuMMNhGBvZ46mage2dvHmzeSZADEtfkXSjJTeFAhnbqTFsRff",
  "key29": "2xtUhVW5TTSSd3ogDeZutoZu3yNMCi8ZLYbFqUUHnBbKnUCsosFXxw6NLiMATALqGfWUXMjJmsSU1Vm8anDuz86K",
  "key30": "4L3NZQxKuA9p9upfs5LsP76tDNebQYYPTkCCBzPD9n9UbLeTt1fTGPdv38Meh2LWvqcv1xyKb7QZykh8PjCkbg62",
  "key31": "3fypgLXMy5yUT8YY7b4ZNZmbtE8YxQbU2jfsZ4FqFi7QRTXQyNzqu2Z6QaJKdepys23Ea3uCXVQXHSdeaX94FoSa",
  "key32": "2X3khJfQvYmoVS2mhd9dwMAv4rsCXr9qPFusXQMqqrLDK9cDuqw5ijDSZfAx6eUQpJNQkWgSN6DJyDUGPb9x6Yay",
  "key33": "2gkhPje4P3TrCWdoWUvR3x78VLxgAg2iUXGxXFSgEQbkVJGWCQeMp87TCH3tWuDtu5b1PrXYpzDUu3FbMHq8TKsJ",
  "key34": "5AjoQSJ6upayUuU8Vj11DKPxcNNRcJrxYXZ6hQzUAkKSbvcaqcry3Sa4YMt64xuysrTmWbdK9UqMBkqP5s7MiwZX",
  "key35": "4PdoBirsh6UkZ6YzBtjXWF5qT7o8cbuwZ7NqVfirGxG9aRrRevDU5fKUGWVLArroDb3vKxCpHy7uwmPFJpU5bHLH",
  "key36": "2SUmxtxoJyJPG4E2isM57ng6t8qEafYYeYYrAn9LahCgKYwsSrx1mKK7TnDBa3wdSZi5PAVJSSk5sG1VWX5wD94m",
  "key37": "2tsSoJ7c4daxBowfRq5tAZfP9WJdAsUB2ti3bXH8UfFLW4YTNH3iCyRLCHLsyNAuA2MnD47BRLUZb6ZgUGnV6S5V",
  "key38": "sWrCi1xDpMcRmFeR8robd87FS9nj1xJH21Mhw8nr18MfujZe8xAxjpfsXxBhutNjYNaWz4Z7ZUthV887P1rifRA",
  "key39": "2CxHk7HdHWFmhv1yGBWzkmfTF1N8h8rYvBbGoxwr1n5n3KmxFqwawuvTb4bgNbeAqJN4DGuTzWRmfSynQ4SJdL7U",
  "key40": "44yTZ5YWnv9CsUC24qAKEBVBHojs4xyppkAus1HN69YwH7HuYA99cA3LS6QxPUpEVox9SMi5PC6ffU6RTmecwjmf",
  "key41": "3GuYPAPgFWkxgbfoNg2USPMCsfPq1TBZKukWFr23gg4MyxK7FnUw9Vao22GnBuCvRVhpEBy4xNcDNRAGzhRP76yb",
  "key42": "52Tdoa6xiqZuh5CzSBDaUZgJrrMBtK3Ejz2rNettbjsY1jKdp9zpQWhQQxHkV5D5g9PzqEAazgtb6zCFm63K3Vnf",
  "key43": "2RrmmRbUjsoo21XcZZwUZB3xZF2EW9ZdZ6oUWeDJG821roc7iEqDzQtn3qb2GGh5my2sstja8QVVTfJqNMDFBww8",
  "key44": "2MJyypg1HjHtDaWBJycJyr2enKsaJkSZ7XX2e7K92YCSiMAyJWciFy7ALn4t3ok9hsUBFTYSdiuuH7bRQC9VX9rp",
  "key45": "UVRARuMzYrWeNFkSt1zuKrvgtjVLWdGficzScmQWn76EEr6ieG25dLsWLxTt2m2GmchF4CgWZAy1e5Zpmbp1Tjt",
  "key46": "7R6XvV1zoc2YMAwGi4HWSPFL3ii9E2TKiiWhVFCXDyR2bpMugDhS5f8TAXi6SdM6Ndpa49BoeQ8ndBERPCGoSVt",
  "key47": "5QewZqYGpQvFTtYky4WFGnEjhujCACtQWMMEXeB3j8SGNVtv7yJLhDRVQcP61cF6JDGsoNP7UG5jCTdXi5JbXJEJ",
  "key48": "58JvUoreoseDs9ptJDaHKdTxvHw4RidumSA1bUVvckL3HpeY7B5Ew8itgiZLb68DTgkMGEWXnpAUomFKeTUTAcf7"
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
