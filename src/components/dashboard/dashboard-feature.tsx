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
    "3E3sDjmqnuZG2CfvzHiwUF7XJb9EmajNW31adUNGj65fWVgH2a6z72eKzqP39XykvDPf5fviygrycQZXuChi2r5M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YWEtdTTPzZpvEj8AojtaJPC5TSnDiEmEgrueSUx3Ef6RA5MEY6W4jh2ha6HFfuPeA9ZmvV1Ux5XRF7zvTtnXcfh",
  "key1": "4XFchyspEnWtWfKXbk92Gxu6zVuexXH3UT1Kd9hoQzPrAnu5LfLPFkUmvR8vqrqebcMVPqTjk8HFwVqkT4PXoy3Q",
  "key2": "3rqTFZBiG3WbwAFqTZbrku3rA37yzXaXoSeKomPWpQ1dtizpgCLK3D82TKJvneWGQgwfKQGueDE7vJqAx4CNGBnn",
  "key3": "DXMgRGaG9XScvvmFEAuYDkksZPGmdj9EHhuoGLTH6MBFQTA16ezDPhzFn2sJD2Py1VrSoyQJKEkksteYc98oKcu",
  "key4": "47BgYbE2kxKAL7VQThTXo7bzbwXtoANoz29VMVhMQZxJA6a4NAQqMyqR1QQ2cTNAN18rp9NmKYEYB1KxxEtfAejf",
  "key5": "42KkL7A1rFRfggUfzWQbRpML19FnAUGaJPzscLx6nSXkuykZoQQfEffZLfAuTfPWBVZsgRN8KbymKD64ezE3HhxK",
  "key6": "218QXFYCUrZtypTZGzvvgewmtNz466JXy5uafd23qA34NEBSiAbk26A3gDry4FWJtW3H9qfi8vBnKwxPCTuo89UT",
  "key7": "JX33SPXqJ6cVUV1aQScZHAQxrXhNdGDpD2HzDjZFHYJ5QhfE8u3R9DS59MnUBNShhsvMeawnFpaB7uLZfWozpin",
  "key8": "4gF1WVN1wBnBJ9Ee4xqPuNr8kgsJ31UPCNS7SwGtevZTwggXNTTFM8px2E3iqvNeBpqPTNtXtM66vDAx1hzWkeoU",
  "key9": "3ZUxY5nmgrJXmWCWfLPGJ6tZ7c8wAHmXzQsb9dZGDaNteADGXzqqNuF2hPzmsxnBZtvdC88izrstmrkqB8BAWSK9",
  "key10": "3AHWXdgzEMLpkDVLQ6tjUmPvDFUMHpvoakzeV995KFGeVkGZvrvN2T4S7AD5cnUtVPwRppKRpA4C4u4o9pXUTfT8",
  "key11": "2pSKctBWGArE57oyEEgAUi5NCFfsGJR8eNvWyA34RGubzbFN9MD4C1758f34negu34d3MRpbSZrxbPyBhfPuCfHa",
  "key12": "654dqHdk7KaU85KmsxXgg7DqzBHZR5twM183i73HTaLjMyx3KSrmX7GAfRDUffFdkqXWiP94zzyj8KWRMSLyKZBg",
  "key13": "2DgHUpjy2vuz3v31pYkvmvaANHv7mU4Xqswp2kfRvXqA2j9E45HSQuiV8dSozmkvjZqCFkvfnCFx9126vyGp126i",
  "key14": "2Mbz17Mtdn4W58Zv4haeNmqWbwszVJePTwuodQkCx5KxgmJYVw396EUw6zN6Bb4MP5akSA9EUPhgPaH1SmYD5ScV",
  "key15": "5br4cowCbJz6DijP9asqzjgQ7TEJDwiMfhi6ZwouW3xXNwpsV65ffkkhdkmmwTLGfEUZkoEsUqQ8JMpJnuEMxemv",
  "key16": "5VGeGrHnnMCUCyVVDrnGGvYb6r8dTuuTCmg9GDgNeW2jm8ymuGaT2bgS2b8CRT8qjYqpeEgrq74epg2A6BEJXnH8",
  "key17": "ngRPVSvKG7rWwan1vWppQqCYGXAknmSyT4Gr9p89Zi1LdbyRvfDxoCqjKSHkaeCQtjUo4T1LZFevzmE8RzyraNe",
  "key18": "5QZBmoYxzKbEbDV8oKhUyFu85YcXhqtfHRHHQ8GZY9KUbdw53oS3yyWJx2bFk7bph8EswfmXZFPKq8o8YVArV7Mh",
  "key19": "3j5zLz5xw3Sr2hz5HShfBWRfWk5w69JNZ6bVKALzKRtaZrjwGXKrGwXRhJZjCFmHgRbfCRDdqCtJn29A2pjB9jxp",
  "key20": "2rhE3mv6p9vyqGgj1vpyGCBqg4mt3BDDHaqDnCC3AQFj8RqSuU1gyDw7c5KjGFeRKBvjJo4qtsGCu7Qph1TmE3ES",
  "key21": "2xYV5zZqSWGMSyBPYxWGWatdpEeHhkihYoZwNu9bCYasojPayhejYD6m2KCs1XwvshMoYhgsQs3EPcyRbXp4yCAi",
  "key22": "3ZtDdLGNEBC8hjEA2E6EchQU4fBC1VExav1GK5TY22EJvZvkr6x7n2aDCG3Uyzdi9gekhvuLDdu3Fkd9NhDYE5JS",
  "key23": "Eah2mLa17ybZFZ21TZuiUUavjHfmJUuDA4psjZ1Y2xiG2W8js4DpSPPs4GevuZRUQkRRoP8CgQL2nYRGgzo9FwG",
  "key24": "42Emn6QiyqNekwQd3xHBb5Co4LLh3mECx5hUjeRV4y1aSvS5kAhkX91pTktXsjbEkiDqw3bVHgqBYitMbrCb8Ly",
  "key25": "5SRe8vfyQJ4RSV97AtQwevVdmDuQoVRX4gTFVE5ULWcYBYPT9SPseqK8u8Rh8cikMJFTbFhd64GbKKYKo9Fxv27T",
  "key26": "24fBHZeDgpGeKVoNwjKDvQ1h8zJuN1zM6zAZTFkdaApGFRKyjA2MJKfXgPFc359iaMkDcCF97jGprA2iFCWqiYq2",
  "key27": "36aV5P9ciCF5pw88Dk3NTJ9ZRZ7dy4kKxSVA33RF9sn891qYvp4vesBq7sNCunHkETcQhKKge5R31MFQ7zXHQ1w2",
  "key28": "5yrjdWo9kokDbWeTPhY8A9obdSgJA2qmmNMLZWCiVkF9vg4gjqDYcsQZYAsfoBodFadFB9JWPaH5yFuN7etRQgGX",
  "key29": "P6JRzAMTZXwoscfL8TbcAQUQq7NQW9vwtENGWmMSofPJbZvxB1c5on1X8AoCYoyBkMxMaA9zz31tJr3XsQUVNq7",
  "key30": "25zZnEZw7NEBoNzwGfSRgU8sEpspUyp56TpVHiNuAjQMossuwY6oehroart1uL1rGPoY6QGKU6nFgCvd8Y3dwVkf",
  "key31": "Mgr3VVKxkGabygasMY7mAHbsBtxiM8tNL1c99ryzWZEfS3gxrN2sPS2y79CDyHRUR9A9tE5RBnnJ53agq3kLPGf",
  "key32": "suDHiLpqSLCWmp5fifGem9xEtpyz4ynRW5ESvWSXbtEScTyAEGe4Qe61QnKmGdiSiPpSfcb3E8nmVPdmKXgowyp",
  "key33": "3tbuHdAWRubt8Ae8Jik4WXpmzouCBtEG68oqVBkGreqU9rAXADXV9zQ6hWb8tcajexx8CDUimNdB7pv95v4PZzbh",
  "key34": "2wrP8WGSBKsFZhyvcLMY7unhj3wvcaGE1qBoijWmbEPStQ1k3AQayTbGXKAo8F5NQNcTFmXtCwpVyaKFxvNBpJnL",
  "key35": "4V3Cm9T6ZUo1m1nbVPK4AYrHcdAgLWnXNkvgWYdg9ho93rMTLJbH3qiAdjYTfXjX9F27Nm62BqGQeB1yC6R8f6Mo",
  "key36": "LErSsGmZmeVuzoVQmtawkdJ8yr3dUeTQ9SoFDWybK3GyzkUVxjLrb8ncRsoBprMfbCeYgTHMqLLwLMxPqFYfvbP",
  "key37": "Y9X5iustC68fYsAim9PHfhzoHmSwmoRCKCqezFvjx68eNnmcgXgjtPskotZE5cCqomBnThykDMurRD4z6N6LuV8"
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
