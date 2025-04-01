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
    "2TywJHFkUqcRsxSbPjdgiYUYvXaD6Cqyj2XoLP7eDtpz4Tp4JeHdRE1kq3NskWXZKebZwWwd1bfWVKubfPkgnkSc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N1aKhVzDfKfCmbMMchJtBes6awtzzwh5stMNaiU81GzCVWMsDG8rJhWqzsR7G4x1uyBgYvc254bqW5JcwtKNKPn",
  "key1": "5GWz5uRQbzCRrCrF8ggELBz9Y8U5AfxKR3yo9f5p8n5D1fDqZ5czUJy8TSu5UMgCdMbj3cvKdN5QbjeKXXJNJkLb",
  "key2": "22bfcC7BvZLxpZBedFGx4iYssKRNgMqpYAH8AmZes9rCN22gCnYmdGD5w1tabbgT867pqrCdKhShabVucRHRiFyD",
  "key3": "5v7WfEg9JiGxVmy2FewDuzs6qacJtCUWNcTDkWExwc6SFHd3gLsUR9YEcT7C2FxdYAD5sVLsmKz9zVnLLUADFgsp",
  "key4": "5FjGkaP9gSyhH4WMDM5ZZkzzjKc61L4B68mnmVETz9TXmSrRozZghLwTdwS24U9Jrn1342HBsmy3UzhWBZNexbas",
  "key5": "5FZNpYtmAjbcwGTimpyjbzUc5He6swAAdFozZaSjbDby5qGheK42FqD3ij8KDZKcpqBmsWgBbZ27bJx6gB6yP7KS",
  "key6": "4SbVCtjqMkmG8xScNy9wN8m7Wuczo8FGir8HW9CsUGGhzu6RZhDv2S1A4qFmnBNbUnQLNyLs1irr1n1QPGivC9vH",
  "key7": "5JHs7W9dnR2FZ2Y1isRqPCUY1Cgh5JsQsxscr9iTtsWsgN8dKwoYHMbhs17QVJDtHyewSKMZZDKvT4yi85XkEEaK",
  "key8": "52CqXAgEMyk3Y2NigntUap5zRJUb6RrWg6zWLsd3ehnX4CB98UhJq3zPAdkYMaJbdxx6Y2Jv5xPXMeZ4wziryrRL",
  "key9": "2tacCV3dRwufgXwRVEsBmfQoqrrfUowabLNRz5g6uqasPyaPuijQd7Pc5dVLSWsCJDDNdWSNi6UwbcC6bn4aARrC",
  "key10": "2w3Mk5KcoCT6Gh3xnYomHDPJ2fo2xGttWMWEbXFCKsgJwaSMEfxavv4fTYj6doyPCn7qXrAMc4oW5HNec53LbW2f",
  "key11": "58qMPDjpFZeVx3j15dRstr5NueJd4BHiH3mt12RuPWYJYmX9HMzeppiDtpRCRFKndhNvJd7XVQZ28Mnf65iUExPj",
  "key12": "4p8CSgqr47vHnJnP454BXpAVdDpPLuhtXZKzXxjmbQoPCPYMSW1Wo8JFRgsCXKNhSRu4qijqWN2ivt8Qgn8BPLxU",
  "key13": "4jYJvAmyJGBqkuA9ccuYnQA5DsTF9GBbNGM2GpvZdBnLVtX9pYXQxePyAQD4pTgCDabWxzfmAZay59ciQYh6ZU2x",
  "key14": "4qdkQ5duZ28YmQN54N2uUnQDG7kEuekVHXzuMXsbzKQWRSZj3M1eubTsnKgkzZ4A6wzrdvwBVQDPqyHtxVQGQofA",
  "key15": "3Kkz4xNv2JgvjnWA8gz2yRVvbDnZZr3hCW4SmMVL68u9uXLpEfMdQRFGsRDAJJrfocKcrNNpHRfjcPE5NxSf57a4",
  "key16": "Ft5fxHQt9YJWhQUyLLDafSnzMtbHhqtkRBTv3Cmb6jH2mwhNY3fr47VxvwXUWmhtpLLACG2YFqyr1To8vV7LaZB",
  "key17": "4gRgpS835BAZ1egkaJboXwAb6Ztvb2wA6qJyduK3AMWHGEth4Xr4u1oPb3CHjjQe8TZbR1Z5FCAUJ5WW117rDKBf",
  "key18": "3CpH5E7LmS3CLShDJbaYQTr89C44skGe33YfgF533ZEXsvX9HAXiMxsN6zepKWxK9m1WMaa7GvcRkNsgDGaSP7zm",
  "key19": "4TCgR26BsTUT1xrLZ1S9QhQ7eWJG8bav49wTb5piebc4gvapBZankEHsAhuorcPneVNteC28DuuAwG8hr6ZtXP9e",
  "key20": "5fV4hDR9DqETCpsbLKTTNkyEiEFQsc7py8i7PdNQUMBsXBWo2vtt5AyFRj5zUuJxxoZXkCjGaGj968WUZDAcZXgA",
  "key21": "2sQ66ppfsReVf6xcyXGFZmGEEDpfsX7NKyVZoiuo9TsVAN7VuMKYBRFjt3oir4kf5vJRqL3j41iDKDXzmyumyc2d",
  "key22": "5VYyuQQF8uYT6PgX6m71FUx7opFJpHxzkYVaCgw7q1jjACraMsftdKtjqPhtkwATLr6vfZVLHQHixvwUrKEEQ4fc",
  "key23": "4stbzD9dWWKPZQaLcHG1caAFtF893w2Rsusf9LSQWQjERBPCF67re85GAZ6PyRF7ENfsMrJK3JyTgnLo1pSC1se6",
  "key24": "4Ej8n8a8TtZ27Q8HS9P8kQvhXLmQ6aU2UkXz7GYk7rLHcAUPzovSWtDTZHXxf4M7Ej1LscEEuVWniPgN2nxsVkNT",
  "key25": "2KFA7LoS9fZVKNBQSEbaLwV8qf1AALLJnPsLFiHjFowrht2wUjHE3wYKdRtf5HSnfJJA7JCaNGLGtqQYjB1P4JQV",
  "key26": "3SRAX2kjYiVERAoexhzPchUy6Xi5mLjtTMfTLkb7HaR7sqkHuHbc42TDxUS98xDeW6b9ovsJ9gPGa52JHod7rSnS",
  "key27": "3pCPLbjChPPjn5QP2b1GprFCg2rVXM2C7dCs8REYm8m6zvmRuLgeWQ2ttcSnw79JM6hw7oNLnnJbLGQgChtqvHDe",
  "key28": "dsg6YbCxbNmyVnPYUj587bixnTGopEFWaztN34VDeRF2V3WF4K8gYm1jfC4Rch3jU7c1DEZJdA45azAv4ZD3ayU",
  "key29": "3L9dBuwHWr7mVE44XDZHy6iUPgBeVBfkHATD4k5giHbbqcU1ZJAoQhVxT37sBLWjBYTjhGeGC72tA9dGYZWCQpHb",
  "key30": "Losn7CZFYKmNyuj6A6tqzTFVq7PVw1Tacem35NH6yYnNRnePeojDqFuJdSZTBbQB8LEENhBSAKHmZHUxDH5Fi9e",
  "key31": "32xAJANWfu2V83b55DAJjxgam69kLYKKjRsY31oKkVaR2JQXgZPGNT5pN5VCAoSyHDxhXnxAXZbL1bAfSzugX5vQ",
  "key32": "ZB6GtS42aFZnwPrpUw6FHbamTxzkD82FS5TcbgEw1ETUCETPTX9kzv5zYV6ic9sM2vSk63SBXLqkF6trpD4qEwF",
  "key33": "4m1N4SosGLZiGfwwW4ZggQ8AwzwubwXdorJTyfhrEHvdwiUtLA9pPeHFyBJ8nwpgm1Qxm67UzMombci2KNAJ6DJt",
  "key34": "4Wi21N148gToRQJhruqbMT7H6rP3JTfMHDCQrv6NizLwpfNyRgxELbupfccyGTtYUcXr8xPphTGX8GwxzotL12Q3",
  "key35": "3MerM9xTDiVvRD56W8vLiSytsULhhK6iGbbdmswwVkuehtWpc7GDpp2GSYCyt3VZa2Sj9LfxscEv3a9hbcrj9ZCE",
  "key36": "3fYRq1mSskwHj2CvPf32Lrq5aTk3sVpTMLyRa16giJK1kLysF7cFZfzodbBv2FrTm7RTAcpSJyEMEVD2q7v5tUPh",
  "key37": "2yYJrSizo7yob8cKAxyVVoZPNnk6Xqoty3HvBBvZbSWB7YEwuurBYdYD33NA4DXEdUy8o1j8pJrSVopVKCfsp8EF"
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
