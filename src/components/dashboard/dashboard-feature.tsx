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
    "Bzg4YQyL3bcTg7oN5d1Qf6nUDiJpy2R8QuTJYnUY3b19Yh7xsrrwU9B76bRRCr7HfctZ2iiTsxu6MRU8MV77n6F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JHfiKVy88qZMvPM5eyGLLopXQKQud19Mh16ym2BDDER8jyzhJJjiA9ZUwrZ3yWiV7rnNEwz2KhuZS9LfvDs3pat",
  "key1": "4Lt4eJj5yQ5T9sKDv78mfZVBk3ZqvMi1nofz3inkwCdzvGpyLhoBb1dF3Ym9LqPAsuEhTz3nuo7eehochXCBq5R5",
  "key2": "2Ud4XdD4aieHMJijxBXp5frDH7iVuSSkUgbCKpLpFeGpbSTNZXuEmJRrgwxd18UmsVFgWEwfLwqL2aNXRsGBJFem",
  "key3": "3oSoUNTh5aX34o8x7rBsrdqWffuedb1SiEmTro35mpx7ByKTdpYzBiheddUWP3kRckahAL8NXLN3oYmyVULUHekH",
  "key4": "5bZSEF9mAAv8GrHn5Wf4419z5vzKFeosib3Bf8mi6RNBrn5Cbqc3vLQrmAHrMoTCPA4zbUBfe9PPD47do2d4dCTi",
  "key5": "614MaKRxra6YTpfNghkuAGhZHyE3JxGLThtRajSBg1HjaUp9kT9H4ib9GsDc7jhUyMZb4Usbz1zXADb7u65snWfy",
  "key6": "57TbiCH7zqstxL1w653tbfh1c8fRxBpgbwnj8zxH6S7LRoKxFyoPMrnmk4LPiCwaGfNQoydqZ3ZpFMyjdhCtJeCF",
  "key7": "LyodfSGZBZWFw8XCJLnzCUGtyCxyrUYVjEjPePVFvJ5JH3JctnpAghFYX22yc2itBMtXGE8Bo7vw3QtcZojFKXQ",
  "key8": "5JEqgPm51BHeuNURg1o429ZxnkuFKZS2vpG7CYAW1LVMU7bbQG4XEeuS29jSEeyaEmxmpjYQ5YRZj4RGFFST649x",
  "key9": "KaS4FxpHFW6y1asAaiemKcMKdkswvMu1W9kAy2UDP6PHCcT34kzxR71Xc8ugxwTKKob4pVsXgaaptXLpQtCkagP",
  "key10": "5LAFhAFh9Bjgvk4WwJjxxteXCpQ37rkWk4tHKWoxtuksXqT6aBvVR7u7JX5XvkiYfBWftt9Nf7sTRSVi8Ez5yb6b",
  "key11": "U7oc7Z4RuFuubV5EmVDLdgVwWVcccCdHXr6t3UdkM3bjdJZsDxsfAqhYnZcwWZkqS1KZbWUYPEYkmedhUYtHWAY",
  "key12": "grsppjGYfdGCJFrx7YX8oHcH7dmTfEChbxP4TYiR8DnNcNhF9ZwJyozJv34aV3oSieknefwBR2XTRQqAR63ZsuA",
  "key13": "2vVxuzsz1sFBsgvy7aLHSAEiExxLy7TX4eaKcXujv8BpK5xxcXhhCq3YnUoMKp4iUg1kiXmtAX3uRc2fCAAmnxid",
  "key14": "B8jH39tWJ3VR48zyGT7czsnZRb7oYFzz1SNHymcSWS9UPKToXFH7ab8z1eeKkWnufswkftL4Ks3BUuXaMe2KaGu",
  "key15": "52md1uHZJhh3KDs1mrcsnzyZJBckFhry2mcspAvvQbMs5NyBjt5bw1D6FZqLHmVmbU5b5M91A5kKru1j1uSBumnw",
  "key16": "57qFTfS4xa7yNZtru6wzNDxWfQ3buDPpWdMtj795w7AQNLGicDWmn6aer5WGYEJw35erVfhcSiavJckHoSoeb4Tp",
  "key17": "4j5hqpoVp2DzCYDXcX4CKnpJau2ekePGtg2Vz18QfemB2pEfK7HJzQQ1kGyUdMSaa9yfUnf4yyNe8gDUEzutFEQq",
  "key18": "5LbEvR7H7jLwWqD1oJsmcugmvWnYnNYKVA9KAv292NCHrjJS6nHfEZLA1sXJYUxi9KrM4igXKYGng6U51SGGw66U",
  "key19": "csZka1uAdAVi7LD8a3cX3qnAWxazsemqsfrypWTg1woWywnYMsFeND8ceN2Nde12se5wHdhDtdJpcVeyQyXbZSi",
  "key20": "4YNcw6DzKetpLJr7N4HaNF9gQahRwMzV1SXVjVsVJwZh73vuLR9xdiuJ5z59XBoVccaTZb7iXYLba7ScKtA1E4U6",
  "key21": "2eT7DCVERY3usKBQtdhvtoV1KsDNQmP4zrncYtupstNKuirDt3CSZTtzkPsA1rJn2ZMMLEARDg2FPwptNgiT8Sou",
  "key22": "4QHFmwxfdujvEGD7YoRFRXK1UCy3GUuXjVV4GzG9kv3recjxXQRiTDeukexvMkKXmjE94EBNYJNYQF3ucWZx6kAb",
  "key23": "49KNvXsHwKBfthXcQfWhsR2A9tgZ2RW99rBVQcUfRMhu3dzDBxdPnzvw9QhgfaET9sr7Hjg9ZrbPzXbkr8HY7pGY",
  "key24": "4P8K9tx19nwbihGmugsymXKQns4g2HciGxmZb6HmnGE1aTBADkUbmbTZYcS3FLua1pEcpzhCq1kP76uoLVwZK1Vx",
  "key25": "4f3zbjkHeDhLSKqUrBQ4sCWNWoadWwXxduPLxkAMftvbgFzr1brnpLDLkhGWot6VyZWTZ1RJSC92ZVDMAjNsZ751",
  "key26": "45DTykpdQRC7dnhonABNBExe8Tn5R7jK4egHNyJUEKKSvnDrKECLeUTeXVnbg6Qv58ydNeafPVW7bExSyKCbcU95",
  "key27": "5QKnmimHexyMxWTe7pzAwEjpdvBaL12czkXuaXviMt17cWqi7RjEKgG5a9Y8YRnp4FHUmvQDm6VTjdu67QtxnMu4",
  "key28": "3b8hEXhcMFTijDhd6rStAqs4KFP3ZxmhLJZu1kazhgPMjHdgHX8Err5cNb7MC6emwUuJ6tRoSDQsX8W9BPzvznxm",
  "key29": "3aFqiKq19GAdgwaSJ5LSBoqJKW2nkfon92sRNZBED25HGmXYEpbuzoSNYtYiZESDoGhjKfXFoaCcMfRjqKJjV31b",
  "key30": "5Wnu5qFsWnxZcKZn1HqkyUzYKVG6Fio58uRrTg3Cr8zLFjcTuCerzmsC3Rq2UF57agM27ULKB1fjdEqM3g8mEJ6W",
  "key31": "m71tdzD7wtCJCeDf3vQe91a9mrb37FTBRVj2SgjuAqYJ3dumzYEJfJg4o2KhSLyHCBXZzR46x6xBSVYXTAdbZza",
  "key32": "5zoZXiSe7xLtVtEDqjMdXEaXVjPrcoAUK9xFgP1xvwz1Px1vcy25tRJkxf74fTFg7CNWv3ezF8ncEDfscxEn9RJf",
  "key33": "XymbB6sBBdDFeJY9svqHfJxerWbMfKBAZY3V69bhVgeu654yeEJfGePfy3ygTfEgA5QQgzbkboSQhAH7zcH4geZ",
  "key34": "61c745ZcXegMLZwpn95pPywjJFGoV6VK2oPYGhNvC78mUzCsuMsAyWdeZjAP1aNhWGTdDtVzCcfjcsUNtAR5Kzgp",
  "key35": "3mpE75kHq47Nk99ehS4o6ogpoSYASB8Rp6WzEG4qfoF9yjG61y5KWVoY1k74rEgkgkX9te8cEepgtVcV9Y64uEeZ",
  "key36": "3o2FcdkRwFRnn8TE3PmFKXqasVn9fsuaWD1K7AMT5CaZrJ7WA6e6NtmwkjisYqnifPsprjB1vxV7mvq6hFEcvsUS",
  "key37": "3ckSiyz6NYvRJPDnLQjLM79CkGj1n7pxD3jW2yM1JhYi4CXr2ny1mWf9V4W7D9rFgcejeG1RPDtgVudzYRFthumV",
  "key38": "54FJgJbGYuAwyWw5zkXs8PpMw1WpMYQaXK6RzQSA89j7FYPXCFEF7zcmmpykSH2A8tM2ytDnp59VvpSiuD3bc3SU",
  "key39": "2mdP2UphsBAX4GYMeXmegLbZkagekYm3GbhmDxnKzrUPUGvSCW78fVy5yXqxCyo48VM4vuXnknRNqVppUkmDyCbY"
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
