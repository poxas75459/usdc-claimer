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
    "58ezY2zT87HwbeYyVpN5Gk3tTQkeUzjCJ9jy58ebtoX68G9Hq12XWEDKDMPUXgtCTurDyuD9PGFTYJCY4wSDm6wr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dADwuC1ujpJ45ui4eg37vTYnhV3gwXKuUx7xU9zgtAhYjGWfnsikmj4wnzmw4jffaEnF5Zubf2A51rWoorjHBKg",
  "key1": "2TUG3YNXmatdLQ2MGpQUzCFoK2q83j7kwGMiCn6Q1hYay2niThcgfSaBhGLYJpbNj2QrgiC9diWHh6DSzNgs2Nfa",
  "key2": "3hQvzcPxDAKoBJSoHDRpuDeEfdw7nuuDJK1pBcxVMqx7iGLqVm2oXub8kSs1tvBLKaiiWPL56E6YFqFVjURr52qm",
  "key3": "2jkB4ousBPfasAmUS34NDGmG1i43Lhi1XhN4o649y1JiY3K2T4KRjiLLmEJBpajxA5TRhusZnqLL8rHhdEW5wE5H",
  "key4": "4Gn5eS9GTrPy8isEwmXtSVUqG1onYD4AGWiPwS91rKdSKfDDswqLQmHv9wYkke18v2dac5NbJ4437V5DS2wquyvm",
  "key5": "3x8gWqUHyy84bwahPio9ySV2FdumzPhSwyBA1Z32sXigsBHbSw8wboEu8fcjqp6DqC5JWTzCETiYB3uog2GEsrtT",
  "key6": "3rKbGzrJo4sucfjbj6MQLRRLzUi9LcMHEU6cpZ3m19iQ4zBFuiBGbjWavhY32Cf3NCreiTMX7BXsrzw6QuJMhd4B",
  "key7": "612KM42zDxtbjtV8YixkJ68i5S1PoKdWTBkqYvR2NRKtzUv5TEw2aHXxYSyf3ieLcHQBiagFa1RvMLbrpGudxejC",
  "key8": "4VLvoewUtyZZTRSeLHohgw3oXtugkUxqHzV8W4u4diYUVjsvAZivDjRs5bneDNB85TQZ7C6K1xRfJVurJR8fYDJ7",
  "key9": "3BaYPHcGo8s9zA7FSBBKvdesgpkLQd2LEdstP5sS8LcfWYiHNhkHmkvBerX5AmjDern4pHQ4Vetf5wRR6kc7yCvX",
  "key10": "RiNfbMLF5JWRW46bERYthk8fRZZfbR8t7Gyao1UzDWf9FRcnvFGsNkPzavbbuSu8YqTbEQ4wXdvgPzLfXgFC6Me",
  "key11": "3mPvY8bnCT9N8i6XLoD5Ys9MjTMQeZAxLvFJErtdpREx7Y6UVcU6WvSbCAzzNtKyZLrjqLfUui82RpbfctG36PGr",
  "key12": "4UsmgbmWr9LD82wmCUPCX5gX1ppSTpHLCA8FkLdS1jeYzuecAD82PgoQgnVFpQNt74o3Cz722TuhJDedSLoKi4o",
  "key13": "5HvNVhrpHm3YUvgQ9CULPEAM8BmZbwanL4BvG75KNkKa6Vj4QTy2VHZb5h6pqskyqoEiJFcHx253DWHBETQLgi6v",
  "key14": "WMhYuRABrv9zdQqZpNb6CTs4pK25HKzkNDs9EQ6YoZPaQ1bHgEmn1hN3GuLdA74CuGXjH4FwagftHc6d5uEu1Lp",
  "key15": "2Nnaa3R1WVNz1V9oc33nosu1Wcb4gGFjW69H4dTAs8upmhTty8Fpbh3vC7Zfg8xUrHKLZuHmFJ9hTzRY9Yd4EiUa",
  "key16": "9Wo9LV7F4ZmKQmUZA7zpEo4qyzHYaxzJonZbtVPrAuxHmJLaZWCvJi9WnkZguyBcHYim1Eo6XGF6hteaZbArX1m",
  "key17": "2iVFw7iiFe1BeYtmjb6Ev2GRJzjwZq6KuKzsmHvn7SPp86utVL6fpRSieqpx7qAANBt6ERa8PFMSHPQgT6wJ5hW9",
  "key18": "258PJHu264UtuHwrSnXmC7VsmKMwr1LCwTwLZxrTAahPMNy4VBwTWxkTcJKpdppJfu1Q7jipMVHwRpmYuTSehBb7",
  "key19": "5mUEQULVagwHQzdVJstn359a4s5ASfw2cK7QMrRayniDHfvQVW7dfuBfwgRxRpWTTfNvjQir65EupVhY2T7vqAQR",
  "key20": "QyYUEXfLdde9nWSS2A41AynqBwwv79rUtsq1NxiZ9RCSVThcmaqUaqD3eEoxNd9SbfJT7zfC9gSnmFxwtaJRVhg",
  "key21": "3dCiyPDW4728kYacoZegZwDtjURGTdCCkTG54SaHpPBP5BLbYGAQhGsF2dZRM3eFGutKoAw8YA9A5V3UQvURGJGn",
  "key22": "462ca16j38zqRkYae46kdbHneYgHBdPh6zzRcNHzEceni5gBiPxtgC5JKNhgLNvuaDmEMKjaY3MwVaVf8wKKMRyt",
  "key23": "3f18vgSETjCJGLaQhfdfY4xcpqws5FsV1jEHeADTQ7xuSgQjw6F2cyMHLccxrzsJWCf8RwRUuo55wi6jFh1SCfDN",
  "key24": "3bDPmdsB4NreLFR56veUcgeMvJonkGHGHVKgViBJFmZiUicKRBPs78QFZoiD9qkGdvB6yXoYNjbDDKwyN1hLA1xz",
  "key25": "QUpFYQUpgvAeSa686fWWAGjNJcDBjp6fVoEqYN2iLXo9a3L6t4fFrSWQ9U1PAybYPGPcACB8rYcrxhUk8qSZfau",
  "key26": "4y6PkVhLJYhADJa1RuMtsumy36Ez9SRprvnxAL2NXftNLg3zdX94pPL1VVCgb7Nz8uoU7DRUgnb3ojp4QqvFbTUT",
  "key27": "2GEbaYQhRw9XN3zJk7weP5ApkeyQT6ECJugujSoExUMiPPyCu1PE76BTNmarRPLuPnnpMmSLWF4LQu6KkZEwb62x",
  "key28": "4cZTsGDKG4SiZAnP1ovS39zi4c5nensZn3gdor6c6GYHow83MXasS93czEeey1MzEF7scDwyjLeZCS4VdciEgXwz",
  "key29": "2Kehu9kXrp3sHD5JdxyASV6CvrLv9PKiZkM7uxdye8HK3BzVkwLztpw2SbjMwhjDLdzxR5bXvqkvXsYEZMxiqrSY",
  "key30": "4KEfPsVtMZf19eksafqfS6rd9oD5gaBkQwvwzPucLz4Ys5hiZhSq2bQKy7aWFU5owuc9BrcHiw5eCpnATZkBKQws",
  "key31": "2XStrqCYWF18xUG72fxaqJkCJXVzN7C8NDbZX2pyfhU8is6qL7YnadSeR59YyMAJs3Xy1ubYD8tE9ns41YHX7f2Y",
  "key32": "5Zc6YdkygscehyjpH8xomcHX7v3qUiKkhhKyqyKPkjN8AkxAmjPmrX4AmLpy2Zw1KNEWbJZXrNRvM3r274J2YSmr",
  "key33": "3H3XYkrkwzJocrfpS2vpPqC7aKCoCjqQAXRd6ApcszzZx4YH1DLF6qWzcBs9MnZ7D4CcuwVJtn49ZTiT3Y67mwq2",
  "key34": "3H9adkpJ9mjUD3QbUZ4PnxBUWv4bFQGUVLsoeCiqv4j1M72UsRamD9mLnmYB1UiMvXVyWF8xrozSBy2gbPkzX7U1",
  "key35": "51qViLPCa2JnS83KjiTKCKkTh9hfmPh3jZW3DUAUBwyakuzAwFWzFPHNEi75ZHCvxNbFkDwr1sHisnG5KFbu75BC",
  "key36": "531ac2Qdjfv7feVopktie3xaPv5y7MftAJVFVrZ6N1hVWvoAdPRhPeZZQBuYacX1zLULa6yK642ReVFF1wuZcazv",
  "key37": "qkaycumxyannX4pzi4XXaVyFkdi15czvz5FXRWGZn1JuWut3etaFWU8tLfDT3kRWmfdSHFQTZ83bPMknFqsVGna",
  "key38": "2Z3QH7rVC4i8hVdZMNzZxdAJSNGRhHZM7qFULX1jGSrXYfLt7rWhbfFN3UkFwptB6KxhtK7FH6DViXHTX8ZY7oZs"
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
