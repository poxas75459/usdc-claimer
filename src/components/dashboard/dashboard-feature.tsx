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
    "5tzVNp1xTXT5C6azDN1oo5gbRNnAwJfc2uSknw9op6DZDTa5xiPLYSXYgApFk92iyNerRBmrNDcLH1G92PKcmfe4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bMbV2EFwrp7sgPL3JS3LGe4ZWFWkiB4RCeBhxMvmoJoC3JxSLSiY7JSNn1FwRJxhgpFz9uNsrPEtzF8zYHr4yFN",
  "key1": "2qMMqVuZczwwJ2nACrkCH1QT1q7ruUkM5aNJGZQaDVX6RcwejxG2iASBckUnN7EfKHj5zgPqkmoFJx9MjZqxuitT",
  "key2": "5cFu9HbpeNQZaxw73rCYD4q479LWJjre237ffdfnhT5UcVwkT8TWXWgCdaPQpHw8i9gigKRJmEmKD4K2Lmfr1xcj",
  "key3": "zofRpu1mAxdTrBLJxsT91aAgMy1THuZPciqnhuNPG95uKWF8qFyHRD34P4wnzSDVJjUj9spBgpoAkVCNBh4LLew",
  "key4": "4aiswCdV1pFzWHmMoRPAiJtMDw9JtL7pZ1FSGzAfmQ9XLdpBFnHoNyUjeA2aokGKduV5e9czjtvdVdb36omJJVoq",
  "key5": "3msZJrXXBcpuHTV8rT9TT41XsxVhPfUYGNqnBJhc3ysBi5XSeAPgSSJvBp5mUyGhuVfJPGEsmj6MRugKysFnntoq",
  "key6": "45aTL2HYqLYf7qtVJXGfaCepY6mQdpHYUNhbzt4NxkLWeGc2cVWwtxmUJ5SzhNv6V7NW41xbRoT9cHWuSj1QRKgi",
  "key7": "BGtGoRpAHcXa4QP8qkWCeprekNCRh6xHGtzKf2df1E4dErKSDUJo2QswSaLHirU6dQFM5n4MagqpMAmbgDMrysk",
  "key8": "5g3AnXmgrfcV3Hov9L4wBdd8UgRvYm6PGJzRqFtrQH6mXCLeVEr1auv6J6hH1J51WYsfFEkZP3ZqNMGHPxSuS9pQ",
  "key9": "2cjnHv7ZwGWtFwve8ya3nMKLGATGz49VbwkBGw77Bh3GThaQoGZLizAy8QK6ePZtdSzosWbJxr2hqFgNiqM9wfSo",
  "key10": "3zmtaH9wHi2Q9NwM98SWtxWQRjchQkzo9cc3HbYfiPQinnBrq18toL7eAoVwXVD7AceWAzV5RRS5MeXPY8RctvQH",
  "key11": "4TC5qLDVY8FZuFppLFRWpZVUNShuNHoWQ64Kr6U7e6ncvMsfAZggR7QzPiG21LbCwrjux9tHDxeSbbVHE8Fi8FUH",
  "key12": "223NNxSi54jsEMTbEPsJCdXcXD75ER5JicYj2Ubd5GVhAFj59MEBZrX78ByXUwobJe4MZf1S6Zsmj7t8ewh7NDFd",
  "key13": "5Gc7QinWEmkc3QYcnnweyzyv3i6Xya5JgAxwjFG5YCzpvoRDDgj9zP5agvGS6VHfzbx1MQx5ERC7oWNrFqy6w4rr",
  "key14": "5VYcTaQGQ1Yij8k9uGy9ASR4QXWPeVN14LPx1mXwgVqjFnFKKpD3w94f6iWhBgm8SGKJ8EjxU6KdMYvc8MwWHEp4",
  "key15": "33b7zVdJUey6xG2CSsrVwhAP6AyGwvYncUiNWuCx8VjrzWTiejZwXQ8ezqs8yau4pFXAGCDzP3eWjnS6ZyETkZ9h",
  "key16": "4H7wXM994i2nQFEJdJzqZxm9XHjCwG5Z4MWLVUXF6N3B5nMpD15zJGyqnGpFPmf2WE9eY6n8Qektqq2BvxHAbLfM",
  "key17": "21zE5oZP8NawrSAggMSzWr3rbUe56nWB8ZS3cVkDzWn94wZSDL3cPvCaHUTFgePApqD6pN12d6ezMjGPtRsgQyg1",
  "key18": "4QZRuNVHVHHcD9DxCJt3gdPAeFdgkfJe38mLi7gJu3i1j52LuouKDYxaYuRzvgTvCeYwskWwVDiZ2dfQyZ3Tbq2v",
  "key19": "3JDPnaE8B9hFHgzazantbjAbu5FKw9Gj4JUqnCByTCK2tbtQ42hYf7KrGexZhsiRHWQ5whWMYdiQaDH7hSrc8YUQ",
  "key20": "4FwJLk6wFmAfvCCHHXXBwEM14qoYoq1xWsj7jXYtfvHux7b8WiKNsWSnmzLNLb8aZ1kdGYnDCRQaBfKSoXVNGF3f",
  "key21": "QkDTucw4iVD8Z2gL7y21n2ytZe6ZxXfWNQRN7eXqpNsUnW12Ca86dJiBu3Pnbgf26NeNDwhUwfX5kiTtkv6Du3h",
  "key22": "3fC2yyamFAS6t6vPeKoodw3ySVhKZh4kCmGqFZbttvx7scaJpd9UrEicNidwVC3Vy1Ls6FEuTnuJPBCPdvYqYmR3",
  "key23": "4xxzjNkeWQBaURMtiArnZG6VMozRzxPhrEppsbT2s6Zq9hLPwA9BBQ9Q7SkS89HjRPgZPBYCeftZfuoubyKV3dYD",
  "key24": "4UtJoM6QVGtRkMzbB2uKgj6tWVgfPzNjW7TX4VFiUugefdaTtvQaouCYAMCwEDzmDBr1hX7ELWTEfzVo2rQ1Ran4",
  "key25": "22S1iVYqQ8cYRBKxhNLgmPkTER6pdHNT67X3KjhFhkCbFrk5jWcW9CJgG8XL9JXfVvRsVBdtDRtJf6YqtzRss7gW",
  "key26": "3z4VxPPP72j6N9CeJDD6chjpnuX37kxzupSArt3tevEie24JY18rkHJ9t7XFr8jWQbweAZ2xVEK2akZWYicuMmct",
  "key27": "4NWw2edGaqAtqbKN3q95YovWChowZNeq9UD8N8aPb9oT3dQmYpCdpbTyW2xXk8zPP7VJuq7C1eXB7qffRpixYCY3",
  "key28": "3ueVNGKDAhqGxaVXbv2peTfFJLBoJh3UqojWmFDKp2819ybQg96yyiVrHwCZr8QVVou8ZwKh6cJmfophnqQQ7LwG",
  "key29": "2fqCckWHAFhDVat16SQgUdzXcdKESk3t4u2TEWbVuepL6vSMgvjHaUas1SdgqR8wrfzPGh3jPUDpG7JWGN3ceXow",
  "key30": "3SpiKhM9DLenT3Jyf1wfLCifc73EVL3b1a5SELJ9UT3cS4fzayu3kcVdjDdgZQGY2VsqBfamcH9RSNmn4Kwcrugj",
  "key31": "4wY8r7VswveK1kjQhLJci792Qk2Tyn3YxnPVMbrWwhAYG9HuTSuWh3n1YD3u74z1FsPcFv6Ds6qRx2ZcpdszxMKg",
  "key32": "2EAXRkhbCeyL1zDojaqqB2E4RwNsAXzDuHVE552YxxbuxPZ8QTP2MDPXDxXYWaAtYvtBzDdxX7mPStYcAQKbS7c6",
  "key33": "5nXK1PXUYG2RxUamg64i8WijL1QyBhxt81vL1RD8NEAYotjCeHuEwcAhNG864vEw1AbTzrwqHqkRup3tQRRewokd",
  "key34": "5FL4Aj3MkpaxkMFU2ntXyqSJWPB1KGj6NMwy19cexnzqV9WymXc7e2kUkrsaM274VSYEt27DzhTbPP5U8U2SwX8D",
  "key35": "3RM1yVxmJQbYEsJ3c9fXEXBfBjxD2hruF3b71MtkJWN4EhUYxTgZqE1dpVhoEistvBUx6f5eC2xbwMDQLJyMGaVs",
  "key36": "5zrwpmL52yDQLouPPMpq5ZQAuBKtwxDjpmU5tW4FdQWkB8m1tN6VjFFjo3zKY5A2F5xQx55ownPpv8NaT7nNypk1",
  "key37": "26gZPDWq7Nvs3iAVJZXiygVHevAgHwHqQDzkbvc25vYH3hzGAYwhscQhRYT6khSt3TyERhvHYpNJVViQXGZY2J2c",
  "key38": "2FntyPUByoaqQrtRshCWviNAxnU8GoNDMo8xQDu7HvgVeViNUK7GSHooM313NeUn3NAC16k4yYfXCEHdWLBWpY4m",
  "key39": "61c3fWMMjFzeKNcGRQR8KanGryxzfqbsTEUVHvmtvP3AZ4LStTAPxgAFcWqEPPjFcmNsKsfLpSnntjhSaMq1oX3y",
  "key40": "57qUjsKHYHML92c1oGN3RC1bMiumVRokLJF9e1PoKi16TB1twpBZWC4GT8FtPufY1U87LsQ8iurBq4VPy8ZoqMKk",
  "key41": "4CTcCeMUmmWKEyxCj9Hd9jnSamD3Y1GqhUGSss2GTDSEfQFKL6pXCCkYMqifjNYrhwAmaZZXv2gxXdCp7h24TfTd",
  "key42": "3r961K6YQbJy7MvwbZksvuFZY72sXab18KdnZdYuCQTtSmYcHH2YKMdbymiJbU3F8Bhwy5QzQvUvYs1ra6o6P4Jp"
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
