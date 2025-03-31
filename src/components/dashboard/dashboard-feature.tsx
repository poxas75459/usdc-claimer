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
    "2AoTTTzeRZbXY1qfnD2JxrEqCC3qZqU5HeAGPEeVa5PkzFNQxGpUjYBM7cnKGCKngSR8fSSoZKYutFBCoWAtXvMB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NaqktXDTGLLxpmwavTFAMAmiNZguMZzhFtzTY6X1q7pZs5CosmcnsEuuYHW2NAQDLi1MQPAMeiGCnoe9eM9UTp5",
  "key1": "3rZSKWVG5SZ1fhTHcasWhZEi3pPFxSpearADsRMsoAaEtKYRkGStYjx2qZ6yBwA6jKZuXnFCdVZVxBZNN6zSkHAG",
  "key2": "VCL9SMLU2fMUibYe2P6HA2RrDeFvkv8o1qnuTs7792CbQSZNLGu6XhUsJiPHQm27Mb32U7SubgF3kuyQZX2AxCU",
  "key3": "56HDC7awhahG2JMzMZaC28qc1jDhx7128REfHm4vSpdaFrxgByaMyqiJ7sB7HNS7VSNGT6ewhHU3mr7wvVG6QwNE",
  "key4": "2GCJ2BMc4m48HQfnf2J674XKw2QyD8dqQjixnagbNz5QCXdpkTudCNFDSY8CzAiwyWLaLFuM77sAdRjYdoZz6HvC",
  "key5": "5UNQVtRsiH7EUyYtV99fCwsVB22HPjAgBxGHaRZMcSpRxjeUg3J7MqJKp5qP5WFeqPSbPp9AyYU6BtstqB4i8269",
  "key6": "3yJ3X5RLog3cJpwjMkpNsdV2SmFK7VG2fpoqP2yb4AiWzdKoMaFvTFfu85KDJuTQNbMysuKxabuwTpuzHP6dfNhf",
  "key7": "2NJ7FMacnjdbA86RBR3RjgzWRWfDnKGsNjb12tWS6iVbK9P171KxFmVLkBZNaLra2p8CUoVUAmhst4WH6rTSB4XB",
  "key8": "KufQJJ4R6JRE3gWJjoe5fifCFRtUjp3k4RkNX7hCLHdDq9NCD9CbqBQ6fXM45ZXXXBrPgg3FLdNw1TFU3kEKaHU",
  "key9": "59h9dRwHXThtesUA18KCewdKSxY8zyudBmKiejHCeVa3nzrHHHhzCoG2By9fEwxhnuvEaKobNswjDxHYHSCaWnxq",
  "key10": "5V33HUUiW5589oAX8vhx4CkCsAQFSbRmPqh7EehFzEfD7S3PYmLR9YsnwwdhwomovaxjxyUy8zRrzBpquE1kMaB6",
  "key11": "E5LPHU9RnkQxbQv927fSTuRuTU2KzWqkEb6npcThS32oixiMsbE4vZvyGgHerRmEEmzmMaVg2ipSkvAf4GBq26J",
  "key12": "4BDYqdvUBUrvFunp6CorTjnXyjBWhNf4paq8pQFaW75apxk5FV4m3cYnFh9FCGGQfrGSTKDqAsCeeyEhWYcXjfWB",
  "key13": "5asnXa5JMp7iLYL4YaD3hemX5fQFEG51QRGLQQFALkCoiC5DyA2RCh16jvxHfscmkFNL9zratQDZ5XoX8S2hbU4Y",
  "key14": "539LaTdgtypS7aDFSBG5YY31Jf7giKpbM8uLCVxjRfV236CxgdfoPEFruZ3tiWAvyvwK34EWvh2G3GAf4fUQZiMQ",
  "key15": "3VNaw2QTJN3vB82sVoJLVhPhWMwLu3DJUT5LiUk2DNajyNGTyt7yRJVN8LLBvjt95cF64DsoEfWtTescuzPu8DH5",
  "key16": "21VRUnBd86iLq7DH9orZKaHcRrMzkFHkCKhBJteEJHjdFdDSssA83NvbzvT2K9j5PJNXVSPyCj6hLGys8ntGVeeJ",
  "key17": "5Bw9YdqHrWu47smhLYkAXbfE5ffSRNKgsRdtebb1jvb6poSDMm6RLd66bKw9yyvXanukLDyZWj6PgphW2tcJFCav",
  "key18": "5qjc2hUEcwFtHD1NAN58Sjxe6wuoSqkGdv7YFuqQzB6qTDKwYeXmpmYV3afKFmnfZMWj7cNfc8TXStbsfQ1GzBed",
  "key19": "2Hnfx9ZoHV3CzZNLQXarh8fVhHKYrBerUyVwTiwRkVnLoua2rrFKoV7D3rxv1FY3XNFXT3BMyrV2wTb84NyNbmXE",
  "key20": "5jLwhdwtHoZHphfL42nVDkbKRhxHYQmwg4Fh8AwhcPbhfZwB88PjgtSKmxbKMvXe2DU25j3Cnb43Jrkemuu3tRi6",
  "key21": "2CozKwvPrShY4pkesTHDW8Bk8HkqMegYX1H7hfsU2iD97gLco4sB8dbSmPDeDdZVo5A3Teb3rczRZHL1WR1z86PF",
  "key22": "4ULiXQUq64iN4SvtJXaLsVJ98e8JJ5qsfLFnUCaQXjZCimnXhv34nMbCgsZjQqp5kFFEA4VGKzUYsEX2GckVq3SG",
  "key23": "1J9RsPpgm23d6XTiGNdV4tKbcHtzG8fuc4Va9CKvMVs6uLydLjATVw7hEig6DW9VNzQj2spq7ipnVzqdVCYEZe4",
  "key24": "2FuBj4UXB8K7XEKNcCqRYyc9YkDRa4BcVjR2RuRsStdJgZnvcfPfunNLW5p9uw5FxqUSMyS9J3tQuS7YUowos9Cu",
  "key25": "aty6dRbw13jh5A8zCR8omwR3zNE6baLcCKEniKC7bbJs99DqxvhiquEVNbKg28RBH8mn176eYns5D2wJ7zUEDfW",
  "key26": "2xtsy8vrFwvXgW9ZvqixEDDYQtYf8t5Nyja1xsqG2H5zK9kdvpSiPrG1iJJXe1FfZ5jURmmBHxE59HyrRAi2JLZ1",
  "key27": "399AYnSsvQtZq8zp1ZZByWFKKZZcFxpWsiRiuDYYXAxj2UdthVgmTPs66GuY1HsP7pB1PytAYv9bSpuygD7frjAG",
  "key28": "31kLniRZy23zwKyca55cyik3Seb2Es1VbTFqE2fYuq975BHnJ1dadbf7YHzmbRRRVa3KgJsKYmadGFeMk8CyaiaL",
  "key29": "3wh87S3dVQ7rbZSTm54qqgBp34YgMdTEoFFdnp3uJXUgkC5gQdxdncFuYwziTp9PL7fmAjNoEoa5ZsUMxNqqoMj9",
  "key30": "3ADTjoxXHcZsKKySxbUEvmxD3iRttG8jzUeipLZysZRG25ps4PweqZKx1ze1WPmFKHsNoKSKFx6Pd6ptdhd4EmHC",
  "key31": "2b3T6NK3QRPK6MEHY3P3WzpNMeTyxGWrpTE49mPuQXLuZ7ZbkEpCtY3RLZSvDe2s9pSUGavBtYS9vssHLsKHfpwF",
  "key32": "2GjwWdueWSnrqdqtdjuXeZMYDT13AL9QH5HBA396XUuVgdFYiP9ehEPm2CKqeUSk8P8FKYkVPWSMEiTWueicJN8p",
  "key33": "5AR9U177vCniA9XapiwmZw3r7J9rc1C2YmyzwSoEYt6L4S3QEsmCFHZKsQF57phcM6aLwQy874rdaeu76LXfk9Vo",
  "key34": "3vy3mW7wB8deD5SRXsVjmAPJuZaU9aorqKeUbCma2X5cVqrC77MmmtwTEHcL9A7UsAitUQj6NH8xgr9zejZmBvrP",
  "key35": "5B9tG8USuoEkXrx8zXn5Be8tyqtkUFb438N6W8wKHKuvBPB5KiW1duSX2SRqe71oQuyk8Ze7zvioymPjZpyREVPd",
  "key36": "232XGzKzfDdL5Q55fYgShs8geZojKJ8K8N5gQw8ZAKkjg9MPKmRRrQ4BtryEMnkLKzohBpaUhsD3w4dreBLyCAWQ",
  "key37": "5EKn3jRC7doFkxDdqpSvQNCYpq3dkM7YdYzuG2uSiBGnpwh39wc4TRkTDn2DHi5JQiKmsDHLtmaG7B39uFmQf9bS",
  "key38": "2pTGCgfCGRjtnxmxa2bhrDMzctsC6J3yhFNXVW6G4VTymv9m3rJxsXe5daaNffXQMe8Y2iZ44ZCiygDTiLhaiNo8",
  "key39": "4wowNaQkQH3AKWxEKsBRUAivEz41k5T5J2nmjm1xcBJfpZfj74fXs2oeCbDdH27pxJmkbnWK3ZXE7MHb8hK43sxh",
  "key40": "RXveBhVQFjhZ6u26XeJomng5VD6FFpNoEv2GoRjj6QXfufHyXW2DEWb29bkpVEk2ZyosXoFdWYZwtZQdKL4MHbY",
  "key41": "5kSpXrocUKR9WQxVEFzwjmuZrRJLfT94pF6rfUsJy3cUhevvdRTA5ntktNwqNHS2u1Gu6gdWiZxssv9rRFwnupjW"
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
