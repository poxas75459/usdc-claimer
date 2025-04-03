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
    "58nMPPba7QY25JiUCyhn199a69esXBYQHmcyWE1j8LXFtkS4StPdN2uWZrLaMcUsuPYrkTNFM7nXjJEf9rrMPiqc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21PYMcJ6sZorQGPXRyX9CDekn8x1inXgUuvmFz6JfVAFB2oK3TqjYEkHmD3vPJHMr96NvgmUfNLbv5acDLhtq8F3",
  "key1": "5W1a1r5qtYszHhGBFCMPwHXWrVcEnMgyTismRUdvjyBWHKwdaARYqwWNCny6hLJU2cyPbYcrTNzftocS7dp2Edcn",
  "key2": "54s3XS7hcKmmUpZ3VDMtgjqc6A7LPRjfoP3jhLeTs3U9YQhEXmZmJaWANaYSaqSGBu3vVuG5eTd7JD3SyDHuVYt1",
  "key3": "pBx4V8Q5LZh2WJV7597of3Ges8RjvP1FKE2PNnHAaHTqqyzSu1ZGRxjQj5iPaCrViLUKrDk4jjDr7idotUk4c2K",
  "key4": "2oTcRxXAqr7V1vR1WE3Jchjt399M7WiynjuHTiZtBu2kAKfLWeB5LZq3nCzogaQwTLgZe7jCq1zL22AqW4bZ3gJq",
  "key5": "D91Fjuip1ipcQrh6SCqz6g3TzoqE47ntnQX86ePFQ1QDKY9okFnY8U51sJYz9XfKYGydMRuseh61wSNzZUaGjjP",
  "key6": "DAab4vh9WtHFzTUc6y2Nnwa3RjXyDkUbEmrhUVP4DKXSV7numM4ghFvwhuRa3j2ekpHNmJ3ixsBoFT39E6WVfwh",
  "key7": "3F9dhmyaFu58S4jyutHvEZsAZXpr4LftrDG6SFu5BN69ojQdvxCmRiVzqqMJsdb7hfdBCX43m26ChdzwuQwGddQR",
  "key8": "2fgDYkkMrNoucvQqVRgVXzPrXadmJ2zTmLc9QTH5s8emQLv38eCBMvhR4xz8by8o3796L1RxSJUnrvwU7v2CtEDS",
  "key9": "2gPdFiQpL56D3v3exG7K3QKuh8ig6PwUDdmebkwouoAqNobE8xRD6VFSw2v1Gi3j9wLoMrb6cgRbbNfVyMR1QFib",
  "key10": "5rMGKWFX8DVUR9EBDoRRP89zDsRGEg1k1jxTmKRyE3P8Lw84xiwjCXGn1cQrMkxoj3fjf4wZQ8F6K73w18xEL72X",
  "key11": "RAwhJs4be2jH3uppnSHwa6RmaVK3SKQ9HuP1cXt33D4Ze9CQgjDzkn61ffRnABGBVAZpBt1amQSeQYZVyshdhNW",
  "key12": "3o4YH6QoHK2kNdZdzV27b4MCvKFTx6QZFwqxf8ckFju48jBsnFo1G2QrdwSnxVjoGnUhuLhmwNM1pBkXbnro5CyT",
  "key13": "42CFzGY8fRFMFs5zyR4Dt2GKKxoNgLjudR3ptH1JiiEKhqoFYDyYbMGQuY1dckfo77ZEKDSYNFRyKZ6KZdZiSsRW",
  "key14": "4jXwrR7urZPLv2C1m1iCbZqxHLSQysvNYf7qc2eS8Q6rnPTmcAuwLFU9YWUyMuTcQEw4FTmyhmFPoeyNYuAMPmDz",
  "key15": "5gf7pWsmGyUxp4KdWMukCDFeeoANrLYMjaePH4aFzW4uR1R6i5XHyeF7Uz9XfN6dvWF8m4zWqz7iJHPG9zfCSBFJ",
  "key16": "38W8fr8suqUYhbPKEChFfAW2yHMN2awzbLdddJtGRT6PD5rFfgD4vwHhVFXuAJBkqZh8gv3CcUKsSszQEfuRmoYp",
  "key17": "3SBp4KSqkwcWTWk9ZWsYFcLLDartNUJrjtmZmhy7yXgoGvAoatBERYcbv3pC9eoUFxwFQZx38a6ArkeVscfJ72cU",
  "key18": "2jwmwUebFx7Sv2NTZ2eDKUnq7Q7dFe4qVpnzJNQGvbwNPpXzJFFEeSeNTDxqy1wSGcj8tLEioZguzRGjJCWHWeK4",
  "key19": "4Zy8LeS7drAe8Gj75iVJ4W7hVRchzNgZ5Q34ywTgPURFWTud8v4CwY3mRZSfSwfP4zyPQ8ByesmtVTMHdX35xwdk",
  "key20": "2YobWQCUiaebApqCGrG7t5gDpXXpjrNY3LJtRJDDWPMgfxLNjV74TnozoUgzmcbkjf5KoF8HfYfgu2HtdV5QfyEW",
  "key21": "2cfyUctAtDzME5bJXk1XgmHa28kn9CJyz5HFLEeNxzyYQW1cTcrd1tfFUyobg5GizunDwmDQ1zZFkNN92UAf4r3S",
  "key22": "3mfz86tUrN3Jcdwn2qVs9XncqU1ZTXqpc7gU7Dgsmp3xYszwWwXR4jR7dJ4CBAhZgNb3ivqUZehnxwnwS5mMtxM6",
  "key23": "44hMC4VPTov9uex4n9iwFgpqduo5EBzXCSMK5Xam2nZd6JdD2jiCj34Zh9jGYFj44GebpGXvzWE28WF5myAJpNMa",
  "key24": "4rVU931r6q8wqgsaKZewax5Nz8cA2dvaEyPBCD6LHxJnBpqTkGw7Phfujxj8jSYZsBiKYxZQKJyvfo7HejxYjmht",
  "key25": "2YLgzgp66pEKd7wnqWDUonwp5DcDaVTXBEzA7vAcfpCso632zSbwdPSJupADXUNdDVKyrm2P1vpQhYZi47t1UQY",
  "key26": "2GqfgWBj2ASMdSRv4KNbkdTboEPNQNHVyYbVkEydnBmiH3a7mZTtaVvrk8NQr6hcysyhMeAtBhGV8xyj5erGyTG9",
  "key27": "3L7bE9L4LzFdH3GuqmYPmcu7cCab3tAAtYGea1H8GG8E93YmE7XsmGfssS4m3XVyh4Ro74eoPsTcAayDGQqV7Z6N",
  "key28": "5K83ynLbksPmi1kFZLGMqzQYAv3L17su2TGvVeNEzBiwZg8suodLdob3fPQ5jahe6Vag5uQaCPASQ7Z6rRUmFAES",
  "key29": "23Yg87yGwcqnNGRA95xE64GpEz8hpkxPatot9KUcNZ6qAVmZAP8HjUPfFjSYzo8BzsguTwRy7TsNVFT9kJ2CM2Lw",
  "key30": "4z7ykES8Fm12pzXEPJUeBDVW3epPgvNBF5CJtdFhHWirt5BpxF3MiNUFz1EnZkngyrNXwacTKSjoGcjC2s9NsMFc",
  "key31": "3bfiTP9XAvirvSGhurTqEbHRuhHu4G8QKeaLcPrRxyNWDc1czVopDrAeHZy6FcSmpGWDS64BDTQYbjqcdSrZrM1f",
  "key32": "3JX1Tz5t8L44c5YdgJ4jCaPmWmh9ft2sZjy17QDxPyNybPuvUx95QnZqvNN2eBV31z2EbbabfCGRZj36X8YLuniY",
  "key33": "28mvCNjjfmhr4scVY89aWp6FE9EHtFShkF6MKK1XTRHh678vQEo8bb5wPtYTtpCW62Dc5ckA6DAWQghu658zQodH",
  "key34": "5jsBj9X4jiGVx2WtDbVYnUVu8Mv6kNifRuMLqHBomMXe7bxGrbutKwoHRH3iBHSvd6Qbi7GC1fpejXuSVL7fHunt",
  "key35": "4w1YgGg82d5dfRmxsFLFNe4sWqJ98RfbxZasw12JZzGLUgKJxFer2B2NUzJBFTYzYMCQF6UthoroAHTFeR5DY23Y",
  "key36": "2YEbF4p62KwjwtEyomtKs6A3v3Fmwz1njobvLEB5DdHQ9XwpwPFX6KcWeTAg2353aY2rZFsZtYLsUwekBLE4yQSu",
  "key37": "5BtxPvmXbbVwkeA5EtpEnnu6HegCz8owmaMUtikTLKHyYPFY8Ae9D4mGk242TWdkiSosckhymLNJptMfVLhoZ6BR",
  "key38": "3y5Q62WCazYXBnpJjw3ZnQs1MAcRRYddx7rktYD1AitmWhpVpurUgVnWirWCPbr3kVLRssTHZ4xchDZxAu5RR4Z3",
  "key39": "3yNbH6d4KCyJjEhXkoDwo18qMuRShTMAULvoK1RVG9WNraM8WFLzCSLg8fHNADVidgFxaiVwWswBYkZh6wWgC3bu"
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
