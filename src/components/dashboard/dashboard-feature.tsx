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
    "219JquAUEzn35DwwJhY1HDXmBTw18aBwRj4e7r6yZSJ5ie33iaBGMxmg2RkTeds1ux4bFVJsNbB2PXajxvKdqRN4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55xmzMiDcmnvEG9CeLnMooPfJhdBvkuDH27ZQfr7XPjziNMhDjzUbwW4xoW9j1uxDw8wsdApyrfSACMJHypyXCA5",
  "key1": "hZgpT86fBCoe6qwG1b7KkHBBXUks5CDBYo2JDYKsAwn5y2Ny5xvuk7a5mkvJm12JYCK8XzhSshZGeiAMGWhJaec",
  "key2": "2TUA2AvaQ9XPAPEefNm3YhiESkqGvkSwRtVLSTF59DHNHpcpYv3D5hbyoQxS1EtiRZ9e5fHASoakh6gwvzEgCWUR",
  "key3": "4Gjp3CYzQQJEy74h6y6Khy3mZZspgRXvKZuHYvJoPvZx1yjmek7s3pLoHMJj3UajSKtNmoeC4z4Ux97pj6kHj3xC",
  "key4": "37vbaAFtcdqhDaav6woERx8gKmDCEzLt41P727mBr68gHtyV3YAFqKfwe3eCNKe9ygNUsXKrApSMZVfkyEZZMQAG",
  "key5": "3zT7iKsRg2TLsNHZW9cQBKWv1YMBYeR9Hc6p8jwZ55ReQaY7mBDrv21mbf3nT9gkx2SRtEGSepzNYKZMVNbgyrrX",
  "key6": "4VS1bZhz23E1aqC4dM7FnoW2b2EPL4RnGcPPCWJCWKcntfB5vznCuXKSwE3rDteC7e2aTbQuUZ3UwmuR9hGADQJv",
  "key7": "61ZXHJTeUqRgcDYTFGcsvw8Hr6WhBhZbE3UJyiHFiRqcFvYhNBUwGWFNiBPH5eYCVXRiSBjHDc6sTq78bwChTuyo",
  "key8": "4ACzPM8a2HEEm9qodjBuhgwwSLt6YhzWzyczvrt9gvhaeWobAowggyZXo1ik2tqvW1b1s8ceeNHwmR95MexK2doX",
  "key9": "XvP74DAeA2Cg69zWSLTJig5djBKUjTAJAaAnveoZ3e3ThwX5PjhpceSF71ZnWZjfKB8LE3qebBF5XsjuK87tber",
  "key10": "ZG88R49sMQgoWMfes5g3GDejxr3st1khi9aF5aQfYaUPL6kA4Sy3CmSgbvENVLTovYc8NkT4xveStRPX4HxJzLH",
  "key11": "3hzTAXdTmqZhJ7Gd7eCKSgMq24V7d8xB5kCTUKkXzf6qwZdtqhF8hq6D8GQdjiqpH3CKgQWbHMbndByhtRhYrPVa",
  "key12": "EYAa5sRYvSrvtP1tNRhuH3iYYt92UFRHV1aVm7iaNbdHEMq9DvGsyjpiNmyQxbH7KXpu5qXCY9DRBuD6q3YWfNg",
  "key13": "iAVENKtELdGhTGYnBVSPZQqd99MA6unj81L28fBe9FESynC2xFWtLXQoHX4BpwEK2RvyYEkYqbeALWuMQisjj71",
  "key14": "47rzGsgg5Jo7Rpgcmb67CTXymdD8bbNfdXRwgFBtUzPmYR4phSWvCtjmV6FQaKugf3Mn7qsjjaenUiJmzyDtTXEo",
  "key15": "4SuSKg5t4xp4Wh6jKf159ukdRm3AMi2fyCcxcGtbrVGGNpsqdJLnrM7ud5uEUNW3eC7SvsHB9wwRGNpF4ygEywHo",
  "key16": "2iv7wEGDPXHsm2xNmoDB6k4pdXjcQT1osmMXwEM1mSVePxHWV4QHEirPAHkkxeZpnZGbRkV5zRUWp6hdeohYpDPi",
  "key17": "3pjmYhXzCrbaFWfpWnXGKpHbw5psgBimS8nLg8HhbW5RGP98eMvsVEpXEBP2L2rzxi7Yx4YEA2hDUPBGZx6eo2Jt",
  "key18": "2T7bg4NHRXrb8rqPEmaYbsWhs7fHAH7aKpd1ZmX52EhnSpcDGQPfB11A8TG4wkuRBMXTHgS8k12T5F3CgUfmhED4",
  "key19": "hSDw9p1HoT4jXwKtyZFaJzMP68XWYyeH2Lix6aGtCHd8seYd7CpNsq4EZUCBuLm7S344NGy8FjqvLDBra2C77uT",
  "key20": "2a4YdtHyRNKoNrXDykmsF1hEXDTJd9GcLvTjzffufrLf8tR9161YKfca9Uuz1MxAiQBsK7PvejHGWPxcz5VrFfyQ",
  "key21": "3TJiqmr7V86sLkttZwveVM5sCV1C1FH6zW9nC96uJLhcb7ZMDov5qKikjH4tB8aVfvd43aeK5UoqV3RiKfou4SQp",
  "key22": "vrd7GsqtDsGR3UKf77gShpTMC3W1yity3Ezwvr8etNxqdMaQhfsbFnMxierDsZEHsKKinpmEi5dN9sRRhhymY8e",
  "key23": "48UNmWmc8jRjScSMgFA24x265TeJo3bcgqpLE1ysswUeUWN9H1Kwe1tFyiEgFma3gwjEE97H2YKCvkqqRhi7THZb",
  "key24": "2YzEXfyEfVyTWSuL7kdoTwY5hd3ZxQmvKLfaVoLh9tXbpmnoPiumNXLYV2Fu5X2XuMw3sUPcsDD34WU98voRaTg4",
  "key25": "4SjTyyhMFdr9YQYh3hTRUG4b2etzsv9P1uzjnSQ1hgAHFAxMT9wUMx1NwP3MnscEGz6cubVdH1RCGp11EBZqzmLh",
  "key26": "3YtESWbuVk7GEe1Qsf8mGTSZBK7pjbUuiuifmRDipW8PLW9sarpbVWBqxwxaP1myLHahKEcLnLKKfkJxikUQnPhk",
  "key27": "3HeWuEsxRwteGnmfu1dMW1W9LM6pMguNDidqAEfsrGmQpRTnq3SfHvtJR9tnnaGHZjWgfY1P8XWM97Eii4ffwHu4",
  "key28": "3CU2mB8jzoiRXigcNeofxv2xfx7gwFq6xNFRSAE6mkC9QxRD7EYqoo4U36xgsUgQRXjXXZJojr1wQhXP2XiBQGgc"
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
