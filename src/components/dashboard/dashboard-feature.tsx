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
    "2PbPG61wMmw9WuVxvbQXAHQVSVNVETqjAgZyAeRvLVmwjXfFypAuuSF4RF8q29rqF3mGMwu1kbRLJTz2h49dobjt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R96y3urN7MLe6zgF8ktqbP36PZJuA1PFukidz42j7z1mG6xbdMSqpVSDRZnqEdarGmcNyFa3E6PAUsFoKyA7Ytr",
  "key1": "5VzABxPR4AvSZnSHeurioMENwhyTQ4EgtysD9tJkG17nXdAMBigDPxv1VwExUgPzAiJ6EhZkL79KCZwd53YMajKf",
  "key2": "3ZxpzZKsPyA4P9J87muUTkCcxPkxj7tazSzdb76tRADtNAAQrE6mW9dJ6Fdvkuzt8okrNHAo3uWxNEua84hosLd3",
  "key3": "4Ji5pzF18bBRvVDgSNprxHC4wmWRPuBqnzsi9qZqPty9SFU6ECag5aU8EJ1kA6gZB33xXSABLMfttu9m4LSzUiWG",
  "key4": "3FWN8h3NsGmbnkKS8v51rSESPLMyvTTK3PTiY45ZADopxupg2TkiphLxCRj9nhCxDYNN3yLkKzKT5Fdt4KFigRFP",
  "key5": "3tMhGyu4XShQGUcychhqk6gSFeusJfZTnTQRR8YnPjL87xpWdDQkLYp1z9uoSHXYHnHUfgzGFnAUa4jhZqTjHkKc",
  "key6": "5RqfUkXamCbXqxH5M8tX9SjTrsC1K6VLAXvkksGVFfgPiaVEJqASn8cvmTjViHMoukg7eBNYygeLhzVZcqCTAPfx",
  "key7": "3x6vzKcGwkeS8qj1tZv11jop1RjPBe6uoKp4BPKoQ7iFdWHBNKVY4EB4GFtnNq5swEqjH9z4sv9sUnJTjhTe3j6n",
  "key8": "58rrLpdNdTtrGEP8HuNoDEY9P7bYkZSiYcCsAcK1WvdEY8ncuuQUmWAN7DAyneThjRLdovsDL5zbdo8MGLFseS4F",
  "key9": "3m7meANCuHiSoxomQbRLnoBJYFFjp5ZQKh8PpaobMpVgwKSx44dzRpJDn7q5a2dGFGG6Azg34tK9YE8eLSGs8QvJ",
  "key10": "3ejW11bS8EghxuCHnNNqwW34t3AVxV2L3pz9j8k4zRFHokqGoXRtMnV1c3qgX5yw63ZgmeX1jcqxw1TTuStKMNAy",
  "key11": "2p85C58mWcJWqMsNnm4A8bprLJHGm53EaiRvJLoet1rH6T6xRVLGwRJz7ipp9tfULrfvpTURULHiytRmZjR4WaB4",
  "key12": "3qc3wu4hXLo1Ax4UbeKeYU4fBesHpt24Dc5QLE1BFoJWkaE4ha7arKzuPGNnbYxnDMVJCKTPSF1uC7pzNQssusz",
  "key13": "3PdU7th4gRoFHS4G3CWoyY7Y4Ke8hEi77jSny8KC2hXbyLynnWcJnNCtLnwFACVERfYapDLjnzDKZTyMT34BRyQ",
  "key14": "23e5DD7hs2a2mwbtZ9ZjmKqqXg9Qg5RYRhfgVKcy9SMQxkFBYhKbZxrduWgxnYYqbM4Z3ozQuMkahZWqEJSxA823",
  "key15": "3V7mZ1zrmzg5BDE72RmFfqK3cxKRQPhWnRyixrxTmwVwwN68c83tTFQ4MCVJ9Y3mDCH4kXnxVc3sM2TJbUxHaWup",
  "key16": "3CjMtjcVhkDScL9RTNrm16FyhozCfRqmPMyEUHJqn2wXo3wGGKvkdyaBiTF6scNbN3Dk29k9zpgiydy3vaU5Nr8K",
  "key17": "38u1EtRFdB9pWnWvsc4KfJai5G4z8RXQDuN6V2zsQT7xJ1GQVi4J65LQr8Kzodzw2xxTyzUjRx2qzhZv7pSs9NbH",
  "key18": "3gHzJdRwmTfFWzJ1bQwyJLX2oZjkued5CeeQHPXopBQsumNWy8hPgTh5beLZmfBgkZqtFjP5By7DAqJVQvMrcynT",
  "key19": "2aa8Uee1wiHPktRJ3vfrX5JwzMozJfK7ak5K9z2BpXFYTRmTdsZ9FVdCntaxZn9Dd9ps1V3wZfrrs5LUtQK6WDDB",
  "key20": "SR2kRZibVyPu9xbJfeDSgCnJuDJUF6XSieHpF1oZnNi4A5Sa3hw2jhsmKY8WbebcEF1vyKpPWJgh1Dgm3Z77sBk",
  "key21": "vbEJzk2QQobJqqYwjLm41AdZ82L3vQ5KhMLae8NmR84VQd93XUhS5425z5WAS1CVTc5wQPzLfx4JmqCEE7bk4Xt",
  "key22": "5EQgwZeTaLDMYaneR8NExqTkmWkYRyAB6xNyf8kJi4Z2cNnrTZ7e2Dxsvx6WRonRDYMhqxaned1GH3KgZb13sEpW",
  "key23": "33CYpLZTFEUwEweqxsDSBU9DzSc9eeCEyxYZTKhjtkPqQRTfY41pLkcudxuS2cZNtAMa7bGH8kyGT5CxWf9b5ER",
  "key24": "3SHb1c9AQeiHYNTpA5ZbKHBDz2EzqLKTNfMmaGesRzR5DSgrNkEh6aEoVXSVDj9nDJDAXDKZuiamxqUgwuFA4y1H",
  "key25": "4WjoNxgN3nprjQLcnSnRpqBZDueEUpGwcQWtUG7vQVmyaLDCzBU5wZGfrEarYZSjDiYpbDRzQAGcoLhrGUVgnAX7",
  "key26": "4E7DzaScdgKEghh5B63RN5zHv6CRVBH4nsCFvJpkU2GnnBarv38pmSKgygWYBP23pvYhLF3kwijNdLVM2rViJAfT",
  "key27": "31wYV7MckPmQqpyAJMtPvknC1Ttx4AoiTz6vsNjPwCGjn12qWiQvaTpwSv8zyndyHoi4DNJZPRjMo852Q6hxjjhB",
  "key28": "4x4p4Cfvp3Si1hUJwQ4KpgkRP4BoAjYk7wGAdByxBjkcCamoaxEaPU2C6wCsqMsYowWBfJbRjPLPk5CDKSJcPbZY",
  "key29": "YpRCgf6WSMVaCY1qh5eoFGKMAbX1eg51kJKF7R5TG6AxxdF2Nbj3xmvDevJbPFDrJ7hMUnVeBFmxHmQ2dfvkvck",
  "key30": "3otP22wwSSBLAZqU2EMfBEBfc2BC2t8NzqHjL7TJt87aLB9gtFQ4GfYNcZEpKGQaPPyqkcT6iKeWsUR5DWF4spkL",
  "key31": "7oJp3LuhBtbxjGkU6LSCRSWWviGayjgcBkQ5mgqAy4NxNZyBZwiNRkzngNb8sPi9BxszbC5urJF4mw8utHm9FPu",
  "key32": "2BcmxzVWTfQLigmg62Lq9k9Nbw1ibJA7v4CFRRC3Q7cS5nZ9LaBHPsRpPT2ZqZdzmbdTgoo3ai3C2KKjUqHYGajZ",
  "key33": "4tnSoo4FACXTYEWm9mMPEemzC5ZT29X21ZFcGweQur9qVtPgXEtgxNfvajFczy8kqNTKpcbyECfkTkLv9ZWGRh5n",
  "key34": "3Zp2xwG36ZRxSkiD7Dwstfwqezx9dcaaNogrhfRDqTkjFRc3AaxnyWPJUGG27JUwm94YNHVBC3ponvNCstgxJWaL",
  "key35": "5ojhZVyny5HmrBwMZwsCPApCBkNnU7ffNjbuFgmiQQGw2kD9emHFzKVc8ADk5hQVKMrt4vKeAtbWrqfAQL6csZ8c",
  "key36": "2pSDgDDFTQEQm2jmWKsT3StwUoSnxDBYtiC1BGx7irzAN1kXp27AESmApJru8qUHoNPFgVSSLJnkSgn4LtVC9ddn",
  "key37": "5xHCbVNBNQNGz3qaivSdvttpS97w4egy6BxJ65DjvwzH9Kw7R8grQTGvSfZLbY8sXN8jPyUFQLXfEZajzoxaTv14",
  "key38": "42ASm8VwidGKQztDxdrcuyW9rsYg8SUd2S8Db63FEqDZQsoc5Mk5GsqCfDwrGtVB6wmTxQKuCwk7WNXRge7jR6Gc",
  "key39": "2urgYMg9hTPgxhonaMCVB5THZjkfZFgN3HWwPQUA78mbepdTV6EKNGxNdFLFzYK6ynsmdkn2ZFUZWDYavZwzrVRS",
  "key40": "5eQen2whJVuTnNJyLPYhG611ajM1iqdFQUHauh3ReHDEMwXFa8xaZK1yRSi9rDxp4HWBc4o69HTrR4ybZzg4hrP7"
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
