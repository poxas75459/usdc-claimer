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
    "aPSFSn7xxW3n1rdw9wrJyXMTwbwM3c8vBzwkWvyS9rAUY2CdtAtDoqc5Jk9MaJuBjRUny4JNGYXpsyygZCthyq7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bh5wUeGAk8LTvfkYtmJ7TwNndg6BTRHdX37sYJywi9g2Gocem3gLLYTbPMrEzphb3qTYzsbuvZ2sSErnw8VbPHy",
  "key1": "5fWwdNrJvQ12qvHXBiRsJgqtrmG7XCgfvVVs39ztATH1WDJvMXDY3uaHwL9MZ5hZqshaCbjUQMXFd88BCZAzhfQJ",
  "key2": "5AU4WzHwo6CCuDSqPKxuv1kvb5UWYTWTHEu9Bf1DGmzgKD6bK83D59pAZnUt5w2ptFYzF814VqKAiURxRSJSBLCm",
  "key3": "sCNfy6K95WQubzZLXNyxLHSCPvnfdE48scw33AEYy4XqBqHrqehxSBji3igvcxF9ix3j4cEZFom4paFPovXAekP",
  "key4": "48hN9W7gpZqfDf68AqTPragnpemUK2xaRurdZqRo4C1d3izobWJSdXc96fEdgRg8TEEbK2QFSMuBkjfJW9EDdLXd",
  "key5": "F7h2onLeZ5hJoQobwotHRECRFecijERxuPDZRRQyVHVA61jxkQAPUZfH7cFtBo9pFb3v8XdrwdG1G3E2yrNknRC",
  "key6": "4wVqnsN8AWyAdJjqMZ3zbM1KCrGafNFc3Bn6NKb6GBh3UcgfFPqUgFCKC1pF1f9xsAqvMUQpJ8kzMyDb1hC5UnjZ",
  "key7": "MC1TrL5qnLEyVKHEQb7YJwkRCUNeuBHJFNBnHNAik6oorWQv2g5nzxJCd8vpx5ZodR1NmSG1Kpfw3cAG5V3J9Wr",
  "key8": "3msL2dYcxE9u2VPJxEFH8kHpCqcyo7hhyq8hUgojcUScLoaJWwbKVdwviwrt2JtATFdJdRUFBobiRc5Sk1mhwMYg",
  "key9": "5DLke2HJ7VctqPFdRXdAXoKkvuP7N6Y3RkrzKYan4doGBrfEufGnDgh1WLfQ8r7yNHq4vrfv43T8eBeiYGawV7sR",
  "key10": "39ECHtEZu5aZQsW2UzFvAVRK88YeLBjfjgRXC7zizG9q1yCrP7smDAxBRdg4RxzL4UjQArYBmofifWPpvV5Mr3wM",
  "key11": "5CTyFu9voeXo8tiVP9yXrQeYe6NdUBa9e6yu66m441dBjhKNwPr96AQcaLcKQUAJ2ftMGzDU2BUo7d1bBsYJU5iS",
  "key12": "54pVmFS4cyA8qdtWQv2JAwyEFXqF4eEZX8Wpjrg2SeJce6oR4oYJMMMnQ6XTiomNCNJ2nnyHwjKqTHXYpNPMbJZf",
  "key13": "SMrbpyJpUmyxK9Brbh6MbUyaYr43fZ6FVezUhn2iinhkYAJ3wBGXmazqetQaz4MmRMqQuCvcLy2fehLizmHJVzW",
  "key14": "2eitEWXD9pFGS9N2A4yphR7MQD42jbF8pWxUY8TX6xg2Gx96JJ6aSqZerq2k18N92bUBLp1DaJ9j3f9KyiaxwfKK",
  "key15": "QSUfycHrw9V2bGjh7rXqhaf4qxcBao2LXgHoHh2e5ZtTZGK4XdqUX3UPUBAc2eVyzqTjm7cEpVCBq2MhsRaeXBw",
  "key16": "3zNceYDA3g1wnb4VwCcN7mkTNP3eZEm1o4bfFTHps4RVwBEDjyFHs9TCDEBQEc4UJZuJp48aD8d2j2N3PemqvCZT",
  "key17": "5JYXxPvdRpcHgSd3PT79cnVfRemf4uGrzt7xFLsGCBwwq7wRL8wDBXGp1cvz666TrH4omXuK7JMCg44m6sY9xd7G",
  "key18": "5y5KZZtBPqM5gXy8Nic8ohLtsavyrhc96C2dtzR5xaQEjUDYBN6vrf41bKp6mFUobXCAqhMQio76ZWE53aUYF1A8",
  "key19": "3FYZHXxBPQGALpT964t1oxbtzpm7w9X2ArmUZ2fiUXSmtww8k2aXFGAHv3tAxS6JNKLtsq28Zh5L9YGrwyhwTcAt",
  "key20": "W95Bau8EQHsUsGfc8guhEzEWBW96W2fSYtyEyjYuU6TSPTwFTRLL77WFsqTx9iCE4frj8TXsLKM6o6SLpHJ2Rqo",
  "key21": "4BAQtzXzb9XqcxVc7evjhgfHzHNEydZPyW6eKmSC7o8WUyezQe4XtBGgMYfnxWq1KBQLKeYUSgrAtT9YxP4GQxvj",
  "key22": "4rDy74pJ3QVQ4HncZADhnUUQU75xR3e6t5YA9fcBpMLdv6HP2X61zfLFNixk8BKMKumHGWxvfoTjmCRxxUcZpLeW",
  "key23": "oBEnPzzCAqmMyQshBAH2oHkBjEkEBEXN34LuRRU1oEMkp4X8AFvsEQmcfSdCw2YmqAWtpv448tZpU3fJ2xQ8vgc",
  "key24": "469ZT7rBZv4NL1jB6pYZgoNwzKpVSV5KJmwWyfnE8K9nxj5f4wRfgm1S2HrfJH14jbnDtbijpmeoJCkqL5cgRQMq",
  "key25": "3N3w7hu2kHCmFtvYNu54yc3h3ZcUnZgeXrn9VvPL3E9c8nVU9aFVHmM8HgZrynKouw6ca3FDwNRTtuA6wnGp2Pgy",
  "key26": "3pdZbNeXsQzHY9DdvPhpLNjMhnBD2R9WPeyUghbcANK1grxkYnbB8eYacKpFzDr5ipZMonMDqLEsKYfXFwZY5Tun",
  "key27": "4qhHJwyZojmcGcjdwYa3L5ris3rTqZGwyz5B4jKNgNDBzAHVqJPLXreZRtApDZx9KDLvecRnkgRfNJ8dtDHRJFgM",
  "key28": "2cgXGvyqmFJnRuXWEvkSKkgeMJPe9AvdNwZGD8ktGHEQ7pqjodTzm1wiqi1ur9kbcSUgZCkXbQ1haRNXYg6m3TzL",
  "key29": "532Gt34H1MULAWmZrjdFxuM6D1uBAEnghSjhMjNGh91YzUw3RhEr1Tkz1B59gPBuvBVCqZdGcAcjbrY96GqEqUH5",
  "key30": "2XwRPNkDd8PrTTP79qFEekTmoaAsYnvEC58xX9NL1NELGdjm7Fe1y1UDCJgx1LYs6sNFPVx7X9S5nZw9wUKa8Bt6",
  "key31": "42mTgtZindq6DSBNeCvru6QT7KjptbydgMxxs6aLuZmRbYFWEDrJQPHTxebrhwQpD5LZ8PYh5CFJmoM6CEximzti",
  "key32": "4iwTo46vs8NDD5VcEFQUmcR7TrYGSFYvyTZk2atRvMsj8aBdGB7jPGyks8g2sS2n7bVe4vhxTboMY1t7JwRdACrM",
  "key33": "4xWrdUgAr4acCSb37hWXMrLesC7GUT2LAEc6KLDCqKJheaxjitVCuAvAEoanjDqYE1584wQGsRPrHTRyepj4ssRH",
  "key34": "WXuQhBbQQNpB7tC97PxsgciV78FKHf9baRB6wPdEzvz5HQyjPVFiQV1enHkrXvavQRs9MLGZRn3oH1npx2iJa7S",
  "key35": "631siEhX6ioKWrif7jLMG8QFpJNz5sgcYpxkYEpgzzW4MgLAFiMmUZxJA82bsc91tKrnBd8CHZvnP4AWTjowKHnf",
  "key36": "5v8YGiVXjndyParpPSD5NbneeQnm1vBdr1ra5ZifaYYWinAPqvsT8vr5fcV3br4Qim8Ue8jSSj81wctyJiT32rPj",
  "key37": "5hfYCipQeoia3f6oWxzQmuVNkVUUPBMGHGpadj3QFsnFaJkXDshLoh34skHi87cAUS5DPDX7sKYsM6adTAcYPC1d",
  "key38": "5nFUdwTJqmUSgoYvrhP35FBu2HxHnUgbA5BGafuubP4fgEN5Z7XkQaM26fvvv7dMLpFGJ5XMaEEKf71R5h9tbVhP",
  "key39": "274JfQjJzU8gSjYW31EfaJKMDtftinEp8fmH5e8UmC3G6c4uG1Uom3vPhCXE8ryxfdUEfgGcerm86u2UpA6iENBv",
  "key40": "51jsNkF5Mh91eEJdka8BnNCS7fWoQhSMdexdWqw6ToV4pPKk8SN1TJZfUw3dQCqUmrApLEQHgKK17bH4vZz35mzR",
  "key41": "5zQhv9EvAdWybyi9RcYavw4JHYsLJ2mUSa7oHxtFE1fikyJZezAwTWMKDXa9ZJKa3L2Si1CGRFNvP5ZcPDMyNhmW",
  "key42": "28SxzNV5XyhniYGM2otea9F6RU9TCpL8FoJXtfSYi4Zbu2tHtqedqBR8gaqGeyvqZe5S2Dhs1Nj4BHF4Ru7vTXXJ",
  "key43": "2TMBbiYqBAWZd4hLXq1RSNBLQTpb3akrmMdzVc2tnNSPpRbLgdoJk1gpiH1VcKjWpZwFs16dRRVwRxXSc8iRc5iL",
  "key44": "5MkBzkg8V4toH44Q9LB4yAJT16uy9uSEyWQpbPuE7em6dVrdp7fPHSoY8KsMXHDFcdU2TDXzScDipVp1eCzmmhm7",
  "key45": "4pFuGoEBVJTCncGR4oJwJwM1SQN8QYsVZnjT3UsRA6SroRzcHZoSxpW22G9b6H3AWL1z82uMfkVGo63MoRh1J5NR",
  "key46": "3zATVdW65zenL3GHABkKnB4rvsLfPm8tUFBGyWK7SSRxx35mG3nZqGxPAaaw9d7ozzvfwVE154f4zwuY9PzUzauR",
  "key47": "3kSXCnKttMnmq6HtzhngGcLmVSQtpCidPh1bdw79z4wV7S5d9KngbtP9pXMyW3cLeecSw9VwK95SgaWr5XqrgLw3"
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
