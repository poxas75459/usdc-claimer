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
    "3gCjHG4Q5Z5mWSVqch5cHBx2fL5RoFAzFyZLM5vDe83sbvfnK4ZpH4voEqMKqPpiYGZssCR8XJ6cx8HJLGC9RRte"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pz28yRh5LomoPPiY7Y4myt7BsV2fx88jf7gXW7gUTKqYC3jHMCagmkDbqs7ouwUjoRjwfYPhCzmuiVtwfoFiycw",
  "key1": "43mHT7ik3rRqLpERm3fo1zmzwHCrvS1hDMKugNG4aqiWfZ8ykwpKWJEkvFfEwDYRua9sqeYMG1gFLMkEnwSQhnPk",
  "key2": "2N7jNUPK9fbtUe5KupFZ1MFw2hbUdJAEsMEnsgXNzwtrjgqGJTyHtmmpdz5jTDjXGKCNQxkiDxiMZzKwS6p36c3",
  "key3": "vuG9vbnuQMWQ2qnd34GYFgEACjGmbMDBjgjoyGvSQ9zYj9kBH657qFcxbFxUnJyXkTjcuc29CZQaGLQJnT5cL5q",
  "key4": "4G84mKg6qvDy9Q14VX8wS2QumPLAtLYhEkzw1M3fB6nsjVXWCg8T69sXmXrGgdu7WKEtUXkV5EBxLyqQCjSprrpU",
  "key5": "3oAdAm8ZK2pz71qB5oFabX2zRXrrrxHmSBWSxRAjwqK8tUPXA4JJyW334fWr1ToMKcE3gz4PELuCFPJZEtk98PCC",
  "key6": "3CtPx9NDfAuNBp4puEVuTWyYncfz96bJgNmU9GevzdFqfCj5hHtDwwTSRMRbV8H9YokNg7DtgvLf1jgH3XLmwU1h",
  "key7": "4RF14EJ7wf6ki4gE1k1yLAZimGq8RMGepq1Crq1uPds3WKEAYVbUkStq6MfbEeNeKybJxSah3UHe1qy67c6HuxLy",
  "key8": "5CbJjR4yJSFjeAcYSjb97ALVrjE6qq4u93LAQrPaW2ibcNE1cB823Zd6pscCUULX31DgTcK5as2bViabfiwKoanW",
  "key9": "4jXM6Abhsz2WDpR1PGcv7CW7wimtG8i2AYP4N73hD4sjFWQxZ1D1QK32pbCYew84WQRaw86mh3TtPGPH8PFgdvf7",
  "key10": "FSP3rXRxhyrgXxUujMifb17RT9HqR3k9h5sWnBtZwM34fJDaw4SmauNXTZ8Se72meQSag7iGsFXWbJNGWqURNLH",
  "key11": "3agyWmJdfXBa8KciDPEpNUdb8mQLzwea7Ew3trknSJinDhiPNfZ5YQdbBR3nWKYWb4RcjtSe3WkZabNgFndSMHxm",
  "key12": "5pc84RPXdRa1Mw3bDEmgwCr3HmaR4oKnuma1dvafgFe3b4sq9R15AtMUE6MY9NdVqmMFjRUTv1EMg4XRCuvdyT2s",
  "key13": "rfAGTduhM4hqnFAELc9y2jzzw1ntqrfTzrRFmYTJKVJTJrTSkEW37qpYZfWUDXkh2rVc242Ahv3G34vD7DxmrDt",
  "key14": "2eH1K1SLFz3wGXEwZ8dNu1ZWK5ZgwDqtUfZ8fCXch1k5L38dQPNdsp3qUDnSAVZEqCi5rUP2aBjCgSz81dZMYc8d",
  "key15": "A8muqN4a9ERwbfvZMqQJvTu9ewBdZb4NZc5w2km1UhEtGocrCZut2Ft2PsyvHdqQ2YrD9kukhHPXQh9Z7WT6tFj",
  "key16": "3sdA8QhMDv1YfGGkPv2Yf1MAf9nzRzdPTMZgzSLJqSZvfJ6tNcfVtP4AezgSCLqABnaMhe7BWKFeeQvX1AEznVno",
  "key17": "4qJ8EhvfFxwrZ3p393hJmk2rCScdvxJ2q1hgWXt4TXZgk1RmTDPG9C92otuDh2uQS4wg1EB5Y2C4fivDCF5ED8jL",
  "key18": "3C71mPfYLMp68UWTWTD3XxWAecDZdX3pQ337NLGD5azeW6Qsup9xVUDMpFgPvxABfA4yL7ApCAXxs47B8hfpdyky",
  "key19": "2qmJpVrLSCb4UdgAfvj2E3BeFsqGWqa3uDryYjSD927LzcWJpqWNiAqCTfE8DP4ztJJVKvCWY6xWMejGWcpZ6FzZ",
  "key20": "5G3jzrnEHUwdNt5AZ19Ss39K8VM76YVrZnRkoivQjzpQHgRvEkEvcpvz57xXzjoPHmekVk7KFDVxfoYVTZo2viCo",
  "key21": "2f73pPCLS4aJNtP8doqyD93hF4dZTFxo4mw9DKaLyNDMFaAfs5nHqanQLJcZPbxhqGFSqZGQsDzjYBoR3UdywFFh",
  "key22": "2NMcnpmHY9DPamGkXCb2VcPzxAwzt8Yb8kVH3tPgeHMXummpCcBpG8ijs7AfLRw6SJeRAVBGhKdMJtJPsGKfaKhh",
  "key23": "im7NuiSUapHwPk7pzST7yxPnN2WnWNC9sQw5ss83FwvnWSpXguEP11w8CPWPu3YLKgrDm7gMqbaFPm44kPbc1ww",
  "key24": "3BJt8We5Yr3zJmBxM2tmfcghNFPzuWs4BRNCh7dV8VigHHPVLmLV82mmFi59eTSsadM3DyqaXDeqv3pQoeNTBQVz",
  "key25": "XYjggPNXyrWd7BdiN1KSsk4FU1MnPo7nFRbo8YNFCbkqJxjuJL2AAZ8oSxmWwhA2YSDYeLV9mTzXGBCMU6vMD8i",
  "key26": "5VUSg5HvwhN9vtDoK6kc678aYUFsDfXAbsUNqDt1EQi7yeZUhBhBmcSNrHLmu39g2oaYUiMgiiaMFUo5wx8mN9bF",
  "key27": "3vfwc5Y4ncFbEewAk9LKbV4SofAwndeb2rmEh6NQVDARFvkJh9xVKU3VPBE6kiNrHwzCdbbQVPd5CNnvnu2h7dpJ",
  "key28": "2uSWKXnVdf9qj1SCKiw6jMbA5KxH89SfBA6aRHZD3B61ET1Zgv3WSUy9oWjMvKHxt3ihDMWh7io4Dp4ei5HP6Jwb",
  "key29": "5GbfygBdHwjDyhth45dADZyd7QamW6GuFj4TFE6fHWebh6zmfejVRmKeX8aFDB7T9j5qNhagarfUHQKd94pPbQYy",
  "key30": "BrbLN2HMhUUnodjcK4sQCA1M9awD2k7CDDHwaDvTBFEeHhpuQEmNX3CELNzRiDVM5NBteZKqbTnoDgn8Ffhc81i",
  "key31": "3iiY9mNb14KBypNTwGby62aTvCVV14rr8XDW7hHiYvD7epwMLCKz6BNecNEMyRZdCs9REG8cHepykRb8ELfcR5FW",
  "key32": "4rQiT4zWwdHqXzUMXefiLqLpy9e1ZZXoyhBg7Zh3DPs31ve7e9SC1hfmY3L4eq8SDKyNjV5pqdHmjxB8TqtsuqQB",
  "key33": "3aLMy79K96YqA2e5TrxEVKdVuaxbwUa7bdBCvP1FENcsfKPsXjbd9Ntbj6V7qkYdzTAGrkmn1Jus1XAtmKDL1Zr3",
  "key34": "KwCe8fq8QdVw9QMv3MTd1kspxnAXTEy1g5k3bjrSeYVNFiU85uaamLMLFA2dB2M8ZvfXuqjoSQWbWSj3XYUJr2H"
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
