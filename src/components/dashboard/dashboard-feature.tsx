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
    "4koUQsZ8aHLZPYsVjgYxRhQiDBFTjsQicEjs9Yyy1usRRwbC1RrxLGcg7YDHeJEUJFteCyDe6DmX5z6UgKTXoLkP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y1enW6tWN8UXqa7CpAuKJgVBJFQCkZU61QCcxJvdbyCTZuLiefYKDkEaeicPZGAGMJyzTaQ9XDUEZGDPAtdzfwH",
  "key1": "5ZTaCDexXFGdNodVnCfuAWRrB4nXc9qaXx223w9qujPBB3M3KgEVnoMFCBvN7rYxjMhQizp6krauPPr8mqJVPaYu",
  "key2": "CUrJTdAmHhF2BbjFCNPzefgTDWpGB87g33vt2B8BTK5PLmikhr4nPhBKXYKbPWsqHurXA9HbdKBpu9hpceZUbSB",
  "key3": "59z4eb1XkXjRTbbyVbDybhLB5ks8dfjwjj5RX4GS3M3BhNjYPx347gsD14ZWVL5P8zs2jJyYnyEy2nRXvWQhm9fQ",
  "key4": "66pbCeicnkLVV1bCcWKbUTZ4XrGHg3ZEr4KHYdCBD1YAEMuuS1o7rCr5XmZPtZU6NGGB1TtdZKtoevLxAw3XBYjC",
  "key5": "5GqCrDhSYQVqubRDv7Shz6KFuXCqv1S8EdLXZBjqkv4V68fBz6RZnGybybCa9XGAWJZYty5rfAgN5iJiq16t4rPk",
  "key6": "2mGyKh6cRekG2Pb5HpSVqbP2Ka53u7gjY6kfiuhxTUZWfbqpWzWmXfUD2WgSkSCxCiPLRRCFxTgHmB4w2j9wHpZb",
  "key7": "aBF95Bzjn9ymLNN4fLA7LjSr7LY1AS1wzdhcXr1Gg2JRg9TAGiDLAkRwW66Es6J5DBDbDZvmjUTpDKR9R2bpS4W",
  "key8": "62r6WdRBLrMxxwzKASEpSG4wUT6PX2XNy1mSZNR8cTDdx8FedgSGVmdgxLFnxPNAWujXBTKbprNaDCq9qxWQs2eu",
  "key9": "3wUnLrgLt5C9xTH3aBBEw2i7WzuQoNXAM67rWUrkoM3uFEtGasMNEwLY4kgZ5KpFkCahRTbsgYQyA8p3YJgmtCGp",
  "key10": "2ojxzjkemKQc4wRhxjatNuNXCy1LQE3cNrtzDE62rMBwbMqYGQhr4qu2hbfeTpkTfe3usBxMkReLsdZt4LzdHEen",
  "key11": "2uW9eMKtaiu2r879hSmREGP8ti6ksYuNwsr3BRy1GmoKh3X6yiHpEWYtb8wCu4bfWNTmSsrJ3hAHMHWuXQevdFTY",
  "key12": "5yKnG4xZkoNchTJSnLdm4dRMWEqoP9UdaZQZWPKnwcqyMbKyV6ajtvEJSL5oAaze7L8MKvTRzABAhJNQJ711Tfx3",
  "key13": "KqNKQrn8bNAoRzuyE7nYds9dtCxF4gkEoC3L7mTUERB6dVpWR5Vibm4pXhyrkyepFrGsemSgbcVUfwcmuojzFqY",
  "key14": "wxjypXqpXw45j29Wzbz2t4NnxaNySNhHnXktAZoAvivJyHB9E8zzirrfb1yxKLC3zXvz6zEixkjkoZr5nY3JTVC",
  "key15": "C28YE8TbgvajmDfoFbH3YX7PJNjZf6JQSCVQkAitfLJx2NvW9HhJGY8AzxY3bsdUYtuJyqVPpML5nGk6cXSTf2Z",
  "key16": "5JZJ3gHR2tj3X2ixsNmDMkx7f4UDK7YnSjiU7seCY3wEqqGU8CVDxuUYpvtdK427LQdU2z8CYYJsDRQQw4yG7qem",
  "key17": "5HFyaVGgrTjdfyvJAwTK2qhmNXPkTDFXh3pViiBTkNovQsjMZvovMhHdN3V9i8nVG5PD1iHULsvx9PeLFN1r7EbN",
  "key18": "4RmRhNbTqD222YeTrVvHAZYGy5L5FKUQGJHegaQRNLeB3MLQ7rifcCXD6jYVW4j8diEyu1BS6AhsedTNhAdXrR2M",
  "key19": "63n7S7Rwo5m29fMQk2SuS1XjpzNRUXVUf2FwDmtn29FwLfU24Z5AQU7fpgkGxYvRvpv6cM5dtfFfZNtr3HnaSZ8q",
  "key20": "3QKyuKLFSh45W2ZzjDniwy6vGQMT5G5arcHnn8ZUdhBCwgZqhUp7WfUKkfA1hUAKZRgwdAxMMcGgVua8H73BsPfo",
  "key21": "3CoWvG7en1NzeN4n97qx7yKQM9yQCBuRWETh6ioMSyKZnQ5mbdtgAJE8VnDjCe8cDwR83QZB2Ke2B7pybyJmLVAf",
  "key22": "4kdK4Ho341qwCSiadNmHg6EheNrmYBmGp8hHDf2KQZPFKhzHYyNomzDDdrsbeJCJc32G4er7zQQyRimYZmmqwuPp",
  "key23": "222ddKnkbn2yCYsM1D2Vk6XQ8BeZQDp8VPrQYJiqnY3r4ADVQJndFRZz6rBp8H5gvFYpTjgxNYK3H3uNLLRkeUDW",
  "key24": "AX3mP8cqWfpimQPFCLWPpoVAs7eMLQGMkdoxUw1Vj2HNa6veNhEeHxQLuqgPbWLnPm4tpFBUkaLRYJPWSzCMN7K",
  "key25": "2yJeWrCXenFbEaRkoMo7YZQgas5jVbSHTRj1B7Y2m95kcc4RW1ztUgrG9qhde9P4Mp6mPfvPK6rEoAsK9BCBRwAt",
  "key26": "4j5KeaNCTQXrq3zQP3YBZtj3g58CSkCMhuZmGzNB8nrxwhT8cgZZU77LWLpWzLWpipmqZbKU7s46zjFrEMjjvNN4",
  "key27": "2WcrT9cgdB5M5qzDz5PU3HPzPbnH77Dao3ETNAtS6u9wSNngDAKaUuBteftDjvXMuFUJ1dsyHxyNqyTRTqoikgLB",
  "key28": "4j6CgD67Awo6rqrD8Usyx1LuzPZ7P1ycWMHAHwQsykq4xSuDvQnShowWUUfYFKzF1k4wXBH5314XTDQNh9oxdJee",
  "key29": "1ANrPRLqn8UYz1WpHKNrCEaJshiuKyNaztkrHLLzfpnqqnbcm7xh1eaAZ7hnQhatKFStzPEPjoM6mo2i3MiwB2B"
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
