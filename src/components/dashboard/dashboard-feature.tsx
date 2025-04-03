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
    "3fHsM9L2QHxzQrUPNw5qfgNjTTCUMMSJgRNcuVch9DJJv3eKnhCmbCGLNFXgeJXJmz4Zbg1i8adjpUfG8kS7gKik"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ho5oj3oSEwKxkvWfxnpMbp3Zf6sC9xqDuKsurq24r26K1CmTYBE4CxP5fMxxpUZK3VAa2FpX2uptVBpDG9e34T4",
  "key1": "LwV3JeM5aLMqNZj9xCRXYsVizKmmvnXb5euaG8y9Q7YMmoCqcrL8otgqCnFqiv2GVBGe1GRxGzQ8ZSNhbj1tNY1",
  "key2": "3w8YGVKRfsMDKgPcGuVaK2aWKxguxrqUXsenU8dedRTaJE6GWU1h9yseMdkKQjMZmNxcUiYmzuy9s2iaDxfQmokG",
  "key3": "ta6D3b5UZSB2FjpM84rLtd3WHxpjHvoUmSk8mPAwb8r1Pq75uH5FTrJhKXuZX8mfpAM69bdm1V77yH5r6XTDJZE",
  "key4": "3e1xE9WZvdSDAHc4ANsijFcjeDco4kAJNPUEGemfHrNHeZjgCPPYg9cjc9M33i4VZqQYbBCme44J7yG2pSoxn8SV",
  "key5": "dpVp6nguX8RSfdd6B9ASEgCkDauQYzVs1u9RQsmKzwfvdDkRnxu4UgMukbKSGZ4p1HcZ9QqjaHi4XAVke1DU4M2",
  "key6": "5jTtcBjpmLfbr25keKWnYtLgjL5LtSDVxKvAZjwHY4c1NatY3A8AZYtDdvLaMYwpfSXBNG4Jq8yEUNQk3Gi6Boob",
  "key7": "35JD5wX2BkW7kBRDf2MYrgURGyZqu7ixqbSJBhDNQKaeX5xC9qBn1ZMfoBxoNMDswbYWw3VyDd5HKgNFL919kmbp",
  "key8": "3geXDsSZrgQmXM2QWRAGLy8pn3Y2AkqYHQEMrtfcEmjaxPFd9nCYH4xEuJsoNr26N16Yo1LaxWKwQ8FDbZ1gBYDt",
  "key9": "2HsQGvQR8HEeQ3WYFp3ktMJTKWykMGAitJKaL3nSNmYh6Hfm9SikU7L9TXHNhNfdNCHwHdAjTPMhzNsYazsM7YEQ",
  "key10": "3sozYtvWxEt1UD4NSSWVcCjhN7v4MFFicZnvi7icx74JheNWGFcqSQ4NbnrsJeTsjbFJvJ9wFhKnjH52iyCHHVu9",
  "key11": "9HAs9LsSJasi3SeF6XfBottWKRD4kYUSdfSXgmMBhdZEKg4iongfEmoXPNV8hA2GWu1bPbagQoZZidwTwGcoBDP",
  "key12": "5LUUyRYDjLYC44rqhqYrDHqM7J7Jfx6ME23GBBAujiHfQEcVf2HZijt93am3UDbDNGModJ8ppFWjcbS8SWrP2Nsd",
  "key13": "45NiP7RhqYnm5zetXYtLYsFtDJEsKYgjFBm8hCUnJFgTpNA8JzheqkFokpaGBjR1d3jXyZ1VTb2gBQ739Uhj9T5u",
  "key14": "5QYJ1meK9p3X7KuMVYRLVcqBHSP4sF13HXGjkSr5vNB1M4DmFdog5MgvKckTVxrCHhMUcZCAHgCL4zdMFPa7gV4U",
  "key15": "3c1Ffc9j2QZSryqitF5u8V1JMBg3Yj7hRgrnNKGrDooos1xmDxoxn5sYfHGLDfvNxHQ6Jmdo3NdB4fVGdDsdRNqc",
  "key16": "5Fwd89JRBhYB8LXPTTABonVhkTLfrmV27xJ5x9ri7kFxyaKrt5QwXB63XND2KJLJaSwgi3ia3JwLWPvofcKVvfxe",
  "key17": "nvBZxYz13nsL4veLEhtomVgKSFVXQpZvS45PdY4SFrEnP6WqAp5UYNvnK8pqpnv5ptvvpwvfuoD6KY7UYKRgfat",
  "key18": "3JnJYedMpYfAmypbAmvEMDVHe2WVMA4ysCv7E9CrcBDqmqFWyBhoSYEpAWXvNNRDMyjeuByDb6dZLGaR7rVwLWJa",
  "key19": "3tGsaVJrQ9PrxnkimKgkQvNbRzGY2UNKtyPrDCNz5yHeZLhLFpq2bnDogo5XaDv2BLchew4Gv9uFyYujvrQKNSYb",
  "key20": "47h6Pwv4XRE1ZruMNctR9sjjjxYfmF6hSKsCGy3GpSRt2ynccniRfhccAvBxB4WiP6a4LiKz8wKCz85hcAzyENXf",
  "key21": "2H4isfAwkCa4i5sHR5vuYNDntnN1dychU2Mk94JDGrPtzF9nipHatFpK8McCDZpeiY3w8sr7JxRnezrnnxiTpkCn",
  "key22": "5DbXDbUK8YWeJNf5RmeQkgYGCRPbDuprgokG3qTdqgDzP9uxBYknYvWcB62BW6zaKbniiyRPAj7bLJRmx1fr83zG",
  "key23": "52HtRMz8gt2R7erCoRiajtuK43QcAHMQDpWKFoZMbheidGks8DXU8fxPom58BHBz8f4HHp5yxyUigcnKsqowXrpZ",
  "key24": "3yycwQZrYsrKhwEezftYKn3bmtiBf4mhPdvu4gWDVB4txsBeXcRaj5mduZQM8akRvdSM7jxSrCEYCoujfh2MYwZx",
  "key25": "hRwp1SWvw4M6V6ZSoFLzWzRt4C5xkwcwin913owbVjZHccwjU1hEhLnZ1ndXj7ionubF1H5VenkTssUEhSrVtZV",
  "key26": "3QFKa47C8U6cKmEGQpvG4XZ3XxchpZioj3HrkPxq12UqHCD1vExLwmaH9QRVaLocuPCTBuL6EXhxpmyaau4ho9W8"
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
