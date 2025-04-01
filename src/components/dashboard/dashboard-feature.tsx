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
    "3WCbDC5hw3ixuPXDvN7zkS7kg1dFNrzDsJbFroPCP9vjexvS4wx5PCsqdXrjyY6gHwpmRdpDuRM4Wj8wSkBKxLnX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u7FAQF5GU8gBAre8WJLdiXGz8wn5g9gC1rsD6K7UQ6wDRvqzQCJhWwzL5UjXy2NU49TE9YBRbZVXcfB9unjojxq",
  "key1": "wxeqSSeTPRjAamkjeks6mfZjuFd15L622Kuk1axAPYq74LTyzt5tKsLBPYsu82YL8PW9vZWyk598cYBB9bu49Hy",
  "key2": "46KTRXoiJZEFBetebp5zsgiTVnTqrN2keKjyUdZrH2h1tM2BJbj5Qt52ot2kR4HEbqhyVGYNZw8k7wxnozi6s4q4",
  "key3": "21dz4n9e96WPf5fEBwgnTyho9kMN3UQGQgqev4kQoiJyUfDw6rTk36vDP6XwFNG6x1uqkJzQTFLFgJhMrSErHkkk",
  "key4": "imW5e9NTLYsBH2oaBQx8S2vSqxaujqKCjyy2skEKSAXq4xBr93TRztCBPj7M5KhgARV6DZAsVFpw11FvJzpyWgi",
  "key5": "3Au92Btir5fuUhtzQDU1AbL5y3VBqViHLZ349iUkkKghE3ihiyoDMo3pN8xbSAf1kLjfxGhfbiGMNWpA968Y23Dg",
  "key6": "bQhZeHX61AY3hYft2cWPyhoDd5Kfe3JPanac9sYjRgMQcRupEM53tdp5zqVtRFr3quWd4PgNhNBFRVMuYwmbiY8",
  "key7": "2cq8xwijmfgJBALudBobVc7TVbeytEVuBmYk5yRZNs2dxv4YAcueXzFcHrXi5asoQ4VjjY3ESE7Qa7g6yQdKx1x1",
  "key8": "27DVvVuXZ8WtjwtF1fPXwkYa2DbwHaVfRhNKge8PWCnexFjAjG3et6D9vAzG4fw9NkMYhUrgVbmLzKMUsLEFHQSX",
  "key9": "2pJ2pEKA4FyRCTFPE7qT6faK6qWUKZhK8afHovQWYMSFWBvcppRfhsxDKGXmpHaUyey98c63JD1BiL9Y36XHeV8R",
  "key10": "4mUKH9UpFKthbYmpVTQMBUWyjM2DGpjo2FXdJispPB2x1potRFg3c7zoG2LDy8xg2kJHcmDhCWXtU1C8L9Hi7Roz",
  "key11": "BQiUpSMd45GvJrDiT1gBKW84oD9ykoMxcxcoucnZmYYrLvHHthsC8cDvFQGRHz8DB3M1oy6inN5pVQzkVJwH84M",
  "key12": "4o28dy5o3JjTUQknRE1G6MXonrL4FJpDddnXkA2LKjayG7Tgt21ZBuA8Qjx3SugeEsV7d69UhE56PUMtZPXAtCR3",
  "key13": "3pVHVJKwpei7WC9DU7T6xfkjS5X5N2pa3byZSUyM2rN84srkeqqyQw8zkFjdEdSuuTtxv6HpqxMLgTdKWA1oe47m",
  "key14": "2UkGxS5SaM56WdAg473cJBFKHXXzxDKiUAyigHZz4DYMU27ZgKuPVZn1wgJ5aMVZtnWEYv4Tr6P6aKBqnk4vDgN2",
  "key15": "3SA2XLcpfPVrSkUhReA3Ysd1DzhwPCMQZrnp6o8kXruEnKMQpjGh8LorDKPKUYS6afXpkwX7kimYYpZkTj7MbHnk",
  "key16": "3ANs3m4QbmM317rNKyAujhzL3ZYw1m2WxC6YYyvdAFmJWWvdYABtoMFs1ctbXLZLzZNJGdogyBSNSKeSPoyeetdd",
  "key17": "4K2aksPNXQFHP1yigTLgjsfFKqzm6AvyisSBemxAGEJeGsPMQf2E8Nnz1eufD8wkKQ3qrAtD1b8H4cqGx1G5Rzua",
  "key18": "4cS6y6wtVtm5rc9rD6G2tM6fBbgA762CuGk1SLhKriJufoTXfJpC4HtaZSpjWbh3iBkZSVpeu4tQtzsFkbVGtBFd",
  "key19": "4Nr4ES1rqQG4GMT2XiXDdBNSWfEuUbk9hkiC9i73Wnjn66uWvvUKEUcKAwfvdcJJ6mKNLupKb5HXRpp2DdkQpnAq",
  "key20": "297TzgDBLH8RKyx6v8gmo6jAGo2ndroU16i9MdtDd24U31UMs39tfafH7RtdLpCphHqErc3QZnQFWUimbeT3oHmZ",
  "key21": "2VT2t95vbWsLtFiXxt7vSc2uVXTYMEX7tLt9NeF3qR6yP8XZkyyNmEkpPiNX7Fz9SFEvTQXvWdWA2NYy8sjRkK74",
  "key22": "5KXeQ27Y8YwXziVb8YzsKZ7t96c6kJFihwYNf6E3gQfdZd1oohpX6xijD9rMYu7sUChXoGdo6L5YSysNuhfVVWC8",
  "key23": "5oZddEjQNL31r9mQhthgHmaAgCWwRmdUTEQD96t1bWxqN9FEyY7hwGQBea9nYVnPnDAEGYRUxaJat8ZnGocJP2cP",
  "key24": "3ZfGiF2bWMxFco4qGxCXFFgvWN2Sw3DxFQTZAnSVBBg9EFTDJTxnJDvYYkw6ybfYGCyqNB1HxoWhn5tdD9g2mX91",
  "key25": "3kpb3Z7fR6QrwCJ7ZySrPU8aimxqqqD2BLT3jFWGA9e6m9qBo4us1FfKNqypPwooEBfUzAKvnNj4NX3TVwE3Cf1U",
  "key26": "4f6gsYhGF4DKemVm31MPSpUzwQ8RkrEFqzY6VSsgZ18vyeW2EtHjbx34qanZPZkfv8kFVrc49LQdnCCAuxoZBQue",
  "key27": "FDkDc1PnAkPdwcBJ6HUiSsPfMRrChr7Uaqn12BijbshdoUTeYUtgdxjJ9zqoEbugH7RdizXLLoUkqmmwbn7kWW3",
  "key28": "43zLkCrTvkXdYGsEwqf4KPcinBGK2AxxpRrdWnc7Aynyjb2rbVM6tyH1Po6YLAundGGozPjVGPpm4eYBjVFWDqsn",
  "key29": "2hTd1coWVNbBfKw4GMhiwrxUBjA2xfjqgSvpZJhhSVi99V4jMkduSdpsxgTcHabMujXGB6vHeS4M3LMTEdwJ4v65",
  "key30": "B2C32dfGNqvpLREDFpCobgmRz7ZR1S66k8sPNXMqobrkHWtJy7T59BgWAvSDTHNrzaYFXJqRdA9aiNP8YWr5hJo",
  "key31": "9qkMdwhGBrfZ9HSsSSCM3yAA4oCfGkQ4YhyHr33VAgnSrxPfQyZBxj7QFa3P12Hk6oSAGiSGR6kwkpywFC9ALAS",
  "key32": "47PFKPFAiHRJPWYg9SCWptbGkGsFbw3i3uAMxEA7i7Rwrc27krgPJw5eUK3Ys6dex5A3AWKUYyjHbuS1txHP5dvN",
  "key33": "5cHAhSkGWaw8eNkvs19R3XujroEjoimkRQqkxgQD1qYeQGot4xBk7PQ1CMLKhQ7Eq8eRBwfKFLDMPivHgHKKCrE4",
  "key34": "5aQe6qDaZtcTZHkM4cFStJWmmzYN1JG2ryeeVVE6NNjULbVEKfSi5WcdB5PD3dxYAgBhexymSBAzzkiKpczKpBvZ"
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
