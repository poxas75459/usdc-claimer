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
    "BoD91PNBWe6YspDgdmQGJ4EcXMxpEGuDFePWBXk6m7Vnk8C7eUKvvy7gUnUL4WcMiydkpQhmJ2KZUYGn2khB8y8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T6na435Uu6eUu3fQtQqhbtN9PNPrBt5iHzurFvg4bQ4wTDzaTxyHWyDT2aRFzVymg81MjKcpTy9fejqLg5SQa9k",
  "key1": "24m2RXaJuBRr9QrPXRQgdivWdSD4b7DRukfb5MjAiGER3mFnvadSoxgcYHdYkWLeLLmRhSTphXKERMAQrvzEGatz",
  "key2": "5XjnGCBmFFcVyZ4WpRqLY6wnNg2DnieYVYn1dytfgujW53TRZ4nfB4pFGsXYMawWT4Ajb4QuXYrj7LwnkEeX6ub3",
  "key3": "5WCWdKtjpJWeTVrCeHQYAZjDQ3ao6yEu3TzxtjrmmjrFGn5P888NLQ9579n9QY9BGdbisokST1ryy3QfgZPs4J1m",
  "key4": "2Ag8i6tiRGPNCiBkkxQQG11J6XH2ydgMy3fAbbECAicxAbNmpQgLphB5dethhet7emrmFyg3cQd6fD4YDJko2uvD",
  "key5": "2s1rwDvSE5z3RZa7gZtfUrMaERcUE6gQXBs6TnwGFtcSEGpXR3e8YxnpehkAkbpCvedXoGtwPR2HH5ZZseNkjQL2",
  "key6": "4ZYpuk2hM8pPUkGBvgjee2GUf6WLi1MeUeWYvyfPVYWVt6AUiVEJZXd4HqTXV69Yfdkp9bZXUexvvRDZKQSzQJLL",
  "key7": "4xvVXHWwNZ6UhELSrWdZVQypdbW9G4roFK43kC8M7dCLXaFSUty4Fg9pR21NLpDNqu2rxTdjr8i4qUmKHi2MTfTJ",
  "key8": "zxkAjPrxAi4f2mkizQDCWSAyWApBAve9tCpnr8T5THZvuMh8bHsihLJTQ6cGc4GwLKHw6b6xzEBWLq1dwVm6QsG",
  "key9": "4ehwQNPLBXCGVCLj6RS22EU61sDfSvcnf5xB3UZbj8tEwmZo6tg2sKgW11cnQW6CQ7BJvQucsWuh9zHwfPEMDTdY",
  "key10": "262tWsjA3Ef8EbWL51GQaSUUUStK4J6EcBk9Sa6j1wxxTqqeYTbRcXmi1irb6v9yHjqM8oQBFxCRbgs97Lq6CuBy",
  "key11": "3vA9k8517DPRp1gE13pqv9GQDjBpPTncq4JpEGFMQBUsRt1r1kpPNTYPS1urUxocdP1Ugan9H2TzqxdmpUTAxcj9",
  "key12": "5HACjbPuxWtaEEe52dnaNwrEwPFqjJtHiXYNFwoHG9s9EKFvjw5fsX2WVV3pmiRq1MP9vV94oMfZDzoNGwmLGfqQ",
  "key13": "JiKojLrVXNCNHhTbymZGzqA7vGKfMDSufwH3ejyuihomEzDvUyfojFpQvzjD6nxaAJNbo5M3W1rWs1D4XcEGU5N",
  "key14": "65zpi4QKeqZJNgEBR5GGnEd9ihRoX4whmVoTUcykAPrdZPuG4MNVekWNouNWDpRpnDESdyfCXGPJXcGa2syejfWM",
  "key15": "3dT2KN2VRyv9xvJf9eYZctLDKAz3mxcZsbjFJVLfxnfxM1Z2ZcB24GrYUDRKjd5jgELx2tYq8ghAZ4VHy3aatyk5",
  "key16": "58KcWoxq6YST88rAMCx8J5LZTNUJkD1TiZSMr1qcWuPSrnFRg4vFtvHtKQhnswKz5fZNXrk8r5Vd2BRyNwCz2s8u",
  "key17": "5KmCgEnH57d4WR2SiT1eHS7c6tYWWDbJ69ujznEAbxLWQZif5Lcoc7tXnpZc9oTdxKG41KuPDAG4nFCNtAT56j8w",
  "key18": "5mGLH9PihiXoviuNo4mZMGqyy4Z3qNV9NVJnd7bstbgMe2b4xow4v1Jbr36iqicv7K9fVHNvr2vPVDZtr7LhQ3jY",
  "key19": "5MtY9kXpMNRkRZwdr6DN2aP1Q6PvmqVW747ZsDp6ULzVo7pub3gLRtfVadD3DjhHV6WcaPhKEThhrYH4TzMxqEdX",
  "key20": "51m1eJjeRrkZLNdXfwNAM68DaoAb87ijxp4SMVe8Srfnma9Wv8nQWgnp5xHrz9Xx8PuSk3kXADCtnFtLfL4U9NWm",
  "key21": "ywUz5xa36GWhF522v6W1ux42HwoTomQUyA8RqPUih3QS4igQR48t57L6ms4T2JSu6WfhgWYoJAHqyfhiL7UkPmb",
  "key22": "52cAHyadRE4RpwVqK3LBBV6HmQWo1GLe9nQJitLByNaPxx9PG77Ks7fNCHqaap5ZdprMhXWNBxBkT9WzN21yodA5",
  "key23": "ba1pHYeNf9zsKNrusZ5AbVsbF2xmQYXJfibTMBit8xHwz9cEDiMG2LW7Xr8HfgekixByTm6jsVhNd1MTWGZ5w9G",
  "key24": "2hVQ5PtPoA8f1CkfHbKi4TvgFUQdZqswFiKyPyvTJmXqqxsiGVWqjXgZaH7W1mjF4MyNEEHWZ3SHBueoEkuEBqYQ",
  "key25": "4UFYttHiaC5KSVFMuDjpr5JJLJCsex257xnHQtnyoqYF4JMjEV9m54mv8jDWzA8zk3mhyYTKZFLp5i6TNwfyTLyo",
  "key26": "25wWaFj7cTdV1aUXJzWgRKQ4jwCfg26jwpK1JuCJsbm4BuwiaichSepM61Wr7wQrsv3TzkKd531oM3vD4PCWNHz2",
  "key27": "3yULJ2eHGMoD4pYNjGownfgupgDHFm3JtNG2f6AVEkgNpjDHo5ScXWmtHD939gg3wXUK9SwCqzd2EFfBViARaFeW",
  "key28": "42C9X5newrDMiBCgBdBKneJc8HCVgXAqf1tvVuswNjskm3fxjuT5ZM83n7Cabu5GUGAEiFwDhUX2dQaSCyoNevgm",
  "key29": "5qJGvFgDAi1apenPzpydLnnCqmDUHGqgQh9kqB9EXrEewV56zfQ2gN25LE8EQDyfpjrSYYhadSbVp6t5TkCPCqFe",
  "key30": "4DVEVLvLSiXMd8YFjvVD2L8rC2eydY3MuWMLYURyf371CQo39RKVjVtvq1kV6jT52rjr6txwW7ULDtfJBnV3w4Xa",
  "key31": "5H6J5t9GQFaMxK5hxM9QEoSvXeun34DqEp31DWVuf4f7SWVmNjjMQxYXpMy9j5TAmADxjArfDeZKYfQpWg5tk9FK",
  "key32": "n6cy1aFFHxJQjStzvnNvJaZEfifgVUy6uhiHQPDmMi44NTg3qvkYf3L7zQTrGtgZxwWwAvsph77jPoTgUGHDgZt",
  "key33": "3wShSqQd6mAHuAD7yCxgma7JDgjAoFs3xdcML6MowcejCZYjX7TVSxKoGdPMy1zVq9guVvqpLdkMTMYAu8FeAUZ5",
  "key34": "7hv78wkFCagsep8a6tsRzoCGVxDKaDwcHs2Cx9vF1CT7CN3RtnuUnvqyNMoGVs8yotmJAi6GQzETHwpzK6n8erm",
  "key35": "3duTdgQSP8DuuLs9JHQaxvJgrYYkZw95ywBg98NmkfU6m3LD14HD5raRvFyetX9hSmzKxuv1f8ijF4KJvtwTVRLv",
  "key36": "LK2Hu9JkQudVjSXXhi2hkQTmDXGC3pZWY9b8LZP6HcbFB5aHv1smak2SdC6Jnu8RKsSLurcLSn1YiCas7M21FeD",
  "key37": "4yEC4ijzy3pzxypE7WHyMF5jK8yKVhj24ucwzL3f3XqKoMbiRmdo25y7EUWbgraNweoT8xgRPKhK8V2BnGqdVW5P",
  "key38": "Tt6XtDHZ4Uyp4Dif8vQ2kSoinh7qDpxdD1XRLLpYocMHt9dEX37tw9rMmFir3cduqAyXigLT2UbYFKS1b8fFxJ9",
  "key39": "4LKCs1xfEGbS73TkgUPTdkcLw9JGV5x69X8KwhjUKFCjaG81JrAVFgmZWyxU46M9fB4cxqhHkFTrd8yuYqi467kv",
  "key40": "5iWwdTx2FC6VTHyhRK2oFBwpm3tdy9BQtTBd8FNkNLovrHvqrw4HcUXhBX35xxjTn2HnwBK38utJLEu4votqxWid",
  "key41": "5DMwJufv9CcomXdPdW2a3iy6NE7TxCmyq4gWXfgZLuesVnibfhKCjz1dddFfCvbL5aLbXqVwwmDvxjFywfaQta3v",
  "key42": "4m1UAGwakP1HQhxaVWdKpEJEcvNjoDtGFVwcjF27ZB12V4y93Dsy81fse3kuR55XXDstTEwcgCngrHYz2Eg4yf7T",
  "key43": "5QCktGPQMoa2nWy7Snrec5izmhEdVEdijj7kSJssGjRvoVcbHKrjDtPv3q5NEugPgoD8oASofQQPHnNJfkwirv8r",
  "key44": "5PrHqaZ81V36pz6NPTPsWB3NcN9feFgC1P6LqUSK4ynLoLEdgQZ5HVY8gVNCPAnQxp6b8jMGQDiGvyaQ8vNLEurr",
  "key45": "4hW7TZ4rcASM5UkiZjej5jaNJoQDbpTghHonoWYFreLZ1ZzTEf3gqXys3Reu4HGRR8PU83rxjdgSXvdJu8Yvawkq",
  "key46": "5zcg7V4svgnnqYFP5Y9XhJ3pdGcWwHVfaJFbp5YssEaENVXyEFPMgwfizjCau3WALewJxRMtrGsPfy27fd1Ls89A",
  "key47": "4RbxnNtn8pwFoKzMK1Tam7VBW28w5vP8d9DCHvaYHEjpBREyUAmRwFJ4WTmfX9mo8W9pMjBf1DgHYaR7HPfSbfCE",
  "key48": "3DBKSZYBCZx5g2pQH8H6BPwxKwVwAcvaRjCLpjkZGJt9Yz9ANEMhDFZdfTgezqJ8Knn43tSuN8NpkJkU3GqJnzcX"
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
