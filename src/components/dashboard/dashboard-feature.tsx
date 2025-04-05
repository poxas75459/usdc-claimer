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
    "23eNrAusVtnvXDvT76AyL1ArehqHAB3fnEwFoq3qdmhbrYEg6ETRQkHwV9GidVu1RobxF9gxCUpkB5r9VqysFASc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Qb8aegHTLysXMeDZtoar6e2R9bmdsoQ9SkBcZnQS3kKzdou2JV1SyKzHxszsGZrhENV5KDhvpBQNZ9DYiAFAhwN",
  "key1": "4M8QRQUfgfnDfuy8oXyqfqS1GVDe1DEhTY576B6BWnx8NDjsN19ojUYPAvSbLZ7E6Z7xprG12ur2EWReZkHCkewD",
  "key2": "4um5WNqBmM7n8f28kFUn7Nog6PxWk2jmkk9YpbnJjNFu5sgsV45En7isNyhWaCpXmU1j9JXaQnb42p2h4TfVD4Ka",
  "key3": "3cBVVxL8qRgD2UvSkwDbFspk2pAh7WTxRhNRkTZDsSX25GHhExWxJ9VtUqUz1UYf1BjgsqvAZ2JVqRkAHqm5EsTy",
  "key4": "48C37FpdM6gPmfmoDQ335Uwfq4UU6sWCsqb9SjhR22VoLHhHz3B7ghoPLYLqPnPhtzvajfMT8kaXbo7jdmtN5Jqq",
  "key5": "jyk5FskqXLmR2bPNEKWVGSPvqGZd3V9pdrm8hYTiXu33z3iyGfp1zEfy4sC9ikyFFjCnJuAz6CDvgCh3sXvCga8",
  "key6": "2QfynMX4odQwgpED5wmbxu85WZE5wuWp8R8WsvjZVoF4H9pyXS5C7vbfMx7Z7facZXtoTii7AGnfGD4kXaovxqXz",
  "key7": "5HenRbmB8ERxfUKL813jhZMhspfVLuuy8w5Cc9SSGduU4aWcNjuStzTtAizp1j24RRQVoSSrFiadQqgoPRNb67A7",
  "key8": "4J29BsQR1T3q1Cpwoxd3GmRCMBnjkfvNrjEoPwrs9o9PNarysaFrUCmDwvwK9PVHG2hMpRR5QTarPb3RRmL6ZUKL",
  "key9": "t49wRL86eGo9f3hR6MaarpWoZkbRHENxoWLiKufQcLKTnrFZFLx7qrhgZo57PNzfZD45Cn7xkiRCXC9qQHNyvke",
  "key10": "4QmNEc2BcdQ5m3P4SYwKoxZD4w8eCzAxw9CsxQpKszbg4EFZyr1nFRMPRjzdUghwVfWG7uiEMAff91nXS41eCA1Y",
  "key11": "2x9oHMGk2gKCZwgRurLoPrboD2HaY42t6xmrR28WuqhxzPZ9EXxNBxSHxe9YJn7HFuHB5zdHTzK5TdM3FcWNztih",
  "key12": "25pg3zAZRJbHwEpTXfpLsdowNZ6zfoaRXWEWjQjcJTfM53bUdfxGfDnL96ZD37fK1qcVdrQUfKkKBPs1MPt98Xo5",
  "key13": "64ZDGEzdC6aEtxy2GdJ44UiCJ77t6DqMcqcNvabadmAuFZAvzSrN273X22V4V78o9kXCjdzWXbefq4QjE4cUqQFo",
  "key14": "2ik8Kj4Nsg13Ua8GnuMgFtQ7US5e7FEbH6zED9agHGK5yFkQAg3aEfeGKVYdtp42dWfNgkr36RdqoYRM8rKss81W",
  "key15": "3jYc63FFZJjZ5yjP7oSJjWD4JCpsy9HfLXmxPBQVquwFacAwaj48fQH37VRhupfF8BrTf428Nda4hLps7HD7K2KD",
  "key16": "5kjDz9NLiCamMgyF3PjgWRuj4eyG7KgZsuJ2hVJR6gQUE2GsVcCeKmoerynSx2K6Mk1f8PewmWXGKHyPdwGKGTTW",
  "key17": "iQvfgEZpzT1d9WSdeAxT5vt7sbmAtJt824yE8ZPJyzDGXaQ4HSipEe4tAJZWKK2scgPw2r8Q8pQnqqAby9dyUi5",
  "key18": "4Q6ZFKuFpCMeMvXbyDPwAQtL1f3GYtNDvv3Q98y1AAqr1vzckM67yJKPXMDxXRDqX4DdG527XksNfhTGYW54nZUN",
  "key19": "4o4dUNEvhAQmZpMi8X8YFg6YK4iFkm4oA6uAULVgrtjGT212JC7tFKEmfJENannxGR52LYJ44jYDjsjBhACNxfyR",
  "key20": "4ivZoGx4TCGqDqBYLPTRt9mnuRonLwNzYHbV3uiiyoUNrSRfj46gxhjjmedYDTyxwpyABvvDY4T89RhmeAYZM9ou",
  "key21": "Rs5zgPuPX7iRk9NmGoyXyktuGuVQ36eZELeEmnGvkGakuMBUZogUxDJyygH4txRcgRTfj3W2kw5WjoC2tgyNVoW",
  "key22": "2xSaHiu6bS4LHpxsG6RrmYhZmPMGpZMHNxsU3ZpZJUE1MUKhVKgZ7Gta3KmApQFoDgBPdLi7K5Rs4zpVmSDoeT67",
  "key23": "5QuaRB3JpPAhG6cBT7R5jmCqDhf94FNNScCKJzjjmSHVAJ5ftZxK1YjQL4XbzXvjjnm9mdDNXwjX1v6qpkM5Nb6R",
  "key24": "4GdtDkaTxQWpiqThESfYoJJH43a645CcBCWcoZEJkL53eTdYkXzzyJN57ZJeb8HzR8LQSDJVAqvuea6ppCksc496",
  "key25": "4bHqNos6ukQXvGHrWbkK6eJqF3SfqAKKpvGdAFNyb24VWLYP1MRuQ3uuztkMCojsdQc2naBjd2fFZPuPeHEDt4XU",
  "key26": "5TW9XMjeniMcVjMvdKpkU2pNoyCoidsJDASEtuvjaUJDbj51g6nh5yXCBsJTn7d1fhhLwoFNfvfn4A719tUGHNZZ",
  "key27": "3XDfGs47rTXWJGh4GWJr5moS8657s8d1Uqk9NxspckMkeChvLM6w6hQdtpcQW1kQwv1BoZvHKs3Y2KTtRbhVcL1L",
  "key28": "uc6tbY2u5yrLXXdEGg9YfWLqv7AXMVQQV8kBsgCfZSq1tLPdDEddKxXrRAfeaeK3TNPVohc5bAL12PTgzA1iVJw",
  "key29": "EP9rPtTwk1CaZ4fv3GwQG5SPYugHwyqSHNcboxxf92w1f4Z7LcUN65ARDe5c2GD1B92x8NAuS7H4Y98URSvtXjL",
  "key30": "4GNgrzNT2tNN3QKWX8S2oJYurxAFGDoygqTum7ygkz6rRgxwxxoQwaoAfAuLet1YPHAzqeztZYAGB3Acs3re1Pji",
  "key31": "oq6EV49TuxCjEmZvLTasrjJmDQsBQ5JYCJ6MMMiXjeAy7UQiTRyk1ZnLy6EASTzFKhUSffhrcvFVu38hgg8wm5e",
  "key32": "3xxVNDaYp1d2ca62Lr44LBzNtaYpxexif8JXxyxeTG5PU6EvK5d5qe5Dvjgn6bgc1BAuwsawtLFrDk6AWoRamaQ4",
  "key33": "3C2qQnAoUxBHxn1NfW1ucHT71suTu9xNZRxez4pjTk3X3sgVf6nxCebtbTDSmzZN3vE5pFD2RsQfGs3uZTLt4djG",
  "key34": "4wpQ8tznRC9FZEQaCDp2V5GNdCZ1VAaKom4cEcXmNDSwobkv35jn1JEHnqry9r1NqWYqBtWEbgMfCdjjgnKAckNT",
  "key35": "63vw2VPmNWEsFSByRCMKQp4GN7PzZAgiLB67LGAvvHMidfPqkeuVq6284cSceiEjpYCUtDMn1UGYedwDhrW2XMdH",
  "key36": "5oVCzTR9h54WpkXSobbCEV4V3SLaXyQpGb9pVfQh3CMtbstnHJnpJ7Uqcdw7zYA3mvH9E7n7GxUAnnptP5rmsnbz",
  "key37": "hFFxCd3LX6kmfhvK2MV2D1NW33ys7XcGsHSAtTnZzwPYQs191naALj7Gdvum6ypPHnd8CJbycRc7GEzp6vDwPHA",
  "key38": "4FvzqXmwQ9LbogCKgyR3guaUCR2aEtE9nZkq7mU5jUwNtej3zu1vWyC5FwdHjqpfQbLxrEFVVZYdd89kA9BwSFdK",
  "key39": "ZYnfcPY9unJfFjK4Dykdv65xDwXJ1eMpfem7hEvDyzL7jWc79PGkFhwqrRaoC7iu3MmRxbeQPgGqwn1VdDug95R",
  "key40": "4qnicn3yg9Eb56VoTaJMd8XkYdYk1sHfjpTNX9yiNoXQ7Nv5B1P5ichWbSXCwjDFX6s2VeKUfBTrzNWNSvoDsv72"
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
