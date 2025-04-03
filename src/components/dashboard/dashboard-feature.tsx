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
    "5NCX1mJNbD16QsbKBC7XM6hAKPjAQAEGnGc2AmT3XSLWQBfWmr2FtWgwbnKtuKszisNn6mNfj8CM6mm8NeeGzd59"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JwidENa5GcYJqS65vYjnD5CFgCCceqxZnkSfJvufXHqXAbx7LMZYYmBWTnrP3EPj7wiGJkAYdTE2tdrSswpgUeF",
  "key1": "3mgTUfQvXQEeS9kirng7sZ8HL56agtkPYPXGdDXE9LKcepvbewDVFytZ5NT4vZTo8ubG8cLBUbq65ggC4zgrGrQS",
  "key2": "5Ndb331dr6y6GXhLnjPCnv83NdWyBDwo27BGh1jvTkSvYcAJX6LMA6npEv9geCMqhjAvgTHQfR5HRC7kA4tN5D8D",
  "key3": "2LbktCiNQLYMecbvbGvdTZ4itvWYPrR2dkuX1o5nDKhJPWHTag2ShqbWJB542YPRvgQKGJ9EqL84SBLJatLJAXRU",
  "key4": "27hR6sw4vqxkdKaUZuLLEusbswpHa3N3gromNMFob9RtutXjp9FKtiX4iEqPKmoA31aGUNKcjMosJdHZD4BMYe15",
  "key5": "2q3tdMBdBCNXqgQmDkPfFgevYEcPA6zMrsNU6dDrEo3WFv1avQ7NxfnzkzT9kUnwWpoQgA6t32rF5tkqk68sPppf",
  "key6": "4CCv5nN48wJey28cddM4JFkro8a8SW9QBkeJ75hqczxxhAMYbmDRCKpUR4xjwycTSUn6JX6CSZHTYBEC2tnT586n",
  "key7": "2DRF2WSkcvRhtoBrZ9LRqinvQFygr4nrX6gm5Q6QKwyS5W8gYEvKucbWc79LaeADVm1UjXfJoqTp3MYmE5izEqLJ",
  "key8": "1fCoyu27HsNwixo33aYTzquMaB7joTy6fC2G6hQ5jgbJDdyPc3pAvBFKgei74C6vDhnTHkEYV9fRdMyHKuYCBag",
  "key9": "5yy5cvUzR8MKCZqhKMhec5enrbfhQXLG7TCaHwQgoCzcCJ9J4uLYZu4E3CmSzqXVYYxhQ87disNT3URzVD4kQw7b",
  "key10": "5dwfnMQKWjSZi6dkwWP7nLea6gixrGumKT26R2J9myQGB4RC73Bfeb29VC3rPzPv72dsfPeNvu4gfRsQD9pwic6P",
  "key11": "iuRdWRudKagviUsYoEdQxSeFT9Cp1QJ1dzCtAM5jr76ey9SiCyrfwkZB5yeY8x3fvyspyE1PdyQZRj6opGRZQjK",
  "key12": "L1nBMVVAC5n16sXXcWrj9gDNrPgbMGyUYiCHjXHRxr4k4gGy69uwS3fjrQwpzKhZtf2vCzDpTkT3Q82pguWiNwZ",
  "key13": "2p61znuGfxpgrJ7KQ7smzFJkburfrW7UrX3qHjGmgjepqqnU43AvyD8MDP2Ui6eWAACx16MFbzumM24VhA8YLAmj",
  "key14": "5vbQFqrGfTQJVF4DvtNmvBupFcoc6twrcEpwEmG6Wrw9vVaA4K54ajtd5R6xV36p9EM8wAVaPx1nJHLTLsh1uVfY",
  "key15": "2jWQ3VQtZojavq6W3cYP5cDGpZVpcnfJYgTfwUjD1hMchWs81rnSE6M29YC1XCXkmE8AGekYkTyDsnzpzw3Pf8yB",
  "key16": "3Joivm8WPzfvGXcSB7t4RSU3P9rcjuWJhW1L1ccgdrWdqrvvesUNxxHPjm6D31kxVSaVJfyJmfvyLjPWRVCFdVi5",
  "key17": "4yn1is5dmZ9d4CACKuYSJf6eXBmf1adx2tDwEMXGW9PT2YubVD5zGTTHNBrrpKLPii9cLexK9amwKMEWEL1GPV8J",
  "key18": "G9muSZEt9r5si6TN3MQKXrbCintDkZ4XHWpXyDnZkeMfP46eqzfcMgnarUzDxDoXd1hoCnNBoFvRchDmbQvENuL",
  "key19": "2HKgaGydnKtVTpmoyTFE9k3ciCx4p1fihTNDQHxGVFBegQwggrL25xt3rxAL6JhtEGvZAn7d3ZnVkvFq8rEuAVER",
  "key20": "5TdofQpV3qY1Z1GHr8dKdfCEWf5Ynsfw57z5T4W9E75jcs99Rns4CT4LnizVCxpwXEptv9xgTuLDnPZQ5BgCoKm4",
  "key21": "2zXisNc2vtXPfkUe3q55d9kYn7iNuEm4Leu8RmFjmChakfNJ6p4j44RXfaP9dKJie2G8rLAVUqtLN3keM3Wisa3Z",
  "key22": "332yJFHt4k4aYxB3Hy5HgngDRvDrgoBGBLhxH2jJhQjEyJkzBZzMhcRTwQqgpPJ4nDwq4V4Kg6Kx3jEz1cUFRnNa",
  "key23": "5YCXN8vHTds7DsThuiXB5R7mwFJeKnnFw68tVXefc6u8hE57XmrfKF8QrEJjKG2nGNbhioXteN68gLjNgPhrM97G",
  "key24": "xRJvbMKFw7dfWNEKGEGZDBwfL8jAgdYGZYpjoJ4AcLsLuLNgJZW8nNyaFXiN2GRhoh3BQ7BsfcC1u6HfGwQMRXX",
  "key25": "6338hjt9xciqA4SrLPfrxJUQojRV8T7dueWmz2nKU1wEJjc9Ee6jGQaven2sF6eFdXUK1hZZ2r16TEM6tkXnXz8x",
  "key26": "3rMBpWwnJuNNG6eoHKBJiqKr4sUCYZEUz7kVnAMBM2x1cWecP55G7QoSmLGkknRAaQy6KZaB6k77pbJbyk1GPw94",
  "key27": "DZ35ppeMiG6oSxEJrbfmnLymzAwT2drpUGAXTGaieartEnXLNrcb6BwQKCEZDms6bnpRnpoTLXz4T26xNJqnuov",
  "key28": "4NLX99fEEdnhZXgbvEjfwwpbfwCjcPgkVsRs3QZL42MsfvWWenUr6Tk4zPjjcXqzprRUeNFDsqkCyRbdRRK6fGiR",
  "key29": "3AAm1twsq5mbAebzXoxiF225MMtSbKSwyFaqmE5MnjdK6n6rMreA5oHKhKbmE1RQJpSdQqzZojPoA4kauuP6nw8Q",
  "key30": "cqZniCujojZrM8mco2uZce7XfM4kFjirBbsH6zcHAJU986hRJE5n2E4ecaFSbB3BkT4zhqxhfkuhmAaattPoUD7"
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
