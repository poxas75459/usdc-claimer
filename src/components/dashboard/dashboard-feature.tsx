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
    "4o7tnkvzEh81NphEr2fjDFhg9e7Jr1Xu9Yy5RkVRrgNaL2p2MAQuaZ95HpTTexMXKckF15T5afBSSu8zgU2JrPaL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fZbCG7nPQqRRUco9mAgmrbJUCyPh9BaskDyeaofcVJFqGrhFg42SdMRVTnaWobsGBnUba8dtqctW3RLEBzt93um",
  "key1": "2RnUwATKNJfYtVnYtysZVTecLKPMUkrK2F8kE2VjafevLu7cpTSDotm9KUgWpSj72xQXY4hoLUR19eEivwFLC9TD",
  "key2": "5UeG4DLmWWdFdcnt1DfFdq9iRu8AJFHim7ZwrFA2MMeoNtqyJnAT91Yn1fSq6faAh7iFk8DTVW214pCtiWPAjbw6",
  "key3": "3WYxEqCyvafhdEQEjxPPcpXtmDgD8V813MUVeSoyNtzcvPniy8oDa1dRieRHDETdUrrUrqvxu3U2YYfRsnxsRRcW",
  "key4": "29mYq5cETQ5LBPvptBArhHxYVH43bJy4ApaT4wDBnAzQ4ohpF3G1nYggz8j7rRdTNfwGCEswoSdrFV9BDYyotK63",
  "key5": "4uMsn3vKbZ3yxaBSxL8WiNzVWmYBxpZ3oPSKfYJcisGcFAkHo5ybGzJupKn98WTJXMYQQX7mfSh9XP23rZsGqvHD",
  "key6": "46bp1n6t8SmMu8fa7wWW2yB1obEd31pa4VwPc7yGZZrg2FBMMxZW8MAxoZfxjynM1j3xurCgm4d5ujgEqYtfx8FT",
  "key7": "5oe3gvSJ9wMyoi1vhm65qtaiGVMki9xzEPBJfMrMEpq6ZVPNVEGUPG246L73CLKmR3kM8YW4y2xzjw67P3B6sFm4",
  "key8": "3mdXMSnw6qwRs8n7rvmjqdSiJCi3v1b5PEopjPcfzt7Ub2URgNxKDarvS8pdbgei1V7P7e7g6o86wyeKUkGjarAe",
  "key9": "53zxHS2jekkhuFoSNMqbesHNqeWZKDKGCsh1p7LihC9rVFKj3oeCsTdAdD4aCnYe9z24GH9JXZ7kzSdFethpFK8k",
  "key10": "2DrQzinabaPAt73cSBTnQZ6tdu9FGnTpUr6oSChWwBFD8fCek3BFem1rYAJ4tq9PYs4LEQb6f9BY1a3WYUrJ73a7",
  "key11": "37DSJk4x36Ejph49ZwtRq4KtZ4vswozzpCfwHy8cAtEkBwpo9racFkFZiCwzWyBo2j7x1EzMN76gqiNZXGa4ihqE",
  "key12": "5m5gzwvTg8N9RpXGGNUq8rdQKuq4rMxdeUXRLkfa3GMjtVPghisSDtchFAqVqvS2gMxuQDggu4gLNrE9Fx4Tz3pP",
  "key13": "25r16XcLbXfgeUkt5qeUPDhprXxc3nQh645S3KJxqqryYcJ66xg2CVxL7TPFGxDzG9nzC9zYapu29mAUV7NBHu8g",
  "key14": "4uDWKFgR3t7HS3yWTPjgFBqiNtnpNgi3YQPWaVzcnQa4PcbFs4oHfby8STuHbYukanR4pZcDcPca1jDjGArMqM3L",
  "key15": "X3Y7yxrntfkQuLymjZE8ySGq3SJz97zMXvGLUv4jg4BqBMXo6HqvU7h5yqSNwrwvL8eEHDQ7466h1iJJhTtp9bm",
  "key16": "5qQqHXGpXsz32Wo28USLckphyo8Zayt4vzyQrnCVwDVAESVNFxHtswzWhk1AW6JE8nab7YMCo6Zodian8pc3QJjC",
  "key17": "3L69tqTNJfUipvCzUWVPpb5MmmHxxsXpVuQXEvSeEzt89dA5qGEGXPHTHUMw7TQmNqmURWrwqydUU2e5C3zJS7to",
  "key18": "4u4gW56Rz74vN3iiMGfKac6cryugcL8MjVvGRxn7Ff7Ns1psm6DgFZuozt4F9FMxA7Dm7zznY6s4N9aiomTvRuEo",
  "key19": "36YW2M9Kr7cxUXaXM6MxzZPbinSJkMvfUev5GtMC5M8gJKKtmE2quZi4JHewaQi6GLBjrnxJrMotYHuEZHpJztwt",
  "key20": "47pVxGs6PZzj5dLhnkPLkgYHcCRxzENkK2fJBrVLPBGvgtvUMSvCNrPwqtRKPXDbNojyi7vRaKCZD1HHd7ty2VSq",
  "key21": "342aox4645ma4rLWbmQ5jXnT3pRwzfCNsUVwmtDoweqTbT3ypUkzkEk7mHBa3pSrgtjuptY3gsFpy3STTsES3c1V",
  "key22": "5ZNXtC3V21A62Kk8LdDXa4ze2HvdrT7zeukwSi46YxBXNmZ2xKwx1Xju6esmNDBGjPHrd8RCbKC4kWvSVq2Rf181",
  "key23": "sMh572zSyjfHwQ8DLS62UCShSeHtRVHm6xCEux8RsK4SE8e2Dy8VfN7N6kehVLgB1d6wwrbCx6kXphyCmcFujiu",
  "key24": "3dpQZpLGt5RfcrvpR6iVucxGcy5YNhyaRL6bT2GLHsgX3QMKujfih4fnqdJ78pV94inb9Z1mkFdpq6RgsTv5YhLh",
  "key25": "5WnVmJ5bq2cx3mtZ7LjzJ4i9fCvt9EMDt2gS3MMshm5zhXJqMbVqQXFyZgLz5HNpHmHwMwZqDKXiPbV6oscTWUbF",
  "key26": "5vnzCq3sBEWVAmZ2kKKASdprkRqqTLm4Qr2nvhe1pze5SERjNX27UFUCnfNha7L231s3VpvTV7ESiq3mrgkyx8Em",
  "key27": "59aHEtDg2yiJewPY5zraeMdMW44xP5UMDAVqCmntnhZXnwTpN2cKweP2tuj53JDsM19KMzrgtw8mHxv6VUoUNyRW",
  "key28": "2Lz3rJ8ewougkTQeC3Tcft4t6Mp6XuZad4SH4jSpjAxC6t9iydXTMRUKqW2BYXzzRmA9TRw7WcwrUwxPmVo8CFzw",
  "key29": "2cufbCMe1b76u7k6pcX2dCAmUbZLrnk8Jio6kWLBg5jgVhXbz9rLpcLYq4X7VEh9LRtTCH78cSFbY2Umk49RJteV",
  "key30": "3h1KbYiL4a2d4ae1cxARcmGQXHNN3PFpoQdKhXTNbHBjHfoXYSDA5dau2ecTdFMPsoNRVpeTtXSxEtsRP5JfJzQP",
  "key31": "5ygWjbRt7GYNUL1iEiSn9ibwfdiuzQVV8gVkrXRLamhMRvTn4nzBrvimeUMaYyhhhEDWMzzd2bVGMCHatomrAog7",
  "key32": "3An7fLVSJUB3QTocdjG5RJdW4c4PGVDCM87Tnp5AYXZBYribuNzHmkmX5NexFPDGsdChnRikBipTgh3Edw6b6bbm",
  "key33": "BjXL6QCnCggatCCkBXoJQrvNVyiTb3hHT8fSbNLgTnodBbaYqFcDtAjkefBCJL4Ty67d55tjxfHP7NSqtETkwmQ",
  "key34": "QRemH4w1C44pPGDFhqgyck1uj9QMJGDxLGDLKP1bcgAcEJYhszmWVKdKoo6bzKjcsbnYmnsSvNikQuEmTT5XiB8",
  "key35": "2CGQxjxYuWodax3Tgje7UEX9vuEq63BJ5P4y1Tm4LkSAzKKayrgdJfhQZ31yjP6CzZWTJe71wQqg7VTWZbw3yLYL",
  "key36": "5wWyXgVeFV998uRrj4rsevmcWiMb3aR7NCGKhZGJ64zifFJHCSK7cavKfQBontv7CQbSXpaRVGsrmgQu18LQ1GdK",
  "key37": "38NaHcxSvvAwAbwxEMEizxAc4GFZ6wLFaYPL6YYhiBshV28D9qTNcDKc2Su72ypZb5ffvoRuyuAPsEC6WqyjvJdi",
  "key38": "64wHBkSZprDjsHHSe4hYmphwbp6jJ1vj5NvAHD1ft7cbcNRfDvAeSsGUz6SmzxTDUqgDSZHhxM4VerRx7NKZfCUZ",
  "key39": "RHRJ2VHWU7ETWo5CYC7FowYD3mxhYTbYonsZJV87fRMJYnv9b47taLuJgA5tdgSToaDSnUeK6DeuVKYXYrHhxPG",
  "key40": "65aTVRx4zE1gwsYSKbZjmKvJp4xkpaXhFtNW6EDiMWAZbiDn5v615ANAowA75WrodWxMxyhESkexf5Hhq2QMCjaT",
  "key41": "4RQCvAronxhKHBPkBi8dvHFCAydZfQVAu9bb3ARuWE6P56wMNkGf9y1wadGjxhkXNgJjhVtx3FURZwro3LSeiwVE",
  "key42": "2xZM4e8bxoEZH6sEXLrb56sJbMaoBKb7vQsVGL3BBuKxn5DyPoHcKTxY9NwaHm6AcoEtsx9kvbsszyfm27N5ieC1"
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
