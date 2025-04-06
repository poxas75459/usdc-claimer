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
    "3dkk8BXj3TTgg78acWeSL4LZobtErHupAZ2jGkaZmyoA5vxVLZWUaTTdJsg6QxQb19sgWLkWNhJ5UpCrZ2LUBUA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R5XCnWfaeuPJoGwTppSqS6UdBi9a66dLT6TGiVCatMxZsiPfvyzmnajmxSZGgiAWNBy8iuyfZ17X6Vx1UCwYbnf",
  "key1": "3qS1r612wxPzqiQ2gACdCcY5Ka2ui3Gp8Ge3TtbRYgeER3arNVQ6FpTnSENrQaUNMTNgbQgdz6tS4kHg254u65Ci",
  "key2": "5fRLi9PKxSRbypHBx5XEAW8QCVjsDH6XpocxdmckakxXsbfmtA6YWwDcnvZXpr911B5SvbuNFnvg6kQUJgRMVw3P",
  "key3": "5rAHs2MPu29xsPUgo39SKdXcGMTTXPodh1o11aLkyBUB66nRVHufho67vv3kg3Cv397uYB7ZGmBZDegKuu4ektUC",
  "key4": "2kithd5aLZ9NJV4EvHca7N1VxoQW13soUDZLXqyqvZiNY8Rw29dtFPj6tgB3pdmEuyECuv5wWr8ndQiqafAGe4ha",
  "key5": "4Ag2CykeTGKp8kBRDALUxBiQMexGNgbpezAYV4gvyAmb9df39JASL89sgmLtj49ukrCxNceSTTxU7ivegtvwNQzL",
  "key6": "vj9WtyEV7Y3AewNCabjR3VTYduu1ZmxjDdfPD923Yz435i36ekr1uPMJ3XcWgS79WcxZ18ZvR81sznYtzs61xC9",
  "key7": "DTDQ5wU2c7LNa5Nm43iKRU5kz1WFVp5hVazQkPwQiQTqeiyrWw9A5DQTGobp5kB5tRjp1yiYwkCHocLvKfzGrgW",
  "key8": "5emLfDGRz3HbYuZcispyYyXBA7nCSKiDjmsRTHYMU4GZDbh8H9rk1GxtwaSkvHH7HadS9cLAUgEWXT2g9bC8YQWF",
  "key9": "2DybETDyLfcDPWDrndPexBma9CP9mTZs558z7AzFwY9jZ7oWPjvqNzC4Q7KysTm8NSFDZ6f13gBM8r7TGr8SFzTF",
  "key10": "nwSjMjJATqaqVch7NnAX4NRrzyJLrYrSHU3EfMe3hsKYjPoTapAsjdrTDJTgntF9qrfYyKEVHtZbC7LQxU5C2Cj",
  "key11": "31NkuAcNqTdnDCc2K3d4KjPvuyZvbWE1tpma4g1r9FTRyyCAm91xrJHknUSk6ZRFUaxUcjD7eYPqHvDoPLHgau7o",
  "key12": "35zyR482abJ1WE4CCscGrRmzv75HDsabz5XXezLpaCJqdtzCGRgGMHaAqSQ8yKMTVDdXDGKnSvyH8RYXMiYKtnFA",
  "key13": "3A4TkReTS1P64waN9APjgnRYbYJ4DCiZhLRWuueMV1Fta2R71L4fbRp1Wxk8RpSLNgkrNbxsoNHBFqTtQnKv2tPU",
  "key14": "3wbJ22Xfs6nPAk9RQJADp9ugAaZciPS5EsRK4mUVUFqZwzedozZskiyUjBoz5vxJJqZzjzMp4TGRMN62F8w63CZ8",
  "key15": "5DeuGZsMT4X52oRAeLUeR3ef7rLqYCm8SnWEjvrGAMQScuPeeKxuWJicSknkNV37zJq8GBrLjNcfU4qmHMdJgHRx",
  "key16": "29dPC2sEZ7ksyKTCLud4tThdsFT9ZB12mpZMK8izM6iG6NtcPMz3zGtHWpHntZsDCgUALTLLA6bs612eLjvbV7FM",
  "key17": "kAFYZh6ZX53m8BNP62KmPJjmhQQQhxnMZzMkueBQe3UJ3xjL88CtjCdtBvTmSzikzAdh3457fv6dudX3mxYDRNj",
  "key18": "5PKnTq8xfPhJPwUtjn1HUJCu8Sy1qww4BQjCaErZQbHCb2Hakkrp4rAe2wt5TEvs3LGsEqrxsG8pmBsgTPMgJmWB",
  "key19": "5kPZ9MRHtHJNmV7iRfWqEPgsKCEwduzczLHB662gGFH8LSVDmMZexYb4rDCAX8fHdNDZXCRUP1SQRwjhHvngs5Gq",
  "key20": "37oC9XKj1w8DvwxsyLJ4rje11crL6uVmtZ6HwM8PGhkuPXSHc6AuugALaHyF6B3m8m3LvZk91RRVXgBoyNajrzMZ",
  "key21": "3ddyzWtkmCZribw8DudSNiFKscMPZmeRfNi1SRkzhL8ZyF5jjVthw9nJWXMtTQQNpo2ESY1aacnMB7nVo9egWA3b",
  "key22": "5SSwcGq9hGbFVofGHPYuutpCHykJVd7zMe4PHsbD15Nt794YfBrWX6SasAK9RfNzpB51CMJGaBEuwyoyyEaFjqD3",
  "key23": "2KSjGa1y7TZioJfvfZxpoAbbgWgGswDuyrYTrJ6kmujpZsQ2RVo3jANoD1HNAnKbqMLhmPbkLuC9vdHLNutsGG8q",
  "key24": "3xvCCGDmaWgQNtAu5YLhcMM1uMmXF9Z4TxbcaPEnwjbeTo4tsaJHyUUCj52dEFQSwNwPNBVWjxQzSPzmZ7WZ7N49",
  "key25": "N7GcwYyysGfQda85JeVsB4AnmtD9QhvhaE6BVrCpjahgKQAXDed9V4qppRBJoKPeqinPrm6pxmBwKBjpepiocC9",
  "key26": "2D13ZqMhGrAqbVU4mqgGEUkjeYMTxNP5oNzaCSAsLBrDP9mEM95vjBPkB7zqRtrp9hthtMr3UsLBTPoHPch9ZzU1",
  "key27": "5GdJCF9SiTAGce6f8ipuqsCutdCbvxzupxELwD1SRBJCnHTQCTpkArV6m9UjHTznN7u41w4MMr6sisKDddY41vvf",
  "key28": "5jpYk4YnzoiB5166YSVTVcdRZAdXy47H4nmrZxroTiZ7JEvcKzApFTqzu2bBXv7pxQZPLd1bxD937ZuZqcbJTTNR",
  "key29": "5PkbkMqg4EszLSizBkx97bja2cyCZhDg87N8cfcW7U7ox9WFuVJkbrJzeF1jJKd5dXepihXRkXd9QrZJDGk9fQf6",
  "key30": "624WTvHohiLVMHhYXymRbCv3bjbYMdbDJgAe6ZV3LsnrFD2UsjhQDMo6Lo8GB3xAAEQQ8RFiwDtuuKN89Ghb2TSh",
  "key31": "5H1pyQPeoJuo8KNBuJNjFo3qYHf8mNpWBVoyYy6XfrwcjdVdXHu6VmA311xgDsxC7P8qa2Nw5WwJiKEuXG5cATcS",
  "key32": "2uiyJzxbiodMbsvxWTmZm4PCERRFVRV3uP3kKgLybgcEKfV79juc3EV9YQR2Y5oAPku8UfFLwqf8VNs4fvFo9Zcc",
  "key33": "41hUi6EL8YRCNezc4enk2pjhDXhwyZASwU93kVkLas3qkL71aX7Ew7u4RAmwsyi5piUWahdEQbdb3mRMC29qiK7C",
  "key34": "4ZYxwg4FF1krUJ23Gcwi5UeEKShiMbp1tW5L3bafupdxsYiu97cKNaXW9Ny9taBdFeJBr52Dyf4xJBqPNvqFc2GK",
  "key35": "Z1Q4Aor9UeKiodLBRWDAzidCLgJbcZtUhcpc7rmQYG2712tqY6eYkRsXuA1cD8PEyoXXYp3XpfaLQCeEKoRSEfj",
  "key36": "58PouKgfioexzVdZApHSmRcrv5sW7qcUUu479iVesgu4Uj5KmNddTJ76WnAWFXmHQbMBSiwF8JZnK8dNvFbWD8vT",
  "key37": "2YYr5ALnamUGyqmRa16AMyX31KPnhuSvbWiLQHwyhws6iJVayus8GYetgiizpmSwdx6znXxQgo7oH6ttE4fvKAAs",
  "key38": "2ogxpnav7E3sh1qga7C4GuAYAKqnLPgwHNBdAsWacEJfDw84RHU4QKRddmKko1vcJQHLcx3pvR6ywVyixAeSfPGw",
  "key39": "5EWFTFAzFMpmeC47jkVfFR3h1NY53XdWNh45Py1LoeP37HcTTtvxgkCD43Zdtq5hcjYh2Up42z87F8oqvWnWgfUT",
  "key40": "4PeyUFvcRTBMezr7cQo2gZ7nw1fJuwTn8ioRSYwnE3ahhswvyeE2tsPUP3juAVwbwe2zYcVS9qyC8UPx7cdDNYhE",
  "key41": "3DsqX7pJpU6yMwrp1fCYGPwrTRabBvim7DsYcjpWwnjBApLx3BzhP9rn92ruUHJWgRvLKmicfKUzbJ1cEAxhHzaE",
  "key42": "2LjXxwtWcPQyQKq1WapjxsBzCHmR1aH4JfLewKv33ZzCgbndG6wTKBRCM3v86zo73RwqKwqsEJHYjx1etPFzTKQm"
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
