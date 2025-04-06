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
    "3WWqEkNzz9XvJc7osxZkg9vf16mWBjc3Ckv2fdydhjmNfauKTkgZFTog3icTPq9cNrnezg8gdFj8H2ra4BL8eKLH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62bp7C2ke6X9oq7BhRx4NHeDoXKBiRZu9ytJLGMcUVCZaEdjYvqNDwhLaeQ4T1zk3uaJCm9uuCwJs9LdsxZyC5vE",
  "key1": "33DWywyf9UXpajNf8WLq6bPbGExc94nMWk38sP2ARDuovK2eMsz2Y2SbRg6KDLY6AygHbWVPneVY2rgUtJRWtfqA",
  "key2": "266QRGJFykBvsxuX3jc1D97KEGrKP72Zn8qjaijL5JUKLezWLChDfCDRsUiMsmFewUXEQo65QmGQouuNbMPhzKaG",
  "key3": "3zhFVZGnakQpw3Gywu7ES5qHDkEBW2ekCeJeCPmbXLjahktZtpHNPWQDm4c789guYnLiNS7fLGGJhBTmXH44ZaQX",
  "key4": "5KLq4vCz7AeYcdUkKVp91nMjU8Ed8nDUw9yCHqSn89cT5pdY7Mn43FgedE63g7xskeneEtgx15Cvcsz8TGLw1oxv",
  "key5": "68VfscRYrMbqVWe5nSH7eH2hmwQqL7xRcRJcfG5oC4x3CDVYjD1gYEogJjdBf9HSEUGSnimr56JkZZe29spAe8A",
  "key6": "4ryKEEAPw6Fv3hjvRR9zVVYgwvXz68inspat4vGRVyKhJh32tEPjb23ptWZsbyeX95VwexdsonojgER5YdLGop1o",
  "key7": "4CXYujJ3zHniY4uQVMkcFZbKgeXggbwKZVQF169i7ra4q8yvjtqmiUx6duoQQ6MwbuV3CnpJPttZZMjJAjgncmhN",
  "key8": "2wjyQTod8fs2LYv1VAHMx6svwSHYiZadDCMoL928hN8Yo2AxmfYT8YaW4WWm1tkAmyinDrhbTzXVNVfuk5NKvjrs",
  "key9": "5j4sRyyEZuNT9BjtQakFK4B1bEMcq5g3wBjH4BpgxPAddGTH6h7QVarpLDGfgztQ15vLZB5RAU1kFsBcsTTGAhdM",
  "key10": "4chZ7KVyXVVSdpRHjhXcfx73D636pUqVNZg4AxAhrBstG6qgN8pNfEct4hk3ibCJBzaeNjRRd8BGk1XSuRgAM845",
  "key11": "4LhHF24HDSRco6iphNqqDDH2sar8KZT9DDEsLtghde1GEG3xzmc9vJHRVERTXxtSEzikDwUpipbXLrR42P9ViHuj",
  "key12": "51GnBrEa4aNyPhRykQwDRQ9CENugU2mJWosbVEqrAaa9ZMHtFEKUaa3EtenG794SVo7owQYpAKPFGDQYCVNdcUxW",
  "key13": "jyuZK4swSQyb3tgkCVdBVyvgE2VRvVTWwa1xhoWwS1FnUMayLDxUvyseBisaN5AG4KGFoyhYHeLqWxU7vyTEgZ4",
  "key14": "fWx7Tgd2pCMhFUfrngoXNEcPno5iHfPBhJHQhNBx8LJmn9NhGPmWpwzRzFm7EpyQv99a8V8b6uWTomNfynK6WzB",
  "key15": "3FogkzQTD4teGH6yHai5e68FkY1Q21iXq8eQ3FAHtum8qMFt7uAQpDcwVMxwW1StbZ9KTddbN32zFiWRAtspYbQT",
  "key16": "dNKDZMHnnLHFPmp5iuh1YbM3PD5fqmh9rJ7tCLnJeiTHu4Hv8qNR2hXBnooGk9jp9yQRQDaxv6SUtJipGydrJvg",
  "key17": "4oGoMPs26pdvD7na8RMgkgWMf7UL8LUmJdG3223Xi7krY4cprF6t7tApiSL8VGs7UnEXkjsviQ3Pq7p5zb2RoCpF",
  "key18": "2CRiBpKvUSftZNHQ6Ubj14pDYDmCNWufXKv6rX2r7MJJBa9gDpDnLUc1PgbNFRuuPfCsuHbUy958mDFAhgG1YQi",
  "key19": "3zYYmNQKk4ngpMx8qm8KC9viEv5BW5rtz4R755NJ1822H2CwD22VxXSzJRWifFHgKtBi8mPn59mbJaVUZQN7jwmR",
  "key20": "c9A47fPkG3mg1MoZ9CvQvuoRsoJqgbyMNL6rvY7zpTufb5RcgtRVjrnqEtsPN3YRGTqLbKD7fJbRojdBxm9vVRu",
  "key21": "2zuEhYXGqWwqLACq1HWkS7qbgAPhaEF7Wzg8vwDoWnBrCsRt72Cu9mLkttcwBBFazdbQh6ivg9vec2ZmeU54BRF5",
  "key22": "4vqeAmidPmiyPSBzRScznFxS5VseX7Bix1hc4Ki79cpE559iaxkR446WYMZhA5vTZWHeYDo2edjqrqLjhv3A62Bk",
  "key23": "5LUKgJtfZ5RTaZ85TWkkaJk7S7upRA2KMGSfCpAGuGXRX85HiCVaqTsh9PeaxYWGbgPgYtTM8RN3gwwRn8aFZZ6b",
  "key24": "3QGmEK8KhjNV9HwuLkgUBS6riZj3DXa7r9NPLXdFwKfSSZXCqhGTEwPJfuThJVGYwCymgVrK1PEXEYHGQC1XU9t6",
  "key25": "5yCJ23Hqa7TRRySpzK1buhdwwkkJUXcFRMe8M5aKMgfBmgprLWLcmjKVRaWZ9mKiYX88oSqnm94WNNCfGpxf6rWn",
  "key26": "2jgxw1b2oYezft18j9tz6S1CexF2SsVcFwQnvGJZtVtyd1b4TVmABFRV6y56y1iJkHwseomAvGfuBXnKY21Cn8R2",
  "key27": "28PZsR88TXe7rt5urLot9xJc5k7QMuV4bfLUdRLF1E6M9ugnnQqFxW3wGTverSs9mR7dgPeX3g1vMGfUfYDeeGPf",
  "key28": "5f1JiwbN56LoWpVpVPHDmW7gFDCnUssRYS64FKK9Zw9JGPhdUbiRU9ArL5az4sNkQzGkzUxJyeW3GVUjuNKuqX2q",
  "key29": "4goW1uzn9zH2zZhYXPG6QHnkLtEsUR4fyw3fJ2F1kedPaTmcKkJZNmprgEce3QVSZuZhvyEM6TH9VY9kU4AHvUV3",
  "key30": "5SWYa5XsFZ6yr1HEzJpuDxG9Gjtm1qoDp9qK8DexrVCow1rKUQata6uytk8d4cBUJuYATsuYfqnyRmRnfdSt4eFe",
  "key31": "3UzJ6T4LSfkrBSMrcVpjn4axeUYRRiNCgr34CQvfquk5JGTDHYB3oT1ETYZHDDh2X9AxPBhSrRyWNv71DLbYjCUD",
  "key32": "2HtJZqbs6TMGYNXbTaWoHT7MfWAQbp3DZApciURmaxTLdaQnJpXPN6CnR9YjCczDDQTQx1TTdZtBmMgLgJfzzM3U",
  "key33": "5hmqgMbmSFNnCfVQCU3GH9KeTaNtWdWtPfRyyikPakQsUwAzUDimLo2i7qpU6VD41M3PmHTn1ApoMW4u8ZPncSeG",
  "key34": "wRNz7bU36ApTukcYcWER7576UKQ6ePxQwJ6LNTCySuXx4ZpAVL2xEMotAXC5kkjUmLE6KSMpiY2NtLrnirzGTqU",
  "key35": "21ii8GnSmx94r4WXjxqUYqP7nEXDa41Y8ZJLUD9sBYGJFAz1TwUtyetfAK1CcDc9uXdrbmm45wjQvwQFyXEMkVYs",
  "key36": "34J7ThYTsDFfwULCAQ8CaBHYifTspY9A2NJ6uCEPgZqWNX8td54zQsA3JRZTcq3B4GKYieHWWQ2apNqpERtMC4AP",
  "key37": "k2xPRiUe9FmKt6wok3MW6XgjYgBc3XEj6a4VQxiH8rZPuYdNgBmaNRo7yjygSBDAmy6TpyXWFzX5HebVXfmZcoo",
  "key38": "25vnPdMTRvV4D6cRnbfNJFB4LBPSDDF22T3hjNQa5A2uHeNAmqoSmazQAB4C2ihvx5XiQaLP7gZ3CKgA57c96Tx5",
  "key39": "2enBaDCcFNcLcTTbwLYJXdeTQWtnPuTpoJJ96ESGmFxrbPzRaNFx8eZ4UGamYPkP13T8Y5vpBz6Lf5gWY8YoztGn"
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
