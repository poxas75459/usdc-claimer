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
    "PKzvb83hMsN4V8mjvbvgHJNgnFD1LbGehrKC8DCemTnpymGhcyjTY4uQLL2uKppFRfhT3Eu2gcL4R6VEVyM3bQm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fZH9xPDpN42dKFrEEYUitA5jnf2872sdkEi9MX246dGHXK333M9VY4yZMfDVKprV7tJ7J9bJvK54qKGX4R9k7PY",
  "key1": "41MoKSLfYX4dHhHtwrBBQhB8wb5zTvPdnoAo8TNhTRgBWJCiqCymQF4hovykeMN5AraxV3Ew8DbyEFW9NQSBUryc",
  "key2": "4JJTkcyVcRtzS5jfiHR3MrL7YYRs7EWnBWUP8jrLjM219VaiF5BnjxXEBddTdDeiuWTzRTunvq8jzFSdtMULaTaA",
  "key3": "28Pzu2JfwhcBfm3nLDeoNQDTUrC3GqgmwiNTC7nYz3SQVpdu96YJyc8kvxY8K8yEEq831GdS3Yr7Ty8vQC1qFdUS",
  "key4": "5Rdfm1mCN9pS1uU6zk7T1xPSAcDdjDsnKyUF9ryxDGXhYPRpjq4fu5EUGev3fL62uVuzudZLF9bSXHMeca9rxSMe",
  "key5": "5ywfk4wm8VdYp7R5d4dcbY24VGX49PPRYqnNuengHKwXZikfbTnRk489btFCctedqoXuGaAD1aauvKtNdFaAbRnc",
  "key6": "3CbQVoUJ7wmz8g5ae5ttSQMLq6WiHA6UzXiTPpmiV9qgAeLrt3C3NWTKMThbGZofqZGVVaLeioq4SVLbC1x8sozW",
  "key7": "5QNa3U8pL49RaLKf8hzRv5Uaa9JGqEw74Ry9e46PjSH2VT9R2fxfN6nWudJb6E2uJoqAv1vyKsaRkjdJvkndpzD6",
  "key8": "2ng2ikr1xniW2MrzdGoxuEbD5L3ptuzHSkBaCdGZGdszxZWRqtUtK2cconGVh9zWNJkLwWYYEbMR1fCHVydwtCkk",
  "key9": "5mDTnLAmjcntkY6Bx4dP9T4XYrqX3ST1xQeDWdJWZaoVpsSnBcEhp29Yj2oafSkZ5mzydXKdq8UvphPe4Le89EYa",
  "key10": "4a1b6oGcsrGWLhkLRw3DHxj5cVrTCfoHU6XimoyKxeXCxenR4jUsaTPLWLb3ySJfijREcnPY7qZwJmYV5RVSRBmV",
  "key11": "5dVuYrG1aqqf14tMr4LbaXfnffs25JYKRcAcXN2VYRnDK1hn1e1kmYrRBiiZUwTT6MZitpfYmuAef3YgaSQAwVTP",
  "key12": "5RFhtdfHaURKPB5NmSWqPnuSuNB7rLC4yApUqZDWUFaNYLn9NECtxHGRihEMLYujad7rAbkWsgtGdqLWYW4pA2zt",
  "key13": "4wcCqnSHa1TsDX15jEUqtXP9FHAoG5s6isGN4D37TSUy9MC8LVYFf3Y2nFDcjws3J7ueGBQ1LipMaYHQpf7h9rPS",
  "key14": "3eTAjH3jK2WzDT1cLHJmhtUcNG81st5rxYzSjmtm5y4Sd1LMpqLR6mbgsHbMSEHWgd4Y4NGNoWxahu3rrGVmWWnm",
  "key15": "mfAiNbWSpMLwRB8JaXmD7gnUZFTG2GyA3de8GtChaXWT1ERBK8UMdQ5vmT6kBEhA17x6uUH2G5uSaM62SageG9k",
  "key16": "4oPfUhPWjUvJ7gxwzKkwMScsU8zVjznYyhRxrrfQFJL2kScDcFsG4hhD2w9ugk7eizF4HhHwtYDsRSTnZkXsb8y6",
  "key17": "4VzA6vLPaRFFhSeuN5aEkbqedTqEohwEiu49XmQj73kxLMgW9NfohiMxFo7xjrKYS9dwAhMgibSfaD9AccuT9bnX",
  "key18": "dgHUUL3FgPR7BQYX7f45c6kjQbJV1RBxUykH5qeieooBG6PtB4kXvBjCAWHBdteiE2xAsSsivWyWKBuAp8bA4n3",
  "key19": "B12zKdgck6wdH2ABD5EZZF88pSozDxBoZjK7Q6n9nzyXJBaokrPaQAGoKQ1at5cBgermCfhmXr8r2kpvGATK7qU",
  "key20": "zsJyNthnyowSLXraxuJ19bqXtFrun56VNLETdvkMuugHVVwH1UB317KnLQ3tNsSvcaZXZxzbX7E2ucBNpdyKYx5",
  "key21": "2UWgeZW8DjAuYaG1AEoms236J2m3F9jCdXYug4i7QA6YwrfsGNrYB6dqnKwapEzxwPiAw3yx6roca5Q9ABLbxptN",
  "key22": "5kBV9f3QPpBLya2KNV2p4Scpumf6FbbVy8wirEvA6DQpqdbNns6tV3f2bP43mScVzM5gSwkJcDZYFCt2bKXA7DAp",
  "key23": "2Cggcik2i2Pswp5raiMhsG1o6UhL8EftcueeyurARE2UQzGkwMz9mEqAbYaASMBejU6s4yEGaMkewjsoBubx1L3x",
  "key24": "4h3eBuWrsL9wgaWUNfJqjToF5BBusqCbmAGZz7F69eiP7vBjVQ4NNW7qSE5M4QpnXMVnK4CZxQqn8ZeApD9Wierz",
  "key25": "4cxk22dfD3hVW1jQ3XfFvgoEPi5E3W7u74qLSzJjaQR1HoFQAMpGk2oDGyA3ocCkmXuqb7ddZD4XxxjEK8Rzxpv3",
  "key26": "24bf53K6N3rCjrh53jPoNPbrsexMrucaCPuJp8ee8MLFqRakL7QK587ghkbXdqkFj9aJ1yuS3vedCERxU2peZnX3",
  "key27": "2PfMTyG9DuojrT29bgsAWZxzzfxWYTsN1xR3aw22AzJXy8J1Z5P2Vyjp3piyvAFzG8tupHwwmmLyiUrgmrCeH4Vz",
  "key28": "ytebBYMcGf3zuSux9cvdX163PdvjGDQCFZUFrEzVBbG4FfrLEQBiSjvx44iqdBY7oPRGVBHLc4RnKpCkd1ZvfQ6",
  "key29": "5hE9KKsMnU7BrQbs64UJ7YVreRJZffuNopiwEcgVL5P6P9DXtPHnneocH2HDVXp9CkoNfS7qvb95LWTZyD9VsXAJ",
  "key30": "38dhiswodPiTxtDpQfdCxFnuF73HtRWNXoYWgveAkcxTpW4XBRUAHi29bpFXecAB4z8V65zo7mtcLmjUxx4VW7Xb",
  "key31": "EXWTxb6YZGYTcCdCLCzQk34cuwb6ijztTAWTxMBH7pRD4WQbrehsf79vvrh9Lf3VWKdGRvdX9UzyQEjTAS16pQm",
  "key32": "5vuHbfcbFfRuPPGAjHgnqGfs8LubQ2qPnEzp2Sf7in85SsSbp1FDTnBezBKe2Ufd8UYVzBJkgUjjEuAUg84Tutoy",
  "key33": "2g161ThXC4xVfEGjVLg7fDwKyNhGnLZHPHrDALeXwfCRftkxxyUuz7UPL6pa84egk4dQ6TYYocmwNL11BFGdDMYB",
  "key34": "3AcK1aWftSGB5VcQJLMZMoNNH8TeZmA7R5UVJXTDPMCQsGAa4So42s2VCgYyk6eSxTCHmL3RRMGv7h7DYMaRSALc",
  "key35": "3n6G93nLszZt5cMtsBHUbiETocuqw4JGUuKMW7qWXgvSZzBWJihKqiXnyYWCcC45u67PTxo9XSSUP7JrbMUmwMQS",
  "key36": "2o6KfxEt5MgczTGafMCZ1BPnPuN2xu7MHMjs7eoxUSGtS4FUW9Bu3RYr99w2PYE9eqqfzqLv6yDLPTRV3mbSepd3",
  "key37": "51NaPaYtHMaZrnKaAFTnd9gjrTC4PwbrN415kirxT6qc65Xzsjx32JiycbP5D8DpSGKqDXCsCpUfmb951QmiA9SE",
  "key38": "2zqie23y7z7jhZ83tzFPAGsJXnUZdPGLUiU4VrsmNHvUdcFi39pMiRCL6FrZVpPEmDLGcqXHSeFLescpvRTyGn8x",
  "key39": "5CeFFnRVgrKZSuBCr6cLJ9iFkJ2nfyiSmJXNY13eMfr4HpQZNppguULqbGj9rkWQLJe7A3cpdJGxyp6Ptbj2HYc8",
  "key40": "2Ai5YBYgssC18pcZPhZN11KrZZrUbqmsc87sqMqxf1VXMd3GQ8dFNLpuidNrKviUKJEsv9JYpqaRxW5NYpLd2b6j",
  "key41": "TM6XS29aG3WXsBpcKhJNuYaLofM9Rt4fbZnYbCM7YuAsVbFF5LPADMJC5xjMwBHXqyeKN8tUTss4DSoUqYzkHW4",
  "key42": "5wJQ6vqCjHtxMzHZ1WzdBcywi6uh9z2iXsfhb1hfaNnVYrF67YXsFrik163SQCShSEJU5trDUxt7VDsdarGDpyLV",
  "key43": "2rxcWkrMVq3mUTKdMdAnqPgZ5mFefY4LLHiTRXycvjfQFdo6bNH91S8tAkuHhRaFwSUpupm9APJmZcyjY1NHhvDP"
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
