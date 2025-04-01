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
    "oEAz6e4CyytToJ9iqeTc8CFaquWgjaagrjXZnc8UdpYzVzpExeLtv8k9FJoSovG4kerUVXrm6fVeBVuhRghWgk4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vp6m23m95vTCUW1XJsiuQFN9ZpoWT6kfVp4aTHuMGkPKTc1o7V6nZSFZiNDjEAcxnPoTNHxz3bQMjza6LbXdq5o",
  "key1": "634mDEPEVsvq2N1BizohMuRFgGkAPm1fnLoRaQ7gx25Gs7xzSmXxmei6k1pja7PmD86ct3NQS1htjavTDwZ5UK2h",
  "key2": "2MP2zZVYcBepbTAw4FxSadseE6Dccmt8hXGNNPpRUuJwtNDzRDSUTZBrKLfJu3vFfGH19MqF2BRF1A9PMntyh9iL",
  "key3": "4ujoV5zZYHnwFgggMrctuMJsKoyvG8iFJriCL9an5jkdFxCnjh2oFPXHVRS9M6MN5PfA49ws8fSH7AMcisnt9VWd",
  "key4": "5ejrJVTHk6PkCK5DsQ15prPs77oXGahXP2eQsX9K1W3QthTfNxyaDn9qXD9AydNcFBNQ3eJzEQiE7uDXYZprqh4D",
  "key5": "2uCqteJ6XMAjFnaJvWPD3XB4kPfXtEJ5z79W31DpnURLEDQsZ7KgeqzGmHNUKYt2LWnfC8ZmSYhaLPdFtzqQFdiL",
  "key6": "eqWdwFJ8dGYEJHDfEsgZ3XxpwQbY4nJr55UDfBfCpREnVf3nby8uwanFSkhLEMiYoGxv8SdyJYsfijDb2pXcN4K",
  "key7": "5aEm5Ao2Pctk8Z9ezgKsQYn62UQ5VNvibufrhR5u5ttHinFJ19ckdEY8xYJ9VGo1fe394o6MGFGCftGPJGmmx3BK",
  "key8": "4SAyXU75z5L8iNoJ3fpJXRfBrLFSDmYRHxL12hURv4E76LiB5xL7NCDbF3DSCzY5zPENokoK4w96bnWCM9L4todK",
  "key9": "grS9756nk5nFgXiz1fVYeEhGcDB43AvvUCS4tJztgSmLpykjKvcqCeYEaLZVLcsLsHb3joVyaEQVSeEY8vPCtFJ",
  "key10": "32gs7GND9fwZ5FyfhcgYFWMBi9GgNrqfyTfwt17ES2c3aVSaWYJpP5CBvEM7PLZFQXDr7AAPgE1taDXpk8nAVLkd",
  "key11": "MNJZ6aao13G6ZJQFKVo4bg1WDB6UVbbxGi7v4t5nnNEqtmH3tSQZ4DGXLszoiSK1LeRcEc4K987ak73xvrMJp1T",
  "key12": "3obXygJRij9NcN8FhC3fk4RFS8NJVAy1GqkakXrC812diJzuLrEY2dWpKXNj1BM2P1pz1zkokSNjFDBSvcf9eXwX",
  "key13": "24vP9fHzVLjHbdU8xjbMrppAAxgzVrvpmfJuhGYoajsGKfGmsKejwh6dsVHaK4p9rmzwBeRzzLCbTKQYFdiFWBt9",
  "key14": "56a5TByMPZ2kzQFvmrQEkr4JGCCv757UaJFycLqd2cEb8XRaLGXofGS1FvSMVWseQ8fxhUAbd5TwxKP5fAjSbkEH",
  "key15": "2JR8UBcWnYjcLt32rGbVpUDqghH7qimF5xwfV9nu9eVhfAD1oLnf5KU9ndgZWiRARurgPjEFxx2CiuQUeEDTUe7K",
  "key16": "3C158Bda9hGN76ZxBch27ZNEhBxcU7UzgUEUoPCJpwvGiT4ygDvCG72dYQkRcGo6ADuMA4HUG7K1YQToxApU3tAm",
  "key17": "2qWDhB8ksgCGQkXpQPVg1gu8HfT5EVQPChiWp7rucGZi6yMsLvm83mKsPLeoC8zuR5HzF545eab6NUjHqG2sHnq1",
  "key18": "2ToCy33oe6Pv2tz9xVQ9sPUei48DaqJYMUxLEEDjerasoa99CLTscwWgZPPzPc32f4ne4r5GaAR3R8W3qPUrLssR",
  "key19": "36GaHtACxQpp5LpqQhJETZg69XMFjhi79RvAFsCJhiCzYhRriViK7nsPYb9rbCo5SrEfsg94BvsoU2ZNVHbh9Gz2",
  "key20": "3kB1uxpwNMi3wy74998UeMp7MQkLmd4kQAemyHiwjzHbfqfzSB2S6Cs5barLDKin3uF1TzayeWjXFn9RLLb9hG3m",
  "key21": "46npMyznHogeVTpQ2XmD6XKS1k2T81M1iV3JUKCWiqpBAnxtxbvQzCVpoXmy1XAtfaL3P6XT8Xabr5H7WWJ1W2gy",
  "key22": "349VQ6vTk4CA7Qc3vdtX9vgcJTWKA6bz5gUPZBE58Qdm9x48rxiT67cUPMGN1jAQm9wLpUsnGovdwmuRDvkSTtRi",
  "key23": "5jsqsYavHxvktGnARVJLf9ZhJt6nJH1xJA8fc1MeksT8JdZAGGe8GMxLFXTYxsKnLaeLS4zPSC6Ru6aMRxeDFnCf",
  "key24": "W5Ddc8QNF7m7quPByfUAWvDCPLZ4GcQ2r2Qi8JsExERoi5rUwJDv4Qayd2jf6mt7WWib1UKt3inUWvETno9keaK",
  "key25": "5QahsUpWsy3113FwcUQGrdh8pCkjj3uvPrTY1FZjW6UsHacMjyLY1Y11aL5rUmFvuPJqYpNFjMt1AAXoWgReUgEh",
  "key26": "28WYY9BF1eKQdmP526UFFeEyz4GpqFoehKCwHwwpcgjv8f63SHZdMDkM9k2cYmaGmYSSY7bm5MBQ6DxnJXh7KU5N",
  "key27": "5FWKjdyMBGYYfqvkDziUi4vhyiajESaDeuehWJ16gKFHZVkJEgkB3hDogtzof7xcozeTeasfKZHCPC7iQJnFyL1r",
  "key28": "Equ2mB6y9hr4xFzoB2y6mqcxpWgxSJRq7nsXtpp8sezTziXXXNd2X9iNQNhTZ858x5fG4zG7qrJf758XU88BAGA",
  "key29": "4rVUmmiA9QGkff32TGrs63xqE115aqh4F5j3SM8sqH1izzFfi1BVRzqBi7tGRPtdf2kr7v7DjTimZN5n7STqe1N4",
  "key30": "2bSYtfSjkqPFqFeQzabvg366H63MdWPtm3EFxYfdpz52EDifKCmY5CebkUYqsTCussaE6vV9KcLzpCSUEue5xyPb",
  "key31": "DREGWPWKebPZM8PYnSueDmA4gUYmGtT1NKDirv6wpK21yywBDVeEUM73ckJSoBFUn7o3xwSUi7i7P47yynVj5M2",
  "key32": "3dK3rEuVLDrGsTZg3Keo3U5S6cPDHRqhWMNBZjM4j7Uh5G6kKSw8iq46uRvSKs82YM3p8hZACZQ7z5B4mHXFVFtW",
  "key33": "3iLFesvAHNNWLC9ZjJZSDJFDVDCJPfMaf6SWUSAUoe68hSEiXKfmJBUqcuesfUdfeBuxk1VfScxsV39T2KNSAoPy",
  "key34": "3gtd9BcA6PMcBVZjyVZLJvEwpXWFxFnjTo3m1CadLewjtUneHW36wucznu7enmnf8qpUwt9RiG6K46Eg1tVSBhXZ",
  "key35": "4LbnXYedQcvSouDURJ46Xx6vhux8r69E5ZodkwrET2SzUxTphqXiKm2Mr9wkKW76dzf6AzahoZNpGoWtBAuA2ymx",
  "key36": "2eDvURVakupiPU4srPGgj3BX5nDcF6TufZMjQ6fd9kTcUX7uMcMt89LEoH1MxCkHagQJ7RNGJfk6AxTnwETCG8LJ",
  "key37": "WPgvSRrVa6HTCoqEge3L3PMPBLSyKNUt285moYQ4emAciJdhG5FEKKw8EczWLDjZnVLVx94pNzuGeNyWRbLrzix"
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
