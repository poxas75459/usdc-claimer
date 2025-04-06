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
    "5Hq95NbZVZuMm2J3f4pbUvdvZe2BdD94fJDVXLH2c3FnGPX1Gv425FmPcAzxJBo5ZnYEBRkmT7Pt5BLgbaHV2Gcn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q4F8YC6YqGamF87R256CBdJLUPfd74UGabBRaVqiTaB1iGSSxfUd1E23h73Dm57yKZbi72iZFKmY3JeRoaRdgUL",
  "key1": "59HJ7B37DNFdDDUTCY5HEjEXzMe1rakPBdra61Tth6SwxP12JG6ar4pTKz912kqmjrLorh9Zbq6FkEyrpDSUYUbu",
  "key2": "qfoFMcvmMyicKtacBwsTgMKzpEcYexihK6KCuTcnthYknLasikLvdmtaE5AqBVy1Lz9ji6U9NNZZ4PHFWFQs3Wy",
  "key3": "4zFYWUk2NjozcXCpG9pyFnCrfUVzmiakvqxnfXvgxjgwSuFy7mcVjgcRc5k1Rxk5LYJpAbjH8U7ErwczTwA99p9A",
  "key4": "2Zv3qemFUuRUqbAgtmNMZwbn24NWwGVeCHgwyRnHeTBiAjrXQbxsZEXAmhEmNA5XV1sdyq7jVQLcAYBpE6NcNzvW",
  "key5": "5yCM7hMVVaSGghbfjFGe9gV5YfYPBAjoiMbQRzF3bRYwJKqWTZEaXLzFKUM8nJAmowyVZ3gC6U9XTowv581pyEQG",
  "key6": "2rFsh8ssLdEUyrXkdzFphTmyUQRL4hpFwPaEP3g8REL8W5QHNjeQcbK5nZrS7YXNh7aDYqsVDyVpJnDMBJq3i74U",
  "key7": "3v6HRaXBtxstqxcmtEmuZ7XCkta3xAVQxUmZuLAHgDRNLF1998scCxR85QjuZB4G1HtebvLbSjKXdP1jm2XijVqD",
  "key8": "3Ty5yNFYHwVWGL5D7G9ANhDyPrKAE7xAHUvf8mdsVit4G59PLucfT6iRE6QHBC39h9MdXAQ3EqiataL62TuGTj4h",
  "key9": "2unin3TAMJX61ArsUqtWfxrbPHZ4UJRC3cPSjrSu4weS1JNz4RdYWEYAKQj5JRhrr9xxoSoXFJB1oTTydVoAnHqC",
  "key10": "3UpBGPYpvSzVt4QLitMycndEc56p4d2aD6UfXR8EggCRPqi7H25N5D1kr5xaRJQvQpbATzzoBeeZ8nB7EYWUmmhU",
  "key11": "5UYK7zsS31VNzTvZ3FBmpwb1NAChbkyfgw1dYNK1LDXsZquJGJzYW18vC76mLLAR7nehBMBV1cDd82HF5zqz4jBk",
  "key12": "BnBRzdzc91aeHDT6KtySFcDYUoiujh5LV7YKwAFpt2oGp9dj9y3B8JZwfVM6H9VGW3dRB5nSMedmhfv1dCLnwKq",
  "key13": "cdKZSeQUFHoEQtgYL5xhccWy9eAdiZ1kLQDN99SPcQT7k749t8nzHNYZES9Ltd4ihpp8cgyG9tukQDZZRQYUWcB",
  "key14": "ThGRZ44bGqJJJeCoziwsvjwsn6wnjVBKyQqg4uF3FqdDZcHsGH8teu38cL6QGyRzrJP2qadUexTpJiSuJDD8sH9",
  "key15": "1yfFRKeDLJGiLbGXvL9uQBD8ujuxhg21KxzzBn11BGYVZxnYuADzyp5r4eJy1B2zhykgCfjBDxobC3W5xfqv4Ps",
  "key16": "2N672CQrkRgFTXddtjryZ5xHhBGZL6gpFWZUjojUjWYCTuzp2HHkb2yMMTrMABaLUG9KASx9rCj8EqfMLbxmBac7",
  "key17": "39s4D8iSkVJd5R4k8QJAbYJ4bnNykeLmXSSq26KnP7ZGn1Nbcyov6NDtv3KjnExsh8R9mzYicxjgc8Cz2dumQWa1",
  "key18": "56BQyXYoWtwcsnXpnvofEQaM68CrP5pR48j6bZzkK1Km3snQw3Y1tGTwkiuT77oCLXbWM5sV7XRK4KUpsFZpKvKg",
  "key19": "k7izRTVppb8ZP343qMmmbP4j8jkenzdD2WCePsWTWmm68mDbrziRBW1Ynxc3hR5jLAfmu6w3auMDdFPesfbFLW1",
  "key20": "4oZsLn7FfrAyppY2x9H8J9JKYPj7ZDcLrKZEb6oUYaFVAn8hr7XygsTNNkN8Ayei1jDUi7f5Zv7b12VRvpVgRhw5",
  "key21": "3iSAs54TTA1P8M9BxmVg4x9isGp6PRu8C1QMZT78eJZbyyCZC8nvTDG2d8qENLAUCt2ft3ZnC7MGhVTGghYbWz8t",
  "key22": "5foKRQJvAYWKqSFtXvoF88Mn4a5a8qtYy8mYVPUTmuyx7AZBFonVyEnPauAsh876NYQUkAs41j5ixDp3p8UFzDAo",
  "key23": "5UxbRg4CFMbZQvs9jVHQSmSitXvyuEB9JKBBGHSU1njQH9EKbVqHnQW1f7KvHQiekp4qanmsxbQJAz8RZ26RerHf",
  "key24": "2nR8BYt8siYRxhNvwPAGzADfS9J4UnKzHWCkJykoBTYE7a1HMmUw652Gxz6GYZLJ6XQKcNWoz1hWZrCCUEvQX1A5",
  "key25": "3FnGeRxtk4L3rDJrGXEmN6tuoh35NJhbHnna8v83iu9yeRPR8F3RW5zA3uwPSH5QNMeJXYFcKszSSnGbrwEZ2Rvw",
  "key26": "5h5642fGNEHAdm4k5oYLfipkw7AqhWCxMJ3jWsRxLHTPCbpCuh8GN5zRuufAEZnmqwUjJNspWgt37Tvj3UhJy34t",
  "key27": "2D5JhzWJFwsWh9E3WWqdn8Tv11tb3A3N2M5YrHfWhgnJHuxTKH9y1D81J1TYTpzkfTYB7PVPPzrMaRjdDLXSmyxR",
  "key28": "5e9qa7Y3B8zPuJhebKqbk9zxToHrbud2hh8WbwSwU1EHPX7qhZXB3RvASbZe9FQBwPXnqz57Ah6au6vfmR8vNM2h",
  "key29": "Pz2SSYTcCXqEYPbaaCnWZeLHgUkPikNtyyu7dVH3Td2U8SkAzp6zysPFTNuBPcie2ucyZAixorW1g5kWweLNvz9",
  "key30": "4VtjNrPRnnPQAyoA3nqeNL2PuaaiW8yiNseG7gYyksiJF5o2qbqjPtuGzTwG4kCyGDm7QQ9V4ri1qW6ZyMx4jVW5",
  "key31": "3LLWPtKVciARnsyJmouPuR82VURrz2a1QgTgehSJVsmexMepYXtY8sZxEcprX67eoVwWAef5VAfNu3TtaQhAy332",
  "key32": "5MEt4D3hrUwkahifJgggCrGAqx6ZJiUMZh7TFwWiZeW85ZrrbnTNUyftGea2R5chFg1W4FykpVSQKh8Zky9F9gLD",
  "key33": "m5Y4P1Vy1iVbeC9kRA5mbX5tgNqLzXoQE2wF2ZfEX9Qcjrwh6gALjsoKe4kfZszygsjrPML4t8sy3MkiQrGyQcF",
  "key34": "26CFWeK4MbVZ4s6upy6Hzqs8951QmUc5rTaRQHk7BP39EVhk74YQdnEnpyZy4xDnrogqoxuLtVcMrXum5iZoTmp4"
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
