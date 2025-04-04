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
    "4s9EEAFPqDUhjYkX6dSaBCYj1xEXAUHyhUmcSpf8gZLxkxAx2g9PRBCwySjDLhuWvuczp6X2DFx7vfDkQhSEbGq4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56ApnGLPriYXsrc4hZ7vw2BgxWQ8ZE4TtSyayBo7dVJG5W9upEcuyaX5tjjw1aur5CjedqAwkY87nf9Kg5CJVpx",
  "key1": "5nCuUM7Pn6LpwDCV4vUg8fkkt95P4EijND5c9Wu7GQeiCWhgDN9KViVq9KSPXP91bZkwyFwq9TjXHb8UnmXDDGvJ",
  "key2": "YoJKk1dC7wJozzsMYqeMouBVMyoGHQHWxphjdvrhmDqCW5iaZG16hnyxq9MRDpnmQVqCTt2mVoBKNBHVT5124wu",
  "key3": "3xk2oVHp869frShZgQ7bd44pU3ukzmJhtqTAR4mKdsjkV825EfwxJTq1zGB9nDGSry9uNNGNAavBQ3wii9SycfmK",
  "key4": "2EtskTaoZxsqPs9wmm6zcEKfn7VpYYKY9a8sRKuEDYBgryagdWU2Wc3b1BM9ZcPaKNuXsdcYyS4BQUBxLAaSe31s",
  "key5": "3jmeUSQqFVKEzRNsAkpFNaBDvNZnMJRD2Fn3rCyEjsbQMxMqwrrPCU76TjHzHU9cymU3f6Mx553Mz1ukYZL86PS5",
  "key6": "5tLiBVhYoz4wsezWVbrLxkqUF2apcetQZZR5w1XV7AwgyB1xLUJY92irU5qd7uzaoCRxy6V71b6bw7npMweFtBGA",
  "key7": "TVwHntLp1f6UYLabXKcmXUBrYy9eFFtYitbv72BCDCBmiWSHWWf1PsGvW2D9GCXAY7YwFbFj98j7KMJWaUQTajZ",
  "key8": "4wj4KJ2iSjhoy7Zb71e5kHzijP4cB6UhaaLn8XLNHMYSd78mDTQfajDLbKzmSvBqrCTa2K8P4iNK9cdm9VMd9XP7",
  "key9": "2MBUTR8eZekD2YvGTvWGbwYdXzDxBVwLvx2W2HwiH2EXkT5TqeoiQvfisgJuYi9FNmF1EWwGMNmgyekSXQYw47FZ",
  "key10": "xWVfjRU9WwofvZNSQEykjUzJyyCPTMerGPbok194s24AX8QcQvgiD1wJiCxAgJfM74j9gDR44mopo8FxVrEDzqK",
  "key11": "5AWWovgutcGN5kEhrPqbGLQk3fmGo7we7aK2ffjZE8NwRY2fjYCi2YbEQXUgk1ADicYoZKjbH4FMNDmuyXjtin92",
  "key12": "DbxSViMUmfC7Utqws9Ueo8ZpGX214QuMuX4unifD56mGsuY9hSdzvrcufLvdXy9ZafMXzBu5kECCwLjg6LPc3td",
  "key13": "4ij5rp4hjuedpwk44CrfCZ1U9MNNGHDr3CVhpbEAxMcvpdrqDhjZHXKrq3rfLJxrwj62jcuoeYXdbCQ9A5PGgTjm",
  "key14": "DUNS1MiEeHJ3Pyn1qN5z8Qu8A7x9bp86AtF4A4hLvXQJMpVQ8Ve39cHGNTooU1r5JFSNtkAN3T895c7CPzwcTaC",
  "key15": "krihDbrG7Tv45585EN2TDVzyDpW9QgMnzdgM6mgxN8Hv9CobkghcAEUy9CUKruKtQhkcB9k4S2K6BndybtfsEEx",
  "key16": "21yBxrYMJz6eHMvc9GogC7Hdm7t7uYe14kTUNc3RqTwscwW6WWjS5FPEKk6E6gEUnBb7nZhHNLRkUEM47xR3Vkng",
  "key17": "5wu4EjeeuAVWnRnrZaJRYHXxhsZDg6FBXASUTzsDPRaziY1ViieUXPLsEqbUdPRmoMX4xsnoXttkqYxnxSCXStVZ",
  "key18": "sfzdxJ3dzWJ97azxu39WG4PtL4Gw8Hpkgq7BHBm7M1RTjzif6dPebKd7MrEZ8ySVcKmtkSxbFR4NJbfpUaX5v1K",
  "key19": "vLtMUPyNCkZU1R4gvod5LYAN7VUiYGHrnC3UuYYmR7K4821c7pkMjmW4EmYarp8nGHpbArqsDA5dQSr7AdTaA29",
  "key20": "4o1Nm4TZGUrbXtmJY8QV3QfaDbSLDnFQAAWLTxiQBCptoMHpoZnhgaujeWPo8UVzvG3nqsaGune9AgJ1aX69GLiv",
  "key21": "2xEQhc7cV8wqKQY5jXNxH5chHJmNJJ9J1V87gY3imWbwsEPBfsZ7W5QzwF2scKb5X4DTbDFktwHydV2Teg4LDTWb",
  "key22": "2X9EBSG3aATVm5XMN6K8shKuzLfdHdYKVCw29uW8TfapNMVfJcVpRGfwsF4Et9JWpuTmMHULxXTYUz6J8AxLG8vb",
  "key23": "4gKnYKQE5nTHqGmjswRP7bvwpgtNEMrt8ztz5HXrpDQwLS8aYneLU7zxVDnYrGP6RH96KCxkQLazDR8D1xQWFUNE",
  "key24": "48DQHjHqtDYycf5Q6EFA7WsBf63zdkTAv1aNn4sdfu91SsFFavsHUEhSLDU7btJguCgy4KKtFKdJB4rxgPSYRoHV",
  "key25": "5W6ZKGuwHRFhGRhhHUkwgy2REeowNXnaeDi7oA5LkNmhK71M83egiv1Dj7zjzx7ztwTmryedw9WdEyh1gpm1ToVo",
  "key26": "49a6qbojCXQLAf3G1wYedkf7xb6yYVYUDrscDs74Yw6U6JQwXSo2sPx5kefQ61cTbGe2dYxqRpnnRzXSbQLPNsfV",
  "key27": "4y1KDxV9dgo9iPSh3adZsi1G8RmmAKrHggYdLmMJu88BULJFTVttWuRXKxn8S381YDVWcBfghFunBxMVLQ27Wo9F",
  "key28": "3AfCwktrh8iuCx211QMkd47sLCRxppg2dnVCUhYeap6DFEvsrTPUqGLVaaUyxmKuqbUts3FqhToAG5CepYE572FT",
  "key29": "36rckBMLeRTuGNSggH1hoipkyFQeam12PuP3rQaSo51dmQDi5d5Mkni9U81gMkezVHm7KLY4jiZmSqGLSFrMH37D",
  "key30": "5QTVqkVaairgbPFPhMe2Q8dk26sGLSUTYoTfk4kWG9QqkELQWn3fCyYSE8yN9zvf8YQTSSNEhyTivEi4qTbqaHXN",
  "key31": "4rDbmTnqNMnEByg2NDhJzCdNMNf8wT7wNon2fT54bBEVDMf47ntUj2TqX4JvizjJo4RCtyeRU395T9JHWoedN4Xc",
  "key32": "5CDUh29BWVgQTQV9QkMP6bLmbC7KETZaVJYwC9M3yvXyHQ7BjhrPs8zkRUgyQQK5G8XtjKzkLzodKDgdd5Dv7udH",
  "key33": "4MpmXjPiMtWiw1HM8iYgJXnvBarcHvKjjju2PeWyxJL3Lnb4pigNafVegXKM7czHm1UB3iN59B9E5njrH9EwuF8F",
  "key34": "9K53ovQxmNDWzH1rXa26Kejwrkbs5ADEWb8HMY16cfXB4G8sw9D5Xjjxw9BE5KPgv7aRzus9KfH93JFGc7oNgGp",
  "key35": "2c4hjg5V8FdiYf2va1cWMvVi11yPjZPceNwX5bg6VZJE7NL1XM5s5nr7GfKgmiRwNZcie4SZpioECaW6vKrhgSTS"
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
