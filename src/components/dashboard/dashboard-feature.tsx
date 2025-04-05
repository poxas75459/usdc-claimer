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
    "3PbrogFDMJHDMTdnRzRPF6qux38g94nqBcRaYtbC1SoFyNMxNy3y4J2y7GY3WVD1dZKzSgwbvd1GRY85P1UHw4vf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DPNLEf8WV4DR46QGDPw5h8tvbqjn8bwtBrYC14VbeeeMCgZWLWM44EksaD7a89EF5H9Fyu3BZcz38MXWmeaCbSn",
  "key1": "127jaCBFVAFT9yKM7YqRofcaJzZJAZ6eUBP9ZMHtkbjH6x1f5Fbemb6rZLmxdxTuHt6CfGwcHtPXjFrNKPKUmXTs",
  "key2": "33L2oyatzRhbDkuHnax29zWqeyZsKnea2xxCPohrpC5RCKG22er5HaizvDWbtNfTcrCG2D8Kcwjr28G3XHADGLuf",
  "key3": "nSHRPDdiCmji9YQP6ah7jAECoNkjLDUyHQfA6y2H1P85c82K5Wk4hApVApPyiwgPv2wQGxsMaTSaJ3XByTX1Stn",
  "key4": "X6UpCVtmsGCqCBaWWFBURRAVxX7HsiSYEuCmfyxTVZdHum6gPDNVuA59FUw1Zq1KYG8etvcpbg6bmSAiGG9dLRu",
  "key5": "2JYpqjMD6TFPpGK7UrGvjPH3MpR49xnK93tZ9H4BFyhMLMCUhsZygffwL4bNBeCAR565fqBtmcDF8ut8azMvTcpL",
  "key6": "WidvEMfQKqNqD3iJHNwLdLjDLmn39QZ8prSmYLPWmumLu2JGeaFgg4VN97XnXwJbwztYJE6GUNJsrRK2Z4XrNZr",
  "key7": "3ygku8aVuLRTHykLZnHpazRS1GuZ8i2CRWyfJej2Yreir6CCx7MBY9H8Lg5XbkgH7fid8kZ25oJEnzN8fS4DmfGy",
  "key8": "VrNwEzVaV33YJtRSzEsfvxT47iwvGQE2Mz98snxhDmNEJe5H8ezuxsoJsBDLT6Evq5rGkhcywEgjAfnYLUfEtBZ",
  "key9": "yq3WNhzGsNXuDDjkdFLtPKDmyrGsh9E3ZsUZFqqjbw2LQjQDDv3PjTgui6GJAMctWFDDjrrV6HfEnZPJjEP553a",
  "key10": "2QGCCXYu57s86EHSvVe2C9rTciinJyAezjG7rSgLE3ZB4FpwQ7WmKadYbEAgZ1vE859DrGdEujU9JxDFGyU6bbM7",
  "key11": "Kn3KZCki61xN2rxaAwZv4gDo1dPQApyx1DASTrNtdZQJGRLPtJB6NVveXeq4cmTtLbs6XPFJ2SPwLhLvr4Rd9sv",
  "key12": "QP4dw7ctncWSqTuTQCPWAvxZATjEwi6NseGwyZGfQPc3Kom1psgE7ETkHGJGBH9SbH6a18vr7TWrcoW11X4zV7F",
  "key13": "5K3385HGbiFQEXvbvptddvmqCg7TPZxVFokaMfuSznTe6PB2roJgmtj86EkCzJPnPxdBBCpTZm5jExD2SNGzGag3",
  "key14": "2WEpTrrECBYnhj7mgohctctFKo3aezSSsiJmN5EbsiV9XXB1Nb5B41Dm7kATXUaya3vW38S7ejoDaxbPUwGufvZs",
  "key15": "4k1jJrJPz6WkQbWMghJs9Lh6cghjrckQJoCyivjBC2zSaFGZKQntSvuEUjaqPXoo5FEJpiiU4Ux2FstZcctvLArj",
  "key16": "4ejbdu6VHPtzbg5U34v2KpyZTdBxCbyPFNpjRNFWaP3JH4mEqMJeu88EcRLh9XKRGJ92zT95GTeHK8sPVj1vopJU",
  "key17": "5mqVQ6HVg5fQn8EZue82DGYAYuqkvfukR4zxLeY8m4ogeGWLg8HDBWBmie9odgiRWjqBM66ZM3QWfxab7qbWd2fB",
  "key18": "3XGUPnCjTPg8VQyjaWRDEFrC5zABCbJJe4UP2ddwFdmEsJPag5ycYUQyyEzbzGsrFe6UJEAHauBi5St4QrqCr83q",
  "key19": "3evtMgbnXAiCrySGo4KtnCnJUXoVVB6d5ftaai8MBeDCsFNgQ1f6T8iuppwvuDDGNL7MRm62HVhhhbdqmonpNVt4",
  "key20": "5fHjY28Zs4k8YDbjEQfBFW6jrFsetZzvGgHQmev9uZ122FHza3ASikFYZYJbUVa6nBi917fbt6o1CUX4kvz4gJ99",
  "key21": "3WLq1i7MA4PK4a21PMifH4n3Df2fytf2uZaKiBA8cfmkw2KmcYQWwuA88pDkpgvBfrbHLCcYbUp4TfHb37BqfhdG",
  "key22": "2BxmtfYRU2tV93HQeSVBgzV2nDc6eHV48qHRfeEbNkTUFjxztNk6YskSRCtaUAdqee1qt8wLbEfuGRzgwYESUHVp",
  "key23": "3VDRRK6RiQom8g2WvTfqJpbv3dfxZQnn5RAbkiKsKG8H47Pm5ZDrFeLWPmz3DndHHQ369rox7U8HE4fDdxxRnEY6",
  "key24": "64K3CwghkpqvcdWUrz4VGteVb5u1iosG4ZZoaT2KiG15dkNj8VSw1jxnRatxowaKbqTayprSSrMv4ntKEDC1EPFp",
  "key25": "3cwRPHHZJAHhbtUCaUNCYxTh6xD4HQGUVNzCTV4DwtcruhNQEzq3NYgoLgvju3VbWMhEYUWjGRTmo5aaR37MntQm",
  "key26": "wRuajwznEgqBCxYDw2cFQBkowLeA1uC2asVBwuBsvYd77kpor5gXtXndR42jXK7eXA9yH8mMQnRAad9yT2XDgiJ",
  "key27": "5JJwHy3ePzD1P8azKTEUai4xmPP3hAtDcUTbiv3ubWxar373xkGoikU4mMiEuiSnF6FkUtCxFLd8XW8gGtTEM9Xe"
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
