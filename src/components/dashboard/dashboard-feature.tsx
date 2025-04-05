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
    "28Yw5HCWgM9LKZP37kirwUNi9fo858Nxox8HAFqakJpG7aHzmU7RWmMG9S43QxES43E7fPgCEzGE5VeSwY4PEHno"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3anQecu4n4fcQXupScJbcMLxWWSHun1H1WcktMGVRZrQX6qhQpZf6J2VwmS8csAgRy8gAw9F8SKjpeHbsConbfoq",
  "key1": "4jHUtfSLnbdHHHTotFo7jHmboZDf2pzQrZ7hC9kLwWz6p8wpUkNBRr1EYBKbY4dxgrPareavq26k8NWbY4RRADRs",
  "key2": "mEaiTHprdGSwf3TFu4YnLCXUZ6pfEv5dZAicXeSrmXZnnm1WdCbDk1yFW5YgeMxEwXoyP6bUthfrC4gZVjLzQrM",
  "key3": "2dMXMRw5otoG9HgCVH95n8JjWvqrJ2zxDVcs4TKKTKPST41W5iw846Kfnckt5jL9xfFfy7ZzTjcX7JWgB7VcmE6M",
  "key4": "5j4JTS6cdvWMVr2YRkJ3ghHueggtvGJ5tAsfGeeEwHcJQ3LUGyub3ceL3Mt85FznYQZkQNjT77h74WBD8rmWbm6E",
  "key5": "5SPSCZxiu97RUeEmB1tBKj586gCk2i9Xn5cDenPduVSmGTdpH2EHNydX7HL8BASPQhbDsin9BgKFqhC3FfZtUmw2",
  "key6": "4jzmkbSg72oSL7zSvjkBeFXy8Ua3yUiFp78ZX32LCjffFbahK26aefrj163ahujtJ8vPaP27t3rwNrC1sfpks9Kf",
  "key7": "5sEPUjCCBD1wVTfPPyGUk6zDTznZyjDd6zkRR4suMwQGq5DJ1JqfjKAZGVShRYnUPq2NRZT4MdzkrKYw7jbJPnKE",
  "key8": "mXLneAGB9aMu9x99z92bkwcMb4FLeZAMtHpkgJGTxPgLFY99jPFrXY95s8dapYTPWTL8SXbWonJwRimB3GvFwLH",
  "key9": "3CcZg2E5kY2uKeFWFZi8suDZaYsinwL2t943AFW4KcidLNjdB8P5R9Dmf8RfggU5rex4B6myoAbEyjR23cnm8NXu",
  "key10": "5EwzBSHgV8z2gZaSLnphcej1bSKTYhFoTfwWuazvdvEZuwGeh6C1KceXNLqDx84ChL3Qjtfey2ExcNyErGN7rQs",
  "key11": "GiBpQmdZT6c6RuBiQvVjtoWHxVXMkXXiNi7FJVH1fJ9paiALXQB581GLDXTCuK5HAQd58cVA2aQFopDGQ277PSG",
  "key12": "4xNbwXKEfjfAx9HAXsG8bTfd2p3DMFn9rhECXG1MdiZq9HfUJZqktXx4fVaFpw6pE9TPxacagj7n5pTf18diuE3J",
  "key13": "3sLjkgivh8uewz5kFLPGM39LzQaNrj9UWoFgFDsJjqs6ptXJPiywDdtKe3A7fmZ5K6ZNPPx2d7Wtf1PPfBnZA1Hc",
  "key14": "5eo9KLpUYz18RnPQ1BZTyo5njaNLS6uf5ubBJbCfnFGkJy4nsSmmsMeNSYsp8a4RPNwk5vMKQg9oy4xVPYWzjxQr",
  "key15": "5WVnXTB4Xj9GrC87QNfkp78jWTjYb96znUDXJWfyQRPPMqUX1siCj5Ebt59GkiUSnALM3se3EQmMiRHApyMXTAdY",
  "key16": "4znMbFfncfsPo3dov644KAzjVoi27P35QphyTaJQ2PbpwggmTpEy8QUhyJLt2aoitsmgnoAWkoGbHTfA3EyvB9d8",
  "key17": "3xjHGGVkzpG145ZmASCDieeL3h5qfFibqvDLTcfG8Da9hrig5nLf8oCFUtYDqW77Jcwp2ogduyUF6dkBSMCxHu9a",
  "key18": "5HWJKLNp8QMqDs3zVVTTyBS9zjL4bkeSDm5HrNCUNHcm3kw2xw5NaNUCqDQhXDdTUPLkK4BZpGJretBPbgSN7m16",
  "key19": "5SDCDPSRH6gE9oPn5SBWmL64L5HAkBZuvmYZWbqSwAg28RUk4Vr8L515K87QBYjJnQSi51XsA9R6rF1tbqwYMuuQ",
  "key20": "3cgLkNrzr1i2rHAJMeDw5dEPfW3zBmCD4Hon9WKob4HwaUPtxneH22iuPchdJADCZ9rezsA4s9cgi5vgLCSDH1QB",
  "key21": "3qKMWa4ovzojW4cScrr5mJpYdduuvDim8jD3MPeeV6sHf8fU1TXH97kwmve5YwHjrHZ8FppTeGzLvrdyK8RDW5NF",
  "key22": "4uhAxYEETwKb6PuQd7PUWufLmKS1FqxeBk9c1KgnWkGc3bnbrkqQQZi51mRQduzQS4fB8zSaPMP4eGB2MMUGyW8b",
  "key23": "26JW8dtCCkHYxqx6EVh6o8SvD6LFRKdKjn7QmGrYtsEjUCd9BV6mQPJbLjzU77gZ6mSiGRT72KGF1vgn9onpVHtG",
  "key24": "3D8aw6eLKmdtZdimo1mt1ry1516GzGdc4qpCYeHULzgcZiAyqemk9ugh9JBYbnNY9ZYmDHXnpXMx6T45kRQRtjnt"
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
