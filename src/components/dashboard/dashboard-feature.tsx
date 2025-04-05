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
    "zvwYXVL4gYnmm9ujw5DkQZeeECXSqdgdzqn58SNGrcY7BvccU4rnQY4zuetXTjDKQxRihvuFJETjVJdF3pTfW4a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sfHuK1FL1pYsEyy7ukfGELvuc8P9uSmgxej22YK8macsENLq8ZWCFv13FP29MyF3bvoHoDcnpcCriNuQSUfVjZw",
  "key1": "2n2DNaPTCWodiBN9Pmr7kqFpJPGRDp5zDeCimhDuzYLaf27eiL4gVb9ZsS63LbSF1Hys22NWc6DxRE8GFcNhphqW",
  "key2": "3SCxRtkC3EvZvjGXDuwrWjteTXC5STiQcSZYdz6u2QfMSeL5WRXcv7ZP6HpHEFKoFbaCFBcbu8wk7m6q8Rk28aew",
  "key3": "4hsMG1Pde4hw4SVASDmJK5kZEoTBH6AzWp8EBxnvGwUVfKA2isGsbiu1kCMnXhxgiSvpunByiateyyzQtSbybdmk",
  "key4": "2qAqDSkK6JZ4ZufAvNQpAPSsDKM2yANTS64aqQpcPPkWucXQXmUykSmoh4VvAdbjZVih76BGTUDrskt8gfRQPXj9",
  "key5": "5dDL1b3YUUVuUAPCQqmJzCmGAiZ9pkVjuzLxhdnPqfGuMLKxSeFutYE3EHQpZ4JjwTFVjvX21dAvTeLBaYxXqNTh",
  "key6": "2c6nQ3sfLhzs4k6DPKriae3B1yssXGLsXE3DgjSRA5eCNe6GdwQknV3kUFnKHYBBmsVHdFydraAuEgQoMak6JCRi",
  "key7": "5PHeZcC9BCD33ksXG5KtyV3ET7yq93gh3BRnsgRyatB5czxzmyDpcKoii34E9d81LKYZHbz3yGR9Emej8KYnjgWe",
  "key8": "2cYq3jsP68utSgaAcSAf5VBke144Yxzwtw2G15ZFwYAWyrVwSNRnwkXEmSj2fxXqWgiYZYWZd1qQWEvDXwfK4rTk",
  "key9": "4dLadoV4k9okmzia3BLGWotPkxzeeprUaHcRFo5C2zuEJpK6mz87hNvQVF8uFrizLNWGebJ5VW8LDvvMLkkKKzfi",
  "key10": "4R2v4Uw2awxxCRuhyiLW29cguVYdqjbWcbuDFh3hNj3r6qZFaUzR4x6SXpmPNUJL4JYkUFvrve3ahYGqgLPntVqY",
  "key11": "PTMBNspuA3wqTyUH28umejq35eb3HFHChb1H8UCj4ZYPu5jkzyDrfaCaZMp1YKC4vprN9QMxHjsRgLRwaaMQyTn",
  "key12": "4C4x4jT4h5re34UEPX18dhgZKoR4gXJxuUSNprTZbqThwSTPVupGr3ziB433F5TavrWfpu5pFJ7hS2ZLCduopsib",
  "key13": "2s6fXF4j5C7RjsyBnhfHNxjc2eT25ZyrsLaac5dv2hD38XUZgkxzms3oaW3adpxfoB7SAuHAB8TgQRfhMzQdmPrU",
  "key14": "63jiCuE2dUmfTZPbqwe8KBmavvmjaPj2RF1qqazVKS33AECk42vjVkuQJe85gazMVek3PpiNnWcR4uF3WHMNMMHA",
  "key15": "5eXPeqHxTuSBe6oLb5sm6D8XzCtf6dRfpRYn6nkd4YrrUrhkeAPUYSVBR8fCXKfk8E4UH8gTmjorQpurg82RHP8B",
  "key16": "VC4bEeCUFLZ9nMNiqcyvPXSWyyD5cMguMRVvrqgDY3UXrpy9LPsdLZnELftGYYtqgAHdHGD2V4tNBw5szcWYSd2",
  "key17": "2CQ51RnauWDyjRbLoW3kumSDmANw6vn12A96pyHauBNWSp3YPPY4tvFEuiLG1ei3DQ4qTkro71KCiQTJ6CTYGUW2",
  "key18": "52FhNjiCEvGCsaK736RRSoDUwGgiPLDftsMHg1Er6SvynGitsRKyNV9DDzLoLc6fUXEz1cneRMar61px1SS2wqWf",
  "key19": "2ynYugzG97PzBJkBUNXtDj15qu5w9qwYHFmvsFqrZzeFXuZQXw6WGD2CW9YcCH58vEgqaom52nqakS7HcVCB4WWu",
  "key20": "4D63BKsktopvH39uHEv241FmU7m1zDoTw8zq9uxNUY2xbviSWaoPNsAt5kUQZbMkZPxTvYby3CUfgLC6oi2vV8tA",
  "key21": "28KNmA4c6tTP9mByAhcLFsrR3kuhv7KdL9zSyEe8fKyQqqzNKQUaVeHBWc19VsZ9fsyZ7X3ZfAa7WQfiVV16DtKi",
  "key22": "5o76YJ7zG9rEVV9N1TdB6h7H2LxdqpUxaH8dBoEPabUkcNjBRKH61r5Qc3b2tNSUHg2me9v4y5dBeDtH84n1uhGK",
  "key23": "3Xv5rLjBKBz27V5f2rgTt9b1VFKMA2bve8gaLrrvTv2Wj9ejgThNt1odE4r5NuPq746L2PsPcWePAusnQH6CfPSD",
  "key24": "5srq7j7yWo1D4ZnorkD2WGY2uN94z4WqmETnsAN4PeFwgL3LcW4MBB62pnB6mtHoJhYQ7g1ZHsWaSNX6bEna2iUL",
  "key25": "5DMnWhvHvy93EYyT8R2oymq1dk2AuhAR1eypBekqUKtDcmFP4y9Qv3XWVhRUUyC5k9qcxdRY9MxDCZRjoPjXj4Wk",
  "key26": "3dM8RXaSCtVgJWrjPDD8GPTZyDTBDRRsx418SRrMcqJBcpWXcJHJqVgwQc2Dnug2iEMtBC5RNuKc6v4uz6YHZU4k",
  "key27": "5V1DhWMF5zhNo17TrjmHw9QSnv4EDZtXohL1iEFzU3YR4aMWMWeuAuTJe2MQTtt4hkJ7XNMTVzJ5fJiZeXMssLKS"
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
