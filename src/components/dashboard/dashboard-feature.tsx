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
    "MbLBa4SotDLzKXdwYfXa8TCm5TJTBVgSxYKQuZLEA6JkjCksYwRf28xJzkU3DP6kn46NUnKvv75gSh1riFrWMXw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uUZPq3g83NArTerTigSVgNVBoo165UHGDmXCMK28JML28UjywurnaKjvL1STQiL95ySFANMTKV57qsC5YSoWUa9",
  "key1": "3ioJMEapXF552ALuNSL9ifdZM1pGyFA8w8BecSS4GiGjaqttNm3MXRPRkhKmmf5JFNN5npYrZasFDPz6a8HUS1cL",
  "key2": "5abEsStoL83s5fBXMNBpFjFnBEgydWPLF15ZhertnfNBBQz49DFPp4Pe8eVEJR1pEPS9DgTmVGiNpk9ma27cWiNN",
  "key3": "61tzBVJ9pQ27eu1z4D5gzvsutATZeXf5LDb1LciXC8ka2xbokbXSgUqLsZ8BywYzEXd8aampLen8NYKSdHCqNLGG",
  "key4": "2ZtpEZ8cC7hdzQY4shSNb45UMwUZigkEKhw1g1Lfy2h68kbTPFevXEoZUpdr39mKMakUkYpEXfcZCP3Vf6BQzUgk",
  "key5": "4J9q612VHEPxmsZE3JiQPuxFE5xqXSeYUotT9watezN8wJpjzm6q5GMcyL3NKD9eB6W8z7zBxQ6HHRa1EPZZjmBt",
  "key6": "5tJGDxNd8kiYroWH3KPA6sGvpwHDSJLQYehgPCuota38ywNKbfxuJLDXaEjbe6i2dQ6pS8ex5GeA28a99384wFzW",
  "key7": "3v6EureAjZ6t2L283iL6jAKyMdCoMtGWz4ynCJZdk36hCSMzRS5vRUBNCmVxa6pZC23RR671vVbFKTkqH8qe45Ca",
  "key8": "MiRXU8VEJCKe7K3rCQ9LqgT1z1usyx1Z9JUhjVg8wsJqhVWsfYkD45d6i1wkczndzk3WEhHSoTVaCKdwpLCreGG",
  "key9": "36PXP1JS4kxLvQVxx4a6GjK6B6VhfNAoPHSQXqhimXgrUjxCk92xbeBgy63YifWtVPadx7AKiSsBvJhU4tucAe9s",
  "key10": "21Fj8joHvG45aeP4sVKvXYMJS12Tf2fLjtq11Z8ePq2rxoZUkKf1FUfha64qhz4da6K7KKbS6AsvaciJKWBqmo8s",
  "key11": "cUndh3W5ExVh7rqQAzKgdRAjvrRFGqoTQN5kwbqUpW6Mv7aid7gGWWNrboHtocnaFr99fxxbeRZoNBQHGadcosz",
  "key12": "3ubbLvNJXq5kwx1V3x3sct2S9LjxrqMj81gYcupeJyqdXJSgHCFj8oq4GfkJy6xXwiR7TiHfpDyX2fZFaoj8E6Bf",
  "key13": "2sTNo5rdh6SSUPPWzRsDCfPn2WcAAKyQKHAV9X1iVn8Y2MUwWjdkSru15zab21rhJwekjVZTjaL5KQufh9HU8pWR",
  "key14": "3q89wubhbcZySPsMymWpHvor1rXjY7ZGw6bf6pHgU2MAveE3Zdu49wtEqaHNojvfURTsWqz4RC1NupYjog73LRRQ",
  "key15": "4mx7piqzyZ8xYxiHMucDCmLadhHS5xttoCGqKq56iZD63JnZhP7USUyoHJsWCoiwZucRk2e3wFbTSZo8KYD3Fsmz",
  "key16": "42vWDKV2CMg9g4EnHDGwNorvNMUzTFAE79FvRdYoRocuEvNDXf7oMeqQtFoKTLYDxWpgvRfhqiv4bc5vA25YRic4",
  "key17": "4UdXNrzqAJSpfuu89Kgh8H7r6zTWNxCcETu7k9LhUgGkCjnPfaHmhVtjYvQAHvYHGjKcETLpmrQYKtzYnHaDnxs5",
  "key18": "4cyCWwrp6PTjYDMgfUJvW5fr872RyFX5maYVZ9wm5BHaJd12YMuFwJGqxYxXZitpPgKMr1DUXUiUox5AHf9bX8GZ",
  "key19": "62SXLsv1XpC42kXiiZN1jxkGJJHBjMNCbobF1MxakfTGWA5Ub7rK81Dh5ioEvHp91MTV7ebvd6TsjXv8nMumoh5c",
  "key20": "52m4nB3rvkZiLP1Kw66GUv3xmmJGW8mT1ET7eu2gQ25yM1jYeTBK6Bnk8E1zVP2AWTATwEP4HBJ3USMfoLoEGgve",
  "key21": "3oH6EqpNP6iXdZna862DYbkiGnnyusBJqcDCSWHjLMdqt4Gq5PCatuev6ibonerjNJoWVyeXrdvLCZt9B6C8AZ96",
  "key22": "5tPaceT5HuvTBYief8qt5wEwanTXnvhTF1aEFDcjGKntoq55gfMrUipgDU63vYGMaKma856oRpzdmtvH6QeAt2Wr",
  "key23": "4vVW7PrrWYrZwskSeUSBXBYJ6yAQogh2ceuqNSSuxZ9Z7oBN1nBovRgWLXkCpVHmHTgB4np4qbrzUDAXdzYUBNto",
  "key24": "5PuqjSA7vg4RX6HvkuXyvD7ZvN1ThqKaUUV5PJdasxo1EHwG6hDjTsJkzjWH433krZLWhDaGdsssWTyrmvrFdh8i",
  "key25": "q2SbgouYwkMXjvEhAkpsAw4D8pchNz9AcEtnYJi3wJJqwErs5B7XGjmX31SQGKrt1MW7G3BomAMToLZxdD8v1WE",
  "key26": "3STQk9ibR4YqJ8gzxMp3RBsMtpANXcsr61BcwyZFJnvavFciQeqyjm3naUXRPxXGjzabcQMqibHkmm8Gy8UVQmwC",
  "key27": "4T9UyyG7sXc2ewKfTMT4APEagJZ6L6kyFw5km4wnNe4hAuJZ18LAFddpfhCjUjGjSk5JEBymJkQpjHc1pK5xFgUo"
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
