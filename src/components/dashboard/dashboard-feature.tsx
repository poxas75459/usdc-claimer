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
    "4ror6cNTDm1qkunAL2T7GsdsninevNj9UaMjGEJ4AxbQSSygteHPN6REJhmfMxcfMy8hKYNoRMMvEdH8wBv7QL7i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oTdnN4M8y5E22mwU3JdH2GCgcurwhav9U3MuXTAKxmTW8ETL9KxZZsAkjQMwmF4uYR3B4cMK9gqyTGJQWo8eyRe",
  "key1": "w5hnfqYEMBar7KzCYZLVcxpNVeSrcFpznM5KKkPzGvggwgM3N4dmVfCfMTtyEq5M7d9tNZ3KAzs93nifeucQdQs",
  "key2": "2UT1ZnxgenafKCTFrN1b1oQDeMampi6TjFRhYpCajJYsdkcag7ey5XHRth4HHe9is9yaE9wthhy9sSvjhdJTVQpc",
  "key3": "5QvjUg8zcHUMaaReVmb5FZbTiu911RWcQrtc1vp5i2FN3HreGG5Fq3p4nbhqgrbB6WSqSk7R54VyGdH5uSrn1j2y",
  "key4": "j1bDyra5qQwVFfAugDwJ2PMdVQ8kbjLbjLLYW2e5RWqeGvjQbEb7RMGsHXk7FNaPAJbvs3Q87cQqX54kx2gXnLh",
  "key5": "4CivWo6xEpTFjfgF3up7SCVWZv5aRpTg25sGvgddqkjuw3BmzHE9CPS4fiWCPQ3dZsgw4Ukur44cotK72HTZNtnD",
  "key6": "4HFQRnCAakvoJS14dR39zaqYsYXCpZAXLiLdVcx9KRbiUgRp9KXmgeckaD4j3G5QRRUtuPc3MTBWWFc5sUZtACkh",
  "key7": "2rhyQ7kh8Z84xPdsCD6abs2RyE5jnT2AnzXpoaS6URcxVPu1jxGMfkka6moV1aW6JS78Kuzy1yDHZDs1Y6JUiKUm",
  "key8": "4Q4dV6y16X7s6RzEzeNewwY53mBqgd5Vaj71ZbZjFCUMWy1NL12Tcetj5VbNiZ1DFb8nciKNwtoyasECQZfqsTic",
  "key9": "5XDVHEXtDMLzM5kX9UgcNJ18hNmeuc1JsAN225ToypPsL8KyktTUBiFAg8DDtL8xjPxhUJj7ePgSeX1b85LpeW5Q",
  "key10": "PphquTWic6amQ4vKTc8zhWVDyNrwW7F6PTzNaRpdY58eJBtDH6Hcq1AcXant7Bujn1tqjkyDfqKdkMzGGAJ8CNC",
  "key11": "382Sgn5drvX8bsmeaHzRVzQPLMHzRxL5inKUrGFWev6MLE6JxsMvTMEhLcpctD71cD5QMZ3pZeSu8GPYjdNJPNbE",
  "key12": "2H51axDhv9TuMsSrdihtCjgVsmGs9WqAXGq4nSns1whCGNJ1Ei7L7wwAiq5YpFB9NZjYBiy2Y7kD3yZkKH7mcxoj",
  "key13": "5SLrYfekQAN53KEw2i4RtqSLh3oqsia2NuPQ7muDeMnJ4Bgf1L6MKBD9tAgqNqPVezDpL3dFmGZW77Yjetbiarp4",
  "key14": "qjU31m3tMyPeP8mCUA57x3z8hsKNDKq37zmZeb71aXEVQfQYDLZSNKFdK1LcDLMVYLGSYEThhkED1HEkqtV3EGy",
  "key15": "3TteKFe9MfvkTFudyTsZkeJpFX6Lj8g5tXq2mvaBPVoZF6qb5rxfDJqkWtCDoEwVSF4JMiY6fjantGzt8etPrqqG",
  "key16": "K9pxJrjypgecDTNwbViQKYU2siZGAnFym4gAtvmDh6V5sk2E69JH5XmkPxzbsyk6hKQAF36uGEdWVLCHaKsUN9C",
  "key17": "3FbfCVCJsiANd3NHnQ8EX5Fe1Z4D5XsT5jrCUxNafqhBtZN6wYom7PW6N4oi6vnZfN58H73L2iSnBVofxuUbLNq2",
  "key18": "2odguFmvXdY4EToTXvQV45UpoU5X81sV5fe7AN47E1eWXCqmUWvmb1SRtWFtdE7qaTdHBTyFVXCgkDSGD9tyoSrm",
  "key19": "4KBjTzWnEL1jeyWEAH4h5Cc1TAhXzwRr1Ba1c5iPxpw5dTgAjKRQyAb4xkim8GzzxXHDx23goUCgY2qTJDh9mDti",
  "key20": "2G8nf7s7n7jQ6SMZXZbVfejE8P5aNV28kkmurGq9EEQJcSJc3Ros74XRCooTsyCEbhA8fqm9UADpMUdVVzSog4Sf",
  "key21": "2KVWNuMnDLQgitfe3v3zE35mELkfghLLZfTVsTyaMRicWqP5XxiM99weuRTZAaSUTgiJyVavT8VrRwEQr8L3i5ko",
  "key22": "4SdDPYfc7CEUak3kHhhBK3Fm3mD8BbXyjrEVn1oafv7r9epkRRYdMd97fncxUvB6KRMRnmhF8ew2ByFmPWi9jA8D",
  "key23": "W4DbGsRAb5oZhKcwMikZGZwpNMC64j2T4qAaL72qqdRzeifEaqA9qEqt9awS9FcUYZqfAPAQ6r5JEp4CJVyFm2U",
  "key24": "28Njk6KCea97WmjbwAUe7tMTUnnNUsoZ2XnUPrG2euZKfbQ2ymKuo5qFaMaFJkvkmh15WmxYmVPjUippRQ3pGANM",
  "key25": "3ayKMwWrhnNorGMLkyJJf8vq5H8Y4Ae2qdtZtvtBQ9fWjUzC42KwPziBZG7iHszayAhtjpcWm1qxrM9jt2bb4rca",
  "key26": "2x2cAC7PEjaz98TkkamuxpH98zgrQteqC3Zz4hRXYWHA3VteojCdJmZgTr7Xcc5GH7KCndBJfGKgid2CzoqqAvic",
  "key27": "4uq1ADzuRSzX69nZiVjbAkjZsBySkRbrQQRS7LoeQ8AJ4EQL7EHeYqUJNS4bCpBLHMwLEH59p8tuT4HpUuFY1VzH",
  "key28": "5f2am7S8QPDyW3Q6d6UyAEweyxdfWnFixxgYgkEaA8RW2LmZa85Vsi2meGXj4kNr8vUuUdzy6itJ7PLYNg4Afz94",
  "key29": "5oqSUr2zb1fSZDy7ybQebaDvfKwF2JjTp3WudikZTNnjsqu3wN16JhhfF3gsEXqFtmKJmwUuNewMbz94Jse6H8Cs"
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
