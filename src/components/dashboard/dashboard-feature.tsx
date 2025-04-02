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
    "4Nestf1xQgAaqa1JaKiiHcnkxnK65MPsE5b8umC81QT3KWKyrGNPwjpZ19k9EEpEyD4VThCyFqjTtRu9U2inCm7K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hFyU2DyJMxUBH6tLoUQk2Nn7v2F8PCQB8htdNSYf9yHSBY9qSBv5HGkGcue97watiZSiHwRPd1mgS6uDVFB1SBK",
  "key1": "3ggzNtU8h4QPT6CBEc5afZthG4S4c2dDL2goc8ZoDXWm9JFzYSvMjdkBrcrqUPYdgSMWqyczvoZ19QUCw95FD8Mi",
  "key2": "4taZA362neVtriLZVadFa36myLTPQ58QaRweoJ9px3bLBjhfsmppHQtJxDKhQSAQ7HZ3ayB1ZfmH8M5uhcd5rLUD",
  "key3": "2eLz8QXYhgfxJPqmKXtPTmsp4DDkndXi2pY1Sm3zmvbbUxfGGdRYnbx2LRfBxQHaTX5ehqZwazyawjiieJpRY7kL",
  "key4": "3dGg4X2XoA2KmZUH25E8wqKc9Q4WCSqZ4HDpmPspULh6hrHpYrFLZ3krLh46yhdvKQNrRMEzcw3oH5KKnvV1MeUZ",
  "key5": "2VN7GaCAcWUuyQ1WmL8NxnWJsdmgeTb53X3uiKKcxyNm5AnR8NRLCUwTV4sJAdLqFMDhWW44H5T3gMhj36YnQEVx",
  "key6": "2r24YrNAaGeetahvC1bb5cZyScbS7VYX6m1NMb9ms6oyw9rQKbWwbEznu3qekMiZK7FmzGsWfUYd3ACSA3J4Q8pS",
  "key7": "5hEDa7pjrr7nEDCWeAjkV9LkQJqZN2bjjfDVGkS67jvkyrqXECeGiCMWNVz4C5dKisPaKNrVL8vACboFpkwaLUgH",
  "key8": "5pETMUTd48icbRBcX9BM4N1w4CJpNW5xyPgDsPJcrXQSNL6hEKWWf5N2xJGYcVdcuFBELaPVqsm27NGjbajCuxMg",
  "key9": "32Rpsj7QQ4mBJFnuXGs98EDd6aeME5CGTsVWxywg2Ekqjdxz1g159VdedKffZgYr9ytn7UgNRQncWvMPNiL73VtA",
  "key10": "4E1Y8BC2FhdXftY4PhRQAnxADgcY9SdMHW84A3YRfaAhcCJSaZRunUkYwqoZSNyTf9ay1n5SFUUA594m9QnmQ7Fw",
  "key11": "5tSZEpemYDSnVbijYUCL5rnFCSsMj4WrWfpeHPW1KMae1sJnQtjAAYL5DsYQC5CqmKfvofJ2X5rxGRfphNEAVN1f",
  "key12": "537hBNHoTv73iG4iLNsyKiazL17FnD77tZHUCr8mZh7rmdDMbNQZVvVi9NATFCWn36eXytTr6XWVDyQFyZoDiYhc",
  "key13": "2fGpdEZ5Nb42pyU53iJg64DrUgHXwSMfE6D1cwcKWG7exGJkcNgvcjH4rU67MdTZbw88J7Tn3qTokFqMPX9gCyFp",
  "key14": "4uySY7zcs75Hwc1B1o51PP6pxkA7LYnWENJbVUW8mUGEj3nNRZ43Z9uJ2Ete4dPjCy8DL68oPvEUY6nexHHq6MCH",
  "key15": "5Lk82MwFth93AjZfUZ1RNA8FC7NgYtmqNe2S4mtakXHWPaX81tKpaJmya4sBU5fFC9TW3SYfLGwbfV8ExoLv1xn3",
  "key16": "37uBDWQ1cMbSAmB14fZHtfYctnsAzvCkVJDQ8AFBDmWr9HSmwg6wnH6YMoAS3B7maVoAghB2ahCP4oVkFnQq6JnE",
  "key17": "5sfdBVGS8c5PRvto4DFioMggJau5p8QZKRb3MErfFo3eXDSK6fdje65GeUWyJDEc73PzLQVPWVL2SH2tHt4pESB5",
  "key18": "4Rcj1vL2fXMVtwfPMauHTYv5naCF2M1Qmz5tEXZytfygJXv2WnxDZbrqgSo1FaAM13RaCwLd5r3FHWdNkzgCiod",
  "key19": "44CD7A8XT9hSASJ4M2SgASJoXuYGTiBhpeNmmRzFwvSqTXc4vgQ3S2JbM1dhp5dcda18HTw8qsNgMuHgQ2myorqu",
  "key20": "4hQYMFNxBBctFknmxG1jpJhWBwVAcmojuuwQ7KuEiuxU48oTy6ufGrmhpqLkYSUj84cYPi4cy4njMDameE46NRbs",
  "key21": "3qhaqtoFHYRXVm7ZKCNX14g8TPELqg6iZo6wkCVLSPBvVqPPS5584K3FFnDtmDUXQBqafK4nhDH4XaSqfF6WUoiT",
  "key22": "mARmMbMUxMMAaRSxizyAiTPuzZLcy5ViE7fm6SZg2GMiVtgd66ePsRgs41ivpAVbvHADoW6ArfMB66Ny8hA4cQM",
  "key23": "28NnXpS2dmGe7vk2avuEadoiDC9YgqveBYdvXUs9z2EDbcKb1sUBjBzMRH7CZTfneqPnsYjqvjujcgwGHFxpT7qU",
  "key24": "4DAeJsc5Fpa8d4rSG2mUCzgRgi5r8z9zbLKf2Za9Y4MGagc6vKair3hoNHgqnivZinUZShdgcaPyBfnesKuBPfKp",
  "key25": "3wYUfJmtN6wqpvPtGAZK6cs6SR4ZFzGrnbq82rUhQt7EMYFp24Nx2VdzxP7Bb1Unzk2co4JxeZGqiLHnhCUpcF9s",
  "key26": "3r78A4PdHT5GehxmXJeYFXFxeDW1kaHgCzyUXs7fytomnrcvpTLW7r1QsoHy8kR5vAzhFKxF5DriwjZKn2tA9NEB",
  "key27": "2M4ERayEA3o5YbpyMYaFzqii8JKXN6ZZoPSSG3H43V61sY9wM2EqJToLbxbPf6h7yFa1kPufUk8HtKMLvNt8F8w3",
  "key28": "5UyPE7NJeXY4MQNhcLcaLMpow34rSxi8fgzv8zL5cecHjh4ai9ECHH1dAwV86s7P5mytKKy7cD9DRTBJtpEbVzgj",
  "key29": "2Tvh4MzM5G7eE9TAEzBjo1BzKkBWEJwZT3CSukkNC2aUk9s8pYKVNoLCpNbkHiU7gxat8FUuQjW8Ya32Rb6V2yPp",
  "key30": "3mcbrAugYTbkXMT95m877fPrEB3aAUrwUtdWbpXo2n7oowxURWn19cBoM87WEemD3bhAyRqkzvN5bDx41Use541u",
  "key31": "2K4pxLTSneh7fDJyuKNZRtszFC4oJqYJA3k3MjUyHkxRCWyB7VistwkLbRWzqAFUJgNgytXHo3kEBwCxXjb2c22M",
  "key32": "YciHjqndSSmXtXZedNYuoNALmAEpANRJg2zcK7VSx9NSDqRYtLDmRuBKsyB6CxaiFS24fMuBH2xLHJwwALv3Cgs",
  "key33": "D7NGxQ5GQW2pyeqBzoQmKdHiwXmW6mzJF9t3sHykar1E5yr77WGQhPTe4mw92kgnQvfS3peqaSWAXXd67YPgg7w",
  "key34": "4DUtmGXmiix5rrhFpLaGsdFMbzToG4SbX6jZWCMBAC1VxUyY5XUUWexG14jCa9nCwGrgsK3Fp7MoLqZzEN2DUz1S",
  "key35": "3v2HsPjV9tNGBW6DTtTkciLCywT2cPUDqhdWL6UsfpNZhY7f9xbu41D4wTwCVLzwir3QrshDaYDbWiVrSfpA6Bkp"
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
