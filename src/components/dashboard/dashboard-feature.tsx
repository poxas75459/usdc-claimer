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
    "4GSG3Le2dk1R7goZDH1ygTXLZtuJtnaD8r3oLKfxYLbfitcaZnEtYVDSfMyw8opZVe9R5xaMjZ3HFkCMGf7k3wES"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tVdwSfFGRgqRKEpRfu3aircxqZFYw6SWF6oQescrGu9tRDC7KYXXzpgZHo5AXeiH75n9L7VjUQX3xveofeFep2N",
  "key1": "bfdBDzCssqtU2UjzFraTZcaz5N57MajxrzqbyrZmJCcVq3tLoCTn2cwTRHy1yjhD5VANRNgA8ob44NAT9vJ9iRY",
  "key2": "3NX6mA2tvssSSyjkKe4uP1myqBxwxJejMnRiRP4JYFNTTAijk4ahWAmbAUyxjnHHqMuw9Bfb9FR3o79qY8PgrHWv",
  "key3": "4XEnFNWhY7v5vgvtg1TP8vwbYJuLJAzYe8vRaZq44oernh1FVTUi1VcCBRnMpTUoPZezdxq5TRChnU1Jjs5QWbzV",
  "key4": "3cFwvUZi7RqzPKxifAWjZwpAeeq4qzXdNm4hK9VcXdyVetV6c7jMY8KnE8twvPV65vpgWwbWUtR1Ro9R91VmcunL",
  "key5": "4HBDFZVLPydGN6o42hbsHSMz2Ns1oX1j7t1Y6SxDJbAaKdYsqjoFEf2L2mu6JQu7AbBSRZdfQLWjUteY9BLWbSFk",
  "key6": "62SVu8GH3NXcZgYr3DqyvEaR98yhpURmkquBr62FEfbpSvj78ZYHWGMi7eJJmjz7vuHn5Tu1Lx7dKnP19uCBa2QV",
  "key7": "2LDdTzKYixuwfFukPSpZiodBr8E3KNG1cU6EbKF4z2GppjLBMSiSexTtB8cC6E5MRWppyTJPdGhw61tr9zsCfvW5",
  "key8": "4cQhPZaXbWez623JFiVWdp82WvoMX6jkyCWT4h5qzsm717xVWr9KqhCQENmeRMG5SjePLk5pA92X2Wj1j4xM3MCj",
  "key9": "46u2CEkrzk299z3VDAoeHLismknL4YqNCQpDKHZoWVTsMpnvrsj2HG57gwHu9SBBySYvhiyr7VXJposcCGGsXfvT",
  "key10": "2X44BucTdMeTHXzKsNer54UUt3jbG5TaKJqQ452DDpHK48tVNUNWaYrz26ne7sS5ATnDAPesbEaAYSJ3MZCKriMi",
  "key11": "4eJHPx4sGraYxZzALkXhmQVb7PhLDMS6hKSw3c6CKJKDws7DsBPKbSLkfV1HQVFx1sgdYapD8XFZGG3TxhLZQ6bS",
  "key12": "5ZL4q48LfjATy221NmiYkRmPXpMQ7bjRePhGBXRFayV7SnpNDZrdZdU12nUNc4f9uZjJgfskbCcTLf4MQEVB7aih",
  "key13": "4ctcbUSLpdan7zKzKmu6rSLAzGy7LvHenDUit8djYJm8bSeQuJ7uw9GiDbZSEQHxET8Qz22Xpn9rDbhaGuzLvjhQ",
  "key14": "4xsr6K4CG9ihGAuyYn7NzBpMThNkAjyrP9C5XN5xPrAFm6XKHttqt9Lr5uszki29sUrF9mCF4Rbo2dVjtvT4Twxz",
  "key15": "4BnhuH3LNomf5EhcNP5RNZEyRAJGtE6JnWKmAZr1jPNsd5eqPTLqJF8prt6yKr4zFLiSBGjaeKxWzuUeYLXszYEp",
  "key16": "5JsnRxH21kt2ZVr8vGHTMvgzepZmca8QDgT65vHySK44edBVE2moeNkMi8NVupmqghrdWxfMieEBE9zjJGAbmU8D",
  "key17": "4Fcc3bXMtC6A6XAFZnCq6rtVmDwZ4urfQ1zsjmgznvNE6xuKPzjzChrZcRQsSBVViDPBTJPC5wKVyT8aL3BYv4aR",
  "key18": "Pat5rcjawK7Sbxo4ik1ZujoFYzdE9QQEtKTErsYjUdei8n9gGdX75zeVbSaJr82T2gGNJ2VA4jCHdEqNWc3B9Te",
  "key19": "5ugya2FxVZsR47wPPZCygGvkuxBHCh7pyT7xJBNbht3RzGG2iRec1RKDC6be8sPHuMCNjP4JrLpGB5JAyzwHQQe4",
  "key20": "21Ek73UrtP57QfBrV5nKFtGS25vxxfZjmv2d67Z8SsMTKVbn4MfpTcePHKNikpM88Zdse64yj4etgxbr8is9FSDk",
  "key21": "2H9gxafg9AsdRnDzB6ZyHYXXbTP65xD2berTxcfNV5LMmZavJEDUDZFQxLuU2SCYnDCawU3hWAt57ao8in3HkV28",
  "key22": "GSvPV1pzJpaHHMpBwgYpaUcYeutP7WAZRowuMqxPoaSPEAtNFsEMdg4LPJNPwxC6wqDk71oNEanBSMmoa4w7ApV",
  "key23": "5DfdSwBRZHbpT3R8cjt6XcWQkiKeB1UELDM3q5fobP3kLyA97PyGGiXX7WtUMUAbjPLEuKsV3KfMZMdLbu1z5CP3",
  "key24": "4Pr1rcSu1QWqXaXjEBkrXFz2dCET67QwBx1D9Uie3rru7jqPxpFWg9C1Uf8zrDkbEmbPFVsujqgP5WfnsHaozzon",
  "key25": "62V2fGx1pNGKG5BaC7oEYW4QQF2pP2cmbE3xMRuuFVhA9ERUQmfY6v6qJMJKTjNvxmxUAQQWiXgXj2LXehoRXmw9",
  "key26": "59uipYkGobSBxLfhT236hdkCmDjsxzqBW3aA3dtUKdJp7Trp3hrNQ9xA8Z8hVNsx4T66ZrN6y6SEyqRqjmQ6P753",
  "key27": "66hPWELdwJWFj3chMo9dTbyRnbtUKUbrDhnCUjw4D3qvQPd5WtiGWipDjACRr31TNgNLW8BZ7zJvd3GnA33H1v7s",
  "key28": "3xwwJdegmZePcpi2axgRnH9Xw82qFQwPPFKjdxjv7525q9MEJcwz9oYHkuCWjLy8vHHxtc6nzZe56PDxRP3UNUy6"
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
