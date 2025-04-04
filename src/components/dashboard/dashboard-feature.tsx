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
    "Sp5aon6jDuW1mEeJWwCjb3f4VCZ7AtHwjBpg7ZzLbeHcN3xRyHWDiyXTecWqwpfUbvphDc86FSDdT7BmcHcM9YE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rXJCvMQ3mW3wzfU88FxSynf4kgH1n4TK7vWfzTwA7VUWxTSY1dHTWxs3YGXbTj8Xazs6Eiw32jvyWDvyrnGpAoC",
  "key1": "5CorLknKL4kpd6MRENwkjtt1nFf4maZvk1r8hzcqJvnfGKT9w6fznwmQC8UzZizZqRXLZhwjh1s6G1rCXQWrkCCs",
  "key2": "2rdDQH1N8gQs112GCcjsqdPxYmtWcFuLWHKfNb1EYLRTudtCBix1TNXGqQJmRnbL9hDktAKuqx1RUwyRswqS8y4t",
  "key3": "3q8xJC1ziFJHDoDBo9i1WqhF8kx5vrGf9j6GD9H7hF2M2z9a2PwEmhxqjCLyqxPfLceGTkcHoLrFyjyG2ZRSMRFd",
  "key4": "dPCXQbNzKoAX8jcQb1dn4RoVsK7Rc65yoLSUS7MfGUNVD69uQqHX5j6UR9CFHmdiYCch1EBKk8vnU2VUxx63X5P",
  "key5": "5gMk83vYu2BXtaYcpLkv1zQZsJQJ2YBfas8foN6D9crbp6naaYkxiwZgY9DUNKAxPgWPCGvsXTMDcMdkiLyjLrQb",
  "key6": "RA5LMyXaHUVMU2qjKyu7b1s7gGg4jsfBZcGQRowZk2Dx4Wt7pRjKGzwNS5MrTk7qYTHiHHEJYe9qfroHDFyL6x1",
  "key7": "45n5gHJrPiumiBDBtdXFed74YktNUNULrXoXhsnqC4hpKoi7gDvzRH2aiJs7Ba2NsTWj3tCX4UBttSMrbhUoBvVw",
  "key8": "3QqPnkHrVsgfhQ8V2rSTtt7648Tzh7Yjg3uaZrTkGnE5ST9mc7aZPUSA72eqhd15LiqY73v3PzCY6DnJiUsTbpiq",
  "key9": "64FQsuH6NY6w5RrYu9BzNTVPRw7TKSY7ab7jEMP4TzvBqRpnJVMv5otCMKFGeBsWcsB4U4tDLD4NdowyZviHF4PF",
  "key10": "3quGCyVFYWWGqcGV3SGzhcLeKUHY9K273LLumvBXRTuVNda4iSn7fPVGvTfmg4DLs4ixS4jkb7ZvAPqEqhLjVjDi",
  "key11": "49qe8jog77mv482y8HTVgzgYvkm3tAdYa7z1SCLdoTHCBJKKuEyksNTkTYmE9SkyNfwBpG3Vdn2a2WTeo8mrmYeG",
  "key12": "5VDfjHnUmZFXSFZUGyRFwE4nzRtKjRR7fhvMgcGGiV2sM363TrBmC86aE1GUrNCBybFWYLroPR79LBckDmy3p7cW",
  "key13": "xA2xTrrCtwVLXAcwRTgN1gvVYMaY6EsX6baiMEdNC1zFWDUi5YdAvxgv1AZ9rCesu3BrbAtr5BzY8a2EfdV4pUM",
  "key14": "2XRMEVhm8XaYJUq6UQPr1EiyQ3dXjPQu5WwbG783vLFunTMk38G9s4PTzS8rNfYqdeQYXz4EECRwZ3DCDQVLLMBk",
  "key15": "5eGKNpAZRNPhpEcSYG3SUutk7axg6TsntSzSVd3gjKCszhU4QA4mSQDJdh8igxbfxAjYk3apdMHLTznFHAxLh1vq",
  "key16": "3kgSW6ou6bwHiLa8rLgYSBfKCb8LMEA2FvhbzQzz2zaT4oLFptGqqoBe8PH47bBnaYJE3fy2vnc11VLXgfCZRcgE",
  "key17": "4PqpV2LAzMEA6mZ2VAXd2AnT5jGdYYNQHGvQHEuC2H5EARpPudCrNttLDCHGcKNqCjH7oJxNkvxy2RKnrxnis5P7",
  "key18": "62DtiMZgPsY3vDB8EXxXFb4bLeRrEb3erM9JH1igHGwfW1yVS1hPCr82bd2Se94NkLG3bCtg8DxW1pV4RfW9oS3b",
  "key19": "bmrDu1oT1ttH2ymiiz1HUwcWxr9Phx1htXiZYxUQDYFTkMg6ryZST8WLBDGK4hdRxdczEW1vZTjdtPmPQ63EWtM",
  "key20": "sncdUST13bsir1kJfFGbqqYjijfcwXXDPXm6Xh9BJp5KuiziUphiWTSt6gFLtznahHz6YREwbuprJUPb1XTYdHn",
  "key21": "2YQfP8YVaq89WCkQyQkBqxRFXLYH8WgFPNaApZqXDtRXfgeZ2D7N219Qo9BDx8jVWFZ5Whrra1U7djXXsvGNsDTQ",
  "key22": "1tKkzHBmjCbRETumcnmJ7qxeKudpL8fk9GEQ8xr9ZkLaRDkCpskiLUdS5YX5czRHyLcEhMDDFZGBzkLyqeDwypz",
  "key23": "5ALz422imnrr1L7g73dZ33FVuBHZ1e234WsohC5xKGU1EyGRHQx95wBDAD673Ds3tZQFZAfMuUT4gaQHbcNJJZPX",
  "key24": "5Zr9AfVtfKggxE3dYcPJzvmK4ttEVp53KKN5AAkv7BiX7QtVBHnjCJ2c63EUAxG2hgdtBv8wXq89H7EEtm6Wo3VH",
  "key25": "ngNYtB8Cybd6MnrdzP2ZJAkaUXeETngfisSp6rhSQppho7jazHGYfuChfa8X8z7VhTbtv6abfjRpfCGgviBExHH",
  "key26": "2eMFnaUHuswj8BJoViAngSkKqKWSSzoS7FxJc5jLQRrLfC1wUonHjMR85P1n69a5NN2iRnu3NLWidvwER7zz3f2X",
  "key27": "5ZQgtebVYB2YGejog1R2TJKs7169TDMhL7ixUxpo5rqWqi8AxWRE11UmZzrYcPy1sFZ8pznXfveNPx8F5N3zhowM",
  "key28": "2VFfZKuwM4CpY26xA6cybaZVckggEZz4EkynLKZ8LoTB4TwJD9bYabQb1AUhQRBfte9jmboVax6CCTnM3sS7Mayg",
  "key29": "4rrVvmQEZ8Lz3gUkV9omeNem2xyhVnwKUSRTAdWieciyfFnWUPMct1RGa9agzVEN4hWbwoHpLGBcNmyGkUn6mM5S",
  "key30": "5Z8mELNwXPWHWt6mF6xNgBta1ybVvLnbfwusVJHwGc9hRprbCFotNPtYaGvYJQiLy3b4eCzP2dksB5drVFbdBtdX",
  "key31": "wCTkTFRpdRauGXNPBdpuxzYiH1UCLaJ43wqUgSAW2oUaL5Hx59yVsiNSvoEm1M4kJkKhcVe5e7swxdPr43Th1D8",
  "key32": "5NfXFAktSFq7bb5hRrJ18pkWDxfoWeB2saZAJeSFpyK8YHfcmfBxWuJqWic4kwBMCBktQSuSEZCFiPkvkEFU3HLb",
  "key33": "3PD7SbLn9PHh9XWNJuqQsJqrTHBmNaSDQyVNdFNHy1m7Ckod9yku62bV6YCSmrot7zuvh8FHP8Aaeb4ezBMZ56PS",
  "key34": "3zBj56KGaenDSAxGFC9fCgCoeLtNMxeEPmzefPrNuNpB7sA7Ha4gRJZr9i8xPZEL2hNc1bJtMBX8quuwCiwNLYyo",
  "key35": "ezb2DKR969Vr1b4xHtztZHTzahXoHPyZ4oWpUi3MuHLJZpXFkTZNW7TK38ogXzYSGjr6jQWPvZejgDwQ8C4utrv",
  "key36": "3Ud8dF6FWqK3eKRXxjQVmqmhXRfG8RA34srPHneYksbE7btm5UxV4EbinZzCsg68cgUaMbNS8DyPA5gBpbXY8YDz",
  "key37": "2612cLVhbTwZbRyxDvtvKumtfC7Y9FHeiPbvUccttmRT23qSPYTmfGr6TEtjWM63x8Gh3URktsweo9RBGz2oLysx",
  "key38": "3Y8Hofzpo5iKfXtJWmCAeVQqJXHYpKL8FbquzisyyAsD3wzxZDvYKEP8QkgFituNzURZ9PwqX3BjFXPxc4tjUMNM",
  "key39": "Y1Lwz43AyJGngAPXcgWM91JhcEqrzW4iE5qEek3hvqoGqTTHuA4Hf81jjZvbRznvM8xXCLMqV7Zu3ZecM6wYbX6",
  "key40": "53dsq7YHGcshCbsnr9KL1YeqzPgcs5ngpwjkZfXZVNN2qqAyhNwC11ZxfmWBFEmiNUoStMXTFEUEuW9MsaYW1Lyy",
  "key41": "vhHyyKipyRKSpN5ybZ2PXQeWeZX1WVKs59bGopUtfQroFV9a1D7M5i26n7nqvCU4ySHFoDiHpJ2QV3ujRtLzPHs",
  "key42": "5DDgCdu2Pipn689H9SBeqBF8ToMU9bKQvXbcC5ujrJVaX8oDXs8PTou2UxtJLVqfEvjBhm1JLqS7wm8jtaXLbm7q",
  "key43": "3mFcEv72Vr3rZW7g1QwD7J1p9YudNzD3oHQ3Xy6oTxLnk1D5oSQpGEjVjaq8Ym95N72EwPjC853Ct1gP4wsxFmUT",
  "key44": "4jf5oPDrWjAnwAg8HKAZDEoVMD9c8ZB4CYMGhzMTmF4nhUCfa3Zab6A7tijHGkEaHWmmUaPWcbiZAZV5HPMpgiNN",
  "key45": "4NES819d4XBudQXhAJ627n1NMuXAdx6n1ocRL75UjXywBWzML7y4MAFBFKEfN3DAHoToYGqkucJatFyAQ7Mf8KW8"
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
