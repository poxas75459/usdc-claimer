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
    "rUHuv6PTAoEGEYyNJA9UNi96wFsZJCYmCvd7owqgwXQGHN6j17BitjDzbowskdCKtJxb1YRLBcUjvbtEY8Ex6KG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DMwSJ97FEMX3pERRjRhmBGXh4fFJoAryMP6mg28hAWoKBV5CGmHVcsVCyBsR7yrEPZyBsWe1yaFkBLg2tEBCLoM",
  "key1": "jKj2mwVTTgeBVyT4E9wMpk5GU7Tij5FqE5nX2L6R2C9fS9KgtJt3eDkcNLDpM2M4dBzLFfyN2Y7DCaYPwhRewDj",
  "key2": "4eweZzXHhYqcRvmZoobF9hDtyDTw5S33A5yQ1nQLuecxmGJb1gLomjFdSvbZGyiTw2BpUpkNRT7pxWA2KWfhSXu5",
  "key3": "3P8ASuXUHNPbG4uNtkSHMHLBNGoVr4ttpPhcr5moZTTWA3aAVYNdyDdhQrrqKwZfRTPxNMVjeeCxVw7sUagiuces",
  "key4": "3d82gmFTMHkbvFox7cWbzEDWpNmPZczRFCA4nVCzLFKopSqEN61vmmVpYkLUnCuditS6YqTXaYJSvL7Yt17qeYAS",
  "key5": "2Jto8bCS4aygHpJmB3zeTJQTAaG3wu4cui1ZADZFHh8BuAzyF1dKGmUivmub7JARtBCPy84nCvi9pb53j8dAGPo3",
  "key6": "3JxT4poWR3PJdJpqcGgJPUosPAn2GRekWzFWKKU3UftZs4nWYegkCeKBngKyzybDU6Yq2v7zKxEGZBrAfmt7YbHV",
  "key7": "4MfBBVm6rLMY1w8rQMK2LvuhdoDD9BaYJZ8TNQZBQLSH3SZwdMLrgzwGerQrSj5T7R3qTRXKs2kXq9op6nJZoWdW",
  "key8": "2j4Vve75XQpP8yvVPh2kgh2LmRWDD1FE5p4RB7sxVr4uQfhynHsCLh5uRZ3AsP46yFnkLb81PkSi5kLCvrEt8MNr",
  "key9": "jitzVAeoaJkaLgsSQp2WEetjccGHmmQgiY8HvCEQ2UVBssGRWuYv9jWVzRXumK7VNuGCVnBN9TtYrkyiZJmLTFZ",
  "key10": "4cfsSso96qNXRksg6urb7KUvQJNkwTh4y8B9Ph9sToDfa1hxLH1kQX2EkGUsBwpwW7SNxCQBoSREsgHeDHB3d9uj",
  "key11": "4dJANZR2stQe4KohPnu2t9JGpFGnC9VSiGP6nX1zsYjUuV9kY8XHNw8H4ousE1178wMLeUaUhkgmMx6xvasYcTuY",
  "key12": "4kixNYVjaKz3EjWD68cEEH7yWTDRKsurqk8JnYEDjR2ERsckQrJEDa72zm9XWTXiQK2e549xPDsHbKb3F9Srvtbv",
  "key13": "5rDQcDasgFUixsKQKWjToWDQYUSr4P5ca2XrEyCrWFCM23X6AnMoNxLEwkkwsE74ZLVgdvAi53WyqkQdLUiWo6Bo",
  "key14": "45pfq3zEm5BZMb8Las5GSc2yKhVxHJvhfKB1bqw5xQC9u8nWYuiS5HU9FtCem1dKqM7dWkPvTPu63Dur26NFsA7y",
  "key15": "2EJEpVKBz2ps861vy8XepHwx93EDDqgVuNhFKQiXMS2o2kp5Dc5vpiDqDM6CvHjvhak66cfSG21izy1xDQLx87dd",
  "key16": "5GhXtNY6aE2C5e4EXRYqyt4HReEu8oknEzjdRnBp8nqiNUHeqajUjRQHi69Rt8xa1F7phLf4yCQhBGZNDde49o48",
  "key17": "2LD5EZh7jr5k38tyJBCqdqqzVybh1dhjGdkbCLMV17gwRuBfzDxKEB6hWdK4ktjD412M7AHEBnbvKBdf4RPqTq1e",
  "key18": "Phne6AZKFj6evBDqZAdQ7gyfU5KP3NaMA9MPUMMEY8sRKdBSgn8aAWgxeXNxHPAmT15A35XSvfgQXqfoUff6X8r",
  "key19": "5gCRfpZn9dRkkcco1p2p5Ageo8PH4quZZ6mYjGBzVofULSc7RYfbT48yuDmDTLhgNeQyvwRVptnuJpX25D1aSsc4",
  "key20": "59Q2A6rf56MFSXh71oZ3NAMXCj3Wf6FgYheShnEjivbMVeahVbmc9qRRtUA8YuPZfwcdiRvpKzsokwHAVC4vjuRg",
  "key21": "2GDRKqmgwH36XVDNcD3cqefH1SJzoJpij9gC6Ft2udwq3ywLT26YumxV3ob78iw5mpMw4XQzygwQ4KYCGNLgxRtH",
  "key22": "4RiA1o3LzifHUSDeYCmx1tU3WQ6pQSwH8mcY1TxjDBxGVMtWMDFsj8YPH8pWHqrL5qx9THsDFum9Fc726Bw6CyY3",
  "key23": "5Zhk6hkPtrxkyRcJyNAe9Tw3qwUqp1ySryRCeYSGHoRP691TTmptAuamtxRikZjNpsn4Xiww5F6DJmBWLWZg58iC",
  "key24": "4UtVm4bo1XWTcUNxDCgiGxS1WoMvuqe3NNFboebYNMHEbXwCyv5Sz863KP9aoxdapNXdQPFJ5gHzcHQbkQXgyCoX",
  "key25": "2kdD7v26hiSvi5HFixG2QPeQhMJaQprSfWrc5TKM7MyLnNszFxPXaVvrgpQ6iRLnUN6NywMu2ABcNf5B3S8kNhSR",
  "key26": "2MM5ERULWz6QAeGKnBbpNNtz4oUvmbvozZKHHJQjZ8BuGp5ATHnYRhFKca3ECSb7z7AspHpFps8GnasHLUV5ru8d",
  "key27": "24Ty8WYevgEknZEQZd2xrY44nMwP4JETrYqwRnSHUcHpMPppEmC8eAjTX2cRYzRN34HNTND46PyAVGoRTuosAXmp",
  "key28": "3Z6LNP5GC31XgeTggiChSFmohAb7q7rnhVzmRA46wmu4TjT2VFDPqKT6gfHU6ZPnQxnaYxiVFFmqvde1QfoakNsk",
  "key29": "5mkWnnDYCpBWttga9GtuwjWDLoSwM5E35gpcBa7GC2oLv3SbjEizWGULgpXp5MnW6EUuj7TJ7mZwDvXWA8R1wu1e",
  "key30": "4e6jp7xttECgJ5T2KDX1Njzp1Jijq6SRjikAv4EvfPEhU3xmKNYHWr8bg9xbM9AiAt3AiQJASaMrGRczctkhb9u8",
  "key31": "mBnd44C8gPtSDhX8bGXQYrQzRJBm8sR7LeTMtf5pbDCSws9CAJ6be6a8DFK24qyxktVCRminGn2YAu3Vu2s4FEe",
  "key32": "4XRNdXybFtWH7DZrafmYjHcCgsRPKfv1YjSMsMnwdNFHuGBiXbH6DEtM7XFmEcYunK8aNFiAFd227hNavVm7Qdhv",
  "key33": "5VZiyr9L7HzsLpKc83Y1E6u9Bp2EYyuHJ6ZYMDfLcbbxZzafDZmTHx8wPVikVFf2G6cSc3kR86Lj3BUPEViibMVM",
  "key34": "3gQF4pPVgrxPqsT3huLroQmFiQjQn8253G9tAB2PUtAVzfXxY9oH9knRhiL8XABDQVresLs3wQfkfhVFEpNNFv2y",
  "key35": "3WhpWzKAYMXi9utaxV8m1ukjd9w2WTTrSDZgV58tjccPLuKZ1maett6iNyBJQHyn6im7V9d7DwfDcp3HFSpHbhTu",
  "key36": "2BVyoXhvnH57Snb5HqhaHgCVPbshguCVGaiugu1dpbz1F4PLdZEFFMxFgWAdXQDpjGpMnfeMv1mfe6x8P5cy7UyL",
  "key37": "3E9aRQQa6cELrUi4T4DEhKwDBkvUxgLM1GzHpXo3UKdFZ6AwunJHN7LKbL9bge41DXPrQUeM7TLfTSsXkoS57Nko",
  "key38": "3VX5AZ6gTPKXrB1bWvn6ebUiGoBu45Yr2T4T1a95HtUC5huGMuDNMhTYeXPWTPQSFNTQ4ANuj9bX7u4SBHYHNC1X",
  "key39": "3oHXPhyKgfYYk6EhTj9Fq9X5vG51GbxBbz3NnJUwg8d8h9MdfyekboZtrEd7DtPdCqMr5LxRV1Evkc7qNnkSEZFm",
  "key40": "22gDjk24qhVpVgfWn9iDsJdjySmZjJ8ytMpLXdfNG2BeVenUhokKbvLsUY1c2khpqbYGvNbWmp9MDYmWRDRs8EUi",
  "key41": "8e3t6Q6xrmbbJTizcQStm8RtasBzrDw23CrLPjUs9Y5AUoSnpziyy7wnGgcWWJPEK2ZBJ41W9tDWzQq9HpZuFJq",
  "key42": "4xJ9A3tkTT9v7GKxjdbMKacLqApAyse9kEVkpsMss64LRRMisKfHeb17eSUsYTuW3Akv8H2WEazqJnLCJV8fK4p5",
  "key43": "4V3drziiUdNnRhGQYfvvKF4tM4bytvLTzSZPQUqLD4t442iSVchDjDokEgcJi1BHoC71gyLtFUsxN2s9DzxA1TJD",
  "key44": "63MCEesroWgs3AeUr2W4WiNXEaWw8Z9K42uPyZ45d491sbktvPJU4rtZ7GhNHgyD2tNuW8MKqAxLGazaEJs7ouWx"
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
