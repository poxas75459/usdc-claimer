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
    "3qAxJ9LRecLDpfpPLVguPmmFCC6kyD5wFNmiHNoXSuqGAJAGECeKKvk94bDUsCubpfaWPeuvYWFTpZDk5KYTbgPx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dxDonf7pUQnVx4DNuyuNtTs3rigC9jfFa4jkZA2VUnq4eU1ocReahDSy779savrMVhZ92RWCTTgX82YtkUrdHpy",
  "key1": "5xFLA9kRHV7AFn2U6kj19jVbsMpsZcZE1hhg8Dzu6oq2aKkyySopna6wvvCxedP7n9rJjYAWKBA1d5RSpKJ3RWbt",
  "key2": "PJbAuHXszBBj4xfw9zkGGPogQfShypbVJddcaaPo3Ubd97enTP7f6DA1Bxk6S4nwcJ4vKRxqxXefc9GyC2mKzJd",
  "key3": "2oW7XkQBdDSyDQeVRps3ANH8kXz4x8REm1xWPgcEqCzAtBSWEr9KyZwg1o6JopmAbKSLCuZ99WG8LhhoAppYnQDu",
  "key4": "5MA2bsfsHBAKYL71RUsffetGNoz7261d5JHQSFKtvsGSoYvir5stDK4kQKzZ2zs8gyMVHjUJGNJLXvB9omQgaF1q",
  "key5": "3RHKDQ8gpU2h2bojsZkpXGaBz2nPawfxAT3cf9P8LQby3uzWhEtXkseDHPfskhWMufKuXeEzdMKR1KaGHDArY1a5",
  "key6": "5Z7P6YJootahEegMPgNhNtd4GcihxrXLFyqFzsq3srwMd9NQvri7DhZbht3u67YxCsa18NkPkKaBdsQfSZzp5c37",
  "key7": "2rPn1B8WTMCQKwEkuz1SvPRBaj6w4YitruX9tqXFJ4gwiuF5VJTQNoqyvnGRoncqcFW5vN9DPcBQC2Gz7tK5cFKS",
  "key8": "4SrcmRiCpgo3b5YXpDbt5cse7CdNi3xv7eh1gBv8guhZweyKxDgHXF7yVvAXGuwAAXWVRYHUsGtjbezNTuJzraoF",
  "key9": "54E6mhfwaYXkoLqWU3oWpPX8YRLfaSJAurQ5vQyTpQVYTcP8HAZWqgMHbJLfu7NDEZUpiW59JXj8uciZTboQHksF",
  "key10": "LswLShxmJNrgkpHg8FyruRcvdrgmsNBtozQBDS49HBXMTnQFx1YxFAvnMcPVzhTuLiR44fyA4TxHTzwdNokhamj",
  "key11": "5n9ZwYuf7fyofF6kFWjTij8WVCEJMRKDRtMuohgGyLtdxckkPYA9ucuku6co5treTeCRdLrVdfyvPgRA54NYSEM6",
  "key12": "35MHTLANN6jovFJz9evRzQkcGnacU6JRDRbCJkoeWeP1GgjvJKs51jrXPfCzENQ5iFQRH5Xss3QnggtTWzwJeVFE",
  "key13": "4Z263DmWyfszfbMic2euhpMxFYUwu4U5tfTMjsmGvVNBx1vE1Wx9DjqwNnqdw1v7hR1hAdcgJVxabigqm5k3B5QL",
  "key14": "4apYjpnhMzkSTcMrhDuPCV4Raaey5GrT2k7q5zmJJ2PU84GdpT8YZFxtXR8iHoEJ6vF3yGFnWpfefPxhWpG7U5S6",
  "key15": "BVmjWDMXrx3Yb3qnAK5YXSEqNTzr86D6ihMbso9HfNPDBhARsfTewCwDzWXRZGdMVAunxcCx8DUfmBA1GMEMywd",
  "key16": "2e5w1RrpQemVs1cpEt53yysienxzxQZvReoYYygGE7cNSHnYZnF6sXuvp35bxKgKesmUYhVhuzn6m1tS6BTvvBd9",
  "key17": "2iA8gfj5KzSKav5GePvQZBV5LVCQaWWD7iUXnvUJvL4mtdUfSSZjeLSaPPFwJq4HZ6LvPxaKVPj1c1RrofcAdUtt",
  "key18": "5YLgQyGwhCNQ49ybksG6UKnE8YfkaqF2CPEZmXqkuWassuUb6tXNRNWh9KmWrZ9SuWuv869Xw1guv8JNWUGsoL7K",
  "key19": "3eJX7vuLN6bFzbQ4aoPZ52FLR4brisZ9JHM4kBxeMsR5owEDusBckCjriNhpUFBB88SERdT115WubE92Uukx8mui",
  "key20": "2CgEjTgHNSr2RrATVS6yUyRKK3tx5fDVzV3CVFyY5xnWEUQM7hQPJ5qzwXUQqueqkWRWfZQSD8hSJYizkFD17dHt",
  "key21": "4TSt5Yk8j35nhd33bwB45UqsFtWLW4zYSWzZpQmLStcBUG8LUA3kCHCZNRDnEK3FMjvvwzGooQPVC1vVrY8rez2u",
  "key22": "kg2opcZNK3xaC9LxVk7FaaAPu8vUSNjtgbXQnmSDuTS3Vc3FBpQYfSzWSi28EXHP85VuyzyCZ2Jd7pGRy2W6RvQ",
  "key23": "4enKuwS87Rjmo5cEkcKmsPPhRtwEU1MWh6k1C2CfJAyfMGjNAzMgmiTSuUSpLY7YvKHqbGX2LWebg38m34iLoynR",
  "key24": "2tSLK283Y8HKndEDAcX1o4aQj88kwZ3qSMbt84C7F7uVW7DwXCmXA61y2YnNpnJdkMaPgNNZWp8RaiGbnMm28PBo",
  "key25": "4qc8DKXeeE2HeiPWdgzQxdKNCP9NVSzJY2NfMeA4VFefzPYjAmFnNWsfdY7UkULj4jRwu9ZgBtRhYRv8q5ejPyLi",
  "key26": "2tqgEWJt4TFRMi9Yv28tss4YiAMwYaLdXVJo9q3LJbzX2VLuV3PaLwKLLCyCqpviZKFbP7YWXbib1ALUqpb4K6Bu",
  "key27": "3BK5j8TwdcLA7zpzaTqSVB5RtAzsuaxsuhnZmpWUDNYZ8YucToE4WBy9SWr1xRupkfVRQHjEtcnmYFMvkizyymFU",
  "key28": "55iqbZoEHokmQPcBRdempqkq3wEDfkVjztgySowcMwTcWNaM4yLkwfN8kuH1RsUjQnfqFgASHBdsGxAkB1z7Lzb7",
  "key29": "4wubpP1c62mgiv5BVeZW39DYkfrFaFBKk9bTH8A3ipepQNMMPo1UUpns3HC5PD81NwBDH23YVWUdqEHh73XYsNmC",
  "key30": "49XPWSqYmGo5UzJQb8fufcy2Y5jw6svDP6mLccdDJRtXh4oPg6hf6hy3xe8XbdwMAiGypvccWFwHpeiSt7jBfSsY",
  "key31": "3cEmFmCeYAhpALY8BNZRkWEnYP9bst6ii8krdJWFgxFM1f1mLX9J31ULtYXWF7ueoEznKsWpLu2iyQZc5TzZjVFS",
  "key32": "3bXnGLHY3oMiUpfnVXrjVg3WQsE9VgFCsGV9dgF5EXA9BRgsXheEnirtLf5QvcCYPuCfdtKkeDCeD2pJpNn4qUN",
  "key33": "4GstMRkrSXAAJt9G7cpJ9xUaDGmxiW1QAmks5HMtT9kJUBEp6NvLKxCGZdyfQq3Uv9EjBkjcTXZsLWg1ypVfv5Aq",
  "key34": "2mfhFKA3tR3dSvLedN5TM7A3TL8UdPu3qRHAY9jBEFzTKrdvTWATjUBttLKR44e5WB1DDeyVser3bjLR5jJpXEGF",
  "key35": "48TZfeuBfLw277jviTRpsseg4gJgjyediUJDTsHLH3E9y3eMS3CWzy7xMon2nz36aH69PntskCwwTsVfGJkSxUdq"
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
