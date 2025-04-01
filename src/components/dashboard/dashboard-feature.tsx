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
    "3ifRLP3fDffpSJVQKGLRTJYk3n4A41wGnsWmS7uwSiaWVpw93s5Whp47R331NNpy4AgKgfEAo22MnV42GRZW57Cr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "robFVPYVbfhc594udakAPCaHVfzen26fcJ1snaaNr1Cs236tDFe8TCEGXeLbStL26WGASA1Bkpw24sk729F3JDE",
  "key1": "3Uz11eFgwuECjTwavWZC2o9i4cjsd22TKUrsiVKVysZgJRXBvQentz4UaWKaBEtzKfL2BfDpdqK8au13fiveu5iv",
  "key2": "22WKR7oznZxqUb6G55Y2oE8R3ZLEXwHPth8fUDXPfWzv2S5Yi6shUNZzi4yHfA9R6vsgDvE7iYebocmyrZrntzdf",
  "key3": "3LHTxeBrenqTrE7zXLxBM95BbJ2Vt3UeX5qcw86FGB6GjFxpT7AEyy8MBakYcrKPZSfPFWMJfbATaqNbpkKjCsuj",
  "key4": "DwyJAP23tJT4PET1JpqmFHqS2mWXN5ed1zJHvBuR4dj6m35ZSpgYNYxkcEugLbj5d4j1kHYm4D3YhfNgCBJJzph",
  "key5": "4wsNEwcKx1AFtKbrg1GYXRTPrYSUmxSwRwEgFRz2mGv4bUkDdQzocxqgHEr3Kt2C3aTVJR6EucHgccp1LLCK1ssW",
  "key6": "3mwqNtxai9NUHy1XLc8NNgD44jtJPZ1PgUgBpbcxDFAfZLANTHToKKFipbHgNVwBqbdqK3T714ch7xENXtwJVhP6",
  "key7": "vRq2CDDnKDpVhN8G3c1baPeAyLuoGJMmhFvd2whZyAifoYPgSssMbcHPhD3dWrbg3p9ZKGSWpZtAdadMbLgJBbH",
  "key8": "3xmWZR3MWTD3DqjuawmnjdTFEEA6UpwzUkKHHmWhRoypUiFSeHodxEVVTa4XhRMUTGm84Czf92tJCBxbFfMkL6RF",
  "key9": "3rYWdk9axkZHQ4DSEg6LXSNxd9125zHxQP6spixrnweJQ1LvjLyiF2MBewwUG3vu4qYeqj1PNcjiwPCkPxzVMvza",
  "key10": "5QPr7EvnPdC956VHAdfXSj2aNySLVYosMcNqhTUhh4G1zuTr3H8qsv1WWJxHRvdWiVQB9zU1aEmfemmH6oDKMeHQ",
  "key11": "2aXcWsdmdD1aAk4H8WNwY1Xt3AsXpEudZYpfTsyNGyLtA8DGNsBcS2RYSdHNzkJ7X8bRFPcgdyBqJKJw4JY93LrT",
  "key12": "3FCBaS4nK3vVNzYxVyJyp7jSR7HebLh6bGnEAMgVDzjQBZxxkmEnswzr58T4Hky1Vd7avyQC9kY2TmgUE4LBDfPx",
  "key13": "4MKDh12nZPq8JqH9uEHeQ2EHFioFa3fhqTgUw7tEyQbpNCgqw86Uc5L4Y1AT3guGAsnXC1YVwQwuSgrDC1uiYtWX",
  "key14": "2v26AoTpx3vyLcepPbhhMDuD6CgBXx2vEenwUGH7VuEHEM2QXMSjurraHRQmYqoQdzmiVWKKs88VzQL5NbaxDiHg",
  "key15": "9ENwtpP3YxaiYJYBMXtdowXdLp1QnCw1XbjpPsScxsVBzzTZi5mk51ASHPD5TUNozN3bZNV3JasY4gvKSwZ2Kac",
  "key16": "4Ahf3BJJwRgaFwHYJqaectYMKVWJdm4ZcPNy3VL6wXfKCMSCRUchv6xx1qcTfHZeAdD5nFSKUbrBG9i7GeDmSVWo",
  "key17": "5CBHAcRhYQHrtYFG7DtXtKxDcmFX2j2h2Go5CsVempB4v5wMPnn3rXXFEbFy3hhqZv9DgA9ZBLetHDTBgcEZeFax",
  "key18": "36iNwn5Q1v329dMYdrvcjVWdan5g9bXghUv7dWBkdKDyuT1VJPDrhy9fxCZDiezVfi2k31EpSrUzRXsj3nTsu7jk",
  "key19": "2mgsPvqXoHYtWrheTkRfNwy42zb1qQBGr4FT2uofyqh5kRp8kmymF5PbmcD9pkTawDA36Tg8J7cceUvf8nmSBEvQ",
  "key20": "2JPukTZ954HSjsednJ9XbTbGvxzBNcP32TSL6SB1DvbjtccCi1AiyXG9KWk4s6ZLL4epDAABV8WqGhfBwBAWfeA9",
  "key21": "37iT9BYvLPRrxJBCWsNQ1T8U1sMuxVq7eLQuJZwzhk6Ucf4vRzD2bdJ3oKqdHo65oh4acpNzoVvg34jAvEQpZ3t2",
  "key22": "iTAxrjRhkhuVydz6KRs5fpMsd4Ea74K4zw1Q9McDVjVZAY7oHnNFUtbWSK8XXA9dpVVDXqn4H2RMPvBjLvPHb9b",
  "key23": "4QoCmyuTcqUgPkvTbnFnpD7HoeKHJwdnDLa6hWuW57MxoxgNrqBocydQvZNadNYcQMZPTZCzF3XvcM8gDv7AZoux",
  "key24": "4PX3dmpAbynUre2Y1JK8tL2jH8CKG6rv8Zp2Ye8axgvW2yrumHdyT4CLS6LRd1CCMvEUexEruhi2eJQ2a4VwQ3EA",
  "key25": "4vTCYZ5ZWGYZiALPSS1AiankwSA16EUMQkdKAudPGq9MjWeFarbdMzn3Gn4L7o9nZJXPWeAKvseq6LqYeYE76okt",
  "key26": "4dsTcVyGj5Wz8VuY8VJy2AoeJanvyuMdd2nRqLGNo6WZbHwD5Sunem7RMZjWSagPXWK3BQDTHJ54Nv4CMdPyxWun",
  "key27": "2mhP1g2ZEYK2bt7opHJLz7Wfdco5tPjLrEmqVw9Jeb9fEYj3vv4HWiUN6RYDo4S6pM5Y5oaSHFxVgVkhoTp2Fnu9",
  "key28": "56TTa9tQuw6uW6BWFRHfCujCZAnBuZXPFVnz45yRRg6ZQJ4wX5EN4TqvRPzie9hr285nFJsEjodrAXCPnRkLs6Ro",
  "key29": "kXCwcWC29cb8VzzH6MXKvEP4MS8AhcsV3AGQiQUinvzKGLjkD5AEKsFwFLhkx2Ecx2AmvNLEf8UAezLnWFYA5jm",
  "key30": "5MP9ip6jAYabvaxia13rwvdPVTXMxWiApTNyz3LN9pWV83UeMjVGU6RWR1qMybPJwPfBjkqgqU67D9PidZVWj1DR",
  "key31": "4KQoJJPTFMe2hqzVAuXaXfMEJXgCbMDEwdgv7Md8aBjnFijWsc6ue3zWV3viurKfaHttvT93WhWrTEbV8pGBSSJX",
  "key32": "2PYcXWCqbEhU4nokHjqL9WDjSSsk8d3Eja2F6yDSm9Q9CKECvGYQHxYVS2nc6FtrU9CZCb6CTgUJAPzo6AqpwT9Y",
  "key33": "5mERVWUuCPzMLTCwXBrPnktDKpGKD4PqAKbC1iwj1RbaBSSv7sqbVdzVsUUJYp9sUdKZNrcJ1yPsG9jn1DsEQrCe",
  "key34": "4o1hTyknkne86XKzfyHkwcVRfZtYy7r7XVdbUMNEiZkiwceK2HU673KDjk6CTfqbHGFjwyms3yYfhLzjtpCxLAKb",
  "key35": "2oAzfVFAR3oxQTFApqdVJf7rnhVZmeVkej2MPqpvFTMY6gMWHPSLRr7GiRmRdUg6xrvk1noMz3AtKpxSB1qwU4Tx",
  "key36": "2ByJDNzBifdHC8HgsJXA1st9fEikG9RwGFZRMbFz7TJWrQq76gGsN6GiNGMR36xTxUGgeoL8k7y2m2YdGDRvuCto",
  "key37": "3r3ri18oEc6jy2NDAfhVQ79pUk6fRpW1SQVCfhkkPkV97g6nHLVE8MPoUhLDFj4PB34VDUkNEFkoW4MTLiiTwKpi",
  "key38": "3bweTEVqqWMkxs4XVexTfBH8hdkFyAyS4f5AAWBvz3ZsTBxQzPuenzRyBTjeqH9bjmLEuH2TESDqkmJgbMdSF7K",
  "key39": "5a1W81UrCNuqwQGdQNczmUj2AsyFmy8SRL238XXo1e6hjZGyde1oqz7QbEgpwongXVEocJe4pDXSRa52P3L7dJ3u",
  "key40": "4JivCTgfSWvYXJxNn7zjLHEnHTXR1UFLobQFRyPVEcbxLKVPvJinXiobc6Gq8GjjVNqKEv2bWfMg8XSg6NrKdtH1",
  "key41": "4HfDBqzMkBrY2kBZNhMZB5DvKEyLBb2x2tkBubFLawupQK6mPnATHyYGQyYJFASXJVjbAUD89ydtZrD5Gt6c3iB4",
  "key42": "2GuUvmLDx5M8GuJ7Z7iTyEYQecJ9AW1pKyM9f6ykoTEg2xmYws85aQc5YTJqQYz6GxT4rxy712k4NJyuDrv8rVQc",
  "key43": "4iPnFFE7oNKQQxzU2sMT7PyRhhZLbD9sp4WLi5xLHJRWWDgKtH9YuFY2gicJqMyj6rhYXndEj6VTzctNbX633gPj",
  "key44": "ZapspGU7abD7hnv5nHJipMHAePFP7erbeaX9jS6hiXy97LvAfbbCsaeuF6uFW9LswFUW7zRBkV3qg2nb1tRbjdV",
  "key45": "3a1MEhXt8nrTZaCKagu672Sy4FfeBgCa9Wi9ikmAPV8SX4wW57dkdheRFju8G2FLvDTx3vYmZFU1QmG18CboVq4q"
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
