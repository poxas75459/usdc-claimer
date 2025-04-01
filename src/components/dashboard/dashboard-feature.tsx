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
    "4S1ZR7Cjifi2tZe1X5fA66EQMe5mQEMUUVfE3pEGvTq3iScREWTAqwKUm2Nv8U6XB5ob1kTtoqh8Q2HTiaBXa1Er"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WGcN6damfwGbyzLcNeaMGcNETt4xnkidwhmz12adWfRi1FQq2TQWLDDF6gJzce9Kt26f7sXVuQBMWRodY3uYexT",
  "key1": "4xZHgiLP2p11TCkFhgZ522EzPjQs1EaJoscNY6yTdR4Bfv71nz5A5H36oCTyHY39SkxvNaWEZVjc5XMD2rZz6rHU",
  "key2": "32q3zKDFKtfeWeWf1ufeqipbT7mE8vxwZjyU5wJ51KUSfp7mAmZYfm8W35CcCS7dWUEYrhY6u334TeJjf227o3e5",
  "key3": "2f7hWpHKUVZTB7dC6U3W1p8RkkuBwgfdh1pCryZR9pfWyy2FCpVwhW68YTYnL7hdtwHcMbVrJM2yNRHe2KzNVzxD",
  "key4": "2iXLMLFoH2DpjTJ47qjPJvZoiPYYND3czZ7wRKYCEyhb3pCz6VtxcpgDTAVHN8RU9JtB8aTRt7fTyZVS9CLJzq1F",
  "key5": "52yvuxVmDN7wCYHtAvYV5vL97bFVZEV6bVayAN3CZrfRP7nvW5Ro63LJcbUeRqvKSktH6XUs2JhBjworDokW49JA",
  "key6": "ZLLSdA8fZnV7nvxPYuhUe5wNWZtBo9cb7WELVthAkoNeeZp9GhjXWK6K8sBRKAn5hjpS3TF6tonVCFY3k2jGfJR",
  "key7": "59QQHkfLsCdnRVGGjewPa9shJwZDhZwMXgsGCZbQirvVyeQPX2JYgh51bwjC1d3cDcSssx3ACgniM5gtYv2gVZjK",
  "key8": "4QQUPvaY9Y32qGMbzAoFqgHQ1PXkURhNX6EiiwBvoYzeVq2TkorMHgHaV3wd9enEKZofthQh4WSK6VqKybctkbHU",
  "key9": "5ax4qtN9DKtVe2QqwdT8KRJcJ7yNdKL78VuhnZkCSBHGqfRT6bGq4ZsU85qhMMa15djxM7ZoJ8i1VPyeLjqJY2dR",
  "key10": "jGB1Ln49bopfcpNrPkqtV1FTte4HoKTcNQtKKQKA5mxJpxSv7VHSoErLDshKLsRRjF9NbYYSrJrfXA76gmuoknq",
  "key11": "4TH1im5ZAywaLwfxuVWtkan9ss6LNsCTA1eoMDMSjtk9a6GpxMMcwZ2k6P1hHUwEaPRYRx3GyCNqAaofZm9KqWkk",
  "key12": "2UjU7JxfoCtCYrMegHCTHHakMM6EzfRn76Ho6Eo35SvpmepBnj18y7tgsWE6K2VY4TCoXMChQKyyWvzG45JaBTWK",
  "key13": "2AbkGNC3Ls5Y6uWqnugDTHLGUVYok1yqbZCkUBTM518gwPqDLg4Y1SLGaReJM8h7iPrtzH1bg5ovw9JqakTeMiWJ",
  "key14": "3fqJKHHHCa2MX85KEANSgsDBUPqkTid2ubDRhJXiF92o41J3RXLfxFSQE1zjAKGKQkdooTvR18gyQA9JHmtbTf2r",
  "key15": "3uFHDfJd3Ykc2VoRAb3jfhXx27jWXRc5acSc845LeCJia9xgXtXed8w98U6HS1oCUMF2fjrWiqipEgaYLsSeF3hd",
  "key16": "5vttvLhb7pkhyWEc4u3USgb5DZ5zoDk3yFy6JJNQpCJ29YzWS8SiX3fnaVUJNjTd1GBxB9behrwd97NL5JZjcfit",
  "key17": "2Gr3C2aVYw7EXBaw7FxeyNjp2bbkQ1hnHrp9vKhcyGpxHmcwGhQpRHdaU3vB4izCrfr568RhEY4z9xhiNLwNjRkr",
  "key18": "3C3BWnsnYHtGbeFf71RdGsQKTzCXXgpLJwSB8wfxEWWoomTjyoYorgisKyjHV91TLNsHcJNeSQaYShJAMcz7Z2WX",
  "key19": "2VAS8N6eTC76gJo8knNk9fU3rDaoa4hNDU9vrNUMx8uRti5XBibFRwH91SRxGx8mUuTD62aq61dApfmWRBXT7e1t",
  "key20": "2Nr2uagHLjY8RZ4MpYMNn5WH9xYoyHx2pBHEebvhUUhwzsyAdCg6Q6pFfgWJDrYtaqLmFJwcrEYk7ancajthiZQn",
  "key21": "4cC7ZYvuyQgXV3XA9BSUKQB3SZKjazRaKCNQNFkpdCsmdrNBVRw6tJb7b4bTjwB4WeDw38iM5fS9MFGqTa3XWJgL",
  "key22": "32h53V8Ez9NwgUvJnXVVuLccBandQQQEhYy5dSLsFRioA5mje1gYksPAFyUq3fWv8Mqtep4vvTSDXLoZD5xE6ujN",
  "key23": "C1mmrQGk4e7HQ1xp6iwJ68AYu9bE8G4aMnYMXEgkPf9Y9tmtgocyZu4VS1DNGYNpb7qRdxUjHBR3j18u7CqiXXN",
  "key24": "5r1ZJfPZsPU1r12KwVKG5iBwq9U7jbbVfN7tXs5s54Mshu6z3PasCvn2X71CAWTF65pEwfN2Ymv7mGz3DtDntZK6",
  "key25": "4KREsdsBi6P3B4uXKWJZK1a7DYKp3NX5NUmFZyFWYy8X9sUnB622WHLJ47ex9HaLNw282gCtQtaXiDRr9vs1WXi3",
  "key26": "31nYpNGGCwk1BvYdPLkaavVwt9wHqdqcubwTafnpncgUrYc6mwe7Y9ptgG4CzFdPZm2VSTquXqknD5cX34aUnfMG",
  "key27": "nQar4esdywvxayyvXbNtwNrmJtDqwitj2DHdLVCS4pyGStt44TWZgM9MEPkTYZGmKLx1HzT75aQ8kMsyry5SeXn",
  "key28": "5PrvgycXtf7rEtaMyAMdcZkH1KXUPswm5nxyBECv8atNpBRQVDCAy7tbCTNqczasbosfQnEeqGhcjEryqSv6UHp5",
  "key29": "3BZJ7yZUdvHcu1SNc1epvdzyi6ewpfa7K2NuwLWA8AQKydtjqrcCusjMm1L1R8feSy7z3GXmbaDPdA9Jp4QXPeZe",
  "key30": "4c9jps7n6Va7r4kAU7rGokociDhhZSPYECy7F8CRBmhJNRTGrDCyiLKiHAgyWumjJDvAf5Sd3C1uhDPHZNCSo7hw",
  "key31": "29xJFNWR6RzkhE2azhW9Uf4cXoAAgqhqJ8awUbGKDxTmiLQ93WqxTpnVdfrnZ9v121nMGjCjDZUxTLLSt7gqZ6xw",
  "key32": "3LXfy5ogZKCXX7bfk7kaesNdKx31pzgyfTcHkETJnJdx3e7Hb8C7mV4ac8AtAqfJTvyMcLXEity6cPvAGBfqZtPP",
  "key33": "61DervsJLHKuJrAECh2TTSsHPdHorf9XLG9LJN2KvnKCkpdsG2YqKvc4N3BA5uEGPJv1ZgRKE3HYCSB6L3tfJS5k",
  "key34": "4KJ4WjWaEj2ew6uXeBMg5eGLTgL2DLdpJnWiZb8Lrp5R7fqyaRjCettV5XX6qff2aSMZkxiB4FrB13Rzaz61y1ZW",
  "key35": "5pECxzfAt75SevBMLvkR2XmrtdVpoBN2a6J5F7chdek6aqQypgbC74joTBM6WmmjW6UuhCa53XwW6GbZpS6oeTyx",
  "key36": "3CFbnjgt3oGuD3rFqMh3xMFsR9YnsL4fSoZbw2XxWZ4e56nB1dzZL4HT5YnrcAYz2kehMY92Vs7R86bJM2URTBQd",
  "key37": "2on8bTyZsfpU5xG62ZCr4Eepp9KbXr8PjHJCvCefFpmKr9ggWsGeExvLzeCy1jgmn1414aBU2dA8SaNxDoxupq7c",
  "key38": "5wdM9y6LUhGx7UcoYXSmK8HkyEv1ffMQ96e4nuBMckMbxHKijqzHGE8Ut2S2JXB4Y78ErH34EVr9wYU3Ln9vQ3L7",
  "key39": "4is1nA6Q2mNh6j2xVhBNEmxAJSxaz7UeSvww7TUBSNbbtvBeDZH3r7DL7Vv5PPWYrxG5oTxBiFrSXzsLZ7H23ige",
  "key40": "3dxiDUmXDBRuMpjpFUM48PcALt71qcXUBHbc86ttcCD4oKJjRwTzw2mCsWAyACVnUKYdrCe3oZgxMgak47kSnK9b",
  "key41": "2tGYTMdhGDBEtQJTq5byY6XLzsHvFUJ9nRBcHzmaE8u8odo2AvW5HzsCxsiYSNaoKUQoEsvvMcsy4RWr8a2J1tQ3",
  "key42": "3Doy1QQ7vcqDTdgim65WiCvtzgSicWE4v8cJYjKxD3Woh1g8TNNfHvBcTAkA6Q2W2NWEFTzDa2KHjHqPUmQoQuKN",
  "key43": "5fzKirN5VTEdXzvXymqFKEYEcTUqSSW4mvt6PAqm1YJneynX2NTpPVuHQBrEd6JcZjWi9eFs2uB2gNUFW2z33DGV",
  "key44": "43iKy4vy1gTtW8fyuG168CDT6nsbgb7sq922u2uzm7AWmNDHb7yf3EoLRoKLqqLbgqTyPLGxGEBVji4BWt9ksNG5",
  "key45": "5dEqPkHepvdvPmr7VDXwkbJXpEnbHThQyAy7g1Wk3ysjBoQ6pPWuMsDgXVJzRsCGd1He1erK8wwLGc8ufnctNUpV",
  "key46": "5UhATSNwQbs76cHzPzXPPMxMFb7eHMFkwEtkMgUkeZayZKZ1tF1JK1Kxd7kQWRWJ42fXarMPaDH1HTfvVA7LdQQG",
  "key47": "62aaMuM5S3HcYsBESYQ32TYAnLQ8379zneN9Cj7D9WpVu26VUDkehzW75rcMDu3NTYppBm924P5KsohLMwzNHWcq"
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
