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
    "34qrW1dSkMwWamBr1PnaJiESCkby1QZMqmPKy2iiuQ2jxfSCtHPtBnSnEBsDddyPyM8yt8ujUtu74zxp74pe8KN5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fFUXqTNyTo36kVXqP84jFtbN2zDPgeE3tWfcf2HNwRE9RYhSHgeNeBX2fz929swSB2M3TBrRwtRrfvazV3LCv9w",
  "key1": "UEuvqCBsvbMBXvR9PTgFJk3qNqe9MVYFAjTJAEn14noDP3jJzgCNuj18SnWjJQFnV4CRv1Lai1GNYW5vnKXajxj",
  "key2": "2Jw2rvPUy483qWqaBK6a8Wsiur2d5v66Zhm7Vo5xuaquTXB943ZVmqFnT7ztRNRQeRhcuWqQX6wZQi1KpJQLPTtV",
  "key3": "4QKkcF3RjHyesyD2jKThZxXFvMF6DhrHR2HUHZg6w39XtcPNNG2vgFnWscBCMPZJqh4PEnGmgNY1GBLusMQ7d57o",
  "key4": "5KcaCzYCYzARbzfcn7X1JHzbxfzsu9jydRj5in6SW2DKrNM4W8rCwU7ySMw4XEtyFzVjUJQvYn27exbKD9tQvtDC",
  "key5": "3jAoh9JxiP5vQNndBmJbtYFmfWDiC61pvEKJqRgRVxiDyQLpvMG78UPLeWH73DbBLePRkdAu3BHeEYsjmUCGLVoJ",
  "key6": "56tYZmQKnt2gPmW7v2oPMY84fGiiUQk9f9Eoa2rbGPe9Zc7yo6aYtcgmMMVMMg7QxtRQJUmMv8z6kd78eufcLhqu",
  "key7": "61CnmHEj95GrNfZxbxVQuFnmCazJYZuCBw3emfrhvXa9ECTYbjDa4RSAgmHducobThHi3qdWMRzP4wctc8QDBE4Z",
  "key8": "3BtUYfcyqfW4vsiZjDJTEgzi8uLRghnscVAuup8gsTVQvxAdcMii9nzKbwJL4QadEK4rGqNC4DvSMTUt4NikrRvV",
  "key9": "24kAjyMGB6nKGGGWeCjAUBA7D7Mj35a9kHceUbuG42kyU3KiRJ5NqN66ddjL9SUq6Rn1PDyddQqR9EARpsn7kaWa",
  "key10": "2xih8Vyd5ZizPQZBnKer4X9a97DqXbrKCa7A6cX1dhVKjjzaEPKdJHMnPwBrdCMEGqVkdtW5gTcshSX6oyGo8Q6W",
  "key11": "4rsoSzkTyBpZhzYNXmZGaBykcpzPmyYF5XzkR4p5pEg1Z1Hmd4Smm8cnzM5tQaxjURrQaAAN4B24WeFTdxC32t6D",
  "key12": "5HYJ8NYykeaC94XPXWmYn7K3eCeex9HoADuWSABnmLq2DLAVwPwA4XyTkR72SRkmRRmPDxjaP5xVo4NHZqPYYnBt",
  "key13": "43osXASVezmMmD7v5yKk6svVmTituEK2Znqo8bFsr3bwHdnxjsbyiXHCnteVpXVbTnt4V1aKgY2LgyYhzYtB4BLS",
  "key14": "5UqHVYXYfbRGcaCmrgirdvtPtLyeTKp3PqX931iSDn1vrUhB42HPhJpkd3tWdMgwoBtS3jcEFM1bqLeDD1X6hsVZ",
  "key15": "5vT7zJAwKwbWPWTxfgDh2eq5tYR5bXAdPtcFpJPH6kVDrHPBh3nymPq96y4SVunM71voAbs6DtCva5n2Q9J6Ta9j",
  "key16": "52Rx2oLc5NvmY5VoXTN1pHgDfYruFsx6x5dnSxazhX7HCWfMN3foPwDT5LYUcbvKGzJdB7xdRSG4461sRgFVg6x1",
  "key17": "MSVtrbkHXtvSrpMYngEpxCW33eQmUqReNCCXpx2S3FWvL2p5cH8pv3PiB6QRgaKmPXihae2SjtVNdfWQqfAygqH",
  "key18": "2QonyRnHhdkHMKeT93t5iMYUmG2fFqmwPhtsyeb8fDxuoYpePyrJHU4A83sSZjB7Lwx7nteXesmnanHwHUqsAGRr",
  "key19": "4idbH5yXbz8ZFPh58b9xNxEKoiAe5wVUPatvZvSkGs6iC9UVfj43H97ffA9cjQSzd1HaxMhNCwzzMnBnXZ247wwR",
  "key20": "UvYDxMTGQ4AixAKg9ftdUx6JdAY6HZNf1rEZXaUJY2wAn7UkiCJWjMVTp6BPnxUs769uCu7n1iY21fUt4zxLreZ",
  "key21": "5d5BQAox7thTiqSxQ8wLiR2eXgnFingFMpY2wkyi9W3EWiwhbFcRpB9teoJZdgehniZhvkU4LWY682ksvuggHRY1",
  "key22": "4449oo7QBfdj8tQzC1s2pMao5gsKVNnZJzLUbXQHDWBZX6fBfaxQFVis5dJFoch81vrwPTLzdXywiACh1A5wEHNV",
  "key23": "2BZLrVW99E2JyxQrZPC7BE9vCm71ensBMndUg4jmvWSPdZ5dotksooyckiPAMfoNVd9qhBF1gC6FsroN29eEGz8g",
  "key24": "5NgVZfFJMo4Tfd3JRYc2vM1Z7175ibtfAP5n6snmWDFmuvLyB9Axku2nvWCKaawDSCsFbSXmkDfwaxzFTM5aY9u9"
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
