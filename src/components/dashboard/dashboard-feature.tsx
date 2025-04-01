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
    "7cJXK9ghrZm1LfvMt1W4LfSEpwbYnJFMy48KUhJFSeDnm3twGKrjJdtUk2tLLZCv3Ui5bkFJonFNc7ittQgetf7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t4UpgG6w8xKt8Yu5KahQEXfi42MWWWonJ1tWY6A3FscD9b2NTdsiJgezcyynmMSJdLSry745Fi3UxroegPMN5VE",
  "key1": "67i4iVYNMD2M5sSUHRJrpAgPMccqdQfPMmwUVyEvPuM9WK7bjuSRKQUKdHkw6pY9b7k6Fof7VwTzucuURpjEoZ2S",
  "key2": "37iUbjdg3N6B5xxfKWjk7MDJaoDvW23FH2TrhNxnLDxbZuRC5PRZeN1WQCPropCvGYzPW2wwBk63mCEho4R5gPZ6",
  "key3": "NHfDGwjqiuBLQvyFt5axiwJGcTwExoH2WDXFWhoiS8sJdjJzEMgPVJHGjSUhyimSCaXwcMrYdqmMLSyps8yWrLy",
  "key4": "YfgJ2ybcu7pBtbTCQr944HaNgHToaYBfx5raET4MPDWzA8oVKntXGpxzKVVRKTvTLxBxL6cy3T5F9cMi9P952jq",
  "key5": "3DJZTxtr2V3nq8mVBcfnsBiGnzJ9NBA46jW9t4cbh6CwwUKeF2qqu8xW2S9naSVbVq15xTp3J1sXL6hqzT99RAZd",
  "key6": "kj8TJfY6p6uKAgcA9jbYZQX2gFBCcwwswXXjfCexyJt7udpJ2jGkhrPh18tqUzWSRbjxXh4sETitaSXUV7KeE25",
  "key7": "4nRCRyjYK75UzqgvVgFFi9pJwuqTrcUjgC6KBPsQVPFgWjfiHTaa5ttLkmqgcjRzgCP4jYDuGBBEpsxNRXpXw8QJ",
  "key8": "B3pAZZ1Lpjg5ShirTCv3raEsX3opRCEc8pMjNNAvVMTRikkYRHt8wNNdzFCpnZB8bLvKuot2o1UWNER472AEk5x",
  "key9": "5kfvHJynTGmj3QftD452qPRwwVx2Jvh4PGoyXg1R7Rn5V7Gor3nyoMZjJEXbFNq8YarvFdqjaE3crRBMDBtHQoto",
  "key10": "24vNAQwz1ZaUwHKmFspQaZRfDSPKGDopVzUmYk6hJAE2wsuP4ebZLoxcGJTwheHtqcFVVCke6V9XVQaMY7Jb3v4x",
  "key11": "4gFVMYtvj51n8hRb52k5XZ8yJLkLfrzkDGRNjpr9Vb668kpkPRVVsJ8zbS9cWHGTbvzVXE9BXrkPh5SrQvpzmSY4",
  "key12": "43dw6TDx8sXtwX1BKtsHz2Pp5p9iZ11CXyj37eCYrAsPKKGbEFpUUpkyZh5hGqPdvRsQ4BR2tZMayw51f7PokKPu",
  "key13": "3P5PKsDk81tfWBBywPoXtvvd5iPX4zqdkNSXKBBdR6EUtbTC9FVcwk4jmsNsXjjkdPfoyJLJRHzWRgeYppN7YLu6",
  "key14": "43bPTnnS6abkofVtWJG9R6Auzumxrgk1zRKwEACJ1b2Gb44VfGHDgSRcWwHLAx6NccNUzWHUu4RZKmvEjw5iszZo",
  "key15": "3KHDBysT9B299rp5PmkfMatsdE44wxLGXv1cJLssXh6awNLqeDeeNhoNEAXhvbMbiQFXtu8M4TNi3ahuiJQyKLhe",
  "key16": "4NRPNseePGEWMcXcPZoXXruhwHzy3JXFagGMtShVkJMgvNGYsDKmGEhaQNhupKgrQGhqtjWBLni4W6iEbqRefhF8",
  "key17": "5GGeGhdKrt4KLGeBcawhXyLe75SGYAcJ9peRnLeGK6ZqgMPfUdKMSfBqLNobsk5nRE9rBxWyBLBZWL5Lmq33hhvy",
  "key18": "5J4SXfCjDimR5k3EMaTF6qAKtDvKYPEjDrY1UwF8WhWECXQfp48utraTpEWjqMBXQGvGZ9RAtMkAymgnpEwnMdAR",
  "key19": "256hXFyANQhvvbHZe8BGfJCnh64j9H7SDLFgm4LRY4HjAMAWgRzBNV9CqMSim1MAZm63ibUeokvFUbniSqwPvhEm",
  "key20": "4jrE2WSBtL29MnvniEyGNqUezpUMRVMLDkd3DSHkd5T2oWJXz77UKEzxzjtdpqJRYXs7qoZeWeopZSr1ujHjQCt6",
  "key21": "3qD2HXqFEWhgfUQSBog15JMmVV5mpZYe6NvKvpLdApKPJuHWtLgARxBEzf4qYzBaCuM5ptifEL4jRjTdoxjARRHM",
  "key22": "3YB1a62HWVxujgi78DaEGWi4m3DWBVCG1UDcZ35KW1ZGMkjaw3LKKSHqEMeTbqAU2dH3GWC6Lh4HoJvohq8VLWrL",
  "key23": "2nKGXRdRqeu6y4nzkhNAr69mL6vp9skYaf46r3SHETUv5L3uivRVt3BSJ7TFJufz7ZFtbPV5uVqrxpqobf5215xx",
  "key24": "kQnCXRei3BkzBE3C2rQKkVLYXk8hT9rrW7GK2gH3AMxqKMHvbK6K3va33UbqEeNLe4ox3mrPNbxZJXFhPgGiDr6",
  "key25": "4SrrbZj8ViZXGMrBDQWgGh3Sdwm4r66Sez7vUp1XkuamXm27kVjHZvUCd4TDyMQa1ELGVToiffPRVCdNPgmdPzTe",
  "key26": "54G9cSLF1Cuq6nLPZcg5FTYJD2heJrxvbWmQwcd84u6bgGEKY4HQ5iHLwJHgR3YRwFNzs8o2ZDVSmdjRkPr38RMQ",
  "key27": "p4kLHypoz1LFD8mznEn438Bg9Gct6ggwcfzGw2o4TyPow8GXY9waCAjmLXAm6RhctScYJgD5gLpbU3HAEZDsaxc",
  "key28": "2i3VjC2Qjtm8H3WAUrfJ6y7fhdiQ2kVdg7RoWoSewzdtK4owqdQuQw8jpCghsqfi7LVL6RyB1TPdTL7t7Mm9Mq3t",
  "key29": "2aJjrMriGCeHA2CsxVZ7krLpTTAXScCsjYqbme6zc9kV9bYta8jNKR2DzoiShWgveTUuCWBRjiNsmfh1AWFAWq3V",
  "key30": "4AiYaN97LfMRBqv5iyXB9xmzUUjdZ9PabW1PbSq1pweVHkBsY2iAa94CtCCoLkhnJZAewB5iv2d8gAD9wRiGzuiu",
  "key31": "NihcyXvbpk747UUsGZou1yjUccH9cudaHBMMr5xdEbG5LhU2gjLTtsKeAhz65ipjEutKhKAT1XvxXuZAMpS6CXg",
  "key32": "4NQEujKDEDNRwGA2fZD26YrhJGQ7kskrtz6zNrZKKWPE5fqpzHWZJNZu4CsVRChGdaoYAQmDw9reXcefjmVJTSqJ",
  "key33": "5WLcBjPgFuShcaYePKaDXSqa2dLwLTTLyC83FgcYnQ445gkc7CcZkqxDFkWbWycr5ACh6HJnBHYnmm4SZf3YYXaz",
  "key34": "wFLdf7r7L8xMJ2684Hp9GUPhKUw3oULDqQAdjfRMn4hDgqu1PJxEQgF8cgHLfcvPZNsTZnZKtHKaD9z7uEPP8iN",
  "key35": "3Pi12jCjwKhKQSNpP9XjsjdFg1zwTMTd2GZ1tmQ1Vn1jbYAVrPhz9dz3kmbYerAHAaNxkpFFddzkH532D4pkEYA3",
  "key36": "3is93PAKfWqegYbMMSaumQpkkF6vDATvrCWdioNC8Q2RgHc6DsnZdU1VCzbxdQSnzCWMWuzAAbJaeue5JHGYSj8k",
  "key37": "3DKupXriksfrPsPiFzmAoSAuP6N4z4SYea9dfFFLTSwJTyvyuiBKVzwGcrdiLaADB2tBjfpWzgPCmwW7BRo4UfhH",
  "key38": "MsixMznjYohBWFZk8v4VYgk8iKRsFoSPmBP8UUoAmM9szGxj8QC5SbJg4oCaLZSNurkYM5ypLXYHS81jyGPqKxq",
  "key39": "5MwXUPuAE4fUrop7dTSpPo4SfcXoit9vxqqcdajQdsAGdDjTdSUSs6axcVzJx6xubS7Fp7KL51sAhxuxDw4CmXJy"
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
