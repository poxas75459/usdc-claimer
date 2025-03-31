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
    "3VHo4ppFpZHfXBuDjvFPk6J72vqbTYr6APJajvM4TfRQaGA4rquu8BahWLZdeWQ272ZLMbeSvo6H8b8qRFXftmo7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t4whyB2heYM9QD2v4vho92QjRbnfrVge6XBJs2i91KkS18AZjp6U8zhvp7McNJmzCVB9e3JAcstStJbUeGJzdUj",
  "key1": "61tU2o6rUwyo1SMmRxzbbJBzMGyoLUEB6o15HUGGvwf7Ub6eXbDMfJTRmNitXVmYLN2sFyzLMChftX3vY79aDExD",
  "key2": "4M5nTUwf9arT8i8aAJANfZGXjVofNNiZADCZzq8bgjq3kbSzHxCXagNq8k4hGhUKR3FJFQ8ErGggLHSSRFBwwXSy",
  "key3": "5MCy9QxfyPYxPcUd19TkvUdBBGMUcR1zNxwb7teQ33zGssQNpuQXFC9Uk3KZ9vbigRKuubsMBLUPKNhH3UKxSJPX",
  "key4": "xrWzfETkefsXzSbKsC8B5nAkH5WnxeVw6ChCUHrw6grzV8hrRxN4mMUjLQvGB74Vv8tLbMTEfgH74muRsWXvJXh",
  "key5": "3YCo1Cy2sGGDPAnzWaKtxpr7z3YzrMsumsZcg7wZiDrhsc5Xwoj8YrgVw72ZofQP8SppV5frusWimUbEK6z9PPoh",
  "key6": "SUcTHukNVyif3P4GYkXhJyM2muDA2pumsJMc9sMjDLqUur752ZHacZThY6EvcVVPH9QN2CHe8xuZc2w4ke6CdyC",
  "key7": "4rLV9hCWkh5mwYYc4ffkGv6LiieobaKVFyRcCCMS6G3o9uEE4rPkW4wJb66n7BaRBXxLcstyQfLUr6JcdoHETE8N",
  "key8": "2NRkCjWLGP9HqEjaCDQmudwN9khAGNcqACEea7uD28mF3e4KgzyvXyg7zEL31HrayFhqTA4Lk756hoSTTx7mho9L",
  "key9": "47vGREYnwMLw6URhFQZ8zEEpuNq418249zwrdwphyjCiZJ7oxVqq5vRsirm7FSjyqcjTachSdNkYfuvQYEJ5yHSD",
  "key10": "3BcMskmh9Pk92s3FmCFzSAyGXMzGWWHQxDMqnz97DjpTGmsgiBkqu19qrUx55sZN2eGU8VZrBP9p9hZoFpsXRRcb",
  "key11": "2whQ7dKnBj5aTd5CRsQoWXuozoVHJaWAA7e5FFoXQSWdcYvRsebLT3vRYwVvWyHu44QEaq1nbLkQXM2VpypWeist",
  "key12": "48YbMFguduNQDU972ncXKMQx26DCXEJgz8yXPTmKhBTFaEPngHHTfqkr9mi7DPPJ7hQmqioRyuHP5tkXNY4SGbQF",
  "key13": "qQ7BP5rbC88hPjEFiE8eADs5greUio9SaC1boKfzAgamsSEmELw5PyTNAjgP1V5L3HM5yqjkBBQesRn3EELppWh",
  "key14": "52kXDCAyjy8bp7dfoiYfRwxWYSPyxDFmUetKAbPMbpWT8PEYwSCyivPLvSoUH5cgHpyBBk1YLWZwRNFF3dwgvAYU",
  "key15": "W2eE45QWd2ACBb1567gJwTP5j9mkprq2eoDDZtZGzX1SWocRv8cUACnKRMC1Rrk1zJLFheQuzSMuHdxj5kxpbNd",
  "key16": "4C79Z9s8n5jwa5XTUAoVkg1Cpv31vuQ2YUm8Hk7m1og1GTAo2wVHNBTjdWmbnDNubJK2cWkk7bR298GHQZR4B26K",
  "key17": "4ngikSE7gdTvoR3zEDW6JjdVdUxUoLvTU3XfwCByccA3VF1eDRGXJai2NA8czYwAv1Ks3dmmUyTsQxkuRFafqoGx",
  "key18": "5NUoxmzqNJ3tJfLXP3Fj78cvm5zgGnq7C6oTBfWFHwEDFys2W7zqxvB7cSzaVuEJ8nrihN2gmWn2jifw5YbPpaqd",
  "key19": "2s8ZvUyTu5QVCR2rhpvtBCUovDYQ25P3E2Mdd8ed5nCHxd13Tv47SAV2VVSQXTYS7NP2DYWwX8K4rP32V6CPGqbR",
  "key20": "4bYoxi3Thn9TZGrEuvQJ9LG5KCpaJZRgA5nfY6tgAFzW6Qck8RPAkky9F3WtvCeQUjiAuoUegdyiMmsFKAFSX3DA",
  "key21": "4qzPEqFSit62gWu54okoqz9bnZJSLa8nSeqHptgtSMgHepKyX9kuobhtEpb51QeujTCnCHVMMuQMeBcmz4DRJXx6",
  "key22": "aXq1a5HT1aqey92BpLZuQyfiqkaVgLZohRpt53Nr1rsa3iztfuVHccdEp9Hnr4kWKEK149LoDgyEogMf8DiTqMu",
  "key23": "2EnZX1UQWDvu7rNizLz95PqjVN6yq2JBxvzivvLv8Z8nrmZ28PkXDFczVCALCGWqGHZL35YE8nMdYtajEWzQRUH1",
  "key24": "2iqjHpfqYCkvKriZzh7rqKFH7NCyuRfrqbjqswcU5GbkQD5J46H2dj4Ecok1E7nJC2yzdFSytdWo2wTcrE4KMQ46",
  "key25": "h7HsJimY1bbAH3P4onvxcGt5EH2yNhCDfH3U4u7FtfYDqt6Q6hnLYGWsmAg3mQTMpFE4BFTM9D6wmjPp8x4m9Eh",
  "key26": "3UawvaoCPgVCfGDKNmEg3Wcov83MaGav61PDgj4u9q83PUAWUnc42Zr5RWK4RUBq7Lv27drGfTCCFANpTJTkSJpy",
  "key27": "21LahMbJB6PNxDwytu6hdR22GYD2kjjJcFiYyZG5fdBz1eCpYzgcd1Nz6PJDAZ2S4ndK89QupLNaw58F6CkzVbmy",
  "key28": "5gikR6BGhQv6iUqgiEhJypRBZn2F6ZUCQinE2uQwNFgmBnsM7k7gwdMCYtJ8AAwWDHT5e9BaEBTdWExUk5eikdTk",
  "key29": "1jraPym2kKV6wLRNqkZGSZrCSSZg9Yt8JGNJzXcBgyXfKbLN6Dj6XpbWFH3toY1pBGk1Fh6e1kiJ7wHZ6iTfi7q",
  "key30": "4AiG3zWfaMijeP8z4ywGTdj9sTR6rXbDncC6oaQQbLhxEa63KX37wMkhMmK7kNqvwXTGNrPPiPsyRN4YeyHoKuYj",
  "key31": "324572j5LiJCGkdfuhJENr4Fo7UEcx37wty36vjtZmdYfakgTMMcj2YnwHjiZyqUL8xHdk6Sv3m4mhRec6qopzf9",
  "key32": "5G8TeRozuyD6bigw9GYM215XvVSLuEAifz5awfMR65gpaK4tqj85tMhofHWq7W6yRqYcf1shF3ammXFHV5DaUrXo",
  "key33": "zfTqHNS4pruY1H4cZYfafiq9uiDsUr5cJvYzwRVNMkgWaCnuN4GKDtiK3UBgxH4efessJH2hzPXoNYyST79uRGs",
  "key34": "5b7wPSwtP1ymmz28US2piULQorRbgWaXrVZDp3bjaDTudUYzQdrKR7Yb55a2xv3jtasJCHeMsuribY1xQsSvwuCw",
  "key35": "4XdPbhmuh6H8vuQGkzrrC1FM1imiN1HAa6yMmEqyiC4QmghfsUb4MceRRGEmo9YTqtzZyPRxuL2uE1N87JZjy92g",
  "key36": "3u1YYyeQBMFcXmaJKmMyzgjcmWyuBFKhmruzn5Jt6M5CTZCqXLtJjYfQjEXT63HJRnRX1FYPWDSqZAvJmo6fvs94",
  "key37": "2Hxs8BBis3Fft9aTHj3xs9SXWi4aZW28WPGVKiFVWtQoqRipf8fWetJDmBjmtPZVNMbUb7YqD6XdkoVnQTwu7DxA"
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
