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
    "5ywG7ffFmvw4548ceCJdzXs63wtM1Pyv4FtqudZGJuBsEf7djD29eZhMMQYFcjTbeF3NBtzYkEEtf5ZJTpGgRNVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VG95dLStCL7iCGHhru2TeT58Md59GaDDczTo4SorizaTdng2QMRkqimT7TFK2FMzUqZgWUcmP8xseZpNx8kQ3Hu",
  "key1": "2wLcESFa5rS5kaPiasNuWyLJT5VKzypDFn9DD1AqifoChHqr27L5w17TnR91CytX1jXePYZ3nPN85dj7N1z9ZMjn",
  "key2": "c3q3bjT8hsodGtMNphCb8d5c9YpzrLJTiZNbRJ4eDpuosmrfSDvYqeEggHfVQCCQWyju176xp3HupbjjtDHq8iW",
  "key3": "hGdB1A4Gv11ZynCSNDLcNJ96CAKWM7pDKfLkGkHENaqtXYiG3fSv4asLdHh2qRHUJ1Mfep3RcBFdpbnVe68BETF",
  "key4": "2QWMzLKGmspfhYHpaRmcYyrQUTJyBneNtDnydLjCWYV6cP5jAj1RnAYd8vPbaH8KAF3sirUiyqGUFEKN4ErD79ZY",
  "key5": "4xP4LJPWhz1uNhNMi1nPHPE1EepFXRsjkUvjoVY5gQQ2J1jzxYpdTfQZmmH6aySAasFoBBntoyiJefQLQwkwbasd",
  "key6": "4gr7QBrXmQ4arPYEcfgSzkCVeu1hRHhZXGtT5c8EPpK5jNZH55b1RtPmswPk3u838Nj3skYTqeVRdYjjcF9ZZuGC",
  "key7": "2FpGhreJukT1wXAKuitxwhDgtz2ruqHQzYZ98Bv8kurGEpJ7RaU2HScUQuvixsCdDCXkgGR83XopikUbi8sdPL92",
  "key8": "2YzeQYeWzAn8Hzo5QSdnfh9xc7zQ946hPkZk4Wp9rbVXbKUakhwv2iBG621ZGjgzkHTa2wT2Wqf1LQoZZ6fHKVyW",
  "key9": "3jiC3ThYjL5RRqVjACpAstritNnAgER4mqymCZcqHWuj8x1LG6RttKqgQpaRvnPyYZzsWktuu2W51CEkJVRw2Kvo",
  "key10": "gMBWd91YRwLUHhyMQmA9w31XrvQdokKDv3Jhqn3eFriyF4zSG5sYzvDQ5DQCnx8fPhdfM55nwT6bSyakhg1bSmg",
  "key11": "4PvzXoJGSFWcBDMnMsWcigCn7JXtDXHUuYSFXpPPxE1nBAyNcCEmaSSZwhqzUzDyZdJ2stx9rRyHGrbbncphgdKb",
  "key12": "5cbgBEmaBoBiwfKwReoX2VEgNvimeYqDuhQb4mFR7wZfBzGx9K3hVtyzEco5C7JR22dGk3aP4VtLCQjK4UN4TAea",
  "key13": "9r5DoWFnvDfHaWc88JP1pbWUW83wbHPKBHCrTAxcodRG99eKyNfXv27CB534LpDmTwN9BPJf7jFhN5xojJKjy9R",
  "key14": "45E4A3YHCZdQJ33VnMSXPhZnp3s47r2Ye9f9BdoouRGZveUqe1shHxGSyfsCm98LSGBnJJAj16ENZ2gykG3FsmCb",
  "key15": "2F5ueA2kNko9m2qiLuBufrZGRwzh46JMUGWZZySXB24ro1W4Cab5uX6GgijAFJun5XkRxv59XGfqB7vzqjZu1UkH",
  "key16": "5qbwYQujRUoMQuSAZGFiXSiBWmpKTnj9utZjes6mamn9aXbSiZE9tWwB7r97qZftuar1BKfjn8NQ9SvYNTXBPQgo",
  "key17": "2XvX2vAxHNXF8eXGzayAjk7UTZqj88HFxRorpeY6AJpBk5awBBs5mANg6RAw5zZ3aEswyPsoqhMr6zR482CdF4rm",
  "key18": "2ibS1Z7QrPf5DKW4X98r78Mya2PjXzb2hVTnYEZWQF7pgDhEWq66EugFCHGACgzYSFwjqR1QWGmrcuYN57kGQ9zC",
  "key19": "2ekUD3kMSiz86e5BaCfassHznzAGEZee3G7rf5bRL8qgBxZMebBRznbC2cfsdcEbYcZcDay7YaPKuftokhhJcwdZ",
  "key20": "5QHohBUghm2MF5evvqJ4zLjQmMnC3qvDcKTFSZFHRnGWAtVF6WMP6hyRHkkVEYUGGg2neNu8i8vBzeUHiHseJGaA",
  "key21": "21juTHk9asVfKzHHgtcesU391GreVxSS82LwTG2CczEwrECSinr4uv35QrojuUPa47HuwriizNUAJcWHVSmLsqEx",
  "key22": "2wHiniSHJh5zduzBZYacoyZSRCWzurkjuphfjGsUuzD6kbNRdJwPtDoQDVGP1VywKaYSnWScTRrp83YRXZwrDYQ7",
  "key23": "3Whzk4xDcarHkhrX4WGhgFKz4bigpYrS7ngCZLwfZCftXZT8wHUMRz4AHZdCMytpfzV26qX5cDmgBUseKdNLxdhQ",
  "key24": "5wbtFnK6cqKxJCQ9qsx5vJTYX6ZkhG9pURDsAT5gvmDZFPjmrNDMYb8SbmkVxJwhGC84ZRNNJhPf5KwvyyTLpfza",
  "key25": "JP1Nm1AjatZTMsGMY9YyUyYQ2unmBWkqEmCrjL8it4Qnim3XLBNg3fppw9cv4bveGkHyf1YPRbebwDxVPWjVqXM",
  "key26": "4gRzZhEN2CEWji3RRcWD7asEuFARLBam58oMvh2M4tqRKvTB8ohKnjYzrCcCQBkrquvEJvnr6FEZA1hZjJEGprGm",
  "key27": "GxWExUKbdFHB4kSfemQXccAwcd2UBs4cnsvfeNsoViJKUSuy6R6mSJhwXb7Gz98NjVDkwLCjpT4Rm6tYG9xRoKT",
  "key28": "4jAcoVdakmU5cHHQ4VNTBTG32uw9xPQR35Sfoc3KFtCLaysX4jufiamVUs4PprZXFdNKEyqkkApGkx7Fvx6CcM9r",
  "key29": "3f6oQ16sqTT6MURNkreYqHHt8xKnheB8721hHqZWzBwmN8i7GCoTpKUXcsixKG4KGeb4EVdPzR6MwC6pqvcLDe9g",
  "key30": "2P6CauvVb9hBEbCVkuzmB7XLZnzaswTwDj6a51XHgcfovmYTL7wMUfPudZtyiL5QLMagqNAzifZQj6zXTRyuQBpk",
  "key31": "485CcEV5BPXAYSo4ggE3vkatGFQqy1jipCxjCP96ymLFgVXGuFyFw4drRiq92ZJ6fyB3F2vYAsN52zEfcE2rBzVA",
  "key32": "4523cCvchvASmWcMauojhguJ63WywD3cz8hUfezHAUP1rHVuG5WsgrKA8SN7BEat8Uv7woCSDRX5wLH6TSRsYcur",
  "key33": "3frfcCmEvNUMpyQsHvcdqMYthgR2Jn7NuTccTxgmCJD9RyNRWZ8LVLHcwUr42gG97XsanPKiAk4ucEnnsDZruupp",
  "key34": "3xF3W2qXt5SrmdxF58fyLKGcdr8gRc5bqTxcYhR954u6WHQFKVr3Gm3oMXvxVgcyjjDhmHEFeKS6sU6CYksTuDFN",
  "key35": "3bfT14gLPwJys7Xpmpx2Jwqo8WSQYqatxBxaQfDw9nxEvRfLQvGyJL8bED25ZEvRx99hGPYncEmoTxoEmvn7eoAV",
  "key36": "2mV5S1ATPVXQ2NqAbqKqXxayRHXyV4Y6oopQMmorDGX3peupkm61eoy6hKU2PjVTNYq6d46QZKWKRv4fYm1riafd",
  "key37": "4Bf8outend8Xmiivvn6RqWJ7ge7tMqAk3Qe7BuWvBQk6o5ixgKs7erLmacM6irso3tewGhor2K8BiEYf3bpNJiNG",
  "key38": "3Nc4Qe3PUYnk9TamnE45GRhY2MWNggFM29PWEh2Vtfcxvf7pegUJDb1zqBbyJBYsm1HDKyrrPfiYRNon7WTzgm5n",
  "key39": "258sWaKURfzXk4ycEBpV14kWZ8PDNTySh4aXSzdvod7VNaDn7WcHToZwpVzkiJ62GuovaRYt3pTqqYGuUa4GwD1d",
  "key40": "R6LprKBn884BQhPr731Fc3ZnQCDQ96Cr88YRP9geptHzdGbJWEHFyWZQzswcneZ8ZoyGHE6i76vbSvdRshFSPAB",
  "key41": "2Vq7LpCw5gFWaxmWxuVMSfXfSScPs2WVnRucj86K1mdo8QhNbD25fiUVmHJD1k5ASELsaRD9S46Ga9UFHNFGLd3x",
  "key42": "5GLEdHQui3ww7gVs5YJJ4rdZFxnaJjFJUc8571jheazsNFZrSM23jkRipQmdYKXsVp3UwsZ4Py9Hjf2J4iVhYBSA",
  "key43": "2AdZtU5B9H2jwAjmaKwunTruadAQDQokpS8GLUsUGTdKmM4YVFm24QKktBxfW3QDkZYuwW9uBJguEmixpxubsqyz",
  "key44": "4g72dLnPgX1vrEhwML3SdAKA2c952fDm48hK1rJGsCmvTersaMvvRWywXzeuYZx86xyqYws6tRLng7yaeWpDdkUM",
  "key45": "3uTzUAMAYDHaZW1pMzH7WPo2Mh5gim9pmAaZYmqFDdB4JpGCyD9JSL4kfVRC4w1EKVFEKJUfvSK5ScLUsZcGVCwL",
  "key46": "P1cK5AFG7h2oKAtwEcEo6XUBuEzWnpNCAeki2d6xypxXqF2T5QqfaemUPVkJBTWMA9MEMpcNeg5QgyqEVwoMU1y",
  "key47": "2KNZtTJNUmJ59oigTAMk8PxQ2j7BW5RELsm1JxiCQCKPBMAaBeHkxUR5jvm8qBxWPsvyEdYudse1WvH1o4yAK3YX",
  "key48": "4WT4ZPNh9QJVwqAMqtVF6h3W3WyUMxeBbBMQbiZdYHvy3Y8AgmaAavXx8YPbyT5gGrgTBaJzJDyHUjwpu5S2z7Wr"
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
