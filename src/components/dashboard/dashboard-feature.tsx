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
    "5sxdquww3RqteFHo1DBWZQ18xusoBL4MtiAN1bmQRguz51LqJYiuVB7Ww6mZo4k9MAWjonWDcc3zYaaCAwvqiVnJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sjy8qx1PZyCbBewd6rVpGpajehijgbsbzRCXYAg7oJqTZRBbp2zLMrX8H6Rkmagm4FHvbs5yXCWmYazc5hffMye",
  "key1": "5W3Z9BWjeLEm318pnKCMNAFpqhQsMKEhhGeE3rpdA7kygPDjyuhMyQ6zfDAJX3MbJShFLXqFnfbsTaP5aqshjJzL",
  "key2": "3iHJFrgcGNyubNpXP44Q41VYXLHD1Rfhc2nvLKgBEV9ADu6UNPojbvAKsDEVxs2kyoJA99ahHunpG1rpNiuJ82FJ",
  "key3": "5zR8CBVRQkUXcB3bcAj5qThgwHSbQgXr3nt8Z4zVfRhMos8ZKDTSgpcjut3uaby2raDxFvsmwFtXMMhovvacTgQj",
  "key4": "5NgzTVBT86QttgjPrKSaxBPWnTjibbVaYyFA3hkJf2jqwTYZboHNAcui3bZQ49MNqjcK9pYwVyUenAi3SMLSNEcN",
  "key5": "296Aaec2utUTrYaUhTnMEK35AXk3Hycgdtkm6MhjgSsRAZLXujcYWKg8hHRDnzoscunhNbLut5rmrG7TFvZCPURw",
  "key6": "36Nj5pFZJEV4h4eQKS3iW84capwxAGMSCNjZRQWaqbQAuY3aoquVGV9aHp5miny5N6mbK6c9JgGLUXP7syXDKq3u",
  "key7": "5XAk5cs3DbquCHkxdJr3bjsXdUX1pes3G7w3dyzw7YPeNo1285LZVzAWrYBxuqq6ADGH89XftRmnimPsWxv8DAmQ",
  "key8": "BRWn4soYcrJC4JGKxXzvsUyoGahX4FTXoVMABcb2nXn5bzxN6afm52BDFLHkYuEDNAkKDP8fB9dkp2Ni6oAXs6s",
  "key9": "5JmWA3kzS5gGw2Lp8VX8oGDU8AtZRPF5mnpfHhnEy5YR9vbJ5DAjzpSBm2oh3MsUMMNQWYq7Pyx6k4uJHQr3pRzc",
  "key10": "4Ympt9nGRuhm9Hca9atD2hADwvg8Ge52DUZJVJu6Y5JQMBFP32SZMUHGVCNBvNKBG5qU5VjPJd1f2SEtzfQZmRnd",
  "key11": "2RRW6CeJ491rhhYu7XA9uEchvt6WjK7T3mWWobThnd5uWrWqw4zBk69gQfNaKZqGVD1QfWJS7Gz1xXzSZDjwcLrm",
  "key12": "5LuyESTF9JuofBr7xkWgdSrGwA1WWfLSUJvAi4hNaGyshUattmhpoudXQpAYGtiGrgeEpCE4owDWep7afDurPWf6",
  "key13": "3iX6SfS3M5SjM9Q14cLqx7YEP746QnCmffkWTjHxTdkYasbbxHm8wXVYFVUBR66VQLMU3PWzdTQT9R8k2MMRLx7e",
  "key14": "3n1ohsPgbaJsDcRnAtHp6JzKT5e8i7S5jmkWKzR3cW2cVD4ssdLGJB4vBuqpC4udrVKGWCGMQSsi6gv1xhSaawzG",
  "key15": "3Tr217eLohLLpDiGVExJaxJFK4hoNK79Qn4sZAncC8bccWWXiwxbD9BsC7wVeWdhnhi2j1QCVRgjrDWgFHKTQRRb",
  "key16": "4xwkNZrGQdjEgF6kT6StWh4hVrWDjM9cJW5Ry57Xw8jbJGVFidtpnfT4nZnDDvKwn6zGkdyNTeXP26ESYCb1vgeN",
  "key17": "5FQ85UG32a4z4HnqFEpQkReDiXbAwxFFhQvUqfLaKB86HqGk4et4XGqjvphcsXm7kp34xhTUiH5FTS9NXtLjx7xG",
  "key18": "5MERDSPPTmPUoZZ1mg61YPCMSVEfShK6DwTpg3BrRDBhZYDbPLFwL9kykTaQdXyrDxo7MtobLcPrskk1nSX5dUgV",
  "key19": "3t3E3Vs39ueaLG9kSCVtqpd4qRZTy4JFDvrZptpEH4gKXpwW8v6yBXVbxrHjsdryWjs7fuoshUwrLh12moLDhaPp",
  "key20": "2WB6hk7beGKXh75mKCd5HNpiSqji16CZ5VaFkvUgmuzG5soBbK6e36abnbbWpPWvEUVKGUqeZCKEK2aTwFsysvNG",
  "key21": "2fKNG9aS3hDXJRAPUqNddMmoL1R3ynQR9YRd6XhF89vq1mQb6cZ6MjJgsLxkbJ4ADMRUEwvcbHSJAVAfafgEKAzP",
  "key22": "3z9F8aJyGAFGiyVhzAJMHoveE3V5bo5rgZAchcvVb1h6c8TKX8Y5HE2XKBgkENLLVHXZwJueTyYNkQZyU6kXYgQc",
  "key23": "24ThGFADgANR8uNFqk7ZLHbDbEgDS32U1RrjUnxnsnzhfz52anNKUZpoDNZhm2o1gMFFE1zx9aLiTFGAnqnYEKbS",
  "key24": "5YU3eDFFS3dSwKWkfigEgJVTVVL2cq3pcpqjD4eF6UXRnVRcYoa1uBqWr5vxkVsmvPoZU59dBdC7aRgEQeYuNiT1",
  "key25": "MzfaspSF463MwFD7g2mSzF5Lw62Q6YpoMkavBy83rUnpjeughdmcoTNF2PCwtfEsyyceTvXcPYZ87WA7oK8GWWj",
  "key26": "4tmY4XNr9WxsqrdfDe5cZyVtXQiJR9XwEiMtgLPgTN9tGgoKKWAiCmmZVCbrGqwt2GFcfcaZz36L3qHfTb78esZk",
  "key27": "4FbaLf4vdX76Rbp1hsuEr23g19sxrbwty3WM5NJMk55dJuYS3BZAwYH1XHUEomhpEwAGRSnCySoU7KGW8MYsWS9J",
  "key28": "4zbojrutzr7N3H9hTSJQiHgaLonU2vN5orLXxmUX71JmF86jhV84jKMJjPZR3LQdThKUfNVtu8dfo79kAACVvFFN",
  "key29": "5pnSMryyCu46UUZdUaV2D7WErps6V1LwKhnW3ocakYPtznHTNHy1iMawzvCGbTgLXSxrM55ad7EMTeQ3vCCrqEd",
  "key30": "3AcsbA4kWasRQ99yJbZeXNdmGaMu5DM5YqNJMeG6EjFzxHyNb4zCNeXDsApZCfA9eEbo1iWjTJL7WFAAU6toi7Y6"
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
