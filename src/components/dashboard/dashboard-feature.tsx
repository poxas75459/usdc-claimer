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
    "2C8e9PF4qrz93FXanoB3hAuc4BFuThkDQFeeotqwCo8nMUtHtC8o8wYjKPBYF3SvhsJJAyZK5t3iqGpakkPNvSuJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SmTPugXGWYe5Z5zqgYTjWAF2s4xiBFyg4K51Gs3JGwdPTFxKydB1EzDsntnqwR7AqhQrv42ZQ7p2TJue19ATuVi",
  "key1": "2coAmZGazmjwXULRRpCrQSGJgWYCDzKoGpCGNpvVfEi7VFYKjsRv8Jg8KbdiUc44so27WupLQAAaPzQbhhuPaaJL",
  "key2": "SdX7mN2uG5TEUeN5mqH54AA7erEsZgbUovK5C25HWM9NoeBYSAWH4pGWRomWkFVcAWNMbc54ubm8TucLyiTDDov",
  "key3": "3hbSjmGznM6QYzyN72RfdUvnJLtTvPNM7qSDHp5BpkvnRYHwRdoAvUv7EofGQDfihCmzBMATJD3nWFaiF8GTt8od",
  "key4": "2HhDxrjoKMNVbRtkDpAWQuwSguZZyKwvemZuxjsFYHPnMz5hEAyDgnKNaGckczDAHi3RgnCmV1TvAyb7SLpWAtYt",
  "key5": "3Jbuppkx7QFYwvRLaFzCSVMyQcbx6rYSjysVVANSzx4SF7fkMr2pQ8JcegthFfxhQP8b5e8t6VWgeH22fFas8mdb",
  "key6": "2TpjEK3LpQJ2rjb9ShRws3sb8EMcHnWgmXvhASBiJzAZp21Yt8VfgBe1HGLS9K25LwRnZ7di6BEN1yUvnHRtW62V",
  "key7": "46ow5YQqXK7v9vb2m6eLzJ9aGyUwVPdNTxiZSYiNwWYaasGM2QsEuUw8EMzJ3cNGZFEofNDGndQj54hGGeZUk6rJ",
  "key8": "RJLEbQ9aRzPHEmJ935A4jkyaCm4U5KjGJEb5eFV4f499amQLUzr8JWUFBfedxVP7YNbt3tZbck6eyzb8Px7siZH",
  "key9": "bxzXGFcvqwBMZ84rcHM1yN5Tn53NNhYm8S8q1d86ugf4R7asDB6rPgDpFM8xms28iQhChLWKAMxNC5Tz7TJu9p4",
  "key10": "22w2uYsPyXQkraBK85uR3KZi21tjNstowhF43AMLVyXiKVpo9RW7KX7EjiGZroz2F7DYYuwhQJwNoL1SEE95g7PQ",
  "key11": "4vMdRWV52c54vKezwUToZ5uW7Ef29x2ofRqe1gtDmSF4B3MkSB7a7iPz3ft4chmG4qNoawwQ3M35dUpBEhANEGwh",
  "key12": "41jdth5qRasJFj4y2vYdmEzmJDApvhEgigjbqtP2P58MNNWtdQUnKPT8ZfWx9wazR2LAUat6ZK9FBB8vKNqetQ73",
  "key13": "5YmMVqBa1sH6yx3Pd9LBuVPzRZDRtTtdStFfYthSRkkCFEaMinaom2La5kTdBgZGPurHf42Q7CAQiVxWYTE2J94N",
  "key14": "52w7ZHCwLdPxeQ3fAiidV7ya6TwGyw6pVpz1PXLMkdTYK1Ck3KfgrXtTXGSypGpM7oHmxWs6pA1zAZqQ3H1XZSsS",
  "key15": "2oztrGi1bCnS9iq7z195ZibDM3AsgnQnnH4Z6iwoGcPB6ZunNBNQ9AxSc7xXru1ktFn2LZFz35j9jChB3QANxmZ8",
  "key16": "33Mb6HbaasHhsY5SE4mikgu6DMjhMUc26dUMPzaANrm6C1ZFaaxpEQquoSvzjjEVFfkpHGssNWT5VPWDKqxvonok",
  "key17": "tCdCpwLD3KdTqoauZieU1sHZ4a7MZU8YPkhYq8A3o6HyhSmAdmBSJTJdtUuBadjpUd1JnfrXVBwG34ms4EzrfFt",
  "key18": "3R6g6Kbjho9Tpe67LjtEtn3djkXA4b3FenfJsNYdr6wbERATSfZmwPfc9nw7maYGTmY8tCfQDLSsWmjYSpP7hSGC",
  "key19": "3oYReQLw657dX6M4eqfXei8M2Xv9XLnnunRnVfs5XNMcvMi4ntbub9mochxgqX5Ff88NwpatRVW1LEBor6XGMNH5",
  "key20": "2LDeiHMfuDZbzJwQHobarYoMK9y775wDgB1osak13MSPXcshr8KYcAYxYUF7RQcs9Rb8sfRbp9XePsoHbFjqXq9T",
  "key21": "5cnHbstDMy11ofGXW3gMz2r6YEtcdi1w3ihLB4jVKWK8CLJUt1wAXHkRApua2cdGME5FNZDqAFZpvcgighQJeawG",
  "key22": "57f2wDuRUFiEXSgJfzuxbYKp83jEJFTLG6QXBvsVSnPcKo3RdkiFDVdK6E9LNycmr1B96a65fPpvpW2nem5p6dNX",
  "key23": "34ZHzphpNfL91bCMvN8aBDbRiuiRwzkMQoGuEtQCZWgDf4uw7H6jKFHxZJmrye6V8onMAXNp5PtJdiNgwgHn1vQD",
  "key24": "2jqHeUoAynrKhdn9Z95U64iUWnoHxzFEduGc6HEnG1oeQpJxEQXRP3wZ92hkmym1mWzfX3EfCoBKaEHeN7aR6xF9",
  "key25": "3K2X7rdjKbLTMPsxG1D84wJv6mYuX821MPTn3bUTrc2HYifTxtpGfMSpNJmQBfREU4ydxPUXHmwcYGsb8jj77kbx",
  "key26": "4a42i2WeA6Cai6TpeoZmpABNw6PaJbFYKSH7A3mJPrtFxYfj1dUDcaf6fPNEywyJhe8nv3nTMJpQQvpDb7VPvWM4",
  "key27": "5ZJVZrYJKBi53qaK7HwEUWHU4VZEHJCJaxXMYViepaLWLBzfGusYsRydqv7Xo4pLiuxv7mJS9e96QiEfYCeQgYJz",
  "key28": "48Cw68bKYkKbam5KcE9okCmd6u8uVBW1TcKYw3i23j1TKN2B2rJVNmen88heBSBPoquKs5iedzTEThbmNJFUWs8W",
  "key29": "1jaecxSTpStMsukr82VBhBhBjiUFHMAFnMegFq1jDo7WKpi8qUwJh3Yrt5KSrmS2VZGroGa5dGRNqmzeKLTVrSQ",
  "key30": "27CWRvWmDdmipLPdTF7o7vxXrESCcj97K7RHvVwSLgLJARW9DL4MhZ19X5LThs5GSw36o77k9Nz3xtNbTA9vU9a7",
  "key31": "4C3LoDfRfET5K4aKzonwb7d6vNLU15ULsGt6Nocc8MeXKgw1o32UVvaRZmU8GxpiDPWTSsK8fWo91jaxe8orAFxH",
  "key32": "5t5DyuR8SsPKDTM6MsBTpXdAwEUCrNRN9RT1gqVVKkdJzuTiwqQosf9CbjLwoL2e6V1UyzWL5xHwBTdF9R6532F4",
  "key33": "47sCvv3rNw8pnjvpxJKSoewnfdZhJuuVVP6oz9WtovoVYLzWgzmzp7mNr6ZtdgSBk7r5iK6EMMdyQszXjtxjn3aN",
  "key34": "5AkCjyD9TPd7hnB4RaRr2fRv3kHgqNvPvYMgP9ohZmNdENF3qgsiW5szzcCLGh2JFrLKct4C5T58WcVSgMqow4gp",
  "key35": "4Qp8GyB7osSrnHhXzJnMxg2wAVee3Bi8miNPi5qeTDp3ujb8nvrNFdnUA2YpXAw7oBWhxFDB13Xbq9TsZFUqkVbS",
  "key36": "5iFgohGG1djoewTHMvkYHET4poCaanEWkHVDABEJ2FXv4hA3xynT4VTGZkk9PAQsovEgJ1PanV8T5r7MMgdRUX4f"
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
