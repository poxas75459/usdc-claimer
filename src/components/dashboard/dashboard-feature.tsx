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
    "3Ym5MTdUVaBzKDLRc8XooPSbLB7itk1sSmvYNvEXUcML7Sjnr9nb6mdQxMZaaC6GyE2YBkrybcmP2cDECqVWPkH3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1MnWEyWSpGRMcfNECEHrWrZcyzXvxo5RTNLq6hbDhZXCLRKryg8tSmFKv3K6yqMWE73Dgma6d67161ocsWcMs9e",
  "key1": "Sjw25QJmbm9Bg3koMBF1TtHekt18w2KciLTK9KYRyzfjFkyLBEdSc4CcypzEDyoXxugYBWAde61EvacRMFXEVmf",
  "key2": "TYef7fBAnD2ZsC94bX5HRksfwr33wjYFQBibHBfPcXdX1AjrqakeJVwRG3Ds6eDro4mZU96VxHyGEocDfwdd8jw",
  "key3": "Srf81UYkRHeMVPFzdJA1X6gs2WavJpk1htp1WQJ4cQbbFiLBiQ1PzvaZezQPdS9F3FdZzhu5WeY2hsHD4mvURiq",
  "key4": "4Hio1vbb4XjiCbAHeUSpvNpVSgFqyv1RbyXqyXchJc5AZPrJTP3WynKdkB5QijiMp1SDULgYbhKBtzKHLUWkmqvb",
  "key5": "2eFr7hCZuVeHYtyAsLtxy11tM4qGFU3QFiPYoA5pCfmFsc2LuASSyFiMY7pG7xAyLNwKJGzbRabGTo2AmtsWrFZp",
  "key6": "64fLJ19wixaHpwKaNDxC8zmeLtWzoacKSw87N2yytt53Z9bE3HWotYfA6FXaiG7kcsz9Lt4VqXrbTHk1QJ7oA8hT",
  "key7": "5SSskqhaeKLKuhRzPg3ESe3RE6r6Q2SYntD7vSgqgz7oGzfoByNj8c6JmxALsps31uvCFEgVJUWg5Bybu18yEuoj",
  "key8": "2XaH8n9Emn8rMkD88ijDEXvHKh4u8HxJiJBcpWPxXvEpvyRPkp2A74HtNUraarLP1Ccm4FDWsFHhhRc6UEvJy5m1",
  "key9": "4aNLP5gKHTJjBpt2Bk9JZjwV6UQ6egsfaFXPWoBXuWDW7gQRKkb64yY7yAFR7gaia2PJXQCHiEaT8EfhJLGNZFnF",
  "key10": "3zvzkkDTEXn8BYtErufZvwo1GPD7VvAX4mHZz4Ld1zvB3Mbrh9SsRh2gqk2ivrntJnq9SmTqQvv5w5jWS94eDFRy",
  "key11": "yR8GxApC1uUbUMbFAhEXGWhhCc4Ge9Wz6hQe1srzE123899KeBpups7aMikxU4NfiFVa5R3LzrgjuD1ejb1bzE6",
  "key12": "3BU4LQzJUTpmCjqbzn8fQqZfQtE247AQm3MCxwMQZ4EoJb8WApzbVgLw8cn9esawjPPCiGg46DmcmWrnLwjaUDxi",
  "key13": "5e9aKDfubBXV5qSjQx1bzwksATHVG9QrVV9fmVbSNg2zorrtBHaWcXGJfETVtVVLvcKRYMoAXBAp6cyBTVQ4hYJJ",
  "key14": "2hieAZRkx3ZqqFi7NDcDWrXyQPBC11jX7KsG2BuBDJFufzzUDUQCkipMjveGUhonGbmykB1yyQ35XXZEmXG2LDs7",
  "key15": "31UYn4CUkR8MMDaU5FhscL7bVqwQtTfUQQmKfuJC5ELsLxha2dmDLajyvPyN2khxvpvhQELD4qBkEvvEuxbohRkn",
  "key16": "5dA8TQzc3hLHFko3wMaLp2KZJcQDjNpNRSFmpUp1WnmfirLuyKJkxJjoUa4BukvaXBatUt1XtDvxjUfayZAKPc8u",
  "key17": "2YGKYDyXiGMtEyKw5Dm2ZBrhijNUcvSvjbEGbZkTba1dme6WVJpwcnfXw4XtMdGEYFNwLdsjV8erZvpyfgf7SrUb",
  "key18": "58eFErAzFoiLGseViNSo8hsivnzWmsyVSnmmbfH11dMzsqbVLFwiURwyv3CfHeNNk6aTQkniAkRP33oNx5Ttpa1z",
  "key19": "3VqMB5kjBhCAFnecVAPZcPt5fKNLtyvzzEGAaCbZ1rQKCnWwJuQnBziGCYqkRU5P8KsN7CbTnCwAQpSi9UWpWQPb",
  "key20": "25o8zUngKWM46kX39zJnrSRU8XLYAWrKSu9xFhjU2gsYCiKJN1EA7taNyYYqyDmYkt9du6fggmnimRqHM8Qj8291",
  "key21": "2neHzRpmTm7cMcoVLLD9oSbCj1bEyr81Qa8CMLzVoGuYCVpvC4TjeT7Z7gHNnTbGW9dLseGx5foFLznLndN4XuJD",
  "key22": "5qfNvHmXxX5Mvcoa3eUPCopj68gmBLuEV93ADXu3CieXyc326gBaTEueDYMP3koDedwdSBsgw7XELC2JBihefEf7",
  "key23": "3QnZp18PviWaWAzYWXSGxV7HdMKLDm3iofPupMLk7f6krSbH6TCNmcESoDUiJvrKpi7Hs7tA58PPKjiH1d1x9hT3",
  "key24": "2c2CZkVwuS8ETuJ86Waf1wfQBpYMHrTxbyUoyABWYZMTbrvuXvA9tCzMdrsVQ4hQFvENbQhVSXy1yJGHjiNp1AE6",
  "key25": "2NjwTJKpKhJDTbgEhMc71uZvV85T2XvMjRdgXomZZhLWBvhvUVDt3NnKH7zpVfEFXALh4zcJ7WGzHs2hDKoR1EXG",
  "key26": "NozbwcAU63GpnRKGQwhvpPNcZqramDUidw2RJyLp65BgovY5SUTp89Zis8DXYtbfB8QAMwzHCdbbfvaGmbfvaw5",
  "key27": "4oJGrtRENt8cQKq6UgJsUdN2vvEBw2qx6peKw5uVhCKV1bUzUoNYhAhJLRCB39MW2A8e1jgzMeF6SYW25MnEVjeX",
  "key28": "2EATc1C5U8mqp4v2HNPfGdHxNuWJkxVYpaMuu3TgmpjbztYviMffTWubmE9nYEvcMFTUfd6PrXf91p86JweUztsE",
  "key29": "44YBtp8JaF1pSdAEDjcJ5t3B8yxMzqDtf2aS2Y8YpVJ1rHdF9yUTrYNbo3vR5T9aSuciUgpFcs7GNDn1W1LtxPn2",
  "key30": "2bPxbxambLwbdPD12Vj5ofoSyJrkqCG1i3id5BQ9tnXZkyNNJnKZEU7novuubJvEkotR4jTPjm6E8znpMc4houtA",
  "key31": "5bq9LMwNrcA4HkBPnobBydoBU9xFKr65EieYRdL1ehDtGRV3uaPD8cJ7P4VJpTTzNWwzVWsDoGcPcJUDwrarZQQo",
  "key32": "2Q5ixpNW4mjK8n1QBLH9vHtqkXQz9v2upiQx48A7vNZ4MmbhdvuJM7nZKP2phTbhZLRk249NNzxNuxg8qFun3bq1",
  "key33": "514SEbU2nqrT5n5vy9mivAkktAXZEgvhuraDbiirtid8NNJkiER3D1qoyaaRdDEM6QmtagtWWBt9kN9pgHxj5BMf",
  "key34": "2yBte6C8NdAWzwZhJqhVyN2miBZ1j7uYaKk9GGehQDBMZY66WwWxDBqoHdNL46A23rN8hYa1AFMQkWzmDB56kk4w",
  "key35": "2fvRtfUizyfYChGGkTbgZbbmE1MawaUtZzY3ac71MbiFz2wmbQo3HsffDyPePttmYAJ3HSmAgBjjU2akzQ61AQD9",
  "key36": "3VHzNjnY4Cc1y4TKjFNvVzG8CGNCnrSY6Ne8yy9kQVKBFPtkzjvU5QJKeenKGUNdGiNho169K33T211MkRzPi9NP"
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
