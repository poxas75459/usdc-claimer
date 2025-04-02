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
    "pvYH66bU7vrV4nN41BeNDsZbwcB9bRCjnnUpbxAEwsmWPUGfApfogZhj1BuXTJuvSsPGPrQ6T3ZCy32UQCUg83r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iupRPs3XMC9TgViXmpXEKBnbysVmrYvZV4T2z9YYPU2q2cnRzXLSZqMUeixpARYhJZLZfmttkHnibiyh54qpsqX",
  "key1": "3cF9y3wbj5AQV8Zf7cgB8mDg8ev4ropaBU6ReKxMqMqLHGpaZ5Y6nUN62VaEG9GrXYufPfxduZoprc9DGVAq3Kfe",
  "key2": "5r6cmfiCduRirEyyXmghspMFCwsVdGhktKia7CN16FiZiJB5wJumAb8pWSzyAGYroh7aoChtoVUDwyiX3STisMzY",
  "key3": "3puz8kj3iZuEQZbNapgquFBeEtR8NvndzZtioEK1xA6rTfHz8v7eiE9srcYaAABooBD8GTVnT36VtsZFJsTYwT6d",
  "key4": "KSeFgiF5zNCk68b9ySBDPuqSSVU834jBLDuSbYbb2k3XNA2NbimnBTW4huk5hqaJLdtjy43mSYxyfwn6ubqBmH5",
  "key5": "3LyewWUK8aXYMMXhN5tD5a2VUfxLkzYffdB1qMvEYwjHUVAZ8ihxnnsKS5kHg9LXiCn6ggvnrgk1NkVuq7pbKsbQ",
  "key6": "3W7yXcPSvBWcMQgMuBiT8YGDSM4bRZCNWvxaYnCiixkwf6DtsbHFU75tKgCSCZfpFWPfrUqmY5c1GwBGcgUDqsaq",
  "key7": "3J4jcXRdUfF3yByMjfYJTnBUHmeeUmqNkYqe3EbK7m6dGidJRuW57LyG9akvVdXahjibKQMB4tnXHiCJ3bie6qNf",
  "key8": "2JbyxJTVqEMubVwbqGwSh6W2WdFicXz2XgxPLn4PmzAeKQBPTLtpv84wygdYzFQKsraN9gZKezRSANYXzvEKjUVh",
  "key9": "22j26Uo5tbxTJ2X26wu9QDnABFegPz9rGyreFYK2z5wN4Aay8fwXgYsWDCUxbSiMuE2dzm2uAWKwvzrRLqZsDDZd",
  "key10": "42o2WaFg6xGfPhamsV3y6Mf1bVVtQhytUfHPDWajCgC8dodAPMovW9ZmbaR7pFpGWG5mDZY8uRDHNCwLSxiac2rr",
  "key11": "5JnRn7p6UVb8EpzNc4PAXWYqA5GD8fxPnL7okp85sPt3v3cmmTFRGL89JvSAV8AJGaKrLo1SYKRkdbZr68Uk2UsT",
  "key12": "iAyXr1wdPfLk4LFrKgv9xvg4aiMNS2yLmawcyhcGpbovZLNn1UuUcw9gPuisCKdvgJHsZxVjR2vXKQsR4Xb1oDd",
  "key13": "2LnkiRWMbDhm4iu1a1KbcQFruQoi2EjKkPb3zqiqCth1UuhVhWNAdR8xqGwBhDWNbwx7AwfKerpbnV5paZagRnaS",
  "key14": "42Qfqi3S99weQVGitddN4s3zrb8QiS9xsA95D6YB9k84W9k7Cu4dMFK23dGCp8tvY4JkpkvoL9LwQv193KK9gQFo",
  "key15": "33PTRr5sQEvVS9SPXsviMN3fQkRXKsprrv8JuckDTUzWnubrMtwo8L6uSQmbyUrFoDgtY3ucYosVU2THdgd7cYbT",
  "key16": "uU236SEx9G2ksEzGGxutbHMCPhwXp38ZPcXLTPW7RGuTxU5oDAfwHBzKsX3D7i8ez6ofa1jFxQtBCRbbyvdsQj3",
  "key17": "SM2LLFD3f6w5zykcikzYjs1mkeKaTYR1H5v4t7KFc6c8RMNRSkBrRSCDZZfCvBfTSQJeJ1eLmJcifGCoREMrMkN",
  "key18": "4pkFvC5dzBDjW1zbEcwYPkGDjY444rqdDsXYEMYjv67nfuS6AHi5jWkU8gW7VX22JxjoVktdjZvSLWWqTANQATgR",
  "key19": "66ScmJbQqfjpX8dZXffPmwiNNCpDYywCGtwRH6mkLpNMeKDPEGCAK1PPdYXZoeLJrxof3CfSySCJG4hxcYei5dBR",
  "key20": "2GHwimDu7zLLguypPnywdbGE3QvBDVtoBNBhekzc9U5znTthcVH61USn2LTTBiy5zJE8mce66ksTfPehFbXsyP1E",
  "key21": "PWZLw2ioPS7A37XRWA5pZT6y5YdDSvEm1BCqWadM5Sw1CMANRUA3h5DwAVHknmZMDxxek8fPxmkhHZNkHqBB9VG",
  "key22": "JCyLRXGoWTamfhwnTmAdot9Fc4FGXcfVf5FepfRz8uTNiiFfG7fPi5p753QVdvb3eE27bzzh78oXzbcdCkMsv2b",
  "key23": "4TTKfExLzwf34784u1jGnkRqGeunB9MAkzzFsvXcd8Nb1k354rknEsfqQ1JCatt7LEiZx3cunDyiqMGmkKdoiMEK",
  "key24": "2c6J4v5w7moJoVcMNMg9a9XAukD12FAS1njLZKkpC6qQ67bAqNLTd9pyAbSqESdsi8epMWNEUTDuJ7VjCCJYnmhK",
  "key25": "33Jt9QjFH85ubLncw4ibvEaZ7vxC242UjtA7ipWZaGKiUG5WsotscguwEzQAiHeq658DhX7RctZQNv31qowTUdyn",
  "key26": "Sb89ViwWJMSbeYMdxmuahyiqjXzqAk7f3pjTKFyakUukWm1n9agsrmFZFLkUXk4nK4tUutxjwsnzNPXG6ZtE8QZ",
  "key27": "4La1qx4RA33g9gpmR36LG19qcoKGa7FxcpsRmkebe8FQo7Ns5qyPsrPfeU3AvohpSPhCfigqgGrWtidom53wMbv2",
  "key28": "8JfyCA7G77kx9k9mUUXynhbBBDSAbmwuTNzyRDZdgvvW7XK3BzpiRQNPY12xaKFK2mDehMPE2wkMPgLSo2J3Eoj",
  "key29": "4d8BSpEEYktK1HgK5b77C6UQ6J6TAmbnDveQMwTvAw2cx4t2WmmSAymXrBMmMMCFxouW7XhPkUwyxXugbr9tuFTF",
  "key30": "32U7m9RFX4sZR8gHgFz13Pv6B3TRZX42UYF8Dw211otExwAsKhx7XVYMPwhi1p9NsG6tfTPeEVBWpAM4PfXDWPvZ",
  "key31": "4AxEC5vyf8GHtasVEktfchFCPnAXN4pPbbLa8ngqEtyckYQchG2UsWFVSE15nphtKguCsPmhT7XE3GjiV69kfVBP"
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
