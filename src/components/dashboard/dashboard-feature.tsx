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
    "54reDEyWHTvtPS7BEe1ohpgtJdQeLz6SiPbJi5WP7FJqTqUA6DwALyFvMTjFLhSGS8FEGKF3EbARUGxba5hxuj1E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pMPDaq6nLRgfQXz3WQxHhdHLjF4AyyYMnbyxx34Z114E9YgWuAg2BJ57jsE1mC9drS1oSbkiBXTmy16E7BE6wsA",
  "key1": "2rgybkxajkjf2vhS74ug29qZwEdzpoj3UoXi9cor9rGqxfgsgfG4fJKbmwRLMxitagPwdvsUjGQgVNi5bExSXURH",
  "key2": "23JM78h9uvsLiGEtPGiWSmqPwHF33a5123V1zDbaxX99wJw1Nfkhe5r97SzfqLqDLxPqVrw1oNjdWAVVNpAaBtGF",
  "key3": "3NL85rSh86mi5AWNBuEGJXMja8xY7QtyhE5ciRk6msETXVaQivtcrFXi7GqcLaAbZvDQPVSsWpBurRq45bBTTGy3",
  "key4": "qVYFKhUppxoA1CtMjL7DLWt1f8dUjQSTkA2G7VZ37TTXCWA3ZwLieQPeU1gL7WkPGpYQ7eSnPP3DF6Pkq56UUqg",
  "key5": "4kkqABoBJyqo6HTBSonnAzj7duUYegkf7tjmfjXxjNC6CaqZohsZ3iktaKeYYLDMDHagMPFug7cyboCfQhZV2tdo",
  "key6": "2qse3oMRF6cPZjJ4arLuRK5ftzoSUjnxhnkuHyyLN1rvdVQvJxUEDCLz78zh81Z9H4qwKHqrQ7KcEQsDePvx2jG1",
  "key7": "56n2R76aLVmk7nkEK2ftbJLLUzLZm7japWqrGKhBGtyfz3WpcmEF2ACAsZjDN88rxjHjwSJLYx3ZkZQCJt98S6MF",
  "key8": "4uv6ioyCcBrFQLtgcQiYPj6pUz16DMZxS1EVyCNsQxTEGP6zEjTxR5WpG3aYuaA1tBr6xeC2UXi5fdMgqr5ydWym",
  "key9": "2dRUr2VBASh8aypkUHbPz8Xi2P3iQCEETNj7Lj6N93vsi9vvxQem4YE8UrGXB1mfHbLvXRp4WAZKPw9bJvBexKhR",
  "key10": "7PJ5xvuafXEv1exGWsYXFENam8ykjhqni3eYbJBsZWuQPmUeWBZb3Yayz1ZJMg4DxFxvYS3vRMEmgnuFe85NcPw",
  "key11": "3MZnDffRepxqKU4z65DLms1ZYLmLtEBnVbdZmEvQDT2FPsQgUhkDCpDX7jfiq6jVPCsrFdvYAti55ULMPG7TdQxm",
  "key12": "2TKjkqw3eZNk8yQUT4Pbj9Aw1jCSJRSwb8sqVWqPbYojK5oEZ2DmghdmQ54tejqhUoxQnDYDqjfz6k8c932KQxd4",
  "key13": "2kHkCep8WAiuBCnRYsM7fvVQj64dhmXDymrEJLTaY97hMjRuyTfP1WmczizKy8bA9c5ZiXo4GmsjGyXbaVUYSR1b",
  "key14": "2C2igJ2ZjsDsSMpH5EDG2Lixwx1gEj2fCAGXEwhu5jj18WCud6kkcuURuwqeEg3udcvmnu5FrthHbi8pm71zrkfn",
  "key15": "2yiQjWXiZxf9KuRfh1Dm3SP96rFd9p1XyXqLJ6FzVQMqgpKwhWvbKQgLaDtVRQ2wHBYdek8shTLZUhKRFAL3Gxeg",
  "key16": "43LU5md99wsL6cPJ49WUQufSVF4dhQUqEzkTQTNd6YtKBPQa2Gp6hQw2J6ZTY6nxMwzqat3q7CopFguE6MdohLfZ",
  "key17": "wyiZe9F7W3m288dN12zUJhpaZTgB2VoLyW1gErp3L6E7MJ4AG1141J6gt6CGtBe1NcLfyWuZ1kfRuDXyj5aoe3B",
  "key18": "2dLX2VmFeysFDriydygoGYVraHJftYNsZRLAKeVasSUitKZjv8vTBWLT7UePa3JpvTtMDQJPBQNUQqkV2m9phJKW",
  "key19": "4qpEY21eHjCM5wQMSSfkVGwJYcdpFG2fUHFv46ZW3fDjyLDaoxNhUtm8QJPkUBmyuQJn7QSwpMKKr62hAMkv4ppY",
  "key20": "3rZcKRe9ShKZDPMkptDewe54KFRKnqJLZSEgMXM3GsdwfPDWKYt53CeUoEapfp9eGvD8oxmmLYbuMocmMMAmrArq",
  "key21": "3LyFoDg2S4Z2ox2AJ7T55V74rGBFxgLezyXGCy42nhpnsi9i3bPz5hL9pAhepk2fVicgsaYwi1puyeZrZGUp4t2z",
  "key22": "5bHZ7Qd4KuSB54qGRwK4QHDkneH5NwhQzHqaeuoQMuka27vg7tAUAXBG8bfnWRzRkP2BKkTiRhwsU73Y7wsrgGA7",
  "key23": "5bh4N4dom95QYVjrEDQd6N4pKHxeUyvwffLaBG5As2718RjANwNmozbtw9RuAfgUemuTJpptDTUFvXk1eJvbstSa",
  "key24": "2KPZWXJoF8NYVWYEeAzmDB7YnxCMgAMfDEyzSd3WBN38M2vjfbn7WrNyJfweKoiDJexZngubWiWAxCJSWc3zpYfj",
  "key25": "4j8fdYXoN76u3n8Cw1LDDq9CsUE5KV6DrphweenZpdTucsBMMrTK68iCAQjkQiN7HwBGuqGmHdSYyc3NYGctzRK2",
  "key26": "5LyLK3vEpNGqHjs1DCUDWaQCbbhAuxc2DqQnik5bbhtmn6B4SrAznc8zghkdZbLia8wAm7ZnXcBaaquGsu8iuAMr",
  "key27": "LWhsaLwvWtHq8U1Yb98rmbxLvVR3EzpefeoJxUHuzvvxP32BaXwMJkkWKc7Zz5qWDtKmCgLDWMxUjmruirntUTq",
  "key28": "mfJFumEQP8S6RANeXBCjT5WTgEGw8DTh1KF2GxHpd4ksW7yKTXu5iUmVR3xxJMmCWFofHKpJRrR4QwTXnTc76bt",
  "key29": "QVAJs7y4V7Nv6d2nMCJmF27kbQHXZy99xxLm6S4kXHQ5ZWpFJj5EsrrwRJAFnNsdgG5QxAxZC148hVKBPmA3Bhw",
  "key30": "5gV9P8eaZez9AuUgiAjY35HZtwK8SuRymkmv29rikr8wWC98hgUBXvcgoBszUBX2cVwrPTTqhibdTJBhqhBh5SYz",
  "key31": "93DHtuvAUKBPMQdTwTAov5apdw4ewTEUFy7f8exk3B5gnh2oxCHCnSWaRoyWuwqemx22ukXhNJKrofvD9BshXJV"
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
