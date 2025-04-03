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
    "5qLurEWh87AAoe8ocKjtwFeGzFPknqutptqM4cqRrWboMbG1EHLNmHNbuUewLX2rvaU3guGnCxTpnKyuuzX1bNa3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52Q9eWHKGDFZyaHFEBa9pZYJKenRpGdvbAbgz2DsRMJR5FDyGUQWXrhg4AjceXiPDiMeo8dRpnfY8e5R3m3ygtn6",
  "key1": "4QPUzyDkFmFENS8zRyKcyoLABK4zezqK7bfTDM6QWJ4BdTWYtuR6HANxZ9SSj8VNXd5fPAV7GYDwvwo6YdnMydT",
  "key2": "2C7jk6QGbv5Eozz51hGRY81X4TKVoJeKB5VN9GfYtouJgkhkyjbs34JD1qhK3Fbk7DtSR65SCqCCAKvLMSUcvF4T",
  "key3": "49aXmDbbAnHE7a9Uhsk1rGPwUv84UuQYHYMuvbsbpimWiveWZy44PuJN74uRCh2avRkgrQn9LkyPVtuMSPzPDCok",
  "key4": "5f8wckM41vZNHczNdRm32ig7YfbQP6vWfLXMFyqv6pPktchkztDJU5HGUTLuaHs1k7Ua9USvXt4WPbZErVnX4LVc",
  "key5": "UkrWh6bZ4F8BMo2tCsZpQMuK5m52mHYjKYZrfQrvcRvn9JZdSW11zXnnxa4oA6cwKkWW7qNQaEM3if7qW9YA1zD",
  "key6": "22Ycv4UX6j7ty6b9TZvG4cdKV2yyhBiEorverH4TYFQwUfz2RZcoNXyXhtW4Ze1oWs7rBUZcAQnFdrTebyGuYwUr",
  "key7": "5yKCPbZMBafnyVxcCAFMy2P8wRXRwF65sSYTJLEHtFMQ7tDxKou1X83FRsBnYkXaDR31wDNYcBPshCXTfCuECMrM",
  "key8": "5RdaiCHQxtyqygTkfxVYscSocSHmaUduoL4keTYhfZJPVoPGRSYvduCzJ4wjqSv8UrDV4CyAZonpDAkokeGQMHBi",
  "key9": "4KRpNLmX97QqMLeZckTiFmZ76QkS492pRDTTgJVZgBcmCNnTpjFhbJQFchwaq3LZztVJCaAhZAXEgZkoFvUiizD2",
  "key10": "4FA8uJHwHdYs5SFS8myD5WKk6Q7BpLdnp64yJ19Z8AnnEBjRPmWDFZdun9ZRVDoxe4SetbFsMLPqKoU2yZ978Sgt",
  "key11": "57q3fGgmQvWZUK7H9pC4xgCEBjktrNRQu7sk1tmmpXFvc7NFF6miZ8apzpD8swsansQybUUwkPXpJN9tHo28wLqj",
  "key12": "4efcAmu2BQdgnb9uDd2a6UeM6WY3i89u9QirVPNCmaDaiY1WyxLYhooyWBmh3k6zjNTMZAPpbHhS7Dku2puF22Hd",
  "key13": "5CzB231ULazC6AuCkLtPpjN3aYrM2HbW5Xhj62Cqw1WKAqcU9GGkUB2tKJ7KdRzVUmjs7Rfp5HHkRcSEqVD7kMTt",
  "key14": "2TntMp6fRKwZ5oXVwXHhM5FmRHJwR29zupXhZQ1SY6aQzVvF2Lbv64HspcKxWirCy8AtWYUc5qh3yG31VnhJxYEW",
  "key15": "3moVbHDdwg7MJiRkzCemRymEjwm4whdDd4DiQAYwtxZqHDURhNsyPUjB1yJH4RNbZWfbAcJMDfQ1XAExok6TiD3t",
  "key16": "dfyJAHvKP4SF6RRAY9zP4NZCuxKEqmN9wE46Hm9kAEw8d9w7s9SvkiyxpGzJDgHWjhCPx7GJ2peRxBRzU9sLCiy",
  "key17": "KkPPPz1eAbNUXzVAZJKuND3WFkrj27HminKGDHc5i1Efid5SxscXQXt7ifr2z4fEnqHfngJYzduKW84ScQRMr8L",
  "key18": "5EDCp1VhBGKNVpxtfUNwoLmvukyUkFDaYswdq1BzomiKWr8qn3Ci8xcmEiJhitpWCkUqBp3tudSh6BEVucdXNo6b",
  "key19": "5X3Ce5uE9bHMAkfn9DBbS2mWBk9hJ4hV2p2KVJRnwY8JgCB4fHZrxNSXRzZZqLko3dunoEpc9ux1Tb7TXxtn3pjx",
  "key20": "3g8UmSKK4hFzkF5txZaTKv1Fhfyq9h5aBDfp2e2Mmyye692wYZAxDCJsf8qNkrqXSJXHo4unpfonLvC3LvZoLip2",
  "key21": "TqCyXSUAfs6TFDazCzDpxud4ERAUx1duznnxz1pBmnPhrQMrKxvhizZMhbTFwSpGCr7qKGSiVLanCJSUWZqW7mZ",
  "key22": "533H7bykNwCabkPqtcciUo7Ur5xKrQBdQ59orpuHKGaUNXr3cuN4V5YYNcJG2q2sSVe5CA1P7g12HPx7CqQ5voZJ",
  "key23": "2k1yqJADzcpsEWZAMtyQxnGEw6wRXidf5D3PWNbWqg5jWMDcCY94BZWbJfTgEAvferhastDHeXRRfudBbc9hLiJ2",
  "key24": "2oMkFt7fZvU8pkWNjJ22xwEER5usd7Tf3ahBAKDCNBTioKvjRbyo27SLB5xKPH9vFuWiZXrbr9sFyDk2CrVBYU5E",
  "key25": "55ruPMr786NNBi3T2jFiXbspuc52uRG2NCgFkg2GpdD7hyx7cJjam3GM4EeSDVfT8ZZH68c525hvxVW9PMH4s9n2",
  "key26": "2PBTyzR7sf1FNU9RUB4UF6vbQAfL5DZyPTEuQnmGhUPvt8P1416aGmAtGVWg19Pq5DdPSifZJAH6VC58hVorS2Tz",
  "key27": "3HL99t2965m93uHbKEVQtQTaQ3sDDHfKZjk1mqKE1xcUAKByYnziapYaGCwAgVfTnqYdnRc76Q11M6mX54epmMpE",
  "key28": "4jhHPRKV1J7ZMa3QXVTK8E3nGyH5AYkBWozW3z3T5scbrx65ATTYcTBNZAbwek2zUVxMe3raF8EnQ8xEBJsRefVL",
  "key29": "4BNbXTY1XCHGro5HZuGnAppVbrGF7SvLhbNXEgNcfFC2CTrBeCWGGL25pEsJS1F2PnbH6cevzSYNpQgCkaMRjief",
  "key30": "2DpmBKEaWFC5cY725pgGuUCCSjG9a2SV8m3BhDhotLxCX8fJzX6S3ukeiXW8aPPrpjtYp9eEKi9UN5kpXJqfJ84C",
  "key31": "4pbpzhrjwEYDQRRgwELRiPfb2dSw2tAVBwgTao16UNwfD1Pyo1EUah1wzZ66XE9uoNVm4CYYxhvdTNcrMLiwmoap",
  "key32": "dcggsjddARarrAw4NyyPwDSay1X5j8KydkRyz9Zz5C8fDNBiZRW7SXtiPHVC934qzaGGTfX7Dy1PgKb4JPM8gtq",
  "key33": "381tvKBXSQxPkRKz5b7uX8APLjjrHjZzh797TAsWReAS3tZ7fbSZXmriVSt9tHJ15SBcNSmiyx138amJVP8ynXea",
  "key34": "4mQFrxEM6mZfacBHSFGfXWmRPT5DPQdPuQnGWmLj9p6VovNfG48LZ1TVs1Ey4Qt1nLsVaTcfgt4aJsmhpaYxRszm",
  "key35": "2CfjfxhDixCvdxUpnDJQDwU6JGN7x7qa6R6PYpkwresDXJ6zYzkqEdSwSjdJCxDqYUUkq26FfGPb9G3LEsbQhBgW",
  "key36": "57BcNkPpjEB25spAWNGbz8US6uwsAigY9wLS9TrdTWBXevo4Yf959otzeXTpLaPPPUL6k16HtDM1q5SDTh6gqbWt",
  "key37": "2Cto3zhTKJbiBDGvLDLn81GewDRgxNttCJ4YWbY22PD8PbZWjirwD16E8L7YPB2YTFYbGVUSf8rZfucgtpSD9S1Q",
  "key38": "37mpfNv8JeiTdE49P9DtZw3mMjnGuDx2DhWJQAWc4eY2rMasg6ehog3zK5EhnKQFKY9JcMABniEdRsDTUwQsrMLz",
  "key39": "2XWtCPqEud5P8KW8Yiu5LYEaVGedGAZ5HbkZYvSCcd7Ptn4WG8HFNymZvxDztQF5NNYBM4bQxgCuv6dXdGbwdJjN",
  "key40": "22HuBnjoepD6B29Cmq6ZVEL1kzJYFqDYsxKM9MWVBubCBF7oTMZWeePZsgFiWmBK9NDis93Zm1uh8QVFbkiv7mZe",
  "key41": "3gbDr4yn8EBuKzJmfZHqRCLAXkJL4mXFYw84AHykXAH1Pd882E3k2Nh1AKFTL5MWF5xgETfR1Kz75ZoEG4gUCNYW",
  "key42": "4g93Mf7hsm1SuWUfmLPGxB1SJntuXAZeWzrbu63A1vKT6tsVd1xw4ipchxURnTUwXKEu6P4X3BYAB7mqT3MqGvV9"
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
