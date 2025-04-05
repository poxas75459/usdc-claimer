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
    "23CTjnU6C893QSursGkKumWfBbyZwgZBPNEZ8tfjGaWRAKSPbP8YWphi6CwXq6FYtBRK6Lkm11Z9UX33ZFUVamZu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G27CK76k6AVRbAmezfzK5R7MQShY8sCs1DwKFtvZqDhb37Y3Ds86APC3FgWzo3XSuLwBC2Q2ibtn3yReBRDQZQM",
  "key1": "4Mt3HTPKy3XG8C9bfLf6pwq4sBBdeDsKw13zLLgXCXCEdikFVtPQw2JC1h4EHZHsvxBjkEhxXbprgPxgYsGqJxUn",
  "key2": "2FxRL7xqPiu5Vo88yGhjxZYh1sKGZxuqeTeNGvCAFT5bRX2khPWfV7DjmVAk6f2iAPjWLdYPDarYQdoHc5JH3jFz",
  "key3": "8wpLbbdu7KCzHnDfcNqreBojo7KR9XFL3T2bB1V1EMC5ifQn4ggRhYh7UEAoocvVMCprezEhdns7gp4To54jrSr",
  "key4": "3DywhHS37G99uDy2YJypHXnLBggySNL3ZGWDsyp2VEz3HWUNnDpN6inwH1eLAqPT2rmMC6SRBPsvmD6UaExbWXxT",
  "key5": "5QAGgVgoVAepDGRpVTmRuW5as9MD3fETE3pgMxsUoTSSHfyZHn3uxV8ChETstfYe3LBWxP3SsX4ySNR6sLPEHXqR",
  "key6": "5crLxqf42R3orCgpDve1AXhFsSWvpkbQaD2AZhvckDCWGtPW8rrLwoNSqromsqfq9yJ3Mj5jXyZazzigcWHpx5Po",
  "key7": "27E26UWe7MUEP8Wtf7H98VV8jndrSG8iAzdQT3JAr47d3HR3DBGdGGh8DdiuPMD4nc28mNXZHSMLgQB8qGbpcjN9",
  "key8": "4bNsvvh6zEQi77CYvpLftKts1nkMZy2Jbnt74Zfq96cb37j5RHwchxBehAzk2M91xikZ2NNH2BcqydqLAwREgvJz",
  "key9": "4rZeVgA2LVYBpoVzvstSAkPhLFm2vpB6QgfMkju25qD4U5d1p9sSnco7pjMcdDt6AftCcwuvN1ykwrHikzNp6nxB",
  "key10": "AhaRdJjewJHJf4Nu3thFaDeVu7qKxZZLyh9RxmisnTXKi2SLvvRLgiaUifnz7hdQdfLyYmNqo9Fg8977fn39YN6",
  "key11": "3SwQybGc53qDVdV6Qqi2JBurXFfQ9cMm49t2eiCYRFgFLt2b3NT9bG3MXCN4JdcsgZrjcGoAF9jpdkELvMGNTtDM",
  "key12": "3ayJXvZYYY87xdqFuU4SpoqM7ijakwkMF46NLBdZQNAYYVhRYRZsscYFB7DQeZH5fp7K22bJJ5QdyQTdrr1uYpJz",
  "key13": "5A82K6K5BAheYSzDjxr4wnfU62mzfaKT5TPLVChGGGqzhJFgkRX3fkQNHgK8WFngvymskTAZbeT83BnRVewnGRoE",
  "key14": "2UFoK95GiNsucA3cfGtiYSofFNpagv1Gs98Ajam5JTibwicP57Sp4jDGFSP8Dwxb8uDnhpqFKEVN5MrgLDWx8phk",
  "key15": "41AuojbvpgYMHUinUcfTxCY8XY7NteJ77Bmk2ysSxs85GL3S1GzHtw67RKkUZwPUWW6bMh2MQGfzKBhaz9C6BERG",
  "key16": "3vwSRptAagq8zKtVJnAv8zRr7yeH3WVMjZi5VA5RCkJzHfbnyaE1qpqfNJN2H81itk6EkzhewnLgrt82QDH8YQJG",
  "key17": "33b2KvBCP8whisSNsq83gxrqwxnRbpZ5ARfEFgT1MKGT7Mg86ZX2zAMosKGiHPwsYv6DPMCjrHdCwGL9q5ahMCxB",
  "key18": "2u9VC5JDLY7ysdAn2dp5mvg6gfTaCNMedBhED73u8PKD3uRyAd74kgX5UPVBkTHTE6MHfByuSAoh6aKHpYPGA8k5",
  "key19": "33ax9dvKtWQXrE1mmNwhoALyvVKvNFR1S7PQE2CiUPZzfKavQzC8ohhFN1hTJZmjPAvexMZ3gaXg8iT91WUE2QQE",
  "key20": "E5xSxP5ZTgnc8nyStkRWcia3fZF44W2JyxKk1RAmHSRAZoCdrwbvEuGFa69LN33dNknABwDcsg3RSWJwMYDPhkt",
  "key21": "2R9aM8GRNHCnvMkmg24r2PoFjc6RGakFbLxAdnWNb26xun9dx1mKDVSusDzJgLLUXdDJbxGSYmbDrsFkG5JgdRoW",
  "key22": "2fS97PLz89a1JxdxF7KJFhgG57cdjkhPHjSEYdnQiS92Z1EqYaQvvxoubaHj3pyJ6Wug71ZMnoFXiRgd8CoUR2zA",
  "key23": "5X4VqrPwBH46jbCeVfkkSQtmgBoJHyLunCAGHmUNzYNU86Sw4FuWR1PG1j779zHQCZ1jjVuGivgysKsJ2Z4rwhfi",
  "key24": "5FsGYaPqhUYfTVaLBJn8rJBtwjA8MDt6bv9H4DMmKNUukp2QWNsbyzniDutNzzxr3jQwvYFeX26YJyJqAbgys39g",
  "key25": "C5YE4pc1k2VYoLK4mF9s52kMyGe1KtyLwMx16PUdxzjj1q74WpPrmkAaAGrUNMyYu4dw6d8iGkATXGrxom5YTdH",
  "key26": "3ax31iBn3HB4VhtLveSkSC3ZUBu6ot3ksGsM8Bgco54G1E3zTFZAamrbvKqsP9bYejzN77MnLxj8RFZ5xrMRGgy2",
  "key27": "24ZfTTy6UFV8KSFYSTDWduoaREb2jkCtxmSh37MDg7RvevVzByXEeSf69t9RXuB8PwaUcG9UeYw8iNjGfXAcRJtq",
  "key28": "4X2ziBS3nVJgSr5iXXoaf2qg3hoxbXXt1ePu3h5aWgi9WyWeXpcha3wP1DE9aTx2aSwtht3cG4BrzraVyKSPGtSp",
  "key29": "2Di64MnYuQxcVXniixJ16FuQcn4VBV5HfdpCQ3c3djop6i9bTjvxXKW82nCFhju9nFTPPmcC5atPeMGV5fJKn6np",
  "key30": "3mJfMYUsHe8dsGHkKSkKwkEndH3V2oddwR2udoKKcnthnFBdnJhZD7w1Hx8KThfFNrjmvKockDkZRcRiGERHjZbg",
  "key31": "p3rVPmLR2yfF7BchgV9DCv6gaU1czseHXHxYRCPYYsBgb7J29CvGAYZinSzEZAoMiRFYrHiAKFgipLe8AS7cWjW",
  "key32": "2LUkUWJATeKNvTnkR7NgXpYVqPQdguuYQgvZ28CnN9fSo6oofYbuP9tNBohHNiP85jZgT3QuU9x9vgCSrXBiTvV7",
  "key33": "3qZ2nNQmJLCjyXmwJMoV2QfZSkj3i8TGbkrrnuoHjPyWSVgRyKpvBC6vyNy2sZFLxZ1LYRYbYLuiaJSNAxZgPeY5",
  "key34": "5rhAPMXQgL1eycyA7w2HoCzownE4taMdxDGCogqeFiEFJFmR8J4CWXkrJDAFe3MShLAFgnyp3vXnKiKhXmKnwyiL",
  "key35": "5FuDjPGTk1Jjv5yVN5depMC2MqxFDs2ifiKorCx1isqd76pn9cZuEufPcGLYiZyW893d2E7sSuwz2r3UYZiSJGTw",
  "key36": "4wbuD9mxxk1rhHSCJeqbMR2uLHHMiWk8B1M8npUent7eun9BPKTQPqcG4PJAyiTKuXx4bb8omD9ceBEHSxxL47WY",
  "key37": "2srLSAHDGJUYvRCZoaghNQK8fNHnDESoidfDmmtkdBHpezxjgoFExLRzeUMxLVMrqXNKpuyavuG8tXFSzdtqdGBa",
  "key38": "3oGq8xDnCLqPvR1jnyj6EdnPepXec5LtixShqTNF9syubrXgkU3SgZ1v3WTnK8FNFoe3cBUvAUrthuYKCtzYv1Di",
  "key39": "5HTYVL3dDVYpaisDvAJMBGvNK4QEVDkpNwdKruL5mwW3QdHMkdqJDnFo2UUJRqkPPqQs9BTjWGJeutTBJAXGApGe",
  "key40": "JxNtxmwXkw4avCsafj74rqRUjBMb7enbdacjeU3hfhAQdqps4y4bFFHxvr2ip8FWF4X4KufsnApUxjexVNUyMUk",
  "key41": "4FSzRF4ingSoeNwRubX3oW1Z5qMZ3BQD5EcREwU8J4soqNbsP9UGyFmZsT8CzGMfYWvxLNJaipg4G4v73uNtmvAd",
  "key42": "5VXWQRU8eEwfEaiSqZJuqtPN9oq31mftbQzZ9e4FBLC93aNJmBmP1ZXYizr5aVP3mKLpUcsgbq2Ef5ZVzgJCpcVs",
  "key43": "dYFHE5XorpQZm5iqTdT45juNgWxywC3kQcgc4G8jtkoUj3NNehtBu5u61yDSMuTvEkFLS1eKD3X6qbJieuJ98Nh",
  "key44": "VPPrfJ1LEXtHyjkVtwYvKFczWQvFLaSJHWBaAzSSTNwCJhYApYvuznW9HNRr6DFF1cn6R1iaeq6b8jm79wYgPeZ",
  "key45": "5WgTY1oJGHFaXtcfYCDoNJVv9JRmPiG62cmH5VuaXRpSrP2vFRsrY2HLDKhPd62AvHjdpk3hMC8tyzsp6gts6kWy",
  "key46": "5SQn6MkhdoURGM6xXX33VpuHwv66zunFJqCwxXMJQ4sHCDLmmR7NX91qNhU4xDGJH2o1S1idNfTb4zpcRTN5fsyn",
  "key47": "3VC9DuumAhyWgjY2JC3c44MqiiwshcDAfWNuz4KuRqkbAhDfkkjUYHWH7CddmejxUf2xKcEA9gXBeY8opzTEns6n",
  "key48": "4CidLQJZmgr4PKMM79nEnFyT8FTaxJppP31LH3AkmXnvx72ifzW2u8GhcrUUkQ9k8raYR8SpSZRF88FaJsJMCq4b"
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
