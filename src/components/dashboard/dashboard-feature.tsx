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
    "3rebe2QWCB8Djx7ZBDkzgvmhNuFmA7QtMAEqzvcLM1J5tsnmfRWc51riCM73m51eAtcqC1YcNp7yvvWgXrRuZwN2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CBHyUBxfiY7VrWcXcVpyfZM8zFiLRJ53GyRh5XihyR1xXqBubKcMhYKwXNhEqbBfxv9jMALZRZnaWKPdpmdxwW2",
  "key1": "2xCoe72P8eyjKtiRitebbTpsY2enANhe76ax8Wqygod1QXwpPd2iJnFBV1JprrhcwhHAdVMjPDyZX6hPTYhjPV5b",
  "key2": "3AZ3PbGigL83PCgnrtKV8175jrg2sscReGW2snzi5CUKJMUfpsX5h64yMp5FYZPpVhupZV6Ey9ggsP1yDYvjT1bx",
  "key3": "3sJqNKwQ8icgNJMuNuzPvwMQ7mL7wgJUJbqtMs9zCGWPhuBur5E1L6MVGzQRgGkFRGizaKjYz7amHsrNCxfSWCPT",
  "key4": "38jPJAS7bnTFrCtXCThVnsNuL4zU1y311XGHnzHzuoiVrVRb5hMVEpz33T9gTzR8gadDwStMmKciAW85NpGHuuJA",
  "key5": "66jKDmUHgHS22oEPSybQqm7GyHW71iDJYr5WfGkuuQBdJDc3r8vyAkBgnByjxVWQYuX6NgK5xBWkyDpng4eepj8Q",
  "key6": "28fAPVxqanGr18C55yxBPrcNb6GLQvXVrhyn6FDpJQBZDaL7mYqzCrc5meyhkJyxoGgLLeYdjXoxfpHzGkxQ5VMS",
  "key7": "NtdVvUfxZsEbVJPUgZDxXxPdjqyDeicoe3XvwiJQdFPRgfXDarKm2wpd6yd2ZHhcS9hVZc8oXz3vEbMmz2m1uDB",
  "key8": "4wCEiBaRH5u5YDMbLA36UNrmet1KsNTLL9WQYagYrsXVJQnGyZt1oXDWCRmW3NyMWSL2svVXqLWccwaShvnB8yj1",
  "key9": "3XofdmTihgRWQw6SbLnxi6acyU5wSLZJ41XXtfFmaUmNi3hsKe6UHLWFhbCvxwA471VDKYjkyo7AhEktcGUzxoEc",
  "key10": "3MLuJuSeaXpbu3SQsFFarmJGHpJVz1gL8vAnZAH6hJCd2V3TqU9NWE9ZUCKQXNFDz5eoMfPu2Vw5qunbWRhkzV9x",
  "key11": "39kudibLFgs1nAhR1VyyHoBMtTaTEaWbLu4CoYQpot2fZjaB4EJQcVnEXwe4vu1JHfA8dCFMTtWJYSVvrWmWroVv",
  "key12": "3HFwatsgoHQFHzGY7V3vTWKFxgMyrLULWmKYY1WKEctkm273AASv35UXEqGCLhMbRL7ooSFLa86i3aphtPBuHxVk",
  "key13": "2ALiCsqGL4YohTx4FH44KAHVhXRhsZffvZ5L2U6dDtsXuAnpqNcfxJTSwfANHnsxgXrqKoawYesqiFJb2V5XStU",
  "key14": "3gi4TnK1gPq8ojedEZ1RhmPLLeeWw4tFvmhcZWttzjQnhLAceaaous4AnKAvVEkv3KX7BmmWNWXKpr6Z72psj2w4",
  "key15": "ihGtXerA8CPRBbXJ6cem2cW9183P65r8VfXHzm5HJhdtoDkSzaqXH84vLCX9KBCLfPEzp9QoweYmaxF7AcGHsWT",
  "key16": "xTMZx4BgACtfXHF6oB4ddTnZmywpM8axA5V9YWjpgbLBxdo8oYrrCxDR1nWSEudYh8B88Yrk4cPRTb6AACRWR6S",
  "key17": "MmEhByrN5MMu1FXdFH8onvrfhQZKF27FuqYVJGZyNTNEiMjY38BN2296PKKDSdMwsfUSP53HiYrCe4fcGXPFn4L",
  "key18": "2x2fn8zhGEZMG8RSjhxBCiE5hnEdhvCRG2QUjRe25Vm81x9Ltk7tGqcMSmYvefKnX1K1wEQQhWiDsf8Zzzr7bctT",
  "key19": "44DDnSDPik9h1oH5jCKad56fxUqqaL34CkptXRMND5FYs7qEUEYCHWJFVYmGAeqXrtidq2Q2zr8R8i8DA3Le1SnT",
  "key20": "3rDuy4odxUF1nWGt2qg2ELeAR5ZSUPt354WRZeCjs8HnC22p4cGSsMK63VzvNn3ydePxEhV3tkCo7zRo7tAf7wtq",
  "key21": "46cYjjkT1kFBxhV73mYHY7tUkHWNcr5vau8X6UpT7fB7oGHpS5RAJ6S69NfnBF91VxnDAG7v7RAtkLCP7L33cf7Y",
  "key22": "4ZVKgXt4Caxjacknh6tRFzeaRDGiEVaDWPsxkDWHgcNoF5pGGqWvrgzyWwjijCkAgGZh4ejZuKgmxVXYuZBjUq8p",
  "key23": "3nCpoyCmS8Z36ur8AMnSsMp7jhQKyZSWy7rFX6coPJq4DLCfMeacRZLkp2KVrhUqr7hKTfeUEKqvwaU92xc1QmHV",
  "key24": "9CBj59PEKM1FkUvneNbUGsqkyDoM8MDiSjJs7Lf2Bi9poNhDAVmFaAteERNxWbnzrvYaq6W6djCQfwxDeZdDt85",
  "key25": "47qKJyU62DN9X375ZDTP47FMRa3DPk7nxMP6KxbZdG7mGQuNZeaWrYf1ESxbn4WEff6v97N6a6fHzJ7YHzFE3vJX",
  "key26": "62KhEBcbwoTNXSGTHtXNaMAbmqMy5tqgGoF8XshUdE1sEeHVqtQXVcLmPRz4TL1Wa42r3uZiMvyLEMFo9aWWTECV",
  "key27": "5awLAjrdrtgQbWNoHkPp1pYZEte9y4Yh87n1odG8P58dM6iQoWgpv2MGx7p1sqeKRPVthEUKZGB8Wo1Z87FV5jHG",
  "key28": "3iJbNRkSW1dxyxAW52FEQoVoL41Giy1Urw5X1kzBzkG1vQyscgVQSf6ihTGXRAtTrhDMjmuoGP8Gv9qPgBXRDpdT",
  "key29": "5xuexXBM45wi6ta9Qadhjjen9W9d9yjvxg32tq5FNUgPeaNLUKwUJTJeoey5uaWskVUBufHcDkiB33yY5ySUraBw",
  "key30": "3ZeFhznkx1WhtgW6zzc26E6UWrdpL4QdV9ak31kCSWAcXFdGZGUwBfBnJUTyeRUphJyx1nPKara8yzEJVCREnHJ3",
  "key31": "5k5pYg5SBbp1GTMXDcJPuBG3Qpc6cVJ78jLen9BC1uH5rJnkMRCv8fRH191hPbVgBhyNXiE1zASuf7QV1dyYpJZu",
  "key32": "p8yBY79R97A9dWknSj5m2R17tp6K59WJc1Nkh1QRrRaHmgDfse6twJRYxaP5MLYCjy8u2gYfFwgnAsMndd5FsPs",
  "key33": "4Hn3cEAtqGofwFNQqoPczMRNsXiHjDXfTY6BPAJgmu5H4uz5DzJzj9KmennzD5KoNGEcQd4mf1sG6NegkoQesseH",
  "key34": "29LremitKjvmC8VPosDzrucFbhUGuR22i8dT7gFD95DBmXFAE522B6ECJnUuq2tFUt48zmquiVbTq3jUW2Ae4bzW",
  "key35": "47qPiV62vyYaBzxBwXvC3Gu5oXVoYZqv9nfF3YvuVpjKaGE7yXtrwLmAqVPWPc6FhA4sPBhZVcxMnTjG6t6F28ii",
  "key36": "YcGJ4kfCrUcSuT1p9ucMbC3m3QQfXGgGPKq489puJkf6SbG83Ym4u6v1KNqpXc5oudeqD8MY4uf2eAFiRcQdoXh",
  "key37": "3h1k69NLpHLM8JvvX2oW95fWDtCZeQpSLs4vhkbbGNoFXCWEp3fQA6485v2mqNPnZxwKESsoRkCpFTPq7Uu2kvhe",
  "key38": "2zAAPBDHQRKU8QXqWddDzCjA7tFvG1cxBFtAoMq1YCt13AActf7RwbwECkXWNzow9hpv4E84uxBLmbDifHeo4vHb",
  "key39": "3wyuxAhnTKHCtKsmTjuuw7miiXJEUAr5GCYUdXAUcjPdNqVbzcGQccfzfVRgrLB6J4DNYApb8hrewX54W3o5rXJz",
  "key40": "4vNATVwjEYv6jkMcg8TXprRxnhqWa6P1dfVCakZKJrYLY3HvLFE7Xz2A4FWZYN8EQYYFMkToXLSNzfqXcLJ63n8M",
  "key41": "nvGD7EdJA4SfSqdsbyLKhTVwVecbr6Cot1B7xnovbiNDogT4U9omRBn1uXH1jsBTLPZoCSonoLGGcVNXbqzaaRv",
  "key42": "xvRpnF1gw9cyRdb4nXr6qfuwTvvKqMc6wt6td5UgP6Ji6J3ouwfgAUVRXGcx7Eq8ubTdTZ9JhzzrE9qCJfNT9qG",
  "key43": "2B93Ym67nfemiqsMwWKRusYktpREitsgwwyhRHmNc6X9BuPDgbNnQmf2TLwRacvL5rAreB5vchtMUa6qLTiirx6h",
  "key44": "4nWhe1eS53vkLdu1WP2jaC9UB3eSPwjwDaA1cqzz4RdrtjgCVXKSn3vNTToPtpCFRGpzqYY61fVpo6BDkxJYrurt",
  "key45": "5oNjy3wsshWXpQhuBEi2Efb6PhKMbLrF4rntkpAkM3S8mpFzyCr15z3wbgiJPd7JH7t5Cu3HQQhsTikEsK7vLpJ6",
  "key46": "ZPdG82WEJp6DJeoe3mFS8RSM9haaecJcGEYS3A4gTtWZjudHDjo11rTfGGofrGWoLNnh6BoqE7mG3zgYavXJZDW",
  "key47": "3ie5eXT2CN8Ac7cF2GrVcMJNizvYScrCheEQTDT2YYkQhw6fxuVfmVcE8jsY8y4694BgpdzqsgBratZmisbAzDoW",
  "key48": "4L598KfGtjFfyywXMsH9vrCxJQau4ft9RSZV4M5hTWgteTSrLLFb3b2vVo8m8tiijfnbawbhT3maRChk6DXYLfGC"
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
