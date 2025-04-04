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
    "v5kjqsaTPNBoZoLd7kPRi4HSyeunCDAph16WqPxbAwscJGnMCSfnYhWjUnHoo7NxG54nf5cmfAAgzgwkMCg5r1A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8wdX6nxNz4gxYREhHNaXwgCv6ZDGJ4x8fSfyfGj7SLrk5SheXB7aqFDR3rKvs4KLcrguZ7Apb68m2s1KwtQ972L",
  "key1": "5hSPqNpJ6MygA9iSCg9HU9sbkDYBivtFMFMaVqLpPucwJvnQ48pFLkwwMnwggDSn4DscLhaWFb5bVNs9V3wktFrF",
  "key2": "3a5io7Q8FhBfEfjS6TCxWKpBraEAraorSRwLJtSbRTenVAzzBRgmAhjDbWqTWGEoU8NR5UZEaySfetTY1VrRs53e",
  "key3": "aHzsuTq5YWmWRnSgiUfmCEHHJ93FKGDDSna1iKPQSs3YUiYpeuMP8eV2SyWHQVztoGCQRaCLfwzHsEe35DAjKV2",
  "key4": "jXuLepGRyopTkXyzTDRUw1cbpZ2RQF9ZHwmp45rBi9kKMVvVKrDut4k6ZbVwtccdrsYHkfMuatbgMiZAxNLgxrB",
  "key5": "4dXK3niS1DnzsUMUjRA4sqiSK6m2vFkMeMUBSkKZK6mJhy7xtZ3N9kkbJCapfSbh2WKEQFVG5CyW66jBwrH7mtRa",
  "key6": "3g5tecuoXR7vXiVW7TQAy6yoDca3DtVFG2x9J5qzirGd3WGyxTKa2VWVuqc1bF1Gnz7BkuRGR62hmwPShQeY5TaW",
  "key7": "35Pje41mLpNFr9rwRSBhfFUcmqnACHw4Y6GFehMqwKKYyEudeXtxSAD58jQyogW3ntYhciJHojR36otobXt5vH5",
  "key8": "4sbBdHG57BrACWuwP4CfEm7XKyimchN9DUH4JAiXtWm8nqezvqdTchfgJmggkAfeWdWa6mktYRjquqEQGVh7hooo",
  "key9": "5atm2nKs7a1FcR9Fh7K1KMrk7x6utAJCbBhq86fWqXQaKibR4zyqbLfT7aG4UviMNQ2zbzcyi1L7fcSvs4DzJ39z",
  "key10": "4WndeZwYmSuLwe7WuEq5DU9oAGrDu1BfjDCaYxQD7hTbfP6oh7jYjrEX34nJEJqcyo8eQqNuxgTD9DPyDsHwi6Um",
  "key11": "4Dmr3AgBXia1Uzm7qsYpPUd3Zr4U5PhXanbrytRyNsa1WbHRtpnYJuESbkwy3cHUFxw4wuPJ4UDxSqL5y5Gs8XuM",
  "key12": "4kGf8iv3n44XBWdpK3XaCy83bweKeQvM7KpsPZS7PXFUj6vYjyk6pLA4bznSna2oJsgfBy2TGLs7eEEkeaV4nof5",
  "key13": "4bnAjTQrxC6ZiiYDK86Mex3CsAmk46RRKS5XHGyf9U3myxSWGNWnHSi4acBEfu9aTGoSoB4vw7usqqTsduY41ukZ",
  "key14": "66sFSH7zjYU9qCJw3vQYai2KabjgGFMarxJRpJUhEs4RTvocJr8k7zP5vUxEkWbhQVgJtqDEh9bnDHR7PkGwqWv1",
  "key15": "5Zrq5m6oKMttx5JDNkrt4XKznkbWcnsVJZGcfEWEHaNm8pnppQY1eeCsC6g3Vhn3k1wNmnZH48vZ6fDmb44pFQgU",
  "key16": "5NB77Sm2viEHyupwVXTRptEpbW4BSWzjAwdSQs11cY6a5bMCkBQeAEJtQk84DJzeeLztN2otqModGgLKJqMG9Y3v",
  "key17": "4boeFAryxZRJ2RBJ8bBJRABek5utiY9n5S7WMW6Z3cRPBrHymYNUfGyWxvUthnAufZ1yebrxjvWHNxq6XjpcAfMp",
  "key18": "4ecGX2MR7D86VZ7vF6stfC75EGHcXN3gbB3VBeSzzJbnKbRyVnjZ2vPFqzruHrMZEf9bANonBneyxkAMLeTNFDKL",
  "key19": "3Puojj4WpDUCMFpw6FhN88o76cwJXYX7CoaXh7nptVHS1qhtQYHzP1zfowPPxjY1Thn3zcK1UfH99cEEva7ZdBa2",
  "key20": "2uA9ukCF521x2iQB5NckWBKpJFZfVGUGnA97EpBmcSTqhoP4ee8CBiu38fJ7VRCXiR5q1sfXw3ZQkg34cjVZh2S5",
  "key21": "2yLwcqTtNC6ETNgALEw8i4cijzi1rP9foYCExp82rMv1w2as6R6cRJUnsMJsofL1KeeLroJZwXeVtFBw123XkHX",
  "key22": "5ae3UfDCr45wLQ7gWvDqnbaYFx1frhbX1iYmLsQnott78kFjUEYgBEZuLktQQiqj95cuVYUm43HKB8PtEyr6ot3b",
  "key23": "3NzhjamekH1XokKVffTSPgu2xaFGhyG42pP5FKJPD9o5YBN4PvySaoBjKSqzAuha7nXFCTBrYnCW7UHe8GDEcC2N",
  "key24": "616c3JnoJiYDzzGq8cmqqqSnvPQWDbPn5MK3BD74h3mohj9ejPPieiC6b8Q3N5yfXoeMLgzeFdCEiNG2FUb9GuPc",
  "key25": "4QcqH1JY453KJ63SZKVepwtkQ2vCpYd9HKgY5ux82Zzn6V1DpAPUDJdYy7FUPDzCKKiJDe8mWALdRVogqr1jkQDX",
  "key26": "xW4rZ59QBrcMH17EBj6wyCe9ZhJEZsD2nmXiPboELEMcNmWd7hUv9SXXFrZoupKnSn9rHE6WLCpdq5WKvXpfPq2",
  "key27": "41JQGSqrYeMaciDEyk95LBkuAhv3ZPqhfxemoZjx3edspvC66VruZPj6ZBXfFFkdzL26oVsYJRJFecqpNoW227S6",
  "key28": "4Mbyfd2mYVVKaujxE4mxttYqYYrhU2q4towa4WB2rdTBd8rniaFywAbhZ46HaNfwawBZanuRXTxhvyyhcVbU2pPY",
  "key29": "3g6ds9U9jtvTXV8Fs3RXjEkajXigemwJ4zJVMGC5adaPa5D5rmiv4LfUhRQ6SkwZ67Ttzs9RbdV35pDqccBwEqdu",
  "key30": "2HsGBZeKfXWhoxqZvPbKGiFnWuQBkJP3fU6SMVmJQoKuV8JADTpZFSnADpTimwuf6tLkYWHF2iRjukVEgH6G8u2",
  "key31": "gesAG7CnK8Y4rgA6GfxepJtthd9vc3kwrZRMSGQ8jfrjxTHFvq7TmPhQryiLMMWRtkRTyN7p5TKNCuvPvtCgPRU",
  "key32": "24fCBEbAhd25bX4gqoEV9wVg668xGsGYP3EKq5vG8512rofpuJiBZCM7A1aAdT4nfnSXBU21oyFSRQs1Y3DR1EgT",
  "key33": "63ZBsufVhqiCXuD3rd51fvaMDdfWDsWrjpTDgcX3Mrx2G9tBb6oaNahq1SndajfoCmJpUYX1pHEisV8zVujnvS6B",
  "key34": "3FBaAt5roSxN1cEhhGPoF1dVJPz3kajtmFv6ofD57PkL34Md1JUBT1XDf8bxSr2wP4u6xFwKAZiJX7HiNCvNiALz",
  "key35": "56YuDubb9d1NQ6ctBKDUsFgTQyxJcMrfbKhH9zkZ3Xxv1fVh4cfMw3yREQ6UWFxmQAmPtPbinnQ9PAiCp8tJRmdF",
  "key36": "4GeSgpHpWHv6ax5i8Jg2z9V1P6r2XncTkGxhRyNHD33mFenWhp9EUztXBKWkfR5uZXQQhtKwyL5m9yr6Y1LiT4nn",
  "key37": "2ESLeHG9vYEwNmLTwBwupQLWwWJ39b5uVC6PJ3BAWHh2xVUA8JR6LVeZrc8DsALL9zgEfv1gjV6TV8RNKt8XDQzb",
  "key38": "5vsbrF1rAmjZWdiFkgJRw8XDf7dtb5D4TgxaJ6stQMpnTwwRxTz3hd9TPCfAH7y1wHWy4isT7FB7QNcZXThAuEC8",
  "key39": "5J9YwgYP143ByVCKSHFDRYckBCZBMtCisUyfm5H9VM4Wch786q3ShDbzeG5PSCebEeLVW4cLp9k9QdT5e57rf7jv"
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
