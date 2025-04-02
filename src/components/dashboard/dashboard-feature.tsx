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
    "3NPLWA7e85yPyuC74WYKpsPRNNi7JKpuxKxxttaTJBiDpy1seR1Zk2sQtW7T4ZaVEBM1pUhFoWuUP5KvbTvA6Yej"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y2mnKLc16PuEHrAk2SpFv119cFNoJApxBWNugQAjpD4fA9dy1pEh9PCgeztCizZHfGoYQjxUZnH5KLzFko8eQJ2",
  "key1": "5QK39qvxK6qYuBnwLJaGroqygb1XiSKEKtZrEiUB4CmF6gjMecvAKs7yN3FQxE7VTx712Nae2Yjm66DCENTtjBA7",
  "key2": "3qYB1N4opQYR6ohfoaDufsNauZUgvmigy21PyLr4iGgJXVf48zRh397EdiZEkjfvwVdyiRuobjXubWjQ3f2wjvG3",
  "key3": "3ZRPVf2xvnLF99DVihnUomprXCv41Ze5qQYESiHunNZJn6WgiEbwR6QdKhiRN6cMt9yVDmVExuZ47mSAv2AWxXDB",
  "key4": "3b9iw5cW9curziN2gVrhu1kzQTRN3hRStMjt8mQdoz1uGAhU22HmYYC6jkGFEnPJfabycTRGz9Uefq3ziJXWTbUR",
  "key5": "2hr4dqnWqkdVhELB5Q6bRsQaqYPnS6pHz6J9bRxY4c8ESFzXbYMJij6quqbPZUdGggLUKq3Atbtyu2XsnPq5yMsv",
  "key6": "3wAfeexf6z83zfoC17DJQuXQgCZ4CCdGRwS8jRy1gPangHxrAJZj6WsFZa2SjEqvTkQgep3y9YtvQ7F2mkFuzNX5",
  "key7": "2AUAw95bqr2ZFnZbrYifNh56SxvkcbD4nFCRyd6FPtUis55uGJpcRrpE7tZWDtwJs4RbnyA9BfNU3ioAvMaS5BdR",
  "key8": "4aek8QXLNrfBrA2v1No14Lfbn6tWxAEpZBHRENDep5R1g1rZMJZkBhiuAQFDoGxeuYorUzHBxctjwbwvyrcdZkTV",
  "key9": "LFyUTDCXMatsxiCj65CKxvqXDw858xdiYRYsATcLpB4RPLJxuK1VsB2ru4kNQKRxJhDT44wKos5bJmrV773tdpy",
  "key10": "2H4YSxFZudATUfqipv8AMUXNThLxpFcrWanQxDHAFsCUbAGQCiq7XoAGnWdofat16sFfCwerTc73s1QeKMMeYyWh",
  "key11": "TCG6yz8XD4ti13wHVJsXzMDqjdzyy3RaMPLpY4E5k4Nksd2a35CwTSGDPmrYDGtocdehjN5GFtggVUnp4vL1gRq",
  "key12": "3a2UozK16nHaAtVf5fp5utfUNGt9HMXt27h4KqLXDSFSL9U2Dd5XouhvKheASF7e2XDzzV5qvTBwExCzoUN3ZC6w",
  "key13": "4GvQ4Lu1GBrmxFaSqD2A1e4BhjZqgZ6kbbChcp9TYbvviEbJqHX28t9f1vhrfpkubBx5p5jDK4dPJ1wLzUZp8gYg",
  "key14": "5hhUGgVdmRrqq4roRzBtDGxE26kG6Ja6UERoNEPhPhePNasMaR4YQGAzZLnxtkKMy1EJQQSRzUVbH3moPpak9Yin",
  "key15": "dZ1cG2bwNNXwZZRYjh2BVnDXMsmzkMSeKAEamT69HmgDCZkCZ6H3yjWyUmWYBwu36xScNYvKJz6Lq21WfMjKNKW",
  "key16": "5j94b677QMJ9P2C9eabovH7x8WfqbHPQveZoZVDkY2udPrRF4hEyFp3B4ssMiA716d9spSX5agMStWR9KRAcVuv6",
  "key17": "2s1AJcCzopo8AehC455eaGgsPMiwpPEcHmZYEjmoPaF4vnVPi4hZZ9RzxSGBKn9Knnk7jgVSuBbURHwsavnJJ7Wc",
  "key18": "3wQnXqhERFpikwR4C72BGsdwmm1MJBtrhLjjRWH9Mesqgu6qmbqKFTZWVdkWn64XLUinkPtFCaDGBuxUi8CPsvD",
  "key19": "66BbcVj1BYNhXPgntNfZF3AQx2eTpNzYHbcV59eVx4v4DQp5UArtdBwHXJCQ83EViJtwBCf3JtsoZ89qKFWSWxfn",
  "key20": "5MgqWjGBYYQ5CCtj9a1tuQCERPFqC7tBetgZbdxrE9en7bERuSEYx8QEfnUaTPjpRHPn3AYw1cAA79nZ4bhYPviM",
  "key21": "59QrdC3iNaobZraLNjhmCXzE8j9XqbCnU68cZnY2uuR2FBh1GbhAnLR1wPCYx84d2sswtcKeq1hC7S1uo6Mtw5gF",
  "key22": "4eEXWzyBn7VsgvZ2VoRGZou77Ym9HSqAvBoQrAExT8ta6yQi863jGhxXSrhY5ReRexoJPGkXWV8gvFQr84oA7tWo",
  "key23": "2QM9hVfVHr4D3jTzjJdGJPadz5mNK1kUmhDHfFZucURwamaC5DhyDTqD5KNh5yZcNGoKngnXxAyaD2SFxmBs4oZV",
  "key24": "35h7RssCajNN54wRFX2SiMdBx7z6bgJTEtN4jyoQesaNoBH4WnQs6ueWZAxtwogzmHdR2jnyJAS5uqUe3NmZmkhW",
  "key25": "eZ4nZmtjQKPe5oWCW93AX7ypPjdBCKPdB9Lhuh93TJt4uT2nHXRLf3uKMnjc5WYjUNvDqtuu95wesT7miBii5wX",
  "key26": "3BLf59K16giC1QXktcq93DyaaMDmwsHXqqRC7caxfE3tmBcVJpzJakWdwgj6nxizgztL1sucaWxuJGnKDi3MNTK7",
  "key27": "DqTGKmALrjpxT5d5Gci6p7HBDptXBagYuFEiWHd8ebpuv25URE76AA8PXmrvNX2scppiCrahFBAhiKBstce25tb",
  "key28": "c2oGYc2yC8DnhVrrB1Y4kn9SnWykM7euzPhsUCWDV65c2TMfVBggHSQxzjeaiXkFhPN3tXY7eCYS8RSc5coMcqi",
  "key29": "38xHVjq6qHGQLR8VYbNs7Xn5FDXmirJ3UuRi5hbEH7TKZNzmf15245mvFizzEkFigD7bsHf6TQF1fKMaF5G9CNkG",
  "key30": "4NgaxX2DVeujFUehKer7gzQAL3ay9bkd3JVqbBBkavkCD3NmjjiiJEefp45FRjG1sCmMLqmhQbv1A6gHgeuN6ef6",
  "key31": "5aXg4v1JMeenDx9mTCSXzKrHTiEx5AqjXgeoPrhcS2tfQzjg4ti7pWFUc1rCQ2aWebQQZakS9SLiARkkry3fpK9E",
  "key32": "3AEgr9kb5pn9pQWnk7Bs9J4MgsfL8rQnxbwzLws69dXv6uQrrzrTGvxLHP1UCbYanQAYvV3Bq69aBM7b4jbAq1m9",
  "key33": "kDyqZkVj99Vj283wDLCD8rmmBfbhPBkpK944psjbH5febgRFvRJ1rTHtfDaWgRWooKXcBAC6jGnkjmMJ3J6rdxS",
  "key34": "2T5WCgPBhZL3gT1rANH8SgL6tbnqFrA8BMkYvLDoi5oSqCPyT9CswB7JLoAQjUpDMxyDzyMpZpyRH9CuMSdQ16HJ",
  "key35": "3u2STE2H8DewJopZV8zUS6VFS7PS3KSrt8aJfwJExR3E9WYS6MrThVNsq2eph9tvKQKoDfo1NXzS2rHjFkbF6ZXy",
  "key36": "3oLnRRokmgESYBd4fJVvbfTqmYghU2N37ge3C1e8gdnzEKc3Ccran4EdXTe9CP5aaUnAWQkVKGQ18C9LtMhc1Uw4",
  "key37": "4piJ5xU4uxa4UBU4kb1fuxfzCpbcyZkxqhxdwHorfzwEsMPCYCj3bPrjyRVs1PH4hhHsn3xszJzgY661xYtdxGkN",
  "key38": "YkQ96AxJX4QrMPk3965NS3MCs1ksDJquZyAigZh6cs9nuhhpyWarQsoQj81Ao33A9JHCS7fnYuJu8prhW9zbZf7",
  "key39": "2sYAhM7u738tsUXfBVZTsRQYkvACZHyUjsmi7tYhLgV3r6VnC8GAXoXzq6LVbX2Eg25WTjmdCSwmLj4R3qgcmegV"
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
