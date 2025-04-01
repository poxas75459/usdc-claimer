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
    "B82GMhscvRLaMaVHo6k1gy5PcsVeqL6Ldyc9cudCS5oUma536Bj3xjXxkacdVNHHCXiw4KGFFrDN5ygryzB8NJS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SfsseQGZFYNuPDzxuecZAVPnwP2MJk67NYePCMaQu6MJ8vo2MpB1J2qp7Erb5v3pg8TSYQPronyLN5TNJrX9d6u",
  "key1": "3mD7FvUqpfp1RpXYvmAMbi6FGTvjjB7KGRzwo6yPjxEVe5Eo7PGk8d2Ec6wo3779vbi5E4kTVqVLfm85MVzJYhp6",
  "key2": "Neqq2Q3GnkosGV61oNPtXFobK8AQM2Bqm2kqwan8j5ryGH8WcYtL6GQ9X64zBEfKxCjowsoS9XDimqzbhydvNTL",
  "key3": "5D4CKNbvZGg23jRo63rmSi4tQwwrqMbkygCCJhGgBbKPoG2jeTNF5sdFpVAaGoijypeLNwNdCkLBhonLErnfBwqY",
  "key4": "5wxPAUx5XkHfAiSqJ73oLDwDnP2bfFquyusHj9tsAXGnN5T7wWtf9bvvwJYMM35AunBvNuFNsuorkQfmssPb2im8",
  "key5": "5PLShNvGnSjaAfcSdhSK4TJ3CJou78woNMRYcEnnqcJA5j65zRittLRMWWWWyNZKTqZi9EdjfGX6v9T9GorH9Efd",
  "key6": "ioTHW9WY8MYK3yUAciGbV5LmWcgfp3e4AAdM5fwtzojQgM6xwLZNi1Lx9cxC2XFTZ3WmgYFzWr7ZTvFLjZpV3J9",
  "key7": "49qwF9ufBD2YurN3EdbBEYc9xuxedzzPbsMTCmJmuaJ61nLdNp1ce4SoWggtyPgrRSiEjJ8YcwCA3wWF3eVmASDg",
  "key8": "3iBG78fF3hzGunKgoURggDxUwYGP631L5KffeQAzky5DW9wTxPpMbwpMVEGsufjJnW3rLHEiqBjB3CPkbYsg41sh",
  "key9": "3fq6iNfTa5moTPyuCTWNBVay2r8WhqFHboLPy764JzWVYkB8CeG1ykeArKEGgyp1DLYiX2MHWd9e1qF54zeDhewS",
  "key10": "2RagK7Pz4bFtX1yfEMQp2D6EbxRjnJen26o2MYVSbRMU9rSyi5GN3qcDeGo56UiDHGLaCPcQH3X59ME4eRVeZT4d",
  "key11": "2X9vDuLRcMMW1ZrwFW1qp2ziuvN85V4fuC8A61CR4K429338rixyuzYk6QKskq8BsSsFxCk9c9E676rVWHYY1mPx",
  "key12": "5YMrJq575BVjabAVKuj3BNwFTPb4enM7aG7bshtwTgwqwUtfSGB9dDJaU41h1LtLa4ZBJGL8ThVNQDYWnWq7C3tu",
  "key13": "28E5qy6JNrnXtznL939X7nhkLKcTG8dPFMpVcwkb9tjyk22HsipKjm9jTPvfUmsSkPREeHSWq9aYk1cimES63T4G",
  "key14": "42dBxRN6TPPrDYoEcuPR7hjE2N6xZ3irh18Q3zeDyzSBVXHBA4udwPhKB7ta6cYzFwbzFLFQc5xNFT2kURHaUPd2",
  "key15": "2Ka2CeYKwy5zAsntev7CuBZHvy931qKq9Vm1yqJwvwgVBkMvBxxkbabvtr3z3psQbygfay51u3WMj4neQ8rQpudL",
  "key16": "3xsrZVbN7vgMZyeRWbDoVWkqnKJetpxYmtTURRMpM5wahqE1KtLGzZaB9edG6TkHsRpHCwPceHQgzcErPPw5wpMT",
  "key17": "22NNEE4pMeP6vu1dgn3Lx7cKjshTwwHijJE9GHgxfDeTZna8jB27TFhQRL6xeZQmvSuoiNaWiRu11oCMcLrhVudN",
  "key18": "4oPMAZMsFmPEmkc7E1i8HBP8rcNpo91RPQW1zonoqcPzbF7Wds4h7CxaD8gN8pRrYzWr1o2EjqBP8ciBK9Z2k8ep",
  "key19": "5tcyEH2vWF7QvD1nrer5uuimaDoPs1vVKcS77K7TP1z1FkJHUU4HhAuHEpDZi7RP1BrnzQJ7eqWjdtPEk5se4EHc",
  "key20": "2PR5RqHQPd1ZkcS3UxDAAnLKk6p2dF6Ji2wLTHAsfUM3RFaHq8SqHza5oPDr9vSe8V5q3RP3qQcPHA5JKhBieRNS",
  "key21": "2Cp6JfE2YW67F5ZiLoDzmuKwLYGhYLHqYxsoja3BiwwJGSuBu72GeWZVVaS96pDp8UYBtjBbbgXR42Hd9TFuBfvw",
  "key22": "2WxxK84ZSmeXsJ2FrkwLaDAPpxQTdNK6i4MXE4tCdqRxqy4UsBVrUYbB76jaL1yy24wqy3R1AsqVvh5KkizY3Xxi",
  "key23": "2wCyeH6A77nR5saFsy6VXGAHvQsQLt585eYDE68opy9jUZDNUwsnGxNr8uXuXTMEpWKyrHUmwiru9J41cJn7iC4E",
  "key24": "2uprzh92QobVCKpp24egmw5KreNKRjQHe9FGwP4JQhCzYa9ehYezY3TrrrwGRazJhDnArfVsFJHUDZrg8Rpovyyj",
  "key25": "55BX7A2T7fJ55fVGdoaW64r9jut227Mx13ZEBc2kiFoepY2H2jsAa1wTWmjmEW7YcBrh5oHLchVkM4jDnKiwhyL7",
  "key26": "4xYmZp5JQ5mwbLDhb7gRKYLW2q4mW4eYjnEXjT3oPTXBdb4Uq22PYQfHKUzPSXVS81vNtAdwVhTg729i2DFLet2R",
  "key27": "3vM9y1DmtC7s78VwbsYmxtYNPfBzs2mkNcnEvx1QYQSDxwEbgaTPdvBhXAooELtaTcrkLxLujgbjoQnMcYEL2WeJ",
  "key28": "4JrK8ox2W8aPLRquMjBPgErdS6hnzzgQuHYN8NFxtNxYXtZeJoQhqTkZg5EVxgkKLYVkLd4tdDfQ39kn4SjC8MZF",
  "key29": "EMeQ2G4z7hwEGKy7e5us3dbURSXZaY1mS2soLku49aHbkZvSrJzkfc2gEEQDkxdjJjmsiY43axnULrXpyi4YsUw",
  "key30": "3X2mypnXx7eJL8cuN5kTkKv4WroXiuaXL8AT9mCriU1ksHUcxnej366UsZWT7PuwbHUCBUNxKt538VJkokmJB7YH",
  "key31": "5GtGi4NugVmJeNw5sAq6tRV8rv8qHviwsmzUPRyURBxSm3p5z8SYWgMY4ktfvULfKJ4YvKaB1eQWae3hpCJYtLZf"
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
