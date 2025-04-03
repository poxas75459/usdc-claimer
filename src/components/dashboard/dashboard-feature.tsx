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
    "URT3mdLk2tFmvL4jt4Kga1SsLPCXPRxu5mhkgc2ZCSN15xyEJC9gZyZEocU8Qckt9jsUyLZTJoDs6wmom24ZqJ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v2J1NTdccuSFvpHPhAQHpvFD97BnKrNo9CKi6d4Kw1MXvpPKCEGpFq4P95xCBYjoRiZZGXajHb3GeHraVvRqBA9",
  "key1": "3SEtcYVq3UEVPV8n284sRr54vRiCUojtRrFKks37UY2Po27f8dBTJ7omhnb5ycW8Q63kEfaHN3mLDtKU8GX2xXL4",
  "key2": "4Hdg9WKaTohCXEp55E87mLV9VGTsdhiGe4dixKAmYa848U9bRTcoSPPDaDQBSRgcY7Eno3on1bp3LMhmYCMGoSJk",
  "key3": "5mEek9Ea1WmRnrwUAV47zgZVfzFaBVDHMKmkZKqaRoZ5rJjxNip2pyVEUKavxMUE12VYBbMrSKvNmvkw9BsNm8rD",
  "key4": "4WiDGDbPN54J6pP3ugP5T68LmWLLd7d45KodnftHDBk5ZQD7X9EkczMXwAnzSfGuS7JAUzhS4YzUXwrHNoPNRJEi",
  "key5": "67dd8RGzgfSsUbsb3FPCmBUr62UzwScmVmLEeDnuXPya2QrSTo3uWjCcnyr9EzJAbFFdvuhgqgvj9e9gHSE7VXBX",
  "key6": "n6WwzDJnrC3tuznDsX5PFYN4Q17hUvhgLwoe9iYcVvmsj47ivmA4gPw6eBA4H8bNMo82V87nfPFNp9WsagN3W2G",
  "key7": "52Yuj6gBu6EbSfNcTyURF5anpY5CVV7gRq9v4xuVmK6JCJKixXMruEm4NMctR7sUUtnuZgA32LNuxQqnvkDyPFSA",
  "key8": "pCr4UQq39hcKkjzLMBtYTduTttXrA89sMjVz7h22rnoW1D6ntcMMdPc9D3yCYhdAzbTkxCg5iLMXSGgCQYVNZtn",
  "key9": "P9KKi56yFM2UL4rRJLtHs2daL8XxTiYRqE1dJwrxd3qytQfDpuud9adwPzNaxJ2nfXcQBwJnkrrduZxyx2nXvwg",
  "key10": "4CoRrrkUMa71epAkou4iWdM2ZwLak18CaXYRMDwnWaPsa8aASY28WpgauRMUnFfy8i6mupgUr4U58euc1GHE8Z6f",
  "key11": "U4zXoWmxFUR6KuCKRNKjqZ5A1YC2x95rb3MQQH6rkCZCch6guwBxmZ3uPcfFRykbVxAHFVxKehg5K6mZ6PZzQbh",
  "key12": "31a6JXp2hKZHxyH1PV439bN1kzr4SZzcoys5zg4nC9uKktdLZyUWAJHvYwbvtKVsESYFffK7Ltr1d6PZFYCNSidN",
  "key13": "4v6pvhv1o2ZYafE4jRhyyTsFGCKgckvotYHhUEnRMaFP6GyKht8xaAfbS1A4KWBqbafn8uDoS1ifWWA6558QPCgm",
  "key14": "4ctvSSQuWhrfntWzqt51A5Vya11ySdSpY6m4Duq38v85xB8TSYgrBnq4veRM5hK3MKxqMkcy8FxQS5EWxnEaoktj",
  "key15": "2xBcAMWro8SA6XYC68F6NAUL2iCY5eXvy3cBCbrPyGxBdQnnPKXSVzrGkPT5ppKuym7DoU9WheNx6Fc66PtwaziW",
  "key16": "4suni6i7Cuno334rnmmJoa2BWuoggZZG4R2hyS4pAyEpwv6xS98XbKgSkGhPHyoxBZxXoZJvp6AXxoHeJBZwyNm7",
  "key17": "22mDSFQ1UoFKRUcUy3y3AcRpEvwquA4QxgPTZny1eGo9CVDHWDQ3CVW85gCPLAFE8yTnxXHRw6XSWTP7YM1jd2wC",
  "key18": "51uaJL9JHERa5SB3nMAJZYZftrqrGP4z2saZcqSNm5EY1gZeYXYzFGVbdYUuFmqoiFuNcXKEgjoxqzC1md33egRY",
  "key19": "4bzEPw827kXf73qLMLK1s3vHPaA4J6gpVNqNkjd8PVx6Zxr7cjAj2cmEzR64onfV8AihPAfm7S8XpMERmLmuJiQC",
  "key20": "4RsNKe1dDr7HBq5Hii5zp4v8PQdRntSeYKUCiw8u78PqDX72SgxD3AWvwTXEzGHMJjjVJiJm7SC5civvAeCn3SJy",
  "key21": "54KTWvT7d5kYV3jV9N1e3d3EHybLQQ9HRrXGk9UxoFz1T6ZF3g5EonzyvYNG3i6iEEdu5gaCSx915NFNenm21VQ3",
  "key22": "VQNXWcHMXkuxK5jxBFMv5BgadRJvBPPiGrVAdzKfTh5b6uJZppHRtzc3AX9vcukVZi27ktbhJCVNHvXQpGrk5tK",
  "key23": "4CSPTiLmqbSoWvJcCD3yD7WkoYgrJTnZGdJCVER2jfghbgR2mtaQy6gbG2EgFYmoMLaKpPQutUJ7n9peuYdW3eg5",
  "key24": "543VUucpFeLsvosR7xbrc42hiEGxLm59EwNxpwzSdWk4gp4s2Lbve3Mehri2t8LiwVgiXjwc7mUJz6dgktFCLfMX",
  "key25": "D26LAo5hpeytDYifgUb5KYF8UfByGU1j7cPakZCpVz3pB6bEp3DmBp695iGQao9Pi5rchrLUnMkUDHEBojQN8q7",
  "key26": "3s5qnNf292FUXKSregmNiXHib4jcAFTZw9bfK74kt1mzR9LzuETee5JPT7oDjVKTvVZoqnMYkYABpff8yZMQ3zq2",
  "key27": "4BzUvCGRWoiiLDRpGqAFFW3xmvt783wvfxuYgG9u21ae92d4E6Y1z7LdcNvnSRt1JT3kFe91Js4ZmDMCF7RzC3Ck",
  "key28": "4Zi91k9cVVDkq2gHxNvjEF36ATvJE1qXffbKLEUia8DJjeVN4j68MW7NyLGqyg86wDKVyxNBYiV4ggB2QkDyFWEM",
  "key29": "4272V87jCsMrY1XVawsKjpfM3LSqjZJCQ1jTktbJJF3tvgmNoayTVDiaMTrvaPxvvE2SsSMvHapYtvGr1cxG3EUW",
  "key30": "3Wa8rP5BpgDHwXuvPDTgPGtHAe66rQDnUmjcJUBybuWf92zw1uuxRRQfGQWrBRVAMEUFJhtRdGijTqxaQr4k9VAy",
  "key31": "59T1cSaXiZYZH4H1KipvFtLV1jzBWQ4gAkjeS7V5SMLyGhH99pweE6e5D2AJwR4gJ1qZ16mUpLNCUP54tnLzMGzR",
  "key32": "5hNhYT7xpLaTgoUKxUXZM86v5DEADPLkLpsoXwqWLNtkki5ztMHt9wx8vwoeMjWX68VZ4ccn1ZNJrDwXzNKpgTnG",
  "key33": "2qKeEVop4Hx4KGnmptGGMxAQhWyzKMUjygsZagAAPry6wTyuFkkimZuRNi4fwAyndPutqda9wFJKcZ7V6E6yRNii",
  "key34": "4dz6RarvPodfUku52EJhHQaDbHwLWGJXqXDoKUFQW94ejYfBFi6jdqbE64YrsPTRuqeKxmzQqgGqDgryFk4y1VF1",
  "key35": "4497EsGNhTKYEbehsDuK2HvDXeUwvt3SPtdnNo1jrBef6bCqTRRYFQKdKTYwvm1Da5BY3hUz48FaCbKG2nVtfXMP",
  "key36": "26sKRVCmk8Jf3zb4eQxAA3EYgeCFVwEyZ71KyZMPHWYetQJezbsBUiVZcuTk6ZhpP5xXUUGPn2uaYqKqgfHan9rj",
  "key37": "67F5wHeuiNcuhVUpJ6d3xiR28gEneSNFjYFRXMGSEoGYC3PHx1wkaHqgqus2NfHi6a1C7wt4mJkvpTif1qNQPdEV",
  "key38": "5XgDwDeFWKNHGDyAtXCiCahfegvvwvMgZwAGsmH43yRsj8BXoCf5CSSKjrxVpDPFFe1gkmYAQLM7vAr53yiGmTuH",
  "key39": "2r5tYS2GTyVBpAFFKBV5HCWD3cFHE7jF4ctNiHWkUShXiMCiC6GizT43begf8Wt4h3nJbNy8iJLxZM4Wn5FpRTwW",
  "key40": "634R4GErxpwAmX7ukhN42VYsZwa9QiYBEzeb5vgBMWJPvH3FGJL9xSUytury83oqCUGsN4CjsTsWk8c1cVPnQfvW",
  "key41": "215suYukre7Q1QXvJUFc5baWTRUPD4DpdAowPPB2nVcpqo1DhtUYUy8vn8q4wMXoUurSb8xcRPEEssXeEqMoV82N",
  "key42": "oBrzsBWiVmnUXpikk2Z5EUnM5UJNk1wpFj6fpVKx5tpyoHVFLW2LaFUi7kFJpKB1iMMYTTfoTkJQDFRSogdCczC",
  "key43": "33ShPFkvD8qscv8cr8Cmk8JH4qcdZU2M8Ubuts2qEGUt1ixSaYtVd2G9o45cGtpy8GCZw4auD1yBxRymztxj1nUY"
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
