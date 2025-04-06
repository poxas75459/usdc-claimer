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
    "1qoq3LLzDq41W8hNXGRSS3GpaM34yATRDDR5dbya8KVbyuViHvxMJx5cWuPKm7DuoAzWewTsP16aK93zBunsD7j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45kqYCdpMvMZmqjRqhJ1wtGbWW2KxSuNNUPqyWntPZn7z75TCK1aaPUn8VYiWQNNXte6JDA5Q4SyA8jxEMWXqZbo",
  "key1": "vj9nZTAZ37qfiZgonXtWRpHCnEc7RcT2XVBs6PNoaeg1ZAxLYnrhAsDhTDofHhjuiWHPXbV5Xg8J5gr1u8XBwau",
  "key2": "4xF8dWSKR24jgyjVd3jx3vhVqgkioFTeXR1nggdjxrvfkQNG6bqkxrtAXQ49DQ78X75jNch6ixfB4K4dacz6isXt",
  "key3": "2sWSmGnvE5E4ugWmnLM8Kwvn822KHF3oMWf2LkmycaBUW7d1xX15EgPS7m3thc6Eq1hGxDF8uGrSvuHePUQ7HZ3y",
  "key4": "4SVxEXAvSiVpLkZpLy9LXeY6BN2LEeMTeyeRpww8GUrW5smEJNDKpfzTGW31sW1M7mHpbxsTXSCTToZ6qqHZNQdZ",
  "key5": "4p5B8jNopfb4Vn1bxJ8VnMExn6wGqxTGSXTBBXLFSS4hMwbqhE1hZ5xy1CPK96vUkkwJ81YfghT9BZPVxv3P3pcU",
  "key6": "2wXWE9FnGUbvvNmAoigdNc8b2KE6W39tDQvqgmCLFzU1NhzV7MVt2RMj1NNaUxUAU5i5YX1zYMfzdC4o5cetVRAw",
  "key7": "2RTMWPBCma5LovauF5pkhzd3UFjiddZE9S54HYaJnTQfQtVMzj4Cmg5uKtkJgov3eXuVX5zsARuN6MU3cAtNC9rc",
  "key8": "4aQQ15S3ekTCnr8P4TWqZtCfUqF953AVs6mLuv3PZt2MsrtfBjfb1kVWyhxz1rJHeoWAoi51CQZEGfeaL3q5wkfy",
  "key9": "3JSgi2oL4exk9xj7seVKLQ5RTKMLCwEorrHzWR6AjpAcLM3sZtBKAixNSjoZzF643anNonHLUy4sbp2pxK5oCJNv",
  "key10": "369RkKetEC9PyMA3LSwYryzNPZ8ZsZXRNSwFQPDK2hEMskeZ3BX17AxjYUjmxu4gt6TX1gUdeQ2PzTJpDVAuCwTv",
  "key11": "4fn7q49QSoKBoxbEwZSw2MTHn78vGU36GJVv2CgFSEN21TXES81asGChCkHag7vm138Ef4x3visDP4pGmVVUQnwb",
  "key12": "2C9Vmk7QAB3J8Kz4NTFde2Pwh36vScfhpyhkL5VpvRujN1SFf4UcLi2dqix8zf1hrGmt9cxdu8cu6EkHdsKByDBq",
  "key13": "2CZMZEWzfasKdf94nYQJoDXbv38bWVBbAUmiWsgstdeQHpoJM7SbW2CXccJyq8FXVWNrjM5hDsBCd14TxroN8bDT",
  "key14": "4skmWM7efTsyvgVoUjDr7r21UfZnGgWvaaYu5aZG67mUp6YWpRNUWYKTDG97qMV7NZBhgnvVkXJiA2QZdFpJu3XX",
  "key15": "634q9ig5UqE5yGag2jQejkVQTFQ4eA5sLzhrPFHyzU2roGyWkLFn8rvpWRdFZCRxL3xQZhACc5Pn5uR7Z7RMURZG",
  "key16": "FjhSmBjNgiRk7HeRJE5xqjrdUqkWwYSPDZgKDgoxdEJihpvQcqZWuas5TKCYCSfBfe82ndxGgjASKSvRU3VswpD",
  "key17": "2SfxyRBjHQ7aea87wWVpMFYycr9ZojYUzzasE4mTJChhFPLuVag7zb6FpEvPA9oXWU2SiRGHSPJTZuoj8qAj3KAm",
  "key18": "2DYo7ybujLH3TVtoQSg6tLEFigdh6yqxJE36zn2SZo925S2HG455rSYQuU5o9e7PfuLmR5LWV9c18idS8SEBM3sA",
  "key19": "24ymRZRTkVu4XjCBRCrrgQTk4hRZcbyttFjfm9ERHLfBXj3nvMrRFgdnCoQVbR7gGcEiw5EBTuyyySfdJ5Nvm3yj",
  "key20": "3qSr8sb16aUxYc4ThR6EugvYUsaPw9w76dWsf6b5EGg7TGbaY3tEgovBcz8TB9romAxnGxogkRSTs9JkWEViArsb",
  "key21": "3QBjuMKCo2Ax6eE8RYDLogZdjzQZMup8o8RX9fRLbNwzfnq8ZL8t7y9EwNKHSDhR6sfCbqXK5SMW1sxerunrodec",
  "key22": "7u8KnizkYun5L4gom4dHtU3HvTv6AuZzoHqES2x9nemiMYvjQgv2iMi36m2nVhoouBp6WbYgX1ChUvuMwdkM3ng",
  "key23": "gdQPnW3qNB4vYCRsDxwAaphWjbLU4pEwkB6jBLnvUqqpwtfSbEPeTebQxNKwJyikzf1eagetaTZbiYZthHbygNY",
  "key24": "3k97ELuQgYSbUfDBbftEpnGfoinwk4dmYD3kErz4p2cKiiYGJ2Z8jcyqT6AANxxTrp1r3VCn9D1QEtCUDzVNGbQX",
  "key25": "2jVmNzNCcB34fMBEaGmEJHH2q4KqFSAULdJk3b5W6JwYWpDgh65rYazbHYN6gC2V54MsbUkq64BeiosqxGWkgpLr",
  "key26": "38sXnqps5k3QsrEQ1kwu9E9mPZDYu2zGXZAB3CGUTpHagNLKtikJwSH8MST13jU8YFs5CeNP7u3UthyscSuAPetB",
  "key27": "5mJdfEB1oAnHJfERmrR4ydYpvfD7FBuhKzy8f5sUsmDebNaC9MbRyDyL1vQxX4L8b1wzdi6eCGkhvPdnu41cLrVo",
  "key28": "2uiCfQDVRxWsBdMs2f4GjyoRD164MoY3x6aPGVYsSfTb1M3WoTdmDADFJMK3Qz81XRdT4a6cLdeFABacUr4e7JRr",
  "key29": "dLji28VL1W7xeZtm27Qm5rsC3CyydfYDwaEn4TehYpp3Ri3MuD8PEgCLLzZeahUVp8RUpzE264sYdu1ssdnqDDB",
  "key30": "byRG7Vq98gqbxq7yQSufgsMMMyz55E3h1hMm72L5z1CteqPgv2jE8jCc9h5sLCBJMPYLg1o2PJsmum9niRuztd2",
  "key31": "4P5zeRx1JMoLNJFX6jvgjiyEL9ja8CurzJFbELrEsBnTWsxSbvEFhA9qomFXondHp4YToTKZypoCeupUpURYBAJ2",
  "key32": "5tp4xWqehzufNQdZzGgbq5K7rdV8dn22skfPCv5QtHb4jw56JxVpCxYVByjH8GGkqYMUXHKVNYTDGngsz6S91mJZ",
  "key33": "5rrDxAYJC3mjCLFYQYy938eQTwjdFiHA2C73fbsnWUfzL5eTworpoysW6HRiVVJJQ2MsvDWw93Ra9dZkun6gWJP5",
  "key34": "3M1Ju5bR3MXTZtJVcJqbXZ5S5uFE6TgUTWBFWgCFVMRJqnqo8Fq4Rq2LFdGXR8uFywT6Kcv2XyHGRzxJ2tPNxVGr",
  "key35": "39AU26mvniEdqnha5xxRG1MaafhJ4jxvbjRYxagAjAXKaJwSZaNKN795KtUJHwEuS8stxw7kmikQLctTEhZxa8Gz",
  "key36": "3oCb69QNoLzEtW3ioo5BJZ81sSzXoDqjWT9ignxuNLcCqtxZaEmeJ47rKUn65iusCyz2LTmmi8DBydYcJTcADVPs",
  "key37": "2ePS9jnw9T6jc4Tsyz6nLAgkvfvLCkB1nTZFog2opXSwsZ1i8VfK48aevFEFDJbxoYQJYiPoE5hnmPHJyaBpM7Le",
  "key38": "5Mg2esqtATg8oM2WmQgnGiFVaLAxXDuLxadkgTBEi8X8Qafe1PoG661iQ7tAdK1vxE4CfEYcAdda64kTNuTwLHWd",
  "key39": "5YMXt6eAQsCQEg8bxYQ4YyerxwerCezf1nhBjnnwuBTEa9itUwL5UHF4SFLkQ5yaJNToeregn9xgh1vCQMbVMQiX",
  "key40": "2yDejXgrFobFVZeNZUKKcrPiyBKHrfqkYFB3oeESt8CsaD3He6CyZR7E95gRm7aUfVPDnwsn1AaRmsLAuGnguuGX",
  "key41": "4299szhZKWPd5JJaEv3grZ1M4FUn8wkCUjjisuJ6YY9S1DQsPEnPY3c8ZMaB3Hu4AiRzKEoExPNGfvosUnTdLvGZ",
  "key42": "5av75gbkGosX7R43C4E3XcGir26APvSbfgcMzjVwbbWEUZ5cj4CX3rtvv1cSjMm14bjm7qWpGThfEetfYCbRnikJ",
  "key43": "628DFjGeZnGejzv2QaVFqKtUKWNraV6aUvWsm9ndtBLiTk1Vf1D5NUayJGpsdz3ueLVuaWfVWmq7EAqh1RfCFxtP",
  "key44": "4WxHXnpUDms25umtRSdETqdpRQp6ndnpaDAHvEHpn3As6zTtGF7H9dmENuWj58yg8z4jRqDLBfSP7Ae9D5dLpdi8",
  "key45": "5jEdX45fzxugN8hWvZ6wo5xXTz1vdq789vLeStRCYNf7EsGXYfbGii2i7CVBnDESVdaoZYMUCVHWp3NHDxcYgiN3",
  "key46": "3K7cLgZFGPsA2ffS8p1r3xr9i7Egj9Tza8dx8oVnYniVrHfdBvjLtGhugbuqR663dx97JfS2JBzSnSfdPPF3iEhb",
  "key47": "2G9f7cxKy4oSfXeEL2FdWBTmpP7znjJtt7MqhaJNMbeP2ptA1MqC7vM19MB8g7SFscnPza713MNnBDfkMvX8s9Q1",
  "key48": "5kZAnEd5bNqWL7rPPzsnXPHMSxZMzRnGuBdJWBPXq5Hm2LiAfuNwuP3nyNY7jdpxJQaPiK19i1EPKDUjruRq2Gzx"
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
