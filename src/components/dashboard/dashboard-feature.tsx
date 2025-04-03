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
    "5GPBsWujYwhn7WFeMJipTM2NAVawhypqDVuvk9JF9wYcYTRzXcKXs7paJSCvZxBHQRYbCz9HysTpwGgSLuUhtPk1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wne6q9q2zjcNo5iH5LT5MR7pSr2C5mUjYygdEeWM2fnJ6H5uc5MVa8h81m1RJe3xezGRwoyH1Yb8tEEv8Xhqqar",
  "key1": "akpEoC3F68gz8FEpv1fZ6786X96hDW71rvu1a9YTou6zk85UzWC8EbEWoNjm9cbJGhSykEphMe1NZvWPQMGYwmt",
  "key2": "5j4Ae53D9q29XWHZBv5qzdTMhR4ey1hT8sog7u1oMmmjA8terasNDqHLr3sdRqcZY4eJs1ciYnWhmcx5JgYbZLj9",
  "key3": "3p6jWLgh8yAYnsqs4zdx8r1t2jsbmufXDyJJ8DdcVH5wUjHVxqHP5HphAriTezr4CyeL1HTEND4oiF9itA98AGwa",
  "key4": "3Xz4DL5bYQ7DJabeCvw8QxFfbZfdCrqtdcQ7vnaPCYgAMdykXowfZbYTh3F9soFtNkHGMBVgyfsXthMwm7YNK4TS",
  "key5": "2uQkXgzDiRbGz3Ts7xizpBSTAkAR6Ckh2Hsd4cDSQ7DmjjHMo6VwAMSxVe9T5mC7JjJtzXJ16zccFLZGkr6FJcu",
  "key6": "4PSP4b6oxSQXcukH4qFC51EtrcaPnUMrAGYLudhRV9Djw18tTQdjR43Gh2ja6LPu59B4p9om3Kdb3JuJ71NDe2js",
  "key7": "5T559oEWChhPpqqpbf1DS9DamoiAsxqQwokPjVFqrqFPGNf3ctqUbCHoo1d6xKVyvQ8PjyeRYN8AntZe1pGS1zV9",
  "key8": "4gWNJyaM5RBYyvZf2iB1pnDCU4Vv2LU1cBCJeA44VBsFmJPtHdJPY7EcXBEc39RGQM5nxnZJcCM9rakG3Kp3b1uQ",
  "key9": "4FaBA2PEKSFmr63JVSYNRuhuuU9fByd968RG5AMAfpCAtTuD4RyHTVGFZgg4fq4utyTueqhLQV4H5xGujBVgRMF7",
  "key10": "56CC2cowi6Zc6MkUzeLKuZSvfyj12FWSiRrXK2YP6s877otT7fMSh7dKSTA8eTQddkMtXS6KREfHEkgCjyXkqyw8",
  "key11": "2J1zUU2w48cNchVEWxVJkuZSecqoe4264brzS8XNwpeN7nVrkFSaR8u7seYKUygfzPxyCLUcye8DWwdrxberTkvj",
  "key12": "5xsJXWPom9QsavqLWSqS3CLz6zFq7j1zBmn4Lvn4T7fMLSNNsJ9GcdbCgHyWuGiuAj1kCVsdrLRN6KZsWu8JhA3j",
  "key13": "669iXuhcqLTURLFbp9EHAYG3HDLKZUzgMHk2TDA9EELzdCT8t6irkhi3FQZnWek9sDvPdREpSejSdhXkUfNNHDkJ",
  "key14": "5E69ZXusYEiLmYqp6vQtXPYHP5WkHRuZqQSfcCZxhzPxxAmuhU8BH7emzKc6ge9mDXsEncbGAzg4Es1fK71zEYea",
  "key15": "55sN9ir1bqNWnK4iDN6NWwZh73cLFLTbjSDLhdSQ3WUhfCYLAM7LtEGW3yoS4sh6W2TCEXxjJJhR7C2ogPButXc6",
  "key16": "2NE7V2JoZHerfiihR1Db4bDt6n4NkKRLTJ2qK3fqyw3ASQK4JZZ2iKpc52fEjCYSR7QhLwifkxEB6dmfcqBcanjA",
  "key17": "3LVnuTeMxHZ9fa7gm1F2PfvGAyNrPK7ppJjgoYfbUrgduxmk25PyPW3D841m93jzTrkS8x8FyutfTXAGK85b4gjE",
  "key18": "4yeNFtD3ZfE1EHqv4rF6s16VwdoLp8bBkWYPsq6NtNEoA5p72mMwPnSukCNtGagSHp16UBVZf26o8bbT7KoLVy7f",
  "key19": "3neV3pRCScxa735PTnDAp6UhrFDBM3fRybTStgGyBrNrP2obNaJFhWri1KsRiTLB741Ty2ukSUTxvqJBivyfJkYM",
  "key20": "4xBaUwbXe3Ss6J9MYZDHrbLUdiZTsPsBZvi5yyg7AMb8iV36MyxTdM6mkfSnuwACGrPMpzRYcaDtZwDtLmuvum3b",
  "key21": "2t8meXXYgqoB4FZTDkYGyGhyXgp2ZcwAjxinxb7FaMtRNxrRK6v5nf3R72ZZkrKRPayRDxuBkgkmSauwUvkbrBeh",
  "key22": "5cdVrjrQkFGxH1ahs8GntJXkdQw1q5ExZLQcGhkHbfE3xxzRKTvF433vNJvAwJbzwHJYCtfTiLKpR6Tv4ApmygZQ",
  "key23": "54kM6avDyvtYoeoCuEUjDnLU3YKSKNEWmcKMjfSVcWe9qBSXXFZbYip5sQ8R9L19kE6eyTAc7dsZECqF6thTXCa1",
  "key24": "3EYqMEPaFMERYMFBn53Lnm9qt9xK9xVpyHQMUnZn8bYxygAMRDJkzq2GG1D96CDox8JkYE5L1Z4DjFkvi2i9Mgou",
  "key25": "2ojxKYy5gPzjmkqJWR3Vrvsaw18udc6L6wgrDhpGPcgikDP8kKvp4RyXo8eqPv8zjHmU5D2VYZztUkSiLCDRALPd",
  "key26": "31VKNf13YU9y83UHtPpagZDaLMoaHGgabm1QTVzaV3mNKhkCXhwRGaAdWkDkJwrwYosVPDsVkYoccfV66KiUmoom",
  "key27": "643fDBzaddhkAyCHt7nsKuKBiorF2gEJMVjSbw6BhhiEdRuvFoEPgSPnkVzgXkA4j9bbSEnnGecBdypjzfwn3kaP",
  "key28": "3mZ9RPkx6BwdyCuhnJCbeR7DW9ZcVbYHq773KfcMF6EZZpNjS9iLCTZAV64iQZqYcE4Geue1DSPvHXxH3dMRi7Hk",
  "key29": "4Tqbr8CPBwaUmfLhLEJR2R47ziTUTDyuC1oHFr12ra96BHfUXviWyzgp2hqvEdif1yk9szL5nMm1pDZYijtLNDQC",
  "key30": "5B8KrecUk4XHzXzr4o5bfndXxpjLKjVQNFetXsEVm4SxHXX4P1ja7Tq4RcvFBeeYz2PFxir82hva1Vhhxz89fsEi",
  "key31": "5FRxRrdsvb5DVMJSDbNkbB475P8SkXjFvEYAX14XtdSm2ptytqBvhDyDyi8nKZ5TdZU5G6jQsjnfmumRrD3dD9nq",
  "key32": "5c9PaxSmhbrSyiMQM3gFaTq6v12nVoCekUNrGDFB5KMU1tpZqjcMxAqnui4ZsbqTMecLsGbfbSP5aiSy4uNw3Dzx",
  "key33": "34vQS5Rdx612yfB94SQHknsnBFjujihSfQbhZYvFRj7xkf21AYb9BSNbrhdR2Bacq2owWzCtcUv3SbpfdQo8E97H",
  "key34": "BteNFyEES9M1ab6HYNYnJjbBCLBhNyLJjMSe7SrEgYHarhhRWCLo3xLLSsJDzMn47ExSse5hi7HUDvPNUkEuu1X",
  "key35": "39E1cHhVkqNwjtWbiFyeUVvAfCqhfDojPdzT7Ym9m9qCALr5Vo1ZEDSsaZPXZtXyCbU97UHkTvJnhzhUpe1Jf7TJ",
  "key36": "5DKfGcUVptsEbYPkSubeSpQpty4MnStmau9yxLuHRX887tVJDCFSd741qG93WSeatRf7q9WJgGprsVSADFNKVhrb",
  "key37": "5wJTUeoYCZxjHzgNa8hkeaPi9d3WkTKa7884LrZpPVBJiAdFTGuv3N98ekNz8puX8sfN6VBf9XDdADbiZvGgFEhv",
  "key38": "3ifUuidLGufg1ymQrLxNFjfS8LCy4uijYUgFtX7b6Ft6b98L5Ms6J52eEfkJJHxULjrj43Gboa7nmV5AMsKRV2DB",
  "key39": "3cCHWjaLuNBy32C2Xuz6H1UCvGb3gxGNnDC3NrihchNeUo2NkoAfQ11uoaiZniW6UQpaixfaexUAzzJa5FMLa1Jx",
  "key40": "iioeBA8Qn9NizL2LkDhuSMzSaAEFRWQEYB1LZjDRbEZHZ5Zxhy8ZXSc19VgdP9EFLTdYGHaRmcq6VbcJkdPy2kR",
  "key41": "63x4jWctkZ9x7W3iyHHDzwHvok6YTCqhw9CtjqvfBsANKwNZdexswHfnBDZbyvd2GJ4aXJKKnna5CUcRWaAMqLTH",
  "key42": "5dDvKtMfEyRWDSkjhQquoFsTUDKjurZKVsqzrNmj7fP4v66ngAiCbcQwscpUabRbQ8XpfmB4EMJGDXJGxfV2gSvN",
  "key43": "51shK5DWekZWq4CingyewCR6DL43kcvQew9v1Dp6juTKppHafdNazD2fvPvxuokfX1AzQVTVPrR4CeXepD59LiSk",
  "key44": "3VCVXQsSt3mP8ekYTDbwL4Lvg29nZyrJZQSSTcQaCuQeRyHM662wknFPTJv7hFtLtxtjfv9YdTEDcFYjqrUiqhS4",
  "key45": "5k3HydEmBHWMbPNNKeBo5vcYL2m2ThGYKVZiw73F5nxKiG3YGFsZoRRj66XZdtXkbU12ELbtnjdsDnR9gEhAfqWn",
  "key46": "4N49yBX7Tz2McA7LFeGqE6Ps7RUTGjWZom5QrtzQCCkkaABSXESPQYziQS1n4MTCuE3oLp5bFd8VKv9ZJWZGWcrE",
  "key47": "K9eonwGWZB1cD1WdYV2GiuDxc2n5pWCwhqQuVrRKuEMNk4bwP1knPSuwSuWZYdouTtwo7aQu7cCD9otEVqyBAv3"
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
