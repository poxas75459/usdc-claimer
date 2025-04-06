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
    "4AMqQjqs8BrKkx2kGSwwpboprTiRi5QZBPPZD334KNxMQWGRK7kho3372MaudLBKoEJDWDnCYdWGekzf5nS5EriQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aQ9TykWKdw3VL8YPsVx2Xz7gH2gR4yURE8SMuTzoDFb4cuzFUAEeL6bA7GfTWaYgjkpubb8DhRGAXxFVXzjLj4x",
  "key1": "5NHKDNCrKQPjAdS3MUDmveWZoHNQPyBjuSw56gYRzS5qpDB8wyG8hw4dx5yTy3JwEeT4CmUTmuVdNsVRwZG3GZFw",
  "key2": "3jVJYbyNNH1jU9QjtXp8oZPEWwYCe1qNgpkUG3L3gpVty9HnUWm4efpcW7EHnNd9gkrKcXCo6iAjEHc9GQcb1tyi",
  "key3": "AmNWNkVYXWiYWadYj7PCbbqBh6GPig4Ap6bwXMpkaWGs2kv7ykoGQqEetUiA8bGNNgZmfF6Ez1b9Jmc6D3k5mc9",
  "key4": "4818jg1dV3z4GYgqweAg8aNwiSKDah5JgRSeNP6Umvf8jbr9WbLFqnKKayHFqevjziS3QiR9JPzwaxZ8oBauizxx",
  "key5": "4TvDRaj3EBqsRkFo9Y1maa49B8SNUBAeFebW738BmdeDcXkvnhZ2Qd9YEocXC8Cf3FVpYBGspp96oKBNZStsZxpP",
  "key6": "2qYKVHvaSwYqabC2i8SE7s5nCRh5ntawAFoTRCDYvL1nycDFfAeqm6WgNG6mk8a2hGj98YqiXiLhiSiH7doAiWtn",
  "key7": "4YeuGgNWcTirdaEaqErDfbH6j6csFfKEqQUoxcAoBiVDhHLVSJKRATnvjkEHNymSELGSRayUo3Sq53DxSTfkwtms",
  "key8": "4KiyYjkkhgnxk2zJgfPHtsonFRbN3dDHy4USeL4Skoiegc7aTx95iuMj4bVRMw7MPUdjjx7Mebzzcvnw9LxxzR8q",
  "key9": "559e6tGpUPWqUuyYUwEUDwwCHCLhe3VFJxZJvttgsF2HwM3p1mmbwWXx856xsxRx9VAWgvy5hHSf26h1351BAuuy",
  "key10": "R7ssftLJ1dABEF1UCNn1rPkTQeMTdPKRa3EUNuv3qkqGR8hyEVCVp2RjDeZmbEPkQ4Rk91PHU25Q2Sey33kNoqU",
  "key11": "3yXurW5AoFGdutqhNLkDExUdqWYjMEYxJpT2Tei5MRHN2gk9TVFA354W51fZPcWhjgyKGsJnFJ23EJrrt9CTRe1g",
  "key12": "2B8xfSoB7C2jiiSx7QqrmtJkzY4AvDvgmcbHAawGhPwgpDkFbiA8FRg9bdoRoizT5kodAHSC4eo6K1cTPPvy9jsV",
  "key13": "3gb971RkVnaVwdpz4qCe2fV4yETpH2h5rLLP1z8DcQoxFdPbfLM4S4Lk5BHEiivDTFQwNX4PkbQy2MuqG26XSKmB",
  "key14": "5PegJJo4xfd2152amDexHQRK8QQ76yjxMTkWfGenJLP5YGYTrzeqkqhHPNb5EH47ckkJkBe64xSfzt39LMteJRw6",
  "key15": "3bGRyWg8fMfzznH4pxUC6SzEDGhmcrYiXJvD3eQvhwVKqW5ueAbWEPRofJKvKqAuNR5EYY7gH1dKwhtetgWPRKNM",
  "key16": "2eoNMYgdNKceHrhkg8MNJoN3s4nEF93mhXA6zBJAqJf8tKnSjcK9aeuETDnwnMk7aa6MsjYgokb2gfCZgyGubJ2u",
  "key17": "34szTYjvUZ26Kz6AV7PPPFynBgrz8qHbEPJKd6Q4bt8Sco99vjA5UryrpLtNE8yPpHjr8eXJ9p3Ue5UEC2LuwcUc",
  "key18": "32jMgFk9SdLDhdgBnQtF5Z17MwWmTGgk8AXV9hStqvFYtgacYPZfPmafRyBhsxfspQQ5VWfZ1RsX4PJ8e39t1HhQ",
  "key19": "ZxMCQPCqcDjFpjAu6G4YQX8XqMYrMuLiF22Dx9LMPbssjwmCNTTEcv4GBusEEbcZJJSNUjASSWsL6kYSSXfX9Cp",
  "key20": "5Vy3mjDLxXgMdihJFToUFpNtucTCLaoEsZSg1f8Ly55kfLPT4hNeYHbzQw3iukQ9F2AVd8LPjT4k5SaKfFBc11WC",
  "key21": "63m9MpNDzNPhM3Gst6j4Lgxk5QSQQoE8cSZZFUYfpztdbGqXGUXpvDmBKc4ZsFeoBjtAtQyQ6NLmQvFaZagHNfvk",
  "key22": "2m9SFhWGjFE8TSMkqvJS8KcnaM5rJBpGZXJFR65ftgtCQwbHubcoUDq2ezpWe3ZeqaQtot8VcREbHzezcgb3Aatw",
  "key23": "5s1iQizYuhShdwURZwAKW4rdmcGbzsd483BSnPU5hSjjNBYQfmTHFNAfXomijEdPSAEVRG6eLV7XHcHsS3ELaVyr",
  "key24": "3jJEeC98V9EdBBhRHJVbtmZz3QKzQQpKYpWb3Ffs5zbwWpu463qK7FwDvB8RT8r31pPyVYSdT1AYt8PxR49LbkfS",
  "key25": "3Ycy7HdCbL9iyVa2eXEq46EoMh4FLQmS685kx6TGWDf4RB7LazBtdG9rVPnW1tEbvm6ekRdJYy3iCPWSSBiFDgY4",
  "key26": "4cFUubFYSaFNHjn1Ewy1B3XyN8Z277zg6Vz4HfXDupoUBNNWoouptRRL89NyFoZT95HtouxKPAg9GBvxx5HtWUq3",
  "key27": "5KcACD7UCWsHNMPuhAoJLqbSZQGMoHAkNqyvvbxZBpyy3vE7pwmrBdATq69aabSVr6Lys1uDjeXTPKBVXYDvrnor",
  "key28": "2MBzzPRQ3AsHddayTCRKTpwBCgtyffzCQKB1oMtDY4gMeVWg17dt7iNug8U8LoCo9eDs2A58K6QJDEfQb6xRkCPA",
  "key29": "64eoX2E3YHYrVYGrjhAwRTbdyyiFQS2LcZnUzMQDoZrtWa9BYBdGGJ7hALQNtksAdGHm4RWrP38FuMPJVkZz7iiH"
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
