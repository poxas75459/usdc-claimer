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
    "2kAubaDPxZGuX3L7mgaURvhwo79FDN2DkHappB2SQrkxLJRjoS6U4tpY78NJnNyjpSN364CvLtDbpJ9PVmP6J5vB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63eBJSvJmbpPteocFPkSpAw53Z2pkhyUL6opNV4KZNBaURQLQMioc36FtPqfWvCKqGXNUVTd7KP9RqSksRJDYebC",
  "key1": "3uV8xsqh2dQkDvXvbu64aDsqKTkNJDHDJF3NtNNivzuyjqK9D7N3m3JNEdgyij5jg18bt8tifBM2BoCv5jxbgPYd",
  "key2": "3kD1vyPodCPkdkD12LCsok7ed5ZTGRdWW2qPcvN3Fb7ppafMKgWDtzirRgkjstrJ92CMDYQoxqScCAwthzmkbwtE",
  "key3": "2hEYXKvLyvznBQVd1RNbiaTYDse2LkWE9yZTcLaNpP1CDYgrYSPUZ2whddHFJ9xrS2uCTp1mkCkqx7PsbN78wYjH",
  "key4": "2rd2RyycUPzMuDMRgpVUVWuPaJxwizbwWJ42TWcT4j539ooCc7cQ8JAd4s2Mbfk9WB9YF6CDRFpCd1fCTKfb4wiy",
  "key5": "4smtmUKf4t9o3GbcuUf6FPuvbissHMQ639ZRMTGUhdtnb43jWmvdBrNxFHXHioqQYC8ubxs94Jgn85hWx6Jx4BU3",
  "key6": "5BtoQuWzyR3AaABAo1ERFv4iqhMNRtQQTKEoLo6Ufh4e6NnzX5qLGmLJCaUjhiXMGzPRsphx3woqnEhKa6KzFCTu",
  "key7": "mYyLJWdhFo6oHYeJQCr5h5zicTnytMoou14rnSh7BuNMV2uJKi6oCtbcDS3UvN21j1xLciVuzs7rA3Hu8WdPpgW",
  "key8": "ayBf5Nm8vDDLksZHKDV93emDnQ99vq7Xn8pUtxNEK4f9cuEGoFrgMRwAL7iw4cj6KSD1ou1gCQsbEsjRhLDaxob",
  "key9": "2fKzB3WPMbNUp7vgvaJ7uSTtf2BCLSuE9wQ2PfKWpoH4bV6MbXdDJwxEaT9pyBKSpAB2kAyqQ4aE1S788Nxm37Eb",
  "key10": "4cKh3dw8YJphcJb4xwfex23exJ3EfwQWw4qRpruefbK2FoVb2NJtzRn3WtMUTsnTLTGJvc4HffZFGyQjubm2oquc",
  "key11": "5eT6T5NAd9Lbx8a1MzWTK43wr4WGP8N3BomrDXjvVefqZLBtFW5bzxreL6wwLDHWnu6uiW5AJE2jYvjGPu3ApEdo",
  "key12": "JKLYkEZHUKwz1v2XTbb6n1uo139qqfPcjxDDumC4SsiYRj9SHCUQeVNA1qn3UEiDzx5P4QE8z7Mue3eu2i1VAav",
  "key13": "3V1S9iN1XE9D8kEvCdfAsKebXiUifeR2WMe5sj9RTod9i5kTP2stxkevuDbzwXkNQAPi1SZajWvc77A8defcLsjn",
  "key14": "4qwMTPqvkKud67JhAre9KseJWJTd2YDfKGDNbRy8eAQ2PpaQU4uE8VoGuju6MtfEcmU8hKWvArm4EoYqoXW5LJdE",
  "key15": "3S97rTRdPG58bW7RF43kuJT63PbmTtDDUctA8GXYN6z5dw5A3Zs7anDRhy9gDvi3Uf6JbGHJYqGfGDKJoYmKb4id",
  "key16": "3CXF67axeT9WkmGb3vGmjw4JETgENneFyRQVH7E8ZbDh7yBXXcPGXoZpe6coy3ypVmAbCr3SCT3GoKmtneDUYwWX",
  "key17": "28KGGVzoqgGrsxTD92WGBNWfGgSB2CwDfiCPtVBVciV3gxjKjnid1fhnWFEEZBEbsnvMuigqS12BfQC6QxQke28G",
  "key18": "2rQneV1USxtziRwBszzdHBgLqDbeftt48jD3NtGGbBpToE6UfuUKRSEmheabTFuXtGqRymoCvriW2EZRA5qERZLa",
  "key19": "HwF1QH2wFyxaw7Xa1sA66dVzi6Y9gws7zLopQkspD9SwFKtnJwNAWkTCLqyGnqfFN2haxb2KACXUMwDWp1ojLKn",
  "key20": "2LFVFrG9iLjYbPMiBnaVKGuHSm7sW6oiseV5eBeLyaqecFd989KwD5eh2wy97x47ZjFmWNzD27yRWr8z8PJaD7A4",
  "key21": "4WkQdgS6kuVaGHJQWzCpzoDYU21eEN4FdY94UWRxGaiTeDaiS33dfV9f6ctKA6B5NmByh3B2QqHw7BBmuQSNU9ph",
  "key22": "9G4qagj5vXzqE3VwVNwx4aNcRcto1AJKZ4rb3YpoLbyMpHCH8aMdGBNqX9wztwK2XgeHoBNqhriF6mv9SKKC7jt",
  "key23": "56ZRX3gSi7ojxRrNrKps78T2uPpQJcGuSXrtpBH17m9ELfs2zsvcJRe6BWQTrApQSiwv65ovTqCtPTnBKWVe54Hc",
  "key24": "5wxd5ytEFzygJ5SyZBbdBCk6LucCxaL41M1zVWMU7GCz6hUtFiM9ru2dKaNmd9fKW6auNt3kUKMD1y23NM3PpS9Q",
  "key25": "2uCgBASwdDq3FRqVUH6NSvq38n3wJUupWRJCiJetmfHY1XPqJENQB9heH5uTaGb2yNwhpDLjy3CVstYs5vXJs8XA"
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
