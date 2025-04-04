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
    "kV5kXiTAYm6GmwngzRBoXTJVXovUz4aVKQuvWshbnTdJ3ZcDQvKjDBfGKLAQsh6amzVX3BxT13ZjHaaapcZZucs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kAJqcjVaGWhVWPkyarLAFgV7kGzU4WSRVoDnfPqh3kG65CDrzQqb3gKEbTuxjnqBNDtG3vxhTZS7iEeao45cnnh",
  "key1": "3y2h32zX1bzMtHUhiXsM9qwjexUbg6w21emvCs5QTAfojxpvLm6HkDrrdzJghPEs5ESF5kz7mL5octFi66YRadMa",
  "key2": "4whpRi7io9G1UgXuHpDsTEDe6Xq2dUFDyXxRh4HsYK2L9dpydinjFdENZAgNx1cPkXfnZmGePEKLRQnauehiNGVj",
  "key3": "3ysgtoStmyXZ7LCicg28PYPq2RxvgeRhmtmRy287oa2q6SzDUCetahEiB8HykWGqyeMGkmbAgoHMBWX8TZSoJ4ra",
  "key4": "5Hf5jccd5wYT8g8iskFYi84dhKforhkaZXvmp2ACE8a39Agp2B9HEsCuEoJvT6G1REyaGLo3L67WEDx2cMUFAQGQ",
  "key5": "ABEigQ6g3cpuSFDxUTsHpL1oKtk94ZtKU6uejM9ja92EAEdWxHpheewqzZuC4beHP2vKdMvdyCCv8T7b7ie76Z5",
  "key6": "4toAedbyUc4C4YrJnvq2hjYS1wUTkNSCLSJDjsuE8KPYTpzKpCgD85axqnChsAXwZdapQvWWj3CnqDcygL9P6VnL",
  "key7": "ZB5vr8313sY1dayW5NJqejr8Tyg7VrVsV5mcFPn74odMXWV7NPCy5HhmoPhKCyKy68PL8eDHDo8jbYnSo5D9hp9",
  "key8": "4eeqkjvncB169LG4UnaERuKkXPwXpxJ88CWF94CoEvLTmuxKPNBuB4gcBGKVXhwYtRDVdVLWuuzjeFcmdLvGpprm",
  "key9": "5GXQQjQfMvdnqcH26ctqd3cCoDKmjdxRjpHSThcdhtQGTEHifJfnyRsiSJEZioEXen2xnLfNWKZndAseRdYmKbXi",
  "key10": "4cZsMAFnL8AE9B38mXMt48HLMeUrBt4xtp83HT1n6nKgqcbyrpMkfZ6WRoZ8GGX9tfwzJD9zKVJSHVmAP2yfufh9",
  "key11": "3vaV6oY8M6vo1shsVyfUmqfRUCrGDun2gn9YLu6rCy3PXfsQM3up8a3g7GAQHXtGeQoFdsBwcUrLBa2A5iDET9Rv",
  "key12": "K2mMgdrrG5WrxdaF4WpkwjrLqKvD4EwJnnW9baRRxroEEb3TspW3FDDkTexL5L8ewxtbY92k4vxgu53vRUgtXdR",
  "key13": "5KF5Z3VshmTE9Dh7TK6edLmQ6v1fS8SaEC7AbZtD78c6kShg2bRLPhGxNuxv6VLFkj1JdM3mG8fdP6JtSC2VnZbx",
  "key14": "5xjDGPD5eefmkjf4eaFbYDaSXGZQMfwxJ1Y14Uzgk2gqEzbFpYQRihsswuhgWx3ku9hCtRfGnRn12DePrizXVc4o",
  "key15": "2jfnw3sW3L1wfrp7ZCynwooer2Wr64XccigDUhex8R5NprT4mPbFNs6RPJyoAGc84JJKpKcuPxTzmePxjjn2jXkU",
  "key16": "3dFGpJBxQudueAx3cEQnFxrfZkiJUFBs9Fxc4VoxFdfaMHhuyJ9fyqvvxBYe7Y2jh3jujCf7tK8yGqSstWW31kCf",
  "key17": "XLLPoCA2VroPmjnL14rL8vTSwkNnXfyFMeesa3xZwaeGptKVhsxvtpFJeA1JtjxWsB5CtxBPbSkvpEQpW6uC6Rk",
  "key18": "3DWT8ajNTNiHQwXUbpimF4FgfeaxwHFCewjnjKEm9VwDN3UJhJpbavJ6THxy7ZHJnyi73siBGEZdMdJYuR1LyGAf",
  "key19": "3WdhkDnqmGrewiTzcqGvm685VXEdfZzQYK5D3ZoYCtpwoyjM9seJsKRigFnDCFnu2B1aHA6uQuq1evEMNZtAJou3",
  "key20": "4kr1kTGi3zJhNrnPecFERZN2niGJ9S7j93fo49XbYLYRKa5dE4FtqE7EY5n2aKpqayv6pVMAGBJuHFd8qbpbUzwW",
  "key21": "38FgUjv9tQN1niW4PX67wrs5kUKBewZpKEKCffETYSYj4iycGYejTvoukcPdFZVYJzQBRZ4uQNoy9MV34grqR1Cz",
  "key22": "33JKC2xU4KCL5RVUQCSFm416KuQragxetZ535ePvm3p8ymptCCWY6pNhifvmW2g8cuW5hrCQZjcyFFdpMFfZgj9c",
  "key23": "9fncqmQjAL96mPozuGzprZ9HAZufaZJwUgctgjFRwaWQSfNuHogXxDRqJe65yZGv2mM1Q6TsV3aV3snaxpXvgWi",
  "key24": "44J2qSBuEVmez1DBZThkubaQG9A9DREF2WXwSqqvih8eDaCwZ7BxMsd6Wj5Sqs4CKwvMHhZaGruDmRQUmMeNG1EZ",
  "key25": "4ppEPE6WHv6BnUUCDnJrGsrT23pPdPzm4HQgHvZzU9P9LzrxFFWf7461Vf5aNhNwES38VcohR4opkRdb1M6qdXuZ",
  "key26": "2YjhugmH8TknBcvmd3fhBbTGx6z8qwSazyeEgfw82D4AtrhH3yQ6anpBmkuEGBVoZxEkvHD5SuSSnMjg3q66Biav",
  "key27": "3BEwfAUxcqRekEtxv7oEKVQFZ8uzU77PaUicCFwHNUiSChk1MbwKXN5Ti4GAcP1GmxPPH3FXzuTtJ8nCLd3UDQag",
  "key28": "5u5zq5jXkFHn5jPTYvnNj7woNF4pMvto57mLrXZzxh61RrRCCm4tyaGRp8CHvtMUQZeXZ3hP9pCYZzbmNPdtmUup",
  "key29": "4heT4tSDQK1iguPeiPMb1UvdLUiGBWTYFw82DrzfFxacVzECdPUSrK88ayZf5cnK7eZCdDcevZXMpCRNB4z2FE22",
  "key30": "5nFUHfD5fP7Rb8FtuzV5YEaTyDHNVJepnnR1pMU1nBJpf6NzDnEVtuEGJE3wKUpzWEhARnpr66GAkDgB3svNXox4"
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
