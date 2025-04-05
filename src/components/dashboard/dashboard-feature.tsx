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
    "2HgA81RLvZcDWS6PrWJdUUiYvWFjLE8CZbgkjrzx2M8oqRzE3u9bnoBAMibdtS3et513dxuP4ChdbqsocpgTmmuq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42cHHnJb2oRtcLL5y5zgZpivWqTWZPkYd9JUg9jo9umcvuMyDspiCxEG2toA4wqrXnVqUrrjc8uxyD1RKMnQyjwf",
  "key1": "5EyRwftyZv6eZft45DAyiy4SKTCM3xoXJNJnkBJ8bZzAgGySgaBfeMssgXexCCXueYnz3wkU5QWT1yAoW1pjBCdB",
  "key2": "4abZ1NbFcpkwmxTmNBZKVkatNj78KsBgF8rTq42M3B5ya53ThpmQP1STyUPWQgcTufskVJKNfZyhHhx3oQAkq2z",
  "key3": "TcHXbjD5WUv5QJ2vjvA2TLV1BC7QEMruUG51ntLxu6nupyKbXRLLQphcb6xuDQSMD48SB9vbh6ZHGSMoAcJMD4a",
  "key4": "5V59wZfYTvMDtSJ45DLFFydtDRSjoJFz58dcrTcQJzjJdbFUJduWnNmPwhEeNUu5rm16rCNKXwFdp2qQ94Q96H8q",
  "key5": "65MV94pULJk9Nb3mXSQFtsmN6M8RUtxUeCB4tkxUFqaxXffehvfZsdUA2MGAcmCt3fzGuEUGA5eR5JeWx8Z3BMfD",
  "key6": "5CQAi1W57aZgNTqbm8mfTAVptcikM2m9wboLtwd8UMjmuoYKgY4nFxqPzcGoec7mC5n77R3AV8hgkZJcR2H2jqCe",
  "key7": "57wNy17DrrxsW6qP7M4nVPuCP4Yb2nsHSLCWJBdcaXgWe4euRJ5vjHxjKvKDKfCF88rBUWwYxc6YRjnLkmQ3a8EB",
  "key8": "52yYav3tuRUG32inWjoV1w4B5xVUVBU5YWcsPdYELMvDkBMvfJ7DsCyT9kDP4ckfBYqvaMr8EzDpn2UJQidW1tEW",
  "key9": "3PU1nyCeMrAVG4VLzmrVWaKzAbQPurzS8UHTAmgzgfDomUWHvSgT4Pt4TwHdVTgTREqLb8Yqit1VcDsgBDLVdhwN",
  "key10": "3xvaQ556HhjkUKNbfueGswH6QR4nkVYeYPAz7dtnFR6oF4wta4oAsPMk2uXTEXDRM1HDXHdiRs55UAsV3H9q9f2n",
  "key11": "4Wd5RTRrNqbk4fDqw7VwnHQVXcXMAYqWmD3maz9E31iKGeTLm6sYGQYrNaH7HKLbB15sujqLG4Rtq3jurRGgvEGQ",
  "key12": "Hp5E9L1hHcTWrztCcEjBpXu8SQ7kvXMuqGXNFDhrt8SrZqZokjFBBqz4UC6r2A5XoUZKMNorhbF8nrNJef6oNMJ",
  "key13": "zHtawvgJ7f1hmJA58x3AWD33cboUvfKDE5eQJQyrTyCv8umcyYr98D8hyY9uPVzhKknZ741sCedSLUmU9gUDpsY",
  "key14": "52f642D7LREx8WhLMZ5pH292KsCWqUhJhjSFYC7qVTifXjJ9axuoeKrWVUpKsmpBV4HQoRikCfpmZyGZb8EDGa99",
  "key15": "4BmMAm9z8QVErnoLsDM6ebwfKRNkwZAobnoA2fRPVihdEQgJbnDETGwU3ZMz92BDRTnFE7ShsjPs286mGPpn8LzD",
  "key16": "16HNAhkzKyfSyLhuahS8hnxBc8bxEN7hGyY6g8WT7PrzAdpPSqK3eWiedYk1zj6FmXZwzWXzofUm1nmsb3TTGjQ",
  "key17": "5BHeuBouN6bkjr3T6QJ2ibggRMhyioDn84wcohHQbcRPYYq1cg1wQmUtDZD8vn6D5qhqXUBorUB1DL6d3EqyHKmC",
  "key18": "2wW3tHKFPXKXXVMvPEWhhAjBsA3gfGNXbb4XsRwmYARH5eP2WKuRR2Z4i26RjQQNGN4wPwqagB5WeJ1JfgYdmeRM",
  "key19": "276YrmucZye8FxjyWHzVCkANPuL1onqvNAcvYJQTpnXgeBH4VsvSvL8bTFZfkKbjxxDVZ3MfgXo9jmhSWxdkxxZ4",
  "key20": "4NFhmSkLdXLNx8JP61TJcwrdPPSPFbS7adCexMbWWMYyaJycX6fTkbDfvoBrGJguWmXyNEwott3ny4kNyvM6t7cJ",
  "key21": "3Sqfe3dXafqTC9VX11mjfwfaZtoJTVAWoYYHvfzfAdsw591n8XtbK5qZ68czgm5yb6fSvYF7zyvbfVAA3pmHEfAw",
  "key22": "2DmPCHg6zoqMhpVtBi2ciss3sCn2FA1n7TCjw3624uzqsB9LtGrvrXmLAsefvMQxJhBkyZn5dPgcpPYQqdUmPoWT",
  "key23": "46yFfv9BHpQXiRgbhiy4NPMDxEyaS2HzeACvYFrrxgiNkGxfhY8Y9zF2JTRu6gYKs4UP7UBLhj5XyB1j5iyLQLaA",
  "key24": "D3TCN1jw39EGXX5C88zA7kf7NGD8GVsfvtSBSiVqyZesTQpQqj3wWbT2WC5ucRi8f5AJjKzi9n2Q7vhzXU7BPpD",
  "key25": "5y4XJVxqEATQ1oF184j7pvoALJHH8dvkox6NN63R8GhnvQ6rgnLhHxGSeHTvkrwhD3WMbS9h4FZno2Q5LQKCcnXs",
  "key26": "5GjhVe1TatwAsToPqQLavaH93uCGbgEXefLz4R2CTHvqGckB56ooYLngZh34v3vMnw3CMC9FPecrsmmRcuxj3ho2",
  "key27": "AYivP75cfvnm4Y6pGHMQKDgLB4CihARe1htd6LCiq3YwqpH8Fi85wDZxHYwgNNh7muZWoiSaNR5bPxGb6hTd3oa",
  "key28": "46cP37cpSD4yVtqg79RVzGqDR6diSLHtEKP1FtoUdmL83tAdgvemzh8BDa8gvA2q1xG2v8CR5X66g9uqkj9JqMg9",
  "key29": "54cUWyUkTyCiL3nrbFEtKqiqLiR4dkyeTj8KPpSAneK2Zqi3f8cKE3EG3cEje2rxCAgra4JnWN8oYkM4wkbd9hkj",
  "key30": "3b6h4ZRBn1gGy1CT7e8F2xUP593gFdpVeB48FCVS6U2wxW6L4KhDC4HXMzQTSssR9dGnndHGCDyoRPSi2HkfEVrT"
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
