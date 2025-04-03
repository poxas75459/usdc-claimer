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
    "43cx3SSUUyhFZkxMPQFUvKg5sm8hkiMvKGAzaJZoece4TbiQ6UaGQ5egCqnTboScJbK2p42yxAeX8TkDMfd4ewov"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kCACKfr1212y5TbXAr5bWZqPmkzS83vybr3JMMN4k9vxvzpgeaTYTTxX4WYotf1xZvw4nNwvFJCDdSh8Y2Y9tHH",
  "key1": "33SH6YFLFFWvGgYmAZNufmfwpfgdsQkS7nWZXxVQgb3esFrmmrSe2zQAaJLf2bjK6YiVoFjiEcv1YpdriKN8GxGy",
  "key2": "3HvWgmHqKyj4jvBNxLN6ayHdneMgNBzt8MbFDzbaQXHGxGRyam17pcyE5CacK31gDH9T5UA1iAyiqvdUJFTb4SUt",
  "key3": "5W5XdQx4Xsj18QqWTvEkL15h2PYbunZR1wQ3QuMSy8YifNri6ms2aZzdDsR4QfMuoNYGAgXfFrrYUDT3szxCgM9f",
  "key4": "T5pGyyELTrymVSk2uEjFZydCdn3RNaZt1TmrxuYE8vjHT5hH1xJhfr2PabHN5V32sSJM37hHk6zBQEyBZ7SJTmg",
  "key5": "YDPWBr38DXhaopSBj5YxM28Z2UZUHTLeX6hNMzbPDSTwGipfEoUQpxbuX2RdAdnNhBMMkaJjcccL5MGcyxvDr6L",
  "key6": "59HXmWEEqs2m3v1QmKFCstEeZfaHJyNa1PNdgDZQneBWvExFSeWSMr8Lz6XY13vDvBcrTvpjQAjRmLnJW1WMoTxL",
  "key7": "3d4yLSD6SjqXENsB9f42uV4MGtcx5uHWQf7fcYWK98UfD7zCKyS2DEe6HhYrVHtsCJMaWQ7bJDXEtUD1HXiG5rS5",
  "key8": "3tfYBPCVrzHocTptCw9adXV7yzbtavw2Ragt2nD94XnYv3dWXtFohWPGncAGLRvmmhGGC5GHcVj47tGLA8HH2ove",
  "key9": "5kGhJYrXwBtPiWjy5QS9K4VGTseHkgrVM2u67o1sPgU1q8UK1dsvnxrGUMEZPkbRaj5sDv3RDPqTEndfSNipoJiq",
  "key10": "GGuMvw3Hh8DcWoaomcrZ941ma3MEV2Hop1DZeRgaBSTkg3W4FKXYjb9ujVZBrB7oqEHvHXszbhDaAoVRqXDs6Qu",
  "key11": "2RQ3tzBk1Uzg8mqe95uh4GAUr29KnWuAY1nbX8YUFmMtEhKxNwdijuTFEZoiSjxMjqsW3AWimJpJDAU73j426sYK",
  "key12": "4HhvgzpU3PC4yyipY8ZGd7X56vPeLA2juWJKN6TFXQvFFHAj8bgnN5R56cpoY9tNXWjMbDt98WJgTVCw5buWsker",
  "key13": "3T6L8HTY39BsHMjC1fxen942uiV8XjR3TArVhoUZ42S2Yu9FWd6Y17PMko9qzqkrSsnemXeeidy6j5uBF9rBeSL2",
  "key14": "fBrZqQPoHVoYifNtRbYVdAy8oUie6STE1BwVaDkYGurWdfgTocStWJEAwDJanedwUkw78o5iCYBV4gLkKK6ZXHW",
  "key15": "2wZCwaMxua5XGqNvPa5SrhE25nszmpS3b9VgSX9CYn8jneUaXuYZWM6q6TvZc7HABGJ4cQhkaM8HM76Fg1NcpCGs",
  "key16": "5saRaZfwWmfpwXesrfVJSjNqfHSHNcZ1wfZRTbcrQ7Nmc8s1cJuhaeZaM4QEg7J3cuphNMuvxU78khY7fJXj1vU2",
  "key17": "3L4oC2pcRxaPU6s5aBsx7k1QUWizYzC6TwpGJSdqdC4MvDQmoytxxEu9xizWMtkVJgsfHWCM2BJVT7zDDHxssoL8",
  "key18": "XxupRZJM3NZ8D8evU8Ujwyuyvwf23wc65Bfn5kgZjgEcNS1fWqxvL2LKHRDnizSYgM6mdgPHd7jUEUAVQhF4yoQ",
  "key19": "3Mr8rd9QBPsEGVcPxZNudVdpCgms7AC3BfUKhPo4beti5V33er6pSmE4RZXLDJ4JrF6newprr4z9DEKhUqiv1KPJ",
  "key20": "5nbXZkfxhoheYDry3hho1rXEyd1RZ4Wz6J4NvM4kfj93djcxn5kQCo3WGQ1HDEtRxRkCpGQ31NUfR7WyJJfz5V1k",
  "key21": "55wZkDQpXtt838Fsozkt1uShEGuB5Sn6tuViRVqXxu9wHLMwM6AMC7YxNCGH7fu7EJdAA9Atiny2sPvjjPusgRnc",
  "key22": "4QwC2ar2aCAzX2Cbe3u2RmwQeWQqi4MV28qv3qiQSBiosfmMkkpwD6LMREGichJckQjugLwfBmY8nE6CN1sQfAGz",
  "key23": "2BXNLpcjVdCJvJUpnBPWeAYk5BkEYqfJT3e1PywibA15XSSPfhaCxVbC4CiasGbD4KQKynKALQMfDWNSWwbLeNjE",
  "key24": "2wtx9mUzVfd274XHfobf3vhg2ERpK55k2LFdf4UpaAYLUzUDPP1uHNWGHyANA6maCtCUaDfpn2ThE5hQWHDY8RA5",
  "key25": "5kQfXAyYb86XRJQzaVxEtyPYnGFvRAvH2SeufjLqpirwurkVCfZQrDwZboRN8YTWs9Vv2fWHEqAcAcdKFoPicNvQ",
  "key26": "5jncTGBmgN6Sf9PRPSV7jLjgnmQJuBQ9BXF1Kt5pqFazZUj5noPS32TtmoWuRNrt4HFDU4hwPEWZquzRJPAph9QH",
  "key27": "TiQMPrHSeD9GzWuqE7Ri72PjJBAmjp9xmxmnCV9E8BJ6Uo7evBGcnidsMthsiF4vman5TqYSRR4JRHksKv36Pop",
  "key28": "4fgvNEPfAXTNxi6FWFTk6RNFEPASDLNfaxHKEiBwdGqKHuD8ik5QFUoc7kWjpFdSUihJY2zLSNQWd4GsJvdQk6mB",
  "key29": "yeLguAhRu2L5jsmPi5fdBaUKUVX8XNZ4GokxuLfMQPNE5kMWSw3uqT9LmcMZNU7Hn8A48Hb5cY9FNY9juohBokd",
  "key30": "N1XYtTabQaGMsfnsL73krMvdZXtpvmhPAeqohJetANcYE7pcymGAVgJsZL2tEnAVq6QGNsPkaY64hiNrrsfjHxX",
  "key31": "52rvRj4uVCWtYCWxAheBZaFn7ucVVx8zEDCBmDvph6LfoeAbY9EgGaXJuZJTAUgeHNaE9hk2mYS6z8h8zEoQ6RJd",
  "key32": "21csskckn4YackXSnjFHmeXc7gdbbnXHfvmMfqbS65w6CHTdDa41PjWshSWNHmiNfgTSXiJyb5Y1CmapPVwtwWud",
  "key33": "5UssigKq7jE8PdD6UvDF6y8htmiyDPj1qcHb5BmuPjJvrp2sY2uMeaJvq3xE4J5jDLsgKfPZ1WpKFRb22E8at9PC",
  "key34": "2phw7drw9hheZ2zvtedAnfmudFq2LFcnMhLt1VeMCvFpHCHEt3mc64tk6n87LaVhTD1J1wFPigDHuMfpDCmsLtuP",
  "key35": "ccognrGm6xeiRr4z39ERkqjy8PzSFGpGFPTrsuxEz1B8dnXefdNqvMw5MW6xXNLYYbPx9Lgq4qK3kbTA8zqj9Sv",
  "key36": "3oDrnyRSzj8tzJ99THqeS4qF9mJ64d4VHxTb5ZeX5Xy7ABfuQkNJeJmkJ7iGHVHPvNEWsBiaAaWMVmy3z7y6Y4Fv",
  "key37": "5dEgUayGhFo7UkP6RsEvXBYHEhCDxQ4hhsaP5X7HVjHACXup6Zo7KWB3ByUxiAfj4HEZwwV8vuqj4iY4WA61dLWL",
  "key38": "2fHoaHaSybMSy8SdcpBR1g3PhEoFdJMzR6VmreukWK8MXC7a2xuYjwQ4PaoLxnnbRuXRyJv4Dq8e1bGSBRPPaAU2"
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
