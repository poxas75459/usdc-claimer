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
    "48bYXQU8SS4SMe8rMjE5NbLeJjBxZhMoY6vacequ96ihKbgW2yQjW96H59GteBkbg2Vi8sYTSboP7zgLZAtrn9tJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64bgw7H2oZRRBFkQN2gnL7tbFjtQFAELNAegKsMx4smnEpSqQijaM7PRsvQmdtYzxTXN9qQEpoU2T9nB6kBrXKZK",
  "key1": "3VZcfcaXiTfbXyd9imjinVrNg7j7BX7J5bkaNdrJPVfK5pB2NnhR9TctoBYiQ869M1aF7Lvhd2LHV5XqsUwskuaQ",
  "key2": "3JBx1PSazHvwstuFrc2fYNhXVyWwJcz4VNfeLVGG2LcP9aNnczdVAykvUwQJoQwqRNCBh56pZc9a1c76ppZBp1g5",
  "key3": "4MA1sbYVC8nsoGf8XkEK9mucvqzpJPEsJVDQ1oYjzxwnsf5yn9Z2s5WEH7mZveYDmu1nRckvQEkmVfrJvRB5aTCk",
  "key4": "2CtCZoqm7tAEkLx9Tt6RQsKgAaJ6QKECTqM1GyvvNXYGhiRt1mZYSrmD8CYGPQSD5Z4chPVLs8wJvvCcfWqyZDp4",
  "key5": "4ury3fDF4pVp9GfSmuiZ6E5Sgne9HM5Z9twBvF6FHwVUD9gzSaN1kJxYqnx1e86BQwSbLY8KrSWDXyuybn3jjzH4",
  "key6": "5MWJTeczDZSvVJ5uoziUE1N6ynnfnmmo6eAEiAFvHFxPVzW9GUPiC6PGmy9V4Aj89sFAuTpUTc9UShVtF4dqiT1Z",
  "key7": "2HNYRoz4Tj6YBKcfuYSDAzi5WW3DSikvXfbCd9TWU6muyMtTgiT8mExiYu5Ru4rKhEnMJzyfzsxVkukSMx3jZb86",
  "key8": "4o4PHHUqJGR5WUfRFv14iipStdNgqGH5mp7cGPpukLLqdYSdvk8Gacf4CQmBDnLesXFvQJhdZoGdkf6UuiwDeAxL",
  "key9": "5h8nSU45YEYnLxqbmDajhgbw9YXAhuWpHeGBikuANVYqtiTj4AH9jzxA8hfE3DWzzbcya4r4qq5S2G13ciJ3qw4R",
  "key10": "3cKpY5hJ9JEo8fAQmkn2HxqH7GbmbLGFm7VGwibcRXz4Uro5kjXrBzrko56V2D5x31smAoWBjkNVeJnYi4AmRqYu",
  "key11": "2RCEAKnL24XLRGnxfDBevWjtXVyG138KprcKfSHkKEuNLJa3HRYmzCsAAQN7pL9NuXmTkBSBYvPs9R5mHLmWxjz8",
  "key12": "wzBuWfriCRh99LAbmzKhtcramsyznG3gQkzvscZpcBR52x3gb6NVtHqGQ7EacnBrZWL7fVWi6yoLZyGnzkJDxHV",
  "key13": "5RcziG37tyTUs2dkMRw4JBYabYeopBg1WtE13PyQhzrR6FMGT9uVxyVACtSmBkwyRa9zDA51CFafgHQNRaRZDtTW",
  "key14": "D2ppqTC8LK7oBeZ6GsX5mYchydnhFLdSMx2nGnmKDcpMk41qwh1kWyrMdVjvNLC3JxMkqcQpozWiPGVPwXLP7nd",
  "key15": "5pKkhgtCnK7hvyJsHk7gpHAzCkxS61yk67w29v3YiNweicd8PjK4XQNBi1TNgW85SZB2sioERhzjpkzLP3GYiAdm",
  "key16": "67L72qfi28RvKKVqkSzpyyd3gsGn4vQsHtJU1mtLLPbY9J68YHJkKjFWso25KsuZz7kj4qf3XD7FKYj7CudC4nsH",
  "key17": "4T16Ge6rZHvx1fbcHPnzH7EJmkZCFEXmbLuqQWkSPBZCirxFvgM3dqibFMTzaUW8Ht3Wo1XWFZQNRKyv9VWJBx7e",
  "key18": "41czeMbZZ1t8P3aUAT1hvZfLdFdAov4YQw7zbCjiWUTcZSMkfp7bU9E6ZsV1UkQxkNr7fNCgZbRgjfouHLrUyKeb",
  "key19": "4MEzy7ZLcxtC4zmwCEbH6jKoWAwDE6a4Sm3d8NWpySdMBt8dssYmfVQ2suBrMH2Fn9UY64DDaRp6uGLZPD452kF8",
  "key20": "3g7kgm9FQVP1nr9yaKr2oH5vKpv8yNi1zWzSbiwqzgC1YVtZ9U2k8KwXbQbpE6Ynjw4ZedW8Gp8xE7dRL6UmTtwm",
  "key21": "5DBc6c1imaLwTHY5mQecpC7EuyaGtTScfwMcjgCaPhsSvkvsLLh5kLwstLR44mjQy6xqBhsph5pHEFHVZBS6F2Tp",
  "key22": "5VcHLdY3EPSYgu6bzeuGhfzxxphPqxEG7vpPNjgxyYLdw99Gb6siYFzYF6cRMUVbz4Xd8AdtWLa3XTk6iG9nr6xT",
  "key23": "3fd3tEUNY9PoFc4AfrQ4MeRZamfXYNNYiF8fhdzxgj48cBVr3rMLqCyMDj89d9GLUg3a4wxYLs74QrKkaDke3jbp",
  "key24": "62MhS5etB6EuVCFBKPFoqFYQ5HHDaBxFAqYFybBNaK4oDFHHXakNtC5crxy92DgCZ533L2XCSXttjC8UuK6QCcff",
  "key25": "3jdkGJkc6Ep2DgcTMcdcrx5dQedWTgXPPrSJLgDkcmzAnoqySwCwSgcZFUM71eAjBF3uUQ25MG6rpF4vcXUHVW6J",
  "key26": "5xRTpi53CbmUBUDLjVCGw7jAvWzs9B6J9Z6sVtCAbe8XC2pUidarETwwsZtNi9xbqEqc6KWUZu5H78DywJvJthbH",
  "key27": "2GFud5f76V6izNRwUj3oQFMQmmQnjjz2FkK6boSE8S2c2CChHCp3PsKAxyuoa5rKxSDxudCWoVhmncV4psVxHWvn"
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
