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
    "3P6PHN5oX55gYBHaChX2FvDKB8rvmZmFnZnektLbTv2ap2n6PgQSoSddgGhuni1RfVRNQfdJN6FMbrMATbyhSzHe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d1YSDKRDfCuEmWhEuJDrHKxQhKb613ujU5tpNo7GAdNGDy4CZBUCFbkq7e2Cwq55sJge4cmvGf3E7YBEUQLgkB2",
  "key1": "2XLCkqmMDCYw6YdscNSZ8iXBGP3eiCoFMwpQ8SeRDCbZ9SieMsRKKxNZohMnnUfouiiGvLKgieSa7j8ir64vgcPK",
  "key2": "3XFW5Z4iad9TrGUNQ9xQYNfKMhNPaQPJGmUxMrGM1rxQRSjfqBm5XrdbaHJAydzQsmNhfGPim3Mo43wn6KG9L5jC",
  "key3": "4cmF6uMgivu9E6jo5QLmDZPxx3UbswV1KWwYS7KMCnPBLDNuYEPFJprBvj2Tg46HcLDhtxLYC1yauxpxYfdB5KrL",
  "key4": "3fafZ5AYVS92Z6AyDQpHevsAUt7c22JqkrphnSHKQstNjHxoXZgCEwdLvabEiZrW4VHXPfLLEsRoH3uPGs2CFEcF",
  "key5": "67fhUU4QSRkjtv5JkZY6bMK3vva9AHctRkuWLxjAfNzWrdzBXJnGFLjg7rkFVKUcbCD5W9jcEQrghYD4pSw6ErBE",
  "key6": "35EcuqorNk5NWGUBn4QvG4pkZLrbGx57mo2sdwKpohieeXqg9vdgqVBvHC5XmeJS1necKrqaGvrC4p2Uq5ZN9oZA",
  "key7": "2ue5AorujELr4rMvYQcYUk1aBoAHj1RtC4KxGJpav6MxnmUEtP1uRSt6ai59ben32MugMD8a4xUVQ7Dzyncepoir",
  "key8": "5vjyhRzxcU2jK9YMEe4bo4psZ1JHVrGZh7Mm3NJjoQNwKNmH54Ckk4KXBSoKabBuFMojrd9L3EbeXCRNbSgjrFKg",
  "key9": "5NZJ6wzq3597WZbJYmkN3QT5JgkrVcg8FzXmyeWyC1aFSgccvbFZC8WzNSLMwMLJZSZWUvT1SZQGaCQ1FgExmnXm",
  "key10": "5EjVBR5ZC2cDSpQHTfqTewkeauaMBHhBqKdjDBBurGvMjbDCtDcZdg6mwnhAvwZcjTmakzTs44hTRqL1fkcGEXoC",
  "key11": "3dEBdp32s1mzwtGuicto57FoXoCW4CcZvJxSJQsfKL6WubTH7Vg851ptLLEQWcNQAMG4T2wzH1Go3doQAEWJPVj",
  "key12": "2M3d2hMwXuqbMnugpDhVZhQyUmn5GxiGWWAdQBQzqsPqznV5Ko6QkdHURxcdghdXps4eM4XTycRcj5MHezUYnmzx",
  "key13": "4qzmC9198UvNKmSH4n5SE5vVnzSJjWNYFvukV2KTuFdrJqRQQtVQm2EbTE7vLHD33gqivkBwYXpj2MLr5HaRFiMz",
  "key14": "F4NQB2L8xEjix4viEE2qpBT43cFxeL4EFPLiJMxeLVjH5KthUkanBD2MLWkNnSrEFevgHxLpsZKbxTsBFU1FJKf",
  "key15": "2WwrXm6Ws7VxgQ7w8NqibKj8mUVzt4276JS1aXyLizAMFZDRCuBv1MgU9fTiMHHWLMfyaEJf3refjSsPqSRUkmN4",
  "key16": "4hKmVKtXRpmYf9AP7xYJGYJ2qCiW1WUo4tvYLSXHiyxsAtMTc9A5HdHdE7aoBinT5MvkFCdjv2tsnQNtiDpskF8M",
  "key17": "4N46UUR4fT2N3axosp5ts7H6auYe8kyGRGdVjjGEXhbxkpbFEgo89eeP43azTCsx9MKSmAxkiSgApctNRkt7eZPh",
  "key18": "225UWHTPpxzuan4yedV5uiFV5i1XyATFiiCGFPrBNwpeKV5EaiVENCRCmMG8zYhx3P2BvubtHdh7QzWm6ppZ5htN",
  "key19": "rVZGkAHZCYTzChdy1j4tAV6pn4aQdkqXp8Nt9PkSiwAcWa9ytyZkZB6NmGPgrbtKx1HpaV8YP9DWTKNFsWhxQo7",
  "key20": "4SXraxXyeEfSKgGbEBBajw9fASe7koTyiJbQZR8wecAY7s1DLMPaoELDs6a9fbmPnJp1MrqF3xa4vvrDYa7WReGU",
  "key21": "2GfidQk55ivwxM6H6a3WvNEwBsyHCKuZJZqEwjoeC8NNj41xMiGEWjJErQ3ZoQs8Shba5Wk6WiehUorrqy7tkgiS",
  "key22": "4rrbqfXetr7VUKCuRvoH4mKeooiN7f6uwRTMDYFQjq81v82UG66FcSiJ7H354EfWPbP92tHTgJM97tKELzjMP5G1",
  "key23": "5LnT95XHnDjF5M3p9EoPsmvyMKUTaFeYTWELsX53AdC6dG6fpXr9RHaSNjfwD2mAmx3fPwEg1mdqRtzCk6bCVoTP",
  "key24": "3Yk85zuG9MmhfbmKgwvCFrKswFq9n2T6z2uJZGADKuCbycyNXZP6a569W5sqEYbQ8BHgtKDiXn73WvErZkUvJQPB",
  "key25": "5juPiAaDoqehLPipz79iZmwsSZELUdGjQgxABp1fsLxhWdcwDuuJnzBVNL1dAvKdXnfdtHbA8wRFbwujtyBzQv1r",
  "key26": "otjCZTYib92vcB8ThYedHwqzgpv6bBDq8re9FDf5JCTaY1MeEEyvVXtLfustiYMu43Jym2ru6bNhAQiJ3MQVhHs",
  "key27": "wn1RYEGv99UVZmBLxAG45qdDMbrFKXoMYHfi5kHuZiKdPNEqkpoZeqgxegQTDUsHoqA7qAwaxga8jpdHD7SZ1dZ",
  "key28": "KznapUL9t7KYveUa6y3CXbqPa7MqCK2tio2AhLpwwSLbV7vBCP2TVjtB7ZFdMe7ZXNUvrqTP2SAJSt7MwMbtM5m",
  "key29": "3Kv2mAHv27gsqAB1x6VxGZ9ZDjwLJreFcAkngfJJgboCGidFGwFWZ3bMkZhbJTnwJzLFD8PL8VoWMzcuunSrzo9W",
  "key30": "5MdqhDKyoyNMP2uZLccyXvfwWCGXbxJJnsQpnT2QvUardNSnzqeGNj1pHSvneVGUQvGgyserpWASc7gHuxWivqf3",
  "key31": "4Mie6WbjaRmpBTw4UE1eveE6YLr5R5oabiGphLGc8LR8yinghyYjyUidNihk311eVN4sAYLCWfZpDXd8QZobJfaK",
  "key32": "44e74XDBm8XngfcsusAs771p6MK5LsHzTNJxtpwA1RnmxpjRUu9eTR7TQMc8rSeXQFhP4m6iuV2WafMv2Htkoass"
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
