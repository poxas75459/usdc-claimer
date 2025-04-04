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
    "5Cn8K4yUU3LkE7pjLPPdnxfq5GyoCNtUwefU977pBLNpehKPKEfuw6vgbprYxskUA9wDM4QqjELEGoHyh4xaEfiC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GMi6f6C9bpQqD7y6scMTgYdXisES1KjadAcX1yccQ8BY5FmWRnypiimCEVaDmRjxZXekZqgmqaxj2bBEQZEXRDq",
  "key1": "39hFnvkgQ9L3XZu1WACHSiUHb6QpPaAdgNeYYJJ3SvJKqWWaKUZG9Zc367YHPH4eY66jF2K7jMXArvcCZ73Y3e1z",
  "key2": "NhgT58yHDUsaqxJFK6oHwTMGwTa738ZUtv4ZiEzYE7F4BNDqZEfPzVsXUGjW4qnaWb3eBq89fvqoABYPvH1PBQD",
  "key3": "42aMFCxxK4vFwrmR2ZZximnpqLH14W6x1wkyJKaRZhj8jmR241LiN5mBmiE9vCG6nN9vm3a6zrhYwPQCR1GUxUAs",
  "key4": "bk4UvNFTGQyRMM8JscLzzSXt8qtGUhwJzrnJkmWFVJvSkR64JuaYFgrkS6GY98TpWkxfnNDDqq8RT6tqCVys2EC",
  "key5": "3NibnYhdVyUojkBsj5PEvv2v6HEitosxQgbHci1MuYWKt6a1fnMPxQWveoKDo46hv1m7FbdN1kXrfFCjGJ9BEtPZ",
  "key6": "gTHXRh7eUxJnET2onJz8K28acbeWYT1YL2TDYzt65pSXTqgN5pukFJwH3B6RTVGzD1deRhzVq9PhRx53NXcMotF",
  "key7": "DaHz8zf5otVVNM3MrBsJJCRrYqXgHx7RVm3pRdMbUAiCfBeRDfN8KdpPYX3qHXUdpqchxscruerRKdMtmMowy9P",
  "key8": "2Z5x44v9oA32wfZtDEcMr8kPPFqeAocBfH2pmcJPPGJiSB2csCn8iJ2SMiEc4dwjEXuC6DoScRYFLMD7Ys1LA42P",
  "key9": "5DKNbZSiYPqqqQyBmUGdxWhcz9PimPFr3X53VAULGSYJNtPADGCWzsPMwFouhyJunUXdKrbQHpgMwrfVHJ6LayB3",
  "key10": "3NBM5zUfqFbyrERijH3SdYwA9nktGikc3EKdBikSXuPtmXUCvLHZAh9R5UsEFQRHLnzsdBv4ggiFUcCamcAGEdY2",
  "key11": "2dAFg1GrcsSVXrgLUsoUk8GBXpasnRFfsQBhfF4gEzTt8JTkARereMBUEWazAbbr7HHAhrZ3LBTTi2kKJyqiQRDJ",
  "key12": "65W1AKUyoE7QiCwaAPqcMxjKkVAMNAtRUku2u7sExJ1E21Dh2wEeFMsHjWWNcjaB2XCJXL4pY6J2EbQTJSMUu7dk",
  "key13": "umACAVHBRLTib4CdqVamgKcfMUeHAMy428nqD4tKoMjrMxBtoYzP7ephcodiZoE7Z9CGZkiNEPSS4AA6z17mGKN",
  "key14": "4FYXemBtrmSDRGN8mKWiszuzxJpy3sotX7Ci6E9SNp2EegJd71aQYEHwfFUys2QEavhEWpkULYDEHLQCVrqacT7a",
  "key15": "2AMzE5osZ4T375iHqDF3DJVQcW5tnFh7DWuYggXVHccAeLq8xV9eXoNf2R2uJtVsBQyLGGPDvfBqy5vKWP7ZMgXJ",
  "key16": "2iwKKpbraRZ4iGC6wPXgJvgXX7qS6BBi6ZnPR43rBT2TrgJfz3t6mgzSj6boboXxHvkyoyANWwm3oo5ZyGykL7HP",
  "key17": "4wxmXoYD4Sk83Jpndu2mJRGmTioJHQ6wHc6oXTD6LGen1JRGgTrvhQKHdjJPhesCgE47c6ZwNVrfV3C4GrntnQ2H",
  "key18": "3y3ibv9ab33nvRQgT4mqir1j566fZX36Fh371RXvTeYnmCF6SZVMgRqziRP5dLSQc3a3UBUrC9SkqNfU1NW2FRjg",
  "key19": "4BMSd53ytYuePPk3mc4pZvRgB5P4fgSYxATroGFSNbeYXJf3kkobKJjCf4eQpkvC1CbjRcPyXQpC8faNLwFAqddm",
  "key20": "5nerYPo6TRajruPUfkT2gtuizZabMFdTLK91GefR54aqaC8pKMhaHB5bFWLheo51goD2U37jFsV6w9rwEPN4kZkh",
  "key21": "3CLRu71AWj9PAGJEmsfiaPoyHMaCVJCmKHiEY6c2RwJ3Kvzvf4bo78us8S1MmaYPqVcgsZbpTvXe4MKe1ZbC9v2g",
  "key22": "2aqCUzawYtAqh6s1wGPDra7fZ89sCYwEzU1HQB9ygjMA9JnNmwmUM4ZEtsMm25gmMK3ABoHaeZ3it21NgTpc6L5n",
  "key23": "2S94663EhRCudprFiv5oBZnbYjJqoGbSpGYTmqtFbs58LShysR7cKe9EXLAKhzR7PVDxwSa9EnBJ5uXLaR4ySvo1",
  "key24": "21wTXzTcsr5UrMgzhWeUVGpHdfgFS4DBL6hrHowLzwb9bZtxnXFUCJdEqJjUjRrweezFYjVg4VQRXAbYTmBUBgaq",
  "key25": "5xS3YdkjVQKm9B9pSerVJRUVX2Abgu7DVXWrffHtzMWCQ3Mb8zn4zHf762eV11HzGFYoxpeK1QNwASWKXSu8VjhY",
  "key26": "3j5kiNV1mq2dxk4CxD4NQVXvY3Qp2yezjamgweVJamvbS8gePHN2LcuBM7UZBYe4ieeN422Qcs7b43vKVuwNRDi7",
  "key27": "2xgfy8FomBZDAEDRiyWMTyT8RcEoFNFy5ryUvv91qhHZdkGyWrj3r44r954aDybPGKKggcttj3Po2sCK8sb9Vv2H",
  "key28": "cb4zd6LsC1hfpginucEUGqAKoAiDX3VUZ5rW9dLUiQfVYCn9gSjbU4ceSNcm7fq4arSeLurYdvYiWBf9TGvFzDQ",
  "key29": "2Z1eTgtd3cQ1yGYGdBDzWyDzEbyZkhqERyKx5ucrqLji2hDgHyN22h5UPf5s8bbW1wTZ96kQHNDWs9TEmJgtsrNc",
  "key30": "odWe8WswtP72P5ciNTMkA1M8uQ33iCGDqqniEjtGPFvxsS6Kx5XTwQsPZXeTE8EqwRbh114Bh72hXZwyECJNqke",
  "key31": "3t49Tcmwoxd1hyVRsNUPYpAzL2ajcrHeUZfwAtRfLNwLEW7qRDybNFUCaPdtL44eDp131f9VgtzvbKGkXVB1Zs1C",
  "key32": "3QoDoXcneu876ekmzug3ToMh5p3Zk4nEdLGu6mejHejUo1nJuxWZs7VmCc8AqmX9c7XzjDmZwVVdB6DHnwWQ1KnG",
  "key33": "4wXebDEB9bNkR6rV49x3gxv9CmUhk9giDBRTJTnnw8VFPzFKZU36wrBuFuBA2qppqHZSdHRhBVsivUvKVRk2KUdf",
  "key34": "2X4RQpEX3A6MUCLKsKQXm75bw7SgTaP3S9cJ8j9pQvK68Y6XtMxCXMqHHQvXh97Z9tbq17jsdvCtXkeZGjcfh56z",
  "key35": "2rreke8D2e2Ln9PsN32fXztM97HW99ALDctXtyYVvskvpUWXfFETdTgmCr8vwym6Fm7yxypTM8M7ow84gFtfdmrS",
  "key36": "3KMPtiBwJLeJQuSfr4cVDSTNY9auSdrjNaFKmEzG8f2BAwcZSD8m4fbimeQRiiscLnavnzhpoubmmU12a38xvL28",
  "key37": "4ZhzgELhfXsvKnFnSDrdhosinBdcfLnfCRdfAr2Uhbh3YQ6tda7azqkuQt3423nfBYtGxVZzGacL3rcHu71U99qA",
  "key38": "7C5ZincJFujYWJ6PPvJr2QUV2WJZcadSoCQXZif4CkWAyUg9wsvB8w7P1DKTrQkMAVSZBkqbDEgRuQhNzqauhWU",
  "key39": "2rPhn4cJU2rx2aZ7DGVygYDGRMbxqJyswg3szf3zsPqeSB5L3Hk4Fwn1PotAByb8Co1x3cbUYKQkCbHZ6ifAbNb8",
  "key40": "5uSTkWjxzGQp7bZDHthJpUkAt7hig8wKJfqVPqsyqbqwBUUbAqZmqPU8Z5BgAERSBF3zpoxnqeWtxGDeB4cmpNmo",
  "key41": "5Ub3L1JFAb3DQSGyMRM4mZuJgTj32fcBJADrsziUy6GYLgmksxma3QUAtTkDbb9Mb3tn9NqLkK1BumRgPWbNnpnu",
  "key42": "NgvmFdg2gcgp1ZUsooiSHdyijv3EGjfiCwjLyiVY2s89KuAe4FgkEDmJ7obiGysEudDQquHwAH7bQWFanYYCrF7",
  "key43": "6aUHebwLgXLHwv3ZqRZSSxi5FTMyKdCnaatPSjXLXAg25yNpTpFqsaYLNiu6TCDEscSLj7eLVawGKDSjyy9RCXz",
  "key44": "2ZA6zqbx6M8SM34SKb8zcPx5YAVc1pveH6Dk82JEiTjJrKCWGgWGXJH31rAqfbBeyG3ELc22f6NqxEAoTx6bsHzi",
  "key45": "21XYYzTBU7ssLYzeUmjLj7DgkD89wJwtcwCznNBwLzxrTZGv43eedEQJtLfCGot5JCa3eavz2WmvSdLb1FioRDPP",
  "key46": "3Mdu8cg1PqYWkeW8YpXSWwnvWhdh63qj9QKv1XdDfYKHqpMXFcyYMjLykmaWK3jy4o1wwxKb9uKPqqAJJpV7Atc5",
  "key47": "5igxFQPe74xPwSLJKr9BQJAgiQ9q2K1ojiGvTnkWisSYeYyukZhWUgxitLaXKqvurXftAiHJwakpFcg6y6SYbYL2",
  "key48": "2GnZCFuTPy2E2MCsNfpySdnuqy8yjcBapcTxtXQUtbHXJiPwqZhrFC6RZ3ResqZ15t43rVxkTmi7MkX4dW6dFj3s",
  "key49": "2na5QN23dU4JDa6JAXrpJ5aeuhi4RCuj4MdtMy7QwfCUkMGWH1gxZRFTtvLhQ6RVJVANeYMfvrkv4WZQ6ULMXjX"
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
