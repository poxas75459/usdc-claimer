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
    "5wQ2XoRaJYqHesFgRomE6BX24pc9zYNhw6rskiVB1wamzBc2jodP2ru5v47MW9UYVVYpoLiYjzhBKyfjsGVRJENN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZQRXJq8kTQ387PGjNwznoBmGWMDsZeUyMEfumPAcMdQCNU6jQPgAvCD5xRpBJRmBwD4mhSgu5yxkNh7nTWgjGin",
  "key1": "mLE9FA1GnsVNBrUqXHmMDxYeWw7wyvnUZqA6qXqf18ejxAfP59Nd8aCJKogg6yysLDHxWrcJPLK6wktcsxx76jz",
  "key2": "4PuU9MjS8xQj6C7ervqKfY3XHrmx1TdmeU8QwGD9iYtSrFVWuRvQcyffB4Rq3TLtf8zXYLjR9PZ3rkdkp7u1xdDb",
  "key3": "2BHRKQn4DUeaid8gHzzvzLKo9A8eNVHSrx5Tep3whXSLJgzvbeUiEHxYBNVnhoekuf8RwadydAyEJ3xF2Jq4LYUu",
  "key4": "26tvZVDPFQycqUYhEuNSmg3hNsPTXTe7qG6cdUT41TCHyLm9CfLFc6MY6nLv3bqv4mDqoLCakc477TTPpmYY4f9V",
  "key5": "62RZ4nmEa62uXRFdcrKY8RS9HoDBQeLY2TvH5RepKntn2hKENfz2NXKuuf5QJrZLXzr8tbtN97uZDrjoo6P2cggz",
  "key6": "55VzsqFo6cCV8S3MVQaBjrSJ3fSwbeEgPFFCnyiK4Vz8aC4aCguZ3RFktenTh9Ys4m4n2i7U2rA7R9tqKgqKaR4S",
  "key7": "2guoEKKXrLe2PqWa9sXsnvWy98ugfTVPg2gGyYiAicpH2ZviBHfCxefiL83TWakvAQorc6aPeEA8N6RJRucELaVz",
  "key8": "ruN6DdygoHLs2XtftKDpWEfZ8cbck2HuBQSP86MkUihigQ1os8CDLpcYD39K8ohV2SHuwcBC3vW718bM74t4Lk1",
  "key9": "4yMweZDjBmSzQaf582uud7FBx1XcVssy47RxpvN4Sj13hYhUhCaj3TKetUd5sC7BN8XBNN6SpT97qwgRbjQYpnWh",
  "key10": "59KhL9EyxzHwQ3T4gF8G2FCnodQ2cPYCSNqXX2yVoB1LSaFeqyDKWSpYYcmGwbFn3zaGqZ113X8efxgymbkH9J2B",
  "key11": "3ULEkiydNBJcHY7PggnC4yK3ZuynUvcAZnpP14wFRadGfEZYG4AcW3arnbNFT28CaEAYJQtaCBubFvLu8A6dK1Dr",
  "key12": "2yGFrQfWSeGuL6c9eNXGcQWWiVej3fCSzMyxE512U1ttP1vTwKc2DMkihcJVFkDyqmFgSuySLuUtGdtLE8bZ6r6j",
  "key13": "wLZppZFPWfPxfXDPsSL4S7S9NzNhLqNYWihhEyvm6n3UJXS7he87WCT3zUjq7TBm61qqzvhLgAJ2BtLYX2GNPpb",
  "key14": "FcEr2c2pVZSz89F3A7Fn1WXiCzfrcwEJKSbxmzrjywFinkvCuAU4bkTXzdDzq4tNo5NiM4UQV5HLAs8nxe5oq19",
  "key15": "SBj1hwaGLqZDdXQw26yU5jtAwKFQovkqM3pWc2TAEBAddftedtkbbLkM5nAs2BR7Y4PCzUDC769gkKQhngxtYF2",
  "key16": "42YEcfe2YfdrLkdi9dkNfhqYXPdBmbH9vBAZr7BxpV6garB3KdzF4HgipYxLTLx4pE6HbVS6d2uztioWpHV5p3q5",
  "key17": "5wyidtCi1uMqsx5PZGuk9PeN32zTzcAFnuoep28AYZUbxiJ24XSiY8gwS6EwV7Xdh7RXp8maA8Y48C3pXh4PmkiB",
  "key18": "2te9Mn64r8UUYT5C6TtveKyfxwp5cG3PoEYXJqMDNB2VQsT7QuSpK8xdzTNnjFv8MJHReJVLNt7rA3pvA3uge8Fb",
  "key19": "2r78WKHJjk447mtkmrverj6XaxKPaohFRTtRF4YPrAaHB41gCvKNeetBPgKxFv7SbHt7qXqvPWXGSZ3EyknrViDM",
  "key20": "2f7fM2JQSqhJPuV2Sn8ZHbQXTUt4P33MPvuS4C1qCBWDpA2cByU7MuXnNAREkokS87u3UVyNNevpGj6Vew9363KW",
  "key21": "34vM43Da1YKtAdznvb2v26JhcjMJDPy55fqJwrL163n9cwSAEZHDWTppDrWmpjbbwabJxtcRqxwQKxWaicK29bJ3",
  "key22": "57ybPPUq5FfaChe2yQ52KzpnAq9z1oYCxY2TYwGyMbPnyzSPtYed8hXZRU2xHbEis4GXWJY3LPbfH721MjGUfa4z",
  "key23": "5Tw3D8SXJhmuFCAxX6Phex6WTxcYrEdXsAojsfJ1xzBnUDmNkyoVUaQKdgEZYvJdPZ7e43pEnBzv2NnwG1d5LD1h",
  "key24": "3Wje2yspAxYDUkXcxW36qdpHHkHGd7uGZ2dk51QGncJ5rfX3cHVSFts56Z8XrWBU8N7uc8g17TWg5P5r8JxR3hfg",
  "key25": "WnLPkahVBe3bY54LtLcQbXxW8H2ydYkPjTHFWMKthSMMkfpCRdAMbBGENppVmHekSGmnQXXeJVv7FxCQadiYMfs"
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
