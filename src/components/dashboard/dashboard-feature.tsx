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
    "yreKDRfMMtnxgJsQCGkijG2ro9tDQeAq8u8gthLhow52wC1JRCLCdmLcNdLWRhwdhPPsAPGEkkGxks4bpj5kbqc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ghDR7VXendL7qQ4JPM1eVMmZhS5SSSBRPvEwVdx6HUnLuWjDtrw5XaWuchQnfRKac81qMFEioi5b2nrCr6HXB1c",
  "key1": "5ZWAE9FQTspQCb7bRtN1hH4GkBb5ic22LdxSrXG9qCH5f3NVZVdLDGpeNdAj1pBTjCnFFymqvRqJwBEcGjCiy4Zv",
  "key2": "sF6SWJezFtgndSrwWcAQhDtupYV52bSpxn4ydBgQQQvuTb7w928NA72B1v9v9qmP815m67R5g5Wi5Y9sVvJ4kXV",
  "key3": "4T4tMLbE61pRv6hqPcT1dh79YZXYynp6qZYYV1v23yq2hvD6LLgMzuNPF2bAFzhk5RQivD4r4vuN1vFiVd11aZpx",
  "key4": "121PfgR94nvNhynSmqXZBtXishEAENbw88CayHGQ5xspyH8jSwB4XrGK6o8GhmUQZC5BMCK8EvG4857nmP3c7ctn",
  "key5": "JkWWFjAaKSB6PGkV5vojeb6u5cVKFTXR9brmrbUc3mqsbwngYyY7VdQn8372JhtPCBo9v3N2b1Ww2VaioZPgNM7",
  "key6": "3dnFmG4abqj8FzAGPEKKovoVSbY6y9nW6ZMY67xHfEoDXPsuYe8uy3RskhkDScoUJ38iPhomUrNeXyqiBckRPKLb",
  "key7": "4mTbN5XBoCwUE8nyhcVWTZvJUYmt5s2q8cxbBdmZp2UMfC3LuEQamPcQxEk1wTXQYijVdhf1MkENG6nyLUgfekac",
  "key8": "32vDHDA87aiTbdgosLqMTdGDufKUUxdBM76koXoSHhPhPMNdvtwuBbNAdpD8ZHshMFUFESARaubzxToe7NhqNFj",
  "key9": "3NofajcJWr6AvnTgKkjPxkifa8RqGCAQh3jxewNVsenLcb78PeZwhJDdNR4vi9cP1eyGXdKSfcX8M6MJUYPSWae2",
  "key10": "3x2tHikoLd3QtipMfjq8ZtHSzrqNQ5JpnfyxcWLpGeHTvG7sdcQqbq7G4fo8FQ2DuaDTfzx7mn5CzFFS4XKxQv4v",
  "key11": "3fnoMfEsu8r9GosRb2Huw6CnzpNw6TNgzwf7KyN6xyUuQFNroRhtsU2fk3YGaX4ynxuCfTp8vuoCKp4Kr1Fh3GVx",
  "key12": "4jK9iPbFb5Wy5qt2DQkVgVfJXVRjo41cigoSU3gikYmxf4cTmjQe85fBZ6Aa7Ya8jDAjjLuq74wK9kqYfbKoge9s",
  "key13": "BewZTu4pzxCV44pCH3VUm7LZfQ9m7AZZfKStWZAiDczS6AvnHhpuJG3bc58VYWtFhtDE7jbGtxD9addARTHrQZr",
  "key14": "4pqdSiknGbKfZVG2GqoNR2kxrURdXKCA9pbsikbeG9U3uqvvmDD8v8bNk8QPxAcGHYTPNUcreNRHVHmN4EyZhTS",
  "key15": "63vdSQzMdGaZKNu6kYYcRcp6JC4RpQ1B9KjWyt3chmY6EHCTL1MV8k5DDcLK82QU2RJ7Xc334cQVhsE36rEfkZ5A",
  "key16": "MMSa9rLNiNvEFvbqWq4ofCx5ZmmEkMfoYDGMqZDRUoVrF9ipCGuHssc9TozVN6BWcnqdrwDdhQaRcoXPhsGyctt",
  "key17": "Ln6HnoWpTLipbgyDVK7XChvrFRN4oNwZFmXbMUY2MiLptYQzccvfLsWCfYEmWjpyPEDmWVyquRfoptTPnswPu5Y",
  "key18": "4fAewF7Ex4FzrzJBzTiA2matdxT4dCDLaXWh19Syp9inzoPVDUFbvg57v8iC5suwmkGj1Kio65RWR5svJor1BGz",
  "key19": "5GUANoUNAexHpj2mmSXX7An3axmRN7zg91CNcB3gL9xhydckJzyf2zP4b52Q3jdqd7VYK2DeyRayEYN8MkEBH5FT",
  "key20": "2DAascDJwATQdbNxWEWF99jtmyM3x4uBRQLdsQVVpLVjxwTgseAFNtV9exJuXnaa8JY1CGWXbJcALh1nDhNdB1pk",
  "key21": "5vQAE9vi1wWndDxLdadrZx94jweQX6eSj9jZPzn3LwJCpncT2whgNBjGoEXDWcUWL9xKFTngmDdiWBzxHR1vzeVj",
  "key22": "5ApYzc6ZYguJ8fMGJqfoxZNRc1Houj9Djp1KjYW4tZVS4j9cirRf6dTCaQKXtXPoEiJqQ4dRRm8GBXmgFbfuhi5n",
  "key23": "2igUpvG5it2jXYCK4K2qvvNp36y2E9M7JkZ4nQHAinHv6LHWA72TEwgWVa5CdvueM3PQ12hE9SFEjh1bZ2KSuJx",
  "key24": "2hfhyQ77CoyoyXApWz46kfiCnoNY16m5pfUYzLB1bKmd8qZ6sr1TxwVfimfoS9b3rsZce2Md5hkRGVMtCSGrqjJ6",
  "key25": "23DXoCC2hM5NF819VTM4RgjevzASYsH3ZSV7kunRSa8GcsQfrkbb1g8DqBhBWVSjEcmEghEHwnti1VaHKhQgNVoj",
  "key26": "5p29PDEhht6xrnh7MKUVJowS96nghwjwDpHWRTJhzCRSBF68S1ib6tVDCfpt9mzMHU75CJuiB5QpCAkC7jyzjDZd",
  "key27": "3GsGcYAuUKoSEgaVVM8GuTZH43dHkyisSs3SWMo6rC5cqv9VUFMDJBn364UCnPxMoRVsV67yX9XVVSmwxAjupXMK",
  "key28": "4fSgA8gA9GEDKvG7msJPZ6gUwZFfkUAqfT3sXXL37pKjDsY8ThKZg7hxXQ9GgBGmV1iNh1ZLnwwCMFtvwz8244Fw",
  "key29": "34vMvC6ZTn37ZbuvpQkWWa5orgFtcgRhBmsuMM2fmouWxkKTFJBLMcVtGywpHzcovbbYjHxJSKpdCxvedQVLvvQF",
  "key30": "5UzLE4REN16PHmbFtmfwaEH2gWihpznN47MBAaBGuuEF195MjZG2HTqrJaqAcYYBYsDNCUrLhABKefqFEp37hiK2",
  "key31": "2UbqJiz89GGXZcG6o6zs9rumRkyxdpXahqrPd9YZTMmxZz8yZY86RnAQPp2sio7BDXdjq5LGbwzZRaWJSurLrzmG",
  "key32": "3wMXiV47nptCxvKnSne1Pd6Z8RuV7KgRmbFfq2jLby9QEz5Q4g7SfpXBRs3EVyCyCXJr5SkFnEFoQbEz4F6E3yMB",
  "key33": "3NJGbMEQrRgGKVSrFv43PowUwinFwVRmLK6vUfA9QcSwjwXYrfYYr5C5Pm7wYSRTPpnfj1nfiHwpwN6QN1iKu9h1",
  "key34": "3UMaCzakxLYaKeoccBnXn3b5SNvZonnzBj7cyjGzzUFcpbojyxDCvxLakVYF2nKafNMwf8ye35WywsPCyzoYt4mv",
  "key35": "39q2c5G4tXKoGCYAN3jXwj92rbKj5sMW5kXFybQ6Lk67xTb8JiSQekch1Ft1sLVYXZM9GioRG7EcGrc8wUuTnUAc"
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
