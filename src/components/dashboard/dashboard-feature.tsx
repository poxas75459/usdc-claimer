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
    "394tBZFUMSxrckZsjQF78esXTkfH4FjZiXtbZiF9bfhiGD9CcXirbB5duLhdXd95TMfWtL8ajoFEEgvxoautuYfk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GL8KqTdKusriM4gcaBY73W2tfXmjxoHDJhcHS4Szh6E2ysRmRrwAxi6tVZ7BJfuVD8VrkAZUAnh5m9L2keVaecr",
  "key1": "2TKLasvWYKVh6btYYoNsscUtBGqV2V5fxAp8wBMxmToDgxHCBzMHdNXWxomu1heB3E1RtPqJxXCMvKUvARegPYFX",
  "key2": "5puQsX2CA4NpYi5zU3NioreLLBgbWtwF4FZ6ZNwZyjUV3TyK2hSohEGzH2Sva36BSE8bGFuux8byMzffr3u1nkaY",
  "key3": "5FoYhGgoLEU5nnxqL3SJm8dB5jzatWDMPDzML2JyCSGdJYDjH1HmUPSmbykJGUTyVRfBSRKe8jXwH5qpCt6k4DBp",
  "key4": "5huZrzmPCFFmZE5ggn19CNBtpEP2p1Mde1Q5KskfArk6ZPctXw6sQ5AKvvGAsfPi6er84jesxHmSaZvCn87te77M",
  "key5": "4Ft38xVahJEdQTn4wiXbpXsgwfbQnEYboPLMJTDbBUPgxanBpuk1dB6nu3fr2qNwDoYeUku5RMurkEVQ9yxVNRmv",
  "key6": "4aaw1uaF3BebWKakYyxqfD4rkTaNiLCEjttggEioxJeLEP7R5S8gbMqCyaNSKxhh1Zye3jh2T1ZsLjcmzE9gavFf",
  "key7": "2AuhzSVTb8uuPNwcsuAZncsxdxsYtKawNhW1j6Hf8sWWqL5zAFBBUUsoXVnN79FpwxAsJWxmK1uEfWanDpexyHap",
  "key8": "25AQbkdg2QKbJ3z2z5FDtPJ1KJDCxre32gcXAsqjP2wi2ZiqS9r4mKK7QDLaLnrLJzYyFkvhryNkVD3BigyeBE8n",
  "key9": "2si2ixCiUso51KMctochhXhyqEwANdE1y3Q5QrLtbPqFkK1wFs3vosh4CsKz9fGNDjioyUwrroQ6P14cnQTtubZe",
  "key10": "2CuU1ocSRYcwJKoAXXyhhxjtP2juYxQVzbfNXctekFL1FQiSpd1FnVRKoWCzvGZvTXVDAELErZ7TkFuixamaMxGA",
  "key11": "e9AwMn6mNXUYGiKF2nFuYzZKWud33a4Bd6gbvbmzUaxvHEGhkYFDF7w9zsrrGqqWadxv1FisZhaK1oXmWaz28SZ",
  "key12": "3QMwaFEqJWshAZ8vb7ScjioSj3cdxw3kEYPj9BcVNX83ZQhaEv1NbnAtbGpkGSkgMKaBYam7Pno3knBtm8r6CLba",
  "key13": "52RorLnMSqREh4CJRmiDuUn53Qk7nP7v3UabGAWz6gicZwrLhSgAEFFe2u85izet7qe5t73wt7uwCCLWnZmHoSG6",
  "key14": "3WzXZmFkihNNbBjESwAV2KbfV2Kxg6iTfgLbTQEXnizE25KcRDPH1NcxVLK49nstuBJQjUkNPiqeJ83qatdurda4",
  "key15": "4KKnmwAvTxUJR3vkeT3jktNwRkogLn7CgdV3r7E4oebBBEN8YwrUAzGMefw5RWbkxLYqSLxuzjPPnpPksCeeKPUB",
  "key16": "jCyYzVVihNWmPTyhGYqUQgYgZ7Vk5eQsJv5FWbLxHK3TANZ7vK4ZypUqRtz4m3n4rAQnXnZjvummBsEq5g6sJqD",
  "key17": "4jUWpZmhyPVSBpDGStyFkKToQ27DZTS9PWxxcFqqTwcXpnUCq9c2Zbg5xvw8sv62fNTQJ8fkmemxypaF6tcFhDH8",
  "key18": "5abWAFw6iSTs9trg8iFNugpKPYZAn8GBpeT4rMgjX9zxjgXXqy21PooK5ecGch7UHBCFg3kT5mvYG5h1HNeN9ZyB",
  "key19": "Kx7hcTY6ijW2CbPvq4rVQXwv9tYftgvWv7DcAzupiZWs1E1LtxAiwd9UTTRYBfUtkqVw46TZYWixvpZrbQfbBVq",
  "key20": "ag4AJ7wA13vBoW5qpyn7sqAymWMqD2EULpqVqhkknPYxgbrLeUTabJ33QnppsgkTVM6pPo1t4Eh4LXPkN7hCAca",
  "key21": "48gKEwNcB9rWY5rYkmSRsoKaEaqGbwR8GHVsuRyLqyRPeptWb77GKkr4n1F7kK9MY3MEpzHQT1pwytQR74Z3C1wZ",
  "key22": "fPzS6aX6cvkCdMFmjUZaQFyHN1hD6w4dbcpp95JD4cuZHrg1GXaY9xufyiV4ZMyr6e6TAXnivdnbzizoZ5MdHS4",
  "key23": "duwA5vQ3FMepiXizeYnSNGHdaV9aKgRjvA62v1J2xtXMGdPfT8kCtynWfhHLGHhHfdEKfsHQ1LA2T65D4x4T42b",
  "key24": "QMWgUBX5BL4QVss9vPRc5a3YQDxF6HmCQvdXBc3AFfFwR5oQGeLxYd84BfC4Y58mhQDJXJT6YTAaGGLApy7HrnR",
  "key25": "5y4FcXSNNSWzr1p2hrnBqdny574nGUwrH5ght1zhdDRNXJrVSuK95HxhdAtzNJCUVGR6zerQbuVNEqjsSfPQZZj3",
  "key26": "44NjYxmLD5DUnpCmbU13Qqf4CqHaPiPWopvs7yQmT5me4gPdGyJh1hgs7URyUXfoUSKooa2jXF46Awg6g2hpYiNA",
  "key27": "2r3ffYQm356oTtXuRTvSZT6xpTRrkNGQxGLr1pFhxP86khnNWzXngYRcYMJ8Kgha9qpafiKeNAisMB3vhYbZCa7a",
  "key28": "75u6adnob1zt1YjGVuJXKjYDekKZVQZryUbGVPFXnyMhYNsHpBqsf8NkpF7vZpn4WcFRcx4vqrRFPAfUcQmxhoH",
  "key29": "5z574MotkczPNxef6iS8tHN8KMyTBJ7zyFBq2BbjaCcjfM4qycJqkcvu39LCWYznNUARtbPcWcC3WqCFe2JnNurm",
  "key30": "6vN1GKtYgG9CtrKmqFEFNxj3fMjFPXigFQJGrpJJi4AtBDpirZK3RNf2uhQHh1btfmvwN6bdSPZ1HcHnQFz8CXT",
  "key31": "5QBXhJZ7uH21hVKGZiwZfCMTDyFbmE38FtYEk4zwgRBkDKATPaDHTzfjHCcpFY9ragB92uiyDduqtMxHeSHiDHuP",
  "key32": "2ihXDexo7QmXzt8ue8NWRdKSaBBqcmKKidMzCf9BH18XGMYreo2FyDLXLiVTfBz2LC3j5RKDZe2y4m4JbrqJzd4g",
  "key33": "5xZYAVws6csLXUN2aBgpCGYnN4abE9W98n62JPGH8Sz3L6dZaxPwqh4CVLFswFwKE2kuBQdrt2V5sjEC2BKyM4hE",
  "key34": "4WH4TJKJ1cHRTEPTs9HBXeVxNSEnwo6Q84nwPG4CeDR7qQtTZX8yxAHnZEAiGYUWta6GSZvRUYTGwZURkUyoGV3y"
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
