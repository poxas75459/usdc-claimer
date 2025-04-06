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
    "4BnREDodsWcsQQJoshShmirPrEShPPmcxHcmkWtgwS3qgthdM6eXTehK8Kz34mr7S62iydEWDWQPYpbrKjNJZvAE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9KduBhrBLmTggn73HHmE2RU1tmCQESA1r7qJivq5ALkirRQySJx3EQvxH7QitCYJxVf7916z8ToUANgbTddzVvY",
  "key1": "5jY9CBvyEiJvEPUHN6GHPpbZ5jb3x1fBzhS6A1SEtA9h472KwkAoGzm8Zm7HPvA8qyjMcHETa2BPG9Qphqs5RkR8",
  "key2": "bNfTLwhgSutC9mFHyp3rPmucFwEDq4Jk2MQAELCPZFHNaDgSQPkuejzEDaGn5RqZ9RFBoLZbpVS69TtKA9bWKK3",
  "key3": "33bq723QdpgRW2hbuN3Gj8xf8xT2me4VHZcEufWn7wzmzecKKCH8wSCqMLZnbAbC5szCuh6BYYJv3Amhnio1MnCP",
  "key4": "3ksftEBBZQXHJWxUFFNV3oMYqE1eQecdd9xXNhVyZNLhjFMMtUnF1hjx9yuXF1izXXGikZjtFkBRdkiNazcmxJg8",
  "key5": "3LdoubkQDa9faUmtLT3qWpWA7ky8yQxup1ZggLXQJExyGk4vqUEkg7ox8YJXHwFRP2RVP37LnkLS3dSghSUSELt2",
  "key6": "2Uiih8qY7wfvnbTiHNVMKjAWVZeguZAac7n64thLkriS7kG5isQrXUZJATgfwFkT46NQ2kg3JFFgMzpFN6Mubm37",
  "key7": "3RC2HxHL8abbPHvDSC63LakRsijXRpmao6EmVJRv8idRD4RAqVcuHs2VrB5mmXr1oLHSXz4Yd3ZWzW8a7at8Yywz",
  "key8": "3utBvomsivU4h2wxXzXSToA5yYAiiT39aVVnF3yGE1E1xEvCdqvf3c7B8prxqjiKDTH7ZEW4GS1LKGFYm3KSsJRh",
  "key9": "2nLzT18QfESaDFkiNLYJon8YEeBqVZdShBNEmpcEibELzQkNB2CJsPEQWh2FnyENGqHa5NMp5W7faipHN7TUEAqp",
  "key10": "7N9UsBnffqkjmK2jNpqBkpkkDmiyevnauUjGpNoPPsLoV6A96Cs9JvmwabHKk1fSB6LqRMbyNbjprghu35CbZVh",
  "key11": "652AhoSBCG1o7XCKKSV8n8kVAYzW97XHuzCQCovLkdzcDmDFkQsaqAxnnKEprfifG34Tr6d9RfTd1aaeNZFbhcF6",
  "key12": "3riKVuTm6er1dYRfgkFpskm5Qigip6qaUo1kLLKXLTVsi4iBVLwKo5mkAvkFHB7yRYghDXpr5FjvXXt9A99m2DJ5",
  "key13": "2jJrBKyMLf9BEkMfKNPsnBxjvdJNxdJ66PXML9eL8ZLEKGtE1MM58jjADAWmwVPeC4VDxr1jaF5xzHmCZot7Znek",
  "key14": "4AV1a1fREBZ2jLRZR4DMMtFw8WA7KioRnfbjpbEKZFJ8VYcM2S5xBYzcVAtUKaor94g72isNnQcGTAWPntVUh38o",
  "key15": "2yHye7zWUXH2ZcPYmiHiqkTR4ts42wzEf4kdLCEhZDxtXYyxmv34SrnYCzG3HaP23NsiAeFoY4uE1o2Ccg1uMM94",
  "key16": "5zCEkzrRBhcsXniPgwfxD1cNQ3HzotVTZMvRezyjNBvdW3JtgL5u2hznwkjY6wRkruCekHK4aBN43AFckLcYhccE",
  "key17": "39PQPa7J36qjwxAi8BeLQMyDphaKyWxEw2PmbUn9cJaJzJnfGaBHxS6RbAQYBfCMWcPb2DsDEyyo3bcWbjLVMS6R",
  "key18": "md6gy4hXFa7FzVuHhTZNBrcD4AZzzXAqkaGq4gm1b1Y5f2phAx4L3y6vdpXKABytAw5bs3mB8xA1XsBZTTqMQYp",
  "key19": "fbmJXeHmy7ZPB8wEQ8cYkaysTAjRavJDHEnmJr7ybF3W2GHT3EnKqmi9WG96XrhGrqXuyypNQZvRaF6R8Wqauqk",
  "key20": "4QxmLFeUzR7XSQvaGV5U1k4a6uFMyFFsrfk6M2wq6e3Jga4T9sfGEpgQCETfyqhsQdRppvE2AP1bxC4ANZePRumb",
  "key21": "4qTgHHikvKSAd4U7yq83rksrk6qqxLjHVC2v5GVqhF2Tw1a7MeAwDkP6aV2H69eDgNwmjvQNbv3gFgw6w6iYUtgA",
  "key22": "4zDGUcmY6khJHFBztB8RdAmb3VDmiELATfs8QNbxuaZCaN1aimdmA9khaSwE7VDCCDbKsESoXw9Wm5Tr8VYJxuGP",
  "key23": "65teJptiHeTEYAqeaVAt6maGPWdmAftbEd53tU1dHgbF8sbhfwocTbF28vST1t7UctKi2HqWboS75KZ2GXNN8yA9",
  "key24": "5kaSQB75ENquQHHtvUvxQQ8daQHsP7K8P9Fh5smLkCWodAJj8xrcN27WxGq82s9vf8AueTt6vZBbh8JHk46zpN9U",
  "key25": "3SHVtcPcaHRv8XasYF31kCZeaXrdcgMGn12vmh6ejNQ38yPVWg9s4XUXpEKMekkymBf2FuCRNiqcU5GBSR6DR5Kc",
  "key26": "5vtC2QjBrhK9hgdkmxHyd8xypxUmoHNZm9gMNdmFuD9Eh1atajTKQ2uz8WEGwEQ6Kuy6N357mNwvmbdPQ6CKctti",
  "key27": "4YH5mEpxMdWfMuwEufuXB6Tj274SVdfRTxpUEMgMRFMAGRbPfxxJhWRDkkB1BHnE7R49bgY8QA3pZFMHNZswWz4J",
  "key28": "2rZusT4qDAgQdenRH1bQeHmvWL9UeFHsfyAaHZY96rVQMTCTLW5QBH9dxBcBpx6xeyF42yUZLgmJyJiP7uGjSiNW",
  "key29": "FFBkuV3Z9qWXd875DVfnM1iW7rciAesy7xkLd95CwMe1ECfDPsfUQVNMzZviVB8kpNzFcDvHBqBFgTudVgDuSr9",
  "key30": "3Hq5kZPzxYdiHnudfMf3mParrbDQrTQ36nsQ4K9imcHBgsKFf1LiM7E58dsing8sCeFkZoU1LbrRr2GyFrUnpYye",
  "key31": "318SwU5aUJq4cTLkbuiWZwfa4TLtMBF2ALZdVeN9Tmv2vkUjmV8CFRjDYiDESmKWeZv9esgi74bE4YDUHKsVfexo",
  "key32": "4eZtzud7TUctJaCEWwxNBXWXFYBFiFZwwqbQp7wanSKfg9LEeuDzU9fJSLax4TvYTgk9ezYXGiyGLNjrnhg1WbWR",
  "key33": "5yc4HEgL6fGseMvE9FpXPHTYfxaCefAxAUvAP4vpw95yHPNd3zRtLLZ7XF6dKebSe6hgbGBgK8nThBQqfzis4b8Q",
  "key34": "3sv6ae4Ei32wwoCRmEUM9T7cSmx1dBW7K3tL8nxuWbtS5jiwY9HLLnXSVtpny18QJYhwSpaU7oGHTqmG79F2F1Yu"
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
