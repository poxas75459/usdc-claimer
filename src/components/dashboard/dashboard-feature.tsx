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
    "2AynE1Rjiworh4jAVcY59vE4Ca9RnwctDLdm1YutzNCWt9tZ6TJ6NJiPzzUtmuqobEksDHTHUVVFE1TBnUF4cua1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pSAMcJEfBz9ajZ5o3QoxGDbaPm6XK4n74vTAGJWFAUurF1e27yNudVSKSVqgPLZVxEvVHuyvXTnWfPq6ShBomgm",
  "key1": "3eKJJjhmr41YpMAppaZTv7pNqwz9SED6Sygz51Fb6yicK6Bkw57648C1qoVhApUR9FreaWZFtfGy5XK9eH3wdioY",
  "key2": "2vn4JipUqhyY7fRXBB75M6YBFBAwuJKR6ttsLp2ugwsMx8uwALFfUqbn8sfkY7zjjGvLmies965v1j4sdt5ToiSg",
  "key3": "5qSMmUeGHfszeqN5zJuJTTuDbomH2EoeG4Gz6dWpmFd5736ttSNAf7jcBPNssKjFEFsYA2D1o3Kaib74Yo8efT4a",
  "key4": "4iLY3WpsziWGEVUimWD78uy9eC8XYZ8kBAPWDqpmpTWLP1uFBFEd3ocgJX4XeT1GJLxzGdj2CvAbXbZa1rYWTVBJ",
  "key5": "3zW7HU8sfePJ2Bfoo2PDAPkYLcPkwJgJHNpZjWA2h46XU4U2MJwpaS6bRBRZDTB2U8MCqroGrGGbgH1gMsf11P8R",
  "key6": "44vhq4qAPkEsNkcTUT3UEuw35ccuvaWLDajBLWHwQFkqcYg3q79bHWFiK8D2xuVeZ3GnoxntxbwmgndXyPJ6cVxK",
  "key7": "4VckSok5koMCsqJUTiLQJarCfSEnhDP1NYvKYV9qbdCr2k49YNbEL3VPMHJNN85bYa18qNYc6EjYksmSVJHTde5x",
  "key8": "4GcjSUc2qdqg6F7wA8kjeG5Sho28f78yWVaT74gXDdPKG1u6DXkCNnbK55JA6ydxGf8gLQ6Eu8k6fD1pk2U6Xwx1",
  "key9": "2wBaMvZJQaNnEf7cUL76xY5ruD3ZYsWzkB8YLE6oGZ4qwwFpUPsbnsxkrb9Dx5xD5oDFpBFjP7a6kEKKQ5BAnjxS",
  "key10": "5CKS6KJTgXGRMdzxKgrtshmqdCCzTn4vrUXK89h1Tyssi2YKjsJANx1KVEFZNXS3E91mv43L6NtHX5WjmTEgmW84",
  "key11": "4mKoa8uttJFxCidM6JsDkhc4J6D3rcvWVKRZrz1Y5uBrXNQgHWj7R8yJrS8ora2E4BRkWVBR5KHfEebHt4KtZ49m",
  "key12": "3STX9GUYyrNWjc5thR9ySKCAVaDKWxxzaGJ1G5G7NuiTNhMMpk3nUgzzxfxXvRTnH5oVroZMa8Kvs7dX2KELjmuw",
  "key13": "3wcP9d1ci9vTGe1KWt462F5MdtfwRkMKuG3PxsWXbTEwUWcHoCZ52URtryRoBZtVsMgkGz6JCmb2kVTLZby2CzN1",
  "key14": "4Sk9JhAhJtx7GXBYpUagpbjubamQe5GcGPZqokviDe8dnyNUyySXFC6q8ivgBFzXGCs3tomsbSCrvmYkSmEK8nb9",
  "key15": "3oyyMJkjhSgnESbUntrzT9eM9YAKEpCgk5q5D4P8L5Jx5ExbYLjtGRhnjtLzZWyvQH7wNyfq1Vzq6RE1w1xNuW2e",
  "key16": "4EfZ83eqhcK6XrarguyjDGxGtNdQi2Y6UrHULcKjx6D1YDimGM7uUV3PnGPhFEEobprMM8hUvvudpkCdzns3Qif3",
  "key17": "4J8EPtcGvLRw7cPDM1UgqP6KhshJ7YqhR6HCSRZr788nbYv6yL1iC5ZUjUa4r3k8dm882oaMzuGtQ57MFALcWrtR",
  "key18": "2ohGac4JjcLGVGWonadEDjiW5CS6zh6sSG2Z3tZYtvn9KbYhwikYjff9BBffUsc5AE6kKoQV9R1BzKxvvdFMaFRw",
  "key19": "swo1EhUYeegwGE7PDYxHQAQvswpWFVscj8vcUTzQthvC7gXW24CgMUnwXpiQn6zauz6KQv6FNBhEZ5mJpViJaRv",
  "key20": "5SbNfkRTyAiz31GR3EFtyiRVNBJRQq72bFhGBX9btmCLeQtjZrXDwBFcxN9UoyHuikufugzssFh28ZAvBUvN57d6",
  "key21": "4zzBSbyTW7AmwugKwzco9baMDSBDBNM8UJGE9xsMtVkFrUuDMfWLxG8H5ZwENRqG7jjC65VsWvoGD1Qhhotz2P1G",
  "key22": "CCi83VodHDpzPETjzeAKFZLyLgYsfY37m45FFX2xR6CTnkNL2Rg9NfMAdBNMy8LjrWWu5q5uHjYkH52nF3jsyPE",
  "key23": "5c9kE846Vwzeijbk95h4PNJwrwUQS83KRdEuRhJ5EhvsGjNaVTLtrLoSGwQxBdExnXfm5JoKHjd6VrKLNGnZk4N4",
  "key24": "2QwT3MK2Mkb7Nn5vBn6E7YJFDjaPSncqF8aLP2CpTsxofbt437TxtLBumxatKas2gE5v88r5jW7UjngofXR4QTtR",
  "key25": "3gViQufnJSVv8uhiQgvAFwCTp8tQDRbf1WdMitky5uvSxXnajEpnV2fvTLnBEyCi4UZK9cpA366icAqJXaMerNSi",
  "key26": "2ZcXfhiwDgYXBTcjXA1XQDVXW8Zn7Nx4hL1Vp2PLSQnRZqMi9UNDSJoy1n9CZo9hoQfCj7TRvhqErHANsTxB574W",
  "key27": "36csSF6YRPsB38GPSt1hL8Pzi32nFffaaEDmRbJArRzG3gM8UfxS4PyYt7nVeaoUuEfkw4sqfHdWPHaBhBq8YwyT",
  "key28": "4heyFd2xF9AUVNDMDecQsq4kd46z5VX86GB1MmkgRDrTfTb7JDTSkJczpZxpFaUT8NUZtvZU7vcYLUc7gmyigDWe",
  "key29": "mGtKv5QyC26dHd2dxjcxYWUz7YRZRSns1VGsyWvVhHuTtZrK6yLe8e2Mtp8fWKtnesMJ66ByTXWtQ7ihXFWaGGY",
  "key30": "2zc6GTQD4ahWoScY1B6vAnjQcQAF3KwUK4Unk9VXJQ1BrLiNGDBY4hXZi1c2mGdbDnsvRnvZCdRz618FzPPP8g72",
  "key31": "2mGuJ6iX3NzaUFmBLtTdZ3c5Q6pbuSbyXXPjAoTUgcSPjUUyqStaAd5FHZkY7H8aqZjoBCnH9w5B4Sm32GnZFb3E",
  "key32": "FtwZJzvm96FMCFnLSuBzxZ8a7eTR7MCdvtRP7ePoFMvMUjt8bKq9ZTLxuvkmSViX72Mx8CSSVMRyZWk8dpJ3pL8",
  "key33": "4q2RWgQVHchfCj7V9rauHGTUagXnXwpZ2BaLaFcsqKWYrCzicp7Lkj8k7k1n1ehbCHgGfdzSmu8JxGdpRvUQRDHH",
  "key34": "43fpSJVkVBxL24733Rm9nRXZrg3boxnkAVa24ByTkWJoaYX1GjNCTL6nmpauikwroVfdXXQ5ff2pDZone7sb9o4i",
  "key35": "4tT4W99xFWXhhHHpYPDM4cQkVCfU6iKXtquc4g9zMmGytNWZQTacPTJfvGmeGAWMqV6Hwc1TM9UrWb6j1Q9Q3WEC",
  "key36": "4mc4VCcf1pBZQ37VNHDaeRQMXr8BUvyStcbzRhxC5DrEwaoAxB8xuQ7wmchAyoQSsHZmN9DmPKV7NVZnVFy6s7YQ"
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
