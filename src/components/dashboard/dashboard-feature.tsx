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
    "4Wv3SieXbPxWQYKCTHsfUQRLk9gTF6hTTS96TXkFbMqjU3dVyf7CcGjHyNWrkWBg1GJz6woc58vJAtMnfaRyf9AC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "536rjtRBZQvT9njPgmZdErJtAQ3aLXWLULW5Az1C8dV7fB78AwC2N6nPEcAmxkjqdtVq7ogSA4mAHHor443i7MJE",
  "key1": "2rgY6tp8gBzHVkNv46gpuTZn8AQH5fWiMo2DDWWoCWYNss68MzLHeByMqn4WAmPQsjwCpNrf65cxAcTyvaS3oBRz",
  "key2": "2qVarXxfBw1QjiaJoYQy1gyV3y8BXj2zZeDqjyn4sYTeHcBjujY9bNXu7Snknh5F1pBzUg9YRBiRrmVzPuXhHKVe",
  "key3": "64RhWRgPoxQuEHsfvP7ZbT8dQPD3znRhYHjFGA4dJ7GvVP75RgisYnqyaac6fdyJe39Pe4xXksLr6RzpuQHinHY7",
  "key4": "KiboB1QHJNTzpT5xeiLAC58PFmkFJXChrDXNxAza1rsbHGi3aVb2C67Fcaht1iNmP6vofuehwEFvm58nPVN2GU3",
  "key5": "2G2qJARQpaf46b8MFiNybojz6DLsYYdAbe1o9uXBVTRwHTWPGPQoBMbazsuPmgW9uKYcLa17WjXBm6keuQfcsmu3",
  "key6": "3TGLgg3anT4wEJsbqazfB3P9V2JTs3oUkLBJ8AcYdSvPHtSfGVy5ssqwYnvNc5P7KAW8CTLVYRY6ytFahVkwJGjY",
  "key7": "3EaF3vrQQQVeQPyE4MdMrHmpLJRbE9JG8SmkSATdtwirCR31TXjHqKCKexdLNDuS2d6eQodh7ijfxc2VLFwQkEXy",
  "key8": "2hekXBzEjtUttUGcSaHQp51vp9SNKMXh9nMEm1RNHPXxGkBfHdkE2oEUGy1T9iNBEC2zWv1HBsBLaTFAmyMyk2Cz",
  "key9": "2G43xnyALLUfrCgUHPL6sS8yjZjvBgnLxZq8Kb51JTj38QuAcQdh66fdrUnLTV3QgSA3LZXfST2amPaiSY5Ls1BQ",
  "key10": "aJ6x6DSytfwTTT6Vi5u2rqGzV83DG7nuKHo4cjDGrRroXD4KHkRHBr34nooL9XheVEygCEZkiTY2t91bCAUQSqp",
  "key11": "5rqBp6qAntUcwL1RZsDLUpn52urRuLoGM9LXLRXX3yuYEWjg6HLPUtT7SoXYecZs3UjMJYYYujCT4Zn32Ls19Mkn",
  "key12": "EUccpkFURaxMLZ5hrbKsrmFYTE5hE5RWtmDUscTYdMeBePA3segZbzhUH9XaiE67rUqJCVzEkMsh4GGBqvQMx5J",
  "key13": "34YmTcgPBD15dausgq15dE25pomNeHhdWrj5uADsh8LFtkGo6nuapuKozfm7UYanFEsGCorUZnNzaF2c6DtuMuvN",
  "key14": "2HfDUmbVS2kFLdamPasr634wYvkexMCcYGTcvbJL4hZ3iAHENLbBxeeUKTw2Yzv2Hr4eJra71MYzhCFJpQhFC6vg",
  "key15": "4zs2fMcttiu8GpvuJex8vzQKhLB9TG95G4CiFEc6bB7oapWrLZofcNfmNtnpX4rNY2Hw46URkpeYtfzDox7tKsyn",
  "key16": "4SQnECJAU4P62gDAzsy78n2ED5cqx65JMJpxSufNJuVAPuAiCdHmttkd1QK4NNShgpqKdqQPdE5xzzWD4W8Qh4SQ",
  "key17": "3FREuS2YT6jqZJdJJZHCokedUvpUHYDzSVV9UU3MUH2Ui8FVrKcwhZaLhFXKZhMSbmZfS6WAeNWtoBTZtCmpRVXa",
  "key18": "66yzsoMnxgH53ukjQEm8LeV839dkUCV7L4o1Y29hNRQZC8q9qi8nrp32qMwk93bKFtdZMaJvMNauwXuvfdiShjDi",
  "key19": "2X1wXG5s7EwiXkVL2qjL1GuJaoSdV4LimTbq984JW1t7zH5oYctUwwfTXqyTGLgq7vnVKXVaP9e1qFaUa9wtXWL1",
  "key20": "NyYGQdxBdYspUgkx8uWTDNWzRdvDVqqEoUqpN5WNoLKtLWQKTBhSk8RDq9Hx12KQhR1xWptAJvsqkuUzk4egdA9",
  "key21": "4wnL8TCHXe7y6UnKoCWFNqex4ZC1X3B1W4mr7aTXhE3UUHQ1w5kuxeADCMwbA5tonaKhsoa9NGHkJb7mxTDktv48",
  "key22": "2ZNkmn3dJLuDbZxAKE4ncQZ1djNww3sMDomZdFwfLPYYKQSBWnUboPjajHytbAsxPRDjMFrkRKkA3TsLTreuwfcD",
  "key23": "3dd4p6B8JQe5xuBh2ocf3UXb8zMHQpqs8qJfMV3aDhurkQAUScXUn2gaEVvsd7tQKkf5BBG2EhbNiUAMJ9E5CY2u",
  "key24": "4Z1W2Vg9SonNGGtZCeXAcPV2znsXBrgnwGyit87SxwxpMA49UCy573f2DURdyPBuJpxxczFFStYV9FEtgebnTGWe",
  "key25": "4dBqqmYW4jP1i2AHeVwjrnRTrRqBt6nevtCWYyKnWGJbZqs44PHJqjoJaniBhoDmNSrRK1PfDJqt1oLSSEDw9svH",
  "key26": "217PTdHzhezkhJqE4B2oERMiLEngLEjvM7KHHwMAycXe4xN1TFcdjh5x1b6mf6wrDGdDT4W7eT6t2KxzaGYFNbbj",
  "key27": "Sx1145TuQRr1FLNLPDx4sqgzyqM43sh3371hw4f1mVzdFNBWpphPS711paZre2MoGchcMZ6wWYMbkXL1BWqUsTf",
  "key28": "4J2Yw6rEKv7dwF7QsekAkguWVToJGfaiUtj8Ha1vKFZWWCusnTTJPkgEPZHNoCfRKmZb1ZufDaQt6KRXVUCRbFdD",
  "key29": "G5UTu5GoSkNk8fQr65hjFBN9k4Q8QWESG7PHKfnA2CquXggoEGhvanK3xspAqGDyYMAT22kUX7NMebc8uKCvpWS",
  "key30": "3NngKmS2tzsk3y8UZsM2GytjrMevZ3fgLHBoAgs4Y1SCb13hbL17YMnoRB8EnPKd7RzXtjngGSrqB9ciXQe4YZzb",
  "key31": "56LfTt4tYK6Bspvmta3ZoLLqanJvtXg8Ghxu1EPSSwaMJJbTVcczNLagGd9fjaExr5Me9BBNHN7aGc1SFYN1VGKh",
  "key32": "2xmGhoydQLLb8XY8zmXNJ7Gc6FezqDaUrHdE4Yii2XmrFLERY8ST5pMaJZcUUe4R4EvpNGqF3oSTaFqRKTqeDM9a",
  "key33": "E9MKqM8RC5oLobwun9fBKW3QcwvAZHBYM7r6SB88c2A64ic4oPBHz77btza2u8GQaoCrvUCYsHXb826AqAJ25jf",
  "key34": "4eUXYzaWg3GNBqtFgLG3iYiQEqoGiW3h1QZDvDgPaejJ8ye7LWgwmsWMP69LM32jMQh2utGki6qekUoWuumLxmB7"
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
