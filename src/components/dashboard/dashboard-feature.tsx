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
    "hj7eC1GRQa5bZagwsFDcpSjnTQYGoJb3FTYbffwXu6KSbh3GZ6wPqoaCLYHBZpofKpaBw6YnJRvGd3s8o94uiWf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48gNrn1yMtEytbnaGqkDBGUEpqTcNdfigSvfWGjgPAosGAgkANeaGta1ZbowbDWrb6Qc9LJW2r2YLHW5KZgpV6VZ",
  "key1": "28rPTEqdLkVJ4d1xG8BQUdJhvz7HLkKvR6xNSxecMoRGz8BPxKtEc9Y1YjwbFaz2YYgvFqCUhjQhGxpqczsXZvaL",
  "key2": "3en56KfFsVTiMLP4VZNJdtTbpebSEzAeoXLHLn4eakgHM7jMLU9Vb9bJGsFCQptQZ4MDEf2zr5Dm6JMWFpTh7Fyb",
  "key3": "4mCDnX5JWwuZrsX9Sv5UEBBRds9x5UxXxFsGQE1dGm5e8ENu2MQyo3iUhCgs65hJtysyQxybVCHw9X8BLdnHxXxJ",
  "key4": "2HD5yDrXfoGgwggrc2QStA6qE3wCQj2D5MrGNMe1eDvgjmPeEECRZMN7U8iMUjKwhEPepzHguFiQPiKRePWhHQ9z",
  "key5": "fwe4dFKU3eKe3GECtXTwE1EMdy9jxP5WAmLfy21zRzY36JV4uWQp8VG8pJaEacEt2LhJ9ar7VPAtue22cMzD5NH",
  "key6": "3uq3fFqmsH3w4AZ5H1iY1HBJiqDnUE1DHWjeLjZAYDBsUtWmBY6NagK7WG71B3JRbaJ3VXis9xmaHs5Ww8L1fzQ6",
  "key7": "EszHyup4qoXFe1pdANhgEfs3BhwiCtmVNf6U7vPbQtBeFd4cAUBQbtHwkzSJ5e1VaTPwdrorP86TnuHA1hSFZJX",
  "key8": "673uTJhEfErcTXhPH9AbPnhHCTUoAbDMRqAy4erxz8sbUFxA4hpj8rfKFKVbQNj13tq7LtyfpTggbNcFGhPfjZd4",
  "key9": "5pwgaJTpPgQyPxyUWMSWv3PhYfesxPwvL8CoXxyTAAxLBzEjLYFNdJ8rGnXzNp9CAgzEqGwsee9QmFe8Fev8GPuS",
  "key10": "54zVLq1Z1TuRu9T9TcqnCKzihqXSMpEtLxs1SoY3Yc75xWUPaZFod7fmiLtMTGvFhgA8F8sfa7w5AEor2skwgxNx",
  "key11": "4DCCnp3hKTxwYURU5K3CG116EB5gBRP35Xz3k62NqnzTxxRtARku6CaW3CALfN6iB9N5S2TuERff3drp4QYsVuvn",
  "key12": "5Vd513GR3Co3MYZYo8wPPtjRePJYK2GNVUy9yief5Nfzpurs3oX7VXVeoJWE59a5KVFisr1bTaEnq7pErVsXNU8H",
  "key13": "5pJdPMfU8GVqbCJm5667BskAiaB5HNsarG8RF9XNKSgyWjn5hE2j3dQJbLs2UTiNXSSUcF33ZDBHH7vRUrnEgWbs",
  "key14": "2ayKBaRx3rkvyYTKRPQvJvSkt3yuJ2DdZdMC6dn4wR68mf1pgJhAb59AQAFWUS4DJEEDE6huVhMs7usmUsm3gbrj",
  "key15": "3n5hpPkG12h8MzG4R4R5RpGahDPJZaR1T4KGP6TbHEKMJggtraVBrdic2DFyGqA36aLnHE6tM2D2pdSkJxKhpAcn",
  "key16": "2bAgj5RDANcoEU5MaHt2gM3sWP4pt1H5msmQi9dpSMCY6hjUM8bMTeqPCQkok8hPPE3Zu441MUH2Vo8JkH14XyMy",
  "key17": "5TtDuBCb4d3cq8icsKv7ZrpHFeYzv4kQWxsS5p3Nwt5NH2LMbP2X7b8jLHRL7Tpee2JToeVDJJrSeVJ37e9sM5mn",
  "key18": "3aHzx6qyooFUg9hFjWWeJpWFHsEJHePpkA3WoTNu4yyM1ApkwQQY5v99kMs4t5MD5KZL6sMwiG1NJrHo9JUoEF1m",
  "key19": "29rEJzW8DuBAvsk2kbpAPdyBTorUyCigNyV9MgiVWTRUGhTKUb1yS1AiQLVMWQDrzdmNLpPGcZHyEQe4KPdSai4j",
  "key20": "34SqgMv5RqCbFKtnp7ArsgkfmcrDL7nnnTtsiF8gqE2y1cY7iumXzSV5RdUcYziTUJCXHFfGyc5JtVw13qUqLccE",
  "key21": "5iEwKx6Tufh2QLRAm8edTHFeKG6MX6xox1FZAVdAeCstwiqNuhr89gHgHxZVuhhJNcWf2rGrWGHKgJSRcKvgupMc",
  "key22": "4jq6cAzo23LSr5AL2WresmdozmzJa1tR7PUKVmi9ybk1PDscuFsYtLrz1vXWnL2zBVu9K3wiM8VQoYbE1wP8gAW2",
  "key23": "5Xgmbst3nWnQ55xmSEqLHNN26wnJur6G7vXaQAW33RuzvaGnyGEt4hNe6Nqs8R4EddvV4NkxcanGKKkfxoQctozk",
  "key24": "EfAeFhXoekaCqPZwcYAY69FKDGdEda6ZhYddvAGZTWTeQTYytF8saa13x9hwtpwHPXyFTQC58gf9PcsZdLjQMJW",
  "key25": "29D5ZFLKNoypCVaycqE2F5bxRX1FwtdSQhFPaxiKTgkEG2Q1geM9gfqRWx2m7t59qahmufuvQgCSHZ5zsSA3vJ4c",
  "key26": "2Nz1E83Ycz6eai7yesUTvFdraFVJaAmVP9tXWYvo6MPbQ9Gd4H7HDoCE7RGGbbf7k2oQqt6ThLR78vHjrZS7Y3bQ",
  "key27": "3udk4VgvUM1u1HLWihy9eW8WFrrq3dScQ5ps8Gr89R9P96eSF7rQcpcRmirGeeQsTWXot2hSo966vtXi8jsdFUdt",
  "key28": "216aF58wxeaP6841UNfpqwXo6Mv8z7gjXPiUTV8REdBU5p4tko2HpaYU4HLareS6ctsRnyHwoXyGJgm2WZUewLXJ",
  "key29": "5jijcrZxKd8w3wsPbzu2HfKjxr8HopEDsWKrn4nPMDWi4DdJUxqdBHvQ3jXpA5TNruUuZpjckrw5RbHqWGAYUNwr",
  "key30": "3qoMNVaj6PNtSZYLMnz6Zcyp2pMxig4r6hSqqVyRkETXyZSYWWR635HhsyBEfdPmNxHPFWfw8jWGvkL5PpHLr67v",
  "key31": "2oREkiQRJPkKJJCsMFkGscq1Fbp9qbiPXBhJ36j56DWikbSyS9bHEe56PLTpfWSiNF8TmyAkNxUgaMKiVwLRNNqR",
  "key32": "4C5ixX4j24ER8mVV6MsCcrgAg3L9qwLjZ4SB2nstRcJc1RC3MqeC6mbwwbyT355Cf8PhiS24jg8Bv4PhUqPJU4ay",
  "key33": "2HMFphC2UbXavnvQeWbGV46FptKG1DN4q4UnhgWMRiZc9CPaYnKuUP9bxq5msbvdU2W9FkyPUwVeR5i5WbufpcRB",
  "key34": "5YvmjcfgmxQNJm9avSeYjigsFiaNyP7qNTHPHTT2xoG3wFhSGv45ciCDEZNb4RLUbycX1AF871TZz5BBDeLXxByG",
  "key35": "4yCaEB3hMk7C264YFX1bsJR2BJLki9b4tosAVtTzVCnPJgYTn69H6KbeRFqLGaW6kDkzvbGuJEYjvgW8RgihN7UV"
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
