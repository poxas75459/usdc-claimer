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
    "D8qoWBevfx5ZPowCtZvg44YX5XKvaQSMJwVVApXwP1uGytu2A5aMcoea9QsoRgeCV2oaLcSGnJYiHyemVdvBZVa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "548x44hcKMe41GWUBian7e966P64UqopegjP1pXLvrmq62sj6SuVuaTYaMYzXYmqp7uYFRJfpWXUQk3GGS5veJkh",
  "key1": "5Kb9i3a4fBndZF1y4KmXSYv4HB4t4vngeX7YD2oC5AfGHpgCoMrx56sNgUx4zdQb489SQ3uftDss3swYt5KgJb5Z",
  "key2": "3WEqZHxpNW9zhZVUf8Z9NmNszRHN8JJJKjeHoaer1hA3mXFVs9zFE2g542Bkemyu5hTpccKUP71qZ31MTQB8jerU",
  "key3": "d5UyvtFjvEdFcWbDAcHHCJjD9E4bZNDcZfxDt8y563VmBd3eEp3Pu1hhXWSUz6kGeoo3Y8F44nrjdpoqbM2gbPr",
  "key4": "46Zp7TzSNTWdKw34bX3bYJCdkMzSUDxzzmJpaDpMzBvBYKtUG5GCVva8uEkB1EYZvEwxAo1MvsPjYZBBAiSNHyBU",
  "key5": "XgqUPFNrDCtsJ3HACntTHC8btr81Ph8L8iDiakWahQeL94BLfw8WnsNrbuKjM7i4qYwc28PpeXGK3NpaGUqWb8Q",
  "key6": "2uWYvK5jXDwBRPtLTbHTr7UWD5Un7fqJcw1czcewjWsYRWY6M2ZgXqEvCj4aM9MjmqLMwpqgpPaM71wnBA8qsTc7",
  "key7": "59h46cgqzR2NN5M7PDvWKqsq5iYChpWqK8gN9UuNL3hfRAJjzTgcWLZmAA1gcQXk2HdaudC4pH3Nyv6RsJ2ewYV3",
  "key8": "2HjLyDksdnHBmvV2fdBp98MK1NEmHC1veQ1Y1bJYKyJ17bD1cCTmYdTaYRnabH1M6uvzgRR9BUidSDLvYz84Wxat",
  "key9": "4uD7K5AhwPL8KfCvbT7bmFq4f5kDp8jAkLQXo2ttWLGYRKME5t5Swh71PDKMSCQypFj89KsQFo7A4SXStsj481Tw",
  "key10": "op9ExLzUL8p8ojMMJ4CKURFjJX2TBcoTZCLgnBr1DiJ7XWWMdUmkuTjkxB9eviD1SaAQBMikFmiQA734oSj2S6i",
  "key11": "4QLa2qbrdQRKPtDqUDquJjQdfMC2AwU326AHrDnuUMhsp836DRtNCxuf77FYco1SoPhqBqjhmi6Qp5vXWdnq9DTz",
  "key12": "WB8Q3fTVDouTKEa1DMUpkG3F9J49HUKuX5qDykt8QdCXeuTj81KimfFxvGMUtTPQSivBfcAvbYpfJawfS3igeGn",
  "key13": "CiLUne3nfkUC5pE3QXBB59c75NzGgFeJ279j5gbaTcYUpcCLxpjQ1iaWfURepub6KtXN5SCyKXLTduuAFnVhzwi",
  "key14": "adPXxdq9EtkBp45wKCupwqEoqASZershZfRX46VRrAXB2XsBXRbrXurb29VJtT21ECNoU2t32yUAZjuBcGgkbCV",
  "key15": "3bmP9aHriYQ9fvb1jLxPyH7awp9KFYYckx3SBYkN1XtL4xULMyf7xCvHCW332gv3NAEoSycndNXm8dKT63Efm2J1",
  "key16": "ssZTsYvLPa8Qjio7hcYxJdsroDBHhqSmy2Pboce22YeVLL2D2m22G4JjQpZhkDDkoPTVrFLg9gHxhoBJufvy61i",
  "key17": "QtqDYfPxzYpi36Zg7LzX1CXPZ4dpLd9op6zBVnYeyFLXwKFWRSugzCAyFGRXEJ4wmSxNWcvFvPszK7k8thD1jn2",
  "key18": "M2HnFQwcZDjFECB1MjqwuwxebX6isQvHvFympCLWnFEe1uPqGGgqv5tyLG4UFHWnXkJWBAFthTCU2geUoUohEeV",
  "key19": "U4bZmQtjb2mpESBapw6zHjEdDWofFVkYYtLMgrRcFadAAMV9yaLA2YMs9ARc4WkpWYmKh2ppa4FkaupeYezfU7T",
  "key20": "zg2UfZGHN9s9s79L3BDFgspxaNzL2wkXo6q8TGe6cZ26oNUChq76ZRoKKjyq4MpXDQMPnsHxsqKTTTDF3zTMEPd",
  "key21": "3tiHAEojMVaquNTRMkR4htYfhD9FRY7sQz1whai915N4BouiZY2e1D3d3KmQHUHXsJLBBqSNqz27QRuhqoSbMjtr",
  "key22": "5Gnm97s59uAQ7VdQ15cHSC95jFUTU89x2DjHT1mx5VWr7cBgq4wNT5BYvdwi91ZMBvWFW57FU9KBhDJey7RUNqFM",
  "key23": "5tsApSpBuQkHmEK9pfaFftJqE7Q6fsSPRV9cAaRMwquq2TPkUGQz78R4dfpKjp8zdeagVeKJhtdgRF79Q8BDkiBo",
  "key24": "3dsLjQX9vWjPZ3qGew2t6w1cXk2Q8kCZuR2NFLmM1cRzFAaGbUekfeML3JjY9SLoRXSFNZFd73VgM6N9JigjnXGQ",
  "key25": "2tZNx4nxnDhj3kyQUaqrvGfuU7grWn8ozaqZuLYmioDsvr6Y3vWimpz7tdSVeKWY447QAx2GNS3P7NcB2cdNdgVb",
  "key26": "2wDPCpLiiNbjKTr4GVscWEv9TqjjB17AVydcHUYF1qQDacNBQEQym4daLTUGpN3T6iW4nyDLVF9WcKYgs2kEVtau",
  "key27": "2z7uLkBV1Vxb1X48mAbPJtTwX4iKCR3o6k8VG1sYio5tfgnPC4mUiQP9k2V7pJc3KB4eBGUN8tx2yFm7JPmRXN1M",
  "key28": "sc9512c27dBxn1DK56yx4GLDvtZNerVnpFnb8nWFxV7CgyR5GenE6VTnubni28Ja9uNTLVzMa91HFHT4acsbGKx",
  "key29": "2qit1ENU1BwKcdc3A61GRsvMPiKJcm3KN9ZNicPqhBsWNjpyokWuiigLZTe1tVz5EkttBvKDSGgMXQvXiEKnMeTa",
  "key30": "Y7pCxcy1bYQt9X31W3dHeonkbgJF8Aa8i4z2mjXC43dRRTCzV5hi6FvK4mZ6hbouFP7EC7hqkQJyKq5Sh8qVY2m",
  "key31": "qxDgp6hnJEtrup6KL9TGk1Z2E31ZXg5WNeHsN53EG1iWmEwe5b5ur2iQGbKByZg2bHPZ25oGLvA3J3yVH1Gx5V1"
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
