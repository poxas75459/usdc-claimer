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
    "4rAgd5HtKK85UKnzqdacKW9wQ6TdzcWoCeQoJ41RigLLFNAqt8mfRYtiUnWUBMTy7jMjtLDehfYtESK6riCdH86M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51TsNhQymgXaUKgB4yz9U9JEfLpycRGSwxeAvBMT3qVuVz2V7HCAaPciR9fiz3gJHZSaniQEQJLdgMbop8L3a93L",
  "key1": "2pZzfGpXxtpjYo5JXQyXkPUL5AoQ7GXCxPJKC3rmfii1Sb8Gnr1ZufQGvhaXzz9QjrT5mGhKYBTt5NdYkRsRYpQL",
  "key2": "3KxLxXpPb64qwDg9qRrMv8aFFvQUaVTk9a8kfew2uiFYhZEu3BFHWv6U6L57kSX7K9NeS3HqmUxpfn7ZGzUU31cX",
  "key3": "4c7NyxG5KZ1M883UM1zwPwRgK48LYetifHb1MBgusqezpmcLya28tkt7267z9U4g2dugvtbKfMnAQqpxUB1x4XQT",
  "key4": "uDvRvkoWMguesV2oSKzRW9VEX9XwPbdGAsFLTYSfX4NWSS9icwPXpPptC7636kvEF2vMpBDTwmMjtyAYtVdGAhs",
  "key5": "WuZZyreY5yYwsEvDhfvesqaKTKmADFfKaRKcJGJLBeT6YCUQML3FFVrzQwUA1CzaYeSbwqLaMYJe9kURmGe3Trc",
  "key6": "2bZLggGiNvbGBrchW6ZZKWvH8S9adFvoZx4qNHjqRUUqrxZiZd4mC9b7Qagp5TR1xfTjyJVBB6fGC3cJunxqQ5qt",
  "key7": "2s5DaxKTgtUoS1pveBPboTPHnggi8y9xy3LKHceboGCkXgRkADEJnr6xuYcen7HbKL8N4i8r59jL4YhF15CSEhsp",
  "key8": "X99xuUZLKSPhe9dbqk7mb5aFLQ2veAJq5BQUSQneHu5QNWGyzTdbzLiY6e7msvh1WSKeqiJy2HsF8WMFQHvc98i",
  "key9": "38m3DeHzkXKyPQaWSt1rtdFdL3p6bPoyeohZ5YBgAuCWczP6yvDBzdwscF9o3NpK8DkCneFH91vPeNtkCUMDqe5Q",
  "key10": "QJvLz6PRoov4343NBjWt2AsYMoGmXP6NP4LiwvR1RUBtyzDJ5Myx6dshPs7JC1xRrTqpm1B49m6SVVeCZ5zUhzT",
  "key11": "jKJyBFJ63J62BLM16pwhFjPNrf9TENQWLbzMUoMJhTAxgpXBLGRBqVxCFTghg2eXVT4uwC615rN47NiUvCRfdEM",
  "key12": "8Jk7t85ZZZW4pmqaa3N6DoEQBybfYaWi4t8LjQ8UkHJmumx3fKwmys4LUgwyfsD1iJKHDoGZguJQMWq5wUP4iqr",
  "key13": "4Dwc6i3eVPHCaqZH4HRXPWBTbtna8QZBpH8Sh1ZVuD55LhND585p9rJrbk3eqD3TujvqwQYgrKFY2VfGDkiywqAR",
  "key14": "gTqcXCSyFE4zzaTbSVP64QUrjskoCifckYr91S4xhJW98qUYQuKh15Cf4hT1Z4AvS1UcDrWwec9Bo61dWnUjJgL",
  "key15": "4MGHNaSvHMCYf2HT3T3pGvWUmd3Dnq6s7CAoJpapqATAV39zcMQSCZcic3WxfDPTvuHN2hpA1PnfamKibfvRWvTa",
  "key16": "4DmuXVjwNFAVdENxBiLPkBUWk26GzFks2BPGfuJxMbkjkZUXwhq2f6DyV252mXksmwDeNjsFCNjjiZPExb7PYSzB",
  "key17": "3RQaSjXpir9KQjqkYUqK9qdDxWsi9CzkH6jVrSTw7Jgggn91ZzV8wYqZFvYYkWJNV9YTz9ijtuBVJBTbZrksRiTA",
  "key18": "4feg2AdGwJ6h2fvWcwaC7c9a4aSkaeW2P4DF1BaSn8scYPGpCBVcWzEZyCrGrxARrw9k4X2ekMk27JXHtvswrXAe",
  "key19": "Tn7YSMebejQyerR2SvqwjV7hcv7ybM2oibaF1zPZuHZvHT8RRdcremhGP2bcwiEz9Jovk29xBHooMFCmQNXUTPT",
  "key20": "3nZafhuGdA2MFB1arNDTc6rF9xcpeqpc8FsxyQNW3xLKEiVCWa5H45xQ1oFkn21jMHo313gfzkQjUfHGV5gfHtDd",
  "key21": "3wFfW2s9HmxPuM4A1fYsAj1BMGTcpBpePfL8iozLRNLd7DhexHWb4QiVSWh8r16LNLea2pV77jrtrk3xwEYf58Sk",
  "key22": "25NQ6xL1pBiGvWCbBCL6wzb7rVNp29wwLdkiyddfYbNqhNgzehLiP2o4KyoSnL6yrvJv7ekFVbXnu6HNHcMF3fsL",
  "key23": "31k1fqMb6vE5qCRcUBrvsGz2TG8MpV3Ch28hZAYoHoP1MKNwQro85JSyq7BN2dwkvBftQLsTnDwLiaC1m7UL3sau",
  "key24": "2FQrAHfbLuo8RsqbKLDeYMqXHBkb2qFCedP21cpqNUnDUaoMbRJ1zZdkVZrTD7VgAXqLUTZDYf3V3qz6KAZu7pzG",
  "key25": "4M4D6dEBr3gEu78ArhdUSQxSxSnbj8PHr2DmgFcA9Agoj6dUVCASGB68YreYquh9Nxq2ZCfZSHnY5JTMYMcPbMz7",
  "key26": "2zZ5T6n7b9Un2CGbsJKE6x5A8eFcqeJZY73dECfUbwsAibnGW6TUqxnnyChusDnh6pwXCQ1ydp8mfNgwoN7j3ZBA",
  "key27": "3d95QncNDD6r47NLNp8rKtWVZAf25D7JaV55nJwyypBxZZM6gp5kFsiEDnxVCiV1pSm5VAjiJLt2WuXEu6buD9e4",
  "key28": "2v1GvHYtrJ4RUzr8WS79ebyJxshrGiYesahYveCJn2Bm6U7522dKBphnXXai8kzChFqRFXy4Rh4k9yWoEB8w52Mk"
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
