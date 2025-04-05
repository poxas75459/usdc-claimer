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
    "2rmkQmy1RadDX5fdjwreGiKTWdXN7VhEuKP33xzbN42YvTbvWGsnFitVAubx9qiD13zjXcR7k812giza3DiWbvtb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j9ULZpvikJhHxzSmc466Crci5TN8AXRBpnGLHPiMvMvuoneD879aaUAjrqNmfQfUb4x53N27y63yv8dc5eU3NJt",
  "key1": "2BL3qHKPojwLA6B7YjEgNeqgrsyMGXDLNjuKAeReBbocNyQfwc5AG11EBNPwYhuJ94bCucf4Un3BURGSEC1arFaZ",
  "key2": "4qKyj22MRYLLeMSbKfMTYeezR7BYkat2BmhRynkTQUkLPT9qjvdLWLVsEps2H3cryGjuXdSboUdydyYQVvgRjC4y",
  "key3": "YboqxMvAkGrKPR3kdJhbECRo9htivSoC1UwsM2ucPCf8TXxbdnwMX3LEf92NgK9DSKhvRKPXWNbiQsothw2ys2c",
  "key4": "4g1C3x97KoMwyor6yoVtDLDNy18TnhNxFsw2ZdJVGQmTPtRAJixrkBQ4H4571DVntpTr8Dc1gyw9oBQ8fsBNUv1B",
  "key5": "aPJJgyQRwtkmAFJXhLjfoQ4jcEdyUcGGXEz2wzFh8VdEt5jvwjQTB6Kvw4MLaDYB9G7DZiZ6gnMsHc2aRdZnGPw",
  "key6": "hxQ2SR84WR8FoRHpg4jk4HskxwF7QHfYUfTs4BPfqv8tDbnqBvYH3EWMZjomfVNgdX3u83tcuDmWxMH6qMDyWLP",
  "key7": "21yN2HnqpBUqXsBR7SAWNXCyZ6gEYrCsmaTvLtLJq11vNakayBKcQuBeP2Zq4GGToHo32N29m2ZZ8FM2znkiRcnT",
  "key8": "5WFnKDcfSzfuNzynrzamKKDPEqW8t3JED1AArKZhkvvQDMj7Yce2SU41VBZbqWh9Fjgo7kVM7zcahcDv4z8ixmZ3",
  "key9": "5uvP8FiwUtKLq5WjhxwVGZkqb8eEiM1PgDP6xhXvrd7uGJGR1TSTndGDjtFt6TQwCCto2iHMcuEA3sbpmmbVc9pd",
  "key10": "3pE7iMhaiDjybeXC7FYzpGmYdQXzDNcd4qGs6z9tf4AWvs376Rvs5B6SngqqY7q6AWYF2e4hz8wi6vkBnnNCUzAe",
  "key11": "4tZVF8djvGyejVtLPrWEbrEtLBYHodHTzacGHBFMVwhFTdEvxsDYSrkTugiErrz6Z1B4Siss1o7EDCRkEdAf72g1",
  "key12": "3RceVGqXbHv24Suuw757xZhf5zmHjh6hCUv88ZZnQVXJyzoF1J8YWqM2RLiqUnnTJ32ZBvUPGQpXHpBvrPX4aucu",
  "key13": "5g7yh4NvFR8Q1bbx4qFP6heNiQ8to4jGoX6Xz69PcbUSN4oUytHx1G1SjACuSJFRKnCxhvg1VF3SPR4HeRPpTFas",
  "key14": "21CVv8U9pSooE19urryMhiZwqFxTHoBQ6677hJm2h7wLQAXfjFru2vYyoJabep4Ckt3MXxqzs32pnBbETwVry1oF",
  "key15": "381pXbiFGcaYyJjWzfQYy5MWb3dHeHHKKJFwUCWHAUfMM8kgpQPMGa5oC3ENjTDD3TzkBCmhseHCfeJA51iayjw3",
  "key16": "sUtiQtQs3kJrxw5tncstCGTqxFtK4mAAYLveWVrahdyMCdqP38qoKacgt5QwH2MyFKmmRwUdoQaaXn5RjtoQmju",
  "key17": "41SGXHGxCFimV2YGwtUvWoTJs7yT7Mc9cwZyJs4Hs159H3kqF7GWetNexBwQvYRu3ej2oWnU9CKnq2FpHNrFhLh9",
  "key18": "4Jpg81Fxcj6spRaEFxTgjxcqiBH7EgFGz1ipMHgbhhpqvojvQD8ke6trRFFkKXj5KQ73T6dQgnmRvhymbsk84KFi",
  "key19": "2gcredXfDqSF79gNMvj9wufJztjDbqgkHCy3MdaW4Qao4GtqfunMtyLxgGSmWrFWwodLmhRcAru5cNr6Rmi6K2pS",
  "key20": "4rVavSiwcUXoDh9bDqccm1QQ2KP6vnfiBwsvhmGjzRjoXwozG2sKy6fXxw4jvgwBHmVDmx6XZfh1WYKLe6sfzFA9",
  "key21": "5nb7v6YU97U8akkZe1SsFhaqyfiqeERMuAi9pZzswY4ZdEb51MBh58FFjf2Sb67iGnLe3tdkbrsLUAGU43Kwn6U",
  "key22": "2MCbhfn1TpswBZSeXikuaFaw54Z5Af7NTTLQ13taJGWsZs21HWC3kQFm4MT4QQzLfN6QYJaajSKStjjKR6DHT7rk",
  "key23": "roYFfjMk3U1Et4exBwGnYpZnxeduDiXSrzXJdCvBmdgwLRYxuuxNTgpcQpgswbM4N4HtFTPU4Z9uRfJp4QG1hpQ",
  "key24": "zBaT58HRTekat3zoSTuTHhCMAPsomGwx1t8KBLZojZHiDvERTu41TvASXXWPRoMNWs7WNK7DCCoWdsz1GR7mLYf",
  "key25": "w7N8VoZhhp1A95bRQw4U3xEzLJYFPLzk6e9W4NKb9wjCadkgSZn4jgokieVJYLQTvY7eH3YR7ZfLUBeFrymS3ns",
  "key26": "4ewRYhg8UM67WYjbtCLJpaj5JVpiJr1cJ5ebN4SqUfHAVE62VSrz8dGai9NqwUrngbJEW2gfCatkXkhsVVrma3n5",
  "key27": "5Xk67LcBLmFVtn3Z24iJCXY34D85fBLLtzWZs1pMX6W4mKBUYL6VLpgSxsDXVVcqr72tZPwf7BUoFu1VSv6VKKgt",
  "key28": "uK9kxFaZj1tbDxv2m4fbvGnKo8ZwV49XX3w43iVyNt9C8P4ykHM1shdtg9gGtby4DrvPF2eJcggxuurMCaGLF1T",
  "key29": "3czTfXR79L7cnJJ64MDhcN1S926WPCE6dX38zcCAyQ32K7GeiGDZH9eQ6fKbMieK9pnhsZpFHT8Pq987y651tTPD",
  "key30": "eCX89ypapsPitRpz3EHUdjFHYhEpExA3pBQ9JbuiYdVU1dJSpgqJxpB9rHCxctSRQ5spzJwZDRGmnHDTgppEfkm",
  "key31": "3hdyRkqGrzw2jafU3sk6PcR4jDTAoGSBgUYTaUXturqE8U4Teph97yksugpNxTDAAdtbe97hgzkMUEfDUe7nrQ9h",
  "key32": "4F7fW6Zrd8hwZ1T5iw5mvH4AY9q24UE2vAk8BNbbPsZvtcMi1RykcV3F39CnfK6enSUJ2fVJhpSLMSxp1LQSUQr1",
  "key33": "3ZU9F5Zkpz6YzdwhzGDZNoMektQnGRxyTTzVAU3DUhMSHiLxHWHPs2Dnzdkm3zCh9ubspP2MtvXn3exvCAWuysXv",
  "key34": "46wiwiiUMnuHyKgiyQWi3M4kzohEDjsEwLUgD9WWdazt7sScj9X8a574mBrBe6W3zDTFV6FZeFmwSpAyKYvBznbx",
  "key35": "5x5gpDNd7ZtHTFoHYj24ykb2ufLiHfg6aCGxNesPJATDUw833WHt95iaKPfHkyHsD59ZBPr54RGkvXX8ozrqZoWq",
  "key36": "4Edqp4ESLnVX1J7KPgdPMwRLSgkGqyjL7we8awCts7zL5zfpngFQwoTxWnazyCKEySFBgVH2Wzreku7UZ4qUwNQT"
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
