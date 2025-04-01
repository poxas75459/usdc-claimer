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
    "EahBrccDdJnSGbpmsLTp6yPNH1BvAXGc72u1QMZqcVLFxamoFbsDwzgferHw1ydK5XHL8s1Ru8qrrY4tFsk3CSk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r3Ep2F1o1gnydc4DNBPhEGfRruiSbdVCrJLRkxCdf5iMutxdNYxv7DdMjuhHyx3JqoMu1Ho2decBTR1yH6t5R2D",
  "key1": "55PZFudkHq66SNP7zqNhmHCEArp9g94jZXLdUNertMrhWioB5995zZtCZ1TTKMqozpMhvfGN168HqL6zrNe1pARA",
  "key2": "124EbkLPHFqaevsqi66o3M3omSGmRuzKPF2KZgH3L5bp7raaV1BFnYMnj2bd8tnxVgk8HDvmXNWjSBP1dxu6718D",
  "key3": "2bQR7aHETrjBCyjPAKR5TYRtFw5sHq6iLVkVYP6TNoTugthNGXyLzCkbLi7GqCFCrErzo6vP2Yh4eKbofhEWToxL",
  "key4": "5htrVVhRAEdSmwtqurbyqYBcKd9pNDe2eee2wsM2yakTQ1zv1jGwJ3HxESGMNQ3bEuLDPx2o9bFwLfkdzGSVxJEb",
  "key5": "47h7TtFhPzyGSQbNcSVwEA3mE6vaiqMwwBSMjRXatjPmQbLo7tbMrcL7jD3HFp69LsKrzFdHXMcwq6nHt28t2SRQ",
  "key6": "4bZQ8brkHF3kM6WsKXWf6rmrTut5JH4oDmutyVxiZxpAPjQEVWgCKoJsy9yRgcBbwQjhX8mMi8U9M3ygAg2jvxit",
  "key7": "2iup5tjd2TNkt5Lgfi9oKhAWRt6DbPCoX1yEYFNzrRG5fo5ugVkhLN2LQ1xWqjBpkTJivHGSviGqLzzKCMCyhefk",
  "key8": "53u4XSNZoYL3wJ7G6ZyeHmHrcMC7nwZgcTFzwVEHF58Cm3zsLWw3y6LCbXRCvpSLXuSTnMdhCmfivJypiB3kvss4",
  "key9": "RAqwwFwuENY5Jqpyd3iS6DGnh4gNzf22MjJBab8KM7NbS4wqpQ94xKXUpnvCdWX29fJQPkwEQn1dMYEB1Pm7eLU",
  "key10": "5BZXf5LuumykhYdSpEwbP3AxvH5vJDd7q47EitarPm6pNqCBNsFWswzv8XDduV7Wyfns4PqdXwS2kKYeAivVdJTu",
  "key11": "531dBJS1ZmGy9QQS7i4Vk3vb9XsL4iz8uHk4CKDsLTj3Q3X8sb4M3kCdPHsKtkcYjm1yJRmrdSB7kgB4KUaHw8aN",
  "key12": "3KbH3Ht6GwDKeStE1GmBA9pxMC8Qp5ZnVzvtAdUNK6aak7yfz1hYkRbWz37r7dsaZskRWeYZUf2mCMZM6Kx1d372",
  "key13": "2dtS19UXfGGuErhYYfvvBW3zJhPJnHm4xjkKn1dZqoSdmvrG9gbGWs7FBjAKzabGq3tavc84Mt9ZRGMBSrhrQLSs",
  "key14": "4q7uuwjuxT1dTV361bfsW6X6CrY17Qmv8AUYL8AEGe6yZX4abYk1pTjFDVQQBiZSoQ3vLM9N1jpWHKYx7LQv3Q6j",
  "key15": "3dnjkT2jB5Ue2fvohP5uivPUMFgzzhyAwez7tFFteiFavGvpyTqdD6tnCgP8muYpymiK4UCHHCH5Rg5GoJY7Lxh4",
  "key16": "5rqEzR524z2WNBwzNQgXGbf13TAxiMqRHDDw3eLUg75QHefKDokwk43ceXt8p1U3sZR9MehSjGXPeoizrNr2PbDn",
  "key17": "47A9oX9EnybsUoZ1wT2kngPFkTo8g1iGvipsuRuqZuH6zra5yLgBzV865W8zCDdVZFz3ueYeCjcMCzWj74abt5EF",
  "key18": "2DDLYFSXPHMnVvUuTd9cMu1bUFryKfGqhNo2ib9QsyDCGYJPWnZAtGH91MEh3ZJ8xWp9HbnB4T8VWddLtWavCkCh",
  "key19": "39grCPmAyHH4W6BuTw756bs8eVxdCyNVnLwP2GcZZQ3g1V3iMBimMMtrXv5uQiGyd1kd6kz92Py7MHn9mncUzXzt",
  "key20": "C4S5jjjetocBV5iDT7LfHMHnJcMtsJ4Y8iCAXsi8CuCsAyjSYhWPzrk3QGivaxzt7fu67pRzbQftHXhN4C1yeGt",
  "key21": "4JeJdcQyhc6Jd8649UxviAmfx1YC6GYEXWusAF6eKDpE8KefXByApsiuKT4U61G48CEfa6MLSV963buN9dBpS4Fm",
  "key22": "5nr9nizC3yH4TFYR3H3Ep7XDHzT4qMLRRraDqK9bawx2ZgD1L3iKGrbu7jz1MfwbEJWoxyq4AvuFZyLLqZ2ciVzE",
  "key23": "4QQyeu9m56DZJ2PizgcxrAtTSrJGgiTrfYewqQkBkte8h5JXJfr8WDgFyaumGxQ4NUExapqeTV2xo7XYh6E2C1o4",
  "key24": "4W9GjGszcULdPGCXS9ezuz7ccBA9DNLsLbTMjnrfHPyatzF5mRnprsP3MPhHaVSGZ4DMSqUw9iFki1so4ZEtKhtc",
  "key25": "ZpnH4oGYazQGJkmfEjGJmdc3aG4jRHEPV1hcRUrrVKGE9okjTxCb2AYBZKggvcHeLm7JJjKk1LhzcXVhvfL7wvA",
  "key26": "3EM7aaSWDJ8bD9X1Sa5UARomBVpdSpR9M49NN6e4QuWfQtHjVVRQ56YJpahwopEuhsjNMauFx5db6XZs5WmQJvtY",
  "key27": "5rgsnXWwkBkndhkNSELSCuYfUDNTgGUDfF9WBzH9hUDccVmJymsuYW1uFkK1p1SCDXTuzCX9wE6mbxKHw5EcUjhc",
  "key28": "5ACnXXApajnoCJ3uBKJJJCw6rPUvRWTCiN7Xq63xAXBM2nKyYGVxmiKiWgJ2ktqrVL8GeW6UtVL7gRKMadH8VA4A",
  "key29": "5LtzqACSkrBdeXaVHPjRESgQDceE7AhD9S2CyTDM7bT7LqzcgaL8aeaWMBprBn5yqoGBwSS7N5JFcqbKGkHJHqr7",
  "key30": "3fGLgx5Zp3CtKhtNgGk9hiEaHTdR4c6tYfGxqQuSfyXENwFDdGUqhn6ZGVjTdqjiytXbiHUPZ3bKCZR5FzKHaNPf",
  "key31": "2sZHmF7pHZRqqcyW2CTY2Dkdu53WM9QwjMdXDnbFSfyA1xbrt37Fg74twFTBrhfUbLqKshD9fDvbK5zGNww24VZZ",
  "key32": "c5BUdcdMZYZwHDVQqLnRgFGLtxxzdy6unzQWApoFj71i5xddwMr4kX4m7xnvqgNfrLM4VR4AmRsr99aPZsPSzqL",
  "key33": "3Nasu85bvNxM1BBET86KZBj3MA2XGrmUcApuuh42kbyCFfcz9wtnLC3xCQn17cCoDZjhAwrtNQ4Pk7meJjL1FCiw",
  "key34": "3LSSBCiuwjc8tjgs6gD2oUkfEzXCZBWCUkJwoGcmZJSEnNVCjjE3sPTjdrVGAzyxCqgqpF7RKJYEHXXKfB3EBcVA",
  "key35": "5B58QFwNFZ99ZzaggKa4wX2wHd9pcBoBQzijm8MLWFtYkVJmz5FiMqvTcBFvrzw65tkd3XMXT3FHR4qMfVGPxEZo",
  "key36": "K6VzVerimmbhNVsKtiaWxhw85jCeSk6DBNARU8ypA1eR87SykVQR37wEhmxgkxxpWigbL3voTJfCZ2WbTJi43ou",
  "key37": "2j75EvqhGUHdGm6ti8LymrruH1gKJ4x8hsQ1r28xQv37mnDUcxwJxmNZggYcTR4wokEQfyLAJNMrwiZNgo3tG5jQ",
  "key38": "2WZbWsjFzSrvDK7aHSxT9NWnhoPazboXRsjAjRNr9toVjy9DKsBRd7h26nPzWDUwVQQpy38MoiyEprUKnHbuAvFy",
  "key39": "4s8sau5YWGJbwYPjJsW7BzdWq5sSPS5drEic5ZD3BhrmpT9ZJ8EXfKMjDPTH84Y9XiBPJw5ZbFhBNyGWLYHxh7qP"
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
