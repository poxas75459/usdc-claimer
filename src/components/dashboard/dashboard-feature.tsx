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
    "27GrSeN5S9xWyFH8GpPinHPNU4C8wwWMxJJZjSNBqPDZCXkCE46qgCTtknd93qzLixqmiHADd14N8a59PcnZ8yiJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jQeUhu358TmdmgNz4eZVRfcXfujRidQn5YQ23C2GownnDYViZNaH78JveYDN5rEMu5QX3TCVcPs6Y8RdW8iohJW",
  "key1": "aK1Nje6EuuNKCSzF9LcS4j8Q1Yefgef5RTsWrf7pFiqWxY7PoSYBuLVTyRfhVRtMWW4bcxBXzoSb2MdxXzFS4qf",
  "key2": "4pfFKaYtg7zst76Ma2SiTrMEbBoyAH1iLgbVy6YAz5QdhBbTssxkzjyFkTst9WY87h1TuAnx4Efsi2uknPC1tcPC",
  "key3": "4c3BjgopMvDdD8R9CZ2SUF5xmnY8Njvy7GBA3qQnZyusjXDfDAtcSBQixr7JTchuVH1wiRMS74tVJKTzS7SCQrgp",
  "key4": "2AzjewoHsgdtSWpauGMTBdJqS2s1qynKNzMZ8vRT6bcnKbNftk5HEtKg6AreExA7o5Sdv69gS3GYQLmxM1NUF7FC",
  "key5": "4vhetb8dv68gj46QjsKrdHHv8F8SzMyCQPTu7d98MKvMi3ksSzcfBuJNQYuatN3pLQxej7qyc78esfrfYsHhPDMd",
  "key6": "5gzkZJnpvpiy8u24pKmzcbExRoTcRvjaNQXPk1uaATZLH2wsLbRTwAw5PprK8efHnUoGddRB6esPyjbdCS1n7fVT",
  "key7": "4TgG55MpgWzn22MTctKQFsL8pdC3qfvSD7P3Uvegd6dKfX5aQNYLn2QDkR5XAdVYpG9mD9qthkJXWoRXwAfjgCGE",
  "key8": "Cwds5HYjtGjtQt8nusZiuKHCW3VMsjVq8Ccsw3a1Swo6hYZ1pYZ4Bx3UbZcyMRgXUEqdCswm4AYxB2taWHP5NgM",
  "key9": "233MGTxGcPiMsdstEGW83PFt4XJVBoabf3ApGpAbJGoarujBqNP5XWWjymjnQQ2nj6PLwHiu5RZE42PKhZdKNwGh",
  "key10": "3pxhHmjknL7rJbmVCXT6UeXcb9TdnqjKfY8n88FPDUPZJ4cmaGVjRjSAJmecgHpdj5r31jZJteCeHCVvQpxFrfkS",
  "key11": "3c6BFDgf2NLGe8ZLDDtH7Xu4uGj11VU2J74MSr2dARuQr99A6y5GdZbZqmnTzp7uLFDAULJPHsHsZBEFnt7Phe8F",
  "key12": "4ios7qFj9dnDTV3Jn7yLrx7pcKjwsqER1TXUCaYqKR6MVQcAyFgJQkB7oZqSWf4hbrJ5m4JwNeR9uw9oydGj7v5u",
  "key13": "3P6d6HuV9oFDYj98BrLznZDTY244QxBChkfgHRBg974PReyMFHn68w9rKYGMUBfDK2erRD2HyXjDpiTreWH91hrf",
  "key14": "2ycxEZP3LKmSNuw7Sm11kTMTNjVzW7t3FeMgtoVV1qQpvYT8Bcg6Jm3fb76XgV1MMmjimiVa9yv8mjvHEzk67w5w",
  "key15": "SB4jNfQhVxHHNir9yXN92ndei9yau9VprAMHPVPExwkS1zfaBeb8WNnBog75eKmLqWCNeU9dCDvNvcpvirUN19t",
  "key16": "2HBMG5pZyLtj6gvZ3EmkGM5mWFc3XLmreq2dAJX87up1HR3JXgEtaxyQ9znN1GF1UHCfMuqo24GnSXxqowfynUaM",
  "key17": "2kpDgoBuffBfPzz3KRc5GRUg1ErGkYufZJvRzzF26CQupfWH1m1LcfAC4mHtYZumGgPyKhNc9qmyhBBtfdcjjUSf",
  "key18": "7cVGz9oQemtQ3wYfhGqQ1e9ag8nBZFQrLKHeuv45fgvBoDMqLq5XYwPx4jdZM8QPvKCnxco99kmqvT2h1uhSqoL",
  "key19": "5oo7VqYJZmqvvRFBvLutDFbLiprcaYazcyVfWi9L7oxppm46hWZw21xpPt93EcPu19jCgs8YoSqb46zjKfYC6sFB",
  "key20": "k3pYrK3K1cgx2ZdS89e4hu91e9G8zFFTtWmcy323GMW4d9kw2d8SKVRV97o1pXavzE3EieMu7Mbea1c9gBVnHnz",
  "key21": "3CBDJ5bJE6xJSUdBeuWzzgynBiFr92p6du7b4suNRyDEhcfViTsBvUmcXw4beVNvJyT2jkB1YTJ5yBeW3VN6cKM4",
  "key22": "4HCGqzTavky9MAByRwtuFTWcxaR5bE3bPH31BkQw4tSQH72w5gXUHprAo3m974QZt2tP9ivbm1kJEKkVfzDnxkeE",
  "key23": "5HpdGN3kYpMamuZorkzwX8R7xRND5WcU6hbvYeqeReWjA52vn4pAEwYTkqRsNmi3oFPTbaxHKCJ2RjNHGTVBPVY9",
  "key24": "2iHbo5FvSmowWxuQTK9XwoQDdsp2eB9zMNp11kNUAZfau5kEXygAZ4vB3rvPsQ5i3ofDPwDDQnnGuNb3MhW3oUAn",
  "key25": "3f6Apt6EYHiPXZE66xuTLuU4uesFoFv4QeB8SkccvDJrPMZbM4i8dBcip5wspPKzw8FJyQYTduDxbg9H5ShVzo3g",
  "key26": "3Pj5ktEDSYAN4tCr9QUx4Ug8jtFadciupWbCQ7tFxCWwV9WcWvetjQ9U2NMTDrmLv88Ve58fbw1HZGn3yZ7EWVYT",
  "key27": "5hmPzhAjaWtpat8HkjAN4m5sechXihteLBxHQ1NMPax3Tc3MfzyJzm2pYmamrhSqfiwg1v4VHZEBrxJpqKkhTAxF",
  "key28": "2BtsHWTnS8W5VSJvw286yZyN3g5GZ9BcVXhFgsyH2UVhWxBWfdQvMLDba8R29MbN3XThS4L1XPd1Ab9CPF6s5aas",
  "key29": "T5AXntfpojEyx2RjGfnp8hpFtJZuo7vqmsKh8XQYogm8RrjnDrQXV2vd3s2Nm66riB4ywmC2SZpRdLu2nZUb2EU",
  "key30": "2nTsSLe1ByFT3SxUb1pvLxg3bx3kPuHXfGHLViC7XJR21D2vdyueFvzAnLdccTbqdqPGdeUfJTwQ1ou1Jd97gEG4",
  "key31": "4xRPqCaYbaBmTuavGQwD5dEJApxh956TcUReLTMqviJgB4jD63Js8MYFpxKftJvBqrEx7j6BmRWiuteJZmDPEbeM",
  "key32": "3CeixNKgRxvncJbJzKzC2cDwgvaf2BcPoHpuSoZtD9ihc58WRGBNPyjSfxHaMeU3b6bRkjzb54ANCkRiuuPYJEwh",
  "key33": "ZasD2661P3SxyhGY2jdQ7EChH54udZir7ToHTBxRz2j8uYHr1dqXitNVEQ4VysR3XZeyfgfuKm48eLFt5dn7Tty",
  "key34": "4au3G38jKLxYXhmHwnyMiU96yVWkovuLAJJik8TjvFsBYXqr1JP3karHbBUaEoRTfeVbrH8XHg227dBgcasUHJJ7",
  "key35": "35zRMea8x86Z4a5n1LFyZyev1EG6PjJHqZeMQv7QZ169mjAmEiF9ZDbZvDYFjSaEpzvwJyHeFCYh5PmY6p38kyJc",
  "key36": "21ZR3Cz9DmAEs7menZhtREWgv1GA6Hf5jeKL9TKwuQyoKf9wSusv1TrLpx7K5PE9yk4UJMvo7KoJ93eTDrenmBiH",
  "key37": "597QrpP8jHpYuVh8tQCW7A4q6N7mQatUhk1fgdzWJxs1XGdJedcWPPCacyvbvMdJn2YKQZrErp1rXoJf3qmyZu8W",
  "key38": "3E7C8j6Ly1qLQ8tHgk7H6h2xR8VrNC4aaHFq4CyX11keNDumNkQPQW8tKF9GbCEpyUjU2aGRp9EJAKJDXhs2eCti",
  "key39": "46XcxZdgDqLPGnQQg6WTigsGXjm52Vr7pMayAFE1j3n7VKbJPP9mbn8dD7jAmtGtZQ7iZLkRD1mGvd97XZdxP4hN",
  "key40": "29ZsewBCeotcZ9fJBawJ647Uqb1CSCCgSctB6Xki8cxAgSHBY1AjzEgAzVqEZ4v4nNoqBusq4oMf9WmYoHyUovtA",
  "key41": "kY77N4KYsecBtPhdf6q5ZvSBET4rPymLjYcLCy6eRKrcagjqDgEstS3CoSWrapUqFgsyXbZtP6KQxwZyz6FbKwK",
  "key42": "uJAPQuK957KrGkfQujgSGs6UXPZXsRuzRTNUvgZx9ZoEMXRaByBdsMQy3JQfg8HFLTckdRoEncJJXpJoZbJ4LTA"
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
