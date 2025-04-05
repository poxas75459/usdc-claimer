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
    "2Wk1Lo1Wjs2NKCi6riMXihLYr5xrBk9F4Ytt9rqy8oUevxNNtUfoz7zRK8zJpdi5QpxYETQgoZG2cgikCJiCiSUf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JCcdQEbrjEmP7BSU73oJ6nx4MDt5sBMiuVpXBFFEQcmou3MVyf3NnD58dZ2WKCCpLoGXaufDGdBvWTRfa2R8iMm",
  "key1": "2uiGpMFHE945hEyAwNhX1kDd5kdP2FZWGYYhrswcmwSSJiBaNf627vYdfkFNdd4bkBNRm8u9uCB2tiE4GJci5esa",
  "key2": "62petmZdtY7nV2nWPFRneAMZ79GkGoAp1ebtqkNdqAnPZ7opnPXPtAwYB2ERKjRcGctLAdjeduZt5PHfYQT9P3yQ",
  "key3": "GUMjXkkJR5ZeRXXkjsnb2TuTWKuucDbZbXZNRmvFfiWbfdDggA1UisagCcMvmJPFzceWQ8rMcCWXsmrRZZ3YHwH",
  "key4": "3XkLuGFZmtmS8Uofzp9o6EHeSqwGUPXc1mBBQnZjgm8gP8dSVnyrp63tacCAH5qoSfhM4TAapDdCcUmggSCo12zJ",
  "key5": "2nikmQTdZHLqziYkhRYRdn5CPz6ybYMGvb7Mi8jEUhKLwVYXLFLSrf8wzUW9zjroqsYJfA5G7oNTCNGtdTRCC59T",
  "key6": "2EUKfetCnZpS47c71XGskB9dfC3cMdGCEjKPLbPP1SETdchhG7BWgYq5aZJo6fQQ513ZmVcHkL5mudZ3GWkdKEsC",
  "key7": "5JRpAEPoYDnuVhX2fAgWsexCumWbrezPLpKZ6jmyVL9wvaoC1zUgBQV8PucKQoX6tCfcayhc2oxTiPc8vCcamf6J",
  "key8": "3pecPC9SgX6AiAQctwtKikuMCCpQXmv9S7HnoVkwNr6P2iqjwhTZmT7gJvg7tY5DbvkbtUZ1FEbssqnSufGCXu7T",
  "key9": "4TCsoWmahMU7u8mjtzQiCLdP7qNPAJmMdDZ87YT95qTdTsLn6YyEDuwkdxrDS5Gu58JTNyR9naeu78NY2bWshKde",
  "key10": "3UERK6TcBHRd531vgScwkEX8TBpuk8Bv86a3cQvUpcbWwZJ8iwZSewrDrwQGxnSWRSAeMPuLskvAgiDLSUnbpZQa",
  "key11": "4aq2QDATKwH7nREkZau2gFoZqjXF4MYkGLjAsKMqv3Hb21j2s2B9kRQ7X8nxgXgW8JH1snjeCnciD6LRG84cYwjD",
  "key12": "4epEba1XyqAE6db3DQ2CFd1mgZNixhpyeeaN9W5unHNqZd5GeMEkoZKdpBSLBCjWU4epPMpp8mshDxUztQeCYxr5",
  "key13": "2mpNuL2zV4KZkfv7ktKnNsEpr1P6Fccanj2166Z8CzRvCsF7dngpMeH1yUynNtzgG9ma6Rxx8fUSCzh38cfVdSy5",
  "key14": "3ntbcSoA92Kr89RjDR8rwJAbQu8g5iLrM5CehhetHaujAx2ZJ63yNanb3ryFATj6N7ZZfyTWhpPboXiq2PB6Wngz",
  "key15": "363Y32WxgzoZmH95277sX3oeFMNdvJbheTUaTtmdCjkbRmTXGdpUzoDgmmuAdtGQGFA2T1xQ26WunTof69jNwYtH",
  "key16": "5EMTZU7GfJx1byTcsitc5r4UorbMKF4Z5QjfWFrLC3FAxTSg23fVCztcqKbKpGVcdkEGrU1y3AfhibM231ASijz8",
  "key17": "epRSLHvAs6GqLuCPSMmXnpgr9Hw9dVH5oBnDfc1J8GcjN6KThPg4GTVjXLAkNMbvGXPUGau7yuqqA3HTCB7kzxU",
  "key18": "3sk4dLp4fra8Sgrnqc6PCz2GDF9gVmUHnnjs2prSq3wEUaxiQ8ci2Cm465L9YLox79GweQK4HX8tbPdugmxm3H19",
  "key19": "2DkEfDckAqzKGekpKyvRFhqYozJ7DEsmPjV2PhvvHWrTomk6xM37fBRJqN9WvfzbRuMVXYH6gQnkm1BqTY4bWEG5",
  "key20": "N6EA9U93fcNvrYCkevKyVD7YNmzCQ1oS7XPGBUJb55a9ihjzYdtmQLNzkZZnb1GmFqU7BRWQRsr4YYXNLjQkiMq",
  "key21": "4xP8GLBrSjhEsWY7rGqxLuKPBrRyKWYcnUEgigxqVzLTAoCSq2BVDXNNCmN87PzGMrEhoYCiFNKRjRdMK5QUGVL3",
  "key22": "3Xj6AG13KCBgRHvULeuwHGYATMYdAPCDXKKx1tBi9roq6fFyVofzaaVkKnssoFddCWAdT4sC2ZLp7XoEjP4ZreP8",
  "key23": "3rzUkhLZTdFz8ekD7oXzjbY8ZXN5juoRG5s2Tio5o45z7NytMJ2cSzz5KjtEi27CQRWNSgpBsjmubxCNyLSoSQQ",
  "key24": "2xANsLY9oLMfJJuCGos2PrwB9miKoFybB8e7GE4tPLohFAHrUG226R5vBSYncCtB2DDy98mw84uU79EHoyA3szoo",
  "key25": "2Wd5s5zwUzvyzp4Q88GzsFuUTbt3yXkbzq94aNtbU6DfX7VyeafFGbFLEtSZ6pp1ka8D6QXeAaj69PbfsQhso3Nw",
  "key26": "4VahPommDcjrpyLm1iLsoQSkbgwpttKgb8ZFBRBwoNKUBfPQWXg2JQdyvKtTe7KkMVHgnD4JpWbfYVMWgWE1MyAk",
  "key27": "4ytTXykxuZZeHwNxzMyQEgEzJwdD2aDSr9Z8MEzStcfnFBFQXrg3Sj5EeqeELqokTgiepbzoFjiEtrZqTcc4rKr1",
  "key28": "4S7rpXiGHSGbKDDDnNKVvNu8i1w4SQn314c9eU7Wke3tSnKP4ydgo3Nyh92TxLdfdzaBQgGvnAuwkfJD4vosA2uK",
  "key29": "5CJU6qBASFPfTtqLo47dp8feMzJ92VCikebkAdgtynS4fSxmi1i5UKbzhffGbbSfvhxGRtzTyAbp9nMRZfJJogCG",
  "key30": "314s2615y91h9sDugQN2EwwcnzDrkG3VnJ9ixdMduYqT4jS1mRiQgTWkoq2NfB2KAfyo9zV4kduVYHbrdXT5G3ud",
  "key31": "2Wt1nnsBBQDghLSE7gRYg8eRvBSmmxzBSEv74JhAPqcSjHdTRtweb9aTE6ZVSwGBz5nAmWXaC2dHWhEqH9UKwAdP",
  "key32": "5nzbC2aaSNzWp5GFGYcuuAYKWacjjGx9srqSJ2fXG6Yaow9efA9WsYLydpaLf8AfxR9mnRejjUL4JSeUAZMHjLPp"
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
