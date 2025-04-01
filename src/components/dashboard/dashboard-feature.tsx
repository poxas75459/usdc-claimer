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
    "2H97XnWfybHoWtUmN7m1s6NF8he6rnk5BbEPEtTU1UmNQvviw9SHs4c5CNyQT9im4oaXEKauqHvJpkKSPUwhenh5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tsQWdH8Y6nArUnVzSL2m9bR1Hp1a9zvheZLP64Rp2ufMYiADaBLVo52vUpnd2P6NVtoqRczdhxfVWrcV7cZjxtE",
  "key1": "5TV1QKAtbnF8qkV9UoxqCThjhx4XFGkonaFxbHNFdXsrV91oJNC4uDKzTf7y2Sg4f5JrXZYFnovGTEHDrPKuASwM",
  "key2": "3oXpWv76KtRVSs1whpe73SQVJ5DkW85EH6DYzSTzTNpu7K7ruUKWHHE7H3noG7n4VKiz9MGdRWozuWPMa3ghA6Gd",
  "key3": "4HGWAFSma3zNjNVBhYrhMr68tAu1Jy5TDDKJKHQMj6si55p2zvjKPnyuUkpJxg3ByBnNTPeTXjtYQoyo6BHryz8i",
  "key4": "4KTKXy4GbAjaBPG2TCuAypkBJFgbvHZC8AFCukvoD41FAjoTqEZUSYUdbxzi2jhW3zjY49ZsjA5niWxD62d9sd4p",
  "key5": "31sHUGx9NoiZVBkaKNmcJxCGiTK6SezkXm629pqZCbfYUFn7mhtLKid8or1A175WUqpev8sW8LGdqKZ9N7FzpMcz",
  "key6": "4S5YUoFhs2hCsSgqm11ND1THosceUg1zYb7DzvLjWC7izFXNohi8AM1qJMnrc5233YGiVGGRF2Th55tjB3qHmSus",
  "key7": "5nrmH5WdeU6CkWP9nzBwypEEukQpBcmrCxMi1QWTcMYWxFUiDYrzU17obKXpnkUp8nggW1VVJ1yfLR2rGKpiwxeq",
  "key8": "buU7ztT13LyBYLjjzTWpCSdajqjSBdKrygboeWgjcQha3uPcHpVD3U7TTQMTjkGqb498rtZzi7F9UF3wMARiWQc",
  "key9": "57fYkfyarMVjaacsw8NWCqFeQnnncTCy6a3Nh6Waj1xZ3r48UQzZDEiARUqC3k7YtxcdFinibyapuUDuZ93zQFaU",
  "key10": "wFxcJnhPtQqyJSGBHRSU3eiAU1Y4W5YfvNst8NFjbiLoPjcSt4ETnCApvK2daAMr6Codk3pfRhSBUHGstoeZzp2",
  "key11": "3ZTBScuYjNQ2F9z16qRaYFXmdYJieiWtriqwP8HQ7Qm8YBjaY3LkxTTpnM37iQjrWmLx726Z5xCsMCdYa5sY42ds",
  "key12": "5wRGhHQRhCjSwhn114paEtWHkwyh5ZvsvXbfqEjXRoAS8zTWyyeWpHgpfAJJuTDjszYmHRuM4JVQYroB7CrPcWzH",
  "key13": "54s2b4n4KVdoEckFMG9nkEDKJypX5mePzjZS1QticXVFSid7Wc22Mzhdoxs6qaUQ2p2UFcoed8kdd5WpTPmiBHrR",
  "key14": "3VwvL6peCR2GwHjtnV1pY6bpw1xAFupzBxjTmpVkUgbcXL79PaMTFKfXZCEK3Jk86AWfkFCM9Y3kZ64v9fg8HwSw",
  "key15": "fZDQM3nwdUvcJSJT5sFUKMp1x28hWzTUEMu34ZLTXVKGnUzjjT9YzxRVSUnfzQn9ngB2W6mz18VAqkXnMT6gMmN",
  "key16": "2UTF8JJH6xcobc2hy2FKqykXABDBA5r9dYXU9cBBXs3NV75kk3ScveEwHwjAmgpAvJgE9VKv8Wu2ze5AHoYxQ3AV",
  "key17": "2qHoVs3quvtQ3ygLgA7BLophvobaf2KWe8s2y84DGHzCacoLcpvSpBfibAjtoEVJjdUyrzaeuq6S2VMgAYsfAHsZ",
  "key18": "33hQyagbrxCg7AZ6MpMBWNWv7VJemgKywXFxto7YknE2RsXBnVRRYgvNG3wZQCruoKDEVzGxQeX8DGp5TQZ5toJL",
  "key19": "2ciBhMNgX5vHsAQSsiKcPsuxRd1ZDvb458y2g9H4PGBJPy3tw5dWVc2zjqgYKo86CkSHHvjDPfU7e8sYHPaZJutW",
  "key20": "3G6AYQSLczkipqpNKb9m6ythhCV2reBCBy51XnJkJQc93tsscaJmw2DFgSoEE47JtRVDDyNeyeDokMdnGcPUhAMS",
  "key21": "4xZWKQPTmZj7ufWGMZgsD7XD7SUywdXW4wibmSyjjCefbbj5J5xfdEoKTr4Zg3GUqy9ioBqVTbTqQkEcqGLUW13c",
  "key22": "3sPm2DjW3nhbPGHfawtu41xLi91h2QDMGQAS7UPWPb4mhNZwBEGU5JJAakKHHVsHRXgixSX7JnEm7dQpHdKVQUPS",
  "key23": "3iYZkfbPSuAbLPNbgA5gotT1oTa8xDde86gwpAenVtV92sNvTBmNUc5CPCER2XZhJCmBA6CY13V5C66HosfoAj86",
  "key24": "2ryQ5vWxdaqShmSMVb45fWbpnSWSZ6nKXR17JXaGaQZoyHgcGxXYQbwVVVGmNQemAjD2umKzKG6TFLKi8bkKvhRf",
  "key25": "22sqwHNM7zsiag5Wxbf5nThKAvWUZMrL71pmP6Trnv4Ykb3RqWZEyJAEHpxPKueXrz5diZxLLzMaVJvZHkfU96oM",
  "key26": "2jP9EgMNps2aiEyB6AzSZF4n8jre1Te2suzzBAhFnx97SJHuQaKcYi9vVhGYhUNNnk4QZJTDQxEdzeDbkP9G2cjs",
  "key27": "5h5HLtKoniLqVVLzHjBXvXst6DNRzzQiGxvAYDDsBxUVxeU62waaqNaDqMWNrtuj1oAL5MqyJpTeaTnksZodtfm3",
  "key28": "1Zid8BDrcENM3NUBSuvMWtYuWdQK4xCBTRs5smoL5QiPYFAkagvwavUvHq3qH66H6QYNoGyxjXZXxf5zXDdAjyz",
  "key29": "CS7JkB647dqmuftn91jDfRcnbbGnpXduDxX633EUrxx71tMKKk2dGEiUhpeRdxzR6gwxZDiVx7V5GbiqKDezoDw",
  "key30": "2bPL4cfqWjWfZSfM11NjhQtNcLTKcjVsBTBhkNWNyqnWvbLqBP1Kqj9tMDavrPZ5URQP5RAB5kKJ7eGCeX1UgTi4",
  "key31": "pokbwhLALBbKJ7R3RMe3gjcfMn3VYvo8uNns1bD6YQRnFNDZFJjmkfsT5PDAvZeptAttumKKr52iYcHEovJZSik",
  "key32": "2rut9ckDQVrBi7nbTmUdvdbBN6QqNRxkYSPbAUyQhfBpEHeSwvFNgnsd6ve8NnRPXVMwRHjDmQYi9PYky7YVkRdB",
  "key33": "4Enj8S9mh1vbhHd78JkgYUp4YrQ41Px1q4jqGYuUMHWo2NttEqETJJbufFzJYS2PovZDdoTf6bYoeRQQZckGy3ti",
  "key34": "2k1f1pFr5Z5KF7k3Kq6ag4i3wnYZE1tbuFddn58hR6Vy43CQCvq4vWCa2TgvBmN6ihZbrv5seFoZ2Ly8eNHq4VLs",
  "key35": "5dGjZFrqmxdMhkv9PaMLtjEdfmrus3BFoZfWyQwX2jYaMu1iKPu6nuWhYvp49BufAfNbS2n9vNQ1DiDPN7yJQxas",
  "key36": "SkXxpZXfDbpkXy4ioZYHRnb461Y4kCistgf2LjFN4AeE8iNN13gNAEyznEQuitcQeUdcBqi24CmtU5pKMUVA72N",
  "key37": "t3mEqn9pPxezdCieJd5BFP9XaDDf9H7MTYfDwYVfESR4YNJrHJPvX33yJSpbJJKuQxMhnfVH1UiafKn74s85QPt",
  "key38": "E2KvjA4ub1HybZZtVhVuBaC8kCpqW94aWVJ6Z2T1kGFEeQuTfVfAgy9y2N7Zf3ika9gUE5ctTE5fxJgiza8tfig",
  "key39": "4SH7Y9MVEBR5tj8zfWZY8QWHfY2dKf28XDAHPZpbzX4SfeaMCCMTnrWKnFed2HZtnyGUfbHZjwUJMBLK5XjUNrHu"
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
