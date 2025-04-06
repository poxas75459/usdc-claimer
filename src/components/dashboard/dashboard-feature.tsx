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
    "3ijiQCcarZNhLdcmWdLojpGzWpnrJJNLeMgUUqZSBsNdRaUjdS6TVgXHpMiX6T1ivoiT83ZnzBP81fXkm4tefUGJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62xQvErKWsJH8EXTFqf9EougFiiNxvQMYfx79boKearzomeGfoshGkCzwtvaQhRoSuHuUAxDPwUtVvTsxYmdkyWU",
  "key1": "pDJyYdy4meFhWGu13cfN9z75cKKqGVhiE9ui6hRA5xjwU79EvDHNr8nxd9ivkFvWZM4ZSm8t5Q4Z56GbuNwG5wR",
  "key2": "44bnNEGMP84PCL4vNGBSmMhcATWVS4GvpywtKrH4gTcR97G8NiZ8EjZQhBQvJ1LSmtrSCUndW5HtBaW7UUFoAvND",
  "key3": "4Av9SFAbsyFFGnZLaoLmSNtY8HnWgv7Puh6pdQJ6PA9tibeT3uyVcfrYBZBdHhuTQNicFDrcnNvWUgsP9Yu3Drux",
  "key4": "2HtrPHi1ceqrZKhP8kbbQwxhCPRVGoB7weBVDpticaBCXaYZuQrsCqV1BvvdteDU9E4z2Zch8LGwiXRMcDSmUw1V",
  "key5": "65b5TjJzn7MNisu43hy8Fn2x11TceJFmUbrBen5hbq25TPRxsCFyrAVcHHg1ztNDpDMHKtFPpMcg3kMNSrh4Xztm",
  "key6": "32F3UZQuMAtgPU1Dz9PLaqjeFkzTNTeL7WwhrtnzLEPwqkzWEPhkrJRUSmBsV5m2ucWnPHzx23aQGejdPcS4Pav2",
  "key7": "2SzA8phUN1UyjeHkrQKUnxFWKytUDXusDFFooNJMAeqtcfUEkuszrU4hjShTGzT3zoX4apSeqpwrQJDoaDqM2PYM",
  "key8": "2K6DqSF8FHUBMaHnasp8PKQ78aw2WCmu8rcRLvnwTgV4FRcNVVNJnchXVF1Pjwj9Mde6GDYdVoCGvUQYg2f6u7g2",
  "key9": "48nfvdX4Q3WQU7rEz8KjpQPvZyMotSesbFFtNk78H6M3SFVZuFV3oVZC4N6u3RJmPZFTo9D6T7gNtgni4jaWZg6d",
  "key10": "4VHfX2stR51NDF2RAS4zf5J3QPkEdd8VKs32AkPCAgqFBX4egzKCxuCdoraw19YMqvnTy2HDumncBLtgmH3CvYDU",
  "key11": "3X3RNFjtk1fipSFyaWgBFX3u7PFyXjavpQzsjLAJQLh7oR3K1kYbzuxHLBqAeX2xJaLL66i8fgYAUN7EXziMiCVP",
  "key12": "YR57YL8zi6RWyyjCbKa92DW6a5eUwnGxVAP1NvfpQbzMiuig6E7FygnEvg2FbBvGhGfaFRJKAV418EbZgJyFWsS",
  "key13": "2PwzF8p6c76GDZkfk2pdTBctZmNcejfRJSc9YghoQ7uqsK1RPU6ctyB25vLKnDCzWqSyCMpwA4BEu8o9c4e8tVDi",
  "key14": "xa5jkrLPbpEj8YDvT3Y9RwdS88fgvpSgVJLUFgfFnaayUoeYJ3L7ofuWkoDWwNbucTBF2KjngBLas89vFw6v8xb",
  "key15": "2MpW2Z3BTuB8oQmLTDfAVAnJBbZhEK3M2U4ZVkeWAUeTd9ds2vEHCVpeXVqTN6RGX8VCPTsgErNntmfsYFGkr6Y5",
  "key16": "2rLjSNFwsKMqkynCSz2DRVBHUiN2nskJkUSVWm8D5wskWRKEYbnsZTDHpCUx4ZqZchjCD3HuQzKABRKoDwhTpsrw",
  "key17": "4xcS1h7yvbX25sMh8XAsGXNwEHZA9mpzFzwVuSyy1FT5Mv4dqE1VxWGUuZDe5rRnhYtyhgnD5USiptHWCnBV7gcQ",
  "key18": "61kHAc26sZdn1TmuWQ5DcRQBDfxYPSknRCaDqmzBZaLYr2UHuHGtzSxstEDX8w9bfdCQ9GWaS44LuRFiN8uHHfCs",
  "key19": "4ikppz72Hfq3LRzCvBKLZXbVLofkgqkUuReBKPzmPB3SR1KsNHmAtRmxY2ehoyzUgciAL1xrn6xxC1NH7Bkyc4rz",
  "key20": "3r5238LQbC58JPciEBWybXXDMaENH9KcpVod1YYFX8kn47Au2rEqii5xoM1k1H7cz9T6HJY7EoYUdgy8baAsDFsa",
  "key21": "A9Rzs8QSV6Ra6wNgBffWoacqfCZUBMJhfE6YynNMcXGRHgCj5N13TQymvPTnrpT8f8n2YcjxTwQMMYLPvywHMj6",
  "key22": "247iWQk5qCSfQLkY7NRHta2siXDuQ5zYmWS6yT9rMNsCxNZ3qrDwBdJa7r55Wka1RgeNydb9M7hCfoukevZfKVf4",
  "key23": "2VvhEFqZQsbQfbFW7edvR7aQyenFyvgG2tJJYo6Uz8aXMrrELnAFUzrzFrYpj1eaepRJPXJRTnFRFL5AB5fMV1qR",
  "key24": "4kqfav8S2ePWvPQrtPGwX2xuGWUjJ9NnCFzDhALbyprdSF8ERTFQYq8qXmYDehd6sjQQmckSigeKqwVjKgRB8ZMe",
  "key25": "4D2FGDygB6wXg27do825XAmjVDUsTYXPYosayx3BxYfZ3GmFNgtiboNdndvJVuS1Yygrh119P3DimVFn7rH9rKus",
  "key26": "5DFTCxH7BBJW66LoSS8MRm2soFYefimUoC2vM3Nh9o9iXVBcyPcEo6zKetmt1is295V7ujwADniLDDnWtBiiCmDz",
  "key27": "Mi5fFi1qJC6puoAgf9EMs4dbLEpZD12sGNdA7B9NYhxya9iymqprRgRJTHVBPaF13NQdP4YJoDvjyZfn3y423ke",
  "key28": "2S2vxeCcNmcRHQVQNYYqb1bzD2X94bzsS9YHyuF721XeMETRUEVHBTjW4vgBVpDm5xVUUt6KXHMHmhYvtdEj5TyS",
  "key29": "3VAZagX1xcCXVKgQEaAmSn7zY23QA4Q5LWGYh4QjHgzBgh2DX86fdnVNYBrVHbEBVB9bYEZXx8pLSBnfXyryp37T",
  "key30": "4D6cMm8yeSdswmxs9GTEt2k3qD4rvXcDjsbTiDUx1eSCihxvhdh3KysixPMGgbwgCpXjPptfB4aXaNg4SZN3GSor",
  "key31": "2ZnBCTmyxcHSNrSrgCqZ2mHCoriQHzu4QzcsHyBfQyFGbWGDowFx5gKbocJpGaAjsnqPUaFArNEKc5FVUJz9YTka",
  "key32": "5Lemj1J1tzkzLGFdtFqaWja9eZZxn4V4MYwhxhTs4sqkdwgxz7wKiwrXzquFJqAnRxLD5xz6nK49ftew1cvtjeHm",
  "key33": "2omWL8WhiiNm6EVZjzKQKs3wZpoYZ6D6KZncn3fKnt93JgcuNeTpg4W7t1GwrS9ciWdaehAC9mxRLLE3tHdwX73M",
  "key34": "2UHE2Dn1bxi6UyUzoyiggssKbzGKHMVzEbtDJRieoe58xYoUzuZfSHQ4BAjWxTfdMpgTQMcvjtWzdGCqUZdaowns",
  "key35": "23aM4rECV4MY6eJMAfxcoBzvHQ98wgUnnG6nQsXoenbRban9Usq4avYhSJXBX1NYXqByAuGMsKJixdRa85VaebQj",
  "key36": "5SpMpRQQLZoEsiAiwW7CUBdpszHZwb3F65h6C2dWRtH9XyuXnUjHJsbcFVXia58JJi3AHdygJYKW4BwXE7pDwdGF",
  "key37": "5j4Z2WfRAqnRDS2YEwt3uQYh2EdG7CNJG3po8eYVEG9bj6USrcPrvivqX8oJG9ptj87VDTrPxDVRcUJZfz6sKZJG",
  "key38": "4EvgGEfEs89hm3NFihZEkaXMV2Sn5L1euwqxUP7hzYNKsoAzAmCjJPH7rpbtPjaCMpDV5cRBkwdcaBgWqRYQXiou"
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
