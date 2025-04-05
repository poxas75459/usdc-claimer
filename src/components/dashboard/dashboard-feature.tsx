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
    "AKW5ZVJNALvSswMzX7F2Pb2792U3qCf2Dcj1tVuRhMEsHW1RqSrz2ozPVbuP2hJPDxEgVwQf4Kj3VgrpgNtszrt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5esd9pGaeBVUaVhhCQz4V5zVY8Jj2Dg8hsqa7qBtoykm1SuhtuCqf9hgF486uZhSm1VDzgXXSopVsaKKQ3nnr3Xk",
  "key1": "47J2dFffmBwaUxoUvR56iBPawQEsE3hUmyT892Ctc4c1HFCFm8V6dXVTZRQLTLYpTt3SV9adCi8miE2GXbS75Rb8",
  "key2": "3G2jo8nYsFCt2ueDhM1Z4YFJyNBKjqTR1udmyYVz1G8JqQTWBHBjRuiV4MHLTiE2Vr3DAG3qcPLf1uUgqC195kUe",
  "key3": "2ntThFAiA3DshP3ZTkCsvooft885iLrNpXAqEDQedNbGDT4ma7AVKrLJoZa7VQUJy6KFttAGZhoa5MF3y3K5PTxJ",
  "key4": "2oMUbjGUUMsrFQ933UYoe6m3Nh2NDSKMp6tEfpRScG6Yxt747xasrV9phVnUsgS7yWjE97Cak41pQFqgsPnWQbkj",
  "key5": "9XV6SLCJPNgKTGhkxarGW46eYvw9PTjLhx8Gw9PpCbeN6upcTrn6NUSdGJKcCW64vxL9bgmajKpJKe86mbwBXQ4",
  "key6": "5xmimjjdajwET2yNP142KyKPTSjF5i1RnSUL8sbVXq61vhigRgQgqzosSvVgQY5Bxaq5uJU9b4QGpEVsoqJnSWjJ",
  "key7": "kAVDWKMFmpTsrJdS3DtgRMk6WBAML8w27NUB8eKjzU9pLpkqT75QdFFrN16yg8ibkoQ8yNDvkHZLKxsAxozoCpQ",
  "key8": "4zo4uC9h9MQQedaDH6WGcaEJB1Au2T8dMiofy1kBBrbi68pemSSTnAHoURQVPS2q8FpsBbcYSk5EVawREEsBPBLR",
  "key9": "15rNTeWVRRi6515MNCMZhdBxZyjHsGU4ftH1V6ESRNbCNxuBHh1VNN1dBBdZr8339ftrLRchHzEnK9p7pT7Vg5E",
  "key10": "4RmcbzVw6BbTcSo1L1kdnyo1upbj4BogvDbefGKcAb1CD6R4vV8JJmx6J8Ym58GkWMq2hngWhXxXoZVSCyLjNQb8",
  "key11": "2Ke466N7gv4uuFpF5nNmaxAH7Ud27rPgzzQR11iofE6fasBXbkitLAe81hieBiYZWdcsMdAAh59bgJvsfEHtHogk",
  "key12": "2wsnYBQz4qAZAPzEE3PkjzcHAcSihkD1hU5z7BujQZ7Bv6PAWW8PpLGeeEBhSpTwZrsgUNyUCepjvfmkRUDsqR8e",
  "key13": "3BotXiEgJMq8MEXKeGKcrbxuC5pgWzbyhtGLUN7hqppqH9WEG3LKTf4mMPbiWJLDFE2Pr9FxQG7cGwbLN8zj1CwT",
  "key14": "2FHfJt3YbdCAw16isToE29iwsPLhs4aRkJcJmwPTY3xFceqZ7BQgPKuM4megm8KXXgpAewj6ckoFuSjiqNitPxKP",
  "key15": "2H3vBk3wrNgaVF4Jwf3fiPmFKwkWm8YFK3K7rEbgu37PYtXrY2cDccPyrN37wULvxVAZZwnEzqiu6KVRiLekFq7t",
  "key16": "5FTVswLkciZeCyCVd7vHezSA3RSfbeWVwYw8CB31QzPEALdnzyqaqRN5hWw5US9acX5wyxJmb1cpYgecrpkkWkqo",
  "key17": "26ZALJLLpqoZToFuNahA4SekmQuwA27awtgx8NBxWPVxQjatRDcvGLu59Zs9fgmH1FkQGvRuwphPPvfyAkNSFzxg",
  "key18": "25wnNyZQp94WEAHzrjQGbda6ZEXz1eWhWoWzoJfUHzbneU8Pip34FCUaGTSvjeYdZgZ2KwZuQPMHYzXCCmUFmg5D",
  "key19": "9E7ik7vaXFxFb6y9n4Xdg24fpxtxAahuNqMfPSSGViKk3xQEkTiESdZWuMrHnagVoBoVmFDJX1a9kjxRx8CA8F1",
  "key20": "3AgrggM9XEuCTNkZCfX8GcS7XGhhAV8N2amWz1Tkd39wXvK8z2bkwtQ3wXLQChVmxfdXV3mQgefEx3HFWnDvJzdJ",
  "key21": "EjVQKAH5qfthRNwiGhGHNgsbc8zcJkKv8KKQ8oLJDVNY8Wrn5TobX8d5wFM86jyGAxNWndhth3yZPeez8LeJd9o",
  "key22": "4UQSunDjtZ7NDaQmZP3GewQvxwaQU4H6ynXN5g8dt7rXNeswAvNTMyB1bdXXs35ewYP7HQHEL5DWajRTz38YP7hQ",
  "key23": "67pB5weJtomwK99EvH5oXBYG4ATPRPkmBqcnyVci96uBjNr1MgnkC6N34uJkb2anYctwZZhWz68LQ9NNGUtN3jv1",
  "key24": "5pdbACCM7JBDh12DBJ4cLq8tPcC6tGbNQKYcgebZtGL5FVriGsYKnZCaC5JoCv8LHozUfpjvQ7Z7BH5K9iJfAF6n",
  "key25": "2EmU3E4ULAtM8JeVGKjvqqsdE7GZNdc7mRtCa5btTTtNQxzwnNZPBTijJCvyxvxacLS3A9wX6jVREU6xCCmcuQeJ",
  "key26": "5CJkG2ovVvJpPZaRScCvNBteEhxzVmRdHBnem3Khh8WfTzGsSgADhUZcDSECt5dvcJmcdjtMuDwcETSnTgwqbdZE",
  "key27": "575w3dU5TTdCnvFCEcb7XyvqRm4RCX42CzEUufBN9bSZErqEx5w2kG2fARRxtLR7PunAFsVPjuTUJyCCCMbk69ws",
  "key28": "5NEPPFEx5FfPbXxLiNQ4JMKTzJafFmsPeXkXu2N4G3wFuS2pnYoeZcDoCqiFiwMvgQzv55vkq2seGghM1rf1BdCg",
  "key29": "21YMjgezY7QXKfF2E4Q7tGwLm9DqebgdtXSkKoP4yChZi8unxpfBtUnVna6vLmmoZGCDhGjJuda9eHt25xH8fALN",
  "key30": "3DsG2uWBx3p1Cz7dUiwpRfFx2PaXRV8EuHiaycigNuLC7d74xF8a67di8jh51A8TkavbeP8TDoZAMT3HsR6YGroM",
  "key31": "3nLeMwhWEUixSygFwKLGsjADA5rkPQb5WwHHGvPEv9mQJTHBD3vNFkwfKwBydWTpYGFWPgwDtJgWwUmaGJfDJaUN",
  "key32": "58cT2erbGw3DdmbWTYy1c2VZUZbwxKCYHUun6oC7GTpgseEnzMmSdvLE5rftGUyC1Fsy9mMyvUk4ajCNyJPjBnVb",
  "key33": "5XEPXVen317rKaD5GUZcLTkSnrkUyGHUvguKcj4SnS8JsM4rSPjiMsyZsrTxV6TGoxHFDNWVr9TdczGuz37jtNeD",
  "key34": "3woPwP8xqv7d7EAnFEfDVNJakcBesUhyFDb3vdnKXcjBq2mnsSgAkFTbRZk5oFBwHZGEexNJNCphFNNEhR4U4zgs",
  "key35": "43tvv1xwNvV61EW52NqpsYGAhiWja3XhZumGDNUEXJmh8mj29gwB7TngWm5bddHNd1V5iVevdQRxftwpDdeHDk8J",
  "key36": "sqqgEzoiWaJ5XDzguHVsE8W9gxk4ZQCacenTqbBU1VmEiB6TZajhux4jgrt5REDxRiv684PgqWUSyFCV5p55kh1",
  "key37": "2Rp4dQvpxTkwgGbTS5CtkK2SgZqmoPdBofg13nCYxozm6zNGV8iQG2sF9MXzpyGKos4gfeWTvr9VUw1ZH2FKBPjb",
  "key38": "66tuYJRb4CuMsWLFNTsXpdaMQdSdt5Vupy9mGTYyU8dwgRLAaC4nvYunUf2n9KreK2ahBtWP3bLboLU7rh7Hb7H9",
  "key39": "u9rdv3pyDx7BEBo94Auu7577U1dWnCc3aot2Z9qTrACVmoehoZ7pEf9r4y13N3nG6LLg3w7gRfDFNNgqwL5hA1R",
  "key40": "4NFdLrA7FbzovcYBtzEH2qDNmmn8C2Buco73xip4sAon3U1ZmGiw3hJb18A1vK3VtE5RwRQyju5xaEbM7tAgvBZG",
  "key41": "3cnUSEBsDSHJNTScKLwFWE66WET6gjZu3ZqpDJPVvJEukdXcpwSxwfufr6sXdPqSbexmrgpHuAxXS52JUB5qXV58",
  "key42": "2ent3xNExkmuNi4gk4fAvNcMLsStYqwHoqwskQEnGPFPDSzRQHZ76S7RoAb7nkQEhgSA7SWo3JmV4xLRDanSz8sx"
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
