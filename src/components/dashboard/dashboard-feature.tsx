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
    "5VRxiZc5VcjXX7eqjeYG2xyy6gDayxWSiob7TZvsyaSJ9e5AcJfqS7SeBk97nDvetGpjQucxe6sYwkT1wCuBQudP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WrgH89y6KvVF3xx8cbZesNPm213HhaSDGKVh4RKYkbWbVtCbZtr51C7PfUPbGk73tCSyGz3wsS8d8Jr4WdUTCnK",
  "key1": "KCBTBrfme7zKKTXu1xoudaK8Va2CjPuYEAPPsxhfd1K9PZkWYFiXX2diy6osiw4YHM2wrCHQoXx6Zf9UMxcgun9",
  "key2": "2dUZMjPiWCqGq1TZU8Sa7sdfvHfFsXtcmcUPQ9GEXBpU5rsvweVTEDmugCE8iNQntG7dWiLSPzEEPv2X9ec6NhTR",
  "key3": "JsbZzxHNPHxZPrz6MhJs651m36BUZRhnCAorM4sh2meN5C6DBXwwv4yPYPPMnJiWtuNKC8kYuEF67iWqQCeJggQ",
  "key4": "3aLCkXmZ1MvVpey8oceLvTSuceY428x5U9E7L6Pf8zdGuwy2MmqAo4zA5gyxV6QaYrxS86QEvKYbRy1WEEiJyCxa",
  "key5": "2oQJ4S9ficckFmuaJXfKtAi9XY2L6eYuhR4AkJNtda2a3mLEuVixzncDjqhEH53beF8YbvnrKqaxqHjzF7BG64rF",
  "key6": "49oxCApn1gUXPYqR34nGTV3JkD4QaNvFNmcSdNjd4NQuTHzpHKNwPBf8u7b4LAvaPZd4naiC82Wxzi5Q7BMfGh42",
  "key7": "4GDjAkSKFMXETPpJQeoTQWfvqNrJ1Vxiw3FxL7VJKBJgnoBXJ52W7WgVM5S8JwScY14CPy5fxtVm21tyMgDDyRXL",
  "key8": "2kcpiPRzZgMWiNHkMTTvajdT9hkQzU1PiLEdG7S3rYhaJM7nKuZ956ioTDLSsWDJtZUF3S2LeBTdx5YzUo4YSko8",
  "key9": "2qubyTz6tYUVQBy1TB9aKXfLsDk2Ee2KoA2dbeipqXrv7SeTEZRmebNXaug9GSq7phTrSaLYHKCUH5Gdd9AeadJJ",
  "key10": "44wENfBxPdd4BLLJsgt88rQccR1qHRo6ekhqXMWACpPT7g2GddRWzP8e1KzvnCuEzY4B6jnm8MR2xcrtiBfukJY",
  "key11": "2aYWWyTkhQbTz87B4BUAXeuSFAGUGugVehwwGHhQot13juirFuwBauxdJvH4vYUvXECumCbxepqeCXpAgr2NkGPw",
  "key12": "53vVqeu9i6t2onWdpCMcFrBNCCJ6cjd1hmf7JprpV9L3uQ1FNBQFzp5WQWFXsdvjhgsKnhTNneCqVkJjirx1fQ15",
  "key13": "2UrX5ztW1hbKiLijrBf5mvxbUQnAAPPgjNsD5TBqQBiSP9YGcWGgG7Lgks4s3ZBSTMSiFZEFX98hbogcypyHABwt",
  "key14": "4262ysZDCePaoQ2nrtucYn17bbKcpVmnQ3GmeFqTv5oYtQsGAXu2UjJQ1rghn7ACyu2rY3FGr7yyihK89eJuaWJA",
  "key15": "3FtT3iCLRgcDHJWHZ1E4Th7bLXjjjTs5gn4vQqkke2VvnCmhT8VMri7M55CTov1genzufkTQGNox7aeZdeZLgcmG",
  "key16": "653yd8Fu6LAsE3FV641JVtfNPGUz9Bf6j5uiJ79gvCUduiSCDc7chYQixQi3FdevjcBneg4QaVyAGu39bk8maiBq",
  "key17": "33SGe343AmN3h978ujaGGZ44GRBygGdM9riuFjSvFmonf7JamArnNfTN192vdQuN4kbpyWCMDK1JfPBYdsaAT31G",
  "key18": "RmWLpKouVK3QozUhnodu3nQcuR3UMM5pmJhX3NpAfiRzPqX3zrno2hAvvh6amYsEE15oqLGKSbAo5k9VDA7ncfV",
  "key19": "5iFoCNrAawgDoxUZ3si7kzY4yiPte9h4KYXxGph9hxFUaCDv4hujLTP6PYFM68sFGWFMa6pxZ2Kx1FfkbhXjcH1F",
  "key20": "3UwTeZuLrp7DW2msGHCsjNuNTrBS4Yv9ZQUrXm3p5sCM8qERbNarSorU8xuLSwnvg1VXmDCqu9MxfkuRAjLKpHdk",
  "key21": "49sedPB7LeWjtmY6m2wxy1Ey4Enk7Ytx6CBe7PetX5fZusXCSmsgSLFf8vp5skcQtR5kbMk3iiTtQ2Vqi3PdTqvn",
  "key22": "2DRXuovSfCk21EQaDN7B6qvXN9pxLTioBtj9t412R6HciXUESe3BPry1fZcaMLUzCHQJwfyGXiUe5fAZvwFb4T5M",
  "key23": "24cftVUimhCdEuycTkfpMKFnxmUTFdL6UHegw7rEjdSCfmWBC7g53s7QWpfvJcTpq34NNZHH1TMqvz5FCnT6w9dJ",
  "key24": "2N6TAqLTR5zr9YgvjiRcVnQJmnBWMwPi7x7UMAH9DwsEGT9etsgzqjHVrenyDpFBkCU7HBfgeMcgZkNtgVPsDVG9",
  "key25": "3hCYJEa3X6ihpC4NzkV61vRYRLjubanVqPXPa3M243K1Ptqzdd2YJxqnW1oDAMoVq1aQvii2ygDXedJzFmKnTtem",
  "key26": "V6tbRRpYYaP8VbjW8RKLdBRPwYPdW5oQXvzJ1MWKXXVGVgbs5ALrUzhJZWPGqkESSoMrHJdGKU7TaJ3tSJASAjX",
  "key27": "5hj1qFegg2r9y7E5XYFrDaa9Ws91MBgDf4B4ZDwYBbChYqJeSeqvK5YXGM4b4fjXK4N3W6zVTLXiRN93e45hD4Ey",
  "key28": "4pr3dy5hkJQiLUy7qbSdnLD4tpiZZc2pgf2kDkcrRpRJsERqf1d1XeZh3qZqABpVFvUhqevjXssxYgv9zJsaEJDR",
  "key29": "4aU16wYXhgbzqY6njnfCoXfB2gr7GTCJaxMcFzc25UCHDzMwtKduWijmKujfiKH72bshDgL8t1fLNbNNdPZKAdD2",
  "key30": "5potaNFKyJNFaSEQxqCqXPMCNTHdt8bWrHPRiLao2HSRYALEadnduUDtVXE5J193ByepTi73nqAgeuJHXJhruGZ1",
  "key31": "3M8Tw63CuuuuF9yqBDtW3aDjBtbag5VW7c4UdSFEPmKLDjqqmhjdK2Ya9RgFZ6GtGUnzkHBg2SuSNKsjhsQb4dso",
  "key32": "PtkrVdEJP1L85nv6UN661ihgBrfnzPDhmi5n83RMBEd4jLyZGRrpWytZ3tv5VLpV5U4ZWnkjXN2LZDaZCmLCeVC",
  "key33": "TCNrXwvg6gY7cdHgqfeKrmhqg4wzxbtQWLxf1wrVF39ST5qaJJdk4kxu8YF8szyAprAzXJkzz3PveFLXi9vf7oU",
  "key34": "52iHtP2kA4j61Gjgyrvq2XxfaANeh4NzVvnH56fL6KRZMZ6ejhjF1KDMGbDCHonN2HAfDvGi6tUALGMBzYTmR7Mn",
  "key35": "4EJgS1SQJVWTK8y3B4ggNodAZ25Po7bBw8hiqdzvGxe4cyf5y1DfLATf73Dp8spFspma694w5WqYusjfqnCAYp1j",
  "key36": "Rv2RNxE6mtrnu7EvHScGHrDJy5akN4sKrg3tb1TNSidPDYNn7WE9vym69iNMwfXyNH3veu8ishdg3aKThwQm8yn",
  "key37": "297q4MDpmNVXEZL6UEABzL4FcAQUQEcpNt8GPCj1KzwPmLyWiyT7p72d6ht4oH6jHAUouMDEb5bX8XUKXhj2QuPK",
  "key38": "5bLvjasvXxpo191wDYy7y75PV8nKjV8xJkGDtNCyZn8MkEeQXMpgZGETw2GF9nBv3GQnz6XEob5H42R9WH6VBnKt",
  "key39": "5x8PN5abjoMpdoosLcZWacKF9KANPon9NxJBn1gyCjCeYjmQ2HxHeX6uZakJ3KWxLz5PmgPnQdBGpc4bvWAmqRpV",
  "key40": "2uYKtvvEUYUNExRzUMfbhSFToVAWoPwXQFxpTiP94vcm9RcfkfFHBD2whcAjVsxRBDr5CvDNjVvniyHRBrihvfKH",
  "key41": "2V5azTkDK84TexCECBMfNa53dsmScs5FWSPinxTB3stRe3yo66UQ8Hqgxrhzuthcr4YSXxmLf5QcSCsWLWQaNqDy",
  "key42": "3e5EFTAbJLbiHQnguShYxq4P5rPYZhWhtVchZJSFak1a4ARN4yaf9wkiuJgs3RoBSET2ctEjg53mE8RYtfUriu2r"
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
