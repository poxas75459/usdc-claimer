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
    "4RC2PKd5UG6XiMsa2ituBKuwER3k4YGdBcfHNEH6dJY6Jk3BKCS28Coc4ahGYkBVrbdREU6b3hTevFd6AAHGQreo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HbQH167ELdENvjfhbHtghfGcdszMiBxiErFZC4XuxLFuF7fLPX3Ego1xjRZhYybZt9cmLhDfyS8EwquPvZQtrz1",
  "key1": "3Xno2aUbZyRWjwFPZeA8gtENbSRzPrsUqnuHF5BvxPT1F8puf26R4yKtZJ28XG2nfoboNBxusvsQksuuMZFE2GxH",
  "key2": "2zCFfsV7rPXBHRNBjY8nxXEvMwzL5ZQQG7uVyJ7oFTZCAbTzxrgNDeJtwCPamTcu6W5bFXBUC9m1BMZbsTNZ81w6",
  "key3": "48VZjnjrzmYEzpy8RZuQopBmLZMEUm5eryogwG7jthyx8gjHxsHexYfbjDiqeZ4zT1PVSas5GbTpFae1eBJaNbdD",
  "key4": "5QJzg9439nwV2HiEM7NFCR6EEs35EbgogyVgCjF3dGWXq2DGANu8CYgGFrWNafEZDAC83ZUhNiPmSUtVZN4zpaZH",
  "key5": "3bKhjn1dCjcRUo11gbQiimihx9LqCtRyY8zB6QXm2611BbWJ24sEVGPggqyMfcgpYnvjLGEiQnCVXr8xeVZ3d7or",
  "key6": "QnDPmrUKHroKqAbLu9R1ebn89VYZsiSJdsZmmqfp5PhZsJRqha1NGvCjq6gqHsRyE8ueTBY9X79vcaayWcexsAG",
  "key7": "5WnvMnzcFBAdWrHDbdfgTamxhVT1FLTrGYAtb3JPsE5HyZrrzX9Vr7yz7wvxtvvVcH9b9uevDN69GZVf8gKYh9k5",
  "key8": "2axgFTHKAADH92g9262SmaoPrxx8LSbCzwnwZkqM9QraX1X9cjzEbCuYaZJHKtT5Pf55S7scX98tLCqN5rCXSjud",
  "key9": "3PiSTEcHHuiJaKoRh24iCmJQKYJfA16m4JP5BRmbJ9Uu4cPhKKtuPJtVpRaPP23CqMuXNkzLRN1kmt2FndrMp9vp",
  "key10": "4mw6sfKR3XYbx54oAkxP1GJBE7jQCx1YQ8NVddL9AwHcLXXSbYyeiRui5WZGKaHnE7YwB6BdcCgu5MHdAZimq7up",
  "key11": "24NheM159SbLw54Eb7KkjdZDkYkbp3Ftn2VPszzBPz8XZmqe7HSXaqZ5mwKo5i4z3NytHNJCDzFNrmv2hGuR8x4t",
  "key12": "5FYWn7etMfp5MR4WnVTDfabKCoJdZooVTdXPF7pDZENhGJRcXiYb6B1LugA2wGa9bLkq7LPPdwkALM1bFtHT2tpj",
  "key13": "59h7VYBAo4KajX2JmagR6DXuwLgvLJ62jH2spdEztiG2o4dWgQsVEDTcAJ97d7oGUEegYJVHTWh7xs7p33wP8PDz",
  "key14": "5oLGnu1c8h4PyVGhjFvzQLSZM8qCn4Y9tkK4fGfcMonf5krtreFcMWWzkYirznQyZtoA4FddbvV8qBCKk68X98nz",
  "key15": "5NsNVvL7fMGL63znzMAXv8ANqR66zyP95tk4dKdggZgW68X5pfNeS64fuobwoevTyUHoKLUuciuXTXJ7UoxesNYW",
  "key16": "2sz9buFje1CkkRpybLwGHqbqPwm4bFnE9cyWWhWAK5EN1bS9fpDFTRV5bzfSpJDJtxKGiebG34gxus8DPuZkmkhW",
  "key17": "36r8Wv74BTtYneWfWfhxN5gUcZzMFDJCp1sP2fbtWprHzvG4Gfo7X7bEPjavoMru4G1aev56ZbjMvz6r2ZeZ85Te",
  "key18": "ewRoRUiTFgfJ9EpL2aNbQyYG5TpUh1j6zuBaL6tsKEb4ReieoZYGwK8caDYdV6hGDpfY3e8wWhyb3MzzbvnbXbf",
  "key19": "3wBfYTeCmtKwE7gtB32588qKLM39i8effYEQ8UFgU64DFxdQsAqoEMMNebVwipVb1gh1htouCqdUxnVLem9ScC68",
  "key20": "43QdVXgPWZHkgozcANfz3uHpTmWDAVvzE8Jy2uBduHxGeX4pWYHM3gFtsyKpMjAtTxRGQ8B7Efb4W1S98bRf7NbM",
  "key21": "27eQTxJCry7U2d5eTYjtJ8h7DHmJLhF4cPSjYVahiEdk8W5r6uWcUTgJnkrf36ZgiBezHwtxbn7426k3zv5iiSd8",
  "key22": "3ALPtJdRt6y4KEbiJboKaBnQwgw2EELQnXcPK8jfxVYmL8abgaaudEW1k52CfVqb1VkWvNZVKp5WGJ3doKcUdzYm",
  "key23": "LjyfSxRj5fSfoUZHSAv6eqgQNN8hGJDGA9Tbo8E3VaPs5p8LQNmB8yFWqwxDxW6AC7HokopQs9UjRd7fcVUWXvj",
  "key24": "4PuB2DsfEfgMvGARG35mkQoqsMDCcVdb1Xa3TTzUSKq85aWTE4GCMTUrtn67M7cUbdMijmvMReWFp3PjVHyqrAPd",
  "key25": "33NoR876xaNBhtg6ChNWs7vSfh6p9Q8RuhLrPowiaxyNdAXYHivaFrKiGqKEGE5ddMxETmTbXkFHuzMJBxNkderu",
  "key26": "P5AiV8WMAvZQcAY3TVaVCzBu3tDCQyR6mwWh8ayWScmp2J6Cv26BaPXjsuHpEPD2TmKFb2hNy3t6MDiyCutjrBc",
  "key27": "HgbZULgUcfyBepS5YjbQwpwzAVLtaZktHyuRh62KXHzmmBsStrGwz1uV9jEZ8YfgM12tVUjXUpYtNx9ydswW4Jj",
  "key28": "4GAdsvQPBtNT38xTLd47HL38rgqJrQiWnWRsHGsJKMayzE6dPb3anACKWE4naw4oJXUyZTcX78EmhgBLJtb4cY7V",
  "key29": "2HFYH3Z3vRxvPcbj64tHxECMaxsdPqCKgX6oo1JKyUCvatNvNJ3om7u3zSfxMaK72xftNyz9fL92ckf18qwTrkrE",
  "key30": "2LFoeW5FaqknPqL8DKkq2RvcXqCm1o8ZcKQhqvq181iEEg9dHD5ipDobSJ2GtWbC6qVVka8BuDHBpvKnDEA5ph9",
  "key31": "3mu4RSnWMtK1AF7K2EKm4D58ocLwVNQy7xDsNLEQXV8C8t7X6Uq7ReYxsvANiSB5mKXsePy8P196HKtuPqHxTLx9",
  "key32": "BzW96Eb9yQoPuCq5iM5yeCscnghxpVDc13ihoSWuuGQ7LfBPPVG96YiNkk9GBuvebaE6HyTgYghTGK7Mhdjg9cG",
  "key33": "2hue14ufkGuQGvUx752dk7QG8LuTN8GfmGeowiB4AahE9gAtavvcEpH8nUksij9rBYpVTvqhZoQsGVFgqwtavg1A",
  "key34": "5WCb3XENR1frBQdRk3LycJLWFoajSErmpVCahQSSiURK3PYe8w55K6NoMPPiS8EjLj2B9esPNb8vP4NiZZsX8Wuv",
  "key35": "4A3Zssuscw7i2DFAKaxp4aRX1CxnWQ9jPiFLpBVYoVG7zmqt1nHfQkcFMQNd3xKDrkaThT972inMUu9SP1WAoGcs",
  "key36": "51UQVeRCL5fgz3nnabbs2jmseuPYa84XGTKvXq9uPL83fEMp4nmsd3BUGcVxFwAvUZEoSq7RMuxWbF9aH7xafgDT",
  "key37": "3gwH5dTh3876x589WmxiDdqreFb9nK7av66bqmAEgjmJw8JvmapauXYNTEpxuwrs8EScNH87HuDHAHzWEKWBpPH2",
  "key38": "3KLSYyDVxpj8nC4pdZuT8V9Xf68NsxFBydZ9Xk1yUcqTxBX9PXskKJ3McdznB978GjsiZwzcqeT8KvYB7aLZu3Ld"
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
