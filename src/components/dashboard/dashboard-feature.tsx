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
    "3W9gJXyx1myGb1V6gE7iXbtbm4UzTrcgRPC2v5HMGhiTjJ2DvqQZ7nzAiCUsfsd8PcY4JcqrW4ZaKoRNNpfugqAN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YjLfBFDw2CLevJcw7titWFmzxVSoFG6tW8HnUaRofkBbK3Qf4XFPjHdMbxabkj3aezce6srK2aNW1M4NPWUFEVE",
  "key1": "4icwCZBMxGv4qHAbFb6r7ky59hLw3oa9GHeR767oj7hahkhPLc64EJ5ZrjREbVJY89DfDmG4mzLHzpfSbqfKGNXJ",
  "key2": "4TcpCxH6WCAz2zTWgBptBdtMKVGpav2nf8SHpkThnX1rjgbrRna6Q2ReukWX8RgmfEkG926qzVNarLuiHRRUshod",
  "key3": "3BrebDJuweR9xRHAHayPzZoCSFpzBSEBCtk4sVp5MzrRmRsAPexXmHdBUUYG76sr7Bp94zbqxh1JdTdFBsiHdZLS",
  "key4": "5dTrT1Dq19bvpuMr2HKG35i5g4dysknywqqCudHDGV5hM5EmbHh8NnwifeysndWfPsbVr15tcjD1rg2mn63ggYsP",
  "key5": "43LeBrWXKgGotaeHDsXaNW6NPA9PgEKB4aFMLrKg5XUVjb9JaUhQU8gToWZTTVBKrrwX7DCsHtuqHsw33FpcuDLt",
  "key6": "47p5fwwKMwncZaiuuMKjuMit2z1Nxn8Q53sLmkXUEJsnpBNYASvJZwwUWuLQ1N5uE6yAfGajVY9mGuW5Hao5v1w4",
  "key7": "5o6pcvcYPFGg931wB9NdWJbDfrwZRYKQZQumcZKypGpajNHj2RYVXLPKJZgAfXKWRxkP5zZVBERGFGU5RTH6MsQc",
  "key8": "RQfQffKLsnLh1DbozzoiC4zqgftGmi8R6yDV3PN5GeAW5p3CpgMBiqFV5Ww9J7Rkdd59WaB4hmahuBmUTvrh6gr",
  "key9": "4RDBVvajkLnymQKyu5JQeKaXBNEaw67RiZ2g1s1p3TpBJ4WRyAQvLAkjexiNjZvfsfzN9VQWPSFPiejqAkqY8JSD",
  "key10": "38xeWznrhSnWPMiNheAu6KL86HTxhoHGkH1nciScWLBXayuKuGZzJyHbC219NDfPPKY1yn7Ufd5mSsFnJ5S5u3ue",
  "key11": "3uyebMWFa4tLdZfJcnNSzSK2pZaQa7kBPpgGU1tfnDcJoSxMkgxhDefn8zBE4Nj5QNMHe2bA1HX71cSqZenhggVc",
  "key12": "58JVPWMnmYVuJpyrr5TZpJdJr3NdZbyBvhX1sL4vRpHFjtDadoxvgJPnQQHaxGAoDKafBhr8eaQXBGWggxa3uoze",
  "key13": "3sXAq9TqJi8Sw1VkUNjkSbPWnwhqheqxoT5YR8quLWmWwuBfjw8FfUceqJgYd9EM4yC1aBRgyDZgkirpAgYVDEWS",
  "key14": "2pFnQExXogphU6QVYXrM9xSPotMpjMpXyVySBeYTb9R1YbwwhEJBWboyR13dYRHGSy2MpPAwg89U7d3nTVp53KGw",
  "key15": "44YWwFn3D7PE6DCgnUSWDzxkY3CUpVjFy1EcC7BAj5DGksxqM27eEj6mdF6jwwD74bFQ2Wvhxb91JJm8QoAwSY3X",
  "key16": "3xE4unvgG88PSSYX1GmoVPcTCQVrjkLC3M3wK3nqSzb8b43fyxXMZXhK8cJUrxvBuGWJhMESjWMDaYKK5DU1Rwbb",
  "key17": "123dWwHj8SQ1oGnxYxLzMU3Stb4EY1QRVgB5Hg7jfBEjDsNJFTBzzNB3HKBLBnocGwwXA9A8sP67XBTQsf3AQ6ZM",
  "key18": "2jYgGv8wk4jSPJAtAtpGz1HeRiBnMnJ7kfv3dwyY4rVgTzsYRbMdsEdtE26uzk6qo3yAMyodmGiFWCpRPKmf3unX",
  "key19": "3DMLmU2BjpB1seyJ5FgBC4peBL1sc3SrVvURMQ2yKMXGUBt7P7hsbe5UubVjdaf9LYCFHpVPZZVakP3q4bS5jMqB",
  "key20": "26aVXJ35PdpqdvbMF4F69axwLFS4Kq22vkg1iseRHV5PWTv6RH5rJK1NAGGrEzty9832TEmWxP5kQ4hu1MxRaRYF",
  "key21": "3se5BQj5JM9rJ9R7VonhdbNreQ9VQyBVGCLx8VowrfcjqwPNtwbJauc7AADAw62vnxtk1ggYnAqiBqh6gTUgmg43",
  "key22": "qMUfzRsWQNE1CAuQnfttLy3nbaszapLPtwcaaYXErSMA6h67feHptfe9F7KTxFaKEmJQVrKqwk2vF1i7EPm5p1W",
  "key23": "3DjTwetY6pvBYWnJWQi9ZxRFoNduUCNTeq7VQLUMvpd2g69rQqcx9URkEQok5NuDGz2w3PkGikb1xSfQk7cpmWKm",
  "key24": "1mbMQfXrdDGLF8N4uYrRFgcsqQQ68AaAcvJd8vxA3PTPuhSMvzqpQAKDsv411reD941RqtB9XPVNspAw9vVX2xv",
  "key25": "4rgZC9vY9M8NcFogVZi1y8NSj77aQ5QtqvAfrAzujq62gcuAUHQ8SVgQY73BFPpDXs5NoNxgdf9CG9x2u9d6HoJy",
  "key26": "4aySGpfzsDhuQD1rhCouoQEDtGAz8o7vgRWmeP9zBWHBvnvqPHbYV5EU9UnyMi4TAffagnYHiUjNZ1uejwuoouT6",
  "key27": "GAzrdjz2xHCM2J67FEvf5gcUfYbAzhT6uQpNeaKtPRweKqWdeBdoC2evE4CaHde53D8ouQ4pYQ58iiG9KjgufDB",
  "key28": "4QBwXmYQXqrnnnpFJuhuTLKc8XbzMpTtgmshkvJNsckCTSM5zVpgeouWeSKekQykxdRvKKoc6AMmNCB1ToGykEPd",
  "key29": "k6DaznRnozGoBXaPR9URj6GHPtY9DFwHgRnYqNTaMnkvMcCaKjawjguUMaLvHmx18K6TDL8WfRwUVfKnjDywJJ1",
  "key30": "3UyukKzsASao5ak4ZvHr41hgCeTJ1fjqXHz921jsGGiaDXhKoAbUT9m5A3xY6tLw5G8c4Hb6Bw6j2uvUcsJqnmeL",
  "key31": "QtT81ASW6BqmUJrcSBV1DTDSYZSpSuXuLkSFHntWKyr4vrszdQsBDSJFF3mmrhv95hHWyg4a6zfmu7n1uwKNkaD",
  "key32": "2ZPVaJLL98UQ7TAs6YmLt558gAJFCac8hS2MidgxkFfFTJPS9mD8v1pfJRJgR2tQRAjjWPyVh2RqLY8uD3PQTuJD",
  "key33": "5kdWqDW1UZzQMfFsih781EBxTtRJCP93TswFjECt1J3zCfj7Qexf5ovbLpNx6GWpSNYZt9a1LwNsih3CrmzBT3Rx",
  "key34": "4ze6GdKhrMVdorycvZkKEPRgtAoCuVQyScZXrD6YCriQcV1Dm3NWce6sxdvtLRzN62pSQxAnR4eY7uf7V7TvScX5",
  "key35": "5fEm4fsJuphcD4ieaFG6t49GmST1EkZqtdkEYBQavWTr42JebkqDe1f9D74DdPve3u9SweNJj2wHBstr1v5cV7KG",
  "key36": "2wR2cRDwVfg7AGAx6o35btxgyhZuTsswNWVaCgFqS6qPypTsx1SaMfeZM3Fr3juSvodqfM5uCWpySYNpk2uELt1C",
  "key37": "3WQUyfgCRzvDkA34uo6kWWYViZPmkgcmuT4DTHLyytX7RsgoVTYCtm6qCemaRJhErvsMKoX1rBEJosFhrRqcdoDH",
  "key38": "21Mk6PcR4sieFw4CgHJPQ8tiYxCdFq6zgZ4t7VCC7w5cSnYzucS3CZMFjMP4DUw2fsbknE6TDEp1WrZCy5mV7hSV",
  "key39": "38qVbN4iwkJD8yosc3ZgzqmSXc8tw7EyZaGDXjpgWHKmAHAVhqsvr8Ew6SrFvHv5xESo4w9YAwdddghivjpViqez",
  "key40": "2QQzgnWcTDPmg5K35kQ876fVGYNQA8XUNbUB1M5hfztSbH7iSJQQbogQQ145a3oyGrJoox7AAd7NLiixY7sBxU6m",
  "key41": "33rwk8m8ey3oyigt5DXRkULFhXqwUqSBSBUe4BTrfRLdSW6LnZbfkoeS8VLkLprfRVML9z1EmBT28F58oj6rV3pb",
  "key42": "N8iD5VFRb8HGersDSZNwp5MQRicRmcryYdNpE5KdLLT4gmZHRTU68RNCw51TBkgxQpvThJo6EPXi9nZ1Y5DRrFS",
  "key43": "dDRnE6pc6BcCLA5N8skVXvhgkXiuDdRqjarTF7pqByS1C9yWiGtsHwdWU8aSNDQjfgEhB7Ap8X1eehBeoayfFqW",
  "key44": "27Ugev7F3xok1QPgz4sWAmxSgQDkPGkZWUsWJkhf1MdkxqTBKtKXjQAVznGQ7YhGZhynKdXD62UpjSckQgQM2oNH",
  "key45": "5CT1bBXErJ97bpzagDTq8STaqBjqbsp6HAyzjQ9x3EL86B2DSCGERFysBkRTHVyQ5aexrmiNnY1HjbfWNHt4xZe5",
  "key46": "4fLXDXuXPcrgPSLPJpaLE8kBZCzFxJBeJpTBVfHpHcRLHe5Ci8EUdGKytNfWxoSGfxTsEW8tHMBWweSRtzukuLxp"
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
