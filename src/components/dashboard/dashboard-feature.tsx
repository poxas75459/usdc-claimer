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
    "48KxfRsV3VCZ17qU5FCZq3Hq7zCWiW2szRWJDCg59hjwKWgcDhKmcQLmh3FhEwrocNyvQeVpi7QDSMw5xu8Wbbgp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WgKpMpa34p5eii3E1GwLKpA6nUHeTSeUuVZxarWiVXZY7MdYQiQnDnj5T8FXhhVcASLDbvh4fWZTS6asV1kKQK5",
  "key1": "5h1a5cqB5kSUpiPYTHZ1UXGCfDMDzF4RC7Ac9jWn76yy43kGpz3ThxMqmygutY1RP5sSZrM21hQqRA6x28Sptwff",
  "key2": "5cySencf3q47QyZ9XS8LyzDAtRe5eEAbThccbXeewZASz8oXiw8k16qoi9LZE1EEmGQDnRK2cH3wMGY43kKC1EP",
  "key3": "2PNfo9i5EqFDu5wKymyKvWP7h2j8684R1T4bhyZnMm3ERzNVsG5rRu786qVbbzN3AZ1rnXFG21V1qWZiMwohoYGg",
  "key4": "3TsizeS24DdoYbY8Nkvbg1sWKte3W469xinh1Tztb1w2jMF8P77Err5LaGwcGR662qHB3TKVuc9UQPPhbgWnW6DG",
  "key5": "5Gdko3ndPwTGodYveoEScKiPsPwbCe8c9kexicB1tfrFnm9gcmfzKij4Nd9ND4Nx7Nf3a7EX3E3aU7Ar8ETpR7KH",
  "key6": "iLryAotG4cYV9n8yX6ny1waVXnKFE1iTc2tyx6rN4ueD4Apr1FwMH2vA7ei3oZfx6HsQDng6YytvLfAxUJvNhM3",
  "key7": "27e1VHsJbujMjKKfQGUbqFubYNneG3KPLCmH3RpXgPAcJFbfjscatvsWQZqiM51KaUvAiu3s3xWXLFYmVPND81iT",
  "key8": "2d5L3stSYjgEJjC4BmahpeSHffEWgoHYf2P3tkiJxj5c6xqdfZ2tPP3joXdxkX2zMp3eamkKyF6eadpgihseTrEr",
  "key9": "33u9iTQJfSCEAuFnEb66x2z8odKRG7yf9mJcckgjC7HVXRx8xTf1vscTCLsTAVXtMy4kr85yLE4n7nBMdXQ3V96U",
  "key10": "FtB7QKTyhPf8aoptWemMkRfumkXHP3iQQenjjS6hbLCz587HJN5uT3vLDRqt6Aw7znazKvsBEvkHzAY8FKr4Cuc",
  "key11": "NXxQyoLgHjv6eM1fLdqnY1bhTo5E2qkMNLDoMUcwihXDrYbK3LfPUajZvcgzERi6dkriZUynz3tn8YNzQ5vzRNV",
  "key12": "2L1TqF4jxM9uQ7qgmXndWHCrQdLEsTiYxyjk7yUBetH9sDASgBam71gZKPa8f6Zh55VN5tshKkUCk3WDRiAaFv3a",
  "key13": "3TuHU2LSz1oQi4mF7r7yGV3NSuV5GjFCF8xz7QneKNZeK7Ab6WJjM9X2AGqmXqha7rQoxGVnjbVmuAJ5qT3pC9yN",
  "key14": "5ooQaJnX9cAhL4p6HMq2LjLSz2Fz5Ri4pMsX8PG2Qw6FuS4v8Mo4PScrTEB6mRAc47waPwNWVvcCh84vcanvMCLG",
  "key15": "2VsQtcf2JaJhyDyvnyGLoSYxz5G3AhL7zvUkcJHdjFxAqvx6tq2e1AdzKAYZdkYTXi6JJmaZebqUQsqCHEzjE8RB",
  "key16": "2zkw94NmkPNLtdTM8CJKkE7kPJC5vS2N5AKTNM7eiUWg9T5EdEZ2CkJY7gP45vsqJJRuy1JaRUBF4hhrfSiSJbfM",
  "key17": "2NAoUmDdcj5KZSyWexhGxhf3cHS6bXRzPGVa36vWyfJJ1z2VRMJFGzSjRpqqn2GyxwQKbraDg4yy9fozaMwKUYGm",
  "key18": "RAhyZY1tHX9znVFGRAYzHqTAaUtZ92rXgimAFZYsYNkNULVpVWaxav7ZyGsLw9mGHAMDbyzSBzQ4yG294Fp6Vqg",
  "key19": "2yLENHhzXd6VA3419ZK46vFacuybPiHYyyPykv7kjS2tUzjvon8Mi35G8bj4Ps1CtAxuPuS37smNNZo9zsMVtnf9",
  "key20": "2SxrmyaUwTtwPU8g7rrixGZkgxtWMVujyKtH8eGT7x8iErkbuztwwJPQtdV16AgAfpgMQzkavx8ueaeKkZ2o5Bt9",
  "key21": "3VhbC9S7S7mAskE3KMptCngRP7zPZsZcqPUniUcS8pQnaKMsn8sEtYFukMT1QuvhyTHv41v3VjRHu9DGCzZZaPPW",
  "key22": "3MieeaUrDcBqz5BzQ8agEGnKBopwxEW1kajdwfyodjepZtEuXnSEyC6zBzH1udPSKHMgRDu9rM1CTaveBK5HdWvy",
  "key23": "3o31SUM9EntMthBwZwY6CfH3jiFsScXpx9okHxykvppfJacuJ73hmsBRn7uc3UHMLXJR1F52sZfevKgArDhRTbro",
  "key24": "pY7WFNTiyHNjv3WY29B76QG2x4RaEFEu8JmAASXHpDUqvGJjCxq9zchrgjSsEEgN1iVyninVBxua2sZvBpPZpKM",
  "key25": "55cpYCyG8XmnWAKxQd6XMXbx4bgcBVvtF4GuS2bHvV2DQmjy7TqYAQDWumgQKG8Dx3tadZirB4UoX7do4cpy3coE",
  "key26": "2rtyPtkNsLD6PMuFCQwMKATCDozZsmsLsVf9KWGZnaR55VoKbst6y1eSjmvpjDysoxk7aHzyre4k5QjNNXZDsyvc",
  "key27": "2PRKeJx83qWpu1hkaR3BtJno7Vmk6EFCG6oPMp9A6bcoqQ29G9VGh4W3fPDu7MuYsHL5ZQ1RRAcpB96TrE9oQ1jr",
  "key28": "5pv74Aj2LV48mUpskQBUUqMV5GeZrP1BKRXMuCxN3aE64RFDA3CxYuxfr25Yk5z8MgJYA5G3A6WMA4MjtMssTaM4",
  "key29": "3Tp6CHmNcUN4kExiM8LGaL24XfPM645uiBvt3woRq77DcRpNmskWC4jaUAv4t8ZvCEpBtQ24ZJJSLAFiXmHvpYXR",
  "key30": "5G9Gupj1F33T5QXZggQ6Fatck9Kb4u8LGvyPGByPhXSnBP6kepgT3K81mfZp8uebnLTJhmWfGxPRcyoojVNY3Xv7",
  "key31": "3MaC1Jhf4LgdCRTnKf3bTPRhVUvAQX6x2hMprMpHsBHk4NMTtFeyJfWhhRmVGX1S1ZCZJBwCPrwobvzes6aUfVCT",
  "key32": "2DCSVgtRPBVr7AkA87ChnLt1zsByretejYNTKN8wtkXS9n9kKaTnCtQwfvxvEdDmjy61nEu8un8nRxJWQ7EQfgjU",
  "key33": "5PHVZVjBGF5R6AvvzLKHaGS7EpiPDi4mS1GakTq5ZD8voodYCithBsYS3U5pxUbzY23joNqUTP9s71xfud1Y6Rxy",
  "key34": "5hFQkX3nxRP7XiP8j8Ckte952pJ4M9X5dqKnDC5pzgPHc8VpGdvyd8FEoppVoemAFGswYwb92usAq2w591wEt3bx",
  "key35": "244giPKRk2NkDMg8DwXRMCSjL3arik7f14CsHZM5uwH7n47mLSiR9a4BVgXYtyAkkX1HDSirQCPZHpyUHmcgTfpR",
  "key36": "4kPHoVb5GwmuasnhBaM9eDL9oJFRdsrZBecq79WSfAymp3apCaut8ikeGKb9L2h22PGbRvU2DSnTWbosVMhdLGjj",
  "key37": "3ydPJUTo3vwU8ge7MBeYJcdDq9LVJZT4TEZi6xp3oAYpnWNDdHhnwpkNAm7h6PdLm8macqTAYQ1v4dzYshMUqqGo",
  "key38": "5s1v4bhF2nQ1s2AYCn7atKGnR32Z4UmcZbf4tpbsAnRBSH54vzrkp3Dkie7ett4tYRUZVeu8TGDtbxCV8ydYEZRb",
  "key39": "3cmtZFbtbpPT6umKTQPoo59CUHatoCzMbdXVqzVBdAVqh3e3QBoxAaibosweDoASLf8ttbrFmcdxZeBKVnBh8cJV",
  "key40": "2NTgL2FeSJfggqcx7Hbci4V2qd5yumZmN9osJ7XGkr5RdTUgp9DfPD2HbwFiQzLLPDxEUoUy6pR5Ho9ZzFK2yeNi",
  "key41": "5twgJRxNBpSwG6p9KjnhWU8J5S9UpbB4X69mvUcdyShRu8JGwkS88HVsKV96HCBbdcsfwnU1BM5qHj2kMR5QHXwr",
  "key42": "3nVffhZdDAU1n1cQ6QB2emA4ssNtQCn6tQcPJBY2eruqrFHWhqSscPUN7vxM4NEkn7dXFQ4QvPy3AMCWgT1iWWCV",
  "key43": "3qYgUq3AxaB3t2dTLG8rSmnrngFhrMpCvbDxLZbCY84B1dVfBJAXnQoQAkVbZrTLc5ei16cq3kTaLbP7MeBqrHeQ",
  "key44": "2y4J435GgiYWzFWfG4xiHBDJ9i2PszuDuu69EDcr7mEiPTJjopo8qrQt1MbjeWCAEaBi9h1pi2jLbQLeayQeuTu1",
  "key45": "4uAasoRxzLLWUHTGJmNrkcS8putBD8P6pjLNFdKmuvGD5eo9aLxSSmWm3sXKnyTdqSoWYCicFNhSzDsbGqAUKf3W"
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
