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
    "5RFXVjryCMVsxd1bXcnZk69v2hN9zWqnrbXrw9kxjEAnGG9eEKr7k4wF1mUDFpanch2hiWZ1Z475pBS4XnhWjw6P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25hSZCUkQyHx31aDZjLk2pmtgowHUW8VmwzASfdN5DFpCkFqpwaNdAhkG5hNXG6NYoUWc7ApcALKrsXkXowCsxuk",
  "key1": "2bJEgdt1r9XkN6iZTvLWQFKpY2HZAyey9FPQKXRaFA2tqCFidQHyvhVpK2v3eFSRoLwmoXPwFRWY5Shz3MkRLotL",
  "key2": "FHN9XvPhSnDYUbSWAcLmDLQjbDgQukuCo5HVZTLQfMjDM5Y1TYvwDqhuRHcmwdNHzQXA64LPE5LXXWoLBHqA9qW",
  "key3": "bS8Zk614bgWfyERJFjz1vCAw3TqVSkQYS9yBd7PvtiCryCXt7E3iGHHACJmuYfk27KUQ1C1pstcE5F5XVxzyNyD",
  "key4": "3UAjKGMu4RakJHMqrwy6opMtL7iUTKJEp2Z8iDavYr6h6XZvEJtV4nXUAhqHb9B2B76Tw4wYgB1YEB3xBnHSCQLy",
  "key5": "42Fu37DDJgTjqidwrNY2wYy6q6hrUP1FrPdPaDK4ePrkBQArVGnUsqMrYAW5yJR7sPaeW6hYNyVQxM4aPLcmS779",
  "key6": "RW9CkaNXhSdYDuUw2xxG8avhvYhVN6agn9qnR9w7Ba4ZpRZ2ntyJgAdUHoc8mxAAFex5rNysFuE7ctZMjbVkJgq",
  "key7": "5ACYYJsmviLi6ky31hBTh1PFkDzaJ8LNpQLEqP28Kf5D1EjrTHvsTmzXEbggSkYjDBRGmEBJnbnEpkDhrXu5MDUJ",
  "key8": "4cLu56rC68cPnvZoYduy6iVzJ4Gudj9emry4WdTs5orD6VKLVPxxyz5q7gUz1mkmpn6sNXL9PzbpNgHcLacWMhew",
  "key9": "2uE13GUT91s7jZG6cfbdCxrYFpsy3c1vRz3AG4z9WN31cV9kcVEPCEXRxnFwtwDNQM97coQm9LnXccSNtN4K6wAq",
  "key10": "UzgqsvQHcH4NrPE24okBcgen4MkjzbcWp1NkrLzDpQBqXM4bCiecq2AWYiw2xDmD3jF9oAuVRGsN1SEAuBebskH",
  "key11": "3VkAcYzu7B9sUoxN7vNA3twDkmY9DHKdY3W5PA16GD5SELmVhhwxrjmYS2iUJDrFVdQ4HcFww6YyrajQgKYHgMLF",
  "key12": "AkRDCfb4SrzkwF76SGPZkBBnLXZpxTeCDWM6Tu7Q6GnMaJ4n6EKdWaT1fGW8fDrGLFVmo4wSnJheYHXoSi6ZAAQ",
  "key13": "2jzEvg8mtXxPMgvnbGvzfpMExEJ8vYsmS1dYDSoVvtMs3gNktwW26Zp3B77BAcesdNRn8QkejVRYR7gJNxkBNgz2",
  "key14": "4xSJFmdes74G13rbfMqAncYPmbAbvbV37DSuwEDYC85YB26UoYy54z2Gr1LkzaGKCgpL89XNKD5cofPYBKo6Qx3q",
  "key15": "3kBPrpLQxSXLtrrmZTzz1iGxqy56dBntrLyDxBdPR6YVghUt1e6bDFbXAqtqHSyWi9P123nKHj3Lc8oeK3B1jJSP",
  "key16": "5APkKqQbMtq8uaQmmstN9HiXSMwJ5uL5uSdJArXZFXd2Rtnc1WuUod8cYDHnqk7VHZeYDh1NK63AhKbNGD8nsBYR",
  "key17": "5Gaom6F5M2S1speZmpb142aireGncRMS7RrSTtHJAfbjXeWTDBqcFvt1VVBUZfe2E24GTTKq7ModirfghmXfboRm",
  "key18": "ndzZnR7oHXpj9smzk6wbSdxrCSJ8UErzSHUQWTY5Jc315vFC29VwgBMo4Nf7Biq882uycM6gYJ3FE66HJpp8fy3",
  "key19": "5K9yYmks7mK7JWWX3kNSgw6cm9t3MN1jZkd5uxHdSTgQaFPYLqYeipmP4ciMo627QajY1w7xxEficegteXbKKyou",
  "key20": "Yv3g1RwiMDU5Zj45XyiVai8EsVJjFxaMV24smxqWSX4kYURV2CxgTLTKtiqgg4CokojaNqHfEtuaSGuw6kDLaDA",
  "key21": "4Fno2QPWi5bhtBga3QxCJMsmFxuEjWsv66kZ6ZPG2RudqEmJ9kCkVwCe6zjuavComW6H6y5ozqrNrTmooRZAhxWk",
  "key22": "42pay4qSmVbHAZyL99avaSDwustEQMyuyAV6SHMrUvatRLLe8JuxzS57HNeEb8RMVP66qP9bUckFZPqTJigsAit9",
  "key23": "5N4qgBKK4YrgAQBFUbzY8rKPU8gcve3jTWmPtSRZBk5BNvB3334swziQskNvQ4J7ze6mdGM6eSr3Gjoa9x6yusEX",
  "key24": "51mM4dv4rYxYsZ8V5DrxAvE9wTeZdjGX5Uyqajz36Jww5yqqmxkPeVH13Q5p46XtwJuVPVm3rywJEpGq1oX6BPSW",
  "key25": "5DMZGLvwEkrj1emrxRt5uwoAzgrJtD8HyB8VbkUvF7dxQcrbHK1qnz1LBFmozFhwFegbP2osp9qBtw5Kw9A5eBFs",
  "key26": "5N2NtYBFDJ9j33kea5CqG5ykzSLSpsDdDWJXA51B8Ro2P46cV6r6Qp6ZQiYwfzq5MZwdeQm8Z7vzX3iZGAT2oVQB",
  "key27": "2j3n4RiizUmS7gqo3iCbYCYF6pu2Nea2T1egvDDdK7YWoqSJB8hj1DEwkUBqDvpE9NEc5t7FFvybcjefB2uBARwr",
  "key28": "44iMNHBjVhMchjxjBLb927cajKxXrzw3CSMCW8WmxXJLZheYGs4LGuH6xsxqif4QzBMrJavhQGd2K1G8bV8rHdYT",
  "key29": "o7GdZnDVC3tiy6pVVTALeaVRCkbdVEKf2TAtW1NpDtJ3DsWPYmcdLVbcszhUejbtM5sGJZA2w2eNvrEiqysG3bW",
  "key30": "4URcog4eFrja91LAZw5wfnerMDT8tfgGD2DmFU1uXS4XtpZJ5ynJjgLeRkQ9mvAYpx7xtSpQmb5xPcZ6pinBT7QN",
  "key31": "4DEAP3GhutCCDZpK9h3uzQeacMVyfGNJaggUwspQ6SgkbYFSBoKzGqoNh5yhgPZypCFhbjb8tydRsge7P4E2w7rm",
  "key32": "3TjqJmaY33GzSf7eTNTwr3hVKMji33shnY25y4KD1FjcceRp8PpjAaoFvZcubTUEUm4P5re28Eea8STSH5QXLuHx",
  "key33": "5bFNdNrwopMatYdDW7W2HFAxhfZrxtsPEMBKizNa5mi2vgfhxxEuN6GuwXhFL8cM52AMJjXPNwGfekp8a6KcLTkk",
  "key34": "5ckZaBAJ8dkki1gqvZU1Ttad8ZiaFxHrfpVjhRsmV5PH5cXdcy955iYGJ627NQEjuYN16zqAM85LQQ8fAe2FtzEF",
  "key35": "YnQ2hpjyUWfaEYXYh1jiGPTSW28wEB8ggooCCa1SwUoeCH7H77ELr7ga1c1fT19nv9e2G2bUqmFASP1f8F7E2cA",
  "key36": "ssioT5HNALgtgdH79AXVWvLBnPxS3AarCC8z2T4hT2iBSqBWvkpgPVVaag8ZmtZ9w7TToRa6zWgiKC34u85KRHn",
  "key37": "UMVbvkNfZ9EMLHhEQ7ftJxNPV1kR1sAwjMc6fFMENanyq68QChQmirRX2akDzTWr71vMV6xRU2mBCe5WnkbWYLZ",
  "key38": "49uNrvsm8omXfc8Xff9ZaEgJQjGh1jKTg4JEAsYrbRVYjsdaY6XbmuwxbAAn7pmBAFUwswK4wXiXvECDFLH8qBMx",
  "key39": "44kmTELJofrFGMsRe8BYRV9vbc6e8BovrrdZYhQzTuMHWJb6nyCZb36TkLqHx16gtbHs1187Y2De5zt3m1eHrPa6",
  "key40": "2o33pFvCLQVZiCkhiqDHWDdYGFJNo4T8PN5zRvU2USmWHTeynyLkJadPpKFm8yeMP4mhCwSoqGP5C1ra9Et3uCfd",
  "key41": "3LP6Dwdjx1NSjeZ6BGHyBpGGwjf2ZvfXzTusSMAohNXnKVr223EVxnVrpRoSTxaMuvJhke1BA9czas4vuTyodZYd"
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
