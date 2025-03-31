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
    "5r3DGZHxZoDqcCLvneYAaBecq7iJzf2PEVCft74xqTN1558qALytj94EHfcEQx4mMVQ2VknykmXzaq312X57eTbD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BFBgPAETWjjHBtCvj4FRB2e9vAagnocBSX3iWBh45y7jGbiTXYKQdVAoXtSiRg4EA9j5ZifnmQjvE71LjFrKgdr",
  "key1": "5oNQAH2GfjZzVAaW8nHchFNPQiuAbTVZMW73KrSF4uwdcw6BZ4c6BCEyTquGMLFhEPxKhoTneg1BbQwPzKomHvUD",
  "key2": "5KUp1VDA8noC7iNNhVKbd8u3o77yr3p8k39hD9kBxaYnwnnQimRDqmDWjaqUNYTtXv4DTMXp8upwJFftgbmj87Vt",
  "key3": "4JyRQaChctnk4YzWMcNSz3n9n9c41ggDmitQTD8WjwrTNg2oxof4G8sNdGy47Y89CcWpsaorNieNWCHSV6NMxpzk",
  "key4": "5RV1SkiqZksW3M4gMupyHXhNmjRnNPzjoozbaiAzLoVhpRbFaSyh8qKLEZ21nHjM3GH1Vwjc2D4ka8tteMetJTo7",
  "key5": "ktaDtUy4k5u8Wdb8tAgSyEaTFDheC74isHTzN9KZSZbxLMo3iJmdoJR9TZvXfiW1AQDDmBwsoEktzSuhiQq7NKB",
  "key6": "nSPsfP8pyk3rohTFWvrUrmeJU6dZy8MymdjrwBGSEfSqXeVHtGuCGoHDPAtXigeqyKWkg6TY8k4MCg9BLSX7mqB",
  "key7": "R4hmDbL8MrhwJbK5koZQLSMQ65r2CjatVazWyvo2B3x68h9yojihLpvFVT5HfJQriikRz32xbW164rSDbsK4Vbv",
  "key8": "zvq5ET8nGbXjwjdzFD5hEB5jYc9wEjyQJEBYYAwj9d2NFXkyE9xGQKP7zYb674noH98NhcMrzihtXa8fPCAGjkM",
  "key9": "5edFNeRhcsEgJSnWfu9edXnPhdyy2PjUUCzVFX6EyujM8vW8mVestvcTN4QpqWGARc9XNREyHWrPtrVVeEoGLDzp",
  "key10": "59ucPW5VpXQVRDeBWVT4j7HrKE6QKCzknSyBgRji1DsTyWx6S6yK5yw6jEBe6CEazTZwJ34RjTpHMFMkJ71RjpT1",
  "key11": "61Eb1c6T6eHrbzGPcvyJtKaK7c8WHQfrkJ6LuBKtLFdNxBFoQBD29VvhHz87zuUn6gpcYKR5pNyBtWDkAbBG3c8V",
  "key12": "BGgxUKUFcVq3X6uYCe5aZXCnwxPAWFu3iDezDntnmJ2yxtox8R7QFzZGvDh1iRKkAcRFjQ3R5McDGpXLwFxZp5J",
  "key13": "91RLiZWzoRPQ2cBnTHHd9FdKtc4PhbfXDrmYDgaq9WXWgxNWapCL1Aa1UPDgk1MMrvRtC4zwnvUFBKJGXPMoxRc",
  "key14": "2YGGQHh4yGMupnqnkqrJkSYSPjjjgjkjExL7wzQwUMv716qD76jkXzaZNwBNMjdS6Wp3diqKfsNEMgVPpL5ga5ey",
  "key15": "26fiCrimJ4n3xNcex5NMSaTwrGtjiUeK1ohesWqrKCFSX6nqjVf5YVRhtYtee6MhYSXGg8HZfAUKDcQnEdNERofA",
  "key16": "wdJSpSK2AWN4u1iwCX7QkkftbBEdQYCnLVV6BxGTUiK5t3Uq5XWRuTK8oVvujSqseh4pwidXmFYD5LD3jcBHaf9",
  "key17": "3Ggo9HZVT1dXyQjzh9C1LFeDzfFqBQFrHRVWsJUme2FTCGksuL7MimrPLsm34GkJLENFHCzsuWi6Y8fh75j92iv8",
  "key18": "5zs9SmqQo8TpMrP34pPNYCTZh5qZRBELCTnudf6wvPjLBDKheZykqZB8J9i8ork4rNPTMGfW6UcacebmT8JkydKj",
  "key19": "41EqhpyWnKN3UhHiGfK7pSKxdNGxVinX6WPHUzG4N5szn34gAf95UQdN5zUyUTNamaX7vVDN6X8842Fbf4dmWCwV",
  "key20": "51pDrAD78yfLAm1ttZd1yZwG6pWA9K5p9kXBY8XcmujKnv83SMQ379mdhhdz8c3AWX3jFivJZ2d6uMBV6k976Q9v",
  "key21": "4NQZzS2H5wmCtPTnK8RgcPGsFQfjuqvN5phBoMRS6wrZu3AmP5NvYMk1idvVP4Bz4UNrvCpzMaHUZrF4PTa8t2zC",
  "key22": "Ufq5tRGgaoZpDQ8RkAwzBEGweZNGg7At6f92dBE9MJ4QAA7CFR3UoACTeRp67onokhb6TQxbt24VJJxT1KGCsHX",
  "key23": "5vvEv3aF6eRmtuywSwsj1MiykGM4XfvwtSrjvZB5c4hmuDyNmNeoFXe6epsZmn1NbtqqfKymKq6iWp8RGs3jmdD",
  "key24": "53QtpUxMsVFmwd4MMKakgnQ5Qz57mcNHh5VbHTYPcn7Wn3WyfgtS2t5rHjsRktW9A77J8ARzGudktSa4oEYRnjpB",
  "key25": "3ByF87zLUE1JLXcqS9LvLyT3Fuo6m1fL2CxYeYfLmhFABG67adTAjQMsR7knyMxwNhvWbrURBmng5Kc4RBFBD8et",
  "key26": "4YCodPb2EQ7mB9zkXRkmVH6rXnJfeRkm8BYGyLVwFBKhDnM6jvFoYvzEEWkhYLV4RoFxntk6BNvFX1Yb1q4ncsXF",
  "key27": "31hzuVrKgsRNZ2AGELbb1dJNV8K1UP5ai2RU6qufrCbvdfSn3BAWToLUVTuPM35n3CBpvk3PnFcc5opZt6EFwDbc",
  "key28": "5peYgCedDPvZnr6ds1yzi3hwXQvLVL9h79ZgLWo69o23YgcGxWhCdXbsJtGeH1U8Bxw1NjJ5WYzVfb3rGqtczcvH",
  "key29": "2muHnjDur1cQyXZeZLUqEGFq3kCujAYL7RAm2dhBK35GSDLJWcSdV9yH5SYC11vGvQc5yjUd65Kc37GBwaPzMGGC",
  "key30": "44cqeZf2GHuahY1hXrHqX4fXo7mDn87GHq5U1e8ybQrwu1br82khk2o8X6BbsMEeBcYAhZgiH7y8cBpDG3wVLLcn",
  "key31": "RJ5XTShpAA44hLijbsX72UAB1Xg7Mu9DSuTB9HknJoBY4UZ78ycNB55gt8jkWA2oyFdiPTc99ABc3G79hvT2MUK",
  "key32": "5tzT9fZNNa5P7L6etC8S6hetnna2n1HfMiL66G2JGjKzeoYCRTKS1MPVKzbQLiXeaQRoB8w8merTtgXoUT9BeYEt",
  "key33": "46488tnBQ1YPd3NiQAPfym92iZhtAGc7vMfuHBn4Yj3JTfCkVzjeLEENybr2EYL6cdNaAQVNwEuh3ADq5FrwXJPv",
  "key34": "3Cq11Ezyz1pUcv4du1wtXaun7d11cax6Fei3izLSiDNtsgvyLeCBcM43nuDegq3hDyBABBKopkWAvNSY9hDD98ZV",
  "key35": "Fx4izmQSSudQ9ULttjn6iTfkRfoJwzWdYLN9RVnMTEtvwqAiEZ1LwDchTCjx1WFmymdi6jNPrapYqNQj6JfGoYW",
  "key36": "ZCmy6fTWUghbcLvpCZ42wAfAdeEZ2GeAkJigRkUWpj3mgn6eVMUt1YfChgJnwrzmjHzPLcwS85bJq3GQNW3nQ7Y",
  "key37": "3EhJwaA3UpgsXMwJUAdNkw4VimnSPWnqjeRhdJ61MdW3XRPx5BeKPusqKPaBa1iSvbaTzkZmDSwXnGv2TU4eLEeN",
  "key38": "4ziNqicJT7gbjSoxFdezYYFdwTqfEgfgFPrber9viTEXKhmRUvkm2Wz9wb1W33WpyrgWUixHqfhX1nVzB9uSmcR4",
  "key39": "5eDKtbtFHhjVKjjKqxpo3m58vsMpfVNy4CXsgSKyZpXHiZghEyczFxgFjQUsYDMQjZ3ibnji9RyRG9JFqb5XCvBt"
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
