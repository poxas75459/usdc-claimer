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
    "4mjvKFyqM4kFniJGrPc7e3WkqPaNn11KMeEvwLYim31USJt4fvgTaVehrKbB9WWbHoxPARZgmUYbugPso32t5Nqz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "578w92gMkMCmSCbc9WVaTfvDUfjNi8apR6Evm2ZWp8yVZ87gAp2QwRZW8ZKMW57o9gtN8tCQYTfutiFS8TvQzwGK",
  "key1": "2J2SKvM9cujQef2Pz6KFmNeE22MZUDtBdz5S1vy8h6h18gGmwwDbB6Sfm4xKoPLi3cTS49PKwnnw1iPjBPRAAMo3",
  "key2": "4o8neLAv2DY6ZmhnjzgKGpPNhZzQ4y9fKto9HqG4z4kxYRTeaSZ8TkAFAcz6g7Uf9yREbKEMUyBQWDsFvz99svef",
  "key3": "2wVystwRyJRs2WgE4STyhzEWE6dAeajP3H8A4FNLfwUv62VhKvTvVbyQUsapD6erCFV3ncEoNSmwxZJKH1S1jXfr",
  "key4": "2Ra8GkDkRmgCT75xZvtEqxWZZkWdpPgkyy6rrxA3JyjjnjhgiQXa1f99FbrQStummkK2hmrkMLnGMpvkMPZG5TTL",
  "key5": "5CDMqnKsRRf7MUPV9hHU6CKo7113Z178htAf5CLATWfPSuLF2a3cBqT3jD2oC9s2wjNZhDeQtL3fZMSbAH7ozFnb",
  "key6": "4eqJSqMXzJtJSmrForLCtu24Pa2QqMSbZ8XBfML5WxpyvH3E9kyss2zkKXFLXheiAZZUeX2bkCJp8hm2qnhyauHq",
  "key7": "5nf415gfpAZR7191ZLA4Rv4WCsqhgeLyVx9xy5d2X4sC5czgL3UcFwp48moPPrcoi2uiSjTsnucjp1t6zkmdT4kp",
  "key8": "4m9GgKjBTvViFRYTtCWqPXEvABjwEx2DnT2i6qv17ZUca3tDraptxCin9NujnFQeTjSELgUP9MRcoYupFuvWUFAv",
  "key9": "5SHWa7nx4mLmLGoYosgWvbHCBSzLHUB6u6czv4whJVPEKKpcM2xrg6NTQZbR3WzXuSoiqi5aVSH2vDzwfdwfYdnH",
  "key10": "tNnzdpbfeWQTPoasgeBjdFnJdSVr7PzT3V7wuX8h4fY9z5GgQj3wwL8KYh3jVptxxVTsCHq18PwMXyP2gUrrzfJ",
  "key11": "2sGtimhkVyu4VHxq9MENmmYS42Ymm43XYp6zbhvuWHftpCVtZJZ4SxeW7psCH7TfrCbdxRAvs8sXFWaPt32Msfr6",
  "key12": "5otsvXx2ZX96w1zq4q3XqSVovn8G8XVwJsPL6uUPnWLUdG14CaAZhj7uz6YidAoJRchQ4cpgZRQ8Mmm6ft5kMtNV",
  "key13": "t8kKwTzUa4A9GohrkftJYgcdiYDphEvLM97sxg3m45cRsHdPwRWfa6f7NKkcjJChmNhYCFYKPhYX7YFjc99McVA",
  "key14": "3qPNtYXbZNVgwimAs8fThUbwLxzuq4DodEHnYpggYpfMJmbJxfUdsrVNd7QjqwjtiNuddt5xg5QAgb3Cpfn3MtLs",
  "key15": "5pJYkrY4aeiHYmxCgBUCHs22esZ5pNEFwLL9WT7Ux5hjcxiyLkwwXzx4kQUq2KNf77VPeN4WmGp3Citnj5ZWdFdG",
  "key16": "5MwzrwZ35oUcSR4tz996sxuzczfH7kPb1YLDky8NBq511KGjHapr5gNt2Fj9kZuGXyfkAQJtrGsWb8YfsQmU5RP3",
  "key17": "2B391NZhK6cGVyUX3HJTeYfDYp995vP8SpjgDucCe116UiYQTB2Zp6y9Kv7D3yUncS6TyHrqsfYQ4CHE7FBELtxC",
  "key18": "5FKA9gNXErWnQh8H4bwisP1vpsR4MFJSX78PKPhqX1UAzUnikDcUszrhzPXk7ZN4j4Z8yqxVo9DXE933ia1zYZHc",
  "key19": "4ZVKkikzMicG6r9vpXayeeje2mkApL146jY3TZo4rTTsnqo7Mo4MAHF5BnS9kYy87LWHvxgq7cFNqzcqfSD6XyX3",
  "key20": "21gf3UHbSE8DkzThPmkxD4xcacQnyyWjus6Dbf1scBjSNLZYE98rT2ESf2U3p9DrLCMCRVHvTZXqrtbTjUpPUsKD",
  "key21": "5wYHLZBWd5LwyGXaooHahkXBpJcK2xcjD9pDg4eAVMtC8m8oEkPxndcdSQH9GvGAhXKCietgsrKUP1CYsdJ5Ezvy",
  "key22": "3jA4uh5RSDnMj15YTNQdYuSxqt2HwxDfhTy1ra2egHcZDYhNWLTswYKLRYibF4AfVLPv4FzRJFzoxp6ppbQLAuyz",
  "key23": "5xLcE3GF1BhY7TnDK67wtL4F2o433bX3t7MDFVnX487DMaTS4RoECDUaBpSG4eRgrx1DvBcD4wuoHhuV218BPCKj",
  "key24": "S2rMviej3yGPTJw3QY5nCkJ4VniByKgKk9QC1ebWo2Sab7NQJ9gZwLmoSz6CBfw1GE64spiS7vMRHJXM53zUhrK",
  "key25": "3Dcgqncg5HYS1fsgLrJvV46nTZHYV7p1aURyKBDoiMUTu4mBh7LWgTBRMuLiN6VujyQJFMrsiZrnZ2tYHnw1dLsE",
  "key26": "2Nbx9AVzm1xs4eVvLv25ZEQ6dqBXhvumvgZutmBUouMxY1gabTjW2YzZHZMTCLEfuyLp5ndzdtEsB5QoaX26geha",
  "key27": "3siiSCbp8a9EaT6sRLeE1HRB3MC6e4bhh7usBj63qDHLk4R71YzYWxydUAiX4hendvQgwrpi8mQjTM1m5ruzLBKz",
  "key28": "jAnJumgSpfVBDwFuuvZzib4Te96vvQjcx9K5YEpRCcqxqn6S9FdAdT4TBtrDyh372HyRsq5mrvngLvt21eiJaVH",
  "key29": "VPDZSsHjGRxvnft6Ks9MNDPHvbKgjrsAFWrDaCKBAZztyyZKbv6wZrS6kWCr3GojHkzxW4JfgEtvK7DTVry3n5B",
  "key30": "2tQFiVfSMGjVCc8iLYafDMubWXwhU11hNiAzPsmZDzd92She332vizerKKKpGQAvEFqojjvXKaDNXpMprvzS4dAk",
  "key31": "2eUAAtRDRMTeFr8ygBk9KAf7fSGHX2QAm8EDyLM8shS5BrcZyNDpsx95NuNd4NtxgtiKvMJWCvuTErcfRGoYXP9P",
  "key32": "4qqeQFUWEoo4YZkvfAn7R4KcrFszkgLWf8Af8Q9PLzoUMkPpX2gSiwMKifR1RbLS21KUrUmJA994zYqegFsMffk4",
  "key33": "3z8DAhCmndYmcFXLatRiP8hAnp8Xn5knSyuLdocDxdwPiE7NX65dpFFTYLNjEXG5AcCzLMb6eYBXrVQvaWyfD2jb"
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
