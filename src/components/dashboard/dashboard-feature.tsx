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
    "2bwr4DVRFcK85hgFuNZ7go3uhKiV1wYja5XSPdfWi2cLJU2kA84E9HjkoGTZGawYc2dZZuf1KLPPe6ek9NYqtebu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wmNQSgvJcFZursCd2Bu43j35rk2WDL7kwi7S3HCa9EpLz7QWmznTXKApF5vutAxYb54FZk4V5wrDLjdKQcbwNFT",
  "key1": "4ci9bbDuS518frSiFNhSVcp5smuDQNNABTkEjyxhuvr7NH8GBULzNut7DSYJfbQYZZavf9aH22bSrv3RwWa2NP6p",
  "key2": "5Ys5Qu7EjE7NYpKN1Wkwya5KDXh9XM4XciuUuLWYCDqNH8SXJPLZd4A7FtTjHZh8fVEv76SNZumcDQQuXGsN7AXw",
  "key3": "3k75ZuCZV9Z7k5bwRmGLQc8TP8bVW75RFZgaEhuoyHiTEHfiMeUjL5y1p6xDHqPC5JAogMqHEiNqHhAJUVxA5M27",
  "key4": "4TJAcdbHXvcNxWPdLc7XZ8KTRCDHvaJ4acA349WF5p5dPtcBvYXuC4aXg7U8LFtZKn3fRT4U3qykWM75HcmFZLpA",
  "key5": "4xJvdjN185KDDR3RHCjCj9dvNZU9uY139DDCnJQbxWWtv4rfxfsGkfg7kiP4QyqQod9xdEC3ahPUfu2yx9gPVE7G",
  "key6": "5UzYa6PwMHK8aHM1jXaCNR6kj4ozCAs9MoxNHEp4ciT1Sk9w2bn78az8Te8M9cNpST816ESQm572TP7R5FCBXR4z",
  "key7": "2GrCR8ouCE98q3EKK2ZvnDwnotmaRfaJhy6iTerRLJPE6PmoEY8x7wRzE1vGcft2XTKzAw3bRHguWU9nNTgKcRrD",
  "key8": "3LRJ52KfFTvYt9pcczVpm9eMrqNVA53wadujxVWQtafbb7jKYyYAKb4JDEGEbeLZx4Pc7Y7g9Tzvx6zSbyvDbn1",
  "key9": "8dVmWd7pAziDGqELd6nqVYdwQQ3mKYMr2ZuLaAwgMTUTi1YNJvQofh5x5ax7enU6AtyTpn62mCBp8q8v5LCwa4h",
  "key10": "3xPnKyUsRypfNgFAxX8BeNkyXUpCbDQCgkGRgWAETzcn8dufTah1GbjAiRgomrTuyBaL7UzZrn23r6qZ9Nnjwjr7",
  "key11": "3wegS6LbS8233JH6YCaBNhEzb4uvftmY9sD3jXbDD18h8NoQuA4G3hbr5yyxhwkFwMaBnrQArnPpdPUfZCzvBp6Y",
  "key12": "kuQAUgH6YaF1dkMbcvELV2zoyGZJJaYRw1VkqyPoQd8eZQjb1FspSsvD1PVEBMe3ZYdhDZuwQRDRyQYmc8iBHWc",
  "key13": "42RXLkFjtfgNb9nMwxmwAGXWgUHMtawKXT3F1RXhz9d4re5zQNKunkftFb8KtMBDu12iCqVSY3xHnVdBr3Tp46fT",
  "key14": "2MAySe147eHzYfLiZP5DNkcYBjomNnuHLgYuqxM7zFpBJ91WgwgCkotPsuWgTLpJwo3Zr9fh9UNKduGvXy5u1sS6",
  "key15": "66YDQjH4Gk3aCutCQzwXnCSGLeJJNh9HjtSRUJGai9VWZLV1kBjW2dyNGntuC4Qsy4MvJPvrBKB2MtHQeHFMeZbz",
  "key16": "38taYTuMbq7iUAuV56uzBf76Hk1oN6zCaHFJ9GtmFhz3Xh9MAANoGvqSKUWot424xhndRwwppQemVfQtqDevnd7w",
  "key17": "4Sk5JGddPqdR8oCiGVFXrueh9abJxhLzzHvxHyWJHRhToBRcXW6Qx1izdzJtkFmvXD7CWCLtnf9mcBaRia8XA6DS",
  "key18": "21wo4w7Vq11W4uuB3pToZr8C3RZbgqHqrSJ841Tyn8pqAUbHLZzwHtoZvDZAq9mRzJUtEJZr9iYk8tNLMnMioQgS",
  "key19": "5FtGjZtb2LXbruFzh62AtMFBj9ZyWLnqPLU2zMRjeNa6zwA4qQsou2HLuDasSNwtBmBJRXW8FPQ2qvdHEBUwupid",
  "key20": "4FR2pctAGbqJwfaAhtjJpkxhxNEhqpz3nJcDL8e5UkW3JvHiSPw9VDLeewdZwi7QCsJQHk4yY9kPF2ywyA38azki",
  "key21": "4jsXWfYa8XDCkShhmokacGgCsip4GinQHSrRgWpLS8YDSS4L2Fx2WJ8TtaPSKHHuwEkmrtn6XQe14sk1L7VfotpQ",
  "key22": "2Gyuop86drHSL32vE6VFMuYn6LvsHoLxaFVHnd2B6DG6V3odPFK1Xdy9iEcJybBzZPims3cu2X8s5CXBAqJeHZ3L",
  "key23": "25sKQJY9zohkfjakuvLKkvngmag4BcSKQvQeyrWj7rsqwkjqvF8YXftHEhKZtLNp72jZZGvhVvvedtmfWGeTyh6q",
  "key24": "vcd96UEk6u2v7omumfJDcftxPnxh4NsFByy6CofW8AHiGwcKfqeULUQFxp47uKbs8z8NYMm48LUrX5CyNbeSUbh",
  "key25": "2enJmH3oXjrKWsbBPGHdZDpkU6dViwbRNfSHqFnWS8Pw44yYBTgAnW8VYy9B6K6nNY35kh3EjtK4HR27URJozVje",
  "key26": "5H5cfdRRwG56A2wujt2b9MGzcXkYZn41yMt7GjWXTrkth6FpKkYcyCSjS5fHfrVedf3KphNADMgU4r1Js5eVLeTG",
  "key27": "5AiPvq6YWQwvBAmQrEXQktiQGMxSFapgoD4YHkFwVQKS4p8svMQxx16gor5ivU8VYN5hXNYKPgXm3K3GbeH5HDTi",
  "key28": "5SreLB4hjKvAFys9ySjqmmRSUDxmTrW6BS3S1EwuZX8DJpx2wdasZFMZpBG95KXnHAgkC9MWe2zoDNozdqufvJdC",
  "key29": "5NtM89By7UZtdUkwtyeAEdNsDdWFuj9d2LSdp6Hxy1ikyVuBrvhCFDrbTUCjAMx9j6Tik6RWmAcZVBChrdm4XkL2",
  "key30": "4riA1jYMunXKLs6aDKKsTuhaSjutQTwtnSZX3DqH3Zn7BAFb2axqpBPJpBzLQbnL9dhrCeou4RgGuY88Es3sfYP9",
  "key31": "4ayLRjrAzyp8ZEanFKiBNVzoRyxbicNaHEBVqvXhnRm19mcRgxzKjkqoZysyNztHa5EXJx6Cb8VNaUy5RGCr6ncH",
  "key32": "611HkyXs2n4ZS6TxYxCV78RPVcK79yxfjbWYUbB2L7KzTQ5nj4Jiq7GTcXynUYeVnzDU3u7pNP3XFWVR2G8mwP7n",
  "key33": "2ugKJxeRJLcAb8vT3zvuSDUhFmExuYgx6PVfe6tEby56CmLrR1T8beFno6SmgAUXWEDjm5nS2W136vZqE4WXpqd3",
  "key34": "4bURC2YRa1zSRt5LiSAZ3zvJ5BC4XgiqbCZWnZjLqiKnLBcF4ofd7vXMHxArRhB1ucNgDYvvXnFd5gkiBQNhvXsa",
  "key35": "5UDJudNe6T61BKrgQ6ZYqLodo5BGzwo5jr9x3vVbN4XxUtxuj73ZayEPmYWnBPvrwFAdP9MYS9Hg6mGX5UVTj6fq",
  "key36": "3mWpR3VtDjASuabAJqRiGNWBoq9kEKKiVH2wM3hTDuthKpSmntynLGPeByn1PTAd9Hi58VFYqaFHgDmVLGsAbM5w",
  "key37": "S7zAqTNp9WaJQLxqgtbJjHouG2VirjEXTSJVUyrfaqZhHVsBYAtMNL7HV6RfycwvQRKZHpGituJAMVosLYcUpDX",
  "key38": "5qaaiHnzrLo6C4JwnSS4gYnZTcT19eQsvWS3mNoUSVPEAbbtfNEXcR5CbvgxQA3bcoNMtiVojw7LhMgqk6zTHbvs",
  "key39": "2NaLnKoD4d36CDF2XnFVgpGDagZaGerHXJ1Hz3jbaSE4u7Wc9SupMsTYpXAQXfiuxpk2rW7efC8t16fHA61e6ZFG",
  "key40": "4iFJmvZabLhWMBsmGnXZSd9bd15qN5aJzvEJywNQuGtrmwvPLcQeS6Fr3RqLWxHUaD12CPiBsgQsSQNHa4RLLRan",
  "key41": "sQp5dQBy3fxmGbiUx788FhmY11wFrjRvYjMzShCJ6Ax6Z2v3Tm3j9soy2ezUu1XgxM3W8FdXSp1SSMuS1n4oTh3",
  "key42": "4Yf6cy6r2ibBZZSwMCYR2sYbfGPGmkNG98CuJUXGM4eQZAabgwHuATM97B4yxi2yrhNjk9ri7GBagCdXdUb1m1RG",
  "key43": "4aJR9T4Fve4atFfkjHYdwDfJr1MwfHHQ7igyuWUiXkv3FunSD88ZBVEcxsqAkB84CZ9MtNngTdKvHFwZRdoiwy3o",
  "key44": "5f7NqnCXsL8CSym1jVgoQNeNBnfXjVr7134MiwYV6urpWDiwDddYkQ7ebrxurmqRS2k5c32RS4XFcJ1ZTRee2ryZ"
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
