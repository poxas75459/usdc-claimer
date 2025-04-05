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
    "ZKxA9SpMZU91wgXGtznSak7X7tn8bmfGdRefTdo2tHnNBCiWYvQASpSiBqF1uhbfd5pU9kaewCqt1jLtczePVsd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BQdFeJHQqZrpqg7tNoUQVvfjWDikR6f7HimgzxuSEDbtcgisvp5TkNghhaFL1CujtLdSKncCPZF7pjXUAN64JKo",
  "key1": "4GwLW6rExak3jJJJnr1z4AGnEJu2MxA4be9qamuvwc12E9LqwdHAsLQY77Pve81QjX187UJoXmWCTZeXEE3rDrGC",
  "key2": "375AbnchUQbmnY7SYejCZbBw6gPBvoJSEA2YaUmXUpmRK1i9kRABF2Nm5epfFubX9Wzm5NLi5hH1qzkrLau8S6Yv",
  "key3": "2r2kEWuqDYGW1UJkxLCSWb3eevJLVWAW3BZX1PagBg5ZPYiDdSKRQZf4jC7YQJ4nTYoNuyy1Een1A7jqX6ibJJgw",
  "key4": "2V5cNir4eZJRLbRAG4fvURJLxk1r4VcamxHYijhYE7NXodEZwAcR6h3w1nsLqWnLXHr9Xovd4m5GUYA5FA2Sf1pb",
  "key5": "3N9fJjfPBAUhHDvVWpBLqecN5WNaiZJ68GajHGKTYqdmFzZzJ9T9sjDNMPC1eWTbNoLitDgVZEWULZVNPFC7FYy",
  "key6": "26jdzhKDvCEeQVouLgZLcS7C74SkYTkVSHXDueQ8e6ADzgs8ifzesFDz4QaRkae4zKtkkrR1tKQvnCNWMUbLuS4V",
  "key7": "4PvTujKcwZ2UdqY3FttmXtiJ4Q9tW9V5MXx4ojKZeAEZLJTgL2puut8adUhq3QnVgjcnQR9Nmq5r3owAyyfKtZGq",
  "key8": "5LWiCeJxEuE3GixetVmHMB8Uip9TAhsFRNjzg1gtDRJA2tQPcCkVLbZEH538RZkGZAgr2Mbn55wKpU9nBZ58T2xZ",
  "key9": "3dayxd2d2ormiXtMP8y9s5dYbPKoZ7sn8aSLYopqFssTDP4YMANzpbz6qw46c3fSxYgD3QjG5yPzKTer4fwSmzA1",
  "key10": "3RUUeDQa9rLM1naFQwWbSXSNwTS18fD3Wn9GLDBBmFiqUSkzcFAYQNHjDE6Z1TqSiZz7gETi3izxc4NqFL17SCbF",
  "key11": "5Ah365VTTFPDy4kHD3LwdmGot1hLWcEk46ox7xqNr7pQWZy9NwYJc1Jb1Trh3H3Wx3rkEkBqTCScGGPV6ssNJEEi",
  "key12": "2guW2tzBRMhjAS9vvWb5urm3YttxPrxgs74L6pP4cX6MnBh5W7buo9hUk16Eck6nnDYUeWBD7vBBk4u1CMHaVzKx",
  "key13": "4MWuHP8dkjoJCKC3s9uQuCnutwvBVYpgCf18kaVfzPFuxd5UwozhXityfSwcwuQ4PTNh6G2hErWqBW2VRPX8sopQ",
  "key14": "xzYeWHVg8B9KdEDHcNcizxYVEwAga8cNQD8x9ymLPSY4NBU1WbXCDzMdkufqq6VqLXHtzA6n3K4E25g9LXE7wCx",
  "key15": "4NmwVevDEGhrFBqRCXhFHdx3UQqFAfbn9b1eCe6nnZLXTiboaQdttqnkN9n95cqPf3mQs3py8uA88weZ6aanRGDb",
  "key16": "2Ku4Quf2ft6kvhMFbjsgeDxaumKTRataTLewNrASRySprsoG86DANPAvAM8BbCCCAqCwtaJWVTowk2NDfrzP6w8r",
  "key17": "26temjPdAvpFvrCDdY5rHNjvJtTzAiUgeRYhYWxHqphdJ1mFbW8FidoyHHE4gc4TAxNUdYNxyThkU68J4jJ2dmnR",
  "key18": "3zoA18bhwiTQkkAFqo4yHeggLVcJxR1hHKQp1jwAyQRaSkSFs4vegmJbPYx4G95yp581YzCW9K4pJt7MBmUxau2B",
  "key19": "fySMs7saDXpK3JuKst2KfuL65wjQVP1bo5D5muXer2Yw7wU8hhKqRGWW27LEvarMj7haVqZNN1pr6mQeqrxxt8z",
  "key20": "5oFohX6v4jdQ9xNBikYUrRQZSTfxkgqK5b4dhvNjXvx6teoPDLvcDLs5HhzieyKp1Dcewfad1RStgRLPk9XLmFWx",
  "key21": "3p6xdkLayfugVNFq4HmmBCPc26Ak3QybMXrKJKLTCA4PGXjar7YTb2AuCfQTgS2f6hYz2i2k9bSdepEVsU58GD2j",
  "key22": "5LbLr9ZKkhbfjhDPQ83Fn9djGiLnT8wCXyVqt9iEV8Qt7N5PFWcXvK8DnpkcPnnMybSdjrC6B8dFKRKN8ZUFwDVR",
  "key23": "yQULzMBdfLXwxmwohbN97KgUSFJcfTa3P8zwMDUtdQCTcow53Vkw28sb9GD7nAyNcPMEjBv5ckEdTXo4Uc2NH8i",
  "key24": "YJUEoPm52GJbmydQ6yPdRpyw8X7QoNYa5E76HDG7djWUG5VSC2iZFybsHMxZJUVpihwWzPyYirGsumbHgvpTsjc",
  "key25": "PWfVyRoG4r85mFE6sGNLgb5YikMZn5egwW4eMoXUkGEywYXnRbiAs85BpVHBVDVqJ5WehFYe6x9GWFRhrioSRki",
  "key26": "DcSeB9obbquf444KeUAJ1DF2mkyZAALgvVkCuRN7Dm1LqmMLuP3J8k4MXhideaWjrJV49VsEKahNbjJuYLQtLwK",
  "key27": "3tA4efViramAZGEdk5uKHJb9SVLnw9quzWPka26idxWFENvnjoQ1vkVykGur899x2HJ6Lmf7skRGvrmiDbsgwrFn",
  "key28": "59Rg46e7n4JiukxLXZkoaFgSTevDgY3JaVNd2r3fDEnEP29GaYkttNN9QxEg88iuErW5CpsZZnUFk6Mnqs6Lqf2J",
  "key29": "4LDpPFa32Y3NHjCGi6yKPP6WL7ksxoDyoo2FqjfXXQbi6BWUT1StxsYFK15qGKWuBKxWU2PBdzmXWTBBWoK2nfx2",
  "key30": "5hyRXzPs32RQxAv9XKHE3WF1NgDfqpsna9wVkLzAchdUbu9rtDeisokcE3AoQFw4AnULZFY37A9C9WFGgyVjPqG4",
  "key31": "5cpWaYmpZtpQWE7FDjaFGwDFm45Dsmn2AXdebdqJ7cD9v9wsahjTJYukE5iCZZxJVYsyWJZYHy7fthoRcXPfW8sR",
  "key32": "oGer4M5VseQfXs7TaxT2u9adMcED3g4sxJu7vumNyi92mEhtyzqgRXVbC1HFWRXRoj8pjruF21zd9aXEtH1WwGM",
  "key33": "34Q2Ds8X2PqbyT6c4o8QTmR2PHauLmDcdUadzN9eEDLgFeDzN8rcJ4Pvb1Xd7gWATxvwium9kPKLQPJNcFomgkxq",
  "key34": "5AKohXciQcvqSiHj6uaGS63Fw3vKU85TARjk5A3go855Do3XhWcKSnmF1DY3yK54mwo6Sajzrb5Pici5HtYN5Q18"
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
