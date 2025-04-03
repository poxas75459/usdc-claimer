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
    "2Nys6uRpjFsr52osBpb4tZshvrNEwpsB3PXz1DEsd94wv8ugCQrdcMPKEB4otjPuDB94YxVgZfzz4yz7jAK33qP6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ne8tUhUbe6uj11tQfxoxX4FvVaaLz9qTWW8km6Q5U3hhjN46GAfTqrtCq3yfwCLn8zm9Y8RdXu3SKKLFvZDC1jz",
  "key1": "4cuqtXeB5qMpRDVCnuvMiJrPwMaBY5488JUBzMEbiTHuJKFgZ59CuMcpsNBADMPBs3gyHTpB2KJGDuKkCYjWYk5q",
  "key2": "3xhtDN1gnwGbmHox2u1iNMdKcCve5P9QMSpBiR9Pyn6E1EjDnJH4ZH5vxUkFy6RzFf51FcBw7bPaNt4tgoVfmkqX",
  "key3": "3NMtYEYrrAWWNzxBg33xTf6YQBhxcSmzoPFurK7ec1Aj51qmhxRsvhQqaWNDqA14WunnmJXWhALLfPG4gizM8z6C",
  "key4": "66gaSyAe6s9pMwmZVGMaZTq2BtYSDYLrzjG15PqHZiWmHchR14yVQCn2DubQ3HJWq91F9KNxF7eFpPNF9p5gyFzq",
  "key5": "47gKddoJU6Lvi9qDVENAJVhJc6neUc5bB5Bgg8goueK9vz3cacWXBhXRNgQ8BK9MFEhRnqwYpGCJaF76nJZscowq",
  "key6": "2QdmB8sDdz2FaLTfRB89d2ebujEXdxSgjEce8p57KcnSTXy1NPuHk5kGpQsWDqSBDzLycav28YFq8UW3Fn8CwDnn",
  "key7": "285117JGckbSTWSYABf5AqciWyat7iqEgbknsczRzGMBGT2y6Gxpb5ujnKadnfhJdRkdCUSW15inEbVDSp4uQV2s",
  "key8": "31XyeEx2d5HAM5vdWsAosL3GzUa1jfozYmZPVbxN4B188qNRoyLKQMeEp5am5Quu4chmFe1wZCQLczS9z2LKW32h",
  "key9": "2pquz9Sah9nmNrftCmu2PzSXSrVtTRrN1GdruYi7Gwa7Vu2tfze29HBKPfnQiyUtEaSCsAMMHDpwcNfKTjiqcdjg",
  "key10": "3K6CuMzhwvzddYu24m8BxhyYSNks9bPpuWRrqFSCBfJJknRdqfhbL5jKrWqsxQ2GZX5wMfaf4jLEVuzmM8JKXWHT",
  "key11": "jH3A6mRm6bLftrXs3gXbgHap3RdiLzLFwH7uzGAVLvXkm6XpQhxwRms6cMQGx1SXLPpGaeXySo3b9M9W3NNqWNC",
  "key12": "2e7wZSjnD1nqjE6sUc9L7JPBEGFqT7yE6LhRdCxZPbKy4gbG6PNqrDoVvYVNadVYQVLncSMAy2UBrM9Mf4mGcrPy",
  "key13": "4JNqmaojYkkMVfKxhskSPB9LWJsn3dCQic8gcQd7G42yx37k34dPxno5Q5axPZF3Dd69EYWZQ7CHLNj2cLuA5B8w",
  "key14": "5REmCeWjUrQoekwyWUYTBiZfx1tcn7R244MZVPpYwd6JvmEyv6N6viixit3i2BPaECDXsx9mddRXiEBALTxw3p4V",
  "key15": "3U9yDewd7sQTxqV8a34eas1JECgq5iqwJFwsQxCsQ4wZEWmWUA85nE9u6S6FcSbBDWuvD4P4baXDdHMjfPJNg77k",
  "key16": "4s3UauhHnQs7HzLJfjAwffRNY5RMK6oAoeEkfbJEWH7nSEK4wjNKgkDfWhTrfvdvyirkE6oohkd3AxjAbZA4qFpH",
  "key17": "sVisCVevpidoeptcE8J6Dj6PJMPeXkMCoKR3UnayAB8bBGP21hTHAGLJhfrTRpvRCZwUXcm7bzu3PFQw8F1uudJ",
  "key18": "gdMjxhKNU8wkyWFcpacqmfq5vav6ritNRRPfxgwMAQ6wfw2WhffxaAiNaDsCozAX92tu5mJxeNqCeAxxP1gohKZ",
  "key19": "5E3uKYHsSUABXby68rTfTqZYbwWyvJLPLUfLQ2ZN7ajyb9Avdy66xGzBVxRzbzZsRNMZFi6Tg4XgXkK5y5uRWhEf",
  "key20": "2MLAVbRC3iDmxQFb4iFq9n6N83zjfsXTEsVCSuGyyB1hueJkb7SEpPuoTzCqucFvSN6kvYNuyHMgssym3Cym4Jkz",
  "key21": "2JEZ8KCe3DTycRXMwyrTnyxtTHaN6bydr4hTdJja56uSZWtK88VEu7DWgUBkYQXLqBridvsS7sxwqz52LLQfv4sM",
  "key22": "5Q3ZadST69W3T6JNqotrSmCHXLbkDaBb11S4KXrZ74otiUmgr68hAX72kRWfWPoVXEnEXhSNTqqkU9sEwZEj1QQp",
  "key23": "2mXyS1ihAdH8Fnt8NU8mzNxVz3QRDWFGoArDhDQTGvYC4kHaSP4UWA7KrUPULryKvtR454GxsuUDNLx88toyV91F",
  "key24": "5wJFgQ1vPjCBwLcLXnNbLMtV6KuLq23Khkq2Bucbrkt68qF73CryfqHvqMS6cr9q7zf7LVMFsYFRDrPfzNfAhL8q",
  "key25": "54JDxgi8FKCivxduRokwawPEwi3VSTYJpXWG9KA632rjptzNUhggg2Niyh2fsYkthxrPHiibQmJLNYVS6NS4Pmf1",
  "key26": "2hU2JVqHN7FNWrnH5iQHrAXtZxLQSFgwMpmT4zKEjEGyt52on12FdVe8Vi7kDJDmp1vZfuiH2H434rU318xaDPbz",
  "key27": "3oRunmD5qrRH9JLyXu5R8ejpTFbiasfpXzfZ4VCfxawPrUfsgR32PtZumV2eChpFMZ5Pacs4jY2MPatrJLpJzgua",
  "key28": "5VihoYrMHu587X3orDbmDRheKDRZorCoiWt1tHVN5M4msaPKrkukYnKszm7UQZopBDzffhk5Pksd7ftM9AwGNKfX",
  "key29": "393WrVH61PxiZh1sFnDg4V23MZTjAps541Ng8mFvjT1qa22P674S2KkjN9AqHEJ6kGYFfmy3bpaUP9yGaYruHnjQ",
  "key30": "3qSeecLVMJACg1QHGHzAmVhJbAUTU7Jze7GEuhyjNzBS3Sbs9BUjGu9vW57Nws9FyDR4rLTM8WJ4XbBhAHevKpvf"
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
