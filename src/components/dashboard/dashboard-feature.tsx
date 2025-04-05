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
    "bd1u6uqiw9AQsAWoJam8Xoi12sCRHSS3BXC4peoMEi33VTsZMNFVTKfDjTPHuZERq7oQQ4xmoeYiGsRmu9BuFm2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64Y6gi2z2P3kdn5cmm6dgBhJgMKdDw7iKBpQ1jQAjzYL8tuUSa91CofhbuH6r86ne6Gthoed3aDBASU9Njrm2ufJ",
  "key1": "4iqNebhtMEBt8u3ge88CXAeZuFv8xi6pNr2rLmatHuT6KJCDYB4nN4QNeZXtoGHGHjCxFsczw7fw7yQuFzC84yb3",
  "key2": "4ssy5MB4VWPAcDjGumURnSHjxSSuGsnGAKHHqXq8ov6cHgpipHWnGBWRBCntmcGMJ1jc51vj4jZNEykbpDodUFEg",
  "key3": "rZes9y69BhPiTWu3fs3rgwE6PBXu5dxeUacR5UfcrJqRfRMRfE1ar5j3xX3hidJbzGbUvT9CMWnR7bVyZsLqPXc",
  "key4": "2KjwDBp1ShYj18zXzUmuc1tsbT46QoYFz6mP2MRzZ6t1oiVQe2WsV9FyPywgpniYXgU9bAdDe4Atmm1BSQ93T8MQ",
  "key5": "4z7ei6ymKjHx2t8sEYjSdyvH26xHR6uTzwpR41LuzYDBvUAzP3Nqm8g49eLMZEGDWpzQrBGH9eKYr9UGp3qw79sM",
  "key6": "5s9RYxwuPemAXo1zA8eLGwupczdnQ3jGX1RPuuuWnyc6oNQEG59KqtRZWhSF3J9ZixrcV2SK2cFmaGNNtXXZBjXr",
  "key7": "TSoyN8fq7JX3hpHGyzWffYWTcLZyjKJNV5URZvsGNh1Pd8wPmUqChKD8fu5Z93qy44zCvGjUbD54GMECrENRULr",
  "key8": "3P1D79LxXFWotDhaxTLHJ33uxJQbi9y4MrjVMsZ9LN3qMoHVrxrA1SjbCg57JASoRXWfz6sff1z2Mt4s5tL36cp3",
  "key9": "4S76uaJJ6LQzb9dcsb6DLLqhYpyKx6vjzQrbh4Jet4rCy7enDRJLQ8Wr5MwWQ9g75JokKhf9ZZSiNaLXodimNfU8",
  "key10": "5jpGGgLcHZNkNTkZUVwxnPS51h9ZYfZ775e8GANAgeqJeYJnMiHoowCtdpsFV2aUQkMo6HRoNiYftg37bTX25JW2",
  "key11": "2tgnZ3rL5SbGiiEPpL4QbtheBwATFzcyqvFAMUUpJsTvcRfoev4Nide8EBxtaecju4RazeKfA4YMhpXisUbKDNUM",
  "key12": "5dcLQ5WFK7Dikh4eyh8MTiVmcsQuV7tR6jyahYUP1NNaHWVMztzgJWT3QtDTzs96jeZFs3ryGDeRMPmmDbe4RyJ",
  "key13": "3fC4zC3uRiznH8jefjQaduL8rAjYEiHQCdvNcjnpwiw42YkPhC6S2L3Y1Bvn9NEn1DAuwE9MS4CjdJeA5gr2W9WP",
  "key14": "4eJbL5YJLYPhdPnSt71PcUhEzvLa73d8gz8su3sgyn8xGfRqECqxXmzdKACjnFayv1YdxE4kw442vvg2jBrtkACY",
  "key15": "3xnNmhWsa9iQFFBrtrhtN7oRxyhf5KyvxnTXHWLspLDdq74PzTA1NLvPgvDHCqr8ydkpQp9Qd23GY7nsBTJozMyv",
  "key16": "2nK4szWQQXCxcGQ1ZUPHQEk19XBhSxnNxvVwFzC36ohYZK47AfqUnm5hbzLXs9g75js8DGigaUeQJ8n7U1NWsGXC",
  "key17": "3x9dcfTzXJMV7dcJni48AUKt5THwfrRjajdB6bysTFFLxJbL2LyCCNMBKmY5QbgeEtK1FnbnAZ1nYpBaVQHkT44C",
  "key18": "2DpdqiNgWdkWwaBEFHLTvaZ3Rrk8m8cmVA3LdBrYfAeDLWEttkHhyLSPurRgg5G3N95ZpBGSzRAPtum27BhBiwEP",
  "key19": "3WqJTt8fZUyVDpFvRZeZZD26KBmziWSvC4ecanjQjsRLu6bj1vvme8qmgw1yURApuzd662GMTjbRRsKbSb1BLQVY",
  "key20": "5HWhCLh2estKX4iDf4Ld6VxVL9eixUmW7qaLhUzMH3o1YEUkB5EUJyU9WUccPdcvVRKZajYY88eTSFmaAiat9rWm",
  "key21": "4UaCTtaGiB8SQfPhdNJfYzyt1UEFUALjjhK3G7qNZU8jmbbNED66hbVZZ9Yj6dohBZ2kDVCjpqrkWXwmpH5fbUCV",
  "key22": "4s5naNuTTqrvPtHsivPAG46wxnwwaUxRUXWcDN6FnW4mTkNFUhMm47tyEyAueh3ofv4w1jP9Hg8c5uea8ZvWoYTj",
  "key23": "2YyhwNW9Pavqzk9xwQ6sRHufh3H6wxQfu9A2dPGhtYh5SEhMS86wzsCd6N1DtFPLZbjAG2SzkbT89puou3GZLVqh",
  "key24": "xTq4F8otZy7HUXQYqXjEmCs7hwP1BoN77ZjdeBs9mvWqJL1qXuBADqQwn546gHEKRpkNHw4iiASGRXyHg4CN6TF"
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
