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
    "2DT42K4gKNad1EfcwqhBqPYpWujHtfLhHxgzQEe6iBzj8CFJvXZzP7B2SKfFi3FFxf89vPuCxkTSXG1ZsGRmfPnk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xddxFHMat9zXyfDeQaY5TQGfNww5tDS9RQtrzkWboSBceMe9AENYog2iXT711fn6MKbHdTuA1D4zhb8D2EtkyEL",
  "key1": "32oFP9ZR7ujkRDg132AhBQ6aUSL5cCdV4EfZ5M9hz7w82UjffjesNUyaLthv3K1XWhW3kTLCMQhUjnnMNkgndDdH",
  "key2": "2o6ckVacYqNJ7ZcVhjcWvvF3oHovPN2UkXLmQWW1j78xNxSddHAyKuLQiYPvDDMLy7M8hJYQT3vCrTeNxrXd4hre",
  "key3": "B6b6EhKq69fSPdAyPDi5896RZvNLUPN4Ajwyk1Y3vrtGs8EjTvRTCYjkyPxVEFuWxQV7mVWJq2hxfm3etac1rbK",
  "key4": "2EDYSo7HphvqcshK7126j8sK6KzKg1TsdmokrRfM5WQwckCjG8EupykeXXJotcQy2nnwBpvq62QB5VLe3kXtYnPW",
  "key5": "4vri39emy1bG5Xdv4EV4bgSYGoAXhrrD9eVsYML2nSGQmHaFgWCnnU97gp3RCM9dPoMtYteBcV3DbrBzdXomCYjo",
  "key6": "58UNo8v7g9Z8gC9UcuDRUzxXCaD6LBk6DBaS5EvibtbjmkGDmgpmvPpzPcEPJditBMX1YquxDCGdDBGLccYKwVCM",
  "key7": "5cb2HycWZNNzatinx5xgMCoNbDdd8EcnpbywwEG7a9WMojgcyH5qr8H5pqgi3Zcdm5S8BRHrv6kzNyJn6ty2orVb",
  "key8": "w32QDe3ReYe1FDpnK2vKtwd1v7BbkQ9zhYGYgyQKpqRuRtveYBEFASCQN9HYoi1rXAq5ztJkyXr6WiAKXsvhrxf",
  "key9": "49aYPz9P8aCKvwKuSvJBRJbmzhr5bBwJL1qcLnpQv7NcoRdxVD2pjj4EPFuVJHaVvha6mtv4b5XWuhjiYdxrybGk",
  "key10": "2RBqMbRv3nW7U2FCZm3NK5sm5E6TH7SpQbGwaT98cbMmUJ33m9PA6g6vX4kBiw8wRR6MDdViVYyJduvjpLzotCLo",
  "key11": "R2VtuHW1aC4EFnSZCHE3TNhrRzz8rzCcMeqMnuWT331yCnT4f1gdZTyEucXqzy47Xko8i8VpoWCnfhYjPoiy4c9",
  "key12": "4eoG4ifNP4JvhneYRCBcskw15jFXF95sh5UNgF2ZvKXEo259qu93rbNsX2m2QhPLGbxaiGePWXex9ksoG6auurN8",
  "key13": "5797SixccrvugvYcVXB333L7jtq45ASFcptZ2QTSejd7YBtH7NfzXAL2vVptvUHYtBF8jJjtFLgCHwifQKhktmDU",
  "key14": "ggAix9sTXLdLyYYrbdXDiFEJKvH8y3vevNgfDqaJbU8bfmKkhdr3nxjQfHdDjLNJVCDSoboKnxGSYiipeJf5sWE",
  "key15": "ZGAiP14BHrHsYg2N7yKbq1p6XdNmUkBmJMSwwzvXFaNS7gsY6kjPJa5G7bWFPAN5biPFjVDYh9UnmD1eRNZMjLc",
  "key16": "ziY4xCpPyvKjGEn58G71SsPScQNJxoDxFvria9nednAxLvQihcymHphGeAeAiR9uDJ87JRniZ3NLivPmwWrZsZr",
  "key17": "4cNCc2nKWfcV4TNFUiSpHimcSnGiKoGwDjbeWooV2Bb7mZJv2trRjqZ3Rsue9DXUp5ZKN17UuPNXCZSPQVdf9Zf1",
  "key18": "2HahGA9MZb7m2AZNFK4jsgShkWnommFCN7MNvE1xCKRtwHiYmWWaQhp118DE1aioifskjs5ZRLxBSGK1mBoBH7kQ",
  "key19": "26AkLWYFsLvnLQKF82qA8Ucu5WEkrgMH4noLZLxz5oXJRuD8ZGq5Yzp5QRwkidrCD3BB6FqkNo4n7hLU71pP5Ms3",
  "key20": "4yi8gTQhBnBbs3BLTnVPJMdS2MZZFPzSZwKHFQeEyEgaVXsAkD7VUGNjDynzebmZhYuNDhBdnddHTZKGcXnpyJ7d",
  "key21": "46KHTKxpZ6eGK4aEAPTmutJdA2NqTX7jffzrdB9MxcGJ6LWWDVY8hshPvQ3XWc86Ho31s3VLGGzQpegDjL3AFqsD",
  "key22": "2srFCjkgcAUSdoERTBWRh3PLRsgWfEs3Dnotc99DF1SadByzDk5fewesbs3ef3imnVyMVvi6GGjzDyfxAAiRx9ry",
  "key23": "7sQifY5KToFet4Mztm7Ukn2ugHyDAPkRD85Xfk7LErEKxTwV5RvGyVtY5An8vCPShFuz1bFcPTHjfESWGm7Ruv5",
  "key24": "3vKzFb3VKe83nSdCVrsCTxDzfTXdqiCMzyZVJbbKgEbP6Rj7YPWVgo13Bz72rZ4KaH91QRPYkPvaZKsoM5xif6F2"
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
