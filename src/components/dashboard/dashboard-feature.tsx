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
    "4yGevu4t62zwG4pjFFG3VZqCw5P1F62qMfCWx2gvRtQbnPFQCt24aeWnm3vBhhQoSVrr2hjjZbc7yxSEdZ1bimZ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LuCctsn22C1obHoBkh5NJrBRUdxzt8y1W3DrG1NAiYX6ts4oWd9HqJx8j86JHch1DnVWhjXvYBMJLRpc2mw5Nkc",
  "key1": "d4d9Gb6e3KZpHBUstVPmBWomi8VLNsV2BUnYwdX8ktxDmY27ASFyRSqfJw9LRVzYqUoQMgaTk1WGQhoVnnhpSoV",
  "key2": "xmMuj2hAjg3UfMiBYAEh8FraM8SPbjdELZ26rYN3NHuBHyYj9Q6uv4Av4DzPBm8faLoY4vo1u3WKeG2oXyMzYxq",
  "key3": "5bdJc8ZfqWxig6yQn5tkR9jsTbJWVoiyduTrMaBpy3R5w1QiMTN1BaLnLeULtZhiU6KnNqKAgtMqxfx68wpButAT",
  "key4": "2jZhmzSWZkZLSzka7Jo69H7d24GUD89qCbCNVNwYdF9demxT1wBPrFD5z1tuD3W2CaEs7N7sDt5s4ncFWDCfttiA",
  "key5": "5MU2Dnu1HYH8PU5THaQdUwPj5abU7jqYugLMWdAAAm99o9AnPwHfGVfZb4jpr8qztrHHcqwt81G4LruY5H6Z8jt5",
  "key6": "2sdkYVS7f6Fz1HDpxmNKAmrzbUWoQE4LoiWohgR4RXF4s87iTBx3FD176mFPQsTFQCPfro8iYrdYC3mL78NPRJYv",
  "key7": "31VHSZWZmNXEXN7JWKyufEmTTvMZhVecTsMbXvoLn7z7LxbUyK9uT8bBxKcog7QU262gWohQZs8VBq9KnECcfRNz",
  "key8": "2tYwvTHVFjSxe78MGfr4V4XRguALbHMB3YsXpaakfiP2ZJrYfiGKLAwBirEK9rkmKemUM8aknmQo5Q1j6B5HUyAy",
  "key9": "2tpHHw9n32NCEyNAWKnNBLQk3Wgdow7St8GFPNUkxHJWY7Qgu7vW3SzHWZWExRtRHJpZj59PfkEvsrzVqJU67FfH",
  "key10": "33TtvJrd9P2Fwo1BdhhpsAUuG2sNVXuVd7pgxnPCM8GGTiQAtUAWKQeX44rAAVoDpqw3JPUUzUtxKSt8VLoa1mc2",
  "key11": "MWFdXFQDFrHGoiDUV9ynuiXGK3nHLqWgSongdL8ogCbYK6wV53Q8kAdeXQFeeD1BiPgSRFwuzxz46mtQ4puaF3F",
  "key12": "2rwq83xqCmFeDxoe1WBwjmEgY2T2YbqqGCdDM9rCWFjv6eWFBkfxjE9ihe5ArykT49BX8vYHogafyQCAGnJbPyQw",
  "key13": "3UZm5ADTFS1QnC6zG6JZYCdZb2v9u3a4XF1358Hx8CfJB9D515nVvMLa2jL9frFRRfHH7xrg2L2r92nsym9T7rNJ",
  "key14": "SPWqyh1FZjg2QV6P4ftW2WC1jkUjMjv3A92VomUHyeFcVWLvtLNu9qV9Vr47dyXx1jWxCPMCksy8PX3DreMemSv",
  "key15": "3iEyvkR91Xs6sEZQoCR2rUihvwBuqeo5n7d6qwnnLrFfDb6xhn8YUWniZ1CfsQEv3M6Fogz6uxF5YTH1rFfknesE",
  "key16": "4cbYDu27sAdUKs3qGAGBbKEswh4dMtXgun82vaA15Lae5M6TSqMaTL81yb1npWdkbmNTqbhrfM13CSBSabayjCxX",
  "key17": "45He3ga7gj7chKxfu519LC6nk5NkszBreBDpXjaq6BWjwSBfFCvEHBKT4mEsiGn5xUKsWUJTzt6tA4h8KZy2GdDw",
  "key18": "5PYq74FswCcJnHp3FBXP6R1jAdpZa29rkkQJHKL4DEwpANRkQWCv81NeHRtVygv5y7ykqAWZqpeTKf5Syu1bQUhb",
  "key19": "59KAdVzVMfPWu71hbjE1SSGHCY5xfreiGPhbjSt2axLPBJiXmFHRyrGCYBD8xbsmLnDxxXAvncgo25nQ692hrCYr",
  "key20": "5FHEMmeBiDJu1BEUSS2HXEwppgZrYZBZDJPLnNh7gpWVaEmxGfq7QdufiL6BYNVb4H8CyWgjuWQn54v1sL4HDz2W",
  "key21": "3RquUxH2E3zXV1H7tAxkUDAvLcY3ymXqydx17Z39CzZ7zFgu1QZpDaAcbRQKoUW92ciK63znsLJYpsfsQg5xeXEC",
  "key22": "21sYKwbJ2TbxaYAizZ7L8moB1SJgReFGRJUpqx4E7A8hKdkTMqVEcZbqRPVNaa2agJzLsrPc2iL3YnJxnUDe1VLr",
  "key23": "5vpMrCBtUEG1QDxFP1D5t8Vtyq5JgCxvXGUmfCTx16omAnu4g8f4MkoKHRTDgAHe9Q1XCvm5PSr3Udsg3by8Uy9V",
  "key24": "2Kmu35iEw7mQtXwhMvncwBXqXt8rUQ9fVGsqvjVESg9jSUjQHu7w7VuXHCRkjbiKXHWsn7Ahe3MzXHYNqDuQVuQD",
  "key25": "2t4tUPPsVyjoXz9bLE9uewvEjN3aBjivd9wt6scaLzCvJuaFedcQQCK6LUsxs9xQYGnraaceubjSHd6xbh4uV28e",
  "key26": "3axTDahrg4y2tj14KvnNgejoJCtyWTAK5NhTytGGBmNp9BssUjVMfV6E7SXRv3PoV4RnHesmPVxKenkCCePAbyXe"
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
