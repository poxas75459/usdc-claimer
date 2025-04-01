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
    "5XAJCyns58m94RvGXYTakM3dvgcg3Scjven4kL3vobKozn3FNxb38AHCM6kirzvceABhVZSVaHZWAbFvFrTqbk74"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44TyzWK6XfmK5bmaw4ZupniaFAGURbxuLXAPGq7veYQ1v4yKwcaSX6Y9gamBQ5eU9fsjF1Bc2QvddbEvLUTMrwwi",
  "key1": "4ZUPLY8xqSvVWnXhmWBjAR611eJFuRBLa3L1XD8E2vTmkUpupHEyaG5TYAvXcSuiac1eLtxLVRAVvnP1eTfE7Qj7",
  "key2": "4mvkD499yW2Gq8Sci5zptspjePi51rKCYBKmw8ybEiDyyPHjfrLL86ufmqQvCyZLQEheE7xbwQe8gVTrVkizEe98",
  "key3": "p35PZ3QyCtvWJF9pexMFAmFx7YU6V3GMQLS236sEWJuqw6tSs2XNuC1VFCWBT1orQEdLNUGbrj5H7z5g9jG4H72",
  "key4": "4BhKQ4CvEALvQjjEUC4CSQTVeVjNgpSD2JhgYBYSJp1sGTNkz5giu4YsDyptJFpESuGC2S6AM6mth84RX5ut7ytR",
  "key5": "5q3gHUPp85NhoKuk3s9Hq5ht78nskfeX6jFV6oWnmZiyCqnBNK8G1XhtMKgdbZYtF6RrXi8ZGiwkK89Edm1u2RXr",
  "key6": "4xnTiGMi6PFGXvLQ2JWnskcbYzBFbFxdsYGS4Zjm85RzAGN8SmpaxsThTZ3E5k5pNifqQZ3iXrTpc4mw35tgDpN1",
  "key7": "kfhL48kDGwjSAZQSRFuvHBLRC5Lakgrw1eBRttrHMaopM32qfvtov36YUzfxtM3FxG6W5MXtnTX6U1HC7skBL6n",
  "key8": "4C5NQ5VNsPZMXGcaycXWS3TZ3WhvrptQPPxvmmp8kdBJ3XhTfaWL2e7irvnikt8fEDY19xn6xaA4T4J86q61hh1Z",
  "key9": "1Bozdzg9xrVNoESEbyhRFXqVubM9865X37s8AsRfwpQCGu6RLBq3RxgMQnnR4cZ9ChaVewHdD2SQx6z66xkBTjr",
  "key10": "5kLgJ7SBrvhbkdmXw7njSNik2R8CpkFVUgFR7oHCcBCMsCJdLECTrRqWNLnVYvtt6TqdUneEDCPyFW77sFRjShmt",
  "key11": "2pny8vKR4ZuUn9YFWBJxjJoZ4jGTuVUwRUxnN3ghsG4XkjVUy79bYdHXaEFYypJKhLQzqmUKTAC68zeC6UnYPFw9",
  "key12": "5Qi74Mj5CAEiSkRSvFm5miV2FbgmptE9htzUPFMf1SEHUgAVLw2GLbgyznre65B5SBso2JHRL5b1pGFXmiVuV4hK",
  "key13": "5jWddtTdujrGyXbqn1qz6f2ZZyJw5Rczc5J9E8k1eFCtbj45wzbvJKc9Y1DByw3BuMXhuB47YKoSrJN1U3gictZp",
  "key14": "32BzUJ2SCs7mYxPbnCchUxiqCCjQsa3QnLE3ssW8u3dqL59DiTwqhbjbz6xCFieVdwUnQG2KW5K4PCURAZB7ixsM",
  "key15": "etimtrdLX6C653foHrUiojp5HUNuVMWWHS5hdJsSmrRjG8MLh6KssnSitRyqTJyfjU3eWPdBcBeKY5rH31zrEDM",
  "key16": "2vTdKoeKniLE7H55oU1cvLjaXiFg6s9ijVhbnyh19ZNLvVhWFNdq9XmFg4m6UfTNtQwrU2aGk8ECfTqjJP453jHP",
  "key17": "36Um3vNtb2RxziWrCBV4J8yR7pbHr7UJi6NMHTWPHspmTU9nVQExb73HyzcqBp5wACNWyYRcijbJxcsMWBPhcxRH",
  "key18": "61XsMGVnt2L6ujCwDKY7mLHB1XEAFDj3YdDR7GY78FwPhBiqhJH6WpnyqEsmSnqyxe3pLAoCBNW7iw9m1usQsYaS",
  "key19": "45WYbxG9RR77BfJ5Ca9CnMvxpQTpS42DtCXs6oomT2LQBpu41Xq3oQ1ayNPPfD5kJPfGnH1TXMMTNvmirxUSsZLq",
  "key20": "3FGDF51R7EUj294LBSCZDQsWA5aQB1J6pLdxgwrxHPpF6fJ9zHURHDmWUtrYhRC6j9T6dFSUPYmvm7oELvVpwhz7",
  "key21": "5ygRPJkPQFXt9QhHVrMb4CZe3Zy7zRZvMgUxFAW8yqVGzNrLAwcxi6m6oZ3YqGDp96jJM6N9N8NfvRgKtz7W5Nzg",
  "key22": "2YGcPmbkJaahjK69UWtrTBhYTGmDNgS4npVUEk2qGx9w4niqJCdRLJVvjztmz1GkfsUh4EEB5TZQpPriFZGnywKK",
  "key23": "3XThFarKtohiYmf1SFV4waR4rHZvgMy2nQh2mwpJTRfaf56GVc8dM6Ca2vFM3cU7qjWsbA38XR6ZfBLYuzSBRFnC",
  "key24": "3ucutgnpL6yqmJqwuWms2widY237qBjnKiiLCpV6U8s3H5FAhVrEWDnUNsRaKiEfQNvhvwnD3Rd3AGqicuZqjZ9v",
  "key25": "4LaTVF3scvLfLdjaMVX1jhxZw4qkLnYsJNTcfmESSPFqPDJ12E1s3V1Edequ9EqL2dRcTLP6b7Qt31VEroK69cML",
  "key26": "2pYWHb8YvVFviAPfZjoBKag39Bw1XuChZ3e5XLXW2UYkF2Mwgxu9LW3fsLMFiv274gzi48C6t6h2ALKqNVgMTRG7",
  "key27": "3BrCcSTXsG455Qy1HgbUJJhYttto7qKQ5g2hheKAxBTddUwud7UkSRBLf1iadUHToDqrTiy7CpFgtg15XUp19Yqp",
  "key28": "41LawTtqnqonECu4mGNFus8gV1YjmNhceN87tU5vUDDmmEAXfweEj4nrQqgKcugafRbJYmU8dGykeKedLw9fWNn8",
  "key29": "5MRPwNYQQjtSEp3dELEzvNg1hNH8kKMHFG1PdXqnXkrrtcy3y7vDyNQSXdqReW7HuHwurCJNvwHxoBfSnZvLTKmb",
  "key30": "AZUNdhsmyEMRopG9n6iQJhutzqb6jBiNQQwp39PLYfQ6kwvN1JZ1niX927KVZwd9BBZGL52Cov7RypDDY4W9dmC",
  "key31": "3eff8VwECS7Jq972xXvRcsnyioZEw288ZMKC4qEX8CzH37T3vbhR434E9KLNnrrCY7jikdT4nFAGfCnkovwjDfsu",
  "key32": "gcStXDsWgLZ1csDj3jaHmmp9RcdWKjFJWmv6dyx98SiNHotFeMxga92zhyvsbJA6aLtsNsjZPFjMXfMWprYrV8v",
  "key33": "2nHbbyLr3G9tfcH9wSkMQK73Yoiofw5xn5KA8TexvigcC7MM6WVJRWSrxcQyrCrEU7TsvjLzs1SnJMgAQGqhZSH",
  "key34": "31vrJvAKZvDe4WimxwrNDf7kyTcw6LU7hmAHU1y7RgTQey2rRGrBHSH81jzRryZgDf2hVSrv7QJ7pcVi6TWti5f3",
  "key35": "218b5qhjUBQt8wjS8XmRb9peVx6jzXPM49HViWHRF68poSm7czmtHkhcNwvkgRvGsRV1uY1BREjF82TyFHwbkQ4U",
  "key36": "5vgdiLfA46SzhNweEWskCJmP8aLVzSHhFyPQoX3vanJ4PxhLxAxugwp2MHoooUvdh7G6xHpvXeUVqyLFgs52ZzsL",
  "key37": "85SF2xoweSgxATFuus23fsCrpBg3GNoEwSVJtrzY6YSNdUqihZwyCXk5HRxf6ETo1iM9bqXvNcAeDNyGsn3aXHk",
  "key38": "3ZAwxCQjZ5aU4ijX1dSCw6QkdhisRBsypvYHkhXwoPhPohN7F9doGv9MTP1ZF2d81J8S9ZoRc3fSLTQFaXbLLK1o",
  "key39": "xDivM4ijtQE83cD5fnGyNZJ4eMw8GCPRAeWwjs5GkH2BRrijpFqsE3SWD6jUX1VwhbbX7CUfcMnVudxeXt1aP2T",
  "key40": "23rKYeXuRP1Ep8Sva4wHpBtqct3kvTekemjUArZVowYYvHjqYEntJwXCeGHgjUv3Ar63e3n9wnbKKsyZAHGUDjAT",
  "key41": "26NGekmvaQhCdanswJJuBEwx3UCwv5SAfJyuPmGKaFVMvUUWEWKPAAxz3Kgx3dkdvT6E7DjrXPv1XaiBH5Ny2d3h"
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
