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
    "2EZeRav68e7xRFK7X3GXu8jNhbU6eqAKfaS6Fdg3J5pGCHmZqt4gUPthAaf224Mp8RXxXRyhCz1JqrhZY8EqNhNT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hYLjqVUkVnsEJxeCMdnQEs9Wj6irTFejJw9bAsMurF8Gw6A3DR9Zmrh4g7dAKxvi5jkDZ3MNmDcDpJ3wkBHLUcN",
  "key1": "4ecMsytxWW1xp76TJuiTNynRYAjJXro6mi7mzQMT5SEMErUic87QcbfrEEtYa311ggYdfurdaW866SVCutaB7HK2",
  "key2": "5yXA2HDbiNqDAwDc5rwb2w9Rf8PjbEyPqw8v2Cyd3D1kGtPeJocZgaTgG7nFSNjVFCyfgbQXkbtzH86DgzfSuCBT",
  "key3": "46DpKb6AzAfdQNiJ4MM3a3fcNVD4JatsBsjfKxJCUPUEtVQfCWWh3MHszR5eQNCwA1diHP53P75hqm5426iMdKrh",
  "key4": "5N2EjJRgR6nzSCxZvdcH847y2z6XED46mYBPL86nC8dHLVL176GWcBJ7r2mEYGFRG7cbgbZHz7m53dfC6nErZDYJ",
  "key5": "41u71qxCveofzcwj3M8dYtdsLNnxjcVQQWiRafUa9T9ADBENKNbAmBmdM3Jjb9s6m4vL6NyehPfTFFHCErxHbZRc",
  "key6": "3GwVS2wjCupLqB4qpNi5QFtJNrATtBwGYbx4ZUv7UHHcy4mhB1t62mdqfbKgCQNN6sAG6CkbpZEXJ7qpXQTKvt9B",
  "key7": "4nFZ3kWDNQrumE5FuHaTkAXn89NK3V8stX9PKV5U99zu2HQiAdst5VfAsuwMj3ahpQyNJNcTvkwLCA2jXtDpvis9",
  "key8": "3X5Fuf2mttfWT8Jsmq3gYZYPTN1WnCBAmogEsq4nyVZYojofi59NutB2sA1SQXDqzUsYgm2WLT4zGDfz1VFiD8a7",
  "key9": "z7m7RgjRVA23r6uZRR1W4gVJbUnYKqZ5xykm9b8VYDNME6WL8MtuPdP2PWWEtxb84sp7eAe2J85mE2uf871inVX",
  "key10": "WTvuUYJYicqNeyWVshdUXGWFZTGjHnFszvJ5xVJPiLweJH7QZULCjKVHBmkt3DfXooSMKVcqs5dtGNo7cR9oA6Z",
  "key11": "3fUit3VVmYfHHSv7AWcJTBtrhqQADdfiLisHXUPwnEX7Kek6XagKmCUycoQ4bz43rfoDuXksFQ29eKKM5CAe8qXv",
  "key12": "3rKguCVH4uoSjfPh2dV39MSrEUdVkS6QToFgxoYP36c6RvyvhKH25RpBTcsKEYqtENWnMG75CbSAM2Ko3F7mif3q",
  "key13": "2BZjqn5YMxC2ziyVDqAb4cFTF3bMQvsQvNrAeay9tfMvgTxnj8qyxcZqLAFqNmZ7rn5S7DcKzhbjb66vWEG4T8Xy",
  "key14": "4AETHt61VrkEZUE1LTBCHnGR11K7hQa8oN9r63vJHtYkWHMiF9k8uPiruGdDVfqhbj88vCdmBGv6z4tvKfBsuToX",
  "key15": "5JGKxP2W76LKjsQRpTVNuQoDTR6yAtL4LuwY4WAAEm2E2BfurTJH2PGVjfTJ9CXtP8mZnT7hc8CDXW2uN2Qwic3m",
  "key16": "253uTFxCL2fZa1NRNdibb6yj61sBu6c6WTgUUcL4i9w9BtwVZzx9uwBNYwLAofvpc8xinhJoCQUjCTnM6SXVxxcS",
  "key17": "48RXvHW7AX7Mze4JiGRuv4RT58wnLyPG3zsoUdXMNw1i8CaLeKj4Ch7ZG17a4gnZbu9rfSEWNfmkVZ2jY2Hvv3Lp",
  "key18": "EGxWtLowRc7ZV7M4frVLgJ3Rj9kETYafymAP11NaPEjqTFfv6HoBmCABujs5wbMvT3TPkjVbmdXJ9efcaQFjfzc",
  "key19": "2BQBRCbVkE7hAud2mbF36FkDyqruoYQBNrgRsqnxcR9WUei51PEL256YxxvgRMfVEU2SCNqYECi6fyvD3H1fmmsN",
  "key20": "5zRL5Tr9t7wuP52DDC8Px6cQPrxcDXo86aPRT5pTHvWPriZNfMWQiGTpLBSzN9KBytBNABRw6MW7BL5wu4uHAL6y",
  "key21": "5PjJJrLPRaK7h3mxN4xeHUqgirtPgaxgJRy46vF4dtmGjN5FJkwocFPLMLGBRepw5eSdRneVvfWFUCEQKPiDzWeJ",
  "key22": "4amNphrV5oi5uXFLKMD43BwGJ6M9deWUDtTkVW6mvmXpzksTFKMTDZxisTrbKKb9GuYqugQj9uqYeAJWdpxTtq5g",
  "key23": "2LikwTUvrEJR6wLFvcifE3SpjT2fw1T8wye3EZ1ndpUz6HB9DjwaDE8qhs7tW4gEwLtCvhbB9ntF2FTutNPVo66x",
  "key24": "4iSMUiiEMuwSRCW5vWTJ3J6VyoTSEvXYzkxd9ZmyQ7rsHCSiUvjJMwWXShiX6MeKVwZcvkCZVTRtbBBPJFNZW86T",
  "key25": "5SF59DqTJuoFr3vdLmKGPRb8vbU3KL4r4TJBQCeKAwWfF7xyZCsqq38hDM15RYpdqjAMtUmveGaf6rdVqNS6P1qm",
  "key26": "ajb9QMwXNUCCsqoiKz4Uf1JYr4SgRj7TYQpxmPfW7eQjE8VAAfYQaBx8SYLFeFCsvEx2wmqNVzCLDwmVK26uQGX",
  "key27": "46WzmSAheydsULFFhfsx9KAwR8ta1GCBc1xzmjJuqpDVimzqLArjR9vvRvZ5RcEmagmYw1MMbHv6n8YEVSBxQCdp",
  "key28": "32CYfbVG3u3wo2UR9vVg9BJhdptwJkfxe4S8xcezimLYiEzyWHXmWbtL83mAuZZ2yZfJAKEAxxPzHgBf5sHYiH6G",
  "key29": "4aZNsTH2AAFPSyBbqX8NNXF9EKC2hviPFXGzyMRSx7yMtoUzW8DRseS31UVQ5fYuUryLEpBDLjmPyTbAeV3Z47yf",
  "key30": "2hVF9yoTihueHGrK2ddhP7TpdsMdV1R2XjfMFtQN3T37Ui7i5xLeJRiA2BUveX44kwX5HxGwVzTDbaTEVqnFk3wm"
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
