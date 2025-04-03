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
    "2CWqnbPxEXruowWhDoTFggVyMexseUtmRFB99A5Ri5zQX3EzpZGYqn9c9VfG5s3rVaoQLEdNZyKcfEdbzgQYubhA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hJt6E6q43yf8CuKxyTAs5TAqEyBhyZQxo41XaTP464pURCr6Qk45ntHW5BRDuYWwTUfBpPmZrjuudfxaJmpsE5e",
  "key1": "3shGFAeUHoc6vmLKYfKuD4FWo4Gmj76NEG2cBNod9tA1UgVkFSJkxCMFAEc6P9uS1zN6A6yBxDjpqAo1JBr1xXHU",
  "key2": "3nG6JDLKGs25THiwfyyDL5HtdT9VTUffFb8iVo2e2LrGsmeodtcMGJCkXha6Hq1HvLkGV4mQJoDzttho4qPg9ZAk",
  "key3": "2E8WU6zKvEpMHe1JiAdeJMt9K96s9HPKBfSghw9QexWhqS2YXSSHnJjJqipCQM4pHPczJA8JNPSCtatwN2TBcKZ",
  "key4": "3hv9wA2F6y2bB1zyhjeWjqruBYwXqaGs4kYZ1B7H8HA3Wyk13dCmc8U2ADUAeY9QVYgy1x5xNHgxt8A5wC4U56HF",
  "key5": "5rMnBNZS31XfD8XWYQXh6u4T7jfeJZmhf7PS1pTiNWPArnhxGySxMSNVD3zUCRCXswNaQxBG1V9zyk2eSPj9H68d",
  "key6": "55H1KWUXjgseT6uXQPmUkGSCiGvPXUj7bPvXdZxxSyS4e9vLCpumJErdVRhkp5gCo1M1NGXJfwST6sdgeASRJG7D",
  "key7": "4XY8oBxm65zEWVXSM6RdGBpTgVJWmDEssGFrVaCX8b7V6kxYsUWEkixUxLSCQp2vfzz8mJziAatPBHgTRgLfuZAc",
  "key8": "53vR9RgaL3B9fTapy2svJ9BzshbieNpec1Epf6ofZcj6RQ7e7EegFpjAt6S48Vi43YLjHrGMUUht5CU159qAA7zu",
  "key9": "3NoYXJfrhNcRYazfZGANgvdPTrqP6toQeu1EKQ87FGLkAVNEXeTjPBhFxuEh58nwGvKqj5m7CyEnENRtrHDnMKHh",
  "key10": "3rWD2XfKSeL1Pzd34kjQuwYAH264NYX9YYu6bnt16sob3yUx8pUVFP3bFPWWj4oemBmMXhFK5RiaTyRMVvbM6UXv",
  "key11": "3MiwPj4rZJ6po6WXj32nzdeWwofVbDuygYdZZL2FrnouPvq1aV2fRNtw7RkoiR4VNAb2zNk55a37JW8cCGj3XGyo",
  "key12": "5g4n4wJxoPr6r49cEXEx47VL48Z2icBDESPT9UxKs2WiB1NviMtsL5Xv3kV5JzFAqNMN494vPWWetg88hR2PHgSt",
  "key13": "4XvCDP1DkyqZ1FCkFHqU6BZ58cvECWevAPcgMYgYHbGURooanqXVEYZeVWbgyuBFX8Pp14WhacGMta1BKJcmu8zB",
  "key14": "23Q82GoWd2HWT4KyYWFHd1aUev5cJc2t3p9RjdwfPRtyM54d4f92rgvnw3juHfx9FZ74vCoSV96Gsuonu1oAySn4",
  "key15": "zHtj5aK1zbt8SKQCnNrAjxp88LP88fcsRtToUHK6uCEyoadAocdKQLYDq8f7Tch2SSnnzsCrXn4GYrDnU2STjnN",
  "key16": "4Q8rff9Kr6wjmi3Z8KzCyvyjTNgRXn4Cphixyk7r3GYoXcSMZeSyPSdnbmeqwgKEawVkBbKDCwX5SWthDpzCbNNm",
  "key17": "3vv6fUXsvexrmbN52vFRv3X9LicmqHGraL9TBvtyJmg9JoYCg35z6Cm2m8vCw6EYQBRWzsX1nfujezSN85eR58fs",
  "key18": "4s7LGaF1Rtehd4osAFgfv6PnquhAPpFBsSXesWxpwdBuRNSJtf1xHV8YckVwNFdcE7zs6ys9THCtejnPRMrGKg7G",
  "key19": "4Qym5JXArKsydENJWwniWiisKczQdRv4xwWoXuT92k6V94xxSEaQ8VYgJ5Esif7UTvqXGYSWGZyTnE6JBkBr1CQZ",
  "key20": "2CusYqT7ubZB8qvbU2fu6HJCfnNHxV2o3tgEU6CgjeyNzuujAJ4HoHC6RyKPm5UZP5MAMWrrVfeo8vweu6cNZFBS",
  "key21": "2JFY7qGKEotvSCQQj2AV1iyA5Ap42aLFti1LTs3rJrj88RADKivzqC1Z5SPuznjWkEkDA2ns4pEmqphgk3Eireur",
  "key22": "sdi5CbeBBTHaVbk4Wv5QFtRuNRs4ToKU3vgTJ2D2oXhi68zRvt7vhYBLPrNTrbmEQb4zTUnmDJ4jyEQBSLQ5okT",
  "key23": "i7BLNZmVdTuioVH9iJM35gXRhFK1xmDyWXgmnB79JRGrE5TQgwdEk7docHhwxtLQjptjgf1YZw8XixEG8yzFADb",
  "key24": "3BA8hRcKVnYxa2cXYJNW9zyX84CwhRaJF2TVUmqjubyft7nVwCtR5tZ2JjKRoiBDPsXMRajJjqMe3H8RjNe9dGWA",
  "key25": "3jfF5cDig3pUYF714Wmbhc1syBcnaGzH7jNnniYsn2Gj6BrCNXtd2KWFtBRmnwduqjpuppjWNt2ADoU2qvK3dLMF",
  "key26": "Ti94uQTg6wHw2a8Zgr6rmiaxjdhkgSzMbWizkbsu33TaVwn24r8YAiKjZHD8zaq6xkYq7p8sAvuARA6GSSsqovs",
  "key27": "5MX4XpXEMWmtDYj6Jhqe5BiUP5BKN6Rc8G6phvjc181ia8c3a2Cn1MAJq6BWfEqvhu64S61Zod8eZx1EfnXsfbMA",
  "key28": "2u8jUfPTR1EHFmvhRjEpGCojse5DmJFi12257SJvJHB9y3L8V7Akbx92Zp9G1HBun5Ayz6nNQ7AFjZNTV6yGCmuK",
  "key29": "3v8Q29tkb6cBArASZXgwtBAP1gaX7vrFGYcwYueaWsGUP4pszCkYzgpyU2cr6D8L3HgZX3ovtEy2Bzi5A7mZ6SME",
  "key30": "3Dd9WhoYnq9j581uD9nr2wrCKG2YnVcm41ZxymgTuPn8CycfTbuyShhB46YfAjSG3uPVusez1ayhTzzsJHrnCebg",
  "key31": "53BS5JsCLwUB8TGb9rdeuv7MDozbwyWp26jqcFDa1jtci81TwY1dpk79zQiRqBJz4cCcLqkYVfxKjap73iL5uEYK",
  "key32": "5NUxkiYmiPsrXP9t1USa5zC7Mdj2jo6C3VenujuvdqJGb8Nn7zEGHH4AebimGMtPvudAtPLKwgRRFchNWziyyR1M",
  "key33": "b4FPJn5mg8igJgPAvTmcLZXY7YyA4oqXLJgLgosxBEc5irGgW4KR1RnNGQ6ov9qGN2dPmUBZCM6UDGo2ZHW15JM",
  "key34": "4dzQA7fJKNxVyfbPvGM5W1GJuummu28UuTSFNVZaFgDqT9iayVHGPY5UhNCrYewLhK9C16vUVJ78ywPPmrThm8wi",
  "key35": "3XMuaVDvG2R59ghvg3KsAcakAcdiDd4QJq9qkmfRAac2FdHqWN8EUB99Cn7iixrq7aPVbyuFmXS6WLJFSEtz3JCb",
  "key36": "5hPh8JG4kEnKnFvqvTP917kfwoxAUX6CnPuNdMDBJ68BeCy4AU1HKZQnYpY1Xuc7cygcAny28dAkvzG2irz3xvYs",
  "key37": "2uPUhXxEp3cUi6EWNSAzpDVh6jfYhrJqaAsmNc51cG5sAcFU5MChUzABcpLuY32hZusXYrxvxH9L93jzoTu1R74H",
  "key38": "5Tf55eBPpNjC9Ks5vCxGaqm1SVpN7SBhZoFriyb9V4t3XBxp99cPa8LZsoYL39pvTFZC6QNQKektAEiVqRaGxQas",
  "key39": "3LQ6K5pTMxasw8KzQ6LYGQHmT9xji8NFqMdy5rWYBuAEKNcogWxosbwkf7xrSJwfFdTjWyi8UpVvcdaDCWUP1auE",
  "key40": "5UPLRgT8br7B8xzpn6XHektSXDBYTRS4nb5x9GKzFy35nBvXTRkahneDRiYAaUSpgPQy4WffU5WE7oQ4TAidJAB8",
  "key41": "4gvi7pZhr8wc5tMmWSqsDDZmJtH9HDk5UE1MSpbEaRFYDsQXSf1XDJQwLj6KJ9JGdvBAXjtSBfPxfuybqnDcd58v",
  "key42": "4XAR78DU38anSeexZ7wUkfZyJyHZubb4T2N4vGCfrYecCsPiP73r6tyusMHSNueoDVUEpcTDQzPHo2m6Ahh8NKVG",
  "key43": "3tQqJGriqnQwD6wvHExegKfozTHpRNtYudRernPwiFkeJBEWXNTXj6ezHj6gDv54EhuLiAR9WYyVxczXyuBLQsa5",
  "key44": "4AZS6vMJWnGkPswqpTMCBK1DrYQgAb3A3zhTN6D7N6uw8tzHZXFMUP4PjQZpsE9ELJ1XmSQZadReb6V7aEK8hyL1",
  "key45": "5grBLmTRyFGDvTWswD49mhUbAk5taLuYmwRyLkkz4PE4QnzfhwbpdGVZzgGuFAi4eLALVuidM2hMMTX8jeaoQTxU",
  "key46": "65vJwrmEopCCbgpPVhNRFFtABUE2bVHu6sXNnDmPU7ywr2EFNpgwbhSG56UaTJ6gdYacLJoMiuMFFXC2F3py8ePi",
  "key47": "EVqJZNPPbQPaT4APGay2pFh2X84UqHz1ahuk6DPiivPVHSwbZrspqjrwpj9tTaVgjPNcjFkusANR52ibWJo24vy",
  "key48": "3LMvniYKv87xngD8CuJFhHHR9PDdDr3FH7fftTvupbAfAmQheWvhgwZdnXd3oMchfo4uGQTjBNZmRtoh527unpwD"
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
