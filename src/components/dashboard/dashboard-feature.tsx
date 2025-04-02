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
    "5FBJZ3XxHGVuoTNv474uJtop3E58W5ipmfjUgJUnV61kqRxytrKN4ZEkCS13A5P8Yw3Dx17ga7bNXYMuq7bRHWyT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33hsLqNwCm7EjY8htU8G8V2B7Cp3VHPTjFDEv95CbbbBphWEZRcCnFz8m8s7KZL9ko1S4hdXiCPNVqsTbffiDYha",
  "key1": "38fsHxyiZp2xdiqGT33C2dPETFAWSJ8VzFE3rEmN8pVKhV2qpf3qjFgzmFKF9tN9b7CBfQFgtN9chzf8S763c3Zv",
  "key2": "4MWCy1mvGF3sG8bV7SLyWg2BPEpbJMqv8Mx7SzSzU22gqiHEB99viAquATZPZ5PNdsNFYBbtykjPEVcbZxk1UdXQ",
  "key3": "BVcMAJxWZQR1okR6fYukHwPA2kky6i438Lo1WED3EscQL9ezCub1zbkLFivykCu33NhMQTLh9VPP962YM6rnzz7",
  "key4": "3Z9B9qU7mT3uMY4GKTtnxqRPWm589FsLZ8qD3R4jCEPM8tU7MN6zGWMsF4H23KrhX2PQ7soCYszhGS3DwmcSGdgP",
  "key5": "5m6htxPxxW18Xovt9nKsuFPQ8c5iYqB1p8nt5mrYFT9gG1Br2PYLmj35arZs1iMKYTzWNE25ejFZr1NwvpeBXckB",
  "key6": "2Mkfdh2cf4NtkDQzE5xoppFyjf7dvZRUcF6vcv98vgH2PtnBkTQmUZYWawYfR5sE2F3qXnuvVXiDkH82HzTGaMVn",
  "key7": "5F5UN3MrXdwkKB4iA7DBmeusy1TqLWcg2UFn45QHguSzfjNuEN7i5nXPtsxRcyzEbaYLHsukzjHffqTgWD3Q4Mne",
  "key8": "66SB3dU2sxi9BUbUDbtjpK7E9JwgenkF7ro2tFKTsu5jefNH99gyZtHyLKCUJLEE8rJqK3Y93NmohwE8XBNk3Pqy",
  "key9": "2fXHVW9pNYVEuKjgzGZU3zUhzwDhG7vXHdN8jipw53FUsL5xT1Dp2eGKqc22bcat1Rm9bwSeh3nL38PHLXaGTATT",
  "key10": "35go4MrAfaNHP9HGyaV9noTE6aEwCW6d1qTbC5LUzQVJfi7sKG5xdE8EsL4CcAz3TMRoCbpi2WE7XazshR8qyWu2",
  "key11": "5BFtkkpkdMgL2RxsZ6rARC6FUq1QC4xSpxXzqopXnZYz73X2tTMEj3WExaU26QkdM1cPGxpMbG1DTwzK3eaZBHMk",
  "key12": "4LypbdB7WtVBDeVf4Lgk6WoVdQHcWnjfQ6vqnKB3Qzv9JpawdnjZVmAGjZVmjoxj5fEH8CJ1SrFE57YdS4R7vqiJ",
  "key13": "2RPdBzmNH1sjWYqcbhdSNvfC6vp7iAMLv4QnQt6gEq2p9C7p3oxow4KK4R77BxGtzG9XEcJvhM1jyGbDJdYTjaSU",
  "key14": "vXsvF6ci3qkdTPR53TBnruCg4kYWQrBTigsxN7qFhanewf8ufrck9GzpFs4CK9hUHi4u3ocnepwkNwfjpoNx4v8",
  "key15": "34FnQ3poYyCVvBAoSeJyE9fC2L21ryw8hwipoiigEvgDEAZN9ff1nGWxRoX1h7779NbYBwaSfPenaFjmwgUKZ5h8",
  "key16": "2QnCCECUbn3wjrJXzC6pNk5if3QrWUvkSqwgF5WyeTgvgmmLyR3d2oudB1Rh8kGFKBUtNK9PhBazoJgynxcFAUaP",
  "key17": "4bLHNMnwWT7EJstXbfbiizsfCiJQStQJJWzb31uPHVJ9zcvo1wCs7xNGZZQzMWWBjKfTR8CBytJ2JhaWcGBojQqG",
  "key18": "4Gk94shzETZztyiwRg9UzDNv1zRVcM6Hh7P5DyFa1MvaRY1ro84vzfq8xLiG5rXNMTBW4khYUcMwFFf5PdjSoE1g",
  "key19": "JnpVPkrxtpkuUXLRuhonGyDbppDDJU6xzSa5QrAYKSW3gmcpA4yqETnCD6j6V4WkbnrDXEqYCpGqK9VkX68zRbe",
  "key20": "jkYNzE7BB8JdsQHivrWzV7mU7At2kQumGGyhkjpoBnjwfob1nPGV55cFwv6mKn17iomb92yf3fp8XZw7q9w6sdD",
  "key21": "3Fcc3fHb6nZHsuKgdijCU3Qubf632wPbW67PTHZLHSJoe7TW8nmCin3LrgNx9V89KpHPkunD1LZsiexurhhSnFzK",
  "key22": "5bLKyQuy1ap4bFFYn5P1QuEybkNcvuQKe1hLBv2N12khJsEz9WbhHSr9akinqBbuwiCr21iPvcBPfHZWFFzGD2f3",
  "key23": "589tpYRbbDYt6wDNyK4NsAzdHXTUbTamXQh9AQrxTJtqohYRKdsxxtJUkKJiB3wnsKJQnVQzJmvsVvP561TD8b8R",
  "key24": "24kYZ9ukty2unfxzZHkwUjL2g6LsaYanjBihxpE4cmdnbkq1RpqXmTtbEt6Ty3Uy2fsDjfvRgNaahACvRjzDDRT7",
  "key25": "5FdbPdvDVS53sSkDnfGFBubrjJ8RGWDW9ga6K5kNUnJjRGTJBW2rH1AVq5NBU9wovRzbH4jG2jHpme71tSN57N1z",
  "key26": "3CRiwSb1HFu16h3qdvgaUjkg98M2ejhz9ino4UHFHVt7ai1Ub3PygZSmpvYuLyMH6om1DN8rPW8WaMG32qoqBfLS",
  "key27": "WW7E6Xb2WpzDs134Fn9vNfhEVj2rNSGxb1bg92foPwTFou1zxMZVmMkc1RQGWmPysBXuH34HPJvCEy3GKMAZA1g",
  "key28": "438rnVgiqtLELzQGsUNuhWL95cju4vyEYziH5oFmhsYn5JhZFQRqi57eFsXFgdBRmgaWziVU97ujR8sMCBC3kcbp"
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
