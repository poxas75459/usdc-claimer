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
    "sntdvRHjrvWjYmHHnxwi2qA5PYAKaQMbpt7At81rtgvuzZqZ6VdU51tyKy9b3QN59RxpFG1fEgqCydRGw9LaDJp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wHpxPJNxhFKyxzzJWoceGcsVPQ7srGBYkuZcVRb6Lzm3mXn58LgzSbqeCmwVbHeLT5ZzKFQu9eDhWQ3xK14xxHH",
  "key1": "4Hndg8tEdBD3Nr51ndKLm1QmmWszXvHpGFrHZJxMn8NiLCpNhPKCQv62oCAHoULgVNQSWkFK3gEL7ZXa1tSm3aNs",
  "key2": "2a2NPdQ2AKZoYD8GRUGcDppuExQbJAs7ybw7gJHGGoEhaLaqHLMMY7y7zM9rkYgxF5qewEHW4ezPRZfgWX6R8faS",
  "key3": "5LjR5hvioaJPJ4X6zLUwWfuDLV6S1oGJvBYWH2YqBbqi4JH9ApXNmDyf2PF3V2ruZi1QxU45TH51kM96YnDzoqFR",
  "key4": "5zsGhCxe651wbu1woUiY7fKTzAZ8uw1Sw47bHLoB4pZahziPrpbmsPzNmSN8gwGpt3FovwAKAozxcXFRL7CMA5n7",
  "key5": "2VnQrjsTVMMdremFrUciBcAxWMeVACGLqBZ8WivWq8bSwVWcx5CYKXcbVy573Vg5G3frmuxVPnjSE33EL1fyCGw2",
  "key6": "5rdTUXWkDW7rUM5wrz2868dBsHdpq7UkBeLYob7Vf56DZ6UqvjreXmu7u1UMkJg75sBtugpa1Z3RAT2fMuzJ9Kcm",
  "key7": "2G5JRPC8D2u7jrQTjt3nVL44Vv4mgy8LwAN7ZhJLSkTNBxjUoBY6qHfqDMtqwRiKHA58W7EPTjYwihJyamFt6xkK",
  "key8": "5cnJt9FMXK1TikjiDKsMac1V7WaSHXfqeiBMvJqvngJ31SUEXSws6tpBosQeWtmXGgargqEG7rGiyrnWYDgNtgzr",
  "key9": "5zE4zsU76Zcj9b71dUHrbis8UYgTrR7Fe7dwCdhtGA4GKmWTZij7Mxox6NkfqAwXKncRujtrsD7TXBZixGhQevhP",
  "key10": "2XzfLwTEUpvxDKkXtA9HtJhUFNsmDFFvdBnoLdEpbmGw2h3QBCmdHW46t5rpJizajrGo76opgyTNRYjg4Eq26Tai",
  "key11": "2ZKshRMWfAaSs976p5FXGpG1xDRm4azUJ2NuE5CcRYp59dztgqHoAJXygMPBTZHRbBnfgpi9Rmn1rTQLvdGgxoGn",
  "key12": "3b1bvUuLoEMKFWZu78NeMuJJR3xyYJuVdATzgMNGwyRBrSUC96FZa3MqsG4mCKY2oitmX416BB4eXAQqsnVDdTDi",
  "key13": "5K7EJycBbfQusm7x2Wx77xxnhdgyF8xGNTxFLJbo8TYpBLj1iSsYR27XPuwCG89RVeqUaGTK2cm4UmzoDa2brq4X",
  "key14": "3hqC11EcY8oZT7wMp6jRfyfzhKmTcFu44csMKs9zgkses2RLBrZWzz6bVHUd9y8iMLR4w21m4gVt1mt41UYocArV",
  "key15": "4gf72TuJPqyoKoN5Hx2nEKKvpgsCZcx6cLwwD76BBPytmcxe7FwSxETfovwweGkn55TBam8UHtVYCQ49NzXUBJSP",
  "key16": "39vpHrgxmtAiwYMTu3nEw86D3cB1zPErMkKBnBE3exz8fRroQePVCvnCpuk1QxVQ4aJQfGUGFJx44fnPQZYJdjX9",
  "key17": "61EpZBwx7DeuAKDQ1ShjRAKjxfVRLb8PTp6EEra5MLgUDxuHcghfZHqQVYwUJ4kygqNE6KF4nhxCjum7iM5i5a1D",
  "key18": "2CBrWsk9RWn7msxB9k36eKWzjeu5E6jaBsGYDxgx92PBbqQTJxrb9TtfMV6uMKak1CtsaB9gjXPmU2kXBGGYohHE",
  "key19": "5PHLoUnm1DWdmveZaDu2Pyuf7vSdJ5poGLacLH9WbXazw75eojmgCbiWR4KWLUc5Fk39HwD4HE9F7itZfZoJhP25",
  "key20": "4GdDiUa9GB4SUkcC3G7KaVAD3a2Pr2cnXZkxBZQ76qUU38mQh9RBosjG9FfKZ99g5LUR2xiV4aTe3cYiMseYVg2u",
  "key21": "3SS3DVjynWBkGF5gYQbnLz1nHUzPVhpQp8Kq1bZhWWDHADZ4tKsjtr84NWZUTBMRtjnbELQpH37eyURXBQ2b9PuA",
  "key22": "2pXEfN3AN1ZQmd87new9qniHCurH7sXUnSq2z49jfqKSeknVHUJhyizUfTo4A6NtQ38sFbAvh75NM5GFYaNPagBn",
  "key23": "46N4oDRpHFo67yTq1db5NEpWhZPFm64MxsqJ1GiF3DHGxH28FnamZHpKJaiXeybHrLMJf7cT7q3HPQu6bPyjGXPu",
  "key24": "3zxk2HwhTrorxxRZN7C2baMpK3VVkSsgjVkfwpzCRL2zgTYQwtXZ5reDxDKq6SdFyv61FqJBMnhagwhDtKMZmfCx",
  "key25": "4WHfqG8ikkMEfXxmhhnTY5MdFq86HRThVmRrnqgPEUL2DuQSVDCvVd6G4qEkLahMtFucndGe8ECbDfZ1852JTYpk",
  "key26": "451BhChQQquciurKPgteE4PDSZrQBFv3mrqyb5HfHUdC4iDoFEEerSaQg1WiBujbwvTnR3wToQ9wKj6zxFeiY18V",
  "key27": "5hCUc8AbV746tC8vAkWfJAyWnxbNenBp2LUX6gsCuNjNJfiBuzioJ1bLMAGeSdkDJzk6vQsPAoHaEaJz6nC3RMhT",
  "key28": "2nkrksagaq5R5H8tLEPmWHG9eG7UqwYPrjqEwo2oVkc931S3m8VFSrcfUUUiLWk7JNaMcBkG9bvuCVGgNbkAciXp",
  "key29": "26hSXgM828WSMP2gzXQzDuQpp8LKxwbcjTzuvc9MkKEi1Vz3m6ppAx9f9jLUeGQFYidxZzqBsxNZjvrqQdFMAvDZ",
  "key30": "4YzbvzM2f5xCXPtkxba6dPqfPrj5mRPVmKK8tci3YiG2gBWUd4s5FrEjAVFLkVxGQDS3Q665UUcKHR5CcnFuKh1g",
  "key31": "nY485rTrVBz3n9p2rJavY7Ffuus3DQnojoozkjPq4XVoaGzHEXANv25EFc1SxzcQzWcjiT6XXA4UGg79WnUYtXG",
  "key32": "62K4kUjqBhbxuuKXuUit71hcTm73sJpM4ucCdECRwW8tfLozv7mAb3WCFVszdb5q8wUMm3mxMCdJzTrvEBTTcnJK",
  "key33": "3FfYsdw5bQxBAG4BBKypT1YvYgy91evy6Legdx675gBG2P1LLH6xi2jWeszcbHR6oCAztXeBM4AZs9XcSS8fPsvG",
  "key34": "51j4xVhYBgK1Myhso2JW7hff4jybkpgKHxP4DgXDm5XPeLa1VoUM5duYDZm6wgk4wXbNd1Fu7BC6Frnjc1jvBxGy",
  "key35": "4FRHndRBwvcvmr676ix98wG4ZYPfJSshSEZBVBxXKg1qzwLxVagQ2GMxiN3zjKvj4hJczXLdQdzokJ4xJ2nXvPNc",
  "key36": "3sj9zL9UzNu3zxfDDHoeVErLveRBE6EcXw97DsfQrVcTj95agPzkzdevUehVNkju3QkWnBcSjW3SyotiZyLG3RW2",
  "key37": "edoff8WjfUJ4b1TH8vPV6PCvA6gNkQ3CcB2LBMJAobq4qou84DVuhX23NrNAs8deJuGhR5NFJnLtjby6jMtgxbt",
  "key38": "4ZmLS3CVugdqrT54MmfciXvcpKSBzvoa9kcFw8uDwT59UKGJDkjigbmZsifafroKgw8Gpq7rvjm8GhsvwZxSiGSF",
  "key39": "5fSmZY3MubeRjGPidBffnzEPiLwtc6hExbXmJmiAQ6WVxB8WhXHv9fhNkssYVZXMXkBFrefkQTPkNvBm9LYHZK5U",
  "key40": "4Gg5chqTv2f3UvZST8iPNFootJd5bymJgeges4TukGx3kkNnwqUZ2569GDfANAkJ2LKWemtFrp2n3tVTkoDjvxxx",
  "key41": "5M6X9ViY1c8KuhhVw3eFLhGj5kJASfMf7qDqaCuUTuHLWFe8jYA6niK3v9uSaRcLRW5bZTs4Q54ophrrRH6h3uSR",
  "key42": "2Yz4XRQDs7eBFzphqCRXga9rCv9Pd27MZx3hYmYsEUv24KXctbTPo4hMGrdwgE2VFHMEYf6BgbYJ4A9Hij5unTac",
  "key43": "udnthhA7Pf6qVL8p25xpdUgqfCQ9fJm2AkpAk9XWC7P92C6RFVxG7hifDvKGRUPjfignJCz7QzpZL11bLgxaSEX",
  "key44": "63p5Bwh4dhd8s1L423sTe317kEaq3ZPimnYjmQoeh2BSKY6AW5DbLAdmkY4fLQjLZFTfzrWygBuka6VLN5W74yLK",
  "key45": "Q2Fgjer8ty9Zycj3Sxp1um7pyL1PHvtm7G1xRdw6pvWLiNfkwV5vwGdwDigP7e7DSf5QECSpdGaEYPpAcCKX813",
  "key46": "3zNdK2NwnE3qAntVNQzL7HtMXh16kyDhF5ZsXoEQshFCX3pp4wVqYcRjhBXX7hNz6Zft6wBjSjVGjkgnrAnmfm48",
  "key47": "2QJB5UzTJpy4PwrbiD1pRdhWpxyQqV2EGqPQ3BwoUFPu9k5rv8FqQLVGfQsZWHwDtoe6AgvEcxzMz9KkqHYqUa6i",
  "key48": "2qsQnhMKQvrvyPG6bTSZ3Q9AodkNvmwubNz4bjiG2Fc6gy9xqu8p7UXap5pDmJTCokNHdJkWJyNW37BNdqqEofbC"
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
