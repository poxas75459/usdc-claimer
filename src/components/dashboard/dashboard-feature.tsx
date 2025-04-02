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
    "3yeXtzLx1hmEoEGu2vHJeAkehMmR5rnAzU6jsmHE5ndVBxbUpE5BVXTNWx7Fi2ZX1znFVLdkX2J7FYck1Rht2xJR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dvfW4uMQTdohaufWv4HbVwFgERX6opn6dzvrpqNK1QxGooknzsympZn2ESBpvd9QZHg4mhbXdYZ8wZpvWaHBoU4",
  "key1": "4Zgp167hn8xUdhzbUQbue3KBxKHZqGSyz2zHKqcXySNSJ7hNUV7uoUE6HaWvKQwnP5PddSG1x7xTVQCTsASq6dce",
  "key2": "5JS1NXjXzW7f3JNTPwCzy9iUs14Sns1tzfk78wnpVE9Y63zTqBWc9H3vSp8dxXF3oXuEEDMF1nHaGpiTCZbUYQMM",
  "key3": "5q6jUt6eXtYjbrFMsegWKYhuASJCcpYB1tuhRDRsKfnYjJeM5MM7ks5hxKyJXFfmkDoBUVydAVEVwY4WfcrpyhcT",
  "key4": "5aTeEA6iSSHgg9aaNwG1vpx1dZ2FQbEDis2w3AkxMQCB1MSzHPySDVGjx48PuVC94Qki3WcbAJtRgHM7DymK6YCm",
  "key5": "3zwxvdBC8tGnxXuZzmYfC5mAvv9PrFmmkCA1TsJKVYooAtWhbDL89cJJQFNFWAa3Fp1R9fj4QigDEvpvEjekdEav",
  "key6": "5cpitcbDbfexUCxqWGcuTYNMT7m9H3vN46FpNJiRNkCcv4jTLrxjpDR7BWjP3K6Ffs9B8BBvNYBoYwC7zm8nZ3JB",
  "key7": "jr1cenhYGK3sEJdbbQYAKVxeA4LxBF5PhNzy8Q3yqYSg61RSvkoDLonGDYATvnihE7qDqC3RSXwbXcAREHb4saJ",
  "key8": "3TNKjxDTZJ9GfjYZr3F5sAc3tHYJiBAMQDEm92A1JZtno5fsSzxXsTZx9htpJb9WPX7fjjP6FWA1voWeGq2SQgP5",
  "key9": "3pKsAAKSndrgf8RrMWSctShWQft8DRxfQxFeMgdnH9f6DErSejagBBmpgyn2Jqz5agZ9qk3XHtif7MKYQxwn3gMT",
  "key10": "4dqTsNriLwMu6uhce9SCSNqHDyxguxB315e9UbMBctWZN8EGBMAzNs9B7hE3Vt9KjFXiUtSn9jjXfPnEKUDbM1ZZ",
  "key11": "2b7PVEyyfepTXYkjQwTx9AzZYGEDDZ6PhqJpct91iCBsNBLpjKDiX7NR9FMXeb99hrgFQSSmmJiGunTC8NF4GTct",
  "key12": "2nZTRB1Kzg7nQkoDnkUG2zg6Z2HbDqmjZEtDb9ewuAnwknwjZVc8UuEZwzQzxTXsP2SPwcuJPv8z3653RfPRqi6N",
  "key13": "4UwHsoR4fkWpDett4jeAhzKPKbJdGAUSRAowu8tsrsj2ELTNZeMkPqycwp6PCZ9ZrtHP5yLhikVe8tCq4ugo7LJC",
  "key14": "5mFPoRJHExU9EYXYjx4cU3Gx8pJur2Z6wJbGwrGbmaKQPuctLit1XeJzfjrUVB4K4Do4rL5FDFuZxCU84ErCoZ31",
  "key15": "5UwmyRRHqMNN2oipvh9TAUE6bkJ37MCEhnhCoM5jVeLhsxBoNkVoyYgAqe8uRRwYGdBkrM2GhsX4KG8YvJXNB1oj",
  "key16": "bvVerdAjP5xTtCNuJN2Cn2deKLfN5z74SrX1YgLXABekAQbaEve8ZDJSHpbvLDD4YjojCBzfEBReNzjq5vGJHFd",
  "key17": "5ZKRrL9XVYVbrmko84pcw4RtwCJTT74ggdmb9aojkNbSTxxW4Vs7sJjPDAN2CPx5bLjMXrBnD6wfq1uCQSNJJWFk",
  "key18": "cqzwQPri8M5o6XAURiHwZLYBTSi4YBog2QwEBKZZrz5nhukn82zYPbtLwsyzh5PwsPX5C7TVLuCJxtuwCbt73Sz",
  "key19": "5gdVqtwZLkPHKa9kmAZdmuR5QjgicJeFw9StaxYtCdvTyBhGEtPKXy5LteVnuoY5UVm41Jut5U7TGg6v7KzgxAPL",
  "key20": "23z19JcqKPraBjAJVTtrPDq7Us4D5cQG2g79gXzPQafpnBHf77og86bLn5EURUr7j1sR1N1THkV6DSEeP1swj7rt",
  "key21": "4o89buCMN8YdJxE6NzDvJM1Nuw45r7rqCpLkCmGFqRaj8CowtToJK9oCUKkT8ED7NFZaso8YpkuCqYCxAGHiVoyJ",
  "key22": "25SYiYeecquVRorWoCwTdHiUjGQEJ5UTYum4LY41Fxd2CjogrAKeYUrA9Lw3Z3hRiahX4BrzGKvDDrmsKptHgqex",
  "key23": "5uJQhV4TTauKsc1Btr22vacX6wrPsL2Ffd4o7aRzETeRcZU21qY3nCDx5ktF7YCF4LN9dznmsM8t5De2M4BeLnxC",
  "key24": "5Xz5AwHZx4rcA4ULeGzBbf6Y1PpXHcWjkiV6QNa8rSMmXsUKt76uAVr18B7CRzxf5zu1NVQXYVMQDA749QY7bra3",
  "key25": "tkAq6jM662df4hjLAm8EpXHUKoK7Ww6vBhaFUtgXpsYUW6kBEZi3XWLxwzo5fixTytv8J7FAuwaiCJV8SQQU8sP",
  "key26": "37Co7EYV4SmYgtChyHA8ifRjoFrtnZmkKTnJLWUp5kvBWZ5TNcDuoaX7GzF4giYMeA626suxiQfwa8EqgaUeYN9e",
  "key27": "CA2xnHb2qK6q3vk7ZHdgJj1vifXx76MP5Dp5sRbF2oSqjZn5TWrcJ1tL7KQGNN462fam97ggTjzS44yRWPq4ySq",
  "key28": "3qhEzQrBFXm3wyzedtXMwYvjn2Bm2F8gfHaLPVNE4Dvz5Ns84bgJv6X2wWv3JujHm3e9nVxxfMqau9GKdCXzTDMN",
  "key29": "ZHuAj7GY4U71WPCxcHoaaZTce8ZgAfxFdjPnxSXfdLrzLTAfFpwYW6qJwQ2fmwWfZCu9bQbKLsDLgGpysQtETDp",
  "key30": "3mhZbBJE9PEd3n6Xmvhr7Qd4henEn7m5DptKawTei7CXAPDxAQ24MD4YQQg5BHHUWzvzzCw17bNMJ9dUbwLCJjEn",
  "key31": "3hfVDAMJmB9o19x59PkMKjyvK9oMKECNSMnYZVxfeu8PQhL5J1KyDR6DMdh7JNeLVCFrugFhsQL7h3SrwqSbR6ja",
  "key32": "5AWQezVQmj6YVdXwGr9bovuxN4ZE8tztMoSZpmbLVKU8cKYsWEaWXxrVrzC9cuiFLRzH9HLvukx5SXkreL5kCtmT",
  "key33": "5oy2SRPDkNKuuVs4aEVnwTsRuw1gF8ovqd3BmetphYMnVPKEGR33UxviDSAQoASY4eTi3tUk1LycGXqhQUHN7i7f",
  "key34": "3mfqKyZXGLY5XpivHPDc12axRv42UcDhs5y1bgLTFqdLXjB72rCZUE5CWTZ2icaSFVAztWe7WSVYDNiXBpd7RUnw",
  "key35": "3XT3Y1Jrfj7RRQwSZF3sGzrMCs7DYSQiUVLSBMvNMig8XdzX43LxQnfwNWZKKmGJFdKNz7Z4ACrKQfJJd8JKSFfn",
  "key36": "5YG35xg3hBXaWCesNzbZ5Vah1RjegDx6jbfP4NWxiTydiMBCHaMfsSKsvbjPVeSDPsNgBrfp8EB2DS7MkSKBQgpG",
  "key37": "5nfQdzPBwrysUYmhgv2sxsN5wCnhE6LBbQ3EZ72yLKqTjfKPWHWGwD1Q4TXK1qGPTKvD63tWV3o2dK7AMN3QjaDC",
  "key38": "4RN47kN1jebtL2qvLSjKV5xckygs3NDjhq59MhVVzYSktNr3WpcdgDKPKzy44FLVfjjA8dTiCY67FjUkgNptkqkH",
  "key39": "4VUSA5vGJbkmHYutov53MW8goAmiDoVmAqCCNC5AvkfT7ZNX8H78auASPBi4nBh9bCHSwRT6sksTYoLRaEsma2AB",
  "key40": "4isTmL3cd9koHZZdKyRoKXytZuze9jmMLgZPyZ8du6FLDyNteSvoJrrgGhyK4w6bA6aSuaabVwMkqQnMkQN5xJBX",
  "key41": "57s9GdpJRMDvZs2euQFvKCGxb9P43v16KHeMx75Y1Dm3HwtwvxHbxbdqJikzgs2DN6XPpSjGe7hMEXQh6N8HhKpW"
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
