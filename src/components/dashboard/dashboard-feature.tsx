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
    "3Fco48wpt5B5LKBWt9pam41mRfjwN4NWUhQYJJJjwF17M6gb2Ujc7eSixM3wdsd22EdU3FzBHMxAu2w7oiBBoZW1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32MFqvV3bXYEsaknp2jvEh5BV5cpwh1fpyNbR6zM6dVZbX8RvCCdaGb25S8mnBLJrgFAMnKxV2N9AuGfy2s3XMu9",
  "key1": "3stc4HnimCc9NeLeVDpCwVD4kifxADf521iXKtJor7rPwKji8q6Y6RPuykEKqbURckgQMxhLh2fYbeuEnGSzgYmc",
  "key2": "3wFCZViCVa3o6r5dfJa4dBbvcGWm5886vh3N2k9EeXGgQSXTG3z8PP9uQmWDZcH4U18eHTZhfYDtLe8tmjPi2kpu",
  "key3": "2h5oTvh1afNVyr9dFVyFBzDg1kBRY9sBkWSHE8bwPvHuK5aSmH2oMqA9zaQeimr9JWGue1mSBWLRyG38TWAi2DWf",
  "key4": "5QTeNdhokLxjcV46gHgXENaU8bs6XuJH2oZtMdMAwWKCQkTF26UmMqFWDD1dBFxu2WgT8afFGfKBHVck6uQnejE8",
  "key5": "2StSeKQN27bCUhV8pihwKmyZo97xAHzFB5aSezQssY2BZop8WqUwGGcQwjuknodcjw5TULp1rFRssNmKUMaqUHpV",
  "key6": "67U6rUFcEXGPKZTT7byeYt6nJKTToapoQFLu2YkB8vhKuX5X6Qsm14XPZnb8DsNKpvNZL2Ydr37DhgfR9xGqMPkN",
  "key7": "2JCdHksLowf7mqaFRS6t9dWoZWrL1yyBeXZ7PtGetujaer1n1hbD9QFiPXZDh2s3jMzVYQVS81VigWPSdKAsmiGF",
  "key8": "3PXRMBZ8QobXCTteSSPCiJrRwwagLcd7aw5w5QHmGE2vVPeDutp9qo6hRFyu45cYgHkZ2t5rWbtS64iJ2G1gRx8g",
  "key9": "4xhF5ikUSzRKXcAu1yaC643iWXxdBcxH3vsjQFE3g4UbcGLL4oTJwcJFpjUVxkcudPYq6j52vng4UcqkrRwUnfZ",
  "key10": "DU7UHR5vTeJ8vA7VaEv6pAMbLdNyYcWDHthuManxfXYq6BMaFERaiQmF8G9oPZhUajBRyKcLeCnywsjAKta2QtM",
  "key11": "2exkbFeEGR4q2zqs4yuidGQrdLX8xaJN2WRXyzM3gJp6menwL6R9apYQ251tnnWtHfTdp42QeQydPMgGj8rTNrN5",
  "key12": "3KUmTfVbNp48k245mFA77Lw9J4gtkr9gjFbce46JAFJVsVjoy2kWawgUwn4UKvgvSRga4Jv6uWpntkktYE3f28FB",
  "key13": "3gn5XwkHU38DRCXRapmQsMhsCHWaACtC7BPrUuq9wdb15zjFLg1kMy7xjGDiU7RE2mBVWoksvFyrhHeYP1gWKCg1",
  "key14": "2ui5WzYa1zeY4n3PqfKFqcWbHymNLinwbaedemPMTydSocKoSqNYekm5TJcXu6dLRrVFLctGo7oZxT34MPiE8wmE",
  "key15": "Zs9Ryo3Jk7RpV8n3NfCurZH9wg5asT7nk7o3vUmoNTnBnV4DKPFwnwa8uZUo8Jk4iNXpJ7Ni624X3g1HjKXC4LZ",
  "key16": "5pi7LZ2vn6LBZBnVANpmL3ssYPQVzN7pnrQ4w19M53ePPYwWdBPZj83iE4vj3KZCxHTozTrauLG3uFKGV6W3r9Pt",
  "key17": "4DEp1P9jB8BjMNi4yuqNnVLA6S8C8aZ76ghXamVQsP7s8DQiSmSSGfwNkFYRjMe91QnRX6KGbnUfcihT16As2Kn2",
  "key18": "3jQvkdjnzz9qFG47aDtX5ggynSGoVXZ7fjSkSsXXkbTR5Qx41kZ2A86XXimL9TPqowDBhv8dakfNrX1qi3LiYW8q",
  "key19": "26Tn9sbSSyurAcdBWdnEzEBbaNtxN6vrvCGY9Fp8drFqSHeTaUk3L6FSBTQNdW4sTaQgU4vnrCnYXJUYZzE616E3",
  "key20": "3SG3ps1dcuMr4Y934Khf8RMC78xpMJfHxnTtaYvicYkj8HsWd5XfWz3LWAuGJLjuFd5DrT5FU5E3NS9EdFDCfTqv",
  "key21": "VKvDJTkG5LYh7jRfG3RE9SpQNTVLE1d4kMqW7jwu3ciBaD6EtCXmAT2nM3XsnAabLG5QE54QtZhWiF6t59KWr2J",
  "key22": "2JzRagP5JNEgkrxdeZYTnyqiM8idY5JzpnaM7GDvWfRgEHWva2Pg71LDTg9p9Th4habppb1hcfmjjNph3V5Hg3DV",
  "key23": "34XMX5gsw6WmnkhVGB5ZrDocfCdku7UiTCcehFcSZqp37mWUkWHrriVmrVhrWup7HJZwJktVjxjme3VbGSbt7mXb",
  "key24": "57HrW66JjaqbTBEqAwuDuyL4pQ7p5C8ZomqEdKxeaPUnUAXnNfS6iJvRgELMKyrcoA9aW1zYfxhGxtB9MjEESEdL",
  "key25": "FbXsGET9SvZBrKzBgdXEmZuExFzjmJaQ1R8AkiWnjnVuo9qNWPmVMwG9XzREMmGyL1znK4sCd8LpkwigqDrxCjX",
  "key26": "3vxdjUM2CSdRaEVa8XSNypXuqgjBjWU2Bxe9zHXqtCrKbSNiAyetCCYcYhDtc9D9ksv7fM8SdtTVZVrKKmARymaE",
  "key27": "65n6ogdTCHs4ZfJNaQWJoVy3dHkRCrPSrznVBWLwy9aV4yNnMuHRR95KsbJfy3WBZTXFUsWMT4pc9kBkNz2uTASq",
  "key28": "4fT2awtUi5k5xmvDDZiefSkcZ41q5AJ3HeVsn54EkHZe1dYtLg7YYpWveGNKr1puDSdWHw7frArX94ZqDqW1SxrX",
  "key29": "4abAjpPo2LR4Fri33vywiK6NghcLt6H5uiNGi688Pb3gxvT35T1gNL28pqcT5qiVdmB58oEfPChuQmnQ2diGVEiY",
  "key30": "5za7kWtBdr5N8uPQaS5XwYfcqe3T1bLsP2oc6JRVGXV5FzyRutXnYYHgh2v3iPwd2QbmbDuhNSaLAxYa9TFW7QRa",
  "key31": "4FfXAo19aqaeSFzEqpaa8GPDi9S2capfLXsf9AvVc6gJutfxTLmGsCWoHsdu2EwobCqZAqYu5VM8ZpzSaJf2R2r9"
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
