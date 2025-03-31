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
    "2D5obQEVbcQZQk4mKbXsMbzNKKceUaepGsXbYzbXfYeXCEjKGHVRxRgUoBxdtFoEoZ7P6xvtWx2paji7iJdFxGMU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61jDzHjAwPobFhB9zWQicarcKkjvZEaTH759DgYub34mEwUqNBXL6rdfSbx51ij7LhdpWEJ6gkiSjHp6fSJT7DV1",
  "key1": "t8Lr9BkMVSAK66QsEvXsMNLq9RPFiH55jfUbcWx3hwTJVRgsURNr1E6iKywFBdygXp2eqqfLmqiXkbVGFf9bwY5",
  "key2": "4Ky7ECccDYJQD2eXTJXczQvWaiwq6jKwALCViJbUczpepEHxWvtvcTxN5BTbW7qaiTfALgBLJggKg8ySKjTNwLH3",
  "key3": "47ByhSYNhqGTNHy12U3zBf6NzsscB7F9qdytwL4EAfNgmFTWJSp3kvfBdLXeywb1qFxFQsYPH9gzhuooxqKTRyhD",
  "key4": "ac1eCD1wkP7DqTfcvF59wt9He1XKpgZDj9uJDiRgYDA9WbbMGE9NrbVAHHnLm55n2HQqfJKruwTr7ueLWEPaiUb",
  "key5": "3kRhqqotKoQ2HMvkJBp9aBR1FzZKkcb6j4gxV8Tcenh5TA5p7fo4GZ4CYcdkhj6EzgYfHBcNy9WtTarB2ezc9jHF",
  "key6": "4VvLqfa8eC8nUvbGBf8ZBUtKneTVWnDdE1YkxTMpJBbqayazhWsnjPjUrQjFf87L64KaBbKWNse5x9vhKhdPvFdb",
  "key7": "3NXRtWNiuXMArVH8CfejEaCXuFEXhoqj2Gt83tQxrRM1RMqeaS1Et8CCZpRLroimtCt5Fmp5tTFrzfNpfMQRqEyQ",
  "key8": "4U3YzB7cfrs1Kcd8BrFf1aeDAQbeV3EUva6GXzUQrrdM66wSP5g4E2YMKTqjZSPfadfgfAFcZq57Q8z8sGvYWiJZ",
  "key9": "5aL8WbjjEDzdgQTUHf855Xk2cRWj3qcZvaDSDVR7sAB2yzPmJVKc32d1jQWeYHb5GyysETwcv89LWdV4RaCJhyYM",
  "key10": "2B94AbtoDpjGNoANXA7Mj9buXAc1Htc2ZdzYEtP38fv8B3fZHpGVzoyKrRXhipg8rR6t7uZvgn4W8Bu1Hnu4TGuX",
  "key11": "38pwpkdQg8p2S6rX9Br92brp8mq3xsKEhyxw5DH3KGSda9h932behxA1r7wh25NCspPGgHMvE9GgSrHKWro59xaN",
  "key12": "QhFvmzNQ69fZbcdZM6jTvJdbYX8FkWdVmvqXj7F5t4cLgoMjVKgEDcyFtHs5BmRYJAuaRYkhZduveXYThGKXQvK",
  "key13": "26GxEsV8etnJTTqftxckBnLEch8z4U9dpNFHJdezoEZPc3bbNpcbNpZU1aL6C9gRB4TkPepUACV7pFxjnhc1yESg",
  "key14": "5eoNBAvNGEqREDG4YFdaiPhfL2WX84YxK13YhAoBwYu4W5k9oLxhcZyXLtzLKyyqP8PgWQ6pWr6iiRHBeEPaJbHb",
  "key15": "5SGC5yVGjUnH9MmKUvfUjuMTVsshcxUnvmCpeDg4zFGpkzwKZd9UoYkbnExsyvGdfdMdjHSdEk3rANUaYWMueDzq",
  "key16": "tKeSJXkpkZNQHHYHmXcCCGZmV7R9EpXs66DrGjoWsTP2aEkY5NF26U1GzHkq94cVGZgCZqKJRbrYiJC56n3EPpc",
  "key17": "3gasMDctGvsUkeQKZurebpwwzxfYnACtoZZgHsiguWLCPNsgqZ4J5TFdbfqu93iTAeyCbpLAwt6nyDtz8CNK2ceh",
  "key18": "9ApnsXrnqk2hRZ381S37WgjcnFpMTJbEPEMFDZ1KmvxmpE1jsvEk4iP4SZbM9SSs4Zy3v8XrcK5s92p2n111uz9",
  "key19": "55R9fXCVvRnbdMGAq6yhpXrYofjxv4jDGdhN2SZSS48ZyfoKGUfbr5iUKDUoPfnSQZ1hky5ZwnrGANGDb2Dd8eFc",
  "key20": "4kwYJd7pCgGnpDXK2F9CBD9gqqhWDA14jfNX9qfH26Pt1x8jF4ohpGaJScprdHWbWoo1UJa2jdnkbPr2jNmUxmb2",
  "key21": "4cipAVDMruvbwk8sASjxoHnVx7gJKfS2gLNT79mXkczz7FRKbLGjnyWaUMaRDdjLxVNVvGYWuXnabuNBMozbhtLz",
  "key22": "5fqC2Hg2uW43xYn1nftJeLiAgtLuVinS1eCY4bA8viWPqYubsKoC6K2xU8skDh2NPdZ8JKeeZYFT4q6QygNuLjB2",
  "key23": "rZ7CSsKrUHtwfY4b3nm9EM6gqTj5gH79kZyQr5DqmongvXmNQUQ2Umn6UCN6apnSDa7H2bcUiQjeiKHusEcqbGE",
  "key24": "aEm2PdD63gu9mVWUU3Mdpbhy2iy94DsqceQRrNJjV9jEpyBD7yLF8ZmmcEmU5qi6VHRsQRfZpmscsFNZg6bv9Fb",
  "key25": "3nTowRbVrnU6cVBcpuuycNEZdmeriFL792Bzk5rZ5yNM5oDCpo1PassSPD3kuXXmbYdTCWFa8rUckoAt4YHsocGJ",
  "key26": "22AWziRWYDvkbvimAntx33pkjMTZBQ19Mfh1EgxeZGi3SCxwZbxA7f1sYnAGieLdJH8r9sPhxeKqZeFemSFGQHoM",
  "key27": "4btp9dySVAxxCA8cxLM245WqWpa9ntw87EgTqGUsiWLvcUGou16ibZBaAQu2jYYDihQAX3wwhZmDm7AsfBaUt1U9",
  "key28": "2x1SwbfcRqNLnz8QdK5h6CdEteAUbgJCNisG7ZDmGYyHswLgKcajJLWytSJcJaDhCHFP9RBaU2dLf4uRbTDnFHva",
  "key29": "5yypdu53TUbYd21q8EVfR6vnzJ5ax6Demb2HmnVcpjvSr2BuWP2cpXzet4m2y2sYQg26Y2jQNFR3CHGKAZeRnVCV"
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
