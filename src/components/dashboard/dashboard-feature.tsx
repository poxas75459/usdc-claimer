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
    "paFfqcZ4tCv8uxJoJgS92WhGs2Qx769svaiDvLUxvWMV8BMY2dP8goW8KEy8wZAkvKZMEMyJ5itENX7YMyDwwHH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63TVvxRYhaSdVHQiAXTefkg9AijuS8DpaLzWrkN6Wo1jLiGp1K99AqdwC6u81m26L9rDcYizDiB4dUjD9WMy4nuV",
  "key1": "4mpSeN3DTGmSPzQ2aPouUHxbCe2RcsDSGrHi9esSFmog7YpfkKKi9MET7KhbZRSLb1kjPy2vP2d9rKN6fFosNTtP",
  "key2": "27TuwWxFMckS8Qwf4EowzHhXwYczxzi6TyNzHwSh34p9HF6rjf1oQAjcjfKURFEjALptwTiZFcQvnNXT91Naxab4",
  "key3": "3jHT8DNYyNd9Qy4SZCqEdJB3SAvN1UTGMKndRdgjj21ceTrcNbh2S2HpoeGi11dCELDBNkeaa5LuJmdMMD1TZ9k6",
  "key4": "4c91LX6GWyA7nyRTpFBEPxuZiefn8Rk9tXEE1txYip6fuMpFSXowEJurx64EiNuwY6VDykQkWm6AQ61Wpqse6zB9",
  "key5": "4wCjWPp8HmFZJoWD9iGiGrbH5Gp1oVaGTqM7J4wbdHNjiWskVz7XNUhVU1mu5gjoPWH5jfLWSBdFYkXrX3fsMPK6",
  "key6": "3CYdUDDfXzq7uEFTNnCNjkGn7Zzh83PotjYe6qoFdMGcTHkWpA4auYYvQAietRRDP1cjky5vRutuxf43sbyi2Wir",
  "key7": "2bmu8ndRNYm32wizFNvX1bh7Kz5LTGrw7RfkGJuTnQEMdFx3nR6Et1zuWVwyStZYjqGG7PdyJwdk8a6EaZiiYyc6",
  "key8": "2SvNrw55b1vJKdNFNJWY8urLhWErmBkteJrT77UhQbCcTprwXT7NEHHx6aFPHHMsT2TTpHYQhi6oj73upLPNSVRS",
  "key9": "4T3K7BtGb1DjrBHE2GDHwb9csWEgV5rzSgWTGfjPctwujZBDNkmqEHK7tdHpnVa6wi4pk5KU7DtARZZkaKT6ThBB",
  "key10": "9TPbiCQ1ntrpCXExf7nLrfthA2nSpp1HPnW59QnbUw6WkUo3caPvkv4UEu5iY4sVLP2Geoj2UJCzFi8CvuVRQA5",
  "key11": "4hgLp6yHpCSPHVDhH7prJHNGxA82u7vL7UXKwZxX1J7GstnK7zGsQBsJh5B1BghUyPF7sKDZa73oSCpF2cyS5h5i",
  "key12": "cb5yHZH2WYxzLPbThkXB3pc7KdXre9VMg6ncFsVhDx2pnp28b7p7dVuKNuZuraeAjsF7EVfqitZwoVTkJvokUEC",
  "key13": "4PjsPXMjHhNKgmKPkdDgFE9R6r7jrCq9DhquSN9xyhXELjUa3c6mdVXzTomWvMoEMTZAG4rZfmXbrNErPTDk8FhU",
  "key14": "5tBwExKdu318wpbLmgieecVAVBBcANxS3UR6dRoMRee4PwqXWn5fZw8H3ixtkfgC5J8CS6fzcmxRNsU3eByL6AkS",
  "key15": "4hYoGUTmewXM311HBbEVyHJ6RursFs18wY3iNZ5oi9M6CVqXN2hoaYfW6zAnSBS52D5fRzacAp7JuumCRi31SoCb",
  "key16": "juaAR7qhX1Wwz97bY2N1vSNVoN76nj7mUqMfUXqA4xDqQYmAxeq8sXersNVYBA8evjJNjvHnngGyxtSgK3Eocie",
  "key17": "2CQFL4KfS4vMc7WYifDbQjhPXd6oGJiCN56vTUwdZNbfR9dXBNVDV2nqXSjxQjF9pGpLgpjTioWbQJTMtBPFfLMd",
  "key18": "3z7xfYY5YavTVjvj1VeYN9Tmekh5xJdMq41VhGnTgKrGwuuHvaXvj1XKmCvEiPeDdW3FWARPem9aWvLbzexqM1rG",
  "key19": "4mxN2v2G7qA9fRUZAbGUqsVyyxMd3yHnrqcBgEx1ycvM45XHy5EN7Wa4a2onTupSiBvQuspU12fejM2cKFxERFnH",
  "key20": "222FxKMo4aYgjJfChrESzbszNns2J1PLTg6SuY1FWX4g7abAt2DMWo6QVweXKPu9VuNukFEvVcttenhf7YNzzZp2",
  "key21": "2L5HnbAYRWbbuEAVMmE6i6xodLadkRkZLiUirmFsfnss4qaRHKKuuktWLHgHDuVKwj8LVcoSoyrRoRPS5xbir4sV",
  "key22": "3zKpEidCLE6kBy3mKPgoxdnurD1uY7wTZSp4xqvvmbs1aPtCSpyQUpqaYgznzZcwo3KGBebWEu3tWaL6EFbnJYXA",
  "key23": "3opCbw63iDDv7ANsfdZvtHCY4Twet7wxhNgy3aK4VFdfsupn9CNKJtqwDqn3uHuv45kPfvYozzzeHuUfGychfGdj",
  "key24": "3sHeANiCQSmDVA9ptt3BGAzDANJMsQy864o6vAz8XYdCT4iWmxkLdpbYv8c6RJ4ScEzSGzgztK27oubzmQ8xXa3y",
  "key25": "UeY8u3BFVedTdMSNgNvFk7HjikCp8QYtX43ZAFsLqU5V7vhLqS46xiwbQdLbUCPE1EK451DjMmc5oexL3Mv38tB",
  "key26": "2AxJTqeKjE8jBmWLEHf9e65cLMCoUcFVx8fUR5P3GzN8JEp4AF2kf96EvkaZmhT4KnFTmnECiRspwdU8XXDnwvuc",
  "key27": "5dub41XBfZnAGNmbc7JV33fYtBXxTE7zYM6bzFDP9ZJAgcTanXDD2nEJw5oFmGYbcSjPJpWw1bTKZUSRMfVBcBQa",
  "key28": "BF6KU9MAZ9zvHBq3fh8Ec8q63pWwa8becjSK5B7CBKCZXzbmLKX4hqbEMY8JCwHeYBugrqaVJhvVhdacPNvHNyc",
  "key29": "3E8fFr5dgWQ4TNWW5JWYzfmfi6jjACT4p1Lr3abUzpriUX7V3tK6816brxA3Dixrjcz9ziJUpJLtPRZrawvngX3r",
  "key30": "5xznuDr9y8jNyacjMPE8qau76DYb7yL7TAVFcCG5au9n7ewzyFmaja8PXtgrwu1kTZzkNbR7W6dDt7Z4wDpf7HgZ",
  "key31": "shYYGgsK3E3q9zkQFp19LrkPjVzWR8v3sPRqNF7wjvpDjMHZf5YCPvEZNDPa7Cz5MVJB64j1YqUP2qdzKuTqBAC",
  "key32": "BBy66tHcxfB6FweBy5nHVETj4Ednqyjqd4agcTBekcxS7kFrdzfu8EDSDQeHGHooLfA4qcGJhy3seUR9mw1z7UV",
  "key33": "2JhAeUq7qqWNpa7WwtADTky3xVcRrnJvrEgdibZi3KMNT5qAZ8scm1kPyA4QErGPmmCM3KCj9LERsmT76UrW1VHK",
  "key34": "67d3HUtWyeJqjiYPTwrHoLUmth8jZdYsJqFQQqHmTRd4wgD95BKdWQQzwVGFKdvHosy2CYacb9pFMWaHi3ZNFq39",
  "key35": "wp3qqbM23sGztsELyEsRdGWJK1p47MWaXTxiPbrxpSSghh3v9ZtRBCmVXT2omJVDwc2sEtLgAAe4FoG98NauXn3",
  "key36": "3wrRb3NoLWrY7ozt8KTz9RVhWtN91pPZESHeVP8QkGH5fgnhANqXE4cC93Gr8brPRCshVJpndSookcF1T8CrsBE2",
  "key37": "3PjvbmX1L9Ub2B4b2kUYCNTH83V7LM14P8uNxgkn1SwjeTjC6kWVprt5HMHgaJscaQHqu92rYyqY6Zw6VtKkfCYW",
  "key38": "56Zpbn4HX3RheCDEKtggFfVD4adW38v1npAzoQ3rSC6ND8nDwNqayLt3zhhyV7itcBBXrvqPv5s28Msa57PDqvKR",
  "key39": "2A642zFqT6aMLRDijRAgDUPgeD829S9dwMYqoZ9tJeCoYBb9sxC6scQ81Y6a9UDRxDtSFjzsMWZtPXYhiYdecaEx",
  "key40": "5E8CGo2ri8fYM99KFwPkVxBpVqHT9XrHZ3UQTosh8jE8jaGTRxVxWx2nLB2DxzawuNiSE4Wu4zefv8yQ3EaMxzBB",
  "key41": "3JMPCcaecKyL2XY8HtJF3MAV7LWL6D33HGYkyyMPVfGoNeh2Ky9vjbbU2wfL8qcy9iMDW3MENDKBhExVrSQR7oRn",
  "key42": "5KGRWdr8uWk6WevXuARVbroQ6Jy6xvEx6ieJqTj93yZ1nhTiab7NgQ7d41FbYFkWni6hyBt38ZC52yX9sxyNKP3u",
  "key43": "5HUXbXHC1jXQeMiwHaUtMj8NrnEXjnJxUkR2yYrspe1mx6qzBYCnEze89iU2DgvBRSPXSzNGWtsx919mWBbgejUZ",
  "key44": "5JbzyA963eicwyzuggmxmEWEpcNNVuRL9u7m94KgorrUyDZPAUfRP69o7d4y5evYw77HQp4dvvFdw4fNFrgNsK6d",
  "key45": "3Uj5kYoHMYwoosSprvegFPL9Swx4ynP8AWGyrsvHANXkWkzeht9xJxGuCShHg5nebrVBKEnNEia69QGnrAPNFysy",
  "key46": "3eqBy6U17ryKrQ79Z3PyR9KccFyoF6s6gwbN25WwLVEh2dUvRf8xKztpMV2kgTiZXBdvXpcjGsRXY1Zhwhnxzj9n"
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
