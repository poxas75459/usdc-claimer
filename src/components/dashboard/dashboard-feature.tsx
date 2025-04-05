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
    "21WnL6JwfygCqYXN6d3aUPJNtWKpKfPydXiib8kimUWzExK2USYMEAT29WAAcRw2uCEFfpSG47AD1ENn69YQwEz1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4avMgBvobfR7QqdPK4yQfK4ocXQ2VfLvwkJ6BC66cPvGtyPQhqSQ5fqE1tff3E2iv9i49m2AhHQTHyiMdxkurRgZ",
  "key1": "5WrDArck429jvhsx6EaoC26jJjaGwEna3UJxxpMdx8NCaJcfBERSkwb5eYZ3Hb4io7a3HjfGPMk77JhVLoQPRD63",
  "key2": "4Vfhb56U7mX2CsmtFYFRbp9cn7VXA6WdhiNp8Q2GDauDyQcTgD1ih6zoRnc9sTzgebFEGGVJAmaUpufv8w2C9DD6",
  "key3": "2qCzC4c4FWXZD3tDMus5k6TP5472WRUehvKPN5dxNEQKt45tGxGTTPrChDBfVLbpppc2LubdcJZYxKcQEqF1hxHp",
  "key4": "kg8WQW9v1TYhK8sPaboTfinnx7Y1soLMDrPiVtxYbNCy3yFPwh4MeYfmMRnUJpwojhab5jE3HVGoQ6h8dJBvRKT",
  "key5": "5x4RPyehmH2BXL31LwA7n6pP2dTea6q3TNdAU5g4qYW5RfuZJPAZ2S4NEEdvLAniPa2bYzC4YngLEtnXXUCvRJjL",
  "key6": "5pNXJFbcJs6nCHH918g3wrqUg684qYMgKwzkcuSrRZvbYGHxNqK4AsnsYutV48RYUMXw5vFiuCzgTo9rqyqdAds8",
  "key7": "JH5NZyBpzTQsbY1oFyZo6zdKYzwZ7M2agPuBxTiLGVMEWH7CNjEGGrcKm7g8Q1DKcw7H8vQrkWkvE6K7WdBnEra",
  "key8": "43So7pPusEC7xS9bAxd8pffZw4HvDF15w4PesiesnsHRDuWQWaiDVDNSm1tAxWa5prX3hxEkidT55yQRTqjEenvt",
  "key9": "2KKmqcJHfFb4UX5Mbxp2JPiMChkdHM567vq9FZunyiRL2bcxTadr86Wzozmi16de65hiWWBZNP7xaDTmBuopZDVU",
  "key10": "5dwrkh4W4JoSSQuFJ7u6SWx9xPKqE4x5RZodHMhgEW5SrxLtMq4wdSwQ2b7QGfhY81Vrcc2V63iCqDs7zTWLg1mH",
  "key11": "4tkFndZH7FX1aG2hVWGmKeJkBFWPKzAJPPsMVuxvaTzGYyKceXD4enYjrbSBBpCLQwU8jANfTGzbBTLLwfymzPdY",
  "key12": "jYHVd9wompgQT37svTjYGEv6XrjfRp9MNENuAL29yg31q6pB7L5djC8GqzjhQ12uHrQAHxDxHkkYpZtagxbBKbJ",
  "key13": "wzNnA2THiAMkePC5cdvtMQwzpzymVSHLrTcxMtmpv8PUgKyc84EhYmndtH8bytUyRPDuDeavu1dViD5meuEmsxK",
  "key14": "62fffaDvNZzd3xsnmnkJBJJkfFUysBeRkHQNPLmFaEBgTaT44QUxHMRednJbrcZ4Njcr34tSKJm6uFNnoWUexYfD",
  "key15": "52uiSiFEkkjvdY2QAMyTFqwuhbi2hro3NCeTS7wB73zUy8wTKTQTB4wjcaEgR4fDF15PFp3mC9NkbeFDpzPDWbu2",
  "key16": "3v9EFQa4FAFJtSTA2jE1rrkM8q4iKoT1kLKDW33jT2sgxcwYo9XTAZisSSU2uZhjGbR22RNvZywtt9g7jWUx6Lft",
  "key17": "4c8Nz3jHiVmSAUHDzXGEpnfJZets9dy2VsXJ6u2pysbEjppuv7bsr1FdEkPW1vS2BrZR7XZEjbfAnz7gXAE5km2L",
  "key18": "63Sk1VHQeCFPDJeVQkaMvocDr4VtowX2TFZsqAHSjBav68ixjTGgpAhxdEURmyksaYTgqsRBjfyRxk6KnXettnR8",
  "key19": "5RrUsRLMNW9ueZ3HUs5bLChQPsfpr8tk6rjD531uR3i6noY57Ffvh4zrQDEx2mBm1WwMpCtzezCX14i1kacS8xD9",
  "key20": "4hEQ9T3F9gtHFM9nEACG8N8hdXp1DMbMiHxsEEejTe9kaSPUqpK9uNKvBKgcUzzSg1Y24H6FFvZKsMn1beopcJJL",
  "key21": "3n5CtP59xafQVz4niaUCuFJETuU3PDGPGfs3z8Lg4bxEAPmsS1ea46sa71imptovrhKidCoKz7aQkHfncHQuFrNZ",
  "key22": "5VaP2avbQ4ajBqQwpPFPBWXoS1YZr13HUH2dzuy4QC4d6JHjStAvEXbkTUTZDV75RHm8J1JawdQVho6RLrxnZZod",
  "key23": "3WZwD7wM9MvnFKjt7prGYdvr8vGrzGCHqwLYX3xHsze93aWFNEG89y16dibngTVLot7Yx2XaTVUP1T4QWsMJMSE3",
  "key24": "2gXQexADg1o55U3KbV4mxzTCooxKLoCRGXrAKcbDyavGhEuFmMjBkc9Q8jELkepQM2A5P9xW32MpcBgSNQjiN1DE"
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
