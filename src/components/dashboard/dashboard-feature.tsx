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
    "5YbmWJ5EyREqtJ9mTCGi6RMT2MGNCAziAPtkgTWxmXygjcHBFFYhhqqQMVZzV8rniZkzq7WNS4m2m1APsWRd1u9m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o3TYfs9fhBCWA6SzwZaJ6esRS3AM7DL1UBG6uCJHS4AQCtAhkKkLUATSQSTzreeiefZHoL4aRTKcnt85rhb1kWR",
  "key1": "oVVhas6aw4XDKqGZg3SroLWXWAcsgWsYxg7rV7k4CLVJvzHqRrrkTp4mdHTp7CNdAtfWz5ojMaopaRpmmf1WcRS",
  "key2": "2AabJHGGpmqDxVY3ytMkE19LTR3F6onuycLiR3oLVqm6BMrQuGaimd3LwRDT9AyKo8Kz9TEh2adPZZNd4qhBjnLs",
  "key3": "5Wi7XphpZkJP2qHQnquCgWN7ieq7BZLZauM2t6bfQbGMou4cMCgK1LLcxQsQsuhnrv7e1SqTsAMrAKeDGnFzLqoe",
  "key4": "2JNpQr8vomancsrFRD2N9hPxAPbnwLjigdxJXGfZ7Y9B727MSSo8FB9Vj3VoHvUQxM1N9PtMkNMbZyud64Hrtcod",
  "key5": "2eyZZHjB3FCEq5PnCrFXDpfGPK8PKWsJDfXrZkioZNMMwxgdTQQJLDewR6QH2bfGEdUJtqmxZDv69oktPPsTi9C9",
  "key6": "ERfM2AfiV15apBR7XznrhTUVxat4YxuASWWBhj7U2MPkWp4ffuLwZjJbkE96tYtDAm85PdYUnx3A5ZMD2B8ejME",
  "key7": "29oEndb2G3SSWXZZ52BiTX7G7FQhZjeJkj9jocJv1GLAar2Zvgp8K5u4sSTcM7SHd6igKkKUPKG6fpr2MLeotzbX",
  "key8": "48AKoE3UbMbMTj2DukKyVtecMYogdGyEXarDtnTt5du8wnEbdUuTg82HtA2xsqzjqVTaKFDACBx7vC5cy5F2n8T7",
  "key9": "abyDB3aezxBXuvF71ai4SRaRCpMBHTZ5J8xd5JjcHPjgfE9xZ9yNQUYJefWeLPmFqmRCJB2Hbho1AA624xvhSR5",
  "key10": "4YJaiKEYX7v7RswUuHQESg3CyZsydrYbPGEnPc8MGLdXxCkuiqh7zYSRWiqCuJd1XaNhw41H1hJ8wEyE7hcuQZs2",
  "key11": "51apRZUe19S3b34jmhzpBL85TmQdqNhDnTixCrgy1fZ9C5HqvVgXpexryKmZpFBxN2BMgycWbCEsR5Wnjs7F9zup",
  "key12": "3uH9PdBa2bnrHDBb1FN2eUNHFrBpCB3yoz2tfL4dqCfTZosDiwP6EWULdDa85NLjaxX3CDor354CS9xQ62e1waHB",
  "key13": "49rU1dUc9ift3TW2tBP3X8NkMBiMb5kmA8H5ihmVbEmKhqWN6baLqZGAdR5zRLwKwqqMCALXu7SGaXC9LypvKRhK",
  "key14": "51kJWNa4Ss5PHsGWryAd5fxh5gu4zSCfQvz4YMNM2B4euVadoKpAugLopoLxVqZMgaVttJYj3JL3ijZ6DfvXbpAe",
  "key15": "5JqfrTAvSG1vGrGCFVvL5RnNL3ZRkihG7zdZK2QRua5vkRkfN5pA3cvYFyVefLzAg5dQmitLqwSMtJ9H463o8MwC",
  "key16": "5gnTg8kdRm6Gu1p1aCajRsshsseQrk3xLaAaonk9KJ62qGfnZMR12T7H4K1jq9Ki9jxy3asE9i51gemytKns4fqr",
  "key17": "48t3oixPmt91LmDz21P2sCp1xHHfXFtwgCpePEPovBuZtXNgiUbbjohgce1vBoN9iFDEVT7NEPzTo2pmVus2SEqS",
  "key18": "3ciSmycVfC9Ap7FHP96qz8sVxbKLeU7rCmeJgmZsjBadZ8uY7vE3jAEDc36zZQRELnrgGzUUpbzxVa14cMRxAhvr",
  "key19": "5Mq98Cst3Yf5CcP6MkCCrGDBJ6jVSa8ysBg1oaKwBkpBE4WWd6L1ng56LgURoGRicJRrH7xG9K1Z3C5CJyna4gjo",
  "key20": "2JDqUop7VNECqufTbf11kwt3GGsems2xSAEvEZ9CxqGaMw5yK4nSjqKuoeZNdAKVgSwvUTw8fCGV5zbkCTZBSmLJ",
  "key21": "Lh9jHNFDReRkreQEkptted6wL3N9tSNWMeVzieDdm2GoyjYu5yu6oKnjLtbat8wTzMsf7KUjhPLycnhMUP6vu9s",
  "key22": "5sEsSaDAjWURGBF1nsm1QrT32ERGmzSDbEnjGYzM1Z4qnfoMNUzrFGSZqqnoAP4FiczTMwFrVuhVw74GLvpwZr4A",
  "key23": "5rNpSPTXizo1JuDWGYLHdTBbUijgTouYBfpZVfvNUH2dzq7ytEpctsb6uuiauvAaBr7ERGkxnGtj5xeb3vavKKNG",
  "key24": "5v2LUsRGEgAMtE7FnfTMLMtEbSWqf7p8kD6QnbNRYtVPpGh2ghqdGPHuNGKFa2XywnzKYaAhhTAJYFtyX1sjMbXW",
  "key25": "4JMVeUZ62P9Bcn2zU6cMJBuDcYzBUVBkSD77d1vdLLFkEZta4F8GG5HB6sixMLAhKpjZmfoMbMpdFdzgn9wsr4rS",
  "key26": "2bqNEiij7FDvsPnuf3zknqnmyPT7evi8VULAfu2iY4DMnGXjvjC91bLzwqcr2FvaB9fAJ8Sir7mdosr7kh4R7kd6",
  "key27": "cRXpGad3XizwXDSBW3m8VgmRVeWB5VtggKbta68u9bNEd4iz11thDWnKAVgQDSSF8TnofWqw1ytCKJEpyg17bpz",
  "key28": "4nEEn9u8tir36BtENcsxrFpRuN7vmdqMSWTNS69ciB2WMugbyyei43KtpiadGUah8oZTFp5WYofEUoageNTbmyod",
  "key29": "67mzMvbbQ6cPN6cc3ZbokDF6h32yUyY5VfStqox4gfEuN3RTKALgWUH6ouXx4XKy9JYLhoAMVJ1C3S1F5bf8k2Bu",
  "key30": "2DspZA1rygNMk43VBFyoHjJhBCS3AJXgB1VUr4fPwtsDaLYJay7UxanjULdJLRpuefSHekCANcEyKSAZPLM6mJvW",
  "key31": "Nm5U1m6UYECDsM4dh7grehmCbPtbgkuMyTHfiDBNE5EE2FT6tonQxGWs5NstJEbTZHZoEwcYacWpTxoXRV4pL8R",
  "key32": "3J4QtA3TTf2hFo1UQwtYStDf9ZYVNZ12SLDyaFYBX94Jz59iwB8mFKzXuX5cUmnDzmRy9igDW4a6s3ZrQaWSKetq",
  "key33": "4aZX7ZACZZE895WQcT1Eu5tSTTfBgcAjMW7CxAun6d9hbnBesCktXdzfLt6VudLYLfzLcdYxc75y5MKjjxejKB5M",
  "key34": "4vja8LYiE8WJkKpX45ypxwZmB6P3TLN24WBbvLd62ufX7FcqqG1hcYZze5uZg3n3BzP9EY16N3xvXmRzH51Gixj9",
  "key35": "5LWSEb9vxykU8jrtMY9f1weUswd5TEo6sLmy58DTLKsYBposLQtNW8K7hLb4D3sk33tn2wnkeKYP2R8N6ogteWKG",
  "key36": "5jEonk31jrMi3gApe9YSpjQX8k9fhuwENTkk3gWa1RvABAUgLReii6fYh6QVGiTfaoRv8HPPCm8JgJpCg2kyze8F",
  "key37": "2aNtEbUmG6CrrDT5Uhfk8KQT4NpR2xmzr36jqQoS6d1TLobsUpeEYxrio3pgoxHY1YVAMoZsnf68oqHSSuba84v2",
  "key38": "444Zc6Cc2HtfgwLogzFeGuQJoHY74wDk51QmiAuMGu37GdRsH831hwqowmFh2N5E4x82Y8z8M4Py3i8aZYeZ2eqJ",
  "key39": "rskn9oXtjbJsZbBWfTCW5ijk25R6C6GgngjEyam68ZYcF25UnCwp5M5EDNJVTLbi97XnNFxWzVtH9ft8RNjNs2j",
  "key40": "3a9r3eCxhSCKHC54LUfaNi6QkkTqg8ssWHLWitCzHnPdZabbHtaVd8B6xZZvHYtWnQ8vijzNwdi41pfUcqijFdf3",
  "key41": "52QPo44xs5ofZm6mZSbcKotEx9KuwWgLFgM9f4x7CsjcVT6NhUFz6oYf84TvqNTtkuvEyxvWfaBgSygLGuXGm5wx",
  "key42": "4UaSLf4PqCbag4vLbNhSWsfFjsmxevK83XmKWPYmzgEWLVEVWU6fxmKgZY5oX9g2YmJEh9pvLiPiKSbopQktrudS",
  "key43": "2Bi8eFTQ1dFzF5T7VbP6NqyM45KRr6PxMbQgnxtHkourDpsxh6e4yUTAnzRS1r2xSuKub9q6vVo7D5cuhVHSiKq1",
  "key44": "5mmpANirNckiR7Xxq6RQREBC7u9SmDe9dsi1XKnfdpdrGshepJk5r3ivzBAnLu4NoqfBPBRMi89a5YiaEnLmnism",
  "key45": "45D6RCzwzb7axwhrRL4UsdAWmspEM1uy3DtmhTtT8p4PwRnqCgC89AB5BYzuBjbsxTiRdTcXvdpS9cdJ9RDvd2BH"
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
