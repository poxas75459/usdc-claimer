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
    "5NszMPMNoyVG59LgD4izLXYWz2LkaNMDt2PGUzDTk6TmYrqqsDz2R5ARWDfWofhmAwJGNqaNmjAbpfvxXV7tVvjw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eaohMfJmZfDHitGqLytreFCnoxqGtJEfmo156Kg5a2iTm5dibt14dWNmC1NfEJiWQzhPAAdcG2NfKbtrVqXGprm",
  "key1": "4B8BGPXoCtJejhFEcLQKFSSrNBh8KP6T1pHgcQhzhkekf2sxYY5sVyvJF4Ahz4iyVkkFNUTb3q95J7wCcqJ9oFEu",
  "key2": "3WnvQv6NV8gkSMvEBUFC5qLWihphsPHreRarrnaA9ZTFVghGBH83oUio82Hs32h6dVT3ojHEJfQ2w6ZKrbWbSwq3",
  "key3": "53W7km6KnmMdRXjAZJPhKtYMPojm5ErzFxaPXNnxXSGAcXS7J5yV2cPNALYA1AfSQsamDw8bHnUkoMNxUcBcmWgK",
  "key4": "2hjGUGAT1jNVn5hYvL3yCuK8uGAAh1bWZ7CG8xL4JBQDUsWfJgyWw9hg85KtvWHZpoxA5QHwzPSbc5VdSs5n63Pq",
  "key5": "3dRW8C76XVkKBfRf5aZTMJVvh3Ud8RrSWWGiUa3GMgt2aCEMe1Y74684e79DshwCvEeKN6QVsu798JfDxMtbxH4",
  "key6": "hZyxid4vgRGHF1yLdA9GXUHSQ7FSPeVMdvVYJvVQMP8PMdYLztrBbNd61jjhxUBF3woLDLwF5h4Y4deraM3nSEQ",
  "key7": "mzsqB9W6nKZmUFsr1yaUfnibu597oow6gyXtKHTR15hgKPv6uq7z6mh1JSnnzotRwryK5p9N9tDgwWd4dmsYwsW",
  "key8": "45NFQXc3YAmbwTaVc2iBuJHNXyVkt6qnrt9NW1XuKBPguRTCETU7ejnarHkwSiEyvYd7k1ijBfRzae8yLehmDY19",
  "key9": "5f6XAk7WkrHEtwjXuzfwgKC41NwQehvuUMNnmAm31RSFNwFqdaDus53ZhNduT7FEXAERJYYGn1LVuXsv8ifu3au4",
  "key10": "2MydJqhNdft1uy3AVTQ88CFRY46pAaarr16GNLo6S8EAkT1XsVD8mvfQPCEJ2TTf4mwz2gsvrMCpFVbBP2gL8xQ6",
  "key11": "35v2WAai33Dbb9dbKUCLxbUX3zDQxhUkpGjJsuZT1KydC81ZaLXbSHwTBmqi6rDiuGZy6BMyUEn9DmVt9VJSfk9V",
  "key12": "4ySFNb8KPGz3NWvmEv5S2BkTDpJFtGefwSitC47zwx8EJqiEg64MK6e6di69wHJFHESS4nkSjXLEQo2D2mAQYaUz",
  "key13": "5t8UnXR12ACh8ZUqTGPHAUnsWCwgHKumYLJ5qrhbgPgdSaU5i2MdsM34qEDFNsq6M7eEMUTx9ZQmtqe6kadpQrv9",
  "key14": "2WGiMfDffoCB7vSZd3f1zZ4f6mC5ooWM3W5c98yW28jheD4NgNwGRSYxDXwqPEKach1pi6tAjPnaowNLVuxmwxPa",
  "key15": "5dFBHTKYfDy85gno5nyCcVZSJp5pstAGbMyVcWzuixTEZ82TYnZdwsU3j3dBEoUfgyJHMHUZnHHt8PAo4C7SK6eA",
  "key16": "2gNNvaaDviQAHg3kzoXGeQ5SWhExMSTsB5ypPUukT8iyTxr2a72eh2mdrkCV1yMJQbDgqpDDjkgxUMh9WtyRCMPG",
  "key17": "5Tr5Ef943yhjjS6t1jWTnJfV5BUFZKFPqd8XtV4bYgLLp3ht7WrTmTzz3h3DGEocKNzcbEtEAQ9bswywRwFF8Qvu",
  "key18": "3SnvsHH6Vd5fY5AHeKek1wefL9KQmUrjMZj7qhz69dC3H1HEoTCWtpZHFdESb6Wo5AiRneSufsZHZZTApgoUXPgL",
  "key19": "67MbRpH71uEUbpKPrtoJZ16Ty5VEYwxMEw5W3zVkovodzBBs38fZTXCL2t8NhmpEYyG9rPjZsASduJy6Y4nxFWox",
  "key20": "2oqXHFLuRUZzZ5zbYcm6wDrpqUovU1kZ712ZJiEQQ63nMeqyjVqxLUfWPvg2NVRLZq5KaX4581HF2PfEHz3Kehj3",
  "key21": "rhxdVEDwwFdAuP17JLutXNgziHr5GPwe55fVvG47edgpgFqQV3c3rQX2PND9AFKaWVf9rBURUXRFVSEfc9z3pN3",
  "key22": "S6ZSDrwQnSNm57667dkfc4mSBoCJGTZFNxeoUWL33sRb6wWozwwzbcdBeHDRjDFc4WUqf3ji1JjJi9An2pCj7Xr",
  "key23": "rCRKEi4Mu9QqQ8T2NxoetFHHxGV6GXGTbCfD2xoPtPJo1ecnvpfN7Nvv4KhKNfxEEXjGEDDzLcW7GPLxajKvLiZ",
  "key24": "3tCsyYdYgMpVpNhBtusncVzVJEvc1eVnVw8fR5sBpixUrGZ1yYaXVpVkESLGcpyx7FLKwV44sgUmNSCcariS5jTk",
  "key25": "52Vc1D3dZhNUcCLRcJzL5S1MUXhJ9JFJFBZHR87vSysxn7LeuDoSNzCNm5aXkTnQn5dLgiGUktXvSjTvYKDbFLRY",
  "key26": "2b63wwSPHAfGywdjN6MxxPNx2ZZZpkoLHi1Li5XapLVcuge1qjGwEUaLrqMgTfBnXqseQ77ec7rkqLbF1eaW5W4g",
  "key27": "4zk2NXcP9GLpQostjhGnNiPFfrwxcVQwQsRkk6Bkq4KkKkc5GKyAm1krMtk9NQWaKhSwT3HFQaTshzwMn1XiKUx1",
  "key28": "mPTY8N1gseRidajqqPT3ipWfCPBB54wFoQiFj5JG6WQPqE4ugrPYNvBvsJsGjP3caXg9LjRpVbMRmaHNfmSNPT5",
  "key29": "4yfSVtuiTSR1yGtKm1uQzyU7JTHkGwwLGjGEQWCsSs48MSzkqEyE1cWZTLwrd39AMVUduwywo49h26D38DPkKZjm",
  "key30": "28FzzGuMSnyiLuoV69M9MwThbNjBySSNHoYRXjJukdzZYf34xBS71oVpQ5D3LHBJtPXkSUYapzRVFborkEcbHvAG",
  "key31": "2YhGbhYvyFFdpqPy3j3Z9vdPEoRqmvXbmVQ4Tv5iWUPAVPbYyi6RRZdPnU8y92LjGFWUkybBFKgRofAMMTjExTtr",
  "key32": "2KHKPm5cb4su4wJQLdLwfVVve44food7FvVh3eXwxNenNkvEoBL91azyQBAou7bN6tjWBfbC7x3uqdgJ8byMMvU6",
  "key33": "3SR7Zdm6DQ1ANzSCqczGdwjGorYPE31e2t7oUjReEdQeNZX3s2gtVRCKUoow9RQ6c54UmYJTmqbnxN2pyD8riRUi",
  "key34": "2uhtoj44TEbQwwX7pkFKqyeZRPoq6HLryhjZ1MAm5o5ERguuy2fiybC8Zu9wXBv7XmK3TmcHHuxthr3aHtbEREXm",
  "key35": "3hFF31v479FzJc5kUZSPDREE1bmzGCkZ7YPvqM9H99KLJR5btjGDHGgYERvNfhCvGbzKsKita485zumb7v9BY14r",
  "key36": "yhbY8erGxtnyK6pRDiC5YJWuTJKZPGxZBFxjS87cMtrWaLugCyzKhxCN6WDw9r9aYdzBdTaCUMkBoDpPgAesxHx",
  "key37": "2z3nnoCaHT9tCpfFXfjoZhJkNzR3Y1gNrHJSks4ARhqTzCs1jo7APuKHYkpziRZm2vYj6nckJQBG9J5NeTeFXQ4R",
  "key38": "psWNdkLiNgh84iCHB2Z6ugcAz64ziJouYirvUaUQVGdw2Umm9Y5nmrniF9qxPASDksYNSSPUuFDUxMExiQwhVEn",
  "key39": "5WvsDSX6UdFhpcRXgiEhnYVSF8xTDERDMgnPw7NKBRmyJuT7oNS2hAWSA3p23CVHMYYgkgrzDf2iWauLJHj4H6Pj",
  "key40": "2RbsvDSHRqxid3SdSY6y38db6AySfckG2pH4C7KPf64W8q8UFRzpgCCJiZjowCkxf68juJLibi4xEw1agquLtxTk",
  "key41": "FupMZCkXRD9vyk8ueuPaEpuJpBmiwYFR3uci4hKcnKWXFvx6FTDyjDmnf9nHHjfUyu5QgWUaoL2fqWoJP6Lt9PT",
  "key42": "TZU3QyPkFtrATsJgiSAo37HBvukJ2GTftgxWMVf8mvnBLXU1GFYNQwPaU3NCwbyicgKnrhLTabMv2RgiFYnMf4t",
  "key43": "5ur9DmcpgSsMEWzGjNeB4JMaMhhfyxmSGX87o1QWDBkrEyNpGrRh3oSEjjf8pA3aZCDeTGNN2qTCEYYWzTuHxbwA",
  "key44": "4XhXHhPFfJFHR9q9PsB1gniUoTMvTGHgX5CpYNb972uHGck3bdt1EKFN87Vx5vUV3wXnrfZiUxvfN4CqxiKzXqgM",
  "key45": "5e27vjw33NYbtEoiYY3WbpJyKqfUJVFymE5LHciGXoW7zSUFanFGyvsMr2F6JpSJKy4QgCkKdw23XciJLQFRfbwJ",
  "key46": "2cRPYBMYJueuHQ44p6jowU9NUnCaySmjRtEDd4aNa9gbK7epktzFdTWXikYHh4dmCLQmuUBCoVLCDmqRazJSbPHU",
  "key47": "4xcSud6fiAqXTU83LHd5VsjVHTJYfRCt5WUeZKY85mS2Gkk1kgVViJ9oydc7b1kX6MTsshP2MREtqLr6fRdKRmFc",
  "key48": "oQ99RGeCaSH2UAtK7Ez84EjB6asfavRP7nDLLyKGm7Ts3E9iduoeseqbS3hhGYkHfTCx9uoouB9TxbmwwreWYFw"
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
