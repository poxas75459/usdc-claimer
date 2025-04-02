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
    "63LRvBcDVDbYJpMGdPJwZSJbcrykUFPQhCqDpECBi4PmqvFaMq8bpEpSJyiR2eqsvhUQGHkbj7uuAyQdg5prQgsW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AkiNcPZhd4rST8VXiuknRfAFGpRPbhekCCSLveyXEtfXBL9TWMXzxxGVNvW6ZsWo3p7apUYaPWwiUePvs4YHbBP",
  "key1": "3SmFuXuNA2TvidUHQS3ntxNHJNdmfov95tdVyCJMHgYsWjrrCqBUxkwiM4cJWcFamsueSSrCu3AdTydGzbYtkEA3",
  "key2": "2z29W1wxRkKrNFYF2A6P89tJNpNWJPiN8ZrF8nV8Q86E5S8d3UpbiGQSBHhEBmCEkDwSSPPNAfAa53E1KcE1GNt6",
  "key3": "2GRVTjFsbxuSvLaB7zArQypoQB7ymkpfrfUR8EvzZJKsbvH4EfPhEnRXanXD2XdsBSEj2c69NH7Gd1QHjhfapQRV",
  "key4": "2exMc6dsR7VdM9z6BSG1FNURpEDVCQhN6ueobotmKe4JZhYQ9piJvkQt6G4eLPp6A26mUn8oGRmWpDSAJNvBzq3Y",
  "key5": "4xfnFS8KZkGGgWmAdomRR2f6UT8txkZaes5xpW3xkztpvwEW8LszUCANax9bVwNsA7dd9P7U2WXVjYNrd98ekbZE",
  "key6": "2LN8tGf8fwFiDCEjWkj2FPXrhqBNKCvPb22YUFAunChS6BD4RSnngQPqkcQvz1KdmtXQt6evPSVxwW2359mvYPa9",
  "key7": "4Y7WqsnjzXmepm1ddDwBnvZ5bLPM2Yhw98S1grTj9UZ94rz5Y1fGxS4iiyU7sWMrpGqBmTfCJV71pg2XZvpk6Ki1",
  "key8": "3NZpHCwf6DeocmBaYgZsa1nNyamDXbYsuUVUw383P4zQzUEQdyaHdSJpzdGxbc6AA7BQXatQ8i8Ga4qTFQxz6oiw",
  "key9": "5JhgiUXKAPAWCQKH9fK67aEPCS7affohAQ2fMhfk6CX1dcRVb6crhsoW7nB2uH9mkb9pvRqqCF8hsiGuD82UCDMz",
  "key10": "3icxKFNs5SdTquP61eBtT99rX5nYcUUXAvt4N8rVnxsWCWRZVSYhZBsM8qQu5GTttWM2rDYRwJ7F1jsqrFUuTdp2",
  "key11": "2tKjhs1RkBnyq4wrpqJGi3LVkGEWxrHaHFzLi15pnFThxCshJrZDouue6wp6BoF8itoDE5tQA9EMtYxUQMgpCBCa",
  "key12": "4dqq3p2sY4zSjinMxwtsDBGFuYJQ9ickKB223SwGQRnC9ZqgQXuEHuTTHE9P44va7jX72d2Wa1nfgFQbm81rxwTL",
  "key13": "4ibhy3mQtzyPEkHigWwRnmEJVQNyiPeDbUtKcbxTUF5DHYycZmKownTUEURNmX6FG43zaBfZc9YnG4p2ZtQBPdhM",
  "key14": "5G4HkmRGLVn1VfcBueG7S9Nc4KbEob3phJN3urahfMo68SwRQXRWHWRyzuczwPevw9kWeQSfAu1WbMvUXkVBC4Pk",
  "key15": "2UC5B1wkngeyLFCZEWx4gUezd5LjkRGUgWFwJHFhvUU54DmmzzjT1DxyYKX7Asd61aBLW2MGYHL2fgZk7vz9EtAr",
  "key16": "2iniHhQzAZ6b4ciwhLjFG5iUXRfPF64nHCoErdrEzx1bRGS9s3gj21gtQVy9GiZ8qqj7yWozG8EcJ7LiZRBbX6yz",
  "key17": "c1G5A6CveGEaGfprvNfnFBkmFHypjoVkNKGnCoxJAJkCShxqsT19xRjAGwm5yMMipfFAucryLNaiwbioqsLK6Qm",
  "key18": "2rzkkka8KwXdwkzfmuGZm6zk8q99LsFZhv4Moukn8mUqBk6aNhA5kw5mkLmDy17RqsbCHfnULANVEscnhzQ9ZENe",
  "key19": "51EGhLfGkRfL5nVzKgqKameeiHuL22xWqDWiLQZtsdZLvLB6ppjZPqafnutedDPeCqTPetTR35uGgk5mfZLCmH27",
  "key20": "2hkVd3XkdT1cAyNAAgwa4ZrJ6t6He5udL1uFomyP9mZT5eKGTipdQghbTp2YYfvsQJWP42Zw7zUxp644PysSpH6c",
  "key21": "5yXENgvpFWLeULSvWPgfKtNuuAuYY5QVshMZzM9CrobrJi8QJKmYZRbu4DFHwSqCczBTZKCqSbwjdygx6Yo4BGJ5",
  "key22": "3mQrsbGUPqxv5YPcZ4hokKiUej6SQKs1bCecykFucnxQUNq8pYQP5vQ3LAy5o4bRiB5iEDCMLynUKwnidA1GtSUS",
  "key23": "61HFzUxk9y1C3Dt2MRAmAi8eWu8UziyEUrHzdinze1epecLrRr3cfZEXChR9kstDmXVzzTgqwDKZEL2U86gto1Mn",
  "key24": "5pvDM2AK7iHY5zwea4gBF64L5rb1eXmTXMek8WsHGwy7GY2Uk9TZKzAeFbiamx1Dr5ahk1B4cezYHJRnjQTRnhy3",
  "key25": "3ZLqD6CvKYBzj3Atu4nUWjYASbtBKm4c4y7TGJiKoEr6UpVaC8LgXgyWALoeDnEgfYjcGYLBJnfDfdzpDd8NARgj",
  "key26": "3hFFtKtqsq8V4ssFyNbHeLTTyP7e32gRRqNo9TW2SDmTkYdEVUQb6wvsuKXuQT1GdQhcWdJBArQYNJvaUUQowz22",
  "key27": "1EtWjixjEuT9qj5JCmN2x3SHB7MfRR8ndvaKF4jPiQZikQ3A5mGhQxMJKjeX2k9NGA5BcVuNnCGKoAL2ZhweN26",
  "key28": "UD63URsuhSgz1R7apSJ6gQyzDjKzxoVDQiZqfeEwTZwrVqfKgsxMUBnVaZdxTf9P1ZczxjyW4M8vvkFqJraGaFN",
  "key29": "4K3KTTFTuguXAWyy4tizbyefLB6rNwJTmJsbfsqb8GeSb9t159jGeemvbwTkvUThqvCHkqMND54CKwVUn7m4enC6",
  "key30": "2pkMzjS7WTU6m3b1p61upJJBPtiL2pGM7TiNTY4To4MmDUHmo36iddf2CKLhi352wCt4ZH9dL3tAx5rTXrNnVZra",
  "key31": "53A8HMgicMB8ipYnwQsN2x826GtKvdMAxfsixavpoBpav27uQix7j4RHrNRCavdPCM2NQLmrN6uSnTW9VKwM2itc",
  "key32": "3mtHud5sjDeDCnzn21YuA6Cvhj6Pnth8ah5LoxRpvRYmbf8QAXLa3eQyYQXUkTWFekBZsqhM57qtXB2uSKQgJfoP",
  "key33": "23GHpn4GGYxHmKEZaextTSwSKDmZsYnq5RcH72Etvx8CNzYpPcivBR4HSnkfeUsQ5qGh4cbuNe6GvmjHywNCfwfh",
  "key34": "2KFjKRCzGbD37nFWAYCUSmwSvtQCNBeL71ipBmQSdeCh6NswVeDmymxZQPC3fgFF4R4TAj1ahhmvsBz6B7sAkk3b",
  "key35": "3zZ8xQcRn4GaH6fiJzjYWofd8UDBsbkYiJWiqqSJ9PgzgSkuTdzr2pWFgt7CaMdQH71an9Ab5CRxqoa8sgeN1r8Y",
  "key36": "36FwQYcDqDQBEEdPaZ78RT5A4XfqBhyHvqvfb7Q6godDy9Y575w8jTpy7sWUoWRtvLbFjyZXJCtoKS6tiq5NLpyj",
  "key37": "5jdAMMJM81Tho1kfKGKC1ovjpfXQVFpoaiVzJCsag48rGDTHebgHwEfT7YyJNp5pxuC28pgpVXPskW4cAwjUv1Ay",
  "key38": "2vUtKn7FBAe4KFNUcPiqAiJYz8tpp4dkXPkWfDtdj2XgsNAd6TH5CtxDeePsKxZHMgxgrZfW5wQWEisK41nixE1h",
  "key39": "dqouwGW4DGqXikH2HuqjpobThoawWf14DZhaFB5Tn3G9Wj18Suqnzxg5kj31JT6kuozG3gMNsjMJnfprDF1z5sw",
  "key40": "41cVKk9TXX29QWXGMq3jEE8cLeTXD7MuvV3vWoSfgrzNN1Agxq2U72wAvSnWrWQ2N8EjAViSrJ4Ce1iDvB72J69e",
  "key41": "4cFJ9MKgbG8qS6Hj3qkU2zbtNS4yABiMy3uYFd8PEWAzKSm9WrNgsy8fNHxdAsWKTt79AiWZbBbxaV1UggMM4A64",
  "key42": "2CRTFs97ZHNFUhcEDAznyu8bETF19LxWeYf31SASfiP2B7uyYfoWQaMiK6V7E5Xy2mnUMYauBNZvVXt6Mhh16VLS",
  "key43": "3HgpU5YP2A1s1uPKXN1skKZVWQ6Qydso1usBdxekf8QMXpi2EmdZfMMdDgfrsA5V3yyusLfD3mL1DUNgRX7t9ZVX",
  "key44": "4eRd5BygDV8Ethkg9ZLqjncyB5QnM8goDEMYnucaegj5ioMZGKj4fMTDnh4ZUmiqok1SVEPYWN96GbUj3dYXVUf3",
  "key45": "5ceWYipG7Fgbu11rWfYo1D59svWp6Aoj3dpJo73c6LY7G5kZ9k53Sj5tyTyDPjVj3HPy5gnV5ELdXoD6DXuVTdyG",
  "key46": "3w2t9LR4PhQsgghekkcd34r7eJH6xf8B9VTMP6n2kUW3qWJyQMPnu6RomHAsNUPXSCMKgsvy5XJe9TUfgmq5bdx5",
  "key47": "5XP7W4fov6C2DwkPMkwdk4nmqiicrpybmLNFt5BsKbBgDGv1WkSJrkqierYnp1Cy1kFZdE4PV55jw5Mf9oBWK4Xd",
  "key48": "5CHNTL313JFL31EFq6ZDNN7fA1fw4CSivqC7BBddQjUUdJY21rS9jVeTBqtp3SHq2zc2vwiUjFSa3fcPoRS8H8ea"
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
