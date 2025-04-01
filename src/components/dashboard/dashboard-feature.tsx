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
    "2VMkCB9fH4fz1Qo9WrzrWe2SPi2dxFHFiWaWcK1x6tbSn3f3Aw66o1XpAU7qcCAkWMSyjGun4jRsVHWyefruGikp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qbW1NRwEMtS8UEX8zELQNvt9GsppgN2FiRUUaJFeTLomnfm7qyoZ6h7cJaYoB9QTZTr72nCveSkg1mkgKa2v76A",
  "key1": "2zMZP455Y3k6biYvGQoW5mrnkyaeWWzTubAxncWC7b6iHW2yiGS8SQsH1v2y3wXtLBetifvWscuJLmx4HL7RR7S",
  "key2": "66qf1w4T2tnHJLu9jpWTCrESKsSpxf1kyaqbUBjkcDVn7EZXPAtCSi5wGGfQHSue25jcNL8pwCMmwJa3VnD2HdER",
  "key3": "5ctB5R33bGyvkbwcXALfH6kNcBHVCBpKpsEpfu3NGSFwjPxmADJmdwdJBikATHiNkWFrJRKDs3NwMVWeshyfWLH9",
  "key4": "22ZHDH7YTcvBHkMwDaKvVwK4iEfe2XRXopgzEALygvp5wP69shRqMbup7eAeZ8iYQ4GGfqbTs6YNSp6nPjz8erzv",
  "key5": "2ySC17vHywHXnyuBEhPPEXe7aLZmYxWnrHDD6FxfDtj43qR6Qi9fjFic3P5oVNKZoWDmEDXsFPnAs9nX3s5uBqkJ",
  "key6": "4QXzuvuRBdJALHAK49c1zVFQ7yPJZ6QMbzrkMCKtTSGqMP3VZTDE74YbKxBM1etbcKJoLhDPVGFtf7W1zeS1YS3A",
  "key7": "t7skVqSXaJ2UsYhZWPACYhoTMq1NZsekDQYzWEEZf85uSB3M1dcVgVg9bGn2gyn4w7pe6isj63xCq96FnBxn1gT",
  "key8": "aupxzzTGz5GdyaRZnaRbGcBXSQdrmmKaZix5DxPsXUooAU53VUjiqQv5gfZTyCm4VKehspvtB5AXbu1fxmGrwfA",
  "key9": "2BCcBKxnHLE9jL5ApkBpNiGDXZDNDjNKK2SB16gh9mfcXLTqzPjHsDz4R2WVWXGy5TNEnNztp6EewLAFW1LWjETq",
  "key10": "3Mc4UyxP1oKKFFmsaPvxqbuKyEwPLYfNq5dYssBmm22QWzqjcuR1oSo8rNhFBHsK6dHd6NdDXTqYfDrSM2Eno2fd",
  "key11": "pkw7V8UdCwoCyFh8HES24W7siqXstcL2VMpXi9Uoq1NiJN2iusDzTEs94TybZKzxiA1w3hXQwofFKpjTN5T1xYv",
  "key12": "4R8BDEDaerbcrnWVF3HkWv4Pi7LVFu7buZ5WZj2CqKmkMaAGemU95hrawk14QZeZ41gRCTn1zzKD5RVMLehnjHu5",
  "key13": "2nyfjygbHZsQYPiDecGg3ZC99hEtAXFcgMp7SXQuZcAPYjhX9Z8i1ioksDNFTqrGfL7XnUnw7nvygQRqY2MKrYeH",
  "key14": "5anyhfZoVmERPcJVkdPjAn4BaTEHUwXg9GuB1go396PAgnjzg5R11XVMq9LuLJPeT93bz6wNrGWtDxnBMhD1JwL6",
  "key15": "4TxquXeuxW73CNSZjic8r84mxtjd23NNxFVv19zzxDgNNi2LNgYKKWq6EcTqmfk6TaABMajq8kjBsLm8gTegYXp6",
  "key16": "ApFN7bRLpB6qMVvY1DUu5PgMNmnjYAvMTCNeqC8FnLgsW3hcSqp5fcqD7fzZtSt96zGLPSfqjojGVSntrWv4M6W",
  "key17": "BXrD4YJubu5vxMPp9WxnvVMvSgtczo65kECiAAEfM6c9P2bPznzXDd7S54rAKRe3MxFN5sFCStucxRLnetq7vDJ",
  "key18": "5ruxTe7ywNrepM6SCKGyrn52N9LV1aB9BsmukpxCEFJRfz98ZKf4HZSYZ1gqq1HPxc3KWgYUzBcRgam6BA1enxEL",
  "key19": "4YJmQnGWryAsEvFarH5qbPBGwhm9LHRUZ4SyfEoscDj1KT8Bh5CTLZKrFVpjGi9NdY79zQWhD7PPcN3FVMeTok6W",
  "key20": "5H8M3ccmDbtjJqKuSCcx4x3rG72uUQepeMouMkUpAyUfW2ozoKBwgVLd359zXhuNvtxYJfeZmDHtwj1ujeMb4LEu",
  "key21": "5cSVuASk5JJXRBPSsG6Q8T58HRAPczQMYnDYQYko5x61uLFkBMtGHTYPL1e5qNrs2U6dhwJdh1C7WoyZ9bE6H5Rs",
  "key22": "56Uj2VZajnPcmoVfimpPfxZZfQo9a898ztKRwUJr5LaPFpo4W12vnYF7u1e6FjeHpHPnm9Z78JNWD1Ps31QhWB4Q",
  "key23": "2JFQ2UL7VURAscyGgxHytBavHFJne2ZUM7YPeGNzs5Jsk3tpJbATtKdcCPSvJdVyTWi9MaubodULTMRMEtRVXaek",
  "key24": "4WgBR2KiJF7jNCf3xdi4tdS4ans4NAPbquGbsqFFk6xipg2Ufw9R9iGmkuEzr2E8GCEzBkHFvR1fcubH9iezafMZ",
  "key25": "BvpKT1RzQmcmrajin8n9xV7hzQUSQi32RwkzAqcPZkCYT5EyTSLUU1V4ddyDwy3h8rdguoSdhDGjKQBfKX3MCC4",
  "key26": "4YZt1mrFPSGsrsQtGRE61WWexQvGoYRzCBiBX5ALE4s59eesFKLnxWo7j75CPVQPrNNa5Ht695j2XSzo9LB8ERDm",
  "key27": "4ShoTgrvPAoQ8BTaQ7w1h5wFqK9KCsDUQkyFfB7Ub5Vx83mc4EUsUqnZMBQvYCdpGXudDfzGD95rR7ZPj8xRAH7V"
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
