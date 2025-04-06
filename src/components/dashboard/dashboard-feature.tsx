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
    "4JAMbdkddwEvehw49BLddAUgBJHJxo99R255S2cXbpNV1F2Fo8fkPR8T7Fnmru6ax3Yx1zwzs4fC4fmTRGnUkTgs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RjBZsXxgVwgNuZHeAdJJkH1ddJaHq1SMrKP3YVBc9yMP6RHHuXEfbcdP4PznGd9asXUNN8BJNxCP14HY72PP8RF",
  "key1": "4hoBTaUcDtVf6vcb2bS8Ma1fEtTboH71XPbnMboaouqkVn9umxNpQY8ntQguoURrzGTs9pgahEHuRKBzpKQqhvpz",
  "key2": "gGQkuRNVL36rfwC5Mpzqx21CTbYaDZicdqSrKm9ezZCWhJipLoCJbdBgH1ZfKj1BrfUt35PqTMphXtMMpLjhhZq",
  "key3": "72gwks5FHCfyS2nZtGEQXM14XUgTL3yNpo2tzA3Ty6K2HPMiurmpKqX6NZfwKuDXuojhPJLmP6cp3srXjP36WVY",
  "key4": "2q7ToUYzewTsk672cpsiCcbR23pKYhCR95XxAd8p1BUZZHZrKKjmyU7XSS4nz2pmsPMgYjLvTRopgky3zPkuvAq2",
  "key5": "3FeeS7f57VTWNvcANjpc4GH4pRU4a8cWwrLqHViNiEEmbbNS5AaGFGwJyMi4jMUKJWR4vRPzhN9KiFbNXn3tbG6V",
  "key6": "4g6aeXqdbLJikEgj2y3niCgt91hApLLDZtyvYhiuAo1sE2mDcu3Jk3hX246GN7qKyQtLicrZGtBXMBm6yg65K3xc",
  "key7": "5rC7kMxsSGJyM7FCP5dFYUvWChiwDiXnbisfBLgZjxRHeMidabhecKZKrTghKqsjWS7mYySL2TddZGMKuHV5raWM",
  "key8": "4i5BFtXmgz6z6f1qARc1e1Agxo5uERt42dWA3763jakW9UUPNCWhZeP396MNHuHnQC3T6MLhKzKdr13xZvokRN3C",
  "key9": "57upBtgY4z4Vg3EzZtE4VexpaYN7KfBJ6YW3Cvgf3nd2SAsMmKvr1gzgmdY8dbu5vmUdVxs1Tkc9avkCt4jwtAtd",
  "key10": "51cvXDeJx9s2EKtD4Z2jBRvCKE3dthEucARVSa5HSh5FGuMfH1WBMX8N9powhMG7ZBCdYknPgLyTukCKwLx6RW9V",
  "key11": "2nqp8r8prUCfADqbJh3EKzess8hU8SPCLzi4QBTaaumyNiMAQTBcjmnXYKkX1RFZfo1Toqfv9ERGDfLDzFfc1Mva",
  "key12": "5mhpvBsyutAmAgTLA9B6qyLfYtZoakswjzwDGCFanNySe6zotNBv9BwqBW9LP8hGbVvaGbBJE9tZMEP78ngySCzx",
  "key13": "54FX8B1KTrjsDyqK1JzQvXu6tX9CrG7SrBANc6UHhuu4Y4y9qrCypygCgkyFpLMKhqNo1BDox4VPcf1PZtTi45nU",
  "key14": "5YbkASh5aevDKSmKTknvn451DT92fVWAfyhNezm3gsLht8oFdAPZUvx66QP6iyU1jWxuCqQaJZYLbVF4qTTTuasE",
  "key15": "5GiEbSYWJT7mfvaaEKrK4AbgU5YUmFgbH7EuFPknXWHSVh1r4rVJjvD58PhphKPRbkKiPtimFUBsjEG91cm9UTX8",
  "key16": "24ZLW8pLGvsJUzqyZ9F5GkL46CnpYNDehY5UwUpUGy6VNrjHn8UzXAGwp45zP5vQdwTGpastkBHL1HBLeqMvuP7i",
  "key17": "2DVRS17RTrKTS45BuheD2eLrrgaLiUrgtWZm5KDh16GqCvModN6be9ocbesXXzX89tWiQBE6cpE1B6qzGD5f77tS",
  "key18": "4pBZjMP7QwcS6xkeKingGzViwdQafg8zo8Qg7wM6mXYXLdTVXYJv8BddQu7mjSt3hFmE9PhPuVVDdctEhKAn71oX",
  "key19": "5bxaThG9o22L4wAmMJKSxScLGuXCbSAqBsHzRXjs8HAw3N6fF9V5v7LMxtZH71sEz7V2FvUYfvfVDzLM5NmjmXGY",
  "key20": "3FgiyvvBKhJx1mPSaY1SVv2F6kHTAouxKvLTZsz7q9Zx5wiGCMU5nukeVNtUHbJRGxVtBQQcncGAAPA4ASxHKxyo",
  "key21": "4SBCAzJLoHhmpzUUvQPsdNA9N5k9XatDMibWjVDuxr3anbHQBQDYAwSp4zGRRBvQvrsrRqR2b7g9zJceuMe5WgBJ",
  "key22": "4wEQLqrFGniUnyanxpNGC2c46wwGJWPiiZWeZZ6Kcwh6V9X5B35HeLRSBBHhQA4TmEv979LnAbheX99Z3kY7fMzP",
  "key23": "2FfyoE6QgoRfaVgMMo84hHPziqwzxWG1msVrzjYXBGWufDt1v75MnCY8RWPAe6FLuqEAiAx7CxL8CLC6kUY22tTt",
  "key24": "656fREnde6bWCpMoSQQiNDZSky4DaRSJFnqvkLWDekNMEZpRmAeDxDNUi2P7CasYQRe6obZKy4nysM2DVe261yBe",
  "key25": "4mmbcdSsELpcVd2wzZcBiQ1QnU4uaYCQC4ndw9vgAyGuEufYxxrF7PxtdSJXzf6TahWgWn5jCTbW4zvQJ9ui3XHj",
  "key26": "kjfrYoF9tij1duJbv23oq774BUAM8yNvzuU9kghqHsxR32B3XSc1QYz8DoKYpeYK3yMAo1kiWsb5x2taxnzLHFp",
  "key27": "4zUpxnkNssNNfVjR8wfHKBmnMUktKDMHmetMg39TWkboLyMg68zAgaXqNwDsuj9q2Y3y7JeegFLocsdbXuao4E1y",
  "key28": "2fcjcphGq2NB51SzvE8JSrGbsVg9Q1WVVw34xsXo7EBQwieoBHHQbmFimKM1BsYjhmqpR1Wf3xXJ3PFzi28C2jPt",
  "key29": "5osKeRwTTAoAGb2S78Uy5snNNYh7QBiYKh4eGYqQpN8yJrVcBD5AjcmK4y4FL9FeG7CB6Fosf4cMVHtnPrBDi4YV",
  "key30": "4mtFH96vhE2JTvgxD7AMdLZ2uyAqJVAoiti2a5oMqtp4X5NTbwpygMAMjEVyvDdQm2o7rXQZVtFadipyR34prJCD",
  "key31": "3ZnsZpu63ffrzQR9WEyWrKrJzgzaJ5DDUHv16frHgqKRE7k1ghnxftWUXQaDHFhUTnBmPUNnEZeQGBBsEytAHH8g"
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
