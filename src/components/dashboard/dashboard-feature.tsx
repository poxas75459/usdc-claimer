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
    "4zgYTtcGqAiPN97bUdGw4Qc19txr5Pa9NAZCnqb2sAWNNRWV956m7DJzHVERR6iBVRKQjRo94QY1PSgNG2A8EUtS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G1suxDiTpNB8PzXWh9ukhZEnwT2ZVqJGnJbu4gkY4H7yyRP3mGAAhysxzK89wd11YJxhxNbQqvWgN3cYjh7wQZF",
  "key1": "2g2S5Uq6GuGf4Hv6uQYEeHGWjqx4cd5epMLkikQs92dQMsQrYRLxNHTY83JmHfPCYQWH8VPsnTD9RezVXJXXFvbk",
  "key2": "2uMFvHn9hGp9VDbwqzfNxmRYAoMCL1xp2qzJKvTQg6b9k8qCFHY6CaNSSD7ArcayqLnfM9WZXcyUZmg25DFPFMUh",
  "key3": "2jAHhcNbqADyaW2XTLAnXNggWrgrxuJ7XVkg8U84LuWProeBa58pJ2d8HUb3NmnqrH3XtPWRkwCycjeS4TXYkpzg",
  "key4": "3j6va1UYKHF4mjWqHSSksaCrTUUa8KY8Gsf6UmkPUV6bNQEmPBLQX6oUm4Ph1PC19rBtcTurHPXiGWWgPbYh6G5C",
  "key5": "4nhhE4BggpL9GSGipN5Hq6Ars7aZVciJEJsZcDeUNQEaa6VS7SnGzG2PBEC6j6LVeRzzuwmcUcMARBqzKCF1wpSJ",
  "key6": "4MAFWyeomE2mpvFVtSRk6JzGdDKij5CGJvfFDL72DvnqZ7yqGi59nt53ULvh4xgNvDEtcw8yq2AU3JNAvfJXUFUg",
  "key7": "3yBqdxZRrpm2mwtEHdiaNDXiXCPVwF1vTUTuqgERKpC3czn31oQTnddxQ43fFbeAYiXtzSFbdJJX61hU6CTbyDLk",
  "key8": "2aUMn1R6Be51fTCeH1mdk1xrKi15kLKsdnyNUcRwBGYpagjUkSapyCAuLoHCuF8AJrzU2bpRpRguJLrHEgfvTS1q",
  "key9": "2PtuosuZE9gGVCjzrCc6egQr7nbubZUuJ73sghaTFj5swmwTPqbHy9oEiKkB5nERFsNYpMoRMYq5wadWhLHFtwVC",
  "key10": "5opXQ3S9jfPs19v7ET7vXe96LAdHPHv2RV6KLhkmUudxwmrbLZ351Ayr8MSwjCXrsCAEdYpUwsEAbt5yLxdSHeTU",
  "key11": "3aarrTFAZV7jPYWJJwsuXUJpxv77cBTsWaFe5BLG4J1qm3pdeTgREmfv9AKd9LeDWYai2Mm3N8QitSkZUqftdzXv",
  "key12": "3g1XLbHDfkhjajMasL7YpKsYrA5YLSbB5j4nZ9poR5XHLabyjnpYXciXf29BH8tQ44wzp3XAHBiY9EeePVuTD3Tw",
  "key13": "5vkCm47wqo46bFf9755qjj3GPEeh9pEfRAnMpEEFEz1bETWvTh2hdYhVQCDe3YH937DukPGvKpYzdfgkmQ2SPkSE",
  "key14": "3T2WMCcecKXNyz79fQpKMWitbhWGDTsWqgUFNg3QoFRShkdXU1mpgupC7nLSnjGUDAkZd2TKS6YFeNrzZV473VQU",
  "key15": "44ND1Y3ZfciciXdB69sjhft8ifNTZpTaHEYAaxbrUtmyCpCkXRU6rcQwGqQqmr3KGQGriHLPBY6qcTPNgkamJBTV",
  "key16": "XFn5Rr1kumuPar1Hw3JMHUkmGTQzLuHmNMedkTfVZWLbGAxWMtpsqb22zVok7i6wkaFwDHMrh4sJRpanhAHzzae",
  "key17": "4SQ3LWP6bwGaj7yt2nrb1EyocSVfg3usuMNeYqCCqYC9hQLYBtXqopfsPhFMLJNHTfFLmk3vtSY6vSPuhRoUsUtp",
  "key18": "5g4oEGYuATFYZVHPo293uKHLTomNEXN7fXDu3U2X1idyRGiXPM183wpFdLtfZ82uoxG87VAuMffurkv4XQguvW6U",
  "key19": "3JD2efwSrSJ2p8uFRw6haVamuzh7HEQqxsNRp3BCvtPxuWxPXbXrhLvKFmGE8eiJkhvWfbzvXUUEwqnAmQYkx9JU",
  "key20": "E1oAkwp8AgtMXZHQCD4xEgRyapAPX9YVAk7Psz36LFvc7b7c6oBsAecEchKzD14uZ2dKYwQRgGQBNnGrFdTvdSf",
  "key21": "3aNUh9Kn4KxMtCuvn36CXm9woqkBxjYcXwN7Kr3od41YrFyRMy8kDM5UxjoqZgTthD769MKiWMB8NmS336m18Cn",
  "key22": "YaiAYDseVsvby3yU4VDHujWfVbkQuAnBYJ81RSfoSR7bqtRdYiHe2ySfiRhFFNWW6r21BoKXdC55EsubgS5o38B",
  "key23": "cB36S6wzRoTgG9SXajZPmKwfxSNG2a865MGLj2JX48mJrF8PvnaLDXExfzaiLFpGi9GRppL6kWVJg3UZhbMQaPj",
  "key24": "2oXPqUrKVc3NqcCMc6cVFWT9Uv1CSNZhRVWWPtgzH5S532Pv9g2Udjq2LAfHoE7sLoixAHYqYLFWcZmoqMYqemGB",
  "key25": "5HiSrAZp27S92AgEQzABVWrW3rfmNAGpDBnibNDPDRQJDiBvR5qvDGgSyEif4aAw6a3rvpca9Fkxbw8iq5dNga7j",
  "key26": "62HfKRTQPUYqrJGw6x6byGNPibAwPr6BWS2fpf75eXX3BnjfkGeAuXDqdkUd3jybNy7y2ppFCJTnfds61itvKFkQ",
  "key27": "5JRsWNhSRGF9hPd41Y1Eb514hoEBd6etYfhqyPjWG2G6YxkxS39Y2PXtSXkAgo5LNSiPaMywnCJW8fzKBnPP6Dm8",
  "key28": "3jte33PQFrmk6qjqoK8jBh34HKF55Egi8EMXyFMm7wPQ6r7yaGAJ4U5dx9uqmWr4vKwCLmQ4o1zhTmT5yVAJZjmK",
  "key29": "48zTnAxqAvh9XNq9xngwScv3UM9aopxKoNTuNgrKKysmLPt1DiHh7degT7GEsbmsnXhXHsZhPzd7qWSq6DknRpqP",
  "key30": "2yAfuECVJqKPFHioEASsy37bo8uXBwxhtVbhEyy88c5XD4DqARmQuyrRLU9PXEbJa1o6merPkAZRe4oUhGUJc5qg",
  "key31": "4eSoyPjXge5E5fDG7Hgzj8wcP4Li1Z8ahFLqbNiuqvcNkxmi4EhkYoD3ZNuTLaGa9bMP68ZouWQRcb67D715Hkk1",
  "key32": "aETpf1gkAoW5bQmiSs9GBFT7n8yWRBxPgyTDfpecSYQjQFJRZoacgcCeekvh41CA2HgRBR1qawUr3kmFq7PjaEn",
  "key33": "VV5DC8BRRGHN9bas521twaHS3URs4JaXZ8QqqsZ57WRBv4fkAYne4RRrgSz2FrvYBieJNbyYb1XGzTXA1XaENAo",
  "key34": "NS81gfnFAVEgiCzWWppEXAeRe8K8vhNWs2gCx6KBxuUrwPEv1q32HyHgy5XMxA7hmQNUXJZjMEJ1fbrmAXban7N",
  "key35": "5HBiJrxnwugetLavEZ6iRGY3W653KL1VptgRYQM7Zc1M4qoGJcGEVxku9CpE691fmrxKznYk8zfDrwxLwPWUrj9a",
  "key36": "ZqmQCxxF7QkkVKAhcGQ6oK54pYd8UU8fJHWZ6V7dZR9uWZzEoXSvgpXQT1b6E1FmMyqbDrVWbsSvznSve8k8mRZ"
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
