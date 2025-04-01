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
    "Sxx15dE3cQz5jeQxBZscxeC9H9bo9EewSCod1K3qU4tVgpeVRYLXtCosQzscyxQ8AijQgtmEe8WDTfmSwc2X3oV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bUboz1bn8wLbvBvjuQi8a6uCC5VyEJHabRivQhTtAYdJLRgpbLbj61LGkp9H2W7CGZbPzEcbeJkCaYcDaBYoJUm",
  "key1": "2EvWJxLUtML72gXnxU7CcQJN9jN5Mscam3T3sZXTyv2T4zMvKCorztiiYE3zF2TBHD1HWdApTqVJA6M1DSTMsaJd",
  "key2": "4cA2XhLnGBTBDPT5sKCcpYhV1b2f7UG4dzxw2CtPngo39w6mxkLJVXzGVP64RyrZbduW7v52HM6PMb67tf6Mrm6h",
  "key3": "4vaAwc9hYythm4EL4zhzAnvQxSTyC2DHYVLSVVGFSVAWqSxv13tao9Zn2kSDENi2gPQsJocA4MEVKmq7xmf6mh7Z",
  "key4": "2XJ4osnTv414WQSiajEePaRCXqJa5i9UncdwzGQfAJZmXzHhEqQM2Mvm1i3cXNUsCEggaCQDkadhuBEFPF9dvu7H",
  "key5": "PseH3iMtwZrior34RJ3UE8tBPrUaTyL4j5QWTfA1awxySwtgcrBw9dj1XG6CdDav1Pkt7o3tmbqofxC74qreyZB",
  "key6": "3adUgZxkUXoVCAdfkYy9x22R1GSWfZS9pfshgmvR5gUzPQe2FRzQDF6SEdvHVdk7vPNZnw1E43ZrYxDPfB2Knzpt",
  "key7": "93dfHUMaYKgucDefgN3ug8m4D3bSGVfeptZUXe4KUWha7816k7kMyUbUGXh5p6S3AuoFYgN49cxyNY2gNMWoTeQ",
  "key8": "6uUXY4Ls5szHaxzW2CGcMKnn8eBMDFLv9vBEEaXqLyCEunL6MLHo7H357FU7TFCxmGCB74usLs1yG6uvoLNG4C3",
  "key9": "m1GFquPrUs3JWyFqkd6rsKfdp2PQuE8Tr7u1e5oLs8jTNSVJbvQBbGr54AJKC4EhyH3PwzjLuCyy2RnDAiZSZMB",
  "key10": "2j36EHB65D7E9CXRkurqyMViEbFhKRKgEjhBFW3jc1xpLz7CDKUaAS5dL6Uasthw3kjPf419AcadfRjdFxBcaLzx",
  "key11": "31gvtL7CjhxoFJ5qDzMWGtibegFS713ayPUf6x2f7jVdWe9TE7j5HbyATLDK6esND8VdpH5dKraKYtiskXpUNPxc",
  "key12": "4kCwdUKJsDRnjeoFxSjfNnSL3ALuTWS2e2VTTybz6bFoe2B4cBBazfA5ucfp3MkF59JxPw1WBHBBPr7wJxjtXFZg",
  "key13": "2N8CDQeVyFiR4LgAu4mnEGhuvcQGLhiDWiHKTMMVqZheqHefyPzYdFxosacKxA2BoXHGy5m4BjgeJZYTt8snZfED",
  "key14": "mNzrRPxwbm6CjyAYMoVmVYpTkJ3Qa21AeDixMPMqppGJ7g5T7QsiCqbN1bLbRh5qsJTddxjfRSGCrCsnVrEuFT9",
  "key15": "33EHLoPf4Q5s2J6YpsLb3c4FB7ZZJFFqjWw2CoUFkHKxBFvNUcSXiEsZzRuY6pzNZ6aa9QijFA2q3MX2zoUyCJ8A",
  "key16": "3QFVa2rWequJKDwnAVCPtyZV4uUdXY36hGnFFbQGFghSPg5yet2PgbmiSPSfpX99VEfeaYae84Z5XEQvovVGLTgL",
  "key17": "RWt4UVEULh1KcbuuYs5oMGVEu1mNNMVp4mKHYwijDD4ESghYD5gQpVNh1Sy9aVrqNGU5AGcS6Z7TMcA2XzriVaF",
  "key18": "2p6TL8WB2YUztugz8fbGFcT3TATtq8vByvgzdrzz99brW3K4St1yTPrR9ZKHGLqiYyZ7TLNJQEjD74WVGQNRPEeE",
  "key19": "4yyLibyTpSxE969Num6JzVGA2orGPPy5C5iatE3CUh4fwNhPgGHyMvyDPKUwn6DsqS7iZuuMMyTRDodx41Q9ypnL",
  "key20": "46pbGwcHCL9VDi2FU3f58ghAhUMBkTvA89y2s8xrenLDBAwitbNTAFzLmFWMAneWbwSgRugqLmnWZUa3KVMRk79r",
  "key21": "2iZBMY4EQpTpTLU8r7MPaRpURejdg9NfNFPkFRpHCQGpKjDDRXRaRWGP3zhxHr2WDXLLJ52heLzWSEnRNaD8bxd5",
  "key22": "5hki5S8nD3PMJTRbBXzmuSML5a6huepVv3iqtx3cpce9bwSGpVRk5GNXU9ycKWF4kUkePUFiiBpdSYQ7yAmAP9z",
  "key23": "22d7GfiHRPKSxm8ZSMxZBh4wqPuxYD83GLSCiZ7fZtVXZUCA4gy1Pca7TnibcZe7ABPnSCYapeTQKt6AesErSpXv",
  "key24": "35xDkrfa5WM58WYRUkZSKDK3m3QawZJLWmgrhDwRJ9JoHbLvTGsF2kFugJVvYLhWaKNcxLxX3EtuT5SMZ6Gw3zYd",
  "key25": "wEJqyUhaSUamgtjkuDoXMUB2gScmHYAvhU4H6rUEux1MM7Ydowc8546CMsD6pDysD9tfdXoN6FAmcdxkCX6pb52",
  "key26": "47xEWouozdg4kCmGvkcKKAh7tAPat1vJS9DSFyfnQpznvTT8p2JZSPj3F7Bmz4e5UVP5VrWKWcbWdzvzaYfACcPN",
  "key27": "2JvyRTG5ZsAk2s3MctzC9QTwnUpU7dgnAHmtU4UpWTLqj9VvyKGP5DZnrmdhCodepEPZ8SQNqea76pWqwpJqbWK6",
  "key28": "4WwiUQdXtuaBMkRfCWFJVg3dTTr61WRY2EWNBTKyi9X3hTopJXSSffh8nU2HJALitTJaKmmUMmTmtea2eHCqUF2a",
  "key29": "yYDNvucu1fB7ZVSRx5xtrug5RyFaoHrLBZzZ23LybJnM3vGyX1n84BMPtThXPqfU9xrsgR4CGvo57ZHiPgMUfAd",
  "key30": "3iDVUG3W5P29Zsw7YZoMrQvVGiuHUBUGmhVDdVrEZq9yA3Trxt7ZyYEcDycdrQpRskKKsJxhDeDnqv1xDKEne6Ra",
  "key31": "3Jkyc7Zheai7PSuofcBeuhAf1NaMSPQgr6N6CKS7ehkZJNNuaQNSMJSf448VgMUXETG939XkusYvqY2DZhzBJLjk",
  "key32": "3WySX5Jy4Zd5tNE2ffoxogncLsjYtUd9XRR9tnNRAW5vaSGHxVGvft51eLr96UH3yEGzsQuY1taPMyqdJ5P6BRp",
  "key33": "5J8Jvz4PeuMxRKawEMZ2RibuscbgP5uumzRvhpjSx2rqzUDtCuHj64bd3pdmXdJApPoeptEdgB1TBZiQfeGwK7q7",
  "key34": "2brRj4tsW5vgxmY9fbo1TknUPWQxMkd6iQSgfoFwJXxzjLTBWMerXSN2EohXP2RmZr1d1VEWf8oCMWCopFEXTZqj",
  "key35": "3CBP6E3thxFyhLkVgaGwYiKqHnygbgndFw48sEvZuTkwKRdJ2EaDxFjpsBdLtaNK8JFwZWhez1FXUajbaqK3tTo1"
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
