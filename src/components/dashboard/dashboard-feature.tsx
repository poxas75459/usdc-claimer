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
    "22kWGuRvTYgT4oTFSgsNmo4g8jajaZUGQPgLQmC5N3xNoVg2PfaucEJBpakdtQ7ZN7EbbVHXHjBKRk3hAboyMu4j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MyeWKoPperyCpvhwA1CFPehKvP6NopCEoeDWpwVAzJMKwXJYn6J7Z6HX63EC6EV35zFU1HA4d9tfXWWtd1Dyz2G",
  "key1": "UR11MBqnNoW3iSty55sAFvb9Pqu2G7hVtkLMT9K3Vbmh71HFQSEEeZW3kQ1Ceap1rtHuRvYTgqP6523pdDt4RY7",
  "key2": "55DyDzvYpXXZQfcm1dzsjSigNJBiLjST9hgt2ff6a1ffYvqvYaKVzEjgLXFGwHZG4TuPdbXFysgxvQYQjUGgAskn",
  "key3": "2Um5KrspCzn24qZ7e7f5g6ahbUDT8ddYgKmeNNVR9TmCUADKTfjMnoiikyuPhVAP1bV7ypmtPEgiqM3F8cCb4LP1",
  "key4": "2b3fcGUj39UG7gk1BFJ6Mtz6QKUBj3tHHSxyVdcjaSz33ZHAzXQMWS1iygc3uikLytG78oXPta6q6F7QStSVAqG4",
  "key5": "5kDs6BJBXNinEnUNYKvmmoYBQHeQfH9wfPEyC4D9gK3m7jzcsAcFqckg3mwxWjeqDibNHnctcVCdHx5j2VqgenR8",
  "key6": "3jZejPp9Vp5y4y6fytb3MGvYqeygjEA9u5hJt2mkKmJKBcAuLgkNS2DrgvWNER6KhwWcmSsuVhWJdwzjjAuTV4x",
  "key7": "u6KWWf6WFBuoAMxpeiA22gvVAF6UeZQFEfE9kfmUpDCuAwi1qqqTrpVsSznpC8b3e7NNEKDyH1L9NUQfje1t1QY",
  "key8": "kyQMyWn9GaZ76YncHTfAaxME8g5sjKvfu7YRkfYwRJztSJXoQFf195ZW1p1vRYcZmLzgk2sB7yFSRHsK9CNHjKf",
  "key9": "2KMvqYQQNfZAGtLrsFyivtTvgoNKLLEEgkdFFXD3qLnUYM4PqM64n1xv5bPR1d5brFbSQ9dswYpcJ8KmNMeAr4Ws",
  "key10": "ycP7Yh8Ms13tj6pJArKXJvSFMtH1X8dKjA42qNLxAc5NQsTzdVW5ovuAryqWoWYh5Zw6HzKeLGJJ9H1wERqojNr",
  "key11": "2Lh9jyzjdG7C7nmFdpc1JqoKEiswsqDNvKcMM2E4efywwFhd4oc3c3TrNRjPe3XGxxAJmBfP2DkWYxPgQTVpXpf8",
  "key12": "5cpBFppDUwHcYyxxpce5CvUYkFcWJM3LMBSsRWqko848vep7WpnzKPEAXk7yaET296y9WmY1UZ5thRCgyuFyBFjY",
  "key13": "5LXt7SFWEEtqBHv92BqeRj1CB9Ahs72iv7kPeWkU2LCv6zvYTPbBf1Rgh4gQppxRuPvRg3VTfWkBaawvQaBVF42D",
  "key14": "42qNcgDZZfrUuXfgVxafLAH7SCDEeGWMiGcDCchxa75VMR6CChdrs4vNSZwUEvG3jstrQjk3VZBpJf1hEd449WS4",
  "key15": "3tAjhDREP5iUZ2fZeAoHC32ZBAvuYYzAKaocEzSTCgVYvSoBxSFfUUGSoUorvudMuq95Dp8SJrkZiiHY37zxwn82",
  "key16": "3VwgByKu9kwUNtdSXnDDmDRDnZAqkCY8tS3vWie9PkdCmAfUz2mHo9LajHADhfaHq3XaADfkB63ZhRUqDQPgqPHE",
  "key17": "3WiVJNgB9scfDcLEWLHJ8b9zdLXWTUpUshXfRRscNVtpFFTynvhFa9Jd4k4bDgZx34NYQMgVsx76Yx5Uo6PoFcrR",
  "key18": "KcNbmwNYyk8dsAFFsWMNkbFn4Qqwcbi5XW6xx6hsWLy5YSpAMk3jPGYkMAGBYvhpKZy5oq59LB2WEa3oUKtqjSf",
  "key19": "3aSeRhWULfx23wqWbdDsnVvkaJgF3Jp8z1PhEgzFjWvLkfUy6zs991eVftKZsWVc4NF5T2MoYfBkeGXEGCevfjNa",
  "key20": "33svDWFhbELHJuHMcxSJ83obboEAJ1kRPSQX2WCKdchQwxmN8qem7tL5cTnFtaSeoHz2UCdjH4Y85RyDNQ1Ywtkp",
  "key21": "5nbAkoZcprQE8fL5a9eMsCGb6tQBm8CCtgcXNTLCAJMaV6HbFYhSjhngwcsmgD7Xe86L7vSmW7B5jWVV2nA9MdVj",
  "key22": "YEFYfMVpJWjd8dWPZZKNs4wgSFLFMtD4Hm2g34fxVBVV8MoXJPK9B4tNTD9NqYpm1JYFTp4qwPortZgGL2M8iFS",
  "key23": "2FZNE5Jt6SohuGe16TStxEcTmW7BnxBb5vJJjV3dhgb7LwWzq4jcjNmTVzrPuwRFEF35cM5kGceHnbX2rG3KSmpW",
  "key24": "3Kmpqs4bwjAN761RQoJjQh6FqTpiQaq1yaYDrMHHPtbcA5Ev3z2bP2A53dh7VSeqtcES6yLSJJfUPnNDmNhD7o7e",
  "key25": "4SEB5dCxY5oDh9HVoNie6cmJfPJukaVRqA9HiNxz1L7GuVtZvbQCofpo1WDTBhzzcBE1z72s1kQPMwoBnQ9ZMLrw",
  "key26": "3cRgMvnDEVYF4Ar5759An2Z4DptaGtuQM3EdNdrif98cy7ug7oQUGciN4CkP9grVZP8PxBu9AYWPArGyGEethWG8",
  "key27": "3kiuwUZg5HcoWWR4o5bqYMgwvczttm1RtaPEnhJjsGFjX9FiMneaMmBpbqEF2mqWBcDkS1jqu63Bx3zRv1bq2i5x",
  "key28": "2CSbTx9vgTWSdGRzqz213Q4bC2JpPwWEzVWpMu78QowvqMbWdg2DXZVEGFgHtdUxb39p6aX8Qu9n86HDpcBtAbtc",
  "key29": "2Pbj232WL4zuNgRDziZ4Qv4djoGwLtmQKMkLAHkJvEevjRUu5mwzQV5QXr2zg3X9ATq5W6wfP2ckRC3F3HuDkBTQ",
  "key30": "5bvFxg92kFCc4VysCrgzeqWc1AYuTu6iYxfuJRyZNe21FhF71sV5LLD11S4DfeT3MjqKWyhGHLzvmph4upRrMZHr",
  "key31": "3dmuoxCif78KxvmEngprFe7mxpcAJ31YQPdsx8aiSWqYYhjH5efkrk6UQYqUrkAWv7FVD914a3Hasr3GP9HLYpZM",
  "key32": "5D77LEGmCgT3zi3HgsAjzoA21yMd3qR5kfxhnebb1pABg3nBmPbU1XNjBkRpeUfVu9fQCh9obVkfjaDTfM8W2uui",
  "key33": "5MtNrjvwPz1njUiUaBy7nU25fCKXTx4dsuV6EEcX7wG9VJ5ZftgdG9HA5W3Ahw2cNAL3DsHTxMLZ1iKb8K9NJ6cn",
  "key34": "4hbghdcCYkdrzMwzfAwX5tWAucjAPa8HA3ykZHqNUBCTTLAgCtgU9KP21kKSoNRNQXkcD9imfeE7iTZFvBF9XmFV",
  "key35": "qqzL5dn8YMi2CsdYnLmDfTovHYNjSHS2NTvxJYQtzkVUHBiJdp5oFvLnwTXjvGeSvDzb7aaeqh8MaJqXdUSAUeq",
  "key36": "5p7EW5AS7Hvb73XxBTCKU9QmL2ZVYUmHEDL1a78m3dVUf8snd5CPSwN9owSosmSY2PLu9wFjn3akqUDmuiU8F5DU",
  "key37": "5WmGvNwhGAbrfpDsKiQZB59G4jyaixFguNSjgWCXceLzAXxcNi7cXV4KxhoG7pb5SY7wTMX6LY1S99kK9kRokuZU",
  "key38": "ANzotDiwk8F7QSnY4zT6e6LZfWUjEARL4LMNyzzd4RKsGUK3UUYt7nnAxCJdGL6FhPY6CZgRYfuAoTLNScwL2fr",
  "key39": "5iqd4bhsWiZtJThbxAzjSG6PDe5dxdiU5SWHwcKbKPCjk4iqGjLu1zJM8L89nxDfTCt2fDpCyAk5dKT6TipKccVh",
  "key40": "SFaptj2zaL6YEkrh6smNNXndeuCpwdNhDE2QP4148Gb8R2vmgBYaH8PAHDrsGFo6dCmTuay4x9ZVdTJdFnaiKKj",
  "key41": "4Ed7p4KdpoGKBmpkyRJzktTL6Lwq8D2RJHwp6Pafe1oSv6hvPqp5Htn7WKwfUxN8Cb7RExQ6fFy68XtXfwE2vcBU",
  "key42": "5LKtTub4tujfXxVcjX9bHAFhyrBVMioaQmJ92AJYdgULAiigqsCjUVZad36j5XmDSXBVmcZz2ufWTNC9krbfSWtP",
  "key43": "226kMZUBtKGeNfYs6fAjw1nsL811CumwGQyoLYPrCChJ3bxEJhYedufdPwWAWadwC3M56MzWcm7thvZy3jwtNZgQ",
  "key44": "5K5ZFxD7yGvwc8QB9YTtLnC85UPQ6aTMyZ2kdfUKmwVk2L1k1eszT6mwMz6LBaLGoUNm8AWnwC9mEuGe2bFT4TX4",
  "key45": "umymh2PJtChy5xR2vDxqBHsgh7tqqaUadWSViUfWQo1Xh1udPGsugdXNnefjg9ZGLRtUNtdTi67qA3QwiehAoGJ",
  "key46": "4FSgY3SPdDKpSMsBVfPsGLBLuDHt6JPDUjXcEuMbEfTLkMWo7gapNYvcR422s6pig7yDNcM3x6YJX4mpWZywdkQ5",
  "key47": "57F6o2eReG71v6aDeSvpHA7Y8Dg6dMFmYw6Ats3AGpzP7Sm9RKrwGDzyyW1EX7vojcFNLjbmCmej4RbP12Q5o6JC",
  "key48": "3neDxwMdhsFEZ8Tv2UTLhnzdykAm2rxGiKUubCCgEspHUeQM5J1arPF3WhnuzRKMzEEzHMRJHEt5G9NZUq6QWzLo",
  "key49": "4hCY1Kd4qtyeg4XugwuX1BpvCsEkecoToeu9ERNQqA8bHtD6vucrcnWELN7euGgGvB3qwa19obXWdNikLJM1YB4b"
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
