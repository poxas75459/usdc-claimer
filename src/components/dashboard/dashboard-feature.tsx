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
    "48jGY6PS8yzfYKL6kfrJKtRWduqgWRgQ2dvdpVYmo8e5DAvFQPU3kvyGM8HgN4CMnvQYSmc9SvUu9PjWcMW6qddr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58NESbsLrBPLWWgMDqc4xcT91nyL1B79CN6KiFK4xfBcAFuQaXugMyBgn6jsZP1sZAXyicFhapfEfibAxgboY8rW",
  "key1": "5eiTErwqBbcDCKbzn5ebqP36YMXaPCgp3kJBo59FzinZgiYDA89KjJ2xaDcR4BoH951S82WfubL5FwpqjddtmQ4p",
  "key2": "4LSjeRPDtzaZq58NHxbMnQutr1hhRuLFPfuFrvhFFGvdnnCNPYE7YSReSGTRhLz7xw2YmLJnyvCSyCDkiv2pM8V7",
  "key3": "3o8qY4GkneAuP3UbHEKZr4iF8iyvbDBXgtwmr27MKoWLcxVzGQigf7sJe1USAS9XWrq4MGCjc5AfVrM3YUurdZ9G",
  "key4": "4Rnu4NVDkfEtqrNmFFzs7vun8WkDFBvXks7QfYTEXcGe6iEpLCSaZ5DzCyBZR9YvCAwX21HGnak3dj2zmZJPCK4n",
  "key5": "4dp5fm9qRmCqTXKcLwcJFTfY5PUF6UdvFap2U4S32eUPXqGGj1b57p2CipXK4r6PwK7fXXh7m2gRmpfipYMEZ1yM",
  "key6": "63P9Dq8QH8pK6VHWMdKJMitXmte7HXmqbPzdZrt4vYGFFnvGFYHqQVNqwPhRMEH8ie2Bif4sxZyr1VpFNkdjLhWp",
  "key7": "3cXyzgvoCvQrdeQjybvj8B9Xdn7sr6DvZ2Jcci4MadJDJfx4cXdaEnzgQXffuRR88sMN3Z34K5BRXxVBfEtdCgFu",
  "key8": "3FhAtVkFBp44YZPX7SKbdj8jYfAcLHytbJR8biBiSXyw3c8pmJ6ppe1NTPawVKb7K6nkhK6XtwZY9gxoUCg6Fjma",
  "key9": "2G5fnLWKcqvFPAh9Uwpvqs3s3kzDDEewAh9wzYyJmTw9RaTXQHsCjk2j2Az1N4Vf23pgDTrXTho6UGt3s752h1Bi",
  "key10": "5rj1kZN6NKYkYnqz8oG6JKKr2H8Ug9njduSp9CSXJEiLkAgWwq6wtJwjroPWLhirP764aawHCgFZvfFTh3LtrHpe",
  "key11": "325rpEfSojeteesS56sG5tDfbkMyEZmRbEka2o4VVKBBdgRma849qjMrnKKopVfB2YTDo89mPfVhGEaZE4Wn9Ad5",
  "key12": "5VmcSCa8fuAEWZ2PGdfv7XWp2tbQpxZK9naoYqMuPBANvJcu7orBysxyryzZnqCh3MaYGD5pTYRFGvdN14Vt8kPE",
  "key13": "5VvhSSmr1qrRgtJhqyfyg1bZVExmVscizz7JCLeYRF2z6DFrWmWrpBgUef59NsKsoQNTgg7djGB8yavqqXYXUpbc",
  "key14": "5HWEWNd88VfGCf9kyX98zB3mNRZHeYgW8adHVzxn2shfi8rNND3QMp7PM1HTy3iLUHS27exaX6JPY3EXMwWPZstV",
  "key15": "2L8aT48EWZNsjAgz95JQNcymJGJnBWhERVGpJt9CYMpoy3x1CYJQv9cJo59krPkjVBpRZtZUQSrZGMkUaASmQy6e",
  "key16": "5xezdRjKoSg4edJiogVeepvxZKbjxEh1jURWG8C8A1iKh7YUwne4NXAyJLfoG8ECFkoKsQkDCeNSN4XcMD7xxnM2",
  "key17": "5cB6w7YebpisQtd5JJCiF6y77QNx91Yc48RwjjaeeBqMRFBhVg8uBPahqbRAXPWnMjVP7GPAfPegFSTdNamkuVHB",
  "key18": "4a9J6wGxZekkQpE1Btvdx12RoDGjtc5fcYsMEhXABjU5pUZyUhHF79zoQjikXBNb5XYLgo1Qd9aEuHBddP6GvL5V",
  "key19": "3uVi9ntSf8Y3uaB3hXhMjRprZMZ69yFJAnD3x1WQta3XWPrUt2ae5wkBFKBiUXQsY3BVVYUwqZZWWkKRZ9h5R7yw",
  "key20": "2GbDMYUdVgvz6cLJohTeWDpvE4gUBgNA4cwHTS7pgRQHqmDwUfKm1niTLdugdJUufBFADQd8p4YE2FhpjGwC2fJk",
  "key21": "3drkNbiXhUMpytWhTGEqV1JrUuJ6FynoTpaT73CmxMWNzGJhn83jm67iX5XvyUPjva3DWuLcbsnUnJGt4W168nnw",
  "key22": "F48AAm7eDNBsgMbf4GgQBepXQKRDf9tYEromMsoGaoUKsi8H2RB5ygg5jj4Dor8wLX2tF1ETTW8ygsQN3rkt3TZ",
  "key23": "3NTKrbQc5yGEtJGnn6CATojbnW4kVNu6zneKvWbWs6EyXWNvk5Y3voBxfDMjHoN59G9v7N4vEBYjHnvCwFuaTpPX",
  "key24": "5GgxWTozowz4XkfehyWRbawFauEs9nUYHNNZ8StEgyVASCoh7hijY7LuCDX7bpfrFMvdcsAgJXmS5RnTnEiYBsdw",
  "key25": "3iuV4qNYstdyiZaArcZ7xP5KTnJTrN8PkHbgqu82rmBYcCWb51tso1WD6i5nEonJpLiza2EPea2h8R87dY1tbsD",
  "key26": "3q6CD4TPR7zVPysadq4mcgEWFmzV1oc1LU3hitgNBgfwRsiskUAXUT4qnQ2cE11d4536MzUTJsHhFcdd7SkPL1Sp",
  "key27": "3SXh34tS3Fr9qTUwWhC3VH5PDK9jjcsL5irUfcQwW2J4U2ZGqgksKkN8NkXLtzZt1DZaDt3s1XPymMy7Vu2cg1a",
  "key28": "2muGZWLJxBVCLGFtzTtiwxy4cYUaFFo9euiEbQJVU1NWvUrixhq3xNLPPaGT44DBk8zTN1P2R1ABkpBRPL5wm8rJ",
  "key29": "UQph7ea12PGi9WNV4hYaxmnYDCT7ozavzTxgwVnNT1tokQ4UbDWmTVrogGW27juH2Bspa8qJJxt6rWP5eC5pe81",
  "key30": "fQdPHtUUAq8AkUFG1L19Zzog87UFvsZLwUFMQdbZFoKogTqrmnZFrHE7gFhWVB2RLGRTwR4JnrWwAzihpYWA98Y",
  "key31": "3g7E68MUtZo4KEcofuJPjYRy6NyXYFArU66iaGHMuPcioNFJVWcWuG7kR7Cn3JDgB3E9yx4ywK9Krd91txt1xvus"
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
