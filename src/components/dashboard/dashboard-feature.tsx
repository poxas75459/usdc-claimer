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
    "2y2zhZKPRifj4oZyYe2vGFkkFWtBavDyWTvU9d5YwYXKyLs834MoeXr1hjb8F8aNjA8xdHfnTgmrhSZ4THqNxYBg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vSHB8U3uS2REQie3oje5tzpSYDKUrtmD3viM5oYtcAXf8tktCzQU6t2VFNc1bEVBtWvd2Evc35zsAwra8AtsXai",
  "key1": "4fWeMYj6m179nESLRbbvFQc8iFiWT4PLNvGKqVYGrpYxMfc8BCRfp9ghWSYU5WMhJTXJNsXC8tEPybNiaazYGxXB",
  "key2": "5GhZXRhiXcEnADQV2ix7j5nRuLABqzRGis256STjsQ8hhytpoAQe7QexwTz5cx75kEn6jwcDvmA1tvoSviMxBoRN",
  "key3": "NEKsdtt2Qj3e93ct5hjjsDtaGrkt581hmFE4igquNLAM4qMSV9QuowxSCQTHx85S86hgKTgwqtcqoC2redwdbUr",
  "key4": "3RizJ7DjUYRQan19u6TBQwnqSJGbXCTKoBp5x6eJaG7gQ8JupZVe6N9KQgtYmnMsReBjBjsZbM8m87AwAn76c36r",
  "key5": "KhxNWuTXUTY6SVz2T8QZiFRSZ2aVD9GdSXS9JaoFh1ZKiWtK9PijoGxRuCRDWgvngksyKurPRnbnGpuLkMKkYx4",
  "key6": "63jiXKQyrV8bsPUnfehSaV53ouWVovUwxhav6LARzP1jDws15iewLYzKMivoLB7b2Fogzmu5DJYWEr2uSk2SEkJG",
  "key7": "3ofnN1rQXUZk2RtzuwXWFisobNiWqP4eihF8A8o2S2H837TBytVz1FLQeNpJn9xNRvGgSUVmgiyzZH4XY6znEb47",
  "key8": "5BL5iDx5P7u9uT6WpEPpPE94REPatatVqnMWpRHGHqzyc2SWFrZzeK7pFQzqQwMtyFDudTpbGerZWwCagbqL4bV8",
  "key9": "2EbWPizqxofA633Lf4uSkYjvt7kWsKz3AVSDrfWNxQJLMetiATtZodY1AuHyzL3P3epfk17mi64SV32oHNTDtkLa",
  "key10": "2pWVFXBgyv22r2NKir2viPRvN2oCmWMycEqU4n4zw3VwJU712dSpnDf3xbgztY5wT9eQDtxMD1rtCDAmHWrztPze",
  "key11": "49ahwV5VwNonYVMfcmZxTPMMYpXvsav2cGCduaXM2fSoAzGU6W3yJ7cjcwGEaQiRQD6VUtZZbVHPRiAPhAmrh8Ck",
  "key12": "5iWdPN3NThYuKwEk6zvnjh3pCeoY15mfE6rjoUZWdf9w4VDPEKuBpNMmW2a2sCpQYXscBxoNEsrje9utKjnRdhk",
  "key13": "4aWYFv9MXbf1W7oGLyxttUiBRstrvdkhEen9pUmVLT9tPaanh9LTK6ELGudwGzNdX7UMDw8hHbXxuHhEamhGQpGg",
  "key14": "xzh8x6xVbCShvHPtnxAABpVM7UoKLLGLr7KDLKYPFH6ULqrmy6p7hCj7wPv93oTqWUXoRLYpd7tYr7o3tU6uAbB",
  "key15": "3C8q1kpwcaocWJG3NAkHrVSAzJoaXFLsnguUYfPcPYjDyaBcx5rGNBYpCxQ7MxLQ34B9Q8a1nxzASvVNt1d92ttA",
  "key16": "3bxz88ZsBxUTvXxcKxfViwYHecAPVTWj71cHaUKafFWttFzcz6BcVbZ1p2D4z92DD7tyqCGVUbY2fdwgaT1xv8Ph",
  "key17": "3A9M8Re1JRoZoQ1zf5emWW6fFo2sgLewZSNKcvtVuG3ahyMPKhiLnZzA5VJ7WCjH1MV7LY279Sm4hsBEfibtNRnA",
  "key18": "iuxgDsgiwxsLCWrvSpvcY4p4ucW4PkgfHuibVoW7aqFwv7NZNBLbX9fRZHQDFKgxuNR7DzdtGiEhMipMSCfhzm6",
  "key19": "657nigaY69g8CbQkz9ftwDyaBuXHGV2s52SB6mmqrzWG5yQXbuvYfUNDFqwVx1VBdP9CYCGdPhP9nsJbK7SBd45F",
  "key20": "2pUzn9W6U3CEtytMfSd1AxxUoNT6WSAaVB4x8SrythE23jXGdNSdZ1KfEzoZrj7oVDCgMUmN4FDNiNmBMCXnuCj2",
  "key21": "2KquqoopfkdCxFf43csxcFDn1hYK3Eyb9WsPbevq8oeTGGY9D8o5dnq8h7rEZhCvjZ6CYoRiHAhC2Z1myYXqeP9M",
  "key22": "3kHoGeWp4EHQAYDwwRjfP1N7iLYu4vy83gEq8tX4AL8b9coHmPS2gyktzsQU7zUbWGSsdAuxUekVvVcHbhG6aAxz",
  "key23": "3r8ifrsfeqRnus5qzcDVijLqD3y4GBJrEcYfQaNkBupM7A4gciAA2xz34RGfGGt2bhNQAWdk7kZmPzJnxhkhwZkc",
  "key24": "5QPaYaZLfdwiUFdyZzATCJnzMZEfNurh6SSDK2rzWXKfzBnpSBVGLERiyWL1JWCBjHTQePBBeNMYLmjbqVxVutqn",
  "key25": "4wX1YAdzL1M7SMJSVh4YH3jo92pGUeZTT3m8QLSyzAUmipSmac9jQ7EPBQinRKqfGFYW4j1wMtqc6es8TQSCoXX4",
  "key26": "3WcVutFrcceYkk8EwuKnY5JGwyzTuXysGpnfnp4JFe6Siw5aupg94HbihoDd32raZTpzTpuiT5Te1v9s4bisKKFE",
  "key27": "2Dwj3Fyy1owS1C1Xe7hcsfCdbgdTPPqNGW3WbN4N1CemzMwxPyTJ5WvjttbL2yhYNrvJaviejJe3imA1gy5Csn1r",
  "key28": "2dXwNXWmc72hbkUjdA6WDjjnqQiu7244E2pxfzgpGsKtuVhdfNoir7UpiTDRSDqUkqerMawmwEA7JLmcxPE1C2v5",
  "key29": "2WMrjasQmernK1fa1GCLhS2q7yRPmn968nWdJx6nLsaSsQb9zhHNQFysa1eTW185143bmAPYSjnZXBThmoKnibqf",
  "key30": "S5ew8RkrYxyn4KFjYefvXDctPqDLY1S5PSaRf4qjo7wYfboxfKiu6mM24DQUmkTRDXwLzyqgfmmmg8g2eSkGedJ",
  "key31": "4JV5o9hRnatCkVT49naCjevgcswJLwMALkTcfqRrVwtt7mSpXMAdVLFBDxqgCNe6BNxthX3sCiWw6kErW1WWvFWn",
  "key32": "2F6ChVKPvxQYdi78ij2EatHuMNLvLd96cfwayLh2zsQVAF34SGYmWdYVtcKZanxTjxknAZ9CWQZFxkuC4XVGovUS",
  "key33": "4db4mJhJU8FBsagfFePrLZm29RaT3VFHQmNjpRzLvH7TVuL6Z8ZtuAsdMxuKpRfpVhBLgkq1WwaYSWFMJMfkZsCD",
  "key34": "2XJ6boB81T4h7opGkg1Qjw8bZTk9nCkevMY8Hri6HYXPoKoiMdkxom6jtXepdCcoNvQ4sP7PeXxX52veQGLMecX4",
  "key35": "2FD1rsVfSfy2868CKyAXP4WwruPfhTMPpc5mpEg9jmc3XPW4VN3Xno7AuvgC9cFUmvCgUfJJWxCRYVGtmFL5oPLt",
  "key36": "3qdY2eZexsMA2TMvF1hwnuRyQYnjLYZCv44h7K3dzSBzCvPX9M53i4YpHhy6uAj1LnqTTjj68acKvpKM7jG73fBj",
  "key37": "5cH8BxP88u8bNMgDRaP2hHw17U4GEirojAMzWHjRvfjVZx2KoWbon2YDSed8rSJ6NGXiN75yus2WUyU7PGTrpEAF",
  "key38": "5D4onHobfJpXctfGmsctVMCjMLA5F8MQWpDfD1oV4CS89BXmdBwDGHdT8fRjn5Rkjzx61WMVWrGPxoH6vbPWkBzF",
  "key39": "21jW4pdfLjxBboiF4MXy7EP2eSn4t13JcSKnKMZWvMwxypJ8YgUVbGvMmEr4Wqc3SRpBVPsG7HdhSV5jKWSL5h8s",
  "key40": "2xcG2T7J8hyhXw9gRGRUCaSspa6WYabJCZyVca8ccJTZ34S2BALJPXJq9BwJm1hjqbnVWzEVAYhj7VKYsJig14yA",
  "key41": "LEoVdLupoBkGPLggysu2XTDbnB2tmRxG8tUepwotzvSR6LwqU5s8cMaEKDHuwY2bVTgwUe2uvWw5j8X7W4kNobL",
  "key42": "5vPnDaPEFZYGfBqc4qNYifAdWSZ32BXfwxB5M95YnU9z9Y8b65bZXysqs9jwsC2dRELwkcdQEDswAU6TTwfNAuXR",
  "key43": "2gLno8hb86AF3khUTtwRtPbC7NPKeGmS4AehBk6H4hhtCkgdSZY7xDuhUdX8Tghtk797Dq119m9ix3kF8np7fGnz"
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
