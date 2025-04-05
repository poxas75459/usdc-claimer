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
    "4sW9ELGEDKWe5XvkRLwGRy292jPpXC3xJQAmatSc8Wwp6Q7N2XpBFv7zv3GRcaTdyFfFWkmqju35rzdSvGscFLvg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UKD54cEkchwpWgyLGrUZ9Nd6f8JzGUpy5fT41PBXFgLHKvMo5Tr8kKjwD9tpu74uGVLvXWuxrXMRPjc8jD1zKpS",
  "key1": "2qDVX3Rr7YcVcyZtt2L8v54s6RynpDwRKXnR8tNDcVgEnC5WETbVdaC9xxpWp9igsqYYGwwagsU2UqZTA52NWPiF",
  "key2": "2W45MwWebsRFsfXTfkhdezk5i64JBdnVd64ioWJ4i8TFsn9iTCNidRf65cmdxWxMGoEXdpmKfmDcwf621wRW4DUn",
  "key3": "pyfZv9mNnersAyEWDhacZ9rBwNKtqNTYbPtyZkRMDgpawknszxdVBt28Y7RJPPxwc8qbmQLXPRhigvytqGZATTo",
  "key4": "EFEybdcmDzmr4Cn52cgHW1xeffRpo2U39mwyFsQG511nnCbRCxPTA8LtkG6qEcNcvw5AxLEtMASs3mAK6KS5KYE",
  "key5": "4j6mUWLYxxPcMbDt7HhWiMuZyS2rkPmbEYMH996EnM2g43WKNSJc1q7UmcGA8U3FNsovp3AZkNze7HYYgEaNWda6",
  "key6": "5co9ixqSAckymZxRe3ve36PRwKEuWDKNJnceBn7aNpngnmK9C1Y7v76UZb9TdbNM1zHJWdgS33zgUFSQ1rhLvSkH",
  "key7": "2eW2gqn3S6doEwvyyNsqNbh8zADEmHwUAgvTjH1rdAsnydN96HXEQTLHvTbh23bD55gBYbieoc7t9QxNcHRqD4UM",
  "key8": "39JZ1yhptDiJitgsbBVA7oQj5auRxLWWr5GvYEdQSeVNg6rwcab5QCBs97dYXEhkkGtpqLyJ57i3cPzskdrw9Wua",
  "key9": "RErKM5SVr58TwaXqbJd9o9pvU9TxpGw2eWbv7URVbk28CbcfLjyUTtxqsy3AYyyj5qVWpDcF5YzDiZtft7UXC1M",
  "key10": "qU8qGd4ZDpJbZi5LsQtqJXxHvSVVT18ynwCcpaYkM1ekzTgPVMiPVvjGn6BHT1Xv5PjNcw3G7SsAbjzXxrpbaip",
  "key11": "Bg6iLCWQq8fhRiE5DZB61zP5YnaijJ3m8X47uCDT3PV2oPM6o44izveWddCjbmkakHfjFZPjbsXEanKwwp61Cyw",
  "key12": "2J6XYuAwv6huFgDbnv6JthWcHQU6Loj2aXQRJSB5wxykTFZ8g8acgaNw7tfTsuWH4gyqqTDGyq83Ero1TrcCGjx3",
  "key13": "dshHZiM1qWFpuPWQHZRFHdS6zfLPJuddua3KmrUUszPd7YYzHoWzEuqmCsRjVVfKUYubUPLVRHn44to1swWv73B",
  "key14": "3jyd7CDQTVdqotusq6ZsvN6DtwHveRuLTeokao1D5pBTuyRgnXq6QRCzWWozaYFNiVUtBHECHPPyBxt8HumFbaCc",
  "key15": "512bLxmegTq2gyQrPVk6dAYiMcuRJ4iEysXoDZRNpH7ZANUYobyuy9BQ47k5ZDtHJmXnNMxJpZoTqPUeS6rgHdgd",
  "key16": "3bMrnRsLgPZ3g4UCJLPC5jKmU17Uwc4HJ3aCZzgByHDyRoeyefgZ9THaMb5rwJX6fZcsfUunCEGqvVKC7WDT4mcX",
  "key17": "4nyuwz7nR9Y792zexrS1hGtBgbBxCtVcCYW6KcxmXLCXca5ks48txKufZVFVoA1GTmFhMtdV1iQqjcEYCi8tDGbn",
  "key18": "7VQbY5ucB6AXqrhJmbquzvHNhXnyB3XdRQeJuEgfVJtCb8cTnZrzekW5Db53pL2vvbc7xNZDLJ26pWpy9h6Pduv",
  "key19": "2DHD2nE4nR8dyZSx7AYbQP8Uh16mbATKvg8wkYAdFDKhavzPJTGuF834wMMFoHNCTqFzRxuyknASu4qUQVRQP4mD",
  "key20": "2TTmxUvvY4AmbfmYJ7syNnN3LBkeWrneCW6nsbkX97pvKPk4pxC4uCGV7AZKFtSmih3TTRZLQAPUC8ykrUJi5PZC",
  "key21": "4K5N7B2y2kQc6Wja4Z3zyMr85NArV1DtmVHQUcTbx5Tbt12ZnRhtk8WDuofZc96auYqMY5LNGQPZnX31qw434YuJ",
  "key22": "TUynsY2HDdZLT6mrCZp76giP5JRcco7dB7an7xd4LCeFTmfgW3QxucwRP1F76pR1kWt1Zmomp5QN2PtQS2MBBpK",
  "key23": "gG1ZmbSgm2Dy7fiwFhUWZxaqvtwFVZMkJ3MdjcqPrRFVZDwC3UJ2UVHAa7NSFqcJWZYAyrBBTF1ZoFCmanGuDxe",
  "key24": "2P6PHeDaZUyqiwexLoocewiKeb1zoAMyunkEq4GL1NLzACBswKx8MhkZohQtR8BBkv9aGwK6TdiUnCkPfSoGxeKM",
  "key25": "3BU4v1Ek68VJNagTrcrAFbPu76guLanCgNErUU9H1ivoih2Ske6NkJ4bjp8jT7nUs98pWANKDRQbNq29ysXfovPq",
  "key26": "3PLxuFjRW1MFvJHLcCKDnWuUQhFCrvG6TWaMrus87NN67X82TeK8E1GJDvnTKLzYwJqpo3HCaXsfgbHooVV2bv7j",
  "key27": "3LcB6HiVb2nuQ25wxFq8iJuVFj6CxhDGUfLgVFuuNnPqLjrQinEsHDjyah3wyjtKJECYXFFme9CRg9yDzBWbq38y",
  "key28": "3zbPnnMKQdDwJZrhUTEZmrU9EY9Vaa1LcxagdpoCGQgWDSfXBKbBZftMxeT77oMxXaanGrQJE2AxAeE6P9Q14m8q",
  "key29": "3t1eBU1HkFGjvdDsDXe4A8xSMzkzjKtuQsETTgy5QcvEam796PVmMco5a5dUf24rTbcyMfq2Vh1L1FDu9UnQvqXK",
  "key30": "2LXNPU6PGivDzSFhZ1snVHrunoUF5SYD5PTWA2rGT3cqEAxEgNKCvdYUSRZXk6XEZVGBX9DLEdiH33Farkgt89K5",
  "key31": "5cvxWrpNfejV3fWfsjMdw7g1RmVwvR5fEJp7i5ituNhmbMhrWJfMNEPtHoCNTtxoDKArUrQ5q54cN7RbEzf6WqZY",
  "key32": "2ftTdRtw4Y5Ap5tWL7Gyb2TK6iP2zZZya6Z17HJnFThfbSmAPgenLEWLT5rRo3tGQ4WbPw3A5X14TDDkescgcTuX",
  "key33": "4dbPH1FWehfCiwWUvaDs1vD1HwMAsfNmmbQGY4G2itAtn9uKcEXuSjQ8qWxGjnCNHmxwPm3jb5ZeF3Yf2WbnC8Qk",
  "key34": "41VQMA7qWE6HqubTrJFoDv3WgPsuqLgxFgDzwGvYx34m7huoS2s8PGwovB9kT5T6Sx5TbMr7xNNtqRvF29RQtxTA",
  "key35": "25P8yyMQQ17jc7mQCDdCVRxgb1ToU4EtrQaNDmJ2bJAjBL54m3cbNySTQaPHkUJKC3vzA8FF88ndgkY96CAinSf5",
  "key36": "co1iV9WcSNfLq9Zj49Tu2mhFG8fx8A511kB1UNk2jAeiwsDdEsnZQVSWyus8Nr9qmBkfANmPgPnLqrQgAeUKSz1",
  "key37": "3nziL5MBeKgxzMB3oXixFjWevchnEf81XCCTRm1eLkr7YZBK68fWcGhpphJLmLtWUTDfShbeZKU4RMLvEWMkK2HE",
  "key38": "4uheXBCtfhr67EFr58E1Ri3FqNvjGxZ8e3mKNFjzA4roWRPxBCezMZyVd9gTgZ11qoC1xXGr5dyb4bWumithdzRJ",
  "key39": "4ykM3zucdzFa6umkx1exAeXZSednqtczCUCz7CRR7VJnjuMFTKTdasu9hFQ4gjVnNs926DRtAhH4T67amHsUZifT",
  "key40": "36K1hUGSuj6GBGYSKT9LyBrs5f5a87JJUhqm7iEz5BcUzf2iELNxomj1uGZW6zzTYsxyjy7oXZU5LWWWbNaCpKfZ",
  "key41": "2mzL9D7ReT3bQ85P8nPZPAWdDTiz3L4h5zpt1KnrE68aCZD2zYvNrzQGNzTf95L2MLgbCSne8mBAuksvNCjFR9s3",
  "key42": "3XRTQa9LWcsbRXJ2S9XK216K8eVnmUa4Nqcy2ZbQarm5dDm2NMYeXZsoM8tViNcCE7wg1TiEbAWaxhnvQYp8AnyX",
  "key43": "358muw1wubXpvM4h23saGMcZ2rGwzgYaNMvev3J6T5dif9DXftXf9VN7M8m6V8i2k4HSZCimbJ7JndVtUSDYDqXT",
  "key44": "DgQcg421wFom5KSybPa5hGbabJuSEN84i3vVRsspsgPx1cs9Lqgb56oNKhvfNB9Ex1fteb6P62gjRKNzds7KEwX",
  "key45": "4LgbpaR1E7ZsqkHPx2yuuEh68E7AnTRzudcpyo8GTmhSmRoDGWbpVbBTM2YE5SZeeo6Fa1aBJNHKsjA918AttFCH",
  "key46": "3hu6mwZdyibRy3W6wQMDkj1WNK23hmwatByyYqLQ85hHAbKdKmqMyu8YQdMeg51Jnav8zQsVPEj7bDqScRLpgHsP",
  "key47": "3vFcdooHUFFjXRZ9d25U1r4LSHviVtoTWKBwmx6m1gPTSuC9hu7UmNvkzHE7VcBRbzKhr3gk7r5R34TTHrvTmmQZ",
  "key48": "2GQSyRMkxECQpgN1KeFeQeEQjoKTtdHEB8aCApZu8KNBvZbcTFdovMkkEkxD8hZ4ndXLXDRHF3kxTRCXirqsHBQW"
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
