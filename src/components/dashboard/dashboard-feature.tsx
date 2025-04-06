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
    "s2yBkGPcJ1BKF8SDrc4U6Sy2xztAaafH3RAXPFXqhU7DHE9R3aBiF1TEEk6SpbDWKHKCbaxpS4nEtikdobhTD7T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k7hZsERFaDw3NwNqu4pg7PcUXbRAz97ahAoMa8z5rm4ZvAhhfWq5rHu1aSaEL2daxRCkpEY49DiDvt9peD6r631",
  "key1": "fXhtsGqtFN1Znn3rWE6gJwuFhneg65SE1yVrzQZFCzMKdv8X4eZbf2QnyRwrAmiaY9YcfmJjoggb19Eh7dgJsa4",
  "key2": "4VTMgxvk54myrxjMv6HtNpLpbZBW5gGdaLVQj57VMffJWRrnq8F7ePVg8f8sRTJacTHZ5AMaf2JJiqZTVsntoS9j",
  "key3": "EWE8UW9GSKA41Vt1S9X45VGPoF8MT79BbSpWQTe4BaR6MwuZy3c33PszU1dymV9DAWvhX8xESHDaAxdzSDLBhZ6",
  "key4": "3NNaWLTDBwAAbaLAuY2zPZx6TJLs2X7L652wUnTdwLEP55e9QqRSfNMP35Tdo78yvjtU9DY1dVJVezEBgmGuLHSd",
  "key5": "FF6TaPsPkBkHjSkMax4ut3L83y1dqEKXjUBBUNkHxaHxEZ47x2hawJ4KES7ZHTZpdckaszD5gVJHK3arFX9LK2a",
  "key6": "53BYJZJwn2Sogxfn9ZNZ7hXCNmArSVHQPovVQB6yKTPsyjJA4CrvJY5yeT7wfWb55YwYuy1Q84JGLcnjFJiFFNxj",
  "key7": "2osj3vXJjb6p5nvcAJUhipXuKnaU9ej8sfvuMb7boyxERAwRDN9kcbUqoX7dUbthsgmrpdgjKjQQCyeGvZEJGnYy",
  "key8": "52n7AiSgtnBJu4APcqkozb1g4envs9zSoXQTdNzYGfLtSWgTFwZjgZGHh3rbXTPS1tvuMhBi5bQSnQFGoqHeFHCn",
  "key9": "2jY8Vk1mkWn8jwVrkuNjhb5qscrXhwYGpYYeN7ZvUTXFr7SVyjDBqHxf59LgvVXAfhoY96FgxpGRCShh56byWD66",
  "key10": "2ZGXNN4ABCMapqR5fA2M8rUg2HwPcUzX7q6erSDT7yq5Lo1nzoBzotr6HpeGNxLsRJ7j9EfhegcSifETf7quHiHg",
  "key11": "2HfSYoqEmDtuyW4AeTXrEBkTvUD9EvEkkFt6zZ54pJYs5jZMQQvrjdUmc1ski1wVFgtgbEquCgLTg9GV6V2dyJ9g",
  "key12": "5LfYt232gofJtY7DsLuHmy2MXiQdW3M6Q6rwBvNV4R6nBBhFCyWSR5CueGHKGWjKhDN6pHcBdaks2bVC7aadk4e7",
  "key13": "54Nq4Y4YoYkzMoAHYjaY1gicLKzketqeajmkURANmM2RWayq9UXzX3mdTq2pym4GLSy6Q4DcSKBaLWb7pxm7etD4",
  "key14": "3UsuMR6VaFLTg7zcdEdxct5BVsmsY1ymy8JxhDK12rkpSppJNc5x1FVQDFi2xb6b4xBBmrKjVBNq2nf9Yjg74Wav",
  "key15": "2FFufAPV2aSHFoBnT1KJY2KfuTcrWZEZrogHmuBNJGrauxQeBBjxk4cBaDoFjKxndydD2yFhXASuCuMxteJhp8ZY",
  "key16": "5UhCnvfiFLsLLoffbW2tQY6nZeotHczkYobEYTg186DRc16yfDjHGhL3AbwaJCG5r1upLWjbpEBSe4mXM3HRAtN4",
  "key17": "2ie7g6yrd9Tqh4QUBMd2zXo75yNYLE196w6nLUcuvY5uSs7mQRgWqV7oXQBy9KQn9W3aEzHJvTBTqauT7dzvLgW6",
  "key18": "yknNXoWPSGzwysrYci4wzDvfijtkyyAxnBaoXGzEbiiyNMiLE4ESTwKm7uvQtPhzK3HutwWZindA1w3ysYeTVBJ",
  "key19": "38hzCUpwzxHEzRLzqH6yiNnqjxq2CB7ChegtctY2AkR3YbfG2ivacDLCvojfJy6wA444cRzLtQijFsp5RgEYEw9S",
  "key20": "ZJeNwF6ngQuT5fus8RLCcwck9qWdAjAiAvDusVTCM8UEDDETknxPYt4MtJvJ8aKZtx1ai3nK4Q3Va5ApNdiLRYC",
  "key21": "scyC6pPMzqVc8P3cJpqBK9CtV7ACakoxmkxxHU2ijgHCj8qEwk9jjuXC4jn4aK5AH8CrPD4fvhxH3MTcijntLNY",
  "key22": "2YinkXTQfshEpshmiik3BM1cZDPDq6U3FPSGAEn4JZNt8i8fE8ZVgBguQKEZP2D2P9pVzmqthaWKhAZ3K6hMD8J8",
  "key23": "67zHkFwrUZTjXVT3YiN2DTDEPw9avyttaEjkHQmgKRGrmtJg3R5zaVXXptEkUE3U4X6RZFTRXi8ZTMjmL8uzFeb",
  "key24": "5mrNHHunac1GxfH2SWjSDidjQ6FAFz4wZvjsRu7bRTHrf45iKBrzQhNq4n184y7fvurZDxGLA8XcPG6KQ28SuCcc",
  "key25": "45P2npR5XHQBAA4Esn1fwrJte8X8TxZNpswWW5QtkatPHibupq8v8TEZombgtGF5Nw8WWpf8BsPRJdFyJYT2V1Rs",
  "key26": "2ic1GvXK1XmZYgfaSFY6B2Jnvoo4o4LnQ65yXXDnveDTLeSWxDq4kbgg5qxUuhMbh5g4n2fufNtSTNyvoYmKtn1J",
  "key27": "2n3S25hyLTC7dFio7jUtEg4S2XY75mhDZybccg8T9FWfVuaNPg8EmL1uwfREmyEFCejYyJTPYs62bYH7UMoHAxTn",
  "key28": "22N3GWgDthr5ucjYFE1LAVEys1WtpBNGVTqjeiGhWTm8QpVrErcrD6HZxgSyCnVZrwe1TPqbRvN6eLqedB1RTGdx"
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
