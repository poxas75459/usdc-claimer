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
    "3cWR2JP9FFjgKZGV6L6zKhZ69JnDBkF3vdcte1HwfDc6pYJfSYCKD1ydcgrr8pVoEMW6YvR3zgMMznGfgngxvE6G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EH6wfLJFyVJfBxCXBFYwqMS3Sxi27dDs9aZtB97vGyRGVifmu7vooyj9BJM9H7cBg55Rw2aSUdJBWDDZaJqVnTr",
  "key1": "5fGRBkk9n25xRsG7xiRAMeGVyKYi8Px1WkQGhu8x8GXyqkEyuz8V5gRweTNHXyJvATMGEV5TKmMa8chECSiEZqfN",
  "key2": "okAagLEtwwMNKR6DDmRFxJLUmGFhkjo2SmJ9sGvNcYps7DNdJuEzbuBFWKVEiE8fD6fvvpHeA3FYCkCwyZurp5m",
  "key3": "497KSndJNgNPsLf9srUxdjrabwRpuXR8LrafyBtb5EEo5N6hcnkmFgZ3BeTbtN7N9KEokRGz2ENxs5xoHNVAFAuz",
  "key4": "2Yx1Yr5qd2NWBCHNiKR78mpf2QgKenhS7Aeczsb7G79h5ZUsvL8TP6QXfxSaLCBJmVhRfZ4Jz2n5N3voNS7GhuKp",
  "key5": "3U26sYSenQR8DwuDFjLWKwhE8bTvKHj2HTLNkkfPid48zzN7zeizCTe6X2NRv7BsFp4hXxq6cRtDgLgN9TaVjZjp",
  "key6": "4NCraaXBCNgABKwWnNWyi3J8yZyusXAT75Dc7rRC4gn4WhiaMK42Sh7vr4s2wUnqTdxBcykYeP7g5vi2HjYKLJus",
  "key7": "5pMhZC6tNDdEWRLkcDzEuB6ywbNDrN4US8ynsqmLg1yjMWfom7CCXanKFxaEP27Pm3R7Vp2q9UgqCHarcw5MfMYK",
  "key8": "4fH3fb93zb1TUzH65rNLwUfjgoB11GcJjs6yAQW9yLwKWm8zYranGmvYZoqHhQGQkueecPqepUwqjVhrXm78skuK",
  "key9": "4DpukcGp2rgoijaWeEp5A8eq5r3fyp5EkjVFc9mJh9UNznQDqHdezbzSJpxaZijoX5DA6NDKSDef7WvXL5AidaL8",
  "key10": "2eKomPv28A3rpM4gpAR7TGkuL6AybsBwr8GEAD4QFVH5BTaK4PaU8TYQb91bjj69ePWs7tdprfJmjUB8aUfjFdYy",
  "key11": "4T1rVCJ64dnamE736gQQ9YR32ZxSANK4yGbSZ8aUiGddPCPvqUB4QK7J26kerYN9Jtw2Vdjd7USaNvp7STAfcQoC",
  "key12": "5S6ejzMsshobeRNy3bPkWgd3LLvZV7vChz559Dehx22RTS5CJv7nP1MtxWGJzbG2ydM2Sn8fzJ9RLcojsTTm3Qaw",
  "key13": "2eFnEdm7S6NiAw7vybvsxrF1toh2nZyer1HXZBnt686i63iyekGAnHZFaG2AhHMfPL8jYg47ZH3ZBcZdJfPdwSx3",
  "key14": "4WQMEgNy4fBvYx5MwqMhEMZdezgNoiEv9rBwwwfpXj2rrnrYaqJK2pjdWfUtVqhn1ayVPyMb52KRGrM4gzm7cUS7",
  "key15": "3vbDFbNZPUpNVLpu7yGnpRShtX7iEshxCfiAXN2Rx3Rvao3S64Ff5KaDcsPXDB3Z2e3CXfJS4ioisBawrpypx9m9",
  "key16": "3t9GwDWP8jViYoSFUKjvDQka2BkGmSr4EtNKYyVX8av5Qxiu69F6NBZc6vxTC9kHC9gmR3zfuSLi8gBWi84tUfGJ",
  "key17": "5wcxwBDdsEKN7wdUGEXkcfAH1UzTLXQv2WEwcVZyN9wa6n1tTYQdZegmBvw8khL4VyDQv9ocHR5qWNZQ86ATPD6s",
  "key18": "33CFacorh8wfkQz1qdh6RPVWCYzW4M93s8iFN1F8oB9WqGtGq7fyGCxfhoJe2gaiWXeRGPaTqUiyFyCnNYujuQN1",
  "key19": "5y8ruJBEjbMXCnwRAZbLop6fCZfXHKoaum72TRHCy5xBLeMHyTTP7UJ3yJLnpUr7nUjK5Njkap6zs1jPU1iPT4Fz",
  "key20": "2yC5n1JpvJdbZ7GRa6gXAvzFTAYHCnN8VZG1NNnrfwTmkZwYTo1FCtYD9jBxEbf9j8FKYC69bArbH76nz14StbgK",
  "key21": "GZ6mP8pfdVd877eJqjLZ1hrCouPYdyHv7e6UXeAsxwgzPHJiXKwRXAYg6F12mFxZkMca7RQdabnbdj4U2ewwdiZ",
  "key22": "5i2YpUmWYBUZPweHopjA7XbczPqtd4EjkzW7q85TaYekLh1p6ax1X8vH5RJpZ91FZmMjDh4dNf7Ec3GwiJSwEXAY",
  "key23": "2E8pno2VSFmpbmGdTdbEdJ7RBjt2Q8kTgBSC1FJvCnrD7rPkicYGsX376ZRgWeMTTbdp3WA69NKy5otFJuDDWRuR",
  "key24": "3WPW6rmiBGH2QG42erkUDtNtDkCvZMMex1vuhAuH5gYt5WnryAzwAfLfF5EKvC3TLjyNFpnnZqMwka89uN3Q4XwM",
  "key25": "28vH4cFxxvpUhftFDTwwkqiEL8EGbZhwDDPnEZ6zKCxSu5ncFCsusxtgGHGLqBSDt6osVJqhoqKkujYEG8WtPYsY",
  "key26": "uw8Zegiha9a315Z1UAhvEN8YJye7hYTCMJtNCwyT5XUJdcFYgME237CSyrQFJa263eeAeuYnYUfwNcbqeL2UvEG",
  "key27": "4WrHe5WBhwQEAHXvk4U7ZQTWiaAvQu811NYMzD8VnQtQpKSeDKcsKbDiErj26mA3iCLzXiEDunNPzeRvHE6RpuA8",
  "key28": "ifyMA9vCtUxdFdZLkBrQmAjyyunPyjmRQQcNxgdMa3Z39wGmite2LYMfMg4giTjpreNNpwMgvdGmbxHGPLEhRnx",
  "key29": "zawz72bE7GCpVZ6kzcrscSx57Raikw2guNv37UdrxXvBmxSN7X6PXPLX3K19idko5dYn4m4rjFtSZvDkgYEcCrU",
  "key30": "Gzj81XcubJTTBK9GnrhxJsVoK2SgHAFeTAzZLdPDHw254bfY1PWrUJAQtX19enKiwF9x3Zy8kSC4n68GEZvNPQs",
  "key31": "3wgLqcXveFZXqY6a8WW35tKpxR9metuc9VAk1wcADrBKQNKH6bezKZbvFnPwJjJda6H1VJbq6DdS8Edp6cf71GF8",
  "key32": "5BFJKJEV38fRvWBez6EQDTPapYPxehHHrg8za4guoTGd4ikfUiovWu57SrmYYzf5dGr3BFoDnsuGnyWVYVUzYsyc",
  "key33": "585hakfRfQnRe4xTAwAyENHiudd2hp3fL8jCVkatAMQYZTrX4f5Dt7UddXJj1iPebSsMzwvB17HXvs3Rp5HxPNsw",
  "key34": "vkHSK3HtU8SSEteZPwp69aChBzcUF9RwNJ8o4BeSNQSW414BJsaJQ5LWKkoFW5YGcfxw8svZXqWBm81Qv3goGeK",
  "key35": "zd5Luyfw4myuMd8125PTV4yGMES3gvn8C3bB3XC8ZGXhLHRqdSdeHKJXyJR4FAg5znX6woqUjJPPqrT6i2shhFJ",
  "key36": "LFt7voBF2AiZ1DRAbFHdeUNK7B9oKN3KyVaGSAFvkVziAm1x9ze4Tuf1iiTKANmXjnAeWhwpoiSDHJTVXRHJQ7E",
  "key37": "3f9ZAfRQwnNmK52ySGFivXL9NBuytEwQdzEGoSuddun2Kg7RPPTSnoesAFqJupJnjYTJ5BvTzci9wjZLsLW73QPW",
  "key38": "3vq52CJGeTMCKc1zBiM9YPbVakQwPpNK44Y6xqtUynnebtu6yxzSvv7SMT8W7GpNA9ZCVsFQ9v5KpQmZL8JaivNK",
  "key39": "3nYWmF4n6syAKumqQAcNkyZLVZy2ZbMkPvjADmqwoF6cNAHazeqEstCffK4RUpVpYDHkR9boH2UfZwxZ69VUW13P",
  "key40": "3eQPqPDfMUXNCoavCfcFH1t4H6ssFUy1reCYVDiUNifpGPoabKYqA7L2mAfecuMhfCVKHV9yHXeKjhVNPQXcs8As",
  "key41": "3mmH4rktgSDdUDf2qjgL6UUK42Gmk9a8SwxbaAA3P5GeV5gStaBwsCFCQQg26gFUbp3BdXDs6WEnmvZ3ZKSxW1qV",
  "key42": "5aLEH95LTQA6QbBP9VLxFM7TQ23wykCe2bVH61g4XX2uDKoPB8LkDxrDS3Pisoe2u5erYF6ZRgEJsec2GzGjeKJ5",
  "key43": "2uR3AVhmRvqozeevRVWhtYyq6fUiq8c97RXUmjFew1S3GqzAQ6bPPc41SEQ4PsQdJCJtNc1ShgQH3YSqvDdYYWbF",
  "key44": "fy7utUnuoP4abBiNYKuhx2ruYVGDK6pbtrD2EDRPmSyaj2Kwt6Y6ajCFkKqqufmWQGR4hg1UWf53MZJSZyEHte4",
  "key45": "5BNnDZ4poGYFwh3GU7TTxGSaET1WTumPAXBSZ77rbyVifymnDhwdqTjaUruii9JN6NzShCKZbRuJDTeuTaeQDUpE",
  "key46": "2Ea7iametGJ9MbkamYWsf3jQxkfYi293V17SBaVdi2zXELR3JswZmXbTvsaU5Rhig4HV9EfU9UyFpiQ8jhaA7o2k",
  "key47": "2jgHe2m7LwDRqFx1EKhCSVZ8qkLs5MkyYSqNU3gZ4bV6cn9rviVgimSfCpzBQ1xuPcQKnxuXKrwyEhnoiXKx68HN"
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
